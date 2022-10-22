import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulOrderPageComponent } from './successful-order-page.component';

describe('SuccessfulOrderPageComponent', () => {
  let component: SuccessfulOrderPageComponent;
  let fixture: ComponentFixture<SuccessfulOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulOrderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
