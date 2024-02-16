import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SingupService } from 'src/app/auth/signup/singup.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() ToggleClose = new EventEmitter();

  constructor(private singupService: SingupService) { }

  ngOnInit() {
  }

  close() {

    this.ToggleClose.emit();

  }
  closeL() {
    this.singupService.logOut();
    this.ToggleClose.emit();

  }
}


