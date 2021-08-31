import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuiterCreationComponent } from './recuiter-creation.component';

describe('RecuiterCreationComponent', () => {
  let component: RecuiterCreationComponent;
  let fixture: ComponentFixture<RecuiterCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuiterCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuiterCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
