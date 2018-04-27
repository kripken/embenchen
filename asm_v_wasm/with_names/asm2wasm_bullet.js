var a;a||(a=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in a)a.hasOwnProperty(l)&&(k[l]=a[l]);a.arguments=[];a.thisProgram="./this.program";a.quit=function(b,c){throw c;};a.preRun=[];a.postRun=[];var n=!1,p=!1,q=!1,t=!1;
if(a.ENVIRONMENT)if("WEB"===a.ENVIRONMENT)n=!0;else if("WORKER"===a.ENVIRONMENT)p=!0;else if("NODE"===a.ENVIRONMENT)q=!0;else if("SHELL"===a.ENVIRONMENT)t=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else n="object"===typeof window,p="function"===typeof importScripts,q="object"===typeof process&&"function"===typeof require&&!n&&!p,t=!n&&!q&&!p;
if(q){var u,v;a.read=function(b,c){u||(u=require("fs"));v||(v=require("path"));b=v.normalize(b);b=u.readFileSync(b);return c?b:b.toString()};a.readBinary=function(b){b=a.read(b,!0);b.buffer||(b=new Uint8Array(b));assert(b.buffer);return b};1<process.argv.length&&(a.thisProgram=process.argv[1].replace(/\\/g,"/"));a.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=a);process.on("uncaughtException",function(b){if(!(b instanceof w))throw b;});process.on("unhandledRejection",
function(){process.exit(1)});a.inspect=function(){return"[Emscripten Module object]"}}else if(t)"undefined"!=typeof read&&(a.read=function(b){return read(b)}),a.readBinary=function(b){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(b));b=read(b,"binary");assert("object"===typeof b);return b},"undefined"!=typeof scriptArgs?a.arguments=scriptArgs:"undefined"!=typeof arguments&&(a.arguments=arguments),"function"===typeof quit&&(a.quit=function(b){quit(b)});else if(n||p)a.read=function(b){var c=
new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},p&&(a.readBinary=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),a.readAsync=function(b,c,e){var d=new XMLHttpRequest;d.open("GET",b,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?c(d.response):e()};d.onerror=e;d.send(null)},a.setWindowTitle=function(b){document.title=b};
a.print="undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null;a.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||a.print;a.print=a.print;a.printErr=a.printErr;for(l in k)k.hasOwnProperty(l)&&(a[l]=k[l]);k=void 0;function aa(b){var c;c||(c=16);return Math.ceil(b/c)*c}var x=0;function assert(b,c){b||y("Assertion failed: "+c)}
function z(b){var c;if(0===c||!b)return"";for(var e=0,d,g=0;;){d=A[b+g>>0];e|=d;if(0==d&&!c)break;g++;if(c&&g==c)break}c||(c=g);d="";if(128>e){for(;0<c;)e=String.fromCharCode.apply(String,A.subarray(b,b+Math.min(c,1024))),d=d?d+e:e,b+=1024,c-=1024;return d}return ba(A,b)}var ca="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ba(b,c){for(var e=c;b[e];)++e;if(16<e-c&&b.subarray&&ca)return ca.decode(b.subarray(c,e));for(e="";;){var d=b[c++];if(!d)return e;if(d&128){var g=b[c++]&63;if(192==(d&224))e+=String.fromCharCode((d&31)<<6|g);else{var h=b[c++]&63;if(224==(d&240))d=(d&15)<<12|g<<6|h;else{var f=b[c++]&63;if(240==(d&248))d=(d&7)<<18|g<<12|h<<6|f;else{var m=b[c++]&63;if(248==(d&252))d=(d&3)<<24|g<<18|h<<12|f<<6|m;else{var r=b[c++]&63;d=(d&1)<<30|g<<24|h<<18|f<<12|m<<6|r}}}65536>d?e+=String.fromCharCode(d):(d-=
65536,e+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else e+=String.fromCharCode(d)}}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");
function da(b){for(var c=0,e=0;e<b.length;++e){var d=b.charCodeAt(e);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|b.charCodeAt(++e)&1023);127>=d?++c:c=2047>=d?c+2:65535>=d?c+3:2097151>=d?c+4:67108863>=d?c+5:c+6}var g=c+1;c=ea(g);e=c;d=fa;if(0<g){g=e+g-1;for(var h=0;h<b.length;++h){var f=b.charCodeAt(h);55296<=f&&57343>=f&&(f=65536+((f&1023)<<10)|b.charCodeAt(++h)&1023);if(127>=f){if(e>=g)break;d[e++]=f}else{if(2047>=f){if(e+1>=g)break;d[e++]=192|f>>6}else{if(65535>=f){if(e+2>=g)break;d[e++]=224|f>>
12}else{if(2097151>=f){if(e+3>=g)break;d[e++]=240|f>>18}else{if(67108863>=f){if(e+4>=g)break;d[e++]=248|f>>24}else{if(e+5>=g)break;d[e++]=252|f>>30;d[e++]=128|f>>24&63}d[e++]=128|f>>18&63}d[e++]=128|f>>12&63}d[e++]=128|f>>6&63}d[e++]=128|f&63}}d[e]=0}return c}var buffer,fa,A,ha,B;
function ia(){a.HEAP8=fa=new Int8Array(buffer);a.HEAP16=ha=new Int16Array(buffer);a.HEAP32=B=new Int32Array(buffer);a.HEAPU8=A=new Uint8Array(buffer);a.HEAPU16=new Uint16Array(buffer);a.HEAPU32=new Uint32Array(buffer);a.HEAPF32=new Float32Array(buffer);a.HEAPF64=new Float64Array(buffer)}var C,D,E,F,G,H,I,J;C=D=F=G=H=I=J=0;E=!1;
function ja(){y("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+K+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var L=a.TOTAL_STACK||5242880,K=a.TOTAL_MEMORY||268435456;K<L&&a.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+K+"! (TOTAL_STACK="+L+")");
a.buffer?buffer=a.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(a.wasmMemory=new WebAssembly.Memory({initial:K/65536,maximum:K/65536}),buffer=a.wasmMemory.buffer):buffer=new ArrayBuffer(K),a.buffer=buffer);ia();B[0]=1668509029;ha[1]=25459;if(115!==A[2]||99!==A[3])throw"Runtime error: expected the system to be little-endian!";
function M(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c();else{var e=c.g;"number"===typeof e?void 0===c.b?a.dynCall_v(e):a.dynCall_vi(e,c.b):e(void 0===c.b?null:c.b)}}}var ka=[],N=[],la=[],ma=[],na=[],O=!1;function oa(){var b=a.preRun.shift();ka.unshift(b)}var P=0,Q=null,R=null;a.preloadedImages={};a.preloadedAudios={};function S(b){return String.prototype.startsWith?b.startsWith("data:application/octet-stream;base64,"):0===b.indexOf("data:application/octet-stream;base64,")}
(function(){function b(){try{if(a.wasmBinary)return new Uint8Array(a.wasmBinary);if(a.readBinary)return a.readBinary(g);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(ta){y(ta)}}function c(){return a.wasmBinary||!n&&!p||"function"!==typeof fetch?new Promise(function(c){c(b())}):fetch(g,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+
g+"'";return b.arrayBuffer()}).catch(function(){return b()})}function e(b){function d(b){m=b.exports;if(m.memory){b=m.memory;var c=a.buffer;b.byteLength<c.byteLength&&a.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");c=new Int8Array(c);(new Int8Array(b)).set(c);a.buffer=buffer=b;ia()}a.asm=m;a.usingWasm=!0;P--;a.monitorRunDependencies&&a.monitorRunDependencies(P);0==P&&(null!==Q&&(clearInterval(Q),Q=null),R&&(b=R,R=null,b()))}
function e(b){d(b.instance)}function h(b){c().then(function(b){return WebAssembly.instantiate(b,f)}).then(b).catch(function(b){a.printErr("failed to asynchronously prepare wasm: "+b);y(b)})}if("object"!==typeof WebAssembly)return a.printErr("no native wasm support detected"),!1;if(!(a.wasmMemory instanceof WebAssembly.Memory))return a.printErr("no native wasm Memory in use"),!1;b.memory=a.wasmMemory;f.global={NaN:NaN,Infinity:Infinity};f["global.Math"]=Math;f.env=b;P++;a.monitorRunDependencies&&a.monitorRunDependencies(P);
if(a.instantiateWasm)try{return a.instantiateWasm(f,d)}catch(ua){return a.printErr("Module.instantiateWasm callback failed with error: "+ua),!1}a.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||S(g)||"function"!==typeof fetch?h(e):WebAssembly.instantiateStreaming(fetch(g,{credentials:"same-origin"}),f).then(e).catch(function(b){a.printErr("wasm streaming compile failed: "+b);a.printErr("falling back to ArrayBuffer instantiation");h(e)});return{}}var d="asm2wasm_bullet.wast",g="asm2wasm_bullet.wasm",
h="asm2wasm_bullet.temp.asm.js";"function"===typeof a.locateFile&&(S(d)||(d=a.locateFile(d)),S(g)||(g=a.locateFile(g)),S(h)||(h=a.locateFile(h)));var f={global:null,env:null,asm2wasm:{"f64-rem":function(b,c){return b%c},"debugger":function(){debugger}},parent:a},m=null;a.asmPreload=a.asm;var r=a.reallocBuffer;a.reallocBuffer=function(b){if("asmjs"===va)var c=r(b);else a:{var d=a.usingWasm?65536:16777216;0<b%d&&(b+=d-b%d);d=a.buffer.byteLength;if(a.usingWasm)try{c=-1!==a.wasmMemory.grow((b-d)/65536)?
a.buffer=a.wasmMemory.buffer:null;break a}catch(Aa){c=null;break a}c=void 0}return c};var va="";a.asm=function(b,c){if(!c.table){b=a.wasmTableSize;void 0===b&&(b=1024);var d=a.wasmMaxTableSize;c.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==d?new WebAssembly.Table({initial:b,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:b,element:"anyfunc"}):Array(b);a.wasmTable=c.table}c.memoryBase||(c.memoryBase=a.STATIC_BASE);c.tableBase||(c.tableBase=0);(c=
e(c))||y("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return c}})();C=1024;D=C+465280;N.push({g:function(){pa()}},{g:function(){qa()}});a.STATIC_BASE=C;a.STATIC_BUMP=465280;D+=16;var T=0;function U(){T+=4;return B[T-4>>2]}var ra={};
function V(b,c){T=c;try{var e=U(),d=U(),g=U();b=0;V.a||(V.a=[null,[],[]],V.j=function(b,c){var d=V.a[b];assert(d);0===c||10===c?((1===b?a.print:a.printErr)(ba(d,0)),d.length=0):d.push(c)});for(c=0;c<g;c++){for(var h=B[d+8*c>>2],f=B[d+(8*c+4)>>2],m=0;m<f;m++)V.j(e,A[h+m]);b+=f}return b}catch(r){return"undefined"!==typeof FS&&r instanceof FS.c||y(r),-r.f}}var W={},X=1;function Y(b,c){Y.a||(Y.a={});b in Y.a||(a.dynCall_v(c),Y.a[b]=1)}assert(!E);var sa=D;D=D+4+15&-16;J=sa;F=G=aa(D);H=F+L;I=aa(H);
B[J>>2]=I;E=!0;a.wasmTableSize=880;a.wasmMaxTableSize=880;a.h={};
a.i={abort:y,enlargeMemory:function(){ja()},getTotalMemory:function(){return K},abortOnCannotGrowMemory:ja,___assert_fail:function(b,c,e,d){y("Assertion failed: "+z(b)+", at: "+[c?z(c):"unknown filename",e,d?z(d):"unknown function"])},___cxa_pure_virtual:function(){x=!0;throw"Pure virtual function called!";},___setErrNo:function(b){a.___errno_location&&(B[a.___errno_location()>>2]=b);return b},___syscall140:function(b,c){T=c;try{var e=ra.l();U();var d=U(),g=U(),h=U();FS.o(e,d,h);B[g>>2]=e.position;
e.m&&0===d&&0===h&&(e.m=null);return 0}catch(f){return"undefined"!==typeof FS&&f instanceof FS.c||y(f),-f.f}},___syscall146:V,___syscall54:function(b,c){T=c;return 0},___syscall6:function(b,c){T=c;try{var e=ra.l();FS.close(e);return 0}catch(d){return"undefined"!==typeof FS&&d instanceof FS.c||y(d),-d.f}},_abort:function(){a.abort()},_emscripten_memcpy_big:function(b,c,e){A.set(A.subarray(c,c+e),b);return b},_gettimeofday:function(b){var c=Date.now();B[b>>2]=c/1E3|0;B[b+4>>2]=c%1E3*1E3|0;return 0},
_llvm_trap:function(){y("trap!")},_pthread_getspecific:function(b){return W[b]||0},_pthread_key_create:function(b){if(0==b)return 22;B[b>>2]=X;W[X]=0;X++;return 0},_pthread_once:Y,_pthread_setspecific:function(b,c){if(!(b in W))return 22;W[b]=c;return 0},DYNAMICTOP_PTR:J,STACKTOP:G};var wa=a.asm(a.h,a.i,buffer);a.asm=wa;
var qa=a.__GLOBAL__sub_I_btQuickprof_cpp=function(){return a.asm.__GLOBAL__sub_I_btQuickprof_cpp.apply(null,arguments)},pa=a.__GLOBAL__sub_I_bullet_cpp=function(){return a.asm.__GLOBAL__sub_I_bullet_cpp.apply(null,arguments)};a._main=function(){return a.asm._main.apply(null,arguments)};var ea=a.stackAlloc=function(){return a.asm.stackAlloc.apply(null,arguments)};a.dynCall_v=function(){return a.asm.dynCall_v.apply(null,arguments)};a.dynCall_vi=function(){return a.asm.dynCall_vi.apply(null,arguments)};
a.asm=wa;function w(b){this.name="ExitStatus";this.message="Program terminated with exit("+b+")";this.status=b}w.prototype=Error();w.prototype.constructor=w;R=function xa(){a.calledRun||Z([].concat(a.arguments));a.calledRun||(R=xa)};
a.callMain=function(b){b=b||[];O||(O=!0,M(N));var c=b.length+1,e=ea(4*(c+1));B[e>>2]=da(a.thisProgram);for(var d=1;d<c;d++)B[(e>>2)+d]=da(b[d-1]);B[(e>>2)+c]=0;try{var g=a._main(c,e,0);ya(g,!0)}catch(h){h instanceof w||("SimulateInfiniteLoop"==h?a.noExitRuntime=!0:((b=h)&&"object"===typeof h&&h.stack&&(b=[h,h.stack]),a.printErr("exception thrown: "+b),a.quit(1,h)))}finally{}};
function Z(b){function c(){if(!a.calledRun&&(a.calledRun=!0,!x)){O||(O=!0,M(N));M(la);if(a.onRuntimeInitialized)a.onRuntimeInitialized();a._main&&za&&a.callMain(b);if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();na.unshift(c)}M(na)}}b=b||a.arguments;if(!(0<P)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)oa();M(ka);0<P||a.calledRun||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},
1);c()},1)):c())}}a.run=Z;function ya(b,c){if(!c||!a.noExitRuntime||0!==b){if(!a.noExitRuntime&&(x=!0,G=void 0,M(ma),a.onExit))a.onExit(b);q&&process.exit(b);a.quit(b,new w(b))}}a.exit=ya;function y(b){if(a.onAbort)a.onAbort(b);void 0!==b?(a.print(b),a.printErr(b),b=JSON.stringify(b)):b="";x=!0;throw"abort("+b+"). Build with -s ASSERTIONS=1 for more info.";}a.abort=y;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();var za=!0;
a.noInitialRun&&(za=!1);a.noExitRuntime=!0;Z([].concat(a.arguments));
