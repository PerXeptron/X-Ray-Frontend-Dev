import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogresultComponent } from './logresult.component';

describe('LogresultComponent', () => {
  let component: LogresultComponent;
  let fixture: ComponentFixture<LogresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
