import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service/task.service';
import { Product } from '../product';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products: any;
  pet: any;

  constructor(private _taskService: TaskService, 
    private _route: ActivatedRoute, 
    private _router: Router){
  }

  ngOnInit() {
   this.getProducts();
  }

  getProducts() {
      let observable = this._taskService.allProducts();
      observable.subscribe( products => {
        this.products = products;
      })
  }

  
  
}