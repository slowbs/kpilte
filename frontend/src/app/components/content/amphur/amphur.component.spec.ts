import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmphurComponent } from './amphur.component';

describe('AmphurComponent', () => {
  let component: AmphurComponent;
  let fixture: ComponentFixture<AmphurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmphurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmphurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
