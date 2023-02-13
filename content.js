chrome.storage.sync.get("minDuration", function(data) {
    var shelfElements = document.querySelectorAll("ytd-rich-shelf-renderer");
    console.log("NumOfSpan: ", shelfElements.length)
    for (var i = 0; i < shelfElements.length; i++) {
        var shelfElement = shelfElements[i];
        if (shelfElement.hasAttribute("is-shorts")) {
            shelfElement.style.display = "none";
            console.log("Setting display None for Shorts");
        }
    }
});