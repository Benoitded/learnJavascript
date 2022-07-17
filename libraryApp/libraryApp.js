let savedImage = 0;

function readURL(input) {
    if (input.files && input.files[0]) {
        savedImage = input;
        var reader = new FileReader();
        reader.onload = function(e) {
            $('.previewImage').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);

        $(".divImage").show();
        $(".styleSVG").hide();
    } else {
        console.log("Pas d'image");
        $(".divImage").hide();
        $(".styleSVG").show();
    }
}

function checkValide() {
    console.log("Valide");
}

function focusFirst() {
    document.getElementById("title").focus();
    console.log("focus");
}

//document.querySelectorAll('input').forEach().addEventListener('input', checkValide);

let elementsArray = document.querySelectorAll(".param-div");


elementsArray.forEach(function(elem) {
    elem.addEventListener("input", function() {
        if (document.getElementById("title").value &&
            document.getElementById("author").value &&
            document.getElementById("date").value &&
            document.getElementById("publishing").value &&
            document.getElementById("description").value &&
            savedImage) {
            $(".submit-btn").addClass("canSubmit"); //Add green borders to submit button
        } else {
            $(".submit-btn").removeClass("canSubmit"); //Remove green borders to submit button
        }
    });
});

$(document).ready(function() {
    let i = 2;
    $(".divImage").hide();

    let param = "title"
        //let direction = "#" + param.parent() + "> div";
        //alert(direction);
        //$(direction).addClass("redText")

    //$("#publishing:parent").addClass("redText");
    //$('#publishing').parent().children(':first').addClass('redText');
    //$('#cover').parent().parent().children(':first').addClass('redText');

    $(".submit-btn").on("click", function() {
        let alertMessage = "";
        let alertMessageLine = "";
        let parameters = [
            { "name": "title", "value": "" },
            { "name": "author", "value": "" },
            { "name": "date", "value": "" },
            { "name": "publishing", "value": "" },
            { "name": "isbn", "value": "" },
            { "name": "description", "value": "" }
        ]

        for (var j = 0; j < parameters.length; j++) {
            parameters[j].value = document.getElementById(parameters[j].name).value;
            if (!parameters[j].value && parameters[j].name != "isbn") {
                alertMessage += parameters[j].name.charAt(0).toUpperCase() + parameters[j].name.slice(1) + " missing\r\n"; //Add line of error, with uppercase
                $('#' + parameters[j].name).parent().children(':first').addClass('redText');
            } else {
                $('#' + parameters[j].name).parent().children(':first').removeClass('redText');
            }
        }
        if (!savedImage) {
            alertMessage += ("Cover missing\r\n");
            $('#cover').parent().parent().children(':first').addClass('redText');
        } else {
            $('#cover').parent().parent().children(':first').removeClass('redText');
        }

        if (!(parameters[0].value && parameters[1].value && parameters[2].value && parameters[3].value && savedImage && parameters[5].value))
        //if (0)
            alert(alertMessage);
        else {
            console.log("New line");
            $("#title").val('');
            $("#author").val('');
            $("#date").val('');
            $("#publishing").val('');
            $("#isbn").val('');
            $("#description").val('');
            $(".divImage").hide(); //Hide preview image in add a cover
            $(".styleSVG").show(); //Show SVG in add a cover
            $(".submit-btn").removeClass("canSubmit"); //Remove green borders to submit button

            $(".next").before('<div class="save-line-block"></div>');
            $(".save-line-block").eq(i).append(
                '<div class="save-param-content-block photo" title="ISBN: ' + parameters[4].value + '"><img class="toWrite" src="Assets/Pinocchio.jpg" alt="Picture of the book cover of Pinocchio"></div>',
                '<div class="save-param-content-block title" title="Title">' + parameters[0].value + '</div>',
                '<div class="block-desc-block"></div>');
            $(".block-desc-block").last().append(
                '<div class="save-param-content-block" title="Author">' + parameters[1].value + '</div>',
                '<div class="save-param-content-block" title="Date of paruption">' + parameters[2].value + '</div>',
                '<div class="save-param-content-block" title="Publishing house">' + parameters[3].value + '</div>',
                '<div class="save-param-content-block" title="Description">' + parameters[5].value + '</div>');
            i++;
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.toWrite').last().attr('src', e.target.result);
            };
            reader.readAsDataURL(savedImage.files[0]);
            savedImage = 0; //delete image
        }
    });
});