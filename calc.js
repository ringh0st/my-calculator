class Calculator{
    constructor(outputScreen){
        this.outputScreen = outputScreen
        this.clear()
        
    }
    clear(){
        // this.outputScreen = '';
        this.oparation = undefined;
    }
    delete(){

    }
    appendNumber(number){
        console.log(this.outputScreen)
        this.outputScreen.value = number

    }
    chooseOparation(oparation){

    }
    compute(){
        
    }
    updateDisplay(){
        console.log(this.outputScreen)
        this.outputScreen.innerText = this.outputScreen

    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-oparation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const outputScreen = document.querySelector('[data-output]');

const calculator = new Calculator(outputScreen);

numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        // console.log(outputScreen.innerText = button.innerText)
    })
})