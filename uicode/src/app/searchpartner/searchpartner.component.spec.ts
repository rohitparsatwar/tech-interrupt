import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpartnerComponent } from './searchpartner.component';

describe('SearchpartnerComponent', () => {
  let component: SearchpartnerComponent;
  let fixture: ComponentFixture<SearchpartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
