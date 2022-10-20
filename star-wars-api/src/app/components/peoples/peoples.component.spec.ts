import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesComponent } from './peoples.component';

describe('PeoplesComponent', () => {
  let component: PeoplesComponent;
  let fixture: ComponentFixture<PeoplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
