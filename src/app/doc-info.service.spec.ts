import { TestBed, inject } from '@angular/core/testing';

import { DocInfoService } from './doc-info.service';

describe('DocInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocInfoService]
    });
  });

  it('should be created', inject([DocInfoService], (service: DocInfoService) => {
    expect(service).toBeTruthy();
  }));
});
