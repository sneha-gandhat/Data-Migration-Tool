import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    // var typed = new Typed('#typed', {
    //   stringsElement: '#typed-strings'
    // });

  }

  ngOnInit(): void {
      var typed = new Typed('.typed-text', {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
       fadeOut: true,
       fadeOutClass: 'typed-fade-out',
       loop: true,
       showCursor: false,
      cursorChar: '|',
      autoInsertCss: true,
    });
    //var typed = new Typed('.typed-text', options);
   
  }
  
}
