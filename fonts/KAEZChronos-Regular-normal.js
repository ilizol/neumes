﻿(function (jsPDFAPI) {
var font = "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";
var callAddFont = function () {
this.addFileToVFS("KAEZChronos-Regular-normal.ttf", font);
this.addFont("KAEZChronos-Regular-normal.ttf", "KAEZChronos-Regular", "normal");
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);