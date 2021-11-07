const buttons = document.querySelectorAll(".num_button");
const op_buttons = document.querySelectorAll(".op_button");
const res = document.querySelector("#res");
const res_button = document.getElementById("res_button");
const dot = document.getElementById("dot");
const clear_button = document.getElementById("cl_button");

let res_text = '';
let num1 = 0;
let num2 = 0;
let operator = '';
let dot_switch = false;

buttons.forEach( button => button.addEventListener('click',take_num));
op_buttons.forEach( op_button => op_button.addEventListener('click',operate));
res_button.addEventListener('click',calc);
dot.addEventListener('click',add_dot);
clear_button.addEventListener('click',clear);

function clear() {
   res.textContent = '';
   res_text= '';
   dot_switch = false;
   operator = '';
}

function add_dot() {
   if ( dot_switch != true){
      res_text = res_text + dot.textContent;
      res.textContent = res_text;
      dot_switch = true;
   }
   
}

function operate(op_button) {
   if (operator == '') {
      num1 = res.textContent;
      operator = op_button.target.textContent;
      res.textContent = '';
      res_text= '';
      dot_switch = false;
   } 
   num2 = res.textContent;
   if ( num2 != '') {
      calc();
   }
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
            operator = '';
            res_text = res.textContent;
            break;
         case "-":
            res.textContent =Number(num1) - Number(num2);
            operator = '';
            res_text = res.textContent;
            break;
         case "*":
            res.textContent =Number(num2) * Number(num1);
            operator = '';
            res_text = res.textContent;
            break;
         case "/":
            res.textContent =Number(num1) / Number(num2);
            operator = '';
            res_text = res.textContent;
            break;
         default:
            break;
      }
 }