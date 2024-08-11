import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickingListGeneratorComponent } from './picking-list-generator.component';

describe('PickingListGeneratorComponent', () => {
  let component: PickingListGeneratorComponent;
  let fixture: ComponentFixture<PickingListGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickingListGeneratorComponent]
    });
    fixture = TestBed.createComponent(PickingListGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
