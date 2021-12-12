import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel, UsuarioRModel } from "../../app/models/usuario.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn: boolean = null;

  userToken: string;
  private url: string;

  permiso$ = new EventEmitter<string>();
  email$ = new EventEmitter<string>();
  cantidadCarrito$ = new EventEmitter<number>();

  private Permisos: any[] = [
    {
      id: 1,
      nombre: 'Categorias',
    },
    {
      id: 2,
      nombre: 'Tiendas',
    }
  ];

  constructor(protected http: HttpClient) { }

  IniciarSesion( usuario: UsuarioModel ){
    const AutData = {
      ...usuario
    };

    return this.http.get('http://localhost:8889/usuarios/login/' + AutData.email + '/' + AutData.password )
    .pipe(
      map (resp => {
        return resp;
      })
    );
    
  }

  Registrar(usuario: UsuarioRModel) {
    const AutData = {
      ...usuario
    };
    return this.http.post('http://localhost:8889/usuarios/', AutData).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  private GuardarToken( idToken: string ){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString() );
  }

  leerToken(){
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return  this.userToken;
  }

  Autenticado(): boolean {
    /*if (this.userToken.length < 0) {
      return false;
    }*/

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem('Token');
  }

  getListaPermisos(){
    return this.Permisos;
  }
}

export interface Permiso{
  id: number;
  nombre: string;
}