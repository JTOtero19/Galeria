import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import { cargarAnteriorSiguiente } from "./cargarImagen";
import carousel from "./carousel";

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) => {
  const boton = e.target.closest('button');

  //Cerrar galeria
  if (boton?.dataset.accion === 'cerrar-galeria'){
    cerrarGaleria();
  }

  // Carousel clik
  if (e.target.dataset.id){
    slideClick(e);
  }

  // Siguiente Imagen
  if (boton?.dataset.accion === 'siguiente-imagen'){
    cargarAnteriorSiguiente('siguiente');
  }

  //Anterior Imagen
  if (boton?.dataset.accion === 'anterior-imagen'){
    cargarAnteriorSiguiente('anterior');
  }

  // Siguiente Carousel
  if (boton?.dataset.accion === 'siguiente-slide'){
    carousel('adelante');
  }

  //Anterior Carousel
  if (boton?.dataset.accion === 'anterior-slide'){
    carousel('atras');
  }
});
