#!/usr/bin/env bash

# curl -fsSL https://deno.land/install.sh | sh

PROJECT_BASE="$HOME/Projects/neumes"
FONT_TTF_BASE="${PROJECT_BASE}/docs/fonts"
FONT_JS_BASE="${PROJECT_BASE}/docs/fonts"
HTML_BASE="${PROJECT_BASE}/docs/examples"
#TODO change this for debug
# DEBUG=1
DEBUG=0
if [[ "$DEBUG" == "1" ]]; then
    #TODO change this for debug
    PDF_BASE="${PROJECT_BASE}/pdf_DEBUG"
else
    PDF_BASE="${PROJECT_BASE}/pdf"
fi

# Generate the JS produced by a local font TTF file.
if [[ "$DEBUG" == "1" ]]; then
    #TODO change this for debug
	TTF_TO_JS_RUN=(
	    deno run
	    --allow-read
	    --allow-write
	    ttf_to_js.js
    )
else
    TTF_TO_JS_RUN=(
	    deno run
	    --allow-read
	    --allow-write
	    ttf_to_js.js
	    --input-dir "${FONT_TTF_BASE}"
	    --output-dir "${FONT_JS_BASE}"
    )
fi

# if [[ "$DEBUG" == "1" ]]; then
#     ################################################################
#     # TODO change this for debug

#     # Almouzios
#     "${TTF_TO_JS_RUN[@]}" "${FONT_TTF_BASE}/Almouzios.ttf"
# 	################################################################
# else
#     "${TTF_TO_JS_RUN[@]}"
# fi

# Generate the PDF produced by a local score HTML page.
if [[ "$DEBUG" == "1" ]]; then
    #TODO change this for debug
    HTML_TO_PDF_RUN=(
        deno run
        --allow-run=/usr/bin/chromium,/usr/bin/kill
        --allow-read
        --allow-write
        --allow-env
        --allow-net
        html_to_pdf.js
    )
else
    HTML_TO_PDF_RUN=(
        deno run
        --allow-run=/usr/bin/chromium,/usr/bin/kill
        --allow-read
        --allow-write
        --allow-env
        --allow-net
        html_to_pdf.js
        --input-dir "${HTML_BASE}"
        --output-dir "${PDF_BASE}"
    )
fi

if [[ "$DEBUG" == "1" ]]; then
    ################################################################
    # TODO change this for debug

    # # doxastikon_holy_cross_elevation
    # "${HTML_TO_PDF_RUN[@]}" --output-dir "${PDF_BASE}/doxastikon_holy_cross_elevation" \
    #     "${HTML_BASE}/doxastikon_holy_cross_elevation/doxastikon_holy_cross_elevation_1.html"

    # # idiomela_holy_cross_elevation
    # "${HTML_TO_PDF_RUN[@]}" --output-dir "${PDF_BASE}/idiomela_holy_cross_elevation" \
    #     "${HTML_BASE}/idiomela_holy_cross_elevation/idiomela_holy_cross_elevation_1.html"

    # kontakion_prophet_elias
    # "${HTML_TO_PDF_RUN[@]}" --output-dir "${PDF_BASE}/kontakion_prophet_elias" \
    #     "${HTML_BASE}/kontakion_prophet_elias/kontakion_prophet_elias_4.html"
	"${HTML_TO_PDF_RUN[@]}" --output-dir "${PDF_BASE}/kontakion_prophet_elias" \
        "${HTML_BASE}/kontakion_prophet_elias/kontakion_prophet_elias_6.html"

    # # test_accidentals
    # "${HTML_TO_PDF_RUN[@]}" --output-dir "${PDF_BASE}/test_accidentals" \
    #     "${HTML_BASE}/test_accidentals/test_accidentals_1.html"

    # # test_martyria_fthora
    # "${HTML_TO_PDF_RUN[@]}" --output-dir "${PDF_BASE}/test_martyria_fthora" \
    #     "${HTML_BASE}/test_martyria_fthora/test_martyria_fthora_1.html"

    # # test_mode_key
    # "${HTML_TO_PDF_RUN[@]}" --output-dir "${PDF_BASE}/test_mode_key" \
    #     "${HTML_BASE}/test_mode_key/test_mode_key_1.html"
    ################################################################
else
    # doxastikon_holy_cross_elevation
    "${HTML_TO_PDF_RUN[@]}" --suffix-dir="doxastikon_holy_cross_elevation"

    # idiomela_holy_cross_elevation
    "${HTML_TO_PDF_RUN[@]}" --suffix-dir="idiomela_holy_cross_elevation"

    # kontakion_prophet_elias
    "${HTML_TO_PDF_RUN[@]}" --suffix-dir="kontakion_prophet_elias"

    # kontakion_saint_john_theologian
    "${HTML_TO_PDF_RUN[@]}" --suffix-dir="kontakion_saint_john_theologian"

    # kontakion_saint_spyridon
    "${HTML_TO_PDF_RUN[@]}" --suffix-dir="kontakion_saint_spyridon"

    # test_accidentals
    "${HTML_TO_PDF_RUN[@]}" --suffix-dir="test_accidentals"

    # test_hyporoe
    "${HTML_TO_PDF_RUN[@]}" --suffix-dir="test_hyporoe"

    # test_martyria_fthora
    "${HTML_TO_PDF_RUN[@]}" --suffix-dir="test_martyria_fthora"

    # test_martyrias
    "${HTML_TO_PDF_RUN[@]}" --suffix-dir="test_martyrias"

    # test_mode_key
    "${HTML_TO_PDF_RUN[@]}" --suffix-dir="test_mode_key"
fi
