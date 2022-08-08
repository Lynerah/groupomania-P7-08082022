import { Component, Input, OnInit } from '@angular/core';
import { IntranetPost } from '../models/intranet-post.model';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss']
})
export class IntranetComponent implements OnInit {

  @Input() intranetPost: IntranetPost;

  buttonText!: string;


  constructor() { }

  ngOnInit() {
    this.buttonText = 'Like';
  }

  onLike() {
    if (this.buttonText === 'Like'){
      this.intranetPost.snaps++;
      this.buttonText = 'Dislike';
    } else {
      this.intranetPost.snaps--;
      this.buttonText = 'Like';
    }
  }

}
