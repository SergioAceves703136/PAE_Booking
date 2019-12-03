import { Component, OnInit } from '@angular/core';
import { Person } from '../../data-models/person';
import { SingupService } from "./singup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  persons:Array<any> = [];
  persona:Person = {
    id:"",
    fullName:"",
    email:"",
    screenName:"",
    password:"",
    address:"",
    city:"",
    country:"",
    postalcode:"",
    cellphone:"",
    birthday:"",
    rol:"",
    cuartosCreados:"",
    transacciones:"",
  }
  constructor(private singupService:SingupService ) { }

  ngOnInit() {
    console.log('Se creo ');
    
  }
  addPerson(events?){
    if(!this.persona)return;
    this.singupService.createPerson(this.persona);
  }

}
   