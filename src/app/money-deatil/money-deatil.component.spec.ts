import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyDeatilComponent } from './money-deatil.component';

describe('MoneyDeatilComponent', () => {
  let component: MoneyDeatilComponent;
  let fixture: ComponentFixture<MoneyDeatilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyDeatilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
