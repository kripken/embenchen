Module["asm"] =  (function(global,env,buffer) {

 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = env.cttz_i8 | 0;
 var n = 0;
 var o = 0;
 var p = 0;
 var q = 0;
 var r = global.NaN, s = global.Infinity;
 var t = 0, u = 0, v = 0, w = 0, x = 0.0, y = 0, z = 0, A = 0, B = 0.0;
 var C = 0;
 var D = global.Math.floor;
 var E = global.Math.abs;
 var F = global.Math.sqrt;
 var G = global.Math.pow;
 var H = global.Math.cos;
 var I = global.Math.sin;
 var J = global.Math.tan;
 var K = global.Math.acos;
 var L = global.Math.asin;
 var M = global.Math.atan;
 var N = global.Math.atan2;
 var O = global.Math.exp;
 var P = global.Math.log;
 var Q = global.Math.ceil;
 var R = global.Math.imul;
 var S = global.Math.min;
 var T = global.Math.clz32;
 var U = env.abort;
 var V = env.assert;
 var W = env.invoke_ii;
 var X = env.invoke_iiii;
 var Y = env.invoke_vii;
 var Z = env.invoke_iii;
 var _ = env.invoke_vi;
 var $ = env._pthread_cleanup_pop;
 var aa = env._abort;
 var ba = env.___syscall6;
 var ca = env._pthread_cleanup_push;
 var da = env._llvm_cttz_i32;
 var ea = env._sbrk;
 var fa = env._emscripten_memcpy_big;
 var ga = env.___syscall54;
 var ha = env.___syscall140;
 var ia = env.___assert_fail;
 var ja = env.___syscall146;
 var ka = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function _a(f, g) {
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0;
 Aa = i;
 i = i + 16 | 0;
 ca = Aa;
 if (!f) {
  f = -2;
  i = Aa;
  return f | 0;
 }
 xa = c[f + 28 >> 2] | 0;
 if (!xa) {
  f = -2;
  i = Aa;
  return f | 0;
 }
 ya = f + 12 | 0;
 h = c[ya >> 2] | 0;
 if (!h) {
  f = -2;
  i = Aa;
  return f | 0;
 }
 j = c[f >> 2] | 0;
 if (!j) if (c[f + 4 >> 2] | 0) {
  f = -2;
  i = Aa;
  return f | 0;
 }
 k = c[xa >> 2] | 0;
 if ((k | 0) == 11) {
  c[xa >> 2] = 12;
  k = 12;
 }
 wa = f + 16 | 0;
 o = c[wa >> 2] | 0;
 qa = f + 4 | 0;
 ra = c[qa >> 2] | 0;
 sa = xa + 56 | 0;
 za = xa + 60 | 0;
 ma = xa + 8 | 0;
 ta = xa + 24 | 0;
 y = ca + 1 | 0;
 pa = xa + 16 | 0;
 z = xa + 32 | 0;
 A = f + 24 | 0;
 B = xa + 36 | 0;
 C = xa + 20 | 0;
 ua = f + 48 | 0;
 D = xa + 64 | 0;
 E = xa + 12 | 0;
 F = (g + -5 | 0) >>> 0 < 2;
 va = xa + 4 | 0;
 G = xa + 76 | 0;
 H = xa + 84 | 0;
 I = xa + 80 | 0;
 J = xa + 88 | 0;
 K = (g | 0) == 6;
 L = xa + 7108 | 0;
 M = xa + 72 | 0;
 N = xa + 7112 | 0;
 O = xa + 68 | 0;
 P = xa + 44 | 0;
 Q = xa + 7104 | 0;
 R = xa + 48 | 0;
 S = xa + 52 | 0;
 la = xa + 40 | 0;
 na = f + 20 | 0;
 oa = xa + 28 | 0;
 T = ca + 2 | 0;
 U = ca + 3 | 0;
 V = xa + 104 | 0;
 W = xa + 96 | 0;
 X = xa + 100 | 0;
 Y = xa + 624 | 0;
 Z = xa + 1328 | 0;
 _ = xa + 108 | 0;
 $ = xa + 112 | 0;
 aa = xa + 752 | 0;
 ba = xa + 92 | 0;
 q = k;
 n = c[za >> 2] | 0;
 m = ra;
 l = c[sa >> 2] | 0;
 k = o;
 p = 0;
 a : while (1) {
  b : do switch (q | 0) {
  case 28:
   {
    p = 1;
    x = 285;
    break a;
   }
  case 29:
   {
    ka = k;
    ja = n;
    ia = m;
    ga = l;
    fa = j;
    ha = o;
    da = h;
    ea = -3;
    break a;
   }
  case 30:
   {
    x = 297;
    break a;
   }
  case 0:
   {
    r = c[ma >> 2] | 0;
    if (!r) {
     c[xa >> 2] = 12;
     r = k;
     break b;
    }
    if (n >>> 0 < 16) {
     q = j;
     while (1) {
      if (!m) {
       ka = k;
       ja = n;
       ia = 0;
       ga = l;
       fa = q;
       ha = o;
       da = h;
       ea = p;
       break a;
      }
      m = m + -1 | 0;
      j = q + 1 | 0;
      l = (d[q >> 0] << n) + l | 0;
      n = n + 8 | 0;
      if (n >>> 0 < 16) q = j; else {
       s = l;
       break;
      }
     }
    } else s = l;
    if ((s | 0) == 35615 & (r & 2 | 0) != 0) {
     c[ta >> 2] = Xa(0, 0, 0) | 0;
     a[ca >> 0] = 31;
     a[y >> 0] = -117;
     c[ta >> 2] = Xa(c[ta >> 2] | 0, ca, 2) | 0;
     c[xa >> 2] = 1;
     n = 0;
     l = 0;
     r = k;
     break b;
    }
    c[pa >> 2] = 0;
    l = c[z >> 2] | 0;
    if (l | 0) c[l + 48 >> 2] = -1;
    if (r & 1 | 0) if (!((((s << 8 & 65280) + (s >>> 8) | 0) >>> 0) % 31 | 0)) {
     if ((s & 15 | 0) != 8) {
      c[A >> 2] = 14887;
      c[xa >> 2] = 29;
      l = s;
      r = k;
      break b;
     }
     l = s >>> 4;
     n = n + -4 | 0;
     q = (l & 15) + 8 | 0;
     r = c[B >> 2] | 0;
     if (!r) c[B >> 2] = q; else if (q >>> 0 > r >>> 0) {
      c[A >> 2] = 14914;
      c[xa >> 2] = 29;
      r = k;
      break b;
     }
     c[C >> 2] = 1 << q;
     n = Wa(0, 0, 0) | 0;
     c[ta >> 2] = n;
     c[ua >> 2] = n;
     c[xa >> 2] = s >>> 12 & 2 ^ 11;
     n = 0;
     l = 0;
     r = k;
     break b;
    }
    c[A >> 2] = 14864;
    c[xa >> 2] = 29;
    l = s;
    r = k;
    break;
   }
  case 1:
   {
    if (n >>> 0 < 16) {
     q = j;
     while (1) {
      if (!m) {
       ka = k;
       ja = n;
       ia = 0;
       ga = l;
       fa = q;
       ha = o;
       da = h;
       ea = p;
       break a;
      }
      m = m + -1 | 0;
      j = q + 1 | 0;
      l = (d[q >> 0] << n) + l | 0;
      n = n + 8 | 0;
      if (n >>> 0 < 16) q = j; else break;
     }
    }
    c[pa >> 2] = l;
    if ((l & 255 | 0) != 8) {
     c[A >> 2] = 14887;
     c[xa >> 2] = 29;
     r = k;
     break b;
    }
    if (l & 57344 | 0) {
     c[A >> 2] = 14934;
     c[xa >> 2] = 29;
     r = k;
     break b;
    }
    n = c[z >> 2] | 0;
    if (n | 0) c[n >> 2] = l >>> 8 & 1;
    if (l & 512 | 0) {
     a[ca >> 0] = l;
     a[y >> 0] = l >>> 8;
     c[ta >> 2] = Xa(c[ta >> 2] | 0, ca, 2) | 0;
    }
    c[xa >> 2] = 2;
    n = 0;
    l = 0;
    x = 47;
    break;
   }
  case 2:
   {
    if (n >>> 0 < 32) x = 47; else x = 49;
    break;
   }
  case 3:
   {
    if (n >>> 0 < 16) {
     q = j;
     x = 55;
    } else x = 57;
    break;
   }
  case 4:
   {
    x = 62;
    break;
   }
  case 5:
   {
    x = 73;
    break;
   }
  case 6:
   {
    x = 83;
    break;
   }
  case 7:
   {
    x = 96;
    break;
   }
  case 8:
   {
    x = 109;
    break;
   }
  case 9:
   {
    if (n >>> 0 < 32) {
     q = j;
     while (1) {
      if (!m) {
       ka = k;
       ja = n;
       ia = 0;
       ga = l;
       fa = q;
       ha = o;
       da = h;
       ea = p;
       break a;
      }
      m = m + -1 | 0;
      j = q + 1 | 0;
      l = (d[q >> 0] << n) + l | 0;
      n = n + 8 | 0;
      if (n >>> 0 >= 32) break; else q = j;
     }
    }
    n = Sb(l | 0) | 0;
    c[ta >> 2] = n;
    c[ua >> 2] = n;
    c[xa >> 2] = 10;
    n = 0;
    l = 0;
    x = 121;
    break;
   }
  case 10:
   {
    x = 121;
    break;
   }
  case 11:
   {
    x = 124;
    break;
   }
  case 12:
   {
    x = 125;
    break;
   }
  case 13:
   {
    w = n & 7;
    l = l >>> w;
    n = n - w | 0;
    if (n >>> 0 < 32) {
     q = j;
     while (1) {
      if (!m) {
       ka = k;
       ja = n;
       ia = 0;
       ga = l;
       fa = q;
       ha = o;
       da = h;
       ea = p;
       break a;
      }
      m = m + -1 | 0;
      j = q + 1 | 0;
      l = (d[q >> 0] << n) + l | 0;
      n = n + 8 | 0;
      if (n >>> 0 < 32) q = j; else break;
     }
    }
    q = l & 65535;
    if ((q | 0) == (l >>> 16 ^ 65535 | 0)) {
     c[D >> 2] = q;
     c[xa >> 2] = 14;
     if (K) {
      n = 0;
      l = 0;
      x = 285;
      break a;
     } else {
      n = 0;
      l = 0;
      x = 144;
      break b;
     }
    } else {
     c[A >> 2] = 14998;
     c[xa >> 2] = 29;
     r = k;
     break b;
    }
   }
  case 14:
   {
    x = 144;
    break;
   }
  case 15:
   {
    x = 145;
    break;
   }
  case 16:
   {
    if (n >>> 0 < 14) {
     q = j;
     while (1) {
      if (!m) {
       ka = k;
       ja = n;
       ia = 0;
       ga = l;
       fa = q;
       ha = o;
       da = h;
       ea = p;
       break a;
      }
      m = m + -1 | 0;
      j = q + 1 | 0;
      l = (d[q >> 0] << n) + l | 0;
      n = n + 8 | 0;
      if (n >>> 0 < 14) q = j; else break;
     }
    }
    v = (l & 31) + 257 | 0;
    c[W >> 2] = v;
    w = (l >>> 5 & 31) + 1 | 0;
    c[X >> 2] = w;
    q = (l >>> 10 & 15) + 4 | 0;
    c[ba >> 2] = q;
    l = l >>> 14;
    n = n + -14 | 0;
    if (v >>> 0 > 286 | w >>> 0 > 30) {
     c[A >> 2] = 15027;
     c[xa >> 2] = 29;
     r = k;
     break b;
    } else {
     c[V >> 2] = 0;
     c[xa >> 2] = 17;
     r = 0;
     x = 155;
     break b;
    }
   }
  case 17:
   {
    r = c[V >> 2] | 0;
    q = c[ba >> 2] | 0;
    if (r >>> 0 < q >>> 0) x = 155; else {
     p = r;
     x = 156;
    }
    break;
   }
  case 18:
   {
    s = c[V >> 2] | 0;
    x = 166;
    break;
   }
  case 19:
   {
    x = 203;
    break;
   }
  case 20:
   {
    x = 204;
    break;
   }
  case 21:
   {
    r = c[M >> 2] | 0;
    x = 222;
    break;
   }
  case 22:
   {
    x = 229;
    break;
   }
  case 23:
   {
    r = c[M >> 2] | 0;
    x = 241;
    break;
   }
  case 24:
   {
    x = 247;
    break;
   }
  case 25:
   {
    if (!k) {
     k = 0;
     x = 285;
     break a;
    }
    a[h >> 0] = c[D >> 2];
    c[xa >> 2] = 20;
    r = k + -1 | 0;
    h = h + 1 | 0;
    break;
   }
  case 26:
   {
    if (c[ma >> 2] | 0) {
     if (n >>> 0 < 32) {
      q = j;
      while (1) {
       if (!m) {
        ka = k;
        ja = n;
        ia = 0;
        ga = l;
        fa = q;
        ha = o;
        da = h;
        ea = p;
        break a;
       }
       m = m + -1 | 0;
       j = q + 1 | 0;
       l = (d[q >> 0] << n) + l | 0;
       n = n + 8 | 0;
       if (n >>> 0 < 32) q = j; else break;
      }
     }
     r = o - k | 0;
     c[na >> 2] = (c[na >> 2] | 0) + r;
     c[oa >> 2] = (c[oa >> 2] | 0) + r;
     if ((o | 0) == (k | 0)) o = c[ta >> 2] | 0; else {
      o = c[ta >> 2] | 0;
      q = h + (0 - r) | 0;
      if (!(c[pa >> 2] | 0)) o = Wa(o, q, r) | 0; else o = Xa(o, q, r) | 0;
      c[ta >> 2] = o;
      c[ua >> 2] = o;
     }
     v = (c[pa >> 2] | 0) == 0;
     w = Sb(l | 0) | 0;
     if (((v ? w : l) | 0) == (o | 0)) {
      n = 0;
      l = 0;
      o = k;
     } else {
      c[A >> 2] = 15201;
      c[xa >> 2] = 29;
      r = k;
      o = k;
      break b;
     }
    }
    c[xa >> 2] = 27;
    x = 277;
    break;
   }
  case 27:
   {
    x = 277;
    break;
   }
  default:
   {
    h = -2;
    x = 298;
    break a;
   }
  } while (0);
  if ((x | 0) == 47) while (1) {
   x = 0;
   if (!m) {
    ka = k;
    ja = n;
    ia = 0;
    ga = l;
    fa = j;
    ha = o;
    da = h;
    ea = p;
    break a;
   }
   m = m + -1 | 0;
   q = j + 1 | 0;
   l = (d[j >> 0] << n) + l | 0;
   n = n + 8 | 0;
   if (n >>> 0 >= 32) {
    j = q;
    x = 49;
    break;
   } else {
    j = q;
    x = 47;
   }
  } else if ((x | 0) == 121) {
   if (!(c[E >> 2] | 0)) {
    x = 122;
    break;
   }
   x = Wa(0, 0, 0) | 0;
   c[ta >> 2] = x;
   c[ua >> 2] = x;
   c[xa >> 2] = 11;
   x = 124;
  } else if ((x | 0) == 144) {
   c[xa >> 2] = 15;
   x = 145;
  } else if ((x | 0) == 155) {
   x = 0;
   while (1) {
    if (n >>> 0 < 3) {
     if (!m) {
      ka = k;
      ja = n;
      ia = 0;
      ga = l;
      fa = j;
      ha = o;
      da = h;
      ea = p;
      break a;
     }
     t = n + 8 | 0;
     m = m + -1 | 0;
     l = (d[j >> 0] << n) + l | 0;
     j = j + 1 | 0;
    } else t = n;
    s = r + 1 | 0;
    c[V >> 2] = s;
    b[xa + 112 + (e[13548 + (r << 1) >> 1] << 1) >> 1] = l & 7;
    l = l >>> 3;
    n = t + -3 | 0;
    if (s >>> 0 < q >>> 0) r = s; else {
     p = s;
     x = 156;
     break;
    }
   }
  } else if ((x | 0) == 277) {
   x = 0;
   if (!(c[ma >> 2] | 0)) {
    x = 284;
    break;
   }
   if (!(c[pa >> 2] | 0)) {
    x = 284;
    break;
   }
   if (n >>> 0 < 32) {
    q = j;
    while (1) {
     if (!m) {
      ka = k;
      ja = n;
      ia = 0;
      ga = l;
      fa = q;
      ha = o;
      da = h;
      ea = p;
      break a;
     }
     m = m + -1 | 0;
     j = q + 1 | 0;
     l = (d[q >> 0] << n) + l | 0;
     n = n + 8 | 0;
     if (n >>> 0 < 32) q = j; else break;
    }
   }
   if ((l | 0) == (c[oa >> 2] | 0)) {
    n = 0;
    l = 0;
    x = 284;
    break;
   }
   c[A >> 2] = 15222;
   c[xa >> 2] = 29;
   r = k;
  }
  do if ((x | 0) == 49) {
   n = c[z >> 2] | 0;
   if (n | 0) c[n + 4 >> 2] = l;
   if (c[pa >> 2] & 512 | 0) {
    a[ca >> 0] = l;
    a[y >> 0] = l >>> 8;
    a[T >> 0] = l >>> 16;
    a[U >> 0] = l >>> 24;
    c[ta >> 2] = Xa(c[ta >> 2] | 0, ca, 4) | 0;
   }
   c[xa >> 2] = 3;
   n = 0;
   l = 0;
   q = j;
   x = 55;
  } else if ((x | 0) == 124) if (F) {
   x = 285;
   break a;
  } else x = 125; else if ((x | 0) == 145) {
   x = 0;
   q = c[D >> 2] | 0;
   if (!q) {
    c[xa >> 2] = 11;
    r = k;
    break;
   }
   q = q >>> 0 > m >>> 0 ? m : q;
   q = q >>> 0 > k >>> 0 ? k : q;
   if (!q) {
    x = 285;
    break a;
   }
   Ob(h | 0, j | 0, q | 0) | 0;
   c[D >> 2] = (c[D >> 2] | 0) - q;
   m = m - q | 0;
   r = k - q | 0;
   j = j + q | 0;
   h = h + q | 0;
  } else if ((x | 0) == 156) {
   x = 0;
   if (p >>> 0 < 19) {
    do {
     b[xa + 112 + (e[13548 + (p << 1) >> 1] << 1) >> 1] = 0;
     p = p + 1 | 0;
    } while ((p | 0) != 19);
    c[V >> 2] = 19;
   }
   c[_ >> 2] = Z;
   c[G >> 2] = Z;
   c[H >> 2] = 7;
   p = bb(0, $, 19, _, H, aa) | 0;
   if (!p) {
    c[V >> 2] = 0;
    c[xa >> 2] = 18;
    s = 0;
    p = 0;
    x = 166;
    break;
   } else {
    c[A >> 2] = 15063;
    c[xa >> 2] = 29;
    r = k;
    break;
   }
  } while (0);
  c : do if ((x | 0) == 55) while (1) {
   x = 0;
   if (!m) {
    ka = k;
    ja = n;
    ia = 0;
    ga = l;
    fa = q;
    ha = o;
    da = h;
    ea = p;
    break a;
   }
   m = m + -1 | 0;
   j = q + 1 | 0;
   l = (d[q >> 0] << n) + l | 0;
   n = n + 8 | 0;
   if (n >>> 0 >= 16) {
    x = 57;
    break;
   } else {
    q = j;
    x = 55;
   }
  } else if ((x | 0) == 125) {
   x = 0;
   if (c[va >> 2] | 0) {
    r = n & 7;
    c[xa >> 2] = 26;
    n = n - r | 0;
    l = l >>> r;
    r = k;
    break;
   }
   if (n >>> 0 < 3) {
    if (!m) {
     m = 0;
     x = 285;
     break a;
    }
    q = n + 8 | 0;
    m = m + -1 | 0;
    l = (d[j >> 0] << n) + l | 0;
    j = j + 1 | 0;
   } else q = n;
   c[va >> 2] = l & 1;
   switch (l >>> 1 & 3 | 0) {
   case 0:
    {
     c[xa >> 2] = 13;
     break;
    }
   case 1:
    {
     c[G >> 2] = 11372;
     c[H >> 2] = 9;
     c[I >> 2] = 13420;
     c[J >> 2] = 5;
     c[xa >> 2] = 19;
     if (K) {
      n = p;
      x = 133;
      break a;
     }
     break;
    }
   case 2:
    {
     c[xa >> 2] = 16;
     break;
    }
   case 3:
    {
     c[A >> 2] = 14979;
     c[xa >> 2] = 29;
     break;
    }
   default:
    {
     x = 136;
     break a;
    }
   }
   n = q + -3 | 0;
   l = l >>> 3;
   r = k;
  } else if ((x | 0) == 166) {
   x = 0;
   q = c[W >> 2] | 0;
   r = c[X >> 2] | 0;
   do if (s >>> 0 < (r + q | 0) >>> 0) {
    w = s;
    d : while (1) {
     u = (1 << c[H >> 2]) + -1 | 0;
     t = u & l;
     v = c[G >> 2] | 0;
     s = d[v + (t << 2) + 1 >> 0] | 0;
     if (s >>> 0 > n >>> 0) {
      s = j;
      while (1) {
       if (!m) {
        ka = k;
        ja = n;
        ia = 0;
        ga = l;
        fa = s;
        ha = o;
        da = h;
        ea = p;
        break a;
       }
       m = m + -1 | 0;
       j = s + 1 | 0;
       l = (d[s >> 0] << n) + l | 0;
       n = n + 8 | 0;
       t = u & l;
       s = d[v + (t << 2) + 1 >> 0] | 0;
       if (s >>> 0 > n >>> 0) s = j; else break;
      }
     }
     t = b[v + (t << 2) + 2 >> 1] | 0;
     if ((t & 65535) < 16) {
      if (n >>> 0 < s >>> 0) {
       q = j;
       while (1) {
        if (!m) {
         ka = k;
         ja = n;
         ia = 0;
         ga = l;
         fa = q;
         ha = o;
         da = h;
         ea = p;
         break a;
        }
        m = m + -1 | 0;
        j = q + 1 | 0;
        l = (d[q >> 0] << n) + l | 0;
        n = n + 8 | 0;
        if (n >>> 0 < s >>> 0) q = j; else break;
       }
      }
      c[V >> 2] = w + 1;
      b[xa + 112 + (w << 1) >> 1] = t;
      n = n - s | 0;
      l = l >>> s;
     } else {
      switch (t << 16 >> 16) {
      case 16:
       {
        u = s + 2 | 0;
        if (n >>> 0 < u >>> 0) {
         t = j;
         while (1) {
          if (!m) {
           ka = k;
           ja = n;
           ia = 0;
           ga = l;
           fa = t;
           ha = o;
           da = h;
           ea = p;
           break a;
          }
          m = m + -1 | 0;
          j = t + 1 | 0;
          l = (d[t >> 0] << n) + l | 0;
          n = n + 8 | 0;
          if (n >>> 0 < u >>> 0) t = j; else break;
         }
        }
        l = l >>> s;
        n = n - s | 0;
        if (!w) {
         x = 183;
         break d;
        }
        n = n + -2 | 0;
        t = (l & 3) + 3 | 0;
        l = l >>> 2;
        s = e[xa + 112 + (w + -1 << 1) >> 1] | 0;
        break;
       }
      case 17:
       {
        u = s + 3 | 0;
        if (n >>> 0 < u >>> 0) {
         t = j;
         while (1) {
          if (!m) {
           ka = k;
           ja = n;
           ia = 0;
           ga = l;
           fa = t;
           ha = o;
           da = h;
           ea = p;
           break a;
          }
          m = m + -1 | 0;
          j = t + 1 | 0;
          l = (d[t >> 0] << n) + l | 0;
          n = n + 8 | 0;
          if (n >>> 0 < u >>> 0) t = j; else break;
         }
        }
        l = l >>> s;
        n = -3 - s + n | 0;
        t = (l & 7) + 3 | 0;
        l = l >>> 3;
        s = 0;
        break;
       }
      default:
       {
        u = s + 7 | 0;
        if (n >>> 0 < u >>> 0) {
         t = j;
         while (1) {
          if (!m) {
           ka = k;
           ja = n;
           ia = 0;
           ga = l;
           fa = t;
           ha = o;
           da = h;
           ea = p;
           break a;
          }
          m = m + -1 | 0;
          j = t + 1 | 0;
          l = (d[t >> 0] << n) + l | 0;
          n = n + 8 | 0;
          if (n >>> 0 < u >>> 0) t = j; else break;
         }
        }
        l = l >>> s;
        n = -7 - s + n | 0;
        t = (l & 127) + 11 | 0;
        l = l >>> 7;
        s = 0;
       }
      }
      if ((w + t | 0) >>> 0 > (r + q | 0) >>> 0) {
       x = 193;
       break;
      }
      r = s & 65535;
      q = t + -1 | 0;
      c[V >> 2] = w + 1;
      b[xa + 112 + (w << 1) >> 1] = r;
      if (q) do {
       w = c[V >> 2] | 0;
       q = q + -1 | 0;
       c[V >> 2] = w + 1;
       b[xa + 112 + (w << 1) >> 1] = r;
      } while ((q | 0) != 0);
     }
     w = c[V >> 2] | 0;
     q = c[W >> 2] | 0;
     r = c[X >> 2] | 0;
     if (w >>> 0 >= (r + q | 0) >>> 0) {
      x = 195;
      break;
     }
    }
    if ((x | 0) == 183) {
     x = 0;
     c[A >> 2] = 15088;
     c[xa >> 2] = 29;
     r = k;
     break c;
    } else if ((x | 0) == 193) {
     x = 0;
     c[A >> 2] = 15088;
     c[xa >> 2] = 29;
     r = k;
     break c;
    } else if ((x | 0) == 195) {
     x = 0;
     if ((c[xa >> 2] | 0) == 29) {
      r = k;
      break c;
     } else break;
    }
   } while (0);
   if (!(b[Y >> 1] | 0)) {
    c[A >> 2] = 15114;
    c[xa >> 2] = 29;
    r = k;
    break;
   }
   c[_ >> 2] = Z;
   c[G >> 2] = Z;
   c[H >> 2] = 9;
   p = bb(1, $, q, _, H, aa) | 0;
   if (p | 0) {
    c[A >> 2] = 15151;
    c[xa >> 2] = 29;
    r = k;
    break;
   }
   c[I >> 2] = c[_ >> 2];
   c[J >> 2] = 6;
   p = bb(2, xa + 112 + (c[W >> 2] << 1) | 0, c[X >> 2] | 0, _, J, aa) | 0;
   if (!p) {
    c[xa >> 2] = 19;
    if (K) {
     p = 0;
     x = 285;
     break a;
    } else {
     p = 0;
     x = 203;
     break;
    }
   } else {
    c[A >> 2] = 15179;
    c[xa >> 2] = 29;
    r = k;
    break;
   }
  } while (0);
  if ((x | 0) == 57) {
   n = c[z >> 2] | 0;
   if (n | 0) {
    c[n + 8 >> 2] = l & 255;
    c[n + 12 >> 2] = l >>> 8;
   }
   if (c[pa >> 2] & 512 | 0) {
    a[ca >> 0] = l;
    a[y >> 0] = l >>> 8;
    c[ta >> 2] = Xa(c[ta >> 2] | 0, ca, 2) | 0;
   }
   c[xa >> 2] = 4;
   n = 0;
   l = 0;
   x = 62;
  } else if ((x | 0) == 203) {
   c[xa >> 2] = 20;
   x = 204;
  }
  do if ((x | 0) == 62) {
   x = 0;
   r = c[pa >> 2] | 0;
   if (!(r & 1024)) {
    q = c[z >> 2] | 0;
    if (q) c[q + 16 >> 2] = 0;
   } else {
    if (n >>> 0 < 16) {
     q = j;
     while (1) {
      if (!m) {
       ka = k;
       ja = n;
       ia = 0;
       ga = l;
       fa = q;
       ha = o;
       da = h;
       ea = p;
       break a;
      }
      m = m + -1 | 0;
      j = q + 1 | 0;
      l = (d[q >> 0] << n) + l | 0;
      n = n + 8 | 0;
      if (n >>> 0 >= 16) break; else q = j;
     }
    }
    c[D >> 2] = l;
    n = c[z >> 2] | 0;
    if (n | 0) c[n + 20 >> 2] = l;
    if (!(r & 512)) {
     n = 0;
     l = 0;
    } else {
     a[ca >> 0] = l;
     a[y >> 0] = l >>> 8;
     c[ta >> 2] = Xa(c[ta >> 2] | 0, ca, 2) | 0;
     n = 0;
     l = 0;
    }
   }
   c[xa >> 2] = 5;
   x = 73;
  } else if ((x | 0) == 204) {
   x = 0;
   if (k >>> 0 > 257 & m >>> 0 > 5) {
    c[ya >> 2] = h;
    c[wa >> 2] = k;
    c[f >> 2] = j;
    c[qa >> 2] = m;
    c[sa >> 2] = l;
    c[za >> 2] = n;
    cb(f, o);
    h = c[ya >> 2] | 0;
    k = c[wa >> 2] | 0;
    j = c[f >> 2] | 0;
    m = c[qa >> 2] | 0;
    l = c[sa >> 2] | 0;
    n = c[za >> 2] | 0;
    if ((c[xa >> 2] | 0) != 11) {
     r = k;
     break;
    }
    c[L >> 2] = -1;
    r = k;
    break;
   }
   c[L >> 2] = 0;
   t = (1 << c[H >> 2]) + -1 | 0;
   s = t & l;
   v = c[G >> 2] | 0;
   q = a[v + (s << 2) + 1 >> 0] | 0;
   r = q & 255;
   if (r >>> 0 > n >>> 0) {
    q = j;
    while (1) {
     if (!m) {
      ka = k;
      ja = n;
      ia = 0;
      ga = l;
      fa = q;
      ha = o;
      da = h;
      ea = p;
      break a;
     }
     m = m + -1 | 0;
     j = q + 1 | 0;
     l = (d[q >> 0] << n) + l | 0;
     n = n + 8 | 0;
     s = t & l;
     q = a[v + (s << 2) + 1 >> 0] | 0;
     r = q & 255;
     if (r >>> 0 > n >>> 0) q = j; else break;
    }
   }
   t = a[v + (s << 2) >> 0] | 0;
   u = b[v + (s << 2) + 2 >> 1] | 0;
   s = t & 255;
   if (t << 24 >> 24 != 0 & (s & 240 | 0) == 0) {
    u = u & 65535;
    t = (1 << r + s) + -1 | 0;
    s = ((l & t) >>> r) + u | 0;
    q = a[v + (s << 2) + 1 >> 0] | 0;
    if (((q & 255) + r | 0) >>> 0 > n >>> 0) {
     q = j;
     while (1) {
      if (!m) {
       ka = k;
       ja = n;
       ia = 0;
       ga = l;
       fa = q;
       ha = o;
       da = h;
       ea = p;
       break a;
      }
      m = m + -1 | 0;
      j = q + 1 | 0;
      l = (d[q >> 0] << n) + l | 0;
      n = n + 8 | 0;
      s = ((l & t) >>> r) + u | 0;
      q = a[v + (s << 2) + 1 >> 0] | 0;
      if (((q & 255) + r | 0) >>> 0 > n >>> 0) q = j; else break;
     }
    }
    u = b[v + (s << 2) + 2 >> 1] | 0;
    t = a[v + (s << 2) >> 0] | 0;
    c[L >> 2] = r;
    s = r;
    n = n - r | 0;
    l = l >>> r;
   } else s = 0;
   q = q & 255;
   l = l >>> q;
   n = n - q | 0;
   c[L >> 2] = s + q;
   c[D >> 2] = u & 65535;
   q = t & 255;
   if (!(t << 24 >> 24)) {
    c[xa >> 2] = 25;
    r = k;
    break;
   }
   if (q & 32 | 0) {
    c[L >> 2] = -1;
    c[xa >> 2] = 11;
    r = k;
    break;
   }
   if (!(q & 64)) {
    r = q & 15;
    c[M >> 2] = r;
    c[xa >> 2] = 21;
    x = 222;
    break;
   } else {
    c[A >> 2] = 15297;
    c[xa >> 2] = 29;
    r = k;
    break;
   }
  } while (0);
  if ((x | 0) == 73) {
   q = c[pa >> 2] | 0;
   if (q & 1024) {
    r = c[D >> 2] | 0;
    u = r >>> 0 > m >>> 0 ? m : r;
    if (!u) q = r; else {
     s = c[z >> 2] | 0;
     if (s) {
      t = c[s + 16 >> 2] | 0;
      if (t) {
       q = (c[s + 20 >> 2] | 0) - r | 0;
       x = c[s + 24 >> 2] | 0;
       Ob(t + q | 0, j | 0, ((q + u | 0) >>> 0 > x >>> 0 ? x - q | 0 : u) | 0) | 0;
       q = c[pa >> 2] | 0;
      }
     }
     if (q & 512 | 0) c[ta >> 2] = Xa(c[ta >> 2] | 0, j, u) | 0;
     q = (c[D >> 2] | 0) - u | 0;
     c[D >> 2] = q;
     m = m - u | 0;
     j = j + u | 0;
    }
    if (q) {
     x = 285;
     break;
    }
   }
   c[D >> 2] = 0;
   c[xa >> 2] = 6;
   x = 83;
  } else if ((x | 0) == 222) {
   x = 0;
   if (!r) q = c[D >> 2] | 0; else {
    if (n >>> 0 < r >>> 0) {
     q = j;
     while (1) {
      if (!m) {
       ka = k;
       ja = n;
       ia = 0;
       ga = l;
       fa = q;
       ha = o;
       da = h;
       ea = p;
       break a;
      }
      m = m + -1 | 0;
      j = q + 1 | 0;
      l = (d[q >> 0] << n) + l | 0;
      n = n + 8 | 0;
      if (n >>> 0 < r >>> 0) q = j; else break;
     }
    }
    q = (c[D >> 2] | 0) + ((1 << r) + -1 & l) | 0;
    c[D >> 2] = q;
    c[L >> 2] = (c[L >> 2] | 0) + r;
    n = n - r | 0;
    l = l >>> r;
   }
   c[N >> 2] = q;
   c[xa >> 2] = 22;
   x = 229;
  }
  do if ((x | 0) == 83) {
   if (!(c[pa >> 2] & 2048)) {
    q = c[z >> 2] | 0;
    if (q) c[q + 28 >> 2] = 0;
   } else {
    if (!m) {
     m = 0;
     x = 285;
     break a;
    } else q = 0;
    while (1) {
     r = q + 1 | 0;
     q = a[j + q >> 0] | 0;
     s = c[z >> 2] | 0;
     if (s | 0) {
      t = c[s + 28 >> 2] | 0;
      if (t | 0) {
       u = c[D >> 2] | 0;
       if (u >>> 0 < (c[s + 32 >> 2] | 0) >>> 0) {
        c[D >> 2] = u + 1;
        a[t + u >> 0] = q;
       }
      }
     }
     q = q << 24 >> 24 != 0;
     if (q & m >>> 0 > r >>> 0) q = r; else break;
    }
    if (c[pa >> 2] & 512 | 0) c[ta >> 2] = Xa(c[ta >> 2] | 0, j, r) | 0;
    m = m - r | 0;
    j = j + r | 0;
    if (q) {
     x = 285;
     break a;
    }
   }
   c[D >> 2] = 0;
   c[xa >> 2] = 7;
   x = 96;
  } else if ((x | 0) == 229) {
   x = 0;
   t = (1 << c[J >> 2]) + -1 | 0;
   s = t & l;
   v = c[I >> 2] | 0;
   q = a[v + (s << 2) + 1 >> 0] | 0;
   r = q & 255;
   if (r >>> 0 > n >>> 0) {
    q = j;
    while (1) {
     if (!m) {
      ka = k;
      ja = n;
      ia = 0;
      ga = l;
      fa = q;
      ha = o;
      da = h;
      ea = p;
      break a;
     }
     m = m + -1 | 0;
     j = q + 1 | 0;
     l = (d[q >> 0] << n) + l | 0;
     n = n + 8 | 0;
     s = t & l;
     q = a[v + (s << 2) + 1 >> 0] | 0;
     r = q & 255;
     if (r >>> 0 > n >>> 0) q = j; else break;
    }
   }
   t = a[v + (s << 2) >> 0] | 0;
   u = b[v + (s << 2) + 2 >> 1] | 0;
   s = t & 255;
   if (!(s & 240)) {
    u = u & 65535;
    t = (1 << r + s) + -1 | 0;
    s = ((l & t) >>> r) + u | 0;
    q = a[v + (s << 2) + 1 >> 0] | 0;
    if (((q & 255) + r | 0) >>> 0 > n >>> 0) {
     q = j;
     while (1) {
      if (!m) {
       ka = k;
       ja = n;
       ia = 0;
       ga = l;
       fa = q;
       ha = o;
       da = h;
       ea = p;
       break a;
      }
      m = m + -1 | 0;
      j = q + 1 | 0;
      l = (d[q >> 0] << n) + l | 0;
      n = n + 8 | 0;
      s = ((l & t) >>> r) + u | 0;
      q = a[v + (s << 2) + 1 >> 0] | 0;
      if (((q & 255) + r | 0) >>> 0 > n >>> 0) q = j; else break;
     }
    }
    u = b[v + (s << 2) + 2 >> 1] | 0;
    t = a[v + (s << 2) >> 0] | 0;
    s = (c[L >> 2] | 0) + r | 0;
    c[L >> 2] = s;
    n = n - r | 0;
    l = l >>> r;
   } else s = c[L >> 2] | 0;
   q = q & 255;
   l = l >>> q;
   n = n - q | 0;
   c[L >> 2] = s + q;
   q = t & 255;
   if (!(q & 64)) {
    c[O >> 2] = u & 65535;
    r = q & 15;
    c[M >> 2] = r;
    c[xa >> 2] = 23;
    x = 241;
    break;
   } else {
    c[A >> 2] = 15275;
    c[xa >> 2] = 29;
    r = k;
    break;
   }
  } while (0);
  if ((x | 0) == 96) {
   if (!(c[pa >> 2] & 4096)) {
    q = c[z >> 2] | 0;
    if (q) c[q + 36 >> 2] = 0;
   } else {
    if (!m) {
     m = 0;
     x = 285;
     break;
    } else q = 0;
    while (1) {
     r = q + 1 | 0;
     q = a[j + q >> 0] | 0;
     s = c[z >> 2] | 0;
     if (s | 0) {
      t = c[s + 36 >> 2] | 0;
      if (t | 0) {
       u = c[D >> 2] | 0;
       if (u >>> 0 < (c[s + 40 >> 2] | 0) >>> 0) {
        c[D >> 2] = u + 1;
        a[t + u >> 0] = q;
       }
      }
     }
     q = q << 24 >> 24 != 0;
     if (q & m >>> 0 > r >>> 0) q = r; else break;
    }
    if (c[pa >> 2] & 512 | 0) c[ta >> 2] = Xa(c[ta >> 2] | 0, j, r) | 0;
    m = m - r | 0;
    j = j + r | 0;
    if (q) {
     x = 285;
     break;
    }
   }
   c[xa >> 2] = 8;
   x = 109;
  } else if ((x | 0) == 241) {
   x = 0;
   if (r) {
    if (n >>> 0 < r >>> 0) {
     q = j;
     while (1) {
      if (!m) {
       ka = k;
       ja = n;
       ia = 0;
       ga = l;
       fa = q;
       ha = o;
       da = h;
       ea = p;
       break a;
      }
      m = m + -1 | 0;
      j = q + 1 | 0;
      l = (d[q >> 0] << n) + l | 0;
      n = n + 8 | 0;
      if (n >>> 0 < r >>> 0) q = j; else break;
     }
    }
    c[O >> 2] = (c[O >> 2] | 0) + ((1 << r) + -1 & l);
    c[L >> 2] = (c[L >> 2] | 0) + r;
    n = n - r | 0;
    l = l >>> r;
   }
   c[xa >> 2] = 24;
   x = 247;
  }
  do if ((x | 0) == 109) {
   x = 0;
   r = c[pa >> 2] | 0;
   if (r & 512) {
    if (n >>> 0 < 16) {
     q = j;
     while (1) {
      if (!m) {
       ka = k;
       ja = n;
       ia = 0;
       ga = l;
       fa = q;
       ha = o;
       da = h;
       ea = p;
       break a;
      }
      m = m + -1 | 0;
      j = q + 1 | 0;
      l = (d[q >> 0] << n) + l | 0;
      n = n + 8 | 0;
      if (n >>> 0 < 16) q = j; else break;
     }
    }
    if ((l | 0) == (c[ta >> 2] & 65535 | 0)) {
     n = 0;
     l = 0;
    } else {
     c[A >> 2] = 14959;
     c[xa >> 2] = 29;
     r = k;
     break;
    }
   }
   q = c[z >> 2] | 0;
   if (q | 0) {
    c[q + 44 >> 2] = r >>> 9 & 1;
    c[q + 48 >> 2] = 1;
   }
   r = Xa(0, 0, 0) | 0;
   c[ta >> 2] = r;
   c[ua >> 2] = r;
   c[xa >> 2] = 11;
   r = k;
  } else if ((x | 0) == 247) {
   x = 0;
   if (!k) {
    k = 0;
    x = 285;
    break a;
   }
   q = o - k | 0;
   r = c[O >> 2] | 0;
   if (r >>> 0 > q >>> 0) {
    q = r - q | 0;
    if (q >>> 0 > (c[P >> 2] | 0) >>> 0) if (c[Q >> 2] | 0) {
     c[A >> 2] = 15245;
     c[xa >> 2] = 29;
     r = k;
     break;
    }
    r = c[R >> 2] | 0;
    if (q >>> 0 > r >>> 0) {
     q = q - r | 0;
     s = q;
     q = (c[S >> 2] | 0) + ((c[la >> 2] | 0) - q) | 0;
    } else {
     s = q;
     q = (c[S >> 2] | 0) + (r - q) | 0;
    }
    w = c[D >> 2] | 0;
    t = w;
    s = s >>> 0 > w >>> 0 ? w : s;
   } else {
    s = c[D >> 2] | 0;
    t = s;
    q = h + (0 - r) | 0;
   }
   u = s >>> 0 > k >>> 0 ? k : s;
   c[D >> 2] = t - u;
   s = u;
   r = h;
   while (1) {
    h = r + 1 | 0;
    a[r >> 0] = a[q >> 0] | 0;
    s = s + -1 | 0;
    if (!s) break; else {
     q = q + 1 | 0;
     r = h;
    }
   }
   k = k - u | 0;
   if (!(c[D >> 2] | 0)) {
    c[xa >> 2] = 20;
    r = k;
   } else r = k;
  } while (0);
  q = c[xa >> 2] | 0;
  k = r;
 }
 if ((x | 0) == 122) {
  c[ya >> 2] = h;
  c[wa >> 2] = k;
  c[f >> 2] = j;
  c[qa >> 2] = m;
  c[sa >> 2] = l;
  c[za >> 2] = n;
  f = 2;
  i = Aa;
  return f | 0;
 } else if ((x | 0) == 133) {
  ka = k;
  ja = q + -3 | 0;
  ia = m;
  ga = l >>> 3;
  fa = j;
  ha = o;
  da = h;
  ea = n;
 } else if ((x | 0) != 136) if ((x | 0) == 284) {
  c[xa >> 2] = 28;
  ka = k;
  ja = n;
  ia = m;
  ga = l;
  fa = j;
  ha = o;
  da = h;
  ea = 1;
 } else if ((x | 0) == 285) {
  ka = k;
  ja = n;
  ia = m;
  ga = l;
  fa = j;
  ha = o;
  da = h;
  ea = p;
 } else if ((x | 0) == 297) {
  f = -4;
  i = Aa;
  return f | 0;
 } else if ((x | 0) == 298) {
  i = Aa;
  return h | 0;
 }
 c[ya >> 2] = da;
 c[wa >> 2] = ka;
 c[f >> 2] = fa;
 c[qa >> 2] = ia;
 c[sa >> 2] = ga;
 c[za >> 2] = ja;
 if (!(c[la >> 2] | 0)) if ((c[xa >> 2] | 0) >>> 0 > 25 | (ha | 0) == (ka | 0)) {
  m = ia;
  l = ka;
 } else x = 288; else x = 288;
 do if ((x | 0) == 288) {
  if (!($a(f, ha) | 0)) {
   m = c[qa >> 2] | 0;
   l = c[wa >> 2] | 0;
   break;
  }
  c[xa >> 2] = 30;
  f = -4;
  i = Aa;
  return f | 0;
 } while (0);
 k = ha - l | 0;
 wa = f + 8 | 0;
 c[wa >> 2] = ra - m + (c[wa >> 2] | 0);
 c[na >> 2] = (c[na >> 2] | 0) + k;
 c[oa >> 2] = (c[oa >> 2] | 0) + k;
 if ((ha | 0) != (l | 0) & (c[ma >> 2] | 0) != 0) {
  j = c[ta >> 2] | 0;
  h = (c[ya >> 2] | 0) + (0 - k) | 0;
  if (!(c[pa >> 2] | 0)) h = Wa(j, h, k) | 0; else h = Xa(j, h, k) | 0;
  c[ta >> 2] = h;
  c[ua >> 2] = h;
 }
 ya = c[xa >> 2] | 0;
 c[f + 44 >> 2] = (c[va >> 2] | 0 ? 64 : 0) + (c[za >> 2] | 0) + ((ya | 0) == 11 ? 128 : 0) + ((ya | 0) == 19 | (ya | 0) == 14 ? 256 : 0);
 f = (ea | 0) == 0 & ((g | 0) == 4 | (ra | 0) == (m | 0) & (ha | 0) == (l | 0)) ? -5 : ea;
 i = Aa;
 return f | 0;
}
function Gb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  q = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = q >>> 3;
  k = c[4452] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 17848 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[4452] = k & ~(1 << b); else {
    if (h >>> 0 < (c[4456] | 0) >>> 0) aa();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else aa();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  h = c[4454] | 0;
  if (q >>> 0 > h >>> 0) {
   if (b | 0) {
    d = 2 << a;
    d = b << a & (d | 0 - d);
    d = (d & 0 - d) + -1 | 0;
    j = d >>> 12 & 16;
    d = d >>> j;
    f = d >>> 5 & 8;
    d = d >>> f;
    g = d >>> 2 & 4;
    d = d >>> g;
    e = d >>> 1 & 2;
    d = d >>> e;
    b = d >>> 1 & 1;
    b = (f | j | g | e | b) + (d >>> b) | 0;
    d = 17848 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[4452] = k & ~(1 << b);
     l = h;
    } else {
     if (f >>> 0 < (c[4456] | 0) >>> 0) aa();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      l = c[4454] | 0;
      break;
     } else aa();
    } while (0);
    h = (b << 3) - q | 0;
    c[g + 4 >> 2] = q | 3;
    e = g + q | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (l | 0) {
     f = c[4457] | 0;
     b = l >>> 3;
     d = 17848 + (b << 1 << 2) | 0;
     a = c[4452] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[4452] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = f;
     c[n + 12 >> 2] = f;
     c[f + 8 >> 2] = n;
     c[f + 12 >> 2] = d;
    }
    c[4454] = h;
    c[4457] = e;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[4453] | 0;
   if (a) {
    d = (a & 0 - a) + -1 | 0;
    B = d >>> 12 & 16;
    d = d >>> B;
    A = d >>> 5 & 8;
    d = d >>> A;
    C = d >>> 2 & 4;
    d = d >>> C;
    b = d >>> 1 & 2;
    d = d >>> b;
    e = d >>> 1 & 1;
    e = c[18112 + ((A | B | C | b | e) + (d >>> e) << 2) >> 2] | 0;
    d = (c[e + 4 >> 2] & -8) - q | 0;
    b = e;
    while (1) {
     a = c[b + 16 >> 2] | 0;
     if (!a) {
      a = c[b + 20 >> 2] | 0;
      if (!a) {
       k = e;
       break;
      }
     }
     b = (c[a + 4 >> 2] & -8) - q | 0;
     C = b >>> 0 < d >>> 0;
     d = C ? b : d;
     b = a;
     e = C ? a : e;
    }
    g = c[4456] | 0;
    if (k >>> 0 < g >>> 0) aa();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) aa();
    h = c[k + 24 >> 2] | 0;
    e = c[k + 12 >> 2] | 0;
    do if ((e | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       o = 0;
       break;
      }
     }
     while (1) {
      e = a + 20 | 0;
      f = c[e >> 2] | 0;
      if (f | 0) {
       a = f;
       b = e;
       continue;
      }
      e = a + 16 | 0;
      f = c[e >> 2] | 0;
      if (!f) break; else {
       a = f;
       b = e;
      }
     }
     if (b >>> 0 < g >>> 0) aa(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     f = c[k + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) aa();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) aa();
     b = e + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = e;
      c[b >> 2] = f;
      o = e;
      break;
     } else aa();
    } while (0);
    do if (h | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 18112 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[4453] = c[4453] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[4456] | 0) >>> 0) aa();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[h + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[4456] | 0;
     if (o >>> 0 < b >>> 0) aa();
     c[o + 24 >> 2] = h;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) aa(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
      c[o + 20 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     }
    } while (0);
    if (d >>> 0 < 16) {
     C = d + q | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = q | 3;
     c[j + 4 >> 2] = d | 1;
     c[j + d >> 2] = d;
     a = c[4454] | 0;
     if (a | 0) {
      f = c[4457] | 0;
      b = a >>> 3;
      e = 17848 + (b << 1 << 2) | 0;
      a = c[4452] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[4452] = a | b;
       r = e + 8 | 0;
       s = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = f;
      c[s + 12 >> 2] = f;
      c[f + 8 >> 2] = s;
      c[f + 12 >> 2] = e;
     }
     c[4454] = d;
     c[4457] = j;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) q = -1; else {
  a = a + 11 | 0;
  q = a & -8;
  k = c[4453] | 0;
  if (k) {
   d = 0 - q | 0;
   a = a >>> 8;
   if (!a) j = 0; else if (q >>> 0 > 16777215) j = 31; else {
    s = (a + 1048320 | 0) >>> 16 & 8;
    w = a << s;
    r = (w + 520192 | 0) >>> 16 & 4;
    w = w << r;
    j = (w + 245760 | 0) >>> 16 & 2;
    j = 14 - (r | s | j) + (w << j >>> 15) | 0;
    j = q >>> (j + 7 | 0) & 1 | j << 1;
   }
   b = c[18112 + (j << 2) >> 2] | 0;
   a : do if (!b) {
    a = 0;
    b = 0;
    w = 86;
   } else {
    f = d;
    a = 0;
    g = q << ((j | 0) == 31 ? 0 : 25 - (j >>> 1) | 0);
    h = b;
    b = 0;
    while (1) {
     e = c[h + 4 >> 2] & -8;
     d = e - q | 0;
     if (d >>> 0 < f >>> 0) if ((e | 0) == (q | 0)) {
      a = h;
      b = h;
      w = 90;
      break a;
     } else b = h; else d = f;
     e = c[h + 20 >> 2] | 0;
     h = c[h + 16 + (g >>> 31 << 2) >> 2] | 0;
     a = (e | 0) == 0 | (e | 0) == (h | 0) ? a : e;
     e = (h | 0) == 0;
     if (e) {
      w = 86;
      break;
     } else {
      f = d;
      g = g << (e & 1 ^ 1);
     }
    }
   } while (0);
   if ((w | 0) == 86) {
    if ((a | 0) == 0 & (b | 0) == 0) {
     a = 2 << j;
     a = k & (a | 0 - a);
     if (!a) break;
     s = (a & 0 - a) + -1 | 0;
     n = s >>> 12 & 16;
     s = s >>> n;
     m = s >>> 5 & 8;
     s = s >>> m;
     o = s >>> 2 & 4;
     s = s >>> o;
     r = s >>> 1 & 2;
     s = s >>> r;
     a = s >>> 1 & 1;
     a = c[18112 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
    }
    if (!a) {
     h = d;
     k = b;
    } else w = 90;
   }
   if ((w | 0) == 90) while (1) {
    w = 0;
    s = (c[a + 4 >> 2] & -8) - q | 0;
    e = s >>> 0 < d >>> 0;
    d = e ? s : d;
    b = e ? a : b;
    e = c[a + 16 >> 2] | 0;
    if (e | 0) {
     a = e;
     w = 90;
     continue;
    }
    a = c[a + 20 >> 2] | 0;
    if (!a) {
     h = d;
     k = b;
     break;
    } else w = 90;
   }
   if (k) if (h >>> 0 < ((c[4454] | 0) - q | 0) >>> 0) {
    f = c[4456] | 0;
    if (k >>> 0 < f >>> 0) aa();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) aa();
    g = c[k + 24 >> 2] | 0;
    d = c[k + 12 >> 2] | 0;
    do if ((d | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       t = 0;
       break;
      }
     }
     while (1) {
      d = a + 20 | 0;
      e = c[d >> 2] | 0;
      if (e | 0) {
       a = e;
       b = d;
       continue;
      }
      d = a + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       a = e;
       b = d;
      }
     }
     if (b >>> 0 < f >>> 0) aa(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) aa();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) aa();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else aa();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 18112 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[4453] = c[4453] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[4456] | 0) >>> 0) aa();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[4456] | 0;
     if (t >>> 0 < b >>> 0) aa();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) aa(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
      c[t + 20 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     }
    } while (0);
    do if (h >>> 0 < 16) {
     C = h + q | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = q | 3;
     c[j + 4 >> 2] = h | 1;
     c[j + h >> 2] = h;
     a = h >>> 3;
     if (h >>> 0 < 256) {
      d = 17848 + (a << 1 << 2) | 0;
      b = c[4452] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[4452] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
        u = a;
        v = b;
       }
      }
      c[u >> 2] = j;
      c[v + 12 >> 2] = j;
      c[j + 8 >> 2] = v;
      c[j + 12 >> 2] = d;
      break;
     }
     a = h >>> 8;
     if (!a) d = 0; else if (h >>> 0 > 16777215) d = 31; else {
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      d = (C + 245760 | 0) >>> 16 & 2;
      d = 14 - (A | B | d) + (C << d >>> 15) | 0;
      d = h >>> (d + 7 | 0) & 1 | d << 1;
     }
     e = 18112 + (d << 2) | 0;
     c[j + 28 >> 2] = d;
     a = j + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[4453] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[4453] = a | b;
      c[e >> 2] = j;
      c[j + 24 >> 2] = e;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     }
     f = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     a = c[e >> 2] | 0;
     while (1) {
      if ((c[a + 4 >> 2] & -8 | 0) == (h | 0)) {
       d = a;
       w = 148;
       break;
      }
      b = a + 16 + (f >>> 31 << 2) | 0;
      d = c[b >> 2] | 0;
      if (!d) {
       w = 145;
       break;
      } else {
       f = f << 1;
       a = d;
      }
     }
     if ((w | 0) == 145) if (b >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
      c[b >> 2] = j;
      c[j + 24 >> 2] = a;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[4456] | 0;
      if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = j;
       c[a >> 2] = j;
       c[j + 8 >> 2] = b;
       c[j + 12 >> 2] = d;
       c[j + 24 >> 2] = 0;
       break;
      } else aa();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[4454] | 0;
 if (d >>> 0 >= q >>> 0) {
  a = d - q | 0;
  b = c[4457] | 0;
  if (a >>> 0 > 15) {
   C = b + q | 0;
   c[4457] = C;
   c[4454] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = q | 3;
  } else {
   c[4454] = 0;
   c[4457] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[4455] | 0;
 if (a >>> 0 > q >>> 0) {
  A = a - q | 0;
  c[4455] = A;
  C = c[4458] | 0;
  B = C + q | 0;
  c[4458] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = q | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[4570] | 0)) {
  c[4572] = 4096;
  c[4571] = 4096;
  c[4573] = -1;
  c[4574] = -1;
  c[4575] = 0;
  c[4563] = 0;
  v = p & -16 ^ 1431655768;
  c[p >> 2] = v;
  c[4570] = v;
 }
 h = q + 48 | 0;
 g = c[4572] | 0;
 j = q + 47 | 0;
 f = g + j | 0;
 g = 0 - g | 0;
 k = f & g;
 if (k >>> 0 <= q >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[4562] | 0;
 if (a | 0) {
  u = c[4560] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[4563] & 4)) {
  a = c[4458] | 0;
  c : do if (!a) w = 171; else {
   e = 18256;
   while (1) {
    b = c[e >> 2] | 0;
    if (b >>> 0 <= a >>> 0) {
     d = e + 4 | 0;
     if ((b + (c[d >> 2] | 0) | 0) >>> 0 > a >>> 0) break;
    }
    e = c[e + 8 >> 2] | 0;
    if (!e) {
     w = 171;
     break c;
    }
   }
   a = f - (c[4455] | 0) & g;
   if (a >>> 0 < 2147483647) {
    b = ea(a | 0) | 0;
    if ((b | 0) == ((c[e >> 2] | 0) + (c[d >> 2] | 0) | 0)) {
     if ((b | 0) != (-1 | 0)) {
      f = b;
      h = a;
      w = 191;
      break b;
     }
    } else {
     e = b;
     w = 181;
    }
   }
  } while (0);
  do if ((w | 0) == 171) {
   f = ea(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[4571] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[4560] | 0;
    d = b + a | 0;
    if (a >>> 0 > q >>> 0 & a >>> 0 < 2147483647) {
     e = c[4562] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = ea(a | 0) | 0;
     if ((b | 0) == (f | 0)) {
      h = a;
      w = 191;
      break b;
     } else {
      e = b;
      w = 181;
     }
    }
   }
  } while (0);
  d : do if ((w | 0) == 181) {
   d = 0 - a | 0;
   do if (h >>> 0 > a >>> 0 & (a >>> 0 < 2147483647 & (e | 0) != (-1 | 0))) {
    b = c[4572] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((ea(b | 0) | 0) == (-1 | 0)) {
     ea(d | 0) | 0;
     break d;
    } else {
     a = b + a | 0;
     break;
    }
   } while (0);
   if ((e | 0) != (-1 | 0)) {
    f = e;
    h = a;
    w = 191;
    break b;
   }
  } while (0);
  c[4563] = c[4563] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = ea(k | 0) | 0;
  a = ea(0) | 0;
  if (b >>> 0 < a >>> 0 & ((b | 0) != (-1 | 0) & (a | 0) != (-1 | 0))) {
   a = a - b | 0;
   if (a >>> 0 > (q + 40 | 0) >>> 0) {
    f = b;
    h = a;
    w = 191;
   }
  }
 }
 if ((w | 0) == 191) {
  a = (c[4560] | 0) + h | 0;
  c[4560] = a;
  if (a >>> 0 > (c[4561] | 0) >>> 0) c[4561] = a;
  j = c[4458] | 0;
  do if (!j) {
   C = c[4456] | 0;
   if ((C | 0) == 0 | f >>> 0 < C >>> 0) c[4456] = f;
   c[4564] = f;
   c[4565] = h;
   c[4567] = 0;
   c[4461] = c[4570];
   c[4460] = -1;
   a = 0;
   do {
    C = 17848 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = f + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = f + C | 0;
   C = h + -40 - C | 0;
   c[4458] = B;
   c[4455] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[4459] = c[4574];
  } else {
   b = 18256;
   do {
    a = c[b >> 2] | 0;
    e = b + 4 | 0;
    d = c[e >> 2] | 0;
    if ((f | 0) == (a + d | 0)) {
     w = 201;
     break;
    }
    b = c[b + 8 >> 2] | 0;
   } while ((b | 0) != 0);
   if ((w | 0) == 201) if (!(c[b + 12 >> 2] & 8)) if (j >>> 0 < f >>> 0 & j >>> 0 >= a >>> 0) {
    c[e >> 2] = d + h;
    C = j + 8 | 0;
    C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
    B = j + C | 0;
    C = h - C + (c[4455] | 0) | 0;
    c[4458] = B;
    c[4455] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[4459] = c[4574];
    break;
   }
   a = c[4456] | 0;
   if (f >>> 0 < a >>> 0) {
    c[4456] = f;
    k = f;
   } else k = a;
   d = f + h | 0;
   a = 18256;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 18256;
     break;
    }
   }
   if ((w | 0) == 209) if (!(c[a + 12 >> 2] & 8)) {
    c[b >> 2] = f;
    m = a + 4 | 0;
    c[m >> 2] = (c[m >> 2] | 0) + h;
    m = f + 8 | 0;
    m = f + ((m & 7 | 0) == 0 ? 0 : 0 - m & 7) | 0;
    a = d + 8 | 0;
    a = d + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
    l = m + q | 0;
    g = a - m - q | 0;
    c[m + 4 >> 2] = q | 3;
    do if ((a | 0) == (j | 0)) {
     C = (c[4455] | 0) + g | 0;
     c[4455] = C;
     c[4458] = l;
     c[l + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[4457] | 0)) {
      C = (c[4454] | 0) + g | 0;
      c[4454] = C;
      c[4457] = l;
      c[l + 4 >> 2] = C | 1;
      c[l + C >> 2] = C;
      break;
     }
     b = c[a + 4 >> 2] | 0;
     if ((b & 3 | 0) == 1) {
      j = b & -8;
      f = b >>> 3;
      e : do if (b >>> 0 < 256) {
       d = c[a + 8 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       b = 17848 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < k >>> 0) aa();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        aa();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[4452] = c[4452] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < k >>> 0) aa();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        aa();
       } while (0);
       c[d + 12 >> 2] = e;
       c[x >> 2] = d;
      } else {
       h = c[a + 24 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       do if ((e | 0) == (a | 0)) {
        d = a + 16 | 0;
        e = d + 4 | 0;
        b = c[e >> 2] | 0;
        if (!b) {
         b = c[d >> 2] | 0;
         if (!b) {
          A = 0;
          break;
         }
        } else d = e;
        while (1) {
         e = b + 20 | 0;
         f = c[e >> 2] | 0;
         if (f | 0) {
          b = f;
          d = e;
          continue;
         }
         e = b + 16 | 0;
         f = c[e >> 2] | 0;
         if (!f) break; else {
          b = f;
          d = e;
         }
        }
        if (d >>> 0 < k >>> 0) aa(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < k >>> 0) aa();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) aa();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else aa();
       } while (0);
       if (!h) break;
       b = c[a + 28 >> 2] | 0;
       d = 18112 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[4453] = c[4453] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[4456] | 0) >>> 0) aa();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[h + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[4456] | 0;
       if (A >>> 0 < e >>> 0) aa();
       c[A + 24 >> 2] = h;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) aa(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
        c[A + 20 >> 2] = b;
        c[b + 24 >> 2] = A;
        break;
       }
      } while (0);
      a = a + j | 0;
      g = j + g | 0;
     }
     a = a + 4 | 0;
     c[a >> 2] = c[a >> 2] & -2;
     c[l + 4 >> 2] = g | 1;
     c[l + g >> 2] = g;
     a = g >>> 3;
     if (g >>> 0 < 256) {
      d = 17848 + (a << 1 << 2) | 0;
      b = c[4452] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[4452] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[4456] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       aa();
      } while (0);
      c[B >> 2] = l;
      c[C + 12 >> 2] = l;
      c[l + 8 >> 2] = C;
      c[l + 12 >> 2] = d;
      break;
     }
     a = g >>> 8;
     do if (!a) d = 0; else {
      if (g >>> 0 > 16777215) {
       d = 31;
       break;
      }
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      d = (C + 245760 | 0) >>> 16 & 2;
      d = 14 - (A | B | d) + (C << d >>> 15) | 0;
      d = g >>> (d + 7 | 0) & 1 | d << 1;
     } while (0);
     e = 18112 + (d << 2) | 0;
     c[l + 28 >> 2] = d;
     a = l + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[4453] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[4453] = a | b;
      c[e >> 2] = l;
      c[l + 24 >> 2] = e;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     }
     f = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     a = c[e >> 2] | 0;
     while (1) {
      if ((c[a + 4 >> 2] & -8 | 0) == (g | 0)) {
       d = a;
       w = 279;
       break;
      }
      b = a + 16 + (f >>> 31 << 2) | 0;
      d = c[b >> 2] | 0;
      if (!d) {
       w = 276;
       break;
      } else {
       f = f << 1;
       a = d;
      }
     }
     if ((w | 0) == 276) if (b >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
      c[b >> 2] = l;
      c[l + 24 >> 2] = a;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     } else if ((w | 0) == 279) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[4456] | 0;
      if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = l;
       c[a >> 2] = l;
       c[l + 8 >> 2] = b;
       c[l + 12 >> 2] = d;
       c[l + 24 >> 2] = 0;
       break;
      } else aa();
     }
    } while (0);
    C = m + 8 | 0;
    i = D;
    return C | 0;
   } else b = 18256;
   while (1) {
    a = c[b >> 2] | 0;
    if (a >>> 0 <= j >>> 0) {
     a = a + (c[b + 4 >> 2] | 0) | 0;
     if (a >>> 0 > j >>> 0) break;
    }
    b = c[b + 8 >> 2] | 0;
   }
   g = a + -47 | 0;
   d = g + 8 | 0;
   d = g + ((d & 7 | 0) == 0 ? 0 : 0 - d & 7) | 0;
   g = j + 16 | 0;
   d = d >>> 0 < g >>> 0 ? j : d;
   b = d + 8 | 0;
   e = f + 8 | 0;
   e = (e & 7 | 0) == 0 ? 0 : 0 - e & 7;
   C = f + e | 0;
   e = h + -40 - e | 0;
   c[4458] = C;
   c[4455] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[4459] = c[4574];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[4564];
   c[b + 4 >> 2] = c[4565];
   c[b + 8 >> 2] = c[4566];
   c[b + 12 >> 2] = c[4567];
   c[4564] = f;
   c[4565] = h;
   c[4567] = 0;
   c[4566] = b;
   b = d + 24 | 0;
   do {
    b = b + 4 | 0;
    c[b >> 2] = 7;
   } while ((b + 4 | 0) >>> 0 < a >>> 0);
   if ((d | 0) != (j | 0)) {
    h = d - j | 0;
    c[e >> 2] = c[e >> 2] & -2;
    c[j + 4 >> 2] = h | 1;
    c[d >> 2] = h;
    a = h >>> 3;
    if (h >>> 0 < 256) {
     d = 17848 + (a << 1 << 2) | 0;
     b = c[4452] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[4452] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
       y = a;
       z = b;
      }
     }
     c[y >> 2] = j;
     c[z + 12 >> 2] = j;
     c[j + 8 >> 2] = z;
     c[j + 12 >> 2] = d;
     break;
    }
    a = h >>> 8;
    if (!a) d = 0; else if (h >>> 0 > 16777215) d = 31; else {
     B = (a + 1048320 | 0) >>> 16 & 8;
     C = a << B;
     A = (C + 520192 | 0) >>> 16 & 4;
     C = C << A;
     d = (C + 245760 | 0) >>> 16 & 2;
     d = 14 - (A | B | d) + (C << d >>> 15) | 0;
     d = h >>> (d + 7 | 0) & 1 | d << 1;
    }
    f = 18112 + (d << 2) | 0;
    c[j + 28 >> 2] = d;
    c[j + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[4453] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[4453] = a | b;
     c[f >> 2] = j;
     c[j + 24 >> 2] = f;
     c[j + 12 >> 2] = j;
     c[j + 8 >> 2] = j;
     break;
    }
    e = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
    a = c[f >> 2] | 0;
    while (1) {
     if ((c[a + 4 >> 2] & -8 | 0) == (h | 0)) {
      d = a;
      w = 305;
      break;
     }
     b = a + 16 + (e >>> 31 << 2) | 0;
     d = c[b >> 2] | 0;
     if (!d) {
      w = 302;
      break;
     } else {
      e = e << 1;
      a = d;
     }
    }
    if ((w | 0) == 302) if (b >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
     c[b >> 2] = j;
     c[j + 24 >> 2] = a;
     c[j + 12 >> 2] = j;
     c[j + 8 >> 2] = j;
     break;
    } else if ((w | 0) == 305) {
     a = d + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[4456] | 0;
     if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = j;
      c[a >> 2] = j;
      c[j + 8 >> 2] = b;
      c[j + 12 >> 2] = d;
      c[j + 24 >> 2] = 0;
      break;
     } else aa();
    }
   }
  } while (0);
  a = c[4455] | 0;
  if (a >>> 0 > q >>> 0) {
   A = a - q | 0;
   c[4455] = A;
   C = c[4458] | 0;
   B = C + q | 0;
   c[4458] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = q | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 c[(fb() | 0) >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function Ka(e, f) {
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0;
 if (!e) {
  e = -2;
  return e | 0;
 }
 C = e + 28 | 0;
 B = c[C >> 2] | 0;
 if (f >>> 0 > 5 | (B | 0) == 0) {
  e = -2;
  return e | 0;
 }
 D = e + 12 | 0;
 do if (c[D >> 2] | 0) {
  if (!(c[e >> 2] | 0)) if (c[e + 4 >> 2] | 0) break;
  y = B + 4 | 0;
  g = c[y >> 2] | 0;
  z = (f | 0) != 4;
  if (!(z & (g | 0) == 666)) {
   E = e + 16 | 0;
   if (!(c[E >> 2] | 0)) {
    c[e + 24 >> 2] = c[445];
    e = -5;
    return e | 0;
   }
   c[B >> 2] = e;
   A = B + 40 | 0;
   r = c[A >> 2] | 0;
   c[A >> 2] = f;
   do if ((g | 0) == 42) {
    if ((c[B + 24 >> 2] | 0) != 2) {
     h = (c[B + 48 >> 2] << 12) + -30720 | 0;
     if ((c[B + 136 >> 2] | 0) > 1) g = 0; else {
      g = c[B + 132 >> 2] | 0;
      if ((g | 0) < 2) g = 0; else if ((g | 0) < 6) g = 64; else g = (g | 0) == 6 ? 128 : 192;
     }
     w = g | h;
     x = B + 108 | 0;
     w = (c[x >> 2] | 0) == 0 ? w : w | 32;
     c[y >> 2] = 113;
     h = B + 20 | 0;
     g = c[h >> 2] | 0;
     c[h >> 2] = g + 1;
     i = B + 8 | 0;
     a[(c[i >> 2] | 0) + g >> 0] = w >>> 8;
     g = c[h >> 2] | 0;
     c[h >> 2] = g + 1;
     a[(c[i >> 2] | 0) + g >> 0] = ((w >>> 0) % 31 | 0 | w) ^ 31;
     g = e + 48 | 0;
     if (c[x >> 2] | 0) {
      x = c[g >> 2] | 0;
      w = c[h >> 2] | 0;
      c[h >> 2] = w + 1;
      a[(c[i >> 2] | 0) + w >> 0] = x >>> 24;
      w = c[h >> 2] | 0;
      c[h >> 2] = w + 1;
      a[(c[i >> 2] | 0) + w >> 0] = x >>> 16;
      w = c[g >> 2] | 0;
      x = c[h >> 2] | 0;
      c[h >> 2] = x + 1;
      a[(c[i >> 2] | 0) + x >> 0] = w >>> 8;
      x = c[h >> 2] | 0;
      c[h >> 2] = x + 1;
      a[(c[i >> 2] | 0) + x >> 0] = w;
     }
     c[g >> 2] = Wa(0, 0, 0) | 0;
     g = c[y >> 2] | 0;
     w = 30;
     break;
    }
    i = e + 48 | 0;
    c[i >> 2] = Xa(0, 0, 0) | 0;
    j = B + 20 | 0;
    g = c[j >> 2] | 0;
    c[j >> 2] = g + 1;
    k = B + 8 | 0;
    a[(c[k >> 2] | 0) + g >> 0] = 31;
    g = c[j >> 2] | 0;
    c[j >> 2] = g + 1;
    a[(c[k >> 2] | 0) + g >> 0] = -117;
    g = c[j >> 2] | 0;
    c[j >> 2] = g + 1;
    a[(c[k >> 2] | 0) + g >> 0] = 8;
    g = B + 28 | 0;
    h = c[g >> 2] | 0;
    if (!h) {
     g = c[j >> 2] | 0;
     c[j >> 2] = g + 1;
     a[(c[k >> 2] | 0) + g >> 0] = 0;
     g = c[j >> 2] | 0;
     c[j >> 2] = g + 1;
     a[(c[k >> 2] | 0) + g >> 0] = 0;
     g = c[j >> 2] | 0;
     c[j >> 2] = g + 1;
     a[(c[k >> 2] | 0) + g >> 0] = 0;
     g = c[j >> 2] | 0;
     c[j >> 2] = g + 1;
     a[(c[k >> 2] | 0) + g >> 0] = 0;
     g = c[j >> 2] | 0;
     c[j >> 2] = g + 1;
     a[(c[k >> 2] | 0) + g >> 0] = 0;
     g = c[B + 132 >> 2] | 0;
     if ((g | 0) == 9) g = 2; else g = ((g | 0) < 2 ? 1 : (c[B + 136 >> 2] | 0) > 1) ? 4 : 0;
     x = c[j >> 2] | 0;
     c[j >> 2] = x + 1;
     a[(c[k >> 2] | 0) + x >> 0] = g;
     x = c[j >> 2] | 0;
     c[j >> 2] = x + 1;
     a[(c[k >> 2] | 0) + x >> 0] = 3;
     c[y >> 2] = 113;
     break;
    }
    x = ((c[h + 44 >> 2] | 0 ? 2 : 0) | (c[h >> 2] | 0) != 0 | ((c[h + 16 >> 2] | 0) == 0 ? 0 : 4) | ((c[h + 28 >> 2] | 0) == 0 ? 0 : 8) | ((c[h + 36 >> 2] | 0) == 0 ? 0 : 16)) & 255;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[(c[k >> 2] | 0) + h >> 0] = x;
    h = c[(c[g >> 2] | 0) + 4 >> 2] & 255;
    x = c[j >> 2] | 0;
    c[j >> 2] = x + 1;
    a[(c[k >> 2] | 0) + x >> 0] = h;
    x = (c[(c[g >> 2] | 0) + 4 >> 2] | 0) >>> 8 & 255;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[(c[k >> 2] | 0) + h >> 0] = x;
    h = (c[(c[g >> 2] | 0) + 4 >> 2] | 0) >>> 16 & 255;
    x = c[j >> 2] | 0;
    c[j >> 2] = x + 1;
    a[(c[k >> 2] | 0) + x >> 0] = h;
    x = (c[(c[g >> 2] | 0) + 4 >> 2] | 0) >>> 24 & 255;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[(c[k >> 2] | 0) + h >> 0] = x;
    h = c[B + 132 >> 2] | 0;
    if ((h | 0) == 9) h = 2; else h = ((h | 0) < 2 ? 1 : (c[B + 136 >> 2] | 0) > 1) ? 4 : 0;
    x = c[j >> 2] | 0;
    c[j >> 2] = x + 1;
    a[(c[k >> 2] | 0) + x >> 0] = h;
    x = c[(c[g >> 2] | 0) + 12 >> 2] & 255;
    h = c[j >> 2] | 0;
    c[j >> 2] = h + 1;
    a[(c[k >> 2] | 0) + h >> 0] = x;
    h = c[g >> 2] | 0;
    if (c[h + 16 >> 2] | 0) {
     h = c[h + 20 >> 2] & 255;
     x = c[j >> 2] | 0;
     c[j >> 2] = x + 1;
     a[(c[k >> 2] | 0) + x >> 0] = h;
     x = (c[(c[g >> 2] | 0) + 20 >> 2] | 0) >>> 8 & 255;
     h = c[j >> 2] | 0;
     c[j >> 2] = h + 1;
     a[(c[k >> 2] | 0) + h >> 0] = x;
     h = c[g >> 2] | 0;
    }
    if (c[h + 44 >> 2] | 0) c[i >> 2] = Xa(c[i >> 2] | 0, c[k >> 2] | 0, c[j >> 2] | 0) | 0;
    c[B + 32 >> 2] = 0;
    c[y >> 2] = 69;
    w = 32;
   } else w = 30; while (0);
   if ((w | 0) == 30) if ((g | 0) == 69) {
    g = B + 28 | 0;
    w = 32;
   } else w = 53;
   do if ((w | 0) == 32) {
    h = c[g >> 2] | 0;
    if (!(c[h + 16 >> 2] | 0)) {
     c[y >> 2] = 73;
     w = 55;
     break;
    }
    p = B + 20 | 0;
    i = c[p >> 2] | 0;
    q = B + 32 | 0;
    j = c[q >> 2] | 0;
    a : do if (j >>> 0 < (c[h + 20 >> 2] & 65535) >>> 0) {
     l = B + 12 | 0;
     m = e + 48 | 0;
     n = B + 8 | 0;
     o = e + 20 | 0;
     k = i;
     while (1) {
      if ((k | 0) == (c[l >> 2] | 0)) {
       if (k >>> 0 > i >>> 0 & (c[h + 44 >> 2] | 0) != 0) c[m >> 2] = Xa(c[m >> 2] | 0, (c[n >> 2] | 0) + i | 0, k - i | 0) | 0;
       h = c[C >> 2] | 0;
       j = c[h + 20 >> 2] | 0;
       x = c[E >> 2] | 0;
       j = j >>> 0 > x >>> 0 ? x : j;
       if (j | 0) {
        Ob(c[D >> 2] | 0, c[h + 16 >> 2] | 0, j | 0) | 0;
        c[D >> 2] = (c[D >> 2] | 0) + j;
        h = c[C >> 2] | 0;
        i = h + 16 | 0;
        c[i >> 2] = (c[i >> 2] | 0) + j;
        c[o >> 2] = (c[o >> 2] | 0) + j;
        c[E >> 2] = (c[E >> 2] | 0) - j;
        w = h + 20 | 0;
        x = c[w >> 2] | 0;
        c[w >> 2] = x - j;
        if ((x | 0) == (j | 0)) c[i >> 2] = c[h + 8 >> 2];
       }
       i = c[p >> 2] | 0;
       if ((i | 0) == (c[l >> 2] | 0)) break;
       h = c[g >> 2] | 0;
       j = c[q >> 2] | 0;
       k = i;
      }
      j = a[(c[h + 16 >> 2] | 0) + j >> 0] | 0;
      c[p >> 2] = k + 1;
      a[(c[n >> 2] | 0) + k >> 0] = j;
      j = (c[q >> 2] | 0) + 1 | 0;
      c[q >> 2] = j;
      h = c[g >> 2] | 0;
      if (j >>> 0 >= (c[h + 20 >> 2] & 65535) >>> 0) break a;
      k = c[p >> 2] | 0;
     }
     h = c[g >> 2] | 0;
    } while (0);
    if (c[h + 44 >> 2] | 0) {
     j = c[p >> 2] | 0;
     if (j >>> 0 > i >>> 0) {
      h = e + 48 | 0;
      c[h >> 2] = Xa(c[h >> 2] | 0, (c[B + 8 >> 2] | 0) + i | 0, j - i | 0) | 0;
      h = c[g >> 2] | 0;
     }
    }
    if ((c[q >> 2] | 0) == (c[h + 20 >> 2] | 0)) {
     c[q >> 2] = 0;
     c[y >> 2] = 73;
     w = 55;
     break;
    } else {
     g = c[y >> 2] | 0;
     w = 53;
     break;
    }
   } while (0);
   if ((w | 0) == 53) if ((g | 0) == 73) {
    h = B + 28 | 0;
    g = h;
    h = c[h >> 2] | 0;
    w = 55;
   } else w = 73;
   do if ((w | 0) == 55) {
    if (!(c[h + 28 >> 2] | 0)) {
     c[y >> 2] = 91;
     w = 75;
     break;
    }
    m = B + 20 | 0;
    j = c[m >> 2] | 0;
    k = B + 12 | 0;
    n = e + 48 | 0;
    o = B + 8 | 0;
    l = e + 20 | 0;
    p = B + 32 | 0;
    h = j;
    while (1) {
     if ((h | 0) == (c[k >> 2] | 0)) {
      if (h >>> 0 > j >>> 0 ? (c[(c[g >> 2] | 0) + 44 >> 2] | 0) != 0 : 0) c[n >> 2] = Xa(c[n >> 2] | 0, (c[o >> 2] | 0) + j | 0, h - j | 0) | 0;
      h = c[C >> 2] | 0;
      j = c[h + 20 >> 2] | 0;
      x = c[E >> 2] | 0;
      j = j >>> 0 > x >>> 0 ? x : j;
      if (j | 0) {
       Ob(c[D >> 2] | 0, c[h + 16 >> 2] | 0, j | 0) | 0;
       c[D >> 2] = (c[D >> 2] | 0) + j;
       h = c[C >> 2] | 0;
       i = h + 16 | 0;
       c[i >> 2] = (c[i >> 2] | 0) + j;
       c[l >> 2] = (c[l >> 2] | 0) + j;
       c[E >> 2] = (c[E >> 2] | 0) - j;
       w = h + 20 | 0;
       x = c[w >> 2] | 0;
       c[w >> 2] = x - j;
       if ((x | 0) == (j | 0)) c[i >> 2] = c[h + 8 >> 2];
      }
      h = c[m >> 2] | 0;
      if ((h | 0) == (c[k >> 2] | 0)) {
       j = h;
       i = 1;
       break;
      } else {
       i = h;
       j = h;
      }
     } else i = h;
     h = c[p >> 2] | 0;
     c[p >> 2] = h + 1;
     h = a[(c[(c[g >> 2] | 0) + 28 >> 2] | 0) + h >> 0] | 0;
     c[m >> 2] = i + 1;
     a[(c[o >> 2] | 0) + i >> 0] = h;
     if (!(h << 24 >> 24)) {
      i = h & 255;
      break;
     }
     h = c[m >> 2] | 0;
    }
    if (c[(c[g >> 2] | 0) + 44 >> 2] | 0) {
     h = c[m >> 2] | 0;
     if (h >>> 0 > j >>> 0) c[n >> 2] = Xa(c[n >> 2] | 0, (c[o >> 2] | 0) + j | 0, h - j | 0) | 0;
    }
    if (!i) {
     c[p >> 2] = 0;
     c[y >> 2] = 91;
     w = 75;
     break;
    } else {
     g = c[y >> 2] | 0;
     w = 73;
     break;
    }
   } while (0);
   if ((w | 0) == 73) if ((g | 0) == 91) {
    g = B + 28 | 0;
    w = 75;
   } else w = 93;
   do if ((w | 0) == 75) {
    if (!(c[(c[g >> 2] | 0) + 36 >> 2] | 0)) {
     c[y >> 2] = 103;
     w = 95;
     break;
    }
    n = B + 20 | 0;
    j = c[n >> 2] | 0;
    k = B + 12 | 0;
    o = e + 48 | 0;
    p = B + 8 | 0;
    l = e + 20 | 0;
    m = B + 32 | 0;
    h = j;
    while (1) {
     if ((h | 0) == (c[k >> 2] | 0)) {
      if (h >>> 0 > j >>> 0 ? (c[(c[g >> 2] | 0) + 44 >> 2] | 0) != 0 : 0) c[o >> 2] = Xa(c[o >> 2] | 0, (c[p >> 2] | 0) + j | 0, h - j | 0) | 0;
      h = c[C >> 2] | 0;
      j = c[h + 20 >> 2] | 0;
      x = c[E >> 2] | 0;
      j = j >>> 0 > x >>> 0 ? x : j;
      if (j | 0) {
       Ob(c[D >> 2] | 0, c[h + 16 >> 2] | 0, j | 0) | 0;
       c[D >> 2] = (c[D >> 2] | 0) + j;
       h = c[C >> 2] | 0;
       i = h + 16 | 0;
       c[i >> 2] = (c[i >> 2] | 0) + j;
       c[l >> 2] = (c[l >> 2] | 0) + j;
       c[E >> 2] = (c[E >> 2] | 0) - j;
       w = h + 20 | 0;
       x = c[w >> 2] | 0;
       c[w >> 2] = x - j;
       if ((x | 0) == (j | 0)) c[i >> 2] = c[h + 8 >> 2];
      }
      j = c[n >> 2] | 0;
      if ((j | 0) == (c[k >> 2] | 0)) {
       i = 1;
       break;
      } else h = j;
     }
     i = c[m >> 2] | 0;
     c[m >> 2] = i + 1;
     i = a[(c[(c[g >> 2] | 0) + 36 >> 2] | 0) + i >> 0] | 0;
     c[n >> 2] = h + 1;
     a[(c[p >> 2] | 0) + h >> 0] = i;
     if (!(i << 24 >> 24)) {
      i = i & 255;
      break;
     }
     h = c[n >> 2] | 0;
    }
    if (c[(c[g >> 2] | 0) + 44 >> 2] | 0) {
     h = c[n >> 2] | 0;
     if (h >>> 0 > j >>> 0) c[o >> 2] = Xa(c[o >> 2] | 0, (c[p >> 2] | 0) + j | 0, h - j | 0) | 0;
    }
    if (!i) {
     c[y >> 2] = 103;
     w = 95;
     break;
    } else {
     g = c[y >> 2] | 0;
     w = 93;
     break;
    }
   } while (0);
   if ((w | 0) == 93) if ((g | 0) == 103) {
    g = B + 28 | 0;
    w = 95;
   }
   do if ((w | 0) == 95) {
    if (!(c[(c[g >> 2] | 0) + 44 >> 2] | 0)) {
     c[y >> 2] = 113;
     break;
    }
    j = B + 20 | 0;
    k = B + 12 | 0;
    if (((c[j >> 2] | 0) + 2 | 0) >>> 0 > (c[k >> 2] | 0) >>> 0) {
     g = c[C >> 2] | 0;
     i = c[g + 20 >> 2] | 0;
     x = c[E >> 2] | 0;
     i = i >>> 0 > x >>> 0 ? x : i;
     if (i | 0) {
      Ob(c[D >> 2] | 0, c[g + 16 >> 2] | 0, i | 0) | 0;
      c[D >> 2] = (c[D >> 2] | 0) + i;
      g = c[C >> 2] | 0;
      h = g + 16 | 0;
      c[h >> 2] = (c[h >> 2] | 0) + i;
      w = e + 20 | 0;
      c[w >> 2] = (c[w >> 2] | 0) + i;
      c[E >> 2] = (c[E >> 2] | 0) - i;
      w = g + 20 | 0;
      x = c[w >> 2] | 0;
      c[w >> 2] = x - i;
      if ((x | 0) == (i | 0)) c[h >> 2] = c[g + 8 >> 2];
     }
    }
    g = c[j >> 2] | 0;
    if ((g + 2 | 0) >>> 0 <= (c[k >> 2] | 0) >>> 0) {
     x = e + 48 | 0;
     u = c[x >> 2] & 255;
     c[j >> 2] = g + 1;
     v = B + 8 | 0;
     a[(c[v >> 2] | 0) + g >> 0] = u;
     u = (c[x >> 2] | 0) >>> 8 & 255;
     w = c[j >> 2] | 0;
     c[j >> 2] = w + 1;
     a[(c[v >> 2] | 0) + w >> 0] = u;
     c[x >> 2] = Xa(0, 0, 0) | 0;
     c[y >> 2] = 113;
    }
   } while (0);
   x = B + 20 | 0;
   if (!(c[x >> 2] | 0)) {
    if (z & (r | 0) >= (f | 0) & (c[e + 4 >> 2] | 0) == 0) {
     c[e + 24 >> 2] = c[445];
     e = -5;
     return e | 0;
    }
   } else {
    h = c[C >> 2] | 0;
    j = c[h + 20 >> 2] | 0;
    g = c[E >> 2] | 0;
    j = j >>> 0 > g >>> 0 ? g : j;
    if (j) {
     Ob(c[D >> 2] | 0, c[h + 16 >> 2] | 0, j | 0) | 0;
     c[D >> 2] = (c[D >> 2] | 0) + j;
     h = c[C >> 2] | 0;
     i = h + 16 | 0;
     c[i >> 2] = (c[i >> 2] | 0) + j;
     g = e + 20 | 0;
     c[g >> 2] = (c[g >> 2] | 0) + j;
     g = (c[E >> 2] | 0) - j | 0;
     c[E >> 2] = g;
     v = h + 20 | 0;
     w = c[v >> 2] | 0;
     c[v >> 2] = w - j;
     if ((w | 0) == (j | 0)) c[i >> 2] = c[h + 8 >> 2];
    }
    if (!g) {
     c[A >> 2] = -1;
     e = 0;
     return e | 0;
    }
   }
   h = (c[y >> 2] | 0) == 666;
   g = (c[e + 4 >> 2] | 0) == 0;
   if (h) if (g) w = 115; else {
    c[e + 24 >> 2] = c[445];
    e = -5;
    return e | 0;
   } else if (g) w = 115; else w = 116;
   if ((w | 0) == 115) if (!((c[B + 116 >> 2] | 0) == 0 & ((f | 0) == 0 | h))) w = 116;
   do if ((w | 0) == 116) {
    b : do switch (c[B + 136 >> 2] | 0) {
    case 2:
     {
      l = B + 116 | 0;
      m = B + 96 | 0;
      s = B + 108 | 0;
      r = B + 56 | 0;
      n = B + 5792 | 0;
      o = B + 5796 | 0;
      p = B + 5784 | 0;
      q = B + 5788 | 0;
      t = B + 92 | 0;
      while (1) {
       if (!(c[l >> 2] | 0)) {
        Fa(B);
        if (!(c[l >> 2] | 0)) break;
       }
       c[m >> 2] = 0;
       v = a[(c[r >> 2] | 0) + (c[s >> 2] | 0) >> 0] | 0;
       g = c[n >> 2] | 0;
       b[(c[o >> 2] | 0) + (g << 1) >> 1] = 0;
       c[n >> 2] = g + 1;
       a[(c[p >> 2] | 0) + g >> 0] = v;
       v = B + 148 + ((v & 255) << 2) | 0;
       b[v >> 1] = (b[v >> 1] | 0) + 1 << 16 >> 16;
       v = (c[n >> 2] | 0) == ((c[q >> 2] | 0) + -1 | 0);
       c[l >> 2] = (c[l >> 2] | 0) + -1;
       g = (c[s >> 2] | 0) + 1 | 0;
       c[s >> 2] = g;
       if (!v) continue;
       h = c[t >> 2] | 0;
       if ((h | 0) > -1) i = (c[r >> 2] | 0) + h | 0; else i = 0;
       Pa(B, i, g - h | 0, 0);
       c[t >> 2] = c[s >> 2];
       j = c[B >> 2] | 0;
       g = j + 28 | 0;
       h = c[g >> 2] | 0;
       i = c[h + 20 >> 2] | 0;
       k = j + 16 | 0;
       v = c[k >> 2] | 0;
       i = i >>> 0 > v >>> 0 ? v : i;
       if (i | 0) {
        u = j + 12 | 0;
        Ob(c[u >> 2] | 0, c[h + 16 >> 2] | 0, i | 0) | 0;
        c[u >> 2] = (c[u >> 2] | 0) + i;
        g = c[g >> 2] | 0;
        h = g + 16 | 0;
        c[h >> 2] = (c[h >> 2] | 0) + i;
        u = j + 20 | 0;
        c[u >> 2] = (c[u >> 2] | 0) + i;
        c[k >> 2] = (c[k >> 2] | 0) - i;
        u = g + 20 | 0;
        v = c[u >> 2] | 0;
        c[u >> 2] = v - i;
        if ((v | 0) == (i | 0)) c[h >> 2] = c[g + 8 >> 2];
       }
       if (!(c[(c[B >> 2] | 0) + 16 >> 2] | 0)) break b;
      }
      if (f | 0) {
       h = c[t >> 2] | 0;
       if ((h | 0) > -1) g = (c[r >> 2] | 0) + h | 0; else g = 0;
       l = (f | 0) == 4;
       Pa(B, g, (c[s >> 2] | 0) - h | 0, l & 1);
       c[t >> 2] = c[s >> 2];
       j = c[B >> 2] | 0;
       g = j + 28 | 0;
       h = c[g >> 2] | 0;
       i = c[h + 20 >> 2] | 0;
       k = j + 16 | 0;
       w = c[k >> 2] | 0;
       i = i >>> 0 > w >>> 0 ? w : i;
       if (i | 0) {
        v = j + 12 | 0;
        Ob(c[v >> 2] | 0, c[h + 16 >> 2] | 0, i | 0) | 0;
        c[v >> 2] = (c[v >> 2] | 0) + i;
        g = c[g >> 2] | 0;
        h = g + 16 | 0;
        c[h >> 2] = (c[h >> 2] | 0) + i;
        v = j + 20 | 0;
        c[v >> 2] = (c[v >> 2] | 0) + i;
        c[k >> 2] = (c[k >> 2] | 0) - i;
        v = g + 20 | 0;
        w = c[v >> 2] | 0;
        c[v >> 2] = w - i;
        if ((w | 0) == (i | 0)) c[h >> 2] = c[g + 8 >> 2];
       }
       if (!(c[(c[B >> 2] | 0) + 16 >> 2] | 0)) {
        g = l ? 2 : 0;
        w = 175;
        break b;
       } else {
        g = l ? 3 : 1;
        w = 175;
        break b;
       }
      }
      break;
     }
    case 3:
     {
      m = B + 116 | 0;
      n = (f | 0) == 0;
      o = B + 96 | 0;
      u = B + 108 | 0;
      p = B + 5792 | 0;
      q = B + 5796 | 0;
      r = B + 5784 | 0;
      s = B + 5788 | 0;
      t = B + 56 | 0;
      v = B + 92 | 0;
      while (1) {
       g = c[m >> 2] | 0;
       if (g >>> 0 < 258) {
        Fa(B);
        g = c[m >> 2] | 0;
        if (n & g >>> 0 < 258) break b;
        if (!g) break;
        c[o >> 2] = 0;
        if (g >>> 0 > 2) w = 143; else {
         g = c[u >> 2] | 0;
         w = 158;
        }
       } else {
        c[o >> 2] = 0;
        w = 143;
       }
       if ((w | 0) == 143) {
        w = 0;
        l = c[u >> 2] | 0;
        if (!l) {
         g = 0;
         w = 158;
        } else {
         i = (c[t >> 2] | 0) + l | 0;
         h = i + -1 | 0;
         k = a[h >> 0] | 0;
         h = h + 1 | 0;
         if (k << 24 >> 24 == (a[h >> 0] | 0)) {
          h = h + 1 | 0;
          if (k << 24 >> 24 == (a[h >> 0] | 0)) if (k << 24 >> 24 == (a[h + 1 >> 0] | 0)) {
           j = i + 258 | 0;
           i = h;
           do {
            h = i + 2 | 0;
            if (k << 24 >> 24 != (a[h >> 0] | 0)) break;
            h = i + 3 | 0;
            if (k << 24 >> 24 != (a[h >> 0] | 0)) break;
            h = i + 4 | 0;
            if (k << 24 >> 24 != (a[h >> 0] | 0)) break;
            h = i + 5 | 0;
            if (k << 24 >> 24 != (a[h >> 0] | 0)) break;
            h = i + 6 | 0;
            if (k << 24 >> 24 != (a[h >> 0] | 0)) break;
            h = i + 7 | 0;
            if (k << 24 >> 24 != (a[h >> 0] | 0)) break;
            h = i;
            i = i + 8 | 0;
            if (k << 24 >> 24 != (a[i >> 0] | 0)) {
             h = i;
             break;
            }
            h = h + 9 | 0;
           } while (h >>> 0 < j >>> 0 ? k << 24 >> 24 == (a[h >> 0] | 0) : 0);
           k = h - j + 258 | 0;
           g = k >>> 0 > g >>> 0 ? g : k;
           c[o >> 2] = g;
           if (g >>> 0 > 2) {
            g = g + 253 | 0;
            i = c[p >> 2] | 0;
            b[(c[q >> 2] | 0) + (i << 1) >> 1] = 1;
            c[p >> 2] = i + 1;
            a[(c[r >> 2] | 0) + i >> 0] = g;
            g = B + 148 + ((d[14467 + (g & 255) >> 0] | 256) + 1 << 2) | 0;
            b[g >> 1] = (b[g >> 1] | 0) + 1 << 16 >> 16;
            g = B + 2440 + (d[13955] << 2) | 0;
            b[g >> 1] = (b[g >> 1] | 0) + 1 << 16 >> 16;
            g = (c[p >> 2] | 0) == ((c[s >> 2] | 0) + -1 | 0) & 1;
            i = c[o >> 2] | 0;
            c[m >> 2] = (c[m >> 2] | 0) - i;
            i = (c[u >> 2] | 0) + i | 0;
            c[u >> 2] = i;
            c[o >> 2] = 0;
           } else {
            g = l;
            w = 158;
           }
          } else {
           g = l;
           w = 158;
          } else {
           g = l;
           w = 158;
          }
         } else {
          g = l;
          w = 158;
         }
        }
       }
       if ((w | 0) == 158) {
        w = 0;
        g = a[(c[t >> 2] | 0) + g >> 0] | 0;
        i = c[p >> 2] | 0;
        b[(c[q >> 2] | 0) + (i << 1) >> 1] = 0;
        c[p >> 2] = i + 1;
        a[(c[r >> 2] | 0) + i >> 0] = g;
        g = B + 148 + ((g & 255) << 2) | 0;
        b[g >> 1] = (b[g >> 1] | 0) + 1 << 16 >> 16;
        g = (c[p >> 2] | 0) == ((c[s >> 2] | 0) + -1 | 0) & 1;
        c[m >> 2] = (c[m >> 2] | 0) + -1;
        i = (c[u >> 2] | 0) + 1 | 0;
        c[u >> 2] = i;
       }
       if (!g) continue;
       g = c[v >> 2] | 0;
       if ((g | 0) > -1) h = (c[t >> 2] | 0) + g | 0; else h = 0;
       Pa(B, h, i - g | 0, 0);
       c[v >> 2] = c[u >> 2];
       j = c[B >> 2] | 0;
       g = j + 28 | 0;
       h = c[g >> 2] | 0;
       i = c[h + 20 >> 2] | 0;
       k = j + 16 | 0;
       l = c[k >> 2] | 0;
       i = i >>> 0 > l >>> 0 ? l : i;
       if (i | 0) {
        l = j + 12 | 0;
        Ob(c[l >> 2] | 0, c[h + 16 >> 2] | 0, i | 0) | 0;
        c[l >> 2] = (c[l >> 2] | 0) + i;
        g = c[g >> 2] | 0;
        h = g + 16 | 0;
        c[h >> 2] = (c[h >> 2] | 0) + i;
        l = j + 20 | 0;
        c[l >> 2] = (c[l >> 2] | 0) + i;
        c[k >> 2] = (c[k >> 2] | 0) - i;
        k = g + 20 | 0;
        l = c[k >> 2] | 0;
        c[k >> 2] = l - i;
        if ((l | 0) == (i | 0)) c[h >> 2] = c[g + 8 >> 2];
       }
       if (!(c[(c[B >> 2] | 0) + 16 >> 2] | 0)) break b;
      }
      h = c[v >> 2] | 0;
      if ((h | 0) > -1) g = (c[t >> 2] | 0) + h | 0; else g = 0;
      l = (f | 0) == 4;
      Pa(B, g, (c[u >> 2] | 0) - h | 0, l & 1);
      c[v >> 2] = c[u >> 2];
      j = c[B >> 2] | 0;
      g = j + 28 | 0;
      h = c[g >> 2] | 0;
      i = c[h + 20 >> 2] | 0;
      k = j + 16 | 0;
      w = c[k >> 2] | 0;
      i = i >>> 0 > w >>> 0 ? w : i;
      if (i | 0) {
       v = j + 12 | 0;
       Ob(c[v >> 2] | 0, c[h + 16 >> 2] | 0, i | 0) | 0;
       c[v >> 2] = (c[v >> 2] | 0) + i;
       g = c[g >> 2] | 0;
       h = g + 16 | 0;
       c[h >> 2] = (c[h >> 2] | 0) + i;
       v = j + 20 | 0;
       c[v >> 2] = (c[v >> 2] | 0) + i;
       c[k >> 2] = (c[k >> 2] | 0) - i;
       v = g + 20 | 0;
       w = c[v >> 2] | 0;
       c[v >> 2] = w - i;
       if ((w | 0) == (i | 0)) c[h >> 2] = c[g + 8 >> 2];
      }
      if (!(c[(c[B >> 2] | 0) + 16 >> 2] | 0)) {
       g = l ? 2 : 0;
       w = 175;
       break b;
      } else {
       g = l ? 3 : 1;
       w = 175;
       break b;
      }
     }
    default:
     {
      g = oa[c[1024 + ((c[B + 132 >> 2] | 0) * 12 | 0) + 8 >> 2] & 3](B, f) | 0;
      w = 175;
     }
    } while (0);
    if ((w | 0) == 175) {
     if ((g | 1 | 0) == 3) c[y >> 2] = 666;
     if ((g | 2 | 0) != 2) {
      if ((g | 0) != 1) break;
      switch (f | 0) {
      case 1:
       {
        Oa(B);
        break;
       }
      case 5:
       break;
      default:
       {
        Na(B, 0, 0, 0);
        if ((f | 0) == 3) {
         f = c[B + 76 >> 2] | 0;
         y = c[B + 68 >> 2] | 0;
         b[y + (f + -1 << 1) >> 1] = 0;
         Lb(y | 0, 0, (f << 1) + -2 | 0) | 0;
         if (!(c[B + 116 >> 2] | 0)) {
          c[B + 108 >> 2] = 0;
          c[B + 92 >> 2] = 0;
         }
        }
       }
      }
      h = c[C >> 2] | 0;
      j = c[h + 20 >> 2] | 0;
      g = c[E >> 2] | 0;
      j = j >>> 0 > g >>> 0 ? g : j;
      if (j) {
       Ob(c[D >> 2] | 0, c[h + 16 >> 2] | 0, j | 0) | 0;
       c[D >> 2] = (c[D >> 2] | 0) + j;
       h = c[C >> 2] | 0;
       i = h + 16 | 0;
       c[i >> 2] = (c[i >> 2] | 0) + j;
       g = e + 20 | 0;
       c[g >> 2] = (c[g >> 2] | 0) + j;
       g = (c[E >> 2] | 0) - j | 0;
       c[E >> 2] = g;
       y = h + 20 | 0;
       f = c[y >> 2] | 0;
       c[y >> 2] = f - j;
       if ((f | 0) == (j | 0)) c[i >> 2] = c[h + 8 >> 2];
      }
      if (g | 0) break;
      c[A >> 2] = -1;
      e = 0;
      return e | 0;
     }
    }
    if (c[E >> 2] | 0) {
     e = 0;
     return e | 0;
    }
    c[A >> 2] = -1;
    e = 0;
    return e | 0;
   } while (0);
   if (z) {
    e = 0;
    return e | 0;
   }
   j = B + 24 | 0;
   g = c[j >> 2] | 0;
   if ((g | 0) < 1) {
    e = 1;
    return e | 0;
   }
   h = e + 48 | 0;
   i = c[h >> 2] | 0;
   if ((g | 0) == 2) {
    f = c[x >> 2] | 0;
    c[x >> 2] = f + 1;
    A = B + 8 | 0;
    a[(c[A >> 2] | 0) + f >> 0] = i;
    f = (c[h >> 2] | 0) >>> 8 & 255;
    z = c[x >> 2] | 0;
    c[x >> 2] = z + 1;
    a[(c[A >> 2] | 0) + z >> 0] = f;
    z = (c[h >> 2] | 0) >>> 16 & 255;
    f = c[x >> 2] | 0;
    c[x >> 2] = f + 1;
    a[(c[A >> 2] | 0) + f >> 0] = z;
    f = (c[h >> 2] | 0) >>> 24 & 255;
    z = c[x >> 2] | 0;
    c[x >> 2] = z + 1;
    a[(c[A >> 2] | 0) + z >> 0] = f;
    z = e + 8 | 0;
    f = c[z >> 2] & 255;
    B = c[x >> 2] | 0;
    c[x >> 2] = B + 1;
    a[(c[A >> 2] | 0) + B >> 0] = f;
    B = (c[z >> 2] | 0) >>> 8 & 255;
    f = c[x >> 2] | 0;
    c[x >> 2] = f + 1;
    a[(c[A >> 2] | 0) + f >> 0] = B;
    f = (c[z >> 2] | 0) >>> 16 & 255;
    B = c[x >> 2] | 0;
    c[x >> 2] = B + 1;
    a[(c[A >> 2] | 0) + B >> 0] = f;
    z = (c[z >> 2] | 0) >>> 24 & 255;
    B = c[x >> 2] | 0;
    c[x >> 2] = B + 1;
    a[(c[A >> 2] | 0) + B >> 0] = z;
   } else {
    z = c[x >> 2] | 0;
    c[x >> 2] = z + 1;
    A = B + 8 | 0;
    a[(c[A >> 2] | 0) + z >> 0] = i >>> 24;
    z = c[x >> 2] | 0;
    c[x >> 2] = z + 1;
    a[(c[A >> 2] | 0) + z >> 0] = i >>> 16;
    z = c[h >> 2] | 0;
    B = c[x >> 2] | 0;
    c[x >> 2] = B + 1;
    a[(c[A >> 2] | 0) + B >> 0] = z >>> 8;
    B = c[x >> 2] | 0;
    c[x >> 2] = B + 1;
    a[(c[A >> 2] | 0) + B >> 0] = z;
   }
   g = c[C >> 2] | 0;
   i = c[g + 20 >> 2] | 0;
   B = c[E >> 2] | 0;
   i = i >>> 0 > B >>> 0 ? B : i;
   if (i | 0) {
    Ob(c[D >> 2] | 0, c[g + 16 >> 2] | 0, i | 0) | 0;
    c[D >> 2] = (c[D >> 2] | 0) + i;
    g = c[C >> 2] | 0;
    h = g + 16 | 0;
    c[h >> 2] = (c[h >> 2] | 0) + i;
    e = e + 20 | 0;
    c[e >> 2] = (c[e >> 2] | 0) + i;
    c[E >> 2] = (c[E >> 2] | 0) - i;
    E = g + 20 | 0;
    e = c[E >> 2] | 0;
    c[E >> 2] = e - i;
    if ((e | 0) == (i | 0)) c[h >> 2] = c[g + 8 >> 2];
   }
   g = c[j >> 2] | 0;
   if ((g | 0) > 0) c[j >> 2] = 0 - g;
   e = (c[x >> 2] | 0) == 0 & 1;
   return e | 0;
  }
 } while (0);
 c[e + 24 >> 2] = c[442];
 e = -2;
 return e | 0;
}

function mb(e, f, g, j, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0.0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0.0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0;
 ia = i;
 i = i + 624 | 0;
 da = ia + 24 | 0;
 fa = ia + 16 | 0;
 ea = ia + 588 | 0;
 aa = ia + 576 | 0;
 ca = ia;
 X = ia + 536 | 0;
 ha = ia + 8 | 0;
 ga = ia + 528 | 0;
 M = (e | 0) != 0;
 N = X + 40 | 0;
 W = N;
 X = X + 39 | 0;
 Y = ha + 4 | 0;
 Z = ea;
 _ = 0 - Z | 0;
 $ = aa + 12 | 0;
 aa = aa + 11 | 0;
 ba = $;
 O = ba - Z | 0;
 P = -2 - Z | 0;
 Q = ba + 2 | 0;
 S = da + 288 | 0;
 T = ea + 9 | 0;
 U = T;
 V = ea + 8 | 0;
 m = 0;
 o = 0;
 n = 0;
 y = f;
 a : while (1) {
  do if ((m | 0) > -1) if ((o | 0) > (2147483647 - m | 0)) {
   c[(fb() | 0) >> 2] = 75;
   m = -1;
   break;
  } else {
   m = o + m | 0;
   break;
  } while (0);
  f = a[y >> 0] | 0;
  if (!(f << 24 >> 24)) {
   L = 244;
   break;
  } else o = y;
  b : while (1) {
   switch (f << 24 >> 24) {
   case 37:
    {
     f = o;
     L = 9;
     break b;
    }
   case 0:
    {
     f = o;
     break b;
    }
   default:
    {}
   }
   K = o + 1 | 0;
   f = a[K >> 0] | 0;
   o = K;
  }
  c : do if ((L | 0) == 9) while (1) {
   L = 0;
   if ((a[f + 1 >> 0] | 0) != 37) break c;
   o = o + 1 | 0;
   f = f + 2 | 0;
   if ((a[f >> 0] | 0) == 37) L = 9; else break;
  } while (0);
  w = o - y | 0;
  if (M) if (!(c[e >> 2] & 32)) nb(y, w, e) | 0;
  if ((o | 0) != (y | 0)) {
   o = w;
   y = f;
   continue;
  }
  r = f + 1 | 0;
  o = a[r >> 0] | 0;
  p = (o << 24 >> 24) + -48 | 0;
  if (p >>> 0 < 10) {
   K = (a[f + 2 >> 0] | 0) == 36;
   r = K ? f + 3 | 0 : r;
   o = a[r >> 0] | 0;
   u = K ? p : -1;
   n = K ? 1 : n;
  } else u = -1;
  f = o << 24 >> 24;
  d : do if ((f & -32 | 0) == 32) {
   p = 0;
   while (1) {
    if (!(1 << f + -32 & 75913)) {
     s = p;
     break d;
    }
    p = 1 << (o << 24 >> 24) + -32 | p;
    r = r + 1 | 0;
    o = a[r >> 0] | 0;
    f = o << 24 >> 24;
    if ((f & -32 | 0) != 32) {
     s = p;
     break;
    }
   }
  } else s = 0; while (0);
  do if (o << 24 >> 24 == 42) {
   o = r + 1 | 0;
   f = (a[o >> 0] | 0) + -48 | 0;
   if (f >>> 0 < 10) if ((a[r + 2 >> 0] | 0) == 36) {
    c[l + (f << 2) >> 2] = 10;
    n = 1;
    r = r + 3 | 0;
    f = c[j + ((a[o >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else L = 24; else L = 24;
   if ((L | 0) == 24) {
    L = 0;
    if (n | 0) {
     m = -1;
     break a;
    }
    if (!M) {
     v = s;
     n = 0;
     r = o;
     K = 0;
     break;
    }
    n = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    f = c[n >> 2] | 0;
    c[g >> 2] = n + 4;
    n = 0;
    r = o;
   }
   if ((f | 0) < 0) {
    v = s | 8192;
    K = 0 - f | 0;
   } else {
    v = s;
    K = f;
   }
  } else {
   p = (o << 24 >> 24) + -48 | 0;
   if (p >>> 0 < 10) {
    f = r;
    o = 0;
    do {
     o = (o * 10 | 0) + p | 0;
     f = f + 1 | 0;
     p = (a[f >> 0] | 0) + -48 | 0;
    } while (p >>> 0 < 10);
    if ((o | 0) < 0) {
     m = -1;
     break a;
    } else {
     v = s;
     r = f;
     K = o;
    }
   } else {
    v = s;
    K = 0;
   }
  } while (0);
  e : do if ((a[r >> 0] | 0) == 46) {
   f = r + 1 | 0;
   o = a[f >> 0] | 0;
   if (o << 24 >> 24 != 42) {
    p = (o << 24 >> 24) + -48 | 0;
    if (p >>> 0 < 10) o = 0; else {
     s = 0;
     break;
    }
    while (1) {
     o = (o * 10 | 0) + p | 0;
     f = f + 1 | 0;
     p = (a[f >> 0] | 0) + -48 | 0;
     if (p >>> 0 >= 10) {
      s = o;
      break e;
     }
    }
   }
   f = r + 2 | 0;
   o = (a[f >> 0] | 0) + -48 | 0;
   if (o >>> 0 < 10) if ((a[r + 3 >> 0] | 0) == 36) {
    c[l + (o << 2) >> 2] = 10;
    s = c[j + ((a[f >> 0] | 0) + -48 << 3) >> 2] | 0;
    f = r + 4 | 0;
    break;
   }
   if (n | 0) {
    m = -1;
    break a;
   }
   if (M) {
    J = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    s = c[J >> 2] | 0;
    c[g >> 2] = J + 4;
   } else s = 0;
  } else {
   s = -1;
   f = r;
  } while (0);
  t = 0;
  while (1) {
   o = (a[f >> 0] | 0) + -65 | 0;
   if (o >>> 0 > 57) {
    m = -1;
    break a;
   }
   p = f + 1 | 0;
   o = a[15325 + (t * 58 | 0) + o >> 0] | 0;
   r = o & 255;
   if ((r + -1 | 0) >>> 0 < 8) {
    f = p;
    t = r;
   } else {
    J = p;
    break;
   }
  }
  if (!(o << 24 >> 24)) {
   m = -1;
   break;
  }
  p = (u | 0) > -1;
  do if (o << 24 >> 24 == 19) if (p) {
   m = -1;
   break a;
  } else L = 52; else {
   if (p) {
    c[l + (u << 2) >> 2] = r;
    H = j + (u << 3) | 0;
    I = c[H + 4 >> 2] | 0;
    L = ca;
    c[L >> 2] = c[H >> 2];
    c[L + 4 >> 2] = I;
    L = 52;
    break;
   }
   if (!M) {
    m = 0;
    break a;
   }
   pb(ca, r, g);
  } while (0);
  if ((L | 0) == 52) {
   L = 0;
   if (!M) {
    o = w;
    y = J;
    continue;
   }
  }
  u = a[f >> 0] | 0;
  u = (t | 0) != 0 & (u & 15 | 0) == 3 ? u & -33 : u;
  p = v & -65537;
  I = (v & 8192 | 0) == 0 ? v : p;
  f : do switch (u | 0) {
  case 110:
   switch (t | 0) {
   case 0:
    {
     c[c[ca >> 2] >> 2] = m;
     o = w;
     y = J;
     continue a;
    }
   case 1:
    {
     c[c[ca >> 2] >> 2] = m;
     o = w;
     y = J;
     continue a;
    }
   case 2:
    {
     o = c[ca >> 2] | 0;
     c[o >> 2] = m;
     c[o + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     o = w;
     y = J;
     continue a;
    }
   case 3:
    {
     b[c[ca >> 2] >> 1] = m;
     o = w;
     y = J;
     continue a;
    }
   case 4:
    {
     a[c[ca >> 2] >> 0] = m;
     o = w;
     y = J;
     continue a;
    }
   case 6:
    {
     c[c[ca >> 2] >> 2] = m;
     o = w;
     y = J;
     continue a;
    }
   case 7:
    {
     o = c[ca >> 2] | 0;
     c[o >> 2] = m;
     c[o + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     o = w;
     y = J;
     continue a;
    }
   default:
    {
     o = w;
     y = J;
     continue a;
    }
   }
  case 112:
   {
    t = I | 8;
    s = s >>> 0 > 8 ? s : 8;
    u = 120;
    L = 64;
    break;
   }
  case 88:
  case 120:
   {
    t = I;
    L = 64;
    break;
   }
  case 111:
   {
    p = ca;
    o = c[p >> 2] | 0;
    p = c[p + 4 >> 2] | 0;
    if ((o | 0) == 0 & (p | 0) == 0) f = N; else {
     f = N;
     do {
      f = f + -1 | 0;
      a[f >> 0] = o & 7 | 48;
      o = Mb(o | 0, p | 0, 3) | 0;
      p = C;
     } while (!((o | 0) == 0 & (p | 0) == 0));
    }
    if (!(I & 8)) {
     o = I;
     t = 0;
     r = 15805;
     L = 77;
    } else {
     t = W - f | 0;
     o = I;
     s = (s | 0) > (t | 0) ? s : t + 1 | 0;
     t = 0;
     r = 15805;
     L = 77;
    }
    break;
   }
  case 105:
  case 100:
   {
    o = ca;
    f = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    if ((o | 0) < 0) {
     f = Jb(0, 0, f | 0, o | 0) | 0;
     o = C;
     p = ca;
     c[p >> 2] = f;
     c[p + 4 >> 2] = o;
     p = 1;
     r = 15805;
     L = 76;
     break f;
    }
    if (!(I & 2048)) {
     r = I & 1;
     p = r;
     r = (r | 0) == 0 ? 15805 : 15807;
     L = 76;
    } else {
     p = 1;
     r = 15806;
     L = 76;
    }
    break;
   }
  case 117:
   {
    o = ca;
    f = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    p = 0;
    r = 15805;
    L = 76;
    break;
   }
  case 99:
   {
    a[X >> 0] = c[ca >> 2];
    f = X;
    u = 1;
    w = 0;
    v = 15805;
    o = N;
    break;
   }
  case 109:
   {
    o = rb(c[(fb() | 0) >> 2] | 0) | 0;
    L = 82;
    break;
   }
  case 115:
   {
    o = c[ca >> 2] | 0;
    o = o | 0 ? o : 17707;
    L = 82;
    break;
   }
  case 67:
   {
    c[ha >> 2] = c[ca >> 2];
    c[Y >> 2] = 0;
    c[ca >> 2] = ha;
    f = ha;
    s = -1;
    L = 86;
    break;
   }
  case 83:
   {
    f = c[ca >> 2] | 0;
    if (!s) {
     tb(e, 32, K, 0, I);
     f = 0;
     L = 97;
    } else L = 86;
    break;
   }
  case 65:
  case 71:
  case 70:
  case 69:
  case 97:
  case 103:
  case 102:
  case 101:
   {
    q = +h[ca >> 3];
    c[fa >> 2] = 0;
    h[k >> 3] = q;
    if ((c[k + 4 >> 2] | 0) < 0) {
     q = -q;
     G = 1;
     H = 17714;
    } else if (!(I & 2048)) {
     H = I & 1;
     G = H;
     H = (H | 0) == 0 ? 17715 : 17720;
    } else {
     G = 1;
     H = 17717;
    }
    h[k >> 3] = q;
    F = c[k + 4 >> 2] & 2146435072;
    do if (F >>> 0 < 2146435072 | (F | 0) == 2146435072 & 0 < 0) {
     x = +wb(q, fa) * 2.0;
     o = x != 0.0;
     if (o) c[fa >> 2] = (c[fa >> 2] | 0) + -1;
     D = u | 32;
     if ((D | 0) == 97) {
      v = u & 32;
      y = (v | 0) == 0 ? H : H + 9 | 0;
      w = G | 2;
      f = 12 - s | 0;
      do if (s >>> 0 > 11 | (f | 0) == 0) q = x; else {
       q = 8.0;
       do {
        f = f + -1 | 0;
        q = q * 16.0;
       } while ((f | 0) != 0);
       if ((a[y >> 0] | 0) == 45) {
        q = -(q + (-x - q));
        break;
       } else {
        q = x + q - q;
        break;
       }
      } while (0);
      o = c[fa >> 2] | 0;
      f = (o | 0) < 0 ? 0 - o | 0 : o;
      f = qb(f, ((f | 0) < 0) << 31 >> 31, $) | 0;
      if ((f | 0) == ($ | 0)) {
       a[aa >> 0] = 48;
       f = aa;
      }
      a[f + -1 >> 0] = (o >> 31 & 2) + 43;
      t = f + -2 | 0;
      a[t >> 0] = u + 15;
      r = (s | 0) < 1;
      p = (I & 8 | 0) == 0;
      o = ea;
      while (1) {
       H = ~~q;
       f = o + 1 | 0;
       a[o >> 0] = d[15789 + H >> 0] | v;
       q = (q - +(H | 0)) * 16.0;
       do if ((f - Z | 0) == 1) {
        if (p & (r & q == 0.0)) break;
        a[f >> 0] = 46;
        f = o + 2 | 0;
       } while (0);
       if (!(q != 0.0)) break; else o = f;
      }
      p = t;
      s = (s | 0) != 0 & (P + f | 0) < (s | 0) ? Q + s - p | 0 : O - p + f | 0;
      r = s + w | 0;
      tb(e, 32, K, r, I);
      if (!(c[e >> 2] & 32)) nb(y, w, e) | 0;
      tb(e, 48, K, r, I ^ 65536);
      o = f - Z | 0;
      if (!(c[e >> 2] & 32)) nb(ea, o, e) | 0;
      f = ba - p | 0;
      tb(e, 48, s - (o + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) nb(t, f, e) | 0;
      tb(e, 32, K, r, I ^ 8192);
      f = (r | 0) < (K | 0) ? K : r;
      break;
     }
     f = (s | 0) < 0 ? 6 : s;
     if (o) {
      o = (c[fa >> 2] | 0) + -28 | 0;
      c[fa >> 2] = o;
      q = x * 268435456.0;
     } else {
      q = x;
      o = c[fa >> 2] | 0;
     }
     F = (o | 0) < 0 ? da : S;
     E = F;
     o = F;
     do {
      B = ~~q >>> 0;
      c[o >> 2] = B;
      o = o + 4 | 0;
      q = (q - +(B >>> 0)) * 1.0e9;
     } while (q != 0.0);
     p = o;
     o = c[fa >> 2] | 0;
     if ((o | 0) > 0) {
      s = F;
      while (1) {
       t = (o | 0) > 29 ? 29 : o;
       r = p + -4 | 0;
       do if (r >>> 0 < s >>> 0) r = s; else {
        o = 0;
        do {
         B = Nb(c[r >> 2] | 0, 0, t | 0) | 0;
         B = Kb(B | 0, C | 0, o | 0, 0) | 0;
         o = C;
         A = Rb(B | 0, o | 0, 1e9, 0) | 0;
         c[r >> 2] = A;
         o = Qb(B | 0, o | 0, 1e9, 0) | 0;
         r = r + -4 | 0;
        } while (r >>> 0 >= s >>> 0);
        if (!o) {
         r = s;
         break;
        }
        r = s + -4 | 0;
        c[r >> 2] = o;
       } while (0);
       while (1) {
        if (p >>> 0 <= r >>> 0) break;
        o = p + -4 | 0;
        if (!(c[o >> 2] | 0)) p = o; else break;
       }
       o = (c[fa >> 2] | 0) - t | 0;
       c[fa >> 2] = o;
       if ((o | 0) > 0) s = r; else break;
      }
     } else r = F;
     if ((o | 0) < 0) {
      y = ((f + 25 | 0) / 9 | 0) + 1 | 0;
      z = (D | 0) == 102;
      v = r;
      while (1) {
       w = 0 - o | 0;
       w = (w | 0) > 9 ? 9 : w;
       do if (v >>> 0 < p >>> 0) {
        o = (1 << w) + -1 | 0;
        s = 1e9 >>> w;
        r = 0;
        t = v;
        do {
         B = c[t >> 2] | 0;
         c[t >> 2] = (B >>> w) + r;
         r = R(B & o, s) | 0;
         t = t + 4 | 0;
        } while (t >>> 0 < p >>> 0);
        o = (c[v >> 2] | 0) == 0 ? v + 4 | 0 : v;
        if (!r) {
         r = o;
         break;
        }
        c[p >> 2] = r;
        r = o;
        p = p + 4 | 0;
       } else r = (c[v >> 2] | 0) == 0 ? v + 4 | 0 : v; while (0);
       o = z ? F : r;
       p = (p - o >> 2 | 0) > (y | 0) ? o + (y << 2) | 0 : p;
       o = (c[fa >> 2] | 0) + w | 0;
       c[fa >> 2] = o;
       if ((o | 0) >= 0) {
        z = r;
        break;
       } else v = r;
      }
     } else z = r;
     do if (z >>> 0 < p >>> 0) {
      o = (E - z >> 2) * 9 | 0;
      s = c[z >> 2] | 0;
      if (s >>> 0 < 10) break; else r = 10;
      do {
       r = r * 10 | 0;
       o = o + 1 | 0;
      } while (s >>> 0 >= r >>> 0);
     } else o = 0; while (0);
     A = (D | 0) == 103;
     B = (f | 0) != 0;
     r = f - ((D | 0) != 102 ? o : 0) + ((B & A) << 31 >> 31) | 0;
     if ((r | 0) < (((p - E >> 2) * 9 | 0) + -9 | 0)) {
      t = r + 9216 | 0;
      r = F + 4 + (((t | 0) / 9 | 0) + -1024 << 2) | 0;
      t = ((t | 0) % 9 | 0) + 1 | 0;
      if ((t | 0) < 9) {
       s = 10;
       do {
        s = s * 10 | 0;
        t = t + 1 | 0;
       } while ((t | 0) != 9);
      } else s = 10;
      w = c[r >> 2] | 0;
      y = (w >>> 0) % (s >>> 0) | 0;
      t = (r + 4 | 0) == (p | 0);
      do if (t & (y | 0) == 0) s = z; else {
       x = (((w >>> 0) / (s >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       v = (s | 0) / 2 | 0;
       if (y >>> 0 < v >>> 0) q = .5; else q = t & (y | 0) == (v | 0) ? 1.0 : 1.5;
       do if (G) {
        if ((a[H >> 0] | 0) != 45) break;
        x = -x;
        q = -q;
       } while (0);
       t = w - y | 0;
       c[r >> 2] = t;
       if (!(x + q != x)) {
        s = z;
        break;
       }
       D = t + s | 0;
       c[r >> 2] = D;
       if (D >>> 0 > 999999999) {
        o = z;
        while (1) {
         s = r + -4 | 0;
         c[r >> 2] = 0;
         if (s >>> 0 < o >>> 0) {
          o = o + -4 | 0;
          c[o >> 2] = 0;
         }
         D = (c[s >> 2] | 0) + 1 | 0;
         c[s >> 2] = D;
         if (D >>> 0 > 999999999) r = s; else {
          v = o;
          r = s;
          break;
         }
        }
       } else v = z;
       o = (E - v >> 2) * 9 | 0;
       t = c[v >> 2] | 0;
       if (t >>> 0 < 10) {
        s = v;
        break;
       } else s = 10;
       do {
        s = s * 10 | 0;
        o = o + 1 | 0;
       } while (t >>> 0 >= s >>> 0);
       s = v;
      } while (0);
      D = r + 4 | 0;
      z = s;
      p = p >>> 0 > D >>> 0 ? D : p;
     }
     w = 0 - o | 0;
     while (1) {
      if (p >>> 0 <= z >>> 0) {
       y = 0;
       D = p;
       break;
      }
      r = p + -4 | 0;
      if (!(c[r >> 2] | 0)) p = r; else {
       y = 1;
       D = p;
       break;
      }
     }
     do if (A) {
      f = (B & 1 ^ 1) + f | 0;
      if ((f | 0) > (o | 0) & (o | 0) > -5) {
       u = u + -1 | 0;
       f = f + -1 - o | 0;
      } else {
       u = u + -2 | 0;
       f = f + -1 | 0;
      }
      p = I & 8;
      if (p | 0) break;
      do if (y) {
       p = c[D + -4 >> 2] | 0;
       if (!p) {
        r = 9;
        break;
       }
       if (!((p >>> 0) % 10 | 0)) {
        s = 10;
        r = 0;
       } else {
        r = 0;
        break;
       }
       do {
        s = s * 10 | 0;
        r = r + 1 | 0;
       } while (!((p >>> 0) % (s >>> 0) | 0 | 0));
      } else r = 9; while (0);
      p = ((D - E >> 2) * 9 | 0) + -9 | 0;
      if ((u | 32 | 0) == 102) {
       p = p - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       f = (f | 0) < (p | 0) ? f : p;
       p = 0;
       break;
      } else {
       p = p + o - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       f = (f | 0) < (p | 0) ? f : p;
       p = 0;
       break;
      }
     } else p = I & 8; while (0);
     v = f | p;
     s = (v | 0) != 0 & 1;
     t = (u | 32 | 0) == 102;
     if (t) {
      o = (o | 0) > 0 ? o : 0;
      u = 0;
     } else {
      r = (o | 0) < 0 ? w : o;
      r = qb(r, ((r | 0) < 0) << 31 >> 31, $) | 0;
      if ((ba - r | 0) < 2) do {
       r = r + -1 | 0;
       a[r >> 0] = 48;
      } while ((ba - r | 0) < 2);
      a[r + -1 >> 0] = (o >> 31 & 2) + 43;
      E = r + -2 | 0;
      a[E >> 0] = u;
      o = ba - E | 0;
      u = E;
     }
     w = G + 1 + f + s + o | 0;
     tb(e, 32, K, w, I);
     if (!(c[e >> 2] & 32)) nb(H, G, e) | 0;
     tb(e, 48, K, w, I ^ 65536);
     do if (t) {
      r = z >>> 0 > F >>> 0 ? F : z;
      o = r;
      do {
       p = qb(c[o >> 2] | 0, 0, T) | 0;
       do if ((o | 0) == (r | 0)) {
        if ((p | 0) != (T | 0)) break;
        a[V >> 0] = 48;
        p = V;
       } else {
        if (p >>> 0 <= ea >>> 0) break;
        Lb(ea | 0, 48, p - Z | 0) | 0;
        do p = p + -1 | 0; while (p >>> 0 > ea >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) nb(p, U - p | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= F >>> 0);
      do if (v | 0) {
       if (c[e >> 2] & 32 | 0) break;
       nb(17749, 1, e) | 0;
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < D >>> 0) {
       p = o;
       while (1) {
        o = qb(c[p >> 2] | 0, 0, T) | 0;
        if (o >>> 0 > ea >>> 0) {
         Lb(ea | 0, 48, o - Z | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > ea >>> 0);
        }
        if (!(c[e >> 2] & 32)) nb(o, (f | 0) > 9 ? 9 : f, e) | 0;
        p = p + 4 | 0;
        o = f + -9 | 0;
        if (!((f | 0) > 9 & p >>> 0 < D >>> 0)) {
         f = o;
         break;
        } else f = o;
       }
      }
      tb(e, 48, f + 9 | 0, 9, 0);
     } else {
      t = y ? D : z + 4 | 0;
      if ((f | 0) > -1) {
       s = (p | 0) == 0;
       r = z;
       do {
        o = qb(c[r >> 2] | 0, 0, T) | 0;
        if ((o | 0) == (T | 0)) {
         a[V >> 0] = 48;
         o = V;
        }
        do if ((r | 0) == (z | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) nb(o, 1, e) | 0;
         if (s & (f | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          o = p;
          break;
         }
         nb(17749, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= ea >>> 0) break;
         Lb(ea | 0, 48, o + _ | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > ea >>> 0);
        } while (0);
        p = U - o | 0;
        if (!(c[e >> 2] & 32)) nb(o, (f | 0) > (p | 0) ? p : f, e) | 0;
        f = f - p | 0;
        r = r + 4 | 0;
       } while (r >>> 0 < t >>> 0 & (f | 0) > -1);
      }
      tb(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      nb(u, ba - u | 0, e) | 0;
     } while (0);
     tb(e, 32, K, w, I ^ 8192);
     f = (w | 0) < (K | 0) ? K : w;
    } else {
     t = (u & 32 | 0) != 0;
     s = q != q | 0.0 != 0.0;
     o = s ? 0 : G;
     r = o + 3 | 0;
     tb(e, 32, K, r, p);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      nb(H, o, e) | 0;
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) nb(s ? (t ? 17741 : 17745) : t ? 17733 : 17737, 3, e) | 0;
     tb(e, 32, K, r, I ^ 8192);
     f = (r | 0) < (K | 0) ? K : r;
    } while (0);
    o = f;
    y = J;
    continue a;
   }
  default:
   {
    f = y;
    p = I;
    u = s;
    w = 0;
    v = 15805;
    o = N;
   }
  } while (0);
  g : do if ((L | 0) == 64) {
   p = ca;
   o = c[p >> 2] | 0;
   p = c[p + 4 >> 2] | 0;
   r = u & 32;
   if ((o | 0) == 0 & (p | 0) == 0) {
    f = N;
    o = t;
    t = 0;
    r = 15805;
    L = 77;
   } else {
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[15789 + (o & 15) >> 0] | r;
     o = Mb(o | 0, p | 0, 4) | 0;
     p = C;
    } while (!((o | 0) == 0 & (p | 0) == 0));
    L = ca;
    if ((t & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     o = t;
     t = 0;
     r = 15805;
     L = 77;
    } else {
     o = t;
     t = 2;
     r = 15805 + (u >> 4) | 0;
     L = 77;
    }
   }
  } else if ((L | 0) == 76) {
   f = qb(f, o, N) | 0;
   o = I;
   t = p;
   L = 77;
  } else if ((L | 0) == 82) {
   L = 0;
   I = sb(o, 0, s) | 0;
   H = (I | 0) == 0;
   f = o;
   u = H ? s : I - o | 0;
   w = 0;
   v = 15805;
   o = H ? o + s | 0 : I;
  } else if ((L | 0) == 86) {
   L = 0;
   p = 0;
   o = 0;
   t = f;
   while (1) {
    r = c[t >> 2] | 0;
    if (!r) break;
    o = ub(ga, r) | 0;
    if ((o | 0) < 0 | o >>> 0 > (s - p | 0) >>> 0) break;
    p = o + p | 0;
    if (s >>> 0 > p >>> 0) t = t + 4 | 0; else break;
   }
   if ((o | 0) < 0) {
    m = -1;
    break a;
   }
   tb(e, 32, K, p, I);
   if (!p) {
    f = 0;
    L = 97;
   } else {
    r = 0;
    while (1) {
     o = c[f >> 2] | 0;
     if (!o) {
      f = p;
      L = 97;
      break g;
     }
     o = ub(ga, o) | 0;
     r = o + r | 0;
     if ((r | 0) > (p | 0)) {
      f = p;
      L = 97;
      break g;
     }
     if (!(c[e >> 2] & 32)) nb(ga, o, e) | 0;
     if (r >>> 0 >= p >>> 0) {
      f = p;
      L = 97;
      break;
     } else f = f + 4 | 0;
    }
   }
  } while (0);
  if ((L | 0) == 97) {
   L = 0;
   tb(e, 32, K, f, I ^ 8192);
   o = (K | 0) > (f | 0) ? K : f;
   y = J;
   continue;
  }
  if ((L | 0) == 77) {
   L = 0;
   p = (s | 0) > -1 ? o & -65537 : o;
   o = ca;
   o = (c[o >> 2] | 0) != 0 | (c[o + 4 >> 2] | 0) != 0;
   if ((s | 0) != 0 | o) {
    u = (o & 1 ^ 1) + (W - f) | 0;
    u = (s | 0) > (u | 0) ? s : u;
    w = t;
    v = r;
    o = N;
   } else {
    f = N;
    u = 0;
    w = t;
    v = r;
    o = N;
   }
  }
  t = o - f | 0;
  r = (u | 0) < (t | 0) ? t : u;
  s = w + r | 0;
  o = (K | 0) < (s | 0) ? s : K;
  tb(e, 32, o, s, p);
  if (!(c[e >> 2] & 32)) nb(v, w, e) | 0;
  tb(e, 48, o, s, p ^ 65536);
  tb(e, 48, r, t, 0);
  if (!(c[e >> 2] & 32)) nb(f, t, e) | 0;
  tb(e, 32, o, s, p ^ 8192);
  y = J;
 }
 h : do if ((L | 0) == 244) if (!e) if (!n) m = 0; else {
  m = 1;
  while (1) {
   n = c[l + (m << 2) >> 2] | 0;
   if (!n) break;
   pb(j + (m << 3) | 0, n, g);
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break h;
   }
  }
  if ((m | 0) < 10) while (1) {
   if (c[l + (m << 2) >> 2] | 0) {
    m = -1;
    break h;
   }
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break;
   }
  } else m = 1;
 } while (0);
 i = ia;
 return m | 0;
}

function Qa(f, g) {
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 C = i;
 i = i + 32 | 0;
 B = C;
 A = c[g >> 2] | 0;
 x = g + 8 | 0;
 t = c[x >> 2] | 0;
 m = c[t >> 2] | 0;
 t = c[t + 12 >> 2] | 0;
 w = f + 5200 | 0;
 c[w >> 2] = 0;
 y = f + 5204 | 0;
 c[y >> 2] = 573;
 if ((t | 0) > 0) {
  j = -1;
  h = 0;
  do {
   if (!(b[A + (h << 2) >> 1] | 0)) b[A + (h << 2) + 2 >> 1] = 0; else {
    j = (c[w >> 2] | 0) + 1 | 0;
    c[w >> 2] = j;
    c[f + 2908 + (j << 2) >> 2] = h;
    a[f + 5208 + h >> 0] = 0;
    j = h;
   }
   h = h + 1 | 0;
  } while ((h | 0) != (t | 0));
  h = c[w >> 2] | 0;
  if ((h | 0) < 2) k = 3; else z = j;
 } else {
  h = 0;
  j = -1;
  k = 3;
 }
 if ((k | 0) == 3) {
  l = f + 5800 | 0;
  k = f + 5804 | 0;
  if (!m) {
   do {
    v = (j | 0) < 2;
    z = j + 1 | 0;
    j = v ? z : j;
    z = v ? z : 0;
    h = h + 1 | 0;
    c[w >> 2] = h;
    c[f + 2908 + (h << 2) >> 2] = z;
    b[A + (z << 2) >> 1] = 1;
    a[f + 5208 + z >> 0] = 0;
    c[l >> 2] = (c[l >> 2] | 0) + -1;
    h = c[w >> 2] | 0;
   } while ((h | 0) < 2);
   z = j;
  } else {
   do {
    v = (j | 0) < 2;
    z = j + 1 | 0;
    j = v ? z : j;
    z = v ? z : 0;
    h = h + 1 | 0;
    c[w >> 2] = h;
    c[f + 2908 + (h << 2) >> 2] = z;
    b[A + (z << 2) >> 1] = 1;
    a[f + 5208 + z >> 0] = 0;
    c[l >> 2] = (c[l >> 2] | 0) + -1;
    c[k >> 2] = (c[k >> 2] | 0) - (e[m + (z << 2) + 2 >> 1] | 0);
    h = c[w >> 2] | 0;
   } while ((h | 0) < 2);
   z = j;
  }
 }
 v = g + 4 | 0;
 c[v >> 2] = z;
 j = h;
 s = (h | 0) / 2 | 0;
 while (1) {
  r = c[f + 2908 + (s << 2) >> 2] | 0;
  p = f + 5208 + r | 0;
  k = s << 1;
  a : do if ((k | 0) > (j | 0)) h = s; else {
   q = A + (r << 2) | 0;
   h = s;
   while (1) {
    do if ((k | 0) < (j | 0)) {
     j = k | 1;
     l = c[f + 2908 + (j << 2) >> 2] | 0;
     m = b[A + (l << 2) >> 1] | 0;
     n = c[f + 2908 + (k << 2) >> 2] | 0;
     o = b[A + (n << 2) >> 1] | 0;
     if ((m & 65535) >= (o & 65535)) {
      if (m << 16 >> 16 != o << 16 >> 16) {
       m = k;
       break;
      }
      if ((d[f + 5208 + l >> 0] | 0) > (d[f + 5208 + n >> 0] | 0)) {
       m = k;
       break;
      }
     }
     m = j;
    } else m = k; while (0);
    j = b[q >> 1] | 0;
    k = c[f + 2908 + (m << 2) >> 2] | 0;
    l = b[A + (k << 2) >> 1] | 0;
    if ((j & 65535) < (l & 65535)) break a;
    if (j << 16 >> 16 == l << 16 >> 16) if ((d[p >> 0] | 0) <= (d[f + 5208 + k >> 0] | 0)) break a;
    c[f + 2908 + (h << 2) >> 2] = k;
    k = m << 1;
    j = c[w >> 2] | 0;
    if ((k | 0) > (j | 0)) {
     h = m;
     break;
    } else h = m;
   }
  } while (0);
  c[f + 2908 + (h << 2) >> 2] = r;
  if ((s | 0) <= 1) break;
  j = c[w >> 2] | 0;
  s = s + -1 | 0;
 }
 u = f + 2912 | 0;
 h = c[w >> 2] | 0;
 do {
  s = c[u >> 2] | 0;
  j = h + -1 | 0;
  c[w >> 2] = j;
  r = c[f + 2908 + (h << 2) >> 2] | 0;
  c[u >> 2] = r;
  q = f + 5208 + r | 0;
  b : do if ((h | 0) < 3) h = 1; else {
   p = A + (r << 2) | 0;
   h = 1;
   o = 2;
   while (1) {
    do if ((o | 0) < (j | 0)) {
     j = o | 1;
     k = c[f + 2908 + (j << 2) >> 2] | 0;
     l = b[A + (k << 2) >> 1] | 0;
     m = c[f + 2908 + (o << 2) >> 2] | 0;
     n = b[A + (m << 2) >> 1] | 0;
     if ((l & 65535) >= (n & 65535)) {
      if (l << 16 >> 16 != n << 16 >> 16) {
       m = o;
       break;
      }
      if ((d[f + 5208 + k >> 0] | 0) > (d[f + 5208 + m >> 0] | 0)) {
       m = o;
       break;
      }
     }
     m = j;
    } else m = o; while (0);
    j = b[p >> 1] | 0;
    k = c[f + 2908 + (m << 2) >> 2] | 0;
    l = b[A + (k << 2) >> 1] | 0;
    if ((j & 65535) < (l & 65535)) break b;
    if (j << 16 >> 16 == l << 16 >> 16) if ((d[q >> 0] | 0) <= (d[f + 5208 + k >> 0] | 0)) break b;
    c[f + 2908 + (h << 2) >> 2] = k;
    o = m << 1;
    j = c[w >> 2] | 0;
    if ((o | 0) > (j | 0)) {
     h = m;
     break;
    } else h = m;
   }
  } while (0);
  c[f + 2908 + (h << 2) >> 2] = r;
  r = c[u >> 2] | 0;
  p = (c[y >> 2] | 0) + -1 | 0;
  c[y >> 2] = p;
  c[f + 2908 + (p << 2) >> 2] = s;
  p = (c[y >> 2] | 0) + -1 | 0;
  c[y >> 2] = p;
  c[f + 2908 + (p << 2) >> 2] = r;
  p = A + (t << 2) | 0;
  b[p >> 1] = (e[A + (r << 2) >> 1] | 0) + (e[A + (s << 2) >> 1] | 0);
  j = a[f + 5208 + s >> 0] | 0;
  o = a[f + 5208 + r >> 0] | 0;
  q = f + 5208 + t | 0;
  a[q >> 0] = (((j & 255) < (o & 255) ? o : j) & 255) + 1;
  j = t & 65535;
  b[A + (r << 2) + 2 >> 1] = j;
  b[A + (s << 2) + 2 >> 1] = j;
  c[u >> 2] = t;
  j = c[w >> 2] | 0;
  c : do if ((j | 0) < 2) h = 1; else {
   h = 1;
   o = 2;
   while (1) {
    do if ((o | 0) < (j | 0)) {
     j = o | 1;
     k = c[f + 2908 + (j << 2) >> 2] | 0;
     l = b[A + (k << 2) >> 1] | 0;
     m = c[f + 2908 + (o << 2) >> 2] | 0;
     n = b[A + (m << 2) >> 1] | 0;
     if ((l & 65535) >= (n & 65535)) {
      if (l << 16 >> 16 != n << 16 >> 16) {
       m = o;
       break;
      }
      if ((d[f + 5208 + k >> 0] | 0) > (d[f + 5208 + m >> 0] | 0)) {
       m = o;
       break;
      }
     }
     m = j;
    } else m = o; while (0);
    j = b[p >> 1] | 0;
    k = c[f + 2908 + (m << 2) >> 2] | 0;
    l = b[A + (k << 2) >> 1] | 0;
    if ((j & 65535) < (l & 65535)) break c;
    if (j << 16 >> 16 == l << 16 >> 16) if ((d[q >> 0] | 0) <= (d[f + 5208 + k >> 0] | 0)) break c;
    c[f + 2908 + (h << 2) >> 2] = k;
    o = m << 1;
    j = c[w >> 2] | 0;
    if ((o | 0) > (j | 0)) {
     h = m;
     break;
    } else h = m;
   }
  } while (0);
  c[f + 2908 + (h << 2) >> 2] = t;
  t = t + 1 | 0;
  h = c[w >> 2] | 0;
 } while ((h | 0) > 1);
 t = c[u >> 2] | 0;
 u = (c[y >> 2] | 0) + -1 | 0;
 c[y >> 2] = u;
 c[f + 2908 + (u << 2) >> 2] = t;
 u = c[g >> 2] | 0;
 t = c[v >> 2] | 0;
 j = c[x >> 2] | 0;
 p = c[j >> 2] | 0;
 q = c[j + 4 >> 2] | 0;
 r = c[j + 8 >> 2] | 0;
 j = c[j + 16 >> 2] | 0;
 h = f + 2876 | 0;
 k = h + 32 | 0;
 do {
  b[h >> 1] = 0;
  h = h + 2 | 0;
 } while ((h | 0) < (k | 0));
 h = c[y >> 2] | 0;
 b[u + (c[f + 2908 + (h << 2) >> 2] << 2) + 2 >> 1] = 0;
 h = h + 1 | 0;
 d : do if ((h | 0) < 573) {
  s = f + 5800 | 0;
  o = f + 5804 | 0;
  if (!p) {
   n = h;
   h = 0;
   do {
    m = c[f + 2908 + (n << 2) >> 2] | 0;
    y = u + (m << 2) + 2 | 0;
    l = e[u + (e[y >> 1] << 2) + 2 >> 1] | 0;
    x = (l | 0) < (j | 0);
    l = x ? l + 1 | 0 : j;
    h = (x & 1 ^ 1) + h | 0;
    b[y >> 1] = l;
    if ((m | 0) <= (t | 0)) {
     y = f + 2876 + (l << 1) | 0;
     b[y >> 1] = (b[y >> 1] | 0) + 1 << 16 >> 16;
     if ((m | 0) < (r | 0)) k = 0; else k = c[q + (m - r << 2) >> 2] | 0;
     y = R(e[u + (m << 2) >> 1] | 0, k + l | 0) | 0;
     c[s >> 2] = y + (c[s >> 2] | 0);
    }
    n = n + 1 | 0;
   } while ((n | 0) != 573);
  } else {
   n = h;
   h = 0;
   do {
    m = c[f + 2908 + (n << 2) >> 2] | 0;
    y = u + (m << 2) + 2 | 0;
    l = e[u + (e[y >> 1] << 2) + 2 >> 1] | 0;
    x = (l | 0) < (j | 0);
    l = x ? l + 1 | 0 : j;
    h = (x & 1 ^ 1) + h | 0;
    b[y >> 1] = l;
    if ((m | 0) <= (t | 0)) {
     y = f + 2876 + (l << 1) | 0;
     b[y >> 1] = (b[y >> 1] | 0) + 1 << 16 >> 16;
     if ((m | 0) < (r | 0)) k = 0; else k = c[q + (m - r << 2) >> 2] | 0;
     y = e[u + (m << 2) >> 1] | 0;
     x = R(y, k + l | 0) | 0;
     c[s >> 2] = x + (c[s >> 2] | 0);
     y = R((e[p + (m << 2) + 2 >> 1] | 0) + k | 0, y) | 0;
     c[o >> 2] = y + (c[o >> 2] | 0);
    }
    n = n + 1 | 0;
   } while ((n | 0) != 573);
  }
  if (h | 0) {
   o = f + 2876 + (j << 1) | 0;
   n = h;
   while (1) {
    h = j;
    while (1) {
     m = h + -1 | 0;
     l = f + 2876 + (m << 1) | 0;
     k = b[l >> 1] | 0;
     if (!(k << 16 >> 16)) h = m; else break;
    }
    b[l >> 1] = k + -1 << 16 >> 16;
    h = f + 2876 + (h << 1) | 0;
    b[h >> 1] = (e[h >> 1] | 0) + 2;
    h = (b[o >> 1] | 0) + -1 << 16 >> 16;
    b[o >> 1] = h;
    if ((n | 0) > 2) n = n + -2 | 0; else break;
   }
   if (j | 0) {
    k = 573;
    while (1) {
     o = j & 65535;
     if (h << 16 >> 16) {
      n = h & 65535;
      do {
       do {
        k = k + -1 | 0;
        h = c[f + 2908 + (k << 2) >> 2] | 0;
       } while ((h | 0) > (t | 0));
       l = u + (h << 2) + 2 | 0;
       m = e[l >> 1] | 0;
       if ((j | 0) != (m | 0)) {
        y = R(e[u + (h << 2) >> 1] | 0, j - m | 0) | 0;
        c[s >> 2] = y + (c[s >> 2] | 0);
        b[l >> 1] = o;
       }
       n = n + -1 | 0;
      } while ((n | 0) != 0);
     }
     j = j + -1 | 0;
     if (!j) break d;
     h = b[f + 2876 + (j << 1) >> 1] | 0;
    }
   }
  }
 } while (0);
 h = 1;
 j = 0;
 do {
  j = (e[f + 2876 + (h + -1 << 1) >> 1] | 0) + (j & 65534) << 1;
  b[B + (h << 1) >> 1] = j;
  h = h + 1 | 0;
 } while ((h | 0) != 16);
 if ((z | 0) < 0) {
  i = C;
  return;
 } else l = 0;
 while (1) {
  f = b[A + (l << 2) + 2 >> 1] | 0;
  h = f & 65535;
  if (f << 16 >> 16) {
   j = B + (h << 1) | 0;
   k = b[j >> 1] | 0;
   b[j >> 1] = k + 1 << 16 >> 16;
   j = h;
   k = k & 65535;
   h = 0;
   while (1) {
    h = h | k & 1;
    if ((j | 0) > 1) {
     j = j + -1 | 0;
     k = k >>> 1;
     h = h << 1;
    } else break;
   }
   b[A + (l << 2) >> 1] = h;
  }
  if ((l | 0) == (z | 0)) break; else l = l + 1 | 0;
 }
 i = C;
 return;
}

function Hb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[4456] | 0;
 if (d >>> 0 < h >>> 0) aa();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) aa();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) aa();
  if ((k | 0) == (c[4457] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[4454] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 17848 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) aa();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) aa();
   }
   if ((d | 0) == (b | 0)) {
    c[4452] = c[4452] & ~(1 << e);
    q = k;
    g = j;
    break;
   }
   if ((d | 0) == (a | 0)) f = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) aa();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) f = a; else aa();
   }
   c[b + 12 >> 2] = d;
   c[f >> 2] = b;
   q = k;
   g = j;
   break;
  }
  f = c[k + 24 >> 2] | 0;
  d = c[k + 12 >> 2] | 0;
  do if ((d | 0) == (k | 0)) {
   b = k + 16 | 0;
   d = b + 4 | 0;
   a = c[d >> 2] | 0;
   if (!a) {
    a = c[b >> 2] | 0;
    if (!a) {
     i = 0;
     break;
    }
   } else b = d;
   while (1) {
    d = a + 20 | 0;
    e = c[d >> 2] | 0;
    if (e | 0) {
     a = e;
     b = d;
     continue;
    }
    d = a + 16 | 0;
    e = c[d >> 2] | 0;
    if (!e) break; else {
     a = e;
     b = d;
    }
   }
   if (b >>> 0 < h >>> 0) aa(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) aa();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) aa();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else aa();
  } while (0);
  if (!f) {
   q = k;
   g = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 18112 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[4453] = c[4453] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[4456] | 0) >>> 0) aa();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[4456] | 0;
   if (i >>> 0 < d >>> 0) aa();
   c[i + 24 >> 2] = f;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) aa(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    g = j;
   } else if (a >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
    c[i + 20 >> 2] = a;
    c[a + 24 >> 2] = i;
    q = k;
    g = j;
    break;
   }
  }
 } else {
  q = d;
  g = e;
 } while (0);
 if (q >>> 0 >= m >>> 0) aa();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) aa();
 if (!(b & 2)) {
  if ((m | 0) == (c[4458] | 0)) {
   p = (c[4455] | 0) + g | 0;
   c[4455] = p;
   c[4458] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[4457] | 0)) return;
   c[4457] = 0;
   c[4454] = 0;
   return;
  }
  if ((m | 0) == (c[4457] | 0)) {
   p = (c[4454] | 0) + g | 0;
   c[4454] = p;
   c[4457] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 17848 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[4456] | 0) >>> 0) aa();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) aa();
   }
   if ((d | 0) == (b | 0)) {
    c[4452] = c[4452] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[4456] | 0) >>> 0) aa();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else aa();
   }
   c[b + 12 >> 2] = d;
   c[l >> 2] = b;
  } else {
   f = c[m + 24 >> 2] | 0;
   a = c[m + 12 >> 2] | 0;
   do if ((a | 0) == (m | 0)) {
    b = m + 16 | 0;
    d = b + 4 | 0;
    a = c[d >> 2] | 0;
    if (!a) {
     a = c[b >> 2] | 0;
     if (!a) {
      n = 0;
      break;
     }
    } else b = d;
    while (1) {
     d = a + 20 | 0;
     e = c[d >> 2] | 0;
     if (e | 0) {
      a = e;
      b = d;
      continue;
     }
     d = a + 16 | 0;
     e = c[d >> 2] | 0;
     if (!e) break; else {
      a = e;
      b = d;
     }
    }
    if (b >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[4456] | 0) >>> 0) aa();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) aa();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else aa();
   } while (0);
   if (f | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 18112 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[4453] = c[4453] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[4456] | 0) >>> 0) aa();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[4456] | 0;
    if (n >>> 0 < d >>> 0) aa();
    c[n + 24 >> 2] = f;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) aa(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[4457] | 0)) {
   c[4454] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 17848 + (a << 1 << 2) | 0;
  b = c[4452] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[4452] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
    o = a;
    p = b;
   }
  }
  c[o >> 2] = q;
  c[p + 12 >> 2] = q;
  c[q + 8 >> 2] = p;
  c[q + 12 >> 2] = d;
  return;
 }
 a = g >>> 8;
 if (!a) d = 0; else if (g >>> 0 > 16777215) d = 31; else {
  o = (a + 1048320 | 0) >>> 16 & 8;
  p = a << o;
  n = (p + 520192 | 0) >>> 16 & 4;
  p = p << n;
  d = (p + 245760 | 0) >>> 16 & 2;
  d = 14 - (n | o | d) + (p << d >>> 15) | 0;
  d = g >>> (d + 7 | 0) & 1 | d << 1;
 }
 e = 18112 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[4453] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[4453] = a | b;
  c[e >> 2] = q;
  c[q + 24 >> 2] = e;
  c[q + 12 >> 2] = q;
  c[q + 8 >> 2] = q;
 } else {
  f = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
  a = c[e >> 2] | 0;
  while (1) {
   if ((c[a + 4 >> 2] & -8 | 0) == (g | 0)) {
    d = a;
    e = 130;
    break;
   }
   b = a + 16 + (f >>> 31 << 2) | 0;
   d = c[b >> 2] | 0;
   if (!d) {
    e = 127;
    break;
   } else {
    f = f << 1;
    a = d;
   }
  }
  if ((e | 0) == 127) if (b >>> 0 < (c[4456] | 0) >>> 0) aa(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = a;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((e | 0) == 130) {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[4456] | 0;
   if (b >>> 0 >= p >>> 0 & d >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = d;
    c[q + 24 >> 2] = 0;
    break;
   } else aa();
  }
 } while (0);
 q = (c[4460] | 0) + -1 | 0;
 c[4460] = q;
 if (!q) a = 18264; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[4460] = -1;
 return;
}

