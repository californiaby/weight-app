'use strict';

function NotFoundError(type, id) {
  const err = new Error(`Resource ${type} with id ${id} was not found.`);
  // const err = Error.call(this, `Resource '${type}' with id '${id}' was not found.`);
  err.statusCode = 404;

  return err;
}

module.exports = NotFoundError;
