var assert = require('assert');

describe('String', function() {
  describe('#spacify', function() {
    it('should return a string with spaces', function() {
      assert.equal('S o w j u', 'sowju'.spacify());
    });
  });
});