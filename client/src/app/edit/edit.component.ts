import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service/task.service';
import { Product } from '../product';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: any;
  errors: any;
  updateProduct: any;

  constructor(private _taskService: TaskService, 
    private _route: ActivatedRoute, 
    private _router: Router) {
      this.product = '';
      this.errors = []; 
      this.updateProduct = '';
  }

  ngOnInit() {
    this.showProduct();
  }

  showProduct(){
    this._route.params.subscribe( (params: Params) => {
      let observable = this._taskService.thisProduct(params.id);
      observable.subscribe( (product: Product) => {
        this.product = product;
        console.log(product)
      },
      (err: any) => {
        console.log(err)
      })
    })
  }

  onSubmit() {
    let observable = this._taskService.editProduct(this.product);
    observable.subscribe( (updateProduct: Product) => {
      this.updateProduct = updateProduct;
      console.log(this.updateProduct);
      this._router.navigate(['/product'])  
    },
    (err: any) => {
    console.log(err)
    this.errors = err.error;
    })
  }


  goHome() {
    this._router.navigate(['/product']);
  }





}
