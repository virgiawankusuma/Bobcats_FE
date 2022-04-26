import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieLibraryService } from '../movie-library.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors:any

  constructor(
    private movieLibraryService: MovieLibraryService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.actors = this.movieLibraryService.actors;
  }

  movieList(){
    this.router.navigate(['/movie-list']);
  }

  actorList(){
    this.router.navigate(['/actor-list']);
  }

}
