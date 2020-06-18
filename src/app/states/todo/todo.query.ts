import {Injectable} from '@angular/core';
import {QueryEntity, Order} from '@datorama/akita';
import {TodoStore, TodoState} from './todo.store';
import {map} from 'rxjs/internal/operators/map';

@Injectable({providedIn: 'root'})
export class TodoQuery extends QueryEntity<TodoState> {
  selectVisibilityFilter$ = this.select((state) => state.ui.filter);
  constructor(protected store: TodoStore) {
    super(store);
  }

  public getTodoFilter(search?: string) {
    const todo$ = this.selectAll({
      sortBy: 'name',
      sortByOrder: Order.ASC,
    });
    return !search
      ? todo$
      : todo$.pipe(
          map((todo) =>
            todo.filter(
              (a) =>
                a.name.toLowerCase().includes(search.toLowerCase()) ||
                a.status.toLowerCase().includes(search.toLowerCase())
            )
          )
        );
  }
}
