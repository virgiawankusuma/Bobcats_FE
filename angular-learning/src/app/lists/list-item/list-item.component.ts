import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  encapsulation: ViewEncapsulation.None // ShadowDom // Emulated
})
export class ListItemComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input('listElement')
  element!: { type: string; name: string; content: string; };

  @Input()
  type!: string;

  @ViewChild('listBadge')
  listBadge!: ElementRef;

  constructor() {
    console.log(`constructer called!`);
  }
  
  ngOnChanges(changes:SimpleChanges){
    console.log(`ngOnChanges called!`);
    console.log(changes);
  }
  
  ngOnInit(): void {
    console.log(`ngOnInit called!`);
  }
  
  ngDoCheck(): void {
    console.log(`ngDoCheck called!`);
  }
  
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit called!`);
  }
  
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked called!`);
  }
  
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit called!`);
    console.log(`badge: ${this.listBadge.nativeElement.textContent}`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked called!`);
  }
  
  ngOnDestroy(): void {
    console.log(`ngOnDestroy called!`);
  }

}
