import {Component} from '@angular/core';
import {async, TestBed} from '@angular/core/testing';
import {ComponentFixture} from '@angular/core/testing';
import {userCfg} from './user-cfg';


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
        {
          provide: userCfg, useValue: testUserCfg
        },
      ]
    });
  }));

  describe('', () => {
  });
});

