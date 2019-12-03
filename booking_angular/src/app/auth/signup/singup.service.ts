import { Injectable } from '@angular/core';
import { Person } from '../../data-models/person';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
var incrementID = 0;
export class SingupService {
  persons:Array<Person>=[
    {
      id: this.generateID(),
      fullName:'',
      email:'',
      screenName:'',
      password:'',
      address:'',
      city:'',
      postalcode:'',
      cellphone:'',
      birthday:'',
      rol:'',
      cuartosCreados:'',
      transacciones:'',
  }
  ];
  constructor(private httpClient:HttpClient) { }
  generateID(){
    incrementID++;
    return incrementID;
  }
  createPerson(objct){
    console.log(objct);
    this.savePerson(objct);
    this.persons.push(objct);
  }
  savePerson(objct){
    console.log('Se esta guadando', objct);
  }

}
