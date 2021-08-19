var pageFormat = 'a4';
var doc = new jsPDF(
    'p', 'pt', pageFormat
);

//var height = doc.internal.getLineHeight();
//alert(height);

//var dim = doc.getTextDimensions("test");
//alert(dim);

//### HEADER
var headerFont = "Alegreya-Bold";
//### HEADER 2
var header2Font = "Alegreya-Medium";
//### HEADER 3
var header3Font = "Alegreya-Medium";
//### HEADER 4
var header4Font = "Alegreya-Medium";
//### TITLE
//var titleFont = "Alegreya-MediumItalic";
var titleFont = "Alegreya-Medium";
//### TITLE 2
var title2Font = "Alegreya-Medium";
//### DROPCAPS
//var dropcapsFont = "Alegreya-BoldItalic";
var dropcapsFont = "Alegreya-Bold";
//### MUSIC FONT FAMILY
//var musicFontFamily = "KANewStathis";
var musicFontFamily = "KAAlmouzios";
//### NEUMES
var neumesFont = musicFontFamily + "Main-Regular";
//### FTHORA
var fthoraFont = musicFontFamily + "Fthora-Regular";
//### FTHORA INFO
var fthoraInfoFont = musicFontFamily + "Fthora-Regular";
//### CHRONOS
var chronosFont = musicFontFamily + "Chronos-Regular";
//### QUALITY
var qualityFont = musicFontFamily + "Main-Regular";
//### ETERON
var eteronFont = musicFontFamily + "Main-Regular";
//### OLD
var oldFont = musicFontFamily + "Archaia-Regular";
//### MARTYRIA
var martyriaFont = musicFontFamily + "Martyria-Regular";
//### ISON
//var isonFont = "Alegreya-BoldItalic";
var isonFont = "Alegreya-Bold";
//var isonFont = "Alegreya-Medium";
//### RYTHM
//var rythmFont = "Alegreya-MediumItalic";
var rythmFont = "Alegreya-Medium";
//### ASTERISK
var asteriskFont = "NotoSansSymbols2-Regular";
//### BREATH
var breathFont = musicFontFamily + "Main-Regular";
//### SPECIAL
var specialFont = musicFontFamily + "Combo-Regular";
//### LYRICS
//var lyricsFont = "Alegreya-MediumItalic";
var lyricsFont = "Alegreya-Medium";

//### DEFAULT SIZES
var hFS = 18;
var h2FS = 18;
//var h3FS = 40;
//TODO change this
var h3FS = 26;
// var h3FS = 24;
//var h4FS = 26;
var h4FS = 18;
var tFS = 16;
var t2FS = 14;
var dFS = 40;
//var dFS = 26;
var nFS = 30;
//var nFS = 30;
var eFS = nFS;
//var iFS = 10;
var iFS = 12;
// ISON PARENTHESIS
var iPar = 1;
//var iFS = 0;
var rFS = 9;
//var rFS = 0;
var aFS = tFS;
//var aFS = 0;
var bFS = nFS;
//var bFS = 0;
var lFS = 16;
//var lFS = 0;
var sFS = 30;
var headerFontSize = hFS;
var header2FontSize = h2FS;
var header3FontSize = h3FS;
var header4FontSize = h4FS;
var titleFontSize = tFS;
var title2FontSize = t2FS;
var dropcapsFontSize = dFS;
var neumesFontSize = nFS;
var fthoraFontSize = nFS;
var fthoraInfoFontSize = nFS;
var chronosFontSize = nFS;
var qualityFontSize = nFS;
var eteronFontSize = eFS;
var martyriaFontSize = nFS;
var isonFontSize = iFS;
var rythmFontSize = rFS;
var asteriskFontSize = aFS;
var breathFontSize = bFS;
var oldFontSize = nFS;
var specialFontSize = sFS;
var lyricsFontSize = lFS;

//### DEFAULT COLORS
//### BLACK
var blackRGB = [0, 0, 0]; // #000000
//### RED
//var redRGB = [187, 0, 14]; // #bb000e
var redRGB = [128, 0, 0]; // #800000

var hFC = "black";
var h2FC = "black";
var h3FC = "black";
var h4FC = "black";
var tFC = "red";
var t2FC = "red";
var dFC = "red";
var nFC = "black";
var fFC = "red";
var fiFC = "red";
var cFC = "red";
var qFC = "black";
var eFC = "red";
var mFC = "red";
var iFC = "red";
var rFC = "black";
var aFC = "red";
var bFC = "red";
var oFC = "black";
var lFC = "black";
var sFC = "black";
var headerFontColor = hFC;
var header2FontColor = h2FC;
var header3FontColor = h3FC;
var header4FontColor = h4FC;
var titleFontColor = tFC;
var title2FontColor = t2FC;
var dropcapsFontColor = dFC;
var neumesFontColor = nFC;
var fthoraFontColor = fFC;
var fthoraInfoFontColor = fiFC;
var chronosFontColor = cFC;
var qualityFontColor = qFC;
var eteronFontColor = eFC;
var martyriaFontColor = mFC;
var isonFontColor = iFC;
var rythmFontColor = rFC;
var asteriskFontColor = aFC;
var breathFontColor = bFC;
var oldFontColor = oFC;
var specialFontColor = sFC;
var lyricsFontColor = lFC;

