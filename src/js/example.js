/**
 * Created by Leo on 16/10/31.
 */

/*
var mood = "happy";
var age = 33;
var height = "about 5'10\" tall";
*/

/*
var beatles = Array();
beatles[0] = "John";
*/


/*

var names = ["Ringo", "John", "George", "Paul"];
beatles[1] = names[3];

for (var i = 0; i < beatles.length; i++){
    console.log(beatles[i]);
}
*/

//Associative arrays -- not recommend
/*
var lennon = Array();
lennon["name"] = "John";
lennon["year"] = 1940;
lennon["living"] = false;

console.log("Lennon's giving name is " + lennon["name"]);
*/
//Objects
/*
var lennon = Object();
lennon.name = "John";
lennon.year = 1940;
lennon.living = false;

console.log("Lennon's giving name is " + lennon.name);
*/

/*
var lennon = {name:"John", year:1940, living:false};
var beatles = {};
beatles.vocalist = lennon;

console.log(beatles.vocalist.name + " " + beatles.vocalist.year + " " + beatles.vocalist.living);
*/

/*
//== equality operator
var my_mood = "happy";
var your_mood = "sad";
if (my_mood != your_mood){
    console.log("We both feel the same");
}

//=== strict comparison
var a = false;
var b = "";
if (a == b){
    //next statement will be executed.
    console.log("a equals b");
}
*/

/*
if (a === b){
    //next statement will be not executed.
    console.log("a equals b");
}

function shout() {
    var beatles = ["John", "Paul", "George", "Ringo"];
    for (var i = 0; i < beatles.length; i++){
        console.log(beatles[i]);
    }
}
shout();
*/

/*
function convertToCelsius(temp){
    var result = temp - 32;
    result = result / 1.8;
    return result;
}

var temp_fahrenheit = 95;
var temp_celsius = convertToCelsius(temp_fahrenheit);
console.log(temp_celsius)
*/


/*
function square(num) {
    var total = num * num;
    return total;
}

var total = 50;
var number = square(20);
console.log("Global variable total's value is " + total);
console.log("Local variable total's value is " + number);
*/

/*
//Object Math
var num = 7.561;
var num = Math.round(num);
console.log(num);

//Object Date
var current_date = new Date();
var today = current_date.getDay();
console.log(today);
*/

/*

console.log((typeof document.getElementById("purchases")));

var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++){
    console.log(typeof items[i]);
}

//alert(document.getElementsByClassName("sale important").length);

console.log(document.getElementById("purchases").getElementsByClassName("sale"));
*/

/*

var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++){
    var title_text = paras[i].getAttribute("title");
    if (title_text) alert(title_text);
}


var shopping = document.getElementById("purchases");
shopping.setAttribute("title", "a list of goods");
*/

var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++){
    var title_text = paras[i].getAttribute("title");
    if (title_text){
        paras[i].setAttribute("title", "brand new title text");
        alert(paras[i].getAttribute("title"));
    }
}
