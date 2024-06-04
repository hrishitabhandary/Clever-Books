document.addEventListener('DOMContentLoaded',()=>{
    const sliderArrows = document.querySelectorAll('[src*="slider-arrow"]');

    sliderArrows.forEach(arrow => {
     arrow.addEventListener('click', () => {
        const section = arrow.closest('section');
        section.scrollLeft += section.offsetWidth;
    });
  });
});