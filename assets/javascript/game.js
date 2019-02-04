// Values
var crystOne=0;
var crystTwo=0;
var crystThree=0;
var crystFour=0;
var wins=0;
var loss=0;
var goalPrice=0;
var currentBalance=0;

    // Reset
    function reset(){
        
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
        if (crystThree===crystOne||crystThree===crystTwo){
                crystThree=Math.floor(Math.random() * 12 + 1);  
                }
        // Reset fourth Crystal if it's value matches any previous
        if (crystFour===crystOne||crystFour===crystTwo||crystFour===crystThree){
                crystFour=Math.floor(Math.random() * 12 + 1); 
        }
        

        console.log(crystOne);
        console.log(crystTwo);
        console.log(crystThree);
        console.log(crystFour);

        goalPrice=Math.floor(Math.random() * 101 + 19);
        currentBalance=0;
        $("#targetNumber").text(goalPrice);
        $("#scoreBox").text(currentBalance);
        $("#winLoss").text("Wins : "+wins+" || Losses: "+loss);
    }
    reset();

    // Functions for Button Clicks still need to be fixed 
    /*
    $("#btnOne").click(function(){
        $(this).finish();
        currentBalance+=crystOne;
        $("#scoreBox").text(currentBalance);
       
    });

    $("#btnTwo").click(function(){
        $(this).finish();
        currentBalance+=crystTwo;
        $("#scoreBox").text(currentBalance);
       
    });

    $("#btnThree").click(function(){
        $(this).finish();
        currentBalance+=crystThree;
        $("#scoreBox").text(currentBalance);
       
    });

    $("#btnFour").click(function(){
        $(this).finish();
        currentBalance+=crystFour;
        $("#scoreBox").text(currentBalance);      
       
    });
    */
    // win/loss detector tied to the crystal button class
    $(".crystalBtn").click(function(){
        if (currentBalance===goalPrice){
            wins ++;
            alert("You win!");
            reset();

        }  else if (currentBalance>goalPrice){
            loss++;
            alert("You Lose...");
            reset();

        }  
    });
    
    console.log(goalPrice)
    console.log(currentBalance)
    