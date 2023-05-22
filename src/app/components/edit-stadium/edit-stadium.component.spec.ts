import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStadiumComponent } from './edit-stadium.component';

describe('EditStadiumComponent', () => {
  let component: EditStadiumComponent;
  let fixture: ComponentFixture<EditStadiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStadiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
