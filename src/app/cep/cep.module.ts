import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepComponent } from './cep/cep.component';
import { CepTextoComponent } from './cep-texto/cep-texto.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CepTextoComponent
  },
  {
    path: ':id',
    component: CepComponent
  }
]


@NgModule({
  declarations: [
    CepComponent,
    CepTextoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CepModule { }
