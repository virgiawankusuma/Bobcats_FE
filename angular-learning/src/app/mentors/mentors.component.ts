import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  openDialog() {
    this.dialog.open(AddComponent);
  }

}
