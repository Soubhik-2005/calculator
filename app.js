const AC=document.querySelector("#AC");
const input = document.querySelector("#input");
const backspace=document.querySelector("#backspace");
const btn_=document.querySelector("#btn_");
const button = document.querySelector('#button');
const text = document.querySelector('.text');


function appendToDisplay(e){
    input.value+=e;
};
function clearAll(){
    input.value='';
    console.log('clear');
}
function calculate() {
    try {
        input.value = eval(input.value); // Evaluates the expression
    } catch (error) {
        input.value = 'Error';
    }
}
function clear_1(){
    input.value=input.value.slice(0,-1);
}
function move(){
        if(text.classList.contains('circle')){
            text.classList.remove('circle');
            text.classList.add('circle_1');
    }
else{
    text.classList.add('circle');
    text.classList.remove('circle_1');
}
};

