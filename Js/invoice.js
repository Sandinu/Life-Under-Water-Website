function Invoice(formData, cartProducts) {
    let totalPrice = 0;
    cartProducts.forEach(item => {
        totalPrice += parseFloat(item.productPrice) * parseInt(item.quantity);
    });

    // Create HTML for cart products dynamically
    let cartProductsHTML = '';
    cartProducts.forEach((item, index) => {
        cartProductsHTML += `
            <div class="cart-product" id="${index}">
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
                        <span>LKR ${(parseFloat(item.productPrice) * parseInt(item.quantity)).toFixed(2)}</span>
                    </div>
                </div>
            </div>`;
    });

    // Create invoice page content dynamically
    const invoiceHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

            :root {
                --c1 : #00132A;
                --c2 : #84FFE9;
                --c3: #00C9C9;
                --c4: #000E1F;
                --c5: #d8d8d8;
            }
            body{
                font-family: poppins;
                margin: 0;
            }

            header{
                left: 0;
                right: 0;
                margin: 0px auto;
                background: var(--c3);
                padding: 10px 20px;
            }
            header img{
                width: 100px;
            }
            header h1{
                float: right;
                color: var(--c1);
            }
            .top{
                text-align: center;
            }
            .top h1{
                font-size: 55px;
                color: var(--c3);
                letter-spacing: 2px;
                margin: 10px;
            }

            .top p{
                margin: 1px;
            }

            .det{
                border: 1px solid var(--c1);
                padding-bottom: 15px;
                width: 90%;
                margin: auto;
            }
            .det h2{
                text-transform: uppercase;
                color: var(--c1);
                font-size: 28px;
                margin-bottom: 15px;
            }

            .pro{
                text-transform: uppercase;
                text-align: center;
                font-size: 28px;
                color: var(--c1);
            }

            .cart-product{
                width: 95%;
                margin: auto;
                display: flex;
                align-items: center;
                text-align: left;
                position: relative;
                margin-bottom: 15px;
            }
            .cart-product-img{
                height: 50px;
                width: 50px;
                border-radius: 5px;
                background: white;
                position: relative;
                margin-right: 20px;
                align-items: center;
            }
            .cart-product-img img{
                width: 40px;
                margin: auto;
                align-items: center;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            }

            .cart-product-desc .head{
                font-size: 20px;
                margin-bottom: 1px;
            }

            .cart-product-desc .prop{
                display: inline;
                margin-right: 5px;
                color: gray;
                font-size: 14px;
            }
            .right{
                position: absolute;
                right: 0;
                align-items: center;
            }



            .price{
                display: inline-block;
                font-size: 20px;
                font-weight: 600;
                color: var(--c3);
                text-align: right;
                align-items: center;
            }

            .price{
                display: inline-block;
                font-size: 20px;
                font-weight: 600;
                color: var(--c3);
                text-align: right;
                align-items: center;
            }
            .total{
                width: 95%;
                margin: -10px auto;
                display: flex;
                align-items: center;
                text-align: left;
                position: relative;
            }
            .subt{
                border-top: 1px solid var(--c1);
                margin-top: 50px;
            }
            .total .tot{
                font-size: 20px;
                font-weight: 500;
                color: var(--c3);
            }
            .total .pri{
                position: absolute;
                right: 0;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 1px;
                color: var(--c3);
            }

            .total .pri span{
                font-size: 16px;
                font-weight: 400;
            }
            .total .Otot{
                font-size: 25px;
                font-weight: 600;
                color: var(--c1);
            }
            .total .Opri{
                position: absolute;
                right: 2%;
                font-size: 25px;
                font-weight: 600;
                letter-spacing: 1px;
                color: var(--c1);
            }

            .total .Opri span{
                font-size: 18px;
                font-weight: 400;
                color: var(--c1);
            }
            .Ot{
                margin-bottom: 20px;
                background: var(--c2);
                padding: 0 2.25%;
            }
            .copyright{
                text-align: center;
                font-size: 15px;
            }
        </style>
    </head>
    <body>
        <header>
            <img src="http://www.srilanka2030.lk/images/goals/goal14/TheGlobalGoals_Icons_Color_Goal_14.png" alt="">
            <h1>LIFE BELOW WATER SHOP</h1>
        </header>
        <div class="top">
            <h1>INVOICE</h1>
            <div class="det">
                <h2>Customer Information</h2>
                <p>Name: ${formData.name}</p>
                <p>Phone: ${formData.phone}</p>
                <p>Email: ${formData.email}</p>
                <p>Address: ${formData.address}</p>
            </div>
        </div>
        <h2 class="pro">Products</h2>
        <div class="products">
            ${cartProductsHTML}
        </div>
        <div class="tots">
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
        </div>
        <hr>
        <div class="copyright">
            <p>Copyright &copy; 2024</p>
        </div>
    </body>
    </html>
    `;

    // Create a Blob containing the HTML content
    const blob = new Blob([invoiceHTML], { type: 'text/html' });

    // Create a URL for the Blob
    const invoicePageURL = URL.createObjectURL(blob);

    // Open the URL in a new tab
    window.open(invoicePageURL, '_blank');
}
