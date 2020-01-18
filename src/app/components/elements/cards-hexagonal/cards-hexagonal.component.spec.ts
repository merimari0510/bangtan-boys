import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsHexagonalComponent } from './cards-hexagonal.component';

describe('CardsHexagonalComponent', () => {
  let component: CardsHexagonalComponent;
  let fixture: ComponentFixture<CardsHexagonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsHexagonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsHexagonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
