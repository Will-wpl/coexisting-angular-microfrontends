import { Component, OnInit } from '@angular/core';
import { Hero, ReturnHero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: ReturnHero[] = [];
  loading: boolean = false;
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
}
