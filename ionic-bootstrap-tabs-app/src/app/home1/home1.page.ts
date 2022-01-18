import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
objects;
  constructor() { }

  ngOnInit() {
    this.objects = [
      {
        icon: 'person',
        text:'Profile'
      },
      {
        icon: 'bicycle',
        text:'Bicycle'
      },
      {
        icon: 'call',
        text:'Call'
      },
      {
        icon: 'build',
        text:'Build'
      },
      {
        icon: 'Cart',
        text:'Cart'
      },
      {
        icon: 'folder',
        text:'Folder'
      },
      {
        icon: 'cloud',
        text:'Cloud'
      },
      {
        icon: 'cube',
        text:'Cube'
      },

    ]
  }

}
