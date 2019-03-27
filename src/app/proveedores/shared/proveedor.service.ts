import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Proveedor} from './proveedor.model'

import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProveedorService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json', 
      'Access-Control-Allow-Origin': 'https://localhost:44373/api/Proveedor'
    })
    
  };
  selectedProveedor : Proveedor;
  constructor(private http : HttpClient) { }

  postProveedor(formData : Proveedor) {
   console.log('postProveedor');
    return this.http.post("https://localhost:44373/api/Proveedor", formData);
}

}
