import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIntranetPostComponent } from './new-intranet-post.component';

describe('NewIntranetPostComponent', () => {
  let component: NewIntranetPostComponent;
  let fixture: ComponentFixture<NewIntranetPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIntranetPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIntranetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
