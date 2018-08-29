import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public title : string = 'Event_binding';
  public count : number = 10;
  public username : string = "";
  public name : string = ""; 


  public onClickMe(event){
  	console.log(event.target.innerText)

  }
   public onDBClickMe(event){
  	console.log(event.target.innerText)

  }
  public onIncreament(){
  		this.count += 1;
  }
  public ondecreament(){
  		this.count -= 1;
  }

  public  onKeyUp(event){
  		console.log(event.target.value);
  		this.username = event.target.value;
  }
  public onKeyUpEnter(event){
  		this.name = event.target.value;
  }


}
