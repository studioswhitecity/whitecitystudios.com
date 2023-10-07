window.onload = (event) => {
  // ICON CONTENT BLOCK
  document
    .querySelectorAll(".icon-content-block .content-block")
    .forEach(function (block) {
      block.addEventListener("mouseenter", function () {
        let selected = document.querySelector(".selected");
        if (selected) {
          selected.classList.remove("selected");
          selected.classList.add("icon-content-block", "content-block");
        }
        block.classList.add("selected");
        // block.classList.remove("icon-content-block", "content-block");
      });
    });

  // For the swiper-slide background image
  let pageSections = document.querySelectorAll(".swiper-slide");
  pageSections.forEach(function (section) {
    if (section.getAttribute("data-background")) {
      section.style.backgroundImage =
        "url(" + section.getAttribute("data-background") + ")";
    }
  });

  // For the tree menu
  let treeMenuIcons = document.querySelectorAll(
    ".site-navigation .inner ul li i"
  );
  treeMenuIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      let childUl = icon.parentElement.querySelector(
        ".site-navigation .inner ul li ul"
      );
      if (childUl.style.display === "none" || !childUl.style.display) {
        childUl.style.display = "block";
      } else {
        childUl.style.display = "none";
      }
      return true;
    });
  });

  // For the hamburger menu
  let hamburgers = document.querySelectorAll(".hamburger");
  hamburgers.forEach(function (hamburger) {
    hamburger.addEventListener("click", function (e) {
      let siteNavigation = document.querySelector(".site-navigation");
      if (siteNavigation.classList.contains("active")) {
        document.body.classList.toggle("overflow");
        siteNavigation.classList.remove("active");
        siteNavigation.style.transitionDelay = "0.5s";
        let siteNavigationLayer = siteNavigation.querySelector(".layer");
        if (siteNavigationLayer) {
          siteNavigationLayer.style.transitionDelay = "0.3s";
        }
        let siteNavigationInner = siteNavigation.querySelector(".inner");
        if (siteNavigationInner) {
          siteNavigationInner.style.transitionDelay = "0s";
        }
      } else {
        siteNavigation.classList.add("active");
        document.body.classList.toggle("overflow");
        siteNavigation.style.transitionDelay = "0s";
        let siteNavigationLayer = siteNavigation.querySelector(".layer");
        if (siteNavigationLayer) {
          siteNavigationLayer.style.transitionDelay = "0.2s";
        }
        let siteNavigationInner = siteNavigation.querySelector(".inner");
        if (siteNavigationInner) {
          siteNavigationInner.style.transitionDelay = "0.7s";
        }
      }
      hamburger.classList.toggle("is-opened-navi");
    });
  });

  // FOLLOW US
  document.querySelector(".follow-us").addEventListener("click", function (e) {
    let socialMedia = document.querySelector(".social-media");
    if (socialMedia.classList.contains("active")) {
      document.body.classList.toggle("overflow");
      socialMedia.classList.remove("active");
      socialMedia.style.transitionDelay = "0.5s";
      let socialMediaLayer = socialMedia.querySelector(".layer");
      if (socialMediaLayer) {
        socialMediaLayer.style.transitionDelay = "0.3s";
      }
      let socialMediaInner = socialMedia.querySelector(".inner");
      if (socialMediaInner) {
        socialMediaInner.style.transitionDelay = "0s";
      }
    } else {
      socialMedia.classList.add("active");
      document.body.classList.toggle("overflow");
      socialMedia.style.transitionDelay = "0s";
      let socialMediaLayer = socialMedia.querySelector(".layer");
      if (socialMediaLayer) {
        socialMediaLayer.style.transitionDelay = "0.2s";
      }
      let socialMediaInner = socialMedia.querySelector(".inner");
      if (socialMediaInner) {
        socialMediaInner.style.transitionDelay = "0.7s";
      }
    }
  });

  // ALL CASES
  // document
  //   .querySelector(".all-cases-link b")
  //   .addEventListener("click", function (e) {
  //     let allCases = document.querySelector(".all-cases");
  //     if (allCases.classList.contains("active")) {
  //       document.body.classList.toggle("overflow");
  //       allCases.classList.remove("active");
  //       allCases.style.transitionDelay = "0.5s";
  //       let allCasesLayer = allCases.querySelector(".layer");
  //       if (allCasesLayer) {
  //         allCasesLayer.style.transitionDelay = "0.3s";
  //       }
  //       let allCasesInner = allCases.querySelector(".inner");
  //       if (allCasesInner) {
  //         allCasesInner.style.transitionDelay = "0s";
  //       }
  //     } else {
  //       allCases.classList.add("active");
  //       document.body.classList.toggle("overflow");
  //       allCases.style.transitionDelay = "0s";
  //       let allCasesLayer = allCases.querySelector(".layer");
  //       if (allCasesLayer) {
  //         allCasesLayer.style.transitionDelay = "0.2s";
  //       }
  //       let allCasesInner = allCases.querySelector(".inner");
  //       if (allCasesInner) {
  //         allCasesInner.style.transitionDelay = "0.7s";
  //       }
  //     }
  //   });

  // CONTACT FORM INPUT LABEL
  function checkForInput(element) {
    let label = element.nextElementSibling;
    if (element.value.length > 0) {
      label.classList.add("label-up");
    } else {
      label.classList.remove("label-up");
    }
  }

  // The lines below are executed on page load
  let inputsAndTextareas = document.querySelectorAll("input, textarea");
  inputsAndTextareas.forEach(function (element) {
    checkForInput(element);
  });

  // The lines below (inside) are executed on change & keyup
  inputsAndTextareas.forEach(function (element) {
    element.addEventListener("change", function () {
      checkForInput(element);
    });
    element.addEventListener("keyup", function () {
      checkForInput(element);
    });
  });

  // FOOTER HEIGHT CALCULATION
  document.body.style.marginBottom =
    document.querySelector(".footer").offsetHeight + "px";

  // EQUALIZER TOGGLE
  let source = "audio/audio.mp3";
  let audio = new Audio(source);
  audio.loop = true;
  audio.volume = 0.3;

  let equalizer = document.querySelector(".equalizer");

  // Check if "playing" key is in localStorage, if not, set default to true
  let playing;
  if (localStorage.getItem("playing") === null) {
    playing = true;
    localStorage.setItem("playing", playing); // Initialize in localStorage
  } else {
    playing = localStorage.getItem("playing") === "true";
  }

  // Set initial state of audio based on stored state
  if (playing) {
    audio.autoplay = true;
    equalizer.classList.remove("paused");
  } else {
    audio.autoplay = false;
    equalizer.classList.add("paused");
  }

  equalizer.addEventListener("click", function () {
    if (!playing) {
      audio.play();
      playing = true;
    } else {
      audio.pause();
      playing = false;
    }
    localStorage.setItem("playing", playing); // Store state in localStorage
  });

  // EQUALIZER
  function randomBetween(range) {
    var min = range[0],
      max = range[1];
    if (min < 0) {
      return min + Math.random() * (Math.abs(min) + max);
    } else {
      return min + Math.random() * max;
    }
  }

  function equalizerAnimation(element, speed, barsHeight) {
    setInterval(function () {
      let spans = element.querySelectorAll("span");
      spans.forEach(function (span, i) {
        span.style.height = randomBetween(barsHeight[i]) + "px";
      });
    }, speed);

    element.addEventListener("click", function () {
      element.classList.toggle("paused");
    });
  }

  var barsHeight = [
    [2, 13],
    [5, 22],
    [17, 8],
    [4, 18],
    [11, 3],
  ];
  var equalizerElement = document.querySelector(".equalizer");
  equalizerAnimation(equalizerElement, 180, barsHeight);

  // // EQUALIZER TOGGLE
  // let source = "audio/audio.mp3";
  // let audio = new Audio(source);
  // audio.autoplay = true;
  // audio.loop = true;
  // audio.volume = 0.3;

  // let equalizer = document.querySelector(".equalizer");
  // let playing = true;
  // equalizer.addEventListener("click", function () {
  //   if (!playing) {
  //     audio.play();
  //     playing = true;
  //   } else {
  //     audio.pause();
  //     playing = false;
  //   }
  // });

  // // EQUALIZER
  // function randomBetween(range) {
  //   var min = range[0],
  //     max = range[1];
  //   if (min < 0) {
  //     return min + Math.random() * (Math.abs(min) + max);
  //   } else {
  //     return min + Math.random() * max;
  //   }
  // }

  // function equalizerAnimation(element, speed, barsHeight) {
  //   setInterval(function () {
  //     let spans = element.querySelectorAll("span");
  //     spans.forEach(function (span, i) {
  //       span.style.height = randomBetween(barsHeight[i]) + "px";
  //     });
  //   }, speed);

  //   element.addEventListener("click", function () {
  //     element.classList.toggle("paused");
  //   });
  // }

  // var barsHeight = [
  //   [2, 13],
  //   [5, 22],
  //   [17, 8],
  //   [4, 18],
  //   [11, 3],
  // ];
  // var equalizerElement = document.querySelector(".equalizer");
  // equalizerAnimation(equalizerElement, 180, barsHeight);

  // PAGE TRANSITION
  document.querySelectorAll("body a").forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      if (
        !anchor.hasAttribute("data-noredirect") &&
        (!anchor.hasAttribute("data-fancybox") || anchor.target === "_blank")
      ) {
        e.preventDefault();
        var url = anchor.getAttribute("href");
        if (url.includes("#")) {
          var hash = url.substring(url.indexOf("#"));
          if (document.querySelector("body " + hash)) {
            document
              .querySelector(".page-transition")
              .classList.remove("active");
            document.querySelector(".hamburger").classList.toggle("open");
            document.body.classList.toggle("overflow");
            document
              .querySelector(".navigation-menu")
              .classList.remove("active");
            document.querySelector(
              ".navigation-menu .inner ul"
            ).style.transitionDelay = "0s";
            document.querySelector(
              ".navigation-menu .inner blockquote"
            ).style.transitionDelay = "0s";
            document.querySelector(
              ".navigation-menu .bg-layers span"
            ).style.transitionDelay = "0.3s";

            window.scrollTo({
              top: document.querySelector(hash).offsetTop,
              behavior: "smooth",
            });
          }
        } else {
          document.querySelector(".page-transition").classList.toggle("active");
          setTimeout(function () {
            window.location = url;
          }, 1000);
        }
      }
    });
  });

  // SLIDER
  // Assuming you have the Swiper library loaded, the Swiper-related code remains mostly unchanged.
  var mainslider = new Swiper(".gallery-top", {
    spaceBetween: 0,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    loop: true,
    loopedSlides: 3,
    thumbs: {
      swiper: sliderthumbs,
    },
  });

  // SLIDER THUMBS
  var sliderthumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 3,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 3,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });

  // TESTIMONIALS
  // Assuming you have the Swiper library loaded, the Swiper-related code remains mostly unchanged.
  var testimonialsSlider = new Swiper(".testimonials-slider", {
    slidesPerView: "1",
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // COUNTER
  document.addEventListener("scroll", function () {
    var odometers = document.querySelectorAll(".odometer");
    odometers.forEach(function (odometer) {
      var parentSection = odometer.closest("section");
      var parentSectionTop =
        parentSection.getBoundingClientRect().top + window.pageYOffset;
      if (window.scrollY > parentSectionTop - 300) {
        if (odometer.getAttribute("data-status") === "yes") {
          odometer.innerHTML = odometer.getAttribute("data-count");
          odometer.setAttribute("data-status", "no");
        }
      }
    });
  });

  // WOW ANIMATION
  // Assuming you have the WOW library loaded, the WOW-related code remains mostly unchanged.
  var wow = new WOW({
    animateClass: "animated",
    offset: 50,
  });
  wow.init();
  // SPLITTING
  // Splitting();

  document.body.classList.add("page-loaded");
};

function linkClickNone(e) {
  e.preventDefault();
}
