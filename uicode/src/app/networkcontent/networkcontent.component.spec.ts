import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkcontentComponent } from './networkcontent.component';

describe('NetworkcontentComponent', () => {
  let component: NetworkcontentComponent;
  let fixture: ComponentFixture<NetworkcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
