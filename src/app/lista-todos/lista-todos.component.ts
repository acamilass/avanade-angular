import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from 'src/typings/Todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {

  todos: Todo[] = [];

  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // this.getTodos();
    this.todos$ = this.todoService.getTodos();
  }

  // getTodos() {
  //   this.todoService.getTodos().subscribe(
  //     res => {
  //       this.todos = res;
  //       console.log(res);
  //     },
  //     erro => {
  //       console.log(erro);
  //     })
  // }

}
