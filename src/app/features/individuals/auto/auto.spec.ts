import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto } from './auto';

describe('Auto', () => {
  let component: Auto;
  let fixture: ComponentFixture<Auto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Auto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
