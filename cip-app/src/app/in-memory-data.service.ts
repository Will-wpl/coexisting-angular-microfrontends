import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ReturnHero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { Id: 1, Name : 'Dr Nice' ,updateTime:'2021-06-03', Comment :'This is Dr Nice comments', OppId: 1},
      { Id: 2, Name : 'Narco',updateTime:'2021-06-03', Comment :'This is Narco comments', OppId: 1 },
      { Id: 3, Name : 'Bombasto',updateTime:'2021-06-03', Comment :'This is Bombasto comments', OppId: 1 },
      { Id: 4, Name : 'Celeritas',updateTime:'2021-06-03', Comment :'This is Celeritas comments', OppId: 1 },
      { Id: 5, Name : 'Magneta',updateTime:'2021-06-03', Comment :'This is Magneta comments', OppId: 1 },
      { Id: 6, Name : 'RubberMan',updateTime:'2021-06-03', Comment :'This is RubberMan comments', OppId: 1 },
      { Id: 7, Name : 'Dynama',updateTime:'2021-06-03', Comment :'This is Dynama comments', OppId: 1 },
      { Id: 8, Name : 'Dr IQ',updateTime:'2021-06-03', Comment :'This is Dr IQ comments', OppId: 1 },
      { Id: 9, Name : 'Magma',updateTime:'2021-06-03', Comment :'This is Magma comments', OppId: 1 },
      { Id: 10, Name : 'Tornado',updateTime:'2021-06-03', Comment :'This is Tornado comments', OppId: 1 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: ReturnHero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.Id)) + 1 : 11;
  }
}
