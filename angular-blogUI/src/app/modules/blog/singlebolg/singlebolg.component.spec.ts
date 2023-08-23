import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebolgComponent } from './singlebolg.component';

describe('SinglebolgComponent', () => {
  let component: SinglebolgComponent;
  let fixture: ComponentFixture<SinglebolgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglebolgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglebolgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
