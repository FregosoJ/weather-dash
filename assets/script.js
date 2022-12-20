var weatherApi = 'https://bulk.openweathermap.org/snapshot/weather_16.json.gz?appid=8b9ac2820b4fe9397f31d21cf1bef67e';

// var cityName = document.querySelector('#city-input');
var addCityButton = document.querySelector('#add-input');
var cityInput = document.querySelector('#add-input');
var textInput = document.querySelector("#textInput");
var apiKey = "id=8b9ac2820b4fe9397f31d21cf1bef67e"

console.log(weatherApi)

var cityCodes = [];
var selectedCities = [];                                          // this changes to f from kelvin
var apiTest = 'https://api.openweathermap.org/data/2.5/forecast?&units=imperial&lat=44.34&lon=10.99&appid=8b9ac2820b4fe9397f31d21cf1bef67e';

// Api calls 
var apiCalls = {
    cityLat: "data.city.coord.lat",
    cityLong: "dat.city.coord.lon",
    name: "data.city.name",
    icon: "data.list[0].weather[0].icon",
    temp: "data.list.main.temp",
    humidity: "data.list.main.humidity",
    wind: "data.list.wind.speed"
}
// current weather shows the name of he city, the date, an icon representation of the weather condition,
// the temp, humidity, and wind speed.

function makeCityInfo(){
    var cityInfo = [];
    if (selectedCities.length){
        var cityScore = JSON.parse(localStorage.getItem("cityScoreOne"));
        var cityDetails = JSON.parse(localStorage.getItem("cityDetailsOne"));
        var weatherIcon = JSON.parse(localStorage.getItem("cityImagesOne"));
        var cityName = JSON.parse(localStorage.getItem("selected cities"));
        var city = {
            name: cityName,
            score: cityScore,
            details: cityDetails,
            images: weatherIcon
        }
        cityInfo.push(city);
    }
}

// search a city 
addCityButton.addEventListener("click", function () { //
    selectedCities.push(textInput.value)
    localStorage.setItem("cities", selectedCities)
    fetch(apiTest)
        .then(res => res.json()) // res=response
        .then(data => {
            console.log(data)
            var button = document.createElement("button")
            document.querySelector("#citList").appendChild(button)
            button.textContent = textInput.value

            // you can right click on what u want in the properties to get the path
            //setting data 
            // document.querySelector(".name1").textContent = data.list[0].clouds
            // document.querySelector(".name").textContent = data.city[7].coord.name
            // document.querySelector(".name").textContent = data.city[15].coord.name
            // document.querySelector(".name").textContent = data.city[23].coord.name
            // document.querySelector(".name").textContent = data.city[31].coord.name

            document.querySelector(".temp1").textContent = data.list[0].main.temp
            document.querySelector(".temp2").textContent = data.list[7].main.temp
            document.querySelector(".temp3").textContent = data.list[15].main.temp
            document.querySelector(".temp4").textContent = data.list[23].main.temp
            document.querySelector(".temp5").textContent = data.list[31].main.temp
            // make new 35 and 37 to new path for the requierd elements
            document.querySelector(".hum1").textContent = data.list[0].main.humidity
            document.querySelector(".hum2").textContent = data.list[7].main.humidity
            document.querySelector(".hum3").textContent = data.list[15].main.humidity
            document.querySelector(".hum4").textContent = data.list[23].main.humidity
            document.querySelector(".hum5").textContent = data.list[31].main.humidity
            // make new 35 and 37 to new path for the requierd elements
            document.querySelector(".wind1").textContent = data.list[0].wind.speed
            document.querySelector(".wind2").textContent = data.list[7].wind.speed
            document.querySelector(".wind3").textContent = data.list[15].wind.speed
            document.querySelector(".wind4").textContent = data.list[23].wind.speed
            document.querySelector(".wind5").textContent = data.list[31].wind.speed
        })

})





