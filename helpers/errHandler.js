class Unautorized extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}
class NotFound extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}
class MissedParamsError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class Conflict extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}

const errHandler = (error, req, res, next) => {
  if (
    error instanceof Unautorized ||
    error instanceof NotFound ||
    error instanceof MissedParamsError ||
    error instanceof ValidationError ||
    error instanceof Conflict
  ) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
};

module.exports = {
  Unautorized,
  NotFound,
  MissedParamsError,
  ValidationError,
  Conflict,
  errHandler
};
