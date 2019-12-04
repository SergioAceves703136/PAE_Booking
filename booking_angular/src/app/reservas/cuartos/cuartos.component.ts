import { Component, OnInit, ViewChild, TemplateRef, Inject } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CuartosService } from '../cuartos.service';
import { Cuarto } from 'src/app/data-models/cuarto';



export interface DialogData {
  cuartoModal: Cuarto;
}


@Component({
  selector: 'app-cuartos',
  templateUrl: './cuartos.component.html',
  styleUrls: ['./cuartos.component.css']
})
export class CuartosComponent implements OnInit {
  cuartoModal: Cuarto;

  public cuartos: Cuarto[] = [];


  constructor(
    public dialog: MatDialog,
    private cuartosService: CuartosService
  ) { }

  ngOnInit() {
    this.cuartos = this.cuartosService.getCuartos();
  }


  info(id: number): void {
    this.cuartoModal = this.cuartosService.getCuarto(id);
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


@Component({
  selector: 'app-cuartos-info',
  templateUrl: 'cuartosInfo.html',
})
export class CuartosInfoComponent {

  constructor(
    public dialogRef: MatDialogRef<CuartosInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }



  onNoClick() {
    this.dialogRef.close();

  }

}



