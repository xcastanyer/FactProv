import { Component, OnInit } from '@angular/core';

import { ProveedorService } from './shared/proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
  providers: [ProveedorService]
})
export class ProveedoresComponent implements OnInit {

  constructor(private proveedorService : ProveedorService) { }

  ngOnInit() {
  }
  
}
