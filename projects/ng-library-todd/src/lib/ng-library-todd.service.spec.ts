import { TestBed } from '@angular/core/testing';

import { NgLibraryToddService } from './ng-library-todd.service';

describe('NgLibraryToddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLibraryToddService = TestBed.get(NgLibraryToddService);
    expect(service).toBeTruthy();
  });
});
