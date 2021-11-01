let buttons = document.querySelectorAll(".num_button");
let res = document.querySelector("#res");
let res_text = '';
buttons.forEach( button => button.addEventListener('click',fill_res));
function fill_res (button){
   res.textContent = button.target.textContent;
   
   
}
