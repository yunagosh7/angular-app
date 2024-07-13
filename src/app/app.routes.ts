import { Routes } from '@angular/router';
import { TodoDetailsPage } from '../pages/todo-details/todo-details.component';
import { HomePage } from '../pages/home/home.component';

export const routes: Routes = [
  
  {
    path: "home",
    component: HomePage
  },
  {
    path: "todo/:todoId",
    component: TodoDetailsPage
  },

  {
    path: "**",
    redirectTo: "home",
  },
];
