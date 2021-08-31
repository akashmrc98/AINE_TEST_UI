import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantCatalogComponent } from './applicant-catalog.component';

describe('ApplicantCatalogComponent', () => {
  let component: ApplicantCatalogComponent;
  let fixture: ComponentFixture<ApplicantCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
