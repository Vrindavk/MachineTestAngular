import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendordetilsComponent } from './vendordetils.component';

describe('VendordetilsComponent', () => {
  let component: VendordetilsComponent;
  let fixture: ComponentFixture<VendordetilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendordetilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendordetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
