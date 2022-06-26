import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeManagerComponent } from './recipe-manager.component';

describe('RecipeManagerComponent', () => {
  let component: RecipeManagerComponent;
  let fixture: ComponentFixture<RecipeManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
