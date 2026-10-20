#!/usr/bin/env bash

# cd ~/Projects/neumes

# curl -fsSL https://deno.land/install.sh | sh

PROJECT_BASE="$HOME/Projects/neumes"
HTML_BASE="${PROJECT_BASE}/docs/examples"
PDF_BASE="${PROJECT_BASE}/pdf"
#TODO change this for debug
# PDF_BASE="${PROJECT_BASE}/pdf_DEBUG"

# Generate the PDF produced by a local score HTML page.
DENO_RUN=(
	deno run
	--allow-run=/usr/bin/chromium
	--allow-read
	--allow-write
	--allow-env
	--allow-net
	html_to_pdf.js
    --input-dir "${HTML_BASE}"
    --output-dir "${PDF_BASE}"
)
#TODO change this for debug
# DENO_RUN=(
# 	deno run
# 	--allow-run=/usr/bin/chromium
# 	--allow-read
# 	--allow-write
# 	--allow-env
# 	--allow-net
# 	html_to_pdf.js
# )

# doxastikon_holy_cross_elevation
# "${DENO_RUN[@]}" --suffix-dir="doxastikon_holy_cross_elevation"

# idiomela_holy_cross_elevation
# "${DENO_RUN[@]}" --suffix-dir="idiomela_holy_cross_elevation"

# kontakion_prophet_elias
# "${DENO_RUN[@]}" --suffix-dir="kontakion_prophet_elias"

# kontakion_saint_john_theologian
# "${DENO_RUN[@]}" --suffix-dir="kontakion_saint_john_theologian"

# kontakion_saint_spyridon
# "${DENO_RUN[@]}" --suffix-dir="kontakion_saint_spyridon"

# test_accidentals
"${DENO_RUN[@]}" --suffix-dir="test_accidentals"

# test_hyporoe
# "${DENO_RUN[@]}" --suffix-dir="test_hyporoe"

# test_martyria_fthora
# "${DENO_RUN[@]}" --suffix-dir="test_martyria_fthora"

# test_martyrias
# "${DENO_RUN[@]}" --suffix-dir="test_martyrias"

# test_mode_key
# "${DENO_RUN[@]}" --suffix-dir="test_mode_key"

################################################################
#TODO change this for debug

# doxastikon_holy_cross_elevation
# "${DENO_RUN[@]}" --output-dir "${PDF_BASE}/doxastikon_holy_cross_elevation" \
# "${HTML_BASE}/doxastikon_holy_cross_elevation/doxastikon_holy_cross_elevation_1.html"

# idiomela_holy_cross_elevation
# "${DENO_RUN[@]}" --output-dir "${PDF_BASE}/idiomela_holy_cross_elevation" \
# "${HTML_BASE}/idiomela_holy_cross_elevation/idiomela_holy_cross_elevation_1.html"

# kontakion_prophet_elias
# "${DENO_RUN[@]}" --output-dir "${PDF_BASE}/kontakion_prophet_elias" \
# "${HTML_BASE}/kontakion_prophet_elias/kontakion_prophet_elias_4.html"

# test_martyria_fthora
# "${DENO_RUN[@]}" --output-dir "${PDF_BASE}/test_martyria_fthora" \
# "${HTML_BASE}/test_martyria_fthora/test_martyria_fthora_1.html"
################################################################
