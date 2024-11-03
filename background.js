chrome.webNavigation.onCompleted.addListener(function(details) {
    const url = new URL(details.url);
    if (url.hostname === "www.amazon.com.mx" && (url.pathname.includes("/dp/") || url.pathname.includes("/gp/"))) {
        if (!url.searchParams.has("tag")) {
            url.searchParams.set("tag", "f2trascender-20");
            chrome.tabs.update(details.tabId, { url: url.toString() });
        }
    }
}, { url: [{ urlMatches: 'https://www.amazon.com.mx/.*' }] });