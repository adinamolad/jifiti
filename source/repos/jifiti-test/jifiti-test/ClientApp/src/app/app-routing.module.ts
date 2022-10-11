import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { ApplicationListComponent } from './application-list/application-list.component';

const routes: Routes = [
  { path: '', component: ApplicationListComponent, pathMatch: 'full' },
  { path: 'detail', component: ApplicationDetailComponent },
  { path: 'detail/:id', component: ApplicationDetailComponent },
  { path: 'detail/:id/:firstName/:lastName', component: ApplicationDetailComponent },
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
