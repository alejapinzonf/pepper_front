import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Speech', url: '/speech', icon: 'chatbubbles' },
    { title: 'Postures', url: '/postures', icon: 'accessibility' },
    { title: 'Move', url: '/move', icon: 'move' },
    { title: 'Tablet', url: '/tablet', icon: 'tablet-landscape' },
    { title: 'Camera', url: '/camera', icon: 'camera' },
  ];

  constructor() {}
}