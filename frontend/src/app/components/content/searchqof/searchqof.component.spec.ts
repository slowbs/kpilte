import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchqofComponent } from './searchqof.component';

describe('SearchqofComponent', () => {
  let component: SearchqofComponent;
  let fixture: ComponentFixture<SearchqofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchqofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchqofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
