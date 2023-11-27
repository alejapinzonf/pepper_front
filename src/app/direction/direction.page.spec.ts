import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectionPage } from './direction.page';

describe('DirectionPage', () => {
  let component: DirectionPage;
  let fixture: ComponentFixture<DirectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DirectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
