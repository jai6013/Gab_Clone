module.exports = (message) => (req, res, next) => {
  try {
    if (req.params.id !== req?.user?._id) return res.status(403).send(message);
    return next();
  } catch (err) {
    return res.status(500).send(err);
  }
};
