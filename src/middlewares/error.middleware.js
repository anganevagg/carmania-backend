const ErrorHandler = (error, req, res, next) => {
  res.json({
    msg: error.message,
    data: null
  }).status(error.status)
}

module.exports = ErrorHandler