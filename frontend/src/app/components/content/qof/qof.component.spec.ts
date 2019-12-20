import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QofComponent } from './qof.component';

describe('QofComponent', () => {
  let component: QofComponent;
  let fixture: ComponentFixture<QofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
