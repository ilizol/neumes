(function ()
{
    var fileInput = document.getElementById('file-input');
    var fileNameInput = document.getElementById('fileName');
    var status = document.getElementById('status');
    var glyphs = {
        quantitativeNeume: {
            Ison: '\uE000',
            Oligon: '\uE001',
            OligonPlusKentimaBelow: '\uE003',
            OligonPlusKentimaAbove: '\uE004',
            OligonPlusHypsiliRight: '\uE005',
            OligonPlusHypsiliLeft: '\uE006',
            OligonPlusHypsiliPlusKentimaVertical: '\uE008',
            Apostrophos: '\uE021',
            DoubleApostrophos: '\uE022',
            Elaphron: '\uE024',
            PetastiWithIson: '\uE040',
            Petasti: '\uE041',
            PetastiPlusKentimaAbove: '\uE043',
            Kentemata: '\uE081',
            KentemataPlusOligon: '\uE082',
            OligonPlusKentemata: '\uE083',
            OligonPlusIsonPlusKentemata: '\uE084'
        },
        ison: {
            Unison: 'Μ',
            Thi: 'Δ',
            Vou: 'Β'
        },
        measureBar: {
            MeasureBarRight: '\uE210'
        },
        vocalExpressionNeume: {
            Vareia: '\uE0A0',
            Psifiston: '\uE0A1',
            Antikenoma: '\uE0A2',
            Homalon: '\uE0A3',
            HomalonConnecting: '\uE0A4',
            Heteron: '\uE0A5',
            HeteronConnecting: '\uE0A6',
            Cross_Top: '\uE0C8'
        },
        timeNeume: {
            Klasma_Top: '\uE0D0',
            Klasma_Bottom: '\uE0D1',
            Hapli: '\uE0D2',
            Dipli: '\uE0D3',
            Tripli: '\uE0D4',
            Tetrapli: '\uE0D5',
            Koronis: '\uE0D6'
        },
        gorgonNeume: {
            Gorgon_Top: '\uE0F0',
            Gorgon_Bottom: '\uE0F1',
            GorgonDottedLeft: '\uE0F2',
            GorgonDottedRight: '\uE0F3',
            Digorgon: '\uE0F4',
            Trigorgon: '\uE0F8',
            Argon: '\uE0FC',
            Hemiolion: '\uE0FD'
        },
        accidental: {
            Sharp_2_Left: '\uE1F0',
            Sharp_2_LeftSecondary: '\uE1F6'
        },
        fthora: {
            Kliton_Top: '\uE19E',
            GeneralFlat_Top: '\uE204',
            DiatonicNiLow_Top: '\uE190',
            DiatonicPa_Top: '\uE191',
            DiatonicVou_Top: '\uE192',
            DiatonicGa_Top: '\uE193',
            DiatonicThi_Top: '\uE194',
            DiatonicKe_Top: '\uE195',
            DiatonicZo_Top: '\uE196',
            DiatonicNiHigh_Top: '\uE197',
            HardChromaticPa_Top: '\uE198',
            HardChromaticThi_Top: '\uE199',
            SoftChromaticThi_Top: '\uE19A',
            SoftChromaticPa_Top: '\uE19B',
            SoftChromaticThi_Bottom: '\uE1CA',
            HardChromaticThi_Bottom: '\uE1C9',
            DiatonicThi_Bottom: '\uE1C4',
            Enharmonic_Top: '\uE19C',
            Enharmonic_Bottom: '\uE1CC'
        },
        martyriaNote: {
            ZoLow: '\uE130',
            NiLow: '\uE131',
            PaLow: '\uE132',
            VouLow: '\uE133',
            GaLow: '\uE134',
            DiLow: '\uE135',
            ThiLow: '\uE135',
            KeLow: '\uE136',
            Zo: '\uE137',
            Ni: '\uE138',
            Pa: '\uE139',
            Vou: '\uE13A',
            Ga: '\uE13B',
            Di: '\uE13C',
            Thi: '\uE13C',
            Ke: '\uE13D',
            ZoHigh: '\uE13E',
            NiHigh: '\uE13F',
            PaHigh: '\uE140',
            VouHigh: '\uE141',
            GaHigh: '\uE142',
            DiHigh: '\uE143',
            ThiHigh: '\uE143',
            KeHigh: '\uE144'
        },
        rootSign: {
            Delta: '\uE151',
            Alpha: '\uE152',
            Legetos: '\uE153',
            Nana: '\uE154',
            DeltaDotted: '\uE155',
            AlphaDotted: '\uE156',
            Squiggle: '\uE157',
            SoftChromaticSquiggle: '\uE159',
            Varys: '\uE15B',
            DeltaLow: '\uE171',
            AlphaLow: '\uE172',
            LegetosLow: '\uE173',
            NanaLow: '\uE174'
        },
        modeSign: {
            WordEchos: '\uE2F1',
            Alpha: '\uE2C0',
            AlphaWithDeltaHat: '\uF003',
            Delta: '\uE2D8',
            DeltaWithDeltaHat: '\uF004',
            FourthCapital: '\uE2FA',
            Ga: '\uE2E3',
            Ke: '\uE2E5',
            Legetos: '\uE2BA',
            Nana: '\uE2B1',
            NanaOld: '\uE2B0',
            Ni: '\uE2E0',
            OligonPlusHypsili: '\uE2E8',
            OligonPlusKentima: '\uE2E7',
            Pa: '\uE2E1',
            SoftChromatic2: '\uE2A8',
            SoftChromatic6: '\uE2C8',
            Thi: '\uE2E4',
            VarysZo: '\uE2D0',
            Vou: '\uE2E2',
            Zo: '\uE2E6'
        },
        measureNumber: {
            Two: '2',
            Three: '3',
            Four: '4',
            Five: '5',
            Six: '6',
            Seven: '7',
            Eight: '8'
        }
    };

    function getGlyph(category, value)
    {
        if (!value)
        {
            return undefined;
        }
        var name = value.substring(value.lastIndexOf('.') + 1);
        var result = glyphs[category] && glyphs[category][name];
        if (!result && window.sbmuflGlyphs)
        {
            var adjustedName = name
                .replace(/Plus/g, '')
                .replace(/Apostrophos/g, 'Apostrofos')
                .replace(/Kentemata/g, 'Kentimata')
                .replace(/Hyporoe/g, 'Yporroi')
                .replace(/Hypsili/g, 'Ypsili')
                .replace(/Elaphron/g, 'Elafron')
                .replace(/_Top$/i, 'Above')
                .replace(/_Bottom$/i, 'Below');
            var prefixes = {
                ison: 'ison',
                measureBar: 'barline',
                fthora: 'fthora',
                martyriaNote: 'martyriaNote',
                rootSign: 'martyria',
                modeSign: 'mode'
            };
            var candidates = [adjustedName];
            if (prefixes[category])
            {
                candidates.push(prefixes[category] + adjustedName);
            }
            if (category === 'martyriaNote' && /^Thi/.test(adjustedName))
            {
                candidates.push('martyriaNoteDi' + adjustedName.slice(3));
            }
            if (category === 'fthora')
            {
                candidates.push('chroa' + adjustedName);
            }
            if (category === 'rootSign')
            {
                // var rootSignName = adjustedName.replace(/Low$/, '');
                // var rootSignAliases = { Varys: 'Zygos' };
                // candidates.push('martyria' + (rootSignAliases[rootSignName] || rootSignName) + 'Below');
            }
            if (category === 'quantitativeNeume' && /Kentima$/.test(adjustedName))
            {
                candidates.push(adjustedName + 'Middle');
            }
            for (var index = 0; index < candidates.length && !result; index++)
            {
                var normalizedName = candidates[index].toLowerCase().replace(/[^a-z0-9]/g, '');
                result = window.sbmuflGlyphs.byName[normalizedName];
            }
        }
        if (!result)
        {
            throw new Error('Unsupported ' + category + ' value: ' + value);
        }
        return result;
    }

    function convertScore(score, sourceName)
    {
        if (!score || !score.staff || !Array.isArray(score.staff.elements))
        {
            throw new Error(sourceName + ' is not a Neanes score with staff elements.');
        }

        var entries = [];
        var hasTitle = false;
        score.staff.elements.forEach(function (element)
        {
            var entry = {};
            switch (element.elementType)
            {
                case 'TextBox':
                    if (element.content)
                    {
                        if (!hasTitle)
                        {
                            hasTitle = true;
                            entries.push({ h: element.content });
                            //TODO change this
                            entries.push({ br: 'ln2' });
                        }
                        else
                        {
                            entries.push({ t: element.content });
                            //TODO change this
                            entries.push({ br: 'ln4' });
                        }
                    }
                    else if (element.inline)
                    {
                        entry.br = 'wd';
                    }
                    break;
                case 'DropCap':
                    entry.d = element.content;
                    break;
                case 'ModeKey':
                    if (element.martyria)
                    {
                        entries.push({ mt: getGlyph('modeSign', 'modeWordEchos') });
                        // entries.push({ t: ' ' });
                        entries.push({ mt: getGlyph('modeSign', element.martyria) });
                    }
                    if (element.note || element.fthoraAboveNote)
                    {
                        var modeNote = {};
                        if (element.note)
                        {
                            modeNote.mt = getGlyph('modeSign', element.note);
                        }
                        if (element.fthoraAboveNote)
                        {
                            modeNote.mtp = getGlyph('fthora', element.fthoraAboveNote);
                        }
                        entries.push(modeNote);
                    }
                    if (element.quantitativeNeumeRight)
                    {
                        entries.push({ nt: getGlyph('quantitativeNeume', element.quantitativeNeumeRight) });
                        if (element.fthoraAboveQuantitativeNeumeRight)
                        {
                            entries.push({ ntp: getGlyph('fthora', element.fthoraAboveQuantitativeNeumeRight) });
                        }
                    }
                    //TODO change this
                    entries.push({ br: 'ln5' });
                    break;
                case 'Note':
                    if (element.measureBarLeft)
                    {
                        entry.nb = getGlyph('measureBar', element.measureBarLeft);
                    }
                    if (element.vareia)
                    {
                        entry.v = glyphs.vocalExpressionNeume.Vareia;
                    }
                    entry.n = getGlyph('quantitativeNeume', element.quantitativeNeume);
                    if (element.timeNeume)
                    {
                        entry.np = getGlyph('timeNeume', element.timeNeume);
                    }
                    if (element.gorgonNeume)
                    {
                        entry.c = getGlyph('gorgonNeume', element.gorgonNeume);
                    }
                    if (element.vocalExpressionNeume)
                    {
                        if (
                            element.vocalExpressionNeume === 'Heteron' ||
                            element.vocalExpressionNeume === 'HeteronConnecting'
                        )
                        {
                            entry.e = getGlyph('vocalExpressionNeume', element.vocalExpressionNeume);
                        }
                        else
                        {
                            entry.q = getGlyph('vocalExpressionNeume', element.vocalExpressionNeume);
                        }
                    }
                    if (element.accidental)
                    {
                        entry.f = getGlyph('accidental', element.accidental);
                    }
                    if (element.secondaryAccidental)
                    {
                        entry.f = getGlyph('accidental', element.secondaryAccidental);
                    }
                    if (element.fthora)
                    {
                        entry.f = getGlyph('fthora', element.fthora);
                    }
                    if (element.measureNumber)
                    {
                        var measureNumber = element.measureNumber.replace(/^MeasureNumber/, '');
                        entry.r = glyphs.measureNumber[measureNumber];
                        if (!entry.r)
                        {
                            throw new Error('Unsupported measure number: ' + element.measureNumber);
                        }
                    }
                    if (element.ison)
                    {
                        entry.i = getGlyph('ison', element.ison);
                    }
                    if (element.lyrics)
                    {
                        entry.l = element.lyrics;
                    }
                    if (element.measureBarRight)
                    {
                        entry.n2 = getGlyph('measureBar', element.measureBarRight);
                    }
                    break;
                case 'Martyria':
                    entry.m = getGlyph('martyriaNote', element.note);
                    if (element.rootSign)
                    {
                        entry.mp = getGlyph('rootSign', element.rootSign);
                    }
                    if (element.fthora)
                    {
                        entry.mf = getGlyph('fthora', element.fthora);
                    }
                    break;
                case 'Empty':
                    break;
                default:
                    throw new Error(sourceName + ' contains unsupported element type: ' + element.elementType);
            }

            if (Object.keys(entry).length)
            {
                entries.push(entry);
            }
            if (element.pageBreak)
            {
                entries.push({ br: 'pg' });
            }
            else if (element.lineBreak)
            {
                entries.push({ br: 'ln' });
            }
        });

        return entries;
    }

    function formatJs(entries)
    {
        var formattedEntries = JSON.stringify(entries, null, 4)
            .replace(/[\uE000-\uF8FF]/g, function (glyph)
            {
                return '\\u' + glyph.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
            });
        return 'neumes.push(\n' + formattedEntries.slice(1, -1) + '\n);';
    }

    fileInput.addEventListener('change', function ()
    {
        if (fileInput.files.length)
        {
            fileNameInput.value = fileInput.files[0].name.replace(/\.byzx$/i, '');
        }
        status.textContent = '';
    });

    document.getElementById('file-form').addEventListener('submit', async function (event)
    {
        event.preventDefault();
        status.textContent = '';

        var files = Array.from(fileInput.files);
        if (!files.length)
        {
            status.textContent = 'Choose at least one .byzx file.';
            return;
        }

        try
        {
            var output = (await Promise.all(files.map(async function (file)
            {
                var score = JSON.parse(await file.text());
                return formatJs(convertScore(score, file.name));
            }))).join('\n\n');
            var fileName = fileNameInput.value.trim() || files[0].name.replace(/\.byzx$/i, '');
            fileName = fileName.replace(/\.js$/i, '') || 'neumes';
            saveAs(new File([output], fileName + '.js', { type: 'text/javascript;charset=utf-8' }));
            status.textContent = 'Created ' + fileName + '.js';
        }
        catch (error)
        {
            status.textContent = error.message;
        }
    });
})();
