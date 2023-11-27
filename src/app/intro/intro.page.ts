import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router:Router, private menuCtrl: MenuController) { }
  

  ngOnInit() {
    this.menuCtrl.enable(false);
    setTimeout(() => {
      this.router.navigateByUrl('/direction')
    },2000)
  }

}
