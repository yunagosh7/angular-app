import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Task } from "../../interfaces/Task";
import { TaskService } from "../../services/task.service";

import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  styleUrls: ["./todo-details.component.css"],
  templateUrl: "./todo-details.component.html",
  imports: [RouterLink]
})
export class TodoDetailsPage implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {

  }

  task: Task | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const todoIdFromRoute = Number(routeParams.get('todoId'));

    this.task = this.taskService.findById(todoIdFromRoute)
    console.log("dale down de mierda: ", {todoIdFromRoute})
  }
}