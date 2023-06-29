import { expect } from 'chai';
import { describe, it } from 'mocha';

import { MyClass } from '../src/index.mjs';

const tests = [
  {
    fn: 'hello',
    testIsFunction: true,
    testCases: [
      {
        description: 'Confirm configured message returned',
        input: null,
        expect: {
          equal: 'Hello world!',
        },
      },
    ],
  },
  {
    fn: 'echoString',
    testIsFunction: true,
    testCases: [
      {
        description: 'Confirm input echoed back',
        input: '12345',
        expect: {
          equal: '12345',
        },
      },
      {
        description: 'Confirm error thrown when input is a number',
        input: 12345,
        expect: {
          errorThrown: TypeError,
        },
      },
      {
        description: 'Confirm error thrown when input is an array of string',
        input: ['12345'],
        expect: {
          errorThrown: TypeError,
        },
      },
      {
        description: 'Confirm error thrown when input is date',
        input: new Date(),
        expect: {
          errorThrown: TypeError,
        },
      },
    ],
  },
  {
    fn: 'echoStringArray',
    testIsFunction: true,
    testCases: [
      {
        description: 'Confirm input echoed back with single string array',
        input: ['12345'],
        expect: {
          deepEqual: ['12345'],
        },
      },
      {
        description: 'Confirm input echoed back with multi string array',
        input: ['12345', '54321'],
        expect: {
          deepEqual: ['12345', '54321'],
        },
      },
      {
        description: 'Confirm error thrown when input is a number',
        input: 12345,
        expect: {
          errorThrown: TypeError,
        },
      },
      {
        description: 'Confirm error thrown when input is an string',
        input: '12345',
        expect: {
          errorThrown: TypeError,
        },
      },
      {
        description: 'Confirm error thrown when input is date',
        input: new Date(),
        expect: {
          errorThrown: TypeError,
        },
      },
    ],
  },
];

describe('Functions Test Suite', () => {
  let testCounter = 0;
  tests.forEach((test) => {
    describe(`${testCounter.toString().padStart(4, '0')} ${test.fn} Testsuite`, () => {
      let testCaseCounter = 0;
      if (test.testIsFunction) {
        it(`${testCaseCounter.toString().padStart(4, '0')} should be a function`, () => {
          const myclass = new MyClass();

          expect(myclass[test.fn]).to.be.instanceOf(
            Function,
            `${test.fn} is not a function of MyClass`,
          );
        });
        testCaseCounter++;
      }

      test.testCases.forEach((testCase) => {
        it(`${testCaseCounter.toString().padStart(4, '0')} ${testCase.description}`, function () {
          const myclass = new MyClass();
          if (testCase.expect.equal) {
            const result = myclass[test.fn](testCase.input);
            expect(result).to.be.equal(testCase.expect.equal);
          } else if (testCase.expect.deepEqual) {
            const result = myclass[test.fn](testCase.input);
            expect(result).to.deep.equal(testCase.expect.deepEqual);
          } else if (testCase.expect.errorThrown) {
            expect(() => myclass[test.fn](testCase.input)).to.throw(testCase.expect.errorThrown);
          }
        });
        testCaseCounter++;
      });
    });
    testCounter++;
  });
});
