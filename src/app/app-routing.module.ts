import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultantsComponent } from './consultants/consultants.component';
import { ConsultantDetailComponent } from './consultant-detail/consultant-detail.component';
import { SkillsComponent } from './skills/skills.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: '', redirectTo: '/consultants', pathMatch: 'full' },
  { path: 'consultants',  component: ConsultantsComponent },
  { path: 'detail/:id', component: ConsultantDetailComponent },
  { path: 'skills',     component: SkillsComponent },
  { path: 'tools',     component: ToolsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
