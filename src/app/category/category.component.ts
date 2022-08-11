import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  editCategory(category: Category) {
    console.log('Categoria add');

  }

  deleteCategory(category: Category) {
    this.dialog.open(DialogComponent, { disableClose: true,
      data: {dialogMsg: 'Tem certeza que deseja apagar esta categoria?', leftButtonLabel: 'Cancelar', rightButtonLabel: 'Sim'} }).afterClosed().subscribe(
      resp => {
        if(resp) {
          console.log('Categoria apagada com sucesso!');
        } else {
        console.log('Categoria não apagada!');
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
