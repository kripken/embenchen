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
 var W = env.invoke_iiii;
 var X = env.invoke_vi;
 var Y = env.invoke_vii;
 var Z = env.invoke_ii;
 var _ = env.invoke_iiiii;
 var $ = env.invoke_iii;
 var aa = env._pthread_cleanup_pop;
 var ba = env.___syscall221;
 var ca = env._llvm_pow_f64;
 var da = env.___syscall265;
 var ea = env._signal;
 var fa = env.___syscall63;
 var ga = env._llvm_cttz_i32;
 var ha = env.___syscall40;
 var ia = env._llvm_fabs_f64;
 var ja = env._pthread_cleanup_push;
 var ka = env._difftime;
 var la = env._system;
 var ma = env.___buildEnvironment;
 var na = env._longjmp;
 var oa = env.__addDays;
 var pa = env._localtime_r;
 var qa = env._tzset;
 var ra = env.___setErrNo;
 var sa = env._sbrk;
 var ta = env.___syscall330;
 var ua = env._emscripten_memcpy_big;
 var va = env.__exit;
 var wa = env._mktime;
 var xa = env._strftime;
 var ya = env._clock;
 var za = env.__arraySum;
 var Aa = env._gmtime;
 var Ba = env._abort;
 var Ca = env._getenv;
 var Da = env.___syscall33;
 var Ea = env.___syscall54;
 var Fa = env.___unlock;
 var Ga = env.__isLeapYear;
 var Ha = env.___syscall38;
 var Ia = env.___syscall10;
 var Ja = env._gmtime_r;
 var Ka = env.___lock;
 var La = env.___syscall6;
 var Ma = env.___syscall5;
 var Na = env._time;
 var Oa = env.___syscall140;
 var Pa = env._localtime;
 var Qa = env._exit;
 var Ra = env.___syscall145;
 var Sa = env.___syscall146;
 var Ta = 0.0;
 
// EMSCRIPTEN_START_FUNCS
function ee(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
 J = i;
 i = i + 16 | 0;
 A = J;
 I = b + 60 | 0;
 c[(c[I >> 2] | 0) + 4 >> 2] = 0;
 H = b + 56 | 0;
 z = b + 4 | 0;
 a : while (1) {
  g = c[b >> 2] | 0;
  b : while (1) {
   switch (g | 0) {
   case 91:
    {
     F = 35;
     break a;
    }
   case 61:
    {
     F = 39;
     break a;
    }
   case 60:
    {
     F = 47;
     break a;
    }
   case 62:
    {
     F = 55;
     break a;
    }
   case 126:
    {
     F = 63;
     break a;
    }
   case 58:
    {
     F = 71;
     break a;
    }
   case 39:
   case 34:
    {
     r = g;
     F = 79;
     break a;
    }
   case 46:
    {
     F = 202;
     break a;
    }
   case 57:
   case 56:
   case 55:
   case 54:
   case 53:
   case 52:
   case 51:
   case 50:
   case 49:
   case 48:
    {
     m = g;
     break a;
    }
   case -1:
    {
     f = 286;
     F = 346;
     break a;
    }
   case 13:
   case 10:
    {
     F = 4;
     break b;
    }
   case 45:
    break b;
   case 11:
   case 9:
   case 12:
   case 32:
    break;
   default:
    {
     F = 324;
     break a;
    }
   }
   f = c[H >> 2] | 0;
   l = c[f >> 2] | 0;
   c[f >> 2] = l + -1;
   if (!l) g = Td(f) | 0; else {
    l = f + 4 | 0;
    g = c[l >> 2] | 0;
    c[l >> 2] = g + 1;
    g = d[g >> 0] | 0;
   }
   c[b >> 2] = g;
  }
  if ((F | 0) == 4) {
   F = 0;
   f = c[H >> 2] | 0;
   l = c[f >> 2] | 0;
   c[f >> 2] = l + -1;
   if (!l) f = Td(f) | 0; else {
    l = f + 4 | 0;
    f = c[l >> 2] | 0;
    c[l >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   switch (f | 0) {
   case 13:
   case 10:
    {
     if ((f | 0) != (g | 0)) {
      f = c[H >> 2] | 0;
      l = c[f >> 2] | 0;
      c[f >> 2] = l + -1;
      if (!l) f = Td(f) | 0; else {
       l = f + 4 | 0;
       f = c[l >> 2] | 0;
       c[l >> 2] = f + 1;
       f = d[f >> 0] | 0;
      }
      c[b >> 2] = f;
     }
     break;
    }
   default:
    {}
   }
   l = c[z >> 2] | 0;
   c[z >> 2] = l + 1;
   if ((l | 0) > 2147483643) {
    F = 14;
    break;
   } else continue;
  }
  f = c[H >> 2] | 0;
  l = c[f >> 2] | 0;
  c[f >> 2] = l + -1;
  if (!l) f = Td(f) | 0; else {
   l = f + 4 | 0;
   f = c[l >> 2] | 0;
   c[l >> 2] = f + 1;
   f = d[f >> 0] | 0;
  }
  c[b >> 2] = f;
  if ((f | 0) != 45) {
   f = 45;
   F = 346;
   break;
  }
  f = c[H >> 2] | 0;
  l = c[f >> 2] | 0;
  c[f >> 2] = l + -1;
  if (!l) f = Td(f) | 0; else {
   l = f + 4 | 0;
   f = c[l >> 2] | 0;
   c[l >> 2] = f + 1;
   f = d[f >> 0] | 0;
  }
  c[b >> 2] = f;
  do if ((f | 0) == 91) {
   f = fe(b) | 0;
   c[(c[I >> 2] | 0) + 4 >> 2] = 0;
   if ((f | 0) > -1) {
    ge(b, 0, f);
    c[(c[I >> 2] | 0) + 4 >> 2] = 0;
    continue a;
   } else {
    f = c[b >> 2] | 0;
    break;
   }
  } while (0);
  while (1) {
   switch (f | 0) {
   case -1:
   case 13:
   case 10:
    continue a;
   default:
    {}
   }
   f = c[H >> 2] | 0;
   l = c[f >> 2] | 0;
   c[f >> 2] = l + -1;
   if (!l) f = Td(f) | 0; else {
    l = f + 4 | 0;
    f = c[l >> 2] | 0;
    c[l >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
  }
 }
 switch (F | 0) {
 case 14:
  {
   ae(b, 6746);
   break;
  }
 case 35:
  {
   f = fe(b) | 0;
   if ((f | 0) > -1) {
    ge(b, e, f);
    b = 289;
    i = J;
    return b | 0;
   }
   if ((f | 0) == -1) {
    b = 91;
    i = J;
    return b | 0;
   } else be(b, 6818, 289);
   break;
  }
 case 39:
  {
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = Td(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   if ((f | 0) != 61) {
    b = 61;
    i = J;
    return b | 0;
   }
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = Td(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   b = 281;
   i = J;
   return b | 0;
  }
 case 47:
  {
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = Td(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   if ((f | 0) != 61) {
    b = 60;
    i = J;
    return b | 0;
   }
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = Td(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   b = 283;
   i = J;
   return b | 0;
  }
 case 55:
  {
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = Td(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   if ((f | 0) != 61) {
    b = 62;
    i = J;
    return b | 0;
   }
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = Td(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   b = 282;
   i = J;
   return b | 0;
  }
 case 63:
  {
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = Td(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   if ((f | 0) != 61) {
    b = 126;
    i = J;
    return b | 0;
   }
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = Td(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   b = 284;
   i = J;
   return b | 0;
  }
 case 71:
  {
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = Td(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   if ((f | 0) != 58) {
    b = 58;
    i = J;
    return b | 0;
   }
   f = c[H >> 2] | 0;
   e = c[f >> 2] | 0;
   c[f >> 2] = e + -1;
   if (!e) f = Td(f) | 0; else {
    e = f + 4 | 0;
    f = c[e >> 2] | 0;
    c[e >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   b = 285;
   i = J;
   return b | 0;
  }
 case 79:
  {
   h = c[I >> 2] | 0;
   l = h + 4 | 0;
   f = c[l >> 2] | 0;
   j = h + 8 | 0;
   k = c[j >> 2] | 0;
   do if ((f + 1 | 0) >>> 0 > k >>> 0) {
    if (k >>> 0 > 2147483645) be(b, 6665, 0);
    f = k << 1;
    g = c[b + 52 >> 2] | 0;
    if ((f | 0) == -2) yb(g); else {
     q = mb(g, c[h >> 2] | 0, k, f) | 0;
     c[h >> 2] = q;
     c[j >> 2] = f;
     p = c[l >> 2] | 0;
     break;
    }
   } else {
    p = f;
    q = c[h >> 2] | 0;
   } while (0);
   s = r & 255;
   c[l >> 2] = p + 1;
   a[q + p >> 0] = s;
   f = c[H >> 2] | 0;
   G = c[f >> 2] | 0;
   c[f >> 2] = G + -1;
   if (!G) f = Td(f) | 0; else {
    G = f + 4 | 0;
    f = c[G >> 2] | 0;
    c[G >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   c : do if ((f | 0) != (r | 0)) {
    n = b + 52 | 0;
    o = A + 4 | 0;
    p = A + 8 | 0;
    l = f;
    d : while (1) {
     e : do switch (l | 0) {
     case -1:
      {
       F = 92;
       break d;
      }
     case 13:
     case 10:
      {
       F = 93;
       break d;
      }
     case 92:
      {
       f = c[H >> 2] | 0;
       G = c[f >> 2] | 0;
       c[f >> 2] = G + -1;
       if (!G) g = Td(f) | 0; else {
        G = f + 4 | 0;
        g = c[G >> 2] | 0;
        c[G >> 2] = g + 1;
        g = d[g >> 0] | 0;
       }
       c[b >> 2] = g;
       do switch (g | 0) {
       case -1:
        {
         f = -1;
         break e;
        }
       case 97:
        {
         g = 7;
         F = 164;
         break;
        }
       case 98:
        {
         g = 8;
         F = 164;
         break;
        }
       case 102:
        {
         g = 12;
         F = 164;
         break;
        }
       case 110:
        {
         g = 10;
         F = 164;
         break;
        }
       case 114:
        {
         g = 13;
         F = 164;
         break;
        }
       case 116:
        {
         g = 9;
         F = 164;
         break;
        }
       case 118:
        {
         g = 11;
         F = 164;
         break;
        }
       case 120:
        {
         c[A >> 2] = 120;
         f = c[H >> 2] | 0;
         G = c[f >> 2] | 0;
         c[f >> 2] = G + -1;
         if (!G) f = Td(f) | 0; else {
          G = f + 4 | 0;
          f = c[G >> 2] | 0;
          c[G >> 2] = f + 1;
          f = d[f >> 0] | 0;
         }
         c[b >> 2] = f;
         c[o >> 2] = f;
         if (!(a[3999 + (f + 1) >> 0] & 16)) {
          f = 2;
          F = 108;
          break d;
         }
         g = ke(f) | 0;
         f = c[H >> 2] | 0;
         G = c[f >> 2] | 0;
         c[f >> 2] = G + -1;
         if (!G) f = Td(f) | 0; else {
          G = f + 4 | 0;
          f = c[G >> 2] | 0;
          c[G >> 2] = f + 1;
          f = d[f >> 0] | 0;
         }
         c[b >> 2] = f;
         c[p >> 2] = f;
         if (!(a[3999 + (f + 1) >> 0] & 16)) {
          f = 3;
          F = 108;
          break d;
         }
         g = (ke(f) | 0) + (g << 4) | 0;
         F = 164;
         break;
        }
       case 13:
       case 10:
        {
         f = c[H >> 2] | 0;
         G = c[f >> 2] | 0;
         c[f >> 2] = G + -1;
         if (!G) f = Td(f) | 0; else {
          G = f + 4 | 0;
          f = c[G >> 2] | 0;
          c[G >> 2] = f + 1;
          f = d[f >> 0] | 0;
         }
         c[b >> 2] = f;
         switch (f | 0) {
         case 13:
         case 10:
          {
           if ((f | 0) != (g | 0)) {
            f = c[H >> 2] | 0;
            G = c[f >> 2] | 0;
            c[f >> 2] = G + -1;
            if (!G) f = Td(f) | 0; else {
             G = f + 4 | 0;
             f = c[G >> 2] | 0;
             c[G >> 2] = f + 1;
             f = d[f >> 0] | 0;
            }
            c[b >> 2] = f;
           }
           break;
          }
         default:
          {}
         }
         G = c[z >> 2] | 0;
         c[z >> 2] = G + 1;
         if ((G | 0) > 2147483643) {
          F = 124;
          break d;
         } else g = 10;
         break;
        }
       case 39:
       case 34:
       case 92:
        {
         F = 164;
         break;
        }
       case 122:
        {
         f = c[H >> 2] | 0;
         G = c[f >> 2] | 0;
         c[f >> 2] = G + -1;
         if (!G) f = Td(f) | 0; else {
          G = f + 4 | 0;
          f = c[G >> 2] | 0;
          c[G >> 2] = f + 1;
          f = d[f >> 0] | 0;
         }
         c[b >> 2] = f;
         if (!(a[3999 + (f + 1) >> 0] & 8)) break e;
         while (1) {
          switch (f | 0) {
          case 13:
          case 10:
           {
            g = c[H >> 2] | 0;
            G = c[g >> 2] | 0;
            c[g >> 2] = G + -1;
            if (!G) g = Td(g) | 0; else {
             G = g + 4 | 0;
             g = c[G >> 2] | 0;
             c[G >> 2] = g + 1;
             g = d[g >> 0] | 0;
            }
            c[b >> 2] = g;
            switch (g | 0) {
            case 13:
            case 10:
             {
              if ((g | 0) != (f | 0)) {
               f = c[H >> 2] | 0;
               G = c[f >> 2] | 0;
               c[f >> 2] = G + -1;
               if (!G) f = Td(f) | 0; else {
                G = f + 4 | 0;
                f = c[G >> 2] | 0;
                c[G >> 2] = f + 1;
                f = d[f >> 0] | 0;
               }
               c[b >> 2] = f;
              }
              break;
             }
            default:
             f = g;
            }
            G = c[z >> 2] | 0;
            c[z >> 2] = G + 1;
            if ((G | 0) > 2147483643) {
             F = 141;
             break d;
            }
            break;
           }
          default:
           {
            f = c[H >> 2] | 0;
            G = c[f >> 2] | 0;
            c[f >> 2] = G + -1;
            if (!G) f = Td(f) | 0; else {
             G = f + 4 | 0;
             f = c[G >> 2] | 0;
             c[G >> 2] = f + 1;
             f = d[f >> 0] | 0;
            }
            c[b >> 2] = f;
           }
          }
          if (!(a[3999 + (f + 1) >> 0] & 8)) break e;
         }
        }
       default:
        {
         if (!(a[3999 + (g + 1) >> 0] & 2)) {
          F = 148;
          break d;
         }
         c[A >> 2] = g;
         g = g + -48 | 0;
         f = c[H >> 2] | 0;
         G = c[f >> 2] | 0;
         c[f >> 2] = G + -1;
         if (!G) f = Td(f) | 0; else {
          G = f + 4 | 0;
          f = c[G >> 2] | 0;
          c[G >> 2] = f + 1;
          f = d[f >> 0] | 0;
         }
         c[b >> 2] = f;
         if (!(a[3999 + (f + 1) >> 0] & 2)) f = 1; else {
          c[o >> 2] = f;
          g = (g * 10 | 0) + -48 + f | 0;
          f = c[H >> 2] | 0;
          G = c[f >> 2] | 0;
          c[f >> 2] = G + -1;
          if (!G) h = Td(f) | 0; else {
           G = f + 4 | 0;
           h = c[G >> 2] | 0;
           c[G >> 2] = h + 1;
           h = d[h >> 0] | 0;
          }
          c[b >> 2] = h;
          if (!(a[3999 + (h + 1) >> 0] & 2)) f = 2; else {
           c[p >> 2] = h;
           f = c[H >> 2] | 0;
           G = c[f >> 2] | 0;
           c[f >> 2] = G + -1;
           if (!G) f = Td(f) | 0; else {
            G = f + 4 | 0;
            f = c[G >> 2] | 0;
            c[G >> 2] = f + 1;
            f = d[f >> 0] | 0;
           }
           c[b >> 2] = f;
           f = 3;
           g = (g * 10 | 0) + -48 + h | 0;
          }
         }
         if ((g | 0) > 255) {
          F = 154;
          break d;
         }
        }
       } while (0);
       if ((F | 0) == 164) {
        F = 0;
        f = c[H >> 2] | 0;
        G = c[f >> 2] | 0;
        c[f >> 2] = G + -1;
        if (!G) f = Td(f) | 0; else {
         G = f + 4 | 0;
         f = c[G >> 2] | 0;
         c[G >> 2] = f + 1;
         f = d[f >> 0] | 0;
        }
        c[b >> 2] = f;
       }
       l = c[I >> 2] | 0;
       m = l + 4 | 0;
       h = c[m >> 2] | 0;
       j = l + 8 | 0;
       k = c[j >> 2] | 0;
       if ((h + 1 | 0) >>> 0 > k >>> 0) {
        if (k >>> 0 > 2147483645) {
         F = 171;
         break d;
        }
        h = k << 1;
        f = c[n >> 2] | 0;
        if ((h | 0) == -2) {
         F = 173;
         break d;
        }
        f = mb(f, c[l >> 2] | 0, k, h) | 0;
        c[l >> 2] = f;
        c[j >> 2] = h;
        h = c[m >> 2] | 0;
       } else f = c[l >> 2] | 0;
       c[m >> 2] = h + 1;
       a[f + h >> 0] = g;
       f = c[b >> 2] | 0;
       break;
      }
     default:
      {
       k = c[I >> 2] | 0;
       m = k + 4 | 0;
       g = c[m >> 2] | 0;
       h = k + 8 | 0;
       j = c[h >> 2] | 0;
       if ((g + 1 | 0) >>> 0 > j >>> 0) {
        if (j >>> 0 > 2147483645) {
         F = 179;
         break d;
        }
        g = j << 1;
        f = c[n >> 2] | 0;
        if ((g | 0) == -2) {
         F = 181;
         break d;
        }
        f = mb(f, c[k >> 2] | 0, j, g) | 0;
        c[k >> 2] = f;
        c[h >> 2] = g;
        g = c[m >> 2] | 0;
       } else f = c[k >> 2] | 0;
       c[m >> 2] = g + 1;
       a[f + g >> 0] = l;
       f = c[H >> 2] | 0;
       G = c[f >> 2] | 0;
       c[f >> 2] = G + -1;
       if (!G) f = Td(f) | 0; else {
        G = f + 4 | 0;
        f = c[G >> 2] | 0;
        c[G >> 2] = f + 1;
        f = d[f >> 0] | 0;
       }
       c[b >> 2] = f;
      }
     } while (0);
     if ((f | 0) == (r | 0)) break c; else l = f;
    }
    switch (F | 0) {
    case 92:
     {
      be(b, 6848, 286);
      break;
     }
    case 93:
     {
      be(b, 6848, 289);
      break;
     }
    case 108:
     {
      ie(b, A, f, 6866);
      break;
     }
    case 124:
     {
      ae(b, 6746);
      break;
     }
    case 141:
     {
      ae(b, 6746);
      break;
     }
    case 148:
     {
      ie(b, b, 1, 6893);
      break;
     }
    case 154:
     {
      ie(b, A, f, 6917);
      break;
     }
    case 171:
     {
      be(b, 6665, 0);
      break;
     }
    case 173:
     {
      yb(f);
      break;
     }
    case 179:
     {
      be(b, 6665, 0);
      break;
     }
    case 181:
     {
      yb(f);
      break;
     }
    }
   } while (0);
   h = c[I >> 2] | 0;
   j = h + 4 | 0;
   f = c[j >> 2] | 0;
   k = h + 8 | 0;
   l = c[k >> 2] | 0;
   do if ((f + 1 | 0) >>> 0 > l >>> 0) {
    if (l >>> 0 > 2147483645) be(b, 6665, 0);
    f = l << 1;
    g = c[b + 52 >> 2] | 0;
    if ((f | 0) == -2) yb(g); else {
     C = mb(g, c[h >> 2] | 0, l, f) | 0;
     c[h >> 2] = C;
     c[k >> 2] = f;
     B = c[j >> 2] | 0;
     break;
    }
   } else {
    B = f;
    C = c[h >> 2] | 0;
   } while (0);
   c[j >> 2] = B + 1;
   a[C + B >> 0] = s;
   f = c[H >> 2] | 0;
   H = c[f >> 2] | 0;
   c[f >> 2] = H + -1;
   if (!H) f = Td(f) | 0; else {
    H = f + 4 | 0;
    f = c[H >> 2] | 0;
    c[H >> 2] = f + 1;
    f = d[f >> 0] | 0;
   }
   c[b >> 2] = f;
   j = c[I >> 2] | 0;
   h = c[b + 52 >> 2] | 0;
   j = zb(h, (c[j >> 2] | 0) + 1 | 0, (c[j + 4 >> 2] | 0) + -2 | 0) | 0;
   k = h + 8 | 0;
   f = c[k >> 2] | 0;
   c[k >> 2] = f + 16;
   c[f >> 2] = j;
   c[f + 8 >> 2] = d[j + 4 >> 0] | 64;
   f = he(h, c[(c[b + 48 >> 2] | 0) + 4 >> 2] | 0, (c[k >> 2] | 0) + -16 | 0) | 0;
   g = f + 8 | 0;
   if (!(c[g >> 2] | 0)) {
    c[f >> 2] = 1;
    c[g >> 2] = 1;
    if ((c[(c[h + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(h);
   }
   c[k >> 2] = (c[k >> 2] | 0) + -16;
   c[e >> 2] = j;
   b = 289;
   i = J;
   return b | 0;
  }
 case 202:
  {
   h = c[I >> 2] | 0;
   j = h + 4 | 0;
   f = c[j >> 2] | 0;
   k = h + 8 | 0;
   l = c[k >> 2] | 0;
   do if ((f + 1 | 0) >>> 0 > l >>> 0) {
    if (l >>> 0 > 2147483645) be(b, 6665, 0);
    f = l << 1;
    g = c[b + 52 >> 2] | 0;
    if ((f | 0) == -2) yb(g); else {
     o = mb(g, c[h >> 2] | 0, l, f) | 0;
     c[h >> 2] = o;
     c[k >> 2] = f;
     n = c[j >> 2] | 0;
     break;
    }
   } else {
    n = f;
    o = c[h >> 2] | 0;
   } while (0);
   c[j >> 2] = n + 1;
   a[o + n >> 0] = 46;
   f = c[H >> 2] | 0;
   F = c[f >> 2] | 0;
   c[f >> 2] = F + -1;
   if (!F) m = Td(f) | 0; else {
    F = f + 4 | 0;
    m = c[F >> 2] | 0;
    c[F >> 2] = m + 1;
    m = d[m >> 0] | 0;
   }
   c[b >> 2] = m;
   if (m | 0) if (zl(15062, m, 2) | 0) {
    h = c[I >> 2] | 0;
    j = h + 4 | 0;
    f = c[j >> 2] | 0;
    k = h + 8 | 0;
    l = c[k >> 2] | 0;
    do if ((f + 1 | 0) >>> 0 > l >>> 0) {
     if (l >>> 0 > 2147483645) be(b, 6665, 0);
     f = l << 1;
     g = c[b + 52 >> 2] | 0;
     if ((f | 0) == -2) yb(g); else {
      s = mb(g, c[h >> 2] | 0, l, f) | 0;
      c[h >> 2] = s;
      c[k >> 2] = f;
      r = c[j >> 2] | 0;
      break;
     }
    } else {
     r = f;
     s = c[h >> 2] | 0;
    } while (0);
    c[j >> 2] = r + 1;
    a[s + r >> 0] = m;
    f = c[H >> 2] | 0;
    e = c[f >> 2] | 0;
    c[f >> 2] = e + -1;
    if (!e) m = Td(f) | 0; else {
     e = f + 4 | 0;
     m = c[e >> 2] | 0;
     c[e >> 2] = m + 1;
     m = d[m >> 0] | 0;
    }
    c[b >> 2] = m;
    if (!m) {
     b = 279;
     i = J;
     return b | 0;
    }
    if (!(zl(15062, m, 2) | 0)) {
     b = 279;
     i = J;
     return b | 0;
    }
    h = c[I >> 2] | 0;
    j = h + 4 | 0;
    f = c[j >> 2] | 0;
    k = h + 8 | 0;
    l = c[k >> 2] | 0;
    do if ((f + 1 | 0) >>> 0 > l >>> 0) {
     if (l >>> 0 > 2147483645) be(b, 6665, 0);
     f = l << 1;
     g = c[b + 52 >> 2] | 0;
     if ((f | 0) == -2) yb(g); else {
      u = mb(g, c[h >> 2] | 0, l, f) | 0;
      c[h >> 2] = u;
      c[k >> 2] = f;
      t = c[j >> 2] | 0;
      break;
     }
    } else {
     t = f;
     u = c[h >> 2] | 0;
    } while (0);
    c[j >> 2] = t + 1;
    a[u + t >> 0] = m;
    f = c[H >> 2] | 0;
    e = c[f >> 2] | 0;
    c[f >> 2] = e + -1;
    if (!e) f = Td(f) | 0; else {
     e = f + 4 | 0;
     f = c[e >> 2] | 0;
     c[e >> 2] = f + 1;
     f = d[f >> 0] | 0;
    }
    c[b >> 2] = f;
    b = 280;
    i = J;
    return b | 0;
   }
   if (!(a[3999 + (m + 1) >> 0] & 2)) {
    b = 46;
    i = J;
    return b | 0;
   }
   break;
  }
 case 324:
  {
   if (!(a[3999 + (g + 1) >> 0] & 1)) {
    f = c[H >> 2] | 0;
    e = c[f >> 2] | 0;
    c[f >> 2] = e + -1;
    if (!e) f = Td(f) | 0; else {
     e = f + 4 | 0;
     f = c[e >> 2] | 0;
     c[e >> 2] = f + 1;
     f = d[f >> 0] | 0;
    }
    c[b >> 2] = f;
    b = g;
    i = J;
    return b | 0;
   }
   o = b + 52 | 0;
   while (1) {
    l = c[I >> 2] | 0;
    n = l + 4 | 0;
    h = c[n >> 2] | 0;
    j = l + 8 | 0;
    k = c[j >> 2] | 0;
    if ((h + 1 | 0) >>> 0 > k >>> 0) {
     if (k >>> 0 > 2147483645) {
      F = 329;
      break;
     }
     h = k << 1;
     f = c[o >> 2] | 0;
     if ((h | 0) == -2) {
      F = 331;
      break;
     }
     f = mb(f, c[l >> 2] | 0, k, h) | 0;
     c[l >> 2] = f;
     c[j >> 2] = h;
     h = c[n >> 2] | 0;
    } else f = c[l >> 2] | 0;
    c[n >> 2] = h + 1;
    a[f + h >> 0] = g;
    f = c[H >> 2] | 0;
    F = c[f >> 2] | 0;
    c[f >> 2] = F + -1;
    if (!F) f = Td(f) | 0; else {
     F = f + 4 | 0;
     f = c[F >> 2] | 0;
     c[F >> 2] = f + 1;
     f = d[f >> 0] | 0;
    }
    c[b >> 2] = f;
    if (!(a[3999 + (f + 1) >> 0] & 3)) {
     F = 337;
     break;
    } else g = f;
   }
   if ((F | 0) == 329) be(b, 6665, 0); else if ((F | 0) == 331) yb(f); else if ((F | 0) == 337) {
    j = c[I >> 2] | 0;
    h = c[o >> 2] | 0;
    j = zb(h, c[j >> 2] | 0, c[j + 4 >> 2] | 0) | 0;
    k = h + 8 | 0;
    f = c[k >> 2] | 0;
    c[k >> 2] = f + 16;
    c[f >> 2] = j;
    l = j + 4 | 0;
    c[f + 8 >> 2] = d[l >> 0] | 64;
    f = he(h, c[(c[b + 48 >> 2] | 0) + 4 >> 2] | 0, (c[k >> 2] | 0) + -16 | 0) | 0;
    g = f + 8 | 0;
    if (!(c[g >> 2] | 0)) {
     c[f >> 2] = 1;
     c[g >> 2] = 1;
     if ((c[(c[h + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(h);
    }
    c[k >> 2] = (c[k >> 2] | 0) + -16;
    c[e >> 2] = j;
    b = c[l >> 2] | 0;
    f = b >>> 16;
    if ((b & 255) << 24 >> 24 != 4 | (f & 255) << 24 >> 24 == 0) {
     b = 288;
     i = J;
     return b | 0;
    }
    b = f & 255 | 256;
    i = J;
    return b | 0;
   }
   break;
  }
 case 346:
  {
   i = J;
   return f | 0;
  }
 }
 h = c[I >> 2] | 0;
 j = h + 4 | 0;
 f = c[j >> 2] | 0;
 k = h + 8 | 0;
 l = c[k >> 2] | 0;
 do if ((f + 1 | 0) >>> 0 > l >>> 0) {
  if (l >>> 0 > 2147483645) be(b, 6665, 0);
  f = l << 1;
  g = c[b + 52 >> 2] | 0;
  if ((f | 0) == -2) yb(g); else {
   w = mb(g, c[h >> 2] | 0, l, f) | 0;
   c[h >> 2] = w;
   c[k >> 2] = f;
   v = c[j >> 2] | 0;
   break;
  }
 } else {
  v = f;
  w = c[h >> 2] | 0;
 } while (0);
 c[j >> 2] = v + 1;
 a[w + v >> 0] = m;
 f = c[H >> 2] | 0;
 F = c[f >> 2] | 0;
 c[f >> 2] = F + -1;
 if (!F) f = Td(f) | 0; else {
  F = f + 4 | 0;
  f = c[F >> 2] | 0;
  c[F >> 2] = f + 1;
  f = d[f >> 0] | 0;
 }
 c[b >> 2] = f;
 if ((m | 0) == 48) if (!f) {
  f = 0;
  n = 6945;
 } else if (!(zl(6942, f, 3) | 0)) n = 6945; else {
  j = c[I >> 2] | 0;
  k = j + 4 | 0;
  g = c[k >> 2] | 0;
  l = j + 8 | 0;
  m = c[l >> 2] | 0;
  do if ((g + 1 | 0) >>> 0 > m >>> 0) {
   if (m >>> 0 > 2147483645) be(b, 6665, 0);
   g = m << 1;
   h = c[b + 52 >> 2] | 0;
   if ((g | 0) == -2) yb(h); else {
    y = mb(h, c[j >> 2] | 0, m, g) | 0;
    c[j >> 2] = y;
    c[l >> 2] = g;
    x = c[k >> 2] | 0;
    break;
   }
  } else {
   x = g;
   y = c[j >> 2] | 0;
  } while (0);
  c[k >> 2] = x + 1;
  a[y + x >> 0] = f;
  f = c[H >> 2] | 0;
  F = c[f >> 2] | 0;
  c[f >> 2] = F + -1;
  if (!F) f = Td(f) | 0; else {
   F = f + 4 | 0;
   f = c[F >> 2] | 0;
   c[F >> 2] = f + 1;
   f = d[f >> 0] | 0;
  }
  c[b >> 2] = f;
  n = 6948;
 } else n = 6945;
 o = b + 52 | 0;
 l = f;
 while (1) {
  if (!l) l = 0; else if (zl(n, l, 3) | 0) {
   k = c[I >> 2] | 0;
   m = k + 4 | 0;
   g = c[m >> 2] | 0;
   h = k + 8 | 0;
   j = c[h >> 2] | 0;
   if ((g + 1 | 0) >>> 0 > j >>> 0) {
    if (j >>> 0 > 2147483645) {
     F = 268;
     break;
    }
    g = j << 1;
    f = c[o >> 2] | 0;
    if ((g | 0) == -2) {
     F = 270;
     break;
    }
    f = mb(f, c[k >> 2] | 0, j, g) | 0;
    c[k >> 2] = f;
    c[h >> 2] = g;
    g = c[m >> 2] | 0;
   } else f = c[k >> 2] | 0;
   c[m >> 2] = g + 1;
   a[f + g >> 0] = l;
   f = c[H >> 2] | 0;
   F = c[f >> 2] | 0;
   c[f >> 2] = F + -1;
   if (!F) l = Td(f) | 0; else {
    F = f + 4 | 0;
    l = c[F >> 2] | 0;
    c[F >> 2] = l + 1;
    l = d[l >> 0] | 0;
   }
   c[b >> 2] = l;
   if (!l) l = 0; else if (zl(6951, l, 3) | 0) {
    k = c[I >> 2] | 0;
    m = k + 4 | 0;
    g = c[m >> 2] | 0;
    h = k + 8 | 0;
    j = c[h >> 2] | 0;
    if ((g + 1 | 0) >>> 0 > j >>> 0) {
     if (j >>> 0 > 2147483645) {
      F = 280;
      break;
     }
     g = j << 1;
     f = c[o >> 2] | 0;
     if ((g | 0) == -2) {
      F = 282;
      break;
     }
     f = mb(f, c[k >> 2] | 0, j, g) | 0;
     c[k >> 2] = f;
     c[h >> 2] = g;
     g = c[m >> 2] | 0;
    } else f = c[k >> 2] | 0;
    c[m >> 2] = g + 1;
    a[f + g >> 0] = l;
    f = c[H >> 2] | 0;
    F = c[f >> 2] | 0;
    c[f >> 2] = F + -1;
    if (!F) f = Td(f) | 0; else {
     F = f + 4 | 0;
     f = c[F >> 2] | 0;
     c[F >> 2] = f + 1;
     f = d[f >> 0] | 0;
    }
    c[b >> 2] = f;
    l = f;
   }
  }
  k = c[I >> 2] | 0;
  m = k + 4 | 0;
  g = c[m >> 2] | 0;
  h = k + 8 | 0;
  j = c[h >> 2] | 0;
  f = (g + 1 | 0) >>> 0 > j >>> 0;
  if (!((l | 0) == 46 ? 1 : (a[3999 + (l + 1) >> 0] & 16) != 0)) {
   F = 300;
   break;
  }
  if (f) {
   if (j >>> 0 > 2147483645) {
    F = 292;
    break;
   }
   g = j << 1;
   f = c[o >> 2] | 0;
   if ((g | 0) == -2) {
    F = 294;
    break;
   }
   f = mb(f, c[k >> 2] | 0, j, g) | 0;
   c[k >> 2] = f;
   c[h >> 2] = g;
   g = c[m >> 2] | 0;
  } else f = c[k >> 2] | 0;
  c[m >> 2] = g + 1;
  a[f + g >> 0] = l;
  f = c[H >> 2] | 0;
  F = c[f >> 2] | 0;
  c[f >> 2] = F + -1;
  if (!F) f = Td(f) | 0; else {
   F = f + 4 | 0;
   f = c[F >> 2] | 0;
   c[F >> 2] = f + 1;
   f = d[f >> 0] | 0;
  }
  c[b >> 2] = f;
  l = f;
 }
 if ((F | 0) == 268) be(b, 6665, 0); else if ((F | 0) == 270) yb(f); else if ((F | 0) == 280) be(b, 6665, 0); else if ((F | 0) == 282) yb(f); else if ((F | 0) == 292) be(b, 6665, 0); else if ((F | 0) == 294) yb(f); else if ((F | 0) == 300) {
  do if (f) {
   if (j >>> 0 > 2147483645) be(b, 6665, 0);
   g = j << 1;
   f = c[o >> 2] | 0;
   if ((g | 0) == -2) yb(f); else {
    E = mb(f, c[k >> 2] | 0, j, g) | 0;
    c[k >> 2] = E;
    c[h >> 2] = g;
    D = c[m >> 2] | 0;
    break;
   }
  } else {
   D = g;
   E = c[k >> 2] | 0;
  } while (0);
  c[m >> 2] = D + 1;
  a[E + D >> 0] = 0;
  l = b + 76 | 0;
  j = a[l >> 0] | 0;
  g = c[I >> 2] | 0;
  f = c[g >> 2] | 0;
  g = c[g + 4 >> 2] | 0;
  if (!g) g = -1; else {
   do {
    g = g + -1 | 0;
    h = f + g | 0;
    if ((a[h >> 0] | 0) == 46) a[h >> 0] = j;
   } while ((g | 0) != 0);
   g = c[I >> 2] | 0;
   f = c[g >> 2] | 0;
   g = (c[g + 4 >> 2] | 0) + -1 | 0;
  }
  if (wc(f, g, e) | 0) {
   b = 287;
   i = J;
   return b | 0;
  }
  j = a[l >> 0] | 0;
  k = a[c[($l() | 0) >> 2] >> 0] | 0;
  a[l >> 0] = k;
  g = c[I >> 2] | 0;
  f = c[g >> 2] | 0;
  g = c[g + 4 >> 2] | 0;
  if (!g) g = -1; else {
   do {
    g = g + -1 | 0;
    h = f + g | 0;
    if ((a[h >> 0] | 0) == j << 24 >> 24) a[h >> 0] = k;
   } while ((g | 0) != 0);
   g = c[I >> 2] | 0;
   f = c[g >> 2] | 0;
   g = (c[g + 4 >> 2] | 0) + -1 | 0;
  }
  if (wc(f, g, e) | 0) {
   b = 287;
   i = J;
   return b | 0;
  }
  h = a[l >> 0] | 0;
  f = c[I >> 2] | 0;
  g = c[f >> 2] | 0;
  f = c[f + 4 >> 2] | 0;
  if (!f) be(b, 6954, 287); else G = f;
  do {
   G = G + -1 | 0;
   f = g + G | 0;
   if ((a[f >> 0] | 0) == h << 24 >> 24) a[f >> 0] = 46;
  } while ((G | 0) != 0);
  be(b, 6954, 287);
 }
 return 0;
}

function Xm(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  q = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = q >>> 3;
  k = c[3801] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 15244 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[3801] = k & ~(1 << b); else {
    if (h >>> 0 < (c[3805] | 0) >>> 0) Ba();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else Ba();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  h = c[3803] | 0;
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
    d = 15244 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[3801] = k & ~(1 << b);
     l = h;
    } else {
     if (f >>> 0 < (c[3805] | 0) >>> 0) Ba();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      l = c[3803] | 0;
      break;
     } else Ba();
    } while (0);
    h = (b << 3) - q | 0;
    c[g + 4 >> 2] = q | 3;
    e = g + q | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (l | 0) {
     f = c[3806] | 0;
     b = l >>> 3;
     d = 15244 + (b << 1 << 2) | 0;
     a = c[3801] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[3801] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = f;
     c[n + 12 >> 2] = f;
     c[f + 8 >> 2] = n;
     c[f + 12 >> 2] = d;
    }
    c[3803] = h;
    c[3806] = e;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[3802] | 0;
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
    e = c[15508 + ((A | B | C | b | e) + (d >>> e) << 2) >> 2] | 0;
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
    g = c[3805] | 0;
    if (k >>> 0 < g >>> 0) Ba();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) Ba();
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
     if (b >>> 0 < g >>> 0) Ba(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     f = c[k + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) Ba();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) Ba();
     b = e + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = e;
      c[b >> 2] = f;
      o = e;
      break;
     } else Ba();
    } while (0);
    do if (h | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 15508 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[3802] = c[3802] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[3805] | 0) >>> 0) Ba();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[h + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[3805] | 0;
     if (o >>> 0 < b >>> 0) Ba();
     c[o + 24 >> 2] = h;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) Ba(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
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
     a = c[3803] | 0;
     if (a | 0) {
      f = c[3806] | 0;
      b = a >>> 3;
      e = 15244 + (b << 1 << 2) | 0;
      a = c[3801] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[3801] = a | b;
       r = e + 8 | 0;
       s = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = f;
      c[s + 12 >> 2] = f;
      c[f + 8 >> 2] = s;
      c[f + 12 >> 2] = e;
     }
     c[3803] = d;
     c[3806] = j;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) q = -1; else {
  a = a + 11 | 0;
  q = a & -8;
  k = c[3802] | 0;
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
   b = c[15508 + (j << 2) >> 2] | 0;
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
     a = c[15508 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
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
   if (k) if (h >>> 0 < ((c[3803] | 0) - q | 0) >>> 0) {
    f = c[3805] | 0;
    if (k >>> 0 < f >>> 0) Ba();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) Ba();
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
     if (b >>> 0 < f >>> 0) Ba(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) Ba();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) Ba();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else Ba();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 15508 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[3802] = c[3802] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[3805] | 0) >>> 0) Ba();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[3805] | 0;
     if (t >>> 0 < b >>> 0) Ba();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) Ba(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
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
      d = 15244 + (a << 1 << 2) | 0;
      b = c[3801] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[3801] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
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
     e = 15508 + (d << 2) | 0;
     c[j + 28 >> 2] = d;
     a = j + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[3802] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[3802] = a | b;
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
     if ((w | 0) == 145) if (b >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
      c[b >> 2] = j;
      c[j + 24 >> 2] = a;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[3805] | 0;
      if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = j;
       c[a >> 2] = j;
       c[j + 8 >> 2] = b;
       c[j + 12 >> 2] = d;
       c[j + 24 >> 2] = 0;
       break;
      } else Ba();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[3803] | 0;
 if (d >>> 0 >= q >>> 0) {
  a = d - q | 0;
  b = c[3806] | 0;
  if (a >>> 0 > 15) {
   C = b + q | 0;
   c[3806] = C;
   c[3803] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = q | 3;
  } else {
   c[3803] = 0;
   c[3806] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[3804] | 0;
 if (a >>> 0 > q >>> 0) {
  A = a - q | 0;
  c[3804] = A;
  C = c[3807] | 0;
  B = C + q | 0;
  c[3807] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = q | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[3919] | 0)) {
  c[3921] = 4096;
  c[3920] = 4096;
  c[3922] = -1;
  c[3923] = -1;
  c[3924] = 0;
  c[3912] = 0;
  v = p & -16 ^ 1431655768;
  c[p >> 2] = v;
  c[3919] = v;
 }
 h = q + 48 | 0;
 g = c[3921] | 0;
 j = q + 47 | 0;
 f = g + j | 0;
 g = 0 - g | 0;
 k = f & g;
 if (k >>> 0 <= q >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[3911] | 0;
 if (a | 0) {
  u = c[3909] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[3912] & 4)) {
  a = c[3807] | 0;
  c : do if (!a) w = 171; else {
   e = 15652;
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
   a = f - (c[3804] | 0) & g;
   if (a >>> 0 < 2147483647) {
    b = sa(a | 0) | 0;
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
   f = sa(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[3920] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[3909] | 0;
    d = b + a | 0;
    if (a >>> 0 > q >>> 0 & a >>> 0 < 2147483647) {
     e = c[3911] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = sa(a | 0) | 0;
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
    b = c[3921] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((sa(b | 0) | 0) == (-1 | 0)) {
     sa(d | 0) | 0;
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
  c[3912] = c[3912] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = sa(k | 0) | 0;
  a = sa(0) | 0;
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
  a = (c[3909] | 0) + h | 0;
  c[3909] = a;
  if (a >>> 0 > (c[3910] | 0) >>> 0) c[3910] = a;
  j = c[3807] | 0;
  do if (!j) {
   C = c[3805] | 0;
   if ((C | 0) == 0 | f >>> 0 < C >>> 0) c[3805] = f;
   c[3913] = f;
   c[3914] = h;
   c[3916] = 0;
   c[3810] = c[3919];
   c[3809] = -1;
   a = 0;
   do {
    C = 15244 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = f + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = f + C | 0;
   C = h + -40 - C | 0;
   c[3807] = B;
   c[3804] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[3808] = c[3923];
  } else {
   b = 15652;
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
    C = h - C + (c[3804] | 0) | 0;
    c[3807] = B;
    c[3804] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[3808] = c[3923];
    break;
   }
   a = c[3805] | 0;
   if (f >>> 0 < a >>> 0) {
    c[3805] = f;
    k = f;
   } else k = a;
   d = f + h | 0;
   a = 15652;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 15652;
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
     C = (c[3804] | 0) + g | 0;
     c[3804] = C;
     c[3807] = l;
     c[l + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[3806] | 0)) {
      C = (c[3803] | 0) + g | 0;
      c[3803] = C;
      c[3806] = l;
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
       b = 15244 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < k >>> 0) Ba();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        Ba();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[3801] = c[3801] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < k >>> 0) Ba();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        Ba();
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
        if (d >>> 0 < k >>> 0) Ba(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < k >>> 0) Ba();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) Ba();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else Ba();
       } while (0);
       if (!h) break;
       b = c[a + 28 >> 2] | 0;
       d = 15508 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[3802] = c[3802] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[3805] | 0) >>> 0) Ba();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[h + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[3805] | 0;
       if (A >>> 0 < e >>> 0) Ba();
       c[A + 24 >> 2] = h;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) Ba(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
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
      d = 15244 + (a << 1 << 2) | 0;
      b = c[3801] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[3801] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[3805] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       Ba();
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
     e = 15508 + (d << 2) | 0;
     c[l + 28 >> 2] = d;
     a = l + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[3802] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[3802] = a | b;
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
     if ((w | 0) == 276) if (b >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
      c[b >> 2] = l;
      c[l + 24 >> 2] = a;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     } else if ((w | 0) == 279) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[3805] | 0;
      if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = l;
       c[a >> 2] = l;
       c[l + 8 >> 2] = b;
       c[l + 12 >> 2] = d;
       c[l + 24 >> 2] = 0;
       break;
      } else Ba();
     }
    } while (0);
    C = m + 8 | 0;
    i = D;
    return C | 0;
   } else b = 15652;
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
   c[3807] = C;
   c[3804] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[3808] = c[3923];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[3913];
   c[b + 4 >> 2] = c[3914];
   c[b + 8 >> 2] = c[3915];
   c[b + 12 >> 2] = c[3916];
   c[3913] = f;
   c[3914] = h;
   c[3916] = 0;
   c[3915] = b;
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
     d = 15244 + (a << 1 << 2) | 0;
     b = c[3801] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[3801] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
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
    f = 15508 + (d << 2) | 0;
    c[j + 28 >> 2] = d;
    c[j + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[3802] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[3802] = a | b;
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
    if ((w | 0) == 302) if (b >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
     c[b >> 2] = j;
     c[j + 24 >> 2] = a;
     c[j + 12 >> 2] = j;
     c[j + 8 >> 2] = j;
     break;
    } else if ((w | 0) == 305) {
     a = d + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[3805] | 0;
     if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = j;
      c[a >> 2] = j;
      c[j + 8 >> 2] = b;
      c[j + 12 >> 2] = d;
      c[j + 24 >> 2] = 0;
      break;
     } else Ba();
    }
   }
  } while (0);
  a = c[3804] | 0;
  if (a >>> 0 > q >>> 0) {
   A = a - q | 0;
   c[3804] = A;
   C = c[3807] | 0;
   B = C + q | 0;
   c[3807] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = q | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 c[(Ok() | 0) >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function tl(e, f, g, j, l) {
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
   c[(Ok() | 0) >> 2] = 75;
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
  if (M) if (!(c[e >> 2] & 32)) ul(y, w, e) | 0;
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
   o = a[12630 + (t * 58 | 0) + o >> 0] | 0;
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
   wl(ca, r, g);
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
      o = qn(o | 0, p | 0, 3) | 0;
      p = C;
     } while (!((o | 0) == 0 & (p | 0) == 0));
    }
    if (!(I & 8)) {
     o = I;
     t = 0;
     r = 13110;
     L = 77;
    } else {
     t = W - f | 0;
     o = I;
     s = (s | 0) > (t | 0) ? s : t + 1 | 0;
     t = 0;
     r = 13110;
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
     f = ln(0, 0, f | 0, o | 0) | 0;
     o = C;
     p = ca;
     c[p >> 2] = f;
     c[p + 4 >> 2] = o;
     p = 1;
     r = 13110;
     L = 76;
     break f;
    }
    if (!(I & 2048)) {
     r = I & 1;
     p = r;
     r = (r | 0) == 0 ? 13110 : 13112;
     L = 76;
    } else {
     p = 1;
     r = 13111;
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
    r = 13110;
    L = 76;
    break;
   }
  case 99:
   {
    a[X >> 0] = c[ca >> 2];
    f = X;
    u = 1;
    w = 0;
    v = 13110;
    o = N;
    break;
   }
  case 109:
   {
    o = yl(c[(Ok() | 0) >> 2] | 0) | 0;
    L = 82;
    break;
   }
  case 115:
   {
    o = c[ca >> 2] | 0;
    o = o | 0 ? o : 15012;
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
     Al(e, 32, K, 0, I);
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
     H = 15019;
    } else if (!(I & 2048)) {
     H = I & 1;
     G = H;
     H = (H | 0) == 0 ? 15020 : 15025;
    } else {
     G = 1;
     H = 15022;
    }
    h[k >> 3] = q;
    F = c[k + 4 >> 2] & 2146435072;
    do if (F >>> 0 < 2146435072 | (F | 0) == 2146435072 & 0 < 0) {
     x = +Dl(q, fa) * 2.0;
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
      f = xl(f, ((f | 0) < 0) << 31 >> 31, $) | 0;
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
       a[o >> 0] = d[13094 + H >> 0] | v;
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
      Al(e, 32, K, r, I);
      if (!(c[e >> 2] & 32)) ul(y, w, e) | 0;
      Al(e, 48, K, r, I ^ 65536);
      o = f - Z | 0;
      if (!(c[e >> 2] & 32)) ul(ea, o, e) | 0;
      f = ba - p | 0;
      Al(e, 48, s - (o + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) ul(t, f, e) | 0;
      Al(e, 32, K, r, I ^ 8192);
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
         B = on(c[r >> 2] | 0, 0, t | 0) | 0;
         B = mn(B | 0, C | 0, o | 0, 0) | 0;
         o = C;
         A = xn(B | 0, o | 0, 1e9, 0) | 0;
         c[r >> 2] = A;
         o = un(B | 0, o | 0, 1e9, 0) | 0;
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
      r = xl(r, ((r | 0) < 0) << 31 >> 31, $) | 0;
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
     Al(e, 32, K, w, I);
     if (!(c[e >> 2] & 32)) ul(H, G, e) | 0;
     Al(e, 48, K, w, I ^ 65536);
     do if (t) {
      r = z >>> 0 > F >>> 0 ? F : z;
      o = r;
      do {
       p = xl(c[o >> 2] | 0, 0, T) | 0;
       do if ((o | 0) == (r | 0)) {
        if ((p | 0) != (T | 0)) break;
        a[V >> 0] = 48;
        p = V;
       } else {
        if (p >>> 0 <= ea >>> 0) break;
        nn(ea | 0, 48, p - Z | 0) | 0;
        do p = p + -1 | 0; while (p >>> 0 > ea >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) ul(p, U - p | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= F >>> 0);
      do if (v | 0) {
       if (c[e >> 2] & 32 | 0) break;
       ul(15062, 1, e) | 0;
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < D >>> 0) {
       p = o;
       while (1) {
        o = xl(c[p >> 2] | 0, 0, T) | 0;
        if (o >>> 0 > ea >>> 0) {
         nn(ea | 0, 48, o - Z | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > ea >>> 0);
        }
        if (!(c[e >> 2] & 32)) ul(o, (f | 0) > 9 ? 9 : f, e) | 0;
        p = p + 4 | 0;
        o = f + -9 | 0;
        if (!((f | 0) > 9 & p >>> 0 < D >>> 0)) {
         f = o;
         break;
        } else f = o;
       }
      }
      Al(e, 48, f + 9 | 0, 9, 0);
     } else {
      t = y ? D : z + 4 | 0;
      if ((f | 0) > -1) {
       s = (p | 0) == 0;
       r = z;
       do {
        o = xl(c[r >> 2] | 0, 0, T) | 0;
        if ((o | 0) == (T | 0)) {
         a[V >> 0] = 48;
         o = V;
        }
        do if ((r | 0) == (z | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) ul(o, 1, e) | 0;
         if (s & (f | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          o = p;
          break;
         }
         ul(15062, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= ea >>> 0) break;
         nn(ea | 0, 48, o + _ | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > ea >>> 0);
        } while (0);
        p = U - o | 0;
        if (!(c[e >> 2] & 32)) ul(o, (f | 0) > (p | 0) ? p : f, e) | 0;
        f = f - p | 0;
        r = r + 4 | 0;
       } while (r >>> 0 < t >>> 0 & (f | 0) > -1);
      }
      Al(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      ul(u, ba - u | 0, e) | 0;
     } while (0);
     Al(e, 32, K, w, I ^ 8192);
     f = (w | 0) < (K | 0) ? K : w;
    } else {
     t = (u & 32 | 0) != 0;
     s = q != q | 0.0 != 0.0;
     o = s ? 0 : G;
     r = o + 3 | 0;
     Al(e, 32, K, r, p);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      ul(H, o, e) | 0;
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) ul(s ? (t ? 15046 : 15050) : t ? 15038 : 15042, 3, e) | 0;
     Al(e, 32, K, r, I ^ 8192);
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
    v = 13110;
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
    r = 13110;
    L = 77;
   } else {
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[13094 + (o & 15) >> 0] | r;
     o = qn(o | 0, p | 0, 4) | 0;
     p = C;
    } while (!((o | 0) == 0 & (p | 0) == 0));
    L = ca;
    if ((t & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     o = t;
     t = 0;
     r = 13110;
     L = 77;
    } else {
     o = t;
     t = 2;
     r = 13110 + (u >> 4) | 0;
     L = 77;
    }
   }
  } else if ((L | 0) == 76) {
   f = xl(f, o, N) | 0;
   o = I;
   t = p;
   L = 77;
  } else if ((L | 0) == 82) {
   L = 0;
   I = zl(o, 0, s) | 0;
   H = (I | 0) == 0;
   f = o;
   u = H ? s : I - o | 0;
   w = 0;
   v = 13110;
   o = H ? o + s | 0 : I;
  } else if ((L | 0) == 86) {
   L = 0;
   p = 0;
   o = 0;
   t = f;
   while (1) {
    r = c[t >> 2] | 0;
    if (!r) break;
    o = Bl(ga, r) | 0;
    if ((o | 0) < 0 | o >>> 0 > (s - p | 0) >>> 0) break;
    p = o + p | 0;
    if (s >>> 0 > p >>> 0) t = t + 4 | 0; else break;
   }
   if ((o | 0) < 0) {
    m = -1;
    break a;
   }
   Al(e, 32, K, p, I);
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
     o = Bl(ga, o) | 0;
     r = o + r | 0;
     if ((r | 0) > (p | 0)) {
      f = p;
      L = 97;
      break g;
     }
     if (!(c[e >> 2] & 32)) ul(ga, o, e) | 0;
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
   Al(e, 32, K, f, I ^ 8192);
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
  Al(e, 32, o, s, p);
  if (!(c[e >> 2] & 32)) ul(v, w, e) | 0;
  Al(e, 48, o, s, p ^ 65536);
  Al(e, 48, r, t, 0);
  if (!(c[e >> 2] & 32)) ul(f, t, e) | 0;
  Al(e, 32, o, s, p ^ 8192);
  y = J;
 }
 h : do if ((L | 0) == 244) if (!e) if (!n) m = 0; else {
  m = 1;
  while (1) {
   n = c[l + (m << 2) >> 2] | 0;
   if (!n) break;
   wl(j + (m << 3) | 0, n, g);
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

function el(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0.0, h = 0, j = 0.0, k = 0, l = 0, m = 0.0, n = 0, o = 0, p = 0, q = 0.0, t = 0, u = 0, v = 0.0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0.0;
 M = i;
 i = i + 512 | 0;
 I = M;
 switch (e | 0) {
 case 0:
  {
   L = 24;
   J = -149;
   z = 4;
   break;
  }
 case 1:
  {
   L = 53;
   J = -1074;
   z = 4;
   break;
  }
 case 2:
  {
   L = 53;
   J = -1074;
   z = 4;
   break;
  }
 default:
  g = 0.0;
 }
 a : do if ((z | 0) == 4) {
  F = b + 4 | 0;
  D = b + 100 | 0;
  do {
   e = c[F >> 2] | 0;
   if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
    c[F >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = al(b) | 0;
  } while ((dl(e) | 0) != 0);
  b : do switch (e | 0) {
  case 43:
  case 45:
   {
    h = 1 - (((e | 0) == 45 & 1) << 1) | 0;
    e = c[F >> 2] | 0;
    if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
     c[F >> 2] = e + 1;
     e = d[e >> 0] | 0;
     K = h;
     break b;
    } else {
     e = al(b) | 0;
     K = h;
     break b;
    }
   }
  default:
   K = 1;
  } while (0);
  h = e;
  e = 0;
  do {
   if ((h | 32 | 0) != (a[12621 + e >> 0] | 0)) break;
   do if (e >>> 0 < 7) {
    h = c[F >> 2] | 0;
    if (h >>> 0 < (c[D >> 2] | 0) >>> 0) {
     c[F >> 2] = h + 1;
     h = d[h >> 0] | 0;
     break;
    } else {
     h = al(b) | 0;
     break;
    }
   } while (0);
   e = e + 1 | 0;
  } while (e >>> 0 < 8);
  c : do switch (e | 0) {
  case 8:
   break;
  case 3:
   {
    z = 23;
    break;
   }
  default:
   {
    k = (f | 0) != 0;
    if (k & e >>> 0 > 3) if ((e | 0) == 8) break c; else {
     z = 23;
     break c;
    }
    d : do if (!e) {
     e = 0;
     do {
      if ((h | 32 | 0) != (a[15046 + e >> 0] | 0)) break d;
      do if (e >>> 0 < 2) {
       h = c[F >> 2] | 0;
       if (h >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = h + 1;
        h = d[h >> 0] | 0;
        break;
       } else {
        h = al(b) | 0;
        break;
       }
      } while (0);
      e = e + 1 | 0;
     } while (e >>> 0 < 3);
    } while (0);
    switch (e | 0) {
    case 3:
     {
      e = c[F >> 2] | 0;
      if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
       c[F >> 2] = e + 1;
       e = d[e >> 0] | 0;
      } else e = al(b) | 0;
      if ((e | 0) == 40) e = 1; else {
       if (!(c[D >> 2] | 0)) {
        g = r;
        break a;
       }
       c[F >> 2] = (c[F >> 2] | 0) + -1;
       g = r;
       break a;
      }
      while (1) {
       h = c[F >> 2] | 0;
       if (h >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = h + 1;
        h = d[h >> 0] | 0;
       } else h = al(b) | 0;
       if (!((h + -48 | 0) >>> 0 < 10 | (h + -65 | 0) >>> 0 < 26)) if (!((h | 0) == 95 | (h + -97 | 0) >>> 0 < 26)) break;
       e = e + 1 | 0;
      }
      if ((h | 0) == 41) {
       g = r;
       break a;
      }
      h = (c[D >> 2] | 0) == 0;
      if (!h) c[F >> 2] = (c[F >> 2] | 0) + -1;
      if (!k) {
       c[(Ok() | 0) >> 2] = 22;
       _k(b, 0);
       g = 0.0;
       break a;
      }
      if (!e) {
       g = r;
       break a;
      }
      while (1) {
       e = e + -1 | 0;
       if (!h) c[F >> 2] = (c[F >> 2] | 0) + -1;
       if (!e) {
        g = r;
        break a;
       }
      }
     }
    case 0:
     {
      do if ((h | 0) == 48) {
       e = c[F >> 2] | 0;
       if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = e + 1;
        e = d[e >> 0] | 0;
       } else e = al(b) | 0;
       if ((e | 32 | 0) != 120) {
        if (!(c[D >> 2] | 0)) {
         e = 48;
         break;
        }
        c[F >> 2] = (c[F >> 2] | 0) + -1;
        e = 48;
        break;
       }
       e = c[F >> 2] | 0;
       if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = e + 1;
        e = d[e >> 0] | 0;
        k = 0;
       } else {
        e = al(b) | 0;
        k = 0;
       }
       e : while (1) {
        switch (e | 0) {
        case 46:
         {
          z = 74;
          break e;
         }
        case 48:
         break;
        default:
         {
          y = 0;
          l = 0;
          x = 0;
          h = 0;
          n = k;
          o = 0;
          w = 0;
          m = 1.0;
          k = 0;
          g = 0.0;
          break e;
         }
        }
        e = c[F >> 2] | 0;
        if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
         c[F >> 2] = e + 1;
         e = d[e >> 0] | 0;
         k = 1;
         continue;
        } else {
         e = al(b) | 0;
         k = 1;
         continue;
        }
       }
       if ((z | 0) == 74) {
        e = c[F >> 2] | 0;
        if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
         c[F >> 2] = e + 1;
         e = d[e >> 0] | 0;
        } else e = al(b) | 0;
        if ((e | 0) == 48) {
         k = 0;
         h = 0;
         do {
          e = c[F >> 2] | 0;
          if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
           c[F >> 2] = e + 1;
           e = d[e >> 0] | 0;
          } else e = al(b) | 0;
          k = mn(k | 0, h | 0, -1, -1) | 0;
          h = C;
         } while ((e | 0) == 48);
         y = 0;
         l = 0;
         x = k;
         n = 1;
         o = 1;
         w = 0;
         m = 1.0;
         k = 0;
         g = 0.0;
        } else {
         y = 0;
         l = 0;
         x = 0;
         h = 0;
         n = k;
         o = 1;
         w = 0;
         m = 1.0;
         k = 0;
         g = 0.0;
        }
       }
       while (1) {
        t = e + -48 | 0;
        p = e | 32;
        if (t >>> 0 < 10) z = 86; else {
         u = (e | 0) == 46;
         if (!(u | (p + -97 | 0) >>> 0 < 6)) {
          p = x;
          t = y;
          break;
         }
         if (u) if (!o) {
          u = l;
          h = y;
          t = y;
          o = 1;
          p = w;
          j = m;
         } else {
          p = x;
          t = y;
          e = 46;
          break;
         } else z = 86;
        }
        if ((z | 0) == 86) {
         z = 0;
         e = (e | 0) > 57 ? p + -87 | 0 : t;
         do if ((y | 0) < 0 | (y | 0) == 0 & l >>> 0 < 8) {
          p = w;
          j = m;
          k = e + (k << 4) | 0;
         } else {
          if ((y | 0) < 0 | (y | 0) == 0 & l >>> 0 < 14) {
           v = m * .0625;
           p = w;
           j = v;
           g = g + v * +(e | 0);
           break;
          }
          if ((w | 0) != 0 | (e | 0) == 0) {
           p = w;
           j = m;
          } else {
           p = 1;
           j = m;
           g = g + m * .5;
          }
         } while (0);
         l = mn(l | 0, y | 0, 1, 0) | 0;
         u = x;
         t = C;
         n = 1;
        }
        e = c[F >> 2] | 0;
        if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
         c[F >> 2] = e + 1;
         y = t;
         x = u;
         e = d[e >> 0] | 0;
         w = p;
         m = j;
         continue;
        } else {
         y = t;
         x = u;
         e = al(b) | 0;
         w = p;
         m = j;
         continue;
        }
       }
       if (!n) {
        e = (c[D >> 2] | 0) == 0;
        if (!e) c[F >> 2] = (c[F >> 2] | 0) + -1;
        if (!f) _k(b, 0); else if (!e) {
         e = c[F >> 2] | 0;
         c[F >> 2] = e + -1;
         if (o | 0) c[F >> 2] = e + -2;
        }
        g = +(K | 0) * 0.0;
        break a;
       }
       n = (o | 0) == 0;
       o = n ? l : p;
       n = n ? t : h;
       if ((t | 0) < 0 | (t | 0) == 0 & l >>> 0 < 8) {
        h = t;
        do {
         k = k << 4;
         l = mn(l | 0, h | 0, 1, 0) | 0;
         h = C;
        } while ((h | 0) < 0 | (h | 0) == 0 & l >>> 0 < 8);
       }
       if ((e | 32 | 0) == 112) {
        h = fl(b, f) | 0;
        e = C;
        if ((h | 0) == 0 & (e | 0) == -2147483648) {
         if (!f) {
          _k(b, 0);
          g = 0.0;
          break a;
         }
         if (!(c[D >> 2] | 0)) {
          h = 0;
          e = 0;
         } else {
          c[F >> 2] = (c[F >> 2] | 0) + -1;
          h = 0;
          e = 0;
         }
        }
       } else if (!(c[D >> 2] | 0)) {
        h = 0;
        e = 0;
       } else {
        c[F >> 2] = (c[F >> 2] | 0) + -1;
        h = 0;
        e = 0;
       }
       I = on(o | 0, n | 0, 2) | 0;
       I = mn(I | 0, C | 0, -32, -1) | 0;
       e = mn(I | 0, C | 0, h | 0, e | 0) | 0;
       h = C;
       if (!k) {
        g = +(K | 0) * 0.0;
        break a;
       }
       if ((h | 0) > 0 | (h | 0) == 0 & e >>> 0 > (0 - J | 0) >>> 0) {
        c[(Ok() | 0) >> 2] = 34;
        g = +(K | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
        break a;
       }
       I = J + -106 | 0;
       H = ((I | 0) < 0) << 31 >> 31;
       if ((h | 0) < (H | 0) | (h | 0) == (H | 0) & e >>> 0 < I >>> 0) {
        c[(Ok() | 0) >> 2] = 34;
        g = +(K | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break a;
       }
       if ((k | 0) > -1) {
        do {
         H = !(g >= .5);
         I = H & 1 | k << 1;
         k = I ^ 1;
         g = g + (H ? g : g + -1.0);
         e = mn(e | 0, h | 0, -1, -1) | 0;
         h = C;
        } while ((I | 0) > -1);
        l = e;
        m = g;
       } else {
        l = e;
        m = g;
       }
       e = ln(32, 0, J | 0, ((J | 0) < 0) << 31 >> 31 | 0) | 0;
       e = mn(l | 0, h | 0, e | 0, C | 0) | 0;
       J = C;
       if (0 > (J | 0) | 0 == (J | 0) & L >>> 0 > e >>> 0) if ((e | 0) < 0) {
        e = 0;
        z = 127;
       } else z = 125; else {
        e = L;
        z = 125;
       }
       if ((z | 0) == 125) if ((e | 0) < 53) z = 127; else {
        h = e;
        j = +(K | 0);
        g = 0.0;
       }
       if ((z | 0) == 127) {
        g = +(K | 0);
        h = e;
        j = g;
        g = +hl(+gl(1.0, 84 - e | 0), g);
       }
       L = (k & 1 | 0) == 0 & (m != 0.0 & (h | 0) < 32);
       g = j * (L ? 0.0 : m) + (g + j * +(((L & 1) + k | 0) >>> 0)) - g;
       if (!(g != 0.0)) c[(Ok() | 0) >> 2] = 34;
       g = +jl(g, l);
       break a;
      } else e = h; while (0);
      G = J + L | 0;
      H = 0 - G | 0;
      k = 0;
      f : while (1) {
       switch (e | 0) {
       case 46:
        {
         z = 138;
         break f;
        }
       case 48:
        break;
       default:
        {
         h = 0;
         p = 0;
         o = 0;
         break f;
        }
       }
       e = c[F >> 2] | 0;
       if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = e + 1;
        e = d[e >> 0] | 0;
        k = 1;
        continue;
       } else {
        e = al(b) | 0;
        k = 1;
        continue;
       }
      }
      if ((z | 0) == 138) {
       e = c[F >> 2] | 0;
       if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = e + 1;
        e = d[e >> 0] | 0;
       } else e = al(b) | 0;
       if ((e | 0) == 48) {
        h = 0;
        e = 0;
        while (1) {
         h = mn(h | 0, e | 0, -1, -1) | 0;
         k = C;
         e = c[F >> 2] | 0;
         if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
          c[F >> 2] = e + 1;
          e = d[e >> 0] | 0;
         } else e = al(b) | 0;
         if ((e | 0) == 48) e = k; else {
          p = k;
          k = 1;
          o = 1;
          break;
         }
        }
       } else {
        h = 0;
        p = 0;
        o = 1;
       }
      }
      c[I >> 2] = 0;
      n = e + -48 | 0;
      l = (e | 0) == 46;
      g : do if (l | n >>> 0 < 10) {
       B = I + 496 | 0;
       y = 0;
       u = 0;
       w = l;
       A = p;
       t = k;
       z = o;
       k = 0;
       l = 0;
       o = 0;
       h : while (1) {
        do if (w) if (!z) {
         h = y;
         p = u;
         z = 1;
        } else {
         p = A;
         e = y;
         n = u;
         break h;
        } else {
         w = mn(y | 0, u | 0, 1, 0) | 0;
         u = C;
         x = (e | 0) != 48;
         if ((l | 0) >= 125) {
          if (!x) {
           p = A;
           y = w;
           break;
          }
          c[B >> 2] = c[B >> 2] | 1;
          p = A;
          y = w;
          break;
         }
         p = I + (l << 2) | 0;
         if (k) n = e + -48 + ((c[p >> 2] | 0) * 10 | 0) | 0;
         c[p >> 2] = n;
         k = k + 1 | 0;
         n = (k | 0) == 9;
         p = A;
         y = w;
         t = 1;
         k = n ? 0 : k;
         l = (n & 1) + l | 0;
         o = x ? w : o;
        } while (0);
        e = c[F >> 2] | 0;
        if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
         c[F >> 2] = e + 1;
         e = d[e >> 0] | 0;
        } else e = al(b) | 0;
        n = e + -48 | 0;
        w = (e | 0) == 46;
        if (!(w | n >>> 0 < 10)) {
         n = z;
         z = 161;
         break g;
        } else A = p;
       }
       t = (t | 0) != 0;
       z = 169;
      } else {
       y = 0;
       u = 0;
       t = k;
       n = o;
       k = 0;
       l = 0;
       o = 0;
       z = 161;
      } while (0);
      do if ((z | 0) == 161) {
       B = (n | 0) == 0;
       h = B ? y : h;
       p = B ? u : p;
       t = (t | 0) != 0;
       if (!((e | 32 | 0) == 101 & t)) if ((e | 0) > -1) {
        e = y;
        n = u;
        z = 169;
        break;
       } else {
        e = y;
        n = u;
        z = 171;
        break;
       }
       n = fl(b, f) | 0;
       e = C;
       if ((n | 0) == 0 & (e | 0) == -2147483648) {
        if (!f) {
         _k(b, 0);
         g = 0.0;
         break;
        }
        if (!(c[D >> 2] | 0)) {
         n = 0;
         e = 0;
        } else {
         c[F >> 2] = (c[F >> 2] | 0) + -1;
         n = 0;
         e = 0;
        }
       }
       h = mn(n | 0, e | 0, h | 0, p | 0) | 0;
       t = y;
       p = C;
       n = u;
       z = 173;
      } while (0);
      if ((z | 0) == 169) if (!(c[D >> 2] | 0)) z = 171; else {
       c[F >> 2] = (c[F >> 2] | 0) + -1;
       if (t) {
        t = e;
        z = 173;
       } else z = 172;
      }
      if ((z | 0) == 171) if (t) {
       t = e;
       z = 173;
      } else z = 172;
      do if ((z | 0) == 172) {
       c[(Ok() | 0) >> 2] = 22;
       _k(b, 0);
       g = 0.0;
      } else if ((z | 0) == 173) {
       e = c[I >> 2] | 0;
       if (!e) {
        g = +(K | 0) * 0.0;
        break;
       }
       if (((n | 0) < 0 | (n | 0) == 0 & t >>> 0 < 10) & ((h | 0) == (t | 0) & (p | 0) == (n | 0))) if (L >>> 0 > 30 | (e >>> L | 0) == 0) {
        g = +(K | 0) * +(e >>> 0);
        break;
       }
       b = (J | 0) / -2 | 0;
       F = ((b | 0) < 0) << 31 >> 31;
       if ((p | 0) > (F | 0) | (p | 0) == (F | 0) & h >>> 0 > b >>> 0) {
        c[(Ok() | 0) >> 2] = 34;
        g = +(K | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
        break;
       }
       b = J + -106 | 0;
       F = ((b | 0) < 0) << 31 >> 31;
       if ((p | 0) < (F | 0) | (p | 0) == (F | 0) & h >>> 0 < b >>> 0) {
        c[(Ok() | 0) >> 2] = 34;
        g = +(K | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break;
       }
       if (k) {
        if ((k | 0) < 9) {
         n = I + (l << 2) | 0;
         e = c[n >> 2] | 0;
         do {
          e = e * 10 | 0;
          k = k + 1 | 0;
         } while ((k | 0) != 9);
         c[n >> 2] = e;
        }
        l = l + 1 | 0;
       }
       if ((o | 0) < 9) if ((o | 0) <= (h | 0) & (h | 0) < 18) {
        if ((h | 0) == 9) {
         g = +(K | 0) * +((c[I >> 2] | 0) >>> 0);
         break;
        }
        if ((h | 0) < 9) {
         g = +(K | 0) * +((c[I >> 2] | 0) >>> 0) / +(c[3436 + (8 - h << 2) >> 2] | 0);
         break;
        }
        b = L + 27 + (R(h, -3) | 0) | 0;
        e = c[I >> 2] | 0;
        if ((b | 0) > 30 | (e >>> b | 0) == 0) {
         g = +(K | 0) * +(e >>> 0) * +(c[3436 + (h + -10 << 2) >> 2] | 0);
         break;
        }
       }
       e = (h | 0) % 9 | 0;
       if (!e) {
        k = 0;
        e = 0;
       } else {
        t = (h | 0) > -1 ? e : e + 9 | 0;
        n = c[3436 + (8 - t << 2) >> 2] | 0;
        if (!l) {
         k = 0;
         l = 0;
        } else {
         o = 1e9 / (n | 0) | 0;
         k = 0;
         e = 0;
         p = 0;
         do {
          D = I + (p << 2) | 0;
          F = c[D >> 2] | 0;
          b = ((F >>> 0) / (n >>> 0) | 0) + e | 0;
          c[D >> 2] = b;
          e = R((F >>> 0) % (n >>> 0) | 0, o) | 0;
          b = (p | 0) == (k | 0) & (b | 0) == 0;
          p = p + 1 | 0;
          h = b ? h + -9 | 0 : h;
          k = b ? p & 127 : k;
         } while ((p | 0) != (l | 0));
         if (e) {
          c[I + (l << 2) >> 2] = e;
          l = l + 1 | 0;
         }
        }
        e = 0;
        h = 9 - t + h | 0;
       }
       i : while (1) {
        u = (h | 0) < 18;
        w = (h | 0) == 18;
        x = I + (k << 2) | 0;
        do {
         if (!u) {
          if (!w) {
           y = l;
           break i;
          }
          if ((c[x >> 2] | 0) >>> 0 >= 9007199) {
           h = 18;
           y = l;
           break i;
          }
         }
         n = 0;
         o = l + 127 | 0;
         while (1) {
          t = o & 127;
          p = I + (t << 2) | 0;
          o = on(c[p >> 2] | 0, 0, 29) | 0;
          o = mn(o | 0, C | 0, n | 0, 0) | 0;
          n = C;
          if (n >>> 0 > 0 | (n | 0) == 0 & o >>> 0 > 1e9) {
           b = un(o | 0, n | 0, 1e9, 0) | 0;
           o = xn(o | 0, n | 0, 1e9, 0) | 0;
           n = b;
          } else n = 0;
          c[p >> 2] = o;
          b = (t | 0) == (k | 0);
          l = (t | 0) != (l + 127 & 127 | 0) | b ? l : (o | 0) == 0 ? t : l;
          if (b) break; else o = t + -1 | 0;
         }
         e = e + -29 | 0;
        } while ((n | 0) == 0);
        k = k + 127 & 127;
        if ((k | 0) == (l | 0)) {
         b = l + 127 & 127;
         l = I + ((l + 126 & 127) << 2) | 0;
         c[l >> 2] = c[l >> 2] | c[I + (b << 2) >> 2];
         l = b;
        }
        c[I + (k << 2) >> 2] = n;
        h = h + 9 | 0;
       }
       j : while (1) {
        l = y + 1 & 127;
        x = I + ((y + 127 & 127) << 2) | 0;
        while (1) {
         u = (h | 0) == 18;
         w = (h | 0) > 27 ? 9 : 1;
         t = u ^ 1;
         while (1) {
          o = k & 127;
          p = (o | 0) == (y | 0);
          do if (p) z = 219; else {
           n = c[I + (o << 2) >> 2] | 0;
           if (n >>> 0 < 9007199) {
            z = 219;
            break;
           }
           if (n >>> 0 > 9007199) break;
           n = k + 1 & 127;
           if ((n | 0) == (y | 0)) {
            z = 219;
            break;
           }
           n = c[I + (n << 2) >> 2] | 0;
           if (n >>> 0 < 254740991) {
            z = 219;
            break;
           }
           if (!(n >>> 0 > 254740991 | t)) {
            h = o;
            l = y;
            break j;
           }
          } while (0);
          if ((z | 0) == 219) {
           z = 0;
           if (u) {
            z = 220;
            break j;
           }
          }
          e = e + w | 0;
          if ((k | 0) == (y | 0)) k = y; else break;
         }
         t = (1 << w) + -1 | 0;
         u = 1e9 >>> w;
         o = k;
         n = 0;
         p = k;
         while (1) {
          F = I + (p << 2) | 0;
          b = c[F >> 2] | 0;
          k = (b >>> w) + n | 0;
          c[F >> 2] = k;
          n = R(b & t, u) | 0;
          k = (p | 0) == (o | 0) & (k | 0) == 0;
          p = p + 1 & 127;
          h = k ? h + -9 | 0 : h;
          k = k ? p : o;
          if ((p | 0) == (y | 0)) break; else o = k;
         }
         if (!n) continue;
         if ((l | 0) != (k | 0)) break;
         c[x >> 2] = c[x >> 2] | 1;
        }
        c[I + (y << 2) >> 2] = n;
        y = l;
       }
       if ((z | 0) == 220) if (p) {
        c[I + (l + -1 << 2) >> 2] = 0;
        h = y;
       } else {
        h = o;
        l = y;
       }
       g = +((c[I + (h << 2) >> 2] | 0) >>> 0);
       h = k + 1 & 127;
       if ((h | 0) == (l | 0)) {
        l = k + 2 & 127;
        c[I + (l + -1 << 2) >> 2] = 0;
       }
       v = +(K | 0);
       j = v * (g * 1.0e9 + +((c[I + (h << 2) >> 2] | 0) >>> 0));
       u = e + 53 | 0;
       p = u - J | 0;
       t = (p | 0) < (L | 0);
       h = t & 1;
       o = t ? ((p | 0) < 0 ? 0 : p) : L;
       if ((o | 0) < 53) {
        N = +hl(+gl(1.0, 105 - o | 0), j);
        m = +kl(j, +gl(1.0, 53 - o | 0));
        q = N;
        g = m;
        m = N + (j - m);
       } else {
        q = 0.0;
        g = 0.0;
        m = j;
       }
       n = k + 2 & 127;
       do if ((n | 0) == (l | 0)) j = g; else {
        n = c[I + (n << 2) >> 2] | 0;
        do if (n >>> 0 < 5e8) {
         if (!n) if ((k + 3 & 127 | 0) == (l | 0)) break;
         g = v * .25 + g;
        } else {
         if (n >>> 0 > 5e8) {
          g = v * .75 + g;
          break;
         }
         if ((k + 3 & 127 | 0) == (l | 0)) {
          g = v * .5 + g;
          break;
         } else {
          g = v * .75 + g;
          break;
         }
        } while (0);
        if ((53 - o | 0) <= 1) {
         j = g;
         break;
        }
        if (+kl(g, 1.0) != 0.0) {
         j = g;
         break;
        }
        j = g + 1.0;
       } while (0);
       g = m + j - q;
       do if ((u & 2147483647 | 0) > (-2 - G | 0)) {
        if (+E(+g) >= 9007199254740992.0) {
         h = t & (o | 0) == (p | 0) ? 0 : h;
         e = e + 1 | 0;
         g = g * .5;
        }
        if ((e + 50 | 0) <= (H | 0)) if (!(j != 0.0 & (h | 0) != 0)) break;
        c[(Ok() | 0) >> 2] = 34;
       } while (0);
       g = +jl(g, e);
      } while (0);
      break a;
     }
    default:
     {
      if (c[D >> 2] | 0) c[F >> 2] = (c[F >> 2] | 0) + -1;
      c[(Ok() | 0) >> 2] = 22;
      _k(b, 0);
      g = 0.0;
      break a;
     }
    }
   }
  } while (0);
  if ((z | 0) == 23) {
   h = (c[D >> 2] | 0) == 0;
   if (!h) c[F >> 2] = (c[F >> 2] | 0) + -1;
   if ((f | 0) != 0 & e >>> 0 > 3) do {
    if (!h) c[F >> 2] = (c[F >> 2] | 0) + -1;
    e = e + -1 | 0;
   } while (e >>> 0 > 3);
  }
  g = +(K | 0) * s;
 } while (0);
 i = M;
 return +g;
}

function hc(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0.0, p = 0.0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0.0;
 P = i;
 i = i + 32 | 0;
 O = P + 24 | 0;
 N = P + 16 | 0;
 M = P + 8 | 0;
 L = P;
 C = b + 16 | 0;
 E = b + 40 | 0;
 F = b + 12 | 0;
 Q = b + 8 | 0;
 H = b + 24 | 0;
 R = b + 48 | 0;
 I = b + 20 | 0;
 J = b + 6 | 0;
 K = b + 44 | 0;
 j = c[C >> 2] | 0;
 a : while (1) {
  v = c[c[j >> 2] >> 2] | 0;
  A = v + 12 | 0;
  w = c[(c[A >> 2] | 0) + 8 >> 2] | 0;
  x = j + 24 | 0;
  y = j + 28 | 0;
  z = j + 4 | 0;
  f = c[x >> 2] | 0;
  b : while (1) {
   t = c[y >> 2] | 0;
   c[y >> 2] = t + 4;
   t = c[t >> 2] | 0;
   e = a[E >> 0] | 0;
   if (e & 12) {
    g = (c[R >> 2] | 0) + -1 | 0;
    c[R >> 2] = g;
    g = (g | 0) == 0;
    if (!((e & 4) == 0 & (g ^ 1))) {
     s = c[C >> 2] | 0;
     f = e & 255;
     if ((f & 8 | 0) == 0 | g ^ 1) q = 0; else {
      c[R >> 2] = c[K >> 2];
      q = 1;
     }
     r = s + 18 | 0;
     e = d[r >> 0] | 0;
     if (!(e & 128)) {
      if (q) gc(b, 3, -1);
      do if (!(f & 4)) {
       e = s + 28 | 0;
       f = e;
      } else {
       k = c[(c[c[s >> 2] >> 2] | 0) + 12 >> 2] | 0;
       n = s + 28 | 0;
       f = c[n >> 2] | 0;
       g = c[k + 12 >> 2] | 0;
       e = (f - g >> 2) + -1 | 0;
       k = c[k + 20 >> 2] | 0;
       l = (k | 0) == 0;
       if (l) m = 0; else m = c[k + (e << 2) >> 2] | 0;
       if (e | 0) {
        e = c[I >> 2] | 0;
        if (f >>> 0 > e >>> 0) {
         if (l) e = 0; else e = c[k + ((e - g >> 2) + -1 << 2) >> 2] | 0;
         if ((m | 0) == (e | 0)) {
          f = n;
          e = n;
          break;
         }
        }
       }
       gc(b, 2, m);
       f = n;
       e = n;
      } while (0);
      e = c[e >> 2] | 0;
      c[I >> 2] = e;
      if ((a[J >> 0] | 0) == 1) {
       B = 22;
       break a;
      }
     } else a[r >> 0] = e & 127;
     f = c[x >> 2] | 0;
    }
   }
   u = t >>> 6 & 255;
   g = f + (u << 4) | 0;
   do switch (t & 63 | 0) {
   case 31:
    {
     e = t;
     B = 147;
     break b;
    }
   case 0:
    {
     t = t >>> 23;
     q = f + (t << 4) | 0;
     r = c[q + 4 >> 2] | 0;
     s = g;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     c[f + (u << 4) + 8 >> 2] = c[f + (t << 4) + 8 >> 2];
     continue b;
    }
   case 1:
    {
     t = t >>> 14;
     q = w + (t << 4) | 0;
     r = c[q + 4 >> 2] | 0;
     s = g;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     c[f + (u << 4) + 8 >> 2] = c[w + (t << 4) + 8 >> 2];
     continue b;
    }
   case 2:
    {
     t = c[y >> 2] | 0;
     c[y >> 2] = t + 4;
     t = (c[t >> 2] | 0) >>> 6;
     q = w + (t << 4) | 0;
     r = c[q + 4 >> 2] | 0;
     s = g;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     c[f + (u << 4) + 8 >> 2] = c[w + (t << 4) + 8 >> 2];
     continue b;
    }
   case 3:
    {
     c[g >> 2] = t >>> 23;
     c[f + (u << 4) + 8 >> 2] = 1;
     if (!(t & 8372224)) continue b;
     c[y >> 2] = (c[y >> 2] | 0) + 4;
     continue b;
    }
   case 4:
    {
     e = t >>> 23;
     while (1) {
      c[g + 8 >> 2] = 0;
      if (!e) continue b; else {
       e = e + -1 | 0;
       g = g + 16 | 0;
      }
     }
    }
   case 5:
    {
     t = c[(c[v + 16 + (t >>> 23 << 2) >> 2] | 0) + 8 >> 2] | 0;
     q = t;
     r = c[q + 4 >> 2] | 0;
     s = g;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     c[f + (u << 4) + 8 >> 2] = c[t + 8 >> 2];
     continue b;
    }
   case 6:
    {
     u = t >>> 14;
     ic(b, c[(c[v + 16 + (t >>> 23 << 2) >> 2] | 0) + 8 >> 2] | 0, (u & 256 | 0) == 0 ? f + ((u & 511) << 4) | 0 : w + ((u & 255) << 4) | 0, g);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 7:
    {
     u = t >>> 14;
     ic(b, f + (t >>> 23 << 4) | 0, (u & 256 | 0) == 0 ? f + ((u & 511) << 4) | 0 : w + ((u & 255) << 4) | 0, g);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 8:
    {
     s = t >>> 23;
     t = t >>> 14;
     nc(b, c[(c[v + 16 + (u << 2) >> 2] | 0) + 8 >> 2] | 0, (s & 256 | 0) == 0 ? f + (s << 4) | 0 : w + ((s & 255) << 4) | 0, (t & 256 | 0) == 0 ? f + ((t & 511) << 4) | 0 : w + ((t & 255) << 4) | 0);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 9:
    {
     k = c[v + 16 + (t >>> 23 << 2) >> 2] | 0;
     t = c[k + 8 >> 2] | 0;
     q = g;
     r = c[q + 4 >> 2] | 0;
     s = t;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     u = f + (u << 4) + 8 | 0;
     c[t + 8 >> 2] = c[u >> 2];
     if (!(c[u >> 2] & 64)) continue b;
     e = c[g >> 2] | 0;
     if (!(a[e + 5 >> 0] & 3)) continue b;
     if (!(a[k + 5 >> 0] & 4)) continue b;
     sc(b, k, e);
     continue b;
    }
   case 10:
    {
     s = t >>> 23;
     u = t >>> 14;
     nc(b, g, (s & 256 | 0) == 0 ? f + (s << 4) | 0 : w + ((s & 255) << 4) | 0, (u & 256 | 0) == 0 ? f + ((u & 511) << 4) | 0 : w + ((u & 255) << 4) | 0);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 11:
    {
     l = t >>> 23;
     e = t >>> 14 & 511;
     k = tc(b) | 0;
     c[g >> 2] = k;
     c[f + (u << 4) + 8 >> 2] = 69;
     if (e | l | 0) {
      u = uc(l) | 0;
      qc(b, k, u, uc(e) | 0);
     }
     if ((c[(c[F >> 2] | 0) + 12 >> 2] | 0) > 0) {
      c[Q >> 2] = g + 16;
      dc(b);
      c[Q >> 2] = c[z >> 2];
     }
     f = c[x >> 2] | 0;
     continue b;
    }
   case 12:
    {
     r = t >>> 23;
     s = f + (r << 4) | 0;
     u = g + 16 | 0;
     m = s;
     n = c[m + 4 >> 2] | 0;
     q = u;
     c[q >> 2] = c[m >> 2];
     c[q + 4 >> 2] = n;
     c[u + 8 >> 2] = c[f + (r << 4) + 8 >> 2];
     u = t >>> 14;
     ic(b, s, (u & 256 | 0) == 0 ? f + ((u & 511) << 4) | 0 : w + ((u & 255) << 4) | 0, g);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 13:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      h[g >> 3] = +h[k >> 3] + +h[e >> 3];
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     vc(b, g, k, e, 6);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 14:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      h[g >> 3] = +h[k >> 3] - +h[e >> 3];
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     vc(b, g, k, e, 7);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 15:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      h[g >> 3] = +h[k >> 3] * +h[e >> 3];
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     vc(b, g, k, e, 8);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 16:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      h[g >> 3] = +h[k >> 3] / +h[e >> 3];
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     vc(b, g, k, e, 9);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 17:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      o = +h[k >> 3];
      p = +h[e >> 3];
      h[g >> 3] = o - p * +D(+(o / p));
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     vc(b, g, k, e, 10);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 18:
    {
     k = t >>> 23;
     k = (k & 256 | 0) == 0 ? f + (k << 4) | 0 : w + ((k & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[k + 8 >> 2] | 0) == 3) if ((c[e + 8 >> 2] | 0) == 3) {
      h[g >> 3] = +G(+(+h[k >> 3]), +(+h[e >> 3]));
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     }
     vc(b, g, k, e, 11);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 19:
    {
     t = t >>> 23;
     e = f + (t << 4) | 0;
     if ((c[f + (t << 4) + 8 >> 2] | 0) == 3) {
      h[g >> 3] = -+h[e >> 3];
      c[f + (u << 4) + 8 >> 2] = 3;
      continue b;
     } else {
      vc(b, g, e, e, 12);
      f = c[x >> 2] | 0;
      continue b;
     }
    }
   case 20:
    {
     e = t >>> 23;
     k = c[f + (e << 4) + 8 >> 2] | 0;
     if (!k) e = 1; else if ((k | 0) == 1) e = (c[f + (e << 4) >> 2] | 0) == 0; else e = 0;
     c[g >> 2] = e & 1;
     c[f + (u << 4) + 8 >> 2] = 1;
     continue b;
    }
   case 21:
    {
     Ac(b, g, f + (t >>> 23 << 4) | 0);
     f = c[x >> 2] | 0;
     continue b;
    }
   case 22:
    {
     g = t >>> 23;
     t = t >>> 14 & 511;
     c[Q >> 2] = f + (t << 4) + 16;
     Ub(b, 1 - g + t | 0);
     t = c[x >> 2] | 0;
     e = t + (u << 4) | 0;
     f = t + (g << 4) | 0;
     q = f;
     r = c[q + 4 >> 2] | 0;
     s = e;
     c[s >> 2] = c[q >> 2];
     c[s + 4 >> 2] = r;
     c[t + (u << 4) + 8 >> 2] = c[t + (g << 4) + 8 >> 2];
     if ((c[(c[F >> 2] | 0) + 12 >> 2] | 0) > 0) {
      c[Q >> 2] = u >>> 0 >= g >>> 0 ? e + 16 | 0 : f;
      dc(b);
      e = c[z >> 2] | 0;
      c[Q >> 2] = e;
     } else e = c[z >> 2] | 0;
     f = c[x >> 2] | 0;
     c[Q >> 2] = e;
     continue b;
    }
   case 23:
    {
     if (u | 0) Pb(b, (c[x >> 2] | 0) + (u << 4) + -16 | 0);
     c[y >> 2] = (c[y >> 2] | 0) + ((t >>> 14) + -131071 << 2);
     continue b;
    }
   case 24:
    {
     g = t >>> 23;
     g = (g & 256 | 0) == 0 ? f + (g << 4) | 0 : w + ((g & 255) << 4) | 0;
     e = t >>> 14;
     e = (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0;
     if ((c[g + 8 >> 2] | 0) == (c[e + 8 >> 2] | 0)) f = (lc(b, g, e) | 0) != 0; else f = 0;
     e = c[y >> 2] | 0;
     if ((f & 1 | 0) == (u | 0)) {
      g = c[e >> 2] | 0;
      f = g >>> 6 & 255;
      if (f) {
       Pb(b, (c[x >> 2] | 0) + (f << 4) + -16 | 0);
       e = c[y >> 2] | 0;
      }
      e = e + ((g >>> 14) + -131070 << 2) | 0;
     } else e = e + 4 | 0;
     c[y >> 2] = e;
     f = c[x >> 2] | 0;
     continue b;
    }
   case 25:
    {
     s = t >>> 23;
     e = t >>> 14;
     u = (Cc(b, (s & 256 | 0) == 0 ? f + (s << 4) | 0 : w + ((s & 255) << 4) | 0, (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0) | 0) == (u | 0);
     e = c[y >> 2] | 0;
     if (u) {
      g = c[e >> 2] | 0;
      f = g >>> 6 & 255;
      if (f) {
       Pb(b, (c[x >> 2] | 0) + (f << 4) + -16 | 0);
       e = c[y >> 2] | 0;
      }
      e = e + ((g >>> 14) + -131070 << 2) | 0;
     } else e = e + 4 | 0;
     c[y >> 2] = e;
     f = c[x >> 2] | 0;
     continue b;
    }
   case 26:
    {
     s = t >>> 23;
     e = t >>> 14;
     u = (Ec(b, (s & 256 | 0) == 0 ? f + (s << 4) | 0 : w + ((s & 255) << 4) | 0, (e & 256 | 0) == 0 ? f + ((e & 511) << 4) | 0 : w + ((e & 255) << 4) | 0) | 0) == (u | 0);
     e = c[y >> 2] | 0;
     if (u) {
      g = c[e >> 2] | 0;
      f = g >>> 6 & 255;
      if (f) {
       Pb(b, (c[x >> 2] | 0) + (f << 4) + -16 | 0);
       e = c[y >> 2] | 0;
      }
      e = e + ((g >>> 14) + -131070 << 2) | 0;
     } else e = e + 4 | 0;
     c[y >> 2] = e;
     f = c[x >> 2] | 0;
     continue b;
    }
   case 27:
    {
     e = c[f + (u << 4) + 8 >> 2] | 0;
     k = (e | 0) == 0;
     if (!(t & 8372224)) {
      if (!k) if ((e | 0) == 1) {
       if (c[g >> 2] | 0) B = 115;
      } else B = 115;
     } else if (k) B = 115; else if ((e | 0) == 1) if (!(c[g >> 2] | 0)) B = 115;
     if ((B | 0) == 115) {
      B = 0;
      c[y >> 2] = (c[y >> 2] | 0) + 4;
      continue b;
     }
     e = c[y >> 2] | 0;
     k = c[e >> 2] | 0;
     g = k >>> 6 & 255;
     if (g) {
      Pb(b, (c[x >> 2] | 0) + (g << 4) + -16 | 0);
      e = c[y >> 2] | 0;
     }
     c[y >> 2] = e + ((k >>> 14) + -131070 << 2);
     continue b;
    }
   case 28:
    {
     l = t >>> 23;
     k = f + (l << 4) | 0;
     l = c[f + (l << 4) + 8 >> 2] | 0;
     e = (l | 0) == 0;
     if (!(t & 8372224)) if (e) B = 127; else if ((l | 0) == 1) if (!(c[k >> 2] | 0)) B = 127; else B = 126; else B = 126; else if (e) B = 126; else if ((l | 0) == 1) if (!(c[k >> 2] | 0)) B = 126; else B = 127; else B = 127;
     if ((B | 0) == 126) {
      B = 0;
      e = (c[y >> 2] | 0) + 4 | 0;
     } else if ((B | 0) == 127) {
      B = 0;
      t = k;
      k = c[t + 4 >> 2] | 0;
      e = g;
      c[e >> 2] = c[t >> 2];
      c[e + 4 >> 2] = k;
      c[f + (u << 4) + 8 >> 2] = l;
      e = c[y >> 2] | 0;
      k = c[e >> 2] | 0;
      g = k >>> 6 & 255;
      if (g) {
       Pb(b, (c[x >> 2] | 0) + (g << 4) + -16 | 0);
       e = c[y >> 2] | 0;
      }
      e = e + ((k >>> 14) + -131070 << 2) | 0;
     }
     c[y >> 2] = e;
     continue b;
    }
   case 29:
    {
     f = t >>> 23;
     e = t >>> 14 & 511;
     if (f | 0) c[Q >> 2] = g + (f << 4);
     if (!(bc(b, g, e + -1 | 0) | 0)) {
      B = 137;
      break b;
     }
     if (e | 0) c[Q >> 2] = c[z >> 2];
     f = c[x >> 2] | 0;
     continue b;
    }
   case 30:
    {
     e = t >>> 23;
     if (e | 0) c[Q >> 2] = g + (e << 4);
     if (!(bc(b, g, -1) | 0)) {
      B = 142;
      break b;
     }
     f = c[x >> 2] | 0;
     continue b;
    }
   case 32:
    {
     S = +h[g + 32 >> 3];
     o = S + +h[g >> 3];
     p = +h[g + 16 >> 3];
     if (S > 0.0) {
      if (!(o <= p)) continue b;
     } else if (!(p <= o)) continue b;
     c[y >> 2] = (c[y >> 2] | 0) + ((t >>> 14) + -131071 << 2);
     h[g >> 3] = o;
     c[f + (u << 4) + 8 >> 2] = 3;
     u = g + 48 | 0;
     h[u >> 3] = o;
     c[u + 8 >> 2] = 3;
     continue b;
    }
   case 33:
    {
     l = g + 16 | 0;
     n = g + 32 | 0;
     m = f + (u << 4) + 8 | 0;
     e = c[m >> 2] | 0;
     if ((e | 0) != 3) {
      if ((e & 15 | 0) != 4) {
       B = 162;
       break a;
      }
      u = c[g >> 2] | 0;
      if (!(wc(u + 16 | 0, c[u + 12 >> 2] | 0, L) | 0)) {
       B = 162;
       break a;
      }
      h[g >> 3] = +h[L >> 3];
      c[m >> 2] = 3;
     }
     e = l + 8 | 0;
     k = c[e >> 2] | 0;
     if ((k | 0) != 3) {
      if ((k & 15 | 0) != 4) {
       B = 167;
       break a;
      }
      u = c[l >> 2] | 0;
      if (!(wc(u + 16 | 0, c[u + 12 >> 2] | 0, L) | 0)) {
       B = 167;
       break a;
      }
      h[l >> 3] = +h[L >> 3];
      c[e >> 2] = 3;
     }
     e = n + 8 | 0;
     k = c[e >> 2] | 0;
     if ((k | 0) != 3) {
      if ((k & 15 | 0) != 4) {
       B = 172;
       break a;
      }
      u = c[n >> 2] | 0;
      if (!(wc(u + 16 | 0, c[u + 12 >> 2] | 0, L) | 0)) {
       B = 172;
       break a;
      }
      h[n >> 3] = +h[L >> 3];
      c[e >> 2] = 3;
     }
     h[g >> 3] = +h[g >> 3] - +h[n >> 3];
     c[m >> 2] = 3;
     c[y >> 2] = (c[y >> 2] | 0) + ((t >>> 14) + -131071 << 2);
     continue b;
    }
   case 34:
    {
     k = g + 48 | 0;
     r = g + 32 | 0;
     s = k + 32 | 0;
     q = r;
     n = c[q + 4 >> 2] | 0;
     m = s;
     c[m >> 2] = c[q >> 2];
     c[m + 4 >> 2] = n;
     c[s + 8 >> 2] = c[r + 8 >> 2];
     s = g + 16 | 0;
     r = k + 16 | 0;
     m = s;
     n = c[m + 4 >> 2] | 0;
     q = r;
     c[q >> 2] = c[m >> 2];
     c[q + 4 >> 2] = n;
     c[r + 8 >> 2] = c[s + 8 >> 2];
     r = g;
     s = c[r + 4 >> 2] | 0;
     g = k;
     c[g >> 2] = c[r >> 2];
     c[g + 4 >> 2] = s;
     c[k + 8 >> 2] = c[f + (u << 4) + 8 >> 2];
     c[Q >> 2] = k + 48;
     sb(b, k, t >>> 14 & 511, 1);
     u = c[x >> 2] | 0;
     c[Q >> 2] = c[z >> 2];
     g = c[y >> 2] | 0;
     c[y >> 2] = g + 4;
     g = c[g >> 2] | 0;
     f = u;
     k = g;
     g = u + ((g >>> 6 & 255) << 4) | 0;
     break;
    }
   case 35:
    {
     k = t;
     break;
    }
   case 36:
    {
     e = t >>> 23;
     k = t >>> 14 & 511;
     if (!e) e = ((c[Q >> 2] | 0) - g >> 4) + -1 | 0;
     if (!k) {
      k = c[y >> 2] | 0;
      c[y >> 2] = k + 4;
      k = (c[k >> 2] | 0) >>> 6;
     }
     n = c[g >> 2] | 0;
     k = e + -50 + (k * 50 | 0) | 0;
     if ((k | 0) > (c[n + 28 >> 2] | 0)) Gc(b, n, k);
     if ((e | 0) > 0) {
      m = n + 5 | 0;
      while (1) {
       l = g + (e << 4) | 0;
       Hc(b, n, k, l);
       k = k + -1 | 0;
       if (c[l + 8 >> 2] & 64 | 0) if (a[(c[l >> 2] | 0) + 5 >> 0] & 3) if (a[m >> 0] & 4) rc(b, n);
       if ((e | 0) <= 1) break; else e = e + -1 | 0;
      }
     }
     c[Q >> 2] = c[z >> 2];
     continue b;
    }
   case 37:
    {
     r = c[(c[(c[A >> 2] | 0) + 16 >> 2] | 0) + (t >>> 14 << 2) >> 2] | 0;
     s = r + 32 | 0;
     k = c[s >> 2] | 0;
     n = c[r + 40 >> 2] | 0;
     q = c[r + 28 >> 2] | 0;
     c : do if (!k) B = 199; else {
      if ((n | 0) > 0) {
       l = k + 16 | 0;
       m = 0;
       do {
        e = d[q + (m << 3) + 5 >> 0] | 0;
        if (!(a[q + (m << 3) + 4 >> 0] | 0)) e = c[(c[v + 16 + (e << 2) >> 2] | 0) + 8 >> 2] | 0; else e = f + (e << 4) | 0;
        if ((c[(c[l + (m << 2) >> 2] | 0) + 8 >> 2] | 0) != (e | 0)) {
         B = 199;
         break c;
        }
        m = m + 1 | 0;
       } while ((m | 0) < (n | 0));
      }
      c[g >> 2] = k;
      c[f + (u << 4) + 8 >> 2] = 70;
     } while (0);
     if ((B | 0) == 199) {
      B = 0;
      m = Ic(b, n) | 0;
      c[m + 12 >> 2] = r;
      c[g >> 2] = m;
      c[f + (u << 4) + 8 >> 2] = 70;
      if ((n | 0) > 0) {
       e = m + 16 | 0;
       l = 0;
       do {
        k = d[q + (l << 3) + 5 >> 0] | 0;
        if (!(a[q + (l << 3) + 4 >> 0] | 0)) c[e + (l << 2) >> 2] = c[v + 16 + (k << 2) >> 2]; else c[e + (l << 2) >> 2] = Jc(b, f + (k << 4) | 0) | 0;
        l = l + 1 | 0;
       } while ((l | 0) != (n | 0));
      }
      if (a[r + 5 >> 0] & 4) Kc(b, r, m);
      c[s >> 2] = m;
     }
     if ((c[(c[F >> 2] | 0) + 12 >> 2] | 0) > 0) {
      c[Q >> 2] = g + 16;
      dc(b);
      c[Q >> 2] = c[z >> 2];
     }
     f = c[x >> 2] | 0;
     continue b;
    }
   case 38:
    {
     t = t >>> 23;
     e = t + -1 | 0;
     k = (f - (c[j >> 2] | 0) >> 4) - (d[(c[A >> 2] | 0) + 76 >> 0] | 0) | 0;
     n = k + -1 | 0;
     if (!t) {
      if (((c[H >> 2] | 0) - (c[Q >> 2] | 0) >> 4 | 0) < (k | 0)) vb(b, n);
      f = c[x >> 2] | 0;
      g = f + (u << 4) | 0;
      c[Q >> 2] = g + (n << 4);
      e = n;
     }
     if ((e | 0) <= 0) continue b;
     m = f + (1 - k << 4) | 0;
     k = 0;
     while (1) {
      if ((k | 0) < (n | 0)) {
       l = m + (k << 4) | 0;
       s = l;
       t = c[s + 4 >> 2] | 0;
       u = g + (k << 4) | 0;
       c[u >> 2] = c[s >> 2];
       c[u + 4 >> 2] = t;
       l = c[l + 8 >> 2] | 0;
      } else l = 0;
      c[g + (k << 4) + 8 >> 2] = l;
      k = k + 1 | 0;
      if ((k | 0) == (e | 0)) continue b;
     }
    }
   default:
    continue b;
   } while (0);
   e = c[g + 24 >> 2] | 0;
   if (!e) continue;
   s = g + 16 | 0;
   t = c[s + 4 >> 2] | 0;
   u = g;
   c[u >> 2] = c[s >> 2];
   c[u + 4 >> 2] = t;
   c[g + 8 >> 2] = e;
   c[y >> 2] = (c[y >> 2] | 0) + ((k >>> 14) + -131071 << 2);
  }
  if ((B | 0) == 137) {
   B = 0;
   j = c[C >> 2] | 0;
   A = j + 18 | 0;
   a[A >> 0] = d[A >> 0] | 4;
   continue;
  } else if ((B | 0) == 142) {
   B = 0;
   g = c[C >> 2] | 0;
   j = c[g + 8 >> 2] | 0;
   k = c[g >> 2] | 0;
   l = c[j >> 2] | 0;
   m = g + 24 | 0;
   n = (c[m >> 2] | 0) + (d[(c[(c[k >> 2] | 0) + 12 >> 2] | 0) + 76 >> 0] << 4) | 0;
   if ((c[(c[A >> 2] | 0) + 56 >> 2] | 0) > 0) Pb(b, c[j + 24 >> 2] | 0);
   if (k >>> 0 < n >>> 0) {
    e = k;
    f = 0;
    do {
     y = e;
     z = c[y + 4 >> 2] | 0;
     A = l + (f << 4) | 0;
     c[A >> 2] = c[y >> 2];
     c[A + 4 >> 2] = z;
     c[l + (f << 4) + 8 >> 2] = c[k + (f << 4) + 8 >> 2];
     f = f + 1 | 0;
     e = k + (f << 4) | 0;
    } while (e >>> 0 < n >>> 0);
   }
   A = k;
   c[j + 24 >> 2] = l + ((c[m >> 2] | 0) - A >> 4 << 4);
   A = l + ((c[Q >> 2] | 0) - A >> 4 << 4) | 0;
   c[Q >> 2] = A;
   c[j + 4 >> 2] = A;
   c[j + 28 >> 2] = c[g + 28 >> 2];
   A = j + 18 | 0;
   a[A >> 0] = d[A >> 0] | 64;
   c[C >> 2] = j;
   continue;
  } else if ((B | 0) == 147) {
   B = 0;
   e = e >>> 23;
   if (e | 0) c[Q >> 2] = g + (e << 4) + -16;
   if ((c[(c[A >> 2] | 0) + 56 >> 2] | 0) > 0) Pb(b, f);
   f = Fc(b, g) | 0;
   if (!(a[j + 18 >> 0] & 4)) {
    B = 221;
    break;
   }
   e = c[C >> 2] | 0;
   if (!f) {
    j = e;
    continue;
   }
   c[Q >> 2] = c[e + 4 >> 2];
   j = e;
   continue;
  }
 }
 if ((B | 0) == 22) {
  if (!q) {
   P = e + -4 | 0;
   c[f >> 2] = P;
   P = a[r >> 0] | 0;
   P = P & 255;
   P = P | 128;
   P = P & 255;
   a[r >> 0] = P;
   P = c[Q >> 2] | 0;
   P = P + -16 | 0;
   c[s >> 2] = P;
   wb(b, 1);
  }
  c[R >> 2] = 1;
  R = e + -4 | 0;
  c[f >> 2] = R;
  R = a[r >> 0] | 0;
  R = R & 255;
  R = R | 128;
  R = R & 255;
  a[r >> 0] = R;
  R = c[Q >> 2] | 0;
  R = R + -16 | 0;
  c[s >> 2] = R;
  wb(b, 1);
 } else if ((B | 0) == 162) tb(b, 4952, M); else if ((B | 0) == 167) tb(b, 4989, N); else if ((B | 0) == 172) tb(b, 5018, O); else if ((B | 0) == 221) {
  i = P;
  return;
 }
}

function le(e) {
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0;
 G = i;
 i = i + 192 | 0;
 u = G + 184 | 0;
 q = G + 168 | 0;
 x = G + 152 | 0;
 n = G + 136 | 0;
 o = G + 120 | 0;
 p = G + 104 | 0;
 m = G + 88 | 0;
 l = G + 80 | 0;
 B = G + 48 | 0;
 v = G + 24 | 0;
 r = G;
 A = e + 4 | 0;
 C = c[A >> 2] | 0;
 E = e + 48 | 0;
 y = c[E >> 2] | 0;
 F = e + 52 | 0;
 k = (c[F >> 2] | 0) + 38 | 0;
 D = (b[k >> 1] | 0) + 1 << 16 >> 16;
 b[k >> 1] = D;
 if ((D & 65535) > 200) {
  j = y + 12 | 0;
  k = c[(c[j >> 2] | 0) + 52 >> 2] | 0;
  h = c[(c[y >> 2] | 0) + 64 >> 2] | 0;
  if (!h) {
   H = 6600;
   c[m >> 2] = 6971;
   D = m + 4 | 0;
   c[D >> 2] = 200;
   D = m + 8 | 0;
   c[D >> 2] = H;
   D = $b(k, 6614, m) | 0;
   H = c[j >> 2] | 0;
   ae(H, D);
  }
  c[l >> 2] = h;
  D = $b(k, 6580, l) | 0;
  c[m >> 2] = 6971;
  H = m + 4 | 0;
  c[H >> 2] = 200;
  H = m + 8 | 0;
  c[H >> 2] = D;
  H = $b(k, 6614, m) | 0;
  D = c[j >> 2] | 0;
  ae(D, H);
 }
 D = e + 16 | 0;
 do switch (c[D >> 2] | 0) {
 case 59:
  {
   de(e);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 case 267:
  {
   c[v >> 2] = -1;
   me(e, v);
   a : while (1) {
    f = c[D >> 2] | 0;
    switch (f | 0) {
    case 260:
     {
      z = 10;
      break a;
     }
    case 261:
     break;
    default:
     break a;
    }
    me(e, v);
   }
   if ((z | 0) == 10) {
    de(e);
    g = c[E >> 2] | 0;
    a[B + 10 >> 0] = 0;
    a[B + 8 >> 0] = a[g + 46 >> 0] | 0;
    H = c[(c[g + 12 >> 2] | 0) + 64 >> 2] | 0;
    b[B + 4 >> 1] = c[H + 28 >> 2];
    b[B + 6 >> 1] = c[H + 16 >> 2];
    a[B + 9 >> 0] = 0;
    H = g + 16 | 0;
    c[B >> 2] = c[H >> 2];
    c[H >> 2] = B;
    b : do {
     f = c[D >> 2] | 0;
     switch (f | 0) {
     case 277:
     case 286:
     case 262:
     case 261:
     case 260:
      break b;
     default:
      {}
     }
     le(e);
    } while ((f | 0) != 274);
    Qe(g);
    f = c[D >> 2] | 0;
   }
   if ((f | 0) == 262) {
    de(e);
    Te(y, c[v >> 2] | 0);
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   if ((c[A >> 2] | 0) == (C | 0)) Be(e, 262); else {
    H = c[F >> 2] | 0;
    F = Ce(e, 262) | 0;
    G = Ce(e, 267) | 0;
    c[p >> 2] = F;
    c[p + 4 >> 2] = G;
    c[p + 8 >> 2] = C;
    ae(e, $b(H, 7159, p) | 0);
   }
   break;
  }
 case 278:
  {
   de(e);
   h = nf(y) | 0;
   ne(e, B, 0) | 0;
   if ((c[B >> 2] | 0) == 1) c[B >> 2] = 3;
   gf(c[E >> 2] | 0, B);
   j = c[B + 20 >> 2] | 0;
   a[v + 10 >> 0] = 1;
   a[v + 8 >> 0] = a[y + 46 >> 0] | 0;
   H = c[(c[y + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[v + 4 >> 1] = c[H + 28 >> 2];
   b[v + 6 >> 1] = c[H + 16 >> 2];
   a[v + 9 >> 0] = 0;
   H = y + 16 | 0;
   c[v >> 2] = c[H >> 2];
   c[H >> 2] = v;
   if ((c[D >> 2] | 0) != 259) Be(e, 259);
   de(e);
   g = c[E >> 2] | 0;
   a[B + 10 >> 0] = 0;
   a[B + 8 >> 0] = a[g + 46 >> 0] | 0;
   H = c[(c[g + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[B + 4 >> 1] = c[H + 28 >> 2];
   b[B + 6 >> 1] = c[H + 16 >> 2];
   a[B + 9 >> 0] = 0;
   H = g + 16 | 0;
   c[B >> 2] = c[H >> 2];
   c[H >> 2] = B;
   c : do {
    f = c[D >> 2] | 0;
    switch (f | 0) {
    case 277:
    case 286:
    case 262:
    case 261:
    case 260:
     break c;
    default:
     {}
    }
    le(e);
   } while ((f | 0) != 274);
   Qe(g);
   Xe(y, Re(y) | 0, h);
   if ((c[D >> 2] | 0) == 262) {
    de(e);
    Qe(y);
    Te(y, j);
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   if ((c[A >> 2] | 0) == (C | 0)) Be(e, 262); else {
    H = c[F >> 2] | 0;
    F = Ce(e, 262) | 0;
    G = Ce(e, 278) | 0;
    c[o >> 2] = F;
    c[o + 4 >> 2] = G;
    c[o + 8 >> 2] = C;
    ae(e, $b(H, 7159, o) | 0);
   }
   break;
  }
 case 259:
  {
   de(e);
   g = c[E >> 2] | 0;
   a[B + 10 >> 0] = 0;
   a[B + 8 >> 0] = a[g + 46 >> 0] | 0;
   H = c[(c[g + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[B + 4 >> 1] = c[H + 28 >> 2];
   b[B + 6 >> 1] = c[H + 16 >> 2];
   a[B + 9 >> 0] = 0;
   H = g + 16 | 0;
   c[B >> 2] = c[H >> 2];
   c[H >> 2] = B;
   d : do {
    f = c[D >> 2] | 0;
    switch (f | 0) {
    case 277:
    case 286:
    case 262:
    case 261:
    case 260:
     break d;
    default:
     {}
    }
    le(e);
   } while ((f | 0) != 274);
   Qe(g);
   if ((c[D >> 2] | 0) == 262) {
    de(e);
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   if ((c[A >> 2] | 0) == (C | 0)) Be(e, 262); else {
    H = c[F >> 2] | 0;
    F = Ce(e, 262) | 0;
    G = Ce(e, 259) | 0;
    c[n >> 2] = F;
    c[n + 4 >> 2] = G;
    c[n + 8 >> 2] = C;
    ae(e, $b(H, 7159, n) | 0);
   }
   break;
  }
 case 264:
  {
   a[v + 10 >> 0] = 1;
   a[v + 8 >> 0] = a[y + 46 >> 0] | 0;
   H = c[(c[y + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[v + 4 >> 1] = c[H + 28 >> 2];
   b[v + 6 >> 1] = c[H + 16 >> 2];
   a[v + 9 >> 0] = 0;
   H = y + 16 | 0;
   c[v >> 2] = c[H >> 2];
   c[H >> 2] = v;
   de(e);
   if ((c[D >> 2] | 0) != 288) Be(e, 288);
   h = e + 24 | 0;
   j = c[h >> 2] | 0;
   de(e);
   switch (c[D >> 2] | 0) {
   case 61:
    {
     f = c[E >> 2] | 0;
     g = f + 48 | 0;
     h = d[g >> 0] | 0;
     Le(e, Ke(e, 7481, 11) | 0);
     Le(e, Ke(e, 7493, 11) | 0);
     Le(e, Ke(e, 7505, 10) | 0);
     Le(e, j);
     if ((c[D >> 2] | 0) != 61) Be(e, 61);
     de(e);
     ne(e, B, 0) | 0;
     Ae(c[E >> 2] | 0, B);
     if ((c[D >> 2] | 0) != 44) Be(e, 44);
     de(e);
     ne(e, B, 0) | 0;
     Ae(c[E >> 2] | 0, B);
     if ((c[D >> 2] | 0) == 44) {
      de(e);
      ne(e, B, 0) | 0;
      Ae(c[E >> 2] | 0, B);
     } else {
      H = d[g >> 0] | 0;
      pf(f, H, of(f, 1.0) | 0) | 0;
      Me(f, 1);
     }
     qf(e, h, C, 1, 1);
     break;
    }
   case 268:
   case 44:
    {
     k = c[E >> 2] | 0;
     l = d[k + 48 >> 0] | 0;
     Le(e, Ke(e, 7516, 15) | 0);
     Le(e, Ke(e, 7532, 11) | 0);
     Le(e, Ke(e, 7544, 13) | 0);
     Le(e, j);
     f = c[D >> 2] | 0;
     do if ((f | 0) == 44) {
      g = 4;
      while (1) {
       de(e);
       if ((c[D >> 2] | 0) != 288) {
        z = 52;
        break;
       }
       f = c[h >> 2] | 0;
       de(e);
       Le(e, f);
       f = c[D >> 2] | 0;
       if ((f | 0) == 44) g = g + 1 | 0; else {
        z = 54;
        break;
       }
      }
      if ((z | 0) == 52) Be(e, 288); else if ((z | 0) == 54) {
       s = f;
       w = g + -2 | 0;
       break;
      }
     } else {
      s = f;
      w = 1;
     } while (0);
     if ((s | 0) != 268) Be(e, 268);
     de(e);
     h = c[A >> 2] | 0;
     ne(e, B, 0) | 0;
     if ((c[D >> 2] | 0) == 44) {
      f = 1;
      do {
       de(e);
       Ae(c[E >> 2] | 0, B);
       ne(e, B, 0) | 0;
       f = f + 1 | 0;
      } while ((c[D >> 2] | 0) == 44);
     } else f = 1;
     g = c[E >> 2] | 0;
     f = 3 - f | 0;
     switch (c[B >> 2] | 0) {
     case 13:
     case 12:
      {
       f = f + 1 | 0;
       f = (f | 0) < 0 ? 0 : f;
       He(g, B, f);
       if ((f | 0) > 1) Me(g, f + -1 | 0);
       break;
      }
     case 0:
      {
       z = 63;
       break;
      }
     default:
      {
       Ae(g, B);
       z = 63;
      }
     }
     if ((z | 0) == 63) if ((f | 0) > 0) {
      H = d[g + 48 >> 0] | 0;
      Me(g, f);
      rf(g, H, f);
     }
     sf(k, 3);
     qf(e, l, h, w, 0);
     break;
    }
   default:
    ae(e, 7558);
   }
   if ((c[D >> 2] | 0) == 262) {
    de(e);
    Qe(y);
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   if ((c[A >> 2] | 0) == (C | 0)) Be(e, 262); else {
    H = c[F >> 2] | 0;
    F = Ce(e, 262) | 0;
    G = Ce(e, 264) | 0;
    c[x >> 2] = F;
    c[x + 4 >> 2] = G;
    c[x + 8 >> 2] = C;
    ae(e, $b(H, 7159, x) | 0);
   }
   break;
  }
 case 273:
  {
   g = nf(y) | 0;
   a[v + 10 >> 0] = 1;
   w = a[y + 46 >> 0] | 0;
   a[v + 8 >> 0] = w;
   j = c[(c[y + 12 >> 2] | 0) + 64 >> 2] | 0;
   x = c[j + 28 >> 2] & 65535;
   b[v + 4 >> 1] = x;
   j = c[j + 16 >> 2] & 65535;
   b[v + 6 >> 1] = j;
   a[v + 9 >> 0] = 0;
   H = y + 16 | 0;
   c[v >> 2] = c[H >> 2];
   a[r + 10 >> 0] = 0;
   h = r + 8 | 0;
   a[h >> 0] = w;
   b[r + 4 >> 1] = x;
   b[r + 6 >> 1] = j;
   j = r + 9 | 0;
   a[j >> 0] = 0;
   c[r >> 2] = v;
   c[H >> 2] = r;
   de(e);
   e : while (1) {
    f = c[D >> 2] | 0;
    switch (f | 0) {
    case 277:
    case 286:
    case 262:
    case 261:
    case 260:
     break e;
    default:
     {}
    }
    le(e);
    if ((f | 0) == 274) {
     z = 75;
     break;
    }
   }
   if ((z | 0) == 75) f = c[D >> 2] | 0;
   if ((f | 0) != 277) if ((c[A >> 2] | 0) == (C | 0)) Be(e, 277); else {
    H = c[F >> 2] | 0;
    A = Ce(e, 277) | 0;
    D = Ce(e, 273) | 0;
    c[q >> 2] = A;
    c[q + 4 >> 2] = D;
    c[q + 8 >> 2] = C;
    ae(e, $b(H, 7159, q) | 0);
   }
   de(e);
   ne(e, B, 0) | 0;
   if ((c[B >> 2] | 0) == 1) c[B >> 2] = 3;
   gf(c[E >> 2] | 0, B);
   f = c[B + 20 >> 2] | 0;
   if (a[j >> 0] | 0) Se(y, f, d[h >> 0] | 0);
   Qe(y);
   Xe(y, f, g);
   Qe(y);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 case 265:
  {
   de(e);
   if ((c[D >> 2] | 0) != 288) Be(e, 288);
   f = c[e + 24 >> 2] | 0;
   de(e);
   g = c[E >> 2] | 0;
   if (!(_e(g, f, v, 1) | 0)) {
    _e(g, c[e + 72 >> 2] | 0, v, 1) | 0;
    H = xe(c[E >> 2] | 0, f) | 0;
    c[B + 16 >> 2] = -1;
    c[B + 20 >> 2] = -1;
    c[B >> 2] = 4;
    c[B + 8 >> 2] = H;
    $e(g, v, B);
   }
   f : while (1) {
    switch (c[D >> 2] | 0) {
    case 58:
     {
      z = 91;
      break f;
     }
    case 46:
     break;
    default:
     {
      f = 0;
      break f;
     }
    }
    af(e, v);
   }
   if ((z | 0) == 91) {
    af(e, v);
    f = 1;
   }
   Je(e, r, f, C);
   tf(c[E >> 2] | 0, v, r);
   ef(c[E >> 2] | 0, C);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 case 269:
  {
   de(e);
   h = c[D >> 2] | 0;
   if ((h | 0) == 265) {
    de(e);
    f = c[E >> 2] | 0;
    if ((c[D >> 2] | 0) != 288) Be(e, 288);
    D = c[e + 24 >> 2] | 0;
    de(e);
    Le(e, D);
    D = c[E >> 2] | 0;
    C = D + 46 | 0;
    H = (d[C >> 0] | 0) + 1 | 0;
    a[C >> 0] = H;
    c[(c[(c[D >> 2] | 0) + 24 >> 2] | 0) + ((b[(c[c[(c[D + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0) + ((c[D + 40 >> 2] | 0) + (H & 255) + -1 << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = c[D + 20 >> 2];
    Je(e, B, 0, c[A >> 2] | 0);
    c[(c[(c[f >> 2] | 0) + 24 >> 2] | 0) + ((b[(c[c[(c[f + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0) + ((c[f + 40 >> 2] | 0) + (c[B + 8 >> 2] | 0) << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = c[f + 20 >> 2];
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   if ((h | 0) != 288) Be(e, 288);
   h = e + 24 | 0;
   j = 0;
   g : while (1) {
    H = c[h >> 2] | 0;
    de(e);
    Le(e, H);
    j = j + 1 | 0;
    switch (c[D >> 2] | 0) {
    case 61:
     {
      f = j;
      z = 102;
      break g;
     }
    case 44:
     break;
    default:
     {
      f = j;
      z = 104;
      break g;
     }
    }
    de(e);
    if ((c[D >> 2] | 0) != 288) {
     z = 99;
     break;
    }
   }
   if ((z | 0) == 99) Be(e, 288); else if ((z | 0) == 102) {
    de(e);
    ne(e, B, 0) | 0;
    if ((c[D >> 2] | 0) == 44) {
     g = 1;
     do {
      de(e);
      Ae(c[E >> 2] | 0, B);
      ne(e, B, 0) | 0;
      g = g + 1 | 0;
     } while ((c[D >> 2] | 0) == 44);
    } else g = 1;
   } else if ((z | 0) == 104) {
    c[B >> 2] = 0;
    g = 0;
   }
   h = c[E >> 2] | 0;
   g = f - g | 0;
   switch (c[B >> 2] | 0) {
   case 13:
   case 12:
    {
     g = g + 1 | 0;
     g = (g | 0) < 0 ? 0 : g;
     He(h, B, g);
     if ((g | 0) > 1) Me(h, g + -1 | 0);
     break;
    }
   case 0:
    {
     z = 109;
     break;
    }
   default:
    {
     Ae(h, B);
     z = 109;
    }
   }
   if ((z | 0) == 109) if ((g | 0) > 0) {
    H = d[h + 48 >> 0] | 0;
    Me(h, g);
    rf(h, H, g);
   }
   H = c[E >> 2] | 0;
   j = H + 46 | 0;
   k = (d[j >> 0] | 0) + f | 0;
   a[j >> 0] = k;
   j = c[H + 20 >> 2] | 0;
   g = c[(c[H >> 2] | 0) + 24 >> 2] | 0;
   h = c[c[(c[H + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0;
   k = (c[H + 40 >> 2] | 0) + (k & 255) | 0;
   do {
    c[g + ((b[h + (k - f << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = j;
    f = f + -1 | 0;
   } while ((f | 0) != 0);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 case 285:
  {
   de(e);
   if ((c[D >> 2] | 0) != 288) Be(e, 288);
   l = c[e + 24 >> 2] | 0;
   de(e);
   g = c[E >> 2] | 0;
   p = e + 64 | 0;
   j = c[p >> 2] | 0;
   n = j + 24 | 0;
   o = g + 16 | 0;
   f = b[(c[o >> 2] | 0) + 4 >> 1] | 0;
   m = j + 28 | 0;
   h : do if ((f | 0) < (c[m >> 2] | 0)) {
    while (1) {
     if (Ue(l, c[(c[n >> 2] | 0) + (f << 4) >> 2] | 0) | 0) break;
     f = f + 1 | 0;
     if ((f | 0) >= (c[m >> 2] | 0)) break h;
    }
    B = g + 12 | 0;
    H = c[(c[B >> 2] | 0) + 52 >> 2] | 0;
    A = c[(c[n >> 2] | 0) + (f << 4) + 8 >> 2] | 0;
    c[u >> 2] = l + 16;
    c[u + 4 >> 2] = A;
    H = $b(H, 7579, u) | 0;
    We(c[B >> 2] | 0, H);
   } while (0);
   if ((c[D >> 2] | 0) != 285) Be(e, 285);
   de(e);
   h = c[g + 20 >> 2] | 0;
   k = c[m >> 2] | 0;
   f = j + 32 | 0;
   if ((k | 0) < (c[f >> 2] | 0)) {
    f = c[n >> 2] | 0;
    g = k;
   } else {
    f = ce(c[F >> 2] | 0, c[n >> 2] | 0, f, 16, 32767, 7258) | 0;
    c[n >> 2] = f;
    g = c[m >> 2] | 0;
   }
   c[f + (k << 4) >> 2] = l;
   c[f + (k << 4) + 8 >> 2] = C;
   a[f + (k << 4) + 12 >> 0] = a[(c[E >> 2] | 0) + 46 >> 0] | 0;
   c[f + (k << 4) + 4 >> 2] = h;
   c[m >> 2] = g + 1;
   i : while (1) {
    switch (c[D >> 2] | 0) {
    case 286:
    case 262:
    case 261:
    case 260:
     {
      z = 130;
      break i;
     }
    case 285:
    case 59:
     break;
    default:
     {
      z = 129;
      break i;
     }
    }
    le(e);
   }
   if ((z | 0) == 129) f = c[n >> 2] | 0; else if ((z | 0) == 130) {
    f = c[n >> 2] | 0;
    a[f + (k << 4) + 12 >> 0] = a[(c[o >> 2] | 0) + 8 >> 0] | 0;
   }
   k = f + (k << 4) | 0;
   f = c[p >> 2] | 0;
   g = b[(c[(c[E >> 2] | 0) + 16 >> 2] | 0) + 6 >> 1] | 0;
   j = f + 16 | 0;
   if ((g | 0) >= (c[j >> 2] | 0)) {
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   h = f + 12 | 0;
   f = g;
   j : while (1) {
    while (1) {
     if (!(Ue(c[(c[h >> 2] | 0) + (f << 4) >> 2] | 0, c[k >> 2] | 0) | 0)) break;
     Ve(e, f, k);
     if ((f | 0) >= (c[j >> 2] | 0)) {
      z = 165;
      break j;
     }
    }
    f = f + 1 | 0;
    if ((f | 0) >= (c[j >> 2] | 0)) {
     z = 165;
     break;
    }
   }
   if ((z | 0) == 165) {
    H = c[E >> 2] | 0;
    E = H + 46 | 0;
    E = a[E >> 0] | 0;
    H = H + 48 | 0;
    a[H >> 0] = E;
    H = c[F >> 2] | 0;
    H = H + 38 | 0;
    F = b[H >> 1] | 0;
    F = F + -1 << 16 >> 16;
    b[H >> 1] = F;
    i = G;
    return;
   }
   break;
  }
 case 274:
  {
   de(e);
   h = c[E >> 2] | 0;
   k : do switch (c[D >> 2] | 0) {
   case 59:
   case 277:
   case 286:
   case 262:
   case 261:
   case 260:
    {
     g = 0;
     f = 0;
     break;
    }
   default:
    {
     ne(e, B, 0) | 0;
     if ((c[D >> 2] | 0) == 44) {
      f = 1;
      do {
       de(e);
       Ae(c[E >> 2] | 0, B);
       ne(e, B, 0) | 0;
       f = f + 1 | 0;
      } while ((c[D >> 2] | 0) == 44);
     } else f = 1;
     if ((c[B >> 2] & -2 | 0) == 12) {
      He(h, B, -1);
      if ((f | 0) == 1 & (c[B >> 2] | 0) == 12) {
       H = (c[(c[h >> 2] | 0) + 12 >> 2] | 0) + (c[B + 8 >> 2] << 2) | 0;
       c[H >> 2] = c[H >> 2] & -64 | 30;
      }
      g = d[h + 46 >> 0] | 0;
      f = -1;
      break k;
     } else if ((f | 0) == 1) {
      g = pe(h, B) | 0;
      f = 1;
      break k;
     } else {
      Ae(h, B);
      g = d[h + 46 >> 0] | 0;
      break k;
     }
    }
   } while (0);
   Pe(h, g, f);
   if ((c[D >> 2] | 0) == 59) de(e);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 case 266:
 case 258:
  {
   l = Re(y) | 0;
   k = c[A >> 2] | 0;
   H = (c[D >> 2] | 0) == 266;
   de(e);
   do if (H) if ((c[D >> 2] | 0) == 288) {
    t = c[e + 24 >> 2] | 0;
    de(e);
    break;
   } else Be(e, 288); else t = Oc(c[F >> 2] | 0, 7252) | 0; while (0);
   g = c[e + 64 >> 2] | 0;
   f = g + 12 | 0;
   h = g + 16 | 0;
   j = c[h >> 2] | 0;
   g = g + 20 | 0;
   if ((j | 0) < (c[g >> 2] | 0)) {
    f = c[f >> 2] | 0;
    g = j;
   } else {
    g = ce(c[F >> 2] | 0, c[f >> 2] | 0, g, 16, 32767, 7258) | 0;
    c[f >> 2] = g;
    f = g;
    g = c[h >> 2] | 0;
   }
   c[f + (j << 4) >> 2] = t;
   c[f + (j << 4) + 8 >> 2] = k;
   a[f + (j << 4) + 12 >> 0] = a[(c[E >> 2] | 0) + 46 >> 0] | 0;
   c[f + (j << 4) + 4 >> 2] = l;
   c[h >> 2] = g + 1;
   Ye(e, j) | 0;
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 default:
  {
   f = B + 8 | 0;
   Ze(e, f);
   l : do switch (c[D >> 2] | 0) {
   case 44:
   case 61:
    {
     c[B >> 2] = 0;
     uf(e, B, 1);
     break;
    }
   default:
    if ((c[f >> 2] | 0) == 12) {
     H = (c[(c[y >> 2] | 0) + 12 >> 2] | 0) + (c[B + 16 >> 2] << 2) | 0;
     c[H >> 2] = c[H >> 2] & -8372225 | 16384;
     break l;
    } else ae(e, 7617);
   } while (0);
   H = c[E >> 2] | 0;
   E = H + 46 | 0;
   E = a[E >> 0] | 0;
   H = H + 48 | 0;
   a[H >> 0] = E;
   H = c[F >> 2] | 0;
   H = H + 38 | 0;
   F = b[H >> 1] | 0;
   F = F + -1 << 16 >> 16;
   b[H >> 1] = F;
   i = G;
   return;
  }
 } while (0);
}

function im(e, f, j) {
 e = e | 0;
 f = f | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0.0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0;
 P = i;
 i = i + 304 | 0;
 H = P + 16 | 0;
 J = P + 8 | 0;
 I = P + 33 | 0;
 K = P;
 y = P + 32 | 0;
 if ((c[e + 76 >> 2] | 0) > -1) O = Fl(e) | 0; else O = 0;
 k = a[f >> 0] | 0;
 a : do if (!(k << 24 >> 24)) k = 0; else {
  L = e + 4 | 0;
  M = e + 100 | 0;
  G = e + 108 | 0;
  z = e + 8 | 0;
  A = I + 10 | 0;
  B = I + 33 | 0;
  D = J + 4 | 0;
  E = I + 46 | 0;
  F = I + 94 | 0;
  m = k;
  k = 0;
  n = f;
  s = 0;
  l = 0;
  f = 0;
  b : while (1) {
   c : do if (!(dl(m & 255) | 0)) {
    m = (a[n >> 0] | 0) == 37;
    d : do if (m) {
     q = n + 1 | 0;
     o = a[q >> 0] | 0;
     e : do switch (o << 24 >> 24) {
     case 37:
      break d;
     case 42:
      {
       x = 0;
       o = n + 2 | 0;
       break;
      }
     default:
      {
       o = (o & 255) + -48 | 0;
       if (o >>> 0 < 10) if ((a[n + 2 >> 0] | 0) == 36) {
        c[H >> 2] = c[j >> 2];
        while (1) {
         x = (c[H >> 2] | 0) + (4 - 1) & ~(4 - 1);
         m = c[x >> 2] | 0;
         c[H >> 2] = x + 4;
         if (o >>> 0 > 1) o = o + -1 | 0; else break;
        }
        x = m;
        o = n + 3 | 0;
        break e;
       }
       o = (c[j >> 2] | 0) + (4 - 1) & ~(4 - 1);
       x = c[o >> 2] | 0;
       c[j >> 2] = o + 4;
       o = q;
      }
     } while (0);
     m = a[o >> 0] | 0;
     n = m & 255;
     if ((n + -48 | 0) >>> 0 < 10) {
      m = 0;
      while (1) {
       q = (m * 10 | 0) + -48 + n | 0;
       o = o + 1 | 0;
       m = a[o >> 0] | 0;
       n = m & 255;
       if ((n + -48 | 0) >>> 0 >= 10) break; else m = q;
      }
     } else q = 0;
     if (m << 24 >> 24 == 109) {
      o = o + 1 | 0;
      r = a[o >> 0] | 0;
      m = (x | 0) != 0 & 1;
      l = 0;
      f = 0;
     } else {
      r = m;
      m = 0;
     }
     n = o + 1 | 0;
     switch (r & 255 | 0) {
     case 104:
      {
       w = (a[n >> 0] | 0) == 104;
       n = w ? o + 2 | 0 : n;
       o = w ? -2 : -1;
       break;
      }
     case 108:
      {
       w = (a[n >> 0] | 0) == 108;
       n = w ? o + 2 | 0 : n;
       o = w ? 3 : 1;
       break;
      }
     case 106:
      {
       o = 3;
       break;
      }
     case 116:
     case 122:
      {
       o = 1;
       break;
      }
     case 76:
      {
       o = 2;
       break;
      }
     case 110:
     case 112:
     case 67:
     case 83:
     case 91:
     case 99:
     case 115:
     case 88:
     case 71:
     case 70:
     case 69:
     case 65:
     case 103:
     case 102:
     case 101:
     case 97:
     case 120:
     case 117:
     case 111:
     case 105:
     case 100:
      {
       n = o;
       o = 0;
       break;
      }
     default:
      {
       N = 154;
       break b;
      }
     }
     r = d[n >> 0] | 0;
     t = (r & 47 | 0) == 3;
     r = t ? r | 32 : r;
     t = t ? 1 : o;
     switch (r | 0) {
     case 99:
      {
       w = s;
       v = (q | 0) < 1 ? 1 : q;
       break;
      }
     case 91:
      {
       w = s;
       v = q;
       break;
      }
     case 110:
      {
       if (!x) {
        o = s;
        break c;
       }
       switch (t | 0) {
       case -2:
        {
         a[x >> 0] = s;
         o = s;
         break c;
        }
       case -1:
        {
         b[x >> 1] = s;
         o = s;
         break c;
        }
       case 0:
        {
         c[x >> 2] = s;
         o = s;
         break c;
        }
       case 1:
        {
         c[x >> 2] = s;
         o = s;
         break c;
        }
       case 3:
        {
         o = x;
         c[o >> 2] = s;
         c[o + 4 >> 2] = ((s | 0) < 0) << 31 >> 31;
         o = s;
         break c;
        }
       default:
        {
         o = s;
         break c;
        }
       }
      }
     default:
      {
       _k(e, 0);
       do {
        o = c[L >> 2] | 0;
        if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
         c[L >> 2] = o + 1;
         o = d[o >> 0] | 0;
        } else o = al(e) | 0;
       } while ((dl(o) | 0) != 0);
       if (!(c[M >> 2] | 0)) o = c[L >> 2] | 0; else {
        o = (c[L >> 2] | 0) + -1 | 0;
        c[L >> 2] = o;
       }
       w = (c[G >> 2] | 0) + s + o - (c[z >> 2] | 0) | 0;
       v = q;
      }
     }
     _k(e, v);
     o = c[L >> 2] | 0;
     q = c[M >> 2] | 0;
     if (o >>> 0 < q >>> 0) c[L >> 2] = o + 1; else {
      if ((al(e) | 0) < 0) {
       N = 154;
       break b;
      }
      q = c[M >> 2] | 0;
     }
     if (q | 0) c[L >> 2] = (c[L >> 2] | 0) + -1;
     f : do switch (r | 0) {
     case 91:
     case 99:
     case 115:
      {
       u = (r | 0) == 99;
       g : do if ((r | 16 | 0) == 115) {
        nn(I | 0, -1, 257) | 0;
        a[I >> 0] = 0;
        if ((r | 0) == 115) {
         a[B >> 0] = 0;
         a[A >> 0] = 0;
         a[A + 1 >> 0] = 0;
         a[A + 2 >> 0] = 0;
         a[A + 3 >> 0] = 0;
         a[A + 4 >> 0] = 0;
        }
       } else {
        r = n + 1 | 0;
        s = (a[r >> 0] | 0) == 94;
        o = s & 1;
        n = s ? n + 2 | 0 : r;
        nn(I | 0, s & 1 | 0, 257) | 0;
        a[I >> 0] = 0;
        switch (a[n >> 0] | 0) {
        case 45:
         {
          s = (o ^ 1) & 255;
          a[E >> 0] = s;
          n = n + 1 | 0;
          break;
         }
        case 93:
         {
          s = (o ^ 1) & 255;
          a[F >> 0] = s;
          n = n + 1 | 0;
          break;
         }
        default:
         s = (o ^ 1) & 255;
        }
        while (1) {
         o = a[n >> 0] | 0;
         h : do switch (o << 24 >> 24) {
         case 0:
          {
           N = 154;
           break b;
          }
         case 93:
          break g;
         case 45:
          {
           r = n + 1 | 0;
           o = a[r >> 0] | 0;
           switch (o << 24 >> 24) {
           case 93:
           case 0:
            {
             o = 45;
             break h;
            }
           default:
            {}
           }
           n = a[n + -1 >> 0] | 0;
           if ((n & 255) < (o & 255)) {
            n = n & 255;
            do {
             n = n + 1 | 0;
             a[I + n >> 0] = s;
             o = a[r >> 0] | 0;
            } while ((n | 0) < (o & 255 | 0));
            n = r;
           } else n = r;
           break;
          }
         default:
          {}
         } while (0);
         a[I + ((o & 255) + 1) >> 0] = s;
         n = n + 1 | 0;
        }
       } while (0);
       r = u ? v + 1 | 0 : 31;
       s = (t | 0) == 1;
       t = (m | 0) != 0;
       i : do if (s) {
        if (t) {
         f = Xm(r << 2) | 0;
         if (!f) {
          l = 0;
          N = 154;
          break b;
         }
        } else f = x;
        c[J >> 2] = 0;
        c[D >> 2] = 0;
        l = 0;
        j : while (1) {
         q = (f | 0) == 0;
         do {
          k : while (1) {
           o = c[L >> 2] | 0;
           if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
            c[L >> 2] = o + 1;
            o = d[o >> 0] | 0;
           } else o = al(e) | 0;
           if (!(a[I + (o + 1) >> 0] | 0)) break j;
           a[y >> 0] = o;
           switch (Wl(K, y, 1, J) | 0) {
           case -1:
            {
             l = 0;
             N = 154;
             break b;
            }
           case -2:
            break;
           default:
            break k;
           }
          }
          if (!q) {
           c[f + (l << 2) >> 2] = c[K >> 2];
           l = l + 1 | 0;
          }
         } while (!(t & (l | 0) == (r | 0)));
         l = r << 1 | 1;
         o = Zm(f, l << 2) | 0;
         if (!o) {
          l = 0;
          N = 154;
          break b;
         } else {
          q = r;
          r = l;
          f = o;
          l = q;
         }
        }
        if (!(jm(J) | 0)) {
         l = 0;
         N = 154;
         break b;
        } else {
         q = l;
         l = 0;
        }
       } else {
        if (t) {
         l = Xm(r) | 0;
         if (!l) {
          l = 0;
          f = 0;
          N = 154;
          break b;
         } else o = 0;
         while (1) {
          do {
           f = c[L >> 2] | 0;
           if (f >>> 0 < (c[M >> 2] | 0) >>> 0) {
            c[L >> 2] = f + 1;
            f = d[f >> 0] | 0;
           } else f = al(e) | 0;
           if (!(a[I + (f + 1) >> 0] | 0)) {
            q = o;
            f = 0;
            break i;
           }
           a[l + o >> 0] = f;
           o = o + 1 | 0;
          } while ((o | 0) != (r | 0));
          f = r << 1 | 1;
          o = Zm(l, f) | 0;
          if (!o) {
           f = 0;
           N = 154;
           break b;
          } else {
           q = r;
           r = f;
           l = o;
           o = q;
          }
         }
        }
        if (!x) {
         l = q;
         while (1) {
          f = c[L >> 2] | 0;
          if (f >>> 0 < l >>> 0) {
           c[L >> 2] = f + 1;
           f = d[f >> 0] | 0;
          } else f = al(e) | 0;
          if (!(a[I + (f + 1) >> 0] | 0)) {
           q = 0;
           l = 0;
           f = 0;
           break i;
          }
          l = c[M >> 2] | 0;
         }
        } else {
         l = 0;
         while (1) {
          f = c[L >> 2] | 0;
          if (f >>> 0 < q >>> 0) {
           c[L >> 2] = f + 1;
           f = d[f >> 0] | 0;
          } else f = al(e) | 0;
          if (!(a[I + (f + 1) >> 0] | 0)) {
           q = l;
           l = x;
           f = 0;
           break i;
          }
          a[x + l >> 0] = f;
          q = c[M >> 2] | 0;
          l = l + 1 | 0;
         }
        }
       } while (0);
       if (!(c[M >> 2] | 0)) o = c[L >> 2] | 0; else {
        o = (c[L >> 2] | 0) + -1 | 0;
        c[L >> 2] = o;
       }
       o = o - (c[z >> 2] | 0) + (c[G >> 2] | 0) | 0;
       if (!o) break b;
       if (!((o | 0) == (v | 0) | u ^ 1)) break b;
       do if (t) if (s) {
        c[x >> 2] = f;
        break;
       } else {
        c[x >> 2] = l;
        break;
       } while (0);
       if (!u) {
        if (f | 0) c[f + (q << 2) >> 2] = 0;
        if (!l) {
         l = 0;
         break f;
        }
        a[l + q >> 0] = 0;
       }
       break;
      }
     case 120:
     case 88:
     case 112:
      {
       o = 16;
       N = 136;
       break;
      }
     case 111:
      {
       o = 8;
       N = 136;
       break;
      }
     case 117:
     case 100:
      {
       o = 10;
       N = 136;
       break;
      }
     case 105:
      {
       o = 0;
       N = 136;
       break;
      }
     case 71:
     case 103:
     case 70:
     case 102:
     case 69:
     case 101:
     case 65:
     case 97:
      {
       p = +el(e, t, 0);
       if ((c[G >> 2] | 0) == ((c[z >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
       if (x) switch (t | 0) {
       case 0:
        {
         g[x >> 2] = p;
         break f;
        }
       case 1:
        {
         h[x >> 3] = p;
         break f;
        }
       case 2:
        {
         h[x >> 3] = p;
         break f;
        }
       default:
        break f;
       }
       break;
      }
     default:
      {}
     } while (0);
     l : do if ((N | 0) == 136) {
      N = 0;
      o = $k(e, o, 0, -1, -1) | 0;
      if ((c[G >> 2] | 0) == ((c[z >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
      if ((x | 0) != 0 & (r | 0) == 112) {
       c[x >> 2] = o;
       break;
      }
      if (x) switch (t | 0) {
      case -2:
       {
        a[x >> 0] = o;
        break l;
       }
      case -1:
       {
        b[x >> 1] = o;
        break l;
       }
      case 0:
       {
        c[x >> 2] = o;
        break l;
       }
      case 1:
       {
        c[x >> 2] = o;
        break l;
       }
      case 3:
       {
        v = x;
        c[v >> 2] = o;
        c[v + 4 >> 2] = C;
        break l;
       }
      default:
       break l;
      }
     } while (0);
     k = ((x | 0) != 0 & 1) + k | 0;
     o = (c[G >> 2] | 0) + w + (c[L >> 2] | 0) - (c[z >> 2] | 0) | 0;
     break c;
    } while (0);
    n = n + (m & 1) | 0;
    _k(e, 0);
    m = c[L >> 2] | 0;
    if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
     c[L >> 2] = m + 1;
     m = d[m >> 0] | 0;
    } else m = al(e) | 0;
    if ((m | 0) != (d[n >> 0] | 0)) {
     N = 22;
     break b;
    }
    o = s + 1 | 0;
   } else {
    while (1) {
     m = n + 1 | 0;
     if (!(dl(d[m >> 0] | 0) | 0)) break; else n = m;
    }
    _k(e, 0);
    do {
     m = c[L >> 2] | 0;
     if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
      c[L >> 2] = m + 1;
      m = d[m >> 0] | 0;
     } else m = al(e) | 0;
    } while ((dl(m) | 0) != 0);
    if (!(c[M >> 2] | 0)) m = c[L >> 2] | 0; else {
     m = (c[L >> 2] | 0) + -1 | 0;
     c[L >> 2] = m;
    }
    o = (c[G >> 2] | 0) + s + m - (c[z >> 2] | 0) | 0;
   } while (0);
   n = n + 1 | 0;
   m = a[n >> 0] | 0;
   if (!(m << 24 >> 24)) break a; else s = o;
  }
  if ((N | 0) == 22) {
   if (c[M >> 2] | 0) c[L >> 2] = (c[L >> 2] | 0) + -1;
   if ((k | 0) != 0 | (m | 0) > -1) break; else {
    k = 0;
    N = 155;
   }
  } else if ((N | 0) == 154) if (!k) {
   k = m;
   N = 155;
  }
  if ((N | 0) == 155) {
   m = k;
   k = -1;
  }
  if (m) {
   Ym(l);
   Ym(f);
  }
 } while (0);
 if (O | 0) Rk(e);
 i = P;
 return k | 0;
}

function Xi(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 K = i;
 i = i + 96 | 0;
 A = K + 80 | 0;
 z = K + 72 | 0;
 y = K + 64 | 0;
 x = K + 56 | 0;
 w = K + 48 | 0;
 C = K + 40 | 0;
 B = K + 32 | 0;
 F = K + 24 | 0;
 E = K + 16 | 0;
 D = K + 8 | 0;
 J = c[b >> 2] | 0;
 c[b >> 2] = J + -1;
 if (!J) ad(c[b + 16 >> 2] | 0, 10321, K) | 0;
 u = b + 12 | 0;
 j = c[u >> 2] | 0;
 a : do if ((j | 0) != (f | 0)) {
  J = b + 8 | 0;
  H = b + 16 | 0;
  v = b + 4 | 0;
  G = b + 20 | 0;
  b : while (1) {
   t = e + -1 | 0;
   c : while (1) {
    g = a[f >> 0] | 0;
    d : do switch (g << 24 >> 24 | 0) {
    case 40:
     {
      I = 7;
      break b;
     }
    case 41:
     {
      I = 16;
      break b;
     }
    case 36:
     {
      h = f + 1 | 0;
      if ((h | 0) == (j | 0)) {
       I = 23;
       break b;
      } else {
       g = h;
       I = 91;
      }
      break;
     }
    case 37:
     {
      h = f + 1 | 0;
      g = a[h >> 0] | 0;
      switch (g << 24 >> 24 | 0) {
      case 98:
       {
        g = j;
        I = 25;
        break c;
       }
      case 57:
      case 56:
      case 55:
      case 54:
      case 53:
      case 52:
      case 51:
      case 50:
      case 49:
      case 48:
       {
        I = 71;
        break c;
       }
      case 102:
       break;
      default:
       {
        if ((h | 0) == (j | 0)) ad(c[H >> 2] | 0, 10465, z) | 0;
        g = f + 2 | 0;
        I = 91;
        break d;
       }
      }
      q = f + 2 | 0;
      if ((a[q >> 0] | 0) == 91) g = 91; else {
       ad(c[H >> 2] | 0, 10430, C) | 0;
       g = a[q >> 0] | 0;
      }
      r = f + 3 | 0;
      switch (g << 24 >> 24 | 0) {
      case 37:
       {
        if ((r | 0) == (c[u >> 2] | 0)) ad(c[H >> 2] | 0, 10465, w) | 0;
        f = f + 4 | 0;
        break;
       }
      case 91:
       {
        f = (a[r >> 0] | 0) == 94 ? f + 4 | 0 : r;
        do {
         if ((f | 0) == (c[u >> 2] | 0)) ad(c[H >> 2] | 0, 10500, x) | 0;
         g = f + 1 | 0;
         if ((a[f >> 0] | 0) == 37) f = g >>> 0 < (c[u >> 2] | 0) >>> 0 ? f + 2 | 0 : g; else f = g;
        } while ((a[f >> 0] | 0) != 93);
        f = f + 1 | 0;
        break;
       }
      default:
       f = r;
      }
      if ((e | 0) == (c[v >> 2] | 0)) j = 0; else j = a[t >> 0] | 0;
      o = j & 255;
      s = f + -1 | 0;
      p = (a[r >> 0] | 0) == 94;
      h = p ? r : q;
      p = p & 1;
      g = p ^ 1;
      k = h + 1 | 0;
      e : do if (k >>> 0 < s >>> 0) {
       n = j & 255;
       while (1) {
        m = a[k >> 0] | 0;
        j = h + 2 | 0;
        l = a[j >> 0] | 0;
        do if (m << 24 >> 24 == 37) if (!(Yi(o, l & 255) | 0)) h = j; else break e; else {
         if (l << 24 >> 24 == 45) {
          h = h + 3 | 0;
          if (h >>> 0 < s >>> 0) {
           if ((m & 255) >>> 0 > o >>> 0) break;
           if ((d[h >> 0] | 0) >>> 0 < o >>> 0) break; else break e;
          }
         }
         if (m << 24 >> 24 == n << 24 >> 24) break e; else h = k;
        } while (0);
        k = h + 1 | 0;
        if (k >>> 0 >= s >>> 0) {
         g = p;
         break;
        }
       }
      } else g = p; while (0);
      if (g | 0) {
       e = 0;
       break a;
      }
      o = a[e >> 0] | 0;
      p = o & 255;
      n = (a[r >> 0] | 0) == 94;
      h = n ? r : q;
      n = n & 1;
      g = n ^ 1;
      j = h + 1 | 0;
      f : do if (j >>> 0 < s >>> 0) while (1) {
       m = a[j >> 0] | 0;
       k = h + 2 | 0;
       l = a[k >> 0] | 0;
       do if (m << 24 >> 24 == 37) if (!(Yi(p, l & 255) | 0)) h = k; else break f; else {
        if (l << 24 >> 24 == 45) {
         h = h + 3 | 0;
         if (h >>> 0 < s >>> 0) {
          if ((m & 255) > (o & 255)) break;
          if ((d[h >> 0] | 0) < (o & 255)) break; else break f;
         }
        }
        if (m << 24 >> 24 == o << 24 >> 24) break f; else h = j;
       } while (0);
       j = h + 1 | 0;
       if (j >>> 0 >= s >>> 0) {
        g = n;
        break;
       }
      } else g = n; while (0);
      if (!g) {
       e = 0;
       break a;
      }
      break;
     }
    default:
     {
      h = f + 1 | 0;
      if (g << 24 >> 24 == 91) {
       g = (a[h >> 0] | 0) == 94 ? f + 2 | 0 : h;
       while (1) {
        if ((g | 0) == (j | 0)) ad(c[H >> 2] | 0, 10500, A) | 0;
        j = g + 1 | 0;
        if ((a[g >> 0] | 0) == 37) g = j >>> 0 < (c[u >> 2] | 0) >>> 0 ? g + 2 | 0 : j; else g = j;
        if ((a[g >> 0] | 0) == 93) break;
        j = c[u >> 2] | 0;
       }
       g = g + 1 | 0;
       I = 91;
      } else {
       g = h;
       I = 91;
      }
     }
    } while (0);
    if ((I | 0) == 91) {
     I = 0;
     if ((c[J >> 2] | 0) >>> 0 > e >>> 0) {
      r = a[e >> 0] | 0;
      s = r & 255;
      j = a[f >> 0] | 0;
      g : do switch (j << 24 >> 24 | 0) {
      case 46:
       {
        j = g;
        I = 94;
        break c;
       }
      case 37:
       {
        k = Yi(s, d[h >> 0] | 0) | 0;
        break;
       }
      case 91:
       {
        p = g + -1 | 0;
        q = (a[h >> 0] | 0) == 94;
        j = q ? h : f;
        q = q & 1;
        k = q ^ 1;
        l = j + 1 | 0;
        if (l >>> 0 < p >>> 0) while (1) {
         o = a[l >> 0] | 0;
         m = j + 2 | 0;
         n = a[m >> 0] | 0;
         do if (o << 24 >> 24 == 37) if (!(Yi(s, n & 255) | 0)) j = m; else break g; else {
          if (n << 24 >> 24 == 45) {
           j = j + 3 | 0;
           if (j >>> 0 < p >>> 0) {
            if ((o & 255) > (r & 255)) break;
            if ((d[j >> 0] | 0) < (r & 255)) break; else break g;
           }
          }
          if (o << 24 >> 24 == r << 24 >> 24) break g; else j = l;
         } while (0);
         l = j + 1 | 0;
         if (l >>> 0 >= p >>> 0) {
          k = q;
          break;
         }
        } else k = q;
        break;
       }
      default:
       k = j << 24 >> 24 == r << 24 >> 24 & 1;
      } while (0);
      j = a[g >> 0] | 0;
      if (!k) f = j; else {
       I = 109;
       break;
      }
     } else f = a[g >> 0] | 0;
     switch (f << 24 >> 24) {
     case 45:
     case 63:
     case 42:
      break;
     default:
      {
       e = 0;
       break a;
      }
     }
     f = g + 1 | 0;
    }
    j = c[u >> 2] | 0;
    if ((f | 0) == (j | 0)) break a;
   }
   if ((I | 0) == 25) {
    I = 0;
    h = f + 2 | 0;
    if ((g + -1 | 0) >>> 0 <= h >>> 0) ad(c[H >> 2] | 0, 10383, B) | 0;
    m = a[e >> 0] | 0;
    if (m << 24 >> 24 != (a[h >> 0] | 0)) {
     e = 0;
     break a;
    }
    k = a[f + 3 >> 0] | 0;
    g = e + 1 | 0;
    l = c[J >> 2] | 0;
    if (g >>> 0 < l >>> 0) h = 1; else {
     e = 0;
     break a;
    }
    while (1) {
     j = a[g >> 0] | 0;
     if (j << 24 >> 24 == k << 24 >> 24) {
      h = h + -1 | 0;
      if (!h) break;
     } else h = (j << 24 >> 24 == m << 24 >> 24 & 1) + h | 0;
     e = g + 1 | 0;
     if (e >>> 0 < l >>> 0) {
      t = g;
      g = e;
      e = t;
     } else {
      e = 0;
      break a;
     }
    }
    e = e + 2 | 0;
    f = f + 4 | 0;
   } else if ((I | 0) == 71) {
    I = 0;
    h = g & 255;
    j = h + -49 | 0;
    if ((g & 255) < 49) I = 74; else if ((j | 0) < (c[G >> 2] | 0)) {
     g = c[b + 24 + (j << 3) + 4 >> 2] | 0;
     if ((g | 0) == -1) I = 74;
    } else I = 74;
    if ((I | 0) == 74) {
     I = 0;
     g = c[H >> 2] | 0;
     c[y >> 2] = h + -48;
     g = ad(g, 10532, y) | 0;
     j = g;
     g = c[b + 24 + (g << 3) + 4 >> 2] | 0;
    }
    if (((c[J >> 2] | 0) - e | 0) >>> 0 < g >>> 0) {
     e = 0;
     break a;
    }
    h = e + g | 0;
    if ((h | 0) == 0 | (Ml(c[b + 24 + (j << 3) >> 2] | 0, e, g) | 0) != 0) {
     e = 0;
     break a;
    }
    e = h;
    f = f + 2 | 0;
   } else if ((I | 0) == 94) {
    g = j;
    j = a[j >> 0] | 0;
    I = 109;
   }
   h : do if ((I | 0) == 109) {
    I = 0;
    switch (j << 24 >> 24 | 0) {
    case 43:
     {
      I = 112;
      break b;
     }
    case 42:
     {
      t = f;
      r = h;
      break b;
     }
    case 45:
     {
      I = 110;
      break b;
     }
    case 63:
     {
      f = g + 1 | 0;
      g = Xi(b, e + 1 | 0, f) | 0;
      if (!g) break h; else {
       e = g;
       break a;
      }
     }
    default:
     {
      e = e + 1 | 0;
      f = g;
      break h;
     }
    }
   } while (0);
   j = c[u >> 2] | 0;
   if ((f | 0) == (j | 0)) break a;
  }
  if ((I | 0) == 7) {
   g = f + 1 | 0;
   if ((a[g >> 0] | 0) == 41) {
    g = c[G >> 2] | 0;
    if ((g | 0) > 31) ad(c[H >> 2] | 0, 10341, D) | 0;
    c[b + 24 + (g << 3) >> 2] = e;
    c[b + 24 + (g << 3) + 4 >> 2] = -2;
    c[G >> 2] = g + 1;
    e = Xi(b, e, f + 2 | 0) | 0;
    if (e | 0) break;
    c[G >> 2] = (c[G >> 2] | 0) + -1;
    e = 0;
    break;
   } else {
    f = c[G >> 2] | 0;
    if ((f | 0) > 31) ad(c[H >> 2] | 0, 10341, E) | 0;
    c[b + 24 + (f << 3) >> 2] = e;
    c[b + 24 + (f << 3) + 4 >> 2] = -1;
    c[G >> 2] = f + 1;
    e = Xi(b, e, g) | 0;
    if (e | 0) break;
    c[G >> 2] = (c[G >> 2] | 0) + -1;
    e = 0;
    break;
   }
  } else if ((I | 0) == 16) {
   h = f + 1 | 0;
   g = c[G >> 2] | 0;
   while (1) {
    f = g + -1 | 0;
    if ((g | 0) <= 0) {
     I = 19;
     break;
    }
    if ((c[b + 24 + (f << 3) + 4 >> 2] | 0) == -1) break; else g = f;
   }
   if ((I | 0) == 19) f = ad(c[H >> 2] | 0, 10359, F) | 0;
   g = b + 24 + (f << 3) + 4 | 0;
   c[g >> 2] = e - (c[b + 24 + (f << 3) >> 2] | 0);
   e = Xi(b, e, h) | 0;
   if (e | 0) break;
   c[g >> 2] = -1;
   e = 0;
   break;
  } else if ((I | 0) == 23) {
   e = (e | 0) == (c[J >> 2] | 0) ? e : 0;
   break;
  } else if ((I | 0) == 110) {
   s = g + 1 | 0;
   r = g + -1 | 0;
   while (1) {
    g = Xi(b, e, s) | 0;
    if (g) {
     e = g;
     break a;
    }
    i : while (1) {
     if ((c[J >> 2] | 0) >>> 0 <= e >>> 0) {
      e = 0;
      break a;
     }
     g = a[e >> 0] | 0;
     j = a[f >> 0] | 0;
     switch (j << 24 >> 24 | 0) {
     case 37:
      {
       I = 136;
       break i;
      }
     case 91:
      {
       p = g;
       I = 137;
       break i;
      }
     case 46:
      break;
     default:
      {
       I = 146;
       break i;
      }
     }
     e = e + 1 | 0;
     g = Xi(b, e, s) | 0;
     if (g | 0) {
      e = g;
      break a;
     }
    }
    j : do if ((I | 0) == 136) g = Yi(g & 255, d[h >> 0] | 0) | 0; else if ((I | 0) == 137) {
     o = p & 255;
     q = (a[h >> 0] | 0) == 94;
     j = q ? h : f;
     q = q & 1;
     g = q ^ 1;
     k = j + 1 | 0;
     if (k >>> 0 < r >>> 0) while (1) {
      n = a[k >> 0] | 0;
      l = j + 2 | 0;
      m = a[l >> 0] | 0;
      do if (n << 24 >> 24 == 37) if (!(Yi(o, m & 255) | 0)) j = l; else break j; else {
       if (m << 24 >> 24 == 45) {
        j = j + 3 | 0;
        if (j >>> 0 < r >>> 0) {
         if ((n & 255) > (p & 255)) break;
         if ((d[j >> 0] | 0) < (p & 255)) break; else break j;
        }
       }
       if (n << 24 >> 24 == p << 24 >> 24) break j; else j = k;
      } while (0);
      k = j + 1 | 0;
      if (k >>> 0 >= r >>> 0) {
       g = q;
       break;
      }
     } else g = q;
    } else if ((I | 0) == 146) g = j << 24 >> 24 == g << 24 >> 24 & 1; while (0);
    if (!g) {
     e = 0;
     break a;
    } else e = e + 1 | 0;
   }
  } else if ((I | 0) == 112) {
   t = f;
   e = e + 1 | 0;
   r = h;
  }
  h = c[J >> 2] | 0;
  k : do if (h >>> 0 > e >>> 0) {
   s = g + -1 | 0;
   j = e;
   f = 0;
   while (1) {
    p = a[j >> 0] | 0;
    q = p & 255;
    j = a[t >> 0] | 0;
    l : do switch (j << 24 >> 24 | 0) {
    case 46:
     break;
    case 37:
     {
      h = Yi(q, d[r >> 0] | 0) | 0;
      I = 128;
      break;
     }
    case 91:
     {
      o = (a[r >> 0] | 0) == 94;
      j = o ? r : t;
      o = o & 1;
      h = o ^ 1;
      k = j + 1 | 0;
      if (k >>> 0 < s >>> 0) while (1) {
       n = a[k >> 0] | 0;
       l = j + 2 | 0;
       m = a[l >> 0] | 0;
       do if (n << 24 >> 24 == 37) if (!(Yi(q, m & 255) | 0)) j = l; else {
        I = 128;
        break l;
       } else {
        if (m << 24 >> 24 == 45) {
         j = j + 3 | 0;
         if (j >>> 0 < s >>> 0) {
          if ((n & 255) > (p & 255)) break;
          if ((d[j >> 0] | 0) < (p & 255)) break; else {
           I = 128;
           break l;
          }
         }
        }
        if (n << 24 >> 24 == p << 24 >> 24) {
         I = 128;
         break l;
        } else j = k;
       } while (0);
       k = j + 1 | 0;
       if (k >>> 0 >= s >>> 0) {
        h = o;
        I = 128;
        break;
       }
      } else {
       h = o;
       I = 128;
      }
      break;
     }
    default:
     {
      h = j << 24 >> 24 == p << 24 >> 24 & 1;
      I = 128;
     }
    } while (0);
    if ((I | 0) == 128) {
     I = 0;
     if (!h) break k;
     h = c[J >> 2] | 0;
    }
    f = f + 1 | 0;
    j = e + f | 0;
    if (h >>> 0 <= j >>> 0) break k;
   }
  } else f = 0; while (0);
  j = g + 1 | 0;
  while (1) {
   if ((f | 0) <= -1) {
    e = 0;
    break a;
   }
   g = Xi(b, e + f | 0, j) | 0;
   h = (g | 0) == 0;
   if (h) f = (h << 31 >> 31) + f | 0; else {
    e = g;
    break;
   }
  }
 } while (0);
 c[b >> 2] = (c[b >> 2] | 0) + 1;
 i = K;
 return e | 0;
}

function se(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 te(b, d, e);
 n = (c[d >> 2] | 0) == 10;
 A = d + 16 | 0;
 do if (n) {
  k = c[d + 8 >> 2] | 0;
  if ((k | 0) != -1) {
   f = c[A >> 2] | 0;
   if ((f | 0) == -1) {
    c[A >> 2] = k;
    break;
   }
   j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
   while (1) {
    h = j + (f << 2) | 0;
    i = c[h >> 2] | 0;
    g = (i >>> 14) + -131071 | 0;
    g = (g | 0) == -1 ? -1 : f + 1 + g | 0;
    if ((g | 0) == -1) {
     g = i;
     break;
    } else f = g;
   }
   f = k + ~f | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) ae(c[b + 12 >> 2] | 0, 6980); else {
    c[h >> 2] = (f << 14) + 2147467264 | g & 16383;
    break;
   }
  }
 } while (0);
 g = c[A >> 2] | 0;
 v = d + 20 | 0;
 f = c[v >> 2] | 0;
 if ((g | 0) == (f | 0)) {
  c[A >> 2] = -1;
  c[v >> 2] = -1;
  D = d + 8 | 0;
  c[D >> 2] = e;
  c[d >> 2] = 6;
  return;
 }
 a : do if ((g | 0) == -1) D = 18; else {
  j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
  while (1) {
   h = j + (g << 2) | 0;
   if ((g | 0) > 0) {
    i = c[h + -4 >> 2] | 0;
    if ((a[3916 + (i & 63) >> 0] | 0) < 0) l = i; else D = 15;
   } else D = 15;
   if ((D | 0) == 15) {
    D = 0;
    l = c[h >> 2] | 0;
   }
   if ((l & 63 | 0) != 28) {
    D = 25;
    break a;
   }
   k = ((c[h >> 2] | 0) >>> 14) + -131071 | 0;
   g = (k | 0) == -1 ? -1 : g + 1 + k | 0;
   if ((g | 0) == -1) {
    D = 18;
    break;
   }
  }
 } while (0);
 b : do if ((D | 0) == 18) if ((f | 0) == -1) {
  u = -1;
  C = -1;
 } else {
  i = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
  while (1) {
   g = i + (f << 2) | 0;
   if ((f | 0) > 0) {
    h = c[g + -4 >> 2] | 0;
    if ((a[3916 + (h & 63) >> 0] | 0) < 0) m = h; else D = 22;
   } else D = 22;
   if ((D | 0) == 22) {
    D = 0;
    m = c[g >> 2] | 0;
   }
   if ((m & 63 | 0) != 28) {
    D = 25;
    break b;
   }
   l = ((c[g >> 2] | 0) >>> 14) + -131071 | 0;
   f = (l | 0) == -1 ? -1 : f + 1 + l | 0;
   if ((f | 0) == -1) {
    u = -1;
    C = -1;
    break;
   }
  }
 } while (0);
 do if ((D | 0) == 25) {
  m = b + 28 | 0;
  do if (n) o = -1; else {
   k = c[m >> 2] | 0;
   c[m >> 2] = -1;
   l = re(b, 2147450903) | 0;
   if ((k | 0) == -1) o = l; else if ((l | 0) == -1) o = k; else {
    i = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
    f = l;
    while (1) {
     h = i + (f << 2) | 0;
     j = c[h >> 2] | 0;
     g = (j >>> 14) + -131071 | 0;
     g = (g | 0) == -1 ? -1 : f + 1 + g | 0;
     if ((g | 0) == -1) {
      g = j;
      break;
     } else f = g;
    }
    f = k + ~f | 0;
    if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) ae(c[b + 12 >> 2] | 0, 6980); else {
     c[h >> 2] = (f << 14) + 2147467264 | g & 16383;
     o = l;
     break;
    }
   }
  } while (0);
  j = b + 20 | 0;
  n = b + 24 | 0;
  c[n >> 2] = c[j >> 2];
  l = e << 6;
  k = re(b, l | 16387) | 0;
  c[n >> 2] = c[j >> 2];
  l = re(b, l | 8388611) | 0;
  c[n >> 2] = c[j >> 2];
  if ((o | 0) == -1) {
   u = k;
   C = l;
  } else {
   f = c[m >> 2] | 0;
   if ((f | 0) == -1) {
    c[m >> 2] = o;
    u = k;
    C = l;
    break;
   }
   j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
   while (1) {
    h = j + (f << 2) | 0;
    i = c[h >> 2] | 0;
    g = (i >>> 14) + -131071 | 0;
    g = (g | 0) == -1 ? -1 : f + 1 + g | 0;
    if ((g | 0) == -1) {
     g = i;
     break;
    } else f = g;
   }
   f = o + ~f | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) ae(c[b + 12 >> 2] | 0, 6980); else {
    c[h >> 2] = (f << 14) + 2147467264 | g & 16383;
    u = k;
    C = l;
    break;
   }
  }
 } while (0);
 o = c[b + 20 >> 2] | 0;
 c[b + 24 >> 2] = o;
 f = c[v >> 2] | 0;
 c : do if ((f | 0) != -1) {
  l = e << 6;
  m = l & 16320;
  n = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
  if ((e | 0) == 255) {
   while (1) {
    k = n + (f << 2) | 0;
    j = c[k >> 2] | 0;
    i = (j >>> 14) + -131071 | 0;
    g = f;
    f = (i | 0) == -1 ? -1 : f + 1 + i | 0;
    if ((g | 0) > 0) {
     h = k + -4 | 0;
     i = c[h >> 2] | 0;
     if ((a[3916 + (i & 63) >> 0] | 0) < 0) {
      p = h;
      q = i;
     } else D = 45;
    } else D = 45;
    if ((D | 0) == 45) {
     D = 0;
     p = k;
     q = j;
    }
    if ((q & 63 | 0) == 28) {
     c[p >> 2] = q & 8372224 | q >>> 23 << 6 | 27;
     g = o + ~g | 0;
     if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) {
      D = 60;
      break;
     }
     g = c[k >> 2] & 16383 | (g << 14) + 2147467264;
    } else {
     g = u + ~g | 0;
     if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) {
      D = 63;
      break;
     }
     g = j & 16383 | (g << 14) + 2147467264;
    }
    c[k >> 2] = g;
    if ((f | 0) == -1) break c;
   }
   if ((D | 0) == 60) {
    q = b + 12 | 0;
    q = c[q >> 2] | 0;
    ae(q, 6980);
   } else if ((D | 0) == 63) {
    q = b + 12 | 0;
    q = c[q >> 2] | 0;
    ae(q, 6980);
   }
  } else s = f;
  while (1) {
   j = n + (s << 2) | 0;
   i = c[j >> 2] | 0;
   q = (i >>> 14) + -131071 | 0;
   h = s;
   s = (q | 0) == -1 ? -1 : s + 1 + q | 0;
   if ((h | 0) > 0) {
    f = j + -4 | 0;
    g = c[f >> 2] | 0;
    if ((a[3916 + (g & 63) >> 0] | 0) < 0) {
     r = f;
     t = g;
    } else D = 54;
   } else D = 54;
   if ((D | 0) == 54) {
    D = 0;
    r = j;
    t = i;
   }
   if ((t & 63 | 0) == 28) {
    if ((t >>> 23 | 0) == (e | 0)) f = t & 8372224 | l | 27; else f = t & -16321 | m;
    c[r >> 2] = f;
    f = o + ~h | 0;
    if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
     D = 60;
     break;
    }
    f = c[j >> 2] & 16383 | (f << 14) + 2147467264;
   } else {
    f = u + ~h | 0;
    if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
     D = 63;
     break;
    }
    f = i & 16383 | (f << 14) + 2147467264;
   }
   c[j >> 2] = f;
   if ((s | 0) == -1) break c;
  }
  if ((D | 0) == 60) {
   u = b + 12 | 0;
   u = c[u >> 2] | 0;
   ae(u, 6980);
  } else if ((D | 0) == 63) {
   u = b + 12 | 0;
   u = c[u >> 2] | 0;
   ae(u, 6980);
  }
 } while (0);
 f = c[A >> 2] | 0;
 if ((f | 0) == -1) {
  c[A >> 2] = -1;
  c[v >> 2] = -1;
  D = d + 8 | 0;
  c[D >> 2] = e;
  c[d >> 2] = 6;
  return;
 }
 l = e << 6;
 m = l & 16320;
 n = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 if ((e | 0) == 255) {
  while (1) {
   k = n + (f << 2) | 0;
   j = c[k >> 2] | 0;
   u = (j >>> 14) + -131071 | 0;
   g = f;
   f = (u | 0) == -1 ? -1 : f + 1 + u | 0;
   if ((g | 0) > 0) {
    h = k + -4 | 0;
    i = c[h >> 2] | 0;
    if ((a[3916 + (i & 63) >> 0] | 0) < 0) {
     w = h;
     x = i;
    } else D = 70;
   } else D = 70;
   if ((D | 0) == 70) {
    D = 0;
    w = k;
    x = j;
   }
   if ((x & 63 | 0) == 28) {
    c[w >> 2] = x & 8372224 | x >>> 23 << 6 | 27;
    g = o + ~g | 0;
    if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) {
     D = 85;
     break;
    }
    g = c[k >> 2] & 16383 | (g << 14) + 2147467264;
   } else {
    g = C + ~g | 0;
    if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) {
     D = 88;
     break;
    }
    g = j & 16383 | (g << 14) + 2147467264;
   }
   c[k >> 2] = g;
   if ((f | 0) == -1) {
    D = 91;
    break;
   }
  }
  if ((D | 0) == 85) {
   x = b + 12 | 0;
   x = c[x >> 2] | 0;
   ae(x, 6980);
  } else if ((D | 0) == 88) {
   x = b + 12 | 0;
   x = c[x >> 2] | 0;
   ae(x, 6980);
  } else if ((D | 0) == 91) {
   c[A >> 2] = -1;
   c[v >> 2] = -1;
   D = d + 8 | 0;
   c[D >> 2] = e;
   c[d >> 2] = 6;
   return;
  }
 } else z = f;
 while (1) {
  j = n + (z << 2) | 0;
  i = c[j >> 2] | 0;
  x = (i >>> 14) + -131071 | 0;
  h = z;
  z = (x | 0) == -1 ? -1 : z + 1 + x | 0;
  if ((h | 0) > 0) {
   f = j + -4 | 0;
   g = c[f >> 2] | 0;
   if ((a[3916 + (g & 63) >> 0] | 0) < 0) {
    y = f;
    B = g;
   } else D = 79;
  } else D = 79;
  if ((D | 0) == 79) {
   D = 0;
   y = j;
   B = i;
  }
  if ((B & 63 | 0) == 28) {
   if ((B >>> 23 | 0) == (e | 0)) f = B & 8372224 | l | 27; else f = B & -16321 | m;
   c[y >> 2] = f;
   f = o + ~h | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
    D = 85;
    break;
   }
   f = c[j >> 2] & 16383 | (f << 14) + 2147467264;
  } else {
   f = C + ~h | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
    D = 88;
    break;
   }
   f = i & 16383 | (f << 14) + 2147467264;
  }
  c[j >> 2] = f;
  if ((z | 0) == -1) {
   D = 91;
   break;
  }
 }
 if ((D | 0) == 85) {
  D = b + 12 | 0;
  D = c[D >> 2] | 0;
  ae(D, 6980);
 } else if ((D | 0) == 88) {
  D = b + 12 | 0;
  D = c[D >> 2] | 0;
  ae(D, 6980);
 } else if ((D | 0) == 91) {
  c[A >> 2] = -1;
  c[v >> 2] = -1;
  D = d + 8 | 0;
  c[D >> 2] = e;
  c[d >> 2] = 6;
  return;
 }
}

function Ym(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[3805] | 0;
 if (d >>> 0 < h >>> 0) Ba();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) Ba();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) Ba();
  if ((k | 0) == (c[3806] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[3803] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 15244 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) Ba();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) Ba();
   }
   if ((d | 0) == (b | 0)) {
    c[3801] = c[3801] & ~(1 << e);
    q = k;
    g = j;
    break;
   }
   if ((d | 0) == (a | 0)) f = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) Ba();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) f = a; else Ba();
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
   if (b >>> 0 < h >>> 0) Ba(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) Ba();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) Ba();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else Ba();
  } while (0);
  if (!f) {
   q = k;
   g = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 15508 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[3802] = c[3802] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[3805] | 0) >>> 0) Ba();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[3805] | 0;
   if (i >>> 0 < d >>> 0) Ba();
   c[i + 24 >> 2] = f;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) Ba(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    g = j;
   } else if (a >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
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
 if (q >>> 0 >= m >>> 0) Ba();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) Ba();
 if (!(b & 2)) {
  if ((m | 0) == (c[3807] | 0)) {
   p = (c[3804] | 0) + g | 0;
   c[3804] = p;
   c[3807] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[3806] | 0)) return;
   c[3806] = 0;
   c[3803] = 0;
   return;
  }
  if ((m | 0) == (c[3806] | 0)) {
   p = (c[3803] | 0) + g | 0;
   c[3803] = p;
   c[3806] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 15244 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[3805] | 0) >>> 0) Ba();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) Ba();
   }
   if ((d | 0) == (b | 0)) {
    c[3801] = c[3801] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[3805] | 0) >>> 0) Ba();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else Ba();
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
    if (b >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[3805] | 0) >>> 0) Ba();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) Ba();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else Ba();
   } while (0);
   if (f | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 15508 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[3802] = c[3802] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[3805] | 0) >>> 0) Ba();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[3805] | 0;
    if (n >>> 0 < d >>> 0) Ba();
    c[n + 24 >> 2] = f;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) Ba(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[3806] | 0)) {
   c[3803] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 15244 + (a << 1 << 2) | 0;
  b = c[3801] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[3801] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
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
 e = 15508 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[3802] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[3802] = a | b;
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
  if ((e | 0) == 127) if (b >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = a;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((e | 0) == 130) {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[3805] | 0;
   if (b >>> 0 >= p >>> 0 & d >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = d;
    c[q + 24 >> 2] = 0;
    break;
   } else Ba();
  }
 } while (0);
 q = (c[3809] | 0) + -1 | 0;
 c[3809] = q;
 if (!q) a = 15660; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[3809] = -1;
 return;
}

function Wc(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 C = i;
 i = i + 112 | 0;
 B = C + 104 | 0;
 A = C + 96 | 0;
 y = C + 88 | 0;
 x = C + 80 | 0;
 w = C + 72 | 0;
 v = C + 64 | 0;
 u = C + 56 | 0;
 t = C + 48 | 0;
 s = C + 40 | 0;
 r = C + 32 | 0;
 o = C + 24 | 0;
 n = C + 16 | 0;
 m = C + 8 | 0;
 l = C;
 q = Xc(b, 1, 0) | 0;
 z = Yc(b, 2) | 0;
 d = c[z >> 2] | 0;
 if (d | 0) if (a[d >> 0] | 0) c[356] = d;
 d = c[z + 4 >> 2] | 0;
 do if (!d) {
  d = 0;
  l = 1;
  e = 1;
  k = 0;
  j = 0;
 } else {
  j = d;
  h = 0;
  k = 0;
  e = 0;
  f = 0;
  d = 1;
  a : while (1) {
   if ((a[j >> 0] | 0) != 45) {
    g = k;
    p = 18;
    break;
   }
   switch (a[j + 1 >> 0] | 0) {
   case 0:
    {
     g = k;
     p = 18;
     break a;
    }
   case 45:
    {
     g = k;
     p = 7;
     break a;
    }
   case 69:
    {
     g = 1;
     break;
    }
   case 105:
    {
     if (!(a[j + 2 >> 0] | 0)) {
      h = 1;
      g = k;
      e = 1;
     } else {
      d = -1;
      break a;
     }
     break;
    }
   case 118:
    {
     if (!(a[j + 2 >> 0] | 0)) {
      g = k;
      e = 1;
     } else {
      d = -1;
      break a;
     }
     break;
    }
   case 101:
    {
     f = 1;
     p = 12;
     break;
    }
   case 108:
    {
     p = 12;
     break;
    }
   default:
    {
     g = k;
     p = 16;
     break a;
    }
   }
   if ((p | 0) == 12) {
    p = 0;
    if (!(a[j + 2 >> 0] | 0)) {
     j = d + 1 | 0;
     g = c[z + (j << 2) >> 2] | 0;
     if (!g) {
      g = k;
      p = 15;
      break;
     }
     if ((a[g >> 0] | 0) == 45) {
      g = k;
      p = 15;
      break;
     } else {
      g = k;
      d = j;
     }
    } else g = k;
   }
   d = d + 1 | 0;
   j = c[z + (d << 2) >> 2] | 0;
   if (!j) {
    d = 0;
    p = 23;
    break;
   } else k = g;
  }
  if ((p | 0) == 7) if (!(a[j + 2 >> 0] | 0)) {
   d = d + 1 | 0;
   if (!(c[z + (d << 2) >> 2] | 0)) {
    d = 0;
    p = 23;
   } else p = 18;
  } else d = -1; else if ((p | 0) == 15) {
   d = 0 - d | 0;
   p = 18;
  } else if ((p | 0) == 16) {
   d = 0 - d | 0;
   p = 18;
  }
  if ((p | 0) == 18) if ((d | 0) >= 0) p = 23;
  if ((p | 0) == 23) {
   if (!e) e = 1; else {
    e = c[749] | 0;
    zm(5837, 1, 51, e) | 0;
    xm(10, e) | 0;
    lm(e) | 0;
    e = 0;
   }
   if (!g) {
    l = e;
    e = 1;
    k = h;
    j = f;
    break;
   }
   Zc(b, 1);
   _c(b, -1001e3, 8624);
   l = e;
   e = 0;
   k = h;
   j = f;
   break;
  }
  d = c[z + (0 - d << 2) >> 2] | 0;
  e = c[720] | 0;
  c[l >> 2] = c[356];
  em(e, 5396, l) | 0;
  lm(e) | 0;
  switch (a[d + 1 >> 0] | 0) {
  case 108:
  case 101:
   {
    c[m >> 2] = d;
    em(e, 5444, m) | 0;
    lm(e) | 0;
    break;
   }
  default:
   {
    c[n >> 2] = d;
    em(e, 5465, n) | 0;
    lm(e) | 0;
   }
  }
  c[o >> 2] = c[356];
  em(e, 5491, o) | 0;
  lm(e) | 0;
  b = 0;
  i = C;
  return b | 0;
 } while (0);
 $c(b, 502.0);
 ld(b, 0, 0) | 0;
 nd(b);
 ld(b, 1, 0) | 0;
 do if (e) {
  e = Ca(12088) | 0;
  if (!e) {
   e = Ca(12102) | 0;
   if (!e) break; else f = 12101;
  } else f = 12087;
  if ((a[e >> 0] | 0) == 64) {
   if (!(Md(b, e + 1 | 0, 0) | 0)) {
    t = yd(b) | 0;
    Of(b, 144, 0);
    Fd(b, t);
    c[3786] = b;
    ea(2, 1) | 0;
    u = dg(b, 0, 0, t, 0, 0) | 0;
    ea(2, 0) | 0;
    Ed(b, t);
    if (!u) break;
   }
   if (!(ud(b, -1) | 0)) {
    b = 0;
    i = C;
    return b | 0;
   }
   e = Tc(b, -1, 0) | 0;
   f = c[356] | 0;
   d = c[720] | 0;
   if (f | 0) {
    c[r >> 2] = f;
    em(d, 5396, r) | 0;
    lm(d) | 0;
   }
   c[s >> 2] = (e | 0) == 0 ? 12154 : e;
   em(d, 11968, s) | 0;
   lm(d) | 0;
   kd(b, -2);
   ld(b, 2, 0) | 0;
   b = 0;
   i = C;
   return b | 0;
  } else {
   if (!(Tf(b, e, Jl(e) | 0, f, 0) | 0)) {
    r = yd(b) | 0;
    Of(b, 144, 0);
    Fd(b, r);
    c[3786] = b;
    ea(2, 1) | 0;
    s = dg(b, 0, 0, r, 0, 0) | 0;
    ea(2, 0) | 0;
    Ed(b, r);
    if (!s) break;
   }
   if (!(ud(b, -1) | 0)) {
    b = 0;
    i = C;
    return b | 0;
   }
   e = Tc(b, -1, 0) | 0;
   f = c[356] | 0;
   d = c[720] | 0;
   if (f | 0) {
    c[t >> 2] = f;
    em(d, 5396, t) | 0;
    lm(d) | 0;
   }
   c[u >> 2] = (e | 0) == 0 ? 12154 : e;
   em(d, 11968, u) | 0;
   lm(d) | 0;
   kd(b, -2);
   ld(b, 2, 0) | 0;
   b = 0;
   i = C;
   return b | 0;
  }
 } while (0);
 g = (d | 0) > 0 ? d : q;
 b : do if ((g | 0) > 1) {
  e = 1;
  c : while (1) {
   f = c[z + (e << 2) >> 2] | 0;
   switch (a[f + 1 >> 0] | 0) {
   case 101:
    {
     f = f + 2 | 0;
     if (!(a[f >> 0] | 0)) {
      e = e + 1 | 0;
      f = c[z + (e << 2) >> 2] | 0;
     }
     if (Tf(b, f, Jl(f) | 0, 12185, 0) | 0) {
      p = 49;
      break c;
     }
     t = yd(b) | 0;
     Of(b, 144, 0);
     Fd(b, t);
     c[3786] = b;
     ea(2, 1) | 0;
     u = dg(b, 0, 0, t, 0, 0) | 0;
     ea(2, 0) | 0;
     Ed(b, t);
     if (u) {
      p = 49;
      break c;
     }
     break;
    }
   case 108:
    {
     f = f + 2 | 0;
     if (!(a[f >> 0] | 0)) {
      e = e + 1 | 0;
      f = c[z + (e << 2) >> 2] | 0;
     }
     gg(b, 12201);
     Hf(b, f) | 0;
     t = (yd(b) | 0) + -1 | 0;
     Of(b, 144, 0);
     Fd(b, t);
     c[3786] = b;
     ea(2, 1) | 0;
     u = dg(b, 1, 1, t, 0, 0) | 0;
     ea(2, 0) | 0;
     Ed(b, t);
     if (u | 0) {
      p = 57;
      break c;
     }
     Gg(b, f);
     break;
    }
   default:
    {}
   }
   e = e + 1 | 0;
   if ((e | 0) >= (g | 0)) break b;
  }
  if ((p | 0) == 49) {
   if (!(ud(b, -1) | 0)) {
    b = 0;
    i = C;
    return b | 0;
   }
   e = Tc(b, -1, 0) | 0;
   f = c[356] | 0;
   d = c[720] | 0;
   if (f | 0) {
    c[v >> 2] = f;
    em(d, 5396, v) | 0;
    lm(d) | 0;
   }
   c[w >> 2] = (e | 0) == 0 ? 12154 : e;
   em(d, 11968, w) | 0;
   lm(d) | 0;
   kd(b, -2);
   ld(b, 2, 0) | 0;
   b = 0;
   i = C;
   return b | 0;
  } else if ((p | 0) == 57) {
   if (!(ud(b, -1) | 0)) {
    b = 0;
    i = C;
    return b | 0;
   }
   e = Tc(b, -1, 0) | 0;
   f = c[356] | 0;
   d = c[720] | 0;
   if (f | 0) {
    c[x >> 2] = f;
    em(d, 5396, x) | 0;
    lm(d) | 0;
   }
   c[y >> 2] = (e | 0) == 0 ? 12154 : e;
   em(d, 11968, y) | 0;
   lm(d) | 0;
   kd(b, -2);
   ld(b, 2, 0) | 0;
   b = 0;
   i = C;
   return b | 0;
  }
 } while (0);
 do if (d | 0) {
  e = 0;
  while (1) if (!(c[z + (e << 2) >> 2] | 0)) break; else e = e + 1 | 0;
  f = d + 1 | 0;
  h = e - f | 0;
  Wf(b, h + 3 | 0, 12209);
  if ((e | 0) > (f | 0)) {
   g = f;
   do {
    Hf(b, c[z + (g << 2) >> 2] | 0) | 0;
    g = g + 1 | 0;
   } while ((g | 0) != (e | 0));
  }
  Fg(b, h, f);
  if ((e | 0) > 0) {
   f = 0;
   do {
    Hf(b, c[z + (f << 2) >> 2] | 0) | 0;
    Xg(b, -2, f - d | 0);
    f = f + 1 | 0;
   } while ((f | 0) != (e | 0));
  }
  Gg(b, 12238);
  e = c[z + (d << 2) >> 2] | 0;
  if (!(Ql(e, 12242) | 0)) {
   z = (Ql(c[z + (d + -1 << 2) >> 2] | 0, 12244) | 0) == 0;
   e = z ? e : 0;
  }
  z = Md(b, e, 0) | 0;
  e = ~h;
  Fd(b, e);
  if (!z) {
   y = (yd(b) | 0) - h | 0;
   Of(b, 144, 0);
   Fd(b, y);
   c[3786] = b;
   ea(2, 1) | 0;
   z = dg(b, h, -1, y, 0, 0) | 0;
   ea(2, 0) | 0;
   Ed(b, y);
   if (!z) break;
  } else kd(b, e);
  if (!(ud(b, -1) | 0)) {
   b = 0;
   i = C;
   return b | 0;
  }
  e = Tc(b, -1, 0) | 0;
  f = c[356] | 0;
  d = c[720] | 0;
  if (f | 0) {
   c[A >> 2] = f;
   em(d, 5396, A) | 0;
   lm(d) | 0;
  }
  c[B >> 2] = (e | 0) == 0 ? 12154 : e;
  em(d, 11968, B) | 0;
  lm(d) | 0;
  kd(b, -2);
  ld(b, 2, 0) | 0;
  b = 0;
  i = C;
  return b | 0;
 } while (0);
 if (!k) {
  if (l & (j | d | 0) == 0) {
   B = c[749] | 0;
   zm(5837, 1, 51, B) | 0;
   xm(10, B) | 0;
   lm(B) | 0;
   Kk(b);
  }
 } else Kk(b);
 Zc(b, 1);
 b = 1;
 i = C;
 return b | 0;
}

function $m(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 o = a + b | 0;
 d = c[a + 4 >> 2] | 0;
 do if (!(d & 1)) {
  f = c[a >> 2] | 0;
  if (!(d & 3)) return;
  l = a + (0 - f) | 0;
  k = f + b | 0;
  i = c[3805] | 0;
  if (l >>> 0 < i >>> 0) Ba();
  if ((l | 0) == (c[3806] | 0)) {
   a = o + 4 | 0;
   d = c[a >> 2] | 0;
   if ((d & 3 | 0) != 3) {
    r = l;
    g = k;
    break;
   }
   c[3803] = k;
   c[a >> 2] = d & -2;
   c[l + 4 >> 2] = k | 1;
   c[l + k >> 2] = k;
   return;
  }
  e = f >>> 3;
  if (f >>> 0 < 256) {
   a = c[l + 8 >> 2] | 0;
   b = c[l + 12 >> 2] | 0;
   d = 15244 + (e << 1 << 2) | 0;
   if ((a | 0) != (d | 0)) {
    if (a >>> 0 < i >>> 0) Ba();
    if ((c[a + 12 >> 2] | 0) != (l | 0)) Ba();
   }
   if ((b | 0) == (a | 0)) {
    c[3801] = c[3801] & ~(1 << e);
    r = l;
    g = k;
    break;
   }
   if ((b | 0) == (d | 0)) h = b + 8 | 0; else {
    if (b >>> 0 < i >>> 0) Ba();
    d = b + 8 | 0;
    if ((c[d >> 2] | 0) == (l | 0)) h = d; else Ba();
   }
   c[a + 12 >> 2] = b;
   c[h >> 2] = a;
   r = l;
   g = k;
   break;
  }
  f = c[l + 24 >> 2] | 0;
  b = c[l + 12 >> 2] | 0;
  do if ((b | 0) == (l | 0)) {
   a = l + 16 | 0;
   b = a + 4 | 0;
   d = c[b >> 2] | 0;
   if (!d) {
    d = c[a >> 2] | 0;
    if (!d) {
     j = 0;
     break;
    }
   } else a = b;
   while (1) {
    b = d + 20 | 0;
    e = c[b >> 2] | 0;
    if (e | 0) {
     d = e;
     a = b;
     continue;
    }
    b = d + 16 | 0;
    e = c[b >> 2] | 0;
    if (!e) break; else {
     d = e;
     a = b;
    }
   }
   if (a >>> 0 < i >>> 0) Ba(); else {
    c[a >> 2] = 0;
    j = d;
    break;
   }
  } else {
   e = c[l + 8 >> 2] | 0;
   if (e >>> 0 < i >>> 0) Ba();
   d = e + 12 | 0;
   if ((c[d >> 2] | 0) != (l | 0)) Ba();
   a = b + 8 | 0;
   if ((c[a >> 2] | 0) == (l | 0)) {
    c[d >> 2] = b;
    c[a >> 2] = e;
    j = b;
    break;
   } else Ba();
  } while (0);
  if (!f) {
   r = l;
   g = k;
  } else {
   d = c[l + 28 >> 2] | 0;
   a = 15508 + (d << 2) | 0;
   if ((l | 0) == (c[a >> 2] | 0)) {
    c[a >> 2] = j;
    if (!j) {
     c[3802] = c[3802] & ~(1 << d);
     r = l;
     g = k;
     break;
    }
   } else {
    if (f >>> 0 < (c[3805] | 0) >>> 0) Ba();
    d = f + 16 | 0;
    if ((c[d >> 2] | 0) == (l | 0)) c[d >> 2] = j; else c[f + 20 >> 2] = j;
    if (!j) {
     r = l;
     g = k;
     break;
    }
   }
   b = c[3805] | 0;
   if (j >>> 0 < b >>> 0) Ba();
   c[j + 24 >> 2] = f;
   d = l + 16 | 0;
   a = c[d >> 2] | 0;
   do if (a | 0) if (a >>> 0 < b >>> 0) Ba(); else {
    c[j + 16 >> 2] = a;
    c[a + 24 >> 2] = j;
    break;
   } while (0);
   d = c[d + 4 >> 2] | 0;
   if (!d) {
    r = l;
    g = k;
   } else if (d >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
    c[j + 20 >> 2] = d;
    c[d + 24 >> 2] = j;
    r = l;
    g = k;
    break;
   }
  }
 } else {
  r = a;
  g = b;
 } while (0);
 h = c[3805] | 0;
 if (o >>> 0 < h >>> 0) Ba();
 d = o + 4 | 0;
 a = c[d >> 2] | 0;
 if (!(a & 2)) {
  if ((o | 0) == (c[3807] | 0)) {
   q = (c[3804] | 0) + g | 0;
   c[3804] = q;
   c[3807] = r;
   c[r + 4 >> 2] = q | 1;
   if ((r | 0) != (c[3806] | 0)) return;
   c[3806] = 0;
   c[3803] = 0;
   return;
  }
  if ((o | 0) == (c[3806] | 0)) {
   q = (c[3803] | 0) + g | 0;
   c[3803] = q;
   c[3806] = r;
   c[r + 4 >> 2] = q | 1;
   c[r + q >> 2] = q;
   return;
  }
  g = (a & -8) + g | 0;
  e = a >>> 3;
  do if (a >>> 0 < 256) {
   a = c[o + 8 >> 2] | 0;
   b = c[o + 12 >> 2] | 0;
   d = 15244 + (e << 1 << 2) | 0;
   if ((a | 0) != (d | 0)) {
    if (a >>> 0 < h >>> 0) Ba();
    if ((c[a + 12 >> 2] | 0) != (o | 0)) Ba();
   }
   if ((b | 0) == (a | 0)) {
    c[3801] = c[3801] & ~(1 << e);
    break;
   }
   if ((b | 0) == (d | 0)) m = b + 8 | 0; else {
    if (b >>> 0 < h >>> 0) Ba();
    d = b + 8 | 0;
    if ((c[d >> 2] | 0) == (o | 0)) m = d; else Ba();
   }
   c[a + 12 >> 2] = b;
   c[m >> 2] = a;
  } else {
   f = c[o + 24 >> 2] | 0;
   b = c[o + 12 >> 2] | 0;
   do if ((b | 0) == (o | 0)) {
    a = o + 16 | 0;
    b = a + 4 | 0;
    d = c[b >> 2] | 0;
    if (!d) {
     d = c[a >> 2] | 0;
     if (!d) {
      n = 0;
      break;
     }
    } else a = b;
    while (1) {
     b = d + 20 | 0;
     e = c[b >> 2] | 0;
     if (e | 0) {
      d = e;
      a = b;
      continue;
     }
     b = d + 16 | 0;
     e = c[b >> 2] | 0;
     if (!e) break; else {
      d = e;
      a = b;
     }
    }
    if (a >>> 0 < h >>> 0) Ba(); else {
     c[a >> 2] = 0;
     n = d;
     break;
    }
   } else {
    e = c[o + 8 >> 2] | 0;
    if (e >>> 0 < h >>> 0) Ba();
    d = e + 12 | 0;
    if ((c[d >> 2] | 0) != (o | 0)) Ba();
    a = b + 8 | 0;
    if ((c[a >> 2] | 0) == (o | 0)) {
     c[d >> 2] = b;
     c[a >> 2] = e;
     n = b;
     break;
    } else Ba();
   } while (0);
   if (f | 0) {
    d = c[o + 28 >> 2] | 0;
    a = 15508 + (d << 2) | 0;
    if ((o | 0) == (c[a >> 2] | 0)) {
     c[a >> 2] = n;
     if (!n) {
      c[3802] = c[3802] & ~(1 << d);
      break;
     }
    } else {
     if (f >>> 0 < (c[3805] | 0) >>> 0) Ba();
     d = f + 16 | 0;
     if ((c[d >> 2] | 0) == (o | 0)) c[d >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    b = c[3805] | 0;
    if (n >>> 0 < b >>> 0) Ba();
    c[n + 24 >> 2] = f;
    d = o + 16 | 0;
    a = c[d >> 2] | 0;
    do if (a | 0) if (a >>> 0 < b >>> 0) Ba(); else {
     c[n + 16 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    } while (0);
    d = c[d + 4 >> 2] | 0;
    if (d | 0) if (d >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
     c[n + 20 >> 2] = d;
     c[d + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[r + 4 >> 2] = g | 1;
  c[r + g >> 2] = g;
  if ((r | 0) == (c[3806] | 0)) {
   c[3803] = g;
   return;
  }
 } else {
  c[d >> 2] = a & -2;
  c[r + 4 >> 2] = g | 1;
  c[r + g >> 2] = g;
 }
 d = g >>> 3;
 if (g >>> 0 < 256) {
  b = 15244 + (d << 1 << 2) | 0;
  a = c[3801] | 0;
  d = 1 << d;
  if (!(a & d)) {
   c[3801] = a | d;
   p = b + 8 | 0;
   q = b;
  } else {
   d = b + 8 | 0;
   a = c[d >> 2] | 0;
   if (a >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
    p = d;
    q = a;
   }
  }
  c[p >> 2] = r;
  c[q + 12 >> 2] = r;
  c[r + 8 >> 2] = q;
  c[r + 12 >> 2] = b;
  return;
 }
 d = g >>> 8;
 if (!d) b = 0; else if (g >>> 0 > 16777215) b = 31; else {
  p = (d + 1048320 | 0) >>> 16 & 8;
  q = d << p;
  o = (q + 520192 | 0) >>> 16 & 4;
  q = q << o;
  b = (q + 245760 | 0) >>> 16 & 2;
  b = 14 - (o | p | b) + (q << b >>> 15) | 0;
  b = g >>> (b + 7 | 0) & 1 | b << 1;
 }
 e = 15508 + (b << 2) | 0;
 c[r + 28 >> 2] = b;
 c[r + 20 >> 2] = 0;
 c[r + 16 >> 2] = 0;
 d = c[3802] | 0;
 a = 1 << b;
 if (!(d & a)) {
  c[3802] = d | a;
  c[e >> 2] = r;
  c[r + 24 >> 2] = e;
  c[r + 12 >> 2] = r;
  c[r + 8 >> 2] = r;
  return;
 }
 f = g << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);
 d = c[e >> 2] | 0;
 while (1) {
  if ((c[d + 4 >> 2] & -8 | 0) == (g | 0)) {
   b = d;
   e = 127;
   break;
  }
  a = d + 16 + (f >>> 31 << 2) | 0;
  b = c[a >> 2] | 0;
  if (!b) {
   e = 124;
   break;
  } else {
   f = f << 1;
   d = b;
  }
 }
 if ((e | 0) == 124) {
  if (a >>> 0 < (c[3805] | 0) >>> 0) Ba();
  c[a >> 2] = r;
  c[r + 24 >> 2] = d;
  c[r + 12 >> 2] = r;
  c[r + 8 >> 2] = r;
  return;
 } else if ((e | 0) == 127) {
  d = b + 8 | 0;
  a = c[d >> 2] | 0;
  q = c[3805] | 0;
  if (!(a >>> 0 >= q >>> 0 & b >>> 0 >= q >>> 0)) Ba();
  c[a + 12 >> 2] = r;
  c[d >> 2] = r;
  c[r + 8 >> 2] = a;
  c[r + 12 >> 2] = b;
  c[r + 24 >> 2] = 0;
  return;
 }
}

function Cb(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 v = i;
 i = i + 16 | 0;
 g = v;
 t = b + 12 | 0;
 u = c[t >> 2] | 0;
 n = u + 61 | 0;
 switch (d[n >> 0] | 0) {
 case 5:
  {
   g = u + 16 | 0;
   c[g >> 2] = c[u + 32 >> 2] << 2;
   e = u + 84 | 0;
   c[e >> 2] = 0;
   c[e + 4 >> 2] = 0;
   c[e + 8 >> 2] = 0;
   c[e + 12 >> 2] = 0;
   c[e + 16 >> 2] = 0;
   e = c[u + 172 >> 2] | 0;
   if (e | 0) if (a[e + 5 >> 0] & 3) Db(u, e);
   if (c[u + 48 >> 2] & 64 | 0) {
    e = c[u + 40 >> 2] | 0;
    if (a[e + 5 >> 0] & 3) Db(u, e);
   }
   Eb(u);
   e = c[u + 104 >> 2] | 0;
   if (e | 0) {
    f = u + 60 | 0;
    do {
     b = e + 5 | 0;
     a[b >> 0] = d[f >> 0] & 3 | d[b >> 0] & 184;
     Db(u, e);
     e = c[e >> 2] | 0;
    } while ((e | 0) != 0);
   }
   a[n >> 0] = 0;
   b = c[g >> 2] | 0;
   i = v;
   return b | 0;
  }
 case 0:
  {
   m = u + 84 | 0;
   if (c[m >> 2] | 0) {
    t = u + 16 | 0;
    b = c[t >> 2] | 0;
    Fb(u);
    b = (c[t >> 2] | 0) - b | 0;
    i = v;
    return b | 0;
   }
   a[n >> 0] = 1;
   r = u + 16 | 0;
   h = c[r >> 2] | 0;
   s = u + 20 | 0;
   c[s >> 2] = h;
   if (a[b + 5 >> 0] & 3) Db(u, b);
   if (c[u + 48 >> 2] & 64 | 0) {
    e = c[u + 40 >> 2] | 0;
    if (a[e + 5 >> 0] & 3) Db(u, e);
   }
   Eb(u);
   g = u + 112 | 0;
   e = c[u + 128 + 4 >> 2] | 0;
   if ((e | 0) != (g | 0)) do {
    if (!(a[e + 5 >> 0] & 7)) {
     f = c[e + 8 >> 2] | 0;
     if (c[f + 8 >> 2] & 64 | 0) {
      f = c[f >> 2] | 0;
      if (a[f + 5 >> 0] & 3) Db(u, f);
     }
    }
    e = c[e + 16 + 4 >> 2] | 0;
   } while ((e | 0) != (g | 0));
   if (c[m >> 2] | 0) do Fb(u); while ((c[m >> 2] | 0) != 0);
   k = (c[r >> 2] | 0) - h | 0;
   q = u + 92 | 0;
   e = c[q >> 2] | 0;
   o = u + 88 | 0;
   p = c[o >> 2] | 0;
   l = u + 96 | 0;
   f = c[l >> 2] | 0;
   c[l >> 2] = 0;
   c[o >> 2] = 0;
   c[q >> 2] = 0;
   c[m >> 2] = p;
   if (p | 0) do Fb(u); while ((c[m >> 2] | 0) != 0);
   c[m >> 2] = e;
   if (e | 0) do Fb(u); while ((c[m >> 2] | 0) != 0);
   c[m >> 2] = f;
   if (f | 0) do Fb(u); while ((c[m >> 2] | 0) != 0);
   j = c[r >> 2] | 0;
   while (1) {
    f = c[l >> 2] | 0;
    c[l >> 2] = 0;
    e = 0;
    a : while (1) {
     g = f;
     while (1) {
      if (!g) break a;
      f = c[g + 24 >> 2] | 0;
      if (!(Hb(u, g) | 0)) g = f; else break;
     }
     if (!(c[m >> 2] | 0)) {
      e = 1;
      continue;
     }
     while (1) {
      Fb(u);
      if (!(c[m >> 2] | 0)) {
       e = 1;
       continue a;
      }
     }
    }
    if (!e) break;
   }
   Ib(u, c[q >> 2] | 0, 0);
   n = u + 100 | 0;
   Ib(u, c[n >> 2] | 0, 0);
   o = c[q >> 2] | 0;
   p = c[n >> 2] | 0;
   g = c[r >> 2] | 0;
   h = c[t >> 2] | 0;
   f = h + 104 | 0;
   while (1) {
    e = c[f >> 2] | 0;
    if (!e) break; else f = e;
   }
   k = k - j + g | 0;
   g = h + 72 | 0;
   e = c[g >> 2] | 0;
   b : do if (e | 0) do {
    while (1) {
     h = e + 5 | 0;
     j = d[h >> 0] | 0;
     if (!(j & 3)) {
      g = e;
      break;
     }
     a[h >> 0] = j | 8;
     c[g >> 2] = c[e >> 2];
     c[e >> 2] = c[f >> 2];
     c[f >> 2] = e;
     f = c[g >> 2] | 0;
     if (!f) break b; else {
      j = e;
      e = f;
      f = j;
     }
    }
    e = c[g >> 2] | 0;
   } while ((e | 0) != 0); while (0);
   e = c[u + 104 >> 2] | 0;
   if (e | 0) {
    f = u + 60 | 0;
    do {
     j = e + 5 | 0;
     a[j >> 0] = d[f >> 0] & 3 | d[j >> 0] & 184;
     Db(u, e);
     e = c[e >> 2] | 0;
    } while ((e | 0) != 0);
   }
   if (c[m >> 2] | 0) do Fb(u); while ((c[m >> 2] | 0) != 0);
   h = c[r >> 2] | 0;
   while (1) {
    f = c[l >> 2] | 0;
    c[l >> 2] = 0;
    e = 0;
    c : while (1) {
     g = f;
     while (1) {
      if (!g) break c;
      f = c[g + 24 >> 2] | 0;
      if (!(Hb(u, g) | 0)) g = f; else break;
     }
     if (!(c[m >> 2] | 0)) {
      e = 1;
      continue;
     }
     while (1) {
      Fb(u);
      if (!(c[m >> 2] | 0)) {
       e = 1;
       continue c;
      }
     }
    }
    if (!e) break;
   }
   m = k - h | 0;
   e = c[l >> 2] | 0;
   if (e | 0) do {
    k = a[e + 7 >> 0] | 0;
    f = c[e + 16 >> 2] | 0;
    l = f + (1 << (k & 255) << 5) | 0;
    if (k << 24 >> 24 != 31) do {
     g = f + 8 | 0;
     do if (c[g >> 2] | 0) {
      h = f + 24 | 0;
      j = c[h >> 2] | 0;
      if (!(j & 64)) break;
      k = c[f + 16 >> 2] | 0;
      if ((j & 15 | 0) != 4) {
       if (!(a[k + 5 >> 0] & 3)) break;
       c[g >> 2] = 0;
       c[h >> 2] = 11;
       break;
      }
      if (!k) break;
      if (!(a[k + 5 >> 0] & 3)) break;
      Db(u, k);
     } while (0);
     f = f + 32 | 0;
    } while (f >>> 0 < l >>> 0);
    e = c[e + 24 >> 2] | 0;
   } while ((e | 0) != 0);
   e = c[n >> 2] | 0;
   if (e | 0) do {
    k = a[e + 7 >> 0] | 0;
    f = c[e + 16 >> 2] | 0;
    l = f + (1 << (k & 255) << 5) | 0;
    if (k << 24 >> 24 != 31) do {
     g = f + 8 | 0;
     do if (c[g >> 2] | 0) {
      h = f + 24 | 0;
      j = c[h >> 2] | 0;
      if (!(j & 64)) break;
      k = c[f + 16 >> 2] | 0;
      if ((j & 15 | 0) != 4) {
       if (!(a[k + 5 >> 0] & 3)) break;
       c[g >> 2] = 0;
       c[h >> 2] = 11;
       break;
      }
      if (!k) break;
      if (!(a[k + 5 >> 0] & 3)) break;
      Db(u, k);
     } while (0);
     f = f + 32 | 0;
    } while (f >>> 0 < l >>> 0);
    e = c[e + 24 >> 2] | 0;
   } while ((e | 0) != 0);
   Ib(u, c[q >> 2] | 0, o);
   Ib(u, c[n >> 2] | 0, p);
   k = u + 60 | 0;
   a[k >> 0] = d[k >> 0] ^ 3;
   k = m + (c[r >> 2] | 0) | 0;
   c[s >> 2] = (c[s >> 2] | 0) + k;
   j = c[t >> 2] | 0;
   a[j + 61 >> 0] = 2;
   c[j + 64 >> 2] = 0;
   g = j + 72 | 0;
   e = 0;
   while (1) {
    f = e + 1 | 0;
    e = Kb(b, g, 1) | 0;
    if ((e | 0) == (g | 0)) e = f; else {
     h = f;
     break;
    }
   }
   c[j + 80 >> 2] = e;
   g = j + 68 | 0;
   f = 0;
   do {
    f = f + 1 | 0;
    e = Kb(b, g, 1) | 0;
   } while ((e | 0) == (g | 0));
   c[j + 76 >> 2] = e;
   b = ((f + h | 0) * 5 | 0) + k | 0;
   i = v;
   return b | 0;
  }
 case 2:
  {
   l = u + 64 | 0;
   k = u + 32 | 0;
   j = u + 24 | 0;
   e = 0;
   while (1) {
    g = c[l >> 2] | 0;
    h = g + e | 0;
    f = c[k >> 2] | 0;
    if ((h | 0) >= (f | 0)) break;
    Kb(b, (c[j >> 2] | 0) + (h << 2) | 0, -3) | 0;
    e = e + 1 | 0;
    if ((e | 0) >= 80) {
     m = 93;
     break;
    }
   }
   if ((m | 0) == 93) {
    g = c[l >> 2] | 0;
    f = c[k >> 2] | 0;
   }
   b = g + e | 0;
   c[l >> 2] = b;
   if ((b | 0) >= (f | 0)) a[n >> 0] = 3;
   b = e * 5 | 0;
   i = v;
   return b | 0;
  }
 case 3:
  {
   e = u + 80 | 0;
   f = c[e >> 2] | 0;
   if (!f) {
    a[n >> 0] = 4;
    b = 0;
    i = v;
    return b | 0;
   } else {
    c[e >> 2] = Kb(b, f, 80) | 0;
    b = 400;
    i = v;
    return b | 0;
   }
  }
 case 4:
  {
   e = u + 76 | 0;
   f = c[e >> 2] | 0;
   if (f | 0) {
    c[e >> 2] = Kb(b, f, 80) | 0;
    b = 400;
    i = v;
    return b | 0;
   }
   c[g >> 2] = c[u + 172 >> 2];
   Kb(b, g, 1) | 0;
   e = c[t >> 2] | 0;
   if ((a[e + 62 >> 0] | 0) != 1) {
    f = (c[e + 32 >> 2] | 0) / 2 | 0;
    if ((c[e + 28 >> 2] | 0) >>> 0 < f >>> 0) Ab(b, f);
    t = e + 144 | 0;
    u = e + 152 | 0;
    c[t >> 2] = mb(b, c[t >> 2] | 0, c[u >> 2] | 0, 0) | 0;
    c[u >> 2] = 0;
   }
   a[n >> 0] = 5;
   b = 5;
   i = v;
   return b | 0;
  }
 default:
  {
   b = 0;
   i = v;
   return b | 0;
  }
 }
 return 0;
}

function Nl(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 w = i;
 i = i + 1056 | 0;
 u = w + 1024 | 0;
 v = w;
 k = a[e >> 0] | 0;
 do if (k << 24 >> 24) {
  t = Ol(b, k << 24 >> 24) | 0;
  if (!t) b = 0; else {
   j = a[e + 1 >> 0] | 0;
   if (!(j << 24 >> 24)) b = t; else {
    f = t + 1 | 0;
    m = a[f >> 0] | 0;
    if (!(m << 24 >> 24)) b = 0; else {
     h = a[e + 2 >> 0] | 0;
     if (!(h << 24 >> 24)) {
      j = j & 255 | (k & 255) << 8;
      b = m;
      g = d[t >> 0] << 8 | m & 255;
      while (1) {
       g = g & 65535;
       if ((g | 0) == (j | 0)) break;
       f = f + 1 | 0;
       h = a[f >> 0] | 0;
       if (!(h << 24 >> 24)) {
        b = 0;
        break;
       } else {
        b = h;
        g = h & 255 | g << 8;
       }
      }
      b = b << 24 >> 24 ? f + -1 | 0 : 0;
      break;
     }
     f = t + 2 | 0;
     b = a[f >> 0] | 0;
     if (!(b << 24 >> 24)) b = 0; else {
      g = a[e + 3 >> 0] | 0;
      if (!(g << 24 >> 24)) {
       h = (j & 255) << 16 | (k & 255) << 24 | (h & 255) << 8;
       g = (b & 255) << 8 | (m & 255) << 16 | d[t >> 0] << 24;
       if ((g | 0) != (h | 0)) do {
        f = f + 1 | 0;
        b = a[f >> 0] | 0;
        g = (b & 255 | g) << 8;
       } while (!(b << 24 >> 24 == 0 | (g | 0) == (h | 0)));
       b = b << 24 >> 24 ? f + -2 | 0 : 0;
       break;
      }
      f = t + 3 | 0;
      l = a[f >> 0] | 0;
      if (!(l << 24 >> 24)) b = 0; else {
       if (!(a[e + 4 >> 0] | 0)) {
        h = (j & 255) << 16 | (k & 255) << 24 | (h & 255) << 8 | g & 255;
        b = (b & 255) << 8 | (m & 255) << 16 | l & 255 | d[t >> 0] << 24;
        if ((b | 0) == (h | 0)) b = l; else {
         g = b;
         do {
          f = f + 1 | 0;
          b = a[f >> 0] | 0;
          g = b & 255 | g << 8;
         } while (!(b << 24 >> 24 == 0 | (g | 0) == (h | 0)));
        }
        b = b << 24 >> 24 ? f + -3 | 0 : 0;
        break;
       };
       c[u >> 2] = 0;
       c[u + 4 >> 2] = 0;
       c[u + 8 >> 2] = 0;
       c[u + 12 >> 2] = 0;
       c[u + 16 >> 2] = 0;
       c[u + 20 >> 2] = 0;
       c[u + 24 >> 2] = 0;
       c[u + 28 >> 2] = 0;
       b = k;
       g = 0;
       while (1) {
        if (!(a[t + g >> 0] | 0)) {
         b = 0;
         break;
        }
        f = u + (((b & 255) >>> 5 & 255) << 2) | 0;
        c[f >> 2] = c[f >> 2] | 1 << (b & 31);
        f = g + 1 | 0;
        c[v + ((b & 255) << 2) >> 2] = f;
        b = a[e + f >> 0] | 0;
        if (!(b << 24 >> 24)) {
         n = 23;
         break;
        } else g = f;
       }
       a : do if ((n | 0) == 23) {
        b : do if (f >>> 0 > 1) {
         h = 1;
         n = -1;
         b = 0;
         c : while (1) {
          m = 1;
          while (1) {
           d : while (1) {
            j = 1;
            while (1) {
             k = a[e + (j + n) >> 0] | 0;
             l = a[e + h >> 0] | 0;
             if (k << 24 >> 24 != l << 24 >> 24) {
              m = h;
              j = k;
              h = l;
              break d;
             }
             if ((j | 0) == (m | 0)) break;
             j = j + 1 | 0;
             h = j + b | 0;
             if (h >>> 0 >= f >>> 0) {
              b = n;
              p = m;
              break c;
             }
            }
            b = b + m | 0;
            h = b + 1 | 0;
            if (h >>> 0 >= f >>> 0) {
             b = n;
             p = m;
             break c;
            }
           }
           k = m - n | 0;
           if ((j & 255) <= (h & 255)) break;
           b = m + 1 | 0;
           if (b >>> 0 < f >>> 0) {
            h = b;
            b = m;
            m = k;
           } else {
            b = n;
            p = k;
            break c;
           }
          }
          h = b + 2 | 0;
          if (h >>> 0 >= f >>> 0) {
           p = 1;
           break;
          } else {
           n = b;
           b = b + 1 | 0;
          }
         }
         j = 1;
         k = -1;
         h = 0;
         while (1) {
          l = h;
          h = 1;
          while (1) {
           o = l;
           e : while (1) {
            l = 1;
            while (1) {
             n = a[e + (l + k) >> 0] | 0;
             m = a[e + j >> 0] | 0;
             if (n << 24 >> 24 != m << 24 >> 24) {
              l = j;
              j = o;
              break e;
             }
             if ((l | 0) == (h | 0)) break;
             l = l + 1 | 0;
             j = l + o | 0;
             if (j >>> 0 >= f >>> 0) {
              j = p;
              break b;
             }
            }
            o = o + h | 0;
            j = o + 1 | 0;
            if (j >>> 0 >= f >>> 0) {
             j = p;
             break b;
            }
           }
           h = l - k | 0;
           if ((n & 255) >= (m & 255)) {
            h = j;
            break;
           }
           j = l + 1 | 0;
           if (j >>> 0 >= f >>> 0) {
            j = p;
            break b;
           }
          }
          j = h + 2 | 0;
          if (j >>> 0 >= f >>> 0) {
           k = h;
           j = p;
           h = 1;
           break;
          } else {
           k = h;
           h = h + 1 | 0;
          }
         }
        } else {
         b = -1;
         k = -1;
         j = 1;
         h = 1;
        } while (0);
        r = (k + 1 | 0) >>> 0 > (b + 1 | 0) >>> 0;
        h = r ? h : j;
        r = r ? k : b;
        q = r + 1 | 0;
        if (!(Ml(e, e + h | 0, q) | 0)) s = f - h | 0; else {
         h = f - r + -1 | 0;
         s = 0;
         h = (r >>> 0 > h >>> 0 ? r : h) + 1 | 0;
        }
        n = f | 63;
        o = (s | 0) != 0;
        p = f - h | 0;
        b = t;
        m = 0;
        l = t;
        f : while (1) {
         j = b;
         do if ((l - j | 0) >>> 0 < f >>> 0) {
          k = zl(l, 0, n) | 0;
          if (!k) {
           k = l + n | 0;
           break;
          } else if ((k - j | 0) >>> 0 < f >>> 0) {
           b = 0;
           break a;
          } else break;
         } else k = l; while (0);
         j = a[b + g >> 0] | 0;
         if (!(1 << (j & 31) & c[u + (((j & 255) >>> 5 & 255) << 2) >> 2])) {
          b = b + f | 0;
          m = 0;
          l = k;
          continue;
         }
         t = c[v + ((j & 255) << 2) >> 2] | 0;
         j = f - t | 0;
         if ((f | 0) != (t | 0)) {
          b = b + (o & (m | 0) != 0 & j >>> 0 < h >>> 0 ? p : j) | 0;
          m = 0;
          l = k;
          continue;
         }
         j = q >>> 0 > m >>> 0 ? q : m;
         l = a[e + j >> 0] | 0;
         g : do if (!(l << 24 >> 24)) j = q; else {
          while (1) {
           if (l << 24 >> 24 != (a[b + j >> 0] | 0)) break;
           j = j + 1 | 0;
           l = a[e + j >> 0] | 0;
           if (!(l << 24 >> 24)) {
            j = q;
            break g;
           }
          }
          b = b + (j - r) | 0;
          m = 0;
          l = k;
          continue f;
         } while (0);
         do {
          if (j >>> 0 <= m >>> 0) break a;
          j = j + -1 | 0;
         } while ((a[e + j >> 0] | 0) == (a[b + j >> 0] | 0));
         b = b + h | 0;
         m = s;
         l = k;
        }
       } while (0);
      }
     }
    }
   }
  }
 } while (0);
 i = w;
 return b | 0;
}

function Yd(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 16 | 0;
 q = r;
 p = b + 4 | 0;
 if (Vd(c[p >> 2] | 0, q, 4) | 0) Wd(b, 6486);
 f = c[q >> 2] | 0;
 if ((f | 0) < 0) Wd(b, 6560);
 c[e + 64 >> 2] = f;
 if (Vd(c[p >> 2] | 0, q, 4) | 0) Wd(b, 6486);
 f = c[q >> 2] | 0;
 if ((f | 0) < 0) Wd(b, 6560);
 c[e + 68 >> 2] = f;
 if (Vd(c[p >> 2] | 0, q, 1) | 0) Wd(b, 6486);
 a[e + 76 >> 0] = a[q >> 0] | 0;
 if (Vd(c[p >> 2] | 0, q, 1) | 0) Wd(b, 6486);
 a[e + 77 >> 0] = a[q >> 0] | 0;
 if (Vd(c[p >> 2] | 0, q, 1) | 0) Wd(b, 6486);
 a[e + 78 >> 0] = a[q >> 0] | 0;
 if (Vd(c[p >> 2] | 0, q, 4) | 0) Wd(b, 6486);
 f = c[q >> 2] | 0;
 if ((f | 0) < 0) Wd(b, 6560);
 g = c[b >> 2] | 0;
 if ((f + 1 | 0) >>> 0 > 1073741823) yb(g);
 n = f << 2;
 m = mb(g, 0, 0, n) | 0;
 c[e + 12 >> 2] = m;
 c[e + 48 >> 2] = f;
 if (Vd(c[p >> 2] | 0, m, n) | 0) Wd(b, 6486);
 if (Vd(c[p >> 2] | 0, q, 4) | 0) Wd(b, 6486);
 n = c[q >> 2] | 0;
 if ((n | 0) < 0) Wd(b, 6560);
 f = c[b >> 2] | 0;
 if ((n + 1 | 0) >>> 0 > 268435455) yb(f);
 f = mb(f, 0, 0, n << 4) | 0;
 m = e + 8 | 0;
 c[m >> 2] = f;
 c[e + 44 >> 2] = n;
 g = (n | 0) > 0;
 a : do if (g) {
  j = 0;
  do {
   c[f + (j << 4) + 8 >> 2] = 0;
   j = j + 1 | 0;
  } while ((j | 0) != (n | 0));
  if (g) {
   g = b + 8 | 0;
   l = 0;
   b : while (1) {
    j = c[m >> 2] | 0;
    k = j + (l << 4) | 0;
    if (Vd(c[p >> 2] | 0, q, 1) | 0) {
     f = 34;
     break;
    }
    switch (a[q >> 0] | 0) {
    case 0:
     {
      c[j + (l << 4) + 8 >> 2] = 0;
      break;
     }
    case 1:
     {
      if (Vd(c[p >> 2] | 0, q, 1) | 0) {
       f = 38;
       break b;
      }
      c[k >> 2] = a[q >> 0];
      c[j + (l << 4) + 8 >> 2] = 1;
      break;
     }
    case 3:
     {
      if (Vd(c[p >> 2] | 0, q, 8) | 0) {
       f = 41;
       break b;
      }
      h[k >> 3] = +h[q >> 3];
      c[j + (l << 4) + 8 >> 2] = 3;
      break;
     }
    case 4:
     {
      if (Vd(c[p >> 2] | 0, q, 4) | 0) {
       f = 44;
       break b;
      }
      f = c[q >> 2] | 0;
      if (!f) f = 0; else {
       f = Zb(c[b >> 2] | 0, c[g >> 2] | 0, f) | 0;
       if (Vd(c[p >> 2] | 0, f, c[q >> 2] | 0) | 0) {
        f = 47;
        break b;
       }
       f = zb(c[b >> 2] | 0, f, (c[q >> 2] | 0) + -1 | 0) | 0;
      }
      c[k >> 2] = f;
      c[j + (l << 4) + 8 >> 2] = d[f + 4 >> 0] | 64;
      break;
     }
    default:
     {}
    }
    l = l + 1 | 0;
    if ((l | 0) >= (n | 0)) break a;
   }
   if ((f | 0) == 34) Wd(b, 6486); else if ((f | 0) == 38) Wd(b, 6486); else if ((f | 0) == 41) Wd(b, 6486); else if ((f | 0) == 44) Wd(b, 6486); else if ((f | 0) == 47) Wd(b, 6486);
  }
 } while (0);
 if (Vd(c[p >> 2] | 0, q, 4) | 0) Wd(b, 6486);
 k = c[q >> 2] | 0;
 if ((k | 0) < 0) Wd(b, 6560);
 f = c[b >> 2] | 0;
 if ((k + 1 | 0) >>> 0 > 1073741823) yb(f);
 f = mb(f, 0, 0, k << 2) | 0;
 j = e + 16 | 0;
 c[j >> 2] = f;
 c[e + 56 >> 2] = k;
 g = (k | 0) > 0;
 do if (g) {
  c[f >> 2] = 0;
  if ((k | 0) != 1) {
   f = 1;
   do {
    c[(c[j >> 2] | 0) + (f << 2) >> 2] = 0;
    f = f + 1 | 0;
   } while ((f | 0) != (k | 0));
  }
  if (g) f = 0; else break;
  do {
   n = Xd(c[b >> 2] | 0) | 0;
   c[(c[j >> 2] | 0) + (f << 2) >> 2] = n;
   Yd(b, c[(c[j >> 2] | 0) + (f << 2) >> 2] | 0);
   f = f + 1 | 0;
  } while ((f | 0) != (k | 0));
 } while (0);
 if (Vd(c[p >> 2] | 0, q, 4) | 0) Wd(b, 6486);
 j = c[q >> 2] | 0;
 if ((j | 0) < 0) Wd(b, 6560);
 f = c[b >> 2] | 0;
 if ((j + 1 | 0) >>> 0 > 536870911) yb(f);
 f = mb(f, 0, 0, j << 3) | 0;
 m = e + 28 | 0;
 c[m >> 2] = f;
 c[e + 40 >> 2] = j;
 c : do if ((j | 0) > 0) {
  g = 0;
  do {
   c[f + (g << 3) >> 2] = 0;
   g = g + 1 | 0;
  } while ((g | 0) != (j | 0));
  f = 0;
  while (1) {
   if (Vd(c[p >> 2] | 0, q, 1) | 0) {
    f = 71;
    break;
   }
   a[(c[m >> 2] | 0) + (f << 3) + 4 >> 0] = a[q >> 0] | 0;
   if (Vd(c[p >> 2] | 0, q, 1) | 0) {
    f = 73;
    break;
   }
   a[(c[m >> 2] | 0) + (f << 3) + 5 >> 0] = a[q >> 0] | 0;
   f = f + 1 | 0;
   if ((f | 0) >= (j | 0)) break c;
  }
  if ((f | 0) == 71) Wd(b, 6486); else if ((f | 0) == 73) Wd(b, 6486);
 } while (0);
 if (Vd(c[p >> 2] | 0, q, 4) | 0) Wd(b, 6486);
 f = c[q >> 2] | 0;
 do if (!f) o = 0; else {
  f = Zb(c[b >> 2] | 0, c[b + 8 >> 2] | 0, f) | 0;
  if (!(Vd(c[p >> 2] | 0, f, c[q >> 2] | 0) | 0)) {
   o = zb(c[b >> 2] | 0, f, (c[q >> 2] | 0) + -1 | 0) | 0;
   break;
  } else Wd(b, 6486);
 } while (0);
 c[e + 36 >> 2] = o;
 if (Vd(c[p >> 2] | 0, q, 4) | 0) Wd(b, 6486);
 f = c[q >> 2] | 0;
 if ((f | 0) < 0) Wd(b, 6560);
 g = c[b >> 2] | 0;
 if ((f + 1 | 0) >>> 0 > 1073741823) yb(g);
 o = f << 2;
 n = mb(g, 0, 0, o) | 0;
 c[e + 20 >> 2] = n;
 c[e + 52 >> 2] = f;
 if (Vd(c[p >> 2] | 0, n, o) | 0) Wd(b, 6486);
 if (Vd(c[p >> 2] | 0, q, 4) | 0) Wd(b, 6486);
 l = c[q >> 2] | 0;
 if ((l | 0) < 0) Wd(b, 6560);
 f = c[b >> 2] | 0;
 if ((l + 1 | 0) >>> 0 > 357913941) yb(f);
 g = mb(f, 0, 0, l * 12 | 0) | 0;
 k = e + 24 | 0;
 c[k >> 2] = g;
 c[e + 60 >> 2] = l;
 d : do if ((l | 0) > 0) {
  f = 0;
  do {
   c[g + (f * 12 | 0) >> 2] = 0;
   f = f + 1 | 0;
  } while ((f | 0) != (l | 0));
  g = b + 8 | 0;
  j = 0;
  while (1) {
   if (Vd(c[p >> 2] | 0, q, 4) | 0) {
    f = 99;
    break;
   }
   f = c[q >> 2] | 0;
   if (!f) f = 0; else {
    f = Zb(c[b >> 2] | 0, c[g >> 2] | 0, f) | 0;
    if (Vd(c[p >> 2] | 0, f, c[q >> 2] | 0) | 0) {
     f = 102;
     break;
    }
    f = zb(c[b >> 2] | 0, f, (c[q >> 2] | 0) + -1 | 0) | 0;
   }
   c[(c[k >> 2] | 0) + (j * 12 | 0) >> 2] = f;
   if (Vd(c[p >> 2] | 0, q, 4) | 0) {
    f = 105;
    break;
   }
   f = c[q >> 2] | 0;
   if ((f | 0) < 0) {
    f = 107;
    break;
   }
   c[(c[k >> 2] | 0) + (j * 12 | 0) + 4 >> 2] = f;
   if (Vd(c[p >> 2] | 0, q, 4) | 0) {
    f = 109;
    break;
   }
   f = c[q >> 2] | 0;
   if ((f | 0) < 0) {
    f = 111;
    break;
   }
   c[(c[k >> 2] | 0) + (j * 12 | 0) + 8 >> 2] = f;
   j = j + 1 | 0;
   if ((j | 0) >= (l | 0)) break d;
  }
  if ((f | 0) == 99) Wd(b, 6486); else if ((f | 0) == 102) Wd(b, 6486); else if ((f | 0) == 105) Wd(b, 6486); else if ((f | 0) == 107) Wd(b, 6560); else if ((f | 0) == 109) Wd(b, 6486); else if ((f | 0) == 111) Wd(b, 6560);
 } while (0);
 if (Vd(c[p >> 2] | 0, q, 4) | 0) Wd(b, 6486);
 g = c[q >> 2] | 0;
 if ((g | 0) < 0) Wd(b, 6560);
 if ((g | 0) <= 0) {
  i = r;
  return;
 }
 j = b + 8 | 0;
 k = 0;
 while (1) {
  if (Vd(c[p >> 2] | 0, q, 4) | 0) {
   f = 120;
   break;
  }
  f = c[q >> 2] | 0;
  if (!f) f = 0; else {
   f = Zb(c[b >> 2] | 0, c[j >> 2] | 0, f) | 0;
   if (Vd(c[p >> 2] | 0, f, c[q >> 2] | 0) | 0) {
    f = 123;
    break;
   }
   f = zb(c[b >> 2] | 0, f, (c[q >> 2] | 0) + -1 | 0) | 0;
  }
  c[(c[m >> 2] | 0) + (k << 3) >> 2] = f;
  k = k + 1 | 0;
  if ((k | 0) >= (g | 0)) {
   f = 126;
   break;
  }
 }
 if ((f | 0) == 120) Wd(b, 6486); else if ((f | 0) == 123) Wd(b, 6486); else if ((f | 0) == 126) {
  i = r;
  return;
 }
}

function Fb(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 g = b + 84 | 0;
 m = c[g >> 2] | 0;
 i = m + 5 | 0;
 a[i >> 0] = d[i >> 0] | 4;
 e = c[m + 4 >> 2] | 0;
 h = e >>> 16;
 f = h & 255;
 switch (e & 255 | 0) {
 case 5:
  {
   k = m + 24 | 0;
   c[g >> 2] = c[k >> 2];
   g = m + 8 | 0;
   f = c[g >> 2] | 0;
   do if (!f) l = 34; else {
    if (!(a[f + 6 >> 0] & 8)) {
     e = Gb(f, 3, c[b + 196 >> 2] | 0) | 0;
     f = c[g >> 2] | 0;
     if (f) l = 5;
    } else {
     e = 0;
     l = 5;
    }
    if ((l | 0) == 5) if (a[f + 5 >> 0] & 3) Db(b, f);
    if (!e) l = 34; else if ((c[e + 8 >> 2] & 15 | 0) == 4) {
     f = (c[e >> 2] | 0) + 16 | 0;
     e = Ol(f, 107) | 0;
     e = (e | 0) != 0;
     f = (Ol(f, 118) | 0) != 0;
     if (e | f) {
      a[i >> 0] = d[i >> 0] & 251;
      if (e) if (f) {
       j = b + 100 | 0;
       c[k >> 2] = c[j >> 2];
       c[j >> 2] = m;
       break;
      } else {
       Hb(b, m) | 0;
       break;
      }
      i = a[m + 7 >> 0] | 0;
      f = c[m + 16 >> 2] | 0;
      j = f + (1 << (i & 255) << 5) | 0;
      e = (c[m + 28 >> 2] | 0) > 0 & 1;
      if (i << 24 >> 24 != 31) do {
       i = f + 8 | 0;
       g = f + 24 | 0;
       h = (c[g >> 2] & 64 | 0) == 0;
       if (!(c[i >> 2] | 0)) {
        if (!h) if (a[(c[f + 16 >> 2] | 0) + 5 >> 0] & 3) c[g >> 2] = 11;
       } else {
        if (!h) {
         g = c[f + 16 >> 2] | 0;
         if (a[g + 5 >> 0] & 3) Db(b, g);
        }
        if (!e) {
         e = c[i >> 2] | 0;
         do if (!(e & 64)) e = 0; else {
          g = c[f >> 2] | 0;
          if ((e & 15 | 0) != 4) {
           e = d[g + 5 >> 0] & 3;
           break;
          }
          if (!g) e = 0; else if (!(a[g + 5 >> 0] & 3)) e = 0; else {
           Db(b, g);
           e = 0;
          }
         } while (0);
         e = (e | 0) != 0 & 1;
        }
       }
       f = f + 32 | 0;
      } while (f >>> 0 < j >>> 0);
      if (!e) {
       j = b + 88 | 0;
       c[k >> 2] = c[j >> 2];
       c[j >> 2] = m;
       break;
      } else {
       j = b + 92 | 0;
       c[k >> 2] = c[j >> 2];
       c[j >> 2] = m;
       break;
      }
     } else l = 34;
    } else l = 34;
   } while (0);
   if ((l | 0) == 34) {
    i = m + 16 | 0;
    e = c[i >> 2] | 0;
    k = e + (1 << d[m + 7 >> 0] << 5) | 0;
    j = m + 28 | 0;
    f = c[j >> 2] | 0;
    if ((f | 0) > 0) {
     h = m + 12 | 0;
     g = 0;
     do {
      e = c[h >> 2] | 0;
      if (c[e + (g << 4) + 8 >> 2] & 64) {
       e = c[e + (g << 4) >> 2] | 0;
       if (a[e + 5 >> 0] & 3) {
        Db(b, e);
        f = c[j >> 2] | 0;
       }
      }
      g = g + 1 | 0;
     } while ((g | 0) < (f | 0));
     e = c[i >> 2] | 0;
    }
    if (e >>> 0 < k >>> 0) do {
     i = e + 8 | 0;
     f = c[i >> 2] | 0;
     g = e + 24 | 0;
     h = (c[g >> 2] & 64 | 0) == 0;
     if (!f) {
      if (!h) if (a[(c[e + 16 >> 2] | 0) + 5 >> 0] & 3) c[g >> 2] = 11;
     } else {
      if (!h) {
       g = c[e + 16 >> 2] | 0;
       if (a[g + 5 >> 0] & 3) {
        Db(b, g);
        f = c[i >> 2] | 0;
       }
      }
      if (f & 64 | 0) {
       f = c[e >> 2] | 0;
       if (a[f + 5 >> 0] & 3) Db(b, f);
      }
     }
     e = e + 32 | 0;
    } while (e >>> 0 < k >>> 0);
   }
   e = (c[m + 28 >> 2] << 4) + 32 + (32 << d[m + 7 >> 0]) | 0;
   break;
  }
 case 6:
  {
   c[g >> 2] = c[m + 8 >> 2];
   e = c[m + 12 >> 2] | 0;
   if (!e) e = f; else if (!(a[e + 5 >> 0] & 3)) e = f; else {
    Db(b, e);
    e = a[m + 6 >> 0] | 0;
   }
   h = m + 6 | 0;
   if (!(e << 24 >> 24)) e = e & 255; else {
    g = 0;
    while (1) {
     f = c[m + 16 + (g << 2) >> 2] | 0;
     if (!f) f = e; else if (!(a[f + 5 >> 0] & 3)) f = e; else {
      Db(b, f);
      f = a[h >> 0] | 0;
     }
     g = g + 1 | 0;
     e = f & 255;
     if ((g | 0) >= (e | 0)) break; else e = f;
    }
   }
   e = (e << 2) + 16 | 0;
   break;
  }
 case 38:
  {
   c[g >> 2] = c[m + 8 >> 2];
   i = m + 6 | 0;
   if (!(f << 24 >> 24)) e = h & 255; else {
    g = 0;
    do {
     if (c[m + 16 + (g << 4) + 8 >> 2] & 64) {
      e = c[m + 16 + (g << 4) >> 2] | 0;
      if (a[e + 5 >> 0] & 3) {
       Db(b, e);
       f = a[i >> 0] | 0;
      }
     }
     g = g + 1 | 0;
     e = f & 255;
    } while ((g | 0) < (e | 0));
   }
   e = (e << 4) + 16 | 0;
   break;
  }
 case 8:
  {
   l = m + 60 | 0;
   c[g >> 2] = c[l >> 2];
   f = b + 88 | 0;
   c[l >> 2] = c[f >> 2];
   c[f >> 2] = m;
   a[i >> 0] = e >>> 8 & 251;
   i = m + 28 | 0;
   f = c[i >> 2] | 0;
   if (!f) e = 1; else {
    h = m + 8 | 0;
    e = c[h >> 2] | 0;
    if (f >>> 0 < e >>> 0) do {
     if (c[f + 8 >> 2] & 64) {
      g = c[f >> 2] | 0;
      if (a[g + 5 >> 0] & 3) {
       Db(b, g);
       e = c[h >> 2] | 0;
      }
     }
     f = f + 16 | 0;
    } while (f >>> 0 < e >>> 0);
    if ((a[b + 61 >> 0] | 0) == 1) {
     e = c[m + 32 >> 2] | 0;
     g = (c[i >> 2] | 0) + (e << 4) | 0;
     if (f >>> 0 < g >>> 0) do {
      c[f + 8 >> 2] = 0;
      f = f + 16 | 0;
     } while (f >>> 0 < g >>> 0);
    } else e = c[m + 32 >> 2] | 0;
    e = (e << 4) + 112 | 0;
   }
   break;
  }
 case 9:
  {
   c[g >> 2] = c[m + 72 >> 2];
   e = m + 32 | 0;
   f = c[e >> 2] | 0;
   if (f | 0) if (a[f + 5 >> 0] & 3) c[e >> 2] = 0;
   e = c[m + 36 >> 2] | 0;
   if (e | 0) if (a[e + 5 >> 0] & 3) Db(b, e);
   l = m + 44 | 0;
   e = c[l >> 2] | 0;
   if ((e | 0) > 0) {
    h = m + 8 | 0;
    g = 0;
    do {
     f = c[h >> 2] | 0;
     if (c[f + (g << 4) + 8 >> 2] & 64) {
      f = c[f + (g << 4) >> 2] | 0;
      if (a[f + 5 >> 0] & 3) {
       Db(b, f);
       e = c[l >> 2] | 0;
      }
     }
     g = g + 1 | 0;
    } while ((g | 0) < (e | 0));
   }
   k = m + 40 | 0;
   e = c[k >> 2] | 0;
   if ((e | 0) > 0) {
    h = m + 28 | 0;
    g = 0;
    do {
     f = c[(c[h >> 2] | 0) + (g << 3) >> 2] | 0;
     if (f) if (a[f + 5 >> 0] & 3) {
      Db(b, f);
      e = c[k >> 2] | 0;
     }
     g = g + 1 | 0;
    } while ((g | 0) < (e | 0));
   }
   j = m + 56 | 0;
   f = c[j >> 2] | 0;
   if ((f | 0) > 0) {
    h = m + 16 | 0;
    g = 0;
    do {
     e = c[(c[h >> 2] | 0) + (g << 2) >> 2] | 0;
     if (e) if (a[e + 5 >> 0] & 3) {
      Db(b, e);
      f = c[j >> 2] | 0;
     }
     g = g + 1 | 0;
    } while ((g | 0) < (f | 0));
   }
   i = m + 60 | 0;
   e = c[i >> 2] | 0;
   if ((e | 0) > 0) {
    h = m + 24 | 0;
    g = 0;
    do {
     f = c[(c[h >> 2] | 0) + (g * 12 | 0) >> 2] | 0;
     if (f) if (a[f + 5 >> 0] & 3) {
      Db(b, f);
      e = c[i >> 2] | 0;
     }
     g = g + 1 | 0;
    } while ((g | 0) < (e | 0));
    f = c[j >> 2] | 0;
   }
   e = (e * 12 | 0) + 80 + (c[l >> 2] << 4) + (c[k >> 2] << 3) + ((c[m + 48 >> 2] | 0) + f + (c[m + 52 >> 2] | 0) << 2) | 0;
   break;
  }
 default:
  return;
 }
 b = b + 16 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + e;
 return;
}

function Ui(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 t = i;
 i = i + 16 | 0;
 r = t;
 c[r >> 2] = c[d + 64 >> 2];
 s = e + 16 | 0;
 f = c[s >> 2] | 0;
 if (!f) {
  f = Ya[c[e + 4 >> 2] & 3](c[e >> 2] | 0, r, 4, c[e + 8 >> 2] | 0) | 0;
  c[s >> 2] = f;
 }
 c[r >> 2] = c[d + 68 >> 2];
 if (!f) {
  f = Ya[c[e + 4 >> 2] & 3](c[e >> 2] | 0, r, 4, c[e + 8 >> 2] | 0) | 0;
  c[s >> 2] = f;
 }
 g = b[d + 76 >> 1] | 0;
 a[r >> 0] = g;
 if (!f) {
  f = Ya[c[e + 4 >> 2] & 3](c[e >> 2] | 0, r, 1, c[e + 8 >> 2] | 0) | 0;
  c[s >> 2] = f;
  a[r >> 0] = a[d + 77 >> 0] | 0;
  if (!f) {
   f = Ya[c[e + 4 >> 2] & 3](c[e >> 2] | 0, r, 1, c[e + 8 >> 2] | 0) | 0;
   c[s >> 2] = f;
  }
 } else a[r >> 0] = (g & 65535) >>> 8;
 a[r >> 0] = a[d + 78 >> 0] | 0;
 if (!f) {
  f = Ya[c[e + 4 >> 2] & 3](c[e >> 2] | 0, r, 1, c[e + 8 >> 2] | 0) | 0;
  c[s >> 2] = f;
 }
 k = c[d + 12 >> 2] | 0;
 l = c[d + 48 >> 2] | 0;
 c[r >> 2] = l;
 if (!f) {
  g = e + 4 | 0;
  j = e + 8 | 0;
  f = Ya[c[g >> 2] & 3](c[e >> 2] | 0, r, 4, c[j >> 2] | 0) | 0;
  c[s >> 2] = f;
  if (!f) {
   f = Ya[c[g >> 2] & 3](c[e >> 2] | 0, k, l << 2, c[j >> 2] | 0) | 0;
   c[s >> 2] = f;
   g = c[d + 44 >> 2] | 0;
   c[r >> 2] = g;
   if (!f) {
    f = Ya[c[e + 4 >> 2] & 3](c[e >> 2] | 0, r, 4, c[e + 8 >> 2] | 0) | 0;
    c[s >> 2] = f;
   }
  } else q = 14;
 } else q = 14;
 if ((q | 0) == 14) {
  g = c[d + 44 >> 2] | 0;
  c[r >> 2] = g;
 }
 a : do if ((g | 0) > 0) {
  n = d + 8 | 0;
  o = e + 4 | 0;
  p = e + 8 | 0;
  m = 0;
  while (1) {
   k = c[n >> 2] | 0;
   l = k + (m << 4) | 0;
   k = k + (m << 4) + 8 | 0;
   j = c[k >> 2] | 0;
   a[r >> 0] = j & 15;
   if (!f) {
    f = Ya[c[o >> 2] & 3](c[e >> 2] | 0, r, 1, c[p >> 2] | 0) | 0;
    c[s >> 2] = f;
    j = c[k >> 2] | 0;
   }
   b : do switch (j & 15 | 0) {
   case 4:
    {
     j = c[l >> 2] | 0;
     if (!j) {
      c[r >> 2] = 0;
      if (!f) {
       f = Ya[c[o >> 2] & 3](c[e >> 2] | 0, r, 4, c[p >> 2] | 0) | 0;
       c[s >> 2] = f;
      }
      break b;
     }
     c[r >> 2] = (c[j + 12 >> 2] | 0) + 1;
     if (!f) {
      f = Ya[c[o >> 2] & 3](c[e >> 2] | 0, r, 4, c[p >> 2] | 0) | 0;
      c[s >> 2] = f;
      if (!f) {
       f = Ya[c[o >> 2] & 3](c[e >> 2] | 0, j + 16 | 0, c[r >> 2] | 0, c[p >> 2] | 0) | 0;
       c[s >> 2] = f;
      }
     }
     break;
    }
   case 1:
    {
     a[r >> 0] = c[l >> 2];
     if (!f) {
      f = Ya[c[o >> 2] & 3](c[e >> 2] | 0, r, 1, c[p >> 2] | 0) | 0;
      c[s >> 2] = f;
     }
     break;
    }
   case 3:
    {
     h[r >> 3] = +h[l >> 3];
     if (!f) {
      f = Ya[c[o >> 2] & 3](c[e >> 2] | 0, r, 8, c[p >> 2] | 0) | 0;
      c[s >> 2] = f;
     }
     break;
    }
   default:
    {}
   } while (0);
   m = m + 1 | 0;
   if ((m | 0) == (g | 0)) break a;
  }
 } while (0);
 j = c[d + 56 >> 2] | 0;
 c[r >> 2] = j;
 if (!f) {
  f = Ya[c[e + 4 >> 2] & 3](c[e >> 2] | 0, r, 4, c[e + 8 >> 2] | 0) | 0;
  c[s >> 2] = f;
 }
 if ((j | 0) > 0) {
  f = d + 16 | 0;
  g = 0;
  do {
   Ui(c[(c[f >> 2] | 0) + (g << 2) >> 2] | 0, e);
   g = g + 1 | 0;
  } while ((g | 0) != (j | 0));
  f = c[s >> 2] | 0;
 }
 p = d + 40 | 0;
 n = c[p >> 2] | 0;
 c[r >> 2] = n;
 if (!f) {
  f = Ya[c[e + 4 >> 2] & 3](c[e >> 2] | 0, r, 4, c[e + 8 >> 2] | 0) | 0;
  c[s >> 2] = f;
 }
 if ((n | 0) > 0) {
  k = d + 28 | 0;
  l = e + 4 | 0;
  m = e + 8 | 0;
  j = 0;
  do {
   g = c[k >> 2] | 0;
   a[r >> 0] = a[g + (j << 3) + 4 >> 0] | 0;
   if (!f) {
    f = Ya[c[l >> 2] & 3](c[e >> 2] | 0, r, 1, c[m >> 2] | 0) | 0;
    c[s >> 2] = f;
    g = c[k >> 2] | 0;
   }
   a[r >> 0] = a[g + (j << 3) + 5 >> 0] | 0;
   if (!f) {
    f = Ya[c[l >> 2] & 3](c[e >> 2] | 0, r, 1, c[m >> 2] | 0) | 0;
    c[s >> 2] = f;
   }
   j = j + 1 | 0;
  } while ((j | 0) != (n | 0));
 }
 o = e + 12 | 0;
 if (!(c[o >> 2] | 0)) {
  k = c[d + 36 >> 2] | 0;
  if (!k) q = 54; else {
   c[r >> 2] = (c[k + 12 >> 2] | 0) + 1;
   if (!f) {
    g = e + 4 | 0;
    j = e + 8 | 0;
    f = Ya[c[g >> 2] & 3](c[e >> 2] | 0, r, 4, c[j >> 2] | 0) | 0;
    c[s >> 2] = f;
    if (!f) {
     f = Ya[c[g >> 2] & 3](c[e >> 2] | 0, k + 16 | 0, c[r >> 2] | 0, c[j >> 2] | 0) | 0;
     c[s >> 2] = f;
    }
   }
  }
 } else q = 54;
 if ((q | 0) == 54) {
  c[r >> 2] = 0;
  if (!f) {
   f = Ya[c[e + 4 >> 2] & 3](c[e >> 2] | 0, r, 4, c[e + 8 >> 2] | 0) | 0;
   c[s >> 2] = f;
  }
 }
 if (!(c[o >> 2] | 0)) l = c[d + 52 >> 2] | 0; else l = 0;
 k = c[d + 20 >> 2] | 0;
 c[r >> 2] = l;
 if (!f) {
  g = e + 4 | 0;
  j = e + 8 | 0;
  f = Ya[c[g >> 2] & 3](c[e >> 2] | 0, r, 4, c[j >> 2] | 0) | 0;
  c[s >> 2] = f;
  if (!f) {
   f = Ya[c[g >> 2] & 3](c[e >> 2] | 0, k, l << 2, c[j >> 2] | 0) | 0;
   c[s >> 2] = f;
  }
 }
 if (!(c[o >> 2] | 0)) n = c[d + 60 >> 2] | 0; else n = 0;
 c[r >> 2] = n;
 if (!f) {
  f = Ya[c[e + 4 >> 2] & 3](c[e >> 2] | 0, r, 4, c[e + 8 >> 2] | 0) | 0;
  c[s >> 2] = f;
 }
 if ((n | 0) > 0) {
  k = d + 24 | 0;
  l = e + 4 | 0;
  m = e + 8 | 0;
  j = 0;
  do {
   g = c[(c[k >> 2] | 0) + (j * 12 | 0) >> 2] | 0;
   if (!g) {
    c[r >> 2] = 0;
    if (!f) {
     f = Ya[c[l >> 2] & 3](c[e >> 2] | 0, r, 4, c[m >> 2] | 0) | 0;
     c[s >> 2] = f;
    }
   } else {
    c[r >> 2] = (c[g + 12 >> 2] | 0) + 1;
    do if (!f) {
     f = Ya[c[l >> 2] & 3](c[e >> 2] | 0, r, 4, c[m >> 2] | 0) | 0;
     c[s >> 2] = f;
     if (f | 0) break;
     f = Ya[c[l >> 2] & 3](c[e >> 2] | 0, g + 16 | 0, c[r >> 2] | 0, c[m >> 2] | 0) | 0;
     c[s >> 2] = f;
    } while (0);
   }
   g = c[k >> 2] | 0;
   c[r >> 2] = c[g + (j * 12 | 0) + 4 >> 2];
   if (!f) {
    f = Ya[c[l >> 2] & 3](c[e >> 2] | 0, r, 4, c[m >> 2] | 0) | 0;
    c[s >> 2] = f;
    g = c[k >> 2] | 0;
   }
   c[r >> 2] = c[g + (j * 12 | 0) + 8 >> 2];
   if (!f) {
    f = Ya[c[l >> 2] & 3](c[e >> 2] | 0, r, 4, c[m >> 2] | 0) | 0;
    c[s >> 2] = f;
   }
   j = j + 1 | 0;
  } while ((j | 0) != (n | 0));
 }
 if (!(c[o >> 2] | 0)) n = c[p >> 2] | 0; else n = 0;
 c[r >> 2] = n;
 if (!f) {
  f = Ya[c[e + 4 >> 2] & 3](c[e >> 2] | 0, r, 4, c[e + 8 >> 2] | 0) | 0;
  c[s >> 2] = f;
 }
 if ((n | 0) <= 0) {
  i = t;
  return;
 }
 k = d + 28 | 0;
 l = e + 4 | 0;
 m = e + 8 | 0;
 j = 0;
 do {
  g = c[(c[k >> 2] | 0) + (j << 3) >> 2] | 0;
  if (!g) {
   c[r >> 2] = 0;
   if (!f) {
    f = Ya[c[l >> 2] & 3](c[e >> 2] | 0, r, 4, c[m >> 2] | 0) | 0;
    c[s >> 2] = f;
   }
  } else {
   c[r >> 2] = (c[g + 12 >> 2] | 0) + 1;
   do if (!f) {
    f = Ya[c[l >> 2] & 3](c[e >> 2] | 0, r, 4, c[m >> 2] | 0) | 0;
    c[s >> 2] = f;
    if (f | 0) break;
    f = Ya[c[l >> 2] & 3](c[e >> 2] | 0, g + 16 | 0, c[r >> 2] | 0, c[m >> 2] | 0) | 0;
    c[s >> 2] = f;
   } while (0);
  }
  j = j + 1 | 0;
 } while ((j | 0) != (n | 0));
 i = t;
 return;
}

function $k(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a : do if (e >>> 0 > 36) {
  c[(Ok() | 0) >> 2] = 22;
  h = 0;
  g = 0;
 } else {
  r = b + 4 | 0;
  q = b + 100 | 0;
  do {
   i = c[r >> 2] | 0;
   if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = i + 1;
    i = d[i >> 0] | 0;
   } else i = al(b) | 0;
  } while ((dl(i) | 0) != 0);
  b : do switch (i | 0) {
  case 43:
  case 45:
   {
    j = ((i | 0) == 45) << 31 >> 31;
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
     p = j;
     break b;
    } else {
     i = al(b) | 0;
     p = j;
     break b;
    }
   }
  default:
   p = 0;
  } while (0);
  j = (e | 0) == 0;
  do if ((e | 16 | 0) == 16 & (i | 0) == 48) {
   i = c[r >> 2] | 0;
   if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = i + 1;
    i = d[i >> 0] | 0;
   } else i = al(b) | 0;
   if ((i | 32 | 0) != 120) if (j) {
    e = 8;
    n = 46;
    break;
   } else {
    n = 32;
    break;
   }
   e = c[r >> 2] | 0;
   if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = e + 1;
    i = d[e >> 0] | 0;
   } else i = al(b) | 0;
   if ((d[12356 + i >> 0] | 0) > 15) {
    g = (c[q >> 2] | 0) == 0;
    if (!g) c[r >> 2] = (c[r >> 2] | 0) + -1;
    if (!f) {
     _k(b, 0);
     h = 0;
     g = 0;
     break a;
    }
    if (g) {
     h = 0;
     g = 0;
     break a;
    }
    c[r >> 2] = (c[r >> 2] | 0) + -1;
    h = 0;
    g = 0;
    break a;
   } else {
    e = 16;
    n = 46;
   }
  } else {
   e = j ? 10 : e;
   if ((d[12356 + i >> 0] | 0) >>> 0 < e >>> 0) n = 32; else {
    if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
    _k(b, 0);
    c[(Ok() | 0) >> 2] = 22;
    h = 0;
    g = 0;
    break a;
   }
  } while (0);
  if ((n | 0) == 32) if ((e | 0) == 10) {
   e = i + -48 | 0;
   if (e >>> 0 < 10) {
    i = 0;
    while (1) {
     j = (i * 10 | 0) + e | 0;
     e = c[r >> 2] | 0;
     if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = e + 1;
      i = d[e >> 0] | 0;
     } else i = al(b) | 0;
     e = i + -48 | 0;
     if (!(e >>> 0 < 10 & j >>> 0 < 429496729)) {
      e = j;
      break;
     } else i = j;
    }
    j = 0;
   } else {
    e = 0;
    j = 0;
   }
   f = i + -48 | 0;
   if (f >>> 0 < 10) {
    while (1) {
     k = wn(e | 0, j | 0, 10, 0) | 0;
     l = C;
     m = ((f | 0) < 0) << 31 >> 31;
     o = ~m;
     if (l >>> 0 > o >>> 0 | (l | 0) == (o | 0) & k >>> 0 > ~f >>> 0) {
      k = e;
      break;
     }
     e = mn(k | 0, l | 0, f | 0, m | 0) | 0;
     j = C;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = al(b) | 0;
     f = i + -48 | 0;
     if (!(f >>> 0 < 10 & (j >>> 0 < 429496729 | (j | 0) == 429496729 & e >>> 0 < 2576980378))) {
      k = e;
      break;
     }
    }
    if (f >>> 0 > 9) {
     i = k;
     e = p;
    } else {
     e = 10;
     n = 72;
    }
   } else {
    i = e;
    e = p;
   }
  } else n = 46;
  c : do if ((n | 0) == 46) {
   if (!(e + -1 & e)) {
    n = a[12612 + ((e * 23 | 0) >>> 5 & 7) >> 0] | 0;
    j = a[12356 + i >> 0] | 0;
    f = j & 255;
    if (f >>> 0 < e >>> 0) {
     i = 0;
     while (1) {
      k = f | i << n;
      i = c[r >> 2] | 0;
      if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
       c[r >> 2] = i + 1;
       i = d[i >> 0] | 0;
      } else i = al(b) | 0;
      j = a[12356 + i >> 0] | 0;
      f = j & 255;
      if (!(k >>> 0 < 134217728 & f >>> 0 < e >>> 0)) break; else i = k;
     }
     f = 0;
    } else {
     f = 0;
     k = 0;
    }
    l = qn(-1, -1, n | 0) | 0;
    m = C;
    if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
     j = f;
     n = 72;
     break;
    } else i = f;
    while (1) {
     k = on(k | 0, i | 0, n | 0) | 0;
     f = C;
     k = j & 255 | k;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = al(b) | 0;
     j = a[12356 + i >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
      j = f;
      n = 72;
      break c;
     } else i = f;
    }
   }
   j = a[12356 + i >> 0] | 0;
   f = j & 255;
   if (f >>> 0 < e >>> 0) {
    i = 0;
    while (1) {
     k = f + (R(i, e) | 0) | 0;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = al(b) | 0;
     j = a[12356 + i >> 0] | 0;
     f = j & 255;
     if (!(k >>> 0 < 119304647 & f >>> 0 < e >>> 0)) break; else i = k;
    }
    f = 0;
   } else {
    k = 0;
    f = 0;
   }
   if ((j & 255) >>> 0 < e >>> 0) {
    n = un(-1, -1, e | 0, 0) | 0;
    o = C;
    m = f;
    while (1) {
     if (m >>> 0 > o >>> 0 | (m | 0) == (o | 0) & k >>> 0 > n >>> 0) {
      j = m;
      n = 72;
      break c;
     }
     f = wn(k | 0, m | 0, e | 0, 0) | 0;
     l = C;
     j = j & 255;
     if (l >>> 0 > 4294967295 | (l | 0) == -1 & f >>> 0 > ~j >>> 0) {
      j = m;
      n = 72;
      break c;
     }
     k = mn(j | 0, 0, f | 0, l | 0) | 0;
     f = C;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = al(b) | 0;
     j = a[12356 + i >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0) {
      j = f;
      n = 72;
      break;
     } else m = f;
    }
   } else {
    j = f;
    n = 72;
   }
  } while (0);
  if ((n | 0) == 72) if ((d[12356 + i >> 0] | 0) >>> 0 < e >>> 0) {
   do {
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
    } else i = al(b) | 0;
   } while ((d[12356 + i >> 0] | 0) >>> 0 < e >>> 0);
   c[(Ok() | 0) >> 2] = 34;
   j = h;
   i = g;
   e = (g & 1 | 0) == 0 & 0 == 0 ? p : 0;
  } else {
   i = k;
   e = p;
  }
  if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
  if (!(j >>> 0 < h >>> 0 | (j | 0) == (h | 0) & i >>> 0 < g >>> 0)) {
   if (!((g & 1 | 0) != 0 | 0 != 0 | (e | 0) != 0)) {
    c[(Ok() | 0) >> 2] = 34;
    g = mn(g | 0, h | 0, -1, -1) | 0;
    h = C;
    break;
   }
   if (j >>> 0 > h >>> 0 | (j | 0) == (h | 0) & i >>> 0 > g >>> 0) {
    c[(Ok() | 0) >> 2] = 34;
    break;
   }
  }
  g = ((e | 0) < 0) << 31 >> 31;
  g = ln(i ^ e | 0, j ^ g | 0, e | 0, g | 0) | 0;
  h = C;
 } while (0);
 C = h;
 return g | 0;
}
function Om(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0.0, j = 0.0, k = 0.0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0;
 F = i;
 i = i + 560 | 0;
 A = F + 480 | 0;
 y = F + 320 | 0;
 E = F + 160 | 0;
 C = F;
 B = c[3636 + (f << 2) >> 2] | 0;
 q = e + -1 | 0;
 x = (d + -3 | 0) / 24 | 0;
 x = (x | 0) < 0 ? 0 : x;
 r = (x * 24 | 0) + 24 | 0;
 l = d - r | 0;
 if ((B + q | 0) >= 0) {
  m = B + e | 0;
  n = 0;
  o = x - q | 0;
  while (1) {
   if ((o | 0) < 0) g = 0.0; else g = +(c[3652 + (o << 2) >> 2] | 0);
   h[y + (n << 3) >> 3] = g;
   n = n + 1 | 0;
   if ((n | 0) == (m | 0)) break; else o = o + 1 | 0;
  }
 }
 o = (e | 0) > 0;
 p = 0;
 while (1) {
  if (o) {
   m = p + q | 0;
   g = 0.0;
   n = 0;
   do {
    g = g + +h[a + (n << 3) >> 3] * +h[y + (m - n << 3) >> 3];
    n = n + 1 | 0;
   } while ((n | 0) != (e | 0));
  } else g = 0.0;
  h[C + (p << 3) >> 3] = g;
  if ((p | 0) < (B | 0)) p = p + 1 | 0; else break;
 }
 t = (l | 0) > 0;
 u = 24 - l | 0;
 v = 23 - l | 0;
 w = (e | 0) > 0;
 s = (r | 0) == (d | 0);
 m = B;
 a : while (1) {
  g = +h[C + (m << 3) >> 3];
  p = (m | 0) > 0;
  if (p) {
   n = 0;
   o = m;
   while (1) {
    k = +(~~(g * 5.9604644775390625e-08) | 0);
    c[A + (n << 2) >> 2] = ~~(g - k * 16777216.0);
    d = o;
    o = o + -1 | 0;
    g = k + +h[C + (o << 3) >> 3];
    if ((d | 0) <= 1) break; else n = n + 1 | 0;
   }
  }
  g = +gl(g, l);
  g = g - +D(+(g * .125)) * 8.0;
  o = ~~g;
  g = g - +(o | 0);
  do if (t) {
   d = A + (m + -1 << 2) | 0;
   n = c[d >> 2] | 0;
   z = n >> u;
   n = n - (z << u) | 0;
   c[d >> 2] = n;
   n = n >> v;
   o = z + o | 0;
   z = 19;
  } else if (s) {
   n = c[A + (m + -1 << 2) >> 2] >> 23;
   z = 19;
   break;
  } else if (!(g >= .5)) {
   n = 0;
   break;
  } else {
   n = 2;
   z = 20;
   break;
  } while (0);
  if ((z | 0) == 19) {
   z = 0;
   if ((n | 0) > 0) z = 20;
  }
  if ((z | 0) == 20) {
   z = 0;
   o = o + 1 | 0;
   if (p) {
    p = 0;
    d = 0;
    do {
     q = A + (d << 2) | 0;
     r = c[q >> 2] | 0;
     if (!p) if (!r) p = 0; else {
      c[q >> 2] = 16777216 - r;
      p = 1;
     } else c[q >> 2] = 16777215 - r;
     d = d + 1 | 0;
    } while ((d | 0) != (m | 0));
   } else p = 0;
   b : do if (t) switch (l | 0) {
   case 1:
    {
     d = A + (m + -1 << 2) | 0;
     c[d >> 2] = c[d >> 2] & 8388607;
     break b;
    }
   case 2:
    {
     d = A + (m + -1 << 2) | 0;
     c[d >> 2] = c[d >> 2] & 4194303;
     break b;
    }
   default:
    break b;
   } while (0);
   if ((n | 0) == 2) {
    g = 1.0 - g;
    if (!p) n = 2; else {
     n = 2;
     g = g - +gl(1.0, l);
    }
   }
  }
  if (!(g == 0.0)) {
   z = 44;
   break;
  }
  if ((m | 0) > (B | 0)) {
   q = m;
   p = 0;
   do {
    q = q + -1 | 0;
    p = c[A + (q << 2) >> 2] | p;
   } while ((q | 0) > (B | 0));
   if (!p) n = 1; else {
    z = 37;
    break;
   }
  } else n = 1;
  while (1) if (!(c[A + (B - n << 2) >> 2] | 0)) n = n + 1 | 0; else break;
  p = n + m | 0;
  if ((n | 0) <= 0) {
   m = p;
   continue;
  }
  while (1) {
   o = m + 1 | 0;
   m = m + e | 0;
   h[y + (m << 3) >> 3] = +(c[3652 + (o + x << 2) >> 2] | 0);
   if (w) {
    g = 0.0;
    n = 0;
    do {
     g = g + +h[a + (n << 3) >> 3] * +h[y + (m - n << 3) >> 3];
     n = n + 1 | 0;
    } while ((n | 0) != (e | 0));
   } else g = 0.0;
   h[C + (o << 3) >> 3] = g;
   if ((o | 0) < (p | 0)) m = o; else {
    m = p;
    continue a;
   }
  }
 }
 do if ((z | 0) == 37) {
  do {
   l = l + -24 | 0;
   m = m + -1 | 0;
  } while ((c[A + (m << 2) >> 2] | 0) == 0);
  r = n;
  q = m;
 } else if ((z | 0) == 44) {
  g = +gl(g, 0 - l | 0);
  if (!(g >= 16777216.0)) {
   c[A + (m << 2) >> 2] = ~~g;
   r = n;
   q = m;
   break;
  } else {
   r = ~~(g * 5.9604644775390625e-08);
   c[A + (m << 2) >> 2] = ~~(g - +(r | 0) * 16777216.0);
   q = m + 1 | 0;
   c[A + (q << 2) >> 2] = r;
   r = n;
   l = l + 24 | 0;
   break;
  }
 } while (0);
 p = (q | 0) > -1;
 if (p) {
  g = +gl(1.0, l);
  l = q;
  while (1) {
   h[C + (l << 3) >> 3] = g * +(c[A + (l << 2) >> 2] | 0);
   if ((l | 0) > 0) {
    g = g * 5.9604644775390625e-08;
    l = l + -1 | 0;
   } else break;
  }
  if (p) {
   n = q;
   while (1) {
    m = q - n | 0;
    g = 0.0;
    l = 0;
    while (1) {
     g = g + +h[1032 + (l << 3) >> 3] * +h[C + (l + n << 3) >> 3];
     if ((l | 0) >= (B | 0) | (l | 0) >= (m | 0)) break; else l = l + 1 | 0;
    }
    h[E + (m << 3) >> 3] = g;
    if ((n | 0) > 0) n = n + -1 | 0; else break;
   }
  }
 }
 c : do switch (f | 0) {
 case 0:
  {
   if (p) {
    g = 0.0;
    l = q;
    while (1) {
     g = g + +h[E + (l << 3) >> 3];
     if ((l | 0) > 0) l = l + -1 | 0; else break;
    }
   } else g = 0.0;
   h[b >> 3] = (r | 0) == 0 ? g : -g;
   break;
  }
 case 2:
 case 1:
  {
   if (p) {
    g = 0.0;
    l = q;
    while (1) {
     g = g + +h[E + (l << 3) >> 3];
     if ((l | 0) > 0) l = l + -1 | 0; else break;
    }
   } else g = 0.0;
   m = (r | 0) == 0;
   h[b >> 3] = m ? g : -g;
   g = +h[E >> 3] - g;
   if ((q | 0) >= 1) {
    l = 1;
    while (1) {
     g = g + +h[E + (l << 3) >> 3];
     if ((l | 0) == (q | 0)) break; else l = l + 1 | 0;
    }
   }
   h[b + 8 >> 3] = m ? g : -g;
   break;
  }
 case 3:
  {
   if ((q | 0) > 0) {
    g = +h[E + (q << 3) >> 3];
    l = q;
    do {
     C = l;
     l = l + -1 | 0;
     f = E + (l << 3) | 0;
     k = +h[f >> 3];
     j = g;
     g = k + g;
     h[E + (C << 3) >> 3] = j + (k - g);
     h[f >> 3] = g;
    } while ((C | 0) > 1);
    l = (q | 0) > 1;
    if (l) {
     g = +h[E + (q << 3) >> 3];
     m = q;
     do {
      f = m;
      m = m + -1 | 0;
      C = E + (m << 3) | 0;
      k = +h[C >> 3];
      j = g;
      g = k + g;
      h[E + (f << 3) >> 3] = j + (k - g);
      h[C >> 3] = g;
     } while ((m | 0) > 1);
     if (l) {
      g = 0.0;
      l = q;
      do {
       g = g + +h[E + (l << 3) >> 3];
       l = l + -1 | 0;
      } while ((l | 0) > 1);
     } else g = 0.0;
    } else g = 0.0;
   } else g = 0.0;
   k = +h[E >> 3];
   j = +h[E + 8 >> 3];
   if (!r) {
    h[b >> 3] = k;
    h[b + 8 >> 3] = j;
    h[b + 16 >> 3] = g;
    break c;
   } else {
    h[b >> 3] = -k;
    h[b + 8 >> 3] = -j;
    h[b + 16 >> 3] = -g;
    break c;
   }
  }
 default:
  {}
 } while (0);
 i = F;
 return o & 7 | 0;
}

function _i(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0.0, I = 0, J = 0;
 G = i;
 i = i + 1168 | 0;
 F = G + 72 | 0;
 A = G + 64 | 0;
 z = G + 56 | 0;
 y = G + 48 | 0;
 x = G + 40 | 0;
 D = G + 32 | 0;
 C = G + 24 | 0;
 B = G + 16 | 0;
 w = G + 8 | 0;
 v = G;
 u = G + 1124 | 0;
 s = G + 1146 | 0;
 q = G + 1120 | 0;
 r = G + 80 | 0;
 t = G + 1128 | 0;
 l = yd(b) | 0;
 e = tg(b, 1, q) | 0;
 q = c[q >> 2] | 0;
 m = e + q | 0;
 Pg(b, r);
 a : do if ((q | 0) > 0) {
  n = r + 8 | 0;
  o = r + 4 | 0;
  p = t + 1 | 0;
  q = 1;
  g = e;
  b : while (1) {
   e = g;
   while (1) {
    g = a[e >> 0] | 0;
    if (g << 24 >> 24 == 37) {
     g = e + 1 | 0;
     if ((a[g >> 0] | 0) != 37) break;
     f = c[n >> 2] | 0;
     if (f >>> 0 < (c[o >> 2] | 0) >>> 0) g = 37; else {
      $h(r, 1) | 0;
      f = c[n >> 2] | 0;
      g = a[g >> 0] | 0;
     }
     c[n >> 2] = f + 1;
     a[(c[r >> 2] | 0) + f >> 0] = g;
     e = e + 2 | 0;
    } else {
     f = c[n >> 2] | 0;
     if (f >>> 0 >= (c[o >> 2] | 0) >>> 0) {
      $h(r, 1) | 0;
      f = c[n >> 2] | 0;
      g = a[e >> 0] | 0;
     }
     c[n >> 2] = f + 1;
     a[(c[r >> 2] | 0) + f >> 0] = g;
     e = e + 1 | 0;
    }
    if (e >>> 0 >= m >>> 0) break a;
   }
   k = $h(r, 512) | 0;
   j = q;
   q = q + 1 | 0;
   if ((j | 0) >= (l | 0)) wd(b, q, 10607) | 0;
   e = a[g >> 0] | 0;
   c : do if (!(e << 24 >> 24)) {
    e = 0;
    f = g;
   } else {
    f = g;
    while (1) {
     if (!(zl(10616, e << 24 >> 24, 6) | 0)) break c;
     f = f + 1 | 0;
     e = a[f >> 0] | 0;
     if (!(e << 24 >> 24)) {
      e = 0;
      break;
     }
    }
   } while (0);
   j = g;
   if ((f - j | 0) >>> 0 > 5) {
    ad(b, 10622, v) | 0;
    e = a[f >> 0] | 0;
   }
   f = ((e & 255) + -48 | 0) >>> 0 < 10 ? f + 1 | 0 : f;
   f = ((d[f >> 0] | 0) + -48 | 0) >>> 0 < 10 ? f + 1 | 0 : f;
   e = a[f >> 0] | 0;
   if (e << 24 >> 24 == 46) {
    e = f + 1 | 0;
    f = ((d[e >> 0] | 0) + -48 | 0) >>> 0 < 10 ? f + 2 | 0 : e;
    f = ((d[f >> 0] | 0) + -48 | 0) >>> 0 < 10 ? f + 1 | 0 : f;
    e = a[f >> 0] | 0;
   }
   if (((e & 255) + -48 | 0) >>> 0 < 10) ad(b, 10654, w) | 0;
   a[t >> 0] = 37;
   e = f - j + 1 | 0;
   sn(p | 0, g | 0, e | 0) | 0;
   a[p + e >> 0] = 0;
   g = f + 1 | 0;
   e = a[f >> 0] | 0;
   switch (e | 0) {
   case 99:
    {
     c[B >> 2] = Lf(b, q) | 0;
     e = ol(k, t, B) | 0;
     break;
    }
   case 105:
   case 100:
    {
     H = +zi(b, q);
     e = ~~H;
     H = H - +(e | 0);
     if (!(H > -1.0 & H < 1.0)) wd(b, q, 10699) | 0;
     j = Jl(t) | 0;
     I = a[t + (j + -1) >> 0] | 0;
     f = t + j | 0;
     J = f + -1 | 0;
     a[J >> 0] = 108;
     a[J + 1 >> 0] = 0;
     a[f >> 0] = I;
     a[t + (j + 1) >> 0] = 0;
     c[C >> 2] = e;
     e = ol(k, t, C) | 0;
     break;
    }
   case 88:
   case 120:
   case 117:
   case 111:
    {
     H = +zi(b, q);
     e = ~~H >>> 0;
     H = H - +(e >>> 0);
     if (!(H > -1.0 & H < 1.0)) wd(b, q, 10728) | 0;
     J = Jl(t) | 0;
     j = a[t + (J + -1) >> 0] | 0;
     I = t + J | 0;
     f = I + -1 | 0;
     a[f >> 0] = 108;
     a[f + 1 >> 0] = 0;
     a[I >> 0] = j;
     a[t + (J + 1) >> 0] = 0;
     c[D >> 2] = e;
     e = ol(k, t, D) | 0;
     break;
    }
   case 71:
   case 103:
   case 102:
   case 69:
   case 101:
    {
     e = Jl(t) | 0;
     J = t + (e + -1) | 0;
     I = a[J >> 0] | 0;
     e = t + e | 0;
     a[e + -1 >> 0] = 0;
     a[J >> 0] = I;
     a[e >> 0] = 0;
     h[x >> 3] = +zi(b, q);
     e = ol(k, t, x) | 0;
     break;
    }
   case 113:
    {
     f = tg(b, q, u) | 0;
     e = c[n >> 2] | 0;
     if (e >>> 0 >= (c[o >> 2] | 0) >>> 0) {
      $h(r, 1) | 0;
      e = c[n >> 2] | 0;
     }
     c[n >> 2] = e + 1;
     a[(c[r >> 2] | 0) + e >> 0] = 34;
     J = c[u >> 2] | 0;
     c[u >> 2] = J + -1;
     d : do if (J | 0) while (1) {
      e = a[f >> 0] | 0;
      e : do switch (e << 24 >> 24) {
      case 10:
      case 92:
      case 34:
       {
        e = c[n >> 2] | 0;
        if (e >>> 0 >= (c[o >> 2] | 0) >>> 0) {
         $h(r, 1) | 0;
         e = c[n >> 2] | 0;
        }
        c[n >> 2] = e + 1;
        a[(c[r >> 2] | 0) + e >> 0] = 92;
        e = c[n >> 2] | 0;
        if (e >>> 0 >= (c[o >> 2] | 0) >>> 0) {
         $h(r, 1) | 0;
         e = c[n >> 2] | 0;
        }
        J = a[f >> 0] | 0;
        c[n >> 2] = e + 1;
        a[(c[r >> 2] | 0) + e >> 0] = J;
        break;
       }
      case 0:
       {
        e = 0;
        E = 44;
        break;
       }
      default:
       {
        if (Yl(e & 255) | 0) {
         e = a[f >> 0] | 0;
         E = 44;
         break e;
        }
        e = c[n >> 2] | 0;
        if (e >>> 0 >= (c[o >> 2] | 0) >>> 0) {
         $h(r, 1) | 0;
         e = c[n >> 2] | 0;
        }
        J = a[f >> 0] | 0;
        c[n >> 2] = e + 1;
        a[(c[r >> 2] | 0) + e >> 0] = J;
       }
      } while (0);
      if ((E | 0) == 44) {
       E = 0;
       e = e & 255;
       if (((d[f + 1 >> 0] | 0) + -48 | 0) >>> 0 < 10) {
        c[z >> 2] = e;
        ol(s, 10774, z) | 0;
       } else {
        c[y >> 2] = e;
        ol(s, 10770, y) | 0;
       }
       $i(r, s);
      }
      J = c[u >> 2] | 0;
      c[u >> 2] = J + -1;
      if (!J) break d; else f = f + 1 | 0;
     } while (0);
     e = c[n >> 2] | 0;
     if (e >>> 0 >= (c[o >> 2] | 0) >>> 0) {
      $h(r, 1) | 0;
      e = c[n >> 2] | 0;
     }
     c[n >> 2] = e + 1;
     a[(c[r >> 2] | 0) + e >> 0] = 34;
     e = 0;
     break;
    }
   case 115:
    {
     e = vg(b, q, u) | 0;
     J = (Ol(t, 46) | 0) == 0;
     if (J & (c[u >> 2] | 0) >>> 0 > 99) {
      Tg(r);
      e = 0;
     } else {
      c[A >> 2] = e;
      e = ol(k, t, A) | 0;
      kd(b, -2);
     }
     break;
    }
   default:
    break b;
   }
   c[n >> 2] = (c[n >> 2] | 0) + e;
   if (g >>> 0 >= m >>> 0) break a;
  }
  c[F >> 2] = e;
  J = ad(b, 10780, F) | 0;
  i = G;
  return J | 0;
 } while (0);
 Ug(r);
 J = 1;
 i = G;
 return J | 0;
}

function ge(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 i = c[b >> 2] | 0;
 v = b + 60 | 0;
 k = c[v >> 2] | 0;
 m = k + 4 | 0;
 g = c[m >> 2] | 0;
 n = k + 8 | 0;
 o = c[n >> 2] | 0;
 do if ((g + 1 | 0) >>> 0 > o >>> 0) {
  if (o >>> 0 > 2147483645) be(b, 6665, 0);
  g = o << 1;
  h = c[b + 52 >> 2] | 0;
  if ((g | 0) == -2) yb(h); else {
   l = mb(h, c[k >> 2] | 0, o, g) | 0;
   c[k >> 2] = l;
   c[n >> 2] = g;
   j = c[m >> 2] | 0;
   break;
  }
 } else {
  j = g;
  l = c[k >> 2] | 0;
 } while (0);
 c[m >> 2] = j + 1;
 a[l + j >> 0] = i;
 r = b + 56 | 0;
 g = c[r >> 2] | 0;
 q = c[g >> 2] | 0;
 c[g >> 2] = q + -1;
 if (!q) g = Td(g) | 0; else {
  q = g + 4 | 0;
  g = c[q >> 2] | 0;
  c[q >> 2] = g + 1;
  g = d[g >> 0] | 0;
 }
 c[b >> 2] = g;
 switch (g | 0) {
 case 13:
 case 10:
  {
   h = c[r >> 2] | 0;
   q = c[h >> 2] | 0;
   c[h >> 2] = q + -1;
   if (!q) h = Td(h) | 0; else {
    q = h + 4 | 0;
    h = c[q >> 2] | 0;
    c[q >> 2] = h + 1;
    h = d[h >> 0] | 0;
   }
   c[b >> 2] = h;
   switch (h | 0) {
   case 13:
   case 10:
    {
     if ((h | 0) != (g | 0)) {
      g = c[r >> 2] | 0;
      q = c[g >> 2] | 0;
      c[g >> 2] = q + -1;
      if (!q) g = Td(g) | 0; else {
       q = g + 4 | 0;
       g = c[q >> 2] | 0;
       c[q >> 2] = g + 1;
       g = d[g >> 0] | 0;
      }
      c[b >> 2] = g;
     }
     break;
    }
   default:
    g = h;
   }
   o = b + 4 | 0;
   q = c[o >> 2] | 0;
   c[o >> 2] = q + 1;
   if ((q | 0) > 2147483643) ae(b, 6746); else p = g;
   break;
  }
 default:
  p = g;
 }
 o = (e | 0) == 0;
 q = b + 52 | 0;
 n = b + 4 | 0;
 g = p;
 a : while (1) {
  b : do if (o) while (1) {
   switch (g | 0) {
   case -1:
    {
     s = 31;
     break a;
    }
   case 93:
    {
     s = 32;
     break b;
    }
   case 13:
   case 10:
    break b;
   default:
    {}
   }
   g = c[r >> 2] | 0;
   p = c[g >> 2] | 0;
   c[g >> 2] = p + -1;
   if (!p) g = Td(g) | 0; else {
    p = g + 4 | 0;
    g = c[p >> 2] | 0;
    c[p >> 2] = g + 1;
    g = d[g >> 0] | 0;
   }
   c[b >> 2] = g;
  } else {
   m = g;
   while (1) {
    switch (m | 0) {
    case -1:
     {
      s = 31;
      break a;
     }
    case 93:
     {
      s = 32;
      break b;
     }
    case 13:
    case 10:
     break b;
    default:
     {}
    }
    k = c[v >> 2] | 0;
    l = k + 4 | 0;
    h = c[l >> 2] | 0;
    i = k + 8 | 0;
    j = c[i >> 2] | 0;
    if ((h + 1 | 0) >>> 0 > j >>> 0) {
     if (j >>> 0 > 2147483645) {
      s = 67;
      break a;
     }
     h = j << 1;
     g = c[q >> 2] | 0;
     if ((h | 0) == -2) {
      s = 69;
      break a;
     }
     g = mb(g, c[k >> 2] | 0, j, h) | 0;
     c[k >> 2] = g;
     c[i >> 2] = h;
     h = c[l >> 2] | 0;
    } else g = c[k >> 2] | 0;
    c[l >> 2] = h + 1;
    a[g + h >> 0] = m;
    g = c[r >> 2] | 0;
    p = c[g >> 2] | 0;
    c[g >> 2] = p + -1;
    if (!p) g = Td(g) | 0; else {
     p = g + 4 | 0;
     g = c[p >> 2] | 0;
     c[p >> 2] = g + 1;
     g = d[g >> 0] | 0;
    }
    c[b >> 2] = g;
    m = g;
   }
  } while (0);
  if ((s | 0) == 32) {
   s = 0;
   p = (fe(b) | 0) == (f | 0);
   g = c[b >> 2] | 0;
   if (p) {
    s = 33;
    break;
   } else continue;
  }
  k = c[v >> 2] | 0;
  l = k + 4 | 0;
  h = c[l >> 2] | 0;
  i = k + 8 | 0;
  j = c[i >> 2] | 0;
  if ((h + 1 | 0) >>> 0 > j >>> 0) {
   if (j >>> 0 > 2147483645) {
    s = 47;
    break;
   }
   h = j << 1;
   g = c[q >> 2] | 0;
   if ((h | 0) == -2) {
    s = 49;
    break;
   }
   g = mb(g, c[k >> 2] | 0, j, h) | 0;
   c[k >> 2] = g;
   c[i >> 2] = h;
   h = c[l >> 2] | 0;
  } else g = c[k >> 2] | 0;
  c[l >> 2] = h + 1;
  a[g + h >> 0] = 10;
  g = c[b >> 2] | 0;
  h = c[r >> 2] | 0;
  p = c[h >> 2] | 0;
  c[h >> 2] = p + -1;
  if (!p) h = Td(h) | 0; else {
   p = h + 4 | 0;
   h = c[p >> 2] | 0;
   c[p >> 2] = h + 1;
   h = d[h >> 0] | 0;
  }
  c[b >> 2] = h;
  switch (h | 0) {
  case 13:
  case 10:
   {
    if ((h | 0) != (g | 0)) {
     g = c[r >> 2] | 0;
     p = c[g >> 2] | 0;
     c[g >> 2] = p + -1;
     if (!p) g = Td(g) | 0; else {
      p = g + 4 | 0;
      g = c[p >> 2] | 0;
      c[p >> 2] = g + 1;
      g = d[g >> 0] | 0;
     }
     c[b >> 2] = g;
    }
    break;
   }
  default:
   g = h;
  }
  p = c[n >> 2] | 0;
  c[n >> 2] = p + 1;
  if ((p | 0) > 2147483643) {
   s = 61;
   break;
  }
  if (!o) continue;
  c[(c[v >> 2] | 0) + 4 >> 2] = 0;
 }
 if ((s | 0) == 31) be(b, e | 0 ? 6771 : 6794, 286); else if ((s | 0) == 33) {
  j = c[v >> 2] | 0;
  k = j + 4 | 0;
  h = c[k >> 2] | 0;
  l = j + 8 | 0;
  m = c[l >> 2] | 0;
  do if ((h + 1 | 0) >>> 0 > m >>> 0) {
   if (m >>> 0 > 2147483645) be(b, 6665, 0);
   h = m << 1;
   i = c[q >> 2] | 0;
   if ((h | 0) == -2) yb(i); else {
    u = mb(i, c[j >> 2] | 0, m, h) | 0;
    c[j >> 2] = u;
    c[l >> 2] = h;
    t = c[k >> 2] | 0;
    break;
   }
  } else {
   t = h;
   u = c[j >> 2] | 0;
  } while (0);
  c[k >> 2] = t + 1;
  a[u + t >> 0] = g;
  g = c[r >> 2] | 0;
  u = c[g >> 2] | 0;
  c[g >> 2] = u + -1;
  if (!u) g = Td(g) | 0; else {
   u = g + 4 | 0;
   g = c[u >> 2] | 0;
   c[u >> 2] = g + 1;
   g = d[g >> 0] | 0;
  }
  c[b >> 2] = g;
  if (o) return;
  k = c[v >> 2] | 0;
  j = f + 2 | 0;
  i = c[q >> 2] | 0;
  j = zb(i, (c[k >> 2] | 0) + j | 0, (c[k + 4 >> 2] | 0) - (j << 1) | 0) | 0;
  k = i + 8 | 0;
  g = c[k >> 2] | 0;
  c[k >> 2] = g + 16;
  c[g >> 2] = j;
  c[g + 8 >> 2] = d[j + 4 >> 0] | 0 | 64;
  g = he(i, c[(c[b + 48 >> 2] | 0) + 4 >> 2] | 0, (c[k >> 2] | 0) + -16 | 0) | 0;
  h = g + 8 | 0;
  if (!(c[h >> 2] | 0)) {
   c[g >> 2] = 1;
   c[h >> 2] = 1;
   if ((c[(c[i + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(i);
  }
  c[k >> 2] = (c[k >> 2] | 0) + -16;
  c[e >> 2] = j;
  return;
 } else if ((s | 0) == 47) be(b, 6665, 0); else if ((s | 0) == 49) yb(g); else if ((s | 0) == 61) ae(b, 6746); else if ((s | 0) == 67) be(b, 6665, 0); else if ((s | 0) == 69) yb(g);
}

function bc(e, f, g) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 y = i;
 i = i + 32 | 0;
 n = y + 16 | 0;
 q = y + 8 | 0;
 t = y;
 w = e + 28 | 0;
 x = e + 8 | 0;
 u = e + 24 | 0;
 v = e + 32 | 0;
 a : while (1) {
  h = c[w >> 2] | 0;
  k = f;
  switch (c[f + 8 >> 2] & 63 | 0) {
  case 22:
   {
    j = k;
    k = 3;
    break a;
   }
  case 38:
   {
    j = k;
    k = 4;
    break a;
   }
  case 6:
   {
    j = k;
    k = 29;
    break a;
   }
  default:
   {}
  }
  m = pb(e, f, 16) | 0;
  k = k - (c[w >> 2] | 0) | 0;
  l = m + 8 | 0;
  if ((c[l >> 2] & 15 | 0) != 6) {
   k = 53;
   break;
  }
  h = c[x >> 2] | 0;
  if (h >>> 0 > f >>> 0) {
   do {
    z = h;
    h = h + -16 | 0;
    C = h;
    B = c[C + 4 >> 2] | 0;
    A = z;
    c[A >> 2] = c[C >> 2];
    c[A + 4 >> 2] = B;
    c[z + 8 >> 2] = c[z + -8 >> 2];
   } while (h >>> 0 > f >>> 0);
   f = c[x >> 2] | 0;
  } else f = h;
  f = f + 16 | 0;
  c[x >> 2] = f;
  if (((c[u >> 2] | 0) - f | 0) < 16) {
   h = c[v >> 2] | 0;
   if ((h | 0) > 1e6) {
    k = 59;
    break;
   }
   C = (f - (c[w >> 2] | 0) >> 4) + 5 | 0;
   f = h << 1;
   f = (f | 0) > 1e6 ? 1e6 : f;
   f = (f | 0) < (C | 0) ? C : f;
   if ((f | 0) > 1e6) {
    k = 61;
    break;
   }
   xb(e, f);
  }
  f = (c[w >> 2] | 0) + k | 0;
  A = m;
  B = c[A + 4 >> 2] | 0;
  C = f;
  c[C >> 2] = c[A >> 2];
  c[C + 4 >> 2] = B;
  c[f + 8 >> 2] = c[l >> 2];
 }
 if ((k | 0) == 3) {
  p = h;
  o = f;
 } else if ((k | 0) == 4) {
  p = h;
  o = (c[f >> 2] | 0) + 12 | 0;
 } else if ((k | 0) == 29) {
  l = j - h | 0;
  p = c[(c[f >> 2] | 0) + 12 >> 2] | 0;
  j = c[x >> 2] | 0;
  o = p + 78 | 0;
  k = d[o >> 0] | 0;
  do if (((c[u >> 2] | 0) - j >> 4 | 0) > (k | 0)) {
   s = j;
   r = h;
  } else {
   f = c[v >> 2] | 0;
   if ((f | 0) > 1e6) wb(e, 6);
   C = k + 5 + (j - h >> 4) | 0;
   f = f << 1;
   f = (f | 0) > 1e6 ? 1e6 : f;
   f = (f | 0) < (C | 0) ? C : f;
   if ((f | 0) > 1e6) {
    xb(e, 1000200);
    tb(e, 7808, q);
   } else {
    xb(e, f);
    s = c[x >> 2] | 0;
    r = c[w >> 2] | 0;
    break;
   }
  } while (0);
  j = s;
  n = r + l | 0;
  C = s - n >> 4;
  f = C + -1 | 0;
  k = b[p + 76 >> 1] | 0;
  l = k & 255;
  m = k & 255;
  if ((C | 0) <= (m | 0)) {
   h = j;
   while (1) {
    j = h + 16 | 0;
    c[h + 8 >> 2] = 0;
    f = f + 1 | 0;
    if ((f | 0) < (m | 0)) h = j; else break;
   }
   c[x >> 2] = j;
  }
  if ((k & 65535) < 256) j = n + 16 | 0; else {
   f = 0 - f | 0;
   h = j + (f << 4) | 0;
   if (l << 24 >> 24) {
    c[x >> 2] = j + 16;
    A = h;
    B = c[A + 4 >> 2] | 0;
    C = j;
    c[C >> 2] = c[A >> 2];
    c[C + 4 >> 2] = B;
    C = j + (f << 4) + 8 | 0;
    c[j + 8 >> 2] = c[C >> 2];
    c[C >> 2] = 0;
    if (l << 24 >> 24 != 1) {
     f = 1;
     do {
      B = c[x >> 2] | 0;
      C = h + (f << 4) | 0;
      c[x >> 2] = B + 16;
      w = C;
      z = c[w + 4 >> 2] | 0;
      A = B;
      c[A >> 2] = c[w >> 2];
      c[A + 4 >> 2] = z;
      C = C + 8 | 0;
      c[B + 8 >> 2] = c[C >> 2];
      c[C >> 2] = 0;
      f = f + 1 | 0;
     } while ((f | 0) != (m | 0));
    }
   }
  }
  h = e + 16 | 0;
  f = c[(c[h >> 2] | 0) + 12 >> 2] | 0;
  if (!f) f = cc(e) | 0;
  c[h >> 2] = f;
  b[f + 16 >> 1] = g;
  c[f >> 2] = n;
  c[f + 24 >> 2] = j;
  C = j + ((d[o >> 0] | 0) << 4) | 0;
  c[f + 4 >> 2] = C;
  j = f + 28 | 0;
  c[j >> 2] = c[p + 12 >> 2];
  h = f + 18 | 0;
  a[h >> 0] = 1;
  c[x >> 2] = C;
  if ((c[(c[e + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(e);
  if (!(a[e + 40 >> 0] & 1)) {
   C = 0;
   i = y;
   return C | 0;
  }
  c[j >> 2] = (c[j >> 2] | 0) + 4;
  f = c[f + 8 >> 2] | 0;
  if (!(a[f + 18 >> 0] & 1)) f = 0; else if ((c[(c[f + 28 >> 2] | 0) + -4 >> 2] & 63 | 0) == 30) {
   a[h >> 0] = d[h >> 0] | 0 | 64;
   f = 4;
  } else f = 0;
  gc(e, f, -1);
  c[j >> 2] = (c[j >> 2] | 0) + -4;
  C = 0;
  i = y;
  return C | 0;
 } else if ((k | 0) == 53) Wb(e, f, 11440); else if ((k | 0) == 59) wb(e, 6); else if ((k | 0) == 61) {
  xb(e, 1000200);
  tb(e, 7808, n);
 }
 j = j - p | 0;
 k = c[o >> 2] | 0;
 h = c[x >> 2] | 0;
 do if (((c[u >> 2] | 0) - h | 0) < 336) {
  f = c[v >> 2] | 0;
  if ((f | 0) > 1e6) wb(e, 6);
  C = (h - p >> 4) + 25 | 0;
  f = f << 1;
  f = (f | 0) > 1e6 ? 1e6 : f;
  f = (f | 0) < (C | 0) ? C : f;
  if ((f | 0) > 1e6) {
   xb(e, 1000200);
   tb(e, 7808, t);
  } else {
   xb(e, f);
   break;
  }
 } while (0);
 l = e + 16 | 0;
 f = c[(c[l >> 2] | 0) + 12 >> 2] | 0;
 if (!f) f = cc(e) | 0;
 c[l >> 2] = f;
 b[f + 16 >> 1] = g;
 c[f >> 2] = (c[w >> 2] | 0) + j;
 c[f + 4 >> 2] = (c[x >> 2] | 0) + 320;
 a[f + 18 >> 0] = 0;
 if ((c[(c[e + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(e);
 h = e + 40 | 0;
 if (a[h >> 0] & 1) gc(e, 0, -1);
 f = Xa[k & 255](e) | 0;
 f = (c[x >> 2] | 0) + (0 - f << 4) | 0;
 j = c[l >> 2] | 0;
 h = d[h >> 0] | 0;
 if (!(h & 6)) {
  h = f;
  k = c[j + 8 >> 2] | 0;
 } else {
  if (h & 2) {
   f = f - (c[w >> 2] | 0) | 0;
   gc(e, 1, -1);
   f = (c[w >> 2] | 0) + f | 0;
  }
  k = c[j + 8 >> 2] | 0;
  c[e + 20 >> 2] = c[k + 28 >> 2];
  h = f;
 }
 f = c[j >> 2] | 0;
 j = b[j + 16 >> 1] | 0;
 c[l >> 2] = k;
 b : do if (j << 16 >> 16) {
  k = h;
  h = j << 16 >> 16;
  while (1) {
   if (k >>> 0 >= (c[x >> 2] | 0) >>> 0) break;
   j = f + 16 | 0;
   A = k;
   B = c[A + 4 >> 2] | 0;
   C = f;
   c[C >> 2] = c[A >> 2];
   c[C + 4 >> 2] = B;
   c[f + 8 >> 2] = c[k + 8 >> 2];
   h = h + -1 | 0;
   if (!h) {
    f = j;
    break b;
   } else {
    k = k + 16 | 0;
    f = j;
   }
  }
  if ((h | 0) > 0) {
   j = f;
   while (1) {
    f = j + 16 | 0;
    c[j + 8 >> 2] = 0;
    if ((h | 0) > 1) {
     h = h + -1 | 0;
     j = f;
    } else break;
   }
  }
 } while (0);
 c[x >> 2] = f;
 C = 1;
 i = y;
 return C | 0;
}

function cd(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 M = i;
 i = i + 16 | 0;
 L = M;
 if ((a[e >> 0] | 0) == 62) {
  G = b + 8 | 0;
  J = (c[G >> 2] | 0) + -16 | 0;
  c[G >> 2] = J;
  e = e + 1 | 0;
  G = 0;
 } else {
  J = c[f + 96 >> 2] | 0;
  G = J;
  J = c[J >> 2] | 0;
 }
 I = J + 8 | 0;
 if ((c[I >> 2] & 31 | 0) == 6) H = c[J >> 2] | 0; else H = 0;
 g = a[e >> 0] | 0;
 a : do if (!(g << 24 >> 24)) j = 1; else {
  o = (H | 0) == 0;
  p = f + 16 | 0;
  q = f + 24 | 0;
  r = f + 28 | 0;
  s = f + 12 | 0;
  t = f + 36 | 0;
  u = H + 4 | 0;
  v = H + 12 | 0;
  w = (G | 0) == 0;
  x = f + 20 | 0;
  y = G + 18 | 0;
  z = G + 28 | 0;
  A = f + 32 | 0;
  B = f + 34 | 0;
  C = f + 33 | 0;
  D = H + 6 | 0;
  E = f + 35 | 0;
  F = f + 8 | 0;
  l = f + 4 | 0;
  m = G + 8 | 0;
  n = b + 12 | 0;
  k = e;
  j = 1;
  while (1) {
   b : do switch (g << 24 >> 24 | 0) {
   case 83:
    {
     if (o) K = 11; else if ((a[u >> 0] | 0) == 38) K = 11; else {
      h = c[v >> 2] | 0;
      f = c[h + 36 >> 2] | 0;
      f = (f | 0) == 0 ? 5923 : f + 16 | 0;
      c[p >> 2] = f;
      g = c[h + 64 >> 2] | 0;
      c[q >> 2] = g;
      c[r >> 2] = c[h + 68 >> 2];
      g = (g | 0) == 0 ? 5926 : 5931;
     }
     if ((K | 0) == 11) {
      K = 0;
      c[p >> 2] = 5918;
      c[q >> 2] = -1;
      c[r >> 2] = -1;
      f = 5918;
      g = 5935;
     }
     c[s >> 2] = g;
     _b(t, f, 60);
     break;
    }
   case 108:
    {
     if (w) f = -1; else if (!(a[y >> 0] & 1)) f = -1; else {
      f = c[(c[c[G >> 2] >> 2] | 0) + 12 >> 2] | 0;
      g = c[f + 20 >> 2] | 0;
      if (!g) f = 0; else f = c[g + (((c[z >> 2] | 0) - (c[f + 12 >> 2] | 0) >> 2) + -1 << 2) >> 2] | 0;
     }
     c[x >> 2] = f;
     break;
    }
   case 117:
    {
     if (o) a[A >> 0] = 0; else {
      a[A >> 0] = a[D >> 0] | 0;
      if ((a[u >> 0] | 0) != 38) {
       h = c[v >> 2] | 0;
       a[B >> 0] = a[h + 77 >> 0] | 0;
       a[C >> 0] = a[h + 76 >> 0] | 0;
       break b;
      }
     }
     a[B >> 0] = 1;
     a[C >> 0] = 0;
     break;
    }
   case 116:
    {
     if (w) f = 0; else f = d[y >> 0] & 64;
     a[E >> 0] = f;
     break;
    }
   case 110:
    {
     c : do if (w) K = 46; else if (!(a[y >> 0] & 64)) {
      f = c[m >> 2] | 0;
      if (!(a[f + 18 >> 0] & 1)) K = 46; else {
       h = c[(c[c[f >> 2] >> 2] | 0) + 12 >> 2] | 0;
       g = c[h + 12 >> 2] | 0;
       f = ((c[f + 28 >> 2] | 0) - g >> 2) + -1 | 0;
       g = c[g + (f << 2) >> 2] | 0;
       do switch (g & 63 | 0) {
       case 30:
       case 29:
        {
         h = Xb(h, f, g >>> 6 & 255, l) | 0;
         c[F >> 2] = h;
         if (!h) break c; else break b;
        }
       case 34:
        {
         c[l >> 2] = 5937;
         f = 5937;
         break;
        }
       case 7:
       case 6:
       case 12:
        {
         f = 0;
         K = 45;
         break;
        }
       case 10:
       case 8:
        {
         f = 1;
         K = 45;
         break;
        }
       case 24:
        {
         f = 5;
         K = 45;
         break;
        }
       case 13:
        {
         f = 6;
         K = 45;
         break;
        }
       case 14:
        {
         f = 7;
         K = 45;
         break;
        }
       case 15:
        {
         f = 8;
         K = 45;
         break;
        }
       case 16:
        {
         f = 9;
         K = 45;
         break;
        }
       case 17:
        {
         f = 10;
         K = 45;
         break;
        }
       case 18:
        {
         f = 11;
         K = 45;
         break;
        }
       case 19:
        {
         f = 12;
         K = 45;
         break;
        }
       case 21:
        {
         f = 4;
         K = 45;
         break;
        }
       case 25:
        {
         f = 13;
         K = 45;
         break;
        }
       case 26:
        {
         f = 14;
         K = 45;
         break;
        }
       case 22:
        {
         f = 15;
         K = 45;
         break;
        }
       default:
        {
         K = 46;
         break c;
        }
       } while (0);
       if ((K | 0) == 45) {
        K = 0;
        c[l >> 2] = (c[(c[n >> 2] | 0) + 184 + (f << 2) >> 2] | 0) + 16;
        f = 5950;
       }
       c[F >> 2] = f;
       break b;
      }
     } else K = 46; while (0);
     if ((K | 0) == 46) {
      K = 0;
      c[F >> 2] = 0;
     }
     c[F >> 2] = 17772;
     c[l >> 2] = 0;
     break;
    }
   case 102:
   case 76:
    break;
   default:
    j = 0;
   } while (0);
   k = k + 1 | 0;
   g = a[k >> 0] | 0;
   if (!(g << 24 >> 24)) break a;
  }
 } while (0);
 if (Ol(e, 102) | 0) {
  K = b + 8 | 0;
  G = c[K >> 2] | 0;
  E = J;
  F = c[E + 4 >> 2] | 0;
  J = G;
  c[J >> 2] = c[E >> 2];
  c[J + 4 >> 2] = F;
  c[G + 8 >> 2] = c[I >> 2];
  c[K >> 2] = (c[K >> 2] | 0) + 16;
 }
 if (!(Ol(e, 76) | 0)) {
  i = M;
  return j | 0;
 }
 if (H | 0) if ((a[H + 4 >> 0] | 0) != 38) {
  e = H + 12 | 0;
  f = c[(c[e >> 2] | 0) + 20 >> 2] | 0;
  g = tc(b) | 0;
  K = b + 8 | 0;
  J = c[K >> 2] | 0;
  c[J >> 2] = g;
  c[J + 8 >> 2] = 69;
  c[K >> 2] = (c[K >> 2] | 0) + 16;
  c[L >> 2] = 1;
  c[L + 8 >> 2] = 1;
  if ((c[(c[e >> 2] | 0) + 52 >> 2] | 0) > 0) {
   h = 0;
   do {
    Hc(b, g, c[f + (h << 2) >> 2] | 0, L);
    h = h + 1 | 0;
   } while ((h | 0) < (c[(c[e >> 2] | 0) + 52 >> 2] | 0));
  }
  i = M;
  return j | 0;
 }
 L = b + 8 | 0;
 b = c[L >> 2] | 0;
 c[b + 8 >> 2] = 0;
 c[L >> 2] = b + 16;
 i = M;
 return j | 0;
}

function lc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = e + 8 | 0;
 a : do switch (c[l >> 2] & 63 | 0) {
 case 3:
  {
   f = +h[e >> 3] == +h[f >> 3] & 1;
   return f | 0;
  }
 case 1:
  {
   f = (c[e >> 2] | 0) == (c[f >> 2] | 0) & 1;
   return f | 0;
  }
 case 2:
  {
   f = (c[e >> 2] | 0) == (c[f >> 2] | 0) & 1;
   return f | 0;
  }
 case 22:
  {
   f = (c[e >> 2] | 0) == (c[f >> 2] | 0) & 1;
   return f | 0;
  }
 case 4:
  {
   f = (c[e >> 2] | 0) == (c[f >> 2] | 0) & 1;
   return f | 0;
  }
 case 20:
  {
   f = mc(c[e >> 2] | 0, c[f >> 2] | 0) | 0;
   return f | 0;
  }
 case 7:
  {
   g = c[e >> 2] | 0;
   i = c[f >> 2] | 0;
   if ((g | 0) == (i | 0)) {
    f = 1;
    return f | 0;
   }
   if (!b) {
    f = 0;
    return f | 0;
   }
   k = c[g + 8 >> 2] | 0;
   i = c[i + 8 >> 2] | 0;
   if (!k) {
    f = 0;
    return f | 0;
   }
   if (a[k + 6 >> 0] & 32) {
    f = 0;
    return f | 0;
   }
   j = b + 12 | 0;
   g = Gb(k, 5, c[(c[j >> 2] | 0) + 204 >> 2] | 0) | 0;
   if (!g) {
    f = 0;
    return f | 0;
   }
   if ((k | 0) != (i | 0)) {
    if (!i) {
     f = 0;
     return f | 0;
    }
    if (a[i + 6 >> 0] & 32) {
     f = 0;
     return f | 0;
    }
    i = Gb(i, 5, c[(c[j >> 2] | 0) + 204 >> 2] | 0) | 0;
    if (!i) {
     f = 0;
     return f | 0;
    }
    j = c[g + 8 >> 2] | 0;
    if ((j | 0) != (c[i + 8 >> 2] | 0)) {
     f = 0;
     return f | 0;
    }
    switch (j & 63 | 0) {
    case 0:
     break a;
    case 3:
     {
      i = +h[g >> 3] == +h[i >> 3] & 1;
      break;
     }
    case 1:
     {
      i = (c[g >> 2] | 0) == (c[i >> 2] | 0) & 1;
      break;
     }
    case 2:
     {
      i = (c[g >> 2] | 0) == (c[i >> 2] | 0) & 1;
      break;
     }
    case 22:
     {
      i = (c[g >> 2] | 0) == (c[i >> 2] | 0) & 1;
      break;
     }
    case 4:
     {
      i = (c[g >> 2] | 0) == (c[i >> 2] | 0) & 1;
      break;
     }
    case 20:
     {
      i = mc(c[g >> 2] | 0, c[i >> 2] | 0) | 0;
      break;
     }
    case 7:
     {
      if ((c[g >> 2] | 0) == (c[i >> 2] | 0)) break a; else g = 0;
      return g | 0;
     }
    case 5:
     {
      if ((c[g >> 2] | 0) == (c[i >> 2] | 0)) break a; else g = 0;
      return g | 0;
     }
    default:
     i = (c[g >> 2] | 0) == (c[i >> 2] | 0) & 1;
    }
    if (!i) {
     f = 0;
     return f | 0;
    }
   }
   break;
  }
 case 5:
  {
   g = c[e >> 2] | 0;
   i = c[f >> 2] | 0;
   if ((g | 0) == (i | 0)) {
    f = 1;
    return f | 0;
   }
   if (!b) {
    f = 0;
    return f | 0;
   }
   k = c[g + 8 >> 2] | 0;
   i = c[i + 8 >> 2] | 0;
   if (!k) {
    f = 0;
    return f | 0;
   }
   if (a[k + 6 >> 0] & 32) {
    f = 0;
    return f | 0;
   }
   j = b + 12 | 0;
   g = Gb(k, 5, c[(c[j >> 2] | 0) + 204 >> 2] | 0) | 0;
   if (!g) {
    f = 0;
    return f | 0;
   }
   if ((k | 0) != (i | 0)) {
    if (!i) {
     f = 0;
     return f | 0;
    }
    if (a[i + 6 >> 0] & 32) {
     f = 0;
     return f | 0;
    }
    i = Gb(i, 5, c[(c[j >> 2] | 0) + 204 >> 2] | 0) | 0;
    if (!i) {
     f = 0;
     return f | 0;
    }
    j = c[g + 8 >> 2] | 0;
    if ((j | 0) != (c[i + 8 >> 2] | 0)) {
     f = 0;
     return f | 0;
    }
    switch (j & 63 | 0) {
    case 0:
     break a;
    case 3:
     {
      i = +h[g >> 3] == +h[i >> 3] & 1;
      break;
     }
    case 1:
     {
      i = (c[g >> 2] | 0) == (c[i >> 2] | 0) & 1;
      break;
     }
    case 2:
     {
      i = (c[g >> 2] | 0) == (c[i >> 2] | 0) & 1;
      break;
     }
    case 22:
     {
      i = (c[g >> 2] | 0) == (c[i >> 2] | 0) & 1;
      break;
     }
    case 4:
     {
      i = (c[g >> 2] | 0) == (c[i >> 2] | 0) & 1;
      break;
     }
    case 20:
     {
      i = mc(c[g >> 2] | 0, c[i >> 2] | 0) | 0;
      break;
     }
    case 7:
     {
      if ((c[g >> 2] | 0) == (c[i >> 2] | 0)) break a; else g = 0;
      return g | 0;
     }
    case 5:
     {
      if ((c[g >> 2] | 0) == (c[i >> 2] | 0)) break a; else g = 0;
      return g | 0;
     }
    default:
     i = (c[g >> 2] | 0) == (c[i >> 2] | 0) & 1;
    }
    if (!i) {
     f = 0;
     return f | 0;
    }
   }
   break;
  }
 case 0:
  {
   f = 1;
   return f | 0;
  }
 default:
  {
   f = (c[e >> 2] | 0) == (c[f >> 2] | 0) & 1;
   return f | 0;
  }
 } while (0);
 i = b + 8 | 0;
 j = c[i >> 2] | 0;
 m = b + 28 | 0;
 k = c[m >> 2] | 0;
 c[i >> 2] = j + 16;
 p = g;
 n = c[p + 4 >> 2] | 0;
 o = j;
 c[o >> 2] = c[p >> 2];
 c[o + 4 >> 2] = n;
 c[j + 8 >> 2] = c[g + 8 >> 2];
 g = c[i >> 2] | 0;
 c[i >> 2] = g + 16;
 o = e;
 e = c[o + 4 >> 2] | 0;
 n = g;
 c[n >> 2] = c[o >> 2];
 c[n + 4 >> 2] = e;
 c[g + 8 >> 2] = c[l >> 2];
 g = c[i >> 2] | 0;
 c[i >> 2] = g + 16;
 n = f;
 e = c[n + 4 >> 2] | 0;
 l = g;
 c[l >> 2] = c[n >> 2];
 c[l + 4 >> 2] = e;
 c[g + 8 >> 2] = c[f + 8 >> 2];
 sb(b, (c[i >> 2] | 0) + -48 | 0, 1, (d[(c[b + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
 g = (c[m >> 2] | 0) + (j - k) | 0;
 f = c[i >> 2] | 0;
 l = f + -16 | 0;
 c[i >> 2] = l;
 b = c[l + 4 >> 2] | 0;
 e = g;
 c[e >> 2] = c[l >> 2];
 c[e + 4 >> 2] = b;
 c[g + 8 >> 2] = c[f + -8 >> 2];
 g = c[i >> 2] | 0;
 i = c[g + 8 >> 2] | 0;
 if (!i) g = 0; else if ((i | 0) == 1) g = (c[g >> 2] | 0) != 0; else g = 1;
 p = g & 1;
 return p | 0;
}

function Je(e, f, g, h) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 y = i;
 i = i + 80 | 0;
 x = y;
 w = y + 24 | 0;
 r = y + 12 | 0;
 u = e + 48 | 0;
 p = c[u >> 2] | 0;
 v = e + 52 | 0;
 q = c[v >> 2] | 0;
 o = c[p >> 2] | 0;
 p = p + 36 | 0;
 j = o + 56 | 0;
 k = c[j >> 2] | 0;
 n = o + 16 | 0;
 if ((c[p >> 2] | 0) >= (k | 0)) {
  l = ce(q, c[n >> 2] | 0, j, 4, 262143, 7196) | 0;
  c[n >> 2] = l;
  m = c[j >> 2] | 0;
  if ((k | 0) < (m | 0)) {
   j = k + 1 | 0;
   c[l + (k << 2) >> 2] = 0;
   if ((j | 0) < (m | 0)) do {
    c[(c[n >> 2] | 0) + (j << 2) >> 2] = 0;
    j = j + 1 | 0;
   } while ((j | 0) != (m | 0));
  }
 }
 m = Xd(q) | 0;
 l = c[p >> 2] | 0;
 c[p >> 2] = l + 1;
 c[(c[n >> 2] | 0) + (l << 2) >> 2] = m;
 if (a[m + 5 >> 0] & 3) if (a[o + 5 >> 0] & 4) sc(q, o, m);
 c[w >> 2] = m;
 c[m + 64 >> 2] = h;
 j = c[v >> 2] | 0;
 c[w + 8 >> 2] = c[u >> 2];
 k = w + 12 | 0;
 c[k >> 2] = e;
 c[u >> 2] = w;
 c[w + 20 >> 2] = 0;
 c[w + 24 >> 2] = 0;
 c[w + 28 >> 2] = -1;
 c[w + 32 >> 2] = 0;
 c[w + 36 >> 2] = 0;
 l = w + 44 | 0;
 c[l >> 2] = 0;
 a[l + 4 >> 0] = 0;
 c[w + 40 >> 2] = c[(c[e + 64 >> 2] | 0) + 4 >> 2];
 l = w + 16 | 0;
 c[l >> 2] = 0;
 c[m + 36 >> 2] = c[e + 68 >> 2];
 a[m + 78 >> 0] = 2;
 o = tc(j) | 0;
 c[w + 4 >> 2] = o;
 p = j + 8 | 0;
 q = c[p >> 2] | 0;
 c[q >> 2] = o;
 c[q + 8 >> 2] = 69;
 q = (c[p >> 2] | 0) + 16 | 0;
 c[p >> 2] = q;
 if (((c[j + 24 >> 2] | 0) - q | 0) < 16) vb(j, 0);
 a[r + 10 >> 0] = 0;
 a[r + 8 >> 0] = a[w + 46 >> 0] | 0;
 q = c[(c[k >> 2] | 0) + 64 >> 2] | 0;
 b[r + 4 >> 1] = c[q + 28 >> 2];
 b[r + 6 >> 1] = c[q + 16 >> 2];
 a[r + 9 >> 0] = 0;
 c[r >> 2] = c[l >> 2];
 c[l >> 2] = r;
 q = e + 16 | 0;
 if ((c[q >> 2] | 0) != 40) Be(e, 40);
 de(e);
 if (!g) {
  p = c[u >> 2] | 0;
  o = p;
  p = c[p >> 2] | 0;
 } else {
  Le(e, Ke(e, 7206, 4) | 0);
  o = c[u >> 2] | 0;
  p = o + 46 | 0;
  g = (d[p >> 0] | 0) + 1 | 0;
  a[p >> 0] = g;
  p = c[o >> 2] | 0;
  c[(c[p + 24 >> 2] | 0) + ((b[(c[c[(c[o + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0) + ((c[o + 40 >> 2] | 0) + (g & 255) + -1 << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = c[o + 20 >> 2];
 }
 m = p + 77 | 0;
 a[m >> 0] = 0;
 j = c[q >> 2] | 0;
 a : do if ((j | 0) == 41) s = 0; else {
  l = e + 24 | 0;
  k = j;
  j = 0;
  b : while (1) {
   switch (k | 0) {
   case 280:
    {
     t = 19;
     break b;
    }
   case 288:
    break;
   default:
    {
     t = 20;
     break b;
    }
   }
   g = c[l >> 2] | 0;
   de(e);
   Le(e, g);
   j = j + 1 | 0;
   if (a[m >> 0] | 0) {
    s = j;
    break a;
   }
   if ((c[q >> 2] | 0) != 44) {
    s = j;
    break a;
   }
   de(e);
   k = c[q >> 2] | 0;
  }
  if ((t | 0) == 19) {
   de(e);
   a[m >> 0] = 1;
   s = j;
   break;
  } else if ((t | 0) == 20) ae(e, 7227);
 } while (0);
 k = c[u >> 2] | 0;
 g = k + 46 | 0;
 j = (d[g >> 0] | 0) + s | 0;
 a[g >> 0] = j;
 if (s | 0) {
  n = c[k + 20 >> 2] | 0;
  l = c[(c[k >> 2] | 0) + 24 >> 2] | 0;
  m = c[c[(c[k + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0;
  k = (c[k + 40 >> 2] | 0) + (j & 255) | 0;
  j = s;
  do {
   c[l + ((b[m + (k - j << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = n;
   j = j + -1 | 0;
  } while ((j | 0) != 0);
 }
 s = a[o + 46 >> 0] | 0;
 a[p + 76 >> 0] = s;
 Me(o, s & 255);
 if ((c[q >> 2] | 0) != 41) Be(e, 41);
 de(e);
 c : while (1) {
  k = c[q >> 2] | 0;
  switch (k | 0) {
  case 277:
  case 286:
  case 262:
  case 261:
  case 260:
   break c;
  default:
   {}
  }
  le(e);
  if ((k | 0) == 274) {
   t = 31;
   break;
  }
 }
 if ((t | 0) == 31) k = c[q >> 2] | 0;
 j = c[e + 4 >> 2] | 0;
 c[(c[w >> 2] | 0) + 68 >> 2] = j;
 if ((k | 0) == 262) {
  de(e);
  x = c[(c[u >> 2] | 0) + 8 >> 2] | 0;
  w = Ne(x, 37, 0, (c[x + 36 >> 2] | 0) + -1 | 0) | 0;
  c[f + 16 >> 2] = -1;
  c[f + 20 >> 2] = -1;
  c[f >> 2] = 11;
  c[f + 8 >> 2] = w;
  Ae(x, f);
  Oe(e);
  i = y;
  return;
 }
 if ((j | 0) == (h | 0)) Be(e, 262); else {
  y = c[v >> 2] | 0;
  v = Ce(e, 262) | 0;
  w = Ce(e, 265) | 0;
  c[x >> 2] = v;
  c[x + 4 >> 2] = w;
  c[x + 8 >> 2] = h;
  ae(e, $b(y, 7159, x) | 0);
 }
}

function _m(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 n = a + 4 | 0;
 o = c[n >> 2] | 0;
 d = o & -8;
 k = a + d | 0;
 i = c[3805] | 0;
 e = o & 3;
 if (!((e | 0) != 1 & a >>> 0 >= i >>> 0 & a >>> 0 < k >>> 0)) Ba();
 f = c[k + 4 >> 2] | 0;
 if (!(f & 1)) Ba();
 if (!e) {
  if (b >>> 0 < 256) {
   a = 0;
   return a | 0;
  }
  if (d >>> 0 >= (b + 4 | 0) >>> 0) if ((d - b | 0) >>> 0 <= c[3921] << 1 >>> 0) return a | 0;
  a = 0;
  return a | 0;
 }
 if (d >>> 0 >= b >>> 0) {
  d = d - b | 0;
  if (d >>> 0 <= 15) return a | 0;
  m = a + b | 0;
  c[n >> 2] = o & 1 | b | 2;
  c[m + 4 >> 2] = d | 3;
  b = m + d + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  $m(m, d);
  return a | 0;
 }
 if ((k | 0) == (c[3807] | 0)) {
  d = (c[3804] | 0) + d | 0;
  if (d >>> 0 <= b >>> 0) {
   a = 0;
   return a | 0;
  }
  m = d - b | 0;
  l = a + b | 0;
  c[n >> 2] = o & 1 | b | 2;
  c[l + 4 >> 2] = m | 1;
  c[3807] = l;
  c[3804] = m;
  return a | 0;
 }
 if ((k | 0) == (c[3806] | 0)) {
  e = (c[3803] | 0) + d | 0;
  if (e >>> 0 < b >>> 0) {
   a = 0;
   return a | 0;
  }
  d = e - b | 0;
  if (d >>> 0 > 15) {
   e = a + b | 0;
   m = e + d | 0;
   c[n >> 2] = o & 1 | b | 2;
   c[e + 4 >> 2] = d | 1;
   c[m >> 2] = d;
   b = m + 4 | 0;
   c[b >> 2] = c[b >> 2] & -2;
  } else {
   c[n >> 2] = o & 1 | e | 2;
   e = a + e + 4 | 0;
   c[e >> 2] = c[e >> 2] | 1;
   e = 0;
   d = 0;
  }
  c[3803] = d;
  c[3806] = e;
  return a | 0;
 }
 if (f & 2 | 0) {
  a = 0;
  return a | 0;
 }
 l = (f & -8) + d | 0;
 if (l >>> 0 < b >>> 0) {
  a = 0;
  return a | 0;
 }
 m = l - b | 0;
 g = f >>> 3;
 do if (f >>> 0 < 256) {
  e = c[k + 8 >> 2] | 0;
  f = c[k + 12 >> 2] | 0;
  d = 15244 + (g << 1 << 2) | 0;
  if ((e | 0) != (d | 0)) {
   if (e >>> 0 < i >>> 0) Ba();
   if ((c[e + 12 >> 2] | 0) != (k | 0)) Ba();
  }
  if ((f | 0) == (e | 0)) {
   c[3801] = c[3801] & ~(1 << g);
   break;
  }
  if ((f | 0) == (d | 0)) h = f + 8 | 0; else {
   if (f >>> 0 < i >>> 0) Ba();
   d = f + 8 | 0;
   if ((c[d >> 2] | 0) == (k | 0)) h = d; else Ba();
  }
  c[e + 12 >> 2] = f;
  c[h >> 2] = e;
 } else {
  h = c[k + 24 >> 2] | 0;
  f = c[k + 12 >> 2] | 0;
  do if ((f | 0) == (k | 0)) {
   e = k + 16 | 0;
   f = e + 4 | 0;
   d = c[f >> 2] | 0;
   if (!d) {
    d = c[e >> 2] | 0;
    if (!d) {
     j = 0;
     break;
    }
   } else e = f;
   while (1) {
    f = d + 20 | 0;
    g = c[f >> 2] | 0;
    if (g | 0) {
     d = g;
     e = f;
     continue;
    }
    f = d + 16 | 0;
    g = c[f >> 2] | 0;
    if (!g) break; else {
     d = g;
     e = f;
    }
   }
   if (e >>> 0 < i >>> 0) Ba(); else {
    c[e >> 2] = 0;
    j = d;
    break;
   }
  } else {
   g = c[k + 8 >> 2] | 0;
   if (g >>> 0 < i >>> 0) Ba();
   d = g + 12 | 0;
   if ((c[d >> 2] | 0) != (k | 0)) Ba();
   e = f + 8 | 0;
   if ((c[e >> 2] | 0) == (k | 0)) {
    c[d >> 2] = f;
    c[e >> 2] = g;
    j = f;
    break;
   } else Ba();
  } while (0);
  if (h | 0) {
   d = c[k + 28 >> 2] | 0;
   e = 15508 + (d << 2) | 0;
   if ((k | 0) == (c[e >> 2] | 0)) {
    c[e >> 2] = j;
    if (!j) {
     c[3802] = c[3802] & ~(1 << d);
     break;
    }
   } else {
    if (h >>> 0 < (c[3805] | 0) >>> 0) Ba();
    d = h + 16 | 0;
    if ((c[d >> 2] | 0) == (k | 0)) c[d >> 2] = j; else c[h + 20 >> 2] = j;
    if (!j) break;
   }
   f = c[3805] | 0;
   if (j >>> 0 < f >>> 0) Ba();
   c[j + 24 >> 2] = h;
   d = k + 16 | 0;
   e = c[d >> 2] | 0;
   do if (e | 0) if (e >>> 0 < f >>> 0) Ba(); else {
    c[j + 16 >> 2] = e;
    c[e + 24 >> 2] = j;
    break;
   } while (0);
   d = c[d + 4 >> 2] | 0;
   if (d | 0) if (d >>> 0 < (c[3805] | 0) >>> 0) Ba(); else {
    c[j + 20 >> 2] = d;
    c[d + 24 >> 2] = j;
    break;
   }
  }
 } while (0);
 if (m >>> 0 < 16) {
  c[n >> 2] = l | o & 1 | 2;
  b = a + l + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  return a | 0;
 } else {
  l = a + b | 0;
  c[n >> 2] = o & 1 | b | 2;
  c[l + 4 >> 2] = m | 3;
  b = l + m + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  $m(l, m);
  return a | 0;
 }
 return 0;
}

function oc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0.0;
 w = i;
 i = i + 144 | 0;
 g = w + 16 | 0;
 t = w;
 v = w + 20 | 0;
 u = f + 8 | 0;
 switch (c[u >> 2] | 0) {
 case 0:
  {
   tb(b, 4521, w + 8 | 0);
   break;
  }
 case 3:
  {
   m = 3;
   break;
  }
 default:
  {}
 }
 if ((m | 0) == 3) {
  x = +h[f >> 3];
  if (!(x == x & 0.0 == 0.0)) tb(b, 4540, g);
 }
 n = kc(e, f) | 0;
 o = n + 8 | 0;
 do if ((n | 0) == 15104 | (c[o >> 2] | 0) != 0) {
  l = e + 20 | 0;
  s = e + 16 | 0;
  j = c[s >> 2] | 0;
  k = c[l >> 2] | 0;
  while (1) {
   if (k >>> 0 <= j >>> 0) break;
   g = k + -32 | 0;
   c[l >> 2] = g;
   if (!(c[k + -8 >> 2] | 0)) {
    m = 34;
    break;
   } else k = g;
  }
  if ((m | 0) == 34) {
   j = kc(e, n + 16 | 0) | 0;
   if ((j | 0) == (n | 0)) {
    v = n + 28 | 0;
    c[k + -4 >> 2] = c[v >> 2];
    c[v >> 2] = g;
    break;
   } else k = j;
   do {
    j = k + 28 | 0;
    k = c[j >> 2] | 0;
   } while ((k | 0) != (n | 0));
   c[j >> 2] = g;
   c[g >> 2] = c[n >> 2];
   c[g + 4 >> 2] = c[n + 4 >> 2];
   c[g + 8 >> 2] = c[n + 8 >> 2];
   c[g + 12 >> 2] = c[n + 12 >> 2];
   c[g + 16 >> 2] = c[n + 16 >> 2];
   c[g + 20 >> 2] = c[n + 20 >> 2];
   c[g + 24 >> 2] = c[n + 24 >> 2];
   c[g + 28 >> 2] = c[n + 28 >> 2];
   c[n + 28 >> 2] = 0;
   c[o >> 2] = 0;
   g = n;
   break;
  }
  g = v;
  j = g + 124 | 0;
  do {
   c[g >> 2] = 0;
   g = g + 4 | 0;
  } while ((g | 0) < (j | 0));
  o = e + 12 | 0;
  p = c[e + 28 >> 2] | 0;
  g = 0;
  j = 1;
  q = 0;
  r = 1;
  while (1) {
   if ((r | 0) > (p | 0)) if ((j | 0) > (p | 0)) {
    r = g;
    break;
   } else n = p; else n = r;
   if ((j | 0) > (n | 0)) {
    k = j;
    j = 0;
   } else {
    m = c[o >> 2] | 0;
    l = j;
    j = 0;
    while (1) {
     j = ((c[m + (l + -1 << 4) + 8 >> 2] | 0) != 0 & 1) + j | 0;
     k = l + 1 | 0;
     if ((l | 0) < (n | 0)) l = k; else break;
    }
   }
   n = v + (q << 2) | 0;
   c[n >> 2] = (c[n >> 2] | 0) + j;
   g = j + g | 0;
   q = q + 1 | 0;
   if ((q | 0) >= 31) {
    r = g;
    break;
   } else {
    j = k;
    r = r << 1;
   }
  }
  g = 0;
  j = 1 << (d[e + 7 >> 0] | 0);
  l = 0;
  a : while (1) {
   k = j;
   while (1) {
    j = k + -1 | 0;
    if (!k) {
     q = l;
     break a;
    }
    k = c[s >> 2] | 0;
    if (!(c[k + (j << 5) + 8 >> 2] | 0)) k = j; else break;
   }
   if ((c[k + (j << 5) + 24 >> 2] | 0) == 3) {
    x = +h[k + (j << 5) + 16 >> 3];
    h[t >> 3] = x + 6755399441055744.0;
    k = c[t >> 2] | 0;
    if (+(k | 0) == x & (k + -1 | 0) >>> 0 < 1073741824) {
     k = v + ((pc(k) | 0) << 2) | 0;
     c[k >> 2] = (c[k >> 2] | 0) + 1;
     k = 1;
    } else k = 0;
   } else k = 0;
   g = k + g | 0;
   l = l + 1 | 0;
  }
  j = g + r | 0;
  if ((c[u >> 2] | 0) == 3) {
   x = +h[f >> 3];
   h[t >> 3] = x + 6755399441055744.0;
   g = c[t >> 2] | 0;
   if (+(g | 0) == x & (g + -1 | 0) >>> 0 < 1073741824) {
    g = v + ((pc(g) | 0) << 2) | 0;
    c[g >> 2] = (c[g >> 2] | 0) + 1;
    g = 1;
   } else g = 0;
  } else g = 0;
  n = j + g | 0;
  b : do if ((n | 0) > 0) {
   l = 0;
   m = 0;
   o = 0;
   j = 0;
   g = 0;
   p = 1;
   while (1) {
    k = c[v + (o << 2) >> 2] | 0;
    if ((k | 0) > 0) {
     u = k + m | 0;
     t = (u | 0) > (l | 0);
     k = u;
     j = t ? p : j;
     g = t ? u : g;
    } else k = m;
    if ((k | 0) == (n | 0)) break b;
    if ((p | 0) < (n | 0)) {
     l = p;
     m = k;
     o = o + 1 | 0;
     p = p << 1;
    } else break;
   }
  } else {
   j = 0;
   g = 0;
  } while (0);
  qc(b, e, j, r + 1 + q - g | 0);
  g = jc(e, f) | 0;
  if ((g | 0) != 15088) {
   e = g;
   i = w;
   return e | 0;
  }
  e = oc(b, e, f) | 0;
  i = w;
  return e | 0;
 } else g = n; while (0);
 s = f;
 t = c[s + 4 >> 2] | 0;
 v = g + 16 | 0;
 c[v >> 2] = c[s >> 2];
 c[v + 4 >> 2] = t;
 c[g + 24 >> 2] = c[u >> 2];
 if (c[u >> 2] & 64 | 0) if (a[(c[f >> 2] | 0) + 5 >> 0] & 3) if (a[e + 5 >> 0] & 4) rc(b, e);
 e = g;
 i = w;
 return e | 0;
}

function ze(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 u = i;
 i = i + 112 | 0;
 h = u + 88 | 0;
 m = u + 72 | 0;
 l = u + 64 | 0;
 k = u + 48 | 0;
 j = u + 40 | 0;
 o = u;
 e = a + 48 | 0;
 p = c[e >> 2] | 0;
 f = a + 4 | 0;
 g = c[f >> 2] | 0;
 q = ye(p, 11, 0, 0, 0) | 0;
 n = o + 36 | 0;
 c[n >> 2] = 0;
 r = o + 28 | 0;
 c[r >> 2] = 0;
 s = o + 32 | 0;
 c[s >> 2] = 0;
 t = o + 24 | 0;
 c[t >> 2] = b;
 c[b + 16 >> 2] = -1;
 c[b + 20 >> 2] = -1;
 c[b >> 2] = 11;
 c[b + 8 >> 2] = q;
 c[o + 16 >> 2] = -1;
 c[o + 20 >> 2] = -1;
 c[o >> 2] = 0;
 c[o + 8 >> 2] = 0;
 Ae(c[e >> 2] | 0, b);
 d = a + 16 | 0;
 if ((c[d >> 2] | 0) != 123) Be(a, 123);
 de(a);
 a : do if ((c[d >> 2] | 0) != 125) {
  b = 0;
  b : while (1) {
   if (b | 0) {
    Ae(p, o);
    c[o >> 2] = 0;
    if ((c[n >> 2] | 0) == 50) {
     De(p, c[(c[t >> 2] | 0) + 8 >> 2] | 0, c[s >> 2] | 0, 50);
     c[n >> 2] = 0;
    }
   }
   c : do switch (c[d >> 2] | 0) {
   case 288:
    {
     if ((Ee(a) | 0) == 61) {
      Fe(a, o);
      break c;
     }
     ne(a, o, 0) | 0;
     b = c[s >> 2] | 0;
     if ((b | 0) > 2147483645) {
      b = c[e >> 2] | 0;
      d = 10;
      break b;
     }
     c[s >> 2] = b + 1;
     c[n >> 2] = (c[n >> 2] | 0) + 1;
     break;
    }
   case 91:
    {
     Fe(a, o);
     break;
    }
   default:
    {
     ne(a, o, 0) | 0;
     b = c[s >> 2] | 0;
     if ((b | 0) > 2147483645) {
      b = c[e >> 2] | 0;
      d = 17;
      break b;
     }
     c[s >> 2] = b + 1;
     c[n >> 2] = (c[n >> 2] | 0) + 1;
    }
   } while (0);
   switch (c[d >> 2] | 0) {
   case 125:
    break a;
   case 44:
    {
     de(a);
     break;
    }
   case 59:
    {
     de(a);
     break;
    }
   default:
    {
     d = 26;
     break b;
    }
   }
   if ((c[d >> 2] | 0) == 125) break a;
   b = c[o >> 2] | 0;
  }
  if ((d | 0) == 10) {
   d = b + 12 | 0;
   e = c[(c[d >> 2] | 0) + 52 >> 2] | 0;
   b = c[(c[b >> 2] | 0) + 64 >> 2] | 0;
   if (!b) {
    l = 6600;
    c[k >> 2] = 7136;
    m = k + 4 | 0;
    c[m >> 2] = 2147483645;
    m = k + 8 | 0;
    c[m >> 2] = l;
    m = $b(e, 6614, k) | 0;
    l = c[d >> 2] | 0;
    ae(l, m);
   }
   c[j >> 2] = b;
   l = $b(e, 6580, j) | 0;
   c[k >> 2] = 7136;
   m = k + 4 | 0;
   c[m >> 2] = 2147483645;
   m = k + 8 | 0;
   c[m >> 2] = l;
   m = $b(e, 6614, k) | 0;
   l = c[d >> 2] | 0;
   ae(l, m);
  } else if ((d | 0) == 17) {
   d = b + 12 | 0;
   e = c[(c[d >> 2] | 0) + 52 >> 2] | 0;
   b = c[(c[b >> 2] | 0) + 64 >> 2] | 0;
   if (!b) {
    j = 6600;
    c[m >> 2] = 7136;
    k = m + 4 | 0;
    c[k >> 2] = 2147483645;
    k = m + 8 | 0;
    c[k >> 2] = j;
    k = $b(e, 6614, m) | 0;
    j = c[d >> 2] | 0;
    ae(j, k);
   }
   c[l >> 2] = b;
   k = $b(e, 6580, l) | 0;
   c[m >> 2] = 7136;
   l = m + 4 | 0;
   c[l >> 2] = 2147483645;
   l = m + 8 | 0;
   c[l >> 2] = k;
   m = $b(e, 6614, m) | 0;
   l = c[d >> 2] | 0;
   ae(l, m);
  } else if ((d | 0) == 26) if ((c[f >> 2] | 0) == (g | 0)) Be(a, 125); else {
   m = c[a + 52 >> 2] | 0;
   k = Ce(a, 125) | 0;
   l = Ce(a, 123) | 0;
   c[h >> 2] = k;
   c[h + 4 >> 2] = l;
   c[h + 8 >> 2] = g;
   ae(a, $b(m, 7159, h) | 0);
  }
 } while (0);
 de(a);
 b = c[n >> 2] | 0;
 d : do if (b | 0) {
  switch (c[o >> 2] | 0) {
  case 13:
  case 12:
   {
    He(p, o, -1);
    De(p, c[(c[t >> 2] | 0) + 8 >> 2] | 0, c[s >> 2] | 0, -1);
    c[s >> 2] = (c[s >> 2] | 0) + -1;
    break d;
   }
  case 0:
   break;
  default:
   {
    Ae(p, o);
    b = c[n >> 2] | 0;
   }
  }
  De(p, c[(c[t >> 2] | 0) + 8 >> 2] | 0, c[s >> 2] | 0, b);
 } while (0);
 t = c[(c[(c[p >> 2] | 0) + 12 >> 2] | 0) + (q << 2) >> 2] & 8388607;
 t = (Ie(c[s >> 2] | 0) | 0) << 23 | t;
 c[(c[(c[p >> 2] | 0) + 12 >> 2] | 0) + (q << 2) >> 2] = t;
 t = (Ie(c[r >> 2] | 0) | 0) << 14 & 8372224 | t & -8372225;
 c[(c[(c[p >> 2] | 0) + 12 >> 2] | 0) + (q << 2) >> 2] = t;
 i = u;
 return;
}

function cj(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0;
 G = i;
 i = i + 1360 | 0;
 E = G + 16 | 0;
 D = G + 8 | 0;
 C = G;
 A = G + 1352 | 0;
 g = G + 1348 | 0;
 e = G + 1344 | 0;
 B = G + 1064 | 0;
 F = G + 24 | 0;
 d = tg(b, 1, g) | 0;
 f = tg(b, 2, e) | 0;
 x = ud(b, 3) | 0;
 y = Jd(b, 4, (c[g >> 2] | 0) + 1 | 0) | 0;
 z = (a[f >> 0] | 0) == 94;
 if ((x + -3 | 0) >>> 0 >= 4) wd(b, 3, 10826) | 0;
 Pg(b, F);
 if (z) {
  w = (c[e >> 2] | 0) + -1 | 0;
  c[e >> 2] = w;
  e = w;
  f = f + 1 | 0;
 } else e = c[e >> 2] | 0;
 u = B + 16 | 0;
 c[u >> 2] = b;
 c[B >> 2] = 200;
 v = B + 4 | 0;
 c[v >> 2] = d;
 w = B + 8 | 0;
 c[w >> 2] = d + (c[g >> 2] | 0);
 c[B + 12 >> 2] = f + e;
 o = B + 20 | 0;
 p = F + 8 | 0;
 q = F + 4 | 0;
 r = B + 28 | 0;
 s = B + 24 | 0;
 e = 0;
 while (1) {
  if (e >>> 0 >= y >>> 0) {
   t = 49;
   break;
  }
  c[o >> 2] = 0;
  n = Xi(B, d, f) | 0;
  if (!n) t = 44; else {
   e = e + 1 | 0;
   k = c[u >> 2] | 0;
   switch (x | 0) {
   case 6:
    {
     Cf(k, 3);
     g = c[o >> 2] | 0;
     g = (d | 0) != 0 & (g | 0) == 0 ? 1 : g;
     Wf(c[u >> 2] | 0, g, 10341);
     if ((g | 0) > 0) {
      h = 0;
      do {
       Zi(B, h, d, n);
       h = h + 1 | 0;
      } while ((h | 0) != (g | 0));
     }
     yf(k, g, 1, 0, 0);
     t = 38;
     break;
    }
   case 5:
    {
     do if ((c[o >> 2] | 0) > 0) {
      h = c[r >> 2] | 0;
      if ((h | 0) == -1) {
       ad(k, 10581, C) | 0;
       j = c[u >> 2] | 0;
       g = c[s >> 2] | 0;
      } else {
       g = c[s >> 2] | 0;
       if ((h | 0) == -2) {
        Kd(k, g + 1 - (c[v >> 2] | 0) | 0);
        break;
       } else j = k;
      }
      ed(j, g, h) | 0;
     } else ed(k, d, n - d | 0) | 0; while (0);
     dj(k, 3);
     t = 38;
     break;
    }
   default:
    {
     l = Tc(k, 3, A) | 0;
     if (c[A >> 2] | 0) {
      m = n - d | 0;
      g = 0;
      do {
       k = l + g | 0;
       h = a[k >> 0] | 0;
       do if (h << 24 >> 24 == 37) {
        g = g + 1 | 0;
        k = l + g | 0;
        h = a[k >> 0] | 0;
        j = h << 24 >> 24;
        if (((h & 255) + -48 | 0) >>> 0 < 10) if (h << 24 >> 24 == 48) {
         Dh(F, d, m);
         break;
        } else {
         Zi(B, j + -49 | 0, d, n);
         Tg(F);
         break;
        }
        if (h << 24 >> 24 != 37) {
         j = c[u >> 2] | 0;
         c[D >> 2] = 37;
         ad(j, 10857, D) | 0;
        }
        h = c[p >> 2] | 0;
        if (h >>> 0 >= (c[q >> 2] | 0) >>> 0) {
         $h(F, 1) | 0;
         h = c[p >> 2] | 0;
        }
        k = a[k >> 0] | 0;
        c[p >> 2] = h + 1;
        a[(c[F >> 2] | 0) + h >> 0] = k;
       } else {
        j = c[p >> 2] | 0;
        if (j >>> 0 >= (c[q >> 2] | 0) >>> 0) {
         $h(F, 1) | 0;
         j = c[p >> 2] | 0;
         h = a[k >> 0] | 0;
        }
        c[p >> 2] = j + 1;
        a[(c[F >> 2] | 0) + j >> 0] = h;
       } while (0);
       g = g + 1 | 0;
      } while (g >>> 0 < (c[A >> 2] | 0) >>> 0);
     }
    }
   }
   if ((t | 0) == 38) {
    t = 0;
    if (!(sd(k, -1) | 0)) {
     kd(k, -2);
     ed(k, d, n - d | 0) | 0;
    } else if (!(Af(k, -1) | 0)) {
     c[E >> 2] = vd(k, ud(k, -1) | 0) | 0;
     ad(k, 10899, E) | 0;
    }
    Tg(F);
   }
   if (n >>> 0 > d >>> 0) d = n; else t = 44;
  }
  if ((t | 0) == 44) {
   t = 0;
   if (d >>> 0 >= (c[w >> 2] | 0) >>> 0) {
    t = 49;
    break;
   }
   g = c[p >> 2] | 0;
   if (g >>> 0 >= (c[q >> 2] | 0) >>> 0) {
    $h(F, 1) | 0;
    g = c[p >> 2] | 0;
   }
   n = a[d >> 0] | 0;
   c[p >> 2] = g + 1;
   a[(c[F >> 2] | 0) + g >> 0] = n;
   d = d + 1 | 0;
  }
  if (z) {
   t = 49;
   break;
  }
 }
 if ((t | 0) == 49) {
  Dh(F, d, (c[w >> 2] | 0) - d | 0);
  Ug(F);
  Kd(b, e);
  i = G;
  return 2;
 }
 return 0;
}

function Ub(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 x = i;
 i = i + 64 | 0;
 w = x + 24 | 0;
 v = x + 16 | 0;
 u = x + 8 | 0;
 t = x;
 s = x + 32 | 0;
 o = a + 8 | 0;
 p = a + 12 | 0;
 q = a + 28 | 0;
 r = a + 16 | 0;
 n = b;
 m = c[o >> 2] | 0;
 a : while (1) {
  e = m + -32 | 0;
  l = m + -24 | 0;
  g = c[l >> 2] | 0;
  b = m + -16 | 0;
  do if ((g | 0) == 3 | (g & 15 | 0) == 4) {
   k = m + -8 | 0;
   f = c[k >> 2] | 0;
   if ((f & 15 | 0) != 4) {
    if ((f | 0) != 3) {
     y = 6;
     break;
    }
    h[t >> 3] = +h[b >> 3];
    g = zb(a, s, ol(s, 9776, t) | 0) | 0;
    c[b >> 2] = g;
    c[k >> 2] = d[g + 4 >> 0] | 0 | 64;
    g = c[l >> 2] | 0;
   }
   j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
   f = (g & 15 | 0) == 4;
   if (!j) {
    if (!((g | 0) == 3 & (f ^ 1))) {
     b = 2;
     break;
    }
    h[u >> 3] = +h[e >> 3];
    b = zb(a, s, ol(s, 9776, u) | 0) | 0;
    c[e >> 2] = b;
    c[l >> 2] = d[b + 4 >> 0] | 0 | 64;
    b = 2;
    break;
   }
   if (f) if (!(c[(c[e >> 2] | 0) + 12 >> 2] | 0)) {
    j = b;
    m = c[j + 4 >> 2] | 0;
    b = e;
    c[b >> 2] = c[j >> 2];
    c[b + 4 >> 2] = m;
    c[l >> 2] = c[k >> 2];
    b = 2;
    break;
   }
   b : do if ((n | 0) > 1) {
    b = 1;
    e = j;
    do {
     f = m + (0 - b << 4) + -16 | 0;
     g = f + 8 | 0;
     j = c[g >> 2] | 0;
     if ((j & 15 | 0) != 4) {
      if ((j | 0) != 3) break b;
      h[v >> 3] = +h[f >> 3];
      l = zb(a, s, ol(s, 9776, v) | 0) | 0;
      c[f >> 2] = l;
      c[g >> 2] = d[l + 4 >> 0] | 0 | 64;
     }
     f = c[(c[f >> 2] | 0) + 12 >> 2] | 0;
     if (f >>> 0 >= (-3 - e | 0) >>> 0) {
      y = 21;
      break a;
     }
     e = f + e | 0;
     b = b + 1 | 0;
    } while ((b | 0) < (n | 0));
   } else {
    b = 1;
    e = j;
   } while (0);
   g = Zb(a, (c[p >> 2] | 0) + 144 | 0, e) | 0;
   f = b;
   e = 0;
   while (1) {
    k = c[m + (0 - f << 4) >> 2] | 0;
    l = c[k + 12 >> 2] | 0;
    sn(g + e | 0, k + 16 | 0, l | 0) | 0;
    e = l + e | 0;
    if ((f | 0) > 1) f = f + -1 | 0; else break;
   }
   l = 0 - b | 0;
   k = zb(a, g, e) | 0;
   c[m + (l << 4) >> 2] = k;
   c[m + (l << 4) + 8 >> 2] = d[k + 4 >> 0] | 0 | 64;
  } else y = 6; while (0);
  if ((y | 0) == 6) {
   y = 0;
   f = pb(a, e, 15) | 0;
   if (!(c[f + 8 >> 2] | 0)) {
    f = pb(a, b, 15) | 0;
    if (!(c[f + 8 >> 2] | 0)) {
     y = 9;
     break;
    }
   }
   j = c[q >> 2] | 0;
   k = c[o >> 2] | 0;
   c[o >> 2] = k + 16;
   A = f;
   g = c[A + 4 >> 2] | 0;
   z = k;
   c[z >> 2] = c[A >> 2];
   c[z + 4 >> 2] = g;
   c[k + 8 >> 2] = c[f + 8 >> 2];
   k = c[o >> 2] | 0;
   c[o >> 2] = k + 16;
   z = e;
   f = c[z + 4 >> 2] | 0;
   g = k;
   c[g >> 2] = c[z >> 2];
   c[g + 4 >> 2] = f;
   c[k + 8 >> 2] = c[l >> 2];
   k = c[o >> 2] | 0;
   c[o >> 2] = k + 16;
   g = b;
   l = c[g + 4 >> 2] | 0;
   b = k;
   c[b >> 2] = c[g >> 2];
   c[b + 4 >> 2] = l;
   c[k + 8 >> 2] = c[m + -8 >> 2];
   sb(a, (c[o >> 2] | 0) + -48 | 0, 1, (d[(c[r >> 2] | 0) + 18 >> 0] | 0) & 1);
   b = (c[q >> 2] | 0) + (e - j) | 0;
   m = c[o >> 2] | 0;
   j = m + -16 | 0;
   c[o >> 2] = j;
   k = c[j + 4 >> 2] | 0;
   l = b;
   c[l >> 2] = c[j >> 2];
   c[l + 4 >> 2] = k;
   c[b + 8 >> 2] = c[m + -8 >> 2];
   b = 2;
  }
  n = n + 1 - b | 0;
  m = (c[o >> 2] | 0) + (1 - b << 4) | 0;
  c[o >> 2] = m;
  if ((n | 0) <= 1) {
   y = 27;
   break;
  }
 }
 if ((y | 0) == 9) Vb(a, e, b); else if ((y | 0) == 21) tb(a, 4462, w); else if ((y | 0) == 27) {
  i = x;
  return;
 }
}

function Wm(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0.0, f = 0.0, g = 0, j = 0.0, l = 0, m = 0.0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 48 | 0;
 l = r + 16 | 0;
 n = r;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 g = c[k + 4 >> 2] | 0;
 o = qn(d | 0, g | 0, 63) | 0;
 q = g & 2147483647;
 do if (q >>> 0 < 1074752123) if ((g & 1048575 | 0) == 598523) p = 21; else {
  d = (o | 0) != 0;
  if (q >>> 0 < 1073928573) if (d) {
   j = a + 1.5707963267341256;
   m = j + 6.077100506506192e-11;
   h[b >> 3] = m;
   h[b + 8 >> 3] = j - m + 6.077100506506192e-11;
   d = -1;
   break;
  } else {
   j = a + -1.5707963267341256;
   m = j + -6.077100506506192e-11;
   h[b >> 3] = m;
   h[b + 8 >> 3] = j - m + -6.077100506506192e-11;
   d = 1;
   break;
  } else if (d) {
   j = a + 3.1415926534682512;
   m = j + 1.2154201013012384e-10;
   h[b >> 3] = m;
   h[b + 8 >> 3] = j - m + 1.2154201013012384e-10;
   d = -2;
   break;
  } else {
   j = a + -3.1415926534682512;
   m = j + -1.2154201013012384e-10;
   h[b >> 3] = m;
   h[b + 8 >> 3] = j - m + -1.2154201013012384e-10;
   d = 2;
   break;
  }
 } else {
  if (q >>> 0 >= 1075594812) {
   if (q >>> 0 < 1094263291) {
    p = 21;
    break;
   }
   if (q >>> 0 > 2146435071) {
    m = a - a;
    h[b + 8 >> 3] = m;
    h[b >> 3] = m;
    d = 0;
    break;
   }
   c[k >> 2] = d;
   c[k + 4 >> 2] = g & 1048575 | 1096810496;
   m = +h[k >> 3];
   j = +(~~m | 0);
   h[l >> 3] = j;
   j = (m - j) * 16777216.0;
   m = +(~~j | 0);
   h[l + 8 >> 3] = m;
   m = (j - m) * 16777216.0;
   h[l + 16 >> 3] = m;
   if (m == 0.0) {
    d = 1;
    while (1) if (+h[l + (d << 3) >> 3] == 0.0) d = d + -1 | 0; else break;
   } else d = 2;
   d = Om(l, n, (q >>> 20) + -1046 | 0, d + 1 | 0, 1) | 0;
   e = +h[n >> 3];
   a = +h[n + 8 >> 3];
   if (!o) {
    h[b >> 3] = e;
    h[b + 8 >> 3] = a;
    break;
   } else {
    h[b >> 3] = -e;
    h[b + 8 >> 3] = -a;
    d = 0 - d | 0;
    break;
   }
  }
  if (q >>> 0 < 1075183037) {
   if ((q | 0) == 1074977148) {
    p = 21;
    break;
   }
   if (!o) {
    j = a + -4.712388980202377;
    m = j + -1.8231301519518578e-10;
    h[b >> 3] = m;
    h[b + 8 >> 3] = j - m + -1.8231301519518578e-10;
    d = 3;
    break;
   } else {
    j = a + 4.712388980202377;
    m = j + 1.8231301519518578e-10;
    h[b >> 3] = m;
    h[b + 8 >> 3] = j - m + 1.8231301519518578e-10;
    d = -3;
    break;
   }
  } else {
   if ((q | 0) == 1075388923) {
    p = 21;
    break;
   }
   if (!o) {
    j = a + -6.2831853069365025;
    m = j + -2.430840202602477e-10;
    h[b >> 3] = m;
    h[b + 8 >> 3] = j - m + -2.430840202602477e-10;
    d = 4;
    break;
   } else {
    j = a + 6.2831853069365025;
    m = j + 2.430840202602477e-10;
    h[b >> 3] = m;
    h[b + 8 >> 3] = j - m + 2.430840202602477e-10;
    d = -4;
    break;
   }
  }
 } while (0);
 if ((p | 0) == 21) {
  m = a * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0;
  d = ~~m;
  f = a - m * 1.5707963267341256;
  a = m * 6.077100506506192e-11;
  e = f - a;
  h[b >> 3] = e;
  h[k >> 3] = e;
  p = qn(c[k >> 2] | 0, c[k + 4 >> 2] | 0, 52) | 0;
  g = q >>> 20;
  if ((g - (p & 2047) | 0) > 16) {
   a = m * 6.077100506303966e-11;
   j = f - a;
   a = m * 2.0222662487959506e-21 - (f - j - a);
   e = j - a;
   h[b >> 3] = e;
   h[k >> 3] = e;
   q = qn(c[k >> 2] | 0, c[k + 4 >> 2] | 0, 52) | 0;
   if ((g - (q & 2047) | 0) > 49) {
    a = m * 2.0222662487111665e-21;
    f = j - a;
    a = m * 8.4784276603689e-32 - (j - f - a);
    e = f - a;
    h[b >> 3] = e;
   } else f = j;
  }
  h[b + 8 >> 3] = f - e - a;
 }
 i = r;
 return d | 0;
}

function ne(e, f, g) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 t = i;
 i = i + 48 | 0;
 n = t + 32 | 0;
 m = t + 24 | 0;
 r = t;
 q = e + 48 | 0;
 o = c[q >> 2] | 0;
 s = e + 52 | 0;
 k = (c[s >> 2] | 0) + 38 | 0;
 l = (b[k >> 1] | 0) + 1 << 16 >> 16;
 b[k >> 1] = l;
 if ((l & 65535) > 200) {
  k = o + 12 | 0;
  l = c[(c[k >> 2] | 0) + 52 >> 2] | 0;
  j = c[(c[o >> 2] | 0) + 64 >> 2] | 0;
  if (!j) {
   v = 6600;
   c[n >> 2] = 6971;
   u = n + 4 | 0;
   c[u >> 2] = 200;
   u = n + 8 | 0;
   c[u >> 2] = v;
   u = $b(l, 6614, n) | 0;
   v = c[k >> 2] | 0;
   ae(v, u);
  }
  c[m >> 2] = j;
  u = $b(l, 6580, m) | 0;
  c[n >> 2] = 6971;
  v = n + 4 | 0;
  c[v >> 2] = 200;
  v = n + 8 | 0;
  c[v >> 2] = u;
  v = $b(l, 6614, n) | 0;
  u = c[k >> 2] | 0;
  ae(u, v);
 }
 k = e + 16 | 0;
 a : do switch (c[k >> 2] | 0) {
 case 271:
  {
   j = 1;
   p = 8;
   break;
  }
 case 45:
  {
   j = 0;
   p = 8;
   break;
  }
 case 35:
  {
   j = 2;
   p = 8;
   break;
  }
 case 287:
  {
   c[f + 16 >> 2] = -1;
   c[f + 20 >> 2] = -1;
   c[f >> 2] = 5;
   c[f + 8 >> 2] = 0;
   h[f + 8 >> 3] = +h[e + 24 >> 3];
   p = 20;
   break;
  }
 case 289:
  {
   p = xe(o, c[e + 24 >> 2] | 0) | 0;
   c[f + 16 >> 2] = -1;
   c[f + 20 >> 2] = -1;
   c[f >> 2] = 4;
   c[f + 8 >> 2] = p;
   p = 20;
   break;
  }
 case 270:
  {
   c[f + 16 >> 2] = -1;
   c[f + 20 >> 2] = -1;
   c[f >> 2] = 1;
   c[f + 8 >> 2] = 0;
   p = 20;
   break;
  }
 case 276:
  {
   c[f + 16 >> 2] = -1;
   c[f + 20 >> 2] = -1;
   c[f >> 2] = 2;
   c[f + 8 >> 2] = 0;
   p = 20;
   break;
  }
 case 263:
  {
   c[f + 16 >> 2] = -1;
   c[f + 20 >> 2] = -1;
   c[f >> 2] = 3;
   c[f + 8 >> 2] = 0;
   p = 20;
   break;
  }
 case 280:
  {
   if (!(a[(c[o >> 2] | 0) + 77 >> 0] | 0)) ae(e, 7060); else {
    p = ye(o, 38, 0, 1, 0) | 0;
    c[f + 16 >> 2] = -1;
    c[f + 20 >> 2] = -1;
    c[f >> 2] = 13;
    c[f + 8 >> 2] = p;
    p = 20;
    break a;
   }
   break;
  }
 case 123:
  {
   ze(e, f);
   break;
  }
 case 265:
  {
   de(e);
   Je(e, f, 0, c[e + 4 >> 2] | 0);
   break;
  }
 default:
  Ze(e, f);
 } while (0);
 if ((p | 0) == 8) {
  v = c[e + 4 >> 2] | 0;
  de(e);
  ne(e, f, 8) | 0;
  oe(c[q >> 2] | 0, j, f, v);
 } else if ((p | 0) == 20) de(e);
 do switch (c[k >> 2] | 0) {
 case 43:
  {
   j = 0;
   break;
  }
 case 45:
  {
   j = 1;
   break;
  }
 case 42:
  {
   j = 2;
   break;
  }
 case 47:
  {
   j = 3;
   break;
  }
 case 37:
  {
   j = 4;
   break;
  }
 case 94:
  {
   j = 5;
   break;
  }
 case 279:
  {
   j = 6;
   break;
  }
 case 284:
  {
   j = 10;
   break;
  }
 case 281:
  {
   j = 7;
   break;
  }
 case 60:
  {
   j = 8;
   break;
  }
 case 283:
  {
   j = 9;
   break;
  }
 case 62:
  {
   j = 11;
   break;
  }
 case 282:
  {
   j = 12;
   break;
  }
 case 257:
  {
   j = 13;
   break;
  }
 case 272:
  {
   j = 14;
   break;
  }
 default:
  {
   v = 15;
   u = c[s >> 2] | 0;
   u = u + 38 | 0;
   s = b[u >> 1] | 0;
   s = s + -1 << 16 >> 16;
   b[u >> 1] = s;
   i = t;
   return v | 0;
  }
 } while (0);
 k = e + 4 | 0;
 while (1) {
  if ((d[7451 + (j << 1) >> 0] | 0) <= (g | 0)) {
   p = 39;
   break;
  }
  v = c[k >> 2] | 0;
  de(e);
  ff(c[q >> 2] | 0, j, f);
  u = j;
  j = ne(e, r, d[7451 + (j << 1) + 1 >> 0] | 0) | 0;
  kf(c[q >> 2] | 0, u, f, r, v);
  if ((j | 0) == 15) {
   j = 15;
   p = 39;
   break;
  }
 }
 if ((p | 0) == 39) {
  v = c[s >> 2] | 0;
  v = v + 38 | 0;
  u = b[v >> 1] | 0;
  u = u + -1 << 16 >> 16;
  b[v >> 1] = u;
  i = t;
  return j | 0;
 }
 return 0;
}

function uf(f, g, h) {
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 C = i;
 i = i + 80 | 0;
 y = C + 64 | 0;
 x = C + 56 | 0;
 B = C + 32 | 0;
 w = C;
 A = g + 8 | 0;
 if (((c[A >> 2] | 0) + -7 | 0) >>> 0 >= 3) ae(f, 7617);
 j = f + 16 | 0;
 a : do switch (c[j >> 2] | 0) {
 case 44:
  {
   de(f);
   c[w >> 2] = g;
   t = w + 8 | 0;
   Ze(f, t);
   n = c[t >> 2] | 0;
   v = f + 48 | 0;
   if ((n | 0) != 9) {
    u = c[v >> 2] | 0;
    q = a[u + 48 >> 0] | 0;
    r = q & 255;
    s = w + 16 | 0;
    o = q & 255;
    p = c[s >> 2] | 0;
    if ((n | 0) == 7) {
     n = g;
     g = 0;
     do {
      if ((c[n + 8 >> 2] | 0) == 9) {
       l = n + 16 | 0;
       j = l + 3 | 0;
       if ((a[j >> 0] | 0) == 7) {
        k = l + 2 | 0;
        if ((d[k >> 0] | 0) == (p | 0)) {
         a[j >> 0] = 7;
         a[k >> 0] = q;
         g = 1;
        }
       }
       if ((b[l >> 1] | 0) == (p | 0)) {
        b[l >> 1] = o;
        g = 1;
       }
      }
      n = c[n >> 2] | 0;
     } while ((n | 0) != 0);
    } else {
     l = g;
     g = 0;
     do {
      if ((c[l + 8 >> 2] | 0) == 9) {
       j = l + 16 | 0;
       k = j + 3 | 0;
       if ((d[k >> 0] | 0) == (n | 0)) {
        j = j + 2 | 0;
        if ((d[j >> 0] | 0) == (p | 0)) {
         a[k >> 0] = 7;
         a[j >> 0] = q;
         g = 1;
        }
       }
      }
      l = c[l >> 2] | 0;
     } while ((l | 0) != 0);
    }
    if (g | 0) {
     ye(u, (c[t >> 2] | 0) == 7 ? 0 : 5, r, c[s >> 2] | 0, 0) | 0;
     Me(u, 1);
    }
   }
   g = c[v >> 2] | 0;
   if (((e[(c[f + 52 >> 2] | 0) + 38 >> 1] | 0) + h | 0) <= 200) {
    uf(f, w, h + 1 | 0);
    z = B;
    m = v;
    break a;
   }
   j = g + 12 | 0;
   k = c[(c[j >> 2] | 0) + 52 >> 2] | 0;
   g = c[(c[g >> 2] | 0) + 64 >> 2] | 0;
   if (!g) {
    f = 6600;
    c[y >> 2] = 6971;
    h = y + 4 | 0;
    c[h >> 2] = 200;
    h = y + 8 | 0;
    c[h >> 2] = f;
    h = $b(k, 6614, y) | 0;
    f = c[j >> 2] | 0;
    ae(f, h);
   }
   c[x >> 2] = g;
   x = $b(k, 6580, x) | 0;
   c[y >> 2] = 6971;
   h = y + 4 | 0;
   c[h >> 2] = 200;
   h = y + 8 | 0;
   c[h >> 2] = x;
   h = $b(k, 6614, y) | 0;
   y = c[j >> 2] | 0;
   ae(y, h);
   break;
  }
 case 61:
  {
   de(f);
   ne(f, B, 0) | 0;
   m = f + 48 | 0;
   if ((c[j >> 2] | 0) == 44) {
    g = 1;
    do {
     de(f);
     Ae(c[m >> 2] | 0, B);
     ne(f, B, 0) | 0;
     g = g + 1 | 0;
    } while ((c[j >> 2] | 0) == 44);
   } else g = 1;
   k = c[m >> 2] | 0;
   if ((g | 0) == (h | 0)) {
    vf(k, B);
    tf(c[m >> 2] | 0, A, B);
    i = C;
    return;
   }
   l = h - g | 0;
   switch (c[B >> 2] | 0) {
   case 13:
   case 12:
    {
     j = l + 1 | 0;
     j = (j | 0) < 0 ? 0 : j;
     He(k, B, j);
     if ((j | 0) > 1) Me(k, j + -1 | 0);
     break;
    }
   case 0:
    {
     n = 33;
     break;
    }
   default:
    {
     Ae(k, B);
     n = 33;
    }
   }
   if ((n | 0) == 33) if ((l | 0) > 0) {
    z = d[k + 48 >> 0] | 0;
    Me(k, l);
    rf(k, z, l);
   }
   if ((g | 0) > (h | 0)) {
    z = (c[m >> 2] | 0) + 48 | 0;
    a[z >> 0] = l + (d[z >> 0] | 0);
    z = B;
   } else z = B;
   break;
  }
 default:
  Be(f, 61);
 } while (0);
 h = c[m >> 2] | 0;
 y = (d[h + 48 >> 0] | 0) + -1 | 0;
 c[B + 16 >> 2] = -1;
 c[B + 20 >> 2] = -1;
 c[z >> 2] = 6;
 c[B + 8 >> 2] = y;
 tf(h, A, B);
 i = C;
 return;
}

function tn(a, b, d, e, f) {
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
   f = k >>> ((ga(i | 0) | 0) >>> 0);
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
   p = ga(h | 0) | 0;
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
  k = mn(m | 0, l | 0, -1, -1) | 0;
  d = C;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   ln(k | 0, d | 0, e | 0, n | 0) | 0;
   p = C;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = ln(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
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

function Xb(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = b + 12 | 0;
 m = e;
 a : while (1) {
  l = Yb(b, m + 1 | 0, d) | 0;
  c[f >> 2] = l;
  if (l | 0) {
   d = 5244;
   i = 39;
   break;
  }
  if ((d | 0) <= 0) {
   d = 0;
   i = 39;
   break;
  }
  e = c[n >> 2] | 0;
  k = 0;
  g = -1;
  while (1) {
   i = c[e + (k << 2) >> 2] | 0;
   j = i & 63;
   h = i >>> 6 & 255;
   switch (j | 0) {
   case 4:
    {
     if ((h | 0) > (m | 0)) l = k; else {
      l = k;
      g = (h + (i >>> 23) | 0) < (m | 0) ? g : k;
     }
     break;
    }
   case 34:
    {
     l = k;
     g = (h + 2 | 0) > (m | 0) ? g : k;
     break;
    }
   case 30:
   case 29:
    {
     l = k;
     g = (h | 0) > (m | 0) ? g : k;
     break;
    }
   case 23:
    {
     l = (i >>> 14) + -131071 | 0;
     j = k + 1 + l | 0;
     l = ((k | 0) >= (j | 0) | (j | 0) > (d | 0) ? 0 : l) + k | 0;
     break;
    }
   case 27:
    {
     l = k;
     g = (h | 0) == (m | 0) ? k : g;
     break;
    }
   default:
    {
     l = k;
     g = (h | 0) == (m | 0) & (a[3916 + j >> 0] & 64) != 0 ? k : g;
    }
   }
   k = l + 1 | 0;
   if ((k | 0) >= (d | 0)) {
    h = g;
    break;
   }
  }
  if ((h | 0) == -1) {
   d = 0;
   i = 39;
   break;
  }
  d = c[e + (h << 2) >> 2] | 0;
  g = d & 63;
  switch (g | 0) {
  case 7:
  case 6:
   {
    i = 17;
    break a;
   }
  case 5:
   {
    i = 28;
    break a;
   }
  case 12:
   {
    e = h;
    i = 33;
    break a;
   }
  case 1:
   {
    i = 29;
    break a;
   }
  case 2:
   {
    d = h;
    i = 30;
    break a;
   }
  case 0:
   break;
  default:
   {
    d = 0;
    i = 39;
    break a;
   }
  }
  e = d >>> 23;
  if (e >>> 0 < (d >>> 6 & 255) >>> 0) {
   d = h;
   m = e;
  } else {
   d = 0;
   i = 39;
   break;
  }
 }
 if ((i | 0) == 17) {
  e = d >>> 14;
  d = d >>> 23;
  if ((g | 0) == 7) g = Yb(b, d + 1 | 0, h) | 0; else {
   g = c[(c[b + 28 >> 2] | 0) + (d << 3) >> 2] | 0;
   g = (g | 0) == 0 ? 8259 : g + 16 | 0;
  }
  if (!(e & 256)) {
   d = Xb(b, h, e & 511, f) | 0;
   if (!d) i = 25; else if ((a[d >> 0] | 0) != 99) i = 25;
  } else {
   e = e & 255;
   d = c[b + 8 >> 2] | 0;
   if ((c[d + (e << 4) + 8 >> 2] & 15 | 0) == 4) c[f >> 2] = (c[d + (e << 4) >> 2] | 0) + 16; else i = 25;
  }
  if ((i | 0) == 25) c[f >> 2] = 8259;
  if (!g) {
   f = 4379;
   return f | 0;
  }
  f = (Ql(g, 6575) | 0) == 0;
  f = f ? 4372 : 4379;
  return f | 0;
 } else if ((i | 0) == 28) {
  b = c[(c[b + 28 >> 2] | 0) + (d >>> 23 << 3) >> 2] | 0;
  c[f >> 2] = (b | 0) == 0 ? 8259 : b + 16 | 0;
  f = 4385;
  return f | 0;
 } else if ((i | 0) == 29) e = d >>> 14; else if ((i | 0) == 30) e = (c[e + (d + 1 << 2) >> 2] | 0) >>> 6; else if ((i | 0) == 33) {
  d = d >>> 14;
  if (!(d & 256)) {
   d = Xb(b, e, d & 511, f) | 0;
   if (d | 0) if ((a[d >> 0] | 0) == 99) {
    f = 6161;
    return f | 0;
   }
  } else {
   e = d & 255;
   d = c[b + 8 >> 2] | 0;
   if ((c[d + (e << 4) + 8 >> 2] & 15 | 0) == 4) {
    c[f >> 2] = (c[d + (e << 4) >> 2] | 0) + 16;
    f = 6161;
    return f | 0;
   }
  }
  c[f >> 2] = 8259;
  f = 6161;
  return f | 0;
 } else if ((i | 0) == 39) return d | 0;
 d = c[b + 8 >> 2] | 0;
 if ((c[d + (e << 4) + 8 >> 2] & 15 | 0) != 4) {
  f = 0;
  return f | 0;
 }
 c[f >> 2] = (c[d + (e << 4) >> 2] | 0) + 16;
 f = 4393;
 return f | 0;
}

function oe(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 32 | 0;
 j = n;
 c[j + 20 >> 2] = -1;
 c[j + 16 >> 2] = -1;
 c[j >> 2] = 5;
 h[j + 8 >> 3] = 0.0;
 switch (e | 0) {
 case 0:
  {
   if ((c[f >> 2] | 0) == 5) if ((c[f + 16 >> 2] | 0) == -1) if ((c[f + 20 >> 2] | 0) == -1) {
    m = f + 8 | 0;
    h[m >> 3] = -+h[m >> 3];
    i = n;
    return;
   }
   pe(b, f) | 0;
   ve(b, 19, f, j, g);
   i = n;
   return;
  }
 case 1:
  {
   qe(b, f);
   switch (c[f >> 2] | 0) {
   case 3:
   case 1:
    {
     c[f >> 2] = 2;
     break;
    }
   case 2:
   case 5:
   case 4:
    {
     c[f >> 2] = 3;
     break;
    }
   case 10:
    {
     l = c[f + 8 >> 2] | 0;
     e = (c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (l << 2) | 0;
     if ((l | 0) > 0) {
      g = e + -4 | 0;
      j = c[g >> 2] | 0;
      if ((a[3916 + (j & 63) >> 0] | 0) >= 0) m = 12;
     } else m = 12;
     if ((m | 0) == 12) {
      g = e;
      j = c[e >> 2] | 0;
     }
     c[g >> 2] = ((j & 16320 | 0) == 0 & 1) << 6 | j & -16321;
     break;
    }
   case 6:
    {
     m = 21;
     break;
    }
   case 11:
    {
     j = b + 48 | 0;
     g = (d[j >> 0] | 0) + 1 | 0;
     e = (c[b >> 2] | 0) + 78 | 0;
     do if (g >>> 0 > (d[e >> 0] | 0) >>> 0) if (g >>> 0 > 249) ae(c[b + 12 >> 2] | 0, 7025); else {
      k = g & 255;
      a[e >> 0] = k;
      break;
     } else k = g & 255; while (0);
     a[j >> 0] = k;
     te(b, f, (k & 255) + -1 | 0);
     if ((c[f >> 2] | 0) == 6) m = 21; else {
      g = f + 8 | 0;
      j = g;
      g = c[g >> 2] | 0;
      m = 24;
     }
     break;
    }
   default:
    {}
   }
   if ((m | 0) == 21) {
    j = f + 8 | 0;
    g = c[j >> 2] | 0;
    if (!(g & 256)) if ((d[b + 46 >> 0] | 0) > (g | 0)) m = 24; else {
     m = b + 48 | 0;
     a[m >> 0] = (a[m >> 0] | 0) + -1 << 24 >> 24;
     m = 24;
    } else m = 24;
   }
   if ((m | 0) == 24) {
    c[j >> 2] = re(b, g << 23 | 20) | 0;
    c[f >> 2] = 11;
   }
   k = f + 20 | 0;
   j = c[k >> 2] | 0;
   l = f + 16 | 0;
   g = c[l >> 2] | 0;
   c[k >> 2] = g;
   c[l >> 2] = j;
   if ((g | 0) != -1) {
    f = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
    do {
     k = f + (g << 2) | 0;
     if ((g | 0) > 0) {
      j = k + -4 | 0;
      e = c[j >> 2] | 0;
      if ((a[3916 + (e & 63) >> 0] | 0) >= 0) m = 29;
     } else m = 29;
     if ((m | 0) == 29) {
      m = 0;
      j = k;
      e = c[k >> 2] | 0;
     }
     if ((e & 63 | 0) == 28) c[j >> 2] = e & 8372224 | e >>> 23 << 6 | 27;
     k = ((c[k >> 2] | 0) >>> 14) + -131071 | 0;
     g = (k | 0) == -1 ? -1 : g + 1 + k | 0;
    } while ((g | 0) != -1);
    j = c[l >> 2] | 0;
   }
   if ((j | 0) == -1) {
    i = n;
    return;
   }
   f = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
   do {
    k = f + (j << 2) | 0;
    if ((j | 0) > 0) {
     e = k + -4 | 0;
     g = c[e >> 2] | 0;
     if ((a[3916 + (g & 63) >> 0] | 0) >= 0) m = 38;
    } else m = 38;
    if ((m | 0) == 38) {
     m = 0;
     e = k;
     g = c[k >> 2] | 0;
    }
    if ((g & 63 | 0) == 28) c[e >> 2] = g & 8372224 | g >>> 23 << 6 | 27;
    b = ((c[k >> 2] | 0) >>> 14) + -131071 | 0;
    j = (b | 0) == -1 ? -1 : j + 1 + b | 0;
   } while ((j | 0) != -1);
   i = n;
   return;
  }
 case 2:
  {
   pe(b, f) | 0;
   ve(b, 21, f, j, g);
   i = n;
   return;
  }
 default:
  {
   i = n;
   return;
  }
 }
}

function Qe(e) {
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0;
 w = i;
 i = i + 16 | 0;
 u = w;
 r = e + 16 | 0;
 s = c[r >> 2] | 0;
 v = e + 12 | 0;
 t = c[v >> 2] | 0;
 if (c[s >> 2] | 0) if (a[s + 9 >> 0] | 0) {
  q = Re(e) | 0;
  Se(e, q, d[s + 8 >> 0] | 0);
  Te(e, q);
 }
 a : do if (a[s + 10 >> 0] | 0) {
  f = t + 52 | 0;
  n = Oc(c[f >> 2] | 0, 7252) | 0;
  m = t + 64 | 0;
  k = c[m >> 2] | 0;
  g = k + 24 | 0;
  j = t + 48 | 0;
  l = c[j >> 2] | 0;
  o = c[l + 20 >> 2] | 0;
  p = k + 28 | 0;
  q = c[p >> 2] | 0;
  h = k + 32 | 0;
  if ((q | 0) < (c[h >> 2] | 0)) {
   h = c[g >> 2] | 0;
   g = l;
   f = q;
  } else {
   h = ce(c[f >> 2] | 0, c[g >> 2] | 0, h, 16, 32767, 7258) | 0;
   c[g >> 2] = h;
   g = c[j >> 2] | 0;
   f = c[p >> 2] | 0;
   k = c[m >> 2] | 0;
  }
  c[h + (q << 4) >> 2] = n;
  c[h + (q << 4) + 8 >> 2] = 0;
  a[h + (q << 4) + 12 >> 0] = a[g + 46 >> 0] | 0;
  c[h + (q << 4) + 4 >> 2] = o;
  c[p >> 2] = f + 1;
  j = (c[k + 24 >> 2] | 0) + (q << 4) | 0;
  f = b[(c[g + 16 >> 2] | 0) + 6 >> 1] | 0;
  h = k + 16 | 0;
  if ((f | 0) < (c[h >> 2] | 0)) {
   g = k + 12 | 0;
   do {
    while (1) {
     if (!(Ue(c[(c[g >> 2] | 0) + (f << 4) >> 2] | 0, c[j >> 2] | 0) | 0)) break;
     Ve(t, f, j);
     if ((f | 0) >= (c[h >> 2] | 0)) break a;
    }
    f = f + 1 | 0;
   } while ((f | 0) < (c[h >> 2] | 0));
  }
 } while (0);
 o = c[s >> 2] | 0;
 c[r >> 2] = o;
 p = s + 8 | 0;
 f = a[p >> 0] | 0;
 n = e + 46 | 0;
 g = a[n >> 0] | 0;
 h = g & 255;
 r = (c[(c[v >> 2] | 0) + 64 >> 2] | 0) + 4 | 0;
 c[r >> 2] = (f & 255) - h + (c[r >> 2] | 0);
 if ((f & 255) < (g & 255)) {
  j = c[e + 20 >> 2] | 0;
  m = c[e + 40 >> 2] | 0;
  k = c[(c[e >> 2] | 0) + 24 >> 2] | 0;
  l = c[c[(c[v >> 2] | 0) + 64 >> 2] >> 2] | 0;
  g = h;
  while (1) {
   r = (g & 255) + -1 << 24 >> 24;
   c[k + ((b[l + ((r & 255) + m << 1) >> 1] | 0) * 12 | 0) + 8 >> 2] = j;
   if ((r & 255) > (f & 255)) g = g + -1 | 0; else break;
  }
  a[n >> 0] = f;
 } else f = g;
 a[e + 48 >> 0] = f;
 l = c[s + 4 >> 2] | 0;
 f = c[t + 64 >> 2] | 0;
 c[f + 28 >> 2] = l << 16 >> 16;
 l = l >> 16;
 if (!o) {
  if ((l | 0) >= (c[f + 16 >> 2] | 0)) {
   i = w;
   return;
  }
  f = c[f + 12 >> 2] | 0;
  g = c[f + (l << 4) >> 2] | 0;
  h = c[g + 4 >> 2] | 0;
  if ((h & 255) << 24 >> 24 != 4) {
   s = 7361;
   r = t + 52 | 0;
   r = c[r >> 2] | 0;
   q = g + 16 | 0;
   o = f + (l << 4) + 8 | 0;
   o = c[o >> 2] | 0;
   c[u >> 2] = q;
   q = u + 4 | 0;
   c[q >> 2] = o;
   s = $b(r, s, u) | 0;
   We(t, s);
  }
  s = h & 16711680 | 0 ? 7327 : 7361;
  r = t + 52 | 0;
  r = c[r >> 2] | 0;
  q = g + 16 | 0;
  o = f + (l << 4) + 8 | 0;
  o = c[o >> 2] | 0;
  c[u >> 2] = q;
  q = u + 4 | 0;
  c[q >> 2] = o;
  u = $b(r, s, u) | 0;
  We(t, u);
 }
 f = c[(c[v >> 2] | 0) + 64 >> 2] | 0;
 n = f + 16 | 0;
 if ((l | 0) >= (c[n >> 2] | 0)) {
  i = w;
  return;
 }
 m = f + 12 | 0;
 do {
  g = c[m >> 2] | 0;
  k = g + (l << 4) + 12 | 0;
  h = b[p >> 1] | 0;
  f = h & 255;
  j = h & 255;
  if ((d[k >> 0] | 0) > (f & 255)) {
   if ((h & 65535) >= 256) {
    Se(e, c[g + (l << 4) + 4 >> 2] | 0, j);
    f = a[p >> 0] | 0;
   }
   a[k >> 0] = f;
  }
  l = ((Ye(c[v >> 2] | 0, l) | 0) == 0 & 1) + l | 0;
 } while ((l | 0) < (c[n >> 2] | 0));
 i = w;
 return;
}

function kf(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0;
 switch (e | 0) {
 case 13:
  {
   qe(b, g);
   e = g + 20 | 0;
   m = c[f + 20 >> 2] | 0;
   do if ((m | 0) != -1) {
    i = c[e >> 2] | 0;
    if ((i | 0) == -1) {
     c[e >> 2] = m;
     break;
    }
    l = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
    while (1) {
     k = l + (i << 2) | 0;
     j = c[k >> 2] | 0;
     e = (j >>> 14) + -131071 | 0;
     e = (e | 0) == -1 ? -1 : i + 1 + e | 0;
     if ((e | 0) == -1) break; else i = e;
    }
    e = m + ~i | 0;
    if ((((e | 0) > -1 ? e : 0 - e | 0) | 0) > 131071) ae(c[b + 12 >> 2] | 0, 6980); else {
     c[k >> 2] = (e << 14) + 2147467264 | j & 16383;
     break;
    }
   } while (0);
   c[f >> 2] = c[g >> 2];
   c[f + 4 >> 2] = c[g + 4 >> 2];
   c[f + 8 >> 2] = c[g + 8 >> 2];
   c[f + 12 >> 2] = c[g + 12 >> 2];
   c[f + 16 >> 2] = c[g + 16 >> 2];
   c[f + 20 >> 2] = c[g + 20 >> 2];
   return;
  }
 case 14:
  {
   qe(b, g);
   e = g + 16 | 0;
   m = c[f + 16 >> 2] | 0;
   do if ((m | 0) != -1) {
    i = c[e >> 2] | 0;
    if ((i | 0) == -1) {
     c[e >> 2] = m;
     break;
    }
    l = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
    while (1) {
     k = l + (i << 2) | 0;
     j = c[k >> 2] | 0;
     e = (j >>> 14) + -131071 | 0;
     e = (e | 0) == -1 ? -1 : i + 1 + e | 0;
     if ((e | 0) == -1) break; else i = e;
    }
    e = m + ~i | 0;
    if ((((e | 0) > -1 ? e : 0 - e | 0) | 0) > 131071) ae(c[b + 12 >> 2] | 0, 6980); else {
     c[k >> 2] = (e << 14) + 2147467264 | j & 16383;
     break;
    }
   } while (0);
   c[f >> 2] = c[g >> 2];
   c[f + 4 >> 2] = c[g + 4 >> 2];
   c[f + 8 >> 2] = c[g + 8 >> 2];
   c[f + 12 >> 2] = c[g + 12 >> 2];
   c[f + 16 >> 2] = c[g + 16 >> 2];
   c[f + 20 >> 2] = c[g + 20 >> 2];
   return;
  }
 case 6:
  {
   if ((c[g + 16 >> 2] | 0) == (c[g + 20 >> 2] | 0)) qe(b, g); else pe(b, g) | 0;
   if ((c[g >> 2] | 0) == 11) {
    j = g + 8 | 0;
    k = (c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (c[j >> 2] << 2) | 0;
    l = c[k >> 2] | 0;
    if ((l & 63 | 0) == 22) {
     e = f + 8 | 0;
     i = c[e >> 2] | 0;
     if ((c[f >> 2] | 0) == 6 & (i & 256 | 0) == 0) if ((d[b + 46 >> 0] | 0 | 0) <= (i | 0)) {
      b = b + 48 | 0;
      a[b >> 0] = (a[b >> 0] | 0) + -1 << 24 >> 24;
     }
     c[k >> 2] = i << 23 | l & 8388607;
     c[f >> 2] = 11;
     c[e >> 2] = c[j >> 2];
     return;
    }
   }
   qe(b, g);
   if ((c[g >> 2] | 0) == 6) {
    e = c[g + 8 >> 2] | 0;
    if (!(e & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (e | 0)) {
     l = b + 48 | 0;
     a[l >> 0] = (a[l >> 0] | 0) + -1 << 24 >> 24;
    }
   }
   e = b + 48 | 0;
   i = (d[e >> 0] | 0) + 1 | 0;
   j = (c[b >> 2] | 0) + 78 | 0;
   do if (i >>> 0 > (d[j >> 0] | 0) >>> 0) if (i >>> 0 > 249) ae(c[b + 12 >> 2] | 0, 7025); else {
    m = i & 255;
    a[j >> 0] = m;
    break;
   } else m = i & 255; while (0);
   a[e >> 0] = m;
   se(b, g, (m & 255) + -1 | 0);
   ve(b, 22, f, g, h);
   return;
  }
 case 5:
 case 4:
 case 3:
 case 2:
 case 1:
 case 0:
  {
   ve(b, e + 13 | 0, f, g, h);
   return;
  }
 case 9:
 case 8:
 case 7:
  {
   lf(b, e + 17 | 0, 1, f, g);
   return;
  }
 case 12:
 case 11:
 case 10:
  {
   lf(b, e + 14 | 0, 0, f, g);
   return;
  }
 default:
  return;
 }
}

function Ec(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 k = b + 8 | 0;
 f = c[k >> 2] | 0;
 if ((f | 0) == 3) {
  if ((c[e + 8 >> 2] | 0) == 3) {
   e = +h[b >> 3] <= +h[e >> 3] & 1;
   return e | 0;
  }
 } else if ((f & 15 | 0) == 4) if ((c[e + 8 >> 2] & 15 | 0) == 4) {
  i = c[b >> 2] | 0;
  j = c[e >> 2] | 0;
  g = i + 16 | 0;
  k = j + 16 | 0;
  f = bm(g, k) | 0;
  a : do if (!f) {
   a = c[i + 12 >> 2] | 0;
   j = c[j + 12 >> 2] | 0;
   while (1) {
    i = Jl(g) | 0;
    f = (i | 0) == (a | 0);
    if ((i | 0) == (j | 0)) break;
    if (f) {
     f = -1;
     break a;
    }
    i = i + 1 | 0;
    g = g + i | 0;
    k = k + i | 0;
    f = bm(g, k) | 0;
    if (f | 0) break a; else {
     a = a - i | 0;
     j = j - i | 0;
    }
   }
   f = f & 1 ^ 1;
  } while (0);
  e = (f | 0) < 1 & 1;
  return e | 0;
 }
 i = a + 8 | 0;
 g = c[i >> 2] | 0;
 f = pb(a, b, 14) | 0;
 if (!(c[f + 8 >> 2] | 0)) {
  f = pb(a, e, 14) | 0;
  if (!(c[f + 8 >> 2] | 0)) {
   g = c[i >> 2] | 0;
   f = pb(a, e, 13) | 0;
   if (!(c[f + 8 >> 2] | 0)) {
    f = pb(a, b, 13) | 0;
    if (!(c[f + 8 >> 2] | 0)) Dc(a, b, e); else j = f;
   } else j = f;
   l = a + 28 | 0;
   f = c[l >> 2] | 0;
   m = c[i >> 2] | 0;
   c[i >> 2] = m + 16;
   p = j;
   n = c[p + 4 >> 2] | 0;
   o = m;
   c[o >> 2] = c[p >> 2];
   c[o + 4 >> 2] = n;
   c[m + 8 >> 2] = c[j + 8 >> 2];
   m = c[i >> 2] | 0;
   c[i >> 2] = m + 16;
   o = e;
   n = c[o + 4 >> 2] | 0;
   j = m;
   c[j >> 2] = c[o >> 2];
   c[j + 4 >> 2] = n;
   c[m + 8 >> 2] = c[e + 8 >> 2];
   e = c[i >> 2] | 0;
   c[i >> 2] = e + 16;
   m = b;
   j = c[m + 4 >> 2] | 0;
   b = e;
   c[b >> 2] = c[m >> 2];
   c[b + 4 >> 2] = j;
   c[e + 8 >> 2] = c[k >> 2];
   sb(a, (c[i >> 2] | 0) + -48 | 0, 1, (d[(c[a + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
   f = (c[l >> 2] | 0) + (g - f) | 0;
   g = c[i >> 2] | 0;
   a = g + -16 | 0;
   c[i >> 2] = a;
   b = c[a + 4 >> 2] | 0;
   e = f;
   c[e >> 2] = c[a >> 2];
   c[e + 4 >> 2] = b;
   c[f + 8 >> 2] = c[g + -8 >> 2];
   f = c[i >> 2] | 0;
   g = c[f + 8 >> 2] | 0;
   if (!g) f = 0; else if ((g | 0) == 1) f = (c[f >> 2] | 0) != 0; else f = 1;
   p = f & 1 ^ 1;
   return p | 0;
  }
 }
 o = a + 28 | 0;
 n = c[o >> 2] | 0;
 p = c[i >> 2] | 0;
 c[i >> 2] = p + 16;
 j = f;
 l = c[j + 4 >> 2] | 0;
 m = p;
 c[m >> 2] = c[j >> 2];
 c[m + 4 >> 2] = l;
 c[p + 8 >> 2] = c[f + 8 >> 2];
 f = c[i >> 2] | 0;
 c[i >> 2] = f + 16;
 p = b;
 m = c[p + 4 >> 2] | 0;
 l = f;
 c[l >> 2] = c[p >> 2];
 c[l + 4 >> 2] = m;
 c[f + 8 >> 2] = c[k >> 2];
 f = c[i >> 2] | 0;
 c[i >> 2] = f + 16;
 l = e;
 m = c[l + 4 >> 2] | 0;
 p = f;
 c[p >> 2] = c[l >> 2];
 c[p + 4 >> 2] = m;
 c[f + 8 >> 2] = c[e + 8 >> 2];
 sb(a, (c[i >> 2] | 0) + -48 | 0, 1, (d[(c[a + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
 f = (c[o >> 2] | 0) + (g - n) | 0;
 g = c[i >> 2] | 0;
 n = g + -16 | 0;
 c[i >> 2] = n;
 o = c[n + 4 >> 2] | 0;
 p = f;
 c[p >> 2] = c[n >> 2];
 c[p + 4 >> 2] = o;
 c[f + 8 >> 2] = c[g + -8 >> 2];
 f = c[i >> 2] | 0;
 g = c[f + 8 >> 2] | 0;
 if (!g) f = 0; else if ((g | 0) == 1) f = (c[f >> 2] | 0) != 0; else f = 1;
 p = f & 1;
 return p | 0;
}

function qc(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0.0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 z = i;
 i = i + 32 | 0;
 l = z + 16 | 0;
 w = z;
 r = e + 28 | 0;
 s = c[r >> 2] | 0;
 t = e + 7 | 0;
 x = a[t >> 0] | 0;
 u = x & 255;
 v = e + 16 | 0;
 y = c[v >> 2] | 0;
 if ((s | 0) < (f | 0)) {
  if ((f + 1 | 0) >>> 0 > 268435455) yb(b);
  j = e + 12 | 0;
  k = mb(b, c[j >> 2] | 0, s << 4, f << 4) | 0;
  c[j >> 2] = k;
  j = c[r >> 2] | 0;
  if ((j | 0) < (f | 0)) do {
   c[k + (j << 4) + 8 >> 2] = 0;
   j = j + 1 | 0;
  } while ((j | 0) != (f | 0));
  c[r >> 2] = f;
 }
 if (!g) {
  c[v >> 2] = 15104;
  g = 0;
  k = 15104;
  j = 0;
 } else {
  m = pc(g) | 0;
  if ((m | 0) > 30) tb(b, 4815, l);
  j = 1 << m;
  if ((j + 1 | 0) >>> 0 > 134217727) yb(b);
  k = mb(b, 0, 0, j << 5) | 0;
  c[v >> 2] = k;
  g = 0;
  do {
   c[k + (g << 5) + 28 >> 2] = 0;
   c[k + (g << 5) + 24 >> 2] = 0;
   c[k + (g << 5) + 8 >> 2] = 0;
   g = g + 1 | 0;
  } while ((g | 0) < (j | 0));
  g = j;
  j = m & 255;
 }
 a[t >> 0] = j;
 c[e + 20 >> 2] = k + (g << 5);
 do if ((s | 0) > (f | 0)) {
  c[r >> 2] = f;
  n = e + 12 | 0;
  p = w + 8 | 0;
  q = w + 4 | 0;
  k = f;
  while (1) {
   j = c[n >> 2] | 0;
   m = j + (k << 4) + 8 | 0;
   if (!(c[m >> 2] | 0)) j = k + 1 | 0; else {
    l = j + (k << 4) | 0;
    j = k + 1 | 0;
    a : do if (k >>> 0 < (c[r >> 2] | 0) >>> 0) {
     k = l;
     g = 28;
    } else {
     o = +(j | 0);
     h[w >> 3] = o + 1.0;
     k = (c[q >> 2] | 0) + (c[w >> 2] | 0) | 0;
     if ((k | 0) < 0) {
      g = 0 - k | 0;
      k = (k | 0) == (g | 0) ? 0 : g;
     }
     k = (c[v >> 2] | 0) + (((k | 0) % ((1 << (d[t >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
     while (1) {
      if ((c[k + 24 >> 2] | 0) == 3) if (+h[k + 16 >> 3] == o) break;
      k = c[k + 28 >> 2] | 0;
      if (!k) {
       g = 30;
       break a;
      }
     }
     g = 28;
    } while (0);
    if ((g | 0) == 28) {
     g = 0;
     if ((k | 0) == 15088) {
      o = +(j | 0);
      g = 30;
     }
    }
    if ((g | 0) == 30) {
     h[w >> 3] = o;
     c[p >> 2] = 3;
     k = oc(b, e, w) | 0;
    }
    A = l;
    g = c[A + 4 >> 2] | 0;
    l = k;
    c[l >> 2] = c[A >> 2];
    c[l + 4 >> 2] = g;
    c[k + 8 >> 2] = c[m >> 2];
   }
   if ((j | 0) == (s | 0)) break; else k = j;
  }
  if ((f + 1 | 0) >>> 0 > 268435455) yb(b); else {
   A = e + 12 | 0;
   c[A >> 2] = mb(b, c[A >> 2] | 0, s << 4, f << 4) | 0;
   break;
  }
 } while (0);
 n = 1 << u;
 if (x << 24 >> 24 != 31) {
  l = n;
  do {
   m = l;
   l = l + -1 | 0;
   g = y + (l << 5) + 8 | 0;
   if (c[g >> 2] | 0) {
    k = y + (l << 5) + 16 | 0;
    j = jc(e, k) | 0;
    if ((j | 0) == 15088) j = oc(b, e, k) | 0;
    w = y + (l << 5) | 0;
    x = c[w + 4 >> 2] | 0;
    A = j;
    c[A >> 2] = c[w >> 2];
    c[A + 4 >> 2] = x;
    c[j + 8 >> 2] = c[g >> 2];
   }
  } while ((m | 0) > 1);
 }
 if ((y | 0) == 15104) {
  i = z;
  return;
 }
 mb(b, y, n << 5, 0) | 0;
 i = z;
 return;
}

function wc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, j = 0.0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 16 | 0;
 q = r;
 if (Pl(b, 4847) | 0) {
  b = 0;
  i = r;
  return b | 0;
 }
 a : do if (!(Pl(b, 4850) | 0)) {
  j = +ml(b, q);
  g = c[q >> 2] | 0;
 } else {
  g = b;
  c[q >> 2] = g;
  k = a[b >> 0] | 0;
  if (!(a[3999 + ((k & 255) + 1) >> 0] & 8)) l = b; else {
   g = b;
   do {
    g = g + 1 | 0;
    k = a[g >> 0] | 0;
   } while ((a[3999 + ((k & 255) + 1) >> 0] & 8) != 0);
   l = g;
  }
  switch (k << 24 >> 24) {
  case 45:
   {
    o = 1;
    g = l + 1 | 0;
    break;
   }
  case 43:
   {
    o = 0;
    g = l + 1 | 0;
    break;
   }
  default:
   o = 0;
  }
  b : do if ((a[g >> 0] | 0) == 48) {
   switch (a[g + 1 >> 0] | 0) {
   case 88:
   case 120:
    break;
   default:
    break b;
   }
   g = g + 2 | 0;
   l = a[g >> 0] | 0;
   m = l & 255;
   k = a[3999 + (m + 1) >> 0] | 0;
   if (!(k & 16)) {
    j = 0.0;
    k = l;
    n = 0;
   } else {
    j = 0.0;
    l = 0;
    do {
     j = j * 16.0 + +(((k & 2) == 0 ? (m | 32) + -87 | 0 : m + -48 | 0) | 0);
     l = l + 1 | 0;
     g = g + 1 | 0;
     n = a[g >> 0] | 0;
     m = n & 255;
     k = a[3999 + (m + 1) >> 0] | 0;
    } while ((k & 16) != 0);
    k = n;
    n = l;
   }
   if (k << 24 >> 24 == 46) {
    g = g + 1 | 0;
    l = d[g >> 0] | 0;
    k = a[3999 + (l + 1) >> 0] | 0;
    if (!(k & 16)) k = 0; else {
     m = 0;
     do {
      j = j * 16.0 + +(((k & 2) == 0 ? (l | 32) + -87 | 0 : l + -48 | 0) | 0);
      m = m + 1 | 0;
      g = g + 1 | 0;
      l = d[g >> 0] | 0;
      k = a[3999 + (l + 1) >> 0] | 0;
     } while ((k & 16) != 0);
     k = m;
    }
   } else k = 0;
   l = g;
   if (k | n | 0) {
    k = R(k, -4) | 0;
    c[q >> 2] = l;
    switch (a[g >> 0] | 0) {
    case 80:
    case 112:
     {
      l = g + 1 | 0;
      switch (a[l >> 0] | 0) {
      case 45:
       {
        n = 1;
        l = g + 2 | 0;
        break;
       }
      case 43:
       {
        n = 0;
        l = g + 2 | 0;
        break;
       }
      default:
       n = 0;
      }
      m = a[l >> 0] | 0;
      if (a[3999 + ((m & 255) + 1) >> 0] & 2) {
       g = l;
       l = 0;
       do {
        g = g + 1 | 0;
        l = (m << 24 >> 24) + -48 + (l * 10 | 0) | 0;
        m = a[g >> 0] | 0;
       } while ((a[3999 + ((m & 255) + 1) >> 0] & 2) != 0);
       k = ((n | 0) == 0 ? l : 0 - l | 0) + k | 0;
       p = 24;
      }
      break;
     }
    default:
     {
      g = l;
      p = 24;
     }
    }
    if ((p | 0) == 24) c[q >> 2] = g;
    j = +Um((o | 0) == 0 ? j : -j, k);
    break a;
   }
  } while (0);
  h[f >> 3] = 0.0;
  b = 0;
  i = r;
  return b | 0;
 } while (0);
 h[f >> 3] = j;
 if ((g | 0) == (b | 0)) {
  b = 0;
  i = r;
  return b | 0;
 }
 if (a[3999 + ((d[g >> 0] | 0) + 1) >> 0] & 8) {
  do g = g + 1 | 0; while ((a[3999 + ((d[g >> 0] | 0) + 1) >> 0] & 8) != 0);
  c[q >> 2] = g;
 }
 b = (g | 0) == (b + e | 0) & 1;
 i = r;
 return b | 0;
}

function Bc(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0.0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 q = i;
 i = i + 16 | 0;
 p = q;
 k = a + 28 | 0;
 b = c[k >> 2] | 0;
 if (b | 0) {
  e = c[a + 12 >> 2] | 0;
  if (!(c[e + (b + -1 << 4) + 8 >> 2] | 0)) {
   if (b >>> 0 > 1) a = 0; else {
    p = 0;
    i = q;
    return p | 0;
   }
   do {
    p = (a + b | 0) >>> 1;
    o = (c[e + (p + -1 << 4) + 8 >> 2] | 0) == 0;
    b = o ? p : b;
    a = o ? a : p;
   } while ((b - a | 0) >>> 0 > 1);
   i = q;
   return a | 0;
  }
 }
 n = a + 16 | 0;
 if ((c[n >> 2] | 0) == 15104) {
  p = b;
  i = q;
  return p | 0;
 }
 o = a + 12 | 0;
 m = a + 7 | 0;
 j = p + 4 | 0;
 g = b + 1 | 0;
 a = b;
 while (1) {
  e = g + -1 | 0;
  a : do if (e >>> 0 < b >>> 0) e = (c[o >> 2] | 0) + (e << 4) | 0; else {
   f = +(g | 0);
   h[p >> 3] = f + 1.0;
   e = (c[j >> 2] | 0) + (c[p >> 2] | 0) | 0;
   if ((e | 0) < 0) {
    r = 0 - e | 0;
    e = (e | 0) == (r | 0) ? 0 : r;
   }
   e = (c[n >> 2] | 0) + (((e | 0) % ((1 << (d[m >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
   while (1) {
    if ((c[e + 24 >> 2] | 0) == 3) if (+h[e + 16 >> 3] == f) break;
    e = c[e + 28 >> 2] | 0;
    if (!e) {
     e = 15088;
     break a;
    }
   }
  } while (0);
  if (!(c[e + 8 >> 2] | 0)) {
   b = g;
   break;
  }
  a = g << 1;
  if (a >>> 0 > 2147483645) {
   l = 20;
   break;
  } else {
   r = g;
   g = a;
   a = r;
  }
 }
 if ((l | 0) == 20) {
  e = c[k >> 2] | 0;
  g = p + 4 | 0;
  j = 1;
  while (1) {
   a = j + -1 | 0;
   b : do if (a >>> 0 < e >>> 0) b = (c[o >> 2] | 0) + (a << 4) | 0; else {
    f = +(j | 0);
    h[p >> 3] = f + 1.0;
    b = (c[g >> 2] | 0) + (c[p >> 2] | 0) | 0;
    if ((b | 0) < 0) {
     r = 0 - b | 0;
     b = (b | 0) == (r | 0) ? 0 : r;
    }
    b = (c[n >> 2] | 0) + (((b | 0) % ((1 << (d[m >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
    while (1) {
     if ((c[b + 24 >> 2] | 0) == 3) if (+h[b + 16 >> 3] == f) break;
     b = c[b + 28 >> 2] | 0;
     if (!b) {
      b = 15088;
      break b;
     }
    }
   } while (0);
   if (!(c[b + 8 >> 2] | 0)) break; else j = j + 1 | 0;
  }
  i = q;
  return a | 0;
 }
 if ((b - a | 0) >>> 0 <= 1) {
  r = a;
  i = q;
  return r | 0;
 }
 j = c[k >> 2] | 0;
 k = p + 4 | 0;
 g = b;
 do {
  e = (g + a | 0) >>> 1;
  b = e + -1 | 0;
  c : do if (b >>> 0 < j >>> 0) b = (c[o >> 2] | 0) + (b << 4) | 0; else {
   f = +(e | 0);
   h[p >> 3] = f + 1.0;
   b = (c[k >> 2] | 0) + (c[p >> 2] | 0) | 0;
   if ((b | 0) < 0) {
    r = 0 - b | 0;
    b = (b | 0) == (r | 0) ? 0 : r;
   }
   b = (c[n >> 2] | 0) + (((b | 0) % ((1 << (d[m >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
   while (1) {
    if ((c[b + 24 >> 2] | 0) == 3) if (+h[b + 16 >> 3] == f) break;
    b = c[b + 28 >> 2] | 0;
    if (!b) {
     b = 15088;
     break c;
    }
   }
  } while (0);
  r = (c[b + 8 >> 2] | 0) == 0;
  g = r ? e : g;
  a = r ? a : e;
 } while ((g - a | 0) >>> 0 > 1);
 i = q;
 return a | 0;
}

function ub(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0.0;
 v = i;
 i = i + 48 | 0;
 r = v + 8 | 0;
 p = v;
 o = v + 16 | 0;
 k = Ol(e, 37) | 0;
 n = b + 24 | 0;
 t = b + 8 | 0;
 j = c[t >> 2] | 0;
 l = (c[n >> 2] | 0) - j | 0;
 a : do if (!k) {
  s = e;
  q = l;
  g = j;
  u = 0;
 } else {
  m = 0;
  b : while (1) {
   if ((l | 0) < 48) {
    vb(b, 2);
    j = c[t >> 2] | 0;
   }
   c[t >> 2] = j + 16;
   l = zb(b, e, k - e | 0) | 0;
   c[j >> 2] = l;
   c[j + 8 >> 2] = d[l + 4 >> 0] | 64;
   j = a[k + 1 >> 0] | 0;
   switch (j | 0) {
   case 115:
    {
     e = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);
     j = c[e >> 2] | 0;
     c[f >> 2] = e + 4;
     j = (j | 0) == 0 ? 15012 : j;
     e = Jl(j) | 0;
     l = c[t >> 2] | 0;
     c[t >> 2] = l + 16;
     e = zb(b, j, e) | 0;
     c[l >> 2] = e;
     c[l + 8 >> 2] = d[e + 4 >> 0] | 64;
     break;
    }
   case 99:
    {
     e = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);
     l = c[e >> 2] | 0;
     c[f >> 2] = e + 4;
     a[o >> 0] = l;
     l = c[t >> 2] | 0;
     c[t >> 2] = l + 16;
     e = zb(b, o, 1) | 0;
     c[l >> 2] = e;
     c[l + 8 >> 2] = d[e + 4 >> 0] | 64;
     break;
    }
   case 100:
    {
     l = c[t >> 2] | 0;
     c[t >> 2] = l + 16;
     j = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);
     e = c[j >> 2] | 0;
     c[f >> 2] = j + 4;
     h[l >> 3] = +(e | 0);
     c[l + 8 >> 2] = 3;
     break;
    }
   case 102:
    {
     l = c[t >> 2] | 0;
     c[t >> 2] = l + 16;
     e = (c[f >> 2] | 0) + (8 - 1) & ~(8 - 1);
     w = +h[e >> 3];
     c[f >> 2] = e + 8;
     h[l >> 3] = w;
     c[l + 8 >> 2] = 3;
     break;
    }
   case 112:
    {
     l = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);
     e = c[l >> 2] | 0;
     c[f >> 2] = l + 4;
     c[p >> 2] = e;
     e = ol(o, 4312, p) | 0;
     l = c[t >> 2] | 0;
     c[t >> 2] = l + 16;
     e = zb(b, o, e) | 0;
     c[l >> 2] = e;
     c[l + 8 >> 2] = d[e + 4 >> 0] | 64;
     break;
    }
   case 37:
    {
     l = c[t >> 2] | 0;
     c[t >> 2] = l + 16;
     e = zb(b, 4315, 1) | 0;
     c[l >> 2] = e;
     c[l + 8 >> 2] = d[e + 4 >> 0] | 64;
     break;
    }
   default:
    break b;
   }
   m = m + 2 | 0;
   e = k + 2 | 0;
   k = Ol(e, 37) | 0;
   j = c[t >> 2] | 0;
   l = (c[n >> 2] | 0) - j | 0;
   if (!k) {
    s = e;
    q = l;
    g = j;
    u = m;
    break a;
   }
  }
  c[r >> 2] = j;
  tb(b, 4317, r);
 } while (0);
 if ((q | 0) < 32) {
  vb(b, 1);
  g = c[t >> 2] | 0;
 }
 r = Jl(s) | 0;
 c[t >> 2] = g + 16;
 s = zb(b, s, r) | 0;
 c[g >> 2] = s;
 c[g + 8 >> 2] = d[s + 4 >> 0] | 64;
 if ((u | 0) <= 0) {
  u = c[t >> 2] | 0;
  u = u + -16 | 0;
  u = c[u >> 2] | 0;
  u = u + 16 | 0;
  i = v;
  return u | 0;
 }
 Ub(b, u | 1);
 u = c[t >> 2] | 0;
 u = u + -16 | 0;
 u = c[u >> 2] | 0;
 u = u + 16 | 0;
 i = v;
 return u | 0;
}

function ll(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, i = 0, j = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0.0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 m = c[k + 4 >> 2] | 0;
 h[k >> 3] = b;
 n = c[k >> 2] | 0;
 o = c[k + 4 >> 2] | 0;
 e = qn(d | 0, m | 0, 52) | 0;
 e = e & 2047;
 j = qn(n | 0, o | 0, 52) | 0;
 j = j & 2047;
 p = m & -2147483648;
 i = on(n | 0, o | 0, 1) | 0;
 l = C;
 a : do if ((i | 0) == 0 & (l | 0) == 0) q = 3; else {
  r = +E(+b);
  h[k >> 3] = r;
  g = c[k + 4 >> 2] | 0;
  if (g >>> 0 > 2146435072 | (g | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0 | (e | 0) == 2047) q = 3; else {
   f = on(d | 0, m | 0, 1) | 0;
   g = C;
   if (!(g >>> 0 > l >>> 0 | (g | 0) == (l | 0) & f >>> 0 > i >>> 0)) return +((f | 0) == (i | 0) & (g | 0) == (l | 0) ? a * 0.0 : a);
   if (!e) {
    e = on(d | 0, m | 0, 12) | 0;
    f = C;
    if ((f | 0) > -1 | (f | 0) == -1 & e >>> 0 > 4294967295) {
     g = e;
     e = 0;
     do {
      e = e + -1 | 0;
      g = on(g | 0, f | 0, 1) | 0;
      f = C;
     } while ((f | 0) > -1 | (f | 0) == -1 & g >>> 0 > 4294967295);
    } else e = 0;
    d = on(d | 0, m | 0, 1 - e | 0) | 0;
    f = C;
   } else f = m & 1048575 | 1048576;
   if (!j) {
    g = on(n | 0, o | 0, 12) | 0;
    i = C;
    if ((i | 0) > -1 | (i | 0) == -1 & g >>> 0 > 4294967295) {
     j = 0;
     do {
      j = j + -1 | 0;
      g = on(g | 0, i | 0, 1) | 0;
      i = C;
     } while ((i | 0) > -1 | (i | 0) == -1 & g >>> 0 > 4294967295);
    } else j = 0;
    n = on(n | 0, o | 0, 1 - j | 0) | 0;
    m = C;
   } else m = o & 1048575 | 1048576;
   l = ln(d | 0, f | 0, n | 0, m | 0) | 0;
   i = C;
   g = (i | 0) > -1 | (i | 0) == -1 & l >>> 0 > 4294967295;
   b : do if ((e | 0) > (j | 0)) {
    while (1) {
     if (g) if ((d | 0) == (n | 0) & (f | 0) == (m | 0)) break; else {
      d = l;
      f = i;
     }
     d = on(d | 0, f | 0, 1) | 0;
     f = C;
     e = e + -1 | 0;
     l = ln(d | 0, f | 0, n | 0, m | 0) | 0;
     i = C;
     g = (i | 0) > -1 | (i | 0) == -1 & l >>> 0 > 4294967295;
     if ((e | 0) <= (j | 0)) break b;
    }
    b = a * 0.0;
    break a;
   } while (0);
   if (g) if ((d | 0) == (n | 0) & (f | 0) == (m | 0)) {
    b = a * 0.0;
    break;
   } else {
    f = i;
    d = l;
   }
   if (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0) do {
    d = on(d | 0, f | 0, 1) | 0;
    f = C;
    e = e + -1 | 0;
   } while (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0);
   if ((e | 0) > 0) {
    o = mn(d | 0, f | 0, 0, -1048576) | 0;
    d = C;
    e = on(e | 0, 0, 52) | 0;
    d = d | C;
    e = o | e;
   } else {
    e = qn(d | 0, f | 0, 1 - e | 0) | 0;
    d = C;
   }
   c[k >> 2] = e;
   c[k + 4 >> 2] = d | p;
   b = +h[k >> 3];
  }
 } while (0);
 if ((q | 0) == 3) {
  b = a * b;
  b = b / b;
 }
 return +b;
}

function ph(f, g, h) {
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 if (!g) g = 1; else g = (e[g + 38 >> 1] | 0) + 1 & 65535;
 t = f + 38 | 0;
 b[t >> 1] = g;
 s = f + 36 | 0;
 b[s >> 1] = 0;
 r = f + 8 | 0;
 g = Mc(f, 6, (c[r >> 2] | 0) + (0 - h << 4) | 0) | 0;
 if ((g | 0) == -1) {
  u = 2;
  b[s >> 1] = 1;
  f = b[t >> 1] | 0;
  f = f + -1 << 16 >> 16;
  b[t >> 1] = f;
  return u | 0;
 }
 if (g >>> 0 <= 1) {
  u = g;
  b[s >> 1] = 1;
  f = b[t >> 1] | 0;
  f = f + -1 << 16 >> 16;
  b[t >> 1] = f;
  return u | 0;
 }
 p = f + 16 | 0;
 l = f + 28 | 0;
 m = f + 41 | 0;
 n = f + 68 | 0;
 o = f + 32 | 0;
 q = f + 12 | 0;
 a : while (1) {
  h = c[p >> 2] | 0;
  if (!h) break;
  while (1) {
   i = h + 18 | 0;
   if (a[i >> 0] & 16) break;
   h = c[h + 8 >> 2] | 0;
   if (!h) break a;
  }
  j = (c[l >> 2] | 0) + (c[h + 20 >> 2] | 0) | 0;
  Pb(f, j);
  switch (g | 0) {
  case 4:
   {
    k = c[(c[q >> 2] | 0) + 180 >> 2] | 0;
    c[j >> 2] = k;
    c[j + 8 >> 2] = d[k + 4 >> 0] | 0 | 64;
    break;
   }
  case 6:
   {
    k = zb(f, 5046, 23) | 0;
    c[j >> 2] = k;
    c[j + 8 >> 2] = d[k + 4 >> 0] | 0 | 64;
    break;
   }
  default:
   {
    k = c[r >> 2] | 0;
    x = k + -16 | 0;
    w = c[x + 4 >> 2] | 0;
    v = j;
    c[v >> 2] = c[x >> 2];
    c[v + 4 >> 2] = w;
    c[j + 8 >> 2] = c[k + -8 >> 2];
   }
  }
  j = j + 16 | 0;
  c[r >> 2] = j;
  c[p >> 2] = h;
  a[m >> 0] = a[h + 36 >> 0] | 0;
  b[s >> 1] = 0;
  k = h;
  do {
   x = c[k + 4 >> 2] | 0;
   j = j >>> 0 < x >>> 0 ? x : j;
   k = c[k + 8 >> 2] | 0;
  } while ((k | 0) != 0);
  x = j - (c[l >> 2] | 0) | 0;
  j = x >> 4;
  j = j + 11 + ((j + 1 | 0) / 8 | 0) | 0;
  j = (j | 0) > 1e6 ? 1e6 : j;
  if ((x | 0) <= 15999984) if ((j | 0) < (c[o >> 2] | 0)) xb(f, j);
  c[n >> 2] = c[h + 32 >> 2];
  a[i >> 0] = d[i >> 0] | 0 | 32;
  a[h + 37 >> 0] = g;
  g = Mc(f, 7, 0) | 0;
  if (g >>> 0 <= 1) {
   u = 24;
   break;
  }
 }
 if ((u | 0) == 24) {
  b[s >> 1] = 1;
  x = b[t >> 1] | 0;
  x = x + -1 << 16 >> 16;
  b[t >> 1] = x;
  return g | 0;
 }
 a[f + 6 >> 0] = g;
 h = c[r >> 2] | 0;
 switch (g | 0) {
 case 4:
  {
   x = c[(c[q >> 2] | 0) + 180 >> 2] | 0;
   c[h >> 2] = x;
   c[h + 8 >> 2] = d[x + 4 >> 0] | 0 | 64;
   break;
  }
 case 6:
  {
   x = zb(f, 5046, 23) | 0;
   c[h >> 2] = x;
   c[h + 8 >> 2] = d[x + 4 >> 0] | 0 | 64;
   break;
  }
 default:
  {
   v = h + -16 | 0;
   w = c[v + 4 >> 2] | 0;
   x = h;
   c[x >> 2] = c[v >> 2];
   c[x + 4 >> 2] = w;
   c[h + 8 >> 2] = c[h + -8 >> 2];
  }
 }
 x = h + 16 | 0;
 c[r >> 2] = x;
 c[(c[p >> 2] | 0) + 4 >> 2] = x;
 x = g;
 b[s >> 1] = 1;
 w = b[t >> 1] | 0;
 w = w + -1 << 16 >> 16;
 b[t >> 1] = w;
 return x | 0;
}

function Wi(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 288 | 0;
 j = r + 284 | 0;
 n = r + 280 | 0;
 o = r;
 q = tg(b, 1, j) | 0;
 h = tg(b, 2, n) | 0;
 e = Jd(b, 3, 1) | 0;
 f = c[j >> 2] | 0;
 if ((e | 0) > -1) p = 4; else if (f >>> 0 < (0 - e | 0) >>> 0) g = 1; else {
  e = e + 1 + f | 0;
  p = 4;
 }
 if ((p | 0) == 4) if (!e) g = 1; else if (e >>> 0 > (f + 1 | 0) >>> 0) {
  Ad(b);
  b = 1;
  i = r;
  return b | 0;
 } else g = e;
 m = (d | 0) != 0;
 a : do if (m) {
  l = (sd(b, 4) | 0) == 0;
  d = c[n >> 2] | 0;
  if (l) {
   f = 0;
   do {
    e = h + f | 0;
    if (Pl(e, 10310) | 0) {
     p = 19;
     break a;
    }
    f = f + 1 + (Jl(e) | 0) | 0;
   } while (f >>> 0 <= d >>> 0);
  }
  e = q + g + -1 | 0;
  f = (c[j >> 2] | 0) - g + 1 | 0;
  b : do if (d) {
   if (d >>> 0 > f >>> 0) break a;
   k = d + -1 | 0;
   if ((f | 0) == (k | 0)) break a;
   l = a[h >> 0] | 0;
   j = h + 1 | 0;
   h = f - k | 0;
   while (1) {
    f = zl(e, l, h) | 0;
    if (!f) break a;
    d = e;
    e = f + 1 | 0;
    if (!(Ml(e, j, k) | 0)) {
     e = f;
     break b;
    }
    g = e;
    f = d + h | 0;
    if ((f | 0) == (g | 0)) break a; else h = f - g | 0;
   }
  } while (0);
  q = e - q | 0;
  Kd(b, q + 1 | 0);
  Kd(b, q + (c[n >> 2] | 0) | 0);
  b = 2;
  i = r;
  return b | 0;
 } else p = 19; while (0);
 do if ((p | 0) == 19) {
  e = q + g + -1 | 0;
  d = (a[h >> 0] | 0) == 94;
  if (d) {
   f = (c[n >> 2] | 0) + -1 | 0;
   c[n >> 2] = f;
   k = h + 1 | 0;
  } else {
   f = c[n >> 2] | 0;
   k = h;
  }
  l = o + 16 | 0;
  c[l >> 2] = b;
  c[o >> 2] = 200;
  c[o + 4 >> 2] = q;
  h = o + 8 | 0;
  c[h >> 2] = q + (c[j >> 2] | 0);
  c[o + 12 >> 2] = k + f;
  j = o + 20 | 0;
  c[j >> 2] = 0;
  g = Xi(o, e, k) | 0;
  f = (g | 0) == 0;
  c : do if (d) if (f) p = 33; else d = e; else if (f) while (1) {
   if (e >>> 0 >= (c[h >> 2] | 0) >>> 0) {
    p = 33;
    break c;
   }
   e = e + 1 | 0;
   c[j >> 2] = 0;
   f = Xi(o, e, k) | 0;
   if (f) {
    g = f;
    d = e;
    break;
   }
  } else d = e; while (0);
  if ((p | 0) == 33) break;
  if (m) {
   f = q;
   Kd(b, 1 - f + d | 0);
   Kd(b, g - f | 0);
   f = c[j >> 2] | 0;
   Wf(c[l >> 2] | 0, f, 10341);
   if ((f | 0) > 0) {
    e = 0;
    do {
     Zi(o, e, 0, 0);
     e = e + 1 | 0;
    } while ((e | 0) != (f | 0));
   }
   e = f + 2 | 0;
  } else {
   e = c[j >> 2] | 0;
   e = (e | 0) == 0 ? 1 : e;
   Wf(c[l >> 2] | 0, e, 10341);
   if ((e | 0) > 0) {
    f = 0;
    do {
     Zi(o, f, d, g);
     f = f + 1 | 0;
    } while ((f | 0) != (e | 0));
   }
  }
  b = e;
  i = r;
  return b | 0;
 } while (0);
 Ad(b);
 b = 1;
 i = r;
 return b | 0;
}

function Kk(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 48 | 0;
 n = q + 32 | 0;
 p = q + 24 | 0;
 o = q + 16 | 0;
 m = q + 8 | 0;
 l = q;
 k = q + 40 | 0;
 j = q + 36 | 0;
 h = c[356] | 0;
 c[356] = 0;
 kd(a, 0);
 if (!(Lk(a, 1) | 0)) {
  kd(a, 0);
  p = c[749] | 0;
  xm(10, p) | 0;
  lm(p) | 0;
  c[356] = h;
  i = q;
  return;
 }
 g = c[720] | 0;
 a : while (1) {
  b = Tc(a, 1, j) | 0;
  b = Tf(a, b, c[j >> 2] | 0, 12281, 0) | 0;
  b : do if ((b | 0) == 3) {
   while (1) {
    b = Tc(a, -1, k) | 0;
    d = c[k >> 2] | 0;
    if (d >>> 0 <= 4) break;
    if (Ql(b + d + -5 | 0, 12288) | 0) break;
    kd(a, -2);
    if (!(Lk(a, 0) | 0)) {
     f = 8;
     break a;
    }
    ed(a, 12294, 1) | 0;
    Fd(a, -2);
    gd(a, 3);
    b = Tc(a, 1, j) | 0;
    b = Tf(a, b, c[j >> 2] | 0, 12281, 0) | 0;
    if ((b | 0) != 3) {
     f = 10;
     break b;
    }
   }
   Ed(a, 1);
   b = 3;
   f = 11;
  } else f = 10; while (0);
  c : do if ((f | 0) == 10) {
   Ed(a, 1);
   switch (b | 0) {
   case -1:
    {
     f = 24;
     break a;
    }
   case 0:
    break;
   default:
    {
     f = 11;
     break c;
    }
   }
   e = yd(a) | 0;
   Of(a, 144, 0);
   Fd(a, e);
   c[3786] = a;
   ea(2, 1) | 0;
   f = dg(a, 0, -1, e, 0, 0) | 0;
   ea(2, 0) | 0;
   Ed(a, e);
   if (!f) f = 18; else {
    e = 0;
    f = 13;
   }
  } while (0);
  if ((f | 0) == 11) {
   e = (b | 0) == 0;
   f = 13;
  }
  do if ((f | 0) == 13) {
   f = 0;
   if (!(ud(a, -1) | 0)) if (e) {
    f = 18;
    break;
   } else break;
   b = Tc(a, -1, 0) | 0;
   d = c[356] | 0;
   if (d | 0) {
    c[l >> 2] = d;
    em(g, 5396, l) | 0;
    lm(g) | 0;
   }
   c[m >> 2] = (b | 0) == 0 ? 12154 : b;
   em(g, 11968, m) | 0;
   lm(g) | 0;
   kd(a, -2);
   ld(a, 2, 0) | 0;
   if (e) f = 18;
  } while (0);
  if ((f | 0) == 18) if ((yd(a) | 0) > 0) {
   Wf(a, 20, 12296);
   gg(a, 12322);
   Fd(a, 1);
   if (dg(a, (yd(a) | 0) + -1 | 0, 0, 0, 0, 0) | 0) {
    b = c[356] | 0;
    c[o >> 2] = Tc(a, -1, 0) | 0;
    d = dd(a, 12328, o) | 0;
    if (b | 0) {
     c[p >> 2] = b;
     em(g, 5396, p) | 0;
     lm(g) | 0;
    }
    c[n >> 2] = d;
    em(g, 11968, n) | 0;
    lm(g) | 0;
   }
  }
  kd(a, 0);
  if (!(Lk(a, 1) | 0)) {
   f = 24;
   break;
  }
 }
 if ((f | 0) == 8) {
  kd(a, 0);
  p = c[749] | 0;
  xm(10, p) | 0;
  lm(p) | 0;
  c[356] = h;
  i = q;
  return;
 } else if ((f | 0) == 24) {
  kd(a, 0);
  p = c[749] | 0;
  xm(10, p) | 0;
  lm(p) | 0;
  c[356] = h;
  i = q;
  return;
 }
}

function me(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 48 | 0;
 f = r + 24 | 0;
 g = r;
 m = d + 48 | 0;
 p = c[m >> 2] | 0;
 de(d);
 ne(d, g, 0) | 0;
 q = d + 16 | 0;
 if ((c[q >> 2] | 0) != 275) Be(d, 275);
 de(d);
 a : do switch (c[q >> 2] | 0) {
 case 258:
 case 266:
  {
   jf(c[m >> 2] | 0, g);
   a[f + 10 >> 0] = 0;
   a[f + 8 >> 0] = a[p + 46 >> 0] | 0;
   h = c[(c[p + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[f + 4 >> 1] = c[h + 28 >> 2];
   b[f + 6 >> 1] = c[h + 16 >> 2];
   a[f + 9 >> 0] = 0;
   h = p + 16 | 0;
   c[f >> 2] = c[h >> 2];
   c[h >> 2] = f;
   h = c[g + 16 >> 2] | 0;
   j = c[d + 4 >> 2] | 0;
   l = (c[q >> 2] | 0) == 266;
   de(d);
   do if (l) if ((c[q >> 2] | 0) == 288) {
    n = c[d + 24 >> 2] | 0;
    de(d);
    break;
   } else Be(d, 288); else n = Oc(c[d + 52 >> 2] | 0, 7252) | 0; while (0);
   g = c[d + 64 >> 2] | 0;
   f = g + 12 | 0;
   k = g + 16 | 0;
   l = c[k >> 2] | 0;
   g = g + 20 | 0;
   if ((l | 0) < (c[g >> 2] | 0)) {
    f = c[f >> 2] | 0;
    g = l;
   } else {
    g = ce(c[d + 52 >> 2] | 0, c[f >> 2] | 0, g, 16, 32767, 7258) | 0;
    c[f >> 2] = g;
    f = g;
    g = c[k >> 2] | 0;
   }
   c[f + (l << 4) >> 2] = n;
   c[f + (l << 4) + 8 >> 2] = j;
   a[f + (l << 4) + 12 >> 0] = a[(c[m >> 2] | 0) + 46 >> 0] | 0;
   c[f + (l << 4) + 4 >> 2] = h;
   c[k >> 2] = g + 1;
   Ye(d, l) | 0;
   b : while (1) {
    switch (c[q >> 2] | 0) {
    case 286:
    case 262:
    case 261:
    case 260:
     break b;
    case 285:
    case 59:
     break;
    default:
     {
      o = 16;
      break b;
     }
    }
    le(d);
   }
   if ((o | 0) == 16) {
    f = Re(p) | 0;
    break a;
   }
   Qe(p);
   i = r;
   return;
  }
 default:
  {
   gf(c[m >> 2] | 0, g);
   a[f + 10 >> 0] = 0;
   a[f + 8 >> 0] = a[p + 46 >> 0] | 0;
   o = c[(c[p + 12 >> 2] | 0) + 64 >> 2] | 0;
   b[f + 4 >> 1] = c[o + 28 >> 2];
   b[f + 6 >> 1] = c[o + 16 >> 2];
   a[f + 9 >> 0] = 0;
   o = p + 16 | 0;
   c[f >> 2] = c[o >> 2];
   c[o >> 2] = f;
   f = c[g + 20 >> 2] | 0;
  }
 } while (0);
 c : do {
  g = c[q >> 2] | 0;
  switch (g | 0) {
  case 277:
  case 286:
  case 262:
  case 261:
  case 260:
   break c;
  default:
   {}
  }
  le(d);
 } while ((g | 0) != 274);
 Qe(p);
 if ((c[q >> 2] & -2 | 0) == 260) mf(p, e, Re(p) | 0);
 Te(p, f);
 i = r;
 return;
}

function Qg(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 u = i;
 i = i + 1072 | 0;
 o = u + 16 | 0;
 n = u + 8 | 0;
 m = u;
 t = u + 24 | 0;
 l = Jl(d) | 0;
 q = t + 12 | 0;
 c[q >> 2] = a;
 s = t + 16 | 0;
 c[t >> 2] = s;
 r = t + 8 | 0;
 c[r >> 2] = 0;
 p = t + 4 | 0;
 c[p >> 2] = 1024;
 j = Nl(b, d) | 0;
 if (!j) {
  k = b;
  b = 0;
  f = 1024;
  h = a;
 } else {
  g = b;
  b = 0;
  f = 1024;
  h = a;
  do {
   k = j - g | 0;
   if ((f - b | 0) >>> 0 < k >>> 0) {
    f = f << 1;
    f = (f - b | 0) >>> 0 < k >>> 0 ? b + k | 0 : f;
    if (f >>> 0 < b >>> 0 | (f - b | 0) >>> 0 < k >>> 0) ad(h, 8242, m) | 0;
    b = Rg(h, f) | 0;
    sn(b | 0, c[t >> 2] | 0, c[r >> 2] | 0) | 0;
    if ((c[t >> 2] | 0) != (s | 0)) Ed(h, -2);
    c[t >> 2] = b;
    c[p >> 2] = f;
    f = b;
    b = c[r >> 2] | 0;
   } else f = c[t >> 2] | 0;
   sn(f + b | 0, g | 0, k | 0) | 0;
   b = (c[r >> 2] | 0) + k | 0;
   c[r >> 2] = b;
   h = Jl(e) | 0;
   g = c[q >> 2] | 0;
   f = c[p >> 2] | 0;
   if ((f - b | 0) >>> 0 < h >>> 0) {
    f = f << 1;
    f = (f - b | 0) >>> 0 < h >>> 0 ? h + b | 0 : f;
    if (f >>> 0 < b >>> 0 | (f - b | 0) >>> 0 < h >>> 0) ad(g, 8242, n) | 0;
    b = Rg(g, f) | 0;
    sn(b | 0, c[t >> 2] | 0, c[r >> 2] | 0) | 0;
    if ((c[t >> 2] | 0) != (s | 0)) Ed(g, -2);
    c[t >> 2] = b;
    c[p >> 2] = f;
    f = b;
    b = c[r >> 2] | 0;
   } else f = c[t >> 2] | 0;
   sn(f + b | 0, e | 0, h | 0) | 0;
   b = (c[r >> 2] | 0) + h | 0;
   c[r >> 2] = b;
   g = j + l | 0;
   j = Nl(g, d) | 0;
   h = c[q >> 2] | 0;
   f = c[p >> 2] | 0;
  } while ((j | 0) != 0);
  k = g;
 }
 j = Jl(k) | 0;
 if ((f - b | 0) >>> 0 < j >>> 0) {
  g = f << 1;
  g = (g - b | 0) >>> 0 < j >>> 0 ? b + j | 0 : g;
  if (g >>> 0 < b >>> 0 | (g - b | 0) >>> 0 < j >>> 0) ad(h, 8242, o) | 0;
  f = Rg(h, g) | 0;
  sn(f | 0, c[t >> 2] | 0, c[r >> 2] | 0) | 0;
  if ((c[t >> 2] | 0) != (s | 0)) Ed(h, -2);
  c[t >> 2] = f;
  c[p >> 2] = g;
  b = c[r >> 2] | 0;
 } else f = c[t >> 2] | 0;
 sn(f + b | 0, k | 0, j | 0) | 0;
 p = (c[r >> 2] | 0) + j | 0;
 c[r >> 2] = p;
 b = c[q >> 2] | 0;
 ed(b, c[t >> 2] | 0, p) | 0;
 if ((c[t >> 2] | 0) == (s | 0)) {
  t = Tc(a, -1, 0) | 0;
  i = u;
  return t | 0;
 }
 Ed(b, -2);
 t = Tc(a, -1, 0) | 0;
 i = u;
 return t | 0;
}

function gn(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, i = 0, j = 0, l = 0, m = 0, n = 0.0;
 h[k >> 3] = b;
 g = c[k >> 2] | 0;
 d = c[k + 4 >> 2] | 0;
 n = +E(+b);
 h[k >> 3] = n;
 m = c[k + 4 >> 2] | 0;
 if (!(m >>> 0 > 2146435072 | (m | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0)) {
  h[k >> 3] = a;
  l = c[k >> 2] | 0;
  e = c[k + 4 >> 2] | 0;
  n = +E(+a);
  h[k >> 3] = n;
  m = c[k + 4 >> 2] | 0;
  if (!(m >>> 0 > 2146435072 | (m | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0)) {
   if (!(d + -1072693248 | g)) {
    n = +fn(a);
    return +n;
   }
   i = qn(l | 0, e | 0, 63) | 0;
   j = qn(g | 0, d | 0, 62) | 0;
   j = j & 2;
   m = j | i;
   f = d & 2147483647;
   d = e & 2147483647;
   if (!(d | l)) switch (m | 0) {
   case 2:
    {
     n = 3.141592653589793;
     return +n;
    }
   case 3:
    {
     n = -3.141592653589793;
     return +n;
    }
   case 1:
   case 0:
    {
     n = a;
     return +n;
    }
   default:
    {}
   }
   if (!(f | g)) {
    n = i | 0 ? -1.5707963267948966 : 1.5707963267948966;
    return +n;
   }
   if ((f | 0) != 2146435072) {
    if ((d | 0) == 2146435072 | (f + 67108864 | 0) >>> 0 < d >>> 0) {
     n = i | 0 ? -1.5707963267948966 : 1.5707963267948966;
     return +n;
    }
    if ((j | 0) != 0 & (d + 67108864 | 0) >>> 0 < f >>> 0) b = 0.0; else b = +fn(+E(+(a / b)));
    switch (m | 0) {
    case 1:
     {
      n = -b;
      return +n;
     }
    case 2:
     {
      n = 3.141592653589793 - (b + -1.2246467991473532e-16);
      return +n;
     }
    case 0:
     {
      n = b;
      return +n;
     }
    default:
     {
      n = b + -1.2246467991473532e-16 + -3.141592653589793;
      return +n;
     }
    }
   }
   if ((d | 0) == 2146435072) switch (m | 0) {
   case 1:
    {
     n = -.7853981633974483;
     return +n;
    }
   case 2:
    {
     n = 2.356194490192345;
     return +n;
    }
   case 3:
    {
     n = -2.356194490192345;
     return +n;
    }
   case 0:
    {
     n = .7853981633974483;
     return +n;
    }
   default:
    {}
   } else switch (m | 0) {
   case 1:
    {
     n = -0.0;
     return +n;
    }
   case 2:
    {
     n = 3.141592653589793;
     return +n;
    }
   case 3:
    {
     n = -3.141592653589793;
     return +n;
    }
   case 0:
    {
     n = 0.0;
     return +n;
    }
   default:
    {}
   }
  }
 }
 n = a + b;
 return +n;
}

function hf(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 switch (c[e >> 2] | 0) {
 case 11:
  {
   g = c[(c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (c[e + 8 >> 2] << 2) >> 2] | 0;
   if ((g & 63 | 0) == 20) {
    k = b + 20 | 0;
    c[k >> 2] = (c[k >> 2] | 0) + -1;
    re(b, ((f | 0) == 0 & 1) << 14 | g >>> 23 << 6 | 27) | 0;
    f = b + 28 | 0;
    k = c[f >> 2] | 0;
    c[f >> 2] = -1;
    f = re(b, 2147450903) | 0;
    if ((k | 0) == -1) {
     b = f;
     return b | 0;
    }
    if ((f | 0) == -1) {
     b = k;
     return b | 0;
    }
    j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
    g = f;
    while (1) {
     i = j + (g << 2) | 0;
     e = c[i >> 2] | 0;
     h = (e >>> 14) + -131071 | 0;
     h = (h | 0) == -1 ? -1 : g + 1 + h | 0;
     if ((h | 0) == -1) {
      h = e;
      break;
     } else g = h;
    }
    g = k + ~g | 0;
    if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) ae(c[b + 12 >> 2] | 0, 6980);
    c[i >> 2] = (g << 14) + 2147467264 | h & 16383;
    b = f;
    return b | 0;
   } else k = 10;
   break;
  }
 case 6:
  {
   k = 17;
   break;
  }
 default:
  k = 10;
 }
 if ((k | 0) == 10) {
  g = b + 48 | 0;
  h = (d[g >> 0] | 0) + 1 | 0;
  i = (c[b >> 2] | 0) + 78 | 0;
  do if (h >>> 0 > (d[i >> 0] | 0) >>> 0) if (h >>> 0 > 249) ae(c[b + 12 >> 2] | 0, 7025); else {
   j = h & 255;
   a[i >> 0] = j;
   break;
  } else j = h & 255; while (0);
  a[g >> 0] = j;
  te(b, e, (j & 255) + -1 | 0);
  if ((c[e >> 2] | 0) == 6) k = 17; else g = c[e + 8 >> 2] | 0;
 }
 if ((k | 0) == 17) {
  g = c[e + 8 >> 2] | 0;
  if (!(g & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (g | 0)) {
   k = b + 48 | 0;
   a[k >> 0] = (a[k >> 0] | 0) + -1 << 24 >> 24;
  }
 }
 re(b, f << 14 | g << 23 | 16348) | 0;
 f = b + 28 | 0;
 k = c[f >> 2] | 0;
 c[f >> 2] = -1;
 f = re(b, 2147450903) | 0;
 if ((k | 0) == -1) {
  b = f;
  return b | 0;
 }
 if ((f | 0) == -1) {
  b = k;
  return b | 0;
 }
 j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 g = f;
 while (1) {
  i = j + (g << 2) | 0;
  e = c[i >> 2] | 0;
  h = (e >>> 14) + -131071 | 0;
  h = (h | 0) == -1 ? -1 : g + 1 + h | 0;
  if ((h | 0) == -1) {
   h = e;
   break;
  } else g = h;
 }
 g = k + ~g | 0;
 if ((((g | 0) > -1 ? g : 0 - g | 0) | 0) > 131071) ae(c[b + 12 >> 2] | 0, 6980);
 c[i >> 2] = (g << 14) + 2147467264 | h & 16383;
 b = f;
 return b | 0;
}

function Cd(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0.0;
 q = i;
 i = i + 16 | 0;
 m = q + 8 | 0;
 f = q;
 p = e + 8 | 0;
 switch (c[p >> 2] | 0) {
 case 0:
  {
   n = c[b + 28 >> 2] | 0;
   g = -1;
   break;
  }
 case 3:
  {
   r = +h[e >> 3];
   h[f >> 3] = r + 6755399441055744.0;
   f = c[f >> 2] | 0;
   if ((f | 0) > 0 & +(f | 0) == r) {
    j = c[b + 28 >> 2] | 0;
    if ((f | 0) > (j | 0)) o = 6; else {
     n = j;
     g = f + -1 | 0;
    }
   } else o = 6;
   break;
  }
 default:
  o = 6;
 }
 do if ((o | 0) == 6) {
  f = kc(b, e) | 0;
  while (1) {
   l = f + 16 | 0;
   k = f + 24 | 0;
   j = c[k >> 2] | 0;
   if ((j | 0) == (c[p >> 2] | 0)) {
    if (lc(0, l, e) | 0) {
     o = 13;
     break;
    }
    j = c[k >> 2] | 0;
   }
   if ((j | 0) == 11) if (c[p >> 2] & 64 | 0) if ((c[l >> 2] | 0) == (c[e >> 2] | 0)) {
    o = 13;
    break;
   }
   f = c[f + 28 >> 2] | 0;
   if (!f) {
    o = 16;
    break;
   }
  }
  if ((o | 0) == 13) {
   g = c[b + 28 >> 2] | 0;
   n = g;
   g = (f - (c[b + 16 >> 2] | 0) >> 5) + g | 0;
   break;
  } else if ((o | 0) == 16) tb(a, 6198, m);
 } while (0);
 l = b + 12 | 0;
 while (1) {
  f = g + 1 | 0;
  if ((f | 0) >= (n | 0)) break;
  k = c[l >> 2] | 0;
  j = k + (f << 4) + 8 | 0;
  if (!(c[j >> 2] | 0)) g = f; else {
   o = 19;
   break;
  }
 }
 if ((o | 0) == 19) {
  h[e >> 3] = +(g + 2 | 0);
  c[p >> 2] = 3;
  b = k + (f << 4) | 0;
  o = c[b + 4 >> 2] | 0;
  p = e + 16 | 0;
  c[p >> 2] = c[b >> 2];
  c[p + 4 >> 2] = o;
  c[e + 24 >> 2] = c[j >> 2];
  e = 1;
  i = q;
  return e | 0;
 }
 f = f - n | 0;
 g = 1 << (d[b + 7 >> 0] | 0);
 if ((f | 0) >= (g | 0)) {
  e = 0;
  i = q;
  return e | 0;
 }
 j = b + 16 | 0;
 k = c[j >> 2] | 0;
 while (1) {
  if (c[k + (f << 5) + 8 >> 2] | 0) break;
  f = f + 1 | 0;
  if ((f | 0) >= (g | 0)) {
   f = 0;
   o = 25;
   break;
  }
 }
 if ((o | 0) == 25) {
  i = q;
  return f | 0;
 }
 o = k + (f << 5) + 16 | 0;
 b = c[o + 4 >> 2] | 0;
 n = e;
 c[n >> 2] = c[o >> 2];
 c[n + 4 >> 2] = b;
 c[p >> 2] = c[k + (f << 5) + 24 >> 2];
 p = c[j >> 2] | 0;
 n = p + (f << 5) | 0;
 b = c[n + 4 >> 2] | 0;
 o = e + 16 | 0;
 c[o >> 2] = c[n >> 2];
 c[o + 4 >> 2] = b;
 c[e + 24 >> 2] = c[p + (f << 5) + 8 >> 2];
 e = 1;
 i = q;
 return e | 0;
}

function nc(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 16 | 0;
 n = r;
 m = b + 12 | 0;
 h = e;
 e = c[e + 8 >> 2] | 0;
 l = 0;
 while (1) {
  if ((e | 0) == 69) {
   j = c[h >> 2] | 0;
   k = jc(j, f) | 0;
   if (c[k + 8 >> 2] | 0) {
    p = j;
    o = k;
    break;
   }
   e = c[j + 8 >> 2] | 0;
   if (!e) {
    e = j;
    h = k;
    q = 9;
    break;
   }
   if (a[e + 6 >> 0] & 2) {
    e = j;
    h = k;
    q = 9;
    break;
   }
   e = Gb(e, 1, c[(c[m >> 2] | 0) + 188 >> 2] | 0) | 0;
   if (!e) {
    e = j;
    h = k;
    q = 9;
    break;
   }
   j = c[e + 8 >> 2] | 0;
  } else {
   e = pb(b, h, 1) | 0;
   j = c[e + 8 >> 2] | 0;
   if (!j) {
    q = 16;
    break;
   }
  }
  l = l + 1 | 0;
  if ((j & 15 | 0) == 6) {
   q = 18;
   break;
  }
  if ((l | 0) >= 100) {
   q = 19;
   break;
  } else {
   h = e;
   e = j;
  }
 }
 if ((q | 0) == 9) if ((h | 0) == 15088) {
  p = e;
  o = oc(b, e, f) | 0;
 } else {
  p = e;
  o = h;
 } else if ((q | 0) == 16) Wb(b, h, 4498); else if ((q | 0) == 18) {
  q = b + 8 | 0;
  n = c[q >> 2] | 0;
  c[q >> 2] = n + 16;
  m = e;
  p = c[m + 4 >> 2] | 0;
  o = n;
  c[o >> 2] = c[m >> 2];
  c[o + 4 >> 2] = p;
  c[n + 8 >> 2] = c[e + 8 >> 2];
  n = c[q >> 2] | 0;
  c[q >> 2] = n + 16;
  o = h;
  p = c[o + 4 >> 2] | 0;
  m = n;
  c[m >> 2] = c[o >> 2];
  c[m + 4 >> 2] = p;
  c[n + 8 >> 2] = c[h + 8 >> 2];
  n = c[q >> 2] | 0;
  c[q >> 2] = n + 16;
  m = f;
  p = c[m + 4 >> 2] | 0;
  o = n;
  c[o >> 2] = c[m >> 2];
  c[o + 4 >> 2] = p;
  c[n + 8 >> 2] = c[f + 8 >> 2];
  f = c[q >> 2] | 0;
  c[q >> 2] = f + 16;
  n = g;
  o = c[n + 4 >> 2] | 0;
  p = f;
  c[p >> 2] = c[n >> 2];
  c[p + 4 >> 2] = o;
  c[f + 8 >> 2] = c[g + 8 >> 2];
  sb(b, (c[q >> 2] | 0) + -64 | 0, 0, (d[(c[b + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
  i = r;
  return;
 } else if ((q | 0) == 19) tb(b, 4830, n);
 n = g;
 f = c[n + 4 >> 2] | 0;
 q = o;
 c[q >> 2] = c[n >> 2];
 c[q + 4 >> 2] = f;
 q = g + 8 | 0;
 c[o + 8 >> 2] = c[q >> 2];
 a[p + 6 >> 0] = 0;
 if (!(c[q >> 2] & 64)) {
  i = r;
  return;
 }
 if (!(a[(c[g >> 2] | 0) + 5 >> 0] & 3)) {
  i = r;
  return;
 }
 if (!(a[p + 5 >> 0] & 4)) {
  i = r;
  return;
 }
 rc(b, p);
 i = r;
 return;
}

function om(a) {
 a = +a;
 var b = 0, d = 0, e = 0.0, f = 0.0, g = 0.0, i = 0, j = 0, l = 0.0;
 h[k >> 3] = a;
 d = c[k + 4 >> 2] | 0;
 b = d & 2147483647;
 d = qn(c[k >> 2] | 0, d | 0, 63) | 0;
 do if (b >>> 0 > 1078159481) {
  g = +E(+a);
  h[k >> 3] = g;
  i = c[k + 4 >> 2] | 0;
  if (!(i >>> 0 > 2146435072 | (i | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0)) if (!d) if (a > 709.782712893384) a = a * 8988465674311579538646525.0e283; else j = 11; else a = -1.0;
 } else {
  if (b >>> 0 <= 1071001154) if (b >>> 0 < 1016070144) break; else {
   g = 0.0;
   i = 0;
   j = 14;
   break;
  }
  if (b >>> 0 < 1072734898) if (!d) {
   e = a + -.6931471803691238;
   b = 1;
   f = 1.9082149292705877e-10;
   j = 12;
   break;
  } else {
   e = a + .6931471803691238;
   b = -1;
   f = -1.9082149292705877e-10;
   j = 12;
   break;
  } else j = 11;
 } while (0);
 if ((j | 0) == 11) {
  b = ~~(a * 1.4426950408889634 + (d | 0 ? -.5 : .5));
  f = +(b | 0);
  e = a - f * .6931471803691238;
  f = f * 1.9082149292705877e-10;
  j = 12;
 }
 if ((j | 0) == 12) {
  g = e - f;
  a = g;
  g = e - g - f;
  i = b;
  j = 14;
 }
 a : do if ((j | 0) == 14) {
  f = a * .5;
  e = a * f;
  l = e * (e * (e * (e * (4.008217827329362e-06 - e * 2.0109921818362437e-07) + -7.93650757867488e-05) + 1.5873015872548146e-03) + -.03333333333333313) + 1.0;
  f = 3.0 - f * l;
  f = e * ((l - f) / (6.0 - a * f));
  if (!i) {
   a = a - (a * f - e);
   break;
  }
  e = a * (f - g) - g - e;
  switch (i | 0) {
  case -1:
   {
    a = (a - e) * .5 + -.5;
    break a;
   }
  case 1:
   if (a < -.25) {
    a = (e - (a + .5)) * -2.0;
    break a;
   } else {
    a = (a - e) * 2.0 + 1.0;
    break a;
   }
  default:
   {
    d = on(i + 1023 | 0, 0, 52) | 0;
    j = C;
    c[k >> 2] = d;
    c[k + 4 >> 2] = j;
    f = +h[k >> 3];
    if (i >>> 0 > 56) {
     a = a - e + 1.0;
     a = ((i | 0) == 1024 ? a * 2.0 * 8988465674311579538646525.0e283 : f * a) + -1.0;
     break a;
    }
    b = on(1023 - i | 0, 0, 52) | 0;
    d = C;
    if ((i | 0) < 20) {
     c[k >> 2] = b;
     c[k + 4 >> 2] = d;
     a = 1.0 - +h[k >> 3] + (a - e);
    } else {
     c[k >> 2] = b;
     c[k + 4 >> 2] = d;
     a = a - (+h[k >> 3] + e) + 1.0;
    }
    a = f * a;
    break a;
   }
  }
 } while (0);
 return +a;
}

function re(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 p = c[b >> 2] | 0;
 k = b + 28 | 0;
 e = c[k >> 2] | 0;
 q = b + 20 | 0;
 l = c[q >> 2] | 0;
 do if ((e | 0) == -1) o = l; else {
  m = c[p + 12 >> 2] | 0;
  while (1) {
   j = m + (e << 2) | 0;
   i = c[j >> 2] | 0;
   g = (i >>> 14) + -131071 | 0;
   h = e;
   e = (g | 0) == -1 ? -1 : e + 1 + g | 0;
   if ((h | 0) > 0) {
    f = j + -4 | 0;
    g = c[f >> 2] | 0;
    if ((a[3916 + (g & 63) >> 0] | 0) >= 0) n = 5;
   } else n = 5;
   if ((n | 0) == 5) {
    n = 0;
    f = j;
    g = i;
   }
   if ((g & 63 | 0) == 28) {
    c[f >> 2] = g & 8372224 | g >>> 23 << 6 | 27;
    f = l + ~h | 0;
    if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
     n = 8;
     break;
    }
    f = c[j >> 2] & 16383 | (f << 14) + 2147467264;
   } else {
    f = l + ~h | 0;
    if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
     n = 11;
     break;
    }
    f = (f << 14) + 2147467264 | i & 16383;
   }
   c[j >> 2] = f;
   if ((e | 0) == -1) {
    n = 14;
    break;
   }
  }
  if ((n | 0) == 8) ae(c[b + 12 >> 2] | 0, 6980); else if ((n | 0) == 11) ae(c[b + 12 >> 2] | 0, 6980); else if ((n | 0) == 14) {
   o = c[q >> 2] | 0;
   break;
  }
 } while (0);
 c[k >> 2] = -1;
 e = p + 48 | 0;
 if ((o | 0) < (c[e >> 2] | 0)) {
  f = c[p + 12 >> 2] | 0;
  e = o;
 } else {
  o = p + 12 | 0;
  f = ce(c[(c[b + 12 >> 2] | 0) + 52 >> 2] | 0, c[o >> 2] | 0, e, 4, 2147483645, 7007) | 0;
  c[o >> 2] = f;
  e = c[q >> 2] | 0;
 }
 c[f + (e << 2) >> 2] = d;
 f = c[q >> 2] | 0;
 g = p + 52 | 0;
 e = b + 12 | 0;
 if ((f | 0) < (c[g >> 2] | 0)) {
  d = p + 20 | 0;
  p = f;
  b = c[e >> 2] | 0;
  b = b + 8 | 0;
  b = c[b >> 2] | 0;
  d = c[d >> 2] | 0;
  p = d + (p << 2) | 0;
  c[p >> 2] = b;
  p = c[q >> 2] | 0;
  b = p + 1 | 0;
  c[q >> 2] = b;
  return p | 0;
 } else {
  d = p + 20 | 0;
  c[d >> 2] = ce(c[(c[e >> 2] | 0) + 52 >> 2] | 0, c[d >> 2] | 0, g, 4, 2147483645, 7007) | 0;
  p = c[q >> 2] | 0;
  b = c[e >> 2] | 0;
  b = b + 8 | 0;
  b = c[b >> 2] | 0;
  d = c[d >> 2] | 0;
  p = d + (p << 2) | 0;
  c[p >> 2] = b;
  p = c[q >> 2] | 0;
  b = p + 1 | 0;
  c[q >> 2] = b;
  return p | 0;
 }
 return 0;
}

function qf(e, f, g, h, j) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 u = i;
 i = i + 32 | 0;
 r = u + 12 | 0;
 m = u;
 o = e + 48 | 0;
 s = c[o >> 2] | 0;
 l = s + 46 | 0;
 t = (d[l >> 0] | 0) + 3 | 0;
 a[l >> 0] = t;
 n = c[s + 20 >> 2] | 0;
 k = s + 12 | 0;
 p = c[(c[s >> 2] | 0) + 24 >> 2] | 0;
 q = c[c[(c[k >> 2] | 0) + 64 >> 2] >> 2] | 0;
 t = (c[s + 40 >> 2] | 0) + (t & 255) | 0;
 c[p + ((b[q + (t + -3 << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = n;
 c[p + ((b[q + (t + -2 << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = n;
 c[p + ((b[q + (t + -1 << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = n;
 t = e + 16 | 0;
 if ((c[t >> 2] | 0) != 259) Be(e, 259);
 de(e);
 p = (j | 0) != 0;
 if (p) q = Ne(s, 33, f, 131070) | 0; else q = Re(s) | 0;
 a[m + 10 >> 0] = 0;
 a[m + 8 >> 0] = a[l >> 0] | 0;
 k = c[(c[k >> 2] | 0) + 64 >> 2] | 0;
 b[m + 4 >> 1] = c[k + 28 >> 2];
 b[m + 6 >> 1] = c[k + 16 >> 2];
 a[m + 9 >> 0] = 0;
 k = s + 16 | 0;
 c[m >> 2] = c[k >> 2];
 c[k >> 2] = m;
 k = c[o >> 2] | 0;
 n = k + 46 | 0;
 j = (d[n >> 0] | 0) + h | 0;
 a[n >> 0] = j;
 if (h | 0) {
  n = c[k + 20 >> 2] | 0;
  l = c[(c[k >> 2] | 0) + 24 >> 2] | 0;
  m = c[c[(c[k + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0;
  k = (c[k + 40 >> 2] | 0) + (j & 255) | 0;
  j = h;
  do {
   c[l + ((b[m + (k - j << 1) >> 1] | 0) * 12 | 0) + 4 >> 2] = n;
   j = j + -1 | 0;
  } while ((j | 0) != 0);
 }
 Me(s, h);
 k = c[o >> 2] | 0;
 a[r + 10 >> 0] = 0;
 a[r + 8 >> 0] = a[k + 46 >> 0] | 0;
 o = c[(c[k + 12 >> 2] | 0) + 64 >> 2] | 0;
 b[r + 4 >> 1] = c[o + 28 >> 2];
 b[r + 6 >> 1] = c[o + 16 >> 2];
 a[r + 9 >> 0] = 0;
 o = k + 16 | 0;
 c[r >> 2] = c[o >> 2];
 c[o >> 2] = r;
 a : do {
  j = c[t >> 2] | 0;
  switch (j | 0) {
  case 277:
  case 286:
  case 262:
  case 261:
  case 260:
   break a;
  default:
   {}
  }
  le(e);
 } while ((j | 0) != 274);
 Qe(k);
 Qe(s);
 Te(s, q);
 if (p) {
  e = Ne(s, 32, f, 131070) | 0;
  h = q + 1 | 0;
  Xe(s, e, h);
  ef(s, g);
  i = u;
  return;
 } else {
  ye(s, 34, f, 0, h) | 0;
  ef(s, g);
  e = Ne(s, 35, f + 2 | 0, 131070) | 0;
  h = q + 1 | 0;
  Xe(s, e, h);
  ef(s, g);
  i = u;
  return;
 }
}

function te(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0.0;
 m = i;
 i = i + 32 | 0;
 g = m + 16 | 0;
 j = m;
 qe(a, b);
 f = c[b >> 2] | 0;
 a : do switch (f | 0) {
 case 1:
  {
   l = e + 1 | 0;
   f = c[a + 20 >> 2] | 0;
   do if ((f | 0) > (c[a + 24 >> 2] | 0)) {
    f = (c[(c[a >> 2] | 0) + 12 >> 2] | 0) + (f + -1 << 2) | 0;
    g = c[f >> 2] | 0;
    if ((g & 63 | 0) == 4) {
     j = g >>> 6 & 255;
     k = j + (g >>> 23) | 0;
     if ((j | 0) > (e | 0) | (k + 1 | 0) < (e | 0)) if ((j | 0) < (e | 0) | (j | 0) > (l | 0)) break;
     a = (j | 0) < (e | 0) ? j : e;
     c[f >> 2] = a << 6 & 16320 | g & 8372287 | ((k | 0) <= (e | 0) ? e : k) - a << 23;
     break a;
    }
   } while (0);
   re(a, e << 6 | 4) | 0;
   break;
  }
 case 2:
 case 3:
  {
   re(a, e << 6 | ((f | 0) == 2 & 1) << 23 | 3) | 0;
   break;
  }
 case 4:
  {
   f = c[b + 8 >> 2] | 0;
   g = e << 6;
   if ((f | 0) < 262144) {
    re(a, g | f << 14 | 1) | 0;
    break a;
   } else {
    re(a, g | 2) | 0;
    re(a, f << 6 | 39) | 0;
    break a;
   }
  }
 case 5:
  {
   n = +h[b + 8 >> 3];
   h[g >> 3] = n;
   f = c[(c[a + 12 >> 2] | 0) + 52 >> 2] | 0;
   h[j >> 3] = n;
   c[j + 8 >> 2] = 3;
   if (n != n | 0.0 != 0.0 | n == 0.0) {
    l = f + 8 | 0;
    k = c[l >> 2] | 0;
    c[l >> 2] = k + 16;
    g = zb(f, g, 8) | 0;
    c[k >> 2] = g;
    c[k + 8 >> 2] = d[g + 4 >> 0] | 0 | 64;
    g = ue(a, (c[l >> 2] | 0) + -16 | 0, j) | 0;
    c[l >> 2] = (c[l >> 2] | 0) + -16;
   } else g = ue(a, j, j) | 0;
   f = e << 6;
   if ((g | 0) < 262144) {
    re(a, f | g << 14 | 1) | 0;
    break a;
   } else {
    re(a, f | 2) | 0;
    re(a, g << 6 | 39) | 0;
    break a;
   }
  }
 case 11:
  {
   a = (c[(c[a >> 2] | 0) + 12 >> 2] | 0) + (c[b + 8 >> 2] << 2) | 0;
   c[a >> 2] = c[a >> 2] & -16321 | e << 6 & 16320;
   break;
  }
 case 6:
  {
   f = c[b + 8 >> 2] | 0;
   if ((f | 0) != (e | 0)) re(a, f << 23 | e << 6) | 0;
   break;
  }
 default:
  {
   i = m;
   return;
  }
 } while (0);
 c[b + 8 >> 2] = e;
 c[b >> 2] = 6;
 i = m;
 return;
}

function ic(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 p = i;
 i = i + 16 | 0;
 o = p;
 n = b + 12 | 0;
 h = e;
 e = c[e + 8 >> 2] | 0;
 m = 0;
 while (1) {
  if ((e | 0) == 69) {
   j = c[h >> 2] | 0;
   e = jc(j, f) | 0;
   l = e + 8 | 0;
   if (c[l >> 2] | 0) {
    h = l;
    j = 9;
    break;
   }
   j = c[j + 8 >> 2] | 0;
   if (!j) {
    h = l;
    j = 9;
    break;
   }
   if (a[j + 6 >> 0] & 1) {
    h = l;
    j = 9;
    break;
   }
   k = Gb(j, 0, c[(c[n >> 2] | 0) + 184 >> 2] | 0) | 0;
   if (!k) {
    h = l;
    j = 9;
    break;
   }
   j = c[k + 8 >> 2] | 0;
   e = k;
  } else {
   e = pb(b, h, 0) | 0;
   j = c[e + 8 >> 2] | 0;
   if (!j) {
    j = 11;
    break;
   }
  }
  m = m + 1 | 0;
  if ((j & 15 | 0) == 6) {
   j = 13;
   break;
  }
  if ((m | 0) >= 100) {
   j = 14;
   break;
  } else {
   h = e;
   e = j;
  }
 }
 if ((j | 0) == 9) {
  o = e;
  f = c[o + 4 >> 2] | 0;
  b = g;
  c[b >> 2] = c[o >> 2];
  c[b + 4 >> 2] = f;
  c[g + 8 >> 2] = c[h >> 2];
  i = p;
  return;
 } else if ((j | 0) == 11) Wb(b, h, 4498); else if ((j | 0) == 13) {
  m = b + 28 | 0;
  n = c[m >> 2] | 0;
  o = b + 8 | 0;
  l = c[o >> 2] | 0;
  c[o >> 2] = l + 16;
  q = e;
  j = c[q + 4 >> 2] | 0;
  k = l;
  c[k >> 2] = c[q >> 2];
  c[k + 4 >> 2] = j;
  c[l + 8 >> 2] = c[e + 8 >> 2];
  l = c[o >> 2] | 0;
  c[o >> 2] = l + 16;
  k = h;
  j = c[k + 4 >> 2] | 0;
  e = l;
  c[e >> 2] = c[k >> 2];
  c[e + 4 >> 2] = j;
  c[l + 8 >> 2] = c[h + 8 >> 2];
  l = c[o >> 2] | 0;
  c[o >> 2] = l + 16;
  e = f;
  j = c[e + 4 >> 2] | 0;
  k = l;
  c[k >> 2] = c[e >> 2];
  c[k + 4 >> 2] = j;
  c[l + 8 >> 2] = c[f + 8 >> 2];
  sb(b, (c[o >> 2] | 0) + -48 | 0, 1, (d[(c[b + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
  g = (c[m >> 2] | 0) + (g - n) | 0;
  b = c[o >> 2] | 0;
  n = b + -16 | 0;
  c[o >> 2] = n;
  o = c[n + 4 >> 2] | 0;
  f = g;
  c[f >> 2] = c[n >> 2];
  c[f + 4 >> 2] = o;
  c[g + 8 >> 2] = c[b + -8 >> 2];
  i = p;
  return;
 } else if ((j | 0) == 14) tb(b, 4504, o);
}

function Zd(d, e, f, g, h, j) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 q = i;
 i = i + 176 | 0;
 k = q + 156 | 0;
 m = q + 80 | 0;
 o = q;
 l = q + 104 | 0;
 n = Ic(d, 1) | 0;
 s = d + 8 | 0;
 r = c[s >> 2] | 0;
 c[r >> 2] = n;
 c[r + 8 >> 2] = 70;
 r = (c[s >> 2] | 0) + 16 | 0;
 c[s >> 2] = r;
 if (((c[d + 24 >> 2] | 0) - r | 0) < 16) vb(d, 0);
 r = Xd(d) | 0;
 c[n + 12 >> 2] = r;
 c[l >> 2] = r;
 t = Oc(d, h) | 0;
 s = r + 36 | 0;
 c[s >> 2] = t;
 c[o + 60 >> 2] = f;
 h = o + 64 | 0;
 c[h >> 2] = g;
 c[g + 28 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 c[g + 4 >> 2] = 0;
 _d(d, o, e, t, j);
 d = c[o + 52 >> 2] | 0;
 g = o + 48 | 0;
 c[l + 8 >> 2] = c[g >> 2];
 f = l + 12 | 0;
 c[f >> 2] = o;
 c[g >> 2] = l;
 c[l + 20 >> 2] = 0;
 c[l + 24 >> 2] = 0;
 c[l + 28 >> 2] = -1;
 c[l + 32 >> 2] = 0;
 c[l + 36 >> 2] = 0;
 g = l + 44 | 0;
 c[g >> 2] = 0;
 a[g + 4 >> 0] = 0;
 c[l + 40 >> 2] = c[(c[h >> 2] | 0) + 4 >> 2];
 g = l + 16 | 0;
 c[g >> 2] = 0;
 c[s >> 2] = c[o + 68 >> 2];
 a[r + 78 >> 0] = 2;
 e = tc(d) | 0;
 c[l + 4 >> 2] = e;
 r = d + 8 | 0;
 s = c[r >> 2] | 0;
 c[s >> 2] = e;
 c[s + 8 >> 2] = 69;
 s = (c[r >> 2] | 0) + 16 | 0;
 c[r >> 2] = s;
 if (((c[d + 24 >> 2] | 0) - s | 0) < 16) vb(d, 0);
 a[k + 10 >> 0] = 0;
 a[k + 8 >> 0] = a[l + 46 >> 0] | 0;
 f = c[(c[f >> 2] | 0) + 64 >> 2] | 0;
 b[k + 4 >> 1] = c[f + 28 >> 2];
 b[k + 6 >> 1] = c[f + 16 >> 2];
 a[k + 9 >> 0] = 0;
 c[k >> 2] = c[g >> 2];
 c[g >> 2] = k;
 a[(c[l >> 2] | 0) + 77 >> 0] = 1;
 c[m + 16 >> 2] = -1;
 c[m + 20 >> 2] = -1;
 c[m >> 2] = 7;
 c[m + 8 >> 2] = 0;
 $d(l, c[o + 72 >> 2] | 0, m) | 0;
 de(o);
 f = o + 16 | 0;
 a : while (1) {
  d = c[f >> 2] | 0;
  switch (d | 0) {
  case 277:
  case 286:
  case 262:
  case 261:
  case 260:
   break a;
  default:
   {}
  }
  le(o);
  if ((d | 0) == 274) {
   p = 8;
   break;
  }
 }
 if ((p | 0) == 8) d = c[f >> 2] | 0;
 if ((d | 0) == 286) {
  Oe(o);
  i = q;
  return n | 0;
 } else Be(o, 286);
 return 0;
}

function Zh(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 p = i;
 i = i + 1056 | 0;
 n = p + 1040 | 0;
 m = p;
 f = yd(b) | 0;
 Dm(d);
 a : do if ((f | 0) == 1) {
  f = e + 1 | 0;
  g = _h(b, d, 1) | 0;
 } else {
  Wf(b, f + 19 | 0, 9639);
  k = m + 8 | 0;
  l = m + 8 | 0;
  j = f + -2 | 0;
  f = e;
  b : while (1) {
   c : do if ((ud(b, f) | 0) == 3) {
    g = Xc(b, f, 0) | 0;
    if (!g) {
     g = Hm(d) | 0;
     Km(g, d) | 0;
     ed(b, 0, 0) | 0;
     g = (g | 0) != -1 & 1;
     break;
    } else {
     Pg(b, m);
     g = Bm($h(m, g) | 0, 1, g, d) | 0;
     c[k >> 2] = (c[k >> 2] | 0) + g;
     Ug(m);
     g = (g | 0) != 0 & 1;
     break;
    }
   } else {
    g = Tc(b, f, 0) | 0;
    if (!g) o = 10; else if ((a[g >> 0] | 0) != 42) o = 10;
    if ((o | 0) == 10) {
     o = 0;
     wd(b, f, 11533) | 0;
    }
    switch (a[g + 1 >> 0] | 0) {
    case 110:
     {
      c[n >> 2] = m;
      if ((tm(d, 9658, n) | 0) == 1) {
       id(b, +h[m >> 3]);
       g = 1;
      } else {
       Ad(b);
       g = 0;
      }
      break c;
     }
    case 108:
     {
      g = _h(b, d, 1) | 0;
      break c;
     }
    case 76:
     {
      g = _h(b, d, 0) | 0;
      break c;
     }
    case 97:
     {
      Pg(b, m);
      g = Bm($h(m, 1024) | 0, 1, 1024, d) | 0;
      c[l >> 2] = (c[l >> 2] | 0) + g;
      if (g >>> 0 >= 1024) {
       g = 1024;
       do {
        g = g << (g >>> 0 < 1073741824 & 1);
        q = Bm($h(m, g) | 0, 1, g, d) | 0;
        c[l >> 2] = (c[l >> 2] | 0) + q;
       } while (q >>> 0 >= g >>> 0);
      }
      Ug(m);
      g = 1;
      break c;
     }
    default:
     break b;
    }
   } while (0);
   f = f + 1 | 0;
   if ((g | 0) != 0 & (j | 0) != 0) j = j + -1 | 0; else break a;
  }
  q = wd(b, f, 9662) | 0;
  i = p;
  return q | 0;
 } while (0);
 if (sm(d) | 0) {
  q = Rh(b, 0, 0) | 0;
  i = p;
  return q | 0;
 }
 if (!g) {
  kd(b, -2);
  Ad(b);
 }
 q = f - e | 0;
 i = p;
 return q | 0;
}

function Cc(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 j = b + 8 | 0;
 f = c[j >> 2] | 0;
 if ((f | 0) == 3) {
  if ((c[e + 8 >> 2] | 0) == 3) {
   e = +h[b >> 3] < +h[e >> 3] & 1;
   return e | 0;
  }
 } else if ((f & 15 | 0) == 4) if ((c[e + 8 >> 2] & 15 | 0) == 4) {
  i = c[b >> 2] | 0;
  j = c[e >> 2] | 0;
  g = i + 16 | 0;
  a = j + 16 | 0;
  f = bm(g, a) | 0;
  a : do if (!f) {
   b = c[i + 12 >> 2] | 0;
   j = c[j + 12 >> 2] | 0;
   while (1) {
    i = Jl(g) | 0;
    f = (i | 0) == (b | 0);
    if ((i | 0) == (j | 0)) break;
    if (f) {
     f = -1;
     break a;
    }
    i = i + 1 | 0;
    g = g + i | 0;
    a = a + i | 0;
    f = bm(g, a) | 0;
    if (f | 0) break a; else {
     b = b - i | 0;
     j = j - i | 0;
    }
   }
   f = f & 1 ^ 1;
  } while (0);
  e = f >>> 31;
  return e | 0;
 }
 g = a + 8 | 0;
 i = c[g >> 2] | 0;
 f = pb(a, b, 13) | 0;
 if (!(c[f + 8 >> 2] | 0)) {
  f = pb(a, e, 13) | 0;
  if (!(c[f + 8 >> 2] | 0)) Dc(a, b, e); else k = f;
 } else k = f;
 l = a + 28 | 0;
 f = c[l >> 2] | 0;
 m = c[g >> 2] | 0;
 c[g >> 2] = m + 16;
 p = k;
 o = c[p + 4 >> 2] | 0;
 n = m;
 c[n >> 2] = c[p >> 2];
 c[n + 4 >> 2] = o;
 c[m + 8 >> 2] = c[k + 8 >> 2];
 m = c[g >> 2] | 0;
 c[g >> 2] = m + 16;
 n = b;
 k = c[n + 4 >> 2] | 0;
 b = m;
 c[b >> 2] = c[n >> 2];
 c[b + 4 >> 2] = k;
 c[m + 8 >> 2] = c[j >> 2];
 b = c[g >> 2] | 0;
 c[g >> 2] = b + 16;
 m = e;
 j = c[m + 4 >> 2] | 0;
 k = b;
 c[k >> 2] = c[m >> 2];
 c[k + 4 >> 2] = j;
 c[b + 8 >> 2] = c[e + 8 >> 2];
 sb(a, (c[g >> 2] | 0) + -48 | 0, 1, (d[(c[a + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
 f = (c[l >> 2] | 0) + (i - f) | 0;
 e = c[g >> 2] | 0;
 a = e + -16 | 0;
 c[g >> 2] = a;
 b = c[a + 4 >> 2] | 0;
 k = f;
 c[k >> 2] = c[a >> 2];
 c[k + 4 >> 2] = b;
 c[f + 8 >> 2] = c[e + -8 >> 2];
 f = c[g >> 2] | 0;
 g = c[f + 8 >> 2] | 0;
 if (!g) f = 0; else if ((g | 0) == 1) f = (c[f >> 2] | 0) != 0; else f = 1;
 p = f & 1;
 return p | 0;
}

function Gk(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0;
 y = i;
 i = i + 256 | 0;
 v = y + 40 | 0;
 u = y + 32 | 0;
 x = y + 24 | 0;
 w = y + 16 | 0;
 t = y + 8 | 0;
 k = y;
 j = y + 148 | 0;
 s = y + 48 | 0;
 r = yd(b) | 0;
 g = 1;
 h = 1;
 while (1) if (!(bd(d, g, j) | 0)) break; else {
  h = g;
  g = g << 1;
 }
 if ((h | 0) < (g | 0)) do {
  q = (g + h | 0) / 2 | 0;
  p = (bd(d, q, j) | 0) == 0;
  g = p ? q : g;
  h = p ? h : q + 1 | 0;
 } while ((h | 0) < (g | 0));
 q = (g + -1 | 0) > 22 ? 12 : 0;
 if (e | 0) {
  c[k >> 2] = e;
  dd(b, 11968, k) | 0;
 }
 ed(b, 11972, 16) | 0;
 if (!(bd(d, f, s) | 0)) {
  x = yd(b) | 0;
  x = x - r | 0;
  gd(b, x);
  i = y;
  return;
 }
 j = g + -11 | 0;
 e = s + 36 | 0;
 k = s + 20 | 0;
 l = s + 8 | 0;
 m = s + 12 | 0;
 n = s + 24 | 0;
 o = s + 35 | 0;
 p = s + 4 | 0;
 g = f;
 do {
  g = g + 1 | 0;
  if ((g | 0) == (q | 0)) {
   ed(b, 11989, 5) | 0;
   g = j;
  } else {
   cd(d, 11995, s) | 0;
   c[t >> 2] = e;
   dd(b, 12e3, t) | 0;
   h = c[k >> 2] | 0;
   if ((h | 0) > 0) {
    c[w >> 2] = h;
    dd(b, 12006, w) | 0;
   }
   ed(b, 12010, 4) | 0;
   a : do if (!(a[c[l >> 2] >> 0] | 0)) switch (a[c[m >> 2] >> 0] | 0) {
   case 109:
    {
     ed(b, 12029, 10) | 0;
     break a;
    }
   case 67:
    if (!(xd(b, s) | 0)) {
     ed(b, 8259, 1) | 0;
     break a;
    } else {
     c[u >> 2] = Tc(b, -1, 0) | 0;
     dd(b, 12015, u) | 0;
     Ed(b, -2);
     break a;
    }
   default:
    {
     f = c[n >> 2] | 0;
     c[v >> 2] = e;
     c[v + 4 >> 2] = f;
     dd(b, 12040, v) | 0;
     break a;
    }
   } else {
    c[x >> 2] = c[p >> 2];
    dd(b, 12015, x) | 0;
   } while (0);
   if (a[o >> 0] | 0) ed(b, 12057, 20) | 0;
   gd(b, (yd(b) | 0) - r | 0);
  }
 } while ((bd(d, g, s) | 0) != 0);
 x = yd(b) | 0;
 x = x - r | 0;
 gd(b, x);
 i = y;
 return;
}

function wl(a, b, d) {
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

function jh(d) {
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 e = d + 12 | 0;
 if ((c[(c[e >> 2] | 0) + 12 >> 2] | 0) > 0) dc(d);
 f = Tb(d, 8, 112, 0, 0) | 0;
 i = d + 8 | 0;
 h = c[i >> 2] | 0;
 c[h >> 2] = f;
 c[h + 8 >> 2] = 72;
 c[i >> 2] = (c[i >> 2] | 0) + 16;
 c[f + 12 >> 2] = c[e >> 2];
 i = f + 28 | 0;
 c[i >> 2] = 0;
 e = f + 16 | 0;
 c[e >> 2] = 0;
 h = f + 32 | 0;
 c[h >> 2] = 0;
 c[f + 64 >> 2] = 0;
 b[f + 38 >> 1] = 0;
 j = f + 52 | 0;
 c[j >> 2] = 0;
 g = f + 40 | 0;
 a[g >> 0] = 0;
 k = f + 44 | 0;
 c[k >> 2] = 0;
 a[f + 41 >> 0] = 1;
 c[f + 56 >> 2] = 0;
 b[f + 36 >> 1] = 1;
 a[f + 6 >> 0] = 0;
 c[f + 68 >> 2] = 0;
 a[g >> 0] = a[d + 40 >> 0] | 0;
 g = c[d + 44 >> 2] | 0;
 c[k >> 2] = g;
 c[j >> 2] = c[d + 52 >> 2];
 c[f + 48 >> 2] = g;
 g = mb(d, 0, 0, 640) | 0;
 c[i >> 2] = g;
 c[h >> 2] = 40;
 h = g + 8 | 0;
 c[h >> 2] = 0;
 c[g + 24 >> 2] = 0;
 c[g + 40 >> 2] = 0;
 c[g + 56 >> 2] = 0;
 c[g + 72 >> 2] = 0;
 c[g + 88 >> 2] = 0;
 c[g + 104 >> 2] = 0;
 c[g + 120 >> 2] = 0;
 c[g + 136 >> 2] = 0;
 c[g + 152 >> 2] = 0;
 c[g + 168 >> 2] = 0;
 c[g + 184 >> 2] = 0;
 c[g + 200 >> 2] = 0;
 c[g + 216 >> 2] = 0;
 c[g + 232 >> 2] = 0;
 c[g + 248 >> 2] = 0;
 c[g + 264 >> 2] = 0;
 c[g + 280 >> 2] = 0;
 c[g + 296 >> 2] = 0;
 c[g + 312 >> 2] = 0;
 c[g + 328 >> 2] = 0;
 c[g + 344 >> 2] = 0;
 c[g + 360 >> 2] = 0;
 c[g + 376 >> 2] = 0;
 c[g + 392 >> 2] = 0;
 c[g + 408 >> 2] = 0;
 c[g + 424 >> 2] = 0;
 c[g + 440 >> 2] = 0;
 c[g + 456 >> 2] = 0;
 c[g + 472 >> 2] = 0;
 c[g + 488 >> 2] = 0;
 c[g + 504 >> 2] = 0;
 c[g + 520 >> 2] = 0;
 c[g + 536 >> 2] = 0;
 c[g + 552 >> 2] = 0;
 c[g + 568 >> 2] = 0;
 c[g + 584 >> 2] = 0;
 c[g + 600 >> 2] = 0;
 c[g + 616 >> 2] = 0;
 c[g + 632 >> 2] = 0;
 c[f + 24 >> 2] = g + 560;
 d = f + 72 | 0;
 c[f + 80 >> 2] = 0;
 c[f + 84 >> 2] = 0;
 a[f + 90 >> 0] = 0;
 c[d >> 2] = g;
 c[f + 8 >> 2] = g + 16;
 c[h >> 2] = 0;
 c[f + 76 >> 2] = g + 336;
 c[e >> 2] = d;
 return f | 0;
}

function sh(e, f) {
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 k = e + 16 | 0;
 f = c[k >> 2] | 0;
 l = e + 72 | 0;
 if ((f | 0) == (l | 0)) return;
 m = e + 8 | 0;
 n = e + 40 | 0;
 o = e + 20 | 0;
 p = e + 28 | 0;
 q = e + 68 | 0;
 do {
  j = f + 18 | 0;
  g = a[j >> 0] | 0;
  if (!(g & 1)) {
   g = g & 255;
   if (g & 16 | 0) {
    a[j >> 0] = g & 239;
    c[q >> 2] = c[f + 32 >> 2];
   }
   i = c[f + 16 >> 2] | 0;
   g = i >>> 16;
   if ((i & 65535) << 16 >> 16 == -1) {
    h = f + 4 | 0;
    i = c[m >> 2] | 0;
    if ((c[h >> 2] | 0) >>> 0 < i >>> 0) c[h >> 2] = i;
   }
   if (!(g & 32)) a[f + 37 >> 0] = 1;
   a[j >> 0] = g & 199 | 8;
   f = Xa[c[f + 28 >> 2] & 255](e) | 0;
   f = (c[m >> 2] | 0) + (0 - f << 4) | 0;
   h = c[k >> 2] | 0;
   g = d[n >> 0] | 0;
   if (!(g & 6)) {
    g = f;
    i = c[h + 8 >> 2] | 0;
   } else {
    if (g & 2) {
     f = f - (c[p >> 2] | 0) | 0;
     gc(e, 1, -1);
     f = (c[p >> 2] | 0) + f | 0;
    }
    i = c[h + 8 >> 2] | 0;
    c[o >> 2] = c[i + 28 >> 2];
    g = f;
   }
   f = c[h >> 2] | 0;
   h = b[h + 16 >> 1] | 0;
   c[k >> 2] = i;
   a : do if (h << 16 >> 16) {
    i = g;
    g = h << 16 >> 16;
    while (1) {
     if (i >>> 0 >= (c[m >> 2] | 0) >>> 0) break;
     h = f + 16 | 0;
     s = i;
     r = c[s + 4 >> 2] | 0;
     j = f;
     c[j >> 2] = c[s >> 2];
     c[j + 4 >> 2] = r;
     c[f + 8 >> 2] = c[i + 8 >> 2];
     g = g + -1 | 0;
     if (!g) {
      f = h;
      break a;
     } else {
      i = i + 16 | 0;
      f = h;
     }
    }
    if ((g | 0) > 0) {
     h = g;
     while (1) {
      g = f + 16 | 0;
      c[f + 8 >> 2] = 0;
      if ((h | 0) > 1) {
       h = h + -1 | 0;
       f = g;
      } else {
       f = g;
       break;
      }
     }
    }
   } while (0);
   c[m >> 2] = f;
  } else {
   th(e);
   hc(e);
  }
  f = c[k >> 2] | 0;
 } while ((f | 0) != (l | 0));
 return;
}

function fl(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 i = a + 4 | 0;
 e = c[i >> 2] | 0;
 j = a + 100 | 0;
 if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
  c[i >> 2] = e + 1;
  e = d[e >> 0] | 0;
 } else e = al(a) | 0;
 switch (e | 0) {
 case 43:
 case 45:
  {
   f = (e | 0) == 45 & 1;
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = al(a) | 0;
   if ((b | 0) != 0 & (e + -48 | 0) >>> 0 > 9) if (!(c[j >> 2] | 0)) h = f; else {
    c[i >> 2] = (c[i >> 2] | 0) + -1;
    h = f;
   } else h = f;
   break;
  }
 default:
  h = 0;
 }
 if ((e + -48 | 0) >>> 0 > 9) if (!(c[j >> 2] | 0)) {
  f = -2147483648;
  e = 0;
 } else {
  c[i >> 2] = (c[i >> 2] | 0) + -1;
  f = -2147483648;
  e = 0;
 } else {
  f = 0;
  do {
   f = e + -48 + (f * 10 | 0) | 0;
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = al(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10 & (f | 0) < 214748364);
  b = ((f | 0) < 0) << 31 >> 31;
  if ((e + -48 | 0) >>> 0 < 10) {
   do {
    b = wn(f | 0, b | 0, 10, 0) | 0;
    f = C;
    e = mn(e | 0, ((e | 0) < 0) << 31 >> 31 | 0, -48, -1) | 0;
    f = mn(e | 0, C | 0, b | 0, f | 0) | 0;
    b = C;
    e = c[i >> 2] | 0;
    if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
     c[i >> 2] = e + 1;
     e = d[e >> 0] | 0;
    } else e = al(a) | 0;
   } while ((e + -48 | 0) >>> 0 < 10 & ((b | 0) < 21474836 | (b | 0) == 21474836 & f >>> 0 < 2061584302));
   g = f;
  } else g = f;
  if ((e + -48 | 0) >>> 0 < 10) do {
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = al(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10);
  if (c[j >> 2] | 0) c[i >> 2] = (c[i >> 2] | 0) + -1;
  a = (h | 0) != 0;
  e = ln(0, 0, g | 0, b | 0) | 0;
  f = a ? C : b;
  e = a ? e : g;
 }
 C = f;
 return e | 0;
}

function Hb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = e + 16 | 0;
 f = c[l >> 2] | 0;
 o = f + (1 << (d[e + 7 >> 0] | 0) << 5) | 0;
 k = e + 28 | 0;
 g = c[k >> 2] | 0;
 if ((g | 0) > 0) {
  j = e + 12 | 0;
  i = 0;
  f = 0;
  do {
   h = c[j >> 2] | 0;
   if (c[h + (i << 4) + 8 >> 2] & 64) {
    h = c[h + (i << 4) >> 2] | 0;
    if (a[h + 5 >> 0] & 3) {
     Db(b, h);
     g = c[k >> 2] | 0;
     f = 1;
    }
   }
   i = i + 1 | 0;
  } while ((i | 0) < (g | 0));
  g = c[l >> 2] | 0;
 } else {
  g = f;
  f = 0;
 }
 if (g >>> 0 < o >>> 0) {
  h = 0;
  n = g;
  g = 0;
  do {
   l = n + 8 | 0;
   i = c[l >> 2] | 0;
   j = n + 24 | 0;
   m = c[j >> 2] | 0;
   k = (m & 64 | 0) == 0;
   a : do if (!i) {
    if (!k) if (a[(c[n + 16 >> 2] | 0) + 5 >> 0] & 3) c[j >> 2] = 11;
   } else {
    do if (k) p = 18; else {
     j = c[n + 16 >> 2] | 0;
     if ((m & 15 | 0) == 4) {
      if (!j) {
       p = 18;
       break;
      }
      if (!(a[j + 5 >> 0] & 3)) {
       p = 18;
       break;
      }
      Db(b, j);
      i = c[l >> 2] | 0;
      p = 18;
      break;
     }
     i = (i & 64 | 0) == 0;
     if (!(a[j + 5 >> 0] & 3)) if (i) break a; else break;
     if (i) {
      h = 1;
      break a;
     }
     h = 1;
     g = (a[(c[n >> 2] | 0) + 5 >> 0] & 3) == 0 ? g : 1;
     break a;
    } while (0);
    if ((p | 0) == 18) {
     p = 0;
     if (!(i & 64)) break;
    }
    i = c[n >> 2] | 0;
    if (a[i + 5 >> 0] & 3) {
     Db(b, i);
     f = 1;
    }
   } while (0);
   n = n + 32 | 0;
  } while (n >>> 0 < o >>> 0);
  if (g | 0) {
   b = b + 96 | 0;
   c[e + 24 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   e = f;
   return e | 0;
  }
  if (h) {
   b = b + 100 | 0;
   c[e + 24 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   e = f;
   return e | 0;
  }
 }
 b = b + 88 | 0;
 c[e + 24 >> 2] = c[b >> 2];
 c[b >> 2] = e;
 e = f;
 return e | 0;
}

function yi(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 1264 | 0;
 p = r;
 f = r + 1048 | 0;
 o = r + 1256 | 0;
 m = r + 8 | 0;
 n = r + 1056 | 0;
 d = td(b, 1, 9936, 0) | 0;
 if ((ud(b, 2) | 0) < 1) e = Na(0) | 0; else e = ~~+zi(b, 2);
 c[f >> 2] = e;
 if ((a[d >> 0] | 0) == 33) {
  d = d + 1 | 0;
  l = Aa(f | 0) | 0;
 } else l = Pa(f | 0) | 0;
 if (!l) {
  Ad(b);
  i = r;
  return 1;
 }
 if (!(Ql(d, 9939) | 0)) {
  Fg(b, 0, 9);
  Kd(b, c[l >> 2] | 0);
  _c(b, -2, 9942);
  Kd(b, c[l + 4 >> 2] | 0);
  _c(b, -2, 11262);
  Kd(b, c[l + 8 >> 2] | 0);
  _c(b, -2, 9946);
  Kd(b, c[l + 12 >> 2] | 0);
  _c(b, -2, 9951);
  Kd(b, (c[l + 16 >> 2] | 0) + 1 | 0);
  _c(b, -2, 9955);
  Kd(b, (c[l + 20 >> 2] | 0) + 1900 | 0);
  _c(b, -2, 9961);
  Kd(b, (c[l + 24 >> 2] | 0) + 1 | 0);
  _c(b, -2, 9966);
  Kd(b, (c[l + 28 >> 2] | 0) + 1 | 0);
  _c(b, -2, 9971);
  d = c[l + 32 >> 2] | 0;
  if ((d | 0) < 0) {
   i = r;
   return 1;
  }
  Zc(b, d);
  _c(b, -2, 9976);
  i = r;
  return 1;
 }
 a[o >> 0] = 37;
 Pg(b, m);
 g = m + 8 | 0;
 h = m + 4 | 0;
 j = o + 1 | 0;
 k = o + 2 | 0;
 a : while (1) {
  f = a[d >> 0] | 0;
  switch (f << 24 >> 24) {
  case 0:
   break a;
  case 37:
   break;
  default:
   {
    e = c[g >> 2] | 0;
    if (e >>> 0 >= (c[h >> 2] | 0) >>> 0) {
     $h(m, 1) | 0;
     e = c[g >> 2] | 0;
     f = a[d >> 0] | 0;
    }
    c[g >> 2] = e + 1;
    a[(c[m >> 2] | 0) + e >> 0] = f;
    d = d + 1 | 0;
    continue a;
   }
  }
  f = d + 1 | 0;
  d = d + 2 | 0;
  e = a[f >> 0] | 0;
  if (!(e << 24 >> 24)) q = 20; else if (!(zl(9982, e << 24 >> 24, 23) | 0)) q = 20; else {
   a[j >> 0] = e;
   a[k >> 0] = 0;
  }
  if ((q | 0) == 20) {
   q = 0;
   c[p >> 2] = f;
   wd(b, 1, dd(b, 10005, p) | 0) | 0;
   d = f;
  }
  Dh(m, n, xa(n | 0, 200, o | 0, l | 0) | 0);
 }
 Ug(m);
 i = r;
 return 1;
}

function qh(f, g) {
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = f + 16 | 0;
 k = c[m >> 2] | 0;
 if ((e[f + 38 >> 1] | 0) > 199) rh(f, 4256, g);
 h = f + 6 | 0;
 switch (a[h >> 0] | 0) {
 case 0:
  {
   if ((k | 0) != (f + 72 | 0)) rh(f, 9007, g);
   if (bc(f, g + -16 | 0, -1) | 0) return;
   hc(f);
   return;
  }
 case 1:
  {
   a[h >> 0] = 0;
   l = f + 28 | 0;
   c[k >> 2] = (c[l >> 2] | 0) + (c[k + 20 >> 2] | 0);
   h = k + 18 | 0;
   i = a[h >> 0] | 0;
   if (!(i & 1)) {
    j = c[k + 28 >> 2] | 0;
    if (j) {
     a[k + 37 >> 0] = 1;
     a[h >> 0] = i & 255 | 8;
     g = Xa[j & 255](f) | 0;
     k = c[m >> 2] | 0;
     g = (c[f + 8 >> 2] | 0) + (0 - g << 4) | 0;
    }
    h = d[f + 40 >> 0] | 0;
    if (!(h & 6)) {
     i = g;
     h = c[k + 8 >> 2] | 0;
    } else {
     if (h & 2) {
      g = g - (c[l >> 2] | 0) | 0;
      gc(f, 1, -1);
      g = (c[l >> 2] | 0) + g | 0;
     }
     h = c[k + 8 >> 2] | 0;
     c[f + 20 >> 2] = c[h + 28 >> 2];
     i = g;
    }
    g = c[k >> 2] | 0;
    k = b[k + 16 >> 1] | 0;
    c[m >> 2] = h;
    l = f + 8 | 0;
    a : do if (k << 16 >> 16) {
     j = i;
     h = k << 16 >> 16;
     while (1) {
      if (j >>> 0 >= (c[l >> 2] | 0) >>> 0) break;
      i = g + 16 | 0;
      n = j;
      k = c[n + 4 >> 2] | 0;
      m = g;
      c[m >> 2] = c[n >> 2];
      c[m + 4 >> 2] = k;
      c[g + 8 >> 2] = c[j + 8 >> 2];
      h = h + -1 | 0;
      if (!h) {
       g = i;
       break a;
      } else {
       j = j + 16 | 0;
       g = i;
      }
     }
     if ((h | 0) > 0) {
      i = h;
      while (1) {
       h = g + 16 | 0;
       c[g + 8 >> 2] = 0;
       if ((i | 0) > 1) {
        i = i + -1 | 0;
        g = h;
       } else {
        g = h;
        break;
       }
      }
     }
    } while (0);
    c[l >> 2] = g;
   } else hc(f);
   sh(f, 0);
   return;
  }
 default:
  rh(f, 9045, g);
 }
}

function Ze(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 n = i;
 i = i + 48 | 0;
 f = n + 24 | 0;
 m = n;
 h = a + 48 | 0;
 j = c[h >> 2] | 0;
 e = a + 4 | 0;
 k = c[e >> 2] | 0;
 l = a + 16 | 0;
 a : do switch (c[l >> 2] | 0) {
 case 40:
  {
   de(a);
   ne(a, b, 0) | 0;
   if ((c[l >> 2] | 0) == 41) {
    de(a);
    qe(c[h >> 2] | 0, b);
    d = a + 24 | 0;
    break a;
   }
   if ((c[e >> 2] | 0) == (k | 0)) Be(a, 41); else {
    g = c[a + 52 >> 2] | 0;
    o = Ce(a, 41) | 0;
    e = Ce(a, 40) | 0;
    c[f >> 2] = o;
    c[f + 4 >> 2] = e;
    c[f + 8 >> 2] = k;
    ae(a, $b(g, 7159, f) | 0);
   }
   break;
  }
 case 288:
  {
   d = a + 24 | 0;
   e = c[d >> 2] | 0;
   de(a);
   f = c[h >> 2] | 0;
   if (!(_e(f, e, b, 1) | 0)) {
    _e(f, c[a + 72 >> 2] | 0, b, 1) | 0;
    o = xe(c[h >> 2] | 0, e) | 0;
    c[m + 16 >> 2] = -1;
    c[m + 20 >> 2] = -1;
    c[m >> 2] = 4;
    c[m + 8 >> 2] = o;
    $e(f, b, m);
   }
   break;
  }
 default:
  ae(a, 7405);
 } while (0);
 e = m + 16 | 0;
 f = m + 20 | 0;
 g = m + 8 | 0;
 b : while (1) switch (c[l >> 2] | 0) {
 case 46:
  {
   af(a, b);
   continue b;
  }
 case 91:
  {
   bf(j, b);
   de(a);
   ne(a, m, 0) | 0;
   Ge(c[h >> 2] | 0, m);
   if ((c[l >> 2] | 0) != 93) {
    d = 14;
    break b;
   }
   de(a);
   $e(j, b, m);
   continue b;
  }
 case 58:
  {
   de(a);
   if ((c[l >> 2] | 0) != 288) {
    d = 17;
    break b;
   }
   o = c[d >> 2] | 0;
   de(a);
   o = xe(c[h >> 2] | 0, o) | 0;
   c[e >> 2] = -1;
   c[f >> 2] = -1;
   c[m >> 2] = 4;
   c[g >> 2] = o;
   cf(j, b, m);
   df(a, b, k);
   continue b;
  }
 case 123:
 case 289:
 case 40:
  {
   Ae(j, b);
   df(a, b, k);
   continue b;
  }
 default:
  {
   d = 20;
   break b;
  }
 }
 if ((d | 0) == 14) Be(a, 93); else if ((d | 0) == 17) Be(a, 288); else if ((d | 0) == 20) {
  i = n;
  return;
 }
}

function jc(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0.0, m = 0, n = 0, o = 0, p = 0, q = 0.0;
 p = i;
 i = i + 16 | 0;
 k = p;
 f = b + 8 | 0;
 switch (c[f >> 2] & 63 | 0) {
 case 4:
  {
   f = c[b >> 2] | 0;
   e = (c[a + 16 >> 2] | 0) + (((1 << (d[a + 7 >> 0] | 0)) + -1 & c[f + 8 >> 2]) << 5) | 0;
   while (1) {
    if ((c[e + 24 >> 2] | 0) == 68) if ((c[e + 16 >> 2] | 0) == (f | 0)) {
     g = e;
     break;
    }
    e = c[e + 28 >> 2] | 0;
    if (!e) {
     n = 15088;
     o = 22;
     break;
    }
   }
   if ((o | 0) == 22) {
    i = p;
    return n | 0;
   }
   o = g;
   i = p;
   return o | 0;
  }
 case 3:
  {
   q = +h[b >> 3];
   h[k >> 3] = q + 6755399441055744.0;
   e = c[k >> 2] | 0;
   l = +(e | 0);
   if (l == q) {
    e = e + -1 | 0;
    if (e >>> 0 < (c[a + 28 >> 2] | 0) >>> 0) {
     o = (c[a + 12 >> 2] | 0) + (e << 4) | 0;
     i = p;
     return o | 0;
    }
    h[k >> 3] = l + 1.0;
    e = (c[k + 4 >> 2] | 0) + (c[k >> 2] | 0) | 0;
    if ((e | 0) < 0) {
     k = 0 - e | 0;
     e = (e | 0) == (k | 0) ? 0 : k;
    }
    e = (c[a + 16 >> 2] | 0) + (((e | 0) % ((1 << (d[a + 7 >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
    while (1) {
     if ((c[e + 24 >> 2] | 0) == 3) if (+h[e + 16 >> 3] == l) {
      m = e;
      break;
     }
     e = c[e + 28 >> 2] | 0;
     if (!e) {
      n = 15088;
      o = 22;
      break;
     }
    }
    if ((o | 0) == 22) {
     i = p;
     return n | 0;
    }
    o = m;
    i = p;
    return o | 0;
   }
   break;
  }
 case 0:
  {
   o = 15088;
   i = p;
   return o | 0;
  }
 default:
  {}
 }
 e = kc(a, b) | 0;
 while (1) {
  if ((c[e + 24 >> 2] | 0) == (c[f >> 2] | 0)) if (lc(0, e + 16 | 0, b) | 0) {
   j = e;
   break;
  }
  e = c[e + 28 >> 2] | 0;
  if (!e) {
   n = 15088;
   o = 22;
   break;
  }
 }
 if ((o | 0) == 22) {
  i = p;
  return n | 0;
 }
 o = j;
 i = p;
 return o | 0;
}

function Rf(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 g = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  e = (c[g >> 2] | 0) + (e << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  h = -1001e3 - e | 0;
  e = c[g >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (h | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (h + -1 << 4) | 0;
  }
 } while (0);
 a : do switch (c[e + 8 >> 2] & 63 | 0) {
 case 38:
  {
   e = c[e >> 2] | 0;
   if ((f | 0) <= 0) {
    b = 0;
    return b | 0;
   }
   if ((d[e + 6 >> 0] | 0 | 0) < (f | 0)) {
    b = 0;
    return b | 0;
   } else {
    i = 17772;
    h = e;
    e = e + 16 + (f + -1 << 4) | 0;
    break a;
   }
  }
 case 6:
  {
   e = c[e >> 2] | 0;
   h = c[e + 12 >> 2] | 0;
   if ((f | 0) <= 0) {
    b = 0;
    return b | 0;
   }
   if ((c[h + 40 >> 2] | 0) < (f | 0)) {
    b = 0;
    return b | 0;
   }
   i = f + -1 | 0;
   g = c[e + 16 + (i << 2) >> 2] | 0;
   f = c[g + 8 >> 2] | 0;
   e = c[(c[h + 28 >> 2] | 0) + (i << 3) >> 2] | 0;
   if (!e) {
    i = 17772;
    h = g;
    e = f;
   } else {
    i = e + 16 | 0;
    h = g;
    e = f;
   }
   break;
  }
 default:
  {
   b = 0;
   return b | 0;
  }
 } while (0);
 f = b + 8 | 0;
 g = c[f >> 2] | 0;
 l = g + -16 | 0;
 c[f >> 2] = l;
 k = c[l + 4 >> 2] | 0;
 j = e;
 c[j >> 2] = c[l >> 2];
 c[j + 4 >> 2] = k;
 c[e + 8 >> 2] = c[g + -8 >> 2];
 e = c[f >> 2] | 0;
 if (!(c[e + 8 >> 2] & 64)) {
  l = i;
  return l | 0;
 }
 g = c[e >> 2] | 0;
 if (!(a[g + 5 >> 0] & 3)) {
  l = i;
  return l | 0;
 }
 e = h;
 if (!(a[e + 5 >> 0] & 4)) {
  l = i;
  return l | 0;
 }
 sc(b, e, g);
 l = i;
 return l | 0;
}

function fe(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = c[b >> 2] | 0;
 n = b + 60 | 0;
 h = c[n >> 2] | 0;
 j = h + 4 | 0;
 e = c[j >> 2] | 0;
 k = h + 8 | 0;
 l = c[k >> 2] | 0;
 do if ((e + 1 | 0) >>> 0 > l >>> 0) {
  if (l >>> 0 > 2147483645) be(b, 6665, 0);
  e = l << 1;
  f = c[b + 52 >> 2] | 0;
  if ((e | 0) == -2) yb(f); else {
   i = mb(f, c[h >> 2] | 0, l, e) | 0;
   c[h >> 2] = i;
   c[k >> 2] = e;
   g = c[j >> 2] | 0;
   break;
  }
 } else {
  g = e;
  i = c[h >> 2] | 0;
 } while (0);
 c[j >> 2] = g + 1;
 a[i + g >> 0] = o;
 m = b + 56 | 0;
 e = c[m >> 2] | 0;
 l = c[e >> 2] | 0;
 c[e >> 2] = l + -1;
 if (!l) e = Td(e) | 0; else {
  l = e + 4 | 0;
  e = c[l >> 2] | 0;
  c[l >> 2] = e + 1;
  e = d[e >> 0] | 0;
 }
 c[b >> 2] = e;
 if ((e | 0) != 61) {
  n = e;
  b = 0;
  o = (n | 0) != (o | 0);
  o = o << 31 >> 31;
  o = o ^ b;
  return o | 0;
 }
 l = b + 52 | 0;
 k = 0;
 while (1) {
  i = c[n >> 2] | 0;
  j = i + 4 | 0;
  f = c[j >> 2] | 0;
  g = i + 8 | 0;
  h = c[g >> 2] | 0;
  if ((f + 1 | 0) >>> 0 > h >>> 0) {
   if (h >>> 0 > 2147483645) {
    g = 16;
    break;
   }
   f = h << 1;
   e = c[l >> 2] | 0;
   if ((f | 0) == -2) {
    g = 18;
    break;
   }
   e = mb(e, c[i >> 2] | 0, h, f) | 0;
   c[i >> 2] = e;
   c[g >> 2] = f;
   f = c[j >> 2] | 0;
  } else e = c[i >> 2] | 0;
  c[j >> 2] = f + 1;
  a[e + f >> 0] = 61;
  e = c[m >> 2] | 0;
  j = c[e >> 2] | 0;
  c[e >> 2] = j + -1;
  if (!j) f = Td(e) | 0; else {
   j = e + 4 | 0;
   f = c[j >> 2] | 0;
   c[j >> 2] = f + 1;
   f = d[f >> 0] | 0;
  }
  c[b >> 2] = f;
  e = k + 1 | 0;
  if ((f | 0) == 61) k = e; else {
   g = 24;
   break;
  }
 }
 if ((g | 0) == 16) be(b, 6665, 0); else if ((g | 0) == 18) yb(e); else if ((g | 0) == 24) {
  o = (f | 0) != (o | 0);
  o = o << 31 >> 31;
  o = o ^ e;
  return o | 0;
 }
 return 0;
}

function th(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 f = c[a + 16 >> 2] | 0;
 g = f + 24 | 0;
 j = c[g >> 2] | 0;
 i = f + 28 | 0;
 k = c[(c[i >> 2] | 0) + -4 >> 2] | 0;
 h = k & 63;
 switch (h | 0) {
 case 12:
 case 7:
 case 6:
 case 21:
 case 19:
 case 18:
 case 17:
 case 16:
 case 15:
 case 14:
 case 13:
  {
   h = a + 8 | 0;
   a = c[h >> 2] | 0;
   g = a + -16 | 0;
   c[h >> 2] = g;
   k = k >>> 6 & 255;
   h = c[g + 4 >> 2] | 0;
   i = j + (k << 4) | 0;
   c[i >> 2] = c[g >> 2];
   c[i + 4 >> 2] = h;
   c[j + (k << 4) + 8 >> 2] = c[a + -8 >> 2];
   return;
  }
 case 24:
 case 25:
 case 26:
  {
   e = a + 8 | 0;
   f = c[e >> 2] | 0;
   b = c[f + -8 >> 2] | 0;
   if (!b) b = 1; else if ((b | 0) == 1) b = (c[f + -16 >> 2] | 0) == 0; else b = 0;
   d = b & 1;
   b = d ^ 1;
   c[e >> 2] = f + -16;
   if ((h | 0) == 26) {
    a = (c[(pb(a, j + (k >>> 23 << 4) | 0, 14) | 0) + 8 >> 2] | 0) == 0;
    b = a ? d : b;
   }
   if ((b | 0) == (k >>> 6 & 255 | 0)) return;
   c[i >> 2] = (c[i >> 2] | 0) + 4;
   return;
  }
 case 22:
  {
   d = a + 8 | 0;
   i = c[d >> 2] | 0;
   e = i + -32 | 0;
   b = e - (j + (k >>> 23 << 4)) | 0;
   l = i + -16 | 0;
   h = c[l + 4 >> 2] | 0;
   j = i + -48 | 0;
   c[j >> 2] = c[l >> 2];
   c[j + 4 >> 2] = h;
   c[i + -40 >> 2] = c[i + -8 >> 2];
   if ((b | 0) > 16) {
    c[d >> 2] = e;
    Ub(a, b >> 4);
   }
   j = c[d >> 2] | 0;
   a = c[g >> 2] | 0;
   l = k >>> 6 & 255;
   h = j + -16 | 0;
   i = c[h + 4 >> 2] | 0;
   k = a + (l << 4) | 0;
   c[k >> 2] = c[h >> 2];
   c[k + 4 >> 2] = i;
   c[a + (l << 4) + 8 >> 2] = c[j + -8 >> 2];
   c[d >> 2] = c[f + 4 >> 2];
   return;
  }
 case 34:
  {
   c[a + 8 >> 2] = c[f + 4 >> 2];
   return;
  }
 case 29:
  {
   if (!(k & 8372224)) return;
   c[a + 8 >> 2] = c[f + 4 >> 2];
   return;
  }
 default:
  return;
 }
}

function Le(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 32 | 0;
 o = q + 8 | 0;
 n = q;
 m = c[d + 48 >> 2] | 0;
 p = c[d + 64 >> 2] | 0;
 k = c[m >> 2] | 0;
 f = k + 60 | 0;
 h = c[f >> 2] | 0;
 l = m + 44 | 0;
 if ((b[l >> 1] | 0) < (h | 0)) {
  g = h;
  j = c[k + 24 >> 2] | 0;
 } else {
  g = k + 24 | 0;
  j = ce(c[d + 52 >> 2] | 0, c[g >> 2] | 0, f, 12, 32767, 7211) | 0;
  c[g >> 2] = j;
  g = c[f >> 2] | 0;
 }
 if ((h | 0) < (g | 0)) {
  f = h;
  do {
   c[j + (f * 12 | 0) >> 2] = 0;
   f = f + 1 | 0;
  } while ((f | 0) != (g | 0));
 }
 f = b[l >> 1] | 0;
 c[j + ((f << 16 >> 16) * 12 | 0) >> 2] = e;
 if (!(a[e + 5 >> 0] & 3)) e = f; else if (!(a[k + 5 >> 0] & 4)) e = f; else {
  sc(c[d + 52 >> 2] | 0, k, e);
  e = b[l >> 1] | 0;
 }
 b[l >> 1] = e + 1 << 16 >> 16;
 j = p + 4 | 0;
 k = c[j >> 2] | 0;
 if ((k + 1 - (c[m + 40 >> 2] | 0) | 0) > 200) {
  g = m + 12 | 0;
  h = c[(c[g >> 2] | 0) + 52 >> 2] | 0;
  f = c[(c[m >> 2] | 0) + 64 >> 2] | 0;
  if (!f) {
   l = 6600;
   c[o >> 2] = 7211;
   m = o + 4 | 0;
   c[m >> 2] = 200;
   m = o + 8 | 0;
   c[m >> 2] = l;
   m = $b(h, 6614, o) | 0;
   l = c[g >> 2] | 0;
   ae(l, m);
  }
  c[n >> 2] = f;
  m = $b(h, 6580, n) | 0;
  c[o >> 2] = 7211;
  n = o + 4 | 0;
  c[n >> 2] = 200;
  n = o + 8 | 0;
  c[n >> 2] = m;
  o = $b(h, 6614, o) | 0;
  n = c[g >> 2] | 0;
  ae(n, o);
 }
 f = p + 8 | 0;
 if ((k + 2 | 0) > (c[f >> 2] | 0)) {
  o = ce(c[d + 52 >> 2] | 0, c[p >> 2] | 0, f, 2, 2147483645, 7211) | 0;
  c[p >> 2] = o;
  d = c[j >> 2] | 0;
  p = o;
  o = d + 1 | 0;
  c[j >> 2] = o;
  d = p + (d << 1) | 0;
  b[d >> 1] = e;
  i = q;
  return;
 } else {
  d = k;
  p = c[p >> 2] | 0;
  o = d + 1 | 0;
  c[j >> 2] = o;
  d = p + (d << 1) | 0;
  b[d >> 1] = e;
  i = q;
  return;
 }
}

function nb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 i = b + 12 | 0;
 j = c[i >> 2] | 0;
 k = j + 62 | 0;
 l = a[k >> 0] | 0;
 h = (e | 0) != 0;
 if (h) {
  a[k >> 0] = 1;
  e = 6;
 } else {
  a[k >> 0] = 0;
  f = j + 104 | 0;
  e = c[f >> 2] | 0;
  if (!e) e = 6; else {
   do {
    g = e + 5 | 0;
    a[g >> 0] = d[g >> 0] & 191;
    ob(b, 1);
    e = c[f >> 2] | 0;
   } while ((e | 0) != 0);
   if ((a[k >> 0] | 0) == 2) e = 7; else e = 6;
  }
 }
 if ((e | 0) == 6) if ((d[j + 61 >> 0] | 0) < 2) e = 7;
 if ((e | 0) == 7) {
  g = c[i >> 2] | 0;
  a[g + 61 >> 0] = 2;
  c[g + 64 >> 2] = 0;
  f = g + 72 | 0;
  do e = Kb(b, f, 1) | 0; while ((e | 0) == (f | 0));
  c[g + 80 >> 2] = e;
  f = g + 68 | 0;
  do e = Kb(b, f, 1) | 0; while ((e | 0) == (f | 0));
  c[g + 76 >> 2] = e;
 }
 e = c[i >> 2] | 0;
 f = e + 61 | 0;
 if ((a[f >> 0] | 0) == 5) g = 5; else {
  do Cb(b) | 0; while ((a[f >> 0] | 0) != 5);
  g = c[i >> 2] | 0;
  e = g;
  g = a[g + 61 >> 0] | 0;
 }
 f = e + 61 | 0;
 if (!(1 << (g & 255) & -33)) {
  do Cb(b) | 0; while (!(1 << d[f >> 0] & -33 | 0));
  f = c[i >> 2] | 0;
  e = f;
  f = a[f + 61 >> 0] | 0;
 } else f = g;
 e = e + 61 | 0;
 if (f << 24 >> 24 != 5) do Cb(b) | 0; while ((a[e >> 0] | 0) != 5);
 if (l << 24 >> 24 == 2) {
  e = (c[i >> 2] | 0) + 61 | 0;
  if (a[e >> 0] | 0) do Cb(b) | 0; while ((a[e >> 0] | 0) != 0);
 }
 a[k >> 0] = l;
 l = (c[j + 12 >> 2] | 0) + (c[j + 8 >> 2] | 0) | 0;
 g = (l | 0) / 100 | 0;
 f = c[j + 156 >> 2] | 0;
 k = R(g, 0 - f | 0) | 0;
 fc(j, ((f | 0) < (2147483644 / (g | 0) | 0 | 0) ? k : -2147483644) + l | 0);
 if (h) return;
 f = (c[i >> 2] | 0) + 104 | 0;
 e = c[f >> 2] | 0;
 if (!e) return;
 do {
  l = e + 5 | 0;
  a[l >> 0] = d[l >> 0] & 191;
  ob(b, 1);
  e = c[f >> 2] | 0;
 } while ((e | 0) != 0);
 return;
}

function gf(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 qe(b, d);
 switch (c[d >> 2] | 0) {
 case 10:
  {
   h = d + 8 | 0;
   j = c[h >> 2] | 0;
   g = (c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (j << 2) | 0;
   if ((j | 0) > 0) {
    f = g + -4 | 0;
    e = c[f >> 2] | 0;
    if ((a[3916 + (e & 63) >> 0] | 0) >= 0) i = 4;
   } else i = 4;
   if ((i | 0) == 4) {
    f = g;
    e = c[g >> 2] | 0;
   }
   c[f >> 2] = ((e & 16320 | 0) == 0 & 1) << 6 | e & -16321;
   j = c[h >> 2] | 0;
   i = 7;
   break;
  }
 case 2:
 case 5:
 case 4:
  break;
 default:
  {
   j = hf(b, d, 0) | 0;
   i = 7;
  }
 }
 do if ((i | 0) == 7) {
  e = d + 20 | 0;
  if ((j | 0) != -1) {
   f = c[e >> 2] | 0;
   if ((f | 0) == -1) {
    c[e >> 2] = j;
    break;
   }
   i = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
   while (1) {
    h = i + (f << 2) | 0;
    g = c[h >> 2] | 0;
    e = (g >>> 14) + -131071 | 0;
    e = (e | 0) == -1 ? -1 : f + 1 + e | 0;
    if ((e | 0) == -1) break; else f = e;
   }
   e = j + ~f | 0;
   if ((((e | 0) > -1 ? e : 0 - e | 0) | 0) > 131071) ae(c[b + 12 >> 2] | 0, 6980); else {
    c[h >> 2] = (e << 14) + 2147467264 | g & 16383;
    break;
   }
  }
 } while (0);
 d = d + 16 | 0;
 j = c[d >> 2] | 0;
 c[b + 24 >> 2] = c[b + 20 >> 2];
 e = b + 28 | 0;
 if ((j | 0) == -1) {
  c[d >> 2] = -1;
  return;
 }
 f = c[e >> 2] | 0;
 if ((f | 0) == -1) {
  c[e >> 2] = j;
  c[d >> 2] = -1;
  return;
 }
 i = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 while (1) {
  h = i + (f << 2) | 0;
  g = c[h >> 2] | 0;
  e = (g >>> 14) + -131071 | 0;
  e = (e | 0) == -1 ? -1 : f + 1 + e | 0;
  if ((e | 0) == -1) break; else f = e;
 }
 e = j + ~f | 0;
 if ((((e | 0) > -1 ? e : 0 - e | 0) | 0) > 131071) ae(c[b + 12 >> 2] | 0, 6980);
 c[h >> 2] = (e << 14) + 2147467264 | g & 16383;
 c[d >> 2] = -1;
 return;
}

function Kh(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m + 8 | 0;
 k = m;
 if ((c | 0) <= (b | 0)) {
  i = m;
  return;
 }
 while (1) {
  pd(a, 1, b);
  pd(a, 1, c);
  if (!(Lh(a, -1, -2) | 0)) kd(a, -3); else {
   Xg(a, 1, b);
   Xg(a, 1, c);
  }
  d = c - b | 0;
  if ((d | 0) == 1) {
   c = 24;
   break;
  }
  e = (c + b | 0) / 2 | 0;
  pd(a, 1, e);
  pd(a, 1, b);
  do if (!(Lh(a, -2, -1) | 0)) {
   kd(a, -2);
   pd(a, 1, c);
   if (!(Lh(a, -1, -2) | 0)) {
    kd(a, -3);
    break;
   } else {
    Xg(a, 1, e);
    Xg(a, 1, c);
    break;
   }
  } else {
   Xg(a, 1, e);
   Xg(a, 1, b);
  } while (0);
  if ((d | 0) == 2) {
   c = 24;
   break;
  }
  pd(a, 1, e);
  Cf(a, -1);
  j = c + -1 | 0;
  pd(a, 1, j);
  Xg(a, 1, e);
  Xg(a, 1, j);
  h = b;
  g = j;
  while (1) {
   d = h + 1 | 0;
   pd(a, 1, d);
   if (!(Lh(a, -1, -2) | 0)) {
    e = d;
    d = h;
   } else while (1) {
    if ((c | 0) <= (d | 0)) ad(a, 9418, k) | 0;
    kd(a, -2);
    e = d + 1 | 0;
    pd(a, 1, e);
    if (!(Lh(a, -1, -2) | 0)) break; else d = e;
   }
   f = g + -1 | 0;
   pd(a, 1, f);
   if (Lh(a, -3, -1) | 0) {
    g = f;
    while (1) {
     if ((g | 0) <= (b | 0)) ad(a, 9418, l) | 0;
     kd(a, -2);
     f = g + -1 | 0;
     pd(a, 1, f);
     if (!(Lh(a, -3, -1) | 0)) break; else g = f;
    }
   }
   if ((g | 0) <= (e | 0)) break;
   Xg(a, 1, e);
   Xg(a, 1, f);
   h = e;
   g = f;
  }
  kd(a, -4);
  pd(a, 1, j);
  pd(a, 1, e);
  Xg(a, 1, j);
  Xg(a, 1, e);
  h = (e - b | 0) < (c - e | 0);
  g = d + 2 | 0;
  f = b;
  b = h ? g : b;
  j = c;
  c = h ? c : d;
  Kh(a, h ? f : g, h ? d : j);
  if ((c | 0) <= (b | 0)) {
   c = 24;
   break;
  }
 }
 if ((c | 0) == 24) {
  i = m;
  return;
 }
}

function yg(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = c[a + 16 >> 2] | 0;
 g = (b | 0) > 0;
 do if (g) {
  e = (c[h >> 2] | 0) + (b << 4) | 0;
  e = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   e = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   e = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  e = -1001e3 - b | 0;
  f = c[h >> 2] | 0;
  if ((c[f + 8 >> 2] | 0) == 22) e = 15088; else {
   f = c[f >> 2] | 0;
   e = (e | 0) > (d[f + 6 >> 0] | 0 | 0) ? 15088 : f + 16 + (e + -1 << 4) | 0;
  }
 } while (0);
 switch (c[e + 8 >> 2] & 63 | 0) {
 case 5:
  {
   h = c[e >> 2] | 0;
   return h | 0;
  }
 case 6:
  {
   h = c[e >> 2] | 0;
   return h | 0;
  }
 case 38:
  {
   h = c[e >> 2] | 0;
   return h | 0;
  }
 case 22:
  {
   h = c[e >> 2] | 0;
   return h | 0;
  }
 case 8:
  {
   h = c[e >> 2] | 0;
   return h | 0;
  }
 case 2:
 case 7:
  {
   do if (g) {
    e = (c[h >> 2] | 0) + (b << 4) | 0;
    e = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
   } else {
    if ((b | 0) >= -1000999) {
     e = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
     break;
    }
    if ((b | 0) == -1001e3) {
     e = (c[a + 12 >> 2] | 0) + 40 | 0;
     break;
    }
    f = -1001e3 - b | 0;
    e = c[h >> 2] | 0;
    if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
     e = c[e >> 2] | 0;
     e = (f | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (f + -1 << 4) | 0;
    }
   } while (0);
   switch (c[e + 8 >> 2] & 15 | 0) {
   case 7:
    {
     h = (c[e >> 2] | 0) + 24 | 0;
     return h | 0;
    }
   case 2:
    {
     h = c[e >> 2] | 0;
     return h | 0;
    }
   default:
    {
     h = 0;
     return h | 0;
    }
   }
  }
 default:
  {
   h = 0;
   return h | 0;
  }
 }
 return 0;
}

function vc(a, b, e, f, g) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 p = i;
 i = i + 32 | 0;
 j = p + 16 | 0;
 l = p;
 n = e + 8 | 0;
 k = c[n >> 2] | 0;
 do if ((k | 0) == 3) {
  l = e;
  m = 6;
 } else if ((k & 15 | 0) == 4) {
  k = c[e >> 2] | 0;
  if (wc(k + 16 | 0, c[k + 12 >> 2] | 0, j) | 0) {
   h[l >> 3] = +h[j >> 3];
   c[l + 8 >> 2] = 3;
   m = 6;
   break;
  }
 } while (0);
 a : do if ((m | 0) == 6) {
  k = c[f + 8 >> 2] | 0;
  do if ((k | 0) == 3) j = f; else {
   if ((k & 15 | 0) == 4) {
    m = c[f >> 2] | 0;
    if (wc(m + 16 | 0, c[m + 12 >> 2] | 0, j) | 0) break;
   }
   break a;
  } while (0);
  h[b >> 3] = +xc(g + -6 | 0, +h[l >> 3], +h[j >> 3]);
  c[b + 8 >> 2] = 3;
  i = p;
  return;
 } while (0);
 j = pb(a, e, g) | 0;
 if (!(c[j + 8 >> 2] | 0)) {
  j = pb(a, f, g) | 0;
  if (!(c[j + 8 >> 2] | 0)) yc(a, e, f); else o = j;
 } else o = j;
 l = a + 28 | 0;
 g = c[l >> 2] | 0;
 m = a + 8 | 0;
 j = c[m >> 2] | 0;
 c[m >> 2] = j + 16;
 r = o;
 q = c[r + 4 >> 2] | 0;
 k = j;
 c[k >> 2] = c[r >> 2];
 c[k + 4 >> 2] = q;
 c[j + 8 >> 2] = c[o + 8 >> 2];
 o = c[m >> 2] | 0;
 c[m >> 2] = o + 16;
 j = e;
 e = c[j + 4 >> 2] | 0;
 k = o;
 c[k >> 2] = c[j >> 2];
 c[k + 4 >> 2] = e;
 c[o + 8 >> 2] = c[n >> 2];
 o = c[m >> 2] | 0;
 c[m >> 2] = o + 16;
 k = f;
 n = c[k + 4 >> 2] | 0;
 e = o;
 c[e >> 2] = c[k >> 2];
 c[e + 4 >> 2] = n;
 c[o + 8 >> 2] = c[f + 8 >> 2];
 sb(a, (c[m >> 2] | 0) + -48 | 0, 1, (d[(c[a + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
 b = (c[l >> 2] | 0) + (b - g) | 0;
 o = c[m >> 2] | 0;
 g = o + -16 | 0;
 c[m >> 2] = g;
 e = c[g + 4 >> 2] | 0;
 f = b;
 c[f >> 2] = c[g >> 2];
 c[f + 4 >> 2] = e;
 c[b + 8 >> 2] = c[o + -8 >> 2];
 i = p;
 return;
}

function kk(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 112 | 0;
 g = l;
 k = l + 4 | 0;
 if ((ud(b, 1) | 0) == 8) {
  h = mh(b, 1) | 0;
  f = 1;
 } else {
  h = b;
  f = 0;
 }
 j = f | 2;
 e = td(b, j, 11495, 0) | 0;
 f = f + 1 | 0;
 do if (!(lk(b, f) | 0)) {
  if ((ud(b, f) | 0) == 6) {
   c[g >> 2] = e;
   dd(b, 11502, g) | 0;
   e = Tc(b, -1, 0) | 0;
   Cf(b, f);
   kh(b, h, 1);
   break;
  }
  k = wd(b, f, 11506) | 0;
  i = l;
  return k | 0;
 } else if (!(bd(h, Xc(b, f, 0) | 0, k) | 0)) {
  Ad(b);
  k = 1;
  i = l;
  return k | 0;
 } while (0);
 if (!(cd(h, e, k) | 0)) {
  k = wd(b, j, 11533) | 0;
  i = l;
  return k | 0;
 }
 Fg(b, 0, 2);
 if (Ol(e, 83) | 0) {
  Hf(b, c[k + 16 >> 2] | 0) | 0;
  _c(b, -2, 11548);
  Hf(b, k + 36 | 0) | 0;
  _c(b, -2, 11555);
  Kd(b, c[k + 24 >> 2] | 0);
  _c(b, -2, 11565);
  Kd(b, c[k + 28 >> 2] | 0);
  _c(b, -2, 11577);
  Hf(b, c[k + 12 >> 2] | 0) | 0;
  _c(b, -2, 11593);
 }
 if (Ol(e, 108) | 0) {
  Kd(b, c[k + 20 >> 2] | 0);
  _c(b, -2, 11598);
 }
 if (Ol(e, 117) | 0) {
  Kd(b, d[k + 32 >> 0] | 0);
  _c(b, -2, 11610);
  Kd(b, d[k + 33 >> 0] | 0);
  _c(b, -2, 11615);
  Zc(b, a[k + 34 >> 0] | 0);
  _c(b, -2, 11623);
 }
 if (Ol(e, 110) | 0) {
  Hf(b, c[k + 4 >> 2] | 0) | 0;
  _c(b, -2, 11632);
  Hf(b, c[k + 8 >> 2] | 0) | 0;
  _c(b, -2, 11637);
 }
 if (Ol(e, 116) | 0) {
  Zc(b, a[k + 35 >> 0] | 0);
  _c(b, -2, 11646);
 }
 if (Ol(e, 76) | 0) {
  if ((h | 0) == (b | 0)) {
   Cf(b, -2);
   Ed(b, -3);
  } else kh(h, b, 1);
  _c(b, -2, 11657);
 }
 if (!(Ol(e, 102) | 0)) {
  k = 1;
  i = l;
  return k | 0;
 }
 if ((h | 0) == (b | 0)) {
  Cf(b, -2);
  Ed(b, -3);
 } else kh(h, b, 1);
 _c(b, -2, 11669);
 k = 1;
 i = l;
 return k | 0;
}

function Kb(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = b + 12 | 0;
 k = c[(c[m >> 2] | 0) + 60 >> 2] | 0;
 n = k & 255 ^ 3;
 l = (k & 16711680 | 0) == 131072;
 j = l ? 255 : 184;
 k = l ? 64 : k & 3;
 l = l ? 64 : 0;
 g = c[e >> 2] | 0;
 a : do if (!g) g = 0; else {
  i = f;
  b : while (1) {
   if (!i) break a;
   i = i + -1 | 0;
   f = g + 5 | 0;
   h = d[f >> 0] | 0;
   c : do if (!((h ^ 3) & n)) {
    c[e >> 2] = c[g >> 2];
    h = c[g + 4 >> 2] | 0;
    f = h >>> 16;
    switch (h & 255 | 0) {
    case 9:
     {
      Lb(b, g);
      break c;
     }
    case 6:
     {
      mb(b, g, (f << 2 & 1020) + 16 | 0, 0) | 0;
      break c;
     }
    case 38:
     {
      mb(b, g, (f << 4 & 4080) + 16 | 0, 0) | 0;
      break c;
     }
    case 10:
     {
      Mb(b, g);
      break c;
     }
    case 5:
     {
      Nb(b, g);
      break c;
     }
    case 8:
     {
      Ob(b, g);
      break c;
     }
    case 7:
     {
      mb(b, g, (c[g + 16 >> 2] | 0) + 24 | 0, 0) | 0;
      break c;
     }
    case 4:
     {
      h = (c[m >> 2] | 0) + 28 | 0;
      c[h >> 2] = (c[h >> 2] | 0) + -1;
      break;
     }
    case 20:
     break;
    default:
     break c;
    }
    mb(b, g, (c[g + 12 >> 2] | 0) + 17 | 0, 0) | 0;
   } else {
    if (h & l | 0) {
     g = 0;
     break b;
    }
    if ((a[g + 4 >> 0] | 0) == 8) if (c[g + 28 >> 2] | 0) {
     Kb(b, g + 56 | 0, -3) | 0;
     Rb(g);
     if ((a[(c[m >> 2] | 0) + 62 >> 0] | 0) != 1) Sb(g);
    }
    a[f >> 0] = h & j | k;
    e = g;
   } while (0);
   g = c[e >> 2] | 0;
   if (!g) {
    g = 0;
    break a;
   }
  }
  return g | 0;
 } while (0);
 b = (g | 0) == 0 ? 0 : e;
 return b | 0;
}

function ec(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = c[b + 12 >> 2] | 0;
 do if ((a[j + 62 >> 0] | 0) == 2) {
  h = j + 20 | 0;
  d = c[h >> 2] | 0;
  if (!d) {
   nb(b, 0);
   d = c[j + 8 >> 2] | 0;
   i = c[j + 12 >> 2] | 0;
   f = j + 61 | 0;
   e = i;
   g = d;
   d = i + d | 0;
  } else {
   f = j + 61 | 0;
   if ((a[f >> 0] | 0) != 5) do Cb(b) | 0; while ((a[f >> 0] | 0) != 5);
   a[f >> 0] = 0;
   g = c[j + 8 >> 2] | 0;
   e = c[j + 12 >> 2] | 0;
   i = (e + g | 0) >>> 0 > (R(c[j + 160 >> 2] | 0, (d >>> 0) / 100 | 0) | 0) >>> 0;
   d = i ? 0 : d;
  }
  c[h >> 2] = d;
  i = g + e | 0;
  g = (i | 0) / 100 | 0;
  e = c[j + 156 >> 2] | 0;
  h = R(e, 0 - g | 0) | 0;
  fc(j, ((e | 0) < (2147483644 / (g | 0) | 0 | 0) ? h : -2147483644) + i | 0);
 } else {
  e = j + 12 | 0;
  d = c[j + 164 >> 2] | 0;
  d = (d | 0) < 40 ? 40 : d;
  g = ((c[e >> 2] | 0) / 200 | 0) + 1 | 0;
  h = R(d, g) | 0;
  f = j + 61 | 0;
  h = (g | 0) < (2147483644 / (d | 0) | 0 | 0) ? h : 2147483644;
  do {
   h = h - (Cb(b) | 0) | 0;
   g = (a[f >> 0] | 0) == 5;
   if ((h | 0) <= -1600) {
    i = 11;
    break;
   }
  } while (!g);
  if ((i | 0) == 11) if (!g) {
   fc(j, ((h | 0) / (d | 0) | 0) * 200 | 0);
   break;
  }
  h = (c[j + 20 >> 2] | 0) / 100 | 0;
  g = c[j + 156 >> 2] | 0;
  i = R(g, 0 - h | 0) | 0;
  fc(j, (c[e >> 2] | 0) + (c[j + 8 >> 2] | 0) + ((g | 0) < (2147483644 / (h | 0) | 0 | 0) ? i : -2147483644) | 0);
 } while (0);
 d = j + 104 | 0;
 if (!(c[d >> 2] | 0)) return; else e = 0;
 while (1) {
  if ((e | 0) >= 4) if ((a[f >> 0] | 0) != 5) {
   i = 18;
   break;
  }
  ob(b, 1);
  if (!(c[d >> 2] | 0)) {
   i = 18;
   break;
  } else e = e + 1 | 0;
 }
 if ((i | 0) == 18) return;
}

function dn(a) {
 a = +a;
 var b = 0, d = 0, e = 0.0, f = 0.0;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] | 0;
 d = b & 2147483647;
 if (d >>> 0 > 1072693247) if (!(d + -1072693248 | c[k >> 2])) {
  a = (b | 0) < 0 ? 3.141592653589793 : 0.0;
  return +a;
 } else {
  a = 0.0 / (a - a);
  return +a;
 }
 if (d >>> 0 < 1071644672) {
  if (d >>> 0 < 1012924417) {
   a = 1.5707963267948966;
   return +a;
  }
  e = a * a;
  a = 1.5707963267948966 - (a - (6.123233995736766e-17 - e * (e * (e * (e * (e * (e * 3.479331075960212e-05 + 7.915349942898145e-04) + -.04005553450067941) + .20121253213486293) + -.3255658186224009) + .16666666666666666) / (e * (e * (e * (e * .07703815055590194 + -.6882839716054533) + 2.0209457602335057) + -2.403394911734414) + 1.0) * a));
  return +a;
 }
 if ((b | 0) < 0) {
  a = (a + 1.0) * .5;
  e = +F(+a);
  e = (1.5707963267948966 - (e + (a * (a * (a * (a * (a * (a * 3.479331075960212e-05 + 7.915349942898145e-04) + -.04005553450067941) + .20121253213486293) + -.3255658186224009) + .16666666666666666) / (a * (a * (a * (a * .07703815055590194 + -.6882839716054533) + 2.0209457602335057) + -2.403394911734414) + 1.0) * e + -6.123233995736766e-17))) * 2.0;
  return +e;
 } else {
  f = (1.0 - a) * .5;
  a = +F(+f);
  h[k >> 3] = a;
  d = c[k + 4 >> 2] | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = d;
  e = +h[k >> 3];
  e = (e + (f * (f * (f * (f * (f * (f * 3.479331075960212e-05 + 7.915349942898145e-04) + -.04005553450067941) + .20121253213486293) + -.3255658186224009) + .16666666666666666) / (f * (f * (f * (f * .07703815055590194 + -.6882839716054533) + 2.0209457602335057) + -2.403394911734414) + 1.0) * a + (f - e * e) / (a + e))) * 2.0;
  return +e;
 }
 return 0.0;
}

function Xe(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 if ((c[b + 20 >> 2] | 0) == (e | 0)) {
  c[b + 24 >> 2] = e;
  f = b + 28 | 0;
  if ((d | 0) == -1) return;
  g = c[f >> 2] | 0;
  if ((g | 0) == -1) {
   c[f >> 2] = d;
   return;
  }
  j = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
  while (1) {
   i = j + (g << 2) | 0;
   h = c[i >> 2] | 0;
   f = (h >>> 14) + -131071 | 0;
   f = (f | 0) == -1 ? -1 : g + 1 + f | 0;
   if ((f | 0) == -1) break; else g = f;
  }
  f = ~g + d | 0;
  if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) ae(c[b + 12 >> 2] | 0, 6980);
  c[i >> 2] = (f << 14) + 2147467264 | h & 16383;
  return;
 }
 if ((d | 0) == -1) return;
 k = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 j = d;
 while (1) {
  d = k + (j << 2) | 0;
  i = c[d >> 2] | 0;
  g = (i >>> 14) + -131071 | 0;
  h = j;
  j = (g | 0) == -1 ? -1 : j + 1 + g | 0;
  if ((h | 0) > 0) {
   f = d + -4 | 0;
   g = c[f >> 2] | 0;
   if ((a[3916 + (g & 63) >> 0] | 0) >= 0) l = 14;
  } else l = 14;
  if ((l | 0) == 14) {
   l = 0;
   f = d;
   g = i;
  }
  if ((g & 63 | 0) == 28) {
   c[f >> 2] = g & 8372224 | g >>> 23 << 6 | 27;
   f = ~h + e | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
    l = 17;
    break;
   }
   f = c[d >> 2] & 16383 | (f << 14) + 2147467264;
  } else {
   f = ~h + e | 0;
   if ((((f | 0) > -1 ? f : 0 - f | 0) | 0) > 131071) {
    l = 20;
    break;
   }
   f = i & 16383 | (f << 14) + 2147467264;
  }
  c[d >> 2] = f;
  if ((j | 0) == -1) {
   l = 23;
   break;
  }
 }
 if ((l | 0) == 17) ae(c[b + 12 >> 2] | 0, 6980); else if ((l | 0) == 20) ae(c[b + 12 >> 2] | 0, 6980); else if ((l | 0) == 23) return;
}

function lb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 e = i;
 i = i + 16 | 0;
 g = e;
 f = c[b + 12 >> 2] | 0;
 j = mb(b, 0, 0, 640) | 0;
 c[b + 28 >> 2] = j;
 c[b + 32 >> 2] = 40;
 k = j + 8 | 0;
 c[k >> 2] = 0;
 c[j + 24 >> 2] = 0;
 c[j + 40 >> 2] = 0;
 c[j + 56 >> 2] = 0;
 c[j + 72 >> 2] = 0;
 c[j + 88 >> 2] = 0;
 c[j + 104 >> 2] = 0;
 c[j + 120 >> 2] = 0;
 c[j + 136 >> 2] = 0;
 c[j + 152 >> 2] = 0;
 c[j + 168 >> 2] = 0;
 c[j + 184 >> 2] = 0;
 c[j + 200 >> 2] = 0;
 c[j + 216 >> 2] = 0;
 c[j + 232 >> 2] = 0;
 c[j + 248 >> 2] = 0;
 c[j + 264 >> 2] = 0;
 c[j + 280 >> 2] = 0;
 c[j + 296 >> 2] = 0;
 c[j + 312 >> 2] = 0;
 c[j + 328 >> 2] = 0;
 c[j + 344 >> 2] = 0;
 c[j + 360 >> 2] = 0;
 c[j + 376 >> 2] = 0;
 c[j + 392 >> 2] = 0;
 c[j + 408 >> 2] = 0;
 c[j + 424 >> 2] = 0;
 c[j + 440 >> 2] = 0;
 c[j + 456 >> 2] = 0;
 c[j + 472 >> 2] = 0;
 c[j + 488 >> 2] = 0;
 c[j + 504 >> 2] = 0;
 c[j + 520 >> 2] = 0;
 c[j + 536 >> 2] = 0;
 c[j + 552 >> 2] = 0;
 c[j + 568 >> 2] = 0;
 c[j + 584 >> 2] = 0;
 c[j + 600 >> 2] = 0;
 c[j + 616 >> 2] = 0;
 c[j + 632 >> 2] = 0;
 c[b + 24 >> 2] = j + 560;
 h = b + 72 | 0;
 c[b + 80 >> 2] = 0;
 c[b + 84 >> 2] = 0;
 a[b + 90 >> 0] = 0;
 c[h >> 2] = j;
 c[b + 8 >> 2] = j + 16;
 c[k >> 2] = 0;
 c[b + 76 >> 2] = j + 336;
 c[b + 16 >> 2] = h;
 h = tc(b) | 0;
 c[f + 40 >> 2] = h;
 c[f + 48 >> 2] = 69;
 qc(b, h, 2, 0);
 c[g >> 2] = b;
 j = g + 8 | 0;
 c[j >> 2] = 72;
 Hc(b, h, 1, g);
 c[g >> 2] = tc(b) | 0;
 c[j >> 2] = 69;
 Hc(b, h, 2, g);
 Ab(b, 32);
 Nc(b);
 Pc(b);
 b = zb(b, 5328, 17) | 0;
 c[f + 180 >> 2] = b;
 b = b + 5 | 0;
 a[b >> 0] = d[b >> 0] | 0 | 32;
 a[f + 63 >> 0] = 1;
 i = e;
 return;
}

function df(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = i;
 i = i + 48 | 0;
 j = m + 24 | 0;
 l = m;
 g = b + 48 | 0;
 k = c[g >> 2] | 0;
 h = b + 16 | 0;
 switch (c[h >> 2] | 0) {
 case 40:
  {
   de(b);
   if ((c[h >> 2] | 0) == 41) c[l >> 2] = 0; else {
    ne(b, l, 0) | 0;
    if ((c[h >> 2] | 0) == 44) do {
     de(b);
     Ae(c[g >> 2] | 0, l);
     ne(b, l, 0) | 0;
    } while ((c[h >> 2] | 0) == 44);
    He(k, l, -1);
    if ((c[h >> 2] | 0) != 41) if ((c[b + 4 >> 2] | 0) == (f | 0)) Be(b, 41); else {
     h = c[b + 52 >> 2] | 0;
     n = Ce(b, 41) | 0;
     g = Ce(b, 40) | 0;
     c[j >> 2] = n;
     c[j + 4 >> 2] = g;
     c[j + 8 >> 2] = f;
     ae(b, $b(h, 7159, j) | 0);
    }
   }
   de(b);
   break;
  }
 case 123:
  {
   ze(b, l);
   break;
  }
 case 289:
  {
   n = xe(k, c[b + 24 >> 2] | 0) | 0;
   c[l + 16 >> 2] = -1;
   c[l + 20 >> 2] = -1;
   c[l >> 2] = 4;
   c[l + 8 >> 2] = n;
   de(b);
   break;
  }
 default:
  ae(b, 7423);
 }
 g = e + 8 | 0;
 h = c[g >> 2] | 0;
 switch (c[l >> 2] | 0) {
 case 0:
  break;
 case 13:
 case 12:
  {
   n = 0;
   n = ye(k, 29, h, n, 2) | 0;
   l = e + 16 | 0;
   c[l >> 2] = -1;
   l = e + 20 | 0;
   c[l >> 2] = -1;
   c[e >> 2] = 12;
   c[g >> 2] = n;
   ef(k, f);
   f = h + 1 | 0;
   f = f & 255;
   n = k + 48 | 0;
   a[n >> 0] = f;
   i = m;
   return;
  }
 default:
  Ae(k, l);
 }
 n = (d[k + 48 >> 0] | 0) - h | 0;
 n = ye(k, 29, h, n, 2) | 0;
 l = e + 16 | 0;
 c[l >> 2] = -1;
 l = e + 20 | 0;
 c[l >> 2] = -1;
 c[e >> 2] = 12;
 c[g >> 2] = n;
 ef(k, f);
 f = h + 1 | 0;
 f = f & 255;
 n = k + 48 | 0;
 a[n >> 0] = f;
 i = m;
 return;
}

function Md(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 1088 | 0;
 n = o + 40 | 0;
 j = o + 24 | 0;
 g = o + 8 | 0;
 f = o;
 l = o + 56 | 0;
 h = o + 52 | 0;
 m = (yd(b) | 0) + 1 | 0;
 if (!d) {
  ed(b, 12281, 6) | 0;
  c[l + 4 >> 2] = c[779];
 } else {
  c[f >> 2] = d;
  dd(b, 6385, f) | 0;
  k = fm(d, 9564) | 0;
  c[l + 4 >> 2] = k;
  if (!k) {
   n = yl(c[(Ok() | 0) >> 2] | 0) | 0;
   l = (Tc(b, m, 0) | 0) + 1 | 0;
   c[g >> 2] = 9680;
   c[g + 4 >> 2] = l;
   c[g + 8 >> 2] = n;
   dd(b, 6389, g) | 0;
   Ed(b, m);
   n = 7;
   i = o;
   return n | 0;
  }
 }
 if (Nd(l, h) | 0) {
  k = c[l >> 2] | 0;
  c[l >> 2] = k + 1;
  a[l + 8 + k >> 0] = 10;
 }
 f = c[h >> 2] | 0;
 k = (d | 0) != 0;
 do if (k & (f | 0) == 27) {
  g = l + 4 | 0;
  d = Nm(d, 6406, c[g >> 2] | 0) | 0;
  c[g >> 2] = d;
  if (d | 0) {
   Nd(l, h) | 0;
   f = c[h >> 2] | 0;
   break;
  }
  n = yl(c[(Ok() | 0) >> 2] | 0) | 0;
  l = (Tc(b, m, 0) | 0) + 1 | 0;
  c[j >> 2] = 6409;
  c[j + 4 >> 2] = l;
  c[j + 8 >> 2] = n;
  dd(b, 6389, j) | 0;
  Ed(b, m);
  n = 7;
  i = o;
  return n | 0;
 } while (0);
 if ((f | 0) != -1) {
  j = c[l >> 2] | 0;
  c[l >> 2] = j + 1;
  a[l + 8 + j >> 0] = f;
 }
 h = Pd(b, 6, l, Tc(b, -1, 0) | 0, e) | 0;
 f = c[l + 4 >> 2] | 0;
 g = sm(f) | 0;
 if (k) km(f) | 0;
 if (!g) {
  Ed(b, m);
  n = h;
  i = o;
  return n | 0;
 } else {
  kd(b, m);
  l = yl(c[(Ok() | 0) >> 2] | 0) | 0;
  k = (Tc(b, m, 0) | 0) + 1 | 0;
  c[n >> 2] = 9735;
  c[n + 4 >> 2] = k;
  c[n + 8 >> 2] = l;
  dd(b, 6389, n) | 0;
  Ed(b, m);
  n = 7;
  i = o;
  return n | 0;
 }
 return 0;
}

function $d(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 r = i;
 i = i + 32 | 0;
 o = r + 8 | 0;
 n = r;
 p = c[b >> 2] | 0;
 h = p + 40 | 0;
 g = c[h >> 2] | 0;
 q = b + 47 | 0;
 l = d[q >> 0] | 0;
 if ((l + 1 | 0) >>> 0 > 255) {
  m = b + 12 | 0;
  j = c[(c[m >> 2] | 0) + 52 >> 2] | 0;
  k = c[p + 64 >> 2] | 0;
  if (!k) {
   t = 6600;
   c[o >> 2] = 6646;
   s = o + 4 | 0;
   c[s >> 2] = 255;
   s = o + 8 | 0;
   c[s >> 2] = t;
   s = $b(j, 6614, o) | 0;
   t = c[m >> 2] | 0;
   ae(t, s);
  }
  c[n >> 2] = k;
  s = $b(j, 6580, n) | 0;
  c[o >> 2] = 6646;
  t = o + 4 | 0;
  c[t >> 2] = 255;
  t = o + 8 | 0;
  c[t >> 2] = s;
  t = $b(j, 6614, o) | 0;
  s = c[m >> 2] | 0;
  ae(s, t);
 }
 if ((l | 0) < (g | 0)) h = g; else {
  t = p + 28 | 0;
  c[t >> 2] = ce(c[(c[b + 12 >> 2] | 0) + 52 >> 2] | 0, c[t >> 2] | 0, h, 8, 255, 6646) | 0;
  h = c[h >> 2] | 0;
 }
 j = c[p + 28 >> 2] | 0;
 if ((g | 0) < (h | 0)) do {
  c[j + (g << 3) >> 2] = 0;
  g = g + 1 | 0;
 } while ((g | 0) < (h | 0));
 g = a[q >> 0] | 0;
 t = g & 255;
 a[j + (t << 3) + 4 >> 0] = (c[f >> 2] | 0) == 7 & 1;
 a[j + (t << 3) + 5 >> 0] = c[f + 8 >> 2];
 c[j + (t << 3) >> 2] = e;
 if (!(a[e + 5 >> 0] & 3)) {
  t = g;
  s = t + 1 << 24 >> 24;
  a[q >> 0] = s;
  t = t & 255;
  i = r;
  return t | 0;
 }
 if (!(a[p + 5 >> 0] & 4)) {
  t = g;
  s = t + 1 << 24 >> 24;
  a[q >> 0] = s;
  t = t & 255;
  i = r;
  return t | 0;
 }
 sc(c[(c[b + 12 >> 2] | 0) + 52 >> 2] | 0, p, e);
 t = a[q >> 0] | 0;
 s = t + 1 << 24 >> 24;
 a[q >> 0] = s;
 t = t & 255;
 i = r;
 return t | 0;
}

function ib(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 j = i;
 i = i + 32 | 0;
 f = j + 8 | 0;
 g = j;
 h = Ya[d & 3](e, 0, 8, 400) | 0;
 if (!h) {
  h = 0;
  i = j;
  return h | 0;
 }
 k = h + 112 | 0;
 c[h >> 2] = 0;
 a[h + 4 >> 0] = 8;
 a[h + 172 >> 0] = 33;
 a[h + 5 >> 0] = 1;
 a[h + 174 >> 0] = 0;
 c[h + 12 >> 2] = k;
 c[h + 28 >> 2] = 0;
 c[h + 16 >> 2] = 0;
 c[h + 32 >> 2] = 0;
 c[h + 64 >> 2] = 0;
 b[h + 38 >> 1] = 0;
 c[h + 52 >> 2] = 0;
 a[h + 40 >> 0] = 0;
 c[h + 44 >> 2] = 0;
 a[h + 41 >> 0] = 1;
 c[h + 48 >> 2] = 0;
 c[h + 56 >> 2] = 0;
 b[h + 36 >> 1] = 1;
 a[h + 6 >> 0] = 0;
 c[h + 68 >> 2] = 0;
 c[k >> 2] = d;
 c[h + 116 >> 2] = e;
 c[h + 284 >> 2] = h;
 d = Na(0) | 0;
 c[g >> 2] = d;
 c[f >> 2] = h;
 c[f + 4 >> 2] = g;
 c[f + 8 >> 2] = 15088;
 c[f + 12 >> 2] = 1;
 c[h + 168 >> 2] = jb(f, 16, d) | 0;
 f = h + 224 | 0;
 c[h + 240 >> 2] = f;
 c[h + 244 >> 2] = f;
 a[h + 175 >> 0] = 0;
 f = h + 132 | 0;
 c[h + 160 >> 2] = 0;
 c[h + 256 >> 2] = 0;
 c[h + 264 >> 2] = 0;
 c[h + 280 >> 2] = 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = 0;
 c[f + 12 >> 2] = 0;
 c[h + 288 >> 2] = kb(0) | 0;
 a[h + 173 >> 0] = 5;
 f = h + 120 | 0;
 d = h + 180 | 0;
 g = d + 40 | 0;
 do {
  c[d >> 2] = 0;
  d = d + 4 | 0;
 } while ((d | 0) < (g | 0));
 c[f >> 2] = 400;
 c[h + 124 >> 2] = 0;
 c[h + 268 >> 2] = 200;
 c[h + 272 >> 2] = 200;
 c[h + 276 >> 2] = 200;
 d = h + 364 | 0;
 g = d + 36 | 0;
 do {
  c[d >> 2] = 0;
  d = d + 4 | 0;
 } while ((d | 0) < (g | 0));
 if (!(Mc(h, 1, 0) | 0)) {
  k = h;
  i = j;
  return k | 0;
 }
 Qc(h);
 k = 0;
 i = j;
 return k | 0;
}

function Oe(a) {
 a = a | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 g = c[a + 52 >> 2] | 0;
 h = a + 48 | 0;
 i = c[h >> 2] | 0;
 j = c[i >> 2] | 0;
 Pe(i, 0, 0);
 Qe(i);
 f = i + 20 | 0;
 e = c[f >> 2] | 0;
 if ((e + 1 | 0) >>> 0 > 1073741823) yb(g);
 l = j + 12 | 0;
 k = j + 48 | 0;
 c[l >> 2] = mb(g, c[l >> 2] | 0, c[k >> 2] << 2, e << 2) | 0;
 e = c[f >> 2] | 0;
 c[k >> 2] = e;
 if ((e + 1 | 0) >>> 0 > 1073741823) yb(g);
 k = j + 20 | 0;
 l = j + 52 | 0;
 c[k >> 2] = mb(g, c[k >> 2] | 0, c[l >> 2] << 2, e << 2) | 0;
 c[l >> 2] = c[f >> 2];
 e = i + 32 | 0;
 f = c[e >> 2] | 0;
 if ((f + 1 | 0) >>> 0 > 268435455) yb(g);
 k = j + 8 | 0;
 l = j + 44 | 0;
 c[k >> 2] = mb(g, c[k >> 2] | 0, c[l >> 2] << 4, f << 4) | 0;
 c[l >> 2] = c[e >> 2];
 e = i + 36 | 0;
 f = c[e >> 2] | 0;
 if ((f + 1 | 0) >>> 0 > 1073741823) yb(g);
 k = j + 16 | 0;
 l = j + 56 | 0;
 c[k >> 2] = mb(g, c[k >> 2] | 0, c[l >> 2] << 2, f << 2) | 0;
 c[l >> 2] = c[e >> 2];
 e = i + 44 | 0;
 f = b[e >> 1] | 0;
 if ((f + 1 | 0) >>> 0 > 357913941) yb(g);
 l = j + 24 | 0;
 k = j + 60 | 0;
 c[l >> 2] = mb(g, c[l >> 2] | 0, (c[k >> 2] | 0) * 12 | 0, f * 12 | 0) | 0;
 f = c[e >> 2] | 0;
 c[k >> 2] = f << 16 >> 16;
 k = j + 28 | 0;
 l = j + 40 | 0;
 c[k >> 2] = mb(g, c[k >> 2] | 0, c[l >> 2] << 3, f >>> 24 << 3) | 0;
 c[l >> 2] = d[i + 47 >> 0];
 c[h >> 2] = c[i + 8 >> 2];
 if ((c[a + 16 >> 2] & -2 | 0) == 288) {
  l = c[a + 24 >> 2] | 0;
  Ke(a, l + 16 | 0, c[l + 12 >> 2] | 0) | 0;
 }
 l = g + 8 | 0;
 c[l >> 2] = (c[l >> 2] | 0) + -16;
 if ((c[(c[g + 12 >> 2] | 0) + 12 >> 2] | 0) <= 0) return;
 dc(g);
 return;
}

function dg(e, f, g, h, j, k) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 16 | 0;
 o = q;
 if (!h) m = 0; else {
  m = c[e + 16 >> 2] | 0;
  do if ((h | 0) > 0) {
   h = (c[m >> 2] | 0) + (h << 4) | 0;
   h = h >>> 0 < (c[e + 8 >> 2] | 0) >>> 0 ? h : 15088;
  } else {
   if ((h | 0) >= -1000999) {
    h = (c[e + 8 >> 2] | 0) + (h << 4) | 0;
    break;
   }
   if ((h | 0) == -1001e3) {
    h = (c[e + 12 >> 2] | 0) + 40 | 0;
    break;
   }
   l = -1001e3 - h | 0;
   h = c[m >> 2] | 0;
   if ((c[h + 8 >> 2] | 0) == 22) h = 15088; else {
    h = c[h >> 2] | 0;
    h = (l | 0) > (d[h + 6 >> 0] | 0) ? 15088 : h + 16 + (l + -1 << 4) | 0;
   }
  } while (0);
  m = h - (c[e + 28 >> 2] | 0) | 0;
 }
 n = e + 8 | 0;
 h = (c[n >> 2] | 0) + (~f << 4) | 0;
 c[o >> 2] = h;
 l = h;
 if (!k) p = 13; else if (!(b[e + 36 >> 1] | 0)) {
  o = c[e + 16 >> 2] | 0;
  c[o + 28 >> 2] = k;
  c[o + 24 >> 2] = j;
  c[o + 20 >> 2] = l - (c[e + 28 >> 2] | 0);
  a[o + 36 >> 0] = a[e + 41 >> 0] | 0;
  k = e + 68 | 0;
  j = o + 32 | 0;
  c[j >> 2] = c[k >> 2];
  c[k >> 2] = m;
  m = o + 18 | 0;
  a[m >> 0] = d[m >> 0] | 16;
  sb(e, h, g, 1);
  a[m >> 0] = d[m >> 0] & 239;
  c[k >> 2] = c[j >> 2];
  m = 0;
 } else p = 13;
 if ((p | 0) == 13) {
  c[o + 4 >> 2] = g;
  m = Lc(e, 5, o, l - (c[e + 28 >> 2] | 0) | 0, m) | 0;
 }
 if ((g | 0) != -1) {
  i = q;
  return m | 0;
 }
 l = (c[e + 16 >> 2] | 0) + 4 | 0;
 h = c[n >> 2] | 0;
 if ((c[l >> 2] | 0) >>> 0 >= h >>> 0) {
  i = q;
  return m | 0;
 }
 c[l >> 2] = h;
 i = q;
 return m | 0;
}

function rk(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[f >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  b = c[f >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (g | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 a : do switch (c[b + 8 >> 2] & 63 | 0) {
 case 38:
  {
   b = c[b >> 2] | 0;
   if ((e | 0) <= 0) {
    a = 0;
    return a | 0;
   }
   if ((d[b + 6 >> 0] | 0 | 0) < (e | 0)) {
    a = 0;
    return a | 0;
   } else {
    f = 17772;
    b = b + 16 + (e + -1 << 4) | 0;
    break a;
   }
  }
 case 6:
  {
   b = c[b >> 2] | 0;
   f = c[b + 12 >> 2] | 0;
   if ((e | 0) <= 0) {
    a = 0;
    return a | 0;
   }
   if ((c[f + 40 >> 2] | 0) < (e | 0)) {
    a = 0;
    return a | 0;
   }
   e = e + -1 | 0;
   g = c[(c[b + 16 + (e << 2) >> 2] | 0) + 8 >> 2] | 0;
   b = c[(c[f + 28 >> 2] | 0) + (e << 3) >> 2] | 0;
   if (!b) {
    f = 17772;
    b = g;
   } else {
    f = b + 16 | 0;
    b = g;
   }
   break;
  }
 default:
  {
   a = 0;
   return a | 0;
  }
 } while (0);
 a = a + 8 | 0;
 e = c[a >> 2] | 0;
 i = b;
 h = c[i + 4 >> 2] | 0;
 g = e;
 c[g >> 2] = c[i >> 2];
 c[g + 4 >> 2] = h;
 c[e + 8 >> 2] = c[b + 8 >> 2];
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 a = f;
 return a | 0;
}

function pg(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  g = (c[f >> 2] | 0) + (e << 4) | 0;
  g = g >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? g : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   g = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   g = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - e | 0;
  e = c[f >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) g = 15088; else {
   h = c[e >> 2] | 0;
   g = (g | 0) > (d[h + 6 >> 0] | 0 | 0) ? 15088 : h + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 h = b + 8 | 0;
 e = c[h >> 2] | 0;
 if (!(c[e + -8 >> 2] | 0)) f = 0; else f = c[e + -16 >> 2] | 0;
 e = c[g + 8 >> 2] & 15;
 switch (e | 0) {
 case 5:
  {
   c[(c[g >> 2] | 0) + 8 >> 2] = f;
   if (!f) {
    b = c[h >> 2] | 0;
    b = b + -16 | 0;
    c[h >> 2] = b;
    return 1;
   }
   if (a[f + 5 >> 0] & 3) {
    e = c[g >> 2] | 0;
    if (a[e + 5 >> 0] & 4) rc(b, e);
   }
   qg(b, c[g >> 2] | 0, f);
   b = c[h >> 2] | 0;
   b = b + -16 | 0;
   c[h >> 2] = b;
   return 1;
  }
 case 7:
  {
   c[(c[g >> 2] | 0) + 8 >> 2] = f;
   if (!f) {
    b = c[h >> 2] | 0;
    b = b + -16 | 0;
    c[h >> 2] = b;
    return 1;
   }
   if (a[f + 5 >> 0] & 3) {
    e = c[g >> 2] | 0;
    if (a[e + 5 >> 0] & 4) sc(b, e, f);
   }
   qg(b, c[g >> 2] | 0, f);
   b = c[h >> 2] | 0;
   b = b + -16 | 0;
   c[h >> 2] = b;
   return 1;
  }
 default:
  {
   c[(c[b + 12 >> 2] | 0) + 252 + (e << 2) >> 2] = f;
   b = c[h >> 2] | 0;
   b = b + -16 | 0;
   c[h >> 2] = b;
   return 1;
  }
 }
 return 0;
}

function Mh(a, b, e, f) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 i = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  h = (c[i >> 2] | 0) + (b << 4) | 0;
  h = h >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? h : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   h = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   h = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  g = c[i >> 2] | 0;
  if ((c[g + 8 >> 2] | 0) == 22) h = 15088; else {
   h = c[g >> 2] | 0;
   h = (b | 0) > (d[h + 6 >> 0] | 0 | 0) ? 15088 : h + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 do if ((e | 0) > 0) {
  b = (c[i >> 2] | 0) + (e << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - e | 0;
  b = c[i >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) {
   f = 0;
   return f | 0;
  } else {
   b = c[b >> 2] | 0;
   b = (g | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (g + -1 << 4) | 0;
   break;
  }
 } while (0);
 if (!((h | 0) != 15088 & (b | 0) != 15088)) {
  f = 0;
  return f | 0;
 }
 switch (f | 0) {
 case 0:
  {
   if ((c[h + 8 >> 2] | 0) == (c[b + 8 >> 2] | 0)) b = (lc(a, h, b) | 0) != 0; else b = 0;
   f = b & 1;
   return f | 0;
  }
 case 1:
  {
   f = Cc(a, h, b) | 0;
   return f | 0;
  }
 case 2:
  {
   f = Ec(a, h, b) | 0;
   return f | 0;
  }
 default:
  {
   f = 0;
   return f | 0;
  }
 }
 return 0;
}

function ve(b, e, f, g, i) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 i = i | 0;
 var j = 0.0, k = 0, l = 0, m = 0;
 if ((c[f >> 2] | 0) == 5) if ((c[f + 16 >> 2] | 0) == -1) if ((c[f + 20 >> 2] | 0) == -1) if ((c[g >> 2] | 0) == 5) if ((c[g + 16 >> 2] | 0) == -1) if ((c[g + 20 >> 2] | 0) == -1) {
  j = +h[g + 8 >> 3];
  if (!((e | 1 | 0) == 17 & j == 0.0)) {
   i = f + 8 | 0;
   h[i >> 3] = +xc(e + -13 | 0, +h[i >> 3], j);
   return;
  }
 }
 switch (e | 0) {
 case 19:
 case 21:
  {
   m = 0;
   break;
  }
 default:
  m = we(b, g) | 0;
 }
 l = we(b, f) | 0;
 if ((l | 0) > (m | 0)) {
  if ((c[f >> 2] | 0) == 6) {
   k = c[f + 8 >> 2] | 0;
   if (!(k & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (k | 0)) {
    k = b + 48 | 0;
    a[k >> 0] = (a[k >> 0] | 0) + -1 << 24 >> 24;
   }
  }
  if ((c[g >> 2] | 0) == 6) {
   k = c[g + 8 >> 2] | 0;
   if (!(k & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (k | 0)) {
    g = b + 48 | 0;
    a[g >> 0] = (a[g >> 0] | 0) + -1 << 24 >> 24;
   }
  }
 } else {
  if ((c[g >> 2] | 0) == 6) {
   k = c[g + 8 >> 2] | 0;
   if (!(k & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (k | 0)) {
    g = b + 48 | 0;
    a[g >> 0] = (a[g >> 0] | 0) + -1 << 24 >> 24;
   }
  }
  if ((c[f >> 2] | 0) == 6) {
   k = c[f + 8 >> 2] | 0;
   if (!(k & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (k | 0)) {
    g = b + 48 | 0;
    a[g >> 0] = (a[g >> 0] | 0) + -1 << 24 >> 24;
   }
  }
 }
 c[f + 8 >> 2] = re(b, m << 14 | e | l << 23) | 0;
 c[f >> 2] = 11;
 c[(c[(c[b >> 2] | 0) + 20 >> 2] | 0) + ((c[b + 20 >> 2] | 0) + -1 << 2) >> 2] = i;
 return;
}

function zb(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 if (f >>> 0 >= 41) {
  if ((f + 1 | 0) >>> 0 > 4294967277) yb(b);
  m = c[(c[b + 12 >> 2] | 0) + 56 >> 2] | 0;
  b = Tb(b, 20, f + 17 | 0, 0, 0) | 0;
  c[b + 12 >> 2] = f;
  c[b + 8 >> 2] = m;
  a[b + 6 >> 0] = 0;
  m = b + 16 | 0;
  sn(m | 0, e | 0, f | 0) | 0;
  a[m + f >> 0] = 0;
  e = b;
  return e | 0;
 }
 j = c[b + 12 >> 2] | 0;
 g = c[j + 56 >> 2] ^ f;
 i = (f >>> 5) + 1 | 0;
 if (i >>> 0 <= f >>> 0) {
  h = f;
  do {
   g = (g << 5) + (g >>> 2) + (d[e + (h + -1) >> 0] | 0) ^ g;
   h = h - i | 0;
  } while (h >>> 0 >= i >>> 0);
 }
 k = j + 32 | 0;
 l = c[k >> 2] | 0;
 m = j + 24 | 0;
 h = c[m >> 2] | 0;
 i = c[h + ((l + -1 & g) << 2) >> 2] | 0;
 a : do if (i | 0) {
  while (1) {
   if ((g | 0) == (c[i + 8 >> 2] | 0)) if ((c[i + 12 >> 2] | 0) == (f | 0)) if (!(Ml(e, i + 16 | 0, f) | 0)) break;
   i = c[i >> 2] | 0;
   if (!i) break a;
  }
  g = i + 5 | 0;
  h = (d[g >> 0] | 0) ^ 3;
  if (((d[j + 60 >> 0] | 0) ^ 3) & h | 0) {
   e = i;
   return e | 0;
  }
  a[g >> 0] = h;
  e = i;
  return e | 0;
 } while (0);
 j = j + 28 | 0;
 if ((l | 0) < 1073741823 ? (c[j >> 2] | 0) >>> 0 >= l >>> 0 : 0) {
  Ab(b, l << 1);
  i = c[k >> 2] | 0;
  h = c[m >> 2] | 0;
 } else i = l;
 b = Tb(b, 4, f + 17 | 0, h + ((i + -1 & g) << 2) | 0, 0) | 0;
 c[b + 12 >> 2] = f;
 c[b + 8 >> 2] = g;
 a[b + 6 >> 0] = 0;
 m = b + 16 | 0;
 sn(m | 0, e | 0, f | 0) | 0;
 a[m + f >> 0] = 0;
 c[j >> 2] = (c[j >> 2] | 0) + 1;
 e = b;
 return e | 0;
}

function be(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 r = i;
 i = i + 128 | 0;
 q = r + 48 | 0;
 h = r + 40 | 0;
 g = r + 32 | 0;
 f = r + 24 | 0;
 m = r + 16 | 0;
 n = r;
 r = r + 56 | 0;
 _b(r, (c[b + 68 >> 2] | 0) + 16 | 0, 60);
 p = b + 52 | 0;
 o = c[p >> 2] | 0;
 j = c[b + 4 >> 2] | 0;
 c[n >> 2] = r;
 c[n + 4 >> 2] = j;
 c[n + 8 >> 2] = d;
 n = $b(o, 6655, n) | 0;
 if (!e) {
  r = c[p >> 2] | 0;
  wb(r, 3);
 }
 o = c[p >> 2] | 0;
 do if ((e + -287 | 0) >>> 0 < 3) {
  f = b + 60 | 0;
  g = c[f >> 2] | 0;
  e = g + 4 | 0;
  d = c[e >> 2] | 0;
  h = g + 8 | 0;
  j = c[h >> 2] | 0;
  do if ((d + 1 | 0) >>> 0 > j >>> 0) {
   if (j >>> 0 > 2147483645) be(b, 6665, 0);
   d = j << 1;
   if ((d | 0) == -2) yb(o); else {
    l = mb(o, c[g >> 2] | 0, j, d) | 0;
    c[g >> 2] = l;
    c[h >> 2] = d;
    k = c[e >> 2] | 0;
    break;
   }
  } else {
   k = d;
   l = c[g >> 2] | 0;
  } while (0);
  c[e >> 2] = k + 1;
  a[l + k >> 0] = 0;
  d = c[p >> 2] | 0;
  c[m >> 2] = c[c[f >> 2] >> 2];
  d = $b(d, 6690, m) | 0;
 } else {
  if ((e | 0) >= 257) {
   d = c[1292 + (e + -257 << 2) >> 2] | 0;
   if ((e | 0) >= 286) break;
   c[h >> 2] = d;
   d = $b(o, 6690, h) | 0;
   break;
  }
  if (!(a[3999 + (e + 1) >> 0] & 4)) {
   c[g >> 2] = e;
   d = $b(o, 6700, g) | 0;
   break;
  } else {
   c[f >> 2] = e;
   d = $b(o, 6695, f) | 0;
   break;
  }
 } while (0);
 c[q >> 2] = n;
 c[q + 4 >> 2] = d;
 $b(o, 6709, q) | 0;
 r = c[p >> 2] | 0;
 wb(r, 3);
}

function kc(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0;
 j = i;
 i = i + 16 | 0;
 f = j;
 switch (c[e + 8 >> 2] & 63 | 0) {
 case 3:
  {
   h[f >> 3] = +h[e >> 3] + 1.0;
   f = (c[f + 4 >> 2] | 0) + (c[f >> 2] | 0) | 0;
   if ((f | 0) < 0) {
    e = 0 - f | 0;
    f = (f | 0) == (e | 0) ? 0 : e;
   }
   b = (c[b + 16 >> 2] | 0) + (((f | 0) % ((1 << d[b + 7 >> 0]) + -1 | 1 | 0) | 0) << 5) | 0;
   i = j;
   return b | 0;
  }
 case 20:
  {
   f = c[e >> 2] | 0;
   g = f + 6 | 0;
   if (!(a[g >> 0] | 0)) {
    k = f + 8 | 0;
    c[k >> 2] = jb(f + 16 | 0, c[f + 12 >> 2] | 0, c[k >> 2] | 0) | 0;
    a[g >> 0] = 1;
    f = c[e >> 2] | 0;
   }
   k = (c[b + 16 >> 2] | 0) + (((1 << d[b + 7 >> 0]) + -1 & c[f + 8 >> 2]) << 5) | 0;
   i = j;
   return k | 0;
  }
 case 4:
  {
   k = (c[b + 16 >> 2] | 0) + (((1 << d[b + 7 >> 0]) + -1 & c[(c[e >> 2] | 0) + 8 >> 2]) << 5) | 0;
   i = j;
   return k | 0;
  }
 case 1:
  {
   k = (c[b + 16 >> 2] | 0) + (((1 << d[b + 7 >> 0]) + -1 & c[e >> 2]) << 5) | 0;
   i = j;
   return k | 0;
  }
 case 2:
  {
   k = (c[b + 16 >> 2] | 0) + ((((c[e >> 2] | 0) >>> 0) % (((1 << d[b + 7 >> 0]) + -1 | 1) >>> 0) | 0) << 5) | 0;
   i = j;
   return k | 0;
  }
 case 22:
  {
   k = (c[b + 16 >> 2] | 0) + ((((c[e >> 2] | 0) >>> 0) % (((1 << d[b + 7 >> 0]) + -1 | 1) >>> 0) | 0) << 5) | 0;
   i = j;
   return k | 0;
  }
 default:
  {
   k = (c[b + 16 >> 2] | 0) + ((((c[e >> 2] | 0) >>> 0) % (((1 << d[b + 7 >> 0]) + -1 | 1) >>> 0) | 0) << 5) | 0;
   i = j;
   return k | 0;
  }
 }
 return 0;
}

function hm(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 112 | 0;
 n = o + 40 | 0;
 l = o + 24 | 0;
 k = o + 16 | 0;
 g = o;
 m = o + 52 | 0;
 f = a[d >> 0] | 0;
 if (!(zl(15064, f << 24 >> 24, 4) | 0)) {
  c[(Ok() | 0) >> 2] = 22;
  e = 0;
 } else {
  e = Xm(1144) | 0;
  if (!e) e = 0; else {
   h = e;
   j = h + 112 | 0;
   do {
    c[h >> 2] = 0;
    h = h + 4 | 0;
   } while ((h | 0) < (j | 0));
   if (!(Ol(d, 43) | 0)) c[e >> 2] = f << 24 >> 24 == 114 ? 8 : 4;
   if (Ol(d, 101) | 0) {
    c[g >> 2] = b;
    c[g + 4 >> 2] = 2;
    c[g + 8 >> 2] = 1;
    ba(221, g | 0) | 0;
    f = a[d >> 0] | 0;
   }
   if (f << 24 >> 24 == 97) {
    c[k >> 2] = b;
    c[k + 4 >> 2] = 3;
    f = ba(221, k | 0) | 0;
    if (!(f & 1024)) {
     c[l >> 2] = b;
     c[l + 4 >> 2] = 4;
     c[l + 8 >> 2] = f | 1024;
     ba(221, l | 0) | 0;
    }
    d = c[e >> 2] | 128;
    c[e >> 2] = d;
   } else d = c[e >> 2] | 0;
   c[e + 60 >> 2] = b;
   c[e + 44 >> 2] = e + 120;
   c[e + 48 >> 2] = 1024;
   f = e + 75 | 0;
   a[f >> 0] = -1;
   if (!(d & 8)) {
    c[n >> 2] = b;
    c[n + 4 >> 2] = 21505;
    c[n + 8 >> 2] = m;
    if (!(Ea(54, n | 0) | 0)) a[f >> 0] = 10;
   }
   c[e + 32 >> 2] = 4;
   c[e + 36 >> 2] = 1;
   c[e + 40 >> 2] = 2;
   c[e + 12 >> 2] = 141;
   if (!(c[3788] | 0)) c[e + 76 >> 2] = -1;
   Ka(15176);
   f = c[3793] | 0;
   c[e + 56 >> 2] = f;
   if (f | 0) c[f + 52 >> 2] = e;
   c[3793] = e;
   Fa(15176);
  }
 }
 i = o;
 return e | 0;
}

function en(a) {
 a = +a;
 var b = 0.0, d = 0.0, e = 0, f = 0, g = 0.0;
 h[k >> 3] = a;
 e = c[k + 4 >> 2] | 0;
 f = e & 2147483647;
 if (f >>> 0 > 1072693247) if (!(f + -1072693248 | c[k >> 2])) {
  d = a * 1.5707963267948966 + 7.52316384526264e-37;
  return +d;
 } else {
  d = 0.0 / (a - a);
  return +d;
 }
 if (f >>> 0 < 1071644672) {
  if ((f + -1048576 | 0) >>> 0 < 1044381696) {
   d = a;
   return +d;
  }
  d = a * a;
  d = d * (d * (d * (d * (d * (d * 3.479331075960212e-05 + 7.915349942898145e-04) + -.04005553450067941) + .20121253213486293) + -.3255658186224009) + .16666666666666666) / (d * (d * (d * (d * .07703815055590194 + -.6882839716054533) + 2.0209457602335057) + -2.403394911734414) + 1.0) * a + a;
  return +d;
 }
 a = (1.0 - +E(+a)) * .5;
 b = +F(+a);
 d = a * (a * (a * (a * (a * (a * 3.479331075960212e-05 + 7.915349942898145e-04) + -.04005553450067941) + .20121253213486293) + -.3255658186224009) + .16666666666666666) / (a * (a * (a * (a * .07703815055590194 + -.6882839716054533) + 2.0209457602335057) + -2.403394911734414) + 1.0);
 if (f >>> 0 > 1072640818) {
  d = 1.5707963267948966 - ((b + b * d) * 2.0 + -6.123233995736766e-17);
  f = (e | 0) < 0;
  b = -d;
  d = f ? b : d;
  return +d;
 } else {
  h[k >> 3] = b;
  f = c[k + 4 >> 2] | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = f;
  g = +h[k >> 3];
  d = .7853981633974483 - (b * 2.0 * d - (6.123233995736766e-17 - (a - g * g) / (b + g) * 2.0) - (.7853981633974483 - g * 2.0));
  f = (e | 0) < 0;
  b = -d;
  d = f ? b : d;
  return +d;
 }
 return 0.0;
}

function Ud(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 64 | 0;
 g = k + 16 | 0;
 h = k + 34 | 0;
 j = k;
 switch (a[f >> 0] | 0) {
 case 61:
 case 64:
  {
   c[j + 12 >> 2] = f + 1;
   break;
  }
 case 27:
  {
   c[j + 12 >> 2] = 6465;
   break;
  }
 default:
  c[j + 12 >> 2] = f;
 }
 c[j >> 2] = b;
 c[j + 4 >> 2] = d;
 c[j + 8 >> 2] = e;
 c[g >> 2] = 1635077147;
 a[g + 4 >> 0] = 82;
 a[g + 5 >> 0] = 0;
 a[g + 6 >> 0] = 1;
 a[g + 7 >> 0] = 4;
 a[g + 8 >> 0] = 4;
 a[g + 9 >> 0] = 4;
 a[g + 10 >> 0] = 8;
 f = g + 12 | 0;
 a[g + 11 >> 0] = 0;
 a[f >> 0] = a[6479] | 0;
 a[f + 1 >> 0] = a[6480] | 0;
 a[f + 2 >> 0] = a[6481] | 0;
 a[f + 3 >> 0] = a[6482] | 0;
 a[f + 4 >> 0] = a[6483] | 0;
 a[f + 5 >> 0] = a[6484] | 0;
 a[h >> 0] = 27;
 if (Vd(d, h + 1 | 0, 17) | 0) Wd(j, 6486);
 if (!(Ml(g, h, 18) | 0)) {
  g = Ic(b, 1) | 0;
  f = b + 8 | 0;
  h = c[f >> 2] | 0;
  c[h >> 2] = g;
  c[h + 8 >> 2] = 70;
  h = (c[f >> 2] | 0) + 16 | 0;
  c[f >> 2] = h;
  if (((c[b + 24 >> 2] | 0) - h | 0) < 16) vb(b, 0);
  e = Xd(b) | 0;
  d = g + 12 | 0;
  c[d >> 2] = e;
  Yd(j, e);
  d = c[d >> 2] | 0;
  e = c[d + 40 >> 2] | 0;
  if ((e | 0) == 1) {
   b = g;
   i = k;
   return b | 0;
  }
  b = Ic(b, e) | 0;
  c[b + 12 >> 2] = d;
  j = c[f >> 2] | 0;
  c[j + -16 >> 2] = b;
  c[j + -8 >> 2] = 70;
  i = k;
  return b | 0;
 }
 if (Ml(g, h, 4) | 0) Wd(j, 6521);
 if (Ml(g, h, 6) | 0) Wd(j, 6527);
 if (!(Ml(g, h, 12) | 0)) Wd(j, 6560); else Wd(j, 6547);
 return 0;
}

function Pk(a, b, d) {
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
  if (!(c[3787] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = Nk(Sa(146, n | 0) | 0) | 0;
  } else {
   ja(2, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = Nk(Sa(146, m | 0) | 0) | 0;
   aa(0);
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

function Tc(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = a + 16 | 0;
 f = c[h >> 2] | 0;
 i = (b | 0) > 0;
 do if (i) {
  f = (c[f >> 2] | 0) + (b << 4) | 0;
  f = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   f = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   f = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  f = c[f >> 2] | 0;
  if ((c[f + 8 >> 2] | 0) == 22) f = 15088; else {
   f = c[f >> 2] | 0;
   f = (g | 0) > (d[f + 6 >> 0] | 0 | 0) ? 15088 : f + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 do if ((c[f + 8 >> 2] & 15 | 0) != 4) {
  if (!(Uc(a, f) | 0)) {
   if (!e) {
    e = 0;
    return e | 0;
   }
   c[e >> 2] = 0;
   e = 0;
   return e | 0;
  }
  f = a + 12 | 0;
  if ((c[(c[f >> 2] | 0) + 12 >> 2] | 0) > 0) dc(a);
  h = c[h >> 2] | 0;
  if (i) {
   f = (c[h >> 2] | 0) + (b << 4) | 0;
   f = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
   break;
  }
  if ((b | 0) >= -1000999) {
   f = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   f = (c[f >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  f = c[h >> 2] | 0;
  if ((c[f + 8 >> 2] | 0) == 22) f = 15088; else {
   f = c[f >> 2] | 0;
   f = (g | 0) > (d[f + 6 >> 0] | 0 | 0) ? 15088 : f + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 if (!e) f = c[f >> 2] | 0; else {
  f = c[f >> 2] | 0;
  c[e >> 2] = c[f + 12 >> 2];
 }
 e = f + 16 | 0;
 return e | 0;
}

function Fe(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 r = i;
 i = i + 80 | 0;
 q = r + 56 | 0;
 p = r + 48 | 0;
 n = r + 24 | 0;
 o = r;
 e = b + 48 | 0;
 j = c[e >> 2] | 0;
 k = j + 48 | 0;
 l = a[k >> 0] | 0;
 m = b + 16 | 0;
 do if ((c[m >> 2] | 0) == 288) {
  f = d + 28 | 0;
  if ((c[f >> 2] | 0) <= 2147483645) {
   h = c[b + 24 >> 2] | 0;
   de(b);
   h = xe(c[e >> 2] | 0, h) | 0;
   c[n + 16 >> 2] = -1;
   c[n + 20 >> 2] = -1;
   c[n >> 2] = 4;
   c[n + 8 >> 2] = h;
   h = f;
   break;
  }
  e = j + 12 | 0;
  f = c[(c[e >> 2] | 0) + 52 >> 2] | 0;
  g = c[(c[j >> 2] | 0) + 64 >> 2] | 0;
  if (!g) {
   t = 6600;
   c[q >> 2] = 7136;
   s = q + 4 | 0;
   c[s >> 2] = 2147483645;
   s = q + 8 | 0;
   c[s >> 2] = t;
   s = $b(f, 6614, q) | 0;
   t = c[e >> 2] | 0;
   ae(t, s);
  }
  c[p >> 2] = g;
  s = $b(f, 6580, p) | 0;
  c[q >> 2] = 7136;
  t = q + 4 | 0;
  c[t >> 2] = 2147483645;
  t = q + 8 | 0;
  c[t >> 2] = s;
  t = $b(f, 6614, q) | 0;
  s = c[e >> 2] | 0;
  ae(s, t);
 } else {
  de(b);
  ne(b, n, 0) | 0;
  Ge(c[e >> 2] | 0, n);
  if ((c[m >> 2] | 0) == 93) {
   de(b);
   h = d + 28 | 0;
   break;
  } else Be(b, 93);
 } while (0);
 c[h >> 2] = (c[h >> 2] | 0) + 1;
 if ((c[m >> 2] | 0) == 61) {
  de(b);
  t = we(j, n) | 0;
  ne(b, o, 0) | 0;
  s = c[(c[d + 24 >> 2] | 0) + 8 >> 2] | 0;
  ye(j, 10, s, t, we(j, o) | 0) | 0;
  a[k >> 0] = l;
  i = r;
  return;
 } else Be(b, 61);
}

function Wb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 m = i;
 i = i + 32 | 0;
 o = m + 16 | 0;
 n = m;
 m = m + 24 | 0;
 j = c[b + 16 >> 2] | 0;
 c[m >> 2] = 0;
 l = c[1176 + ((c[d + 8 >> 2] & 15) + 1 << 2) >> 2] | 0;
 a : do if (a[j + 18 >> 0] & 1) {
  k = c[c[j >> 2] >> 2] | 0;
  f = a[k + 6 >> 0] | 0;
  b : do if (f << 24 >> 24) {
   g = f & 255;
   f = 0;
   while (1) {
    if ((c[(c[k + 16 + (f << 2) >> 2] | 0) + 8 >> 2] | 0) == (d | 0)) break;
    f = f + 1 | 0;
    if ((f | 0) >= (g | 0)) break b;
   }
   g = c[(c[(c[k + 12 >> 2] | 0) + 28 >> 2] | 0) + (f << 3) >> 2] | 0;
   g = (g | 0) == 0 ? 8259 : g + 16 | 0;
   c[m >> 2] = g;
   f = 4385;
   c[n >> 2] = e;
   h = n + 4 | 0;
   c[h >> 2] = f;
   h = n + 8 | 0;
   c[h >> 2] = g;
   h = n + 12 | 0;
   c[h >> 2] = l;
   tb(b, 4402, n);
  } while (0);
  f = c[j + 24 >> 2] | 0;
  g = c[j + 4 >> 2] | 0;
  h = f;
  if (f >>> 0 < g >>> 0) {
   while (1) {
    if ((f | 0) == (d | 0)) break;
    f = f + 16 | 0;
    if (f >>> 0 >= g >>> 0) break a;
   }
   f = c[k + 12 >> 2] | 0;
   f = Xb(f, ((c[j + 28 >> 2] | 0) - (c[f + 12 >> 2] | 0) >> 2) + -1 | 0, d - h >> 4, m) | 0;
   if (f | 0) {
    d = c[m >> 2] | 0;
    k = f;
    c[n >> 2] = e;
    m = n + 4 | 0;
    c[m >> 2] = k;
    m = n + 8 | 0;
    c[m >> 2] = d;
    m = n + 12 | 0;
    c[m >> 2] = l;
    tb(b, 4402, n);
   }
  }
 } while (0);
 c[o >> 2] = e;
 c[o + 4 >> 2] = l;
 tb(b, 4437, o);
}

function Gd(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 j = b + 16 | 0;
 i = c[j >> 2] | 0;
 do if ((e | 0) > 0) {
  h = (c[i >> 2] | 0) + (e << 4) | 0;
  h = h >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? h : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   h = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   h = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  e = -1001e3 - e | 0;
  g = c[i >> 2] | 0;
  if ((c[g + 8 >> 2] | 0) == 22) h = 15088; else {
   h = c[g >> 2] | 0;
   h = (e | 0) > (d[h + 6 >> 0] | 0 | 0) ? 15088 : h + 16 + (e + -1 << 4) | 0;
  }
 } while (0);
 do if ((f | 0) > 0) {
  e = (c[i >> 2] | 0) + (f << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((f | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (f << 4) | 0;
   break;
  }
  if ((f | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - f | 0;
  e = c[i >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (g | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 k = h;
 i = c[k + 4 >> 2] | 0;
 g = e;
 c[g >> 2] = c[k >> 2];
 c[g + 4 >> 2] = i;
 g = h + 8 | 0;
 c[e + 8 >> 2] = c[g >> 2];
 if ((f | 0) >= -1001e3) return;
 if (!(c[g >> 2] & 64)) return;
 g = c[h >> 2] | 0;
 if (!(a[g + 5 >> 0] & 3)) return;
 e = c[c[c[j >> 2] >> 2] >> 2] | 0;
 if (!(a[e + 5 >> 0] & 4)) return;
 sc(b, e, g);
 return;
}

function Ac(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 j = f + 8 | 0;
 a : do switch (c[j >> 2] & 15 | 0) {
 case 5:
  {
   i = c[f >> 2] | 0;
   g = c[i + 8 >> 2] | 0;
   if (g | 0) if (!(a[g + 6 >> 0] & 16)) {
    g = Gb(g, 4, c[(c[b + 12 >> 2] | 0) + 200 >> 2] | 0) | 0;
    if (g | 0) break a;
   }
   h[e >> 3] = +(Bc(i) | 0);
   c[e + 8 >> 2] = 3;
   return;
  }
 case 4:
  {
   h[e >> 3] = +((c[(c[f >> 2] | 0) + 12 >> 2] | 0) >>> 0);
   c[e + 8 >> 2] = 3;
   return;
  }
 default:
  {
   i = pb(b, f, 4) | 0;
   if (!(c[i + 8 >> 2] | 0)) Wb(b, f, 4875); else g = i;
  }
 } while (0);
 l = b + 28 | 0;
 i = c[l >> 2] | 0;
 k = b + 8 | 0;
 o = c[k >> 2] | 0;
 c[k >> 2] = o + 16;
 p = g;
 n = c[p + 4 >> 2] | 0;
 m = o;
 c[m >> 2] = c[p >> 2];
 c[m + 4 >> 2] = n;
 c[o + 8 >> 2] = c[g + 8 >> 2];
 g = c[k >> 2] | 0;
 c[k >> 2] = g + 16;
 o = f;
 m = c[o + 4 >> 2] | 0;
 n = g;
 c[n >> 2] = c[o >> 2];
 c[n + 4 >> 2] = m;
 c[g + 8 >> 2] = c[j >> 2];
 g = c[k >> 2] | 0;
 c[k >> 2] = g + 16;
 n = f;
 m = c[n + 4 >> 2] | 0;
 f = g;
 c[f >> 2] = c[n >> 2];
 c[f + 4 >> 2] = m;
 c[g + 8 >> 2] = c[j >> 2];
 sb(b, (c[k >> 2] | 0) + -48 | 0, 1, (d[(c[b + 16 >> 2] | 0) + 18 >> 0] | 0) & 1);
 f = (c[l >> 2] | 0) + (e - i) | 0;
 e = c[k >> 2] | 0;
 i = e + -16 | 0;
 c[k >> 2] = i;
 j = c[i + 4 >> 2] | 0;
 b = f;
 c[b >> 2] = c[i >> 2];
 c[b + 4 >> 2] = j;
 c[f + 8 >> 2] = c[e + -8 >> 2];
 return;
}

function ob(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 m = i;
 i = i + 32 | 0;
 n = m + 16 | 0;
 l = m;
 k = c[b + 12 >> 2] | 0;
 f = k + 104 | 0;
 h = c[f >> 2] | 0;
 c[f >> 2] = c[h >> 2];
 f = k + 68 | 0;
 c[h >> 2] = c[f >> 2];
 c[f >> 2] = h;
 f = h + 5 | 0;
 g = d[f >> 0] | 0;
 a[f >> 0] = g & 239;
 if ((d[k + 61 >> 0] | 0) >= 2) a[f >> 0] = (d[k + 60 >> 0] | 0) & 3 | g & 168;
 c[l >> 2] = h;
 j = l + 8 | 0;
 c[j >> 2] = d[h + 4 >> 0] | 0 | 64;
 f = pb(b, l, 2) | 0;
 if (!f) {
  i = m;
  return;
 }
 g = f + 8 | 0;
 if ((c[g >> 2] & 15 | 0) != 6) {
  i = m;
  return;
 }
 p = b + 41 | 0;
 q = a[p >> 0] | 0;
 k = k + 63 | 0;
 o = a[k >> 0] | 0;
 a[p >> 0] = 0;
 a[k >> 0] = 0;
 h = b + 8 | 0;
 r = c[h >> 2] | 0;
 t = f;
 s = c[t + 4 >> 2] | 0;
 f = r;
 c[f >> 2] = c[t >> 2];
 c[f + 4 >> 2] = s;
 c[r + 8 >> 2] = c[g >> 2];
 f = c[h >> 2] | 0;
 r = l;
 g = c[r + 4 >> 2] | 0;
 l = f + 16 | 0;
 c[l >> 2] = c[r >> 2];
 c[l + 4 >> 2] = g;
 c[f + 24 >> 2] = c[j >> 2];
 f = c[h >> 2] | 0;
 c[h >> 2] = f + 32;
 f = Lc(b, 2, 0, f - (c[b + 28 >> 2] | 0) | 0, 0) | 0;
 a[p >> 0] = q;
 a[k >> 0] = o;
 if (!((e | 0) != 0 & (f | 0) != 0)) {
  i = m;
  return;
 }
 if ((f | 0) != 2) {
  t = f;
  wb(b, t);
 }
 f = c[h >> 2] | 0;
 if ((c[f + -8 >> 2] & 15 | 0) == 4) f = (c[f + -16 >> 2] | 0) + 16 | 0; else f = 5070;
 c[n >> 2] = f;
 $b(b, 5081, n) | 0;
 t = 5;
 wb(b, t);
}

function jf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 qe(a, b);
 switch (c[b >> 2] | 0) {
 case 10:
  {
   i = c[b + 8 >> 2] | 0;
   d = 4;
   break;
  }
 case 3:
 case 1:
  break;
 default:
  {
   i = hf(a, b, 1) | 0;
   d = 4;
  }
 }
 do if ((d | 0) == 4) {
  d = b + 16 | 0;
  if ((i | 0) != -1) {
   e = c[d >> 2] | 0;
   if ((e | 0) == -1) {
    c[d >> 2] = i;
    break;
   }
   h = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
   while (1) {
    g = h + (e << 2) | 0;
    f = c[g >> 2] | 0;
    d = (f >>> 14) + -131071 | 0;
    d = (d | 0) == -1 ? -1 : e + 1 + d | 0;
    if ((d | 0) == -1) break; else e = d;
   }
   d = i + ~e | 0;
   if ((((d | 0) > -1 ? d : 0 - d | 0) | 0) > 131071) ae(c[a + 12 >> 2] | 0, 6980); else {
    c[g >> 2] = (d << 14) + 2147467264 | f & 16383;
    break;
   }
  }
 } while (0);
 b = b + 20 | 0;
 i = c[b >> 2] | 0;
 c[a + 24 >> 2] = c[a + 20 >> 2];
 d = a + 28 | 0;
 if ((i | 0) == -1) {
  c[b >> 2] = -1;
  return;
 }
 e = c[d >> 2] | 0;
 if ((e | 0) == -1) {
  c[d >> 2] = i;
  c[b >> 2] = -1;
  return;
 }
 h = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
 while (1) {
  g = h + (e << 2) | 0;
  f = c[g >> 2] | 0;
  d = (f >>> 14) + -131071 | 0;
  d = (d | 0) == -1 ? -1 : e + 1 + d | 0;
  if ((d | 0) == -1) break; else e = d;
 }
 d = i + ~e | 0;
 if ((((d | 0) > -1 ? d : 0 - d | 0) | 0) > 131071) ae(c[a + 12 >> 2] | 0, 6980);
 c[g >> 2] = (d << 14) + 2147467264 | f & 16383;
 c[b >> 2] = -1;
 return;
}

function Ck(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 i = c[e + 96 >> 2] | 0;
 do if (!(a[i + 18 >> 0] & 1)) {
  g = (c[i >> 2] | 0) + 16 | 0;
  j = 7;
 } else {
  if ((f | 0) >= 0) {
   e = c[i + 24 >> 2] | 0;
   g = c[(c[c[i >> 2] >> 2] | 0) + 12 >> 2] | 0;
   g = Yb(g, f, ((c[i + 28 >> 2] | 0) - (c[g + 12 >> 2] | 0) >> 2) + -1 | 0) | 0;
   if (!g) {
    g = e;
    j = 7;
    break;
   } else {
    j = 11;
    break;
   }
  }
  f = 0 - f | 0;
  h = c[i >> 2] | 0;
  e = d[(c[(c[h >> 2] | 0) + 12 >> 2] | 0) + 76 >> 0] | 0;
  if ((((c[i + 24 >> 2] | 0) - h >> 4) - e | 0) > (f | 0)) {
   g = 11696;
   e = h + (e << 4) + (f << 4) | 0;
   break;
  } else {
   j = 0;
   b = b + 8 | 0;
   i = c[b >> 2] | 0;
   i = i + -16 | 0;
   c[b >> 2] = i;
   return j | 0;
  }
 } while (0);
 if ((j | 0) == 7) {
  if ((c[b + 16 >> 2] | 0) == (i | 0)) e = b + 8 | 0; else e = c[i + 12 >> 2] | 0;
  if ((f | 0) > 0 ? ((c[e >> 2] | 0) - g >> 4 | 0) >= (f | 0) : 0) {
   e = g;
   g = 11683;
   j = 11;
  } else {
   j = 0;
   b = b + 8 | 0;
   i = c[b >> 2] | 0;
   i = i + -16 | 0;
   c[b >> 2] = i;
   return j | 0;
  }
 }
 if ((j | 0) == 11) e = e + (f + -1 << 4) | 0;
 j = c[b + 8 >> 2] | 0;
 f = j + -16 | 0;
 h = c[f + 4 >> 2] | 0;
 i = e;
 c[i >> 2] = c[f >> 2];
 c[i + 4 >> 2] = h;
 c[e + 8 >> 2] = c[j + -8 >> 2];
 j = g;
 b = b + 8 | 0;
 i = c[b >> 2] | 0;
 i = i + -16 | 0;
 c[b >> 2] = i;
 return j | 0;
}

function nk(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 if (!e) {
  e = c[b + 8 >> 2] | 0;
  if ((c[e + -8 >> 2] | 0) != 70) {
   b = 0;
   return b | 0;
  }
  b = Yb(c[(c[e + -16 >> 2] | 0) + 12 >> 2] | 0, f, 0) | 0;
  return b | 0;
 }
 i = c[e + 96 >> 2] | 0;
 do if (!(a[i + 18 >> 0] & 1)) {
  g = (c[i >> 2] | 0) + 16 | 0;
  j = 10;
 } else {
  if ((f | 0) >= 0) {
   e = c[i + 24 >> 2] | 0;
   g = c[(c[c[i >> 2] >> 2] | 0) + 12 >> 2] | 0;
   g = Yb(g, f, ((c[i + 28 >> 2] | 0) - (c[g + 12 >> 2] | 0) >> 2) + -1 | 0) | 0;
   if (!g) {
    g = e;
    j = 10;
    break;
   } else {
    j = 14;
    break;
   }
  }
  e = 0 - f | 0;
  h = c[i >> 2] | 0;
  f = d[(c[(c[h >> 2] | 0) + 12 >> 2] | 0) + 76 >> 0] | 0;
  if ((((c[i + 24 >> 2] | 0) - h >> 4) - f | 0) > (e | 0)) {
   g = 11696;
   e = h + (f << 4) + (e << 4) | 0;
   break;
  } else {
   b = 0;
   return b | 0;
  }
 } while (0);
 if ((j | 0) == 10) {
  if ((c[b + 16 >> 2] | 0) == (i | 0)) e = b + 8 | 0; else e = c[i + 12 >> 2] | 0;
  if ((f | 0) > 0 ? ((c[e >> 2] | 0) - g >> 4 | 0) >= (f | 0) : 0) {
   e = g;
   g = 11683;
   j = 14;
  } else {
   b = 0;
   return b | 0;
  }
 }
 if ((j | 0) == 14) e = e + (f + -1 << 4) | 0;
 b = b + 8 | 0;
 j = c[b >> 2] | 0;
 f = e;
 h = c[f + 4 >> 2] | 0;
 i = j;
 c[i >> 2] = c[f >> 2];
 c[i + 4 >> 2] = h;
 c[j + 8 >> 2] = c[e + 8 >> 2];
 c[b >> 2] = (c[b >> 2] | 0) + 16;
 b = g;
 return b | 0;
}

function vk(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 i = c[a + 16 >> 2] | 0;
 h = (b | 0) > 0;
 do if (h) {
  f = (c[i >> 2] | 0) + (b << 4) | 0;
  f = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   f = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   f = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  g = c[i >> 2] | 0;
  if ((c[g + 8 >> 2] | 0) == 22) f = 15088; else {
   g = c[g >> 2] | 0;
   f = (f | 0) > (d[g + 6 >> 0] | 0 | 0) ? 15088 : g + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 switch (c[f + 8 >> 2] & 63 | 0) {
 case 6:
  {
   do if (h) {
    f = (c[i >> 2] | 0) + (b << 4) | 0;
    f = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
   } else {
    if ((b | 0) >= -1000999) {
     f = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
     break;
    }
    if ((b | 0) == -1001e3) {
     f = (c[a + 12 >> 2] | 0) + 40 | 0;
     break;
    }
    g = -1001e3 - b | 0;
    f = c[i >> 2] | 0;
    if ((c[f + 8 >> 2] | 0) == 22) f = 15088; else {
     f = c[f >> 2] | 0;
     f = (g | 0) > (d[f + 6 >> 0] | 0 | 0) ? 15088 : f + 16 + (g + -1 << 4) | 0;
    }
   } while (0);
   e = c[(c[f >> 2] | 0) + 16 + (e + -1 << 2) >> 2] | 0;
   return e | 0;
  }
 case 38:
  {
   e = (c[f >> 2] | 0) + 16 + (e + -1 << 4) | 0;
   return e | 0;
  }
 default:
  {
   e = 0;
   return e | 0;
  }
 }
 return 0;
}

function we(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0.0, m = 0, n = 0;
 k = i;
 i = i + 32 | 0;
 g = k + 16 | 0;
 j = k;
 if ((c[b + 16 >> 2] | 0) == (c[b + 20 >> 2] | 0)) qe(a, b); else pe(a, b) | 0;
 e = c[b >> 2] | 0;
 switch (e | 0) {
 case 1:
 case 3:
 case 2:
  {
   if ((c[a + 32 >> 2] | 0) < 256) {
    if ((e | 0) == 1) {
     c[j + 8 >> 2] = 0;
     c[g >> 2] = c[a + 4 >> 2];
     c[g + 8 >> 2] = 69;
     e = ue(a, g, j) | 0;
    } else {
     c[g >> 2] = (e | 0) == 2 & 1;
     c[g + 8 >> 2] = 1;
     e = ue(a, g, g) | 0;
    }
    c[b + 8 >> 2] = e;
    c[b >> 2] = 4;
    b = e | 256;
    i = k;
    return b | 0;
   }
   break;
  }
 case 5:
  {
   f = b + 8 | 0;
   l = +h[f >> 3];
   h[g >> 3] = l;
   e = c[(c[a + 12 >> 2] | 0) + 52 >> 2] | 0;
   h[j >> 3] = l;
   c[j + 8 >> 2] = 3;
   if (l != l | 0.0 != 0.0 | l == 0.0) {
    m = e + 8 | 0;
    n = c[m >> 2] | 0;
    c[m >> 2] = n + 16;
    e = zb(e, g, 8) | 0;
    c[n >> 2] = e;
    c[n + 8 >> 2] = d[e + 4 >> 0] | 0 | 64;
    e = ue(a, (c[m >> 2] | 0) + -16 | 0, j) | 0;
    c[m >> 2] = (c[m >> 2] | 0) + -16;
   } else e = ue(a, j, j) | 0;
   c[f >> 2] = e;
   c[b >> 2] = 4;
   f = 15;
   break;
  }
 case 4:
  {
   e = c[b + 8 >> 2] | 0;
   f = 15;
   break;
  }
 default:
  {}
 }
 if ((f | 0) == 15) if ((e | 0) < 256) {
  n = e | 256;
  i = k;
  return n | 0;
 }
 n = pe(a, b) | 0;
 i = k;
 return n | 0;
}

function Lc(e, f, g, h, i) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 k = e + 16 | 0;
 j = c[k >> 2] | 0;
 l = e + 41 | 0;
 m = a[l >> 0] | 0;
 n = e + 36 | 0;
 o = b[n >> 1] | 0;
 p = e + 68 | 0;
 q = c[p >> 2] | 0;
 c[p >> 2] = i;
 g = Mc(e, f, g) | 0;
 if (!g) {
  c[p >> 2] = q;
  return g | 0;
 }
 f = e + 28 | 0;
 i = (c[f >> 2] | 0) + h | 0;
 Pb(e, i);
 switch (g | 0) {
 case 4:
  {
   h = c[(c[e + 12 >> 2] | 0) + 180 >> 2] | 0;
   c[i >> 2] = h;
   c[i + 8 >> 2] = d[h + 4 >> 0] | 0 | 64;
   break;
  }
 case 6:
  {
   h = zb(e, 5046, 23) | 0;
   c[i >> 2] = h;
   c[i + 8 >> 2] = d[h + 4 >> 0] | 0 | 64;
   break;
  }
 default:
  {
   h = c[e + 8 >> 2] | 0;
   t = h + -16 | 0;
   s = c[t + 4 >> 2] | 0;
   r = i;
   c[r >> 2] = c[t >> 2];
   c[r + 4 >> 2] = s;
   c[i + 8 >> 2] = c[h + -8 >> 2];
  }
 }
 i = i + 16 | 0;
 c[e + 8 >> 2] = i;
 c[k >> 2] = j;
 a[l >> 0] = m;
 b[n >> 1] = o;
 if (j) do {
  t = c[j + 4 >> 2] | 0;
  i = i >>> 0 < t >>> 0 ? t : i;
  j = c[j + 8 >> 2] | 0;
 } while ((j | 0) != 0);
 t = i - (c[f >> 2] | 0) | 0;
 i = t >> 4;
 i = i + 11 + ((i + 1 | 0) / 8 | 0) | 0;
 i = (i | 0) > 1e6 ? 1e6 : i;
 if ((t | 0) > 15999984) {
  c[p >> 2] = q;
  return g | 0;
 }
 if ((i | 0) >= (c[e + 32 >> 2] | 0)) {
  c[p >> 2] = q;
  return g | 0;
 }
 xb(e, i);
 c[p >> 2] = q;
 return g | 0;
}

function ue(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 p = i;
 i = i + 16 | 0;
 f = p;
 o = c[(c[b + 12 >> 2] | 0) + 52 >> 2] | 0;
 k = he(o, c[b + 4 >> 2] | 0, d) | 0;
 n = c[b >> 2] | 0;
 l = k + 8 | 0;
 if ((c[l >> 2] | 0) == 3) {
  h[f >> 3] = +h[k >> 3] + 6755399441055744.0;
  d = c[f >> 2] | 0;
  f = c[n + 8 >> 2] | 0;
  if ((c[f + (d << 4) + 8 >> 2] | 0) == (c[e + 8 >> 2] | 0)) if (lc(0, f + (d << 4) | 0, e) | 0) {
   o = d;
   i = p;
   return o | 0;
  }
 }
 g = n + 44 | 0;
 d = c[g >> 2] | 0;
 j = b + 32 | 0;
 m = c[j >> 2] | 0;
 h[k >> 3] = +(m | 0);
 c[l >> 2] = 3;
 if ((m | 0) < (d | 0)) f = d; else {
  f = n + 8 | 0;
  c[f >> 2] = ce(o, c[f >> 2] | 0, g, 16, 67108863, 7015) | 0;
  f = c[g >> 2] | 0;
 }
 b = c[n + 8 >> 2] | 0;
 if ((d | 0) < (f | 0)) {
  f = c[g >> 2] | 0;
  do {
   c[b + (d << 4) + 8 >> 2] = 0;
   d = d + 1 | 0;
  } while ((d | 0) < (f | 0));
 }
 g = e;
 k = c[g + 4 >> 2] | 0;
 l = b + (m << 4) | 0;
 c[l >> 2] = c[g >> 2];
 c[l + 4 >> 2] = k;
 l = e + 8 | 0;
 c[b + (m << 4) + 8 >> 2] = c[l >> 2];
 c[j >> 2] = (c[j >> 2] | 0) + 1;
 if (!(c[l >> 2] & 64)) {
  o = m;
  i = p;
  return o | 0;
 }
 d = c[e >> 2] | 0;
 if (!(a[d + 5 >> 0] & 3)) {
  o = m;
  i = p;
  return o | 0;
 }
 if (!(a[n + 5 >> 0] & 4)) {
  o = m;
  i = p;
  return o | 0;
 }
 sc(o, n, d);
 o = m;
 i = p;
 return o | 0;
}

function fn(a) {
 a = +a;
 var b = 0, d = 0.0, e = 0.0, f = 0;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] | 0;
 f = qn(c[k >> 2] | 0, b | 0, 63) | 0;
 b = b & 2147483647;
 if (b >>> 0 > 1141899263) {
  e = +E(+a);
  h[k >> 3] = e;
  b = c[k + 4 >> 2] | 0;
  if (b >>> 0 > 2146435072 | (b | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0) {
   e = a;
   return +e;
  }
  e = f | 0 ? -1.5707963267948966 : 1.5707963267948966;
  return +e;
 }
 do if (b >>> 0 < 1071382528) if (b >>> 0 < 1044381696) {
  e = a;
  return +e;
 } else b = -1; else {
  a = +E(+a);
  if (b >>> 0 < 1072889856) if (b >>> 0 < 1072037888) {
   a = (a * 2.0 + -1.0) / (a + 2.0);
   b = 0;
   break;
  } else {
   a = (a + -1.0) / (a + 1.0);
   b = 1;
   break;
  } else if (b >>> 0 < 1073971200) {
   a = (a + -1.5) / (a * 1.5 + 1.0);
   b = 2;
   break;
  } else {
   a = -1.0 / a;
   b = 3;
   break;
  }
 } while (0);
 d = a * a;
 e = d * d;
 d = d * (e * (e * (e * (e * (e * .016285820115365782 + .049768779946159324) + .06661073137387531) + .09090887133436507) + .14285714272503466) + .3333333333333293);
 e = e * (e * (e * (e * (-.058335701337905735 - e * .036531572744216916) + -.0769187620504483) + -.11111110405462356) + -.19999999999876483);
 if ((b | 0) < 0) {
  e = a - a * (e + d);
  return +e;
 } else {
  e = +h[1096 + (b << 3) >> 3] - (a * (e + d) - +h[1128 + (b << 3) >> 3] - a);
  e = f | 0 ? -e : e;
  return +e;
 }
 return 0.0;
}

function Pm(a) {
 a = +a;
 var b = 0, d = 0, e = 0, f = 0, g = 0.0, i = 0.0, j = 0.0, l = 0.0, m = 0.0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 b = c[k + 4 >> 2] | 0;
 e = (b | 0) < 0;
 do if (e | b >>> 0 < 1048576) {
  g = +E(+a);
  h[k >> 3] = g;
  if ((c[k >> 2] | 0) == 0 & (c[k + 4 >> 2] | 0) == 0) {
   a = -1.0 / (a * a);
   break;
  }
  if (e) {
   a = (a - a) / 0.0;
   break;
  } else {
   h[k >> 3] = a * 18014398509481984.0;
   b = c[k + 4 >> 2] | 0;
   e = c[k >> 2] | 0;
   d = -1077;
   f = 9;
   break;
  }
 } else if (b >>> 0 <= 2146435071) if ((d | 0) == 0 & 0 == 0 & (b | 0) == 1072693248) a = 0.0; else {
  e = d;
  d = -1023;
  f = 9;
 } while (0);
 if ((f | 0) == 9) {
  f = b + 614242 | 0;
  c[k >> 2] = e;
  c[k + 4 >> 2] = (f & 1048575) + 1072079006;
  j = +h[k >> 3] + -1.0;
  i = j * (j * .5);
  l = j / (j + 2.0);
  m = l * l;
  a = m * m;
  h[k >> 3] = j - i;
  e = c[k + 4 >> 2] | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = e;
  g = +h[k >> 3];
  a = j - g - i + l * (i + (a * (a * (a * .15313837699209373 + .22222198432149784) + .3999999999940942) + m * (a * (a * (a * .14798198605116586 + .1818357216161805) + .2857142874366239) + .6666666666666735)));
  m = g * .4342944818781689;
  i = +(d + (f >>> 20) | 0);
  l = i * .30102999566361177;
  j = l + m;
  a = j + (m + (l - j) + (a * .4342944818781689 + (i * 3.694239077158931e-13 + (g + a) * 2.5082946711645275e-11)));
 }
 return +a;
}

function tk(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0;
 k = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  e = (c[k >> 2] | 0) + (e << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  e = -1001e3 - e | 0;
  i = c[k >> 2] | 0;
  if ((c[i + 8 >> 2] | 0) == 22) e = 15088; else {
   j = c[i >> 2] | 0;
   e = (e | 0) > (d[j + 6 >> 0] | 0 | 0) ? 15088 : j + 16 + (e + -1 << 4) | 0;
  }
 } while (0);
 j = c[e >> 2] | 0;
 f = j + 16 + (f + -1 << 2) | 0;
 do if ((g | 0) > 0) {
  e = (c[k >> 2] | 0) + (g << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((g | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (g << 4) | 0;
   break;
  }
  if ((g | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  i = -1001e3 - g | 0;
  e = c[k >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (i | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (i + -1 << 4) | 0;
  }
 } while (0);
 e = (c[e >> 2] | 0) + 16 + (h + -1 << 2) | 0;
 c[f >> 2] = c[e >> 2];
 e = c[e >> 2] | 0;
 if (!(a[e + 5 >> 0] & 3)) return;
 if (!(a[j + 5 >> 0] & 4)) return;
 sc(b, j, e);
 return;
}

function dm(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 if ((c[f + 76 >> 2] | 0) > -1) m = Fl(f) | 0; else m = 0;
 g = e + -1 | 0;
 if ((e | 0) < 2) {
  n = f + 74 | 0;
  l = a[n >> 0] | 0;
  a[n >> 0] = l + 255 | l;
  if (m | 0) Rk(f);
  if (!g) a[b >> 0] = 0; else b = 0;
 } else {
  a : do if (!g) {
   e = b;
   n = 17;
  } else {
   k = f + 4 | 0;
   l = f + 8 | 0;
   e = b;
   while (1) {
    h = c[k >> 2] | 0;
    j = h;
    p = (c[l >> 2] | 0) - j | 0;
    i = zl(h, 10, p) | 0;
    o = (i | 0) == 0;
    i = o ? p : 1 - j + i | 0;
    j = i >>> 0 < g >>> 0;
    i = j ? i : g;
    sn(e | 0, h | 0, i | 0) | 0;
    h = (c[k >> 2] | 0) + i | 0;
    c[k >> 2] = h;
    e = e + i | 0;
    i = g - i | 0;
    if (!(o & j)) {
     n = 17;
     break a;
    }
    if (h >>> 0 < (c[l >> 2] | 0) >>> 0) {
     c[k >> 2] = h + 1;
     j = d[h >> 0] | 0;
    } else {
     g = bl(f) | 0;
     if ((g | 0) < 0) break; else j = g;
    }
    g = i + -1 | 0;
    h = e + 1 | 0;
    a[e >> 0] = j;
    if (!((g | 0) != 0 & (j & 255 | 0) != 10)) {
     e = h;
     n = 17;
     break a;
    } else e = h;
   }
   if ((e | 0) == (b | 0)) b = 0; else if (!(c[f >> 2] & 16)) b = 0; else n = 17;
  } while (0);
  if ((n | 0) == 17) if (!b) b = 0; else a[e >> 0] = 0;
  if (m) Rk(f);
 }
 return b | 0;
}

function lf(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0;
 i = we(b, g) | 0;
 j = we(b, h) | 0;
 if ((c[h >> 2] | 0) == 6) {
  h = c[h + 8 >> 2] | 0;
  if (!(h & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (h | 0)) {
   l = b + 48 | 0;
   a[l >> 0] = (a[l >> 0] | 0) + -1 << 24 >> 24;
  }
 }
 if ((c[g >> 2] | 0) == 6) {
  h = c[g + 8 >> 2] | 0;
  if (!(h & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (h | 0)) {
   l = b + 48 | 0;
   a[l >> 0] = (a[l >> 0] | 0) + -1 << 24 >> 24;
  }
 }
 l = (e | 0) != 24 & (f | 0) == 0;
 re(b, (l ? 64 : f << 6) | e | (l ? j : i) << 23 | (l ? i : j) << 14) | 0;
 l = b + 28 | 0;
 k = c[l >> 2] | 0;
 c[l >> 2] = -1;
 l = re(b, 2147450903) | 0;
 if ((k | 0) == -1) {
  b = g + 8 | 0;
  c[b >> 2] = l;
  c[g >> 2] = 10;
  return;
 }
 if ((l | 0) == -1) {
  l = k;
  b = g + 8 | 0;
  c[b >> 2] = l;
  c[g >> 2] = 10;
  return;
 }
 f = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 h = l;
 while (1) {
  j = f + (h << 2) | 0;
  e = c[j >> 2] | 0;
  i = (e >>> 14) + -131071 | 0;
  i = (i | 0) == -1 ? -1 : h + 1 + i | 0;
  if ((i | 0) == -1) {
   i = e;
   break;
  } else h = i;
 }
 h = k + ~h | 0;
 if ((((h | 0) > -1 ? h : 0 - h | 0) | 0) > 131071) ae(c[b + 12 >> 2] | 0, 6980);
 c[j >> 2] = (h << 14) + 2147467264 | i & 16383;
 b = g + 8 | 0;
 c[b >> 2] = l;
 c[g >> 2] = 10;
 return;
}

function hn(a) {
 a = +a;
 var b = 0, d = 0, e = 0.0, f = 0.0, g = 0, i = 0.0;
 h[k >> 3] = a;
 d = c[k + 4 >> 2] | 0;
 b = qn(c[k >> 2] | 0, d | 0, 63) | 0;
 d = d & 2147483647;
 do if (d >>> 0 > 1082532650) {
  f = +E(+a);
  h[k >> 3] = f;
  g = c[k + 4 >> 2] | 0;
  if (g >>> 0 > 2146435072 | (g | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0) {
   f = a;
   return +f;
  }
  if (a > 709.782712893384) {
   f = a * 8988465674311579538646525.0e283;
   return +f;
  } else {
   if (a < -708.3964185322641 & a < -745.1332191019411) a = 0.0; else {
    g = 8;
    break;
   }
   return +a;
  }
 } else {
  if (d >>> 0 > 1071001154) {
   if (d >>> 0 > 1072734897) {
    g = 8;
    break;
   }
   b = (b ^ 1) - b | 0;
   g = 10;
   break;
  }
  if (d >>> 0 > 1043333120) {
   f = a;
   e = a;
   b = 0;
   a = 0.0;
  } else {
   f = a + 1.0;
   return +f;
  }
 } while (0);
 if ((g | 0) == 8) {
  b = ~~(a * 1.4426950408889634 + +h[1160 + (b << 3) >> 3]);
  g = 10;
 }
 if ((g | 0) == 10) {
  f = +(b | 0);
  e = a - f * .6931471803691238;
  a = f * 1.9082149292705877e-10;
  f = e - a;
 }
 i = f * f;
 i = f - i * (i * (i * (i * (i * 4.1381367970572385e-08 + -1.6533902205465252e-06) + 6.613756321437934e-05) + -2.7777777777015593e-03) + .16666666666666602);
 a = e + (f * i / (2.0 - i) - a) + 1.0;
 if (!b) {
  i = a;
  return +i;
 }
 i = +gl(a, b);
 return +i;
}

function Dd(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 h = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  g = (c[h >> 2] | 0) + (b << 4) | 0;
  g = g >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? g : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   g = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   g = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  f = c[h >> 2] | 0;
  if ((c[f + 8 >> 2] | 0) == 22) g = 15088; else {
   g = c[f >> 2] | 0;
   g = (b | 0) > (d[g + 6 >> 0] | 0 | 0) ? 15088 : g + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 do if ((e | 0) > 0) {
  b = (c[h >> 2] | 0) + (e << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - e | 0;
  b = c[h >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) {
   h = 0;
   return h | 0;
  } else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
   break;
  }
 } while (0);
 if (!((g | 0) != 15088 & (b | 0) != 15088)) {
  h = 0;
  return h | 0;
 }
 if ((c[g + 8 >> 2] | 0) == (c[b + 8 >> 2] | 0)) b = (lc(0, g, b) | 0) != 0; else b = 0;
 h = b & 1;
 return h | 0;
}

function Ii(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 80 | 0;
 g = j + 16 | 0;
 e = j + 8 | 0;
 d = j;
 f = j + 64 | 0;
 h = j + 20 | 0;
 if ((ud(a, 1) | 0) < 1) b = Na(0) | 0; else {
  Mf(a, 1, 5);
  kd(a, 1);
  Eg(a, -1, 9942);
  b = Xc(a, -1, f) | 0;
  b = (c[f >> 2] | 0) == 0 ? 0 : b;
  kd(a, -2);
  c[h >> 2] = b;
  Eg(a, -1, 11262);
  b = Xc(a, -1, f) | 0;
  b = (c[f >> 2] | 0) == 0 ? 0 : b;
  kd(a, -2);
  c[h + 4 >> 2] = b;
  Eg(a, -1, 9946);
  b = Xc(a, -1, f) | 0;
  b = (c[f >> 2] | 0) == 0 ? 12 : b;
  kd(a, -2);
  c[h + 8 >> 2] = b;
  Eg(a, -1, 9951);
  b = Xc(a, -1, f) | 0;
  if (!(c[f >> 2] | 0)) {
   c[d >> 2] = 9951;
   b = ad(a, 10134, d) | 0;
  } else kd(a, -2);
  c[h + 12 >> 2] = b;
  Eg(a, -1, 9955);
  b = Xc(a, -1, f) | 0;
  if (!(c[f >> 2] | 0)) {
   c[e >> 2] = 9955;
   b = ad(a, 10134, e) | 0;
  } else kd(a, -2);
  c[h + 16 >> 2] = b + -1;
  Eg(a, -1, 9961);
  b = Xc(a, -1, f) | 0;
  if (!(c[f >> 2] | 0)) {
   c[g >> 2] = 9961;
   b = ad(a, 10134, g) | 0;
  } else kd(a, -2);
  c[h + 20 >> 2] = b + -1900;
  Eg(a, -1, 9976);
  if (!(ud(a, -1) | 0)) b = -1; else b = sd(a, -1) | 0;
  kd(a, -2);
  c[h + 32 >> 2] = b;
  b = wa(h | 0) | 0;
 }
 if ((b | 0) == -1) {
  Ad(a);
  i = j;
  return 1;
 } else {
  id(a, +(b | 0));
  i = j;
  return 1;
 }
 return 0;
}

function Wl(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 g = l;
 j = (f | 0) == 0 ? 15196 : f;
 f = c[j >> 2] | 0;
 a : do if (!d) if (!f) f = 0; else k = 15; else {
  h = (b | 0) == 0 ? g : b;
  if (!e) f = -2; else {
   if (!f) {
    f = a[d >> 0] | 0;
    g = f & 255;
    if (f << 24 >> 24 > -1) {
     c[h >> 2] = g;
     f = f << 24 >> 24 != 0 & 1;
     break;
    }
    f = g + -194 | 0;
    if (f >>> 0 > 50) {
     k = 15;
     break;
    }
    f = c[3232 + (f << 2) >> 2] | 0;
    g = e + -1 | 0;
    if (g) {
     d = d + 1 | 0;
     k = 9;
    }
   } else {
    g = e;
    k = 9;
   }
   b : do if ((k | 0) == 9) {
    b = a[d >> 0] | 0;
    m = (b & 255) >>> 3;
    if ((m + -16 | m + (f >> 26)) >>> 0 > 7) {
     k = 15;
     break a;
    }
    while (1) {
     d = d + 1 | 0;
     f = (b & 255) + -128 | f << 6;
     g = g + -1 | 0;
     if ((f | 0) >= 0) break;
     if (!g) break b;
     b = a[d >> 0] | 0;
     if ((b & -64) << 24 >> 24 != -128) {
      k = 15;
      break a;
     }
    }
    c[j >> 2] = 0;
    c[h >> 2] = f;
    f = e - g | 0;
    break a;
   } while (0);
   c[j >> 2] = f;
   f = -2;
  }
 } while (0);
 if ((k | 0) == 15) {
  c[j >> 2] = 0;
  c[(Ok() | 0) >> 2] = 84;
  f = -1;
 }
 i = l;
 return f | 0;
}

function _e(e, f, g, h) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 if (!e) {
  n = 0;
  return n | 0;
 }
 k = e + 12 | 0;
 l = e + 40 | 0;
 j = d[e + 46 >> 0] | 0;
 while (1) {
  m = j + -1 | 0;
  i = c[e >> 2] | 0;
  if ((j | 0) <= 0) break;
  if (!(Ue(f, c[(c[i + 24 >> 2] | 0) + ((b[(c[c[(c[k >> 2] | 0) + 64 >> 2] >> 2] | 0) + ((c[l >> 2] | 0) + m << 1) >> 1] | 0) * 12 | 0) >> 2] | 0) | 0)) j = m; else {
   i = m;
   n = 5;
   break;
  }
 }
 if ((n | 0) == 5) {
  c[g + 16 >> 2] = -1;
  c[g + 20 >> 2] = -1;
  c[g >> 2] = 7;
  c[g + 8 >> 2] = i;
  if (h | 0) {
   n = 7;
   return n | 0;
  }
  i = e + 16 | 0;
  do i = c[i >> 2] | 0; while ((d[i + 8 >> 0] | 0) >= (j | 0));
  a[i + 9 >> 0] = 1;
  n = 7;
  return n | 0;
 }
 j = c[i + 28 >> 2] | 0;
 k = e + 47 | 0;
 a : do if (!(a[k >> 0] | 0)) n = 13; else {
  i = 0;
  while (1) {
   if (Ue(c[j + (i << 3) >> 2] | 0, f) | 0) break;
   i = i + 1 | 0;
   if ((i | 0) >= (d[k >> 0] | 0)) {
    n = 13;
    break a;
   }
  }
  if ((i | 0) < 0) n = 13;
 } while (0);
 do if ((n | 0) == 13) if (!(_e(c[e + 8 >> 2] | 0, f, g, 0) | 0)) {
  n = 0;
  return n | 0;
 } else {
  i = $d(e, f, g) | 0;
  break;
 } while (0);
 c[g + 16 >> 2] = -1;
 c[g + 20 >> 2] = -1;
 c[g >> 2] = 8;
 c[g + 8 >> 2] = i;
 n = 8;
 return n | 0;
}

function _b(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 i = Jl(c) | 0;
 switch (a[c >> 0] | 0) {
 case 61:
  {
   e = c + 1 | 0;
   if (i >>> 0 > d >>> 0) {
    i = d + -1 | 0;
    sn(b | 0, e | 0, i | 0) | 0;
    a[b + i >> 0] = 0;
    return;
   } else {
    sn(b | 0, e | 0, i | 0) | 0;
    return;
   }
  }
 case 64:
  if (i >>> 0 > d >>> 0) {
   a[b >> 0] = a[5284] | 0;
   a[b + 1 >> 0] = a[5285] | 0;
   a[b + 2 >> 0] = a[5286] | 0;
   sn(b + 3 | 0, c + 1 + i + (3 - d) | 0, d + -3 | 0) | 0;
   return;
  } else {
   sn(b | 0, c + 1 | 0, i | 0) | 0;
   return;
  }
 default:
  {
   h = Ol(c, 10) | 0;
   e = b;
   f = 4485;
   g = e + 9 | 0;
   do {
    a[e >> 0] = a[f >> 0] | 0;
    e = e + 1 | 0;
    f = f + 1 | 0;
   } while ((e | 0) < (g | 0));
   g = b + 9 | 0;
   e = d + -15 | 0;
   f = (h | 0) == 0;
   if (i >>> 0 < e >>> 0 & f) {
    sn(g | 0, c | 0, i | 0) | 0;
    e = g + i | 0;
   } else {
    i = f ? i : h - c | 0;
    e = i >>> 0 > e >>> 0 ? e : i;
    sn(g | 0, c | 0, e | 0) | 0;
    e = g + e | 0;
    a[e >> 0] = a[5284] | 0;
    a[e + 1 >> 0] = a[5285] | 0;
    a[e + 2 >> 0] = a[5286] | 0;
    e = e + 3 | 0;
   };
   a[e >> 0] = a[4495] | 0;
   a[e + 1 >> 0] = a[4496] | 0;
   a[e + 2 >> 0] = a[4497] | 0;
   return;
  }
 }
}

function Db(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 i = e + 5 | 0;
 a[i >> 0] = (d[i >> 0] | 0) & 252;
 switch (d[e + 4 >> 0] | 0 | 0) {
 case 20:
 case 4:
  {
   f = (c[e + 12 >> 2] | 0) + 17 | 0;
   break;
  }
 case 7:
  {
   f = c[e + 8 >> 2] | 0;
   if (f | 0) if (a[f + 5 >> 0] & 3) Db(b, f);
   f = c[e + 12 >> 2] | 0;
   if (f | 0) if (a[f + 5 >> 0] & 3) Db(b, f);
   f = (c[e + 16 >> 2] | 0) + 24 | 0;
   break;
  }
 case 10:
  {
   g = e + 8 | 0;
   f = c[g >> 2] | 0;
   if (c[f + 8 >> 2] & 64) {
    h = c[f >> 2] | 0;
    if (a[h + 5 >> 0] & 3) {
     Db(b, h);
     f = c[g >> 2] | 0;
    }
   }
   if ((f | 0) == (e + 16 | 0)) f = 32; else return;
   break;
  }
 case 6:
  {
   b = b + 84 | 0;
   c[e + 8 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   return;
  }
 case 38:
  {
   b = b + 84 | 0;
   c[e + 8 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   return;
  }
 case 5:
  {
   b = b + 84 | 0;
   c[e + 24 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   return;
  }
 case 8:
  {
   b = b + 84 | 0;
   c[e + 60 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   return;
  }
 case 9:
  {
   b = b + 84 | 0;
   c[e + 72 >> 2] = c[b >> 2];
   c[b >> 2] = e;
   return;
  }
 default:
  return;
 }
 a[i >> 0] = d[i >> 0] | 0 | 4;
 b = b + 16 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + f;
 return;
}

function ld(e, f, g) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0;
 i = c[e + 12 >> 2] | 0;
 a : do switch (f | 0) {
 case 0:
  {
   a[i + 63 >> 0] = 0;
   f = 0;
   break;
  }
 case 1:
  {
   fc(i, 0);
   a[i + 63 >> 0] = 1;
   f = 0;
   break;
  }
 case 2:
  {
   nb(e, 0);
   f = 0;
   break;
  }
 case 3:
  {
   f = ((c[i + 12 >> 2] | 0) + (c[i + 8 >> 2] | 0) | 0) >>> 10;
   break;
  }
 case 4:
  {
   f = (c[i + 12 >> 2] | 0) + (c[i + 8 >> 2] | 0) & 1023;
   break;
  }
 case 5:
  {
   h = b[i + 62 >> 1] | 0;
   if ((h & 255) << 24 >> 24 == 2) {
    f = (c[i + 20 >> 2] | 0) == 0 & 1;
    ec(e);
    break a;
   }
   f = (g << 10) + -1600 | 0;
   if ((h & 65535) >= 256) f = (c[i + 12 >> 2] | 0) + f | 0;
   fc(i, f);
   ec(e);
   f = (a[i + 61 >> 0] | 0) == 5 & 1;
   break;
  }
 case 6:
  {
   e = i + 156 | 0;
   f = c[e >> 2] | 0;
   c[e >> 2] = g;
   break;
  }
 case 8:
  {
   e = i + 160 | 0;
   f = c[e >> 2] | 0;
   c[e >> 2] = g;
   break;
  }
 case 7:
  {
   e = i + 164 | 0;
   f = c[e >> 2] | 0;
   c[e >> 2] = g;
   break;
  }
 case 9:
  {
   f = d[i + 63 >> 0] | 0;
   break;
  }
 case 10:
  {
   md(e, 2);
   f = 0;
   break;
  }
 case 11:
  {
   md(e, 0);
   f = 0;
   break;
  }
 default:
  f = -1;
 } while (0);
 return f | 0;
}

function Fc(a, e) {
 a = a | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 i = a + 16 | 0;
 h = c[i >> 2] | 0;
 f = d[a + 40 >> 0] | 0;
 if (!(f & 6)) g = c[h + 8 >> 2] | 0; else {
  if (f & 2) {
   j = a + 28 | 0;
   e = e - (c[j >> 2] | 0) | 0;
   gc(a, 1, -1);
   e = (c[j >> 2] | 0) + e | 0;
  }
  g = c[h + 8 >> 2] | 0;
  c[a + 20 >> 2] = c[g + 28 >> 2];
 }
 f = c[h >> 2] | 0;
 h = b[h + 16 >> 1] | 0;
 j = h << 16 >> 16;
 c[i >> 2] = g;
 i = a + 8 | 0;
 if (!(h << 16 >> 16)) {
  k = f;
  c[i >> 2] = k;
  k = j + 1 | 0;
  return k | 0;
 } else {
  g = e;
  h = j;
 }
 while (1) {
  if (g >>> 0 >= (c[i >> 2] | 0) >>> 0) {
   e = h;
   break;
  }
  e = f + 16 | 0;
  m = g;
  l = c[m + 4 >> 2] | 0;
  a = f;
  c[a >> 2] = c[m >> 2];
  c[a + 4 >> 2] = l;
  c[f + 8 >> 2] = c[g + 8 >> 2];
  h = h + -1 | 0;
  if (!h) {
   k = 11;
   break;
  } else {
   g = g + 16 | 0;
   f = e;
  }
 }
 if ((k | 0) == 11) {
  c[i >> 2] = e;
  m = j + 1 | 0;
  return m | 0;
 }
 if ((e | 0) > 0) g = e; else {
  m = f;
  c[i >> 2] = m;
  m = j + 1 | 0;
  return m | 0;
 }
 while (1) {
  e = f + 16 | 0;
  c[f + 8 >> 2] = 0;
  if ((g | 0) > 1) {
   g = g + -1 | 0;
   f = e;
  } else break;
 }
 c[i >> 2] = e;
 m = j + 1 | 0;
 return m | 0;
}

function mg(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 f = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  e = (c[f >> 2] | 0) + (e << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - e | 0;
  e = c[f >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (g | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 g = b + 8 | 0;
 h = c[g >> 2] | 0;
 f = he(b, c[e >> 2] | 0, h + -32 | 0) | 0;
 k = h + -16 | 0;
 j = c[k + 4 >> 2] | 0;
 i = f;
 c[i >> 2] = c[k >> 2];
 c[i + 4 >> 2] = j;
 c[f + 8 >> 2] = c[h + -8 >> 2];
 e = c[e >> 2] | 0;
 a[e + 6 >> 0] = 0;
 f = c[g >> 2] | 0;
 if (!(c[f + -8 >> 2] & 64)) {
  k = f;
  k = k + -32 | 0;
  c[g >> 2] = k;
  return;
 }
 if (!(a[(c[f + -16 >> 2] | 0) + 5 >> 0] & 3)) {
  k = f;
  k = k + -32 | 0;
  c[g >> 2] = k;
  return;
 }
 if (!(a[e + 5 >> 0] & 4)) {
  k = f;
  k = k + -32 | 0;
  c[g >> 2] = k;
  return;
 }
 rc(b, e);
 k = c[g >> 2] | 0;
 k = k + -32 | 0;
 c[g >> 2] = k;
 return;
}

function Tm(a, b, d) {
 a = +a;
 b = +b;
 d = d | 0;
 var e = 0, f = 0.0, g = 0, i = 0, j = 0.0, l = 0.0;
 h[k >> 3] = a;
 e = c[k + 4 >> 2] | 0;
 g = e & 2147483640;
 g = g >>> 0 > 1072010279 | (g | 0) == 1072010279 & 0 > 0;
 if (g) {
  e = qn(c[k >> 2] | 0, e | 0, 63) | 0;
  i = (e | 0) == 0;
  a = .7853981633974483 - (i ? a : -a) + (3.061616997868383e-17 - (i ? b : -b));
  b = 0.0;
 } else e = 0;
 j = a * a;
 f = j * j;
 l = a * j;
 f = l * .3333333333333341 + (b + j * (b + l * (f * (f * (f * (f * (7.817944429395571e-05 - f * 1.8558637485527546e-05) + 5.880412408202641e-04) + 3.5920791075913124e-03) + .021869488294859542) + .13333333333320124 + j * (f * (f * (f * (f * (f * 2.590730518636337e-05 + 7.140724913826082e-05) + 2.464631348184699e-04) + 1.4562094543252903e-03) + .0088632398235993) + .05396825397622605))));
 b = a + f;
 if (g) {
  l = +(1 - (d << 1) | 0);
  b = l - (a + (f - b * b / (l + b))) * 2.0;
  b = e | 0 ? -b : b;
 } else if (d) {
  h[k >> 3] = b;
  i = c[k + 4 >> 2] | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = i;
  l = +h[k >> 3];
  j = -1.0 / b;
  h[k >> 3] = j;
  i = c[k + 4 >> 2] | 0;
  c[k >> 2] = 0;
  c[k + 4 >> 2] = i;
  b = +h[k >> 3];
  b = b + j * (l * b + 1.0 + b * (f - (l - a)));
 }
 return +b;
}

function Ab(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 k = c[b + 12 >> 2] | 0;
 j = k + 24 | 0;
 Bb(b, -5);
 k = k + 32 | 0;
 f = c[k >> 2] | 0;
 if ((f | 0) < (e | 0)) {
  if ((e + 1 | 0) >>> 0 > 1073741823) yb(b);
  g = mb(b, c[j >> 2] | 0, f << 2, e << 2) | 0;
  c[j >> 2] = g;
  f = c[k >> 2] | 0;
  if ((f | 0) < (e | 0)) {
   c[g + (f << 2) >> 2] = 0;
   g = f + 1 | 0;
   if ((g | 0) != (e | 0)) do {
    c[(c[j >> 2] | 0) + (g << 2) >> 2] = 0;
    g = g + 1 | 0;
   } while ((g | 0) != (e | 0));
  }
 }
 if ((f | 0) > 0) {
  f = c[k >> 2] | 0;
  h = e + -1 | 0;
  i = 0;
  do {
   l = (c[j >> 2] | 0) + (i << 2) | 0;
   g = c[l >> 2] | 0;
   c[l >> 2] = 0;
   if (g | 0) do {
    l = g;
    g = c[g >> 2] | 0;
    m = (c[j >> 2] | 0) + ((c[l + 8 >> 2] & h) << 2) | 0;
    c[l >> 2] = c[m >> 2];
    c[m >> 2] = l;
    l = l + 5 | 0;
    a[l >> 0] = (d[l >> 0] | 0) & 191;
   } while ((g | 0) != 0);
   i = i + 1 | 0;
  } while ((i | 0) < (f | 0));
 }
 if ((f | 0) <= (e | 0)) {
  c[k >> 2] = e;
  return;
 }
 if ((e + 1 | 0) >>> 0 > 1073741823) yb(b);
 c[j >> 2] = mb(b, c[j >> 2] | 0, f << 2, e << 2) | 0;
 c[k >> 2] = e;
 return;
}

function Ve(e, f, g) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 o = i;
 i = i + 16 | 0;
 m = o;
 h = c[e + 48 >> 2] | 0;
 j = c[e + 64 >> 2] | 0;
 n = j + 12 | 0;
 k = c[n >> 2] | 0;
 l = a[k + (f << 4) + 12 >> 0] | 0;
 if ((l & 255) < (d[g + 12 >> 0] | 0)) {
  p = c[e + 52 >> 2] | 0;
  q = c[k + (f << 4) + 8 >> 2] | 0;
  l = (c[(c[(c[h >> 2] | 0) + 24 >> 2] | 0) + ((b[(c[c[(c[h + 12 >> 2] | 0) + 64 >> 2] >> 2] | 0) + ((c[h + 40 >> 2] | 0) + (l & 255) << 1) >> 1] | 0) * 12 | 0) >> 2] | 0) + 16 | 0;
  c[m >> 2] = (c[k + (f << 4) >> 2] | 0) + 16;
  c[m + 4 >> 2] = q;
  c[m + 8 >> 2] = l;
  We(e, $b(p, 7271, m) | 0);
 }
 Xe(h, c[k + (f << 4) + 4 >> 2] | 0, c[g + 4 >> 2] | 0);
 j = j + 16 | 0;
 h = (c[j >> 2] | 0) + -1 | 0;
 if ((h | 0) <= (f | 0)) {
  q = h;
  c[j >> 2] = q;
  i = o;
  return;
 }
 do {
  q = c[n >> 2] | 0;
  h = q + (f << 4) | 0;
  f = f + 1 | 0;
  q = q + (f << 4) | 0;
  c[h >> 2] = c[q >> 2];
  c[h + 4 >> 2] = c[q + 4 >> 2];
  c[h + 8 >> 2] = c[q + 8 >> 2];
  c[h + 12 >> 2] = c[q + 12 >> 2];
  h = (c[j >> 2] | 0) + -1 | 0;
 } while ((f | 0) < (h | 0));
 c[j >> 2] = h;
 i = o;
 return;
}

function sl(b, d, e) {
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
 if ((tl(0, d, o, q, r) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) m = Fl(b) | 0; else m = 0;
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
   f = tl(b, d, o, q, r) | 0;
   if (h) {
    Ua[c[b + 36 >> 2] & 15](b, 0, 0) | 0;
    f = (c[k >> 2] | 0) == 0 ? -1 : f;
    c[g >> 2] = h;
    c[e >> 2] = 0;
    c[l >> 2] = 0;
    c[j >> 2] = 0;
    c[k >> 2] = 0;
   }
  } else f = tl(b, d, o, q, r) | 0;
  e = c[b >> 2] | 0;
  c[b >> 2] = e | n;
  if (m | 0) Rk(b);
  e = (e & 32 | 0) == 0 ? f : -1;
 }
 i = s;
 return e | 0;
}

function jn(a) {
 a = +a;
 var b = 0, d = 0, e = 0, f = 0.0, g = 0.0, i = 0.0, j = 0.0, l = 0.0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 b = c[k + 4 >> 2] | 0;
 e = (b | 0) < 0;
 do if (e | b >>> 0 < 1048576) {
  f = +E(+a);
  h[k >> 3] = f;
  if ((c[k >> 2] | 0) == 0 & (c[k + 4 >> 2] | 0) == 0) {
   f = -1.0 / (a * a);
   return +f;
  }
  if (!e) {
   h[k >> 3] = a * 18014398509481984.0;
   b = c[k + 4 >> 2] | 0;
   e = c[k >> 2] | 0;
   d = -1077;
   break;
  }
  f = (a - a) / 0.0;
  return +f;
 } else {
  if (b >>> 0 > 2146435071) {
   f = a;
   return +f;
  }
  if ((d | 0) == 0 & 0 == 0 & (b | 0) == 1072693248) {
   f = 0.0;
   return +f;
  } else {
   e = d;
   d = -1023;
  }
 } while (0);
 b = b + 614242 | 0;
 c[k >> 2] = e;
 c[k + 4 >> 2] = (b & 1048575) + 1072079006;
 l = +h[k >> 3] + -1.0;
 f = l * (l * .5);
 i = l / (l + 2.0);
 g = i * i;
 a = g * g;
 j = +(d + (b >>> 20) | 0);
 f = j * .6931471803691238 + (l + (j * 1.9082149292705877e-10 + i * (f + (a * (a * (a * .15313837699209373 + .22222198432149784) + .3999999999940942) + g * (a * (a * (a * .14798198605116586 + .1818357216161805) + .2857142874366239) + .6666666666666735))) - f));
 return +f;
}

function qe(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 switch (c[e >> 2] | 0) {
 case 7:
  {
   c[e >> 2] = 6;
   return;
  }
 case 8:
  {
   k = e + 8 | 0;
   c[k >> 2] = re(b, c[k >> 2] << 23 | 5) | 0;
   c[e >> 2] = 11;
   return;
  }
 case 9:
  {
   j = e + 8 | 0;
   g = c[j >> 2] | 0;
   k = g << 16;
   h = k >> 16;
   i = g >>> 16;
   f = i & 255;
   if (!(h & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (h | 0)) {
    h = b + 48 | 0;
    a[h >> 0] = (a[h >> 0] | 0) + -1 << 24 >> 24;
   }
   if ((g & -16777216 | 0) == 117440512) if ((d[b + 46 >> 0] | 0) > (f & 255)) f = 7; else {
    f = b + 48 | 0;
    a[f >> 0] = (a[f >> 0] | 0) + -1 << 24 >> 24;
    f = 7;
   } else f = 6;
   c[j >> 2] = re(b, i << 23 & 2139095040 | f | k >> 2) | 0;
   c[e >> 2] = 11;
   return;
  }
 case 12:
  {
   c[e >> 2] = 6;
   k = e + 8 | 0;
   c[k >> 2] = (c[(c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (c[k >> 2] << 2) >> 2] | 0) >>> 6 & 255;
   return;
  }
 case 13:
  {
   k = (c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (c[e + 8 >> 2] << 2) | 0;
   c[k >> 2] = c[k >> 2] & 8388607 | 16777216;
   c[e >> 2] = 11;
   return;
  }
 default:
  return;
 }
}

function gc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 s = i;
 i = i + 112 | 0;
 r = s;
 q = s + 4 | 0;
 g = c[b + 52 >> 2] | 0;
 if (!g) {
  i = s;
  return;
 }
 m = b + 41 | 0;
 if (!(a[m >> 0] | 0)) {
  i = s;
  return;
 }
 o = c[b + 16 >> 2] | 0;
 p = b + 8 | 0;
 t = c[p >> 2] | 0;
 h = b + 28 | 0;
 l = c[h >> 2] | 0;
 j = t - l | 0;
 k = o + 4 | 0;
 l = (c[k >> 2] | 0) - l | 0;
 c[q >> 2] = e;
 c[q + 20 >> 2] = f;
 c[q + 96 >> 2] = o;
 e = t;
 do if (((c[b + 24 >> 2] | 0) - t | 0) < 336) {
  e = c[b + 32 >> 2] | 0;
  if ((e | 0) > 1e6) wb(b, 6);
  t = (j >> 4) + 25 | 0;
  e = e << 1;
  e = (e | 0) > 1e6 ? 1e6 : e;
  e = (e | 0) < (t | 0) ? t : e;
  if ((e | 0) > 1e6) {
   xb(b, 1000200);
   tb(b, 7808, r);
  } else {
   xb(b, e);
   n = c[p >> 2] | 0;
   break;
  }
 } else n = e; while (0);
 c[k >> 2] = n + 320;
 a[m >> 0] = 0;
 t = o + 18 | 0;
 a[t >> 0] = d[t >> 0] | 2;
 Wa[g & 15](b, q);
 a[m >> 0] = 1;
 r = c[h >> 2] | 0;
 c[k >> 2] = r + l;
 c[p >> 2] = r + j;
 a[t >> 0] = d[t >> 0] & 253;
 i = s;
 return;
}

function ce(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 k = n;
 j = c[e >> 2] | 0;
 if ((j | 0) < ((g | 0) / 2 | 0 | 0)) {
  m = j << 1;
  m = (m | 0) < 4 ? 4 : m;
 } else if ((j | 0) < (g | 0)) m = g; else {
  c[k >> 2] = h;
  c[k + 4 >> 2] = g;
  tb(b, 6720, k);
 }
 if ((m + 1 | 0) >>> 0 > (4294967293 / (f >>> 0) | 0) >>> 0) yb(b);
 l = R(j, f) | 0;
 k = R(m, f) | 0;
 h = c[b + 12 >> 2] | 0;
 f = (d | 0) != 0;
 j = h + 4 | 0;
 g = Ya[c[h >> 2] & 3](c[j >> 2] | 0, d, l, k) | 0;
 if (!((k | 0) != 0 & (g | 0) == 0)) {
  b = g;
  d = h + 12 | 0;
  h = c[d >> 2] | 0;
  l = 0 - l | 0;
  l = f ? l : 0;
  l = l + k | 0;
  l = l + h | 0;
  c[d >> 2] = l;
  c[e >> 2] = m;
  i = n;
  return b | 0;
 }
 if (!(a[h + 63 >> 0] | 0)) wb(b, 4);
 nb(b, 1);
 j = Ya[c[h >> 2] & 3](c[j >> 2] | 0, d, l, k) | 0;
 if (!j) wb(b, 4); else {
  b = j;
  d = h + 12 | 0;
  h = c[d >> 2] | 0;
  l = 0 - l | 0;
  l = f ? l : 0;
  l = l + k | 0;
  l = l + h | 0;
  c[d >> 2] = l;
  c[e >> 2] = m;
  i = n;
  return b | 0;
 }
 return 0;
}

function Nm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 32 | 0;
 f = j + 16 | 0;
 e = j;
 g = gm(b) | 0;
 if ((c[d + 76 >> 2] | 0) > -1) h = Fl(d) | 0; else h = 0;
 lm(d) | 0;
 do if (!a) {
  a = d + 60 | 0;
  if (g & 524288 | 0) {
   c[e >> 2] = c[a >> 2];
   c[e + 4 >> 2] = 2;
   c[e + 8 >> 2] = 1;
   ba(221, e | 0) | 0;
  }
  c[f >> 2] = c[a >> 2];
  c[f + 4 >> 2] = 4;
  c[f + 8 >> 2] = g & -524481;
  if ((Nk(ba(221, f | 0) | 0) | 0) < 0) a = 15; else a = 12;
 } else {
  a = fm(a, b) | 0;
  if (!a) a = 15; else {
   b = a + 60 | 0;
   e = c[b >> 2] | 0;
   f = c[d + 60 >> 2] | 0;
   if ((e | 0) == (f | 0)) c[b >> 2] = -1; else if ((cm(e, f, g & 524288) | 0) < 0) {
    km(a) | 0;
    a = 15;
    break;
   }
   c[d >> 2] = c[d >> 2] & 1 | c[a >> 2];
   c[d + 32 >> 2] = c[a + 32 >> 2];
   c[d + 36 >> 2] = c[a + 36 >> 2];
   c[d + 40 >> 2] = c[a + 40 >> 2];
   c[d + 12 >> 2] = c[a + 12 >> 2];
   km(a) | 0;
   a = 12;
  }
 } while (0);
 if ((a | 0) == 12) {
  if (h) Rk(d);
 } else if ((a | 0) == 15) {
  km(d) | 0;
  d = 0;
 }
 i = j;
 return d | 0;
}

function Mc(a, d, e) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 176 | 0;
 p = 4;
 q = Xm(40) | 0;
 c[q >> 2] = 0;
 m = s;
 h = a + 38 | 0;
 j = b[h >> 1] | 0;
 k = m + 160 | 0;
 c[k >> 2] = 0;
 l = a + 64 | 0;
 c[m >> 2] = c[l >> 2];
 c[l >> 2] = m;
 p = pn(m + 4 | 0, 1, q | 0, p | 0) | 0;
 q = C;
 n = 0;
 f = n;
 n = 0;
 if ((f | 0) != 0 & (o | 0) != 0) {
  g = rn(c[f >> 2] | 0, p | 0, q | 0) | 0;
  if (!g) na(f | 0, o | 0);
  C = o;
 } else g = -1;
 if ((g | 0) == 1) f = C; else f = 0;
 while (1) {
  if (f | 0) {
   r = 6;
   break;
  }
  n = 0;
  Y(d | 0, a | 0, e | 0);
  f = n;
  n = 0;
  if ((f | 0) != 0 & (o | 0) != 0) {
   g = rn(c[f >> 2] | 0, p | 0, q | 0) | 0;
   if (!g) na(f | 0, o | 0);
   C = o;
  } else g = -1;
  if ((g | 0) == 1) f = C; else break;
 }
 if ((r | 0) == 6) {
  r = c[m >> 2] | 0;
  c[l >> 2] = r;
  b[h >> 1] = j;
  r = c[k >> 2] | 0;
  Ym(p | 0);
  i = s;
  return r | 0;
 }
 r = c[m >> 2] | 0;
 c[l >> 2] = r;
 b[h >> 1] = j;
 r = c[k >> 2] | 0;
 Ym(p | 0);
 i = s;
 return r | 0;
}

function yk(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  e = (c[f >> 2] | 0) + (e << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - e | 0;
  e = c[f >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (g | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 f = b + 8 | 0;
 g = c[f >> 2] | 0;
 if (!(c[g + -8 >> 2] | 0)) {
  c[(c[e >> 2] | 0) + 12 >> 2] = 0;
  b = g;
  b = b + -16 | 0;
  c[f >> 2] = b;
  return;
 }
 h = g + -16 | 0;
 c[(c[e >> 2] | 0) + 12 >> 2] = c[h >> 2];
 h = c[h >> 2] | 0;
 if (!(a[h + 5 >> 0] & 3)) {
  b = g;
  b = b + -16 | 0;
  c[f >> 2] = b;
  return;
 }
 e = c[e >> 2] | 0;
 if (!(a[e + 5 >> 0] & 4)) {
  b = g;
  b = b + -16 | 0;
  c[f >> 2] = b;
  return;
 }
 sc(b, e, h);
 b = c[f >> 2] | 0;
 b = b + -16 | 0;
 c[f >> 2] = b;
 return;
}

function rg(b) {
 b = b | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0.0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 f = n;
 do if ((ud(b, 2) | 0) < 1) {
  e = +sg(b, 1, f);
  if (!(c[f >> 2] | 0)) {
   Ef(b, 1);
   break;
  }
  id(b, e);
  i = n;
  return 1;
 } else {
  g = tg(b, 1, f) | 0;
  m = g + (c[f >> 2] | 0) | 0;
  k = Lf(b, 2) | 0;
  if ((k + -2 | 0) >>> 0 >= 35) wd(b, 2, 8001) | 0;
  f = g + (Gl(g, 8019) | 0) | 0;
  switch (a[f >> 0] | 0) {
  case 45:
   {
    l = 1;
    f = f + 1 | 0;
    break;
   }
  case 43:
   {
    l = 0;
    f = f + 1 | 0;
    break;
   }
  default:
   l = 0;
  }
  if (Zl(d[f >> 0] | 0) | 0) {
   j = +(k | 0);
   e = 0.0;
   do {
    g = a[f >> 0] | 0;
    h = g & 255;
    if ((h + -48 | 0) >>> 0 < 10) g = (g << 24 >> 24) + -48 | 0; else g = (Yk(h) | 0) + -55 | 0;
    if ((g | 0) >= (k | 0)) break;
    e = j * e + +(g | 0);
    f = f + 1 | 0;
   } while ((Zl(d[f >> 0] | 0) | 0) != 0);
   if ((f + (Gl(f, 8019) | 0) | 0) == (m | 0)) {
    id(b, l | 0 ? -e : e);
    i = n;
    return 1;
   }
  }
 } while (0);
 Ad(b);
 i = n;
 return 1;
}

function Nd(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 c[b >> 2] = 0;
 f = b + 4 | 0;
 e = Hm(c[f >> 2] | 0) | 0;
 a : do switch (e | 0) {
 case -1:
  {
   g = 5;
   break;
  }
 case 239:
  {
   e = c[b >> 2] | 0;
   c[b >> 2] = e + 1;
   a[b + 8 + e >> 0] = -17;
   e = Hm(c[f >> 2] | 0) | 0;
   switch (e | 0) {
   case -1:
    {
     g = 5;
     break a;
    }
   case 187:
    break;
   default:
    break a;
   }
   e = c[b >> 2] | 0;
   c[b >> 2] = e + 1;
   a[b + 8 + e >> 0] = -69;
   e = Hm(c[f >> 2] | 0) | 0;
   switch (e | 0) {
   case -1:
    {
     g = 5;
     break a;
    }
   case 191:
    break;
   default:
    break a;
   }
   a[(c[b >> 2] | 0) + (b + 8) >> 0] = -65;
   c[b >> 2] = 0;
   e = Hm(c[f >> 2] | 0) | 0;
   break;
  }
 default:
  {}
 } while (0);
 if ((g | 0) == 5) {
  c[d >> 2] = -1;
  g = 0;
  return g | 0;
 }
 c[d >> 2] = e;
 if ((e | 0) != 35) {
  g = 0;
  return g | 0;
 }
 b : while (1) switch (Hm(c[f >> 2] | 0) | 0) {
 case 10:
 case -1:
  break b;
 default:
  {}
 }
 c[d >> 2] = Hm(c[f >> 2] | 0) | 0;
 g = 1;
 return g | 0;
}

function zl(b, d, e) {
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

function bj(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 288 | 0;
 l = m + 8 | 0;
 h = m + 4 | 0;
 b = m;
 g = Tc(a, -1001001, h) | 0;
 d = Tc(a, -1001002, b) | 0;
 j = l + 16 | 0;
 c[j >> 2] = a;
 c[l >> 2] = 200;
 c[l + 4 >> 2] = g;
 h = c[h >> 2] | 0;
 f = l + 8 | 0;
 c[f >> 2] = g + h;
 c[l + 12 >> 2] = d + (c[b >> 2] | 0);
 b = Xc(a, -1001003, 0) | 0;
 if ((b | 0) > (h | 0)) {
  l = 0;
  i = m;
  return l | 0;
 }
 h = l + 20 | 0;
 e = g + b | 0;
 while (1) {
  c[h >> 2] = 0;
  b = Xi(l, e, d) | 0;
  if (b | 0) {
   f = b;
   break;
  }
  e = e + 1 | 0;
  if (e >>> 0 > (c[f >> 2] | 0) >>> 0) {
   b = 0;
   k = 7;
   break;
  }
 }
 if ((k | 0) == 7) {
  i = m;
  return b | 0;
 }
 Kd(a, f - g + ((f | 0) == (e | 0) & 1) | 0);
 Zf(a, -1001003);
 b = c[h >> 2] | 0;
 b = (e | 0) != 0 & (b | 0) == 0 ? 1 : b;
 Wf(c[j >> 2] | 0, b, 10341);
 if ((b | 0) > 0) d = 0; else {
  l = b;
  i = m;
  return l | 0;
 }
 do {
  Zi(l, d, e, f);
  d = d + 1 | 0;
 } while ((d | 0) != (b | 0));
 i = m;
 return b | 0;
}

function Xg(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 g = c[b + 16 >> 2] | 0;
 do if ((e | 0) > 0) {
  e = (c[g >> 2] | 0) + (e << 4) | 0;
  e = e >>> 0 < (c[b + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   e = (c[b + 8 >> 2] | 0) + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   e = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  h = -1001e3 - e | 0;
  e = c[g >> 2] | 0;
  if ((c[e + 8 >> 2] | 0) == 22) e = 15088; else {
   e = c[e >> 2] | 0;
   e = (h | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (h + -1 << 4) | 0;
  }
 } while (0);
 h = b + 8 | 0;
 Hc(b, c[e >> 2] | 0, f, (c[h >> 2] | 0) + -16 | 0);
 g = c[h >> 2] | 0;
 if (!(c[g + -8 >> 2] & 64)) {
  b = g;
  b = b + -16 | 0;
  c[h >> 2] = b;
  return;
 }
 if (!(a[(c[g + -16 >> 2] | 0) + 5 >> 0] & 3)) {
  b = g;
  b = b + -16 | 0;
  c[h >> 2] = b;
  return;
 }
 e = c[e >> 2] | 0;
 if (!(a[e + 5 >> 0] & 4)) {
  b = g;
  b = b + -16 | 0;
  c[h >> 2] = b;
  return;
 }
 rc(b, e);
 b = c[h >> 2] | 0;
 b = b + -16 | 0;
 c[h >> 2] = b;
 return;
}

function Pb(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 h = c[a + 12 >> 2] | 0;
 i = a + 56 | 0;
 e = c[i >> 2] | 0;
 if (!e) return;
 j = h + 60 | 0;
 k = h + 68 | 0;
 while (1) {
  f = e + 8 | 0;
  g = c[f >> 2] | 0;
  if (g >>> 0 < b >>> 0) {
   e = 10;
   break;
  }
  c[i >> 2] = c[e >> 2];
  if (!(((d[j >> 0] | 0) ^ 3) & ((d[e + 5 >> 0] | 0) ^ 3))) {
   if ((g | 0) != (e + 16 | 0)) {
    g = e + 16 | 0;
    f = c[g + 4 >> 2] | 0;
    c[f + 16 >> 2] = c[g >> 2];
    c[(c[g >> 2] | 0) + 16 + 4 >> 2] = f;
   }
   mb(a, e, 32, 0) | 0;
  } else {
   l = e + 16 | 0;
   o = c[l + 4 >> 2] | 0;
   c[o + 16 >> 2] = c[l >> 2];
   c[(c[l >> 2] | 0) + 16 + 4 >> 2] = o;
   l = e + 16 | 0;
   o = g;
   n = c[o + 4 >> 2] | 0;
   m = l;
   c[m >> 2] = c[o >> 2];
   c[m + 4 >> 2] = n;
   c[e + 24 >> 2] = c[g + 8 >> 2];
   c[f >> 2] = l;
   c[e >> 2] = c[k >> 2];
   c[k >> 2] = e;
   Qb(h, e);
  }
  e = c[i >> 2] | 0;
  if (!e) {
   e = 10;
   break;
  }
 }
 if ((e | 0) == 10) return;
}

function Sd(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l + 8 | 0;
 j = l;
 f = c[e >> 2] | 0;
 h = c[f >> 2] | 0;
 c[f >> 2] = h + -1;
 if (!h) f = Td(f) | 0; else {
  h = f + 4 | 0;
  f = c[h >> 2] | 0;
  c[h >> 2] = f + 1;
  f = d[f >> 0] | 0;
 }
 g = c[e + 52 >> 2] | 0;
 h = (g | 0) == 0;
 if ((f | 0) == 27) {
  if (!h) if (!(Ol(g, 98) | 0)) {
   c[j >> 2] = 6458;
   c[j + 4 >> 2] = g;
   $b(b, 6416, j) | 0;
   wb(b, 3);
  }
  j = Ud(b, c[e >> 2] | 0, e + 4 | 0, c[e + 56 >> 2] | 0) | 0;
 } else {
  if (!h) if (!(Ol(g, 116) | 0)) {
   c[k >> 2] = 6570;
   c[k + 4 >> 2] = g;
   $b(b, 6416, k) | 0;
   wb(b, 3);
  }
  j = Zd(b, c[e >> 2] | 0, e + 4 | 0, e + 16 | 0, c[e + 56 >> 2] | 0, f) | 0;
 }
 f = j + 6 | 0;
 if (!(a[f >> 0] | 0)) {
  i = l;
  return;
 }
 g = j + 16 | 0;
 h = j + 5 | 0;
 k = 0;
 do {
  e = wf(b) | 0;
  c[g + (k << 2) >> 2] = e;
  if (a[e + 5 >> 0] & 3) if (a[h >> 0] & 4) sc(b, j, e);
  k = k + 1 | 0;
 } while ((k | 0) < (d[f >> 0] | 0));
 i = l;
 return;
}

function xb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 i = b + 28 | 0;
 g = c[i >> 2] | 0;
 h = b + 32 | 0;
 e = c[h >> 2] | 0;
 if ((d + 1 | 0) >>> 0 > 268435455) yb(b);
 f = mb(b, g, e << 4, d << 4) | 0;
 c[i >> 2] = f;
 if ((e | 0) < (d | 0)) {
  do {
   c[f + (e << 4) + 8 >> 2] = 0;
   e = e + 1 | 0;
  } while ((e | 0) != (d | 0));
  f = c[i >> 2] | 0;
 }
 c[h >> 2] = d;
 c[b + 24 >> 2] = f + (d << 4) + -80;
 e = b + 8 | 0;
 c[e >> 2] = f + ((c[e >> 2] | 0) - g >> 4 << 4);
 e = c[b + 56 >> 2] | 0;
 if (e | 0) do {
  d = e + 8 | 0;
  c[d >> 2] = f + ((c[d >> 2] | 0) - g >> 4 << 4);
  e = c[e >> 2] | 0;
 } while ((e | 0) != 0);
 e = c[b + 16 >> 2] | 0;
 if (!e) return;
 f = c[i >> 2] | 0;
 do {
  b = e + 4 | 0;
  c[b >> 2] = f + ((c[b >> 2] | 0) - g >> 4 << 4);
  c[e >> 2] = f + ((c[e >> 2] | 0) - g >> 4 << 4);
  if (a[e + 18 >> 0] & 1) {
   b = e + 24 | 0;
   c[b >> 2] = (c[i >> 2] | 0) + ((c[b >> 2] | 0) - g >> 4 << 4);
  }
  e = c[e + 8 >> 2] | 0;
 } while ((e | 0) != 0);
 return;
}

function Uk(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = i;
 i = i + 48 | 0;
 h = m + 16 | 0;
 g = m;
 f = m + 32 | 0;
 c[f >> 2] = d;
 j = f + 4 | 0;
 l = b + 48 | 0;
 n = c[l >> 2] | 0;
 c[j >> 2] = e - ((n | 0) != 0 & 1);
 k = b + 44 | 0;
 c[f + 8 >> 2] = c[k >> 2];
 c[f + 12 >> 2] = n;
 if (!(c[3787] | 0)) {
  c[h >> 2] = c[b + 60 >> 2];
  c[h + 4 >> 2] = f;
  c[h + 8 >> 2] = 2;
  f = Nk(Ra(145, h | 0) | 0) | 0;
 } else {
  ja(3, b | 0);
  c[g >> 2] = c[b + 60 >> 2];
  c[g + 4 >> 2] = f;
  c[g + 8 >> 2] = 2;
  f = Nk(Ra(145, g | 0) | 0) | 0;
  aa(0);
 }
 if ((f | 0) < 1) {
  c[b >> 2] = c[b >> 2] | f & 48 ^ 16;
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
 } else {
  j = c[j >> 2] | 0;
  if (f >>> 0 > j >>> 0) {
   g = c[k >> 2] | 0;
   h = b + 4 | 0;
   c[h >> 2] = g;
   c[b + 8 >> 2] = g + (f - j);
   if (!(c[l >> 2] | 0)) f = e; else {
    c[h >> 2] = g + 1;
    a[d + (e + -1) >> 0] = a[g >> 0] | 0;
    f = e;
   }
  }
 }
 i = m;
 return f | 0;
}

function Ed(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = b + 16 | 0;
 a = a + 8 | 0;
 e = c[a >> 2] | 0;
 if (f >>> 0 >= e >>> 0) {
  f = e;
  f = f + -16 | 0;
  c[a >> 2] = f;
  return;
 }
 while (1) {
  h = f;
  g = c[h + 4 >> 2] | 0;
  e = b;
  c[e >> 2] = c[h >> 2];
  c[e + 4 >> 2] = g;
  c[b + 8 >> 2] = c[b + 24 >> 2];
  e = f + 16 | 0;
  b = c[a >> 2] | 0;
  if (e >>> 0 < b >>> 0) {
   b = f;
   f = e;
  } else break;
 }
 h = b + -16 | 0;
 c[a >> 2] = h;
 return;
}

function Fd(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  f = (c[e >> 2] | 0) + (b << 4) | 0;
  f = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   f = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   f = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) f = 15088; else {
   e = c[b >> 2] | 0;
   f = (f | 0) > (d[e + 6 >> 0] | 0 | 0) ? 15088 : e + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 e = a + 8 | 0;
 b = c[e >> 2] | 0;
 if (b >>> 0 > f >>> 0) {
  do {
   a = b;
   b = b + -16 | 0;
   i = b;
   h = c[i + 4 >> 2] | 0;
   g = a;
   c[g >> 2] = c[i >> 2];
   c[g + 4 >> 2] = h;
   c[a + 8 >> 2] = c[a + -8 >> 2];
  } while (b >>> 0 > f >>> 0);
  b = c[e >> 2] | 0;
 }
 g = b;
 h = c[g + 4 >> 2] | 0;
 i = f;
 c[i >> 2] = c[g >> 2];
 c[i + 4 >> 2] = h;
 c[f + 8 >> 2] = c[b + 8 >> 2];
 return;
}

function Zf(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 k = b + 8 | 0;
 h = c[k >> 2] | 0;
 i = h + -16 | 0;
 j = b + 16 | 0;
 f = c[j >> 2] | 0;
 do if ((e | 0) > 0) {
  g = (c[f >> 2] | 0) + (e << 4) | 0;
  g = g >>> 0 < h >>> 0 ? g : 15088;
 } else {
  if ((e | 0) >= -1000999) {
   g = h + (e << 4) | 0;
   break;
  }
  if ((e | 0) == -1001e3) {
   g = (c[b + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - e | 0;
  f = c[f >> 2] | 0;
  if ((c[f + 8 >> 2] | 0) == 22) g = 15088; else {
   f = c[f >> 2] | 0;
   g = (g | 0) > (d[f + 6 >> 0] | 0 | 0) ? 15088 : f + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 m = i;
 l = c[m + 4 >> 2] | 0;
 f = g;
 c[f >> 2] = c[m >> 2];
 c[f + 4 >> 2] = l;
 f = h + -8 | 0;
 c[g + 8 >> 2] = c[f >> 2];
 if ((e | 0) < -1001e3) if (c[f >> 2] & 64 | 0) {
  g = c[i >> 2] | 0;
  if (a[g + 5 >> 0] & 3) {
   f = c[c[c[j >> 2] >> 2] >> 2] | 0;
   if (a[f + 5 >> 0] & 4) sc(b, f, g);
  }
 }
 c[k >> 2] = (c[k >> 2] | 0) + -16;
 return;
}

function jd(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0;
 k = i;
 i = i + 32 | 0;
 g = k + 8 | 0;
 j = k;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  f = (c[f >> 2] | 0) + (b << 4) | 0;
  a = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[f >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 if ((c[a + 8 >> 2] | 0) != 3) {
  a = zc(a, g) | 0;
  if (!a) {
   if (!e) {
    e = 0;
    i = k;
    return e | 0;
   }
   c[e >> 2] = 0;
   e = 0;
   i = k;
   return e | 0;
  }
 }
 h[j >> 3] = +h[a >> 3] + 6755399441055744.0;
 a = c[j >> 2] | 0;
 if (!e) {
  e = a;
  i = k;
  return e | 0;
 }
 c[e >> 2] = 1;
 e = a;
 i = k;
 return e | 0;
}

function Hc(a, b, e, f) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, j = 0.0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 g = e + -1 | 0;
 a : do if (g >>> 0 < (c[b + 28 >> 2] | 0) >>> 0) {
  g = (c[b + 12 >> 2] | 0) + (g << 4) | 0;
  k = 10;
 } else {
  j = +(e | 0);
  h[l >> 3] = j + 1.0;
  g = (c[l + 4 >> 2] | 0) + (c[l >> 2] | 0) | 0;
  if ((g | 0) < 0) {
   k = 0 - g | 0;
   g = (g | 0) == (k | 0) ? 0 : k;
  }
  g = (c[b + 16 >> 2] | 0) + (((g | 0) % ((1 << (d[b + 7 >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
  while (1) {
   if ((c[g + 24 >> 2] | 0) == 3) if (+h[g + 16 >> 3] == j) break;
   g = c[g + 28 >> 2] | 0;
   if (!g) {
    k = 12;
    break a;
   }
  }
  k = 10;
 } while (0);
 if ((k | 0) == 10) if ((g | 0) == 15088) {
  j = +(e | 0);
  k = 12;
 }
 if ((k | 0) == 12) {
  h[l >> 3] = j;
  c[l + 8 >> 2] = 3;
  g = oc(a, b, l) | 0;
 }
 a = f;
 b = c[a + 4 >> 2] | 0;
 l = g;
 c[l >> 2] = c[a >> 2];
 c[l + 4 >> 2] = b;
 c[g + 8 >> 2] = c[f + 8 >> 2];
 i = m;
 return;
}

function Ff(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 e = c[b + 8 >> 2] & 15;
 switch (e | 0) {
 case 5:
  {
   b = (c[b >> 2] | 0) + 8 | 0;
   break;
  }
 case 7:
  {
   b = (c[b >> 2] | 0) + 8 | 0;
   break;
  }
 default:
  b = (c[a + 12 >> 2] | 0) + 252 + (e << 2) | 0;
 }
 b = c[b >> 2] | 0;
 if (!b) {
  a = 0;
  return a | 0;
 }
 a = a + 8 | 0;
 f = c[a >> 2] | 0;
 c[f >> 2] = b;
 c[f + 8 >> 2] = 69;
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 a = 1;
 return a | 0;
}

function Gl(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 32 | 0;
 g = h;
 c[g >> 2] = 0;
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = 0;
 c[g + 12 >> 2] = 0;
 c[g + 16 >> 2] = 0;
 c[g + 20 >> 2] = 0;
 c[g + 24 >> 2] = 0;
 c[g + 28 >> 2] = 0;
 f = a[d >> 0] | 0;
 do if (!(f << 24 >> 24)) d = 0; else {
  if (!(a[d + 1 >> 0] | 0)) {
   d = b;
   while (1) if ((a[d >> 0] | 0) == f << 24 >> 24) d = d + 1 | 0; else break;
   d = d - b | 0;
   break;
  } else {
   e = d;
   d = f;
  }
  do {
   f = g + (((d & 255) >>> 5 & 255) << 2) | 0;
   c[f >> 2] = c[f >> 2] | 1 << (d & 31);
   e = e + 1 | 0;
   d = a[e >> 0] | 0;
  } while (d << 24 >> 24 != 0);
  e = a[b >> 0] | 0;
  a : do if (!(e << 24 >> 24)) d = b; else {
   d = b;
   do {
    if (!(c[g + (((e & 255) >>> 5 & 255) << 2) >> 2] & 1 << (e & 31))) break a;
    d = d + 1 | 0;
    e = a[d >> 0] | 0;
   } while (e << 24 >> 24 != 0);
  } while (0);
  d = d - b | 0;
 } while (0);
 i = h;
 return d | 0;
}

function ff(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 switch (e | 0) {
 case 13:
  {
   gf(b, f);
   return;
  }
 case 14:
  {
   jf(b, f);
   return;
  }
 case 6:
  {
   qe(b, f);
   if ((c[f >> 2] | 0) == 6) {
    e = c[f + 8 >> 2] | 0;
    if (!(e & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (e | 0)) {
     h = b + 48 | 0;
     a[h >> 0] = (a[h >> 0] | 0) + -1 << 24 >> 24;
    }
   }
   e = b + 48 | 0;
   g = (d[e >> 0] | 0) + 1 | 0;
   h = (c[b >> 2] | 0) + 78 | 0;
   do if (g >>> 0 > (d[h >> 0] | 0) >>> 0) if (g >>> 0 > 249) ae(c[b + 12 >> 2] | 0, 7025); else {
    i = g & 255;
    a[h >> 0] = i;
    break;
   } else i = g & 255; while (0);
   a[e >> 0] = i;
   se(b, f, (i & 255) + -1 | 0);
   return;
  }
 case 5:
 case 4:
 case 3:
 case 2:
 case 1:
 case 0:
  {
   if ((c[f >> 2] | 0) == 5) if ((c[f + 16 >> 2] | 0) == -1) if ((c[f + 20 >> 2] | 0) == -1) return;
   we(b, f) | 0;
   return;
  }
 default:
  {
   we(b, f) | 0;
   return;
  }
 }
}

function hj(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 1056 | 0;
 f = n;
 l = n + 1052 | 0;
 m = n + 1048 | 0;
 k = n + 8 | 0;
 h = tg(a, 1, l) | 0;
 g = Lf(a, 2) | 0;
 j = td(a, 3, 17772, m) | 0;
 if ((g | 0) < 1) {
  ed(a, 17772, 0) | 0;
  m = 1;
  i = n;
  return m | 0;
 }
 b = c[l >> 2] | 0;
 d = c[m >> 2] | 0;
 e = d + b | 0;
 if (e >>> 0 >= b >>> 0) if (e >>> 0 < (2147483647 / (g >>> 0) | 0) >>> 0) {
  f = (R(d, g + -1 | 0) | 0) + (R(b, g) | 0) | 0;
  b = Ni(a, k, f) | 0;
  sn(b | 0, h | 0, c[l >> 2] | 0) | 0;
  if ((g | 0) > 1) do {
   g = g + -1 | 0;
   e = c[l >> 2] | 0;
   b = b + e | 0;
   d = c[m >> 2] | 0;
   if (!d) d = e; else {
    sn(b | 0, j | 0, d | 0) | 0;
    d = c[l >> 2] | 0;
    b = b + (c[m >> 2] | 0) | 0;
   }
   sn(b | 0, h | 0, d | 0) | 0;
  } while ((g | 0) > 1);
  Oi(k, f);
  m = 1;
  i = n;
  return m | 0;
 }
 m = ad(a, 10952, f) | 0;
 i = n;
 return m | 0;
}

function Rc(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 h = b + 12 | 0;
 j = c[h >> 2] | 0;
 f = j + 104 | 0;
 while (1) {
  e = c[f >> 2] | 0;
  if (!e) break; else f = e;
 }
 i = j + 72 | 0;
 e = c[i >> 2] | 0;
 if (!e) e = j; else {
  g = e;
  while (1) {
   e = g + 5 | 0;
   a[e >> 0] = d[e >> 0] | 0 | 8;
   c[i >> 2] = c[g >> 2];
   c[g >> 2] = c[f >> 2];
   c[f >> 2] = g;
   e = c[i >> 2] | 0;
   if (!e) break; else {
    f = g;
    g = e;
   }
  }
  e = c[h >> 2] | 0;
 }
 f = e + 104 | 0;
 e = c[f >> 2] | 0;
 if (e | 0) do {
  h = e + 5 | 0;
  a[h >> 0] = (d[h >> 0] | 0) & 191;
  ob(b, 0);
  e = c[f >> 2] | 0;
 } while ((e | 0) != 0);
 a[j + 60 >> 0] = 3;
 a[j + 62 >> 0] = 0;
 Kb(b, i, -3) | 0;
 Kb(b, j + 68 | 0, -3) | 0;
 g = j + 32 | 0;
 if ((c[g >> 2] | 0) <= 0) return;
 e = j + 24 | 0;
 f = 0;
 do {
  Kb(b, (c[e >> 2] | 0) + (f << 2) | 0, -3) | 0;
  f = f + 1 | 0;
 } while ((f | 0) < (c[g >> 2] | 0));
 return;
}

function Xc(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 g = j;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  f = (c[f >> 2] | 0) + (b << 4) | 0;
  a = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[f >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 if ((c[a + 8 >> 2] | 0) != 3) {
  a = zc(a, g) | 0;
  if (!a) {
   if (!e) {
    e = 0;
    i = j;
    return e | 0;
   }
   c[e >> 2] = 0;
   e = 0;
   i = j;
   return e | 0;
  }
 }
 a = ~~+h[a >> 3];
 if (!e) {
  e = a;
  i = j;
  return e | 0;
 }
 c[e >> 2] = 1;
 e = a;
 i = j;
 return e | 0;
}

function Bm(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 j = R(e, d) | 0;
 if ((c[f + 76 >> 2] | 0) > -1) k = Fl(f) | 0; else k = 0;
 g = f + 74 | 0;
 i = a[g >> 0] | 0;
 a[g >> 0] = i + 255 | i;
 g = f + 4 | 0;
 i = c[g >> 2] | 0;
 h = (c[f + 8 >> 2] | 0) - i | 0;
 if ((h | 0) > 0) {
  h = h >>> 0 < j >>> 0 ? h : j;
  sn(b | 0, i | 0, h | 0) | 0;
  c[g >> 2] = i + h;
  b = b + h | 0;
  g = j - h | 0;
 } else g = j;
 a : do if (!g) l = 13; else {
  i = f + 32 | 0;
  h = g;
  while (1) {
   if (cl(f) | 0) {
    e = h;
    break;
   }
   g = Ua[c[i >> 2] & 15](f, b, h) | 0;
   if ((g + 1 | 0) >>> 0 < 2) {
    e = h;
    break;
   }
   if ((h | 0) == (g | 0)) {
    l = 13;
    break a;
   } else {
    b = b + g | 0;
    h = h - g | 0;
   }
  }
  if (k | 0) Rk(f);
  e = ((j - e | 0) >>> 0) / (d >>> 0) | 0;
 } while (0);
 if ((l | 0) == 13) if (k) Rk(f);
 return e | 0;
}

function Rd(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 g = i;
 i = i + 64 | 0;
 p = g;
 h = a + 36 | 0;
 b[h >> 1] = (b[h >> 1] | 0) + 1 << 16 >> 16;
 c[p >> 2] = d;
 c[p + 56 >> 2] = e;
 c[p + 52 >> 2] = f;
 m = p + 16 | 0;
 c[m >> 2] = 0;
 l = p + 24 | 0;
 c[l >> 2] = 0;
 k = p + 28 | 0;
 c[k >> 2] = 0;
 j = p + 36 | 0;
 c[j >> 2] = 0;
 f = p + 40 | 0;
 c[f >> 2] = 0;
 e = p + 48 | 0;
 c[e >> 2] = 0;
 o = p + 4 | 0;
 c[o >> 2] = 0;
 n = p + 12 | 0;
 c[n >> 2] = 0;
 d = Lc(a, 3, p, (c[a + 8 >> 2] | 0) - (c[a + 28 >> 2] | 0) | 0, c[a + 68 >> 2] | 0) | 0;
 c[o >> 2] = mb(a, c[o >> 2] | 0, c[n >> 2] | 0, 0) | 0;
 c[n >> 2] = 0;
 mb(a, c[m >> 2] | 0, c[l >> 2] << 1, 0) | 0;
 mb(a, c[k >> 2] | 0, c[j >> 2] << 4, 0) | 0;
 mb(a, c[f >> 2] | 0, c[e >> 2] << 4, 0) | 0;
 b[h >> 1] = (b[h >> 1] | 0) + -1 << 16 >> 16;
 i = g;
 return d | 0;
}

function ek(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = c[(c[b >> 2] | 0) + 12 >> 2] | 0;
 b = a + 8 | 0;
 e = c[b >> 2] | 0;
 if (!f) {
  f = 0;
  a = e + 8 | 0;
  c[a >> 2] = f;
  a = c[b >> 2] | 0;
  a = a + 16 | 0;
  c[b >> 2] = a;
  return;
 }
 c[e >> 2] = f;
 f = 69;
 a = e + 8 | 0;
 c[a >> 2] = f;
 a = c[b >> 2] | 0;
 a = a + 16 | 0;
 c[b >> 2] = a;
 return;
}

function Ye(e, f) {
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 l = e + 48 | 0;
 n = c[(c[l >> 2] | 0) + 16 >> 2] | 0;
 g = c[e + 64 >> 2] | 0;
 o = c[g + 12 >> 2] | 0;
 p = n + 4 | 0;
 h = b[p >> 1] | 0;
 m = g + 28 | 0;
 if ((h | 0) >= (c[m >> 2] | 0)) {
  q = 0;
  return q | 0;
 }
 j = g + 24 | 0;
 k = o + (f << 4) | 0;
 g = h;
 while (1) {
  h = c[j >> 2] | 0;
  i = h + (g << 4) | 0;
  if (Ue(c[i >> 2] | 0, c[k >> 2] | 0) | 0) break;
  g = g + 1 | 0;
  if ((g | 0) >= (c[m >> 2] | 0)) {
   g = 0;
   q = 10;
   break;
  }
 }
 if ((q | 0) == 10) return g | 0;
 g = a[h + (g << 4) + 12 >> 0] | 0;
 do if ((d[o + (f << 4) + 12 >> 0] | 0) > (g & 255)) {
  if (!(a[n + 9 >> 0] | 0)) if ((c[m >> 2] | 0) <= (b[p >> 1] | 0)) break;
  Se(c[l >> 2] | 0, c[o + (f << 4) + 4 >> 2] | 0, g & 255);
 } while (0);
 Ve(e, f, i);
 q = 1;
 return q | 0;
}

function Hl(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 h = i;
 i = i + 32 | 0;
 f = h;
 e = a[d >> 0] | 0;
 if (!(e << 24 >> 24)) g = 3; else if (!(a[d + 1 >> 0] | 0)) g = 3; else {
  c[f >> 2] = 0;
  c[f + 4 >> 2] = 0;
  c[f + 8 >> 2] = 0;
  c[f + 12 >> 2] = 0;
  c[f + 16 >> 2] = 0;
  c[f + 20 >> 2] = 0;
  c[f + 24 >> 2] = 0;
  c[f + 28 >> 2] = 0;
  do {
   j = f + (((e & 255) >>> 5 & 255) << 2) | 0;
   c[j >> 2] = c[j >> 2] | 1 << (e & 31);
   d = d + 1 | 0;
   e = a[d >> 0] | 0;
  } while (e << 24 >> 24 != 0);
  d = a[b >> 0] | 0;
  a : do if (!(d << 24 >> 24)) e = b; else {
   e = b;
   do {
    if (c[f + (((d & 255) >>> 5 & 255) << 2) >> 2] & 1 << (d & 31) | 0) break a;
    e = e + 1 | 0;
    d = a[e >> 0] | 0;
   } while (d << 24 >> 24 != 0);
  } while (0);
  e = e - b | 0;
 }
 if ((g | 0) == 3) e = (Il(b, e << 24 >> 24) | 0) - b | 0;
 i = h;
 return e | 0;
}

function sg(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, j = 0, k = 0.0;
 j = i;
 i = i + 16 | 0;
 g = j;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  f = (c[f >> 2] | 0) + (b << 4) | 0;
  a = f >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? f : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[f >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 if ((c[a + 8 >> 2] | 0) != 3) {
  a = zc(a, g) | 0;
  if (!a) {
   if (!e) {
    k = 0.0;
    i = j;
    return +k;
   }
   c[e >> 2] = 0;
   k = 0.0;
   i = j;
   return +k;
  }
 }
 if (e | 0) c[e >> 2] = 1;
 k = +h[a >> 3];
 i = j;
 return +k;
}

function gh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 1056 | 0;
 f = g + 8 | 0;
 e = g + 16 | 0;
 b = tg(a, 1, 0) | 0;
 kd(a, 1);
 Eg(a, -1001e3, 8754);
 Eg(a, 2, b);
 if (sd(a, -1) | 0) {
  i = g;
  return 1;
 }
 kd(a, -2);
 Pg(a, e);
 Eg(a, -1001001, 8454);
 if ((ud(a, 3) | 0) == 5) d = 1; else {
  ad(a, 8874, g) | 0;
  d = 1;
 }
 while (1) {
  pd(a, 3, d);
  if (!(ud(a, -1) | 0)) {
   kd(a, -2);
   Ug(e);
   h = Tc(a, -1, 0) | 0;
   c[f >> 2] = b;
   c[f + 4 >> 2] = h;
   ad(a, 8910, f) | 0;
  }
  Hf(a, b) | 0;
  yf(a, 1, 2, 0, 0);
  if ((ud(a, -2) | 0) == 6) break;
  if (!(Af(a, -2) | 0)) kd(a, -3); else {
   kd(a, -2);
   Tg(e);
  }
  d = d + 1 | 0;
 }
 Hf(a, b) | 0;
 Fd(a, -2);
 yf(a, 2, 1, 0, 0);
 if (ud(a, -1) | 0) _c(a, 2, b);
 Eg(a, 2, b);
 if (ud(a, -1) | 0) {
  i = g;
  return 1;
 }
 Zc(a, 1);
 Cf(a, -1);
 _c(a, 2, b);
 i = g;
 return 1;
}

function Tg(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 16 | 0;
 h = o;
 b = o + 4 | 0;
 d = a + 12 | 0;
 l = c[d >> 2] | 0;
 m = Tc(l, -1, b) | 0;
 n = a + 16 | 0;
 if ((c[a >> 2] | 0) != (n | 0)) Fd(l, -2);
 k = c[b >> 2] | 0;
 f = c[d >> 2] | 0;
 g = a + 4 | 0;
 d = c[g >> 2] | 0;
 j = a + 8 | 0;
 b = c[j >> 2] | 0;
 if ((d - b | 0) >>> 0 < k >>> 0) {
  e = d << 1;
  e = (e - b | 0) >>> 0 < k >>> 0 ? b + k | 0 : e;
  if (e >>> 0 < b >>> 0 | (e - b | 0) >>> 0 < k >>> 0) ad(f, 8242, h) | 0;
  d = Rg(f, e) | 0;
  sn(d | 0, c[a >> 2] | 0, c[j >> 2] | 0) | 0;
  if ((c[a >> 2] | 0) != (n | 0)) Ed(f, -2);
  c[a >> 2] = d;
  c[g >> 2] = e;
  b = c[j >> 2] | 0;
 } else d = c[a >> 2] | 0;
 sn(d + b | 0, m | 0, k | 0) | 0;
 c[j >> 2] = (c[j >> 2] | 0) + k;
 Ed(l, (c[a >> 2] | 0) != (n | 0) ? -2 : -1);
 i = o;
 return;
}

function jg(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  a = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 switch (c[a + 8 >> 2] & 15 | 0) {
 case 4:
  {
   e = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
   return e | 0;
  }
 case 7:
  {
   e = c[(c[a >> 2] | 0) + 16 >> 2] | 0;
   return e | 0;
  }
 case 5:
  {
   e = Bc(c[a >> 2] | 0) | 0;
   return e | 0;
  }
 default:
  {
   e = 0;
   return e | 0;
  }
 }
 return 0;
}

function $g(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 32 | 0;
 h = j + 24 | 0;
 g = j + 8 | 0;
 e = j;
 f = tg(a, 1, 0) | 0;
 b = Ol(f, 46) | 0;
 if (!b) {
  h = 0;
  i = j;
  return h | 0;
 }
 ed(a, f, b - f | 0) | 0;
 b = Tc(a, -1, 0) | 0;
 Eg(a, -1001001, 8397);
 d = Tc(a, -1, 0) | 0;
 if (!d) {
  c[e >> 2] = 8397;
  ad(a, 8321, e) | 0;
 }
 b = Og(a, b, d, 15062, 8240) | 0;
 if (!b) {
  h = 1;
  i = j;
  return h | 0;
 }
 switch (_g(a, b, f) | 0) {
 case 0:
  {
   Hf(a, b) | 0;
   h = 2;
   i = j;
   return h | 0;
  }
 case 2:
  {
   c[h >> 2] = f;
   c[h + 4 >> 2] = b;
   dd(a, 8416, h) | 0;
   h = 1;
   i = j;
   return h | 0;
  }
 default:
  {
   f = Tc(a, 1, 0) | 0;
   h = Tc(a, -1, 0) | 0;
   c[g >> 2] = f;
   c[g + 4 >> 2] = b;
   c[g + 8 >> 2] = h;
   h = ad(a, 8351, g) | 0;
   i = j;
   return h | 0;
  }
 }
 return 0;
}

function pe(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 qe(b, e);
 if ((c[e >> 2] | 0) == 6) {
  f = e + 8 | 0;
  g = c[f >> 2] | 0;
  if ((c[e + 16 >> 2] | 0) == (c[e + 20 >> 2] | 0)) {
   b = g;
   return b | 0;
  }
  if ((g | 0) >= (d[b + 46 >> 0] | 0 | 0)) {
   se(b, e, g);
   b = c[f >> 2] | 0;
   return b | 0;
  }
 }
 qe(b, e);
 if ((c[e >> 2] | 0) == 6) {
  f = c[e + 8 >> 2] | 0;
  if (!(f & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (f | 0)) {
   h = b + 48 | 0;
   a[h >> 0] = (a[h >> 0] | 0) + -1 << 24 >> 24;
  }
 }
 f = b + 48 | 0;
 g = (d[f >> 0] | 0) + 1 | 0;
 h = (c[b >> 2] | 0) + 78 | 0;
 do if (g >>> 0 > (d[h >> 0] | 0) >>> 0) if (g >>> 0 > 249) ae(c[b + 12 >> 2] | 0, 7025); else {
  i = g & 255;
  a[h >> 0] = i;
  break;
 } else i = g & 255; while (0);
 a[f >> 0] = i;
 se(b, e, (i & 255) + -1 | 0);
 b = c[e + 8 >> 2] | 0;
 return b | 0;
}

function ul(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(vl(e) | 0)) {
  g = c[f >> 2] | 0;
  h = 5;
 } else f = 0; else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  f = c[i >> 2] | 0;
  h = f;
  if ((g - f | 0) >>> 0 < d >>> 0) {
   f = Ua[c[e + 36 >> 2] & 15](e, b, d) | 0;
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
   if ((Ua[c[e + 36 >> 2] & 15](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   d = d - f | 0;
   b = b + f | 0;
   g = c[i >> 2] | 0;
  } else {
   g = h;
   f = 0;
  } while (0);
  sn(g | 0, b | 0, d | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + d;
  f = f + d | 0;
 } while (0);
 return f | 0;
}

function Sm(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, i = 0.0;
 h[k >> 3] = a;
 f = c[k >> 2] | 0;
 g = c[k + 4 >> 2] | 0;
 d = qn(f | 0, g | 0, 52) | 0;
 d = d & 2047;
 e = d + -1023 | 0;
 do if ((e | 0) > 51) {
  h[b >> 3] = a;
  if ((f | 0) == 0 & (g & 1048575 | 0) == 0 | (e | 0) != 1024) {
   c[k >> 2] = 0;
   c[k + 4 >> 2] = g & -2147483648;
   a = +h[k >> 3];
  }
 } else {
  if (d >>> 0 < 1023) {
   c[b >> 2] = 0;
   c[b + 4 >> 2] = g & -2147483648;
   break;
  }
  d = qn(-1, 1048575, e | 0) | 0;
  e = C;
  if ((d & f | 0) == 0 & (e & g | 0) == 0) {
   h[b >> 3] = a;
   c[k >> 2] = 0;
   c[k + 4 >> 2] = g & -2147483648;
   a = +h[k >> 3];
   break;
  } else {
   f = f & ~d;
   g = g & ~e;
   c[k >> 2] = f;
   c[k + 4 >> 2] = g;
   i = +h[k >> 3];
   c[b >> 2] = f;
   c[b + 4 >> 2] = g;
   a = a - i;
   break;
  }
 } while (0);
 return +a;
}

function Jm(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 l = i;
 i = i + 64 | 0;
 g = l + 32 | 0;
 j = l + 24 | 0;
 h = l + 8 | 0;
 b = l;
 k = l + 40 | 0;
 f = l + 48 | 0;
 c[k >> 2] = a;
 if (!a) c[k >> 2] = 17773;
 c[b >> 2] = 15068;
 c[b + 4 >> 2] = 7;
 if (!(Da(33, b | 0) | 0)) {
  b = f + 4 | 0;
  d = k;
  e = 0;
  while (1) {
   c[h >> 2] = 0;
   c[h + 4 >> 2] = f;
   c[h + 8 >> 2] = 0;
   da(265, h | 0) | 0;
   a = c[k >> 2] | 0;
   m = c[b >> 2] ^ d ^ a;
   n = c[3800] | 0;
   c[3800] = n + 1;
   c[j >> 2] = n;
   c[j + 4 >> 2] = m;
   Rl(a, 20, 15073, j) | 0;
   c[g >> 2] = c[k >> 2];
   c[g + 4 >> 2] = 0;
   if (Da(33, g | 0) | 0) {
    a = e;
    break;
   }
   a = e + 1 | 0;
   if ((e | 0) < 100) e = a; else break;
  }
  a = (a | 0) > 99 ? 0 : c[k >> 2] | 0;
 } else a = 0;
 i = l;
 return a | 0;
}

function Og(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0;
 k = i;
 i = i + 1056 | 0;
 h = k;
 j = k + 8 | 0;
 Pg(b, j);
 if (a[f >> 0] | 0) d = Qg(b, d, f, g) | 0;
 a : while (1) {
  switch (a[e >> 0] | 0) {
  case 0:
   {
    d = 12;
    break a;
   }
  case 59:
   {
    e = e + 1 | 0;
    continue a;
   }
  default:
   {}
  }
  g = Ol(e, 59) | 0;
  if (!g) f = e + (Jl(e) | 0) | 0; else f = g;
  ed(b, e, f - e | 0) | 0;
  if (!f) {
   d = 12;
   break;
  }
  e = Qg(b, Tc(b, -1, 0) | 0, 8259, d) | 0;
  Ed(b, -2);
  g = fm(e, 9564) | 0;
  if (g | 0) {
   d = 11;
   break;
  }
  c[h >> 2] = e;
  dd(b, 8261, h) | 0;
  Ed(b, -2);
  Tg(j);
  e = f;
 }
 if ((d | 0) == 11) {
  km(g) | 0;
  j = e;
  i = k;
  return j | 0;
 } else if ((d | 0) == 12) {
  Ug(j);
  j = 0;
  i = k;
  return j | 0;
 }
 return 0;
}

function Vd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 16 | 0;
 m = n;
 if (!d) {
  a = 0;
  i = n;
  return a | 0;
 }
 h = a + 16 | 0;
 j = a + 8 | 0;
 k = a + 12 | 0;
 l = a + 4 | 0;
 e = c[a >> 2] | 0;
 while (1) {
  if (!e) {
   f = Ua[c[j >> 2] & 15](c[h >> 2] | 0, c[k >> 2] | 0, m) | 0;
   e = c[m >> 2] | 0;
   if ((f | 0) == 0 | (e | 0) == 0) {
    b = 8;
    break;
   }
   c[a >> 2] = e;
   c[l >> 2] = f;
   g = f;
  } else g = c[l >> 2] | 0;
  f = d >>> 0 > e >>> 0 ? e : d;
  sn(b | 0, g | 0, f | 0) | 0;
  e = (c[a >> 2] | 0) - f | 0;
  c[a >> 2] = e;
  c[l >> 2] = (c[l >> 2] | 0) + f;
  if ((d | 0) == (f | 0)) {
   d = 0;
   b = 8;
   break;
  } else {
   d = d - f | 0;
   b = b + f | 0;
  }
 }
 if ((b | 0) == 8) {
  i = n;
  return d | 0;
 }
 return 0;
}

function $i(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 g = Jl(b) | 0;
 h = c[a + 12 >> 2] | 0;
 j = a + 4 | 0;
 d = c[j >> 2] | 0;
 k = a + 8 | 0;
 f = c[k >> 2] | 0;
 if ((d - f | 0) >>> 0 >= g >>> 0) {
  j = c[a >> 2] | 0;
  a = f;
  a = j + a | 0;
  sn(a | 0, b | 0, g | 0) | 0;
  b = c[k >> 2] | 0;
  b = b + g | 0;
  c[k >> 2] = b;
  i = l;
  return;
 }
 e = d << 1;
 e = (e - f | 0) >>> 0 < g >>> 0 ? f + g | 0 : e;
 if (e >>> 0 < f >>> 0 | (e - f | 0) >>> 0 < g >>> 0) ad(h, 8242, l) | 0;
 d = Rg(h, e) | 0;
 sn(d | 0, c[a >> 2] | 0, c[k >> 2] | 0) | 0;
 if ((c[a >> 2] | 0) != (a + 16 | 0)) Ed(h, -2);
 c[a >> 2] = d;
 c[j >> 2] = e;
 j = d;
 a = c[k >> 2] | 0;
 a = j + a | 0;
 sn(a | 0, b | 0, g | 0) | 0;
 b = c[k >> 2] | 0;
 b = b + g | 0;
 c[k >> 2] = b;
 i = l;
 return;
}

function cf(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 pe(b, e) | 0;
 g = e + 8 | 0;
 i = c[g >> 2] | 0;
 if ((c[e >> 2] | 0) == 6 & (i & 256 | 0) == 0) if ((d[b + 46 >> 0] | 0 | 0) <= (i | 0)) {
  k = b + 48 | 0;
  a[k >> 0] = (a[k >> 0] | 0) + -1 << 24 >> 24;
 }
 k = b + 48 | 0;
 j = d[k >> 0] | 0;
 c[g >> 2] = j;
 c[e >> 2] = 6;
 g = j + 2 | 0;
 e = (c[b >> 2] | 0) + 78 | 0;
 do if (g >>> 0 > (d[e >> 0] | 0) >>> 0) if (g >>> 0 > 249) ae(c[b + 12 >> 2] | 0, 7025); else {
  h = g & 255;
  a[e >> 0] = h;
  break;
 } else h = g & 255; while (0);
 a[k >> 0] = h;
 re(b, i << 23 | j << 6 | (we(b, f) | 0) << 14 | 12) | 0;
 if ((c[f >> 2] | 0) != 6) return;
 g = c[f + 8 >> 2] | 0;
 if (g & 256 | 0) return;
 if ((d[b + 46 >> 0] | 0 | 0) > (g | 0)) return;
 a[k >> 0] = (a[k >> 0] | 0) + -1 << 24 >> 24;
 return;
}

function fb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 32 | 0;
 j = k + 24 | 0;
 h = k + 16 | 0;
 e = k + 8 | 0;
 d = k;
 g = gb() | 0;
 if (!g) {
  b = c[b >> 2] | 0;
  a = c[720] | 0;
  if (b | 0) {
   c[d >> 2] = b;
   em(a, 5396, d) | 0;
   lm(a) | 0;
  }
  c[e >> 2] = 5401;
  em(a, 11968, e) | 0;
  lm(a) | 0;
  j = 1;
  i = k;
  return j | 0;
 }
 Of(g, 142, 0);
 Kd(g, a);
 wk(g, b);
 f = dg(g, 2, 1, 0, 0, 0) | 0;
 e = sd(g, -1) | 0;
 f = (f | 0) == 0;
 if (!f) {
  if ((ud(g, -1) | 0) == 4) b = Tc(g, -1, 0) | 0; else b = 0;
  d = c[356] | 0;
  a = c[720] | 0;
  if (d | 0) {
   c[h >> 2] = d;
   em(a, 5396, h) | 0;
   lm(a) | 0;
  }
  c[j >> 2] = (b | 0) == 0 ? 12154 : b;
  em(a, 11968, j) | 0;
  lm(a) | 0;
  kd(g, -2);
 }
 Di(g);
 j = f & (e | 0) != 0 & 1 ^ 1;
 i = k;
 return j | 0;
}

function al(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 f = b + 104 | 0;
 e = c[f >> 2] | 0;
 if (!e) j = 3; else if ((c[b + 108 >> 2] | 0) < (e | 0)) j = 3; else j = 4;
 if ((j | 0) == 3) {
  e = bl(b) | 0;
  if ((e | 0) < 0) j = 4; else {
   f = c[f >> 2] | 0;
   i = c[b + 8 >> 2] | 0;
   if (!f) {
    g = i;
    j = 9;
   } else {
    h = c[b + 4 >> 2] | 0;
    f = f - (c[b + 108 >> 2] | 0) | 0;
    g = i;
    if ((i - h | 0) < (f | 0)) j = 9; else c[b + 100 >> 2] = h + (f + -1);
   }
   if ((j | 0) == 9) c[b + 100 >> 2] = i;
   f = b + 4 | 0;
   if (!g) f = c[f >> 2] | 0; else {
    f = c[f >> 2] | 0;
    b = b + 108 | 0;
    c[b >> 2] = g + 1 - f + (c[b >> 2] | 0);
   }
   f = f + -1 | 0;
   if ((d[f >> 0] | 0 | 0) != (e | 0)) a[f >> 0] = e;
  }
 }
 if ((j | 0) == 4) {
  c[b + 100 >> 2] = 0;
  e = -1;
 }
 return e | 0;
}

function Dh(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 h = c[a + 12 >> 2] | 0;
 j = a + 4 | 0;
 e = c[j >> 2] | 0;
 k = a + 8 | 0;
 g = c[k >> 2] | 0;
 if ((e - g | 0) >>> 0 >= d >>> 0) {
  j = c[a >> 2] | 0;
  a = g;
  a = j + a | 0;
  sn(a | 0, b | 0, d | 0) | 0;
  b = c[k >> 2] | 0;
  b = b + d | 0;
  c[k >> 2] = b;
  i = l;
  return;
 }
 f = e << 1;
 f = (f - g | 0) >>> 0 < d >>> 0 ? g + d | 0 : f;
 if (f >>> 0 < g >>> 0 | (f - g | 0) >>> 0 < d >>> 0) ad(h, 8242, l) | 0;
 e = Rg(h, f) | 0;
 sn(e | 0, c[a >> 2] | 0, c[k >> 2] | 0) | 0;
 if ((c[a >> 2] | 0) != (a + 16 | 0)) Ed(h, -2);
 c[a >> 2] = e;
 c[j >> 2] = f;
 j = e;
 a = c[k >> 2] | 0;
 a = j + a | 0;
 sn(a | 0, b | 0, d | 0) | 0;
 b = c[k >> 2] | 0;
 b = b + d | 0;
 c[k >> 2] = b;
 i = l;
 return;
}

function Pd(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0;
 h = i;
 i = i + 32 | 0;
 j = h;
 Qd(b, j, d, e);
 g = Rd(b, j, (f | 0) == 0 ? 8259 : f, g) | 0;
 if (g | 0) {
  i = h;
  return g | 0;
 }
 f = c[(c[b + 8 >> 2] | 0) + -16 >> 2] | 0;
 if ((a[f + 6 >> 0] | 0) != 1) {
  i = h;
  return g | 0;
 }
 e = qd(c[(c[b + 12 >> 2] | 0) + 40 >> 2] | 0, 2) | 0;
 f = f + 16 | 0;
 d = c[(c[f >> 2] | 0) + 8 >> 2] | 0;
 l = e;
 k = c[l + 4 >> 2] | 0;
 j = d;
 c[j >> 2] = c[l >> 2];
 c[j + 4 >> 2] = k;
 j = e + 8 | 0;
 c[d + 8 >> 2] = c[j >> 2];
 if (!(c[j >> 2] & 64)) {
  i = h;
  return g | 0;
 }
 e = c[e >> 2] | 0;
 if (!(a[e + 5 >> 0] & 3)) {
  i = h;
  return g | 0;
 }
 f = c[f >> 2] | 0;
 if (!(a[f + 5 >> 0] & 4)) {
  i = h;
  return g | 0;
 }
 sc(b, f, e);
 i = h;
 return g | 0;
}

function He(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 switch (c[e >> 2] | 0) {
 case 12:
  {
   b = (c[(c[b >> 2] | 0) + 12 >> 2] | 0) + (c[e + 8 >> 2] << 2) | 0;
   c[b >> 2] = c[b >> 2] & -8372225 | (f << 14) + 16384 & 8372224;
   return;
  }
 case 13:
  {
   i = e + 8 | 0;
   g = c[b >> 2] | 0;
   e = c[g + 12 >> 2] | 0;
   j = e + (c[i >> 2] << 2) | 0;
   c[j >> 2] = c[j >> 2] & 8388607 | (f << 23) + 8388608;
   i = e + (c[i >> 2] << 2) | 0;
   e = b + 48 | 0;
   f = d[e >> 0] | 0;
   c[i >> 2] = f << 6 | c[i >> 2] & -16321;
   f = f + 1 | 0;
   g = g + 78 | 0;
   do if (f >>> 0 > (d[g >> 0] | 0) >>> 0) if (f >>> 0 > 249) ae(c[b + 12 >> 2] | 0, 7025); else {
    h = f & 255;
    a[g >> 0] = h;
    break;
   } else h = f & 255; while (0);
   a[e >> 0] = h;
   return;
  }
 default:
  return;
 }
}

function _c(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[f >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  b = c[f >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (g | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 g = a + 8 | 0;
 f = c[g >> 2] | 0;
 c[g >> 2] = f + 16;
 e = Oc(a, e) | 0;
 c[f >> 2] = e;
 c[f + 8 >> 2] = d[e + 4 >> 0] | 0 | 64;
 e = c[g >> 2] | 0;
 nc(a, b, e + -16 | 0, e + -32 | 0);
 c[g >> 2] = (c[g >> 2] | 0) + -32;
 return;
}

function pd(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[f >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  b = c[f >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (g | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 g = qd(c[b >> 2] | 0, e) | 0;
 e = a + 8 | 0;
 a = c[e >> 2] | 0;
 h = g;
 b = c[h + 4 >> 2] | 0;
 f = a;
 c[f >> 2] = c[h >> 2];
 c[f + 4 >> 2] = b;
 c[a + 8 >> 2] = c[g + 8 >> 2];
 c[e >> 2] = (c[e >> 2] | 0) + 16;
 return;
}

function bh(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 112 | 0;
 d = g;
 c = g + 4 | 0;
 b = tg(a, 1, 0) | 0;
 f = yd(a) | 0;
 ch(a, b, 1);
 Eg(a, -1, 8814);
 h = (ud(a, -1) | 0) == 0;
 kd(a, -2);
 if (h) {
  Cf(a, -1);
  _c(a, -2, 8820);
  Hf(a, b) | 0;
  _c(a, -2, 8814);
  h = Ll(b, 46) | 0;
  ed(a, b, ((h | 0) == 0 ? b : h + 1 | 0) - b | 0) | 0;
  _c(a, -2, 8823);
 }
 Cf(a, -1);
 if (!(bd(a, 1, c) | 0)) e = 6; else if (!(cd(a, 8832, c) | 0)) e = 6; else if (fh(a, -1) | 0) e = 6;
 if ((e | 0) == 6) ad(a, 8834, d) | 0;
 Cf(a, -2);
 Rf(a, -2, 1) | 0;
 kd(a, -2);
 if ((f | 0) < 2) {
  i = g;
  return 1;
 } else b = 2;
 while (1) {
  if ((ud(a, b) | 0) == 6) {
   Cf(a, b);
   Cf(a, -2);
   yf(a, 1, 0, 0, 0);
  }
  if ((b | 0) == (f | 0)) break; else b = b + 1 | 0;
 }
 i = g;
 return 1;
}

function Li(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 h = k;
 f = k + 4 | 0;
 j = tg(a, 1, f) | 0;
 b = Jd(a, 2, 1) | 0;
 e = c[f >> 2] | 0;
 if ((b | 0) <= -1) if (e >>> 0 < (0 - b | 0) >>> 0) b = 0; else b = b + 1 + e | 0;
 e = Jd(a, 3, b) | 0;
 g = c[f >> 2] | 0;
 if ((e | 0) <= -1) if (g >>> 0 < (0 - e | 0) >>> 0) e = 0; else e = e + 1 + g | 0;
 f = (b | 0) == 0 ? 1 : b;
 e = e >>> 0 > g >>> 0 ? g : e;
 if (e >>> 0 < f >>> 0) {
  a = 0;
  i = k;
  return a | 0;
 }
 b = e - f + 1 | 0;
 if ((e | 0) == -1) {
  a = ad(a, 10224, h) | 0;
  i = k;
  return a | 0;
 }
 Wf(a, b, 10224);
 if ((b | 0) <= 0) {
  a = b;
  i = k;
  return a | 0;
 }
 e = f + -1 | 0;
 f = 0;
 do {
  Kd(a, d[j + (e + f) >> 0] | 0);
  f = f + 1 | 0;
 } while ((f | 0) < (b | 0));
 i = k;
 return b | 0;
}

function Af(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  if (b >>> 0 >= (c[a + 8 >> 2] | 0) >>> 0) {
   a = 0;
   a = a & 1;
   return a | 0;
  }
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  a = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) {
   a = 0;
   a = a & 1;
   return a | 0;
  }
  b = c[b >> 2] | 0;
  if ((a | 0) > (d[b + 6 >> 0] | 0 | 0)) {
   a = 0;
   a = a & 1;
   return a | 0;
  } else b = b + 16 + (a + -1 << 4) | 0;
 } while (0);
 if ((b | 0) == 15088) {
  a = 0;
  a = a & 1;
  return a | 0;
 }
 a = ((c[b + 8 >> 2] & 15) + -3 | 0) >>> 0 < 2;
 a = a & 1;
 return a | 0;
}

function tf(b, f, g) {
 b = b | 0;
 f = f | 0;
 g = g | 0;
 var h = 0;
 switch (c[f >> 2] | 0) {
 case 7:
  {
   if ((c[g >> 2] | 0) == 6) {
    h = c[g + 8 >> 2] | 0;
    if (!(h & 256)) if ((d[b + 46 >> 0] | 0) <= (h | 0)) {
     h = b + 48 | 0;
     a[h >> 0] = (a[h >> 0] | 0) + -1 << 24 >> 24;
    }
   }
   se(b, g, c[f + 8 >> 2] | 0);
   return;
  }
 case 8:
  {
   re(b, (pe(b, g) | 0) << 6 | c[f + 8 >> 2] << 23 | 9) | 0;
   break;
  }
 case 9:
  {
   f = f + 8 | 0;
   h = (a[f + 3 >> 0] | 0) == 7 ? 10 : 8;
   re(b, (we(b, g) | 0) << 14 | h | d[f + 2 >> 0] << 6 | e[f >> 1] << 23) | 0;
   break;
  }
 default:
  {}
 }
 if ((c[g >> 2] | 0) != 6) return;
 h = c[g + 8 >> 2] | 0;
 if (h & 256 | 0) return;
 if ((d[b + 46 >> 0] | 0) > (h | 0)) return;
 b = b + 48 | 0;
 a[b >> 0] = (a[b >> 0] | 0) + -1 << 24 >> 24;
 return;
}

function ql(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 128 | 0;
 g = n + 112 | 0;
 m = n;
 h = m;
 j = 3468;
 k = h + 112 | 0;
 do {
  c[h >> 2] = c[j >> 2];
  h = h + 4 | 0;
  j = j + 4 | 0;
 } while ((h | 0) < (k | 0));
 if ((d + -1 | 0) >>> 0 > 2147483646) if (!d) {
  d = 1;
  l = 4;
 } else {
  c[(Ok() | 0) >> 2] = 75;
  d = -1;
 } else {
  g = b;
  l = 4;
 }
 if ((l | 0) == 4) {
  l = -2 - g | 0;
  l = d >>> 0 > l >>> 0 ? l : d;
  c[m + 48 >> 2] = l;
  b = m + 20 | 0;
  c[b >> 2] = g;
  c[m + 44 >> 2] = g;
  d = g + l | 0;
  g = m + 16 | 0;
  c[g >> 2] = d;
  c[m + 28 >> 2] = d;
  d = sl(m, e, f) | 0;
  if (l) {
   e = c[b >> 2] | 0;
   a[e + (((e | 0) == (c[g >> 2] | 0)) << 31 >> 31) >> 0] = 0;
  }
 }
 i = n;
 return d | 0;
}

function If(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 a = a + 8 | 0;
 f = jc(c[b >> 2] | 0, (c[a >> 2] | 0) + -16 | 0) | 0;
 a = c[a >> 2] | 0;
 g = f;
 b = c[g + 4 >> 2] | 0;
 e = a + -16 | 0;
 c[e >> 2] = c[g >> 2];
 c[e + 4 >> 2] = b;
 c[a + -8 >> 2] = c[f + 8 >> 2];
 return;
}

function Ib(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;
 if ((e | 0) == (f | 0)) return;
 do {
  j = e + 16 | 0;
  g = c[j >> 2] | 0;
  l = g + (1 << (d[e + 7 >> 0] | 0) << 5) | 0;
  k = e + 28 | 0;
  if ((c[k >> 2] | 0) > 0) {
   g = e + 12 | 0;
   i = 0;
   do {
    h = c[g >> 2] | 0;
    if (Jb(b, h + (i << 4) | 0) | 0) c[h + (i << 4) + 8 >> 2] = 0;
    i = i + 1 | 0;
   } while ((i | 0) < (c[k >> 2] | 0));
   g = c[j >> 2] | 0;
  }
  if (g >>> 0 < l >>> 0) do {
   h = g + 8 | 0;
   if (c[h >> 2] | 0) if (Jb(b, g) | 0) {
    c[h >> 2] = 0;
    h = g + 24 | 0;
    if (c[h >> 2] & 64 | 0) if (a[(c[g + 16 >> 2] | 0) + 5 >> 0] & 3) c[h >> 2] = 11;
   }
   g = g + 32 | 0;
  } while (g >>> 0 < l >>> 0);
  e = c[e + 24 >> 2] | 0;
 } while ((e | 0) != (f | 0));
 return;
}

function Yh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g + 8 | 0;
 b = Yc(a, -1001001) | 0;
 d = Xc(a, -1001002, 0) | 0;
 if (!(c[b + 4 >> 2] | 0)) {
  f = ad(a, 9616, g) | 0;
  i = g;
  return f | 0;
 }
 kd(a, 1);
 if ((d | 0) >= 1) {
  e = 1;
  while (1) {
   Cf(a, -1001003 - e | 0);
   if ((e | 0) == (d | 0)) break; else e = e + 1 | 0;
  }
 }
 b = Zh(a, c[b >> 2] | 0, 2) | 0;
 if (ud(a, 0 - b | 0) | 0) {
  f = b;
  i = g;
  return f | 0;
 }
 if ((b | 0) > 1) {
  c[f >> 2] = Tc(a, 1 - b | 0, 0) | 0;
  f = ad(a, 9677, f) | 0;
  i = g;
  return f | 0;
 }
 if (!(sd(a, -1001003) | 0)) {
  f = 0;
  i = g;
  return f | 0;
 }
 kd(a, 0);
 Cf(a, -1001001);
 e = (Ph(a, 1, 9473) | 0) + 4 | 0;
 f = c[e >> 2] | 0;
 c[e >> 2] = 0;
 Xa[f & 255](a) | 0;
 f = 0;
 i = g;
 return f | 0;
}

function Qc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 d = a + 12 | 0;
 f = c[d >> 2] | 0;
 e = a + 28 | 0;
 Pb(a, c[e >> 2] | 0);
 Rc(a);
 d = c[d >> 2] | 0;
 mb(a, c[d + 24 >> 2] | 0, c[d + 32 >> 2] << 2, 0) | 0;
 d = f + 144 | 0;
 b = f + 152 | 0;
 c[d >> 2] = mb(a, c[d >> 2] | 0, c[b >> 2] | 0, 0) | 0;
 c[b >> 2] = 0;
 b = c[e >> 2] | 0;
 if (!b) {
  e = c[f >> 2] | 0;
  f = f + 4 | 0;
  f = c[f >> 2] | 0;
  Ya[e & 3](f, a, 400, 0) | 0;
  return;
 }
 c[a + 16 >> 2] = a + 72;
 g = a + 84 | 0;
 d = c[g >> 2] | 0;
 c[g >> 2] = 0;
 if (d) {
  b = d;
  do {
   g = b;
   b = c[b + 12 >> 2] | 0;
   mb(a, g, 40, 0) | 0;
  } while ((b | 0) != 0);
  b = c[e >> 2] | 0;
 }
 mb(a, b, c[a + 32 >> 2] << 4, 0) | 0;
 e = c[f >> 2] | 0;
 g = f + 4 | 0;
 g = c[g >> 2] | 0;
 Ya[e & 3](g, a, 400, 0) | 0;
 return;
}

function Il(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = d & 255;
 a : do if (!f) b = b + (Jl(b) | 0) | 0; else {
  if (b & 3) {
   e = d & 255;
   do {
    g = a[b >> 0] | 0;
    if (g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 == e << 24 >> 24) break a;
    b = b + 1 | 0;
   } while ((b & 3 | 0) != 0);
  }
  f = R(f, 16843009) | 0;
  e = c[b >> 2] | 0;
  b : do if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) do {
   g = e ^ f;
   if ((g & -2139062144 ^ -2139062144) & g + -16843009 | 0) break b;
   b = b + 4 | 0;
   e = c[b >> 2] | 0;
  } while (!((e & -2139062144 ^ -2139062144) & e + -16843009 | 0)); while (0);
  e = d & 255;
  while (1) {
   g = a[b >> 0] | 0;
   if (g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 == e << 24 >> 24) break; else b = b + 1 | 0;
  }
 } while (0);
 return b | 0;
}

function Yc(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  a = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 switch (c[a + 8 >> 2] & 15 | 0) {
 case 7:
  {
   e = (c[a >> 2] | 0) + 24 | 0;
   return e | 0;
  }
 case 2:
  {
   e = c[a >> 2] | 0;
   return e | 0;
  }
 default:
  {
   e = 0;
   return e | 0;
  }
 }
 return 0;
}

function Cf(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 a = a + 8 | 0;
 f = c[a >> 2] | 0;
 h = b;
 g = c[h + 4 >> 2] | 0;
 e = f;
 c[e >> 2] = c[h >> 2];
 c[e + 4 >> 2] = g;
 c[f + 8 >> 2] = c[b + 8 >> 2];
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 return;
}

function cm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 48 | 0;
 j = k + 24 | 0;
 g = k + 16 | 0;
 f = k;
 a : do if ((a | 0) == (b | 0)) e = Nk(-22) | 0; else {
  h = (d & 524288 | 0) != 0;
  b : do if (h) {
   c : while (1) {
    c[f >> 2] = a;
    c[f + 4 >> 2] = b;
    c[f + 8 >> 2] = d;
    e = ta(330, f | 0) | 0;
    switch (e | 0) {
    case -38:
     break b;
    case -16:
     break;
    default:
     break c;
    }
   }
   e = Nk(e) | 0;
   break a;
  } while (0);
  do {
   c[g >> 2] = a;
   c[g + 4 >> 2] = b;
   e = fa(63, g | 0) | 0;
  } while ((e | 0) == -16);
  if (h) {
   c[j >> 2] = b;
   c[j + 4 >> 2] = 2;
   c[j + 8 >> 2] = 1;
   ba(221, j | 0) | 0;
  }
  e = Nk(e) | 0;
 } while (0);
 i = k;
 return e | 0;
}

function Of(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 if (!d) {
  f = a + 8 | 0;
  e = c[f >> 2] | 0;
  c[e >> 2] = b;
  c[e + 8 >> 2] = 22;
  e = c[f >> 2] | 0;
  e = e + 16 | 0;
  c[f >> 2] = e;
  return;
 }
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(a);
 f = Pf(a, d) | 0;
 c[f + 12 >> 2] = b;
 e = a + 8 | 0;
 a = (c[e >> 2] | 0) + (0 - d << 4) | 0;
 c[e >> 2] = a;
 b = d;
 do {
  b = b + -1 | 0;
  h = a + (b << 4) | 0;
  g = c[h + 4 >> 2] | 0;
  d = f + 16 + (b << 4) | 0;
  c[d >> 2] = c[h >> 2];
  c[d + 4 >> 2] = g;
  c[f + 16 + (b << 4) + 8 >> 2] = c[a + (b << 4) + 8 >> 2];
  a = c[e >> 2] | 0;
 } while ((b | 0) != 0);
 c[a >> 2] = f;
 c[a + 8 >> 2] = 102;
 h = e;
 g = c[h >> 2] | 0;
 g = g + 16 | 0;
 c[h >> 2] = g;
 return;
}

function Eg(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[f >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  g = -1001e3 - b | 0;
  b = c[f >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (g | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (g + -1 << 4) | 0;
  }
 } while (0);
 g = a + 8 | 0;
 f = c[g >> 2] | 0;
 e = Oc(a, e) | 0;
 c[f >> 2] = e;
 c[f + 8 >> 2] = d[e + 4 >> 0] | 0 | 64;
 e = c[g >> 2] | 0;
 c[g >> 2] = e + 16;
 ic(a, b, e, e);
 return;
}

function Ch(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 1072 | 0;
 j = k + 8 | 0;
 h = k;
 f = k + 24 | 0;
 g = k + 16 | 0;
 d = td(a, 2, 17772, g) | 0;
 Mf(a, 1, 5);
 b = Jd(a, 3, 1) | 0;
 if ((ud(a, 4) | 0) < 1) e = Jg(a, 1) | 0; else e = Lf(a, 4) | 0;
 Pg(a, f);
 if ((b | 0) < (e | 0)) do {
  pd(a, 1, b);
  if (!(Af(a, -1) | 0)) {
   c[h >> 2] = vd(a, ud(a, -1) | 0) | 0;
   c[h + 4 >> 2] = b;
   ad(a, 9246, h) | 0;
  }
  Tg(f);
  Dh(f, d, c[g >> 2] | 0);
  b = b + 1 | 0;
 } while ((b | 0) != (e | 0)); else if ((b | 0) != (e | 0)) {
  Ug(f);
  i = k;
  return 1;
 }
 pd(a, 1, e);
 if (!(Af(a, -1) | 0)) {
  c[j >> 2] = vd(a, ud(a, -1) | 0) | 0;
  c[j + 4 >> 2] = e;
  ad(a, 9246, j) | 0;
 }
 Tg(f);
 Ug(f);
 i = k;
 return 1;
}

function zk(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0, g = 0;
 if ((ud(a, 1) | 0) == 8) {
  e = mh(a, 1) | 0;
  b = 1;
 } else {
  e = a;
  b = 0;
 }
 f = b + 1 | 0;
 if ((ud(a, f) | 0) < 1) {
  kd(a, f);
  b = 0;
  c = 0;
  d = 0;
 } else {
  c = tg(a, b | 2, 0) | 0;
  Mf(a, f, 6);
  g = Jd(a, b + 3 | 0, 0) | 0;
  d = (Ol(c, 99) | 0) != 0 & 1;
  b = (Ol(c, 114) | 0) == 0;
  d = b ? d : d | 2;
  b = (Ol(c, 108) | 0) == 0;
  d = b ? d : d | 4;
  b = g;
  c = 8;
  d = (g | 0) > 0 ? d | 8 : d;
 }
 if (Dg(a, -1001e3, 11434) | 0) {
  vh(e) | 0;
  kh(e, a, 1);
  Cf(a, f);
  mg(a, -3);
  Ak(e, c, d, b) | 0;
  return 0;
 }
 Hf(a, 11894) | 0;
 _c(a, -2, 11896);
 Cf(a, -1);
 pg(a, -2) | 0;
 vh(e) | 0;
 kh(e, a, 1);
 Cf(a, f);
 mg(a, -3);
 Ak(e, c, d, b) | 0;
 return 0;
}

function sd(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  a = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 b = c[a + 8 >> 2] | 0;
 if (!b) {
  e = 0;
  e = e & 1;
  return e | 0;
 }
 if ((b | 0) != 1) {
  e = 1;
  e = e & 1;
  return e | 0;
 }
 e = (c[a >> 2] | 0) != 0;
 e = e & 1;
 return e | 0;
}

function lk(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  a = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 if ((c[a + 8 >> 2] | 0) == 3) {
  f = 1;
  f = f & 1;
  i = g;
  return f | 0;
 }
 f = (zc(a, f) | 0) != 0;
 f = f & 1;
 i = g;
 return f | 0;
}

function Jc(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 i = c[b + 12 >> 2] | 0;
 g = b + 56 | 0;
 f = c[g >> 2] | 0;
 a : do if (!f) f = g; else {
  while (1) {
   h = c[f + 8 >> 2] | 0;
   if (h >>> 0 < e >>> 0) {
    f = g;
    break a;
   }
   if ((h | 0) == (e | 0)) break;
   g = c[f >> 2] | 0;
   if (!g) break a; else {
    h = f;
    f = g;
    g = h;
   }
  }
  g = f + 5 | 0;
  h = (d[g >> 0] | 0) ^ 3;
  if (((d[i + 60 >> 0] | 0) ^ 3) & h | 0) {
   i = f;
   return i | 0;
  }
  a[g >> 0] = h;
  i = f;
  return i | 0;
 } while (0);
 b = Tb(b, 10, 32, f, 0) | 0;
 c[b + 8 >> 2] = e;
 h = b + 16 | 0;
 c[h >> 2] = i + 112;
 i = i + 128 + 4 | 0;
 e = c[i >> 2] | 0;
 c[h + 4 >> 2] = e;
 c[e + 16 >> 2] = b;
 c[i >> 2] = b;
 i = b;
 return i | 0;
}

function wd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 128 | 0;
 h = j + 16 | 0;
 f = j + 8 | 0;
 e = j;
 g = j + 28 | 0;
 if (!(bd(a, 0, g) | 0)) {
  c[e >> 2] = b;
  c[e + 4 >> 2] = d;
  h = ad(a, 6139, e) | 0;
  i = j;
  return h | 0;
 }
 cd(a, 9377, g) | 0;
 if (!(Ql(c[g + 8 >> 2] | 0, 6161) | 0)) {
  b = b + -1 | 0;
  if (!b) {
   c[f >> 2] = c[g + 4 >> 2];
   c[f + 4 >> 2] = d;
   h = ad(a, 6168, f) | 0;
   i = j;
   return h | 0;
  } else f = b;
 } else f = b;
 e = g + 4 | 0;
 b = c[e >> 2] | 0;
 if (!b) {
  if (!(xd(a, g) | 0)) b = 8259; else b = Tc(a, -1, 0) | 0;
  c[e >> 2] = b;
 }
 c[h >> 2] = f;
 c[h + 4 >> 2] = b;
 c[h + 8 >> 2] = d;
 h = ad(a, 6220, h) | 0;
 i = j;
 return h | 0;
}

function Yi(a, b) {
 a = a | 0;
 b = b | 0;
 do switch (Wk(b) | 0) {
 case 97:
  {
   a = Xl(a) | 0;
   break;
  }
 case 99:
  {
   a = Yl(a) | 0;
   break;
  }
 case 100:
  {
   a = (a + -48 | 0) >>> 0 < 10 & 1;
   break;
  }
 case 103:
  {
   a = Ul(a) | 0;
   break;
  }
 case 108:
  {
   a = Zk(a) | 0;
   break;
  }
 case 112:
  {
   a = am(a) | 0;
   break;
  }
 case 115:
  {
   a = dl(a) | 0;
   break;
  }
 case 117:
  {
   a = Xk(a) | 0;
   break;
  }
 case 119:
  {
   a = Zl(a) | 0;
   break;
  }
 case 120:
  {
   a = Vl(a) | 0;
   break;
  }
 case 122:
  {
   a = (a | 0) == 0 & 1;
   break;
  }
 default:
  {
   b = (b | 0) == (a | 0) & 1;
   return b | 0;
  }
 } while (0);
 b = (Zk(b) | 0) == 0;
 b = b ? (a | 0) == 0 & 1 : a;
 return b | 0;
}

function Bd(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = a + 8 | 0;
 a = Cd(a, c[b >> 2] | 0, (c[f >> 2] | 0) + -16 | 0) | 0;
 e = c[f >> 2] | 0;
 c[f >> 2] = (a | 0) == 0 ? e + -16 | 0 : e + 16 | 0;
 return a | 0;
}

function kh(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 if ((a | 0) == (b | 0)) return;
 g = a + 8 | 0;
 a = c[g >> 2] | 0;
 e = 0 - d | 0;
 f = a + (e << 4) | 0;
 c[g >> 2] = f;
 if ((d | 0) <= 0) return;
 b = b + 8 | 0;
 h = c[b >> 2] | 0;
 c[b >> 2] = h + 16;
 j = f;
 i = c[j + 4 >> 2] | 0;
 f = h;
 c[f >> 2] = c[j >> 2];
 c[f + 4 >> 2] = i;
 c[h + 8 >> 2] = c[a + (e << 4) + 8 >> 2];
 if ((d | 0) == 1) return; else a = 1;
 do {
  i = c[g >> 2] | 0;
  j = c[b >> 2] | 0;
  c[b >> 2] = j + 16;
  e = i + (a << 4) | 0;
  f = c[e + 4 >> 2] | 0;
  h = j;
  c[h >> 2] = c[e >> 2];
  c[h + 4 >> 2] = f;
  c[j + 8 >> 2] = c[i + (a << 4) + 8 >> 2];
  a = a + 1 | 0;
 } while ((a | 0) != (d | 0));
 return;
}

function qd(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0.0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 f = k;
 e = b + -1 | 0;
 if (e >>> 0 < (c[a + 28 >> 2] | 0) >>> 0) {
  j = (c[a + 12 >> 2] | 0) + (e << 4) | 0;
  i = k;
  return j | 0;
 }
 g = +(b | 0);
 h[f >> 3] = g + 1.0;
 e = (c[f + 4 >> 2] | 0) + (c[f >> 2] | 0) | 0;
 if ((e | 0) < 0) {
  f = 0 - e | 0;
  e = (e | 0) == (f | 0) ? 0 : f;
 }
 e = (c[a + 16 >> 2] | 0) + (((e | 0) % ((1 << (d[a + 7 >> 0] | 0)) + -1 | 1 | 0) | 0) << 5) | 0;
 while (1) {
  if ((c[e + 24 >> 2] | 0) == 3) if (+h[e + 16 >> 3] == g) break;
  e = c[e + 28 >> 2] | 0;
  if (!e) {
   e = 15088;
   j = 10;
   break;
  }
 }
 if ((j | 0) == 10) {
  i = k;
  return e | 0;
 }
 j = e;
 i = k;
 return j | 0;
}

function ud(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  if (b >>> 0 >= (c[a + 8 >> 2] | 0) >>> 0) {
   a = -1;
   return a | 0;
  }
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  a = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) {
   a = -1;
   return a | 0;
  }
  b = c[b >> 2] | 0;
  if ((a | 0) > (d[b + 6 >> 0] | 0 | 0)) {
   a = -1;
   return a | 0;
  } else b = b + 16 + (a + -1 << 4) | 0;
 } while (0);
 if ((b | 0) == 15088) {
  a = -1;
  return a | 0;
 }
 a = c[b + 8 >> 2] & 15;
 return a | 0;
}

function Ah(d, e, f, g) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l + 8 | 0;
 j = l;
 h = c[d + 16 >> 2] | 0;
 if (b[d + 36 >> 1] | 0) if ((c[(c[d + 12 >> 2] | 0) + 172 >> 2] | 0) == (d | 0)) tb(d, 9191, k); else tb(d, 9149, j);
 a[d + 6 >> 0] = 1;
 c[h + 20 >> 2] = (c[h >> 2] | 0) - (c[d + 28 >> 2] | 0);
 if (a[h + 18 >> 0] & 1) {
  i = l;
  return 0;
 }
 c[h + 28 >> 2] = g;
 if (!g) {
  k = d + 8 | 0;
  k = c[k >> 2] | 0;
  l = 0 - e | 0;
  l = k + (l << 4) | 0;
  l = l + -16 | 0;
  c[h >> 2] = l;
  wb(d, 1);
 }
 c[h + 24 >> 2] = f;
 k = d + 8 | 0;
 k = c[k >> 2] | 0;
 l = 0 - e | 0;
 l = k + (l << 4) | 0;
 l = l + -16 | 0;
 c[h >> 2] = l;
 wb(d, 1);
 return 0;
}

function qg(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0;
 i = c[b + 12 >> 2] | 0;
 j = e + 5 | 0;
 if ((f | 0) == 0 | (a[j >> 0] & 24) != 0) return;
 if (a[f + 6 >> 0] & 4) return;
 if (!(Gb(f, 2, c[i + 192 >> 2] | 0) | 0)) return;
 h = i + 76 | 0;
 g = c[h >> 2] | 0;
 if ((g | 0) == (e | 0)) {
  do f = Kb(b, g, 1) | 0; while ((f | 0) == (g | 0));
  c[h >> 2] = f;
 }
 f = i + 68 | 0;
 while (1) {
  g = c[f >> 2] | 0;
  if ((g | 0) == (e | 0)) break; else f = g;
 }
 c[f >> 2] = c[e >> 2];
 f = i + 72 | 0;
 c[e >> 2] = c[f >> 2];
 c[f >> 2] = e;
 f = d[j >> 0] | 0 | 16;
 a[j >> 0] = f;
 if ((d[i + 61 >> 0] | 0) < 2) f = f & 191; else f = (d[i + 60 >> 0] | 0) & 3 | f & 184;
 a[j >> 0] = f;
 return;
}

function Cl(b, d, e) {
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
   c[(Ok() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } while (0);
 return b | 0;
}

function Wh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 e = i;
 i = i + 16 | 0;
 d = e + 8 | 0;
 b = e;
 if ((ud(a, 1) | 0) == -1) Ad(a);
 if (!(ud(a, 1) | 0)) {
  Eg(a, -1001e3, 9554);
  Zf(a, 1);
  if (c[(Ph(a, 1, 9473) | 0) + 4 >> 2] | 0) {
   d = 0;
   Xh(a, d);
   i = e;
   return 1;
  }
  ad(a, 9479, b) | 0;
  d = 0;
  Xh(a, d);
  i = e;
  return 1;
 } else {
  b = tg(a, 1, 0) | 0;
  g = Rg(a, 8) | 0;
  f = g + 4 | 0;
  c[f >> 2] = 0;
  Uh(a, 9473);
  c[g >> 2] = 0;
  c[f >> 2] = 165;
  f = fm(b, 9564) | 0;
  c[g >> 2] = f;
  if (!f) {
   g = yl(c[(Ok() | 0) >> 2] | 0) | 0;
   c[d >> 2] = b;
   c[d + 4 >> 2] = g;
   ad(a, 9566, d) | 0;
  }
  Zf(a, 1);
  g = 1;
  Xh(a, g);
  i = e;
  return 1;
 }
 return 0;
}

function Bg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 e = h;
 $c(a, 502.0);
 if (!(Xf(a, d + 20 | 0) | 0)) {
  c[e >> 2] = 8070;
  ad(a, 7715, e) | 0;
 }
 if (!(c[b >> 2] | 0)) {
  d = ~d;
  kd(a, d);
  i = h;
  return;
 }
 g = -2 - d | 0;
 f = 0 - d | 0;
 if ((d | 0) <= 0) {
  do {
   Of(a, c[b + 4 >> 2] | 0, d);
   _c(a, g, c[b >> 2] | 0);
   b = b + 8 | 0;
  } while ((c[b >> 2] | 0) != 0);
  d = ~d;
  kd(a, d);
  i = h;
  return;
 }
 do {
  e = 0;
  do {
   Cf(a, f);
   e = e + 1 | 0;
  } while ((e | 0) != (d | 0));
  Of(a, c[b + 4 >> 2] | 0, d);
  _c(a, g, c[b >> 2] | 0);
  b = b + 8 | 0;
 } while ((c[b >> 2] | 0) != 0);
 d = ~d;
 kd(a, d);
 i = h;
 return;
}

function md(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 g = b + 12 | 0;
 h = c[g >> 2] | 0;
 f = h + 62 | 0;
 if ((d[f >> 0] | 0) == (e | 0)) return;
 if ((e | 0) == 2) {
  e = h + 61 | 0;
  if (a[e >> 0] | 0) do Cb(b) | 0; while ((a[e >> 0] | 0) != 0);
  c[h + 20 >> 2] = (c[h + 12 >> 2] | 0) + (c[h + 8 >> 2] | 0);
  a[f >> 0] = 2;
  return;
 }
 a[f >> 0] = 0;
 a[h + 61 >> 0] = 2;
 c[h + 64 >> 2] = 0;
 f = h + 72 | 0;
 do e = Kb(b, f, 1) | 0; while ((e | 0) == (f | 0));
 c[h + 80 >> 2] = e;
 f = h + 68 | 0;
 do e = Kb(b, f, 1) | 0; while ((e | 0) == (f | 0));
 c[h + 76 >> 2] = e;
 e = (c[g >> 2] | 0) + 61 | 0;
 if (1 << d[e >> 0] & -29 | 0) return;
 do Cb(b) | 0; while (!(1 << d[e >> 0] & -29 | 0));
 return;
}

function ki(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 16 | 0;
 k = l;
 j = l + 8 | 0;
 e = yd(a) | 0;
 if ((e | 0) == (d | 0)) {
  a = 1;
  i = l;
  return a | 0;
 }
 g = d;
 f = e - d | 0;
 e = 1;
 while (1) {
  f = f + -1 | 0;
  if ((ud(a, g) | 0) == 3) {
   if (!e) e = 0; else {
    h[k >> 3] = +sg(a, g, 0);
    e = (em(b, 9776, k) | 0) > 0;
   }
   e = e & 1;
  } else {
   d = tg(a, g, j) | 0;
   if (!e) e = 0; else {
    e = zm(d, 1, c[j >> 2] | 0, b) | 0;
    e = (e | 0) == (c[j >> 2] | 0);
   }
   e = e & 1;
  }
  if (!f) break; else g = g + 1 | 0;
 }
 if (e | 0) {
  a = 1;
  i = l;
  return a | 0;
 }
 a = Rh(a, 0, 0) | 0;
 i = l;
 return a | 0;
}

function sb(a, d, e, f) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 h = k;
 j = a + 38 | 0;
 g = (b[j >> 1] | 0) + 1 << 16 >> 16;
 b[j >> 1] = g;
 if ((g & 65535) > 199) {
  if (g << 16 >> 16 == 200) tb(a, 4256, h);
  if ((g & 65535) > 224) wb(a, 6);
 }
 g = (f | 0) != 0;
 if (!g) {
  h = a + 36 | 0;
  b[h >> 1] = (b[h >> 1] | 0) + 1 << 16 >> 16;
 }
 if (!(bc(a, d, e) | 0)) hc(a);
 if (g) {
  e = b[j >> 1] | 0;
  e = e + -1 << 16 >> 16;
  b[j >> 1] = e;
  i = k;
  return;
 } else {
  d = a + 36 | 0;
  e = c[d >> 2] | 0;
  b[d >> 1] = (e & 65535) + -1 << 16 >> 16;
  e = e >>> 16 & 65535;
  e = e + -1 << 16 >> 16;
  b[j >> 1] = e;
  i = k;
  return;
 }
}

function Zi(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 f = h + 8 | 0;
 g = h;
 if ((c[a + 20 >> 2] | 0) <= (b | 0)) {
  f = c[a + 16 >> 2] | 0;
  if (!b) {
   ed(f, d, e - d | 0) | 0;
   i = h;
   return;
  } else {
   ad(f, 10559, g) | 0;
   i = h;
   return;
  }
 }
 d = c[a + 24 + (b << 3) + 4 >> 2] | 0;
 if ((d | 0) == -1) {
  e = a + 16 | 0;
  ad(c[e >> 2] | 0, 10581, f) | 0;
  e = c[e >> 2] | 0;
  f = c[a + 24 + (b << 3) >> 2] | 0;
 } else {
  e = c[a + 16 >> 2] | 0;
  f = c[a + 24 + (b << 3) >> 2] | 0;
  if ((d | 0) == -2) {
   Kd(e, f + 1 - (c[a + 4 >> 2] | 0) | 0);
   i = h;
   return;
  }
 }
 ed(e, f, d) | 0;
 i = h;
 return;
}

function eh(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = a + 8 | 0;
 e = c[f >> 2] | 0;
 nc(a, b, e + -32 | 0, e + -16 | 0);
 c[f >> 2] = (c[f >> 2] | 0) + -32;
 return;
}

function Eb(b) {
 b = b | 0;
 var d = 0;
 d = c[b + 252 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Db(b, d);
 d = c[b + 256 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Db(b, d);
 d = c[b + 260 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Db(b, d);
 d = c[b + 264 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Db(b, d);
 d = c[b + 268 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Db(b, d);
 d = c[b + 272 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Db(b, d);
 d = c[b + 276 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Db(b, d);
 d = c[b + 280 >> 2] | 0;
 if (d | 0) if (a[d + 5 >> 0] & 3) Db(b, d);
 d = c[b + 284 >> 2] | 0;
 if (!d) return;
 if (!(a[d + 5 >> 0] & 3)) return;
 Db(b, d);
 return;
}

function xm(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((c[d + 76 >> 2] | 0) < 0) g = 3; else if (!(Fl(d) | 0)) g = 3; else {
  if ((a[d + 75 >> 0] | 0) == (b | 0)) g = 10; else {
   e = d + 20 | 0;
   f = c[e >> 2] | 0;
   if (f >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[e >> 2] = f + 1;
    a[f >> 0] = b;
    e = b & 255;
   } else g = 10;
  }
  if ((g | 0) == 10) e = ym(d, b) | 0;
  Rk(d);
 }
 do if ((g | 0) == 3) {
  if ((a[d + 75 >> 0] | 0) != (b | 0)) {
   f = d + 20 | 0;
   e = c[f >> 2] | 0;
   if (e >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[f >> 2] = e + 1;
    a[e >> 0] = b;
    e = b & 255;
    break;
   }
  }
  e = ym(d, b) | 0;
 } while (0);
 return e | 0;
}

function ck(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 256 | 0;
 f = h;
 e = h + 4 | 0;
 b = c[720] | 0;
 zm(11378, 11, 1, b) | 0;
 lm(b) | 0;
 d = c[779] | 0;
 if (!(dm(e, 250, d) | 0)) {
  i = h;
  return 0;
 }
 while (1) {
  if (!(Ql(e, 11390) | 0)) {
   g = 7;
   break;
  }
  if (!(Tf(a, e, Jl(e) | 0, 11396, 0) | 0)) {
   if (dg(a, 0, 0, 0, 0, 0) | 0) g = 5;
  } else g = 5;
  if ((g | 0) == 5) {
   g = 0;
   c[f >> 2] = Tc(a, -1, 0) | 0;
   em(b, 11968, f) | 0;
   lm(b) | 0;
  }
  kd(a, 0);
  zm(11378, 11, 1, b) | 0;
  lm(b) | 0;
  if (!(dm(e, 250, d) | 0)) {
   g = 7;
   break;
  }
 }
 if ((g | 0) == 7) {
  i = h;
  return 0;
 }
 return 0;
}

function zd(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if (!c) {
  a = 0;
  return a | 0;
 }
 if ((ud(a, -1) | 0) != 5) {
  a = 0;
  return a | 0;
 }
 Ad(a);
 if (!(Bd(a, -2) | 0)) {
  a = 0;
  return a | 0;
 }
 c = c + -1 | 0;
 while (1) {
  if ((ud(a, -2) | 0) == 4) {
   if (Dd(a, b, -1) | 0) {
    b = 7;
    break;
   }
   if (zd(a, b, c) | 0) {
    b = 9;
    break;
   }
  }
  kd(a, -2);
  if (!(Bd(a, -2) | 0)) {
   c = 0;
   b = 11;
   break;
  }
 }
 if ((b | 0) == 7) {
  kd(a, -2);
  a = 1;
  return a | 0;
 } else if ((b | 0) == 9) {
  Ed(a, -2);
  ed(a, 15062, 1) | 0;
  Fd(a, -2);
  gd(a, 3);
  a = 1;
  return a | 0;
 } else if ((b | 0) == 11) return c | 0;
 return 0;
}

function Id(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j + 8 | 0;
 f = j;
 if (!d) {
  d = Tc(a, b, 0) | 0;
  if (!d) {
   d = vd(a, 4) | 0;
   g = vd(a, ud(a, b) | 0) | 0;
   c[f >> 2] = d;
   c[f + 4 >> 2] = g;
   wd(a, b, dd(a, 6119, f) | 0) | 0;
   g = 0;
  } else g = d;
 } else g = td(a, b, d, 0) | 0;
 d = c[e >> 2] | 0;
 a : do if (d | 0) {
  f = d;
  d = 0;
  while (1) {
   if (!(Ql(f, g) | 0)) break;
   d = d + 1 | 0;
   f = c[e + (d << 2) >> 2] | 0;
   if (!f) break a;
  }
  i = j;
  return d | 0;
 } while (0);
 c[h >> 2] = g;
 h = wd(a, b, dd(a, 6358, h) | 0) | 0;
 i = j;
 return h | 0;
}

function mh(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  a = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 if ((c[a + 8 >> 2] | 0) != 72) {
  e = 0;
  return e | 0;
 }
 e = c[a >> 2] | 0;
 return e | 0;
}

function $h(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 16 | 0;
 g = c[a + 12 >> 2] | 0;
 h = a + 4 | 0;
 d = c[h >> 2] | 0;
 j = a + 8 | 0;
 f = c[j >> 2] | 0;
 if ((d - f | 0) >>> 0 >= b >>> 0) {
  j = c[a >> 2] | 0;
  a = f;
  a = j + a | 0;
  i = k;
  return a | 0;
 }
 e = d << 1;
 e = (e - f | 0) >>> 0 < b >>> 0 ? f + b | 0 : e;
 if (e >>> 0 < f >>> 0 | (e - f | 0) >>> 0 < b >>> 0) ad(g, 8242, k) | 0;
 d = Rg(g, e) | 0;
 sn(d | 0, c[a >> 2] | 0, c[j >> 2] | 0) | 0;
 if ((c[a >> 2] | 0) != (a + 16 | 0)) Ed(g, -2);
 c[a >> 2] = d;
 c[h >> 2] = e;
 h = d;
 a = c[j >> 2] | 0;
 a = h + a | 0;
 i = k;
 return a | 0;
}

function Kg(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = a + 8 | 0;
 Ac(a, c[f >> 2] | 0, b);
 c[f >> 2] = (c[f >> 2] | 0) + 16;
 return;
}

function Re(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 i = a + 28 | 0;
 h = c[i >> 2] | 0;
 c[i >> 2] = -1;
 i = re(a, 2147450903) | 0;
 if ((h | 0) == -1) {
  a = i;
  return a | 0;
 }
 if ((i | 0) == -1) {
  a = h;
  return a | 0;
 }
 f = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
 b = i;
 while (1) {
  e = f + (b << 2) | 0;
  g = c[e >> 2] | 0;
  d = (g >>> 14) + -131071 | 0;
  d = (d | 0) == -1 ? -1 : b + 1 + d | 0;
  if ((d | 0) == -1) {
   d = g;
   break;
  } else b = d;
 }
 b = h + ~b | 0;
 if ((((b | 0) > -1 ? b : 0 - b | 0) | 0) > 131071) ae(c[a + 12 >> 2] | 0, 6980);
 c[e >> 2] = (b << 14) + 2147467264 | d & 16383;
 a = i;
 return a | 0;
}

function Xf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 f = h;
 c[f >> 2] = b;
 g = c[a + 16 >> 2] | 0;
 d = a + 8 | 0;
 e = c[d >> 2] | 0;
 do if (((c[a + 24 >> 2] | 0) - e >> 4 | 0) <= (b | 0)) {
  if (((e - (c[a + 28 >> 2] | 0) >> 4) + 5 | 0) > (1e6 - b | 0)) {
   g = 0;
   i = h;
   return g | 0;
  }
  if (!(Mc(a, 4, f) | 0)) {
   e = c[d >> 2] | 0;
   b = c[f >> 2] | 0;
   break;
  } else {
   g = 0;
   i = h;
   return g | 0;
  }
 } while (0);
 d = g + 4 | 0;
 b = e + (b << 4) | 0;
 if ((c[d >> 2] | 0) >>> 0 >= b >>> 0) {
  g = 1;
  i = h;
  return g | 0;
 }
 c[d >> 2] = b;
 g = 1;
 i = h;
 return g | 0;
}

function rf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 i = d + b | 0;
 j = i + 511 | 0;
 e = c[a + 20 >> 2] | 0;
 do if ((e | 0) > (c[a + 24 >> 2] | 0)) {
  e = (c[(c[a >> 2] | 0) + 12 >> 2] | 0) + (e + -1 << 2) | 0;
  f = c[e >> 2] | 0;
  if ((f & 63 | 0) == 4) {
   g = f >>> 6 & 255;
   h = g + (f >>> 23) | 0;
   if ((g | 0) > (b | 0) | (h + 1 | 0) < (b | 0)) if ((g | 0) < (b | 0) | (g | 0) > (i | 0)) break;
   d = (g | 0) < (b | 0) ? g : b;
   c[e >> 2] = ((h | 0) < (i | 0) ? j : h) - d << 23 | d << 6 & 16320 | f & 8372287;
   return;
  }
 } while (0);
 re(a, b << 6 | (d << 23) + -8388608 | 4) | 0;
 return;
}

function Lk(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 h = i;
 i = i + 528 | 0;
 g = h;
 f = h + 8 | 0;
 e = (d | 0) != 0;
 gg(b, e ? 12247 : 12255);
 j = Tc(b, -1, 0) | 0;
 d = c[749] | 0;
 Am((j | 0) == 0 ? (e ? 12264 : 12267) : j, d) | 0;
 lm(d) | 0;
 d = (dm(f, 512, c[779] | 0) | 0) == 0;
 kd(b, -2);
 if (d) {
  j = 0;
  i = h;
  return j | 0;
 }
 d = Jl(f) | 0;
 if (d | 0) {
  d = f + (d + -1) | 0;
  if ((a[d >> 0] | 0) == 10) a[d >> 0] = 0;
 }
 if (e & (a[f >> 0] | 0) == 61) {
  c[g >> 2] = f + 1;
  dd(b, 12271, g) | 0;
  j = 1;
  i = h;
  return j | 0;
 } else {
  Hf(b, f) | 0;
  j = 1;
  i = h;
  return j | 0;
 }
 return 0;
}

function an(a) {
 a = +a;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] & 2147483647;
 a : do if (b >>> 0 < 1072243196) if (b >>> 0 < 1044816030) a = 1.0; else a = +Rm(a, 0.0); else {
  if (b >>> 0 > 2146435071) {
   a = a - a;
   break;
  }
  switch ((Wm(a, d) | 0) & 3 | 0) {
  case 0:
   {
    a = +Rm(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  case 1:
   {
    a = -+Qm(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  case 2:
   {
    a = -+Rm(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  default:
   {
    a = +Qm(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  }
 } while (0);
 i = e;
 return +a;
}

function bn(a) {
 a = +a;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] & 2147483647;
 a : do if (b >>> 0 < 1072243196) {
  if (b >>> 0 >= 1045430272) a = +Qm(a, 0.0, 0);
 } else {
  if (b >>> 0 > 2146435071) {
   a = a - a;
   break;
  }
  switch ((Wm(a, d) | 0) & 3 | 0) {
  case 0:
   {
    a = +Qm(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  case 1:
   {
    a = +Rm(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  case 2:
   {
    a = -+Qm(+h[d >> 3], +h[d + 8 >> 3], 1);
    break a;
   }
  default:
   {
    a = -+Rm(+h[d >> 3], +h[d + 8 >> 3]);
    break a;
   }
  }
 } while (0);
 i = e;
 return +a;
}

function fh(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  e = (c[e >> 2] | 0) + (b << 4) | 0;
  a = e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? e : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   a = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   a = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  b = -1001e3 - b | 0;
  a = c[e >> 2] | 0;
  if ((c[a + 8 >> 2] | 0) == 22) a = 15088; else {
   a = c[a >> 2] | 0;
   a = (b | 0) > (d[a + 6 >> 0] | 0 | 0) ? 15088 : a + 16 + (b + -1 << 4) | 0;
  }
 } while (0);
 e = c[a + 8 >> 2] | 0;
 return ((e | 0) == 22 | (e | 0) == 102) & 1 | 0;
}

function Th(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 h = i;
 i = i + 16 | 0;
 g = h + 8 | 0;
 f = h;
 if ((ud(a, 1) | 0) < 1) {
  Eg(a, -1001e3, b);
  i = h;
  return;
 }
 e = Tc(a, 1, 0) | 0;
 if (!e) {
  if (!(c[(Ph(a, 1, 9473) | 0) + 4 >> 2] | 0)) ad(a, 9479, g) | 0;
  Cf(a, 1);
 } else {
  j = Rg(a, 8) | 0;
  g = j + 4 | 0;
  c[g >> 2] = 0;
  Uh(a, 9473);
  c[j >> 2] = 0;
  c[g >> 2] = 165;
  g = fm(e, d) | 0;
  c[j >> 2] = g;
  if (!g) {
   j = yl(c[(Ok() | 0) >> 2] | 0) | 0;
   c[f >> 2] = e;
   c[f + 4 >> 2] = j;
   ad(a, 9566, f) | 0;
  }
 }
 _c(a, -1001e3, b);
 Eg(a, -1001e3, b);
 i = h;
 return;
}

function dj(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = c[a + 16 >> 2] | 0;
 do if ((b | 0) > 0) {
  b = (c[e >> 2] | 0) + (b << 4) | 0;
  b = b >>> 0 < (c[a + 8 >> 2] | 0) >>> 0 ? b : 15088;
 } else {
  if ((b | 0) >= -1000999) {
   b = (c[a + 8 >> 2] | 0) + (b << 4) | 0;
   break;
  }
  if ((b | 0) == -1001e3) {
   b = (c[a + 12 >> 2] | 0) + 40 | 0;
   break;
  }
  f = -1001e3 - b | 0;
  b = c[e >> 2] | 0;
  if ((c[b + 8 >> 2] | 0) == 22) b = 15088; else {
   b = c[b >> 2] | 0;
   b = (f | 0) > (d[b + 6 >> 0] | 0 | 0) ? 15088 : b + 16 + (f + -1 << 4) | 0;
  }
 } while (0);
 f = (c[a + 8 >> 2] | 0) + -16 | 0;
 ic(a, b, f, f);
 return;
}

function wb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 e = b + 64 | 0;
 f = c[e >> 2] | 0;
 if (f | 0) {
  c[f + 160 >> 2] = d;
  na((c[e >> 2] | 0) + 4 | 0, 1);
 }
 a[b + 6 >> 0] = d;
 f = b + 12 | 0;
 g = c[f >> 2] | 0;
 e = c[g + 172 >> 2] | 0;
 if (c[e + 64 >> 2] | 0) {
  h = c[b + 8 >> 2] | 0;
  k = e + 8 | 0;
  e = c[k >> 2] | 0;
  c[k >> 2] = e + 16;
  k = h + -16 | 0;
  j = c[k + 4 >> 2] | 0;
  i = e;
  c[i >> 2] = c[k >> 2];
  c[i + 4 >> 2] = j;
  c[e + 8 >> 2] = c[h + -8 >> 2];
  wb(c[(c[f >> 2] | 0) + 172 >> 2] | 0, d);
 }
 e = c[g + 168 >> 2] | 0;
 if (!e) Ba();
 Xa[e & 255](b) | 0;
 Ba();
}

function sk(a) {
 a = a | 0;
 var b = 0, c = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 112 | 0;
 e = g;
 b = Lf(a, 2) | 0;
 Mf(a, 1, 6);
 Cf(a, 1);
 cd(a, 11773, e) | 0;
 if ((b | 0) > 0) {
  if ((b | 0) > (d[e + 32 >> 0] | 0 | 0)) f = 3;
 } else f = 3;
 if ((f | 0) == 3) wd(a, 2, 11776) | 0;
 c = Lf(a, 4) | 0;
 Mf(a, 3, 6);
 Cf(a, 3);
 cd(a, 11773, e) | 0;
 if ((c | 0) > 0) {
  if ((c | 0) > (d[e + 32 >> 0] | 0 | 0)) f = 6;
 } else f = 6;
 if ((f | 0) == 6) wd(a, 4, 11776) | 0;
 if (fh(a, 1) | 0) wd(a, 1, 11798) | 0;
 if (!(fh(a, 3) | 0)) {
  tk(a, 1, b, 3, c);
  i = g;
  return 0;
 }
 wd(a, 3, 11798) | 0;
 tk(a, 1, b, 3, c);
 i = g;
 return 0;
}

function Hg(a) {
 a = a | 0;
 Dg(a, -1001e3, 8113) | 0;
 Fg(a, 0, 1);
 Of(a, 158, 0);
 _c(a, -2, 9846);
 pg(a, -2) | 0;
 Fg(a, 0, 3);
 Bg(a, 1712, 0);
 Fg(a, 4, 0);
 Cf(a, -2);
 Of(a, 159, 1);
 Xg(a, -2, 1);
 Cf(a, -2);
 Of(a, 160, 1);
 Xg(a, -2, 2);
 Cf(a, -2);
 Of(a, 161, 1);
 Xg(a, -2, 3);
 Cf(a, -2);
 Of(a, 162, 1);
 Xg(a, -2, 4);
 Cf(a, -1);
 _c(a, -3, 8446);
 _c(a, -2, 8454);
 ah(a, 8316, 8464, 8477, 8486);
 ah(a, 8397, 8643, 8657, 8667);
 ed(a, 8736, 10) | 0;
 _c(a, -2, 8747);
 Dg(a, -1001e3, 8754) | 0;
 _c(a, -2, 8762);
 Dg(a, -1001e3, 12078) | 0;
 _c(a, -2, 8769);
 pd(a, -1001e3, 2);
 Cf(a, -2);
 Bg(a, 1744, 1);
 kd(a, -2);
 return 1;
}

function Nh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 Fg(a, 0, 11);
 Bg(a, 1888, 0);
 li(a, 9473) | 0;
 Cf(a, -1);
 _c(a, -2, 10997);
 Bg(a, 1984, 0);
 kd(a, -2);
 e = c[779] | 0;
 d = Rg(a, 8) | 0;
 b = d + 4 | 0;
 c[b >> 2] = 0;
 Uh(a, 9473);
 c[d >> 2] = e;
 c[b >> 2] = 164;
 Cf(a, -1);
 _c(a, -1001e3, 9554);
 _c(a, -2, 9902);
 b = c[749] | 0;
 d = Rg(a, 8) | 0;
 e = d + 4 | 0;
 c[e >> 2] = 0;
 Uh(a, 9473);
 c[d >> 2] = b;
 c[e >> 2] = 164;
 Cf(a, -1);
 _c(a, -1001e3, 9462);
 _c(a, -2, 9908);
 e = c[720] | 0;
 d = Rg(a, 8) | 0;
 b = d + 4 | 0;
 c[b >> 2] = 0;
 Uh(a, 9473);
 c[d >> 2] = e;
 c[b >> 2] = 164;
 _c(a, -2, 9915);
 return 1;
}

function je(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 g = c[b + 60 >> 2] | 0;
 h = g + 4 | 0;
 e = c[h >> 2] | 0;
 i = g + 8 | 0;
 j = c[i >> 2] | 0;
 if ((e + 1 | 0) >>> 0 <= j >>> 0) {
  i = e;
  g = c[g >> 2] | 0;
  j = d & 255;
  d = i + 1 | 0;
  c[h >> 2] = d;
  d = g + i | 0;
  a[d >> 0] = j;
  return;
 }
 if (j >>> 0 > 2147483645) be(b, 6665, 0);
 f = j << 1;
 e = c[b + 52 >> 2] | 0;
 if ((f | 0) == -2) yb(e);
 j = mb(e, c[g >> 2] | 0, j, f) | 0;
 c[g >> 2] = j;
 c[i >> 2] = f;
 i = c[h >> 2] | 0;
 g = j;
 j = d & 255;
 d = i + 1 | 0;
 c[h >> 2] = d;
 d = g + i | 0;
 a[d >> 0] = j;
 return;
}

function Ae(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 qe(b, e);
 if ((c[e >> 2] | 0) == 6) {
  f = c[e + 8 >> 2] | 0;
  if (!(f & 256)) if ((d[b + 46 >> 0] | 0 | 0) <= (f | 0)) {
   h = b + 48 | 0;
   a[h >> 0] = (a[h >> 0] | 0) + -1 << 24 >> 24;
  }
 }
 f = b + 48 | 0;
 g = (d[f >> 0] | 0) + 1 | 0;
 h = (c[b >> 2] | 0) + 78 | 0;
 if (g >>> 0 <= (d[h >> 0] | 0) >>> 0) {
  h = g & 255;
  a[f >> 0] = h;
  h = h & 255;
  h = h + -1 | 0;
  se(b, e, h);
  return;
 }
 if (g >>> 0 > 249) ae(c[b + 12 >> 2] | 0, 7025);
 g = g & 255;
 a[h >> 0] = g;
 h = g;
 a[f >> 0] = h;
 h = h & 255;
 h = h + -1 | 0;
 se(b, e, h);
 return;
}

function Wj(a) {
 a = a | 0;
 var b = 0.0, c = 0.0, d = 0.0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = +((Tl() | 0) % 2147483647 | 0 | 0) / 2147483647.0;
 switch (yd(a) | 0) {
 case 0:
  {
   id(a, d);
   a = 1;
   i = e;
   return a | 0;
  }
 case 1:
  {
   b = +zi(a, 1);
   if (!(b >= 1.0)) wd(a, 1, 11286) | 0;
   id(a, +D(+(d * b)) + 1.0);
   a = 1;
   i = e;
   return a | 0;
  }
 case 2:
  {
   b = +zi(a, 1);
   c = +zi(a, 2);
   if (!(b <= c)) wd(a, 2, 11286) | 0;
   id(a, b + +D(+(d * (c - b + 1.0))));
   a = 1;
   i = e;
   return a | 0;
  }
 default:
  {
   a = ad(a, 11304, e) | 0;
   i = e;
   return a | 0;
  }
 }
 return 0;
}

function ai(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 d = tg(b, 1, 0) | 0;
 e = td(b, 2, 9564, 0) | 0;
 f = Rg(b, 8) | 0;
 g = f + 4 | 0;
 c[g >> 2] = 0;
 Uh(b, 9473);
 c[f >> 2] = 0;
 c[g >> 2] = 165;
 g = a[e >> 0] | 0;
 if (!(g << 24 >> 24)) i = 4; else {
  h = e + 1 | 0;
  if (!(zl(15064, g << 24 >> 24, 4) | 0)) i = 4; else {
   h = (a[h >> 0] | 0) == 43 ? e + 2 | 0 : h;
   if (a[((a[h >> 0] | 0) == 98 ? h + 1 | 0 : h) >> 0] | 0) i = 4;
  }
 }
 if ((i | 0) == 4) wd(b, 2, 9685) | 0;
 i = fm(d, e) | 0;
 c[f >> 2] = i;
 if (i | 0) {
  i = 1;
  return i | 0;
 }
 i = Rh(b, 0, d) | 0;
 return i | 0;
}

function tb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0;
 g = i;
 i = i + 96 | 0;
 j = g;
 h = g + 32 | 0;
 g = g + 16 | 0;
 c[g >> 2] = e;
 g = ub(b, d, g) | 0;
 e = c[b + 16 >> 2] | 0;
 if (!(a[e + 18 >> 0] & 1)) ac(b);
 f = c[(c[c[e >> 2] >> 2] | 0) + 12 >> 2] | 0;
 d = c[f + 20 >> 2] | 0;
 if (!d) e = 0; else e = c[d + (((c[e + 28 >> 2] | 0) - (c[f + 12 >> 2] | 0) >> 2) + -1 << 2) >> 2] | 0;
 d = c[f + 36 >> 2] | 0;
 if (!d) {
  a[h >> 0] = 63;
  a[h + 1 >> 0] = 0;
 } else _b(h, d + 16 | 0, 60);
 c[j >> 2] = h;
 c[j + 4 >> 2] = e;
 c[j + 8 >> 2] = g;
 $b(b, 6655, j) | 0;
 ac(b);
}

function Al(a, b, d, e, f) {
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
  nn(h | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  b = c[a >> 2] | 0;
  g = (b & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   e = d - e | 0;
   do {
    if (g) {
     ul(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    f = f + -256 | 0;
    g = (b & 32 | 0) == 0;
   } while (f >>> 0 > 255);
   if (g) f = e & 255; else break;
  } else if (!g) break;
  ul(h, f, a) | 0;
 } while (0);
 i = j;
 return;
}

function Yb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = c[a + 60 >> 2] | 0;
 if ((e | 0) <= 0) {
  f = 0;
  return f | 0;
 }
 f = c[a + 24 >> 2] | 0;
 a = 0;
 while (1) {
  if ((c[f + (a * 12 | 0) + 4 >> 2] | 0) > (d | 0)) {
   a = 0;
   b = 8;
   break;
  }
  if ((c[f + (a * 12 | 0) + 8 >> 2] | 0) > (d | 0)) {
   b = b + -1 | 0;
   if (!b) {
    b = 6;
    break;
   }
  }
  a = a + 1 | 0;
  if ((a | 0) >= (e | 0)) {
   a = 0;
   b = 8;
   break;
  }
 }
 if ((b | 0) == 6) {
  f = (c[f + (a * 12 | 0) >> 2] | 0) + 16 | 0;
  return f | 0;
 } else if ((b | 0) == 8) return a | 0;
 return 0;
}

function ym(b, e) {
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
 if (!g) if (!(vl(b) | 0)) {
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
  if ((Ua[c[b + 36 >> 2] & 15](b, l, 1) | 0) == 1) f = d[l >> 0] | 0; else f = -1;
 } while (0);
 i = m;
 return f | 0;
}

function fg(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 16 | 0;
 h = j;
 g = j + 4 | 0;
 d = yd(a) | 0;
 gg(a, 7823);
 a : do if ((d | 0) < 1) b = c[749] | 0; else {
  b = c[749] | 0;
  f = 1;
  while (1) {
   Cf(a, -1);
   Cf(a, f);
   yf(a, 1, 1, 0, 0);
   e = Tc(a, -1, g) | 0;
   if (!e) break;
   if ((f | 0) > 1) xm(9, b) | 0;
   zm(e, 1, c[g >> 2] | 0, b) | 0;
   kd(a, -2);
   if ((f | 0) < (d | 0)) f = f + 1 | 0; else break a;
  }
  h = ad(a, 7832, h) | 0;
  i = j;
  return h | 0;
 } while (0);
 xm(10, b) | 0;
 lm(b) | 0;
 h = 0;
 i = j;
 return h | 0;
}

function mk(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0;
 f = i;
 i = i + 112 | 0;
 d = f;
 if ((ud(a, 1) | 0) == 8) {
  e = mh(a, 1) | 0;
  b = 1;
 } else {
  e = a;
  b = 0;
 }
 c = Lf(a, b | 2) | 0;
 b = b + 1 | 0;
 if ((ud(a, b) | 0) == 6) {
  Cf(a, b);
  Hf(a, nk(a, 0, c) | 0) | 0;
  a = 1;
  i = f;
  return a | 0;
 }
 if (!(bd(e, Lf(a, b) | 0, d) | 0)) {
  a = wd(a, b, 11706) | 0;
  i = f;
  return a | 0;
 }
 b = nk(e, d, c) | 0;
 if (!b) {
  Ad(a);
  a = 1;
  i = f;
  return a | 0;
 } else {
  kh(e, a, 1);
  Hf(a, b) | 0;
  Cf(a, -2);
  a = 2;
  i = f;
  return a | 0;
 }
 return 0;
}

function Sf(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 e = g;
 b = Tc(a, 1, e) | 0;
 d = td(a, 3, 7678, 0) | 0;
 f = (ud(a, 4) | 0) != -1;
 if (!b) {
  b = td(a, 2, 7681, 0) | 0;
  Mf(a, 1, 6);
  kd(a, 5);
  b = Pd(a, 7, 0, b, d) | 0;
 } else {
  h = td(a, 2, b, 0) | 0;
  b = Tf(a, b, c[e >> 2] | 0, h, d) | 0;
 }
 if (b | 0) {
  Ad(a);
  Fd(a, -2);
  h = 2;
  i = g;
  return h | 0;
 }
 if (!f) {
  h = 1;
  i = g;
  return h | 0;
 }
 Cf(a, f ? 4 : 0);
 if (Rf(a, -2, 1) | 0) {
  h = 1;
  i = g;
  return h | 0;
 }
 kd(a, -2);
 h = 1;
 i = g;
 return h | 0;
}

function Te(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 c[a + 24 >> 2] = c[a + 20 >> 2];
 d = a + 28 | 0;
 if ((b | 0) == -1) return;
 e = c[d >> 2] | 0;
 if ((e | 0) == -1) {
  c[d >> 2] = b;
  return;
 }
 h = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
 while (1) {
  g = h + (e << 2) | 0;
  f = c[g >> 2] | 0;
  d = (f >>> 14) + -131071 | 0;
  d = (d | 0) == -1 ? -1 : e + 1 + d | 0;
  if ((d | 0) == -1) break; else e = d;
 }
 d = ~e + b | 0;
 if ((((d | 0) > -1 ? d : 0 - d | 0) | 0) > 131071) ae(c[a + 12 >> 2] | 0, 6980);
 c[g >> 2] = (d << 14) + 2147467264 | f & 16383;
 return;
}

function ac(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 b = c[a + 68 >> 2] | 0;
 if (!b) wb(a, 2);
 b = (c[a + 28 >> 2] | 0) + b | 0;
 d = b + 8 | 0;
 if ((c[d >> 2] & 15 | 0) != 6) wb(a, 6);
 e = a + 8 | 0;
 f = c[e >> 2] | 0;
 i = f + -16 | 0;
 g = c[i + 4 >> 2] | 0;
 h = f;
 c[h >> 2] = c[i >> 2];
 c[h + 4 >> 2] = g;
 c[f + 8 >> 2] = c[f + -8 >> 2];
 f = c[e >> 2] | 0;
 h = b;
 g = c[h + 4 >> 2] | 0;
 b = f + -16 | 0;
 c[b >> 2] = c[h >> 2];
 c[b + 4 >> 2] = g;
 c[f + -8 >> 2] = c[d >> 2];
 d = c[e >> 2] | 0;
 c[e >> 2] = d + 16;
 sb(a, d + -16 | 0, 1, 0);
 wb(a, 2);
}

function Ce(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 32 | 0;
 h = j + 16 | 0;
 g = j + 8 | 0;
 f = j;
 if ((d | 0) >= 257) {
  e = c[1292 + (d + -257 << 2) >> 2] | 0;
  if ((d | 0) >= 286) {
   d = e;
   i = j;
   return d | 0;
  }
  d = c[b + 52 >> 2] | 0;
  c[h >> 2] = e;
  d = $b(d, 6690, h) | 0;
  i = j;
  return d | 0;
 }
 e = c[b + 52 >> 2] | 0;
 if (!(a[3999 + (d + 1) >> 0] & 4)) {
  c[g >> 2] = d;
  d = $b(e, 6700, g) | 0;
  i = j;
  return d | 0;
 } else {
  c[f >> 2] = d;
  d = $b(e, 6695, f) | 0;
  i = j;
  return d | 0;
 }
 return 0;
}

function jj(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 f = h;
 g = tg(a, 1, f) | 0;
 b = Lf(a, 2) | 0;
 d = c[f >> 2] | 0;
 if ((b | 0) <= -1) if (d >>> 0 < (0 - b | 0) >>> 0) b = 0; else b = b + 1 + d | 0;
 e = Jd(a, 3, -1) | 0;
 f = c[f >> 2] | 0;
 if ((e | 0) <= -1) if (f >>> 0 < (0 - e | 0) >>> 0) e = 0; else e = e + 1 + f | 0;
 d = (b | 0) == 0 ? 1 : b;
 b = e >>> 0 > f >>> 0 ? f : e;
 if (b >>> 0 < d >>> 0) {
  ed(a, 17772, 0) | 0;
  i = h;
  return 1;
 } else {
  ed(a, g + d + -1 | 0, 1 - d + b | 0) | 0;
  i = h;
  return 1;
 }
 return 0;
}

function wm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((d | 0) == 1) b = b - (c[a + 8 >> 2] | 0) + (c[a + 4 >> 2] | 0) | 0;
 e = a + 20 | 0;
 f = a + 28 | 0;
 if ((c[e >> 2] | 0) >>> 0 > (c[f >> 2] | 0) >>> 0) {
  Ua[c[a + 36 >> 2] & 15](a, 0, 0) | 0;
  if (!(c[e >> 2] | 0)) b = -1; else g = 5;
 } else g = 5;
 if ((g | 0) == 5) {
  c[a + 16 >> 2] = 0;
  c[f >> 2] = 0;
  c[e >> 2] = 0;
  if ((Ua[c[a + 40 >> 2] & 15](a, b, d) | 0) < 0) b = -1; else {
   c[a + 8 >> 2] = 0;
   c[a + 4 >> 2] = 0;
   c[a >> 2] = c[a >> 2] & -17;
   b = 0;
  }
 }
 return b | 0;
}

function gl(a, b) {
 a = +a;
 b = b | 0;
 var d = 0;
 if ((b | 0) > 1023) {
  a = a * 8988465674311579538646525.0e283;
  d = b + -1023 | 0;
  if ((d | 0) > 1023) {
   d = b + -2046 | 0;
   d = (d | 0) > 1023 ? 1023 : d;
   a = a * 8988465674311579538646525.0e283;
  }
 } else if ((b | 0) < -1022) {
  a = a * 2.2250738585072014e-308;
  d = b + 1022 | 0;
  if ((d | 0) < -1022) {
   d = b + 2044 | 0;
   d = (d | 0) < -1022 ? -1022 : d;
   a = a * 2.2250738585072014e-308;
  }
 } else d = b;
 d = on(d + 1023 | 0, 0, 52) | 0;
 b = C;
 c[k >> 2] = d;
 c[k + 4 >> 2] = b;
 return +(a * +h[k >> 3]);
}

function of(a, b) {
 a = a | 0;
 b = +b;
 var e = 0, f = 0, g = 0, j = 0, k = 0, l = 0;
 j = i;
 i = i + 32 | 0;
 e = j;
 g = j + 8 | 0;
 h[e >> 3] = b;
 f = c[(c[a + 12 >> 2] | 0) + 52 >> 2] | 0;
 h[g >> 3] = b;
 c[g + 8 >> 2] = 3;
 if (b != b | 0.0 != 0.0 | b == 0.0) {
  k = f + 8 | 0;
  l = c[k >> 2] | 0;
  c[k >> 2] = l + 16;
  f = zb(f, e, 8) | 0;
  c[l >> 2] = f;
  c[l + 8 >> 2] = d[f + 4 >> 0] | 0 | 64;
  g = ue(a, (c[k >> 2] | 0) + -16 | 0, g) | 0;
  c[k >> 2] = (c[k >> 2] | 0) + -16;
  i = j;
  return g | 0;
 } else {
  l = ue(a, g, g) | 0;
  i = j;
  return l | 0;
 }
 return 0;
}

function Fh(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 Mf(a, 1, 5);
 c = Jg(a, 1) | 0;
 b = c + 1 | 0;
 switch (yd(a) | 0) {
 case 2:
  break;
 case 3:
  {
   d = 2;
   break;
  }
 default:
  {
   a = ad(a, 9334, e) | 0;
   i = e;
   return a | 0;
  }
 }
 if ((d | 0) == 2) {
  d = Lf(a, 2) | 0;
  if ((d | 0) < 1 | (d | 0) > (b | 0)) wd(a, 2, 9311) | 0;
  if ((c | 0) < (d | 0)) b = d; else {
   do {
    c = b;
    b = b + -1 | 0;
    pd(a, 1, b);
    Xg(a, 1, c);
   } while ((b | 0) > (d | 0));
   b = d;
  }
 }
 Xg(a, 1, b);
 a = 0;
 i = e;
 return a | 0;
}

function fk(b) {
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 if ((ud(b, 1) | 0) == 8) e = mh(b, 1) | 0; else e = b;
 d = gk(e) | 0;
 c = hk(e) | 0;
 if ((c | 0) != 0 & (c | 0) != 8) ed(b, 11473, 13) | 0; else {
  Dg(b, -1001e3, 11434) | 0;
  vh(e) | 0;
  kh(e, b, 1);
  If(b, -2);
  Ed(b, -2);
 }
 if (!(d & 1)) c = 0; else {
  a[f >> 0] = 99;
  c = 1;
 }
 if (d & 2) {
  a[f + c >> 0] = 114;
  c = c + 1 | 0;
 }
 if (d & 4) {
  a[f + c >> 0] = 108;
  c = c + 1 | 0;
 }
 a[f + c >> 0] = 0;
 Hf(b, f) | 0;
 Kd(b, jk(e) | 0);
 i = g;
 return 3;
}

function Zg(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 32 | 0;
 f = g + 8 | 0;
 d = g;
 e = tg(a, 1, 0) | 0;
 Eg(a, -1001001, 8397);
 b = Tc(a, -1, 0) | 0;
 if (!b) {
  c[d >> 2] = 8397;
  ad(a, 8321, d) | 0;
 }
 b = Og(a, e, b, 15062, 8240) | 0;
 if (!b) {
  f = 1;
  i = g;
  return f | 0;
 }
 if (!(_g(a, b, e) | 0)) {
  Hf(a, b) | 0;
  f = 2;
  i = g;
  return f | 0;
 } else {
  d = Tc(a, 1, 0) | 0;
  e = Tc(a, -1, 0) | 0;
  c[f >> 2] = d;
  c[f + 4 >> 2] = b;
  c[f + 8 >> 2] = e;
  f = ad(a, 8351, f) | 0;
  i = g;
  return f | 0;
 }
 return 0;
}

function Yg(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 32 | 0;
 f = g + 8 | 0;
 e = g;
 b = tg(a, 1, 0) | 0;
 Eg(a, -1001001, 8316);
 d = Tc(a, -1, 0) | 0;
 if (!d) {
  c[e >> 2] = 8316;
  ad(a, 8321, e) | 0;
 }
 b = Og(a, b, d, 15062, 8240) | 0;
 if (!b) {
  f = 1;
  i = g;
  return f | 0;
 }
 if (!(Md(a, b, 0) | 0)) {
  Hf(a, b) | 0;
  f = 2;
  i = g;
  return f | 0;
 } else {
  d = Tc(a, 1, 0) | 0;
  e = Tc(a, -1, 0) | 0;
  c[f >> 2] = d;
  c[f + 4 >> 2] = b;
  c[f + 8 >> 2] = e;
  f = ad(a, 8351, f) | 0;
  i = g;
  return f | 0;
 }
 return 0;
}

function Km(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 do if ((b | 0) == -1) b = -1; else {
  if ((c[d + 76 >> 2] | 0) > -1) g = Fl(d) | 0; else g = 0;
  if (!(c[d + 8 >> 2] | 0)) {
   if (!(cl(d) | 0)) e = 6;
  } else e = 6;
  if ((e | 0) == 6) {
   e = d + 4 | 0;
   f = c[e >> 2] | 0;
   if (f >>> 0 > ((c[d + 44 >> 2] | 0) + -8 | 0) >>> 0) {
    f = f + -1 | 0;
    c[e >> 2] = f;
    a[f >> 0] = b;
    c[d >> 2] = c[d >> 2] & -17;
    if (!g) break;
    Rk(d);
    break;
   }
  }
  if (!g) b = -1; else {
   Rk(d);
   b = -1;
  }
 } while (0);
 return b | 0;
}

function _h(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 1040 | 0;
 j = k;
 Pg(b, j);
 f = $h(j, 1024) | 0;
 a : do if (dm(f, 1024, d) | 0) {
  h = j + 8 | 0;
  g = f;
  while (1) {
   f = Jl(g) | 0;
   if (f | 0) if ((a[g + (f + -1) >> 0] | 0) == 10) break;
   c[h >> 2] = (c[h >> 2] | 0) + f;
   g = $h(j, 1024) | 0;
   if (!(dm(g, 1024, d) | 0)) break a;
  }
  c[h >> 2] = f - e + (c[h >> 2] | 0);
  Ug(j);
  e = 1;
  i = k;
  return e | 0;
 } while (0);
 Ug(j);
 e = (jg(b, -1) | 0) != 0 & 1;
 i = k;
 return e | 0;
}

function Hh(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 d = f;
 Mf(a, 1, 5);
 c = Jd(a, 2, 1) | 0;
 if ((ud(a, 3) | 0) < 1) e = Jg(a, 1) | 0; else e = Lf(a, 3) | 0;
 if ((e | 0) < (c | 0)) {
  a = 0;
  i = f;
  return a | 0;
 }
 g = e - c | 0;
 b = g + 1 | 0;
 if ((g | 0) >= 0) if (Xf(a, b) | 0) {
  pd(a, 1, c);
  if ((e | 0) <= (c | 0)) {
   g = b;
   i = f;
   return g | 0;
  }
  do {
   c = c + 1 | 0;
   pd(a, 1, c);
  } while ((c | 0) != (e | 0));
  i = f;
  return b | 0;
 }
 g = ad(a, 9386, d) | 0;
 i = f;
 return g | 0;
}

function vg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 a : do if (!(wg(a, b, 12111) | 0)) switch (ud(a, b) | 0) {
 case 4:
 case 3:
  {
   Cf(a, b);
   break a;
  }
 case 1:
  {
   e = (sd(a, b) | 0) != 0;
   Hf(a, e ? 8026 : 8031) | 0;
   break a;
  }
 case 0:
  {
   ed(a, 8037, 3) | 0;
   break a;
  }
 default:
  {
   g = vd(a, ud(a, b) | 0) | 0;
   b = yg(a, b) | 0;
   c[e >> 2] = g;
   c[e + 4 >> 2] = b;
   dd(a, 8041, e) | 0;
   break a;
  }
 } while (0);
 g = Tc(a, -1, d) | 0;
 i = f;
 return g | 0;
}

function wh(a) {
 a = a | 0;
 var b = 0, c = 0;
 c = i;
 i = i + 112 | 0;
 b = mh(a, 1) | 0;
 if (!b) wd(a, 1, 8959) | 0;
 if ((b | 0) == (a | 0)) {
  ed(a, 9101, 7) | 0;
  i = c;
  return 1;
 }
 switch (oh(b) | 0) {
 case 1:
  {
   ed(a, 9116, 9) | 0;
   i = c;
   return 1;
  }
 case 0:
  {
   do if ((bd(b, 0, c) | 0) > 0) ed(a, 9126, 6) | 0; else if (!(yd(b) | 0)) {
    ed(a, 9133, 4) | 0;
    break;
   } else {
    ed(a, 9116, 9) | 0;
    break;
   } while (0);
   i = c;
   return 1;
  }
 default:
  {
   ed(a, 9133, 4) | 0;
   i = c;
   return 1;
  }
 }
 return 0;
}

function dh(b, c, d, e) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 if (c) Cf(b, c);
 while (1) {
  c = Ol(d, 46) | 0;
  if (!c) c = d + (Jl(d) | 0) | 0;
  f = c - d | 0;
  ed(b, d, f) | 0;
  If(b, -2);
  if (!(ud(b, -1) | 0)) {
   kd(b, -2);
   Fg(b, 0, (a[c >> 0] | 0) == 46 ? 1 : e);
   ed(b, d, f) | 0;
   Cf(b, -2);
   eh(b, -4);
  } else if ((ud(b, -1) | 0) != 5) break;
  Ed(b, -2);
  if ((a[c >> 0] | 0) == 46) d = c + 1 | 0; else {
   d = 0;
   g = 10;
   break;
  }
 }
 if ((g | 0) == 10) return d | 0;
 kd(b, -3);
 g = d;
 return g | 0;
}

function mf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 if ((d | 0) == -1) return;
 e = c[b >> 2] | 0;
 if ((e | 0) == -1) {
  c[b >> 2] = d;
  return;
 }
 h = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
 while (1) {
  g = h + (e << 2) | 0;
  f = c[g >> 2] | 0;
  b = (f >>> 14) + -131071 | 0;
  b = (b | 0) == -1 ? -1 : e + 1 + b | 0;
  if ((b | 0) == -1) break; else e = b;
 }
 b = ~e + d | 0;
 if ((((b | 0) > -1 ? b : 0 - b | 0) | 0) > 131071) ae(c[a + 12 >> 2] | 0, 6980);
 c[g >> 2] = f & 16383 | (b << 14) + 2147467264;
 return;
}

function lm(a) {
 a = a | 0;
 var b = 0, d = 0;
 do if (!a) {
  if (!(c[778] | 0)) b = 0; else b = lm(c[778] | 0) | 0;
  Ka(15176);
  a = c[3793] | 0;
  if (a) do {
   if ((c[a + 76 >> 2] | 0) > -1) d = Fl(a) | 0; else d = 0;
   if ((c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0) b = mm(a) | 0 | b;
   if (d | 0) Rk(a);
   a = c[a + 56 >> 2] | 0;
  } while ((a | 0) != 0);
  Fa(15176);
 } else {
  if ((c[a + 76 >> 2] | 0) <= -1) {
   b = mm(a) | 0;
   break;
  }
  d = (Fl(a) | 0) == 0;
  b = mm(a) | 0;
  if (!d) Rk(a);
 } while (0);
 return b | 0;
}

function _d(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0;
 a[e + 76 >> 0] = 46;
 i = e + 52 | 0;
 c[i >> 2] = b;
 c[e >> 2] = h;
 c[e + 32 >> 2] = 286;
 c[e + 56 >> 2] = f;
 c[e + 48 >> 2] = 0;
 c[e + 4 >> 2] = 1;
 c[e + 8 >> 2] = 1;
 c[e + 68 >> 2] = g;
 f = Oc(b, 6575) | 0;
 c[e + 72 >> 2] = f;
 f = f + 5 | 0;
 a[f >> 0] = d[f >> 0] | 0 | 32;
 f = e + 60 | 0;
 g = c[f >> 2] | 0;
 g = mb(c[i >> 2] | 0, c[g >> 2] | 0, c[g + 8 >> 2] | 0, 32) | 0;
 f = c[f >> 2] | 0;
 c[f >> 2] = g;
 c[f + 8 >> 2] = 32;
 return;
}

function mm(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = a + 20 | 0;
 h = a + 28 | 0;
 if ((c[g >> 2] | 0) >>> 0 > (c[h >> 2] | 0) >>> 0) {
  Ua[c[a + 36 >> 2] & 15](a, 0, 0) | 0;
  if (!(c[g >> 2] | 0)) b = -1; else d = 3;
 } else d = 3;
 if ((d | 0) == 3) {
  f = a + 4 | 0;
  b = c[f >> 2] | 0;
  d = a + 8 | 0;
  e = c[d >> 2] | 0;
  if (b >>> 0 < e >>> 0) Ua[c[a + 40 >> 2] & 15](a, b - e | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[h >> 2] = 0;
  c[g >> 2] = 0;
  c[d >> 2] = 0;
  c[f >> 2] = 0;
  b = 0;
 }
 return b | 0;
}

function Im() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 48 | 0;
 g = j + 16 | 0;
 f = j;
 d = j + 20 | 0;
 e = 0;
 while (1) {
  a = Jm(d) | 0;
  if (!a) {
   a = 0;
   break;
  }
  c[f >> 2] = a;
  c[f + 4 >> 2] = 32962;
  c[f + 8 >> 2] = 384;
  b = Nk(Ma(5, f | 0) | 0) | 0;
  e = e + 1 | 0;
  if ((b | 0) > -1) {
   h = 5;
   break;
  }
  if ((e | 0) >= 100) {
   a = 0;
   break;
  }
 }
 if ((h | 0) == 5) {
  h = hm(b, 15085) | 0;
  c[g >> 2] = a;
  Ia(10, g | 0) | 0;
  a = h;
 }
 i = j;
 return a | 0;
}

function td(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 g = h;
 if ((ud(a, b) | 0) >= 1) {
  f = Tc(a, b, e) | 0;
  if (f | 0) {
   g = f;
   i = h;
   return g | 0;
  }
  d = vd(a, 4) | 0;
  e = vd(a, ud(a, b) | 0) | 0;
  c[g >> 2] = d;
  c[g + 4 >> 2] = e;
  wd(a, b, dd(a, 6119, g) | 0) | 0;
  g = 0;
  i = h;
  return g | 0;
 }
 if (!e) {
  g = d;
  i = h;
  return g | 0;
 }
 if (!d) f = 0; else f = Jl(d) | 0;
 c[e >> 2] = f;
 g = d;
 i = h;
 return g | 0;
}

function sn(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return ua(b | 0, d | 0, e | 0) | 0;
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

function Hm(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 if ((c[a + 76 >> 2] | 0) < 0) f = 3; else if (!(Fl(a) | 0)) f = 3; else {
  b = a + 4 | 0;
  e = c[b >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[b >> 2] = e + 1;
   b = d[e >> 0] | 0;
  } else b = bl(a) | 0;
  Rk(a);
 }
 do if ((f | 0) == 3) {
  b = a + 4 | 0;
  e = c[b >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[b >> 2] = e + 1;
   b = d[e >> 0] | 0;
   break;
  } else {
   b = bl(a) | 0;
   break;
  }
 } while (0);
 return b | 0;
}

function Ni(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 c[b + 12 >> 2] = a;
 f = b + 16 | 0;
 c[b >> 2] = f;
 g = b + 8 | 0;
 c[g >> 2] = 0;
 h = b + 4 | 0;
 c[h >> 2] = 1024;
 if (d >>> 0 <= 1024) {
  b = f;
  a = 0;
  a = b + a | 0;
  return a | 0;
 }
 d = d >>> 0 > 2048 ? d : 2048;
 e = Rg(a, d) | 0;
 sn(e | 0, c[b >> 2] | 0, c[g >> 2] | 0) | 0;
 if ((c[b >> 2] | 0) != (f | 0)) Ed(a, -2);
 c[b >> 2] = e;
 c[h >> 2] = d;
 b = e;
 a = c[g >> 2] | 0;
 a = b + a | 0;
 return a | 0;
}

function xl(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = xn(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = un(b | 0, c | 0, 10, 0) | 0;
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

function Zm(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 if (!a) {
  a = Xm(b) | 0;
  return a | 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(Ok() | 0) >> 2] = 12;
  a = 0;
  return a | 0;
 }
 d = _m(a + -8 | 0, b >>> 0 < 11 ? 16 : b + 11 & -8) | 0;
 if (d | 0) {
  a = d + 8 | 0;
  return a | 0;
 }
 d = Xm(b) | 0;
 if (!d) {
  a = 0;
  return a | 0;
 }
 e = c[a + -4 >> 2] | 0;
 e = (e & -8) - ((e & 3 | 0) == 0 ? 8 : 4) | 0;
 sn(d | 0, a | 0, (e >>> 0 < b >>> 0 ? e : b) | 0) | 0;
 Ym(a);
 a = d;
 return a | 0;
}

function El(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = qn(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +El(a * 18446744073709551616.0, b);
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

function Ke(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 h = c[a + 52 >> 2] | 0;
 f = zb(h, b, e) | 0;
 g = h + 8 | 0;
 e = c[g >> 2] | 0;
 c[g >> 2] = e + 16;
 c[e >> 2] = f;
 c[e + 8 >> 2] = d[f + 4 >> 0] | 0 | 64;
 e = he(h, c[(c[a + 48 >> 2] | 0) + 4 >> 2] | 0, (c[g >> 2] | 0) + -16 | 0) | 0;
 b = e + 8 | 0;
 if (!(c[b >> 2] | 0)) {
  c[e >> 2] = 1;
  c[b >> 2] = 1;
  if ((c[(c[h + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(h);
 }
 c[g >> 2] = (c[g >> 2] | 0) + -16;
 return f | 0;
}

function Jl(b) {
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

function yf(a, d, e, f, g) {
 a = a | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0;
 i = a + 8 | 0;
 d = (c[i >> 2] | 0) + (~d << 4) | 0;
 if (!g) h = 4; else if (!(b[a + 36 >> 1] | 0)) {
  j = c[a + 16 >> 2] | 0;
  c[j + 28 >> 2] = g;
  c[j + 24 >> 2] = f;
  sb(a, d, e, 1);
 } else h = 4;
 if ((h | 0) == 4) sb(a, d, e, 0);
 if ((e | 0) != -1) return;
 a = (c[a + 16 >> 2] | 0) + 4 | 0;
 d = c[i >> 2] | 0;
 if ((c[a >> 2] | 0) >>> 0 >= d >>> 0) return;
 c[a >> 2] = d;
 return;
}

function Kc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 if (c[e + 32 >> 2] | 0) {
  f = c[b + 12 >> 2] | 0;
  b = e + 5 | 0;
  a[b >> 0] = (d[b >> 0] | 0) & 251;
  f = f + 88 | 0;
  c[e + 72 >> 2] = c[f >> 2];
  c[f >> 2] = e;
  return;
 }
 if (!(a[f + 5 >> 0] & 3)) return;
 g = e + 5 | 0;
 h = a[g >> 0] | 0;
 if (!(h & 4)) return;
 e = c[b + 12 >> 2] | 0;
 if ((d[e + 61 >> 0] | 0) < 2) {
  Db(e, f);
  return;
 } else {
  a[g >> 0] = (d[e + 60 >> 0] | 0) & 3 | h & 184;
  return;
 }
}

function Vm(a) {
 a = +a;
 var b = 0, d = 0;
 h[k >> 3] = a;
 d = c[k + 4 >> 2] | 0;
 a = +E(+a);
 h[k >> 3] = a;
 b = c[k + 4 >> 2] | 0;
 do if (b >>> 0 > 1071748074) if (b >>> 0 > 1077149696) {
  a = 1.0 - 0.0 / a;
  break;
 } else {
  a = 1.0 - 2.0 / (+om(a * 2.0) + 2.0);
  break;
 } else {
  if (b >>> 0 > 1070618798) {
   a = +om(a * 2.0);
   a = a / (a + 2.0);
   break;
  }
  if (b >>> 0 > 1048575) {
   a = +om(a * -2.0);
   a = -a / (a + 2.0);
  }
 } while (0);
 return +((d | 0) < 0 ? -a : a);
}

function nl(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0.0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 112 | 0;
 h = j;
 f = h;
 g = f + 112 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 f = h + 4 | 0;
 c[f >> 2] = a;
 g = h + 8 | 0;
 c[g >> 2] = -1;
 c[h + 44 >> 2] = a;
 c[h + 76 >> 2] = -1;
 _k(h, 0);
 e = +el(h, d, 1);
 d = (c[f >> 2] | 0) - (c[g >> 2] | 0) + (c[h + 108 >> 2] | 0) | 0;
 if (b | 0) c[b >> 2] = d | 0 ? a + d | 0 : a;
 i = j;
 return +e;
}

function $c(a, b) {
 a = a | 0;
 b = +b;
 var c = 0.0, d = 0, e = 0, f = 0, g = 0, j = 0;
 j = i;
 i = i + 32 | 0;
 g = j + 24 | 0;
 f = j + 8 | 0;
 e = j;
 d = kb(a) | 0;
 if ((d | 0) == (kb(0) | 0)) {
  c = +h[d >> 3];
  if (c != b) {
   h[f >> 3] = b;
   h[f + 8 >> 3] = c;
   ad(a, 5969, f) | 0;
  }
 } else ad(a, 5889, e) | 0;
 id(a, -4660.0);
 if ((Xc(a, -1, 0) | 0) == -4660) if ((jd(a, -1, 0) | 0) == -4660) {
  kd(a, -2);
  i = j;
  return;
 }
 ad(a, 6023, g) | 0;
 kd(a, -2);
 i = j;
 return;
}

function kd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 if ((b | 0) <= -1) {
  g = a + 8 | 0;
  c[g >> 2] = (c[g >> 2] | 0) + (b + 1 << 4);
  return;
 }
 d = c[c[a + 16 >> 2] >> 2] | 0;
 e = a + 8 | 0;
 f = c[e >> 2] | 0;
 g = d + 16 + (b << 4) | 0;
 if (f >>> 0 < g >>> 0) {
  a = ((d + (b << 4) + 8 + 4 + (3 - f) | 0) >>> 4) + 1 | 0;
  d = f;
  do {
   c[d + 8 >> 2] = 0;
   d = d + 16 | 0;
  } while (d >>> 0 < g >>> 0);
  c[e >> 2] = f + (a << 4);
 }
 c[e >> 2] = g;
 return;
}

function mb(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0;
 i = c[b + 12 >> 2] | 0;
 j = (d | 0) != 0;
 g = i + 4 | 0;
 h = Ya[c[i >> 2] & 3](c[g >> 2] | 0, d, e, f) | 0;
 if ((f | 0) != 0 & (h | 0) == 0) {
  if (!(a[i + 63 >> 0] | 0)) wb(b, 4);
  nb(b, 1);
  g = Ya[c[i >> 2] & 3](c[g >> 2] | 0, d, e, f) | 0;
  if (!g) wb(b, 4); else k = g;
 } else k = h;
 b = i + 12 | 0;
 c[b >> 2] = (j ? 0 - e | 0 : 0) + f + (c[b >> 2] | 0);
 return k | 0;
}

function nh(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if (!(Xf(b, c) | 0)) {
  ed(a, 8978, 28) | 0;
  b = -1;
  return b | 0;
 }
 if (!(oh(b) | 0)) if (!(yd(b) | 0)) {
  ed(a, 9045, 28) | 0;
  b = -1;
  return b | 0;
 }
 kh(a, b, c);
 if ((ph(b, a, c) | 0 | 1 | 0) != 1) {
  kh(b, a, 1);
  b = -1;
  return b | 0;
 }
 c = yd(b) | 0;
 if (!(Xf(a, c + 1 | 0) | 0)) {
  kd(b, ~c);
  ed(a, 9074, 26) | 0;
  b = -1;
  return b | 0;
 } else {
  kh(b, a, c);
  b = c;
  return b | 0;
 }
 return 0;
}

function cl(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = b + 20 | 0;
 e = b + 44 | 0;
 if ((c[d >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0) Ua[c[b + 36 >> 2] & 15](b, 0, 0) | 0;
 c[b + 16 >> 2] = 0;
 c[b + 28 >> 2] = 0;
 c[d >> 2] = 0;
 d = c[b >> 2] | 0;
 if (!(d & 20)) {
  d = c[e >> 2] | 0;
  c[b + 8 >> 2] = d;
  c[b + 4 >> 2] = d;
  d = 0;
 } else if (!(d & 4)) d = -1; else {
  c[b >> 2] = d | 32;
  d = -1;
 }
 return d | 0;
}

function fm(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 32 | 0;
 f = g + 16 | 0;
 e = g;
 if (!(zl(15064, a[d >> 0] | 0, 4) | 0)) {
  c[(Ok() | 0) >> 2] = 22;
  b = 0;
 } else {
  h = gm(d) | 0 | 32768;
  c[e >> 2] = b;
  c[e + 4 >> 2] = h;
  c[e + 8 >> 2] = 438;
  e = Nk(Ma(5, e | 0) | 0) | 0;
  if ((e | 0) < 0) b = 0; else {
   b = hm(e, d) | 0;
   if (!b) {
    c[f >> 2] = e;
    La(6, f | 0) | 0;
    b = 0;
   }
  }
 }
 i = g;
 return b | 0;
}

function De(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 g = ((e + -1 | 0) / 50 | 0) + 1 | 0;
 e = (f | 0) == -1 ? 0 : f;
 if ((g | 0) < 512) {
  re(b, d << 6 | e << 23 | g << 14 | 36) | 0;
  d = d + 1 | 0;
  d = d & 255;
  b = b + 48 | 0;
  a[b >> 0] = d;
  return;
 }
 if ((g | 0) >= 67108864) ae(c[b + 12 >> 2] | 0, 7115);
 re(b, d << 6 | e << 23 | 36) | 0;
 re(b, g << 6 | 39) | 0;
 d = d + 1 | 0;
 d = d & 255;
 b = b + 48 | 0;
 a[b >> 0] = d;
 return;
}

function Ti(b) {
 b = b | 0;
 var c = 0;
 a[b >> 0] = 27;
 a[b + 1 >> 0] = 76;
 a[b + 2 >> 0] = 117;
 a[b + 3 >> 0] = 97;
 a[b + 4 >> 0] = 82;
 a[b + 5 >> 0] = 0;
 a[b + 6 >> 0] = 1;
 a[b + 7 >> 0] = 4;
 a[b + 8 >> 0] = 4;
 a[b + 9 >> 0] = 4;
 a[b + 10 >> 0] = 8;
 c = b + 12 | 0;
 a[b + 11 >> 0] = 0;
 a[c >> 0] = a[6479] | 0;
 a[c + 1 >> 0] = a[6480] | 0;
 a[c + 2 >> 0] = a[6481] | 0;
 a[c + 3 >> 0] = a[6482] | 0;
 a[c + 4 >> 0] = a[6483] | 0;
 a[c + 5 >> 0] = a[6484] | 0;
 return;
}

function bd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((b | 0) < 0) {
  d = 0;
  return d | 0;
 }
 f = c[a + 16 >> 2] | 0;
 g = a + 72 | 0;
 if ((b | 0) > 0 & (f | 0) != (g | 0)) {
  e = b;
  a = f;
  while (1) {
   b = e + -1 | 0;
   a = c[a + 8 >> 2] | 0;
   if ((e | 0) > 1 & (a | 0) != (g | 0)) e = b; else break;
  }
 } else a = f;
 if ((b | 0) != 0 | (a | 0) == (g | 0)) {
  d = 0;
  return d | 0;
 }
 c[d + 96 >> 2] = a;
 d = 1;
 return d | 0;
}

function yl(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[13120 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 13208;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 13208; else {
  b = 13208;
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

function nn(b, d, e) {
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

function pi(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0.0;
 f = i;
 i = i + 16 | 0;
 b = Ph(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) ad(a, 9479, f) | 0;
 b = c[b >> 2] | 0;
 d = Id(a, 2, 9787, 2064) | 0;
 g = +qi(a, 3, 0.0);
 e = ~~g;
 if (!(+(e | 0) == g)) wd(a, 3, 9799) | 0;
 if (!(um(b, e, c[2080 + (d << 2) >> 2] | 0) | 0)) {
  id(a, +(Gm(b) | 0));
  a = 1;
  i = f;
  return a | 0;
 } else {
  a = Rh(a, 0, 0) | 0;
  i = f;
  return a | 0;
 }
 return 0;
}

function Ob(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 f = b + 28 | 0;
 Pb(b, c[f >> 2] | 0);
 d = c[f >> 2] | 0;
 if (!d) {
  mb(a, b, 112, 0) | 0;
  return;
 }
 c[b + 16 >> 2] = b + 72;
 g = b + 84 | 0;
 e = c[g >> 2] | 0;
 c[g >> 2] = 0;
 if (e) {
  d = e;
  do {
   g = d;
   d = c[d + 12 >> 2] | 0;
   mb(b, g, 40, 0) | 0;
  } while ((d | 0) != 0);
  d = c[f >> 2] | 0;
 }
 mb(b, d, c[b + 32 >> 2] << 4, 0) | 0;
 mb(a, b, 112, 0) | 0;
 return;
}

function Xd(b) {
 b = b | 0;
 b = Tb(b, 9, 80, 0, 0) | 0;
 c[b + 8 >> 2] = 0;
 c[b + 44 >> 2] = 0;
 c[b + 16 >> 2] = 0;
 c[b + 56 >> 2] = 0;
 c[b + 12 >> 2] = 0;
 c[b + 32 >> 2] = 0;
 c[b + 48 >> 2] = 0;
 c[b + 20 >> 2] = 0;
 c[b + 52 >> 2] = 0;
 c[b + 28 >> 2] = 0;
 c[b + 40 >> 2] = 0;
 a[b + 76 >> 0] = 0;
 a[b + 77 >> 0] = 0;
 a[b + 78 >> 0] = 0;
 c[b + 24 >> 2] = 0;
 c[b + 60 >> 2] = 0;
 c[b + 64 >> 2] = 0;
 c[b + 68 >> 2] = 0;
 c[b + 36 >> 2] = 0;
 return b | 0;
}

function ad(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 128 | 0;
 g = f;
 e = f + 24 | 0;
 f = f + 8 | 0;
 c[f >> 2] = d;
 if (bd(a, 1, e) | 0) {
  cd(a, 5915, e) | 0;
  d = c[e + 20 >> 2] | 0;
  if ((d | 0) > 0) {
   c[g >> 2] = e + 36;
   c[g + 4 >> 2] = d;
   dd(a, 5961, g) | 0;
   fd(a, b, f) | 0;
   gd(a, 2);
   hd(a) | 0;
  }
 }
 ed(a, 17772, 0) | 0;
 fd(a, b, f) | 0;
 gd(a, 2);
 hd(a) | 0;
 return 0;
}

function Bk(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0;
 f = i;
 i = i + 112 | 0;
 d = f;
 if ((ud(a, 1) | 0) == 8) {
  b = mh(a, 1) | 0;
  e = 1;
 } else {
  b = a;
  e = 0;
 }
 c = e + 1 | 0;
 if (!(bd(b, Lf(a, c) | 0, d) | 0)) {
  e = wd(a, c, 11706) | 0;
  i = f;
  return e | 0;
 } else {
  c = e + 3 | 0;
  Ef(a, c);
  kd(a, c);
  kh(a, b, 1);
  Hf(a, Ck(b, d, Lf(a, e | 2) | 0) | 0) | 0;
  e = 1;
  i = f;
  return e | 0;
 }
 return 0;
}

function pn(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 p = p + 1 | 0;
 c[a >> 2] = p;
 while ((f | 0) < (e | 0)) {
  if (!(c[d + (f << 3) >> 2] | 0)) {
   c[d + (f << 3) >> 2] = p;
   c[d + ((f << 3) + 4) >> 2] = b;
   c[d + ((f << 3) + 8) >> 2] = 0;
   C = e;
   return d | 0;
  }
  f = f + 1 | 0;
 }
 e = e * 2 | 0;
 d = Zm(d | 0, 8 * (e + 1 | 0) | 0) | 0;
 d = pn(a | 0, b | 0, d | 0, e | 0) | 0;
 C = e;
 return d | 0;
}

function _g(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 16 | 0;
 g = h + 8 | 0;
 f = h;
 d = Qg(a, d, 15062, 8403) | 0;
 e = Ol(d, 45) | 0;
 if (e) {
  c[f >> 2] = ed(a, d, e - d | 0) | 0;
  d = Mg(a, b, dd(a, 8405, f) | 0) | 0;
  if ((d | 0) == 2) d = e + 1 | 0; else {
   g = d;
   i = h;
   return g | 0;
  }
 }
 c[g >> 2] = d;
 g = Mg(a, b, dd(a, 8405, g) | 0) | 0;
 i = h;
 return g | 0;
}

function km(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = (c[a >> 2] & 1 | 0) != 0;
 if (!e) {
  Ka(15176);
  d = c[a + 52 >> 2] | 0;
  b = a + 56 | 0;
  if (d | 0) c[d + 56 >> 2] = c[b >> 2];
  b = c[b >> 2] | 0;
  if (b | 0) c[b + 52 >> 2] = d;
  if ((c[3793] | 0) == (a | 0)) c[3793] = b;
  Fa(15176);
 }
 b = lm(a) | 0;
 b = Xa[c[a + 12 >> 2] & 255](a) | 0 | b;
 d = c[a + 92 >> 2] | 0;
 if (d | 0) Ym(d);
 if (!e) Ym(a);
 return b | 0;
}

function Sb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = c[a + 8 >> 2] | 0;
 d = c[a + 16 >> 2] | 0;
 if (d) do {
  e = c[d + 4 >> 2] | 0;
  b = b >>> 0 < e >>> 0 ? e : b;
  d = c[d + 8 >> 2] | 0;
 } while ((d | 0) != 0);
 e = b - (c[a + 28 >> 2] | 0) | 0;
 b = e >> 4;
 b = b + 11 + ((b + 1 | 0) / 8 | 0) | 0;
 b = (b | 0) > 1e6 ? 1e6 : b;
 if ((e | 0) > 15999984) return;
 if ((b | 0) >= (c[a + 32 >> 2] | 0)) return;
 xb(a, b);
 return;
}

function pb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = c[b + 8 >> 2] & 15;
 switch (e | 0) {
 case 5:
  {
   e = (c[b >> 2] | 0) + 8 | 0;
   break;
  }
 case 7:
  {
   e = (c[b >> 2] | 0) + 8 | 0;
   break;
  }
 default:
  e = (c[a + 12 >> 2] | 0) + 252 + (e << 2) | 0;
 }
 e = c[e >> 2] | 0;
 if (!e) {
  d = 15088;
  return d | 0;
 }
 d = qb(e, c[(c[a + 12 >> 2] | 0) + 184 + (d << 2) >> 2] | 0) | 0;
 return d | 0;
}

function Ph(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 e = Yc(a, b) | 0;
 if (e | 0) if (Ff(a, b) | 0) {
  Eg(a, -1001e3, d);
  h = (Dd(a, -1, -2) | 0) == 0;
  kd(a, -3);
  if (!h) {
   h = e;
   i = g;
   return h | 0;
  }
 }
 h = vd(a, ud(a, b) | 0) | 0;
 c[f >> 2] = d;
 c[f + 4 >> 2] = h;
 wd(a, b, dd(a, 6119, f) | 0) | 0;
 h = 0;
 i = g;
 return h | 0;
}

function Hd(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = c[1668 + ((Id(a, 1, 6265, 1620) | 0) << 2) >> 2] | 0;
 b = ld(a, d, Jd(a, 2, 0) | 0) | 0;
 switch (d | 0) {
 case 3:
  {
   d = ld(a, 4, 0) | 0;
   id(a, +(b | 0) + +(d | 0) * .0009765625);
   Kd(a, d);
   d = 2;
   return d | 0;
  }
 case 9:
 case 5:
  {
   Zc(a, b);
   d = 1;
   return d | 0;
  }
 default:
  {
   Kd(a, b);
   d = 1;
   return d | 0;
  }
 }
 return 0;
}

function nd(a) {
 a = a | 0;
 Cg(a, 6091, 145, 1);
 kd(a, -2);
 Cg(a, 8105, 146, 1);
 kd(a, -2);
 Cg(a, 8935, 147, 1);
 kd(a, -2);
 Cg(a, 9233, 148, 1);
 kd(a, -2);
 Cg(a, 9453, 149, 1);
 kd(a, -2);
 Cg(a, 9922, 150, 1);
 kd(a, -2);
 Cg(a, 10212, 151, 1);
 kd(a, -2);
 Cg(a, 11005, 152, 1);
 kd(a, -2);
 Cg(a, 11173, 153, 1);
 kd(a, -2);
 Cg(a, 11372, 154, 1);
 kd(a, -2);
 Dg(a, -1001e3, 12078) | 0;
 kd(a, -2);
 return;
}

function ij(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 1056 | 0;
 g = j + 1040 | 0;
 h = j;
 f = tg(b, 1, g) | 0;
 e = Ni(b, h, c[g >> 2] | 0) | 0;
 b = c[g >> 2] | 0;
 if (!b) {
  g = 0;
  Oi(h, g);
  i = j;
  return 1;
 } else d = 0;
 do {
  a[e + d >> 0] = a[f + (b + ~d) >> 0] | 0;
  d = d + 1 | 0;
  b = c[g >> 2] | 0;
 } while (b >>> 0 > d >>> 0);
 Oi(h, b);
 i = j;
 return 1;
}

function Lb(a, b) {
 a = a | 0;
 b = b | 0;
 mb(a, c[b + 12 >> 2] | 0, c[b + 48 >> 2] << 2, 0) | 0;
 mb(a, c[b + 16 >> 2] | 0, c[b + 56 >> 2] << 2, 0) | 0;
 mb(a, c[b + 8 >> 2] | 0, c[b + 44 >> 2] << 4, 0) | 0;
 mb(a, c[b + 20 >> 2] | 0, c[b + 52 >> 2] << 2, 0) | 0;
 mb(a, c[b + 24 >> 2] | 0, (c[b + 60 >> 2] | 0) * 12 | 0, 0) | 0;
 mb(a, c[b + 28 >> 2] | 0, c[b + 40 >> 2] << 3, 0) | 0;
 mb(a, b, 80, 0) | 0;
 return;
}

function vf(a, b) {
 a = a | 0;
 b = b | 0;
 switch (c[b >> 2] | 0) {
 case 12:
  {
   c[b >> 2] = 6;
   b = b + 8 | 0;
   c[b >> 2] = (c[(c[(c[a >> 2] | 0) + 12 >> 2] | 0) + (c[b >> 2] << 2) >> 2] | 0) >>> 6 & 255;
   return;
  }
 case 13:
  {
   a = (c[(c[a >> 2] | 0) + 12 >> 2] | 0) + (c[b + 8 >> 2] << 2) | 0;
   c[a >> 2] = c[a >> 2] & 8388607 | 16777216;
   c[b >> 2] = 11;
   return;
  }
 default:
  return;
 }
}

function kj(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 1056 | 0;
 h = k + 1040 | 0;
 j = k;
 g = tg(b, 1, h) | 0;
 e = Ni(b, j, c[h >> 2] | 0) | 0;
 if (!(c[h >> 2] | 0)) {
  h = 0;
  Oi(j, h);
  i = k;
  return 1;
 } else f = 0;
 do {
  a[e + f >> 0] = Yk(d[g + f >> 0] | 0) | 0;
  f = f + 1 | 0;
  b = c[h >> 2] | 0;
 } while (f >>> 0 < b >>> 0);
 Oi(j, b);
 i = k;
 return 1;
}

function fj(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 1056 | 0;
 h = k + 1040 | 0;
 j = k;
 g = tg(b, 1, h) | 0;
 e = Ni(b, j, c[h >> 2] | 0) | 0;
 if (!(c[h >> 2] | 0)) {
  h = 0;
  Oi(j, h);
  i = k;
  return 1;
 } else f = 0;
 do {
  a[e + f >> 0] = Wk(d[g + f >> 0] | 0) | 0;
  f = f + 1 | 0;
  b = c[h >> 2] | 0;
 } while (f >>> 0 < b >>> 0);
 Oi(j, b);
 i = k;
 return 1;
}

function Mi(b) {
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 h = i;
 i = i + 1040 | 0;
 f = h;
 c = yd(b) | 0;
 d = Ni(b, f, c) | 0;
 if ((c | 0) < 1) {
  Oi(f, c);
  i = h;
  return 1;
 } else g = 1;
 while (1) {
  e = Lf(b, g) | 0;
  if ((e & 255 | 0) != (e | 0)) wd(b, g, 10251) | 0;
  a[d + (g + -1) >> 0] = e;
  if ((g | 0) == (c | 0)) break; else g = g + 1 | 0;
 }
 Oi(f, c);
 i = h;
 return 1;
}

function ah(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 c = Ca(c | 0) | 0;
 if (!c) {
  c = Ca(d | 0) | 0;
  if (c | 0) f = 3;
 } else f = 3;
 if ((f | 0) == 3) {
  Eg(a, -1001e3, 8624);
  f = sd(a, -1) | 0;
  kd(a, -2);
  if (!f) {
   Qg(a, Qg(a, c, 8634, 8637) | 0, 8641, e) | 0;
   Ed(a, -2);
   _c(a, -2, b);
   return;
  }
 }
 Hf(a, e) | 0;
 _c(a, -2, b);
 return;
}

function af(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 32 | 0;
 f = g;
 d = a + 48 | 0;
 e = c[d >> 2] | 0;
 bf(e, b);
 de(a);
 if ((c[a + 16 >> 2] | 0) == 288) {
  h = c[a + 24 >> 2] | 0;
  de(a);
  a = xe(c[d >> 2] | 0, h) | 0;
  c[f + 16 >> 2] = -1;
  c[f + 20 >> 2] = -1;
  c[f >> 2] = 4;
  c[f + 8 >> 2] = a;
  $e(e, b, f);
  i = g;
  return;
 } else Be(a, 288);
}

function Hf(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 if (!b) {
  b = a + 8 | 0;
  a = c[b >> 2] | 0;
  c[a + 8 >> 2] = 0;
  c[b >> 2] = a + 16;
  b = 0;
  return b | 0;
 }
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(a);
 b = Oc(a, b) | 0;
 a = a + 8 | 0;
 e = c[a >> 2] | 0;
 c[e >> 2] = b;
 c[e + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 b = b + 16 | 0;
 return b | 0;
}

function xc(a, b, c) {
 a = a | 0;
 b = +b;
 c = +c;
 switch (a | 0) {
 case 0:
  {
   b = b + c;
   break;
  }
 case 1:
  {
   b = b - c;
   break;
  }
 case 2:
  {
   b = b * c;
   break;
  }
 case 3:
  {
   b = b / c;
   break;
  }
 case 4:
  {
   b = b - +D(+(b / c)) * c;
   break;
  }
 case 5:
  {
   b = +G(+b, +c);
   break;
  }
 case 6:
  {
   b = -b;
   break;
  }
 default:
  b = 0.0;
 }
 return +b;
}

function Jd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 e = g + 8 | 0;
 if ((ud(a, b) | 0) < 1) {
  f = d;
  i = g;
  return f | 0;
 }
 d = Xc(a, b, e) | 0;
 if (!(c[e >> 2] | 0)) {
  h = vd(a, 3) | 0;
  e = vd(a, ud(a, b) | 0) | 0;
  c[f >> 2] = h;
  c[f + 4 >> 2] = e;
  wd(a, b, dd(a, 6119, f) | 0) | 0;
 }
 h = d;
 i = g;
 return h | 0;
}

function qm(a) {
 a = +a;
 var b = 0.0, d = 0.0, e = 0;
 h[k >> 3] = a;
 d = (c[k + 4 >> 2] | 0) < 0 ? -.5 : .5;
 b = +E(+a);
 h[k >> 3] = b;
 e = c[k + 4 >> 2] | 0;
 do if (e >>> 0 < 1082535490) {
  b = +om(b);
  if (e >>> 0 >= 1072693248) {
   a = d * (b + b / (b + 1.0));
   break;
  }
  if (e >>> 0 >= 1045430272) a = d * (b * 2.0 - b * b / (b + 1.0));
 } else a = d * 2.0 * +pm(b); while (0);
 return +a;
}

function Ml(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 a : do if (!d) d = 0; else {
  f = d;
  e = b;
  while (1) {
   b = a[e >> 0] | 0;
   d = a[c >> 0] | 0;
   if (b << 24 >> 24 != d << 24 >> 24) break;
   f = f + -1 | 0;
   if (!f) {
    d = 0;
    break a;
   } else {
    e = e + 1 | 0;
    c = c + 1 | 0;
   }
  }
  d = (b & 255) - (d & 255) | 0;
 } while (0);
 return d | 0;
}

function Qb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = e + 5 | 0;
 g = d[f >> 0] | 0;
 if (g & 7 | 0) return;
 if ((a[b + 62 >> 0] | 0) != 2) if ((d[b + 61 >> 0] | 0) >= 2) {
  a[f >> 0] = d[b + 60 >> 0] & 3 | g & 184;
  return;
 }
 a[f >> 0] = g & 187 | 4;
 f = c[e + 8 >> 2] | 0;
 if (!(c[f + 8 >> 2] & 64)) return;
 f = c[f >> 2] | 0;
 if (!(a[f + 5 >> 0] & 3)) return;
 Db(b, f);
 return;
}

function Ih(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 Mf(a, 1, 5);
 b = Jg(a, 1) | 0;
 c = Jd(a, 2, b) | 0;
 if ((c | 0) != (b | 0)) if ((c | 0) < 1 | (c | 0) > (b + 1 | 0)) wd(a, 1, 9311) | 0;
 pd(a, 1, c);
 if ((c | 0) >= (b | 0)) {
  Ad(a);
  Xg(a, 1, c);
  return 1;
 }
 do {
  d = c;
  c = c + 1 | 0;
  pd(a, 1, c);
  Xg(a, 1, d);
 } while ((c | 0) != (b | 0));
 Ad(a);
 Xg(a, 1, b);
 return 1;
}

function Ue(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = a[b + 4 >> 0] | 0;
 do if (e << 24 >> 24 == (a[d + 4 >> 0] | 0)) {
  if (e << 24 >> 24 == 4) {
   e = (b | 0) == (d | 0);
   break;
  }
  e = c[b + 12 >> 2] | 0;
  if ((b | 0) == (d | 0)) e = 1; else if ((e | 0) == (c[d + 12 >> 2] | 0)) e = (Ml(b + 16 | 0, d + 16 | 0, e) | 0) == 0; else e = 0;
 } else e = 0; while (0);
 return e & 1 | 0;
}

function Qm(a, b, c) {
 a = +a;
 b = +b;
 c = c | 0;
 var d = 0.0, e = 0.0, f = 0.0;
 d = a * a;
 e = d * (d * d) * (d * 1.58969099521155e-10 + -2.5050760253406863e-08) + (d * (d * 2.7557313707070068e-06 + -1.984126982985795e-04) + .00833333333332249);
 f = d * a;
 if (!c) d = f * (d * e + -.16666666666666632) + a; else d = a - (f * .16666666666666632 + (d * (b * .5 - f * e) - b));
 return +d;
}

function cn(a) {
 a = +a;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 h[k >> 3] = a;
 b = c[k + 4 >> 2] & 2147483647;
 do if (b >>> 0 < 1072243196) {
  if (b >>> 0 >= 1044381696) a = +Tm(a, 0.0, 0);
 } else if (b >>> 0 > 2146435071) {
  a = a - a;
  break;
 } else {
  b = Wm(a, d) | 0;
  a = +Tm(+h[d >> 3], +h[d + 8 >> 3], b & 1);
  break;
 } while (0);
 i = e;
 return +a;
}

function vb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = c[a + 32 >> 2] | 0;
 if ((d | 0) > 1e6) wb(a, 6);
 b = b + 5 + ((c[a + 8 >> 2] | 0) - (c[a + 28 >> 2] | 0) >> 4) | 0;
 d = d << 1;
 d = (d | 0) > 1e6 ? 1e6 : d;
 d = (d | 0) < (b | 0) ? b : d;
 if ((d | 0) > 1e6) {
  xb(a, 1000200);
  tb(a, 7808, e);
 } else {
  xb(a, d);
  i = e;
  return;
 }
}

function Ql(b, c) {
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
function qi(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = +d;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 e = g + 8 | 0;
 if ((ud(a, b) | 0) < 1) {
  i = g;
  return +d;
 }
 d = +sg(a, b, e);
 if (!(c[e >> 2] | 0)) {
  h = vd(a, 3) | 0;
  e = vd(a, ud(a, b) | 0) | 0;
  c[f >> 2] = h;
  c[f + 4 >> 2] = e;
  wd(a, b, dd(a, 6119, f) | 0) | 0;
 }
 i = g;
 return +d;
}

function xj(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 b = nj(a, 1) | 0;
 c = nj(a, 2) | 0;
 d = Lf(a, 3) | 0;
 e = Jd(a, 4, 1) | 0;
 if ((d | 0) <= -1) wd(a, 3, 11052) | 0;
 if ((e | 0) <= 0) wd(a, 4, 11077) | 0;
 if ((e + d | 0) > 32) ad(a, 11100, f) | 0;
 e = ~(-2 << e + -1);
 oj(a, b & ~(e << d) | (c & e) << d);
 i = f;
 return 1;
}

function ch(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 dh(a, -1001e3, 8754, 1) | 0;
 Eg(a, -1, b);
 if ((ud(a, -1) | 0) == 5) {
  Ed(a, -2);
  i = f;
  return;
 }
 kd(a, -2);
 pd(a, -1001e3, 2);
 if (dh(a, 0, b, d) | 0) {
  c[e >> 2] = b;
  ad(a, 8784, e) | 0;
 }
 Cf(a, -1);
 _c(a, -3, b);
 Ed(a, -2);
 i = f;
 return;
}

function gm(b) {
 b = b | 0;
 var c = 0, d = 0, e = 0;
 d = (Ol(b, 43) | 0) == 0;
 c = a[b >> 0] | 0;
 d = d ? c << 24 >> 24 != 114 & 1 : 2;
 e = (Ol(b, 120) | 0) == 0;
 d = e ? d : d | 128;
 b = (Ol(b, 101) | 0) == 0;
 b = b ? d : d | 524288;
 b = c << 24 >> 24 == 114 ? b : b | 64;
 b = c << 24 >> 24 == 119 ? b | 512 : b;
 return (c << 24 >> 24 == 97 ? b | 1024 : b) | 0;
}

function vl(b) {
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

function qb(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 a = (c[a + 16 >> 2] | 0) + (((1 << (d[a + 7 >> 0] | 0)) + -1 & c[b + 8 >> 2]) << 5) | 0;
 while (1) {
  if ((c[a + 24 >> 2] | 0) == 68) if ((c[a + 16 >> 2] | 0) == (b | 0)) break;
  a = c[a + 28 >> 2] | 0;
  if (!a) {
   a = 15088;
   e = 6;
   break;
  }
 }
 if ((e | 0) == 6) return a | 0;
 e = a;
 return e | 0;
}

function Dc(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f + 8 | 0;
 e = c[1176 + ((c[b + 8 >> 2] & 15) + 1 << 2) >> 2] | 0;
 b = c[1176 + ((c[d + 8 >> 2] & 15) + 1 << 2) >> 2] | 0;
 if ((e | 0) == (b | 0)) {
  c[f >> 2] = e;
  tb(a, 4889, f);
 } else {
  c[g >> 2] = e;
  c[g + 4 >> 2] = b;
  tb(a, 4922, g);
 }
}

function Se(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((b | 0) == -1) return;
 e = c[(c[a >> 2] | 0) + 12 >> 2] | 0;
 a = (d << 6) + 64 & 16320;
 do {
  f = e + (b << 2) | 0;
  g = c[f >> 2] | 0;
  d = (g >>> 14) + -131071 | 0;
  c[f >> 2] = g & -16321 | a;
  b = (d | 0) == -1 ? -1 : b + 1 + d | 0;
 } while ((b | 0) != -1);
 return;
}

function og(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 c = i;
 i = i + 16 | 0;
 b = c;
 d = ud(a, 2) | 0;
 Mf(a, 1, 5);
 switch (d | 0) {
 case 0:
 case 5:
  break;
 default:
  wd(a, 2, 11925) | 0;
 }
 if (!(Gf(a, 1, 7636) | 0)) {
  kd(a, 2);
  pg(a, 1) | 0;
  d = 1;
  i = c;
  return d | 0;
 } else {
  d = ad(a, 7956, b) | 0;
  i = c;
  return d | 0;
 }
 return 0;
}

function Rh(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 e = c[(Ok() | 0) >> 2] | 0;
 if (b | 0) {
  Zc(a, 1);
  f = 1;
  i = g;
  return f | 0;
 }
 Ad(a);
 b = yl(e) | 0;
 if (!d) Hf(a, b) | 0; else {
  c[f >> 2] = d;
  c[f + 4 >> 2] = b;
  dd(a, 9541, f) | 0;
 }
 Kd(a, e);
 f = 3;
 i = g;
 return f | 0;
}

function Sk(a, b, d) {
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
 if ((Nk(Oa(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function Ag(a) {
 a = a | 0;
 var b = 0;
 b = yd(a) | 0;
 if ((b | 0) <= 1) wd(a, 2, 8055) | 0;
 Cf(a, 1);
 Gd(a, 2, 1);
 Zf(a, 2);
 b = dg(a, b + -2 | 0, -1, 1, 0, 157) | 0;
 if (!(Xf(a, 1) | 0)) {
  kd(a, 0);
  Zc(a, 0);
  Hf(a, 7808) | 0;
  a = 2;
  return a | 0;
 } else {
  Zc(a, (b | 0) == 0 & 1);
  Zf(a, 1);
  a = yd(a) | 0;
  return a | 0;
 }
 return 0;
}

function zc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 d = c[a + 8 >> 2] | 0;
 if ((d | 0) == 3) b = a; else if ((d & 15 | 0) == 4) {
  a = c[a >> 2] | 0;
  if (!(wc(a + 16 | 0, c[a + 12 >> 2] | 0, e) | 0)) b = 0; else {
   h[b >> 3] = +h[e >> 3];
   c[b + 8 >> 2] = 3;
  }
 } else b = 0;
 i = f;
 return b | 0;
}

function nm(a) {
 a = +a;
 var b = 0;
 a = +E(+a);
 h[k >> 3] = a;
 b = c[k + 4 >> 2] | 0;
 do if (b >>> 0 < 1072049730) if (b >>> 0 < 1045430272) a = 1.0; else {
  a = +om(a);
  a = a * a / ((a + 1.0) * 2.0) + 1.0;
 } else if (b >>> 0 < 1082535490) {
  a = +hn(a);
  a = (a + 1.0 / a) * .5;
  break;
 } else {
  a = +pm(a);
  break;
 } while (0);
 return +a;
}

function gd(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 if ((b | 0) > 1) {
  if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(a);
  Ub(a, b);
  return;
 } else {
  if (b | 0) return;
  b = a + 8 | 0;
  e = c[b >> 2] | 0;
  a = zb(a, 17772, 0) | 0;
  c[e >> 2] = a;
  c[e + 8 >> 2] = d[a + 4 >> 0] | 0 | 64;
  c[b >> 2] = (c[b >> 2] | 0) + 16;
  return;
 }
}

function Gg(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0;
 f = qd(c[(c[a + 12 >> 2] | 0) + 40 >> 2] | 0, 2) | 0;
 e = a + 8 | 0;
 g = c[e >> 2] | 0;
 c[e >> 2] = g + 16;
 b = Oc(a, b) | 0;
 c[g >> 2] = b;
 c[g + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 b = c[e >> 2] | 0;
 nc(a, f, b + -16 | 0, b + -32 | 0);
 c[e >> 2] = (c[e >> 2] | 0) + -32;
 return;
}

function de(a) {
 a = a | 0;
 var b = 0;
 c[a + 8 >> 2] = c[a + 4 >> 2];
 b = a + 32 | 0;
 if ((c[b >> 2] | 0) == 286) {
  c[a + 16 >> 2] = ee(a, a + 24 | 0) | 0;
  return;
 } else {
  a = a + 16 | 0;
  c[a >> 2] = c[b >> 2];
  c[a + 4 >> 2] = c[b + 4 >> 2];
  c[a + 8 >> 2] = c[b + 8 >> 2];
  c[a + 12 >> 2] = c[b + 12 >> 2];
  c[b >> 2] = 286;
  return;
 }
}

function Uc(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, j = 0;
 j = i;
 i = i + 48 | 0;
 g = j;
 f = j + 8 | 0;
 e = b + 8 | 0;
 if ((c[e >> 2] | 0) != 3) {
  g = 0;
  i = j;
  return g | 0;
 }
 h[g >> 3] = +h[b >> 3];
 g = zb(a, f, ol(f, 9776, g) | 0) | 0;
 c[b >> 2] = g;
 c[e >> 2] = d[g + 4 >> 0] | 0 | 64;
 g = 1;
 i = j;
 return g | 0;
}

function Rm(a, b) {
 a = +a;
 b = +b;
 var c = 0.0, d = 0.0, e = 0.0, f = 0.0;
 c = a * a;
 d = c * c;
 e = c * .5;
 f = 1.0 - e;
 return +(f + (1.0 - f - e + (c * (c * (c * (c * 2.480158728947673e-05 + -.001388888888887411) + .0416666666666666) + d * d * (c * (2.087572321298175e-09 - c * 1.1359647557788195e-11) + -2.7557314351390663e-07)) - a * b)));
}

function Qf(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 d = td(a, 1, 0, 0) | 0;
 c = td(a, 2, 0, 0) | 0;
 b = (ud(a, 3) | 0) != -1;
 if (Md(a, d, c) | 0) {
  Ad(a);
  Fd(a, -2);
  d = 2;
  return d | 0;
 }
 if (!b) {
  d = 1;
  return d | 0;
 }
 Cf(a, b ? 3 : 0);
 if (Rf(a, -2, 1) | 0) {
  d = 1;
  return d | 0;
 }
 kd(a, -2);
 d = 1;
 return d | 0;
}

function Jb(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0;
 f = c[e + 8 >> 2] | 0;
 if (!(f & 64)) {
  b = 0;
  return b | 0;
 }
 e = c[e >> 2] | 0;
 if ((f & 15 | 0) != 4) {
  b = (d[e + 5 >> 0] | 0) & 3;
  return b | 0;
 }
 if (!e) {
  b = 0;
  return b | 0;
 }
 if (!(a[e + 5 >> 0] & 3)) {
  b = 0;
  return b | 0;
 }
 Db(b, e);
 b = 0;
 return b | 0;
}

function Si(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 g = i;
 i = i + 48 | 0;
 j = g + 20 | 0;
 h = g;
 c[h >> 2] = a;
 c[h + 4 >> 2] = d;
 c[h + 8 >> 2] = e;
 c[h + 12 >> 2] = f;
 f = h + 16 | 0;
 Ti(j);
 c[f >> 2] = Ya[d & 3](a, j, 18, e) | 0;
 Ui(b, h);
 i = g;
 return c[f >> 2] | 0;
}

function nj(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 g = f + 8 | 0;
 d = jd(a, b, g) | 0;
 if (c[g >> 2] | 0) {
  i = f;
  return d | 0;
 }
 h = vd(a, 3) | 0;
 g = vd(a, ud(a, b) | 0) | 0;
 c[e >> 2] = h;
 c[e + 4 >> 2] = g;
 wd(a, b, dd(a, 6119, e) | 0) | 0;
 i = f;
 return d | 0;
}

function Lf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 g = f + 8 | 0;
 d = Xc(a, b, g) | 0;
 if (c[g >> 2] | 0) {
  i = f;
  return d | 0;
 }
 h = vd(a, 3) | 0;
 g = vd(a, ud(a, b) | 0) | 0;
 c[e >> 2] = h;
 c[e + 4 >> 2] = g;
 wd(a, b, dd(a, 6119, e) | 0) | 0;
 i = f;
 return d | 0;
}

function Bf(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = i;
 i = i + 112 | 0;
 e = f;
 d = f + 8 | 0;
 if (bd(a, b, d) | 0) {
  cd(a, 5915, d) | 0;
  b = c[d + 20 >> 2] | 0;
  if ((b | 0) > 0) {
   c[e >> 2] = d + 36;
   c[e + 4 >> 2] = b;
   dd(a, 5961, e) | 0;
   i = f;
   return;
  }
 }
 ed(a, 17772, 0) | 0;
 i = f;
 return;
}

function Td(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 b = Ua[c[a + 8 >> 2] & 15](c[a + 16 >> 2] | 0, c[a + 12 >> 2] | 0, e) | 0;
 e = c[e >> 2] | 0;
 if ((b | 0) == 0 | (e | 0) == 0) {
  a = -1;
  i = f;
  return a | 0;
 }
 c[a >> 2] = e + -1;
 c[a + 4 >> 2] = b + 1;
 a = d[b >> 0] | 0;
 i = f;
 return a | 0;
}

function Zb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = b + 8 | 0;
 f = c[e >> 2] | 0;
 if (f >>> 0 >= d >>> 0) {
  b = c[b >> 2] | 0;
  return b | 0;
 }
 d = d >>> 0 < 32 ? 32 : d;
 if ((d + 1 | 0) >>> 0 > 4294967293) yb(a);
 a = mb(a, c[b >> 2] | 0, f, d) | 0;
 c[b >> 2] = a;
 c[e >> 2] = d;
 b = a;
 return b | 0;
}

function ie(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 c[(c[a + 60 >> 2] | 0) + 4 >> 2] = 0;
 je(a, 92);
 a : do if ((d | 0) > 0) {
  g = 0;
  do {
   f = c[b + (g << 2) >> 2] | 0;
   if ((f | 0) == -1) break a;
   je(a, f);
   g = g + 1 | 0;
  } while ((g | 0) < (d | 0));
 } while (0);
 be(a, e, 289);
}

function zi(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0.0, e = 0, f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 g = f + 8 | 0;
 d = +sg(a, b, g);
 if (c[g >> 2] | 0) {
  i = f;
  return +d;
 }
 h = vd(a, 3) | 0;
 g = vd(a, ud(a, b) | 0) | 0;
 c[e >> 2] = h;
 c[e + 4 >> 2] = g;
 wd(a, b, dd(a, 6119, e) | 0) | 0;
 i = f;
 return +d;
}

function Xh(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 c = yd(a) | 0;
 if ((c | 0) >= 19) wd(a, 17, 9599) | 0;
 Cf(a, 1);
 Kd(a, c + -1 | 0);
 Zc(a, b);
 if ((c | 0) > 1) b = 1; else {
  c = c + 2 | 0;
  Of(a, 166, c);
  return;
 }
 do {
  b = b + 1 | 0;
  Cf(a, b);
 } while ((b | 0) != (c | 0));
 c = c + 2 | 0;
 Of(a, 166, c);
 return;
}

function Fg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(a);
 e = tc(a) | 0;
 f = a + 8 | 0;
 g = c[f >> 2] | 0;
 c[g >> 2] = e;
 c[g + 8 >> 2] = 69;
 c[f >> 2] = (c[f >> 2] | 0) + 16;
 if (!((b | 0) > 0 | (d | 0) > 0)) return;
 qc(a, e, b, d);
 return;
}

function Tk(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 1;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (Ea(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = Pk(b, d, e) | 0;
 i = g;
 return f | 0;
}

function tg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 d = Tc(a, b, d) | 0;
 if (d | 0) {
  i = f;
  return d | 0;
 }
 h = vd(a, 4) | 0;
 g = vd(a, ud(a, b) | 0) | 0;
 c[e >> 2] = h;
 c[e + 4 >> 2] = g;
 wd(a, b, dd(a, 6119, e) | 0) | 0;
 i = f;
 return d | 0;
}

function ri(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 b = Ph(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) ad(a, 9479, d) | 0;
 f = c[b >> 2] | 0;
 e = Id(a, 2, 0, 2092) | 0;
 b = Jd(a, 3, 1024) | 0;
 a = Rh(a, (Cm(f, 0, c[2108 + (e << 2) >> 2] | 0, b) | 0) == 0 & 1, 0) | 0;
 i = d;
 return a | 0;
}

function ng(b) {
 b = b | 0;
 var c = 0, d = 0;
 c = yd(b) | 0;
 if ((ud(b, 1) | 0) == 4) if ((a[(Tc(b, 1, 0) | 0) >> 0] | 0) == 35) {
  Kd(b, c + -1 | 0);
  d = 1;
  return d | 0;
 }
 d = Lf(b, 1) | 0;
 d = (d | 0) < 0 ? d + c | 0 : (d | 0) > (c | 0) ? c : d;
 if ((d | 0) <= 0) wd(b, 1, 7937) | 0;
 d = c - d | 0;
 return d | 0;
}

function uk(a) {
 a = a | 0;
 var b = 0, c = 0, e = 0, f = 0;
 f = i;
 i = i + 112 | 0;
 c = f;
 b = Lf(a, 2) | 0;
 Mf(a, 1, 6);
 Cf(a, 1);
 cd(a, 11773, c) | 0;
 if ((b | 0) > 0) {
  if ((b | 0) > (d[c + 32 >> 0] | 0 | 0)) e = 3;
 } else e = 3;
 if ((e | 0) == 3) wd(a, 2, 11776) | 0;
 wk(a, vk(a, 1, b) | 0);
 i = f;
 return 1;
}

function Mg(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 Eg(b, -1001e3, 8113);
 Eg(b, -1, c);
 c = Yc(b, -1) | 0;
 kd(b, -3);
 if (!c) {
  ed(b, 8158, 58) | 0;
  d = 1;
  return d | 0;
 }
 if ((a[d >> 0] | 0) == 42) {
  Zc(b, 1);
  d = 0;
  return d | 0;
 } else {
  ed(b, 8158, 58) | 0;
  d = 2;
  return d | 0;
 }
 return 0;
}

function Me(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = b + 48 | 0;
 e = (d[g >> 0] | 0) + e | 0;
 f = (c[b >> 2] | 0) + 78 | 0;
 if ((e | 0) <= (d[f >> 0] | 0 | 0)) {
  b = e & 255;
  a[g >> 0] = b;
  return;
 }
 if ((e | 0) > 249) ae(c[b + 12 >> 2] | 0, 7025);
 b = e & 255;
 a[f >> 0] = b;
 a[g >> 0] = b;
 return;
}

function Nc(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0;
 e = b + 12 | 0;
 f = 0;
 do {
  g = Oc(b, c[1224 + (f << 2) >> 2] | 0) | 0;
  c[(c[e >> 2] | 0) + 184 + (f << 2) >> 2] = g;
  g = (c[(c[e >> 2] | 0) + 184 + (f << 2) >> 2] | 0) + 5 | 0;
  a[g >> 0] = d[g >> 0] | 0 | 32;
  f = f + 1 | 0;
 } while ((f | 0) != 17);
 return;
}

function Ak(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 h = (d | 0) == 0 | (e | 0) == 0;
 g = c[b + 16 >> 2] | 0;
 if (a[g + 18 >> 0] & 1) c[b + 20 >> 2] = c[g + 28 >> 2];
 c[b + 52 >> 2] = h ? 0 : d;
 c[b + 44 >> 2] = f;
 c[b + 48 >> 2] = f;
 a[b + 40 >> 0] = h ? 0 : e & 255;
 return 1;
}

function uj(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 b = nj(a, 1) | 0;
 c = Lf(a, 2) | 0;
 d = Jd(a, 3, 1) | 0;
 if ((c | 0) <= -1) wd(a, 2, 11052) | 0;
 if ((d | 0) <= 0) wd(a, 3, 11077) | 0;
 if ((d + c | 0) > 32) ad(a, 11100, e) | 0;
 oj(a, b >>> c & ~(-2 << d + -1));
 i = e;
 return 1;
}

function Em(a) {
 a = a | 0;
 var b = 0;
 if (!(c[a >> 2] & 128)) b = 1; else b = (c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0 ? 2 : 1;
 b = Ua[c[a + 40 >> 2] & 15](a, 0, b) | 0;
 if ((b | 0) >= 0) b = b - (c[a + 8 >> 2] | 0) + (c[a + 4 >> 2] | 0) + (c[a + 20 >> 2] | 0) - (c[a + 28 >> 2] | 0) | 0;
 return b | 0;
}

function vn(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 f = a & 65535;
 e = b & 65535;
 c = R(e, f) | 0;
 d = a >>> 16;
 a = (c >>> 16) + (R(e, d) | 0) | 0;
 e = b >>> 16;
 b = R(e, f) | 0;
 return (C = (a >>> 16) + (R(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
}

function Vf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 b = i;
 i = i + 16 | 0;
 Wf(a, 2, 7689);
 Cf(a, 1);
 yf(a, 0, 1, 0, 0);
 if (!(ud(a, -1) | 0)) {
  kd(a, -2);
  c[d >> 2] = 0;
  d = 0;
  i = b;
  return d | 0;
 }
 if (!(Af(a, -1) | 0)) ad(a, 7735, b) | 0;
 Zf(a, 5);
 d = Tc(a, 5, d) | 0;
 i = b;
 return d | 0;
}

function Od(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 a = c[b >> 2] | 0;
 if ((a | 0) > 0) {
  c[d >> 2] = a;
  c[b >> 2] = 0;
  b = b + 8 | 0;
  return b | 0;
 }
 a = b + 4 | 0;
 if (rm(c[a >> 2] | 0) | 0) {
  b = 0;
  return b | 0;
 }
 b = b + 8 | 0;
 c[d >> 2] = Bm(b, 1, 1024, c[a >> 2] | 0) | 0;
 return b | 0;
}

function mj(a) {
 a = a | 0;
 var b = 0, c = 0;
 b = nj(a, 1) | 0;
 c = Lf(a, 2) | 0;
 if ((b | 0) < 0 & (c | 0) > -1) {
  if ((c | 0) > 31) b = -1; else b = b >>> c | ~(-1 >>> c);
  oj(a, b);
  return 1;
 }
 if ((c | 0) > 0) b = (c | 0) > 31 ? 0 : b >>> c; else b = (c | 0) < -31 ? 0 : b << 0 - c;
 oj(a, b);
 return 1;
}

function Tb(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0;
 i = c[b + 12 >> 2] | 0;
 f = (mb(b, 0, e & 15, f) | 0) + h | 0;
 h = (g | 0) == 0 ? i + 68 | 0 : g;
 a[f + 5 >> 0] = (d[i + 60 >> 0] | 0) & 3;
 a[f + 4 >> 0] = e;
 c[f >> 2] = c[h >> 2];
 c[h >> 2] = f;
 return f | 0;
}

function Fk(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0, e = 0;
 if ((ud(a, 1) | 0) == 8) {
  b = mh(a, 1) | 0;
  e = 1;
 } else {
  b = a;
  e = 0;
 }
 c = e + 1 | 0;
 d = Tc(a, c, 0) | 0;
 if (!d) if ((ud(a, c) | 0) >= 1) {
  Cf(a, c);
  return 1;
 }
 Gk(a, b, d, Jd(a, e | 2, (b | 0) == (a | 0) & 1) | 0);
 return 1;
}

function gg(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0;
 e = qd(c[(c[a + 12 >> 2] | 0) + 40 >> 2] | 0, 2) | 0;
 f = a + 8 | 0;
 g = c[f >> 2] | 0;
 c[f >> 2] = g + 16;
 b = Oc(a, b) | 0;
 c[g >> 2] = b;
 c[g + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 b = (c[f >> 2] | 0) + -16 | 0;
 ic(a, e, b, b);
 return;
}

function wg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 b = xg(a, b) | 0;
 if (!(Ff(a, b) | 0)) {
  c = 0;
  return c | 0;
 }
 Hf(a, c) | 0;
 If(a, -2);
 if (!(ud(a, -1) | 0)) {
  kd(a, -3);
  c = 0;
  return c | 0;
 } else {
  Ed(a, -2);
  Cf(a, b);
  yf(a, 1, 1, 0, 0);
  c = 1;
  return c | 0;
 }
 return 0;
}

function Oh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = i;
 i = i + 16 | 0;
 if ((ud(a, 1) | 0) == -1) Eg(a, -1001e3, 9462);
 if (!(c[(Ph(a, 1, 9473) | 0) + 4 >> 2] | 0)) ad(a, 9479, b) | 0;
 e = (Ph(a, 1, 9473) | 0) + 4 | 0;
 d = c[e >> 2] | 0;
 c[e >> 2] = 0;
 a = Xa[d & 255](a) | 0;
 i = b;
 return a | 0;
}

function ag(a) {
 a = a | 0;
 var b = 0;
 Ef(a, 1);
 Ad(a);
 Fd(a, 1);
 b = dg(a, (yd(a) | 0) + -2 | 0, -1, 0, 0, 157) | 0;
 if (!(Xf(a, 1) | 0)) {
  kd(a, 0);
  Zc(a, 0);
  Hf(a, 7808) | 0;
  a = 2;
  return a | 0;
 } else {
  Zc(a, (b | 0) == 0 & 1);
  Zf(a, 1);
  a = yd(a) | 0;
  return a | 0;
 }
 return 0;
}

function Mf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 if ((ud(a, b) | 0) == (d | 0)) {
  i = f;
  return;
 }
 g = vd(a, d) | 0;
 d = vd(a, ud(a, b) | 0) | 0;
 c[e >> 2] = g;
 c[e + 4 >> 2] = d;
 wd(a, b, dd(a, 6119, e) | 0) | 0;
 i = f;
 return;
}

function zm(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = R(d, b) | 0;
 if ((c[e + 76 >> 2] | 0) > -1) {
  g = (Fl(e) | 0) == 0;
  a = ul(a, f, e) | 0;
  if (!g) Rk(e);
 } else a = ul(a, f, e) | 0;
 if ((a | 0) != (f | 0)) d = (a >>> 0) / (b >>> 0) | 0;
 return d | 0;
}

function ci(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 b = i;
 i = i + 16 | 0;
 d = tg(a, 1, 0) | 0;
 td(a, 2, 9564, 0) | 0;
 f = Rg(a, 8) | 0;
 e = f + 4 | 0;
 c[e >> 2] = 0;
 Uh(a, 9473);
 ad(a, 9713, b) | 0;
 c[f >> 2] = 0;
 c[e >> 2] = 167;
 a = Rh(a, 0, d) | 0;
 i = b;
 return a | 0;
}

function Wf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 if (Xf(a, b + 20 | 0) | 0) {
  i = f;
  return;
 }
 if (!d) {
  ad(a, 7808, f + 8 | 0) | 0;
  i = f;
  return;
 } else {
  c[e >> 2] = d;
  ad(a, 7715, e) | 0;
  i = f;
  return;
 }
}

function jb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var e = 0;
 c = c ^ b;
 e = (b >>> 5) + 1 | 0;
 if (e >>> 0 > b >>> 0) {
  a = c;
  return a | 0;
 }
 do {
  c = (c << 5) + (c >>> 2) + (d[a + (b + -1) >> 0] | 0) ^ c;
  b = b - e | 0;
 } while (b >>> 0 >= e >>> 0);
 return c | 0;
}

function bl(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 b = f;
 if (!(c[a + 8 >> 2] | 0)) if (!(cl(a) | 0)) e = 3; else b = -1; else e = 3;
 if ((e | 0) == 3) if ((Ua[c[a + 32 >> 2] & 15](a, b, 1) | 0) == 1) b = d[b >> 0] | 0; else b = -1;
 i = f;
 return b | 0;
}

function Lm(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e + 8 | 0;
 b = e;
 c[b >> 2] = a;
 b = Nk(Ia(10, b | 0) | 0) | 0;
 if (!b) b = 0; else if ((c[(Ok() | 0) >> 2] | 0) == 21) {
  c[d >> 2] = a;
  b = Nk(ha(40, d | 0) | 0) | 0;
 }
 i = e;
 return b | 0;
}

function ed(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(a);
 b = zb(a, b, e) | 0;
 e = a + 8 | 0;
 a = c[e >> 2] | 0;
 c[a >> 2] = b;
 c[a + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 c[e >> 2] = (c[e >> 2] | 0) + 16;
 return b + 16 | 0;
}

function Sj(a) {
 a = a | 0;
 var b = 0.0, c = 0, d = 0, e = 0.0;
 d = yd(a) | 0;
 b = +zi(a, 1);
 if ((d | 0) < 2) {
  id(a, b);
  return 1;
 } else c = 2;
 while (1) {
  e = +zi(a, c);
  b = e < b ? e : b;
  if ((c | 0) == (d | 0)) break; else c = c + 1 | 0;
 }
 id(a, b);
 return 1;
}

function Rj(a) {
 a = a | 0;
 var b = 0.0, c = 0, d = 0, e = 0.0;
 d = yd(a) | 0;
 b = +zi(a, 1);
 if ((d | 0) < 2) {
  id(a, b);
  return 1;
 } else c = 2;
 while (1) {
  e = +zi(a, c);
  b = e > b ? e : b;
  if ((c | 0) == (d | 0)) break; else c = c + 1 | 0;
 }
 id(a, b);
 return 1;
}

function Mb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 if ((c[b + 8 >> 2] | 0) == (b + 16 | 0)) {
  mb(a, b, 32, 0) | 0;
  return;
 }
 d = b + 16 | 0;
 e = c[d + 4 >> 2] | 0;
 c[e + 16 >> 2] = c[d >> 2];
 c[(c[d >> 2] | 0) + 16 + 4 >> 2] = e;
 mb(a, b, 32, 0) | 0;
 return;
}

function lh(a) {
 a = a | 0;
 var b = 0;
 b = mh(a, 1) | 0;
 if (!b) wd(a, 1, 8959) | 0;
 b = nh(a, b, (yd(a) | 0) + -1 | 0) | 0;
 if ((b | 0) < 0) {
  Zc(a, 0);
  Fd(a, -2);
  a = 2;
  return a | 0;
 } else {
  Zc(a, 1);
  Fd(a, ~b);
  a = b + 1 | 0;
  return a | 0;
 }
 return 0;
}

function Qh(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 Eg(a, -1001e3, 9462);
 b = Yc(a, -1) | 0;
 if (!(c[b + 4 >> 2] | 0)) {
  c[d >> 2] = 9466;
  ad(a, 9514, d) | 0;
 }
 d = Rh(a, (lm(c[b >> 2] | 0) | 0) == 0 & 1, 0) | 0;
 i = e;
 return d | 0;
}

function Cm(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 d = b + 75 | 0;
 a[d >> 0] = -1;
 switch (e | 0) {
 case 2:
  {
   c[b + 48 >> 2] = 0;
   break;
  }
 case 1:
  {
   a[d >> 0] = 10;
   break;
  }
 default:
  {}
 }
 c[b >> 2] = c[b >> 2] | 64;
 return 0;
}

function ui(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 b = Ph(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) {
  ed(a, 9851, 13) | 0;
  i = e;
  return 1;
 } else {
  c[d >> 2] = c[b >> 2];
  dd(a, 9865, d) | 0;
  i = e;
  return 1;
 }
 return 0;
}

function _k(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 c[a + 104 >> 2] = b;
 d = c[a + 8 >> 2] | 0;
 e = c[a + 4 >> 2] | 0;
 f = d - e | 0;
 c[a + 108 >> 2] = f;
 if ((b | 0) != 0 & (f | 0) > (b | 0)) c[a + 100 >> 2] = e + b; else c[a + 100 >> 2] = d;
 return;
}

function ik(a, b) {
 a = a | 0;
 b = b | 0;
 Dg(a, -1001e3, 11434) | 0;
 vh(a) | 0;
 If(a, -2);
 if ((ud(a, -1) | 0) != 6) return;
 Hf(a, c[2860 + (c[b >> 2] << 2) >> 2] | 0) | 0;
 b = c[b + 20 >> 2] | 0;
 if ((b | 0) > -1) Kd(a, b); else Ad(a);
 yf(a, 2, 0, 0, 0);
 return;
}

function ii(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0;
 d = Yc(a, b) | 0;
 if (!d) {
  b = 0;
  return b | 0;
 }
 if (!(Ff(a, b) | 0)) {
  b = 0;
  return b | 0;
 }
 Eg(a, -1001e3, c);
 b = (Dd(a, -1, -2) | 0) == 0;
 kd(a, -3);
 b = b ? 0 : d;
 return b | 0;
}

function ei(a, b) {
 a = a | 0;
 b = b | 0;
 switch (b | 0) {
 case -1:
  {
   b = c[(Ok() | 0) >> 2] | 0;
   Ad(a);
   Hf(a, yl(b) | 0) | 0;
   Kd(a, b);
   return 3;
  }
 case 0:
  {
   Zc(a, 1);
   break;
  }
 default:
  Ad(a);
 }
 Hf(a, 10058) | 0;
 Kd(a, b);
 return 3;
}

function Lh(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if (!(ud(a, 2) | 0)) {
  c = Mh(a, b, c, 1) | 0;
  return c | 0;
 } else {
  Cf(a, 2);
  Cf(a, b + -1 | 0);
  Cf(a, c + -2 | 0);
  yf(a, 2, 1, 0, 0);
  c = sd(a, -1) | 0;
  kd(a, -2);
  return c | 0;
 }
 return 0;
}

function Pi(a) {
 a = a | 0;
 var b = 0, c = 0;
 c = i;
 i = i + 1056 | 0;
 b = c + 8 | 0;
 Mf(a, 1, 6);
 kd(a, 1);
 Pg(a, b);
 if (!(Ri(a, 2, b) | 0)) {
  Ug(b);
  b = 1;
  i = c;
  return b | 0;
 } else {
  b = ad(a, 10275, c) | 0;
  i = c;
  return b | 0;
 }
 return 0;
}

function Ie(a) {
 a = a | 0;
 var b = 0, c = 0;
 if (a >>> 0 < 8) {
  b = a;
  return b | 0;
 }
 if (a >>> 0 > 15) {
  b = 1;
  do {
   c = a + 1 | 0;
   a = c >>> 1;
   b = b + 1 | 0;
  } while (c >>> 0 > 31);
  b = b << 3;
 } else b = 8;
 c = b | a + -8;
 return c | 0;
}

function xd(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 c = yd(a) | 0;
 cd(a, 8832, b) | 0;
 pd(a, -1001e3, 2);
 b = c + 1 | 0;
 if (!(zd(a, b, 2) | 0)) {
  kd(a, c);
  a = 0;
  return a | 0;
 } else {
  Gd(a, -1, b);
  kd(a, -3);
  a = 1;
  return a | 0;
 }
 return 0;
}

function Qj(a) {
 a = a | 0;
 var b = 0.0, c = 0.0;
 b = +zi(a, 1);
 do if ((ud(a, 2) | 0) < 1) b = +jn(b); else {
  c = +zi(a, 2);
  if (c == 10.0) {
   b = +Pm(b);
   break;
  } else {
   b = +jn(b);
   b = b / +jn(c);
   break;
  }
 } while (0);
 id(a, b);
 return 1;
}

function tj(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 c = yd(a) | 0;
 if ((c | 0) < 1) b = 1; else {
  d = 1;
  b = -1;
  while (1) {
   b = (nj(a, d) | 0) & b;
   if ((d | 0) == (c | 0)) break; else d = d + 1 | 0;
  }
  b = (b | 0) != 0;
 }
 Zc(a, b & 1);
 return 1;
}

function Gh(a) {
 a = a | 0;
 var b = 0;
 b = yd(a) | 0;
 Fg(a, b, 1);
 Kd(a, b);
 _c(a, -2, 9377);
 if ((b | 0) <= 0) return 1;
 Cf(a, 1);
 Xg(a, -2, 1);
 Zf(a, 1);
 if ((b | 0) <= 1) return 1;
 do {
  Xg(a, 1, b);
  b = b + -1 | 0;
 } while ((b | 0) > 1);
 return 1;
}

function Rg(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(a);
 b = Sg(a, b, 0) | 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 c[d >> 2] = b;
 c[d + 8 >> 2] = 71;
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 return b + 24 | 0;
}

function Gf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if (!(Ff(a, b) | 0)) {
  b = 0;
  return b | 0;
 }
 Hf(a, c) | 0;
 If(a, -2);
 if (!(ud(a, -1) | 0)) {
  kd(a, -3);
  b = 0;
  return b | 0;
 } else {
  Ed(a, -2);
  b = 1;
  return b | 0;
 }
 return 0;
}

function ji(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 Eg(a, -1001e3, 9462);
 b = Yc(a, -1) | 0;
 if (!(c[b + 4 >> 2] | 0)) {
  c[d >> 2] = 9466;
  ad(a, 9514, d) | 0;
 }
 d = ki(a, c[b >> 2] | 0, 1) | 0;
 i = e;
 return d | 0;
}

function fi(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 Eg(a, -1001e3, 9554);
 b = Yc(a, -1) | 0;
 if (!(c[b + 4 >> 2] | 0)) {
  c[d >> 2] = 9558;
  ad(a, 9514, d) | 0;
 }
 d = Zh(a, c[b >> 2] | 0, 1) | 0;
 i = e;
 return d | 0;
}

function rl(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a + 20 | 0;
 f = c[e >> 2] | 0;
 a = (c[a + 16 >> 2] | 0) - f | 0;
 a = a >>> 0 > d >>> 0 ? d : a;
 sn(f | 0, b | 0, a | 0) | 0;
 c[e >> 2] = (c[e >> 2] | 0) + a;
 return d | 0;
}

function Tl() {
 var a = 0, b = 0, d = 0;
 b = 15136;
 b = wn(c[b >> 2] | 0, c[b + 4 >> 2] | 0, 1284865837, 1481765933) | 0;
 b = mn(b | 0, C | 0, 1, 0) | 0;
 a = C;
 d = 15136;
 c[d >> 2] = b;
 c[d + 4 >> 2] = a;
 a = qn(b | 0, a | 0, 33) | 0;
 return a | 0;
}

function rd(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 if (!(sd(a, 1) | 0)) {
  c[b >> 2] = td(a, 2, 6101, 0) | 0;
  b = ad(a, 9677, b) | 0;
  i = d;
  return b | 0;
 } else {
  b = yd(a) | 0;
  i = d;
  return b | 0;
 }
 return 0;
}

function gi(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = Rg(a, 8) | 0;
 b = d + 4 | 0;
 c[b >> 2] = 0;
 Uh(a, 9473);
 c[d >> 2] = 0;
 c[b >> 2] = 165;
 b = Im() | 0;
 c[d >> 2] = b;
 if (b | 0) {
  d = 1;
  return d | 0;
 }
 d = Rh(a, 0, 0) | 0;
 return d | 0;
}

function Eh(a) {
 a = a | 0;
 var b = 0.0, c = 0.0;
 Mf(a, 1, 5);
 Ad(a);
 b = 0.0;
 a : while (1) {
  do {
   if (!(Bd(a, 1) | 0)) break a;
   kd(a, -2);
  } while ((ud(a, -1) | 0) != 3);
  c = +sg(a, -1, 0);
  b = c > b ? c : b;
 }
 id(a, b);
 return 1;
}

function pc(a) {
 a = a | 0;
 var b = 0, c = 0;
 a = a + -1 | 0;
 if (a >>> 0 > 255) {
  c = a;
  b = 0;
  while (1) {
   b = b + 8 | 0;
   a = c >>> 8;
   if (c >>> 0 > 65535) c = a; else break;
  }
 } else b = 0;
 return (d[4559 + a >> 0] | 0) + b | 0;
}

function rn(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 while ((f | 0) < (d | 0)) {
  e = c[b + (f << 3) >> 2] | 0;
  if (!e) break;
  if ((e | 0) == (a | 0)) return c[b + ((f << 3) + 4) >> 2] | 0;
  f = f + 1 | 0;
 }
 return 0;
}

function Wg(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 d = e;
 b = tg(a, 1, 0) | 0;
 Eg(a, -1001e3, 12078);
 Eg(a, -1, b);
 if (ud(a, -1) | 0) {
  i = e;
  return 1;
 }
 c[d >> 2] = b;
 dd(a, 8283, d) | 0;
 i = e;
 return 1;
}

function zj(a) {
 a = a | 0;
 var b = 0, c = 0;
 b = nj(a, 1) | 0;
 c = Lf(a, 2) | 0;
 if ((c | 0) > 0) {
  c = (c | 0) > 31 ? 0 : b >>> c;
  oj(a, c);
  return 1;
 } else {
  c = (c | 0) < -31 ? 0 : b << 0 - c;
  oj(a, c);
  return 1;
 }
 return 0;
}

function Ng(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 d = tg(a, 1, 0) | 0;
 c = tg(a, 2, 0) | 0;
 b = td(a, 3, 15062, 0) | 0;
 if (Og(a, d, c, b, td(a, 4, 8240, 0) | 0) | 0) {
  d = 1;
  return d | 0;
 }
 Ad(a);
 Fd(a, -2);
 d = 2;
 return d | 0;
}

function bg(a) {
 a = a | 0;
 var b = 0;
 b = cg(a, 0) | 0;
 if (!(Xf(a, 1) | 0)) {
  kd(a, 0);
  Zc(a, 0);
  Hf(a, 7808) | 0;
  a = 2;
  return a | 0;
 } else {
  Zc(a, (b | 0) == 1 & 1);
  Zf(a, 1);
  a = yd(a) | 0;
  return a | 0;
 }
 return 0;
}

function Nf(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 if (Gf(a, 1, b) | 0) {
  Cf(a, 1);
  yf(a, 1, 3, 0, 0);
  return;
 }
 Mf(a, 1, 5);
 Of(a, d, 0);
 Cf(a, 1);
 if (!c) {
  Ad(a);
  return;
 } else {
  Kd(a, 0);
  return;
 }
}

function pj(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 c = yd(a) | 0;
 if ((c | 0) < 1) b = -1; else {
  d = 1;
  b = -1;
  while (1) {
   b = (nj(a, d) | 0) & b;
   if ((d | 0) == (c | 0)) break; else d = d + 1 | 0;
  }
 }
 oj(a, b);
 return 1;
}

function Oi(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 e = a + 8 | 0;
 d = (c[e >> 2] | 0) + b | 0;
 c[e >> 2] = d;
 b = c[a + 12 >> 2] | 0;
 ed(b, c[a >> 2] | 0, d) | 0;
 if ((c[a >> 2] | 0) == (a + 16 | 0)) return;
 Ed(b, -2);
 return;
}

function ti(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = Ph(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) return 0;
 if (!(c[b >> 2] | 0)) return 0;
 d = (Ph(a, 1, 9473) | 0) + 4 | 0;
 b = c[d >> 2] | 0;
 c[d >> 2] = 0;
 Xa[b & 255](a) | 0;
 return 0;
}

function pf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 b = b << 6;
 if ((c | 0) < 262144) {
  c = re(a, b | c << 14 | 1) | 0;
  return c | 0;
 } else {
  b = re(a, b | 2) | 0;
  re(a, c << 6 | 39) | 0;
  c = b;
  return c | 0;
 }
 return 0;
}

function sj(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 c = yd(a) | 0;
 if ((c | 0) < 1) b = 0; else {
  d = 1;
  b = 0;
  while (1) {
   b = (nj(a, d) | 0) ^ b;
   if ((d | 0) == (c | 0)) break; else d = d + 1 | 0;
  }
 }
 oj(a, b);
 return 1;
}

function sc(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 b = c[b + 12 >> 2] | 0;
 if ((d[b + 61 >> 0] | 0) < 2) {
  Db(b, f);
  return;
 } else {
  f = e + 5 | 0;
  a[f >> 0] = (d[b + 60 >> 0] | 0) & 3 | (d[f >> 0] | 0) & 184;
  return;
 }
}

function rj(a) {
 a = a | 0;
 var b = 0, c = 0, d = 0;
 c = yd(a) | 0;
 if ((c | 0) < 1) b = 0; else {
  d = 1;
  b = 0;
  while (1) {
   b = nj(a, d) | 0 | b;
   if ((d | 0) == (c | 0)) break; else d = d + 1 | 0;
  }
 }
 oj(a, b);
 return 1;
}

function sf(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0;
 e = (d[b + 48 >> 0] | 0) + e | 0;
 f = (c[b >> 2] | 0) + 78 | 0;
 if ((e | 0) <= (d[f >> 0] | 0 | 0)) return;
 if ((e | 0) > 249) ae(c[b + 12 >> 2] | 0, 7025);
 a[f >> 0] = e;
 return;
}

function Pc(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0;
 e = 0;
 do {
  f = Oc(b, c[1292 + (e << 2) >> 2] | 0) | 0;
  g = f + 5 | 0;
  a[g >> 0] = d[g >> 0] | 0 | 32;
  e = e + 1 | 0;
  a[f + 6 >> 0] = e;
 } while ((e | 0) != 22);
 return;
}

function Ri(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = c[a + 8 >> 2] | 0;
 if ((c[e + -8 >> 2] | 0) != 70) {
  b = 1;
  return b | 0;
 }
 b = Si(a, c[(c[e + -16 >> 2] | 0) + 12 >> 2] | 0, b, d, 0) | 0;
 return b | 0;
}

function Cg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 Of(a, c, 0);
 Hf(a, b) | 0;
 yf(a, 1, 1, 0, 0);
 Dg(a, -1001e3, 8754) | 0;
 Cf(a, -2);
 _c(a, -2, b);
 kd(a, -2);
 if (!d) return;
 Cf(a, -1);
 Gg(a, b);
 return;
}

function Ji(a) {
 a = a | 0;
 var b = 0, c = 0;
 c = i;
 i = i + 32 | 0;
 b = c + 4 | 0;
 if (!(Jm(b) | 0)) {
  b = ad(a, 10175, c) | 0;
  i = c;
  return b | 0;
 } else {
  Hf(a, b) | 0;
  b = 1;
  i = c;
  return b | 0;
 }
 return 0;
}

function Rb(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = (c[a + 16 >> 2] | 0) + 12 | 0;
 b = c[d >> 2] | 0;
 c[d >> 2] = 0;
 if (!b) return;
 do {
  d = b;
  b = c[b + 12 >> 2] | 0;
  mb(a, d, 40, 0) | 0;
 } while ((b | 0) != 0);
 return;
}

function Nb(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = c[b + 16 >> 2] | 0;
 if ((e | 0) != 15104) mb(a, e, 32 << (d[b + 7 >> 0] | 0), 0) | 0;
 mb(a, c[b + 12 >> 2] | 0, c[b + 28 >> 2] << 4, 0) | 0;
 mb(a, b, 32, 0) | 0;
 return;
}

function hi(a) {
 a = a | 0;
 var b = 0;
 Ef(a, 1);
 b = ii(a, 1, 9473) | 0;
 if (!b) {
  Ad(a);
  return 1;
 }
 if (!(c[b + 4 >> 2] | 0)) {
  ed(a, 9753, 11) | 0;
  return 1;
 } else {
  ed(a, 9765, 4) | 0;
  return 1;
 }
 return 0;
}

function Sg(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 if (b >>> 0 > 4294967269) yb(a); else {
  a = Tb(a, 7, b + 24 | 0, 0, 0) | 0;
  c[a + 16 >> 2] = b;
  c[a + 8 >> 2] = 0;
  c[a + 12 >> 2] = d;
  return a | 0;
 }
 return 0;
}

function mc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = c[a + 12 >> 2] | 0;
 if ((a | 0) == (b | 0)) d = 1; else if ((d | 0) == (c[b + 12 >> 2] | 0)) d = (Ml(a + 16 | 0, b + 16 | 0, d) | 0) == 0; else d = 0;
 return d & 1 | 0;
}

function dd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 e = f;
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(a);
 c[e >> 2] = d;
 d = ub(a, b, e) | 0;
 i = f;
 return d | 0;
}

function Tf(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 g = i;
 i = i + 16 | 0;
 h = g;
 c[h >> 2] = b;
 c[h + 4 >> 2] = d;
 d = Pd(a, 8, h, e, f) | 0;
 i = g;
 return d | 0;
}

function tc(b) {
 b = b | 0;
 b = Tb(b, 5, 32, 0, 0) | 0;
 c[b + 8 >> 2] = 0;
 a[b + 6 >> 0] = -1;
 c[b + 12 >> 2] = 0;
 c[b + 28 >> 2] = 0;
 c[b + 16 >> 2] = 15104;
 a[b + 7 >> 0] = 0;
 c[b + 20 >> 2] = 15104;
 return b | 0;
}

function rh(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0;
 f = a + 8 | 0;
 c[f >> 2] = e;
 b = Oc(a, b) | 0;
 c[e >> 2] = b;
 c[e + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 c[f >> 2] = (c[f >> 2] | 0) + 16;
 wb(a, -1);
}

function il(a, b) {
 a = +a;
 b = +b;
 var d = 0;
 h[k >> 3] = b;
 d = c[k + 4 >> 2] | 0;
 b = +E(+a);
 h[k >> 3] = b;
 d = d & -2147483648 | c[k + 4 >> 2];
 c[k >> 2] = c[k >> 2];
 c[k + 4 >> 2] = d;
 return +(+h[k >> 3]);
}

function Dg(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 Eg(a, b, c);
 if ((ud(a, -1) | 0) == 5) {
  b = 1;
  return b | 0;
 }
 kd(a, -2);
 b = xg(a, b) | 0;
 Fg(a, 0, 0);
 Cf(a, -1);
 _c(a, b, c);
 b = 0;
 return b | 0;
}

function Kl(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = c & 255;
 do {
  if (!d) {
   c = 0;
   break;
  }
  d = d + -1 | 0;
  c = b + d | 0;
 } while ((a[c >> 0] | 0) != e << 24 >> 24);
 return c | 0;
}

function yh(a) {
 a = a | 0;
 var b = 0;
 b = mh(a, -1001001) | 0;
 b = nh(a, b, yd(a) | 0) | 0;
 if ((b | 0) >= 0) return b | 0;
 if (!(Af(a, -1) | 0)) hd(a) | 0;
 Bf(a, 1);
 Fd(a, -2);
 gd(a, 2);
 hd(a) | 0;
 return 0;
}

function vh(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = a + 8 | 0;
 d = c[b >> 2] | 0;
 c[d >> 2] = a;
 c[d + 8 >> 2] = 72;
 c[b >> 2] = (c[b >> 2] | 0) + 16;
 return (c[(c[a + 12 >> 2] | 0) + 172 >> 2] | 0) == (a | 0) | 0;
}

function si(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = Ph(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) ad(a, 9479, d) | 0;
 b = c[b >> 2] | 0;
 Cf(a, 1);
 a = ki(a, b, 2) | 0;
 i = d;
 return a | 0;
}

function mi(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = Ph(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) ad(a, 9479, d) | 0;
 a = Rh(a, (lm(c[b >> 2] | 0) | 0) == 0 & 1, 0) | 0;
 i = d;
 return a | 0;
}

function Lg(a) {
 a = a | 0;
 var b = 0;
 b = tg(a, 1, 0) | 0;
 b = Mg(a, b, tg(a, 2, 0) | 0) | 0;
 if (!b) {
  a = 1;
  return a | 0;
 }
 Ad(a);
 Fd(a, -2);
 Hf(a, (b | 0) == 1 ? 8217 : 8224) | 0;
 a = 3;
 return a | 0;
}

function wj(a) {
 a = a | 0;
 var b = 0, c = 0;
 b = nj(a, 1) | 0;
 c = Lf(a, 2) | 0;
 if ((c | 0) < 0) if ((c | 0) < -31) b = 0; else b = b >>> (0 - c | 0); else b = (c | 0) > 31 ? 0 : b << c;
 oj(a, b);
 return 1;
}

function Jg(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d + 4 | 0;
 Kg(a, b);
 b = Xc(a, -1, e) | 0;
 if (!(c[e >> 2] | 0)) ad(a, 8120, d) | 0;
 kd(a, -2);
 i = d;
 return b | 0;
}

function Ic(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = d << 2;
 b = Tb(b, 6, e + 16 | 0, 0, 0) | 0;
 c[b + 12 >> 2] = 0;
 a[b + 6 >> 0] = d;
 if (!d) return b | 0;
 nn(b + 16 | 0, 0, e | 0) | 0;
 return b | 0;
}

function Hk(a) {
 a = a | 0;
 var b = 0;
 b = Tc(a, 1, 0) | 0;
 if (b | 0) {
  Gk(a, a, b, 1);
  return 1;
 }
 if ((ud(a, 1) | 0) < 1) return 1;
 if (wg(a, 1, 12111) | 0) return 1;
 ed(a, 12122, 18) | 0;
 return 1;
}

function xn(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 tn(a, b, d, e, f) | 0;
 i = g;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function $e(d, e, f) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0;
 g = e + 8 | 0;
 a[g + 2 >> 0] = c[g >> 2];
 b[g >> 1] = we(d, f) | 0;
 a[g + 3 >> 0] = (c[e >> 2] | 0) == 8 ? 8 : 7;
 c[e >> 2] = 9;
 return;
}

function vm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  e = (Fl(a) | 0) == 0;
  b = wm(a, b, d) | 0;
  if (!e) Rk(a);
 } else b = wm(a, b, d) | 0;
 return b | 0;
}

function Uf(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 a = b + 4 | 0;
 e = c[a >> 2] | 0;
 if (!e) {
  b = 0;
  return b | 0;
 }
 c[d >> 2] = e;
 c[a >> 2] = 0;
 b = c[b >> 2] | 0;
 return b | 0;
}

function sm(a) {
 a = a | 0;
 var b = 0, d = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  d = (Fl(a) | 0) == 0;
  b = (c[a >> 2] | 0) >>> 5 & 1;
  if (!d) Rk(a);
 } else b = (c[a >> 2] | 0) >>> 5 & 1;
 return b | 0;
}

function wn(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = vn(e, f) | 0;
 a = C;
 return (C = (R(b, f) | 0) + (R(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function Gb(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 f = qb(b, f) | 0;
 if (c[f + 8 >> 2] | 0) {
  b = f;
  return b | 0;
 }
 b = b + 6 | 0;
 a[b >> 0] = d[b >> 0] | 0 | 1 << e;
 b = 0;
 return b | 0;
}

function cg(b, e) {
 b = b | 0;
 e = e | 0;
 b = c[b + 16 >> 2] | 0;
 if (!(a[b + 18 >> 0] & 8)) {
  e = 0;
  return e | 0;
 }
 if (e | 0) c[e >> 2] = c[b + 24 >> 2];
 e = d[b + 37 >> 0] | 0;
 return e | 0;
}

function rc(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0;
 b = c[b + 12 >> 2] | 0;
 f = e + 5 | 0;
 a[f >> 0] = (d[f >> 0] | 0) & 251;
 b = b + 88 | 0;
 c[e + 24 >> 2] = c[b >> 2];
 c[b >> 2] = e;
 return;
}

function oi(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = Ph(a, 1, 9473) | 0;
 if (!(c[b + 4 >> 2] | 0)) ad(a, 9479, d) | 0;
 a = Zh(a, c[b >> 2] | 0, 2) | 0;
 i = d;
 return a | 0;
}

function Wd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = c[a >> 2] | 0;
 c[d >> 2] = c[a + 12 >> 2];
 c[d + 4 >> 2] = b;
 $b(e, 6496, d) | 0;
 wb(c[a >> 2] | 0, 3);
}

function Bi(a) {
 a = a | 0;
 var b = 0, c = 0;
 c = td(a, 1, 0, 0) | 0;
 b = la(c | 0) | 0;
 if (!c) {
  Zc(a, b);
  c = 1;
  return c | 0;
 } else {
  c = ei(a, b) | 0;
  return c | 0;
 }
 return 0;
}

function Bb(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0;
 e = (c[a + 12 >> 2] | 0) + 61 | 0;
 if (1 << (d[e >> 0] | 0) & b | 0) return;
 do Cb(a) | 0; while (!(1 << (d[e >> 0] | 0) & b | 0));
 return;
}

function xe(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = b;
 c[f + 8 >> 2] = d[b + 4 >> 0] | 0 | 64;
 b = ue(a, f, f) | 0;
 i = e;
 return b | 0;
}

function Ek(a) {
 a = a | 0;
 var b = 0;
 Ef(a, 3);
 b = Lf(a, 2) | 0;
 Mf(a, 1, 6);
 b = Rf(a, 1, b) | 0;
 if (!b) {
  a = 0;
  return a | 0;
 }
 Hf(a, b) | 0;
 Fd(a, -1);
 a = 1;
 return a | 0;
}

function li(a, b) {
 a = a | 0;
 b = b | 0;
 Eg(a, -1001e3, b);
 if (ud(a, -1) | 0) {
  b = 0;
  return b | 0;
 }
 kd(a, -2);
 Fg(a, 0, 0);
 Cf(a, -1);
 _c(a, -1001e3, b);
 b = 1;
 return b | 0;
}

function Ci(a) {
 a = a | 0;
 var b = 0;
 if ((ud(a, 1) | 0) == 1) b = (sd(a, 1) | 0) == 0 & 1; else b = Jd(a, 1, 0) | 0;
 if (sd(a, 2) | 0) Di(a);
 if (!a) return 0; else Qa(b | 0);
 return 0;
}

function oj(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 h[d >> 3] = (b | 0) > -1 ? +(b | 0) : +(b >>> 0);
 c[d + 8 >> 2] = 3;
 c[a >> 2] = d + 16;
 return;
}

function Dm(a) {
 a = a | 0;
 var b = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  b = (Fl(a) | 0) == 0;
  c[a >> 2] = c[a >> 2] & -49;
  if (!b) Rk(a);
 } else c[a >> 2] = c[a >> 2] & -49;
 return;
}

function Ki(a) {
 a = a | 0;
 Fg(a, 0, 14);
 Bg(a, 2268, 0);
 Fg(a, 0, 1);
 ed(a, 17772, 0) | 0;
 Cf(a, -2);
 pg(a, -2) | 0;
 kd(a, -2);
 Cf(a, -2);
 _c(a, -2, 10997);
 kd(a, -2);
 return 1;
}

function Ig(a) {
 a = a | 0;
 var b = 0;
 b = Jg(a, 1) | 0;
 if ((b | 0) <= 0) return 0;
 while (1) {
  pd(a, 1, b);
  kd(a, -2);
  if ((b | 0) > 1) b = b + -1 | 0; else break;
 }
 return 0;
}

function Rl(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 16 | 0;
 g = f;
 c[g >> 2] = e;
 e = ql(a, b, d, g) | 0;
 i = f;
 return e | 0;
}

function Ld(a) {
 a = a | 0;
 var b = 0;
 b = td(a, 1, 0, 0) | 0;
 kd(a, 1);
 if (!(Md(a, b, 0) | 0)) {
  yf(a, 0, -1, 0, 155);
  return (yd(a) | 0) + -1 | 0;
 } else hd(a) | 0;
 return 0;
}

function Sc(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = i;
 i = i + 16 | 0;
 e = b;
 d = c[720] | 0;
 c[e >> 2] = Tc(a, -1, 0) | 0;
 em(d, 5346, e) | 0;
 lm(d) | 0;
 i = b;
 return 0;
}

function Mm(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 c[e >> 2] = a;
 c[e + 4 >> 2] = b;
 a = Nk(Ha(38, e | 0) | 0) | 0;
 i = d;
 return a | 0;
}

function rm(a) {
 a = a | 0;
 var b = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  b = (Fl(a) | 0) == 0;
  a = (c[a >> 2] | 0) >>> 4 & 1;
 } else a = (c[a >> 2] | 0) >>> 4 & 1;
 return a | 0;
}

function xg(a, b) {
 a = a | 0;
 b = b | 0;
 if ((b + 1000999 | 0) >>> 0 > 1000999) return b | 0;
 b = ((c[a + 8 >> 2] | 0) - (c[c[a + 16 >> 2] >> 2] | 0) >> 4) + b | 0;
 return b | 0;
}

function qk(a) {
 a = a | 0;
 var b = 0;
 b = Lf(a, 2) | 0;
 Mf(a, 1, 6);
 b = rk(a, 1, b) | 0;
 if (!b) {
  a = 0;
  return a | 0;
 }
 Hf(a, b) | 0;
 Fd(a, -2);
 a = 2;
 return a | 0;
}

function on(a, b, c) {
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

function zf(a) {
 a = a | 0;
 var b = 0;
 b = Jd(a, 2, 1) | 0;
 kd(a, 1);
 if (!((b | 0) > 0 & (Af(a, 1) | 0) != 0)) hd(a) | 0;
 Bf(a, b);
 Cf(a, 1);
 gd(a, 2);
 hd(a) | 0;
 return 0;
}

function qn(a, b, c) {
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

function Qd(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 c[b + 16 >> 2] = a;
 c[b + 8 >> 2] = d;
 c[b + 12 >> 2] = e;
 c[b >> 2] = 0;
 c[b + 4 >> 2] = 0;
 return;
}

function he(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0;
 d = jc(b, c) | 0;
 if ((d | 0) != 15088) {
  b = d;
  return b | 0;
 }
 b = oc(a, b, c) | 0;
 return b | 0;
}

function hb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 if (!d) {
  Ym(b);
  a = 0;
  return a | 0;
 } else {
  a = Zm(b, d) | 0;
  return a | 0;
 }
 return 0;
}

function Ug(a) {
 a = a | 0;
 var b = 0;
 b = c[a + 12 >> 2] | 0;
 ed(b, c[a >> 2] | 0, c[a + 8 >> 2] | 0) | 0;
 if ((c[a >> 2] | 0) == (a + 16 | 0)) return;
 Ed(b, -2);
 return;
}

function Fm(a) {
 a = a | 0;
 var b = 0, d = 0;
 if ((c[a + 76 >> 2] | 0) > -1) {
  d = (Fl(a) | 0) == 0;
  b = Em(a) | 0;
  if (!d) Rk(a);
 } else b = Em(a) | 0;
 return b | 0;
}

function Gc(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0;
 if ((c[b + 16 >> 2] | 0) == 15104) f = 0; else f = 1 << (d[b + 7 >> 0] | 0);
 qc(a, b, e, f);
 return;
}

function kn() {}
function ln(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function Zc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 c[d >> 2] = (b | 0) != 0 & 1;
 c[d + 8 >> 2] = 1;
 c[a >> 2] = d + 16;
 return;
}

function wk(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 c[d >> 2] = b;
 c[d + 8 >> 2] = 2;
 c[a >> 2] = (c[a >> 2] | 0) + 16;
 return;
}

function tm(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = im(a, b, f) | 0;
 i = e;
 return d | 0;
}

function ol(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = pl(a, b, f) | 0;
 i = e;
 return d | 0;
}

function em(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = sl(a, b, f) | 0;
 i = e;
 return d | 0;
}

function $b(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 16 | 0;
 f = e;
 c[f >> 2] = d;
 d = ub(a, b, f) | 0;
 i = e;
 return d | 0;
}

function cc(a) {
 a = a | 0;
 var b = 0;
 b = mb(a, 0, 0, 40) | 0;
 a = c[a + 16 >> 2] | 0;
 c[a + 12 >> 2] = b;
 c[b + 8 >> 2] = a;
 c[b + 12 >> 2] = 0;
 return b | 0;
}

function Jh(a) {
 a = a | 0;
 var b = 0;
 Mf(a, 1, 5);
 b = Jg(a, 1) | 0;
 Wf(a, 40, 17772);
 if ((ud(a, 2) | 0) >= 1) Mf(a, 2, 6);
 kd(a, 2);
 Kh(a, 1, b);
 return 0;
}

function Be(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = c[a + 52 >> 2] | 0;
 c[d >> 2] = Ce(a, b) | 0;
 ae(a, $b(e, 7103, d) | 0);
}

function Kf(a) {
 a = a | 0;
 var b = 0;
 b = Lf(a, 2) | 0;
 Mf(a, 1, 5);
 b = b + 1 | 0;
 Kd(a, b);
 pd(a, 1, b);
 a = (ud(a, -1) | 0) == 0;
 return (a ? 1 : 2) | 0;
}

function fc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = a + 12 | 0;
 a = a + 8 | 0;
 c[a >> 2] = (c[d >> 2] | 0) - b + (c[a >> 2] | 0);
 c[d >> 2] = b;
 return;
}

function Kd(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 h[d >> 3] = +(b | 0);
 c[d + 8 >> 2] = 3;
 c[a >> 2] = d + 16;
 return;
}

function Vg(a) {
 a = a | 0;
 Mf(a, 1, 5);
 if (!(Ff(a, 1) | 0)) {
  Fg(a, 0, 1);
  Cf(a, -1);
  pg(a, 1) | 0;
 }
 pd(a, -1001e3, 2);
 _c(a, -2, 10997);
 return 0;
}

function Tj(a) {
 a = a | 0;
 var b = 0, c = 0.0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c = +Sm(+zi(a, 1), d);
 id(a, +h[d >> 3]);
 id(a, c);
 i = b;
 return 2;
}

function Mk(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = Nk(La(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function xk(a) {
 a = a | 0;
 if ((ud(a, 1) | 0) == 2) wd(a, 1, 11843) | 0;
 Mf(a, 1, 7);
 if ((ud(a, 2) | 0) >= 1) Mf(a, 2, 5);
 kd(a, 2);
 yk(a, 1);
 return 1;
}

function ni(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 if (!(c[(Ph(a, 1, 9473) | 0) + 4 >> 2] | 0)) ad(a, 9479, b) | 0;
 Xh(a, 0);
 i = b;
 return 1;
}

function Ge(a, b) {
 a = a | 0;
 b = b | 0;
 if ((c[b + 16 >> 2] | 0) == (c[b + 20 >> 2] | 0)) {
  qe(a, b);
  return;
 } else {
  pe(a, b) | 0;
  return;
 }
}

function yj(a) {
 a = a | 0;
 var b = 0, c = 0;
 b = 0 - (Lf(a, 2) | 0) | 0;
 c = nj(a, 1) | 0;
 b = b & 31;
 oj(a, c >>> (32 - b | 0) | c << b);
 return 1;
}

function mn(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function id(a, b) {
 a = a | 0;
 b = +b;
 var d = 0;
 a = a + 8 | 0;
 d = c[a >> 2] | 0;
 h[d >> 3] = b;
 c[d + 8 >> 2] = 3;
 c[a >> 2] = d + 16;
 return;
}

function Hi(a) {
 a = a | 0;
 var b = 0;
 b = td(a, 1, 0, 0) | 0;
 Hf(a, _l(c[2244 + ((Id(a, 2, 10094, 2216) | 0) << 2) >> 2] | 0, b) | 0) | 0;
 return 1;
}

function od(a) {
 a = a | 0;
 pd(a, -1001e3, 2);
 pd(a, -1001e3, 2);
 _c(a, -2, 6091);
 Bg(a, 1428, 0);
 ed(a, 8088, 7) | 0;
 _c(a, -2, 8096);
 return 1;
}

function dc(b) {
 b = b | 0;
 var d = 0;
 d = c[b + 12 >> 2] | 0;
 if (!(a[d + 63 >> 0] | 0)) {
  fc(d, -1600);
  return;
 } else {
  ec(b);
  return;
 }
}

function Dk(a) {
 a = a | 0;
 switch (ud(a, 2) | 0) {
 case 0:
 case 5:
  break;
 default:
  wd(a, 2, 11925) | 0;
 }
 kd(a, 2);
 pg(a, 1) | 0;
 return 1;
}

function bf(a, b) {
 a = a | 0;
 b = b | 0;
 if ((c[b >> 2] | 0) == 8) if ((c[b + 16 >> 2] | 0) == (c[b + 20 >> 2] | 0)) return;
 pe(a, b) | 0;
 return;
}

function Vb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0;
 e = c[b + 8 >> 2] | 0;
 Wb(a, (e | 0) == 3 | (e & 15 | 0) == 4 ? d : b, 4360);
}

function Nj(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 id(a, +El(+zi(a, 1), d));
 Kd(a, c[d >> 2] | 0);
 i = b;
 return 2;
}

function Aj(a) {
 a = a | 0;
 Fg(a, 0, 28);
 Bg(a, 2492, 0);
 id(a, 3.141592653589793);
 _c(a, -2, 11364);
 id(a, s);
 _c(a, -2, 11367);
 return 1;
}

function yc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0;
 d = i;
 i = i + 16 | 0;
 d = (zc(b, d) | 0) == 0;
 Wb(a, d ? b : c, 4853);
}

function vj(a) {
 a = a | 0;
 var b = 0, c = 0;
 b = Lf(a, 2) | 0;
 c = nj(a, 1) | 0;
 b = b & 31;
 oj(a, c >>> (32 - b | 0) | c << b);
 return 1;
}

function Vc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = (c[a + 12 >> 2] | 0) + 168 | 0;
 a = c[d >> 2] | 0;
 c[d >> 2] = b;
 return a | 0;
}

function Df(a) {
 a = a | 0;
 Ef(a, 1);
 if (!(Ff(a, 1) | 0)) {
  Ad(a);
  return 1;
 } else {
  Gf(a, 1, 7636) | 0;
  return 1;
 }
 return 0;
}

function fd(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 if ((c[(c[a + 12 >> 2] | 0) + 12 >> 2] | 0) > 0) dc(a);
 return ub(a, b, d) | 0;
}

function ej(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 tg(a, 1, d) | 0;
 Kd(a, c[d >> 2] | 0);
 i = b;
 return 1;
}

function ye(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return re(a, c << 6 | b | d << 23 | e << 14) | 0;
}

function Dn(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return Ya[a & 3](b | 0, c | 0, d | 0, e | 0) | 0;
}

function Pg(a, b) {
 a = a | 0;
 b = b | 0;
 c[b + 12 >> 2] = a;
 c[b >> 2] = b + 16;
 c[b + 8 >> 2] = 0;
 c[b + 4 >> 2] = 1024;
 return;
}

function ef(a, b) {
 a = a | 0;
 b = b | 0;
 c[(c[(c[a >> 2] | 0) + 20 >> 2] | 0) + ((c[a + 20 >> 2] | 0) + -1 << 2) >> 2] = b;
 return;
}

function pm(a) {
 a = +a;
 return +(+hn(a + -1416.0996898839683) * 2247116418577894884661631.0e283 * 2247116418577894884661631.0e283);
}

function _f(a) {
 a = a | 0;
 Mf(a, 1, 5);
 kd(a, 2);
 if (Bd(a, 1) | 0) {
  a = 2;
  return a | 0;
 }
 Ad(a);
 a = 1;
 return a | 0;
}

function kb(a) {
 a = a | 0;
 if (!a) {
  a = 1024;
  return a | 0;
 }
 a = c[(c[a + 12 >> 2] | 0) + 176 >> 2] | 0;
 return a | 0;
}

function Jk(a, b) {
 a = a | 0;
 b = b | 0;
 b = i;
 i = i + 16 | 0;
 Ak(a, 0, 0, 0) | 0;
 ad(a, 12141, b) | 0;
 i = b;
 return;
}

function Vl(a) {
 a = a | 0;
 if ((a + -48 | 0) >>> 0 < 10) a = 1; else a = ((a | 32) + -97 | 0) >>> 0 < 6;
 return a & 1 | 0;
}

function Ol(b, c) {
 b = b | 0;
 c = c | 0;
 b = Il(b, c) | 0;
 return ((a[b >> 0] | 0) == (c & 255) << 24 >> 24 ? b : 0) | 0;
}

function Ad(a) {
 a = a | 0;
 var b = 0;
 a = a + 8 | 0;
 b = c[a >> 2] | 0;
 c[b + 8 >> 2] = 0;
 c[a >> 2] = b + 16;
 return;
}

function uc(a) {
 a = a | 0;
 var b = 0;
 b = a >>> 3 & 31;
 if (!b) return a | 0;
 a = (a & 7 | 8) << b + -1;
 return a | 0;
}

function dk(a) {
 a = a | 0;
 if ((ud(a, 1) | 0) == 7) {
  ek(a, 1);
  return 1;
 } else {
  Ad(a);
  return 1;
 }
 return 0;
}

function Pf(b, c) {
 b = b | 0;
 c = c | 0;
 b = Tb(b, 38, (c << 4) + 16 | 0, 0, 0) | 0;
 a[b + 6 >> 0] = c;
 return b | 0;
}

function Gi(a) {
 a = a | 0;
 var b = 0;
 b = tg(a, 1, 0) | 0;
 return Rh(a, (Mm(b, tg(a, 2, 0) | 0) | 0) == 0 & 1, 0) | 0;
}

function xh(a) {
 a = a | 0;
 var b = 0;
 Mf(a, 1, 6);
 b = jh(a) | 0;
 Cf(a, 1);
 kh(a, b, 1);
 Of(a, 163, 1);
 return 1;
}

function wf(a) {
 a = a | 0;
 a = Tb(a, 10, 32, 0, 0) | 0;
 c[a + 8 >> 2] = a + 16;
 c[a + 24 >> 2] = 0;
 return a | 0;
}

function zn(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Ua[a & 15](b | 0, c | 0, d | 0) | 0;
}

function ig(a) {
 a = a | 0;
 if ((ud(a, 1) | 0 | 1 | 0) != 5) wd(a, 1, 7891) | 0;
 Kd(a, jg(a, 1) | 0);
 return 1;
}

function Nk(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(Ok() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function Pe(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 re(a, b << 6 | (c << 23) + 8388608 | 31) | 0;
 return;
}

function Ne(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return re(a, c << 6 | b | d << 14) | 0;
}

function aj(a) {
 a = a | 0;
 tg(a, 1, 0) | 0;
 tg(a, 2, 0) | 0;
 kd(a, 2);
 Kd(a, 0);
 Of(a, 168, 3);
 return 1;
}

function ke(b) {
 b = b | 0;
 return ((a[3999 + (b + 1) >> 0] & 2) == 0 ? (b | 32) + -87 | 0 : b + -48 | 0) | 0;
}

function Ok() {
 var a = 0;
 if (!(c[3787] | 0)) a = 15192; else a = c[(yn() | 0) + 64 >> 2] | 0;
 return a | 0;
}

function Ai(a) {
 a = a | 0;
 var b = 0;
 b = ~~+zi(a, 1);
 id(a, +ka(b | 0, ~~+qi(a, 2, 0.0) | 0));
 return 1;
}

function vi(a) {
 a = a | 0;
 c[(Ph(a, 1, 9473) | 0) + 4 >> 2] = 164;
 Ad(a);
 ed(a, 9875, 26) | 0;
 return 2;
}

function Pl(b, c) {
 b = b | 0;
 c = c | 0;
 b = b + (Hl(b, c) | 0) | 0;
 return (a[b >> 0] | 0 ? b : 0) | 0;
}

function Ef(a, b) {
 a = a | 0;
 b = b | 0;
 if ((ud(a, b) | 0) != -1) return;
 wd(a, b, 8055) | 0;
 return;
}

function ih(a) {
 a = a | 0;
 var b = 0;
 Mf(a, 1, 6);
 b = jh(a) | 0;
 Cf(a, 1);
 kh(a, b, 1);
 return 1;
}

function Fi(a) {
 a = a | 0;
 var b = 0;
 b = tg(a, 1, 0) | 0;
 return Rh(a, (Lm(b) | 0) == 0 & 1, b) | 0;
}

function yd(a) {
 a = a | 0;
 return (c[a + 8 >> 2] | 0) - ((c[c[a + 16 >> 2] >> 2] | 0) + 16) >> 4 | 0;
}

function un(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return tn(a, b, c, d, 0) | 0;
}

function Ee(a) {
 a = a | 0;
 var b = 0;
 b = ee(a, a + 40 | 0) | 0;
 c[a + 32 >> 2] = b;
 return b | 0;
}

function Vh(a) {
 a = a | 0;
 return Rh(a, (km(c[(Ph(a, 1, 9473) | 0) >> 2] | 0) | 0) == 0 & 1, 0) | 0;
}

function Sl(a) {
 a = a | 0;
 var b = 0;
 b = 15136;
 c[b >> 2] = a + -1;
 c[b + 4 >> 2] = 0;
 return;
}

function Bh(a) {
 a = a | 0;
 Fg(a, 0, 7);
 Bg(a, 1824, 0);
 Eg(a, -1, 9379);
 Gg(a, 9379);
 return 1;
}

function nf(a) {
 a = a | 0;
 var b = 0;
 b = c[a + 20 >> 2] | 0;
 c[a + 24 >> 2] = b;
 return b | 0;
}

function gb() {
 var a = 0;
 a = ib(1, 0) | 0;
 if (!a) return a | 0;
 Vc(a, 143) | 0;
 return a | 0;
}

function am(a) {
 a = a | 0;
 if (!(Ul(a) | 0)) a = 0; else a = (Zl(a) | 0) == 0;
 return a & 1 | 0;
}

function Bl(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = Cl(a, b, 0) | 0;
 return a | 0;
}

function Uj(a) {
 a = a | 0;
 var b = 0.0;
 b = +zi(a, 1);
 id(a, +G(+b, +(+zi(a, 2))));
 return 1;
}

function Oj(a) {
 a = a | 0;
 var b = 0.0;
 b = +zi(a, 1);
 id(a, +Um(b, Lf(a, 2) | 0));
 return 1;
}

function Qi(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 Dh(d, b, c);
 return 0;
}

function rb(a, b) {
 a = a | 0;
 b = b | 0;
 sb(a, (c[a + 8 >> 2] | 0) + -32 | 0, 0, 0);
 return;
}

function lg(a) {
 a = a | 0;
 Mf(a, 1, 5);
 Ef(a, 2);
 Ef(a, 3);
 kd(a, 3);
 mg(a, 1);
 return 1;
}

function eg(a, b) {
 a = a | 0;
 b = b | 0;
 sb(a, c[b >> 2] | 0, c[b + 4 >> 2] | 0, 0);
 return;
}
function _a(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Mj(a) {
 a = a | 0;
 var b = 0.0;
 b = +zi(a, 1);
 id(a, +ll(b, +zi(a, 2)));
 return 1;
}

function Ej(a) {
 a = a | 0;
 var b = 0.0;
 b = +zi(a, 1);
 id(a, +gn(b, +zi(a, 2)));
 return 1;
}

function pl(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return ql(a, 2147483647, b, c) | 0;
}

function En(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Za[a & 1](b | 0, c | 0) | 0;
}

function jm(a) {
 a = a | 0;
 if (!a) a = 1; else a = (c[a >> 2] | 0) == 0;
 return a & 1 | 0;
}

function Yk(a) {
 a = a | 0;
 var b = 0;
 b = (Zk(a) | 0) == 0;
 return (b ? a : a & 95) | 0;
}

function Wk(a) {
 a = a | 0;
 var b = 0;
 b = (Xk(a) | 0) == 0;
 return (b ? a : a | 32) | 0;
}

function Zl(a) {
 a = a | 0;
 return ((a + -48 | 0) >>> 0 < 10 | (Xl(a) | 0) != 0) & 1 | 0;
}

function Jn(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 U(4);
 return 0;
}

function Am(a, b) {
 a = a | 0;
 b = b | 0;
 return (zm(a, Jl(a) | 0, 1, b) | 0) + -1 | 0;
}

function Uh(a, b) {
 a = a | 0;
 b = b | 0;
 Eg(a, -1001e3, b);
 pg(a, -2) | 0;
 return;
}

function Ik(a) {
 a = a | 0;
 ea(a | 0, 0) | 0;
 Ak(c[3786] | 0, 9, 11, 1) | 0;
 return;
}

function zg(a) {
 a = a | 0;
 Ef(a, 1);
 Hf(a, vd(a, ud(a, 1) | 0) | 0) | 0;
 return 1;
}

function pk(a) {
 a = a | 0;
 Ef(a, 1);
 if (Ff(a, 1) | 0) return 1;
 Ad(a);
 return 1;
}

function kg(a) {
 a = a | 0;
 Mf(a, 1, 5);
 Ef(a, 2);
 kd(a, 2);
 If(a, 1);
 return 1;
}

function hg(a) {
 a = a | 0;
 Ef(a, 1);
 Ef(a, 2);
 Zc(a, Dd(a, 1, 2) | 0);
 return 1;
}

function dl(a) {
 a = a | 0;
 return ((a | 0) == 32 | (a + -9 | 0) >>> 0 < 5) & 1 | 0;
}

function Ll(a, b) {
 a = a | 0;
 b = b | 0;
 return Kl(a, b, (Jl(a) | 0) + 1 | 0) | 0;
}

function Bn(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 Wa[a & 15](b | 0, c | 0);
}

function vd(a, b) {
 a = a | 0;
 b = b | 0;
 return c[1176 + (b + 1 << 2) >> 2] | 0;
}

function um(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return vm(a, b, c) | 0;
}

function yb(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + 16 | 0;
 tb(a, 4273, b);
}

function Di(a) {
 a = a | 0;
 Qc(c[(c[a + 12 >> 2] | 0) + 172 >> 2] | 0);
 return;
}

function Vj(a) {
 a = a | 0;
 id(a, +zi(a, 1) * .017453292519943295);
 return 1;
}

function Jj(a) {
 a = a | 0;
 id(a, +zi(a, 1) / .017453292519943295);
 return 1;
}

function Yl(a) {
 a = a | 0;
 return (a >>> 0 < 32 | (a | 0) == 127) & 1 | 0;
}

function Oc(a, b) {
 a = a | 0;
 b = b | 0;
 return zb(a, b, Jl(b) | 0) | 0;
}

function Fn(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 U(0);
 return 0;
}

function Ei(a) {
 a = a | 0;
 Hf(a, Ca(tg(a, 1, 0) | 0) | 0) | 0;
 return 1;
}

function cb(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function Yf(a, b) {
 a = a | 0;
 b = b | 0;
 vb(a, c[b >> 2] | 0);
 return;
}

function We(a, b) {
 a = a | 0;
 b = b | 0;
 c[a + 16 >> 2] = 0;
 ae(a, b);
}

function Cn(a, b) {
 a = a | 0;
 b = b | 0;
 return Xa[a & 255](b | 0) | 0;
}

function ae(a, b) {
 a = a | 0;
 b = b | 0;
 be(a, b, c[a + 16 >> 2] | 0);
}

function Xl(a) {
 a = a | 0;
 return ((a | 32) + -97 | 0) >>> 0 < 26 | 0;
}

function di(a) {
 a = a | 0;
 Ph(a, 1, 9473) | 0;
 return ei(a, -1) | 0;
}

function Vk(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Rk(a);
 return;
}

function Qk(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Rk(a);
 return;
}

function wi(a) {
 a = a | 0;
 Fg(a, 0, 11);
 Bg(a, 2120, 0);
 return 1;
}

function lj(a) {
 a = a | 0;
 Fg(a, 0, 12);
 Bg(a, 2388, 0);
 return 1;
}

function bk(a) {
 a = a | 0;
 Fg(a, 0, 16);
 Bg(a, 2724, 0);
 return 1;
}

function hh(a) {
 a = a | 0;
 Fg(a, 0, 6);
 Bg(a, 1768, 0);
 return 1;
}

function Xj(a) {
 a = a | 0;
 Sl(nj(a, 1) | 0);
 Tl() | 0;
 return 0;
}

function xi(a) {
 a = a | 0;
 id(a, +(ya() | 0) / 1.0e6);
 return 1;
}

function ug(a) {
 a = a | 0;
 Ef(a, 1);
 vg(a, 1, 0) | 0;
 return 1;
}

function ml(a, b) {
 a = a | 0;
 b = b | 0;
 return +(+nl(a, b, 1));
}

function Zk(a) {
 a = a | 0;
 return (a + -97 | 0) >>> 0 < 26 | 0;
}

function Xk(a) {
 a = a | 0;
 return (a + -65 | 0) >>> 0 < 26 | 0;
}

function Ul(a) {
 a = a | 0;
 return (a + -33 | 0) >>> 0 < 94 | 0;
}

function bm(a, b) {
 a = a | 0;
 b = b | 0;
 return Ql(a, b) | 0;
}

function _j(a) {
 a = a | 0;
 id(a, +F(+(+zi(a, 1))));
 return 1;
}

function Lj(a) {
 a = a | 0;
 id(a, +D(+(+zi(a, 1))));
 return 1;
}

function Gj(a) {
 a = a | 0;
 id(a, +Q(+(+zi(a, 1))));
 return 1;
}

function Bj(a) {
 a = a | 0;
 id(a, +E(+(+zi(a, 1))));
 return 1;
}

function zh(a) {
 a = a | 0;
 return Ah(a, yd(a) | 0, 0, 0) | 0;
}

function qj(a) {
 a = a | 0;
 oj(a, ~(nj(a, 1) | 0));
 return 1;
}

function ak(a) {
 a = a | 0;
 id(a, +cn(+zi(a, 1)));
 return 1;
}

function Zj(a) {
 a = a | 0;
 id(a, +bn(+zi(a, 1)));
 return 1;
}

function Yj(a) {
 a = a | 0;
 id(a, +qm(+zi(a, 1)));
 return 1;
}

function Pj(a) {
 a = a | 0;
 id(a, +Pm(+zi(a, 1)));
 return 1;
}

function Kj(a) {
 a = a | 0;
 id(a, +hn(+zi(a, 1)));
 return 1;
}

function Ij(a) {
 a = a | 0;
 id(a, +an(+zi(a, 1)));
 return 1;
}

function Hj(a) {
 a = a | 0;
 id(a, +nm(+zi(a, 1)));
 return 1;
}

function Fj(a) {
 a = a | 0;
 id(a, +fn(+zi(a, 1)));
 return 1;
}

function Dj(a) {
 a = a | 0;
 id(a, +en(+zi(a, 1)));
 return 1;
}

function Cj(a) {
 a = a | 0;
 id(a, +dn(+zi(a, 1)));
 return 1;
}

function $j(a) {
 a = a | 0;
 id(a, +Vm(+zi(a, 1)));
 return 1;
}

function jl(a, b) {
 a = +a;
 b = b | 0;
 return +(+gl(a, b));
}

function Um(a, b) {
 a = +a;
 b = b | 0;
 return +(+gl(a, b));
}

function Dl(a, b) {
 a = +a;
 b = b | 0;
 return +(+El(a, b));
}

function An(a, b) {
 a = a | 0;
 b = b | 0;
 Va[a & 3](b | 0);
}

function Kn(a, b) {
 a = a | 0;
 b = b | 0;
 U(5);
 return 0;
}

function Jf(a) {
 a = a | 0;
 Nf(a, 7655, 1, 156);
 return 3;
}

function gk(a) {
 a = a | 0;
 return d[a + 40 >> 0] | 0 | 0;
}

function oh(a) {
 a = a | 0;
 return d[a + 6 >> 0] | 0 | 0;
}

function kl(a, b) {
 a = +a;
 b = +b;
 return +(+ll(a, b));
}

function hl(a, b) {
 a = +a;
 b = +b;
 return +(+il(a, b));
}

function bi(a) {
 a = a | 0;
 Th(a, 9462, 9705);
 return 1;
}

function bb(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function Sh(a) {
 a = a | 0;
 Th(a, 9554, 9564);
 return 1;
}

function $f(a) {
 a = a | 0;
 Nf(a, 7794, 0, 9);
 return 3;
}

function xf(a) {
 a = a | 0;
 return (yd(a) | 0) + -1 | 0;
}

function uh(a) {
 a = a | 0;
 Zc(a, vh(a) | 0);
 return 2;
}

function _l(a, b) {
 a = a | 0;
 b = b | 0;
 return 15054;
}

function ok(a) {
 a = a | 0;
 Cf(a, -1001e3);
 return 1;
}

function jk(a) {
 a = a | 0;
 return c[a + 44 >> 2] | 0;
}

function hk(a) {
 a = a | 0;
 return c[a + 52 >> 2] | 0;
}

function gj(a) {
 a = a | 0;
 return Wi(a, 0) | 0;
}

function Vi(a) {
 a = a | 0;
 return Wi(a, 1) | 0;
}

function Hn(a, b) {
 a = a | 0;
 b = b | 0;
 U(2);
}

function hd(a) {
 a = a | 0;
 ac(a);
 return 0;
}

function Gm(a) {
 a = a | 0;
 return Fm(a) | 0;
}

function In(a) {
 a = a | 0;
 U(3);
 return 0;
}

function Fl(a) {
 a = a | 0;
 return 0;
}

function Rk(a) {
 a = a | 0;
 return;
}

function db(a) {
 a = a | 0;
 C = a;
}

function ab(a) {
 a = a | 0;
 i = a;
}

function Gn(a) {
 a = a | 0;
 U(1);
}

function eb() {
 return C | 0;
}

function $a() {
 return i | 0;
}

function $l() {
 return 3580;
}

function yn() {
 return 0;
}

// EMSCRIPTEN_END_FUNCS

 var Ua = [ Fn, Pk, Sk, Tk, Uk, rl, Od, Vf, Uf, Fn, Fn, Fn, Fn, Fn, Fn, Fn ];
 var Va = [ Gn, Ik, Qk, Vk ];
 var Wa = [ Hn, lb, rb, Sd, Yf, eg, qh, sh, ik, Jk, Hn, Hn, Hn, Hn, Hn, Hn ];
 var Xa = [ In, rd, Hd, Ld, zf, Df, Jf, Qf, Sf, _f, $f, ag, fg, hg, ig, kg, lg, ng, og, rg, ug, zg, Ag, Lg, Ng, Vg, bh, gh, ih, lh, uh, wh, xh, zh, Ch, Eh, Fh, Gh, Hh, Ih, Jh, Oh, Qh, Sh, Wh, ai, bi, ci, fi, gi, hi, ji, mi, ni, oi, pi, ri, si, ti, ui, xi, yi, Ai, Bi, Ci, Ei, Fi, Gi, Hi, Ii, Ji, Li, Mi, Pi, Vi, _i, aj, cj, ej, fj, gj, hj, ij, jj, kj, mj, pj, qj, rj, sj, tj, uj, vj, wj, xj, yj, zj, Bj, Cj, Dj, Ej, Fj, Gj, Hj, Ij, Jj, Kj, Lj, Mj, Nj, Oj, Pj, Qj, Rj, Sj, Tj, Uj, Vj, Wj, Xj, Yj, Zj, _j, $j, ak, ck, dk, fk, kk, mk, ok, pk, qk, sk, uk, xk, zk, Bk, Dk, Ek, Fk, Mk, Wc, Sc, Hk, od, Hg, hh, Bh, Nh, wi, Ki, lj, Aj, bk, xf, Kf, bg, Ig, Wg, Yg, Zg, $g, yh, vi, Vh, Yh, di, bj, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In, In ];
 var Ya = [ Jn, hb, Qi, Jn ];
 var Za = [ Kn, ib ];
 return {
  ___muldsi3: vn,
  _testSetjmp: rn,
  _saveSetjmp: pn,
  _free: Ym,
  _main: fb,
  _realloc: Zm,
  _i64Add: mn,
  _pthread_self: yn,
  _i64Subtract: ln,
  _memset: nn,
  _malloc: Xm,
  _memcpy: sn,
  ___muldi3: wn,
  _bitshift64Shl: on,
  _bitshift64Lshr: qn,
  ___udivdi3: un,
  ___uremdi3: xn,
  ___errno_location: Ok,
  ___udivmoddi4: tn,
  runPostSets: kn,
  stackAlloc: _a,
  stackSave: $a,
  stackRestore: ab,
  establishStackSpace: bb,
  setThrew: cb,
  setTempRet0: db,
  getTempRet0: eb,
  dynCall_iiii: zn,
  dynCall_vi: An,
  dynCall_vii: Bn,
  dynCall_ii: Cn,
  dynCall_iiiii: Dn,
  dynCall_iii: En
 };
})


;