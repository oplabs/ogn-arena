const bcrypt = require('bcrypt')
const saltRounds = 10;


async function genPasswordHash(password) {
  return bcrypt.hash(password, saltRounds);
}


async function matchPasswordHash(password, hash) {
  return bcrypt.compare(password, hash);
}

module.exports = {
  genPasswordHash,
  matchPasswordHash
}
