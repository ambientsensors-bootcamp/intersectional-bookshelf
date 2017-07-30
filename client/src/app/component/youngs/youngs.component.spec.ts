import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungsComponent } from './youngs.component';

describe('YoungsComponent', () => {
  let component: YoungsComponent;
  let fixture: ComponentFixture<YoungsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoungsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
