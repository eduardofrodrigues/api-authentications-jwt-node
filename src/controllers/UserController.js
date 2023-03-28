import users from "../database/database.js";
import { v4 as uuidv4 } from 'uuid';
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

class UserController {
  async createUser(request, response) {
    const { name, email, password } = request.body;

    const exists = users.find((user) => user.email === email);

    if (exists) {
      return response.status(409).json({
        message: "Email already in use."
      })
    }

    let hashPassword = await bcryptjs.hash(password, 10);

    users.push({
      userId: uuidv4(),
      name,
      email,
      hashPassword
    })

    return response.status(201).json({
      message: "User created!"
    })
  }

  async loginUser(request, response) {
    const { email, password } = request.body;

    const user = users.find((user) => user.email === email);

    if (!user) {
      return response.status(404).json({
        message: "Email not found!"
      })
    }

    if (user && (await bcryptjs.compare(password, user.hashPassword))) {
      const token = jwt.sign(
        { user_id: user.userId, email },
        'c3664049707a495590813f9a6a8035813452221dba9998c9e740f2d5bb816e91',
        { expiresIn: "1h" }
      );

      user.token = token
      return response.status(200).json(user)
    }

    return response.status(400).json({
      message: "Invalid credentials"
    })
    
  }

  async listUsers(request, response) {
    return response.status(200).json(users)
  }

}

export default new UserController();