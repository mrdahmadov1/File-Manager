import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeeModalComponent } from './add-fee-modal.component';

describe('AddFeeModalComponent', () => {
  let component: AddFeeModalComponent;
  let fixture: ComponentFixture<AddFeeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
