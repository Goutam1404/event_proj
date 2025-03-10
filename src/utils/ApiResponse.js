class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    (this.statusCode = statusCode),
      (this.data = data),   
      (this.message = message),
      (this.success = statusCode < 400); //everything above 400 will be sent by api error
  }
}
export { ApiResponse };
