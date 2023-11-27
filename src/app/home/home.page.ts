import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isModalOpen = false;
  constructor(private menuCtrl: MenuController) { }
  ngOnInit() {
    this.menuCtrl.enable(true);
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  handlerMessage = '';
  roleMessage = '';
  count = 80;

  increment() {
    this.count+=5;
  }

  decrement() {
    this.count-=5;
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.handlerMessage = 'Alert confirmed';
      },
    },
  ];
  
}
