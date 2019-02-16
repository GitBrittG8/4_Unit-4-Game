// Values
var crystOne=Math.floor(Math.random() * 12 + 1);
var crystTwo=Math.floor(Math.random() * 12 + 1);
var crystThree=Math.floor(Math.random() * 12 + 1);
var crystFour=Math.floor(Math.random() * 12 + 1);
var wins=0;
var loss=0;
var goalPrice=Math.floor(Math.random() * 10 + 19);
var currentBalance=0;

function reset() {
        crystOne=Math.floor(Math.random() * 12 + 1);
        crystTwo=Math.floor(Math.random() * 12 + 1);
        crystThree=Math.floor(Math.random() * 12 + 1);
        crystFour=Math.floor(Math.random() * 12 + 1);
        goalPrice=Math.floor(Math.random() * 10 + 19);
        currentBalance=0;
};


if (crystOne===crystTwo){                               
        CrystTwo=Math.floor(Math.random() * 12 + 1);  // If first two values are equal, reset 2nd crystal
}
if (crystThree===crystOne||crystTwo){
        crystThree=Math.floor(Math.random() * 12 + 1);  // If third crystal equals 1st or 2nd crystal,  reset it
}
if (crystFour===crystOne||crystTwo||crystThree){
        crystFour=Math.floor(Math.random() * 12 + 1);  // Reset fourth Crystal if it matches any previous
}

console.log(crystOne + " is the Green Value");
console.log(crystTwo + " is the Blue Value");
console.log(crystThree + " is the Red Value");
console.log(crystFour + " is the Pink Value");
console.log(goalPrice + " is the Goal Price");
console.log(currentBalance + " is the current balance");
console.log("Hurray!");

var crystalValue = 5;


                                        
$(".crystal-image").on("click", function() {             // When crystal is clicked...  

        //This section still in the works                // Find the id of the crystal
                                                        // Grab the numerical value from that spec id

        //var crystalValue = ($(this).class("crystal-image")); // Grabs correct crystal value
        //crystalValue = parseInt(crystalValue);               // Finds it's Numerical value

        currentBalance += crystalValue;                        // Adds value(s) to current balance

        if (currentBalance === goalPrice) {                     // Display win/loss
                alert("You win!");
                ++ wins;                                        
                reset();                                        // Reset stats
        }
        if (currentBalance > goalPrice) {
                alert("You lose!");
                ++ loss;
                reset();
        }

        $("#goal-price").text(goalPrice);                         // Place stats in html
        $("#current-balance").text(currentBalance);
        $("#stats").text("Wins: "+wins+" Losses: "+loss);
});

