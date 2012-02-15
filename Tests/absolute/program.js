require: 'test', 'submodule/a';
var b = require('b');
assert(foo().foo === b.foo, 'require works with absolute identifiers');
print('DONE', 'info');
