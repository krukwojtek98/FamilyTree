import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTreesComponent } from './list-of-trees.component';

describe('ListOfTreesComponent', () => {
  let component: ListOfTreesComponent;
  let fixture: ComponentFixture<ListOfTreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
