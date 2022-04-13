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
  ElementRef,
  ContentChild
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

  @ContentChild('contentParagraph')
  contentParagraph!:ElementRef;

  constructor() {
    console.log(`constructer called!`);
  }
  
  ngOnChanges(changes:SimpleChanges){
    console.log(`ngOnChanges called!`);
    console.log(changes);
    // alert('Succesfully changed!');
  }
  
  ngOnInit(): void {
    console.log(`ngOnInit called!`);
  }
  
  ngDoCheck(): void {
    console.log(`ngDoCheck called!`);
  }
  
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit called!`);
    console.log(`content paragraph: ${this.contentParagraph.nativeElement.innerText}`);
  }
  
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked called!`);
  }
  
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit called!`);
    console.log(`badge: ${this.listBadge.nativeElement.textContent}`);
    console.log(`content paragraph: ${this.contentParagraph.nativeElement.innerText}`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked called!`);
  }
  
  ngOnDestroy(): void {
    console.log(`ngOnDestroy called!`);
  }

}
