const { body, validationResult } = require("express-validator");

/* eslint-disable */
// Middleware pour valider les données de l'utilisateur
const UserMiddleware = [
  body("email").isEmail().withMessage("L'email doit être valide."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit comporter au moins 6 caractères."),
  body("firstName").notEmpty().withMessage("Le prénom est obligatoire."),
  body("lastName").notEmpty().withMessage("Le nom de famille est obligatoire."),

  // Gestion des erreurs de validation
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = UserMiddleware;
