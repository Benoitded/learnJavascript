let savedImage;

function readURL(input) {
    if (input.files && input.files[0]) {
        //console.log(input);
        savedImage = input;
        var reader = new FileReader();
        reader.onload = function(e) {
            $('.previewImage').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
        //console.log("info image"+ input.files[0])
        //savedImage = input.files[0]
        //console.log(input.files[0])
        $(".divImage").show();
        $(".styleSVG").hide();
    } else {
        console.log("Pas d'image");
        $(".divImage").hide();
        $(".styleSVG").show();
    }
}

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
        let cover = 1;
        let description = document.getElementById("description").value;
        if (!title) alertMessage = "Title missing";
        if (!author) alertMessage += "\r\nAuthor missing";
        if (!date) alertMessage += "\r\nDate missing";
        if (!publishing) alertMessage += "\r\nPublishing house missing";
        if (!isbn) alertMessage += "\r\nISBN number missing";
        if (!cover) alertMessage += "\r\nCover image missing";
        if (!description) alertMessage += "\r\nDescription missing";

        //if ((!title || !author || !date || !publishing || !isbn || !cover || !description))
        if (!(title && author && date && publishing && isbn && cover && description))
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
            //'<div class="save-param-content last-param"><img src="Assets/Pinocchio.jpg" alt="Picture of the book cover of Pinocchio"></div>');
            i++;
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.toWrite').last().attr('src', e.target.result);
            };
            reader.readAsDataURL(savedImage.files[0]);
        }
    });
});