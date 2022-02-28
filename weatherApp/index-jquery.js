$(document).ready(function() {
    var now = new Date();
    var url = "";
    var lat = 0;
    var lon = 0;

    const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
    const APPID = '36f1eed3b21b3aff408024d7579376b2';
    const ONE_DAY_IN_SEC = 60 * 60 * 24;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            window.fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=36f1eed3b21b3aff408024d7579376b2&units=metric')
                .then(res => res.json())
                .then(function(resJson) {
                    place = resJson.name;
                    $("#temp").text(resJson.main.temp);
                    $("#lieu").text(resJson.name);
                })
            $("#today").trigger("click");
        });
    }

    $(".btn-search").on("click", function() {

        window.fetch('https://api.openweathermap.org/data/2.5/weather?q=' + $("#idPlace").val() + '&appid=36f1eed3b21b3aff408024d7579376b2&units=metric')
            .then(res => res.json())
            .then(function(resJson) {
                place = resJson.name;
                console.log(resJson);
                lat = resJson.coord.lat; //need to update lat and lon because can't use q in timemachine API
                lon = resJson.coord.lon;
                $("#temp").text(resJson.main.temp);
                $("#lieu").text(resJson.name);
            })
        return false;
    });

    $(".btn-date").on("click", function() {
        var id = $(this).attr("id");
        url = BASE_URL + 'weather?lat=' + lat + '&lon=' + lon + '&appid=' + APPID + '&units=metric';
        if (id == "yesterday") {
            url = BASE_URL + 'onecall/timemachine?lat=' + lat + '&lon=' + lon + '&dt=' + parseInt(Math.round(Date.now() - ONE_DAY_IN_SEC * 1000) / 1000) + '&appid=' + APPID + '&units=metric';
        } else if (id == "tomorrow") {
            url = BASE_URL + 'forecast?lat=' + lat + '&lon=' + lon + '&appid=' + APPID + '&units=metric';
        }

        window.fetch(url).then(res => res.json())
            .then(function(resJson) {
                if (id == "today") {
                    temperature = resJson.main.temp;
                } else if (id == "yesterday") {
                    temperature = resJson.current.temp;
                } else { //tomorrow
                    temperature = resJson.list[8].main.temp;
                }
                console.log(resJson);
                $("#temp").text(temperature);
            });
        return false;
    });
});
