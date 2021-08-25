var addThingButton = document.querySelector("#add-thing-button");
var pickButton = document.querySelector("#pick-button");

var addThing = function() {
    console.log("add thing button clicked");
}

var pick = function() {
    console.log("pick button clicked")
}

addThingButton.addEventListener("click", addThing);
pickButton.addEventListener("click", pick);