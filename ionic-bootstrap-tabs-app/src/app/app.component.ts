import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';  

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any; 
  appPages: any; 
  selectedIndex: any;
  labels: any;
  constructor(private platform: Platform,  
  ) {
    this.sideMenu();  
    // this.initializeApp();  
    }

    initializeApp() {  
      this.platform.ready().then(() => {  
        // this.statusBar.styleDefault();   
        // this.splashScreen.hide();  
      });  
    }  
    sideMenu() {  
      this.navigate =   
      [  
          { 
          title : 'App',
          url   : '/apps',
          icon  : 'apps' 
          },
        { 
          title : 'Book',  
          url   : '/book',  
          icon  : 'book'  
        },   
        {  
          title : 'Paint',  
          url   : '/paint',  
          icon  : 'brush'   
        },  
        {  
          title : 'Contacts',  
          url   : '/contacts',  
          icon  : 'contacts'  
        },   
        {
            title : 'Facebook',
            url   : '/facebook.com',
            icon  : 'logo-facebook'
        },
      ];  
    }  
}
