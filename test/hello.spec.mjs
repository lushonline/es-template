/* eslint-disable import/extensions */
import { expect } from 'chai';
import { describe, it } from 'mocha';

import MyClass from '../src/index.mjs';

describe('hello function', () => {
  it('should be a function', () => {
    const myclass = new MyClass();

    expect(myclass.hello).to.be.instanceOf(Function, 'hello is not a function of MyClass');
  });

  it('should return configured message', () => {
    const myclass = new MyClass();
    const expected = myclass.options.message;

    const result = myclass.hello();
    expect(result).to.equal(expected);
  });
});
