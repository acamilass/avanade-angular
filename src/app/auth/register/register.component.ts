import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  senha = '';
  confirmarSenha = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log(this.email, this.senha);

    if(this.senha !== this.confirmarSenha) {
      alert('Senhas não coincidem');
      return;
    };

    this.authService.createAccount(this.email, this.senha).subscribe(
      (res: any) => {
        alert('Usuário criado com sucesso');
        console.log(res);
        localStorage.setItem('token', res.idToken);

        this.authService.setUser({
          id: res.localId,
          email: res.email,
        })
      }
    )
  }
}
