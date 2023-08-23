import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatequizzeComponent } from './createquizze.component';

describe('CreatequizzeComponent', () => {
  let component: CreatequizzeComponent;
  let fixture: ComponentFixture<CreatequizzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatequizzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatequizzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
