import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Params } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }

  allProducts() {
    return this._http.get('/products');
  } 

  thisProduct(id) {
    return this._http.get('/products/' + id);
  }

  deleteProduct(product) {
    return this._http.delete(`/products/${product._id}`);
  }

  createProduct(newProduct) {
    return this._http.post('/products', newProduct);
  }

  editProduct(product) {
    return this._http.put(`/products/edit/${product._id}`, product);
  }

  
}