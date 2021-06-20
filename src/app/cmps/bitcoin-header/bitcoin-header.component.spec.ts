import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinHeaderComponent } from './bitcoin-header.component';

describe('BitcoinHeaderComponent', () => {
  let component: BitcoinHeaderComponent;
  let fixture: ComponentFixture<BitcoinHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitcoinHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
