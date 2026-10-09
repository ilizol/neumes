(function (jsPDFAPI)
{
    var fontCache = {};

    function decodeBase64(base64)
    {
        var binary = atob(base64);
        var bytes = new Uint8Array(binary.length);
        for (var i = 0; i < binary.length; i++)
        {
            bytes[i] = binary.charCodeAt(i);
        }
        return bytes;
    }

    function getFont(harfbuzz, api)
    {
        var font = api.internal.getFont();
        var key = font.postScriptName;
        if (fontCache[key])
        {
            return fontCache[key];
        }
        if (!api.existsFileInVFS(key))
        {
            return null;
        }
        var blob = new harfbuzz.Blob(decodeBase64(api.getFileFromVFS(key)));
        var face = new harfbuzz.Face(blob, 0);
        var shapedFont = new harfbuzz.Font(face);
        fontCache[key] = shapedFont;
        return shapedFont;
    }

    function setMarkColor(api, color)
    {
        if (Array.isArray(color) && color.length >= 3)
        {
            api.setTextColor(color[0], color[1], color[2]);
        }
        else if (color && typeof color === 'object' && color.r !== undefined)
        {
            api.setTextColor(color.r, color.g, color.b);
        }
        else if (typeof color === 'string')
        {
            api.setTextColor(color);
        }
    }

    jsPDFAPI.textWithOpenTypeMarks = function (baseText, marks, x, y, options)
    {
        var harfbuzz = window.neumesHarfBuzz;
        var markText = (marks || []).map(function (mark)
        {
            return mark.mark;
        }).join('');
        if (!harfbuzz || !marks || !marks.length)
        {
            console.warn('HarfBuzz shaping is unavailable or no marks provided, falling back to standard text rendering.');
            return this.text(baseText + markText, x, y, options);
        }

        var font = getFont(harfbuzz, this);
        if (!font)
        {
            console.warn('Failed to get shaped font, falling back to standard text rendering.');
            return this.text(baseText + markText, x, y, options);
        }

        var buffer = new harfbuzz.Buffer();
        buffer.addText(baseText + markText);
        buffer.guessSegmentProperties();
        harfbuzz.shape(font, buffer);

        var positions = buffer.getGlyphPositions();
        var scale = this.internal.getFontSize() / font.face.upem;
        var baseGlyphCount = baseText.length;
        var advance = 0;
        for (var baseIndex = 0; baseIndex < baseGlyphCount; baseIndex++)
        {
            advance += positions[baseIndex].xAdvance;
        }
        this.text(baseText, x, y, options);
        for (var i = 0; i < marks.length; i++)
        {
            var position = positions[baseGlyphCount + i];
            if (!position)
            {
                break;
            }
            setMarkColor(this, marks[i].color);
            this.text(
                marks[i].mark,
                x + (advance + position.xOffset) * scale,
                y - position.yOffset * scale,
                options
            );
            advance += position.xAdvance;
        }
        return this;
    };
})(jsPDF.API);