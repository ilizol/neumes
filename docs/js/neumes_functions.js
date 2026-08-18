function setFont(type)
{
    var stroke = false;
    var color = "black";
    //### HEADER ###
    if (type == 'header')
    {
        doc.setFont(headerFont);
        doc.setFontSize(headerFontSize);
        color = headerFontColor;
    }
    //### HEADER 2 ###
    else if (type == 'header2')
    {
        doc.setFont(header2Font);
        doc.setFontSize(header2FontSize);
        color = header2FontColor;
    }
    //### HEADER 3 ###
    else if (type == 'header3')
    {
        doc.setFont(header3Font);
        doc.setFontSize(header3FontSize);
        color = header3FontColor;
    }
    //### HEADER 4 ###
    else if (type == 'header4')
    {
        doc.setFont(header4Font);
        doc.setFontSize(header4FontSize);
        color = header4FontColor;
    }
    //### TITLE ###
    else if (type == 'title')
    {
        doc.setFont(titleFont);
        doc.setFontSize(titleFontSize);
        color = titleFontColor;
    }
    //### TITLE 2 ###
    else if (type == 'title2')
    {
        doc.setFont(title2Font);
        doc.setFontSize(title2FontSize);
        color = title2FontColor;
    }
    //### DROPCAPS ###
    else if (type == 'dropcaps')
    {
        doc.setFont(dropcapsFont);
        doc.setFontSize(dropcapsFontSize);
        color = dropcapsFontColor;
    }
    //### NEUMES ###
    else if (type == 'neumes')
    {
        stroke = musicFontStroke;
        doc.setFont(neumesFont);
        doc.setFontSize(neumesFontSize);
        color = neumesFontColor;
    }
    //### NEUMES TITLE ###
    else if (type == 'neumes_title')
    {
        stroke = musicFontStroke;
        doc.setFont(neumesFont);
        doc.setFontSize(neumesFontSize);
        color = titleFontColor;
    }
    //### MARTYRIA ###
    else if (type == 'martyria')
    {
        stroke = musicFontStroke;
        doc.setFont(martyriaFont);
        doc.setFontSize(martyriaFontSize);
        color = martyriaFontColor;
    }
    //### MARTYRIA DIASTOLE ###
    else if (type == 'martyria_diastole')
    {
        stroke = musicFontStroke;
        doc.setFont(martyriaFont);
        doc.setFontSize(martyriaFontSize);
        color = neumesFontColor;
    }
    //### MARTYRIA FTHORA ###
    else if (type == 'martyria_fthora')
    {
        stroke = musicFontStroke;
        doc.setFont(fthoraFont);
        doc.setFontSize(martyriaFontSize);
        color = martyriaFontColor;
    }
    //### FTHORA ###
    else if (type == 'fthora')
    {
        stroke = musicFontStroke;
        doc.setFont(fthoraFont);
        doc.setFontSize(fthoraFontSize);
        color = fthoraFontColor;
    }
    //### FTHORA INFO ###
    else if (type == 'fthoraInfo')
    {
        stroke = musicFontStroke;
        doc.setFont(fthoraInfoFont);
        doc.setFontSize(fthoraInfoFontSize);
        color = fthoraInfoFontColor;
    }
    //### ISON ###
    else if (type == 'ison')
    {
        doc.setFont(isonFont);
        doc.setFontSize(isonFontSize);
        color = isonFontColor;
    }
    //### RYTHM ###
    else if (type == 'rythm')
    {
        doc.setFont(rythmFont);
        doc.setFontSize(rythmFontSize);
        color = rythmFontColor;
    }
    //### ASTERISK ###
    else if (type == 'asterisk')
    {
        doc.setFont(asteriskFont);
        doc.setFontSize(asteriskFontSize);
        color = asteriskFontColor;
    }
    //### BREATH ###
    else if (type == 'breath')
    {
        stroke = musicFontStroke;
        doc.setFont(breathFont);
        doc.setFontSize(breathFontSize);
        color = breathFontColor;
    }
    //### OLD ###
    else if (type == 'old')
    {
        stroke = musicFontStroke;
        doc.setFont(oldFont);
        doc.setFontSize(oldFontSize);
        color = oldFontColor;
    }
    //### SPECIAL ###
    else if (type == 'special')
    {
        stroke = musicFontStroke;
        doc.setFont(specialFont);
        doc.setFontSize(specialFontSize);
        color = specialFontColor;
    }
    //### CHRONOS ###
    else if (type == 'chronos')
    {
        stroke = musicFontStroke;
        doc.setFont(chronosFont);
        doc.setFontSize(chronosFontSize);
        color = chronosFontColor;
    }
    //### QUALITY ###
    else if (type == 'quality')
    {
        stroke = musicFontStroke;
        doc.setFont(qualityFont);
        doc.setFontSize(qualityFontSize);
        color = qualityFontColor;
    }
    //### ETERON ###
    else if (type == 'eteron')
    {
        stroke = musicFontStroke;
        doc.setFont(eteronFont);
        doc.setFontSize(eteronFontSize);
        color = eteronFontColor;
    }
    //### LYRICS ###
    else if (type == 'lyrics')
    {
        doc.setFont(lyricsFont);
        doc.setFontSize(lyricsFontSize);
        color = lyricsFontColor;
    }
    //### COLOR ###
    //### RED ###
    if (color == 'red')
    {
        colorRGB = redRGB;
    }
    else
    {
        colorRGB = blackRGB;
    }
    doc.setTextColor(colorRGB[0], colorRGB[1], colorRGB[2]);
    doc.setDrawColor(colorRGB[0], colorRGB[1], colorRGB[2]);
    return stroke;
}

