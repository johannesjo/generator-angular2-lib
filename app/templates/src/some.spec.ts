import {Component} from '@angular/core';
import {DebugElement} from '@angular/core';
import {async, TestBed} from '@angular/core/testing';
import {ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {userCfg} from './user-cfg';


class MockElementRef extends ElementRef {
  constructor() {
    super(null);
    this.nativeElement = {};
  }
}

@Component({
  selector: 'test-component',
  template: ''
})
class TestComponent {
}


let testUserCfg: any;

describe('', () => {
  beforeEach(async(() => {
    testUserCfg = {};
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
      ],
      providers: [
        // more providers
        {
          provide: ElementRef,
          useClass: MockElementRef
        },
        {
          provide: userCfg, useValue: testUserCfg
        },
      ]
    });
  }));

  describe('', () => {
  });
});

