import { Component, OnInit } from '@angular/core'

import {Router,ActivatedRoute} from '@angular/router'

//services
import {StaffService} from './../staff.service'
import{Subscription,Observable} from 'rxjs';
import {HttpGetService} from './../../../../Http-Services/http-get.service'
//model
import {Staff} from './../../../../model/staff.class'

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
	public list : Staff[] = [];
  public staff : Staff = null;

  public isDisplay : boolean ;
  public subcription: Subscription;
  public listStaff: Staff[];
  public api: string="http://192.168.0.108:9999/test/getAll";
  constructor(
  	public staffService: StaffService,
    public routerService: Router,
    public _httpGet: HttpGetService
  	) { 
		
  }

  ngOnInit() {
	  this.list = this.staffService.getAllList();
	  this.getData();
  }
   
   
getData(){
  console.log('start ...');
  this.subcription= this._httpGet.getAll(this.api).subscribe(data=>{
    this.listStaff = data.body;
    console.log('Phuong : ' + this.listStaff);
  },error => {
    console.log('error : ' + error);
  })
}

}
