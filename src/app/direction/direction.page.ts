import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.page.html',
  styleUrls: ['./direction.page.scss'],
})
export class DirectionPage implements OnInit {

  person={name:''};
  pepper={ip:'', port:'', battery:'', volumen:'' };

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/home')
    },2000)
  }

}
