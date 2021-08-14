﻿(function (jsPDFAPI) {
var font = "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";
var callAddFont = function () {
this.addFileToVFS("KANewStathisMartyria-Regular-normal.ttf", font);
this.addFont("KANewStathisMartyria-Regular-normal.ttf", "KANewStathisMartyria-Regular", "normal");
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);