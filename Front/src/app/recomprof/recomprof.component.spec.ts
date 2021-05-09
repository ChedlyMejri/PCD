import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomprofComponent } from './recomprof.component';

describe('RecomprofComponent', () => {
  let component: RecomprofComponent;
  let fixture: ComponentFixture<RecomprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
