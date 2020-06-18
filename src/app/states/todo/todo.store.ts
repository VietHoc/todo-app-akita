import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Todo} from 'src/app/shared/models/todo.model';

export interface TodoState extends EntityState<Todo> {}

@Injectable({providedIn: 'root'})
@StoreConfig({
  name: 'todo',
  cache: {
    ttl: 20000,
  },
})
export class TodoStore extends EntityStore<TodoState, Todo> {
  constructor() {
    super();
  }
}
