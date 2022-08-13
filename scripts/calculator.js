const RESULT = document.getElementById("result");
const BUTTONS = document.getElementsByTagName("button");

const BTN_C = BUTTONS[0];
const BTN_DELETE = BUTTONS[1];
const BTN_DIVIDE = BUTTONS[2];
const BTN_MULTIPLY = BUTTONS[3];
const BTN_7 = BUTTONS[4];
const BTN_8 = BUTTONS[5];
const BTN_9 = BUTTONS[6];
const BTN_MINUS = BUTTONS[7];
const BTN_4 = BUTTONS[8];
const BTN_5 = BUTTONS[9];
const BTN_6 = BUTTONS[10];
const BTN_PLUS = BUTTONS[11];
const BTN_1 = BUTTONS[12];
const BTN_2 = BUTTONS[13];
const BTN_3 = BUTTONS[14];
const BTN_EQUAL = BUTTONS[15];
const BTN_0 = BUTTONS[16];
const BTN_DOT = BUTTONS[17];


function insert(str) {
    RESULT.innerText += str;
}

function clean() {
    RESULT.innerText = '';
}

function erase() {
    let txt = RESULT.innerText;
    RESULT.innerText = txt.substring(0, txt.length-1);
}

function equal() {
    if (RESULT.innerText) {
        let problem = RESULT.innerText;
        RESULT.innerText = eval(problem);
    }
}