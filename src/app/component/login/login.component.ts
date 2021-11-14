import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(  private fb: FormBuilder,
                private router: Router ) {
    this.FormLogin();
   
  }

  ngOnInit(): void {
  }

  get CorreoNoValido(){
    return this.login.get('email').invalid && this.login.get('email').touched;
  }

  get PassNoValido(){
    return this.login.get('password').invalid && this.login.get('password').touched;
  }

  FormLogin(){
    this.login = this.fb.group({
      email: ['Yozabeth@unah.hn', [Validators.required, Validators.pattern('[\\w\\.-]*[a-zA-Z0-9_]@[\\w\\.-]*[a-zA-Z0-9]\\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]')]],
      password: ['Yocza3007@', [Validators.required, Validators.minLength(7)]]
    });
  }

  IniciarSesion(){
    if (this.login.invalid) {
      return Object.values(this.login.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Espere por favor...'
      });
      
      this.router.navigate(['Ordenes']);
    
    }
  }

}
