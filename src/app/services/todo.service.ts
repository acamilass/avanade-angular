import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/typings/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private pCont = new BehaviorSubject(0);
  cont = this.pCont.asObservable();

  constructor(private httpClient: HttpClient) { }

  aumentar() {
    this.pCont.next(this.pCont.value + 1);
  }

  diminuir() {
    this.pCont.next(this.pCont.value - 1);
  }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos');
  }
}
