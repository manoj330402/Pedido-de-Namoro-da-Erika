function moveButton(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = getPosition(-200, 200);
    btn.style.left = getPosition(-200, 200);
}

function accepted() {
    location.href = 'https://www.youtube.com/watch?v=SU6KFnGF9M8';
}

function getPosition(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}   
