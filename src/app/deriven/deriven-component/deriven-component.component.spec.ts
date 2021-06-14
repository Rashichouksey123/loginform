import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivenComponentComponent } from './deriven-component.component';

describe('DerivenComponentComponent', () => {
  let component: DerivenComponentComponent;
  let fixture: ComponentFixture<DerivenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivenComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
