document.addEventListener("DOMContentLoaded", () => {
    // Images
    let expandImg = document.getElementById("mainImage");
    const next = document.getElementById("next");
    const previous = document.getElementById("previous");
    const thumbnailImages = document.querySelectorAll(".thumbnail-img");
    // Add to Cart controls
    const cartAdd = document.getElementById('cart-increase');
    const cartRemove = document.getElementById('cart-decrease');
    let cartNum = document.getElementById('cart-number');
    const addToCart = document.getElementById('add-to-cart-btn');
    let cartBadge = document.getElementById('cart-badge');
    const numOfProductInCart = document.querySelector('.num-in-cart-badge');
    const productPrice = 125.00;
    const totalPrice = document.querySelector('.total-price');
    // Shopping Cart content
    const shoppingCart = document.getElementById('shopping-cart');
    const cartContentContainer = document.querySelector('.cart-content-container');
    const emptyCart = document.querySelector('.empty-cart');
    const cartProduct = document.querySelector('.cart-content-details');
    const deleteIcon = document.querySelector('.delete-icon');

    
    if (!expandImg.src) {
        expandImg.src = "static/images/image-product-1.jpg";
    }

    // Loop through thumbnail images
    thumbnailImages.forEach((img) => {
        img.addEventListener("click", () => {
            // set the main product image.src to the current image.src
            expandImg.src = img.src;
            // Remove the active class from previous image and active class to the current image
            let current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace(" active", "");
            img.classList.add('active');
        });
    });

    // Set Event listener for the next button to view next product image
    next.addEventListener("click", () => {
        currentImg = expandImg.src;
        let i = 0;
        while (i < thumbnailImages.length - 1) {
            if (currentImg === thumbnailImages[i].src) {
                expandImg.src = thumbnailImages[i + 1].src;
            }
            i++;
        }
    });

    // Set Event listener for the previous button to view previous product image
    previous.addEventListener("click", () => {
        currentImg = expandImg.src;
        let i = thumbnailImages.length - 1;
        while (i > 0) {
            if (currentImg === thumbnailImages[i].src) {
                expandImg.src = thumbnailImages[i - 1].src;
            }
            i--;
        }
    });

    // Increase number of items to add to cart
    cartAdd.addEventListener('click', () => {
        if(parseInt(cartNum.textContent) < 20) {
            cartNum.textContent =  parseInt(cartNum.textContent) + 1
        }
    })

    // decrease number of items to add to cart
    cartRemove.addEventListener('click', () => {
        if (parseInt(cartNum.textContent) > 0) {
            cartNum.textContent =  parseInt(cartNum.textContent) - 1
        }
    })

    // remove cart badge if cart is empty
    if (parseInt(cartNum.textContent) === 0) {
        cartBadge.style.display = "none"
    }

    // add items to cart
    addToCart.addEventListener('click', () => {
        if (parseInt(cartNum.textContent) > 0){
            cartBadge.style.display = "block"
            cartBadge.textContent = parseInt(cartBadge.textContent) + parseInt(cartNum.textContent);
            numOfProductInCart.textContent = cartBadge.textContent;
            totalPrice.textContent = ` $${(parseFloat(productPrice) * parseFloat(numOfProductInCart.textContent)).toFixed(2)}`;
        }
        cartNum.textContent = 0;
    })
    
    const toggleActiveCartContainer = () => {
        cartContentContainer.classList.toggle('active-cart');
    }

    const toggleActiveEmptyCart = () => {
        emptyCart.classList.toggle('active-cart');
    }

    const toggleActiveInCartProduct = () => {
        cartProduct.classList.toggle('active-cart')
    }

    shoppingCart.addEventListener('click', () => {
        toggleActiveCartContainer()

        if (parseInt(cartBadge.textContent) > 0 ) {
            toggleActiveInCartProduct()
        } else {
            toggleActiveEmptyCart()
        }
    })

    deleteIcon.addEventListener('click', () => {
        cartBadge.textContent = 0;
        cartBadge.style.display = "none"
        toggleActiveInCartProduct()
        toggleActiveEmptyCart()
    })


});
