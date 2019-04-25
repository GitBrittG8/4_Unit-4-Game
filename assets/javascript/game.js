$( document ).ready(function(){

// Values
var goalPrice=Math.floor(Math.random() * 101 + 19);      // Goal between 19-120
var crystOne=Math.floor(Math.random() * 11 + 1);        // Crystals between 1-12
var crystTwo=Math.floor(Math.random() * 11 + 1);
var crystThree=Math.floor(Math.random() * 11 + 1);
var crystFour=Math.floor(Math.random() * 11 + 1);
var wins=0;
var loss=0;
var currentBalance=0;

function reset() {
        goalPrice=Math.floor(Math.random() * 101 + 19);
        crystOne=Math.floor(Math.random() * 11 + 1);
        crystTwo=Math.floor(Math.random() * 11 + 1);
        crystThree=Math.floor(Math.random() * 11 + 1);
        crystFour=Math.floor(Math.random() * 11 + 1);
        currentBalance=0;

        if (crystOne===crystTwo){                               
                CrystTwo=Math.floor(Math.random() * 12 + 1);  // If first two values are equal, reset 2nd crystal
        }
        if (crystThree===crystOne||crystTwo){
                crystThree=Math.floor(Math.random() * 12 + 1);  // If third crystal equals 1st or 2nd crystal,  reset it
        }
        if (crystFour===crystOne||crystTwo||crystThree){
                crystFour=Math.floor(Math.random() * 12 + 1);  // Reset fourth Crystal if it matches any previous
        }

        console.log("Green: " + crystOne + "\nBlue: " + crystTwo + "\nRed: " + crystThree + "\nPink: " + crystFour)
};

function updateBalance() {
        $("#current-balance").text(currentBalance);
}

function updateStats() {
        $("#stats").text("Wins: "+wins+" Losses: "+loss);
}

function winFtn () {
        alert("You win!");
        ++ wins;                                        
        reset();                                        
}

function lossFtn () {
        alert("You lose!");
        ++ loss;
        reset();
}

$('#green-one').click(function(){
        currentBalance = currentBalance + crystOne;
        updateBalance();
        if (currentBalance === goalPrice){
                winFtn();
        }
        else if (currentBalance > goalPrice){
                lossFtn();
        }
        updateStats();
})
$('#blue-two').click(function(){
        currentBalance = currentBalance + crystTwo;
        updateBalance();
        if (currentBalance === goalPrice){
                winFtn();
        }
        else if (currentBalance > goalPrice){
                lossFtn();
        }
        updateStats();
})
$('#red-three').click(function(){
        currentBalance = currentBalance + crystThree;
        updateBalance();
        if (currentBalance === goalPrice){
                winFtn();
        }
        else if (currentBalance > goalPrice){
                lossFtn();
        }
        updateStats();
})
$('#pink-four').click(function(){
        currentBalance = currentBalance + crystFour;
        updateBalance();
        if (currentBalance === goalPrice){
                winFtn();
        }
        else if (currentBalance > goalPrice){
                lossFtn();
        }
        updateStats();
});
});