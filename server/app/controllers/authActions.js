// Import access to database tables
const argon2 = require("argon2");

const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmail(req.body.email);

    if (user == null) {
      res.sendStatus(422);
    }

    const verifiedPwd = await argon2.verify(user.password, req.body.password);

    if (verifiedPwd) {
      delete user.password;

      res.json({ user });
    } else {
      res.status(422).json({ msg: "Une erreur est survenue." });
    }
  } catch (error) {
    next(error);
  }
};

const register = async (req, res) => {
  try {
    await tables.user.create(req.body);

    res
      .status(201)
      .json({ msg: `L'utilisateur ${req.body.firstname} est bien créé !` });
  } catch (error) {
    res.status(403).json({
      error:
        "Il y a un problème avec l'ajout du compte, etes vous déjà inscrit ?",
    });
  }
};

module.exports = {
  login,
  register,
};
