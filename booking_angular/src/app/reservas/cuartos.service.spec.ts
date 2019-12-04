import { TestBed } from '@angular/core/testing';

import { CuartosService } from './cuartos.service';

describe('CuartosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuartosService = TestBed.get(CuartosService);
    expect(service).toBeTruthy();
  });
});
