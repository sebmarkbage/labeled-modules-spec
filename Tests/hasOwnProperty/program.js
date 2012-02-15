require: 'hasOwnProperty', 'toString';
require: 'test';

assert(hasOwnProperty === toString && toString === Object.prototype.valueOf);

print('DONE', 'info');
