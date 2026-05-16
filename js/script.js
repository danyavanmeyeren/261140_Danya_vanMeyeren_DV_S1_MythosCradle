const addButtons = document.querySelectorAll(".addButton");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cart = [];

addButtons.forEach(function(button){
    button.addEventListener("click" , function () {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);
        const image = button.dataset.image;

        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity++;
        } else {

            cart.push({
                name: name,
                price: price,
                image: image,
                quantity: 1 
            });
        }
        displayCart();
    });
});



function displayCart() {
    cartItems.innerHTML ="";

    let total = 0;

    cart.forEach(function (item) {

        total =+ item.price * item.quantity;

  cartItems.innerHTML += `
      <div class="cartItems">
        <img src="${item.image}" alt="${item.name}">

        <div class="cartInfo">
          <h3>${item.name}</h3>
          <p>R ${item.price}.00</p>
        </div>

        <div class="quantityControls">
          <button class="minusBtn">-</button>
          <span>${item.quantity}</span>
          <button class="plusBtn">+</button>
        </div>

        <button class="deleteBtn">Remove</button>
      </div>
    `;
  });

  cartTotal.textContent = "Total: R " + total.toFixed(2);
  updateCartButtons();
}

function updateCartButtons() {
    const plusButtons = document.querySelectorAll(".plusBtn");
    const minusButtons = document.querySelectorAll(".minusBtn");
    const deleteButtons = document.querySelectorAll(".deleteBtn");

    plusButtons.forEach((button, index) => {
        button.onclick = () => {
            cart[index].quantity++;

            displayCart();
        };
    })

    minusButtons.forEach((button, index) => {
        button.onclick = () => {

            if (cart[index].quantity > 1) {
                cart[index].quantity--;

                displayCart();
            }
    };
    });

    deleteButtons.forEach((button, index) => {
        button.addEventListener("click" , () => {

            cart.splice(index, 1);

            displayCart();
        });
    });
}




const searchInput = document.getElementById("searchInput");
const productSections = document.querySelectorAll(".productSection");

searchInput.addEventListener("input" ,function () {
    const searchValue = searchInput.value.toLowerCase();

    productSections.forEach(function (section) {

        const text = section.textContent.toLowerCase();
        
        if (text.includes(searchValue)) {
        section.style.display ="block";
        } else {
        section.style.display = "none";
        }
    });
});



const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit" , function(event) {
        event.preventDefault();

        const userName = document.getElementById("userName");
        const thankYouText = document.getElementById("thankYouText")

        thankYouText.textContent =
        `Thank you for your message, ${userName.value}!`;

        const thankYouModal = new bootstrap.Modal(
            document.getElementById("thankYouModal")
        );
        thankYouModal.show();
    });
}


