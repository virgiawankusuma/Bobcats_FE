import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  title = "Card 2";
  text = "This is the text of the card 2.";

  constructor() { }

  ngOnInit(): void {
  }

}
