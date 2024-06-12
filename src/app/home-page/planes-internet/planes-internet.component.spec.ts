import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesInternetComponent } from './planes-internet.component';

describe('PlanesInternetComponent', () => {
  let component: PlanesInternetComponent;
  let fixture: ComponentFixture<PlanesInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesInternetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
