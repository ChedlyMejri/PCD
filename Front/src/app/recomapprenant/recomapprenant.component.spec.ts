import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomapprenantComponent } from './recomapprenant.component';

describe('RecomapprenantComponent', () => {
  let component: RecomapprenantComponent;
  let fixture: ComponentFixture<RecomapprenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomapprenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
