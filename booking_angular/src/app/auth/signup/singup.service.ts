import { Injectable } from '@angular/core';
import { Person } from '../../data-models/person';
import { Subject } from 'rxjs';

let incrementID = 0;
let currentSession = 0; // usuario actual

@Injectable({
  providedIn: 'root'
})

export class SingupService {
  cambiaDato = new Subject<Person[]>();

  persons: Array<Person> = [
  /*  new Person(incrementID, 'Usuario test', 'test@booking.com', 'Superusuario',
    '12345', 'Elm Street 666', 'New Orleans', 'EEUU',
    1111, 13579, '01-01-2000', 0)*/
  ];

  constructor() { }

  actualizarPersonas() {
    this.cambiaDato.next(this.getPersons());
  }
/*
  generateAdmin() {
    if (incrementID === 0) {
      console.log('Test');
     /*
      const aux = {incrementID, 'Usuario test', 'test@booking.com', 'Superusuario',
      '12345', 'Elm Street 666', 'New Orleans', 'EEUU',
      1111, 13579, '01-01-2000', 0};

      this.persons.push(aux);
      console.log(aux);
    }
  }
*/
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
  }

  savePerson(objct) {
    console.log('Se esta guadando el obj con id', objct, objct.id);
    //this.logUser(objct.id);
  }

// Invocar logUser DESPUÉS del la comprobación de screenname y contraseña al presionar login, no al crear cuenta.
  logUser(id: number) {
    console.log('Iniciando sesión como persona ', id);
    currentSession = id;
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
