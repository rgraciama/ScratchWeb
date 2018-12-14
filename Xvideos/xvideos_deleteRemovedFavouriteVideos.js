// ==UserScript==
// @name         XVideos Delete Removed Videos
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://xhamster.com/my/favorites/videos*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    if ($('.thumb-container > .status').parent().children('.info-line-top').length != 0) {
         $('.thumb-container > .status').parent().children('.info-line-top').children('.remove').click();


        setTimeout(function() {
            $('button.xh-button.red.large.remove').click();

                    setTimeout(function() {
                        location.reload();
                    },500);
        }, 500);



    }
})();