import { Component, OnInit } from '@angular/core';
import { CepService } from '../services/cep.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep: any = {};

  constructor(private cepService: CepService, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(params => {
      console.log(params.id);

      this.cepService.getCep(params.id).subscribe(
        res => {
          this.cep = res;
          console.log(res);
      })
    })

    
  }

}
