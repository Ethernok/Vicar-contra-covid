var sliderIndex = 0;

function mostrarImagen(){
    var slides = document.querySelectorAll('.slider');
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = 'block';
       setTimeout(showSlides,2000);
}
mostrarImagen();