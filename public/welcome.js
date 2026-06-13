var array = [
  "Welcome to the ocean.",
  "Division 1 AI hater club.",
  "Wait hold on uhhh i wasn't ready give me a moment...",
  "I don't believe in quantum mechanics.",
]

var randomNumber = Math.floor(Math.random()*array.length);

var str = array[randomNumber];

var welcome_msg = document.getElementById("welcome_msg");
welcome_msg.innerHTML = str;
