function insertValue(value) {
    var input = document.getElementById('re');
    input.value += value;
}

function clearEntry() {
    var input = document.getElementById('re');
    input.value = input.value.slice(0, -1);
}

function clearAll() {
    var input = document.getElementById('re');
    input.value = '';
}

function calculate() {
    var input = document.getElementById('re');
    try {
        input.value = eval(input.value);
    } catch (e) {
        input.value = 'Error';
    }
}
function uu(){
    alert("this is calculator")
}