import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from '../components/todo-item/todo-item.component'

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, TodoItem, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proyectardo';

  items: string[] = ["caca", "culo", "pedo", "pis"]
}
