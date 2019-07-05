import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-cep-texto',
  templateUrl: './cep-texto.component.html',
  styleUrls: ['./cep-texto.component.css']
})
export class CepTextoComponent implements OnInit {

  cep: any = [];

  cepTexto = '';

  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  buscarCep() {
    this.cepService.getCep(this.cepTexto).subscribe(
      res => {
        this.cep = res;
      },
      erro => {
        console.log(erro);
      }
    )
  }

}