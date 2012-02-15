require: 'test', 'a', 'b';

assert(a, 'a exists');
assert(b, 'b exists')
assert(a().b === b, 'a gets b');
assert(b().a === a, 'b gets a');

print('DONE', 'info');
