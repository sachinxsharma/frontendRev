const buttonElement = document.querySelectorAll("button");
const inputfeildEl = document.getElementById("result");

for (let i = 0; i < buttonElement.length; i++){
    buttonElement[i].addEventListener("click", ()=> {
        const buttonvalue= (buttonElement[i].textContent);
        if(buttonvalue === "C"){
            clearResult();
        } else if(buttonvalue === "="){
            calculateResult();
        } else {
            appendValue(buttonvalue)
        }

    })
}

function clearResult(){
    inputfeildEl.value = "";


}
function calculateResult(){
    // eval is used to evaluate the string expression in inputfeildEl
    // Note: Using eval can be dangerous if the input is not controlled, as it can execute arbitrary code.
    inputfeildEl.value = eval(inputfeildEl.value);

}
function appendValue(buttonvalue){
    inputfeildEl.value += buttonvalue;

}