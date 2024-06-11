import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMiniCardComponent } from './service-mini-card.component';

describe('ServiceMiniCardComponent', () => {
  let component: ServiceMiniCardComponent;
  let fixture: ComponentFixture<ServiceMiniCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceMiniCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
