$(document).ready(function() {
    let i = 0;
    $(".submit-btn").on("click", function() {
        console.log("New line");
        let text = "<p>Test</p>";
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let date = document.getElementById("date").value;
        let publishing = document.getElementById("publishing").value;
        let description = document.getElementById("description").value;
        let isbn = document.getElementById("isbn").value;

        $("#title").val('');
        $(".save-div").append('<div class="save-line" title="' + description + '\r\nISBN: ' + isbn + '"></div>');
        $(".save-line").last().append('<div class="save-param-content">' + title + '</div>',
            '<div class="save-param-content">' + author + '</div>',
            '<div class="save-param-content">' + date + '</div>',
            '<div class="save-param-content">' + publishing + '</div>',
            '<div class="save-param-content last-param"><img src="Assets/Pinocchio.jpg" alt="Picture of the book cover of Pinocchio"></div>');

        i++;
    });
});