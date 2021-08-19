﻿(function (jsPDFAPI) {
var font = "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";
var callAddFont = function () {
this.addFileToVFS("KAEZFthora-Regular-normal.ttf", font);
this.addFont("KAEZFthora-Regular-normal.ttf", "KAEZFthora-Regular", "normal");
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);