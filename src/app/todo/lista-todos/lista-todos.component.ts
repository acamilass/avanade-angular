import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/typings/Todo';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService, private authService: AuthService) { }

  ngOnInit() {
    // this.getTodos();
    this.authService.currentUser.subscribe(user => {
      this.todoService.getTodos(user.id).subscribe(todos => {
        this.todos = todos;
      });
    })
    
  }

  onDeleteItem(id) {
    this.todoService.deleteTodo(id).subscribe(res => {
      alert('ToDo excluído com sucesso');

      this.todos = this.todos.filter(todo => todo.id !== id);
    });
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
