import { Component, Input, OnInit } from '@angular/core';
import { CATEGORY_DATA } from '../category/category.component';
import { ChecklistItem } from './../_models/checklist_item';
import { DialogComponent } from './../dialog/dialog.component';

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

  constructor() {

  }

  ngOnInit(): void {
  }

  public uptadeCompleteStatus(status: boolean) {
    console.log(`status alterado ${status}`);
  }

  createNewItem() {
    console.log('Criar novo item do checklist clicado!');
  }


  deleteChecklistItem(checklistItem: ChecklistItem) {
    console.log('Deletando item do checklist');

    this.dialog.open(DialogComponent, { disableClosed: true,
    data:{msg: 'Você deseja apagar este item?', leftButtonLabel: 'Ok', rightButtonLabel: 'Cancelar'}
  }).afterClosed().subscribe(resp => {

    console.log('Janela modal apagada fechada')
  })
  };

  updateChecklistItem(checklistItem: ChecklistItem) {
    console.log('Atualizando item do checklist');
    }
  }