function bb(d, f, g, h, j, k) {
 d = d | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 I = i;
 i = i + 64 | 0;
 F = I + 32 | 0;
 q = I;
 l = F;
 m = l + 32 | 0;
 do {
  b[l >> 1] = 0;
  l = l + 2 | 0;
 } while ((l | 0) < (m | 0));
 p = (g | 0) == 0;
 if (p) {
  l = c[j >> 2] | 0;
  G = 5;
 } else {
  l = 0;
  do {
   H = F + (e[f + (l << 1) >> 1] << 1) | 0;
   b[H >> 1] = (b[H >> 1] | 0) + 1 << 16 >> 16;
   l = l + 1 | 0;
  } while ((l | 0) != (g | 0));
  m = b[F + 30 >> 1] | 0;
  l = c[j >> 2] | 0;
  if (!(m << 16 >> 16)) G = 5; else {
   o = 15;
   G = 7;
  }
 }
 do if ((G | 0) == 5) if (!(b[F + 28 >> 1] | 0)) if (!(b[F + 26 >> 1] | 0)) if (!(b[F + 24 >> 1] | 0)) if (!(b[F + 22 >> 1] | 0)) if (!(b[F + 20 >> 1] | 0)) if (!(b[F + 18 >> 1] | 0)) if (!(b[F + 16 >> 1] | 0)) if (!(b[F + 14 >> 1] | 0)) if (!(b[F + 12 >> 1] | 0)) if (!(b[F + 10 >> 1] | 0)) if (!(b[F + 8 >> 1] | 0)) if (!(b[F + 6 >> 1] | 0)) if (!(b[F + 4 >> 1] | 0)) {
  if (b[F + 2 >> 1] | 0) {
   m = 0;
   l = l >>> 0 > 1 ? 1 : l;
   E = 1;
   n = 1;
   break;
  }
  H = c[h >> 2] | 0;
  c[h >> 2] = H + 4;
  a[H >> 0] = 64;
  a[H + 1 >> 0] = 1;
  b[H + 2 >> 1] = 0;
  H = c[h >> 2] | 0;
  c[h >> 2] = H + 4;
  a[H >> 0] = 64;
  a[H + 1 >> 0] = 1;
  b[H + 2 >> 1] = 0;
  c[j >> 2] = 1;
  h = 0;
  i = I;
  return h | 0;
 } else {
  m = 0;
  o = 2;
  G = 7;
 } else {
  m = 0;
  o = 3;
  G = 7;
 } else {
  m = 0;
  o = 4;
  G = 7;
 } else {
  m = 0;
  o = 5;
  G = 7;
 } else {
  m = 0;
  o = 6;
  G = 7;
 } else {
  m = 0;
  o = 7;
  G = 7;
 } else {
  m = 0;
  o = 8;
  G = 7;
 } else {
  m = 0;
  o = 9;
  G = 7;
 } else {
  m = 0;
  o = 10;
  G = 7;
 } else {
  m = 0;
  o = 11;
  G = 7;
 } else {
  m = 0;
  o = 12;
  G = 7;
 } else {
  m = 0;
  o = 13;
  G = 7;
 } else {
  m = 0;
  o = 14;
  G = 7;
 } while (0);
 a : do if ((G | 0) == 7) {
  l = l >>> 0 > o >>> 0 ? o : l;
  n = 1;
  while (1) {
   if (b[F + (n << 1) >> 1] | 0) {
    E = o;
    break a;
   }
   n = n + 1 | 0;
   if (n >>> 0 >= o >>> 0) {
    E = o;
    break;
   }
  }
 } while (0);
 H = l >>> 0 < n >>> 0 ? n : l;
 o = b[F + 2 >> 1] | 0;
 l = 2 - (o & 65535) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 4 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 6 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 8 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 10 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 12 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 14 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 16 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 18 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 20 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 22 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 24 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 26 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (e[F + 28 >> 1] | 0) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 l = (l << 1) - (m & 65535) | 0;
 if ((l | 0) < 0) {
  h = -1;
  i = I;
  return h | 0;
 }
 if ((l | 0) > 0) if ((d | 0) == 0 | (E | 0) != 1) {
  h = -1;
  i = I;
  return h | 0;
 }
 b[q + 2 >> 1] = 0;
 b[q + 4 >> 1] = o;
 C = (e[F + 4 >> 1] | 0) + (o & 65535) | 0;
 b[q + 6 >> 1] = C;
 D = e[F + 6 >> 1] | 0;
 b[q + 8 >> 1] = D + C;
 D = C + D | 0;
 C = e[F + 8 >> 1] | 0;
 b[q + 10 >> 1] = C + D;
 C = D + C | 0;
 D = e[F + 10 >> 1] | 0;
 b[q + 12 >> 1] = D + C;
 D = C + D | 0;
 C = e[F + 12 >> 1] | 0;
 b[q + 14 >> 1] = C + D;
 C = D + C | 0;
 D = e[F + 14 >> 1] | 0;
 b[q + 16 >> 1] = D + C;
 D = C + D | 0;
 C = e[F + 16 >> 1] | 0;
 b[q + 18 >> 1] = C + D;
 C = D + C | 0;
 D = e[F + 18 >> 1] | 0;
 b[q + 20 >> 1] = D + C;
 D = C + D | 0;
 C = e[F + 20 >> 1] | 0;
 b[q + 22 >> 1] = C + D;
 C = D + C | 0;
 D = e[F + 22 >> 1] | 0;
 b[q + 24 >> 1] = D + C;
 D = C + D | 0;
 C = e[F + 24 >> 1] | 0;
 b[q + 26 >> 1] = C + D;
 C = D + C | 0;
 D = e[F + 26 >> 1] | 0;
 b[q + 28 >> 1] = D + C;
 b[q + 30 >> 1] = (e[F + 28 >> 1] | 0) + (C + D);
 if (!p) {
  m = 0;
  do {
   l = b[f + (m << 1) >> 1] | 0;
   if (l << 16 >> 16) {
    C = q + ((l & 65535) << 1) | 0;
    D = b[C >> 1] | 0;
    b[C >> 1] = D + 1 << 16 >> 16;
    b[k + ((D & 65535) << 1) >> 1] = m;
   }
   m = m + 1 | 0;
  } while ((m | 0) != (g | 0));
 }
 switch (d | 0) {
 case 0:
  {
   l = 0;
   y = 0;
   z = k;
   A = 19;
   B = k;
   break;
  }
 case 1:
  {
   if (H >>> 0 > 9) {
    h = 1;
    i = I;
    return h | 0;
   } else {
    l = 0;
    y = 1;
    z = 13136;
    A = 256;
    B = 13262;
   }
   break;
  }
 default:
  {
   l = (d | 0) == 2;
   if (l & H >>> 0 > 9) {
    h = 1;
    i = I;
    return h | 0;
   } else {
    y = 0;
    z = 13586;
    A = -1;
    B = 13712;
   }
  }
 }
 q = 1 << H;
 C = q + -1 | 0;
 D = H & 255;
 o = H;
 m = 0;
 p = 0;
 d = -1;
 x = c[h >> 2] | 0;
 g = 0;
 b : while (1) {
  w = 1 << o;
  v = g;
  while (1) {
   s = n - m | 0;
   o = s & 255;
   g = b[k + (v << 1) >> 1] | 0;
   r = g & 65535;
   do if ((r | 0) < (A | 0)) u = 0; else {
    if ((r | 0) <= (A | 0)) {
     u = 96;
     g = 0;
     break;
    }
    u = b[B + (r << 1) >> 1] & 255;
    g = b[z + (r << 1) >> 1] | 0;
   } while (0);
   r = 1 << s;
   s = p >>> m;
   t = w;
   do {
    J = t;
    t = t - r | 0;
    K = t + s | 0;
    a[x + (K << 2) >> 0] = u;
    a[x + (K << 2) + 1 >> 0] = o;
    b[x + (K << 2) + 2 >> 1] = g;
   } while ((J | 0) != (r | 0));
   g = 1 << n + -1;
   while (1) if (!(g & p)) break; else g = g >>> 1;
   if (!g) p = 0; else p = (g + -1 & p) + g | 0;
   g = v + 1 | 0;
   J = F + (n << 1) | 0;
   K = (b[J >> 1] | 0) + -1 << 16 >> 16;
   b[J >> 1] = K;
   if (!(K << 16 >> 16)) {
    if ((n | 0) == (E | 0)) {
     l = x;
     break b;
    }
    n = e[f + (e[k + (g << 1) >> 1] << 1) >> 1] | 0;
   }
   if (n >>> 0 <= H >>> 0) {
    v = g;
    continue;
   }
   o = p & C;
   if ((o | 0) == (d | 0)) v = g; else {
    u = g;
    d = o;
    break;
   }
  }
  m = (m | 0) == 0 ? H : m;
  t = x + (w << 2) | 0;
  o = n - m | 0;
  c : do if (n >>> 0 < E >>> 0) {
   s = n;
   r = o;
   o = 1 << o;
   while (1) {
    g = o - (e[F + (s << 1) >> 1] | 0) | 0;
    if ((g | 0) < 1) {
     o = r;
     break c;
    }
    o = r + 1 | 0;
    s = o + m | 0;
    if (s >>> 0 >= E >>> 0) break; else {
     r = o;
     o = g << 1;
    }
   }
  } while (0);
  q = (1 << o) + q | 0;
  if (y & q >>> 0 > 851 | l & q >>> 0 > 591) {
   l = 1;
   G = 50;
   break;
  }
  x = c[h >> 2] | 0;
  a[x + (d << 2) >> 0] = o;
  a[x + (d << 2) + 1 >> 0] = D;
  b[x + (d << 2) + 2 >> 1] = (t - x | 0) >>> 2;
  x = t;
  g = u;
 }
 if ((G | 0) == 50) {
  i = I;
  return l | 0;
 }
 d : do if (p | 0) {
  n = m;
  g = p;
  m = E;
  while (1) {
   if ((n | 0) == 0 | (g & C | 0) == (d | 0)) p = l; else {
    n = 0;
    o = D;
    m = H;
    p = c[h >> 2] | 0;
   }
   l = g >>> n;
   a[p + (l << 2) >> 0] = 64;
   a[p + (l << 2) + 1 >> 0] = o;
   b[p + (l << 2) + 2 >> 1] = 0;
   l = 1 << m + -1;
   while (1) if (!(l & g)) break; else l = l >>> 1;
   if (!l) break d;
   g = (l + -1 & g) + l | 0;
   if (!g) break; else l = p;
  }
 } while (0);
 c[h >> 2] = (c[h >> 2] | 0) + (q << 2);
 c[j >> 2] = H;
 K = 0;
 i = I;
 return K | 0;
}

