import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkfeedComponent } from './networkfeed.component';

describe('NetworkfeedComponent', () => {
  let component: NetworkfeedComponent;
  let fixture: ComponentFixture<NetworkfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
