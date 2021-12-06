/* globals chrome */
// The extension service worker (fka persistent background script)

// Installed Event
chrome.runtime.onInstalled.addListener(() => {
	console.log("Extension successfully installed!")
})

// Message Event
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log("MESSAGE:", message)

	switch (message.type) {
		case "INJECT":
			return sendResponse({ ok: true, sender })
		default:
			return sendResponse({
				ok: false,
				message: `Unknown type: ${message.type}`
			})
	}
})
