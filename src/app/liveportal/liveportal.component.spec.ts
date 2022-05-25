import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveportalComponent } from './liveportal.component';

describe('LiveportalComponent', () => {
  let component: LiveportalComponent;
  let fixture: ComponentFixture<LiveportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
