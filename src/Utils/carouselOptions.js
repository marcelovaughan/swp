export const carouselOptions = { 
    focusAt: "center",
    type: "slide",
    startAt: 0,  
    perView: 3,
    peek: 50,
    gap: 30,
    autoplay: false,
    hoverpause: !1,
    animationDuration: 2e3,
    rewindDuration: 2e3,
    perTouch: 0,
    breakpoints: {
        480: {
            gap: 5,
            peek: 20,
            perView: 1
        },
        768: {
            perView: 2
        },
        1360: {
            perView: 3
        },
        1600: {
            perView: 4
        },
        1960: {
            perView: 3
        }
    }
  };