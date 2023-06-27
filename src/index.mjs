class MyClass {
  version = '___version___';

  #defaultOptions = {
    message: 'Hello world!',
  };

  options = {};

  /**
   * Simple class
   *
   * @param {options} options A plain object containing configuration options
   *
   */
  constructor(options) {
    this.options = {
      ...this.#defaultOptions,
      ...options,
    };
  }

  /**
   * Return the configured message
   *
   * @return {*}
   * @memberof MyClass
   */
  hello() {
    return this.options.message;
  }
}

export default MyClass;
