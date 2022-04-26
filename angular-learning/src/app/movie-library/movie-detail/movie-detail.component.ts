import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieLibraryService } from '../movie-library.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: any

  constructor(
    private movieLibraryService: MovieLibraryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.movie = this.movieLibraryService.getMovie(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.movie = this.movieLibraryService.getMovie(+params['id']);
      }
    )
  }

}
