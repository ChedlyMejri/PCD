import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomprincipalComponent } from './recomprincipal.component';

describe('RecomprincipalComponent', () => {
  let component: RecomprincipalComponent;
  let fixture: ComponentFixture<RecomprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
