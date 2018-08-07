'use strict';

// this middleware should be the last one
module.exports = function (err, req, res, next) {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: true,
    message: err.message || undefined,
    type: err.type || undefined,
  });

  console.error(err);
};
