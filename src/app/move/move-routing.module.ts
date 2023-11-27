import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovePage } from './move.page';

const routes: Routes = [
  {
    path: '',
    component: MovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovePageRoutingModule {}
