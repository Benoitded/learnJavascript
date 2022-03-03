$(document).ready(function() {
    let id = "nothing";
    let oldId = "nothing";
    //$(".grid_item").hide();
    //let memButton = { avecQueue = false, sansQueue = false, pattes4 = false, pattes6 = false, pattes8 = false, poilsLong = false, poilsCourt = false, poilsSans = false, age2 = false, age9 = false, age13 = false, age15 = false, age60 = false, couleurBeige = false, couleurNoire = false, couleurViolet = false, couleurMarron = false, couleurGris = false };
    //$("[couleur='couleurNoire'], [age='age2']").show();
    $(".btn-filtre").on("click", function() {
        id = $(this).attr("id");
        console.log(id);
        $("[id='" + oldId + "']").removeClass("underline");
        $("[id='" + id + "']").addClass("underline");
        if (id != oldId) {
            $(".grid_item").hide();
            $("[" + $(this).attr("type") + "='" + id + "']").show(); //ex : [age='age2']

        } else {
            $(".grid_item").show();
            $("[id='" + id + "']").removeClass("underline");
        }
        oldId = id;
    });

    $(".btn-question").on("click", function() {
        console.log("Salut");
        $(".show-hide-filtre").toggle();
    })
});
