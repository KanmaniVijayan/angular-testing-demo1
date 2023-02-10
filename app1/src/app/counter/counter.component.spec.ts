import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let cnt: CounterComponent;
  beforeEach(() => (cnt = new CounterComponent()));

  it('should increment the counter by 1', () => {
    cnt.increment();
    expect(cnt.counter).toBe(1);
  });

  it('should decrement the counter by 1', () => {
    cnt.decrement();
    expect(cnt.counter).toBe(-1);
  });
  
  it('Our first Jasmine test',()=>{
    expect(true).toBe(true);
  });

  it('2 + 2 equals 4', () => {
    expect(2 + 2).toBe(4);
    });

});
