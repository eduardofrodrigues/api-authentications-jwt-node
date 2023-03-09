class PublicController{
  async root(request, response){
    return response.status(200).json({
      message: "Hello Stranger! You have access!"
    })
  }
}

export default new PublicController();