function writeText(text, offsetX)
{
    (typeof offsetX == 'undefined') ? offsetX = 0 : null;
    var textF = text.f;
    var textX = text.x + offsetX;
    var textY = text.y;
    var textT = text.t;
    var stroke = setFont(textF);
    /*
    doc.text(
        textX,
        textY,
        textT
    );
    */
    if (stroke)
    {
        doc.text(
            textT,
            textX,
            textY,
            {
                renderingMode: 'fillThenStroke'
            }
        );
    }
    else
    {
        doc.text(
            textX,
            textY,
            textT
        );
    }
    /* TODO
     @param {string} [options.renderingMode=fill] - Set how the text should be rendered, possible values: fill, stroke, fillThenStroke, invisible, fillAndAddForClipping, strokeAndAddPathForClipping, fillThenStrokeAndAddToPathForClipping, addToPathForClipping.
     
    var text = API.__private__.text = API.text = function (text, x, y, options)
    */
}

function writeTexts(texts, offsetX)
{
    (typeof offsetX == 'undefined') ? offsetX = 0 : null;
    texts.forEach(function (t)
    {
        writeText(t, offsetX);
    });
}

function writeLineTexts(lineTexts, availSpace, alignment)
{
    (typeof alignment == 'undefined') ? alignment = 'justify' : null;
    var offsetX = 0;
    var lineElements = lineTexts.length;
    if (!lineElements)
    {
        return false;
    }
    //TODO check this
    var lastTexts = lineTexts[lineElements - 1];
    //alert(lastTexts[0].t);
    //alert(lineElements);
    if (lastTexts[0].t == ' ')
    {
        lineElements--;
        lineTexts.pop();
        setFont('neumes');
        var wsWidth = doc.getTextWidth(" ");
        availSpace += wsWidth;
        //alert(lineElements);
    }
    if (availSpace > 0)
    {
        // justify
        if (alignment == 'justify')
        {
            offsetX = availSpace / (lineElements - 1);
        }
        // center
        else if (alignment == 'center')
        {
            offsetX = availSpace / 2;
        }
        // right
        else if (alignment == 'right')
        {
            offsetX = availSpace;
        }
    }
    lineTexts.forEach(function (t, i)
    {
        // justify
        if (alignment == 'justify')
        {
            writeTexts(t, i * offsetX);
        }
        else
        {
            writeTexts(t, offsetX);
        }
    });
}

function writeLineNum(lineNumY, lineNum)
{
    var lineNumX = 2;
    writeText({
        f: 'lyrics',
        x: lineNumX,
        y: lineNumY,
        t: lineNum.toString()
    });
}

function writePageNum(pageNumY, pageNum)
{
    var pageWidth = doc.internal.pageSize.width;
    var pageHeight = doc.internal.pageSize.height;
    //TODO change this
    var pageNumX = pageWidth - 35;
    // var pageNumX = pageWidth - 25;
    // var pageNumX = pageWidth - 15;
    var pageNumY = pageHeight - 25;
    // var pageNumY = pageHeight - 15;
    // var pageNumY = pageHeight - 5;
    writeText({
        //f: 'lyrics',
        f: 'ison',
        x: pageNumX,
        y: pageNumY,
        t: pageNum.toString()
    });
}

function writeAvailSpace(availSpaceY, availSpace)
{
    var pageWidth = doc.internal.pageSize.width;
    var availSpaceX = pageWidth - 20;
    writeText({
        f: 'lyrics',
        x: availSpaceX,
        y: availSpaceY,
        t: availSpace.toString()
    });
}
