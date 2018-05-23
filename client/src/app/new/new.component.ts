import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service/task.service';
import { Product } from '../product';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any;
  errors: any;
  constructor(private _taskService: TaskService, 
    private _route: ActivatedRoute, 
    private _router: Router) { 
      this.newProduct = new Product();    
      this.errors = [];
    }
    
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newProduct)
    let observable = this._taskService.createProduct(this.newProduct);
    observable.subscribe( (newProduct: Product) => {
      this.newProduct = newProduct;
      console.log(this.newProduct)     
      this._router.navigate(['/product']);
    },
    (err: any) => {
      console.log(err.error.err)
      this.errors = err.error.err;
    })      

  }

  refresh() {
    this._router.navigate(['/product/new'])
  }

  goHome() {
    this._router.navigate(['/product']);
  }
 
}
