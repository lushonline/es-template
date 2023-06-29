/* eslint-disable import/extensions */
import { expect } from 'chai';
import { describe, it } from 'mocha';

import { MyClass } from '../src/index.mjs';

describe('echoString function', () => {
  it('should be a function', () => {
    const myclass = new MyClass();

    expect(myclass.echoString).to.be.instanceOf(
      Function,
      'echoString is not a function of MyClass',
    );
  });

  it('should return value supplied', () => {
    const myclass = new MyClass();
    const value = 'hello';

    const result = myclass.echoString(value);
    expect(result).to.equal(value);
  });

  it('should throw error if value not supplied', () => {
    const myclass = new MyClass();
    expect(() => myclass.echoString()).to.throw(TypeError);
  });

  it('should throw error if value supplied not a string', () => {
    const myclass = new MyClass();
    const value = 12345;
    expect(() => myclass.echoString(value)).to.throw(TypeError);
  });
});
