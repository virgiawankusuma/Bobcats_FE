import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  listsItem = [{type:'Basic List', name:'List Item', content:'Just a list!'}];
  newListName = '';
  newListContent = '';
  lists = [
    {type:'Basic List', name:'List Item', content:'Just a list!'},
    {type:'Basic List', name:'List Item', content:'Just a list!'}
  ]
  onListAdded(listData:{listName:string, listContent:string}){
    this.listsItem.push({
      type:'Basic List',
      name:listData.listName,
      content:listData.listContent
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
