var a;a||(a=typeof Module !== 'undefined' ? Module : {});var l={},m;for(m in a)a.hasOwnProperty(m)&&(l[m]=a[m]);a.arguments=[];a.thisProgram="./this.program";a.quit=function(b,c){throw c;};a.preRun=[];a.postRun=[];var n=!1,q=!1,r=!1,t=!1;
if(a.ENVIRONMENT)if("WEB"===a.ENVIRONMENT)n=!0;else if("WORKER"===a.ENVIRONMENT)q=!0;else if("NODE"===a.ENVIRONMENT)r=!0;else if("SHELL"===a.ENVIRONMENT)t=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else n="object"===typeof window,q="function"===typeof importScripts,r="object"===typeof process&&"function"===typeof require&&!n&&!q,t=!n&&!r&&!q;
if(r){var u,v;a.read=function(b,c){u||(u=require("fs"));v||(v=require("path"));b=v.normalize(b);b=u.readFileSync(b);return c?b:b.toString()};a.readBinary=function(b){b=a.read(b,!0);b.buffer||(b=new Uint8Array(b));assert(b.buffer);return b};1<process.argv.length&&(a.thisProgram=process.argv[1].replace(/\\/g,"/"));a.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=a);process.on("uncaughtException",function(b){if(!(b instanceof w))throw b;});process.on("unhandledRejection",
function(){process.exit(1)});a.inspect=function(){return"[Emscripten Module object]"}}else if(t)"undefined"!=typeof read&&(a.read=function(b){return read(b)}),a.readBinary=function(b){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(b));b=read(b,"binary");assert("object"===typeof b);return b},"undefined"!=typeof scriptArgs?a.arguments=scriptArgs:"undefined"!=typeof arguments&&(a.arguments=arguments),"function"===typeof quit&&(a.quit=function(b){quit(b)});else if(n||q)a.read=function(b){var c=
new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},q&&(a.readBinary=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),a.readAsync=function(b,c,d){var e=new XMLHttpRequest;e.open("GET",b,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?c(e.response):d()};e.onerror=d;e.send(null)},a.setWindowTitle=function(b){document.title=b};
a.print="undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null;a.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||a.print;a.print=a.print;a.printErr=a.printErr;for(m in l)l.hasOwnProperty(m)&&(a[m]=l[m]);l=void 0;function x(b){var c;c||(c=16);return Math.ceil(b/c)*c}var y=0;function assert(b,c){b||z("Assertion failed: "+c)}var A="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");
function aa(b){for(var c=0,d=0;d<b.length;++d){var e=b.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|b.charCodeAt(++d)&1023);127>=e?++c:c=2047>=e?c+2:65535>=e?c+3:2097151>=e?c+4:67108863>=e?c+5:c+6}var g=c+1;c=ba(g);d=c;e=ca;if(0<g){g=d+g-1;for(var h=0;h<b.length;++h){var f=b.charCodeAt(h);55296<=f&&57343>=f&&(f=65536+((f&1023)<<10)|b.charCodeAt(++h)&1023);if(127>=f){if(d>=g)break;e[d++]=f}else{if(2047>=f){if(d+1>=g)break;e[d++]=192|f>>6}else{if(65535>=f){if(d+2>=g)break;e[d++]=224|f>>
12}else{if(2097151>=f){if(d+3>=g)break;e[d++]=240|f>>18}else{if(67108863>=f){if(d+4>=g)break;e[d++]=248|f>>24}else{if(d+5>=g)break;e[d++]=252|f>>30;e[d++]=128|f>>24&63}e[d++]=128|f>>18&63}e[d++]=128|f>>12&63}e[d++]=128|f>>6&63}e[d++]=128|f&63}}e[d]=0}return c}var buffer,ca,B,da,C;
function ea(){a.HEAP8=ca=new Int8Array(buffer);a.HEAP16=da=new Int16Array(buffer);a.HEAP32=C=new Int32Array(buffer);a.HEAPU8=B=new Uint8Array(buffer);a.HEAPU16=new Uint16Array(buffer);a.HEAPU32=new Uint32Array(buffer);a.HEAPF32=new Float32Array(buffer);a.HEAPF64=new Float64Array(buffer)}var D,E,F,G,H,I,J,L;D=E=G=H=I=J=L=0;F=!1;
function fa(){z("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+M+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var N=a.TOTAL_STACK||5242880,M=a.TOTAL_MEMORY||268435456;M<N&&a.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+M+"! (TOTAL_STACK="+N+")");
a.buffer?buffer=a.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(a.wasmMemory=new WebAssembly.Memory({initial:M/65536,maximum:M/65536}),buffer=a.wasmMemory.buffer):buffer=new ArrayBuffer(M),a.buffer=buffer);ea();C[0]=1668509029;da[1]=25459;if(115!==B[2]||99!==B[3])throw"Runtime error: expected the system to be little-endian!";
function O(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c();else{var d=c.m;"number"===typeof d?void 0===c.a?a.dynCall_v(d):a.dynCall_vi(d,c.a):d(void 0===c.a?null:c.a)}}}var ha=[],P=[],ia=[],ja=[],ka=[],Q=!1;function la(){var b=a.preRun.shift();ha.unshift(b)}var R=0,S=null,T=null;a.preloadedImages={};a.preloadedAudios={};function U(b){return String.prototype.startsWith?b.startsWith("data:application/octet-stream;base64,"):0===b.indexOf("data:application/octet-stream;base64,")}
(function(){function b(){try{if(a.wasmBinary)return new Uint8Array(a.wasmBinary);if(a.readBinary)return a.readBinary(g);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(K){z(K)}}function c(){return a.wasmBinary||!n&&!q||"function"!==typeof fetch?new Promise(function(c){c(b())}):fetch(g,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+g+
"'";return b.arrayBuffer()}).catch(function(){return b()})}function d(b){function d(b){k=b.exports;if(k.memory){b=k.memory;var c=a.buffer;b.byteLength<c.byteLength&&a.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");c=new Int8Array(c);(new Int8Array(b)).set(c);a.buffer=buffer=b;ea()}a.asm=k;a.usingWasm=!0;R--;a.monitorRunDependencies&&a.monitorRunDependencies(R);0==R&&(null!==S&&(clearInterval(S),S=null),T&&(b=T,T=null,b()))}function e(b){d(b.instance)}
function K(b){c().then(function(b){return WebAssembly.instantiate(b,f)}).then(b).catch(function(b){a.printErr("failed to asynchronously prepare wasm: "+b);z(b)})}if("object"!==typeof WebAssembly)return a.printErr("no native wasm support detected"),!1;if(!(a.wasmMemory instanceof WebAssembly.Memory))return a.printErr("no native wasm Memory in use"),!1;b.memory=a.wasmMemory;f.global={NaN:NaN,Infinity:Infinity};f["global.Math"]=Math;f.env=b;R++;a.monitorRunDependencies&&a.monitorRunDependencies(R);if(a.instantiateWasm)try{return a.instantiateWasm(f,
d)}catch(qa){return a.printErr("Module.instantiateWasm callback failed with error: "+qa),!1}a.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||U(g)||"function"!==typeof fetch?K(e):WebAssembly.instantiateStreaming(fetch(g,{credentials:"same-origin"}),f).then(e).catch(function(b){a.printErr("wasm streaming compile failed: "+b);a.printErr("falling back to ArrayBuffer instantiation");K(e)});return{}}var e="asm2wasm_skinning.wast",g="asm2wasm_skinning.wasm",h="asm2wasm_skinning.temp.asm.js";
"function"===typeof a.locateFile&&(U(e)||(e=a.locateFile(e)),U(g)||(g=a.locateFile(g)),U(h)||(h=a.locateFile(h)));var f={global:null,env:null,asm2wasm:{"f64-rem":function(b,c){return b%c},"debugger":function(){debugger}},parent:a},k=null;a.asmPreload=a.asm;var p=a.reallocBuffer;a.reallocBuffer=function(b){if("asmjs"===W)var c=p(b);else a:{var d=a.usingWasm?65536:16777216;0<b%d&&(b+=d-b%d);d=a.buffer.byteLength;if(a.usingWasm)try{c=-1!==a.wasmMemory.grow((b-d)/65536)?a.buffer=a.wasmMemory.buffer:null;
break a}catch(ta){c=null;break a}c=void 0}return c};var W="";a.asm=function(b,c){if(!c.table){b=a.wasmTableSize;void 0===b&&(b=1024);var e=a.wasmMaxTableSize;c.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==e?new WebAssembly.Table({initial:b,maximum:e,element:"anyfunc"}):new WebAssembly.Table({initial:b,element:"anyfunc"}):Array(b);a.wasmTable=c.table}c.memoryBase||(c.memoryBase=a.STATIC_BASE);c.tableBase||(c.tableBase=0);(c=d(c))||z("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");
return c}})();D=1024;E=D+5456;P.push();a.STATIC_BASE=D;a.STATIC_BUMP=5456;E+=16;var V=0;function X(){V+=4;return C[V-4>>2]}var ma={};
function Y(b,c){V=c;try{var d=X(),e=X(),g=X();b=0;Y.c||(Y.c=[null,[],[]],Y.i=function(b,c){var d=Y.c[b];assert(d);if(0===c||10===c){b=1===b?a.print:a.printErr;a:{for(var e=c=0;d[e];)++e;if(16<e-c&&d.subarray&&A)c=A.decode(d.subarray(c,e));else for(e="";;){var f=d[c++];if(!f){c=e;break a}if(f&128){var g=d[c++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|g);else{var h=d[c++]&63;if(224==(f&240))f=(f&15)<<12|g<<6|h;else{var k=d[c++]&63;if(240==(f&248))f=(f&7)<<18|g<<12|h<<6|k;else{var p=d[c++]&
63;if(248==(f&252))f=(f&3)<<24|g<<18|h<<12|k<<6|p;else{var W=d[c++]&63;f=(f&1)<<30|g<<24|h<<18|k<<12|p<<6|W}}}65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else e+=String.fromCharCode(f)}}b(c);d.length=0}else d.push(c)});for(c=0;c<g;c++){for(var h=C[e+8*c>>2],f=C[e+(8*c+4)>>2],k=0;k<f;k++)Y.i(d,B[h+k]);b+=f}return b}catch(p){return"undefined"!==typeof FS&&p instanceof FS.b||z(p),-p.f}}assert(!F);var na=E;E=E+4+15&-16;L=na;G=H=x(E);I=G+N;J=x(I);
C[L>>2]=J;F=!0;a.wasmTableSize=7;a.wasmMaxTableSize=7;a.g={};
a.h={abort:z,enlargeMemory:function(){fa()},getTotalMemory:function(){return M},abortOnCannotGrowMemory:fa,___setErrNo:function(b){a.___errno_location&&(C[a.___errno_location()>>2]=b);return b},___syscall140:function(b,c){V=c;try{var d=ma.j();X();var e=X(),g=X(),h=X();FS.o(d,e,h);C[g>>2]=d.position;d.l&&0===e&&0===h&&(d.l=null);return 0}catch(f){return"undefined"!==typeof FS&&f instanceof FS.b||z(f),-f.f}},___syscall146:Y,___syscall54:function(b,c){V=c;return 0},___syscall6:function(b,c){V=c;try{var d=
ma.j();FS.close(d);return 0}catch(e){return"undefined"!==typeof FS&&e instanceof FS.b||z(e),-e.f}},_emscripten_memcpy_big:function(b,c,d){B.set(B.subarray(c,c+d),b);return b},DYNAMICTOP_PTR:L,STACKTOP:H};var oa=a.asm(a.g,a.h,buffer);a.asm=oa;a._main=function(){return a.asm._main.apply(null,arguments)};var ba=a.stackAlloc=function(){return a.asm.stackAlloc.apply(null,arguments)};a.dynCall_v=function(){return a.asm.dynCall_v.apply(null,arguments)};a.asm=oa;
function w(b){this.name="ExitStatus";this.message="Program terminated with exit("+b+")";this.status=b}w.prototype=Error();w.prototype.constructor=w;T=function pa(){a.calledRun||Z([].concat(a.arguments));a.calledRun||(T=pa)};
a.callMain=function(b){b=b||[];Q||(Q=!0,O(P));var c=b.length+1,d=ba(4*(c+1));C[d>>2]=aa(a.thisProgram);for(var e=1;e<c;e++)C[(d>>2)+e]=aa(b[e-1]);C[(d>>2)+c]=0;try{var g=a._main(c,d,0);ra(g,!0)}catch(h){h instanceof w||("SimulateInfiniteLoop"==h?a.noExitRuntime=!0:((b=h)&&"object"===typeof h&&h.stack&&(b=[h,h.stack]),a.printErr("exception thrown: "+b),a.quit(1,h)))}finally{}};
function Z(b){function c(){if(!a.calledRun&&(a.calledRun=!0,!y)){Q||(Q=!0,O(P));O(ia);if(a.onRuntimeInitialized)a.onRuntimeInitialized();a._main&&sa&&a.callMain(b);if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();ka.unshift(c)}O(ka)}}b=b||a.arguments;if(!(0<R)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)la();O(ha);0<R||a.calledRun||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},
1);c()},1)):c())}}a.run=Z;function ra(b,c){if(!c||!a.noExitRuntime||0!==b){if(!a.noExitRuntime&&(y=!0,H=void 0,O(ja),a.onExit))a.onExit(b);r&&process.exit(b);a.quit(b,new w(b))}}a.exit=ra;function z(b){if(a.onAbort)a.onAbort(b);void 0!==b?(a.print(b),a.printErr(b),b=JSON.stringify(b)):b="";y=!0;throw"abort("+b+"). Build with -s ASSERTIONS=1 for more info.";}a.abort=z;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();var sa=!0;
a.noInitialRun&&(sa=!1);a.noExitRuntime=!0;Z([].concat(a.arguments));
