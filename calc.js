class Calculator{
    constructor(prevValue){
        this.prevValue = prevValue
        this.clear()
    }
    clear(){
        this.currentOparand = '';
        this.prevOparand = '';
        this.oparation = undefined;
    }
    delete(){
        this.currentOparand = '';
        this.prevOparand = '';
        this.oparation = undefined;
        this.prevValue.value = ""
    }
    appendNumber(number){
        if (this.currentOparand != "0"){
            this.currentOparand = this.currentOparand.toString() + number.toString()
        } else {
            this.currentOparand = ""  
        }

    }
    chooseOparation(oparation){
        console.log(oparation);
    }
    compute(){
        
    }
    updateDisplay(){
        this.prevValue.value =this.currentOparand
        

    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-oparation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const prevValue = document.querySelector('[data-output]');
const icon = document.querySelector('.icon-container');
const container = document.querySelector('.container');

const calculator = new Calculator(prevValue);

numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        // console.log(outputScreen.innerText = button.innerText)
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.chooseOparation(button.id)
        // console.log(button.id);
        calculator.updateDisplay()
    })
})
deleteButton.addEventListener('click', () =>{
    // console.log(deleteButton);
    calculator.delete()
    icon.style.display = "grid";
    container.style.display = "none";
})

icon.addEventListener('click', ()=>{
    console.log(icon);
    icon.style.display = "none";
    container.style.display = "flex";
    
})
