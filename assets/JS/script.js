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
}

var pick = function(event) {
    event.preventDefault();
    var optionOne = document.querySelector("#option-1").value;
    var optionTwo = document.querySelector("#option-2").value;
    arr.push(optionOne, optionTwo)
    var number = Math.floor(Math.random() * amountOfThings);
    var response = arr[number];
    responseDiv.innerHTML = response;
}

addThingButton.addEventListener("click", addThing);
pickButton.addEventListener("click", pick);