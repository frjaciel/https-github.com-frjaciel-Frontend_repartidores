import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private httpClient: HttpClient) { }

  estadoOrdenes():Observable<any>{
    return this.httpClient.get(`http://localhost:8889/estadoorden`,{});
  } 

  //Obtener ordenes segun su estado
  obteneOrdenes(idEstado: string):Observable<any>{
    return this.httpClient.get(`http://localhost:8889/ordenes/${idEstado}`,{});
  }

  //Obtener ordenes de un usuario
  obteneOrdenesUsuario(idUsuario: string):Observable<any>{
    return this.httpClient.get(`http://localhost:8889/ordenes/${idUsuario}/usuarios`,{});
  }

  //obtener usuarios segun su tipo
  usuarios():Observable<any>{
    return this.httpClient.get(`http://localhost:8889/usuarios`);
  }

  cambiarEstadoOrden(idorden, nuevoEstado):Observable<any>{
    return this.httpClient.put(`http://localhost:8889/ordenes/${idorden}`,
    {
      estado: nuevoEstado
    }
    )
  }

}
