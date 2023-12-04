
const categories = document.querySelectorAll('.category');
const cardHeader = document.querySelector('.card-header');


categories.forEach(category => {
    category.addEventListener('mouseover', () => {
        cardHeader.textContent = category.dataset.category.toUpperCase();
    });
});
