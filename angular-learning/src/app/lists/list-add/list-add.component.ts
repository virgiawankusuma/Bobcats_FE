import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {
  @Output() listCreated = new EventEmitter<{inputName:string, inputContent:string}>();
  newListName = '';
  newListContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddList(){
    this.listCreated.emit({
      inputName:this.newListName, 
      inputContent:this.newListContent
    });
  }

}
