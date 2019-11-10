import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLibraryToddComponent } from './ng-library-todd.component';

describe('NgLibraryToddComponent', () => {
  let component: NgLibraryToddComponent;
  let fixture: ComponentFixture<NgLibraryToddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLibraryToddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLibraryToddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
