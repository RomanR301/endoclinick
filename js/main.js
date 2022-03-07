"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Scroll to the top before the page loads
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }
var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property'); //alert("!");
  }, duration);
};

var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

window.onload = function () {
  // Validate form
  $(".form").validate({
    errorClass: 'invalid',
    errorPlacement: function errorPlacement(error, element) {},
    rules: {
      user_name: {
        required: true
      },
      user_email: {
        required: true,
        email: true
      },
      user_phone: {
        required: true
      },
      user_datebirth: {
        required: true
      },
      dentist_name: {
        required: true
      },
      dentist_address: {
        required: true
      },
      dentist_email: {
        required: true,
        email: true
      },
      dentist_phone: {
        required: true
      },
      dentist_gdc: {
        required: true
      }
    },
    submitHandler: function submitHandler() {
      var boxes = $('.tooth__checkbox');

      if (boxes.length > 0) {
        if ($('.tooth__checkbox:checked').length < 1) {
          boxes.parents('.tooth__item').addClass('invalid');
          boxes[0].focus();
          return false;
        }
      }

      form.submit();
    }
  }); // Variabels

  var burger = document.querySelector(".burger");
  var header = document.querySelector(".header");
  var technologyCard = document.querySelectorAll('.technology-card'); // let technologyCardBody = document.querySelectorAll('.technology-card__body')
  // let tabContent = document.querySelectorAll(".tabs__item");
  // let tabItem = document.querySelectorAll(".tabs__trigger");
  // let tabDropdownTrigger = document.querySelector(".treatments .dropdown__trigger .dropdown__trigger-text");

  var treatments = document.querySelector('.treatments');
  var treatmentsSidebar = document.querySelector(".treatments-sidebar");
  var treatmentsDropdownTrigger = document.querySelector(".treatments .dropdown__trigger");
  var treatmentsDropdownItem = document.querySelector(".treatments .dropdown__item");
  var treatmentsSidebarLink = document.querySelectorAll(".treatments-sidebar a"); // Spyscroll

  if (treatmentsSidebar) {
    var scrollspy = function scrollspy() {
      scrollspys.forEach(function (current) {
        var _ = current;
        var currentElementOffset = _.offsetTop - 150;
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentElementOffset <= scrollPosition + linksHeight) {
          allLinks.forEach(function (currentLink) {
            currentLink.parentElement.classList.remove("js-current");
            currentLink.parentElement.removeAttribute("class");
          });
          var currentID = current.getAttribute("id");
          document.querySelector("a[href=\"#".concat(currentID, "\"]")).parentElement.classList.add("js-current");
          treatmentsDropdownTrigger.firstChild.textContent = document.querySelector(".treatments-sidebar li.js-current a").textContent;
        }
      });
    };

    var _clickHandler = function _clickHandler(e) {
      e.preventDefault();
      var href = this.getAttribute("href");
      var offsetTop = document.querySelector(href).offsetTop + 200;
      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    };

    var scrollspys = document.querySelectorAll(".treatments-content__item");
    var links = document.querySelector(".treatments-sidebar a");
    var linksHeight = links.offsetHeight;
    var allLinks = document.querySelectorAll(".treatments-sidebar a");
    window.addEventListener("scroll", function () {
      scrollspy();
    });

    var _iterator = _createForOfIteratorHelper(linksScroll),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var link = _step.value;
        link.addEventListener("click", _clickHandler);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    null;
  } // Manipulations with header classes on scroll


  var scrollChange = 1;
  window.addEventListener("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.classList.add("js-scroll-down");
      header.classList.remove("js-scroll-top");
    } else {
      header.classList.add("js-scroll-top");
      header.classList.remove("js-scroll-down", "js-nav-open", "js-nav-close");
    }
  }); // // Tabs
  // for (let i = 0; i < tabItem.length; i++) {
  //   tabItem[i].addEventListener("click", () => {
  //     tabContent.forEach((item) => {
  //       item.classList.remove("js-active");
  //     });
  //     tabItem.forEach((item) => {
  //       item.classList.remove("js-active");
  //     });
  //     tabContent[i].classList.add("js-active");
  //     tabItem[i].classList.add("js-active");
  //     tabDropdownTrigger.textContent = document.querySelector(".tabs__trigger.js-active").textContent
  //   });
  // }
  // if (tabDropdownTrigger) {
  //   tabDropdownTrigger.textContent = document.querySelector(".tabs__trigger.js-active").textContent
  // }
  // Custom scrollbar in tooth table

  OverlayScrollbars(document.querySelectorAll(".tooth"), {}); // Files input
  // let filesTrigger = document.getElementById('file');

  var filesTable = document.querySelector('.files__table'); // let updateFilesList = () => {
  //   let children = "";
  //   for (let i = 0; i < filesTrigger.files.length; ++i) {
  //     children +=  '<div class="files__wrapper">' + '<div class="files-item">' + '<i class="icon-file"></i>' + '<span class="files-item__name">' + filesTrigger.files.item(i).name + '</span/>' + '<i class="files-item__remove icon-trash-can" onclick="return this.parentNode.parentNode.remove();"></i>' + '</div>' + '</div>'
  //   }
  //   filesTable.innerHTML = children;
  //   if (children.length >= 0) {
  //     filesTable.style.display = 'flex'
  //   } else {
  //     filesTable.style.display = 'none'
  //   }
  // }
  // if (filesTrigger) {
  //   filesTrigger.addEventListener("change", () => {
  //     updateFilesList()
  //   })
  // }

  var dt = new DataTransfer();
  $("#file").on('change', function (e) {
    for (var i = 0; i < this.files.length; i++) {
      var fileBloc = $('<div/>', {
        class: 'files__wrapper'
      }),
          fileName = $('<files-item/>', {
        class: 'name',
        text: this.files.item(i).name
      });
      fileBloc.append("<div class=\"files-item\"><i class=\"icon-file\"></i><span class=\"files-item__name\">".concat(this.files.item(i).name, "</span><i class=\"files-item__remove icon-trash-can\"></i><div><div>"));
      $(".files__table").append(fileBloc);
    }

    ;

    var _iterator2 = _createForOfIteratorHelper(this.files),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var file = _step2.value;
        dt.items.add(file);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    this.files = dt.files;

    if (this.files.length >= 0) {
      filesTable.style.display = 'flex';
    } else {
      filesTable.style.display = 'none';
    }

    $('.files-item__remove').click(function () {
      var name = $(this).parent().find('.files-item__name').text();
      $(this).parents('.files__wrapper').remove();

      for (var _i = 0; _i < dt.items.length; _i++) {
        if (name === dt.items[_i].getAsFile().name) {
          dt.items.remove(_i);
          continue;
        }
      }

      document.getElementById('file').files = dt.files;
    });
  }); // Media 992 =====>

  if (window.matchMedia("(min-width: 992px)").matches) {
    // Opening desktop menu with burger
    burger.addEventListener("click", function () {
      if (header.classList.contains("js-nav-open")) {
        header.classList.remove("js-nav-open");
        header.classList.add("js-nav-close");
      } else {
        header.classList.add("js-nav-open");
        header.classList.remove("js-nav-close");
      }
    }); // Opening technology accordion

    $('.technology__wrapper').click(function () {
      $(".technology__wrapper").not($(this).closest(".technology__wrapper")).removeClass("js-active");
      $(this).closest(".technology__wrapper").addClass("js-active");

      if ($(this).hasClass('js-active')) {
        $('.technology-card__body').not($(this).find('.technology-card__body')).slideUp(300);
        $(this).find('.technology-card__body').slideDown(300);
      }
    }); // for (let i = 0; i < technologyCard.length; i++) {
    //   technologyCard[i].addEventListener("click", () => {
    //     technologyCard.forEach((element) => {
    //       element.classList.remove("js-active");
    //     });
    //     // technologyCardBody.forEach((element) => {
    //     //   slideUp(element)
    //     // });
    //     technologyCard[i].classList.add('js-active');
    //     // Add class to the element that was clicked
    //     slideDown(technologyCardBody[i], 300)
    //   });
    // }

    var horizontalScroll = document.querySelector('.horizontal-scroll');

    if (horizontalScroll) {
      // Horizontal scroll in Treatments =====>
      gsap.registerPlugin(ScrollTrigger);
      var sections = gsap.utils.toArray(".horizontal-scroll");
      var maxWidth = 0;

      var getMaxWidth = function getMaxWidth() {
        maxWidth = 0;
        sections.forEach(function (section) {
          maxWidth += section.offsetWidth;
        });
      };

      getMaxWidth();
      ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
      var triggerItem = document.querySelector('.treatments');
      gsap.to(sections, {
        x: function x() {
          return "-".concat(maxWidth - window.innerWidth);
        },
        ease: "none",
        scrollTrigger: {
          start: "-120px top",
          trigger: triggerItem,
          pin: true,
          scrub: true,
          end: function end() {
            return "+=".concat(maxWidth);
          },
          invalidateOnRefresh: true
        }
      });
      sections.forEach(function (sct, i) {
        ScrollTrigger.create({
          trigger: sct,
          start: function start() {
            return 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth));
          },
          end: function end() {
            return '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth));
          },
          toggleClass: {
            targets: sct,
            className: "active"
          }
        });
      });
    }
  } else {
    (function () {
      // Toggle visible elements
      var showTrigger = document.querySelectorAll(".show__trigger");
      var showItem = document.querySelectorAll(".show__item");

      var _loop = function _loop(i) {
        showTrigger[i].addEventListener("click", function () {
          showTrigger[i].classList.toggle('js-active');

          if (showTrigger[i].classList.contains("js-active")) {
            showTrigger[i].textContent = 'See less';
            showItem.forEach(function (element) {
              element.style.display = "block";
            });
          } else {
            showTrigger[i].textContent = 'See all';
            showItem.forEach(function (element) {
              element.style.display = "none";
            });
          }
        });
      };

      for (var i = 0; i < showTrigger.length; i++) {
        _loop(i);
      }

      if (treatmentsSidebar) {
        var _clickHandler2 = function _clickHandler2(e) {
          e.preventDefault();
          var href = this.getAttribute("href");
          var offsetTop = document.querySelector(href).offsetTop - 150;
          scroll({
            top: offsetTop,
            behavior: "smooth"
          });
        };

        var _iterator3 = _createForOfIteratorHelper(linksScroll),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _link = _step3.value;

            _link.addEventListener("click", _clickHandler2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } // Treatments page tabs navigation
      // let treatmentsDropdown = document.querySelector(".treatments .dropdown");
      // let treatmentsDropdownList = document.querySelector(".treatments .dropdown__list");
      // if (treatmentsDropdown && treatmentsDropdownList) {
      //   let offsetItem = document.querySelector('.dropdown__list').offsetHeight
      //   document.documentElement.style.setProperty("--treatments-dropdown-offset", offsetItem + "px")
      //   window.addEventListener("scroll", () => {
      //     if (window.scrollY > offsetItem + 64 ) {
      //       treatmentsDropdown.classList.add("js-scroll-down");
      //       treatmentsDropdownList.style.display = 'none'
      //       document.querySelector('.treatments').classList.add("offset-top")
      //     } else {
      //       treatmentsDropdown.classList.remove("js-scroll-down");
      //       treatmentsDropdownList.style.display = 'block'
      //       document.querySelector('.treatments').classList.remove("offset-top")
      //     }
      //   });
      //   treatmentsDropdown.addEventListener('click', () => {
      //     if (treatmentsDropdown.classList.contains("js-scroll-down")) {
      //       slideToggle(treatmentsDropdownList, 300);
      //     } else {
      //       null
      //     }
      //   });
      // }


      if (treatmentsDropdownTrigger && treatmentsDropdownItem) {
        var offsetItem = treatmentsDropdownItem.offsetHeight;
        document.documentElement.style.setProperty("--treatments-dropdown-offset", offsetItem + "px");
        window.addEventListener("scroll", function () {
          if (window.scrollY > offsetItem + 64) {
            treatmentsSidebar.classList.add("js-scroll-down");
            treatments.classList.add("offset-top");
            treatmentsDropdownItem.style.display = "none";

            if (treatmentsSidebar.classList.contains("js-scroll-down")) {
              var _loop2 = function _loop2(_i2) {
                treatmentsSidebarLink[_i2].addEventListener("click", function () {
                  treatmentsSidebarLink.forEach(function (element) {
                    element.parentElement.classList.remove("js-current");
                    element.parentElement.removeAttribute("class");
                  });

                  treatmentsSidebarLink[_i2].parentElement.classList.add("js-current");

                  treatmentsDropdownTrigger.firstChild.textContent = treatmentsSidebarLink[_i2].textContent;
                });
              };

              for (var _i2 = 0; _i2 < treatmentsSidebarLink.length; _i2++) {
                _loop2(_i2);
              }
            }
          } else {
            treatmentsSidebar.classList.remove("js-scroll-down");
            treatmentsDropdownItem.style.display = "block";
            treatments.classList.remove("offset-top");
          }
        });
        treatmentsSidebar.addEventListener("click", function () {
          treatmentsDropdownTrigger.classList.toggle("js-active");
          slideToggle(treatmentsDropdownItem, 300);
        });
        treatmentsDropdownTrigger.firstChild.textContent = document.querySelector(".treatments-sidebar li.js-current a").textContent;
      } // Opening mobile menu with burger


      burger.addEventListener("click", function () {
        header.classList.toggle("js-nav-open");
        document.body.classList.toggle("js-lock");
      }); // Opening technology accordions !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // $('.technology__wrapper .technology-card').not($('.technology__wrapper.secondary .technology-card')).removeClass('js-active')

      var _loop3 = function _loop3(_i3) {
        technologyCard[_i3].addEventListener("click", function () {
          // Remove class from all elements
          technologyCard.forEach(function (element) {
            element.classList.remove("js-active");
          }); // Add class to the element that was clicked

          technologyCard[_i3].classList.add("js-active");
        });
      };

      for (var _i3 = 0; _i3 < technologyCard.length; _i3++) {
        _loop3(_i3);
      } // Block slider 'Treatments'


      var sliderTreatments = new Swiper('.treatments-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".treatments-button-next",
          prevEl: ".treatments-button-prev"
        },
        pagination: {
          el: ".treatments-pagination"
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          }
        }
      });
    })();
  } // Block slider 'Practices'


  var sliderPractices = new Swiper('.practices-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".practices-button-next",
      prevEl: ".practices-button-prev"
    },
    pagination: {
      el: ".practices-pagination"
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  }); // Block slider 'Testimonials'

  var sliderTestimonials = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".testimonials-button-next",
      prevEl: ".testimonials-button-prev"
    },
    pagination: {
      el: ".testimonials-pagination"
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 'auto',
        centeredSlides: true
      }
    }
  }); // Block slider 'Cases'

  var sliderCases = new Swiper('.cases-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".cases-button-next",
      prevEl: ".cases-button-prev"
    },
    pagination: {
      el: ".cases-pagination"
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  }); // Block slider 'Socials'

  var sliderSocials = new Swiper('.socials__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".socials-button-next",
      prevEl: ".socials-button-prev"
    },
    pagination: {
      el: ".socials-pagination"
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 5
      }
    }
  });
}; // Scroll to anchor


