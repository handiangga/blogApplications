function errorHandler(err, req, res, next) {
  switch (err.name) {
    case "notFound":
      res.status(404).json({ message: err.message });
      break;
    case "notLogin":
      res.status(404).json({ message: err.message });
      break;
    default:
      res.status(500).json({ message: "Internal Server Error" });
  }
}
module.exports = errorHandler;
