import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserRepository from '../repositories/UserRepository';
import OrganizationRepository from '../repositories/OrganizationRepository';

class AuthService {
  //Register
  async register(data: {
    organizationName: string;
    slug: string;
    name: string;
    email: string;
    password: string;
  }) {
    const userAlreadyExists = await UserRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    //Organization Register

    const organization = await OrganizationRepository.create({
      name: data.organizationName,
      slug: data.slug,
    });

    //User create

    const hashedPassword = await bcrypt.hash(data.password, 8);

    const user = await UserRepository.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: 'ADMIN',
      organizationId: organization.id,
    });

    //Token to sign in when the user is created
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
        organizationId: organization.id,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1d',
      }
    );

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        organizationId: user.organizationId,
      },
      token,
    };
  }

  //Login
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
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        organizationId: user.organizationId,
      },
      token,
    };
  }
}

export default new AuthService();
