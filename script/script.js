document.addEventListener('DOMContentLoaded', function() {
    
    const initSwiper = function() {
        if(window.innerWidth < 768) {
            const swiper = new Swiper('.swiper', {
                slidesPerView: "auto",
                spaceBetween: 16,
                direction: 'horizontal',
                loop: false,
                pagination: {
                el: '.swiper-pagination',
                clickable: true
                },
            });
        }
    };
   
    initSwiper();

    const brandsMoreBtn = document.querySelector('.brands__more-btn');
    const brandsItems = document.querySelectorAll('.brands__item');

    function switchesBrandVisibility(numberBrands) {
        for(let i = numberBrands; i < brandsItems.length; i++) {
            brandsItems[i].classList.toggle('brands__item--hidden');
        }
        
    }

    function openMoreBrands(brands) {
        brandsMoreBtn.addEventListener('click', function() {
            brandsMoreBtn.classList.toggle('brands__more-btn--up');
            if(brandsMoreBtn.textContent === 'Показать все') {
                brandsMoreBtn.textContent = 'Скрыть';
            } else {
                brandsMoreBtn.textContent = 'Показать все';
            }
            
            switchesBrandVisibility(brands);
        });
    }

    function showsBrandsOnTablet() {
        if(window.innerWidth > 767 && window.innerWidth < 1440) {
            const numberBrands = 6;
            switchesBrandVisibility(numberBrands);

            openMoreBrands(numberBrands);
        }
    }

    showsBrandsOnTablet();

    function showsBrandsOnDesktop() {
        if(window.innerWidth > 1439) {
            const numberBrands = 8;
            switchesBrandVisibility(numberBrands);

            openMoreBrands(numberBrands);
        }
    }

    showsBrandsOnDesktop();

    
});