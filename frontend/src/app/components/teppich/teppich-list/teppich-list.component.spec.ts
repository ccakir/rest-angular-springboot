import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeppichListComponent } from './teppich-list.component';

describe('TeppichListComponent', () => {
  let component: TeppichListComponent;
  let fixture: ComponentFixture<TeppichListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeppichListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeppichListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
