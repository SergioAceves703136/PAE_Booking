import { Injectable } from '@angular/core';
import { Person } from '../../data-models/person';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class SingupService {

  incrementID = 1;
  currentSession: Person;

  cambiaDato = new Subject<Person[]>();
  persons: Person[] = [
     new Person(1, 'admin', 'test@booking.com', 'admin',
      'admin', 'Elm Street 666', 'New Orleans', 'EEUU',
      1111, 13579, '01-01-2000', 1, [], [])
  ];


  constructor(private router: Router) { }

  actualizarPersonas() {
    this.cambiaDato.next(this.getPersons());
  }
  generateID(): number {
    this.incrementID++;
    return this.incrementID;
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
    // this.logUser(objct.id);
  }

  // Invocar logUser DESPUÉS del la comprobación de screenname y contraseña al presionar login, no al crear cuenta.
  logUser(objct) {
    console.log(objct);
    const pos = this.persons.findIndex(i => i.screenName === objct.screenName);
    if (pos >= 0 && this.persons[pos].password === objct.password) {
      console.log('entro');
      this.currentSession = this.persons[pos];
      this.router.navigate(['/usuario']);
      return;
    }
    console.log('Error');
  }

  logOut() {
    this.currentSession = undefined;
  }

  isLoggedIn(): boolean {
    if (this.currentSession) {
      return true;
    }
    return false;
  }

  getCurrentPerson(): Person {
    console.log('Current user logged: ', this.currentSession.id);
    return this.currentSession;
  }

  getPerson(id: number): Person {
    return this.persons[id];
  }

  getPersons(): Array<Person> {
    console.log(this.persons);
    return this.persons.slice();
  }

  notificarCambio() {
    this.cambiaDato.next(this.persons.slice());
  }

  addReservation(idPer: number, idCuarto: number): boolean {
    const pos = this.persons.findIndex(i => i.id === idPer);
    if (pos >= 0) {
      this.persons[pos].transacciones.push(idCuarto);
      this.notificarCambio();
      console.log('Reservación aceptada');
      return true;
    }

    return false;

  }
  /*
    getLastId(): number {
      return incrementID;
    }
  */
}