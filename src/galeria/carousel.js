const galeria = document.getElementById('galeria');
const carousel = (direccion) => {
  const opciones = {
    root: document.querySelector('.galeria__carousel'),
    rootmargin: '0px',
    threshold: 0.9,
  }

  // callback que se ejcuta cuando la visibilidad va cambiando
  const observer = new IntersectionObserver((entradas) => {
    const slidesVisibles = entradas.filter((entrada) => {
      if (entrada.isIntersecting === true){
        return entrada;
      }
    });

    if (direccion === 'atras'){
      const primerSlideVisible = slidesVisibles;
      const indexprimerSlideVisible = entradas.indexOf(primerSlideVisible);

      if (entradas.length + 1 > indexprimerSlideVisible){
        entradas[indexprimerSlideVisible + 1].target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
        });
      }

    } else if (direccion === 'adelante') {
      const ultimaSlideVisible = slidesVisibles[slidesVisibles.length - 1];
      const indexUltimoSlideVisible = entradas.indexOf(ultimaSlideVisible);

      if (entradas.length - 1 > indexUltimoSlideVisible){
        entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
        });
      }
    }

    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) => {
    observer.unobserve(slide);
    });
  }, opciones);

  const slides = galeria.querySelectorAll('.galeria__carousel-slide');
  slides.forEach((slide) => {
    observer.observe(slide);
  });
};

export default carousel;
