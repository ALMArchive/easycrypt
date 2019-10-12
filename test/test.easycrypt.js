const chai = require('chai');
const EasyCrypt = require('../easycrypt');

describe('EasyCrypt', () => {
  describe('Output Tests', () => {
    it('Return from encrypt should have tag (Buffer) and content (string)', () => {
      let out = EasyCrypt.encrypt('Easy');
      chai.expect(!!out.content && !!out.tag).to.be.true;
      chai.expect(out.tag.__proto__.constructor.name === 'Buffer').to.be.true;
      chai.expect(typeof out.content === 'string').to.be.true;
    });
    it('Encrypt and decrypt should match', () => {
      let input = 'Easy';
      chai.expect(input === EasyCrypt.decrypt(EasyCrypt.encrypt(input))).to.be.true;
    })
  });
});
