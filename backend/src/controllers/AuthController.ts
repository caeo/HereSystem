import { Request, Response } from 'express';
import AuthService from '../services/AuthService';

class AuthController {
  async register(req: Request, res: Response) {
    const user = await AuthService.register(req.body);

    return res.status(201).json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const result = await AuthService.login(email, password);

    return res.json(result);
  }
}

export default new AuthController();
