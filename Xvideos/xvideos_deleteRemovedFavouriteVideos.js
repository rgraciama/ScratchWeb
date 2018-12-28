// ==UserScript==
// @name         XVideos Delete Removed Videos
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://xhamster.com/my/favorites/videos*
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

waitForKeyElements (".reset-cursor", removeRemovedVideo);

function removeRemovedVideo() {
    if ($('.thumb-container > .status').parent().children('.info-line-top').length != 0) {
         $('.thumb-container > .status').parent().children('.info-line-top').children('.remove').click();


        setTimeout(function() {
            $('button.xh-button.red.large.remove').click();

                    setTimeout(function() {
                        location.reload();
                    },500);
        }, 500);
    }
}