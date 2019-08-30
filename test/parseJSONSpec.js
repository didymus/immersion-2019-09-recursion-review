// test cases are described in fixtures.js
describe('parseJSON', function() {
  xit('should match the result of calling JSON.parse', function() {
    parseableStrings.forEach(function(test) {
      const result = parseJSON(test);
      const expected = JSON.parse(test);
      const equality = _.isEqual(result, expected); // why can't we use `===` here?
      expect(equality).to.equal(true);
    });
  });

  xit('should throw an error for invalid stringified JSON', function() {
    unparseableStrings.forEach(function(test) {
      const fn = () => {
        parseJSON(test);
      };
      // if you'd prefer, you can write your version of parseJSON
      // so that it passes this test instead of the one on line 21.
      // expect(parseJSON(test)).to.equal(undefined);
      expect(fn).to.throw(SyntaxError);
    });
  });

  it('should not call native function', function() {
    const parseSpy = sinon.spy(JSON, 'parse');

    parseJSON('{}');

    sinon.assert.notCalled(parseSpy);
    parseSpy.restore();
  });
});
