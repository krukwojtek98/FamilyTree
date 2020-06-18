import { TestBed } from '@angular/core/testing';

import { TreesListService } from './trees-list.service';

describe('TreesListService', () => {
  let service: TreesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