function Pa(f, g, h, i) {
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 if ((c[f + 132 >> 2] | 0) > 0) {
  m = (c[f >> 2] | 0) + 44 | 0;
  if ((c[m >> 2] | 0) == 2) {
   j = -201342849;
   k = 0;
   while (1) {
    if (j & 1 | 0) if (b[f + 148 + (k << 2) >> 1] | 0) {
     j = 0;
     break;
    }
    k = k + 1 | 0;
    if ((k | 0) >= 32) {
     l = 6;
     break;
    } else j = j >>> 1;
   }
   a : do if ((l | 0) == 6) if (!(b[f + 184 >> 1] | 0)) if (!(b[f + 188 >> 1] | 0)) if (!(b[f + 200 >> 1] | 0)) {
    j = 32;
    while (1) {
     if (b[f + 148 + (j << 2) >> 1] | 0) {
      j = 1;
      break a;
     }
     j = j + 1 | 0;
     if ((j | 0) >= 256) {
      j = 0;
      break;
     }
    }
   } else j = 1; else j = 1; else j = 1; while (0);
   c[m >> 2] = j;
  }
  Qa(f, f + 2840 | 0);
  Qa(f, f + 2852 | 0);
  p = c[f + 2844 >> 2] | 0;
  r = b[f + 150 >> 1] | 0;
  q = r << 16 >> 16 == 0;
  b[f + 148 + (p + 1 << 2) + 2 >> 1] = -1;
  t = f + 2752 | 0;
  u = f + 2756 | 0;
  v = f + 2748 | 0;
  o = q ? 138 : 7;
  q = q ? 3 : 4;
  j = 0;
  r = r & 65535;
  s = -1;
  b : while (1) {
   k = 0;
   do {
    if ((j | 0) > (p | 0)) break b;
    j = j + 1 | 0;
    m = b[f + 148 + (j << 2) + 2 >> 1] | 0;
    n = m & 65535;
    k = k + 1 | 0;
    l = (r | 0) == (n | 0);
   } while ((k | 0) < (o | 0) & l);
   do if ((k | 0) < (q | 0)) {
    s = f + 2684 + (r << 2) | 0;
    b[s >> 1] = (e[s >> 1] | 0) + k;
   } else if (!r) if ((k | 0) < 11) {
    b[t >> 1] = (b[t >> 1] | 0) + 1 << 16 >> 16;
    break;
   } else {
    b[u >> 1] = (b[u >> 1] | 0) + 1 << 16 >> 16;
    break;
   } else {
    if ((r | 0) != (s | 0)) {
     s = f + 2684 + (r << 2) | 0;
     b[s >> 1] = (b[s >> 1] | 0) + 1 << 16 >> 16;
    }
    b[v >> 1] = (b[v >> 1] | 0) + 1 << 16 >> 16;
    break;
   } while (0);
   q = m << 16 >> 16 == 0;
   s = r;
   o = q ? 138 : l ? 6 : 7;
   q = q | l ? 3 : 4;
   r = n;
  }
  p = c[f + 2856 >> 2] | 0;
  r = b[f + 2442 >> 1] | 0;
  q = r << 16 >> 16 == 0;
  b[f + 2440 + (p + 1 << 2) + 2 >> 1] = -1;
  o = q ? 138 : 7;
  q = q ? 3 : 4;
  j = 0;
  r = r & 65535;
  s = -1;
  c : while (1) {
   k = 0;
   do {
    if ((j | 0) > (p | 0)) break c;
    j = j + 1 | 0;
    m = b[f + 2440 + (j << 2) + 2 >> 1] | 0;
    n = m & 65535;
    k = k + 1 | 0;
    l = (r | 0) == (n | 0);
   } while ((k | 0) < (o | 0) & l);
   do if ((k | 0) < (q | 0)) {
    s = f + 2684 + (r << 2) | 0;
    b[s >> 1] = (e[s >> 1] | 0) + k;
   } else if (!r) if ((k | 0) < 11) {
    b[t >> 1] = (b[t >> 1] | 0) + 1 << 16 >> 16;
    break;
   } else {
    b[u >> 1] = (b[u >> 1] | 0) + 1 << 16 >> 16;
    break;
   } else {
    if ((r | 0) != (s | 0)) {
     s = f + 2684 + (r << 2) | 0;
     b[s >> 1] = (b[s >> 1] | 0) + 1 << 16 >> 16;
    }
    b[v >> 1] = (b[v >> 1] | 0) + 1 << 16 >> 16;
    break;
   } while (0);
   q = m << 16 >> 16 == 0;
   s = r;
   o = q ? 138 : l ? 6 : 7;
   q = q | l ? 3 : 4;
   r = n;
  }
  Qa(f, f + 2864 | 0);
  if (!(b[f + 2746 >> 1] | 0)) if (!(b[f + 2690 >> 1] | 0)) if (!(b[f + 2742 >> 1] | 0)) if (!(b[f + 2694 >> 1] | 0)) if (!(b[f + 2738 >> 1] | 0)) if (!(b[f + 2698 >> 1] | 0)) if (!(b[f + 2734 >> 1] | 0)) if (!(b[f + 2702 >> 1] | 0)) if (!(b[f + 2730 >> 1] | 0)) if (!(b[f + 2706 >> 1] | 0)) if (!(b[f + 2726 >> 1] | 0)) if (!(b[f + 2710 >> 1] | 0)) if (!(b[f + 2722 >> 1] | 0)) if (!(b[f + 2714 >> 1] | 0)) if (!(b[f + 2718 >> 1] | 0)) j = (b[f + 2686 >> 1] | 0) == 0 ? 2 : 3; else j = 4; else j = 5; else j = 6; else j = 7; else j = 8; else j = 9; else j = 10; else j = 11; else j = 12; else j = 13; else j = 14; else j = 15; else j = 16; else j = 17; else j = 18;
  l = f + 5800 | 0;
  k = (j * 3 | 0) + 17 + (c[l >> 2] | 0) | 0;
  c[l >> 2] = k;
  k = (k + 10 | 0) >>> 3;
  l = ((c[f + 5804 >> 2] | 0) + 10 | 0) >>> 3;
  k = l >>> 0 > k >>> 0 ? k : l;
 } else {
  l = h + 5 | 0;
  j = 0;
  k = l;
 }
 do if ((g | 0) != 0 & (h + 4 | 0) >>> 0 <= k >>> 0) Na(f, g, h, i); else {
  t = f + 5820 | 0;
  n = c[t >> 2] | 0;
  m = (n | 0) > 13;
  if ((l | 0) == (k | 0) ? 1 : (c[f + 136 >> 2] | 0) == 4) {
   j = i + 2 & 65535;
   k = f + 5816 | 0;
   l = e[k >> 1] | j << n;
   b[k >> 1] = l;
   if (m) {
    u = f + 20 | 0;
    v = c[u >> 2] | 0;
    c[u >> 2] = v + 1;
    g = f + 8 | 0;
    a[(c[g >> 2] | 0) + v >> 0] = l;
    v = (e[k >> 1] | 0) >>> 8 & 255;
    h = c[u >> 2] | 0;
    c[u >> 2] = h + 1;
    a[(c[g >> 2] | 0) + h >> 0] = v;
    h = c[t >> 2] | 0;
    b[k >> 1] = j >>> (16 - h | 0);
    j = h + -13 | 0;
   } else j = n + 3 | 0;
   c[t >> 2] = j;
   Ra(f, 10100, 11252);
   break;
  }
  k = i + 4 & 65535;
  s = f + 5816 | 0;
  l = e[s >> 1] | k << n;
  b[s >> 1] = l;
  if (m) {
   g = f + 20 | 0;
   n = c[g >> 2] | 0;
   c[g >> 2] = n + 1;
   h = f + 8 | 0;
   a[(c[h >> 2] | 0) + n >> 0] = l;
   l = (e[s >> 1] | 0) >>> 8 & 255;
   n = c[g >> 2] | 0;
   c[g >> 2] = n + 1;
   a[(c[h >> 2] | 0) + n >> 0] = l;
   n = c[t >> 2] | 0;
   l = k >>> (16 - n | 0);
   b[s >> 1] = l;
   n = n + -13 | 0;
  } else n = n + 3 | 0;
  c[t >> 2] = n;
  q = c[f + 2844 >> 2] | 0;
  r = c[f + 2856 >> 2] | 0;
  m = q + 65280 & 65535;
  k = l & 65535 | m << n;
  b[s >> 1] = k;
  if ((n | 0) > 11) {
   v = f + 20 | 0;
   h = c[v >> 2] | 0;
   c[v >> 2] = h + 1;
   g = f + 8 | 0;
   a[(c[g >> 2] | 0) + h >> 0] = k;
   k = (e[s >> 1] | 0) >>> 8 & 255;
   h = c[v >> 2] | 0;
   c[v >> 2] = h + 1;
   a[(c[g >> 2] | 0) + h >> 0] = k;
   h = c[t >> 2] | 0;
   k = m >>> (16 - h | 0);
   b[s >> 1] = k;
   m = h + -11 | 0;
  } else m = n + 5 | 0;
  c[t >> 2] = m;
  l = r & 65535;
  k = l << m | k & 65535;
  b[s >> 1] = k;
  if ((m | 0) > 11) {
   g = f + 20 | 0;
   m = c[g >> 2] | 0;
   c[g >> 2] = m + 1;
   h = f + 8 | 0;
   a[(c[h >> 2] | 0) + m >> 0] = k;
   k = (e[s >> 1] | 0) >>> 8 & 255;
   m = c[g >> 2] | 0;
   c[g >> 2] = m + 1;
   a[(c[h >> 2] | 0) + m >> 0] = k;
   m = c[t >> 2] | 0;
   k = l >>> (16 - m | 0);
   b[s >> 1] = k;
   m = m + -11 | 0;
  } else m = m + 5 | 0;
  c[t >> 2] = m;
  l = j + 65533 & 65535;
  k = l << m | k & 65535;
  b[s >> 1] = k;
  if ((m | 0) > 12) {
   p = f + 20 | 0;
   h = c[p >> 2] | 0;
   c[p >> 2] = h + 1;
   o = f + 8 | 0;
   a[(c[o >> 2] | 0) + h >> 0] = k;
   h = (e[s >> 1] | 0) >>> 8 & 255;
   k = c[p >> 2] | 0;
   c[p >> 2] = k + 1;
   a[(c[o >> 2] | 0) + k >> 0] = h;
   k = c[t >> 2] | 0;
   l = l >>> (16 - k | 0);
   b[s >> 1] = l;
   k = k + -12 | 0;
  } else {
   o = f + 8 | 0;
   p = f + 20 | 0;
   l = k;
   k = m + 4 | 0;
  }
  c[t >> 2] = k;
  n = 0;
  while (1) {
   m = e[f + 2684 + (d[14723 + n >> 0] << 2) + 2 >> 1] | 0;
   l = m << k | l & 65535;
   b[s >> 1] = l;
   if ((k | 0) > 13) {
    k = c[p >> 2] | 0;
    c[p >> 2] = k + 1;
    a[(c[o >> 2] | 0) + k >> 0] = l;
    l = (e[s >> 1] | 0) >>> 8 & 255;
    k = c[p >> 2] | 0;
    c[p >> 2] = k + 1;
    a[(c[o >> 2] | 0) + k >> 0] = l;
    k = c[t >> 2] | 0;
    l = m >>> (16 - k | 0);
    b[s >> 1] = l;
    k = k + -13 | 0;
   } else k = k + 3 | 0;
   c[t >> 2] = k;
   if ((n | 0) == (j | 0)) break; else n = n + 1 | 0;
  }
  g = f + 148 | 0;
  Sa(f, g, q);
  h = f + 2440 | 0;
  Sa(f, h, r);
  Ra(f, g, h);
 } while (0);
 Ma(f);
 if (!i) return;
 l = f + 5820 | 0;
 k = c[l >> 2] | 0;
 if ((k | 0) > 8) {
  j = f + 5816 | 0;
  v = b[j >> 1] & 255;
  g = f + 20 | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = h + 1;
  i = f + 8 | 0;
  a[(c[i >> 2] | 0) + h >> 0] = v;
  h = (e[j >> 1] | 0) >>> 8 & 255;
  f = c[g >> 2] | 0;
  c[g >> 2] = f + 1;
  a[(c[i >> 2] | 0) + f >> 0] = h;
 } else {
  j = f + 5816 | 0;
  if ((k | 0) > 0) {
   h = b[j >> 1] & 255;
   g = f + 20 | 0;
   i = c[g >> 2] | 0;
   c[g >> 2] = i + 1;
   a[(c[f + 8 >> 2] | 0) + i >> 0] = h;
  }
 }
 b[j >> 1] = 0;
 c[l >> 2] = 0;
 return;
}

