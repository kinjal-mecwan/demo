import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLoginComponent } from './delete-login.component';

describe('DeleteLoginComponent', () => {
  let component: DeleteLoginComponent;
  let fixture: ComponentFixture<DeleteLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
