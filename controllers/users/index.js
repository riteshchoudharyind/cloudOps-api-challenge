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
  },
  getUsers: async (req, res, next) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  },
  getUserById: async (req, res, next) => {
    try {
      const user = await User.find({ _id: req.params.id });
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  },
}

