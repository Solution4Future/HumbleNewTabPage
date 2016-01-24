chrome.tabs.onCreated.addListener(function (tab) {
	if (/^(?:opera|browser):\/\/startpage\/?(?:speeddial)?/.test(tab.url)) {
		chrome.tabs.update(tab.id, {
			'url': 'newtab.html'
		});
		// chrome.tabs.create({
		// 	index: tab.index,
		// 	windowId: tab.windowId,
		// 	url: 'newtab.html'
		// });
		// chrome.tabs.remove(tab.id);
	}
});
