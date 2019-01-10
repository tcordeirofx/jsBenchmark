import { equalsExtends, stringfy } from './benchmarks/compareArrays';
import { existArrayMode, existObjectMode } from './benchmarks/exists'

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

const ObjTest = ["item1", "item2", "item3", "item4", "item5", "item6"];
// add tests
suite
// .add('Array#CompareEqualsExtends', function(){
//   equalsExtends(ObjTest, ObjTest);
// })
// .add('Array#Stringfy', function(){
//   stringfy(ObjTest, ObjTest);
// })
// .add('RegExp#test', function() {
//   /o/.test('Hello World!');
// })
// .add('String#indexOf', function() {
//   'Hello World!'.indexOf('o') > -1;
// })
// .add('String#match', function() {
//   !!'Hello World!'.match(/o/);
// })
// add listeners
.add('Exist#existArrayMode', function(){
  existArrayMode('pelo');
})
.add('Exist#existObjectMode', function(){
  existObjectMode('pelo');
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });