import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbslateComponent } from './dbslate.component';

describe('DbslateComponent', () => {
  let component: DbslateComponent;
  let fixture: ComponentFixture<DbslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
