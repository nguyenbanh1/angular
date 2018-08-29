import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import {Staff} from './../model/staff.class'
@Injectable({
	providedIn: 'root'
})
export class HttpGetService {

	constructor(
		private _httpClient: HttpClient
	) { }

	getAll(api :string):Observable<HttpResponse<Staff[]>>{
	return this._httpClient.get<Staff[]>(api,{observe:"response"}).pipe(catchError(this.errorHandle));


  }

  errorHandle(error: HttpErrorResponse){
	return throwError(error.message || "Serve Error");
  }
}
