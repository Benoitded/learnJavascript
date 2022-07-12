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
    let i = 0;
    $(".divImage").hide();
    $(".submit-btn").on("click", function() {
        let alertMessage = "";
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let date = document.getElementById("date").value;
        let publishing = document.getElementById("publishing").value;
        let isbn = document.getElementById("isbn").value;
        let description = document.getElementById("description").value;
        if (!title) alertMessage = "Title missing";
        if (!author) alertMessage += "\r\nAuthor missing";
        if (!date) alertMessage += "\r\nDate missing";
        if (!publishing) alertMessage += "\r\nPublishing house missing";
        if (!savedImage) alertMessage += "\r\nCover image missing";
        if (!description) alertMessage += "\r\nDescription missing";

        if (!(title && author && date && publishing && savedImage && description))
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
            $(".save-div").append('<div class="save-line" title="' + description + '\r\nISBN: ' + isbn + '"></div>');
            $(".save-line").last().append('<div class="save-param-content">' + title + '</div>',
                '<div class="save-param-content">' + author + '</div>',
                '<div class="save-param-content">' + date + '</div>',
                '<div class="save-param-content">' + publishing + '</div>',
                '<div class="save-param-content last-param"><img class="toWrite" src="Assets/Pinocchio.jpg" alt="Picture of the book cover of Pinocchio"></div>');
            i++;
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.toWrite').last().attr('src', e.target.result);
            };
            reader.readAsDataURL(savedImage.files[0]);
        }
    });
});