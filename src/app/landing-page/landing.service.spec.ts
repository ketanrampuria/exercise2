import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LandingService } from './landing.service';

describe('LandingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: LandingService = TestBed.get(LandingService);
    expect(service).toBeTruthy();
  });
});
