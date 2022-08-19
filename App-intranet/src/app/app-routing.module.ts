import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntranetPostListComponent } from './intranet-posts/components/intranet-post-list/intranet-post-list.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { NewIntranetPostComponent } from './intranet-posts/components/new-intranet-post/new-intranet-post.component';
import { SingleIntranetPostComponent } from './intranet-posts/components/single-intranet-post/single-intranet-post.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'intranetPosts' , component: IntranetPostListComponent},
  {path: 'intranetPosts/:id', component: SingleIntranetPostComponent},
  {path: 'create', component: NewIntranetPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