//### DEFAULT LAYOUT
var startX = 46;
//var startX = 5;
var startY = 46;
//var startY = 25;
//var startY = 64;
var charSpace = 0;
//var isonDistance = 20;
var isonDistance = 16;
var rythmDistance = 10;
var lyricsDistance = 26;
//var lyricsDistance = 10;
var lineDistance = 60;
//var lineDistance = 65;

//### BASIC VARIABLES
var hasPageNum = false;
// var pageNum = 1;
var pageNum = -1; // ignore first 2 pages
var pageWidth = doc.internal.pageSize.width;
var pageHeight = doc.internal.pageSize.height;
var ngX = startX;
var ngY = startY;
var currentX = ngX;
var ngWidth = 0;
var texts = [];
var textsAfter = [];
var lineTexts = [];
var lineNum = 1;
var ngLength = neumes.length;
//### LINE NUMBER ###
//writeLineNum(
//  ngY,
//  lineNum
//);
if (hasPageNum && pageNum > 0)
{
    //### PAGE NUMBER ###
    writePageNum(
        ngY,
        pageNum
    );
}

neumes.forEach(function (ng, i)
{
    ngWidth = 0;
    texts = [];
    textsAfter = [];

    //### HEADER ###
    if (ng.h)
    {
        setFont('header');
        var hWidth = doc.getTextWidth(ng.h);
        ngWidth += hWidth;
    }
    //### HEADER 2 ###
    if (ng.h2)
    {
        setFont('header2');
        var h2Width = doc.getTextWidth(ng.h2);
        ngWidth += h2Width;
    }
    //### HEADER 3 ###
    if (ng.h3)
    {
        setFont('header3');
        var h3Width = doc.getTextWidth(ng.h3);
        ngWidth += h3Width;
    }
    //### HEADER 4 ###
    if (ng.h4)
    {
        setFont('header4');
        var h4Width = doc.getTextWidth(ng.h4);
        ngWidth += h4Width;
    }
    //### TITLE ###
    if (ng.t)
    {
        setFont('title');
        var tWidth = doc.getTextWidth(ng.t);
        var tHeight = doc.internal.getLineHeight();
        ngWidth += tWidth;
    }
    //### TITLE 2 ###
    if (ng.t2)
    {
        setFont('title2');
        var t2Width = doc.getTextWidth(ng.t2);
        var t2Height = doc.internal.getLineHeight();
        ngWidth += t2Width;
    }
    //### TITLE LOWER ###
    if (ng.tl)
    {
        setFont('title');
        var tlWidth = doc.getTextWidth(ng.tl);
        var tlHeight = doc.internal.getLineHeight();
        ngWidth += tlWidth;
    }
    //### DROPCAPS ###
    if (ng.d)
    {
        setFont('dropcaps');
        var dWidth = doc.getTextWidth(ng.d);
        ngWidth += dWidth;
    }
    //### MARTYRIA ###
    if (ng.m)
    {
        setFont('martyria');
        var mWidth = doc.getTextWidth(ng.m);
        ngWidth += mWidth;
    }
    //### MARTYRIA NARROW ###
    if (ng.mn)
    {
        setFont('martyria');
        var mnWidth = doc.getTextWidth(ng.mn) / 1.5;
        ngWidth += mnWidth;
    }
    //### MARTYRIA RIGHT ###
    if (ng.mr)
    {
        setFont('martyria');
        var mrWidth = doc.getTextWidth(ng.mr);
        ngWidth += mrWidth;
    }
    //### MARTYRIA UPPER ###
    if (ng.mu)
    {
        setFont('martyria');
        var muWidth = doc.getTextWidth(ng.mu);
        ngWidth += muWidth;
    }
    //### MARTYRIA UPPER 2 ###
    if (ng.mu2)
    {
        setFont('martyria');
        var mu2Width = doc.getTextWidth(ng.mu2);
        ngWidth += mu2Width;
    }
    //### ASTERISK ###
    if (ng.a && aFS)
    {
        setFont('asterisk');
        var aWidth = doc.getTextWidth(ng.a);
        ngWidth += aWidth;
    }
    //### BREATH ###
    if (ng.b && bFS)
    {
        setFont('breath');
        var bWidth = doc.getTextWidth(ng.b);
        ngWidth += bWidth;
    }
    //### BREATH NARROW ###
    if (ng.bn && bFS)
    {
        setFont('breath');
        var bnWidth = doc.getTextWidth(ng.bn) / 2;
        ngWidth += bnWidth;
    }
    //### WORD BREAK ###
    if (ng.br == 'wd')
    {
        setFont('neumes');
        var wsWidth = doc.getTextWidth(" ");
        ngWidth += wsWidth;
    }
    //### ISON ###
    if (ng.i && iFS && iPar)
    {
        ng.i = '(' + ng.i + ')';
    }
    //### ISON RIGHT ###
    if (ng.ir && iFS && iPar)
    {
        ng.ir = '(' + ng.ir + ')';
    }
    //### ISON UPPER ###
    if (ng.iu && iFS && iPar)
    {
        ng.iu = '(' + ng.iu + ')';
    }
    //### ISON RIGHT UPPRER ###
    if (ng.iru && iFS && iPar)
    {
        ng.iru = '(' + ng.iru + ')';
    }
    //### ISON AFTER (2) ###
    if (ng.i2 && iFS && iPar)
    {
        ng.i2 = '(' + ng.i2 + ')';
    }
    //### NEUMES LOWER ###
    if (ng.nl)
    {
        setFont('neumes');
        var nlWidth = doc.getTextWidth(ng.nl);
        ngWidth += nlWidth;
    }
    //### NEUMES LOWER 2 ###
    if (ng.nl2)
    {
        setFont('neumes');
        var nl2Width = doc.getTextWidth(ng.nl2);
        ngWidth += nl2Width;
    }
    //### NEUMES LOWER 3 ###
    if (ng.nl3)
    {
        setFont('neumes');
        var nl3Width = doc.getTextWidth(ng.nl3);
        ngWidth += nl3Width;
    }
    //### NEUMES ###
    if (ng.n)
    {
        setFont('neumes');
        // if (keys[ng.n])
        // {
        //     ng.n = keys[ng.n];
        // }
        var nWidth = doc.getTextWidth(ng.n);
        ngWidth += nWidth;
        ngWidth += charSpace;
        //### NEUMES BEFORE ###
        if (ng.nb)
        {
            setFont('neumes');
            // if (keys[ng.nb])
            // {
            //     ng.nb = keys[ng.nb];
            // }
            var nbWidth = doc.getTextWidth(ng.nb);
            ngWidth += nbWidth;
        }
        //### VARIA ###
        if (ng.v)
        {
            setFont('quality');
            var vWidth = doc.getTextWidth(ng.v);
            ngWidth += vWidth;
        }
        //### NEUMES AFTER (2) ###
        if (ng.n2)
        {
            setFont('neumes');
            // if (keys[ng.n2])
            // {
            //     ng.n2 = keys[ng.n2];
            // }
            var n2Width = doc.getTextWidth(ng.n2);
            ngWidth += n2Width;
            ngWidth += charSpace;
        }
    }
    //### LYRICS ###
    if (ng.l && lFS)
    {
        setFont('lyrics');
        var lWidth = doc.getTextWidth(ng.l);
    }
    //### LYRICS AFTER (2) ###
    if (ng.l2 && lFS)
    {
        setFont('lyrics');
        var l2Width = doc.getTextWidth(ng.l2);
    }
    var endX = ngX + ngWidth;
    var endY = ngY + lyricsDistance;
    if (
        ng.br == 'ln' ||
        ng.br == 'pg'
    )
    {
        //### LINE TEXTS ###
        writeLineTexts(
            lineTexts,
            0
        );
    }
    if (
        ng.br == 'ln2' ||
        ng.br == 'ln3' ||
        ng.br == 'ln4'
    )
    {
        var alignment = 'center';
        if (ng.al)
        {
            alignment = ng.al;
        }
        var availSpace = pageWidth - startX - ngX;
        //### AVAIL SPACE ###
        //writeAvailSpace(ngY, availSpace);
        if (availSpace > 0)
        {
            //### LINE TEXTS ###
            writeLineTexts(
                lineTexts,
                availSpace,
                alignment
            );
        }
    }
    // line break
    if (
        ng.br == 'ln' ||
        ng.br == 'ln2' ||
        ng.br == 'ln3' ||
        ng.br == 'ln4' ||
        endX > pageWidth - startX
    )
    {
        if (endX > pageWidth - startX)
        {
            var availSpace = pageWidth - startX - ngX;
            //### AVAIL SPACE ###
            //writeAvailSpace(ngY, availSpace);
            if (availSpace > 0)
            {
                //### LINE TEXTS ###
                writeLineTexts(
                    lineTexts,
                    availSpace
                );
            }
            lineTexts = [];
        }
        ngX = startX;
        if (ng.br == 'ln2')
        {
            ngY += tFS * 1.3;
        }
        else if (ng.br == 'ln3')
        {
            ngY += tFS * 1.4;
        }
        else if (ng.br == 'ln4')
        {
            ngY += tFS * 2;
        }
        else
        {
            ngY += lineDistance;
        }
        endX = ngX + ngWidth;
        endY = ngY + lyricsDistance;
    }
    // page break
    if (
        ng.br == 'pg' ||
        //endY > pageHeight - startY
        endY > pageHeight - startY / 2
        //endY > pageHeight
    )
    {
        doc.addPage();
        pageNum++;
        ngX = startX;
        ngY = startY;
        if (hasPageNum && pageNum > 0)
        {
            //### PAGE NUMBER ###
            writePageNum(
                ngY,
                pageNum
            );
        }
    }
    if (
        ng.br == 'ln' ||
        ng.br == 'ln2' ||
        ng.br == 'ln3' ||
        ng.br == 'ln4' ||
        ng.br == 'pg'
    )
    {
        lineNum++;
        //### LINE NUMBER ###
        // writeLineNum(
        //     ngY,
        //     lineNum
        // );
        lineTexts = [];
    }
    currentX = ngX;
    //### HEADER ###
    if (ng.h)
    {
        texts.push({
            f: 'header',
            x: ngX,
            y: ngY,
            t: ng.h
        });
    }
    //### HEADER 2 ###
    if (ng.h2)
    {
        texts.push({
            f: 'header2',
            x: ngX,
            y: ngY,
            t: ng.h2
        });
    }
    //### HEADER 3 ###
    if (ng.h3)
    {
        texts.push({
            f: 'header3',
            x: ngX,
            y: ngY,
            t: ng.h3
        });
    }
    //### HEADER 4 ###
    if (ng.h4)
    {
        texts.push({
            f: 'header4',
            x: ngX,
            y: ngY,
            t: ng.h4
        });
    }
    //### TITLE ###
    if (ng.t)
    {
        texts.push({
            f: 'title',
            x: ngX,
            y: ngY,
            t: ng.t
        });
    }
    //### TITLE 2 ###
    if (ng.t2)
    {
        texts.push({
            f: 'title2',
            x: ngX,
            y: ngY,
            t: ng.t2
        });
    }
    //### TITLE LOWER ###
    if (ng.tl)
    {
        //ngY + lyricsDistance / 2.2
        //ngY + tlHeight / 4
        texts.push({
            f: 'title',
            x: ngX,
            y: ngY + lyricsDistance / 3,
            t: ng.tl
        });
    }
    //### DROPCAPS ###
    if (ng.d)
    {
        texts.push({
            f: 'dropcaps',
            x: ngX,
            y: ngY + lyricsDistance,
            t: ng.d
        });
    }
    //### WORD BREAK ###
    if (ng.br == 'wd')
    {
        //TODO check this
        if (
            ngX > startX &&
            ngX + wsWidth < pageWidth - startX
        )
        {
            texts.push({
                f: 'neumes',
                x: ngX,
                y: ngY,
                t: ' '
            });
            //ngWidth += wsWidth;
        }
        else
        {
            ngWidth -= wsWidth;
        }
    }
    //### NEUMES LOWER ###
    if (ng.nl)
    {
        // if (keys[ng.nl])
        // {
        //     ng.nl = keys[ng.nl];
        // }
        var font = 'neumes';
        if (ng.font)
        {
            font = ng.font;
        }
        texts.push({
            f: font,
            x: ngX,
            y: ngY + lyricsDistance / 3,
            t: ng.nl
        });
    }
    //### NEUMES LOWER 2 ###
    if (ng.nl2)
    {
        // if (keys[ng.nl2])
        // {
        //     ng.nl2 = keys[ng.nl2];
        // }
        var font = 'neumes';
        if (ng.font)
        {
            font = ng.font;
        }
        texts.push({
            f: font,
            x: ngX,
            y: ngY + lyricsDistance / 4,
            t: ng.nl2
        });
    }
    //### NEUMES LOWER 3 ###
    if (ng.nl3)
    {
        // if (keys[ng.nl3])
        // {
        //     ng.nl3 = keys[ng.nl3];
        // }
        var font = 'neumes';
        if (ng.font)
        {
            font = ng.font;
        }
        texts.push({
            f: font,
            x: ngX,
            y: ngY + lyricsDistance / 1.15,
            t: ng.nl3
        });
    }
    //### NEUMES ###
    if (ng.n)
    {
        var lxOffset = 0;
        //### NEUMES BEFORE ###
        if (ng.nb)
        {
            texts.push({
                f: 'neumes',
                x: currentX,
                y: ngY,
                t: ng.nb
            });
            lxOffset += nbWidth;
            currentX += nbWidth;
        }
        //### VARIA ###
        if (ng.v)
        {
            setFont('quality');
            texts.push({
                f: 'quality',
                x: currentX,
                y: ngY,
                t: ng.v
            });
            lxOffset += vWidth;
            currentX += vWidth;
        }
        //### BREATH UPPER ###
        if (ng.bu && bFS)
        {
            setFont('breath');
            var buHeight = doc.internal.getLineHeight();
            var xOffset = nWidth / 4;
            var yOffset = buHeight / 3.5;
            texts.push({
                f: 'breath',
                x: currentX - xOffset,
                y: ngY - yOffset,
                t: ng.bu
            });
        }
        //### BREATH UPPER 2 ###
        if (ng.bu2 && bFS)
        {
            setFont('breath');
            var bu2Height = doc.internal.getLineHeight();
            var xOffset = nWidth / 5;
            var yOffset = bu2Height / 2.5;
            texts.push({
                f: 'breath',
                x: currentX - xOffset,
                y: ngY - yOffset,
                t: ng.bu2
            });
        }
        //### RYTHM ###
        if (ng.r && rFS)
        {
            texts.push({
                f: 'rythm',
                x: currentX,
                y: ngY - rythmDistance,
                t: ng.r
            });
        }
        //### RYTHM UPPER ###
        if (ng.ru && rFS)
        {
            setFont('rythm');
            var ruHeight = doc.internal.getLineHeight();
            var yOffset = ruHeight / 6;
            texts.push({
                f: 'rythm',
                x: currentX,
                y: ngY - rythmDistance - yOffset,
                t: ng.ru
            });
        }
        //### ISON ###
        if (ng.i && iFS)
        {
            texts.push({
                f: 'ison',
                x: currentX,
                y: ngY - isonDistance,
                t: ng.i
            });
        }
        //### ISON UPPER ###
        if (ng.iu && iFS)
        {
            setFont('ison');
            var iuHeight = doc.internal.getLineHeight();
            var yOffset = iuHeight / 6;
            texts.push({
                f: 'ison',
                x: currentX,
                y: ngY - isonDistance - yOffset,
                t: ng.iu
            });
        }
        //### FTHORA INFO ###
        if (ng.fi)
        {
            texts.push({
                f: 'fthoraInfo',
                x: currentX,
                y: ngY,
                t: ng.fi
            });
        }
        //### FTHORA ###
        if (ng.f)
        {
            texts.push({
                f: 'fthora',
                x: currentX,
                y: ngY,
                t: ng.f
            });
        }
        //### NEUMES MIDDLE ###
        if (ng.nm)
        {
            // if (keys[ng.nm])
            // {
            //     ng.nm = keys[ng.nm];
            // }
            //var xOffset = nWidth / 1.1;
            var xOffset = nWidth / 1.075;
            texts.push({
                f: 'neumes',
                x: currentX + xOffset,
                y: ngY,
                t: ng.nm
            });
        }
        //### FTHORA MIDDLE ###
        if (ng.fm)
        {
            var xOffset = nWidth / 6;
            texts.push({
                f: 'fthora',
                x: currentX - xOffset,
                y: ngY,
                t: ng.fm
            });
        }
        //### FTHORA UPPER ###
        if (ng.fu)
        {
            setFont('fthora');
            var fHeight = doc.internal.getLineHeight();
            var yOffset = fHeight / 18;
            texts.push({
                f: 'fthora',
                x: currentX,
                y: ngY - yOffset,
                t: ng.fu
            });
        }
        //### FTHORA UPPER 2 ###
        if (ng.fu2)
        {
            setFont('fthora');
            var fHeight = doc.internal.getLineHeight();
            var yOffset = fHeight / 10;
            texts.push({
                f: 'fthora',
                x: currentX,
                y: ngY - yOffset,
                t: ng.fu2
            });
        }
        //### FTHORA UPPER MIDDLE ###
        if (ng.fum)
        {
            setFont('fthora');
            var fHeight = doc.internal.getLineHeight();
            var xOffset = nWidth / 8;
            var yOffset = fHeight / 8;
            texts.push({
                f: 'fthora',
                x: currentX - xOffset,
                y: ngY - yOffset,
                t: ng.fum
            });
        }
        //### FTHORA LOWER ###
        if (ng.fl)
        {
            setFont('fthora');
            var fHeight = doc.internal.getLineHeight();
            var yOffset = fHeight / 16;
            texts.push({
                f: 'fthora',
                x: currentX,
                y: ngY + yOffset,
                t: ng.fl
            });
        }
        //### FTHORA LOWER MIDDLE ###
        if (ng.flm)
        {
            setFont('fthora');
            var fHeight = doc.internal.getLineHeight();
            var xOffset = nWidth / 8;
            var yOffset = fHeight / 16;
            texts.push({
                f: 'fthora',
                x: currentX - xOffset,
                y: ngY + yOffset,
                t: ng.flm
            });
        }
        //### QUALITY ###
        if (ng.q)
        {
            texts.push({
                f: 'quality',
                x: currentX,
                y: ngY,
                t: ng.q
            });
        }
        //### QUALITY RIGHTER ##
        if (ng.qr)
        {
            setFont('quality');
            var xOffset = nWidth / 24;
            texts.push({
                f: 'quality',
                x: currentX + xOffset,
                y: ngY,
                t: ng.qr
            });
        }
        //### QUALITY RIGHTER 2 ##
        if (ng.qr2)
        {
            setFont('quality');
            var xOffset = nWidth / 6;
            texts.push({
                f: 'quality',
                x: currentX + xOffset,
                y: ngY,
                t: ng.qr2
            });
        }
        //### QUALITY RIGHTER UPPER ###
        if (ng.qru)
        {
            setFont('quality');
            var qHeight = doc.internal.getLineHeight();
            var xOffset = nWidth / 24;
            var yOffset = qHeight / 32;
            texts.push({
                f: 'quality',
                x: currentX + xOffset,
                y: ngY - yOffset,
                t: ng.qru
            });
        }
        //### QUALITY UPPER ###
        if (ng.qu)
        {
            setFont('quality');
            var qHeight = doc.internal.getLineHeight();
            var yOffset = qHeight / 32;
            texts.push({
                f: 'quality',
                x: currentX,
                y: ngY - yOffset,
                t: ng.qu
            });
        }
        //### QUALITY RIGHTER LOWER ###
        if (ng.qrl)
        {
            setFont('quality');
            var qHeight = doc.internal.getLineHeight();
            var xOffset = nWidth / 24;
            var yOffset = qHeight / 32;
            texts.push({
                f: 'quality',
                x: currentX + xOffset,
                y: ngY + yOffset,
                t: ng.qrl
            });
        }
        //### QUALITY LOWER ###
        if (ng.ql)
        {
            setFont('quality');
            var qHeight = doc.internal.getLineHeight();
            var yOffset = qHeight / 32;
            texts.push({
                f: 'quality',
                x: currentX,
                y: ngY + yOffset,
                t: ng.ql
            });
        }
        //### OLD ###
        if (ng.o)
        {
            texts.push({
                f: 'old',
                x: currentX,
                y: ngY,
                t: ng.o
            });
        }
        //### NEUMES UPPER ###
        if (ng.nu)
        {
            setFont('neumes');
            // if (keys[ng.nu])
            // {
            //     ng.nu = keys[ng.nu];
            // }
            var nHeight = doc.internal.getLineHeight();
            var yOffset = nHeight / 5.5;
            texts.push({
                f: 'neumes',
                x: currentX,
                y: ngY - yOffset,
                t: ng.nu
            });
        }
        //### CHRONOS BEFORE ###
        if (ng.cb)
        {
            texts.push({
                f: 'chronos',
                x: currentX,
                y: ngY,
                t: ng.cb
            });
        }
        //### NEUMES ###
        texts.push({
            f: 'neumes',
            x: currentX,
            y: ngY,
            t: ng.n
        });
        currentX += nWidth;
        //### CHRONOS ###
        if (ng.c)
        {
            texts.push({
                f: 'chronos',
                x: currentX,
                y: ngY,
                t: ng.c
            });
        }
        //### CHRONOS MIDDLE ###
        if (ng.cm)
        {
            setFont('chronos');
            var cHeight = doc.internal.getLineHeight();
            var xOffset = nWidth / 5;
            var yOffset = cHeight / 40;
            texts.push({
                f: 'chronos',
                x: currentX - xOffset,
                y: ngY - yOffset,
                t: ng.cm
            });
        }
        //### CHRONOS MIDDLE LOWER ###
        if (ng.cml)
        {
            setFont('chronos');
            var cHeight = doc.internal.getLineHeight();
            var xOffset = nWidth / 10;
            var yOffset = cHeight / 8;
            texts.push({
                f: 'chronos',
                x: currentX - xOffset,
                y: ngY + yOffset,
                t: ng.cml
            });
        }
        //### CHRONOS RIGHTER ###
        if (ng.cr)
        {
            var xOffset = nWidth / 12;
            texts.push({
                f: 'chronos',
                x: currentX + xOffset,
                y: ngY,
                t: ng.cr
            });
        }
        //### CHRONOS LOWER ###
        if (ng.cl)
        {
            setFont('chronos');
            var cHeight = doc.internal.getLineHeight();
            var yOffset = cHeight / 8;
            texts.push({
                f: 'chronos',
                x: currentX,
                y: ngY + yOffset,
                t: ng.cl
            });
        }
        //### ETERON ###
        if (ng.e)
        {
            texts.push({
                f: 'eteron',
                x: currentX,
                y: ngY,
                t: ng.e
            });
        }
        //### ETERON RIGHTER ###
        if (ng.er)
        {
            var xOffset = nWidth / 4;
            texts.push({
                f: 'eteron',
                x: currentX + xOffset,
                y: ngY,
                t: ng.er
            });
        }
        //### ETERON LOWER ###
        if (ng.el)
        {
            setFont('eteron');
            var eHeight = doc.internal.getLineHeight();
            var yOffset = eHeight / 32;
            texts.push({
                f: 'eteron',
                x: currentX,
                y: ngY + yOffset,
                t: ng.el
            });
        }
        //### NEUMES MIDDLE AFTER
        if (ng.nma)
        {
            // if (keys[ng.nma])
            // {
            //     ng.nma = keys[ng.nma];
            // }
            var xOffset = nWidth / 3.75;
            texts.push({
                f: 'neumes',
                x: currentX - xOffset,
                y: ngY,
                t: ng.nma
            });
        }
        //### NEUMES MIDDLE LEFTER ###
        if (ng.nml)
        {
            // if (keys[ng.nml])
            // {
            //     ng.nml = keys[ng.nml];
            // }
            texts.push({
                f: 'neumes',
                x: currentX - nWidth / 3.5,
                y: ngY,
                t: ng.nml
            });
        }
        //### NEUMES MIDDLE RIGHTER ###
        if (ng.nmr)
        {
            // if (keys[ng.nmr])
            // {
            //     ng.nmr = keys[ng.nmr];
            // }
            texts.push({
                f: 'neumes',
                x: currentX + nWidth / 12,
                y: ngY,
                t: ng.nmr
            });
        }
        //### NEUMES RIGHTER ###
        if (ng.nr)
        {
            // if (keys[ng.nr])
            // {
            //     ng.nr = keys[ng.nr];
            // }
            texts.push({
                f: 'neumes',
                x: currentX + nWidth / 8,
                y: ngY,
                t: ng.nr
            });
        }
        //### FTHORA MIDDLE AFTER ###
        if (ng.fma)
        {
            var xOffset = nWidth / 6;
            texts.push({
                f: 'fthora',
                x: currentX - xOffset,
                y: ngY,
                t: ng.fma
            });
        }
        //### FTHORA UPPER AFTER ###
        if (ng.fua)
        {
            setFont('fthora');
            var fHeight = doc.internal.getLineHeight();
            var yOffset = fHeight / 18;
            texts.push({
                f: 'fthora',
                x: currentX,
                y: ngY - yOffset,
                t: ng.fua
            });
        }
        //### FTHORA UPPER MIDDLE AFTER ###
        if (ng.fuma)
        {
            setFont('fthora');
            var fHeight = doc.internal.getLineHeight();
            var xOffset = nWidth / 8;
            var yOffset = fHeight / 8;
            texts.push({
                f: 'fthora',
                x: currentX - xOffset,
                y: ngY - yOffset,
                t: ng.fuma
            });
        }
        //### FTHORA LOWER AFTER ###
        if (ng.fla)
        {
            setFont('fthora');
            var fHeight = doc.internal.getLineHeight();
            var yOffset = fHeight / 16;
            texts.push({
                f: 'fthora',
                x: currentX,
                y: ngY + yOffset,
                t: ng.fla
            });
        }
        //### FTHORA RIGHTER LOWER AFTER ###
        if (ng.frla)
        {
            setFont('fthora');
            var fHeight = doc.internal.getLineHeight();
            var xOffset = nWidth / 8;
            var yOffset = fHeight / 8;
            texts.push({
                f: 'fthora',
                x: currentX + xOffset,
                y: ngY + yOffset,
                t: ng.frla
            });
        }
        //### FTHORA LOWER MIDDLE AFTER ###
        if (ng.flma)
        {
            setFont('fthora');
            var fHeight = doc.internal.getLineHeight();
            var xOffset = nWidth / 3;
            var yOffset = fHeight / 80;
            texts.push({
                f: 'fthora',
                x: currentX - xOffset,
                y: ngY + yOffset,
                t: ng.flma
            });
        }
        //### FTHORA AFTER ###
        if (ng.fa)
        {
            texts.push({
                f: 'fthora',
                x: currentX,
                y: ngY,
                t: ng.fa
            });
        }
        //### FTHORA RIGHTER AFTER ###
        if (ng.fra)
        {
            var xOffset = nWidth / 8;
            texts.push({
                f: 'fthora',
                x: currentX + xOffset,
                y: ngY,
                t: ng.fra
            });
        }
        //### FTHORA INFO AFTER ###
        if (ng.fia)
        {
            texts.push({
                f: 'fthoraInfo',
                x: currentX,
                y: ngY,
                t: ng.fia
            });
        }
        //### RYTHM RIGHT ###
        if (ng.rr && rFS)
        {
            setFont('rythm');
            var rrWidth = doc.getTextWidth(ng.rr);
            texts.push({
                f: 'rythm',
                x: currentX - rrWidth - 2,
                y: ngY - rythmDistance,
                t: ng.rr
            });
        }
        //### ISON RIGHT ###
        if (ng.ir && iFS)
        {
            setFont('ison');
            var irWidth = doc.getTextWidth(ng.ir);
            texts.push({
                f: 'ison',
                x: currentX - irWidth - 2,
                y: ngY - isonDistance,
                t: ng.ir
            });
        }
        //### ISON RIGHT UPPER ###
        if (ng.iru && iFS)
        {
            setFont('ison');
            var iruWidth = doc.getTextWidth(ng.iru);
            var iruHeight = doc.internal.getLineHeight();
            var yOffset = iruHeight / 6;
            texts.push({
                f: 'ison',
                x: currentX - iruWidth - 2,
                y: ngY - isonDistance - yOffset,
                t: ng.iru
            });
        }
        //### LYRICS ###
        if (ng.l && lFS)
        {
            lxOffset += (nWidth / 2) - (lWidth / 2);
            //### SPECIAL ###
            if (ng.s)
            {
                setFont('special');
                var sWidth = doc.getTextWidth(ng.s);
                lxOffset -= sWidth / 2;
                var sHeight = doc.internal.getLineHeight();
                var yOffset = sHeight / 16;
                texts.push({
                    f: 'special',
                    x: ngX + lxOffset,
                    y: ngY + lyricsDistance + yOffset,
                    t: ng.s
                });
                lxOffset += sWidth;
            }
            //### SPECIAL UPPER ###
            if (ng.su)
            {
                setFont('special');
                var suWidth = doc.getTextWidth(ng.su);
                lxOffset -= suWidth / 2;
                var suHeight = doc.internal.getLineHeight();
                var yOffset = suHeight / 32;
                texts.push({
                    f: 'special',
                    x: ngX + lxOffset,
                    y: ngY + lyricsDistance + yOffset,
                    t: ng.su
                });
                lxOffset += suWidth;
            }
            texts.push({
                f: 'lyrics',
                x: ngX + lxOffset,
                y: ngY + lyricsDistance,
                t: ng.l
            });
        }
        //### NEUMES AFTER (2) ###
        if (ng.n2)
        {
            var l2xOffset = 0;
            currentX += charSpace;
            //### ISON AFTER (2) ###
            if (ng.i2 && iFS)
            {
                textsAfter.push({
                    f: 'ison',
                    x: currentX,
                    y: ngY - isonDistance,
                    t: ng.i2
                });
            }
            //### FTHORA AFTER (2) ###
            if (ng.f2)
            {
                textsAfter.push({
                    f: 'fthora',
                    x: currentX,
                    y: ngY,
                    t: ng.f2
                });
            }
            //### FTHORA UPPER AFTER (2) ###
            if (ng.f2u)
            {
                setFont('fthora');
                var fHeight = doc.internal.getLineHeight();
                var yOffset = fHeight / 18;
                texts.push({
                    f: 'fthora',
                    x: currentX,
                    y: ngY - yOffset,
                    t: ng.f2u
                });
            }
            //### NEUMES AFTER (2) ###
            textsAfter.push({
                f: 'neumes',
                x: currentX,
                y: ngY,
                t: ng.n2
            });
            //### FTHORA AFTER AFTER (2) ###
            if (ng.f2a)
            {
                var xOffset = n2Width;
                texts.push({
                    f: 'fthora',
                    x: currentX + xOffset,
                    y: ngY,
                    t: ng.f2a
                });
            }
            //### FTHORA AFTER MIDDLE AFTER (2) ###
            if (ng.f2am)
            {
                var xOffset = n2Width - n2Width / 6;
                texts.push({
                    f: 'fthora',
                    x: currentX + xOffset,
                    y: ngY,
                    t: ng.f2am
                });
            }
            //### CHRONOS AFTER (2) ###
            if (ng.c2)
            {
                var xOffset = n2Width;
                textsAfter.push({
                    f: 'chronos',
                    x: currentX + xOffset,
                    y: ngY,
                    t: ng.c2
                });
            }
            //### CHRONOS MIDDLE AFTER (2) ###
            if (ng.cm2)
            {
                setFont('chronos');
                var cHeight = doc.internal.getLineHeight();
                var xOffset = n2Width - n2Width / 5;
                var yOffset = cHeight / 40;
                textsAfter.push({
                    f: 'chronos',
                    x: currentX + xOffset,
                    y: ngY - yOffset,
                    t: ng.cm2
                });
            }
            //### CHRONOS RIGHTER AFTER (2) ###
            if (ng.cr2)
            {
                var xOffset = n2Width + nWidth / 12;
                texts.push({
                    f: 'chronos',
                    x: currentX + xOffset,
                    y: ngY,
                    t: ng.cr2
                });
            }
            //### ETERON AFTER (2) ###
            if (ng.e2)
            {
                var xOffset = n2Width;
                texts.push({
                    f: 'eteron',
                    x: currentX + xOffset,
                    y: ngY,
                    t: ng.e2
                });
            }
            //### OLD AFTER (2) ###
            if (ng.o2)
            {
                texts.push({
                    f: 'old',
                    x: currentX,
                    y: ngY,
                    t: ng.o2
                });
            }
            //### LYRICS AFTER (2) ###
            if (ng.l2 && lFS)
            {
                l2xOffset += (n2Width / 2) - (l2Width / 2);
                textsAfter.push({
                    f: 'lyrics',
                    x: currentX + l2xOffset,
                    y: ngY + lyricsDistance,
                    t: ng.l2
                });
            }
            currentX += n2Width;
        }
    }
    //### MARTYRIA ###
    if (ng.m)
    {
        texts.push({
            f: 'martyria',
            x: currentX,
            y: ngY + lyricsDistance / 3.5,
            t: ng.m
        });
        /*
        if (ng.l && lFS)
        {
            var xOffset = (mWidth / 2) - (lWidth / 2);
            texts.push({
                f: 'lyrics',
                x: currentX + xOffset,
                y: ngY + lyricsDistance,
                t: ng.l
            });
        }
        */
    }
    //### MARTYRIA NARROW ###
    if (ng.mn)
    {
        var xOffset = mnWidth - mnWidth / 1.5;
        texts.push({
            f: 'martyria',
            x: currentX - xOffset,
            y: ngY + lyricsDistance / 3.5,
            t: ng.mn
        });
        currentX += mnWidth + xOffset / 2;
        //### MARTYRIA DIASTOLE NARROW ###
        if (ng.mdn)
        {
            texts.push({
                f: 'martyria_diastole',
                x: currentX,
                y: ngY + lyricsDistance / 3.5,
                t: ng.mdn
            });
        }
    }
    //### MARTYRIA RIGHT ###
    if (ng.mr)
    {
        currentX = pageWidth - startX - mrWidth;
        texts.push({
            f: 'martyria',
            x: currentX,
            y: ngY + lyricsDistance / 3.5,
            t: ng.mr
        });
    }
    //### MARTYRIA DIASTOLE ###
    if (ng.md)
    {
        var xOffset = mWidth;
        texts.push({
            f: 'martyria_diastole',
            x: currentX + xOffset,
            y: ngY + lyricsDistance / 3.5,
            t: ng.md
        });
    }
    //### MARTYRIA UPPER ###
    if (ng.mu)
    {
        texts.push({
            f: 'martyria',
            x: currentX,
            y: ngY,
            t: ng.mu
        });
    }
    //### MARTYRIA UPPER 2 ###
    if (ng.mu2)
    {
        texts.push({
            f: 'martyria',
            x: currentX,
            y: ngY + lyricsDistance / 3.5,
            t: ng.mu2
        });
    }
    //### MARTYRIA FTHORA ###
    if (ng.mf)
    {
        texts.push({
            f: 'martyria_fthora',
            x: currentX,
            y: ngY + lyricsDistance / 2.2,
            t: ng.mf
        });
    }
    //### ASTERISK ###
    if (ng.a && aFS)
    {
        texts.push({
            f: 'asterisk',
            x: currentX,
            y: ngY,
            t: ng.a
        });
    }
    //### BREATH ###
    if (ng.b && bFS)
    {
        texts.push({
            f: 'breath',
            x: currentX,
            y: ngY,
            t: ng.b
        });
        //### MARTYRIA DIASTOLE AFTER ###
        if (ng.mda)
        {
            texts.push({
                f: 'martyria_diastole',
                x: currentX + 1.725 * ngWidth,
                y: ngY + ngWidth / 1.725,
                t: ng.mda
            });
        }
    }
    //### BREATH NARROW ###
    if (ng.bn && bFS)
    {
        var xOffset = bnWidth / 2;
        texts.push({
            f: 'breath',
            x: currentX - xOffset,
            y: ngY,
            t: ng.bn
        });
    }
    //### MARTYRIA UPPER ###
    if (ng.mu)
    {
        texts.push({
            f: 'martyria',
            x: currentX,
            y: ngY,
            t: ng.mu
        });
    }

    if (texts.length > 0)
    {
        //writeTexts(texts);

        lineTexts.push(texts);
        if (textsAfter.length > 0)
        {
            lineTexts.push(textsAfter);
            ngX += charSpace;
        }
        ngX += ngWidth;
        ngX += charSpace;
    }
    if (i == ngLength - 1)
    {
        //### LINE TEXTS ###
        writeLineTexts(
            lineTexts,
            0
        );
    }
});


//doc.save('neumes.pdf');

doc.save('kontakion_prophet_elias.pdf');