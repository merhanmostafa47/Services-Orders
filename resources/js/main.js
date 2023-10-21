/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

    $(document).ready(function () {
        $(".scrolltop-btn").click(function () {
          $("html").animate({
            "scrollTop": "0"
          }, 0);
        });
      
        if ($(document).width() > 992) {
          $(".account-collapse").on("mouseenter", function () {
            $("#account-collapse").slideDown(250);
          });
          $(".account-collapse").on("mouseleave", function () {
            $("#account-collapse").slideUp(250);
          });
        } else {
          $(".account-collapse").on("click", function () {
            $("#account-collapse").slideToggle(250);
          });
          $(".account-collapse").on("mouseleave", function () {
            $("#account-collapse").slideUp(250);
          });
        }
      
        $(document).scroll(function () {
          if ($(document).scrollTop() > 0) {
            $('.navbar-brand img').addClass("small-logo");
            $('.p-navbar').css("height", "60px");
            $('.main-menu').css("margin-left", "10px");
            $('.p-navbar a').css('font-size', '17px');
          } else {
            $('.navbar-brand img').removeClass("small-logo");
            $('.p-navbar').css("height", "70px");
            $('.main-menu').css("margin-left", "30px");
            $('.p-navbar a').css('font-size', '18px');
          }
      
          if ($(this).scrollTop() >= 70) {
            $(".p-navbar").addClass("border-fixed");
          } else {
            $(".p-navbar").removeClass("border-fixed");
          }
      
          if ($(this).scrollTop() > 600) {
            $(".scrolltop-btn").fadeIn(500);
          } else {
            $(".scrolltop-btn").fadeOut(500);
          }
        });
        $(".navbar-toggler-btn").click(function () {
          $("#navbarNav").slideToggle(300);
        });
      });
      
      function slider_lazyLoading(image, observer) {
      
          if($(image).parent(".slider-img").parent(".slick-active")){
              console.log(image);
              console.log("here 1");
              let window_width = $(window).width();
              if( image.dataset.tablet && window_width <= 992 && window_width > 550 ) {
                  image.src = image.dataset.tablet;
              }
              else if( image.dataset.mobile && window_width <= 550) {
                  image.src = image.dataset.mobile;
              }
              else{
                  image.src = image.dataset.src;
              }
          }
      
          $(image).removeClass("lazy");
          observer.unobserve(image);
      }
      
      function lazyLoading() {
        var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
      
        if ("IntersectionObserver" in window) {
          var lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                  if (entry.isIntersecting) {
                      var lazyImage = entry.target;
                      console.log(lazyImage);
                      if($(lazyImage).parents(".slick-carousel")){
                          slider_lazyLoading(lazyImage, lazyImageObserver);
                      }
                      else{
                          console.log("here 2");
                          let window_width = $(window).width();
                  
                          if( lazyImage.dataset.tablet && window_width <= 992 && window_width > 550 ) {
                              lazyImage.src = lazyImage.dataset.tablet;
                          }
                          else if( lazyImage.dataset.mobile && window_width <= 550) {
                              lazyImage.src = lazyImage.dataset.mobile;
                          }
                          else{
                              lazyImage.src = lazyImage.dataset.src;
                          }
              
                          lazyImage.classList.remove("lazy");
                          lazyImageObserver.unobserve(lazyImage);
                      }			
                  }
                });
          });
      
          lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
          });
        }
      }
      
      document.addEventListener("DOMContentLoaded", function () {
          lazyLoading();
      });
      
      /***/ }),
      
      /***/ "./resources/sass/app.scss":
      /*!*********************************!*\
        !*** ./resources/sass/app.scss ***!
        \*********************************/
      /*! no static exports found */
      /***/ (function(module, exports) {
      
      // removed by extract-text-webpack-plugin
      
      /***/ }),
      
      /***/ 0:
      /*!**************************************************************!*\
        !*** multi ./resources/js/main.js ./resources/sass/app.scss ***!
        \**************************************************************/
      /*! no static exports found */
      /***/ (function(module, exports, __webpack_require__) {
      
      __webpack_require__(/*! C:\xampp\htdocs\photorelive\resources\js\main.js */"./resources/js/main.js");
      module.exports = __webpack_require__(/*! C:\xampp\htdocs\photorelive\resources\sass\app.scss */"./resources/sass/app.scss");
      
      
      /***/ })
      
      /******/ });