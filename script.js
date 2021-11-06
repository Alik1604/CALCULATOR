const buttons = document.querySelectorAll(".num_button");
const op_buttons = document.querySelectorAll(".op_button");
const res = document.querySelector("#res");
const res_button = document.getElementById("res_button");

let res_text = '';
let num1 = 0;
let num2 = 0;
let operator = '';

buttons.forEach( button => button.addEventListener('click',take_num));
op_buttons.forEach( op_button => op_button.addEventListener('click',operate));
res_button.addEventListener('click',calc);


function operate(op_button) {
   num1 = res.textContent;
   operator = op_button.target.textContent;
   console.log(operator)
   res.textContent = '';
   res_text= '';
}

function take_num (button) {
   let button_text = button.target.textContent;
   res_text = res_text + button_text;
   res.textContent = res_text;
}

function calc() {
   num2 = res.textContent;
      switch (operator) {
         case "+":
            res.textContent =Number(num2) + Number(num1);
            break;
         case "-":
            res.textContent =Number(num1) - Number(num2);
            break;
         case "*":
            res.textContent =Number(num2) * Number(num1);
            break;
         case "/":
            res.textContent =Number(num1) / Number(num2);
            break;
         default:
            break;
      }
 }