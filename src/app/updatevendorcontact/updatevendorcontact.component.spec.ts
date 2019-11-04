import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevendorcontactComponent } from './updatevendorcontact.component';

describe('UpdatevendorcontactComponent', () => {
  let component: UpdatevendorcontactComponent;
  let fixture: ComponentFixture<UpdatevendorcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatevendorcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevendorcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
