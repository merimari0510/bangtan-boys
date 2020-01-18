import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAlbumsComponent } from './cards-albums.component';

describe('CardsAlbumsComponent', () => {
  let component: CardsAlbumsComponent;
  let fixture: ComponentFixture<CardsAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
