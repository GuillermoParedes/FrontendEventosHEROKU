import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nameProject: string;
  constructor() {
    this.nameProject = 'Enteractive Eventos'
  }

    ngOnInit() {

  }
}
