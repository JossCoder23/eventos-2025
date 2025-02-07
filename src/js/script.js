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

    let buttonTutor = document.querySelector(".buttonWrapper1");
    let inputTutor = document.querySelectorAll(".firstAparition");

    let buttonTutorMobile = document.querySelector(".buttonWrapperMobile1");
    let inputTutorMobile = document.querySelectorAll(".firstAparitionMobile");

    let buttonAcompa = document.querySelector(".buttonWrapper2");
    let inputAcompa = document.querySelectorAll(".secondAparition");

    buttonTutor.addEventListener("change", (ev) => { 
        if ( ev.currentTarget.checked ) {
            inputTutor.forEach(tutor => {
                tutor.style.display = "flex";
            })
        } else {
            inputTutor.forEach(tutor => {
                tutor.style.display = "none";
                inputAcompa.forEach(acom => {
                    acom.style.display = "none";
                })
            })
            buttonAcompa.checked = false;
        }
    })

    buttonTutorMobile.addEventListener("change", (ev) => { 
        alert("hice click")
        if ( ev.currentTarget.checked ) {
            inputTutorMobile.forEach(tutor => {
                tutor.style.display = "flex";
            })
        } else {
            inputTutorMobile.forEach(tutor => {
                tutor.style.display = "none";
                // inputAcompa.forEach(acom => {
                //     acom.style.display = "none";
                // })
            })
            // buttonAcompa.checked = false;
        }
    })

    buttonAcompa.addEventListener("change", (ev) => { 
        if ( ev.currentTarget.checked ) {
            inputAcompa.forEach(acom => {
                acom.style.display = "flex";
            })
        } else {
            inputAcompa.forEach(acom => {
                acom.style.display = "none";
            })
        }
    })


})