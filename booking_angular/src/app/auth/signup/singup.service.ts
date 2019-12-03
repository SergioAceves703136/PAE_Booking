import { Injectable } from '@angular/core';
import { Person } from '../../data-models/person';

var incrementID = 0;
@Injectable({
  providedIn: 'root'
})

export class SingupService {
  persons:Array<Person>=[
    {
      id: '',
      fullName:'',
      email:'',
      screenName:'',
      password:'',
      address:'',
      city:'',
      country:'',
      postalcode:'',
      cellphone:'',
      birthday:'',
      rol:'',
      cuartosCreados:'',
      transacciones:'',
  }
  ];
  constructor() { }
  generateID(){
    incrementID++;
    return incrementID;
  }
  createPerson(objct){
    objct.id = this.generateID();
    console.log(objct);
    this.savePerson(objct);
    this.persons.push(objct);
  }
  savePerson(objct){
    console.log('Se esta guadando', objct);
  }

}
