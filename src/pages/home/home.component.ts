import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { Task } from "../../interfaces/Task";
import { TaskService } from "../../services/task.service";
import { TodoItem } from "../../components/todo-item/todo-item.component";
import { CommonModule } from "@angular/common";
import { ItemForm } from "../../components/item-form/item-form.component";
import { SearchField } from "../../components/search-field/search-field.component";

@Component({
  standalone: true,
  styleUrls: ["./home.component.css"],
  templateUrl: "./home.component.html",
  imports: [RouterOutlet, TodoItem, CommonModule, ItemForm, SearchField],

})
export class HomePage {

  constructor(
    private taskService: TaskService
  ) {
    this.taskService.tasks.subscribe(tasks => {
      this.tasks = tasks
    })
  }

  tasks: Task[] = [];

}