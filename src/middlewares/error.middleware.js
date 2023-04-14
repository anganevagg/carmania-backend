const ErrorHandler = (error, req, res, next) => {
  res.json({
    msg: error.message,
    data: null
  })
}

module.exports = ErrorHandler