
const searchBtn = document.getElementById('search-btn');
const searchForm = document.querySelector('.search-form');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
});


const cartBtn = document.getElementById('cart-btn');
const cartItemsContainer = document.querySelector('.cart-items-container');

cartBtn.addEventListener('click', () => {
    cartItemsContainer.classList.toggle('active');
});


const menuBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 


    formMessage.textContent = '';
    formMessage.style.color = '';


    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill all fields!';
        formMessage.style.color = 'red';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = 'Please enter a valid email!';
        formMessage.style.color = 'red';
        return;
    }


    formMessage.textContent = 'Message Sent Successfully!';
    formMessage.style.color = 'green';

  
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});
