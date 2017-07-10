import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products:any;

  constructor() {
    this.products = [{
      id: 1,
      name: 'Pen',
      image: 'assets/images/products/pen.png'
    },{
      id: 2,
      name: 'Notebook',
      image: 'assets/images/products/notebook.png'
    },{
      id: 3,
      name: 'Eraser',
      image: 'assets/images/products/eraser.png'
    }]
  }

  ngOnInit() {
  }

  public select = (product = 0) => console.log(this.products[product - 1])
}
