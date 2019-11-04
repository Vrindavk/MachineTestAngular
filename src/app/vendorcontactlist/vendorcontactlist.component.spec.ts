import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorcontactlistComponent } from './vendorcontactlist.component';

describe('VendorcontactlistComponent', () => {
  let component: VendorcontactlistComponent;
  let fixture: ComponentFixture<VendorcontactlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorcontactlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorcontactlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
