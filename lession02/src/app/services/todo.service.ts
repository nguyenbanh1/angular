import { Injectable } from '@angular/core'; // duoc init khi tao service
import { HttpClient,HttpErrorResponse } from '@angular/common/http'; // http
import { Observable } from 'rxjs'; // observable
import { todo } from './../model/todo.class'; //model
import { HttpHeaders,HttpEvent,HttpBackend,HttpResponse } from '@angular/common/http';
import { Staff } from './../model/Staff.class';
import { Login } from './../model/login.class';
import {catchError} from 'rxjs/operators';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import {MyHttpRequest} from './../model/MyHttpRequest.class'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

	public API : string = 'http://localhost:9988/todos'; 
	public login : Login;
  



    public test() : Observable<HttpResponse<any>>{

      let new_header = new HttpHeaders({

        "nguyen" : '321321',
        "Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuZ3V5ZW5iYW5oIiwiZXhwIjoxNTM2MzQxMjMzfQ.uqsOXdeo3LewelyVaE_2d0krCgeg_RVQpPW4YKaUJRK7yfdaa04st12x_xSkKwURMalbix8ErDSXLR_iFvt75w"
      });

      return this.http.get<any>('http://localhost:9999/test/staff',{observe:'response',headers:new_header}).pipe();
    }



  constructor(

  		public http : HttpClient

  	) { }

  public getAllTodo() : Observable<todo[]>{
  	return this.http.get<todo[]>(this.API)
  }


  public addTodo(todo) : Observable<todo>{

	return this.http.post<todo>(this.API,todo);
  }

  public getAllStaff() : Observable<HttpResponse<Staff[]>>{
  	return this.http.get<Staff[]>('http://localhost:9999/test/getAll',{observe:"response",}).pipe();
  }


  public Dangnhap(): Observable<HttpResponse<any>> {

    let formData: FormData = new FormData();
    formData.append("username","nguyenbanh1");
    formData.append("password","nguyenbanh1");


    return this.http.post<any>('http://localhost:9999/login',formData,{observe:"response"}).pipe();
  }

  getUsername() : Observable<HttpResponse<string>>{
    return this.http.get<string>('http://localhost:9999/test/staff',{observe:'response'});
  }
}