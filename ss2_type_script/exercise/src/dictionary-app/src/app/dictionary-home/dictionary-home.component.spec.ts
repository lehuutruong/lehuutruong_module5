import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryHomeComponent } from './dictionary-home.component';

describe('DictionaryHomeComponent', () => {
  let component: DictionaryHomeComponent;
  let fixture: ComponentFixture<DictionaryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
