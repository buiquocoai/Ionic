import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subJects;
  constructor(private router: Router) {}
  
  ngOnInit(){
    this.subJects =[
      {
        img: '../Assets/img/English.png',
        name: 'English'
      },
      {
        img: 'Assets/img/Statistics.png',
        name: 'Statistics'
      },
      {
        img: 'Assets/img/Mathamatics.png',
        name: 'Mathamatics'
      },
      {
        img: 'Assets/img/Physics.png',
        name: 'Physics'
      },
      {
        img: 'Assets/img/Social Sience.png',
        name: 'Social Sience'
      },
      {
        img: 'Assets/img/Social Sience1.png',
        name: 'Social Sience1'
      },

    ]
  }
   
  onClick(){
    
  }
}
