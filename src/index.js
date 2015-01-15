var isObjectLike = require("is_object_like");


var objectStringStr = "[object String]",
    objectToString = Object.prototype.toString;


module.exports = function isString(obj) {
    return typeof(obj) === "string" || (isObjectLike(obj) && objectToString.call(obj) === objectStringStr) || false;
};
