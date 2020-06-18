import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoManagementComponent} from './todo-management/todo-management.component';

const routes: Routes = [
  {
    path: '',
    component: TodoManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
