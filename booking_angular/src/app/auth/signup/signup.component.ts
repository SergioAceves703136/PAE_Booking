import { Component, OnInit } from '@angular/core';
import { Person } from '../../data-models/person';
import { SingupService } from './singup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  persons: Array<any> = [];
  persona: Person = {
    id: 0,
    fullname: '',
    email: '',
    screenName: '',
    password: '',
    address: '',
    city: '',
    country: '',
    postalcode: 0,
    cellphone: 0,
    birthday: '',
    rol: 0,
    cuartosCreados: [],
    transacciones: [],
  };

  constructor(private singupService: SingupService,
              private router: Router) { }

  ngOnInit() {
    console.log('Se creo ');

  }
  addPerson(events?) {
    if (!this.persona) { return; }
    this.singupService.createPerson(this.persona);
    this.router.navigate(['./signin']);
  }

}
