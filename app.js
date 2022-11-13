let cart = document.querySelector('.cart-items-container');

document.querySelector('#carrito').onclick = () =>{
    cart.classList.add('active');
}

document.querySelector('#cruz').onclick = () =>{
    cart.classList.remove('active');
}