import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {TodoStore, TodoState} from './todo.store';
import {TodoHttpService} from 'src/app/shared/http-services/todo.service';
import {map} from 'rxjs/operators';
import {Todo} from 'src/app/shared/models/todo.model';
import {cacheable} from '@datorama/akita';

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(
    protected store: TodoStore,
    private todoHttpService: TodoHttpService
  ) {}

  public getAllTodo() {
    const request$ = this.todoHttpService
      .getListTodo()
      .pipe(map((listTodo) => this.store.set(listTodo)));

    return cacheable(this.store, request$);
  }

  public addTodo(todo: Todo) {
    return this.todoHttpService
      .postTodo(todo)
      .pipe(map((newTodo) => this.store.add(newTodo)));
  }

  public updateTodo(todo: Todo) {
    return this.todoHttpService
      .putTodo(todo)
      .pipe(map((newTodo) => this.store.update(newTodo.id, newTodo)));
  }

  public deleteTodo(todo: Todo) {
    return this.todoHttpService
      .deleteTodo(todo)
      .pipe(map((_) => this.store.remove(todo.id)));
  }
}
