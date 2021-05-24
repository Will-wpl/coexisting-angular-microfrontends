import { Component } from '@angular/core';

@Component({
  selector: 'navbar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'navbar';
  active = '';
  constructor() {}

  ngOnInit() {
    this.active = this.checkUrlRouter('/app1')?'app1': this.checkUrlRouter('/app2')?'app2':'';
  }

  checkUrlRouter(type){
    return window.location.href.includes(type);
  }
  
  clickActive(type) {
    this.active = '';
    this.active = type;
  }
}
