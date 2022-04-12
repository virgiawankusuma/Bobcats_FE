import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  listItem = [{type:'Basic List', name:'List Item', content:'Just a list!'}];
  lists = [
    {type:'Basic List', name:'List Item', content:'Just a list!'},
    {type:'Basic List', name:'List Item', content:'Just a list!'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  
  onAddList(listData:{inputName:string, inputContent:string}){
    this.lists.push({
      type:'Basic List',
      name:listData.inputName,
      content:listData.inputContent
    });
  }

}
