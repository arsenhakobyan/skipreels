chrome.storage.sync.get("minDuration", function(data) {
    var shelfElements = document.querySelectorAll("ytd-rich-shelf-renderer");
    for (var i = 0; i < shelfElements.length; i++) {
        var shelfElement = shelfElements[i];
        if (shelfElement.hasAttribute("is-shorts")) {
            shelfElement.style.display = "none";
        }
    };
    var observer = new MutationObserver(function(mutations) {
        var spanElements = document.getElementsByTagName("span");
        for (var i = 0; i < spanElements.length; i++) {
            var spanElement = spanElements[i];
            if (spanElement.innerText.indexOf("Reels and short videos") !== -1) {
                var parentElement = spanElement.parentNode;
                for (var j = 0; j < 10; j++) {
                    parentElement = parentElement.parentNode;
                }
                parentElement.style.display = "none";
                break;
            }
        }
    });

    observer.observe(document, {
        childList: true,
        subtree: true
    });
});