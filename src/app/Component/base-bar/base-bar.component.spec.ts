import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBarComponent } from './base-bar.component';

describe('BaseBarComponent', () => {
  let component: BaseBarComponent;
  let fixture: ComponentFixture<BaseBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
