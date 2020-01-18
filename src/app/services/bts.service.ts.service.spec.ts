import { TestBed } from '@angular/core/testing';

import { Bts.Service.TsService } from './bts.service.ts.service';

describe('Bts.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Bts.Service.TsService = TestBed.get(Bts.Service.TsService);
    expect(service).toBeTruthy();
  });
});
