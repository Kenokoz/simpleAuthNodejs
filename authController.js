const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Role = require('./models/Role');

class AuthController {
  async registration(req, res) {
    try {
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });

      if (candidate) {
        return res.status(400).json({ message: 'User already exists' });
      }
      const hashPass = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: 'USER' });
      const user = new User({ username, password: hashPass, roles: [userRole.value] });
      await user.save();
      return res.json({ message: 'The user has been successfully registered' });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' });
    }
  }

  async login(req, res) {
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }

  async getUsers(req, res) {
    try {
      res.json('hello');
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new AuthController();
