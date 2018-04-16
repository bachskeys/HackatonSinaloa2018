import { TestBed, inject } from '@angular/core/testing';

import { FbsService } from './fbs.service';

describe('FbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbsService]
    });
  });

  it('should be created', inject([FbsService], (service: FbsService) => {
    expect(service).toBeTruthy();
  }));
});
