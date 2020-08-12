import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeppichComponent } from './update-teppich.component';

describe('UpdateTeppichComponent', () => {
  let component: UpdateTeppichComponent;
  let fixture: ComponentFixture<UpdateTeppichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTeppichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeppichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
