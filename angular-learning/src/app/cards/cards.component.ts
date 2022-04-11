import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  col_6 = 'col-6 mb-3';
  btnChange = 'btn btn-primary';
  allowedChangeButton = false;
  textChangingStatus = 'No changes to the text.';
  textChanged = false;
  yourName = 'bro';


  constructor() { 
    setTimeout(() => {
      this.allowedChangeButton = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  onCreatedCard(){
    this.textChangingStatus = 'Text changed ';
    this.textChanged = true;
  }

}
