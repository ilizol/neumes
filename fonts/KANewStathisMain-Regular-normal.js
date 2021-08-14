﻿(function (jsPDFAPI) {
var font = "AAEAAAAMAIAAAwBARFNJRwAAAAEAAErYAAAACEdTVUIAAQAAAABKzAAAAApPUy8yaB2LKQAARawAAABgY21hcE2+UxYAAEYMAAAA9mdseWYyQS8mAAAAzAAAQexoZWFkFMeEswAAQ6wAAAA2aGhlYQWzAc8AAEWIAAAAJGhtdHgX6pB/AABD5AAAAaRsb2NhfFWLrgAAQtgAAADUbWF4cADmAdMAAEK4AAAAIG5hbWV/wEtcAABHBAAAAspwb3N0RMy8MQAASdAAAAD8AAoAXf84AZoDIAADAA8AFQAZACMAKQA1ADkAPQBIAAAFIREhBxUzFSMVMzUjNTM1BxUzNSM1ByM1MwcVMxUjFTM1MzUHFSMVMzUHFTM1MxUjNSMVMzUHFTM1ByM1MwcVMwcVMzUjNzM1AZr+wwE98kFCpkJCpqZCIiEhQkJCZEIhhaZkIiFkIaampiFkZIVGRqZmRiDIA+hDISUhISUhgWgiRkYkYSElIUYhPEIiZHo4Fy9QcXGtcXFQL2chLyEhLyEAAP///KH/Pf4j/6EABwAcACj+cAAAAAL6zP6iABD/egAoACkAAAYWFRQGBwcGBBcmJCcmJicmJjU0NjMyBRYXNzY3Njc3NjY3NjMyFhcXBTlJMjQdRf63AaT+7tVbLhAHCQgHFQF1ZJQQMJRLExYjJg8WBQ0lCDj+dp8OBwYQDggVaAEXMy8TDQsFDAUFBkwWGgMIPB0HCAwMAgIGAQnIAAAABQAP//0FaQHCAC8AUQBzAJQAwgAAJDU0JyYkJyYjIgYVFBYXHgIXFjMyNTQnJiY1NDc2NjMyFxYWFxYWFx4CFxYWNzY2NTQmJyYmJyYnJiYnJiYnJicmIyIHBhUUFxYXFhcWFjMyNjU0JicmJicmJyYmJyYmJyYnJiMiBwYVFBcWFxYXFhYzBDMyNzY1NCYnJiYjIgcGFRQWFhcWFhcWFRQHBhUUFhYXBDMyNzYmJyYmJyYmIyIHBiMGIyMmJicnIhUUFhcWFxYWFxYzMjc2NzY3NjMyFwNEGkf++YlPQVFjBQcOHhwlLxoUCR8cAgtOMH5+KCANDQgDAQUSFh5FDswTCgcICAcDBgcHAgYFAQsTEEEUBAELDAsVIg8dGfYTCgcICAcDBgcHAgYFAQsTEEEUBAELDAsVIg8dGf1/DQoGEj41KWMpMhcJHBsJYlIOCRIGExUFA0sOCgEDDw0lezQRUlZVshgskmFMc0czIwgNCzQkIoZYFD1ENkNtX0REJJ6CvgoMGkprEwwoLhMUChUWCAgJBQMGFB0RCQUdFzwTFREQFw4JCAcDBAgCBwkNCAgBAQoNCAsNEQMNCQEUBQQNAgQJCwwfOw8HBAkNCAgBAQoNCAsNEQMNCQEUBQQNAgQJCwwfOw8HBCQDChohOhENEA0EBAQHAwIRFxEJCg0SBAQDBgUBqQQHEwcTJgkDAQIBAgEECgYHBhMIKQgIDgMBAQMCAgMCEQAAAAH/Gv7s/7z/UgAYAAACFjc2NjU0JicmJiMiBgYHBgYVFBcWFhcXhwsGCycVFBYbDQkICgUPDAMDHBMg/u4CAQImCwsPBwkIAwoFDQ4IBAYEDgYK//8AHv+WBDICAwAiAC0KAAAHAEkAAAFAAAL+jv7s//j/UgAYADEAAAAWNzY2NTQmJyYmIyIGBgcGBhUUFxYWFxcWFjc2NjU0JicmJiMiBgYHBgYVFBcWFhcX/u0LBgsnFRQWGw0JCAoFDwwDAxwTINILBgsnFRQWGw0JCAoFDwwDAxwTIP7uAgECJgsLDwcJCAMKBQ0OCAQGBA4GCgMCAQImCwsPBwkIAwoFDQ4IBAYEDgYKAAP+cv73AGT/UwAWAC0ARAAAABY3NjY1NCYnJiMiBgYHBhUUFxYWFxcWFjc2NjU0JicmIyIGBgcGFRQXFhYXFxYWNzY2NTQmJyYjIgYGBwYVFBcWFhcX/scLBQojEhMiFgkGCQUYAwIZEhy5CwUKIxITIhYJBgkFGAMCGRIcugoFCyITEiIWCQYJBRgDAhkSHf75AgEDIAsKDAgPAwkEEwwFBAQNBQkDAgEDIAsKDAgPAwkEEwwFBAQNBQkDAgECIgsJDgYPAwkEEwwFBAQNBQkAAAAABP5C/wMAlv9VABcALwBHAF8AAAQWNzY2NTQmJyYmIyIGBgcGBhUUFxYXFxYWNzY2NTQmJyYmIyIGBgcGBhUUFxYXFxYWNzY2NTQmJyYmIyIGBgcGBhUUFxYXFxYWNzY2NTQmJyYmIyIGBgcGBhUUFxYXF/6PCQUJHw8SEhULCAYIAwkOAwggGqMJBQkfDxISFQsIBggDCQ4DCCAaowkFCR8PEhIVCwgGCAMJDgMIIBqjCQUJHw8SEhULCAYIAwkOAwggGvwBAQIdCQkKCAgGAwkDBw4HBAQICwgDAQECHQkJCggIBgMJAwcOBwQECAsIAwEBAh0JCQoICAYDCQMHDgcEBAgLCAMBAQIdCQkKCAgGAwkDBw4HBAQICwgAAAD//wAe/5YEiQN6ACIALQAAAAcASAAAAQT///ua/hz/1f7jAAcAJgAA/2AAAP//+5r+HP/V/uMABwAnAAD/YAAA//8AHv7hBkIA8gAmAEYAMgAHAEYDSP84///8YP41APT/WwAHACkA5v+wAAD///t6/qIADv96AAYAKgDX//8AHv+WBIkETAAiAC0AAAAHAEwAAAC+AAIAHv6eBhQA+AAyAFsAAAQzMjY3NiYnJiYjIgYHBiMiJyYmNTQ2HwIyNTQmJyYmJyIGBhUUFhceAjMyNzYzMhcAMzI2NzY1NCYnJiMiBwYGBwYVFBcWFxYWFxYWFRQHBgYHBgYVFBYXFwSvBQYDAgMwKTl4TDqKhn4vKCopLignQyIYNB0oRTwzNhdUSjp4fmulahcrYXsBOxkPEwoQb2ipcRYKNUUHAQgGfDuWLSUpBwUJBAIQDxYmCwMDCSYUGxcKDQ0JCBoMCw0BAwIJCiINEw0BCRUUHUciGxgGBAES/qQHBw0cM04ZKwECDgoBAwYDAwgDHBENIREJCAUIBAIOBQcGAwcA//8AHv+WBEYBfgAiAC0eAAAHAEYAAAC+//8AH/+WBDEClAAiAC0JAAAHAFkAAAEO///9m/73/x3/WwAHABwBIv4qAAD//wAe/5YE0gOOACMALQCqAAAABwBiAAAA0gAA//8AHv+WBCgD6AAiAC0AAAAHAGQAAAFAAAX/tf/9BvwBswArAFMAdQCXAMUAACQ1NCcmJicmIyIVFBYXHgIXFjMyNTQnJiY1NDc2NjMyFxYWFxYXFhYXFjckMzI2NzY1NCcmJicmIyIGBwYVFBcWFxYWFxYWFRQHBgYVFBYXFhYXBDY1NCYnJiYnJicmJicmJicmJyYjIgcGFRQXFhcWFxYWMzI2NTQmJyYmJyYnJiYnJiYnJicmIyIHBhUUFxYXFhcWFjMWMzI3NiYnJiYnJiYjIgcGIwYjIyYmJyciFRQWFxYXFhYXFjMyNzY3Njc2MzIXBJIWPeR3QzybBAcMGyQULBMRCBoZAglEKmxuIxsMEwIBDBpREfz3Ew0PBw0CB1dKilQ0RgYBBwZgMXUjHCEFBhcMEQYPCgRREwoHCAgHAwYHBwIGBQELExBBFAQBCwwLFSIPHRn2EwoHCAgHAwYHBwIGBQELExBBFAQBCwwLFSIPHRmfDgoBAw8NJXs0EVJWVbIYLJJhTHNHMyMIDQs0JCKGWBQ9RDZDbV9ERCSegtIJDBVAXBEKShARChISCwQIBQQEEBoOCQQaEzMREg8XFwsJBAoCHAUGChYFCiM2EiIMCgECBAMDBQMWDgoaDQkFBhMFBQUCAQMCMwkNCAgBAQoNCAsNEQMNCQEUBQQNAgQJCwwfOw8HBAkNCAgBAQoNCAsNEQMNCQEUBQQNAgQJCwwfOw8HBMQEBxMHEyYJAwECAQIBBAoGBwYTCCkICA4DAQEDAgIDAhEA//8AHv+WBDICAwAiAC0KAAAHAGMAAAFAAAQAHv/9BWkBtAAoAEoAbACaAAAkMzI2NzY1NCYnJiMiBwYGBwYVFBcWFxYWFxYWFRQHBgcGFRQWFxYWFwQ2NTQmJyYmJyYnJiYnJiYnJicmIyIHBhUUFxYXFhcWFjMyNjU0JicmJicmJyYmJyYmJyYnJiMiBwYVFBcWFxYXFhYzFjMyNzYmJyYmJyYmIyIHBiMGIyMmJicnIhUUFhcWFxYWFxYzMjc2NzY3NjMyFwJRHQ8RCQ9qZKFtFQszQgYBCAd1OZErIigHBgwREBcGEQsB8BMKBwgIBwMGBwcCBgUBCxMQQRQEAQsMCxUiDx0Z9hMKBwgIBwMGBwcCBgUBCxMQQRQEAQsMCxUiDx0Znw4KAQMPDSV7NBFSVlWyGCySYUxzRzMjCA0LNCQihlgUPUQ2Q21fREQknoLDBgcOGTFKGSkBAg0KAQIHAgMIAxsQDCAQCgcICA8FBwYDAQMCDQkNCAgBAQoNCAsNEQMNCQEUBQQNAgQJCwwfOw8HBAkNCAgBAQoNCAsNEQMNCQEUBQQNAgQJCwwfOw8HBMQEBxMHEyYJAwECAQIBBAoGBwYTCCkICA4DAQEDAgIDAhEAAP//AB7/lgQoA+gAIgAtAAAABwBgAAABQP//AB7/+gUpAV4AIgA5AAAABwBnAZAA0gAB/HkAzf37ATEAIwAAJDY3NjU0JyYnIyIHBhUUFxYHBgYjIicmIyIGFRQWFxYWMzI3/csiBggMICwJBwYGDQ0BAx8cVGYXCAULHBY6djIVEtQPCQsJDAkZAwMEAwUODgQLBTQLBAIHFAoaHwMAAAD///yhAPX+IwFZAAYAHCgoAAT/zf/9BWkCGwBGAGgAigC4AAAkNjc2Njc2MzI2NzY2NzYnJiMHIiY1NjYnJiMiBgcGBgcUIyInJiYnJiYnJiYnLgInJyIVFBYXFhYXFhYzMhUGBgcGFRQzJDY1NCYnJiYnJicmJicmJicmJyYjIgcGFRQXFhcWFxYWMzI2NTQmJyYmJyYnJiYnJiYnJicmIyIHBhUUFxYXFhcWFjMWMzI3NiYnJiYnJiYjIgcGIwYjIyYmJyciFRQWFxYXFhYXFjMyNzY3Njc2MzIXAX0eDgUSAQEHJmYsHiIJDwYEKUNRPgIUAwI9FAwCAhcBCR8rMD0YFCMIBxQQBw4aCB4IJwscT0YXWR0ZAQgEDg4CtxMKBwgIBwMGBwcCBgUBCxMQQRQEAQsMCxUiDx0Z9hMKBwgIBwMGBwcCBgUBCxMQQRQEAQsMCxUiDx0Znw4KAQMPDSV7NBFSVlWyGCySYUxzRzMjCA0LNCQihlgUPUQ2Q21fREQknoK0BA0FGAEBBAMCBwcKBAMBAwIGLAMBAwUEKQEBBQcWGBU8JB8mCwUDAgECAwt6GDs7EAUJAQQLBhIDCA0JDQgIAQEKDQgLDREDDQkBFAUEDQIECQsMHzsPBwQJDQgIAQEKDQgLDREDDQkBFAUEDQIECQsMHzsPBwTEBAcTBxMmCQMBAgECAQQKBgcGEwgpCAgOAwEBAwICAwIRAAQAHv/9BWkBwgAvAFEAcwChAAAkNTQnJiQnJiMiBhUUFhceAhcWMzI1NCcmJjU0NzY2MzIXFhYXFhYXHgIXFhY3NjY1NCYnJiYnJicmJicmJicmJyYjIgcGFRQXFhcWFxYWMzI2NTQmJyYmJyYnJiYnJiYnJicmIyIHBhUUFxYXFhcWFjMWMzI3NiYnJiYnJiYjIgcGIwYjIyYmJyciFRQWFxYXFhYXFjMyNzY3Njc2MzIXA1gaR/75iU9BUWMFBw4eHCUvGhQJHxwCC04wfn4oIA0NCAMBBRIWHkUOuBMKBwgIBwMGBwcCBgUBCxMQQRQEAQsMCxUiDx0Z9hMKBwgIBwMGBwcCBgUBCxMQQRQEAQsMCxUiDx0Znw4KAQMPDSV7NBFSVlWyGCySYUxzRzMjCA0LNCQihlgUPUQ2Q21fREQknoK+CgwaSmsTDCguExQKFRYICAkFAwYUHREJBR0XPBMVERAXDgkIBwMECAIHCQ0ICAEBCg0ICw0RAw0JARQFBA0CBAkLDB87DwcECQ0ICAEBCg0ICw0RAw0JARQFBA0CBAkLDB87DwcExAQHEwcTJgkDAQIBAgEECgYHBhMIKQgIDgMBAQMCAgMCEQD///znAM3+aQExAAIAHG4AAAIAHv+WBCgBfgAeAE0AACQ2NjU0JicmJicmLwImJyYjIgcGFRQXFhcWFxYWMwA2NzY1NCYjIgYVFBcWFRQGIyInLgI3NjcyNjc2NTQnJiYjIgcGFRQXFhcWFjMCbBkICwcJCQcGBRENDBUTRhcEAQwPChkkESEaAQm9DgNaTC4yG0FiUWt+LXBLBAErBhcCBQYOekIwCyUTNuNG5lrGBAsKCAkBAQsODggkGRYGBA4CBQoMDyBCEAcF/tA+RhENNywGCQkOIDkrKB8MLzISBQMCAgUDBgQMCwIHFRATN1EZIgAAAAL84P8U/kr/egAYADEAAAQWNzY2NTQmJyYmIyIGBgcGBhUUFxYWFxcWFjc2NjU0JicmJiMiBgYHBgYVFBcWFhcX/T8LBgsnFRQWGw0JCAoFDwwDAxwTINILBgsnFRQWGw0JCAoFDwwDAxwTIOoCAQImCwsPBwkIAwoFDQ4IBAYEDgYKAwIBAiYLCw8HCQgDCgUNDggEBgQOBgoAAAP8fP8U/q7/egAYADEASgAABBY3NjY1NCYnJiYjIgYGBwYGFRQXFhYXFxYWNzY2NTQmJyYmIyIGBgcGBhUUFxYWFxcWFjc2NjU0JicmJiMiBgYHBgYVFBcWFhcX/NsLBgsnFRQWGw0JCAoFDwwDAxwTINILBgsnFRQWGw0JCAoFDwwDAxwTINILBgsnFRQWGw0JCAoFDwwDAxwTIOoCAQImCwsPBwkIAwoFDQ4IBAYEDgYKAwIBAiYLCw8HCQgDCgUNDggEBgQOBgoDAgECJgsLDwcJCAMKBQ0OCAQGBA4GCgAAAAT8Dv8U/wj/egAYADEASgBjAAAEFjc2NjU0JicmJiMiBgYHBgYVFBcWFhcXFhY3NjY1NCYnJiYjIgYGBwYGFRQXFhYXFxYWNzY2NTQmJyYmIyIGBgcGBhUUFxYWFxcWFjc2NjU0JicmJiMiBgYHBgYVFBcWFhcX/G0LBgsnFRQWGw0JCAoFDwwDAxwTINILBgsnFRQWGw0JCAoFDwwDAxwTINILBgsnFRQWGw0JCAoFDwwDAxwTINILBgsnFRQWGw0JCAoFDwwDAxwTIOoCAQImCwsPBwkIAwoFDQ4IBAYEDgYKAwIBAiYLCw8HCQgDCgUNDggEBgQOBgoDAgECJgsLDwcJCAMKBQ0OCAQGBA4GCgMCAQImCwsPBwkIAwoFDQ4IBAYEDgYKAAAAAAMAG/+WBWYCzQAuAF0AjAAAJCcmJicmNTQ2NzY3NjY3Njc2NjU0JicmBgcOAgcGBgcGBgcGBwYGFxYXFxYWFwQnJiYnJjU0Njc2NzY2NzY3NjY1NCYnJgYHDgIHBgYHBgYHBgcGBhcWFxcWFhcCNjc2NTQmIyIGFRQXFhUUBiMiJy4CNzY3MjY3NjU0JyYmIyIHBhUUFxYXFhYzAVkBBEocDREDGCFudycTHwIKJRUQFg0UHRQSCRQSLlRNDTAPTwMHMTQvigsC+QEEShwNEQMYIW53JxMfAgolFRAWDRQdFBIJFBIuVE0NMA9PAwcxNC+KC+K9DgNaTC4yG0FiUWt+LXBLBAErBhcCBQYOekIwCyUTNuNG5lrhAgknCgQDAgcBBw8wbF8sOQQLAwoLAQECAwQeKi0YJRxDQh8FDwUaAgQFBwgbBQ4CCScKBAMCBwEHDzBsXyw5BAsDCgsBAQIDBB4qLRglHENCHwUPBRoCBAUHCBsF/rs+RhENNywGCQkOIDkrKB8MLzISBQMCAgUDBgQMCwIHFRATN1EZIgAAAfua/rz/1f+DACMAAAI2NTQnJiYnJiEiBw4CBwYVFBYzNyQzMhYXFhUUBwYVFBYzRhsGDDYsgf68ZaBdbx4OBQMCGQFfi2V7SlQKCHMg/rwcFA0MFyERNQYECAgJAwUDBQENChATIQsUEAcIFgAAAAL7mv68/9X/gwAjADsAAAI2NTQnJiYnJiEiBw4CBwYVFBYzNyQzMhYXFhUUBwYVFBYzJBY3NjY1NCYnJiYjIgYGBwYGFRQXFhcXRhsGDDYsgf68ZaBdbx4OBQMCGQFfi2V7SlQKCHMg/hcJBQkfDxISFQsIBggDCQ4DCCAa/rwcFA0MFyERNQYECAgJAwUDBQENChATIQsUEAcIFiABAQIdCQkKCAgGAwkDBw4HBAQICwgAAAL9Kv50ANb/PwAnAD8AABMyNjU0JyYmJyYmIyIHBgYHBgYHBgYXFxY3NjMlMhYXFhUUBhUUFhckFjc2NjU0JicmJiMiBgYHBgYVFBcWFxeXHiEXFUwoTYlQMJwdXEIjJwwHAgIFAiALFAFwbMcTDAxIGv6+CQUJHw8SEhULCAYIAwkOAwggGv50GhUYGhcnChMPBgEEAgIJCAUFAwYCAgEMGRoQEQwhBAgUAyEBAQIdCQkKCAgGAwkDBw4HBAQICwgAAP//+3r+hQAO/6sAJgAqALoABgACAAoAAAAC+3r+ywAO/6MAJwAoAAAGFhUUBgYHBgcGBBcmJicmJicmNTQzMgUWFzc2Njc2NzY2NzYzMhcXBTJAIjAIFgI8/uIBj++4TygODg0TAUNafg4ZS0dDDikqDRIGESAx/qp2DgcGDg8CBgEVaAEXMy8TDQsLCwtMFxkDBR8gHgYQEAICBwnIAAAABAAe/5YFZgOVAC4AXQB8AKsAAAAnJiYnJjU0Njc2NzY2NzY3NjY1NCYnJgYHDgIHBgYHBgYHBgcGBhcWFxcWFhcEJyYmJyY1NDY3Njc2Njc2NzY2NTQmJyYGBw4CBwYGBwYGBwYHBgYXFhcXFhYXBDY2NTQmJyYmJyYvAiYnJiMiBwYVFBcWFxYXFhYzADY3NjU0JiMiBhUUFxYVFAYjIicuAjc2NzI2NzY1NCcmJiMiBwYVFBcWFxYWMwKjAQRKHA0RAxghbncnEx8CCiUVEBYNFB0UEgkUEi5UTQ0wD08DBzE0L4oLAa8BBEocDREDGCFudycTHwIKJRUQFg0UHRQSCRQSLlRNDTAPTwMHMTQvigv+MBkICwcJCQcGBRENDBUTRhcEAQwPChkkESEaAQm9DgNaTC4yG0FiUWt+LXBLBAErBhcCBQYOekIwCyUTNuNG5loBqQIJJwoEAwIHAQcPMGxfLDkECwMKCwEBAgMEHiotGCUcQ0IfBQ8FGgIEBQcIGwXWAgknCgQDAgcBBw8wbF8sOQQLAwoLAQECAwQeKi0YJRxDQh8FDwUaAgQFBwgbBRUECwoICQEBCw4OCCQZFgYEDgIFCgwPIEIQBwX+0D5GEQ03LAYJCQ4gOSsoHwwvMhIFAwICBQMGBAwLAgcVEBM3URkiAAAAAAIAH/+WBIoB5gAyAGEAACQzMjY3NiYnJiYjIgYHBiMiJyYmNTQ2HwIyNzYmJyYmJyIGBhUUFhceAjMyNzYzMhcCNjc2NTQmIyIGFRQXFhUUBiMiJy4CNzY3MjY3NjU0JyYmIyIHBhUUFxYXFhYzBHAMBQQCAy0oN3FJOI11fCoiKycsJyVAIBEFBTQeJUI6MDQVUEY3cnhmapkWKVl4rr0OA1pMLjIbQWJRa34tcEsEASsGFwIFBg56QjALJRM240bmWvACAwkkExoWCwsMCAgYDAoNAQMCCAgiDRIMAQgUExxEIBkXBgMBEf6iPkYRDTcsBgkJDiA5KygfDC8yEgUDAgIFAwYEDAsCBxUQEzdRGSIAAAEAHv+WBCgAnAAuAAAENjc2NTQmIyIGFRQXFhUUBiMiJy4CNzY3MjY3NjU0JyYmIyIHBhUUFxYXFhYzA1q9DgNaTC4yG0FiUWt+LXBLBAErBhcCBQYOekIwCyUTNuNG5lpqPkYRDTcsBgkJDiA5KygfDC8yEgUDAgIFAwYEDAsCBxUQEzdRGSIAAAAAAgAe/5YFZgLDAC4AXQAAJCcmJicmNTQ2NzY3NjY3Njc2NjU0JicmBgcOAgcGBgcGBgcGBwYGFxYXFxYWFwI2NzY1NCYjIgYVFBcWFRQGIyInLgI3NjcyNjc2NTQnJiYjIgcGFRQXFhcWFjMERwEEShwNEQMYIW53JxMfAgolFRAWDRQdFBIJFBIuVE0NMA9PAwcxNC+KC+K9DgNaTC4yG0FiUWt+LXBLBAErBhcCBQYOekIwCyUTNuNG5lrXAgknCgQDAgcBBw8wbF8sOQQLAwoLAQECAwQeKi0YJRxDQh8FDwUaAgQFBwgbBf67PkYRDTcsBgkJDiA5KygfDC8yEgUDAgIFAwYEDAsCBxUQEzdRGSL///4JAOH/iwFFAAcAHAGQABQAAAACABv/lgQoAs0ALgBdAAAkJyYmJyY1NDY3Njc2Njc2NzY2NTQmJyYGBw4CBwYGBwYGBwYHBgYXFhcXFhYXADY3NjU0JiMiBhUUFxYVFAYjIicuAjc2NzI2NzY1NCcmJiMiBwYVFBcWFxYWMwFZAQRKHA0RAxghbncnEx8CCiUVEBYNFB0UEgkUEi5UTQ0wD08DBzE0L4oLAgy9DgNaTC4yG0FiUWt+LXBLBAErBhcCBQYOekIwCyUTNuNG5lrhAgknCgQDAgcBBw8wbF8sOQQLAwoLAQECAwQeKi0YJRxDQh8FDwUaAgQFBwgbBf6xPkYRDTcsBgkJDiA5KygfDC8yEgUDAgIFAwYEDAsCBxUQEzdRGSIAAAAAAwAe/5YEKAOVAC4ATQB8AAAAJyYmJyY1NDY3Njc2Njc2NzY2NTQmJyYGBw4CBwYGBwYGBwYHBgYXFhcXFhYXBjY2NTQmJyYmJyYvAiYnJiMiBwYVFBcWFxYXFhYzADY3NjU0JiMiBhUUFxYVFAYjIicuAjc2NzI2NzY1NCcmJiMiBwYVFBcWFxYWMwKjAQRKHA0RAxghbncnEx8CCiUVEBYNFB0UEgkUEi5UTQ0wD08DBzE0L4oLLBkICwcJCQcGBRENDBUTRhcEAQwPChkkESEaAQm9DgNaTC4yG0FiUWt+LXBLBAErBhcCBQYOekIwCyUTNuNG5loBqQIJJwoEAwIHAQcPMGxfLDkECwMKCwEBAgMEHiotGCUcQ0IfBQ8FGgIEBQcIGwXnBAsKCAkBAQsODggkGRYGBA4CBQoMDyBCEAcF/tA+RhENNywGCQkOIDkrKB8MLzISBQMCAgUDBgQMCwIHFRATN1EZIgAAAAAEAB7/+gUpAXQAGgA8AF4AhwAAJDc2Njc2Njc2NTQnJiYjIgYHBgcGBgcGFRQzJDY1NCYnJiYnJicmJicmJicmJyYjIgcGFRQXFhcWFxYWMzI2NTQmJyYmJyYnJiYnJiYnJicmIyIHBhUUFxYXFhcWFjMWNTQmJyYmJyYjIgYHBiMiJicmJicmIyIVFBYXFhcWMzI3NjMyFxYXFwFkIBEQCAYLCQ4FCTYXISEOBwkFCQkdUAJmEwoHCAgHAwYHBwIGBQELExBBFAQBCwwLFSIPHRn2EwoHCAgHAwYHBwIGBQELExBBFAQBCwwLFSIPHRnfEQwlfjEPX1isOBlxcMs1ES0EIwYLBw43H1r+ecqiLSMiN2pCoRgNIx0WHQwTCAYDBgUQGg0mGBkHFw8YIAkNCAgBAQoNCAsNEQMNCQEUBQQNAgQJCwwfOw8HBAkNCAgBAQoNCAsNEQMNCQEUBQQNAgQJCwwfOw8HBMcIBxQGFCkKAwMCAQIBAQkBBwoJCgwvCBgGBAIDCgUAAAACAB7/lgRnAXYAJwBWAAAkNTQmJyYmJyYjIgYHBiMiJicmJyYjIhUUFhcWFxYzMjc2MzIXFhcXAjY3NjU0JiMiBhUUFxYVFAYjIicuAjc2NzI2NzY1NCcmJiMiBwYVFBcWFxYWMwRnDwofayoNUUuSLxVgX60tDykeBQkFDC8aTNhorIgnHxwwWDnjvQ4DWkwuMhtBYlFrfi1wSwQBKwYXAgUGDnpCMAslEzbjRuZa9AgHFAYUKQoDAwIBAgEBCgcKCQoMLwgYBgQCAwoF/qI+RhENNywGCQkOIDkrKB8MLzISBQMCAgUDBgQMCwIHFRATN1EZIgAAAAT/yv/9BWkBgwAxAFMAdQCjAAAkFjMyNzYmJyYmIyIGBwYjIicmJjU0NjMyFjMyNzYmJyYmIyIGFRQWFxYWMzI3NjMyFyQ2NTQmJyYmJyYnJiYnJiYnJicmIyIHBhUUFxYXFhcWFjMyNjU0JicmJicmJyYmJyYmJyYnJiMiBwYVFBcWFxYXFhYzFjMyNzYmJyYmJyYmIyIHBiMGIyMmJicnIhUUFhcWFxYWFxYzMjc2NzY3NjMyFwLpEQUGAwIiHShUNSlmWFcjHBwdIRoYHSsHCgQEJBgcMSk1JTs0OXltdEoQHUVWASITCgcICAcDBgcHAgYFAQsTEEEUBAELDAsVIg8dGfYTCgcICAcDBgcHAgYFAQsTEEEUBAELDAsVIg8dGZ8OCgEDDw0lezQRUlZVshgskmFMc0czIwgNCzQkIoZYFD1ENkNtX0REJJ6CvAMFBx4PFRMJCgoHBxQJCAoDBQcbDA4LEBcWOBoeDwQBDwQJDQgIAQEKDQgLDREDDQkBFAUEDQIECQsMHzsPBwQJDQgIAQEKDQgLDREDDQkBFAUEDQIECQsMHzsPBwTEBAcTBxMmCQMBAgECAQQKBgcGEwgpCAgOAwEBAwICAwIRAAAAAAMAHv+WBWYCwwAuAE0AfAAAJCcmJicmNTQ2NzY3NjY3Njc2NjU0JicmBgcOAgcGBgcGBgcGBwYGFxYXFxYWFwQ2NjU0JicmJicmLwImJyYjIgcGFRQXFhcWFxYWMwA2NzY1NCYjIgYVFBcWFRQGIyInLgI3NjcyNjc2NTQnJiYjIgcGFRQXFhcWFjMERwEEShwNEQMYIW53JxMfAgolFRAWDRQdFBIJFBIuVE0NMA9PAwcxNC+KC/4wGQgLBwkJBwYFEQ0MFRNGFwQBDA8KGSQRIRoBCb0OA1pMLjIbQWJRa34tcEsEASsGFwIFBg56QjALJRM240bmWtcCCScKBAMCBwEHDzBsXyw5BAsDCgsBAQIDBB4qLRglHENCHwUPBRoCBAUHCBsFFQQLCggJAQELDg4IJBkWBgQOAgUKDA8gQhAHBf7QPkYRDTcsBgkJDiA5KygfDC8yEgUDAgIFAwYEDAsCBxUQEzdRGSIAAAD//wAe/zEFKQB8ACIAOQAAAAcAZwMg/0z//wAe/zEFKQB8ACIAOQAAAAcAZwHM/0wAAQAe//UEwgD4ADIAAAQzMjY3NiYnJiYjIgYHBiMiJyYmNTQ2HwIyNTQmJyYmJyIGBhUUFhceAjMyNzYzMhcErwUGAwIDMCk5eEw6ioZ+LygqKS4oJ0MiGDQdKEU8MzYXVEo6eH5rpWoXK2F7CwMDCSYUGxcKDQ0JCBoMCw0BAwIJCiINEw0BCRUUHUciGxgGBAESAAEAHv/6BSkAfAAoAAAENTQmJyYmJyYjIgYHBiMiJicmJicmIyIVFBYXFhcWMzI3NjMyFxYXFwUpEQwlfjEPX1isOBlxcMs1ES0EIwYLBw43H1r+ecqiLSMiN2pCBggHFAYUKQoDAwIBAgEBCQEHCgkKDC8IGAYEAgMKBf//AB7/MQUpAHwAIgA5AAAABwBfAn7/YP//AB7/+gUpAWgAIgA5AAAABwBfAg0A8AACAB7/+gXeApEALgBXAAAkJyYmJyY1NDY3Njc2Njc2NzY2NTQmJyYGBw4CBwYGBwYGBwYHBgYXFhcXFhYXFjU0JicmJicmIyIGBwYjIiYnJiYnJiMiFRQWFxYXFjMyNzYzMhcWFxcEvwEEShwNEQMYIW53JxMfAgolFRAWDRQdFBIJFBIuVE0NMA9PAwcxNC+KC3URDCV+MQ9fWKw4GXFwyzURLQQjBgsHDjcfWv55yqItIyI3akKlAgknCgQDAgcBBw8wbF8sOQQLAwoLAQECAwQeKi0YJRxDQh8FDwUaAgQFBwgbBa8IBxQGFCkKAwMCAQIBAQkBBwoJCgwvCBgGBAIDCgUAAAACABv/+gUpApEALgBXAAAkJyYmJyY1NDY3Njc2Njc2NzY2NTQmJyYGBw4CBwYGBwYGBwYHBgYXFhcXFhYXBDU0JicmJicmIyIGBwYjIiYnJiYnJiMiFRQWFxYXFjMyNzYzMhcWFxcBWQEEShwNEQMYIW53JxMfAgolFRAWDRQdFBIJFBIuVE0NMA9PAwcxNC+KCwPbEQwlfjEPX1isOBlxcMs1ES0EIwYLBw43H1r+ecqiLSMiN2pCpQIJJwoEAwIHAQcPMGxfLDkECwMKCwEBAgMEHiotGCUcQ0IfBQ8FGgIEBQcIGwWvCAcUBhQpCgMDAgECAQEJAQcKCQoMLwgYBgQCAwoFAAADAB7/+gXeApEALgBQAHkAACQnJiYnJjU0Njc2NzY2NzY3NjY1NCYnJgYHDgIHBgYHBgYHBgcGBhcWFxcWFhckNjU0JicmJicmJyYmJyYmJyYnJiMiBwYVFBcWFxYXFhYzBDU0JicmJicmIyIGBwYjIiYnJiYnJiMiFRQWFxYXFjMyNzYzMhcWFxcEvwEEShwNEQMYIW53JxMfAgolFRAWDRQdFBIJFBIuVE0NMA9PAwcxNC+KC/4HEwoHCAgHAwYHBwIGBQELExBBFAQBCwwLFSIPHRkCkhEMJX4xD19YrDgZcXDLNREtBCMGCwcONx9a/nnKoi0jIjdqQqUCCScKBAMCBwEHDzBsXyw5BAsDCgsBAQIDBB4qLRglHENCHwUPBRoCBAUHCBsFGAkNCAgBAQoNCAsNEQMNCQEUBQQNAgQJCwwfOw8HBMcIBxQGFCkKAwMCAQIBAQkBBwoJCgwvCBgGBAIDCgUAAAAAAwAe//oFKQOLAC4AUAB5AAAAJyYmJyY1NDY3Njc2Njc2NzY2NTQmJyYGBw4CBwYGBwYGBwYHBgYXFhcXFhYXBjY1NCYnJiYnJicmJicmJicmJyYjIgcGFRQXFhcWFxYWMwQ1NCYnJiYnJiMiBgcGIyImJyYmJyYjIhUUFhcWFxYzMjc2MzIXFhcXAt8BBEocDREDGCFudycTHwIKJRUQFg0UHRQSCRQSLlRNDTAPTwMHMTQvigsZEwoHCAgHAwYHBwIGBQELExBBFAQBCwwLFSIPHRkCkhEMJX4xD19YrDgZcXDLNREtBCMGCwcONx9a/nnKoi0jIjdqQgGfAgknCgQDAgcBBw8wbF8sOQQLAwoLAQECAwQeKi0YJRxDQh8FDwUaAgQFBwgbBeIJDQgIAQEKDQgLDREDDQkBFAUEDQIECQsMHzsPBwTHCAcUBhQpCgMDAgECAQEJAQcKCQoMLwgYBgQCAwoFAAAAAAMAG//6Bd4CkQAuAF0AhgAAJCcmJicmNTQ2NzY3NjY3Njc2NjU0JicmBgcOAgcGBgcGBgcGBwYGFxYXFxYWFwQnJiYnJjU0Njc2NzY2NzY3NjY1NCYnJgYHDgIHBgYHBgYHBgcGBhcWFxcWFhcWNTQmJyYmJyYjIgYHBiMiJicmJicmIyIVFBYXFhcWMzI3NjMyFxYXFwFZAQRKHA0RAxghbncnEx8CCiUVEBYNFB0UEgkUEi5UTQ0wD08DBzE0L4oLA3EBBEocDREDGCFudycTHwIKJRUQFg0UHRQSCRQSLlRNDTAPTwMHMTQvigt1EQwlfjEPX1isOBlxcMs1ES0EIwYLBw43H1r+ecqiLSMiN2pCpQIJJwoEAwIHAQcPMGxfLDkECwMKCwEBAgMEHiotGCUcQ0IfBQ8FGgIEBQcIGwUEAgknCgQDAgcBBw8wbF8sOQQLAwoLAQECAwQeKi0YJRxDQh8FDwUaAgQFBwgbBa8IBxQGFCkKAwMCAQIBAQkBBwoJCgwvCBgGBAIDCgUAAAAABAAe//oF3gOLAC4AXQB/AKgAAAAnJiYnJjU0Njc2NzY2NzY3NjY1NCYnJgYHDgIHBgYHBgYHBgcGBhcWFxcWFhcEJyYmJyY1NDY3Njc2Njc2NzY2NTQmJyYGBw4CBwYGBwYGBwYHBgYXFhcXFhYXJDY1NCYnJiYnJicmJicmJicmJyYjIgcGFRQXFhcWFxYWMwQ1NCYnJiYnJiMiBgcGIyImJyYmJyYjIhUUFhcWFxYzMjc2MzIXFhcXAt8BBEocDREDGCFudycTHwIKJRUQFg0UHRQSCRQSLlRNDTAPTwMHMTQvigsB6wEEShwNEQMYIW53JxMfAgolFRAWDRQdFBIJFBIuVE0NMA9PAwcxNC+KC/4HEwoHCAgHAwYHBwIGBQELExBBFAQBCwwLFSIPHRkCkhEMJX4xD19YrDgZcXDLNREtBCMGCwcONx9a/nnKoi0jIjdqQgGfAgknCgQDAgcBBw8wbF8sOQQLAwoLAQECAwQeKi0YJRxDQh8FDwUaAgQFBwgbBf4CCScKBAMCBwEHDzBsXyw5BAsDCgsBAQIDBB4qLRglHENCHwUPBRoCBAUHCBsFGAkNCAgBAQoNCAsNEQMNCQEUBQQNAgQJCwwfOw8HBMcIBxQGFCkKAwMCAQIBAQkBBwoJCgwvCBgGBAIDCgUAAAAABAAe/qwDfAFTACQAPQBWAG8AAAAWFzImJyYnJiYnJicmJicmJgciBgYHBhUUFxcWFxYWFxYXFhcCFjc2NjU0JicmJiMiBgYHBgYVFBcWFhcXFhY3NjY1NCYnJiYjIgYGBwYGFRQXFhYXFxYWNzY2NTQmJyYmIyIGBgcGBhUUFxYWFxcCXxcFCAkRFyFEbx6ZNQcMCQkWGAUQBgIEDBEWMQcsEhs7cMK6CwYLJxUUFhsNCQgKBQ8MAwMcEyDmCwYLJxUUFhsNCQgKBQ8MAwMcEyDSCwYLJxUUFhsNCQgKBQ8MAwMcEyD+tgkBDQ8TEiVLHpH2Gx0KCgUCAgIDBAQIL0dbWg45FB8wVlIBewIBAiYLCw8HCQgDCgUNDggEBgQOBgoDAgECJgsLDwcJCAMKBQ0OCAQGBA4GCgMCAQImCwsPBwkIAwoFDQ4IBAYEDgYKAAAAAAIAHv6sAoMBUwAkAD0AAAAWFzImJyYnJiYnJicmJicmJgciBgYHBhUUFxcWFxYWFxYXFhcCFjc2NjU0JicmJiMiBgYHBgYVFBcWFhcXAl8XBQgJERchRG8emTUHDAkJFhgFEAYCBAwRFjEHLBIbO3DCugsGCycVFBYbDQkICgUPDAMDHBMg/rYJAQ0PExIlSx6R9hsdCgoFAgICAwQECC9HW1oOORQfMFZSAXsCAQImCwsPBwkIAwoFDQ4IBAYEDgYKAP///Zv+TwJv/t0ABgBFAIj///2b/scCb/9VAAMAWAJOAAAAAAABAB7/qQL6AMAAJwAABDMyNjc2NTQmJyYjIgcGBgcGFRQXFhcWFhcWFhUUBwYHBgYVFBYXFwKaHhEVChJ8c755Ggw7TQcBCQuFQ6YyKC4IBQ4IDREYK1cHCA4gOVYcLwECEAsBAwcDBAgEHxMOJRIMCAYMBg0FCAYDCAAAAwAe/qwCgwFTACQAQgBbAAAAFhcyJicmJyYmJyYnJiYnJiYHIgYGBwYVFBcXFhcWFhcWFxYXAjMyNTQnJzQzMhcXMjY1NCYnJiYjByIVFBcWFxYXFhY3NjY1NCYnJiYjIgYGBwYGFRQXFhYXFwJfFwUICREXIURvHpk1BwwJCRYYBRAGAgQMERYxBywSGztwwvEXIAsLExwUWA0MBgcINWNpAQYKCQ0WPQsGCycVFBYbDQkICgUPDAMDHBMg/rYJAQ0PExIlSx6R9hsdCgoFAgICAwQECC9HW1oOORQfMFZSAiIGBCEmAQECAwcFBgUFAgEDCgQFHS4LqgIBAiYLCw8HCQgDCgUNDggEBgQOBgoAAAD//wAf/7oEiQJ2ACIAWQAAAAcAWQCCAPAAAgAe/14EBwDDAC4ATwAABDU0JyYkJyYjIgYVFBYXHgIXFjMyNTQnJiY1NDc2NjMyFxYWFxYXHgIXFhY3BDMyNzY1NCYnJiYjIgcGFRQWFxYXFhYXFhUUBwYVFBYXBAcfVv6/p19TYngGCRElIS45IBkMJSMDDV87mpkxJxAbAgEGFxolVBH+wg4MBxVLQTB5Mz8aCxkdCBB2ZRIKFgcdGnsNEB5bghcPMTgWGQ0ZGgoLCwcDCBgiFQkJJBtIGBkVIR8LCgkEBQkCIwQLHylHFQ8UDwUGBQYEAgIUHBUKDRAWBwMECQUAAAEAHv6sAoMBUwAkAAAAFhcyJicmJyYmJyYnJiYnJiYHIgYGBwYVFBcXFhcWFhcWFxYXAl8XBQgJERchRG8emTUHDAkJFhgFEAYCBAwRFjEHLBIbO3DC/rYJAQ0PExIlSx6R9hsdCgoFAgICAwQECC9HW1oOORQfMFZSAAABABr/qgA8ALwAEwAAFjMyNzY2NSYmJyYjIgcGBhUUFhclBgYFAwMBBAQDBwcDBAEDA1YFAxkidUkKBwcJWmUiGQMA//8AHv+pBIkDjgAiAEYAAAAHAEgAAAEY///9kP48AvX/BAAGAE8AkgAB+90Ap/v/AZAAEwAAJDMyNzY2NSYmJyYjIgcGBhUUFhf76QUFBgMDAQQEAwcHAwQBAwOnBAMVHWM+CQYGB01WHRUDAAH9kP6qAvX/cgA1AAAANjY3NjU0JyYGBwYGIyInJiYjIgcGBwciNjU0JgcGBgcGBgcGBgcOAjMyNzY2NzIWFxYWFwHVjXoVBAgFGRlFbjRcWWm5XTEzwTsTAQUbEBEnBgsHAgIFCgMJAgQHRpbcVjtmS1F2Sv6qGysTAwUGAwIGCBYWJy4tBhcUBykGDBECAgsECRIfHBYZCBQJGTMvAh8gIiMDAAAAAAP9dv53AvH/rABNAGIAbwAAADY3Njc2JDcyFhcWFhcWMzI2NzcXFhcWFxYzMjc2NTQmIyIGFxYGIyIvAjQmJyYjIgYHBgYHBgcGBQciNTQmIyIGBwYVFBYVFAYHBhUkIyInJyYmNTQ2NzY2MzIXFhYVFAcGNjMWFRQGBwYjIiY1/XYhGhITRgE0XQMEBQknFhkdKlkfDhFWaFM0HiQaEEonLykdBAMQDQedoAEiMBEZMl4XCBIFBBZi/vsfAQQID18PBQIEDAUDNwQLKDAhGRUKESkSDQ0PFgWtBAx9EQcUIRom/ncICAcFFkURCQsWJQoLJx8OAxAlHAwGBBI7GxERGBEQLy4gMzIKBCkhDRUCAgIGPgcfGw4oDAQNCBIKIhkOBwO0BQUDAwMGHQcMDgUHHQ0KDTMEAwgDFwcUGhcAAQAo/7wBFwCPABoAABY3NjY3NjY3NjU0JyYmIyIGBwYHBgYHBhUUM6YgERAIBgsJDgUJNhchIQ4HCQUJCR1QRBgNIx0WHQwTCAYDBgUQGg0mGBkHFw8YAAIAHv9/BvUAwwAuAFYAAAQ1NCcmJCcmIyIGFRQWFx4CFxYzMjU0JyYmNTQ3NjYzMhcWFhcWFx4CFxYWNyQzMjY3NjU0JicmIyIHBgYHBhUUFxYXFhYXFhYVFAcGBwYGFRQWFxcG9R9W/r+nX1NieAYJESUhLjkgGQwlIwMNXzuamTEnEBsCAQYXGiVUEfu4HhEVChJ8c755Ggw7TQcBCQuFQ6YyKC4IBQ4IDREYK3sNEB5bghcPMTgWGQ0ZGgoLCwcDCBgiFQkJJBtIGBkVIR8LCgkEBQkCKAcIDiA5VhwvAQIQCwEDBwMECAQfEw4lEgwIBgwGDQUIBgMI///+MP48A5X/BAAHAE8AoP+SAAD///2Q/fYC9f6+AAYATQC6AAEASP4FBOv/CAArAAAAMzI3NjY3Njc2NzY1NCcmJiMiBgcGBwYHBgYHBiMiJyYnJyYjIhQXFhcWFwIAHn91PT4pTxR1ShMNEG0rGyMTEj0yDWCmTQYPL45lSRkcBAMELza2i/4FIBEbGCsKOggCBAQHCA8EBgYoHwg2PAcBEgwIAwQKAQ0NKgcAAAAAAf7fAKL/AQGLABMAACQzMjc2NjUmJicmIyIHBgYVFBYX/usFBQYDAwEEBAMHBwMEAQMDogQDFR1jPgkGBgdNVh0VA///+03+TwAh/t0ABgBYAIgAAftN/scAIf9VABkAAAI2NTQnJyYnJwUGFRQhMiU2MwYHBgYXFhYzYYIBGgo8Xvv+EwEBswEilU8eIQIBAgd3Kv7fUAUDAQQBCQ8WEwILBAMoIQIEAQcIAAEAH/+6BAcBhgBJAAAENjc2Njc2MzI2NzY2NzYnJiMjJiY1NDc2JyYjIgYHBgYHBiMiJyYmJyYmJyYmJy4CJyYmIyIVFBYXFhYXFhYzMhUUBwYVFBYzAkgnEgcXAQEJI5E4JiwMEwgFPk15PgkSAwJOGg8DBRYGAQgUTT5PHhssCgkaFAoRIQoMEwcLMg4jZloeciQgEREICUYFEAYgAQEGAwIJCQ0FAwECAwMUKgMCAwcKKAoBBwgdHhxNLSgxDgcDAwEBAgUNnCBLSxUHCwEEFxoBBgQAAAL9Tf8T/sH/eQAcADkAAAQWNzY2NzU0Jy4CJyYmIyIGBgcGBhUUFxYWFxcWFjc2Njc1NCcuAicmJiMiBgYHBgYVFBcWFhcX/awLBgsmAQYECg8GFhsNCQgKBQ8MAwMcEyDcCwYLJgEGBAoPBhYbDQkICgUPDAMDHBMg6wIBAyEMBAUHBQYGAwkIAwoFDQ4IBAYEDgYKAwIBAyEMBAUHBQYGAwkIAwoFDQ4IBAYEDgYKAAAAAAEAD/+kATwAvwA5AAAWNjc2NjU0NjU2NjMzNzY1NC8DIycmJicmIwcGBwYGFQcGBwcGMQYVFBceAjMyNzc2FTIXFhYzmRUFBwMBDkoSEAICAgYEOTkCAQgJBgYNBwQDBAIFOxcVAggBAQMEChghGAECAggLXAcEBRIlHBMBAgYEAwQGBhIFAR4hIQgFAgEEAyYaIgEFAgICBg8bAgUCBAQCASEoKgAAAAEABQG+AJsC8AAfAAASMzI2NzY2NTQmJyYjIgYVFBYzMjczMhUHBgYHBhUUFx8EChkKJCchGA8OGyUfGwwPAQUCBRccEgcBvg4KJVQjJ0YLBiQfGRkDChMnNB8TCgcDAAUAHv6sBEQBUwAkAD0AVgBvAIgAAAAWFzImJyYnJiYnJicmJicmJgciBgYHBhUUFxcWFxYWFxYXFhcCFjc2NjU0JicmJiMiBgYHBgYVFBcWFhcXFhY3NjY1NCYnJiYjIgYGBwYGFRQXFhYXFxYWNzY2NTQmJyYmIyIGBgcGBhUUFxYWFxcWFjc2NjU0JicmJiMiBgYHBgYVFBcWFhcXAl8XBQgJERchRG8emTUHDAkJFhgFEAYCBAwRFjEHLBIbO3DCugsGCycVFBYbDQkICgUPDAMDHBMg5gsGCycVFBYbDQkICgUPDAMDHBMg0gsGCycVFBYbDQkICgUPDAMDHBMg0gsGCycVFBYbDQkICgUPDAMDHBMg/rYJAQ0PExIlSx6R9hsdCgoFAgICAwQECC9HW1oOORQfMFZSAXsCAQImCwsPBwkIAwoFDQ4IBAYEDgYKAwIBAiYLCw8HCQgDCgUNDggEBgQOBgoDAgECJgsLDwcJCAMKBQ0OCAQGBA4GCgMCAQImCwsPBwkIAwoFDQ4IBAYEDgYKAAMAHv6sArQBUwAkAD0AVgAAABYXMiYnJicmJicmJyYmJyYmByIGBgcGFRQXFxYXFhYXFhcWFwIWNzY2NTQmJyYmIyIGBgcGBhUUFxYWFxcWFjc2NjU0JicmJiMiBgYHBgYVFBcWFhcXAl8XBQgJERchRG8emTUHDAkJFhgFEAYCBAwRFjEHLBIbO3DCugsGCycVFBYbDQkICgUPDAMDHBMg5gsGCycVFBYbDQkICgUPDAMDHBMg/rYJAQ0PExIlSx6R9hsdCgoFAgICAwQECC9HW1oOORQfMFZSAXsCAQImCwsPBwkIAwoFDQ4IBAYEDgYKAwIBAiYLCw8HCQgDCgUNDggEBgQOBgoAAAAB/+z/0QDBAHgAIQAAFjY1NCYnJiYnJicmJicmJicmJyYjIgcGFRQXFhcWFxYWM64TCgcICAcDBgcHAgYFAQsTEEEUBAELDAsVIg8dGS8JDQgIAQEKDQgLDREDDQkBFAUEDQIECQsMHzsPBwQAAAD//wAe/38EBwKoACIAYwAAAAcAWQAAASIAAf7j/uz/hf9SABgAAAIWNzY2NTQmJyYmIyIGBgcGBhUUFxYWFxe+CwYLJxUUFhsNCQgKBQ8MAwMcEyD+7gIBAiYLCw8HCQgDCgUNDggEBgQOBgr//wAe/6kEBgK8ACMARgCBAAAABwBZ//8BNgAAAAEAHv9/BAcAwwAuAAAENTQnJiQnJiMiBhUUFhceAhcWMzI1NCcmJjU0NzY2MzIXFhYXFhceAhcWFjcEBx9W/r+nX1NieAYJESUhLjkgGQwlIwMNXzuamTEnEBsCAQYXGiVUEXsNEB5bghcPMTgWGQ0ZGgoLCwcDCBgiFQkJJBtIGBkVIR8LCgkEBQkCAAAA//8AHv9eBAcCqAAiAEkAAAAHAFkAAAEi//8AHv8xBSkAfAAiADkAAAAHAF8Dif9gAAH9YwCi/YUBiwATAAAkMzI3NjY1JiYnJiMiBwYGFRQWF/1vBQUGAwMBBAQDBwcDBAEDA6IEAxUdYz4JBgYHTVYdFQP//wAe/+UBxQCMACYAXzIUAAcAXwEEABT///wm/nT/0v8/AAMAKP78AAAAAAABAAAAaQDGAAoA6wAEAAEAAgAeAAYAAABkAAAAAgADAAAAYgBiAGwAsgHIAfIB/gJMArYDRgNSA1wDZgNyA3wDhAOQBBQEIAQsBDYERARQBWoFdgZWBmIGbgamBq4HtgieCKYJGAlmCdgKbgs+C3YL0AwyDD4Mgg2ADgoOUA7aDuQPcBAoEO4RahJUEwwTGBMkE24TrBO4E8QUSBTMFYIWOBcCF/4YqBkKGRIZHBlaGeQZ8BpkGqIaxBrQGtga+htOG+4cGhyYHKIcqhzwHRIdGh1GHbIeDB5gHpAfXB/iIBogJiBQIF4gpiCyIL4g4CDsIPYAAQAAAAEAAGFVS+hfDzz1AAMD6AAAAADYuLhPAAAAANsviT76zP32BvwETAAAAAcAAgAAAAAAAAH0AF0AlgAAAAD8oQAA+swFhQAPAAD/GgRQAB4AAP6OAAD+cgAA/kIEZQAeAAD7mgAA+5oGYAAeAAD8YAAA+3oEZQAeBZwAHgRkAB4ETwAfAAD9mwTwAB4ERgAeBxj/tQRQAB4FhQAeBEYAHgVHAB4AAPx5AAD8oQWF/80FhQAeAAD85wRGAB4AAPzgAAD8fAAA/A4EbAAbAAD7mgAA+5oAAP0qAAD7egAA+3oEbAAeBKUAHwRGAB4EbAAeAAD+CQRGABsERgAeBUcAHgSFAB4Fhf/KBGwAHgVHAB4FRwAeBN0AHgVHAB4FRwAeBUcAHgVHAB4FRwAbBUcAHgVHAB4FRwAbBUcAHgOaAB4CngAeAAD9mwAA/ZsDGAAeAs4AHgShAB8EJQAeAVQAHgBWABoEoQAeAAD9kAAA+90AAP2QAAD9dgFnACgHEwAeAAD+MAAA/ZAAAABIAAD+3wAA+00AAPtNBB8AHwAA/U0BTAAPAKAABQRiAB4C0gAeAOj/7AQlAB4AAP7jBB4AHgQlAB4EJQAeBUcAHgAA/WMB4wAeAAD8JgABAAAD6P84AAAHGPrM+xUG/AABAAAAAAAAAAAAAAAAAAAAaQADBD0BkAAFAAgCigJYAAAASwKKAlgAAAFeADIBLAAAAAAFAAAAAAAAAAAAAAEAAAAAAAAAAAAAAABVS1dOAEAAICICAyD/OADIA+gAyAAAAAEAAAAAAfQCvAAAACAAAAAAAAIAAAADAAAAFAADAAEAAAAUAAQA4gAAACQAIAAEAAQAKAAvADkAQABaAGEAegB+AKsA5QGSAtoDqSAYIB0hIiIC//8AAAAgACoAMAA6AEEAWwBiAHsAqwDlAZIC2gOpIBggHCEiIgL//wAAAAAACAAA/8EAAP+8AAD/q/84/sj9jvyO4D3gN99D3l8AAQAkADQAAAA8AAAARgAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEYAVwBJAFkAYgBkAFgATABIAFsAQwBRAEIASgBEAEUAXgBcAF0ARwBjAE8ASwBQAGAAUgBnABwATQBmAE4AXwAAAAAAEADGAAEAAAAAAAAAIQAAAAEAAAAAAAEAEwAhAAEAAAAAAAIABwA0AAEAAAAAAAMAIwA7AAEAAAAAAAQAGwBeAAEAAAAAAAUADQB5AAEAAAAAAAYAGACGAAEAAAAAAAkADgCeAAMAAQQJAAAAQgCsAAMAAQQJAAEAJgDuAAMAAQQJAAIADgEUAAMAAQQJAAMARgEiAAMAAQQJAAQANgFoAAMAAQQJAAUAGgGeAAMAAQQJAAYAMAG4AAMAAQQJAAkAHAHoU0lMIE9QRU4gRk9OVCBMSUNFTlNFIFZlcnNpb24gMS4xS0EgTmV3IFN0YXRoaXMgTWFpblJlZ3VsYXIxLjAwMDtVS1dOO0tBTmV3U3RhdGhpc01haW4tUmVndWxhcktBIE5ldyBTdGF0aGlzIE1haW4gUmVndWxhclZlcnNpb24gMS4wMDBLQU5ld1N0YXRoaXNNYWluLVJlZ3VsYXJUcmV2b3IgQnVsbG9jawBTAEkATAAgAE8AUABFAE4AIABGAE8ATgBUACAATABJAEMARQBOAFMARQAgAFYAZQByAHMAaQBvAG4AIAAxAC4AMQBLAEEAIABOAGUAdwAgAFMAdABhAHQAaABpAHMAIABNAGEAaQBuAFIAZQBnAHUAbABhAHIAMQAuADAAMAAwADsAVQBLAFcATgA7AEsAQQBOAGUAdwBTAHQAYQB0AGgAaQBzAE0AYQBpAG4ALQBSAGUAZwB1AGwAYQByAEsAQQAgAE4AZQB3ACAAUwB0AGEAdABoAGkAcwAgAE0AYQBpAG4AIABSAGUAZwB1AGwAYQByAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAwADAASwBBAE4AZQB3AFMAdABhAHQAaABpAHMATQBhAGkAbgAtAFIAZQBnAHUAbABhAHIAVAByAGUAdgBvAHIAIABCAHUAbABsAG8AYwBrAAAAAgAAAAAAAP+1ADIAAAAAAAAAAAAAAAAAAAAAAAAAAABpAAAAAwAkACUAJgAnACgAKQAqACsALAAtAC4ALwAwADEAMgAzADQANQA2ADcAOAA5ADoAOwA8AD0ARABuAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0BAgATABQAFQAWABcAGAAZABoAGwAcABEADwAdAB4ABAAiAA0ABgASAD8ACwBeAGAAPgBAABAAQgC0ALUAtgCpAAUACgAHAKYADgAgACEAHwBhAEEAmAAIACMACQCMAF8AQwDdB3VuaTAzQTkAAQAAAAAAAAAAAAAAAAABAAAAAA==";
var callAddFont = function () {
this.addFileToVFS("KANewStathisMain-Regular-normal.ttf", font);
this.addFont("KANewStathisMain-Regular-normal.ttf", "KANewStathisMain-Regular", "normal");
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);