let swiper = new Swiper(".pricingSwiper", {
  loop: true,
  // Default settings (for mobile devices)
  slidesPerView: 1,
  spaceBetween: 10,

  // Breakpoints
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll(".pricing_examples").forEach((element) => {
  lightGallery(element, {
    selector: "a",
  });
});
