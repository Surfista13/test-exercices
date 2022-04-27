import {colorChoice, boxChoice} from './module'

function colorChange () {
    let box = boxChoice ();
    let color2 = colorChoice ();
    document.getElementById(box).style.background = color2;
}

let contID = document.getElementById('content');

contID.onmouseover = colorChange;











