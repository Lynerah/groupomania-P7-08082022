import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntranetPostListComponent } from './intranet-post-list/intranet-post-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'intranetPosts' , component: IntranetPostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
