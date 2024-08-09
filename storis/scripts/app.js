const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });

});

const observer2 = new IntersectionObserver((entries) => {

    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show-text');
        } else {
            entry.target.classList.remove('show-text');
        }
    });

});

const observer3 = new IntersectionObserver((entries) => {

    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show-menu');
        } else {
            entry.target.classList.remove('show-menu');
        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsText = document.querySelectorAll('.hidden-text');
hiddenElementsText.forEach((el) => observer2.observe(el));

const hiddenElementsMenu = document.querySelectorAll('.hidden-menu');
hiddenElementsMenu.forEach((el) => observer3.observe(el));

const message = document.querySelector('nav');
let position = window.pageYOffset;

window.addEventListener("scroll", function(){
    var data = window.scrollY;
    let scroll = window.pageYOffset;

    var header = document.querySelector("nav");
    header.classList.toggle("stycky", window.scrollY > 0);

    if(window.scrollY > 46){
        if (scroll > position){
            console.log("Вниз");
            header.classList.toggle("stycky-position", window.scrollY > 46);
        } 
        else{
            console.log("Вверх");
            header.classList.toggle("stycky-position", window.scrollY < 46);
        };
    };

    position = scroll;
});

window.onload = function () {
    var box=document.getElementsByClassName('news-block');
    var btn=document.getElementById('btn-more');
    for (let i=11;i<box.length;i++) {
        box[i].style.display = "none";
    }

    var countD = 11;
    btn.addEventListener("click", function() {
        var box=document.getElementsByClassName('news-block');
        countD += 4;
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "block";
            }
        }

    })
};

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.sldr-left',
      prevEl: '.sldr-right',
    }
  });

  const first_swpr = new Swiper('.first_swpr', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '#sldr-left',
      prevEl: '#sldr-right',
    }
  });
  
  const rew_swpr = new Swiper('.rew_swpr', {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1.1,
          spaceBetween: 0
        },
        590: {
          slidesPerView: 1.1,
          spaceBetween: 0
        },
        882: {
          slidesPerView: 1.1,
          spaceBetween: 0
        },
        992: {
          slidesPerView: 1.2,
          spaceBetween: 0
        },
        1050: {
          slidesPerView: 1.2,
          spaceBetween: 0
        },
        1240: {
          slidesPerView: 1.6,
          spaceBetween: 0
        },
        1400: {
          slidesPerView: 1.6,
          spaceBetween: 0
        },
        1500: {
          slidesPerView: 1.8,
          spaceBetween: 0,
        },
        1700: {
          slidesPerView: 1.8,
          spaceBetween: 0,
        },
        1800: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1900: {
          slidesPerView: 3.5,
          spaceBetween: 0,
        }
      }
});

const news_swpr = new Swiper('.news_swpr', {
  slidesPerView: 1,
  loop: true,
  //centeredSlides: true,
  navigation: {
      nextEl: '#button-next',
      prevEl: '#button-prev',
  },
    breakpoints: {
        // when window width is >= 320px
        351: {
          slidesPerView: 1.1,
          spaceBetween: 0
        },
        560: {
          slidesPerView: 1.8,
          spaceBetween: 0
        },
        670: {
          slidesPerView: 2.2,
          spaceBetween: 0
        },
        993: {
          centeredSlides: true,
          slidesPerView: 2.5,
          spaceBetween: 0
        },
        1100: {
          slidesPerView: 2.6,
          spaceBetween: 0
        },
        1150: {
          slidesPerView: 3.2,
          spaceBetween: 0
        },
        1260: {
          slidesPerView: 3.5,
          spaceBetween: 0
        },
        1420: {
            slidesPerView: 4,
            spaceBetween: 0
          },
        1660: {
          slidesPerView: 4.5,
          spaceBetween: 0,
        },
        1820: {
            slidesPerView: 5,
            spaceBetween: 0
          },
        2200: {
          slidesPerView: 7,
          spaceBetween: 0
        }
      }
});
  var acc = document.getElementsByClassName("hwt");
  var image = document.getElementsByClassName("sld-img");
  var i;

  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs');
    const tabsBtn = document.querySelectorAll('.hov-to-cont');
    const tabsHwt = document.querySelectorAll('.hwt');
    const tabsContent = document.querySelectorAll('.sld-img');
  
    if (tabs) {
      tabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('hov-to-cont')) {
          const tabsPath = e.target.dataset.columns;
          //tabsBtn.forEach(el => {el.classList.remove('actv')});
          tabsHwt.forEach(el => {el.classList.remove('actv')});
          
          document.querySelector(`[data-tab="${tabsPath}"]`).classList.add('actv');
          tabsHandler(tabsPath);

          setTimeout(function () {
            //tabCycle = setInterval(tabChange, 5000);
        }, 10000);
          
        }
      });
    }
  
    const tabsHandler = (path) => {
      tabsContent.forEach(el => {el.classList.remove('actv-img')});
      document.querySelector(`[data-magic="${path}"]`).classList.add('actv-img');
    };
  });

  var mn = document.getElementsByClassName("menu");
  var i;
  
  for (i = 0; i < mn.length; i++) {
    mn[i].addEventListener("click", function() {
      this.classList.toggle("active-menu");
    });
  };    



  var tabNavs = document.querySelectorAll(".more-data");

  for (var i = 0; i < tabNavs.length; i++) {
  
    tabNavs[i].addEventListener("click", function(e){
      this.classList.toggle("active");
    });
  }