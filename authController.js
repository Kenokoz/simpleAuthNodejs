class AuthController {
  async registration(req, res) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res) {
    try {
    } catch (e) {
      console.log(e);
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
