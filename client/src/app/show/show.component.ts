import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service/task.service';
import { Product } from '../product';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  product: any;
  liked: boolean;

  constructor(private _taskService: TaskService, 
    private _route: ActivatedRoute, 
    private _router: Router) { 
    }

  ngOnInit() {
    this.showProduct();
    this.liked = false;
    this.product = '';
  }

  showProduct() {
    this._route.params.subscribe( (params: Params) => {
      let observable = this._taskService.thisProduct(params.id);
      observable.subscribe( (product: Product) => {
        this.product = product;
        console.log(this.product)
      },
      (err: any) => {
        console.log(err)
      })
    })
  }

  removePet(){
    let observable = this._taskService.deleteProduct(this.product);
      observable.subscribe( product => {
        this.product = product;
        console.log(this.product)
      },
      (err: any) => {
        console.log(err)
      })
    this._router.navigate(['/product']);
  }
  
 



}
