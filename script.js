var messages = [
    "Happy New Year Sarah !!!",
    "Je te souhaite beaucoup de réussite",
    "Et beaucoup d'argent, tu en auras besoin",
    "I hope we will see each other this year :)"
];

var currentIndex = 0;

function changeMessage() {
    document.getElementById("newYearMessage").innerHTML = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
}

function handleClick() {
    changeMessage(); 
    clearInterval(intervalId); 
    intervalId = setInterval(changeMessage, 5000); 
}

var intervalId = setInterval(changeMessage, 5000);
