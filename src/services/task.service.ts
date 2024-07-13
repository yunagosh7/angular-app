import { Injectable } from "@angular/core";
import { Task } from '../interfaces/Task'
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',

})
export class TaskService {
  
  private _tasks = new BehaviorSubject<Task[]>([
    {
      id: 1,
      title: "Comprar pan"
    },
    {
      id: 2,
      title: "Hacer caca"
    },
    {
      id: 3,
      title: "Hacer pichi"
    },
    {
      id: 4,
      title: "Dejar la falopa"
    },
  ]);
  tasks: Observable<Task[]> = this._tasks.asObservable()

  findById(taskId: number) {
    return this._tasks.getValue().find(item => item.id === taskId)
  }

  addTask(newTask: Task) {
    const currentTasks = this._tasks.getValue();
    this._tasks.next([...currentTasks, newTask])
  }

  deleteTaskById(taskId: number) {
    const tasksFiltered = this._tasks.value.filter((task) => task.id !== taskId);
    this._tasks.next(tasksFiltered)
  }

  clearTasks() {
    this._tasks.next([])
  }

  updateTask(taskUpdated: Task) {
    const tasksUpdated = this._tasks.getValue().map(task => {
      if (task.id === taskUpdated.id) {
        return {
          ...task,
          title: taskUpdated.title
        }
      }
      return task;
    })
    this._tasks.next(tasksUpdated) ;
  }


}
