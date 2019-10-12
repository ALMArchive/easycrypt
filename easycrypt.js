const crypto = require('crypto');
const randomstring = require('./randomstring.js');

const genString = () => randomstring(12);

const algorithm = 'aes-256-gcm';
const password = process.env.EasyCryptPW
  || new Error('Must provide EasyCryptPW as a env variable');

function ezEncrypt(text) {
  const salt = genString();
  const finalText = `${text}${salt}`;
  const iv = genString();
  const cipher = crypto.createCipheriv(algorithm, password, iv);
  const crypted = `${cipher.update(finalText, 'utf8').toString('base64')}${cipher.final('hex').toString('base64')}`;
  const tag = cipher.getAuthTag().toString('base64');
  return `${crypted}:${tag}:${iv}`;
}

function ezDecrypt(crypt) {
  const [crypted, tag, iv] = crypt.split(':');
  const decipher = crypto.createDecipheriv(algorithm, password, iv);
  decipher.setAuthTag(Buffer.from(tag, 'base64'));
  const base64Crypted = Buffer.from(crypted, 'base64');
  return `${decipher.update(base64Crypted, 'hex', 'utf8')}${decipher.final('utf-8')}`;
}

module.exports = {
  ezEncrypt,
  ezDecrypt,
};
