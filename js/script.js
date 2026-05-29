const quantityBoxes = document.querySelectorAll(".quantity")

quantityBoxes.forEach(function(box) {
    const minusBtn = box.querySelector("button:first-child");
    const plusBtn = box.querySelector("button:last-child");
    const quantityText = box.querySelector("span");

    let quantity = 1;

    plusBtn.onclick = function() {
        quantity++;
        quantityText.textContent = quantity;
    };

    minusBtn.onclick = function() {
        if (quantity > 1) {
            quantity--;
            quantityText.textContent = quantity;
        }
    };
});



const addButtons = document.querySelectorAll(".addButton");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const viewCradleCount = document.getElementById("viewCradleCount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart" , JSON.stringify(cart));
}

function updateCartCount() {
    const totalQuantity = cart.reduce((sum , item) => {
        return sum + item.quantity;
    }, 0);

    cartCount.textContent = totalQuantity;
    viewCradleCount.textContent = totalQuantity;

    if (totalQuantity > 0) {
        viewCradleCount.style.display = "flex";
    } else {
        viewCradleCount.style.display = "none";
    }
}

addButtons.forEach(function(button){

    button.addEventListener("click" , function () {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);
        const image = button.dataset.image;

        const existingItem = cart.find(item => item.name === name);


        const selectedQuantity = Number(button.parentElement.querySelector(".quantity span").textContent);

        if (existingItem) {
            existingItem.quantity += selectedQuantity;
        } else {
            cart.push({
                name: name,
                price: price,
                image: image,
                quantity: selectedQuantity
            });
        }

        displayCart();
        updateCartCount();
        saveCart();

        cartCount.textContent = cart.reduce((sum, item) => {
            return sum + item.quantity;
        }, 0);

        viewCradleCount.textContent = cart.reduce((sum, item) => {
            return sum + item.quantity;
        }, 0);

        if (Number(viewCradleCount.textContent) > 0) {
            viewCradleCount.style.display = "flex";
        }
    });
});



function displayCart() {
    cartItems.innerHTML ="";

    let total = 0;

    cart.forEach(function (item) {

        total = total + Number(item.price) * Number(item.quantity);

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

  console.log(cart);
  console.log("TOTAL" , total);
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
            updateCartCount();
            saveCart();
        };
    })

    minusButtons.forEach((button, index) => {
        button.onclick = () => {

            if (cart[index].quantity > 1) {
                cart[index].quantity--;

                displayCart();
                updateCartCount();
                saveCart();
            }
    };
    });

    deleteButtons.forEach((button, index) => {
        button.addEventListener("click" , () => {

            cart.splice(index, 1);

            displayCart();
            updateCartCount();
            saveCart();
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
    contactForm.addEventListener("submit" , function (event) {
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        const popup = document.getElementById("thankYouPopup");

        document.getElementById("thankYouText").textContent =
        `Thank you for your message, ${userName}!`;

        popup.classList.add("show");
    });
}

const closeThankYou = document.getElementById("closeThankYou");

if (closeThankYou) {
    closeThankYou.onclick = function() {
        document.getElementById("thankYouPopup").classList.remove("show");
    };
}

const basketButton = document.getElementById("basketButton");

if (basketButton) {

    basketButton.addEventListener("click" , function () {

        const cartModal = new bootstrap.Modal(
            document.getElementById("cartModal")
        );

        cartModal.show();
    });
}

const legendButton = document.getElementById("legendButton");

if (legendButton) {
    legendButton.addEventListener("click" , function () {
        window.location.href = "pages/about.html";
    });
}

const cradleButton = document.getElementById("cradleButton");

if (cradleButton) {
    cradleButton.addEventListener("click" , function () {
        window.location.href = "pages/about.html";
    });
}



const viewCradleBtn = document.querySelector(".viewCradleBtn");
const cartModalElement = document.getElementById("cartModal");


if (cartModalElement && viewCradleBtn) {
    cartModalElement.addEventListener("show.bs.modal" , function () {
        viewCradleBtn.style.display = "none";
    });

    cartModalElement.addEventListener("hidden.bs.modal" , function () {
        viewCradleBtn.style.display = "block";
    });

    if(cartItems && cartTotal) {
        displayCart();
    }
}

updateCartCount();





