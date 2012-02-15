require:
	'test',
	'submodule/a',
	'submodule/b';

assert(foo == foo2, 'a and b share foo through a relative require');
print('DONE', 'info');
