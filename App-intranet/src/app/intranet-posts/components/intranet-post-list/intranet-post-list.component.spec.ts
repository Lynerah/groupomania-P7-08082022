import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetPostListComponent } from './intranet-post-list.component';

describe('IntranetPostListComponent', () => {
  let component: IntranetPostListComponent;
  let fixture: ComponentFixture<IntranetPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntranetPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
