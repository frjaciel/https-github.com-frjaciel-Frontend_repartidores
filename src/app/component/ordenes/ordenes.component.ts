import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  
  categoriaOrdenes: any= [
    {
      idCatOrden: '01',
      nomCatOrden: 'Disponibles'
    },
    {
      idCatOrden: '02',
      nomCatOrden: 'A entregar'
    },
    {
      idCatOrden: '03',
      nomCatOrden: 'Entregadas'
    },
  ];

  ordenesPendientes: any= [
    {
      idCliente: '01',
      nombreCliente: 'Ramon',
      ubicacion: 'Tegucigalpa',
      contacto: '3333-6666',
      descripcion: 'Esta es la descripcion ' 
    },
    {
      idCliente: '02',
      nombreCliente: 'Jose',
      ubicacion: 'Tegucigalpa',
      contacto: '3333-6666',
      descripcion: 'Esta es la descripcion ' 
    },
  ];

  ordenesEntregar: any= [
    {
      idCliente: '01',
      nombreCliente: 'Ramon',
      ubicacion: 'Tegucigalpa',
      contacto: '3333-6666',
      descripcion: 'Esta es la descripcion ' 
    },
  ];

  ordenesFinalizadas: any= [
    {
      idCliente: '06',
      nombreCliente: 'Juan Carlos Garcia',
      ubicacion: 'Tegucigalpa',
      contacto: '3333-6666',
      descripcion: 'Esta es la descripcion ' 
    },
  ];

  datoSelecionado: string= '';


  constructor() { }

  ngOnInit(): void {
  }
  
  capturar(){
    console.log(this.datoSelecionado);
  }
}
