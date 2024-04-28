document.addEventListener("DOMContentLoaded", function() {
    const likeButtons = document.querySelectorAll('.catalog__item-likeButton');

    likeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const heartIcon = button.querySelector('.heart-icon');
            const pathElement = heartIcon.querySelector('path');

            const isActive = heartIcon.classList.contains('active');

            heartIcon.classList.toggle('active');
            if (isActive) {
                pathElement.setAttribute('fill', 'white');
                pathElement.setAttribute('stroke', 'black');
                pathElement.setAttribute('stroke-width', '2');
            } else {
                pathElement.removeAttribute('fill');
                pathElement.removeAttribute('stroke');
                pathElement.removeAttribute('stroke-width');
            }
        });
    });
});



