import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ChecklistItem } from '../_models/checklist_item';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { CATEGORY_DATA } from '../category/category.component';
import { Category } from '../_models/category';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit {

  @Input() actionName = 'Editar';
  @Input() checklistItem!: ChecklistItem;
  @Output() formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(FormGroupDirective) checklistFormGroupDirective!: FormGroupDirective;

  categories: Category[] = CATEGORY_DATA;
  checklistForm!: FormGroup;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.checklistForm = this.FormBuilder.group(
      {
        completed: [this.checklistItem != null ? this.checklistItem.completed: false, Validators.required],
        description: [this.checklistItem != null ? this.checklistItem.description: '', Validators.required],
        deadline: [this.checklistItem != null ? new Date(this.checklistItem.deadline) : new Date(), Validators.required],
        category: [this.checklistItem != null ? this.checklistItem.category: null, Validators.required]
      }
    )

  }

  private clearForm() {
    this.checklistForm.reset();
    this.checklistFormGroupDirective.resetForm();
  }

  save() {
    this.formCloseEvent.emit(true);
  }

  cancel() {
    this.formCloseEvent.emit(false);
  }
}
