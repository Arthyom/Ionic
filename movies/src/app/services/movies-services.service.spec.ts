import { TestBed } from '@angular/core/testing';

import { MoviesServicesService } from './movies-services.service';

describe('MoviesServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesServicesService = TestBed.get(MoviesServicesService);
    expect(service).toBeTruthy();
  });
});
