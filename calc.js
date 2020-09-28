class Calculator{
    constructor(prevValue){
        this.prevValue = prevValue
        this.clear()
    }
    clear(){
        this.currentOparand = '';
        this.prevOparand = '';
        this.operation = undefined;
    }
    delete(){
        // this.currentOparand = '';
        // this.prevOparand = '';
        // this.operation = '';
        // this.prevValue.value = '';
        this.currentOparand = this.currentOparand.toString().slice(0, -1)
    }
    appendNumber(number){
        if (number === '.' && this.currentOparand.includes('.')) return;
        this.currentOparand = this.currentOparand.toString() + number.toString()
        // if (this.currentOparand != "0"){
        //     this.currentOparand = this.currentOparand.toString() + number.toString()
        // } else {
        //     this.currentOparand = ""  
        // }

    }
    chooseOperation(operation){
        console.log(operation);
        if (this.operation === '') return;
        if (this.operation !== ''){
            this.compute()
        }
        this.operation = operation;
        this.prevOparand = this.currentOparand;
        this.currentOparand = '';
    }
    compute(){
        let computation
        const prev = parseFloat(this.prevOparand);
        const current = parseFloat(this.currentOparand);
        if (isNaN(prev) || isNaN(current)) return;

        if (this.operation === 'percent'){
            computation = prev / 100;
            console.log(computation);  
            this.currentOparand = computation;
            this.operation = undefined;
            this.prevOparand = '';
        }
        switch(this.operation){
            case "add":
                computation = prev + current;
                break;
            case "substruct":
                computation = prev - current;
                break;
            case "devide":
                computation = prev / current;
                break;
            case "multiple":
                computation = prev * current;
                break;
            // case "percent":
            //     computation = prev / 100;
            //     console.log(computation)
            //     break;
            default:
                return;
        }
        this.currentOparand = computation;
        this.operation = undefined;
        this.prevOparand = '';
    }
    updateDisplay(){
        this.prevValue.value =this.currentOparand   
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const prevValue = document.querySelector('[data-output]');
const clacIcon = document.querySelector('.icon-container');
const notesIcon = document.querySelector('.notes-container');
const closedIcon = document.querySelector('.fa-times-circle');
const container = document.querySelector('.container');
const calculator = new Calculator(prevValue);
const acButton = document.querySelector('#ac')
numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        acButton.innerText = 'C'

        // console.log(outputScreen.innerText = button.innerText)
    })
})
//choosing operators and make it apears on the app screen.
operationButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.chooseOperation(button.id)
        // calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', ()=>{
    calculator.compute();
    calculator.updateDisplay();
    calculator.clear();
})

// makes the app closed.
closedIcon.addEventListener('click', ()=>{
    calculator.clear();
    calculator.updateDisplay();
    clacIcon.style.display = "grid";
    notesIcon.style.display = "flex";
    container.style.display = "none";  
})
deleteButton.addEventListener('click', () =>{
    // console.log(deleteButton);
    calculator.clear()
    calculator.updateDisplay()
    acButton.innerText = 'AC'
})

//makes the app opened.
clacIcon.addEventListener('click', ()=>{
    clacIcon.style.display = "none";
    notesIcon.style.display = "none";
    container.style.display = "flex";
})
