import data from './../datos/fotos';

const galeria = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) => {
  galeria.querySelector('.galeria__imagen').src = ruta;
  galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
  galeria.querySelector('.galeria__titulo').innerText = nombre;
  galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index;
    }
  });

  // Marcamos imagen del carousel como activa
  if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0){
    //Eliminamos clase activa del cualqueri slide
    galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');

    galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
  }

};

const cargarAnteriorSiguiente = (direccion) => {

  //Poniendole funcionalidad a las flechas botones
  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];
  const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);
  // Esto anterior es para que el valor del id sea un numero y no unda cadena de texto

  //Recorrer imagens en busca del id de la imagenactual para obtener su index
  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === idImagenActual){
      indexImagenActual = index;
    }
  });

  if (direccion === 'siguiente'){
    if (fotos[indexImagenActual + 1]){
      // destructuramos para extraer solo estos valores
      const {id, nombre, ruta, descripcion} = fotos[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }


  } else if (direccion === 'anterior'){
    // destructuramos para extraer solo estos valores
    if (fotos[indexImagenActual - 1]){
      // destructuramos para extraer solo estos valores
      const {id, nombre, ruta, descripcion} = fotos[indexImagenActual - 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  }
};

export { cargarImagen, cargarAnteriorSiguiente };
