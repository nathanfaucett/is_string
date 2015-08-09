var tape = require("tape"),
    isString = require("..");


tape("isString(value) should return true when the value is a String", function(assert) {
    assert.equal(isString(null), false);
    assert.equal(isString(undefined), false);
    assert.equal(isString(0), false);
    assert.equal(isString({}), false);
    assert.equal(isString([]), false);
    assert.equal(isString(/./), false);
    assert.equal(isString(function noop() {}), false);
    assert.equal(isString(Object("")), false);

    assert.equal(isString(""), true);

    assert.end();
});
