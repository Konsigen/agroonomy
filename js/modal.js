const overlay = document.getElementById("overlay");
const catalogItemButtons = document.querySelectorAll('.catalog__item-button');
const btnClose = document.querySelector('.btn-close');

catalogItemButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    });
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        overlay.style.display = "none";
    }
});

btnClose.addEventListener("click", function() {
    overlay.style.display = "none";
    document.body.style.overflow = "";
});
