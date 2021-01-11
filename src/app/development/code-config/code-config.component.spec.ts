import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeConfigComponent } from './code-config.component';

describe('CodeConfigComponent', () => {
  let component: CodeConfigComponent;
  let fixture: ComponentFixture<CodeConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
