import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ConsultantsComponent } from './consultants/consultants.component';

import { PostsService } from './posts.service';
import { ConsultantsService } from './consultants.service';


const ROUTES = [
  {
    path: '',
    redirectTo: 'consultants',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'consultants',
    component: ConsultantsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ConsultantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService, ConsultantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
