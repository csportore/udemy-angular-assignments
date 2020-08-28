import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [
    `
      .white-letters {
        color: white;
      }
    `
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isDisplayed:boolean = false;
  clickList = [];
  clickID = 0;

  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
    this.clickList.push(++this.clickID);
  }

}
