var goalPrice = 30;
      
$("#goal-price").text(goalPrice);

var increment = 0;
var numberArray = [10, 5, 3, 7];

for (var i = 0; i < numberArray.length; i++) {

        var crystalImg = $("<img>");

        crystalImg.addClass("crystal-image");
        crystalImg.attr('src', 'https://www.publicdomainpictures.net/pictures/200000/nahled/crystal-ball-14785248289ya.jpg');
        crystalImg.attr("data-crystalvalue", numberArray[i]);  // Add data attribute, set it equal to the array value.
        $("#crystals").append(crystalImg); // image added to the page
}

$(".crystal-image").on("click", function() {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
       
        increment += crystalValue;
         alert("New score: " + increment);

        if (increment === goalPrice) {
        alert("You win!");
        }

        else if (increment >= goalPrice) {
        alert("You lose!!");
        }
});