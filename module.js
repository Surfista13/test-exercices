export function boxChoice () {
    let numBoxHaz = Math.floor(Math.random() * 4)+1;
    return `box${numBoxHaz}`;
};
export function colorChoice () {
    let num1 = Math.floor(Math.random() * 254)+1;
    let num2 = Math.floor(Math.random() * 254)+1;
    let num3 = Math.floor(Math.random() * 254)+1;
    return `rgb(${num1},${num2},${num3})`;
};
