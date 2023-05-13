import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../service/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  title = "Kategori Listesi";
  categories: Category[] = []

  ngOnInit(): void {  
    this.categoryService.getCategory().subscribe(data => {
      this.categories = data;
    })
  }

}
