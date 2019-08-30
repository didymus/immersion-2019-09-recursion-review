// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {
    stringifiableObjects.forEach((test) => {
      const expected = JSON.stringify(test);
      const result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach((obj) => {
      const expected = JSON.stringify(obj);
      const result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });
  });

  it('should not call native function', function() {
    const stringifySpy = sinon.spy(JSON, 'stringify');

    stringifyJSON({});

    sinon.assert.notCalled(stringifySpy);
    stringifySpy.restore();
  });
});
