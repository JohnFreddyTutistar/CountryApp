import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRegionPAgeComponent } from './by-region-page.component';

describe('ByRegionPAgeComponent', () => {
  let component: ByRegionPAgeComponent;
  let fixture: ComponentFixture<ByRegionPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByRegionPAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByRegionPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
