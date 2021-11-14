import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-repartidores',
  templateUrl: './landing-repartidores.component.html',
  styleUrls: ['./landing-repartidores.component.css']
})
export class LandingRepartidoresComponent implements OnInit {
   

  constructor(
              private router: Router
              )
    {
  
    }
  ngOnInit(): void {
  }


}
