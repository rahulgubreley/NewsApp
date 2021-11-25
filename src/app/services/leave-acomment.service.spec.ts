import { TestBed } from '@angular/core/testing';

import { LeaveACommentService } from './leave-acomment.service';

describe('LeaveACommentService', () => {
  let service: LeaveACommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveACommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
