import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pUser = new BehaviorSubject(null);

  currentUser = this.pUser.asObservable();

  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCKJE3thqNA329tbV_lGBx5J8iXKfFnSGA', {
      email, 
      password
    });
  }

  createAccount(email, password) {
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCKJE3thqNA329tbV_lGBx5J8iXKfFnSGA', {
      email,
      password
    });
  }

  verifyToken(token) {
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyCKJE3thqNA329tbV_lGBx5J8iXKfFnSGA', {
      idToken: token
    })
  }

  setUser(user) {
    this.pUser.next(user);
  }

  logout() {

  }
}
