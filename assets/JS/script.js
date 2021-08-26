var addThingButton = document.querySelector("#add-thing-button");
var pickButton = document.querySelector("#pick-button");



var addThing = function() {
    console.log("add thing clicked")
}

var pick = function(event) {
    event.preventDefault();
    var optionOne = document.querySelector("#option-one").value;
    var optionTwo = document.querySelector("#option-two").value;
    console.log(optionOne);
    console.log(optionTwo);
}

addThingButton.addEventListener("click", addThing);
pickButton.addEventListener("click", pick);