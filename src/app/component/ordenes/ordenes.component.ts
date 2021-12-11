import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  estadoOrdenes: any= [];
  /*categoriaOrdenes: any= [
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
  ];*/
  usuarios: any= [];
  clientes: any=[];
  ordenes: any= [];
  dataUser: any=[];
    
  ordenPendientes:any =[
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

  
  constructor(private ordenesService: OrdenesService) { }

  ngOnInit(): void {
    this.obtenerTipoOrdenes();
    this.obtenerUsuarios();
  }
  
  capturar(){
    console.log(this.datoSelecionado);
  }

  obtenerUsuarios(){
    this.ordenesService.usuarios().subscribe(res=>{
      this.usuarios= res;
      console.log('Usuarios', this.usuarios);
    },
    error=>console.log(error)
    );
  }

  Llenarclientes(){
    for(let usuario of this.usuarios){
      if(usuario.tipoUsuario=='61b2b670f8ed6e8b150d2d31'){
        this.clientes.push(usuario); 
      }
    }
    console.log('Clientes: ', this.clientes);
  }

  obtenerTipoOrdenes(){
    this.ordenesService.estadoOrdenes().subscribe(
      res=>{
          this.estadoOrdenes= res;
          console.log('Tipo de Ordenes desde backend', this.estadoOrdenes)
      },
      error=>console.log(error)
    );
  }

  obtenerOrdenes(){
    //this.Llenarclientes();
    this.ordenesService.obteneOrdenes(this.datoSelecionado).subscribe(
    res=>{
      this.ordenes= res;
      console.log('ordenes del estado: ', this.datoSelecionado, '-> ', this.ordenes)
    },
    error=>console.log(error)
    );
  }
  
  cambiarEstado(estado, idorden){
    let nuevoEstado;
    if(estado=='61b2c418f8ed6e8b150d2d38'){
      nuevoEstado= '61b2c418f8ed6e8b150d2d39';//A entregar
    }
    else if(estado=='61b2c418f8ed6e8b150d2d39'){
      nuevoEstado= '61b2c418f8ed6e8b150d2d3a';//Entregada
    }
    this.ordenesService.cambiarEstadoOrden(idorden, nuevoEstado).subscribe(
      res=>{
        //this.ordenes= res;
        console.log('ordenes modificadas: ', nuevoEstado, '-> ')
      },
      error=>console.log(error)
    )
    location.reload();
  }
  
 /* ordenUsuario(){
    for(let i=0;i<this.clientes.length; i++){
      this.ordenesService.obteneOrdenesUsuario(this.clientes[i]._id).subscribe(
        res=>{
          this.dataUser= [
            this.clientes[i]._id,
            this.clientes[i].nombre,
            this.clientes[i].numberPhone,
            res
          ];
        console.log('data usuario', this.dataUser);
        },
        error=>console.log(error)
        )
    }
  }*/
}
