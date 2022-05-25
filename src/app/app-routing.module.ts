import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveportalComponent } from './liveportal/liveportal.component';

const routes: Routes = [
  { path: '', redirectTo: '/live', pathMatch: 'full' },
  { path: 'live', component: LiveportalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
