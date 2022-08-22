import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { NewIntranetPostComponent } from './components/new-intranet-post/new-intranet-post.component';
import { SingleIntranetPostComponent } from './components/single-intranet-post/single-intranet-post.component';
import { intranetPostsRoutingModule } from './intranet-posts-routing.module';



@NgModule({
  declarations: [
    SingleIntranetPostComponent,
    NewIntranetPostComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // RouterModule
    intranetPostsRoutingModule

  ]
})
export class IntranetPostsModule { }
