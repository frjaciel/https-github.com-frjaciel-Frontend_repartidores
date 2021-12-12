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

  //Obtener orden por ID
  ordenId(idOrden):Observable<any>{
    return this.httpClient.get(`http://localhost:8889/ordenes/${idOrden}/orden`, {});
  }

  //Obtener ordenes de un usuario
  obteneOrdenesUsuario(idUsuario: string):Observable<any>{
    return this.httpClient.get(`http://localhost:8889/ordenes/${idUsuario}/usuarios`,{});
  }

  //obtener usuarios segun su tipo
  usuarios():Observable<any>{
    return this.httpClient.get(`http://localhost:8889/usuarios`);
  }

  cambiarEstadoOrden(idorden, nuevoEstado, idMotrista, nombreMotorista, telefonoMotorista):Observable<any>{
    return this.httpClient.put(`http://localhost:8889/ordenes/${idorden}`,
    {
      estado: nuevoEstado,
      idMotorista: idMotrista,
      nombreMotorista: nombreMotorista,
      telefono: telefonoMotorista
    }
    )
  }

  statusOrden(idOrden, statusNew):Observable<any>{
    return this.httpClient.put(`http://localhost:8889/ordenes/${idOrden}/status`,
    {
      status: statusNew,
      
    });
  }

}
