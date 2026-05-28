import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserRepository from '../repositories/UserRepository';

class AuthService {
  async register(data: {
    name: string;
    email: string;
    password: string;
    role: string;
    organizationId: string;
  }) {
    const userAlreadyExists = await UserRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const hashedPassword = await bcrypt.hash(data.password, 8);

    const user = await UserRepository.create({
      ...data,
      password: hashedPassword,
    });
  }

  async login(email: string, password: string) {
    const user = await UserRepository.findByEmail(email);

    if (!user) {
      throw new Error('Invalid credentials.');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid credentials.');
    }
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
        organizationId: user.organizationId,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1d',
      }
    );

    return {
      user,
      token,
    };
  }
}

export default new AuthService();
