import { Injectable } from "@angular/core";
import { Task } from '../interfaces/Task'

@Injectable({
  providedIn: 'root',

})
export class TaskService {
  private tasks: Task[] = [
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
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(newTask: Task) {
    this.tasks.push(newTask);
  }

  deleteTaskById(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  clearTasks() {
    this.tasks = [];
  }

  updateTask(taskUpdated: Task) {
    const tasksUpdated = this.tasks.map(task => {
      if (task.id === taskUpdated.id) {
        return {
          ...task,
          title: taskUpdated.title
        }
      }
      return task;
    })
    this.tasks = tasksUpdated;
  }


}
