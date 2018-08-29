import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-tructural',
  templateUrl: './directives-tructural.component.html',
  styleUrls: ['./directives-tructural.component.css']
})
export class DirectivesTructuralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public isBorder : boolean = true;
  public isShow : boolean = true;
  public userName : String = 'Tăng Khánh Nguyên';
  public isChecked : boolean = false; 
  public age : number;
  public names = ['tang khanh nguyen','tang nguyen','khanh nguyen'];
  public employees = [
    {
      name : "abc",
      nation : "VN"
    },
    {
      name : "abc1",
      nation : "USA"
    },
    {
      name : "abc2",
      nation : "china"
    },
    {
      name : "Tăng Khánh Nguyên",
      nation : "VN"
    }
  ]

  public onToggle(){
  	if(this.isShow == true){
  		this.isShow = false;
  	}
  	else{
  		this.isShow = true;
  	}
  }

  public Check(value){
  	if(value == true){
  		this.isChecked = true;
  	}else{
  		this.isChecked = false;
  	}
  }



}
