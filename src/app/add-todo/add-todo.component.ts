import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/typings/Todo';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  email = '';

  todo: Todo = {
    id: null,
    title: '',
    description: '',
    finished: false,
    date: ''
  }

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
  }

  enviarForm() {
    this.todoService.addTodo(this.todo).subscribe(() => {
      alert('Concluído');
      this.router.navigateByUrl('todos');
    })
  }
}
