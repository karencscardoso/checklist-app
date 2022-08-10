import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  showTitle = true;

  ngOnInit(): void {
  }

  changeStatusTitle() {
    if(this.showTitle) this.showTitle = false;
    else this.showTitle = true;
  }
}
