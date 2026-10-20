#!/usr/bin/env bash

# cd ~/Projects/neumes

# curl -fsSL https://deno.land/install.sh | sh

# Generate the PDF produced by a local score HTML page.
DENO_RUN=(
	deno run
	--allow-run=/usr/bin/chromium
	--allow-read
	--allow-write
	--allow-env
	--allow-net
	html_to_pdf.js
)
PROJECT_BASE="$HOME/Projects/neumes"
HTML_BASE="file://${PROJECT_BASE}/docs"
PDF_BASE="${PROJECT_BASE}/pdf"

# doxastikon_holy_cross_elevation
"${DENO_RUN[@]}" \
--output-dir "${PDF_BASE}/doxastikon_holy_cross_elevation" \
"${HTML_BASE}/doxastikon_holy_cross_elevation_1.html" \
"${HTML_BASE}/doxastikon_holy_cross_elevation_2.html"

# idiomela_holy_cross_elevation
"${DENO_RUN[@]}" \
--output-dir "${PDF_BASE}/idiomela_holy_cross_elevation" \
"${HTML_BASE}/idiomela_holy_cross_elevation_1.html" \
"${HTML_BASE}/idiomela_holy_cross_elevation_2.html"

# kontakion_prophet_elias
"${DENO_RUN[@]}" \
--output-dir "${PDF_BASE}/kontakion_prophet_elias" \
"${HTML_BASE}/kontakion_prophet_elias_1.html" \
"${HTML_BASE}/kontakion_prophet_elias_2.html" \
"${HTML_BASE}/kontakion_prophet_elias_3.html" \
"${HTML_BASE}/kontakion_prophet_elias_4.html" \
"${HTML_BASE}/kontakion_prophet_elias_5.html"

# kontakion_saint_john_theologian
"${DENO_RUN[@]}" \
--output-dir "${PDF_BASE}/kontakion_saint_john_theologian" \
"${HTML_BASE}/kontakion_saint_john_theologian_1.html" \
"${HTML_BASE}/kontakion_saint_john_theologian_2.html" \
"${HTML_BASE}/kontakion_saint_john_theologian_3.html"

# kontakion_saint_spyridon
"${DENO_RUN[@]}" \
--output-dir "${PDF_BASE}/kontakion_saint_spyridon" \
"${HTML_BASE}/kontakion_saint_spyridon_1.html" \
"${HTML_BASE}/kontakion_saint_spyridon_2.html" \
"${HTML_BASE}/kontakion_saint_spyridon_3.html"

# test_hyporoe
"${DENO_RUN[@]}" \
--output-dir "${PDF_BASE}/test_hyporoe" \
"${HTML_BASE}/test_hyporoe_1.html" \
"${HTML_BASE}/test_hyporoe_2.html"

# test_martyria_fthora
"${DENO_RUN[@]}" \
--output-dir "${PDF_BASE}/test_martyria_fthora" \
"${HTML_BASE}/test_martyria_fthora_1.html" \
"${HTML_BASE}/test_martyria_fthora_2.html"

# test_martyrias
"${DENO_RUN[@]}" \
--output-dir "${PDF_BASE}/test_martyrias" \
"${HTML_BASE}/test_martyrias_1.html" \
"${HTML_BASE}/test_martyrias_2.html"

# test_mode_key
"${DENO_RUN[@]}" \
--output-dir "${PDF_BASE}/test_mode_key" \
"${HTML_BASE}/test_mode_key_1.html" \
"${HTML_BASE}/test_mode_key_2.html"
