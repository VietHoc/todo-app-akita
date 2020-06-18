import {Component, OnInit} from '@angular/core';
import {Todo} from 'src/app/shared/models/todo.model';
import {Observable} from 'rxjs';
import {TodoQuery, TodoService} from 'src/app/states/todo';
import {MatDialog} from '@angular/material/dialog';
import {TodoDialogComponent} from '../todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-todo-management',
  templateUrl: './todo-management.component.html',
  styleUrls: ['./todo-management.component.scss'],
})
export class TodoManagementComponent implements OnInit {
  constructor(
    private todoQuery: TodoQuery,
    private todoService: TodoService,
    private dialog: MatDialog
  ) {}

  public listTodo$: Observable<Todo[]>;
  ngOnInit() {
    this.todoService.getAllTodo().subscribe();
    this.listTodo$ = this.todoQuery.getTodoFilter();
  }

  public deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe();
  }

  public onChangeSearchValue(searchValue: string): void {
    this.listTodo$ = this.todoQuery.getTodoFilter(searchValue);
  }

  public openModalAddTodo(todo?: Todo): void {
    this.dialog.open(TodoDialogComponent, {
      width: '500px',
      data: todo,
    });
  }
}
