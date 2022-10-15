import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationDetailComponent } from './components/application-detail/application-detail.component';

const routes: Routes = [
  { path: '', component: ApplicationListComponent, pathMatch: 'full' },
  { path: 'detail', component: ApplicationDetailComponent },
  { path: 'detail/:id', component: ApplicationDetailComponent },
  { path: 'detail/:id/:firstName/:lastName', component: ApplicationDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
