import { equalsExtends } from './benchmarks/compareArrays';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// add tests
suite.add('Array#CompareEqualsExtends', function(){
  equalsExtends([1,1,2], [3,5,8]);
}).add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
})
.add('String#match', function() {
  !!'Hello World!'.match(/o/);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });