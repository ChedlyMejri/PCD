import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomdecideurComponent } from './recomdecideur.component';

describe('RecomdecideurComponent', () => {
  let component: RecomdecideurComponent;
  let fixture: ComponentFixture<RecomdecideurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomdecideurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomdecideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
