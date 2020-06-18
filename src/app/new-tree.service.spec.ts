import { TestBed } from '@angular/core/testing';

import { NewTreeService } from './new-tree.service';

describe('NewTreeService', () => {
  let service: NewTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
