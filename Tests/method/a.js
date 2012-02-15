exports: foo, set;

var foo = function () {
    return this;
};
var set = function (x) {
    this.x = x;
};

exports: var get = function () {
    return this.x;
},
getClosed = function () {
    return exports.x;
};
