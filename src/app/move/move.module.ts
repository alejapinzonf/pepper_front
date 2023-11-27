import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovePageRoutingModule } from './move-routing.module';

import { MovePage } from './move.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovePageRoutingModule
  ],
  declarations: [MovePage]
})
export class MovePageModule {}