function Ia(e, f) {
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
 m = e + 116 | 0;
 n = (f | 0) == 0;
 x = e + 72 | 0;
 B = e + 88 | 0;
 I = e + 108 | 0;
 G = e + 56 | 0;
 C = e + 84 | 0;
 D = e + 68 | 0;
 E = e + 52 | 0;
 F = e + 64 | 0;
 o = e + 96 | 0;
 p = e + 120 | 0;
 q = e + 112 | 0;
 r = e + 100 | 0;
 s = e + 5792 | 0;
 t = e + 5796 | 0;
 u = e + 5784 | 0;
 v = e + 5788 | 0;
 w = e + 104 | 0;
 H = e + 92 | 0;
 y = e + 128 | 0;
 z = e + 44 | 0;
 A = e + 136 | 0;
 a : while (1) {
  g = c[m >> 2] | 0;
  while (1) {
   if (g >>> 0 < 262) {
    Fa(e);
    g = c[m >> 2] | 0;
    if (n & g >>> 0 < 262) {
     g = 0;
     i = 48;
     break a;
    }
    if (!g) {
     i = 38;
     break a;
    }
    if (g >>> 0 > 2) i = 8; else {
     c[p >> 2] = c[o >> 2];
     c[r >> 2] = c[q >> 2];
     c[o >> 2] = 2;
     g = 2;
     i = 16;
    }
   } else i = 8;
   do if ((i | 0) == 8) {
    i = 0;
    k = c[I >> 2] | 0;
    h = ((d[(c[G >> 2] | 0) + (k + 2) >> 0] | 0) ^ c[x >> 2] << c[B >> 2]) & c[C >> 2];
    c[x >> 2] = h;
    h = (c[D >> 2] | 0) + (h << 1) | 0;
    l = b[h >> 1] | 0;
    b[(c[F >> 2] | 0) + ((c[E >> 2] & k) << 1) >> 1] = l;
    g = l & 65535;
    b[h >> 1] = k;
    h = c[o >> 2] | 0;
    c[p >> 2] = h;
    c[r >> 2] = c[q >> 2];
    c[o >> 2] = 2;
    if (!(l << 16 >> 16)) {
     g = 2;
     i = 16;
    } else if (h >>> 0 < (c[y >> 2] | 0) >>> 0) if (((c[I >> 2] | 0) - g | 0) >>> 0 > ((c[z >> 2] | 0) + -262 | 0) >>> 0) {
     g = 2;
     i = 16;
    } else {
     g = Ha(e, g) | 0;
     c[o >> 2] = g;
     if (g >>> 0 < 6) {
      if ((c[A >> 2] | 0) != 1) {
       if ((g | 0) != 3) {
        i = 16;
        break;
       }
       if (((c[I >> 2] | 0) - (c[q >> 2] | 0) | 0) >>> 0 <= 4096) {
        g = 3;
        i = 16;
        break;
       }
      }
      c[o >> 2] = 2;
      g = 2;
      i = 16;
     } else i = 16;
    } else g = 2;
   } while (0);
   if ((i | 0) == 16) h = c[p >> 2] | 0;
   if (!(h >>> 0 < 3 | g >>> 0 > h >>> 0)) {
    g = h;
    break;
   }
   if (!(c[w >> 2] | 0)) {
    c[w >> 2] = 1;
    c[I >> 2] = (c[I >> 2] | 0) + 1;
    g = (c[m >> 2] | 0) + -1 | 0;
    c[m >> 2] = g;
    continue;
   }
   l = a[(c[G >> 2] | 0) + ((c[I >> 2] | 0) + -1) >> 0] | 0;
   k = c[s >> 2] | 0;
   b[(c[t >> 2] | 0) + (k << 1) >> 1] = 0;
   c[s >> 2] = k + 1;
   a[(c[u >> 2] | 0) + k >> 0] = l;
   l = e + 148 + ((l & 255) << 2) | 0;
   b[l >> 1] = (b[l >> 1] | 0) + 1 << 16 >> 16;
   if ((c[s >> 2] | 0) == ((c[v >> 2] | 0) + -1 | 0)) {
    g = c[H >> 2] | 0;
    if ((g | 0) > -1) h = (c[G >> 2] | 0) + g | 0; else h = 0;
    Pa(e, h, (c[I >> 2] | 0) - g | 0, 0);
    c[H >> 2] = c[I >> 2];
    j = c[e >> 2] | 0;
    g = j + 28 | 0;
    h = c[g >> 2] | 0;
    i = c[h + 20 >> 2] | 0;
    k = j + 16 | 0;
    l = c[k >> 2] | 0;
    i = i >>> 0 > l >>> 0 ? l : i;
    if (i | 0) {
     l = j + 12 | 0;
     Ob(c[l >> 2] | 0, c[h + 16 >> 2] | 0, i | 0) | 0;
     c[l >> 2] = (c[l >> 2] | 0) + i;
     g = c[g >> 2] | 0;
     h = g + 16 | 0;
     c[h >> 2] = (c[h >> 2] | 0) + i;
     l = j + 20 | 0;
     c[l >> 2] = (c[l >> 2] | 0) + i;
     c[k >> 2] = (c[k >> 2] | 0) - i;
     k = g + 20 | 0;
     l = c[k >> 2] | 0;
     c[k >> 2] = l - i;
     if ((l | 0) == (i | 0)) c[h >> 2] = c[g + 8 >> 2];
    }
   }
   c[I >> 2] = (c[I >> 2] | 0) + 1;
   g = (c[m >> 2] | 0) + -1 | 0;
   c[m >> 2] = g;
   if (!(c[(c[e >> 2] | 0) + 16 >> 2] | 0)) {
    g = 0;
    i = 48;
    break a;
   }
  }
  k = c[I >> 2] | 0;
  j = k + -3 + (c[m >> 2] | 0) | 0;
  l = g + 253 | 0;
  k = k + 65535 - (c[r >> 2] | 0) | 0;
  i = c[s >> 2] | 0;
  b[(c[t >> 2] | 0) + (i << 1) >> 1] = k;
  c[s >> 2] = i + 1;
  a[(c[u >> 2] | 0) + i >> 0] = l;
  l = e + 148 + ((d[14467 + (l & 255) >> 0] | 0 | 256) + 1 << 2) | 0;
  b[l >> 1] = (b[l >> 1] | 0) + 1 << 16 >> 16;
  k = k + 65535 & 65535;
  k = e + 2440 + ((d[13955 + (k >>> 0 < 256 ? k : (k >>> 7) + 256 | 0) >> 0] | 0) << 2) | 0;
  b[k >> 1] = (b[k >> 1] | 0) + 1 << 16 >> 16;
  k = c[s >> 2] | 0;
  l = (c[v >> 2] | 0) + -1 | 0;
  i = c[p >> 2] | 0;
  c[m >> 2] = 1 - i + (c[m >> 2] | 0);
  i = i + -2 | 0;
  c[p >> 2] = i;
  g = c[I >> 2] | 0;
  while (1) {
   h = g + 1 | 0;
   c[I >> 2] = h;
   if (h >>> 0 <= j >>> 0) {
    J = ((d[(c[G >> 2] | 0) + (g + 3) >> 0] | 0) ^ c[x >> 2] << c[B >> 2]) & c[C >> 2];
    c[x >> 2] = J;
    J = (c[D >> 2] | 0) + (J << 1) | 0;
    b[(c[F >> 2] | 0) + ((c[E >> 2] & h) << 1) >> 1] = b[J >> 1] | 0;
    b[J >> 1] = h;
   }
   i = i + -1 | 0;
   c[p >> 2] = i;
   if (!i) break; else g = h;
  }
  c[w >> 2] = 0;
  c[o >> 2] = 2;
  i = g + 2 | 0;
  c[I >> 2] = i;
  if ((k | 0) != (l | 0)) continue;
  g = c[H >> 2] | 0;
  if ((g | 0) > -1) h = (c[G >> 2] | 0) + g | 0; else h = 0;
  Pa(e, h, i - g | 0, 0);
  c[H >> 2] = c[I >> 2];
  j = c[e >> 2] | 0;
  g = j + 28 | 0;
  h = c[g >> 2] | 0;
  i = c[h + 20 >> 2] | 0;
  k = j + 16 | 0;
  J = c[k >> 2] | 0;
  i = i >>> 0 > J >>> 0 ? J : i;
  if (i | 0) {
   l = j + 12 | 0;
   Ob(c[l >> 2] | 0, c[h + 16 >> 2] | 0, i | 0) | 0;
   c[l >> 2] = (c[l >> 2] | 0) + i;
   g = c[g >> 2] | 0;
   h = g + 16 | 0;
   c[h >> 2] = (c[h >> 2] | 0) + i;
   l = j + 20 | 0;
   c[l >> 2] = (c[l >> 2] | 0) + i;
   c[k >> 2] = (c[k >> 2] | 0) - i;
   l = g + 20 | 0;
   J = c[l >> 2] | 0;
   c[l >> 2] = J - i;
   if ((J | 0) == (i | 0)) c[h >> 2] = c[g + 8 >> 2];
  }
  if (!(c[(c[e >> 2] | 0) + 16 >> 2] | 0)) {
   g = 0;
   i = 48;
   break;
  }
 }
 if ((i | 0) == 38) {
  if (c[w >> 2] | 0) {
   J = a[(c[G >> 2] | 0) + ((c[I >> 2] | 0) + -1) >> 0] | 0;
   F = c[s >> 2] | 0;
   b[(c[t >> 2] | 0) + (F << 1) >> 1] = 0;
   c[s >> 2] = F + 1;
   a[(c[u >> 2] | 0) + F >> 0] = J;
   J = e + 148 + ((J & 255) << 2) | 0;
   b[J >> 1] = (b[J >> 1] | 0) + 1 << 16 >> 16;
   c[w >> 2] = 0;
  }
  h = c[H >> 2] | 0;
  if ((h | 0) > -1) g = (c[G >> 2] | 0) + h | 0; else g = 0;
  l = (f | 0) == 4;
  Pa(e, g, (c[I >> 2] | 0) - h | 0, l & 1);
  c[H >> 2] = c[I >> 2];
  j = c[e >> 2] | 0;
  g = j + 28 | 0;
  h = c[g >> 2] | 0;
  i = c[h + 20 >> 2] | 0;
  k = j + 16 | 0;
  J = c[k >> 2] | 0;
  i = i >>> 0 > J >>> 0 ? J : i;
  if (i | 0) {
   I = j + 12 | 0;
   Ob(c[I >> 2] | 0, c[h + 16 >> 2] | 0, i | 0) | 0;
   c[I >> 2] = (c[I >> 2] | 0) + i;
   g = c[g >> 2] | 0;
   h = g + 16 | 0;
   c[h >> 2] = (c[h >> 2] | 0) + i;
   I = j + 20 | 0;
   c[I >> 2] = (c[I >> 2] | 0) + i;
   c[k >> 2] = (c[k >> 2] | 0) - i;
   I = g + 20 | 0;
   J = c[I >> 2] | 0;
   c[I >> 2] = J - i;
   if ((J | 0) == (i | 0)) c[h >> 2] = c[g + 8 >> 2];
  }
  if (!(c[(c[e >> 2] | 0) + 16 >> 2] | 0)) {
   J = l ? 2 : 0;
   return J | 0;
  } else {
   J = l ? 3 : 1;
   return J | 0;
  }
 } else if ((i | 0) == 48) return g | 0;
 return 0;
}

