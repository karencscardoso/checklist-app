import { Category } from './category';

export class ChecklistItem{

  guid!: string;
  completed!: boolean;
  description!: string;
  deadline!: Date;
  postDate!: Date;
  category!: Category;
}