$(function () {
    var uaNames = [
        "Aarhus", "Adelaide", "Albuquerque", "Almaty", "Amsterdam", "Anchorage", "Andorra", "Ankara", "Asheville", "Asuncion", "Athens", "Atlanta", "Auckland", "Austin", "Baku", "Bali", "Baltimore", "Bangkok", "Barcelona", "Beijing", "Beirut", "Belfast", "Belgrade", "Belize City", "Bengaluru", "Bergen", "Berlin", "Bern", "Bilbao", "Birmingham", "Birmingham AL", "Bogota", "Boise", "Bologna", "Bordeaux", "Boston", "Boulder", "Bozeman", "Bratislava", "Brighton", "Brisbane", "Bristol", "Brno", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Buffalo", "Cairo", "Calgary", "Cambridge", "Cape Town", "Caracas", "Cardiff", "Casablanca", "Charleston", "Charlotte", "Chattanooga", "Chennai", "Chiang Mai", "Chicago", "Chisinau", "Christchurch", "Cincinnati", "Cleveland", "Cluj Napoca", "Cologne", "Colorado Springs", "Columbus", "Copenhagen", "Cork", "Curitiba", "Dallas", "Dar es Salaam", "Delhi", "Denver", "Des Moines", "Detroit", "Doha", "Dresden", "Dubai", "Dublin", "Dusseldork", "Edinburgh", "Edmonton", "Eindhoven", "Eugene", "Florence", "Florianopolis", "Fort Collins", "Frankfurt", "Fukuoka", "Gaillimh", "Gdansk", "Geneva", "Gibraltar", "Glasgow", "Gothenburg", "Grenoble", "Guadalajara", "Guatemala City", "Halifax", "Hamburg", "Hannover", "Havana", "Helsinki", "Ho Chi Minh City", "Hong Kong", "Honolulu", "Houston", "Hyderabad", "Indianapolis", "Innsbruck", "Istanbul", "Jacksonville", "Jakarta", "Johannesburg", "Kansas City", "Karlsruhe", "Kathmandu", "Kiev", "Kingston", "Knoxville", "Krakow", "Kuala Lumpur", "Kyoto", "Lagos", "La Paz", "Las Palmas de Gran Canaria", "Las Vegas", "Lausanne", "Leeds", "Leipzig", "Lille", "Lima", "Lisbon", "Liverpool", "Ljubljana", "London", "Los Angeles", "Louisville", "Luxembourg", "Lviv", "Lyon", "Madison", "Madrid", "Malaga", "Malmo", "Managua", "Manchester", "Manila", "Marseille", "Medellin", "Melbourne", "Memphis", "Mexico City", "Miami", "Milan", "Milwaukee", "Minneapolis Saint Paul", "Minsk", "Montevideo", "Montreal", "Moscow", "Mumbai", "Munich", "Nairobi", "Nantes", "Naples", "Nashville", "New Orleans", "New York", "Nice", "Nicosia", "Oklahoma City", "Omaha", "Orlando", "Osaka", "Oslo", "Ottawa", "Oulu", "Oxford", "Palo Alto", "Panama", "Paris", "Perth", "Philadelphia", "Phnom Penh", "Phoenix", "Phuket", "Pittsburgh", "Portland ME", "Portland OR", "Porto", "Porto Alegre", "Prague", "Providence", "Quebec", "Quito", "Raleigh", "Reykjavik", "Richmond", "Riga", "Rio De Janeiro", "Riyadh", "Rochester", "Rome", "Rotterdam", "Saint Petersburg", "Salt Lake City", "San Antonio", "San Diego", "San Francisco Bay Area", "San Jose", "San Juan", "San Luis Obispo", "San Salvador", "Santiago", "Santo Domingo", "Sao Paulo", "Sarajevo", "Saskatoon", "Seattle", "Seoul", "Seville", "Shanghai", "Singapore", "Skopje", "Sofia", "St Louis", "Stockholm", "Stuttgart", "Sydney", "Taipei", "Tallinn", "Tampa Bay Area", "Tampere", "Tartu", "Tashkent", "Tbilisi", "Tehran", "Tel Aviv", "The Hague", "Thessaloniki", "Tokyo", "Toronto", "Toulouse", "Tunis", "Turin", "Turku", "Uppsala", "Utrecht", "Valencia", "Valletta", "Vancouver", "Victoria", "Vienna", "Vilnius", "Warsaw", "Washington DC", "Wellington", "Winnipeg", "Wroclaw", "Yerevan", "Zagreb", "Zurich"
    ];
    $("#textInput").autocomplete({
        source: uaNames,
    });
});












// $(document).ready(function () {
//     $("#add-input").click(function () {
//         console.log('click')

//         var inputCity = $("input[name=cityItem]").val();
//         $("ol").append("<li>" + inputCity + "</li>");
//         $("input[name=cityItem]").val("");
//         console.log(inputCity)

//     });
// });

// // console.log(inputCity)

// function getCities() {
//     cityCodes = JSON.parse(localStorage.getItem(cityInput))
// }

// function getCity() {
//     if (localStorage.getItem("selected cities")) {
//         selectedCities = JSON.parse(localStorage.getItem("selected cities"));
//     }
// }



// current and future conditions for that city and the city is added to the search history

// current weather shows the name of he city, the date, an icon representation of the weather condition,
// the temp, humidity, and wind speed.

// future weather 5-day forcast display date, icon, temp, wind, and humidity.

// When u click on the city in search history past views are represented. 