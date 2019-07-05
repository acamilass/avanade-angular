import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo/todo.service';
import { map, debounceTime } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cont = 0;
  email = '';
  
  constructor(public todoService: TodoService, private authService: AuthService) {
    
  }

  logout() {
    localStorage.removeItem('token');
    this.authService.setUser(null);
  }
  
  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token) {
      this.authService.verifyToken(token).subscribe(
        (res: any)=> {
          this.authService.setUser({
            email: res.users[0].email 
          })
        }
      )
    }

    this.authService.currentUser.subscribe(
      res => {
        if (res !== null) {
          this.email = res.email;
        }
      }
    )


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
