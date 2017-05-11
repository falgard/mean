/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultantsService } from './consultants.service';

describe('ConsultantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultantsService]
    });
  });

  it('should ...', inject([ConsultantsService], (service: ConsultantsService) => {
    expect(service).toBeTruthy();
  }));
});
