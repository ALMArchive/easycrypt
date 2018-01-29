"use strict";

import EasyCrypt from "../easycrypt";

let stringToEncrypt = "This is easy.";
let crypted = EasyCrypt.encrypt(stringToEncrypt);
console.log(`Original: ${stringToEncrypt}`)
console.log(`Crypted: ${crypted.content}`);
console.log(`Decrypted: ${EasyCrypt.decrypt(crypted)}`);
