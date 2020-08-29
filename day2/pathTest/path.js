const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename():', path.basename(string,path.extname(string)));
console.log('-------------------------------');
console.log('path.parse():', path.parse(string));
console.log('path.format():', path.format({
    dir : 'C\\user\\zerocho' ,
    name : 'path' ,
    ext : '.js'
}));

console.log('path.normalize():', path.normalize('/Users/moon/VSCode/Node/day2/pathTest///path.js'));
console.log('---------------------------------');
console.log('path.isAbsolute():', path.isAbsolute('/Users'));
console.log('path.isAbsolute():', path.isAbsolute('./home'));
console.log('---------------------------------');
console.log('path.relative():', path.relative('/Users/moon/VSCode/Node/day2/pathTest///path.js', '/Users/moon'));
console.log('path.join():', path.join(__dirname, '..', '..', '/moon', '.', '/path'));
console.log('path.resolve():', path.resolve(__dirname, '..', '/moon', '.', '/path'));