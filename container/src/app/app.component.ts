import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'navbar';
  active = '';
  isShow = true;
  canShow = false;
  constructor(router:Router) {
    router.events.subscribe(es => {
      if(es instanceof NavigationStart) {
        this.active = (es.url.split("/")[1]).split("/")[0];
        if(this.active != ''){
          this.canShow = true;
        }
        if(this.active === 'main'){
          this.isShow = false;
        }else{
          this.isShow = true;
        }
      }
    });
  }

  ngOnInit() {
    if (location.pathname === '/') {
      location.pathname = '/main/dashboard';
    }
  }
  
  clickActive(type) {
    this.active = '';
    this.active = type;
  }
}
