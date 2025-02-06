window.addEventListener("load", () => {

    var slider = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 3
            }
        }
    });

})