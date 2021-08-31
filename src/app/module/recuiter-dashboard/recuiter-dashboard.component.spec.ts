import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuiterDashboardComponent } from './recuiter-dashboard.component';

describe('RecuiterDashboardComponent', () => {
  let component: RecuiterDashboardComponent;
  let fixture: ComponentFixture<RecuiterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuiterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuiterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
