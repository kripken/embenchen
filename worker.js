
var Module = {
  print: function(x) { Module.printBuffer += x + '\n' },
  printBuffer: '',
  preRun: function() {
    Module.startTime = Date.now();
  },
  postRun: function() {
    Module.endTime = Date.now();
  },
};

if (typeof console === 'undefined') console = { log: function(){} };

onmessage = function(event) {
  var msg = event.data;

  importScripts('benches/' + msg.benchmark + '.js');

  postMessage({
    benchmark: msg.benchmark,
    runtime: Module.endTime - Module.startTime,
  });
};

