import User from '../database/models/User';

class UserRepository {
  async findByEmail(email: string) {
    console.log('Searching:', email);

    const result = await User.findOne({
      where: { email },
    });

    console.log(result);

    return result;
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
