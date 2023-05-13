import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { AlertifyService } from '../service/alertify.service';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({ //dekoratördür
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  buttons = "Sepete Ekle";
  title = "Ürün Listesi";
  filterText = "";
  products: product[] | any;
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.productService.getProduct(params["categoryId"]).subscribe(data => {
        this.products = data;
      })
    })

  }


  addToCard(product: any) {
    this.alertifyService.succes(product.name + " added")
  }

}
