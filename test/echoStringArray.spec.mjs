/* eslint-disable import/extensions */
import { expect } from 'chai';
import { describe, it } from 'mocha';

import { MyClass } from '../src/index.mjs';

describe('echoStringArray function', () => {
  it('should be a function', () => {
    const myclass = new MyClass();

    expect(myclass.echoStringArray).to.be.instanceOf(
      Function,
      'echoStringArray is not a function of MyClass',
    );
  });

  it('should return value supplied', () => {
    const myclass = new MyClass();
    const value = ['hello'];

    const result = myclass.echoStringArray(value);
    expect(result).to.equal(value);
  });

  it('should throw error if value not supplied', () => {
    const myclass = new MyClass();
    expect(() => myclass.echoStringArray()).to.throw(TypeError);
  });

  it('should throw error if value supplied not an array of string', () => {
    const myclass = new MyClass();
    const value = [12345];
    expect(() => myclass.echoStringArray(value)).to.throw(TypeError);
  });

  it('should throw error if value supplied is mixed array of types including string', () => {
    const myclass = new MyClass();
    const value = ['12345', 12345];
    expect(() => myclass.echoStringArray(value)).to.throw(TypeError);
  });
});
