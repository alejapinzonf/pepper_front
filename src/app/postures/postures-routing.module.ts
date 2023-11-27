import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosturesPage } from './postures.page';

const routes: Routes = [
  {
    path: '',
    component: PosturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosturesPageRoutingModule {}
