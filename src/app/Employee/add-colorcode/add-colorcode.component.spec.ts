import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColorcodeComponent } from './add-colorcode.component';

describe('AddColorcodeComponent', () => {
  let component: AddColorcodeComponent;
  let fixture: ComponentFixture<AddColorcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddColorcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColorcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
