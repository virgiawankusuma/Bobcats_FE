import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  col_6 = 'col-6 mb-3';

  btnChange = 'btn btn-secondary';
  btnAdd = 'btn btn-primary';
  btnDelete = 'btn btn-danger ms-2';
  
  textStatus = 'No changes to the text.';
  textChanged = false;
  cardName = 'Card';
  cards = [
    'Card 1', 'Card 2'
  ]


  constructor() {}

  ngOnInit(): void {
  }

  onChangeText(){
    this.textStatus = 'Text changed';
    this.textChanged = true;
  }

  onAddCard(){
    this.cards.push(this.cardName);
  }

  onDeleteCard(){
    this.cards.pop();
  }

}
