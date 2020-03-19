import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BienvenidoPage } from './bienvenido.page';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { PipesModule } from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RoundProgressModule,
    IonicModule,
   
    RouterModule.forChild([{ path: '', component: BienvenidoPage }])
  ],
  declarations: [BienvenidoPage]
})
export class BienvenidoPageModule {
  

}
