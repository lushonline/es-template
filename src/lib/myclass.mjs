import ow from 'ow';

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
   * @throws {ArgumentError} if the options is not an object or null/undefined
   *
   */
  constructor(options = {}) {
    // Vaidate options is object or empty
    ow(options, ow.optional.object);

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
   * @throws {ArgumentError} if the value is not a string
   * @memberof MyClass
   */
  // eslint-disable-next-line class-methods-use-this
  echoString(value) {
    // Validate input is string and is required
    ow(value, ow.string);
    return value;
  }

  /**
   * Echo the supplied array
   *
   * @param {array<string>} value - The array to echo back
   * @return {array<string>}
   * @throws {ArgumentError} if the value is not an array of strings
   * @memberof MyClass
   */
  // eslint-disable-next-line class-methods-use-this
  echoStringArray(value) {
    // Validate input is array of strings and is required
    ow(value, ow.array.ofType(ow.string));
    return value;
  }
}

export default MyClass;
