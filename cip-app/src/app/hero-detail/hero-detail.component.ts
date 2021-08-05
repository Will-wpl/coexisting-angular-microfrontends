import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ReturnHero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: ReturnHero;
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.loading = true;
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.hero = heroes.find(item=>{
        return item.Id == id;
      })
      this.loading = false;
    });
  }

  // getHero(): void {
  //   const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  //   this.heroService.getHero(id)
  //     .subscribe(hero => this.hero = hero);
  // }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   if (this.hero) {
  //     this.heroService.updateHero(this.hero)
  //       .subscribe(() => this.goBack());
  //   }
  // }
}
