import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  encapsulation: ViewEncapsulation.None // ShadowDom // Emulated
})
export class ListItemComponent implements OnInit {
  @Input('listElement')
  element!: { type: string; name: string; content: string; };

  constructor() { }

  ngOnInit(): void {
  }

}
