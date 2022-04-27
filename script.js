function boxChoice () {
    let numBoxHaz = Math.floor(Math.random() * 4)+1;
    return `box${numBoxHaz}`;
};
function colorChoice () {
    let num1 = Math.floor(Math.random() * 254)+1;
    let num2 = Math.floor(Math.random() * 254)+1;
    let num3 = Math.floor(Math.random() * 254)+1;
    return `rgb(${num1},${num2},${num3})`;
};

function colorChange () {
    let box = boxChoice ();
    let color2 = colorChoice ();
    document.getElementById(box).style.background = color2;
    document.getElementById(box).innerHTML = color2;
}

let contID = document.getElementById('content');

contID.onmouseover = colorChange;











