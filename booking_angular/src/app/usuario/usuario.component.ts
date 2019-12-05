import { Component, OnInit } from '@angular/core';
import { Person } from '../data-models/person';
import { SingupService } from '../auth/signup/singup.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  aux: Person = {};
  persona: Person = //this.singupService.getCurrentPerson();
  { // usuario conectado
    id: '',
    fullname: '',
    email: '',
    screenName: '',
    password: '',
    address: '',
    city: '',
    country: '',
    postalcode: '',
    cellphone: '',
    birthday: '',
    rol: '',
    cuartosCreados: '',
    transacciones: '',
  }

  constructor(private singupService: SingupService) { }

  ngOnInit() {
    //this.singupService.generateAdmin();
    this.persona = this.singupService.getCurrentPerson();
    console.log(this.persona);
  }

}
