import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';

export const CATEGORY_DATA = [
  { name: 'Educação', guid: 'aaa-bbb-ccc-ddd' },
  { name: 'Saúde', guid: 'aaa-bbb-ccc-ddd' },
  { name: 'Trabalho', guid: 'aaa-bbb-ccc-ddd' },
  { name: 'Outros', guid: 'aaa-bbb-ccc-ddd' }
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: Category[] = CATEGORY_DATA;

  constructor() { }

  showTitle = true;

  ngOnInit(): void {
  }

  editCategory(category: Category) {

  }

  deleteCategory(category: Category) {

  }

  createNewCategory() {
    console.log('Categoria inserida com sucesso!')
  }
  changeStatusTitle() {
    if(this.showTitle) this.showTitle = false;
    else this.showTitle = true;
  }
}
