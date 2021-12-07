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

const errHandler = (err, req, res, next) => {
  if (
    err instanceof Unautorized ||
    err instanceof NotFound ||
    err instanceof MissedParamsError ||
    err instanceof ValidationError
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
  errHandler
};
