# EasyCrypt
A simple bi-directional salting and encryption system designed for securing authentication tokens.

## Basic Example
```javascript
const { ezEncrypt, ezDecrypt } = require("easycrypt");

let stringToEncrypt = "This is easy.";
let crypted = ezEncrypt(stringToEncrypt);
console.log(`Crypted: ${crypted}`);
console.log(`Decrypted: ${ezDecrypt(crypted)}`); // This is easy.3@af2@F#Sd
```

## Validation Example
```javascript
// this is a contrived example
const { ezDecrypt } = require("easycrypt");
const encryptedString = database.getEncryptedString(); // get encrypted string
const userInput = api.getUserInput(); // get user supplied string to compare to

const salt = encryptedString.split(':');
const decrypt = ezDecrypt(encryptedString);

return `${userInput}${salt}` === decrypt;
```

## Installing
`npm install easycrypt`

## API

### EasyCrypt
Require exports ezEncrpyt and ezDecrypt.

#### Settings

##### Environment Variable
The encryption password is stored on an environment variable called EasyCryptPW.

You must set the environment variable before using EasyCrypt.

From the command line:

```bash
EasyCryptPW='3zTvzr3p67VC61jmV54rIYu1545x4TlY' node EasyCrypt.js 
```

#### Functions

##### ezEncrypt

Used to salt and encrypt a piece of text.
```javascript
const { ezEncrypt } = require("easycrypt");
const text = ezEncrypt("Easy");
console.log(text);

// x8PNf3Oq/NC/0+wAEvIaYw==:]RYY9)g6MdD@:daGjLpCvnJJy4s95XpNJ7w==:8LC)7$"'MQY)
// This same string must be passed to decrypt so store it
```
Returns an encryption key with four parts separated by colons.
- First Section is the string + a salt encrypted together (x8PNf3Oq/NC/0+wAEvIaYw==)
- Second Section is the Salt (]RYY9)g6MdD@)
- third Section is the authTag (daGjLpCvnJJy4s95XpNJ7w==)
- and finally the iv (8LC)7$"'MQY))

##### ezDecrypt

Used to decrypt a string encrypted with ezEnrypt.
```javascript
const { ezEncrypt, ezDecrypt } = require("easycrypt");
const text = ezEncrypt("Easy");
console.log(ezDecrypt(text));
```
Returns the original decrypted string with the salt appended to the end.

## Scripts

#### Testing
To run mocha/chai tests.
`npm run test`

#### Examples
To run the main example.
`npm run ex`

## License
EasyCrypt.js is released under the MIT license.
