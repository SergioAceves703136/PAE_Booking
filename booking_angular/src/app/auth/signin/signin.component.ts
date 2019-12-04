import { Component, OnInit } from '@angular/core';

import { SingupService } from "./../signup/singup.service";
import { Person } from '../../data-models/person';
import {Router} from "@angular/router"
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
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
  constructor(private singupService:SingupService,
    private router: Router ) { }

  ngOnInit() {
    
  }
  trytoLog(events?){
    if(!this.persona)return;
    this.singupService.logUser(this.persona);
    
  }

}
