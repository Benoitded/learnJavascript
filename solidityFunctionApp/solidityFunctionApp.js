let visibility = "";
let mutability = "";

function functionCopy() {
    /* Get the text field */
    var copyText = document.getElementById("answerToCopy");

    console.log("Copy =>" + copyText);
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}

function updateInfo() {
    console.log("Go in updateInfo()");
    //Underscore
    if (visibility == "internal" || visibility == "external") { underscore = "_"; } else { underscore = " " }
    //Name
    name = document.getElementById("input-name").value;
    //Parameters
    param1 = document.getElementById("param1").value;
    param2 = document.getElementById("param2").value;
    param3 = document.getElementById("param3").value;
    parameters = param1;
    if (((param1 != "") && (param2 != "")) || ((param1 != "") && (param3 != ""))) parameters += ", ";
    if (param2 != "") parameters += param2;
    if ((param2 != "") && (param3 != "")) parameters += ", ";
    if (param3 != "") parameters += param3;
    //Visibility
    if (visibility != "") visibility += " ";
    //Mutability
    if (mutability != "") mutability += " ";
    //Returns
    returns1 = document.getElementById("returns1").value;
    returns2 = document.getElementById("returns2").value;
    returns3 = document.getElementById("returns3").value;
    if ((returns1 + returns2 + returns3) == "")
        returns = ""
    else {
        returns = returns1;
        if (((returns1 != "") && (returns2 != "")) || ((returns1 != "") && (returns3 != ""))) returns += ", ";
        if (returns2 != "") returns += returns2;
        if ((returns2 != "") && (returns3 != "")) returns += ", ";
        if (returns3 != "") returns += returns3;
        if (returns != "") returns = " returns (" + returns + ")";
    }
    answer = underscore + name + " (" + parameters + ") " + visibility + mutability + returns + "{}";
    console.log("++> " + answer);
    $("#answerToCopy").text(answer);
}

$(document).ready(function() {
    let id = "nothing";
    let oldId = "nothing";
    console.log("Hello builder!");
    let underscore = "";
    let name = "";
    let param1 = "";
    let param2 = "";
    let param3 = "";
    let parameters = "";
    let returns1 = "";
    let returns2 = "";
    let returns3 = "";
    let returns = "";
    let answer = "";
    updateInfo()

    $(".visibility-btn").on("click", function() {
        visibility = $(this).attr("id");
        updateInfo();
    });

    $(".mutability-btn").on("click", function() {
        mutability = $(this).attr("id");
        updateInfo();
    });

});