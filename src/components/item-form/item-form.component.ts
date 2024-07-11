import { OnChanges, Component, EventEmitter, Output, Input, model } from '@angular/core'
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: "item-form",
  templateUrl: './item-form.component.html',
  styleUrls: ["./item-form.component.html"],
  imports: [FormsModule],
})
export class ItemForm {
 
  newItemStr = "" ;

  @Output()
  taskAdded = new EventEmitter<string>();

  addTask(e: any) {
    if(this.newItemStr.trim()) {
      this.taskAdded.emit(this.newItemStr)
      this.newItemStr = ""
    }
  }
}