const chai = require('chai');
const { ezEncrypt, ezDecrypt } = require('../easycrypt');

describe('EasyCrypt', () => {
  describe('Output Tests', () => {
    it('Encrypt should give back string with 3 segments seperated by + signs', () => {
      const input = 'Easy';
      const crypted = ezEncrypt(input);
      const numSegments = crypted.split(':').length;
      chai.expect(numSegments === 3).to.be.true;
    });
    it('Encrypt and decrypt should give back salted password', () => {
      const input = 'Easy';
      const crypted = ezEncrypt(input);
      const decrypted = ezDecrypt(crypted).slice(0, input.length);
      chai.expect(input === decrypted).to.be.true;
    });
  });
});
