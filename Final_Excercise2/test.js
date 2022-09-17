var counter = document.getElementById("count")
var flag = 0;

counter.innerText = 0;

function decrease() {
    flag -= 1;
    counter.innerText = flag;
}

function reset() {
    flag = 0
    counter.innerText = flag;
}

function increase() {
    flag += 1;
    counter.innerText = flag;
}