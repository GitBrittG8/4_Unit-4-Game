// Values
var crystOne=0;
var crystTwo=0;
var crystThree=0;
var crystFour=0;
var wins=0;
var loss=0;
var goalPrice=0;
var currentBalance=0;

//Set all Crystals to Random Value
crystOne=Math.floor(Math.random() * 12 + 1);
crystTwo=Math.floor(Math.random() * 12 + 1);
crystThree=Math.floor(Math.random() * 12 + 1);
crystFour=Math.floor(Math.random() * 12 + 1);

// If the first two values are the same number, then reset the second crystal to a new value
if (crystOne===crystTwo){
        CrystTwo=Math.floor(Math.random() * 12 + 1);  
        }
// If the third crystal is the same value as the first or second crystal,  reset it's value
if (crystThree===crystOne||crystTwo){
        crystThree=Math.floor(Math.random() * 12 + 1);  
        }
// Reset fourth Crystal if it's value matches any previous
if (crystFour===crystOne||crystTwo||crystThree){
        crystFour=Math.floor(Math.random() * 12 + 1); 
}


console.log(crystOne + " is the Green Value");
console.log(crystTwo + " is the Blue Value");
console.log(crystThree + " is the Red Value");
console.log(crystFour + " is the Pink Value");

goalPrice=Math.floor(Math.random() * 10 + 19);              // Set goal price
currentBalance=0;                                           // Reset 

console.log(goalPrice + " is the Goal Price");
console.log(currentBalance + " is the current balance");
console.log("Hurray!");

$("#goal-price").text(goalPrice)                              //Price in html

var counter = 0;
$(".crystal-image").on("click", function() {
        counter += 10;
        alert("Counter is: " + counter);
        console.log(counter + " is the counter value")
});