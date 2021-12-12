import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from './component/login/login.component';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  localStorage = window.localStorage;

  datosUsuario=  JSON.parse(localStorage.getItem('._id'));
  title = 'frontend';

  constructor() {
   
  }

  ngOnInit(): void {
    
  }

  
}
