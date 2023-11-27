import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabletPage } from './tablet.page';

const routes: Routes = [
  {
    path: '',
    component: TabletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabletPageRoutingModule {}
