const products = document.querySelector(".products");
const productFile = "products.json";
const cartproducts = document.querySelector(".cart-products");
const total = document.querySelector(".total");
let carticon = document.querySelector(".cartv");
let body = document.querySelector("body");
let cart = [];
const checkoutBtn = document.querySelector(".checkout");

checkoutBtn.addEventListener("click", function() {
    if (cart.length > 0) {
        window.location.href = "checkout.html";
    } else {
        alert("Your cart is empty. Please add items to your cart!");
    }
});

const saveCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

fetch(productFile)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((product) => {
            const { id, name, price, images, size } = product;
            const colorOptions = images.map((image) => `
                <input type="radio" id="${id}-${image.colorname}" name="${id}-color" value="${image.colorname}" class="color-btn" data-img="${image.url}">
                <label for="${id}-${image.colorname}" style="background-color: ${image.color};"></label>
            `).join("");
            const sizeOptions =size.map((sizeItem) => `
                <input type="radio" id="${id}-${sizeItem}" name="${id}-size" value="${sizeItem}" class="size-btn">
                <label for="${id}-${sizeItem}">${sizeItem}</label>
            `).join("");

            products.innerHTML += `
                <div class="productcard" id="${id}">
                    <div class="cardcontainer">
                        <div class="card-img">
                            <img src="${images[0].url}" alt="${name}">
                        </div>
                    </div>
                    <div class="product-desc">
                        <div class="product-text">${name}</div>
                        <div class="product-price">LKR <span>${price}</span></div>
                    </div>
                    <div class="product-options">
                        <div class="colors">
                            ${colorOptions}
                        </div>
                        <div class="${size.length > 0 ? "size sizebar" : ""}">
                            ${sizeOptions}
                        </div>
                    </div>
                    <div class="card-btn">
                        <button class="addToCartBtn">ADD TO CART <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>`;
        });

        const colorBtns = document.querySelectorAll(".color-btn");

        colorBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const productCard = btn.closest(".productcard");
                const productImg = productCard.querySelector(".card-img > img");

                productImg.src = btn.dataset.img;
            });
        });

        const addToCartBtn = document.querySelectorAll('.addToCartBtn');
        addToCartBtn.forEach(button => {
            button.addEventListener('click', () => {
                const productCard = button.closest('.productcard');
                const productId = productCard.id;
                const productName = productCard.querySelector('.product-text').textContent;
                const productPrice = productCard.querySelector('.product-price span').textContent;
                const productImage = productCard.querySelector('.card-img img').src;
                const productColorInput = productCard.querySelector(`input[name="${productId}-color"]:checked`);
                const productColor = productColorInput ? productColorInput.value : productCard.querySelector(`input[name="${productId}-color"]:first-child`).value;
                const productSizeInput = productCard.querySelector(`input[name="${productId}-size"]:checked`);
                const productSize = productSizeInput ? productSizeInput.value : null;
                const sizeContainer = productCard.querySelector('.size');

                if (!productSize && sizeContainer && sizeContainer.classList.contains('sizebar')) {
                    alert('Please select a size.');
                    return; // Stop further execution
                }


                addToCart(productId, productName, productPrice, productImage, productColor, productSize);
            });
        });

    });

function addToCart(productId, productName, productPrice, productImage, productColor, productSize) {
    // Here, you can implement your logic to add the product to the cart
    // For example, you can create a cart object and push the product details to it
    // You can also update the cart icon or perform any other actions related to adding the product to the cart
    console.log("Product added to cart:");
    console.log("ID:", productId);
    console.log("Name:", productName);
    console.log("Price:", productPrice);
    console.log("Image:", productImage);
    console.log("Color:", productColor);
    console.log("Size:", productSize);
    let productInCart = cart.findIndex((value) => value.productId == productId && value.productColor == productColor && value.productSize == productSize);

    if (cart.length <= 0){
        cart = [{
            productId: productId,
            productName: productName,
            productPrice: productPrice,
            productImage: productImage,
            productColor: productColor,
            productSize: productSize,
            quantity: 1
        }]
    }else if (productInCart < 0){
        cart.push({
            productId: productId,
            productName: productName,
            productPrice: productPrice,
            productImage: productImage,
            productColor: productColor,
            productSize: productSize,
            quantity: 1
        })
    }else{
        cart[productInCart].quantity += 1;
    }
    cartHtml();
    cartCount();
    saveCartToMemory();
}

const cartCount = () => {
    console.log(cart);
    document.querySelector('.cartv').innerHTML = `
    <button class="cart"><i class="fa-solid fa-cart-shopping"></i></button>
    <span class="cartnum">${cart.length}</span>
    `;
}

const cartHtml = () => {
    cartproducts.innerHTML = '';
    let totalPrice = 0;
    let index = 0;
    if (cart.length > 0){
        cart.forEach(item => {
            totalPrice += (parseFloat(item.productPrice) * parseInt(item.quantity));
            const cartItemHtml = `
            <div class="cart-product" id = "${index}">
                <div class="cart-product-img">
                    <img src="${item.productImage}" alt="${item.productName}">
                </div>
                <div class="cart-product-desc">
                    <div class="head">${item.productName}</div>
                    <div class="prop">Color : ${item.productColor}</div>
                    <div class="prop">Size : ${item.productSize}</div>
                </div>
                <div class="right">
                    <div class="quantity">
                        <span class="minus"><</span>
                        <span>${item.quantity}</span>
                        <span class="plus">></span>
                    </div>
                    <div class="price">
                        <span>${item.productPrice * item.quantity}</span>
                    </div>
                </div>
            </div>
        `;
        index++;
        cartproducts.innerHTML += cartItemHtml;
        });
    } 
    console.log(totalPrice);   
    total.innerHTML = `
        <h1 class="tot">TOTAL</h1>
        <h1 class="pri"><span>LKR</span> ${parseFloat(totalPrice)}.00</h1>
    `;
}

cartproducts.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let productIndex = positionClick.parentElement.parentElement.parentElement.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        console.log(productIndex);
        changeQuantityCart(productIndex, type);
    }
})
const changeQuantityCart = (productIndex, type) => {
    switch (type) {
        case 'plus':
            cart[productIndex].quantity = cart[productIndex].quantity + 1;
            break;
        
        default:
            let changeQuantity = cart[productIndex].quantity - 1;
            if (changeQuantity > 0) {
                cart[productIndex].quantity = changeQuantity;
            }else{
                cart.splice(productIndex, 1);
            }
            break;
    }
    cartHtml();
    saveCartToMemory();
    cartCount();
}

const clearCart = () => {
    cart = []; 
    cartHtml();
    cartCount();
    saveCartToMemory(); 
}

const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", clearCart);


const initApp = () => {
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
        cartHtml();
        cartCount();
    } 
}
initApp();