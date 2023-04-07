class PrivateAppController { 
  async privateHome (request, response) {
    response.status(200).json({
      message: "You have access to a private page in our app"
    })
  }
}

export default new PrivateAppController();