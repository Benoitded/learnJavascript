let inheriting = "";
let visibility = "";
let mutability = "";

//Copy the output text into the clipboard
function functionCopy(elementID) {
    let element = document.getElementById(elementID); //select the element
    let elementText = element.textContent; //get the text content from the element
    navigator.clipboard.writeText(elementText); //use the copyText function below
}

//Get data from parameters and update the output
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
        if (returns != "") returns = " <span style='color: #dd4e01;'>returns</span> (<span style='color: #269000;'>" + returns + "</span>)";
    }
    answer = "<span style='color: #1f67db;'>function</span> <span style='color: #dd4e01;'>" + underscore + name + "</span> (<span style='color: #269000;'>" + parameters + "</span>) " + inheriting + visibility + mutability + returns + "{}";
    //console.log("++> " + answer);
    $("#answerToCopy").html(answer);
}
document.querySelector('input').addEventListener('input', updateInfo);

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


    //Highlight button clicked for each row
    $(".b-btn").on("click", function() {
        parent = $(this).parent().attr('id'); //Get the ID from the parent
        eval(parent + ' = $(this).attr("id") + " "'); //Sent the ID of the button to the variable (named the same)
        $("#" + parent + " > button").removeClass("none"); //Remove all "none" class to all button (from parent ID to child button)
        $(this).addClass("none"); //Add class to the one button clicked
        updateInfo(); //Call the function
    });

});