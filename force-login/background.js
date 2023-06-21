chrome.tabs.onCreated.addListener(function(tab) {
  
    var callback = function () {
        console.log("Browsing data has been removed");
    };
    
    chrome.browsingData.remove({
        "origins": ["https://www.instagram.com/"]
    }, {
        "cacheStorage": true,
        "cookies": true,
        "fileSystems": true,
        "indexedDB": true,
        "localStorage": true,
        "serviceWorkers": true,
        "webSQL": true
    }, callback);
})

// Should be here instead of on tab created
chrome.tabs.onRemoved.addListener(function(tabid, removed) {
    //chrome.
 })