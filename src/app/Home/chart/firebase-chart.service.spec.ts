import { TestBed } from '@angular/core/testing';

import { FirebaseChartService } from './firebase-chart.service';

describe('FirebaseChartService', () => {
  let service: FirebaseChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
