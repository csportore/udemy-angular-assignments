import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username:string = '';
  isNameEmpty:boolean = false;
  buttonText:string = 'Am I Clickable?'

  constructor() {
    this.isNameEmpty = this.username.length <= 0 ? true : false;
  }

  ngOnInit(): void {
  }
  
  checkIfNameIsEmpty(event: Event) {
    if ((<HTMLInputElement> event.target).value) {
      this.isNameEmpty = false;
      this.buttonText = 'Yes, I am!';
    } else {
      this.clearUsername();
    }
  }

  clearUsername() {
    this.isNameEmpty = true;
    this.username = '';
    this.buttonText = 'Am I Clickable?';
  }
}
