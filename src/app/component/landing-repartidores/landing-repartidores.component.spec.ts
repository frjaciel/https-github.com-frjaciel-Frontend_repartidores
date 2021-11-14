import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRepartidoresComponent } from './landing-repartidores.component';

describe('LandingComponent', () => {
  let component: LandingRepartidoresComponent;
  let fixture: ComponentFixture<LandingRepartidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingRepartidoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
