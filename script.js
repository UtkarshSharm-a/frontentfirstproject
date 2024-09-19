Shery.imageEffect(".photo .photo2 ",{style: 5, debug:true ,gooey:true})




const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});


var tl=gsap.timeline()
tl.to(".page1",{
    y:"100vh",
    duration:0,
    scale:0.6,
})
tl.to(".page1",{
    y:"30vh",
    duration:1,
    delay:1,
})
tl.to(".page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:1,
})

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


