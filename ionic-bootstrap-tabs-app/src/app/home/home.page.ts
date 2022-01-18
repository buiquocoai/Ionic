import { Component, ComponentFactoryResolver } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subJects;
  pathToFile;
  constructor(private router: Router) {}
  
  ngOnInit(){
    this.pathToFile =""
    this.subJects =[
      {
        img: 'assets/English.png',
        name: 'English'
      }
      ,
      {
        img: 'assets/Statistics.png',
        name: 'Statistics'
      },
      {
        img: 'assets/Mathamatics.png',
        name: 'Mathamatics'
      },
      {
        img: 'assets/Physics.png',
        name: 'Physics'
      },
      {
        img: 'assets/Social Sience.png',
        name: 'Social Sience'
      },  
      {
        img: 'assets/Social Sience1.png',
        name: 'Social Sience1'
      },
      
      {
        img: 'assets/Social Sience1.png',
        name: 'Social Sience1'
      },
      {
        img: 'assets/Social Sience1.png',
        name: 'Social Sience1'
      },
    ]
  }
   
  onClick(){
    
    
  }
}
