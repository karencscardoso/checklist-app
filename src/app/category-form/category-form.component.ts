import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  actionName = 'Editar';
  categoryForm: FormGroup;

  constructor(private formBuilder:FormBuilder) {

    this.categoryForm = this.formBuilder.group({

      name:''

    })
  }

  ngOnInit(): void {
  }

  save() {
    console.log('Salvo!');

  }

  cancel() {
    console.log('Cancelado');

  }

}
