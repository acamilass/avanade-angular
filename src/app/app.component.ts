import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cont = 0;
  
  constructor(public todoService: TodoService) {
    
  }
  
  ngOnInit() {
    this.todoService.cont
    .pipe(
      map(x => x * 2),
      debounceTime(2000)
    )
    .subscribe(value => {
      this.cont = value;
    })
  }
}
