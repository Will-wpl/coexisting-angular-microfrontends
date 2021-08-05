import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ReturnHero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { CIPId: 1, CIPName : 'Dr Nice' ,updateTime:'2021-06-03', Status :'This is Dr Nice comments'},
      { CIPId: 2, CIPName : 'Dr Nice' ,updateTime:'2021-06-03', Status :'This is Dr Nice comments'},
      { CIPId: 3, CIPName : 'Dr Nice' ,updateTime:'2021-06-03', Status :'This is Dr Nice comments'},
      { CIPId: 4, CIPName : 'Dr Nice' ,updateTime:'2021-06-03', Status :'This is Dr Nice comments'},
      { CIPId: 5, CIPName : 'Dr Nice' ,updateTime:'2021-06-03', Status :'This is Dr Nice comments'},
      { CIPId: 6, CIPName : 'Dr Nice' ,updateTime:'2021-06-03', Status :'This is Dr Nice comments'}
    ];
    return {heroes};
  }

  genId(heroes: ReturnHero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.CIPId)) + 1 : 11;
  }
}
