const { verify } = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = (roles) => {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      // первым элементом идет тип токена Bearer
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(403).json({ message: 'User is not authorized' });
      }
      const { roles: userRoles } = verify(token, secret);
      let hasRole = false;
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true;
        }
      });

      if (!hasRole) {
        return res.status(403).json({ message: 'You do not have access' });
      }

      next();
    } catch (e) {
      console.log(e);
      return res.status(403).json({ message: 'User is not authorized' });
    }
  };
};