function cb(e, f) {
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 D = c[e + 28 >> 2] | 0;
 i = (c[e >> 2] | 0) + -1 | 0;
 I = e + 4 | 0;
 J = i + ((c[I >> 2] | 0) + -5) | 0;
 K = e + 12 | 0;
 p = (c[K >> 2] | 0) + -1 | 0;
 E = e + 16 | 0;
 q = c[E >> 2] | 0;
 F = p + (q + -257) | 0;
 w = c[D + 40 >> 2] | 0;
 x = c[D + 44 >> 2] | 0;
 y = c[D + 48 >> 2] | 0;
 G = D + 56 | 0;
 H = D + 60 | 0;
 z = c[D + 76 >> 2] | 0;
 A = c[D + 80 >> 2] | 0;
 B = (1 << c[D + 84 >> 2]) + -1 | 0;
 C = (1 << c[D + 88 >> 2]) + -1 | 0;
 q = p + (q - f) | 0;
 r = D + 7104 | 0;
 s = (c[D + 52 >> 2] | 0) + -1 | 0;
 t = (y | 0) == 0;
 u = y + w | 0;
 v = q - y | 0;
 g = c[H >> 2] | 0;
 h = c[G >> 2] | 0;
 f = p;
 a : do {
  if (g >>> 0 < 15) {
   p = i + 2 | 0;
   j = g + 16 | 0;
   h = ((d[i + 1 >> 0] | 0) << g) + h + ((d[p >> 0] | 0) << g + 8) | 0;
   i = p;
  } else j = g;
  g = h & B;
  l = a[z + (g << 2) >> 0] | 0;
  k = b[z + (g << 2) + 2 >> 1] | 0;
  g = d[z + (g << 2) + 1 >> 0] | 0;
  h = h >>> g;
  g = j - g | 0;
  do if (!(l << 24 >> 24)) {
   j = k & 255;
   L = 7;
  } else {
   j = l & 255;
   while (1) {
    if (j & 16 | 0) break;
    if (j & 64 | 0) {
     L = 55;
     break a;
    }
    p = (h & (1 << j) + -1) + (k & 65535) | 0;
    j = a[z + (p << 2) >> 0] | 0;
    k = b[z + (p << 2) + 2 >> 1] | 0;
    p = d[z + (p << 2) + 1 >> 0] | 0;
    h = h >>> p;
    g = g - p | 0;
    if (!(j << 24 >> 24)) {
     L = 6;
     break;
    } else j = j & 255;
   }
   if ((L | 0) == 6) {
    j = k & 255;
    L = 7;
    break;
   }
   k = k & 65535;
   l = j & 15;
   if (!l) j = h; else {
    if (g >>> 0 < l >>> 0) {
     i = i + 1 | 0;
     j = g + 8 | 0;
     h = ((d[i >> 0] | 0) << g) + h | 0;
    } else j = g;
    g = j - l | 0;
    j = h >>> l;
    k = (h & (1 << l) + -1) + k | 0;
   }
   if (g >>> 0 < 15) {
    p = i + 2 | 0;
    l = g + 16 | 0;
    g = ((d[i + 1 >> 0] | 0) << g) + j + ((d[p >> 0] | 0) << g + 8) | 0;
    i = p;
   } else {
    l = g;
    g = j;
   }
   p = g & C;
   j = b[A + (p << 2) + 2 >> 1] | 0;
   o = d[A + (p << 2) + 1 >> 0] | 0;
   h = g >>> o;
   g = l - o | 0;
   l = d[A + (p << 2) >> 0] | 0;
   if (!(l & 16)) do {
    if (l & 64 | 0) {
     L = 52;
     break a;
    }
    l = (h & (1 << l) + -1) + (j & 65535) | 0;
    j = b[A + (l << 2) + 2 >> 1] | 0;
    p = d[A + (l << 2) + 1 >> 0] | 0;
    h = h >>> p;
    g = g - p | 0;
    l = d[A + (l << 2) >> 0] | 0;
   } while ((l & 16 | 0) == 0);
   m = j & 65535;
   n = l & 15;
   if (g >>> 0 < n >>> 0) {
    l = i + 1 | 0;
    h = ((d[l >> 0] | 0) << g) + h | 0;
    j = g + 8 | 0;
    if (j >>> 0 < n >>> 0) {
     i = i + 2 | 0;
     g = g + 16 | 0;
     h = ((d[i >> 0] | 0) << j) + h | 0;
    } else {
     g = j;
     i = l;
    }
   }
   p = (h & (1 << n) + -1) + m | 0;
   h = h >>> n;
   g = g - n | 0;
   m = f;
   j = m - q | 0;
   if (p >>> 0 <= j >>> 0) {
    m = f + (0 - p) | 0;
    j = f;
    while (1) {
     a[j + 1 >> 0] = a[m + 1 >> 0] | 0;
     a[j + 2 >> 0] = a[m + 2 >> 0] | 0;
     l = m + 3 | 0;
     f = j + 3 | 0;
     a[f >> 0] = a[l >> 0] | 0;
     k = k + -3 | 0;
     if (k >>> 0 > 2) {
      m = l;
      j = f;
     } else {
      l = m;
      break;
     }
    }
    if (!k) break;
    f = j + 4 | 0;
    a[f >> 0] = a[l + 4 >> 0] | 0;
    if (k >>> 0 <= 1) break;
    f = j + 5 | 0;
    a[f >> 0] = a[l + 5 >> 0] | 0;
    break;
   }
   l = p - j | 0;
   if (l >>> 0 > x >>> 0) if (c[r >> 2] | 0) {
    L = 22;
    break a;
   }
   do if (t) {
    j = s + (w - l) | 0;
    if (k >>> 0 > l >>> 0) {
     k = k - l | 0;
     n = p - m | 0;
     m = f;
     do {
      j = j + 1 | 0;
      m = m + 1 | 0;
      a[m >> 0] = a[j >> 0] | 0;
      l = l + -1 | 0;
     } while ((l | 0) != 0);
     f = f + q + n | 0;
     j = f + (0 - p) | 0;
    }
   } else {
    if (y >>> 0 >= l >>> 0) {
     j = s + (y - l) | 0;
     if (k >>> 0 <= l >>> 0) break;
     k = k - l | 0;
     n = p - m | 0;
     m = f;
     do {
      j = j + 1 | 0;
      m = m + 1 | 0;
      a[m >> 0] = a[j >> 0] | 0;
      l = l + -1 | 0;
     } while ((l | 0) != 0);
     f = f + q + n | 0;
     j = f + (0 - p) | 0;
     break;
    }
    j = s + (u - l) | 0;
    l = l - y | 0;
    if (k >>> 0 > l >>> 0) {
     k = k - l | 0;
     o = p - m | 0;
     m = f;
     do {
      j = j + 1 | 0;
      m = m + 1 | 0;
      a[m >> 0] = a[j >> 0] | 0;
      l = l + -1 | 0;
     } while ((l | 0) != 0);
     n = f + v + o | 0;
     if (k >>> 0 > y >>> 0) {
      k = k - y | 0;
      l = s;
      m = y;
      j = n;
      do {
       l = l + 1 | 0;
       j = j + 1 | 0;
       a[j >> 0] = a[l >> 0] | 0;
       m = m + -1 | 0;
      } while ((m | 0) != 0);
      f = f + q + o | 0;
      j = f + (0 - p) | 0;
     } else {
      j = s;
      f = n;
     }
    }
   } while (0);
   if (k >>> 0 > 2) do {
    a[f + 1 >> 0] = a[j + 1 >> 0] | 0;
    a[f + 2 >> 0] = a[j + 2 >> 0] | 0;
    j = j + 3 | 0;
    f = f + 3 | 0;
    a[f >> 0] = a[j >> 0] | 0;
    k = k + -3 | 0;
   } while (k >>> 0 > 2);
   if (k) {
    l = f + 1 | 0;
    a[l >> 0] = a[j + 1 >> 0] | 0;
    if (k >>> 0 > 1) {
     f = f + 2 | 0;
     a[f >> 0] = a[j + 2 >> 0] | 0;
    } else f = l;
   }
  } while (0);
  if ((L | 0) == 7) {
   L = 0;
   f = f + 1 | 0;
   a[f >> 0] = j;
  }
 } while (f >>> 0 < F >>> 0 & i >>> 0 < J >>> 0);
 do if ((L | 0) == 22) {
  c[e + 24 >> 2] = 15245;
  c[D >> 2] = 29;
 } else if ((L | 0) == 52) {
  c[e + 24 >> 2] = 15275;
  c[D >> 2] = 29;
 } else if ((L | 0) == 55) if (!(j & 32)) {
  c[e + 24 >> 2] = 15297;
  c[D >> 2] = 29;
  break;
 } else {
  c[D >> 2] = 11;
  break;
 } while (0);
 L = g >>> 3;
 D = i + (0 - L) | 0;
 L = g - (L << 3) | 0;
 c[e >> 2] = D + 1;
 c[K >> 2] = f + 1;
 c[I >> 2] = J + 5 - D;
 c[E >> 2] = F + 257 - f;
 c[G >> 2] = (1 << L) + -1 & h;
 c[H >> 2] = L;
 return;
}

function Sa(d, f, g) {
 d = d | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = b[f + 2 >> 1] | 0;
 o = D << 16 >> 16 == 0;
 x = d + 2754 | 0;
 y = d + 5820 | 0;
 z = d + 2752 | 0;
 A = d + 5816 | 0;
 B = d + 20 | 0;
 C = d + 8 | 0;
 t = d + 2758 | 0;
 u = d + 2756 | 0;
 v = d + 2750 | 0;
 w = d + 2748 | 0;
 m = o ? 138 : 7;
 o = o ? 3 : 4;
 h = 0;
 D = D & 65535;
 p = -1;
 a : while (1) {
  n = 0;
  while (1) {
   if ((h | 0) > (g | 0)) break a;
   h = h + 1 | 0;
   i = b[f + (h << 2) + 2 >> 1] | 0;
   j = i & 65535;
   k = n + 1 | 0;
   l = (D | 0) == (j | 0);
   if ((k | 0) < (m | 0) & l) n = k; else {
    r = i;
    s = j;
    q = l;
    break;
   }
  }
  do if ((k | 0) < (o | 0)) {
   o = d + 2684 + (D << 2) + 2 | 0;
   p = d + 2684 + (D << 2) | 0;
   i = c[y >> 2] | 0;
   j = b[A >> 1] | 0;
   do {
    n = e[o >> 1] | 0;
    m = e[p >> 1] | 0;
    l = j & 65535 | m << i;
    j = l & 65535;
    b[A >> 1] = j;
    if ((i | 0) > (16 - n | 0)) {
     j = c[B >> 2] | 0;
     c[B >> 2] = j + 1;
     a[(c[C >> 2] | 0) + j >> 0] = l;
     j = (e[A >> 1] | 0) >>> 8 & 255;
     i = c[B >> 2] | 0;
     c[B >> 2] = i + 1;
     a[(c[C >> 2] | 0) + i >> 0] = j;
     i = c[y >> 2] | 0;
     j = m >>> (16 - i | 0) & 65535;
     b[A >> 1] = j;
     i = n + -16 + i | 0;
    } else i = i + n | 0;
    c[y >> 2] = i;
    k = k + -1 | 0;
   } while ((k | 0) != 0);
  } else {
   if (D | 0) {
    if ((D | 0) == (p | 0)) {
     j = b[A >> 1] | 0;
     m = c[y >> 2] | 0;
     n = k;
    } else {
     l = e[d + 2684 + (D << 2) + 2 >> 1] | 0;
     m = c[y >> 2] | 0;
     i = e[d + 2684 + (D << 2) >> 1] | 0;
     k = e[A >> 1] | 0 | i << m;
     j = k & 65535;
     b[A >> 1] = j;
     if ((m | 0) > (16 - l | 0)) {
      j = c[B >> 2] | 0;
      c[B >> 2] = j + 1;
      a[(c[C >> 2] | 0) + j >> 0] = k;
      j = (e[A >> 1] | 0) >>> 8 & 255;
      p = c[B >> 2] | 0;
      c[B >> 2] = p + 1;
      a[(c[C >> 2] | 0) + p >> 0] = j;
      p = c[y >> 2] | 0;
      j = i >>> (16 - p | 0) & 65535;
      b[A >> 1] = j;
      i = l + -16 + p | 0;
     } else i = m + l | 0;
     c[y >> 2] = i;
     m = i;
    }
    k = e[v >> 1] | 0;
    l = e[w >> 1] | 0;
    i = j & 65535 | l << m;
    b[A >> 1] = i;
    if ((m | 0) > (16 - k | 0)) {
     p = c[B >> 2] | 0;
     c[B >> 2] = p + 1;
     a[(c[C >> 2] | 0) + p >> 0] = i;
     i = (e[A >> 1] | 0) >>> 8 & 255;
     p = c[B >> 2] | 0;
     c[B >> 2] = p + 1;
     a[(c[C >> 2] | 0) + p >> 0] = i;
     p = c[y >> 2] | 0;
     i = l >>> (16 - p | 0);
     b[A >> 1] = i;
     k = k + -16 + p | 0;
    } else k = m + k | 0;
    c[y >> 2] = k;
    j = n + 65533 & 65535;
    i = i & 65535 | j << k;
    b[A >> 1] = i;
    if ((k | 0) > 14) {
     p = c[B >> 2] | 0;
     c[B >> 2] = p + 1;
     a[(c[C >> 2] | 0) + p >> 0] = i;
     p = (e[A >> 1] | 0) >>> 8 & 255;
     i = c[B >> 2] | 0;
     c[B >> 2] = i + 1;
     a[(c[C >> 2] | 0) + i >> 0] = p;
     i = c[y >> 2] | 0;
     b[A >> 1] = j >>> (16 - i | 0);
     i = i + -14 | 0;
    } else i = k + 2 | 0;
    c[y >> 2] = i;
    break;
   }
   if ((k | 0) < 11) {
    j = e[x >> 1] | 0;
    k = c[y >> 2] | 0;
    l = e[z >> 1] | 0;
    i = e[A >> 1] | 0 | l << k;
    b[A >> 1] = i;
    if ((k | 0) > (16 - j | 0)) {
     k = c[B >> 2] | 0;
     c[B >> 2] = k + 1;
     a[(c[C >> 2] | 0) + k >> 0] = i;
     i = (e[A >> 1] | 0) >>> 8 & 255;
     k = c[B >> 2] | 0;
     c[B >> 2] = k + 1;
     a[(c[C >> 2] | 0) + k >> 0] = i;
     k = c[y >> 2] | 0;
     i = l >>> (16 - k | 0);
     b[A >> 1] = i;
     k = j + -16 + k | 0;
    } else k = k + j | 0;
    c[y >> 2] = k;
    j = n + 65534 & 65535;
    i = i & 65535 | j << k;
    b[A >> 1] = i;
    if ((k | 0) > 13) {
     p = c[B >> 2] | 0;
     c[B >> 2] = p + 1;
     a[(c[C >> 2] | 0) + p >> 0] = i;
     p = (e[A >> 1] | 0) >>> 8 & 255;
     i = c[B >> 2] | 0;
     c[B >> 2] = i + 1;
     a[(c[C >> 2] | 0) + i >> 0] = p;
     i = c[y >> 2] | 0;
     b[A >> 1] = j >>> (16 - i | 0);
     i = i + -13 | 0;
    } else i = k + 3 | 0;
    c[y >> 2] = i;
    break;
   } else {
    j = e[t >> 1] | 0;
    k = c[y >> 2] | 0;
    l = e[u >> 1] | 0;
    i = e[A >> 1] | 0 | l << k;
    b[A >> 1] = i;
    if ((k | 0) > (16 - j | 0)) {
     k = c[B >> 2] | 0;
     c[B >> 2] = k + 1;
     a[(c[C >> 2] | 0) + k >> 0] = i;
     i = (e[A >> 1] | 0) >>> 8 & 255;
     k = c[B >> 2] | 0;
     c[B >> 2] = k + 1;
     a[(c[C >> 2] | 0) + k >> 0] = i;
     k = c[y >> 2] | 0;
     i = l >>> (16 - k | 0);
     b[A >> 1] = i;
     k = j + -16 + k | 0;
    } else k = k + j | 0;
    c[y >> 2] = k;
    j = n + 65526 & 65535;
    i = i & 65535 | j << k;
    b[A >> 1] = i;
    if ((k | 0) > 9) {
     p = c[B >> 2] | 0;
     c[B >> 2] = p + 1;
     a[(c[C >> 2] | 0) + p >> 0] = i;
     p = (e[A >> 1] | 0) >>> 8 & 255;
     i = c[B >> 2] | 0;
     c[B >> 2] = i + 1;
     a[(c[C >> 2] | 0) + i >> 0] = p;
     i = c[y >> 2] | 0;
     b[A >> 1] = j >>> (16 - i | 0);
     i = i + -9 | 0;
    } else i = k + 7 | 0;
    c[y >> 2] = i;
    break;
   }
  } while (0);
  o = r << 16 >> 16 == 0;
  p = D;
  m = o ? 138 : q ? 6 : 7;
  o = o | q ? 3 : 4;
  D = s;
 }
 return;
}

function Ga(e, f) {
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 r = e + 116 | 0;
 s = (f | 0) == 0;
 B = e + 72 | 0;
 C = e + 88 | 0;
 J = e + 108 | 0;
 H = e + 56 | 0;
 D = e + 84 | 0;
 E = e + 68 | 0;
 F = e + 52 | 0;
 G = e + 64 | 0;
 t = e + 44 | 0;
 u = e + 96 | 0;
 v = e + 112 | 0;
 w = e + 5792 | 0;
 x = e + 5796 | 0;
 y = e + 5784 | 0;
 z = e + 5788 | 0;
 A = e + 128 | 0;
 I = e + 92 | 0;
 while (1) {
  if ((c[r >> 2] | 0) >>> 0 < 262) {
   Fa(e);
   g = c[r >> 2] | 0;
   if (s & g >>> 0 < 262) {
    g = 0;
    i = 32;
    break;
   }
   if (!g) {
    i = 24;
    break;
   }
   if (g >>> 0 > 2) i = 6; else i = 9;
  } else i = 6;
  if ((i | 0) == 6) {
   i = 0;
   g = c[J >> 2] | 0;
   p = ((d[(c[H >> 2] | 0) + (g + 2) >> 0] | 0) ^ c[B >> 2] << c[C >> 2]) & c[D >> 2];
   c[B >> 2] = p;
   p = (c[E >> 2] | 0) + (p << 1) | 0;
   q = b[p >> 1] | 0;
   b[(c[G >> 2] | 0) + ((c[F >> 2] & g) << 1) >> 1] = q;
   h = q & 65535;
   b[p >> 1] = g;
   if (!(q << 16 >> 16)) i = 9; else if ((g - h | 0) >>> 0 > ((c[t >> 2] | 0) + -262 | 0) >>> 0) i = 9; else {
    g = Ha(e, h) | 0;
    c[u >> 2] = g;
   }
  }
  if ((i | 0) == 9) g = c[u >> 2] | 0;
  do if (g >>> 0 > 2) {
   g = g + 253 | 0;
   q = (c[J >> 2] | 0) - (c[v >> 2] | 0) | 0;
   p = c[w >> 2] | 0;
   b[(c[x >> 2] | 0) + (p << 1) >> 1] = q;
   c[w >> 2] = p + 1;
   a[(c[y >> 2] | 0) + p >> 0] = g;
   g = e + 148 + ((d[14467 + (g & 255) >> 0] | 0 | 256) + 1 << 2) | 0;
   b[g >> 1] = (b[g >> 1] | 0) + 1 << 16 >> 16;
   q = q + 65535 & 65535;
   q = e + 2440 + ((d[13955 + (q >>> 0 < 256 ? q : (q >>> 7) + 256 | 0) >> 0] | 0) << 2) | 0;
   b[q >> 1] = (b[q >> 1] | 0) + 1 << 16 >> 16;
   q = (c[w >> 2] | 0) == ((c[z >> 2] | 0) + -1 | 0) & 1;
   g = c[u >> 2] | 0;
   p = (c[r >> 2] | 0) - g | 0;
   c[r >> 2] = p;
   if (!(p >>> 0 > 2 ? g >>> 0 <= (c[A >> 2] | 0) >>> 0 : 0)) {
    i = (c[J >> 2] | 0) + g | 0;
    c[J >> 2] = i;
    c[u >> 2] = 0;
    p = c[H >> 2] | 0;
    g = d[p + i >> 0] | 0;
    c[B >> 2] = g;
    c[B >> 2] = ((d[p + (i + 1) >> 0] | 0) ^ g << c[C >> 2]) & c[D >> 2];
    g = q;
    break;
   }
   n = g + -1 | 0;
   c[u >> 2] = n;
   k = c[C >> 2] | 0;
   l = c[H >> 2] | 0;
   m = c[D >> 2] | 0;
   h = c[E >> 2] | 0;
   i = c[F >> 2] | 0;
   j = c[G >> 2] | 0;
   g = c[J >> 2] | 0;
   p = c[B >> 2] | 0;
   while (1) {
    o = g + 1 | 0;
    c[J >> 2] = o;
    p = ((d[l + (g + 3) >> 0] | 0) ^ p << k) & m;
    c[B >> 2] = p;
    K = h + (p << 1) | 0;
    b[j + ((i & o) << 1) >> 1] = b[K >> 1] | 0;
    b[K >> 1] = o;
    n = n + -1 | 0;
    c[u >> 2] = n;
    if (!n) break; else g = o;
   }
   i = g + 2 | 0;
   c[J >> 2] = i;
   g = q;
  } else {
   g = a[(c[H >> 2] | 0) + (c[J >> 2] | 0) >> 0] | 0;
   i = c[w >> 2] | 0;
   b[(c[x >> 2] | 0) + (i << 1) >> 1] = 0;
   c[w >> 2] = i + 1;
   a[(c[y >> 2] | 0) + i >> 0] = g;
   g = e + 148 + ((g & 255) << 2) | 0;
   b[g >> 1] = (b[g >> 1] | 0) + 1 << 16 >> 16;
   g = (c[w >> 2] | 0) == ((c[z >> 2] | 0) + -1 | 0) & 1;
   c[r >> 2] = (c[r >> 2] | 0) + -1;
   i = (c[J >> 2] | 0) + 1 | 0;
   c[J >> 2] = i;
  } while (0);
  if (!g) continue;
  g = c[I >> 2] | 0;
  if ((g | 0) > -1) h = (c[H >> 2] | 0) + g | 0; else h = 0;
  Pa(e, h, i - g | 0, 0);
  c[I >> 2] = c[J >> 2];
  j = c[e >> 2] | 0;
  g = j + 28 | 0;
  h = c[g >> 2] | 0;
  i = c[h + 20 >> 2] | 0;
  k = j + 16 | 0;
  K = c[k >> 2] | 0;
  i = i >>> 0 > K >>> 0 ? K : i;
  if (i | 0) {
   q = j + 12 | 0;
   Ob(c[q >> 2] | 0, c[h + 16 >> 2] | 0, i | 0) | 0;
   c[q >> 2] = (c[q >> 2] | 0) + i;
   g = c[g >> 2] | 0;
   h = g + 16 | 0;
   c[h >> 2] = (c[h >> 2] | 0) + i;
   q = j + 20 | 0;
   c[q >> 2] = (c[q >> 2] | 0) + i;
   c[k >> 2] = (c[k >> 2] | 0) - i;
   q = g + 20 | 0;
   K = c[q >> 2] | 0;
   c[q >> 2] = K - i;
   if ((K | 0) == (i | 0)) c[h >> 2] = c[g + 8 >> 2];
  }
  if (!(c[(c[e >> 2] | 0) + 16 >> 2] | 0)) {
   g = 0;
   i = 32;
   break;
  }
 }
 if ((i | 0) == 24) {
  h = c[I >> 2] | 0;
  if ((h | 0) > -1) g = (c[H >> 2] | 0) + h | 0; else g = 0;
  l = (f | 0) == 4;
  Pa(e, g, (c[J >> 2] | 0) - h | 0, l & 1);
  c[I >> 2] = c[J >> 2];
  j = c[e >> 2] | 0;
  g = j + 28 | 0;
  h = c[g >> 2] | 0;
  i = c[h + 20 >> 2] | 0;
  k = j + 16 | 0;
  K = c[k >> 2] | 0;
  i = i >>> 0 > K >>> 0 ? K : i;
  if (i | 0) {
   J = j + 12 | 0;
   Ob(c[J >> 2] | 0, c[h + 16 >> 2] | 0, i | 0) | 0;
   c[J >> 2] = (c[J >> 2] | 0) + i;
   g = c[g >> 2] | 0;
   h = g + 16 | 0;
   c[h >> 2] = (c[h >> 2] | 0) + i;
   J = j + 20 | 0;
   c[J >> 2] = (c[J >> 2] | 0) + i;
   c[k >> 2] = (c[k >> 2] | 0) - i;
   J = g + 20 | 0;
   K = c[J >> 2] | 0;
   c[J >> 2] = K - i;
   if ((K | 0) == (i | 0)) c[h >> 2] = c[g + 8 >> 2];
  }
  if (!(c[(c[e >> 2] | 0) + 16 >> 2] | 0)) {
   K = l ? 2 : 0;
   return K | 0;
  } else {
   K = l ? 3 : 1;
   return K | 0;
  }
 } else if ((i | 0) == 32) return g | 0;
 return 0;
}

function Ra(f, g, h) {
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 s = f + 5792 | 0;
 if (!(c[s >> 2] | 0)) {
  m = f + 5820 | 0;
  i = f + 5816 | 0;
  o = i;
  n = m;
  m = c[m >> 2] | 0;
  i = b[i >> 1] | 0;
 } else {
  t = f + 5796 | 0;
  u = f + 5784 | 0;
  n = f + 5820 | 0;
  o = f + 5816 | 0;
  v = f + 20 | 0;
  w = f + 8 | 0;
  x = 0;
  do {
   p = b[(c[t >> 2] | 0) + (x << 1) >> 1] | 0;
   r = p & 65535;
   q = d[(c[u >> 2] | 0) + x >> 0] | 0;
   x = x + 1 | 0;
   if (!(p << 16 >> 16)) {
    l = e[g + (q << 2) + 2 >> 1] | 0;
    m = c[n >> 2] | 0;
    j = e[g + (q << 2) >> 1] | 0;
    k = e[o >> 1] | 0 | j << m;
    i = k & 65535;
    b[o >> 1] = i;
    if ((m | 0) > (16 - l | 0)) {
     i = c[v >> 2] | 0;
     c[v >> 2] = i + 1;
     a[(c[w >> 2] | 0) + i >> 0] = k;
     i = (e[o >> 1] | 0) >>> 8 & 255;
     m = c[v >> 2] | 0;
     c[v >> 2] = m + 1;
     a[(c[w >> 2] | 0) + m >> 0] = i;
     m = c[n >> 2] | 0;
     i = j >>> (16 - m | 0) & 65535;
     b[o >> 1] = i;
     m = l + -16 + m | 0;
    } else m = m + l | 0;
    c[n >> 2] = m;
   } else {
    p = d[14467 + q >> 0] | 0;
    i = (p | 256) + 1 | 0;
    l = e[g + (i << 2) + 2 >> 1] | 0;
    m = c[n >> 2] | 0;
    i = e[g + (i << 2) >> 1] | 0;
    k = e[o >> 1] | 0 | i << m;
    j = k & 65535;
    b[o >> 1] = j;
    if ((m | 0) > (16 - l | 0)) {
     j = c[v >> 2] | 0;
     c[v >> 2] = j + 1;
     a[(c[w >> 2] | 0) + j >> 0] = k;
     j = (e[o >> 1] | 0) >>> 8 & 255;
     m = c[v >> 2] | 0;
     c[v >> 2] = m + 1;
     a[(c[w >> 2] | 0) + m >> 0] = j;
     m = c[n >> 2] | 0;
     j = i >>> (16 - m | 0) & 65535;
     b[o >> 1] = j;
     l = l + -16 + m | 0;
    } else l = m + l | 0;
    c[n >> 2] = l;
    m = c[1164 + (p << 2) >> 2] | 0;
    if ((p + -8 | 0) >>> 0 < 20) {
     k = q - (c[1516 + (p << 2) >> 2] | 0) & 65535;
     i = k << l | j & 65535;
     j = i & 65535;
     b[o >> 1] = j;
     if ((l | 0) > (16 - m | 0)) {
      j = c[v >> 2] | 0;
      c[v >> 2] = j + 1;
      a[(c[w >> 2] | 0) + j >> 0] = i;
      j = (e[o >> 1] | 0) >>> 8 & 255;
      i = c[v >> 2] | 0;
      c[v >> 2] = i + 1;
      a[(c[w >> 2] | 0) + i >> 0] = j;
      i = c[n >> 2] | 0;
      j = k >>> (16 - i | 0) & 65535;
      b[o >> 1] = j;
      i = m + -16 + i | 0;
     } else i = l + m | 0;
     c[n >> 2] = i;
     m = i;
    } else m = l;
    p = r + -1 | 0;
    q = d[13955 + (p >>> 0 < 256 ? p : (p >>> 7) + 256 | 0) >> 0] | 0;
    k = e[h + (q << 2) + 2 >> 1] | 0;
    l = e[h + (q << 2) >> 1] | 0;
    j = j & 65535 | l << m;
    i = j & 65535;
    b[o >> 1] = i;
    if ((m | 0) > (16 - k | 0)) {
     i = c[v >> 2] | 0;
     c[v >> 2] = i + 1;
     a[(c[w >> 2] | 0) + i >> 0] = j;
     i = (e[o >> 1] | 0) >>> 8 & 255;
     m = c[v >> 2] | 0;
     c[v >> 2] = m + 1;
     a[(c[w >> 2] | 0) + m >> 0] = i;
     m = c[n >> 2] | 0;
     i = l >>> (16 - m | 0) & 65535;
     b[o >> 1] = i;
     m = k + -16 + m | 0;
    } else m = m + k | 0;
    c[n >> 2] = m;
    l = c[1300 + (q << 2) >> 2] | 0;
    if ((q + -4 | 0) >>> 0 < 26) {
     k = p - (c[1632 + (q << 2) >> 2] | 0) & 65535;
     j = k << m | i & 65535;
     i = j & 65535;
     b[o >> 1] = i;
     if ((m | 0) > (16 - l | 0)) {
      i = c[v >> 2] | 0;
      c[v >> 2] = i + 1;
      a[(c[w >> 2] | 0) + i >> 0] = j;
      i = (e[o >> 1] | 0) >>> 8 & 255;
      m = c[v >> 2] | 0;
      c[v >> 2] = m + 1;
      a[(c[w >> 2] | 0) + m >> 0] = i;
      m = c[n >> 2] | 0;
      i = k >>> (16 - m | 0) & 65535;
      b[o >> 1] = i;
      m = l + -16 + m | 0;
     } else m = m + l | 0;
     c[n >> 2] = m;
    }
   }
  } while (x >>> 0 < (c[s >> 2] | 0) >>> 0);
 }
 k = g + 1026 | 0;
 l = e[k >> 1] | 0;
 j = e[g + 1024 >> 1] | 0;
 i = i & 65535 | j << m;
 b[o >> 1] = i;
 if ((m | 0) > (16 - l | 0)) {
  w = f + 20 | 0;
  h = c[w >> 2] | 0;
  c[w >> 2] = h + 1;
  x = f + 8 | 0;
  a[(c[x >> 2] | 0) + h >> 0] = i;
  h = (e[o >> 1] | 0) >>> 8 & 255;
  g = c[w >> 2] | 0;
  c[w >> 2] = g + 1;
  a[(c[x >> 2] | 0) + g >> 0] = h;
  g = c[n >> 2] | 0;
  b[o >> 1] = j >>> (16 - g | 0);
  g = l + -16 + g | 0;
  c[n >> 2] = g;
  g = b[k >> 1] | 0;
  g = g & 65535;
  f = f + 5812 | 0;
  c[f >> 2] = g;
  return;
 } else {
  g = m + l | 0;
  c[n >> 2] = g;
  g = b[k >> 1] | 0;
  g = g & 65535;
  f = f + 5812 | 0;
  c[f >> 2] = g;
  return;
 }
}

