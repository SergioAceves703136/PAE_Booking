import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartosComponent } from './cuartos.component';

describe('CuartosComponent', () => {
  let component: CuartosComponent;
  let fixture: ComponentFixture<CuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
