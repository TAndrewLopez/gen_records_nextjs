const isAdmin = (handler) => {
  return async (req, res) => {
    if (!req.user.isAdmin) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to perform this action.",
      });
    }
    return handler(req, res);
  };
};

export default isAdmin;
