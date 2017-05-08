const { expect } = require('chai');
const { add } = require('./index');

describe('index', function() {
  describe('add', function() {
    it('should add two variables', function() {
      const a = 5;
      const b = 7;

      expect(add(a, b)).to.eql(12);
    });
  });
});
