import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
//service 
import { StaffService } from './../../staff.service'

//model
import { Staff } from './../../../../../model/staff.class'

//validate
import {
  nameValidate,
  dateValidate,
  phoneValidate,
  passportNumberValidate,
  emailValidate,
  atmNumberValidate,
} from './../validation'

@Component({
  selector: 'app-staff-list-add',
  templateUrl: './staff-list-add.component.html',
  styleUrls: ['./staff-list-add.component.scss']
})
export class StaffListAddComponent implements OnInit {

	public list: Staff[] = [];

  //validate
  form: FormGroup;
  name: string;
  code: string;
  birthday: string;
  phone: string;
  address: string;
  temporary: string;
  passportNumber: number;
  dateOfIssue: string;
  placeOfIssue: string;
  email: string;
  atmNumber: string;
  startProbation: string;
  endProbation: string;
  startWorking: string;
  endWorking: string;

  titleAlert: string = 'Thông tin không hợp lệ';

  constructor(
    private staffService: StaffService,
    private fb: FormBuilder,
  ) {
    this.list = this.staffService.getAllList();

    //validate
    this.form = fb.group({
      'name': [null, nameValidate],
      'code': [null, Validators.required],
      'birthday': [null, dateValidate],
      'phone': [null, phoneValidate],
      'address': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])],
      'temporary': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])],
      'passportNumber': [null, passportNumberValidate],
      'dateOfIssue': [],
      'placeOfIssue': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])],
      'email': [null, emailValidate],
      'atmNumber': [null, atmNumberValidate],
      'startProbation': [],
      'endProbation': [],
      'startWorking': [],
      'endWorking': [],
    })
  }

  ngOnInit() {

  }
}
