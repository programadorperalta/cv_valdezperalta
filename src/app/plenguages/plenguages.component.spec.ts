import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlenguagesComponent } from './plenguages.component';

describe('PlenguagesComponent', () => {
  let component: PlenguagesComponent;
  let fixture: ComponentFixture<PlenguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlenguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlenguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
