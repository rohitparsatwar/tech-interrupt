import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnernetworkComponent } from './partnernetwork.component';

describe('PartnernetworkComponent', () => {
  let component: PartnernetworkComponent;
  let fixture: ComponentFixture<PartnernetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnernetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnernetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
