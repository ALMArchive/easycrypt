const { ezEncrypt, ezDecrypt } = require('../easycrypt');

const stringToEncrypt = 'This is easy.';
const crypted = ezEncrypt(stringToEncrypt);
console.log(`Original: ${stringToEncrypt}`);
console.log(`Crypted: ${crypted}`);
console.log(`Decrypted: ${ezDecrypt(crypted)}`);
const salt = crypted.split(':')[1];
console.log(`Desalted: ${ezDecrypt(crypted).replace(salt, '')}`);
