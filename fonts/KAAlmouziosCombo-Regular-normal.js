﻿(function (jsPDFAPI) {
var font = "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";
var callAddFont = function () {
this.addFileToVFS("KAAlmouziosCombo-Regular-normal.ttf", font);
this.addFont("KAAlmouziosCombo-Regular-normal.ttf", "KAAlmouziosCombo-Regular", "normal");
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);