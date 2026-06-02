import Organization from '../database/models/Organization';

class UserRepository {
  async findByPk(id: string) {
    return Organization.findByPk(id);
  }

  async create(data: { name: string; slug: string }) {
    return Organization.create(data);
  }
}

export default new UserRepository();
