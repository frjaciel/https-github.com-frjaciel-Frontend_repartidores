import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { validarContraseñaIguales } from "../../validators/app.validar-contraseña-iguales";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  paises: any= [
    {
      idPais: '01',
      nombrePais: 'Honduras',
    },
    {
      idPais: '02',
      nombrePais: 'El Salvador'
    }
  ];

  ciudades: any= [
    {
      idCiudad: '0801',
      nombreCiudad: 'Tegucigalpa'
    },
    {
      idCiudad: '0802',
      nombreCiudad: 'Comayaguela'
    }
  ];
  singin: FormGroup;

  constructor( private fb: FormBuilder,
               private router: Router) { 
      this.FormSingin();
  }

  ngOnInit(): void {
  }

  
  get CiudadNoValido(){
    return this.singin.get('ciudad').invalid && this.singin.get('ciudad').touched;
  }
  
  get DniNoValido(){
    return this.singin.get('dni').invalid && this.singin.get('dni').touched;
  }
  
  get NacionalidadNoValido(){
    return this.singin.get('nacionalidad').invalid && this.singin.get('nacionalidad').touched;
  }
  get NombreNovalido(){
    return this.singin.get('nombre').invalid && this.singin.get('nombre').touched;
  }
  get CorreoNoValido(){
    return this.singin.get('email').invalid && this.singin.get('email').touched;
  }

  get PassNoValido(){
    return this.singin.get('password').invalid && this.singin.get('password').touched;
  }

  get numberPhoneNoValido(){
    return this.singin.get('numberPhone').invalid && this.singin.get('numberPhone').touched;
  }

  get NoSonIguales(): boolean {
    return this.singin.hasError('NoSonIguales') &&
       this.singin.get('password').dirty &&
       this.singin.get('Confpassword').dirty;
  }

  FormSingin(){
    this.singin = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      dni: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('[0-9]{4}-[0-9]{4}-[0-9]{5}')]],
      nacionalidad: ['Honduras', [Validators.required]],
      ciudad: ['Tegucigalpa', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[\\w\\.-]*[a-zA-Z0-9_]@[\\w\\.-]*[a-zA-Z0-9]\\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]')]],
      numberPhone: ['', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{4}')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]],
      Confpassword: ['', Validators.required]
    }, {
      validators: validarContraseñaIguales
    });
  }

  Registrar(){
    console.log(this.NoSonIguales);
    if (this.singin.invalid) {
      return Object.values(this.singin.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Se evaluara tu perfil y un agente se pondra en contacto contigo'
      });
      
      this.router.navigate(['LandingRepartidores']);
    
    }
  }

}
