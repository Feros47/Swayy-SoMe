document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.querySelectorAll(".postLike");

    likeButton.forEach(function (button) {
        const heartPath = button.querySelector(".heartPath");

        button.addEventListener("click", function (event) {
            button.classList.toggle("liked");
        });
    });

    
});
