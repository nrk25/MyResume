var bodyColor = document.getElementsByTagName("body");

function changeBackgroundColor(event) {
    bodyColor[0].style.backgroundColor = event.target.value;
}