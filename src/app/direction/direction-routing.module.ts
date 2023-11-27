import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectionPage } from './direction.page';

const routes: Routes = [
  {
    path: '',
    component: DirectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectionPageRoutingModule {}
