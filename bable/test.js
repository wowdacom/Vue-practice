var babel = require('babel-core')
var es6Core = 'let x = n => n + 1'
var es5Core = babel.transform(es6Core, {
  // presets: ['es2015']
  presets: [['env', {"module": "AMD"}]]
})
  .code;

console.log(es5Core);