function Pb(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = a;
 j = b;
 k = j;
 h = d;
 n = e;
 i = n;
 if (!k) {
  g = (f | 0) != 0;
  if (!i) {
   if (g) {
    c[f >> 2] = (l >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (l >>> 0) / (h >>> 0) >>> 0;
   return (C = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
 }
 g = (i | 0) == 0;
 do if (!h) {
  if (g) {
   if (f | 0) {
    c[f >> 2] = (k >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (k >>> 0) / (h >>> 0) >>> 0;
   return (C = n, f) | 0;
  }
  if (!l) {
   if (f | 0) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   n = 0;
   f = (k >>> 0) / (i >>> 0) >>> 0;
   return (C = n, f) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f | 0) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   n = 0;
   f = k >>> ((da(i | 0) | 0) >>> 0);
   return (C = n, f) | 0;
  }
  g = (T(i | 0) | 0) - (T(k | 0) | 0) | 0;
  if (g >>> 0 <= 30) {
   b = g + 1 | 0;
   i = 31 - g | 0;
   h = b;
   a = k << i | l >>> (b >>> 0);
   b = k >>> (b >>> 0);
   g = 0;
   i = l << i;
   break;
  }
  if (!f) {
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  n = 0;
  f = 0;
  return (C = n, f) | 0;
 } else {
  if (!g) {
   g = (T(i | 0) | 0) - (T(k | 0) | 0) | 0;
   if (g >>> 0 <= 31) {
    m = g + 1 | 0;
    i = 31 - g | 0;
    b = g - 31 >> 31;
    h = m;
    a = l >>> (m >>> 0) & b | k << i;
    b = k >>> (m >>> 0) & b;
    g = 0;
    i = l << i;
    break;
   }
   if (!f) {
    n = 0;
    f = 0;
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h | 0) {
   i = (T(h | 0) | 0) + 33 - (T(k | 0) | 0) | 0;
   p = 64 - i | 0;
   m = 32 - i | 0;
   j = m >> 31;
   o = i - 32 | 0;
   b = o >> 31;
   h = i;
   a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;
   b = b & k >>> (i >>> 0);
   g = l << p & j;
   i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
   break;
  }
  if (f | 0) {
   c[f >> 2] = g & l;
   c[f + 4 >> 2] = 0;
  }
  if ((h | 0) == 1) {
   o = j | b & 0;
   p = a | 0 | 0;
   return (C = o, p) | 0;
  } else {
   p = da(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (C = o, p) | 0;
  }
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = Kb(m | 0, l | 0, -1, -1) | 0;
  d = C;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   Jb(k | 0, d | 0, e | 0, n | 0) | 0;
   p = C;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = Jb(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
   b = C;
   h = h - 1 | 0;
  } while ((h | 0) != 0);
  k = j;
  j = 0;
 }
 h = 0;
 if (f | 0) {
  c[f >> 2] = a;
  c[f + 4 >> 2] = b;
 }
 o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
 p = (g << 1 | 0 >>> 31) & -2 | i;
 return (C = o, p) | 0;
}

function Ea(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 i = (c[a + 12 >> 2] | 0) + -5 | 0;
 i = i >>> 0 < 65535 ? i : 65535;
 j = a + 116 | 0;
 m = a + 108 | 0;
 n = a + 92 | 0;
 k = a + 44 | 0;
 l = a + 56 | 0;
 while (1) {
  d = c[j >> 2] | 0;
  if (d >>> 0 < 2) {
   Fa(a);
   d = c[j >> 2] | 0;
   if (!(d | b)) {
    d = 0;
    e = 28;
    break;
   }
   if (!d) {
    e = 20;
    break;
   }
  }
  d = (c[m >> 2] | 0) + d | 0;
  c[m >> 2] = d;
  c[j >> 2] = 0;
  e = c[n >> 2] | 0;
  f = e + i | 0;
  if (!((d | 0) != 0 & d >>> 0 < f >>> 0)) {
   c[j >> 2] = d - f;
   c[m >> 2] = f;
   if ((e | 0) > -1) d = (c[l >> 2] | 0) + e | 0; else d = 0;
   Pa(a, d, i, 0);
   c[n >> 2] = c[m >> 2];
   g = c[a >> 2] | 0;
   d = g + 28 | 0;
   e = c[d >> 2] | 0;
   f = c[e + 20 >> 2] | 0;
   h = g + 16 | 0;
   o = c[h >> 2] | 0;
   f = f >>> 0 > o >>> 0 ? o : f;
   if (f | 0) {
    o = g + 12 | 0;
    Ob(c[o >> 2] | 0, c[e + 16 >> 2] | 0, f | 0) | 0;
    c[o >> 2] = (c[o >> 2] | 0) + f;
    d = c[d >> 2] | 0;
    e = d + 16 | 0;
    c[e >> 2] = (c[e >> 2] | 0) + f;
    o = g + 20 | 0;
    c[o >> 2] = (c[o >> 2] | 0) + f;
    c[h >> 2] = (c[h >> 2] | 0) - f;
    h = d + 20 | 0;
    o = c[h >> 2] | 0;
    c[h >> 2] = o - f;
    if ((o | 0) == (f | 0)) c[e >> 2] = c[d + 8 >> 2];
   }
   if (!(c[(c[a >> 2] | 0) + 16 >> 2] | 0)) {
    d = 0;
    e = 28;
    break;
   }
   e = c[n >> 2] | 0;
   d = c[m >> 2] | 0;
  }
  f = d - e | 0;
  if (f >>> 0 < ((c[k >> 2] | 0) + -262 | 0) >>> 0) continue;
  if ((e | 0) > -1) d = (c[l >> 2] | 0) + e | 0; else d = 0;
  Pa(a, d, f, 0);
  c[n >> 2] = c[m >> 2];
  g = c[a >> 2] | 0;
  d = g + 28 | 0;
  e = c[d >> 2] | 0;
  f = c[e + 20 >> 2] | 0;
  h = g + 16 | 0;
  o = c[h >> 2] | 0;
  f = f >>> 0 > o >>> 0 ? o : f;
  if (f | 0) {
   o = g + 12 | 0;
   Ob(c[o >> 2] | 0, c[e + 16 >> 2] | 0, f | 0) | 0;
   c[o >> 2] = (c[o >> 2] | 0) + f;
   d = c[d >> 2] | 0;
   e = d + 16 | 0;
   c[e >> 2] = (c[e >> 2] | 0) + f;
   o = g + 20 | 0;
   c[o >> 2] = (c[o >> 2] | 0) + f;
   c[h >> 2] = (c[h >> 2] | 0) - f;
   h = d + 20 | 0;
   o = c[h >> 2] | 0;
   c[h >> 2] = o - f;
   if ((o | 0) == (f | 0)) c[e >> 2] = c[d + 8 >> 2];
  }
  if (!(c[(c[a >> 2] | 0) + 16 >> 2] | 0)) {
   d = 0;
   e = 28;
   break;
  }
 }
 if ((e | 0) == 20) {
  e = c[n >> 2] | 0;
  if ((e | 0) > -1) d = (c[l >> 2] | 0) + e | 0; else d = 0;
  i = (b | 0) == 4;
  Pa(a, d, (c[m >> 2] | 0) - e | 0, i & 1);
  c[n >> 2] = c[m >> 2];
  g = c[a >> 2] | 0;
  d = g + 28 | 0;
  e = c[d >> 2] | 0;
  f = c[e + 20 >> 2] | 0;
  h = g + 16 | 0;
  o = c[h >> 2] | 0;
  f = f >>> 0 > o >>> 0 ? o : f;
  if (f | 0) {
   n = g + 12 | 0;
   Ob(c[n >> 2] | 0, c[e + 16 >> 2] | 0, f | 0) | 0;
   c[n >> 2] = (c[n >> 2] | 0) + f;
   d = c[d >> 2] | 0;
   e = d + 16 | 0;
   c[e >> 2] = (c[e >> 2] | 0) + f;
   n = g + 20 | 0;
   c[n >> 2] = (c[n >> 2] | 0) + f;
   c[h >> 2] = (c[h >> 2] | 0) - f;
   n = d + 20 | 0;
   o = c[n >> 2] | 0;
   c[n >> 2] = o - f;
   if ((o | 0) == (f | 0)) c[e >> 2] = c[d + 8 >> 2];
  }
  if (!(c[(c[a >> 2] | 0) + 16 >> 2] | 0)) {
   o = i ? 2 : 0;
   return o | 0;
  } else {
   o = i ? 3 : 1;
   return o | 0;
  }
 } else if ((e | 0) == 28) return d | 0;
 return 0;
}

function Wa(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 e = a >>> 16;
 a = a & 65535;
 if ((c | 0) == 1) {
  h = (d[b >> 0] | 0) + a | 0;
  h = h >>> 0 > 65520 ? h + -65521 | 0 : h;
  g = h + e | 0;
  h = (g >>> 0 > 65520 ? g + 15 | 0 : g) << 16 | h;
  return h | 0;
 }
 if (!b) {
  h = 1;
  return h | 0;
 }
 if (c >>> 0 < 16) {
  if (c) while (1) {
   c = c + -1 | 0;
   a = (d[b >> 0] | 0) + a | 0;
   e = a + e | 0;
   if (!c) break; else b = b + 1 | 0;
  }
  h = ((e >>> 0) % 65521 | 0) << 16 | (a >>> 0 > 65520 ? a + -65521 | 0 : a);
  return h | 0;
 }
 if (c >>> 0 > 5551) {
  do {
   c = c + -5552 | 0;
   g = b;
   f = 347;
   while (1) {
    w = (d[g >> 0] | 0) + a | 0;
    v = w + (d[g + 1 >> 0] | 0) | 0;
    u = v + (d[g + 2 >> 0] | 0) | 0;
    t = u + (d[g + 3 >> 0] | 0) | 0;
    s = t + (d[g + 4 >> 0] | 0) | 0;
    r = s + (d[g + 5 >> 0] | 0) | 0;
    q = r + (d[g + 6 >> 0] | 0) | 0;
    p = q + (d[g + 7 >> 0] | 0) | 0;
    o = p + (d[g + 8 >> 0] | 0) | 0;
    n = o + (d[g + 9 >> 0] | 0) | 0;
    m = n + (d[g + 10 >> 0] | 0) | 0;
    l = m + (d[g + 11 >> 0] | 0) | 0;
    k = l + (d[g + 12 >> 0] | 0) | 0;
    j = k + (d[g + 13 >> 0] | 0) | 0;
    i = j + (d[g + 14 >> 0] | 0) | 0;
    a = i + (d[g + 15 >> 0] | 0) | 0;
    e = w + e + v + u + t + s + r + q + p + o + n + m + l + k + j + i + a | 0;
    f = f + -1 | 0;
    if (!f) break; else g = g + 16 | 0;
   }
   b = b + 5552 | 0;
   a = (a >>> 0) % 65521 | 0;
   e = (e >>> 0) % 65521 | 0;
  } while (c >>> 0 > 5551);
  if (c) if (c >>> 0 > 15) h = 14; else h = 17;
 } else h = 14;
 if ((h | 0) == 14) {
  f = c + -16 | 0;
  g = f & -16;
  h = b + (g + 16) | 0;
  while (1) {
   c = c + -16 | 0;
   i = (d[b >> 0] | 0) + a | 0;
   j = i + (d[b + 1 >> 0] | 0) | 0;
   k = j + (d[b + 2 >> 0] | 0) | 0;
   l = k + (d[b + 3 >> 0] | 0) | 0;
   m = l + (d[b + 4 >> 0] | 0) | 0;
   n = m + (d[b + 5 >> 0] | 0) | 0;
   o = n + (d[b + 6 >> 0] | 0) | 0;
   p = o + (d[b + 7 >> 0] | 0) | 0;
   q = p + (d[b + 8 >> 0] | 0) | 0;
   r = q + (d[b + 9 >> 0] | 0) | 0;
   s = r + (d[b + 10 >> 0] | 0) | 0;
   t = s + (d[b + 11 >> 0] | 0) | 0;
   u = t + (d[b + 12 >> 0] | 0) | 0;
   v = u + (d[b + 13 >> 0] | 0) | 0;
   w = v + (d[b + 14 >> 0] | 0) | 0;
   a = w + (d[b + 15 >> 0] | 0) | 0;
   e = i + e + j + k + l + m + n + o + p + q + r + s + t + u + v + w + a | 0;
   if (c >>> 0 <= 15) break; else b = b + 16 | 0;
  }
  if ((f | 0) == (g | 0)) h = 18; else {
   c = f - g | 0;
   b = h;
   h = 17;
  }
 }
 if ((h | 0) == 17) while (1) {
  c = c + -1 | 0;
  a = (d[b >> 0] | 0) + a | 0;
  e = a + e | 0;
  if (!c) {
   h = 18;
   break;
  } else {
   b = b + 1 | 0;
   h = 17;
  }
 }
 if ((h | 0) == 18) {
  a = (a >>> 0) % 65521 | 0;
  e = (e >>> 0) % 65521 | 0;
 }
 w = e << 16 | a;
 return w | 0;
}

function Oa(d) {
 d = d | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 j = d + 5820 | 0;
 h = c[j >> 2] | 0;
 k = d + 5816 | 0;
 f = e[k >> 1] | 0 | 2 << h;
 g = f & 65535;
 b[k >> 1] = g;
 if ((h | 0) > 13) {
  h = d + 20 | 0;
  i = c[h >> 2] | 0;
  c[h >> 2] = i + 1;
  g = d + 8 | 0;
  a[(c[g >> 2] | 0) + i >> 0] = f;
  i = (e[k >> 1] | 0) >>> 8 & 255;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[(c[g >> 2] | 0) + f >> 0] = i;
  f = c[j >> 2] | 0;
  g = 2 >>> (16 - f | 0) & 65535;
  b[k >> 1] = g;
  f = f + -13 | 0;
 } else f = h + 3 | 0;
 c[j >> 2] = f;
 if ((f | 0) > 9) {
  h = d + 20 | 0;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  i = d + 8 | 0;
  a[(c[i >> 2] | 0) + f >> 0] = g;
  g = (e[k >> 1] | 0) >>> 8 & 255;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[(c[i >> 2] | 0) + f >> 0] = g;
  b[k >> 1] = 0;
  f = (c[j >> 2] | 0) + -9 | 0;
  g = 0;
 } else f = f + 7 | 0;
 c[j >> 2] = f;
 if ((f | 0) == 16) {
  h = d + 20 | 0;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  i = d + 8 | 0;
  a[(c[i >> 2] | 0) + f >> 0] = g;
  g = (e[k >> 1] | 0) >>> 8 & 255;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[(c[i >> 2] | 0) + f >> 0] = g;
  b[k >> 1] = 0;
  c[j >> 2] = 0;
  f = 0;
  g = 0;
 } else if ((f | 0) > 7) {
  i = d + 20 | 0;
  f = c[i >> 2] | 0;
  c[i >> 2] = f + 1;
  a[(c[d + 8 >> 2] | 0) + f >> 0] = g;
  g = (e[k >> 1] | 0) >>> 8;
  b[k >> 1] = g;
  f = (c[j >> 2] | 0) + -8 | 0;
  c[j >> 2] = f;
 }
 i = d + 5812 | 0;
 if ((11 - f + (c[i >> 2] | 0) | 0) >= 9) {
  c[i >> 2] = 7;
  return;
 }
 g = g & 65535 | 2 << f;
 b[k >> 1] = g;
 if ((f | 0) > 13) {
  l = d + 20 | 0;
  h = c[l >> 2] | 0;
  c[l >> 2] = h + 1;
  f = d + 8 | 0;
  a[(c[f >> 2] | 0) + h >> 0] = g;
  g = (e[k >> 1] | 0) >>> 8 & 255;
  h = c[l >> 2] | 0;
  c[l >> 2] = h + 1;
  a[(c[f >> 2] | 0) + h >> 0] = g;
  h = c[j >> 2] | 0;
  g = 2 >>> (16 - h | 0);
  b[k >> 1] = g;
  h = h + -13 | 0;
 } else h = f + 3 | 0;
 f = g & 255;
 c[j >> 2] = h;
 if ((h | 0) > 9) {
  h = d + 20 | 0;
  l = c[h >> 2] | 0;
  c[h >> 2] = l + 1;
  g = d + 8 | 0;
  a[(c[g >> 2] | 0) + l >> 0] = f;
  l = (e[k >> 1] | 0) >>> 8 & 255;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  a[(c[g >> 2] | 0) + f >> 0] = l;
  b[k >> 1] = 0;
  f = 0;
  g = (c[j >> 2] | 0) + -9 | 0;
 } else g = h + 7 | 0;
 c[j >> 2] = g;
 if ((g | 0) == 16) {
  g = d + 20 | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = h + 1;
  d = d + 8 | 0;
  a[(c[d >> 2] | 0) + h >> 0] = f;
  h = (e[k >> 1] | 0) >>> 8 & 255;
  l = c[g >> 2] | 0;
  c[g >> 2] = l + 1;
  a[(c[d >> 2] | 0) + l >> 0] = h;
  b[k >> 1] = 0;
  c[j >> 2] = 0;
  c[i >> 2] = 7;
  return;
 }
 if ((g | 0) <= 7) {
  c[i >> 2] = 7;
  return;
 }
 h = d + 20 | 0;
 l = c[h >> 2] | 0;
 c[h >> 2] = l + 1;
 a[(c[d + 8 >> 2] | 0) + l >> 0] = f;
 b[k >> 1] = (e[k >> 1] | 0) >>> 8;
 c[j >> 2] = (c[j >> 2] | 0) + -8;
 c[i >> 2] = 7;
 return;
}

function Fa(a) {
 a = a | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
 m = a + 44 | 0;
 n = c[m >> 2] | 0;
 z = a + 60 | 0;
 t = a + 116 | 0;
 A = a + 108 | 0;
 u = n + -262 | 0;
 B = a + 56 | 0;
 v = a + 72 | 0;
 w = a + 88 | 0;
 x = a + 84 | 0;
 o = a + 112 | 0;
 p = a + 92 | 0;
 q = a + 76 | 0;
 r = a + 68 | 0;
 s = a + 64 | 0;
 f = c[t >> 2] | 0;
 h = n;
 while (1) {
  g = c[A >> 2] | 0;
  i = (c[z >> 2] | 0) - f - g | 0;
  if (g >>> 0 < (u + h | 0) >>> 0) h = i; else {
   g = c[B >> 2] | 0;
   Ob(g | 0, g + n | 0, n | 0) | 0;
   c[o >> 2] = (c[o >> 2] | 0) - n;
   g = (c[A >> 2] | 0) - n | 0;
   c[A >> 2] = g;
   c[p >> 2] = (c[p >> 2] | 0) - n;
   h = c[q >> 2] | 0;
   f = h;
   h = (c[r >> 2] | 0) + (h << 1) | 0;
   do {
    h = h + -2 | 0;
    l = e[h >> 1] | 0;
    b[h >> 1] = l >>> 0 < n >>> 0 ? 0 : l - n & 65535;
    f = f + -1 | 0;
   } while ((f | 0) != 0);
   f = n;
   h = (c[s >> 2] | 0) + (n << 1) | 0;
   do {
    h = h + -2 | 0;
    l = e[h >> 1] | 0;
    b[h >> 1] = l >>> 0 < n >>> 0 ? 0 : l - n & 65535;
    f = f + -1 | 0;
   } while ((f | 0) != 0);
   h = i + n | 0;
  }
  l = c[a >> 2] | 0;
  i = l + 4 | 0;
  j = c[i >> 2] | 0;
  if (!j) {
   y = 24;
   break;
  }
  f = c[t >> 2] | 0;
  k = (c[B >> 2] | 0) + g + f | 0;
  g = j >>> 0 > h >>> 0 ? h : j;
  if (!g) g = 0; else {
   c[i >> 2] = j - g;
   switch (c[(c[l + 28 >> 2] | 0) + 24 >> 2] | 0) {
   case 1:
    {
     f = l + 48 | 0;
     c[f >> 2] = Wa(c[f >> 2] | 0, c[l >> 2] | 0, g) | 0;
     f = l;
     break;
    }
   case 2:
    {
     f = l + 48 | 0;
     c[f >> 2] = Xa(c[f >> 2] | 0, c[l >> 2] | 0, g) | 0;
     f = l;
     break;
    }
   default:
    f = l;
   }
   Ob(k | 0, c[f >> 2] | 0, g | 0) | 0;
   c[f >> 2] = (c[f >> 2] | 0) + g;
   f = l + 8 | 0;
   c[f >> 2] = (c[f >> 2] | 0) + g;
   f = c[t >> 2] | 0;
  }
  f = f + g | 0;
  c[t >> 2] = f;
  if (f >>> 0 > 2) {
   k = c[A >> 2] | 0;
   j = c[B >> 2] | 0;
   l = d[j + k >> 0] | 0;
   c[v >> 2] = l;
   c[v >> 2] = ((d[j + (k + 1) >> 0] | 0) ^ l << c[w >> 2]) & c[x >> 2];
   if (f >>> 0 >= 262) break;
  }
  if (!(c[(c[a >> 2] | 0) + 4 >> 2] | 0)) break;
  h = c[m >> 2] | 0;
 }
 if ((y | 0) == 24) return;
 h = a + 5824 | 0;
 i = c[h >> 2] | 0;
 g = c[z >> 2] | 0;
 if (g >>> 0 <= i >>> 0) return;
 f = f + (c[A >> 2] | 0) | 0;
 if (i >>> 0 < f >>> 0) {
  A = g - f | 0;
  A = A >>> 0 > 258 ? 258 : A;
  Lb((c[B >> 2] | 0) + f | 0, 0, A | 0) | 0;
  c[h >> 2] = A + f;
  return;
 }
 f = f + 258 | 0;
 if (f >>> 0 <= i >>> 0) return;
 A = f - i | 0;
 z = g - i | 0;
 A = A >>> 0 > z >>> 0 ? z : A;
 Lb((c[B >> 2] | 0) + i | 0, 0, A | 0) | 0;
 c[h >> 2] = (c[h >> 2] | 0) + A;
 return;
}

function Ca(b, d, e, f, g, h, i, j) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!i) {
  p = -6;
  return p | 0;
 }
 if ((j | 0) != 56 | (a[i >> 0] | 0) != 49) {
  p = -6;
  return p | 0;
 }
 if (!b) {
  p = -2;
  return p | 0;
 }
 m = b + 24 | 0;
 c[m >> 2] = 0;
 l = b + 32 | 0;
 j = c[l >> 2] | 0;
 if (!j) {
  c[l >> 2] = 3;
  c[b + 40 >> 2] = 0;
  j = 3;
 }
 p = b + 36 | 0;
 if (!(c[p >> 2] | 0)) c[p >> 2] = 1;
 k = (d | 0) == -1 ? 6 : d;
 if ((f | 0) < 0) {
  i = 0 - f | 0;
  d = 0;
 } else {
  d = (f | 0) > 15;
  i = d ? f + -16 | 0 : f;
  d = d ? 2 : 1;
 }
 if (h >>> 0 > 4 | (k >>> 0 > 9 | ((e | 0) != 8 | (g + -1 | 0) >>> 0 > 8 | (i & -8 | 0) != 8))) {
  p = -2;
  return p | 0;
 }
 i = (i | 0) == 8 ? 9 : i;
 o = b + 40 | 0;
 e = ma[j & 7](c[o >> 2] | 0, 1, 5828) | 0;
 if (!e) {
  p = -4;
  return p | 0;
 }
 n = b + 28 | 0;
 c[n >> 2] = e;
 c[e >> 2] = b;
 c[e + 24 >> 2] = d;
 c[e + 28 >> 2] = 0;
 c[e + 48 >> 2] = i;
 i = 1 << i;
 f = e + 44 | 0;
 c[f >> 2] = i;
 c[e + 52 >> 2] = i + -1;
 q = g + 7 | 0;
 c[e + 80 >> 2] = q;
 q = 1 << q;
 j = e + 76 | 0;
 c[j >> 2] = q;
 c[e + 84 >> 2] = q + -1;
 c[e + 88 >> 2] = ((g + 9 | 0) >>> 0) / 3 | 0;
 q = e + 56 | 0;
 c[q >> 2] = ma[c[l >> 2] & 7](c[o >> 2] | 0, i, 2) | 0;
 i = ma[c[l >> 2] & 7](c[o >> 2] | 0, c[f >> 2] | 0, 2) | 0;
 d = e + 64 | 0;
 c[d >> 2] = i;
 Lb(i | 0, 0, c[f >> 2] << 1 | 0) | 0;
 f = e + 68 | 0;
 c[f >> 2] = ma[c[l >> 2] & 7](c[o >> 2] | 0, c[j >> 2] | 0, 2) | 0;
 c[e + 5824 >> 2] = 0;
 j = 1 << g + 6;
 i = e + 5788 | 0;
 c[i >> 2] = j;
 j = ma[c[l >> 2] & 7](c[o >> 2] | 0, j, 4) | 0;
 c[e + 8 >> 2] = j;
 i = c[i >> 2] | 0;
 c[e + 12 >> 2] = i << 2;
 if (c[q >> 2] | 0) if (c[d >> 2] | 0) if (!((c[f >> 2] | 0) == 0 | (j | 0) == 0)) {
  c[e + 5796 >> 2] = j + (i >>> 1 << 1);
  c[e + 5784 >> 2] = j + (i * 3 | 0);
  c[e + 132 >> 2] = k;
  c[e + 136 >> 2] = h;
  a[e + 36 >> 0] = 8;
  q = Da(b) | 0;
  return q | 0;
 }
 c[e + 4 >> 2] = 666;
 c[m >> 2] = c[444];
 j = c[n >> 2] | 0;
 if (!j) {
  q = -4;
  return q | 0;
 }
 switch (c[j + 4 >> 2] | 0) {
 case 42:
 case 69:
 case 73:
 case 91:
 case 103:
 case 113:
 case 666:
  break;
 default:
  {
   q = -4;
   return q | 0;
  }
 }
 i = c[j + 8 >> 2] | 0;
 if (i) {
  na[c[p >> 2] & 1](c[o >> 2] | 0, i);
  j = c[n >> 2] | 0;
 }
 i = c[j + 68 >> 2] | 0;
 if (i) {
  na[c[p >> 2] & 1](c[o >> 2] | 0, i);
  j = c[n >> 2] | 0;
 }
 i = c[j + 64 >> 2] | 0;
 if (i) {
  na[c[p >> 2] & 1](c[o >> 2] | 0, i);
  j = c[n >> 2] | 0;
 }
 i = c[j + 56 >> 2] | 0;
 if (i) {
  na[c[p >> 2] & 1](c[o >> 2] | 0, i);
  j = c[n >> 2] | 0;
 }
 na[c[p >> 2] & 1](c[o >> 2] | 0, j);
 c[n >> 2] = 0;
 q = -4;
 return q | 0;
}

function Xa(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 if (!b) {
  i = 0;
  return i | 0;
 }
 a = ~a;
 a : do if (e) {
  while (1) {
   if (!(b & 3)) break;
   a = c[1792 + (((d[b >> 0] | 0) ^ a & 255) << 2) >> 2] ^ a >>> 8;
   e = e + -1 | 0;
   if (!e) break a; else b = b + 1 | 0;
  }
  if (e >>> 0 > 31) {
   g = e + -32 | 0;
   h = g & -32;
   i = h + 32 | 0;
   f = b;
   while (1) {
    a = c[f >> 2] ^ a;
    a = c[3840 + ((a >>> 8 & 255) << 2) >> 2] ^ c[4864 + ((a & 255) << 2) >> 2] ^ c[2816 + ((a >>> 16 & 255) << 2) >> 2] ^ c[1792 + (a >>> 24 << 2) >> 2] ^ c[f + 4 >> 2];
    a = c[3840 + ((a >>> 8 & 255) << 2) >> 2] ^ c[4864 + ((a & 255) << 2) >> 2] ^ c[2816 + ((a >>> 16 & 255) << 2) >> 2] ^ c[1792 + (a >>> 24 << 2) >> 2] ^ c[f + 8 >> 2];
    a = c[3840 + ((a >>> 8 & 255) << 2) >> 2] ^ c[4864 + ((a & 255) << 2) >> 2] ^ c[2816 + ((a >>> 16 & 255) << 2) >> 2] ^ c[1792 + (a >>> 24 << 2) >> 2] ^ c[f + 12 >> 2];
    a = c[3840 + ((a >>> 8 & 255) << 2) >> 2] ^ c[4864 + ((a & 255) << 2) >> 2] ^ c[2816 + ((a >>> 16 & 255) << 2) >> 2] ^ c[1792 + (a >>> 24 << 2) >> 2] ^ c[f + 16 >> 2];
    a = c[3840 + ((a >>> 8 & 255) << 2) >> 2] ^ c[4864 + ((a & 255) << 2) >> 2] ^ c[2816 + ((a >>> 16 & 255) << 2) >> 2] ^ c[1792 + (a >>> 24 << 2) >> 2] ^ c[f + 20 >> 2];
    a = c[3840 + ((a >>> 8 & 255) << 2) >> 2] ^ c[4864 + ((a & 255) << 2) >> 2] ^ c[2816 + ((a >>> 16 & 255) << 2) >> 2] ^ c[1792 + (a >>> 24 << 2) >> 2] ^ c[f + 24 >> 2];
    a = c[3840 + ((a >>> 8 & 255) << 2) >> 2] ^ c[4864 + ((a & 255) << 2) >> 2] ^ c[2816 + ((a >>> 16 & 255) << 2) >> 2] ^ c[1792 + (a >>> 24 << 2) >> 2] ^ c[f + 28 >> 2];
    a = c[3840 + ((a >>> 8 & 255) << 2) >> 2] ^ c[4864 + ((a & 255) << 2) >> 2] ^ c[2816 + ((a >>> 16 & 255) << 2) >> 2] ^ c[1792 + (a >>> 24 << 2) >> 2];
    e = e + -32 | 0;
    if (e >>> 0 <= 31) break; else f = f + 32 | 0;
   }
   e = g - h | 0;
   b = b + i | 0;
  }
  if (e >>> 0 > 3) {
   g = e + -4 | 0;
   i = g >>> 2;
   h = i << 2;
   f = b;
   while (1) {
    a = c[f >> 2] ^ a;
    a = c[3840 + ((a >>> 8 & 255) << 2) >> 2] ^ c[4864 + ((a & 255) << 2) >> 2] ^ c[2816 + ((a >>> 16 & 255) << 2) >> 2] ^ c[1792 + (a >>> 24 << 2) >> 2];
    e = e + -4 | 0;
    if (e >>> 0 <= 3) break; else f = f + 4 | 0;
   }
   e = g - h | 0;
   b = b + (i + 1 << 2) | 0;
  }
  if (e) while (1) {
   a = c[1792 + (((d[b >> 0] | 0) ^ a & 255) << 2) >> 2] ^ a >>> 8;
   e = e + -1 | 0;
   if (!e) break; else b = b + 1 | 0;
  }
 } while (0);
 i = ~a;
 return i | 0;
}

function Ha(b, d) {
 b = b | 0;
 d = d | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 k = c[b + 124 >> 2] | 0;
 r = c[b + 56 >> 2] | 0;
 o = c[b + 108 >> 2] | 0;
 i = r + o | 0;
 j = c[b + 120 >> 2] | 0;
 n = c[b + 144 >> 2] | 0;
 m = (c[b + 44 >> 2] | 0) + -262 | 0;
 m = o >>> 0 > m >>> 0 ? o - m | 0 : 0;
 o = c[b + 64 >> 2] | 0;
 p = c[b + 52 >> 2] | 0;
 q = i + 258 | 0;
 v = c[b + 116 >> 2] | 0;
 n = n >>> 0 > v >>> 0 ? v : n;
 s = b + 112 | 0;
 t = q;
 u = q + -258 | 0;
 l = d;
 g = j;
 k = j >>> 0 < (c[b + 140 >> 2] | 0) >>> 0 ? k : k >>> 2;
 h = i;
 f = a[i + j >> 0] | 0;
 j = a[i + (j + -1) >> 0] | 0;
 while (1) {
  d = r + l | 0;
  if ((a[d + g >> 0] | 0) == f << 24 >> 24) if ((a[d + (g + -1) >> 0] | 0) == j << 24 >> 24) if ((a[d >> 0] | 0) == (a[h >> 0] | 0)) {
   d = d + 1 | 0;
   if ((a[d >> 0] | 0) == (a[h + 1 >> 0] | 0)) {
    i = d;
    h = h + 2 | 0;
    while (1) {
     d = h + 1 | 0;
     if ((a[d >> 0] | 0) != (a[i + 2 >> 0] | 0)) break;
     d = h + 2 | 0;
     if ((a[d >> 0] | 0) != (a[i + 3 >> 0] | 0)) break;
     d = h + 3 | 0;
     if ((a[d >> 0] | 0) != (a[i + 4 >> 0] | 0)) break;
     d = h + 4 | 0;
     if ((a[d >> 0] | 0) != (a[i + 5 >> 0] | 0)) break;
     d = h + 5 | 0;
     if ((a[d >> 0] | 0) != (a[i + 6 >> 0] | 0)) break;
     d = h + 6 | 0;
     if ((a[d >> 0] | 0) != (a[i + 7 >> 0] | 0)) break;
     d = h + 7 | 0;
     b = i;
     i = i + 8 | 0;
     if ((a[d >> 0] | 0) != (a[i >> 0] | 0)) break;
     d = h + 8 | 0;
     if (!(d >>> 0 < q >>> 0 ? (a[d >> 0] | 0) == (a[b + 9 >> 0] | 0) : 0)) break; else h = d;
    }
    b = d - t | 0;
    d = b + 258 | 0;
    if ((d | 0) > (g | 0)) {
     c[s >> 2] = l;
     if ((d | 0) >= (n | 0)) {
      b = 20;
      break;
     }
     g = d;
     h = u;
     f = a[u + d >> 0] | 0;
     d = a[u + (b + 257) >> 0] | 0;
    } else {
     h = u;
     d = j;
    }
   } else d = j;
  } else d = j; else d = j; else d = j;
  l = e[o + ((l & p) << 1) >> 1] | 0;
  if (l >>> 0 <= m >>> 0) {
   d = g;
   b = 20;
   break;
  }
  k = k + -1 | 0;
  if (!k) {
   d = g;
   b = 20;
   break;
  } else j = d;
 }
 if ((b | 0) == 20) return (d >>> 0 > v >>> 0 ? v : d) | 0;
 return 0;
}

function pb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0.0;
 a : do if (b >>> 0 <= 20) do switch (b | 0) {
 case 9:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = b;
   break a;
  }
 case 10:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;
   break a;
  }
 case 11:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = 0;
   break a;
  }
 case 12:
  {
   e = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   b = e;
   f = c[b >> 2] | 0;
   b = c[b + 4 >> 2] | 0;
   c[d >> 2] = e + 8;
   e = a;
   c[e >> 2] = f;
   c[e + 4 >> 2] = b;
   break a;
  }
 case 13:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 65535) << 16 >> 16;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 14:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 65535;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 15:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 255) << 24 >> 24;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 16:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 255;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 17:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 case 18:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 default:
  break a;
 } while (0); while (0);
 return;
}

