import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QclientComponent } from './qclient.component';

describe('QclientComponent', () => {
  let component: QclientComponent;
  let fixture: ComponentFixture<QclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
