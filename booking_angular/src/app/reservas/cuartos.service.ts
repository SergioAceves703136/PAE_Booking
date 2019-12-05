import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cuarto } from '../data-models/cuarto';



@Injectable({
  providedIn: 'root'
})

export class CuartosService {
  cambiaListaCuartos = new Subject<Cuarto[]>();
  nextID = 4;

  listaCuarto: Cuarto[] =
    [
      new Cuarto(1,
        1,
        'Avenida Feliz 2016, México',
        'Villita frente al mar',
        'Pequeña villa familiar a las afueras de puerto vallarta, ideal para familias con hijos',
        'http://www.arquitecturaviva.com/media/Images/visores/febrero_2018/casa_chile_schmidt_4.jpg',
        3,
        '2 Cuartos completos matrimoniales y uno de visitas',
        'https://www.freejpg.com.ar/asset/OLD/comps/f003992.jpg',
        5,
        '2 Baños completos y 3 baños para visitantes en la parte de abajo, 1 en la playa',
        'https://tendenzias.com/wp-content/uploads/fotos-de-ba%C3%B1os-de-lujo-600x476.jpg',
        'Gran cocina con 2 estufas y 3 refrigeradores',
        'https://sizearquitectura.es/wp-content/uploads/2019/02/cocina-casa-de-lujo-ibiza.jpg',
        'Cine en casa y billar',
        'https://www.mundodeportivo.com/r/GODO/MD/p6/MasQueDeporte/Imagenes/2019/04/24/Recortada/img_ironda_20190424-161008_imagenes_md_otras_fuentes_cinema-k0uB-U461841974404xGG-980x554@MundoDeportivo-Web.jpg'
     , 564 ),
      new Cuarto(2,
        1,
        'Calle cervezeros 564',
        'Mansion lujosa',
        'Mansion grande con 9 recamaras con baño y cancha de tenis',
        'http://www.arquitecturaviva.com/media/Images/visores/febrero_2018/casa_chile_schmidt_4.jpg',
        9,
        'Grandes cuartos donde se puede disfrutar y descansar',
        'https://www.freejpg.com.ar/asset/OLD/comps/f003992.jpg',
        10,
        'Baños para cada cuarto y baños de visitantes',
        'https://tendenzias.com/wp-content/uploads/fotos-de-ba%C3%B1os-de-lujo-600x476.jpg',
        'Gran cocina para preparar un banquete',
        'https://sizearquitectura.es/wp-content/uploads/2019/02/cocina-casa-de-lujo-ibiza.jpg',
        'Jardin y Terraza con asador',
        'https://www.mundodeportivo.com/r/GODO/MD/p6/MasQueDeporte/Imagenes/2019/04/24/Recortada/img_ironda_20190424-161008_imagenes_md_otras_fuentes_cinema-k0uB-U461841974404xGG-980x554@MundoDeportivo-Web.jpg'
  , 900 ),
      new Cuarto(3,
        2,
        'Glorieta Colon, Guadalajara, 56410',
        'Departamento con vista a catedral',
        'Departamento cerca de punto sao paulo en guadalajara con vista al centro de la ciudad',
        'http://www.arquitecturaviva.com/media/Images/visores/febrero_2018/casa_chile_schmidt_4.jpg',
        2,
        '2 Cuartos con balcon y camas individuales',
        'https://www.freejpg.com.ar/asset/OLD/comps/f003992.jpg',
        2,
        '2 Baños completos en cada habitación, cuentan con bidet',
        'https://tendenzias.com/wp-content/uploads/fotos-de-ba%C3%B1os-de-lujo-600x476.jpg',
        'Pequeña cocineta con refrigerador ideal para compartir desayunos',
        'https://sizearquitectura.es/wp-content/uploads/2019/02/cocina-casa-de-lujo-ibiza.jpg',
        'Oxxo en la esquina',
        'https://www.mundodeportivo.com/r/GODO/MD/p6/MasQueDeporte/Imagenes/2019/04/24/Recortada/img_ironda_20190424-161008_imagenes_md_otras_fuentes_cinema-k0uB-U461841974404xGG-980x554@MundoDeportivo-Web.jpg',
        500
      )

    ];


  constructor() { }




  getCuartos(): Cuarto[] {
    return this.listaCuarto.slice();
  }

  notificarCambio() {
    this.cambiaListaCuartos.next(this.listaCuarto.slice());
  }

  getCuarto(id: number): Cuarto {
const pos = this.listaCuarto.findIndex (i => i.id === id);
return Object.assign({}, this.listaCuarto[pos]);
  }

borrarCuarto(id: number): boolean {
  const pos = this.listaCuarto.findIndex (i => i.id === id);
  if (pos >= 0) {
    this.listaCuarto.splice(pos, 1);
    this.notificarCambio();
    return true;
  }
  return false;
}

getNextID(): number {
  return this.nextID++;
}

addCuarto(cuarto: Cuarto): boolean {
  cuarto.id = this.getNextID();
  this.listaCuarto.push(Object.assign({}, cuarto));
  this.notificarCambio();
  console.log("SE CREO EL CUARTO");
  return true;

}

editarCuarto(cuarto: Cuarto): boolean {
const pos = this.listaCuarto.findIndex(p => p.id === cuarto.id);
if (pos >= 0 ) {
  Object.assign(this.listaCuarto[pos], cuarto);
  this.notificarCambio();
  return true;
}
return false;
}

RoomService(): Cuarto {
  const cuartoR: Cuarto = {
    id: 0,
    owner: 0,
   direccion: '',
    nombre: '',
         descripcion: '',
         imagen1: '',
         numCuartos: 0,
         descCuartos: '',
         imagenCuartos: '',
         numBaths: 0,
         descBaths: '',
         imagenBaths: '',
         descCocina: '',
         imagenCocina: '',
         extras: '',
         imagenExtras: '',
         precioDia: 0
  };
  return cuartoR;
  }


}
