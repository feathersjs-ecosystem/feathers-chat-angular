import { TestBed, inject } from '@angular/core/testing';

import { FeathersService } from './feathers.service';

describe('FeathersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeathersService]
    });
  });

  it('should ...', inject([FeathersService], (service: FeathersService) => {
    expect(service).toBeTruthy();
  }));
});
