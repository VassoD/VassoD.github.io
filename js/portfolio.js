/*!
 * Start Bootstrap - Stylish Portfolio v5.0.9 (https://startbootstrap.com/theme/stylish-portfolio)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
 */

!(function (a) {
  "use strict";
  a(".menu-toggle").click(function (e) {
    e.preventDefault(),
      a("#sidebar-wrapper").toggleClass("active"),
      a(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
        "fa-bars fa-times"
      ),
      a(this).toggleClass("active");
  }),
    a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var e = a(this.hash);
        if ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")).length)
          return (
            a("html, body").animate(
              {
                scrollTop: e.offset().top,
              },
              1e3,
              "easeInOutExpo"
            ),
            !1
          );
      }
    }),
    a("#sidebar-wrapper .js-scroll-trigger").click(function () {
      a("#sidebar-wrapper").removeClass("active"),
        a(".menu-toggle").removeClass("active"),
        a(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
          "fa-bars fa-times"
        );
    }),
    a(document).scroll(function () {
      100 < a(this).scrollTop()
        ? a(".scroll-to-top").fadeIn()
        : a(".scroll-to-top").fadeOut();
    });
})(jQuery);
var onMapMouseleaveHandler = function (e) {
    var a = $(this);
    a.on("click", onMapClickHandler),
      a.off("mouseleave", onMapMouseleaveHandler),
      a.find("iframe").css("pointer-events", "none");
  },
  onMapClickHandler = function (e) {
    var a = $(this);
    a.off("click", onMapClickHandler),
      a.find("iframe").css("pointer-events", "auto"),
      a.on("mouseleave", onMapMouseleaveHandler);
  };
$(".map").on("click", onMapClickHandler);

window.onload = function () {
  // Get the height of the window
  const windowHeight = window.innerHeight;
  const particleContainer = document.querySelector(".background");
  particleContainer.style.height = `${windowHeight}px`;
  Particles.init({
    // normal options
    selector: ".background",
    maxParticles: 200,
    connectParticles: true,
    speed: 0.2,
    sizeVariations: 5,
    minDistance: 100,
    color: ["#605565", "#A996B2"],
    responsive: [
      {
        breakpoint: 600,
        options: {
          maxParticles: 200,
          color: ["#605565", "#A996B2"],
          connectParticles: true,
          speed: 0.2,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 100,
          connectParticles: false,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0,

          // disables particles.js
        },
      },
    ],
  });
};

// options for breakpoints

// // const API_KEY = config.SECRET_KEY;

//   const city = 'Paris';

//   const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       if (data.main.temp < 320) {
//         document.querySelector('.snowflakes').style.visibility = 'visible';
//       }
//     });
