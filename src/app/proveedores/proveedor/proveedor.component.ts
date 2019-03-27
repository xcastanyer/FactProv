import { Component, OnInit } from '@angular/core';
import {ProveedorService} from '../shared/proveedor.service'

import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  constructor(private proveedorService : ProveedorService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
    
  }
  resetForm(form? : NgForm){
    console.log('resetform');
    if (form!=null)
      form.reset();
    this.proveedorService.selectedProveedor = 
    {
      Id : null,
      Nombre : '',      
      NIF : '',
      Direccion : '',
      DireccionFacturacion: '',
      PersonaContacto1: '',
      PersonaContacto2 : '',
      Telfono1 : '',
      Telefono2: '',
      Telefono3: '',
      Web : '',
      DireccionMail1: '',
      NombreDireccionMail1 : '',
      DireccionMail2 : '',
      NombreDireccionMail2 : ''

    }
  }
  onSubmit(form : NgForm){
    console.log('onSubmit');
    this.proveedorService.postProveedor(form.value)
    .subscribe(res=>{
    
      var nombre = this.proveedorService.selectedProveedor.Nombre;
      this.resetForm(form);
   
      this.toastr.success('Insertado correctamente.', nombre);
  
     
    },Error =>{
      this.toastr.error('ERROR');
    })
  }
  
}
