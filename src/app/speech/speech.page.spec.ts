import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeechPage } from './speech.page';

describe('SpeechPage', () => {
  let component: SpeechPage;
  let fixture: ComponentFixture<SpeechPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpeechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
