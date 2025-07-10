import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowItem } from './show-item';

describe('ShowItem', () => {
  let component: ShowItem;
  let fixture: ComponentFixture<ShowItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
