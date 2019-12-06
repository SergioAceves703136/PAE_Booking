import { Component, OnInit } from '@angular/core';
import { SingupService } from 'src/app/auth/signup/singup.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private singupService: SingupService) { }

  ngOnInit() {

  }

}
