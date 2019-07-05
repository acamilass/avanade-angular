import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-contador-btn',
  templateUrl: './contador-btn.component.html',
  styleUrls: ['./contador-btn.component.css']
})
export class ContadorBtnComponent implements OnInit {

  cont = 0;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.todoService.cont.subscribe(value => {
      this.cont = value;
    })
  }

  // getAumentar() {
  //   this.todoService.aumentar();
  // }

}
