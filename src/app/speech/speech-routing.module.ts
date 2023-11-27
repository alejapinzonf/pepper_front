import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeechPage } from './speech.page';

const routes: Routes = [
  {
    path: '',
    component: SpeechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeechPageRoutingModule {}
