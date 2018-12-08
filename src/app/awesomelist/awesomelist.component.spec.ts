import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomelistComponent } from './awesomelist.component';

describe('AwesomelistComponent', () => {
  let component: AwesomelistComponent;
  let fixture: ComponentFixture<AwesomelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
