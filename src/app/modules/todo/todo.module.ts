import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoManagementComponent} from './todo-management/todo-management.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {TodoDialogComponent} from './todo-dialog/todo-dialog.component';

@NgModule({
  declarations: [TodoManagementComponent, TodoDialogComponent],
  imports: [CommonModule, TodoRoutingModule, SharedModule],
  entryComponents: [TodoDialogComponent],
})
export class TodoModule {}
