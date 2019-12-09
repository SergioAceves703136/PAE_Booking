import { Injectable } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';
import { Cuarto } from '../data-models/cuarto';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // tslint:disable-next-line: object-literal-key-quotes
    //'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})

export class CuartosService {
  cambiaListaCuartos = new Subject<Cuarto[]>();
  nextID = 4;

  listaCuarto: Cuarto[] = [];


  constructor(private http: HttpClient) { }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getCuartos(): Observable<Cuarto[]> {
    return this.http.get<Cuarto[]>('http://localhost:80/api/cuartos');
    // return this.listaCuarto.slice();
  }

  notificarCambio() {
    this.cambiaListaCuartos.next(this.listaCuarto.slice());
  }

  getCuarto(id: number): Observable<Cuarto> {
    return this.http.get<Cuarto>( `http://localhost:80/api/cuartos/${id}`);
//const pos = this.listaCuarto.findIndex (i => i.id === id);
//return Object.assign({}, this.listaCuarto[pos]);
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

addCuarto(cuarto: Cuarto): Observable<Cuarto> {
  cuarto.id = this.getNextID();
  console.log(cuarto);
  return this.http.post<Cuarto>( `http://localhost:80/api/cuartos`, cuarto, httpOptions);
  //this.listaCuarto.push(Object.assign({}, cuarto));
  //this.notificarCambio();

//  console.log('SE CREO EL CUARTO');
  //return true;

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
