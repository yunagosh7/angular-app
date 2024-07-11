import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../components/todo-item/todo-item.component'
import { ItemForm } from '../components/item-form/item-form.component';
import { SearchField } from '../components/search-field/search-field.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, TodoItem, CommonModule, ItemForm, SearchField],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proyectardo';

  items: string[] = ["caca", "culo", "pedo", "pis"]

  addTask(item: string) {
    console.log("wasca")
    this.items.push(item);
  }


}
