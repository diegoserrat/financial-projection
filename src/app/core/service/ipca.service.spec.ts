import { TestBed } from '@angular/core/testing';

import { IpcaService } from './ipca.service';

describe('IpcaService', () => {
  let service: IpcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
