import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { ComponentToViewComponent } from './components/component-to-view/component-to-view.component';
import { ViewToComponentComponent } from './components/view-to-component/view-to-component.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { DirectivesTructuralComponent } from './components/directives-tructural/directives-tructural.component';
import { ComTempDisplayingDataComponent } from './components/com-temp-displaying-data/com-temp-displaying-data.component';
import { HttpComponent } from './components/http/http.component';


import { HttpClientModule} from '@angular/common/http';
import { TodoService }  from './services/todo.service' 


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ComponentToViewComponent,
    ViewToComponentComponent,
    TwoWayBindingComponent,
    DirectivesTructuralComponent,
    ComTempDisplayingDataComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
