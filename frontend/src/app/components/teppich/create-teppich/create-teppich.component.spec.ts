import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeppichComponent } from './create-teppich.component';

describe('CreateTeppichComponent', () => {
  let component: CreateTeppichComponent;
  let fixture: ComponentFixture<CreateTeppichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTeppichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTeppichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
