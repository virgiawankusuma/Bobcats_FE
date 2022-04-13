import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent implements OnInit {
  @Output() listCreated = new EventEmitter<{inputName:string, inputContent:string}>();
  // newListName = '';
  // newListContent = '';
  @ViewChild('listContentInput')
  listContentInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddList(nameInput: HTMLInputElement,){
    console.log(this.listContentInput);
    console.log(nameInput.value);
    this.listCreated.emit({
      inputName:nameInput.value, 
      inputContent:this.listContentInput.nativeElement.value
    });
  }

}
