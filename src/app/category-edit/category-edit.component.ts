import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CategoryEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      if (data.leftButtonLabel != null) {
        this.leftButtonLabel = data.leftButtonLabel;
      }

      if (data.rightButtonLabel != null) {
        this.rightButtonLabel = data.rightButtonLabel;
      }

      if (data.editgMsg != null) {
        this.editMsg = data.editMsg;
      }
    }

  editMsg = 'Faça sua alteração!';
  leftButtonLabel = '';
  rightButtonLabel = ''

  ngOnInit(): void {
  }

  clickLeftButton(){
    this.dialogRef.close(false);

  }

  clickRightButton() {
    this.dialogRef.close(true);

  }
}
