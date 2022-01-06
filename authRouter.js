const Router = require('express');
const authController = require('./authController');
const { check } = require('express-validator');

const router = new Router();

router.post(
  '/registration',
  [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль не может быть короче 4 символов').isLength({ min: 4, max: 10 }),
  ],
  authController.registration
);
router.post('/login', authController.login);
router.get('/users', authController.getUsers);

module.exports = router;
