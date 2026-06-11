import { Request, Response } from 'express';
import AuthService from '../services/AuthService';

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const user = await AuthService.register(req.body);

      return res.status(201).json(user);
    } catch (error: any) {
      console.log(error);

      return res.status(500).json({
        message: error.message,
        stack: error.stack,
      });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const result = await AuthService.login(email, password);

      return res.json(result);
    } catch (error: any) {
      console.log(error);

      return res.status(500).json({
        message: error instanceof Error ? error.message : error,
        stack: error.stack,
      });
    }
  }
}

export default new AuthController();
