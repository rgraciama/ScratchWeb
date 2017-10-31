// ==UserScript==
// @name         Jira Commit message clipboard copy
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://svn.idiada.ct:1080/jira/secure/RapidBoard.jspa?rapidView=*
// @grant        none
// ==/UserScript==

//Thanks to jmtalarn guru software developer.

(function() {
    'use strict';

    function commitTemplate() {
        // Your code here...
        let jiraBaseURL = "http://svn.idiada.ct:1080";
        let storyKey = jQuery('div.ghx-selected').parents('.ghx-swimlane').find('.ghx-parent-key').text();
        let storyDescription = jQuery('div.ghx-selected').parents('.ghx-swimlane').find('.ghx-summary').clone().children().remove().end().text();

        let taskKey = jQuery('.ghx-selected a.js-key-link').text();
        let taskUrl = jiraBaseURL + jQuery('.ghx-selected a.js-key-link').attr('href');

        let taskStatus = jQuery('dd.ghx-fieldname-status').text();
        let taskTitle = jQuery('dd[title="Summary"]').text();
        let taskDescription = jQuery('dd[title="Description"]').text();
        let team = jQuery('h2#ghx-board-name').text().replace("PAMPOL-", "").replace("_", "");
        let milestoneName = jQuery('.ghx-name').text().substring(jQuery('.ghx-name').text().indexOf('.') + 2, jQuery('.ghx-name').text().indexOf('|') - 1);

        let commitMessage = taskStatus + "\t - " + milestoneName + "\t" + team + "\t" + storyKey + "\t" + storyDescription + "\n" + taskKey + "\t" + taskTitle + "\n" + taskUrl + "\n\n" + taskDescription + "\n";
        //alert(commitMessage);
        copyToClipboard(commitMessage);
    }

    function doc_keyUp(e) {
        // Q key
        if (e.ctrlKey && e.keyCode == 81) {
            if (window.location.href.indexOf("&view=detail&selectedIssue=")!=-1) {
                commitTemplate();
            }
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
