import { Injectable } from '@angular/core';
import { Person } from '../../data-models/person';
import { Router } from "@angular/router"
import { Subject } from 'rxjs';

let incrementID = 0;
let currentSession = 0; // usuario actual

@Injectable({
  providedIn: 'root'
})

export class SingupService {
  cambiaDato = new Subject<Person[]>();
  persons: Array<any> = [
  /*  new Person(incrementID, 'Usuario test', 'test@booking.com', 'Superusuario',
    '12345', 'Elm Street 666', 'New Orleans', 'EEUU',
    1111, 13579, '01-01-2000', 0)*/
  ];

  constructor(private router: Router) { }

  actualizarPersonas() {
    this.cambiaDato.next(this.getPersons());
  }
  generateID(): number {
    incrementID++;
    return incrementID;
  }

  createPerson(objct) {
    objct.id = this.generateID();
    objct.rol = 1;
    console.log(objct);
    this.savePerson(objct);
    this.persons.push(objct);
    this.router.navigate(['/signin']);
  }

  savePerson(objct) {
    console.log('Se esta guadando el obj con id', objct.id);
    //this.logUser(objct.id);
  }

// Invocar logUser DESPUÉS del la comprobación de screenname y contraseña al presionar login, no al crear cuenta.
  logUser(objct) {
    console.log(objct);
    const pos = this.persons.findIndex(i=> i.screenName === objct.screenName);
    if(pos>=0 && this.persons[pos].password==objct.password){
      console.log('entro');
      this.router.navigate(['/usuario']);
      return;
    }
    console.log('Error');
  }

  isLoggedIn(): boolean {
    if (currentSession) {
      return true;
    }
    return false;
  }

  getCurrentPerson(): Person {
    console.log('Current user logged: ', currentSession);
    console.log(this.getPerson(currentSession));
    return this.getPerson(currentSession);
  }

  getPerson(id: number): Person {
    return this.persons[id];
  }

  getPersons(): Array<Person> {
    console.log(this.persons);
    return this.persons.slice();
  }
/*
  getLastId(): number {
    return incrementID;
  }
*/
}
