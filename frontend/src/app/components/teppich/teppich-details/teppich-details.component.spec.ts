import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeppichDetailsComponent } from './teppich-details.component';

describe('TeppichDetailsComponent', () => {
  let component: TeppichDetailsComponent;
  let fixture: ComponentFixture<TeppichDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeppichDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeppichDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
