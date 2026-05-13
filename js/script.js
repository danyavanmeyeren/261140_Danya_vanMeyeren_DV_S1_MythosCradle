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

const addButtons = document.querySelectorAll(".addButton");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cart = [];

addButtons.forEach(function(button){
    button.addEventListener("click" , function () {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);
        const image = button.dataset.image;

        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1 
        });

        displayCart();
    });
});



function displayCart() {
    cartItems.innerHTML ="";

    let total = 0;

    cart.forEach(function (item) {
        total =+ item.price * item.quantity;
  cartItems.innerHTML += `
      <div class="cartItem">
        <img src="${item.image}" alt="${item.name}">

        <div class="cartInfo">
          <h3>${item.name}</h3>
          <p>R ${item.price}.00</p>
        </div>

        <div class="quantityControls">
          <button>-</button>
          <span>${item.quantity}</span>
          <button>+</button>
        </div>

        <button class="deleteBtn">Remove</button>
      </div>
    `;
  });

  cartTotal.textContent = "Total: R " + total.toFixed(2);
}