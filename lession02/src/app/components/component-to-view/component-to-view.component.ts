





import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public name : string = 'tangkhanhnguyen';
  public age : number = 20;
  public idMarried : boolean = false;

  public user : object = {
  	name : "tang khanh nguyen",
  	age  : 22,
  	isMarried : true
  }
  public imgWidth : number = 300;
  public isValid : boolean = false;
  public table_width : number = 300;
  public isBorder : boolean = true;
  public isChecked :number = 0; // 1 : add class, 2 : remove class
  public isSpecial : boolean = false;
  public size : number = 20;

  showInform(){

  	return `name : ${this.user['name']}` 
  }
  public imgLink : string  = 'assets/image/download.jpg';
  public link : string = 'https://www.youtube.com/watch?v=aUKIYOqYfhw&list=PLJ5qtRQovuENHYHqlQP5XT7zwbCA5Q5He&index=4';
  public textLink : string = "go to youtube";

}
