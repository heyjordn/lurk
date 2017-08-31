'use strict';

chrome.runtime.onMessage.addListener((req, sender, respond) => {
	if (req.method === 'getMode') {
		respond({darkMode: localStorage.darkMode});
	}

	if (req.method === 'setMode') {
		localStorage.darkMode = req.darkMode;
		respond({darkMode: localStorage.darkMode});
	}
});