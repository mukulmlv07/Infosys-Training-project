import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecomparisonComponent } from './pricecomparison.component';

describe('PricecomparisonComponent', () => {
  let component: PricecomparisonComponent;
  let fixture: ComponentFixture<PricecomparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricecomparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecomparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
