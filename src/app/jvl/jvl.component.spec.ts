import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JvlComponent } from './jvl.component';

describe('JvlComponent', () => {
  let component: JvlComponent;
  let fixture: ComponentFixture<JvlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JvlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
