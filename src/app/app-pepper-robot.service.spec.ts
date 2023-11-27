import { TestBed } from '@angular/core/testing';

import { AppPepperRobotService } from './app-pepper-robot.service';

describe('AppPepperRobotService', () => {
  let service: AppPepperRobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPepperRobotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
