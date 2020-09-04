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
        // console.log(this.prevValue)

        this.currentOparand = this.currentOparand.toString() + number.toString()
        // this.prevValue.value = this.prevValue.value + number
        console.log(this.currentOparand);

    }
    chooseOparation(oparation){
        if(this.prevOparand === NaN){
            this.prevOparand = "0" 
            console.log(this.prevOparand)
        }
        console.log(oparation.innerText)
        this.oparation = oparation
        this.prevOparand =this.currentOparand
        this.currentOparand = ''
    }
    compute(){
        
    }
    updateDisplay(){
        // console.log(this.prevValue)
        // this.prevValue.innerText = this.prevValue
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
        calculator.chooseOparation(button.innerText)
        console.log(button.id);
        calculator.updateDisplay()
    })
})
deleteButton.addEventListener('click', () =>{
    console.log(deleteButton);
    calculator.delete()
    icon.style.display = "grid";
    container.style.display = "none";
})

icon.addEventListener('click', ()=>{
    console.log(icon);
    icon.style.display = "none";
    container.style.display = "flex";
    
})
