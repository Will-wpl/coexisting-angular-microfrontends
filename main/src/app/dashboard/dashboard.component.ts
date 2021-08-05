import { Component, OnInit } from '@angular/core';
import { Hero, ReturnHero } from '../hero';
import { HeroService } from '../hero.service';
import { assetUrl } from 'src/single-spa/asset-url';
import {forkJoin as observableForkJoin} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  loading: boolean = true;
  cips: Hero[] = [];
  reviews: ReturnHero[] = [];
  users: any[] = [];
  logo = assetUrl('Acc_Logo_All_White_RGB.png');
  img1 = assetUrl('11240.jpg');
  symbol = assetUrl('symbol.png');
  Cumulus_clouds3 = assetUrl('Cumulus_clouds3.jpg');
  img2 = assetUrl('11416.jpg');
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.loading = true;
    observableForkJoin([
      this.heroService.getHeroes(),
      this.heroService.getCips(),
      this.heroService.getUsers()
    ]).subscribe((res) => {
      this.reviews = res[0];
      this.cips = res[1];
      this.users = res[2];
      this.loading = false;
    });
    // 本地nodejs接口数据
    // this.heroService.getNodePro().subscribe(res=>{
    //   console.log(res);
    // })
  }
}
