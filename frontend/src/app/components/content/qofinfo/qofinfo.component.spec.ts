import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QofinfoComponent } from './qofinfo.component';

describe('QofinfoComponent', () => {
  let component: QofinfoComponent;
  let fixture: ComponentFixture<QofinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QofinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QofinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
