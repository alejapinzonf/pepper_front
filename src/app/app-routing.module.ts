import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'speech',
    loadChildren: () => import('./speech/speech.module').then( m => m.SpeechPageModule)
  },
  {
    path: 'direction',
    loadChildren: () => import('./direction/direction.module').then( m => m.DirectionPageModule)
  },
  {
    path: 'postures',
    loadChildren: () => import('./postures/postures.module').then( m => m.PosturesPageModule)
  },
  {
    path: 'move',
    loadChildren: () => import('./move/move.module').then( m => m.MovePageModule)
  },
  {
    path: 'tablet',
    loadChildren: () => import('./tablet/tablet.module').then( m => m.TabletPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
