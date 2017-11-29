# EasyCrypt
A simple bi-directional salting and encryption system designed for securing authentication tokens.

```javascript
"use strict";

const EasyCrypt = require("../EasyCrypt.js");
const ez = new EasyCrypt();

let stringToEncrypt = "This is easy.";
let crypted = ez.encrypt(stringToEncrypt);
console.log(`Crypted: ${crypted.content}`);
console.log(`Decrypted: ${ez.decrypt(crypted)}`);
```

## Installing
`npm install easycrypt`

## API

### EasyCrypt
Main class, constructor has no arguments and returns a EasyCrypt object.

#### Settings

##### Environment Variable
The encryption password is stored on an environment variable called EasyCryptPW.

You must set the environment variable before using EasyCrypt.

From the command line:

```bash
EasyCryptPW='3zTvzr3p67VC61jmV54rIYu1545x4TlY' node EasyCrypt.js 
```

#### Construction

```javascript
const EasyCrypt = require("../EasyCrypt.js");
const ez        = new EasyCrypt();
```

#### Methods

##### encrypt

Used to salt an encrypt a piece of text.
```javascript
const EasyCrypt = require("../EasyCrypt.js");
const ez        = new EasyCrypt(/\S+/g);
const text      = ez.encrypt("Easy");
console.log(text);

/* 
 * { content: '5cc07dd95c919de9544ed4f1f5+H9StNlQK',
 * tag: <Buffer 97 78 be 76 66 da 3c 71 ca fd 4e a0 07 d0 39 f8> }
*/

// This same object must be passed to decrypt, so store content and tag
```
Returns object with authorization buffer and encrypted content.

##### decrypt

Used to salt an encrypt a piece of text.
```javascript
const EasyCrypt = require("../EasyCrypt.js");
const ez        = new EasyCrypt(/\S+/g);
const text      = ez.encrypt("Easy");
console.log(ez.decrypt(text)); // Easy
```
Returns the original decrypted string.

## Scripts

#### Testing
To run mocha/chai tests.
`npm run test`

#### Examples
To run the main example.
`npm run ex`

## License
EasyCrypt.js is released under the MIT license.
