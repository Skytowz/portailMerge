// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://portail.leaderinfo.com:8080/portail/pendingMergers.do*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leaderinfo.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     const div = document.querySelector("#timer-pm").parentElement;
    console.log(div);
     div.innerHTML += '<div style="clear: both;"></div><div style="float:left;">Merge restant : </div><div class="timer" id="nb_merge" style="float:left;padding-left:5px;"></div><div style="clear: both;"></div><div style="float:left;">Merge bloquant restant : </div><div class="timer" id="nb_merge_bloquant" style="float:left;padding-left:5px;"></div><div style="clear: both;"></div><input type="button" id="show" class="btn btn-round btn-blue button_project button_Novanet btn-yellow" value="HIDE"/>'
    document.querySelector("#nb_merge").append(document.querySelectorAll(".td-rev").length);
    document.querySelector("#nb_merge_bloquant").append(Array.from(document.querySelectorAll(".td-rev")).filter(e => Array.from(e.classList).includes("moreOneDay")).length);
    let show = true;
    document.querySelector("#show").addEventListener('click',e =>{
        e.preventDefault()
        document.querySelector("#nb_merge").innerHTML="";
        if(show){
            Array.from(document.querySelectorAll(".moreThirtyMin")).map(element => element.parentElement.style.display = "none");
            document.querySelector("#nb_merge").append(Array.from(document.querySelectorAll(".td-rev")).filter(e => !Array.from(e.classList).includes("moreThirtyMin")).length);
            document.querySelector("#show").value = "SHOW"
        }else{
            Array.from(document.querySelectorAll(".moreThirtyMin")).map(element => element.parentElement.style.removeProperty("display"));
            document.querySelector("#nb_merge").append(document.querySelectorAll(".td-rev").length);
            document.querySelector("#show").value = "HIDE"
        }
        show = !show;
    })
})();
