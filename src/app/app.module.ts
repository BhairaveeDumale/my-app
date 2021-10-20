import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemopipeComponent } from './Components/demopipe/demopipe.component';
import { ParentComponent } from './parent/parent.component';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, ParentComponent, UserComponent, ChildComponent, PostsComponent, HeaderComponent, TasksComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
