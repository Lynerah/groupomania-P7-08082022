import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IntranetPost } from '../../../core/models/intranet-post.model';
import {map, tap} from 'rxjs/operators'
import { IntranetPostService } from '../../../core/services/intranet-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-intranet-post',
  templateUrl: './new-intranet-post.component.html',
  styleUrls: ['./new-intranet-post.component.scss']
})
export class NewIntranetPostComponent implements OnInit {

  postForm!: FormGroup;
  intranetPostPreview$!: Observable<IntranetPost>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private intranetPostService: IntranetPostService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.postForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]]
    }, {
      updateOn: 'blur'
    });
    this.intranetPostPreview$ = this.postForm.valueChanges.pipe(
      map(formvalue => ({
        ...formvalue, createdDate:new Date(), snaps: 0, id: 0
      }))
    );
  }

  // onSubmitForm(): void {
  //   this.intranetPostService.addIntranetPost(this.postForm.value);
  //   this.router.navigateByUrl('/intranetPosts');
  // }
  onSubmitForm(): void {
    this.intranetPostService.addIntranetPost(this.postForm.value).pipe(
      tap(() => this.router.navigateByUrl('/intranetPosts'))
    ).subscribe();
  }
}
