const { User } = require('../../modules/userModule');

module.exports = {
  postUser: async (req, res, next) => {
    try {
      const user = new User(req.body)
      await user.save();
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
}
