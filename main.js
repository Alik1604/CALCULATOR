const buttons = document.querySelectorAll(".num_button");
const op_buttons = document.querySelectorAll(".op_button");
const res = document.querySelector("#res");
const res_button = document.getElementById("res_button");
const dot = document.getElementById("dot");
const clear_button = document.getElementById("cl_button");
const del_button = document.getElementById("del_button");


let res_text = '';
let num1 = 0;
let num2 = 0;
let operator = '';
let dot_switch = false;
let second_operator = '';

buttons.forEach( button => button.addEventListener('click',take_num));
op_buttons.forEach( op_button => op_button.addEventListener('click',operate));
res_button.addEventListener('click',calc);
dot.addEventListener('click',add_dot);
clear_button.addEventListener('click',clear);
del_button.addEventListener('click', remove_last_number);

function remove_last_number(){
   let new_string = Array.from(res.textContent);
   new_string.pop();
   res.textContent = new_string.join('');
   res_text = res.textContent;
}

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
      operator = op_button.target.textContent;
      second_operator = operator;
      num1 = res.textContent;

   }
}

function take_num (button) {
   if (second_operator != ''){
      res_text = '';
      res.textContent = '';
      second_operator = '';
   }
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