function sendJsonResponse(res, status, content) {
  res.status(status);
  res.json(content);
}

module.exports.homePage = (req, res) => {
  sendJsonResponse(res, 200, 'I work');
};