var linksScroll = document.querySelectorAll(".scroll__link");

var _iterator4 = _createForOfIteratorHelper(linksScroll),
    _step4;

try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var link = _step4.value;
    link.addEventListener("click", clickHandler);
  }
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}

function clickHandler(e) {
  e.preventDefault();
  var href = this.getAttribute("href");
  var offsetTop = document.querySelector(href).offsetTop - 150;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
// Auto size textarea =====>
var textarea = document.querySelector('textarea');

if (textarea) {
  textarea.addEventListener('keydown', autosizeTextarea);
} else {
  null;
}

function autosizeTextarea() {
  var el = this;
  setTimeout(function () {
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
} // Custom select =====>


$('select').each(function () {
  var $this = $(this),
      numberOfOptions = $(this).children('option').length;
  $this.addClass('select__hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select__styled"></div>');
  var $styledSelect = $this.next('div.select__styled');
  $styledSelect.append('<span></span><i class="icon-arrow-dropdown"></i>');
  $styledSelect.find('span').text($this.children('option').eq(0).text());
  var $list = $('<ul />', {
    'class': 'select__options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');
  $styledSelect.click(function (e) {
    e.stopPropagation();
    $('div.select__styled.active').not(this).each(function () {
      $(this).removeClass('active').next('ul.select__options').slideUp(300);
    });
    $(this).toggleClass('active').next('ul.select__options').slideToggle(300);
  });
  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.find('span').text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.slideUp(300);
  });
  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.slideUp(300);
  });
});
