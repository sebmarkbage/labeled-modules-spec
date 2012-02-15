require: 'test';
require: 'real';
require: 'bogus';

assert(false, 'a missing import should never execute the program');
