const AC=document.querySelector("#AC");
const input = document.querySelector("#input");
const backspace=document.querySelector("#backspace");
const btn_=document.querySelector("#btn_");


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