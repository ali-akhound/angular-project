import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogeComponent } from './cataloge.component';

describe('CatalogeComponent', () => {
  let component: CatalogeComponent;
  let fixture: ComponentFixture<CatalogeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogeComponent]
    });
    fixture = TestBed.createComponent(CatalogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
