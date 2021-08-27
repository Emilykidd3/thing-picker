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
    var response = arr[number];
    const elem = document.createElement('div');
    const elemText = document.createTextNode(response);
    elem.appendChild(elemText);
    document.body.appendChild(elem);
    elem.classList.add('response')
}

addThingButton.addEventListener("click", addThing);
pickButton.addEventListener("click", pick);