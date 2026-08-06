function appendToDisplay(element) {
    const display = document.getElementById('display');
    display.value += element;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value='';
}

function calculate() {
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value);
        console.log(display.value);
    }catch (error) {
        display.value = 'Error';
    }
}

