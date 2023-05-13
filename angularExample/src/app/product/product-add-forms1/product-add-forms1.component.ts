import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/service/alertify.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { product } from '../product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private categoryService:CategoryService,
    private productService:ProductService,
    private alertifyService:AlertifyService) { }

  model:product=new product();  

  categories: Category[] = []

  ngOnInit(): void {  
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data;
    })
  }

  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data=>{
      this.alertifyService.succes(this.model.name +"Başarıyla Eklendi")
    })
  }

}
