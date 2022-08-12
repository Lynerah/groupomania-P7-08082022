import { Component, OnInit } from '@angular/core';
import { IntranetPost } from '../models/intranet-post.model';
import { IntranetPostService } from '../services/intranet-post.service';

@Component({
  selector: 'app-intranet-post-list',
  templateUrl: './intranet-post-list.component.html',
  styleUrls: ['./intranet-post-list.component.scss']
})
export class IntranetPostListComponent implements OnInit {

  intranetPosts: IntranetPost[];

  constructor(private intranetPostService: IntranetPostService) { }

  ngOnInit() { 
    this.intranetPosts = this.intranetPostService.getAllIntranetPosts();
  }

}
