//Header
document.addEventListener("DOMContentLoaded", function () {
  const openIcon = document.getElementById("openIcon");
  const closeIcon = document.getElementById("closeIcon");
  const menu = document.getElementById("menu");

  closeIcon.style.display = "none";
  openIcon.addEventListener("click", function () {
    menu.classList.remove("hidden");
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    menu.classList.add("hidden");
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
  });
});

// Scroll to Top Functionality
document.addEventListener("DOMContentLoaded", function () {
  const scrollUp = document.querySelector(".scroll-btn");

  if (!scrollUp) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollUp.classList.remove("hidden");
      scrollUp.classList.add("flex");
    } else {
      scrollUp.classList.add("hidden");
      scrollUp.classList.remove("flex");
    }
  });

  scrollUp.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Screenshots Section
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".screenshots", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: ".fa-arrow-right",
      prevEl: ".fa-arrow-left",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

//Banner Section
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".banner", {
    loop: true,
    spaceBetween: 35,
    slidesPerView: 1,
    centeredSlides: false,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".fa-arrow-right",
      prevEl: ".fa-arrow-left",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});

// Testimonials Section
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".testimonial", {
    loop: true,
    spaceBetween: 35,
    slidesPerView: 1,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".fa-arrow-right",
      prevEl: ".fa-arrow-left",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
