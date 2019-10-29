import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggyBreedListComponent } from './doggy-breed-list.component';

describe('DoggyBreedListComponent', () => {
  let component: DoggyBreedListComponent;
  let fixture: ComponentFixture<DoggyBreedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggyBreedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggyBreedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
