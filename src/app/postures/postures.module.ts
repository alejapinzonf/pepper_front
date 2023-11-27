import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosturesPageRoutingModule } from './postures-routing.module';

import { PosturesPage } from './postures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosturesPageRoutingModule
  ],
  declarations: [PosturesPage]
})
export class PosturesPageModule {}
