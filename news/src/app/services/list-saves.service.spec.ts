import { TestBed } from '@angular/core/testing';

import { ListSavesService } from './list-saves.service';

describe('ListSavesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListSavesService = TestBed.get(ListSavesService);
    expect(service).toBeTruthy();
  });
});
