import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  title = "Card 1";
  text = "This is the text of the card 1.";

  constructor() { }

  ngOnInit(): void {
  }

}
