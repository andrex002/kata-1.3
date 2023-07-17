import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', function() {

    const initSliderBrands = function() {
        if(window.innerWidth < 768) {
            const swiper = new Swiper('.brands__slider', {
                slidesPerView: "auto",
                spaceBetween: 16,
                direction: 'horizontal',
                loop: false,
                pagination: {
                el: '.brands__pagination',
                clickable: true
                },
            });
        }
    };

    initSliderBrands();

    const initSliderRepair = function() {
      if(window.innerWidth < 768) {
          const swiper = new Swiper('.repair__slider', {
              slidesPerView: "auto",
              spaceBetween: 16,
              direction: 'horizontal',
              loop: false,
              pagination: {
              el: '.repair__pagination',
              clickable: true
              },
          });
      }
    };

    initSliderRepair();

    const initSliderPrice = function() {
      if(window.innerWidth < 768) {
          const swiper = new Swiper('.price__slider', {
              slidesPerView: "auto",
              spaceBetween: 16,
              direction: 'horizontal',
              loop: false,
              pagination: {
              el: '.price__pagination',
              clickable: true
              },
          });
      }
    };

    initSliderPrice();

    const brandsMoreBtn = document.querySelector('.brands__more-btn');
    const brandsItems = document.querySelectorAll('.brands__item');
    const repairMoreBtn = document.querySelector('.repair__more-btn');
    const repairItems = document.querySelectorAll('.repair__item');

    function switchesCardsVisibility(numberCards, cards) {
        for(let i = numberCards; i < cards.length; i++) {
          cards[i].classList.toggle('hidden');
        }

    }

    function openMoreCards(numberCards, button, cardsItem) {
      button.addEventListener('click', function() {
        button.classList.toggle('rotate-to-180');
            if(button.textContent === 'Показать все') {
              button.textContent = 'Скрыть';
            } else {
              button.textContent = 'Показать все';
            }

            switchesCardsVisibility(numberCards, cardsItem);
        });
    }

    function showsCardsOnTablet(visibleNumberCards, button, cardsItem) {
        if(window.innerWidth > 767 && window.innerWidth < 1440) {
            switchesCardsVisibility(visibleNumberCards, cardsItem);

            openMoreCards(visibleNumberCards, button, cardsItem);
        }
    }

    showsCardsOnTablet(6, brandsMoreBtn, brandsItems);
    showsCardsOnTablet(3, repairMoreBtn, repairItems);

    function showsCardsOnDesktop(visibleNumberCards, button, cardsItem) {
        if(window.innerWidth > 1439) {
            switchesCardsVisibility(visibleNumberCards, cardsItem);

            openMoreCards(visibleNumberCards, button, cardsItem);
        }
    }

    showsCardsOnDesktop(8, brandsMoreBtn, brandsItems);
    showsCardsOnDesktop(4, repairMoreBtn, repairItems);

    const main = document.querySelector('.main');
    const burgerBtn = main.querySelector('.burger__btn');
    const communicationMenuLinkCall = main.querySelector('.communication-menu__link--call');
    const communicationMenuLinkFeedback = main.querySelector('.communication-menu__link--feedback');
    let openMenu = false;

    //  Открывает модальное окно
  const openPopup = function (evt, popup) {
    const closeBtn = popup.querySelector('.modal__close-btn');
    evt.preventDefault();
    popup.classList.add('modal--show');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onPopupEscPress);
    document.addEventListener('click', onOverlayClick);
    if (closeBtn) {
      closeBtn.addEventListener('click', onBtnCloseClick);
    }
  }

  //  Закрывает модальное окно
  const closePopup = function () {
    const popup = document.body.querySelector('.modal--show');
    const closeBtn = popup.querySelector('.modal__close-btn');
    popup.classList.remove('modal--show');
    if(!openMenu) {
      document.body.style.overflow = 'visible';
    }
    document.removeEventListener('keydown', onPopupEscPress);
    document.removeEventListener('click', onOverlayClick);
    if (closeBtn) {
      closeBtn.removeEventListener('click', onBtnCloseClick);
    }
  };

  //  Закрывает модальное окно по нажатию на Escape
  const onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      closePopup();
    }
  };

  //  Закрывает модальное окно по клику на крестик
  const onBtnCloseClick = function () {
    closePopup();
  };

  //  Закрывает модальное окно по клику на overlay
  const onOverlayClick = function (evt) {
    const popup = document.body.querySelector('.modal--show .modal__overlay');
    console.log(evt.target, popup);
    if (evt.target === popup) {
      closePopup();
    }
  };
  communicationMenuLinkCall.addEventListener('click', function(evt) {
    const popupElement = document.querySelector('.modal--call');
    openPopup(evt, popupElement);
  });
  communicationMenuLinkFeedback.addEventListener('click', function(evt) {
    const popupElement = document.querySelector('.modal--feedback');
    openPopup(evt, popupElement);
  });

  //  Закрывает меню по нажатию на Escape
  const onMenuEscPress = function (evt) {
    if (evt.key === 'Escape') {
      toogleStateMenu(evt);
    }
  };

  //  Закрывает меню по клику на overlay
  const onOverlayMenuClick = function (evt) {
    const menuOverlay = main.querySelector('.main__overlay');
    if (evt.target === menuOverlay) {
      toogleStateMenu(evt);
    }
  };


  const toogleStateMenu = function(evt) {
    evt.preventDefault();
    openMenu = !openMenu;
    const leftColumn = main.querySelector('.left-column');
    leftColumn.classList.toggle('left-column--opened-menu');
    main.classList.toggle('main--opened-menu');
    console.log(openMenu)
    if(openMenu) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onMenuEscPress);
      document.addEventListener('click', onOverlayMenuClick);
    } else {
      console.log('0')
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', onMenuEscPress);
      document.removeEventListener('click', onOverlayMenuClick);
    }
  }

  burgerBtn.addEventListener('click', function(evt) {
    toogleStateMenu(evt);
  })


});
