import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MentorsService } from '../mentors.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['no', 'name', 'user_type', 'email', 'user_status'];

  dataSource = new MatTableDataSource([]);

  loading = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private mentorsService: MentorsService
  ) { }

  ngOnInit(): void {
    this.mentorsService.getMentors().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.loading = false;
      console.log(data);
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: any, filter: string): boolean => {
      const searchString = JSON.parse(filter);

      const nameFound = 
        data.name
        .toString()
        .trim()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .indexOf(searchString.name.toLowerCase()) !== -1;
        
        const userTypeFound = 
        data.company.user_type
        .toString()
        .trim()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .indexOf(searchString.user_type.toLowerCase()) !== -1;

      const emailFound = 
        data.email
        .toString()
        .trim()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .indexOf(searchString.email.toLowerCase()) !== -1;

      const userStatusFound =
        data.user_status
        .toString()
        .trim()
        .toLowerCase()
        .indexOf(searchString.user_status.toLowerCase()) !== -1;

      return nameFound || userTypeFound || emailFound || userStatusFound;
    };
    return myFilterPredicate;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
