import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QofdistComponent } from './qofdist.component';

describe('QofdistComponent', () => {
  let component: QofdistComponent;
  let fixture: ComponentFixture<QofdistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QofdistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QofdistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
