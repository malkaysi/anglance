import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Global } from './global';

describe('Global', () => {
  let component: Global;
  let fixture: ComponentFixture<Global>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Global]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Global);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
