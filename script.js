document.addEventListener('DOMContentLoaded', function() {
    const promoCode = document.querySelector('.promo-banner strong');
    promoCode.addEventListener('click', function() {
        alert('Promo code BIG32 has been copied to your clipboard!');
    });
});


// Optional: Add interactivity for buttons or promotional code
document.querySelector('button').addEventListener('click', function() {
    alert('Redirecting to the shop page...');
});
// Optional: Add any interactivity to products or categories
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to Cart');
    });
});
// JavaScript for cart interaction (optional)
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
// Example script for the newsletter form
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
});
