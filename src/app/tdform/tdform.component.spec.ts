import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { TDformComponent } from './tdform.component';

describe('TDformComponent', () => {
  let component: TDformComponent;
  let fixture: ComponentFixture<TDformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TDformComponent],
      imports: [FormsModule] // Include FormsModule in imports
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
