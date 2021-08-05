import { Component, OnInit } from '@angular/core';

import { Hero,ReturnHero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: ReturnHero[] = [];
  loading: boolean = false;
  cipModel: Hero = {
    OppId: 1,
    CIPName:'',
    updateTime:'',
    Comment:''
  };
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.loading = true;
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes;
      this.loading = false;
    });
  }

  add(): void {
    this.loading = true;
    this.heroService.addHero(this.cipModel)
      .subscribe(res => {
        this.getHeroes();
      });
  }

  delete(hero: ReturnHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.Id).subscribe();
  }

}
