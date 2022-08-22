import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { IntranetPostListComponent } from './components/intranet-post-list/intranet-post-list.component';
import { NewIntranetPostComponent } from './components/new-intranet-post/new-intranet-post.component';
import { SingleIntranetPostComponent } from './components/single-intranet-post/single-intranet-post.component';

const routes: Routes = [    
    {path: 'create', component: NewIntranetPostComponent, canActivate: [AuthGuard]},
    {path: ':id', component: SingleIntranetPostComponent, canActivate: [AuthGuard]},
    {path: '' , component: IntranetPostListComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class intranetPostsRoutingModule {}