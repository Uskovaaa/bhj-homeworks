window.onload = function(){
	let products = document.querySelectorAll('.product');
	let cart = document.querySelector('.cart__products');
	products.forEach(product => {
	 	product.querySelector('.product__quantity-control_inc').onclick = () => {
			let counter = product.querySelector('.product__quantity-value');
      counter.textContent++;
		};
		product.querySelector('.product__quantity-control_dec').onclick = () =>{
			let counter = product.querySelector('.product__quantity-value');
			if(counter.textContent > 1) {
        counter.textContent--;
      }
		};

		product.querySelector('.product__add').onclick = () => {	
            

            let newItem = document.createElement('div');
            newItem.classList.add('cart__product');
            newItem.dataset['id'] = product.dataset['id'];

            let image = document.createElement('img');
            image.classList.add('cart__product-image');
            image.setAttribute('src', product.querySelector('img').src);
            newItem.appendChild(image);
            
            let countDiv = document.createElement('div');
            countDiv.classList.add('cart__product-count');
            countDiv.innerText = product.querySelector('.product__quantity-value').innerText;
            newItem.appendChild(countDiv);
            
            let id = newItem.dataset['id'];
            if (cart.querySelector('div[data-id="'+id+'"]')) {
            	let existItem = cart.querySelector('div[data-id="'+id+'"]');
            	existItem.querySelector('.cart__product-count').innerText =
            		parseInt(existItem.querySelector('.cart__product-count').innerText) +
            		 parseInt(product.querySelector('.product__quantity-value').innerText);
            } else {  
            	document.querySelector('.cart__products').appendChild(newItem);	
        	}
			return false;
		};
	});
};