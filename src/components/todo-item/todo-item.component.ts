import { Component, EventEmitter, Input, Output} from '@angular/core'
import { Task } from '../../interfaces/Task';
import { TaskService } from '../../services/task.service';

import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ["./todo-item.component.css"],
  imports: [ RouterLink]
})
export class TodoItem {

  constructor(
    private taskService: TaskService
  ) {

  }

  @Input() task!: Task;

  onDeleteTask(itemId: number) {
    this.taskService.deleteTaskById(itemId);
  }
}
