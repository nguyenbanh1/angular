import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
@Component({
  selector: 'app-com-temp-displaying-data',
  templateUrl: './com-temp-displaying-data.component.html'

})
export class ComTempDisplayingDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public titile = 'Tour of Heroes';
  public heroes = [
  	  	new Hero(1, 'Windstorm'),
	    new Hero(13, 'Bombasto'),
	    new Hero(15, 'Magneta'),
	    new Hero(20, 'Tornado')
  ]

  public myHero = this.heroes[0];
  
}
