function success(res, data) {
  return res.json({ success: true, data });
}

function error(res, message, status = 500) {
  return res.status(status).json({ success: false, message });
}

module.exports = { success, error };
