const quantityBoxes = document.querySelectorAll(".quantity");

quantityBoxes.forEach(function (box){
const plusBtn = box.querySelector("button:last-child");
const minusBtn = box.querySelector("button:first-child");
const quantityText = box.querySelector("span");

let quantity = 1;

plusBtn.addEventListener("click" , function (){
    quantity++;
    quantityText.textContent = quantity;
});

minusBtn.addEventListener("click" , function (){
    if (quantity > 1){
        quantity--;
        quantityText.textContent = quantity;
    }
});
});




const plusBtn = document.querySelector(".quantityControls button:last-child");
const minusBtn = document.querySelector(".quantityControls button:first-child");
const quantityText = document.querySelector(".quantityControls span");

let quantity = 1;

plusBtn.addEventListener("click" , () => {
    quantity++;
    quantityText.textContent = quantity;
});

minusBtn.addEventListener("click" , () => {
    if(quantity > 1){
        quantity--;
        quantityText.textContent = quantity
    }
});

const deleteBtn = document.querySelector(".deleteBtn");
const cartItem = document.querySelector(".cartItem");

deleteBtn.addEventListener("click" , function (){
    cartItem.style.display = "none";
});