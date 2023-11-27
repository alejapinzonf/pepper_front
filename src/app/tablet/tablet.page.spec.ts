import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabletPage } from './tablet.page';

describe('TabletPage', () => {
  let component: TabletPage;
  let fixture: ComponentFixture<TabletPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
