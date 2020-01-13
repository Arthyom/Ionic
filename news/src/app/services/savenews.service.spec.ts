import { TestBed } from '@angular/core/testing';

import { SavenewsService } from './savenews.service';

describe('SavenewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavenewsService = TestBed.get(SavenewsService);
    expect(service).toBeTruthy();
  });
});
