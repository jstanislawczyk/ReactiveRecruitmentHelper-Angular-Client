import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCreateSuccessComponent } from './user-create-success.component';

describe('UsersSuccessComponent', () => {
  let component: UsersCreateSuccessComponent;
  let fixture: ComponentFixture<UsersCreateSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCreateSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCreateSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
