import {Component, Input} from '@angular/core'

@Component({
  standalone: true,
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItem {
  @Input() name!: string;
}