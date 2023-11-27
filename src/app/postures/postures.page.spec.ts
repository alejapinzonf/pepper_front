import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PosturesPage } from './postures.page';

describe('PosturesPage', () => {
  let component: PosturesPage;
  let fixture: ComponentFixture<PosturesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PosturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
