import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIntranetPostComponent } from './single-intranet-post.component';

describe('SingleIntranetPostComponent', () => {
  let component: SingleIntranetPostComponent;
  let fixture: ComponentFixture<SingleIntranetPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleIntranetPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleIntranetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
