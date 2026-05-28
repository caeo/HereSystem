import User from '../database/models/User';

class UserRepository {
  async findByEmail(email: string) {
    return User.findOne({
      where: { email },
    });
  }

  async create(data: {
    name: string;
    email: string;
    password: string;
    role: string;
    organizationId: string;
  }) {
    return User.create(data);
  }
}

export default new UserRepository();
