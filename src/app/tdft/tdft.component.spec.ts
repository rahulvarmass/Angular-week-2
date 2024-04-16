import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdftComponent } from './tdft.component';

describe('TdftComponent', () => {
  let component: TdftComponent;
  let fixture: ComponentFixture<TdftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
