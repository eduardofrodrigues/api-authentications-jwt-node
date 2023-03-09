import users from "../database/database.js";

class UserController {
  async createUser(request, response) {
    const { name, email, password } = request.body;

    const exists = users.find((user) => user.email === email);

    if (exists) {
      return response.status(409).json({
        message: "Email already in use." 
      })
    }

    users.push({
      userId: Math.floor(Math.random() * 1000),
      name,
      email,
      password
    })

    return response.status(201).json({
      message: "User created!"
    })
  }

  async listUsers(request, response) {
    return response.status(200).json(users)
  }

}

export default new UserController();