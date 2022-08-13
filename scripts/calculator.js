
const RESULT = document.getElementById("result");


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