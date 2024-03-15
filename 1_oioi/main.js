var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    speed : 800,
    mousewheel: true,
    direction: "vertical",
    loop: true,
  });

 /*  var swiper = new Swiper(".swiper", {
    direction: "vertical",
    slidesPerView: 1,
    speed : 800,
    mousewheel: true,
    loop : true,
  //   on: {
  //     reachEnd: function () {
  //     swiper.mousewheel.disable();
  //   }
  // }
  }); */



  document.getElementById('videoPlay').play();
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        // autoplay: {
        //     delay: 7000,
        // },
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });