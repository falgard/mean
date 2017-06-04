import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { SkillsComponent } from './skills/skills.component';

import { ElasticSearchService } from './elasticsearch.service';
import { PostsService } from './posts.service';
import { ConsultantsService } from './consultants.service';
import { SkillsService } from './skills.service';
import { ConsultantDetailComponent } from './consultant-detail/consultant-detail.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ConsultantsComponent,
    SkillsComponent,
    ConsultantDetailComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ElasticSearchService, PostsService, ConsultantsService, SkillsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
