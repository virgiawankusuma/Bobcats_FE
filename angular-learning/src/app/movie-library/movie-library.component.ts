import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieLibraryService } from './movie-library.service';

@Component({
  selector: 'app-movie-library',
  templateUrl: './movie-library.component.html',
  styleUrls: ['./movie-library.component.css']
})
export class MovieLibraryComponent implements OnInit {

  movies: any;

  constructor(
    private movieLibraryService: MovieLibraryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.movies = this.movieLibraryService.movies;
  }

  movieList(){
    this.router.navigate(['/movie-list']);
  }

  actorList(){
    this.router.navigate(['/actor-list']);
  }

}
