import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Todo} from 'src/app/shared/models/todo.model';
import {TodoService} from 'src/app/states/todo';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export enum ACTION {
  ADD,
  EDIT,
}
@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss'],
})
export class TodoDialogComponent implements OnInit {
  public action = ACTION;
  public currentAction = ACTION.ADD;
  public formTodo: FormGroup;
  constructor(
    private todoService: TodoService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo
  ) {}

  ngOnInit() {
    if (!!this.data.name) {
      this.currentAction = ACTION.EDIT;
    }
    this.buildForm();
  }

  private buildForm() {
    this.formTodo = this.fb.group({
      id: this.data.id,
      name: [this.data.name, Validators.required],
      status: this.data.status,
    });
  }

  public onSave(): void {
    if (this.currentAction === ACTION.ADD) {
      this.todoService.addTodo(this.formTodo.value).subscribe();
    } else {
      this.todoService.updateTodo(this.formTodo.value).subscribe();
    }
  }
}
