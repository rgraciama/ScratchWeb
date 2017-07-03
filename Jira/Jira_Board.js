// ==UserScript==
// @name         JIRA Board
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://svn.idiada.ct:1080/jira/secure/RapidBoard.jspa?*
// @grant        none

// ==/UserScript==

//debugger;

(function() {

    'use strict';
    let numToDo = 0;
    let numInProgress = 0;
    let numInReview = 0;
    let numDone = 0;
    let numLength = 0;
    let numReviewPO = 0;
    let numSPRemaining = 0;

    function doc_keyUp(e) {
        if (e.altKey && e.keyCode == 87) {
            let boardName = jQuery('#ghx-board-name');
            if (("PAMPOL-CI").equals(boardName)) {
               countCIbyGroup();
            } else {
               remainingSP();
               colorUs();
               countStatusUS();
            }
        }

        //expandir/contraer todas las US
        if (e.altKey && e.keyCode == 90) {
            jQuery('.ghx-swimlane').addClass("ghx-closed");
        }
		
        if (e.altKey && e.keyCode == 88) {
            jQuery('.ghx-swimlane').removeClass("ghx-closed");
        }
    }
    function countCIbyGroup () {
        jQuery("[data-column-id='231'] .ghx-extra-field-row:last-child .ghx-extra-field").each(function() {
            let typeCIName = jQuery(this).textContent;
            let arr = new Array(); 
            
        });
        
    }
    
     function countStatusUS() {
       jQuery('#ghx-board-name .results-us').empty();
       jQuery('.results-usSP').html("");
       var text = jQuery('#ghx-board-name').text();
       jQuery('#ghx-board-name').html(text + "<div class='results-usSP' style='margin:0px 5px 0px 5px;padding:0px 5px 0px 5px;float:right;border:2px solid #333;border-radius:5px;'>" +numSPRemaining+"w</div>"+
                                      "<div class='results-us' style='float:right;border:2px solid #333;border-radius:5px;'>" +
                                      "<div class='done-us' style='padding:0px 5px 0px 5px;background-color:grey;color:black;float:left;' title='Total US'>"+numLength+"</div>"+
                                      "<div class='done-us' style='padding:0px 5px 0px 5px;background-color:green;color:white;float:left;' title='Num US Done'>"+numDone+"</div>"+
                                      "<div class='done-us' style='padding:0px 5px 0px 5px;color:green;float:left;' title='Num US In ReviewPO'>"+numReviewPO+"</div>"+
                                      "<div class='done-us' style='padding:0px 5px 0px 5px;color:red;float:left;' title='Num US In Review'>"+numInReview+"</div>"+
                                      "<div class='done-us' style='padding:0px 5px 0px 5px;color:orange;float:left;' title='Num US In Progress'>"+numInProgress+"</div>"+
                                      "<div class='done-us' style='padding:0px 5px 0px 5px;color:blue;float:left;' title='Num US To Do'>"+numToDo+"</div>"+
                                      "</div>");

     }

    function colorUs() {
      //Reset Values
      numToDo = 0;
      numInProgress = 0;
      numInReview = 0;
      numDone = 0;
      numLength = 0;
      numReviewPO = 0;
      numLength = jQuery('.ghx-swimlane .ghx-info').length;
      numReviewPO = jQuery('.ghx-swimlane .ghx-bandaid').length;
        
      jQuery('.ghx-swimlane .ghx-info').each(function() {
        if(jQuery(this).children('span:first-child').text() === "Done") {
            jQuery(this).parent().parent().parent().css('background-color', 'lightgreen');
            numDone++;
        } else if (jQuery(this).children('span:first-child').text() === "In Review") {
            jQuery(this).parent().parent().parent().css('background-color', 'lightcoral');
            numInReview++;
        } else if (jQuery(this).children('span:first-child').text() === "In Progress") {
            jQuery(this).parent().parent().parent().css('background-color', 'lightyellow');
            numInProgress++;
        }  else if (jQuery(this).children('span:first-child').text() === "To Do") {
            jQuery(this).parent().parent().parent().css('background-color', 'lightblue');
            numToDo++;
        }
       });

    }

    

    function remainingSP() {
      numSPRemaining = 0;
       jQuery('.aui-badge').each(function() {
           let strTask = jQuery(this).text();
           let str = strTask.substring(0,strTask.length-1);
           if (" " !== str && "" !== str) {
               numSPRemaining += parseInt(str);
           }
       });

    }

    jQuery(document).ready(function() {
        document.addEventListener('keyup', doc_keyUp, false);
    });

})();