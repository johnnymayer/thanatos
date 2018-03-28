import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKegComponent } from './list-keg.component';

describe('ListKegComponent', () => {
  let component: ListKegComponent;
  let fixture: ComponentFixture<ListKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