function Na(d, f, g, h) {
 d = d | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 l = d + 5820 | 0;
 j = c[l >> 2] | 0;
 i = h & 65535;
 k = d + 5816 | 0;
 h = e[k >> 1] | 0 | i << j;
 b[k >> 1] = h;
 if ((j | 0) > 13) {
  n = d + 20 | 0;
  j = c[n >> 2] | 0;
  c[n >> 2] = j + 1;
  m = d + 8 | 0;
  a[(c[m >> 2] | 0) + j >> 0] = h;
  h = (e[k >> 1] | 0) >>> 8 & 255;
  j = c[n >> 2] | 0;
  c[n >> 2] = j + 1;
  a[(c[m >> 2] | 0) + j >> 0] = h;
  j = c[l >> 2] | 0;
  h = i >>> (16 - j | 0);
  b[k >> 1] = h;
  j = j + -13 | 0;
 } else j = j + 3 | 0;
 h = h & 255;
 c[l >> 2] = j;
 do if ((j | 0) > 8) {
  i = d + 20 | 0;
  m = c[i >> 2] | 0;
  c[i >> 2] = m + 1;
  n = d + 8 | 0;
  a[(c[n >> 2] | 0) + m >> 0] = h;
  m = (e[k >> 1] | 0) >>> 8 & 255;
  h = c[i >> 2] | 0;
  c[i >> 2] = h + 1;
  a[(c[n >> 2] | 0) + h >> 0] = m;
  h = n;
 } else {
  i = d + 20 | 0;
  if ((j | 0) > 0) {
   m = c[i >> 2] | 0;
   c[i >> 2] = m + 1;
   n = d + 8 | 0;
   a[(c[n >> 2] | 0) + m >> 0] = h;
   h = n;
   break;
  } else {
   h = d + 8 | 0;
   break;
  }
 } while (0);
 b[k >> 1] = 0;
 c[l >> 2] = 0;
 c[d + 5812 >> 2] = 8;
 m = c[i >> 2] | 0;
 c[i >> 2] = m + 1;
 a[(c[h >> 2] | 0) + m >> 0] = g;
 m = c[i >> 2] | 0;
 c[i >> 2] = m + 1;
 a[(c[h >> 2] | 0) + m >> 0] = g >>> 8;
 m = g & 65535 ^ 65535;
 n = c[i >> 2] | 0;
 c[i >> 2] = n + 1;
 a[(c[h >> 2] | 0) + n >> 0] = m;
 n = c[i >> 2] | 0;
 c[i >> 2] = n + 1;
 a[(c[h >> 2] | 0) + n >> 0] = m >>> 8;
 if (!g) return;
 while (1) {
  g = g + -1 | 0;
  m = a[f >> 0] | 0;
  n = c[i >> 2] | 0;
  c[i >> 2] = n + 1;
  a[(c[h >> 2] | 0) + n >> 0] = m;
  if (!g) break; else f = f + 1 | 0;
 }
 return;
}

function gb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 48 | 0;
 n = q + 16 | 0;
 m = q;
 e = q + 32 | 0;
 o = a + 28 | 0;
 f = c[o >> 2] | 0;
 c[e >> 2] = f;
 p = a + 20 | 0;
 f = (c[p >> 2] | 0) - f | 0;
 c[e + 4 >> 2] = f;
 c[e + 8 >> 2] = b;
 c[e + 12 >> 2] = d;
 k = a + 60 | 0;
 l = a + 44 | 0;
 b = 2;
 f = f + d | 0;
 while (1) {
  if (!(c[4440] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = eb(ja(146, n | 0) | 0) | 0;
  } else {
   ca(1, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = eb(ja(146, m | 0) | 0) | 0;
   $(0);
  }
  if ((f | 0) == (h | 0)) {
   f = 6;
   break;
  }
  if ((h | 0) < 0) {
   f = 8;
   break;
  }
  f = f - h | 0;
  g = c[e + 4 >> 2] | 0;
  if (h >>> 0 > g >>> 0) {
   j = c[l >> 2] | 0;
   c[o >> 2] = j;
   c[p >> 2] = j;
   j = c[e + 12 >> 2] | 0;
   h = h - g | 0;
   e = e + 8 | 0;
   b = b + -1 | 0;
  } else if ((b | 0) == 2) {
   c[o >> 2] = (c[o >> 2] | 0) + h;
   j = g;
   b = 2;
  } else j = g;
  c[e >> 2] = (c[e >> 2] | 0) + h;
  c[e + 4 >> 2] = j - h;
 }
 if ((f | 0) == 6) {
  n = c[l >> 2] | 0;
  c[a + 16 >> 2] = n + (c[a + 48 >> 2] | 0);
  a = n;
  c[o >> 2] = a;
  c[p >> 2] = a;
 } else if ((f | 0) == 8) {
  c[a + 16 >> 2] = 0;
  c[o >> 2] = 0;
  c[p >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((b | 0) == 2) d = 0; else d = d - (c[e + 4 >> 2] | 0) | 0;
 }
 i = q;
 return d | 0;
}

function Ya(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 if (!e) {
  b = -6;
  return b | 0;
 }
 if ((f | 0) != 56 | (a[e >> 0] | 0) != 49) {
  b = -6;
  return b | 0;
 }
 if (!b) {
  b = -2;
  return b | 0;
 }
 k = b + 24 | 0;
 c[k >> 2] = 0;
 f = b + 32 | 0;
 e = c[f >> 2] | 0;
 if (!e) {
  c[f >> 2] = 3;
  c[b + 40 >> 2] = 0;
  e = 3;
 }
 i = b + 36 | 0;
 if (!(c[i >> 2] | 0)) c[i >> 2] = 1;
 j = b + 40 | 0;
 g = ma[e & 7](c[j >> 2] | 0, 1, 7116) | 0;
 if (!g) {
  b = -4;
  return b | 0;
 }
 h = b + 28 | 0;
 c[h >> 2] = g;
 c[g + 52 >> 2] = 0;
 if ((d | 0) < 0) {
  e = 0 - d | 0;
  f = 0;
 } else {
  e = (d | 0) < 48 ? d & 15 : d;
  f = (d >> 4) + 1 | 0;
 }
 if ((e | 0) == 0 | (e & -8 | 0) == 8) {
  c[g + 8 >> 2] = f;
  c[g + 36 >> 2] = e;
  c[g + 28 >> 2] = 0;
  c[b + 20 >> 2] = 0;
  c[b + 8 >> 2] = 0;
  c[k >> 2] = 0;
  c[b + 48 >> 2] = 1;
  c[g >> 2] = 0;
  c[g + 4 >> 2] = 0;
  c[g + 12 >> 2] = 0;
  c[g + 20 >> 2] = 32768;
  c[g + 32 >> 2] = 0;
  c[g + 40 >> 2] = 0;
  c[g + 44 >> 2] = 0;
  c[g + 48 >> 2] = 0;
  c[g + 56 >> 2] = 0;
  c[g + 60 >> 2] = 0;
  b = g + 1328 | 0;
  c[g + 108 >> 2] = b;
  c[g + 80 >> 2] = b;
  c[g + 76 >> 2] = b;
  c[g + 7104 >> 2] = 1;
  c[g + 7108 >> 2] = -1;
  b = 0;
  return b | 0;
 } else {
  na[c[i >> 2] & 1](c[j >> 2] | 0, g);
  c[h >> 2] = 0;
  b = -2;
  return b | 0;
 }
 return 0;
}

function Ma(a) {
 a = a | 0;
 var d = 0;
 d = 0;
 do {
  b[a + 148 + (d << 2) >> 1] = 0;
  d = d + 1 | 0;
 } while ((d | 0) != 286);
 b[a + 2440 >> 1] = 0;
 b[a + 2444 >> 1] = 0;
 b[a + 2448 >> 1] = 0;
 b[a + 2452 >> 1] = 0;
 b[a + 2456 >> 1] = 0;
 b[a + 2460 >> 1] = 0;
 b[a + 2464 >> 1] = 0;
 b[a + 2468 >> 1] = 0;
 b[a + 2472 >> 1] = 0;
 b[a + 2476 >> 1] = 0;
 b[a + 2480 >> 1] = 0;
 b[a + 2484 >> 1] = 0;
 b[a + 2488 >> 1] = 0;
 b[a + 2492 >> 1] = 0;
 b[a + 2496 >> 1] = 0;
 b[a + 2500 >> 1] = 0;
 b[a + 2504 >> 1] = 0;
 b[a + 2508 >> 1] = 0;
 b[a + 2512 >> 1] = 0;
 b[a + 2516 >> 1] = 0;
 b[a + 2520 >> 1] = 0;
 b[a + 2524 >> 1] = 0;
 b[a + 2528 >> 1] = 0;
 b[a + 2532 >> 1] = 0;
 b[a + 2536 >> 1] = 0;
 b[a + 2540 >> 1] = 0;
 b[a + 2544 >> 1] = 0;
 b[a + 2548 >> 1] = 0;
 b[a + 2552 >> 1] = 0;
 b[a + 2556 >> 1] = 0;
 b[a + 2684 >> 1] = 0;
 b[a + 2688 >> 1] = 0;
 b[a + 2692 >> 1] = 0;
 b[a + 2696 >> 1] = 0;
 b[a + 2700 >> 1] = 0;
 b[a + 2704 >> 1] = 0;
 b[a + 2708 >> 1] = 0;
 b[a + 2712 >> 1] = 0;
 b[a + 2716 >> 1] = 0;
 b[a + 2720 >> 1] = 0;
 b[a + 2724 >> 1] = 0;
 b[a + 2728 >> 1] = 0;
 b[a + 2732 >> 1] = 0;
 b[a + 2736 >> 1] = 0;
 b[a + 2740 >> 1] = 0;
 b[a + 2744 >> 1] = 0;
 b[a + 2748 >> 1] = 0;
 b[a + 2752 >> 1] = 0;
 b[a + 2756 >> 1] = 0;
 b[a + 1172 >> 1] = 1;
 c[a + 5804 >> 2] = 0;
 c[a + 5800 >> 2] = 0;
 c[a + 5808 >> 2] = 0;
 c[a + 5792 >> 2] = 0;
 return;
}

function Da(a) {
 a = a | 0;
 var d = 0, f = 0, g = 0;
 if (!a) {
  a = -2;
  return a | 0;
 }
 g = c[a + 28 >> 2] | 0;
 if (!g) {
  a = -2;
  return a | 0;
 }
 if (!(c[a + 32 >> 2] | 0)) {
  a = -2;
  return a | 0;
 }
 if (!(c[a + 36 >> 2] | 0)) {
  a = -2;
  return a | 0;
 }
 c[a + 20 >> 2] = 0;
 c[a + 8 >> 2] = 0;
 c[a + 24 >> 2] = 0;
 c[a + 44 >> 2] = 2;
 c[g + 20 >> 2] = 0;
 c[g + 16 >> 2] = c[g + 8 >> 2];
 f = g + 24 | 0;
 d = c[f >> 2] | 0;
 if ((d | 0) < 0) {
  d = 0 - d | 0;
  c[f >> 2] = d;
 }
 c[g + 4 >> 2] = d | 0 ? 42 : 113;
 if ((d | 0) == 2) d = Xa(0, 0, 0) | 0; else d = Wa(0, 0, 0) | 0;
 c[a + 48 >> 2] = d;
 c[g + 40 >> 2] = 0;
 La(g);
 c[g + 60 >> 2] = c[g + 44 >> 2] << 1;
 a = c[g + 76 >> 2] | 0;
 f = c[g + 68 >> 2] | 0;
 b[f + (a + -1 << 1) >> 1] = 0;
 Lb(f | 0, 0, (a << 1) + -2 | 0) | 0;
 a = c[g + 132 >> 2] | 0;
 c[g + 128 >> 2] = e[1024 + (a * 12 | 0) + 2 >> 1];
 c[g + 140 >> 2] = e[1024 + (a * 12 | 0) >> 1];
 c[g + 144 >> 2] = e[1024 + (a * 12 | 0) + 4 >> 1];
 c[g + 124 >> 2] = e[1024 + (a * 12 | 0) + 6 >> 1];
 c[g + 108 >> 2] = 0;
 c[g + 92 >> 2] = 0;
 c[g + 116 >> 2] = 0;
 c[g + 120 >> 2] = 2;
 c[g + 96 >> 2] = 2;
 c[g + 112 >> 2] = 0;
 c[g + 104 >> 2] = 0;
 c[g + 72 >> 2] = 0;
 a = 0;
 return a | 0;
}

function $a(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 h = c[a + 28 >> 2] | 0;
 i = h + 52 | 0;
 d = c[i >> 2] | 0;
 if (!d) {
  d = ma[c[a + 32 >> 2] & 7](c[a + 40 >> 2] | 0, 1 << c[h + 36 >> 2], 1) | 0;
  c[i >> 2] = d;
  if (!d) {
   i = 1;
   return i | 0;
  }
 }
 f = h + 40 | 0;
 e = c[f >> 2] | 0;
 if (!e) {
  e = 1 << c[h + 36 >> 2];
  c[f >> 2] = e;
  c[h + 48 >> 2] = 0;
  c[h + 44 >> 2] = 0;
 }
 g = b - (c[a + 16 >> 2] | 0) | 0;
 if (g >>> 0 >= e >>> 0) {
  Ob(d | 0, (c[a + 12 >> 2] | 0) + (0 - e) | 0, e | 0) | 0;
  c[h + 48 >> 2] = 0;
  c[h + 44 >> 2] = c[f >> 2];
  i = 0;
  return i | 0;
 }
 b = h + 48 | 0;
 k = c[b >> 2] | 0;
 j = e - k | 0;
 j = j >>> 0 > g >>> 0 ? g : j;
 e = a + 12 | 0;
 Ob(d + k | 0, (c[e >> 2] | 0) + (0 - g) | 0, j | 0) | 0;
 d = g - j | 0;
 if ((g | 0) != (j | 0)) {
  Ob(c[i >> 2] | 0, (c[e >> 2] | 0) + (0 - d) | 0, d | 0) | 0;
  c[b >> 2] = d;
  c[h + 44 >> 2] = c[f >> 2];
  k = 0;
  return k | 0;
 }
 d = (c[b >> 2] | 0) + g | 0;
 k = c[f >> 2] | 0;
 c[b >> 2] = (d | 0) == (k | 0) ? 0 : d;
 d = h + 44 | 0;
 e = c[d >> 2] | 0;
 if (e >>> 0 >= k >>> 0) {
  k = 0;
  return k | 0;
 }
 c[d >> 2] = e + g;
 k = 0;
 return k | 0;
}

function lb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 224 | 0;
 o = s + 120 | 0;
 r = s + 80 | 0;
 q = s;
 p = s + 136 | 0;
 f = r;
 g = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 c[o >> 2] = c[e >> 2];
 if ((mb(0, d, o, q, r) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) m = yb(b) | 0; else m = 0;
  e = c[b >> 2] | 0;
  n = e & 32;
  if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;
  e = b + 48 | 0;
  if (!(c[e >> 2] | 0)) {
   g = b + 44 | 0;
   h = c[g >> 2] | 0;
   c[g >> 2] = p;
   j = b + 28 | 0;
   c[j >> 2] = p;
   k = b + 20 | 0;
   c[k >> 2] = p;
   c[e >> 2] = 80;
   l = b + 16 | 0;
   c[l >> 2] = p + 80;
   f = mb(b, d, o, q, r) | 0;
   if (h) {
    ma[c[b + 36 >> 2] & 7](b, 0, 0) | 0;
    f = (c[k >> 2] | 0) == 0 ? -1 : f;
    c[g >> 2] = h;
    c[e >> 2] = 0;
    c[l >> 2] = 0;
    c[j >> 2] = 0;
    c[k >> 2] = 0;
   }
  } else f = mb(b, d, o, q, r) | 0;
  e = c[b >> 2] | 0;
  c[b >> 2] = e | n;
  if (m | 0) ib(b);
  e = (e & 32 | 0) == 0 ? f : -1;
 }
 i = s;
 return e | 0;
}

function sb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = d & 255;
 f = (e | 0) != 0;
 a : do if (f & (b & 3 | 0) != 0) {
  g = d & 255;
  while (1) {
   if ((a[b >> 0] | 0) == g << 24 >> 24) {
    i = 6;
    break a;
   }
   b = b + 1 | 0;
   e = e + -1 | 0;
   f = (e | 0) != 0;
   if (!(f & (b & 3 | 0) != 0)) {
    i = 5;
    break;
   }
  }
 } else i = 5; while (0);
 if ((i | 0) == 5) if (f) i = 6; else e = 0;
 b : do if ((i | 0) == 6) {
  g = d & 255;
  if ((a[b >> 0] | 0) != g << 24 >> 24) {
   f = R(h, 16843009) | 0;
   c : do if (e >>> 0 > 3) while (1) {
    h = c[b >> 2] ^ f;
    if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) break;
    b = b + 4 | 0;
    e = e + -4 | 0;
    if (e >>> 0 <= 3) {
     i = 11;
     break c;
    }
   } else i = 11; while (0);
   if ((i | 0) == 11) if (!e) {
    e = 0;
    break;
   }
   while (1) {
    if ((a[b >> 0] | 0) == g << 24 >> 24) break b;
    b = b + 1 | 0;
    e = e + -1 | 0;
    if (!e) {
     e = 0;
     break;
    }
   }
  }
 } while (0);
 return (e | 0 ? b : 0) | 0;
}

function ya(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 e = h;
 a : do if ((b | 0) > 1) {
  b = a[c[d + 4 >> 2] >> 0] | 0;
  switch (b | 0) {
  case 49:
   {
    g = 60;
    break a;
   }
  case 51:
   {
    f = 4;
    break a;
   }
  case 50:
   {
    g = 250;
    break a;
   }
  case 52:
   {
    g = 2500;
    break a;
   }
  case 53:
   {
    g = 5e3;
    break a;
   }
  case 48:
   {
    g = 0;
    i = h;
    return g | 0;
   }
  default:
   {
    c[e >> 2] = b + -48;
    Eb(13939, e) | 0;
    g = -1;
    i = h;
    return g | 0;
   }
  }
 } else f = 4; while (0);
 if ((f | 0) == 4) g = 500;
 f = Gb(1e5) | 0;
 e = 0;
 b = 0;
 d = 17;
 do {
  do if ((b | 0) > 0) b = b + -1 | 0; else if (!(e & 7)) {
   b = e & 31;
   d = 0;
   break;
  } else {
   d = (((R(e, e) | 0) >>> 0) % 6714 | 0) & 255;
   break;
  } while (0);
  a[f + e >> 0] = d;
  e = e + 1 | 0;
 } while ((e | 0) != 1e5);
 b = 0;
 do {
  xa(f, 1e5, b);
  b = b + 1 | 0;
 } while ((b | 0) < (g | 0));
 Fb(13951) | 0;
 g = 0;
 i = h;
 return g | 0;
}

function Ja(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 if (!a) {
  g = -2;
  return g | 0;
 }
 f = a + 28 | 0;
 b = c[f >> 2] | 0;
 if (!b) {
  g = -2;
  return g | 0;
 }
 g = c[b + 4 >> 2] | 0;
 switch (g | 0) {
 case 42:
 case 69:
 case 73:
 case 91:
 case 103:
 case 113:
 case 666:
  break;
 default:
  {
   g = -2;
   return g | 0;
  }
 }
 d = c[b + 8 >> 2] | 0;
 if (d) {
  na[c[a + 36 >> 2] & 1](c[a + 40 >> 2] | 0, d);
  b = c[f >> 2] | 0;
 }
 d = c[b + 68 >> 2] | 0;
 if (d) {
  na[c[a + 36 >> 2] & 1](c[a + 40 >> 2] | 0, d);
  b = c[f >> 2] | 0;
 }
 d = c[b + 64 >> 2] | 0;
 if (d) {
  na[c[a + 36 >> 2] & 1](c[a + 40 >> 2] | 0, d);
  b = c[f >> 2] | 0;
 }
 d = c[b + 56 >> 2] | 0;
 if (!d) {
  e = a + 40 | 0;
  d = a + 36 | 0;
 } else {
  b = a + 36 | 0;
  e = a + 40 | 0;
  na[c[b >> 2] & 1](c[e >> 2] | 0, d);
  d = b;
  b = c[f >> 2] | 0;
 }
 na[c[d >> 2] & 1](c[e >> 2] | 0, b);
 c[f >> 2] = 0;
 g = (g | 0) == 113 ? -3 : 0;
 return g | 0;
}

function nb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(ob(e) | 0)) {
  g = c[f >> 2] | 0;
  h = 5;
 } else f = 0; else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  f = c[i >> 2] | 0;
  h = f;
  if ((g - f | 0) >>> 0 < d >>> 0) {
   f = ma[c[e + 36 >> 2] & 7](e, b, d) | 0;
   break;
  }
  b : do if ((a[e + 75 >> 0] | 0) > -1) {
   f = d;
   while (1) {
    if (!f) {
     g = h;
     f = 0;
     break b;
    }
    g = f + -1 | 0;
    if ((a[b + g >> 0] | 0) == 10) break; else f = g;
   }
   if ((ma[c[e + 36 >> 2] & 7](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   d = d - f | 0;
   b = b + f | 0;
   g = c[i >> 2] | 0;
  } else {
   g = h;
   f = 0;
  } while (0);
  Ob(g | 0, b | 0, d | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + d;
  f = f + d | 0;
 } while (0);
 return f | 0;
}

function vb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 do if (!b) b = 1; else {
  if (d >>> 0 < 128) {
   a[b >> 0] = d;
   b = 1;
   break;
  }
  if (d >>> 0 < 2048) {
   a[b >> 0] = d >>> 6 | 192;
   a[b + 1 >> 0] = d & 63 | 128;
   b = 2;
   break;
  }
  if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
   a[b >> 0] = d >>> 12 | 224;
   a[b + 1 >> 0] = d >>> 6 & 63 | 128;
   a[b + 2 >> 0] = d & 63 | 128;
   b = 3;
   break;
  }
  if ((d + -65536 | 0) >>> 0 < 1048576) {
   a[b >> 0] = d >>> 18 | 240;
   a[b + 1 >> 0] = d >>> 12 & 63 | 128;
   a[b + 2 >> 0] = d >>> 6 & 63 | 128;
   a[b + 3 >> 0] = d & 63 | 128;
   b = 4;
   break;
  } else {
   c[(fb() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } while (0);
 return b | 0;
}

function Ta(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 64 | 0;
 g = j;
 c[g >> 2] = d;
 f = g + 4 | 0;
 c[f >> 2] = e;
 c[g + 12 >> 2] = a;
 c[g + 16 >> 2] = c[b >> 2];
 c[g + 32 >> 2] = 0;
 c[g + 36 >> 2] = 0;
 d = Za(g, 14742, 56) | 0;
 if (d | 0) {
  h = d;
  i = j;
  return h | 0;
 }
 d = _a(g, 4) | 0;
 if ((d | 0) == 1) {
  c[b >> 2] = c[g + 20 >> 2];
  h = ab(g) | 0;
  i = j;
  return h | 0;
 }
 ab(g) | 0;
 switch (d | 0) {
 case -5:
  {
   h = 4;
   break;
  }
 case 2:
  {
   h = -3;
   i = j;
   return h | 0;
  }
 default:
  {}
 }
 if ((h | 0) == 4) if (!(c[f >> 2] | 0)) {
  h = -3;
  i = j;
  return h | 0;
 }
 h = d;
 i = j;
 return h | 0;
}

function xa(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 j = k;
 g = k + 12 | 0;
 h = k + 8 | 0;
 f = Aa(b) | 0;
 e = c[4438] | 0;
 if (!e) {
  e = Gb(f) | 0;
  c[4438] = e;
 }
 if (!(c[4439] | 0)) c[4439] = Gb(b) | 0;
 c[g >> 2] = f;
 za(e, g, a, b) | 0;
 e = (d | 0) == 0;
 if (e) {
  d = c[g >> 2] | 0;
  c[j >> 2] = b;
  c[j + 4 >> 2] = d;
  Eb(13838, j) | 0;
 }
 c[h >> 2] = b;
 Ta(c[4439] | 0, h, c[4438] | 0, c[g >> 2] | 0) | 0;
 if ((c[h >> 2] | 0) != (b | 0)) ia(13852, 13877, 24, 13905);
 if (!e) {
  i = k;
  return;
 }
 if (!(Ab(a, c[4439] | 0) | 0)) {
  i = k;
  return;
 } else ia(13910, 13877, 25, 13905);
}

function tb(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 j = i;
 i = i + 256 | 0;
 h = j;
 do if ((d | 0) > (e | 0) & (f & 73728 | 0) == 0) {
  f = d - e | 0;
  Lb(h | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  b = c[a >> 2] | 0;
  g = (b & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   e = d - e | 0;
   do {
    if (g) {
     nb(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    f = f + -256 | 0;
    g = (b & 32 | 0) == 0;
   } while (f >>> 0 > 255);
   if (g) f = e & 255; else break;
  } else if (!g) break;
  nb(h, f, a) | 0;
 } while (0);
 i = j;
 return;
}

function Bb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 k = e & 255;
 a[l >> 0] = k;
 f = b + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(ob(b) | 0)) {
  g = c[f >> 2] | 0;
  h = 4;
 } else f = -1; else h = 4;
 do if ((h | 0) == 4) {
  h = b + 20 | 0;
  j = c[h >> 2] | 0;
  if (j >>> 0 < g >>> 0) {
   f = e & 255;
   if ((f | 0) != (a[b + 75 >> 0] | 0)) {
    c[h >> 2] = j + 1;
    a[j >> 0] = k;
    break;
   }
  }
  if ((ma[c[b + 36 >> 2] & 7](b, l, 1) | 0) == 1) f = d[l >> 0] | 0; else f = -1;
 } while (0);
 i = m;
 return f | 0;
}

function za(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 64 | 0;
 f = g;
 c[f >> 2] = d;
 c[f + 4 >> 2] = e;
 c[f + 12 >> 2] = a;
 c[f + 16 >> 2] = c[b >> 2];
 c[f + 32 >> 2] = 0;
 c[f + 36 >> 2] = 0;
 c[f + 40 >> 2] = 0;
 a = Ba(f, -1, 14742, 56) | 0;
 if (a | 0) {
  f = a;
  i = g;
  return f | 0;
 }
 a = Ka(f, 4) | 0;
 if ((a | 0) == 1) {
  c[b >> 2] = c[f + 20 >> 2];
  f = Ja(f) | 0;
  i = g;
  return f | 0;
 } else {
  Ja(f) | 0;
  f = (a | 0) == 0 ? -5 : a;
  i = g;
  return f | 0;
 }
 return 0;
}

function Ob(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return fa(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function xb(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = Mb(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +xb(a * 18446744073709551616.0, b);
    d = (c[b >> 2] | 0) + -64 | 0;
   } else d = 0;
   c[b >> 2] = d;
   break;
  }
 case 2047:
  break;
 default:
  {
   c[b >> 2] = f + -1022;
   c[k >> 2] = d;
   c[k + 4 >> 2] = e & -2146435073 | 1071644672;
   a = +h[k >> 3];
  }
 }
 return +a;
}

function qb(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = Rb(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = Qb(b | 0, c | 0, 10, 0) | 0;
  if (c >>> 0 > 9 | (c | 0) == 9 & b >>> 0 > 4294967295) {
   b = e;
   c = C;
  } else {
   b = e;
   break;
  }
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function zb(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 a : do if (!(f & 3)) e = 4; else {
  d = b;
  b = f;
  while (1) {
   if (!(a[d >> 0] | 0)) break a;
   d = d + 1 | 0;
   b = d;
   if (!(b & 3)) {
    b = d;
    e = 4;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 4) {
  while (1) {
   d = c[b >> 2] | 0;
   if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0; else break;
  }
  if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
 }
 return b - f | 0;
}

function rb(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[15815 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 15903;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 15903; else {
  b = 15903;
  e = 5;
 }
 if ((e | 0) == 5) while (1) {
  e = b;
  while (1) {
   b = e + 1 | 0;
   if (!(a[e >> 0] | 0)) break; else e = b;
  }
  c = c + -1 | 0;
  if (!c) break; else e = 5;
 }
 return b | 0;
}

function Lb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  h = b & 3;
  i = d | d << 8 | d << 16 | d << 24;
  g = f & ~3;
  if (h) {
   h = b + 4 - h | 0;
   while ((b | 0) < (h | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (g | 0)) {
   c[b >> 2] = i;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function ab(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 if (!a) {
  g = -2;
  return g | 0;
 }
 g = a + 28 | 0;
 b = c[g >> 2] | 0;
 if (!b) {
  g = -2;
  return g | 0;
 }
 e = a + 36 | 0;
 d = c[e >> 2] | 0;
 if (!d) {
  g = -2;
  return g | 0;
 }
 f = c[b + 52 >> 2] | 0;
 a = a + 40 | 0;
 if (f) {
  na[d & 1](c[a >> 2] | 0, f);
  d = c[e >> 2] | 0;
  b = c[g >> 2] | 0;
 }
 na[d & 1](c[a >> 2] | 0, b);
 c[g >> 2] = 0;
 g = 0;
 return g | 0;
}

function Fb(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 e = c[2496] | 0;
 if ((c[e + 76 >> 2] | 0) > -1) f = yb(e) | 0; else f = 0;
 do if ((Db(b, e) | 0) < 0) b = 1; else {
  if ((a[e + 75 >> 0] | 0) != 10) {
   b = e + 20 | 0;
   d = c[b >> 2] | 0;
   if (d >>> 0 < (c[e + 16 >> 2] | 0) >>> 0) {
    c[b >> 2] = d + 1;
    a[d >> 0] = 10;
    b = 0;
    break;
   }
  }
  b = (Bb(e, 10) | 0) < 0;
 } while (0);
 if (f | 0) ib(e);
 return b << 31 >> 31 | 0;
}

function Ab(b, c) {
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0;
 e = a[b >> 0] | 0;
 d = a[c >> 0] | 0;
 if (e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24) c = e; else {
  do {
   b = b + 1 | 0;
   c = c + 1 | 0;
   e = a[b >> 0] | 0;
   d = a[c >> 0] | 0;
  } while (!(e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24));
  c = e;
 }
 return (c & 255) - (d & 255) | 0;
}

function ob(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = c[b >> 2] | 0;
 if (!(d & 8)) {
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
  d = c[b + 44 >> 2] | 0;
  c[b + 28 >> 2] = d;
  c[b + 20 >> 2] = d;
  c[b + 16 >> 2] = d + (c[b + 48 >> 2] | 0);
  d = 0;
 } else {
  c[b >> 2] = d | 32;
  d = -1;
 }
 return d | 0;
}

function jb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 32 | 0;
 g = f;
 e = f + 20 | 0;
 c[g >> 2] = c[a + 60 >> 2];
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = b;
 c[g + 12 >> 2] = e;
 c[g + 16 >> 2] = d;
 if ((eb(ha(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function kb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 4;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (ga(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = gb(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Cb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = R(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (yb(e) | 0) == 0;
  a = nb(a, f, e) | 0;
  if (!g) ib(e);
 } else a = nb(a, f, e) | 0;
 if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;
 return d | 0;
}

function La(a) {
 a = a | 0;
 c[a + 2840 >> 2] = a + 148;
 c[a + 2848 >> 2] = 1144;
 c[a + 2852 >> 2] = a + 2440;
 c[a + 2860 >> 2] = 1280;
 c[a + 2864 >> 2] = a + 2684;
 c[a + 2872 >> 2] = 1420;
 b[a + 5816 >> 1] = 0;
 c[a + 5820 >> 2] = 0;
 c[a + 5812 >> 2] = 8;
 Ma(a);
 return;
}

function Rb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 Pb(a, b, d, e, f) | 0;
 i = g;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function Nb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 C = a << c - 32;
 return 0;
}

function Mb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 C = 0;
 return b >>> c - 32 | 0;
}

function Ib() {}
function Jb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function Eb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 c[e >> 2] = b;
 b = lb(c[2496] | 0, a, e) | 0;
 i = d;
 return b | 0;
}

function db(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = eb(ba(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function Kb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function Vb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return ma[a & 7](b | 0, c | 0, d | 0) | 0;
}

function eb(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(fb() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function Sb(a) {
 a = a | 0;
 return (a & 255) << 24 | (a >> 8 & 255) << 16 | (a >> 16 & 255) << 8 | a >>> 24 | 0;
}

function Ba(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Ca(a, b, 8, 15, 8, 0, c, d) | 0;
}

function Qb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Pb(a, b, c, d, 0) | 0;
}

function ub(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = vb(a, b, 0) | 0;
 return a | 0;
}

function fb() {
 var a = 0;
 if (!0) a = 17804; else a = c[(Tb() | 0) + 64 >> 2] | 0;
 return a | 0;
}
function qa(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Xb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return oa[a & 3](b | 0, c | 0) | 0;
}

function Db(a, b) {
 a = a | 0;
 b = b | 0;
 return (Cb(a, zb(a) | 0, 1, b) | 0) + -1 | 0;
}

function Za(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Ya(a, 15, b, c) | 0;
}

function Ua(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Gb(R(c, b) | 0) | 0;
}

function Aa(a) {
 a = a | 0;
 return a + 13 + (a >>> 12) + (a >>> 14) + (a >>> 25) | 0;
}

function Wb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 na[a & 1](b | 0, c | 0);
}

function _b(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 U(1);
 return 0;
}

function ua(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function Ub(a, b) {
 a = a | 0;
 b = b | 0;
 return la[a & 1](b | 0) | 0;
}

function hb(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) ib(a);
 return;
}

function wb(a, b) {
 a = +a;
 b = b | 0;
 return +(+xb(a, b));
}

function Yb(a, b) {
 a = a | 0;
 b = b | 0;
 pa[a & 1](b | 0);
}

function ac(a, b) {
 a = a | 0;
 b = b | 0;
 U(3);
 return 0;
}

function Va(a, b) {
 a = a | 0;
 b = b | 0;
 Hb(b);
 return;
}

function ta(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function $b(a, b) {
 a = a | 0;
 b = b | 0;
 U(2);
}

function Zb(a) {
 a = a | 0;
 U(0);
 return 0;
}

function yb(a) {
 a = a | 0;
 return 0;
}

function ib(a) {
 a = a | 0;
 return;
}

function va(a) {
 a = a | 0;
 C = a;
}

function sa(a) {
 a = a | 0;
 i = a;
}

function bc(a) {
 a = a | 0;
 U(4);
}

function wa() {
 return C | 0;
}

function ra() {
 return i | 0;
}

function Tb() {
 return 0;
}

// EMSCRIPTEN_END_FUNCS

 var la = [ Zb, db ];
 var ma = [ _b, kb, jb, Ua, gb, _b, _b, _b ];
 var na = [ $b, Va ];
 var oa = [ ac, Ea, Ga, Ia ];
 var pa = [ bc, hb ];
 return {
  _i64Subtract: Jb,
  _free: Hb,
  _main: ya,
  _i64Add: Kb,
  _pthread_self: Tb,
  _memset: Lb,
  ___udivdi3: Qb,
  _malloc: Gb,
  _memcpy: Ob,
  _llvm_bswap_i32: Sb,
  _bitshift64Lshr: Mb,
  _bitshift64Shl: Nb,
  ___uremdi3: Rb,
  ___errno_location: fb,
  ___udivmoddi4: Pb,
  runPostSets: Ib,
  stackAlloc: qa,
  stackSave: ra,
  stackRestore: sa,
  establishStackSpace: ta,
  setThrew: ua,
  setTempRet0: va,
  getTempRet0: wa,
  dynCall_ii: Ub,
  dynCall_iiii: Vb,
  dynCall_vii: Wb,
  dynCall_iii: Xb,
  dynCall_vi: Yb
 };
})


;