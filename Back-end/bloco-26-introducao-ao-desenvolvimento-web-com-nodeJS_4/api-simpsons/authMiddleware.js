module.exports = (req, res, next) => {
  const { token } = req.headers;
  if (!token || token.length !== 16) {
    return res.status(401).json({
      message: 'Token inválido',
    });
  }

  return next();
};
