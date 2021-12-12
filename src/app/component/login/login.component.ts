import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onUsuario= new EventEmitter();
  usuario: any=[];
  login: FormGroup;
  email: string;

  constructor(  private fb: FormBuilder,
                private router: Router,
                private loginServ: LoginService ) {
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
      email: ['motorista@gmail.com', [Validators.required, Validators.pattern('[\\w\\.-]*[a-zA-Z0-9_]@[\\w\\.-]*[a-zA-Z0-9]\\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]')]],
      password: ['Asd.1234', [Validators.required, Validators.minLength(7)]]
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

      Swal.showLoading();

      this.loginServ.IniciarSesion(this.login.value)
      .subscribe(resp => {
        Swal.close();
        this.usuario = resp;
        //localStorage.setItem('idUsuario', usuario[0]._id);
        //this.loginServ.permiso$.emit('true');
        //this.loginServ.email$.emit(usuario[0].email);
        console.log('User logueado', this.usuario);
        localStorage.setItem("dato", JSON.stringify(this.usuario));
        this.router.navigate(['Ordenes']);
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: err.message
        });
      });
  
    }
  }

  /*
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
  */

}
