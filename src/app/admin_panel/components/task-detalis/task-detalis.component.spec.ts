import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetalisComponent } from './task-detalis.component';

describe('TaskDetalisComponent', () => {
  let component: TaskDetalisComponent;
  let fixture: ComponentFixture<TaskDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetalisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
