import { Component, Input, OnInit } from '@angular/core';
import { CATEGORY_DATA } from '../category/category.component';
import { ChecklistItem } from './../_models/checklist_item';
import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistEditComponent } from './../checklist-edit/checklist-edit.component';
import { Dialog } from '@angular/cdk/dialog';

export const CHECKLIST_DATA = [

  { guid: 'aaa-bbb-ccc-ddd', completed: false, description:'Ir ao oftalmologista', deadline: Date.now(), postDate: Date.now(), category: CATEGORY_DATA.find(x => x.name == 'Saúde')},

  { guid: 'aaa-bbb-ccc-ddd', completed: true, description:'Reunião com o gerente', deadline: Date.now(), postDate: Date.now(), category: CATEGORY_DATA.find(x => x.name == 'Trabalho')}

]

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  dataSource = CHECKLIST_DATA;

  displayedColumns: string[] = ['id', 'completed', 'description', 'deadline', 'postDate', 'category', 'actions'];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  public uptadeCompleteStatus(status: boolean) {
    console.log(`status alterado ${status}`);
  }

  createNewItem() {
    console.log('Criar novo item do checklist clicado!');

    this.dialog.open(ChecklistEditComponent, {
      disableClose: true, data: { actionName: 'Criar'},
    }).afterClosed().subscribe(resp => {
      console.log('Fechando modal de criação');
    });
  }


  deleteChecklistItem(checklistItem: ChecklistItem) {
    console.log('Deletando item do checklist');

    this.dialog.open(DialogComponent, { disableClose: true,
      data: { dialogMsg: 'Você deseja realmente apagar esse item?', leftButtonLabel: 'Ok', rightButtonLabel: 'Cancelar'}
    }).afterClosed().subscribe(resp => {

      console.log('Janela modal confirmar apagar fechada')

    });
  }

  updateChecklistItem(checklistItem: ChecklistItem) {
    console.log('Atualizando item do checklist');

    this.dialog.open(ChecklistEditComponent, {
      disableClose: true, data: { updatableChecklistItem: checklistItem, actionName: 'Editar'},
    }).afterClosed().subscribe(resp => {
      console.log('Fechando modal de edição');
    });
    }

  }
