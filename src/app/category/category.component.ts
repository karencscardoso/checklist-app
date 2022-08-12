import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
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

  constructor(private dialog: MatDialog) { }

  showTitle = true;

  ngOnInit(): void {
  }

  editCategory(inputCategory: Category) {
    this.dialog.open(CategoryEditComponent, { disableClose: true,
      data: { editableCategory: inputCategory } }).afterClosed().subscribe(
      resp => {
        if(resp) {
          console.log('Categoria salvo com sucesso!!');
        } else {
        console.log('Cancelada com sucesso!');
        }
      }
    )

  }

  deleteCategory(category: Category) {
    this.dialog.open(DialogComponent, { disableClose: true,
      data: {dialogMsg: 'Tem certeza que deseja apagar esta categoria?', leftButtonLabel: 'Sim', rightButtonLabel: 'Não'} }).afterClosed().subscribe(
      resp => {
        if(resp) {
          console.log('Categoria não apagada!');
        } else {
        console.log('Categoria apagada com sucesso!');
        }
      }
    )

  }

  createNewCategory() {
    console.log('Categoria inserida com sucesso!')
  }
  changeStatusTitle() {
    if(this.showTitle) this.showTitle = false;
    else this.showTitle = true;
  }
}
