var g;
g || (g = typeof Module !== 'undefined' ? Module : {});
var aa = {}, da;
for (da in g) {
  g.hasOwnProperty(da) && (aa[da] = g[da]);
}
g.arguments = [];
g.thisProgram = "./this.program";
g.quit = function(a, b) {
  throw b;
};
g.preRun = [];
g.postRun = [];
var ea = !1, fa = !1, ja = !1, la = !1;
ea = "object" === typeof window;
fa = "function" === typeof importScripts;
ja = "object" === typeof process && "function" === typeof require && !ea && !fa;
la = !ea && !ja && !fa;
var pa = "";
function qa(a) {
  return g.locateFile ? g.locateFile(a, pa) : pa + a;
}
if (ja) {
  pa = __dirname + "/";
  var ra, ta;
  g.read = function(a, b) {
    ra || (ra = require("fs"));
    ta || (ta = require("path"));
    a = ta.normalize(a);
    a = ra.readFileSync(a);
    return b ? a : a.toString();
  };
  g.readBinary = function(a) {
    a = g.read(a, !0);
    a.buffer || (a = new Uint8Array(a));
    assert(a.buffer);
    return a;
  };
  1 < process.argv.length && (g.thisProgram = process.argv[1].replace(/\\/g, "/"));
  g.arguments = process.argv.slice(2);
  "undefined" !== typeof module && (module.exports = g);
  process.on("uncaughtException", function(a) {
    if (!(a instanceof ua)) {
      throw a;
    }
  });
  process.on("unhandledRejection", h);
  g.quit = function(a) {
    process.exit(a);
  };
  g.inspect = function() {
    return "[Emscripten Module object]";
  };
} else {
  if (la) {
    "undefined" != typeof read && (g.read = function(a) {
      return read(a);
    }), g.readBinary = function(a) {
      if ("function" === typeof readbuffer) {
        return new Uint8Array(readbuffer(a));
      }
      a = read(a, "binary");
      assert("object" === typeof a);
      return a;
    }, "undefined" != typeof scriptArgs ? g.arguments = scriptArgs : "undefined" != typeof arguments && (g.arguments = arguments), "function" === typeof quit && (g.quit = function(a) {
      quit(a);
    });
  } else {
    if (ea || fa) {
      fa ? pa = self.location.href : document.currentScript && (pa = document.currentScript.src), pa = 0 !== pa.indexOf("blob:") ? pa.substr(0, pa.lastIndexOf("/") + 1) : "", g.read = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send(null);
        return b.responseText;
      }, fa && (g.readBinary = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.responseType = "arraybuffer";
        b.send(null);
        return new Uint8Array(b.response);
      }), g.readAsync = function(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = function() {
          200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
        };
        d.onerror = c;
        d.send(null);
      }, g.setWindowTitle = function(a) {
        document.title = a;
      };
    }
  }
}
var xa = g.print || ("undefined" !== typeof console ? console.log.bind(console) : "undefined" !== typeof print ? print : null), k = g.printErr || ("undefined" !== typeof printErr ? printErr : "undefined" !== typeof console && console.warn.bind(console) || xa);
for (da in aa) {
  aa.hasOwnProperty(da) && (g[da] = aa[da]);
}
aa = void 0;
function ya(a) {
  var b = za;
  za = za + a + 15 & -16;
  return b;
}
function Aa(a) {
  var b = m[Ba >> 2];
  a = b + a + 15 & -16;
  m[Ba >> 2] = a;
  if (a = a >= Ca) {
    Da(), a = !0;
  }
  return a ? (m[Ba >> 2] = b, 0) : b;
}
function Ea(a) {
  var b;
  b || (b = 16);
  return Math.ceil(a / b) * b;
}
function Fa(a) {
  Ga || (Ga = {});
  Ga[a] || (Ga[a] = 1, k(a));
}
var Ga, Ha = {"f64-rem":function(a, b) {
  return a % b;
}, "debugger":function() {
  debugger;
}}, Ia = {};
function La() {
  var a = Ma;
  if (a) {
    assert("vi");
    Ia.vi || (Ia.vi = {});
    var b = Ia.vi;
    b[a] || (b[a] = function(b) {
      return (b = [b], b.length) ? g.dynCall_vi.apply(null, [a].concat(b)) : g.dynCall_vi.call(null, a);
    });
    return b[a];
  }
}
var Na = !1;
function assert(a, b) {
  a || h("Assertion failed: " + b);
}
function Oa(a) {
  var b = g["_" + a];
  assert(b, "Cannot call unknown function " + a + ", make sure it is exported");
  return b;
}
var Ta = {stackSave:function() {
  Pa();
}, stackRestore:function() {
  Qa();
}, arrayToC:function(a) {
  var b = Ra(a.length);
  q.set(a, b);
  return b;
}, stringToC:function(a) {
  var b = 0;
  if (null !== a && void 0 !== a && 0 !== a) {
    var c = (a.length << 2) + 1;
    b = Ra(c);
    Sa(a, r, b, c);
  }
  return b;
}}, Ua = {string:Ta.stringToC, array:Ta.arrayToC};
function Va(a, b) {
  if ("number" === typeof a) {
    var c = !0;
    var d = a;
  } else {
    c = !1, d = a.length;
  }
  b = 4 == b ? e : ["function" === typeof Wa ? Wa : ya, Ra, ya, Aa][void 0 === b ? 2 : b](Math.max(d, 1));
  if (c) {
    var e = b;
    assert(0 == (b & 3));
    for (a = b + (d & -4); e < a; e += 4) {
      m[e >> 2] = 0;
    }
    for (a = b + d; e < a;) {
      q[e++ >> 0] = 0;
    }
    return b;
  }
  a.subarray || a.slice ? r.set(a, b) : r.set(new Uint8Array(a), b);
  return b;
}
function Xa(a) {
  return Ya ? Za ? Wa(a) : Aa(a) : ya(a);
}
function v(a, b) {
  if (0 === b || !a) {
    return "";
  }
  for (var c = 0, d, e = 0;;) {
    d = r[a + e >> 0];
    c |= d;
    if (0 == d && !b) {
      break;
    }
    e++;
    if (b && e == b) {
      break;
    }
  }
  b || (b = e);
  d = "";
  if (128 > c) {
    for (; 0 < b;) {
      c = String.fromCharCode.apply(String, r.subarray(a, a + Math.min(b, 1024))), d = d ? d + c : c, a += 1024, b -= 1024;
    }
    return d;
  }
  return $a(r, a);
}
var ab = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function $a(a, b) {
  for (var c = b; a[c];) {
    ++c;
  }
  if (16 < c - b && a.subarray && ab) {
    return ab.decode(a.subarray(b, c));
  }
  for (c = "";;) {
    var d = a[b++];
    if (!d) {
      return c;
    }
    if (d & 128) {
      var e = a[b++] & 63;
      if (192 == (d & 224)) {
        c += String.fromCharCode((d & 31) << 6 | e);
      } else {
        var f = a[b++] & 63;
        if (224 == (d & 240)) {
          d = (d & 15) << 12 | e << 6 | f;
        } else {
          var l = a[b++] & 63;
          if (240 == (d & 248)) {
            d = (d & 7) << 18 | e << 12 | f << 6 | l;
          } else {
            var n = a[b++] & 63;
            if (248 == (d & 252)) {
              d = (d & 3) << 24 | e << 18 | f << 12 | l << 6 | n;
            } else {
              var p = a[b++] & 63;
              d = (d & 1) << 30 | e << 24 | f << 18 | l << 12 | n << 6 | p;
            }
          }
        }
        65536 > d ? c += String.fromCharCode(d) : (d -= 65536, c += String.fromCharCode(55296 | d >> 10, 56320 | d & 1023));
      }
    } else {
      c += String.fromCharCode(d);
    }
  }
}
function Sa(a, b, c, d) {
  if (!(0 < d)) {
    return 0;
  }
  var e = c;
  d = c + d - 1;
  for (var f = 0; f < a.length; ++f) {
    var l = a.charCodeAt(f);
    if (55296 <= l && 57343 >= l) {
      var n = a.charCodeAt(++f);
      l = 65536 + ((l & 1023) << 10) | n & 1023;
    }
    if (127 >= l) {
      if (c >= d) {
        break;
      }
      b[c++] = l;
    } else {
      if (2047 >= l) {
        if (c + 1 >= d) {
          break;
        }
        b[c++] = 192 | l >> 6;
      } else {
        if (65535 >= l) {
          if (c + 2 >= d) {
            break;
          }
          b[c++] = 224 | l >> 12;
        } else {
          if (2097151 >= l) {
            if (c + 3 >= d) {
              break;
            }
            b[c++] = 240 | l >> 18;
          } else {
            if (67108863 >= l) {
              if (c + 4 >= d) {
                break;
              }
              b[c++] = 248 | l >> 24;
            } else {
              if (c + 5 >= d) {
                break;
              }
              b[c++] = 252 | l >> 30;
              b[c++] = 128 | l >> 24 & 63;
            }
            b[c++] = 128 | l >> 18 & 63;
          }
          b[c++] = 128 | l >> 12 & 63;
        }
        b[c++] = 128 | l >> 6 & 63;
      }
      b[c++] = 128 | l & 63;
    }
  }
  b[c] = 0;
  return c - e;
}
function bb(a) {
  for (var b = 0, c = 0; c < a.length; ++c) {
    var d = a.charCodeAt(c);
    55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
    127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : 2097151 >= d ? b + 4 : 67108863 >= d ? b + 5 : b + 6;
  }
  return b;
}
"undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
function cb(a) {
  var b = bb(a) + 1, c = Ra(b);
  Sa(a, q, c, b);
  return c;
}
var buffer, q, r, db, eb, m, fb, z, gb;
function hb() {
  g.HEAP8 = q = new Int8Array(buffer);
  g.HEAP16 = db = new Int16Array(buffer);
  g.HEAP32 = m = new Int32Array(buffer);
  g.HEAPU8 = r = new Uint8Array(buffer);
  g.HEAPU16 = eb = new Uint16Array(buffer);
  g.HEAPU32 = fb = new Uint32Array(buffer);
  g.HEAPF32 = z = new Float32Array(buffer);
  g.HEAPF64 = gb = new Float64Array(buffer);
}
var ib, za, Ya, jb, kb, lb, mb, Ba;
ib = za = jb = kb = lb = mb = Ba = 0;
Ya = !1;
function Da() {
  h("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + Ca + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
}
var nb = g.TOTAL_STACK || 5242880, Ca = g.TOTAL_MEMORY || 67108864;
Ca < nb && k("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + Ca + "! (TOTAL_STACK=" + nb + ")");
g.buffer ? buffer = g.buffer : ("object" === typeof WebAssembly && "function" === typeof WebAssembly.Memory ? (g.wasmMemory = new WebAssembly.Memory({initial:Ca / 65536, maximum:Ca / 65536}), buffer = g.wasmMemory.buffer) : buffer = new ArrayBuffer(Ca), g.buffer = buffer);
hb();
function ob(a) {
  for (; 0 < a.length;) {
    var b = a.shift();
    if ("function" == typeof b) {
      b();
    } else {
      var c = b.c;
      "number" === typeof c ? void 0 === b.Fa ? g.dynCall_v(c) : g.dynCall_vi(c, b.Fa) : c(void 0 === b.Fa ? null : b.Fa);
    }
  }
}
var pb = [], qb = [], rb = [], sb = [], tb = [], Za = !1;
function ub() {
  var a = g.preRun.shift();
  pb.unshift(a);
}
var vb = Math.abs, wb = Math.ceil, xb = Math.floor, yb = Math.min, zb = 0, Ab = null, Bb = null;
function Cb() {
  zb++;
  g.monitorRunDependencies && g.monitorRunDependencies(zb);
}
function Db() {
  zb--;
  g.monitorRunDependencies && g.monitorRunDependencies(zb);
  if (0 == zb && (null !== Ab && (clearInterval(Ab), Ab = null), Bb)) {
    var a = Bb;
    Bb = null;
    a();
  }
}
g.preloadedImages = {};
g.preloadedAudios = {};
function Eb(a) {
  return String.prototype.startsWith ? a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,");
}
(function() {
  function a() {
    try {
      if (g.wasmBinary) {
        return new Uint8Array(g.wasmBinary);
      }
      if (g.readBinary) {
        return g.readBinary(e);
      }
      throw "both async and sync fetching of the wasm failed";
    } catch (w) {
      h(w);
    }
  }
  function b() {
    return g.wasmBinary || !ea && !fa || "function" !== typeof fetch ? new Promise(function(b) {
      b(a());
    }) : fetch(e, {credentials:"same-origin"}).then(function(a) {
      if (!a.ok) {
        throw "failed to load wasm binary file at '" + e + "'";
      }
      return a.arrayBuffer();
    }).catch(function() {
      return a();
    });
  }
  function c(a) {
    function c(a) {
      n = a.exports;
      if (n.memory) {
        a = n.memory;
        var b = g.buffer;
        a.byteLength < b.byteLength && k("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
        b = new Int8Array(b);
        (new Int8Array(a)).set(b);
        g.buffer = buffer = a;
        hb();
      }
      g.asm = n;
      g.usingWasm = !0;
      Db();
    }
    function f(a) {
      c(a.instance);
    }
    function d(a) {
      b().then(function(a) {
        return WebAssembly.instantiate(a, l);
      }).then(a, function(a) {
        k("failed to asynchronously prepare wasm: " + a);
        h(a);
      });
    }
    if ("object" !== typeof WebAssembly) {
      return k("no native wasm support detected"), !1;
    }
    if (!(g.wasmMemory instanceof WebAssembly.Memory)) {
      return k("no native wasm Memory in use"), !1;
    }
    a.memory = g.wasmMemory;
    l.global = {NaN:NaN, Infinity:Infinity};
    l["global.Math"] = Math;
    l.env = a;
    Cb();
    if (g.instantiateWasm) {
      try {
        return g.instantiateWasm(l, c);
      } catch (y) {
        return k("Module.instantiateWasm callback failed with error: " + y), !1;
      }
    }
    g.wasmBinary || "function" !== typeof WebAssembly.instantiateStreaming || Eb(e) || "function" !== typeof fetch ? d(f) : WebAssembly.instantiateStreaming(fetch(e, {credentials:"same-origin"}), l).then(f, function(a) {
      k("wasm streaming compile failed: " + a);
      k("falling back to ArrayBuffer instantiation");
      d(f);
    });
    return {};
  }
  var d = "bb.wast", e = "bb.wasm", f = "bb.temp.asm.js";
  Eb(d) || (d = qa(d));
  Eb(e) || (e = qa(e));
  Eb(f) || (f = qa(f));
  var l = {global:null, env:null, asm2wasm:Ha, parent:g}, n = null;
  g.asmPreload = g.asm;
  var p = g.reallocBuffer;
  g.reallocBuffer = function(a) {
    if ("asmjs" === u) {
      var b = p(a);
    } else {
      a: {
        var c = g.usingWasm ? 65536 : 16777216;
        0 < a % c && (a += c - a % c);
        c = g.buffer.byteLength;
        if (g.usingWasm) {
          try {
            b = -1 !== g.wasmMemory.grow((a - c) / 65536) ? g.buffer = g.wasmMemory.buffer : null;
            break a;
          } catch (x) {
            b = null;
            break a;
          }
        }
        b = void 0;
      }
    }
    return b;
  };
  var u = "";
  g.asm = function(a, b) {
    if (!b.table) {
      a = g.wasmTableSize;
      void 0 === a && (a = 1024);
      var f = g.wasmMaxTableSize;
      b.table = "object" === typeof WebAssembly && "function" === typeof WebAssembly.Table ? void 0 !== f ? new WebAssembly.Table({initial:a, maximum:f, element:"anyfunc"}) : new WebAssembly.Table({initial:a, element:"anyfunc"}) : Array(a);
      g.wasmTable = b.table;
    }
    b.memoryBase || (b.memoryBase = g.STATIC_BASE);
    b.tableBase || (b.tableBase = 0);
    b = c(b);
    assert(b, "no binaryen method succeeded.");
    return b;
  };
})();
var Fb = [function() {
  return g.usingWasm;
}];
ib = 1024;
za = ib + 765040;
qb.push({c:function() {
  Gb();
}}, {c:function() {
  Hb();
}}, {c:function() {
  Ib();
}}, {c:function() {
  Jb();
}}, {c:function() {
  Kb();
}}, {c:function() {
  Lb();
}}, {c:function() {
  Mb();
}}, {c:function() {
  Nb();
}}, {c:function() {
  Ob();
}}, {c:function() {
  Pb();
}}, {c:function() {
  Qb();
}}, {c:function() {
  Rb();
}}, {c:function() {
  Sb();
}}, {c:function() {
  Tb();
}}, {c:function() {
  Ub();
}}, {c:function() {
  Vb();
}}, {c:function() {
  Wb();
}}, {c:function() {
  Xb();
}}, {c:function() {
  Yb();
}}, {c:function() {
  Zb();
}}, {c:function() {
  $b();
}}, {c:function() {
  ac();
}}, {c:function() {
  bc();
}}, {c:function() {
  cc();
}}, {c:function() {
  dc();
}}, {c:function() {
  ec();
}}, {c:function() {
  fc();
}}, {c:function() {
  hc();
}}, {c:function() {
  ic();
}}, {c:function() {
  jc();
}}, {c:function() {
  kc();
}}, {c:function() {
  lc();
}}, {c:function() {
  mc();
}}, {c:function() {
  nc();
}}, {c:function() {
  oc();
}}, {c:function() {
  pc();
}}, {c:function() {
  qc();
}}, {c:function() {
  rc();
}}, {c:function() {
  sc();
}}, {c:function() {
  tc();
}}, {c:function() {
  uc();
}}, {c:function() {
  vc();
}}, {c:function() {
  wc();
}}, {c:function() {
  xc();
}}, {c:function() {
  yc();
}}, {c:function() {
  zc();
}}, {c:function() {
  Ac();
}}, {c:function() {
  Bc();
}}, {c:function() {
  Cc();
}}, {c:function() {
  Dc();
}}, {c:function() {
  Ec();
}}, {c:function() {
  Fc();
}}, {c:function() {
  Gc();
}}, {c:function() {
  Hc();
}}, {c:function() {
  Ic();
}});
g.STATIC_BASE = ib;
g.STATIC_BUMP = 765040;
za += 16;
var D = {Z:1, W:2, Sf:3, Re:4, ia:5, ec:6, qe:7, pf:8, V:9, Ce:10, Ba:11, bg:11, Vc:12, ab:13, Me:14, Af:15, ha:16, bc:17, Wc:18, xb:19, bb:20, Ca:21, l:22, jf:23, Uc:24, ja:25, Zf:26, Ne:27, wf:28, cb:29, Pf:30, bf:31, If:32, Je:33, Mf:34, tf:42, Pe:43, De:44, Te:45, Ue:46, Ve:47, af:48, $f:49, mf:50, Se:51, He:35, qf:37, ue:52, xe:53, cg:54, kf:55, ye:56, ze:57, Ie:35, Ae:59, yf:60, nf:61, Wf:62, xf:63, uf:64, vf:65, Of:66, rf:67, te:68, Tf:69, Ee:70, Jf:71, df:72, Ke:73, we:74, Ef:76, ve:77, Nf:78, 
We:79, Xe:80, $e:81, Ze:82, Ye:83, zf:38, yb:39, ef:36, wb:40, zb:95, Hf:96, Ge:104, lf:105, $b:97, Lf:91, Cf:88, dc:92, Qf:108, ac:111, re:98, Fe:103, hf:101, ff:100, Xf:110, Oe:112, cc:113, Sc:115, Qc:114, Rc:89, cf:90, Kf:93, Rf:94, se:99, gf:102, Tc:106, Da:107, Yf:109, ag:87, Le:122, Uf:116, Df:95, sf:123, Qe:84, Ff:75, Be:125, Bf:131, Gf:130, Vf:86}, Jc = {0:"Success", 1:"Not super-user", 2:"No such file or directory", 3:"No such process", 4:"Interrupted system call", 5:"I/O error", 6:"No such device or address", 
7:"Arg list too long", 8:"Exec format error", 9:"Bad file number", 10:"No children", 11:"No more processes", 12:"Not enough core", 13:"Permission denied", 14:"Bad address", 15:"Block device required", 16:"Mount device busy", 17:"File exists", 18:"Cross-device link", 19:"No such device", 20:"Not a directory", 21:"Is a directory", 22:"Invalid argument", 23:"Too many open files in system", 24:"Too many open files", 25:"Not a typewriter", 26:"Text file busy", 27:"File too large", 28:"No space left on device", 
29:"Illegal seek", 30:"Read only file system", 31:"Too many links", 32:"Broken pipe", 33:"Math arg out of domain of func", 34:"Math result not representable", 35:"File locking deadlock error", 36:"File or path name too long", 37:"No record locks available", 38:"Function not implemented", 39:"Directory not empty", 40:"Too many symbolic links", 42:"No message of desired type", 43:"Identifier removed", 44:"Channel number out of range", 45:"Level 2 not synchronized", 46:"Level 3 halted", 47:"Level 3 reset", 
48:"Link number out of range", 49:"Protocol driver not attached", 50:"No CSI structure available", 51:"Level 2 halted", 52:"Invalid exchange", 53:"Invalid request descriptor", 54:"Exchange full", 55:"No anode", 56:"Invalid request code", 57:"Invalid slot", 59:"Bad font file fmt", 60:"Device not a stream", 61:"No data (for no delay io)", 62:"Timer expired", 63:"Out of streams resources", 64:"Machine is not on the network", 65:"Package not installed", 66:"The object is remote", 67:"The link has been severed", 
68:"Advertise error", 69:"Srmount error", 70:"Communication error on send", 71:"Protocol error", 72:"Multihop attempted", 73:"Cross mount point (not really error)", 74:"Trying to read unreadable message", 75:"Value too large for defined data type", 76:"Given log. name not unique", 77:"f.d. invalid for this operation", 78:"Remote address changed", 79:"Can   access a needed shared lib", 80:"Accessing a corrupted shared lib", 81:".lib section in a.out corrupted", 82:"Attempting to link in too many libs", 
83:"Attempting to exec a shared library", 84:"Illegal byte sequence", 86:"Streams pipe error", 87:"Too many users", 88:"Socket operation on non-socket", 89:"Destination address required", 90:"Message too long", 91:"Protocol wrong type for socket", 92:"Protocol not available", 93:"Unknown protocol", 94:"Socket type not supported", 95:"Not supported", 96:"Protocol family not supported", 97:"Address family not supported by protocol family", 98:"Address already in use", 99:"Address not available", 100:"Network interface is not configured", 
101:"Network is unreachable", 102:"Connection reset by network", 103:"Connection aborted", 104:"Connection reset by peer", 105:"No buffer space available", 106:"Socket is already connected", 107:"Socket is not connected", 108:"Can't send after socket shutdown", 109:"Too many references", 110:"Connection timed out", 111:"Connection refused", 112:"Host is down", 113:"Host is unreachable", 114:"Socket already connected", 115:"Connection already in progress", 116:"Stale file handle", 122:"Quota exceeded", 
123:"No medium (in tape drive)", 125:"Operation canceled", 130:"Previous owner died", 131:"State not recoverable"};
function Kc(a) {
  g.___errno_location && (m[g.___errno_location() >> 2] = a);
  return a;
}
function Lc(a, b) {
  for (var c = 0, d = a.length - 1; 0 <= d; d--) {
    var e = a[d];
    "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
  }
  if (b) {
    for (; c; c--) {
      a.unshift("..");
    }
  }
  return a;
}
function Mc(a) {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
  (a = Lc(a.split("/").filter(function(a) {
    return !!a;
  }), !b).join("/")) || b || (a = ".");
  a && c && (a += "/");
  return (b ? "/" : "") + a;
}
function Nc(a) {
  var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = b[0];
  b = b[1];
  if (!a && !b) {
    return ".";
  }
  b && (b = b.substr(0, b.length - 1));
  return a + b;
}
function Oc(a) {
  if ("/" === a) {
    return "/";
  }
  var b = a.lastIndexOf("/");
  return -1 === b ? a : a.substr(b + 1);
}
function Pc() {
  var a = Array.prototype.slice.call(arguments, 0);
  return Mc(a.join("/"));
}
function Qc(a, b) {
  return Mc(a + "/" + b);
}
function Rc() {
  for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
    b = 0 <= c ? arguments[c] : "/";
    if ("string" !== typeof b) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!b) {
      return "";
    }
    a = b + "/" + a;
    b = "/" === b.charAt(0);
  }
  a = Lc(a.split("/").filter(function(a) {
    return !!a;
  }), !b).join("/");
  return (b ? "/" : "") + a || ".";
}
function Sc(a, b) {
  function c(a) {
    for (var b = 0; b < a.length && "" === a[b]; b++) {
    }
    for (var c = a.length - 1; 0 <= c && "" === a[c]; c--) {
    }
    return b > c ? [] : a.slice(b, c - b + 1);
  }
  a = Rc(a).substr(1);
  b = Rc(b).substr(1);
  a = c(a.split("/"));
  b = c(b.split("/"));
  for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++) {
    if (a[f] !== b[f]) {
      e = f;
      break;
    }
  }
  d = [];
  for (f = e; f < a.length; f++) {
    d.push("..");
  }
  d = d.concat(b.slice(e));
  return d.join("/");
}
var Tc = [];
function Uc(a, b) {
  Tc[a] = {input:[], H:[], ma:b};
  Vc(a, Wc);
}
var Wc = {open:function(a) {
  var b = Tc[a.node.rdev];
  if (!b) {
    throw new E(D.xb);
  }
  a.tty = b;
  a.seekable = !1;
}, close:function(a) {
  a.tty.ma.flush(a.tty);
}, flush:function(a) {
  a.tty.ma.flush(a.tty);
}, read:function(a, b, c, d) {
  if (!a.tty || !a.tty.ma.uc) {
    throw new E(D.ec);
  }
  for (var e = 0, f = 0; f < d; f++) {
    try {
      var l = a.tty.ma.uc(a.tty);
    } catch (n) {
      throw new E(D.ia);
    }
    if (void 0 === l && 0 === e) {
      throw new E(D.Ba);
    }
    if (null === l || void 0 === l) {
      break;
    }
    e++;
    b[c + f] = l;
  }
  e && (a.node.timestamp = Date.now());
  return e;
}, write:function(a, b, c, d) {
  if (!a.tty || !a.tty.ma.Qb) {
    throw new E(D.ec);
  }
  var e = 0;
  try {
    if (0 === c && 0 === d) {
      a.tty.ma.flush(a.tty);
    } else {
      for (; e < d;) {
        a.tty.ma.Qb(a.tty, b[c + e]), e++;
      }
    }
  } catch (f) {
    throw new E(D.ia);
  }
  d && (a.node.timestamp = Date.now());
  return e;
}}, Yc = {uc:function(a) {
  if (!a.input.length) {
    var b = null;
    if (ja) {
      b = new Buffer(256);
      var c = 0, d = process.stdin.j;
      if ("win32" != process.platform) {
        var e = !1;
        try {
          d = fs.openSync("/dev/stdin", "r"), e = !0;
        } catch (f) {
        }
      }
      try {
        c = fs.readSync(d, b, 0, 256, null);
      } catch (f) {
        if (-1 != f.toString().indexOf("EOF")) {
          c = 0;
        } else {
          throw f;
        }
      }
      e && fs.closeSync(d);
      b = 0 < c ? b.slice(0, c).toString("utf-8") : null;
    } else {
      "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
    }
    if (!b) {
      return null;
    }
    a.input = Xc(b, !0);
  }
  return a.input.shift();
}, Qb:function(a, b) {
  null === b || 10 === b ? (xa($a(a.H, 0)), a.H = []) : 0 != b && a.H.push(b);
}, flush:function(a) {
  a.H && 0 < a.H.length && (xa($a(a.H, 0)), a.H = []);
}}, Zc = {Qb:function(a, b) {
  null === b || 10 === b ? (k($a(a.H, 0)), a.H = []) : 0 != b && a.H.push(b);
}, flush:function(a) {
  a.H && 0 < a.H.length && (k($a(a.H, 0)), a.H = []);
}}, F = {X:null, D:function() {
  return F.createNode(null, "/", 16895, 0);
}, createNode:function(a, b, c, d) {
  if (24576 === (c & 61440) || 4096 === (c & 61440)) {
    throw new E(D.Z);
  }
  F.X || (F.X = {dir:{node:{U:F.f.U, O:F.f.O, lookup:F.f.lookup, Sa:F.f.Sa, rename:F.f.rename, unlink:F.f.unlink, rmdir:F.f.rmdir, readdir:F.f.readdir, symlink:F.f.symlink}, stream:{ca:F.g.ca}}, file:{node:{U:F.f.U, O:F.f.O}, stream:{ca:F.g.ca, read:F.g.read, write:F.g.write, hc:F.g.hc, Cc:F.g.Cc, Fc:F.g.Fc}}, link:{node:{U:F.f.U, O:F.f.O, readlink:F.f.readlink}, stream:{}}, kc:{node:{U:F.f.U, O:F.f.O}, stream:$c}});
  c = ad(a, b, c, d);
  bd(c.mode) ? (c.f = F.X.dir.node, c.g = F.X.dir.stream, c.b = {}) : 32768 === (c.mode & 61440) ? (c.f = F.X.file.node, c.g = F.X.file.stream, c.o = 0, c.b = null) : 40960 === (c.mode & 61440) ? (c.f = F.X.link.node, c.g = F.X.link.stream) : 8192 === (c.mode & 61440) && (c.f = F.X.kc.node, c.g = F.X.kc.stream);
  c.timestamp = Date.now();
  a && (a.b[b] = c);
  return c;
}, qd:function(a) {
  if (a.b && a.b.subarray) {
    for (var b = [], c = 0; c < a.o; ++c) {
      b.push(a.b[c]);
    }
    return b;
  }
  return a.b;
}, pg:function(a) {
  return a.b ? a.b.subarray ? a.b.subarray(0, a.o) : new Uint8Array(a.b) : new Uint8Array;
}, oc:function(a, b) {
  a.b && a.b.subarray && b > a.b.length && (a.b = F.qd(a), a.o = a.b.length);
  if (!a.b || a.b.subarray) {
    var c = a.b ? a.b.length : 0;
    c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) | 0), 0 != c && (b = Math.max(b, 256)), c = a.b, a.b = new Uint8Array(b), 0 < a.o && a.b.set(c.subarray(0, a.o), 0));
  } else {
    for (!a.b && 0 < b && (a.b = []); a.b.length < b;) {
      a.b.push(0);
    }
  }
}, $d:function(a, b) {
  if (a.o != b) {
    if (0 == b) {
      a.b = null, a.o = 0;
    } else {
      if (!a.b || a.b.subarray) {
        var c = a.b;
        a.b = new Uint8Array(new ArrayBuffer(b));
        c && a.b.set(c.subarray(0, Math.min(b, a.o)));
      } else {
        if (a.b || (a.b = []), a.b.length > b) {
          a.b.length = b;
        } else {
          for (; a.b.length < b;) {
            a.b.push(0);
          }
        }
      }
      a.o = b;
    }
  }
}, f:{U:function(a) {
  var b = {};
  b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
  b.ino = a.id;
  b.mode = a.mode;
  b.nlink = 1;
  b.uid = 0;
  b.gid = 0;
  b.rdev = a.rdev;
  b.size = bd(a.mode) ? 4096 : 32768 === (a.mode & 61440) ? a.o : 40960 === (a.mode & 61440) ? a.link.length : 0;
  b.atime = new Date(a.timestamp);
  b.mtime = new Date(a.timestamp);
  b.ctime = new Date(a.timestamp);
  b.ka = 4096;
  b.blocks = Math.ceil(b.size / b.ka);
  return b;
}, O:function(a, b) {
  void 0 !== b.mode && (a.mode = b.mode);
  void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  void 0 !== b.size && F.$d(a, b.size);
}, lookup:function() {
  throw cd[D.W];
}, Sa:function(a, b, c, d) {
  return F.createNode(a, b, c, d);
}, rename:function(a, b, c) {
  if (bd(a.mode)) {
    try {
      var d = dd(b, c);
    } catch (f) {
    }
    if (d) {
      for (var e in d.b) {
        throw new E(D.yb);
      }
    }
  }
  delete a.parent.b[a.name];
  a.name = c;
  b.b[c] = a;
  a.parent = b;
}, unlink:function(a, b) {
  delete a.b[b];
}, rmdir:function(a, b) {
  var c = dd(a, b), d;
  for (d in c.b) {
    throw new E(D.yb);
  }
  delete a.b[b];
}, readdir:function(a) {
  var b = [".", ".."], c;
  for (c in a.b) {
    a.b.hasOwnProperty(c) && b.push(c);
  }
  return b;
}, symlink:function(a, b, c) {
  a = F.createNode(a, b, 41471, 0);
  a.link = c;
  return a;
}, readlink:function(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new E(D.l);
  }
  return a.link;
}}, g:{read:function(a, b, c, d, e) {
  var f = a.node.b;
  if (e >= a.node.o) {
    return 0;
  }
  a = Math.min(a.node.o - e, d);
  assert(0 <= a);
  if (8 < a && f.subarray) {
    b.set(f.subarray(e, e + a), c);
  } else {
    for (d = 0; d < a; d++) {
      b[c + d] = f[e + d];
    }
  }
  return a;
}, write:function(a, b, c, d, e, f) {
  if (!d) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (b.subarray && (!a.b || a.b.subarray)) {
    if (f) {
      return a.b = b.subarray(c, c + d), a.o = d;
    }
    if (0 === a.o && 0 === e) {
      return a.b = new Uint8Array(b.subarray(c, c + d)), a.o = d;
    }
    if (e + d <= a.o) {
      return a.b.set(b.subarray(c, c + d), e), d;
    }
  }
  F.oc(a, e + d);
  if (a.b.subarray && b.subarray) {
    a.b.set(b.subarray(c, c + d), e);
  } else {
    for (f = 0; f < d; f++) {
      a.b[e + f] = b[c + f];
    }
  }
  a.o = Math.max(a.o, e + d);
  return d;
}, ca:function(a, b, c) {
  1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.o);
  if (0 > b) {
    throw new E(D.l);
  }
  return b;
}, hc:function(a, b, c) {
  F.oc(a.node, b + c);
  a.node.o = Math.max(a.node.o, b + c);
}, Cc:function(a, b, c, d, e, f, l) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new E(D.xb);
  }
  c = a.node.b;
  if (l & 2 || c.buffer !== b && c.buffer !== b.buffer) {
    if (0 < e || e + d < a.node.o) {
      c = c.subarray ? c.subarray(e, e + d) : Array.prototype.slice.call(c, e, e + d);
    }
    a = !0;
    d = Wa(d);
    if (!d) {
      throw new E(D.Vc);
    }
    b.set(c, d);
  } else {
    a = !1, d = c.byteOffset;
  }
  return {Bg:d, fg:a};
}, Fc:function(a, b, c, d, e) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new E(D.xb);
  }
  if (e & 2) {
    return 0;
  }
  F.g.write(a, b, 0, d, c, !1);
  return 0;
}}}, I = {mb:!1, de:function() {
  I.mb = !!process.platform.match(/^win/);
  var a = process.binding("constants");
  a.fs && (a = a.fs);
  I.pc = {1024:a.O_APPEND, 64:a.O_CREAT, 128:a.O_EXCL, 0:a.O_RDONLY, 2:a.O_RDWR, 4096:a.O_SYNC, 512:a.O_TRUNC, 1:a.O_WRONLY};
}, ic:function(a) {
  return Buffer.eg ? Buffer.from(a) : new Buffer(a);
}, D:function(a) {
  assert(ja);
  return I.createNode(null, "/", I.sc(a.Nb.root), 0);
}, createNode:function(a, b, c) {
  if (!bd(c) && 32768 !== (c & 61440) && 40960 !== (c & 61440)) {
    throw new E(D.l);
  }
  a = ad(a, b, c);
  a.f = I.f;
  a.g = I.g;
  return a;
}, sc:function(a) {
  try {
    var b = fs.lstatSync(a);
    I.mb && (b.mode |= (b.mode & 292) >> 2);
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new E(D[c.code]);
  }
  return b.mode;
}, S:function(a) {
  for (var b = []; a.parent !== a;) {
    b.push(a.name), a = a.parent;
  }
  b.push(a.D.Nb.root);
  b.reverse();
  return Pc.apply(null, b);
}, md:function(a) {
  a &= -2656257;
  var b = 0, c;
  for (c in I.pc) {
    a & c && (b |= I.pc[c], a ^= c);
  }
  if (a) {
    throw new E(D.l);
  }
  return b;
}, f:{U:function(a) {
  a = I.S(a);
  try {
    var b = fs.lstatSync(a);
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new E(D[c.code]);
  }
  I.mb && !b.ka && (b.ka = 4096);
  I.mb && !b.blocks && (b.blocks = (b.size + b.ka - 1) / b.ka | 0);
  return {dev:b.dev, ino:b.ino, mode:b.mode, nlink:b.nlink, uid:b.uid, gid:b.gid, rdev:b.rdev, size:b.size, atime:b.atime, mtime:b.mtime, ctime:b.ctime, ka:b.ka, blocks:b.blocks};
}, O:function(a, b) {
  var c = I.S(a);
  try {
    void 0 !== b.mode && (fs.chmodSync(c, b.mode), a.mode = b.mode), void 0 !== b.size && fs.truncateSync(c, b.size);
  } catch (d) {
    if (!d.code) {
      throw d;
    }
    throw new E(D[d.code]);
  }
}, lookup:function(a, b) {
  var c = Qc(I.S(a), b);
  c = I.sc(c);
  return I.createNode(a, b, c);
}, Sa:function(a, b, c, d) {
  a = I.createNode(a, b, c, d);
  b = I.S(a);
  try {
    bd(a.mode) ? fs.mkdirSync(b, a.mode) : fs.writeFileSync(b, "", {mode:a.mode});
  } catch (e) {
    if (!e.code) {
      throw e;
    }
    throw new E(D[e.code]);
  }
  return a;
}, rename:function(a, b, c) {
  a = I.S(a);
  b = Qc(I.S(b), c);
  try {
    fs.renameSync(a, b);
  } catch (d) {
    if (!d.code) {
      throw d;
    }
    throw new E(D[d.code]);
  }
}, unlink:function(a, b) {
  a = Qc(I.S(a), b);
  try {
    fs.unlinkSync(a);
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new E(D[c.code]);
  }
}, rmdir:function(a, b) {
  a = Qc(I.S(a), b);
  try {
    fs.rmdirSync(a);
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new E(D[c.code]);
  }
}, readdir:function(a) {
  a = I.S(a);
  try {
    return fs.readdirSync(a);
  } catch (b) {
    if (!b.code) {
      throw b;
    }
    throw new E(D[b.code]);
  }
}, symlink:function(a, b, c) {
  a = Qc(I.S(a), b);
  try {
    fs.symlinkSync(c, a);
  } catch (d) {
    if (!d.code) {
      throw d;
    }
    throw new E(D[d.code]);
  }
}, readlink:function(a) {
  var b = I.S(a);
  try {
    return b = fs.readlinkSync(b), b = ed.relative(ed.resolve(a.D.Nb.root), b);
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new E(D[c.code]);
  }
}}, g:{open:function(a) {
  var b = I.S(a.node);
  try {
    32768 === (a.node.mode & 61440) && (a.Ta = fs.openSync(b, I.md(a.flags)));
  } catch (c) {
    if (!c.code) {
      throw c;
    }
    throw new E(D[c.code]);
  }
}, close:function(a) {
  try {
    32768 === (a.node.mode & 61440) && a.Ta && fs.closeSync(a.Ta);
  } catch (b) {
    if (!b.code) {
      throw b;
    }
    throw new E(D[b.code]);
  }
}, read:function(a, b, c, d, e) {
  if (0 === d) {
    return 0;
  }
  try {
    return fs.readSync(a.Ta, I.ic(b.buffer), c, d, e);
  } catch (f) {
    throw new E(D[f.code]);
  }
}, write:function(a, b, c, d, e) {
  try {
    return fs.writeSync(a.Ta, I.ic(b.buffer), c, d, e);
  } catch (f) {
    throw new E(D[f.code]);
  }
}, ca:function(a, b, c) {
  if (1 === c) {
    b += a.position;
  } else {
    if (2 === c && 32768 === (a.node.mode & 61440)) {
      try {
        b += fs.fstatSync(a.Ta).size;
      } catch (d) {
        throw new E(D[d.code]);
      }
    }
  }
  if (0 > b) {
    throw new E(D.l);
  }
  return b;
}}};
za += 16;
za += 16;
za += 16;
var fd = null, gd = {}, hd = [], id = 1, jd = null, kd = !0, ld = {}, E = null, cd = {};
function md(a, b) {
  a = Rc("/", a);
  b = b || {};
  if (!a) {
    return {path:"", node:null};
  }
  var c = {qc:!0, Rb:0}, d;
  for (d in c) {
    void 0 === b[d] && (b[d] = c[d]);
  }
  if (8 < b.Rb) {
    throw new E(D.wb);
  }
  a = Lc(a.split("/").filter(function(a) {
    return !!a;
  }), !1);
  var e = fd;
  c = "/";
  for (d = 0; d < a.length; d++) {
    var f = d === a.length - 1;
    if (f && b.parent) {
      break;
    }
    e = dd(e, a[d]);
    c = Qc(c, a[d]);
    e.da && (!f || f && b.qc) && (e = e.da.root);
    if (!f || b.ra) {
      for (f = 0; 40960 === (e.mode & 61440);) {
        if (e = nd(c), c = Rc(Nc(c), e), e = md(c, {Rb:b.Rb}).node, 40 < f++) {
          throw new E(D.wb);
        }
      }
    }
  }
  return {path:c, node:e};
}
function od(a) {
  for (var b;;) {
    if (a === a.parent) {
      return a = a.D.Ec, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
    }
    b = b ? a.name + "/" + b : a.name;
    a = a.parent;
  }
}
function pd(a, b) {
  for (var c = 0, d = 0; d < b.length; d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0;
  }
  return (a + c >>> 0) % jd.length;
}
function qd(a) {
  var b = pd(a.parent.id, a.name);
  a.sa = jd[b];
  jd[b] = a;
}
function rd(a) {
  var b = pd(a.parent.id, a.name);
  if (jd[b] === a) {
    jd[b] = a.sa;
  } else {
    for (b = jd[b]; b;) {
      if (b.sa === a) {
        b.sa = a.sa;
        break;
      }
      b = b.sa;
    }
  }
}
function dd(a, b) {
  var c;
  if (c = (c = sd(a, "x")) ? c : a.f.lookup ? 0 : D.ab) {
    throw new E(c, a);
  }
  for (c = jd[pd(a.id, b)]; c; c = c.sa) {
    var d = c.name;
    if (c.parent.id === a.id && d === b) {
      return c;
    }
  }
  return a.f.lookup(a, b);
}
function ad(a, b, c, d) {
  td || (td = function(a, b, c, d) {
    a || (a = this);
    this.parent = a;
    this.D = a.D;
    this.da = null;
    this.id = id++;
    this.name = b;
    this.mode = c;
    this.f = {};
    this.g = {};
    this.rdev = d;
  }, td.prototype = {}, Object.defineProperties(td.prototype, {read:{get:function() {
    return 365 === (this.mode & 365);
  }, set:function(a) {
    a ? this.mode |= 365 : this.mode &= -366;
  }}, write:{get:function() {
    return 146 === (this.mode & 146);
  }, set:function(a) {
    a ? this.mode |= 146 : this.mode &= -147;
  }}, Ld:{get:function() {
    return bd(this.mode);
  }}, Jd:{get:function() {
    return 8192 === (this.mode & 61440);
  }}}));
  a = new td(a, b, c, d);
  qd(a);
  return a;
}
function bd(a) {
  return 16384 === (a & 61440);
}
var ud = {r:0, rs:1052672, "r+":2, w:577, wx:705, xw:705, "w+":578, "wx+":706, "xw+":706, a:1089, ax:1217, xa:1217, "a+":1090, "ax+":1218, "xa+":1218};
function vd(a) {
  var b = ud[a];
  if ("undefined" === typeof b) {
    throw Error("Unknown file open mode: " + a);
  }
  return b;
}
function wd(a) {
  var b = ["r", "w", "rw"][a & 3];
  a & 512 && (b += "w");
  return b;
}
function sd(a, b) {
  if (kd) {
    return 0;
  }
  if (-1 === b.indexOf("r") || a.mode & 292) {
    if (-1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73)) {
      return D.ab;
    }
  } else {
    return D.ab;
  }
  return 0;
}
function xd(a, b) {
  try {
    return dd(a, b), D.bc;
  } catch (c) {
  }
  return sd(a, "wx");
}
function yd(a, b, c) {
  try {
    var d = dd(a, b);
  } catch (e) {
    return e.i;
  }
  if (a = sd(a, "wx")) {
    return a;
  }
  if (c) {
    if (!bd(d.mode)) {
      return D.bb;
    }
    if (d === d.parent || "/" === od(d)) {
      return D.ha;
    }
  } else {
    if (bd(d.mode)) {
      return D.Ca;
    }
  }
  return 0;
}
function zd(a, b) {
  b = b || 4096;
  for (a = a || 0; a <= b; a++) {
    if (!hd[a]) {
      return a;
    }
  }
  throw new E(D.Uc);
}
function Ad(a, b, c) {
  Bd || (Bd = function() {
  }, Bd.prototype = {}, Object.defineProperties(Bd.prototype, {object:{get:function() {
    return this.node;
  }, set:function(a) {
    this.node = a;
  }}}));
  var d = new Bd, e;
  for (e in a) {
    d[e] = a[e];
  }
  a = d;
  b = zd(b, c);
  a.j = b;
  return hd[b] = a;
}
var $c = {open:function(a) {
  a.g = gd[a.node.rdev].g;
  a.g.open && a.g.open(a);
}, ca:function() {
  throw new E(D.cb);
}};
function Vc(a, b) {
  gd[a] = {g:b};
}
function Cd(a, b) {
  var c = "/" === b, d = !b;
  if (c && fd) {
    throw new E(D.ha);
  }
  if (!c && !d) {
    var e = md(b, {qc:!1});
    b = e.path;
    e = e.node;
    if (e.da) {
      throw new E(D.ha);
    }
    if (!bd(e.mode)) {
      throw new E(D.bb);
    }
  }
  b = {type:a, Nb:{}, Ec:b, Qd:[]};
  a = a.D(b);
  a.D = b;
  b.root = a;
  c ? fd = a : e && (e.da = b, e.D && e.D.Qd.push(b));
  return a;
}
function Dd(a, b, c) {
  var d = md(a, {parent:!0}).node;
  a = Oc(a);
  if (!a || "." === a || ".." === a) {
    throw new E(D.l);
  }
  var e = xd(d, a);
  if (e) {
    throw new E(e);
  }
  if (!d.f.Sa) {
    throw new E(D.Z);
  }
  return d.f.Sa(d, a, b, c);
}
function Ed(a, b) {
  return Dd(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0);
}
function Fd(a, b, c) {
  "undefined" === typeof c && (c = b, b = 438);
  return Dd(a, b | 8192, c);
}
function Gd(a, b) {
  if (!Rc(a)) {
    throw new E(D.W);
  }
  var c = md(b, {parent:!0}).node;
  if (!c) {
    throw new E(D.W);
  }
  b = Oc(b);
  var d = xd(c, b);
  if (d) {
    throw new E(d);
  }
  if (!c.f.symlink) {
    throw new E(D.Z);
  }
  return c.f.symlink(c, b, a);
}
function Hd(a) {
  var b = md(a, {parent:!0}).node, c = Oc(a), d = dd(b, c), e = yd(b, c, !1);
  if (e) {
    throw new E(e);
  }
  if (!b.f.unlink) {
    throw new E(D.Z);
  }
  if (d.da) {
    throw new E(D.ha);
  }
  try {
    ld.willDeletePath && ld.willDeletePath(a);
  } catch (f) {
    console.log("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + f.message);
  }
  b.f.unlink(b, c);
  rd(d);
  try {
    if (ld.onDeletePath) {
      ld.onDeletePath(a);
    }
  } catch (f) {
    console.log("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + f.message);
  }
}
function nd(a) {
  a = md(a).node;
  if (!a) {
    throw new E(D.W);
  }
  if (!a.f.readlink) {
    throw new E(D.l);
  }
  return Rc(od(a.parent), a.f.readlink(a));
}
function Id(a, b) {
  a = "string" === typeof a ? md(a, {ra:!0}).node : a;
  if (!a.f.O) {
    throw new E(D.Z);
  }
  a.f.O(a, {mode:b & 4095 | a.mode & -4096, timestamp:Date.now()});
}
function Jd(a, b, c, d) {
  if ("" === a) {
    throw new E(D.W);
  }
  b = "string" === typeof b ? vd(b) : b;
  c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
  if ("object" === typeof a) {
    var e = a;
  } else {
    a = Mc(a);
    try {
      e = md(a, {ra:!(b & 131072)}).node;
    } catch (n) {
    }
  }
  var f = !1;
  if (b & 64) {
    if (e) {
      if (b & 128) {
        throw new E(D.bc);
      }
    } else {
      e = Dd(a, c, 0), f = !0;
    }
  }
  if (!e) {
    throw new E(D.W);
  }
  8192 === (e.mode & 61440) && (b &= -513);
  if (b & 65536 && !bd(e.mode)) {
    throw new E(D.bb);
  }
  if (!f) {
    var l = e ? 40960 === (e.mode & 61440) ? D.wb : bd(e.mode) && ("r" !== wd(b) || b & 512) ? D.Ca : sd(e, wd(b)) : D.W;
    if (l) {
      throw new E(l);
    }
  }
  if (b & 512) {
    c = e;
    c = "string" === typeof c ? md(c, {ra:!0}).node : c;
    if (!c.f.O) {
      throw new E(D.Z);
    }
    if (bd(c.mode)) {
      throw new E(D.Ca);
    }
    if (32768 !== (c.mode & 61440)) {
      throw new E(D.l);
    }
    if (f = sd(c, "w")) {
      throw new E(f);
    }
    c.f.O(c, {size:0, timestamp:Date.now()});
  }
  b &= -641;
  d = Ad({node:e, path:od(e), flags:b, seekable:!0, position:0, g:e.g, ke:[], error:!1}, d, void 0);
  d.g.open && d.g.open(d);
  !g.logReadFiles || b & 1 || (Kd || (Kd = {}), a in Kd || (Kd[a] = 1, l("read file: " + a)));
  try {
    ld.onOpenFile && (l = 0, 1 !== (b & 2097155) && (l |= 1), 0 !== (b & 2097155) && (l |= 2), ld.onOpenFile(a, l));
  } catch (n) {
    console.log("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + n.message);
  }
  return d;
}
function Ld(a) {
  if (null === a.j) {
    throw new E(D.V);
  }
  a.la && (a.la = null);
  try {
    a.g.close && a.g.close(a);
  } catch (b) {
    throw b;
  } finally {
    hd[a.j] = null;
  }
  a.j = null;
}
function Md(a, b, c) {
  if (null === a.j) {
    throw new E(D.V);
  }
  if (!a.seekable || !a.g.ca) {
    throw new E(D.cb);
  }
  a.position = a.g.ca(a, b, c);
  a.ke = [];
}
function Nd(a, b, c, d, e) {
  if (0 > d || 0 > e) {
    throw new E(D.l);
  }
  if (null === a.j) {
    throw new E(D.V);
  }
  if (1 === (a.flags & 2097155)) {
    throw new E(D.V);
  }
  if (bd(a.node.mode)) {
    throw new E(D.Ca);
  }
  if (!a.g.read) {
    throw new E(D.l);
  }
  var f = "undefined" !== typeof e;
  if (!f) {
    e = a.position;
  } else {
    if (!a.seekable) {
      throw new E(D.cb);
    }
  }
  b = a.g.read(a, b, c, d, e);
  f || (a.position += b);
  return b;
}
function Od(a, b, c, d, e, f) {
  if (0 > d || 0 > e) {
    throw new E(D.l);
  }
  if (null === a.j) {
    throw new E(D.V);
  }
  if (0 === (a.flags & 2097155)) {
    throw new E(D.V);
  }
  if (bd(a.node.mode)) {
    throw new E(D.Ca);
  }
  if (!a.g.write) {
    throw new E(D.l);
  }
  a.flags & 1024 && Md(a, 0, 2);
  var l = "undefined" !== typeof e;
  if (!l) {
    e = a.position;
  } else {
    if (!a.seekable) {
      throw new E(D.cb);
    }
  }
  b = a.g.write(a, b, c, d, e, f);
  l || (a.position += b);
  try {
    if (a.path && ld.onWriteToFile) {
      ld.onWriteToFile(a.path);
    }
  } catch (n) {
    console.log("FS.trackingDelegate['onWriteToFile']('" + path + "') threw an exception: " + n.message);
  }
  return b;
}
function Pd(a) {
  var b = b || {};
  b.flags = b.flags || "r";
  b.encoding = b.encoding || "binary";
  if ("utf8" !== b.encoding && "binary" !== b.encoding) {
    throw Error('Invalid encoding type "' + b.encoding + '"');
  }
  var c, d = Jd(a, b.flags);
  a = md(a, {ra:!0}).node;
  if (!a) {
    throw new E(D.W);
  }
  if (!a.f.U) {
    throw new E(D.Z);
  }
  a = a.f.U(a).size;
  var e = new Uint8Array(a);
  Nd(d, e, 0, a, 0);
  "utf8" === b.encoding ? c = $a(e, 0) : "binary" === b.encoding && (c = e);
  Ld(d);
  return c;
}
function Qd() {
  E || (E = function(a, b) {
    this.node = b;
    this.be = function(a) {
      this.i = a;
      for (var b in D) {
        if (D[b] === a) {
          this.code = b;
          break;
        }
      }
    };
    this.be(a);
    this.message = Jc[a];
    this.stack && Object.defineProperty(this, "stack", {value:Error().stack, writable:!0});
  }, E.prototype = Error(), E.prototype.constructor = E, [D.W].forEach(function(a) {
    cd[a] = new E(a);
    cd[a].stack = "<generic error, no stack>";
  }));
}
var Rd;
function Sd(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c;
}
function Td(a, b, c, d) {
  a = Qc("string" === typeof a ? a : od(a), b);
  return Ed(a, Sd(c, d));
}
function Ud(a, b) {
  a = "string" === typeof a ? a : od(a);
  for (b = b.split("/").reverse(); b.length;) {
    var c = b.pop();
    if (c) {
      var d = Qc(a, c);
      try {
        Ed(d);
      } catch (e) {
      }
      a = d;
    }
  }
  return d;
}
function Yd(a, b, c, d) {
  a = Qc("string" === typeof a ? a : od(a), b);
  c = Sd(c, d);
  return Dd(a, (void 0 !== c ? c : 438) & 4095 | 32768, 0);
}
function Zd(a, b, c, d, e, f) {
  a = b ? Qc("string" === typeof a ? a : od(a), b) : a;
  d = Sd(d, e);
  e = Dd(a, (void 0 !== d ? d : 438) & 4095 | 32768, 0);
  if (c) {
    if ("string" === typeof c) {
      a = Array(c.length);
      b = 0;
      for (var l = c.length; b < l; ++b) {
        a[b] = c.charCodeAt(b);
      }
      c = a;
    }
    Id(e, d | 146);
    a = Jd(e, "w");
    Od(a, c, 0, c.length, 0, f);
    Ld(a);
    Id(e, d);
  }
  return e;
}
function $d(a, b, c, d) {
  a = Qc("string" === typeof a ? a : od(a), b);
  b = Sd(!!c, !!d);
  $d.Bc || ($d.Bc = 64);
  var e = $d.Bc++ << 8 | 0;
  Vc(e, {open:function(a) {
    a.seekable = !1;
  }, close:function() {
    d && d.buffer && d.buffer.length && d(10);
  }, read:function(a, b, d, e) {
    for (var f = 0, l = 0; l < e; l++) {
      try {
        var n = c();
      } catch (A) {
        throw new E(D.ia);
      }
      if (void 0 === n && 0 === f) {
        throw new E(D.Ba);
      }
      if (null === n || void 0 === n) {
        break;
      }
      f++;
      b[d + l] = n;
    }
    f && (a.node.timestamp = Date.now());
    return f;
  }, write:function(a, b, c, e) {
    for (var f = 0; f < e; f++) {
      try {
        d(b[c + f]);
      } catch (w) {
        throw new E(D.ia);
      }
    }
    e && (a.node.timestamp = Date.now());
    return f;
  }});
  return Fd(a, b, e);
}
function ae(a, b, c) {
  a = Qc("string" === typeof a ? a : od(a), b);
  return Gd(c, a);
}
function be(a) {
  if (a.Jd || a.Ld || a.link || a.b) {
    return !0;
  }
  var b = !0;
  if ("undefined" !== typeof XMLHttpRequest) {
    throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
  }
  if (g.read) {
    try {
      a.b = Xc(g.read(a.url), !0), a.o = a.b.length;
    } catch (c) {
      b = !1;
    }
  } else {
    throw Error("Cannot load without read() or XMLHttpRequest.");
  }
  b || Kc(D.ia);
  return b;
}
function ce(a, b, c, d, e) {
  function f() {
    this.Lb = !1;
    this.gb = [];
  }
  f.prototype.get = function(a) {
    if (!(a > this.length - 1 || 0 > a)) {
      var b = a % this.lc;
      return this.vc(a / this.lc | 0)[b];
    }
  };
  f.prototype.ae = function(a) {
    this.vc = a;
  };
  f.prototype.jc = function() {
    var a = new XMLHttpRequest;
    a.open("HEAD", c, !1);
    a.send(null);
    if (!(200 <= a.status && 300 > a.status || 304 === a.status)) {
      throw Error("Couldn't load " + c + ". Status: " + a.status);
    }
    var b = Number(a.getResponseHeader("Content-length")), f, d = (f = a.getResponseHeader("Accept-Ranges")) && "bytes" === f;
    a = (f = a.getResponseHeader("Content-Encoding")) && "gzip" === f;
    var l = 1048576;
    d || (l = b);
    var e = this;
    e.ae(function(a) {
      var f = a * l, d = (a + 1) * l - 1;
      d = Math.min(d, b - 1);
      if ("undefined" === typeof e.gb[a]) {
        var n = e.gb;
        if (f > d) {
          throw Error("invalid range (" + f + ", " + d + ") or no bytes requested!");
        }
        if (d > b - 1) {
          throw Error("only " + b + " bytes available! programmer error!");
        }
        var p = new XMLHttpRequest;
        p.open("GET", c, !1);
        b !== l && p.setRequestHeader("Range", "bytes=" + f + "-" + d);
        "undefined" != typeof Uint8Array && (p.responseType = "arraybuffer");
        p.overrideMimeType && p.overrideMimeType("text/plain; charset=x-user-defined");
        p.send(null);
        if (!(200 <= p.status && 300 > p.status || 304 === p.status)) {
          throw Error("Couldn't load " + c + ". Status: " + p.status);
        }
        f = void 0 !== p.response ? new Uint8Array(p.response || []) : Xc(p.responseText || "", !0);
        n[a] = f;
      }
      if ("undefined" === typeof e.gb[a]) {
        throw Error("doXHR failed!");
      }
      return e.gb[a];
    });
    if (a || !b) {
      l = b = 1, l = b = this.vc(0).length, console.log("LazyFiles on gzip forces download of the whole file when length is accessed");
    }
    this.Yc = b;
    this.Xc = l;
    this.Lb = !0;
  };
  if ("undefined" !== typeof XMLHttpRequest) {
    if (!fa) {
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    }
    var l = new f;
    Object.defineProperties(l, {length:{get:function() {
      this.Lb || this.jc();
      return this.Yc;
    }}, lc:{get:function() {
      this.Lb || this.jc();
      return this.Xc;
    }}});
    var n = void 0;
  } else {
    n = c, l = void 0;
  }
  var p = Yd(a, b, d, e);
  l ? p.b = l : n && (p.b = null, p.url = n);
  Object.defineProperties(p, {o:{get:function() {
    return this.b.length;
  }}});
  var u = {};
  Object.keys(p.g).forEach(function(a) {
    var b = p.g[a];
    u[a] = function() {
      if (!be(p)) {
        throw new E(D.ia);
      }
      return b.apply(null, arguments);
    };
  });
  u.read = function(a, b, c, f, d) {
    if (!be(p)) {
      throw new E(D.ia);
    }
    a = a.node.b;
    if (d >= a.length) {
      return 0;
    }
    f = Math.min(a.length - d, f);
    assert(0 <= f);
    if (a.slice) {
      for (var l = 0; l < f; l++) {
        b[c + l] = a[d + l];
      }
    } else {
      for (l = 0; l < f; l++) {
        b[c + l] = a.get(d + l);
      }
    }
    return f;
  };
  p.g = u;
  return p;
}
function de(a, b, c, d, e, f, l, n, p, u) {
  function w(c) {
    function x(c) {
      u && u();
      n || Zd(a, b, c, d, e, p);
      f && f();
      Db();
    }
    var y = !1;
    g.preloadPlugins.forEach(function(a) {
      !y && a.canHandle(t) && (a.handle(c, t, x, function() {
        l && l();
        Db();
      }), y = !0);
    });
    y || x(c);
  }
  ee();
  var t = b ? Rc(Qc(a, b)) : a;
  Cb();
  "string" == typeof c ? fe(c, function(a) {
    w(a);
  }, l) : w(c);
}
var FS = {}, td, Bd, Kd;
function ge(a, b) {
  he = a;
  ie = b;
  if (je) {
    if (0 == a) {
      ke = function() {
        var a = Math.max(0, le + b - me()) | 0;
        setTimeout(ne, a);
      }, oe = "timeout";
    } else {
      if (1 == a) {
        ke = function() {
          pe(ne);
        }, oe = "rAF";
      } else {
        if (2 == a) {
          if ("undefined" === typeof setImmediate) {
            var c = [];
            addEventListener("message", function(a) {
              if ("setimmediate" === a.data || "setimmediate" === a.data.target) {
                a.stopPropagation(), c.shift()();
              }
            }, !0);
            setImmediate = function(a) {
              c.push(a);
              fa ? (void 0 === g.setImmediates && (g.setImmediates = []), g.setImmediates.push(a), postMessage({target:"setimmediate"})) : postMessage("setimmediate", "*");
            };
          }
          ke = function() {
            setImmediate(ne);
          };
          oe = "immediate";
        }
      }
    }
  }
}
function me() {
  h();
}
function qe(a, b, c, d, e) {
  g.noExitRuntime = !0;
  assert(!je, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
  je = a;
  re = d;
  var f = "undefined" !== typeof d ? function() {
    g.dynCall_vi(a, d);
  } : function() {
    g.dynCall_v(a);
  };
  var l = se;
  ne = function() {
    if (!Na) {
      if (0 < te.length) {
        var a = Date.now(), b = te.shift();
        b.c(b.Fa);
        if (ue) {
          var c = ue, d = 0 == c % 1 ? c - 1 : Math.floor(c);
          ue = b.mc ? d : (8 * c + (d + .5)) / 9;
        }
        console.log('main loop blocker "' + b.name + '" took ' + (Date.now() - a) + " ms");
        ve();
        l < se || setTimeout(ne, 0);
      } else {
        if (!(l < se)) {
          if (we = we + 1 | 0, 1 == he && 1 < ie && 0 != we % ie) {
            ke();
          } else {
            0 == he && (le = me());
            if (xe) {
              for (a = xe.ya, xe.ya = xe.Va, xe.Va = a, a = xe.fa, xe.fa = xe.sb, xe.sb = a, a = ye[2097152], b = 0; b <= a; ++b) {
                xe.fa[b] = 0;
              }
            }
            "timeout" === oe && g.A && (k("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), oe = "");
            a: {
              if (!(Na || g.preMainLoop && !1 === g.preMainLoop())) {
                try {
                  f();
                } catch (t) {
                  if (t instanceof ua) {
                    break a;
                  }
                  t && "object" === typeof t && t.stack && k("exception thrown: " + [t, t.stack]);
                  throw t;
                }
                g.postMainLoop && g.postMainLoop();
              }
            }
            l < se || ("object" === typeof SDL && ze && ze.Yd && ze.Yd(), ke());
          }
        }
      }
    }
  };
  e || (b && 0 < b ? ge(0, 1e3 / b) : ge(1, 1), ke());
  if (c) {
    throw "SimulateInfiniteLoop";
  }
}
var ke = null, oe = "", se = 0, je = null, re = 0, he = 0, ie = 0, we = 0, te = [];
function ve() {
  if (g.setStatus) {
    var a = g.statusMessage || "Please wait...", b = ue, c = Ae;
    b ? b < c ? g.setStatus(a + " (" + (c - b) + "/" + c + ")") : g.setStatus(a) : g.setStatus("");
  }
}
var le, ne, ue, Ae, Be = !1, Ce = !1, De = [];
function ee() {
  function a() {
    Ce = document.pointerLockElement === g.canvas || document.mozPointerLockElement === g.canvas || document.webkitPointerLockElement === g.canvas || document.msPointerLockElement === g.canvas;
  }
  g.preloadPlugins || (g.preloadPlugins = []);
  if (!Ee) {
    Ee = !0;
    try {
      Fe = !0;
    } catch (c) {
      Fe = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
    }
    Ge = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Fe ? null : console.log("warning: no BlobBuilder");
    He = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
    g.Gc || "undefined" !== typeof He || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), g.Gc = !0);
    g.preloadPlugins.push({canHandle:function(a) {
      return !g.Gc && /\.(jpg|jpeg|png|bmp)$/i.test(a);
    }, handle:function(a, b, e, f) {
      var c = null;
      if (Fe) {
        try {
          c = new Blob([a], {type:Ie(b)}), c.size !== a.length && (c = new Blob([(new Uint8Array(a)).buffer], {type:Ie(b)}));
        } catch (u) {
          Fa("Blob constructor present but fails: " + u + "; falling back to blob builder");
        }
      }
      c || (c = new Ge, c.append((new Uint8Array(a)).buffer), c = c.getBlob());
      var d = He.createObjectURL(c), p = new Image;
      p.onload = function() {
        assert(p.complete, "Image " + b + " could not be decoded");
        var c = document.createElement("canvas");
        c.width = p.width;
        c.height = p.height;
        c.getContext("2d").drawImage(p, 0, 0);
        g.preloadedImages[b] = c;
        He.revokeObjectURL(d);
        e && e(a);
      };
      p.onerror = function() {
        console.log("Image " + d + " could not be decoded");
        f && f();
      };
      p.src = d;
    }});
    g.preloadPlugins.push({canHandle:function(a) {
      return !g.Td && a.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1};
    }, handle:function(a, b, e, f) {
      function c(c) {
        p || (p = !0, g.preloadedAudios[b] = c, e && e(a));
      }
      function d() {
        p || (p = !0, g.preloadedAudios[b] = new Audio, f && f());
      }
      var p = !1;
      if (Fe) {
        try {
          var u = new Blob([a], {type:Ie(b)});
        } catch (t) {
          return d();
        }
        u = He.createObjectURL(u);
        var w = new Audio;
        w.addEventListener("canplaythrough", function() {
          c(w);
        }, !1);
        w.onerror = function() {
          if (!p) {
            console.log("warning: browser could not fully decode audio " + b + ", trying slower base64 approach");
            for (var f = "", d = 0, l = 0, e = 0; e < a.length; e++) {
              for (d = d << 8 | a[e], l += 8; 6 <= l;) {
                var n = d >> l - 6 & 63;
                l -= 6;
                f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[n];
              }
            }
            2 == l ? (f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d & 3) << 4], f += "==") : 4 == l && (f += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d & 15) << 2], f += "=");
            w.src = "data:audio/x-" + b.substr(-3) + ";base64," + f;
            c(w);
          }
        };
        w.src = u;
        Je(function() {
          c(w);
        });
      } else {
        return d();
      }
    }});
    var b = g.canvas;
    b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function() {
    }, b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {
    }, b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), g.elementPointerLock && b.addEventListener("click", function(a) {
      !Ce && g.canvas.requestPointerLock && (g.canvas.requestPointerLock(), a.preventDefault());
    }, !1));
  }
}
function Ke(a, b, c, d) {
  if (b && g.A && a == g.canvas) {
    return g.A;
  }
  if (b) {
    var e = {antialias:!1, alpha:!1};
    if (d) {
      for (var f in d) {
        e[f] = d[f];
      }
    }
    if (e = Le(a, e)) {
      var l = Me[e].GLctx;
    }
  } else {
    l = a.getContext("2d");
  }
  if (!l) {
    return null;
  }
  c && (b || assert("undefined" === typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), g.A = l, b && Ne(e), g.me = b, De.forEach(function(a) {
    a();
  }), ee());
  return l;
}
var Oe = !1, Pe = void 0, Qe = void 0;
function Re(a, b, c) {
  function d() {
    Be = !1;
    var a = e.parentNode;
    (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a ? (e.exitFullscreen = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {
    }, e.exitFullscreen = e.exitFullscreen.bind(document), Pe && e.requestPointerLock(), Be = !0, Qe ? ("undefined" != typeof SDL && (m[Se >> 2] = fb[Se >> 2] | 8388608), Te(g.canvas), Ue()) : Te(e)) : (a.parentNode.insertBefore(e, a), a.parentNode.removeChild(a), Qe ? ("undefined" != typeof SDL && (m[Se >> 2] = fb[Se >> 2] & -8388609), Te(g.canvas), Ue()) : Te(e));
    if (g.onFullScreen) {
      g.onFullScreen(Be);
    }
    if (g.onFullscreen) {
      g.onFullscreen(Be);
    }
  }
  Pe = a;
  Qe = b;
  Ve = c;
  "undefined" === typeof Pe && (Pe = !0);
  "undefined" === typeof Qe && (Qe = !1);
  "undefined" === typeof Ve && (Ve = null);
  var e = g.canvas;
  Oe || (Oe = !0, document.addEventListener("fullscreenchange", d, !1), document.addEventListener("mozfullscreenchange", d, !1), document.addEventListener("webkitfullscreenchange", d, !1), document.addEventListener("MSFullscreenChange", d, !1));
  var f = document.createElement("div");
  e.parentNode.insertBefore(f, e);
  f.appendChild(e);
  f.requestFullscreen = f.requestFullscreen || f.mozRequestFullScreen || f.msRequestFullscreen || (f.webkitRequestFullscreen ? function() {
    f.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  } : null) || (f.webkitRequestFullScreen ? function() {
    f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  } : null);
  c ? f.requestFullscreen({Qg:c}) : f.requestFullscreen();
}
function We(a, b, c) {
  k("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");
  We = function(a, b, c) {
    return Re(a, b, c);
  };
  return Re(a, b, c);
}
var Xe = 0;
function Ye(a) {
  var b = Date.now();
  if (0 === Xe) {
    Xe = b + 1e3 / 60;
  } else {
    for (; b + 2 >= Xe;) {
      Xe += 1e3 / 60;
    }
  }
  setTimeout(a, Math.max(Xe - b, 0));
}
function pe(a) {
  "undefined" === typeof window ? Ye(a) : (window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || Ye), window.requestAnimationFrame(a));
}
function Je(a) {
  g.noExitRuntime = !0;
  setTimeout(function() {
    Na || a();
  }, 1e4);
}
function Ie(a) {
  return {jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)];
}
function Ze(a) {
  switch(a.type) {
    case "DOMMouseScroll":
      a = a.detail;
      break;
    case "mousewheel":
      a = a.wheelDelta;
      break;
    case "wheel":
      a = a.deltaY;
      break;
    default:
      throw "unrecognized mouse wheel event: " + a.type;
  }
  return a;
}
var $e = 0, af = 0, bf = 0, cf = 0, df = {}, ef = {};
function ff(a) {
  if (Ce) {
    "mousemove" != a.type && "mozMovementX" in a ? bf = cf = 0 : (bf = a.movementX || a.mozMovementX || a.webkitMovementX || 0, cf = a.movementY || a.mozMovementY || a.webkitMovementY || 0), "undefined" != typeof SDL ? ($e = SDL.vg + bf, af = SDL.wg + cf) : ($e += bf, af += cf);
  } else {
    var b = g.canvas.getBoundingClientRect(), c = g.canvas.width, d = g.canvas.height, e = "undefined" !== typeof window.scrollX ? window.scrollX : window.pageXOffset, f = "undefined" !== typeof window.scrollY ? window.scrollY : window.pageYOffset;
    if ("touchstart" === a.type || "touchend" === a.type || "touchmove" === a.type) {
      var l = a.za;
      if (void 0 !== l) {
        if (e = l.pageX - (e + b.left), f = l.pageY - (f + b.top), e *= c / b.width, f *= d / b.height, b = {x:e, y:f}, "touchstart" === a.type) {
          ef[l.identifier] = b, df[l.identifier] = b;
        } else {
          if ("touchend" === a.type || "touchmove" === a.type) {
            (a = df[l.identifier]) || (a = b), ef[l.identifier] = a, df[l.identifier] = b;
          }
        }
      }
    } else {
      l = a.pageX - (e + b.left), a = a.pageY - (f + b.top), l *= c / b.width, a *= d / b.height, bf = l - $e, cf = a - af, $e = l, af = a;
    }
  }
}
function fe(a, b, c) {
  var d = "al " + a;
  g.readAsync(a, function(c) {
    assert(c, 'Loading data file "' + a + '" failed (no arrayBuffer).');
    b(new Uint8Array(c));
    d && Db();
  }, function() {
    if (c) {
      c();
    } else {
      throw 'Loading data file "' + a + '" failed.';
    }
  });
  d && Cb();
}
var gf = [];
function Ue() {
  var a = g.canvas;
  gf.forEach(function(b) {
    b(a.width, a.height);
  });
}
function Te(a, b, c) {
  b && c ? (a.ne = b, a.xd = c) : (b = a.ne, c = a.xd);
  var d = b, e = c;
  g.forcedAspectRatio && 0 < g.forcedAspectRatio && (d / e < g.forcedAspectRatio ? d = Math.round(e * g.forcedAspectRatio) : e = Math.round(d / g.forcedAspectRatio));
  if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
    var f = Math.min(screen.width / d, screen.height / e);
    d = Math.round(d * f);
    e = Math.round(e * f);
  }
  Qe ? (a.width != d && (a.width = d), a.height != e && (a.height = e), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || e != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", e + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
}
var Browser = {}, Ee, Fe, Ge, He, Ve;
function hf() {
  return Date.now() - jf | 0;
}
var kf = {}, lf = [], L = [], mf = [null], nf = [null], of = {audio:null, volume:1}, pf = !1, qf = {0:3, 1:3, 2:2, 3:0, 4:0, 5:1, 6:16, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0, 13:0, 14:0, 15:1, 16:0, 17:0, 18:0}, rf = null, sf = {}, tf = !1, uf = !1, jf = null, vf = 0, wf = 0, xf = 0, yf = [0, 0, 0], M = {}, zf = {16:1249, 17:1248, 18:1250, 20:1081, 33:1099, 34:1102, 35:1101, 36:1098, 37:1104, 38:1106, 39:1103, 40:1105, 44:316, 45:1097, 46:127, 91:1251, 93:1125, 96:1122, 97:1113, 98:1114, 99:1115, 100:1116, 
101:1117, 102:1118, 103:1119, 104:1120, 105:1121, 106:1109, 107:1111, 109:1110, 110:1123, 111:1108, 112:1082, 113:1083, 114:1084, 115:1085, 116:1086, 117:1087, 118:1088, 119:1089, 120:1090, 121:1091, 122:1092, 123:1093, 124:1128, 125:1129, 126:1130, 127:1131, 128:1132, 129:1133, 130:1134, 131:1135, 132:1136, 133:1137, 134:1138, 135:1139, 144:1107, 160:94, 161:33, 162:34, 163:35, 164:36, 165:37, 166:38, 167:95, 168:40, 169:41, 170:42, 171:43, 172:124, 173:45, 174:123, 175:125, 176:126, 181:127, 182:129, 
183:128, 188:44, 190:46, 191:47, 192:96, 219:91, 220:92, 221:93, 222:39, 224:1251}, Af = {8:42, 9:43, 13:40, 27:41, 32:44, 35:204, 39:53, 44:54, 46:55, 47:56, 48:39, 49:30, 50:31, 51:32, 52:33, 53:34, 54:35, 55:36, 56:37, 57:38, 58:203, 59:51, 61:46, 91:47, 92:49, 93:48, 96:52, 97:4, 98:5, 99:6, 100:7, 101:8, 102:9, 103:10, 104:11, 105:12, 106:13, 107:14, 108:15, 109:16, 110:17, 111:18, 112:19, 113:20, 114:21, 115:22, 116:23, 117:24, 118:25, 119:26, 120:27, 121:28, 122:29, 127:76, 305:224, 308:226, 
316:70};
function Bf(a) {
  return {x:m[a + 0 >> 2], y:m[a + 4 >> 2], P:m[a + 8 >> 2], N:m[a + 12 >> 2]};
}
function Cf(a, b, c, d, e, f, l, n, p) {
  c = c || 0;
  var u = c & 1, w = c & 2097152, t = c & 67108864, A = Wa(60), x = Wa(44), y = w ? 1 : 4;
  w = 0;
  u || t || (w = Wa(a * b * 4));
  m[A >> 2] = c;
  m[A + 4 >> 2] = x;
  m[A + 8 >> 2] = a;
  m[A + 12 >> 2] = b;
  m[A + 16 >> 2] = a * y;
  m[A + 20 >> 2] = w;
  m[A + 36 >> 2] = 0;
  m[A + 40 >> 2] = 0;
  m[A + 44 >> 2] = g.canvas.width;
  m[A + 48 >> 2] = g.canvas.height;
  m[A + 56 >> 2] = 1;
  m[x >> 2] = -2042224636;
  m[x + 4 >> 2] = 0;
  q[x + 8 >> 0] = 8 * y;
  q[x + 9 >> 0] = y;
  m[x + 12 >> 2] = f || 255;
  m[x + 16 >> 2] = l || 65280;
  m[x + 20 >> 2] = n || 16711680;
  m[x + 24 >> 2] = p || 4278190080;
  pf = pf || t;
  d ? f = g.canvas : (f = 0 < lf.length ? lf.pop() : document.createElement("canvas"), f.width = a, f.height = b);
  t = Ke(f, t, d, {antialias:0 != qf[13] && 1 < qf[14], depth:0 < qf[6], stencil:0 < qf[7], alpha:0 < qf[3]});
  kf[A] = {width:a, height:b, canvas:f, A:t, Kg:A, buffer:w, Vd:x, alpha:255, flags:c, locked:0, le:d, source:e, Kd:function(a) {
    return c & a;
  }};
  return A;
}
function Df(a) {
  var b = a + 56, c = m[b >> 2];
  1 < c ? m[b >> 2] = c - 1 : (b = kf[a], !b.le && b.canvas && lf.push(b.canvas), b.buffer && Ef(b.buffer), Ef(b.Vd), Ef(a), kf[a] = null, a === Se && (Se = null));
}
var Ff = {}, Gf = null;
function Hf(a) {
  function b() {
    for (var a in sf) {
      L.push({type:"keyup", keyCode:sf[a]});
    }
  }
  switch(a.type) {
    case "touchstart":
    case "touchmove":
      a.preventDefault();
      var c = [];
      if ("touchstart" === a.type) {
        for (var d = 0; d < a.touches.length; d++) {
          var e = a.touches[d];
          1 != Ff[e.identifier] && (Ff[e.identifier] = !0, c.push(e));
        }
      } else {
        c = a.touches;
      }
      if (d = c[0]) {
        "touchstart" == a.type && (yf[0] = 1);
        switch(a.type) {
          case "touchstart":
            var f = "mousedown";
            break;
          case "touchmove":
            f = "mousemove";
        }
        f = {type:f, button:0, pageX:d.clientX, pageY:d.clientY};
        L.push(f);
      }
      for (d = 0; d < c.length; d++) {
        e = c[d], L.push({type:a.type, za:e});
      }
      break;
    case "touchend":
      a.preventDefault();
      for (d = 0; d < a.changedTouches.length; d++) {
        e = a.changedTouches[d], !0 === Ff[e.identifier] && delete Ff[e.identifier];
      }
      f = {type:"mouseup", button:0, pageX:a.changedTouches[0].clientX, pageY:a.changedTouches[0].clientY};
      yf[0] = 0;
      L.push(f);
      for (d = 0; d < a.changedTouches.length; d++) {
        e = a.changedTouches[d], L.push({type:"touchend", za:e});
      }
      break;
    case "DOMMouseScroll":
    case "mousewheel":
    case "wheel":
      c = -Ze(a);
      c = 0 == c ? 0 : 0 < c ? Math.max(c, 1) : Math.min(c, -1);
      f = 0 < c ? 3 : 4;
      L.push({type:"mousedown", button:f, pageX:a.pageX, pageY:a.pageY});
      L.push({type:"mouseup", button:f, pageX:a.pageX, pageY:a.pageY});
      L.push({type:"wheel", deltaX:0, deltaY:c});
      a.preventDefault();
      break;
    case "mousemove":
      if (1 === yf[0] && L.push({type:"touchmove", za:{identifier:0, Ia:-1, pageX:a.pageX, pageY:a.pageY}}), Ce && ("mozMovementX" in a && (a.movementX = a.mozMovementX, a.movementY = a.mozMovementY), 0 == a.movementX && 0 == a.movementY)) {
        a.preventDefault();
        return;
      }
    case "keydown":
    case "keyup":
    case "keypress":
    case "mousedown":
    case "mouseup":
      "keydown" === a.type && If && 8 !== a.keyCode && 9 !== a.keyCode || a.preventDefault();
      if ("mousedown" == a.type) {
        yf[a.button] = 1, L.push({type:"touchstart", za:{identifier:0, Ia:-1, pageX:a.pageX, pageY:a.pageY}});
      } else {
        if ("mouseup" == a.type) {
          if (!yf[a.button]) {
            return;
          }
          L.push({type:"touchend", za:{identifier:0, Ia:-1, pageX:a.pageX, pageY:a.pageY}});
          yf[a.button] = 0;
        }
      }
      if ("keydown" === a.type || "mousedown" === a.type) {
        tf = !0;
      } else {
        if ("keyup" === a.type || "mouseup" === a.type) {
          uf && (g.requestFullscreen(!0, !0), uf = !1), tf = !1;
        }
      }
      "keypress" === a.type && Gf ? (Gf.Nd = a.charCode, Gf = null) : "keydown" === a.type && (Gf = a);
      "keypress" !== a.type && L.push(a);
      break;
    case "mouseout":
      for (d = 0; 3 > d; d++) {
        yf[d] && (L.push({type:"mouseup", button:d, pageX:a.pageX, pageY:a.pageY}), yf[d] = 0);
      }
      a.preventDefault();
      break;
    case "focus":
      L.push(a);
      a.preventDefault();
      break;
    case "blur":
      L.push(a);
      b();
      a.preventDefault();
      break;
    case "visibilitychange":
      L.push({type:"visibilitychange", visible:!document.hidden});
      b();
      a.preventDefault();
      break;
    case "unload":
      ne && (L.push(a), ne());
      return;
    case "resize":
      L.push(a), a.preventDefault && a.preventDefault();
  }
  1e4 <= L.length && (k("SDL event queue full, dropping events"), L = L.slice(0, 1e4));
}
function Jf(a) {
  var b = a.keyCode;
  65 <= b && 90 >= b ? b += 32 : (b = zf[a.keyCode] || a.keyCode, a.location === KeyboardEvent.pe && 1248 <= b && 1251 >= b && (b += 4));
  return b;
}
function Kf(a) {
  if (!a.vd) {
    switch(a.vd = !0, a.type) {
      case "touchstart":
      case "touchend":
      case "touchmove":
        ff(a);
        break;
      case "keydown":
      case "keyup":
        var b = "keydown" === a.type, c = Jf(a);
        q[rf + c >> 0] = b;
        xf = (q[rf + 1248 >> 0] ? 64 : 0) | (q[rf + 1249 >> 0] ? 1 : 0) | (q[rf + 1250 >> 0] ? 256 : 0) | (q[rf + 1252 >> 0] ? 128 : 0) | (q[rf + 1253 >> 0] ? 2 : 0) | (q[rf + 1254 >> 0] ? 512 : 0);
        b ? sf[c] = a.keyCode : delete sf[c];
        break;
      case "mousedown":
      case "mouseup":
        "mousedown" == a.type ? wf |= 1 << a.button : "mouseup" == a.type && (wf &= ~(1 << a.button));
      case "mousemove":
        ff(a);
    }
  }
}
function Lf(a, b) {
  if ("number" === typeof a) {
    Mf(b, a, 28), Ef(a);
  } else {
    switch(Kf(a), a.type) {
      case "keydown":
      case "keyup":
        var c = "keydown" === a.type, d = Jf(a);
        var e = 1024 <= d ? d - 1024 : Af[d] || d;
        m[b >> 2] = M[a.type];
        q[b + 8 >> 0] = c ? 1 : 0;
        q[b + 9 >> 0] = 0;
        m[b + 12 >> 2] = e;
        m[b + 16 >> 2] = d;
        db[b + 20 >> 1] = xf;
        m[b + 24 >> 2] = a.Nd || d;
        break;
      case "keypress":
        m[b >> 2] = M[a.type];
        a = Xc(String.fromCharCode(a.charCode));
        for (c = 0; c < a.length; ++c) {
          q[b + (8 + c) >> 0] = a[c];
        }
        break;
      case "mousedown":
      case "mouseup":
      case "mousemove":
        "mousemove" != a.type ? (c = "mousedown" === a.type, m[b >> 2] = M[a.type], m[b + 4 >> 2] = 0, m[b + 8 >> 2] = 0, m[b + 12 >> 2] = 0, q[b + 16 >> 0] = a.button + 1, q[b + 17 >> 0] = c ? 1 : 0, m[b + 20 >> 2] = $e, m[b + 24 >> 2] = af) : (m[b >> 2] = M[a.type], m[b + 4 >> 2] = 0, m[b + 8 >> 2] = 0, m[b + 12 >> 2] = 0, m[b + 16 >> 2] = wf, m[b + 20 >> 2] = $e, m[b + 24 >> 2] = af, m[b + 28 >> 2] = bf, m[b + 32 >> 2] = cf);
        break;
      case "wheel":
        m[b >> 2] = M[a.type];
        m[b + 16 >> 2] = a.deltaX;
        m[b + 20 >> 2] = a.deltaY;
        break;
      case "touchstart":
      case "touchend":
      case "touchmove":
        c = a.za;
        if (!df[c.identifier]) {
          break;
        }
        var f = g.canvas.width, l = g.canvas.height;
        d = df[c.identifier].x / f;
        e = df[c.identifier].y / l;
        f = d - ef[c.identifier].x / f;
        l = e - ef[c.identifier].y / l;
        void 0 === c.deviceID && (c.Ia = 0);
        if (0 === f && 0 === l && "touchmove" === a.type) {
          return !1;
        }
        m[b >> 2] = M[a.type];
        m[b + 4 >> 2] = hf();
        tempI64 = [c.Ia >>> 0, (tempDouble = c.Ia, 1 <= +vb(tempDouble) ? 0 < tempDouble ? (yb(+xb(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+wb((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)];
        m[b + 8 >> 2] = tempI64[0];
        m[b + 12 >> 2] = tempI64[1];
        tempI64 = [c.identifier >>> 0, (tempDouble = c.identifier, 1 <= +vb(tempDouble) ? 0 < tempDouble ? (yb(+xb(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+wb((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)];
        m[b + 16 >> 2] = tempI64[0];
        m[b + 20 >> 2] = tempI64[1];
        z[b + 24 >> 2] = d;
        z[b + 28 >> 2] = e;
        z[b + 32 >> 2] = f;
        z[b + 36 >> 2] = l;
        z[b + 40 >> 2] = void 0 !== c.force ? c.force : "touchend" == a.type ? 0 : 1;
        break;
      case "unload":
        m[b >> 2] = M[a.type];
        break;
      case "resize":
        m[b >> 2] = M[a.type];
        m[b + 4 >> 2] = a.P;
        m[b + 8 >> 2] = a.N;
        break;
      case "joystick_button_up":
      case "joystick_button_down":
        c = "joystick_button_up" === a.type ? 0 : 1;
        m[b >> 2] = M[a.type];
        q[b + 4 >> 0] = a.index;
        q[b + 5 >> 0] = a.button;
        q[b + 6 >> 0] = c;
        break;
      case "joystick_axis_motion":
        m[b >> 2] = M[a.type];
        q[b + 4 >> 0] = a.index;
        q[b + 5 >> 0] = a.axis;
        a = a.value;
        a = Math.min(1, Math.max(a, -1));
        m[b + 8 >> 2] = Math.ceil(32767.5 * (a + 1) - 32768);
        break;
      case "focus":
        m[b >> 2] = M[a.type];
        m[b + 4 >> 2] = 0;
        q[b + 8 >> 0] = 12;
        break;
      case "blur":
        m[b >> 2] = M[a.type];
        m[b + 4 >> 2] = 0;
        q[b + 8 >> 0] = 13;
        break;
      case "visibilitychange":
        c = a.visible ? 1 : 2;
        m[b >> 2] = M[a.type];
        m[b + 4 >> 2] = 0;
        q[b + 8 >> 0] = c;
        break;
      default:
        throw "Unhandled SDL event: " + a.type;
    }
  }
}
function Nf(a) {
  if (!(Of && Of >= a && 0 != a)) {
    Of = a;
    Pf = [];
    for (var b = 0; b < a; b++) {
      Pf[b] = {audio:null, volume:1};
    }
  }
}
function Qf(a, b) {
  if (!a) {
    return 0;
  }
  var c = 128 * a.volume;
  if (-1 != b && (a.volume = Math.min(Math.max(b, 0), 128) / 128, a.audio)) {
    try {
      a.audio.volume = a.volume, a.audio.$a && (a.audio.$a.gain.value = a.volume);
    } catch (d) {
      k("setGetVolume failed to set audio volume: " + d);
    }
  }
  return c;
}
function Rf(a) {
  if (a && !a.Y && Sf) {
    try {
      var b = a.Tb.Za;
      a.paused = !1;
      b.Bb ? (a.Y = Sf.createBufferSource(), a.Y.buffer = b.Bb, a.Y.loop = a.loop, a.Y.onended = function() {
        a.onended();
      }, a.Aa = Sf.createPanner(), a.Aa.setPosition(0, 0, -.5), a.Aa.panningModel = "equalpower", a.$a = Sf.createGain(), a.$a.gain.value = a.volume, a.Y.connect(a.Aa), a.Aa.connect(a.$a), a.$a.connect(Sf.destination), a.Y.start(0, a.Ha), a.startTime = Sf.currentTime - a.Ha) : (void 0 === b.qb && h("Cannot play back audio object that was not loaded"), b.qb.push(function() {
        a.paused || Rf(a);
      }));
    } catch (c) {
      k("playWebAudio failed: " + c);
    }
  }
}
function Tf(a) {
  if (a) {
    if (a.Y) {
      try {
        a.Ha = (Sf.currentTime - a.startTime) % a.Tb.Za.Bb.duration, a.Y.onended = void 0, a.Y.stop(0), a.Y = void 0;
      } catch (b) {
        k("pauseWebAudio failed: " + b);
      }
    }
    a.paused = !0;
  }
}
var Uf = {};
function Vf(a) {
  return "object" === typeof a ? a.pressed : 0 < a;
}
var SDL = {}, ze, Se, If, Of, Pf, Sf, Ma, Wf, Xf, Yf;
function Zf(a) {
  var b = kf[a];
  b.locked++;
  if (!(1 < b.locked || (b.buffer || (b.buffer = Wa(b.width * b.height * 4), m[a + 20 >> 2] = b.buffer), m[a + 20 >> 2] = b.buffer, a == Se && g.Hg && b.Jb))) {
    b.Jb = b.A.getImageData(0, 0, b.width, b.height);
    if (a == Se) {
      a = b.Jb.data;
      for (var c = a.length, d = 0; d < c / 4; d++) {
        a[4 * d + 3] = 255;
      }
    }
    if (b.Kd(2097152)) {
      throw "CopyOnLock is not supported for SDL_LockSurface with SDL_HWPALETTE flag set" + Error().stack;
    }
    r.set(b.Jb.data, b.buffer);
  }
}
function $f(a) {
  for (nf[a] = null; 0 < nf.length && null === nf[nf.length - 1];) {
    nf.pop();
  }
}
function ag(a, b) {
  try {
    var c = nf[a];
    if (void 0 === c) {
      return 0;
    }
    var d = c.filename;
    if (void 0 === d) {
      return Fa("Only file names that have been preloaded are supported for IMG_Load_RW. Consider using STB_IMAGE=1 if you want synchronous image decoding (see settings.js), or package files with --use-preload-plugins"), 0;
    }
    if (!e) {
      d = Rc(d);
      var e = g.preloadedImages[d];
      if (e) {
        g.freePreloadedMediaOnUse && (g.preloadedImages[d] = null);
      } else {
        return null === e && k("Trying to reuse preloaded image, but freePreloadedMediaOnUse is set!"), Fa("Cannot find preloaded image " + d), Fa("Cannot find preloaded image " + d + ". Consider using STB_IMAGE=1 if you want synchronous image decoding (see settings.js), or package files with --use-preload-plugins"), 0;
      }
    }
    var f = Cf(e.width, e.height, 0, !1, "load:" + d), l = kf[f];
    l.A.globalCompositeOperation = "copy";
    if (e.Dg) {
      var n = l.A.getImageData(0, 0, l.width, l.height);
      if (4 == e.eb) {
        n.data.set(r.subarray(e.data, e.data + e.size));
      } else {
        if (3 == e.eb) {
          for (var p = e.size / 3, u = n.data, w = e.data, t = 0, A = 0; A < p; A++) {
            u[t++] = r[w++ >> 0], u[t++] = r[w++ >> 0], u[t++] = r[w++ >> 0], u[t++] = 255;
          }
        } else {
          if (2 == e.eb) {
            for (p = e.size, u = n.data, w = e.data, A = t = 0; A < p; A++) {
              var x = r[w++ >> 0], y = r[w++ >> 0];
              u[t++] = x;
              u[t++] = x;
              u[t++] = x;
              u[t++] = y;
            }
          } else {
            if (1 == e.eb) {
              for (p = e.size, u = n.data, w = e.data, A = t = 0; A < p; A++) {
                var B = r[w++ >> 0];
                u[t++] = B;
                u[t++] = B;
                u[t++] = B;
                u[t++] = 255;
              }
            } else {
              return k("cannot handle bpp " + e.eb), 0;
            }
          }
        }
      }
      l.A.putImageData(n, 0, 0);
    } else {
      l.A.drawImage(e, 0, 0, e.width, e.height, 0, 0, e.width, e.height);
    }
    l.A.globalCompositeOperation = "source-over";
    Zf(f);
    l.locked--;
    pf && (l.canvas = l.A = null);
    return f;
  } finally {
    c && b && $f(a);
  }
}
function bg(a) {
  var b = nf.length;
  a = v(a);
  nf.push({filename:a, Od:Ie(a)});
  return b;
}
function cg() {
  ze && (ze && (void 0 !== ze.Mc && (clearTimeout(ze.Mc), ze.Ag = 0, ze.Mc = void 0), ze.paused = 1), Ef(ze.buffer), ze = null, Nf(0));
}
function dg(a) {
  mf[a] = null;
}
function eg() {
  var a = of.audio;
  a && (a.src = a.src, a.Ha = 0, a.pause());
  of.audio = null;
  SDL.yd && g.dynCall_v(SDL.yd);
  return 0;
}
function fg(a) {
  var b = nf[a];
  if (void 0 === b) {
    return 0;
  }
  a = "";
  if (void 0 !== b.filename) {
    a = Rc(b.filename);
    var c = g.preloadedAudios[a];
    if (!c) {
      null === c && k("Trying to reuse preloaded audio, but freePreloadedMediaOnUse is set!");
      g.Td || Fa("Cannot find preloaded audio " + a);
      try {
        var d = Pd(a);
      } catch (n) {
        return k("Couldn't find file for: " + a), 0;
      }
    }
    g.freePreloadedMediaOnUse && (g.preloadedAudios[a] = null);
  } else {
    if (void 0 !== b.fb) {
      d = Sf ? r.buffer.slice(b.fb, b.fb + b.count) : r.subarray(b.fb, b.fb + b.count);
    } else {
      return 0;
    }
  }
  var e = d ? d.buffer || d : d, f = void 0 === g.SDL_canPlayWithWebAudio || g.SDL_canPlayWithWebAudio(a, e);
  if (void 0 !== d && Sf && f) {
    c = void 0;
    var l = {qb:[]};
    Sf.decodeAudioData(e, function(a) {
      l.Bb = a;
      l.qb.forEach(function(a) {
        a();
      });
      l.qb = void 0;
    });
  } else {
    void 0 === c && d && (d = URL.createObjectURL(new Blob([d], {type:b.Od})), c = new Audio, c.src = d, c.xg = "content");
  }
  d = mf.length;
  mf.push({source:a, audio:c, Za:l});
  return d;
}
function gg() {
  return fg.apply(null, arguments);
}
function hg(a, b, c) {
  b = mf[b];
  if (!b || !b.audio && !b.Za) {
    return -1;
  }
  if (-1 == a) {
    for (var d = 0; d < Of; d++) {
      if (!Pf[d].audio) {
        a = d;
        break;
      }
    }
    if (-1 == a) {
      return k("All " + Of + " channels in use!"), -1;
    }
  }
  var e = Pf[a];
  b.Za ? (d = {}, d.Tb = b, d.paused = !1, d.Ha = 0, d.play = function() {
    Rf(this);
  }, d.pause = function() {
    Tf(this);
  }) : (d = b.audio.cloneNode(!0), d.Ud = b.audio.Ud, d.frequency = b.audio.frequency);
  d.onended = function() {
    e.audio == this && (e.audio.paused = !0, e.audio = null);
    Ma && La()(a);
  };
  e.audio = d;
  d.loop = 0 != c;
  d.volume = e.volume;
  d.play();
  return a;
}
function ig(a, b) {
  if (-1 == a) {
    for (a = 0; a < Of - 1; a++) {
      ig(a, b);
    }
    return ig(Of - 1, b);
  }
  return Qf(Pf[a], b);
}
function jg(a) {
  jf = Date.now();
  vf = a;
  g.doNotCaptureKeyboard || (a = g.keyboardListeningElement || document, a.addEventListener("keydown", Hf), a.addEventListener("keyup", Hf), a.addEventListener("keypress", Hf), window.addEventListener("focus", Hf), window.addEventListener("blur", Hf), document.addEventListener("visibilitychange", Hf));
  window.addEventListener("unload", Hf);
  rf = Wa(65536);
  kg(rf, 0, 65536);
  M.keydown = 768;
  M.keyup = 769;
  M.keypress = 771;
  M.mousedown = 1025;
  M.mouseup = 1026;
  M.mousemove = 1024;
  M.wheel = 1027;
  M.touchstart = 1792;
  M.touchend = 1793;
  M.touchmove = 1794;
  M.unload = 256;
  M.resize = 28673;
  M.visibilitychange = 512;
  M.focus = 512;
  M.blur = 512;
  M.joystick_axis_motion = 1536;
  M.joystick_button_down = 1539;
  M.joystick_button_up = 1540;
  return 0;
}
var lg = 1, mg = 0, ng = [], N = [], og = [], pg = [], qg = [], rg = [], O = [], Me = [], xe = null, sg = 0, tg = 0, ug = [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8], vg = {}, wg = {}, xg = [], yg = 4;
function P(a) {
  mg || (mg = a);
}
function zg(a) {
  for (var b = lg++, c = a.length; c < b; c++) {
    a[c] = null;
  }
  return b;
}
var Ag = null, Bg = [0], ye = null;
function Cg(a, b) {
  function c(a) {
    return 48 <= a && 57 >= a || 65 <= a && 90 >= a || 97 <= a && 122 >= a ? !0 : !1;
  }
  var d = -1;
  do {
    d = a.indexOf(b, d + 1);
    if (0 > d) {
      break;
    }
    if (!(0 < d && c(a[d - 1]) || (d += b.length, d < a.length - 1 && c(a[d + 1])))) {
      return !0;
    }
  } while (1);
  return !1;
}
function Dg(a, b, c, d) {
  for (var e = "", f = 0; f < b; ++f) {
    if (d) {
      var l = m[d + 4 * f >> 2];
      l = 0 > l ? v(m[c + 4 * f >> 2]) : v(m[c + 4 * f >> 2], l);
    } else {
      l = v(m[c + 4 * f >> 2]);
    }
    e += l;
  }
  35632 == GLctx.getShaderParameter(O[a], 35663) && (Cg(e, "dFdx") || Cg(e, "dFdy") || Cg(e, "fwidth")) && (e = "#extension GL_OES_standard_derivatives : enable\n" + e, GLctx.getExtension("OES_standard_derivatives"));
  return e;
}
function Le(a, b) {
  function c() {
  }
  "undefined" === typeof b.majorVersion && "undefined" === typeof b.minorVersion && (b.majorVersion = 1, b.minorVersion = 0);
  try {
    a.addEventListener("webglcontextcreationerror", c, !1);
    try {
      if (1 == b.majorVersion && 0 == b.minorVersion) {
        var d = a.getContext("webgl", b) || a.getContext("experimental-webgl", b);
      } else {
        if (2 == b.majorVersion && 0 == b.minorVersion) {
          d = a.getContext("webgl2", b);
        } else {
          throw "Unsupported WebGL context version " + majorVersion + "." + minorVersion + "!";
        }
      }
    } finally {
      a.removeEventListener("webglcontextcreationerror", c, !1);
    }
    if (!d) {
      throw ":(";
    }
  } catch (e) {
    return 0;
  }
  return d ? Eg(d, b) : 0;
}
function Eg(a, b) {
  var c = zg(Me), d = {handle:c, attributes:b, version:b.majorVersion, GLctx:a};
  a.canvas && (a.canvas.dg = d);
  Me[c] = d;
  ("undefined" === typeof b.enableExtensionsByDefault || b.enableExtensionsByDefault) && Fg(d);
  return c;
}
function Ne(a) {
  if (a = Me[a]) {
    GLctx = g.A = a.GLctx, xe = a;
  }
}
function Fg(a) {
  a || (a = xe);
  if (!a.Hd) {
    a.Hd = !0;
    var b = a.GLctx;
    a.ed = b.getExtension("WEBGL_compressed_texture_s3tc");
    a.Zc = b.getExtension("EXT_texture_filter_anisotropic");
    if (2 > a.version) {
      var c = b.getExtension("ANGLE_instanced_arrays");
      c && (b.vertexAttribDivisor = function(a, b) {
        c.vertexAttribDivisorANGLE(a, b);
      }, b.drawArraysInstanced = function(a, b, f, d) {
        c.drawArraysInstancedANGLE(a, b, f, d);
      }, b.drawElementsInstanced = function(a, b, f, d, e) {
        c.drawElementsInstancedANGLE(a, b, f, d, e);
      });
      var d = b.getExtension("OES_vertex_array_object");
      d && (b.createVertexArray = function() {
        return d.createVertexArrayOES();
      }, b.deleteVertexArray = function(a) {
        d.deleteVertexArrayOES(a);
      }, b.bindVertexArray = function(a) {
        d.bindVertexArrayOES(a);
      }, b.isVertexArray = function(a) {
        return d.isVertexArrayOES(a);
      });
      var e = b.getExtension("WEBGL_draw_buffers");
      e && (b.drawBuffers = function(a, b) {
        e.drawBuffersWEBGL(a, b);
      });
    }
    b.kg = b.getExtension("EXT_disjoint_timer_query");
    var f = "OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
    (a = b.getSupportedExtensions()) && 0 < a.length && b.getSupportedExtensions().forEach(function(a) {
      -1 != f.indexOf(a) && b.getExtension(a);
    });
  }
}
function Gg(a) {
  var b = N[a];
  vg[a] = {Pc:{}, Mb:0, Qa:-1, Ra:-1};
  a = vg[a];
  for (var c = a.Pc, d = GLctx.getProgramParameter(b, GLctx.ACTIVE_UNIFORMS), e = 0; e < d; ++e) {
    var f = GLctx.getActiveUniform(b, e), l = f.name;
    a.Mb = Math.max(a.Mb, l.length + 1);
    -1 !== l.indexOf("]", l.length - 1) && (l = l.slice(0, l.lastIndexOf("[")));
    var n = GLctx.getUniformLocation(b, l);
    if (null != n) {
      var p = zg(rg);
      c[l] = [f.size, p];
      rg[p] = n;
      for (var u = 1; u < f.size; ++u) {
        n = GLctx.getUniformLocation(b, l + "[" + u + "]"), p = zg(rg), rg[p] = n;
      }
    }
  }
}
var Hg, Ig, Jg, Kg = {};
function Lg(a) {
  if (Lg.bd) {
    var b = m[a >> 2];
    var c = m[b >> 2];
  } else {
    Lg.bd = !0, Kg.USER = Kg.LOGNAME = "web_user", Kg.PATH = "/", Kg.PWD = "/", Kg.HOME = "/home/web_user", Kg.LANG = "C.UTF-8", Kg._ = g.thisProgram, c = Xa(1024), b = Xa(256), m[b >> 2] = c, m[a >> 2] = b;
  }
  a = [];
  var d = 0, e;
  for (e in Kg) {
    if ("string" === typeof Kg[e]) {
      var f = e + "=" + Kg[e];
      a.push(f);
      d += f.length;
    }
  }
  if (1024 < d) {
    throw Error("Environment size exceeded TOTAL_ENV_SIZE!");
  }
  for (e = 0; e < a.length; e++) {
    d = f = a[e];
    for (var l = c, n = 0; n < d.length; ++n) {
      q[l++ >> 0] = d.charCodeAt(n);
    }
    q[l >> 0] = 0;
    m[b + 4 * e >> 2] = c;
    c += f.length + 1;
  }
  m[b + 4 * a.length >> 2] = 0;
}
function Mg(a, b) {
  if (0 === a) {
    a = Date.now();
  } else {
    if (1 === a && (ja || "undefined" !== typeof dateNow || (ea || fa) && self.performance && self.performance.now)) {
      a = me();
    } else {
      return Kc(D.l), -1;
    }
  }
  m[b >> 2] = a / 1e3 | 0;
  m[b + 4 >> 2] = a % 1e3 * 1E6 | 0;
  return 0;
}
var Ng = 0;
function Q() {
  Ng += 4;
  return m[Ng - 4 >> 2];
}
function Og() {
  var a = hd[Q()];
  if (!a) {
    throw new E(D.V);
  }
  return a;
}
function Pg() {
  var a = SOCKFS.rd(Q());
  if (!a) {
    throw new E(D.V);
  }
  return a;
}
function Qg(a) {
  var b = Q(), c = Q();
  if (a && 0 === b) {
    return null;
  }
  a = __read_sockaddr(b, c);
  if (a.i) {
    throw new E(a.i);
  }
  a.s = Rg(a.s) || a.s;
  return a;
}
var SOCKFS = {D:function() {
  g.websocket = g.websocket && "object" === typeof g.websocket ? g.websocket : {};
  g.websocket.Ab = {};
  g.websocket.on = function(a, b) {
    "function" === typeof b && (this.Ab[a] = b);
    return this;
  };
  g.websocket.emit = function(a, b) {
    "function" === typeof this.Ab[a] && this.Ab[a].call(this, b);
  };
  return ad(null, "/", 16895, 0);
}, createSocket:function(a, b, c) {
  c && assert(1 == b == (6 == c));
  a = {family:a, type:b, protocol:c, C:null, error:null, Ua:{}, Ob:[], ua:[], I:SOCKFS.J};
  b = SOCKFS.ob();
  c = ad(SOCKFS.root, b, 49152, 0);
  c.va = a;
  b = Ad({path:b, node:c, flags:vd("r+"), seekable:!1, g:SOCKFS.g});
  a.stream = b;
  return a;
}, rd:function(a) {
  return (a = hd[a]) && 49152 === (a.node.mode & 49152) ? a.node.va : null;
}, g:{ta:function(a) {
  a = a.node.va;
  return a.I.ta(a);
}, lb:function(a, b, c) {
  a = a.node.va;
  return a.I.lb(a, b, c);
}, read:function(a, b, c, d) {
  a = a.node.va;
  d = a.I.Sb(a, d);
  if (!d) {
    return 0;
  }
  b.set(d.buffer, c);
  return d.buffer.length;
}, write:function(a, b, c, d) {
  a = a.node.va;
  return a.I.Vb(a, b, c, d);
}, close:function(a) {
  a = a.node.va;
  a.I.close(a);
}}, ob:function() {
  SOCKFS.ob.current || (SOCKFS.ob.current = 0);
  return "socket[" + SOCKFS.ob.current++ + "]";
}, J:{ib:function(a, b, c) {
  if ("object" === typeof b) {
    var d = b;
    c = b = null;
  }
  if (d) {
    if (d._socket) {
      b = d._socket.remoteAddress, c = d._socket.remotePort;
    } else {
      c = /ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url);
      if (!c) {
        throw Error("WebSocket URL must be in the format ws(s)://address:port");
      }
      b = c[1];
      c = parseInt(c[2], 10);
    }
  } else {
    try {
      var e = g.websocket && "object" === typeof g.websocket, f = "ws:#".replace("#", "//");
      e && "string" === typeof g.websocket.url && (f = g.websocket.url);
      if ("ws://" === f || "wss://" === f) {
        var l = b.split("/");
        f = f + l[0] + ":" + c + "/" + l.slice(1).join("/");
      }
      l = "binary";
      e && "string" === typeof g.websocket.subprotocol && (l = g.websocket.subprotocol);
      l = l.replace(/^ +| +$/g, "").split(/ *, */);
      var n = ja ? {protocol:l.toString()} : l;
      e && null === g.websocket.subprotocol && (n = void 0);
      d = new (ja ? require("ws") : ea ? window.WebSocket : WebSocket)(f, n);
      d.binaryType = "arraybuffer";
    } catch (p) {
      throw new E(D.cc);
    }
  }
  b = {s:b, port:c, socket:d, jb:[]};
  SOCKFS.J.fc(a, b);
  SOCKFS.J.ud(a, b);
  2 === a.type && "undefined" !== typeof a.pa && b.jb.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (a.pa & 65280) >> 8, a.pa & 255]));
  return b;
}, kb:function(a, b, c) {
  return a.Ua[b + ":" + c];
}, fc:function(a, b) {
  a.Ua[b.s + ":" + b.port] = b;
}, Jc:function(a, b) {
  delete a.Ua[b.s + ":" + b.port];
}, ud:function(a, b) {
  function c() {
    g.websocket.emit("open", a.stream.j);
    try {
      for (var c = b.jb.shift(); c;) {
        b.socket.send(c), c = b.jb.shift();
      }
    } catch (l) {
      b.socket.close();
    }
  }
  function d(c) {
    assert("string" !== typeof c && void 0 !== c.byteLength);
    if (0 != c.byteLength) {
      c = new Uint8Array(c);
      var f = e;
      e = !1;
      f && 10 === c.length && 255 === c[0] && 255 === c[1] && 255 === c[2] && 255 === c[3] && 112 === c[4] && 111 === c[5] && 114 === c[6] && 116 === c[7] ? (c = c[8] << 8 | c[9], SOCKFS.J.Jc(a, b), b.port = c, SOCKFS.J.fc(a, b)) : (a.ua.push({s:b.s, port:b.port, data:c}), g.websocket.emit("message", a.stream.j));
    }
  }
  var e = !0;
  ja ? (b.socket.on("open", c), b.socket.on("message", function(a, b) {
    b.binary && d((new Uint8Array(a)).buffer);
  }), b.socket.on("close", function() {
    g.websocket.emit("close", a.stream.j);
  }), b.socket.on("error", function() {
    a.error = D.ac;
    g.websocket.emit("error", [a.stream.j, a.error, "ECONNREFUSED: Connection refused"]);
  })) : (b.socket.onopen = c, b.socket.onclose = function() {
    g.websocket.emit("close", a.stream.j);
  }, b.socket.onmessage = function(a) {
    d(a.data);
  }, b.socket.onerror = function() {
    a.error = D.ac;
    g.websocket.emit("error", [a.stream.j, a.error, "ECONNREFUSED: Connection refused"]);
  });
}, ta:function(a) {
  if (1 === a.type && a.C) {
    return a.Ob.length ? 65 : 0;
  }
  var b = 0, c = 1 === a.type ? SOCKFS.J.kb(a, a.R, a.T) : null;
  if (a.ua.length || !c || c && c.socket.readyState === c.socket.CLOSING || c && c.socket.readyState === c.socket.CLOSED) {
    b |= 65;
  }
  if (!c || c && c.socket.readyState === c.socket.OPEN) {
    b |= 4;
  }
  if (c && c.socket.readyState === c.socket.CLOSING || c && c.socket.readyState === c.socket.CLOSED) {
    b |= 16;
  }
  return b;
}, lb:function(a, b, c) {
  switch(b) {
    case 21531:
      return b = 0, a.ua.length && (b = a.ua[0].data.length), m[c >> 2] = b, 0;
    default:
      return D.l;
  }
}, close:function(a) {
  if (a.C) {
    try {
      a.C.close();
    } catch (e) {
    }
    a.C = null;
  }
  for (var b = Object.keys(a.Ua), c = 0; c < b.length; c++) {
    var d = a.Ua[b[c]];
    try {
      d.socket.close();
    } catch (e) {
    }
    SOCKFS.J.Jc(a, d);
  }
  return 0;
}, bind:function(a, b, c) {
  if ("undefined" !== typeof a.rb || "undefined" !== typeof a.pa) {
    throw new E(D.l);
  }
  a.rb = b;
  a.pa = c;
  if (2 === a.type) {
    a.C && (a.C.close(), a.C = null);
    try {
      a.I.listen(a, 0);
    } catch (d) {
      if (!(d instanceof E)) {
        throw d;
      }
      if (d.i !== D.zb) {
        throw d;
      }
    }
  }
}, connect:function(a, b, c) {
  if (a.C) {
    throw new E(D.zb);
  }
  if ("undefined" !== typeof a.R && "undefined" !== typeof a.T) {
    var d = SOCKFS.J.kb(a, a.R, a.T);
    if (d) {
      if (d.socket.readyState === d.socket.CONNECTING) {
        throw new E(D.Qc);
      }
      throw new E(D.Tc);
    }
  }
  b = SOCKFS.J.ib(a, b, c);
  a.R = b.s;
  a.T = b.port;
  throw new E(D.Sc);
}, listen:function(a) {
  if (!ja) {
    throw new E(D.zb);
  }
  if (a.C) {
    throw new E(D.l);
  }
  var b = require("ws").Server;
  a.C = new b({host:a.rb, port:a.pa});
  g.websocket.emit("listen", a.stream.j);
  a.C.on("connection", function(b) {
    if (1 === a.type) {
      var c = SOCKFS.createSocket(a.family, a.type, a.protocol);
      b = SOCKFS.J.ib(c, b);
      c.R = b.s;
      c.T = b.port;
      a.Ob.push(c);
      g.websocket.emit("connection", c.stream.j);
    } else {
      SOCKFS.J.ib(a, b), g.websocket.emit("connection", a.stream.j);
    }
  });
  a.C.on("closed", function() {
    g.websocket.emit("close", a.stream.j);
    a.C = null;
  });
  a.C.on("error", function() {
    a.error = D.cc;
    g.websocket.emit("error", [a.stream.j, a.error, "EHOSTUNREACH: Host is unreachable"]);
  });
}, accept:function(a) {
  if (!a.C) {
    throw new E(D.l);
  }
  var b = a.Ob.shift();
  b.stream.flags = a.stream.flags;
  return b;
}, rg:function(a, b) {
  if (b) {
    if (void 0 === a.R || void 0 === a.T) {
      throw new E(D.Da);
    }
    b = a.R;
    a = a.T;
  } else {
    b = a.rb || 0, a = a.pa || 0;
  }
  return {s:b, port:a};
}, Vb:function(a, b, c, d, e, f) {
  if (2 === a.type) {
    if (void 0 === e || void 0 === f) {
      e = a.R, f = a.T;
    }
    if (void 0 === e || void 0 === f) {
      throw new E(D.Rc);
    }
  } else {
    e = a.R, f = a.T;
  }
  var l = SOCKFS.J.kb(a, e, f);
  if (1 === a.type) {
    if (!l || l.socket.readyState === l.socket.CLOSING || l.socket.readyState === l.socket.CLOSED) {
      throw new E(D.Da);
    }
    if (l.socket.readyState === l.socket.CONNECTING) {
      throw new E(D.Ba);
    }
  }
  ArrayBuffer.isView(b) && (c += b.byteOffset, b = b.buffer);
  b = b.slice(c, c + d);
  if (2 === a.type && (!l || l.socket.readyState !== l.socket.OPEN)) {
    return l && l.socket.readyState !== l.socket.CLOSING && l.socket.readyState !== l.socket.CLOSED || (l = SOCKFS.J.ib(a, e, f)), l.jb.push(b), d;
  }
  try {
    return l.socket.send(b), d;
  } catch (n) {
    throw new E(D.l);
  }
}, Sb:function(a, b) {
  if (1 === a.type && a.C) {
    throw new E(D.Da);
  }
  var c = a.ua.shift();
  if (!c) {
    if (1 === a.type) {
      if (a = SOCKFS.J.kb(a, a.R, a.T)) {
        if (a.socket.readyState === a.socket.CLOSING || a.socket.readyState === a.socket.CLOSED) {
          return null;
        }
        throw new E(D.Ba);
      }
      throw new E(D.Da);
    }
    throw new E(D.Ba);
  }
  var d = c.data.byteLength || c.data.length, e = c.data.byteOffset || 0, f = c.data.buffer || c.data;
  b = Math.min(b, d);
  var l = {buffer:new Uint8Array(f, e, b), s:c.s, port:c.port};
  1 === a.type && b < d && (c.data = new Uint8Array(f, e + b, d - b), a.ua.unshift(c));
  return l;
}}};
function Sg(a) {
  a = a.split(".");
  for (var b = 0; 4 > b; b++) {
    var c = Number(a[b]);
    if (isNaN(c)) {
      return null;
    }
    a[b] = c;
  }
  return (a[0] | a[1] << 8 | a[2] << 16 | a[3] << 24) >>> 0;
}
function Tg(a) {
  var b, c, d = [];
  if (!/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(a)) {
    return null;
  }
  if ("::" === a) {
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }
  a = 0 === a.indexOf("::") ? a.replace("::", "Z:") : a.replace("::", ":Z:");
  0 < a.indexOf(".") ? (a = a.replace(/[.]/g, ":"), a = a.split(":"), a[a.length - 4] = parseInt(a[a.length - 4]) + 256 * parseInt(a[a.length - 3]), a[a.length - 3] = parseInt(a[a.length - 2]) + 256 * parseInt(a[a.length - 1]), a = a.slice(0, a.length - 2)) : a = a.split(":");
  for (b = c = 0; b < a.length; b++) {
    if ("string" === typeof a[b]) {
      if ("Z" === a[b]) {
        for (c = 0; c < 8 - a.length + 1; c++) {
          d[b + c] = 0;
        }
        --c;
      } else {
        d[b + c] = Ug(parseInt(a[b], 16));
      }
    } else {
      d[b + c] = a[b];
    }
  }
  return [d[1] << 16 | d[0], d[3] << 16 | d[2], d[5] << 16 | d[4], d[7] << 16 | d[6]];
}
var Vg = 1, Wg = {}, Xg = {};
function Yg(a) {
  var b = Sg(a);
  if (null !== b) {
    return a;
  }
  b = Tg(a);
  if (null !== b) {
    return a;
  }
  Wg[a] ? b = Wg[a] : (b = Vg++, assert(65535 > b, "exceeded max address mappings of 65535"), b = "172.29." + (b & 255) + "." + (b & 65280), Xg[b] = a, Wg[a] = b);
  return b;
}
function Rg(a) {
  return Xg[a] ? Xg[a] : null;
}
function Zg(a) {
  return (a & 255) + "." + (a >> 8 & 255) + "." + (a >> 16 & 255) + "." + (a >> 24 & 255);
}
function __read_sockaddr(a, b) {
  var c = db[a >> 1], d = $g(db[a + 2 >> 1]);
  switch(c) {
    case 2:
      if (16 !== b) {
        return {i:D.l};
      }
      var e = m[a + 4 >> 2];
      e = Zg(e);
      break;
    case 10:
      if (28 !== b) {
        return {i:D.l};
      }
      e = [m[a + 8 >> 2], m[a + 12 >> 2], m[a + 16 >> 2], m[a + 20 >> 2]];
      a: {
        a = "";
        var f, l = b = 0, n = 0, p = 0;
        e = [e[0] & 65535, e[0] >> 16, e[1] & 65535, e[1] >> 16, e[2] & 65535, e[2] >> 16, e[3] & 65535, e[3] >> 16];
        var u = !0;
        for (f = 0; 5 > f; f++) {
          if (0 !== e[f]) {
            u = !1;
            break;
          }
        }
        if (u) {
          f = Zg(e[6] | e[7] << 16);
          if (-1 === e[5]) {
            e = "::ffff:" + f;
            break a;
          }
          if (0 === e[5]) {
            "0.0.0.0" === f && (f = "");
            "0.0.0.1" === f && (f = "1");
            e = "::" + f;
            break a;
          }
        }
        for (f = 0; 8 > f; f++) {
          0 === e[f] && (1 < f - l && (p = 0), l = f, p++), p > b && (b = p, n = f - b + 1);
        }
        for (f = 0; 8 > f; f++) {
          1 < b && 0 === e[f] && f >= n && f < n + b ? f === n && (a += ":", 0 === n && (a += ":")) : (a += Number($g(e[f] & 65535)).toString(16), a += 7 > f ? ":" : "");
        }
        e = a;
      }
      break;
    default:
      return {i:D.$b};
  }
  return {family:c, s:e, port:d};
}
function ah(a, b, c, d) {
  switch(b) {
    case 2:
      c = Sg(c);
      db[a >> 1] = b;
      m[a + 4 >> 2] = c;
      db[a + 2 >> 1] = Ug(d);
      break;
    case 10:
      c = Tg(c);
      m[a >> 2] = b;
      m[a + 8 >> 2] = c[0];
      m[a + 12 >> 2] = c[1];
      m[a + 16 >> 2] = c[2];
      m[a + 20 >> 2] = c[3];
      db[a + 2 >> 1] = Ug(d);
      m[a + 4 >> 2] = 0;
      m[a + 24 >> 2] = 0;
      break;
    default:
      return {i:D.$b};
  }
  return {};
}
var bh = za;
za += 48;
Va(Xc("GMT"), 2);
function ch() {
  function a(a) {
    return (a = a.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? a[1] : "GMT";
  }
  if (!dh) {
    dh = !0;
    m[eh() >> 2] = 60 * (new Date).getTimezoneOffset();
    var b = new Date(2e3, 0, 1), c = new Date(2e3, 6, 1);
    m[fh() >> 2] = Number(b.getTimezoneOffset() != c.getTimezoneOffset());
    var d = a(b), e = a(c);
    d = Va(Xc(d), 0);
    e = Va(Xc(e), 0);
    c.getTimezoneOffset() < b.getTimezoneOffset() ? (m[gh() >> 2] = d, m[gh() + 4 >> 2] = e) : (m[gh() >> 2] = e, m[gh() + 4 >> 2] = d);
  }
}
var dh;
function hh(a, b) {
  ch();
  a = new Date(1e3 * m[a >> 2]);
  m[b >> 2] = a.getSeconds();
  m[b + 4 >> 2] = a.getMinutes();
  m[b + 8 >> 2] = a.getHours();
  m[b + 12 >> 2] = a.getDate();
  m[b + 16 >> 2] = a.getMonth();
  m[b + 20 >> 2] = a.getFullYear() - 1900;
  m[b + 24 >> 2] = a.getDay();
  var c = new Date(a.getFullYear(), 0, 1);
  m[b + 28 >> 2] = (a.getTime() - c.getTime()) / 864E5 | 0;
  m[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
  var d = (new Date(2e3, 6, 1)).getTimezoneOffset();
  c = c.getTimezoneOffset();
  a = (d != c && a.getTimezoneOffset() == Math.min(c, d)) | 0;
  m[b + 32 >> 2] = a;
  a = m[gh() + (a ? 4 : 0) >> 2];
  m[b + 40 >> 2] = a;
  return b;
}
za += 48;
function _emscripten_glActiveTexture(a) {
  GLctx.activeTexture(a);
}
function _emscripten_glAttachShader(a, b) {
  GLctx.attachShader(N[a], O[b]);
}
function ih(a) {
  GLctx.enable(a);
}
function jh(a) {
  GLctx.disable(a);
}
function kh(a) {
  return GLctx.isEnabled(a);
}
function lh(a, b, c) {
  if (b) {
    var d = void 0;
    switch(a) {
      case 36346:
        d = 1;
        break;
      case 36344:
        "Integer" !== c && "Integer64" !== c && P(1280);
        return;
      case 36345:
        d = 0;
        break;
      case 34466:
        var e = GLctx.getParameter(34467);
        d = e ? e.length : 0;
    }
    if (void 0 === d) {
      switch(e = GLctx.getParameter(a), typeof e) {
        case "number":
          d = e;
          break;
        case "boolean":
          d = e ? 1 : 0;
          break;
        case "string":
          P(1280);
          return;
        case "object":
          if (null === e) {
            switch(a) {
              case 34964:
              case 35725:
              case 34965:
              case 36006:
              case 36007:
              case 32873:
              case 34068:
                d = 0;
                break;
              default:
                P(1280);
                return;
            }
          } else {
            if (e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array || e instanceof Array) {
              for (a = 0; a < e.length; ++a) {
                switch(c) {
                  case "Integer":
                    m[b + 4 * a >> 2] = e[a];
                    break;
                  case "Float":
                    z[b + 4 * a >> 2] = e[a];
                    break;
                  case "Boolean":
                    q[b + a >> 0] = e[a] ? 1 : 0;
                    break;
                  default:
                    throw "internal glGet error, bad type: " + c;
                }
              }
              return;
            }
            try {
              d = e.name | 0;
            } catch (f) {
              P(1280);
              k("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + f + ")");
              return;
            }
          }
          break;
        default:
          P(1280);
          return;
      }
    }
    switch(c) {
      case "Integer64":
        tempI64 = [d >>> 0, (tempDouble = d, 1 <= +vb(tempDouble) ? 0 < tempDouble ? (yb(+xb(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+wb((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)];
        m[b >> 2] = tempI64[0];
        m[b + 4 >> 2] = tempI64[1];
        break;
      case "Integer":
        m[b >> 2] = d;
        break;
      case "Float":
        z[b >> 2] = d;
        break;
      case "Boolean":
        q[b >> 0] = d ? 1 : 0;
        break;
      default:
        throw "internal glGet error, bad type: " + c;
    }
  } else {
    P(1281);
  }
}
function mh(a, b) {
  lh(a, b, "Boolean");
}
function nh(a, b) {
  lh(a, b, "Integer");
}
function oh(a) {
  if (wg[a]) {
    return wg[a];
  }
  switch(a) {
    case 7939:
      var b = GLctx.getSupportedExtensions();
      for (var c = [], d = 0; d < b.length; ++d) {
        c.push(b[d]), c.push("GL_" + b[d]);
      }
      b = Va(Xc(c.join(" ")), 0);
      break;
    case 7936:
    case 7937:
    case 37445:
    case 37446:
      (b = GLctx.getParameter(a)) || P(1280);
      b = Va(Xc(b), 0);
      break;
    case 7938:
      b = Va(Xc("OpenGL ES 2.0 (" + GLctx.getParameter(GLctx.VERSION) + ")"), 0);
      break;
    case 35724:
      b = GLctx.getParameter(GLctx.SHADING_LANGUAGE_VERSION);
      c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
      null !== c && (3 == c[1].length && (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
      b = Va(Xc(b), 0);
      break;
    default:
      return P(1280), 0;
  }
  return wg[a] = b;
}
function ph(a) {
  var b = zg(O);
  O[b] = GLctx.createShader(a);
  return b;
}
function qh(a, b) {
  GLctx.attachShader(N[a], O[b]);
}
function rh(a, b) {
  GLctx.detachShader(N[a], O[b]);
}
function sh(a) {
  GLctx.useProgram(a ? N[a] : null);
}
function th(a) {
  if (a) {
    var b = N[a];
    b ? (GLctx.deleteProgram(b), b.name = 0, N[a] = null, vg[a] = null) : P(1281);
  }
}
function uh(a, b, c) {
  c = v(c);
  GLctx.bindAttribLocation(N[a], b, c);
}
function vh(a) {
  GLctx.linkProgram(N[a]);
  vg[a] = null;
  Gg(a);
}
function wh(a, b) {
  var c = b ? ng[b] : null;
  a == GLctx.ARRAY_BUFFER ? xh = sg = b : a == GLctx.ELEMENT_ARRAY_BUFFER && (tg = b);
  GLctx.bindBuffer(a, c);
}
function yh(a, b) {
  lh(a, b, "Float");
}
function zh(a, b) {
  GLctx.hint(a, b);
}
function Ah(a) {
  GLctx.enableVertexAttribArray(a);
}
function Bh(a) {
  GLctx.disableVertexAttribArray(a);
}
function Ch(a, b, c, d, e, f) {
  GLctx.vertexAttribPointer(a, b, c, !!d, e, f);
}
function Dh(a) {
  GLctx.activeTexture(a);
}
var Eh = 0, Fh = 1, Gh = 1, Hh = null, Ih = 2048, Jh = !1, Kh = [], Lh = null, Mh = {}, Nh = !1;
function Oh() {
  if (!Nh) {
    Nh = !0;
    Hh = new Float32Array(4);
    k("WARNING: using emscripten GL emulation. This is a collection of limited workarounds, do not expect it to work.");
    k("WARNING: using emscripten GL emulation unsafe opts. If weirdness happens, try -s GL_UNSAFE_OPTS=0");
    var a = {2884:1, 3042:1, 3024:1, 2960:1, 2929:1, 3089:1, 32823:1, 32926:1, 32928:1}, b = ih;
    ih = _emscripten_glEnable = function(c) {
      Ph && Ph.hb();
      2912 == c ? 1 != Jh && (Qh = null, Jh = !0) : 3553 != c && c in a && b(c);
    };
    var c = jh;
    jh = _emscripten_glDisable = function(b) {
      Ph && Ph.hb();
      2912 == b ? 0 != Jh && (Qh = null, Jh = !1) : 3553 != b && b in a && c(b);
    };
    kh = _emscripten_glIsEnabled = function(b) {
      return 2912 == b ? Jh ? 1 : 0 : b in a ? GLctx.isEnabled(b) : 0;
    };
    var d = mh;
    mh = _emscripten_glGetBooleanv = function(a, b) {
      var c = Rh(a);
      null !== c ? q[b >> 0] = !0 === Sh[c] ? 1 : 0 : d(a, b);
    };
    var e = nh;
    nh = _emscripten_glGetIntegerv = function(a, b) {
      switch(a) {
        case 34018:
          a = GLctx.MAX_TEXTURE_IMAGE_UNITS;
          break;
        case 35658:
          a = GLctx.getParameter(GLctx.MAX_VERTEX_UNIFORM_VECTORS);
          m[b >> 2] = 4 * a;
          return;
        case 35657:
          a = GLctx.getParameter(GLctx.MAX_FRAGMENT_UNIFORM_VECTORS);
          m[b >> 2] = 4 * a;
          return;
        case 35659:
          a = GLctx.getParameter(GLctx.MAX_VARYING_VECTORS);
          m[b >> 2] = 4 * a;
          return;
        case 34929:
          a = GLctx.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
          break;
        case 32890:
          a = S[Th];
          m[b >> 2] = a ? a.size : 0;
          return;
        case 32891:
          a = S[Th];
          m[b >> 2] = a ? a.type : 0;
          return;
        case 32892:
          a = S[Th];
          m[b >> 2] = a ? a.ea : 0;
          return;
        case 32897:
          a = S[Uh];
          m[b >> 2] = a ? a.size : 0;
          return;
        case 32898:
          a = S[Uh];
          m[b >> 2] = a ? a.type : 0;
          return;
        case 32899:
          a = S[Uh];
          m[b >> 2] = a ? a.ea : 0;
          return;
        case 32904:
          a = S[Vh + Wh];
          m[b >> 2] = a ? a.size : 0;
          return;
        case 32905:
          a = S[Vh + Wh];
          m[b >> 2] = a ? a.type : 0;
          return;
        case 32906:
          a = S[Vh + Wh];
          m[b >> 2] = a ? a.ea : 0;
          return;
      }
      e(a, b);
    };
    var f = oh;
    oh = _emscripten_glGetString = function(a) {
      if (wg[a]) {
        return wg[a];
      }
      switch(a) {
        case 7939:
          var b = Va(Xc(GLctx.getSupportedExtensions().join(" ") + " GL_EXT_texture_env_combine GL_ARB_texture_env_crossbar GL_ATI_texture_env_combine3 GL_NV_texture_env_combine4 GL_EXT_texture_env_dot3 GL_ARB_multitexture GL_ARB_vertex_buffer_object GL_EXT_framebuffer_object GL_ARB_vertex_program GL_ARB_fragment_program GL_ARB_shading_language_100 GL_ARB_shader_objects GL_ARB_vertex_shader GL_ARB_fragment_shader GL_ARB_texture_cube_map GL_EXT_draw_range_elements" + (xe.ed ? " GL_ARB_texture_compression GL_EXT_texture_compression_s3tc" : 
          "") + (xe.Zc ? " GL_EXT_texture_filter_anisotropic" : "")), 0);
          return wg[a] = b;
      }
      return f(a);
    };
    Hg = {};
    var l = ph;
    ph = _emscripten_glCreateShader = function(a) {
      var b = l(a);
      Hg[b] = {type:a, od:!1};
      return b;
    };
    _emscripten_glShaderSource = function(a, b, c, f) {
      b = Dg(a, b, c, f);
      if (Hg[a].type == GLctx.VERTEX_SHADER) {
        f = 0 <= b.search(/u_projection/);
        var d = 0 <= b.search(/u_modelView/), l = 0 <= b.search(/a_position/), e = 0, n = 0, p = 0;
        c = b;
        b = b.replace(/ftransform\(\)/g, "(u_projection * u_modelView * a_position)");
        c != b && (e = n = p = 1);
        c = b;
        b = b.replace(/gl_ProjectionMatrix/g, "u_projection");
        c != b && (e = 1);
        c = b;
        b = b.replace(/gl_ModelViewMatrixTranspose\[2\]/g, "vec4(u_modelView[0][2], u_modelView[1][2], u_modelView[2][2], u_modelView[3][2])");
        c != b && (n = 1);
        c = b;
        b = b.replace(/gl_ModelViewMatrix/g, "u_modelView");
        c != b && (n = 1);
        c = b;
        b = b.replace(/gl_Vertex/g, "a_position");
        c != b && (p = 1);
        c = b;
        b = b.replace(/gl_ModelViewProjectionMatrix/g, "(u_projection * u_modelView)");
        c != b && (e = n = 1);
        p && !l && (b = "attribute vec4 a_position; \n" + b);
        n && !d && (b = "uniform mat4 u_modelView; \n" + b);
        e && !f && (b = "uniform mat4 u_projection; \n" + b);
        Hg[a].od = e || n || p;
        for (f = 0; f < Xh; f++) {
          c = b, d = -1 == b.search("v_texCoord" + f), b = b.replace(new RegExp("gl_TexCoord\\[" + f + "\\]", "g"), "v_texCoord" + f).replace(new RegExp("gl_MultiTexCoord" + f, "g"), "a_texCoord" + f), b != c && (b = "attribute vec4 a_texCoord" + f + "; \n" + b, d && (b = "varying vec4 v_texCoord" + f + ";   \n" + b)), c = b, b = b.replace(new RegExp("gl_TextureMatrix\\[" + f + "\\]", "g"), "u_textureMatrix" + f), b != c && (b = "uniform mat4 u_textureMatrix" + f + "; \n" + b);
        }
        0 <= b.indexOf("gl_FrontColor") && (b = "varying vec4 v_color; \n" + b.replace(/gl_FrontColor/g, "v_color"));
        0 <= b.indexOf("gl_Color") && (b = "attribute vec4 a_color; \n" + b.replace(/gl_Color/g, "a_color"));
        0 <= b.indexOf("gl_Normal") && (b = "attribute vec3 a_normal; \n" + b.replace(/gl_Normal/g, "a_normal"));
      } else {
        for (f = 0; f < Xh; f++) {
          c = b, b = b.replace(new RegExp("gl_TexCoord\\[" + f + "\\]", "g"), "v_texCoord" + f), b != c && (b = "varying vec4 v_texCoord" + f + ";   \n" + b);
        }
        0 <= b.indexOf("gl_Color") && (b = "varying vec4 v_color; \n" + b.replace(/gl_Color/g, "v_color"));
        0 <= b.indexOf("gl_Fog.color") && (b = "uniform vec4 u_fogColor;   \n" + b.replace(/gl_Fog.color/g, "u_fogColor"));
        0 <= b.indexOf("gl_Fog.end") && (b = "uniform float u_fogEnd;   \n" + b.replace(/gl_Fog.end/g, "u_fogEnd"));
        0 <= b.indexOf("gl_Fog.scale") && (b = "uniform float u_fogScale;   \n" + b.replace(/gl_Fog.scale/g, "u_fogScale"));
        0 <= b.indexOf("gl_Fog.density") && (b = "uniform float u_fogDensity;   \n" + b.replace(/gl_Fog.density/g, "u_fogDensity"));
      }
      0 <= b.indexOf("gl_FogFragCoord") && (b = "varying float v_fogFragCoord;   \n" + b.replace(/gl_FogFragCoord/g, "v_fogFragCoord"));
      /precision +(low|medium|high)p +float *;/.test(b) || (b = "precision mediump float;\n" + b);
      GLctx.shaderSource(O[a], b);
    };
    _emscripten_glCompileShader = function(a) {
      GLctx.compileShader(O[a]);
    };
    Ig = {};
    var n = qh;
    qh = _emscripten_glAttachShader = function(a, b) {
      Ig[a] || (Ig[a] = []);
      Ig[a].push(b);
      n(a, b);
    };
    var p = rh;
    rh = _emscripten_glDetachShader = function(a, b) {
      var c = Ig[a];
      c ? (c.splice(c.indexOf(b), 1), p(a, b)) : k("WARNING: _glDetachShader received invalid program: " + a);
    };
    var u = sh;
    sh = _emscripten_glUseProgram = function(a) {
      Jg != a && (Qh = null, Jg = a, Yh = 0, u(a));
    };
    var w = th;
    th = _emscripten_glDeleteProgram = function(a) {
      w(a);
      a == Jg && (Qh = null, Jg = 0);
    };
    var t = {}, A = uh;
    uh = _emscripten_glBindAttribLocation = function(a, b, c) {
      0 == b && (t[a] = !0);
      A(a, b, c);
    };
    var x = vh;
    vh = _emscripten_glLinkProgram = function(a) {
      a in t || GLctx.bindAttribLocation(N[a], 0, "a_position");
      x(a);
    };
    var y = wh;
    wh = _emscripten_glBindBuffer = function(a, b) {
      y(a, b);
      a == GLctx.ARRAY_BUFFER ? Lh && (Lh.arrayBuffer = b) : a == GLctx.ELEMENT_ARRAY_BUFFER && Lh && (Lh.nc = b);
    };
    var B = yh;
    yh = _emscripten_glGetFloatv = function(a, b) {
      2982 == a ? z.set(T[0], b >> 2) : 2983 == a ? z.set(T[1], b >> 2) : 2984 == a ? z.set(T[2 + Wh], b >> 2) : 2918 == a ? z.set(Hh, b >> 2) : 2915 == a ? z[b >> 2] = Eh : 2916 == a ? z[b >> 2] = Fh : 2914 == a ? z[b >> 2] = Gh : 2917 == a ? z[b >> 2] = Ih : B(a, b);
    };
    var C = zh;
    zh = _emscripten_glHint = function(a, b) {
      34031 != a && C(a, b);
    };
    var G = Ah;
    Ah = _emscripten_glEnableVertexAttribArray = function(a) {
      G(a);
      Mh[a] = 1;
      Lh && (Lh.Cb[a] = 1);
    };
    var H = Bh;
    Bh = _emscripten_glDisableVertexAttribArray = function(a) {
      H(a);
      delete Mh[a];
      Lh && delete Lh.Cb[a];
    };
    var K = Ch;
    Ch = _emscripten_glVertexAttribPointer = function(a, b, c, f, d, l) {
      K(a, b, c, f, d, l);
      Lh && (Lh.Zb[a] = [a, b, c, f, d, l]);
    };
  }
}
function Rh(a) {
  var b = null;
  switch(a) {
    case 3553:
    case 32888:
      b = Vh + Wh;
      break;
    case 32884:
      b = Th;
      break;
    case 32885:
      b = Zh;
      break;
    case 32886:
      b = Uh;
  }
  return b;
}
var $h, ai = null;
function bi() {
  function a() {
    var a = [];
    this.Id = function(b, c) {
      this.contains(b | 0) || a.push([b, c]);
    };
    var b;
    this.contains = function(c) {
      for (b = 0; b < a.length; ++b) {
        if (a[b][0] === c) {
          return !0;
        }
      }
      return !1;
    };
    var e;
    this.get = function(b) {
      for (e = 0; e < a.length; ++e) {
        if (a[e][0] === b) {
          return a[e][1];
        }
      }
    };
  }
  function b() {
    function b() {
      var c = new a;
      this.cd = function(a) {
        c.contains(a | 0) || c.Id(a | 0, new b);
        return c.get(a | 0);
      };
      this.value = void 0;
      this.get = function() {
        return this.value;
      };
      this.set = function(a) {
        this.value = a;
      };
    }
    function d(a) {
      var b;
      this.reset = function() {
        b = a;
        return this;
      };
      this.reset();
      this.next = function(a) {
        b = b.cd(a);
        return this;
      };
      this.get = function() {
        return b.get();
      };
      this.set = function(a) {
        b.set(a);
      };
    }
    var e, f;
    this.jd = function() {
      return new d(e);
    };
    this.clear = function() {
      e = new b;
      f = this.jd();
    };
    this.clear();
    this.sd = function() {
      f.reset();
      return f;
    };
  }
  return {create:function() {
    return new b;
  }};
}
var ci = null;
function di() {
  function a(a) {
    assert(!1, "[TexEnvJIT] ABORT: " + a);
  }
  function b(b) {
    a("No support: " + b);
  }
  function c(c) {
    var f = t[c].tc();
    switch(f) {
      case 3552:
        f = "texture2D";
        break;
      case 3553:
        f = "texture2D";
        break;
      case 32879:
        return b("No support for 3D textures.");
      case 34067:
        f = "textureCube";
        break;
      default:
        a("Sanity failure: Unknown texType: 0x" + f.toString(16));
        return;
    }
    var d = p + c;
    null != w && (d = "(" + w + c + " * " + d + ")");
    return f + "(" + n + c + ", " + d + ".xy)";
  }
  function d(a, f, d, l, e) {
    switch(l) {
      case 5890:
        a = c(a);
        break;
      case 34166:
        a = f;
        break;
      case 34167:
        a = u;
        break;
      case 34168:
        a = d;
        break;
      default:
        return b("Unsupported combiner src: 0x" + l.toString(16));
    }
    switch(e) {
      case 768:
        e = a + ".rgb";
        break;
      case 769:
        e = "(vec3(1.0) - " + a + ".rgb)";
        break;
      case 770:
        e = a + ".a";
        break;
      case 771:
        e = "(1.0 - " + a + ".a)";
        break;
      default:
        return b("Unsupported combiner op: 0x" + e.toString(16));
    }
    return e;
  }
  function e(a) {
    return a == Math.round(a) ? a + ".0" : a;
  }
  function f() {
    this.Ea = this.Ga = this.mode = 8448;
    this.$ = this.ba = 1;
    this.B = [0, 0, 0, 0];
    this.M = [5890, 34168, 34166];
    this.L = [5890, 34168, 34166];
    this.G = [768, 768, 770];
    this.K = [770, 770, 770];
    this.Oc = {7681:0, 8448:1, 260:2, 3042:3, 8449:4, 34160:5, 34023:3, 34165:4, 5890:0, 34166:1, 34167:2, 34168:3, 768:0, 769:1, 770:2, 771:3};
    this.nb = -1;
    this.Ac = this.zc = 0;
    this.fd = function() {
      var a = this.Oc, b = 1638400 * a[this.mode];
      b += 327680 * a[this.Ga];
      b += 65536 * a[this.Ea];
      b += 16384 * (this.ba - 1);
      b += 4096 * (this.$ - 1);
      b += 1024 * a[this.M[0]];
      b += 256 * a[this.M[1]];
      b += 64 * a[this.M[2]];
      b += 16 * a[this.L[0]];
      b += 4 * a[this.L[1]];
      return b += a[this.L[2]];
    };
    this.gd = function() {
      var a = this.Oc;
      da = 4096 * a[this.G[0]];
      da += 1024 * a[this.G[1]];
      da += 256 * a[this.G[2]];
      da += 16 * a[this.K[0]];
      da += 4 * a[this.K[1]];
      return da += a[this.K[2]];
    };
    this.hd = function() {
      return 16777216 * this.B[0] + 65536 * this.B[1] + 256 * this.B[2] + 1 + this.B[3];
    };
    this.Zd = function() {
      this.nb = this.fd();
      this.zc = this.gd();
      this.Ac = this.hd();
    };
    this.u = function() {
      this.nb = -1;
      Qh = null;
    };
  }
  function l() {
    this.env = new f;
    this.Na = this.Ma = this.La = this.Ka = !1;
    this.v = 0;
    this.Yb = function(a) {
      this.v ? (-1 == this.env.nb && this.env.Zd(), a.next(this.v | this.env.nb << 4), a.next(this.env.zc), a.next(this.env.Ac)) : a.next(0);
    };
  }
  var n = "uTexUnit", p = "vTexCoord", u = "vPrimColor", w = "uTexMatrix", t = null, A = 0, x = [];
  l.prototype.enabled = function() {
    return this.v;
  };
  l.prototype.Ib = function(a, b, c) {
    if (!this.enabled()) {
      return ["vec4 " + a + " = " + b + ";"];
    }
    a = this.env.Ib(a, b, c).join("\n");
    b = "";
    for (var f = /(texture.*?\(.*?\))/g, d = 0, l; l = f.exec(a);) {
      var e = l[1];
      -1 != a.slice(l.index + 1).indexOf(e) && (f = "tej_env" + c + "_texload" + d++, b += "vec4 " + f + " = " + e + ";\n\n", a = a.split(e).join(f), f = /(texture.*\(.*\))/g);
    }
    return [b + a];
  };
  l.prototype.tc = function() {
    return this.Na ? 34067 : this.Ma ? 32879 : this.La ? 3553 : this.Ka ? 3552 : 0;
  };
  f.prototype.Ib = function(a, f, d) {
    switch(this.mode) {
      case 7681:
        return ["vec4 " + a + " = " + c(d) + ";"];
      case 260:
        var l = "tej_env" + d + "_", n = l + "tex", p = l + "color";
        l += "alpha";
        return ["vec4 " + n + " = " + c(d) + ";", "vec3 " + p + " = " + f + ".rgb + " + n + ".rgb;", "float " + l + " = " + f + ".a * " + n + ".a;", "vec4 " + a + " = vec4(" + p + ", " + l + ");"];
      case 8448:
        return a = ["vec4 " + a, " = ", f, " * ", c(d), ";"], [a.join("")];
      case 8449:
        return l = "tej_env" + d + "_", n = l + "tex", p = l + "color", l += "alpha", ["vec4 " + n + " = " + c(d) + ";", ["vec3 " + p + " = ", f + ".rgb * (1.0 - " + n + ".a)", " + ", n + ".rgb * " + n + ".a", ";"].join(""), "float " + l + " = " + f + ".a;", "vec4 " + a + " = vec4(" + p + ", " + l + ");"];
      case 3042:
        return l = "tej_env" + d + "_", n = l + "tex", p = l + "color", l += "alpha", ["vec4 " + n + " = " + c(d) + ";", ["vec3 " + p + " = ", f + ".rgb * (1.0 - " + n + ".rgb)", " + ", u + ".rgb * " + n + ".rgb", ";"].join(""), "float " + l + " = " + n + ".a;", "vec4 " + a + " = vec4(" + p + ", " + l + ");"];
      case 34160:
        return l = "tej_env" + d + "_", p = l + "color", l += "alpha", n = this.rc(!0, p, f, d, this.Ga, this.M, this.G), f = this.rc(!1, l, f, d, this.Ea, this.L, this.K), a = ["vec4 " + a, " = vec4(", 1 == this.ba ? p : p + " * " + e(this.ba), ", ", 1 == this.$ ? l : l + " * " + e(this.$), ");"].join(""), [].concat(n, f, [a]);
    }
    return b("Unsupported TexEnv mode: 0x" + this.mode.toString(16));
  };
  f.prototype.rc = function(c, f, l, n, p, u, x) {
    switch(p) {
      case 7681:
        var y = 1;
        break;
      case 8448:
      case 260:
      case 34023:
        y = 2;
        break;
      case 34165:
        y = 3;
        break;
      default:
        return b("Unsupported combiner: 0x" + p.toString(16));
    }
    var t = ["vec4(", e(this.B[0]), ", ", e(this.B[1]), ", ", e(this.B[2]), ", ", e(this.B[3]), ")"].join(""), w = 1 <= y ? d(n, t, l, u[0], x[0]) : null, B = 2 <= y ? d(n, t, l, u[1], x[1]) : null;
    l = 3 <= y ? d(n, t, l, u[2], x[2]) : null;
    c = c ? "vec3" : "float";
    switch(p) {
      case 7681:
        f = [c + " " + f, " = ", w, ";"];
        f = [f.join("")];
        break;
      case 8448:
        f = [c + " " + f + " = ", w + " * " + B, ";"];
        f = [f.join("")];
        break;
      case 260:
        f = [c + " " + f + " = ", w + " + " + B, ";"];
        f = [f.join("")];
        break;
      case 34023:
        f = [c + " " + f + " = ", w + " - " + B, ";"];
        f = [f.join("")];
        break;
      case 34165:
        n = "tej_env" + n + "_colorSrc2";
        a: {
          p = this.G[2];
          switch(p) {
            case 768:
            case 769:
              p = "vec3";
              break a;
            case 770:
            case 771:
              p = "float";
              break a;
          }
          p = b("Unsupported combiner op: 0x" + p.toString(16));
        }
        f = [c + " " + f, " = ", w + " * " + n, " + ", B + " * (1.0 - " + n + ")", ";"];
        f = [p + " " + n + " = " + l + ";", f.join("")];
        break;
      default:
        a("Sanity failure: Unmatched TexEnv.colorCombiner?");
        return;
    }
    return f;
  };
  return {Kb:function(a, b) {
    var c = 0;
    b ? c = b : a && (c = a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
    t = [];
    for (a = 0; a < c; a++) {
      t.push(new l);
    }
  }, ce:function(a, b, c, f) {
    n = a;
    p = b;
    u = c;
    w = f;
  }, pd:function(a, b) {
    b = b || 0;
    x.length = 0;
    for (var c = [], f = u, d = 0; d < t.length; d++) {
      if (t[d].enabled()) {
        x.push(d);
        var l = "tej_env" + d + "_result";
        f = t[d].Ib(l, f, d);
        c = c.concat(f, [""]);
        f = l;
      }
    }
    c.push(a + " = " + f + ";");
    a = "";
    for (d = 0; d < b; d++) {
      a += " ";
    }
    return a + c.join("\n" + a);
  }, td:function() {
    return x;
  }, Yb:function(a) {
    for (var b = 0; b < t.length; b++) {
      t[b].Yb(a);
    }
  }, qg:function(a) {
    return t[a].tc();
  }, zd:function(a) {
    A = a - 33984;
  }, Bd:function(a) {
    var b = t[A];
    switch(a) {
      case 3552:
        b.Ka || (Qh = null, b.Ka = !0, b.v |= 1);
        break;
      case 3553:
        b.La || (Qh = null, b.La = !0, b.v |= 2);
        break;
      case 32879:
        b.Ma || (Qh = null, b.Ma = !0, b.v |= 4);
        break;
      case 34067:
        b.Na || (Qh = null, b.Na = !0, b.v |= 8);
    }
  }, Ad:function(a) {
    var b = t[A];
    switch(a) {
      case 3552:
        b.Ka && (Qh = null, b.Ka = !1, b.v &= -2);
        break;
      case 3553:
        b.La && (Qh = null, b.La = !1, b.v &= -3);
        break;
      case 32879:
        b.Ma && (Qh = null, b.Ma = !1, b.v &= -5);
        break;
      case 34067:
        b.Na && (Qh = null, b.Na = !1, b.v &= -9);
    }
  }, Ed:function(a, b, c) {
    if (8960 == a) {
      switch(a = t[A].env, b) {
        case 34163:
          a.ba != c && (a.u(), a.ba = c);
          break;
        case 3356:
          a.$ != c && (a.u(), a.$ = c);
          break;
        default:
          k("WARNING: Unhandled `pname` in call to `glTexEnvf`.");
      }
    }
  }, Gd:function(a, b, c) {
    if (8960 == a) {
      switch(a = t[A].env, b) {
        case 8704:
          a.mode != c && (a.u(), a.mode = c);
          break;
        case 34161:
          a.Ga != c && (a.u(), a.Ga = c);
          break;
        case 34162:
          a.Ea != c && (a.u(), a.Ea = c);
          break;
        case 34176:
          a.M[0] != c && (a.u(), a.M[0] = c);
          break;
        case 34177:
          a.M[1] != c && (a.u(), a.M[1] = c);
          break;
        case 34178:
          a.M[2] != c && (a.u(), a.M[2] = c);
          break;
        case 34184:
          a.L[0] != c && (a.u(), a.L[0] = c);
          break;
        case 34185:
          a.L[1] != c && (a.u(), a.L[1] = c);
          break;
        case 34186:
          a.L[2] != c && (a.u(), a.L[2] = c);
          break;
        case 34192:
          a.G[0] != c && (a.u(), a.G[0] = c);
          break;
        case 34193:
          a.G[1] != c && (a.u(), a.G[1] = c);
          break;
        case 34194:
          a.G[2] != c && (a.u(), a.G[2] = c);
          break;
        case 34200:
          a.K[0] != c && (a.u(), a.K[0] = c);
          break;
        case 34201:
          a.K[1] != c && (a.u(), a.K[1] = c);
          break;
        case 34202:
          a.K[2] != c && (a.u(), a.K[2] = c);
          break;
        case 34163:
          a.ba != c && (a.u(), a.ba = c);
          break;
        case 3356:
          a.$ != c && (a.u(), a.$ = c);
          break;
        default:
          k("WARNING: Unhandled `pname` in call to `glTexEnvi`.");
      }
    }
  }, Fd:function(a, b, c) {
    if (8960 == a) {
      switch(a = t[A].env, b) {
        case 8705:
          for (b = 0; 4 > b; b++) {
            var f = z[c + 4 * b >> 2];
            a.B[b] != f && (a.u(), a.B[b] = f);
          }
          break;
        default:
          k("WARNING: Unhandled `pname` in call to `glTexEnvfv`.");
      }
    }
  }, Dd:function(a, b, c) {
    if (8960 == a) {
      switch(a = t[A].env, b) {
        case 8704:
          m[c >> 2] = a.mode;
          break;
        case 8705:
          m[c >> 2] = Math.max(Math.min(255 * a.B[0], 255, -255));
          m[c + 1 >> 2] = Math.max(Math.min(255 * a.B[1], 255, -255));
          m[c + 2 >> 2] = Math.max(Math.min(255 * a.B[2], 255, -255));
          m[c + 3 >> 2] = Math.max(Math.min(255 * a.B[3], 255, -255));
          break;
        case 34161:
          m[c >> 2] = a.Ga;
          break;
        case 34162:
          m[c >> 2] = a.Ea;
          break;
        case 34176:
          m[c >> 2] = a.M[0];
          break;
        case 34177:
          m[c >> 2] = a.M[1];
          break;
        case 34178:
          m[c >> 2] = a.M[2];
          break;
        case 34184:
          m[c >> 2] = a.L[0];
          break;
        case 34185:
          m[c >> 2] = a.L[1];
          break;
        case 34186:
          m[c >> 2] = a.L[2];
          break;
        case 34192:
          m[c >> 2] = a.G[0];
          break;
        case 34193:
          m[c >> 2] = a.G[1];
          break;
        case 34194:
          m[c >> 2] = a.G[2];
          break;
        case 34200:
          m[c >> 2] = a.K[0];
          break;
        case 34201:
          m[c >> 2] = a.K[1];
          break;
        case 34202:
          m[c >> 2] = a.K[2];
          break;
        case 34163:
          m[c >> 2] = a.ba;
          break;
        case 3356:
          m[c >> 2] = a.$;
          break;
        default:
          k("WARNING: Unhandled `pname` in call to `glGetTexEnvi`.");
      }
    }
  }, Cd:function(a, b, c) {
    if (8960 == a) {
      switch(a = t[A].env, b) {
        case 8705:
          z[c >> 2] = a.B[0], z[c + 4 >> 2] = a.B[1], z[c + 8 >> 2] = a.B[2], z[c + 12 >> 2] = a.B[3];
      }
    }
  }};
}
var U = null, ei = null, fi = null, V = 0, gi = -1, hi = null, ii = [], ji = 0, Ph = null, xh = null, ki = null, T = [], li = [], W = 0, X = !1, mi = !1, Th = 0, Zh = 1, Uh = 2, Vh = 3, ni = -1, Xh = -1, oi = 0, Sh = [0, 0], S = [], pi = [], Qh = null, qi = !1, Wh = 0, ri = null, Yh = null;
function si(a, b, c, d, e) {
  var f = S[a];
  if (f) {
    f.name = a, f.size = b, f.type = c, f.ea = d, f.na = e, f.offset = 0;
  } else {
    for (f = 0; f <= a; f++) {
      S[f] || (S[f] = {name:a, size:b, type:c, ea:d, na:e, offset:0});
    }
  }
  qi = !0;
}
function ti(a, b, c) {
  ii[a] ? ii[a]++ : (ii[a] = 1, Sh[a] = !0, si(a, b, c, 0, ji), ji += b * ug[c - 5120]);
}
function ui() {
  for (var a = 0; a < ni; a++) {
    ii[a] && (Sh[a] = !1);
  }
}
function vi() {
  if (Qh) {
    return Qh;
  }
  for (var a = hi.sd().reset(), b = 0, c = 0; c < pi.length; c++) {
    b |= 1 << pi[c].name;
  }
  c = 0;
  if (Jh) {
    switch(Ih) {
      case 2049:
        c = 1;
        break;
      case 9729:
        c = 2;
        break;
      default:
        c = 3;
    }
  }
  a.next(b << 2 | c);
  a.next(Jg);
  Jg || ci.Yb(a);
  b = a.get();
  return b ? Qh = b : (Qh = b = wi(), a.set(b), b);
}
function wi() {
  for (var a = !!Jg, b = !1, c = 0; c < Xh; c++) {
    Sh[Vh + c] && (b = !0);
  }
  c = {Kb:function() {
    var c = mi ? "u_textureMatrix" : null;
    if (a) {
      Hg[Ig[Jg][0]].type == GLctx.VERTEX_SHADER ? (this.Ya = O[Ig[Jg][0]], this.Oa = O[Ig[Jg][1]]) : (this.Ya = O[Ig[Jg][1]], this.Oa = O[Ig[Jg][0]]), this.m = N[Jg], this.Xa = [];
    } else {
      if (Jh) {
        switch(Ih) {
          case 2049:
            var e = "  float fog = exp(-u_fogDensity * u_fogDensity * ecDistance * ecDistance); \n";
            break;
          case 9729:
            e = "  float fog = (u_fogEnd - ecDistance) * u_fogScale; \n";
            break;
          default:
            e = "  float fog = exp(-u_fogDensity * ecDistance); \n";
        }
      }
      ci.ce("u_texUnit", "v_texCoord", "v_color", c);
      var f = ci.pd("gl_FragColor", 2), l = "", n = "", p = "", u = "";
      this.Xa = ci.td();
      for (var w = 0; w < this.Xa.length; w++) {
        var t = this.Xa[w];
        l += "attribute vec4 a_texCoord" + t + ";\n";
        n += "varying vec4 v_texCoord" + t + ";\n";
        p += "uniform sampler2D u_texUnit" + t + ";\n";
        u += "  v_texCoord" + t + " = a_texCoord" + t + ";\n";
        mi && (p += "uniform mat4 " + c + t + ";\n");
      }
      w = null;
      Jh && (w = "  v_fogFragCoord = abs(ecPosition.z);\n");
      w = ["attribute vec4 a_position;\nattribute vec4 a_color;\nvarying vec4 v_color;", l, n, Jh ? "varying float v_fogFragCoord;" : null, "uniform mat4 u_modelView;\nuniform mat4 u_projection;\nvoid main()\n{\n  vec4 ecPosition = u_modelView * a_position;\n  gl_Position = u_projection * ecPosition;\n  v_color = a_color;", u, w, "}\n"].join("\n").replace(/\n\n+/g, "\n");
      this.Ya = GLctx.createShader(GLctx.VERTEX_SHADER);
      GLctx.shaderSource(this.Ya, w);
      GLctx.compileShader(this.Ya);
      w = null;
      Jh && (w = ["\nvarying float v_fogFragCoord; \nuniform vec4 u_fogColor;      \nuniform float u_fogEnd;       \nuniform float u_fogScale;     \nuniform float u_fogDensity;   \nfloat ffog(in float ecDistance) { ", e, "  fog = clamp(fog, 0.0, 1.0); \n  return fog;                 \n}\n"].join("\n"));
      e = null;
      Jh && (e = "gl_FragColor = vec4(mix(u_fogColor.rgb, gl_FragColor.rgb, ffog(v_fogFragCoord)), gl_FragColor.a);\n");
      f = ["precision mediump float;", n, p, "varying vec4 v_color;", w, "void main()\n{", f, e, "}\n"].join("\n").replace(/\n\n+/g, "\n");
      this.Oa = GLctx.createShader(GLctx.FRAGMENT_SHADER);
      GLctx.shaderSource(this.Oa, f);
      GLctx.compileShader(this.Oa);
      this.m = GLctx.createProgram();
      GLctx.attachShader(this.m, this.Ya);
      GLctx.attachShader(this.m, this.Oa);
      GLctx.bindAttribLocation(this.m, Th, "a_position");
      GLctx.bindAttribLocation(this.m, Uh, "a_color");
      GLctx.bindAttribLocation(this.m, Zh, "a_normal");
      f = GLctx.getParameter(GLctx.MAX_VERTEX_ATTRIBS);
      for (w = 0; w < Xh && Vh + w < f; w++) {
        GLctx.bindAttribLocation(this.m, Vh + w, "a_texCoord" + w), GLctx.bindAttribLocation(this.m, Vh + w, "a_texCoord" + w);
      }
      GLctx.linkProgram(this.m);
    }
    this.Lc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.Pb = GLctx.getAttribLocation(this.m, "a_position");
    this.tb = [];
    for (w = 0; w < Xh; w++) {
      this.tb[w] = Sh[Vh + w] ? GLctx.getAttribLocation(this.m, "a_texCoord" + w) : -1;
    }
    this.aa = GLctx.getAttribLocation(this.m, "a_color");
    if (!a) {
      f = GLctx.getParameter(GLctx.CURRENT_PROGRAM);
      GLctx.useProgram(this.m);
      for (w = 0; w < this.Xa.length; w++) {
        n = this.Xa[w], GLctx.uniform1i(GLctx.getUniformLocation(this.m, "u_texUnit" + n), n);
      }
      GLctx.vertexAttrib4fv(this.aa, [1, 1, 1, 1]);
      GLctx.useProgram(f);
    }
    this.Xb = [];
    for (w = 0; w < Xh; w++) {
      this.Xb[w] = GLctx.getUniformLocation(this.m, "u_textureMatrix" + w);
    }
    this.pb = GLctx.getAttribLocation(this.m, "a_normal");
    this.Dc = GLctx.getUniformLocation(this.m, "u_modelView");
    this.Ic = GLctx.getUniformLocation(this.m, "u_projection");
    this.yc = b;
    this.xc = Sh[Zh] && 0 < S[Zh].size && 0 <= this.pb;
    this.wc = 0 === this.aa || 0 < this.aa;
    this.Db = GLctx.getUniformLocation(this.m, "u_fogColor");
    this.Fb = GLctx.getUniformLocation(this.m, "u_fogEnd");
    this.Gb = GLctx.getUniformLocation(this.m, "u_fogScale");
    this.Eb = GLctx.getUniformLocation(this.m, "u_fogDensity");
    this.wd = !!(this.Db || this.Fb || this.Gb || this.Eb);
  }, Wd:function() {
    if (sg) {
      var a = sg;
    } else {
      var b = xi * yi, c = zi * yi;
      a = ye[c];
      var l = xe.ya[a], n = xe.fa[a];
      xe.fa[a] = xe.fa[a] + 1 & 63;
      var p = l[n];
      p ? a = p : (p = GLctx.getParameter(GLctx.ARRAY_BUFFER_BINDING), l[n] = GLctx.createBuffer(), GLctx.bindBuffer(GLctx.ARRAY_BUFFER, l[n]), GLctx.bufferData(GLctx.ARRAY_BUFFER, 1 << a, GLctx.DYNAMIC_DRAW), GLctx.bindBuffer(GLctx.ARRAY_BUFFER, p), a = l[n]);
    }
    l = Ph;
    n = this == l && a == xh && (Jg || this.m) == ki && -1 == yi && !X;
    !n && l && l.hb();
    sg || (a != xh && (GLctx.bindBuffer(GLctx.ARRAY_BUFFER, a), xh = a), GLctx.bufferSubData(GLctx.ARRAY_BUFFER, b, U.subarray(b >> 2, c >> 2)));
    if (!n) {
      Ph = this;
      ki = Jg || this.m;
      -1 == yi;
      X = !1;
      Jg || Yh == this.m || (GLctx.useProgram(this.m), Yh = this.m);
      this.Dc && this.Pd != Y[0] && (this.Pd = Y[0], GLctx.uniformMatrix4fv(this.Dc, !1, T[0]));
      this.Ic && this.Xd != Y[1] && (this.Xd = Y[1], GLctx.uniformMatrix4fv(this.Ic, !1, T[1]));
      b = S;
      c = b[Th];
      GLctx.vertexAttribPointer(this.Pb, c.size, c.type, !1, yi, c.offset);
      GLctx.enableVertexAttribArray(this.Pb);
      this.xc && (c = b[Zh], GLctx.vertexAttribPointer(this.pb, c.size, c.type, !0, yi, c.offset), GLctx.enableVertexAttribArray(this.pb));
      if (this.yc) {
        for (c = 0; c < Xh; c++) {
          a = this.tb[c], void 0 === a || 0 > a || (l = b[Vh + c], l.size ? (GLctx.vertexAttribPointer(a, l.size, l.type, !1, yi, l.offset), GLctx.enableVertexAttribArray(a)) : (GLctx.vertexAttrib4f(a, 0, 0, 0, 1), GLctx.disableVertexAttribArray(a)), a = 2 + c, this.Xb[c] && this.Lc[a] != Y[a] && (this.Lc[a] = Y[a], GLctx.uniformMatrix4fv(this.Xb[c], !1, T[a])));
        }
      }
      Sh[Uh] ? (b = b[Uh], GLctx.vertexAttribPointer(this.aa, b.size, b.type, !0, yi, b.offset), GLctx.enableVertexAttribArray(this.aa)) : this.wc && (GLctx.disableVertexAttribArray(this.aa), GLctx.vertexAttrib4fv(this.aa, ri));
      this.wd && (this.Db && GLctx.uniform4fv(this.Db, Hh), this.Fb && GLctx.uniform1f(this.Fb, Fh), this.Gb && GLctx.uniform1f(this.Gb, 1 / (Fh - Eh)), this.Eb && GLctx.uniform1f(this.Eb, Gh));
    }
  }, hb:function() {
    GLctx.disableVertexAttribArray(this.Pb);
    if (this.yc) {
      for (var a = 0; a < Xh; a++) {
        Sh[Vh + a] && 0 <= this.tb[a] && GLctx.disableVertexAttribArray(this.tb[a]);
      }
    }
    this.wc && GLctx.disableVertexAttribArray(this.aa);
    this.xc && GLctx.disableVertexAttribArray(this.pb);
    Jg || (GLctx.useProgram(null), Yh = 0);
    sg || (GLctx.bindBuffer(GLctx.ARRAY_BUFFER, null), xh = null);
    ki = Ph = null;
    X = !0;
  }};
  c.Kb();
  return c;
}
function Ai(a, b) {
  if (qi) {
    qi = !1;
    for (var c = 2147483647, d = 0, e = 2147483647, f = 0, l = pi.length = 0; l < 3 + Xh; l++) {
      if (Sh[l]) {
        var n = S[l];
        pi.push(n);
        c = Math.min(c, n.na);
        n.oa = n.size * ug[n.type - 5120];
        d += n.oa;
        e = Math.min(e, n.ea);
        f = Math.max(f, n.ea);
      }
    }
    if ((e != f || f < d) && !b) {
      Bi || (Bi = Wa(2097152));
      c = Bi;
      for (l = d = 0; l < pi.length; l++) {
        n = pi[l], e = n.oa, 0 != e % 4 && (e += 4 - e % 4), n.offset = d, d += e;
      }
      for (l = 0; l < pi.length; l++) {
        n = pi[l];
        var p = Math.max(n.oa, n.ea);
        if (0 == (p & 3) && 0 == (n.oa & 3)) {
          p = n.oa >> 2;
          var u = Math.max(n.oa, n.ea) >> 2;
          for (e = 0; e < a; e++) {
            for (f = 0; f < p; f++) {
              m[(c + n.offset + d * e >> 2) + f] = m[(n.na >> 2) + e * u + f];
            }
          }
        } else {
          for (e = 0; e < a; e++) {
            for (f = 0; f < n.oa; f++) {
              q[c + n.offset + d * e + f] = q[n.na + e * p + f];
            }
          }
        }
        n.na = c + n.offset;
      }
      yi = d;
      Ci = c;
    } else {
      Ci = sg ? 0 : c;
      for (l = 0; l < pi.length; l++) {
        n = pi[l], n.offset = n.na - Ci;
      }
      yi = Math.max(f, d);
    }
    b || (V = yi * a / 4);
  } else {
    V = yi * a / 4;
  }
}
function Di(a, b, c) {
  b = b || 0;
  c = c || 0;
  var d = vi(), e = 4 * V / yi;
  if (e) {
    var f = !1, l = 0;
    if (a) {
      l = a;
      if (!sg && xi > zi) {
        for (var n = 0; n < a; n++) {
          var p = eb[c + 2 * n >> 1];
          xi = Math.min(xi, p);
          zi = Math.max(zi, p + 1);
        }
      }
      tg || (f = ye[a << 1], (n = xe.wa[f]) ? f = n : (n = GLctx.getParameter(GLctx.ELEMENT_ARRAY_BUFFER_BINDING), xe.wa[f] = GLctx.createBuffer(), GLctx.bindBuffer(GLctx.ELEMENT_ARRAY_BUFFER, xe.wa[f]), GLctx.bufferData(GLctx.ELEMENT_ARRAY_BUFFER, 1 << f, GLctx.DYNAMIC_DRAW), GLctx.bindBuffer(GLctx.ELEMENT_ARRAY_BUFFER, n), f = xe.wa[f]), GLctx.bindBuffer(GLctx.ELEMENT_ARRAY_BUFFER, f), GLctx.bufferSubData(GLctx.ELEMENT_ARRAY_BUFFER, 0, eb.subarray(c >> 1, c + (a << 1) >> 1)), c = 0, f = !0);
    } else {
      if (6 < gi) {
        if (7 != gi) {
          throw "unsupported immediate mode " + gi;
        }
        c = 3 * xi;
        l = e / 4 * 6;
        GLctx.bindBuffer(GLctx.ELEMENT_ARRAY_BUFFER, xe.Kc);
        f = !0;
      }
    }
    d.Wd();
    l ? GLctx.drawElements(GLctx.TRIANGLES, l, GLctx.UNSIGNED_SHORT, c) : GLctx.drawArrays(gi, b, e);
    f && GLctx.bindBuffer(GLctx.ELEMENT_ARRAY_BUFFER, ng[tg] || null);
  }
}
var xi, yi, zi, Y, Ci, Bi, Ei, Fi, Z = function() {
  var a = {}, b = {}, c = {}, d = {}, e = Float32Array;
  a.create = function(a) {
    var b = new e(3);
    a ? (b[0] = a[0], b[1] = a[1], b[2] = a[2]) : b[0] = b[1] = b[2] = 0;
    return b;
  };
  a.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    return b;
  };
  a.add = function(a, b, c) {
    if (!c || a === c) {
      return a[0] += b[0], a[1] += b[1], a[2] += b[2], a;
    }
    c[0] = a[0] + b[0];
    c[1] = a[1] + b[1];
    c[2] = a[2] + b[2];
    return c;
  };
  a.Jg = function(a, b, c) {
    if (!c || a === c) {
      return a[0] -= b[0], a[1] -= b[1], a[2] -= b[2], a;
    }
    c[0] = a[0] - b[0];
    c[1] = a[1] - b[1];
    c[2] = a[2] - b[2];
    return c;
  };
  a.multiply = function(a, b, c) {
    if (!c || a === c) {
      return a[0] *= b[0], a[1] *= b[1], a[2] *= b[2], a;
    }
    c[0] = a[0] * b[0];
    c[1] = a[1] * b[1];
    c[2] = a[2] * b[2];
    return c;
  };
  a.zg = function(a, b) {
    b || (b = a);
    b[0] = -a[0];
    b[1] = -a[1];
    b[2] = -a[2];
    return b;
  };
  a.scale = function(a, b, c) {
    if (!c || a === c) {
      return a[0] *= b, a[1] *= b, a[2] *= b, a;
    }
    c[0] = a[0] * b;
    c[1] = a[1] * b;
    c[2] = a[2] * b;
    return c;
  };
  a.normalize = function(a, b) {
    b || (b = a);
    var c = a[0], f = a[1];
    a = a[2];
    var d = Math.sqrt(c * c + f * f + a * a);
    if (!d) {
      return b[0] = 0, b[1] = 0, b[2] = 0, b;
    }
    if (1 === d) {
      return b[0] = c, b[1] = f, b[2] = a, b;
    }
    d = 1 / d;
    b[0] = c * d;
    b[1] = f * d;
    b[2] = a * d;
    return b;
  };
  a.ig = function(a, b, c) {
    c || (c = a);
    var f = a[0], d = a[1];
    a = a[2];
    var l = b[0], e = b[1];
    b = b[2];
    c[0] = d * b - a * e;
    c[1] = a * l - f * b;
    c[2] = f * e - d * l;
    return c;
  };
  a.length = function(a) {
    var b = a[0], c = a[1];
    a = a[2];
    return Math.sqrt(b * b + c * c + a * a);
  };
  a.ld = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  };
  a.direction = function(a, b, c) {
    c || (c = a);
    var f = a[0] - b[0], d = a[1] - b[1];
    a = a[2] - b[2];
    b = Math.sqrt(f * f + d * d + a * a);
    if (!b) {
      return c[0] = 0, c[1] = 0, c[2] = 0, c;
    }
    b = 1 / b;
    c[0] = f * b;
    c[1] = d * b;
    c[2] = a * b;
    return c;
  };
  a.sg = function(a, b, c, d) {
    d || (d = a);
    d[0] = a[0] + c * (b[0] - a[0]);
    d[1] = a[1] + c * (b[1] - a[1]);
    d[2] = a[2] + c * (b[2] - a[2]);
    return d;
  };
  a.lg = function(a, b) {
    var c = b[0] - a[0], f = b[1] - a[1];
    a = b[2] - a[2];
    return Math.sqrt(c * c + f * f + a * a);
  };
  a.Og = function(a, b, d, p, u) {
    u || (u = a);
    var f = c.create(), l = new e(4);
    l[0] = 2 * (a[0] - p[0]) / p[2] - 1;
    l[1] = 2 * (a[1] - p[1]) / p[3] - 1;
    l[2] = 2 * a[2] - 1;
    l[3] = 1;
    c.multiply(d, b, f);
    if (!c.inverse(f)) {
      return null;
    }
    c.Sd(f, l);
    if (0 === l[3]) {
      return null;
    }
    u[0] = l[0] / l[3];
    u[1] = l[1] / l[3];
    u[2] = l[2] / l[3];
    return u;
  };
  a.Wb = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + "]";
  };
  b.create = function(a) {
    var b = new e(9);
    a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8]);
    return b;
  };
  b.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    return b;
  };
  b.Pa = function(a) {
    a || (a = b.create());
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 1;
    a[5] = 0;
    a[6] = 0;
    a[7] = 0;
    a[8] = 1;
    return a;
  };
  b.Wa = function(a, b) {
    if (!b || a === b) {
      b = a[1];
      var c = a[2], f = a[5];
      a[1] = a[3];
      a[2] = a[6];
      a[3] = b;
      a[5] = a[7];
      a[6] = c;
      a[7] = f;
      return a;
    }
    b[0] = a[0];
    b[1] = a[3];
    b[2] = a[6];
    b[3] = a[1];
    b[4] = a[4];
    b[5] = a[7];
    b[6] = a[2];
    b[7] = a[5];
    b[8] = a[8];
    return b;
  };
  b.je = function(a, b) {
    b || (b = c.create());
    b[15] = 1;
    b[14] = 0;
    b[13] = 0;
    b[12] = 0;
    b[11] = 0;
    b[10] = a[8];
    b[9] = a[7];
    b[8] = a[6];
    b[7] = 0;
    b[6] = a[5];
    b[5] = a[4];
    b[4] = a[3];
    b[3] = 0;
    b[2] = a[2];
    b[1] = a[1];
    b[0] = a[0];
    return b;
  };
  b.Wb = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + "]";
  };
  c.create = function(a) {
    var b = new e(16);
    a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15]);
    return b;
  };
  c.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    b[15] = a[15];
    return b;
  };
  c.Pa = function(a) {
    a || (a = c.create());
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
    return a;
  };
  c.Wa = function(a, b) {
    if (!b || a === b) {
      b = a[1];
      var c = a[2], f = a[3], d = a[6], l = a[7], e = a[11];
      a[1] = a[4];
      a[2] = a[8];
      a[3] = a[12];
      a[4] = b;
      a[6] = a[9];
      a[7] = a[13];
      a[8] = c;
      a[9] = d;
      a[11] = a[14];
      a[12] = f;
      a[13] = l;
      a[14] = e;
      return a;
    }
    b[0] = a[0];
    b[1] = a[4];
    b[2] = a[8];
    b[3] = a[12];
    b[4] = a[1];
    b[5] = a[5];
    b[6] = a[9];
    b[7] = a[13];
    b[8] = a[2];
    b[9] = a[6];
    b[10] = a[10];
    b[11] = a[14];
    b[12] = a[3];
    b[13] = a[7];
    b[14] = a[11];
    b[15] = a[15];
    return b;
  };
  c.jg = function(a) {
    var b = a[0], c = a[1], f = a[2], d = a[3], e = a[4], t = a[5], A = a[6], x = a[7], y = a[8], B = a[9], C = a[10], G = a[11], H = a[12], K = a[13], J = a[14];
    a = a[15];
    return H * B * A * d - y * K * A * d - H * t * C * d + e * K * C * d + y * t * J * d - e * B * J * d - H * B * f * x + y * K * f * x + H * c * C * x - b * K * C * x - y * c * J * x + b * B * J * x + H * t * f * G - e * K * f * G - H * c * A * G + b * K * A * G + e * c * J * G - b * t * J * G - y * t * f * a + e * B * f * a + y * c * A * a - b * B * A * a - e * c * C * a + b * t * C * a;
  };
  c.inverse = function(a, b) {
    b || (b = a);
    var c = a[0], f = a[1], d = a[2], l = a[3], e = a[4], A = a[5], x = a[6], y = a[7], B = a[8], C = a[9], G = a[10], H = a[11], K = a[12], J = a[13], ca = a[14];
    a = a[15];
    var ba = c * A - f * e, ha = c * x - d * e, ma = c * y - l * e, va = f * x - d * A, wa = f * y - l * A, ka = d * y - l * x, R = B * J - C * K, sa = B * ca - G * K, na = B * a - H * K, oa = C * ca - G * J, Ja = C * a - H * J, Ka = G * a - H * ca, ia = ba * Ka - ha * Ja + ma * oa + va * na - wa * sa + ka * R;
    if (!ia) {
      return null;
    }
    ia = 1 / ia;
    b[0] = (A * Ka - x * Ja + y * oa) * ia;
    b[1] = (-f * Ka + d * Ja - l * oa) * ia;
    b[2] = (J * ka - ca * wa + a * va) * ia;
    b[3] = (-C * ka + G * wa - H * va) * ia;
    b[4] = (-e * Ka + x * na - y * sa) * ia;
    b[5] = (c * Ka - d * na + l * sa) * ia;
    b[6] = (-K * ka + ca * ma - a * ha) * ia;
    b[7] = (B * ka - G * ma + H * ha) * ia;
    b[8] = (e * Ja - A * na + y * R) * ia;
    b[9] = (-c * Ja + f * na - l * R) * ia;
    b[10] = (K * wa - J * ma + a * ba) * ia;
    b[11] = (-B * wa + C * ma - H * ba) * ia;
    b[12] = (-e * oa + A * sa - x * R) * ia;
    b[13] = (c * oa - f * sa + d * R) * ia;
    b[14] = (-K * va + J * ha - ca * ba) * ia;
    b[15] = (B * va - C * ha + G * ba) * ia;
    return b;
  };
  c.Ng = function(a, b) {
    b || (b = c.create());
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return b;
  };
  c.ie = function(a, c) {
    c || (c = b.create());
    c[0] = a[0];
    c[1] = a[1];
    c[2] = a[2];
    c[3] = a[4];
    c[4] = a[5];
    c[5] = a[6];
    c[6] = a[8];
    c[7] = a[9];
    c[8] = a[10];
    return c;
  };
  c.Mg = function(a, c) {
    var d = a[0], f = a[1], e = a[2], l = a[4], t = a[5], A = a[6], x = a[8], y = a[9];
    a = a[10];
    var B = a * t - A * y, C = -a * l + A * x, G = y * l - t * x, H = d * B + f * C + e * G;
    if (!H) {
      return null;
    }
    H = 1 / H;
    c || (c = b.create());
    c[0] = B * H;
    c[1] = (-a * f + e * y) * H;
    c[2] = (A * f - e * t) * H;
    c[3] = C * H;
    c[4] = (a * d - e * x) * H;
    c[5] = (-A * d + e * l) * H;
    c[6] = G * H;
    c[7] = (-y * d + f * x) * H;
    c[8] = (t * d - f * l) * H;
    return c;
  };
  c.multiply = function(a, b, c) {
    c || (c = a);
    var d = a[0], f = a[1], e = a[2], l = a[3], n = a[4], x = a[5], y = a[6], B = a[7], C = a[8], G = a[9], H = a[10], K = a[11], J = a[12], ca = a[13], ba = a[14];
    a = a[15];
    var ha = b[0], ma = b[1], va = b[2], wa = b[3], ka = b[4], R = b[5], sa = b[6], na = b[7], oa = b[8], Ja = b[9], Ka = b[10], ia = b[11], Vd = b[12], Wd = b[13], Xd = b[14];
    b = b[15];
    c[0] = ha * d + ma * n + va * C + wa * J;
    c[1] = ha * f + ma * x + va * G + wa * ca;
    c[2] = ha * e + ma * y + va * H + wa * ba;
    c[3] = ha * l + ma * B + va * K + wa * a;
    c[4] = ka * d + R * n + sa * C + na * J;
    c[5] = ka * f + R * x + sa * G + na * ca;
    c[6] = ka * e + R * y + sa * H + na * ba;
    c[7] = ka * l + R * B + sa * K + na * a;
    c[8] = oa * d + Ja * n + Ka * C + ia * J;
    c[9] = oa * f + Ja * x + Ka * G + ia * ca;
    c[10] = oa * e + Ja * y + Ka * H + ia * ba;
    c[11] = oa * l + Ja * B + Ka * K + ia * a;
    c[12] = Vd * d + Wd * n + Xd * C + b * J;
    c[13] = Vd * f + Wd * x + Xd * G + b * ca;
    c[14] = Vd * e + Wd * y + Xd * H + b * ba;
    c[15] = Vd * l + Wd * B + Xd * K + b * a;
    return c;
  };
  c.Rd = function(a, b, c) {
    c || (c = b);
    var d = b[0], f = b[1];
    b = b[2];
    c[0] = a[0] * d + a[4] * f + a[8] * b + a[12];
    c[1] = a[1] * d + a[5] * f + a[9] * b + a[13];
    c[2] = a[2] * d + a[6] * f + a[10] * b + a[14];
    return c;
  };
  c.Sd = function(a, b) {
    var c;
    c || (c = b);
    var d = b[0], f = b[1], e = b[2];
    b = b[3];
    c[0] = a[0] * d + a[4] * f + a[8] * e + a[12] * b;
    c[1] = a[1] * d + a[5] * f + a[9] * e + a[13] * b;
    c[2] = a[2] * d + a[6] * f + a[10] * e + a[14] * b;
    c[3] = a[3] * d + a[7] * f + a[11] * e + a[15] * b;
  };
  c.translate = function(a, b, c) {
    var d = b[0], f = b[1];
    b = b[2];
    if (!c || a === c) {
      return a[12] = a[0] * d + a[4] * f + a[8] * b + a[12], a[13] = a[1] * d + a[5] * f + a[9] * b + a[13], a[14] = a[2] * d + a[6] * f + a[10] * b + a[14], a[15] = a[3] * d + a[7] * f + a[11] * b + a[15], a;
    }
    var e = a[0];
    var l = a[1];
    var n = a[2];
    var x = a[3];
    var y = a[4];
    var B = a[5];
    var C = a[6];
    var G = a[7];
    var H = a[8];
    var K = a[9];
    var J = a[10];
    var ca = a[11];
    c[0] = e;
    c[1] = l;
    c[2] = n;
    c[3] = x;
    c[4] = y;
    c[5] = B;
    c[6] = C;
    c[7] = G;
    c[8] = H;
    c[9] = K;
    c[10] = J;
    c[11] = ca;
    c[12] = e * d + y * f + H * b + a[12];
    c[13] = l * d + B * f + K * b + a[13];
    c[14] = n * d + C * f + J * b + a[14];
    c[15] = x * d + G * f + ca * b + a[15];
    return c;
  };
  c.scale = function(a, b, c) {
    var d = b[0], f = b[1];
    b = b[2];
    if (!c || a === c) {
      return a[0] *= d, a[1] *= d, a[2] *= d, a[3] *= d, a[4] *= f, a[5] *= f, a[6] *= f, a[7] *= f, a[8] *= b, a[9] *= b, a[10] *= b, a[11] *= b, a;
    }
    c[0] = a[0] * d;
    c[1] = a[1] * d;
    c[2] = a[2] * d;
    c[3] = a[3] * d;
    c[4] = a[4] * f;
    c[5] = a[5] * f;
    c[6] = a[6] * f;
    c[7] = a[7] * f;
    c[8] = a[8] * b;
    c[9] = a[9] * b;
    c[10] = a[10] * b;
    c[11] = a[11] * b;
    c[12] = a[12];
    c[13] = a[13];
    c[14] = a[14];
    c[15] = a[15];
    return c;
  };
  c.rotate = function(a, b, c, d) {
    var f = c[0], e = c[1];
    c = c[2];
    var l = Math.sqrt(f * f + e * e + c * c);
    if (!l) {
      return null;
    }
    1 !== l && (l = 1 / l, f *= l, e *= l, c *= l);
    var n = Math.sin(b);
    var p = Math.cos(b);
    var y = 1 - p;
    b = a[0];
    l = a[1];
    var B = a[2];
    var C = a[3];
    var G = a[4];
    var H = a[5];
    var K = a[6];
    var J = a[7];
    var ca = a[8];
    var ba = a[9];
    var ha = a[10];
    var ma = a[11];
    var va = f * f * y + p;
    var wa = e * f * y + c * n;
    var ka = c * f * y - e * n;
    var R = f * e * y - c * n;
    var sa = e * e * y + p;
    var na = c * e * y + f * n;
    var oa = f * c * y + e * n;
    f = e * c * y - f * n;
    e = c * c * y + p;
    d ? a !== d && (d[12] = a[12], d[13] = a[13], d[14] = a[14], d[15] = a[15]) : d = a;
    d[0] = b * va + G * wa + ca * ka;
    d[1] = l * va + H * wa + ba * ka;
    d[2] = B * va + K * wa + ha * ka;
    d[3] = C * va + J * wa + ma * ka;
    d[4] = b * R + G * sa + ca * na;
    d[5] = l * R + H * sa + ba * na;
    d[6] = B * R + K * sa + ha * na;
    d[7] = C * R + J * sa + ma * na;
    d[8] = b * oa + G * f + ca * e;
    d[9] = l * oa + H * f + ba * e;
    d[10] = B * oa + K * f + ha * e;
    d[11] = C * oa + J * f + ma * e;
    return d;
  };
  c.Eg = function(a, b, c) {
    var d = Math.sin(b);
    b = Math.cos(b);
    var f = a[4], e = a[5], l = a[6], n = a[7], x = a[8], y = a[9], B = a[10], C = a[11];
    c ? a !== c && (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
    c[4] = f * b + x * d;
    c[5] = e * b + y * d;
    c[6] = l * b + B * d;
    c[7] = n * b + C * d;
    c[8] = f * -d + x * b;
    c[9] = e * -d + y * b;
    c[10] = l * -d + B * b;
    c[11] = n * -d + C * b;
    return c;
  };
  c.Fg = function(a, b, c) {
    var d = Math.sin(b);
    b = Math.cos(b);
    var f = a[0], e = a[1], l = a[2], n = a[3], x = a[8], y = a[9], B = a[10], C = a[11];
    c ? a !== c && (c[4] = a[4], c[5] = a[5], c[6] = a[6], c[7] = a[7], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
    c[0] = f * b + x * -d;
    c[1] = e * b + y * -d;
    c[2] = l * b + B * -d;
    c[3] = n * b + C * -d;
    c[8] = f * d + x * b;
    c[9] = e * d + y * b;
    c[10] = l * d + B * b;
    c[11] = n * d + C * b;
    return c;
  };
  c.Gg = function(a, b, c) {
    var d = Math.sin(b);
    b = Math.cos(b);
    var f = a[0], e = a[1], l = a[2], n = a[3], x = a[4], y = a[5], B = a[6], C = a[7];
    c ? a !== c && (c[8] = a[8], c[9] = a[9], c[10] = a[10], c[11] = a[11], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
    c[0] = f * b + x * d;
    c[1] = e * b + y * d;
    c[2] = l * b + B * d;
    c[3] = n * b + C * d;
    c[4] = f * -d + x * b;
    c[5] = e * -d + y * b;
    c[6] = l * -d + B * b;
    c[7] = n * -d + C * b;
    return c;
  };
  c.Hb = function(a, b, d, e, u, w, t) {
    t || (t = c.create());
    var f = b - a, l = e - d, n = w - u;
    t[0] = 2 * u / f;
    t[1] = 0;
    t[2] = 0;
    t[3] = 0;
    t[4] = 0;
    t[5] = 2 * u / l;
    t[6] = 0;
    t[7] = 0;
    t[8] = (b + a) / f;
    t[9] = (e + d) / l;
    t[10] = -(w + u) / n;
    t[11] = -1;
    t[12] = 0;
    t[13] = 0;
    t[14] = -(w * u * 2) / n;
    t[15] = 0;
    return t;
  };
  c.perspective = function(a, b, d, e, u) {
    a = d * Math.tan(a * Math.PI / 360);
    b *= a;
    return c.Hb(-b, b, -a, a, d, e, u);
  };
  c.Hc = function(a, b, d, e, u, w) {
    var f;
    f || (f = c.create());
    var l = b - a, n = e - d, p = w - u;
    f[0] = 2 / l;
    f[1] = 0;
    f[2] = 0;
    f[3] = 0;
    f[4] = 0;
    f[5] = 2 / n;
    f[6] = 0;
    f[7] = 0;
    f[8] = 0;
    f[9] = 0;
    f[10] = -2 / p;
    f[11] = 0;
    f[12] = -(a + b) / l;
    f[13] = -(e + d) / n;
    f[14] = -(w + u) / p;
    f[15] = 1;
    return f;
  };
  c.tg = function(a, b, d, e) {
    e || (e = c.create());
    var f = a[0], l = a[1];
    a = a[2];
    var n = d[0];
    var p = d[1];
    var x = d[2];
    var y = b[0];
    d = b[1];
    var B = b[2];
    if (f === y && l === d && a === B) {
      return c.Pa(e);
    }
    b = f - y;
    d = l - d;
    y = a - B;
    var C = 1 / Math.sqrt(b * b + d * d + y * y);
    b *= C;
    d *= C;
    y *= C;
    B = p * y - x * d;
    x = x * b - n * y;
    n = n * d - p * b;
    (C = Math.sqrt(B * B + x * x + n * n)) ? (C = 1 / C, B *= C, x *= C, n *= C) : n = x = B = 0;
    p = d * n - y * x;
    var G = y * B - b * n;
    var H = b * x - d * B;
    (C = Math.sqrt(p * p + G * G + H * H)) ? (C = 1 / C, p *= C, G *= C, H *= C) : H = G = p = 0;
    e[0] = B;
    e[1] = p;
    e[2] = b;
    e[3] = 0;
    e[4] = x;
    e[5] = G;
    e[6] = d;
    e[7] = 0;
    e[8] = n;
    e[9] = H;
    e[10] = y;
    e[11] = 0;
    e[12] = -(B * f + x * l + n * a);
    e[13] = -(p * f + G * l + H * a);
    e[14] = -(b * f + d * l + y * a);
    e[15] = 1;
    return e;
  };
  c.mg = function(a, b, d) {
    d || (d = c.create());
    var f = a[0], e = a[1], l = a[2], n = a[3], A = f + f, x = e + e, y = l + l;
    a = f * A;
    var B = f * x;
    f *= y;
    var C = e * x;
    e *= y;
    l *= y;
    A *= n;
    x *= n;
    n *= y;
    d[0] = 1 - (C + l);
    d[1] = B + n;
    d[2] = f - x;
    d[3] = 0;
    d[4] = B - n;
    d[5] = 1 - (a + l);
    d[6] = e + A;
    d[7] = 0;
    d[8] = f + x;
    d[9] = e - A;
    d[10] = 1 - (a + C);
    d[11] = 0;
    d[12] = b[0];
    d[13] = b[1];
    d[14] = b[2];
    d[15] = 1;
    return d;
  };
  c.Wb = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + "]";
  };
  d.create = function(a) {
    var b = new e(4);
    a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3]);
    return b;
  };
  d.set = function(a, b) {
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    return b;
  };
  d.gg = function(a, b) {
    var c = a[0], d = a[1], f = a[2];
    if (!b || a === b) {
      return a[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - f * f)), a;
    }
    b[0] = c;
    b[1] = d;
    b[2] = f;
    b[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - f * f));
    return b;
  };
  d.ld = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  };
  d.inverse = function(a, b) {
    var c = a[0], d = a[1], f = a[2], e = a[3];
    c = (c = c * c + d * d + f * f + e * e) ? 1 / c : 0;
    if (!b || a === b) {
      return a[0] *= -c, a[1] *= -c, a[2] *= -c, a[3] *= c, a;
    }
    b[0] = -a[0] * c;
    b[1] = -a[1] * c;
    b[2] = -a[2] * c;
    b[3] = a[3] * c;
    return b;
  };
  d.hg = function(a, b) {
    if (!b || a === b) {
      return a[0] *= -1, a[1] *= -1, a[2] *= -1, a;
    }
    b[0] = -a[0];
    b[1] = -a[1];
    b[2] = -a[2];
    b[3] = a[3];
    return b;
  };
  d.length = function(a) {
    var b = a[0], c = a[1], d = a[2];
    a = a[3];
    return Math.sqrt(b * b + c * c + d * d + a * a);
  };
  d.normalize = function(a, b) {
    b || (b = a);
    var c = a[0], d = a[1], f = a[2];
    a = a[3];
    var e = Math.sqrt(c * c + d * d + f * f + a * a);
    if (0 === e) {
      return b[0] = 0, b[1] = 0, b[2] = 0, b[3] = 0, b;
    }
    e = 1 / e;
    b[0] = c * e;
    b[1] = d * e;
    b[2] = f * e;
    b[3] = a * e;
    return b;
  };
  d.add = function(a, b, c) {
    if (!c || a === c) {
      return a[0] += b[0], a[1] += b[1], a[2] += b[2], a[3] += b[3], a;
    }
    c[0] = a[0] + b[0];
    c[1] = a[1] + b[1];
    c[2] = a[2] + b[2];
    c[3] = a[3] + b[3];
    return c;
  };
  d.multiply = function(a, b, c) {
    c || (c = a);
    var d = a[0], e = a[1], f = a[2];
    a = a[3];
    var l = b[0], n = b[1], x = b[2];
    b = b[3];
    c[0] = d * b + a * l + e * x - f * n;
    c[1] = e * b + a * n + f * l - d * x;
    c[2] = f * b + a * x + d * n - e * l;
    c[3] = a * b - d * l - e * n - f * x;
    return c;
  };
  d.Rd = function(a, b, c) {
    c || (c = b);
    var d = b[0], e = b[1], f = b[2];
    b = a[0];
    var l = a[1], n = a[2];
    a = a[3];
    var x = a * d + l * f - n * e, y = a * e + n * d - b * f, B = a * f + b * e - l * d;
    d = -b * d - l * e - n * f;
    c[0] = x * a + d * -b + y * -n - B * -l;
    c[1] = y * a + d * -l + B * -b - x * -n;
    c[2] = B * a + d * -n + x * -l - y * -b;
    return c;
  };
  d.scale = function(a, b, c) {
    if (!c || a === c) {
      return a[0] *= b, a[1] *= b, a[2] *= b, a[3] *= b, a;
    }
    c[0] = a[0] * b;
    c[1] = a[1] * b;
    c[2] = a[2] * b;
    c[3] = a[3] * b;
    return c;
  };
  d.ie = function(a, c) {
    c || (c = b.create());
    var d = a[0], e = a[1], f = a[2], l = a[3], t = d + d, A = e + e, x = f + f;
    a = d * t;
    var y = d * A;
    d *= x;
    var B = e * A;
    e *= x;
    f *= x;
    t *= l;
    A *= l;
    l *= x;
    c[0] = 1 - (B + f);
    c[1] = y + l;
    c[2] = d - A;
    c[3] = y - l;
    c[4] = 1 - (a + f);
    c[5] = e + t;
    c[6] = d + A;
    c[7] = e - t;
    c[8] = 1 - (a + B);
    return c;
  };
  d.je = function(a, b) {
    b || (b = c.create());
    var d = a[0], e = a[1], f = a[2], l = a[3], t = d + d, A = e + e, x = f + f;
    a = d * t;
    var y = d * A;
    d *= x;
    var B = e * A;
    e *= x;
    f *= x;
    t *= l;
    A *= l;
    l *= x;
    b[0] = 1 - (B + f);
    b[1] = y + l;
    b[2] = d - A;
    b[3] = 0;
    b[4] = y - l;
    b[5] = 1 - (a + f);
    b[6] = e + t;
    b[7] = 0;
    b[8] = d + A;
    b[9] = e - t;
    b[10] = 1 - (a + B);
    b[11] = 0;
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return b;
  };
  d.Ig = function(a, b, c, d) {
    d || (d = a);
    var e = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    if (1 <= Math.abs(e)) {
      return d !== a && (d[0] = a[0], d[1] = a[1], d[2] = a[2], d[3] = a[3]), d;
    }
    var f = Math.acos(e);
    var l = Math.sqrt(1 - e * e);
    if (.001 > Math.abs(l)) {
      return d[0] = .5 * a[0] + .5 * b[0], d[1] = .5 * a[1] + .5 * b[1], d[2] = .5 * a[2] + .5 * b[2], d[3] = .5 * a[3] + .5 * b[3], d;
    }
    e = Math.sin((1 - c) * f) / l;
    c = Math.sin(c * f) / l;
    d[0] = a[0] * e + b[0] * c;
    d[1] = a[1] * e + b[1] * c;
    d[2] = a[2] * e + b[2] * c;
    d[3] = a[3] * e + b[3] * c;
    return d;
  };
  d.Wb = function(a) {
    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]";
  };
  return {Pg:a, ug:b, h:c, Cg:d};
}();
function _emscripten_glBindAttribLocation(a, b, c) {
  c = v(c);
  GLctx.bindAttribLocation(N[a], b, c);
}
function _emscripten_glBindBuffer(a, b) {
  var c = b ? ng[b] : null;
  a == GLctx.ARRAY_BUFFER ? xh = sg = b : a == GLctx.ELEMENT_ARRAY_BUFFER && (tg = b);
  GLctx.bindBuffer(a, c);
}
function Gi(a) {
  var b = Rh(a);
  null === b || Sh[b] || (Sh[b] = !0, oi++, Qh = null, Lh && (Lh.Ja[a] = 1), qi = !0);
}
function Hi(a, b, c, d) {
  a = Math.max(Math.min(a, 1), 0);
  b = Math.max(Math.min(b, 1), 0);
  c = Math.max(Math.min(c, 1), 0);
  d = Math.max(Math.min(d, 1), 0);
  if (0 <= gi) {
    var e = V << 2;
    ei[e + 0] = 255 * a;
    ei[e + 1] = 255 * b;
    ei[e + 2] = 255 * c;
    ei[e + 3] = 255 * d;
    V++;
    ti(Uh, 4, GLctx.UNSIGNED_BYTE);
  } else {
    ri[0] = a, ri[1] = b, ri[2] = c, ri[3] = d;
  }
}
function Ii(a, b, c) {
  Hi(a, b, c, 1);
}
function Ji(a, b, c, d) {
  Hi((a & 255) / 255, (b & 255) / 255, (c & 255) / 255, (d & 255) / 255);
}
function Ki(a, b, c) {
  Ji(a, b, c, 255);
}
function Li(a, b, c, d) {
  Hi((a >>> 0) / 4294967295, (b >>> 0) / 4294967295, (c >>> 0) / 4294967295, (d >>> 0) / 4294967295);
}
function Mi(a, b, c) {
  Li(a, b, c, 4294967295);
}
function Ni(a, b, c, d) {
  Hi((a & 65535) / 65535, (b & 65535) / 65535, (c & 65535) / 65535, (d & 65535) / 65535);
}
function Oi(a, b, c) {
  Ni(a, b, c, 65535);
}
function _emscripten_glCompileShader(a) {
  GLctx.compileShader(O[a]);
}
function _emscripten_glCreateShader(a) {
  var b = zg(O);
  O[b] = GLctx.createShader(a);
  return b;
}
function _emscripten_glDeleteProgram(a) {
  if (a) {
    var b = N[a];
    b ? (GLctx.deleteProgram(b), b.name = 0, N[a] = null, vg[a] = null) : P(1281);
  }
}
function Pi(a) {
  if (a) {
    var b = O[a];
    b ? (GLctx.deleteShader(b), O[a] = null) : P(1281);
  }
}
function _emscripten_glDetachShader(a, b) {
  GLctx.detachShader(N[a], O[b]);
}
function _emscripten_glDisable(a) {
  GLctx.disable(a);
}
function _emscripten_glDisableVertexAttribArray(a) {
  GLctx.disableVertexAttribArray(a);
}
function _emscripten_glDrawArrays(a, b, c) {
  GLctx.drawArrays(a, b, c);
}
function _emscripten_glDrawElements(a, b, c, d) {
  GLctx.drawElements(a, b, c, d);
}
function _emscripten_glEnable(a) {
  GLctx.enable(a);
}
function _emscripten_glEnableVertexAttribArray(a) {
  GLctx.enableVertexAttribArray(a);
}
function Qi(a, b) {
  switch(a) {
    case 2915:
      Eh = b;
      break;
    case 2916:
      Fh = b;
      break;
    case 2914:
      Gh = b;
      break;
    case 2917:
      switch(b) {
        case 2049:
        case 9729:
          Ih != b && (Qh = null, Ih = b);
          break;
        default:
          2048 != Ih && (Qh = null, Ih = 2048);
      }
  }
}
function _emscripten_glGetBooleanv(a, b) {
  lh(a, b, "Boolean");
}
function _emscripten_glGetFloatv(a, b) {
  lh(a, b, "Float");
}
function Ri(a, b, c, d) {
  a = GLctx.getProgramInfoLog(N[a]);
  null === a && (a = "(unknown error)");
  0 < b && d ? (b = Sa(a, r, d, b), c && (m[c >> 2] = b)) : c && (m[c >> 2] = 0);
}
function Si(a, b, c, d) {
  a = GLctx.getShaderInfoLog(O[a]);
  null === a && (a = "(unknown error)");
  0 < b && d ? (b = Sa(a, r, d, b), c && (m[c >> 2] = b)) : c && (m[c >> 2] = 0);
}
function _emscripten_glGetIntegerv(a, b) {
  lh(a, b, "Integer");
}
function Ti(a, b, c) {
  if (c) {
    if (a >= lg) {
      P(1281);
    } else {
      var d = vg[a];
      if (d) {
        if (35716 == b) {
          a = GLctx.getProgramInfoLog(N[a]), null === a && (a = "(unknown error)"), m[c >> 2] = a.length + 1;
        } else {
          if (35719 == b) {
            m[c >> 2] = d.Mb;
          } else {
            if (35722 == b) {
              if (-1 == d.Qa) {
                a = N[a];
                var e = GLctx.getProgramParameter(a, GLctx.ACTIVE_ATTRIBUTES);
                for (b = d.Qa = 0; b < e; ++b) {
                  d.Qa = Math.max(d.Qa, GLctx.getActiveAttrib(a, b).name.length + 1);
                }
              }
              m[c >> 2] = d.Qa;
            } else {
              if (35381 == b) {
                if (-1 == d.Ra) {
                  for (a = N[a], e = GLctx.getProgramParameter(a, GLctx.oe), b = d.Ra = 0; b < e; ++b) {
                    var f = GLctx.og(a, b);
                    d.Ra = Math.max(d.Ra, f.length + 1);
                  }
                }
                m[c >> 2] = d.Ra;
              } else {
                m[c >> 2] = GLctx.getProgramParameter(N[a], b);
              }
            }
          }
        }
      } else {
        P(1282);
      }
    }
  } else {
    P(1281);
  }
}
function Ui(a, b, c) {
  c ? 35716 == b ? (a = GLctx.getShaderInfoLog(O[a]), null === a && (a = "(unknown error)"), m[c >> 2] = a.length + 1) : 35720 == b ? (a = GLctx.getShaderSource(O[a]), m[c >> 2] = null === a || 0 == a.length ? 0 : a.length + 1) : m[c >> 2] = GLctx.getShaderParameter(O[a], b) : P(1281);
}
function _emscripten_glGetString(a) {
  if (wg[a]) {
    return wg[a];
  }
  switch(a) {
    case 7939:
      var b = GLctx.getSupportedExtensions();
      for (var c = [], d = 0; d < b.length; ++d) {
        c.push(b[d]), c.push("GL_" + b[d]);
      }
      b = Va(Xc(c.join(" ")), 0);
      break;
    case 7936:
    case 7937:
    case 37445:
    case 37446:
      (b = GLctx.getParameter(a)) || P(1280);
      b = Va(Xc(b), 0);
      break;
    case 7938:
      b = Va(Xc("OpenGL ES 2.0 (" + GLctx.getParameter(GLctx.VERSION) + ")"), 0);
      break;
    case 35724:
      b = GLctx.getParameter(GLctx.SHADING_LANGUAGE_VERSION);
      c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
      null !== c && (3 == c[1].length && (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
      b = Va(Xc(b), 0);
      break;
    default:
      return P(1280), 0;
  }
  return wg[a] = b;
}
function Vi(a, b, c, d) {
  if (c) {
    if (a = GLctx.getUniform(N[a], rg[b]), "number" == typeof a || "boolean" == typeof a) {
      switch(d) {
        case "Integer":
          m[c >> 2] = a;
          break;
        case "Float":
          z[c >> 2] = a;
          break;
        default:
          throw "internal emscriptenWebGLGetUniform() error, bad type: " + d;
      }
    } else {
      for (b = 0; b < a.length; b++) {
        switch(d) {
          case "Integer":
            m[c + 4 * b >> 2] = a[b];
            break;
          case "Float":
            z[c + 4 * b >> 2] = a[b];
            break;
          default:
            throw "internal emscriptenWebGLGetUniform() error, bad type: " + d;
        }
      }
    }
  } else {
    P(1281);
  }
}
function Wi(a, b, c, d) {
  if (c) {
    if (a = GLctx.getVertexAttrib(a, b), 34975 == b) {
      m[c >> 2] = a.name;
    } else {
      if ("number" == typeof a || "boolean" == typeof a) {
        switch(d) {
          case "Integer":
            m[c >> 2] = a;
            break;
          case "Float":
            z[c >> 2] = a;
            break;
          case "FloatToInteger":
            m[c >> 2] = Math.nd(a);
            break;
          default:
            throw "internal emscriptenWebGLGetVertexAttrib() error, bad type: " + d;
        }
      } else {
        for (b = 0; b < a.length; b++) {
          switch(d) {
            case "Integer":
              m[c + 4 * b >> 2] = a[b];
              break;
            case "Float":
              z[c + 4 * b >> 2] = a[b];
              break;
            case "FloatToInteger":
              m[c + 4 * b >> 2] = Math.nd(a[b]);
              break;
            default:
              throw "internal emscriptenWebGLGetVertexAttrib() error, bad type: " + d;
          }
        }
      }
    }
  } else {
    P(1281);
  }
}
function _emscripten_glHint(a, b) {
  GLctx.hint(a, b);
}
function _emscripten_glIsEnabled(a) {
  return GLctx.isEnabled(a);
}
function _emscripten_glLinkProgram(a) {
  GLctx.linkProgram(N[a]);
  vg[a] = null;
  Gg(a);
}
function Xi(a, b, c, d, e) {
  switch(b) {
    case 6406:
    case 6409:
    case 6402:
      b = 1;
      break;
    case 6410:
      b = 2;
      break;
    case 6407:
    case 35904:
      b = 3;
      break;
    case 6408:
    case 35906:
      b = 4;
      break;
    default:
      return P(1280), null;
  }
  switch(a) {
    case 5121:
      var f = 1 * b;
      break;
    case 5123:
    case 36193:
      f = 2 * b;
      break;
    case 5125:
    case 5126:
      f = 4 * b;
      break;
    case 34042:
      f = 4;
      break;
    case 33635:
    case 32819:
    case 32820:
      f = 2;
      break;
    default:
      return P(1280), null;
  }
  b = yg;
  c *= f;
  b *= Math.floor((c + b - 1) / b);
  d = 0 >= d ? 0 : (d - 1) * b + c;
  switch(a) {
    case 5121:
      return r.subarray(e, e + d);
    case 5126:
      return z.subarray(e >> 2, e + d >> 2);
    case 5125:
    case 34042:
      return fb.subarray(e >> 2, e + d >> 2);
    case 5123:
    case 33635:
    case 32819:
    case 32820:
    case 36193:
      return eb.subarray(e >> 1, e + d >> 1);
    default:
      return P(1280), null;
  }
}
function _emscripten_glShaderSource(a, b, c, d) {
  b = Dg(a, b, c, d);
  GLctx.shaderSource(O[a], b);
}
function Yi(a, b) {
  U[V++] = a;
  U[V++] = b;
  ti(Vh, 2, GLctx.FLOAT);
}
function _emscripten_glTexEnvf() {
  Fa("glTexEnvf: TODO");
}
function _emscripten_glTexEnvfv() {
  Fa("glTexEnvfv: TODO");
}
function _emscripten_glTexEnvi() {
  Fa("glTexEnvi: TODO");
}
function _emscripten_glUseProgram(a) {
  GLctx.useProgram(a ? N[a] : null);
}
function Zi(a, b, c) {
  U[V++] = a;
  U[V++] = b;
  U[V++] = c || 0;
  ti(Th, 3, GLctx.FLOAT);
}
function _emscripten_glVertexAttribPointer(a, b, c, d, e, f) {
  GLctx.vertexAttribPointer(a, b, c, !!d, e, f);
}
function $i(a) {
  if (0 === a) {
    return 0;
  }
  a = v(a);
  if (!Kg.hasOwnProperty(a)) {
    return 0;
  }
  $i.Ub && Ef($i.Ub);
  a = Kg[a];
  var b = bb(a) + 1, c = Wa(b);
  c && Sa(a, q, c, b);
  $i.Ub = c;
  return $i.Ub;
}
function _glDrawArrays(a, b, c) {
  GLctx.drawArrays(a, b, c);
}
function _glDrawElements(a, b, c, d) {
  GLctx.drawElements(a, b, c, d);
}
function _glTexEnvfv() {
  Fa("glTexEnvfv: TODO");
}
function _glTexEnvi() {
  Fa("glTexEnvi: TODO");
}
function aj(a) {
  return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
}
function bj(a, b) {
  for (var c = 0, d = 0; d <= b; c += a[d++]) {
  }
  return c;
}
var cj = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], dj = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ej(a, b) {
  for (a = new Date(a.getTime()); 0 < b;) {
    var c = a.getMonth(), d = (aj(a.getFullYear()) ? cj : dj)[c];
    if (b > d - a.getDate()) {
      b -= d - a.getDate() + 1, a.setDate(1), 11 > c ? a.setMonth(c + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
    } else {
      a.setDate(a.getDate() + b);
      break;
    }
  }
  return a;
}
Qd();
jd = Array(4096);
Cd(F, "/");
Ed("/tmp");
Ed("/home");
Ed("/home/web_user");
(function() {
  Ed("/dev");
  Vc(259, {read:function() {
    return 0;
  }, write:function(a, b, e, f) {
    return f;
  }});
  Fd("/dev/null", 259);
  Uc(1280, Yc);
  Uc(1536, Zc);
  Fd("/dev/tty", 1280);
  Fd("/dev/tty1", 1536);
  if ("undefined" !== typeof crypto) {
    var a = new Uint8Array(1);
    var b = function() {
      crypto.getRandomValues(a);
      return a[0];
    };
  } else {
    b = ja ? function() {
      return require("crypto").randomBytes(1)[0];
    } : function() {
      h("random_device");
    };
  }
  $d("/dev", "random", b);
  $d("/dev", "urandom", b);
  Ed("/dev/shm");
  Ed("/dev/shm/tmp");
})();
Ed("/proc");
Ed("/proc/self");
Ed("/proc/self/fd");
Cd({D:function() {
  var a = ad("/proc/self", "fd", 16895, 73);
  a.f = {lookup:function(a, c) {
    var b = hd[+c];
    if (!b) {
      throw new E(D.V);
    }
    a = {parent:null, D:{Ec:"fake"}, f:{readlink:function() {
      return b.path;
    }}};
    return a.parent = a;
  }};
  return a;
}}, "/proc/self/fd");
qb.unshift(function() {
  if (!g.noFSInit && !Rd) {
    assert(!Rd, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
    Rd = !0;
    Qd();
    g.stdin = g.stdin;
    g.stdout = g.stdout;
    g.stderr = g.stderr;
    g.stdin ? $d("/dev", "stdin", g.stdin) : Gd("/dev/tty", "/dev/stdin");
    g.stdout ? $d("/dev", "stdout", null, g.stdout) : Gd("/dev/tty", "/dev/stdout");
    g.stderr ? $d("/dev", "stderr", null, g.stderr) : Gd("/dev/tty1", "/dev/stderr");
    var a = Jd("/dev/stdin", "r");
    assert(0 === a.j, "invalid handle for stdin (" + a.j + ")");
    a = Jd("/dev/stdout", "w");
    assert(1 === a.j, "invalid handle for stdout (" + a.j + ")");
    a = Jd("/dev/stderr", "w");
    assert(2 === a.j, "invalid handle for stderr (" + a.j + ")");
  }
});
rb.push(function() {
  kd = !1;
});
sb.push(function() {
  Rd = !1;
  var a = g._fflush;
  a && a(0);
  for (a = 0; a < hd.length; a++) {
    var b = hd[a];
    b && Ld(b);
  }
});
g.FS_createFolder = Td;
g.FS_createPath = Ud;
g.FS_createDataFile = Zd;
g.FS_createPreloadedFile = de;
g.FS_createLazyFile = ce;
g.FS_createLink = ae;
g.FS_createDevice = $d;
g.FS_unlink = Hd;
qb.unshift(function() {
});
sb.push(function() {
});
if (ja) {
  var fs = require("fs"), ed = require("path");
  I.de();
}
g.requestFullScreen = function(a, b, c) {
  k("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");
  g.requestFullScreen = g.requestFullscreen;
  We(a, b, c);
};
g.requestFullscreen = function(a, b, c) {
  Re(a, b, c);
};
g.requestAnimationFrame = function(a) {
  pe(a);
};
g.setCanvasSize = function(a, b, c) {
  Te(g.canvas, a, b);
  c || Ue();
};
g.pauseMainLoop = function() {
  ke = null;
  se++;
};
g.resumeMainLoop = function() {
  se++;
  var a = he, b = ie, c = je;
  je = null;
  qe(c, 0, !1, re, !0);
  ge(a, b);
  ke();
};
g.getUserMedia = function() {
  window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.getUserMedia(void 0);
};
g.createContext = function(a, b, c, d) {
  return Ke(a, b, c, d);
};
me = ja ? function() {
  var a = process.hrtime();
  return 1e3 * a[0] + a[1] / 1e6;
} : "undefined" !== typeof dateNow ? dateNow : "object" === typeof self && self.performance && "function" === typeof self.performance.now ? function() {
  return self.performance.now();
} : "object" === typeof performance && "function" === typeof performance.now ? function() {
  return performance.now();
} : Date.now;
var GLctx;
ye = new Uint8Array(2097153);
var fj = 0, gj = 1;
ye[0] = 0;
for (var hj = 1; 2097152 >= hj; ++hj) {
  hj > gj && (gj <<= 1, ++fj), ye[hj] = fj;
}
Ag = new Float32Array(256);
for (var ij = 0; 256 > ij; ij++) {
  Bg[ij] = Ag.subarray(0, ij + 1);
}
for (ij = 0; 32 > ij; ij++) {
  xg.push(Array(ij));
}
qb.push(function() {
  SOCKFS.root = Cd(SOCKFS, null);
});
_glDrawArrays = _emscripten_glDrawArrays = function(a, b, c) {
  0 == oi && 6 >= a ? GLctx.drawArrays(a, b, c) : (Ai(c, !1), gi = a, sg || (U = z.subarray(Ci >> 2, Ci + (b + c) * yi >> 2), xi = b, zi = b + c), Di(null, b), gi = -1);
};
_glDrawElements = _emscripten_glDrawElements = function(a, b, c, d, e, f) {
  0 == oi && 6 >= a && tg ? GLctx.drawElements(a, b, c, d) : (Ai(b, !1), gi = a, sg || (xi = f ? e : Ca, zi = f ? f + 1 : 0, U = z.subarray(Ci >> 2, f ? Ci + (f + 1) * yi >> 2 : void 0)), Di(b, 0, d), gi = -1);
};
ai = bi();
bi = null;
ci = di();
di = null;
(function() {
  Nh || Oh();
  var a = Dh;
  Dh = _emscripten_glActiveTexture = function(b) {
    ci.zd(b);
    a(b);
  };
  var b = ih;
  ih = _emscripten_glEnable = function(a) {
    ci.Bd(a);
    b(a);
  };
  var c = jh;
  jh = _emscripten_glDisable = function(a) {
    ci.Ad(a);
    c(a);
  };
  _glTexEnvf = _emscripten_glTexEnvf = function(a, b, c) {
    ci.Ed(a, b, c);
  };
  _glTexEnvi = _emscripten_glTexEnvi = function(a, b, c) {
    ci.Gd(a, b, c);
  };
  _glTexEnvfv = _emscripten_glTexEnvfv = function(a, b, c) {
    ci.Fd(a, b, c);
  };
  _glGetTexEnviv = function(a, b, c) {
    ci.Dd(a, b, c);
  };
  _glGetTexEnvfv = function(a, b, c) {
    ci.Cd(a, b, c);
  };
  var d = nh;
  nh = _emscripten_glGetIntegerv = function(a, b) {
    switch(a) {
      case 35725:
        if (GLctx.getParameter(GLctx.CURRENT_PROGRAM) == Yh) {
          m[b >> 2] = 0;
          return;
        }
    }
    d(a, b);
  };
})();
De.push(function() {
  k("WARNING: using emscripten GL immediate mode emulation. This is very limited in what it supports");
  if (g.me) {
    Xh = g.GL_MAX_TEXTURE_IMAGE_UNITS || GLctx.getParameter(GLctx.MAX_TEXTURE_IMAGE_UNITS);
    ci.Kb(GLctx, Xh);
    ni = 3 + Xh;
    S = [];
    $h = [];
    for (var a = 0; a < ni; a++) {
      S.push({}), $h.push(!1);
    }
    T = [];
    li = [];
    Y = [];
    for (a = 0; a < 2 + Xh; a++) {
      li.push([]), Y.push(0), T.push(Z.h.create()), Z.h.Pa(T[a]);
    }
    hi = ai.create();
    fi = new Float32Array(524288);
    ei = new Uint8Array(fi.buffer);
    a = xe;
    var b = ye[2097152];
    a.fa = [];
    a.sb = [];
    a.fa.length = a.sb.length = b + 1;
    a.ya = [];
    a.Va = [];
    a.ya.length = a.Va.length = b + 1;
    a.wa = [];
    a.wa.length = b + 1;
    for (var c = 0; c <= b; ++c) {
      a.wa[c] = null;
      a.fa[c] = a.sb[c] = 0;
      a.ya[c] = [];
      a.Va[c] = [];
      var d = a.ya[c], e = a.Va[c];
      d.length = e.length = 64;
      for (var f = 0; 64 > f; ++f) {
        d[f] = e[f] = null;
      }
    }
    a.Kc = GLctx.createBuffer();
    a.GLctx.bindBuffer(a.GLctx.ELEMENT_ARRAY_BUFFER, a.Kc);
    b = new Uint16Array(1048576);
    for (d = c = 0;;) {
      b[c++] = d;
      if (1048576 <= c) {
        break;
      }
      b[c++] = d + 1;
      if (1048576 <= c) {
        break;
      }
      b[c++] = d + 2;
      if (1048576 <= c) {
        break;
      }
      b[c++] = d;
      if (1048576 <= c) {
        break;
      }
      b[c++] = d + 2;
      if (1048576 <= c) {
        break;
      }
      b[c++] = d + 3;
      if (1048576 <= c) {
        break;
      }
      d += 4;
    }
    a.GLctx.bufferData(a.GLctx.ELEMENT_ARRAY_BUFFER, b, a.GLctx.STATIC_DRAW);
    a.GLctx.bindBuffer(a.GLctx.ELEMENT_ARRAY_BUFFER, null);
    ri = new Float32Array([1, 1, 1, 1]);
  }
});
Oh();
Ba = ya(4);
jb = kb = Ea(za);
lb = jb + nb;
mb = Ea(lb);
m[Ba >> 2] = mb;
Ya = !0;
function Xc(a, b) {
  var c = Array(bb(a) + 1);
  a = Sa(a, c, 0, c.length);
  b && (c.length = a);
  return c;
}
g.wasmTableSize = 3225;
g.wasmMaxTableSize = 3225;
g.$c = {};
g.ad = {abort:h, enlargeMemory:function() {
  Da();
}, getTotalMemory:function() {
  return Ca;
}, abortOnCannotGrowMemory:Da, _IMG_Load:function(a) {
  a = bg(a);
  return ag(a, 1);
}, _IMG_Load_RW:ag, _Mix_AllocateChannels:function(a) {
  Nf(a);
  return a;
}, _Mix_ChannelFinished:function(a) {
  Ma = a;
}, _Mix_CloseAudio:function() {
  return cg.apply(null, arguments);
}, _Mix_FadeInChannelTimed:function() {
  throw "Mix_FadeInChannelTimed";
}, _Mix_FadeOutChannel:function() {
  throw "Mix_FadeOutChannel";
}, _Mix_FadingChannel:function() {
  return 0;
}, _Mix_FreeChunk:dg, _Mix_FreeMusic:function() {
  return dg.apply(null, arguments);
}, _Mix_HaltChannel:function(a) {
  function b(a) {
    var b = Pf[a];
    b.audio && (b.audio.pause(), b.audio = null);
    Ma && La()(a);
  }
  if (-1 != a) {
    b(a);
  } else {
    for (a = 0; a < Pf.length; ++a) {
      b(a);
    }
  }
  return 0;
}, _Mix_HaltMusic:eg, _Mix_Linked_Version:function() {
  throw "Mix_Linked_Version: TODO";
}, _Mix_LoadMUS:function(a) {
  a = bg(a);
  var b = gg(a);
  $f(a);
  return b;
}, _Mix_LoadMUS_RW:gg, _Mix_LoadWAV:function(a) {
  a = bg(a);
  var b = fg(a);
  $f(a);
  return b;
}, _Mix_LoadWAV_RW:fg, _Mix_OpenAudio:function() {
  Sf || ("undefined" !== typeof AudioContext ? Sf = new AudioContext : "undefined" !== typeof webkitAudioContext && (Sf = new webkitAudioContext));
  Nf(32);
  return 0;
}, _Mix_PausedMusic:function() {
  return of.audio && of.audio.paused ? 1 : 0;
}, _Mix_PlayChannelTimed:function() {
  return hg.apply(null, arguments);
}, _Mix_PlayMusic:function(a, b) {
  of.audio && (of.audio.paused || k("Music is already playing. " + of.source), of.audio.pause());
  a = mf[a];
  if (a.Za) {
    var c = {};
    c.Tb = a;
    c.paused = !1;
    c.Ha = 0;
    c.play = function() {
      Rf(this);
    };
    c.pause = function() {
      Tf(this);
    };
  } else {
    a.audio && (c = a.audio);
  }
  c.onended = function() {
    of.audio == this && eg();
  };
  c.loop = 0 != b;
  c.volume = of.volume;
  of.audio = c;
  c.play();
  return 0;
}, _Mix_PlayingMusic:function() {
  return of.audio && !of.audio.paused ? 1 : 0;
}, _Mix_QuerySpec:function() {
  throw "Mix_QuerySpec: TODO";
}, _Mix_ResumeMusic:function() {
  var a = of.audio;
  a && a.play();
}, _Mix_SetPanning:function(a, b, c) {
  (a = Pf[a]) && a.audio && a.audio.Aa && a.audio.Aa.setPosition(c / 255 - b / 255, 0, .1);
  return 1;
}, _Mix_SetPostMix:function() {
  Fa("Mix_SetPostMix: TODO");
}, _Mix_Volume:ig, _Mix_VolumeMusic:function(a) {
  return Qf(of, a);
}, _SDL_AddTimer:function(a, b, c) {
  return window.setTimeout(function() {
    g.dynCall_iii(b, a, c);
  }, a);
}, _SDL_AllocRW:function() {
  throw "SDL_AllocRW: TODO";
}, _SDL_CondBroadcast:function() {
  throw "SDL_CondBroadcast: TODO";
}, _SDL_CondSignal:function() {
}, _SDL_CondWait:function() {
}, _SDL_CondWaitTimeout:function() {
  throw "SDL_CondWaitTimeout: TODO";
}, _SDL_CreateCond:function() {
  return 0;
}, _SDL_CreateMutex:function() {
  return 0;
}, _SDL_CreateRGBSurface:function(a, b, c, d, e, f, l, n) {
  return Cf(b, c, a, !1, "CreateRGBSurface", e, f, l, n);
}, _SDL_CreateRGBSurfaceFrom:function(a, b, c, d, e, f, l, n, p) {
  e = Cf(b, c, 0, !1, "CreateRGBSurfaceFrom", f, l, n, p);
  if (32 !== d) {
    return console.log("TODO: Partially unimplemented SDL_CreateRGBSurfaceFrom called!"), e;
  }
  d = kf[e];
  f = d.A.createImageData(b, c);
  l = 4 * b;
  for (n = 0; n < c; ++n) {
    p = n * l;
    for (var u = 0; u < 4 * b; ++u) {
      f.data[p + u] = r[a + (p + u) >> 0];
    }
  }
  d.A.putImageData(f, 0, 0);
  return e;
}, _SDL_CreateThread:function() {
  throw "SDL threads cannot be supported in the web platform because they assume shared state. See emscripten_create_worker etc. for a message-passing concurrency model that does let you run code in another thread.";
}, _SDL_Delay:function(a) {
  fa || h("SDL_Delay called on the main thread! Potential infinite loop, quitting.");
  for (var b = Date.now(); Date.now() - b < a;) {
  }
}, _SDL_DestroyCond:function() {
}, _SDL_DestroyMutex:function() {
}, _SDL_EnableKeyRepeat:function() {
}, _SDL_EnableUNICODE:function(a) {
  var b = If || 0;
  If = a;
  return b;
}, _SDL_FreeRW:$f, _SDL_FreeSurface:function(a) {
  a && Df(a);
}, _SDL_GL_GetProcAddress:function(a) {
  return jj(a);
}, _SDL_GL_SetAttribute:function(a, b) {
  a in qf || h("Unknown SDL GL attribute (" + a + "). Please check if your SDL version is supported.");
  qf[a] = b;
}, _SDL_GL_SwapBuffers:function() {
  Browser.kd && Browser.kd();
}, _SDL_GetError:function() {
  Wf || (Wf = Va(Xc("unknown SDL-emscripten error"), 0));
  return Wf;
}, _SDL_GetModState:function() {
  return xf;
}, _SDL_GetThreadID:function() {
  throw "SDL_GetThreadID";
}, _SDL_GetTicks:hf, _SDL_GetVideoInfo:function() {
  var a = Wa(20);
  m[a + 0 >> 2] = 0;
  m[a + 4 >> 2] = 0;
  m[a + 8 >> 2] = 0;
  m[a + 12 >> 2] = g.canvas.width;
  m[a + 16 >> 2] = g.canvas.height;
  return a;
}, _SDL_Init:jg, _SDL_ListModes:function() {
  return -1;
}, _SDL_LockAudio:function() {
}, _SDL_PeepEvents:function(a, b, c, d, e) {
  switch(c) {
    case 2:
      assert(1 == b);
      for (var f = c = 0; c < L.length && f < b;) {
        var l = L[c], n = M[l.type];
        d <= n && n <= e ? !1 === Lf(l, a) ? c++ : (L.splice(c, 1), f++) : c++;
      }
      return f;
    default:
      throw "SDL_PeepEvents does not yet support that action: " + c;
  }
}, _SDL_PollEvent:function(a) {
  a: {
    if (vf & 512) {
      for (var b in Uf) {
        var c = b - 1;
        var d = navigator.getGamepads || navigator.Rg || navigator.yg || navigator.ng || navigator.webkitGetGamepads;
        d = void 0 !== d ? d.apply(navigator) : [];
        c = d.length > c && 0 <= c ? d[c] : null;
        d = Uf[b];
        if ("undefined" === typeof c) {
          break;
        }
        if (null === c) {
          break;
        }
        if ("number" !== typeof c.timestamp || c.timestamp !== d.timestamp || !c.timestamp) {
          var e;
          for (e = 0; e < c.buttons.length; e++) {
            var f = Vf(c.buttons[e]);
            f !== d.buttons[e] && L.push({type:f ? "joystick_button_down" : "joystick_button_up", Md:b, index:b - 1, button:e});
          }
          for (e = 0; e < c.axes.length; e++) {
            c.axes[e] !== d.axes[e] && L.push({type:"joystick_axis_motion", Md:b, index:b - 1, axis:e, value:c.axes[e]});
          }
          d = b;
          e = Array(c.buttons.length);
          for (f = 0; f < c.buttons.length; f++) {
            e[f] = Vf(c.buttons[f]);
          }
          Uf[d] = {buttons:e, axes:c.axes.slice(0), timestamp:c.timestamp, index:c.index, id:c.id};
        }
      }
    }
    if (a) {
      for (; 0 < L.length;) {
        if (!1 !== Lf(L.shift(), a)) {
          a = 1;
          break a;
        }
      }
      a = 0;
    } else {
      a = 0 < L.length;
    }
  }
  return a;
}, _SDL_PumpEvents:function() {
  L.forEach(function(a) {
    Kf(a);
  });
}, _SDL_Quit:function() {
  for (var a = 0; a < Of; ++a) {
    Pf[a].audio && (Pf[a].audio.pause(), Pf[a].audio = void 0);
  }
  of.audio && of.audio.pause();
  of.audio = void 0;
  xa("SDL_Quit called (and ignored)");
}, _SDL_RemoveTimer:function(a) {
  window.clearTimeout(a);
  return !0;
}, _SDL_SaveBMP_RW:function() {
  throw "SDL_SaveBMP_RW: TODO";
}, _SDL_SetAlpha:function(a, b, c) {
  a = kf[a];
  a.alpha = c;
  b & 65536 || (a.alpha = 255);
}, _SDL_SetGamma:function() {
  return -1;
}, _SDL_SetVideoMode:function(a, b, c, d) {
  "touchstart touchend touchmove mousedown mouseup mousemove DOMMouseScroll mousewheel wheel mouseout".split(" ").forEach(function(a) {
    g.canvas.addEventListener(a, Hf, !0);
  });
  c = g.canvas;
  0 == a && 0 == b && (a = c.width, b = c.height);
  Xf || (Xf = !0, gf.push(function(a, b) {
    Yf || Hf({type:"resize", P:a, N:b});
  }));
  Yf = !0;
  Te(g.canvas, a, b);
  Ue();
  Yf = !1;
  Se && (Df(Se), assert(!Se));
  pf && (d |= 67108864);
  return Se = Cf(a, b, d, !0, "screen");
}, _SDL_ShowCursor:function(a) {
  switch(a) {
    case 0:
      return Be ? (g.canvas.requestPointerLock(), 0) : 1;
    case 1:
      return g.canvas.exitPointerLock(), 1;
    case -1:
      return !Ce;
    default:
      console.log("SDL_ShowCursor called with unknown toggle parameter value: " + a + ".");
  }
}, _SDL_ThreadID:function() {
  return 0;
}, _SDL_UnlockAudio:function() {
}, _SDL_UpperBlit:function(a, b, c, d) {
  a = kf[a];
  var e = kf[c];
  b = b ? Bf(b) : {x:0, y:0, P:a.width, N:a.height};
  var f = d ? Bf(d) : {x:0, y:0, P:a.width, N:a.height};
  if (e.dd) {
    var l = e.dd, n = Math.max(l.x, f.x), p = Math.max(l.y, f.y);
    f = {x:n, y:p, P:Math.max(n, Math.min(l.x + l.P, f.x + f.P)) - n, N:Math.max(p, Math.min(l.y + l.N, f.y + f.N)) - p};
    b.P = 1 * f.P;
    b.N = 1 * f.N;
    d && (l = f, m[d >> 2] = l.x, m[d + 4 >> 2] = l.y, m[d + 8 >> 2] = l.P, m[d + 12 >> 2] = l.N);
  }
  d = b.P;
  l = b.N;
  0 !== b.P && 0 !== b.N && 0 !== d && 0 !== l && (n = e.A.globalAlpha, e.A.globalAlpha = a.alpha / 255, e.A.drawImage(a.canvas, b.x, b.y, b.P, b.N, f.x, f.y, d, l), e.A.globalAlpha = n, c != Se && (Fa("WARNING: copying canvas data to memory for compatibility"), Zf(c), e.locked--));
  return 0;
}, _SDL_VideoModeOK:function(a, b, c) {
  return c;
}, _SDL_WM_GrabInput:function() {
}, _SDL_WM_SetCaption:function(a, b) {
  a && "undefined" !== typeof g.setWindowTitle && g.setWindowTitle(v(a));
  b && v(b);
}, _SDL_WM_ToggleFullScreen:function() {
  if (Be) {
    g.canvas.exitFullscreen();
  } else {
    if (!tf) {
      return 0;
    }
    uf = !0;
  }
  return 1;
}, _SDL_WaitThread:function() {
  throw "SDL_WaitThread";
}, _SDL_WarpMouse:function() {
}, _SDL_WasInit:function() {
  null === jf && jg();
  return 1;
}, _SDL_mutexP:function() {
  return 0;
}, _SDL_mutexV:function() {
  return 0;
}, ___assert_fail:function(a, b, c, d) {
  h("Assertion failed: " + v(a) + ", at: " + [b ? v(b) : "unknown filename", c, d ? v(d) : "unknown function"]);
}, ___buildEnvironment:Lg, ___clock_gettime:function() {
  return Mg.apply(null, arguments);
}, ___cxa_pure_virtual:function() {
  Na = !0;
  throw "Pure virtual function called!";
}, ___lock:function() {
}, ___setErrNo:Kc, ___syscall10:function(a, b) {
  Ng = b;
  try {
    var c = v(Q());
    Hd(c);
    return 0;
  } catch (d) {
    return "undefined" !== typeof FS && d instanceof E || h(d), -d.i;
  }
}, ___syscall102:function(a, b) {
  Ng = b;
  try {
    var c = Q();
    Ng = Q();
    switch(c) {
      case 1:
        var d = Q(), e = Q(), f = Q(), l = SOCKFS.createSocket(d, e, f);
        assert(64 > l.stream.j);
        return l.stream.j;
      case 2:
        l = Pg();
        var n = Qg();
        l.I.bind(l, n.s, n.port);
        return 0;
      case 3:
        return l = Pg(), n = Qg(), l.I.connect(l, n.s, n.port), 0;
      case 4:
        l = Pg();
        var p = Q();
        l.I.listen(l, p);
        return 0;
      case 5:
        l = Pg();
        var u = Q();
        Q();
        var w = l.I.accept(l);
        if (u) {
          var t = ah(u, w.family, Yg(w.R), w.T);
          assert(!t.i);
        }
        return w.stream.j;
      case 6:
        return l = Pg(), u = Q(), Q(), t = ah(u, l.family, Yg(l.rb || "0.0.0.0"), l.pa), assert(!t.i), 0;
      case 7:
        l = Pg();
        u = Q();
        Q();
        if (!l.R) {
          return -D.Da;
        }
        t = ah(u, l.family, Yg(l.R), l.T);
        assert(!t.i);
        return 0;
      case 11:
        l = Pg();
        var A = Q(), x = Q();
        Q();
        var y = Qg(!0);
        return y ? l.I.Vb(l, q, A, x, y.s, y.port) : Od(l.stream, q, A, x);
      case 12:
        l = Pg();
        var B = Q(), C = Q();
        Q();
        u = Q();
        Q();
        var G = l.I.Sb(l, C);
        if (!G) {
          return 0;
        }
        u && (t = ah(u, l.family, Yg(G.s), G.port), assert(!t.i));
        r.set(G.buffer, B);
        return G.buffer.byteLength;
      case 14:
        return -D.dc;
      case 15:
        l = Pg();
        var H = Q(), K = Q(), J = Q(), ca = Q();
        return 1 === H && 4 === K ? (m[J >> 2] = l.error, m[ca >> 2] = 4, l.error = null, 0) : -D.dc;
      case 16:
        l = Pg();
        A = Q();
        Q();
        var ba = m[A + 8 >> 2], ha = m[A + 12 >> 2], ma = m[A >> 2], va = m[A + 4 >> 2];
        if (ma) {
          n = __read_sockaddr(ma, va);
          if (n.i) {
            return -n.i;
          }
          var wa = n.port;
          u = Rg(n.s) || n.s;
        }
        for (var ka = 0, R = 0; R < ha; R++) {
          ka += m[ba + (8 * R + 4) >> 2];
        }
        var sa = new Uint8Array(ka);
        for (R = x = 0; R < ha; R++) {
          var na = m[ba + (8 * R + 0) >> 2], oa = m[ba + (8 * R + 4) >> 2];
          for (B = 0; B < oa; B++) {
            sa[x++] = q[na + B >> 0];
          }
        }
        return l.I.Vb(l, sa, 0, ka, u, wa);
      case 17:
        l = Pg();
        A = Q();
        Q();
        ba = m[A + 8 >> 2];
        ha = m[A + 12 >> 2];
        for (R = ka = 0; R < ha; R++) {
          ka += m[ba + (8 * R + 4) >> 2];
        }
        G = l.I.Sb(l, ka);
        if (!G) {
          return 0;
        }
        if (ma = m[A >> 2]) {
          t = ah(ma, l.family, Yg(G.s), G.port), assert(!t.i);
        }
        l = 0;
        var Ja = G.buffer.byteLength;
        for (R = 0; 0 < Ja && R < ha; R++) {
          if (na = m[ba + (8 * R + 0) >> 2], oa = m[ba + (8 * R + 4) >> 2]) {
            x = Math.min(oa, Ja), B = G.buffer.subarray(l, l + x), r.set(B, na + l), l += x, Ja -= x;
          }
        }
        return l;
      default:
        h("unsupported socketcall syscall " + c);
    }
  } catch (Ka) {
    return "undefined" !== typeof FS && Ka instanceof E || h(Ka), -Ka.i;
  }
}, ___syscall140:function(a, b) {
  Ng = b;
  try {
    var c = Og();
    Q();
    var d = Q(), e = Q(), f = Q();
    Md(c, d, f);
    m[e >> 2] = c.position;
    c.la && 0 === d && 0 === f && (c.la = null);
    return 0;
  } catch (l) {
    return "undefined" !== typeof FS && l instanceof E || h(l), -l.i;
  }
}, ___syscall142:function(a, b) {
  Ng = b;
  try {
    var c = Q(), d = Q(), e = Q(), f = Q();
    Q();
    assert(64 >= c, "nfds must be less than or equal to 64");
    assert(!f, "exceptfds not supported");
    a = 0;
    for (var l = d ? m[d >> 2] : 0, n = d ? m[d + 4 >> 2] : 0, p = e ? m[e >> 2] : 0, u = e ? m[e + 4 >> 2] : 0, w = f ? m[f >> 2] : 0, t = f ? m[f + 4 >> 2] : 0, A = b = 0, x = 0, y = 0, B = 0, C = 0, G = (d ? m[d >> 2] : 0) | (e ? m[e >> 2] : 0) | (f ? m[f >> 2] : 0), H = (d ? m[d + 4 >> 2] : 0) | (e ? m[e + 4 >> 2] : 0) | (f ? m[f + 4 >> 2] : 0), K = 0; K < c; K++) {
      var J = 1 << K % 32;
      if (32 > K ? G & J : H & J) {
        var ca = hd[K];
        if (!ca) {
          throw new E(D.V);
        }
        var ba = 5;
        ca.g.ta && (ba = ca.g.ta(ca));
        ba & 1 && (32 > K ? l & J : n & J) && (32 > K ? b |= J : A |= J, a++);
        ba & 4 && (32 > K ? p & J : u & J) && (32 > K ? x |= J : y |= J, a++);
        ba & 2 && (32 > K ? w & J : t & J) && (32 > K ? B |= J : C |= J, a++);
      }
    }
    d && (m[d >> 2] = b, m[d + 4 >> 2] = A);
    e && (m[e >> 2] = x, m[e + 4 >> 2] = y);
    f && (m[f >> 2] = B, m[f + 4 >> 2] = C);
    return a;
  } catch (ha) {
    return "undefined" !== typeof FS && ha instanceof E || h(ha), -ha.i;
  }
}, ___syscall145:function(a, b) {
  Ng = b;
  try {
    var c = Og(), d = Q();
    a: {
      var e = Q();
      for (b = a = 0; b < e; b++) {
        var f = m[d + (8 * b + 4) >> 2], l = Nd(c, q, m[d + 8 * b >> 2], f, void 0);
        if (0 > l) {
          var n = -1;
          break a;
        }
        a += l;
        if (l < f) {
          break;
        }
      }
      n = a;
    }
    return n;
  } catch (p) {
    return "undefined" !== typeof FS && p instanceof E || h(p), -p.i;
  }
}, ___syscall146:function(a, b) {
  Ng = b;
  try {
    var c = Og(), d = Q();
    a: {
      var e = Q();
      for (b = a = 0; b < e; b++) {
        var f = Od(c, q, m[d + 8 * b >> 2], m[d + (8 * b + 4) >> 2], void 0);
        if (0 > f) {
          var l = -1;
          break a;
        }
        a += f;
      }
      l = a;
    }
    return l;
  } catch (n) {
    return "undefined" !== typeof FS && n instanceof E || h(n), -n.i;
  }
}, ___syscall168:function(a, b) {
  Ng = b;
  try {
    var c = Q(), d = Q();
    Q();
    for (b = a = 0; b < d; b++) {
      var e = c + 8 * b, f = db[e + 4 >> 1], l = 32, n = hd[m[e >> 2]];
      n && (l = 5, n.g.ta && (l = n.g.ta(n)));
      (l &= f | 24) && a++;
      db[e + 6 >> 1] = l;
    }
    return a;
  } catch (p) {
    return "undefined" !== typeof FS && p instanceof E || h(p), -p.i;
  }
}, ___syscall220:function(a, b) {
  Ng = b;
  try {
    var c = Og(), d = Q(), e = Q();
    if (!c.la) {
      var f = md(c.path, {ra:!0}).node;
      if (!f.f.readdir) {
        throw new E(D.bb);
      }
      var l = f.f.readdir(f);
      c.la = l;
    }
    for (a = 0; 0 < c.la.length && a + 268 <= e;) {
      var n = c.la.pop();
      if ("." === n[0]) {
        var p = 1;
        var u = 4;
      } else {
        var w = dd(c.node, n);
        p = w.id;
        u = 8192 === (w.mode & 61440) ? 2 : bd(w.mode) ? 4 : 40960 === (w.mode & 61440) ? 10 : 8;
      }
      m[d + a >> 2] = p;
      m[d + a + 4 >> 2] = c.position;
      db[d + a + 8 >> 1] = 268;
      q[d + a + 10 >> 0] = u;
      Sa(n, r, d + a + 11, 256);
      a += 268;
    }
    return a;
  } catch (t) {
    return "undefined" !== typeof FS && t instanceof E || h(t), -t.i;
  }
}, ___syscall221:function(a, b) {
  Ng = b;
  try {
    var c = Og();
    switch(Q()) {
      case 0:
        var d = Q();
        return 0 > d ? -D.l : Jd(c.path, c.flags, 0, d).j;
      case 1:
      case 2:
        return 0;
      case 3:
        return c.flags;
      case 4:
        return d = Q(), c.flags |= d, 0;
      case 12:
      case 12:
        return d = Q(), db[d + 0 >> 1] = 2, 0;
      case 13:
      case 14:
      case 13:
      case 14:
        return 0;
      case 16:
      case 8:
        return -D.l;
      case 9:
        return Kc(D.l), -1;
      default:
        return -D.l;
    }
  } catch (e) {
    return "undefined" !== typeof FS && e instanceof E || h(e), -e.i;
  }
}, ___syscall33:function(a, b) {
  Ng = b;
  try {
    var c = v(Q());
    var d = Q();
    if (d & -8) {
      var e = -D.l;
    } else {
      var f = md(c, {ra:!0}).node;
      a = "";
      d & 4 && (a += "r");
      d & 2 && (a += "w");
      d & 1 && (a += "x");
      e = a && sd(f, a) ? -D.ab : 0;
    }
    return e;
  } catch (l) {
    return "undefined" !== typeof FS && l instanceof E || h(l), -l.i;
  }
}, ___syscall38:function(a, b) {
  Ng = b;
  try {
    var c = v(Q()), d = v(Q()), e = Nc(c), f = Nc(d), l = Oc(c), n = Oc(d);
    try {
      var p = md(c, {parent:!0});
      var u = p.node;
      p = md(d, {parent:!0});
      var w = p.node;
    } catch (C) {
      throw new E(D.ha);
    }
    if (!u || !w) {
      throw new E(D.W);
    }
    if (u.D !== w.D) {
      throw new E(D.Wc);
    }
    var t = dd(u, l), A = Sc(c, f);
    if ("." !== A.charAt(0)) {
      throw new E(D.l);
    }
    A = Sc(d, e);
    if ("." !== A.charAt(0)) {
      throw new E(D.yb);
    }
    try {
      var x = dd(w, n);
    } catch (C) {
    }
    if (t !== x) {
      var y = bd(t.mode), B = yd(u, l, y);
      if (B) {
        throw new E(B);
      }
      if (B = x ? yd(w, n, y) : xd(w, n)) {
        throw new E(B);
      }
      if (!u.f.rename) {
        throw new E(D.Z);
      }
      if (t.da || x && x.da) {
        throw new E(D.ha);
      }
      if (w !== u && (B = sd(u, "w"))) {
        throw new E(B);
      }
      try {
        ld.willMovePath && ld.willMovePath(c, d);
      } catch (C) {
        console.log("FS.trackingDelegate['willMovePath']('" + c + "', '" + d + "') threw an exception: " + C.message);
      }
      rd(t);
      try {
        u.f.rename(t, w, n);
      } catch (C) {
        throw C;
      } finally {
        qd(t);
      }
      try {
        if (ld.onMovePath) {
          ld.onMovePath(c, d);
        }
      } catch (C) {
        console.log("FS.trackingDelegate['onMovePath']('" + c + "', '" + d + "') threw an exception: " + C.message);
      }
    }
    return 0;
  } catch (C) {
    return "undefined" !== typeof FS && C instanceof E || h(C), -C.i;
  }
}, ___syscall39:function(a, b) {
  Ng = b;
  try {
    var c = v(Q()), d = Q();
    a = c;
    a = Mc(a);
    "/" === a[a.length - 1] && (a = a.substr(0, a.length - 1));
    Ed(a, d);
    return 0;
  } catch (e) {
    return "undefined" !== typeof FS && e instanceof E || h(e), -e.i;
  }
}, ___syscall40:function(a, b) {
  Ng = b;
  try {
    var c = v(Q()), d = md(c, {parent:!0}).node, e = Oc(c), f = dd(d, e), l = yd(d, e, !0);
    if (l) {
      throw new E(l);
    }
    if (!d.f.rmdir) {
      throw new E(D.Z);
    }
    if (f.da) {
      throw new E(D.ha);
    }
    try {
      ld.willDeletePath && ld.willDeletePath(c);
    } catch (n) {
      console.log("FS.trackingDelegate['willDeletePath']('" + c + "') threw an exception: " + n.message);
    }
    d.f.rmdir(d, e);
    rd(f);
    try {
      if (ld.onDeletePath) {
        ld.onDeletePath(c);
      }
    } catch (n) {
      console.log("FS.trackingDelegate['onDeletePath']('" + c + "') threw an exception: " + n.message);
    }
    return 0;
  } catch (n) {
    return "undefined" !== typeof FS && n instanceof E || h(n), -n.i;
  }
}, ___syscall5:function(a, b) {
  Ng = b;
  try {
    var c = v(Q()), d = Q(), e = Q();
    return Jd(c, d, e).j;
  } catch (f) {
    return "undefined" !== typeof FS && f instanceof E || h(f), -f.i;
  }
}, ___syscall54:function(a, b) {
  Ng = b;
  try {
    var c = Og(), d = Q();
    switch(d) {
      case 21509:
      case 21505:
        return c.tty ? 0 : -D.ja;
      case 21510:
      case 21511:
      case 21512:
      case 21506:
      case 21507:
      case 21508:
        return c.tty ? 0 : -D.ja;
      case 21519:
        if (!c.tty) {
          return -D.ja;
        }
        var e = Q();
        return m[e >> 2] = 0;
      case 21520:
        return c.tty ? -D.l : -D.ja;
      case 21531:
        a = e = Q();
        if (!c.g.lb) {
          throw new E(D.ja);
        }
        return c.g.lb(c, d, a);
      case 21523:
        return c.tty ? 0 : -D.ja;
      case 21524:
        return c.tty ? 0 : -D.ja;
      default:
        h("bad ioctl syscall " + d);
    }
  } catch (f) {
    return "undefined" !== typeof FS && f instanceof E || h(f), -f.i;
  }
}, ___syscall6:function(a, b) {
  Ng = b;
  try {
    var c = Og();
    Ld(c);
    return 0;
  } catch (d) {
    return "undefined" !== typeof FS && d instanceof E || h(d), -d.i;
  }
}, ___unlock:function() {
}, __emscripten_push_main_loop_blocker:function(a, b, c) {
  te.push({c:function() {
    g.dynCall_vi(a, b);
  }, name:v(c), mc:!0});
  ve();
}, __emscripten_push_uncounted_main_loop_blocker:function(a, b, c) {
  te.push({c:function() {
    g.dynCall_vi(a, b);
  }, name:v(c), mc:!1});
  ve();
}, _abort:function() {
  g.abort();
}, _atexit:function(a, b) {
  sb.unshift({c:a, Fa:b});
}, _ctime:function(a) {
  var b = Pa();
  a = hh(a, Ra(44));
  var c = m[a >> 2], d = m[a + 4 >> 2], e = m[a + 8 >> 2], f = m[a + 12 >> 2];
  Sa("Sun Mon Tue Wed Thu Fri Sat".split(" ")[m[a + 24 >> 2]] + " " + "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[m[a + 16 >> 2]] + (10 > f ? "  " : " ") + f + (10 > e ? " 0" : " ") + e + (10 > d ? ":0" : ":") + d + (10 > c ? ":0" : ":") + c + " " + (1900 + m[a + 20 >> 2]) + "\n", r, bh, 26);
  Qa(b);
  return bh;
}, _emscripten_asm_const_i:function(a) {
  return Fb[a]();
}, _emscripten_glAccum:function() {
  k("missing function: emscripten_glAccum");
  h(-1);
}, _emscripten_glActiveTexture:_emscripten_glActiveTexture, _emscripten_glActiveTextureARB:function() {
  k("missing function: emscripten_glActiveTextureARB");
  h(-1);
}, _emscripten_glAlphaFunc:function() {
}, _emscripten_glAreTexturesResident:function() {
  k("missing function: emscripten_glAreTexturesResident");
  h(-1);
}, _emscripten_glArrayElement:function() {
  k("missing function: emscripten_glArrayElement");
  h(-1);
}, _emscripten_glAttachObjectARB:function() {
  k("missing function: emscripten_glAttachObjectARB");
  h(-1);
}, _emscripten_glAttachShader:_emscripten_glAttachShader, _emscripten_glBegin:function(a) {
  Ei = Sh;
  Sh = [];
  Fi = S;
  S = [];
  for (var b = 0; b < Fi.length; b++) {
    S.push({});
  }
  gi = a;
  V = 0;
  a = ii = [];
  for (b = 0; b < ni; b++) {
    a[b] = 0;
  }
  ji = 0;
  U = fi;
}, _emscripten_glBeginConditionalRender:function() {
  k("missing function: emscripten_glBeginConditionalRender");
  h(-1);
}, _emscripten_glBeginQuery:function() {
  k("missing function: emscripten_glBeginQuery");
  h(-1);
}, _emscripten_glBeginQueryARB:function() {
  k("missing function: emscripten_glBeginQueryARB");
  h(-1);
}, _emscripten_glBeginTransformFeedback:function() {
  k("missing function: emscripten_glBeginTransformFeedback");
  h(-1);
}, _emscripten_glBindAttribLocation:_emscripten_glBindAttribLocation, _emscripten_glBindAttribLocationARB:function() {
  k("missing function: emscripten_glBindAttribLocationARB");
  h(-1);
}, _emscripten_glBindBuffer:_emscripten_glBindBuffer, _emscripten_glBindBufferARB:function() {
  k("missing function: emscripten_glBindBufferARB");
  h(-1);
}, _emscripten_glBindBufferBase:function() {
  k("missing function: emscripten_glBindBufferBase");
  h(-1);
}, _emscripten_glBindBufferRange:function() {
  k("missing function: emscripten_glBindBufferRange");
  h(-1);
}, _emscripten_glBindFragDataLocation:function() {
  k("missing function: emscripten_glBindFragDataLocation");
  h(-1);
}, _emscripten_glBindFramebuffer:function(a, b) {
  GLctx.bindFramebuffer(a, b ? og[b] : null);
}, _emscripten_glBindProgramARB:function() {
}, _emscripten_glBindRenderbuffer:function(a, b) {
  GLctx.bindRenderbuffer(a, b ? pg[b] : null);
}, _emscripten_glBindTexture:function(a, b) {
  GLctx.bindTexture(a, b ? qg[b] : null);
}, _emscripten_glBindVertexArray:function(a) {
  Lh = null;
  Ph && Ph.hb();
  wh(GLctx.ARRAY_BUFFER, 0);
  wh(GLctx.ELEMENT_ARRAY_BUFFER, 0);
  for (var b in Mh) {
    GLctx.disableVertexAttribArray(b);
  }
  Mh = {};
  Sh = [0, 0];
  oi = 0;
  qi = !0;
  if (a) {
    a = Kh[a];
    wh(GLctx.ARRAY_BUFFER, a.arrayBuffer);
    wh(GLctx.ELEMENT_ARRAY_BUFFER, a.nc);
    for (b in a.Cb) {
      Ah(b);
    }
    for (b in a.Zb) {
      Ch.apply(null, a.Zb[b]);
    }
    for (var c in a.Ja) {
      Gi(c | 0);
    }
    Lh = a;
  }
  tg = (b = GLctx.getParameter(GLctx.ELEMENT_ARRAY_BUFFER_BINDING)) ? b.name | 0 : 0;
}, _emscripten_glBitmap:function() {
  k("missing function: emscripten_glBitmap");
  h(-1);
}, _emscripten_glBlendColor:function(a, b, c, d) {
  GLctx.blendColor(a, b, c, d);
}, _emscripten_glBlendEquation:function(a) {
  GLctx.blendEquation(a);
}, _emscripten_glBlendEquationSeparate:function(a, b) {
  GLctx.blendEquationSeparate(a, b);
}, _emscripten_glBlendFunc:function(a, b) {
  GLctx.blendFunc(a, b);
}, _emscripten_glBlendFuncSeparate:function(a, b, c, d) {
  GLctx.blendFuncSeparate(a, b, c, d);
}, _emscripten_glBlitFramebuffer:function() {
  k("missing function: emscripten_glBlitFramebuffer");
  h(-1);
}, _emscripten_glBufferData:function(a, b, c, d) {
  switch(d) {
    case 35041:
    case 35042:
      d = 35040;
      break;
    case 35045:
    case 35046:
      d = 35044;
      break;
    case 35049:
    case 35050:
      d = 35048;
  }
  c ? GLctx.bufferData(a, r.subarray(c, c + b), d) : GLctx.bufferData(a, b, d);
}, _emscripten_glBufferDataARB:function() {
  k("missing function: emscripten_glBufferDataARB");
  h(-1);
}, _emscripten_glBufferSubData:function(a, b, c, d) {
  GLctx.bufferSubData(a, b, r.subarray(d, d + c));
}, _emscripten_glBufferSubDataARB:function() {
  k("missing function: emscripten_glBufferSubDataARB");
  h(-1);
}, _emscripten_glCallList:function() {
  k("missing function: emscripten_glCallList");
  h(-1);
}, _emscripten_glCallLists:function() {
  k("missing function: emscripten_glCallLists");
  h(-1);
}, _emscripten_glCheckFramebufferStatus:function(a) {
  return GLctx.checkFramebufferStatus(a);
}, _emscripten_glClampColor:function() {
  k("missing function: emscripten_glClampColor");
  h(-1);
}, _emscripten_glClear:function(a) {
  GLctx.clear(a);
}, _emscripten_glClearAccum:function() {
  k("missing function: emscripten_glClearAccum");
  h(-1);
}, _emscripten_glClearBufferfi:function() {
  k("missing function: emscripten_glClearBufferfi");
  h(-1);
}, _emscripten_glClearBufferfv:function() {
  k("missing function: emscripten_glClearBufferfv");
  h(-1);
}, _emscripten_glClearBufferiv:function() {
  k("missing function: emscripten_glClearBufferiv");
  h(-1);
}, _emscripten_glClearBufferuiv:function() {
  k("missing function: emscripten_glClearBufferuiv");
  h(-1);
}, _emscripten_glClearColor:function(a, b, c, d) {
  GLctx.clearColor(a, b, c, d);
}, _emscripten_glClearDepth:function(a) {
  GLctx.clearDepth(a);
}, _emscripten_glClearDepthf:function(a) {
  GLctx.clearDepth(a);
}, _emscripten_glClearIndex:function() {
  k("missing function: emscripten_glClearIndex");
  h(-1);
}, _emscripten_glClearStencil:function(a) {
  GLctx.clearStencil(a);
}, _emscripten_glClientActiveTexture:function(a) {
  Wh = a - 33984;
}, _emscripten_glClientActiveTextureARB:function() {
  k("missing function: emscripten_glClientActiveTextureARB");
  h(-1);
}, _emscripten_glClipPlane:function() {
  k("missing function: emscripten_glClipPlane");
  h(-1);
}, _emscripten_glColor3b:function() {
  k("missing function: emscripten_glColor3b");
  h(-1);
}, _emscripten_glColor3bv:function() {
  k("missing function: emscripten_glColor3bv");
  h(-1);
}, _emscripten_glColor3d:function(a, b, c) {
  Hi(a, b, c, 1);
}, _emscripten_glColor3dv:function() {
  k("missing function: emscripten_glColor3dv");
  h(-1);
}, _emscripten_glColor3f:Ii, _emscripten_glColor3fv:function(a) {
  Ii(z[a >> 2], z[a + 4 >> 2], z[a + 8 >> 2]);
}, _emscripten_glColor3i:function() {
  k("missing function: emscripten_glColor3i");
  h(-1);
}, _emscripten_glColor3iv:function() {
  k("missing function: emscripten_glColor3iv");
  h(-1);
}, _emscripten_glColor3s:function() {
  k("missing function: emscripten_glColor3s");
  h(-1);
}, _emscripten_glColor3sv:function() {
  k("missing function: emscripten_glColor3sv");
  h(-1);
}, _emscripten_glColor3ub:Ki, _emscripten_glColor3ubv:function(a) {
  Ki(q[a >> 0], q[a + 1 >> 0], q[a + 2 >> 0]);
}, _emscripten_glColor3ui:Mi, _emscripten_glColor3uiv:function(a) {
  Mi(m[a >> 2], m[a + 4 >> 2], m[a + 8 >> 2]);
}, _emscripten_glColor3us:Oi, _emscripten_glColor3usv:function(a) {
  Oi(db[a >> 1], db[a + 2 >> 1], db[a + 4 >> 1]);
}, _emscripten_glColor4b:function() {
  k("missing function: emscripten_glColor4b");
  h(-1);
}, _emscripten_glColor4bv:function() {
  k("missing function: emscripten_glColor4bv");
  h(-1);
}, _emscripten_glColor4d:function(a, b, c, d) {
  a = Math.max(Math.min(a, 1), 0);
  b = Math.max(Math.min(b, 1), 0);
  c = Math.max(Math.min(c, 1), 0);
  d = Math.max(Math.min(d, 1), 0);
  if (0 <= gi) {
    var e = V << 2;
    ei[e + 0] = 255 * a;
    ei[e + 1] = 255 * b;
    ei[e + 2] = 255 * c;
    ei[e + 3] = 255 * d;
    V++;
    ti(Uh, 4, GLctx.UNSIGNED_BYTE);
  } else {
    ri[0] = a, ri[1] = b, ri[2] = c, ri[3] = d;
  }
}, _emscripten_glColor4dv:function() {
  k("missing function: emscripten_glColor4dv");
  h(-1);
}, _emscripten_glColor4f:Hi, _emscripten_glColor4fv:function(a) {
  Hi(z[a >> 2], z[a + 4 >> 2], z[a + 8 >> 2], z[a + 12 >> 2]);
}, _emscripten_glColor4i:function() {
  k("missing function: emscripten_glColor4i");
  h(-1);
}, _emscripten_glColor4iv:function() {
  k("missing function: emscripten_glColor4iv");
  h(-1);
}, _emscripten_glColor4s:function() {
  k("missing function: emscripten_glColor4s");
  h(-1);
}, _emscripten_glColor4sv:function() {
  k("missing function: emscripten_glColor4sv");
  h(-1);
}, _emscripten_glColor4ub:Ji, _emscripten_glColor4ubv:function(a) {
  Ji(q[a >> 0], q[a + 1 >> 0], q[a + 2 >> 0], q[a + 3 >> 0]);
}, _emscripten_glColor4ui:Li, _emscripten_glColor4uiv:function() {
  k("missing function: emscripten_glColor4uiv");
  h(-1);
}, _emscripten_glColor4us:Ni, _emscripten_glColor4usv:function() {
  k("missing function: emscripten_glColor4usv");
  h(-1);
}, _emscripten_glColorMask:function(a, b, c, d) {
  GLctx.colorMask(!!a, !!b, !!c, !!d);
}, _emscripten_glColorMaski:function() {
  k("missing function: emscripten_glColorMaski");
  h(-1);
}, _emscripten_glColorMaterial:function() {
  k("missing function: emscripten_glColorMaterial");
  h(-1);
}, _emscripten_glColorPointer:function(a, b, c, d) {
  si(Uh, a, b, c, d);
}, _emscripten_glColorSubTable:function() {
  k("missing function: emscripten_glColorSubTable");
  h(-1);
}, _emscripten_glColorTable:function() {
  k("missing function: emscripten_glColorTable");
  h(-1);
}, _emscripten_glColorTableParameterfv:function() {
  k("missing function: emscripten_glColorTableParameterfv");
  h(-1);
}, _emscripten_glColorTableParameteriv:function() {
  k("missing function: emscripten_glColorTableParameteriv");
  h(-1);
}, _emscripten_glCompileShader:_emscripten_glCompileShader, _emscripten_glCompileShaderARB:function() {
  k("missing function: emscripten_glCompileShaderARB");
  h(-1);
}, _emscripten_glCompressedTexImage1D:function() {
  k("missing function: emscripten_glCompressedTexImage1D");
  h(-1);
}, _emscripten_glCompressedTexImage1DARB:function() {
  k("missing function: emscripten_glCompressedTexImage1DARB");
  h(-1);
}, _emscripten_glCompressedTexImage2D:function(a, b, c, d, e, f, l, n) {
  GLctx.compressedTexImage2D(a, b, c, d, e, f, n ? r.subarray(n, n + l) : null);
}, _emscripten_glCompressedTexImage2DARB:function() {
  k("missing function: emscripten_glCompressedTexImage2DARB");
  h(-1);
}, _emscripten_glCompressedTexImage3D:function() {
  k("missing function: emscripten_glCompressedTexImage3D");
  h(-1);
}, _emscripten_glCompressedTexImage3DARB:function() {
  k("missing function: emscripten_glCompressedTexImage3DARB");
  h(-1);
}, _emscripten_glCompressedTexSubImage1D:function() {
  k("missing function: emscripten_glCompressedTexSubImage1D");
  h(-1);
}, _emscripten_glCompressedTexSubImage1DARB:function() {
  k("missing function: emscripten_glCompressedTexSubImage1DARB");
  h(-1);
}, _emscripten_glCompressedTexSubImage2D:function(a, b, c, d, e, f, l, n, p) {
  GLctx.compressedTexSubImage2D(a, b, c, d, e, f, l, p ? r.subarray(p, p + n) : null);
}, _emscripten_glCompressedTexSubImage2DARB:function() {
  k("missing function: emscripten_glCompressedTexSubImage2DARB");
  h(-1);
}, _emscripten_glCompressedTexSubImage3D:function() {
  k("missing function: emscripten_glCompressedTexSubImage3D");
  h(-1);
}, _emscripten_glCompressedTexSubImage3DARB:function() {
  k("missing function: emscripten_glCompressedTexSubImage3DARB");
  h(-1);
}, _emscripten_glConvolutionFilter1D:function() {
  k("missing function: emscripten_glConvolutionFilter1D");
  h(-1);
}, _emscripten_glConvolutionFilter2D:function() {
  k("missing function: emscripten_glConvolutionFilter2D");
  h(-1);
}, _emscripten_glConvolutionParameterf:function() {
  k("missing function: emscripten_glConvolutionParameterf");
  h(-1);
}, _emscripten_glConvolutionParameterfv:function() {
  k("missing function: emscripten_glConvolutionParameterfv");
  h(-1);
}, _emscripten_glConvolutionParameteri:function() {
  k("missing function: emscripten_glConvolutionParameteri");
  h(-1);
}, _emscripten_glConvolutionParameteriv:function() {
  k("missing function: emscripten_glConvolutionParameteriv");
  h(-1);
}, _emscripten_glCopyColorSubTable:function() {
  k("missing function: emscripten_glCopyColorSubTable");
  h(-1);
}, _emscripten_glCopyColorTable:function() {
  k("missing function: emscripten_glCopyColorTable");
  h(-1);
}, _emscripten_glCopyConvolutionFilter1D:function() {
  k("missing function: emscripten_glCopyConvolutionFilter1D");
  h(-1);
}, _emscripten_glCopyConvolutionFilter2D:function() {
  k("missing function: emscripten_glCopyConvolutionFilter2D");
  h(-1);
}, _emscripten_glCopyPixels:function() {
  k("missing function: emscripten_glCopyPixels");
  h(-1);
}, _emscripten_glCopyTexImage1D:function() {
  k("missing function: emscripten_glCopyTexImage1D");
  h(-1);
}, _emscripten_glCopyTexImage2D:function(a, b, c, d, e, f, l, n) {
  GLctx.copyTexImage2D(a, b, c, d, e, f, l, n);
}, _emscripten_glCopyTexSubImage1D:function() {
  k("missing function: emscripten_glCopyTexSubImage1D");
  h(-1);
}, _emscripten_glCopyTexSubImage2D:function(a, b, c, d, e, f, l, n) {
  GLctx.copyTexSubImage2D(a, b, c, d, e, f, l, n);
}, _emscripten_glCopyTexSubImage3D:function() {
  k("missing function: emscripten_glCopyTexSubImage3D");
  h(-1);
}, _emscripten_glCreateProgram:function() {
  var a = zg(N), b = GLctx.createProgram();
  b.name = a;
  N[a] = b;
  return a;
}, _emscripten_glCreateProgramObjectARB:function() {
  k("missing function: emscripten_glCreateProgramObjectARB");
  h(-1);
}, _emscripten_glCreateShader:_emscripten_glCreateShader, _emscripten_glCreateShaderObjectARB:function() {
  k("missing function: emscripten_glCreateShaderObjectARB");
  h(-1);
}, _emscripten_glCullFace:function(a) {
  GLctx.cullFace(a);
}, _emscripten_glDeleteBuffers:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = m[b + 4 * c >> 2], e = ng[d];
    e && (GLctx.deleteBuffer(e), e.name = 0, ng[d] = null, d == sg && (sg = 0), d == tg && (tg = 0));
  }
}, _emscripten_glDeleteBuffersARB:function() {
  k("missing function: emscripten_glDeleteBuffersARB");
  h(-1);
}, _emscripten_glDeleteFramebuffers:function(a, b) {
  for (var c = 0; c < a; ++c) {
    var d = m[b + 4 * c >> 2], e = og[d];
    e && (GLctx.deleteFramebuffer(e), e.name = 0, og[d] = null);
  }
}, _emscripten_glDeleteLists:function() {
  k("missing function: emscripten_glDeleteLists");
  h(-1);
}, _emscripten_glDeleteObjectARB:function(a) {
  N[a] ? _emscripten_glDeleteProgram(a) : O[a] ? Pi(a) : k("WARNING: deleteObject received invalid id: " + a);
}, _emscripten_glDeleteProgram:_emscripten_glDeleteProgram, _emscripten_glDeleteProgramsARB:function() {
  k("missing function: emscripten_glDeleteProgramsARB");
  h(-1);
}, _emscripten_glDeleteQueries:function() {
  k("missing function: emscripten_glDeleteQueries");
  h(-1);
}, _emscripten_glDeleteQueriesARB:function() {
  k("missing function: emscripten_glDeleteQueriesARB");
  h(-1);
}, _emscripten_glDeleteRenderbuffers:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = m[b + 4 * c >> 2], e = pg[d];
    e && (GLctx.deleteRenderbuffer(e), e.name = 0, pg[d] = null);
  }
}, _emscripten_glDeleteShader:Pi, _emscripten_glDeleteTextures:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = m[b + 4 * c >> 2], e = qg[d];
    e && (GLctx.deleteTexture(e), e.name = 0, qg[d] = null);
  }
}, _emscripten_glDeleteVertexArrays:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = m[b + 4 * c >> 2];
    Kh[d] = null;
    Lh && Lh.id == d && (Lh = null);
  }
}, _emscripten_glDepthFunc:function(a) {
  GLctx.depthFunc(a);
}, _emscripten_glDepthMask:function(a) {
  GLctx.depthMask(!!a);
}, _emscripten_glDepthRange:function(a, b) {
  GLctx.depthRange(a, b);
}, _emscripten_glDepthRangef:function(a, b) {
  GLctx.depthRange(a, b);
}, _emscripten_glDetachObjectARB:function() {
  k("missing function: emscripten_glDetachObjectARB");
  h(-1);
}, _emscripten_glDetachShader:_emscripten_glDetachShader, _emscripten_glDisable:_emscripten_glDisable, _emscripten_glDisableClientState:function(a) {
  var b = Rh(a);
  null !== b && Sh[b] && (Sh[b] = !1, oi--, Qh = null, Lh && delete Lh.Ja[a], qi = !0);
}, _emscripten_glDisableVertexAttribArray:_emscripten_glDisableVertexAttribArray, _emscripten_glDisableVertexAttribArrayARB:function() {
  k("missing function: emscripten_glDisableVertexAttribArrayARB");
  h(-1);
}, _emscripten_glDisablei:function() {
  k("missing function: emscripten_glDisablei");
  h(-1);
}, _emscripten_glDrawArrays:_emscripten_glDrawArrays, _emscripten_glDrawArraysInstanced:function(a, b, c, d) {
  GLctx.drawArraysInstanced(a, b, c, d);
}, _emscripten_glDrawArraysInstancedARB:function(a, b, c, d) {
  GLctx.drawArraysInstanced(a, b, c, d);
}, _emscripten_glDrawBuffer:function() {
  throw "glDrawBuffer: TODO";
}, _emscripten_glDrawBuffers:function(a, b) {
  for (var c = xg[a], d = 0; d < a; d++) {
    c[d] = m[b + 4 * d >> 2];
  }
  GLctx.drawBuffers(c);
}, _emscripten_glDrawElements:_emscripten_glDrawElements, _emscripten_glDrawElementsInstanced:function(a, b, c, d, e) {
  GLctx.drawElementsInstanced(a, b, c, d, e);
}, _emscripten_glDrawElementsInstancedARB:function(a, b, c, d, e) {
  GLctx.drawElementsInstanced(a, b, c, d, e);
}, _emscripten_glDrawPixels:function() {
  k("missing function: emscripten_glDrawPixels");
  h(-1);
}, _emscripten_glDrawRangeElements:function(a, b, c, d, e, f) {
  _emscripten_glDrawElements(a, d, e, f, b, c);
}, _emscripten_glEdgeFlag:function() {
  k("missing function: emscripten_glEdgeFlag");
  h(-1);
}, _emscripten_glEdgeFlagPointer:function() {
  k("missing function: emscripten_glEdgeFlagPointer");
  h(-1);
}, _emscripten_glEdgeFlagv:function() {
  k("missing function: emscripten_glEdgeFlagv");
  h(-1);
}, _emscripten_glEnable:_emscripten_glEnable, _emscripten_glEnableClientState:function(a) {
  var b = Rh(a);
  null === b || Sh[b] || (Sh[b] = !0, oi++, Qh = null, Lh && (Lh.Ja[a] = 1), qi = !0);
}, _emscripten_glEnableVertexAttribArray:_emscripten_glEnableVertexAttribArray, _emscripten_glEnableVertexAttribArrayARB:function() {
  k("missing function: emscripten_glEnableVertexAttribArrayARB");
  h(-1);
}, _emscripten_glEnablei:function() {
  k("missing function: emscripten_glEnablei");
  h(-1);
}, _emscripten_glEnd:function() {
  Ai(ii[Th], !0);
  xi = 0;
  zi = V / (yi >> 2);
  Di();
  ui();
  gi = -1;
  Sh = Ei;
  S = Fi;
  Qh = null;
  qi = !0;
}, _emscripten_glEndConditionalRender:function() {
  k("missing function: emscripten_glEndConditionalRender");
  h(-1);
}, _emscripten_glEndList:function() {
  k("missing function: emscripten_glEndList");
  h(-1);
}, _emscripten_glEndQuery:function() {
  k("missing function: emscripten_glEndQuery");
  h(-1);
}, _emscripten_glEndQueryARB:function() {
  k("missing function: emscripten_glEndQueryARB");
  h(-1);
}, _emscripten_glEndTransformFeedback:function() {
  k("missing function: emscripten_glEndTransformFeedback");
  h(-1);
}, _emscripten_glEvalCoord1d:function() {
  k("missing function: emscripten_glEvalCoord1d");
  h(-1);
}, _emscripten_glEvalCoord1dv:function() {
  k("missing function: emscripten_glEvalCoord1dv");
  h(-1);
}, _emscripten_glEvalCoord1f:function() {
  k("missing function: emscripten_glEvalCoord1f");
  h(-1);
}, _emscripten_glEvalCoord1fv:function() {
  k("missing function: emscripten_glEvalCoord1fv");
  h(-1);
}, _emscripten_glEvalCoord2d:function() {
  k("missing function: emscripten_glEvalCoord2d");
  h(-1);
}, _emscripten_glEvalCoord2dv:function() {
  k("missing function: emscripten_glEvalCoord2dv");
  h(-1);
}, _emscripten_glEvalCoord2f:function() {
  k("missing function: emscripten_glEvalCoord2f");
  h(-1);
}, _emscripten_glEvalCoord2fv:function() {
  k("missing function: emscripten_glEvalCoord2fv");
  h(-1);
}, _emscripten_glEvalMesh1:function() {
  k("missing function: emscripten_glEvalMesh1");
  h(-1);
}, _emscripten_glEvalMesh2:function() {
  k("missing function: emscripten_glEvalMesh2");
  h(-1);
}, _emscripten_glEvalPoint1:function() {
  k("missing function: emscripten_glEvalPoint1");
  h(-1);
}, _emscripten_glEvalPoint2:function() {
  k("missing function: emscripten_glEvalPoint2");
  h(-1);
}, _emscripten_glFeedbackBuffer:function() {
  k("missing function: emscripten_glFeedbackBuffer");
  h(-1);
}, _emscripten_glFinish:function() {
  GLctx.finish();
}, _emscripten_glFlush:function() {
  GLctx.flush();
}, _emscripten_glFogCoordPointer:function() {
  k("missing function: emscripten_glFogCoordPointer");
  h(-1);
}, _emscripten_glFogCoordd:function() {
  k("missing function: emscripten_glFogCoordd");
  h(-1);
}, _emscripten_glFogCoorddv:function() {
  k("missing function: emscripten_glFogCoorddv");
  h(-1);
}, _emscripten_glFogCoordf:function() {
  k("missing function: emscripten_glFogCoordf");
  h(-1);
}, _emscripten_glFogCoordfv:function() {
  k("missing function: emscripten_glFogCoordfv");
  h(-1);
}, _emscripten_glFogf:Qi, _emscripten_glFogfv:function(a, b) {
  switch(a) {
    case 2918:
      Hh[0] = z[b >> 2];
      Hh[1] = z[b + 4 >> 2];
      Hh[2] = z[b + 8 >> 2];
      Hh[3] = z[b + 12 >> 2];
      break;
    case 2915:
    case 2916:
      Qi(a, z[b >> 2]);
  }
}, _emscripten_glFogi:function(a, b) {
  return Qi(a, b);
}, _emscripten_glFogiv:function(a, b) {
  switch(a) {
    case 2918:
      Hh[0] = m[b >> 2] / 2147483647 / 2 + .5;
      Hh[1] = m[b + 4 >> 2] / 2147483647 / 2 + .5;
      Hh[2] = m[b + 8 >> 2] / 2147483647 / 2 + .5;
      Hh[3] = m[b + 12 >> 2] / 2147483647 / 2 + .5;
      break;
    default:
      Qi(a, m[b >> 2]);
  }
}, _emscripten_glFramebufferRenderbuffer:function(a, b, c, d) {
  GLctx.framebufferRenderbuffer(a, b, c, pg[d]);
}, _emscripten_glFramebufferTexture1D:function() {
  k("missing function: emscripten_glFramebufferTexture1D");
  h(-1);
}, _emscripten_glFramebufferTexture2D:function(a, b, c, d, e) {
  GLctx.framebufferTexture2D(a, b, c, qg[d], e);
}, _emscripten_glFramebufferTexture3D:function() {
  k("missing function: emscripten_glFramebufferTexture3D");
  h(-1);
}, _emscripten_glFramebufferTextureLayer:function() {
  k("missing function: emscripten_glFramebufferTextureLayer");
  h(-1);
}, _emscripten_glFrontFace:function(a) {
  GLctx.frontFace(a);
}, _emscripten_glFrustum:function(a, b, c, d, e, f) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.multiply(T[W], Z.h.Hb(a, b, c, d, e, f));
}, _emscripten_glGenBuffers:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = GLctx.createBuffer();
    if (!d) {
      for (P(1282); c < a;) {
        m[b + 4 * c++ >> 2] = 0;
      }
      break;
    }
    var e = zg(ng);
    d.name = e;
    ng[e] = d;
    m[b + 4 * c >> 2] = e;
  }
}, _emscripten_glGenBuffersARB:function() {
  k("missing function: emscripten_glGenBuffersARB");
  h(-1);
}, _emscripten_glGenFramebuffers:function(a, b) {
  for (var c = 0; c < a; ++c) {
    var d = GLctx.createFramebuffer();
    if (!d) {
      for (P(1282); c < a;) {
        m[b + 4 * c++ >> 2] = 0;
      }
      break;
    }
    var e = zg(og);
    d.name = e;
    og[e] = d;
    m[b + 4 * c >> 2] = e;
  }
}, _emscripten_glGenLists:function() {
  k("missing function: emscripten_glGenLists");
  h(-1);
}, _emscripten_glGenProgramsARB:function() {
  k("missing function: emscripten_glGenProgramsARB");
  h(-1);
}, _emscripten_glGenQueries:function() {
  k("missing function: emscripten_glGenQueries");
  h(-1);
}, _emscripten_glGenQueriesARB:function() {
  k("missing function: emscripten_glGenQueriesARB");
  h(-1);
}, _emscripten_glGenRenderbuffers:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = GLctx.createRenderbuffer();
    if (!d) {
      for (P(1282); c < a;) {
        m[b + 4 * c++ >> 2] = 0;
      }
      break;
    }
    var e = zg(pg);
    d.name = e;
    pg[e] = d;
    m[b + 4 * c >> 2] = e;
  }
}, _emscripten_glGenTextures:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = GLctx.createTexture();
    if (!d) {
      for (P(1282); c < a;) {
        m[b + 4 * c++ >> 2] = 0;
      }
      break;
    }
    var e = zg(qg);
    d.name = e;
    qg[e] = d;
    m[b + 4 * c >> 2] = e;
  }
}, _emscripten_glGenVertexArrays:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = zg(Kh);
    Kh[d] = {id:d, arrayBuffer:0, nc:0, Cb:{}, Zb:{}, Ja:{}};
    m[b + 4 * c >> 2] = d;
  }
}, _emscripten_glGenerateMipmap:function(a) {
  GLctx.generateMipmap(a);
}, _emscripten_glGetActiveAttrib:function(a, b, c, d, e, f, l) {
  a = N[a];
  if (a = GLctx.getActiveAttrib(a, b)) {
    0 < c && l ? (c = Sa(a.name, r, l, c), d && (m[d >> 2] = c)) : d && (m[d >> 2] = 0), e && (m[e >> 2] = a.size), f && (m[f >> 2] = a.type);
  }
}, _emscripten_glGetActiveAttribARB:function() {
  k("missing function: emscripten_glGetActiveAttribARB");
  h(-1);
}, _emscripten_glGetActiveUniform:function(a, b, c, d, e, f, l) {
  a = N[a];
  if (a = GLctx.getActiveUniform(a, b)) {
    0 < c && l ? (c = Sa(a.name, r, l, c), d && (m[d >> 2] = c)) : d && (m[d >> 2] = 0), e && (m[e >> 2] = a.size), f && (m[f >> 2] = a.type);
  }
}, _emscripten_glGetActiveUniformARB:function() {
  k("missing function: emscripten_glGetActiveUniformARB");
  h(-1);
}, _emscripten_glGetActiveUniformBlockName:function() {
  k("missing function: emscripten_glGetActiveUniformBlockName");
  h(-1);
}, _emscripten_glGetActiveUniformBlockiv:function() {
  k("missing function: emscripten_glGetActiveUniformBlockiv");
  h(-1);
}, _emscripten_glGetActiveUniformName:function() {
  k("missing function: emscripten_glGetActiveUniformName");
  h(-1);
}, _emscripten_glGetActiveUniformsiv:function() {
  k("missing function: emscripten_glGetActiveUniformsiv");
  h(-1);
}, _emscripten_glGetAttachedObjectsARB:function() {
  k("missing function: emscripten_glGetAttachedObjectsARB");
  h(-1);
}, _emscripten_glGetAttachedShaders:function(a, b, c, d) {
  a = GLctx.getAttachedShaders(N[a]);
  var e = a.length;
  e > b && (e = b);
  m[c >> 2] = e;
  for (b = 0; b < e; ++b) {
    m[d + 4 * b >> 2] = O.indexOf(a[b]);
  }
}, _emscripten_glGetAttribLocation:function(a, b) {
  a = N[a];
  b = v(b);
  return GLctx.getAttribLocation(a, b);
}, _emscripten_glGetAttribLocationARB:function() {
  k("missing function: emscripten_glGetAttribLocationARB");
  h(-1);
}, _emscripten_glGetBooleani_v:function() {
  k("missing function: emscripten_glGetBooleani_v");
  h(-1);
}, _emscripten_glGetBooleanv:_emscripten_glGetBooleanv, _emscripten_glGetBufferParameteriv:function(a, b, c) {
  c ? m[c >> 2] = GLctx.getBufferParameter(a, b) : P(1281);
}, _emscripten_glGetBufferParameterivARB:function() {
  k("missing function: emscripten_glGetBufferParameterivARB");
  h(-1);
}, _emscripten_glGetBufferPointerv:function() {
  k("missing function: emscripten_glGetBufferPointerv");
  h(-1);
}, _emscripten_glGetBufferPointervARB:function() {
  k("missing function: emscripten_glGetBufferPointervARB");
  h(-1);
}, _emscripten_glGetBufferSubData:function() {
  k("missing function: emscripten_glGetBufferSubData");
  h(-1);
}, _emscripten_glGetBufferSubDataARB:function() {
  k("missing function: emscripten_glGetBufferSubDataARB");
  h(-1);
}, _emscripten_glGetClipPlane:function() {
  k("missing function: emscripten_glGetClipPlane");
  h(-1);
}, _emscripten_glGetColorTable:function() {
  k("missing function: emscripten_glGetColorTable");
  h(-1);
}, _emscripten_glGetColorTableParameterfv:function() {
  k("missing function: emscripten_glGetColorTableParameterfv");
  h(-1);
}, _emscripten_glGetColorTableParameteriv:function() {
  k("missing function: emscripten_glGetColorTableParameteriv");
  h(-1);
}, _emscripten_glGetCompressedTexImage:function() {
  k("missing function: emscripten_glGetCompressedTexImage");
  h(-1);
}, _emscripten_glGetCompressedTexImageARB:function() {
  k("missing function: emscripten_glGetCompressedTexImageARB");
  h(-1);
}, _emscripten_glGetConvolutionFilter:function() {
  k("missing function: emscripten_glGetConvolutionFilter");
  h(-1);
}, _emscripten_glGetConvolutionParameterfv:function() {
  k("missing function: emscripten_glGetConvolutionParameterfv");
  h(-1);
}, _emscripten_glGetConvolutionParameteriv:function() {
  k("missing function: emscripten_glGetConvolutionParameteriv");
  h(-1);
}, _emscripten_glGetDoublev:function() {
  k("missing function: emscripten_glGetDoublev");
  h(-1);
}, _emscripten_glGetError:function() {
  if (mg) {
    var a = mg;
    mg = 0;
    return a;
  }
  return GLctx.getError();
}, _emscripten_glGetFloatv:_emscripten_glGetFloatv, _emscripten_glGetFragDataLocation:function() {
  k("missing function: emscripten_glGetFragDataLocation");
  h(-1);
}, _emscripten_glGetFramebufferAttachmentParameteriv:function(a, b, c, d) {
  a = GLctx.getFramebufferAttachmentParameter(a, b, c);
  if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture) {
    a = a.name | 0;
  }
  m[d >> 2] = a;
}, _emscripten_glGetHandleARB:function() {
  k("missing function: emscripten_glGetHandleARB");
  h(-1);
}, _emscripten_glGetHistogram:function() {
  k("missing function: emscripten_glGetHistogram");
  h(-1);
}, _emscripten_glGetHistogramParameterfv:function() {
  k("missing function: emscripten_glGetHistogramParameterfv");
  h(-1);
}, _emscripten_glGetHistogramParameteriv:function() {
  k("missing function: emscripten_glGetHistogramParameteriv");
  h(-1);
}, _emscripten_glGetInfoLogARB:function(a, b, c, d) {
  N[a] ? Ri(a, b, c, d) : O[a] ? Si(a, b, c, d) : k("WARNING: glGetInfoLog received invalid id: " + a);
}, _emscripten_glGetIntegeri_v:function() {
  k("missing function: emscripten_glGetIntegeri_v");
  h(-1);
}, _emscripten_glGetIntegerv:_emscripten_glGetIntegerv, _emscripten_glGetLightfv:function() {
  k("missing function: emscripten_glGetLightfv");
  h(-1);
}, _emscripten_glGetLightiv:function() {
  k("missing function: emscripten_glGetLightiv");
  h(-1);
}, _emscripten_glGetMapdv:function() {
  k("missing function: emscripten_glGetMapdv");
  h(-1);
}, _emscripten_glGetMapfv:function() {
  k("missing function: emscripten_glGetMapfv");
  h(-1);
}, _emscripten_glGetMapiv:function() {
  k("missing function: emscripten_glGetMapiv");
  h(-1);
}, _emscripten_glGetMaterialfv:function() {
  k("missing function: emscripten_glGetMaterialfv");
  h(-1);
}, _emscripten_glGetMaterialiv:function() {
  k("missing function: emscripten_glGetMaterialiv");
  h(-1);
}, _emscripten_glGetMinmax:function() {
  k("missing function: emscripten_glGetMinmax");
  h(-1);
}, _emscripten_glGetMinmaxParameterfv:function() {
  k("missing function: emscripten_glGetMinmaxParameterfv");
  h(-1);
}, _emscripten_glGetMinmaxParameteriv:function() {
  k("missing function: emscripten_glGetMinmaxParameteriv");
  h(-1);
}, _emscripten_glGetObjectParameterfvARB:function() {
  k("missing function: emscripten_glGetObjectParameterfvARB");
  h(-1);
}, _emscripten_glGetObjectParameterivARB:function(a, b, c) {
  N[a] ? 35716 == b ? (a = GLctx.getProgramInfoLog(N[a]), null === a && (a = "(unknown error)"), m[c >> 2] = a.length) : Ti(a, b, c) : O[a] ? 35716 == b ? (a = GLctx.getShaderInfoLog(O[a]), null === a && (a = "(unknown error)"), m[c >> 2] = a.length) : 35720 == b ? (a = GLctx.getShaderSource(O[a]), null !== a && (m[c >> 2] = a.length)) : Ui(a, b, c) : k("WARNING: getObjectParameteriv received invalid id: " + a);
}, _emscripten_glGetPixelMapfv:function() {
  k("missing function: emscripten_glGetPixelMapfv");
  h(-1);
}, _emscripten_glGetPixelMapuiv:function() {
  k("missing function: emscripten_glGetPixelMapuiv");
  h(-1);
}, _emscripten_glGetPixelMapusv:function() {
  k("missing function: emscripten_glGetPixelMapusv");
  h(-1);
}, _emscripten_glGetPointerv:function(a, b) {
  switch(a) {
    case 32910:
      a = S[Th];
      break;
    case 32912:
      a = S[Uh];
      break;
    case 32914:
      a = S[Vh + Wh];
      break;
    default:
      P(1280);
      return;
  }
  m[b >> 2] = a ? a.na : 0;
}, _emscripten_glGetPolygonStipple:function() {
  k("missing function: emscripten_glGetPolygonStipple");
  h(-1);
}, _emscripten_glGetProgramEnvParameterdvARB:function() {
  k("missing function: emscripten_glGetProgramEnvParameterdvARB");
  h(-1);
}, _emscripten_glGetProgramEnvParameterfvARB:function() {
  k("missing function: emscripten_glGetProgramEnvParameterfvARB");
  h(-1);
}, _emscripten_glGetProgramInfoLog:Ri, _emscripten_glGetProgramLocalParameterdvARB:function() {
  k("missing function: emscripten_glGetProgramLocalParameterdvARB");
  h(-1);
}, _emscripten_glGetProgramLocalParameterfvARB:function() {
  k("missing function: emscripten_glGetProgramLocalParameterfvARB");
  h(-1);
}, _emscripten_glGetProgramStringARB:function() {
  k("missing function: emscripten_glGetProgramStringARB");
  h(-1);
}, _emscripten_glGetProgramiv:Ti, _emscripten_glGetProgramivARB:function() {
  k("missing function: emscripten_glGetProgramivARB");
  h(-1);
}, _emscripten_glGetQueryObjectiv:function() {
  k("missing function: emscripten_glGetQueryObjectiv");
  h(-1);
}, _emscripten_glGetQueryObjectivARB:function() {
  k("missing function: emscripten_glGetQueryObjectivARB");
  h(-1);
}, _emscripten_glGetQueryObjectuiv:function() {
  k("missing function: emscripten_glGetQueryObjectuiv");
  h(-1);
}, _emscripten_glGetQueryObjectuivARB:function() {
  k("missing function: emscripten_glGetQueryObjectuivARB");
  h(-1);
}, _emscripten_glGetQueryiv:function() {
  k("missing function: emscripten_glGetQueryiv");
  h(-1);
}, _emscripten_glGetQueryivARB:function() {
  k("missing function: emscripten_glGetQueryivARB");
  h(-1);
}, _emscripten_glGetRenderbufferParameteriv:function(a, b, c) {
  c ? m[c >> 2] = GLctx.getRenderbufferParameter(a, b) : P(1281);
}, _emscripten_glGetSeparableFilter:function() {
  k("missing function: emscripten_glGetSeparableFilter");
  h(-1);
}, _emscripten_glGetShaderInfoLog:Si, _emscripten_glGetShaderPrecisionFormat:function() {
  throw "glGetShaderPrecisionFormat: TODO";
}, _emscripten_glGetShaderSource:function(a, b, c, d) {
  if (a = GLctx.getShaderSource(O[a])) {
    0 < b && d ? (b = Sa(a, r, d, b), c && (m[c >> 2] = b)) : c && (m[c >> 2] = 0);
  }
}, _emscripten_glGetShaderSourceARB:function() {
  k("missing function: emscripten_glGetShaderSourceARB");
  h(-1);
}, _emscripten_glGetShaderiv:Ui, _emscripten_glGetString:_emscripten_glGetString, _emscripten_glGetStringi:function() {
  k("missing function: emscripten_glGetStringi");
  h(-1);
}, _emscripten_glGetTexEnvfv:function() {
  throw "GL emulation not initialized!";
}, _emscripten_glGetTexEnviv:function() {
  throw "GL emulation not initialized!";
}, _emscripten_glGetTexGendv:function() {
  k("missing function: emscripten_glGetTexGendv");
  h(-1);
}, _emscripten_glGetTexGenfv:function() {
  k("missing function: emscripten_glGetTexGenfv");
  h(-1);
}, _emscripten_glGetTexGeniv:function() {
  k("missing function: emscripten_glGetTexGeniv");
  h(-1);
}, _emscripten_glGetTexImage:function() {
  k("missing function: emscripten_glGetTexImage");
  h(-1);
}, _emscripten_glGetTexLevelParameterfv:function() {
  k("missing function: emscripten_glGetTexLevelParameterfv");
  h(-1);
}, _emscripten_glGetTexLevelParameteriv:function() {
  throw "glGetTexLevelParameteriv: TODO";
}, _emscripten_glGetTexParameterIiv:function() {
  k("missing function: emscripten_glGetTexParameterIiv");
  h(-1);
}, _emscripten_glGetTexParameterIuiv:function() {
  k("missing function: emscripten_glGetTexParameterIuiv");
  h(-1);
}, _emscripten_glGetTexParameterfv:function(a, b, c) {
  c ? z[c >> 2] = GLctx.getTexParameter(a, b) : P(1281);
}, _emscripten_glGetTexParameteriv:function(a, b, c) {
  c ? m[c >> 2] = GLctx.getTexParameter(a, b) : P(1281);
}, _emscripten_glGetTransformFeedbackVarying:function() {
  k("missing function: emscripten_glGetTransformFeedbackVarying");
  h(-1);
}, _emscripten_glGetUniformBlockIndex:function() {
  k("missing function: emscripten_glGetUniformBlockIndex");
  h(-1);
}, _emscripten_glGetUniformIndices:function() {
  k("missing function: emscripten_glGetUniformIndices");
  h(-1);
}, _emscripten_glGetUniformLocation:function(a, b) {
  b = v(b);
  var c = 0;
  if (-1 !== b.indexOf("]", b.length - 1)) {
    var d = b.lastIndexOf("["), e = b.slice(d + 1, -1);
    if (0 < e.length && (c = parseInt(e), 0 > c)) {
      return -1;
    }
    b = b.slice(0, d);
  }
  a = vg[a];
  return a ? (b = a.Pc[b]) && c < b[0] ? b[1] + c : -1 : -1;
}, _emscripten_glGetUniformLocationARB:function() {
  k("missing function: emscripten_glGetUniformLocationARB");
  h(-1);
}, _emscripten_glGetUniformfv:function(a, b, c) {
  Vi(a, b, c, "Float");
}, _emscripten_glGetUniformfvARB:function() {
  k("missing function: emscripten_glGetUniformfvARB");
  h(-1);
}, _emscripten_glGetUniformiv:function(a, b, c) {
  Vi(a, b, c, "Integer");
}, _emscripten_glGetUniformivARB:function() {
  k("missing function: emscripten_glGetUniformivARB");
  h(-1);
}, _emscripten_glGetUniformuiv:function() {
  k("missing function: emscripten_glGetUniformuiv");
  h(-1);
}, _emscripten_glGetVertexAttribIiv:function() {
  k("missing function: emscripten_glGetVertexAttribIiv");
  h(-1);
}, _emscripten_glGetVertexAttribIuiv:function() {
  k("missing function: emscripten_glGetVertexAttribIuiv");
  h(-1);
}, _emscripten_glGetVertexAttribPointerv:function(a, b, c) {
  c ? m[c >> 2] = GLctx.getVertexAttribOffset(a, b) : P(1281);
}, _emscripten_glGetVertexAttribPointervARB:function() {
  k("missing function: emscripten_glGetVertexAttribPointervARB");
  h(-1);
}, _emscripten_glGetVertexAttribdv:function() {
  k("missing function: emscripten_glGetVertexAttribdv");
  h(-1);
}, _emscripten_glGetVertexAttribdvARB:function() {
  k("missing function: emscripten_glGetVertexAttribdvARB");
  h(-1);
}, _emscripten_glGetVertexAttribfv:function(a, b, c) {
  Wi(a, b, c, "Float");
}, _emscripten_glGetVertexAttribfvARB:function() {
  k("missing function: emscripten_glGetVertexAttribfvARB");
  h(-1);
}, _emscripten_glGetVertexAttribiv:function(a, b, c) {
  Wi(a, b, c, "FloatToInteger");
}, _emscripten_glGetVertexAttribivARB:function() {
  k("missing function: emscripten_glGetVertexAttribivARB");
  h(-1);
}, _emscripten_glHint:_emscripten_glHint, _emscripten_glHistogram:function() {
  k("missing function: emscripten_glHistogram");
  h(-1);
}, _emscripten_glIndexMask:function() {
  k("missing function: emscripten_glIndexMask");
  h(-1);
}, _emscripten_glIndexPointer:function() {
  k("missing function: emscripten_glIndexPointer");
  h(-1);
}, _emscripten_glIndexd:function() {
  k("missing function: emscripten_glIndexd");
  h(-1);
}, _emscripten_glIndexdv:function() {
  k("missing function: emscripten_glIndexdv");
  h(-1);
}, _emscripten_glIndexf:function() {
  k("missing function: emscripten_glIndexf");
  h(-1);
}, _emscripten_glIndexfv:function() {
  k("missing function: emscripten_glIndexfv");
  h(-1);
}, _emscripten_glIndexi:function() {
  k("missing function: emscripten_glIndexi");
  h(-1);
}, _emscripten_glIndexiv:function() {
  k("missing function: emscripten_glIndexiv");
  h(-1);
}, _emscripten_glIndexs:function() {
  k("missing function: emscripten_glIndexs");
  h(-1);
}, _emscripten_glIndexsv:function() {
  k("missing function: emscripten_glIndexsv");
  h(-1);
}, _emscripten_glIndexub:function() {
  k("missing function: emscripten_glIndexub");
  h(-1);
}, _emscripten_glIndexubv:function() {
  k("missing function: emscripten_glIndexubv");
  h(-1);
}, _emscripten_glInitNames:function() {
  k("missing function: emscripten_glInitNames");
  h(-1);
}, _emscripten_glInterleavedArrays:function() {
  k("missing function: emscripten_glInterleavedArrays");
  h(-1);
}, _emscripten_glIsBuffer:function(a) {
  return (a = ng[a]) ? GLctx.isBuffer(a) : 0;
}, _emscripten_glIsBufferARB:function() {
  k("missing function: emscripten_glIsBufferARB");
  h(-1);
}, _emscripten_glIsEnabled:_emscripten_glIsEnabled, _emscripten_glIsEnabledi:function() {
  k("missing function: emscripten_glIsEnabledi");
  h(-1);
}, _emscripten_glIsFramebuffer:function(a) {
  return (a = og[a]) ? GLctx.isFramebuffer(a) : 0;
}, _emscripten_glIsList:function() {
  k("missing function: emscripten_glIsList");
  h(-1);
}, _emscripten_glIsProgram:function(a) {
  return (a = N[a]) ? GLctx.isProgram(a) : 0;
}, _emscripten_glIsProgramARB:function() {
  k("missing function: emscripten_glIsProgramARB");
  h(-1);
}, _emscripten_glIsQuery:function() {
  k("missing function: emscripten_glIsQuery");
  h(-1);
}, _emscripten_glIsQueryARB:function() {
  k("missing function: emscripten_glIsQueryARB");
  h(-1);
}, _emscripten_glIsRenderbuffer:function(a) {
  return (a = pg[a]) ? GLctx.isRenderbuffer(a) : 0;
}, _emscripten_glIsShader:function(a) {
  return (a = O[a]) ? GLctx.isShader(a) : 0;
}, _emscripten_glIsTexture:function(a) {
  return (a = qg[a]) ? GLctx.isTexture(a) : 0;
}, _emscripten_glIsVertexArray:function(a) {
  return Kh[a] ? 1 : 0;
}, _emscripten_glLightModelf:function() {
  k("missing function: emscripten_glLightModelf");
  h(-1);
}, _emscripten_glLightModelfv:function() {
  throw "glLightModelfv: TODO";
}, _emscripten_glLightModeli:function() {
  k("missing function: emscripten_glLightModeli");
  h(-1);
}, _emscripten_glLightModeliv:function() {
  k("missing function: emscripten_glLightModeliv");
  h(-1);
}, _emscripten_glLightf:function() {
  k("missing function: emscripten_glLightf");
  h(-1);
}, _emscripten_glLightfv:function() {
  throw "glLightfv: TODO";
}, _emscripten_glLighti:function() {
  k("missing function: emscripten_glLighti");
  h(-1);
}, _emscripten_glLightiv:function() {
  k("missing function: emscripten_glLightiv");
  h(-1);
}, _emscripten_glLineStipple:function() {
  k("missing function: emscripten_glLineStipple");
  h(-1);
}, _emscripten_glLineWidth:function(a) {
  GLctx.lineWidth(a);
}, _emscripten_glLinkProgram:_emscripten_glLinkProgram, _emscripten_glLinkProgramARB:function() {
  k("missing function: emscripten_glLinkProgramARB");
  h(-1);
}, _emscripten_glListBase:function() {
  k("missing function: emscripten_glListBase");
  h(-1);
}, _emscripten_glLoadIdentity:function() {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.Pa(T[W]);
}, _emscripten_glLoadMatrixd:function(a) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.set(gb.subarray(a >> 3, a + 128 >> 3), T[W]);
}, _emscripten_glLoadMatrixf:function(a) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.set(z.subarray(a >> 2, a + 64 >> 2), T[W]);
}, _emscripten_glLoadName:function() {
  k("missing function: emscripten_glLoadName");
  h(-1);
}, _emscripten_glLoadTransposeMatrixd:function(a) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.set(gb.subarray(a >> 3, a + 128 >> 3), T[W]);
  Z.h.Wa(T[W]);
}, _emscripten_glLoadTransposeMatrixdARB:function() {
  k("missing function: emscripten_glLoadTransposeMatrixdARB");
  h(-1);
}, _emscripten_glLoadTransposeMatrixf:function(a) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.set(z.subarray(a >> 2, a + 64 >> 2), T[W]);
  Z.h.Wa(T[W]);
}, _emscripten_glLoadTransposeMatrixfARB:function() {
  k("missing function: emscripten_glLoadTransposeMatrixfARB");
  h(-1);
}, _emscripten_glLogicOp:function() {
  k("missing function: emscripten_glLogicOp");
  h(-1);
}, _emscripten_glMap1d:function() {
  k("missing function: emscripten_glMap1d");
  h(-1);
}, _emscripten_glMap1f:function() {
  k("missing function: emscripten_glMap1f");
  h(-1);
}, _emscripten_glMap2d:function() {
  k("missing function: emscripten_glMap2d");
  h(-1);
}, _emscripten_glMap2f:function() {
  k("missing function: emscripten_glMap2f");
  h(-1);
}, _emscripten_glMapBuffer:function() {
  k("missing function: emscripten_glMapBuffer");
  h(-1);
}, _emscripten_glMapBufferARB:function() {
  k("missing function: emscripten_glMapBufferARB");
  h(-1);
}, _emscripten_glMapGrid1d:function() {
  k("missing function: emscripten_glMapGrid1d");
  h(-1);
}, _emscripten_glMapGrid1f:function() {
  k("missing function: emscripten_glMapGrid1f");
  h(-1);
}, _emscripten_glMapGrid2d:function() {
  k("missing function: emscripten_glMapGrid2d");
  h(-1);
}, _emscripten_glMapGrid2f:function() {
  k("missing function: emscripten_glMapGrid2f");
  h(-1);
}, _emscripten_glMaterialf:function() {
  k("missing function: emscripten_glMaterialf");
  h(-1);
}, _emscripten_glMaterialfv:function() {
  throw "glMaterialfv: TODO";
}, _emscripten_glMateriali:function() {
  k("missing function: emscripten_glMateriali");
  h(-1);
}, _emscripten_glMaterialiv:function() {
  k("missing function: emscripten_glMaterialiv");
  h(-1);
}, _emscripten_glMatrixMode:function(a) {
  if (5888 == a) {
    W = 0;
  } else {
    if (5889 == a) {
      W = 1;
    } else {
      if (5890 == a) {
        mi = !0, W = 2 + Wh;
      } else {
        throw "Wrong mode " + a + " passed to glMatrixMode";
      }
    }
  }
}, _emscripten_glMinmax:function() {
  k("missing function: emscripten_glMinmax");
  h(-1);
}, _emscripten_glMultMatrixd:function(a) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.multiply(T[W], gb.subarray(a >> 3, a + 128 >> 3));
}, _emscripten_glMultMatrixf:function(a) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.multiply(T[W], z.subarray(a >> 2, a + 64 >> 2));
}, _emscripten_glMultTransposeMatrixd:function(a) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  var b = Z.h.create();
  Z.h.set(gb.subarray(a >> 3, a + 128 >> 3), b);
  Z.h.Wa(b);
  Z.h.multiply(T[W], b);
}, _emscripten_glMultTransposeMatrixdARB:function() {
  k("missing function: emscripten_glMultTransposeMatrixdARB");
  h(-1);
}, _emscripten_glMultTransposeMatrixf:function(a) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  var b = Z.h.create();
  Z.h.set(z.subarray(a >> 2, a + 64 >> 2), b);
  Z.h.Wa(b);
  Z.h.multiply(T[W], b);
}, _emscripten_glMultTransposeMatrixfARB:function() {
  k("missing function: emscripten_glMultTransposeMatrixfARB");
  h(-1);
}, _emscripten_glMultiDrawArrays:function() {
  k("missing function: emscripten_glMultiDrawArrays");
  h(-1);
}, _emscripten_glMultiDrawElements:function() {
  k("missing function: emscripten_glMultiDrawElements");
  h(-1);
}, _emscripten_glMultiTexCoord1d:function() {
  k("missing function: emscripten_glMultiTexCoord1d");
  h(-1);
}, _emscripten_glMultiTexCoord1dARB:function() {
  k("missing function: emscripten_glMultiTexCoord1dARB");
  h(-1);
}, _emscripten_glMultiTexCoord1dv:function() {
  k("missing function: emscripten_glMultiTexCoord1dv");
  h(-1);
}, _emscripten_glMultiTexCoord1dvARB:function() {
  k("missing function: emscripten_glMultiTexCoord1dvARB");
  h(-1);
}, _emscripten_glMultiTexCoord1f:function() {
  k("missing function: emscripten_glMultiTexCoord1f");
  h(-1);
}, _emscripten_glMultiTexCoord1fARB:function() {
  k("missing function: emscripten_glMultiTexCoord1fARB");
  h(-1);
}, _emscripten_glMultiTexCoord1fv:function() {
  k("missing function: emscripten_glMultiTexCoord1fv");
  h(-1);
}, _emscripten_glMultiTexCoord1fvARB:function() {
  k("missing function: emscripten_glMultiTexCoord1fvARB");
  h(-1);
}, _emscripten_glMultiTexCoord1i:function() {
  k("missing function: emscripten_glMultiTexCoord1i");
  h(-1);
}, _emscripten_glMultiTexCoord1iARB:function() {
  k("missing function: emscripten_glMultiTexCoord1iARB");
  h(-1);
}, _emscripten_glMultiTexCoord1iv:function() {
  k("missing function: emscripten_glMultiTexCoord1iv");
  h(-1);
}, _emscripten_glMultiTexCoord1ivARB:function() {
  k("missing function: emscripten_glMultiTexCoord1ivARB");
  h(-1);
}, _emscripten_glMultiTexCoord1s:function() {
  k("missing function: emscripten_glMultiTexCoord1s");
  h(-1);
}, _emscripten_glMultiTexCoord1sARB:function() {
  k("missing function: emscripten_glMultiTexCoord1sARB");
  h(-1);
}, _emscripten_glMultiTexCoord1sv:function() {
  k("missing function: emscripten_glMultiTexCoord1sv");
  h(-1);
}, _emscripten_glMultiTexCoord1svARB:function() {
  k("missing function: emscripten_glMultiTexCoord1svARB");
  h(-1);
}, _emscripten_glMultiTexCoord2d:function() {
  k("missing function: emscripten_glMultiTexCoord2d");
  h(-1);
}, _emscripten_glMultiTexCoord2dARB:function() {
  k("missing function: emscripten_glMultiTexCoord2dARB");
  h(-1);
}, _emscripten_glMultiTexCoord2dv:function() {
  k("missing function: emscripten_glMultiTexCoord2dv");
  h(-1);
}, _emscripten_glMultiTexCoord2dvARB:function() {
  k("missing function: emscripten_glMultiTexCoord2dvARB");
  h(-1);
}, _emscripten_glMultiTexCoord2f:function() {
  k("missing function: emscripten_glMultiTexCoord2f");
  h(-1);
}, _emscripten_glMultiTexCoord2fARB:function() {
  k("missing function: emscripten_glMultiTexCoord2fARB");
  h(-1);
}, _emscripten_glMultiTexCoord2fv:function() {
  k("missing function: emscripten_glMultiTexCoord2fv");
  h(-1);
}, _emscripten_glMultiTexCoord2fvARB:function() {
  k("missing function: emscripten_glMultiTexCoord2fvARB");
  h(-1);
}, _emscripten_glMultiTexCoord2i:function() {
  k("missing function: emscripten_glMultiTexCoord2i");
  h(-1);
}, _emscripten_glMultiTexCoord2iARB:function() {
  k("missing function: emscripten_glMultiTexCoord2iARB");
  h(-1);
}, _emscripten_glMultiTexCoord2iv:function() {
  k("missing function: emscripten_glMultiTexCoord2iv");
  h(-1);
}, _emscripten_glMultiTexCoord2ivARB:function() {
  k("missing function: emscripten_glMultiTexCoord2ivARB");
  h(-1);
}, _emscripten_glMultiTexCoord2s:function() {
  k("missing function: emscripten_glMultiTexCoord2s");
  h(-1);
}, _emscripten_glMultiTexCoord2sARB:function() {
  k("missing function: emscripten_glMultiTexCoord2sARB");
  h(-1);
}, _emscripten_glMultiTexCoord2sv:function() {
  k("missing function: emscripten_glMultiTexCoord2sv");
  h(-1);
}, _emscripten_glMultiTexCoord2svARB:function() {
  k("missing function: emscripten_glMultiTexCoord2svARB");
  h(-1);
}, _emscripten_glMultiTexCoord3d:function() {
  k("missing function: emscripten_glMultiTexCoord3d");
  h(-1);
}, _emscripten_glMultiTexCoord3dARB:function() {
  k("missing function: emscripten_glMultiTexCoord3dARB");
  h(-1);
}, _emscripten_glMultiTexCoord3dv:function() {
  k("missing function: emscripten_glMultiTexCoord3dv");
  h(-1);
}, _emscripten_glMultiTexCoord3dvARB:function() {
  k("missing function: emscripten_glMultiTexCoord3dvARB");
  h(-1);
}, _emscripten_glMultiTexCoord3f:function() {
  k("missing function: emscripten_glMultiTexCoord3f");
  h(-1);
}, _emscripten_glMultiTexCoord3fARB:function() {
  k("missing function: emscripten_glMultiTexCoord3fARB");
  h(-1);
}, _emscripten_glMultiTexCoord3fv:function() {
  k("missing function: emscripten_glMultiTexCoord3fv");
  h(-1);
}, _emscripten_glMultiTexCoord3fvARB:function() {
  k("missing function: emscripten_glMultiTexCoord3fvARB");
  h(-1);
}, _emscripten_glMultiTexCoord3i:function() {
  k("missing function: emscripten_glMultiTexCoord3i");
  h(-1);
}, _emscripten_glMultiTexCoord3iARB:function() {
  k("missing function: emscripten_glMultiTexCoord3iARB");
  h(-1);
}, _emscripten_glMultiTexCoord3iv:function() {
  k("missing function: emscripten_glMultiTexCoord3iv");
  h(-1);
}, _emscripten_glMultiTexCoord3ivARB:function() {
  k("missing function: emscripten_glMultiTexCoord3ivARB");
  h(-1);
}, _emscripten_glMultiTexCoord3s:function() {
  k("missing function: emscripten_glMultiTexCoord3s");
  h(-1);
}, _emscripten_glMultiTexCoord3sARB:function() {
  k("missing function: emscripten_glMultiTexCoord3sARB");
  h(-1);
}, _emscripten_glMultiTexCoord3sv:function() {
  k("missing function: emscripten_glMultiTexCoord3sv");
  h(-1);
}, _emscripten_glMultiTexCoord3svARB:function() {
  k("missing function: emscripten_glMultiTexCoord3svARB");
  h(-1);
}, _emscripten_glMultiTexCoord4d:function() {
  k("missing function: emscripten_glMultiTexCoord4d");
  h(-1);
}, _emscripten_glMultiTexCoord4dARB:function() {
  k("missing function: emscripten_glMultiTexCoord4dARB");
  h(-1);
}, _emscripten_glMultiTexCoord4dv:function() {
  k("missing function: emscripten_glMultiTexCoord4dv");
  h(-1);
}, _emscripten_glMultiTexCoord4dvARB:function() {
  k("missing function: emscripten_glMultiTexCoord4dvARB");
  h(-1);
}, _emscripten_glMultiTexCoord4f:function() {
  k("missing function: emscripten_glMultiTexCoord4f");
  h(-1);
}, _emscripten_glMultiTexCoord4fARB:function() {
  k("missing function: emscripten_glMultiTexCoord4fARB");
  h(-1);
}, _emscripten_glMultiTexCoord4fv:function() {
  k("missing function: emscripten_glMultiTexCoord4fv");
  h(-1);
}, _emscripten_glMultiTexCoord4fvARB:function() {
  k("missing function: emscripten_glMultiTexCoord4fvARB");
  h(-1);
}, _emscripten_glMultiTexCoord4i:function() {
  k("missing function: emscripten_glMultiTexCoord4i");
  h(-1);
}, _emscripten_glMultiTexCoord4iARB:function() {
  k("missing function: emscripten_glMultiTexCoord4iARB");
  h(-1);
}, _emscripten_glMultiTexCoord4iv:function() {
  k("missing function: emscripten_glMultiTexCoord4iv");
  h(-1);
}, _emscripten_glMultiTexCoord4ivARB:function() {
  k("missing function: emscripten_glMultiTexCoord4ivARB");
  h(-1);
}, _emscripten_glMultiTexCoord4s:function() {
  k("missing function: emscripten_glMultiTexCoord4s");
  h(-1);
}, _emscripten_glMultiTexCoord4sARB:function() {
  k("missing function: emscripten_glMultiTexCoord4sARB");
  h(-1);
}, _emscripten_glMultiTexCoord4sv:function() {
  k("missing function: emscripten_glMultiTexCoord4sv");
  h(-1);
}, _emscripten_glMultiTexCoord4svARB:function() {
  k("missing function: emscripten_glMultiTexCoord4svARB");
  h(-1);
}, _emscripten_glNewList:function() {
  k("missing function: emscripten_glNewList");
  h(-1);
}, _emscripten_glNormal3b:function() {
  k("missing function: emscripten_glNormal3b");
  h(-1);
}, _emscripten_glNormal3bv:function() {
  k("missing function: emscripten_glNormal3bv");
  h(-1);
}, _emscripten_glNormal3d:function() {
  k("missing function: emscripten_glNormal3d");
  h(-1);
}, _emscripten_glNormal3dv:function() {
  k("missing function: emscripten_glNormal3dv");
  h(-1);
}, _emscripten_glNormal3f:function() {
}, _emscripten_glNormal3fv:function() {
  k("missing function: emscripten_glNormal3fv");
  h(-1);
}, _emscripten_glNormal3i:function() {
  k("missing function: emscripten_glNormal3i");
  h(-1);
}, _emscripten_glNormal3iv:function() {
  k("missing function: emscripten_glNormal3iv");
  h(-1);
}, _emscripten_glNormal3s:function() {
  k("missing function: emscripten_glNormal3s");
  h(-1);
}, _emscripten_glNormal3sv:function() {
  k("missing function: emscripten_glNormal3sv");
  h(-1);
}, _emscripten_glNormalPointer:function(a, b, c) {
  si(Zh, 3, a, b, c);
}, _emscripten_glOrtho:function(a, b, c, d, e, f) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.multiply(T[W], Z.h.Hc(a, b, c, d, e, f));
}, _emscripten_glPassThrough:function() {
  k("missing function: emscripten_glPassThrough");
  h(-1);
}, _emscripten_glPixelMapfv:function() {
  k("missing function: emscripten_glPixelMapfv");
  h(-1);
}, _emscripten_glPixelMapuiv:function() {
  k("missing function: emscripten_glPixelMapuiv");
  h(-1);
}, _emscripten_glPixelMapusv:function() {
  k("missing function: emscripten_glPixelMapusv");
  h(-1);
}, _emscripten_glPixelStoref:function() {
  k("missing function: emscripten_glPixelStoref");
  h(-1);
}, _emscripten_glPixelStorei:function(a, b) {
  3333 == a || 3317 == a && (yg = b);
  GLctx.pixelStorei(a, b);
}, _emscripten_glPixelTransferf:function() {
  k("missing function: emscripten_glPixelTransferf");
  h(-1);
}, _emscripten_glPixelTransferi:function() {
  k("missing function: emscripten_glPixelTransferi");
  h(-1);
}, _emscripten_glPixelZoom:function() {
  k("missing function: emscripten_glPixelZoom");
  h(-1);
}, _emscripten_glPointParameterf:function() {
  k("missing function: emscripten_glPointParameterf");
  h(-1);
}, _emscripten_glPointParameterfv:function() {
  k("missing function: emscripten_glPointParameterfv");
  h(-1);
}, _emscripten_glPointParameteri:function() {
  k("missing function: emscripten_glPointParameteri");
  h(-1);
}, _emscripten_glPointParameteriv:function() {
  k("missing function: emscripten_glPointParameteriv");
  h(-1);
}, _emscripten_glPointSize:function() {
  k("missing function: emscripten_glPointSize");
  h(-1);
}, _emscripten_glPolygonMode:function() {
}, _emscripten_glPolygonOffset:function(a, b) {
  GLctx.polygonOffset(a, b);
}, _emscripten_glPolygonStipple:function() {
  k("missing function: emscripten_glPolygonStipple");
  h(-1);
}, _emscripten_glPopAttrib:function() {
  k("missing function: emscripten_glPopAttrib");
  h(-1);
}, _emscripten_glPopClientAttrib:function() {
  k("missing function: emscripten_glPopClientAttrib");
  h(-1);
}, _emscripten_glPopMatrix:function() {
  0 == li[W].length ? P(1284) : (X = !0, Y[W] = Y[W] + 1 | 0, T[W] = li[W].pop());
}, _emscripten_glPopName:function() {
  k("missing function: emscripten_glPopName");
  h(-1);
}, _emscripten_glPrimitiveRestartIndex:function() {
  k("missing function: emscripten_glPrimitiveRestartIndex");
  h(-1);
}, _emscripten_glPrioritizeTextures:function() {
  k("missing function: emscripten_glPrioritizeTextures");
  h(-1);
}, _emscripten_glProgramEnvParameter4dARB:function() {
  k("missing function: emscripten_glProgramEnvParameter4dARB");
  h(-1);
}, _emscripten_glProgramEnvParameter4dvARB:function() {
  k("missing function: emscripten_glProgramEnvParameter4dvARB");
  h(-1);
}, _emscripten_glProgramEnvParameter4fARB:function() {
  k("missing function: emscripten_glProgramEnvParameter4fARB");
  h(-1);
}, _emscripten_glProgramEnvParameter4fvARB:function() {
  k("missing function: emscripten_glProgramEnvParameter4fvARB");
  h(-1);
}, _emscripten_glProgramLocalParameter4dARB:function() {
  k("missing function: emscripten_glProgramLocalParameter4dARB");
  h(-1);
}, _emscripten_glProgramLocalParameter4dvARB:function() {
  k("missing function: emscripten_glProgramLocalParameter4dvARB");
  h(-1);
}, _emscripten_glProgramLocalParameter4fARB:function() {
  k("missing function: emscripten_glProgramLocalParameter4fARB");
  h(-1);
}, _emscripten_glProgramLocalParameter4fvARB:function() {
  k("missing function: emscripten_glProgramLocalParameter4fvARB");
  h(-1);
}, _emscripten_glProgramStringARB:function() {
  k("missing function: emscripten_glProgramStringARB");
  h(-1);
}, _emscripten_glPushAttrib:function() {
  k("missing function: emscripten_glPushAttrib");
  h(-1);
}, _emscripten_glPushClientAttrib:function() {
  k("missing function: emscripten_glPushClientAttrib");
  h(-1);
}, _emscripten_glPushMatrix:function() {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  li[W].push(Array.prototype.slice.call(T[W]));
}, _emscripten_glPushName:function() {
  k("missing function: emscripten_glPushName");
  h(-1);
}, _emscripten_glRasterPos2d:function() {
  k("missing function: emscripten_glRasterPos2d");
  h(-1);
}, _emscripten_glRasterPos2dv:function() {
  k("missing function: emscripten_glRasterPos2dv");
  h(-1);
}, _emscripten_glRasterPos2f:function() {
  k("missing function: emscripten_glRasterPos2f");
  h(-1);
}, _emscripten_glRasterPos2fv:function() {
  k("missing function: emscripten_glRasterPos2fv");
  h(-1);
}, _emscripten_glRasterPos2i:function() {
  k("missing function: emscripten_glRasterPos2i");
  h(-1);
}, _emscripten_glRasterPos2iv:function() {
  k("missing function: emscripten_glRasterPos2iv");
  h(-1);
}, _emscripten_glRasterPos2s:function() {
  k("missing function: emscripten_glRasterPos2s");
  h(-1);
}, _emscripten_glRasterPos2sv:function() {
  k("missing function: emscripten_glRasterPos2sv");
  h(-1);
}, _emscripten_glRasterPos3d:function() {
  k("missing function: emscripten_glRasterPos3d");
  h(-1);
}, _emscripten_glRasterPos3dv:function() {
  k("missing function: emscripten_glRasterPos3dv");
  h(-1);
}, _emscripten_glRasterPos3f:function() {
  k("missing function: emscripten_glRasterPos3f");
  h(-1);
}, _emscripten_glRasterPos3fv:function() {
  k("missing function: emscripten_glRasterPos3fv");
  h(-1);
}, _emscripten_glRasterPos3i:function() {
  k("missing function: emscripten_glRasterPos3i");
  h(-1);
}, _emscripten_glRasterPos3iv:function() {
  k("missing function: emscripten_glRasterPos3iv");
  h(-1);
}, _emscripten_glRasterPos3s:function() {
  k("missing function: emscripten_glRasterPos3s");
  h(-1);
}, _emscripten_glRasterPos3sv:function() {
  k("missing function: emscripten_glRasterPos3sv");
  h(-1);
}, _emscripten_glRasterPos4d:function() {
  k("missing function: emscripten_glRasterPos4d");
  h(-1);
}, _emscripten_glRasterPos4dv:function() {
  k("missing function: emscripten_glRasterPos4dv");
  h(-1);
}, _emscripten_glRasterPos4f:function() {
  k("missing function: emscripten_glRasterPos4f");
  h(-1);
}, _emscripten_glRasterPos4fv:function() {
  k("missing function: emscripten_glRasterPos4fv");
  h(-1);
}, _emscripten_glRasterPos4i:function() {
  k("missing function: emscripten_glRasterPos4i");
  h(-1);
}, _emscripten_glRasterPos4iv:function() {
  k("missing function: emscripten_glRasterPos4iv");
  h(-1);
}, _emscripten_glRasterPos4s:function() {
  k("missing function: emscripten_glRasterPos4s");
  h(-1);
}, _emscripten_glRasterPos4sv:function() {
  k("missing function: emscripten_glRasterPos4sv");
  h(-1);
}, _emscripten_glReadBuffer:function() {
  throw "glReadBuffer: TODO";
}, _emscripten_glReadPixels:function(a, b, c, d, e, f, l) {
  (l = Xi(f, e, c, d, l)) ? GLctx.readPixels(a, b, c, d, e, f, l) : P(1280);
}, _emscripten_glRectd:function() {
  k("missing function: emscripten_glRectd");
  h(-1);
}, _emscripten_glRectdv:function() {
  k("missing function: emscripten_glRectdv");
  h(-1);
}, _emscripten_glRectf:function() {
  k("missing function: emscripten_glRectf");
  h(-1);
}, _emscripten_glRectfv:function() {
  k("missing function: emscripten_glRectfv");
  h(-1);
}, _emscripten_glRecti:function() {
  k("missing function: emscripten_glRecti");
  h(-1);
}, _emscripten_glRectiv:function() {
  k("missing function: emscripten_glRectiv");
  h(-1);
}, _emscripten_glRects:function() {
  k("missing function: emscripten_glRects");
  h(-1);
}, _emscripten_glRectsv:function() {
  k("missing function: emscripten_glRectsv");
  h(-1);
}, _emscripten_glReleaseShaderCompiler:function() {
}, _emscripten_glRenderMode:function() {
  k("missing function: emscripten_glRenderMode");
  h(-1);
}, _emscripten_glRenderbufferStorage:function(a, b, c, d) {
  GLctx.renderbufferStorage(a, b, c, d);
}, _emscripten_glRenderbufferStorageMultisample:function() {
  k("missing function: emscripten_glRenderbufferStorageMultisample");
  h(-1);
}, _emscripten_glResetHistogram:function() {
  k("missing function: emscripten_glResetHistogram");
  h(-1);
}, _emscripten_glResetMinmax:function() {
  k("missing function: emscripten_glResetMinmax");
  h(-1);
}, _emscripten_glRotated:function(a, b, c, d) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.rotate(T[W], a * Math.PI / 180, [b, c, d]);
}, _emscripten_glRotatef:function(a, b, c, d) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.rotate(T[W], a * Math.PI / 180, [b, c, d]);
}, _emscripten_glSampleCoverage:function(a, b) {
  GLctx.sampleCoverage(a, !!b);
}, _emscripten_glScaled:function(a, b, c) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.scale(T[W], [a, b, c]);
}, _emscripten_glScalef:function(a, b, c) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.scale(T[W], [a, b, c]);
}, _emscripten_glScissor:function(a, b, c, d) {
  GLctx.scissor(a, b, c, d);
}, _emscripten_glSecondaryColor3b:function() {
  k("missing function: emscripten_glSecondaryColor3b");
  h(-1);
}, _emscripten_glSecondaryColor3bv:function() {
  k("missing function: emscripten_glSecondaryColor3bv");
  h(-1);
}, _emscripten_glSecondaryColor3d:function() {
  k("missing function: emscripten_glSecondaryColor3d");
  h(-1);
}, _emscripten_glSecondaryColor3dv:function() {
  k("missing function: emscripten_glSecondaryColor3dv");
  h(-1);
}, _emscripten_glSecondaryColor3f:function() {
  k("missing function: emscripten_glSecondaryColor3f");
  h(-1);
}, _emscripten_glSecondaryColor3fv:function() {
  k("missing function: emscripten_glSecondaryColor3fv");
  h(-1);
}, _emscripten_glSecondaryColor3i:function() {
  k("missing function: emscripten_glSecondaryColor3i");
  h(-1);
}, _emscripten_glSecondaryColor3iv:function() {
  k("missing function: emscripten_glSecondaryColor3iv");
  h(-1);
}, _emscripten_glSecondaryColor3s:function() {
  k("missing function: emscripten_glSecondaryColor3s");
  h(-1);
}, _emscripten_glSecondaryColor3sv:function() {
  k("missing function: emscripten_glSecondaryColor3sv");
  h(-1);
}, _emscripten_glSecondaryColor3ub:function() {
  k("missing function: emscripten_glSecondaryColor3ub");
  h(-1);
}, _emscripten_glSecondaryColor3ubv:function() {
  k("missing function: emscripten_glSecondaryColor3ubv");
  h(-1);
}, _emscripten_glSecondaryColor3ui:function() {
  k("missing function: emscripten_glSecondaryColor3ui");
  h(-1);
}, _emscripten_glSecondaryColor3uiv:function() {
  k("missing function: emscripten_glSecondaryColor3uiv");
  h(-1);
}, _emscripten_glSecondaryColor3us:function() {
  k("missing function: emscripten_glSecondaryColor3us");
  h(-1);
}, _emscripten_glSecondaryColor3usv:function() {
  k("missing function: emscripten_glSecondaryColor3usv");
  h(-1);
}, _emscripten_glSecondaryColorPointer:function() {
  k("missing function: emscripten_glSecondaryColorPointer");
  h(-1);
}, _emscripten_glSelectBuffer:function() {
  k("missing function: emscripten_glSelectBuffer");
  h(-1);
}, _emscripten_glSeparableFilter2D:function() {
  k("missing function: emscripten_glSeparableFilter2D");
  h(-1);
}, _emscripten_glShadeModel:function() {
  Fa("TODO: glShadeModel");
}, _emscripten_glShaderBinary:function() {
  P(1280);
}, _emscripten_glShaderSource:_emscripten_glShaderSource, _emscripten_glShaderSourceARB:function() {
  k("missing function: emscripten_glShaderSourceARB");
  h(-1);
}, _emscripten_glStencilFunc:function(a, b, c) {
  GLctx.stencilFunc(a, b, c);
}, _emscripten_glStencilFuncSeparate:function(a, b, c, d) {
  GLctx.stencilFuncSeparate(a, b, c, d);
}, _emscripten_glStencilMask:function(a) {
  GLctx.stencilMask(a);
}, _emscripten_glStencilMaskSeparate:function(a, b) {
  GLctx.stencilMaskSeparate(a, b);
}, _emscripten_glStencilOp:function(a, b, c) {
  GLctx.stencilOp(a, b, c);
}, _emscripten_glStencilOpSeparate:function(a, b, c, d) {
  GLctx.stencilOpSeparate(a, b, c, d);
}, _emscripten_glTexBuffer:function() {
  k("missing function: emscripten_glTexBuffer");
  h(-1);
}, _emscripten_glTexCoord1d:function() {
  k("missing function: emscripten_glTexCoord1d");
  h(-1);
}, _emscripten_glTexCoord1dv:function() {
  k("missing function: emscripten_glTexCoord1dv");
  h(-1);
}, _emscripten_glTexCoord1f:function() {
  k("missing function: emscripten_glTexCoord1f");
  h(-1);
}, _emscripten_glTexCoord1fv:function() {
  k("missing function: emscripten_glTexCoord1fv");
  h(-1);
}, _emscripten_glTexCoord1i:function() {
  k("missing function: emscripten_glTexCoord1i");
  h(-1);
}, _emscripten_glTexCoord1iv:function() {
  k("missing function: emscripten_glTexCoord1iv");
  h(-1);
}, _emscripten_glTexCoord1s:function() {
  k("missing function: emscripten_glTexCoord1s");
  h(-1);
}, _emscripten_glTexCoord1sv:function() {
  k("missing function: emscripten_glTexCoord1sv");
  h(-1);
}, _emscripten_glTexCoord2d:function() {
  k("missing function: emscripten_glTexCoord2d");
  h(-1);
}, _emscripten_glTexCoord2dv:function() {
  k("missing function: emscripten_glTexCoord2dv");
  h(-1);
}, _emscripten_glTexCoord2f:function(a, b) {
  U[V++] = a;
  U[V++] = b;
  ti(Vh, 2, GLctx.FLOAT);
}, _emscripten_glTexCoord2fv:function(a) {
  Yi(z[a >> 2], z[a + 4 >> 2]);
}, _emscripten_glTexCoord2i:Yi, _emscripten_glTexCoord2iv:function() {
  k("missing function: emscripten_glTexCoord2iv");
  h(-1);
}, _emscripten_glTexCoord2s:function() {
  k("missing function: emscripten_glTexCoord2s");
  h(-1);
}, _emscripten_glTexCoord2sv:function() {
  k("missing function: emscripten_glTexCoord2sv");
  h(-1);
}, _emscripten_glTexCoord3d:function() {
  k("missing function: emscripten_glTexCoord3d");
  h(-1);
}, _emscripten_glTexCoord3dv:function() {
  k("missing function: emscripten_glTexCoord3dv");
  h(-1);
}, _emscripten_glTexCoord3f:function() {
  throw "glTexCoord3f: TODO";
}, _emscripten_glTexCoord3fv:function() {
  k("missing function: emscripten_glTexCoord3fv");
  h(-1);
}, _emscripten_glTexCoord3i:function() {
  k("missing function: emscripten_glTexCoord3i");
  h(-1);
}, _emscripten_glTexCoord3iv:function() {
  k("missing function: emscripten_glTexCoord3iv");
  h(-1);
}, _emscripten_glTexCoord3s:function() {
  k("missing function: emscripten_glTexCoord3s");
  h(-1);
}, _emscripten_glTexCoord3sv:function() {
  k("missing function: emscripten_glTexCoord3sv");
  h(-1);
}, _emscripten_glTexCoord4d:function() {
  k("missing function: emscripten_glTexCoord4d");
  h(-1);
}, _emscripten_glTexCoord4dv:function() {
  k("missing function: emscripten_glTexCoord4dv");
  h(-1);
}, _emscripten_glTexCoord4f:function() {
  throw "glTexCoord4f: TODO";
}, _emscripten_glTexCoord4fv:function() {
  k("missing function: emscripten_glTexCoord4fv");
  h(-1);
}, _emscripten_glTexCoord4i:function() {
  k("missing function: emscripten_glTexCoord4i");
  h(-1);
}, _emscripten_glTexCoord4iv:function() {
  k("missing function: emscripten_glTexCoord4iv");
  h(-1);
}, _emscripten_glTexCoord4s:function() {
  k("missing function: emscripten_glTexCoord4s");
  h(-1);
}, _emscripten_glTexCoord4sv:function() {
  k("missing function: emscripten_glTexCoord4sv");
  h(-1);
}, _emscripten_glTexCoordPointer:function(a, b, c, d) {
  si(Vh + Wh, a, b, c, d);
}, _emscripten_glTexEnvf:_emscripten_glTexEnvf, _emscripten_glTexEnvfv:_emscripten_glTexEnvfv, _emscripten_glTexEnvi:_emscripten_glTexEnvi, _emscripten_glTexEnviv:function() {
  k("missing function: emscripten_glTexEnviv");
  h(-1);
}, _emscripten_glTexGend:function() {
  k("missing function: emscripten_glTexGend");
  h(-1);
}, _emscripten_glTexGendv:function() {
  k("missing function: emscripten_glTexGendv");
  h(-1);
}, _emscripten_glTexGenf:function() {
  k("missing function: emscripten_glTexGenf");
  h(-1);
}, _emscripten_glTexGenfv:function() {
  throw "glTexGenfv: TODO";
}, _emscripten_glTexGeni:function() {
  throw "glTexGeni: TODO";
}, _emscripten_glTexGeniv:function() {
  k("missing function: emscripten_glTexGeniv");
  h(-1);
}, _emscripten_glTexImage1D:function() {
  throw "glTexImage1D: TODO";
}, _emscripten_glTexImage2D:function(a, b, c, d, e, f, l, n, p) {
  var u = null;
  p && (u = Xi(n, l, d, e, p));
  GLctx.texImage2D(a, b, c, d, e, f, l, n, u);
}, _emscripten_glTexImage3D:function() {
  k("missing function: emscripten_glTexImage3D");
  h(-1);
}, _emscripten_glTexParameterIiv:function() {
  k("missing function: emscripten_glTexParameterIiv");
  h(-1);
}, _emscripten_glTexParameterIuiv:function() {
  k("missing function: emscripten_glTexParameterIuiv");
  h(-1);
}, _emscripten_glTexParameterf:function(a, b, c) {
  GLctx.texParameterf(a, b, c);
}, _emscripten_glTexParameterfv:function(a, b, c) {
  GLctx.texParameterf(a, b, z[c >> 2]);
}, _emscripten_glTexParameteri:function(a, b, c) {
  GLctx.texParameteri(a, b, c);
}, _emscripten_glTexParameteriv:function(a, b, c) {
  GLctx.texParameteri(a, b, m[c >> 2]);
}, _emscripten_glTexStorage2D:function() {
  k("missing function: emscripten_glTexStorage2D");
  h(-1);
}, _emscripten_glTexStorage3D:function() {
  k("missing function: emscripten_glTexStorage3D");
  h(-1);
}, _emscripten_glTexSubImage1D:function() {
  k("missing function: emscripten_glTexSubImage1D");
  h(-1);
}, _emscripten_glTexSubImage2D:function(a, b, c, d, e, f, l, n, p) {
  var u = null;
  p && (u = Xi(n, l, e, f, p));
  GLctx.texSubImage2D(a, b, c, d, e, f, l, n, u);
}, _emscripten_glTexSubImage3D:function() {
  k("missing function: emscripten_glTexSubImage3D");
  h(-1);
}, _emscripten_glTransformFeedbackVaryings:function() {
  k("missing function: emscripten_glTransformFeedbackVaryings");
  h(-1);
}, _emscripten_glTranslated:function(a, b, c) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.translate(T[W], [a, b, c]);
}, _emscripten_glTranslatef:function(a, b, c) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.translate(T[W], [a, b, c]);
}, _emscripten_glUniform1f:function(a, b) {
  GLctx.uniform1f(rg[a], b);
}, _emscripten_glUniform1fARB:function() {
  k("missing function: emscripten_glUniform1fARB");
  h(-1);
}, _emscripten_glUniform1fv:function(a, b, c) {
  if (256 >= b) {
    var d = Bg[b - 1];
    for (var e = 0; e < b; ++e) {
      d[e] = z[c + 4 * e >> 2];
    }
  } else {
    d = z.subarray(c >> 2, c + 4 * b >> 2);
  }
  GLctx.uniform1fv(rg[a], d);
}, _emscripten_glUniform1fvARB:function() {
  k("missing function: emscripten_glUniform1fvARB");
  h(-1);
}, _emscripten_glUniform1i:function(a, b) {
  GLctx.uniform1i(rg[a], b);
}, _emscripten_glUniform1iARB:function() {
  k("missing function: emscripten_glUniform1iARB");
  h(-1);
}, _emscripten_glUniform1iv:function(a, b, c) {
  GLctx.uniform1iv(rg[a], m.subarray(c >> 2, c + 4 * b >> 2));
}, _emscripten_glUniform1ivARB:function() {
  k("missing function: emscripten_glUniform1ivARB");
  h(-1);
}, _emscripten_glUniform1ui:function() {
  k("missing function: emscripten_glUniform1ui");
  h(-1);
}, _emscripten_glUniform1uiv:function() {
  k("missing function: emscripten_glUniform1uiv");
  h(-1);
}, _emscripten_glUniform2f:function(a, b, c) {
  GLctx.uniform2f(rg[a], b, c);
}, _emscripten_glUniform2fARB:function() {
  k("missing function: emscripten_glUniform2fARB");
  h(-1);
}, _emscripten_glUniform2fv:function(a, b, c) {
  if (256 >= 2 * b) {
    var d = Bg[2 * b - 1];
    for (var e = 0; e < 2 * b; e += 2) {
      d[e] = z[c + 4 * e >> 2], d[e + 1] = z[c + (4 * e + 4) >> 2];
    }
  } else {
    d = z.subarray(c >> 2, c + 8 * b >> 2);
  }
  GLctx.uniform2fv(rg[a], d);
}, _emscripten_glUniform2fvARB:function() {
  k("missing function: emscripten_glUniform2fvARB");
  h(-1);
}, _emscripten_glUniform2i:function(a, b, c) {
  GLctx.uniform2i(rg[a], b, c);
}, _emscripten_glUniform2iARB:function() {
  k("missing function: emscripten_glUniform2iARB");
  h(-1);
}, _emscripten_glUniform2iv:function(a, b, c) {
  GLctx.uniform2iv(rg[a], m.subarray(c >> 2, c + 8 * b >> 2));
}, _emscripten_glUniform2ivARB:function() {
  k("missing function: emscripten_glUniform2ivARB");
  h(-1);
}, _emscripten_glUniform2ui:function() {
  k("missing function: emscripten_glUniform2ui");
  h(-1);
}, _emscripten_glUniform2uiv:function() {
  k("missing function: emscripten_glUniform2uiv");
  h(-1);
}, _emscripten_glUniform3f:function(a, b, c, d) {
  GLctx.uniform3f(rg[a], b, c, d);
}, _emscripten_glUniform3fARB:function() {
  k("missing function: emscripten_glUniform3fARB");
  h(-1);
}, _emscripten_glUniform3fv:function(a, b, c) {
  if (256 >= 3 * b) {
    var d = Bg[3 * b - 1];
    for (var e = 0; e < 3 * b; e += 3) {
      d[e] = z[c + 4 * e >> 2], d[e + 1] = z[c + (4 * e + 4) >> 2], d[e + 2] = z[c + (4 * e + 8) >> 2];
    }
  } else {
    d = z.subarray(c >> 2, c + 12 * b >> 2);
  }
  GLctx.uniform3fv(rg[a], d);
}, _emscripten_glUniform3fvARB:function() {
  k("missing function: emscripten_glUniform3fvARB");
  h(-1);
}, _emscripten_glUniform3i:function(a, b, c, d) {
  GLctx.uniform3i(rg[a], b, c, d);
}, _emscripten_glUniform3iARB:function() {
  k("missing function: emscripten_glUniform3iARB");
  h(-1);
}, _emscripten_glUniform3iv:function(a, b, c) {
  GLctx.uniform3iv(rg[a], m.subarray(c >> 2, c + 12 * b >> 2));
}, _emscripten_glUniform3ivARB:function() {
  k("missing function: emscripten_glUniform3ivARB");
  h(-1);
}, _emscripten_glUniform3ui:function() {
  k("missing function: emscripten_glUniform3ui");
  h(-1);
}, _emscripten_glUniform3uiv:function() {
  k("missing function: emscripten_glUniform3uiv");
  h(-1);
}, _emscripten_glUniform4f:function(a, b, c, d, e) {
  GLctx.uniform4f(rg[a], b, c, d, e);
}, _emscripten_glUniform4fARB:function() {
  k("missing function: emscripten_glUniform4fARB");
  h(-1);
}, _emscripten_glUniform4fv:function(a, b, c) {
  if (256 >= 4 * b) {
    var d = Bg[4 * b - 1];
    for (var e = 0; e < 4 * b; e += 4) {
      d[e] = z[c + 4 * e >> 2], d[e + 1] = z[c + (4 * e + 4) >> 2], d[e + 2] = z[c + (4 * e + 8) >> 2], d[e + 3] = z[c + (4 * e + 12) >> 2];
    }
  } else {
    d = z.subarray(c >> 2, c + 16 * b >> 2);
  }
  GLctx.uniform4fv(rg[a], d);
}, _emscripten_glUniform4fvARB:function() {
  k("missing function: emscripten_glUniform4fvARB");
  h(-1);
}, _emscripten_glUniform4i:function(a, b, c, d, e) {
  GLctx.uniform4i(rg[a], b, c, d, e);
}, _emscripten_glUniform4iARB:function() {
  k("missing function: emscripten_glUniform4iARB");
  h(-1);
}, _emscripten_glUniform4iv:function(a, b, c) {
  GLctx.uniform4iv(rg[a], m.subarray(c >> 2, c + 16 * b >> 2));
}, _emscripten_glUniform4ivARB:function() {
  k("missing function: emscripten_glUniform4ivARB");
  h(-1);
}, _emscripten_glUniform4ui:function() {
  k("missing function: emscripten_glUniform4ui");
  h(-1);
}, _emscripten_glUniform4uiv:function() {
  k("missing function: emscripten_glUniform4uiv");
  h(-1);
}, _emscripten_glUniformBlockBinding:function() {
  k("missing function: emscripten_glUniformBlockBinding");
  h(-1);
}, _emscripten_glUniformMatrix2fv:function(a, b, c, d) {
  if (256 >= 4 * b) {
    var e = Bg[4 * b - 1];
    for (var f = 0; f < 4 * b; f += 4) {
      e[f] = z[d + 4 * f >> 2], e[f + 1] = z[d + (4 * f + 4) >> 2], e[f + 2] = z[d + (4 * f + 8) >> 2], e[f + 3] = z[d + (4 * f + 12) >> 2];
    }
  } else {
    e = z.subarray(d >> 2, d + 16 * b >> 2);
  }
  GLctx.uniformMatrix2fv(rg[a], !!c, e);
}, _emscripten_glUniformMatrix2fvARB:function() {
  k("missing function: emscripten_glUniformMatrix2fvARB");
  h(-1);
}, _emscripten_glUniformMatrix2x3fv:function() {
  k("missing function: emscripten_glUniformMatrix2x3fv");
  h(-1);
}, _emscripten_glUniformMatrix2x4fv:function() {
  k("missing function: emscripten_glUniformMatrix2x4fv");
  h(-1);
}, _emscripten_glUniformMatrix3fv:function(a, b, c, d) {
  if (256 >= 9 * b) {
    var e = Bg[9 * b - 1];
    for (var f = 0; f < 9 * b; f += 9) {
      e[f] = z[d + 4 * f >> 2], e[f + 1] = z[d + (4 * f + 4) >> 2], e[f + 2] = z[d + (4 * f + 8) >> 2], e[f + 3] = z[d + (4 * f + 12) >> 2], e[f + 4] = z[d + (4 * f + 16) >> 2], e[f + 5] = z[d + (4 * f + 20) >> 2], e[f + 6] = z[d + (4 * f + 24) >> 2], e[f + 7] = z[d + (4 * f + 28) >> 2], e[f + 8] = z[d + (4 * f + 32) >> 2];
    }
  } else {
    e = z.subarray(d >> 2, d + 36 * b >> 2);
  }
  GLctx.uniformMatrix3fv(rg[a], !!c, e);
}, _emscripten_glUniformMatrix3fvARB:function() {
  k("missing function: emscripten_glUniformMatrix3fvARB");
  h(-1);
}, _emscripten_glUniformMatrix3x2fv:function() {
  k("missing function: emscripten_glUniformMatrix3x2fv");
  h(-1);
}, _emscripten_glUniformMatrix3x4fv:function() {
  k("missing function: emscripten_glUniformMatrix3x4fv");
  h(-1);
}, _emscripten_glUniformMatrix4fv:function(a, b, c, d) {
  if (256 >= 16 * b) {
    var e = Bg[16 * b - 1];
    for (var f = 0; f < 16 * b; f += 16) {
      e[f] = z[d + 4 * f >> 2], e[f + 1] = z[d + (4 * f + 4) >> 2], e[f + 2] = z[d + (4 * f + 8) >> 2], e[f + 3] = z[d + (4 * f + 12) >> 2], e[f + 4] = z[d + (4 * f + 16) >> 2], e[f + 5] = z[d + (4 * f + 20) >> 2], e[f + 6] = z[d + (4 * f + 24) >> 2], e[f + 7] = z[d + (4 * f + 28) >> 2], e[f + 8] = z[d + (4 * f + 32) >> 2], e[f + 9] = z[d + (4 * f + 36) >> 2], e[f + 10] = z[d + (4 * f + 40) >> 2], e[f + 11] = z[d + (4 * f + 44) >> 2], e[f + 12] = z[d + (4 * f + 48) >> 2], e[f + 13] = z[d + (4 * f + 
      52) >> 2], e[f + 14] = z[d + (4 * f + 56) >> 2], e[f + 15] = z[d + (4 * f + 60) >> 2];
    }
  } else {
    e = z.subarray(d >> 2, d + 64 * b >> 2);
  }
  GLctx.uniformMatrix4fv(rg[a], !!c, e);
}, _emscripten_glUniformMatrix4fvARB:function() {
  k("missing function: emscripten_glUniformMatrix4fvARB");
  h(-1);
}, _emscripten_glUniformMatrix4x2fv:function() {
  k("missing function: emscripten_glUniformMatrix4x2fv");
  h(-1);
}, _emscripten_glUniformMatrix4x3fv:function() {
  k("missing function: emscripten_glUniformMatrix4x3fv");
  h(-1);
}, _emscripten_glUnmapBuffer:function() {
  k("missing function: emscripten_glUnmapBuffer");
  h(-1);
}, _emscripten_glUnmapBufferARB:function() {
  k("missing function: emscripten_glUnmapBufferARB");
  h(-1);
}, _emscripten_glUseProgram:_emscripten_glUseProgram, _emscripten_glUseProgramObjectARB:function() {
  k("missing function: emscripten_glUseProgramObjectARB");
  h(-1);
}, _emscripten_glValidateProgram:function(a) {
  GLctx.validateProgram(N[a]);
}, _emscripten_glValidateProgramARB:function() {
  k("missing function: emscripten_glValidateProgramARB");
  h(-1);
}, _emscripten_glVertex2d:function() {
  k("missing function: emscripten_glVertex2d");
  h(-1);
}, _emscripten_glVertex2dv:function() {
  k("missing function: emscripten_glVertex2dv");
  h(-1);
}, _emscripten_glVertex2f:function(a, b, c) {
  U[V++] = a;
  U[V++] = b;
  U[V++] = c || 0;
  ti(Th, 3, GLctx.FLOAT);
}, _emscripten_glVertex2fv:function(a) {
  Zi(z[a >> 2], z[a + 4 >> 2], 0);
}, _emscripten_glVertex2i:function(a, b, c) {
  U[V++] = a;
  U[V++] = b;
  U[V++] = c || 0;
  ti(Th, 3, GLctx.FLOAT);
}, _emscripten_glVertex2iv:function() {
  k("missing function: emscripten_glVertex2iv");
  h(-1);
}, _emscripten_glVertex2s:function() {
  k("missing function: emscripten_glVertex2s");
  h(-1);
}, _emscripten_glVertex2sv:function() {
  k("missing function: emscripten_glVertex2sv");
  h(-1);
}, _emscripten_glVertex3d:function() {
  k("missing function: emscripten_glVertex3d");
  h(-1);
}, _emscripten_glVertex3dv:function() {
  k("missing function: emscripten_glVertex3dv");
  h(-1);
}, _emscripten_glVertex3f:Zi, _emscripten_glVertex3fv:function(a) {
  Zi(z[a >> 2], z[a + 4 >> 2], z[a + 8 >> 2]);
}, _emscripten_glVertex3i:function(a, b, c) {
  U[V++] = a;
  U[V++] = b;
  U[V++] = c || 0;
  ti(Th, 3, GLctx.FLOAT);
}, _emscripten_glVertex3iv:function() {
  k("missing function: emscripten_glVertex3iv");
  h(-1);
}, _emscripten_glVertex3s:function() {
  k("missing function: emscripten_glVertex3s");
  h(-1);
}, _emscripten_glVertex3sv:function() {
  k("missing function: emscripten_glVertex3sv");
  h(-1);
}, _emscripten_glVertex4d:function() {
  k("missing function: emscripten_glVertex4d");
  h(-1);
}, _emscripten_glVertex4dv:function() {
  k("missing function: emscripten_glVertex4dv");
  h(-1);
}, _emscripten_glVertex4f:function() {
  k("missing function: emscripten_glVertex4f");
  h(-1);
}, _emscripten_glVertex4fv:function() {
  k("missing function: emscripten_glVertex4fv");
  h(-1);
}, _emscripten_glVertex4i:function() {
  k("missing function: emscripten_glVertex4i");
  h(-1);
}, _emscripten_glVertex4iv:function() {
  k("missing function: emscripten_glVertex4iv");
  h(-1);
}, _emscripten_glVertex4s:function() {
  k("missing function: emscripten_glVertex4s");
  h(-1);
}, _emscripten_glVertex4sv:function() {
  k("missing function: emscripten_glVertex4sv");
  h(-1);
}, _emscripten_glVertexAttrib1d:function() {
  k("missing function: emscripten_glVertexAttrib1d");
  h(-1);
}, _emscripten_glVertexAttrib1dARB:function() {
  k("missing function: emscripten_glVertexAttrib1dARB");
  h(-1);
}, _emscripten_glVertexAttrib1dv:function() {
  k("missing function: emscripten_glVertexAttrib1dv");
  h(-1);
}, _emscripten_glVertexAttrib1dvARB:function() {
  k("missing function: emscripten_glVertexAttrib1dvARB");
  h(-1);
}, _emscripten_glVertexAttrib1f:function(a, b) {
  GLctx.vertexAttrib1f(a, b);
}, _emscripten_glVertexAttrib1fARB:function() {
  k("missing function: emscripten_glVertexAttrib1fARB");
  h(-1);
}, _emscripten_glVertexAttrib1fv:function(a, b) {
  GLctx.vertexAttrib1f(a, z[b >> 2]);
}, _emscripten_glVertexAttrib1fvARB:function() {
  k("missing function: emscripten_glVertexAttrib1fvARB");
  h(-1);
}, _emscripten_glVertexAttrib1s:function() {
  k("missing function: emscripten_glVertexAttrib1s");
  h(-1);
}, _emscripten_glVertexAttrib1sARB:function() {
  k("missing function: emscripten_glVertexAttrib1sARB");
  h(-1);
}, _emscripten_glVertexAttrib1sv:function() {
  k("missing function: emscripten_glVertexAttrib1sv");
  h(-1);
}, _emscripten_glVertexAttrib1svARB:function() {
  k("missing function: emscripten_glVertexAttrib1svARB");
  h(-1);
}, _emscripten_glVertexAttrib2d:function() {
  k("missing function: emscripten_glVertexAttrib2d");
  h(-1);
}, _emscripten_glVertexAttrib2dARB:function() {
  k("missing function: emscripten_glVertexAttrib2dARB");
  h(-1);
}, _emscripten_glVertexAttrib2dv:function() {
  k("missing function: emscripten_glVertexAttrib2dv");
  h(-1);
}, _emscripten_glVertexAttrib2dvARB:function() {
  k("missing function: emscripten_glVertexAttrib2dvARB");
  h(-1);
}, _emscripten_glVertexAttrib2f:function(a, b, c) {
  GLctx.vertexAttrib2f(a, b, c);
}, _emscripten_glVertexAttrib2fARB:function() {
  k("missing function: emscripten_glVertexAttrib2fARB");
  h(-1);
}, _emscripten_glVertexAttrib2fv:function(a, b) {
  GLctx.vertexAttrib2f(a, z[b >> 2], z[b + 4 >> 2]);
}, _emscripten_glVertexAttrib2fvARB:function() {
  k("missing function: emscripten_glVertexAttrib2fvARB");
  h(-1);
}, _emscripten_glVertexAttrib2s:function() {
  k("missing function: emscripten_glVertexAttrib2s");
  h(-1);
}, _emscripten_glVertexAttrib2sARB:function() {
  k("missing function: emscripten_glVertexAttrib2sARB");
  h(-1);
}, _emscripten_glVertexAttrib2sv:function() {
  k("missing function: emscripten_glVertexAttrib2sv");
  h(-1);
}, _emscripten_glVertexAttrib2svARB:function() {
  k("missing function: emscripten_glVertexAttrib2svARB");
  h(-1);
}, _emscripten_glVertexAttrib3d:function() {
  k("missing function: emscripten_glVertexAttrib3d");
  h(-1);
}, _emscripten_glVertexAttrib3dARB:function() {
  k("missing function: emscripten_glVertexAttrib3dARB");
  h(-1);
}, _emscripten_glVertexAttrib3dv:function() {
  k("missing function: emscripten_glVertexAttrib3dv");
  h(-1);
}, _emscripten_glVertexAttrib3dvARB:function() {
  k("missing function: emscripten_glVertexAttrib3dvARB");
  h(-1);
}, _emscripten_glVertexAttrib3f:function(a, b, c, d) {
  GLctx.vertexAttrib3f(a, b, c, d);
}, _emscripten_glVertexAttrib3fARB:function() {
  k("missing function: emscripten_glVertexAttrib3fARB");
  h(-1);
}, _emscripten_glVertexAttrib3fv:function(a, b) {
  GLctx.vertexAttrib3f(a, z[b >> 2], z[b + 4 >> 2], z[b + 8 >> 2]);
}, _emscripten_glVertexAttrib3fvARB:function() {
  k("missing function: emscripten_glVertexAttrib3fvARB");
  h(-1);
}, _emscripten_glVertexAttrib3s:function() {
  k("missing function: emscripten_glVertexAttrib3s");
  h(-1);
}, _emscripten_glVertexAttrib3sARB:function() {
  k("missing function: emscripten_glVertexAttrib3sARB");
  h(-1);
}, _emscripten_glVertexAttrib3sv:function() {
  k("missing function: emscripten_glVertexAttrib3sv");
  h(-1);
}, _emscripten_glVertexAttrib3svARB:function() {
  k("missing function: emscripten_glVertexAttrib3svARB");
  h(-1);
}, _emscripten_glVertexAttrib4Nbv:function() {
  k("missing function: emscripten_glVertexAttrib4Nbv");
  h(-1);
}, _emscripten_glVertexAttrib4NbvARB:function() {
  k("missing function: emscripten_glVertexAttrib4NbvARB");
  h(-1);
}, _emscripten_glVertexAttrib4Niv:function() {
  k("missing function: emscripten_glVertexAttrib4Niv");
  h(-1);
}, _emscripten_glVertexAttrib4NivARB:function() {
  k("missing function: emscripten_glVertexAttrib4NivARB");
  h(-1);
}, _emscripten_glVertexAttrib4Nsv:function() {
  k("missing function: emscripten_glVertexAttrib4Nsv");
  h(-1);
}, _emscripten_glVertexAttrib4NsvARB:function() {
  k("missing function: emscripten_glVertexAttrib4NsvARB");
  h(-1);
}, _emscripten_glVertexAttrib4Nub:function() {
  k("missing function: emscripten_glVertexAttrib4Nub");
  h(-1);
}, _emscripten_glVertexAttrib4NubARB:function() {
  k("missing function: emscripten_glVertexAttrib4NubARB");
  h(-1);
}, _emscripten_glVertexAttrib4Nubv:function() {
  k("missing function: emscripten_glVertexAttrib4Nubv");
  h(-1);
}, _emscripten_glVertexAttrib4NubvARB:function() {
  k("missing function: emscripten_glVertexAttrib4NubvARB");
  h(-1);
}, _emscripten_glVertexAttrib4Nuiv:function() {
  k("missing function: emscripten_glVertexAttrib4Nuiv");
  h(-1);
}, _emscripten_glVertexAttrib4NuivARB:function() {
  k("missing function: emscripten_glVertexAttrib4NuivARB");
  h(-1);
}, _emscripten_glVertexAttrib4Nusv:function() {
  k("missing function: emscripten_glVertexAttrib4Nusv");
  h(-1);
}, _emscripten_glVertexAttrib4NusvARB:function() {
  k("missing function: emscripten_glVertexAttrib4NusvARB");
  h(-1);
}, _emscripten_glVertexAttrib4bv:function() {
  k("missing function: emscripten_glVertexAttrib4bv");
  h(-1);
}, _emscripten_glVertexAttrib4bvARB:function() {
  k("missing function: emscripten_glVertexAttrib4bvARB");
  h(-1);
}, _emscripten_glVertexAttrib4d:function() {
  k("missing function: emscripten_glVertexAttrib4d");
  h(-1);
}, _emscripten_glVertexAttrib4dARB:function() {
  k("missing function: emscripten_glVertexAttrib4dARB");
  h(-1);
}, _emscripten_glVertexAttrib4dv:function() {
  k("missing function: emscripten_glVertexAttrib4dv");
  h(-1);
}, _emscripten_glVertexAttrib4dvARB:function() {
  k("missing function: emscripten_glVertexAttrib4dvARB");
  h(-1);
}, _emscripten_glVertexAttrib4f:function(a, b, c, d, e) {
  GLctx.vertexAttrib4f(a, b, c, d, e);
}, _emscripten_glVertexAttrib4fARB:function() {
  k("missing function: emscripten_glVertexAttrib4fARB");
  h(-1);
}, _emscripten_glVertexAttrib4fv:function(a, b) {
  GLctx.vertexAttrib4f(a, z[b >> 2], z[b + 4 >> 2], z[b + 8 >> 2], z[b + 12 >> 2]);
}, _emscripten_glVertexAttrib4fvARB:function() {
  k("missing function: emscripten_glVertexAttrib4fvARB");
  h(-1);
}, _emscripten_glVertexAttrib4iv:function() {
  k("missing function: emscripten_glVertexAttrib4iv");
  h(-1);
}, _emscripten_glVertexAttrib4ivARB:function() {
  k("missing function: emscripten_glVertexAttrib4ivARB");
  h(-1);
}, _emscripten_glVertexAttrib4s:function() {
  k("missing function: emscripten_glVertexAttrib4s");
  h(-1);
}, _emscripten_glVertexAttrib4sARB:function() {
  k("missing function: emscripten_glVertexAttrib4sARB");
  h(-1);
}, _emscripten_glVertexAttrib4sv:function() {
  k("missing function: emscripten_glVertexAttrib4sv");
  h(-1);
}, _emscripten_glVertexAttrib4svARB:function() {
  k("missing function: emscripten_glVertexAttrib4svARB");
  h(-1);
}, _emscripten_glVertexAttrib4ubv:function() {
  k("missing function: emscripten_glVertexAttrib4ubv");
  h(-1);
}, _emscripten_glVertexAttrib4ubvARB:function() {
  k("missing function: emscripten_glVertexAttrib4ubvARB");
  h(-1);
}, _emscripten_glVertexAttrib4uiv:function() {
  k("missing function: emscripten_glVertexAttrib4uiv");
  h(-1);
}, _emscripten_glVertexAttrib4uivARB:function() {
  k("missing function: emscripten_glVertexAttrib4uivARB");
  h(-1);
}, _emscripten_glVertexAttrib4usv:function() {
  k("missing function: emscripten_glVertexAttrib4usv");
  h(-1);
}, _emscripten_glVertexAttrib4usvARB:function() {
  k("missing function: emscripten_glVertexAttrib4usvARB");
  h(-1);
}, _emscripten_glVertexAttribDivisor:function(a, b) {
  GLctx.vertexAttribDivisor(a, b);
}, _emscripten_glVertexAttribI1i:function() {
  k("missing function: emscripten_glVertexAttribI1i");
  h(-1);
}, _emscripten_glVertexAttribI1iv:function() {
  k("missing function: emscripten_glVertexAttribI1iv");
  h(-1);
}, _emscripten_glVertexAttribI1ui:function() {
  k("missing function: emscripten_glVertexAttribI1ui");
  h(-1);
}, _emscripten_glVertexAttribI1uiv:function() {
  k("missing function: emscripten_glVertexAttribI1uiv");
  h(-1);
}, _emscripten_glVertexAttribI2i:function() {
  k("missing function: emscripten_glVertexAttribI2i");
  h(-1);
}, _emscripten_glVertexAttribI2iv:function() {
  k("missing function: emscripten_glVertexAttribI2iv");
  h(-1);
}, _emscripten_glVertexAttribI2ui:function() {
  k("missing function: emscripten_glVertexAttribI2ui");
  h(-1);
}, _emscripten_glVertexAttribI2uiv:function() {
  k("missing function: emscripten_glVertexAttribI2uiv");
  h(-1);
}, _emscripten_glVertexAttribI3i:function() {
  k("missing function: emscripten_glVertexAttribI3i");
  h(-1);
}, _emscripten_glVertexAttribI3iv:function() {
  k("missing function: emscripten_glVertexAttribI3iv");
  h(-1);
}, _emscripten_glVertexAttribI3ui:function() {
  k("missing function: emscripten_glVertexAttribI3ui");
  h(-1);
}, _emscripten_glVertexAttribI3uiv:function() {
  k("missing function: emscripten_glVertexAttribI3uiv");
  h(-1);
}, _emscripten_glVertexAttribI4bv:function() {
  k("missing function: emscripten_glVertexAttribI4bv");
  h(-1);
}, _emscripten_glVertexAttribI4i:function() {
  k("missing function: emscripten_glVertexAttribI4i");
  h(-1);
}, _emscripten_glVertexAttribI4iv:function() {
  k("missing function: emscripten_glVertexAttribI4iv");
  h(-1);
}, _emscripten_glVertexAttribI4sv:function() {
  k("missing function: emscripten_glVertexAttribI4sv");
  h(-1);
}, _emscripten_glVertexAttribI4ubv:function() {
  k("missing function: emscripten_glVertexAttribI4ubv");
  h(-1);
}, _emscripten_glVertexAttribI4ui:function() {
  k("missing function: emscripten_glVertexAttribI4ui");
  h(-1);
}, _emscripten_glVertexAttribI4uiv:function() {
  k("missing function: emscripten_glVertexAttribI4uiv");
  h(-1);
}, _emscripten_glVertexAttribI4usv:function() {
  k("missing function: emscripten_glVertexAttribI4usv");
  h(-1);
}, _emscripten_glVertexAttribIPointer:function() {
  k("missing function: emscripten_glVertexAttribIPointer");
  h(-1);
}, _emscripten_glVertexAttribPointer:_emscripten_glVertexAttribPointer, _emscripten_glVertexAttribPointerARB:function() {
  k("missing function: emscripten_glVertexAttribPointerARB");
  h(-1);
}, _emscripten_glVertexPointer:function(a, b, c, d) {
  si(Th, a, b, c, d);
}, _emscripten_glViewport:function(a, b, c, d) {
  GLctx.viewport(a, b, c, d);
}, _emscripten_glWindowPos2d:function() {
  k("missing function: emscripten_glWindowPos2d");
  h(-1);
}, _emscripten_glWindowPos2dv:function() {
  k("missing function: emscripten_glWindowPos2dv");
  h(-1);
}, _emscripten_glWindowPos2f:function() {
  k("missing function: emscripten_glWindowPos2f");
  h(-1);
}, _emscripten_glWindowPos2fv:function() {
  k("missing function: emscripten_glWindowPos2fv");
  h(-1);
}, _emscripten_glWindowPos2i:function() {
  k("missing function: emscripten_glWindowPos2i");
  h(-1);
}, _emscripten_glWindowPos2iv:function() {
  k("missing function: emscripten_glWindowPos2iv");
  h(-1);
}, _emscripten_glWindowPos2s:function() {
  k("missing function: emscripten_glWindowPos2s");
  h(-1);
}, _emscripten_glWindowPos2sv:function() {
  k("missing function: emscripten_glWindowPos2sv");
  h(-1);
}, _emscripten_glWindowPos3d:function() {
  k("missing function: emscripten_glWindowPos3d");
  h(-1);
}, _emscripten_glWindowPos3dv:function() {
  k("missing function: emscripten_glWindowPos3dv");
  h(-1);
}, _emscripten_glWindowPos3f:function() {
  k("missing function: emscripten_glWindowPos3f");
  h(-1);
}, _emscripten_glWindowPos3fv:function() {
  k("missing function: emscripten_glWindowPos3fv");
  h(-1);
}, _emscripten_glWindowPos3i:function() {
  k("missing function: emscripten_glWindowPos3i");
  h(-1);
}, _emscripten_glWindowPos3iv:function() {
  k("missing function: emscripten_glWindowPos3iv");
  h(-1);
}, _emscripten_glWindowPos3s:function() {
  k("missing function: emscripten_glWindowPos3s");
  h(-1);
}, _emscripten_glWindowPos3sv:function() {
  k("missing function: emscripten_glWindowPos3sv");
  h(-1);
}, _emscripten_hide_mouse:function() {
  for (var a = document.styleSheets[0], b = a.cssRules, c = 0; c < b.length; c++) {
    "canvas" == b[c].cssText.substr(0, 6) && (a.deleteRule(c), c--);
  }
  a.insertRule("canvas.emscripten { border: 1px solid black; cursor: none; }", 0);
}, _emscripten_memcpy_big:function(a, b, c) {
  r.set(r.subarray(b, b + c), a);
  return a;
}, _emscripten_run_script:function(a) {
  eval(v(a));
}, _emscripten_run_script_int:function(a) {
  return eval(v(a)) | 0;
}, _emscripten_set_main_loop:qe, _emscripten_set_main_loop_expected_blockers:function(a) {
  ue = Ae = a;
  ve();
}, _exit:function(a) {
  kj(a);
}, _getenv:$i, _gethostbyname:function(a) {
  a = v(a);
  var b = Wa(20), c = Wa(a.length + 1);
  Sa(a, r, c, a.length + 1);
  m[b >> 2] = c;
  c = Wa(4);
  m[c >> 2] = 0;
  m[b + 4 >> 2] = c;
  m[b + 8 >> 2] = 2;
  m[b + 12 >> 2] = 4;
  c = Wa(12);
  m[c >> 2] = c + 8;
  m[c + 4 >> 2] = 0;
  m[c + 8 >> 2] = Sg(Yg(a));
  m[b + 16 >> 2] = c;
  return b;
}, _gettimeofday:function(a) {
  var b = Date.now();
  m[a >> 2] = b / 1e3 | 0;
  m[a + 4 >> 2] = b % 1e3 * 1e3 | 0;
  return 0;
}, _glAlphaFunc:function() {
}, _glBegin:function(a) {
  Ei = Sh;
  Sh = [];
  Fi = S;
  S = [];
  for (var b = 0; b < Fi.length; b++) {
    S.push({});
  }
  gi = a;
  V = 0;
  a = ii = [];
  for (b = 0; b < ni; b++) {
    a[b] = 0;
  }
  ji = 0;
  U = fi;
}, _glBindTexture:function(a, b) {
  GLctx.bindTexture(a, b ? qg[b] : null);
}, _glBlendFunc:function(a, b) {
  GLctx.blendFunc(a, b);
}, _glClear:function(a) {
  GLctx.clear(a);
}, _glClearColor:function(a, b, c, d) {
  GLctx.clearColor(a, b, c, d);
}, _glClearDepth:function(a) {
  GLctx.clearDepth(a);
}, _glColor3f:function(a, b, c) {
  Hi(a, b, c, 1);
}, _glColor3fv:function(a) {
  Ii(z[a >> 2], z[a + 4 >> 2], z[a + 8 >> 2]);
}, _glColor3ub:function(a, b, c) {
  Ji(a, b, c, 255);
}, _glColor3ubv:function(a) {
  Ki(q[a >> 0], q[a + 1 >> 0], q[a + 2 >> 0]);
}, _glColor4f:function(a, b, c, d) {
  a = Math.max(Math.min(a, 1), 0);
  b = Math.max(Math.min(b, 1), 0);
  c = Math.max(Math.min(c, 1), 0);
  d = Math.max(Math.min(d, 1), 0);
  if (0 <= gi) {
    var e = V << 2;
    ei[e + 0] = 255 * a;
    ei[e + 1] = 255 * b;
    ei[e + 2] = 255 * c;
    ei[e + 3] = 255 * d;
    V++;
    ti(Uh, 4, GLctx.UNSIGNED_BYTE);
  } else {
    ri[0] = a, ri[1] = b, ri[2] = c, ri[3] = d;
  }
}, _glColor4fv:function(a) {
  Hi(z[a >> 2], z[a + 4 >> 2], z[a + 8 >> 2], z[a + 12 >> 2]);
}, _glColor4ub:function(a, b, c, d) {
  Hi((a & 255) / 255, (b & 255) / 255, (c & 255) / 255, (d & 255) / 255);
}, _glColor4ubv:function(a) {
  Ji(q[a >> 0], q[a + 1 >> 0], q[a + 2 >> 0], q[a + 3 >> 0]);
}, _glColorMask:function(a, b, c, d) {
  GLctx.colorMask(!!a, !!b, !!c, !!d);
}, _glColorPointer:function(a, b, c, d) {
  si(Uh, a, b, c, d);
}, _glCopyTexImage2D:function(a, b, c, d, e, f, l, n) {
  GLctx.copyTexImage2D(a, b, c, d, e, f, l, n);
}, _glCopyTexSubImage2D:function(a, b, c, d, e, f, l, n) {
  GLctx.copyTexSubImage2D(a, b, c, d, e, f, l, n);
}, _glCullFace:function(a) {
  GLctx.cullFace(a);
}, _glDeleteTextures:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = m[b + 4 * c >> 2], e = qg[d];
    e && (GLctx.deleteTexture(e), e.name = 0, qg[d] = null);
  }
}, _glDepthFunc:function(a) {
  GLctx.depthFunc(a);
}, _glDepthMask:function(a) {
  GLctx.depthMask(!!a);
}, _glDepthRange:function(a, b) {
  GLctx.depthRange(a, b);
}, _glDisable:jh, _glDisableClientState:function(a) {
  var b = Rh(a);
  null !== b && Sh[b] && (Sh[b] = !1, oi--, Qh = null, Lh && delete Lh.Ja[a], qi = !0);
}, _glDrawArrays:_glDrawArrays, _glDrawBuffer:function() {
  throw "glDrawBuffer: TODO";
}, _glDrawElements:_glDrawElements, _glEnable:ih, _glEnableClientState:Gi, _glEnd:function() {
  Ai(ii[Th], !0);
  xi = 0;
  zi = V / (yi >> 2);
  Di();
  ui();
  gi = -1;
  Sh = Ei;
  S = Fi;
  Qh = null;
  qi = !0;
}, _glFlush:function() {
  GLctx.flush();
}, _glFogf:function(a, b) {
  switch(a) {
    case 2915:
      Eh = b;
      break;
    case 2916:
      Fh = b;
      break;
    case 2914:
      Gh = b;
      break;
    case 2917:
      switch(b) {
        case 2049:
        case 9729:
          Ih != b && (Qh = null, Ih = b);
          break;
        default:
          2048 != Ih && (Qh = null, Ih = 2048);
      }
  }
}, _glFogfv:function(a, b) {
  switch(a) {
    case 2918:
      Hh[0] = z[b >> 2];
      Hh[1] = z[b + 4 >> 2];
      Hh[2] = z[b + 8 >> 2];
      Hh[3] = z[b + 12 >> 2];
      break;
    case 2915:
    case 2916:
      Qi(a, z[b >> 2]);
  }
}, _glFogi:function(a, b) {
  return Qi(a, b);
}, _glFrontFace:function(a) {
  GLctx.frontFace(a);
}, _glFrustum:function(a, b, c, d, e, f) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.multiply(T[W], Z.h.Hb(a, b, c, d, e, f));
}, _glGenTextures:function(a, b) {
  for (var c = 0; c < a; c++) {
    var d = GLctx.createTexture();
    if (!d) {
      for (P(1282); c < a;) {
        m[b + 4 * c++ >> 2] = 0;
      }
      break;
    }
    var e = zg(qg);
    d.name = e;
    qg[e] = d;
    m[b + 4 * c >> 2] = e;
  }
}, _glGetFloatv:yh, _glGetIntegerv:nh, _glGetString:oh, _glGetTexLevelParameteriv:function() {
  throw "glGetTexLevelParameteriv: TODO";
}, _glHint:zh, _glIsEnabled:kh, _glLightModelfv:function() {
  throw "glLightModelfv: TODO";
}, _glLightfv:function() {
  throw "glLightfv: TODO";
}, _glLineWidth:function(a) {
  GLctx.lineWidth(a);
}, _glLoadIdentity:function() {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.Pa(T[W]);
}, _glLoadMatrixf:function(a) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.set(z.subarray(a >> 2, a + 64 >> 2), T[W]);
}, _glMaterialfv:function() {
  throw "glMaterialfv: TODO";
}, _glMatrixMode:function(a) {
  if (5888 == a) {
    W = 0;
  } else {
    if (5889 == a) {
      W = 1;
    } else {
      if (5890 == a) {
        mi = !0, W = 2 + Wh;
      } else {
        throw "Wrong mode " + a + " passed to glMatrixMode";
      }
    }
  }
}, _glMultMatrixf:function(a) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.multiply(T[W], z.subarray(a >> 2, a + 64 >> 2));
}, _glNormalPointer:function(a, b, c) {
  si(Zh, 3, a, b, c);
}, _glOrtho:function(a, b, c, d, e, f) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.multiply(T[W], Z.h.Hc(a, b, c, d, e, f));
}, _glPixelStorei:function(a, b) {
  3333 == a || 3317 == a && (yg = b);
  GLctx.pixelStorei(a, b);
}, _glPolygonMode:function() {
}, _glPolygonOffset:function(a, b) {
  GLctx.polygonOffset(a, b);
}, _glPopMatrix:function() {
  0 == li[W].length ? P(1284) : (X = !0, Y[W] = Y[W] + 1 | 0, T[W] = li[W].pop());
}, _glPushMatrix:function() {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  li[W].push(Array.prototype.slice.call(T[W]));
}, _glReadBuffer:function() {
  throw "glReadBuffer: TODO";
}, _glReadPixels:function(a, b, c, d, e, f, l) {
  (l = Xi(f, e, c, d, l)) ? GLctx.readPixels(a, b, c, d, e, f, l) : P(1280);
}, _glRotatef:function(a, b, c, d) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.rotate(T[W], a * Math.PI / 180, [b, c, d]);
}, _glScalef:function(a, b, c) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.scale(T[W], [a, b, c]);
}, _glScissor:function(a, b, c, d) {
  GLctx.scissor(a, b, c, d);
}, _glShadeModel:function() {
  Fa("TODO: glShadeModel");
}, _glTexCoord2f:function(a, b) {
  U[V++] = a;
  U[V++] = b;
  ti(Vh, 2, GLctx.FLOAT);
}, _glTexCoord2fv:function(a) {
  Yi(z[a >> 2], z[a + 4 >> 2]);
}, _glTexCoord3f:function() {
  throw "glTexCoord3f: TODO";
}, _glTexCoord4f:function() {
  throw "glTexCoord4f: TODO";
}, _glTexCoordPointer:function(a, b, c, d) {
  si(Vh + Wh, a, b, c, d);
}, _glTexEnvfv:_glTexEnvfv, _glTexEnvi:_glTexEnvi, _glTexGenfv:function() {
  throw "glTexGenfv: TODO";
}, _glTexGeni:function() {
  throw "glTexGeni: TODO";
}, _glTexImage1D:function() {
  throw "glTexImage1D: TODO";
}, _glTexImage2D:function(a, b, c, d, e, f, l, n, p) {
  var u = null;
  p && (u = Xi(n, l, d, e, p));
  GLctx.texImage2D(a, b, c, d, e, f, l, n, u);
}, _glTexParameteri:function(a, b, c) {
  GLctx.texParameteri(a, b, c);
}, _glTexSubImage2D:function(a, b, c, d, e, f, l, n, p) {
  var u = null;
  p && (u = Xi(n, l, e, f, p));
  GLctx.texSubImage2D(a, b, c, d, e, f, l, n, u);
}, _glTranslatef:function(a, b, c) {
  X = !0;
  Y[W] = Y[W] + 1 | 0;
  Z.h.translate(T[W], [a, b, c]);
}, _glVertex2f:function(a, b, c) {
  U[V++] = a;
  U[V++] = b;
  U[V++] = c || 0;
  ti(Th, 3, GLctx.FLOAT);
}, _glVertex2i:function(a, b, c) {
  U[V++] = a;
  U[V++] = b;
  U[V++] = c || 0;
  ti(Th, 3, GLctx.FLOAT);
}, _glVertex3f:function(a, b, c) {
  U[V++] = a;
  U[V++] = b;
  U[V++] = c || 0;
  ti(Th, 3, GLctx.FLOAT);
}, _glVertex3fv:function(a) {
  Zi(z[a >> 2], z[a + 4 >> 2], z[a + 8 >> 2]);
}, _glVertexPointer:function(a, b, c, d) {
  si(Th, a, b, c, d);
}, _glViewport:function(a, b, c, d) {
  GLctx.viewport(a, b, c, d);
}, _llvm_log10_f32:function(a) {
  return Math.log(a) / Math.LN10;
}, _llvm_trap:function() {
  h("trap!");
}, _localtime:function(a) {
  return hh(a, bh);
}, _strftime:function(a, b, c, d) {
  function e(a, b, c) {
    for (a = "number" === typeof a ? a.toString() : a || ""; a.length < b;) {
      a = c[0] + a;
    }
    return a;
  }
  function f(a, b) {
    return e(a, b, "0");
  }
  function l(a, b) {
    function c(a) {
      return 0 > a ? -1 : 0 < a ? 1 : 0;
    }
    var d;
    0 === (d = c(a.getFullYear() - b.getFullYear())) && 0 === (d = c(a.getMonth() - b.getMonth())) && (d = c(a.getDate() - b.getDate()));
    return d;
  }
  function n(a) {
    switch(a.getDay()) {
      case 0:
        return new Date(a.getFullYear() - 1, 11, 29);
      case 1:
        return a;
      case 2:
        return new Date(a.getFullYear(), 0, 3);
      case 3:
        return new Date(a.getFullYear(), 0, 2);
      case 4:
        return new Date(a.getFullYear(), 0, 1);
      case 5:
        return new Date(a.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(a.getFullYear() - 1, 11, 30);
    }
  }
  function p(a) {
    a = ej(new Date(a.F + 1900, 0, 1), a.vb);
    var b = n(new Date(a.getFullYear() + 1, 0, 4));
    return 0 >= l(n(new Date(a.getFullYear(), 0, 4)), a) ? 0 >= l(b, a) ? a.getFullYear() + 1 : a.getFullYear() : a.getFullYear() - 1;
  }
  var u = m[d + 40 >> 2];
  d = {ge:m[d >> 2], fe:m[d + 4 >> 2], ub:m[d + 8 >> 2], qa:m[d + 12 >> 2], ga:m[d + 16 >> 2], F:m[d + 20 >> 2], Nc:m[d + 24 >> 2], vb:m[d + 28 >> 2], Lg:m[d + 32 >> 2], ee:m[d + 36 >> 2], he:u ? v(u) : ""};
  c = v(c);
  u = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S"};
  for (var w in u) {
    c = c.replace(new RegExp(w, "g"), u[w]);
  }
  var t = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), A = "January February March April May June July August September October November December".split(" ");
  u = {"%a":function(a) {
    return t[a.Nc].substring(0, 3);
  }, "%A":function(a) {
    return t[a.Nc];
  }, "%b":function(a) {
    return A[a.ga].substring(0, 3);
  }, "%B":function(a) {
    return A[a.ga];
  }, "%C":function(a) {
    return f((a.F + 1900) / 100 | 0, 2);
  }, "%d":function(a) {
    return f(a.qa, 2);
  }, "%e":function(a) {
    return e(a.qa, 2, " ");
  }, "%g":function(a) {
    return p(a).toString().substring(2);
  }, "%G":function(a) {
    return p(a);
  }, "%H":function(a) {
    return f(a.ub, 2);
  }, "%I":function(a) {
    a = a.ub;
    0 == a ? a = 12 : 12 < a && (a -= 12);
    return f(a, 2);
  }, "%j":function(a) {
    return f(a.qa + bj(aj(a.F + 1900) ? cj : dj, a.ga - 1), 3);
  }, "%m":function(a) {
    return f(a.ga + 1, 2);
  }, "%M":function(a) {
    return f(a.fe, 2);
  }, "%n":function() {
    return "\n";
  }, "%p":function(a) {
    return 0 <= a.ub && 12 > a.ub ? "AM" : "PM";
  }, "%S":function(a) {
    return f(a.ge, 2);
  }, "%t":function() {
    return "\t";
  }, "%u":function(a) {
    return (new Date(a.F + 1900, a.ga + 1, a.qa, 0, 0, 0, 0)).getDay() || 7;
  }, "%U":function(a) {
    var b = new Date(a.F + 1900, 0, 1), c = 0 === b.getDay() ? b : ej(b, 7 - b.getDay());
    a = new Date(a.F + 1900, a.ga, a.qa);
    return 0 > l(c, a) ? f(Math.ceil((31 - c.getDate() + (bj(aj(a.getFullYear()) ? cj : dj, a.getMonth() - 1) - 31) + a.getDate()) / 7), 2) : 0 === l(c, b) ? "01" : "00";
  }, "%V":function(a) {
    var b = n(new Date(a.F + 1900, 0, 4)), c = n(new Date(a.F + 1901, 0, 4)), d = ej(new Date(a.F + 1900, 0, 1), a.vb);
    return 0 > l(d, b) ? "53" : 0 >= l(c, d) ? "01" : f(Math.ceil((b.getFullYear() < a.F + 1900 ? a.vb + 32 - b.getDate() : a.vb + 1 - b.getDate()) / 7), 2);
  }, "%w":function(a) {
    return (new Date(a.F + 1900, a.ga + 1, a.qa, 0, 0, 0, 0)).getDay();
  }, "%W":function(a) {
    var b = new Date(a.F, 0, 1), c = 1 === b.getDay() ? b : ej(b, 0 === b.getDay() ? 1 : 7 - b.getDay() + 1);
    a = new Date(a.F + 1900, a.ga, a.qa);
    return 0 > l(c, a) ? f(Math.ceil((31 - c.getDate() + (bj(aj(a.getFullYear()) ? cj : dj, a.getMonth() - 1) - 31) + a.getDate()) / 7), 2) : 0 === l(c, b) ? "01" : "00";
  }, "%y":function(a) {
    return (a.F + 1900).toString().substring(2);
  }, "%Y":function(a) {
    return a.F + 1900;
  }, "%z":function(a) {
    a = a.ee;
    var b = 0 <= a;
    a = Math.abs(a) / 60;
    return (b ? "+" : "-") + String("0000" + (a / 60 * 100 + a % 60)).slice(-4);
  }, "%Z":function(a) {
    return a.he;
  }, "%%":function() {
    return "%";
  }};
  for (w in u) {
    0 <= c.indexOf(w) && (c = c.replace(new RegExp(w, "g"), u[w](d)));
  }
  w = Xc(c, !1);
  if (w.length > b) {
    return 0;
  }
  q.set(w, a);
  return w.length - 1;
}, _time:function(a) {
  var b = Date.now() / 1e3 | 0;
  a && (m[a >> 2] = b);
  return b;
}, DYNAMICTOP_PTR:Ba, STACKTOP:kb};
var lj = g.asm(g.$c, g.ad, buffer);
g.asm = lj;
var lc = g.__GLOBAL__sub_I_3dgui_cpp = function() {
  return g.asm.__GLOBAL__sub_I_3dgui_cpp.apply(null, arguments);
}, Wb = g.__GLOBAL__sub_I_ai_cpp = function() {
  return g.asm.__GLOBAL__sub_I_ai_cpp.apply(null, arguments);
}, mc = g.__GLOBAL__sub_I_blend_cpp = function() {
  return g.asm.__GLOBAL__sub_I_blend_cpp.apply(null, arguments);
}, nc = g.__GLOBAL__sub_I_blob_cpp = function() {
  return g.asm.__GLOBAL__sub_I_blob_cpp.apply(null, arguments);
}, oc = g.__GLOBAL__sub_I_client_cpp = function() {
  return g.asm.__GLOBAL__sub_I_client_cpp.apply(null, arguments);
}, Xb = g.__GLOBAL__sub_I_client_cpp_3000 = function() {
  return g.asm.__GLOBAL__sub_I_client_cpp_3000.apply(null, arguments);
}, pc = g.__GLOBAL__sub_I_command_cpp = function() {
  return g.asm.__GLOBAL__sub_I_command_cpp.apply(null, arguments);
}, qc = g.__GLOBAL__sub_I_console_cpp = function() {
  return g.asm.__GLOBAL__sub_I_console_cpp.apply(null, arguments);
}, wc = g.__GLOBAL__sub_I_crypto_cpp = function() {
  return g.asm.__GLOBAL__sub_I_crypto_cpp.apply(null, arguments);
}, rc = g.__GLOBAL__sub_I_cubeloader_cpp = function() {
  return g.asm.__GLOBAL__sub_I_cubeloader_cpp.apply(null, arguments);
}, sc = g.__GLOBAL__sub_I_decal_cpp = function() {
  return g.asm.__GLOBAL__sub_I_decal_cpp.apply(null, arguments);
}, tc = g.__GLOBAL__sub_I_dynlight_cpp = function() {
  return g.asm.__GLOBAL__sub_I_dynlight_cpp.apply(null, arguments);
}, Yb = g.__GLOBAL__sub_I_entities_cpp = function() {
  return g.asm.__GLOBAL__sub_I_entities_cpp.apply(null, arguments);
}, Zb = g.__GLOBAL__sub_I_fps_cpp = function() {
  return g.asm.__GLOBAL__sub_I_fps_cpp.apply(null, arguments);
}, uc = g.__GLOBAL__sub_I_glare_cpp = function() {
  return g.asm.__GLOBAL__sub_I_glare_cpp.apply(null, arguments);
}, vc = g.__GLOBAL__sub_I_grass_cpp = function() {
  return g.asm.__GLOBAL__sub_I_grass_cpp.apply(null, arguments);
}, ic = g.__GLOBAL__sub_I_lightmap_cpp = function() {
  return g.asm.__GLOBAL__sub_I_lightmap_cpp.apply(null, arguments);
}, xc = g.__GLOBAL__sub_I_main_cpp = function() {
  return g.asm.__GLOBAL__sub_I_main_cpp.apply(null, arguments);
}, yc = g.__GLOBAL__sub_I_material_cpp = function() {
  return g.asm.__GLOBAL__sub_I_material_cpp.apply(null, arguments);
}, zc = g.__GLOBAL__sub_I_menus_cpp = function() {
  return g.asm.__GLOBAL__sub_I_menus_cpp.apply(null, arguments);
}, $b = g.__GLOBAL__sub_I_monster_cpp = function() {
  return g.asm.__GLOBAL__sub_I_monster_cpp.apply(null, arguments);
}, ac = g.__GLOBAL__sub_I_movable_cpp = function() {
  return g.asm.__GLOBAL__sub_I_movable_cpp.apply(null, arguments);
}, Ac = g.__GLOBAL__sub_I_movie_cpp = function() {
  return g.asm.__GLOBAL__sub_I_movie_cpp.apply(null, arguments);
}, Bc = g.__GLOBAL__sub_I_normal_cpp = function() {
  return g.asm.__GLOBAL__sub_I_normal_cpp.apply(null, arguments);
}, Cc = g.__GLOBAL__sub_I_octa_cpp = function() {
  return g.asm.__GLOBAL__sub_I_octa_cpp.apply(null, arguments);
}, Dc = g.__GLOBAL__sub_I_octaedit_cpp = function() {
  return g.asm.__GLOBAL__sub_I_octaedit_cpp.apply(null, arguments);
}, Ec = g.__GLOBAL__sub_I_octarender_cpp = function() {
  return g.asm.__GLOBAL__sub_I_octarender_cpp.apply(null, arguments);
}, Fc = g.__GLOBAL__sub_I_physics_cpp = function() {
  return g.asm.__GLOBAL__sub_I_physics_cpp.apply(null, arguments);
}, Gc = g.__GLOBAL__sub_I_pvs_cpp = function() {
  return g.asm.__GLOBAL__sub_I_pvs_cpp.apply(null, arguments);
}, bc = g.__GLOBAL__sub_I_render_cpp = function() {
  return g.asm.__GLOBAL__sub_I_render_cpp.apply(null, arguments);
}, Hc = g.__GLOBAL__sub_I_rendergl_cpp = function() {
  return g.asm.__GLOBAL__sub_I_rendergl_cpp.apply(null, arguments);
}, Ib = g.__GLOBAL__sub_I_rendermodel_cpp = function() {
  return g.asm.__GLOBAL__sub_I_rendermodel_cpp.apply(null, arguments);
}, Jb = g.__GLOBAL__sub_I_renderparticles_cpp = function() {
  return g.asm.__GLOBAL__sub_I_renderparticles_cpp.apply(null, arguments);
}, Kb = g.__GLOBAL__sub_I_rendersky_cpp = function() {
  return g.asm.__GLOBAL__sub_I_rendersky_cpp.apply(null, arguments);
}, Lb = g.__GLOBAL__sub_I_rendertext_cpp = function() {
  return g.asm.__GLOBAL__sub_I_rendertext_cpp.apply(null, arguments);
}, Mb = g.__GLOBAL__sub_I_renderva_cpp = function() {
  return g.asm.__GLOBAL__sub_I_renderva_cpp.apply(null, arguments);
}, cc = g.__GLOBAL__sub_I_scoreboard_cpp = function() {
  return g.asm.__GLOBAL__sub_I_scoreboard_cpp.apply(null, arguments);
}, Nb = g.__GLOBAL__sub_I_server_cpp = function() {
  return g.asm.__GLOBAL__sub_I_server_cpp.apply(null, arguments);
}, dc = g.__GLOBAL__sub_I_server_cpp_4037 = function() {
  return g.asm.__GLOBAL__sub_I_server_cpp_4037.apply(null, arguments);
}, Ob = g.__GLOBAL__sub_I_serverbrowser_cpp = function() {
  return g.asm.__GLOBAL__sub_I_serverbrowser_cpp.apply(null, arguments);
}, Pb = g.__GLOBAL__sub_I_shader_cpp = function() {
  return g.asm.__GLOBAL__sub_I_shader_cpp.apply(null, arguments);
}, Qb = g.__GLOBAL__sub_I_shadowmap_cpp = function() {
  return g.asm.__GLOBAL__sub_I_shadowmap_cpp.apply(null, arguments);
}, Rb = g.__GLOBAL__sub_I_sound_cpp = function() {
  return g.asm.__GLOBAL__sub_I_sound_cpp.apply(null, arguments);
}, jc = g.__GLOBAL__sub_I_stream_cpp = function() {
  return g.asm.__GLOBAL__sub_I_stream_cpp.apply(null, arguments);
}, Sb = g.__GLOBAL__sub_I_texture_cpp = function() {
  return g.asm.__GLOBAL__sub_I_texture_cpp.apply(null, arguments);
}, Tb = g.__GLOBAL__sub_I_water_cpp = function() {
  return g.asm.__GLOBAL__sub_I_water_cpp.apply(null, arguments);
}, ec = g.__GLOBAL__sub_I_waypoint_cpp = function() {
  return g.asm.__GLOBAL__sub_I_waypoint_cpp.apply(null, arguments);
}, fc = g.__GLOBAL__sub_I_weapon_cpp = function() {
  return g.asm.__GLOBAL__sub_I_weapon_cpp.apply(null, arguments);
}, Gb = g.__GLOBAL__sub_I_world_cpp = function() {
  return g.asm.__GLOBAL__sub_I_world_cpp.apply(null, arguments);
}, Vb = g.__GLOBAL__sub_I_worldio_cpp = function() {
  return g.asm.__GLOBAL__sub_I_worldio_cpp.apply(null, arguments);
}, kc = g.__GLOBAL__sub_I_zip_cpp = function() {
  return g.asm.__GLOBAL__sub_I_zip_cpp.apply(null, arguments);
};
g.__Z10executestrPKc = function() {
  return g.asm.__Z10executestrPKc.apply(null, arguments);
};
g.__Z7executePKc = function() {
  return g.asm.__Z7executePKc.apply(null, arguments);
};
g.__ZN4game18setplayermodelinfoEPKcS1_S1_S1_S1_S1_S1_S1_S1_S1_S1_S1_b = function() {
  return g.asm.__ZN4game18setplayermodelinfoEPKcS1_S1_S1_S1_S1_S1_S1_S1_S1_S1_S1_b.apply(null, arguments);
};
var Ic = g.___cxx_global_var_init_178 = function() {
  return g.asm.___cxx_global_var_init_178.apply(null, arguments);
}, Ub = g.___cxx_global_var_init_179 = function() {
  return g.asm.___cxx_global_var_init_179.apply(null, arguments);
}, Hb = g.___cxx_global_var_init_180 = function() {
  return g.asm.___cxx_global_var_init_180.apply(null, arguments);
}, hc = g.___emscripten_environ_constructor = function() {
  return g.asm.___emscripten_environ_constructor.apply(null, arguments);
};
g.___errno_location = function() {
  return g.asm.___errno_location.apply(null, arguments);
};
var fh = g.__get_daylight = function() {
  return g.asm.__get_daylight.apply(null, arguments);
}, eh = g.__get_timezone = function() {
  return g.asm.__get_timezone.apply(null, arguments);
}, gh = g.__get_tzname = function() {
  return g.asm.__get_tzname.apply(null, arguments);
};
g._bb_playsoundname = function() {
  return g.asm._bb_playsoundname.apply(null, arguments);
};
g._bb_splash = function() {
  return g.asm._bb_splash.apply(null, arguments);
};
var jj = g._emscripten_GetProcAddress = function() {
  return g.asm._emscripten_GetProcAddress.apply(null, arguments);
}, Ef = g._free = function() {
  return g.asm._free.apply(null, arguments);
}, Ug = g._htons = function() {
  return g.asm._htons.apply(null, arguments);
};
g._main = function() {
  return g.asm._main.apply(null, arguments);
};
var Wa = g._malloc = function() {
  return g.asm._malloc.apply(null, arguments);
}, Mf = g._memcpy = function() {
  return g.asm._memcpy.apply(null, arguments);
}, kg = g._memset = function() {
  return g.asm._memset.apply(null, arguments);
}, $g = g._ntohs = function() {
  return g.asm._ntohs.apply(null, arguments);
};
g._setforcecamera = function() {
  return g.asm._setforcecamera.apply(null, arguments);
};
var Ra = g.stackAlloc = function() {
  return g.asm.stackAlloc.apply(null, arguments);
}, Qa = g.stackRestore = function() {
  return g.asm.stackRestore.apply(null, arguments);
}, Pa = g.stackSave = function() {
  return g.asm.stackSave.apply(null, arguments);
};
g.dynCall_i = function() {
  return g.asm.dynCall_i.apply(null, arguments);
};
g.dynCall_ii = function() {
  return g.asm.dynCall_ii.apply(null, arguments);
};
g.dynCall_iii = function() {
  return g.asm.dynCall_iii.apply(null, arguments);
};
g.dynCall_iiifi = function() {
  return g.asm.dynCall_iiifi.apply(null, arguments);
};
g.dynCall_iiii = function() {
  return g.asm.dynCall_iiii.apply(null, arguments);
};
g.dynCall_iiiii = function() {
  return g.asm.dynCall_iiiii.apply(null, arguments);
};
g.dynCall_iiiiii = function() {
  return g.asm.dynCall_iiiiii.apply(null, arguments);
};
g.dynCall_iiiiiifi = function() {
  return g.asm.dynCall_iiiiiifi.apply(null, arguments);
};
g.dynCall_iiiiiii = function() {
  return g.asm.dynCall_iiiiiii.apply(null, arguments);
};
g.dynCall_iiiiiiii = function() {
  return g.asm.dynCall_iiiiiiii.apply(null, arguments);
};
g.dynCall_v = function() {
  return g.asm.dynCall_v.apply(null, arguments);
};
g.dynCall_vd = function() {
  return g.asm.dynCall_vd.apply(null, arguments);
};
g.dynCall_vdd = function() {
  return g.asm.dynCall_vdd.apply(null, arguments);
};
g.dynCall_vddd = function() {
  return g.asm.dynCall_vddd.apply(null, arguments);
};
g.dynCall_vdddd = function() {
  return g.asm.dynCall_vdddd.apply(null, arguments);
};
g.dynCall_vdddddd = function() {
  return g.asm.dynCall_vdddddd.apply(null, arguments);
};
g.dynCall_vf = function() {
  return g.asm.dynCall_vf.apply(null, arguments);
};
g.dynCall_vff = function() {
  return g.asm.dynCall_vff.apply(null, arguments);
};
g.dynCall_vfff = function() {
  return g.asm.dynCall_vfff.apply(null, arguments);
};
g.dynCall_vffff = function() {
  return g.asm.dynCall_vffff.apply(null, arguments);
};
g.dynCall_vfi = function() {
  return g.asm.dynCall_vfi.apply(null, arguments);
};
g.dynCall_vi = function() {
  return g.asm.dynCall_vi.apply(null, arguments);
};
g.dynCall_vid = function() {
  return g.asm.dynCall_vid.apply(null, arguments);
};
g.dynCall_vidd = function() {
  return g.asm.dynCall_vidd.apply(null, arguments);
};
g.dynCall_viddd = function() {
  return g.asm.dynCall_viddd.apply(null, arguments);
};
g.dynCall_vidddd = function() {
  return g.asm.dynCall_vidddd.apply(null, arguments);
};
g.dynCall_viddidd = function() {
  return g.asm.dynCall_viddidd.apply(null, arguments);
};
g.dynCall_viddiiddiii = function() {
  return g.asm.dynCall_viddiiddiii.apply(null, arguments);
};
g.dynCall_viddiii = function() {
  return g.asm.dynCall_viddiii.apply(null, arguments);
};
g.dynCall_vif = function() {
  return g.asm.dynCall_vif.apply(null, arguments);
};
g.dynCall_viff = function() {
  return g.asm.dynCall_viff.apply(null, arguments);
};
g.dynCall_vifff = function() {
  return g.asm.dynCall_vifff.apply(null, arguments);
};
g.dynCall_viffff = function() {
  return g.asm.dynCall_viffff.apply(null, arguments);
};
g.dynCall_viffi = function() {
  return g.asm.dynCall_viffi.apply(null, arguments);
};
g.dynCall_viffiff = function() {
  return g.asm.dynCall_viffiff.apply(null, arguments);
};
g.dynCall_viffiiffiii = function() {
  return g.asm.dynCall_viffiiffiii.apply(null, arguments);
};
g.dynCall_viffiii = function() {
  return g.asm.dynCall_viffiii.apply(null, arguments);
};
g.dynCall_vii = function() {
  return g.asm.dynCall_vii.apply(null, arguments);
};
g.dynCall_viid = function() {
  return g.asm.dynCall_viid.apply(null, arguments);
};
g.dynCall_viidddd = function() {
  return g.asm.dynCall_viidddd.apply(null, arguments);
};
g.dynCall_viif = function() {
  return g.asm.dynCall_viif.apply(null, arguments);
};
g.dynCall_viiffff = function() {
  return g.asm.dynCall_viiffff.apply(null, arguments);
};
g.dynCall_viiffffi = function() {
  return g.asm.dynCall_viiffffi.apply(null, arguments);
};
g.dynCall_viifi = function() {
  return g.asm.dynCall_viifi.apply(null, arguments);
};
g.dynCall_viifii = function() {
  return g.asm.dynCall_viifii.apply(null, arguments);
};
g.dynCall_viifiiii = function() {
  return g.asm.dynCall_viifiiii.apply(null, arguments);
};
g.dynCall_viii = function() {
  return g.asm.dynCall_viii.apply(null, arguments);
};
g.dynCall_viiii = function() {
  return g.asm.dynCall_viiii.apply(null, arguments);
};
g.dynCall_viiiii = function() {
  return g.asm.dynCall_viiiii.apply(null, arguments);
};
g.dynCall_viiiiiffiiiif = function() {
  return g.asm.dynCall_viiiiiffiiiif.apply(null, arguments);
};
g.dynCall_viiiiifi = function() {
  return g.asm.dynCall_viiiiifi.apply(null, arguments);
};
g.dynCall_viiiiii = function() {
  return g.asm.dynCall_viiiiii.apply(null, arguments);
};
g.dynCall_viiiiiii = function() {
  return g.asm.dynCall_viiiiiii.apply(null, arguments);
};
g.dynCall_viiiiiiii = function() {
  return g.asm.dynCall_viiiiiiii.apply(null, arguments);
};
g.dynCall_viiiiiiiii = function() {
  return g.asm.dynCall_viiiiiiiii.apply(null, arguments);
};
g.dynCall_viiiiiiiiii = function() {
  return g.asm.dynCall_viiiiiiiiii.apply(null, arguments);
};
g.dynCall_viiiiiiiiiii = function() {
  return g.asm.dynCall_viiiiiiiiiii.apply(null, arguments);
};
var mj = 0;
Math.random = function() {
  return mj = Math.pow(mj + 1.8912, 3) % 1;
};
var nj = 1e4;
Date.now = function() {
  return nj += 1e3 / 60;
};
"object" === typeof performance && (performance.now = Date.now);
g || (g = {});
g.thisProgram = "thisProgram";
g.asm = lj;
g.cwrap = function(a, b, c, d) {
  c = c || [];
  var e = c.every(function(a) {
    return "number" === a;
  });
  return "string" !== b && e && !d ? Oa(a) : function() {
    var d = c, e = arguments, n = Oa(a), p = [], u = 0;
    if (e) {
      for (var w = 0; w < e.length; w++) {
        var t = Ua[d[w]];
        t ? (0 === u && (u = Pa()), p[w] = t(e[w])) : p[w] = e[w];
      }
    }
    d = n.apply(null, p);
    d = "string" === b ? v(d) : "boolean" === b ? !!d : d;
    0 !== u && Qa(u);
    return d;
  };
};
g.getMemory = Xa;
g.addRunDependency = Cb;
g.removeRunDependency = Db;
g.FS_createFolder = Td;
g.FS_createPath = Ud;
g.FS_createDataFile = Zd;
g.FS_createPreloadedFile = de;
g.FS_createLazyFile = ce;
g.FS_createLink = ae;
g.FS_createDevice = $d;
g.FS_unlink = Hd;
function ua(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a;
}
ua.prototype = Error();
ua.prototype.constructor = ua;
var oj;
Bb = function pj() {
  g.calledRun || qj();
  g.calledRun || (Bb = pj);
};
g.callMain = function(a) {
  a = a || [];
  Za || (Za = !0, ob(qb));
  var b = a.length + 1, c = Ra(4 * (b + 1));
  m[c >> 2] = cb(g.thisProgram);
  for (var d = 1; d < b; d++) {
    m[(c >> 2) + d] = cb(a[d - 1]);
  }
  m[(c >> 2) + b] = 0;
  try {
    var e = g._main(b, c, 0);
    kj(e, !0);
  } catch (f) {
    f instanceof ua || ("SimulateInfiniteLoop" == f ? g.noExitRuntime = !0 : ((a = f) && "object" === typeof f && f.stack && (a = [f, f.stack]), k("exception thrown: " + a), g.quit(1, f)));
  } finally {
  }
};
function qj(a) {
  function b() {
    if (!g.calledRun && (g.calledRun = !0, !Na)) {
      Za || (Za = !0, ob(qb));
      ob(rb);
      if (g.onRuntimeInitialized) {
        g.onRuntimeInitialized();
      }
      g._main && rj && g.callMain(a);
      if (g.postRun) {
        for ("function" == typeof g.postRun && (g.postRun = [g.postRun]); g.postRun.length;) {
          var b = g.postRun.shift();
          tb.unshift(b);
        }
      }
      ob(tb);
    }
  }
  a = a || g.arguments;
  if (!(0 < zb)) {
    if (g.preRun) {
      for ("function" == typeof g.preRun && (g.preRun = [g.preRun]); g.preRun.length;) {
        ub();
      }
    }
    ob(pb);
    0 < zb || g.calledRun || (g.setStatus ? (g.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        g.setStatus("");
      }, 1);
      b();
    }, 1)) : b());
  }
}
g.run = qj;
function kj(a, b) {
  if (!b || !g.noExitRuntime || 0 !== a) {
    if (!g.noExitRuntime && (Na = !0, kb = oj, ob(sb), g.onExit)) {
      g.onExit(a);
    }
    g.quit(a, new ua(a));
  }
}
function h(a) {
  if (g.onAbort) {
    g.onAbort(a);
  }
  void 0 !== a ? (xa(a), k(a), a = JSON.stringify(a)) : a = "";
  Na = !0;
  throw "abort(" + a + "). Build with -s ASSERTIONS=1 for more info.";
}
g.abort = h;
if (g.preInit) {
  for ("function" == typeof g.preInit && (g.preInit = [g.preInit]); 0 < g.preInit.length;) {
    g.preInit.pop()();
  }
}
var rj = !0;
g.noInitialRun && (rj = !1);
g.noExitRuntime = !0;
qj();

