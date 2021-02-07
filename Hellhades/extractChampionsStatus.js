// ==UserScript==
// @name         Hellhades import champion ranking to drive
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://hellhades.com/champions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function commitTemplate(isBoardUS) {
        // Your code here...
        let championName = document.getElementsByClassName("title-heading-center");
        championName = championName[0].textContent;
        let tableValues = document.getElementsByClassName("fusion-builder-column-8");
        let overallRating = tableValues[0].getElementsByClassName('fusion-text-2')[0].getElementsByTagName('span')[1].innerText;

        let keyAreas = tableValues[0].getElementsByClassName('fusion-builder-nested-column-0');
        let dungeons = tableValues[0].getElementsByClassName('fusion-builder-nested-column-1');
        let doomTower = tableValues[0].getElementsByClassName('fusion-builder-nested-column-2');

        let rowsKeyAreas = keyAreas[0].getElementsByTagName('tr');
        let ratingArenaAtq = rowsKeyAreas[0].getElementsByClassName('fa-star').length+rowsKeyAreas[0].getElementsByClassName('fa-star-half').length*0.5;
        let ratingArenaDef = rowsKeyAreas[1].getElementsByClassName('fa-star').length+rowsKeyAreas[1].getElementsByClassName('fa-star-half').length*0.5;
        let ratingClanBoss = rowsKeyAreas[2].getElementsByClassName('fa-star').length+rowsKeyAreas[2].getElementsByClassName('fa-star-half').length*0.5;
        let ratingFactionWars = rowsKeyAreas[3].getElementsByClassName('fa-star').length+rowsKeyAreas[3].getElementsByClassName('fa-star-half').length*0.5;

        let rowsDungeons = dungeons[0].getElementsByTagName('tr');
        let ratingSpider = rowsDungeons[0].getElementsByClassName('fa-star').length+rowsDungeons[0].getElementsByClassName('fa-star-half').length*0.5;
        let ratingFireKnight = rowsDungeons[1].getElementsByClassName('fa-star').length+rowsDungeons[1].getElementsByClassName('fa-star-half').length*0.5;
        let ratingDragon = rowsDungeons[2].getElementsByClassName('fa-star').length+rowsDungeons[2].getElementsByClassName('fa-star-half').length*0.5;
        let ratingIceGolem = rowsDungeons[3].getElementsByClassName('fa-star').length+rowsDungeons[3].getElementsByClassName('fa-star-half').length*0.5;

        let rowsDoomTower = doomTower[0].getElementsByTagName('tr');
        let ratingKuldath = rowsDoomTower[0].getElementsByClassName('fa-star').length+rowsDoomTower[0].getElementsByClassName('fa-star-half').length*0.5;
        let ratingSorath = rowsDoomTower[1].getElementsByClassName('fa-star').length+rowsDoomTower[1].getElementsByClassName('fa-star-half').length*0.5;
        let ratingAgreth = rowsDoomTower[2].getElementsByClassName('fa-star').length+rowsDoomTower[2].getElementsByClassName('fa-star-half').length*0.5;
        let ratingBorgoth = rowsDoomTower[3].getElementsByClassName('fa-star').length+rowsDoomTower[3].getElementsByClassName('fa-star-half').length*0.5;

        let bookValue = document.getElementsByClassName("fusion-text-9");
        let ratingBookValue = bookValue[0].getElementsByTagName('span')[0].innerText;
        let bookPriority = document.getElementsByClassName("fusion-text-10");
        let ratingBookPriority = bookPriority[0].getElementsByTagName('span')[0].innerText;

        let commitMessage = championName + "\t" + overallRating +
            "\t" + ratingArenaAtq +
            "\t" + ratingArenaDef +
            "\t" + ratingClanBoss +
            "\t" + ratingFactionWars +
            "\t" + ratingSpider +
            "\t" + ratingFireKnight +
            "\t" + ratingDragon +
            "\t" + ratingIceGolem +
            "\t" + ratingKuldath +
            "\t" + ratingSorath +
            "\t" + ratingAgreth +
            "\t" + ratingBorgoth +
            "\t" + ratingBookValue +
            "\t" + ratingBookPriority;
        //alert(commitMessage);
        copyToClipboard(commitMessage);
    }

    function doc_keyUp(e) {
        // Q key
        if (e.ctrlKey && e.keyCode == 81) {
             commitTemplate(true);
        }
    }

    function copyToClipboard(commitMessage) {
        let textArea = document.createElement("textarea");
        textArea.value = commitMessage;
        document.body.appendChild(textArea);
        textArea.select();
        let succeed;
        try {
            succeed = document.execCommand("copy");
        } catch (e) {
            succeed = false;
        }
        if (succeed) {

            let alertTitle = "*********** Commit message copied to clipboard ***************\n\n\n";
            alert(alertTitle + commitMessage);
        } else {
            let alertTitle = "*********** Failed clipboard ***************\n\n\n";
        }
        document.body.removeChild(textArea);
    }
    // register the handler
    jQuery(document).ready(function() {
        document.addEventListener('keyup', doc_keyUp, false);
    });

})();