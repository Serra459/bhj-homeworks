document.addEventListener('DOMContentLoaded', function() {
    const cartProducts = document.querySelector('.cart__products');
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const quantityControls = product.querySelector('.product__quantity-controls');
        const quantityValue = product.querySelector('.product__quantity-value');
        const addButton = product.querySelector('.product__add');
        
        quantityControls.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
            let value = parseInt(quantityValue.textContent);
            quantityValue.textContent = value + 1;
        });
        
        quantityControls.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
            let value = parseInt(quantityValue.textContent);
            if (value > 1) {
                quantityValue.textContent = value - 1;
            }
        });
        
        addButton.addEventListener('click', () => {
            const productId = product.dataset.id;
            const productImage = product.querySelector('.product__image').src;
            const quantity = parseInt(quantityValue.textContent);
            
            const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
            
            if (existingProduct) {
                const countElement = existingProduct.querySelector('.cart__product-count');
                const currentCount = parseInt(countElement.textContent);
                countElement.textContent = currentCount + quantity;
            } else {
                const cartProductHTML = `
                    <div class="cart__product" data-id="${productId}">
                        <img class="cart__product-image" src="${productImage}">
                        <div class="cart__product-count">${quantity}</div>
                    </div>
                `;
                cartProducts.insertAdjacentHTML('beforeend', cartProductHTML);
            }
            
            animateAddToCart(product, cartProducts);
        });
    });
    
    function animateAddToCart(product, cart) {
        const productImage = product.querySelector('.product__image');
        const imageClone = productImage.cloneNode();
        imageClone.classList.add('product-shadow');
        
        const productRect = productImage.getBoundingClientRect();
        const cartRect = cart.getBoundingClientRect();
        
        imageClone.style.position = 'absolute';
        imageClone.style.left = `${productRect.left}px`;
        imageClone.style.top = `${productRect.top}px`;
        imageClone.style.width = `${productRect.width}px`;
        imageClone.style.height = `${productRect.height}px`;
        imageClone.style.transition = 'all 0.5s ease-in-out';
        
        document.body.appendChild(imageClone);
        
        setTimeout(() => {
            imageClone.style.left = `${cartRect.left}px`;
            imageClone.style.top = `${cartRect.top}px`;
            imageClone.style.width = '50px';
            imageClone.style.height = '50px';
            imageClone.style.opacity = '0.5';
        }, 0);
        
        setTimeout(() => {
            imageClone.remove();
        }, 500);
    }
});