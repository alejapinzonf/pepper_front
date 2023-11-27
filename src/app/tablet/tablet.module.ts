import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabletPageRoutingModule } from './tablet-routing.module';

import { TabletPage } from './tablet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabletPageRoutingModule
  ],
  declarations: [TabletPage]
})
export class TabletPageModule {}
