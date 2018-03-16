import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', loadChildren: './contact-list/contact-list.module#ContactListModule'},
  {path: 'search', loadChildren: './filter-search/filter-search.module#FilterSearchModule'},
  {path: 'contact-detail/:key', loadChildren: './contact-detail/contact-detail.module#ContactDetailModule'},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})

  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
