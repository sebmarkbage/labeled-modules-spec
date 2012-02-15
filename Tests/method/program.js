require: 'test';
var a = require('a');
var foo = a.foo;
assert(a.foo() == a, 'calling a module member');
assert(foo() == (function (){return this})(), 'members not implicitly bound');
a.set(10);
assert(a.get() == 10, 'get and set')
print('DONE', 'info');
