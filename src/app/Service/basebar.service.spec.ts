import { TestBed } from '@angular/core/testing';

import { BasebarService } from './basebar.service';

describe('BasebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasebarService = TestBed.get(BasebarService);
    expect(service).toBeTruthy();
  });
});
