import check from 'check-types';

class MyClass {
  version = '___version___';

  /**
   * @typedef Options
   * @type {object}
   * @property {string} message - The message
   */

  /** @type {Options} */
  #defaultOptions = {
    message: 'Hello world!',
  };

  /** @type {Options} */
  options = {};

  /**
   * Simple class
   *
   * @param {Object} [options={}] A plain object containing configuration options,
   *                              that will be merged with the defaults
   * @throws {TypeError} if the options is not an object or null/undefined
   *
   */
  constructor(options = {}) {
    // Vaidate options is object or empty
    check.assert.object(options);

    this.options = {
      ...this.#defaultOptions,
      ...options,
    };
  }

  /**
   * Return the configured message
   *
   * @return {string}
   * @memberof MyClass
   */
  hello() {
    return this.options.message;
  }

  /**
   * Echo the supplied string
   * These are example to show how to use ow to validate commands
   *
   * @param {string} value - The value echo back
   * @return {string}
   * @throws {TypeError} if the value is not a string
   * @memberof MyClass
   */
  // eslint-disable-next-line class-methods-use-this
  echoString(value) {
    // Validate input is string and is required
    check.assert.string(value, 'value must be a string');
    return value;
  }

  /**
   * Echo the supplied array
   *
   * @param {array<string>} value - The array to echo back
   * @return {array<string>}
   * @throws {TypeError} if the value is not an array of strings
   * @memberof MyClass
   */
  // eslint-disable-next-line class-methods-use-this
  echoStringArray(value) {
    // Validate input is array of strings and is required, throws TypeError if invalid
    check.assert.array.of.nonEmptyString(value);
    return value;
  }
}

export default MyClass;
