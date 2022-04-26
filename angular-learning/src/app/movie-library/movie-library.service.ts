import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieLibraryService {

  movies = [
    {
      id: 0,
      name: 'The Shawshank Redemption',
      year: 1994,
      genre: 'Drama',
      director: 'Frank Darabont',
      actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'William Sadler']
    },
    {
      id: 1,
      name: 'The Godfather',
      year: 1972,
      genre: 'Crime',
      director: 'Francis Ford Coppola',
      actors: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Diane Keaton']
    },
    {
      id: 2,
      name: 'The Godfather: Part II',
      year: 1974,
      genre: 'Crime',
      director: 'Francis Ford Coppola',
      actors: ['Al Pacino', 'Robert De Niro', 'Robert Duvall', 'Diane Keaton']
    },
    {
      id: 3,
      name: 'The Dark Knight',
      year: 2008,
      genre: 'Action',
      director: 'Christopher Nolan',
      actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine']
    },
    {
      id: 4,
      name: '12 Angry Men',
      year: 1957,
      genre: 'Drama',
      director: 'Sidney Lumet',
      actors: ['Henry Fonda', 'Lee J. Cobb', 'Ed Begley']
    },
    {
      id: 5,
      name: 'HER',
      year: 2013,
      genre: 'Romance',
      director: 'Spike Jonze',
      actors: ['Joaquin Phoenix', 'Amy Adams', 'Scarlett Johansson', 'Rosamund Pike']
    }
  ]

  actors = [
    {
      id: 0,
      name: 'Tim Robbins',
      age: 63,
    },
    {
      id: 1,
      name: 'Morgan Freeman',
      age: 84,
    },
    {
      id: 2,
      name: 'Bob Gunton',
      age: 62,
    },
    {
      id: 3,
      name: 'William Sadler',
      age: 72,
    },
    {
      id: 4,
      name: 'Marlon Brando',
      age: 72,
    },
    {
      id: 5,
      name: 'Al Pacino',
      age: 79,
    },
    {
      id: 6,
      name: 'James Caan',
      age: 72,
    },
    {
      id: 7,
      name: 'Richard S. Castellano',
      age: 72,
    },
    {
      id: 8,
      name: 'Robert De Niro',
      age: 77,
    },
    {
      id: 9,
      name: 'Robert Duvall',
      age: 77,
    }
  ]

  getMovie(id:number) {
    const movie = this.movies.find(movie => movie.id === id);
    return movie;
  }

  getActor(id:number) {
    const actor = this.actors.find(actor => actor.id === id);
    return actor;
  }

  constructor() { }
}
