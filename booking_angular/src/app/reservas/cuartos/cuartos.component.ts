import { Component, OnInit, ViewChild, TemplateRef, Inject } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CuartosService } from '../cuartos.service';
import { Cuarto } from 'src/app/data-models/cuarto';
import { SingupService } from 'src/app/auth/signup/singup.service';
import { Person } from 'src/app/data-models/person';



export interface DialogData {
  cuartoModal: Cuarto;
}
/////////////////////////////////////////////////////////////////////////////////// Cuartos Component
@Component({
  selector: 'app-cuartos',
  templateUrl: './cuartos.component.html',
  styleUrls: ['./cuartos.component.css']
})
export class CuartosComponent implements OnInit {
  cuartoModal: Cuarto;

  //public cuartos: Cuarto[] = [];

  public cuartos: Cuarto[] = [];

  constructor(
    public dialog: MatDialog,
    private cuartosService: CuartosService
  ) { }

  ngOnInit() {
   this.cuartosService.getCuartos().subscribe(data => this.cuartos = data);
  }


  info(id: number): void {
    this.cuartosService.getCuarto(id).subscribe(data => this.cuartoModal = data);
    console.log(this.cuartoModal);
    const dialogRef = this.dialog.open(CuartosInfoComponent, {
      width: '650px',
      data: { cuartoModal: this.cuartoModal }
    }

    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }
    );

  }
}

/////////////////////////////////////////////////////////////////////////////////// Cuartos Info Component
@Component({
  selector: 'app-cuartos-info',
  templateUrl: 'cuartosInfo.html',
})
export class CuartosInfoComponent {

  constructor(private singupService: SingupService,
    public dialog: MatDialog,
    private cuartosService: CuartosService,
    public dialogRef: MatDialogRef<CuartosInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  cuartoModal: Cuarto;

  onNoClick() {
    this.dialogRef.close();

  }

  onClickRes(id: number): void {
    this.cuartosService.getCuarto(id).subscribe(data => this.cuartoModal = data);
    console.log(this.cuartoModal);
    const dialogRef = this.dialog.open(ReservaCuartoComponent, {
      width: '650px',
      data: { cuartoModal: this.cuartoModal }
    }

    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }
    );

  }

}
/////////////////////////////////////////////////////////////////////////////////// Cuartos Reserva Component
@Component({
  selector: 'app-reserva-cuarto',
  templateUrl: 'cuartosRes.html',
})
export class ReservaCuartoComponent {

  constructor(private singupService: SingupService,
    public dialog: MatDialog,
    private cuartosService: CuartosService,
    public dialogRef: MatDialogRef<CuartosInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  cuartoRes: Cuarto;
  persona: Person;

  ngOnInit() {
    // this.singupService.generateAdmin();

    this.persona = this.singupService.getCurrentPerson();
    console.log(this.persona);

  }

  onNoClick() {
    this.dialogRef.close();

  }

  res() {
    this.cuartoRes = this.cuartosService.RoomService();
    console.log(this.cuartoRes);
    this.cuartoRes = this.data.cuartoModal;
    console.log("Reservaste: ", this.cuartoRes.nombre);
    this.singupService.addReservation(this.persona.id, this.cuartoRes.id);


  }


}
