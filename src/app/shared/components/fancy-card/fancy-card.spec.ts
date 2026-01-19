import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyCard } from './fancy-card';

describe('FancyCard', () => {
  let component: FancyCard;
  let fixture: ComponentFixture<FancyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancyCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
