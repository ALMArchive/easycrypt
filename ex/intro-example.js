"use strict";

const EasyCrypt = require("../easycrypt.js");
const ez = new EasyCrypt();

let stringToEncrypt = "This is easy.";
let crypted = ez.encrypt(stringToEncrypt);
console.log(`Original: ${stringToEncrypt}`)
console.log(`Crypted: ${crypted.content}`);
console.log(`Decrypted: ${ez.decrypt(crypted)}`);
