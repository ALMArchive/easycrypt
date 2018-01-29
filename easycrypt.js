import randomstring from 'randomstring';
import crypto from 'crypto';

const genString = () => randomstring.generate({ length: 8 });
const algorithm = 'aes-256-gcm';
const password = process.env.EasyCryptPW
  || new Error('Must provide EasyCryptPW as a env variable');

function encrypt(text, iv) {
  if (!iv) Error('Must provide iv to encrypt');
  const cipher = crypto.createCipheriv(algorithm, password, iv);
  let crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  const tag = cipher.getAuthTag();
  return {
    content: crypted,
    tag,
  };
}

function decrypt(encrypted, iv) {
  const decipher = crypto.createDecipheriv(algorithm, password, iv);
  decipher.setAuthTag(encrypted.tag);
  let dec = decipher.update(encrypted.content, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}

export default class EasyCrypt {
  static encrypt(text) {
    let finalText = text;
    const salt = genString();
    finalText += `+${salt}`;
    const iv = genString();
    const ret = encrypt(finalText, iv);
    ret.content += `+${iv}`;
    return ret;
  }

  static decrypt(cryptObj) {
    const [crypted, iv] = cryptObj.content.split('+');
    const decryptObj = {};
    decryptObj.content = crypted;
    decryptObj.tag = cryptObj.tag;
    const dcrypt = decrypt(decryptObj, iv);
    return dcrypt.split('+')[0];
  }
}
