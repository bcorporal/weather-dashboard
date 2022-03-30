
function getInfo() {
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&units=imperial&appid=2eec73ab8c9f542db3678272177ebe7c')
.then(response => response.json())
.then(data => {

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - " ").toFixed(0) + "°";
    
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - " ").toFixed() + "°";
    }

     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)) . src= "http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
    }
    console.log(data)

})
.catch(err => alert("Error: Please enter a valid city"))
}


function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Philadelphia";
    getInfo();
}



var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function checkDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[checkDay(i)];
    }

    

   



// function getInfo() {
//     var newName = document.getElementById("cityInput");
//     var cityName = document.getElementById("cityName");
//     cityName.innerHTML = "--"+newName.value+"--";
// }

// fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=2eec73ab8c9f542db3678272177ebe7c')
// .then(response => response.json())
//     .then(data => {
//             for (i = 0; i < 5; i++) {
//                 document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 277.06).toFixed(1)+ "°";
//             }
//             for (i = 0; i < 5; i++) {
//                 document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 280.01).toFixed(2)+ "°";
//             }
//             for (i = 0; i < 5; i++) {
//                 document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
//             }
//         console.log(data)
//     })

//     .catch(err => alert("error"))

//         function DefaultScreen(){
//             document.getElementById("cityInput").defaultValue = "Philadelphia";
//             getInfo();
//         }

// var d =new Date();
// var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function checkDay(day) {
//     if (day + d.getDay() > 6) {
//         return day + d.getDay() - 7;
//     }
//     else {
//         return day + d.getDay();
//     }
// }

// for (i = 0; i < 5; i++) {
//     document.getElementById("day" + (i + 1)).innerHTML = weekday[checkDay(i)];
// }


// var searchEl = document.getElementById('search-btn');
// var cityEl = document.querySelector('city-input');

// var key = '2eec73ab8c9f542db3678272177ebe7c';
//  var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=2eec73ab8c9f542db3678272177ebe7c';

// fetch(baseUrl).then((data) =>

// var name = document.querySelector('name');
// var desc = document.querySelector('desc');
// var temp = document.querySelector('temperarture');


//  searchEl.addEventListener('click',function() {
//      fetch('https://api.openweathermap.org/data/2.5/weather?q=new york&appid=2eec73ab8c9f542db3678272177ebe7c')
//         .then(response => response.json())
//          .then(data => console.log(data))
//          .catch(err => alert("error b"))
//  });
