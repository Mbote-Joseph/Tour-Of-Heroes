import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Joseph' },
      { id: 2, name: 'Mbote' },
      { id: 3, name: 'Moses' },
      { id: 4, name: 'Mwangi' },
      { id: 5, name: 'Macharia' },
      { id: 6, name: 'kangethe' },
      { id: 7, name: 'John' },
      { id: 8, name: 'Kamau' },
      { id: 9, name: 'Peter' },
      { id: 10, name: 'Juma' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}