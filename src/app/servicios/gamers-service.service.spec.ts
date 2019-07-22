import { TestBed } from '@angular/core/testing';

import { GamersServiceService } from './gamers-service.service';

describe('GamersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamersServiceService = TestBed.get(GamersServiceService);
    expect(service).toBeTruthy();
  });
});
