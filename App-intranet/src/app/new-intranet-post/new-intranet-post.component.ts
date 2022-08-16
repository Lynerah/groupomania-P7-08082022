import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IntranetPost } from '../models/intranet-post.model';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-new-intranet-post',
  templateUrl: './new-intranet-post.component.html',
  styleUrls: ['./new-intranet-post.component.scss']
})
export class NewIntranetPostComponent implements OnInit {

  postForm: FormGroup;
  intranetPostPreview$: Observable<IntranetPost>;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null]
    });
    this.intranetPostPreview$ = this.postForm.valueChanges.pipe(
      map(formvalue => ({
        ...formvalue, createdDate:new Date(), snaps: 0, id: 0
      }))
    );
      
  }

  onSubmitForm(): void {
    console.log(this.postForm.value);
  }

}
