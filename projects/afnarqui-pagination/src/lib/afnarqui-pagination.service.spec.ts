import { TestBed } from '@angular/core/testing';

import { AfnarquiPaginationService } from './afnarqui-pagination.service';

describe('AfnarquiPaginationService', () => {
  let service: AfnarquiPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfnarquiPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
