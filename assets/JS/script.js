var addThingButton = document.querySelector("#add-thing-button");
var pickButton = document.querySelector("#pick-button");
var responseDiv = document.querySelector(".response")
var amountOfThings = 2
var arr = []

var addThing = function() {
    amountOfThings += 1;
    const inputElem = document.createElement('input');
    inputElem.type = 'text';
    inputElem.setAttribute("placeholder", "thing");
    document.getElementById('add-input').appendChild(inputElem);
    inputElem.classList.add('form-control', 'form', 'width30', 'mb-3');
    inputElem.id = `option-${amountOfThings}`
}

var pick = function(event) {
    captureAddedThings();
    event.preventDefault();
    var optionOne = document.querySelector("#option-1").value;
    var optionTwo = document.querySelector("#option-2").value;
    arr.push(optionOne, optionTwo)
    var number = Math.floor(Math.random() * amountOfThings);
    var response = arr[number];
    responseDiv.innerHTML = response;
}

var captureAddedThings = function() {
    for (var i = 3; i <= amountOfThings; i++) {
        var thingToAdd = document.querySelector(`#option-${i}`).value;
        arr.push(thingToAdd);
    }
}

addThingButton.addEventListener("click", addThing);
pickButton.addEventListener("click", pick);