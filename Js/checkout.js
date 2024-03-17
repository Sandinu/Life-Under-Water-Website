let cart = [];
const cartproducts = document.querySelector(".products");
const tots = document.querySelector(".tots");

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
                            <div class="prop">Quantity : ${item.quantity}</div>

                        </div>
                        <div class="right">
                            <div class="price">
                                <span>LKR ${(item.productPrice)*(item.quantity)}</span>
                            </div>
                        </div>
                </div>
        `;
        index++;
        cartproducts.innerHTML += cartItemHtml;
        });
    } 
    console.log(totalPrice);   
    tots.innerHTML = `
    <div class="total subt">
        <h1 class="tot">Sub Total</h1>
        <h1 class="pri"><span>LKR</span> ${totalPrice}.00</h1>
    </div>
    <div class="total">
        <h1 class="tot">Delivery Charges</h1>
        <h1 class="pri"><span>+ LKR</span> 400.00</h1>
    </div>
    <div class="total Ot">
        <h1 class="Otot">Order Total</h1>
        <h1 class="Opri"><span>LKR</span> ${totalPrice + 400}.00</h1>
    </div>
    `;
}

const initApp = () => {
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
    } 
    cartHtml();
    console.log(cart[1]);
}
initApp();