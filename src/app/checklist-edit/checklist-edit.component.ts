import { Component, Inject, OnInit } from '@angular/core';
import { ChecklistItem } from './../_models/checklist_item';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-checklist-edit',
  templateUrl: './checklist-edit.component.html',
  styleUrls: ['./checklist-edit.component.css']
})
export class ChecklistEditComponent implements OnInit {

  actionName = 'Editar';
  checklistItem!: ChecklistItem

  constructor(public modalRef: MatDialogRef<ChecklistEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if(data.updatableChecklistItem != null) {
      this.checklistItem = data.updatableChecklistItem;
    }

    if(data.actionName != null) {
      this.actionName = data.actionName;
    }
  }

  ngOnInit(): void {
  }

  onFormClose($event: any) {
    this.modalRef.close();
  }
}
