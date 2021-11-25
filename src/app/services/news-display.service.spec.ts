import { TestBed } from '@angular/core/testing';

import { NewsDisplayService } from './news-display.service';

describe('NewsDisplayService', () => {
  let service: NewsDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
