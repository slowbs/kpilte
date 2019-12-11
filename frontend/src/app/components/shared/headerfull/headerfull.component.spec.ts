import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfullComponent } from './headerfull.component';

describe('HeaderfullComponent', () => {
  let component: HeaderfullComponent;
  let fixture: ComponentFixture<HeaderfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
