new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    //effect:"flip",
    //effect:"cube",
    effect:"silde",
    slidesPerView:3,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

