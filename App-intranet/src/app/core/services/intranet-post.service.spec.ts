import { TestBed } from '@angular/core/testing';

import { IntranetPostService } from './intranet-post.service';

describe('IntranetPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntranetPostService = TestBed.get(IntranetPostService);
    expect(service).toBeTruthy();
  });
});
