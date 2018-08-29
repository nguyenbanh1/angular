import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }


  public title : String = 'Two way binding...';


  public name  : String = '';

  public gender : boolean = true;// true : name, false : nữ

}
