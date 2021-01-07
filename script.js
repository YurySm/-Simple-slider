document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.your__slide'),
            prev = document.querySelector('.your__slider-btn.prev'),
            next = document.querySelector('.your__slider-btn.next');
    
    let slideIndex = 1;
    
    showSlides(slideIndex);
          
    function showSlides(n) {
        if (n > slides.length){
            slideIndex = 1;
        }         
        if (n < 1) {
            slideIndex = slides.length;
        }
    
        slides.forEach(item => item.classList.add('hide'));
    
        slides[slideIndex - 1 ].classList.add('show', 'fade');
        slides[slideIndex - 1 ].classList.remove('hide');
    }
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
    
    next.addEventListener('click', () => {
        plusSlides(1);
    });

 
});