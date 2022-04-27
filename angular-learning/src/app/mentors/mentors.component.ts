import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MentorsService } from './mentors.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'user_type', 'email', 'user_status'];

  dataSource!:MatTableDataSource<any>;

  loading = false;

  constructor(
    private mentorsService: MentorsService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.mentorsService.getMentors().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.loading = false;
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }


}
