import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IntranetPost } from '../../../core/models/intranet-post.model';
import { IntranetPostService } from '../../../core/services/intranet-post.service';

@Component({
  selector: 'app-intranet-post-list',
  templateUrl: './intranet-post-list.component.html',
  styleUrls: ['./intranet-post-list.component.scss']
})
export class IntranetPostListComponent implements OnInit {

  
  intranetPosts$!: Observable<IntranetPost[]>;
  // intranetPosts: IntranetPost[];

  constructor(private intranetPostService: IntranetPostService) { }

  ngOnInit() :void{ 
    // this.intranetPosts = this.intranetPostService.getAllIntranetPosts();
    this.intranetPosts$ = this.intranetPostService.getAllIntranetPosts();
  }

}
