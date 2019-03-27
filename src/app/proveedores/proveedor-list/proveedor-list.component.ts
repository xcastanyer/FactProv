import { Component, OnInit } from '@angular/core';
import {ProveedorService} from '../shared/proveedor.service'
@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  constructor(private proveedorService : ProveedorService) { }

  ngOnInit() {
  }

}
