import { TestBed, inject } from '@angular/core/testing';

import { Feathers } from './feathers.service';

describe('FeathersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Feathers]
    });
  });

  it('should ...', inject([Feathers], (service: Feathers) => {
    expect(service).toBeTruthy();
  }));
});
