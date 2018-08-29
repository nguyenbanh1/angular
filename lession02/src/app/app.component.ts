import { Component,OnInit,OnDestroy } from '@angular/core'; //
import { TodoService } from './services/todo.service'; //
import { Subscription } from 'rxjs';//
import { todo } from './model/todo.class';
import { Login } from './model/login.class';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit,OnDestroy{ // implement 2 lớp
  
	public subscription : Subscription;
	public todos : todo[] = [];
	public completed : boolean;
	public title : string;
  username : string;
  password :string;

  constructor(
  		public todoService : TodoService
  	){}

  public onAddTodo(){
  	let new_todo = new todo(this.todos.length + 1,this.title,this.completed);
  	console.log(new_todo);

  	this.subscription = this.todoService.addTodo(new_todo).subscribe(data =>{
  		console.log(data);

  	},error =>{
  		console.log(error);
  	});

  }

  ngOnInit(){
  }

  Login(){

    this.subscription = this.todoService.Dangnhap().subscribe(
        data =>{
           console.log(data.headers);
           data.headers.keys().map(key => console.log(`${key}: ${data.headers.get(key)}`));
        },error =>{
            console.log(error);
        });

  }

  getUserName(){
    this.subscription = this.todoService.getUsername().subscribe(
      data =>{
          console.log(data.headers.get("nguyen"));
      },error =>{
        console.log(error);
      }
      )
  }

  loadData(){
  	this.subscription = this.todoService.getAllTodo().subscribe(
  		data =>{
  			this.todos = data;

  		},error =>{
  			console.log(error);
  		});
  }

  ngOnDestroy(){
  	if(this.subscription){
  		this.subscription.unsubscribe();
  	}

  }
  test(){
    this.subscription = this.todoService.test().subscribe(
        data =>{
            console.log(data);
            data.headers.keys().map(key => console.log(`${key}: ${data.headers.get(key)}`));

        },error=>{
            console.log(error);
        }

      )
  }

}
