import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  estadoOrdenes: any= [];
  ordenUnica: any= [];
  //status: String;
  
  st1= "Tomada";
  st2= "En el Lugar";
  st3= "En el Camino";
  st4= "En el Destino";
  
  usuarios: any= [];
  clientes: any=[];
  ordenes: any= [];
  dataUser: any=[];

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
        console.log('ordenes modificadas: ', nuevoEstado, '-> ');
        this.cambiarStatus(idorden, this.st4);
      },
      error=>console.log(error)
    )
    location.reload();
  }
  
  //cambiar el estatus de la orden (tomada, en camino, en el destino, etc)
  cambiarStatus(idOrden, estatus){
    this.ordenesService.statusOrden(idOrden, estatus).subscribe(
      res=>{
        console.log('Status modificado: ', res);
      },
      error=>console.log(error)
    )

  }

  obtenerOrden(idOrden){
    this.ordenesService.ordenId(idOrden).subscribe(
      res=>{
        this.ordenUnica= res;
        console.log('Orden unica: ', this.ordenUnica)
      },
      error=>console.log(error)  
    )
  }
 
  
  //boton de cambiar Status
  tomada= false;
  cambiarApariencia(){
    this.tomada= !this.tomada;
  }
}
