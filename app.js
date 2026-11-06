let display=document.getElementById("txtDisplay");

function appendValue(value){
    display.value+=value;
}

function clearDisplay(){
    display.value="";
}

function space(){
    display.value+=" ";
}

function deleteDisplay(){
    display.value="";
}   

function percentage(){
    display.value=parseFloat(display.value)/100;
}

function divide(){
    appendValue("/");
}

function number7(){
    appendValue("7");
}

function number8(){
    appendValue("8");
}

function number9(){
    appendValue("9");
}

function multiply(){
    appendValue("*");
}

function number4(){
    appendValue("4");
}

function number5(){
    appendValue("5");
}

function number6(){
    appendValue("6");
}

function subtract(){
    appendValue("-");
}

function number1(){
    appendValue("1");
}

function number2(){
    appendValue("2");
}

function number3(){
    appendValue("3");
}

function add(){
    appendValue("+");
}

function number0(){
    appendValue("0");
}

function decimal(){
    appendValue(".");
}

function calculate(){
    display.value=eval(display.value);
}

let firstNumber="";
let operator="";

function chooseOperation(op){
    firstNumber=display.value;
    operator=op;
    display.value="";
}

function calculateResult(){
    let secondNumber=display.value;
    let result;

    let num1=Number(firstNumber);
    let num2=Number(secondNumber);

    if(operator=="+"){
        result=num1+num2;
    }else if(operator=="-"){
        result=num1-num2;
    }else if(operator=="*"){
        result=num1*num2;
    }else if(operator=="/"){
        result=num1/num2;
    }
    display.value=result;
}   