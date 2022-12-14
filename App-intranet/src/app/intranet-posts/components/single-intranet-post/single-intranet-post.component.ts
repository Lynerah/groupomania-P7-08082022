import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IntranetPost } from '../../../core/models/intranet-post.model';
import { IntranetPostService } from '../../../core/services/intranet-post.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-single-intranet-post',
  templateUrl: './single-intranet-post.component.html',
  styleUrls: ['./single-intranet-post.component.scss']
})
export class SingleIntranetPostComponent implements OnInit {
  
  buttonText!: string;
  // intranetPost!: IntranetPost;
  intranetPost$!: Observable<IntranetPost>;


  constructor(private intranetPostService: IntranetPostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonText = 'Like';
    const postId = +this.route.snapshot.params['id']; 
    this.intranetPost$ = this.intranetPostService.getSnapIntranetById(postId)
  }

  // onLike() {
  //   if (this.buttonText === 'Like'){
  //     this.intranetPostService.snapIntranetById(this.intranetPost.id, 'Like');
  //     // this.intranetPost.snaps++;
  //     this.buttonText = 'Dislike';
  //   } else {
  //     this.intranetPostService.snapIntranetById(this.intranetPost.id, 'Dislike');
  //     // this.intranetPost.snaps--;
  //     this.buttonText = 'Like';
  //   }
  // }
  onLike(postId: number) {
    if (this.buttonText === 'Like'){
    this.intranetPost$ = this.intranetPostService.snapIntranetById(postId, 'Like').pipe(
      tap(() => this.buttonText = 'Dislike')
    );
    } else {
      this.intranetPost$ = this.intranetPostService.snapIntranetById(postId, 'Dislike').pipe(
        tap(() => this.buttonText = 'Like')
      );
    }
  }

}
