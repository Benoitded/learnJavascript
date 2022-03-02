$(document).ready(function() {
    //$(".grid_item").css("border", "3px solid red");
    let id = "nothing";
    let oldId = "nothing";


    $(".btn-filtre").on("click", function() {
        id = $(this).attr("id");
        console.log(id);
        if (id != oldId) {

            if ($(this).attr("type") == "queue") {
                console.log("[queue='" + id + "']");
                $(".grid_item").hide();
                $("[queue='" + id + "']").show();
            }

            if ($(this).attr("type") == "pattes") {
                console.log("[nbPattes='" + id + "']");
                $(".grid_item").hide();
                $("[nbPattes='" + id + "']").show();
            }

            if ($(this).attr("type") == "poils") {
                console.log("[poils='" + id + "']");
                $(".grid_item").hide();
                $("[poils='" + id + "']").show();
            }

            if ($(this).attr("type") == "age") {
                console.log("[age='" + id + "']");
                $(".grid_item").hide();
                $("[age='" + id + "']").show();
            }

            if ($(this).attr("type") == "couleur") {
                console.log("[couleur='" + id + "']");
                $(".grid_item").hide();
                $("[couleur='" + id + "']").show();
            }
        } else {
            console.log("reset");
            $(".grid_item").show();
        }
        oldId = id;
    });
});
