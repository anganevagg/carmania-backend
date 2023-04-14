class HttpError extends Error {
  constructor(message = 'Internal server error', status = 500){
    this.message = message
    this.status = status
  }
}