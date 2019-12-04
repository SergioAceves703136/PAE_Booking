import { Injectable } from '@angular/core';
import { Person } from '../../data-models/person';
import {Router} from "@angular/router"

let incrementID = 0;
let currentSession = 0; // usuario actual

@Injectable({
  providedIn: 'root'
})

export class SingupService {
  persons: Array<any> = [];

  constructor(private router: Router) { }

  generateID(): number {
    incrementID++;
    return incrementID;
  }

  createPerson(objct) {
    objct.id = this.generateID();
    this.savePerson(objct);
    this.persons.push(objct);
    this.router.navigate(['/signin']);
  }

  savePerson(objct) {
    console.log('Se esta guadando', objct);
  }


  logUser(objct) {
    console.log(objct);
    const pos = this.persons.findIndex(i=> i.screenName === objct.screenName);
    if(pos>=0 && this.persons[pos].password==objct.password){
      console.log('entro');
      
      this.router.navigate(['/usuario']);
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
    return this.getPerson(currentSession);
  }

  getPerson(id: number): Person {
    return this.persons[id];
  }

  getPersons(): Array<Person> {
    console.log('Personas=');
    
    return this.persons;
  }

/*
  getLastId(): number {
    return incrementID;
  }
*/
}