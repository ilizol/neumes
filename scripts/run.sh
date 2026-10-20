#!/usr/bin/env bash

# cd ~/Projects/neumes

# curl -fsSL https://deno.land/install.sh | sh

PROJECT_BASE="$HOME/Projects/neumes"
HTML_BASE="${PROJECT_BASE}/docs/examples"
PDF_BASE="${PROJECT_BASE}/pdf"

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

# doxastikon_holy_cross_elevation
"${DENO_RUN[@]}" \
--suffix-dir="doxastikon_holy_cross_elevation"

# idiomela_holy_cross_elevation
"${DENO_RUN[@]}" \
--suffix-dir="idiomela_holy_cross_elevation"

# kontakion_prophet_elias
"${DENO_RUN[@]}" \
--suffix-dir="kontakion_prophet_elias"

# kontakion_saint_john_theologian
"${DENO_RUN[@]}" \
--suffix-dir="kontakion_saint_john_theologian"

# kontakion_saint_spyridon
"${DENO_RUN[@]}" \
--suffix-dir="kontakion_saint_spyridon"

# test_hyporoe
"${DENO_RUN[@]}" \
--suffix-dir="test_hyporoe"

# test_martyria_fthora
"${DENO_RUN[@]}" \
--suffix-dir="test_martyria_fthora"

# test_martyrias
"${DENO_RUN[@]}" \
--suffix-dir="test_martyrias"

# test_mode_key
"${DENO_RUN[@]}" \
--suffix-dir="test_mode_key"
