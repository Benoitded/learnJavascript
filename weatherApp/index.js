let lat = 43;
let lon = 1.4;
let place = "Toulouse";
let temperature = 24;
const ONE_DAY_IN_SEC = 60 * 60 * 24;
let yesterdayTimestamp = 0;
let date = 0;

var button = document.getElementById('buttonC');
var yesterday = document.getElementById('yesterday');
var today = document.getElementById('today');
var tomorrow = document.getElementById('tomorrow');
var inputValue = document.querySelector('idPlace');

if (navigator.geolocation) {
    console.log("Geolocalisation supported");
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        lat = position.coords.latitude;
        console.log('in function: ' + lat);
        window.fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=36f1eed3b21b3aff408024d7579376b2&units=metric')
            .then(res => res.json())
            .then(function(resJson) {
                place = resJson.name;
                temperature = resJson.main.temp;
                document.getElementById("temp").innerHTML = temperature;
                document.getElementById("lieu").innerHTML = place;
            })
    });
} else {
    console.log("Geolocalisation not supported");
}

button.addEventListener('click', function() {
    date = 0;
    window.fetch('https://api.openweathermap.org/data/2.5/weather?q=' + document.getElementById('idPlace').value + '&appid=36f1eed3b21b3aff408024d7579376b2&units=metric')
        .then(res => res.json())
        .then(function(resJson) {
            console.log(yesterdayTimestamp);
            console.log(resJson);
            place = resJson.name;
            temperature = resJson.main.temp;
            document.getElementById("temp").innerHTML = temperature;
            document.getElementById("lieu").innerHTML = place;
            console.log('New place');
        })
})

yesterday.addEventListener('click', function() {
        yesterdayTimestamp = parseInt(Math.round(Date.now() - ONE_DAY_IN_SEC * 1000) / 1000);
        date = -1;
        window.fetch('https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + lat + '&lon=' + lon + '&dt=' + parseInt(yesterdayTimestamp) + '&appid=36f1eed3b21b3aff408024d7579376b2&units=metric')
            .then(res => res.json())
            .then(function(resJson) {
                console.log("yesterday");
                console.log(yesterdayTimestamp);
                console.log(resJson);
                temperature = resJson.current.temp;
                document.getElementById("temp").innerHTML = temperature;
            })
    }) //*/

today.addEventListener('click', function() {
        date = 0;
        window.fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=36f1eed3b21b3aff408024d7579376b2&units=metric')
            .then(res => res.json())
            .then(function(resJson) {
                console.log("today");
                console.log(resJson);
                temperature = resJson.main.temp;
                document.getElementById("temp").innerHTML = temperature;
            })
    }) //*/

tomorrow.addEventListener('click', function() { //pas finis
        yesterdayTimestamp = parseInt(Math.round(Date.now() + ONE_DAY_IN_SEC * 1000) / 1000);

        date = 1;
        window.fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=36f1eed3b21b3aff408024d7579376b2&units=metric')
            .then(res => res.json())
            .then(function(resJson) {
                console.log("tomorrow");
                console.log(yesterdayTimestamp);
                console.log(resJson);
                temperature = resJson.current.temp;
                document.getElementById("temp").innerHTML = temperature;
            })
    }) //*/
