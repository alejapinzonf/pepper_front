import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeechPageRoutingModule } from './speech-routing.module';

import { SpeechPage } from './speech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeechPageRoutingModule
  ],
  declarations: [SpeechPage]
})
export class SpeechPageModule {}
