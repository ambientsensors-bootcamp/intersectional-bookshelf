import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanceComponent } from './romance.component';

describe('RomanceComponent', () => {
  let component: RomanceComponent;
  let fixture: ComponentFixture<RomanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
