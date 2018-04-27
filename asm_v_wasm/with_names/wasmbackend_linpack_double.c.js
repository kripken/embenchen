var c;c||(c=typeof Module !== 'undefined' ? Module : {});var f={},m;for(m in c)c.hasOwnProperty(m)&&(f[m]=c[m]);c.arguments=[];c.thisProgram="./this.program";c.quit=function(a,b){throw b;};c.preRun=[];c.postRun=[];var q=!1,r=!1,v=!1,w=!1;
if(c.ENVIRONMENT)if("WEB"===c.ENVIRONMENT)q=!0;else if("WORKER"===c.ENVIRONMENT)r=!0;else if("NODE"===c.ENVIRONMENT)v=!0;else if("SHELL"===c.ENVIRONMENT)w=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else q="object"===typeof window,r="function"===typeof importScripts,v="object"===typeof process&&"function"===typeof require&&!q&&!r,w=!q&&!v&&!r;
if(v){var aa,ba;c.read=function(a,b){aa||(aa=require("fs"));ba||(ba=require("path"));a=ba.normalize(a);a=aa.readFileSync(a);return b?a:a.toString()};c.readBinary=function(a){a=c.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(c.thisProgram=process.argv[1].replace(/\\/g,"/"));c.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=c);process.on("uncaughtException",function(a){if(!(a instanceof x))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});c.inspect=function(){return"[Emscripten Module object]"}}else if(w)"undefined"!=typeof read&&(c.read=function(a){return read(a)}),c.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?c.arguments=scriptArgs:"undefined"!=typeof arguments&&(c.arguments=arguments),"function"===typeof quit&&(c.quit=function(a){quit(a)});else if(q||r)c.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(c.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),c.readAsync=function(a,b,e){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):e()};d.onerror=e;d.send(null)},c.setWindowTitle=function(a){document.title=a};
c.print="undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null;c.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||c.print;c.print=c.print;c.printErr=c.printErr;for(m in f)f.hasOwnProperty(m)&&(c[m]=f[m]);f=void 0;function ca(a){assert(!da);var b=y;y=y+a+15&-16;return b}function ea(a){assert(z);var b=A[z>>2];a=b+a+15&-16;A[z>>2]=a;if(a=a>=B)fa(),a=!0;return a?(A[z>>2]=b,0):b}
function ha(a){var b;b||(b=16);return Math.ceil(a/b)*b}var ia=0;function assert(a,b){a||C("Assertion failed: "+b)}function ja(a,b){if("number"===typeof a){var e=!0;var d=a}else e=!1,d=a.length;b=4==b?h:["function"===typeof ka?ka:ca,la,ca,ea][void 0===b?2:b](Math.max(d,1));if(e){var h=b;assert(0==(b&3));for(a=b+(d&-4);h<a;h+=4)A[h>>2]=0;for(a=b+d;h<a;)D[h++>>0]=0;return b}a.subarray||a.slice?E.set(a,b):E.set(new Uint8Array(a),b);return b}
function ma(a){var b;if(0===b||!a)return"";for(var e=0,d,h=0;;){d=E[a+h>>0];e|=d;if(0==d&&!b)break;h++;if(b&&h==b)break}b||(b=h);d="";if(128>e){for(;0<b;)e=String.fromCharCode.apply(String,E.subarray(a,a+Math.min(b,1024))),d=d?d+e:e,a+=1024,b-=1024;return d}return na(E,a)}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function na(a,b){for(var e=b;a[e];)++e;if(16<e-b&&a.subarray&&oa)return oa.decode(a.subarray(b,e));for(e="";;){var d=a[b++];if(!d)return e;if(d&128){var h=a[b++]&63;if(192==(d&224))e+=String.fromCharCode((d&31)<<6|h);else{var k=a[b++]&63;if(224==(d&240))d=(d&15)<<12|h<<6|k;else{var g=a[b++]&63;if(240==(d&248))d=(d&7)<<18|h<<12|k<<6|g;else{var l=a[b++]&63;if(248==(d&252))d=(d&3)<<24|h<<18|k<<12|g<<6|l;else{var t=a[b++]&63;d=(d&1)<<30|h<<24|k<<18|g<<12|l<<6|t}}}65536>d?e+=String.fromCharCode(d):(d-=
65536,e+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else e+=String.fromCharCode(d)}}
function pa(a,b,e,d){if(!(0<d))return 0;var h=e;d=e+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);55296<=g&&57343>=g&&(g=65536+((g&1023)<<10)|a.charCodeAt(++k)&1023);if(127>=g){if(e>=d)break;b[e++]=g}else{if(2047>=g){if(e+1>=d)break;b[e++]=192|g>>6}else{if(65535>=g){if(e+2>=d)break;b[e++]=224|g>>12}else{if(2097151>=g){if(e+3>=d)break;b[e++]=240|g>>18}else{if(67108863>=g){if(e+4>=d)break;b[e++]=248|g>>24}else{if(e+5>=d)break;b[e++]=252|g>>30;b[e++]=128|g>>24&63}b[e++]=128|g>>18&63}b[e++]=128|
g>>12&63}b[e++]=128|g>>6&63}b[e++]=128|g&63}}b[e]=0;return e-h}function qa(a){for(var b=0,e=0;e<a.length;++e){var d=a.charCodeAt(e);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++e)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:2097151>=d?b+4:67108863>=d?b+5:b+6}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ra(a){var b=qa(a)+1,e=la(b);pa(a,D,e,b);return e}var buffer,D,E,sa,A;
function ta(){c.HEAP8=D=new Int8Array(buffer);c.HEAP16=sa=new Int16Array(buffer);c.HEAP32=A=new Int32Array(buffer);c.HEAPU8=E=new Uint8Array(buffer);c.HEAPU16=new Uint16Array(buffer);c.HEAPU32=new Uint32Array(buffer);c.HEAPF32=new Float32Array(buffer);c.HEAPF64=new Float64Array(buffer)}var F,y,da,G,H,I,ua,z;F=y=G=H=I=ua=z=0;da=!1;
function fa(){C("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+B+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var J=c.TOTAL_STACK||5242880,B=c.TOTAL_MEMORY||268435456;B<J&&c.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+B+"! (TOTAL_STACK="+J+")");
c.buffer?buffer=c.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(c.wasmMemory=new WebAssembly.Memory({initial:B/65536,maximum:B/65536}),buffer=c.wasmMemory.buffer):buffer=new ArrayBuffer(B),c.buffer=buffer);ta();A[0]=1668509029;sa[1]=25459;if(115!==E[2]||99!==E[3])throw"Runtime error: expected the system to be little-endian!";
function K(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var e=b.F;"number"===typeof e?void 0===b.h?c.dynCall_v(e):c.dynCall_vi(e,b.h):e(void 0===b.h?null:b.h)}}}var va=[],wa=[],xa=[],ya=[],za=[],L=!1;function Ca(){var a=c.preRun.shift();va.unshift(a)}var M=0,Da=null,N=null;c.preloadedImages={};c.preloadedAudios={};function O(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(c.wasmBinary)return new Uint8Array(c.wasmBinary);if(c.readBinary)return c.readBinary(h);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(p){C(p)}}function b(){return c.wasmBinary||!q&&!r||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(h,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+h+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function e(a){function d(a){l=a.exports;if(l.memory){a=l.memory;var b=c.buffer;a.byteLength<b.byteLength&&c.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);c.buffer=buffer=a;ta()}c.asm=l;c.usingWasm=!0;H=G+J;I=G;c.asm.stackRestore(H);M--;c.monitorRunDependencies&&c.monitorRunDependencies(M);0==M&&(null!==Da&&(clearInterval(Da),
Da=null),N&&(a=N,N=null,a()))}function e(a){d(a.instance)}function n(a){b().then(function(a){return WebAssembly.instantiate(a,g)}).then(a).catch(function(a){c.printErr("failed to asynchronously prepare wasm: "+a);C(a)})}if("object"!==typeof WebAssembly)return c.printErr("no native wasm support detected"),!1;if(!(c.wasmMemory instanceof WebAssembly.Memory))return c.printErr("no native wasm Memory in use"),!1;a.memory=c.wasmMemory;g.global={NaN:NaN,Infinity:Infinity};g["global.Math"]=Math;g.env=a;M++;
c.monitorRunDependencies&&c.monitorRunDependencies(M);if(c.instantiateWasm)try{return c.instantiateWasm(g,d)}catch(Ma){return c.printErr("Module.instantiateWasm callback failed with error: "+Ma),!1}c.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||O(h)||"function"!==typeof fetch?n(e):WebAssembly.instantiateStreaming(fetch(h,{credentials:"same-origin"}),g).then(e).catch(function(a){c.printErr("wasm streaming compile failed: "+a);c.printErr("falling back to ArrayBuffer instantiation");
n(e)});return{}}var d="wasmbackend_linpack_double.c.wast",h="wasmbackend_linpack_double.c.wasm",k="wasmbackend_linpack_double.c.temp.asm.js";"function"===typeof c.locateFile&&(O(d)||(d=c.locateFile(d)),O(h)||(h=c.locateFile(h)),O(k)||(k=c.locateFile(k)));var g={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},parent:c},l=null;c.asmPreload=c.asm;var t=c.reallocBuffer;c.reallocBuffer=function(a){if("asmjs"===u)var b=t(a);else a:{var e=c.usingWasm?65536:
16777216;0<a%e&&(a+=e-a%e);e=c.buffer.byteLength;if(c.usingWasm)try{b=-1!==c.wasmMemory.grow((a-e)/65536)?c.buffer=c.wasmMemory.buffer:null;break a}catch(n){b=null;break a}b=void 0}return b};var u="";c.asm=function(a,b){a={};for(var d in b){var n=d;"_"==n[0]&&(n=n.substr(1));a[n]=b[d]}b=a;b.table||(d=c.wasmTableSize,void 0===d&&(d=1024),a=c.wasmMaxTableSize,b.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==a?new WebAssembly.Table({initial:d,maximum:a,element:"anyfunc"}):
new WebAssembly.Table({initial:d,element:"anyfunc"}):Array(d),c.wasmTable=b.table);b.memoryBase||(b.memoryBase=c.STATIC_BASE);b.tableBase||(b.tableBase=0);(d=e(b))||C("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return d}})();F=1024;y=F+5232;wa.push();c.STATIC_BASE=F;c.STATIC_BUMP=5232;y+=16;var P=0;function Q(){P+=4;return A[P-4>>2]}var Ea={};
function R(a,b){P=b;try{var e=Q(),d=Q(),h=Q();a=0;R.j||(R.j=[null,[],[]],R.u=function(a,b){var d=R.j[a];assert(d);0===b||10===b?((1===a?c.print:c.printErr)(na(d,0)),d.length=0):d.push(b)});for(b=0;b<h;b++){for(var k=A[d+8*b>>2],g=A[d+(8*b+4)>>2],l=0;l<g;l++)R.u(e,E[k+l]);a+=g}return a}catch(t){return"undefined"!==typeof FS&&t instanceof FS.i||C(t),-t.l}}function S(){void 0===S.start&&(S.start=Date.now());return 1E3*(Date.now()-S.start)|0}var T=y;y+=48;ja(U("GMT"),2);var V=y,Fa=y+=16,Ga=y+=16;y+=16;
function Ha(){function a(a){return(a=a.toTimeString().match(/\(([A-Za-z ]+)\)$/))?a[1]:"GMT"}if(!Ia){Ia=!0;A[Ga>>2]=60*(new Date).getTimezoneOffset();var b=new Date(2E3,0,1),e=new Date(2E3,6,1);A[Fa>>2]=Number(b.getTimezoneOffset()!=e.getTimezoneOffset());var d=a(b),h=a(e);d=ja(U(d),0);h=ja(U(h),0);e.getTimezoneOffset()<b.getTimezoneOffset()?(A[V>>2]=d,A[V+4>>2]=h):(A[V>>2]=h,A[V+4>>2]=d)}}var Ia;function Ja(){c.___errno_location&&(A[c.___errno_location()>>2]=12)}
function W(a){return 0===a%4&&(0!==a%100||0===a%400)}function Ka(a,b){for(var e=0,d=0;d<=b;e+=a[d++]);return e}var X=[31,29,31,30,31,30,31,31,30,31,30,31],Y=[31,28,31,30,31,30,31,31,30,31,30,31];function Z(a,b){for(a=new Date(a.getTime());0<b;){var e=a.getMonth(),d=(W(a.getFullYear())?X:Y)[e];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>e?a.setMonth(e+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}z=ca(4);G=H=ha(y);I=G+J;ua=ha(I);
A[z>>2]=ua;da=!0;function U(a,b){var e=Array(qa(a)+1);a=pa(a,e,0,e.length);b&&(e.length=a);return e}c.o={};
c.s={_strftime:function(a,b,e,d){function h(a,b,d){for(a="number"===typeof a?a.toString():a||"";a.length<b;)a=d[0]+a;return a}function k(a,b){return h(a,b,"0")}function g(a,b){function d(a){return 0>a?-1:0<a?1:0}var n;0===(n=d(a.getFullYear()-b.getFullYear()))&&0===(n=d(a.getMonth()-b.getMonth()))&&(n=d(a.getDate()-b.getDate()));return n}function l(a){switch(a.getDay()){case 0:return new Date(a.getFullYear()-1,11,29);case 1:return a;case 2:return new Date(a.getFullYear(),0,3);case 3:return new Date(a.getFullYear(),
0,2);case 4:return new Date(a.getFullYear(),0,1);case 5:return new Date(a.getFullYear()-1,11,31);case 6:return new Date(a.getFullYear()-1,11,30)}}function t(a){a=Z(new Date(a.a+1900,0,1),a.g);var b=l(new Date(a.getFullYear()+1,0,4));return 0>=g(l(new Date(a.getFullYear(),0,4)),a)?0>=g(b,a)?a.getFullYear()+1:a.getFullYear():a.getFullYear()-1}var u=A[d+40>>2];d={C:A[d>>2],B:A[d+4>>2],f:A[d+8>>2],c:A[d+12>>2],b:A[d+16>>2],a:A[d+20>>2],m:A[d+24>>2],g:A[d+28>>2],H:A[d+32>>2],A:A[d+36>>2],D:u?ma(u):""};
e=ma(e);u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S"};for(var p in u)e=e.replace(new RegExp(p,"g"),u[p]);var Aa="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ba="January February March April May June July August September October November December".split(" ");u={"%a":function(a){return Aa[a.m].substring(0,3)},"%A":function(a){return Aa[a.m]},"%b":function(a){return Ba[a.b].substring(0,
3)},"%B":function(a){return Ba[a.b]},"%C":function(a){return k((a.a+1900)/100|0,2)},"%d":function(a){return k(a.c,2)},"%e":function(a){return h(a.c,2," ")},"%g":function(a){return t(a).toString().substring(2)},"%G":function(a){return t(a)},"%H":function(a){return k(a.f,2)},"%I":function(a){a=a.f;0==a?a=12:12<a&&(a-=12);return k(a,2)},"%j":function(a){return k(a.c+Ka(W(a.a+1900)?X:Y,a.b-1),3)},"%m":function(a){return k(a.b+1,2)},"%M":function(a){return k(a.B,2)},"%n":function(){return"\n"},"%p":function(a){return 0<=
a.f&&12>a.f?"AM":"PM"},"%S":function(a){return k(a.C,2)},"%t":function(){return"\t"},"%u":function(a){return(new Date(a.a+1900,a.b+1,a.c,0,0,0,0)).getDay()||7},"%U":function(a){var b=new Date(a.a+1900,0,1),d=0===b.getDay()?b:Z(b,7-b.getDay());a=new Date(a.a+1900,a.b,a.c);return 0>g(d,a)?k(Math.ceil((31-d.getDate()+(Ka(W(a.getFullYear())?X:Y,a.getMonth()-1)-31)+a.getDate())/7),2):0===g(d,b)?"01":"00"},"%V":function(a){var b=l(new Date(a.a+1900,0,4)),d=l(new Date(a.a+1901,0,4)),e=Z(new Date(a.a+1900,
0,1),a.g);return 0>g(e,b)?"53":0>=g(d,e)?"01":k(Math.ceil((b.getFullYear()<a.a+1900?a.g+32-b.getDate():a.g+1-b.getDate())/7),2)},"%w":function(a){return(new Date(a.a+1900,a.b+1,a.c,0,0,0,0)).getDay()},"%W":function(a){var b=new Date(a.a,0,1),d=1===b.getDay()?b:Z(b,0===b.getDay()?1:7-b.getDay()+1);a=new Date(a.a+1900,a.b,a.c);return 0>g(d,a)?k(Math.ceil((31-d.getDate()+(Ka(W(a.getFullYear())?X:Y,a.getMonth()-1)-31)+a.getDate())/7),2):0===g(d,b)?"01":"00"},"%y":function(a){return(a.a+1900).toString().substring(2)},
"%Y":function(a){return a.a+1900},"%z":function(a){a=a.A;var b=0<=a;a=Math.abs(a)/60;return(b?"+":"-")+String("0000"+(a/60*100+a%60)).slice(-4)},"%Z":function(a){return a.D},"%%":function(){return"%"}};for(p in u)0<=e.indexOf(p)&&(e=e.replace(new RegExp(p,"g"),u[p](d)));p=U(e,!1);if(p.length>b)return 0;D.set(p,a);return p.length-1},_clock:S,___syscall6:function(a,b){P=b;try{var e=Ea.v();FS.close(e);return 0}catch(d){return"undefined"!==typeof FS&&d instanceof FS.i||C(d),-d.l}},_sbrk:function(a){a|=
0;var b=A[z>>2]|0;var e=b+a|0;if(0<(a|0)&(e|0)<(b|0)|0>(e|0))return fa()|0,Ja(),-1;A[z>>2]=e;if(a=(e|0)>(B|0))fa(),a=!0;return a?(A[z>>2]=b,Ja(),-1):b|0},_time:function(a){var b=Date.now()/1E3|0;a&&(A[a>>2]=b);return b},___syscall54:function(a,b){P=b;return 0},___syscall140:function(a,b){P=b;try{var e=Ea.v();Q();var d=Q(),h=Q(),k=Q();FS.G(e,d,k);A[h>>2]=e.position;e.w&&0===d&&0===k&&(e.w=null);return 0}catch(g){return"undefined"!==typeof FS&&g instanceof FS.i||C(g),-g.l}},_localtime:function(a){Ha();
a=new Date(1E3*A[a>>2]);A[T>>2]=a.getSeconds();A[T+4>>2]=a.getMinutes();A[T+8>>2]=a.getHours();A[T+12>>2]=a.getDate();A[T+16>>2]=a.getMonth();A[T+20>>2]=a.getFullYear()-1900;A[T+24>>2]=a.getDay();var b=new Date(a.getFullYear(),0,1);A[T+28>>2]=(a.getTime()-b.getTime())/864E5|0;A[T+36>>2]=-(60*a.getTimezoneOffset());var e=(new Date(2E3,6,1)).getTimezoneOffset();b=b.getTimezoneOffset();a=(e!=b&&a.getTimezoneOffset()==Math.min(b,e))|0;A[T+32>>2]=a;A[T+40>>2]=A[V+(a?4:0)>>2];return T},___syscall146:R};
var La=c.asm(c.o,c.s,buffer);c.asm=La;var ka=c._malloc=function(){return c.asm.malloc.apply(null,arguments)};c._stackAlloc=function(){return c.asm.stackAlloc.apply(null,arguments)};c._main=function(){return c.asm.main.apply(null,arguments)};c._stackRestore=function(){return c.asm.stackRestore.apply(null,arguments)};var la=c._stackAlloc;c.asm=La;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}x.prototype=Error();x.prototype.constructor=x;
N=function Na(){c.calledRun||Oa([].concat(c.arguments));c.calledRun||(N=Na)};c.callMain=function(a){a=a||[];L||(L=!0,K(wa));var b=a.length+1,e=la(4*(b+1));A[e>>2]=ra(c.thisProgram);for(var d=1;d<b;d++)A[(e>>2)+d]=ra(a[d-1]);A[(e>>2)+b]=0;try{var h=c._main(b,e,0);Pa(h,!0)}catch(k){k instanceof x||("SimulateInfiniteLoop"==k?c.noExitRuntime=!0:((a=k)&&"object"===typeof k&&k.stack&&(a=[k,k.stack]),c.printErr("exception thrown: "+a),c.quit(1,k)))}finally{}};
function Oa(a){function b(){if(!c.calledRun&&(c.calledRun=!0,!ia)){L||(L=!0,K(wa));K(xa);if(c.onRuntimeInitialized)c.onRuntimeInitialized();c._main&&Qa&&c.callMain(a);if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var b=c.postRun.shift();za.unshift(b)}K(za)}}a=a||c.arguments;if(!(0<M)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)Ca();K(va);0<M||c.calledRun||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},
1);b()},1)):b())}}c.run=Oa;function Pa(a,b){if(!b||!c.noExitRuntime||0!==a){if(!c.noExitRuntime&&(ia=!0,H=void 0,K(ya),c.onExit))c.onExit(a);v&&process.exit(a);c.quit(a,new x(a))}}c.exit=Pa;function C(a){if(c.onAbort)c.onAbort(a);void 0!==a?(c.print(a),c.printErr(a),a=JSON.stringify(a)):a="";ia=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}c.abort=C;if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();var Qa=!0;
c.noInitialRun&&(Qa=!1);c.noExitRuntime=!0;Oa([].concat(c.arguments));