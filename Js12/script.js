window.addEventListener("DOMContentLoaded" , function() {
    document.querySelector("#menu").addEventListener("click", function() {
        
        document.querySelector("#menu2").classList.toggle("active");
        document.querySelector("#menu-icon-start").classList.toggle("header__menu-none");
        document.querySelector("#menu-icon-end").classList.toggle("header__menu-active");
    })


    document.querySelector(".header__icon").addEventListener("click", function() {
        document.querySelector(".header__quest").classList.add("header__quest-active")
    })
    
    document.querySelector(".header__icon-active2").addEventListener("click", function() {
        document.querySelector(".header__quest").classList.remove("header__quest-active");
        document.querySelector(".header__icon").classList.remove("header__icon-remove");
    })


    $("#accordion").accordion( {
        heightStyle: "content",
        active: false,
        collapsible: true
    });


    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      // пагинация
      pagination: {
      el: '.swiper-pagination',
      clickable: true,

      },

      a11y: {
        paginationBulletMessage: 'слайд {{index}}',
      },
      // навигация
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
      }); 

      const tabButtons = document.querySelectorAll(".work__link")
      tabButtons.forEach(function(tabslink){
        tabslink.addEventListener("click", function(event){
            const path = event.currentTarget.dataset.path
            let currentButton = event.currentTarget;

            document.querySelectorAll(".work__tab").forEach(function(tabcontent){
                tabcontent.classList.remove("active-tab")
            })
            document.querySelector(`[data-target="${path}"]`).classList.add("active-tab")
            tabButtons.forEach(function(item) {
                item.classList.remove("work__link_link1");
            });

            currentButton.classList.add("work__link_link1");
        })
      })
    
}) 

