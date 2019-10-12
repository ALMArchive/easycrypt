const EasyCrypt = require('../easycrypt');

const stringToEncrypt = 'This is easy.';
const crypted = EasyCrypt.encrypt(stringToEncrypt);
console.log(`Original: ${stringToEncrypt}`);
console.log(`Crypted: ${crypted.content}`);
console.log(`Decrypted: ${EasyCrypt.decrypt(crypted)}`);
