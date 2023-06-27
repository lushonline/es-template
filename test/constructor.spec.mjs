/* eslint-disable import/extensions */
import { expect } from 'chai';
import { describe, it } from 'mocha';

import MyClass from '../src/index.mjs';

describe('constructor', () => {
  it('should work', () => {
    const myclass = new MyClass();
    expect(myclass.options).to.be.an('Object');
  });

  it('should overwrite default option', () => {
    const newmessage = 'New Message!';
    const myclass = new MyClass({ message: newmessage });
    expect(myclass.options.message).to.equal(newmessage);
  });

  it('should add new option', () => {
    const newoptionvalue = 'New Option';
    const message = 'Hello world!';
    const myclass = new MyClass({ newoption: newoptionvalue });
    // Check default not changed
    expect(myclass.options.message).to.equal(message);
    // Check new option added
    expect(myclass.options.newoption).to.equal(newoptionvalue);
  });
});
