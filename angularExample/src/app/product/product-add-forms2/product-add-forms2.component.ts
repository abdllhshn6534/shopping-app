import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers:[]
})
export class ProductAddForms2Component {

  constructor() { }
 
   productAddForm!: FormGroup;
   product: product = new product();
 
  createProductAddForm() {
    this.productAddForm =  new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required)
    })
  }

  addProductForm() {
    if (this.productAddForm.valid) {
      this.product = this.productAddForm.value
    }
  }

}
