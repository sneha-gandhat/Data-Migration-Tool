import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  invalidCharacterList: string[] = ['!', '@', '#', '$', '%', '^', '&', '*'];
  tempInvalidCharacterList: string[];
  selectable = true;
  removable = true;
  isNewCharAdd: boolean = false;
  newChar: string;
  newReplacedChar: string;
  newReplacedMultipleChar: string;
  selectedChar: string = " ";
  Flag1: boolean = false;
  Flag2: boolean = false;

  constructor() {

    this.tempInvalidCharacterList = this.invalidCharacterList;
    console.log("this.tempInvalidCharacterList....."+this.tempInvalidCharacterList);
  }

  ngOnInit(): void {
  }

  expandToAddInvalidChar() {
    this.isNewCharAdd = true;
  }

  //Show Single Char replacement Div on click of radio button
  enableSingleCharDiv() {
    this.Flag1 = true;
    this.Flag2 = false;
  }

  //Show Multiple Char replacement Div on click of radio button
  enableMultipleCharDiv() {
    this.Flag2 = true;
    this.Flag1 = false;
  }

  //Hide Div on click of radio button
  disableDiv() {
    this.Flag1 = false;
    this.Flag2 = false;
  }

  addNewInvalidChar() {
    this.invalidCharacterList.push(this.newChar);
    this.newChar = " ";
  }

  replaceSingleNewChar() {

  }

  replaceMultipleNewChar(char: string) {
    const index: number = this.tempInvalidCharacterList.indexOf(char);
    if (index !== -1) {
      this.tempInvalidCharacterList.splice(index, 1);
    }
    this.newReplacedMultipleChar = " ";
  }

  remove(char: string): void {
    const index = this.invalidCharacterList.indexOf(char);

    if (index >= 0) {
      this.invalidCharacterList.splice(index, 1);
    }
  }
}
