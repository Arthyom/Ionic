import { TestBed } from '@angular/core/testing';

import { RemoveNewsService } from './remove-news.service';

describe('RemoveNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveNewsService = TestBed.get(RemoveNewsService);
    expect(service).toBeTruthy();
  });
});
