﻿(function (jsPDFAPI) {
var font = "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dHA6Ly9zY3JpcHRzLnNpbC5vcmcvT0ZMaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkwAUwBJAEwAIABPAFAARQBOACAARgBPAE4AVAAgAEwASQBDAEUATgBTAEUAIABWAGUAcgBzAGkAbwBuACAAMQAuADEASwBBACAAQQBsAG0AbwB1AHoAaQBvAHMAIABNAGEAaQBuAFIAZQBnAHUAbABhAHIAMQAuADAAMAAwADsAVQBLAFcATgA7AEsAQQBBAGwAbQBvAHUAegBpAG8AcwBNAGEAaQBuAC0AUgBlAGcAdQBsAGEAcgBLAEEAIABBAGwAbQBvAHUAegBpAG8AcwAgAE0AYQBpAG4AIABSAGUAZwB1AGwAYQByAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwADAASwBBAEEAbABtAG8AdQB6AGkAbwBzAE0AYQBpAG4ALQBSAGUAZwB1AGwAYQByAFQAcgBlAHYAbwByACAAQgB1AGwAbABvAGMAawBUAGgAaQBzACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAGkAcwAgAGwAaQBjAGUAbgBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALAAgAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAuACAAVABoAGkAcwAgAGwAaQBjAGUAbgBzAGUAIABpAHMAIABhAHYAYQBpAGwAYQBiAGwAZQAgAHcAaQB0AGgAIABhACAARgBBAFEAIABhAHQAOgAgAGgAdAB0AHAAOgAvAC8AcwBjAHIAaQBwAHQAcwAuAHMAaQBsAC4AbwByAGcALwBPAEYATABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAACAAAAAAAA/7UAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAG4AAAADACQAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0ARABuAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0BAgATABQAFQAWABcAGAAZABoAGwAcAQMAEQAPAB0AHgAEACIADQAGABIAPwEEAQUACwBeAGAAPgBAABAAQgC0ALUAtgCpAAUACgAHAKYADgAgAI8AIQAfAGEAQQCYAAgBBgAjAAkAjABfAQcAQwDdB3VuaTAzQTkHb25lLmFsdApleGNsYW0uYWx0Dm51bWJlcnNpZ24uYWx0DmFzY2lpdGlsZGUuYWx0BmF0LmFsdAAAAAEAAAAAAAAAAAAAAAAAAQAAAAA=";
var callAddFont = function () {
this.addFileToVFS("KAAlmouziosMain-Regular-normal.ttf", font);
this.addFont("KAAlmouziosMain-Regular-normal.ttf", "KAAlmouziosMain-Regular", "normal");
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);