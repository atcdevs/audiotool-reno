/* globals chrome */
// Extension content script

chrome.runtime.sendMessage({ type: "INJECT" }, (response) => {
	if (response.ok) console.log("Scripts successfully injected")
})

