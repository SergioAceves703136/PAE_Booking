import { Component, OnInit, Inject } from '@angular/core';
import { Person } from '../data-models/person';
import { SingupService } from '../auth/signup/singup.service';
import { Cuarto } from '../data-models/cuarto';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CuartosService } from '../reservas/cuartos.service';


export interface DialogData {
   direccion: string;
   nombre: string;
   descripcion: string;
   imagen1: string;
   numCuartos: number;
   descCuartos: string;
   imagenCuartos: string;
   numBaths: number;
   descBaths: string;
   imagenBaths: string;
   descCocina: string;
   imagenCocina: string;
   extras: string;
   imagenExtras: string;
   precioDia: number;
}




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  aux: Person;
  is: boolean;
  persona: Person;
  cuartoModal: Cuarto;

  RoomService(): Cuarto{
  const cuartoR: Cuarto = {
    id: 0,
    owner: 0,
   direccion: '',
    nombre: '',
         descripcion: '',
         imagen1: '',
         numCuartos: 0,
         descCuartos: '',
         imagenCuartos: '',
         numBaths: 0,
         descBaths: '',
         imagenBaths: '',
         descCocina: '',
         imagenCocina: '',
         extras: '',
         imagenExtras: '',
         precioDia: 0
  };
  return cuartoR;
  }
  constructor(private singupService: SingupService,
              public dialog: MatDialog
             ) { }

  ngOnInit() {
    // this.singupService.generateAdmin();
    console.log('is is ', this.is);
    this.persona = this.singupService.getCurrentPerson();
    console.log(this.persona);
    if (this.singupService.isLoggedIn()) {
      this.is = true;
    } else {
      this.is = false;
    }

    console.log('is now is ', this.is);
  }

  crear(): void {
    this.cuartoModal = this.RoomService();
    console.log(this.cuartoModal);
    const dialogRef = this.dialog.open(CrearCuartosComponent, {
      width: '650px',
      data: {
        nombre: this.cuartoModal.nombre,
        direccion: this.cuartoModal.direccion,
        descripcion: this.cuartoModal.descripcion,
        imagen1: this.cuartoModal.descripcion,
        numCuartos: this.cuartoModal.numCuartos,
        descCuartos: this.cuartoModal.descCuartos,
        imagenCuartos: this.cuartoModal.imagenCuartos,
        numBaths: this.cuartoModal.numBaths,
        descBaths: this.cuartoModal.descBaths,
        imagenBaths: this.cuartoModal.imagenBaths,
        descCocina: this.cuartoModal.descCocina,
        imagenCocina: this.cuartoModal.imagenCocina,
        extras: this.cuartoModal.extras,
        imagenExtras: this.cuartoModal.imagenExtras,
        precioDia: this.cuartoModal.precioDia

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


    });



  }


}

@Component({
  selector: 'app-crear-cuartos',
  templateUrl: 'crearCuarto.html',
})
export class CrearCuartosComponent {

  constructor(
    private singupService: SingupService,
    public dialogRef: MatDialogRef<CrearCuartosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private cuartoService: CuartosService) { }

    owner: Person;
    cuartoModal: Cuarto;

    RoomService(): Cuarto{
    const cuartoR: Cuarto = {
      id: 0,
      owner: 0,
     direccion: '',
      nombre: '',
           descripcion: '',
           imagen1: '',
           numCuartos: 0,
           descCuartos: '',
           imagenCuartos: '',
           numBaths: 0,
           descBaths: '',
           imagenBaths: '',
           descCocina: '',
           imagenCocina: '',
           extras: '',
           imagenExtras: '',
           precioDia: 0
    };
    return cuartoR;
    }


  onNoClick() {
  
    this.cuartoModal = this.RoomService();
    this.cuartoModal.direccion = this.data.direccion;
    this.cuartoModal.nombre = this.data.nombre;
    this.cuartoModal.descripcion = this.data.descripcion;
    this.cuartoModal.imagen1 = this.data.imagen1;
    this.cuartoModal.nombre = this.data.nombre;
    this.cuartoModal.numCuartos = this.data.numCuartos;
    this.cuartoModal.descCuartos = this.data.descCuartos;
    this.cuartoModal.imagenCuartos = this.data.imagenCuartos;
    this.cuartoModal.numBaths = this.data.numBaths;
    this.cuartoModal.descBaths = this.data.descBaths;
    this.cuartoModal.imagenBaths = this.data.imagenBaths;
    this.cuartoModal.descCocina = this.data.descCocina;
    this.cuartoModal.imagenCocina = this.data.imagenCocina;
    this.cuartoModal.extras = this.data.extras;
    this.cuartoModal.imagenExtras = this.data.imagenExtras;
    this.cuartoModal.precioDia = this.data.precioDia;

    this.owner = this.singupService.getCurrentPerson();
    this.cuartoModal.owner = this.owner.id;
    this.cuartoService.addCuarto(this.cuartoModal).subscribe();
    console.log(this.cuartoModal);
    console.log('Entro a cerrar');
    this.dialogRef.close();

  }

  onClosed() {
    this.dialogRef.close();
  }
}
