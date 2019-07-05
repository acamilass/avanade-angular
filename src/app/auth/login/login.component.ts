import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  senha = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.email, this.senha);

    this.authService.login(this.email, this.senha).subscribe(
      (res: any) => {
        alert('Usuário logado com sucesso');
        console.log(res);
        localStorage.setItem('token', res.idToken);

        this.authService.setUser({
          email: res.email,
        })
      },
      erro => {
        console.log(erro);
        switch(erro.error.error.message) {
          case 'EMAIL_NOT_FOUND':
            alert('E-mail não encontrado');
            break;
          case 'INVALID_PASSWORD':
            alert('Senha inválida');
            break;
          default:
            alert('Houve um erro');
            break;
        }
      }
    )
  }

}
