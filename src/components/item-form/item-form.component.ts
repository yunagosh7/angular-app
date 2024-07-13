import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  standalone: true,
  selector: "item-form",
  templateUrl: './item-form.component.html',
  styleUrls: ["./item-form.component.css"],
  imports: [FormsModule],
})
export class ItemForm {

  constructor(
    private taskService: TaskService
  ) {

  }

  newItemStr = "" ;

  @Output()
  addTask = new EventEmitter<string>();


  onAddTask(e: any) {
    const newTask = {
      title: this.newItemStr,
      id: Math.floor(Math.random() * 2000)
    }
    this.taskService.addTask(newTask);
    // if(this.newItemStr.trim()) {
    //   this.addTask.emit(this.newItemStr)
    //   this.newItemStr = ""
    // }
  }
}
