import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnewtaskPage } from './addnewtask.page';

describe('AddnewtaskPage', () => {
  let component: AddnewtaskPage;
  let fixture: ComponentFixture<AddnewtaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewtaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
