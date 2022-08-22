import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntranetPostListComponent } from './components/intranet-post-list/intranet-post-list.component';
import { NewIntranetPostComponent } from './components/new-intranet-post/new-intranet-post.component';
import { SingleIntranetPostComponent } from './components/single-intranet-post/single-intranet-post.component';

const routes: Routes = [    
    {path: 'create', component: NewIntranetPostComponent},
    {path: ':id', component: SingleIntranetPostComponent},
    {path: '' , component: IntranetPostListComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class intranetPostsRoutingModule {}