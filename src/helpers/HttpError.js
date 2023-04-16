class HttpError extends Error {
  constructor(message = 'Internal server error', status = 500){
    super()
    this.message = message
    this.status = status
  }
}

module.exports = HttpError