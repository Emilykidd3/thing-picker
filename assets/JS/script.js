var addThingButton = document.querySelector("#add-thing-button");
var pickButton = document.querySelector("#pick-button");



var addThing = function() {
    console.log("add thing clicked")
}

var pick = function(event) {
    event.preventDefault();
    var optionOne = document.querySelector("#option-one").value;
    var optionTwo = document.querySelector("#option-two").value;
    var arr = [optionOne, optionTwo];
    var number = Math.floor(Math.random() * 2);
    console.log(arr[number]);
}

addThingButton.addEventListener("click", addThing);
pickButton.addEventListener("click", pick);