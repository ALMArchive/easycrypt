"use strict";

const randomstring = require("randomstring");
const genString = () => randomstring.generate({ length: 8 });

const crypto = require('crypto'),
  algorithm = 'aes-256-gcm',
  password = process.env.EasyCryptPW || new Error("Must provide EasyCryptPW as a env variable");

function encrypt(text, iv) {
  iv || new Error("Must provide iv to encrypt");
  const cipher = crypto.createCipheriv(algorithm, password, iv);
  let crypted  = cipher.update(text, 'utf8', 'hex');
  crypted     += cipher.final('hex');
  const tag    = cipher.getAuthTag();
  return {
    content: crypted,
    tag: tag
  };
}

function decrypt(encrypted, iv) {
  const decipher = crypto.createDecipheriv(algorithm, password, iv);
  decipher.setAuthTag(encrypted.tag);
  let dec = decipher.update(encrypted.content, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

class EasyCrypt {

  encrypt(text) {
    const salt  = genString();
    text       += `+${salt}`;
    const iv    = genString();
    let ret     = encrypt(text, iv);
    ret.content = ret.content + `+${iv}`;
    return ret;
  }

  decrypt(cryptObj) {
    const [crypted, iv]  = cryptObj.content.split("+");
    const decryptObj = {};
    decryptObj.content = crypted;
    decryptObj.tag     = cryptObj.tag;
    const dcrypt = decrypt(decryptObj, iv);
    return dcrypt.split("+")[0];
  }
}

module.exports = EasyCrypt;
