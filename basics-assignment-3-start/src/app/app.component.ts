import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplayed:boolean = false;
  clickList = [];

  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
    this.clickList.push(new Date());
  }
}
