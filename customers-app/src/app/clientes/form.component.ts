import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import {Router, ActivatedRoute} from "@angular/router";
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public titulo:string = 'Crear Cliente';
  public errores: string[] = [];
  public cliente:Cliente = new Cliente();

  constructor(private clieteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id');
      if(id){
        this.clieteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
      }
    });
  }

  create():void{
   this.clieteService.create(this.cliente)
   .subscribe({
    next: cliente =>{
     this.router.navigate(['/clientes'])
     swal.fire("Nuevo Cliente",`El cliente ${cliente.nombre} ha sido creado con éxito`, 'success')
    },
    error: err =>{
      this.errores = err.error.errors as string[];
      console.error('Código del error desde el backend: ' + err.status);
      console.error(err.error.errors);
    }
   });
  }

  update():void{
    this.clieteService.update(this.cliente)
    .subscribe({
      next:json =>{
      this.router.navigate(['/clientes'])
      swal.fire("Cliente Actualizado",`${json.mensaje} ${json.cliente.nombre} actualizado con exito`, 'success')
    },
    error: err =>{
      this.errores = err.error.errors as string[];
      console.error('Código del error desde el backend: ' + err.status);
      console.error(err.error.errors);
    }
    });
  }


}
function next(next: any, arg1: (cliente: any) => void, error: any, arg3: (err: any) => void, complete: any, arg5: () => void) {
  throw new Error('Function not implemented.');
}

