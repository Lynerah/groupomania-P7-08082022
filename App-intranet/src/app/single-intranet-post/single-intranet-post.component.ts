import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntranetPost } from '../models/intranet-post.model';
import { IntranetPostService } from '../services/intranet-post.service';

@Component({
  selector: 'app-single-intranet-post',
  templateUrl: './single-intranet-post.component.html',
  styleUrls: ['./single-intranet-post.component.scss']
})
export class SingleIntranetPostComponent implements OnInit {
  
  buttonText!: string;
  intranetPost!: IntranetPost;

  constructor(private intranetPostService: IntranetPostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonText = 'Like';
    const postId = +this.route.snapshot.params['id']; 
    this.intranetPost = this.intranetPostService.getSnapIntranetById(postId)
  }

  onLike() {
    if (this.buttonText === 'Like'){
      this.intranetPostService.snapIntranetById(this.intranetPost.id, 'Like');
      // this.intranetPost.snaps++;
      this.buttonText = 'Dislike';
    } else {
      this.intranetPostService.snapIntranetById(this.intranetPost.id, 'Dislike');
      // this.intranetPost.snaps--;
      this.buttonText = 'Like';
    }
  }


}
