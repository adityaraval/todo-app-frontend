class CustomError extends Error {
  constructor(message, errorKey, payload = {}) {
    super(message);
    this.errorKey = errorKey;
    this.payload = payload;
  }
}

export default CustomError;
