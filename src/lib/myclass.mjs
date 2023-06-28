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
   *
   */
  constructor(options = {}) {
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
}

export default MyClass;
