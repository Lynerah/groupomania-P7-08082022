import { Component, Input, OnInit } from '@angular/core';
import { IntranetPost } from '../models/intranet-post.model';
import { IntranetPostService } from '../services/intranet-post.service';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss']
})
export class IntranetComponent implements OnInit {

  @Input() intranetPost: IntranetPost;

  buttonText!: string;


  constructor(private intranetPostService: IntranetPostService) { }

  ngOnInit() {
    this.buttonText = 'Like';
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
