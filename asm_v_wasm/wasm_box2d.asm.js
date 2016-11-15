Module["asm"] =  (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var Math_fround=global.Math.fround;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viif=env.invoke_viif;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var _emscripten_run_script=env._emscripten_run_script;
  var _pthread_key_create=env._pthread_key_create;
  var ___syscall6=env.___syscall6;
  var ___setErrNo=env.___setErrNo;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var ___assert_fail=env.___assert_fail;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var _emscripten_set_main_loop_timing=env._emscripten_set_main_loop_timing;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___resumeException=env.___resumeException;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var _pthread_getspecific=env._pthread_getspecific;
  var _clock=env._clock;
  var _pthread_once=env._pthread_once;
  var ___syscall54=env.___syscall54;
  var _emscripten_set_main_loop=env._emscripten_set_main_loop;
  var _emscripten_get_now=env._emscripten_get_now;
  var _pthread_setspecific=env._pthread_setspecific;
  var _abort=env._abort;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var _emscripten_cancel_main_loop=env._emscripten_cancel_main_loop;
  var ___syscall140=env.___syscall140;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___syscall146=env.___syscall146;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function __Z7measurePl($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$02429 = 0, $$025$lcssa = Math_fround(0), $$02528 = Math_fround(0), $$02631 = 0, $$032 = Math_fround(0), $$alloca_mul = 0, $10 = 0, $11 = 0, $12 = Math_fround(0), $13 = Math_fround(0), $14 = Math_fround(0), $15 = 0, $16 = 0, $17 = 0, $18 = Math_fround(0), $19 = Math_fround(0), $2 = 0, $20 = Math_fround(0), $21 = 0, $22 = 0;
 var $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0), $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = Math_fround(0), $6 = Math_fround(0), $7 = Math_fround(0), $8 = Math_fround(0), $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4(9408);
 $$alloca_mul = $2<<2;
 $3 = STACKTOP; STACKTOP = STACKTOP + ((((1*$$alloca_mul)|0)+15)&-16)|0;;
 $4 = ($2|0)>(0);
 if ($4) {
  $$02631 = 0;$$032 = Math_fround(0.0);
  while(1) {
   $10 = (($1) + ($$02631<<2)|0);
   $11 = load4($10);
   $12 = (Math_fround(($11|0)));
   $13 = Math_fround($12 / Math_fround(1.0E+6));
   $14 = Math_fround($13 * Math_fround(1000.0));
   $15 = (($3) + ($$02631<<2)|0);
   storef($15,$14);
   $9 = Math_fround($$032 + $14);
   $16 = (($$02631) + 1)|0;
   $17 = ($16|0)<($2|0);
   if ($17) {
    $$02631 = $16;$$032 = $9;
   } else {
    break;
   }
  }
  $7 = (Math_fround(($2|0)));
  $8 = Math_fround($9 / $7);
  storef($0,$8);
  if ($4) {
   $$02429 = 0;$$02528 = Math_fround(0.0);
   while(1) {
    $22 = (($3) + ($$02429<<2)|0);
    $23 = loadf($22);
    $24 = Math_fround($23 - $8);
    $25 = Math_fround($24 * $24);
    $26 = Math_fround($$02528 + $25);
    $27 = (($$02429) + 1)|0;
    $28 = ($27|0)<($2|0);
    if ($28) {
     $$02429 = $27;$$02528 = $26;
    } else {
     $$025$lcssa = $26;$19 = $7;
     break;
    }
   }
  } else {
   $$025$lcssa = Math_fround(0.0);$19 = $7;
  }
 } else {
  $5 = (Math_fround(($2|0)));
  $6 = Math_fround(Math_fround(0.0) / $5);
  storef($0,$6);
  $$025$lcssa = Math_fround(0.0);$19 = $5;
 }
 $18 = Math_fround($$025$lcssa / $19);
 $20 = (Math_fround(Math_sqrt((Math_fround($18)))));
 $21 = ((($0)) + 4|0);
 storef($21,$20);
 STACKTOP = sp;return;
}
function _main($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$039 = 0, $$04091 = 0, $$04196 = 0, $$088 = 0, $$sroa$071$089 = 0, $$sroa$077$094 = 0, $$sroa$7$090 = 0, $$sroa$781$095 = 0, $$sroa_idx = 0, $$sroa_idx61 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = Math_fround(0), $52 = Math_fround(0), $53 = 0, $54 = Math_fround(0), $55 = Math_fround(0);
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = Math_fround(0), $62 = Math_fround(0), $63 = 0, $64 = Math_fround(0), $65 = Math_fround(0), $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0;
 var $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $9 = 0, $WARMUP = 0, $topBody = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
 $vararg_buffer = sp;
 $topBody = sp + 232|0;
 store4($topBody,0);
 $WARMUP = sp + 76|0;
 store4($WARMUP,0);
 $2 = sp + 240|0;
 $3 = sp + 80|0;
 $4 = sp + 24|0;
 $5 = sp + 16|0;
 $6 = sp + 8|0;
 $7 = ($0|0)>(1);
 L1: do {
  if ($7) {
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = load1($9);
   $11 = $10 << 24 >> 24;
   switch ($11|0) {
   case 51:  {
    label = 5;
    break L1;
    break;
   }
   case 49:  {
    store4($WARMUP,5);
    store4(9408,35);
    $14 = 5;$15 = 35;
    break L1;
    break;
   }
   case 50:  {
    store4($WARMUP,32);
    store4(9408,161);
    $14 = 32;$15 = 161;
    break L1;
    break;
   }
   case 52:  {
    store4($WARMUP,320);
    store4(9408,2331);
    $14 = 320;$15 = 2331;
    break L1;
    break;
   }
   case 53:  {
    store4($WARMUP,640);
    store4(9408,5661);
    $14 = 640;$15 = 5661;
    break L1;
    break;
   }
   case 48:  {
    $$039 = 0;
    STACKTOP = sp;return ($$039|0);
    break;
   }
   default: {
    $12 = (($11) + -48)|0;
    store4($vararg_buffer,$12);
    (_printf(2320,$vararg_buffer)|0);
    $$039 = -1;
    STACKTOP = sp;return ($$039|0);
   }
   }
  } else {
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  store4($WARMUP,64);
  store4(9408,333);
  $14 = 64;$15 = 333;
 }
 $13 = (($15) + ($14))|0;
 store4(9408,$13);
 store4($WARMUP,0);
 $16 = $13 << 2;
 $17 = (__Znaj($16)|0);
 store4(9416,$17);
 storef($2,Math_fround(0.0));
 $18 = ((($2)) + 4|0);
 storef($18,Math_fround(-10.0));
 $19 = (__Znwj(103028)|0);
 __ZN7b2WorldC2ERK6b2Vec2($19,$2);
 store4(9412,$19);
 __ZN7b2World16SetAllowSleepingEb($19,0);
 $20 = ((($3)) + 44|0);
 store4($20,0);
 $21 = ((($3)) + 4|0);
 $22 = ((($3)) + 36|0);
 ; store8($21,i64_const(0,0),4); store8($21+8|0,i64_const(0,0),4); store8($21+16|0,i64_const(0,0),4); store8($21+24|0,i64_const(0,0),4);
 store1($22,1);
 $23 = ((($3)) + 37|0);
 store1($23,1);
 $24 = ((($3)) + 38|0);
 store1($24,0);
 $25 = ((($3)) + 39|0);
 store1($25,0);
 store4($3,0);
 $26 = ((($3)) + 40|0);
 store1($26,1);
 $27 = ((($3)) + 48|0);
 storef($27,Math_fround(1.0));
 $28 = load4(9412);
 $29 = (__ZN7b2World10CreateBodyEPK9b2BodyDef($28,$3)|0);
 store4($4,(1376));
 $30 = ((($4)) + 4|0);
 store4($30,1);
 $31 = ((($4)) + 8|0);
 storef($31,Math_fround(0.00999999977));
 $32 = ((($4)) + 28|0);
 ; store8($32,i64_const(0,0),4); store8($32+8|0,i64_const(0,0),4); store2($32+16|0,0,2);
 storef($5,Math_fround(-40.0));
 $33 = ((($5)) + 4|0);
 storef($33,Math_fround(0.0));
 storef($6,Math_fround(40.0));
 $34 = ((($6)) + 4|0);
 storef($34,Math_fround(0.0));
 __ZN11b2EdgeShape3SetERK6b2Vec2S2_($4,$5,$6);
 (__ZN6b2Body13CreateFixtureEPK7b2Shapef($29,$4,Math_fround(0.0))|0);
 store4($3,(1416));
 $35 = ((($3)) + 4|0);
 store4($35,2);
 $36 = ((($3)) + 8|0);
 storef($36,Math_fround(0.00999999977));
 $37 = ((($3)) + 148|0);
 store4($37,0);
 $38 = ((($3)) + 12|0);
 storef($38,Math_fround(0.0));
 $39 = ((($3)) + 16|0);
 storef($39,Math_fround(0.0));
 __ZN14b2PolygonShape8SetAsBoxEff($3,Math_fround(0.5),Math_fround(0.5));
 $40 = ((($4)) + 44|0);
 $41 = ((($4)) + 4|0);
 $42 = ((($4)) + 36|0);
 $43 = ((($4)) + 37|0);
 $44 = ((($4)) + 38|0);
 $45 = ((($4)) + 39|0);
 $46 = ((($4)) + 40|0);
 $47 = ((($4)) + 48|0);
 $$sroa_idx = ((($4)) + 4|0);
 $$sroa_idx61 = ((($4)) + 8|0);
 $48 = ((($41)) + 8|0);
 $$04196 = 0;$$sroa$077$094 = -1059061760;$$sroa$781$095 = 1061158912;
 while(1) {
  $$04091 = $$04196;$$sroa$071$089 = $$sroa$077$094;$$sroa$7$090 = $$sroa$781$095;
  while(1) {
   store4($40,0);
   ; store8($48,i64_const(0,0),4); store8($48+8|0,i64_const(0,0),4); store8($48+16|0,i64_const(0,0),4);
   store1($42,1);
   store1($43,1);
   store1($44,0);
   store1($45,0);
   store1($46,1);
   storef($47,Math_fround(1.0));
   store4($4,2);
   store4($$sroa_idx,$$sroa$071$089);
   store4($$sroa_idx61,$$sroa$7$090);
   $59 = load4(9412);
   $60 = (__ZN7b2World10CreateBodyEPK9b2BodyDef($59,$4)|0);
   (__ZN6b2Body13CreateFixtureEPK7b2Shapef($60,$3,Math_fround(5.0))|0);
   store4($topBody,$60);
   $61 = i32_bc2f($$sroa$071$089);
   $62 = Math_fround($61 + Math_fround(1.125));
   $63 = i32_bc2i($62);
   $64 = i32_bc2f($$sroa$7$090);
   $65 = Math_fround($64 + Math_fround(0.0));
   $66 = i32_bc2i($65);
   $67 = (($$04091) + 1)|0;
   $68 = ($67|0)<(40);
   if ($68) {
    $$04091 = $67;$$sroa$071$089 = $63;$$sroa$7$090 = $66;
   } else {
    break;
   }
  }
  $51 = i32_bc2f($$sroa$077$094);
  $52 = Math_fround($51 + Math_fround(0.5625));
  $53 = i32_bc2i($52);
  $54 = i32_bc2f($$sroa$781$095);
  $55 = Math_fround($54 + Math_fround(1.0));
  $56 = i32_bc2i($55);
  $57 = (($$04196) + 1)|0;
  $58 = ($57|0)<(40);
  if ($58) {
   $$04196 = $57;$$sroa$077$094 = $53;$$sroa$781$095 = $56;
  } else {
   break;
  }
 }
 $49 = load4($WARMUP);
 $50 = ($49|0)>(0);
 if ($50) {
  $$088 = 0;
  while(1) {
   $70 = load4(9412);
   __ZN7b2World4StepEfii($70,Math_fround(0.0166666675),3,3);
   $71 = (($$088) + 1)|0;
   $72 = load4($WARMUP);
   $73 = ($71|0)<($72|0);
   if ($73) {
    $$088 = $71;
   } else {
    break;
   }
  }
 }
 $69 = ($0|0)>(2);
 if ($69) {
  $74 = ((($1)) + 8|0);
  $75 = load4($74);
  $76 = load1($75);
  $77 = $76 << 24 >> 24;
  $78 = (($77) + -48)|0;
  store4(9424,$78);
  $79 = ($78|0)==(0);
  if ($79) {
   label = 19;
  } else {
   (_puts(2439)|0);
   _emscripten_set_main_loop((3|0),60,1);
  }
 } else {
  store4(9424,0);
  label = 19;
 }
 if ((label|0) == 19) {
  while(1) {
   label = 0;
   __Z4iterv();
   $80 = load4(9420);
   $81 = load4(9408);
   $82 = ($80|0)>($81|0);
   if ($82) {
    break;
   } else {
    label = 19;
   }
  }
 }
 $$039 = 0;
 STACKTOP = sp;return ($$039|0);
}
function __Z4iterv() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = Math_fround(0), $19 = 0.0, $2 = 0, $20 = 0, $21 = Math_fround(0), $22 = 0.0, $23 = 0, $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0);
 var $27 = 0.0, $28 = 0, $29 = Math_fround(0), $3 = 0, $30 = Math_fround(0), $31 = Math_fround(0), $32 = 0.0, $33 = 0, $34 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer = sp;
 $0 = sp + 32|0;
 $1 = load4(9420);
 $2 = load4(9408);
 $3 = ($1|0)<($2|0);
 if (!($3)) {
  $16 = (($1) + 1)|0;
  store4(9420,$16);
  $17 = load4(9416);
  __Z7measurePl($0,$17);
  $18 = loadf($0);
  $19 = +$18;
  $20 = ((($0)) + 4|0);
  $21 = loadf($20);
  $22 = +$21;
  $23 = load4(1360);
  $24 = (Math_fround(($23|0)));
  $25 = Math_fround($24 / Math_fround(1.0E+6));
  $26 = Math_fround($25 * Math_fround(1000.0));
  $27 = +$26;
  $28 = load4(1364);
  $29 = (Math_fround(($28|0)));
  $30 = Math_fround($29 / Math_fround(1.0E+6));
  $31 = Math_fround($30 * Math_fround(1000.0));
  $32 = +$31;
  stored($vararg_buffer,$19);
  $vararg_ptr1 = ((($vararg_buffer)) + 8|0);
  stored($vararg_ptr1,$22);
  $vararg_ptr2 = ((($vararg_buffer)) + 16|0);
  stored($vararg_ptr2,$27);
  $vararg_ptr3 = ((($vararg_buffer)) + 24|0);
  stored($vararg_ptr3,$32);
  (_printf(2332,$vararg_buffer)|0);
  _emscripten_run_script((2384|0));
  $33 = load4(9424);
  $34 = ($33|0)==(0);
  if (!($34)) {
   _emscripten_cancel_main_loop();
  }
  STACKTOP = sp;return;
 }
 $4 = (_clock()|0);
 $5 = load4(9412);
 __ZN7b2World4StepEfii($5,Math_fround(0.0166666675),3,3);
 $6 = (_clock()|0);
 $7 = (($6) - ($4))|0;
 $8 = load4(9420);
 $9 = load4(9416);
 $10 = (($9) + ($8<<2)|0);
 store4($10,$7);
 $11 = load4(1360);
 $12 = ($7|0)<($11|0);
 if ($12) {
  store4(1360,$7);
 }
 $13 = load4(1364);
 $14 = ($7|0)>($13|0);
 if ($14) {
  store4(1364,$7);
 }
 $15 = (($8) + 1)|0;
 store4(9420,$15);
 STACKTOP = sp;return;
}
function __ZN7b2ShapeD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN11b2EdgeShapeD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNK11b2EdgeShape5CloneEP16b2BlockAllocator($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = i64(), $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (__ZN16b2BlockAllocator8AllocateEi($1,48)|0);
 store4($2,(1376));
 $3 = ((($2)) + 4|0);
 store4($3,1);
 $4 = ((($2)) + 8|0);
 storef($4,Math_fround(0.00999999977));
 $5 = ((($2)) + 28|0);
 ; store8($5,i64_const(0,0),4); store8($5+8|0,i64_const(0,0),4); store2($5+16|0,0,2);
 $6 = ((($0)) + 4|0);
 $7 = load8($6,4);
 store8($3,$7,4);
 $8 = ((($2)) + 12|0);
 $9 = ((($0)) + 12|0);
 ; store8($8,load8($9,4),4); store8($8+8 | 0,load8($9+8 | 0,4),4); store8($8+16 | 0,load8($9+16 | 0,4),4); store8($8+24 | 0,load8($9+24 | 0,4),4); store2($8+32 | 0,load2($9+32 | 0,2),2);
 return ($2|0);
}
function __ZNK11b2EdgeShape13GetChildCountEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 1;
}
function __ZNK11b2EdgeShape9TestPointERK11b2TransformRK6b2Vec2($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function __ZNK11b2EdgeShape7RayCastEP15b2RayCastOutputRK14b2RayCastInputRK11b2Transformi($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$3 = 0, $$sroa$068$0$in = Math_fround(0), $$sroa$9$0$in = Math_fround(0), $$sroa_idx = 0, $$sroa_idx66 = 0, $$sroa_idx84 = 0, $$sroa_idx95 = 0, $10 = 0, $11 = Math_fround(0), $12 = Math_fround(0), $13 = 0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = 0, $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0);
 var $23 = 0, $24 = Math_fround(0), $25 = Math_fround(0), $26 = 0, $27 = Math_fround(0), $28 = Math_fround(0), $29 = Math_fround(0), $30 = Math_fround(0), $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = Math_fround(0), $40 = 0, $41 = Math_fround(0), $42 = Math_fround(0);
 var $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = Math_fround(0), $50 = 0, $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = Math_fround(0), $55 = Math_fround(0), $56 = Math_fround(0), $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0), $6 = Math_fround(0), $60 = Math_fround(0);
 var $61 = Math_fround(0), $62 = 0, $63 = Math_fround(0), $64 = 0, $65 = 0, $66 = Math_fround(0), $67 = 0, $68 = 0, $69 = Math_fround(0), $7 = Math_fround(0), $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = Math_fround(0), $76 = Math_fround(0), $77 = Math_fround(0), $78 = Math_fround(0), $79 = 0;
 var $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = Math_fround(0), $84 = Math_fround(0), $9 = Math_fround(0), $or$cond = 0, $or$cond133 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = loadf($2);
 $6 = loadf($3);
 $7 = Math_fround($5 - $6);
 $8 = ((($2)) + 4|0);
 $9 = loadf($8);
 $10 = ((($3)) + 4|0);
 $11 = loadf($10);
 $12 = Math_fround($9 - $11);
 $13 = ((($3)) + 12|0);
 $14 = loadf($13);
 $15 = Math_fround($7 * $14);
 $16 = ((($3)) + 8|0);
 $17 = loadf($16);
 $18 = Math_fround($12 * $17);
 $19 = Math_fround($15 + $18);
 $20 = Math_fround($7 * $17);
 $21 = Math_fround($14 * $12);
 $22 = Math_fround($21 - $20);
 $23 = ((($2)) + 8|0);
 $24 = loadf($23);
 $25 = Math_fround($24 - $6);
 $26 = ((($2)) + 12|0);
 $27 = loadf($26);
 $28 = Math_fround($27 - $11);
 $29 = Math_fround($14 * $25);
 $30 = Math_fround($17 * $28);
 $31 = Math_fround($29 + $30);
 $32 = Math_fround($17 * $25);
 $33 = Math_fround($14 * $28);
 $34 = Math_fround($33 - $32);
 $35 = Math_fround($31 - $19);
 $36 = Math_fround($34 - $22);
 $37 = ((($0)) + 12|0);
 $38 = loadf($37);
 $$sroa_idx95 = ((($0)) + 16|0);
 $39 = loadf($$sroa_idx95);
 $40 = ((($0)) + 20|0);
 $41 = loadf($40);
 $$sroa_idx84 = ((($0)) + 24|0);
 $42 = loadf($$sroa_idx84);
 $43 = Math_fround($41 - $38);
 $44 = Math_fround($42 - $39);
 $45 = Math_fround(-$43);
 $46 = Math_fround($44 * $44);
 $47 = Math_fround($43 * $43);
 $48 = Math_fround($47 + $46);
 $49 = (Math_fround(Math_sqrt((Math_fround($48)))));
 $50 = $49 < Math_fround(1.1920929E-7);
 if ($50) {
  $$sroa$068$0$in = $44;$$sroa$9$0$in = $45;
 } else {
  $51 = Math_fround(Math_fround(1.0) / $49);
  $52 = Math_fround($44 * $51);
  $53 = Math_fround($51 * $45);
  $$sroa$068$0$in = $52;$$sroa$9$0$in = $53;
 }
 $54 = Math_fround($38 - $19);
 $55 = Math_fround($39 - $22);
 $56 = Math_fround($54 * $$sroa$068$0$in);
 $57 = Math_fround($55 * $$sroa$9$0$in);
 $58 = Math_fround($56 + $57);
 $59 = Math_fround($35 * $$sroa$068$0$in);
 $60 = Math_fround($36 * $$sroa$9$0$in);
 $61 = Math_fround($59 + $60);
 $62 = $61 == Math_fround(0.0);
 if ($62) {
  $$3 = 0;
  return ($$3|0);
 }
 $63 = Math_fround($58 / $61);
 $64 = $63 < Math_fround(0.0);
 if ($64) {
  $$3 = 0;
  return ($$3|0);
 }
 $65 = ((($2)) + 16|0);
 $66 = loadf($65);
 $67 = $66 < $63;
 $68 = $48 == Math_fround(0.0);
 $or$cond133 = $67 | $68;
 if ($or$cond133) {
  $$3 = 0;
  return ($$3|0);
 }
 $69 = Math_fround($36 * $63);
 $70 = Math_fround($22 + $69);
 $71 = Math_fround($35 * $63);
 $72 = Math_fround($19 + $71);
 $73 = Math_fround($72 - $38);
 $74 = Math_fround($70 - $39);
 $75 = Math_fround($43 * $73);
 $76 = Math_fround($44 * $74);
 $77 = Math_fround($75 + $76);
 $78 = Math_fround($77 / $48);
 $79 = $78 < Math_fround(0.0);
 $80 = $78 > Math_fround(1.0);
 $or$cond = $79 | $80;
 if ($or$cond) {
  $$3 = 0;
  return ($$3|0);
 }
 $81 = ((($1)) + 8|0);
 storef($81,$63);
 $82 = $58 > Math_fround(0.0);
 if ($82) {
  $83 = Math_fround(-$$sroa$068$0$in);
  $84 = Math_fround(-$$sroa$9$0$in);
  storef($1,$83);
  $$sroa_idx = ((($1)) + 4|0);
  storef($$sroa_idx,$84);
  $$3 = 1;
  return ($$3|0);
 } else {
  storef($1,$$sroa$068$0$in);
  $$sroa_idx66 = ((($1)) + 4|0);
  storef($$sroa_idx66,$$sroa$9$0$in);
  $$3 = 1;
  return ($$3|0);
 }
 return (0)|0;
}
function __ZNK11b2EdgeShape11ComputeAABBEP6b2AABBRK11b2Transformi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$sroa_idx14 = 0, $$sroa_idx8 = 0, $10 = Math_fround(0), $11 = 0, $12 = Math_fround(0), $13 = Math_fround(0), $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = 0, $21 = Math_fround(0), $22 = Math_fround(0), $23 = 0, $24 = Math_fround(0), $25 = Math_fround(0), $26 = 0, $27 = Math_fround(0);
 var $28 = Math_fround(0), $29 = Math_fround(0), $30 = Math_fround(0), $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = 0, $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = 0, $4 = 0, $40 = Math_fround(0), $41 = 0, $42 = Math_fround(0), $43 = 0, $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0);
 var $47 = Math_fround(0), $48 = Math_fround(0), $49 = 0, $5 = Math_fround(0), $6 = 0, $7 = Math_fround(0), $8 = Math_fround(0), $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($2)) + 12|0);
 $5 = loadf($4);
 $6 = ((($0)) + 12|0);
 $7 = loadf($6);
 $8 = Math_fround($5 * $7);
 $9 = ((($2)) + 8|0);
 $10 = loadf($9);
 $11 = ((($0)) + 16|0);
 $12 = loadf($11);
 $13 = Math_fround($10 * $12);
 $14 = Math_fround($8 - $13);
 $15 = loadf($2);
 $16 = Math_fround($15 + $14);
 $17 = Math_fround($7 * $10);
 $18 = Math_fround($5 * $12);
 $19 = Math_fround($17 + $18);
 $20 = ((($2)) + 4|0);
 $21 = loadf($20);
 $22 = Math_fround($19 + $21);
 $23 = ((($0)) + 20|0);
 $24 = loadf($23);
 $25 = Math_fround($5 * $24);
 $26 = ((($0)) + 24|0);
 $27 = loadf($26);
 $28 = Math_fround($10 * $27);
 $29 = Math_fround($25 - $28);
 $30 = Math_fround($15 + $29);
 $31 = Math_fround($10 * $24);
 $32 = Math_fround($5 * $27);
 $33 = Math_fround($31 + $32);
 $34 = Math_fround($21 + $33);
 $35 = $16 < $30;
 $36 = $35 ? $16 : $30;
 $37 = $22 < $34;
 $38 = $37 ? $22 : $34;
 $39 = $16 > $30;
 $40 = $39 ? $16 : $30;
 $41 = $22 > $34;
 $42 = $41 ? $22 : $34;
 $43 = ((($0)) + 8|0);
 $44 = loadf($43);
 $45 = Math_fround($36 - $44);
 $46 = Math_fround($38 - $44);
 storef($1,$45);
 $$sroa_idx14 = ((($1)) + 4|0);
 storef($$sroa_idx14,$46);
 $47 = Math_fround($44 + $40);
 $48 = Math_fround($44 + $42);
 $49 = ((($1)) + 8|0);
 storef($49,$47);
 $$sroa_idx8 = ((($1)) + 12|0);
 storef($$sroa_idx8,$48);
 return;
}
function __ZNK11b2EdgeShape11ComputeMassEP10b2MassDataf($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = Math_fround($2);
 var $$sroa_idx8 = 0, $10 = 0, $11 = Math_fround(0), $12 = Math_fround(0), $13 = Math_fround(0), $14 = Math_fround(0), $15 = 0, $16 = 0, $3 = 0, $4 = Math_fround(0), $5 = 0, $6 = Math_fround(0), $7 = Math_fround(0), $8 = 0, $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 storef($1,Math_fround(0.0));
 $3 = ((($0)) + 12|0);
 $4 = loadf($3);
 $5 = ((($0)) + 20|0);
 $6 = loadf($5);
 $7 = Math_fround($4 + $6);
 $8 = ((($0)) + 16|0);
 $9 = loadf($8);
 $10 = ((($0)) + 24|0);
 $11 = loadf($10);
 $12 = Math_fround($9 + $11);
 $13 = Math_fround($7 * Math_fround(0.5));
 $14 = Math_fround($12 * Math_fround(0.5));
 $15 = ((($1)) + 4|0);
 storef($15,$13);
 $$sroa_idx8 = ((($1)) + 8|0);
 storef($$sroa_idx8,$14);
 $16 = ((($1)) + 12|0);
 storef($16,Math_fround(0.0));
 return;
}
function __ZN11b2EdgeShape3SetERK6b2Vec2S2_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = i64(), $5 = 0, $6 = i64(), $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 12|0);
 $4 = load8($1,4);
 store8($3,$4,4);
 $5 = ((($0)) + 20|0);
 $6 = load8($2,4);
 store8($5,$6,4);
 $7 = ((($0)) + 44|0);
 store1($7,0);
 $8 = ((($0)) + 45|0);
 store1($8,0);
 return;
}
function __ZN14b2PolygonShapeD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNK14b2PolygonShape5CloneEP16b2BlockAllocator($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (__ZN16b2BlockAllocator8AllocateEi($1,152)|0);
 store4($2,(1416));
 $3 = ((($2)) + 4|0);
 store4($3,2);
 $4 = ((($2)) + 8|0);
 storef($4,Math_fround(0.00999999977));
 $5 = ((($2)) + 148|0);
 store4($5,0);
 $6 = ((($2)) + 12|0);
 storef($6,Math_fround(0.0));
 $7 = ((($2)) + 16|0);
 storef($7,Math_fround(0.0));
 $8 = ((($0)) + 4|0);
 $9 = load8($8,4);
 store8($3,$9,4);
 $10 = ((($0)) + 12|0);
 _memcpy(($6|0),($10|0),140)|0;
 return ($2|0);
}
function __ZNK14b2PolygonShape13GetChildCountEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 1;
}
function __ZNK14b2PolygonShape9TestPointERK11b2TransformRK6b2Vec2($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$01729 = 0, $$116 = 0, $10 = Math_fround(0), $11 = 0, $12 = Math_fround(0), $13 = Math_fround(0), $14 = 0, $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = Math_fround(0), $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = Math_fround(0);
 var $28 = Math_fround(0), $29 = 0, $3 = Math_fround(0), $30 = Math_fround(0), $31 = Math_fround(0), $32 = 0, $33 = Math_fround(0), $34 = Math_fround(0), $35 = 0, $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = 0, $4 = Math_fround(0), $5 = Math_fround(0), $6 = 0, $7 = Math_fround(0), $8 = 0, $9 = Math_fround(0), label = 0;
 var sp = 0;
 sp = STACKTOP;
 $3 = loadf($2);
 $4 = loadf($1);
 $5 = Math_fround($3 - $4);
 $6 = ((($2)) + 4|0);
 $7 = loadf($6);
 $8 = ((($1)) + 4|0);
 $9 = loadf($8);
 $10 = Math_fround($7 - $9);
 $11 = ((($1)) + 12|0);
 $12 = loadf($11);
 $13 = Math_fround($5 * $12);
 $14 = ((($1)) + 8|0);
 $15 = loadf($14);
 $16 = Math_fround($10 * $15);
 $17 = Math_fround($13 + $16);
 $18 = Math_fround($5 * $15);
 $19 = Math_fround($12 * $10);
 $20 = Math_fround($19 - $18);
 $21 = ((($0)) + 148|0);
 $22 = load4($21);
 $23 = ($22|0)>(0);
 if ($23) {
  $$01729 = 0;
 } else {
  $$116 = 1;
  return ($$116|0);
 }
 while(1) {
  $26 = (((($0)) + 20|0) + ($$01729<<3)|0);
  $27 = loadf($26);
  $28 = Math_fround($17 - $27);
  $29 = (((((($0)) + 20|0) + ($$01729<<3)|0)) + 4|0);
  $30 = loadf($29);
  $31 = Math_fround($20 - $30);
  $32 = (((($0)) + 84|0) + ($$01729<<3)|0);
  $33 = loadf($32);
  $34 = Math_fround($28 * $33);
  $35 = (((((($0)) + 84|0) + ($$01729<<3)|0)) + 4|0);
  $36 = loadf($35);
  $37 = Math_fround($31 * $36);
  $38 = Math_fround($34 + $37);
  $39 = $38 > Math_fround(0.0);
  $24 = (($$01729) + 1)|0;
  if ($39) {
   $$116 = 0;
   label = 4;
   break;
  }
  $25 = ($24|0)<($22|0);
  if ($25) {
   $$01729 = $24;
  } else {
   $$116 = 1;
   label = 4;
   break;
  }
 }
 if ((label|0) == 4) {
  return ($$116|0);
 }
 return (0)|0;
}
function __ZNK14b2PolygonShape7RayCastEP15b2RayCastOutputRK14b2RayCastInputRK11b2Transformi($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$053$lcssa = Math_fround(0), $$053112 = Math_fround(0), $$059111 = 0, $$060$lcssa = 0, $$060110 = 0, $$064109 = Math_fround(0), $$154 = Math_fround(0), $$161 = 0, $$165 = Math_fround(0), $$3 = 0, $$sroa_idx = 0, $10 = 0, $11 = Math_fround(0), $12 = Math_fround(0), $13 = 0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = 0, $17 = Math_fround(0), $18 = Math_fround(0);
 var $19 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = 0, $24 = Math_fround(0), $25 = Math_fround(0), $26 = 0, $27 = Math_fround(0), $28 = Math_fround(0), $29 = Math_fround(0), $30 = Math_fround(0), $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0);
 var $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = Math_fround(0), $46 = Math_fround(0), $47 = 0, $48 = Math_fround(0), $49 = Math_fround(0), $5 = Math_fround(0), $50 = 0, $51 = Math_fround(0), $52 = Math_fround(0), $53 = 0, $54 = Math_fround(0), $55 = Math_fround(0), $56 = Math_fround(0), $57 = Math_fround(0);
 var $58 = Math_fround(0), $59 = Math_fround(0), $6 = Math_fround(0), $60 = 0, $61 = 0, $62 = 0, $63 = Math_fround(0), $64 = 0, $65 = Math_fround(0), $66 = 0, $67 = Math_fround(0), $68 = 0, $69 = Math_fround(0), $7 = Math_fround(0), $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0;
 var $76 = Math_fround(0), $77 = Math_fround(0), $78 = 0, $79 = Math_fround(0), $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = Math_fround(0), $9 = Math_fround(0), $or$cond = 0, $or$cond69 = 0, $or$cond71 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = loadf($2);
 $6 = loadf($3);
 $7 = Math_fround($5 - $6);
 $8 = ((($2)) + 4|0);
 $9 = loadf($8);
 $10 = ((($3)) + 4|0);
 $11 = loadf($10);
 $12 = Math_fround($9 - $11);
 $13 = ((($3)) + 12|0);
 $14 = loadf($13);
 $15 = Math_fround($7 * $14);
 $16 = ((($3)) + 8|0);
 $17 = loadf($16);
 $18 = Math_fround($12 * $17);
 $19 = Math_fround($15 + $18);
 $20 = Math_fround($7 * $17);
 $21 = Math_fround($14 * $12);
 $22 = Math_fround($21 - $20);
 $23 = ((($2)) + 8|0);
 $24 = loadf($23);
 $25 = Math_fround($24 - $6);
 $26 = ((($2)) + 12|0);
 $27 = loadf($26);
 $28 = Math_fround($27 - $11);
 $29 = Math_fround($14 * $25);
 $30 = Math_fround($17 * $28);
 $31 = Math_fround($29 + $30);
 $32 = Math_fround($17 * $25);
 $33 = Math_fround($14 * $28);
 $34 = Math_fround($33 - $32);
 $35 = Math_fround($31 - $19);
 $36 = Math_fround($34 - $22);
 $37 = ((($2)) + 16|0);
 $38 = loadf($37);
 $39 = ((($0)) + 148|0);
 $40 = load4($39);
 $41 = ($40|0)>(0);
 L1: do {
  if ($41) {
   $$053112 = Math_fround(0.0);$$059111 = 0;$$060110 = -1;$$064109 = $38;
   L2: while(1) {
    $44 = (((($0)) + 20|0) + ($$059111<<3)|0);
    $45 = loadf($44);
    $46 = Math_fround($45 - $19);
    $47 = (((((($0)) + 20|0) + ($$059111<<3)|0)) + 4|0);
    $48 = loadf($47);
    $49 = Math_fround($48 - $22);
    $50 = (((($0)) + 84|0) + ($$059111<<3)|0);
    $51 = loadf($50);
    $52 = Math_fround($46 * $51);
    $53 = (((((($0)) + 84|0) + ($$059111<<3)|0)) + 4|0);
    $54 = loadf($53);
    $55 = Math_fround($49 * $54);
    $56 = Math_fround($52 + $55);
    $57 = Math_fround($35 * $51);
    $58 = Math_fround($36 * $54);
    $59 = Math_fround($57 + $58);
    $60 = $59 == Math_fround(0.0);
    do {
     if ($60) {
      $61 = $56 < Math_fround(0.0);
      if ($61) {
       $$3 = 0;
       label = 14;
       break L2;
      } else {
       $$154 = $$053112;$$161 = $$060110;$$165 = $$064109;
      }
     } else {
      $62 = $59 < Math_fround(0.0);
      $63 = Math_fround($$053112 * $59);
      $64 = $56 < $63;
      $or$cond = $62 & $64;
      if ($or$cond) {
       $65 = Math_fround($56 / $59);
       $$154 = $65;$$161 = $$059111;$$165 = $$064109;
       break;
      }
      $66 = $59 > Math_fround(0.0);
      $67 = Math_fround($$064109 * $59);
      $68 = $56 < $67;
      $or$cond69 = $66 & $68;
      if ($or$cond69) {
       $69 = Math_fround($56 / $59);
       $$154 = $$053112;$$161 = $$060110;$$165 = $69;
      } else {
       $$154 = $$053112;$$161 = $$060110;$$165 = $$064109;
      }
     }
    } while(0);
    $70 = $$165 < $$154;
    $42 = (($$059111) + 1)|0;
    if ($70) {
     $$3 = 0;
     label = 14;
     break;
    }
    $43 = ($42|0)<($40|0);
    if ($43) {
     $$053112 = $$154;$$059111 = $42;$$060110 = $$161;$$064109 = $$165;
    } else {
     $$053$lcssa = $$154;$$060$lcssa = $$161;
     break L1;
    }
   }
   if ((label|0) == 14) {
    return ($$3|0);
   }
  } else {
   $$053$lcssa = Math_fround(0.0);$$060$lcssa = -1;
  }
 } while(0);
 $71 = !($$053$lcssa >= Math_fround(0.0));
 $72 = !($$053$lcssa <= $38);
 $or$cond71 = $71 | $72;
 if ($or$cond71) {
  ___assert_fail((2587|0),(2502|0),249,(2631|0));
  // unreachable;
 }
 $73 = ($$060$lcssa|0)>(-1);
 if (!($73)) {
  $$3 = 0;
  return ($$3|0);
 }
 $74 = ((($1)) + 8|0);
 storef($74,$$053$lcssa);
 $75 = (((($0)) + 84|0) + ($$060$lcssa<<3)|0);
 $76 = loadf($75);
 $77 = Math_fround($14 * $76);
 $78 = (((((($0)) + 84|0) + ($$060$lcssa<<3)|0)) + 4|0);
 $79 = loadf($78);
 $80 = Math_fround($17 * $79);
 $81 = Math_fround($77 - $80);
 $82 = Math_fround($76 * $17);
 $83 = Math_fround($14 * $79);
 $84 = Math_fround($82 + $83);
 storef($1,$81);
 $$sroa_idx = ((($1)) + 4|0);
 storef($$sroa_idx,$84);
 $$3 = 1;
 return ($$3|0);
}
function __ZNK14b2PolygonShape11ComputeAABBEP6b2AABBRK11b2Transformi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$076 = 0, $$sroa$061$0$lcssa = 0, $$sroa$061$072 = 0, $$sroa$066$0$lcssa = 0, $$sroa$066$074 = 0, $$sroa$6$0$lcssa = 0, $$sroa$6$073 = 0, $$sroa$7$0$lcssa = 0, $$sroa$7$075 = 0, $$sroa_idx15 = 0, $$sroa_idx21 = 0, $10 = Math_fround(0), $11 = 0, $12 = Math_fround(0), $13 = Math_fround(0), $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0);
 var $19 = Math_fround(0), $20 = 0, $21 = Math_fround(0), $22 = Math_fround(0), $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = Math_fround(0), $30 = Math_fround(0), $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = 0;
 var $39 = 0, $4 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = 0, $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = Math_fround(0), $50 = Math_fround(0), $51 = Math_fround(0), $52 = 0, $53 = Math_fround(0), $54 = Math_fround(0), $55 = 0, $56 = Math_fround(0);
 var $57 = 0, $58 = 0, $59 = Math_fround(0), $6 = 0, $60 = 0, $61 = Math_fround(0), $62 = Math_fround(0), $63 = 0, $64 = Math_fround(0), $65 = 0, $66 = 0, $67 = 0, $68 = 0, $7 = Math_fround(0), $8 = Math_fround(0), $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($2)) + 12|0);
 $5 = loadf($4);
 $6 = ((($0)) + 20|0);
 $7 = loadf($6);
 $8 = Math_fround($5 * $7);
 $9 = ((($2)) + 8|0);
 $10 = loadf($9);
 $11 = ((($0)) + 24|0);
 $12 = loadf($11);
 $13 = Math_fround($10 * $12);
 $14 = Math_fround($8 - $13);
 $15 = loadf($2);
 $16 = Math_fround($15 + $14);
 $17 = Math_fround($7 * $10);
 $18 = Math_fround($5 * $12);
 $19 = Math_fround($17 + $18);
 $20 = ((($2)) + 4|0);
 $21 = loadf($20);
 $22 = Math_fround($19 + $21);
 $23 = i32_bc2i($16);
 $24 = i32_bc2i($22);
 $25 = ((($0)) + 148|0);
 $26 = load4($25);
 $27 = ($26|0)>(1);
 if ($27) {
  $$076 = 1;$$sroa$061$072 = $23;$$sroa$066$074 = $23;$$sroa$6$073 = $24;$$sroa$7$075 = $24;
  while(1) {
   $39 = (((($0)) + 20|0) + ($$076<<3)|0);
   $40 = loadf($39);
   $41 = Math_fround($5 * $40);
   $42 = (((((($0)) + 20|0) + ($$076<<3)|0)) + 4|0);
   $43 = loadf($42);
   $44 = Math_fround($10 * $43);
   $45 = Math_fround($41 - $44);
   $46 = Math_fround($15 + $45);
   $47 = Math_fround($40 * $10);
   $48 = Math_fround($5 * $43);
   $49 = Math_fround($47 + $48);
   $50 = Math_fround($49 + $21);
   $51 = i32_bc2f($$sroa$066$074);
   $52 = $51 < $46;
   $53 = $52 ? $51 : $46;
   $54 = i32_bc2f($$sroa$7$075);
   $55 = $54 < $50;
   $56 = $55 ? $54 : $50;
   $57 = i32_bc2i($53);
   $58 = i32_bc2i($56);
   $59 = i32_bc2f($$sroa$061$072);
   $60 = $59 > $46;
   $61 = $60 ? $59 : $46;
   $62 = i32_bc2f($$sroa$6$073);
   $63 = $62 > $50;
   $64 = $63 ? $62 : $50;
   $65 = i32_bc2i($61);
   $66 = i32_bc2i($64);
   $67 = (($$076) + 1)|0;
   $68 = ($67|0)<($26|0);
   if ($68) {
    $$076 = $67;$$sroa$061$072 = $65;$$sroa$066$074 = $57;$$sroa$6$073 = $66;$$sroa$7$075 = $58;
   } else {
    $$sroa$061$0$lcssa = $65;$$sroa$066$0$lcssa = $57;$$sroa$6$0$lcssa = $66;$$sroa$7$0$lcssa = $58;
    break;
   }
  }
 } else {
  $$sroa$061$0$lcssa = $23;$$sroa$066$0$lcssa = $23;$$sroa$6$0$lcssa = $24;$$sroa$7$0$lcssa = $24;
 }
 $28 = ((($0)) + 8|0);
 $29 = loadf($28);
 $30 = i32_bc2f($$sroa$066$0$lcssa);
 $31 = Math_fround($30 - $29);
 $32 = i32_bc2f($$sroa$7$0$lcssa);
 $33 = Math_fround($32 - $29);
 storef($1,$31);
 $$sroa_idx21 = ((($1)) + 4|0);
 storef($$sroa_idx21,$33);
 $34 = i32_bc2f($$sroa$061$0$lcssa);
 $35 = Math_fround($34 + $29);
 $36 = i32_bc2f($$sroa$6$0$lcssa);
 $37 = Math_fround($36 + $29);
 $38 = ((($1)) + 8|0);
 storef($38,$35);
 $$sroa_idx15 = ((($1)) + 12|0);
 storef($$sroa_idx15,$37);
 return;
}
function __ZNK14b2PolygonShape11ComputeMassEP10b2MassDataf($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = Math_fround($2);
 var $$0125 = Math_fround(0), $$066124 = Math_fround(0), $$067131 = 0, $$068123 = 0, $$pn = Math_fround(0), $$pn$in = 0, $$sink = Math_fround(0), $$sink$in = 0, $$sroa$0110$0121 = Math_fround(0), $$sroa$083$0 = Math_fround(0), $$sroa$097$0129 = Math_fround(0), $$sroa$10$0122 = Math_fround(0), $$sroa$11$0130 = Math_fround(0), $$sroa_idx71 = 0, $10 = Math_fround(0), $11 = Math_fround(0), $12 = 0, $13 = 0, $14 = 0, $15 = Math_fround(0);
 var $16 = 0, $17 = Math_fround(0), $18 = 0, $19 = 0, $20 = Math_fround(0), $21 = Math_fround(0), $22 = 0, $23 = 0, $24 = Math_fround(0), $25 = Math_fround(0), $26 = 0, $27 = Math_fround(0), $28 = Math_fround(0), $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = Math_fround(0), $34 = Math_fround(0);
 var $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $4 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = 0, $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0);
 var $53 = Math_fround(0), $54 = Math_fround(0), $55 = Math_fround(0), $56 = Math_fround(0), $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0), $6 = Math_fround(0), $60 = Math_fround(0), $61 = Math_fround(0), $62 = Math_fround(0), $63 = Math_fround(0), $64 = 0, $65 = Math_fround(0), $66 = 0, $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = Math_fround(0), $70 = Math_fround(0);
 var $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = Math_fround(0), $8 = Math_fround(0), $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 148|0);
 $4 = load4($3);
 $5 = ($4|0)>(2);
 if ($5) {
  $$067131 = 0;$$sroa$097$0129 = Math_fround(0.0);$$sroa$11$0130 = Math_fround(0.0);
 } else {
  ___assert_fail((2483|0),(2502|0),306,(2544|0));
  // unreachable;
 }
 while(1) {
  $14 = (((($0)) + 20|0) + ($$067131<<3)|0);
  $15 = loadf($14);
  $9 = Math_fround($$sroa$097$0129 + $15);
  $16 = (((((($0)) + 20|0) + ($$067131<<3)|0)) + 4|0);
  $17 = loadf($16);
  $11 = Math_fround($$sroa$11$0130 + $17);
  $18 = (($$067131) + 1)|0;
  $19 = ($18|0)<($4|0);
  if ($19) {
   $$067131 = $18;$$sroa$097$0129 = $9;$$sroa$11$0130 = $11;
  } else {
   break;
  }
 }
 $6 = (Math_fround(($4|0)));
 $7 = Math_fround(Math_fround(1.0) / $6);
 $8 = Math_fround($9 * $7);
 $10 = Math_fround($11 * $7);
 $12 = ((($0)) + 20|0);
 $13 = ((($0)) + 24|0);
 $$0125 = Math_fround(0.0);$$066124 = Math_fround(0.0);$$068123 = 0;$$sroa$0110$0121 = Math_fround(0.0);$$sroa$10$0122 = Math_fround(0.0);
 while(1) {
  $23 = (((($0)) + 20|0) + ($$068123<<3)|0);
  $24 = loadf($23);
  $25 = Math_fround($24 - $8);
  $26 = (((((($0)) + 20|0) + ($$068123<<3)|0)) + 4|0);
  $27 = loadf($26);
  $28 = Math_fround($27 - $10);
  $29 = (($$068123) + 1)|0;
  $30 = ($29|0)<($4|0);
  $31 = (((($0)) + 20|0) + ($29<<3)|0);
  $32 = (((((($0)) + 20|0) + ($29<<3)|0)) + 4|0);
  $$sink$in = $30 ? $32 : $13;
  $$pn$in = $30 ? $31 : $12;
  $$pn = loadf($$pn$in);
  $$sroa$083$0 = Math_fround($$pn - $8);
  $$sink = loadf($$sink$in);
  $33 = Math_fround($$sink - $10);
  $34 = Math_fround($25 * $33);
  $35 = Math_fround($28 * $$sroa$083$0);
  $36 = Math_fround($34 - $35);
  $37 = Math_fround($36 * Math_fround(0.5));
  $21 = Math_fround($$0125 + $37);
  $38 = Math_fround($37 * Math_fround(0.333333343));
  $39 = Math_fround($25 + $$sroa$083$0);
  $40 = Math_fround($28 + $33);
  $41 = Math_fround($39 * $38);
  $42 = Math_fround($40 * $38);
  $43 = Math_fround($$sroa$0110$0121 + $41);
  $44 = Math_fround($$sroa$10$0122 + $42);
  $45 = Math_fround($25 * $25);
  $46 = Math_fround($25 * $$sroa$083$0);
  $47 = Math_fround($45 + $46);
  $48 = Math_fround($$sroa$083$0 * $$sroa$083$0);
  $49 = Math_fround($48 + $47);
  $50 = Math_fround($28 * $28);
  $51 = Math_fround($28 * $33);
  $52 = Math_fround($50 + $51);
  $53 = Math_fround($33 * $33);
  $54 = Math_fround($53 + $52);
  $55 = Math_fround($36 * Math_fround(0.0833333358));
  $56 = Math_fround($49 + $54);
  $57 = Math_fround($55 * $56);
  $58 = Math_fround($$066124 + $57);
  if ($30) {
   $$0125 = $21;$$066124 = $58;$$068123 = $29;$$sroa$0110$0121 = $43;$$sroa$10$0122 = $44;
  } else {
   break;
  }
 }
 $20 = Math_fround($21 * $2);
 storef($1,$20);
 $22 = $21 > Math_fround(1.1920929E-7);
 if ($22) {
  $59 = Math_fround(Math_fround(1.0) / $21);
  $60 = Math_fround($43 * $59);
  $61 = Math_fround($44 * $59);
  $62 = Math_fround($8 + $60);
  $63 = Math_fround($10 + $61);
  $64 = ((($1)) + 4|0);
  storef($64,$62);
  $$sroa_idx71 = ((($1)) + 8|0);
  storef($$sroa_idx71,$63);
  $65 = Math_fround($58 * $2);
  $66 = ((($1)) + 12|0);
  $67 = Math_fround($62 * $62);
  $68 = Math_fround($63 * $63);
  $69 = Math_fround($67 + $68);
  $70 = Math_fround($60 * $60);
  $71 = Math_fround($61 * $61);
  $72 = Math_fround($70 + $71);
  $73 = Math_fround($69 - $72);
  $74 = Math_fround($20 * $73);
  $75 = Math_fround($65 + $74);
  storef($66,$75);
  return;
 } else {
  ___assert_fail((2556|0),(2502|0),352,(2544|0));
  // unreachable;
 }
}
function __ZN14b2PolygonShape8SetAsBoxEff($0,$1,$2) {
 $0 = $0|0;
 $1 = Math_fround($1);
 $2 = Math_fround($2);
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = Math_fround(0), $5 = Math_fround(0), $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 148|0);
 store4($3,4);
 $4 = Math_fround(-$1);
 $5 = Math_fround(-$2);
 $6 = ((($0)) + 20|0);
 storef($6,$4);
 $7 = ((($0)) + 24|0);
 storef($7,$5);
 $8 = ((($0)) + 28|0);
 storef($8,$1);
 $9 = ((($0)) + 32|0);
 storef($9,$5);
 $10 = ((($0)) + 36|0);
 storef($10,$1);
 $11 = ((($0)) + 40|0);
 storef($11,$2);
 $12 = ((($0)) + 44|0);
 storef($12,$4);
 $13 = ((($0)) + 48|0);
 storef($13,$2);
 $14 = ((($0)) + 84|0);
 storef($14,Math_fround(0.0));
 $15 = ((($0)) + 88|0);
 storef($15,Math_fround(-1.0));
 $16 = ((($0)) + 92|0);
 storef($16,Math_fround(1.0));
 $17 = ((($0)) + 96|0);
 storef($17,Math_fround(0.0));
 $18 = ((($0)) + 100|0);
 storef($18,Math_fround(0.0));
 $19 = ((($0)) + 104|0);
 storef($19,Math_fround(1.0));
 $20 = ((($0)) + 108|0);
 storef($20,Math_fround(-1.0));
 $21 = ((($0)) + 112|0);
 storef($21,Math_fround(0.0));
 $22 = ((($0)) + 12|0);
 storef($22,Math_fround(0.0));
 $23 = ((($0)) + 16|0);
 storef($23,Math_fround(0.0));
 return;
}
function __ZN16b2BlockAllocatorC2Ev($0) {
 $0 = $0|0;
 var $$$01213 = 0, $$$0121315 = 0, $$01213 = 0, $$014 = 0, $$sink = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 8|0);
 store4($1,128);
 $2 = ((($0)) + 4|0);
 store4($2,0);
 $3 = (__Z7b2Alloci(1024)|0);
 store4($0,$3);
 $4 = load4($1);
 $5 = $4 << 3;
 _memset(($3|0),0,($5|0))|0;
 $6 = ((($0)) + 12|0);
 ; store8($6,i64_const(0,0),4); store8($6+8|0,i64_const(0,0),4); store8($6+16|0,i64_const(0,0),4); store8($6+24|0,i64_const(0,0),4); store8($6+32|0,i64_const(0,0),4); store8($6+40|0,i64_const(0,0),4); store8($6+48|0,i64_const(0,0),4);
 $7 = load1(10857);
 $8 = ($7<<24>>24)==(0);
 if ($8) {
  $$01213 = 0;$$014 = 1;
 } else {
  return;
 }
 while(1) {
  $9 = ($$01213|0)<(14);
  if (!($9)) {
   label = 4;
   break;
  }
  $10 = (1448 + ($$01213<<2)|0);
  $11 = load4($10);
  $12 = ($$014|0)>($11|0);
  $13 = (($$01213) + 1)|0;
  $$$01213 = $12 ? $13 : $$01213;
  $$$0121315 = $12 ? $13 : $$01213;
  $$sink = $$$01213&255;
  $14 = (10216 + ($$014)|0);
  store1($14,$$sink);
  $15 = (($$014) + 1)|0;
  $16 = ($15|0)<(641);
  if ($16) {
   $$01213 = $$$0121315;$$014 = $15;
  } else {
   break;
  }
 }
 if ((label|0) == 4) {
  ___assert_fail((2656|0),(2674|0),73,(2708|0));
  // unreachable;
 }
 store1(10857,1);
 return;
}
function __ZN16b2BlockAllocatorD2Ev($0) {
 $0 = $0|0;
 var $$04 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 4|0);
 $2 = load4($1);
 $3 = ($2|0)>(0);
 if (!($3)) {
  $4 = load4($0);
  __Z6b2FreePv($4);
  return;
 }
 $$04 = 0;
 while(1) {
  $5 = load4($0);
  $6 = (((($5) + ($$04<<3)|0)) + 4|0);
  $7 = load4($6);
  __Z6b2FreePv($7);
  $8 = (($$04) + 1)|0;
  $9 = load4($1);
  $10 = ($8|0)<($9|0);
  if ($10) {
   $$04 = $8;
  } else {
   break;
  }
 }
 $4 = load4($0);
 __Z6b2FreePv($4);
 return;
}
function __ZN16b2BlockAllocator8AllocateEi($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$06062 = 0, $$1 = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $exitcond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)==(0);
 if ($2) {
  $$1 = 0;
  return ($$1|0);
 }
 $3 = ($1|0)>(0);
 if (!($3)) {
  ___assert_fail((2725|0),(2674|0),104,(5515|0));
  // unreachable;
 }
 $4 = ($1|0)>(640);
 if ($4) {
  $5 = (__Z7b2Alloci($1)|0);
  $$1 = $5;
  return ($$1|0);
 }
 $6 = (10216 + ($1)|0);
 $7 = load1($6);
 $8 = $7&255;
 $9 = ($7&255)<(14);
 if (!($9)) {
  ___assert_fail((2734|0),(2674|0),112,(5515|0));
  // unreachable;
 }
 $10 = (((($0)) + 12|0) + ($8<<2)|0);
 $11 = load4($10);
 $12 = ($11|0)==(0|0);
 if (!($12)) {
  $13 = load4($11);
  store4($10,$13);
  $$1 = $11;
  return ($$1|0);
 }
 $14 = ((($0)) + 4|0);
 $15 = load4($14);
 $16 = ((($0)) + 8|0);
 $17 = load4($16);
 $18 = ($15|0)==($17|0);
 if ($18) {
  $19 = load4($0);
  $20 = (($15) + 128)|0;
  store4($16,$20);
  $21 = $20 << 3;
  $22 = (__Z7b2Alloci($21)|0);
  store4($0,$22);
  $23 = load4($14);
  $24 = $23 << 3;
  _memcpy(($22|0),($19|0),($24|0))|0;
  $25 = load4($0);
  $26 = load4($14);
  $27 = (($25) + ($26<<3)|0);
  _memset(($27|0),0,1024)|0;
  __Z6b2FreePv($19);
  $$pre = load4($14);
  $31 = $$pre;
 } else {
  $31 = $15;
 }
 $28 = load4($0);
 $29 = (__Z7b2Alloci(16384)|0);
 $30 = (((($28) + ($31<<3)|0)) + 4|0);
 store4($30,$29);
 $32 = (1448 + ($8<<2)|0);
 $33 = load4($32);
 $34 = (($28) + ($31<<3)|0);
 store4($34,$33);
 $35 = (16384 / ($33|0))&-1;
 $36 = Math_imul($35, $33)|0;
 $37 = ($36|0)<(16385);
 if (!($37)) {
  ___assert_fail((2770|0),(2674|0),140,(5515|0));
  // unreachable;
 }
 $38 = (($35) + -1)|0;
 $39 = ($35|0)>(1);
 if ($39) {
  $$06062 = 0;
  while(1) {
   $46 = Math_imul($$06062, $33)|0;
   $47 = (($29) + ($46)|0);
   $48 = (($$06062) + 1)|0;
   $49 = Math_imul($48, $33)|0;
   $50 = (($29) + ($49)|0);
   store4($47,$50);
   $exitcond = ($48|0)==($38|0);
   if ($exitcond) {
    break;
   } else {
    $$06062 = $48;
   }
  }
 }
 $40 = Math_imul($38, $33)|0;
 $41 = (($29) + ($40)|0);
 store4($41,0);
 $42 = load4($29);
 store4($10,$42);
 $43 = load4($14);
 $44 = (($43) + 1)|0;
 store4($14,$44);
 $45 = load4($30);
 $$1 = $45;
 return ($$1|0);
}
function __ZN16b2BlockAllocator4FreeEPvi($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($2|0)==(0);
 if ($3) {
  return;
 }
 $4 = ($2|0)>(0);
 if (!($4)) {
  ___assert_fail((2725|0),(2674|0),164,(5541|0));
  // unreachable;
 }
 $5 = ($2|0)>(640);
 if ($5) {
  __Z6b2FreePv($1);
  return;
 }
 $6 = (10216 + ($2)|0);
 $7 = load1($6);
 $8 = ($7&255)<(14);
 if (!($8)) {
  ___assert_fail((2734|0),(2674|0),173,(5541|0));
  // unreachable;
 }
 $9 = $7&255;
 $10 = (((($0)) + 12|0) + ($9<<2)|0);
 $11 = load4($10);
 store4($1,$11);
 store4($10,$1);
 return;
}
function __Z7b2Alloci($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (_malloc($0)|0);
 return ($1|0);
}
function __Z6b2FreePv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZN6b2BodyC2EPK9b2BodyDefP7b2World($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$36 = Math_fround(0), $$37 = Math_fround(0), $$not = 0, $$not34 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0;
 var $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = Math_fround(0), $120 = 0, $121 = 0, $122 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = Math_fround(0), $19 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = Math_fround(0), $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = Math_fround(0), $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = Math_fround(0), $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = Math_fround(0), $43 = 0, $44 = 0, $45 = 0, $46 = Math_fround(0), $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = Math_fround(0), $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = i64(), $81 = Math_fround(0), $82 = Math_fround(0), $83 = 0, $84 = Math_fround(0), $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = i64(), $99 = 0, $notlhs = 0, $notlhs38 = 0, $notrhs = 0, $notrhs39 = 0, $or$cond = 0, $or$cond35 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 12|0);
 $4 = ((($0)) + 64|0);
 $5 = ((($1)) + 4|0);
 $6 = loadf($5);
 $7 = ($6 != $6) | (Math_fround(0.0) != Math_fround(0.0));
 if ($7) {
  ___assert_fail((2809|0),(2832|0),27,(2858|0));
  // unreachable;
 }
 $8 = $6 > Math_fround(-inf);
 $9 = $6 < Math_fround(inf);
 $10 = $8 & $9;
 if (!($10)) {
  ___assert_fail((2809|0),(2832|0),27,(2858|0));
  // unreachable;
 }
 $11 = ((($1)) + 8|0);
 $12 = loadf($11);
 $13 = ($12 != $12) | (Math_fround(0.0) != Math_fround(0.0));
 if ($13) {
  ___assert_fail((2809|0),(2832|0),27,(2858|0));
  // unreachable;
 }
 $14 = $12 > Math_fround(-inf);
 $15 = $12 < Math_fround(inf);
 $16 = $14 & $15;
 if (!($16)) {
  ___assert_fail((2809|0),(2832|0),27,(2858|0));
  // unreachable;
 }
 $17 = ((($1)) + 16|0);
 $18 = loadf($17);
 $19 = ($18 != $18) | (Math_fround(0.0) != Math_fround(0.0));
 if ($19) {
  ___assert_fail((2865|0),(2832|0),28,(2858|0));
  // unreachable;
 }
 $20 = $18 > Math_fround(-inf);
 $21 = $18 < Math_fround(inf);
 $22 = $20 & $21;
 if (!($22)) {
  ___assert_fail((2865|0),(2832|0),28,(2858|0));
  // unreachable;
 }
 $23 = ((($1)) + 20|0);
 $24 = loadf($23);
 $25 = ($24 != $24) | (Math_fround(0.0) != Math_fround(0.0));
 if ($25) {
  ___assert_fail((2865|0),(2832|0),28,(2858|0));
  // unreachable;
 }
 $26 = $24 > Math_fround(-inf);
 $27 = $24 < Math_fround(inf);
 $28 = $26 & $27;
 if (!($28)) {
  ___assert_fail((2865|0),(2832|0),28,(2858|0));
  // unreachable;
 }
 $29 = ((($1)) + 12|0);
 $30 = loadf($29);
 $31 = ($30 != $30) | (Math_fround(0.0) != Math_fround(0.0));
 if ($31) {
  ___assert_fail((2894|0),(2832|0),29,(2858|0));
  // unreachable;
 }
 $32 = $30 > Math_fround(-inf);
 $33 = $30 < Math_fround(inf);
 $34 = $32 & $33;
 if (!($34)) {
  ___assert_fail((2894|0),(2832|0),29,(2858|0));
  // unreachable;
 }
 $35 = ((($1)) + 24|0);
 $36 = loadf($35);
 $37 = ($36 != $36) | (Math_fround(0.0) != Math_fround(0.0));
 if ($37) {
  ___assert_fail((2915|0),(2832|0),30,(2858|0));
  // unreachable;
 }
 $38 = $36 > Math_fround(-inf);
 $39 = $36 < Math_fround(inf);
 $40 = $38 & $39;
 if (!($40)) {
  ___assert_fail((2915|0),(2832|0),30,(2858|0));
  // unreachable;
 }
 $41 = ((($1)) + 32|0);
 $42 = loadf($41);
 $43 = ($42 != $42) | (Math_fround(0.0) != Math_fround(0.0));
 if ($43) {
  ___assert_fail((2946|0),(2832|0),31,(2858|0));
  // unreachable;
 }
 $notlhs = !($42 > Math_fround(-inf));
 $notrhs = !($42 < Math_fround(inf));
 $$not = $notrhs | $notlhs;
 $44 = !($42 >= Math_fround(0.0));
 $or$cond = $$not | $44;
 if ($or$cond) {
  ___assert_fail((2946|0),(2832|0),31,(2858|0));
  // unreachable;
 }
 $45 = ((($1)) + 28|0);
 $46 = loadf($45);
 $47 = ($46 != $46) | (Math_fround(0.0) != Math_fround(0.0));
 if ($47) {
  ___assert_fail((3006|0),(2832|0),32,(2858|0));
  // unreachable;
 }
 $notlhs38 = !($46 > Math_fround(-inf));
 $notrhs39 = !($46 < Math_fround(inf));
 $$not34 = $notrhs39 | $notlhs38;
 $48 = !($46 >= Math_fround(0.0));
 $or$cond35 = $$not34 | $48;
 if ($or$cond35) {
  ___assert_fail((3006|0),(2832|0),32,(2858|0));
  // unreachable;
 }
 $49 = ((($0)) + 4|0);
 store2($49,0);
 $50 = ((($1)) + 39|0);
 $51 = load1($50);
 $52 = ($51<<24>>24)==(0);
 $$ = $52 ? 0 : 8;
 store2($49,$$);
 $53 = ((($1)) + 38|0);
 $54 = load1($53);
 $55 = ($54<<24>>24)==(0);
 if ($55) {
  $64 = $$;
 } else {
  $56 = $$&65535;
  $57 = $56 | 16;
  $58 = $57&65535;
  store2($49,$58);
  $64 = $58;
 }
 $59 = ((($1)) + 36|0);
 $60 = load2($59);
 $61 = $60&255;
 $62 = ($61<<24>>24)==(0);
 if ($62) {
  $69 = $64;
 } else {
  $63 = $64&65535;
  $65 = $63 | 4;
  $66 = $65&65535;
  store2($49,$66);
  $69 = $66;
 }
 $67 = ($60&65535)<(256);
 if ($67) {
  $76 = $69;
 } else {
  $68 = $69&65535;
  $70 = $68 | 2;
  $71 = $70&65535;
  store2($49,$71);
  $76 = $71;
 }
 $72 = ((($1)) + 40|0);
 $73 = load1($72);
 $74 = ($73<<24>>24)==(0);
 if (!($74)) {
  $75 = $76&65535;
  $77 = $75 | 32;
  $78 = $77&65535;
  store2($49,$78);
 }
 $79 = ((($0)) + 88|0);
 store4($79,$2);
 $80 = load8($5,4);
 store8($3,$80,4);
 $81 = loadf($29);
 $82 = (Math_fround(_sinf($81)));
 $83 = ((($0)) + 20|0);
 storef($83,$82);
 $84 = (Math_fround(_cosf($81)));
 $85 = ((($0)) + 24|0);
 storef($85,$84);
 $86 = ((($0)) + 28|0);
 storef($86,Math_fround(0.0));
 $87 = ((($0)) + 32|0);
 storef($87,Math_fround(0.0));
 $88 = ((($0)) + 36|0);
 store8($88,$80,4);
 $89 = ((($0)) + 44|0);
 store8($89,$80,4);
 $90 = load4($29);
 $91 = ((($0)) + 52|0);
 store4($91,$90);
 $92 = ((($0)) + 56|0);
 store4($92,$90);
 $93 = ((($0)) + 60|0);
 storef($93,Math_fround(0.0));
 $94 = ((($0)) + 108|0);
 store4($94,0);
 $95 = ((($0)) + 112|0);
 store4($95,0);
 $96 = ((($0)) + 92|0);
 store4($96,0);
 $97 = ((($0)) + 96|0);
 store4($97,0);
 $98 = load8($17,4);
 store8($4,$98,4);
 $99 = load4($35);
 $100 = ((($0)) + 72|0);
 store4($100,$99);
 $101 = load4($45);
 $102 = ((($0)) + 132|0);
 store4($102,$101);
 $103 = load4($41);
 $104 = ((($0)) + 136|0);
 store4($104,$103);
 $105 = ((($1)) + 48|0);
 $106 = load4($105);
 $107 = ((($0)) + 140|0);
 store4($107,$106);
 $108 = ((($0)) + 76|0);
 storef($108,Math_fround(0.0));
 $109 = ((($0)) + 80|0);
 storef($109,Math_fround(0.0));
 $110 = ((($0)) + 84|0);
 storef($110,Math_fround(0.0));
 $111 = ((($0)) + 144|0);
 storef($111,Math_fround(0.0));
 $112 = load4($1);
 store4($0,$112);
 $113 = ($112|0)==(2);
 $114 = ((($0)) + 116|0);
 $$36 = $113 ? Math_fround(1.0) : Math_fround(0.0);
 $$37 = $113 ? Math_fround(1.0) : Math_fround(0.0);
 storef($114,$$36);
 $115 = ((($0)) + 120|0);
 storef($115,$$37);
 $116 = ((($0)) + 124|0);
 storef($116,Math_fround(0.0));
 $117 = ((($0)) + 128|0);
 storef($117,Math_fround(0.0));
 $118 = ((($1)) + 44|0);
 $119 = load4($118);
 $120 = ((($0)) + 148|0);
 store4($120,$119);
 $121 = ((($0)) + 100|0);
 store4($121,0);
 $122 = ((($0)) + 104|0);
 store4($122,0);
 return;
}
function __ZN6b2Body13ResetMassDataEv($0) {
 $0 = $0|0;
 var $$0 = 0, $$059 = 0, $$062 = 0, $$cast$pre$phiZZ2D = Math_fround(0), $$pre = Math_fround(0), $$pre$phiZ2D = Math_fround(0), $$pre64 = Math_fround(0), $$sroa$049$0$lcssa65 = 0, $$sroa$049$060 = 0, $$sroa$049$1 = 0, $$sroa$049$2 = 0, $$sroa$10$0$lcssa66 = 0, $$sroa$10$061 = 0, $$sroa$10$1 = 0, $$sroa$10$2 = 0, $$sroa_idx16 = 0, $$sroa_idx28 = 0, $1 = 0, $10 = 0, $100 = Math_fround(0);
 var $101 = Math_fround(0), $102 = 0, $103 = Math_fround(0), $104 = Math_fround(0), $105 = Math_fround(0), $106 = Math_fround(0), $107 = Math_fround(0), $108 = Math_fround(0), $11 = i64(), $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = Math_fround(0), $25 = Math_fround(0), $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $4 = 0;
 var $40 = Math_fround(0), $41 = 0, $42 = Math_fround(0), $43 = Math_fround(0), $44 = 0, $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = 0, $49 = 0, $5 = 0, $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0), $53 = 0, $54 = Math_fround(0), $55 = Math_fround(0), $56 = 0, $57 = 0, $58 = Math_fround(0);
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = Math_fround(0), $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = Math_fround(0), $71 = 0, $72 = Math_fround(0), $73 = 0, $74 = Math_fround(0), $75 = Math_fround(0), $76 = 0;
 var $77 = Math_fround(0), $78 = Math_fround(0), $79 = 0, $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = 0, $84 = Math_fround(0), $85 = Math_fround(0), $86 = Math_fround(0), $87 = Math_fround(0), $88 = Math_fround(0), $89 = 0, $9 = 0, $90 = Math_fround(0), $91 = Math_fround(0), $92 = 0, $93 = 0, $94 = Math_fround(0);
 var $95 = Math_fround(0), $96 = Math_fround(0), $97 = Math_fround(0), $98 = Math_fround(0), $99 = 0, $storemerge = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = ((($0)) + 116|0);
 $3 = ((($0)) + 120|0);
 $4 = ((($0)) + 124|0);
 $5 = ((($0)) + 128|0);
 $6 = ((($0)) + 28|0);
 storef($6,Math_fround(0.0));
 $7 = ((($0)) + 32|0);
 storef($7,Math_fround(0.0));
 ; store8($2,i64_const(0,0),4); store8($2+8|0,i64_const(0,0),4);
 $8 = load4($0);
 switch ($8|0) {
 case 1: case 0:  {
  $9 = ((($0)) + 36|0);
  $10 = ((($0)) + 12|0);
  $11 = load8($10,4);
  store8($9,$11,4);
  $12 = ((($0)) + 44|0);
  store8($12,$11,4);
  $13 = ((($0)) + 56|0);
  $14 = load4($13);
  $15 = ((($0)) + 52|0);
  store4($15,$14);
  STACKTOP = sp;return;
  break;
 }
 case 2:  {
  $16 = load4(9652);
  $17 = load4((9656));
  $18 = ((($0)) + 100|0);
  $$059 = load4($18);
  $19 = ($$059|0)==(0|0);
  if ($19) {
   $$sroa$049$0$lcssa65 = $16;$$sroa$10$0$lcssa66 = $17;$105 = Math_fround(0.0);
   label = 11;
  } else {
   $20 = ((($1)) + 4|0);
   $21 = ((($1)) + 8|0);
   $22 = ((($1)) + 12|0);
   $$062 = $$059;$$sroa$049$060 = $16;$$sroa$10$061 = $17;$106 = Math_fround(0.0);$107 = Math_fround(0.0);
   while(1) {
    $25 = loadf($$062);
    $26 = $25 == Math_fround(0.0);
    if ($26) {
     $$sroa$049$1 = $$sroa$049$060;$$sroa$10$1 = $$sroa$10$061;$108 = $106;$24 = $107;
    } else {
     $27 = ((($$062)) + 12|0);
     $28 = load4($27);
     $29 = load4($28);
     $30 = ((($29)) + 28|0);
     $31 = load4($30);
     FUNCTION_TABLE_viif[$31 & 3]($28,$1,$25);
     $32 = loadf($1);
     $33 = loadf($2);
     $34 = Math_fround($32 + $33);
     storef($2,$34);
     $35 = loadf($20);
     $36 = Math_fround($32 * $35);
     $37 = loadf($21);
     $38 = Math_fround($32 * $37);
     $39 = i32_bc2f($$sroa$049$060);
     $40 = Math_fround($39 + $36);
     $41 = i32_bc2i($40);
     $42 = i32_bc2f($$sroa$10$061);
     $43 = Math_fround($42 + $38);
     $44 = i32_bc2i($43);
     $45 = loadf($22);
     $46 = loadf($4);
     $47 = Math_fround($45 + $46);
     storef($4,$47);
     $$sroa$049$1 = $41;$$sroa$10$1 = $44;$108 = $47;$24 = $34;
    }
    $48 = ((($$062)) + 4|0);
    $$0 = load4($48);
    $49 = ($$0|0)==(0|0);
    if ($49) {
     break;
    } else {
     $$062 = $$0;$$sroa$049$060 = $$sroa$049$1;$$sroa$10$061 = $$sroa$10$1;$106 = $108;$107 = $24;
    }
   }
   $23 = $24 > Math_fround(0.0);
   if ($23) {
    $50 = Math_fround(Math_fround(1.0) / $24);
    storef($3,$50);
    $51 = i32_bc2f($$sroa$049$1);
    $52 = Math_fround($51 * $50);
    $53 = i32_bc2i($52);
    $54 = i32_bc2f($$sroa$10$1);
    $55 = Math_fround($54 * $50);
    $56 = i32_bc2i($55);
    $$sroa$049$2 = $53;$$sroa$10$2 = $56;$58 = $108;$69 = $24;
   } else {
    $$sroa$049$0$lcssa65 = $$sroa$049$1;$$sroa$10$0$lcssa66 = $$sroa$10$1;$105 = $108;
    label = 11;
   }
  }
  if ((label|0) == 11) {
   storef($2,Math_fround(1.0));
   storef($3,Math_fround(1.0));
   $$sroa$049$2 = $$sroa$049$0$lcssa65;$$sroa$10$2 = $$sroa$10$0$lcssa66;$58 = $105;$69 = Math_fround(1.0);
  }
  $57 = $58 > Math_fround(0.0);
  do {
   if ($57) {
    $59 = ((($0)) + 4|0);
    $60 = load2($59);
    $61 = $60 & 16;
    $62 = ($61<<16>>16)==(0);
    if ($62) {
     $63 = i32_bc2f($$sroa$049$2);
     $64 = Math_fround($63 * $63);
     $65 = i32_bc2f($$sroa$10$2);
     $66 = Math_fround($65 * $65);
     $67 = Math_fround($64 + $66);
     $68 = Math_fround($67 * $69);
     $70 = Math_fround($58 - $68);
     storef($4,$70);
     $71 = $70 > Math_fround(0.0);
     if ($71) {
      $72 = Math_fround(Math_fround(1.0) / $70);
      $$cast$pre$phiZZ2D = $63;$$pre$phiZ2D = $65;$storemerge = $72;
      break;
     } else {
      ___assert_fail((3132|0),(2832|0),319,(3118|0));
      // unreachable;
     }
    } else {
     label = 17;
    }
   } else {
    label = 17;
   }
  } while(0);
  if ((label|0) == 17) {
   storef($4,Math_fround(0.0));
   $$pre = i32_bc2f($$sroa$049$2);
   $$pre64 = i32_bc2f($$sroa$10$2);
   $$cast$pre$phiZZ2D = $$pre;$$pre$phiZ2D = $$pre64;$storemerge = Math_fround(0.0);
  }
  storef($5,$storemerge);
  $73 = ((($0)) + 44|0);
  $74 = loadf($73);
  $$sroa_idx28 = ((($0)) + 48|0);
  $75 = loadf($$sroa_idx28);
  store4($6,$$sroa$049$2);
  store4($7,$$sroa$10$2);
  $76 = ((($0)) + 24|0);
  $77 = loadf($76);
  $78 = Math_fround($$cast$pre$phiZZ2D * $77);
  $79 = ((($0)) + 20|0);
  $80 = loadf($79);
  $81 = Math_fround($80 * $$pre$phiZ2D);
  $82 = Math_fround($78 - $81);
  $83 = ((($0)) + 12|0);
  $84 = loadf($83);
  $85 = Math_fround($84 + $82);
  $86 = Math_fround($$cast$pre$phiZZ2D * $80);
  $87 = Math_fround($77 * $$pre$phiZ2D);
  $88 = Math_fround($86 + $87);
  $89 = ((($0)) + 16|0);
  $90 = loadf($89);
  $91 = Math_fround($88 + $90);
  storef($73,$85);
  storef($$sroa_idx28,$91);
  $92 = ((($0)) + 36|0);
  storef($92,$85);
  $$sroa_idx16 = ((($0)) + 40|0);
  storef($$sroa_idx16,$91);
  $93 = ((($0)) + 72|0);
  $94 = loadf($93);
  $95 = Math_fround($85 - $74);
  $96 = Math_fround($91 - $75);
  $97 = Math_fround($94 * $96);
  $98 = Math_fround($94 * $95);
  $99 = ((($0)) + 64|0);
  $100 = loadf($99);
  $101 = Math_fround($100 - $97);
  storef($99,$101);
  $102 = ((($0)) + 68|0);
  $103 = loadf($102);
  $104 = Math_fround($98 + $103);
  storef($102,$104);
  STACKTOP = sp;return;
  break;
 }
 default: {
  ___assert_fail((3093|0),(2832|0),284,(3118|0));
  // unreachable;
 }
 }
}
function __ZN6b2Body19SynchronizeFixturesEv($0) {
 $0 = $0|0;
 var $$0 = 0, $$017 = 0, $$018 = 0, $$sroa_idx = 0, $1 = 0, $10 = Math_fround(0), $11 = 0, $12 = Math_fround(0), $13 = Math_fround(0), $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = 0, $19 = Math_fround(0), $2 = 0, $20 = Math_fround(0), $21 = 0, $22 = Math_fround(0), $23 = Math_fround(0);
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = Math_fround(0), $30 = 0, $31 = 0, $4 = Math_fround(0), $5 = 0, $6 = Math_fround(0), $7 = 0, $8 = 0, $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = ((($0)) + 52|0);
 $3 = loadf($2);
 $4 = (Math_fround(_sinf($3)));
 $5 = ((($1)) + 8|0);
 storef($5,$4);
 $6 = (Math_fround(_cosf($3)));
 $7 = ((($1)) + 12|0);
 storef($7,$6);
 $8 = ((($0)) + 28|0);
 $9 = loadf($8);
 $10 = Math_fround($6 * $9);
 $11 = ((($0)) + 32|0);
 $12 = loadf($11);
 $13 = Math_fround($4 * $12);
 $14 = Math_fround($10 - $13);
 $15 = Math_fround($9 * $4);
 $16 = Math_fround($6 * $12);
 $17 = Math_fround($15 + $16);
 $18 = ((($0)) + 36|0);
 $19 = loadf($18);
 $20 = Math_fround($19 - $14);
 $21 = ((($0)) + 40|0);
 $22 = loadf($21);
 $23 = Math_fround($22 - $17);
 storef($1,$20);
 $$sroa_idx = ((($1)) + 4|0);
 storef($$sroa_idx,$23);
 $24 = ((($0)) + 88|0);
 $25 = load4($24);
 $26 = ((($25)) + 102872|0);
 $27 = ((($0)) + 100|0);
 $$017 = load4($27);
 $28 = ($$017|0)==(0|0);
 if ($28) {
  STACKTOP = sp;return;
 }
 $29 = ((($0)) + 12|0);
 $$018 = $$017;
 while(1) {
  __ZN9b2Fixture11SynchronizeEP12b2BroadPhaseRK11b2TransformS4_($$018,$26,$1,$29);
  $30 = ((($$018)) + 4|0);
  $$0 = load4($30);
  $31 = ($$0|0)==(0|0);
  if ($31) {
   break;
  } else {
   $$018 = $$0;
  }
 }
 STACKTOP = sp;return;
}
function __ZN6b2Body13CreateFixtureEPK12b2FixtureDef($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = Math_fround(0), $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 88|0);
 $3 = load4($2);
 $4 = ((($3)) + 102868|0);
 $5 = load4($4);
 $6 = $5 & 2;
 $7 = ($6|0)==(0);
 if (!($7)) {
  ___assert_fail((3064|0),(2832|0),153,(3143|0));
  // unreachable;
 }
 $8 = (__ZN16b2BlockAllocator8AllocateEi($3,44)|0);
 __ZN9b2FixtureC2Ev($8);
 __ZN9b2Fixture6CreateEP16b2BlockAllocatorP6b2BodyPK12b2FixtureDef($8,$3,$0,$1);
 $9 = ((($0)) + 4|0);
 $10 = load2($9);
 $11 = $10 & 32;
 $12 = ($11<<16>>16)==(0);
 if (!($12)) {
  $13 = load4($2);
  $14 = ((($13)) + 102872|0);
  $15 = ((($0)) + 12|0);
  __ZN9b2Fixture13CreateProxiesEP12b2BroadPhaseRK11b2Transform($8,$14,$15);
 }
 $16 = ((($0)) + 100|0);
 $17 = load4($16);
 $18 = ((($8)) + 4|0);
 store4($18,$17);
 store4($16,$8);
 $19 = ((($0)) + 104|0);
 $20 = load4($19);
 $21 = (($20) + 1)|0;
 store4($19,$21);
 $22 = ((($8)) + 8|0);
 store4($22,$0);
 $23 = loadf($8);
 $24 = $23 > Math_fround(0.0);
 if (!($24)) {
  $25 = load4($2);
  $26 = ((($25)) + 102868|0);
  $27 = load4($26);
  $28 = $27 | 1;
  store4($26,$28);
  return ($8|0);
 }
 __ZN6b2Body13ResetMassDataEv($0);
 $25 = load4($2);
 $26 = ((($25)) + 102868|0);
 $27 = load4($26);
 $28 = $27 | 1;
 store4($26,$28);
 return ($8|0);
}
function __ZN6b2Body13CreateFixtureEPK7b2Shapef($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = Math_fround($2);
 var $10 = 0, $11 = 0, $12 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $3 = sp;
 $4 = ((($3)) + 22|0);
 store2($4,1);
 $5 = ((($3)) + 24|0);
 store2($5,-1);
 $6 = ((($3)) + 26|0);
 store2($6,0);
 $7 = ((($3)) + 4|0);
 store4($7,0);
 $8 = ((($3)) + 8|0);
 storef($8,Math_fround(0.200000003));
 $9 = ((($3)) + 12|0);
 storef($9,Math_fround(0.0));
 $10 = ((($3)) + 16|0);
 $11 = ((($3)) + 20|0);
 store1($11,0);
 store4($3,$1);
 storef($10,$2);
 $12 = (__ZN6b2Body13CreateFixtureEPK12b2FixtureDef($0,$3)|0);
 STACKTOP = sp;return ($12|0);
}
function __ZNK6b2Body13ShouldCollideEPKS_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$09 = 0, $$0911 = 0, $$0912 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = ($2|0)==(2);
 if (!($3)) {
  $4 = load4($1);
  $5 = ($4|0)==(2);
  if (!($5)) {
   $17 = 0;
   return ($17|0);
  }
 }
 $6 = ((($0)) + 108|0);
 $$0911 = load4($6);
 $7 = ($$0911|0)==(0|0);
 if ($7) {
  $17 = 1;
  return ($17|0);
 } else {
  $$0912 = $$0911;
 }
 while(1) {
  $8 = load4($$0912);
  $9 = ($8|0)==($1|0);
  if ($9) {
   $10 = ((($$0912)) + 4|0);
   $11 = load4($10);
   $12 = ((($11)) + 61|0);
   $13 = load1($12);
   $14 = ($13<<24>>24)==(0);
   if ($14) {
    $17 = 0;
    label = 7;
    break;
   }
  }
  $15 = ((($$0912)) + 12|0);
  $$09 = load4($15);
  $16 = ($$09|0)==(0|0);
  if ($16) {
   $17 = 1;
   label = 7;
   break;
  } else {
   $$0912 = $$09;
  }
 }
 if ((label|0) == 7) {
  return ($17|0);
 }
 return (0)|0;
}
function __ZN17b2ContactListenerD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN17b2ContactListenerD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZN17b2ContactListener12BeginContactEP9b2Contact($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN17b2ContactListener10EndContactEP9b2Contact($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN17b2ContactListener8PreSolveEP9b2ContactPK10b2Manifold($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN17b2ContactListener9PostSolveEP9b2ContactPK16b2ContactImpulse($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN16b2ContactManagerC2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __ZN12b2BroadPhaseC2Ev($0);
 $1 = ((($0)) + 60|0);
 store4($1,0);
 $2 = ((($0)) + 64|0);
 store4($2,0);
 $3 = ((($0)) + 68|0);
 store4($3,1504);
 $4 = ((($0)) + 72|0);
 store4($4,1508);
 $5 = ((($0)) + 76|0);
 store4($5,0);
 return;
}
function __ZN16b2ContactManager7DestroyEP9b2Contact($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$pre = 0, $$pre45 = 0, $$pre47 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($1)) + 48|0);
 $3 = load4($2);
 $4 = ((($1)) + 52|0);
 $5 = load4($4);
 $6 = ((($3)) + 8|0);
 $7 = load4($6);
 $8 = ((($5)) + 8|0);
 $9 = load4($8);
 $10 = ((($0)) + 72|0);
 $11 = load4($10);
 $12 = ($11|0)==(0|0);
 if (!($12)) {
  $13 = ((($1)) + 4|0);
  $14 = load4($13);
  $15 = $14 & 2;
  $16 = ($15|0)==(0);
  if (!($16)) {
   $17 = load4($11);
   $18 = ((($17)) + 12|0);
   $19 = load4($18);
   FUNCTION_TABLE_vii[$19 & 15]($11,$1);
  }
 }
 $20 = ((($1)) + 8|0);
 $21 = load4($20);
 $22 = ($21|0)==(0|0);
 $23 = $21;
 $$pre = ((($1)) + 12|0);
 if (!($22)) {
  $24 = load4($$pre);
  $25 = ((($21)) + 12|0);
  store4($25,$24);
 }
 $26 = load4($$pre);
 $27 = ($26|0)==(0|0);
 $28 = $26;
 if (!($27)) {
  $29 = ((($26)) + 8|0);
  store4($29,$23);
 }
 $30 = ((($0)) + 60|0);
 $31 = load4($30);
 $32 = ($31|0)==($1|0);
 if ($32) {
  store4($30,$28);
 }
 $33 = ((($1)) + 16|0);
 $34 = ((($1)) + 24|0);
 $35 = load4($34);
 $36 = ($35|0)==(0|0);
 $37 = $35;
 $$pre45 = ((($1)) + 28|0);
 if (!($36)) {
  $38 = load4($$pre45);
  $39 = ((($35)) + 12|0);
  store4($39,$38);
 }
 $40 = load4($$pre45);
 $41 = ($40|0)==(0|0);
 $42 = $40;
 if (!($41)) {
  $43 = ((($40)) + 8|0);
  store4($43,$37);
 }
 $44 = ((($7)) + 112|0);
 $45 = load4($44);
 $46 = ($33|0)==($45|0);
 if ($46) {
  store4($44,$42);
 }
 $47 = ((($1)) + 32|0);
 $48 = ((($1)) + 40|0);
 $49 = load4($48);
 $50 = ($49|0)==(0|0);
 $51 = $49;
 $$pre47 = ((($1)) + 44|0);
 if (!($50)) {
  $52 = load4($$pre47);
  $53 = ((($49)) + 12|0);
  store4($53,$52);
 }
 $54 = load4($$pre47);
 $55 = ($54|0)==(0|0);
 $56 = $54;
 if (!($55)) {
  $57 = ((($54)) + 8|0);
  store4($57,$51);
 }
 $58 = ((($9)) + 112|0);
 $59 = load4($58);
 $60 = ($47|0)==($59|0);
 if (!($60)) {
  $61 = ((($0)) + 76|0);
  $62 = load4($61);
  __ZN9b2Contact7DestroyEPS_P16b2BlockAllocator($1,$62);
  $63 = ((($0)) + 64|0);
  $64 = load4($63);
  $65 = (($64) + -1)|0;
  store4($63,$65);
  return;
 }
 store4($58,$56);
 $61 = ((($0)) + 76|0);
 $62 = load4($61);
 __ZN9b2Contact7DestroyEPS_P16b2BlockAllocator($1,$62);
 $63 = ((($0)) + 64|0);
 $64 = load4($63);
 $65 = (($64) + -1)|0;
 store4($63,$65);
 return;
}
function __ZN16b2ContactManager7CollideEv($0) {
 $0 = $0|0;
 var $$0$be = 0, $$061 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = Math_fround(0), $7 = 0, $70 = 0, $71 = Math_fround(0), $72 = Math_fround(0), $73 = 0, $74 = Math_fround(0), $75 = 0, $76 = Math_fround(0), $77 = Math_fround(0), $78 = 0, $79 = Math_fround(0), $8 = 0;
 var $80 = 0, $81 = Math_fround(0), $82 = Math_fround(0), $83 = 0, $84 = Math_fround(0), $85 = 0, $86 = Math_fround(0), $87 = Math_fround(0), $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $brmerge = 0, $or$cond$i = 0;
 var $or$cond$i$i = 0, $or$cond34$i$i = 0, $or$cond36$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 60|0);
 $2 = load4($1);
 $3 = ($2|0)==(0|0);
 if ($3) {
  return;
 }
 $4 = ((($0)) + 12|0);
 $5 = ((($0)) + 4|0);
 $6 = ((($0)) + 72|0);
 $7 = ((($0)) + 68|0);
 $$061 = $2;
 L4: while(1) {
  $8 = ((($$061)) + 48|0);
  $9 = load4($8);
  $10 = ((($$061)) + 52|0);
  $11 = load4($10);
  $12 = ((($$061)) + 56|0);
  $13 = load4($12);
  $14 = ((($$061)) + 60|0);
  $15 = load4($14);
  $16 = ((($9)) + 8|0);
  $17 = load4($16);
  $18 = ((($11)) + 8|0);
  $19 = load4($18);
  $20 = ((($$061)) + 4|0);
  $21 = load4($20);
  $22 = $21 & 8;
  $23 = ($22|0)==(0);
  do {
   if ($23) {
    label = 10;
   } else {
    $24 = (__ZNK6b2Body13ShouldCollideEPKS_($19,$17)|0);
    if (!($24)) {
     $25 = ((($$061)) + 12|0);
     $26 = load4($25);
     __ZN16b2ContactManager7DestroyEP9b2Contact($0,$$061);
     $$0$be = $26;
     break;
    }
    $27 = load4($7);
    $28 = ($27|0)==(0|0);
    if (!($28)) {
     $29 = load4($27);
     $30 = ((($29)) + 8|0);
     $31 = load4($30);
     $32 = (FUNCTION_TABLE_iiii[$31 & 7]($27,$9,$11)|0);
     if (!($32)) {
      $33 = ((($$061)) + 12|0);
      $34 = load4($33);
      __ZN16b2ContactManager7DestroyEP9b2Contact($0,$$061);
      $$0$be = $34;
      break;
     }
    }
    $35 = load4($20);
    $36 = $35 & -9;
    store4($20,$36);
    label = 10;
   }
  } while(0);
  do {
   if ((label|0) == 10) {
    label = 0;
    $37 = ((($17)) + 4|0);
    $38 = load2($37);
    $39 = $38 & 2;
    $40 = ($39<<16>>16)==(0);
    if ($40) {
     $50 = 0;
    } else {
     $41 = load4($17);
     $42 = ($41|0)!=(0);
     $50 = $42;
    }
    $43 = ((($19)) + 4|0);
    $44 = load2($43);
    $45 = $44 & 2;
    $46 = ($45<<16>>16)==(0);
    if ($46) {
     $49 = 0;
    } else {
     $47 = load4($19);
     $48 = ($47|0)!=(0);
     $49 = $48;
    }
    $brmerge = $50 | $49;
    if (!($brmerge)) {
     $51 = ((($$061)) + 12|0);
     $52 = load4($51);
     $$0$be = $52;
     break;
    }
    $54 = ((($9)) + 24|0);
    $55 = load4($54);
    $56 = (((($55) + (($13*28)|0)|0)) + 24|0);
    $57 = load4($56);
    $58 = ((($11)) + 24|0);
    $59 = load4($58);
    $60 = (((($59) + (($15*28)|0)|0)) + 24|0);
    $61 = load4($60);
    $62 = ($57|0)>(-1);
    if (!($62)) {
     label = 19;
     break L4;
    }
    $63 = load4($4);
    $64 = ($63|0)>($57|0);
    if (!($64)) {
     label = 19;
     break L4;
    }
    $65 = load4($5);
    $66 = ($61|0)>(-1);
    $67 = ($63|0)>($61|0);
    $or$cond$i = $66 & $67;
    if (!($or$cond$i)) {
     label = 21;
     break L4;
    }
    $68 = (($65) + (($61*36)|0)|0);
    $69 = loadf($68);
    $70 = (((($65) + (($57*36)|0)|0)) + 8|0);
    $71 = loadf($70);
    $72 = Math_fround($69 - $71);
    $73 = (((($65) + (($61*36)|0)|0)) + 4|0);
    $74 = loadf($73);
    $75 = (((($65) + (($57*36)|0)|0)) + 12|0);
    $76 = loadf($75);
    $77 = Math_fround($74 - $76);
    $78 = (($65) + (($57*36)|0)|0);
    $79 = loadf($78);
    $80 = (((($65) + (($61*36)|0)|0)) + 8|0);
    $81 = loadf($80);
    $82 = Math_fround($79 - $81);
    $83 = (((($65) + (($57*36)|0)|0)) + 4|0);
    $84 = loadf($83);
    $85 = (((($65) + (($61*36)|0)|0)) + 12|0);
    $86 = loadf($85);
    $87 = Math_fround($84 - $86);
    $88 = $72 > Math_fround(0.0);
    $89 = $77 > Math_fround(0.0);
    $or$cond$i$i = $88 | $89;
    $90 = $82 > Math_fround(0.0);
    $or$cond34$i$i = $or$cond$i$i | $90;
    $91 = $87 > Math_fround(0.0);
    $or$cond36$i$i = $or$cond34$i$i | $91;
    if ($or$cond36$i$i) {
     $92 = ((($$061)) + 12|0);
     $93 = load4($92);
     __ZN16b2ContactManager7DestroyEP9b2Contact($0,$$061);
     $$0$be = $93;
     break;
    } else {
     $94 = load4($6);
     __ZN9b2Contact6UpdateEP17b2ContactListener($$061,$94);
     $95 = ((($$061)) + 12|0);
     $96 = load4($95);
     $$0$be = $96;
     break;
    }
   }
  } while(0);
  $53 = ($$0$be|0)==(0|0);
  if ($53) {
   label = 25;
   break;
  } else {
   $$061 = $$0$be;
  }
 }
 if ((label|0) == 19) {
  ___assert_fail((5125|0),(3177|0),159,(3211|0));
  // unreachable;
 }
 else if ((label|0) == 21) {
  ___assert_fail((5125|0),(3177|0),159,(3211|0));
  // unreachable;
 }
 else if ((label|0) == 25) {
  return;
 }
}
function __ZN16b2ContactManager15FindNewContactsEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN12b2BroadPhase11UpdatePairsI16b2ContactManagerEEvPT_($0,$0);
 return;
}
function __ZN12b2BroadPhase11UpdatePairsI16b2ContactManagerEEvPT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$1 = 0, $$03338 = 0, $$034$ph = 0, $$03437 = 0, $$1 = 0, $$pre = 0, $$pre40 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = ((($0)) + 52|0);
 store4($3,0);
 $4 = ((($0)) + 40|0);
 $5 = load4($4);
 $6 = ($5|0)>(0);
 do {
  if ($6) {
   $7 = ((($0)) + 32|0);
   $8 = ((($0)) + 56|0);
   $9 = ((($0)) + 12|0);
   $10 = ((($0)) + 4|0);
   $$03338 = 0;$60 = $5;
   while(1) {
    $19 = load4($7);
    $20 = (($19) + ($$03338<<2)|0);
    $21 = load4($20);
    store4($8,$21);
    $22 = ($21|0)==(-1);
    if ($22) {
     $30 = $60;
    } else {
     $23 = ($21|0)>(-1);
     if (!($23)) {
      label = 9;
      break;
     }
     $24 = load4($9);
     $25 = ($24|0)>($21|0);
     if (!($25)) {
      label = 9;
      break;
     }
     $26 = load4($10);
     $27 = (($26) + (($21*36)|0)|0);
     __ZNK13b2DynamicTree5QueryI12b2BroadPhaseEEvPT_RK6b2AABB($0,$0,$27);
     $$pre = load4($4);
     $30 = $$pre;
    }
    $28 = (($$03338) + 1)|0;
    $29 = ($28|0)<($30|0);
    if ($29) {
     $$03338 = $28;$60 = $30;
    } else {
     label = 3;
     break;
    }
   }
   if ((label|0) == 3) {
    $$pre40 = load4($3);
    $14 = $$pre40;
    break;
   }
   else if ((label|0) == 9) {
    ___assert_fail((5125|0),(3177|0),159,(3211|0));
    // unreachable;
   }
  } else {
   $14 = 0;
  }
 } while(0);
 store4($4,0);
 $11 = ((($0)) + 44|0);
 $12 = load4($11);
 $13 = (($12) + (($14*12)|0)|0);
 store4($2,3);
 __ZNSt3__26__sortIRPFbRK6b2PairS3_EPS1_EEvT0_S8_T_($12,$13,$2);
 $15 = load4($3);
 $16 = ($15|0)>(0);
 if (!($16)) {
  STACKTOP = sp;return;
 }
 $17 = ((($0)) + 12|0);
 $18 = ((($0)) + 4|0);
 $$03437 = 0;
 while(1) {
  $33 = load4($11);
  $34 = (($33) + (($$03437*12)|0)|0);
  $35 = load4($34);
  $36 = ($35|0)>(-1);
  if (!($36)) {
   label = 15;
   break;
  }
  $37 = load4($17);
  $38 = ($37|0)>($35|0);
  if (!($38)) {
   label = 15;
   break;
  }
  $39 = load4($18);
  $40 = (((($33) + (($$03437*12)|0)|0)) + 4|0);
  $41 = load4($40);
  $42 = ($41|0)>(-1);
  $43 = ($37|0)>($41|0);
  $or$cond = $42 & $43;
  if (!($or$cond)) {
   label = 17;
   break;
  }
  $44 = (((($39) + (($35*36)|0)|0)) + 16|0);
  $45 = load4($44);
  $46 = (((($39) + (($41*36)|0)|0)) + 16|0);
  $47 = load4($46);
  __ZN16b2ContactManager7AddPairEPvS0_($1,$45,$47);
  $48 = (($$03437) + 1)|0;
  $32 = load4($3);
  $$1 = $48;
  while(1) {
   $49 = ($$1|0)<($32|0);
   if (!($49)) {
    $$034$ph = $$1;
    break;
   }
   $50 = load4($11);
   $51 = (($50) + (($$1*12)|0)|0);
   $52 = load4($51);
   $53 = load4($34);
   $54 = ($52|0)==($53|0);
   if (!($54)) {
    $$034$ph = $$1;
    break;
   }
   $55 = (((($50) + (($$1*12)|0)|0)) + 4|0);
   $56 = load4($55);
   $57 = load4($40);
   $58 = ($56|0)==($57|0);
   $59 = $58&1;
   $$$1 = (($59) + ($$1))|0;
   if ($58) {
    $$1 = $$$1;
   } else {
    $$034$ph = $$$1;
    break;
   }
  }
  $31 = ($$034$ph|0)<($32|0);
  if ($31) {
   $$03437 = $$034$ph;
  } else {
   label = 22;
   break;
  }
 }
 if ((label|0) == 15) {
  ___assert_fail((5125|0),(3177|0),153,(3222|0));
  // unreachable;
 }
 else if ((label|0) == 17) {
  ___assert_fail((5125|0),(3177|0),153,(3222|0));
  // unreachable;
 }
 else if ((label|0) == 22) {
  STACKTOP = sp;return;
 }
}
function __Z14b2PairLessThanRK6b2PairS1_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = load4($1);
 $4 = ($2|0)<($3|0);
 if ($4) {
  $$0 = 1;
  return ($$0|0);
 }
 $5 = ($2|0)==($3|0);
 if (!($5)) {
  $$0 = 0;
  return ($$0|0);
 }
 $6 = ((($0)) + 4|0);
 $7 = load4($6);
 $8 = ((($1)) + 4|0);
 $9 = load4($8);
 $10 = ($7|0)<($9|0);
 $$0 = $10;
 return ($$0|0);
}
function __ZNSt3__26__sortIRPFbRK6b2PairS3_EPS1_EEvT0_S8_T_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$0174 = 0, $$0 = 0, $$0$ph = 0, $$0154 = 0, $$0160284 = 0, $$0167 = 0, $$0174 = 0, $$0180$ph = 0, $$1 = 0, $$1155 = 0, $$1161 = 0, $$2156 = 0, $$2162 = 0, $$2176 = 0, $$3157 = 0, $$3163 = 0, $$3170 = 0, $$4158 = 0, $$4164 = 0, $$4171 = 0;
 var $$5159 = 0, $$5165 = 0, $$5172 = 0, $$6166 = 0, $$6173 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
 var $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0;
 var $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0;
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0;
 var $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $$0$ph = $0;$$0180$ph = $1;
 L1: while(1) {
  $4 = $$0180$ph;
  $5 = ((($$0180$ph)) + -12|0);
  $$0 = $$0$ph;
  while(1) {
   $$1 = $$0;
   L5: while(1) {
    $6 = $$1;
    $7 = (($4) - ($6))|0;
    $8 = (($7|0) / 12)&-1;
    switch ($8|0) {
    case 2:  {
     label = 5;
     break L1;
     break;
    }
    case 3:  {
     label = 7;
     break L1;
     break;
    }
    case 4:  {
     label = 15;
     break L1;
     break;
    }
    case 5:  {
     label = 16;
     break L1;
     break;
    }
    case 1: case 0:  {
     label = 68;
     break L1;
     break;
    }
    default: {
    }
    }
    $33 = ($7|0)<(372);
    if ($33) {
     label = 22;
     break L1;
    }
    $34 = ($7|0)>(11988);
    $35 = (($7>>>0) / 24)&-1;
    $36 = (($$1) + (($35*12)|0)|0);
    do {
     if ($34) {
      $37 = (($7>>>0) / 48)&-1;
      $38 = (($$1) + (($37*12)|0)|0);
      $39 = (($36) + (($37*12)|0)|0);
      $40 = (__ZNSt3__27__sort4IRPFbRK6b2PairS3_EPS1_EEjT0_S8_S8_S8_T_($$1,$38,$36,$39,$2)|0);
      $41 = load4($2);
      $42 = (FUNCTION_TABLE_iii[$41 & 3]($5,$39)|0);
      if ($42) {
       ; store8($3,load8($39,4),4); store4($3+8 | 0,load4($39+8 | 0,4),4);
       ; store8($39,load8($5,4),4); store4($39+8 | 0,load4($5+8 | 0,4),4);
       ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
       $43 = (($40) + 1)|0;
       $44 = load4($2);
       $45 = (FUNCTION_TABLE_iii[$44 & 3]($39,$36)|0);
       if ($45) {
        ; store8($3,load8($36,4),4); store4($3+8 | 0,load4($36+8 | 0,4),4);
        ; store8($36,load8($39,4),4); store4($36+8 | 0,load4($39+8 | 0,4),4);
        ; store8($39,load8($3,4),4); store4($39+8 | 0,load4($3+8 | 0,4),4);
        $46 = (($40) + 2)|0;
        $47 = load4($2);
        $48 = (FUNCTION_TABLE_iii[$47 & 3]($36,$38)|0);
        if ($48) {
         ; store8($3,load8($38,4),4); store4($3+8 | 0,load4($38+8 | 0,4),4);
         ; store8($38,load8($36,4),4); store4($38+8 | 0,load4($36+8 | 0,4),4);
         ; store8($36,load8($3,4),4); store4($36+8 | 0,load4($3+8 | 0,4),4);
         $49 = (($40) + 3)|0;
         $50 = load4($2);
         $51 = (FUNCTION_TABLE_iii[$50 & 3]($38,$$1)|0);
         if ($51) {
          ; store8($3,load8($$1,4),4); store4($3+8 | 0,load4($$1+8 | 0,4),4);
          ; store8($$1,load8($38,4),4); store4($$1+8 | 0,load4($38+8 | 0,4),4);
          ; store8($38,load8($3,4),4); store4($38+8 | 0,load4($3+8 | 0,4),4);
          $52 = (($40) + 4)|0;
          $$0167 = $52;
         } else {
          $$0167 = $49;
         }
        } else {
         $$0167 = $46;
        }
       } else {
        $$0167 = $43;
       }
      } else {
       $$0167 = $40;
      }
     } else {
      $53 = load4($2);
      $54 = (FUNCTION_TABLE_iii[$53 & 3]($36,$$1)|0);
      $55 = load4($2);
      $56 = (FUNCTION_TABLE_iii[$55 & 3]($5,$36)|0);
      if (!($54)) {
       if (!($56)) {
        $$0167 = 0;
        break;
       }
       ; store8($3,load8($36,4),4); store4($3+8 | 0,load4($36+8 | 0,4),4);
       ; store8($36,load8($5,4),4); store4($36+8 | 0,load4($5+8 | 0,4),4);
       ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
       $57 = load4($2);
       $58 = (FUNCTION_TABLE_iii[$57 & 3]($36,$$1)|0);
       if (!($58)) {
        $$0167 = 1;
        break;
       }
       ; store8($3,load8($$1,4),4); store4($3+8 | 0,load4($$1+8 | 0,4),4);
       ; store8($$1,load8($36,4),4); store4($$1+8 | 0,load4($36+8 | 0,4),4);
       ; store8($36,load8($3,4),4); store4($36+8 | 0,load4($3+8 | 0,4),4);
       $$0167 = 2;
       break;
      }
      if ($56) {
       ; store8($3,load8($$1,4),4); store4($3+8 | 0,load4($$1+8 | 0,4),4);
       ; store8($$1,load8($5,4),4); store4($$1+8 | 0,load4($5+8 | 0,4),4);
       ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
       $$0167 = 1;
       break;
      }
      ; store8($3,load8($$1,4),4); store4($3+8 | 0,load4($$1+8 | 0,4),4);
      ; store8($$1,load8($36,4),4); store4($$1+8 | 0,load4($36+8 | 0,4),4);
      ; store8($36,load8($3,4),4); store4($36+8 | 0,load4($3+8 | 0,4),4);
      $59 = load4($2);
      $60 = (FUNCTION_TABLE_iii[$59 & 3]($5,$36)|0);
      if ($60) {
       ; store8($3,load8($36,4),4); store4($3+8 | 0,load4($36+8 | 0,4),4);
       ; store8($36,load8($5,4),4); store4($36+8 | 0,load4($5+8 | 0,4),4);
       ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
       $$0167 = 2;
      } else {
       $$0167 = 1;
      }
     }
    } while(0);
    $61 = load4($2);
    $62 = (FUNCTION_TABLE_iii[$61 & 3]($$1,$36)|0);
    if ($62) {
     $$3157 = $5;$$3170 = $$0167;
     break;
    } else {
     $$0154 = $5;
    }
    while(1) {
     $63 = ((($$0154)) + -12|0);
     $64 = ($$1|0)==($63|0);
     if ($64) {
      break;
     }
     $82 = load4($2);
     $83 = (FUNCTION_TABLE_iii[$82 & 3]($63,$36)|0);
     if ($83) {
      label = 51;
      break L5;
     } else {
      $$0154 = $63;
     }
    }
    $65 = ((($$1)) + 12|0);
    $66 = load4($2);
    $67 = (FUNCTION_TABLE_iii[$66 & 3]($$1,$5)|0);
    if ($67) {
     $$1161 = $65;
    } else {
     $68 = ($65|0)==($5|0);
     if ($68) {
      label = 68;
      break L1;
     } else {
      $$0160284 = $65;
     }
     while(1) {
      $69 = load4($2);
      $70 = (FUNCTION_TABLE_iii[$69 & 3]($$1,$$0160284)|0);
      if ($70) {
       break;
      }
      $72 = ((($$0160284)) + 12|0);
      $73 = ($72|0)==($5|0);
      if ($73) {
       label = 68;
       break L1;
      } else {
       $$0160284 = $72;
      }
     }
     ; store8($3,load8($$0160284,4),4); store4($3+8 | 0,load4($$0160284+8 | 0,4),4);
     ; store8($$0160284,load8($5,4),4); store4($$0160284+8 | 0,load4($5+8 | 0,4),4);
     ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
     $71 = ((($$0160284)) + 12|0);
     $$1161 = $71;
    }
    $74 = ($$1161|0)==($5|0);
    if ($74) {
     label = 68;
     break L1;
    } else {
     $$1155 = $5;$$2162 = $$1161;
    }
    while(1) {
     $$3163 = $$2162;
     while(1) {
      $75 = load4($2);
      $76 = (FUNCTION_TABLE_iii[$75 & 3]($$1,$$3163)|0);
      $77 = ((($$3163)) + 12|0);
      if ($76) {
       $$2156 = $$1155;
       break;
      } else {
       $$3163 = $77;
      }
     }
     while(1) {
      $78 = load4($2);
      $79 = ((($$2156)) + -12|0);
      $80 = (FUNCTION_TABLE_iii[$78 & 3]($$1,$79)|0);
      if ($80) {
       $$2156 = $79;
      } else {
       break;
      }
     }
     $81 = ($$3163>>>0)<($79>>>0);
     if (!($81)) {
      $$1 = $$3163;
      continue L5;
     }
     ; store8($3,load8($$3163,4),4); store4($3+8 | 0,load4($$3163+8 | 0,4),4);
     ; store8($$3163,load8($79,4),4); store4($$3163+8 | 0,load4($79+8 | 0,4),4);
     ; store8($79,load8($3,4),4); store4($79+8 | 0,load4($3+8 | 0,4),4);
     $$1155 = $79;$$2162 = $77;
    }
   }
   if ((label|0) == 51) {
    label = 0;
    ; store8($3,load8($$1,4),4); store4($3+8 | 0,load4($$1+8 | 0,4),4);
    ; store8($$1,load8($63,4),4); store4($$1+8 | 0,load4($63+8 | 0,4),4);
    ; store8($63,load8($3,4),4); store4($63+8 | 0,load4($3+8 | 0,4),4);
    $84 = (($$0167) + 1)|0;
    $$3157 = $63;$$3170 = $84;
   }
   $85 = ((($$1)) + 12|0);
   $86 = ($85>>>0)<($$3157>>>0);
   L48: do {
    if ($86) {
     $$0174 = $36;$$4158 = $$3157;$$4164 = $85;$$4171 = $$3170;
     while(1) {
      $$5165 = $$4164;
      while(1) {
       $87 = load4($2);
       $88 = (FUNCTION_TABLE_iii[$87 & 3]($$5165,$$0174)|0);
       $89 = ((($$5165)) + 12|0);
       if ($88) {
        $$5165 = $89;
       } else {
        $$5159 = $$4158;
        break;
       }
      }
      while(1) {
       $90 = load4($2);
       $91 = ((($$5159)) + -12|0);
       $92 = (FUNCTION_TABLE_iii[$90 & 3]($91,$$0174)|0);
       if ($92) {
        break;
       } else {
        $$5159 = $91;
       }
      }
      $93 = ($$5165>>>0)>($91>>>0);
      if ($93) {
       $$2176 = $$0174;$$5172 = $$4171;$$6166 = $$5165;
       break L48;
      }
      ; store8($3,load8($$5165,4),4); store4($3+8 | 0,load4($$5165+8 | 0,4),4);
      ; store8($$5165,load8($91,4),4); store4($$5165+8 | 0,load4($91+8 | 0,4),4);
      ; store8($91,load8($3,4),4); store4($91+8 | 0,load4($3+8 | 0,4),4);
      $94 = (($$4171) + 1)|0;
      $95 = ($$0174|0)==($$5165|0);
      $$$0174 = $95 ? $91 : $$0174;
      $$0174 = $$$0174;$$4158 = $91;$$4164 = $89;$$4171 = $94;
     }
    } else {
     $$2176 = $36;$$5172 = $$3170;$$6166 = $85;
    }
   } while(0);
   $96 = ($$6166|0)==($$2176|0);
   if ($96) {
    $$6173 = $$5172;
   } else {
    $97 = load4($2);
    $98 = (FUNCTION_TABLE_iii[$97 & 3]($$2176,$$6166)|0);
    if ($98) {
     ; store8($3,load8($$6166,4),4); store4($3+8 | 0,load4($$6166+8 | 0,4),4);
     ; store8($$6166,load8($$2176,4),4); store4($$6166+8 | 0,load4($$2176+8 | 0,4),4);
     ; store8($$2176,load8($3,4),4); store4($$2176+8 | 0,load4($3+8 | 0,4),4);
     $99 = (($$5172) + 1)|0;
     $$6173 = $99;
    } else {
     $$6173 = $$5172;
    }
   }
   $100 = ($$6173|0)==(0);
   if ($100) {
    $101 = (__ZNSt3__227__insertion_sort_incompleteIRPFbRK6b2PairS3_EPS1_EEbT0_S8_T_($$1,$$6166,$2)|0);
    $102 = ((($$6166)) + 12|0);
    $103 = (__ZNSt3__227__insertion_sort_incompleteIRPFbRK6b2PairS3_EPS1_EEbT0_S8_T_($102,$$0180$ph,$2)|0);
    if ($103) {
     label = 67;
     break;
    }
    if ($101) {
     $$0 = $102;
     continue;
    }
   }
   $104 = $$6166;
   $105 = (($104) - ($6))|0;
   $106 = (($4) - ($104))|0;
   $107 = ($105|0)<($106|0);
   if (!($107)) {
    label = 66;
    break;
   }
   __ZNSt3__26__sortIRPFbRK6b2PairS3_EPS1_EEvT0_S8_T_($$1,$$6166,$2);
   $108 = ((($$6166)) + 12|0);
   $$0 = $108;
  }
  if ((label|0) == 66) {
   label = 0;
   $109 = ((($$6166)) + 12|0);
   __ZNSt3__26__sortIRPFbRK6b2PairS3_EPS1_EEvT0_S8_T_($109,$$0180$ph,$2);
   $$0$ph = $$1;$$0180$ph = $$6166;
   continue;
  }
  else if ((label|0) == 67) {
   label = 0;
   if ($101) {
    label = 68;
    break;
   } else {
    $$0$ph = $$1;$$0180$ph = $$6166;
    continue;
   }
  }
 }
 if ((label|0) == 5) {
  $9 = load4($2);
  $10 = (FUNCTION_TABLE_iii[$9 & 3]($5,$$1)|0);
  if (!($10)) {
   STACKTOP = sp;return;
  }
  ; store8($3,load8($$1,4),4); store4($3+8 | 0,load4($$1+8 | 0,4),4);
  ; store8($$1,load8($5,4),4); store4($$1+8 | 0,load4($5+8 | 0,4),4);
  ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
  STACKTOP = sp;return;
 }
 else if ((label|0) == 7) {
  $11 = ((($$1)) + 12|0);
  $12 = load4($2);
  $13 = (FUNCTION_TABLE_iii[$12 & 3]($11,$$1)|0);
  $14 = load4($2);
  $15 = (FUNCTION_TABLE_iii[$14 & 3]($5,$11)|0);
  if (!($13)) {
   if (!($15)) {
    STACKTOP = sp;return;
   }
   ; store8($3,load8($11,4),4); store4($3+8 | 0,load4($11+8 | 0,4),4);
   ; store8($11,load8($5,4),4); store4($11+8 | 0,load4($5+8 | 0,4),4);
   ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
   $16 = load4($2);
   $17 = (FUNCTION_TABLE_iii[$16 & 3]($11,$$1)|0);
   if (!($17)) {
    STACKTOP = sp;return;
   }
   ; store8($3,load8($$1,4),4); store4($3+8 | 0,load4($$1+8 | 0,4),4);
   ; store8($$1,load8($11,4),4); store4($$1+8 | 0,load4($11+8 | 0,4),4);
   ; store8($11,load8($3,4),4); store4($11+8 | 0,load4($3+8 | 0,4),4);
   STACKTOP = sp;return;
  }
  if ($15) {
   ; store8($3,load8($$1,4),4); store4($3+8 | 0,load4($$1+8 | 0,4),4);
   ; store8($$1,load8($5,4),4); store4($$1+8 | 0,load4($5+8 | 0,4),4);
   ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
   STACKTOP = sp;return;
  }
  ; store8($3,load8($$1,4),4); store4($3+8 | 0,load4($$1+8 | 0,4),4);
  ; store8($$1,load8($11,4),4); store4($$1+8 | 0,load4($11+8 | 0,4),4);
  ; store8($11,load8($3,4),4); store4($11+8 | 0,load4($3+8 | 0,4),4);
  $18 = load4($2);
  $19 = (FUNCTION_TABLE_iii[$18 & 3]($5,$11)|0);
  if (!($19)) {
   STACKTOP = sp;return;
  }
  ; store8($3,load8($11,4),4); store4($3+8 | 0,load4($11+8 | 0,4),4);
  ; store8($11,load8($5,4),4); store4($11+8 | 0,load4($5+8 | 0,4),4);
  ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
  STACKTOP = sp;return;
 }
 else if ((label|0) == 15) {
  $20 = ((($$1)) + 12|0);
  $21 = ((($$1)) + 24|0);
  (__ZNSt3__27__sort4IRPFbRK6b2PairS3_EPS1_EEjT0_S8_S8_S8_T_($$1,$20,$21,$5,$2)|0);
  STACKTOP = sp;return;
 }
 else if ((label|0) == 16) {
  $22 = ((($$1)) + 12|0);
  $23 = ((($$1)) + 24|0);
  $24 = ((($$1)) + 36|0);
  (__ZNSt3__27__sort4IRPFbRK6b2PairS3_EPS1_EEjT0_S8_S8_S8_T_($$1,$22,$23,$24,$2)|0);
  $25 = load4($2);
  $26 = (FUNCTION_TABLE_iii[$25 & 3]($5,$24)|0);
  if (!($26)) {
   STACKTOP = sp;return;
  }
  ; store8($3,load8($24,4),4); store4($3+8 | 0,load4($24+8 | 0,4),4);
  ; store8($24,load8($5,4),4); store4($24+8 | 0,load4($5+8 | 0,4),4);
  ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
  $27 = load4($2);
  $28 = (FUNCTION_TABLE_iii[$27 & 3]($24,$23)|0);
  if (!($28)) {
   STACKTOP = sp;return;
  }
  ; store8($3,load8($23,4),4); store4($3+8 | 0,load4($23+8 | 0,4),4);
  ; store8($23,load8($24,4),4); store4($23+8 | 0,load4($24+8 | 0,4),4);
  ; store8($24,load8($3,4),4); store4($24+8 | 0,load4($3+8 | 0,4),4);
  $29 = load4($2);
  $30 = (FUNCTION_TABLE_iii[$29 & 3]($23,$22)|0);
  if (!($30)) {
   STACKTOP = sp;return;
  }
  ; store8($3,load8($22,4),4); store4($3+8 | 0,load4($22+8 | 0,4),4);
  ; store8($22,load8($23,4),4); store4($22+8 | 0,load4($23+8 | 0,4),4);
  ; store8($23,load8($3,4),4); store4($23+8 | 0,load4($3+8 | 0,4),4);
  $31 = load4($2);
  $32 = (FUNCTION_TABLE_iii[$31 & 3]($22,$$1)|0);
  if (!($32)) {
   STACKTOP = sp;return;
  }
  ; store8($3,load8($$1,4),4); store4($3+8 | 0,load4($$1+8 | 0,4),4);
  ; store8($$1,load8($22,4),4); store4($$1+8 | 0,load4($22+8 | 0,4),4);
  ; store8($22,load8($3,4),4); store4($22+8 | 0,load4($3+8 | 0,4),4);
  STACKTOP = sp;return;
 }
 else if ((label|0) == 22) {
  __ZNSt3__218__insertion_sort_3IRPFbRK6b2PairS3_EPS1_EEvT0_S8_T_($$1,$$0180$ph,$2);
  STACKTOP = sp;return;
 }
 else if ((label|0) == 68) {
  STACKTOP = sp;return;
 }
}
function __ZNK13b2DynamicTree5QueryI12b2BroadPhaseEEvPT_RK6b2AABB($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pr = 0, $$pr$pre = 0, $$pre = 0, $$pre33 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = Math_fround(0), $21 = 0, $22 = Math_fround(0), $23 = Math_fround(0), $24 = Math_fround(0), $25 = 0;
 var $26 = Math_fround(0), $27 = Math_fround(0), $28 = 0, $29 = Math_fround(0), $3 = 0, $30 = Math_fround(0), $31 = Math_fround(0), $32 = 0, $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $8 = 0, $9 = 0, $or$cond$i = 0, $or$cond34$i = 0, $or$cond36$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1040|0;
 $3 = sp;
 $4 = ((($3)) + 4|0);
 store4($3,$4);
 $5 = ((($3)) + 1028|0);
 $6 = ((($3)) + 1032|0);
 store4($6,256);
 $7 = load4($0);
 store4($4,$7);
 store4($5,1);
 $8 = ((($0)) + 4|0);
 $9 = ((($2)) + 4|0);
 $10 = ((($2)) + 8|0);
 $11 = ((($2)) + 12|0);
 $14 = 1;$16 = $4;
 L1: while(1) {
  $13 = (($14) + -1)|0;
  store4($5,$13);
  $15 = (($16) + ($13<<2)|0);
  $17 = load4($15);
  $18 = ($17|0)==(-1);
  do {
   if ($18) {
    $$pr = $13;
   } else {
    $19 = load4($8);
    $20 = loadf($2);
    $21 = (((($19) + (($17*36)|0)|0)) + 8|0);
    $22 = loadf($21);
    $23 = Math_fround($20 - $22);
    $24 = loadf($9);
    $25 = (((($19) + (($17*36)|0)|0)) + 12|0);
    $26 = loadf($25);
    $27 = Math_fround($24 - $26);
    $28 = (($19) + (($17*36)|0)|0);
    $29 = loadf($28);
    $30 = loadf($10);
    $31 = Math_fround($29 - $30);
    $32 = (((($19) + (($17*36)|0)|0)) + 4|0);
    $33 = loadf($32);
    $34 = loadf($11);
    $35 = Math_fround($33 - $34);
    $36 = $23 > Math_fround(0.0);
    $37 = $27 > Math_fround(0.0);
    $or$cond$i = $36 | $37;
    $38 = $31 > Math_fround(0.0);
    $or$cond34$i = $or$cond$i | $38;
    $39 = $35 > Math_fround(0.0);
    $or$cond36$i = $or$cond34$i | $39;
    if ($or$cond36$i) {
     $$pr = $13;
    } else {
     $40 = (((($19) + (($17*36)|0)|0)) + 24|0);
     $41 = load4($40);
     $42 = ($41|0)==(-1);
     if ($42) {
      $43 = (__ZN12b2BroadPhase13QueryCallbackEi($1,$17)|0);
      if (!($43)) {
       break L1;
      }
      $$pr$pre = load4($5);
      $$pr = $$pr$pre;
      break;
     }
     $44 = load4($6);
     $45 = ($13|0)==($44|0);
     if ($45) {
      $46 = $13 << 1;
      store4($6,$46);
      $47 = $13 << 3;
      $48 = (__Z7b2Alloci($47)|0);
      store4($3,$48);
      $49 = load4($5);
      $50 = $49 << 2;
      _memcpy(($48|0),($16|0),($50|0))|0;
      $51 = ($16|0)==($4|0);
      if (!($51)) {
       __Z6b2FreePv($16);
      }
     }
     $52 = load4($40);
     $53 = load4($5);
     $54 = load4($3);
     $55 = (($54) + ($53<<2)|0);
     store4($55,$52);
     $56 = load4($5);
     $57 = (($56) + 1)|0;
     store4($5,$57);
     $58 = (((($19) + (($17*36)|0)|0)) + 28|0);
     $59 = load4($6);
     $60 = ($57|0)==($59|0);
     if ($60) {
      $61 = $57 << 1;
      store4($6,$61);
      $62 = $57 << 3;
      $63 = (__Z7b2Alloci($62)|0);
      store4($3,$63);
      $64 = load4($5);
      $65 = $64 << 2;
      _memcpy(($63|0),($54|0),($65|0))|0;
      $66 = ($54|0)==($4|0);
      if (!($66)) {
       __Z6b2FreePv($54);
      }
     }
     $67 = load4($58);
     $68 = load4($5);
     $69 = load4($3);
     $70 = (($69) + ($68<<2)|0);
     store4($70,$67);
     $71 = load4($5);
     $72 = (($71) + 1)|0;
     store4($5,$72);
     $$pr = $72;
    }
   }
  } while(0);
  $12 = ($$pr|0)>(0);
  if (!($12)) {
   break;
  }
  $$pre = load4($3);
  $14 = $$pr;$16 = $$pre;
 }
 $$pre33 = load4($3);
 $73 = ($$pre33|0)==($4|0);
 if ($73) {
  STACKTOP = sp;return;
 }
 __Z6b2FreePv($$pre33);
 store4($3,0);
 STACKTOP = sp;return;
}
function __ZN16b2ContactManager7AddPairEPvS0_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$0115 = 0, $$0116 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0;
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0;
 var $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond109 = 0, $or$cond110 = 0, $or$cond111 = 0, $or$cond112 = 0, $or$cond113 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($1)) + 16|0);
 $4 = load4($3);
 $5 = ((($2)) + 16|0);
 $6 = load4($5);
 $7 = ((($1)) + 20|0);
 $8 = load4($7);
 $9 = ((($2)) + 20|0);
 $10 = load4($9);
 $11 = ((($4)) + 8|0);
 $12 = load4($11);
 $13 = ((($6)) + 8|0);
 $14 = load4($13);
 $15 = ($12|0)==($14|0);
 if ($15) {
  return;
 }
 $16 = ((($14)) + 112|0);
 $$0115 = load4($16);
 $17 = ($$0115|0)==(0|0);
 L4: do {
  if (!($17)) {
   $$0116 = $$0115;
   while(1) {
    $18 = load4($$0116);
    $19 = ($18|0)==($12|0);
    if ($19) {
     $20 = ((($$0116)) + 4|0);
     $21 = load4($20);
     $22 = ((($21)) + 48|0);
     $23 = load4($22);
     $24 = ((($21)) + 52|0);
     $25 = load4($24);
     $26 = ((($21)) + 56|0);
     $27 = load4($26);
     $28 = ((($21)) + 60|0);
     $29 = load4($28);
     $30 = ($23|0)==($4|0);
     $31 = ($25|0)==($6|0);
     $or$cond = $30 & $31;
     $32 = ($27|0)==($8|0);
     $or$cond109 = $or$cond & $32;
     $33 = ($29|0)==($10|0);
     $or$cond110 = $or$cond109 & $33;
     if ($or$cond110) {
      label = 22;
      break;
     }
     $34 = ($23|0)==($6|0);
     $35 = ($25|0)==($4|0);
     $or$cond111 = $34 & $35;
     $36 = ($27|0)==($10|0);
     $or$cond112 = $or$cond111 & $36;
     $37 = ($29|0)==($8|0);
     $or$cond113 = $or$cond112 & $37;
     if ($or$cond113) {
      label = 22;
      break;
     }
    }
    $38 = ((($$0116)) + 12|0);
    $$0 = load4($38);
    $39 = ($$0|0)==(0|0);
    if ($39) {
     break L4;
    } else {
     $$0116 = $$0;
    }
   }
   if ((label|0) == 22) {
    return;
   }
  }
 } while(0);
 $40 = (__ZNK6b2Body13ShouldCollideEPKS_($14,$12)|0);
 if (!($40)) {
  return;
 }
 $41 = ((($0)) + 68|0);
 $42 = load4($41);
 $43 = ($42|0)==(0|0);
 if (!($43)) {
  $44 = load4($42);
  $45 = ((($44)) + 8|0);
  $46 = load4($45);
  $47 = (FUNCTION_TABLE_iiii[$46 & 7]($42,$4,$6)|0);
  if (!($47)) {
   return;
  }
 }
 $48 = ((($0)) + 76|0);
 $49 = load4($48);
 $50 = (__ZN9b2Contact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator($4,$8,$6,$10,$49)|0);
 $51 = ($50|0)==(0|0);
 if ($51) {
  return;
 }
 $52 = ((($50)) + 48|0);
 $53 = load4($52);
 $54 = ((($50)) + 52|0);
 $55 = load4($54);
 $56 = ((($53)) + 8|0);
 $57 = load4($56);
 $58 = ((($55)) + 8|0);
 $59 = load4($58);
 $60 = ((($50)) + 8|0);
 store4($60,0);
 $61 = ((($0)) + 60|0);
 $62 = load4($61);
 $63 = ((($50)) + 12|0);
 store4($63,$62);
 $64 = ($62|0)==(0);
 if (!($64)) {
  $65 = $62;
  $66 = ((($65)) + 8|0);
  store4($66,$50);
 }
 store4($61,$50);
 $67 = ((($50)) + 16|0);
 $68 = ((($50)) + 20|0);
 store4($68,$50);
 store4($67,$59);
 $69 = ((($50)) + 24|0);
 store4($69,0);
 $70 = ((($57)) + 112|0);
 $71 = load4($70);
 $72 = ((($50)) + 28|0);
 store4($72,$71);
 $73 = ($71|0)==(0);
 if (!($73)) {
  $74 = $71;
  $75 = ((($74)) + 8|0);
  store4($75,$67);
 }
 store4($70,$67);
 $76 = ((($50)) + 32|0);
 $77 = ((($50)) + 36|0);
 store4($77,$50);
 store4($76,$57);
 $78 = ((($50)) + 40|0);
 store4($78,0);
 $79 = ((($59)) + 112|0);
 $80 = load4($79);
 $81 = ((($50)) + 44|0);
 store4($81,$80);
 $82 = ($80|0)==(0);
 if (!($82)) {
  $83 = $80;
  $84 = ((($83)) + 8|0);
  store4($84,$76);
 }
 store4($79,$76);
 $85 = ((($57)) + 4|0);
 $86 = load2($85);
 $87 = $86&65535;
 $88 = $87 & 2;
 $89 = ($88|0)==(0);
 if ($89) {
  $90 = $87 | 2;
  $91 = ((($57)) + 144|0);
  $92 = $90&65535;
  store2($85,$92);
  storef($91,Math_fround(0.0));
 }
 $93 = ((($59)) + 4|0);
 $94 = load2($93);
 $95 = $94&65535;
 $96 = $95 & 2;
 $97 = ($96|0)==(0);
 if ($97) {
  $98 = $95 | 2;
  $99 = ((($59)) + 144|0);
  $100 = $98&65535;
  store2($93,$100);
  storef($99,Math_fround(0.0));
 }
 $101 = ((($0)) + 64|0);
 $102 = load4($101);
 $103 = (($102) + 1)|0;
 store4($101,$103);
 return;
}
function ___clang_call_terminate($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 (___cxa_begin_catch(($0|0))|0);
 __ZSt9terminatev();
 // unreachable;
}
function __ZNSt3__27__sort4IRPFbRK6b2PairS3_EPS1_EEjT0_S8_S8_S8_T_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0 = 0, $$026$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $5 = sp;
 $6 = load4($4);
 $7 = (FUNCTION_TABLE_iii[$6 & 3]($1,$0)|0);
 $8 = load4($4);
 $9 = (FUNCTION_TABLE_iii[$8 & 3]($2,$1)|0);
 do {
  if ($7) {
   if ($9) {
    ; store8($5,load8($0,4),4); store4($5+8 | 0,load4($0+8 | 0,4),4);
    ; store8($0,load8($2,4),4); store4($0+8 | 0,load4($2+8 | 0,4),4);
    ; store8($2,load8($5,4),4); store4($2+8 | 0,load4($5+8 | 0,4),4);
    $$026$i = 1;
    break;
   }
   ; store8($5,load8($0,4),4); store4($5+8 | 0,load4($0+8 | 0,4),4);
   ; store8($0,load8($1,4),4); store4($0+8 | 0,load4($1+8 | 0,4),4);
   ; store8($1,load8($5,4),4); store4($1+8 | 0,load4($5+8 | 0,4),4);
   $12 = load4($4);
   $13 = (FUNCTION_TABLE_iii[$12 & 3]($2,$1)|0);
   if ($13) {
    ; store8($5,load8($1,4),4); store4($5+8 | 0,load4($1+8 | 0,4),4);
    ; store8($1,load8($2,4),4); store4($1+8 | 0,load4($2+8 | 0,4),4);
    ; store8($2,load8($5,4),4); store4($2+8 | 0,load4($5+8 | 0,4),4);
    $$026$i = 2;
   } else {
    $$026$i = 1;
   }
  } else {
   if ($9) {
    ; store8($5,load8($1,4),4); store4($5+8 | 0,load4($1+8 | 0,4),4);
    ; store8($1,load8($2,4),4); store4($1+8 | 0,load4($2+8 | 0,4),4);
    ; store8($2,load8($5,4),4); store4($2+8 | 0,load4($5+8 | 0,4),4);
    $10 = load4($4);
    $11 = (FUNCTION_TABLE_iii[$10 & 3]($1,$0)|0);
    if ($11) {
     ; store8($5,load8($0,4),4); store4($5+8 | 0,load4($0+8 | 0,4),4);
     ; store8($0,load8($1,4),4); store4($0+8 | 0,load4($1+8 | 0,4),4);
     ; store8($1,load8($5,4),4); store4($1+8 | 0,load4($5+8 | 0,4),4);
     $$026$i = 2;
    } else {
     $$026$i = 1;
    }
   } else {
    $$026$i = 0;
   }
  }
 } while(0);
 $14 = load4($4);
 $15 = (FUNCTION_TABLE_iii[$14 & 3]($3,$2)|0);
 if (!($15)) {
  $$0 = $$026$i;
  STACKTOP = sp;return ($$0|0);
 }
 ; store8($5,load8($2,4),4); store4($5+8 | 0,load4($2+8 | 0,4),4);
 ; store8($2,load8($3,4),4); store4($2+8 | 0,load4($3+8 | 0,4),4);
 ; store8($3,load8($5,4),4); store4($3+8 | 0,load4($5+8 | 0,4),4);
 $16 = (($$026$i) + 1)|0;
 $17 = load4($4);
 $18 = (FUNCTION_TABLE_iii[$17 & 3]($2,$1)|0);
 if (!($18)) {
  $$0 = $16;
  STACKTOP = sp;return ($$0|0);
 }
 ; store8($5,load8($1,4),4); store4($5+8 | 0,load4($1+8 | 0,4),4);
 ; store8($1,load8($2,4),4); store4($1+8 | 0,load4($2+8 | 0,4),4);
 ; store8($2,load8($5,4),4); store4($2+8 | 0,load4($5+8 | 0,4),4);
 $19 = (($$026$i) + 2)|0;
 $20 = load4($4);
 $21 = (FUNCTION_TABLE_iii[$20 & 3]($1,$0)|0);
 if (!($21)) {
  $$0 = $19;
  STACKTOP = sp;return ($$0|0);
 }
 ; store8($5,load8($0,4),4); store4($5+8 | 0,load4($0+8 | 0,4),4);
 ; store8($0,load8($1,4),4); store4($0+8 | 0,load4($1+8 | 0,4),4);
 ; store8($1,load8($5,4),4); store4($1+8 | 0,load4($5+8 | 0,4),4);
 $22 = (($$026$i) + 3)|0;
 $$0 = $22;
 STACKTOP = sp;return ($$0|0);
}
function __ZNSt3__218__insertion_sort_3IRPFbRK6b2PairS3_EPS1_EEvT0_S8_T_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$02941 = 0, $$03040 = 0, $$03040$phi = 0, $$1 = 0, $$1$phi = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = ((($0)) + 24|0);
 $5 = ((($0)) + 12|0);
 $6 = load4($2);
 $7 = (FUNCTION_TABLE_iii[$6 & 3]($5,$0)|0);
 $8 = load4($2);
 $9 = (FUNCTION_TABLE_iii[$8 & 3]($4,$5)|0);
 do {
  if ($7) {
   if ($9) {
    ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
    ; store8($0,load8($4,4),4); store4($0+8 | 0,load4($4+8 | 0,4),4);
    ; store8($4,load8($3,4),4); store4($4+8 | 0,load4($3+8 | 0,4),4);
    break;
   }
   ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
   ; store8($0,load8($5,4),4); store4($0+8 | 0,load4($5+8 | 0,4),4);
   ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
   $12 = load4($2);
   $13 = (FUNCTION_TABLE_iii[$12 & 3]($4,$5)|0);
   if ($13) {
    ; store8($3,load8($5,4),4); store4($3+8 | 0,load4($5+8 | 0,4),4);
    ; store8($5,load8($4,4),4); store4($5+8 | 0,load4($4+8 | 0,4),4);
    ; store8($4,load8($3,4),4); store4($4+8 | 0,load4($3+8 | 0,4),4);
   }
  } else {
   if ($9) {
    ; store8($3,load8($5,4),4); store4($3+8 | 0,load4($5+8 | 0,4),4);
    ; store8($5,load8($4,4),4); store4($5+8 | 0,load4($4+8 | 0,4),4);
    ; store8($4,load8($3,4),4); store4($4+8 | 0,load4($3+8 | 0,4),4);
    $10 = load4($2);
    $11 = (FUNCTION_TABLE_iii[$10 & 3]($5,$0)|0);
    if ($11) {
     ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
     ; store8($0,load8($5,4),4); store4($0+8 | 0,load4($5+8 | 0,4),4);
     ; store8($5,load8($3,4),4); store4($5+8 | 0,load4($3+8 | 0,4),4);
    }
   }
  }
 } while(0);
 $14 = ((($0)) + 36|0);
 $15 = ($14|0)==($1|0);
 if ($15) {
  STACKTOP = sp;return;
 }
 $$02941 = $14;$$03040 = $4;
 while(1) {
  $16 = load4($2);
  $17 = (FUNCTION_TABLE_iii[$16 & 3]($$02941,$$03040)|0);
  if ($17) {
   ; store8($3,load8($$02941,4),4); store4($3+8 | 0,load4($$02941+8 | 0,4),4);
   $$0 = $$03040;$$1 = $$02941;
   while(1) {
    ; store8($$1,load8($$0,4),4); store4($$1+8 | 0,load4($$0+8 | 0,4),4);
    $18 = ($$0|0)==($0|0);
    if ($18) {
     break;
    }
    $19 = load4($2);
    $20 = ((($$0)) + -12|0);
    $21 = (FUNCTION_TABLE_iii[$19 & 3]($3,$20)|0);
    if ($21) {
     $$1$phi = $$0;$$0 = $20;$$1 = $$1$phi;
    } else {
     break;
    }
   }
   ; store8($$0,load8($3,4),4); store4($$0+8 | 0,load4($3+8 | 0,4),4);
  }
  $22 = ((($$02941)) + 12|0);
  $23 = ($22|0)==($1|0);
  if ($23) {
   break;
  } else {
   $$03040$phi = $$02941;$$02941 = $22;$$03040 = $$03040$phi;
  }
 }
 STACKTOP = sp;return;
}
function __ZNSt3__227__insertion_sort_incompleteIRPFbRK6b2PairS3_EPS1_EEbT0_S8_T_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$$3 = 0, $$0 = 0, $$062105 = 0, $$064104 = 0, $$069102 = 0, $$069102$phi = 0, $$1 = 0, $$165 = 0, $$170 = 0, $$170$phi = 0, $$3 = 0, $$5 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0;
 var $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0;
 var $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = $1;
 $5 = $0;
 $6 = (($4) - ($5))|0;
 $7 = (($6|0) / 12)&-1;
 switch ($7|0) {
 case 2:  {
  $8 = load4($2);
  $9 = ((($1)) + -12|0);
  $10 = (FUNCTION_TABLE_iii[$8 & 3]($9,$0)|0);
  if (!($10)) {
   $$5 = 1;
   STACKTOP = sp;return ($$5|0);
  }
  ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
  ; store8($0,load8($9,4),4); store4($0+8 | 0,load4($9+8 | 0,4),4);
  ; store8($9,load8($3,4),4); store4($9+8 | 0,load4($3+8 | 0,4),4);
  $$5 = 1;
  STACKTOP = sp;return ($$5|0);
  break;
 }
 case 3:  {
  $11 = ((($0)) + 12|0);
  $12 = ((($1)) + -12|0);
  $13 = load4($2);
  $14 = (FUNCTION_TABLE_iii[$13 & 3]($11,$0)|0);
  $15 = load4($2);
  $16 = (FUNCTION_TABLE_iii[$15 & 3]($12,$11)|0);
  if (!($14)) {
   if (!($16)) {
    $$5 = 1;
    STACKTOP = sp;return ($$5|0);
   }
   ; store8($3,load8($11,4),4); store4($3+8 | 0,load4($11+8 | 0,4),4);
   ; store8($11,load8($12,4),4); store4($11+8 | 0,load4($12+8 | 0,4),4);
   ; store8($12,load8($3,4),4); store4($12+8 | 0,load4($3+8 | 0,4),4);
   $17 = load4($2);
   $18 = (FUNCTION_TABLE_iii[$17 & 3]($11,$0)|0);
   if (!($18)) {
    $$5 = 1;
    STACKTOP = sp;return ($$5|0);
   }
   ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
   ; store8($0,load8($11,4),4); store4($0+8 | 0,load4($11+8 | 0,4),4);
   ; store8($11,load8($3,4),4); store4($11+8 | 0,load4($3+8 | 0,4),4);
   $$5 = 1;
   STACKTOP = sp;return ($$5|0);
  }
  if ($16) {
   ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
   ; store8($0,load8($12,4),4); store4($0+8 | 0,load4($12+8 | 0,4),4);
   ; store8($12,load8($3,4),4); store4($12+8 | 0,load4($3+8 | 0,4),4);
   $$5 = 1;
   STACKTOP = sp;return ($$5|0);
  }
  ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
  ; store8($0,load8($11,4),4); store4($0+8 | 0,load4($11+8 | 0,4),4);
  ; store8($11,load8($3,4),4); store4($11+8 | 0,load4($3+8 | 0,4),4);
  $19 = load4($2);
  $20 = (FUNCTION_TABLE_iii[$19 & 3]($12,$11)|0);
  if (!($20)) {
   $$5 = 1;
   STACKTOP = sp;return ($$5|0);
  }
  ; store8($3,load8($11,4),4); store4($3+8 | 0,load4($11+8 | 0,4),4);
  ; store8($11,load8($12,4),4); store4($11+8 | 0,load4($12+8 | 0,4),4);
  ; store8($12,load8($3,4),4); store4($12+8 | 0,load4($3+8 | 0,4),4);
  $$5 = 1;
  STACKTOP = sp;return ($$5|0);
  break;
 }
 case 4:  {
  $21 = ((($0)) + 12|0);
  $22 = ((($0)) + 24|0);
  $23 = ((($1)) + -12|0);
  (__ZNSt3__27__sort4IRPFbRK6b2PairS3_EPS1_EEjT0_S8_S8_S8_T_($0,$21,$22,$23,$2)|0);
  $$5 = 1;
  STACKTOP = sp;return ($$5|0);
  break;
 }
 case 5:  {
  $24 = ((($0)) + 12|0);
  $25 = ((($0)) + 24|0);
  $26 = ((($0)) + 36|0);
  $27 = ((($1)) + -12|0);
  (__ZNSt3__27__sort4IRPFbRK6b2PairS3_EPS1_EEjT0_S8_S8_S8_T_($0,$24,$25,$26,$2)|0);
  $28 = load4($2);
  $29 = (FUNCTION_TABLE_iii[$28 & 3]($27,$26)|0);
  if (!($29)) {
   $$5 = 1;
   STACKTOP = sp;return ($$5|0);
  }
  ; store8($3,load8($26,4),4); store4($3+8 | 0,load4($26+8 | 0,4),4);
  ; store8($26,load8($27,4),4); store4($26+8 | 0,load4($27+8 | 0,4),4);
  ; store8($27,load8($3,4),4); store4($27+8 | 0,load4($3+8 | 0,4),4);
  $30 = load4($2);
  $31 = (FUNCTION_TABLE_iii[$30 & 3]($26,$25)|0);
  if (!($31)) {
   $$5 = 1;
   STACKTOP = sp;return ($$5|0);
  }
  ; store8($3,load8($25,4),4); store4($3+8 | 0,load4($25+8 | 0,4),4);
  ; store8($25,load8($26,4),4); store4($25+8 | 0,load4($26+8 | 0,4),4);
  ; store8($26,load8($3,4),4); store4($26+8 | 0,load4($3+8 | 0,4),4);
  $32 = load4($2);
  $33 = (FUNCTION_TABLE_iii[$32 & 3]($25,$24)|0);
  if (!($33)) {
   $$5 = 1;
   STACKTOP = sp;return ($$5|0);
  }
  ; store8($3,load8($24,4),4); store4($3+8 | 0,load4($24+8 | 0,4),4);
  ; store8($24,load8($25,4),4); store4($24+8 | 0,load4($25+8 | 0,4),4);
  ; store8($25,load8($3,4),4); store4($25+8 | 0,load4($3+8 | 0,4),4);
  $34 = load4($2);
  $35 = (FUNCTION_TABLE_iii[$34 & 3]($24,$0)|0);
  if (!($35)) {
   $$5 = 1;
   STACKTOP = sp;return ($$5|0);
  }
  ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
  ; store8($0,load8($24,4),4); store4($0+8 | 0,load4($24+8 | 0,4),4);
  ; store8($24,load8($3,4),4); store4($24+8 | 0,load4($3+8 | 0,4),4);
  $$5 = 1;
  STACKTOP = sp;return ($$5|0);
  break;
 }
 case 1: case 0:  {
  $$5 = 1;
  STACKTOP = sp;return ($$5|0);
  break;
 }
 default: {
  $36 = ((($0)) + 24|0);
  $37 = ((($0)) + 12|0);
  $38 = load4($2);
  $39 = (FUNCTION_TABLE_iii[$38 & 3]($37,$0)|0);
  $40 = load4($2);
  $41 = (FUNCTION_TABLE_iii[$40 & 3]($36,$37)|0);
  do {
   if ($39) {
    if ($41) {
     ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
     ; store8($0,load8($36,4),4); store4($0+8 | 0,load4($36+8 | 0,4),4);
     ; store8($36,load8($3,4),4); store4($36+8 | 0,load4($3+8 | 0,4),4);
     break;
    }
    ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
    ; store8($0,load8($37,4),4); store4($0+8 | 0,load4($37+8 | 0,4),4);
    ; store8($37,load8($3,4),4); store4($37+8 | 0,load4($3+8 | 0,4),4);
    $44 = load4($2);
    $45 = (FUNCTION_TABLE_iii[$44 & 3]($36,$37)|0);
    if ($45) {
     ; store8($3,load8($37,4),4); store4($3+8 | 0,load4($37+8 | 0,4),4);
     ; store8($37,load8($36,4),4); store4($37+8 | 0,load4($36+8 | 0,4),4);
     ; store8($36,load8($3,4),4); store4($36+8 | 0,load4($3+8 | 0,4),4);
    }
   } else {
    if ($41) {
     ; store8($3,load8($37,4),4); store4($3+8 | 0,load4($37+8 | 0,4),4);
     ; store8($37,load8($36,4),4); store4($37+8 | 0,load4($36+8 | 0,4),4);
     ; store8($36,load8($3,4),4); store4($36+8 | 0,load4($3+8 | 0,4),4);
     $42 = load4($2);
     $43 = (FUNCTION_TABLE_iii[$42 & 3]($37,$0)|0);
     if ($43) {
      ; store8($3,load8($0,4),4); store4($3+8 | 0,load4($0+8 | 0,4),4);
      ; store8($0,load8($37,4),4); store4($0+8 | 0,load4($37+8 | 0,4),4);
      ; store8($37,load8($3,4),4); store4($37+8 | 0,load4($3+8 | 0,4),4);
     }
    }
   }
  } while(0);
  $46 = ((($0)) + 36|0);
  $47 = ($46|0)==($1|0);
  L13: do {
   if ($47) {
    $$1 = 1;$$3 = 0;
   } else {
    $$062105 = $46;$$064104 = 0;$$069102 = $36;
    while(1) {
     $48 = load4($2);
     $49 = (FUNCTION_TABLE_iii[$48 & 3]($$062105,$$069102)|0);
     if ($49) {
      ; store8($3,load8($$062105,4),4); store4($3+8 | 0,load4($$062105+8 | 0,4),4);
      $$0 = $$069102;$$170 = $$062105;
      while(1) {
       ; store8($$170,load8($$0,4),4); store4($$170+8 | 0,load4($$0+8 | 0,4),4);
       $50 = ($$0|0)==($0|0);
       if ($50) {
        break;
       }
       $51 = load4($2);
       $52 = ((($$0)) + -12|0);
       $53 = (FUNCTION_TABLE_iii[$51 & 3]($3,$52)|0);
       if ($53) {
        $$170$phi = $$0;$$0 = $52;$$170 = $$170$phi;
       } else {
        break;
       }
      }
      ; store8($$0,load8($3,4),4); store4($$0+8 | 0,load4($3+8 | 0,4),4);
      $54 = (($$064104) + 1)|0;
      $55 = ($54|0)==(8);
      $56 = ((($$062105)) + 12|0);
      $57 = ($56|0)==($1|0);
      if ($55) {
       $$1 = 0;$$3 = $57;
       break L13;
      } else {
       $$165 = $54;
      }
     } else {
      $$165 = $$064104;
     }
     $58 = ((($$062105)) + 12|0);
     $59 = ($58|0)==($1|0);
     if ($59) {
      $$1 = 1;$$3 = 0;
      break;
     } else {
      $$069102$phi = $$062105;$$062105 = $58;$$064104 = $$165;$$069102 = $$069102$phi;
     }
    }
   }
  } while(0);
  $$$3 = $$3 | $$1;
  $$5 = $$$3;
  STACKTOP = sp;return ($$5|0);
 }
 }
 return (0)|0;
}
function __ZN9b2FixtureC2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 32|0);
 store2($1,1);
 $2 = ((($0)) + 34|0);
 store2($2,-1);
 $3 = ((($0)) + 36|0);
 store2($3,0);
 $4 = ((($0)) + 40|0);
 store4($4,0);
 $5 = ((($0)) + 24|0);
 store4($5,0);
 $6 = ((($0)) + 28|0);
 store4($6,0);
 ; store8($0,i64_const(0,0),4); store8($0+8|0,i64_const(0,0),4);
 return;
}
function __ZN9b2Fixture6CreateEP16b2BlockAllocatorP6b2BodyPK12b2FixtureDef($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$019 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $exitcond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($3)) + 4|0);
 $5 = load4($4);
 $6 = ((($0)) + 40|0);
 store4($6,$5);
 $7 = ((($3)) + 8|0);
 $8 = load4($7);
 $9 = ((($0)) + 16|0);
 store4($9,$8);
 $10 = ((($3)) + 12|0);
 $11 = load4($10);
 $12 = ((($0)) + 20|0);
 store4($12,$11);
 $13 = ((($0)) + 8|0);
 store4($13,$2);
 $14 = ((($0)) + 4|0);
 store4($14,0);
 $15 = ((($0)) + 32|0);
 $16 = ((($3)) + 22|0);
 ; store4($15,load4($16,2),2); store2($15+4 | 0,load2($16+4 | 0,2),2);
 $17 = ((($3)) + 20|0);
 $18 = load1($17);
 $19 = ((($0)) + 38|0);
 store1($19,$18);
 $20 = load4($3);
 $21 = load4($20);
 $22 = ((($21)) + 8|0);
 $23 = load4($22);
 $24 = (FUNCTION_TABLE_iii[$23 & 3]($20,$1)|0);
 $25 = ((($0)) + 12|0);
 store4($25,$24);
 $26 = load4($24);
 $27 = ((($26)) + 12|0);
 $28 = load4($27);
 $29 = (FUNCTION_TABLE_ii[$28 & 3]($24)|0);
 $30 = ($29*28)|0;
 $31 = (__ZN16b2BlockAllocator8AllocateEi($1,$30)|0);
 $32 = ((($0)) + 24|0);
 store4($32,$31);
 $33 = ($29|0)>(0);
 if ($33) {
  $$019 = 0;
 } else {
  $34 = ((($0)) + 28|0);
  store4($34,0);
  $35 = ((($3)) + 16|0);
  $36 = load4($35);
  store4($0,$36);
  return;
 }
 while(1) {
  $37 = (((($31) + (($$019*28)|0)|0)) + 16|0);
  store4($37,0);
  $38 = (((($31) + (($$019*28)|0)|0)) + 24|0);
  store4($38,-1);
  $39 = (($$019) + 1)|0;
  $exitcond = ($39|0)==($29|0);
  if ($exitcond) {
   break;
  } else {
   $$019 = $39;
  }
 }
 $34 = ((($0)) + 28|0);
 store4($34,0);
 $35 = ((($3)) + 16|0);
 $36 = load4($35);
 store4($0,$36);
 return;
}
function __ZN9b2Fixture13CreateProxiesEP12b2BroadPhaseRK11b2Transform($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$016 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 28|0);
 $4 = load4($3);
 $5 = ($4|0)==(0);
 if (!($5)) {
  ___assert_fail((3234|0),(3252|0),124,(3281|0));
  // unreachable;
 }
 $6 = ((($0)) + 12|0);
 $7 = load4($6);
 $8 = load4($7);
 $9 = ((($8)) + 12|0);
 $10 = load4($9);
 $11 = (FUNCTION_TABLE_ii[$10 & 3]($7)|0);
 store4($3,$11);
 $12 = ($11|0)>(0);
 if (!($12)) {
  return;
 }
 $13 = ((($0)) + 24|0);
 $$016 = 0;
 while(1) {
  $14 = load4($13);
  $15 = (($14) + (($$016*28)|0)|0);
  $16 = load4($6);
  $17 = load4($16);
  $18 = ((($17)) + 24|0);
  $19 = load4($18);
  FUNCTION_TABLE_viiii[$19 & 15]($16,$15,$2,$$016);
  $20 = (__ZN12b2BroadPhase11CreateProxyERK6b2AABBPv($1,$15,$15)|0);
  $21 = (((($14) + (($$016*28)|0)|0)) + 24|0);
  store4($21,$20);
  $22 = (((($14) + (($$016*28)|0)|0)) + 16|0);
  store4($22,$0);
  $23 = (((($14) + (($$016*28)|0)|0)) + 20|0);
  store4($23,$$016);
  $24 = (($$016) + 1)|0;
  $25 = load4($3);
  $26 = ($24|0)<($25|0);
  if ($26) {
   $$016 = $24;
  } else {
   break;
  }
 }
 return;
}
function __ZN9b2Fixture11SynchronizeEP12b2BroadPhaseRK11b2TransformS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$016 = 0, $$sroa_idx14$i = 0, $$sroa_idx8$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = Math_fround(0), $35 = Math_fround(0), $36 = 0, $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $4 = 0, $40 = 0, $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0), $44 = 0, $45 = Math_fround(0);
 var $46 = Math_fround(0), $47 = Math_fround(0), $48 = 0, $49 = Math_fround(0), $5 = 0, $50 = 0, $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = Math_fround(0), $55 = Math_fround(0), $56 = Math_fround(0), $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $4 = sp + 24|0;
 $5 = sp + 8|0;
 $6 = sp;
 $7 = ((($0)) + 28|0);
 $8 = load4($7);
 $9 = ($8|0)>(0);
 if (!($9)) {
  STACKTOP = sp;return;
 }
 $10 = ((($0)) + 24|0);
 $11 = ((($0)) + 12|0);
 $12 = ((($4)) + 4|0);
 $13 = ((($5)) + 4|0);
 $14 = ((($4)) + 8|0);
 $15 = ((($5)) + 8|0);
 $16 = ((($4)) + 12|0);
 $17 = ((($5)) + 12|0);
 $18 = ((($3)) + 4|0);
 $19 = ((($2)) + 4|0);
 $20 = ((($6)) + 4|0);
 $$016 = 0;
 while(1) {
  $21 = load4($10);
  $22 = load4($11);
  $23 = load4($22);
  $24 = ((($23)) + 24|0);
  $25 = load4($24);
  $26 = (((($21) + (($$016*28)|0)|0)) + 20|0);
  $27 = load4($26);
  FUNCTION_TABLE_viiii[$25 & 15]($22,$4,$2,$27);
  $28 = load4($11);
  $29 = load4($28);
  $30 = ((($29)) + 24|0);
  $31 = load4($30);
  $32 = load4($26);
  FUNCTION_TABLE_viiii[$31 & 15]($28,$5,$3,$32);
  $33 = (($21) + (($$016*28)|0)|0);
  $34 = loadf($4);
  $35 = loadf($5);
  $36 = $34 < $35;
  $37 = $36 ? $34 : $35;
  $38 = loadf($12);
  $39 = loadf($13);
  $40 = $38 < $39;
  $41 = $40 ? $38 : $39;
  storef($33,$37);
  $$sroa_idx14$i = (((($21) + (($$016*28)|0)|0)) + 4|0);
  storef($$sroa_idx14$i,$41);
  $42 = loadf($14);
  $43 = loadf($15);
  $44 = $42 > $43;
  $45 = $44 ? $42 : $43;
  $46 = loadf($16);
  $47 = loadf($17);
  $48 = $46 > $47;
  $49 = $48 ? $46 : $47;
  $50 = (((($21) + (($$016*28)|0)|0)) + 8|0);
  storef($50,$45);
  $$sroa_idx8$i = (((($21) + (($$016*28)|0)|0)) + 12|0);
  storef($$sroa_idx8$i,$49);
  $51 = loadf($3);
  $52 = loadf($2);
  $53 = Math_fround($51 - $52);
  $54 = loadf($18);
  $55 = loadf($19);
  $56 = Math_fround($54 - $55);
  storef($6,$53);
  storef($20,$56);
  $57 = (((($21) + (($$016*28)|0)|0)) + 24|0);
  $58 = load4($57);
  __ZN12b2BroadPhase9MoveProxyEiRK6b2AABBRK6b2Vec2($1,$58,$33,$6);
  $59 = (($$016) + 1)|0;
  $60 = load4($7);
  $61 = ($59|0)<($60|0);
  if ($61) {
   $$016 = $59;
  } else {
   break;
  }
 }
 STACKTOP = sp;return;
}
function __ZN7b2WorldC2ERK6b2Vec2($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = i64(), $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __ZN16b2BlockAllocatorC2Ev($0);
 $2 = ((($0)) + 68|0);
 __ZN16b2StackAllocatorC2Ev($2);
 $3 = ((($0)) + 102872|0);
 __ZN16b2ContactManagerC2Ev($3);
 $4 = ((($0)) + 102968|0);
 $5 = ((($0)) + 102980|0);
 store4($5,0);
 $6 = ((($0)) + 102984|0);
 store4($6,0);
 $7 = ((($0)) + 102952|0);
 $8 = ((($0)) + 102992|0);
 ; store8($7,i64_const(0,0),4); store8($7+8|0,i64_const(0,0),4);
 store1($8,1);
 $9 = ((($0)) + 102993|0);
 store1($9,1);
 $10 = ((($0)) + 102994|0);
 store1($10,0);
 $11 = ((($0)) + 102995|0);
 store1($11,1);
 $12 = ((($0)) + 102976|0);
 store1($12,1);
 $13 = load8($1,4);
 store8($4,$13,4);
 $14 = ((($0)) + 102868|0);
 store4($14,4);
 $15 = ((($0)) + 102988|0);
 storef($15,Math_fround(0.0));
 $16 = ((($0)) + 102948|0);
 store4($16,$0);
 $17 = ((($0)) + 102996|0);
 ; store8($17,i64_const(0,0),4); store8($17+8|0,i64_const(0,0),4); store8($17+16|0,i64_const(0,0),4); store8($17+24|0,i64_const(0,0),4);
 return;
}
function __ZN7b2World10CreateBodyEPK9b2BodyDef($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 102868|0);
 $3 = load4($2);
 $4 = $3 & 2;
 $5 = ($4|0)==(0);
 if (!($5)) {
  ___assert_fail((3295|0),(3315|0),109,(3342|0));
  // unreachable;
 }
 $6 = (__ZN16b2BlockAllocator8AllocateEi($0,152)|0);
 __ZN6b2BodyC2EPK9b2BodyDefP7b2World($6,$1,$0);
 $7 = ((($6)) + 92|0);
 store4($7,0);
 $8 = ((($0)) + 102952|0);
 $9 = load4($8);
 $10 = ((($6)) + 96|0);
 store4($10,$9);
 $11 = ($9|0)==(0);
 if (!($11)) {
  $12 = $9;
  $13 = ((($12)) + 92|0);
  store4($13,$6);
 }
 store4($8,$6);
 $14 = ((($0)) + 102960|0);
 $15 = load4($14);
 $16 = (($15) + 1)|0;
 store4($14,$16);
 return ($6|0);
}
function __ZN7b2World16SetAllowSleepingEb($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$06 = 0, $$07 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = $1&1;
 $3 = ((($0)) + 102976|0);
 $4 = load1($3);
 $5 = $4&255;
 $6 = ($2|0)==($5|0);
 if ($6) {
  return;
 }
 $7 = $1&1;
 store1($3,$7);
 if ($1) {
  return;
 }
 $8 = ((($0)) + 102952|0);
 $$06 = load4($8);
 $9 = ($$06|0)==(0|0);
 if ($9) {
  return;
 } else {
  $$07 = $$06;
 }
 while(1) {
  $10 = ((($$07)) + 4|0);
  $11 = load2($10);
  $12 = $11&65535;
  $13 = $12 & 2;
  $14 = ($13|0)==(0);
  if ($14) {
   $15 = $12 | 2;
   $16 = ((($$07)) + 144|0);
   $17 = $15&65535;
   store2($10,$17);
   storef($16,Math_fround(0.0));
  }
  $18 = ((($$07)) + 96|0);
  $$0 = load4($18);
  $19 = ($$0|0)==(0|0);
  if ($19) {
   break;
  } else {
   $$07 = $$0;
  }
 }
 return;
}
function __ZN7b2World5SolveERK10b2TimeStep($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$0122 = 0, $$0122193 = 0, $$0122194 = 0, $$0123174 = 0, $$0124 = 0, $$0124188 = 0, $$0124189 = 0, $$0125 = 0, $$0125167 = 0, $$0125169 = 0, $$0126 = 0, $$0126183 = 0, $$0126184 = 0, $$0134 = 0, $$0134178 = 0, $$0134179 = 0, $$0135 = 0, $$0135161 = 0, $$0135163 = 0;
 var $$0139$be = 0, $$0139173 = 0, $$0159 = 0, $$0160 = 0, $$1140$lcssa = 0, $$1140162 = 0, $$4143 = 0, $$5144168 = 0, $$7 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0;
 var $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0;
 var $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0;
 var $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = Math_fround(0), $16 = 0, $160 = Math_fround(0), $161 = Math_fround(0), $162 = Math_fround(0), $163 = Math_fround(0);
 var $164 = Math_fround(0), $165 = Math_fround(0), $166 = Math_fround(0), $167 = Math_fround(0), $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0;
 var $182 = 0, $183 = 0, $184 = Math_fround(0), $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0;
 var $20 = 0, $200 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0;
 var $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0;
 var $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $2 = sp + 32|0;
 $3 = sp;
 $4 = ((($0)) + 103008|0);
 storef($4,Math_fround(0.0));
 $5 = ((($0)) + 103012|0);
 storef($5,Math_fround(0.0));
 $6 = ((($0)) + 103016|0);
 storef($6,Math_fround(0.0));
 $7 = ((($0)) + 102960|0);
 $8 = load4($7);
 $9 = ((($0)) + 102872|0);
 $10 = ((($0)) + 102936|0);
 $11 = load4($10);
 $12 = ((($0)) + 102964|0);
 $13 = load4($12);
 $14 = ((($0)) + 68|0);
 $15 = ((($0)) + 102944|0);
 $16 = load4($15);
 __ZN8b2IslandC2EiiiP16b2StackAllocatorP17b2ContactListener($2,$8,$11,$13,$14,$16);
 $17 = ((($0)) + 102952|0);
 $$0122193 = load4($17);
 $18 = ($$0122193|0)==(0|0);
 if (!($18)) {
  $$0122194 = $$0122193;
  while(1) {
   $21 = ((($$0122194)) + 4|0);
   $22 = load2($21);
   $23 = $22&65535;
   $24 = $23 & 65534;
   $25 = $24&65535;
   store2($21,$25);
   $26 = ((($$0122194)) + 96|0);
   $$0122 = load4($26);
   $27 = ($$0122|0)==(0|0);
   if ($27) {
    break;
   } else {
    $$0122194 = $$0122;
   }
  }
 }
 $19 = ((($0)) + 102932|0);
 $$0124188 = load4($19);
 $20 = ($$0124188|0)==(0|0);
 if (!($20)) {
  $$0124189 = $$0124188;
  while(1) {
   $30 = ((($$0124189)) + 4|0);
   $31 = load4($30);
   $32 = $31 & -2;
   store4($30,$32);
   $33 = ((($$0124189)) + 12|0);
   $$0124 = load4($33);
   $34 = ($$0124|0)==(0|0);
   if ($34) {
    break;
   } else {
    $$0124189 = $$0124;
   }
  }
 }
 $28 = ((($0)) + 102956|0);
 $$0126183 = load4($28);
 $29 = ($$0126183|0)==(0|0);
 if (!($29)) {
  $$0126184 = $$0126183;
  while(1) {
   $39 = ((($$0126184)) + 60|0);
   store1($39,0);
   $40 = ((($$0126184)) + 12|0);
   $$0126 = load4($40);
   $41 = ($$0126|0)==(0|0);
   if ($41) {
    break;
   } else {
    $$0126184 = $$0126;
   }
  }
 }
 $35 = load4($7);
 $36 = $35 << 2;
 $37 = (__ZN16b2StackAllocator8AllocateEi($14,$36)|0);
 $$0134178 = load4($17);
 $38 = ($$0134178|0)==(0|0);
 L13: do {
  if (!($38)) {
   $42 = ((($2)) + 28|0);
   $43 = ((($2)) + 36|0);
   $44 = ((($2)) + 32|0);
   $45 = ((($2)) + 40|0);
   $46 = ((($2)) + 8|0);
   $47 = ((($2)) + 48|0);
   $48 = ((($2)) + 16|0);
   $49 = ((($2)) + 44|0);
   $50 = ((($2)) + 12|0);
   $51 = ((($0)) + 102968|0);
   $52 = ((($0)) + 102976|0);
   $53 = ((($3)) + 12|0);
   $54 = ((($3)) + 16|0);
   $55 = ((($3)) + 20|0);
   $$0134179 = $$0134178;
   L15: while(1) {
    $57 = ((($$0134179)) + 4|0);
    $58 = load2($57);
    $59 = $58 & 35;
    $60 = ($59<<16>>16)==(34);
    if ($60) {
     $61 = load4($$0134179);
     $62 = ($61|0)==(0);
     if (!($62)) {
      store4($42,0);
      store4($43,0);
      store4($44,0);
      store4($37,$$0134179);
      $63 = $58&65535;
      $64 = $63 | 1;
      $65 = $64&65535;
      store2($57,$65);
      $66 = load4($45);
      $67 = load4($47);
      $68 = load4($49);
      $$0139173 = 1;$194 = 0;$195 = 0;$76 = 0;
      while(1) {
       $69 = (($$0139173) + -1)|0;
       $70 = (($37) + ($69<<2)|0);
       $71 = load4($70);
       $72 = ((($71)) + 4|0);
       $73 = load2($72);
       $74 = $73 & 32;
       $75 = ($74<<16>>16)==(0);
       if ($75) {
        label = 14;
        break L15;
       }
       $77 = ($76|0)<($66|0);
       if (!($77)) {
        label = 16;
        break L15;
       }
       $78 = ((($71)) + 8|0);
       store4($78,$76);
       $79 = load4($46);
       $80 = (($79) + ($76<<2)|0);
       store4($80,$71);
       $81 = (($76) + 1)|0;
       store4($42,$81);
       $82 = $73&65535;
       $83 = $82 & 2;
       $84 = ($83|0)==(0);
       if ($84) {
        $85 = $82 | 2;
        $86 = ((($71)) + 144|0);
        $87 = $85&65535;
        store2($72,$87);
        storef($86,Math_fround(0.0));
       }
       $88 = load4($71);
       $89 = ($88|0)==(0);
       if ($89) {
        $$0139$be = $69;$196 = $194;$197 = $195;
       } else {
        $91 = ((($71)) + 112|0);
        $$0135161 = load4($91);
        $92 = ($$0135161|0)==(0|0);
        if ($92) {
         $$1140$lcssa = $69;$198 = $195;
        } else {
         $$0135163 = $$0135161;$$1140162 = $69;$111 = $195;
         while(1) {
          $95 = ((($$0135163)) + 4|0);
          $96 = load4($95);
          $97 = ((($96)) + 4|0);
          $98 = load4($97);
          $99 = $98 & 7;
          $100 = ($99|0)==(6);
          do {
           if ($100) {
            $101 = ((($96)) + 48|0);
            $102 = load4($101);
            $103 = ((($102)) + 38|0);
            $104 = load1($103);
            $105 = ($104<<24>>24)==(0);
            if (!($105)) {
             $$4143 = $$1140162;$199 = $111;
             break;
            }
            $106 = ((($96)) + 52|0);
            $107 = load4($106);
            $108 = ((($107)) + 38|0);
            $109 = load1($108);
            $110 = ($109<<24>>24)==(0);
            if (!($110)) {
             $$4143 = $$1140162;$199 = $111;
             break;
            }
            $112 = ($111|0)<($68|0);
            if (!($112)) {
             label = 27;
             break L15;
            }
            $113 = (($111) + 1)|0;
            store4($43,$113);
            $114 = load4($50);
            $115 = (($114) + ($111<<2)|0);
            store4($115,$96);
            $116 = $98 | 1;
            store4($97,$116);
            $117 = load4($$0135163);
            $118 = ((($117)) + 4|0);
            $119 = load2($118);
            $120 = $119 & 1;
            $121 = ($120<<16>>16)==(0);
            if (!($121)) {
             $$4143 = $$1140162;$199 = $113;
             break;
            }
            $122 = ($$1140162|0)<($35|0);
            if (!($122)) {
             label = 30;
             break L15;
            }
            $123 = (($$1140162) + 1)|0;
            $124 = (($37) + ($$1140162<<2)|0);
            store4($124,$117);
            $125 = $119&65535;
            $126 = $125 | 1;
            $127 = $126&65535;
            store2($118,$127);
            $$4143 = $123;$199 = $113;
           } else {
            $$4143 = $$1140162;$199 = $111;
           }
          } while(0);
          $128 = ((($$0135163)) + 12|0);
          $$0135 = load4($128);
          $129 = ($$0135|0)==(0|0);
          if ($129) {
           $$1140$lcssa = $$4143;$198 = $199;
           break;
          } else {
           $$0135163 = $$0135;$$1140162 = $$4143;$111 = $199;
          }
         }
        }
        $93 = ((($71)) + 108|0);
        $$0125167 = load4($93);
        $94 = ($$0125167|0)==(0|0);
        if ($94) {
         $$0139$be = $$1140$lcssa;$196 = $194;$197 = $198;
        } else {
         $$0125169 = $$0125167;$$5144168 = $$1140$lcssa;$140 = $194;
         while(1) {
          $130 = ((($$0125169)) + 4|0);
          $131 = load4($130);
          $132 = ((($131)) + 60|0);
          $133 = load1($132);
          $134 = ($133<<24>>24)==(0);
          do {
           if ($134) {
            $135 = load4($$0125169);
            $136 = ((($135)) + 4|0);
            $137 = load2($136);
            $138 = $137 & 32;
            $139 = ($138<<16>>16)==(0);
            if ($139) {
             $$7 = $$5144168;$200 = $140;
             break;
            }
            $141 = ($140|0)<($67|0);
            if (!($141)) {
             label = 36;
             break L15;
            }
            $142 = (($140) + 1)|0;
            store4($44,$142);
            $143 = load4($48);
            $144 = (($143) + ($140<<2)|0);
            store4($144,$131);
            $145 = load4($130);
            $146 = ((($145)) + 60|0);
            store1($146,1);
            $147 = $137 & 1;
            $148 = ($147<<16>>16)==(0);
            if (!($148)) {
             $$7 = $$5144168;$200 = $142;
             break;
            }
            $149 = ($$5144168|0)<($35|0);
            if (!($149)) {
             label = 39;
             break L15;
            }
            $150 = (($$5144168) + 1)|0;
            $151 = (($37) + ($$5144168<<2)|0);
            store4($151,$135);
            $152 = $137&65535;
            $153 = $152 | 1;
            $154 = $153&65535;
            store2($136,$154);
            $$7 = $150;$200 = $142;
           } else {
            $$7 = $$5144168;$200 = $140;
           }
          } while(0);
          $155 = ((($$0125169)) + 12|0);
          $$0125 = load4($155);
          $156 = ($$0125|0)==(0|0);
          if ($156) {
           $$0139$be = $$7;$196 = $200;$197 = $198;
           break;
          } else {
           $$0125169 = $$0125;$$5144168 = $$7;$140 = $200;
          }
         }
        }
       }
       $90 = ($$0139$be|0)>(0);
       if ($90) {
        $$0139173 = $$0139$be;$194 = $196;$195 = $197;$76 = $81;
       } else {
        break;
       }
      }
      $157 = load1($52);
      $158 = ($157<<24>>24)!=(0);
      __ZN8b2Island5SolveEP9b2ProfileRK10b2TimeStepRK6b2Vec2b($2,$3,$1,$51,$158);
      $159 = loadf($53);
      $160 = loadf($4);
      $161 = Math_fround($159 + $160);
      storef($4,$161);
      $162 = loadf($54);
      $163 = loadf($5);
      $164 = Math_fround($162 + $163);
      storef($5,$164);
      $165 = loadf($55);
      $166 = loadf($6);
      $167 = Math_fround($165 + $166);
      storef($6,$167);
      $168 = load4($42);
      $169 = ($168|0)>(0);
      if ($169) {
       $170 = load4($46);
       $$0123174 = 0;
       while(1) {
        $171 = (($170) + ($$0123174<<2)|0);
        $172 = load4($171);
        $173 = load4($172);
        $174 = ($173|0)==(0);
        if ($174) {
         $175 = ((($172)) + 4|0);
         $176 = load2($175);
         $177 = $176&65535;
         $178 = $177 & 65534;
         $179 = $178&65535;
         store2($175,$179);
        }
        $180 = (($$0123174) + 1)|0;
        $181 = ($180|0)<($168|0);
        if ($181) {
         $$0123174 = $180;
        } else {
         break;
        }
       }
      }
     }
    }
    $182 = ((($$0134179)) + 96|0);
    $$0134 = load4($182);
    $183 = ($$0134|0)==(0|0);
    if ($183) {
     break L13;
    } else {
     $$0134179 = $$0134;
    }
   }
   if ((label|0) == 14) {
    ___assert_fail((3353|0),(3315|0),445,(3375|0));
    // unreachable;
   }
   else if ((label|0) == 16) {
    ___assert_fail((3381|0),(3410|0),54,(3438|0));
    // unreachable;
   }
   else if ((label|0) == 27) {
    ___assert_fail((3442|0),(3410|0),62,(3438|0));
    // unreachable;
   }
   else if ((label|0) == 30) {
    ___assert_fail((3477|0),(3315|0),495,(3375|0));
    // unreachable;
   }
   else if ((label|0) == 36) {
    ___assert_fail((3500|0),(3410|0),68,(3438|0));
    // unreachable;
   }
   else if ((label|0) == 39) {
    ___assert_fail((3477|0),(3315|0),524,(3375|0));
    // unreachable;
   }
  }
 } while(0);
 __ZN16b2StackAllocator4FreeEPv($14,$37);
 $$0159 = load4($17);
 $56 = ($$0159|0)==(0|0);
 if ($56) {
  __ZN16b2ContactManager15FindNewContactsEv($9);
  $184 = (Math_fround(__ZNK7b2Timer15GetMillisecondsEv($3)));
  $185 = ((($0)) + 103020|0);
  storef($185,$184);
  __ZN8b2IslandD2Ev($2);
  STACKTOP = sp;return;
 } else {
  $$0160 = $$0159;
 }
 while(1) {
  $186 = ((($$0160)) + 4|0);
  $187 = load2($186);
  $188 = $187 & 1;
  $189 = ($188<<16>>16)==(0);
  if (!($189)) {
   $190 = load4($$0160);
   $191 = ($190|0)==(0);
   if (!($191)) {
    __ZN6b2Body19SynchronizeFixturesEv($$0160);
   }
  }
  $192 = ((($$0160)) + 96|0);
  $$0 = load4($192);
  $193 = ($$0|0)==(0|0);
  if ($193) {
   break;
  } else {
   $$0160 = $$0;
  }
 }
 __ZN16b2ContactManager15FindNewContactsEv($9);
 $184 = (Math_fround(__ZNK7b2Timer15GetMillisecondsEv($3)));
 $185 = ((($0)) + 103020|0);
 storef($185,$184);
 __ZN8b2IslandD2Ev($2);
 STACKTOP = sp;return;
}
function __ZN7b2World8SolveTOIERK10b2TimeStep($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$0247 = 0, $$0247427 = 0, $$0247428 = 0, $$0248420 = 0, $$0249 = 0, $$0249423 = 0, $$0249424 = 0, $$0250404 = 0, $$0251403 = Math_fround(0), $$0255 = 0, $$0255402 = 0, $$0255402434 = 0, $$0255402435 = 0, $$0255405 = 0, $$0256 = 0, $$0256409 = 0, $$0256410 = 0, $$0261415 = 0, $$0278 = Math_fround(0);
 var $$0283 = Math_fround(0), $$0416 = 0, $$0417 = 0, $$1 = 0, $$1252 = Math_fround(0), $$3 = 0, $$3254 = Math_fround(0), $$4282 = Math_fround(0), $$phi$trans$insert = 0, $$pre = 0, $$pre$phiZ2D = 0, $$pre432 = 0, $$sroa_idx5$i = 0, $$sroa_idx5$i289 = 0, $$sroa_idx6$i = 0, $$sroa_idx6$i304 = 0, $$sroa_idx6$i307 = 0, $10 = 0, $100 = 0, $101 = 0;
 var $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = Math_fround(0), $114 = 0, $115 = 0, $116 = Math_fround(0), $117 = 0, $118 = 0, $119 = Math_fround(0), $12 = 0;
 var $120 = Math_fround(0), $121 = Math_fround(0), $122 = Math_fround(0), $123 = 0, $124 = Math_fround(0), $125 = Math_fround(0), $126 = 0, $127 = Math_fround(0), $128 = Math_fround(0), $129 = 0, $13 = 0, $130 = Math_fround(0), $131 = Math_fround(0), $132 = 0, $133 = Math_fround(0), $134 = Math_fround(0), $135 = Math_fround(0), $136 = Math_fround(0), $137 = 0, $138 = Math_fround(0);
 var $139 = Math_fround(0), $14 = 0, $140 = 0, $141 = Math_fround(0), $142 = Math_fround(0), $143 = Math_fround(0), $144 = 0, $145 = 0, $146 = Math_fround(0), $147 = Math_fround(0), $148 = Math_fround(0), $149 = Math_fround(0), $15 = 0, $150 = 0, $151 = Math_fround(0), $152 = Math_fround(0), $153 = 0, $154 = Math_fround(0), $155 = Math_fround(0), $156 = 0;
 var $157 = Math_fround(0), $158 = Math_fround(0), $159 = 0, $16 = 0, $160 = Math_fround(0), $161 = Math_fround(0), $162 = Math_fround(0), $163 = Math_fround(0), $164 = 0, $165 = Math_fround(0), $166 = Math_fround(0), $167 = 0, $168 = Math_fround(0), $169 = Math_fround(0), $17 = 0, $170 = Math_fround(0), $171 = 0, $172 = 0, $173 = 0, $174 = 0;
 var $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = Math_fround(0), $183 = Math_fround(0), $184 = Math_fround(0), $185 = Math_fround(0), $186 = 0, $187 = Math_fround(0), $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0;
 var $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = Math_fround(0), $206 = 0, $207 = Math_fround(0), $208 = Math_fround(0), $209 = Math_fround(0), $21 = 0;
 var $210 = Math_fround(0), $211 = 0, $212 = Math_fround(0), $213 = Math_fround(0), $214 = 0, $215 = Math_fround(0), $216 = Math_fround(0), $217 = 0, $218 = Math_fround(0), $219 = Math_fround(0), $22 = 0, $220 = 0, $221 = Math_fround(0), $222 = Math_fround(0), $223 = Math_fround(0), $224 = Math_fround(0), $225 = 0, $226 = Math_fround(0), $227 = Math_fround(0), $228 = 0;
 var $229 = Math_fround(0), $23 = 0, $230 = Math_fround(0), $231 = Math_fround(0), $232 = 0, $233 = 0, $234 = i64(), $235 = Math_fround(0), $236 = 0, $237 = Math_fround(0), $238 = 0, $239 = 0, $24 = 0, $240 = Math_fround(0), $241 = Math_fround(0), $242 = 0, $243 = Math_fround(0), $244 = Math_fround(0), $245 = Math_fround(0), $246 = Math_fround(0);
 var $247 = Math_fround(0), $248 = Math_fround(0), $249 = 0, $25 = 0, $250 = Math_fround(0), $251 = Math_fround(0), $252 = i64(), $253 = 0, $254 = Math_fround(0), $255 = Math_fround(0), $256 = 0, $257 = 0, $258 = Math_fround(0), $259 = 0, $26 = 0, $260 = Math_fround(0), $261 = Math_fround(0), $262 = Math_fround(0), $263 = Math_fround(0), $264 = 0;
 var $265 = Math_fround(0), $266 = Math_fround(0), $267 = 0, $268 = Math_fround(0), $269 = Math_fround(0), $27 = 0, $270 = 0, $271 = Math_fround(0), $272 = Math_fround(0), $273 = 0, $274 = Math_fround(0), $275 = Math_fround(0), $276 = Math_fround(0), $277 = Math_fround(0), $278 = 0, $279 = Math_fround(0), $28 = 0, $280 = Math_fround(0), $281 = 0, $282 = Math_fround(0);
 var $283 = Math_fround(0), $284 = Math_fround(0), $285 = 0, $286 = 0, $287 = i64(), $288 = Math_fround(0), $289 = 0, $29 = 0, $290 = Math_fround(0), $291 = 0, $292 = 0, $293 = Math_fround(0), $294 = Math_fround(0), $295 = 0, $296 = Math_fround(0), $297 = Math_fround(0), $298 = Math_fround(0), $299 = Math_fround(0), $3 = 0, $30 = 0;
 var $300 = Math_fround(0), $301 = Math_fround(0), $302 = 0, $303 = Math_fround(0), $304 = Math_fround(0), $305 = i64(), $306 = 0, $307 = Math_fround(0), $308 = Math_fround(0), $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0;
 var $319 = 0, $32 = 0, $320 = Math_fround(0), $321 = Math_fround(0), $322 = Math_fround(0), $323 = Math_fround(0), $324 = Math_fround(0), $325 = Math_fround(0), $326 = Math_fround(0), $327 = Math_fround(0), $328 = Math_fround(0), $329 = Math_fround(0), $33 = 0, $330 = Math_fround(0), $331 = Math_fround(0), $332 = Math_fround(0), $333 = Math_fround(0), $334 = Math_fround(0), $335 = Math_fround(0), $336 = Math_fround(0);
 var $337 = Math_fround(0), $338 = Math_fround(0), $339 = Math_fround(0), $34 = 0, $340 = Math_fround(0), $341 = Math_fround(0), $342 = Math_fround(0), $343 = Math_fround(0), $344 = Math_fround(0), $345 = Math_fround(0), $346 = Math_fround(0), $347 = Math_fround(0), $348 = Math_fround(0), $349 = Math_fround(0), $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0;
 var $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0;
 var $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = Math_fround(0), $388 = Math_fround(0), $389 = Math_fround(0), $39 = 0, $390 = Math_fround(0);
 var $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0;
 var $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0;
 var $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = Math_fround(0), $441 = 0, $442 = Math_fround(0), $443 = Math_fround(0), $444 = Math_fround(0);
 var $445 = Math_fround(0), $446 = 0, $447 = Math_fround(0), $448 = Math_fround(0), $449 = 0, $45 = 0, $450 = Math_fround(0), $451 = Math_fround(0), $452 = 0, $453 = Math_fround(0), $454 = Math_fround(0), $455 = 0, $456 = Math_fround(0), $457 = Math_fround(0), $458 = Math_fround(0), $459 = Math_fround(0), $46 = 0, $460 = 0, $461 = Math_fround(0), $462 = Math_fround(0);
 var $463 = 0, $464 = Math_fround(0), $465 = Math_fround(0), $466 = Math_fround(0), $467 = 0, $468 = 0, $469 = i64(), $47 = 0, $470 = Math_fround(0), $471 = 0, $472 = Math_fround(0), $473 = 0, $474 = 0, $475 = Math_fround(0), $476 = Math_fround(0), $477 = 0, $478 = Math_fround(0), $479 = Math_fround(0), $48 = 0, $480 = Math_fround(0);
 var $481 = Math_fround(0), $482 = Math_fround(0), $483 = Math_fround(0), $484 = 0, $485 = Math_fround(0), $486 = Math_fround(0), $487 = i64(), $488 = 0, $489 = Math_fround(0), $49 = 0, $490 = Math_fround(0), $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = Math_fround(0), $498 = Math_fround(0), $499 = 0;
 var $5 = 0, $50 = 0, $500 = Math_fround(0), $501 = 0, $502 = 0, $503 = Math_fround(0), $504 = Math_fround(0), $505 = 0, $506 = Math_fround(0), $507 = Math_fround(0), $508 = Math_fround(0), $509 = Math_fround(0), $51 = 0, $510 = Math_fround(0), $511 = Math_fround(0), $512 = 0, $513 = Math_fround(0), $514 = Math_fround(0), $515 = 0, $516 = Math_fround(0);
 var $517 = Math_fround(0), $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = Math_fround(0), $523 = Math_fround(0), $524 = 0, $525 = Math_fround(0), $526 = 0, $527 = 0, $528 = Math_fround(0), $529 = Math_fround(0), $53 = 0, $530 = 0, $531 = Math_fround(0), $532 = Math_fround(0), $533 = Math_fround(0), $534 = Math_fround(0);
 var $535 = Math_fround(0), $536 = Math_fround(0), $537 = 0, $538 = Math_fround(0), $539 = Math_fround(0), $54 = 0, $540 = 0, $541 = Math_fround(0), $542 = Math_fround(0), $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0;
 var $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0;
 var $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0;
 var $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0;
 var $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = Math_fround(0), $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0;
 var $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond285 = 0, $or$cond287 = 0, $or$cond3 = 0, $or$cond326 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 272|0;
 $2 = sp + 216|0;
 $3 = sp + 84|0;
 $4 = sp + 48|0;
 $5 = sp + 40|0;
 $6 = sp;
 $7 = ((($0)) + 68|0);
 $8 = ((($0)) + 102872|0);
 $9 = ((($0)) + 102944|0);
 $10 = load4($9);
 __ZN8b2IslandC2EiiiP16b2StackAllocatorP17b2ContactListener($2,64,32,0,$7,$10);
 $11 = ((($0)) + 102995|0);
 $12 = load1($11);
 $13 = ($12<<24>>24)==(0);
 if ($13) {
  $$pre432 = ((($0)) + 102932|0);
  $$pre$phiZ2D = $$pre432;
 } else {
  $14 = ((($0)) + 102952|0);
  $$0247427 = load4($14);
  $15 = ($$0247427|0)==(0|0);
  if (!($15)) {
   $$0247428 = $$0247427;
   while(1) {
    $18 = ((($$0247428)) + 4|0);
    $19 = load2($18);
    $20 = $19&65535;
    $21 = $20 & 65534;
    $22 = $21&65535;
    store2($18,$22);
    $23 = ((($$0247428)) + 60|0);
    storef($23,Math_fround(0.0));
    $24 = ((($$0247428)) + 96|0);
    $$0247 = load4($24);
    $25 = ($$0247|0)==(0|0);
    if ($25) {
     break;
    } else {
     $$0247428 = $$0247;
    }
   }
  }
  $16 = ((($0)) + 102932|0);
  $$0249423 = load4($16);
  $17 = ($$0249423|0)==(0|0);
  if ($17) {
   $$pre$phiZ2D = $16;
  } else {
   $$0249424 = $$0249423;
   while(1) {
    $53 = ((($$0249424)) + 4|0);
    $54 = load4($53);
    $55 = $54 & -34;
    store4($53,$55);
    $56 = ((($$0249424)) + 128|0);
    store4($56,0);
    $57 = ((($$0249424)) + 132|0);
    storef($57,Math_fround(1.0));
    $58 = ((($$0249424)) + 12|0);
    $$0249 = load4($58);
    $59 = ($$0249|0)==(0|0);
    if ($59) {
     $$pre$phiZ2D = $16;
     break;
    } else {
     $$0249424 = $$0249;
    }
   }
  }
 }
 $26 = ((($2)) + 28|0);
 $27 = ((($2)) + 36|0);
 $28 = ((($2)) + 32|0);
 $29 = ((($2)) + 40|0);
 $30 = ((($2)) + 8|0);
 $31 = ((($2)) + 44|0);
 $32 = ((($2)) + 12|0);
 $33 = ((($5)) + 4|0);
 $34 = ((($6)) + 4|0);
 $35 = ((($6)) + 8|0);
 $36 = ((($6)) + 16|0);
 $37 = ((($1)) + 12|0);
 $38 = ((($6)) + 12|0);
 $39 = ((($6)) + 20|0);
 $40 = ((($0)) + 102994|0);
 $41 = ((($3)) + 16|0);
 $42 = ((($3)) + 20|0);
 $43 = ((($3)) + 24|0);
 $44 = ((($3)) + 44|0);
 $45 = ((($3)) + 48|0);
 $46 = ((($3)) + 52|0);
 $47 = ((($3)) + 28|0);
 $48 = ((($3)) + 56|0);
 $49 = ((($3)) + 92|0);
 $50 = ((($3)) + 128|0);
 $51 = ((($4)) + 4|0);
 $$0255402434 = load4($$pre$phiZ2D);
 $52 = ($$0255402434|0)==(0|0);
 L11: do {
  if (!($52)) {
   $$0255402435 = $$0255402434;
   L12: while(1) {
    $$0250404 = 0;$$0251403 = Math_fround(1.0);$$0255405 = $$0255402435;
    while(1) {
     $62 = ((($$0255405)) + 4|0);
     $63 = load4($62);
     $64 = $63 & 4;
     $65 = ($64|0)==(0);
     do {
      if ($65) {
       $$3 = $$0250404;$$3254 = $$0251403;
      } else {
       $66 = ((($$0255405)) + 128|0);
       $67 = load4($66);
       $68 = ($67|0)>(8);
       if ($68) {
        $$3 = $$0250404;$$3254 = $$0251403;
       } else {
        $69 = $63 & 32;
        $70 = ($69|0)==(0);
        if ($70) {
         $73 = ((($$0255405)) + 48|0);
         $74 = load4($73);
         $75 = ((($$0255405)) + 52|0);
         $76 = load4($75);
         $77 = ((($74)) + 38|0);
         $78 = load1($77);
         $79 = ($78<<24>>24)==(0);
         if (!($79)) {
          $$3 = $$0250404;$$3254 = $$0251403;
          break;
         }
         $80 = ((($76)) + 38|0);
         $81 = load1($80);
         $82 = ($81<<24>>24)==(0);
         if (!($82)) {
          $$3 = $$0250404;$$3254 = $$0251403;
          break;
         }
         $83 = ((($74)) + 8|0);
         $84 = load4($83);
         $85 = ((($76)) + 8|0);
         $86 = load4($85);
         $87 = load4($84);
         $88 = load4($86);
         $89 = ($87|0)==(2);
         $90 = ($88|0)==(2);
         $or$cond = $89 | $90;
         if (!($or$cond)) {
          label = 17;
          break L12;
         }
         $91 = ((($84)) + 4|0);
         $92 = load2($91);
         $93 = $92 & 2;
         $94 = ($93<<16>>16)!=(0);
         $95 = ($87|0)!=(0);
         $96 = $95 & $94;
         $97 = ((($86)) + 4|0);
         $98 = load2($97);
         $99 = $98 & 2;
         $100 = ($99<<16>>16)!=(0);
         $101 = ($88|0)!=(0);
         $102 = $101 & $100;
         $or$cond285 = $96 | $102;
         if (!($or$cond285)) {
          $$3 = $$0250404;$$3254 = $$0251403;
          break;
         }
         $103 = $92 & 8;
         $104 = ($103<<16>>16)!=(0);
         $105 = ($87|0)!=(2);
         $106 = $105 | $104;
         $107 = $98 & 8;
         $108 = ($107<<16>>16)!=(0);
         $109 = ($88|0)!=(2);
         $110 = $109 | $108;
         $or$cond287 = $106 | $110;
         if (!($or$cond287)) {
          $$3 = $$0250404;$$3254 = $$0251403;
          break;
         }
         $111 = ((($84)) + 28|0);
         $112 = ((($84)) + 60|0);
         $113 = loadf($112);
         $114 = ((($86)) + 28|0);
         $115 = ((($86)) + 60|0);
         $116 = loadf($115);
         $117 = $113 < $116;
         if ($117) {
          $118 = $113 < Math_fround(1.0);
          if (!($118)) {
           label = 22;
           break L12;
          }
          $119 = Math_fround($116 - $113);
          $120 = Math_fround(Math_fround(1.0) - $113);
          $121 = Math_fround($119 / $120);
          $122 = Math_fround(Math_fround(1.0) - $121);
          $123 = ((($84)) + 36|0);
          $124 = loadf($123);
          $125 = Math_fround($122 * $124);
          $126 = ((($84)) + 40|0);
          $127 = loadf($126);
          $128 = Math_fround($122 * $127);
          $129 = ((($84)) + 44|0);
          $130 = loadf($129);
          $131 = Math_fround($121 * $130);
          $132 = ((($84)) + 48|0);
          $133 = loadf($132);
          $134 = Math_fround($121 * $133);
          $135 = Math_fround($125 + $131);
          $136 = Math_fround($128 + $134);
          storef($123,$135);
          storef($126,$136);
          $137 = ((($84)) + 52|0);
          $138 = loadf($137);
          $139 = Math_fround($122 * $138);
          $140 = ((($84)) + 56|0);
          $141 = loadf($140);
          $142 = Math_fround($121 * $141);
          $143 = Math_fround($139 + $142);
          storef($137,$143);
          storef($112,$116);
          $$0283 = $116;
         } else {
          $144 = $116 < $113;
          if ($144) {
           $145 = $116 < Math_fround(1.0);
           if (!($145)) {
            label = 26;
            break L12;
           }
           $146 = Math_fround($113 - $116);
           $147 = Math_fround(Math_fround(1.0) - $116);
           $148 = Math_fround($146 / $147);
           $149 = Math_fround(Math_fround(1.0) - $148);
           $150 = ((($86)) + 36|0);
           $151 = loadf($150);
           $152 = Math_fround($149 * $151);
           $153 = ((($86)) + 40|0);
           $154 = loadf($153);
           $155 = Math_fround($149 * $154);
           $156 = ((($86)) + 44|0);
           $157 = loadf($156);
           $158 = Math_fround($148 * $157);
           $159 = ((($86)) + 48|0);
           $160 = loadf($159);
           $161 = Math_fround($148 * $160);
           $162 = Math_fround($152 + $158);
           $163 = Math_fround($155 + $161);
           storef($150,$162);
           storef($153,$163);
           $164 = ((($86)) + 52|0);
           $165 = loadf($164);
           $166 = Math_fround($149 * $165);
           $167 = ((($86)) + 56|0);
           $168 = loadf($167);
           $169 = Math_fround($148 * $168);
           $170 = Math_fround($166 + $169);
           storef($164,$170);
           storef($115,$113);
           $$0283 = $113;
          } else {
           $$0283 = $113;
          }
         }
         $171 = $$0283 < Math_fround(1.0);
         if (!($171)) {
          label = 29;
          break L12;
         }
         $172 = ((($$0255405)) + 56|0);
         $173 = load4($172);
         $174 = ((($$0255405)) + 60|0);
         $175 = load4($174);
         store4($41,0);
         store4($42,0);
         storef($43,Math_fround(0.0));
         store4($44,0);
         store4($45,0);
         storef($46,Math_fround(0.0));
         $176 = ((($74)) + 12|0);
         $177 = load4($176);
         __ZN15b2DistanceProxy3SetEPK7b2Shapei($3,$177,$173);
         $178 = ((($76)) + 12|0);
         $179 = load4($178);
         __ZN15b2DistanceProxy3SetEPK7b2Shapei($47,$179,$175);
         ; store8($48,load8($111,4),4); store8($48+8 | 0,load8($111+8 | 0,4),4); store8($48+16 | 0,load8($111+16 | 0,4),4); store8($48+24 | 0,load8($111+24 | 0,4),4); store4($48+32 | 0,load4($111+32 | 0,4),4);
         ; store8($49,load8($114,4),4); store8($49+8 | 0,load8($114+8 | 0,4),4); store8($49+16 | 0,load8($114+16 | 0,4),4); store8($49+24 | 0,load8($114+24 | 0,4),4); store4($49+32 | 0,load4($114+32 | 0,4),4);
         storef($50,Math_fround(1.0));
         __Z14b2TimeOfImpactP11b2TOIOutputPK10b2TOIInput($4,$3);
         $180 = load4($4);
         $181 = ($180|0)==(3);
         if ($181) {
          $182 = loadf($51);
          $183 = Math_fround(Math_fround(1.0) - $$0283);
          $184 = Math_fround($183 * $182);
          $185 = Math_fround($$0283 + $184);
          $186 = $185 < Math_fround(1.0);
          $187 = $186 ? $185 : Math_fround(1.0);
          $$0278 = $187;
         } else {
          $$0278 = Math_fround(1.0);
         }
         $188 = ((($$0255405)) + 132|0);
         storef($188,$$0278);
         $189 = load4($62);
         $190 = $189 | 32;
         store4($62,$190);
         $$4282 = $$0278;
        } else {
         $71 = ((($$0255405)) + 132|0);
         $72 = loadf($71);
         $$4282 = $72;
        }
        $191 = $$4282 < $$0251403;
        $$1252 = $191 ? $$4282 : $$0251403;
        $$1 = $191 ? $$0255405 : $$0250404;
        $$3 = $$1;$$3254 = $$1252;
       }
      }
     } while(0);
     $192 = ((($$0255405)) + 12|0);
     $$0255 = load4($192);
     $193 = ($$0255|0)==(0|0);
     if ($193) {
      break;
     } else {
      $$0250404 = $$3;$$0251403 = $$3254;$$0255405 = $$0255;
     }
    }
    $60 = ($$3|0)==(0|0);
    $61 = $$3254 > Math_fround(0.999998807);
    $or$cond3 = $61 | $60;
    if ($or$cond3) {
     break L11;
    }
    $194 = ((($$3)) + 48|0);
    $195 = load4($194);
    $196 = ((($$3)) + 52|0);
    $197 = load4($196);
    $198 = ((($195)) + 8|0);
    $199 = load4($198);
    $200 = ((($197)) + 8|0);
    $201 = load4($200);
    $202 = ((($199)) + 28|0);
    ; store8($3,load8($202,4),4); store8($3+8 | 0,load8($202+8 | 0,4),4); store8($3+16 | 0,load8($202+16 | 0,4),4); store8($3+24 | 0,load8($202+24 | 0,4),4); store4($3+32 | 0,load4($202+32 | 0,4),4);
    $203 = ((($201)) + 28|0);
    ; store8($4,load8($203,4),4); store8($4+8 | 0,load8($203+8 | 0,4),4); store8($4+16 | 0,load8($203+16 | 0,4),4); store8($4+24 | 0,load8($203+24 | 0,4),4); store4($4+32 | 0,load4($203+32 | 0,4),4);
    $204 = ((($199)) + 60|0);
    $205 = loadf($204);
    $206 = $205 < Math_fround(1.0);
    if (!($206)) {
     label = 37;
     break;
    }
    $207 = Math_fround($$3254 - $205);
    $208 = Math_fround(Math_fround(1.0) - $205);
    $209 = Math_fround($207 / $208);
    $210 = Math_fround(Math_fround(1.0) - $209);
    $211 = ((($199)) + 36|0);
    $212 = loadf($211);
    $213 = Math_fround($210 * $212);
    $214 = ((($199)) + 40|0);
    $215 = loadf($214);
    $216 = Math_fround($210 * $215);
    $217 = ((($199)) + 44|0);
    $218 = loadf($217);
    $219 = Math_fround($209 * $218);
    $220 = ((($199)) + 48|0);
    $221 = loadf($220);
    $222 = Math_fround($209 * $221);
    $223 = Math_fround($213 + $219);
    $224 = Math_fround($216 + $222);
    storef($211,$223);
    storef($214,$224);
    $225 = ((($199)) + 52|0);
    $226 = loadf($225);
    $227 = Math_fround($210 * $226);
    $228 = ((($199)) + 56|0);
    $229 = loadf($228);
    $230 = Math_fround($209 * $229);
    $231 = Math_fround($227 + $230);
    storef($225,$231);
    storef($204,$$3254);
    $232 = ((($199)) + 44|0);
    $233 = ((($199)) + 36|0);
    $234 = load8($233,4);
    store8($232,$234,4);
    storef($228,$231);
    $235 = (Math_fround(_sinf($231)));
    $236 = ((($199)) + 20|0);
    storef($236,$235);
    $237 = (Math_fround(_cosf($231)));
    $238 = ((($199)) + 24|0);
    storef($238,$237);
    $239 = ((($199)) + 28|0);
    $240 = loadf($239);
    $241 = Math_fround($237 * $240);
    $242 = ((($199)) + 32|0);
    $243 = loadf($242);
    $244 = Math_fround($235 * $243);
    $245 = Math_fround($241 - $244);
    $246 = Math_fround($235 * $240);
    $247 = Math_fround($237 * $243);
    $248 = Math_fround($246 + $247);
    $249 = i64_trunc($234);
    $250 = i32_bc2f($249);
    $251 = Math_fround($250 - $245);
    $252 = i64_lshr($234,i64_const(32,0));
    $253 = i64_trunc($252);
    $254 = i32_bc2f($253);
    $255 = Math_fround($254 - $248);
    $256 = ((($199)) + 12|0);
    storef($256,$251);
    $$sroa_idx6$i307 = ((($199)) + 16|0);
    storef($$sroa_idx6$i307,$255);
    $257 = ((($201)) + 60|0);
    $258 = loadf($257);
    $259 = $258 < Math_fround(1.0);
    if (!($259)) {
     label = 39;
     break;
    }
    $260 = Math_fround($$3254 - $258);
    $261 = Math_fround(Math_fround(1.0) - $258);
    $262 = Math_fround($260 / $261);
    $263 = Math_fround(Math_fround(1.0) - $262);
    $264 = ((($201)) + 36|0);
    $265 = loadf($264);
    $266 = Math_fround($263 * $265);
    $267 = ((($201)) + 40|0);
    $268 = loadf($267);
    $269 = Math_fround($263 * $268);
    $270 = ((($201)) + 44|0);
    $271 = loadf($270);
    $272 = Math_fround($262 * $271);
    $273 = ((($201)) + 48|0);
    $274 = loadf($273);
    $275 = Math_fround($262 * $274);
    $276 = Math_fround($266 + $272);
    $277 = Math_fround($269 + $275);
    storef($264,$276);
    storef($267,$277);
    $278 = ((($201)) + 52|0);
    $279 = loadf($278);
    $280 = Math_fround($263 * $279);
    $281 = ((($201)) + 56|0);
    $282 = loadf($281);
    $283 = Math_fround($262 * $282);
    $284 = Math_fround($280 + $283);
    storef($278,$284);
    storef($257,$$3254);
    $285 = ((($201)) + 44|0);
    $286 = ((($201)) + 36|0);
    $287 = load8($286,4);
    store8($285,$287,4);
    storef($281,$284);
    $288 = (Math_fround(_sinf($284)));
    $289 = ((($201)) + 20|0);
    storef($289,$288);
    $290 = (Math_fround(_cosf($284)));
    $291 = ((($201)) + 24|0);
    storef($291,$290);
    $292 = ((($201)) + 28|0);
    $293 = loadf($292);
    $294 = Math_fround($290 * $293);
    $295 = ((($201)) + 32|0);
    $296 = loadf($295);
    $297 = Math_fround($288 * $296);
    $298 = Math_fround($294 - $297);
    $299 = Math_fround($288 * $293);
    $300 = Math_fround($290 * $296);
    $301 = Math_fround($299 + $300);
    $302 = i64_trunc($287);
    $303 = i32_bc2f($302);
    $304 = Math_fround($303 - $298);
    $305 = i64_lshr($287,i64_const(32,0));
    $306 = i64_trunc($305);
    $307 = i32_bc2f($306);
    $308 = Math_fround($307 - $301);
    $309 = ((($201)) + 12|0);
    storef($309,$304);
    $$sroa_idx6$i304 = ((($201)) + 16|0);
    storef($$sroa_idx6$i304,$308);
    $310 = load4($9);
    __ZN9b2Contact6UpdateEP17b2ContactListener($$3,$310);
    $311 = ((($$3)) + 4|0);
    $312 = load4($311);
    $313 = $312 & -33;
    store4($311,$313);
    $314 = ((($$3)) + 128|0);
    $315 = load4($314);
    $316 = (($315) + 1)|0;
    store4($314,$316);
    $317 = $312 & 6;
    $318 = ($317|0)==(6);
    if ($318) {
     $351 = ((($199)) + 4|0);
     $352 = load2($351);
     $353 = $352&65535;
     $354 = $353 & 2;
     $355 = ($354|0)==(0);
     if ($355) {
      $356 = $353 | 2;
      $357 = ((($199)) + 144|0);
      $358 = $356&65535;
      store2($351,$358);
      storef($357,Math_fround(0.0));
     }
     $359 = ((($201)) + 4|0);
     $360 = load2($359);
     $361 = $360&65535;
     $362 = $361 & 2;
     $363 = ($362|0)==(0);
     if ($363) {
      $364 = $361 | 2;
      $365 = ((($201)) + 144|0);
      $366 = $364&65535;
      store2($359,$366);
      storef($365,Math_fround(0.0));
     }
     store4($26,0);
     store4($27,0);
     store4($28,0);
     $367 = load4($29);
     $368 = ($367|0)>(0);
     if (!($368)) {
      label = 48;
      break;
     }
     $369 = ((($199)) + 8|0);
     store4($369,0);
     $370 = load4($30);
     store4($370,$199);
     store4($26,1);
     $371 = ($367|0)==(1);
     if ($371) {
      label = 50;
      break;
     }
     $372 = ((($201)) + 8|0);
     store4($372,1);
     $373 = load4($30);
     $374 = ((($373)) + 4|0);
     store4($374,$201);
     store4($26,2);
     $375 = load4($31);
     $376 = ($375|0)>(0);
     if (!($376)) {
      label = 52;
      break;
     }
     store4($27,1);
     $377 = load4($32);
     store4($377,$$3);
     $378 = load2($351);
     $379 = $378&65535;
     $380 = $379 | 1;
     $381 = $380&65535;
     store2($351,$381);
     $382 = load2($359);
     $383 = $382&65535;
     $384 = $383 | 1;
     $385 = $384&65535;
     store2($359,$385);
     $386 = $313 | 1;
     store4($311,$386);
     store4($5,$199);
     store4($33,$201);
     $$0261415 = 0;$397 = $199;
     while(1) {
      $396 = load4($397);
      $398 = ($396|0)==(2);
      L57: do {
       if ($398) {
        $399 = ((($397)) + 112|0);
        $$0256409 = load4($399);
        $400 = ($$0256409|0)==(0|0);
        if (!($400)) {
         $401 = ((($397)) + 4|0);
         $$0256410 = $$0256409;
         while(1) {
          $402 = load4($26);
          $403 = load4($29);
          $404 = ($402|0)==($403|0);
          if ($404) {
           break L57;
          }
          $405 = load4($27);
          $406 = load4($31);
          $407 = ($405|0)==($406|0);
          if ($407) {
           break L57;
          }
          $408 = ((($$0256410)) + 4|0);
          $409 = load4($408);
          $410 = ((($409)) + 4|0);
          $411 = load4($410);
          $412 = $411 & 1;
          $413 = ($412|0)==(0);
          L64: do {
           if ($413) {
            $414 = load4($$0256410);
            $415 = load4($414);
            $416 = ($415|0)==(2);
            do {
             if ($416) {
              $417 = load2($401);
              $418 = $417 & 8;
              $419 = ($418<<16>>16)==(0);
              if (!($419)) {
               break;
              }
              $420 = ((($414)) + 4|0);
              $421 = load2($420);
              $422 = $421 & 8;
              $423 = ($422<<16>>16)==(0);
              if ($423) {
               break L64;
              }
             }
            } while(0);
            $424 = ((($409)) + 48|0);
            $425 = load4($424);
            $426 = ((($425)) + 38|0);
            $427 = load1($426);
            $428 = ($427<<24>>24)==(0);
            if (!($428)) {
             break;
            }
            $429 = ((($409)) + 52|0);
            $430 = load4($429);
            $431 = ((($430)) + 38|0);
            $432 = load1($431);
            $433 = ($432<<24>>24)==(0);
            if (!($433)) {
             break;
            }
            $434 = ((($414)) + 28|0);
            ; store8($6,load8($434,4),4); store8($6+8 | 0,load8($434+8 | 0,4),4); store8($6+16 | 0,load8($434+16 | 0,4),4); store8($6+24 | 0,load8($434+24 | 0,4),4); store4($6+32 | 0,load4($434+32 | 0,4),4);
            $435 = ((($414)) + 4|0);
            $436 = load2($435);
            $437 = $436 & 1;
            $438 = ($437<<16>>16)==(0);
            if ($438) {
             $439 = ((($414)) + 60|0);
             $440 = loadf($439);
             $441 = $440 < Math_fround(1.0);
             if (!($441)) {
              label = 68;
              break L12;
             }
             $442 = Math_fround($$3254 - $440);
             $443 = Math_fround(Math_fround(1.0) - $440);
             $444 = Math_fround($442 / $443);
             $445 = Math_fround(Math_fround(1.0) - $444);
             $446 = ((($414)) + 36|0);
             $447 = loadf($446);
             $448 = Math_fround($445 * $447);
             $449 = ((($414)) + 40|0);
             $450 = loadf($449);
             $451 = Math_fround($445 * $450);
             $452 = ((($414)) + 44|0);
             $453 = loadf($452);
             $454 = Math_fround($444 * $453);
             $455 = ((($414)) + 48|0);
             $456 = loadf($455);
             $457 = Math_fround($444 * $456);
             $458 = Math_fround($448 + $454);
             $459 = Math_fround($451 + $457);
             storef($446,$458);
             storef($449,$459);
             $460 = ((($414)) + 52|0);
             $461 = loadf($460);
             $462 = Math_fround($445 * $461);
             $463 = ((($414)) + 56|0);
             $464 = loadf($463);
             $465 = Math_fround($444 * $464);
             $466 = Math_fround($462 + $465);
             storef($460,$466);
             storef($439,$$3254);
             $467 = ((($414)) + 44|0);
             $468 = ((($414)) + 36|0);
             $469 = load8($468,4);
             store8($467,$469,4);
             storef($463,$466);
             $470 = (Math_fround(_sinf($466)));
             $471 = ((($414)) + 20|0);
             storef($471,$470);
             $472 = (Math_fround(_cosf($466)));
             $473 = ((($414)) + 24|0);
             storef($473,$472);
             $474 = ((($414)) + 28|0);
             $475 = loadf($474);
             $476 = Math_fround($472 * $475);
             $477 = ((($414)) + 32|0);
             $478 = loadf($477);
             $479 = Math_fround($470 * $478);
             $480 = Math_fround($476 - $479);
             $481 = Math_fround($470 * $475);
             $482 = Math_fround($472 * $478);
             $483 = Math_fround($481 + $482);
             $484 = i64_trunc($469);
             $485 = i32_bc2f($484);
             $486 = Math_fround($485 - $480);
             $487 = i64_lshr($469,i64_const(32,0));
             $488 = i64_trunc($487);
             $489 = i32_bc2f($488);
             $490 = Math_fround($489 - $483);
             $491 = ((($414)) + 12|0);
             storef($491,$486);
             $$sroa_idx6$i = ((($414)) + 16|0);
             storef($$sroa_idx6$i,$490);
            }
            $492 = load4($9);
            __ZN9b2Contact6UpdateEP17b2ContactListener($409,$492);
            $493 = load4($410);
            $494 = $493 & 4;
            $495 = ($494|0)==(0);
            do {
             if ($495) {
              ; store8($434,load8($6,4),4); store8($434+8 | 0,load8($6+8 | 0,4),4); store8($434+16 | 0,load8($6+16 | 0,4),4); store8($434+24 | 0,load8($6+24 | 0,4),4); store4($434+32 | 0,load4($6+32 | 0,4),4);
              $496 = ((($414)) + 56|0);
              $497 = loadf($496);
              $498 = (Math_fround(_sinf($497)));
              $499 = ((($414)) + 20|0);
              storef($499,$498);
              $500 = (Math_fround(_cosf($497)));
              $501 = ((($414)) + 24|0);
              storef($501,$500);
              $502 = ((($414)) + 28|0);
              $503 = loadf($502);
              $504 = Math_fround($500 * $503);
              $505 = ((($414)) + 32|0);
              $506 = loadf($505);
              $507 = Math_fround($498 * $506);
              $508 = Math_fround($504 - $507);
              $509 = Math_fround($498 * $503);
              $510 = Math_fround($500 * $506);
              $511 = Math_fround($509 + $510);
              $512 = ((($414)) + 44|0);
              $513 = loadf($512);
              $514 = Math_fround($513 - $508);
              $515 = ((($414)) + 48|0);
              $516 = loadf($515);
              $517 = Math_fround($516 - $511);
              $518 = ((($414)) + 12|0);
              storef($518,$514);
              $$sroa_idx5$i289 = ((($414)) + 16|0);
              storef($$sroa_idx5$i289,$517);
             } else {
              $519 = $493 & 2;
              $520 = ($519|0)==(0);
              if ($520) {
               ; store8($434,load8($6,4),4); store8($434+8 | 0,load8($6+8 | 0,4),4); store8($434+16 | 0,load8($6+16 | 0,4),4); store8($434+24 | 0,load8($6+24 | 0,4),4); store4($434+32 | 0,load4($6+32 | 0,4),4);
               $521 = ((($414)) + 56|0);
               $522 = loadf($521);
               $523 = (Math_fround(_sinf($522)));
               $524 = ((($414)) + 20|0);
               storef($524,$523);
               $525 = (Math_fround(_cosf($522)));
               $526 = ((($414)) + 24|0);
               storef($526,$525);
               $527 = ((($414)) + 28|0);
               $528 = loadf($527);
               $529 = Math_fround($525 * $528);
               $530 = ((($414)) + 32|0);
               $531 = loadf($530);
               $532 = Math_fround($523 * $531);
               $533 = Math_fround($529 - $532);
               $534 = Math_fround($523 * $528);
               $535 = Math_fround($525 * $531);
               $536 = Math_fround($534 + $535);
               $537 = ((($414)) + 44|0);
               $538 = loadf($537);
               $539 = Math_fround($538 - $533);
               $540 = ((($414)) + 48|0);
               $541 = loadf($540);
               $542 = Math_fround($541 - $536);
               $543 = ((($414)) + 12|0);
               storef($543,$539);
               $$sroa_idx5$i = ((($414)) + 16|0);
               storef($$sroa_idx5$i,$542);
               break;
              }
              $544 = $493 | 1;
              store4($410,$544);
              $545 = load4($27);
              $546 = load4($31);
              $547 = ($545|0)<($546|0);
              if (!($547)) {
               label = 75;
               break L12;
              }
              $548 = (($545) + 1)|0;
              store4($27,$548);
              $549 = load4($32);
              $550 = (($549) + ($545<<2)|0);
              store4($550,$409);
              $551 = load2($435);
              $552 = $551&65535;
              $553 = $552 & 1;
              $554 = ($553|0)==(0);
              if (!($554)) {
               break;
              }
              $555 = $552 | 1;
              $556 = $555&65535;
              store2($435,$556);
              $557 = load4($414);
              $558 = ($557|0)!=(0);
              $559 = $552 & 2;
              $560 = ($559|0)==(0);
              $or$cond326 = $560 & $558;
              if ($or$cond326) {
               $561 = $552 | 3;
               $562 = ((($414)) + 144|0);
               $563 = $561&65535;
               store2($435,$563);
               storef($562,Math_fround(0.0));
              }
              $564 = load4($26);
              $565 = load4($29);
              $566 = ($564|0)<($565|0);
              if (!($566)) {
               label = 80;
               break L12;
              }
              $567 = ((($414)) + 8|0);
              store4($567,$564);
              $568 = load4($30);
              $569 = (($568) + ($564<<2)|0);
              store4($569,$414);
              $570 = (($564) + 1)|0;
              store4($26,$570);
             }
            } while(0);
           }
          } while(0);
          $571 = ((($$0256410)) + 12|0);
          $$0256 = load4($571);
          $572 = ($$0256|0)==(0|0);
          if ($572) {
           break;
          } else {
           $$0256410 = $$0256;
          }
         }
        }
       }
      } while(0);
      $573 = (($$0261415) + 1)|0;
      $574 = ($573|0)<(2);
      if (!($574)) {
       break;
      }
      $$phi$trans$insert = (($5) + ($573<<2)|0);
      $$pre = load4($$phi$trans$insert);
      $$0261415 = $573;$397 = $$pre;
     }
     $387 = Math_fround(Math_fround(1.0) - $$3254);
     $388 = loadf($1);
     $389 = Math_fround($387 * $388);
     storef($6,$389);
     $390 = Math_fround(Math_fround(1.0) / $389);
     storef($34,$390);
     storef($35,Math_fround(1.0));
     store4($36,20);
     $391 = load4($37);
     store4($38,$391);
     store1($39,0);
     $392 = load4($369);
     $393 = load4($372);
     __ZN8b2Island8SolveTOIERK10b2TimeStepii($2,$6,$392,$393);
     $394 = load4($26);
     $395 = ($394|0)>(0);
     if ($395) {
      $$0248420 = 0;
      while(1) {
       $577 = load4($30);
       $578 = (($577) + ($$0248420<<2)|0);
       $579 = load4($578);
       $580 = ((($579)) + 4|0);
       $581 = load2($580);
       $582 = $581&65535;
       $583 = $582 & 65534;
       $584 = $583&65535;
       store2($580,$584);
       $585 = load4($579);
       $586 = ($585|0)==(2);
       if ($586) {
        __ZN6b2Body19SynchronizeFixturesEv($579);
        $587 = ((($579)) + 112|0);
        $$0416 = load4($587);
        $588 = ($$0416|0)==(0|0);
        if (!($588)) {
         $$0417 = $$0416;
         while(1) {
          $589 = ((($$0417)) + 4|0);
          $590 = load4($589);
          $591 = ((($590)) + 4|0);
          $592 = load4($591);
          $593 = $592 & -34;
          store4($591,$593);
          $594 = ((($$0417)) + 12|0);
          $$0 = load4($594);
          $595 = ($$0|0)==(0|0);
          if ($595) {
           break;
          } else {
           $$0417 = $$0;
          }
         }
        }
       }
       $596 = (($$0248420) + 1)|0;
       $597 = load4($26);
       $598 = ($596|0)<($597|0);
       if ($598) {
        $$0248420 = $596;
       } else {
        break;
       }
      }
     }
     __ZN16b2ContactManager15FindNewContactsEv($8);
     $575 = load1($40);
     $576 = ($575<<24>>24)==(0);
     if (!($576)) {
      label = 91;
      break;
     }
    } else {
     $319 = $312 & -37;
     store4($311,$319);
     ; store8($202,load8($3,4),4); store8($202+8 | 0,load8($3+8 | 0,4),4); store8($202+16 | 0,load8($3+16 | 0,4),4); store8($202+24 | 0,load8($3+24 | 0,4),4); store4($202+32 | 0,load4($3+32 | 0,4),4);
     ; store8($203,load8($4,4),4); store8($203+8 | 0,load8($4+8 | 0,4),4); store8($203+16 | 0,load8($4+16 | 0,4),4); store8($203+24 | 0,load8($4+24 | 0,4),4); store4($203+32 | 0,load4($4+32 | 0,4),4);
     $320 = loadf($228);
     $321 = (Math_fround(_sinf($320)));
     storef($236,$321);
     $322 = (Math_fround(_cosf($320)));
     storef($238,$322);
     $323 = loadf($239);
     $324 = Math_fround($322 * $323);
     $325 = loadf($242);
     $326 = Math_fround($321 * $325);
     $327 = Math_fround($324 - $326);
     $328 = Math_fround($321 * $323);
     $329 = Math_fround($322 * $325);
     $330 = Math_fround($328 + $329);
     $331 = loadf($217);
     $332 = Math_fround($331 - $327);
     $333 = loadf($220);
     $334 = Math_fround($333 - $330);
     storef($256,$332);
     storef($$sroa_idx6$i307,$334);
     $335 = loadf($281);
     $336 = (Math_fround(_sinf($335)));
     storef($289,$336);
     $337 = (Math_fround(_cosf($335)));
     storef($291,$337);
     $338 = loadf($292);
     $339 = Math_fround($337 * $338);
     $340 = loadf($295);
     $341 = Math_fround($336 * $340);
     $342 = Math_fround($339 - $341);
     $343 = Math_fround($336 * $338);
     $344 = Math_fround($337 * $340);
     $345 = Math_fround($343 + $344);
     $346 = loadf($270);
     $347 = Math_fround($346 - $342);
     $348 = loadf($273);
     $349 = Math_fround($348 - $345);
     storef($309,$347);
     storef($$sroa_idx6$i304,$349);
    }
    $$0255402 = load4($$pre$phiZ2D);
    $350 = ($$0255402|0)==(0|0);
    if ($350) {
     break L11;
    } else {
     $$0255402435 = $$0255402;
    }
   }
   switch (label|0) {
    case 17: {
     ___assert_fail((3531|0),(3315|0),641,(5615|0));
     // unreachable;
     break;
    }
    case 22: {
     ___assert_fail((3582|0),(3596|0),723,(3620|0));
     // unreachable;
     break;
    }
    case 26: {
     ___assert_fail((3582|0),(3596|0),723,(3620|0));
     // unreachable;
     break;
    }
    case 29: {
     ___assert_fail((3582|0),(3315|0),676,(5615|0));
     // unreachable;
     break;
    }
    case 37: {
     ___assert_fail((3582|0),(3596|0),723,(3620|0));
     // unreachable;
     break;
    }
    case 39: {
     ___assert_fail((3582|0),(3596|0),723,(3620|0));
     // unreachable;
     break;
    }
    case 48: {
     ___assert_fail((3381|0),(3410|0),54,(3438|0));
     // unreachable;
     break;
    }
    case 50: {
     ___assert_fail((3381|0),(3410|0),54,(3438|0));
     // unreachable;
     break;
    }
    case 52: {
     ___assert_fail((3442|0),(3410|0),62,(3438|0));
     // unreachable;
     break;
    }
    case 68: {
     ___assert_fail((3582|0),(3596|0),723,(3620|0));
     // unreachable;
     break;
    }
    case 75: {
     ___assert_fail((3442|0),(3410|0),62,(3438|0));
     // unreachable;
     break;
    }
    case 80: {
     ___assert_fail((3381|0),(3410|0),54,(3438|0));
     // unreachable;
     break;
    }
    case 91: {
     store1($11,0);
     __ZN8b2IslandD2Ev($2);
     STACKTOP = sp;return;
     break;
    }
   }
  }
 } while(0);
 store1($11,1);
 __ZN8b2IslandD2Ev($2);
 STACKTOP = sp;return;
}
function __ZN7b2World4StepEfii($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = Math_fround($1);
 $2 = $2|0;
 $3 = $3|0;
 var $$0$i = 0, $$06$i = 0, $$07$i = 0, $$pr = Math_fround(0), $$pre = Math_fround(0), $$sink = Math_fround(0), $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = Math_fround(0), $20 = 0, $21 = 0, $22 = Math_fround(0), $23 = Math_fround(0);
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = Math_fround(0), $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = Math_fround(0), $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = 0;
 var $43 = 0, $44 = Math_fround(0), $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = Math_fround(0), $58 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $or$cond = 0, $or$cond8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $4 = sp + 25|0;
 $5 = sp;
 $6 = sp + 24|0;
 $7 = ((($0)) + 102868|0);
 $8 = load4($7);
 $9 = $8 & 1;
 $10 = ($9|0)==(0);
 if ($10) {
  $15 = $8;
 } else {
  $11 = ((($0)) + 102872|0);
  __ZN16b2ContactManager15FindNewContactsEv($11);
  $12 = load4($7);
  $13 = $12 & -2;
  store4($7,$13);
  $15 = $13;
 }
 $14 = $15 | 2;
 store4($7,$14);
 storef($5,$1);
 $16 = ((($5)) + 12|0);
 store4($16,$2);
 $17 = ((($5)) + 16|0);
 store4($17,$3);
 $18 = $1 > Math_fround(0.0);
 $19 = Math_fround(Math_fround(1.0) / $1);
 $$sink = $18 ? $19 : Math_fround(0.0);
 $20 = ((($5)) + 4|0);
 storef($20,$$sink);
 $21 = ((($0)) + 102988|0);
 $22 = loadf($21);
 $23 = Math_fround($22 * $1);
 $24 = ((($5)) + 8|0);
 storef($24,$23);
 $25 = ((($0)) + 102992|0);
 $26 = load1($25);
 $27 = ((($5)) + 20|0);
 store1($27,$26);
 $28 = ((($0)) + 102872|0);
 __ZN16b2ContactManager7CollideEv($28);
 $29 = (Math_fround(__ZNK7b2Timer15GetMillisecondsEv($6)));
 $30 = ((($0)) + 103000|0);
 storef($30,$29);
 $31 = ((($0)) + 102995|0);
 $32 = load1($31);
 $33 = ($32<<24>>24)!=(0);
 $or$cond = $33 & $18;
 if ($or$cond) {
  __ZN7b2World5SolveERK10b2TimeStep($0,$5);
  $34 = (Math_fround(__ZNK7b2Timer15GetMillisecondsEv($6)));
  $35 = ((($0)) + 103004|0);
  storef($35,$34);
  $$pre = loadf($5);
  $40 = $$pre;
 } else {
  $40 = $1;
 }
 $36 = ((($0)) + 102993|0);
 $37 = load1($36);
 $38 = ($37<<24>>24)!=(0);
 $39 = $40 > Math_fround(0.0);
 $or$cond8 = $38 & $39;
 if ($or$cond8) {
  __ZN7b2World8SolveTOIERK10b2TimeStep($0,$5);
  $41 = (Math_fround(__ZNK7b2Timer15GetMillisecondsEv($6)));
  $42 = ((($0)) + 103024|0);
  storef($42,$41);
  $$pr = loadf($5);
  $44 = $$pr;
 } else {
  $44 = $40;
 }
 $43 = $44 > Math_fround(0.0);
 if ($43) {
  $45 = load4($20);
  store4($21,$45);
 }
 $46 = load4($7);
 $47 = $46 & 4;
 $48 = ($47|0)==(0);
 if ($48) {
  $56 = $46 & -3;
  store4($7,$56);
  $57 = (Math_fround(__ZNK7b2Timer15GetMillisecondsEv($4)));
  $58 = ((($0)) + 102996|0);
  storef($58,$57);
  STACKTOP = sp;return;
 }
 $49 = ((($0)) + 102952|0);
 $$06$i = load4($49);
 $50 = ($$06$i|0)==(0|0);
 if ($50) {
  $56 = $46 & -3;
  store4($7,$56);
  $57 = (Math_fround(__ZNK7b2Timer15GetMillisecondsEv($4)));
  $58 = ((($0)) + 102996|0);
  storef($58,$57);
  STACKTOP = sp;return;
 } else {
  $$07$i = $$06$i;
 }
 while(1) {
  $51 = ((($$07$i)) + 76|0);
  storef($51,Math_fround(0.0));
  $52 = ((($$07$i)) + 80|0);
  storef($52,Math_fround(0.0));
  $53 = ((($$07$i)) + 84|0);
  storef($53,Math_fround(0.0));
  $54 = ((($$07$i)) + 96|0);
  $$0$i = load4($54);
  $55 = ($$0$i|0)==(0|0);
  if ($55) {
   break;
  } else {
   $$07$i = $$0$i;
  }
 }
 $56 = $46 & -3;
 store4($7,$56);
 $57 = (Math_fround(__ZNK7b2Timer15GetMillisecondsEv($4)));
 $58 = ((($0)) + 102996|0);
 storef($58,$57);
 STACKTOP = sp;return;
}
function __ZN15b2ContactFilterD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN15b2ContactFilterD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZN15b2ContactFilter13ShouldCollideEP9b2FixtureS1_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($1)) + 36|0);
 $4 = load2($3);
 $5 = ((($2)) + 36|0);
 $6 = load2($5);
 $7 = ($4<<16>>16)!=($6<<16>>16);
 $8 = ($4<<16>>16)==(0);
 $or$cond = $8 | $7;
 if (!($or$cond)) {
  $9 = ($4<<16>>16)>(0);
  $$0 = $9;
  return ($$0|0);
 }
 $10 = ((($1)) + 34|0);
 $11 = load2($10);
 $12 = ((($2)) + 32|0);
 $13 = load2($12);
 $14 = $13 & $11;
 $15 = ($14<<16>>16)==(0);
 if ($15) {
  $$0 = 0;
  return ($$0|0);
 }
 $16 = ((($1)) + 32|0);
 $17 = load2($16);
 $18 = ((($2)) + 34|0);
 $19 = load2($18);
 $20 = $19 & $17;
 $21 = ($20<<16>>16)!=(0);
 $$0 = $21;
 return ($$0|0);
}
function __ZN9b2Contact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = load1(10858);
 $6 = ($5<<24>>24)==(0);
 if ($6) {
  store4(9428,3);
  store4((9432),3);
  store1((9436),1);
  store4((9524),4);
  store4((9528),4);
  store1((9532),1);
  store4((9452),4);
  store4((9456),4);
  store1((9460),0);
  store4((9548),5);
  store4((9552),5);
  store1((9556),1);
  store4((9476),6);
  store4((9480),6);
  store1((9484),1);
  store4((9440),6);
  store4((9444),6);
  store1((9448),0);
  store4((9500),7);
  store4((9504),7);
  store1((9508),1);
  store4((9536),7);
  store4((9540),7);
  store1((9544),0);
  store4((9572),8);
  store4((9576),8);
  store1((9580),1);
  store4((9464),8);
  store4((9468),8);
  store1((9472),0);
  store4((9596),9);
  store4((9600),9);
  store1((9604),1);
  store4((9560),9);
  store4((9564),9);
  store1((9568),0);
  store1(10858,1);
 }
 $7 = ((($0)) + 12|0);
 $8 = load4($7);
 $9 = ((($8)) + 4|0);
 $10 = load4($9);
 $11 = ((($2)) + 12|0);
 $12 = load4($11);
 $13 = ((($12)) + 4|0);
 $14 = load4($13);
 $15 = ($10>>>0)<(4);
 if (!($15)) {
  ___assert_fail((3646|0),(3689|0),80,(3770|0));
  // unreachable;
 }
 $16 = ($14>>>0)<(4);
 if (!($16)) {
  ___assert_fail((3727|0),(3689|0),81,(3770|0));
  // unreachable;
 }
 $17 = ((9428 + (($10*48)|0)|0) + (($14*12)|0)|0);
 $18 = load4($17);
 $19 = ($18|0)==(0|0);
 if ($19) {
  $$0 = 0;
  return ($$0|0);
 }
 $20 = ((((9428 + (($10*48)|0)|0) + (($14*12)|0)|0)) + 8|0);
 $21 = load1($20);
 $22 = ($21<<24>>24)==(0);
 if ($22) {
  $24 = (FUNCTION_TABLE_iiiiii[$18 & 15]($2,$3,$0,$1,$4)|0);
  $$0 = $24;
  return ($$0|0);
 } else {
  $23 = (FUNCTION_TABLE_iiiiii[$18 & 15]($0,$1,$2,$3,$4)|0);
  $$0 = $23;
  return ($$0|0);
 }
 return (0)|0;
}
function __ZN9b2Contact7DestroyEPS_P16b2BlockAllocator($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$phi$trans$insert22 = 0, $$pre23 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load1(10858);
 $3 = ($2<<24>>24)==(0);
 if ($3) {
  ___assert_fail((3777|0),(3689|0),103,(3799|0));
  // unreachable;
 }
 $4 = ((($0)) + 124|0);
 $5 = load4($4);
 $6 = ($5|0)>(0);
 $7 = ((($0)) + 48|0);
 $8 = load4($7);
 if ($6) {
  $9 = ((($8)) + 8|0);
  $10 = load4($9);
  $11 = ((($10)) + 4|0);
  $12 = load2($11);
  $13 = $12&65535;
  $14 = $13 & 2;
  $15 = ($14|0)==(0);
  if ($15) {
   $16 = $13 | 2;
   $17 = ((($10)) + 144|0);
   $18 = $16&65535;
   store2($11,$18);
   storef($17,Math_fround(0.0));
  }
  $19 = ((($0)) + 52|0);
  $20 = load4($19);
  $21 = ((($20)) + 8|0);
  $22 = load4($21);
  $23 = ((($22)) + 4|0);
  $24 = load2($23);
  $25 = $24&65535;
  $26 = $25 & 2;
  $27 = ($26|0)==(0);
  if ($27) {
   $28 = $25 | 2;
   $29 = ((($22)) + 144|0);
   $30 = $28&65535;
   store2($23,$30);
   storef($29,Math_fround(0.0));
   $36 = $20;
  } else {
   $36 = $20;
  }
 } else {
  $$phi$trans$insert22 = ((($0)) + 52|0);
  $$pre23 = load4($$phi$trans$insert22);
  $36 = $$pre23;
 }
 $31 = ((($8)) + 12|0);
 $32 = load4($31);
 $33 = ((($32)) + 4|0);
 $34 = load4($33);
 $35 = ((($36)) + 12|0);
 $37 = load4($35);
 $38 = ((($37)) + 4|0);
 $39 = load4($38);
 $40 = ($34|0)>(-1);
 $41 = ($39|0)<(4);
 $or$cond = $40 & $41;
 if ($or$cond) {
  $42 = ((((9428 + (($34*48)|0)|0) + (($39*12)|0)|0)) + 4|0);
  $43 = load4($42);
  FUNCTION_TABLE_vii[$43 & 15]($0,$1);
  return;
 } else {
  ___assert_fail((3807|0),(3689|0),114,(3799|0));
  // unreachable;
 }
}
function __ZN9b2ContactC2EP9b2FixtureiS1_i($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = Math_fround(0), $15 = 0, $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = 0, $20 = 0, $21 = Math_fround(0), $22 = 0, $23 = Math_fround(0), $24 = 0, $25 = Math_fround(0), $26 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($0,(1572));
 $5 = ((($0)) + 4|0);
 store4($5,4);
 $6 = ((($0)) + 48|0);
 store4($6,$1);
 $7 = ((($0)) + 52|0);
 store4($7,$3);
 $8 = ((($0)) + 56|0);
 store4($8,$2);
 $9 = ((($0)) + 60|0);
 store4($9,$4);
 $10 = ((($0)) + 124|0);
 store4($10,0);
 $11 = ((($0)) + 8|0);
 $12 = ((($0)) + 128|0);
 store4($12,0);
 $13 = ((($1)) + 16|0);
 ; store8($11,i64_const(0,0),4); store8($11+8|0,i64_const(0,0),4); store8($11+16|0,i64_const(0,0),4); store8($11+24|0,i64_const(0,0),4); store8($11+32|0,i64_const(0,0),4);
 $14 = loadf($13);
 $15 = ((($3)) + 16|0);
 $16 = loadf($15);
 $17 = Math_fround($14 * $16);
 $18 = (Math_fround(Math_sqrt((Math_fround($17)))));
 $19 = ((($0)) + 136|0);
 storef($19,$18);
 $20 = ((($1)) + 20|0);
 $21 = loadf($20);
 $22 = ((($3)) + 20|0);
 $23 = loadf($22);
 $24 = $21 > $23;
 $25 = $24 ? $21 : $23;
 $26 = ((($0)) + 140|0);
 storef($26,$25);
 return;
}
function __ZN9b2ContactD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN9b2ContactD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZN9b2Contact6UpdateEP17b2ContactListener($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0$off0 = 0, $$06879$us = 0, $$06980 = 0, $$06980$us = 0, $$not = 0, $$not76 = 0, $$pre = 0, $$pre$phiZ2D = 0, $$sroa$0$0$$sroa_idx$us = 0, $$sroa$0$0$copyload$us = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0;
 var $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0;
 var $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0;
 var $92 = 0, $93 = 0, $94 = 0, $or$cond = 0, $or$cond3 = 0, $or$cond73 = 0, $or$cond74 = 0, $or$cond77 = 0, $storemerge = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $2 = sp;
 $3 = ((($0)) + 64|0);
 ; store8($2,load8($3,4),4); store8($2+8 | 0,load8($3+8 | 0,4),4); store8($2+16 | 0,load8($3+16 | 0,4),4); store8($2+24 | 0,load8($3+24 | 0,4),4); store8($2+32 | 0,load8($3+32 | 0,4),4); store8($2+40 | 0,load8($3+40 | 0,4),4); store8($2+48 | 0,load8($3+48 | 0,4),4); store8($2+56 | 0,load8($3+56 | 0,4),4);
 $4 = ((($0)) + 4|0);
 $5 = load4($4);
 $6 = $5 | 4;
 store4($4,$6);
 $7 = $5 >>> 1;
 $8 = ((($0)) + 48|0);
 $9 = load4($8);
 $10 = ((($9)) + 38|0);
 $11 = load1($10);
 $12 = ((($0)) + 52|0);
 $13 = load4($12);
 $14 = ((($13)) + 38|0);
 $15 = load1($14);
 $16 = $15 | $11;
 $17 = ($16<<24>>24)!=(0);
 $18 = ((($9)) + 8|0);
 $19 = load4($18);
 $20 = ((($13)) + 8|0);
 $21 = load4($20);
 $22 = ((($19)) + 12|0);
 $23 = ((($21)) + 12|0);
 if ($17) {
  $24 = ((($9)) + 12|0);
  $25 = load4($24);
  $26 = ((($13)) + 12|0);
  $27 = load4($26);
  $28 = ((($0)) + 56|0);
  $29 = load4($28);
  $30 = ((($0)) + 60|0);
  $31 = load4($30);
  $32 = (__Z13b2TestOverlapPK7b2ShapeiS1_iRK11b2TransformS4_($25,$29,$27,$31,$22,$23)|0);
  $33 = ((($0)) + 124|0);
  store4($33,0);
  $$pre = $7 & 1;
  $$0$off0 = $32;$$pre$phiZ2D = $$pre;
 } else {
  $34 = load4($0);
  $35 = load4($34);
  FUNCTION_TABLE_viiii[$35 & 15]($0,$3,$22,$23);
  $36 = ((($0)) + 124|0);
  $37 = load4($36);
  $38 = ($37|0)>(0);
  L4: do {
   if ($38) {
    $39 = ((($2)) + 60|0);
    $40 = load4($39);
    $41 = ($40|0)>(0);
    if ($41) {
     $$06980$us = 0;
    } else {
     $$06980 = 0;
     while(1) {
      $59 = (((((($0)) + 64|0) + (($$06980*20)|0)|0)) + 8|0);
      storef($59,Math_fround(0.0));
      $60 = (((((($0)) + 64|0) + (($$06980*20)|0)|0)) + 12|0);
      storef($60,Math_fround(0.0));
      $61 = (($$06980) + 1)|0;
      $62 = load4($36);
      $63 = ($61|0)<($62|0);
      if ($63) {
       $$06980 = $61;
      } else {
       break L4;
      }
     }
    }
    while(1) {
     $42 = (((((($0)) + 64|0) + (($$06980$us*20)|0)|0)) + 8|0);
     storef($42,Math_fround(0.0));
     $43 = (((((($0)) + 64|0) + (($$06980$us*20)|0)|0)) + 12|0);
     storef($43,Math_fround(0.0));
     $$sroa$0$0$$sroa_idx$us = (((((($0)) + 64|0) + (($$06980$us*20)|0)|0)) + 16|0);
     $$sroa$0$0$copyload$us = load4($$sroa$0$0$$sroa_idx$us);
     $$06879$us = 0;
     while(1) {
      $44 = (((($2) + (($$06879$us*20)|0)|0)) + 16|0);
      $45 = load4($44);
      $46 = ($45|0)==($$sroa$0$0$copyload$us|0);
      if ($46) {
       label = 8;
       break;
      }
      $47 = (($$06879$us) + 1)|0;
      $48 = ($47|0)<($40|0);
      if ($48) {
       $$06879$us = $47;
      } else {
       break;
      }
     }
     if ((label|0) == 8) {
      label = 0;
      $49 = (((($2) + (($$06879$us*20)|0)|0)) + 8|0);
      $50 = load4($49);
      store4($42,$50);
      $51 = (((($2) + (($$06879$us*20)|0)|0)) + 12|0);
      $52 = load4($51);
      store4($43,$52);
     }
     $53 = (($$06980$us) + 1)|0;
     $54 = load4($36);
     $55 = ($53|0)<($54|0);
     if ($55) {
      $$06980$us = $53;
     } else {
      break;
     }
    }
   }
  } while(0);
  $56 = $7 & 1;
  $57 = ($56|0)!=(0);
  $58 = $57 ^ $38;
  if ($58) {
   $64 = ((($19)) + 4|0);
   $65 = load2($64);
   $66 = $65&65535;
   $67 = $66 & 2;
   $68 = ($67|0)==(0);
   if ($68) {
    $69 = $66 | 2;
    $70 = ((($19)) + 144|0);
    $71 = $69&65535;
    store2($64,$71);
    storef($70,Math_fround(0.0));
   }
   $72 = ((($21)) + 4|0);
   $73 = load2($72);
   $74 = $73&65535;
   $75 = $74 & 2;
   $76 = ($75|0)==(0);
   if ($76) {
    $77 = $74 | 2;
    $78 = ((($21)) + 144|0);
    $79 = $77&65535;
    store2($72,$79);
    storef($78,Math_fround(0.0));
    $$0$off0 = $38;$$pre$phiZ2D = $56;
   } else {
    $$0$off0 = $38;$$pre$phiZ2D = $56;
   }
  } else {
   $$0$off0 = $38;$$pre$phiZ2D = $56;
  }
 }
 $80 = load4($4);
 $81 = $80 & -3;
 $82 = $80 | 2;
 $storemerge = $$0$off0 ? $82 : $81;
 store4($4,$storemerge);
 $83 = ($$pre$phiZ2D|0)==(0);
 $84 = ($1|0)!=(0|0);
 $or$cond = $84 & $$0$off0;
 $or$cond73 = $83 & $or$cond;
 if ($or$cond73) {
  $85 = load4($1);
  $86 = ((($85)) + 8|0);
  $87 = load4($86);
  FUNCTION_TABLE_vii[$87 & 15]($1,$0);
 }
 $$not76 = $83 ^ 1;
 $88 = $$0$off0 ^ 1;
 $or$cond3 = $84 & $88;
 $or$cond77 = $or$cond3 & $$not76;
 if ($or$cond77) {
  $89 = load4($1);
  $90 = ((($89)) + 12|0);
  $91 = load4($90);
  FUNCTION_TABLE_vii[$91 & 15]($1,$0);
 }
 $$not = $17 ^ 1;
 $or$cond74 = $or$cond & $$not;
 if (!($or$cond74)) {
  STACKTOP = sp;return;
 }
 $92 = load4($1);
 $93 = ((($92)) + 16|0);
 $94 = load4($93);
 FUNCTION_TABLE_viii[$94 & 3]($1,$0,$2);
 STACKTOP = sp;return;
}
function __ZN22b2EdgeAndCircleContact8EvaluateEP10b2ManifoldRK11b2TransformS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($0)) + 48|0);
 $5 = load4($4);
 $6 = ((($5)) + 12|0);
 $7 = load4($6);
 $8 = ((($0)) + 52|0);
 $9 = load4($8);
 $10 = ((($9)) + 12|0);
 $11 = load4($10);
 __Z22b2CollideEdgeAndCircleP10b2ManifoldPK11b2EdgeShapeRK11b2TransformPK13b2CircleShapeS6_($1,$7,$2,$11,$3);
 return;
}
function __ZN22b2EdgeAndCircleContactD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZN22b2EdgeAndCircleContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = (__ZN16b2BlockAllocator8AllocateEi($4,144)|0);
 __ZN9b2ContactC2EP9b2FixtureiS1_i($5,$0,0,$2,0);
 store4($5,(1592));
 $6 = ((($5)) + 48|0);
 $7 = load4($6);
 $8 = ((($7)) + 12|0);
 $9 = load4($8);
 $10 = ((($9)) + 4|0);
 $11 = load4($10);
 $12 = ($11|0)==(1);
 if (!($12)) {
  ___assert_fail((3986|0),(3886|0),41,(3937|0));
  // unreachable;
 }
 $13 = ((($5)) + 52|0);
 $14 = load4($13);
 $15 = ((($14)) + 12|0);
 $16 = load4($15);
 $17 = ((($16)) + 4|0);
 $18 = load4($17);
 $19 = ($18|0)==(0);
 if ($19) {
  return ($5|0);
 } else {
  ___assert_fail((6062|0),(3886|0),42,(3937|0));
  // unreachable;
 }
 return (0)|0;
}
function __ZN22b2EdgeAndCircleContact7DestroyEP9b2ContactP16b2BlockAllocator($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = ((($2)) + 4|0);
 $4 = load4($3);
 FUNCTION_TABLE_vi[$4 & 31]($0);
 __ZN16b2BlockAllocator4FreeEPvi($1,$0,144);
 return;
}
function __ZN23b2EdgeAndPolygonContact8EvaluateEP10b2ManifoldRK11b2TransformS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($0)) + 48|0);
 $5 = load4($4);
 $6 = ((($5)) + 12|0);
 $7 = load4($6);
 $8 = ((($0)) + 52|0);
 $9 = load4($8);
 $10 = ((($9)) + 12|0);
 $11 = load4($10);
 __Z23b2CollideEdgeAndPolygonP10b2ManifoldPK11b2EdgeShapeRK11b2TransformPK14b2PolygonShapeS6_($1,$7,$2,$11,$3);
 return;
}
function __ZN23b2EdgeAndPolygonContactD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZN23b2EdgeAndPolygonContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = (__ZN16b2BlockAllocator8AllocateEi($4,144)|0);
 __ZN9b2ContactC2EP9b2FixtureiS1_i($5,$0,0,$2,0);
 store4($5,(1612));
 $6 = ((($5)) + 48|0);
 $7 = load4($6);
 $8 = ((($7)) + 12|0);
 $9 = load4($8);
 $10 = ((($9)) + 4|0);
 $11 = load4($10);
 $12 = ($11|0)==(1);
 if (!($12)) {
  ___assert_fail((3986|0),(4027|0),41,(4079|0));
  // unreachable;
 }
 $13 = ((($5)) + 52|0);
 $14 = load4($13);
 $15 = ((($14)) + 12|0);
 $16 = load4($15);
 $17 = ((($16)) + 4|0);
 $18 = load4($17);
 $19 = ($18|0)==(2);
 if ($19) {
  return ($5|0);
 } else {
  ___assert_fail((5897|0),(4027|0),42,(4079|0));
  // unreachable;
 }
 return (0)|0;
}
function __ZN23b2EdgeAndPolygonContact7DestroyEP9b2ContactP16b2BlockAllocator($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = ((($2)) + 4|0);
 $4 = load4($3);
 FUNCTION_TABLE_vi[$4 & 31]($0);
 __ZN16b2BlockAllocator4FreeEPvi($1,$0,144);
 return;
}
function __ZN25b2PolygonAndCircleContact8EvaluateEP10b2ManifoldRK11b2TransformS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($0)) + 48|0);
 $5 = load4($4);
 $6 = ((($5)) + 12|0);
 $7 = load4($6);
 $8 = ((($0)) + 52|0);
 $9 = load4($8);
 $10 = ((($9)) + 12|0);
 $11 = load4($10);
 __Z25b2CollidePolygonAndCircleP10b2ManifoldPK14b2PolygonShapeRK11b2TransformPK13b2CircleShapeS6_($1,$7,$2,$11,$3);
 return;
}
function __ZN25b2PolygonAndCircleContactD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZN25b2PolygonAndCircleContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = (__ZN16b2BlockAllocator8AllocateEi($4,144)|0);
 __ZN9b2ContactC2EP9b2FixtureiS1_i($5,$0,0,$2,0);
 store4($5,(1632));
 $6 = ((($5)) + 48|0);
 $7 = load4($6);
 $8 = ((($7)) + 12|0);
 $9 = load4($8);
 $10 = ((($9)) + 4|0);
 $11 = load4($10);
 $12 = ($11|0)==(2);
 if (!($12)) {
  ___assert_fail((4230|0),(4131|0),41,(4185|0));
  // unreachable;
 }
 $13 = ((($5)) + 52|0);
 $14 = load4($13);
 $15 = ((($14)) + 12|0);
 $16 = load4($15);
 $17 = ((($16)) + 4|0);
 $18 = load4($17);
 $19 = ($18|0)==(0);
 if ($19) {
  return ($5|0);
 } else {
  ___assert_fail((6062|0),(4131|0),42,(4185|0));
  // unreachable;
 }
 return (0)|0;
}
function __ZN25b2PolygonAndCircleContact7DestroyEP9b2ContactP16b2BlockAllocator($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = ((($2)) + 4|0);
 $4 = load4($3);
 FUNCTION_TABLE_vi[$4 & 31]($0);
 __ZN16b2BlockAllocator4FreeEPvi($1,$0,144);
 return;
}
function __ZN16b2PolygonContact8EvaluateEP10b2ManifoldRK11b2TransformS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($0)) + 48|0);
 $5 = load4($4);
 $6 = ((($5)) + 12|0);
 $7 = load4($6);
 $8 = ((($0)) + 52|0);
 $9 = load4($8);
 $10 = ((($9)) + 12|0);
 $11 = load4($10);
 __Z17b2CollidePolygonsP10b2ManifoldPK14b2PolygonShapeRK11b2TransformS3_S6_($1,$7,$2,$11,$3);
 return;
}
function __ZN16b2PolygonContactD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZN16b2PolygonContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = (__ZN16b2BlockAllocator8AllocateEi($4,144)|0);
 __ZN9b2ContactC2EP9b2FixtureiS1_i($5,$0,0,$2,0);
 store4($5,(1652));
 $6 = ((($5)) + 48|0);
 $7 = load4($6);
 $8 = ((($7)) + 12|0);
 $9 = load4($8);
 $10 = ((($9)) + 4|0);
 $11 = load4($10);
 $12 = ($11|0)==(2);
 if (!($12)) {
  ___assert_fail((4230|0),(4274|0),44,(4319|0));
  // unreachable;
 }
 $13 = ((($5)) + 52|0);
 $14 = load4($13);
 $15 = ((($14)) + 12|0);
 $16 = load4($15);
 $17 = ((($16)) + 4|0);
 $18 = load4($17);
 $19 = ($18|0)==(2);
 if ($19) {
  return ($5|0);
 } else {
  ___assert_fail((5897|0),(4274|0),45,(4319|0));
  // unreachable;
 }
 return (0)|0;
}
function __ZN16b2PolygonContact7DestroyEP9b2ContactP16b2BlockAllocator($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = ((($2)) + 4|0);
 $4 = load4($3);
 FUNCTION_TABLE_vi[$4 & 31]($0);
 __ZN16b2BlockAllocator4FreeEPvi($1,$0,144);
 return;
}
function __ZN12b2BroadPhaseC2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 __ZN13b2DynamicTreeC2Ev($0);
 $1 = ((($0)) + 28|0);
 store4($1,0);
 $2 = ((($0)) + 48|0);
 store4($2,16);
 $3 = ((($0)) + 52|0);
 store4($3,0);
 $4 = (__Z7b2Alloci(192)|0);
 $5 = ((($0)) + 44|0);
 store4($5,$4);
 $6 = ((($0)) + 36|0);
 store4($6,16);
 $7 = ((($0)) + 40|0);
 store4($7,0);
 $8 = (__Z7b2Alloci(64)|0);
 $9 = ((($0)) + 32|0);
 store4($9,$8);
 return;
}
function __ZN12b2BroadPhase11CreateProxyERK6b2AABBPv($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = (__ZN13b2DynamicTree11CreateProxyERK6b2AABBPv($0,$1,$2)|0);
 $4 = ((($0)) + 28|0);
 $5 = load4($4);
 $6 = (($5) + 1)|0;
 store4($4,$6);
 $7 = ((($0)) + 40|0);
 $8 = load4($7);
 $9 = ((($0)) + 36|0);
 $10 = load4($9);
 $11 = ($8|0)==($10|0);
 $12 = ((($0)) + 32|0);
 if ($11) {
  $13 = load4($12);
  $14 = $8 << 1;
  store4($9,$14);
  $15 = $8 << 3;
  $16 = (__Z7b2Alloci($15)|0);
  store4($12,$16);
  $17 = load4($7);
  $18 = $17 << 2;
  _memcpy(($16|0),($13|0),($18|0))|0;
  __Z6b2FreePv($13);
  $$pre$i = load4($7);
  $21 = $$pre$i;
 } else {
  $21 = $8;
 }
 $19 = load4($12);
 $20 = (($19) + ($21<<2)|0);
 store4($20,$3);
 $22 = load4($7);
 $23 = (($22) + 1)|0;
 store4($7,$23);
 return ($3|0);
}
function __ZN12b2BroadPhase9MoveProxyEiRK6b2AABBRK6b2Vec2($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$pre$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $4 = (__ZN13b2DynamicTree9MoveProxyEiRK6b2AABBRK6b2Vec2($0,$1,$2,$3)|0);
 if (!($4)) {
  return;
 }
 $5 = ((($0)) + 40|0);
 $6 = load4($5);
 $7 = ((($0)) + 36|0);
 $8 = load4($7);
 $9 = ($6|0)==($8|0);
 $10 = ((($0)) + 32|0);
 if ($9) {
  $11 = load4($10);
  $12 = $6 << 1;
  store4($7,$12);
  $13 = $6 << 3;
  $14 = (__Z7b2Alloci($13)|0);
  store4($10,$14);
  $15 = load4($5);
  $16 = $15 << 2;
  _memcpy(($14|0),($11|0),($16|0))|0;
  __Z6b2FreePv($11);
  $$pre$i = load4($5);
  $19 = $$pre$i;
 } else {
  $19 = $6;
 }
 $17 = load4($10);
 $18 = (($17) + ($19<<2)|0);
 store4($18,$1);
 $20 = load4($5);
 $21 = (($20) + 1)|0;
 store4($5,$21);
 return;
}
function __ZN12b2BroadPhase13QueryCallbackEi($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$pre = 0, $$pre7 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 56|0);
 $3 = load4($2);
 $4 = ($3|0)==($1|0);
 if ($4) {
  return 1;
 }
 $5 = ((($0)) + 52|0);
 $6 = load4($5);
 $7 = ((($0)) + 48|0);
 $8 = load4($7);
 $9 = ($6|0)==($8|0);
 $10 = ((($0)) + 44|0);
 if ($9) {
  $11 = load4($10);
  $12 = $6 << 1;
  store4($7,$12);
  $13 = ($6*24)|0;
  $14 = (__Z7b2Alloci($13)|0);
  store4($10,$14);
  $15 = load4($5);
  $16 = ($15*12)|0;
  _memcpy(($14|0),($11|0),($16|0))|0;
  __Z6b2FreePv($11);
  $$pre = load4($2);
  $$pre7 = load4($5);
  $17 = $$pre;$22 = $$pre7;
 } else {
  $17 = $3;$22 = $6;
 }
 $18 = ($17|0)>($1|0);
 $19 = $18 ? $1 : $17;
 $20 = load4($10);
 $21 = (($20) + (($22*12)|0)|0);
 store4($21,$19);
 $23 = ($17|0)<($1|0);
 $24 = $23 ? $1 : $17;
 $25 = (((($20) + (($22*12)|0)|0)) + 4|0);
 store4($25,$24);
 $26 = (($22) + 1)|0;
 store4($5,$26);
 return 1;
}
function __Z16b2CollideCirclesP10b2ManifoldPK13b2CircleShapeRK11b2TransformS3_S6_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = Math_fround(0), $11 = 0, $12 = Math_fround(0), $13 = 0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = 0, $23 = Math_fround(0), $24 = Math_fround(0), $25 = 0, $26 = 0, $27 = Math_fround(0), $28 = Math_fround(0), $29 = Math_fround(0);
 var $30 = 0, $31 = Math_fround(0), $32 = 0, $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $40 = Math_fround(0), $41 = 0, $42 = Math_fround(0), $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = 0;
 var $5 = 0, $50 = Math_fround(0), $51 = 0, $52 = Math_fround(0), $53 = Math_fround(0), $54 = Math_fround(0), $55 = 0, $56 = 0, $57 = 0, $58 = i64(), $59 = 0, $6 = 0, $60 = 0, $61 = i64(), $62 = 0, $7 = 0, $8 = Math_fround(0), $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($0)) + 60|0);
 store4($5,0);
 $6 = ((($1)) + 12|0);
 $7 = ((($2)) + 12|0);
 $8 = loadf($7);
 $9 = loadf($6);
 $10 = Math_fround($8 * $9);
 $11 = ((($2)) + 8|0);
 $12 = loadf($11);
 $13 = ((($1)) + 16|0);
 $14 = loadf($13);
 $15 = Math_fround($12 * $14);
 $16 = Math_fround($10 - $15);
 $17 = loadf($2);
 $18 = Math_fround($17 + $16);
 $19 = Math_fround($9 * $12);
 $20 = Math_fround($8 * $14);
 $21 = Math_fround($19 + $20);
 $22 = ((($2)) + 4|0);
 $23 = loadf($22);
 $24 = Math_fround($21 + $23);
 $25 = ((($3)) + 12|0);
 $26 = ((($4)) + 12|0);
 $27 = loadf($26);
 $28 = loadf($25);
 $29 = Math_fround($27 * $28);
 $30 = ((($4)) + 8|0);
 $31 = loadf($30);
 $32 = ((($3)) + 16|0);
 $33 = loadf($32);
 $34 = Math_fround($31 * $33);
 $35 = Math_fround($29 - $34);
 $36 = loadf($4);
 $37 = Math_fround($36 + $35);
 $38 = Math_fround($28 * $31);
 $39 = Math_fround($27 * $33);
 $40 = Math_fround($38 + $39);
 $41 = ((($4)) + 4|0);
 $42 = loadf($41);
 $43 = Math_fround($40 + $42);
 $44 = Math_fround($37 - $18);
 $45 = Math_fround($43 - $24);
 $46 = Math_fround($44 * $44);
 $47 = Math_fround($45 * $45);
 $48 = Math_fround($46 + $47);
 $49 = ((($1)) + 8|0);
 $50 = loadf($49);
 $51 = ((($3)) + 8|0);
 $52 = loadf($51);
 $53 = Math_fround($50 + $52);
 $54 = Math_fround($53 * $53);
 $55 = $48 > $54;
 if ($55) {
  return;
 }
 $56 = ((($0)) + 56|0);
 store4($56,0);
 $57 = ((($0)) + 48|0);
 $58 = load8($6,4);
 store8($57,$58,4);
 $59 = ((($0)) + 40|0);
 storef($59,Math_fround(0.0));
 $60 = ((($0)) + 44|0);
 storef($60,Math_fround(0.0));
 store4($5,1);
 $61 = load8($25,4);
 store8($0,$61,4);
 $62 = ((($0)) + 16|0);
 store4($62,0);
 return;
}
function __Z25b2CollidePolygonAndCircleP10b2ManifoldPK14b2PolygonShapeRK11b2TransformPK13b2CircleShapeS6_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0$lcssa = 0, $$0104$lcssa = 0, $$0104274 = Math_fround(0), $$0108273 = 0, $$0275 = 0, $$1 = 0, $$1105 = Math_fround(0), $$sroa_idx127 = 0, $$sroa_idx138 = 0, $$sroa_idx147 = 0, $$sroa_idx176 = 0, $$sroa_idx183 = 0, $$sroa_idx185 = 0, $$sroa_idx189 = 0, $$sroa_idx211 = 0, $$sroa_idx213 = 0, $$sroa_idx217 = 0, $10 = Math_fround(0), $100 = Math_fround(0), $101 = Math_fround(0);
 var $102 = 0, $103 = Math_fround(0), $104 = Math_fround(0), $105 = Math_fround(0), $106 = Math_fround(0), $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = Math_fround(0), $111 = 0, $112 = Math_fround(0), $113 = Math_fround(0), $114 = Math_fround(0), $115 = i64(), $116 = 0, $117 = Math_fround(0), $118 = Math_fround(0), $119 = Math_fround(0), $12 = Math_fround(0);
 var $120 = Math_fround(0), $121 = Math_fround(0), $122 = 0, $123 = Math_fround(0), $124 = Math_fround(0), $125 = Math_fround(0), $126 = Math_fround(0), $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = Math_fround(0), $131 = 0, $132 = Math_fround(0), $133 = Math_fround(0), $134 = Math_fround(0), $135 = i64(), $136 = 0, $137 = Math_fround(0), $138 = Math_fround(0);
 var $139 = Math_fround(0), $14 = Math_fround(0), $140 = Math_fround(0), $141 = Math_fround(0), $142 = Math_fround(0), $143 = 0, $144 = Math_fround(0), $145 = Math_fround(0), $146 = 0, $147 = Math_fround(0), $148 = Math_fround(0), $149 = Math_fround(0), $15 = Math_fround(0), $150 = 0, $151 = 0, $152 = 0, $153 = i64(), $154 = 0, $155 = i64(), $156 = 0;
 var $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = 0, $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0), $27 = 0, $28 = Math_fround(0), $29 = Math_fround(0), $30 = 0, $31 = Math_fround(0), $32 = Math_fround(0), $33 = 0, $34 = Math_fround(0), $35 = Math_fround(0);
 var $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $40 = 0, $41 = Math_fround(0), $42 = 0, $43 = Math_fround(0), $44 = Math_fround(0), $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = Math_fround(0), $5 = 0, $50 = Math_fround(0), $51 = 0, $52 = Math_fround(0), $53 = Math_fround(0), $54 = 0;
 var $55 = Math_fround(0), $56 = Math_fround(0), $57 = 0, $58 = Math_fround(0), $59 = Math_fround(0), $6 = 0, $60 = Math_fround(0), $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0;
 var $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = i64(), $78 = Math_fround(0), $79 = Math_fround(0), $8 = Math_fround(0), $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = Math_fround(0), $85 = Math_fround(0), $86 = 0, $87 = i64(), $88 = 0, $89 = Math_fround(0), $9 = Math_fround(0), $90 = Math_fround(0);
 var $91 = Math_fround(0), $92 = Math_fround(0), $93 = Math_fround(0), $94 = Math_fround(0), $95 = Math_fround(0), $96 = Math_fround(0), $97 = Math_fround(0), $98 = Math_fround(0), $99 = Math_fround(0), $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($0)) + 60|0);
 store4($5,0);
 $6 = ((($3)) + 12|0);
 $7 = ((($4)) + 12|0);
 $8 = loadf($7);
 $9 = loadf($6);
 $10 = Math_fround($8 * $9);
 $11 = ((($4)) + 8|0);
 $12 = loadf($11);
 $13 = ((($3)) + 16|0);
 $14 = loadf($13);
 $15 = Math_fround($12 * $14);
 $16 = Math_fround($10 - $15);
 $17 = loadf($4);
 $18 = Math_fround($17 + $16);
 $19 = Math_fround($9 * $12);
 $20 = Math_fround($8 * $14);
 $21 = Math_fround($19 + $20);
 $22 = ((($4)) + 4|0);
 $23 = loadf($22);
 $24 = Math_fround($21 + $23);
 $25 = loadf($2);
 $26 = Math_fround($18 - $25);
 $27 = ((($2)) + 4|0);
 $28 = loadf($27);
 $29 = Math_fround($24 - $28);
 $30 = ((($2)) + 12|0);
 $31 = loadf($30);
 $32 = Math_fround($26 * $31);
 $33 = ((($2)) + 8|0);
 $34 = loadf($33);
 $35 = Math_fround($29 * $34);
 $36 = Math_fround($32 + $35);
 $37 = Math_fround($26 * $34);
 $38 = Math_fround($31 * $29);
 $39 = Math_fround($38 - $37);
 $40 = ((($1)) + 8|0);
 $41 = loadf($40);
 $42 = ((($3)) + 8|0);
 $43 = loadf($42);
 $44 = Math_fround($41 + $43);
 $45 = ((($1)) + 148|0);
 $46 = load4($45);
 $47 = ($46|0)>(0);
 do {
  if ($47) {
   $$0104274 = Math_fround(-3.40282347E+38);$$0108273 = 0;$$0275 = 0;
   while(1) {
    $48 = (((($1)) + 20|0) + ($$0108273<<3)|0);
    $49 = loadf($48);
    $50 = Math_fround($36 - $49);
    $51 = (((((($1)) + 20|0) + ($$0108273<<3)|0)) + 4|0);
    $52 = loadf($51);
    $53 = Math_fround($39 - $52);
    $54 = (((($1)) + 84|0) + ($$0108273<<3)|0);
    $55 = loadf($54);
    $56 = Math_fround($50 * $55);
    $57 = (((((($1)) + 84|0) + ($$0108273<<3)|0)) + 4|0);
    $58 = loadf($57);
    $59 = Math_fround($53 * $58);
    $60 = Math_fround($56 + $59);
    $61 = $60 > $44;
    if ($61) {
     label = 19;
     break;
    }
    $62 = $60 > $$0104274;
    $$1105 = $62 ? $60 : $$0104274;
    $$1 = $62 ? $$0108273 : $$0275;
    $63 = (($$0108273) + 1)|0;
    $64 = ($63|0)<($46|0);
    if ($64) {
     $$0104274 = $$1105;$$0108273 = $63;$$0275 = $$1;
    } else {
     label = 4;
     break;
    }
   }
   if ((label|0) == 4) {
    $phitmp = $$1105 < Math_fround(1.1920929E-7);
    $$0$lcssa = $$1;$$0104$lcssa = $phitmp;
    break;
   }
   else if ((label|0) == 19) {
    return;
   }
  } else {
   $$0$lcssa = 0;$$0104$lcssa = 1;
  }
 } while(0);
 $65 = (($$0$lcssa) + 1)|0;
 $66 = ($65|0)<($46|0);
 $67 = $66 ? $65 : 0;
 $68 = (((($1)) + 20|0) + ($$0$lcssa<<3)|0);
 $69 = load4($68);
 $$sroa_idx217 = (((((($1)) + 20|0) + ($$0$lcssa<<3)|0)) + 4|0);
 $70 = load4($$sroa_idx217);
 $71 = (((($1)) + 20|0) + ($67<<3)|0);
 $72 = load4($71);
 $$sroa_idx189 = (((((($1)) + 20|0) + ($67<<3)|0)) + 4|0);
 $73 = load4($$sroa_idx189);
 if ($$0104$lcssa) {
  store4($5,1);
  $74 = ((($0)) + 56|0);
  store4($74,1);
  $75 = ((($0)) + 40|0);
  $76 = (((($1)) + 84|0) + ($$0$lcssa<<3)|0);
  $77 = load8($76,4);
  store8($75,$77,4);
  $78 = i32_bc2f($69);
  $79 = i32_bc2f($72);
  $80 = Math_fround($78 + $79);
  $81 = i32_bc2f($70);
  $82 = i32_bc2f($73);
  $83 = Math_fround($81 + $82);
  $84 = Math_fround($80 * Math_fround(0.5));
  $85 = Math_fround($83 * Math_fround(0.5));
  $86 = ((($0)) + 48|0);
  storef($86,$84);
  $$sroa_idx176 = ((($0)) + 52|0);
  storef($$sroa_idx176,$85);
  $87 = load8($6,4);
  store8($0,$87,4);
  $88 = ((($0)) + 16|0);
  store4($88,0);
  return;
 }
 $89 = i32_bc2f($69);
 $90 = Math_fround($36 - $89);
 $91 = i32_bc2f($70);
 $92 = Math_fround($39 - $91);
 $93 = i32_bc2f($72);
 $94 = Math_fround($93 - $89);
 $95 = i32_bc2f($73);
 $96 = Math_fround($95 - $91);
 $97 = Math_fround($90 * $94);
 $98 = Math_fround($92 * $96);
 $99 = Math_fround($97 + $98);
 $100 = Math_fround($36 - $93);
 $101 = Math_fround($39 - $95);
 $102 = !($99 <= Math_fround(0.0));
 if (!($102)) {
  $103 = Math_fround($90 * $90);
  $104 = Math_fround($92 * $92);
  $105 = Math_fround($103 + $104);
  $106 = Math_fround($44 * $44);
  $107 = $105 > $106;
  if ($107) {
   return;
  }
  store4($5,1);
  $108 = ((($0)) + 56|0);
  store4($108,1);
  $109 = ((($0)) + 40|0);
  storef($109,$90);
  $$sroa_idx147 = ((($0)) + 44|0);
  storef($$sroa_idx147,$92);
  $110 = (Math_fround(Math_sqrt((Math_fround($105)))));
  $111 = $110 < Math_fround(1.1920929E-7);
  if (!($111)) {
   $112 = Math_fround(Math_fround(1.0) / $110);
   $113 = Math_fround($90 * $112);
   storef($109,$113);
   $114 = Math_fround($92 * $112);
   storef($$sroa_idx147,$114);
  }
  $$sroa_idx211 = ((($0)) + 48|0);
  store4($$sroa_idx211,$69);
  $$sroa_idx213 = ((($0)) + 52|0);
  store4($$sroa_idx213,$70);
  $115 = load8($6,4);
  store8($0,$115,4);
  $116 = ((($0)) + 16|0);
  store4($116,0);
  return;
 }
 $117 = Math_fround($89 - $93);
 $118 = Math_fround($100 * $117);
 $119 = Math_fround($91 - $95);
 $120 = Math_fround($101 * $119);
 $121 = Math_fround($118 + $120);
 $122 = !($121 <= Math_fround(0.0));
 if ($122) {
  $137 = Math_fround($89 + $93);
  $138 = Math_fround($91 + $95);
  $139 = Math_fround($137 * Math_fround(0.5));
  $140 = Math_fround($138 * Math_fround(0.5));
  $141 = Math_fround($36 - $139);
  $142 = Math_fround($39 - $140);
  $143 = (((($1)) + 84|0) + ($$0$lcssa<<3)|0);
  $144 = loadf($143);
  $145 = Math_fround($141 * $144);
  $146 = (((((($1)) + 84|0) + ($$0$lcssa<<3)|0)) + 4|0);
  $147 = loadf($146);
  $148 = Math_fround($142 * $147);
  $149 = Math_fround($145 + $148);
  $150 = $149 > $44;
  if ($150) {
   return;
  }
  store4($5,1);
  $151 = ((($0)) + 56|0);
  store4($151,1);
  $152 = ((($0)) + 40|0);
  $153 = load8($143,4);
  store8($152,$153,4);
  $154 = ((($0)) + 48|0);
  storef($154,$139);
  $$sroa_idx127 = ((($0)) + 52|0);
  storef($$sroa_idx127,$140);
  $155 = load8($6,4);
  store8($0,$155,4);
  $156 = ((($0)) + 16|0);
  store4($156,0);
  return;
 }
 $123 = Math_fround($100 * $100);
 $124 = Math_fround($101 * $101);
 $125 = Math_fround($123 + $124);
 $126 = Math_fround($44 * $44);
 $127 = $125 > $126;
 if ($127) {
  return;
 }
 store4($5,1);
 $128 = ((($0)) + 56|0);
 store4($128,1);
 $129 = ((($0)) + 40|0);
 storef($129,$100);
 $$sroa_idx138 = ((($0)) + 44|0);
 storef($$sroa_idx138,$101);
 $130 = (Math_fround(Math_sqrt((Math_fround($125)))));
 $131 = $130 < Math_fround(1.1920929E-7);
 if (!($131)) {
  $132 = Math_fround(Math_fround(1.0) / $130);
  $133 = Math_fround($100 * $132);
  storef($129,$133);
  $134 = Math_fround($101 * $132);
  storef($$sroa_idx138,$134);
 }
 $$sroa_idx183 = ((($0)) + 48|0);
 store4($$sroa_idx183,$72);
 $$sroa_idx185 = ((($0)) + 52|0);
 store4($$sroa_idx185,$73);
 $135 = load8($6,4);
 store8($0,$135,4);
 $136 = ((($0)) + 16|0);
 store4($136,0);
 return;
}
function __Z22b2CollideEdgeAndCircleP10b2ManifoldPK11b2EdgeShapeRK11b2TransformPK13b2CircleShapeS6_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$sroa$0103$0$in = Math_fround(0), $$sroa$0103$1$in = Math_fround(0), $$sroa$12$0$$sroa_idx = 0, $$sroa$12$0$$sroa_idx32 = 0, $$sroa$12$0$$sroa_idx34 = 0, $$sroa$8$0$$sroa_idx = 0, $$sroa$8$0$$sroa_idx24 = 0, $$sroa$8$0$$sroa_idx26 = 0, $$sroa$9$0$$sroa_idx = 0, $$sroa$9$0$$sroa_idx28 = 0, $$sroa$9$0$$sroa_idx30 = 0, $$sroa$9$0$in = Math_fround(0), $$sroa$9$1$in = Math_fround(0), $$sroa_idx101 = 0, $$sroa_idx154 = 0, $$sroa_idx173 = 0, $$sroa_idx175 = 0, $$sroa_idx215 = 0, $$sroa_idx234 = 0, $$sroa_idx236 = 0;
 var $$sroa_idx270 = 0, $$sroa_idx273 = 0, $$sroa_idx290 = 0, $$sroa_idx292 = 0, $$sroa_idx294 = 0, $$sroa_idx297 = 0, $10 = Math_fround(0), $100 = 0, $101 = Math_fround(0), $102 = Math_fround(0), $103 = Math_fround(0), $104 = Math_fround(0), $105 = Math_fround(0), $106 = Math_fround(0), $107 = Math_fround(0), $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0;
 var $112 = i64(), $113 = Math_fround(0), $114 = Math_fround(0), $115 = Math_fround(0), $116 = 0, $117 = Math_fround(0), $118 = Math_fround(0), $119 = Math_fround(0), $12 = Math_fround(0), $120 = Math_fround(0), $121 = Math_fround(0), $122 = Math_fround(0), $123 = Math_fround(0), $124 = Math_fround(0), $125 = Math_fround(0), $126 = Math_fround(0), $127 = Math_fround(0), $128 = Math_fround(0), $129 = Math_fround(0), $13 = 0;
 var $130 = Math_fround(0), $131 = Math_fround(0), $132 = 0, $133 = Math_fround(0), $134 = Math_fround(0), $135 = Math_fround(0), $136 = Math_fround(0), $137 = 0, $138 = Math_fround(0), $139 = Math_fround(0), $14 = Math_fround(0), $140 = Math_fround(0), $141 = Math_fround(0), $142 = Math_fround(0), $143 = 0, $144 = Math_fround(0), $145 = Math_fround(0), $146 = Math_fround(0), $147 = 0, $148 = 0;
 var $149 = 0, $15 = Math_fround(0), $150 = i64(), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = 0, $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0), $27 = 0, $28 = Math_fround(0), $29 = Math_fround(0), $30 = 0, $31 = Math_fround(0), $32 = Math_fround(0);
 var $33 = 0, $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = 0, $50 = Math_fround(0), $51 = Math_fround(0);
 var $52 = Math_fround(0), $53 = Math_fround(0), $54 = Math_fround(0), $55 = Math_fround(0), $56 = Math_fround(0), $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0), $6 = 0, $60 = 0, $61 = Math_fround(0), $62 = 0, $63 = Math_fround(0), $64 = Math_fround(0), $65 = 0, $66 = Math_fround(0), $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0;
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = Math_fround(0), $76 = Math_fround(0), $77 = Math_fround(0), $78 = Math_fround(0), $79 = Math_fround(0), $8 = Math_fround(0), $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = i64();
 var $89 = 0, $9 = Math_fround(0), $90 = Math_fround(0), $91 = Math_fround(0), $92 = Math_fround(0), $93 = Math_fround(0), $94 = Math_fround(0), $95 = Math_fround(0), $96 = 0, $97 = 0, $98 = 0, $99 = 0, $not$ = 0, $not$337 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($0)) + 60|0);
 store4($5,0);
 $6 = ((($3)) + 12|0);
 $7 = ((($4)) + 12|0);
 $8 = loadf($7);
 $9 = loadf($6);
 $10 = Math_fround($8 * $9);
 $11 = ((($4)) + 8|0);
 $12 = loadf($11);
 $13 = ((($3)) + 16|0);
 $14 = loadf($13);
 $15 = Math_fround($12 * $14);
 $16 = Math_fround($10 - $15);
 $17 = loadf($4);
 $18 = Math_fround($17 + $16);
 $19 = Math_fround($9 * $12);
 $20 = Math_fround($8 * $14);
 $21 = Math_fround($19 + $20);
 $22 = ((($4)) + 4|0);
 $23 = loadf($22);
 $24 = Math_fround($21 + $23);
 $25 = loadf($2);
 $26 = Math_fround($18 - $25);
 $27 = ((($2)) + 4|0);
 $28 = loadf($27);
 $29 = Math_fround($24 - $28);
 $30 = ((($2)) + 12|0);
 $31 = loadf($30);
 $32 = Math_fround($26 * $31);
 $33 = ((($2)) + 8|0);
 $34 = loadf($33);
 $35 = Math_fround($29 * $34);
 $36 = Math_fround($32 + $35);
 $37 = Math_fround($26 * $34);
 $38 = Math_fround($31 * $29);
 $39 = Math_fround($38 - $37);
 $$sroa_idx294 = ((($1)) + 12|0);
 $40 = load4($$sroa_idx294);
 $$sroa_idx297 = ((($1)) + 16|0);
 $41 = load4($$sroa_idx297);
 $$sroa_idx270 = ((($1)) + 20|0);
 $42 = load4($$sroa_idx270);
 $$sroa_idx273 = ((($1)) + 24|0);
 $43 = load4($$sroa_idx273);
 $44 = i32_bc2f($42);
 $45 = i32_bc2f($40);
 $46 = Math_fround($44 - $45);
 $47 = i32_bc2f($43);
 $48 = i32_bc2f($41);
 $49 = Math_fround($47 - $48);
 $50 = Math_fround($44 - $36);
 $51 = Math_fround($47 - $39);
 $52 = Math_fround($46 * $50);
 $53 = Math_fround($49 * $51);
 $54 = Math_fround($52 + $53);
 $55 = Math_fround($36 - $45);
 $56 = Math_fround($39 - $48);
 $57 = Math_fround($55 * $46);
 $58 = Math_fround($56 * $49);
 $59 = Math_fround($57 + $58);
 $60 = ((($1)) + 8|0);
 $61 = loadf($60);
 $62 = ((($3)) + 8|0);
 $63 = loadf($62);
 $64 = Math_fround($61 + $63);
 $65 = !($59 <= Math_fround(0.0));
 if (!($65)) {
  $66 = Math_fround($55 * $55);
  $67 = Math_fround($56 * $56);
  $68 = Math_fround($66 + $67);
  $69 = Math_fround($64 * $64);
  $70 = $68 > $69;
  if ($70) {
   return;
  }
  $71 = ((($1)) + 44|0);
  $72 = load1($71);
  $73 = ($72<<24>>24)==(0);
  if (!($73)) {
   $74 = ((($1)) + 28|0);
   $75 = loadf($74);
   $$sroa_idx215 = ((($1)) + 32|0);
   $76 = loadf($$sroa_idx215);
   $77 = Math_fround($45 - $75);
   $78 = Math_fround($48 - $76);
   $79 = Math_fround($45 - $36);
   $80 = Math_fround($48 - $39);
   $81 = Math_fround($79 * $77);
   $82 = Math_fround($80 * $78);
   $83 = Math_fround($81 + $82);
   $not$ = !($83 > Math_fround(0.0));
   if (!($not$)) {
    return;
   }
  }
  store4($5,1);
  $84 = ((($0)) + 56|0);
  store4($84,0);
  $85 = ((($0)) + 40|0);
  storef($85,Math_fround(0.0));
  $86 = ((($0)) + 44|0);
  storef($86,Math_fround(0.0));
  $$sroa_idx234 = ((($0)) + 48|0);
  store4($$sroa_idx234,$40);
  $$sroa_idx236 = ((($0)) + 52|0);
  store4($$sroa_idx236,$41);
  $87 = ((($0)) + 16|0);
  store1($87,0);
  $$sroa$8$0$$sroa_idx = ((($87)) + 1|0);
  store1($$sroa$8$0$$sroa_idx,0);
  $$sroa$9$0$$sroa_idx = ((($87)) + 2|0);
  store1($$sroa$9$0$$sroa_idx,0);
  $$sroa$12$0$$sroa_idx = ((($87)) + 3|0);
  store1($$sroa$12$0$$sroa_idx,0);
  $88 = load8($6,4);
  store8($0,$88,4);
  return;
 }
 $89 = !($54 <= Math_fround(0.0));
 if (!($89)) {
  $90 = Math_fround($36 - $44);
  $91 = Math_fround($39 - $47);
  $92 = Math_fround($90 * $90);
  $93 = Math_fround($91 * $91);
  $94 = Math_fround($92 + $93);
  $95 = Math_fround($64 * $64);
  $96 = $94 > $95;
  if ($96) {
   return;
  }
  $97 = ((($1)) + 45|0);
  $98 = load1($97);
  $99 = ($98<<24>>24)==(0);
  if (!($99)) {
   $100 = ((($1)) + 36|0);
   $101 = loadf($100);
   $$sroa_idx154 = ((($1)) + 40|0);
   $102 = loadf($$sroa_idx154);
   $103 = Math_fround($101 - $44);
   $104 = Math_fround($102 - $47);
   $105 = Math_fround($90 * $103);
   $106 = Math_fround($91 * $104);
   $107 = Math_fround($105 + $106);
   $not$337 = !($107 > Math_fround(0.0));
   if (!($not$337)) {
    return;
   }
  }
  store4($5,1);
  $108 = ((($0)) + 56|0);
  store4($108,0);
  $109 = ((($0)) + 40|0);
  storef($109,Math_fround(0.0));
  $110 = ((($0)) + 44|0);
  storef($110,Math_fround(0.0));
  $$sroa_idx173 = ((($0)) + 48|0);
  store4($$sroa_idx173,$42);
  $$sroa_idx175 = ((($0)) + 52|0);
  store4($$sroa_idx175,$43);
  $111 = ((($0)) + 16|0);
  store1($111,1);
  $$sroa$8$0$$sroa_idx24 = ((($111)) + 1|0);
  store1($$sroa$8$0$$sroa_idx24,0);
  $$sroa$9$0$$sroa_idx28 = ((($111)) + 2|0);
  store1($$sroa$9$0$$sroa_idx28,0);
  $$sroa$12$0$$sroa_idx32 = ((($111)) + 3|0);
  store1($$sroa$12$0$$sroa_idx32,0);
  $112 = load8($6,4);
  store8($0,$112,4);
  return;
 }
 $113 = Math_fround($46 * $46);
 $114 = Math_fround($49 * $49);
 $115 = Math_fround($113 + $114);
 $116 = $115 > Math_fround(0.0);
 if (!($116)) {
  ___assert_fail((4336|0),(4347|0),127,(4381|0));
  // unreachable;
 }
 $117 = Math_fround(Math_fround(1.0) / $115);
 $118 = Math_fround($45 * $54);
 $119 = Math_fround($48 * $54);
 $120 = Math_fround($44 * $59);
 $121 = Math_fround($47 * $59);
 $122 = Math_fround($118 + $120);
 $123 = Math_fround($119 + $121);
 $124 = Math_fround($117 * $122);
 $125 = Math_fround($117 * $123);
 $126 = Math_fround($36 - $124);
 $127 = Math_fround($39 - $125);
 $128 = Math_fround($126 * $126);
 $129 = Math_fround($127 * $127);
 $130 = Math_fround($128 + $129);
 $131 = Math_fround($64 * $64);
 $132 = $130 > $131;
 if ($132) {
  return;
 }
 $133 = Math_fround(-$49);
 $134 = Math_fround($55 * $133);
 $135 = Math_fround($56 * $46);
 $136 = Math_fround($135 + $134);
 $137 = $136 < Math_fround(0.0);
 $138 = Math_fround(-$46);
 $$sroa$0103$0$in = $137 ? $49 : $133;
 $$sroa$9$0$in = $137 ? $138 : $46;
 $139 = Math_fround($$sroa$0103$0$in * $$sroa$0103$0$in);
 $140 = Math_fround($$sroa$9$0$in * $$sroa$9$0$in);
 $141 = Math_fround($139 + $140);
 $142 = (Math_fround(Math_sqrt((Math_fround($141)))));
 $143 = $142 < Math_fround(1.1920929E-7);
 if ($143) {
  $$sroa$0103$1$in = $$sroa$0103$0$in;$$sroa$9$1$in = $$sroa$9$0$in;
 } else {
  $144 = Math_fround(Math_fround(1.0) / $142);
  $145 = Math_fround($$sroa$0103$0$in * $144);
  $146 = Math_fround($$sroa$9$0$in * $144);
  $$sroa$0103$1$in = $145;$$sroa$9$1$in = $146;
 }
 store4($5,1);
 $147 = ((($0)) + 56|0);
 store4($147,1);
 $148 = ((($0)) + 40|0);
 storef($148,$$sroa$0103$1$in);
 $$sroa_idx101 = ((($0)) + 44|0);
 storef($$sroa_idx101,$$sroa$9$1$in);
 $$sroa_idx290 = ((($0)) + 48|0);
 store4($$sroa_idx290,$40);
 $$sroa_idx292 = ((($0)) + 52|0);
 store4($$sroa_idx292,$41);
 $149 = ((($0)) + 16|0);
 store1($149,0);
 $$sroa$8$0$$sroa_idx26 = ((($149)) + 1|0);
 store1($$sroa$8$0$$sroa_idx26,0);
 $$sroa$9$0$$sroa_idx30 = ((($149)) + 2|0);
 store1($$sroa$9$0$$sroa_idx30,1);
 $$sroa$12$0$$sroa_idx34 = ((($149)) + 3|0);
 store1($$sroa$12$0$$sroa_idx34,0);
 $150 = load8($6,4);
 store8($0,$150,4);
 return;
}
function __ZN12b2EPCollider7CollideEP10b2ManifoldPK11b2EdgeShapeRK11b2TransformPK14b2PolygonShapeS7_($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$ = 0, $$0 = Math_fround(0), $$010$i = 0, $$0152$lcssa = 0, $$0153$off0 = 0, $$0155561 = 0, $$0156559 = 0, $$0157558 = Math_fround(0), $$0159$lcssa = 0, $$0159557 = 0, $$1 = 0, $$1$us = 0, $$1158 = Math_fround(0), $$1160 = 0, $$195 = 0, $$cast = Math_fround(0), $$in = 0, $$in577 = 0, $$in578 = 0, $$in579 = 0;
 var $$pre = 0, $$pre$phi575Z2D = 0, $$pre$phi576Z2D = 0, $$pre$phiZ2D = 0, $$pre570 = Math_fround(0), $$pre571 = Math_fround(0), $$pre572 = Math_fround(0), $$pre573 = Math_fround(0), $$pre574 = 0, $$sroa$0$0585 = 0, $$sroa$0495$0 = Math_fround(0), $$sroa$0506$0 = Math_fround(0), $$sroa$0518$0 = Math_fround(0), $$sroa$0536$0$$sroa_idx = 0, $$sroa$4538$0$$sroa_idx539 = 0, $$sroa$5$0$$sroa_idx541 = 0, $$sroa$6543$0$$sroa_idx544 = 0, $$sroa$7510$0 = Math_fround(0), $$sroa$8$0$$sroa_idx67 = 0, $$sroa$8$0$copyload68 = 0;
 var $$sroa$9$0 = Math_fround(0), $$sroa$9$1 = Math_fround(0), $$sroa_idx$us = 0, $$sroa_idx$us$1 = 0, $$sroa_idx212 = 0, $$sroa_idx221 = 0, $$sroa_idx234 = 0, $$sroa_idx242 = 0, $$sroa_idx251 = 0, $$sroa_idx260 = 0, $$sroa_idx269 = 0, $$sroa_idx278 = 0, $$sroa_idx287 = 0, $$sroa_idx296 = 0, $$sroa_idx305 = 0, $$sroa_idx314 = 0, $$sroa_idx323 = 0, $$sroa_idx332 = 0, $$sroa_idx341 = 0, $$sroa_idx350 = 0;
 var $$sroa_idx359 = 0, $$sroa_idx368 = 0, $$sroa_idx377 = 0, $$sroa_idx386 = 0, $$sroa_idx395 = 0, $$sroa_idx404 = 0, $$sroa_idx413 = 0, $$sroa_idx422 = 0, $$sroa_idx431 = 0, $$sroa_idx440 = 0, $$sroa_idx449 = 0, $$sroa_idx458 = 0, $$sroa_idx467 = 0, $$sroa_idx476 = 0, $$sroa_idx485 = 0, $$sroa_idx530 = 0, $10 = 0, $100 = 0, $101 = Math_fround(0), $102 = Math_fround(0);
 var $103 = 0, $104 = Math_fround(0), $105 = Math_fround(0), $106 = Math_fround(0), $107 = Math_fround(0), $108 = Math_fround(0), $109 = Math_fround(0), $11 = 0, $110 = Math_fround(0), $111 = Math_fround(0), $112 = Math_fround(0), $113 = Math_fround(0), $114 = Math_fround(0), $115 = 0, $116 = Math_fround(0), $117 = Math_fround(0), $118 = Math_fround(0), $119 = Math_fround(0), $12 = Math_fround(0), $120 = 0;
 var $121 = 0, $122 = Math_fround(0), $123 = Math_fround(0), $124 = Math_fround(0), $125 = 0, $126 = Math_fround(0), $127 = Math_fround(0), $128 = Math_fround(0), $129 = Math_fround(0), $13 = 0, $130 = Math_fround(0), $131 = Math_fround(0), $132 = Math_fround(0), $133 = Math_fround(0), $134 = Math_fround(0), $135 = Math_fround(0), $136 = Math_fround(0), $137 = 0, $138 = Math_fround(0), $139 = Math_fround(0);
 var $14 = Math_fround(0), $140 = Math_fround(0), $141 = Math_fround(0), $142 = 0, $143 = Math_fround(0), $144 = 0, $145 = Math_fround(0), $146 = Math_fround(0), $147 = Math_fround(0), $148 = 0, $149 = Math_fround(0), $15 = Math_fround(0), $150 = Math_fround(0), $151 = Math_fround(0), $152 = Math_fround(0), $153 = Math_fround(0), $154 = 0, $155 = 0, $156 = 0, $157 = 0;
 var $158 = 0, $159 = 0, $16 = 0, $160 = i64(), $161 = 0, $162 = 0, $163 = i64(), $164 = 0, $165 = 0, $166 = i64(), $167 = Math_fround(0), $168 = 0, $169 = 0, $17 = Math_fround(0), $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0;
 var $176 = 0, $177 = 0, $178 = 0, $179 = i64(), $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = i64(), $184 = 0, $185 = i64(), $186 = Math_fround(0), $187 = Math_fround(0), $188 = 0, $189 = 0, $19 = Math_fround(0), $190 = 0, $191 = 0, $192 = 0, $193 = 0;
 var $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = i64(), $20 = Math_fround(0), $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = i64(), $205 = Math_fround(0), $206 = 0, $207 = 0, $208 = Math_fround(0), $209 = Math_fround(0), $21 = Math_fround(0), $210 = 0, $211 = Math_fround(0);
 var $212 = Math_fround(0), $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = Math_fround(0), $220 = i64(), $221 = 0, $222 = 0, $223 = Math_fround(0), $224 = Math_fround(0), $225 = 0, $226 = 0, $227 = Math_fround(0), $228 = Math_fround(0), $229 = 0, $23 = Math_fround(0);
 var $230 = Math_fround(0), $231 = Math_fround(0), $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = i64(), $24 = Math_fround(0), $240 = 0, $241 = 0, $242 = i64(), $243 = 0, $244 = Math_fround(0), $245 = Math_fround(0), $246 = 0, $247 = Math_fround(0), $248 = 0;
 var $249 = i64(), $25 = Math_fround(0), $250 = 0, $251 = Math_fround(0), $252 = Math_fround(0), $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = i64(), $259 = 0, $26 = Math_fround(0), $260 = 0, $261 = Math_fround(0), $262 = Math_fround(0), $263 = 0, $264 = Math_fround(0), $265 = 0, $266 = i64();
 var $267 = 0, $268 = Math_fround(0), $269 = Math_fround(0), $27 = Math_fround(0), $270 = 0, $271 = Math_fround(0), $272 = Math_fround(0), $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = i64(), $281 = 0, $282 = Math_fround(0), $283 = Math_fround(0), $284 = 0;
 var $285 = 0, $286 = 0, $287 = i64(), $288 = Math_fround(0), $289 = 0, $29 = Math_fround(0), $290 = 0, $291 = i64(), $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = i64(), $297 = 0, $298 = Math_fround(0), $299 = Math_fround(0), $30 = 0, $300 = 0, $301 = 0, $302 = Math_fround(0);
 var $303 = 0, $304 = Math_fround(0), $305 = Math_fround(0), $306 = 0, $307 = Math_fround(0), $308 = Math_fround(0), $309 = 0, $31 = Math_fround(0), $310 = 0, $311 = i64(), $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = i64(), $317 = 0, $318 = Math_fround(0), $319 = Math_fround(0), $32 = Math_fround(0), $320 = 0;
 var $321 = 0, $322 = Math_fround(0), $323 = 0, $324 = i64(), $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = Math_fround(0), $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = Math_fround(0), $337 = Math_fround(0), $338 = 0, $339 = Math_fround(0);
 var $34 = Math_fround(0), $340 = 0, $341 = Math_fround(0), $342 = 0, $343 = Math_fround(0), $344 = Math_fround(0), $345 = 0, $346 = Math_fround(0), $347 = Math_fround(0), $348 = Math_fround(0), $349 = Math_fround(0), $35 = Math_fround(0), $350 = Math_fround(0), $351 = 0, $352 = Math_fround(0), $353 = Math_fround(0), $354 = 0, $355 = Math_fround(0), $356 = 0, $357 = Math_fround(0);
 var $358 = Math_fround(0), $359 = Math_fround(0), $36 = Math_fround(0), $360 = 0, $361 = Math_fround(0), $362 = Math_fround(0), $363 = Math_fround(0), $364 = Math_fround(0), $365 = Math_fround(0), $366 = Math_fround(0), $367 = Math_fround(0), $368 = Math_fround(0), $369 = Math_fround(0), $37 = Math_fround(0), $370 = Math_fround(0), $371 = 0, $372 = Math_fround(0), $373 = 0, $374 = Math_fround(0), $375 = Math_fround(0);
 var $376 = Math_fround(0), $377 = 0, $378 = Math_fround(0), $379 = Math_fround(0), $38 = Math_fround(0), $380 = Math_fround(0), $381 = Math_fround(0), $382 = Math_fround(0), $383 = Math_fround(0), $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = Math_fround(0), $393 = Math_fround(0);
 var $394 = 0, $395 = Math_fround(0), $396 = Math_fround(0), $397 = 0, $398 = 0, $399 = 0, $40 = Math_fround(0), $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = Math_fround(0), $406 = 0, $407 = Math_fround(0), $408 = Math_fround(0), $409 = Math_fround(0), $41 = Math_fround(0), $410 = 0, $411 = Math_fround(0);
 var $412 = Math_fround(0), $413 = Math_fround(0), $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = i64(), $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = i64(), $427 = 0, $428 = 0, $429 = 0, $43 = Math_fround(0);
 var $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = Math_fround(0), $436 = Math_fround(0), $437 = 0, $438 = Math_fround(0), $439 = Math_fround(0), $44 = Math_fround(0), $440 = Math_fround(0), $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = i64(), $447 = 0, $448 = i64();
 var $449 = 0, $45 = Math_fround(0), $450 = i64(), $451 = i64(), $452 = 0, $453 = 0, $454 = Math_fround(0), $455 = 0, $456 = i64(), $457 = 0, $458 = 0, $459 = i64(), $46 = Math_fround(0), $460 = 0, $461 = 0, $462 = 0, $463 = i64(), $464 = 0, $465 = i64(), $466 = Math_fround(0);
 var $467 = Math_fround(0), $468 = Math_fround(0), $469 = Math_fround(0), $47 = Math_fround(0), $470 = 0, $471 = 0, $472 = 0, $473 = i64(), $474 = 0, $475 = 0, $476 = i64(), $477 = 0, $478 = i64(), $479 = 0, $48 = Math_fround(0), $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0;
 var $485 = i64(), $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = Math_fround(0), $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = i64(), $498 = 0, $499 = 0, $50 = Math_fround(0), $500 = i64(), $501 = 0, $502 = 0;
 var $503 = i64(), $504 = i64(), $505 = 0, $506 = 0, $507 = Math_fround(0), $508 = 0, $509 = i64(), $51 = 0, $510 = 0, $511 = 0, $512 = i64(), $513 = 0, $514 = Math_fround(0), $515 = Math_fround(0), $516 = Math_fround(0), $517 = Math_fround(0), $518 = 0, $519 = 0, $52 = 0, $520 = 0;
 var $521 = Math_fround(0), $522 = Math_fround(0), $523 = 0, $524 = 0, $525 = 0, $526 = Math_fround(0), $527 = 0, $528 = Math_fround(0), $529 = 0, $53 = 0, $530 = Math_fround(0), $531 = Math_fround(0), $532 = 0, $533 = Math_fround(0), $534 = Math_fround(0), $535 = Math_fround(0), $536 = 0, $537 = 0, $538 = 0, $539 = 0;
 var $54 = i64(), $540 = 0, $541 = Math_fround(0), $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = i64(), $548 = 0, $549 = i64(), $55 = 0, $550 = 0, $551 = Math_fround(0), $552 = 0, $553 = Math_fround(0), $554 = Math_fround(0), $555 = Math_fround(0), $556 = Math_fround(0), $557 = Math_fround(0);
 var $558 = 0, $559 = Math_fround(0), $56 = 0, $560 = Math_fround(0), $561 = Math_fround(0), $562 = Math_fround(0), $563 = Math_fround(0), $564 = Math_fround(0), $565 = 0, $566 = 0, $567 = 0, $568 = i64(), $569 = 0, $57 = i64(), $570 = 0, $571 = i64(), $572 = Math_fround(0), $573 = Math_fround(0), $574 = Math_fround(0), $575 = Math_fround(0);
 var $576 = 0, $577 = Math_fround(0), $578 = Math_fround(0), $579 = Math_fround(0), $58 = 0, $580 = Math_fround(0), $581 = Math_fround(0), $582 = Math_fround(0), $583 = 0, $584 = Math_fround(0), $585 = Math_fround(0), $586 = Math_fround(0), $587 = Math_fround(0), $588 = Math_fround(0), $589 = Math_fround(0), $59 = 0, $590 = Math_fround(0), $591 = Math_fround(0), $592 = Math_fround(0), $593 = Math_fround(0);
 var $594 = Math_fround(0), $595 = Math_fround(0), $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = i64(), $600 = Math_fround(0), $601 = Math_fround(0), $602 = 0, $603 = Math_fround(0), $604 = Math_fround(0), $605 = Math_fround(0), $606 = Math_fround(0), $607 = Math_fround(0), $608 = 0, $609 = Math_fround(0), $61 = 0, $610 = i64();
 var $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = Math_fround(0), $625 = Math_fround(0), $626 = 0, $627 = Math_fround(0), $628 = Math_fround(0), $629 = Math_fround(0);
 var $63 = i64(), $630 = Math_fround(0), $631 = Math_fround(0), $632 = 0, $633 = Math_fround(0), $634 = Math_fround(0), $635 = Math_fround(0), $636 = Math_fround(0), $637 = Math_fround(0), $638 = Math_fround(0), $639 = Math_fround(0), $64 = 0, $640 = Math_fround(0), $641 = Math_fround(0), $642 = Math_fround(0), $643 = Math_fround(0), $644 = Math_fround(0), $645 = Math_fround(0), $646 = 0, $647 = 0;
 var $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = i64(), $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0;
 var $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = Math_fround(0), $71 = 0, $72 = Math_fround(0), $73 = Math_fround(0), $74 = i64(), $75 = 0, $76 = Math_fround(0), $77 = 0, $78 = i64(), $79 = 0, $8 = 0;
 var $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = Math_fround(0), $85 = Math_fround(0), $86 = 0, $87 = 0, $88 = Math_fround(0), $89 = i64(), $9 = 0, $90 = 0, $91 = Math_fround(0), $92 = 0, $93 = Math_fround(0), $94 = i64(), $95 = 0, $96 = Math_fround(0), $97 = Math_fround(0), $98 = Math_fround(0);
 var $99 = Math_fround(0), $brmerge194$demorgan = 0, $exitcond = 0, $or$cond = 0, $or$cond3 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144|0;
 $6 = sp + 128|0;
 $7 = sp + 24|0;
 $8 = sp + 72|0;
 $9 = sp + 48|0;
 $10 = sp;
 $11 = ((($3)) + 12|0);
 $12 = loadf($11);
 $13 = ((($5)) + 8|0);
 $14 = loadf($13);
 $15 = Math_fround($12 * $14);
 $16 = ((($3)) + 8|0);
 $17 = loadf($16);
 $18 = ((($5)) + 12|0);
 $19 = loadf($18);
 $20 = Math_fround($17 * $19);
 $21 = Math_fround($15 - $20);
 $22 = Math_fround($12 * $19);
 $23 = Math_fround($14 * $17);
 $24 = Math_fround($23 + $22);
 $25 = loadf($5);
 $26 = loadf($3);
 $27 = Math_fround($25 - $26);
 $28 = ((($5)) + 4|0);
 $29 = loadf($28);
 $30 = ((($3)) + 4|0);
 $31 = loadf($30);
 $32 = Math_fround($29 - $31);
 $33 = Math_fround($12 * $27);
 $34 = Math_fround($17 * $32);
 $35 = Math_fround($33 + $34);
 $36 = Math_fround($17 * $27);
 $37 = Math_fround($12 * $32);
 $38 = Math_fround($37 - $36);
 $$sroa$0536$0$$sroa_idx = ((($0)) + 132|0);
 storef($$sroa$0536$0$$sroa_idx,$35);
 $$sroa$4538$0$$sroa_idx539 = ((($0)) + 136|0);
 storef($$sroa$4538$0$$sroa_idx539,$38);
 $$sroa$5$0$$sroa_idx541 = ((($0)) + 140|0);
 storef($$sroa$5$0$$sroa_idx541,$21);
 $$sroa$6543$0$$sroa_idx544 = ((($0)) + 144|0);
 storef($$sroa$6543$0$$sroa_idx544,$24);
 $39 = ((($4)) + 12|0);
 $40 = loadf($39);
 $41 = Math_fround($24 * $40);
 $42 = ((($4)) + 16|0);
 $43 = loadf($42);
 $44 = Math_fround($21 * $43);
 $45 = Math_fround($41 - $44);
 $46 = Math_fround($35 + $45);
 $47 = Math_fround($40 * $21);
 $48 = Math_fround($24 * $43);
 $49 = Math_fround($47 + $48);
 $50 = Math_fround($49 + $38);
 $51 = ((($0)) + 148|0);
 storef($51,$46);
 $$sroa_idx530 = ((($0)) + 152|0);
 storef($$sroa_idx530,$50);
 $52 = ((($0)) + 156|0);
 $53 = ((($2)) + 28|0);
 $54 = load8($53,4);
 store8($52,$54,4);
 $55 = ((($0)) + 164|0);
 $56 = ((($2)) + 12|0);
 $57 = load8($56,4);
 store8($55,$57,4);
 $58 = ((($0)) + 172|0);
 $59 = ((($2)) + 20|0);
 $60 = load8($59,4);
 store8($58,$60,4);
 $61 = ((($0)) + 180|0);
 $62 = ((($2)) + 36|0);
 $63 = load8($62,4);
 store8($61,$63,4);
 $64 = ((($2)) + 44|0);
 $65 = load2($64);
 $66 = $65&255;
 $67 = ($66<<24>>24)!=(0);
 $68 = ($65&65535)>(255);
 $69 = i64_trunc($60);
 $70 = i32_bc2f($69);
 $71 = i64_trunc($57);
 $72 = i32_bc2f($71);
 $73 = Math_fround($70 - $72);
 $74 = i64_lshr($60,i64_const(32,0));
 $75 = i64_trunc($74);
 $76 = i32_bc2f($75);
 $77 = ((($0)) + 168|0);
 $78 = i64_lshr($57,i64_const(32,0));
 $79 = i64_trunc($78);
 $80 = i32_bc2f($79);
 $81 = Math_fround($76 - $80);
 $82 = Math_fround($73 * $73);
 $83 = Math_fround($81 * $81);
 $84 = Math_fround($82 + $83);
 $85 = (Math_fround(Math_sqrt((Math_fround($84)))));
 $86 = $85 < Math_fround(1.1920929E-7);
 $87 = i64_trunc($54);
 $88 = i32_bc2f($87);
 $89 = i64_lshr($54,i64_const(32,0));
 $90 = i64_trunc($89);
 $91 = i32_bc2f($90);
 $92 = i64_trunc($63);
 $93 = i32_bc2f($92);
 $94 = i64_lshr($63,i64_const(32,0));
 $95 = i64_trunc($94);
 $96 = i32_bc2f($95);
 if ($86) {
  $$sroa$0518$0 = $73;$102 = $81;
 } else {
  $97 = Math_fround(Math_fround(1.0) / $85);
  $98 = Math_fround($73 * $97);
  $99 = Math_fround($81 * $97);
  $$sroa$0518$0 = $98;$102 = $99;
 }
 $100 = ((($0)) + 196|0);
 $101 = Math_fround(-$$sroa$0518$0);
 storef($100,$102);
 $103 = ((($0)) + 200|0);
 storef($103,$101);
 $104 = Math_fround($46 - $72);
 $105 = Math_fround($50 - $80);
 $106 = Math_fround($104 * $102);
 $107 = Math_fround($105 * $101);
 $108 = Math_fround($106 + $107);
 if ($67) {
  $109 = Math_fround($72 - $88);
  $110 = Math_fround($80 - $91);
  $111 = Math_fround($109 * $109);
  $112 = Math_fround($110 * $110);
  $113 = Math_fround($111 + $112);
  $114 = (Math_fround(Math_sqrt((Math_fround($113)))));
  $115 = $114 < Math_fround(1.1920929E-7);
  if ($115) {
   $$sroa$0506$0 = $109;$$sroa$7510$0 = $110;
  } else {
   $116 = Math_fround(Math_fround(1.0) / $114);
   $117 = Math_fround($109 * $116);
   $118 = Math_fround($110 * $116);
   $$sroa$0506$0 = $117;$$sroa$7510$0 = $118;
  }
  $119 = Math_fround(-$$sroa$0506$0);
  $120 = ((($0)) + 188|0);
  storef($120,$$sroa$7510$0);
  $121 = ((($0)) + 192|0);
  storef($121,$119);
  $122 = Math_fround($102 * $$sroa$0506$0);
  $123 = Math_fround($$sroa$0518$0 * $$sroa$7510$0);
  $124 = Math_fround($122 - $123);
  $125 = $124 >= Math_fround(0.0);
  $126 = Math_fround($46 - $88);
  $127 = Math_fround($50 - $91);
  $128 = Math_fround($126 * $$sroa$7510$0);
  $129 = Math_fround($127 * $119);
  $130 = Math_fround($128 + $129);
  $$0 = $130;$$0153$off0 = $125;
 } else {
  $$0 = Math_fround(0.0);$$0153$off0 = 0;
 }
 do {
  if ($68) {
   $131 = Math_fround($93 - $70);
   $132 = Math_fround($96 - $76);
   $133 = Math_fround($131 * $131);
   $134 = Math_fround($132 * $132);
   $135 = Math_fround($133 + $134);
   $136 = (Math_fround(Math_sqrt((Math_fround($135)))));
   $137 = $136 < Math_fround(1.1920929E-7);
   if ($137) {
    $$sroa$0495$0 = $131;$143 = $132;
   } else {
    $138 = Math_fround(Math_fround(1.0) / $136);
    $139 = Math_fround($131 * $138);
    $140 = Math_fround($132 * $138);
    $$sroa$0495$0 = $139;$143 = $140;
   }
   $141 = Math_fround(-$$sroa$0495$0);
   $142 = ((($0)) + 204|0);
   storef($142,$143);
   $144 = ((($0)) + 208|0);
   storef($144,$141);
   $145 = Math_fround($$sroa$0518$0 * $143);
   $146 = Math_fround($102 * $$sroa$0495$0);
   $147 = Math_fround($145 - $146);
   $148 = $147 > Math_fround(0.0);
   $149 = Math_fround($46 - $70);
   $150 = Math_fround($50 - $76);
   $151 = Math_fround($149 * $143);
   $152 = Math_fround($150 * $141);
   $153 = Math_fround($151 + $152);
   if (!($67)) {
    $274 = $108 >= Math_fround(0.0);
    $275 = $153 >= Math_fround(0.0);
    if ($148) {
     $276 = $274 | $275;
     $277 = ((($0)) + 248|0);
     $278 = $276&1;
     store1($277,$278);
     $279 = ((($0)) + 212|0);
     if ($276) {
      $280 = load8($100,4);
      store8($279,$280,4);
      $281 = i64_trunc($280);
      $282 = i32_bc2f($281);
      $283 = Math_fround(-$282);
      $284 = ((($0)) + 228|0);
      storef($284,$283);
      $$sroa_idx323 = ((($0)) + 232|0);
      storef($$sroa_idx323,$$sroa$0518$0);
      $285 = ((($0)) + 236|0);
      $286 = ((($0)) + 204|0);
      $287 = load8($286,4);
      store8($285,$287,4);
      break;
     } else {
      $288 = Math_fround(-$102);
      storef($279,$288);
      $$sroa_idx314 = ((($0)) + 216|0);
      storef($$sroa_idx314,$$sroa$0518$0);
      $289 = ((($0)) + 228|0);
      storef($289,$288);
      $$sroa_idx305 = ((($0)) + 232|0);
      storef($$sroa_idx305,$$sroa$0518$0);
      $290 = ((($0)) + 236|0);
      $291 = load8($100,4);
      store8($290,$291,4);
      break;
     }
    } else {
     $292 = $274 & $275;
     $293 = ((($0)) + 248|0);
     $294 = $292&1;
     store1($293,$294);
     $295 = ((($0)) + 212|0);
     if ($292) {
      $296 = load8($100,4);
      store8($295,$296,4);
      $297 = i64_trunc($296);
      $298 = i32_bc2f($297);
      $299 = Math_fround(-$298);
      $300 = ((($0)) + 228|0);
      storef($300,$299);
      $$sroa_idx296 = ((($0)) + 232|0);
      storef($$sroa_idx296,$$sroa$0518$0);
      $301 = ((($0)) + 236|0);
      store8($301,$296,4);
      break;
     } else {
      $302 = Math_fround(-$102);
      storef($295,$302);
      $$sroa_idx287 = ((($0)) + 216|0);
      storef($$sroa_idx287,$$sroa$0518$0);
      $303 = ((($0)) + 204|0);
      $304 = loadf($303);
      $305 = Math_fround(-$304);
      $306 = ((($0)) + 208|0);
      $307 = loadf($306);
      $308 = Math_fround(-$307);
      $309 = ((($0)) + 228|0);
      storef($309,$305);
      $$sroa_idx278 = ((($0)) + 232|0);
      storef($$sroa_idx278,$308);
      $310 = ((($0)) + 236|0);
      $311 = load8($100,4);
      store8($310,$311,4);
      break;
     }
    }
   }
   $brmerge194$demorgan = $$0153$off0 & $148;
   if ($brmerge194$demorgan) {
    $154 = $$0 >= Math_fround(0.0);
    $155 = $108 >= Math_fround(0.0);
    $or$cond = $155 | $154;
    $156 = $153 >= Math_fround(0.0);
    $$ = $or$cond | $156;
    $157 = ((($0)) + 248|0);
    $158 = $$&1;
    store1($157,$158);
    $159 = ((($0)) + 212|0);
    if ($$) {
     $160 = load8($100,4);
     store8($159,$160,4);
     $161 = ((($0)) + 228|0);
     $162 = ((($0)) + 188|0);
     $163 = load8($162,4);
     store8($161,$163,4);
     $164 = ((($0)) + 236|0);
     $165 = ((($0)) + 204|0);
     $166 = load8($165,4);
     store8($164,$166,4);
     break;
    } else {
     $167 = Math_fround(-$102);
     storef($159,$167);
     $$sroa_idx485 = ((($0)) + 216|0);
     storef($$sroa_idx485,$$sroa$0518$0);
     $168 = ((($0)) + 228|0);
     storef($168,$167);
     $$sroa_idx476 = ((($0)) + 232|0);
     storef($$sroa_idx476,$$sroa$0518$0);
     $169 = ((($0)) + 236|0);
     storef($169,$167);
     $$sroa_idx467 = ((($0)) + 240|0);
     storef($$sroa_idx467,$$sroa$0518$0);
     break;
    }
   }
   if ($$0153$off0) {
    $170 = !($$0 >= Math_fround(0.0));
    if ($170) {
     $173 = $108 >= Math_fround(0.0);
     $174 = $153 >= Math_fround(0.0);
     $175 = $173 & $174;
     $176 = ((($0)) + 248|0);
     $177 = $175&1;
     store1($176,$177);
     $178 = ((($0)) + 212|0);
     if ($175) {
      $180 = $178;
     } else {
      $186 = Math_fround(-$102);
      storef($178,$186);
      $$sroa_idx458 = ((($0)) + 216|0);
      storef($$sroa_idx458,$$sroa$0518$0);
      $187 = Math_fround(-$143);
      $188 = ((($0)) + 228|0);
      storef($188,$187);
      $$sroa_idx449 = ((($0)) + 232|0);
      storef($$sroa_idx449,$$sroa$0495$0);
      $189 = ((($0)) + 236|0);
      storef($189,$186);
      $$sroa_idx440 = ((($0)) + 240|0);
      storef($$sroa_idx440,$$sroa$0518$0);
      break;
     }
    } else {
     $171 = ((($0)) + 248|0);
     store1($171,1);
     $172 = ((($0)) + 212|0);
     $180 = $172;
    }
    $179 = load8($100,4);
    store8($180,$179,4);
    $181 = ((($0)) + 228|0);
    $182 = ((($0)) + 188|0);
    $183 = load8($182,4);
    store8($181,$183,4);
    $184 = ((($0)) + 236|0);
    $185 = load8($100,4);
    store8($184,$185,4);
    break;
   }
   if (!($148)) {
    $214 = $$0 >= Math_fround(0.0);
    $215 = $108 >= Math_fround(0.0);
    $or$cond3 = $215 & $214;
    $216 = $153 >= Math_fround(0.0);
    $$195 = $or$cond3 & $216;
    $217 = ((($0)) + 248|0);
    $218 = $$195&1;
    store1($217,$218);
    $219 = ((($0)) + 212|0);
    if ($$195) {
     $220 = load8($100,4);
     store8($219,$220,4);
     $221 = ((($0)) + 228|0);
     store8($221,$220,4);
     $222 = ((($0)) + 236|0);
     store8($222,$220,4);
     break;
    } else {
     $223 = Math_fround(-$102);
     storef($219,$223);
     $$sroa_idx404 = ((($0)) + 216|0);
     storef($$sroa_idx404,$$sroa$0518$0);
     $224 = Math_fround(-$143);
     $225 = ((($0)) + 228|0);
     storef($225,$224);
     $$sroa_idx395 = ((($0)) + 232|0);
     storef($$sroa_idx395,$$sroa$0495$0);
     $226 = ((($0)) + 188|0);
     $227 = loadf($226);
     $228 = Math_fround(-$227);
     $229 = ((($0)) + 192|0);
     $230 = loadf($229);
     $231 = Math_fround(-$230);
     $232 = ((($0)) + 236|0);
     storef($232,$228);
     $$sroa_idx386 = ((($0)) + 240|0);
     storef($$sroa_idx386,$231);
     break;
    }
   }
   $190 = !($153 >= Math_fround(0.0));
   if ($190) {
    $193 = $$0 >= Math_fround(0.0);
    $194 = $108 >= Math_fround(0.0);
    $195 = $194 & $193;
    $196 = ((($0)) + 248|0);
    $197 = $195&1;
    store1($196,$197);
    $198 = ((($0)) + 212|0);
    if ($195) {
     $200 = $198;
    } else {
     $205 = Math_fround(-$102);
     storef($198,$205);
     $$sroa_idx431 = ((($0)) + 216|0);
     storef($$sroa_idx431,$$sroa$0518$0);
     $206 = ((($0)) + 228|0);
     storef($206,$205);
     $$sroa_idx422 = ((($0)) + 232|0);
     storef($$sroa_idx422,$$sroa$0518$0);
     $207 = ((($0)) + 188|0);
     $208 = loadf($207);
     $209 = Math_fround(-$208);
     $210 = ((($0)) + 192|0);
     $211 = loadf($210);
     $212 = Math_fround(-$211);
     $213 = ((($0)) + 236|0);
     storef($213,$209);
     $$sroa_idx413 = ((($0)) + 240|0);
     storef($$sroa_idx413,$212);
     break;
    }
   } else {
    $191 = ((($0)) + 248|0);
    store1($191,1);
    $192 = ((($0)) + 212|0);
    $200 = $192;
   }
   $199 = load8($100,4);
   store8($200,$199,4);
   $201 = ((($0)) + 228|0);
   store8($201,$199,4);
   $202 = ((($0)) + 236|0);
   $203 = ((($0)) + 204|0);
   $204 = load8($203,4);
   store8($202,$204,4);
  } else {
   if (!($67)) {
    $312 = $108 >= Math_fround(0.0);
    $313 = ((($0)) + 248|0);
    $314 = $312&1;
    store1($313,$314);
    $315 = ((($0)) + 212|0);
    if ($312) {
     $316 = load8($100,4);
     store8($315,$316,4);
     $317 = i64_trunc($316);
     $318 = i32_bc2f($317);
     $319 = Math_fround(-$318);
     $320 = ((($0)) + 228|0);
     storef($320,$319);
     $$sroa_idx269 = ((($0)) + 232|0);
     storef($$sroa_idx269,$$sroa$0518$0);
     $321 = ((($0)) + 236|0);
     storef($321,$319);
     $$sroa_idx260 = ((($0)) + 240|0);
     storef($$sroa_idx260,$$sroa$0518$0);
     break;
    } else {
     $322 = Math_fround(-$102);
     storef($315,$322);
     $$sroa_idx251 = ((($0)) + 216|0);
     storef($$sroa_idx251,$$sroa$0518$0);
     $323 = ((($0)) + 228|0);
     $324 = load8($100,4);
     store8($323,$324,4);
     $325 = ((($0)) + 236|0);
     store8($325,$324,4);
     break;
    }
   }
   $233 = $$0 >= Math_fround(0.0);
   $234 = $108 >= Math_fround(0.0);
   if ($$0153$off0) {
    $235 = $234 | $233;
    $236 = ((($0)) + 248|0);
    $237 = $235&1;
    store1($236,$237);
    $238 = ((($0)) + 212|0);
    if ($235) {
     $239 = load8($100,4);
     store8($238,$239,4);
     $240 = ((($0)) + 228|0);
     $241 = ((($0)) + 188|0);
     $242 = load8($241,4);
     store8($240,$242,4);
     $243 = i64_trunc($239);
     $244 = i32_bc2f($243);
     $245 = Math_fround(-$244);
     $246 = ((($0)) + 236|0);
     storef($246,$245);
     $$sroa_idx377 = ((($0)) + 240|0);
     storef($$sroa_idx377,$$sroa$0518$0);
     break;
    } else {
     $247 = Math_fround(-$102);
     storef($238,$247);
     $$sroa_idx368 = ((($0)) + 216|0);
     storef($$sroa_idx368,$$sroa$0518$0);
     $248 = ((($0)) + 228|0);
     $249 = load8($100,4);
     store8($248,$249,4);
     $250 = i64_trunc($249);
     $251 = i32_bc2f($250);
     $252 = Math_fround(-$251);
     $253 = ((($0)) + 236|0);
     storef($253,$252);
     $$sroa_idx359 = ((($0)) + 240|0);
     storef($$sroa_idx359,$$sroa$0518$0);
     break;
    }
   } else {
    $254 = $234 & $233;
    $255 = ((($0)) + 248|0);
    $256 = $254&1;
    store1($255,$256);
    $257 = ((($0)) + 212|0);
    if ($254) {
     $258 = load8($100,4);
     store8($257,$258,4);
     $259 = ((($0)) + 228|0);
     store8($259,$258,4);
     $260 = i64_trunc($258);
     $261 = i32_bc2f($260);
     $262 = Math_fround(-$261);
     $263 = ((($0)) + 236|0);
     storef($263,$262);
     $$sroa_idx350 = ((($0)) + 240|0);
     storef($$sroa_idx350,$$sroa$0518$0);
     break;
    } else {
     $264 = Math_fround(-$102);
     storef($257,$264);
     $$sroa_idx341 = ((($0)) + 216|0);
     storef($$sroa_idx341,$$sroa$0518$0);
     $265 = ((($0)) + 228|0);
     $266 = load8($100,4);
     store8($265,$266,4);
     $267 = ((($0)) + 188|0);
     $268 = loadf($267);
     $269 = Math_fround(-$268);
     $270 = ((($0)) + 192|0);
     $271 = loadf($270);
     $272 = Math_fround(-$271);
     $273 = ((($0)) + 236|0);
     storef($273,$269);
     $$sroa_idx332 = ((($0)) + 240|0);
     storef($$sroa_idx332,$272);
     break;
    }
   }
  }
 } while(0);
 $326 = ((($4)) + 148|0);
 $327 = load4($326);
 $328 = ((($0)) + 128|0);
 store4($328,$327);
 $329 = ($327|0)>(0);
 if ($329) {
  $$0155561 = 0;
  while(1) {
   $355 = loadf($$sroa$6543$0$$sroa_idx544);
   $356 = (((($4)) + 20|0) + ($$0155561<<3)|0);
   $357 = loadf($356);
   $358 = Math_fround($355 * $357);
   $359 = loadf($$sroa$5$0$$sroa_idx541);
   $360 = (((((($4)) + 20|0) + ($$0155561<<3)|0)) + 4|0);
   $361 = loadf($360);
   $362 = Math_fround($359 * $361);
   $363 = Math_fround($358 - $362);
   $364 = loadf($$sroa$0536$0$$sroa_idx);
   $365 = Math_fround($364 + $363);
   $366 = Math_fround($357 * $359);
   $367 = Math_fround($355 * $361);
   $368 = Math_fround($366 + $367);
   $369 = loadf($$sroa$4538$0$$sroa_idx539);
   $370 = Math_fround($368 + $369);
   $371 = (($0) + ($$0155561<<3)|0);
   storef($371,$365);
   $$sroa_idx242 = (((($0) + ($$0155561<<3)|0)) + 4|0);
   storef($$sroa_idx242,$370);
   $372 = loadf($$sroa$6543$0$$sroa_idx544);
   $373 = (((($4)) + 84|0) + ($$0155561<<3)|0);
   $374 = loadf($373);
   $375 = Math_fround($372 * $374);
   $376 = loadf($$sroa$5$0$$sroa_idx541);
   $377 = (((((($4)) + 84|0) + ($$0155561<<3)|0)) + 4|0);
   $378 = loadf($377);
   $379 = Math_fround($376 * $378);
   $380 = Math_fround($375 - $379);
   $381 = Math_fround($374 * $376);
   $382 = Math_fround($372 * $378);
   $383 = Math_fround($381 + $382);
   $384 = (((($0)) + 64|0) + ($$0155561<<3)|0);
   storef($384,$380);
   $$sroa_idx234 = (((((($0)) + 64|0) + ($$0155561<<3)|0)) + 4|0);
   storef($$sroa_idx234,$383);
   $385 = (($$0155561) + 1)|0;
   $386 = load4($326);
   $387 = ($385|0)<($386|0);
   if ($387) {
    $$0155561 = $385;
   } else {
    break;
   }
  }
  $$pre = load4($328);
  $333 = $$pre;
 } else {
  $333 = $327;
 }
 $330 = ((($0)) + 244|0);
 storef($330,Math_fround(0.0199999996));
 $331 = ((($1)) + 60|0);
 store4($331,0);
 $332 = ((($0)) + 248|0);
 $334 = ($333|0)>(0);
 if (!($334)) {
  STACKTOP = sp;return;
 }
 $335 = ((($0)) + 164|0);
 $336 = loadf($335);
 $337 = loadf($77);
 $338 = ((($0)) + 212|0);
 $339 = loadf($338);
 $340 = ((($0)) + 216|0);
 $341 = loadf($340);
 $$010$i = 0;$$sroa$9$0 = Math_fround(3.40282347E+38);$352 = Math_fround(3.40282347E+38);
 while(1) {
  $342 = (($0) + ($$010$i<<3)|0);
  $343 = loadf($342);
  $344 = Math_fround($343 - $336);
  $345 = (((($0) + ($$010$i<<3)|0)) + 4|0);
  $346 = loadf($345);
  $347 = Math_fround($346 - $337);
  $348 = Math_fround($339 * $344);
  $349 = Math_fround($341 * $347);
  $350 = Math_fround($348 + $349);
  $351 = $350 < $352;
  $$sroa$9$1 = $351 ? $350 : $$sroa$9$0;
  $353 = $351 ? $350 : $352;
  $354 = (($$010$i) + 1)|0;
  $exitcond = ($354|0)==($333|0);
  if ($exitcond) {
   break;
  } else {
   $$010$i = $354;$$sroa$9$0 = $$sroa$9$1;$352 = $353;
  }
 }
 $388 = $$sroa$9$1 > Math_fround(0.0199999996);
 if ($388) {
  STACKTOP = sp;return;
 }
 __ZN12b2EPCollider24ComputePolygonSeparationEv($6,$0);
 $389 = load4($6);
 $390 = ($389|0)==(0);
 if ($390) {
  label = 58;
 } else {
  $391 = ((($6)) + 8|0);
  $392 = loadf($391);
  $393 = loadf($330);
  $394 = $392 > $393;
  if (!($394)) {
   $395 = Math_fround($$sroa$9$1 * Math_fround(0.980000019));
   $396 = Math_fround($395 + Math_fround(0.00100000005));
   $397 = $392 > $396;
   if ($397) {
    $$sroa$8$0$$sroa_idx67 = ((($6)) + 4|0);
    $$sroa$8$0$copyload68 = load4($$sroa$8$0$$sroa_idx67);
    $phitmp = ($389|0)==(1);
    $399 = ((($1)) + 56|0);
    if ($phitmp) {
     $400 = $399;$666 = $8;$667 = $7;$668 = $7;
     label = 60;
    } else {
     store4($399,2);
     $478 = load8($55,4);
     store8($7,$478);
     $479 = ((($7)) + 8|0);
     store1($479,0);
     $480 = $$sroa$8$0$copyload68&255;
     $481 = ((($479)) + 1|0);
     store1($481,$480);
     $482 = ((($479)) + 2|0);
     store1($482,0);
     $483 = ((($479)) + 3|0);
     store1($483,1);
     $484 = ((($7)) + 12|0);
     $485 = load8($58,4);
     store8($484,$485,4);
     $486 = ((($7)) + 20|0);
     store1($486,0);
     $487 = ((($486)) + 1|0);
     store1($487,$480);
     $488 = ((($486)) + 2|0);
     store1($488,0);
     $489 = ((($486)) + 3|0);
     store1($489,1);
     store4($8,$$sroa$8$0$copyload68);
     $490 = (($$sroa$8$0$copyload68) + 1)|0;
     $491 = load4($328);
     $492 = ($490|0)<($491|0);
     $493 = $492 ? $490 : 0;
     $494 = ((($8)) + 4|0);
     store4($494,$493);
     $495 = ((($8)) + 8|0);
     $496 = (($0) + ($$sroa$8$0$copyload68<<3)|0);
     $497 = load8($496,4);
     store8($495,$497,4);
     $498 = ((($8)) + 16|0);
     $499 = (($0) + ($493<<3)|0);
     $500 = load8($499,4);
     store8($498,$500,4);
     $501 = ((($8)) + 24|0);
     $502 = (((($0)) + 64|0) + ($$sroa$8$0$copyload68<<3)|0);
     $503 = load8($502,4);
     store8($501,$503,4);
     $504 = i64_lshr($503,i64_const(32,0));
     $505 = i64_trunc($504);
     $506 = i64_trunc($503);
     $507 = i32_bc2f($506);
     $508 = i64_trunc($497);
     $509 = i64_lshr($497,i64_const(32,0));
     $510 = i64_trunc($509);
     $511 = i64_trunc($500);
     $512 = i64_lshr($500,i64_const(32,0));
     $513 = i64_trunc($512);
     $$in = $513;$$in577 = $511;$$in578 = $510;$$in579 = $508;$$pre$phi575Z2D = $495;$$pre$phi576Z2D = $8;$$pre$phiZ2D = $501;$$sroa$0$0585 = 0;$522 = $507;$523 = $505;$537 = $7;$538 = $$sroa$8$0$copyload68;$669 = $8;$670 = $7;
     label = 67;
    }
   } else {
    label = 58;
   }
  }
 }
 if ((label|0) == 58) {
  $398 = ((($1)) + 56|0);
  $400 = $398;$666 = $8;$667 = $7;$668 = $7;
  label = 60;
 }
 do {
  if ((label|0) == 60) {
   store4($400,1);
   $401 = load4($328);
   $402 = ($401|0)>(1);
   if ($402) {
    $403 = ((($0)) + 212|0);
    $404 = ((($0)) + 216|0);
    $405 = loadf($403);
    $406 = ((($0)) + 64|0);
    $407 = loadf($406);
    $408 = Math_fround($405 * $407);
    $409 = loadf($404);
    $410 = ((($0)) + 68|0);
    $411 = loadf($410);
    $412 = Math_fround($409 * $411);
    $413 = Math_fround($408 + $412);
    $$0156559 = 1;$$0157558 = $413;$$0159557 = 0;
    while(1) {
     $434 = (((($0)) + 64|0) + ($$0156559<<3)|0);
     $435 = loadf($434);
     $436 = Math_fround($405 * $435);
     $437 = (((((($0)) + 64|0) + ($$0156559<<3)|0)) + 4|0);
     $438 = loadf($437);
     $439 = Math_fround($409 * $438);
     $440 = Math_fround($436 + $439);
     $441 = $440 < $$0157558;
     $$1160 = $441 ? $$0156559 : $$0159557;
     $$1158 = $441 ? $440 : $$0157558;
     $442 = (($$0156559) + 1)|0;
     $443 = ($442|0)<($401|0);
     if ($443) {
      $$0156559 = $442;$$0157558 = $$1158;$$0159557 = $$1160;
     } else {
      $$0159$lcssa = $$1160;
      break;
     }
    }
   } else {
    $$0159$lcssa = 0;
   }
   $414 = (($$0159$lcssa) + 1)|0;
   $415 = ($414|0)<($401|0);
   $416 = $415 ? $414 : 0;
   $417 = (($0) + ($$0159$lcssa<<3)|0);
   $418 = load8($417,4);
   store8($7,$418);
   $419 = ((($7)) + 8|0);
   store1($419,0);
   $420 = $$0159$lcssa&255;
   $421 = ((($419)) + 1|0);
   store1($421,$420);
   $422 = ((($419)) + 2|0);
   store1($422,1);
   $423 = ((($419)) + 3|0);
   store1($423,0);
   $424 = ((($7)) + 12|0);
   $425 = (($0) + ($416<<3)|0);
   $426 = load8($425,4);
   store8($424,$426,4);
   $427 = ((($7)) + 20|0);
   store1($427,0);
   $428 = $416&255;
   $429 = ((($427)) + 1|0);
   store1($429,$428);
   $430 = ((($427)) + 2|0);
   store1($430,1);
   $431 = ((($427)) + 3|0);
   store1($431,0);
   $432 = load1($332);
   $433 = ($432<<24>>24)==(0);
   if ($433) {
    store4($8,1);
    $461 = ((($8)) + 4|0);
    store4($461,0);
    $462 = ((($8)) + 8|0);
    $463 = load8($58,4);
    store8($462,$463,4);
    $464 = ((($8)) + 16|0);
    $465 = load8($55,4);
    store8($464,$465,4);
    $466 = loadf($100);
    $467 = Math_fround(-$466);
    $468 = loadf($103);
    $469 = Math_fround(-$468);
    $470 = ((($8)) + 24|0);
    storef($470,$467);
    $$sroa_idx221 = ((($8)) + 28|0);
    storef($$sroa_idx221,$469);
    $471 = i32_bc2i($469);
    $472 = i64_trunc($463);
    $473 = i64_lshr($463,i64_const(32,0));
    $474 = i64_trunc($473);
    $475 = i64_trunc($465);
    $476 = i64_lshr($465,i64_const(32,0));
    $477 = i64_trunc($476);
    $$pre574 = ((($8)) + 24|0);
    $$in = $477;$$in577 = $475;$$in578 = $474;$$in579 = $472;$$pre$phi575Z2D = $462;$$pre$phi576Z2D = $8;$$pre$phiZ2D = $$pre574;$$sroa$0$0585 = 1;$522 = $467;$523 = $471;$537 = $667;$538 = 1;$669 = $666;$670 = $668;
    label = 67;
    break;
   } else {
    store4($8,0);
    $444 = ((($8)) + 4|0);
    store4($444,1);
    $445 = ((($8)) + 8|0);
    $446 = load8($55,4);
    store8($445,$446,4);
    $447 = ((($8)) + 16|0);
    $448 = load8($58,4);
    store8($447,$448,4);
    $449 = ((($8)) + 24|0);
    $450 = load8($100,4);
    store8($449,$450,4);
    $451 = i64_lshr($450,i64_const(32,0));
    $452 = i64_trunc($451);
    $453 = i64_trunc($450);
    $454 = i32_bc2f($453);
    $455 = i64_trunc($446);
    $456 = i64_lshr($446,i64_const(32,0));
    $457 = i64_trunc($456);
    $458 = i64_trunc($448);
    $459 = i64_lshr($448,i64_const(32,0));
    $460 = i64_trunc($459);
    $$in = $460;$$in577 = $458;$$in578 = $457;$$in579 = $455;$$pre$phi575Z2D = $445;$$pre$phi576Z2D = $8;$$pre$phiZ2D = $449;$$sroa$0$0585 = 1;$522 = $454;$523 = $452;$537 = $667;$538 = 0;$669 = $666;$670 = $668;
    label = 67;
    break;
   }
  }
 } while(0);
 if ((label|0) == 67) {
  $514 = i32_bc2f($$in579);
  $515 = i32_bc2f($$in578);
  $516 = i32_bc2f($$in577);
  $517 = i32_bc2f($$in);
  $518 = ((($8)) + 32|0);
  $519 = ((($8)) + 28|0);
  $520 = ((($8)) + 24|0);
  $521 = Math_fround(-$522);
  store4($518,$523);
  $524 = ((($8)) + 36|0);
  storef($524,$521);
  $525 = ((($8)) + 44|0);
  $$cast = i32_bc2f($523);
  $526 = Math_fround(-$$cast);
  storef($525,$526);
  $$sroa_idx212 = ((($8)) + 48|0);
  storef($$sroa_idx212,$522);
  $527 = ((($8)) + 8|0);
  $528 = Math_fround($$cast * $514);
  $529 = ((($8)) + 12|0);
  $530 = Math_fround($515 * $521);
  $531 = Math_fround($528 + $530);
  $532 = ((($8)) + 40|0);
  storef($532,$531);
  $533 = Math_fround($516 * $526);
  $534 = Math_fround($522 * $517);
  $535 = Math_fround($533 + $534);
  $536 = ((($8)) + 52|0);
  storef($536,$535);
  $539 = (__Z19b2ClipSegmentToLineP12b2ClipVertexPKS_RK6b2Vec2fi($9,$537,$518,$531,$538)|0);
  $540 = ($539|0)<(2);
  if (!($540)) {
   $541 = loadf($536);
   $542 = ((($8)) + 4|0);
   $543 = load4($542);
   $544 = (__Z19b2ClipSegmentToLineP12b2ClipVertexPKS_RK6b2Vec2fi($10,$9,$525,$541,$543)|0);
   $545 = ($544|0)<(2);
   if (!($545)) {
    $546 = ((($1)) + 40|0);
    if ($$sroa$0$0585) {
     $547 = load8($$pre$phiZ2D,4);
     store8($546,$547,4);
     $548 = ((($1)) + 48|0);
     $549 = load8($$pre$phi575Z2D,4);
     store8($548,$549,4);
     $550 = i64_trunc($549);
     $551 = i32_bc2f($550);
     $552 = i64_trunc($547);
     $553 = i32_bc2f($552);
     $554 = loadf($529);
     $555 = loadf($519);
     $556 = loadf($10);
     $557 = Math_fround($556 - $551);
     $558 = ((($10)) + 4|0);
     $559 = loadf($558);
     $560 = Math_fround($559 - $554);
     $561 = Math_fround($557 * $553);
     $562 = Math_fround($560 * $555);
     $563 = Math_fround($561 + $562);
     $564 = loadf($330);
     $565 = !($563 <= $564);
     if ($565) {
      $$1$us = 0;$609 = $564;
     } else {
      $584 = loadf($$sroa$0536$0$$sroa_idx);
      $585 = Math_fround($556 - $584);
      $586 = loadf($$sroa$4538$0$$sroa_idx539);
      $587 = Math_fround($559 - $586);
      $588 = loadf($$sroa$6543$0$$sroa_idx544);
      $589 = Math_fround($585 * $588);
      $590 = loadf($$sroa$5$0$$sroa_idx541);
      $591 = Math_fround($587 * $590);
      $592 = Math_fround($589 + $591);
      $593 = Math_fround($585 * $590);
      $594 = Math_fround($588 * $587);
      $595 = Math_fround($594 - $593);
      storef($1,$592);
      $$sroa_idx$us = ((($1)) + 4|0);
      storef($$sroa_idx$us,$595);
      $596 = ((($10)) + 8|0);
      $597 = ((($1)) + 16|0);
      $598 = load4($596);
      store4($597,$598);
      $$pre573 = loadf($330);
      $$1$us = 1;$609 = $$pre573;
     }
     $599 = ((($10)) + 12|0);
     $600 = loadf($599);
     $601 = Math_fround($600 - $551);
     $602 = ((($10)) + 16|0);
     $603 = loadf($602);
     $604 = Math_fround($603 - $554);
     $605 = Math_fround($601 * $553);
     $606 = Math_fround($604 * $555);
     $607 = Math_fround($605 + $606);
     $608 = !($607 <= $609);
     if ($608) {
      $$0152$lcssa = $$1$us;
     } else {
      $634 = loadf($$sroa$0536$0$$sroa_idx);
      $635 = Math_fround($600 - $634);
      $636 = loadf($$sroa$4538$0$$sroa_idx539);
      $637 = Math_fround($603 - $636);
      $638 = loadf($$sroa$6543$0$$sroa_idx544);
      $639 = Math_fround($635 * $638);
      $640 = loadf($$sroa$5$0$$sroa_idx541);
      $641 = Math_fround($637 * $640);
      $642 = Math_fround($639 + $641);
      $643 = Math_fround($635 * $640);
      $644 = Math_fround($638 * $637);
      $645 = Math_fround($644 - $643);
      $646 = (($1) + (($$1$us*20)|0)|0);
      storef($646,$642);
      $$sroa_idx$us$1 = (((($1) + (($$1$us*20)|0)|0)) + 4|0);
      storef($$sroa_idx$us$1,$645);
      $647 = ((($10)) + 20|0);
      $648 = (((($1) + (($$1$us*20)|0)|0)) + 16|0);
      $649 = load4($647);
      store4($648,$649);
      $650 = (($$1$us) + 1)|0;
      $$0152$lcssa = $650;
     }
    } else {
     $566 = load4($$pre$phi576Z2D);
     $567 = (((($4)) + 84|0) + ($566<<3)|0);
     $568 = load8($567,4);
     store8($546,$568,4);
     $569 = ((($1)) + 48|0);
     $570 = (((($4)) + 20|0) + ($566<<3)|0);
     $571 = load8($570,4);
     store8($569,$571,4);
     $$pre570 = loadf($527);
     $$pre571 = loadf($520);
     $572 = loadf($529);
     $573 = loadf($519);
     $574 = loadf($10);
     $575 = Math_fround($574 - $$pre570);
     $576 = ((($10)) + 4|0);
     $577 = loadf($576);
     $578 = Math_fround($577 - $572);
     $579 = Math_fround($575 * $$pre571);
     $580 = Math_fround($578 * $573);
     $581 = Math_fround($579 + $580);
     $582 = loadf($330);
     $583 = !($581 <= $582);
     if ($583) {
      $$1 = 0;$633 = $582;
     } else {
      $610 = load8($10);
      store8($1,$610,4);
      $611 = ((($10)) + 8|0);
      $612 = ((($611)) + 3|0);
      $613 = load1($612);
      $614 = ((($1)) + 16|0);
      $615 = ((($614)) + 2|0);
      store1($615,$613);
      $616 = ((($611)) + 2|0);
      $617 = load1($616);
      $618 = ((($614)) + 3|0);
      store1($618,$617);
      $619 = ((($611)) + 1|0);
      $620 = load1($619);
      store1($614,$620);
      $621 = load1($611);
      $622 = ((($614)) + 1|0);
      store1($622,$621);
      $$pre572 = loadf($330);
      $$1 = 1;$633 = $$pre572;
     }
     $623 = ((($10)) + 12|0);
     $624 = loadf($623);
     $625 = Math_fround($624 - $$pre570);
     $626 = ((($10)) + 16|0);
     $627 = loadf($626);
     $628 = Math_fround($627 - $572);
     $629 = Math_fround($625 * $$pre571);
     $630 = Math_fround($628 * $573);
     $631 = Math_fround($629 + $630);
     $632 = !($631 <= $633);
     if ($632) {
      $$0152$lcssa = $$1;
     } else {
      $651 = (($1) + (($$1*20)|0)|0);
      $652 = load8($623,4);
      store8($651,$652,4);
      $653 = ((($10)) + 20|0);
      $654 = ((($653)) + 3|0);
      $655 = load1($654);
      $656 = (((($1) + (($$1*20)|0)|0)) + 16|0);
      $657 = ((($656)) + 2|0);
      store1($657,$655);
      $658 = ((($653)) + 2|0);
      $659 = load1($658);
      $660 = ((($656)) + 3|0);
      store1($660,$659);
      $661 = ((($653)) + 1|0);
      $662 = load1($661);
      store1($656,$662);
      $663 = load1($653);
      $664 = ((($656)) + 1|0);
      store1($664,$663);
      $665 = (($$1) + 1)|0;
      $$0152$lcssa = $665;
     }
    }
    store4($331,$$0152$lcssa);
   }
  }
 }
 STACKTOP = sp;return;
}
function __ZN12b2EPCollider24ComputePolygonSeparationEv($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$052 = 0, $$old = 0, $$ph = Math_fround(0), $10 = 0, $11 = 0, $12 = Math_fround(0), $13 = 0, $14 = Math_fround(0), $15 = 0, $16 = Math_fround(0), $17 = 0, $18 = Math_fround(0), $19 = 0, $2 = 0, $20 = Math_fround(0), $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = Math_fround(0), $27 = Math_fround(0), $28 = 0, $29 = Math_fround(0), $3 = 0, $30 = Math_fround(0), $31 = 0, $32 = Math_fround(0), $33 = Math_fround(0), $34 = 0, $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $4 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0);
 var $44 = Math_fround(0), $45 = 0, $46 = Math_fround(0), $47 = 0, $48 = Math_fround(0), $49 = Math_fround(0), $5 = Math_fround(0), $50 = Math_fround(0), $51 = 0, $52 = Math_fround(0), $53 = Math_fround(0), $54 = Math_fround(0), $55 = Math_fround(0), $56 = Math_fround(0), $57 = Math_fround(0), $58 = Math_fround(0), $59 = 0, $6 = 0, $60 = Math_fround(0), $61 = Math_fround(0);
 var $62 = Math_fround(0), $63 = Math_fround(0), $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = Math_fround(0), $68 = 0, $69 = 0, $7 = Math_fround(0), $70 = 0, $71 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond57 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($0,0);
 $2 = ((($0)) + 4|0);
 store4($2,-1);
 $3 = ((($0)) + 8|0);
 storef($3,Math_fround(-3.40282347E+38));
 $4 = ((($1)) + 216|0);
 $5 = loadf($4);
 $6 = ((($1)) + 212|0);
 $7 = loadf($6);
 $8 = ((($1)) + 128|0);
 $9 = load4($8);
 $10 = ($9|0)>(0);
 if (!($10)) {
  return;
 }
 $11 = ((($1)) + 164|0);
 $12 = loadf($11);
 $13 = ((($1)) + 168|0);
 $14 = loadf($13);
 $15 = ((($1)) + 172|0);
 $16 = loadf($15);
 $17 = ((($1)) + 176|0);
 $18 = loadf($17);
 $19 = ((($1)) + 244|0);
 $20 = loadf($19);
 $21 = ((($1)) + 228|0);
 $22 = ((($1)) + 232|0);
 $23 = ((($1)) + 236|0);
 $24 = ((($1)) + 240|0);
 $$052 = 0;$60 = Math_fround(-3.40282347E+38);
 while(1) {
  $25 = (((($1)) + 64|0) + ($$052<<3)|0);
  $26 = loadf($25);
  $27 = Math_fround(-$26);
  $28 = (((((($1)) + 64|0) + ($$052<<3)|0)) + 4|0);
  $29 = loadf($28);
  $30 = Math_fround(-$29);
  $31 = (($1) + ($$052<<3)|0);
  $32 = loadf($31);
  $33 = Math_fround($32 - $12);
  $34 = (((($1) + ($$052<<3)|0)) + 4|0);
  $35 = loadf($34);
  $36 = Math_fround($35 - $14);
  $37 = Math_fround($33 * $27);
  $38 = Math_fround($36 * $30);
  $39 = Math_fround($37 + $38);
  $40 = Math_fround($32 - $16);
  $41 = Math_fround($35 - $18);
  $42 = Math_fround($40 * $27);
  $43 = Math_fround($41 * $30);
  $44 = Math_fround($42 + $43);
  $45 = $39 < $44;
  $46 = $45 ? $39 : $44;
  $47 = $46 > $20;
  if ($47) {
   break;
  }
  $48 = Math_fround($5 * $26);
  $49 = Math_fround($7 * $30);
  $50 = Math_fround($48 + $49);
  $51 = !($50 >= Math_fround(0.0));
  if ($51) {
   $61 = loadf($21);
   $62 = Math_fround($27 - $61);
   $63 = loadf($22);
   $64 = Math_fround($30 - $63);
   $65 = Math_fround($62 * $7);
   $66 = Math_fround($64 * $5);
   $67 = Math_fround($65 + $66);
   $68 = !($67 < Math_fround(-0.0349065885));
   $69 = $46 > $60;
   $or$cond = $68 & $69;
   if ($or$cond) {
    label = 7;
   } else {
    $$ph = $60;
   }
  } else {
   $52 = loadf($23);
   $53 = Math_fround($27 - $52);
   $54 = loadf($24);
   $55 = Math_fround($30 - $54);
   $56 = Math_fround($53 * $7);
   $57 = Math_fround($55 * $5);
   $58 = Math_fround($56 + $57);
   $59 = !($58 < Math_fround(-0.0349065885));
   $$old = $46 > $60;
   $or$cond57 = $59 & $$old;
   if ($or$cond57) {
    label = 7;
   } else {
    $$ph = $60;
   }
  }
  if ((label|0) == 7) {
   label = 0;
   store4($0,2);
   store4($2,$$052);
   storef($3,$46);
   $$ph = $46;
  }
  $70 = (($$052) + 1)|0;
  $71 = ($70|0)<($9|0);
  if ($71) {
   $$052 = $70;$60 = $$ph;
  } else {
   label = 10;
   break;
  }
 }
 if ((label|0) == 10) {
  return;
 }
 store4($0,2);
 store4($2,$$052);
 storef($3,$46);
 return;
}
function __Z23b2CollideEdgeAndPolygonP10b2ManifoldPK11b2EdgeShapeRK11b2TransformPK14b2PolygonShapeS6_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
 $5 = sp;
 __ZN12b2EPCollider7CollideEP10b2ManifoldPK11b2EdgeShapeRK11b2TransformPK14b2PolygonShapeS7_($5,$0,$1,$2,$3,$4);
 STACKTOP = sp;return;
}
function __Z17b2CollidePolygonsP10b2ManifoldPK14b2PolygonShapeRK11b2TransformS3_S6_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0 = 0, $$0$lcssa$i = 0, $$0109 = 0, $$0110 = 0, $$0110$in = 0, $$0111 = 0, $$0113$lcssa = 0, $$06289$i = Math_fround(0), $$06488$i = 0, $$090$i = 0, $$1 = 0, $$1$i = 0, $$1$us = 0, $$163$i = Math_fround(0), $$sink = 0, $$sroa$0170$0 = Math_fround(0), $$sroa$0206$0 = Math_fround(0), $$sroa$0231$0 = Math_fround(0), $$sroa$10$0 = Math_fround(0), $$sroa$12$0 = Math_fround(0);
 var $$sroa$13$0 = Math_fround(0), $$sroa$4$0$$sroa_idx = 0, $$sroa$4$0$$sroa_idx$1 = 0, $$sroa$5$0$$sroa_idx = 0, $$sroa$5$0$$sroa_idx$1 = 0, $$sroa$6$0 = Math_fround(0), $$sroa$6$0$$sroa_idx = 0, $$sroa$6$0$$sroa_idx$1 = 0, $$sroa$7$0 = Math_fround(0), $$sroa$7212$0 = Math_fround(0), $$sroa$8244$0 = Math_fround(0), $$sroa_idx = 0, $$sroa_idx$1 = 0, $$sroa_idx$us = 0, $$sroa_idx$us$1 = 0, $$sroa_idx155 = 0, $$sroa_idx164 = 0, $$sroa_idx178 = 0, $$sroa_idx192 = 0, $$sroa_idx68$i = 0;
 var $$sroa_idx74$i = 0, $10 = 0, $100 = Math_fround(0), $101 = Math_fround(0), $102 = Math_fround(0), $103 = Math_fround(0), $104 = Math_fround(0), $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = Math_fround(0), $116 = Math_fround(0);
 var $117 = 0, $118 = Math_fround(0), $119 = Math_fround(0), $12 = 0, $120 = Math_fround(0), $121 = Math_fround(0), $122 = Math_fround(0), $123 = Math_fround(0), $124 = Math_fround(0), $125 = Math_fround(0), $126 = 0, $127 = Math_fround(0), $128 = Math_fround(0), $129 = Math_fround(0), $13 = 0, $130 = Math_fround(0), $131 = Math_fround(0), $132 = Math_fround(0), $133 = Math_fround(0), $134 = Math_fround(0);
 var $135 = Math_fround(0), $136 = Math_fround(0), $137 = Math_fround(0), $138 = 0, $139 = Math_fround(0), $14 = Math_fround(0), $140 = Math_fround(0), $141 = Math_fround(0), $142 = Math_fround(0), $143 = Math_fround(0), $144 = Math_fround(0), $145 = Math_fround(0), $146 = Math_fround(0), $147 = Math_fround(0), $148 = Math_fround(0), $149 = Math_fround(0), $15 = 0, $150 = Math_fround(0), $151 = Math_fround(0), $152 = Math_fround(0);
 var $153 = Math_fround(0), $154 = Math_fround(0), $155 = Math_fround(0), $156 = Math_fround(0), $157 = Math_fround(0), $158 = Math_fround(0), $159 = 0, $16 = Math_fround(0), $160 = 0, $161 = 0, $162 = Math_fround(0), $163 = Math_fround(0), $164 = Math_fround(0), $165 = Math_fround(0), $166 = Math_fround(0), $167 = Math_fround(0), $168 = Math_fround(0), $169 = Math_fround(0), $17 = Math_fround(0), $170 = Math_fround(0);
 var $171 = Math_fround(0), $172 = Math_fround(0), $173 = Math_fround(0), $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = Math_fround(0), $18 = Math_fround(0), $180 = Math_fround(0), $181 = 0, $182 = Math_fround(0), $183 = Math_fround(0), $184 = Math_fround(0), $185 = Math_fround(0), $186 = 0, $187 = Math_fround(0), $188 = Math_fround(0), $189 = Math_fround(0);
 var $19 = 0, $190 = Math_fround(0), $191 = Math_fround(0), $192 = Math_fround(0), $193 = Math_fround(0), $194 = Math_fround(0), $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = Math_fround(0), $20 = Math_fround(0), $200 = Math_fround(0), $201 = 0, $202 = Math_fround(0), $203 = Math_fround(0), $204 = Math_fround(0), $205 = Math_fround(0), $206 = 0, $207 = Math_fround(0);
 var $208 = Math_fround(0), $209 = Math_fround(0), $21 = 0, $210 = Math_fround(0), $211 = Math_fround(0), $212 = Math_fround(0), $213 = Math_fround(0), $214 = Math_fround(0), $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = Math_fround(0), $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0;
 var $226 = Math_fround(0), $227 = Math_fround(0), $228 = 0, $229 = Math_fround(0), $23 = Math_fround(0), $230 = Math_fround(0), $231 = Math_fround(0), $232 = Math_fround(0), $233 = 0, $234 = Math_fround(0), $235 = Math_fround(0), $236 = Math_fround(0), $237 = Math_fround(0), $238 = Math_fround(0), $239 = Math_fround(0), $24 = 0, $240 = Math_fround(0), $241 = Math_fround(0), $242 = 0, $243 = 0;
 var $244 = 0, $245 = 0, $246 = 0, $247 = Math_fround(0), $248 = Math_fround(0), $249 = Math_fround(0), $25 = Math_fround(0), $250 = Math_fround(0), $251 = Math_fround(0), $252 = Math_fround(0), $253 = Math_fround(0), $254 = Math_fround(0), $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0;
 var $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $27 = Math_fround(0), $28 = 0, $29 = Math_fround(0), $30 = 0, $31 = Math_fround(0), $32 = Math_fround(0), $33 = 0, $34 = Math_fround(0), $35 = 0, $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = Math_fround(0), $48 = Math_fround(0), $49 = 0, $5 = 0, $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = Math_fround(0), $55 = Math_fround(0), $56 = Math_fround(0), $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0), $6 = 0;
 var $60 = Math_fround(0), $61 = Math_fround(0), $62 = 0, $63 = 0, $64 = Math_fround(0), $65 = Math_fround(0), $66 = 0, $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = Math_fround(0), $77 = Math_fround(0), $78 = 0;
 var $79 = Math_fround(0), $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = Math_fround(0), $85 = Math_fround(0), $86 = Math_fround(0), $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = Math_fround(0), $95 = Math_fround(0), $96 = 0;
 var $97 = Math_fround(0), $98 = Math_fround(0), $99 = Math_fround(0), $exitcond$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0;
 $5 = sp + 92|0;
 $6 = sp + 88|0;
 $7 = sp + 64|0;
 $8 = sp + 56|0;
 $9 = sp + 32|0;
 $10 = sp + 8|0;
 $11 = sp;
 $12 = ((($0)) + 60|0);
 store4($12,0);
 $13 = ((($1)) + 8|0);
 $14 = loadf($13);
 $15 = ((($3)) + 8|0);
 $16 = loadf($15);
 $17 = Math_fround($14 + $16);
 store4($5,0);
 $18 = (Math_fround(__ZL19b2FindMaxSeparationPiPK14b2PolygonShapeRK11b2TransformS2_S5_($5,$1,$2,$3,$4)));
 $19 = $18 > $17;
 if ($19) {
  STACKTOP = sp;return;
 }
 store4($6,0);
 $20 = (Math_fround(__ZL19b2FindMaxSeparationPiPK14b2PolygonShapeRK11b2TransformS2_S5_($6,$3,$4,$1,$2)));
 $21 = $20 > $17;
 if (!($21)) {
  $22 = Math_fround($18 * Math_fround(0.980000019));
  $23 = Math_fround($22 + Math_fround(0.00100000005));
  $24 = $20 > $23;
  $25 = loadf($4);
  $26 = ((($4)) + 4|0);
  $27 = loadf($26);
  $28 = ((($4)) + 8|0);
  $29 = loadf($28);
  $30 = ((($4)) + 12|0);
  $31 = loadf($30);
  $32 = loadf($2);
  $33 = ((($2)) + 4|0);
  $34 = loadf($33);
  $35 = ((($2)) + 8|0);
  $36 = loadf($35);
  $37 = ((($2)) + 12|0);
  $38 = loadf($37);
  if ($24) {
   $$0 = $3;$$0109 = $1;$$0110$in = $6;$$0111 = 1;$$sink = 2;$$sroa$0206$0 = $32;$$sroa$0231$0 = $25;$$sroa$10$0 = $36;$$sroa$12$0 = $31;$$sroa$13$0 = $38;$$sroa$6$0 = $27;$$sroa$7212$0 = $34;$$sroa$8244$0 = $29;
  } else {
   $$0 = $1;$$0109 = $3;$$0110$in = $5;$$0111 = 0;$$sink = 1;$$sroa$0206$0 = $25;$$sroa$0231$0 = $32;$$sroa$10$0 = $29;$$sroa$12$0 = $38;$$sroa$13$0 = $31;$$sroa$6$0 = $34;$$sroa$7212$0 = $27;$$sroa$8244$0 = $36;
  }
  $$0110 = load4($$0110$in);
  $39 = ((($0)) + 56|0);
  store4($39,$$sink);
  $40 = ((($$0109)) + 148|0);
  $41 = load4($40);
  $42 = ($$0110|0)>(-1);
  if (!($42)) {
   ___assert_fail((4404|0),(4447|0),151,(4484|0));
   // unreachable;
  }
  $43 = ((($$0)) + 148|0);
  $44 = load4($43);
  $45 = ($44|0)>($$0110|0);
  if (!($45)) {
   ___assert_fail((4404|0),(4447|0),151,(4484|0));
   // unreachable;
  }
  $46 = (((($$0)) + 84|0) + ($$0110<<3)|0);
  $47 = loadf($46);
  $48 = Math_fround($$sroa$12$0 * $47);
  $49 = (((((($$0)) + 84|0) + ($$0110<<3)|0)) + 4|0);
  $50 = loadf($49);
  $51 = Math_fround($$sroa$8244$0 * $50);
  $52 = Math_fround($48 - $51);
  $53 = Math_fround($$sroa$8244$0 * $47);
  $54 = Math_fround($$sroa$12$0 * $50);
  $55 = Math_fround($53 + $54);
  $56 = Math_fround($$sroa$13$0 * $52);
  $57 = Math_fround($$sroa$10$0 * $55);
  $58 = Math_fround($56 + $57);
  $59 = Math_fround($$sroa$10$0 * $52);
  $60 = Math_fround($$sroa$13$0 * $55);
  $61 = Math_fround($60 - $59);
  $62 = ($41|0)>(0);
  if ($62) {
   $$06289$i = Math_fround(3.40282347E+38);$$06488$i = 0;$$090$i = 0;
   while(1) {
    $63 = (((($$0109)) + 84|0) + ($$06488$i<<3)|0);
    $64 = loadf($63);
    $65 = Math_fround($58 * $64);
    $66 = (((((($$0109)) + 84|0) + ($$06488$i<<3)|0)) + 4|0);
    $67 = loadf($66);
    $68 = Math_fround($61 * $67);
    $69 = Math_fround($65 + $68);
    $70 = $69 < $$06289$i;
    $$163$i = $70 ? $69 : $$06289$i;
    $$1$i = $70 ? $$06488$i : $$090$i;
    $71 = (($$06488$i) + 1)|0;
    $exitcond$i = ($71|0)==($41|0);
    if ($exitcond$i) {
     $$0$lcssa$i = $$1$i;
     break;
    } else {
     $$06289$i = $$163$i;$$06488$i = $71;$$090$i = $$1$i;
    }
   }
  } else {
   $$0$lcssa$i = 0;
  }
  $72 = (($$0$lcssa$i) + 1)|0;
  $73 = ($72|0)<($41|0);
  $74 = $73 ? $72 : 0;
  $75 = (((($$0109)) + 20|0) + ($$0$lcssa$i<<3)|0);
  $76 = loadf($75);
  $77 = Math_fround($$sroa$13$0 * $76);
  $78 = (((((($$0109)) + 20|0) + ($$0$lcssa$i<<3)|0)) + 4|0);
  $79 = loadf($78);
  $80 = Math_fround($$sroa$10$0 * $79);
  $81 = Math_fround($77 - $80);
  $82 = Math_fround($$sroa$0206$0 + $81);
  $83 = Math_fround($$sroa$10$0 * $76);
  $84 = Math_fround($$sroa$13$0 * $79);
  $85 = Math_fround($83 + $84);
  $86 = Math_fround($$sroa$7212$0 + $85);
  storef($7,$82);
  $$sroa_idx74$i = ((($7)) + 4|0);
  storef($$sroa_idx74$i,$86);
  $87 = $$0110&255;
  $88 = ((($7)) + 8|0);
  store1($88,$87);
  $89 = $$0$lcssa$i&255;
  $90 = ((($88)) + 1|0);
  store1($90,$89);
  $91 = ((($88)) + 2|0);
  store1($91,1);
  $92 = ((($88)) + 3|0);
  store1($92,0);
  $93 = (((($$0109)) + 20|0) + ($74<<3)|0);
  $94 = loadf($93);
  $95 = Math_fround($$sroa$13$0 * $94);
  $96 = (((((($$0109)) + 20|0) + ($74<<3)|0)) + 4|0);
  $97 = loadf($96);
  $98 = Math_fround($$sroa$10$0 * $97);
  $99 = Math_fround($95 - $98);
  $100 = Math_fround($$sroa$0206$0 + $99);
  $101 = Math_fround($$sroa$10$0 * $94);
  $102 = Math_fround($$sroa$13$0 * $97);
  $103 = Math_fround($101 + $102);
  $104 = Math_fround($$sroa$7212$0 + $103);
  $105 = ((($7)) + 12|0);
  storef($105,$100);
  $$sroa_idx68$i = ((($7)) + 16|0);
  storef($$sroa_idx68$i,$104);
  $106 = ((($7)) + 20|0);
  store1($106,$87);
  $107 = $74&255;
  $108 = ((($106)) + 1|0);
  store1($108,$107);
  $109 = ((($106)) + 2|0);
  store1($109,1);
  $110 = ((($106)) + 3|0);
  store1($110,0);
  $111 = (($$0110) + 1)|0;
  $112 = ($111|0)<($44|0);
  $113 = $112 ? $111 : 0;
  $114 = (((($$0)) + 20|0) + ($$0110<<3)|0);
  $115 = loadf($114);
  $$sroa_idx192 = (((((($$0)) + 20|0) + ($$0110<<3)|0)) + 4|0);
  $116 = loadf($$sroa_idx192);
  $117 = (((($$0)) + 20|0) + ($113<<3)|0);
  $118 = loadf($117);
  $$sroa_idx178 = (((((($$0)) + 20|0) + ($113<<3)|0)) + 4|0);
  $119 = loadf($$sroa_idx178);
  $120 = Math_fround($118 - $115);
  $121 = Math_fround($119 - $116);
  $122 = Math_fround($120 * $120);
  $123 = Math_fround($121 * $121);
  $124 = Math_fround($122 + $123);
  $125 = (Math_fround(Math_sqrt((Math_fround($124)))));
  $126 = $125 < Math_fround(1.1920929E-7);
  if ($126) {
   $$sroa$0170$0 = $120;$$sroa$7$0 = $121;
  } else {
   $127 = Math_fround(Math_fround(1.0) / $125);
   $128 = Math_fround($120 * $127);
   $129 = Math_fround($121 * $127);
   $$sroa$0170$0 = $128;$$sroa$7$0 = $129;
  }
  $130 = Math_fround($115 + $118);
  $131 = Math_fround($130 * Math_fround(0.5));
  $132 = Math_fround($$sroa$12$0 * $$sroa$0170$0);
  $133 = Math_fround($$sroa$8244$0 * $$sroa$7$0);
  $134 = Math_fround($132 - $133);
  $135 = Math_fround($$sroa$8244$0 * $$sroa$0170$0);
  $136 = Math_fround($$sroa$12$0 * $$sroa$7$0);
  $137 = Math_fround($135 + $136);
  storef($8,$134);
  $138 = ((($8)) + 4|0);
  storef($138,$137);
  $139 = Math_fround(-$134);
  $140 = Math_fround($$sroa$12$0 * $115);
  $141 = Math_fround($$sroa$8244$0 * $116);
  $142 = Math_fround($140 - $141);
  $143 = Math_fround($$sroa$0231$0 + $142);
  $144 = Math_fround($$sroa$8244$0 * $115);
  $145 = Math_fround($$sroa$12$0 * $116);
  $146 = Math_fround($144 + $145);
  $147 = Math_fround($$sroa$6$0 + $146);
  $148 = Math_fround($147 * $139);
  $149 = Math_fround($143 * $134);
  $150 = Math_fround($147 * $137);
  $151 = Math_fround($149 + $150);
  $152 = Math_fround(-$$sroa$0170$0);
  $153 = Math_fround($116 + $119);
  $154 = Math_fround($153 * Math_fround(0.5));
  $155 = Math_fround($143 * $137);
  $156 = Math_fround($155 + $148);
  $157 = Math_fround($17 - $151);
  $158 = Math_fround(-$137);
  storef($11,$139);
  $159 = ((($11)) + 4|0);
  storef($159,$158);
  $160 = (__Z19b2ClipSegmentToLineP12b2ClipVertexPKS_RK6b2Vec2fi($9,$7,$11,$157,$$0110)|0);
  $161 = ($160|0)<(2);
  if (!($161)) {
   $162 = Math_fround($$sroa$12$0 * $118);
   $163 = Math_fround($$sroa$8244$0 * $119);
   $164 = Math_fround($162 - $163);
   $165 = Math_fround($$sroa$0231$0 + $164);
   $166 = Math_fround($165 * $134);
   $167 = Math_fround($$sroa$8244$0 * $118);
   $168 = Math_fround($$sroa$12$0 * $119);
   $169 = Math_fround($167 + $168);
   $170 = Math_fround($$sroa$6$0 + $169);
   $171 = Math_fround($170 * $137);
   $172 = Math_fround($166 + $171);
   $173 = Math_fround($17 + $172);
   $174 = (__Z19b2ClipSegmentToLineP12b2ClipVertexPKS_RK6b2Vec2fi($10,$9,$8,$173,$113)|0);
   $175 = ($174|0)<(2);
   if (!($175)) {
    $176 = ((($0)) + 40|0);
    storef($176,$$sroa$7$0);
    $$sroa_idx164 = ((($0)) + 44|0);
    storef($$sroa_idx164,$152);
    $177 = ((($0)) + 48|0);
    storef($177,$131);
    $$sroa_idx155 = ((($0)) + 52|0);
    storef($$sroa_idx155,$154);
    $178 = ($$0111<<24>>24)==(0);
    $179 = loadf($10);
    $180 = Math_fround($137 * $179);
    $181 = ((($10)) + 4|0);
    $182 = loadf($181);
    $183 = Math_fround($182 * $139);
    $184 = Math_fround($180 + $183);
    $185 = Math_fround($184 - $156);
    $186 = !($185 <= $17);
    if ($178) {
     if ($186) {
      $$1$us = 0;
     } else {
      $187 = Math_fround($179 - $$sroa$0206$0);
      $188 = Math_fround($182 - $$sroa$7212$0);
      $189 = Math_fround($$sroa$13$0 * $187);
      $190 = Math_fround($$sroa$10$0 * $188);
      $191 = Math_fround($189 + $190);
      $192 = Math_fround($$sroa$10$0 * $187);
      $193 = Math_fround($$sroa$13$0 * $188);
      $194 = Math_fround($193 - $192);
      storef($0,$191);
      $$sroa_idx$us = ((($0)) + 4|0);
      storef($$sroa_idx$us,$194);
      $195 = ((($10)) + 8|0);
      $196 = ((($0)) + 16|0);
      $197 = load4($195);
      store4($196,$197);
      $$1$us = 1;
     }
     $198 = ((($10)) + 12|0);
     $199 = loadf($198);
     $200 = Math_fround($137 * $199);
     $201 = ((($10)) + 16|0);
     $202 = loadf($201);
     $203 = Math_fround($202 * $139);
     $204 = Math_fround($200 + $203);
     $205 = Math_fround($204 - $156);
     $206 = !($205 <= $17);
     if ($206) {
      $$0113$lcssa = $$1$us;
     } else {
      $234 = Math_fround($199 - $$sroa$0206$0);
      $235 = Math_fround($202 - $$sroa$7212$0);
      $236 = Math_fround($$sroa$13$0 * $234);
      $237 = Math_fround($$sroa$10$0 * $235);
      $238 = Math_fround($236 + $237);
      $239 = Math_fround($$sroa$10$0 * $234);
      $240 = Math_fround($$sroa$13$0 * $235);
      $241 = Math_fround($240 - $239);
      $242 = (($0) + (($$1$us*20)|0)|0);
      storef($242,$238);
      $$sroa_idx$us$1 = (((($0) + (($$1$us*20)|0)|0)) + 4|0);
      storef($$sroa_idx$us$1,$241);
      $243 = ((($10)) + 20|0);
      $244 = (((($0) + (($$1$us*20)|0)|0)) + 16|0);
      $245 = load4($243);
      store4($244,$245);
      $246 = (($$1$us) + 1)|0;
      $$0113$lcssa = $246;
     }
    } else {
     if ($186) {
      $$1 = 0;
     } else {
      $207 = Math_fround($179 - $$sroa$0206$0);
      $208 = Math_fround($182 - $$sroa$7212$0);
      $209 = Math_fround($$sroa$13$0 * $207);
      $210 = Math_fround($$sroa$10$0 * $208);
      $211 = Math_fround($209 + $210);
      $212 = Math_fround($$sroa$10$0 * $207);
      $213 = Math_fround($$sroa$13$0 * $208);
      $214 = Math_fround($213 - $212);
      storef($0,$211);
      $$sroa_idx = ((($0)) + 4|0);
      storef($$sroa_idx,$214);
      $215 = ((($0)) + 16|0);
      $216 = ((($10)) + 8|0);
      $217 = load4($216);
      $218 = $217&255;
      $$sroa$4$0$$sroa_idx = ((($215)) + 1|0);
      $219 = $217 >>> 8;
      $220 = $219&255;
      $$sroa$5$0$$sroa_idx = ((($215)) + 2|0);
      $221 = $217 >>> 16;
      $222 = $221&255;
      $$sroa$6$0$$sroa_idx = ((($215)) + 3|0);
      $223 = $217 >>> 24;
      $224 = $223&255;
      store1($215,$220);
      store1($$sroa$4$0$$sroa_idx,$218);
      store1($$sroa$5$0$$sroa_idx,$224);
      store1($$sroa$6$0$$sroa_idx,$222);
      $$1 = 1;
     }
     $225 = ((($10)) + 12|0);
     $226 = loadf($225);
     $227 = Math_fround($137 * $226);
     $228 = ((($10)) + 16|0);
     $229 = loadf($228);
     $230 = Math_fround($229 * $139);
     $231 = Math_fround($227 + $230);
     $232 = Math_fround($231 - $156);
     $233 = !($232 <= $17);
     if ($233) {
      $$0113$lcssa = $$1;
     } else {
      $247 = Math_fround($226 - $$sroa$0206$0);
      $248 = Math_fround($229 - $$sroa$7212$0);
      $249 = Math_fround($$sroa$13$0 * $247);
      $250 = Math_fround($$sroa$10$0 * $248);
      $251 = Math_fround($249 + $250);
      $252 = Math_fround($$sroa$10$0 * $247);
      $253 = Math_fround($$sroa$13$0 * $248);
      $254 = Math_fround($253 - $252);
      $255 = (($0) + (($$1*20)|0)|0);
      storef($255,$251);
      $$sroa_idx$1 = (((($0) + (($$1*20)|0)|0)) + 4|0);
      storef($$sroa_idx$1,$254);
      $256 = (((($0) + (($$1*20)|0)|0)) + 16|0);
      $257 = ((($10)) + 20|0);
      $258 = load4($257);
      $259 = $258&255;
      $$sroa$4$0$$sroa_idx$1 = ((($256)) + 1|0);
      $260 = $258 >>> 8;
      $261 = $260&255;
      $$sroa$5$0$$sroa_idx$1 = ((($256)) + 2|0);
      $262 = $258 >>> 16;
      $263 = $262&255;
      $$sroa$6$0$$sroa_idx$1 = ((($256)) + 3|0);
      $264 = $258 >>> 24;
      $265 = $264&255;
      store1($256,$261);
      store1($$sroa$4$0$$sroa_idx$1,$259);
      store1($$sroa$5$0$$sroa_idx$1,$265);
      store1($$sroa$6$0$$sroa_idx$1,$263);
      $266 = (($$1) + 1)|0;
      $$0113$lcssa = $266;
     }
    }
    store4($12,$$0113$lcssa);
   }
  }
 }
 STACKTOP = sp;return;
}
function __ZL19b2FindMaxSeparationPiPK14b2PolygonShapeRK11b2TransformS2_S5_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0100118 = Math_fround(0), $$0102117 = 0, $$096 = Math_fround(0), $$096$us = Math_fround(0), $$097 = 0, $$097$us = 0, $$098 = Math_fround(0), $$099$lcssa = 0, $$099119 = 0, $$1 = 0, $$1101 = Math_fround(0), $$sink = 0, $$sink1$us = 0, $10 = Math_fround(0), $11 = Math_fround(0), $12 = 0, $13 = Math_fround(0), $14 = 0, $15 = Math_fround(0), $16 = Math_fround(0);
 var $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = 0, $24 = Math_fround(0), $25 = Math_fround(0), $26 = 0, $27 = Math_fround(0), $28 = 0, $29 = Math_fround(0), $30 = Math_fround(0), $31 = 0, $32 = Math_fround(0), $33 = 0, $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0);
 var $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $40 = Math_fround(0), $41 = Math_fround(0), $42 = 0, $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = 0, $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0), $53 = 0, $54 = Math_fround(0), $55 = 0;
 var $56 = 0, $57 = Math_fround(0), $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = Math_fround(0), $62 = 0, $63 = 0, $64 = 0, $65 = Math_fround(0), $66 = Math_fround(0), $67 = 0, $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = Math_fround(0), $71 = 0, $72 = 0, $73 = 0;
 var $74 = 0, $75 = 0, $76 = Math_fround(0), $77 = 0, $78 = 0, $79 = 0, $8 = Math_fround(0), $80 = 0, $81 = Math_fround(0), $82 = 0, $9 = 0, $exitcond = 0, $or$cond = 0, $storemerge = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 148|0);
 $6 = load4($5);
 $7 = ((($4)) + 12|0);
 $8 = loadf($7);
 $9 = ((($3)) + 12|0);
 $10 = loadf($9);
 $11 = Math_fround($8 * $10);
 $12 = ((($4)) + 8|0);
 $13 = loadf($12);
 $14 = ((($3)) + 16|0);
 $15 = loadf($14);
 $16 = Math_fround($13 * $15);
 $17 = Math_fround($11 - $16);
 $18 = loadf($4);
 $19 = Math_fround($18 + $17);
 $20 = Math_fround($10 * $13);
 $21 = Math_fround($8 * $15);
 $22 = Math_fround($20 + $21);
 $23 = ((($4)) + 4|0);
 $24 = loadf($23);
 $25 = Math_fround($22 + $24);
 $26 = ((($2)) + 12|0);
 $27 = loadf($26);
 $28 = ((($1)) + 12|0);
 $29 = loadf($28);
 $30 = Math_fround($27 * $29);
 $31 = ((($2)) + 8|0);
 $32 = loadf($31);
 $33 = ((($1)) + 16|0);
 $34 = loadf($33);
 $35 = Math_fround($32 * $34);
 $36 = Math_fround($30 - $35);
 $37 = loadf($2);
 $38 = Math_fround($37 + $36);
 $39 = Math_fround($29 * $32);
 $40 = Math_fround($27 * $34);
 $41 = Math_fround($39 + $40);
 $42 = ((($2)) + 4|0);
 $43 = loadf($42);
 $44 = Math_fround($41 + $43);
 $45 = Math_fround($19 - $38);
 $46 = Math_fround($25 - $44);
 $47 = Math_fround($27 * $45);
 $48 = Math_fround($32 * $46);
 $49 = Math_fround($47 + $48);
 $50 = Math_fround($45 * $32);
 $51 = Math_fround($27 * $46);
 $52 = Math_fround($51 - $50);
 $53 = ($6|0)>(0);
 if ($53) {
  $$0100118 = Math_fround(-3.40282347E+38);$$0102117 = 0;$$099119 = 0;
  while(1) {
   $64 = (((($1)) + 84|0) + ($$0102117<<3)|0);
   $65 = loadf($64);
   $66 = Math_fround($49 * $65);
   $67 = (((((($1)) + 84|0) + ($$0102117<<3)|0)) + 4|0);
   $68 = loadf($67);
   $69 = Math_fround($52 * $68);
   $70 = Math_fround($66 + $69);
   $71 = $70 > $$0100118;
   $$1101 = $71 ? $70 : $$0100118;
   $$1 = $71 ? $$0102117 : $$099119;
   $72 = (($$0102117) + 1)|0;
   $exitcond = ($72|0)==($6|0);
   if ($exitcond) {
    $$099$lcssa = $$1;
    break;
   } else {
    $$0100118 = $$1101;$$0102117 = $72;$$099119 = $$1;
   }
  }
 } else {
  $$099$lcssa = 0;
 }
 $54 = (Math_fround(__ZL16b2EdgeSeparationPK14b2PolygonShapeRK11b2TransformiS1_S4_($1,$2,$$099$lcssa,$3,$4)));
 $55 = ($$099$lcssa|0)>(0);
 $$sink = $55 ? $$099$lcssa : $6;
 $56 = (($$sink) + -1)|0;
 $57 = (Math_fround(__ZL16b2EdgeSeparationPK14b2PolygonShapeRK11b2TransformiS1_S4_($1,$2,$56,$3,$4)));
 $58 = (($$099$lcssa) + 1)|0;
 $59 = ($58|0)<($6|0);
 $60 = $59 ? $58 : 0;
 $61 = (Math_fround(__ZL16b2EdgeSeparationPK14b2PolygonShapeRK11b2TransformiS1_S4_($1,$2,$60,$3,$4)));
 $62 = $57 > $54;
 $63 = $57 > $61;
 $or$cond = $62 & $63;
 if ($or$cond) {
  $$096$us = $57;$$097$us = $56;
  while(1) {
   $74 = ($$097$us|0)>(0);
   $$sink1$us = $74 ? $$097$us : $6;
   $75 = (($$sink1$us) + -1)|0;
   $76 = (Math_fround(__ZL16b2EdgeSeparationPK14b2PolygonShapeRK11b2TransformiS1_S4_($1,$2,$75,$3,$4)));
   $77 = $76 > $$096$us;
   if ($77) {
    $$096$us = $76;$$097$us = $75;
   } else {
    $$098 = $$096$us;$storemerge = $$097$us;
    break;
   }
  }
  store4($0,$storemerge);
  return (Math_fround($$098));
 }
 $73 = $61 > $54;
 if ($73) {
  $$096 = $61;$$097 = $60;
 } else {
  $$098 = $54;$storemerge = $$099$lcssa;
  store4($0,$storemerge);
  return (Math_fround($$098));
 }
 while(1) {
  $78 = (($$097) + 1)|0;
  $79 = ($78|0)<($6|0);
  $80 = $79 ? $78 : 0;
  $81 = (Math_fround(__ZL16b2EdgeSeparationPK14b2PolygonShapeRK11b2TransformiS1_S4_($1,$2,$80,$3,$4)));
  $82 = $81 > $$096;
  if ($82) {
   $$096 = $81;$$097 = $80;
  } else {
   $$098 = $$096;$storemerge = $$097;
   break;
  }
 }
 store4($0,$storemerge);
 return (Math_fround($$098));
}
function __ZL16b2EdgeSeparationPK14b2PolygonShapeRK11b2TransformiS1_S4_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0$lcssa = 0, $$04366 = Math_fround(0), $$04565 = 0, $$067 = 0, $$1 = 0, $$144 = Math_fround(0), $10 = 0, $11 = 0, $12 = Math_fround(0), $13 = 0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = 0, $17 = Math_fround(0), $18 = 0, $19 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = Math_fround(0);
 var $24 = Math_fround(0), $25 = 0, $26 = Math_fround(0), $27 = Math_fround(0), $28 = 0, $29 = Math_fround(0), $30 = Math_fround(0), $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = 0, $36 = 0, $37 = Math_fround(0), $38 = Math_fround(0), $39 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0);
 var $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = 0, $49 = Math_fround(0), $5 = 0, $50 = Math_fround(0), $51 = 0, $52 = Math_fround(0), $53 = Math_fround(0), $54 = 0, $55 = Math_fround(0), $56 = Math_fround(0), $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0), $6 = 0, $60 = Math_fround(0), $61 = Math_fround(0);
 var $62 = Math_fround(0), $63 = 0, $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = Math_fround(0), $71 = 0, $72 = Math_fround(0), $73 = Math_fround(0), $74 = 0, $75 = Math_fround(0), $76 = Math_fround(0), $77 = Math_fround(0), $78 = 0, $79 = 0, $8 = 0;
 var $9 = 0, $exitcond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($3)) + 148|0);
 $6 = load4($5);
 $7 = ($2|0)>(-1);
 if (!($7)) {
  ___assert_fail((4404|0),(4447|0),32,(4503|0));
  // unreachable;
 }
 $8 = ((($0)) + 148|0);
 $9 = load4($8);
 $10 = ($9|0)>($2|0);
 if (!($10)) {
  ___assert_fail((4404|0),(4447|0),32,(4503|0));
  // unreachable;
 }
 $11 = ((($1)) + 12|0);
 $12 = loadf($11);
 $13 = (((($0)) + 84|0) + ($2<<3)|0);
 $14 = loadf($13);
 $15 = Math_fround($12 * $14);
 $16 = ((($1)) + 8|0);
 $17 = loadf($16);
 $18 = (((((($0)) + 84|0) + ($2<<3)|0)) + 4|0);
 $19 = loadf($18);
 $20 = Math_fround($17 * $19);
 $21 = Math_fround($15 - $20);
 $22 = Math_fround($14 * $17);
 $23 = Math_fround($12 * $19);
 $24 = Math_fround($22 + $23);
 $25 = ((($4)) + 12|0);
 $26 = loadf($25);
 $27 = Math_fround($26 * $21);
 $28 = ((($4)) + 8|0);
 $29 = loadf($28);
 $30 = Math_fround($29 * $24);
 $31 = Math_fround($27 + $30);
 $32 = Math_fround($21 * $29);
 $33 = Math_fround($26 * $24);
 $34 = Math_fround($33 - $32);
 $35 = ($6|0)>(0);
 if ($35) {
  $$04366 = Math_fround(3.40282347E+38);$$04565 = 0;$$067 = 0;
  while(1) {
   $71 = (((($3)) + 20|0) + ($$04565<<3)|0);
   $72 = loadf($71);
   $73 = Math_fround($31 * $72);
   $74 = (((((($3)) + 20|0) + ($$04565<<3)|0)) + 4|0);
   $75 = loadf($74);
   $76 = Math_fround($34 * $75);
   $77 = Math_fround($73 + $76);
   $78 = $77 < $$04366;
   $$144 = $78 ? $77 : $$04366;
   $$1 = $78 ? $$04565 : $$067;
   $79 = (($$04565) + 1)|0;
   $exitcond = ($79|0)==($6|0);
   if ($exitcond) {
    $$0$lcssa = $$1;
    break;
   } else {
    $$04366 = $$144;$$04565 = $79;$$067 = $$1;
   }
  }
 } else {
  $$0$lcssa = 0;
 }
 $36 = (((($0)) + 20|0) + ($2<<3)|0);
 $37 = loadf($36);
 $38 = Math_fround($12 * $37);
 $39 = (((((($0)) + 20|0) + ($2<<3)|0)) + 4|0);
 $40 = loadf($39);
 $41 = Math_fround($17 * $40);
 $42 = Math_fround($38 - $41);
 $43 = loadf($1);
 $44 = Math_fround($43 + $42);
 $45 = Math_fround($37 * $17);
 $46 = Math_fround($12 * $40);
 $47 = Math_fround($45 + $46);
 $48 = ((($1)) + 4|0);
 $49 = loadf($48);
 $50 = Math_fround($47 + $49);
 $51 = (((($3)) + 20|0) + ($$0$lcssa<<3)|0);
 $52 = loadf($51);
 $53 = Math_fround($26 * $52);
 $54 = (((((($3)) + 20|0) + ($$0$lcssa<<3)|0)) + 4|0);
 $55 = loadf($54);
 $56 = Math_fround($29 * $55);
 $57 = Math_fround($53 - $56);
 $58 = loadf($4);
 $59 = Math_fround($58 + $57);
 $60 = Math_fround($52 * $29);
 $61 = Math_fround($26 * $55);
 $62 = Math_fround($60 + $61);
 $63 = ((($4)) + 4|0);
 $64 = loadf($63);
 $65 = Math_fround($62 + $64);
 $66 = Math_fround($59 - $44);
 $67 = Math_fround($65 - $50);
 $68 = Math_fround($21 * $66);
 $69 = Math_fround($24 * $67);
 $70 = Math_fround($68 + $69);
 return (Math_fround($70));
}
function __ZN15b2WorldManifold10InitializeEPK10b2ManifoldRK11b2TransformfS5_f($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = Math_fround($3);
 $4 = $4|0;
 $5 = Math_fround($5);
 var $$0206 = 0, $$037205 = 0, $$pre = Math_fround(0), $$pre209 = Math_fround(0), $$pre213 = Math_fround(0), $$pre214 = Math_fround(0), $$sroa_idx106 = 0, $$sroa_idx146 = 0, $$sroa_idx159 = 0, $$sroa_idx55 = 0, $$sroa_idx94 = 0, $10 = 0, $100 = Math_fround(0), $101 = Math_fround(0), $102 = Math_fround(0), $103 = Math_fround(0), $104 = Math_fround(0), $105 = Math_fround(0), $106 = Math_fround(0), $107 = Math_fround(0);
 var $108 = 0, $109 = Math_fround(0), $11 = 0, $110 = Math_fround(0), $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = Math_fround(0), $117 = 0, $118 = Math_fround(0), $119 = Math_fround(0), $12 = 0, $120 = Math_fround(0), $121 = 0, $122 = Math_fround(0), $123 = Math_fround(0), $124 = Math_fround(0), $125 = Math_fround(0);
 var $126 = Math_fround(0), $127 = Math_fround(0), $128 = Math_fround(0), $129 = Math_fround(0), $13 = Math_fround(0), $130 = Math_fround(0), $131 = Math_fround(0), $132 = Math_fround(0), $133 = Math_fround(0), $134 = Math_fround(0), $135 = Math_fround(0), $136 = Math_fround(0), $137 = Math_fround(0), $138 = Math_fround(0), $139 = Math_fround(0), $14 = 0, $140 = Math_fround(0), $141 = Math_fround(0), $142 = Math_fround(0), $143 = Math_fround(0);
 var $144 = Math_fround(0), $145 = Math_fround(0), $146 = Math_fround(0), $147 = Math_fround(0), $148 = Math_fround(0), $149 = Math_fround(0), $15 = Math_fround(0), $150 = Math_fround(0), $151 = Math_fround(0), $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = Math_fround(0), $158 = 0, $159 = Math_fround(0), $16 = Math_fround(0), $160 = Math_fround(0), $161 = 0;
 var $162 = Math_fround(0), $163 = 0, $164 = Math_fround(0), $165 = Math_fround(0), $166 = Math_fround(0), $167 = Math_fround(0), $168 = Math_fround(0), $169 = Math_fround(0), $17 = 0, $170 = Math_fround(0), $171 = 0, $172 = Math_fround(0), $173 = Math_fround(0), $174 = Math_fround(0), $175 = 0, $176 = Math_fround(0), $177 = Math_fround(0), $178 = Math_fround(0), $179 = Math_fround(0), $18 = Math_fround(0);
 var $180 = Math_fround(0), $181 = Math_fround(0), $182 = Math_fround(0), $183 = Math_fround(0), $184 = 0, $185 = Math_fround(0), $186 = Math_fround(0), $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = Math_fround(0), $193 = Math_fround(0), $194 = Math_fround(0), $195 = Math_fround(0), $196 = Math_fround(0), $197 = 0, $198 = Math_fround(0);
 var $199 = Math_fround(0), $20 = Math_fround(0), $200 = Math_fround(0), $201 = 0, $202 = Math_fround(0), $203 = Math_fround(0), $204 = Math_fround(0), $205 = Math_fround(0), $206 = Math_fround(0), $207 = Math_fround(0), $208 = Math_fround(0), $209 = Math_fround(0), $21 = Math_fround(0), $210 = Math_fround(0), $211 = Math_fround(0), $212 = Math_fround(0), $213 = Math_fround(0), $214 = Math_fround(0), $215 = Math_fround(0), $216 = Math_fround(0);
 var $217 = Math_fround(0), $218 = Math_fround(0), $219 = Math_fround(0), $22 = Math_fround(0), $220 = Math_fround(0), $221 = Math_fround(0), $222 = Math_fround(0), $223 = Math_fround(0), $224 = Math_fround(0), $225 = Math_fround(0), $226 = Math_fround(0), $227 = Math_fround(0), $228 = Math_fround(0), $229 = Math_fround(0), $23 = Math_fround(0), $230 = Math_fround(0), $231 = Math_fround(0), $232 = 0, $233 = 0, $234 = 0;
 var $235 = 0, $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0), $27 = Math_fround(0), $28 = 0, $29 = Math_fround(0), $30 = Math_fround(0), $31 = 0, $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = 0, $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = Math_fround(0), $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0);
 var $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = 0, $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = 0, $55 = Math_fround(0), $56 = Math_fround(0), $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0), $6 = 0, $60 = Math_fround(0), $61 = 0;
 var $62 = Math_fround(0), $63 = Math_fround(0), $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = Math_fround(0), $76 = Math_fround(0), $77 = Math_fround(0), $78 = Math_fround(0), $79 = 0, $8 = 0;
 var $80 = 0, $81 = Math_fround(0), $82 = 0, $83 = Math_fround(0), $84 = Math_fround(0), $85 = 0, $86 = Math_fround(0), $87 = 0, $88 = Math_fround(0), $89 = Math_fround(0), $9 = 0, $90 = Math_fround(0), $91 = Math_fround(0), $92 = Math_fround(0), $93 = Math_fround(0), $94 = Math_fround(0), $95 = 0, $96 = Math_fround(0), $97 = Math_fround(0), $98 = Math_fround(0);
 var $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 60|0);
 $7 = load4($6);
 $8 = ($7|0)==(0);
 if ($8) {
  return;
 }
 $9 = ((($1)) + 56|0);
 $10 = load4($9);
 switch ($10|0) {
 case 0:  {
  storef($0,Math_fround(1.0));
  $11 = ((($0)) + 4|0);
  storef($11,Math_fround(0.0));
  $12 = ((($2)) + 12|0);
  $13 = loadf($12);
  $14 = ((($1)) + 48|0);
  $15 = loadf($14);
  $16 = Math_fround($13 * $15);
  $17 = ((($2)) + 8|0);
  $18 = loadf($17);
  $19 = ((($1)) + 52|0);
  $20 = loadf($19);
  $21 = Math_fround($18 * $20);
  $22 = Math_fround($16 - $21);
  $23 = loadf($2);
  $24 = Math_fround($23 + $22);
  $25 = Math_fround($15 * $18);
  $26 = Math_fround($13 * $20);
  $27 = Math_fround($25 + $26);
  $28 = ((($2)) + 4|0);
  $29 = loadf($28);
  $30 = Math_fround($27 + $29);
  $31 = ((($4)) + 12|0);
  $32 = loadf($31);
  $33 = loadf($1);
  $34 = Math_fround($32 * $33);
  $35 = ((($4)) + 8|0);
  $36 = loadf($35);
  $37 = ((($1)) + 4|0);
  $38 = loadf($37);
  $39 = Math_fround($36 * $38);
  $40 = Math_fround($34 - $39);
  $41 = loadf($4);
  $42 = Math_fround($41 + $40);
  $43 = Math_fround($33 * $36);
  $44 = Math_fround($32 * $38);
  $45 = Math_fround($43 + $44);
  $46 = ((($4)) + 4|0);
  $47 = loadf($46);
  $48 = Math_fround($45 + $47);
  $49 = Math_fround($24 - $42);
  $50 = Math_fround($30 - $48);
  $51 = Math_fround($49 * $49);
  $52 = Math_fround($50 * $50);
  $53 = Math_fround($51 + $52);
  $54 = $53 > Math_fround(1.42108547E-14);
  if ($54) {
   $55 = Math_fround($42 - $24);
   $56 = Math_fround($48 - $30);
   storef($0,$55);
   storef($11,$56);
   $57 = Math_fround($55 * $55);
   $58 = Math_fround($56 * $56);
   $59 = Math_fround($57 + $58);
   $60 = (Math_fround(Math_sqrt((Math_fround($59)))));
   $61 = $60 < Math_fround(1.1920929E-7);
   if ($61) {
    $66 = $55;$68 = $56;
   } else {
    $62 = Math_fround(Math_fround(1.0) / $60);
    $63 = Math_fround($55 * $62);
    storef($0,$63);
    $64 = Math_fround($56 * $62);
    storef($11,$64);
    $66 = $63;$68 = $64;
   }
  } else {
   $66 = Math_fround(1.0);$68 = Math_fround(0.0);
  }
  $65 = Math_fround($66 * $3);
  $67 = Math_fround($68 * $3);
  $69 = Math_fround($24 + $65);
  $70 = Math_fround($30 + $67);
  $71 = Math_fround($66 * $5);
  $72 = Math_fround($68 * $5);
  $73 = Math_fround($42 - $71);
  $74 = Math_fround($48 - $72);
  $75 = Math_fround($69 + $73);
  $76 = Math_fround($70 + $74);
  $77 = Math_fround($75 * Math_fround(0.5));
  $78 = Math_fround($76 * Math_fround(0.5));
  $79 = ((($0)) + 8|0);
  storef($79,$77);
  $$sroa_idx159 = ((($0)) + 12|0);
  storef($$sroa_idx159,$78);
  return;
  break;
 }
 case 1:  {
  $80 = ((($2)) + 12|0);
  $81 = loadf($80);
  $82 = ((($1)) + 40|0);
  $83 = loadf($82);
  $84 = Math_fround($81 * $83);
  $85 = ((($2)) + 8|0);
  $86 = loadf($85);
  $87 = ((($1)) + 44|0);
  $88 = loadf($87);
  $89 = Math_fround($86 * $88);
  $90 = Math_fround($84 - $89);
  $91 = Math_fround($83 * $86);
  $92 = Math_fround($81 * $88);
  $93 = Math_fround($91 + $92);
  storef($0,$90);
  $$sroa_idx146 = ((($0)) + 4|0);
  storef($$sroa_idx146,$93);
  $94 = loadf($80);
  $95 = ((($1)) + 48|0);
  $96 = loadf($95);
  $97 = Math_fround($94 * $96);
  $98 = loadf($85);
  $99 = ((($1)) + 52|0);
  $100 = loadf($99);
  $101 = Math_fround($98 * $100);
  $102 = Math_fround($97 - $101);
  $103 = loadf($2);
  $104 = Math_fround($103 + $102);
  $105 = Math_fround($96 * $98);
  $106 = Math_fround($94 * $100);
  $107 = Math_fround($105 + $106);
  $108 = ((($2)) + 4|0);
  $109 = loadf($108);
  $110 = Math_fround($107 + $109);
  $111 = load4($6);
  $112 = ($111|0)>(0);
  if (!($112)) {
   return;
  }
  $113 = ((($4)) + 12|0);
  $114 = ((($4)) + 8|0);
  $115 = ((($4)) + 4|0);
  $$037205 = 0;$135 = $90;$137 = $93;
  while(1) {
   $116 = loadf($113);
   $117 = (($1) + (($$037205*20)|0)|0);
   $118 = loadf($117);
   $119 = Math_fround($116 * $118);
   $120 = loadf($114);
   $121 = (((($1) + (($$037205*20)|0)|0)) + 4|0);
   $122 = loadf($121);
   $123 = Math_fround($120 * $122);
   $124 = Math_fround($119 - $123);
   $125 = loadf($4);
   $126 = Math_fround($125 + $124);
   $127 = Math_fround($118 * $120);
   $128 = Math_fround($116 * $122);
   $129 = Math_fround($127 + $128);
   $130 = loadf($115);
   $131 = Math_fround($129 + $130);
   $132 = Math_fround($126 - $104);
   $133 = Math_fround($131 - $110);
   $134 = Math_fround($135 * $132);
   $136 = Math_fround($133 * $137);
   $138 = Math_fround($134 + $136);
   $139 = Math_fround($3 - $138);
   $140 = Math_fround($135 * $139);
   $141 = Math_fround($137 * $139);
   $142 = Math_fround($126 + $140);
   $143 = Math_fround($131 + $141);
   $144 = Math_fround($135 * $5);
   $145 = Math_fround($137 * $5);
   $146 = Math_fround($126 - $144);
   $147 = Math_fround($131 - $145);
   $148 = Math_fround($146 + $142);
   $149 = Math_fround($147 + $143);
   $150 = Math_fround($148 * Math_fround(0.5));
   $151 = Math_fround($149 * Math_fround(0.5));
   $152 = (((($0)) + 8|0) + ($$037205<<3)|0);
   storef($152,$150);
   $$sroa_idx106 = (((((($0)) + 8|0) + ($$037205<<3)|0)) + 4|0);
   storef($$sroa_idx106,$151);
   $153 = (($$037205) + 1)|0;
   $154 = load4($6);
   $155 = ($153|0)<($154|0);
   if (!($155)) {
    break;
   }
   $$pre213 = loadf($0);
   $$pre214 = loadf($$sroa_idx146);
   $$037205 = $153;$135 = $$pre213;$137 = $$pre214;
  }
  return;
  break;
 }
 case 2:  {
  $156 = ((($4)) + 12|0);
  $157 = loadf($156);
  $158 = ((($1)) + 40|0);
  $159 = loadf($158);
  $160 = Math_fround($157 * $159);
  $161 = ((($4)) + 8|0);
  $162 = loadf($161);
  $163 = ((($1)) + 44|0);
  $164 = loadf($163);
  $165 = Math_fround($162 * $164);
  $166 = Math_fround($160 - $165);
  $167 = Math_fround($159 * $162);
  $168 = Math_fround($157 * $164);
  $169 = Math_fround($167 + $168);
  storef($0,$166);
  $$sroa_idx94 = ((($0)) + 4|0);
  storef($$sroa_idx94,$169);
  $170 = loadf($156);
  $171 = ((($1)) + 48|0);
  $172 = loadf($171);
  $173 = Math_fround($170 * $172);
  $174 = loadf($161);
  $175 = ((($1)) + 52|0);
  $176 = loadf($175);
  $177 = Math_fround($174 * $176);
  $178 = Math_fround($173 - $177);
  $179 = loadf($4);
  $180 = Math_fround($179 + $178);
  $181 = Math_fround($172 * $174);
  $182 = Math_fround($170 * $176);
  $183 = Math_fround($181 + $182);
  $184 = ((($4)) + 4|0);
  $185 = loadf($184);
  $186 = Math_fround($183 + $185);
  $187 = load4($6);
  $188 = ($187|0)>(0);
  if ($188) {
   $189 = ((($2)) + 12|0);
   $190 = ((($2)) + 8|0);
   $191 = ((($2)) + 4|0);
   $$0206 = 0;$215 = $166;$217 = $169;
   while(1) {
    $196 = loadf($189);
    $197 = (($1) + (($$0206*20)|0)|0);
    $198 = loadf($197);
    $199 = Math_fround($196 * $198);
    $200 = loadf($190);
    $201 = (((($1) + (($$0206*20)|0)|0)) + 4|0);
    $202 = loadf($201);
    $203 = Math_fround($200 * $202);
    $204 = Math_fround($199 - $203);
    $205 = loadf($2);
    $206 = Math_fround($205 + $204);
    $207 = Math_fround($198 * $200);
    $208 = Math_fround($196 * $202);
    $209 = Math_fround($207 + $208);
    $210 = loadf($191);
    $211 = Math_fround($209 + $210);
    $212 = Math_fround($206 - $180);
    $213 = Math_fround($211 - $186);
    $214 = Math_fround($215 * $212);
    $216 = Math_fround($213 * $217);
    $218 = Math_fround($214 + $216);
    $219 = Math_fround($5 - $218);
    $220 = Math_fround($215 * $219);
    $221 = Math_fround($217 * $219);
    $222 = Math_fround($206 + $220);
    $223 = Math_fround($211 + $221);
    $224 = Math_fround($215 * $3);
    $225 = Math_fround($217 * $3);
    $226 = Math_fround($206 - $224);
    $227 = Math_fround($211 - $225);
    $228 = Math_fround($226 + $222);
    $229 = Math_fround($227 + $223);
    $230 = Math_fround($228 * Math_fround(0.5));
    $231 = Math_fround($229 * Math_fround(0.5));
    $232 = (((($0)) + 8|0) + ($$0206<<3)|0);
    storef($232,$230);
    $$sroa_idx55 = (((((($0)) + 8|0) + ($$0206<<3)|0)) + 4|0);
    storef($$sroa_idx55,$231);
    $233 = (($$0206) + 1)|0;
    $234 = load4($6);
    $235 = ($233|0)<($234|0);
    $$pre = loadf($0);
    $$pre209 = loadf($$sroa_idx94);
    if ($235) {
     $$0206 = $233;$215 = $$pre;$217 = $$pre209;
    } else {
     $193 = $$pre;$195 = $$pre209;
     break;
    }
   }
  } else {
   $193 = $166;$195 = $169;
  }
  $192 = Math_fround(-$193);
  $194 = Math_fround(-$195);
  storef($0,$192);
  storef($$sroa_idx94,$194);
  return;
  break;
 }
 default: {
  return;
 }
 }
}
function __Z19b2ClipSegmentToLineP12b2ClipVertexPKS_RK6b2Vec2fi($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = Math_fround($3);
 $4 = $4|0;
 var $$0 = 0, $$1 = 0, $$2 = 0, $$sroa_idx = 0, $10 = 0, $11 = Math_fround(0), $12 = Math_fround(0), $13 = Math_fround(0), $14 = Math_fround(0), $15 = 0, $16 = Math_fround(0), $17 = Math_fround(0), $18 = 0, $19 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = Math_fround(0), $28 = 0, $29 = Math_fround(0), $30 = Math_fround(0), $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $40 = Math_fround(0), $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = Math_fround(0), $50 = 0, $6 = Math_fround(0), $7 = Math_fround(0), $8 = 0, $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 $5 = loadf($2);
 $6 = loadf($1);
 $7 = Math_fround($5 * $6);
 $8 = ((($2)) + 4|0);
 $9 = loadf($8);
 $10 = ((($1)) + 4|0);
 $11 = loadf($10);
 $12 = Math_fround($9 * $11);
 $13 = Math_fround($7 + $12);
 $14 = Math_fround($13 - $3);
 $15 = ((($1)) + 12|0);
 $16 = loadf($15);
 $17 = Math_fround($5 * $16);
 $18 = ((($1)) + 16|0);
 $19 = loadf($18);
 $20 = Math_fround($9 * $19);
 $21 = Math_fround($17 + $20);
 $22 = Math_fround($21 - $3);
 $23 = !($14 <= Math_fround(0.0));
 if ($23) {
  $$0 = 0;
 } else {
  ; store8($0,load8($1,4),4); store4($0+8 | 0,load4($1+8 | 0,4),4);
  $$0 = 1;
 }
 $24 = !($22 <= Math_fround(0.0));
 if ($24) {
  $$1 = $$0;
 } else {
  $25 = (($0) + (($$0*12)|0)|0);
  $26 = (($$0) + 1)|0;
  ; store8($25,load8($15,4),4); store4($25+8 | 0,load4($15+8 | 0,4),4);
  $$1 = $26;
 }
 $27 = Math_fround($14 * $22);
 $28 = $27 < Math_fround(0.0);
 if (!($28)) {
  $$2 = $$1;
  return ($$2|0);
 }
 $29 = Math_fround($14 - $22);
 $30 = Math_fround($14 / $29);
 $31 = loadf($15);
 $32 = loadf($1);
 $33 = Math_fround($31 - $32);
 $34 = loadf($18);
 $35 = loadf($10);
 $36 = Math_fround($34 - $35);
 $37 = Math_fround($30 * $33);
 $38 = Math_fround($30 * $36);
 $39 = Math_fround($32 + $37);
 $40 = Math_fround($35 + $38);
 $41 = (($0) + (($$1*12)|0)|0);
 storef($41,$39);
 $$sroa_idx = (((($0) + (($$1*12)|0)|0)) + 4|0);
 storef($$sroa_idx,$40);
 $42 = $4&255;
 $43 = (((($0) + (($$1*12)|0)|0)) + 8|0);
 store1($43,$42);
 $44 = ((($1)) + 8|0);
 $45 = ((($44)) + 1|0);
 $46 = load1($45);
 $47 = ((($43)) + 1|0);
 store1($47,$46);
 $48 = ((($43)) + 2|0);
 store1($48,0);
 $49 = ((($43)) + 3|0);
 store1($49,1);
 $50 = (($$1) + 1)|0;
 $$2 = $50;
 return ($$2|0);
}
function __Z13b2TestOverlapPK7b2ShapeiS1_iRK11b2TransformS4_($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = Math_fround(0), $22 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $6 = sp + 36|0;
 $7 = sp + 24|0;
 $8 = sp;
 $9 = ((($6)) + 16|0);
 store4($9,0);
 $10 = ((($6)) + 20|0);
 store4($10,0);
 $11 = ((($6)) + 24|0);
 storef($11,Math_fround(0.0));
 $12 = ((($6)) + 44|0);
 store4($12,0);
 $13 = ((($6)) + 48|0);
 store4($13,0);
 $14 = ((($6)) + 52|0);
 storef($14,Math_fround(0.0));
 __ZN15b2DistanceProxy3SetEPK7b2Shapei($6,$0,$1);
 $15 = ((($6)) + 28|0);
 __ZN15b2DistanceProxy3SetEPK7b2Shapei($15,$2,$3);
 $16 = ((($6)) + 56|0);
 ; store8($16,load8($4,4),4); store8($16+8 | 0,load8($4+8 | 0,4),4);
 $17 = ((($6)) + 72|0);
 ; store8($17,load8($5,4),4); store8($17+8 | 0,load8($5+8 | 0,4),4);
 $18 = ((($6)) + 88|0);
 store1($18,1);
 $19 = ((($7)) + 4|0);
 store2($19,0);
 __Z10b2DistanceP16b2DistanceOutputP14b2SimplexCachePK15b2DistanceInput($8,$7,$6);
 $20 = ((($8)) + 16|0);
 $21 = loadf($20);
 $22 = $21 < Math_fround(1.1920929E-6);
 STACKTOP = sp;return ($22|0);
}
function __ZN15b2DistanceProxy3SetEPK7b2Shapei($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = i64(), $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = i64(), $34 = 0, $35 = i64(), $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($1)) + 4|0);
 $4 = load4($3);
 switch ($4|0) {
 case 0:  {
  $5 = ((($1)) + 12|0);
  $6 = ((($0)) + 16|0);
  store4($6,$5);
  $7 = ((($0)) + 20|0);
  store4($7,1);
  $8 = ((($1)) + 8|0);
  $9 = load4($8);
  $10 = ((($0)) + 24|0);
  store4($10,$9);
  return;
  break;
 }
 case 2:  {
  $11 = ((($1)) + 20|0);
  $12 = ((($0)) + 16|0);
  store4($12,$11);
  $13 = ((($1)) + 148|0);
  $14 = load4($13);
  $15 = ((($0)) + 20|0);
  store4($15,$14);
  $16 = ((($1)) + 8|0);
  $17 = load4($16);
  $18 = ((($0)) + 24|0);
  store4($18,$17);
  return;
  break;
 }
 case 3:  {
  $19 = ($2|0)>(-1);
  if (!($19)) {
   ___assert_fail((4520|0),(4557|0),53,(4588|0));
   // unreachable;
  }
  $20 = ((($1)) + 16|0);
  $21 = load4($20);
  $22 = ($21|0)>($2|0);
  if (!($22)) {
   ___assert_fail((4520|0),(4557|0),53,(4588|0));
   // unreachable;
  }
  $23 = ((($1)) + 12|0);
  $24 = load4($23);
  $25 = (($24) + ($2<<3)|0);
  $26 = load8($25,4);
  store8($0,$26,4);
  $27 = (($2) + 1)|0;
  $28 = load4($20);
  $29 = ($27|0)<($28|0);
  $30 = ((($0)) + 8|0);
  if ($29) {
   $31 = load4($23);
   $32 = (($31) + ($27<<3)|0);
   $33 = load8($32,4);
   store8($30,$33,4);
  } else {
   $34 = load4($23);
   $35 = load8($34,4);
   store8($30,$35,4);
  }
  $36 = ((($0)) + 16|0);
  store4($36,$0);
  $37 = ((($0)) + 20|0);
  store4($37,2);
  $38 = ((($1)) + 8|0);
  $39 = load4($38);
  $40 = ((($0)) + 24|0);
  store4($40,$39);
  return;
  break;
 }
 case 1:  {
  $41 = ((($1)) + 12|0);
  $42 = ((($0)) + 16|0);
  store4($42,$41);
  $43 = ((($0)) + 20|0);
  store4($43,2);
  $44 = ((($1)) + 8|0);
  $45 = load4($44);
  $46 = ((($0)) + 24|0);
  store4($46,$45);
  return;
  break;
 }
 default: {
  ___assert_fail((5342|0),(4557|0),81,(4588|0));
  // unreachable;
 }
 }
}
function __ZN9b2Simplex6Solve3Ev($0) {
 $0 = $0|0;
 var $$sroa_idx130 = 0, $$sroa_idx149 = 0, $$sroa_idx169 = 0, $1 = 0, $10 = Math_fround(0), $100 = 0, $101 = Math_fround(0), $102 = 0, $103 = Math_fround(0), $104 = 0, $105 = 0, $11 = Math_fround(0), $12 = Math_fround(0), $13 = Math_fround(0), $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0);
 var $2 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0), $27 = Math_fround(0), $28 = Math_fround(0), $29 = Math_fround(0), $3 = Math_fround(0), $30 = Math_fround(0), $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0);
 var $38 = Math_fround(0), $39 = Math_fround(0), $4 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = 0, $50 = Math_fround(0), $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0;
 var $56 = 0, $57 = 0, $58 = Math_fround(0), $59 = Math_fround(0), $6 = Math_fround(0), $60 = Math_fround(0), $61 = 0, $62 = Math_fround(0), $63 = Math_fround(0), $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = Math_fround(0), $7 = Math_fround(0), $70 = Math_fround(0), $71 = Math_fround(0), $72 = 0, $73 = Math_fround(0);
 var $74 = Math_fround(0), $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = Math_fround(0), $89 = Math_fround(0), $9 = 0, $90 = Math_fround(0), $91 = 0;
 var $92 = Math_fround(0), $93 = Math_fround(0), $94 = 0, $95 = 0, $96 = Math_fround(0), $97 = Math_fround(0), $98 = Math_fround(0), $99 = Math_fround(0), $or$cond = 0, $or$cond11 = 0, $or$cond13 = 0, $or$cond15 = 0, $or$cond17 = 0, $or$cond3 = 0, $or$cond5 = 0, $or$cond7 = 0, $or$cond9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 16|0);
 $2 = loadf($1);
 $$sroa_idx169 = ((($0)) + 20|0);
 $3 = loadf($$sroa_idx169);
 $4 = ((($0)) + 36|0);
 $5 = ((($0)) + 52|0);
 $6 = loadf($5);
 $$sroa_idx149 = ((($0)) + 56|0);
 $7 = loadf($$sroa_idx149);
 $8 = ((($0)) + 72|0);
 $9 = ((($0)) + 88|0);
 $10 = loadf($9);
 $$sroa_idx130 = ((($0)) + 92|0);
 $11 = loadf($$sroa_idx130);
 $12 = Math_fround($6 - $2);
 $13 = Math_fround($7 - $3);
 $14 = Math_fround($2 * $12);
 $15 = Math_fround($3 * $13);
 $16 = Math_fround($14 + $15);
 $17 = Math_fround($6 * $12);
 $18 = Math_fround($7 * $13);
 $19 = Math_fround($17 + $18);
 $20 = Math_fround($10 - $2);
 $21 = Math_fround($11 - $3);
 $22 = Math_fround($2 * $20);
 $23 = Math_fround($3 * $21);
 $24 = Math_fround($22 + $23);
 $25 = Math_fround($10 * $20);
 $26 = Math_fround($11 * $21);
 $27 = Math_fround($25 + $26);
 $28 = Math_fround($10 - $6);
 $29 = Math_fround($11 - $7);
 $30 = Math_fround($6 * $28);
 $31 = Math_fround($7 * $29);
 $32 = Math_fround($30 + $31);
 $33 = Math_fround($10 * $28);
 $34 = Math_fround($11 * $29);
 $35 = Math_fround($33 + $34);
 $36 = Math_fround($12 * $21);
 $37 = Math_fround($13 * $20);
 $38 = Math_fround($36 - $37);
 $39 = Math_fround($6 * $11);
 $40 = Math_fround($7 * $10);
 $41 = Math_fround($39 - $40);
 $42 = Math_fround($41 * $38);
 $43 = Math_fround($3 * $10);
 $44 = Math_fround($2 * $11);
 $45 = Math_fround($43 - $44);
 $46 = Math_fround($45 * $38);
 $47 = Math_fround($2 * $7);
 $48 = Math_fround($3 * $6);
 $49 = Math_fround($47 - $48);
 $50 = Math_fround($49 * $38);
 $51 = $16 >= Math_fround(-0.0);
 $52 = $24 >= Math_fround(-0.0);
 $or$cond = $51 & $52;
 if ($or$cond) {
  $53 = ((($0)) + 24|0);
  storef($53,Math_fround(1.0));
  $54 = ((($0)) + 108|0);
  store4($54,1);
  return;
 }
 $55 = $19 > Math_fround(0.0);
 $56 = $16 < Math_fround(-0.0);
 $or$cond3 = $55 & $56;
 $57 = $50 <= Math_fround(0.0);
 $or$cond5 = $or$cond3 & $57;
 if ($or$cond5) {
  $58 = Math_fround($19 - $16);
  $59 = Math_fround(Math_fround(1.0) / $58);
  $60 = Math_fround($19 * $59);
  $61 = ((($0)) + 24|0);
  storef($61,$60);
  $62 = Math_fround($16 * $59);
  $63 = Math_fround(-$62);
  $64 = ((($0)) + 60|0);
  storef($64,$63);
  $65 = ((($0)) + 108|0);
  store4($65,2);
  return;
 }
 $66 = $27 > Math_fround(0.0);
 $67 = $24 < Math_fround(-0.0);
 $or$cond7 = $66 & $67;
 $68 = $46 <= Math_fround(0.0);
 $or$cond9 = $or$cond7 & $68;
 if ($or$cond9) {
  $69 = Math_fround($27 - $24);
  $70 = Math_fround(Math_fround(1.0) / $69);
  $71 = Math_fround($27 * $70);
  $72 = ((($0)) + 24|0);
  storef($72,$71);
  $73 = Math_fround($24 * $70);
  $74 = Math_fround(-$73);
  $75 = ((($0)) + 96|0);
  storef($75,$74);
  $76 = ((($0)) + 108|0);
  store4($76,2);
  ; store8($4,load8($8,4),4); store8($4+8 | 0,load8($8+8 | 0,4),4); store8($4+16 | 0,load8($8+16 | 0,4),4); store8($4+24 | 0,load8($8+24 | 0,4),4); store4($4+32 | 0,load4($8+32 | 0,4),4);
  return;
 }
 $77 = $19 <= Math_fround(0.0);
 $78 = $32 >= Math_fround(-0.0);
 $or$cond11 = $77 & $78;
 if ($or$cond11) {
  $79 = ((($0)) + 60|0);
  storef($79,Math_fround(1.0));
  $80 = ((($0)) + 108|0);
  store4($80,1);
  ; store8($0,load8($4,4),4); store8($0+8 | 0,load8($4+8 | 0,4),4); store8($0+16 | 0,load8($4+16 | 0,4),4); store8($0+24 | 0,load8($4+24 | 0,4),4); store4($0+32 | 0,load4($4+32 | 0,4),4);
  return;
 }
 $81 = $27 <= Math_fround(0.0);
 $82 = $35 <= Math_fround(0.0);
 $or$cond13 = $81 & $82;
 if ($or$cond13) {
  $83 = ((($0)) + 96|0);
  storef($83,Math_fround(1.0));
  $84 = ((($0)) + 108|0);
  store4($84,1);
  ; store8($0,load8($8,4),4); store8($0+8 | 0,load8($8+8 | 0,4),4); store8($0+16 | 0,load8($8+16 | 0,4),4); store8($0+24 | 0,load8($8+24 | 0,4),4); store4($0+32 | 0,load4($8+32 | 0,4),4);
  return;
 }
 $85 = $35 > Math_fround(0.0);
 $86 = $32 < Math_fround(-0.0);
 $or$cond15 = $85 & $86;
 $87 = $42 <= Math_fround(0.0);
 $or$cond17 = $or$cond15 & $87;
 if ($or$cond17) {
  $88 = Math_fround($35 - $32);
  $89 = Math_fround(Math_fround(1.0) / $88);
  $90 = Math_fround($35 * $89);
  $91 = ((($0)) + 60|0);
  storef($91,$90);
  $92 = Math_fround($32 * $89);
  $93 = Math_fround(-$92);
  $94 = ((($0)) + 96|0);
  storef($94,$93);
  $95 = ((($0)) + 108|0);
  store4($95,2);
  ; store8($0,load8($8,4),4); store8($0+8 | 0,load8($8+8 | 0,4),4); store8($0+16 | 0,load8($8+16 | 0,4),4); store8($0+24 | 0,load8($8+24 | 0,4),4); store4($0+32 | 0,load4($8+32 | 0,4),4);
  return;
 } else {
  $96 = Math_fround($42 + $46);
  $97 = Math_fround($50 + $96);
  $98 = Math_fround(Math_fround(1.0) / $97);
  $99 = Math_fround($42 * $98);
  $100 = ((($0)) + 24|0);
  storef($100,$99);
  $101 = Math_fround($46 * $98);
  $102 = ((($0)) + 60|0);
  storef($102,$101);
  $103 = Math_fround($50 * $98);
  $104 = ((($0)) + 96|0);
  storef($104,$103);
  $105 = ((($0)) + 108|0);
  store4($105,3);
  return;
 }
}
function __Z10b2DistanceP16b2DistanceOutputP14b2SimplexCachePK15b2DistanceInput($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$i111 = Math_fround(0), $$0$lcssa$i116221 = 0, $$0$lcssa$i220 = 0, $$0101227 = 0, $$0104226 = 0, $$0105 = 0, $$015$i = 0, $$01721$i = 0, $$01721$i118 = 0, $$01820$i = Math_fround(0), $$01820$i119 = Math_fround(0), $$022$i = 0, $$022$i117 = 0, $$1$i = 0, $$1$i121 = 0, $$119$i = Math_fround(0), $$119$i120 = Math_fround(0), $$2 = 0, $$2238 = 0, $$2239 = 0;
 var $$pr$pre = 0, $$pre = 0, $$pre$phi236Z2D = 0, $$pre$phiZ2D = 0, $$pre235 = 0, $$sroa$0144$0 = Math_fround(0), $$sroa$0188$0 = Math_fround(0), $$sroa$7$0 = Math_fround(0), $$sroa$8$0 = Math_fround(0), $$sroa_idx$i = 0, $$sroa_idx153 = 0, $$sroa_idx161 = 0, $$sroa_idx174 = 0, $$sroa_idx41$i = 0, $$sroa_idx57$i = 0, $10 = 0, $100 = Math_fround(0), $101 = 0, $102 = Math_fround(0), $103 = Math_fround(0);
 var $104 = Math_fround(0), $105 = 0, $106 = Math_fround(0), $107 = Math_fround(0), $108 = 0, $109 = Math_fround(0), $11 = 0, $110 = Math_fround(0), $111 = Math_fround(0), $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = Math_fround(0), $119 = Math_fround(0), $12 = 0, $120 = 0, $121 = Math_fround(0);
 var $122 = Math_fround(0), $123 = Math_fround(0), $124 = Math_fround(0), $125 = Math_fround(0), $126 = Math_fround(0), $127 = Math_fround(0), $128 = Math_fround(0), $129 = Math_fround(0), $13 = 0, $130 = Math_fround(0), $131 = 0, $132 = Math_fround(0), $133 = Math_fround(0), $134 = Math_fround(0), $135 = Math_fround(0), $136 = Math_fround(0), $137 = Math_fround(0), $138 = Math_fround(0), $139 = Math_fround(0), $14 = 0;
 var $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = Math_fround(0), $145 = Math_fround(0), $146 = 0, $147 = Math_fround(0), $148 = Math_fround(0), $149 = Math_fround(0), $15 = 0, $150 = 0, $151 = Math_fround(0), $152 = Math_fround(0), $153 = 0, $154 = Math_fround(0), $155 = Math_fround(0), $156 = Math_fround(0), $157 = 0, $158 = 0;
 var $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = Math_fround(0), $164 = Math_fround(0), $165 = 0, $166 = Math_fround(0), $167 = Math_fround(0), $168 = Math_fround(0), $169 = Math_fround(0), $17 = 0, $170 = Math_fround(0), $171 = Math_fround(0), $172 = Math_fround(0), $173 = Math_fround(0), $174 = Math_fround(0), $175 = Math_fround(0), $176 = 0;
 var $177 = Math_fround(0), $178 = Math_fround(0), $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0;
 var $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = i64(), $204 = 0, $205 = i64(), $206 = 0, $207 = Math_fround(0), $208 = 0, $209 = Math_fround(0), $21 = 0, $210 = i64(), $211 = 0, $212 = Math_fround(0);
 var $213 = i64(), $214 = 0, $215 = Math_fround(0), $216 = Math_fround(0), $217 = Math_fround(0), $218 = Math_fround(0), $219 = 0, $22 = 0, $220 = Math_fround(0), $221 = Math_fround(0), $222 = Math_fround(0), $223 = 0, $224 = Math_fround(0), $225 = Math_fround(0), $226 = 0, $227 = Math_fround(0), $228 = Math_fround(0), $229 = Math_fround(0), $23 = 0, $230 = Math_fround(0);
 var $231 = 0, $232 = Math_fround(0), $233 = Math_fround(0), $234 = 0, $235 = Math_fround(0), $236 = Math_fround(0), $237 = 0, $238 = Math_fround(0), $239 = Math_fround(0), $24 = 0, $240 = 0, $241 = Math_fround(0), $242 = Math_fround(0), $243 = Math_fround(0), $244 = Math_fround(0), $245 = Math_fround(0), $246 = Math_fround(0), $247 = Math_fround(0), $248 = 0, $249 = Math_fround(0);
 var $25 = 0, $250 = Math_fround(0), $251 = Math_fround(0), $252 = 0, $253 = Math_fround(0), $254 = Math_fround(0), $255 = 0, $256 = Math_fround(0), $257 = Math_fround(0), $258 = Math_fround(0), $259 = Math_fround(0), $26 = 0, $260 = 0, $261 = Math_fround(0), $262 = 0, $263 = Math_fround(0), $264 = Math_fround(0), $265 = 0, $266 = Math_fround(0), $267 = Math_fround(0);
 var $268 = Math_fround(0), $269 = Math_fround(0), $27 = 0, $270 = i64(), $271 = 0, $272 = 0, $273 = Math_fround(0), $274 = i64(), $275 = 0, $276 = Math_fround(0), $277 = Math_fround(0), $278 = Math_fround(0), $279 = Math_fround(0), $28 = 0, $280 = 0, $281 = Math_fround(0), $282 = Math_fround(0), $283 = Math_fround(0), $284 = Math_fround(0), $285 = Math_fround(0);
 var $286 = Math_fround(0), $287 = Math_fround(0), $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = Math_fround(0), $292 = Math_fround(0), $293 = Math_fround(0), $294 = Math_fround(0), $295 = Math_fround(0), $296 = Math_fround(0), $297 = Math_fround(0), $298 = Math_fround(0), $299 = Math_fround(0), $3 = 0, $30 = 0, $300 = Math_fround(0), $301 = Math_fround(0), $302 = Math_fround(0);
 var $303 = Math_fround(0), $304 = Math_fround(0), $305 = Math_fround(0), $306 = Math_fround(0), $307 = 0, $308 = Math_fround(0), $309 = Math_fround(0), $31 = 0, $310 = 0, $311 = Math_fround(0), $312 = Math_fround(0), $313 = Math_fround(0), $314 = Math_fround(0), $315 = Math_fround(0), $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0;
 var $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = Math_fround(0), $333 = 0, $334 = Math_fround(0), $335 = Math_fround(0), $336 = Math_fround(0), $337 = 0, $338 = 0, $339 = Math_fround(0);
 var $34 = 0, $340 = Math_fround(0), $341 = 0, $342 = Math_fround(0), $343 = Math_fround(0), $344 = Math_fround(0), $345 = Math_fround(0), $346 = Math_fround(0), $347 = Math_fround(0), $348 = Math_fround(0), $349 = Math_fround(0), $35 = 0, $350 = Math_fround(0), $351 = 0, $352 = Math_fround(0), $353 = Math_fround(0), $354 = Math_fround(0), $355 = Math_fround(0), $356 = Math_fround(0), $357 = Math_fround(0);
 var $358 = Math_fround(0), $359 = Math_fround(0), $36 = 0, $360 = Math_fround(0), $361 = Math_fround(0), $362 = Math_fround(0), $363 = Math_fround(0), $364 = Math_fround(0), $365 = Math_fround(0), $366 = Math_fround(0), $367 = Math_fround(0), $368 = Math_fround(0), $369 = Math_fround(0), $37 = 0, $370 = Math_fround(0), $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = Math_fround(0);
 var $42 = Math_fround(0), $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = 0, $50 = 0, $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = 0, $55 = Math_fround(0), $56 = Math_fround(0), $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0), $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = Math_fround(0), $76 = Math_fround(0), $77 = 0, $78 = Math_fround(0);
 var $79 = Math_fround(0), $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = 0, $84 = Math_fround(0), $85 = Math_fround(0), $86 = Math_fround(0), $87 = Math_fround(0), $88 = Math_fround(0), $89 = Math_fround(0), $9 = 0, $90 = Math_fround(0), $91 = Math_fround(0), $92 = Math_fround(0), $93 = Math_fround(0), $94 = 0, $95 = 0, $96 = 0;
 var $97 = 0, $98 = 0, $99 = Math_fround(0), $exitcond = 0, $exitcond231 = 0, $exitcond232 = 0, $or$cond110 = 0, $trunc = 0, $trunc$clear = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 176|0;
 $3 = sp + 152|0;
 $4 = sp + 136|0;
 $5 = sp;
 $6 = sp + 124|0;
 $7 = sp + 112|0;
 $8 = load4(9620);
 $9 = (($8) + 1)|0;
 store4(9620,$9);
 $10 = ((($2)) + 28|0);
 $11 = ((($2)) + 56|0);
 ; store8($3,load8($11,4),4); store8($3+8 | 0,load8($11+8 | 0,4),4);
 $12 = ((($2)) + 72|0);
 ; store8($4,load8($12,4),4); store8($4+8 | 0,load8($12+8 | 0,4),4);
 __ZN9b2Simplex9ReadCacheEPK14b2SimplexCachePK15b2DistanceProxyRK11b2TransformS5_S8_($5,$1,$2,$3,$10,$4);
 $13 = ((($5)) + 108|0);
 $14 = load4($13);
 switch ($14|0) {
 case 0:  {
  ___assert_fail((5342|0),(4557|0),194,(4592|0));
  // unreachable;
  break;
 }
 case 3: case 2: case 1:  {
  $15 = ((($5)) + 16|0);
  $16 = ((($5)) + 20|0);
  $17 = ((($3)) + 12|0);
  $18 = ((($3)) + 8|0);
  $19 = ((($2)) + 16|0);
  $20 = ((($2)) + 20|0);
  $21 = ((($3)) + 4|0);
  $22 = ((($4)) + 12|0);
  $23 = ((($4)) + 8|0);
  $24 = ((($2)) + 44|0);
  $25 = ((($2)) + 48|0);
  $26 = ((($4)) + 4|0);
  $27 = ((($5)) + 52|0);
  $28 = ((($5)) + 56|0);
  $29 = ((($5)) + 36|0);
  $30 = ((($5)) + 24|0);
  $31 = ((($5)) + 60|0);
  $$0105 = 0;$32 = $14;
  L5: while(1) {
   $33 = ($32|0)>(0);
   if ($33) {
    $$0104226 = 0;
    while(1) {
     $34 = (((($5) + (($$0104226*36)|0)|0)) + 28|0);
     $35 = load4($34);
     $36 = (($6) + ($$0104226<<2)|0);
     store4($36,$35);
     $37 = (((($5) + (($$0104226*36)|0)|0)) + 32|0);
     $38 = load4($37);
     $39 = (($7) + ($$0104226<<2)|0);
     store4($39,$38);
     $40 = (($$0104226) + 1)|0;
     $exitcond = ($40|0)==($32|0);
     if ($exitcond) {
      break;
     } else {
      $$0104226 = $40;
     }
    }
   }
   L11: do {
    switch ($32|0) {
    case 1:  {
     label = 18;
     break;
    }
    case 2:  {
     $41 = loadf($15);
     $42 = loadf($16);
     $43 = loadf($27);
     $44 = loadf($28);
     $45 = Math_fround($43 - $41);
     $46 = Math_fround($44 - $42);
     $47 = Math_fround($41 * $45);
     $48 = Math_fround($42 * $46);
     $49 = Math_fround($47 + $48);
     $50 = !($49 >= Math_fround(-0.0));
     if (!($50)) {
      storef($30,Math_fround(1.0));
      store4($13,1);
      label = 18;
      break L11;
     }
     $51 = Math_fround($43 * $45);
     $52 = Math_fround($44 * $46);
     $53 = Math_fround($51 + $52);
     $54 = !($53 <= Math_fround(0.0));
     if ($54) {
      $55 = Math_fround($53 - $49);
      $56 = Math_fround(Math_fround(1.0) / $55);
      $57 = Math_fround($53 * $56);
      storef($30,$57);
      $58 = Math_fround($49 * $56);
      $59 = Math_fround(-$58);
      storef($31,$59);
      store4($13,2);
      label = 19;
      break L11;
     } else {
      storef($31,Math_fround(1.0));
      store4($13,1);
      ; store8($5,load8($29,4),4); store8($5+8 | 0,load8($29+8 | 0,4),4); store8($5+16 | 0,load8($29+16 | 0,4),4); store8($5+24 | 0,load8($29+24 | 0,4),4); store4($5+32 | 0,load4($29+32 | 0,4),4);
      label = 18;
      break L11;
     }
     break;
    }
    case 3:  {
     __ZN9b2Simplex6Solve3Ev($5);
     $$pr$pre = load4($13);
     switch ($$pr$pre|0) {
     case 3:  {
      label = 15;
      break L5;
      break;
     }
     case 0:  {
      label = 16;
      break L5;
      break;
     }
     case 1:  {
      label = 18;
      break;
     }
     case 2:  {
      label = 19;
      break;
     }
     default: {
      label = 17;
      break L5;
     }
     }
     break;
    }
    default: {
     label = 13;
     break L5;
    }
    }
   } while(0);
   do {
    if ((label|0) == 18) {
     label = 0;
     $64 = loadf($15);
     $65 = Math_fround(-$64);
     $66 = loadf($16);
     $67 = Math_fround(-$66);
     $$sroa$0188$0 = $65;$$sroa$8$0 = $67;$98 = 1;
    }
    else if ((label|0) == 19) {
     label = 0;
     $68 = loadf($27);
     $69 = loadf($15);
     $70 = Math_fround($68 - $69);
     $71 = loadf($28);
     $72 = loadf($16);
     $73 = Math_fround($71 - $72);
     $74 = Math_fround($70 * $72);
     $75 = Math_fround($69 * $73);
     $76 = Math_fround($75 - $74);
     $77 = $76 > Math_fround(0.0);
     if ($77) {
      $78 = Math_fround(-$73);
      $$sroa$0188$0 = $78;$$sroa$8$0 = $70;$98 = 2;
      break;
     } else {
      $79 = Math_fround(-$70);
      $$sroa$0188$0 = $73;$$sroa$8$0 = $79;$98 = 2;
      break;
     }
    }
   } while(0);
   $80 = Math_fround($$sroa$0188$0 * $$sroa$0188$0);
   $81 = Math_fround($$sroa$8$0 * $$sroa$8$0);
   $82 = Math_fround($80 + $81);
   $83 = $82 < Math_fround(1.42108547E-14);
   if ($83) {
    $$2 = $$0105;$202 = $98;
    label = 44;
    break;
   }
   $84 = Math_fround(-$$sroa$0188$0);
   $85 = Math_fround(-$$sroa$8$0);
   $86 = loadf($17);
   $87 = Math_fround($86 * $84);
   $88 = loadf($18);
   $89 = Math_fround($88 * $85);
   $90 = Math_fround($87 + $89);
   $91 = Math_fround($88 * $84);
   $92 = Math_fround($86 * $85);
   $93 = Math_fround($92 - $91);
   $94 = load4($19);
   $95 = load4($20);
   $96 = ($95|0)>(1);
   if ($96) {
    $99 = loadf($94);
    $100 = Math_fround($90 * $99);
    $101 = ((($94)) + 4|0);
    $102 = loadf($101);
    $103 = Math_fround($93 * $102);
    $104 = Math_fround($100 + $103);
    $$01721$i = 1;$$01820$i = $104;$$022$i = 0;
    while(1) {
     $105 = (($94) + ($$01721$i<<3)|0);
     $106 = loadf($105);
     $107 = Math_fround($90 * $106);
     $108 = (((($94) + ($$01721$i<<3)|0)) + 4|0);
     $109 = loadf($108);
     $110 = Math_fround($93 * $109);
     $111 = Math_fround($107 + $110);
     $112 = $111 > $$01820$i;
     $$119$i = $112 ? $111 : $$01820$i;
     $$1$i = $112 ? $$01721$i : $$022$i;
     $113 = (($$01721$i) + 1)|0;
     $exitcond231 = ($113|0)==($95|0);
     if ($exitcond231) {
      break;
     } else {
      $$01721$i = $113;$$01820$i = $$119$i;$$022$i = $$1$i;
     }
    }
    $114 = (((($5) + (($98*36)|0)|0)) + 28|0);
    store4($114,$$1$i);
    $115 = ($$1$i|0)>(-1);
    if ($115) {
     $$0$lcssa$i220 = $$1$i;$184 = $114;
    } else {
     label = 29;
     break;
    }
   } else {
    $97 = (((($5) + (($98*36)|0)|0)) + 28|0);
    store4($97,0);
    $$0$lcssa$i220 = 0;$184 = $97;
   }
   $116 = ($95|0)>($$0$lcssa$i220|0);
   if (!($116)) {
    label = 29;
    break;
   }
   $117 = (($94) + ($$0$lcssa$i220<<3)|0);
   $118 = loadf($117);
   $119 = Math_fround($86 * $118);
   $120 = (((($94) + ($$0$lcssa$i220<<3)|0)) + 4|0);
   $121 = loadf($120);
   $122 = Math_fround($88 * $121);
   $123 = Math_fround($119 - $122);
   $124 = loadf($3);
   $125 = Math_fround($124 + $123);
   $126 = Math_fround($118 * $88);
   $127 = Math_fround($86 * $121);
   $128 = Math_fround($126 + $127);
   $129 = loadf($21);
   $130 = Math_fround($128 + $129);
   $131 = (($5) + (($98*36)|0)|0);
   storef($131,$125);
   $$sroa_idx174 = (((($5) + (($98*36)|0)|0)) + 4|0);
   storef($$sroa_idx174,$130);
   $132 = loadf($22);
   $133 = Math_fround($$sroa$0188$0 * $132);
   $134 = loadf($23);
   $135 = Math_fround($$sroa$8$0 * $134);
   $136 = Math_fround($133 + $135);
   $137 = Math_fround($$sroa$0188$0 * $134);
   $138 = Math_fround($$sroa$8$0 * $132);
   $139 = Math_fround($138 - $137);
   $140 = load4($24);
   $141 = load4($25);
   $142 = ($141|0)>(1);
   if ($142) {
    $144 = loadf($140);
    $145 = Math_fround($136 * $144);
    $146 = ((($140)) + 4|0);
    $147 = loadf($146);
    $148 = Math_fround($139 * $147);
    $149 = Math_fround($145 + $148);
    $$01721$i118 = 1;$$01820$i119 = $149;$$022$i117 = 0;
    while(1) {
     $150 = (($140) + ($$01721$i118<<3)|0);
     $151 = loadf($150);
     $152 = Math_fround($136 * $151);
     $153 = (((($140) + ($$01721$i118<<3)|0)) + 4|0);
     $154 = loadf($153);
     $155 = Math_fround($139 * $154);
     $156 = Math_fround($152 + $155);
     $157 = $156 > $$01820$i119;
     $$119$i120 = $157 ? $156 : $$01820$i119;
     $$1$i121 = $157 ? $$01721$i118 : $$022$i117;
     $158 = (($$01721$i118) + 1)|0;
     $exitcond232 = ($158|0)==($141|0);
     if ($exitcond232) {
      break;
     } else {
      $$01721$i118 = $158;$$01820$i119 = $$119$i120;$$022$i117 = $$1$i121;
     }
    }
    $159 = (((($5) + (($98*36)|0)|0)) + 32|0);
    store4($159,$$1$i121);
    $160 = ($$1$i121|0)>(-1);
    if ($160) {
     $$0$lcssa$i116221 = $$1$i121;$189 = $159;
    } else {
     label = 36;
     break;
    }
   } else {
    $143 = (((($5) + (($98*36)|0)|0)) + 32|0);
    store4($143,0);
    $$0$lcssa$i116221 = 0;$189 = $143;
   }
   $161 = ($141|0)>($$0$lcssa$i116221|0);
   if (!($161)) {
    label = 36;
    break;
   }
   $162 = (($140) + ($$0$lcssa$i116221<<3)|0);
   $163 = loadf($162);
   $164 = Math_fround($132 * $163);
   $165 = (((($140) + ($$0$lcssa$i116221<<3)|0)) + 4|0);
   $166 = loadf($165);
   $167 = Math_fround($134 * $166);
   $168 = Math_fround($164 - $167);
   $169 = loadf($4);
   $170 = Math_fround($169 + $168);
   $171 = Math_fround($163 * $134);
   $172 = Math_fround($132 * $166);
   $173 = Math_fround($171 + $172);
   $174 = loadf($26);
   $175 = Math_fround($173 + $174);
   $176 = (((($5) + (($98*36)|0)|0)) + 8|0);
   storef($176,$170);
   $$sroa_idx161 = (((($5) + (($98*36)|0)|0)) + 12|0);
   storef($$sroa_idx161,$175);
   $177 = Math_fround($170 - $125);
   $178 = Math_fround($175 - $130);
   $179 = (((($5) + (($98*36)|0)|0)) + 16|0);
   storef($179,$177);
   $$sroa_idx153 = (((($5) + (($98*36)|0)|0)) + 20|0);
   storef($$sroa_idx153,$178);
   $180 = (($$0105) + 1)|0;
   $181 = load4(9624);
   $182 = (($181) + 1)|0;
   store4(9624,$182);
   if ($33) {
    $183 = load4($184);
    $$0101227 = 0;
    while(1) {
     $185 = (($6) + ($$0101227<<2)|0);
     $186 = load4($185);
     $187 = ($183|0)==($186|0);
     if ($187) {
      $188 = load4($189);
      $190 = (($7) + ($$0101227<<2)|0);
      $191 = load4($190);
      $192 = ($188|0)==($191|0);
      if ($192) {
       label = 43;
       break L5;
      }
     }
     $193 = (($$0101227) + 1)|0;
     $194 = ($193|0)<($32|0);
     if ($194) {
      $$0101227 = $193;
     } else {
      break;
     }
    }
   }
   $195 = load4($13);
   $196 = (($195) + 1)|0;
   store4($13,$196);
   $197 = ($180|0)<(20);
   if ($197) {
    $$0105 = $180;$32 = $196;
   } else {
    $$2 = $180;$202 = $196;
    label = 44;
    break;
   }
  }
  if ((label|0) == 13) {
   ___assert_fail((5342|0),(4557|0),498,(4608|0));
   // unreachable;
  }
  else if ((label|0) == 15) {
   $60 = load4(9628);
   $61 = ($60|0)>($$0105|0);
   $62 = $61 ? $60 : $$0105;
   store4(9628,$62);
   $63 = ((($0)) + 8|0);
   $$2239 = $$0105;$271 = $63;
   label = 48;
  }
  else if ((label|0) == 16) {
   ___assert_fail((5342|0),(4557|0),194,(4592|0));
   // unreachable;
  }
  else if ((label|0) == 17) {
   ___assert_fail((5342|0),(4557|0),207,(4592|0));
   // unreachable;
  }
  else if ((label|0) == 29) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  else if ((label|0) == 36) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  else if ((label|0) == 43) {
   $$pre = load4($13);
   $$2 = $180;$202 = $$pre;
   label = 44;
  }
  L62: do {
   if ((label|0) == 44) {
    $198 = load4(9628);
    $199 = ($198|0)>($$2|0);
    $200 = $199 ? $198 : $$2;
    store4(9628,$200);
    $201 = ((($0)) + 8|0);
    switch ($202|0) {
    case 3:  {
     $$2239 = $$2;$271 = $201;
     label = 48;
     break L62;
     break;
    }
    case 0:  {
     ___assert_fail((5342|0),(4557|0),217,(4619|0));
     // unreachable;
     break;
    }
    case 1:  {
     $203 = load8($5);
     store8($0,$203,4);
     $204 = ((($5)) + 8|0);
     $205 = load8($204);
     store8($201,$205,4);
     $206 = i64_trunc($203);
     $207 = i32_bc2f($206);
     $208 = i64_trunc($205);
     $209 = i32_bc2f($208);
     $210 = i64_lshr($203,i64_const(32,0));
     $211 = i64_trunc($210);
     $212 = i32_bc2f($211);
     $213 = i64_lshr($205,i64_const(32,0));
     $214 = i64_trunc($213);
     $215 = i32_bc2f($214);
     $$pre235 = ((($0)) + 4|0);
     $$2238 = $$2;$$pre$phi236Z2D = $$pre235;$$pre$phiZ2D = $0;$278 = $209;$279 = $207;$282 = $215;$283 = $212;$290 = 1;$341 = $201;
     break L62;
     break;
    }
    case 2:  {
     $216 = loadf($30);
     $217 = loadf($5);
     $218 = Math_fround($216 * $217);
     $219 = ((($5)) + 4|0);
     $220 = loadf($219);
     $221 = Math_fround($216 * $220);
     $222 = loadf($31);
     $223 = ((($5)) + 36|0);
     $224 = loadf($223);
     $225 = Math_fround($222 * $224);
     $226 = ((($5)) + 40|0);
     $227 = loadf($226);
     $228 = Math_fround($222 * $227);
     $229 = Math_fround($218 + $225);
     $230 = Math_fround($221 + $228);
     storef($0,$229);
     $$sroa_idx57$i = ((($0)) + 4|0);
     storef($$sroa_idx57$i,$230);
     $231 = ((($5)) + 8|0);
     $232 = loadf($231);
     $233 = Math_fround($216 * $232);
     $234 = ((($5)) + 12|0);
     $235 = loadf($234);
     $236 = Math_fround($216 * $235);
     $237 = ((($5)) + 44|0);
     $238 = loadf($237);
     $239 = Math_fround($222 * $238);
     $240 = ((($5)) + 48|0);
     $241 = loadf($240);
     $242 = Math_fround($222 * $241);
     $243 = Math_fround($233 + $239);
     $244 = Math_fround($236 + $242);
     storef($201,$243);
     $$sroa_idx41$i = ((($0)) + 12|0);
     storef($$sroa_idx41$i,$244);
     $$2238 = $$2;$$pre$phi236Z2D = $$sroa_idx57$i;$$pre$phiZ2D = $0;$278 = $243;$279 = $229;$282 = $244;$283 = $230;$290 = 2;$341 = $201;
     break L62;
     break;
    }
    default: {
     ___assert_fail((5342|0),(4557|0),236,(4619|0));
     // unreachable;
    }
    }
   }
  } while(0);
  if ((label|0) == 48) {
   $245 = loadf($30);
   $246 = loadf($5);
   $247 = Math_fround($245 * $246);
   $248 = ((($5)) + 4|0);
   $249 = loadf($248);
   $250 = Math_fround($245 * $249);
   $251 = loadf($31);
   $252 = ((($5)) + 36|0);
   $253 = loadf($252);
   $254 = Math_fround($251 * $253);
   $255 = ((($5)) + 40|0);
   $256 = loadf($255);
   $257 = Math_fround($251 * $256);
   $258 = Math_fround($247 + $254);
   $259 = Math_fround($250 + $257);
   $260 = ((($5)) + 96|0);
   $261 = loadf($260);
   $262 = ((($5)) + 72|0);
   $263 = loadf($262);
   $264 = Math_fround($261 * $263);
   $265 = ((($5)) + 76|0);
   $266 = loadf($265);
   $267 = Math_fround($261 * $266);
   $268 = Math_fround($258 + $264);
   $269 = Math_fround($259 + $267);
   storef($0,$268);
   $$sroa_idx$i = ((($0)) + 4|0);
   storef($$sroa_idx$i,$269);
   $270 = load8($0,4);
   store8($271,$270,4);
   $272 = i64_trunc($270);
   $273 = i32_bc2f($272);
   $274 = i64_lshr($270,i64_const(32,0));
   $275 = i64_trunc($274);
   $276 = i32_bc2f($275);
   $$2238 = $$2239;$$pre$phi236Z2D = $$sroa_idx$i;$$pre$phiZ2D = $0;$278 = $273;$279 = $273;$282 = $276;$283 = $269;$290 = 3;$341 = $271;
  }
  $277 = Math_fround($279 - $278);
  $280 = ((($0)) + 12|0);
  $281 = Math_fround($283 - $282);
  $284 = Math_fround($277 * $277);
  $285 = Math_fround($281 * $281);
  $286 = Math_fround($284 + $285);
  $287 = (Math_fround(Math_sqrt((Math_fround($286)))));
  $288 = ((($0)) + 16|0);
  storef($288,$287);
  $289 = ((($0)) + 20|0);
  store4($289,$$2238);
  $trunc = $290&255;
  $trunc$clear = $trunc & 3;
  switch ($trunc$clear<<24>>24) {
  case 0:  {
   ___assert_fail((5342|0),(4557|0),246,(4636|0));
   // unreachable;
   break;
  }
  case 1:  {
   $$0$i111 = Math_fround(0.0);
   break;
  }
  case 2:  {
   $291 = loadf($15);
   $292 = loadf($27);
   $293 = Math_fround($291 - $292);
   $294 = loadf($16);
   $295 = loadf($28);
   $296 = Math_fround($294 - $295);
   $297 = Math_fround($293 * $293);
   $298 = Math_fround($296 * $296);
   $299 = Math_fround($297 + $298);
   $300 = (Math_fround(Math_sqrt((Math_fround($299)))));
   $$0$i111 = $300;
   break;
  }
  case 3:  {
   $301 = loadf($27);
   $302 = loadf($15);
   $303 = Math_fround($301 - $302);
   $304 = loadf($28);
   $305 = loadf($16);
   $306 = Math_fround($304 - $305);
   $307 = ((($5)) + 88|0);
   $308 = loadf($307);
   $309 = Math_fround($308 - $302);
   $310 = ((($5)) + 92|0);
   $311 = loadf($310);
   $312 = Math_fround($311 - $305);
   $313 = Math_fround($303 * $312);
   $314 = Math_fround($306 * $309);
   $315 = Math_fround($313 - $314);
   $$0$i111 = $315;
   break;
  }
  default: {
   // unreachable;
  }
  }
  storef($1,$$0$i111);
  $316 = $290&65535;
  $317 = ((($1)) + 4|0);
  store2($317,$316);
  $$015$i = 0;
  while(1) {
   $318 = (((($5) + (($$015$i*36)|0)|0)) + 28|0);
   $319 = load4($318);
   $320 = $319&255;
   $321 = (((($1)) + 6|0) + ($$015$i)|0);
   store1($321,$320);
   $322 = (((($5) + (($$015$i*36)|0)|0)) + 32|0);
   $323 = load4($322);
   $324 = $323&255;
   $325 = (((($1)) + 9|0) + ($$015$i)|0);
   store1($325,$324);
   $326 = (($$015$i) + 1)|0;
   $327 = ($326|0)<($290|0);
   if ($327) {
    $$015$i = $326;
   } else {
    break;
   }
  }
  $328 = ((($2)) + 88|0);
  $329 = load1($328);
  $330 = ($329<<24>>24)==(0);
  if ($330) {
   STACKTOP = sp;return;
  }
  $331 = ((($2)) + 24|0);
  $332 = loadf($331);
  $333 = ((($2)) + 52|0);
  $334 = loadf($333);
  $335 = loadf($288);
  $336 = Math_fround($332 + $334);
  $337 = $335 > $336;
  $338 = $335 > Math_fround(1.1920929E-7);
  $or$cond110 = $337 & $338;
  if (!($or$cond110)) {
   $363 = loadf($$pre$phiZ2D);
   $364 = loadf($341);
   $365 = Math_fround($363 + $364);
   $366 = loadf($$pre$phi236Z2D);
   $367 = loadf($280);
   $368 = Math_fround($366 + $367);
   $369 = Math_fround($365 * Math_fround(0.5));
   $370 = Math_fround($368 * Math_fround(0.5));
   storef($$pre$phiZ2D,$369);
   storef($$pre$phi236Z2D,$370);
   storef($341,$369);
   storef($280,$370);
   storef($288,Math_fround(0.0));
   STACKTOP = sp;return;
  }
  $339 = Math_fround($335 - $336);
  storef($288,$339);
  $340 = loadf($341);
  $342 = loadf($$pre$phiZ2D);
  $343 = Math_fround($340 - $342);
  $344 = loadf($280);
  $345 = loadf($$pre$phi236Z2D);
  $346 = Math_fround($344 - $345);
  $347 = Math_fround($343 * $343);
  $348 = Math_fround($346 * $346);
  $349 = Math_fround($347 + $348);
  $350 = (Math_fround(Math_sqrt((Math_fround($349)))));
  $351 = $350 < Math_fround(1.1920929E-7);
  if ($351) {
   $$sroa$0144$0 = $343;$$sroa$7$0 = $346;
  } else {
   $352 = Math_fround(Math_fround(1.0) / $350);
   $353 = Math_fround($343 * $352);
   $354 = Math_fround($346 * $352);
   $$sroa$0144$0 = $353;$$sroa$7$0 = $354;
  }
  $355 = Math_fround($332 * $$sroa$0144$0);
  $356 = Math_fround($332 * $$sroa$7$0);
  $357 = Math_fround($355 + $342);
  storef($$pre$phiZ2D,$357);
  $358 = Math_fround($356 + $345);
  storef($$pre$phi236Z2D,$358);
  $359 = Math_fround($334 * $$sroa$0144$0);
  $360 = Math_fround($334 * $$sroa$7$0);
  $361 = Math_fround($340 - $359);
  storef($341,$361);
  $362 = Math_fround($344 - $360);
  storef($280,$362);
  STACKTOP = sp;return;
  break;
 }
 default: {
  ___assert_fail((5342|0),(4557|0),207,(4592|0));
  // unreachable;
 }
 }
}
function __ZN9b2Simplex9ReadCacheEPK14b2SimplexCachePK15b2DistanceProxyRK11b2TransformS5_S8_($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $$0$i = Math_fround(0), $$0154 = 0, $$pr = 0, $$pr151 = 0, $$sroa_idx109 = 0, $$sroa_idx118 = 0, $$sroa_idx127 = 0, $$sroa_idx135 = 0, $$sroa_idx144 = 0, $$sroa_idx68 = 0, $$sroa_idx75 = 0, $$sroa_idx83 = 0, $$sroa_idx90 = 0, $$sroa_idx99 = 0, $10 = 0, $100 = 0, $101 = Math_fround(0), $102 = Math_fround(0), $103 = 0, $104 = Math_fround(0);
 var $105 = Math_fround(0), $106 = Math_fround(0), $107 = Math_fround(0), $108 = Math_fround(0), $109 = Math_fround(0), $11 = 0, $110 = 0, $111 = Math_fround(0), $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0;
 var $123 = 0, $124 = 0, $125 = Math_fround(0), $126 = Math_fround(0), $127 = 0, $128 = 0, $129 = Math_fround(0), $13 = 0, $130 = Math_fround(0), $131 = 0, $132 = Math_fround(0), $133 = Math_fround(0), $134 = 0, $135 = Math_fround(0), $136 = Math_fround(0), $137 = Math_fround(0), $138 = Math_fround(0), $139 = Math_fround(0), $14 = 0, $140 = Math_fround(0);
 var $141 = Math_fround(0), $142 = Math_fround(0), $143 = 0, $144 = Math_fround(0), $145 = Math_fround(0), $146 = 0, $147 = Math_fround(0), $148 = Math_fround(0), $149 = 0, $15 = 0, $150 = Math_fround(0), $151 = Math_fround(0), $152 = Math_fround(0), $153 = Math_fround(0), $154 = Math_fround(0), $155 = Math_fround(0), $156 = Math_fround(0), $157 = Math_fround(0), $158 = 0, $159 = Math_fround(0);
 var $16 = 0, $160 = Math_fround(0), $161 = 0, $162 = Math_fround(0), $163 = Math_fround(0), $164 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = 0, $40 = 0, $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $50 = Math_fround(0);
 var $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = Math_fround(0), $55 = 0, $56 = Math_fround(0), $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0), $6 = 0, $60 = Math_fround(0), $61 = Math_fround(0), $62 = Math_fround(0), $63 = Math_fround(0), $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = Math_fround(0), $68 = 0, $69 = Math_fround(0);
 var $7 = 0, $70 = Math_fround(0), $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = Math_fround(0), $76 = 0, $77 = Math_fround(0), $78 = 0, $79 = Math_fround(0), $8 = 0, $80 = Math_fround(0), $81 = 0, $82 = Math_fround(0), $83 = 0, $84 = Math_fround(0), $85 = Math_fround(0), $86 = Math_fround(0), $87 = Math_fround(0);
 var $88 = Math_fround(0), $89 = Math_fround(0), $9 = 0, $90 = 0, $91 = Math_fround(0), $92 = 0, $93 = Math_fround(0), $94 = Math_fround(0), $95 = 0, $96 = Math_fround(0), $97 = 0, $98 = Math_fround(0), $99 = Math_fround(0), $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 4|0);
 $7 = load2($6);
 $8 = ($7&65535)<(4);
 if (!($8)) {
  ___assert_fail((4646|0),(4557|0),102,(4664|0));
  // unreachable;
 }
 $9 = $7&65535;
 $10 = ((($0)) + 108|0);
 store4($10,$9);
 $11 = ($7<<16>>16)==(0);
 L4: do {
  if ($11) {
   $$pr151 = $9;
  } else {
   $12 = ((($2)) + 20|0);
   $13 = ((($2)) + 16|0);
   $14 = ((($4)) + 20|0);
   $15 = ((($4)) + 16|0);
   $16 = ((($3)) + 12|0);
   $17 = ((($3)) + 8|0);
   $18 = ((($3)) + 4|0);
   $19 = ((($5)) + 12|0);
   $20 = ((($5)) + 8|0);
   $21 = ((($5)) + 4|0);
   $$0154 = 0;
   while(1) {
    $23 = (((($1)) + 6|0) + ($$0154)|0);
    $24 = load1($23);
    $25 = $24&255;
    $26 = (((($0) + (($$0154*36)|0)|0)) + 28|0);
    store4($26,$25);
    $27 = (((($1)) + 9|0) + ($$0154)|0);
    $28 = load1($27);
    $29 = $28&255;
    $30 = (((($0) + (($$0154*36)|0)|0)) + 32|0);
    store4($30,$29);
    $31 = load4($12);
    $32 = ($31|0)>($25|0);
    if (!($32)) {
     label = 7;
     break;
    }
    $33 = load4($13);
    $34 = load4($14);
    $35 = ($34|0)>($29|0);
    if (!($35)) {
     label = 9;
     break;
    }
    $$sroa_idx144 = (((($33) + ($25<<3)|0)) + 4|0);
    $36 = loadf($$sroa_idx144);
    $37 = (($33) + ($25<<3)|0);
    $38 = loadf($37);
    $39 = load4($15);
    $40 = (($39) + ($29<<3)|0);
    $41 = loadf($40);
    $$sroa_idx135 = (((($39) + ($29<<3)|0)) + 4|0);
    $42 = loadf($$sroa_idx135);
    $43 = loadf($16);
    $44 = Math_fround($38 * $43);
    $45 = loadf($17);
    $46 = Math_fround($36 * $45);
    $47 = Math_fround($44 - $46);
    $48 = loadf($3);
    $49 = Math_fround($48 + $47);
    $50 = Math_fround($38 * $45);
    $51 = Math_fround($36 * $43);
    $52 = Math_fround($51 + $50);
    $53 = loadf($18);
    $54 = Math_fround($52 + $53);
    $55 = (($0) + (($$0154*36)|0)|0);
    storef($55,$49);
    $$sroa_idx127 = (((($0) + (($$0154*36)|0)|0)) + 4|0);
    storef($$sroa_idx127,$54);
    $56 = loadf($19);
    $57 = Math_fround($41 * $56);
    $58 = loadf($20);
    $59 = Math_fround($42 * $58);
    $60 = Math_fround($57 - $59);
    $61 = loadf($5);
    $62 = Math_fround($61 + $60);
    $63 = Math_fround($41 * $58);
    $64 = Math_fround($42 * $56);
    $65 = Math_fround($64 + $63);
    $66 = loadf($21);
    $67 = Math_fround($65 + $66);
    $68 = (((($0) + (($$0154*36)|0)|0)) + 8|0);
    storef($68,$62);
    $$sroa_idx118 = (((($0) + (($$0154*36)|0)|0)) + 12|0);
    storef($$sroa_idx118,$67);
    $69 = Math_fround($62 - $49);
    $70 = Math_fround($67 - $54);
    $71 = (((($0) + (($$0154*36)|0)|0)) + 16|0);
    storef($71,$69);
    $$sroa_idx109 = (((($0) + (($$0154*36)|0)|0)) + 20|0);
    storef($$sroa_idx109,$70);
    $72 = (((($0) + (($$0154*36)|0)|0)) + 24|0);
    storef($72,Math_fround(0.0));
    $73 = (($$0154) + 1)|0;
    $$pr = load4($10);
    $74 = ($73|0)<($$pr|0);
    if ($74) {
     $$0154 = $73;
    } else {
     $$pr151 = $$pr;
     break L4;
    }
   }
   if ((label|0) == 7) {
    ___assert_fail((5271|0),(5301|0),103,(5332|0));
    // unreachable;
   }
   else if ((label|0) == 9) {
    ___assert_fail((5271|0),(5301|0),103,(5332|0));
    // unreachable;
   }
  }
 } while(0);
 $22 = ($$pr151|0)>(1);
 if ($22) {
  $75 = loadf($1);
  switch ($$pr151|0) {
  case 2:  {
   $76 = ((($0)) + 16|0);
   $77 = loadf($76);
   $78 = ((($0)) + 52|0);
   $79 = loadf($78);
   $80 = Math_fround($77 - $79);
   $81 = ((($0)) + 20|0);
   $82 = loadf($81);
   $83 = ((($0)) + 56|0);
   $84 = loadf($83);
   $85 = Math_fround($82 - $84);
   $86 = Math_fround($80 * $80);
   $87 = Math_fround($85 * $85);
   $88 = Math_fround($86 + $87);
   $89 = (Math_fround(Math_sqrt((Math_fround($88)))));
   $$0$i = $89;
   break;
  }
  case 3:  {
   $90 = ((($0)) + 52|0);
   $91 = loadf($90);
   $92 = ((($0)) + 16|0);
   $93 = loadf($92);
   $94 = Math_fround($91 - $93);
   $95 = ((($0)) + 56|0);
   $96 = loadf($95);
   $97 = ((($0)) + 20|0);
   $98 = loadf($97);
   $99 = Math_fround($96 - $98);
   $100 = ((($0)) + 88|0);
   $101 = loadf($100);
   $102 = Math_fround($101 - $93);
   $103 = ((($0)) + 92|0);
   $104 = loadf($103);
   $105 = Math_fround($104 - $98);
   $106 = Math_fround($94 * $105);
   $107 = Math_fround($99 * $102);
   $108 = Math_fround($106 - $107);
   $$0$i = $108;
   break;
  }
  default: {
   ___assert_fail((5342|0),(4557|0),259,(4636|0));
   // unreachable;
  }
  }
  $109 = Math_fround($75 * Math_fround(0.5));
  $110 = $$0$i < $109;
  if (!($110)) {
   $111 = Math_fround($75 * Math_fround(2.0));
   $112 = $111 < $$0$i;
   $113 = $$0$i < Math_fround(1.1920929E-7);
   $or$cond = $112 | $113;
   if (!($or$cond)) {
    return;
   }
  }
  store4($10,0);
 } else {
  $114 = ($$pr151|0)==(0);
  if (!($114)) {
   return;
  }
 }
 $115 = ((($0)) + 28|0);
 store4($115,0);
 $116 = ((($0)) + 32|0);
 store4($116,0);
 $117 = ((($2)) + 20|0);
 $118 = load4($117);
 $119 = ($118|0)>(0);
 if (!($119)) {
  ___assert_fail((5271|0),(5301|0),103,(5332|0));
  // unreachable;
 }
 $120 = ((($2)) + 16|0);
 $121 = load4($120);
 $122 = ((($4)) + 20|0);
 $123 = load4($122);
 $124 = ($123|0)>(0);
 if (!($124)) {
  ___assert_fail((5271|0),(5301|0),103,(5332|0));
  // unreachable;
 }
 $$sroa_idx99 = ((($121)) + 4|0);
 $125 = loadf($$sroa_idx99);
 $126 = loadf($121);
 $127 = ((($4)) + 16|0);
 $128 = load4($127);
 $129 = loadf($128);
 $$sroa_idx90 = ((($128)) + 4|0);
 $130 = loadf($$sroa_idx90);
 $131 = ((($3)) + 12|0);
 $132 = loadf($131);
 $133 = Math_fround($126 * $132);
 $134 = ((($3)) + 8|0);
 $135 = loadf($134);
 $136 = Math_fround($125 * $135);
 $137 = Math_fround($133 - $136);
 $138 = loadf($3);
 $139 = Math_fround($138 + $137);
 $140 = Math_fround($126 * $135);
 $141 = Math_fround($125 * $132);
 $142 = Math_fround($141 + $140);
 $143 = ((($3)) + 4|0);
 $144 = loadf($143);
 $145 = Math_fround($142 + $144);
 storef($0,$139);
 $$sroa_idx83 = ((($0)) + 4|0);
 storef($$sroa_idx83,$145);
 $146 = ((($5)) + 12|0);
 $147 = loadf($146);
 $148 = Math_fround($129 * $147);
 $149 = ((($5)) + 8|0);
 $150 = loadf($149);
 $151 = Math_fround($130 * $150);
 $152 = Math_fround($148 - $151);
 $153 = loadf($5);
 $154 = Math_fround($153 + $152);
 $155 = Math_fround($129 * $150);
 $156 = Math_fround($130 * $147);
 $157 = Math_fround($156 + $155);
 $158 = ((($5)) + 4|0);
 $159 = loadf($158);
 $160 = Math_fround($157 + $159);
 $161 = ((($0)) + 8|0);
 storef($161,$154);
 $$sroa_idx75 = ((($0)) + 12|0);
 storef($$sroa_idx75,$160);
 $162 = Math_fround($154 - $139);
 $163 = Math_fround($160 - $145);
 $164 = ((($0)) + 16|0);
 storef($164,$162);
 $$sroa_idx68 = ((($0)) + 20|0);
 storef($$sroa_idx68,$163);
 store4($10,1);
 return;
}
function __ZN13b2DynamicTreeC2Ev($0) {
 $0 = $0|0;
 var $$06 = 0, $$lcssa = 0, $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($0,-1);
 $1 = ((($0)) + 12|0);
 store4($1,16);
 $2 = ((($0)) + 8|0);
 store4($2,0);
 $3 = (__Z7b2Alloci(576)|0);
 $4 = ((($0)) + 4|0);
 store4($4,$3);
 $5 = load4($1);
 $6 = ($5*36)|0;
 _memset(($3|0),0,($6|0))|0;
 $7 = load4($1);
 $8 = ($7|0)>(1);
 if ($8) {
  $10 = load4($4);
  $$06 = 0;
  while(1) {
   $19 = (($$06) + 1)|0;
   $20 = (((($10) + (($$06*36)|0)|0)) + 20|0);
   store4($20,$19);
   $21 = (((($10) + (($$06*36)|0)|0)) + 32|0);
   store4($21,-1);
   $22 = load4($1);
   $23 = (($22) + -1)|0;
   $24 = ($19|0)<($23|0);
   if ($24) {
    $$06 = $19;
   } else {
    $$lcssa = $23;$12 = $10;
    break;
   }
  }
 } else {
  $9 = (($7) + -1)|0;
  $$pre = load4($4);
  $$lcssa = $9;$12 = $$pre;
 }
 $11 = (((($12) + (($$lcssa*36)|0)|0)) + 20|0);
 store4($11,-1);
 $13 = load4($1);
 $14 = (($13) + -1)|0;
 $15 = (((($12) + (($14*36)|0)|0)) + 32|0);
 store4($15,-1);
 $16 = ((($0)) + 16|0);
 store4($16,0);
 $17 = ((($0)) + 20|0);
 store4($17,0);
 $18 = ((($0)) + 24|0);
 store4($18,0);
 return;
}
function __ZN13b2DynamicTreeD2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 4|0);
 $2 = load4($1);
 __Z6b2FreePv($2);
 return;
}
function __ZN13b2DynamicTree12AllocateNodeEv($0) {
 $0 = $0|0;
 var $$019 = 0, $$lcssa = 0, $$phi$trans$insert = 0, $$pre$phi24Z2D = 0, $$pre22 = 0, $$pre23 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 16|0);
 $2 = load4($1);
 $3 = ($2|0)==(-1);
 if ($3) {
  $4 = ((($0)) + 8|0);
  $5 = load4($4);
  $6 = ((($0)) + 12|0);
  $7 = load4($6);
  $8 = ($5|0)==($7|0);
  if (!($8)) {
   ___assert_fail((4674|0),(4704|0),61,(4738|0));
   // unreachable;
  }
  $9 = ((($0)) + 4|0);
  $10 = load4($9);
  $11 = $5 << 1;
  store4($6,$11);
  $12 = ($5*72)|0;
  $13 = (__Z7b2Alloci($12)|0);
  store4($9,$13);
  $14 = load4($4);
  $15 = ($14*36)|0;
  _memcpy(($13|0),($10|0),($15|0))|0;
  __Z6b2FreePv($10);
  $16 = load4($4);
  $17 = load4($6);
  $18 = (($17) + -1)|0;
  $19 = ($16|0)<($18|0);
  $20 = load4($9);
  if ($19) {
   $$019 = $16;
   while(1) {
    $26 = (($$019) + 1)|0;
    $27 = (((($20) + (($$019*36)|0)|0)) + 20|0);
    store4($27,$26);
    $28 = (((($20) + (($$019*36)|0)|0)) + 32|0);
    store4($28,-1);
    $29 = load4($6);
    $30 = (($29) + -1)|0;
    $31 = ($26|0)<($30|0);
    if ($31) {
     $$019 = $26;
    } else {
     $$lcssa = $30;
     break;
    }
   }
  } else {
   $$lcssa = $18;
  }
  $21 = (((($20) + (($$lcssa*36)|0)|0)) + 20|0);
  store4($21,-1);
  $22 = load4($6);
  $23 = (($22) + -1)|0;
  $24 = (((($20) + (($23*36)|0)|0)) + 32|0);
  store4($24,-1);
  $25 = load4($4);
  store4($1,$25);
  $$pre$phi24Z2D = $4;$33 = $20;$34 = $25;
 } else {
  $$phi$trans$insert = ((($0)) + 4|0);
  $$pre22 = load4($$phi$trans$insert);
  $$pre23 = ((($0)) + 8|0);
  $$pre$phi24Z2D = $$pre23;$33 = $$pre22;$34 = $2;
 }
 $32 = (((($33) + (($34*36)|0)|0)) + 20|0);
 $35 = load4($32);
 store4($1,$35);
 store4($32,-1);
 $36 = (((($33) + (($34*36)|0)|0)) + 24|0);
 store4($36,-1);
 $37 = (((($33) + (($34*36)|0)|0)) + 28|0);
 store4($37,-1);
 $38 = (((($33) + (($34*36)|0)|0)) + 32|0);
 store4($38,0);
 $39 = (((($33) + (($34*36)|0)|0)) + 16|0);
 store4($39,0);
 $40 = load4($$pre$phi24Z2D);
 $41 = (($40) + 1)|0;
 store4($$pre$phi24Z2D,$41);
 return ($34|0);
}
function __ZN13b2DynamicTree11CreateProxyERK6b2AABBPv($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$sroa_idx = 0, $$sroa_idx18 = 0, $10 = Math_fround(0), $11 = 0, $12 = 0, $13 = 0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = 0, $17 = Math_fround(0), $18 = Math_fround(0), $19 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = Math_fround(0), $7 = Math_fround(0);
 var $8 = 0, $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 $3 = (__ZN13b2DynamicTree12AllocateNodeEv($0)|0);
 $4 = ((($0)) + 4|0);
 $5 = load4($4);
 $6 = loadf($1);
 $7 = Math_fround($6 + Math_fround(-0.100000001));
 $8 = ((($1)) + 4|0);
 $9 = loadf($8);
 $10 = Math_fround($9 + Math_fround(-0.100000001));
 $11 = (($5) + (($3*36)|0)|0);
 storef($11,$7);
 $$sroa_idx18 = (((($5) + (($3*36)|0)|0)) + 4|0);
 storef($$sroa_idx18,$10);
 $12 = load4($4);
 $13 = ((($1)) + 8|0);
 $14 = loadf($13);
 $15 = Math_fround($14 + Math_fround(0.100000001));
 $16 = ((($1)) + 12|0);
 $17 = loadf($16);
 $18 = Math_fround($17 + Math_fround(0.100000001));
 $19 = (((($12) + (($3*36)|0)|0)) + 8|0);
 storef($19,$15);
 $$sroa_idx = (((($12) + (($3*36)|0)|0)) + 12|0);
 storef($$sroa_idx,$18);
 $20 = load4($4);
 $21 = (((($20) + (($3*36)|0)|0)) + 16|0);
 store4($21,$2);
 $22 = (((($20) + (($3*36)|0)|0)) + 32|0);
 store4($22,0);
 __ZN13b2DynamicTree10InsertLeafEi($0,$3);
 return ($3|0);
}
function __ZN13b2DynamicTree10InsertLeafEi($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$ = 0, $$0$lcssa = 0, $$0115 = Math_fround(0), $$0116 = Math_fround(0), $$0197 = 0, $$4 = 0, $$4195 = 0, $$4195$pre = 0, $$4196 = 0, $$pn = Math_fround(0), $$pn118 = Math_fround(0), $$sroa$0167$0$$sroa_idx = 0, $$sroa$0167$0$copyload = Math_fround(0), $$sroa$15$0$$sroa_idx182 = 0, $$sroa$15$0$copyload = Math_fround(0), $$sroa$21$0$$sroa_idx189 = 0, $$sroa$21$0$copyload = Math_fround(0), $$sroa$9$0$$sroa_idx175 = 0, $$sroa$9$0$copyload = Math_fround(0), $$sroa_idx14$i = 0;
 var $$sroa_idx14$i119 = 0, $$sroa_idx8$i = 0, $$sroa_idx8$i120 = 0, $10 = 0, $100 = Math_fround(0), $101 = Math_fround(0), $102 = Math_fround(0), $103 = Math_fround(0), $104 = Math_fround(0), $105 = Math_fround(0), $106 = Math_fround(0), $107 = Math_fround(0), $108 = Math_fround(0), $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0;
 var $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = Math_fround(0), $123 = 0, $124 = Math_fround(0), $125 = 0, $126 = Math_fround(0), $127 = 0, $128 = Math_fround(0), $129 = 0, $13 = 0, $130 = 0, $131 = Math_fround(0), $132 = 0;
 var $133 = Math_fround(0), $134 = 0, $135 = Math_fround(0), $136 = 0, $137 = Math_fround(0), $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0;
 var $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0;
 var $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = Math_fround(0), $176 = 0, $177 = Math_fround(0), $178 = 0, $179 = Math_fround(0), $18 = Math_fround(0), $180 = 0, $181 = Math_fround(0), $182 = 0, $183 = Math_fround(0), $184 = 0, $185 = Math_fround(0), $186 = 0, $187 = 0;
 var $188 = Math_fround(0), $189 = 0, $19 = 0, $190 = Math_fround(0), $191 = 0, $192 = Math_fround(0), $193 = 0, $194 = Math_fround(0), $195 = 0, $196 = Math_fround(0), $197 = 0, $198 = Math_fround(0), $199 = 0, $2 = 0, $20 = Math_fround(0), $200 = 0, $201 = 0, $202 = 0, $21 = Math_fround(0), $22 = 0;
 var $23 = Math_fround(0), $24 = 0, $25 = Math_fround(0), $26 = Math_fround(0), $27 = Math_fround(0), $28 = Math_fround(0), $29 = 0, $3 = 0, $30 = Math_fround(0), $31 = 0, $32 = Math_fround(0), $33 = 0, $34 = Math_fround(0), $35 = 0, $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $4 = 0, $40 = Math_fround(0);
 var $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0), $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = Math_fround(0), $5 = 0, $50 = 0, $51 = Math_fround(0), $52 = 0, $53 = Math_fround(0), $54 = 0, $55 = Math_fround(0), $56 = 0, $57 = Math_fround(0), $58 = 0, $59 = Math_fround(0);
 var $6 = 0, $60 = 0, $61 = Math_fround(0), $62 = 0, $63 = Math_fround(0), $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = Math_fround(0), $76 = Math_fround(0), $77 = 0;
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = Math_fround(0), $82 = 0, $83 = Math_fround(0), $84 = 0, $85 = Math_fround(0), $86 = 0, $87 = Math_fround(0), $88 = 0, $89 = Math_fround(0), $9 = 0, $90 = 0, $91 = Math_fround(0), $92 = 0, $93 = Math_fround(0), $94 = 0, $95 = Math_fround(0);
 var $96 = Math_fround(0), $97 = Math_fround(0), $98 = Math_fround(0), $99 = Math_fround(0), $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 24|0);
 $3 = load4($2);
 $4 = (($3) + 1)|0;
 store4($2,$4);
 $5 = load4($0);
 $6 = ($5|0)==(-1);
 if ($6) {
  store4($0,$1);
  $7 = ((($0)) + 4|0);
  $8 = load4($7);
  $9 = (((($8) + (($1*36)|0)|0)) + 20|0);
  store4($9,-1);
  return;
 }
 $10 = ((($0)) + 4|0);
 $11 = load4($10);
 $$sroa$0167$0$$sroa_idx = (($11) + (($1*36)|0)|0);
 $$sroa$0167$0$copyload = loadf($$sroa$0167$0$$sroa_idx);
 $$sroa$9$0$$sroa_idx175 = (((($11) + (($1*36)|0)|0)) + 4|0);
 $$sroa$9$0$copyload = loadf($$sroa$9$0$$sroa_idx175);
 $$sroa$15$0$$sroa_idx182 = (((($11) + (($1*36)|0)|0)) + 8|0);
 $$sroa$15$0$copyload = loadf($$sroa$15$0$$sroa_idx182);
 $$sroa$21$0$$sroa_idx189 = (((($11) + (($1*36)|0)|0)) + 12|0);
 $$sroa$21$0$copyload = loadf($$sroa$21$0$$sroa_idx189);
 $12 = (((($11) + (($5*36)|0)|0)) + 24|0);
 $13 = load4($12);
 $14 = ($13|0)==(-1);
 L5: do {
  if ($14) {
   $$0$lcssa = $5;
  } else {
   $$0197 = $5;$45 = $13;
   while(1) {
    $15 = (((($11) + (($$0197*36)|0)|0)) + 28|0);
    $16 = load4($15);
    $17 = (((($11) + (($$0197*36)|0)|0)) + 8|0);
    $18 = loadf($17);
    $19 = (($11) + (($$0197*36)|0)|0);
    $20 = loadf($19);
    $21 = Math_fround($18 - $20);
    $22 = (((($11) + (($$0197*36)|0)|0)) + 12|0);
    $23 = loadf($22);
    $24 = (((($11) + (($$0197*36)|0)|0)) + 4|0);
    $25 = loadf($24);
    $26 = Math_fround($23 - $25);
    $27 = Math_fround($21 + $26);
    $28 = Math_fround($27 * Math_fround(2.0));
    $29 = $20 < $$sroa$0167$0$copyload;
    $30 = $29 ? $20 : $$sroa$0167$0$copyload;
    $31 = $25 < $$sroa$9$0$copyload;
    $32 = $31 ? $25 : $$sroa$9$0$copyload;
    $33 = $18 > $$sroa$15$0$copyload;
    $34 = $33 ? $18 : $$sroa$15$0$copyload;
    $35 = $23 > $$sroa$21$0$copyload;
    $36 = $35 ? $23 : $$sroa$21$0$copyload;
    $37 = Math_fround($34 - $30);
    $38 = Math_fround($36 - $32);
    $39 = Math_fround($37 + $38);
    $40 = Math_fround($39 * Math_fround(2.0));
    $41 = Math_fround($40 * Math_fround(2.0));
    $42 = Math_fround($40 - $28);
    $43 = Math_fround($42 * Math_fround(2.0));
    $44 = (((($11) + (($45*36)|0)|0)) + 24|0);
    $46 = load4($44);
    $47 = ($46|0)==(-1);
    $48 = (($11) + (($45*36)|0)|0);
    $49 = loadf($48);
    $50 = $$sroa$0167$0$copyload < $49;
    $51 = $50 ? $$sroa$0167$0$copyload : $49;
    $52 = (((($11) + (($45*36)|0)|0)) + 4|0);
    $53 = loadf($52);
    $54 = $$sroa$9$0$copyload < $53;
    $55 = $54 ? $$sroa$9$0$copyload : $53;
    $56 = (((($11) + (($45*36)|0)|0)) + 8|0);
    $57 = loadf($56);
    $58 = $$sroa$15$0$copyload > $57;
    $59 = $58 ? $$sroa$15$0$copyload : $57;
    $60 = (((($11) + (($45*36)|0)|0)) + 12|0);
    $61 = loadf($60);
    $62 = $$sroa$21$0$copyload > $61;
    $63 = $62 ? $$sroa$21$0$copyload : $61;
    if ($47) {
     $64 = Math_fround($59 - $51);
     $65 = Math_fround($63 - $55);
     $66 = Math_fround($64 + $65);
     $67 = Math_fround($66 * Math_fround(2.0));
     $$pn = $67;
    } else {
     $68 = Math_fround($57 - $49);
     $69 = Math_fround($61 - $53);
     $70 = Math_fround($68 + $69);
     $71 = Math_fround($70 * Math_fround(2.0));
     $72 = Math_fround($59 - $51);
     $73 = Math_fround($63 - $55);
     $74 = Math_fround($72 + $73);
     $75 = Math_fround($74 * Math_fround(2.0));
     $76 = Math_fround($75 - $71);
     $$pn = $76;
    }
    $$0115 = Math_fround($43 + $$pn);
    $77 = (((($11) + (($16*36)|0)|0)) + 24|0);
    $78 = load4($77);
    $79 = ($78|0)==(-1);
    $80 = (($11) + (($16*36)|0)|0);
    $81 = loadf($80);
    $82 = $$sroa$0167$0$copyload < $81;
    $83 = $82 ? $$sroa$0167$0$copyload : $81;
    $84 = (((($11) + (($16*36)|0)|0)) + 4|0);
    $85 = loadf($84);
    $86 = $$sroa$9$0$copyload < $85;
    $87 = $86 ? $$sroa$9$0$copyload : $85;
    $88 = (((($11) + (($16*36)|0)|0)) + 8|0);
    $89 = loadf($88);
    $90 = $$sroa$15$0$copyload > $89;
    $91 = $90 ? $$sroa$15$0$copyload : $89;
    $92 = (((($11) + (($16*36)|0)|0)) + 12|0);
    $93 = loadf($92);
    $94 = $$sroa$21$0$copyload > $93;
    $95 = $94 ? $$sroa$21$0$copyload : $93;
    if ($79) {
     $96 = Math_fround($91 - $83);
     $97 = Math_fround($95 - $87);
     $98 = Math_fround($96 + $97);
     $99 = Math_fround($98 * Math_fround(2.0));
     $$pn118 = $99;
    } else {
     $100 = Math_fround($89 - $81);
     $101 = Math_fround($93 - $85);
     $102 = Math_fround($100 + $101);
     $103 = Math_fround($102 * Math_fround(2.0));
     $104 = Math_fround($91 - $83);
     $105 = Math_fround($95 - $87);
     $106 = Math_fround($104 + $105);
     $107 = Math_fround($106 * Math_fround(2.0));
     $108 = Math_fround($107 - $103);
     $$pn118 = $108;
    }
    $$0116 = Math_fround($43 + $$pn118);
    $109 = $41 < $$0115;
    $110 = $41 < $$0116;
    $or$cond = $109 & $110;
    if ($or$cond) {
     $$0$lcssa = $$0197;
     break L5;
    }
    $111 = $$0115 < $$0116;
    $$ = $111 ? $45 : $16;
    $112 = (((($11) + (($$*36)|0)|0)) + 24|0);
    $113 = load4($112);
    $114 = ($113|0)==(-1);
    if ($114) {
     $$0$lcssa = $$;
     break;
    } else {
     $$0197 = $$;$45 = $113;
    }
   }
  }
 } while(0);
 $115 = (((($11) + (($$0$lcssa*36)|0)|0)) + 20|0);
 $116 = load4($115);
 $117 = (__ZN13b2DynamicTree12AllocateNodeEv($0)|0);
 $118 = load4($10);
 $119 = (((($118) + (($117*36)|0)|0)) + 20|0);
 store4($119,$116);
 $120 = (((($118) + (($117*36)|0)|0)) + 16|0);
 store4($120,0);
 $121 = (($118) + (($$0$lcssa*36)|0)|0);
 $122 = loadf($121);
 $123 = $$sroa$0167$0$copyload < $122;
 $124 = $123 ? $$sroa$0167$0$copyload : $122;
 $125 = (((($118) + (($$0$lcssa*36)|0)|0)) + 4|0);
 $126 = loadf($125);
 $127 = $$sroa$9$0$copyload < $126;
 $128 = $127 ? $$sroa$9$0$copyload : $126;
 $129 = (($118) + (($117*36)|0)|0);
 storef($129,$124);
 $$sroa_idx14$i119 = (((($118) + (($117*36)|0)|0)) + 4|0);
 storef($$sroa_idx14$i119,$128);
 $130 = (((($118) + (($$0$lcssa*36)|0)|0)) + 8|0);
 $131 = loadf($130);
 $132 = $$sroa$15$0$copyload > $131;
 $133 = $132 ? $$sroa$15$0$copyload : $131;
 $134 = (((($118) + (($$0$lcssa*36)|0)|0)) + 12|0);
 $135 = loadf($134);
 $136 = $$sroa$21$0$copyload > $135;
 $137 = $136 ? $$sroa$21$0$copyload : $135;
 $138 = (((($118) + (($117*36)|0)|0)) + 8|0);
 storef($138,$133);
 $$sroa_idx8$i120 = (((($118) + (($117*36)|0)|0)) + 12|0);
 storef($$sroa_idx8$i120,$137);
 $139 = load4($10);
 $140 = (((($139) + (($$0$lcssa*36)|0)|0)) + 32|0);
 $141 = load4($140);
 $142 = (($141) + 1)|0;
 $143 = (((($139) + (($117*36)|0)|0)) + 32|0);
 store4($143,$142);
 $144 = ($116|0)==(-1);
 if ($144) {
  $153 = (((($139) + (($117*36)|0)|0)) + 24|0);
  store4($153,$$0$lcssa);
  $154 = (((($139) + (($117*36)|0)|0)) + 28|0);
  store4($154,$1);
  $155 = (((($139) + (($$0$lcssa*36)|0)|0)) + 20|0);
  store4($155,$117);
  $156 = (((($139) + (($1*36)|0)|0)) + 20|0);
  store4($156,$117);
  store4($0,$117);
  $$4195$pre = load4($156);
  $$4195 = $$4195$pre;
 } else {
  $145 = (((($139) + (($116*36)|0)|0)) + 24|0);
  $146 = load4($145);
  $147 = ($146|0)==($$0$lcssa|0);
  if ($147) {
   store4($145,$117);
  } else {
   $148 = (((($139) + (($116*36)|0)|0)) + 28|0);
   store4($148,$117);
  }
  $149 = (((($139) + (($117*36)|0)|0)) + 24|0);
  store4($149,$$0$lcssa);
  $150 = (((($139) + (($117*36)|0)|0)) + 28|0);
  store4($150,$1);
  $151 = (((($139) + (($$0$lcssa*36)|0)|0)) + 20|0);
  store4($151,$117);
  $152 = (((($139) + (($1*36)|0)|0)) + 20|0);
  store4($152,$117);
  $$4195 = $117;
 }
 $157 = ($$4195|0)==(-1);
 if ($157) {
  return;
 } else {
  $$4196 = $$4195;
 }
 while(1) {
  $158 = (__ZN13b2DynamicTree7BalanceEi($0,$$4196)|0);
  $159 = load4($10);
  $160 = (((($159) + (($158*36)|0)|0)) + 24|0);
  $161 = load4($160);
  $162 = (((($159) + (($158*36)|0)|0)) + 28|0);
  $163 = load4($162);
  $164 = ($161|0)==(-1);
  if ($164) {
   label = 20;
   break;
  }
  $165 = ($163|0)==(-1);
  if ($165) {
   label = 22;
   break;
  }
  $166 = (((($159) + (($161*36)|0)|0)) + 32|0);
  $167 = load4($166);
  $168 = (((($159) + (($163*36)|0)|0)) + 32|0);
  $169 = load4($168);
  $170 = ($167|0)>($169|0);
  $171 = $170 ? $167 : $169;
  $172 = (($171) + 1)|0;
  $173 = (((($159) + (($158*36)|0)|0)) + 32|0);
  store4($173,$172);
  $174 = (($159) + (($161*36)|0)|0);
  $175 = loadf($174);
  $176 = (($159) + (($163*36)|0)|0);
  $177 = loadf($176);
  $178 = $175 < $177;
  $179 = $178 ? $175 : $177;
  $180 = (((($159) + (($161*36)|0)|0)) + 4|0);
  $181 = loadf($180);
  $182 = (((($159) + (($163*36)|0)|0)) + 4|0);
  $183 = loadf($182);
  $184 = $181 < $183;
  $185 = $184 ? $181 : $183;
  $186 = (($159) + (($158*36)|0)|0);
  storef($186,$179);
  $$sroa_idx14$i = (((($159) + (($158*36)|0)|0)) + 4|0);
  storef($$sroa_idx14$i,$185);
  $187 = (((($159) + (($161*36)|0)|0)) + 8|0);
  $188 = loadf($187);
  $189 = (((($159) + (($163*36)|0)|0)) + 8|0);
  $190 = loadf($189);
  $191 = $188 > $190;
  $192 = $191 ? $188 : $190;
  $193 = (((($159) + (($161*36)|0)|0)) + 12|0);
  $194 = loadf($193);
  $195 = (((($159) + (($163*36)|0)|0)) + 12|0);
  $196 = loadf($195);
  $197 = $194 > $196;
  $198 = $197 ? $194 : $196;
  $199 = (((($159) + (($158*36)|0)|0)) + 8|0);
  storef($199,$192);
  $$sroa_idx8$i = (((($159) + (($158*36)|0)|0)) + 12|0);
  storef($$sroa_idx8$i,$198);
  $200 = load4($10);
  $201 = (((($200) + (($158*36)|0)|0)) + 20|0);
  $$4 = load4($201);
  $202 = ($$4|0)==(-1);
  if ($202) {
   label = 24;
   break;
  } else {
   $$4196 = $$4;
  }
 }
 if ((label|0) == 20) {
  ___assert_fail((4815|0),(4704|0),307,(4830|0));
  // unreachable;
 }
 else if ((label|0) == 22) {
  ___assert_fail((4841|0),(4704|0),308,(4830|0));
  // unreachable;
 }
 else if ((label|0) == 24) {
  return;
 }
}
function __ZN13b2DynamicTree7BalanceEi($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$1 = 0, $$sroa_idx14$i = 0, $$sroa_idx14$i177 = 0, $$sroa_idx14$i179 = 0, $$sroa_idx14$i181 = 0, $$sroa_idx14$i183 = 0, $$sroa_idx14$i185 = 0, $$sroa_idx14$i187 = 0, $$sroa_idx14$i189 = 0, $$sroa_idx8$i = 0, $$sroa_idx8$i178 = 0, $$sroa_idx8$i180 = 0, $$sroa_idx8$i182 = 0, $$sroa_idx8$i184 = 0, $$sroa_idx8$i186 = 0, $$sroa_idx8$i188 = 0, $$sroa_idx8$i190 = 0, $10 = 0, $100 = 0, $101 = 0;
 var $102 = 0, $103 = 0, $104 = 0, $105 = Math_fround(0), $106 = Math_fround(0), $107 = 0, $108 = Math_fround(0), $109 = 0, $11 = 0, $110 = Math_fround(0), $111 = 0, $112 = Math_fround(0), $113 = 0, $114 = Math_fround(0), $115 = 0, $116 = Math_fround(0), $117 = 0, $118 = Math_fround(0), $119 = 0, $12 = 0;
 var $120 = Math_fround(0), $121 = 0, $122 = Math_fround(0), $123 = 0, $124 = Math_fround(0), $125 = 0, $126 = Math_fround(0), $127 = 0, $128 = Math_fround(0), $129 = 0, $13 = 0, $130 = Math_fround(0), $131 = 0, $132 = Math_fround(0), $133 = 0, $134 = Math_fround(0), $135 = Math_fround(0), $136 = 0, $137 = Math_fround(0), $138 = 0;
 var $139 = Math_fround(0), $14 = 0, $140 = Math_fround(0), $141 = 0, $142 = Math_fround(0), $143 = 0, $144 = Math_fround(0), $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0;
 var $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0;
 var $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = Math_fround(0), $183 = Math_fround(0), $184 = 0, $185 = Math_fround(0), $186 = 0, $187 = Math_fround(0), $188 = 0, $189 = Math_fround(0), $19 = 0, $190 = 0, $191 = Math_fround(0), $192 = 0;
 var $193 = Math_fround(0), $194 = 0, $195 = Math_fround(0), $196 = 0, $197 = Math_fround(0), $198 = 0, $199 = Math_fround(0), $2 = 0, $20 = 0, $200 = 0, $201 = Math_fround(0), $202 = 0, $203 = Math_fround(0), $204 = 0, $205 = Math_fround(0), $206 = 0, $207 = Math_fround(0), $208 = 0, $209 = Math_fround(0), $21 = 0;
 var $210 = 0, $211 = Math_fround(0), $212 = Math_fround(0), $213 = 0, $214 = Math_fround(0), $215 = 0, $216 = Math_fround(0), $217 = Math_fround(0), $218 = 0, $219 = Math_fround(0), $22 = 0, $220 = 0, $221 = Math_fround(0), $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0;
 var $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = Math_fround(0), $233 = Math_fround(0), $234 = 0, $235 = Math_fround(0), $236 = 0, $237 = Math_fround(0), $238 = 0, $239 = Math_fround(0), $24 = 0, $240 = 0, $241 = Math_fround(0), $242 = 0, $243 = Math_fround(0), $244 = 0, $245 = Math_fround(0), $246 = 0;
 var $247 = Math_fround(0), $248 = 0, $249 = Math_fround(0), $25 = 0, $250 = 0, $251 = Math_fround(0), $252 = 0, $253 = Math_fround(0), $254 = 0, $255 = Math_fround(0), $256 = 0, $257 = Math_fround(0), $258 = 0, $259 = Math_fround(0), $26 = 0, $260 = 0, $261 = Math_fround(0), $262 = Math_fround(0), $263 = 0, $264 = Math_fround(0);
 var $265 = 0, $266 = Math_fround(0), $267 = Math_fround(0), $268 = 0, $269 = Math_fround(0), $27 = 0, $270 = 0, $271 = Math_fround(0), $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = Math_fround(0), $56 = Math_fround(0), $57 = 0, $58 = Math_fround(0), $59 = 0, $6 = 0, $60 = Math_fround(0), $61 = 0, $62 = Math_fround(0), $63 = 0, $64 = Math_fround(0), $65 = 0, $66 = Math_fround(0);
 var $67 = 0, $68 = Math_fround(0), $69 = 0, $7 = 0, $70 = Math_fround(0), $71 = 0, $72 = Math_fround(0), $73 = 0, $74 = Math_fround(0), $75 = 0, $76 = Math_fround(0), $77 = 0, $78 = Math_fround(0), $79 = 0, $8 = 0, $80 = Math_fround(0), $81 = 0, $82 = Math_fround(0), $83 = 0, $84 = Math_fround(0);
 var $85 = Math_fround(0), $86 = 0, $87 = Math_fround(0), $88 = 0, $89 = Math_fround(0), $9 = 0, $90 = Math_fround(0), $91 = 0, $92 = Math_fround(0), $93 = 0, $94 = Math_fround(0), $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $or$cond = 0, $or$cond173 = 0, $or$cond174 = 0, $or$cond175 = 0;
 var $or$cond176 = 0, $storemerge = 0, $storemerge$in = 0, $storemerge172 = 0, $storemerge172$in = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)==(-1);
 if ($2) {
  ___assert_fail((4856|0),(4704|0),382,(4867|0));
  // unreachable;
 }
 $3 = ((($0)) + 4|0);
 $4 = load4($3);
 $5 = (($4) + (($1*36)|0)|0);
 $6 = (((($4) + (($1*36)|0)|0)) + 24|0);
 $7 = load4($6);
 $8 = ($7|0)==(-1);
 if ($8) {
  $$1 = $1;
  return ($$1|0);
 }
 $9 = (((($4) + (($1*36)|0)|0)) + 32|0);
 $10 = load4($9);
 $11 = ($10|0)<(2);
 if ($11) {
  $$1 = $1;
  return ($$1|0);
 }
 $12 = (((($4) + (($1*36)|0)|0)) + 28|0);
 $13 = load4($12);
 $14 = ($7|0)>(-1);
 if (!($14)) {
  ___assert_fail((4875|0),(4704|0),392,(4867|0));
  // unreachable;
 }
 $15 = ((($0)) + 12|0);
 $16 = load4($15);
 $17 = ($7|0)<($16|0);
 if (!($17)) {
  ___assert_fail((4875|0),(4704|0),392,(4867|0));
  // unreachable;
 }
 $18 = ($13|0)>(-1);
 $19 = ($13|0)<($16|0);
 $or$cond = $18 & $19;
 if (!($or$cond)) {
  ___assert_fail((4906|0),(4704|0),393,(4867|0));
  // unreachable;
 }
 $20 = (($4) + (($7*36)|0)|0);
 $21 = (($4) + (($13*36)|0)|0);
 $22 = (((($4) + (($13*36)|0)|0)) + 32|0);
 $23 = load4($22);
 $24 = (((($4) + (($7*36)|0)|0)) + 32|0);
 $25 = load4($24);
 $26 = (($23) - ($25))|0;
 $27 = ($26|0)>(1);
 if ($27) {
  $28 = (((($4) + (($13*36)|0)|0)) + 24|0);
  $29 = load4($28);
  $30 = (((($4) + (($13*36)|0)|0)) + 28|0);
  $31 = load4($30);
  $32 = (($4) + (($29*36)|0)|0);
  $33 = (($4) + (($31*36)|0)|0);
  $34 = ($29|0)>(-1);
  $35 = ($29|0)<($16|0);
  $or$cond173 = $34 & $35;
  if (!($or$cond173)) {
   ___assert_fail((4937|0),(4704|0),407,(4867|0));
   // unreachable;
  }
  $36 = ($31|0)>(-1);
  $37 = ($31|0)<($16|0);
  $or$cond174 = $36 & $37;
  if (!($or$cond174)) {
   ___assert_fail((4968|0),(4704|0),408,(4867|0));
   // unreachable;
  }
  store4($28,$1);
  $38 = (((($4) + (($1*36)|0)|0)) + 20|0);
  $39 = load4($38);
  $40 = (((($4) + (($13*36)|0)|0)) + 20|0);
  store4($40,$39);
  store4($38,$13);
  $41 = load4($40);
  $42 = ($41|0)==(-1);
  do {
   if ($42) {
    store4($0,$13);
   } else {
    $43 = (((($4) + (($41*36)|0)|0)) + 24|0);
    $44 = load4($43);
    $45 = ($44|0)==($1|0);
    if ($45) {
     store4($43,$13);
     break;
    }
    $46 = (((($4) + (($41*36)|0)|0)) + 28|0);
    $47 = load4($46);
    $48 = ($47|0)==($1|0);
    if ($48) {
     store4($46,$13);
     break;
    } else {
     ___assert_fail((4999|0),(4704|0),424,(4867|0));
     // unreachable;
    }
   }
  } while(0);
  $49 = (((($4) + (($29*36)|0)|0)) + 32|0);
  $50 = load4($49);
  $51 = (((($4) + (($31*36)|0)|0)) + 32|0);
  $52 = load4($51);
  $53 = ($50|0)>($52|0);
  if ($53) {
   store4($30,$29);
   store4($12,$31);
   $54 = (((($4) + (($31*36)|0)|0)) + 20|0);
   store4($54,$1);
   $55 = loadf($20);
   $56 = loadf($33);
   $57 = $55 < $56;
   $58 = $57 ? $55 : $56;
   $59 = (((($4) + (($7*36)|0)|0)) + 4|0);
   $60 = loadf($59);
   $61 = (((($4) + (($31*36)|0)|0)) + 4|0);
   $62 = loadf($61);
   $63 = $60 < $62;
   $64 = $63 ? $60 : $62;
   storef($5,$58);
   $$sroa_idx14$i189 = (((($4) + (($1*36)|0)|0)) + 4|0);
   storef($$sroa_idx14$i189,$64);
   $65 = (((($4) + (($7*36)|0)|0)) + 8|0);
   $66 = loadf($65);
   $67 = (((($4) + (($31*36)|0)|0)) + 8|0);
   $68 = loadf($67);
   $69 = $66 > $68;
   $70 = $69 ? $66 : $68;
   $71 = (((($4) + (($7*36)|0)|0)) + 12|0);
   $72 = loadf($71);
   $73 = (((($4) + (($31*36)|0)|0)) + 12|0);
   $74 = loadf($73);
   $75 = $72 > $74;
   $76 = $75 ? $72 : $74;
   $77 = (((($4) + (($1*36)|0)|0)) + 8|0);
   storef($77,$70);
   $$sroa_idx8$i190 = (((($4) + (($1*36)|0)|0)) + 12|0);
   storef($$sroa_idx8$i190,$76);
   $78 = loadf($32);
   $79 = $58 < $78;
   $80 = $79 ? $58 : $78;
   $81 = (((($4) + (($29*36)|0)|0)) + 4|0);
   $82 = loadf($81);
   $83 = $64 < $82;
   $84 = $83 ? $64 : $82;
   storef($21,$80);
   $$sroa_idx14$i187 = (((($4) + (($13*36)|0)|0)) + 4|0);
   storef($$sroa_idx14$i187,$84);
   $85 = loadf($77);
   $86 = (((($4) + (($29*36)|0)|0)) + 8|0);
   $87 = loadf($86);
   $88 = $85 > $87;
   $89 = $88 ? $85 : $87;
   $90 = loadf($$sroa_idx8$i190);
   $91 = (((($4) + (($29*36)|0)|0)) + 12|0);
   $92 = loadf($91);
   $93 = $90 > $92;
   $94 = $93 ? $90 : $92;
   $95 = (((($4) + (($13*36)|0)|0)) + 8|0);
   storef($95,$89);
   $$sroa_idx8$i188 = (((($4) + (($13*36)|0)|0)) + 12|0);
   storef($$sroa_idx8$i188,$94);
   $96 = load4($24);
   $97 = load4($51);
   $98 = ($96|0)>($97|0);
   $99 = $98 ? $96 : $97;
   $100 = (($99) + 1)|0;
   store4($9,$100);
   $101 = load4($49);
   $102 = ($100|0)>($101|0);
   $103 = $102 ? $100 : $101;
   $storemerge172$in = $103;
  } else {
   store4($30,$31);
   store4($12,$29);
   $104 = (((($4) + (($29*36)|0)|0)) + 20|0);
   store4($104,$1);
   $105 = loadf($20);
   $106 = loadf($32);
   $107 = $105 < $106;
   $108 = $107 ? $105 : $106;
   $109 = (((($4) + (($7*36)|0)|0)) + 4|0);
   $110 = loadf($109);
   $111 = (((($4) + (($29*36)|0)|0)) + 4|0);
   $112 = loadf($111);
   $113 = $110 < $112;
   $114 = $113 ? $110 : $112;
   storef($5,$108);
   $$sroa_idx14$i185 = (((($4) + (($1*36)|0)|0)) + 4|0);
   storef($$sroa_idx14$i185,$114);
   $115 = (((($4) + (($7*36)|0)|0)) + 8|0);
   $116 = loadf($115);
   $117 = (((($4) + (($29*36)|0)|0)) + 8|0);
   $118 = loadf($117);
   $119 = $116 > $118;
   $120 = $119 ? $116 : $118;
   $121 = (((($4) + (($7*36)|0)|0)) + 12|0);
   $122 = loadf($121);
   $123 = (((($4) + (($29*36)|0)|0)) + 12|0);
   $124 = loadf($123);
   $125 = $122 > $124;
   $126 = $125 ? $122 : $124;
   $127 = (((($4) + (($1*36)|0)|0)) + 8|0);
   storef($127,$120);
   $$sroa_idx8$i186 = (((($4) + (($1*36)|0)|0)) + 12|0);
   storef($$sroa_idx8$i186,$126);
   $128 = loadf($33);
   $129 = $108 < $128;
   $130 = $129 ? $108 : $128;
   $131 = (((($4) + (($31*36)|0)|0)) + 4|0);
   $132 = loadf($131);
   $133 = $114 < $132;
   $134 = $133 ? $114 : $132;
   storef($21,$130);
   $$sroa_idx14$i183 = (((($4) + (($13*36)|0)|0)) + 4|0);
   storef($$sroa_idx14$i183,$134);
   $135 = loadf($127);
   $136 = (((($4) + (($31*36)|0)|0)) + 8|0);
   $137 = loadf($136);
   $138 = $135 > $137;
   $139 = $138 ? $135 : $137;
   $140 = loadf($$sroa_idx8$i186);
   $141 = (((($4) + (($31*36)|0)|0)) + 12|0);
   $142 = loadf($141);
   $143 = $140 > $142;
   $144 = $143 ? $140 : $142;
   $145 = (((($4) + (($13*36)|0)|0)) + 8|0);
   storef($145,$139);
   $$sroa_idx8$i184 = (((($4) + (($13*36)|0)|0)) + 12|0);
   storef($$sroa_idx8$i184,$144);
   $146 = load4($24);
   $147 = load4($49);
   $148 = ($146|0)>($147|0);
   $149 = $148 ? $146 : $147;
   $150 = (($149) + 1)|0;
   store4($9,$150);
   $151 = load4($51);
   $152 = ($150|0)>($151|0);
   $153 = $152 ? $150 : $151;
   $storemerge172$in = $153;
  }
  $storemerge172 = (($storemerge172$in) + 1)|0;
  store4($22,$storemerge172);
  $$1 = $13;
  return ($$1|0);
 }
 $154 = ($26|0)<(-1);
 if (!($154)) {
  $$1 = $1;
  return ($$1|0);
 }
 $155 = (((($4) + (($7*36)|0)|0)) + 24|0);
 $156 = load4($155);
 $157 = (((($4) + (($7*36)|0)|0)) + 28|0);
 $158 = load4($157);
 $159 = (($4) + (($156*36)|0)|0);
 $160 = (($4) + (($158*36)|0)|0);
 $161 = ($156|0)>(-1);
 $162 = ($156|0)<($16|0);
 $or$cond175 = $161 & $162;
 if (!($or$cond175)) {
  ___assert_fail((5031|0),(4704|0),467,(4867|0));
  // unreachable;
 }
 $163 = ($158|0)>(-1);
 $164 = ($158|0)<($16|0);
 $or$cond176 = $163 & $164;
 if (!($or$cond176)) {
  ___assert_fail((5062|0),(4704|0),468,(4867|0));
  // unreachable;
 }
 store4($155,$1);
 $165 = (((($4) + (($1*36)|0)|0)) + 20|0);
 $166 = load4($165);
 $167 = (((($4) + (($7*36)|0)|0)) + 20|0);
 store4($167,$166);
 store4($165,$7);
 $168 = load4($167);
 $169 = ($168|0)==(-1);
 do {
  if ($169) {
   store4($0,$7);
  } else {
   $170 = (((($4) + (($168*36)|0)|0)) + 24|0);
   $171 = load4($170);
   $172 = ($171|0)==($1|0);
   if ($172) {
    store4($170,$7);
    break;
   }
   $173 = (((($4) + (($168*36)|0)|0)) + 28|0);
   $174 = load4($173);
   $175 = ($174|0)==($1|0);
   if ($175) {
    store4($173,$7);
    break;
   } else {
    ___assert_fail((5093|0),(4704|0),484,(4867|0));
    // unreachable;
   }
  }
 } while(0);
 $176 = (((($4) + (($156*36)|0)|0)) + 32|0);
 $177 = load4($176);
 $178 = (((($4) + (($158*36)|0)|0)) + 32|0);
 $179 = load4($178);
 $180 = ($177|0)>($179|0);
 if ($180) {
  store4($157,$156);
  store4($6,$158);
  $181 = (((($4) + (($158*36)|0)|0)) + 20|0);
  store4($181,$1);
  $182 = loadf($21);
  $183 = loadf($160);
  $184 = $182 < $183;
  $185 = $184 ? $182 : $183;
  $186 = (((($4) + (($13*36)|0)|0)) + 4|0);
  $187 = loadf($186);
  $188 = (((($4) + (($158*36)|0)|0)) + 4|0);
  $189 = loadf($188);
  $190 = $187 < $189;
  $191 = $190 ? $187 : $189;
  storef($5,$185);
  $$sroa_idx14$i181 = (((($4) + (($1*36)|0)|0)) + 4|0);
  storef($$sroa_idx14$i181,$191);
  $192 = (((($4) + (($13*36)|0)|0)) + 8|0);
  $193 = loadf($192);
  $194 = (((($4) + (($158*36)|0)|0)) + 8|0);
  $195 = loadf($194);
  $196 = $193 > $195;
  $197 = $196 ? $193 : $195;
  $198 = (((($4) + (($13*36)|0)|0)) + 12|0);
  $199 = loadf($198);
  $200 = (((($4) + (($158*36)|0)|0)) + 12|0);
  $201 = loadf($200);
  $202 = $199 > $201;
  $203 = $202 ? $199 : $201;
  $204 = (((($4) + (($1*36)|0)|0)) + 8|0);
  storef($204,$197);
  $$sroa_idx8$i182 = (((($4) + (($1*36)|0)|0)) + 12|0);
  storef($$sroa_idx8$i182,$203);
  $205 = loadf($159);
  $206 = $185 < $205;
  $207 = $206 ? $185 : $205;
  $208 = (((($4) + (($156*36)|0)|0)) + 4|0);
  $209 = loadf($208);
  $210 = $191 < $209;
  $211 = $210 ? $191 : $209;
  storef($20,$207);
  $$sroa_idx14$i179 = (((($4) + (($7*36)|0)|0)) + 4|0);
  storef($$sroa_idx14$i179,$211);
  $212 = loadf($204);
  $213 = (((($4) + (($156*36)|0)|0)) + 8|0);
  $214 = loadf($213);
  $215 = $212 > $214;
  $216 = $215 ? $212 : $214;
  $217 = loadf($$sroa_idx8$i182);
  $218 = (((($4) + (($156*36)|0)|0)) + 12|0);
  $219 = loadf($218);
  $220 = $217 > $219;
  $221 = $220 ? $217 : $219;
  $222 = (((($4) + (($7*36)|0)|0)) + 8|0);
  storef($222,$216);
  $$sroa_idx8$i180 = (((($4) + (($7*36)|0)|0)) + 12|0);
  storef($$sroa_idx8$i180,$221);
  $223 = load4($22);
  $224 = load4($178);
  $225 = ($223|0)>($224|0);
  $226 = $225 ? $223 : $224;
  $227 = (($226) + 1)|0;
  store4($9,$227);
  $228 = load4($176);
  $229 = ($227|0)>($228|0);
  $230 = $229 ? $227 : $228;
  $storemerge$in = $230;
 } else {
  store4($157,$158);
  store4($6,$156);
  $231 = (((($4) + (($156*36)|0)|0)) + 20|0);
  store4($231,$1);
  $232 = loadf($21);
  $233 = loadf($159);
  $234 = $232 < $233;
  $235 = $234 ? $232 : $233;
  $236 = (((($4) + (($13*36)|0)|0)) + 4|0);
  $237 = loadf($236);
  $238 = (((($4) + (($156*36)|0)|0)) + 4|0);
  $239 = loadf($238);
  $240 = $237 < $239;
  $241 = $240 ? $237 : $239;
  storef($5,$235);
  $$sroa_idx14$i177 = (((($4) + (($1*36)|0)|0)) + 4|0);
  storef($$sroa_idx14$i177,$241);
  $242 = (((($4) + (($13*36)|0)|0)) + 8|0);
  $243 = loadf($242);
  $244 = (((($4) + (($156*36)|0)|0)) + 8|0);
  $245 = loadf($244);
  $246 = $243 > $245;
  $247 = $246 ? $243 : $245;
  $248 = (((($4) + (($13*36)|0)|0)) + 12|0);
  $249 = loadf($248);
  $250 = (((($4) + (($156*36)|0)|0)) + 12|0);
  $251 = loadf($250);
  $252 = $249 > $251;
  $253 = $252 ? $249 : $251;
  $254 = (((($4) + (($1*36)|0)|0)) + 8|0);
  storef($254,$247);
  $$sroa_idx8$i178 = (((($4) + (($1*36)|0)|0)) + 12|0);
  storef($$sroa_idx8$i178,$253);
  $255 = loadf($160);
  $256 = $235 < $255;
  $257 = $256 ? $235 : $255;
  $258 = (((($4) + (($158*36)|0)|0)) + 4|0);
  $259 = loadf($258);
  $260 = $241 < $259;
  $261 = $260 ? $241 : $259;
  storef($20,$257);
  $$sroa_idx14$i = (((($4) + (($7*36)|0)|0)) + 4|0);
  storef($$sroa_idx14$i,$261);
  $262 = loadf($254);
  $263 = (((($4) + (($158*36)|0)|0)) + 8|0);
  $264 = loadf($263);
  $265 = $262 > $264;
  $266 = $265 ? $262 : $264;
  $267 = loadf($$sroa_idx8$i178);
  $268 = (((($4) + (($158*36)|0)|0)) + 12|0);
  $269 = loadf($268);
  $270 = $267 > $269;
  $271 = $270 ? $267 : $269;
  $272 = (((($4) + (($7*36)|0)|0)) + 8|0);
  storef($272,$266);
  $$sroa_idx8$i = (((($4) + (($7*36)|0)|0)) + 12|0);
  storef($$sroa_idx8$i,$271);
  $273 = load4($22);
  $274 = load4($176);
  $275 = ($273|0)>($274|0);
  $276 = $275 ? $273 : $274;
  $277 = (($276) + 1)|0;
  store4($9,$277);
  $278 = load4($178);
  $279 = ($277|0)>($278|0);
  $280 = $279 ? $277 : $278;
  $storemerge$in = $280;
 }
 $storemerge = (($storemerge$in) + 1)|0;
 store4($24,$storemerge);
 $$1 = $7;
 return ($$1|0);
}
function __ZN13b2DynamicTree10RemoveLeafEi($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$04042 = 0, $$sroa_idx14$i = 0, $$sroa_idx8$i = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = Math_fround(0), $41 = 0, $42 = Math_fround(0);
 var $43 = 0, $44 = Math_fround(0), $45 = 0, $46 = Math_fround(0), $47 = 0, $48 = Math_fround(0), $49 = 0, $5 = 0, $50 = Math_fround(0), $51 = 0, $52 = 0, $53 = Math_fround(0), $54 = 0, $55 = Math_fround(0), $56 = 0, $57 = Math_fround(0), $58 = 0, $59 = Math_fround(0), $6 = 0, $60 = 0;
 var $61 = Math_fround(0), $62 = 0, $63 = Math_fround(0), $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0;
 var $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = ($2|0)==($1|0);
 if ($3) {
  store4($0,-1);
  return;
 }
 $4 = ((($0)) + 4|0);
 $5 = load4($4);
 $6 = (((($5) + (($1*36)|0)|0)) + 20|0);
 $7 = load4($6);
 $8 = (((($5) + (($7*36)|0)|0)) + 20|0);
 $9 = load4($8);
 $10 = (((($5) + (($7*36)|0)|0)) + 24|0);
 $11 = load4($10);
 $12 = ($11|0)==($1|0);
 if ($12) {
  $13 = (((($5) + (($7*36)|0)|0)) + 28|0);
  $14 = load4($13);
  $$0 = $14;
 } else {
  $$0 = $11;
 }
 $15 = ($9|0)==(-1);
 if ($15) {
  store4($0,$$0);
  $77 = (((($5) + (($$0*36)|0)|0)) + 20|0);
  store4($77,-1);
  $78 = ($7|0)>(-1);
  if (!($78)) {
   ___assert_fail((4751|0),(4704|0),97,(4790|0));
   // unreachable;
  }
  $79 = ((($0)) + 12|0);
  $80 = load4($79);
  $81 = ($80|0)>($7|0);
  if (!($81)) {
   ___assert_fail((4751|0),(4704|0),97,(4790|0));
   // unreachable;
  }
  $82 = ((($0)) + 8|0);
  $83 = load4($82);
  $84 = ($83|0)>(0);
  if (!($84)) {
   ___assert_fail((4799|0),(4704|0),98,(4790|0));
   // unreachable;
  }
  $85 = ((($0)) + 16|0);
  $86 = load4($85);
  store4($8,$86);
  $87 = (((($5) + (($7*36)|0)|0)) + 32|0);
  store4($87,-1);
  store4($85,$7);
  $88 = load4($82);
  $89 = (($88) + -1)|0;
  store4($82,$89);
  return;
 }
 $16 = (((($5) + (($9*36)|0)|0)) + 24|0);
 $17 = load4($16);
 $18 = ($17|0)==($7|0);
 if ($18) {
  store4($16,$$0);
 } else {
  $19 = (((($5) + (($9*36)|0)|0)) + 28|0);
  store4($19,$$0);
 }
 $20 = (((($5) + (($$0*36)|0)|0)) + 20|0);
 store4($20,$9);
 $21 = ($7|0)>(-1);
 if (!($21)) {
  ___assert_fail((4751|0),(4704|0),97,(4790|0));
  // unreachable;
 }
 $22 = ((($0)) + 12|0);
 $23 = load4($22);
 $24 = ($23|0)>($7|0);
 if (!($24)) {
  ___assert_fail((4751|0),(4704|0),97,(4790|0));
  // unreachable;
 }
 $25 = ((($0)) + 8|0);
 $26 = load4($25);
 $27 = ($26|0)>(0);
 if (!($27)) {
  ___assert_fail((4799|0),(4704|0),98,(4790|0));
  // unreachable;
 }
 $28 = ((($0)) + 16|0);
 $29 = load4($28);
 store4($8,$29);
 $30 = (((($5) + (($7*36)|0)|0)) + 32|0);
 store4($30,-1);
 store4($28,$7);
 $31 = load4($25);
 $32 = (($31) + -1)|0;
 store4($25,$32);
 $$04042 = $9;
 while(1) {
  $33 = (__ZN13b2DynamicTree7BalanceEi($0,$$04042)|0);
  $34 = load4($4);
  $35 = (((($34) + (($33*36)|0)|0)) + 24|0);
  $36 = load4($35);
  $37 = (((($34) + (($33*36)|0)|0)) + 28|0);
  $38 = load4($37);
  $39 = (($34) + (($36*36)|0)|0);
  $40 = loadf($39);
  $41 = (($34) + (($38*36)|0)|0);
  $42 = loadf($41);
  $43 = $40 < $42;
  $44 = $43 ? $40 : $42;
  $45 = (((($34) + (($36*36)|0)|0)) + 4|0);
  $46 = loadf($45);
  $47 = (((($34) + (($38*36)|0)|0)) + 4|0);
  $48 = loadf($47);
  $49 = $46 < $48;
  $50 = $49 ? $46 : $48;
  $51 = (($34) + (($33*36)|0)|0);
  storef($51,$44);
  $$sroa_idx14$i = (((($34) + (($33*36)|0)|0)) + 4|0);
  storef($$sroa_idx14$i,$50);
  $52 = (((($34) + (($36*36)|0)|0)) + 8|0);
  $53 = loadf($52);
  $54 = (((($34) + (($38*36)|0)|0)) + 8|0);
  $55 = loadf($54);
  $56 = $53 > $55;
  $57 = $56 ? $53 : $55;
  $58 = (((($34) + (($36*36)|0)|0)) + 12|0);
  $59 = loadf($58);
  $60 = (((($34) + (($38*36)|0)|0)) + 12|0);
  $61 = loadf($60);
  $62 = $59 > $61;
  $63 = $62 ? $59 : $61;
  $64 = (((($34) + (($33*36)|0)|0)) + 8|0);
  storef($64,$57);
  $$sroa_idx8$i = (((($34) + (($33*36)|0)|0)) + 12|0);
  storef($$sroa_idx8$i,$63);
  $65 = load4($4);
  $66 = (((($65) + (($36*36)|0)|0)) + 32|0);
  $67 = load4($66);
  $68 = (((($65) + (($38*36)|0)|0)) + 32|0);
  $69 = load4($68);
  $70 = ($67|0)>($69|0);
  $71 = $70 ? $67 : $69;
  $72 = (($71) + 1)|0;
  $73 = (((($65) + (($33*36)|0)|0)) + 32|0);
  store4($73,$72);
  $74 = (((($65) + (($33*36)|0)|0)) + 20|0);
  $75 = load4($74);
  $76 = ($75|0)==(-1);
  if ($76) {
   break;
  } else {
   $$04042 = $75;
  }
 }
 return;
}
function __ZN13b2DynamicTree9MoveProxyEiRK6b2AABBRK6b2Vec2($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0 = 0, $$pre = 0, $$sroa$035$0$copyload58 = Math_fround(0), $$sroa$035$0$in = Math_fround(0), $$sroa$12$0$copyload60 = Math_fround(0), $$sroa$12$0$in = Math_fround(0), $$sroa$16$0$$sroa_idx52 = 0, $$sroa$16$0$$sroa_idx53 = 0, $$sroa$16$0$copyload61 = Math_fround(0), $$sroa$16$0$in = Math_fround(0), $$sroa$8$0$$sroa_idx40$pre$phiZZZZZZ2D = 0, $$sroa$8$0$$sroa_idx41 = 0, $$sroa$8$0$copyload59 = Math_fround(0), $$sroa$8$0$in = Math_fround(0), $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = Math_fround(0), $15 = Math_fround(0);
 var $16 = 0, $17 = 0, $18 = Math_fround(0), $19 = 0, $20 = Math_fround(0), $21 = 0, $22 = 0, $23 = Math_fround(0), $24 = 0, $25 = Math_fround(0), $26 = 0, $27 = 0, $28 = Math_fround(0), $29 = 0, $30 = Math_fround(0), $31 = 0, $32 = 0, $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0);
 var $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = 0, $4 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = 0, $43 = Math_fround(0), $44 = Math_fround(0), $45 = 0, $46 = Math_fround(0), $47 = Math_fround(0), $48 = 0, $49 = 0, $5 = 0, $50 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ($1|0)>(-1);
 if (!($4)) {
  ___assert_fail((5125|0),(4704|0),135,(5192|0));
  // unreachable;
 }
 $5 = ((($0)) + 12|0);
 $6 = load4($5);
 $7 = ($6|0)>($1|0);
 if (!($7)) {
  ___assert_fail((5125|0),(4704|0),135,(5192|0));
  // unreachable;
 }
 $8 = ((($0)) + 4|0);
 $9 = load4($8);
 $10 = (((($9) + (($1*36)|0)|0)) + 24|0);
 $11 = load4($10);
 $12 = ($11|0)==(-1);
 if (!($12)) {
  ___assert_fail((5166|0),(4704|0),137,(5192|0));
  // unreachable;
 }
 $13 = (($9) + (($1*36)|0)|0);
 $14 = loadf($13);
 $15 = loadf($2);
 $16 = !($14 <= $15);
 if ($16) {
  $$pre = ((($2)) + 4|0);
  $$sroa$8$0$$sroa_idx40$pre$phiZZZZZZ2D = $$pre;
 } else {
  $17 = (((($9) + (($1*36)|0)|0)) + 4|0);
  $18 = loadf($17);
  $19 = ((($2)) + 4|0);
  $20 = loadf($19);
  $21 = !($18 <= $20);
  if ($21) {
   $$sroa$8$0$$sroa_idx40$pre$phiZZZZZZ2D = $19;
  } else {
   $22 = ((($2)) + 8|0);
   $23 = loadf($22);
   $24 = (((($9) + (($1*36)|0)|0)) + 8|0);
   $25 = loadf($24);
   $26 = !($23 <= $25);
   if ($26) {
    $$sroa$8$0$$sroa_idx40$pre$phiZZZZZZ2D = $19;
   } else {
    $27 = ((($2)) + 12|0);
    $28 = loadf($27);
    $29 = (((($9) + (($1*36)|0)|0)) + 12|0);
    $30 = loadf($29);
    $31 = !($28 <= $30);
    if ($31) {
     $$sroa$8$0$$sroa_idx40$pre$phiZZZZZZ2D = $19;
    } else {
     $$0 = 0;
     return ($$0|0);
    }
   }
  }
 }
 __ZN13b2DynamicTree10RemoveLeafEi($0,$1);
 $$sroa$035$0$copyload58 = loadf($2);
 $$sroa$8$0$copyload59 = loadf($$sroa$8$0$$sroa_idx40$pre$phiZZZZZZ2D);
 $32 = ((($2)) + 8|0);
 $$sroa$12$0$copyload60 = loadf($32);
 $$sroa$16$0$$sroa_idx52 = ((($2)) + 12|0);
 $$sroa$16$0$copyload61 = loadf($$sroa$16$0$$sroa_idx52);
 $33 = Math_fround($$sroa$035$0$copyload58 + Math_fround(-0.100000001));
 $34 = Math_fround($$sroa$8$0$copyload59 + Math_fround(-0.100000001));
 $35 = Math_fround($$sroa$12$0$copyload60 + Math_fround(0.100000001));
 $36 = Math_fround($$sroa$16$0$copyload61 + Math_fround(0.100000001));
 $37 = loadf($3);
 $38 = Math_fround($37 * Math_fround(2.0));
 $39 = ((($3)) + 4|0);
 $40 = loadf($39);
 $41 = Math_fround($40 * Math_fround(2.0));
 $42 = $38 < Math_fround(0.0);
 $43 = Math_fround($33 + $38);
 $44 = Math_fround($35 + $38);
 $$sroa$035$0$in = $42 ? $43 : $33;
 $$sroa$12$0$in = $42 ? $35 : $44;
 $45 = $41 < Math_fround(0.0);
 $46 = Math_fround($34 + $41);
 $47 = Math_fround($36 + $41);
 $$sroa$8$0$in = $45 ? $46 : $34;
 $$sroa$16$0$in = $45 ? $36 : $47;
 $48 = load4($8);
 $49 = (($48) + (($1*36)|0)|0);
 storef($49,$$sroa$035$0$in);
 $$sroa$8$0$$sroa_idx41 = (((($48) + (($1*36)|0)|0)) + 4|0);
 storef($$sroa$8$0$$sroa_idx41,$$sroa$8$0$in);
 $50 = (((($48) + (($1*36)|0)|0)) + 8|0);
 storef($50,$$sroa$12$0$in);
 $$sroa$16$0$$sroa_idx53 = (((($48) + (($1*36)|0)|0)) + 12|0);
 storef($$sroa$16$0$$sroa_idx53,$$sroa$16$0$in);
 __ZN13b2DynamicTree10InsertLeafEi($0,$1);
 $$0 = 1;
 return ($$0|0);
}
function __Z14b2TimeOfImpactP11b2TOIOutputPK10b2TOIInput($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$$0133 = Math_fround(0), $$0 = Math_fround(0), $$0124 = Math_fround(0), $$0124$$0128 = Math_fround(0), $$0125 = Math_fround(0), $$0125$$0124 = Math_fround(0), $$0128 = Math_fround(0), $$0131 = 0, $$0133 = Math_fround(0), $$0136 = Math_fround(0), $$0136$ = Math_fround(0), $$0139210 = 0, $$0142209 = Math_fround(0), $$0154 = 0, $$1132180 = 0, $$1155187 = 0, $$2$ph = Math_fround(0), $$2144179 = Math_fround(0), $$2148$off0$ph = 0, $$pre = Math_fround(0);
 var $$pre216 = Math_fround(0), $$pre217 = Math_fround(0), $$pre218 = Math_fround(0), $$sroa$0$0$$sroa_idx = 0, $$sroa$0168$0$$sroa_idx = 0, $$sroa$5$0$$sroa_idx162 = 0, $$sroa$5170$0$$sroa_idx171 = 0, $$sroa$7$0$$sroa_idx164 = 0, $$sroa$7173$0$$sroa_idx174 = 0, $$sroa$8$0$$sroa_idx166 = 0, $$sroa$8176$0$$sroa_idx177 = 0, $10 = 0, $100 = Math_fround(0), $101 = Math_fround(0), $102 = Math_fround(0), $103 = Math_fround(0), $104 = Math_fround(0), $105 = Math_fround(0), $106 = Math_fround(0), $107 = Math_fround(0);
 var $108 = Math_fround(0), $109 = Math_fround(0), $11 = 0, $110 = Math_fround(0), $111 = Math_fround(0), $112 = Math_fround(0), $113 = Math_fround(0), $114 = Math_fround(0), $115 = Math_fround(0), $116 = Math_fround(0), $117 = Math_fround(0), $118 = 0, $119 = 0, $12 = 0, $120 = Math_fround(0), $121 = 0, $122 = 0, $123 = Math_fround(0), $124 = 0, $125 = 0;
 var $126 = Math_fround(0), $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = Math_fround(0), $132 = Math_fround(0), $133 = Math_fround(0), $134 = Math_fround(0), $135 = Math_fround(0), $136 = Math_fround(0), $137 = Math_fround(0), $138 = Math_fround(0), $139 = 0, $14 = 0, $140 = 0, $141 = Math_fround(0), $142 = Math_fround(0), $143 = 0;
 var $144 = Math_fround(0), $145 = Math_fround(0), $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = Math_fround(0), $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0;
 var $162 = 0, $163 = 0, $164 = 0, $165 = 0, $17 = 0, $18 = 0, $19 = Math_fround(0), $2 = 0, $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = Math_fround(0), $24 = 0, $25 = Math_fround(0), $26 = Math_fround(0), $27 = 0, $28 = Math_fround(0), $29 = Math_fround(0), $3 = 0, $30 = Math_fround(0);
 var $31 = Math_fround(0), $32 = Math_fround(0), $33 = 0, $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = 0, $4 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = 0, $44 = Math_fround(0), $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = Math_fround(0), $61 = Math_fround(0), $62 = Math_fround(0), $63 = Math_fround(0), $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = Math_fround(0);
 var $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = Math_fround(0), $76 = Math_fround(0), $77 = Math_fround(0), $78 = Math_fround(0), $79 = Math_fround(0), $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = Math_fround(0), $85 = Math_fround(0);
 var $86 = Math_fround(0), $87 = Math_fround(0), $88 = Math_fround(0), $89 = Math_fround(0), $9 = 0, $90 = Math_fround(0), $91 = Math_fround(0), $92 = Math_fround(0), $93 = Math_fround(0), $94 = Math_fround(0), $95 = Math_fround(0), $96 = Math_fround(0), $97 = Math_fround(0), $98 = Math_fround(0), $99 = Math_fround(0), $not$ = 0, $storemerge = Math_fround(0), $storemerge191 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 320|0;
 $2 = sp + 276|0;
 $3 = sp + 240|0;
 $4 = sp + 228|0;
 $5 = sp + 136|0;
 $6 = sp + 112|0;
 $7 = sp + 8|0;
 $8 = sp + 4|0;
 $9 = sp;
 $10 = load4(9632);
 $11 = (($10) + 1)|0;
 store4(9632,$11);
 store4($0,0);
 $12 = ((($1)) + 128|0);
 $13 = load4($12);
 $14 = ((($0)) + 4|0);
 store4($14,$13);
 $15 = ((($1)) + 28|0);
 $16 = ((($1)) + 56|0);
 ; store8($2,load8($16,4),4); store8($2+8 | 0,load8($16+8 | 0,4),4); store8($2+16 | 0,load8($16+16 | 0,4),4); store8($2+24 | 0,load8($16+24 | 0,4),4); store4($2+32 | 0,load4($16+32 | 0,4),4);
 $17 = ((($1)) + 92|0);
 ; store8($3,load8($17,4),4); store8($3+8 | 0,load8($17+8 | 0,4),4); store8($3+16 | 0,load8($17+16 | 0,4),4); store8($3+24 | 0,load8($17+24 | 0,4),4); store4($3+32 | 0,load4($17+32 | 0,4),4);
 $18 = ((($2)) + 24|0);
 $19 = loadf($18);
 $20 = Math_fround($19 / Math_fround(6.28318548));
 $21 = (Math_fround(Math_floor((Math_fround($20)))));
 $22 = Math_fround($21 * Math_fround(6.28318548));
 $23 = Math_fround($19 - $22);
 storef($18,$23);
 $24 = ((($2)) + 28|0);
 $25 = loadf($24);
 $26 = Math_fround($25 - $22);
 storef($24,$26);
 $27 = ((($3)) + 24|0);
 $28 = loadf($27);
 $29 = Math_fround($28 / Math_fround(6.28318548));
 $30 = (Math_fround(Math_floor((Math_fround($29)))));
 $31 = Math_fround($30 * Math_fround(6.28318548));
 $32 = Math_fround($28 - $31);
 storef($27,$32);
 $33 = ((($3)) + 28|0);
 $34 = loadf($33);
 $35 = Math_fround($34 - $31);
 storef($33,$35);
 $36 = i32_bc2f($13);
 $37 = ((($1)) + 24|0);
 $38 = loadf($37);
 $39 = ((($1)) + 52|0);
 $40 = loadf($39);
 $41 = Math_fround($38 + $40);
 $42 = Math_fround($41 + Math_fround(-0.0149999997));
 $43 = $42 < Math_fround(0.00499999989);
 $44 = $43 ? Math_fround(0.00499999989) : $42;
 $45 = $44 > Math_fround(0.00124999997);
 if (!($45)) {
  ___assert_fail((5202|0),(5221|0),280,(5256|0));
  // unreachable;
 }
 $46 = ((($4)) + 4|0);
 store2($46,0);
 ; store8($5,load8($1,4),4); store8($5+8 | 0,load8($1+8 | 0,4),4); store8($5+16 | 0,load8($1+16 | 0,4),4); store4($5+24 | 0,load4($1+24 | 0,4),4);
 $47 = ((($5)) + 28|0);
 ; store8($47,load8($15,4),4); store8($47+8 | 0,load8($15+8 | 0,4),4); store8($47+16 | 0,load8($15+16 | 0,4),4); store4($47+24 | 0,load4($15+24 | 0,4),4);
 $48 = ((($5)) + 88|0);
 store1($48,0);
 $49 = ((($2)) + 8|0);
 $50 = ((($2)) + 12|0);
 $51 = ((($2)) + 16|0);
 $52 = ((($2)) + 20|0);
 $53 = ((($2)) + 4|0);
 $54 = ((($3)) + 8|0);
 $55 = ((($3)) + 12|0);
 $56 = ((($3)) + 16|0);
 $57 = ((($3)) + 20|0);
 $58 = ((($3)) + 4|0);
 $$sroa$0168$0$$sroa_idx = ((($5)) + 56|0);
 $$sroa$5170$0$$sroa_idx171 = ((($5)) + 60|0);
 $$sroa$7173$0$$sroa_idx174 = ((($5)) + 64|0);
 $$sroa$8176$0$$sroa_idx177 = ((($5)) + 68|0);
 $$sroa$0$0$$sroa_idx = ((($5)) + 72|0);
 $$sroa$5$0$$sroa_idx162 = ((($5)) + 76|0);
 $$sroa$7$0$$sroa_idx164 = ((($5)) + 80|0);
 $$sroa$8$0$$sroa_idx166 = ((($5)) + 84|0);
 $59 = ((($6)) + 16|0);
 $60 = Math_fround($44 + Math_fround(0.00124999997));
 $61 = Math_fround($44 + Math_fround(-0.00124999997));
 $$0 = Math_fround(0.0);$$0154 = 0;$101 = $32;$103 = $35;$74 = $23;$76 = $26;
 while(1) {
  $62 = Math_fround(Math_fround(1.0) - $$0);
  $63 = loadf($49);
  $64 = Math_fround($62 * $63);
  $65 = loadf($50);
  $66 = Math_fround($62 * $65);
  $67 = loadf($51);
  $68 = Math_fround($$0 * $67);
  $69 = loadf($52);
  $70 = Math_fround($$0 * $69);
  $71 = Math_fround($64 + $68);
  $72 = Math_fround($66 + $70);
  $73 = Math_fround($62 * $74);
  $75 = Math_fround($$0 * $76);
  $77 = Math_fround($73 + $75);
  $78 = (Math_fround(_sinf($77)));
  $79 = (Math_fround(_cosf($77)));
  $80 = loadf($2);
  $81 = Math_fround($79 * $80);
  $82 = loadf($53);
  $83 = Math_fround($78 * $82);
  $84 = Math_fround($81 - $83);
  $85 = Math_fround($78 * $80);
  $86 = Math_fround($79 * $82);
  $87 = Math_fround($85 + $86);
  $88 = Math_fround($71 - $84);
  $89 = Math_fround($72 - $87);
  $90 = loadf($54);
  $91 = Math_fround($62 * $90);
  $92 = loadf($55);
  $93 = Math_fround($62 * $92);
  $94 = loadf($56);
  $95 = Math_fround($$0 * $94);
  $96 = loadf($57);
  $97 = Math_fround($$0 * $96);
  $98 = Math_fround($91 + $95);
  $99 = Math_fround($93 + $97);
  $100 = Math_fround($62 * $101);
  $102 = Math_fround($$0 * $103);
  $104 = Math_fround($100 + $102);
  $105 = (Math_fround(_sinf($104)));
  $106 = (Math_fround(_cosf($104)));
  $107 = loadf($3);
  $108 = Math_fround($106 * $107);
  $109 = loadf($58);
  $110 = Math_fround($105 * $109);
  $111 = Math_fround($108 - $110);
  $112 = Math_fround($105 * $107);
  $113 = Math_fround($106 * $109);
  $114 = Math_fround($112 + $113);
  $115 = Math_fround($98 - $111);
  $116 = Math_fround($99 - $114);
  storef($$sroa$0168$0$$sroa_idx,$88);
  storef($$sroa$5170$0$$sroa_idx171,$89);
  storef($$sroa$7173$0$$sroa_idx174,$78);
  storef($$sroa$8176$0$$sroa_idx177,$79);
  storef($$sroa$0$0$$sroa_idx,$115);
  storef($$sroa$5$0$$sroa_idx162,$116);
  storef($$sroa$7$0$$sroa_idx164,$105);
  storef($$sroa$8$0$$sroa_idx166,$106);
  __Z10b2DistanceP16b2DistanceOutputP14b2SimplexCachePK15b2DistanceInput($6,$4,$5);
  $117 = loadf($59);
  $118 = !($117 <= Math_fround(0.0));
  if (!($118)) {
   $storemerge = Math_fround(0.0);$storemerge191 = 2;
   label = 23;
   break;
  }
  $119 = $117 < $60;
  if ($119) {
   $storemerge = $$0;$storemerge191 = 3;
   label = 23;
   break;
  }
  (Math_fround(__ZN20b2SeparationFunction10InitializeEPK14b2SimplexCachePK15b2DistanceProxyRK7b2SweepS5_S8_f($7,$4,$1,$2,$15,$3,$$0)));
  $120 = (Math_fround(__ZNK20b2SeparationFunction17FindMinSeparationEPiS0_f($7,$8,$9,$36)));
  $121 = $120 > $60;
  L8: do {
   if ($121) {
    label = 7;
   } else {
    $$0139210 = 0;$$0142209 = $36;$123 = $120;
    while(1) {
     $122 = $123 > $61;
     if ($122) {
      $$2$ph = $$0142209;$$2148$off0$ph = 0;
      break L8;
     }
     $124 = load4($8);
     $125 = load4($9);
     $126 = (Math_fround(__ZNK20b2SeparationFunction8EvaluateEiif($7,$124,$125,$$0)));
     $127 = $126 < $61;
     if ($127) {
      label = 10;
      break;
     }
     $128 = !($126 <= $60);
     if ($128) {
      $$0125 = $$0142209;$$0128 = $$0;$$0131 = 0;$$0133 = $126;$$0136 = $123;
     } else {
      label = 12;
      break;
     }
     while(1) {
      $129 = $$0131 & 1;
      $130 = ($129|0)==(0);
      if ($130) {
       $137 = Math_fround($$0128 + $$0125);
       $138 = Math_fround($137 * Math_fround(0.5));
       $$0124 = $138;
      } else {
       $131 = Math_fround($44 - $$0133);
       $132 = Math_fround($$0125 - $$0128);
       $133 = Math_fround($131 * $132);
       $134 = Math_fround($$0136 - $$0133);
       $135 = Math_fround($133 / $134);
       $136 = Math_fround($$0128 + $135);
       $$0124 = $136;
      }
      $139 = load4($8);
      $140 = load4($9);
      $141 = (Math_fround(__ZNK20b2SeparationFunction8EvaluateEiif($7,$139,$140,$$0124)));
      $142 = Math_fround($141 - $44);
      $143 = $142 > Math_fround(0.0);
      $144 = Math_fround(-$142);
      $145 = $143 ? $142 : $144;
      $146 = $145 < Math_fround(0.00124999997);
      if ($146) {
       $$1132180 = $$0131;$$2144179 = $$0124;
       break;
      }
      $147 = $141 > $44;
      $$0136$ = $147 ? $$0136 : $141;
      $$$0133 = $147 ? $141 : $$0133;
      $$0124$$0128 = $147 ? $$0124 : $$0128;
      $$0125$$0124 = $147 ? $$0125 : $$0124;
      $148 = (($$0131) + 1)|0;
      $149 = load4(9644);
      $150 = (($149) + 1)|0;
      store4(9644,$150);
      $not$ = ($148|0)==(50);
      if ($not$) {
       $$1132180 = 50;$$2144179 = $$0142209;
       break;
      } else {
       $$0125 = $$0125$$0124;$$0128 = $$0124$$0128;$$0131 = $148;$$0133 = $$$0133;$$0136 = $$0136$;
      }
     }
     $151 = load4(9648);
     $152 = ($151|0)>($$1132180|0);
     $153 = $152 ? $151 : $$1132180;
     store4(9648,$153);
     $154 = (($$0139210) + 1)|0;
     $155 = ($154|0)==(8);
     if ($155) {
      $$2$ph = $$0;$$2148$off0$ph = 0;
      break L8;
     }
     $156 = (Math_fround(__ZNK20b2SeparationFunction17FindMinSeparationEPiS0_f($7,$8,$9,$$2144179)));
     $157 = $156 > $60;
     if ($157) {
      label = 7;
      break L8;
     } else {
      $$0139210 = $154;$$0142209 = $$2144179;$123 = $156;
     }
    }
    if ((label|0) == 10) {
     label = 0;
     store4($0,1);
     storef($14,$$0);
     $$2$ph = $$0;$$2148$off0$ph = 1;
     break;
    }
    else if ((label|0) == 12) {
     label = 0;
     store4($0,3);
     storef($14,$$0);
     $$2$ph = $$0;$$2148$off0$ph = 1;
     break;
    }
   }
  } while(0);
  if ((label|0) == 7) {
   label = 0;
   store4($0,4);
   store4($14,$13);
   $$2$ph = $$0;$$2148$off0$ph = 1;
  }
  $158 = (($$0154) + 1)|0;
  $159 = load4(9636);
  $160 = (($159) + 1)|0;
  store4(9636,$160);
  if ($$2148$off0$ph) {
   $165 = $158;
   break;
  }
  $161 = ($158|0)==(20);
  if ($161) {
   label = 22;
   break;
  }
  $$pre = loadf($18);
  $$pre216 = loadf($24);
  $$pre217 = loadf($27);
  $$pre218 = loadf($33);
  $$0 = $$2$ph;$$0154 = $158;$101 = $$pre217;$103 = $$pre218;$74 = $$pre;$76 = $$pre216;
 }
 if ((label|0) == 22) {
  store4($0,1);
  storef($14,$$2$ph);
  $165 = 20;
 }
 else if ((label|0) == 23) {
  store4($0,$storemerge191);
  storef($14,$storemerge);
  $$1155187 = $$0154;
  $162 = load4(9640);
  $163 = ($162|0)>($$1155187|0);
  $164 = $163 ? $162 : $$1155187;
  store4(9640,$164);
  STACKTOP = sp;return;
 }
 $$1155187 = $165;
 $162 = load4(9640);
 $163 = ($162|0)>($$1155187|0);
 $164 = $163 ? $162 : $$1155187;
 store4(9640,$164);
 STACKTOP = sp;return;
}
function __ZN20b2SeparationFunction10InitializeEPK14b2SimplexCachePK15b2DistanceProxyRK7b2SweepS5_S8_f($0,$1,$2,$3,$4,$5,$6) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 $6 = Math_fround($6);
 var $$040 = Math_fround(0), $$off = 0, $$sroa_idx101 = 0, $$sroa_idx119 = 0, $$sroa_idx127 = 0, $$sroa_idx137 = 0, $$sroa_idx166 = 0, $$sroa_idx185 = 0, $$sroa_idx203 = 0, $$sroa_idx211 = 0, $$sroa_idx222 = 0, $$sroa_idx235 = 0, $$sroa_idx251 = 0, $$sroa_idx260 = 0, $$sroa_idx82 = 0, $10 = 0, $100 = Math_fround(0), $101 = 0, $102 = 0, $103 = 0;
 var $104 = Math_fround(0), $105 = Math_fround(0), $106 = Math_fround(0), $107 = Math_fround(0), $108 = Math_fround(0), $109 = Math_fround(0), $11 = 0, $110 = Math_fround(0), $111 = Math_fround(0), $112 = Math_fround(0), $113 = Math_fround(0), $114 = Math_fround(0), $115 = Math_fround(0), $116 = Math_fround(0), $117 = Math_fround(0), $118 = Math_fround(0), $119 = Math_fround(0), $12 = 0, $120 = Math_fround(0), $121 = Math_fround(0);
 var $122 = Math_fround(0), $123 = Math_fround(0), $124 = 0, $125 = Math_fround(0), $126 = Math_fround(0), $127 = Math_fround(0), $128 = Math_fround(0), $129 = 0, $13 = Math_fround(0), $130 = Math_fround(0), $131 = Math_fround(0), $132 = Math_fround(0), $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0;
 var $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = Math_fround(0), $150 = 0, $151 = 0, $152 = Math_fround(0), $153 = 0, $154 = Math_fround(0), $155 = 0, $156 = Math_fround(0), $157 = Math_fround(0), $158 = Math_fround(0);
 var $159 = Math_fround(0), $16 = Math_fround(0), $160 = Math_fround(0), $161 = 0, $162 = Math_fround(0), $163 = Math_fround(0), $164 = Math_fround(0), $165 = Math_fround(0), $166 = 0, $167 = Math_fround(0), $168 = Math_fround(0), $169 = Math_fround(0), $17 = 0, $170 = Math_fround(0), $171 = Math_fround(0), $172 = Math_fround(0), $173 = Math_fround(0), $174 = 0, $175 = 0, $176 = 0;
 var $177 = 0, $178 = 0, $179 = 0, $18 = Math_fround(0), $180 = Math_fround(0), $181 = Math_fround(0), $182 = Math_fround(0), $183 = Math_fround(0), $184 = Math_fround(0), $185 = Math_fround(0), $186 = Math_fround(0), $187 = Math_fround(0), $188 = Math_fround(0), $189 = Math_fround(0), $19 = Math_fround(0), $190 = Math_fround(0), $191 = Math_fround(0), $192 = Math_fround(0), $193 = Math_fround(0), $194 = Math_fround(0);
 var $195 = Math_fround(0), $196 = 0, $197 = 0, $198 = 0, $199 = Math_fround(0), $20 = 0, $200 = Math_fround(0), $201 = Math_fround(0), $202 = Math_fround(0), $203 = Math_fround(0), $204 = Math_fround(0), $205 = Math_fround(0), $206 = Math_fround(0), $207 = Math_fround(0), $208 = Math_fround(0), $209 = Math_fround(0), $21 = Math_fround(0), $210 = Math_fround(0), $211 = Math_fround(0), $212 = Math_fround(0);
 var $213 = Math_fround(0), $214 = 0, $215 = Math_fround(0), $216 = Math_fround(0), $217 = Math_fround(0), $218 = 0, $219 = 0, $22 = Math_fround(0), $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = Math_fround(0), $23 = 0, $230 = 0;
 var $231 = Math_fround(0), $232 = 0, $233 = Math_fround(0), $234 = Math_fround(0), $235 = Math_fround(0), $236 = Math_fround(0), $237 = Math_fround(0), $238 = 0, $239 = Math_fround(0), $24 = Math_fround(0), $240 = Math_fround(0), $241 = Math_fround(0), $242 = Math_fround(0), $243 = 0, $244 = Math_fround(0), $245 = Math_fround(0), $246 = Math_fround(0), $247 = Math_fround(0), $248 = Math_fround(0), $249 = Math_fround(0);
 var $25 = Math_fround(0), $250 = Math_fround(0), $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = Math_fround(0), $259 = Math_fround(0), $26 = Math_fround(0), $260 = Math_fround(0), $261 = Math_fround(0), $262 = Math_fround(0), $263 = Math_fround(0), $264 = Math_fround(0), $265 = Math_fround(0), $266 = Math_fround(0), $267 = Math_fround(0);
 var $268 = Math_fround(0), $269 = Math_fround(0), $27 = Math_fround(0), $270 = Math_fround(0), $271 = Math_fround(0), $272 = Math_fround(0), $273 = Math_fround(0), $274 = 0, $275 = 0, $276 = 0, $277 = Math_fround(0), $278 = Math_fround(0), $279 = Math_fround(0), $28 = 0, $280 = Math_fround(0), $281 = Math_fround(0), $282 = Math_fround(0), $283 = Math_fround(0), $284 = Math_fround(0), $285 = Math_fround(0);
 var $286 = Math_fround(0), $287 = Math_fround(0), $288 = Math_fround(0), $289 = Math_fround(0), $29 = Math_fround(0), $290 = Math_fround(0), $291 = Math_fround(0), $292 = 0, $293 = Math_fround(0), $294 = Math_fround(0), $295 = Math_fround(0), $30 = Math_fround(0), $31 = 0, $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0);
 var $39 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = 0, $49 = Math_fround(0), $50 = Math_fround(0), $51 = 0, $52 = Math_fround(0), $53 = Math_fround(0), $54 = 0, $55 = Math_fround(0), $56 = Math_fround(0), $57 = 0, $58 = Math_fround(0);
 var $59 = Math_fround(0), $60 = Math_fround(0), $61 = Math_fround(0), $62 = 0, $63 = Math_fround(0), $64 = Math_fround(0), $65 = 0, $66 = Math_fround(0), $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = 0, $74 = Math_fround(0), $75 = Math_fround(0), $76 = Math_fround(0), $77 = Math_fround(0);
 var $78 = Math_fround(0), $79 = Math_fround(0), $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0), $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0;
 var $96 = 0, $97 = 0, $98 = Math_fround(0), $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($0,$2);
 $7 = ((($0)) + 4|0);
 store4($7,$4);
 $8 = ((($1)) + 4|0);
 $9 = load2($8);
 $$off = (($9) + -1)<<16>>16;
 $10 = ($$off&65535)<(2);
 if (!($10)) {
  ___assert_fail((5375|0),(5221|0),50,(6341|0));
  // unreachable;
 }
 $11 = ((($0)) + 8|0);
 ; store8($11,load8($3,4),4); store8($11+8 | 0,load8($3+8 | 0,4),4); store8($11+16 | 0,load8($3+16 | 0,4),4); store8($11+24 | 0,load8($3+24 | 0,4),4); store4($11+32 | 0,load4($3+32 | 0,4),4);
 $12 = ((($0)) + 44|0);
 ; store8($12,load8($5,4),4); store8($12+8 | 0,load8($5+8 | 0,4),4); store8($12+16 | 0,load8($5+16 | 0,4),4); store8($12+24 | 0,load8($5+24 | 0,4),4); store4($12+32 | 0,load4($5+32 | 0,4),4);
 $13 = Math_fround(Math_fround(1.0) - $6);
 $14 = ((($0)) + 16|0);
 $15 = loadf($14);
 $16 = Math_fround($13 * $15);
 $17 = ((($0)) + 20|0);
 $18 = loadf($17);
 $19 = Math_fround($13 * $18);
 $20 = ((($0)) + 24|0);
 $21 = loadf($20);
 $22 = Math_fround($21 * $6);
 $23 = ((($0)) + 28|0);
 $24 = loadf($23);
 $25 = Math_fround($24 * $6);
 $26 = Math_fround($16 + $22);
 $27 = Math_fround($19 + $25);
 $28 = ((($0)) + 32|0);
 $29 = loadf($28);
 $30 = Math_fround($13 * $29);
 $31 = ((($0)) + 36|0);
 $32 = loadf($31);
 $33 = Math_fround($32 * $6);
 $34 = Math_fround($30 + $33);
 $35 = (Math_fround(_sinf($34)));
 $36 = (Math_fround(_cosf($34)));
 $37 = loadf($11);
 $38 = Math_fround($36 * $37);
 $39 = ((($0)) + 12|0);
 $40 = loadf($39);
 $41 = Math_fround($35 * $40);
 $42 = Math_fround($38 - $41);
 $43 = Math_fround($35 * $37);
 $44 = Math_fround($36 * $40);
 $45 = Math_fround($43 + $44);
 $46 = Math_fround($26 - $42);
 $47 = Math_fround($27 - $45);
 $48 = ((($0)) + 52|0);
 $49 = loadf($48);
 $50 = Math_fround($13 * $49);
 $51 = ((($0)) + 56|0);
 $52 = loadf($51);
 $53 = Math_fround($13 * $52);
 $54 = ((($0)) + 60|0);
 $55 = loadf($54);
 $56 = Math_fround($55 * $6);
 $57 = ((($0)) + 64|0);
 $58 = loadf($57);
 $59 = Math_fround($58 * $6);
 $60 = Math_fround($50 + $56);
 $61 = Math_fround($53 + $59);
 $62 = ((($0)) + 68|0);
 $63 = loadf($62);
 $64 = Math_fround($13 * $63);
 $65 = ((($0)) + 72|0);
 $66 = loadf($65);
 $67 = Math_fround($66 * $6);
 $68 = Math_fround($64 + $67);
 $69 = (Math_fround(_sinf($68)));
 $70 = (Math_fround(_cosf($68)));
 $71 = loadf($12);
 $72 = Math_fround($70 * $71);
 $73 = ((($0)) + 48|0);
 $74 = loadf($73);
 $75 = Math_fround($69 * $74);
 $76 = Math_fround($72 - $75);
 $77 = Math_fround($69 * $71);
 $78 = Math_fround($70 * $74);
 $79 = Math_fround($77 + $78);
 $80 = Math_fround($60 - $76);
 $81 = Math_fround($61 - $79);
 $82 = ($9<<16>>16)==(1);
 if ($82) {
  $83 = ((($0)) + 80|0);
  store4($83,0);
  $84 = ((($1)) + 6|0);
  $85 = load1($84);
  $86 = $85&255;
  $87 = ((($2)) + 20|0);
  $88 = load4($87);
  $89 = ($88|0)>($86|0);
  if (!($89)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $90 = ((($2)) + 16|0);
  $91 = load4($90);
  $92 = ((($1)) + 9|0);
  $93 = load1($92);
  $94 = $93&255;
  $95 = ((($4)) + 20|0);
  $96 = load4($95);
  $97 = ($96|0)>($94|0);
  if (!($97)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $$sroa_idx260 = (((($91) + ($86<<3)|0)) + 4|0);
  $98 = loadf($$sroa_idx260);
  $99 = (($91) + ($86<<3)|0);
  $100 = loadf($99);
  $101 = ((($4)) + 16|0);
  $102 = load4($101);
  $103 = (($102) + ($94<<3)|0);
  $104 = loadf($103);
  $$sroa_idx251 = (((($102) + ($94<<3)|0)) + 4|0);
  $105 = loadf($$sroa_idx251);
  $106 = Math_fround($36 * $100);
  $107 = Math_fround($35 * $98);
  $108 = Math_fround($106 - $107);
  $109 = Math_fround($46 + $108);
  $110 = Math_fround($35 * $100);
  $111 = Math_fround($36 * $98);
  $112 = Math_fround($111 + $110);
  $113 = Math_fround($47 + $112);
  $114 = Math_fround($70 * $104);
  $115 = Math_fround($69 * $105);
  $116 = Math_fround($114 - $115);
  $117 = Math_fround($80 + $116);
  $118 = Math_fround($69 * $104);
  $119 = Math_fround($70 * $105);
  $120 = Math_fround($118 + $119);
  $121 = Math_fround($81 + $120);
  $122 = Math_fround($117 - $109);
  $123 = Math_fround($121 - $113);
  $124 = ((($0)) + 92|0);
  storef($124,$122);
  $$sroa_idx235 = ((($0)) + 96|0);
  storef($$sroa_idx235,$123);
  $125 = Math_fround($122 * $122);
  $126 = Math_fround($123 * $123);
  $127 = Math_fround($125 + $126);
  $128 = (Math_fround(Math_sqrt((Math_fround($127)))));
  $129 = $128 < Math_fround(1.1920929E-7);
  if ($129) {
   $$040 = Math_fround(0.0);
   return (Math_fround($$040));
  }
  $130 = Math_fround(Math_fround(1.0) / $128);
  $131 = Math_fround($122 * $130);
  storef($124,$131);
  $132 = Math_fround($130 * $123);
  storef($$sroa_idx235,$132);
  $$040 = $128;
  return (Math_fround($$040));
 }
 $133 = ((($1)) + 6|0);
 $134 = load2($133);
 $135 = $134&255;
 $136 = ($134&65535) >>> 8;
 $137 = $136&255;
 $138 = ($135<<24>>24)==($137<<24>>24);
 $139 = ((($0)) + 80|0);
 if ($138) {
  store4($139,2);
  $140 = ((($1)) + 9|0);
  $141 = load1($140);
  $142 = $141&255;
  $143 = ((($4)) + 20|0);
  $144 = load4($143);
  $145 = ($144|0)>($142|0);
  if (!($145)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $146 = ((($4)) + 16|0);
  $147 = load4($146);
  $148 = ((($1)) + 10|0);
  $149 = load1($148);
  $150 = $149&255;
  $151 = ($144|0)>($150|0);
  if (!($151)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $$sroa_idx222 = (((($147) + ($142<<3)|0)) + 4|0);
  $152 = loadf($$sroa_idx222);
  $153 = (($147) + ($142<<3)|0);
  $154 = loadf($153);
  $155 = (($147) + ($150<<3)|0);
  $156 = loadf($155);
  $$sroa_idx211 = (((($147) + ($150<<3)|0)) + 4|0);
  $157 = loadf($$sroa_idx211);
  $158 = Math_fround($156 - $154);
  $159 = Math_fround($157 - $152);
  $160 = Math_fround(-$158);
  $161 = ((($0)) + 92|0);
  storef($161,$159);
  $$sroa_idx203 = ((($0)) + 96|0);
  storef($$sroa_idx203,$160);
  $162 = Math_fround($159 * $159);
  $163 = Math_fround($158 * $158);
  $164 = Math_fround($163 + $162);
  $165 = (Math_fround(Math_sqrt((Math_fround($164)))));
  $166 = $165 < Math_fround(1.1920929E-7);
  if ($166) {
   $189 = $159;$191 = $160;
  } else {
   $167 = Math_fround(Math_fround(1.0) / $165);
   $168 = Math_fround($159 * $167);
   storef($161,$168);
   $169 = Math_fround($167 * $160);
   storef($$sroa_idx203,$169);
   $189 = $168;$191 = $169;
  }
  $170 = Math_fround($154 + $156);
  $171 = Math_fround($152 + $157);
  $172 = Math_fround($170 * Math_fround(0.5));
  $173 = Math_fround($171 * Math_fround(0.5));
  $174 = ((($0)) + 84|0);
  storef($174,$172);
  $$sroa_idx185 = ((($0)) + 88|0);
  storef($$sroa_idx185,$173);
  $175 = load1($133);
  $176 = $175&255;
  $177 = ((($2)) + 20|0);
  $178 = load4($177);
  $179 = ($178|0)>($176|0);
  if (!($179)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $180 = Math_fround($69 * $172);
  $181 = Math_fround($70 * $173);
  $182 = Math_fround($180 + $181);
  $183 = Math_fround($81 + $182);
  $184 = Math_fround($70 * $172);
  $185 = Math_fround($69 * $173);
  $186 = Math_fround($184 - $185);
  $187 = Math_fround($80 + $186);
  $188 = Math_fround($69 * $189);
  $190 = Math_fround($70 * $191);
  $192 = Math_fround($188 + $190);
  $193 = Math_fround($70 * $189);
  $194 = Math_fround($69 * $191);
  $195 = Math_fround($193 - $194);
  $196 = ((($2)) + 16|0);
  $197 = load4($196);
  $198 = (($197) + ($176<<3)|0);
  $199 = loadf($198);
  $$sroa_idx166 = (((($197) + ($176<<3)|0)) + 4|0);
  $200 = loadf($$sroa_idx166);
  $201 = Math_fround($36 * $199);
  $202 = Math_fround($35 * $200);
  $203 = Math_fround($201 - $202);
  $204 = Math_fround($46 + $203);
  $205 = Math_fround($35 * $199);
  $206 = Math_fround($36 * $200);
  $207 = Math_fround($205 + $206);
  $208 = Math_fround($47 + $207);
  $209 = Math_fround($204 - $187);
  $210 = Math_fround($208 - $183);
  $211 = Math_fround($195 * $209);
  $212 = Math_fround($192 * $210);
  $213 = Math_fround($211 + $212);
  $214 = $213 < Math_fround(0.0);
  if (!($214)) {
   $$040 = $213;
   return (Math_fround($$040));
  }
  $215 = Math_fround(-$189);
  $216 = Math_fround(-$191);
  storef($161,$215);
  storef($$sroa_idx203,$216);
  $217 = Math_fround(-$213);
  $$040 = $217;
  return (Math_fround($$040));
 } else {
  store4($139,1);
  $218 = load2($133);
  $219 = $218&65535;
  $220 = $219 & 255;
  $221 = ((($2)) + 20|0);
  $222 = load4($221);
  $223 = ($222|0)>($220|0);
  if (!($223)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $224 = ($218&65535) >>> 8;
  $225 = $224&65535;
  $226 = ((($2)) + 16|0);
  $227 = load4($226);
  $228 = ($222|0)>($225|0);
  if (!($228)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $$sroa_idx137 = (((($227) + ($220<<3)|0)) + 4|0);
  $229 = loadf($$sroa_idx137);
  $230 = (($227) + ($220<<3)|0);
  $231 = loadf($230);
  $232 = (($227) + ($225<<3)|0);
  $233 = loadf($232);
  $$sroa_idx127 = (((($227) + ($225<<3)|0)) + 4|0);
  $234 = loadf($$sroa_idx127);
  $235 = Math_fround($233 - $231);
  $236 = Math_fround($234 - $229);
  $237 = Math_fround(-$235);
  $238 = ((($0)) + 92|0);
  storef($238,$236);
  $$sroa_idx119 = ((($0)) + 96|0);
  storef($$sroa_idx119,$237);
  $239 = Math_fround($236 * $236);
  $240 = Math_fround($235 * $235);
  $241 = Math_fround($240 + $239);
  $242 = (Math_fround(Math_sqrt((Math_fround($241)))));
  $243 = $242 < Math_fround(1.1920929E-7);
  if ($243) {
   $267 = $236;$269 = $237;
  } else {
   $244 = Math_fround(Math_fround(1.0) / $242);
   $245 = Math_fround($236 * $244);
   storef($238,$245);
   $246 = Math_fround($244 * $237);
   storef($$sroa_idx119,$246);
   $267 = $245;$269 = $246;
  }
  $247 = Math_fround($231 + $233);
  $248 = Math_fround($229 + $234);
  $249 = Math_fround($247 * Math_fround(0.5));
  $250 = Math_fround($248 * Math_fround(0.5));
  $251 = ((($0)) + 84|0);
  storef($251,$249);
  $$sroa_idx101 = ((($0)) + 88|0);
  storef($$sroa_idx101,$250);
  $252 = ((($1)) + 9|0);
  $253 = load1($252);
  $254 = $253&255;
  $255 = ((($4)) + 20|0);
  $256 = load4($255);
  $257 = ($256|0)>($254|0);
  if (!($257)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $258 = Math_fround($35 * $249);
  $259 = Math_fround($36 * $250);
  $260 = Math_fround($258 + $259);
  $261 = Math_fround($47 + $260);
  $262 = Math_fround($36 * $249);
  $263 = Math_fround($35 * $250);
  $264 = Math_fround($262 - $263);
  $265 = Math_fround($46 + $264);
  $266 = Math_fround($35 * $267);
  $268 = Math_fround($36 * $269);
  $270 = Math_fround($266 + $268);
  $271 = Math_fround($36 * $267);
  $272 = Math_fround($35 * $269);
  $273 = Math_fround($271 - $272);
  $274 = ((($4)) + 16|0);
  $275 = load4($274);
  $276 = (($275) + ($254<<3)|0);
  $277 = loadf($276);
  $$sroa_idx82 = (((($275) + ($254<<3)|0)) + 4|0);
  $278 = loadf($$sroa_idx82);
  $279 = Math_fround($70 * $277);
  $280 = Math_fround($69 * $278);
  $281 = Math_fround($279 - $280);
  $282 = Math_fround($80 + $281);
  $283 = Math_fround($69 * $277);
  $284 = Math_fround($70 * $278);
  $285 = Math_fround($283 + $284);
  $286 = Math_fround($81 + $285);
  $287 = Math_fround($282 - $265);
  $288 = Math_fround($286 - $261);
  $289 = Math_fround($273 * $287);
  $290 = Math_fround($270 * $288);
  $291 = Math_fround($289 + $290);
  $292 = $291 < Math_fround(0.0);
  if (!($292)) {
   $$040 = $291;
   return (Math_fround($$040));
  }
  $293 = Math_fround(-$267);
  $294 = Math_fround(-$269);
  storef($238,$293);
  storef($$sroa_idx119,$294);
  $295 = Math_fround(-$291);
  $$040 = $295;
  return (Math_fround($$040));
 }
 return Math_fround((Math_fround(0.0)));
}
function __ZNK20b2SeparationFunction17FindMinSeparationEPiS0_f($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = Math_fround($3);
 var $$0 = Math_fround(0), $$0$lcssa$i202 = 0, $$0$lcssa$i28201 = 0, $$0$lcssa$i37 = 0, $$0$lcssa$i46 = 0, $$01721$i = 0, $$01721$i30 = 0, $$01721$i39 = 0, $$01721$i48 = 0, $$01820$i = Math_fround(0), $$01820$i31 = Math_fround(0), $$01820$i40 = Math_fround(0), $$01820$i49 = Math_fround(0), $$022$i = 0, $$022$i29 = 0, $$022$i38 = 0, $$022$i47 = 0, $$1$i = 0, $$1$i33 = 0, $$1$i42 = 0;
 var $$1$i51 = 0, $$119$i = Math_fround(0), $$119$i32 = Math_fround(0), $$119$i41 = Math_fround(0), $$119$i50 = Math_fround(0), $$sroa_idx = 0, $$sroa_idx132 = 0, $$sroa_idx141 = 0, $$sroa_idx93 = 0, $10 = Math_fround(0), $100 = 0, $101 = Math_fround(0), $102 = Math_fround(0), $103 = 0, $104 = Math_fround(0), $105 = Math_fround(0), $106 = Math_fround(0), $107 = 0, $108 = Math_fround(0), $109 = Math_fround(0);
 var $11 = 0, $110 = 0, $111 = Math_fround(0), $112 = Math_fround(0), $113 = Math_fround(0), $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = Math_fround(0), $120 = 0, $121 = 0, $122 = 0, $123 = Math_fround(0), $124 = Math_fround(0), $125 = 0, $126 = Math_fround(0), $127 = Math_fround(0);
 var $128 = Math_fround(0), $129 = 0, $13 = Math_fround(0), $130 = Math_fround(0), $131 = Math_fround(0), $132 = 0, $133 = Math_fround(0), $134 = Math_fround(0), $135 = Math_fround(0), $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = Math_fround(0), $144 = Math_fround(0), $145 = 0;
 var $146 = 0, $147 = 0, $148 = 0, $149 = Math_fround(0), $15 = Math_fround(0), $150 = Math_fround(0), $151 = Math_fround(0), $152 = Math_fround(0), $153 = Math_fround(0), $154 = Math_fround(0), $155 = Math_fround(0), $156 = Math_fround(0), $157 = Math_fround(0), $158 = Math_fround(0), $159 = Math_fround(0), $16 = Math_fround(0), $160 = Math_fround(0), $161 = Math_fround(0), $162 = Math_fround(0), $163 = Math_fround(0);
 var $164 = Math_fround(0), $165 = Math_fround(0), $166 = Math_fround(0), $167 = Math_fround(0), $168 = Math_fround(0), $169 = Math_fround(0), $17 = Math_fround(0), $170 = Math_fround(0), $171 = Math_fround(0), $172 = Math_fround(0), $173 = Math_fround(0), $174 = 0, $175 = Math_fround(0), $176 = Math_fround(0), $177 = 0, $178 = Math_fround(0), $179 = Math_fround(0), $18 = Math_fround(0), $180 = Math_fround(0), $181 = Math_fround(0);
 var $182 = Math_fround(0), $183 = Math_fround(0), $184 = 0, $185 = Math_fround(0), $186 = Math_fround(0), $187 = 0, $188 = Math_fround(0), $189 = Math_fround(0), $19 = 0, $190 = Math_fround(0), $191 = Math_fround(0), $192 = Math_fround(0), $193 = Math_fround(0), $194 = Math_fround(0), $195 = Math_fround(0), $196 = Math_fround(0), $197 = Math_fround(0), $198 = Math_fround(0), $199 = Math_fround(0), $20 = Math_fround(0);
 var $200 = Math_fround(0), $201 = Math_fround(0), $202 = Math_fround(0), $203 = Math_fround(0), $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = Math_fround(0), $210 = 0, $211 = Math_fround(0), $212 = Math_fround(0), $213 = 0, $214 = Math_fround(0), $215 = Math_fround(0), $216 = Math_fround(0), $217 = 0, $218 = Math_fround(0);
 var $219 = Math_fround(0), $22 = 0, $220 = 0, $221 = Math_fround(0), $222 = Math_fround(0), $223 = Math_fround(0), $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = Math_fround(0), $230 = Math_fround(0), $231 = Math_fround(0), $232 = Math_fround(0), $233 = Math_fround(0), $234 = Math_fround(0), $235 = Math_fround(0), $236 = Math_fround(0);
 var $237 = Math_fround(0), $238 = Math_fround(0), $239 = Math_fround(0), $24 = Math_fround(0), $240 = Math_fround(0), $241 = Math_fround(0), $242 = Math_fround(0), $243 = Math_fround(0), $244 = Math_fround(0), $245 = 0, $246 = Math_fround(0), $247 = Math_fround(0), $248 = 0, $249 = Math_fround(0), $25 = Math_fround(0), $250 = Math_fround(0), $251 = Math_fround(0), $252 = Math_fround(0), $253 = Math_fround(0), $254 = Math_fround(0);
 var $255 = 0, $256 = Math_fround(0), $257 = Math_fround(0), $258 = 0, $259 = Math_fround(0), $26 = Math_fround(0), $260 = Math_fround(0), $261 = Math_fround(0), $262 = Math_fround(0), $263 = Math_fround(0), $264 = Math_fround(0), $265 = Math_fround(0), $266 = Math_fround(0), $267 = Math_fround(0), $268 = Math_fround(0), $269 = Math_fround(0), $27 = Math_fround(0), $270 = Math_fround(0), $271 = Math_fround(0), $272 = Math_fround(0);
 var $273 = Math_fround(0), $274 = Math_fround(0), $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = Math_fround(0), $282 = Math_fround(0), $283 = 0, $284 = Math_fround(0), $285 = Math_fround(0), $286 = Math_fround(0), $287 = 0, $288 = Math_fround(0), $289 = Math_fround(0), $29 = Math_fround(0), $290 = 0;
 var $291 = Math_fround(0), $292 = Math_fround(0), $293 = Math_fround(0), $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $30 = Math_fround(0), $300 = Math_fround(0), $301 = Math_fround(0), $302 = Math_fround(0), $303 = Math_fround(0), $304 = Math_fround(0), $305 = Math_fround(0), $306 = Math_fround(0), $307 = Math_fround(0), $308 = Math_fround(0), $309 = Math_fround(0);
 var $31 = 0, $310 = Math_fround(0), $311 = Math_fround(0), $312 = Math_fround(0), $313 = Math_fround(0), $314 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $4 = Math_fround(0), $40 = 0, $41 = Math_fround(0), $42 = Math_fround(0), $43 = 0, $44 = Math_fround(0);
 var $45 = Math_fround(0), $46 = 0, $47 = Math_fround(0), $48 = Math_fround(0), $49 = 0, $5 = 0, $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = 0, $55 = Math_fround(0), $56 = Math_fround(0), $57 = 0, $58 = Math_fround(0), $59 = Math_fround(0), $6 = Math_fround(0), $60 = Math_fround(0), $61 = Math_fround(0), $62 = Math_fround(0);
 var $63 = 0, $64 = Math_fround(0), $65 = Math_fround(0), $66 = 0, $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = Math_fround(0), $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = 0, $76 = 0, $77 = 0, $78 = Math_fround(0), $79 = Math_fround(0), $8 = 0, $80 = 0;
 var $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = Math_fround(0), $85 = Math_fround(0), $86 = Math_fround(0), $87 = Math_fround(0), $88 = Math_fround(0), $89 = Math_fround(0), $9 = Math_fround(0), $90 = Math_fround(0), $91 = Math_fround(0), $92 = Math_fround(0), $93 = Math_fround(0), $94 = Math_fround(0), $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0;
 var $exitcond = 0, $exitcond203 = 0, $exitcond204 = 0, $exitcond205 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = Math_fround(Math_fround(1.0) - $3);
 $5 = ((($0)) + 16|0);
 $6 = loadf($5);
 $7 = Math_fround($4 * $6);
 $8 = ((($0)) + 20|0);
 $9 = loadf($8);
 $10 = Math_fround($4 * $9);
 $11 = ((($0)) + 24|0);
 $12 = loadf($11);
 $13 = Math_fround($12 * $3);
 $14 = ((($0)) + 28|0);
 $15 = loadf($14);
 $16 = Math_fround($15 * $3);
 $17 = Math_fround($7 + $13);
 $18 = Math_fround($10 + $16);
 $19 = ((($0)) + 32|0);
 $20 = loadf($19);
 $21 = Math_fround($4 * $20);
 $22 = ((($0)) + 36|0);
 $23 = loadf($22);
 $24 = Math_fround($23 * $3);
 $25 = Math_fround($21 + $24);
 $26 = (Math_fround(_sinf($25)));
 $27 = (Math_fround(_cosf($25)));
 $28 = ((($0)) + 8|0);
 $29 = loadf($28);
 $30 = Math_fround($27 * $29);
 $31 = ((($0)) + 12|0);
 $32 = loadf($31);
 $33 = Math_fround($26 * $32);
 $34 = Math_fround($30 - $33);
 $35 = Math_fround($26 * $29);
 $36 = Math_fround($27 * $32);
 $37 = Math_fround($35 + $36);
 $38 = Math_fround($17 - $34);
 $39 = Math_fround($18 - $37);
 $40 = ((($0)) + 52|0);
 $41 = loadf($40);
 $42 = Math_fround($4 * $41);
 $43 = ((($0)) + 56|0);
 $44 = loadf($43);
 $45 = Math_fround($4 * $44);
 $46 = ((($0)) + 60|0);
 $47 = loadf($46);
 $48 = Math_fround($47 * $3);
 $49 = ((($0)) + 64|0);
 $50 = loadf($49);
 $51 = Math_fround($50 * $3);
 $52 = Math_fround($42 + $48);
 $53 = Math_fround($45 + $51);
 $54 = ((($0)) + 68|0);
 $55 = loadf($54);
 $56 = Math_fround($4 * $55);
 $57 = ((($0)) + 72|0);
 $58 = loadf($57);
 $59 = Math_fround($58 * $3);
 $60 = Math_fround($56 + $59);
 $61 = (Math_fround(_sinf($60)));
 $62 = (Math_fround(_cosf($60)));
 $63 = ((($0)) + 44|0);
 $64 = loadf($63);
 $65 = Math_fround($62 * $64);
 $66 = ((($0)) + 48|0);
 $67 = loadf($66);
 $68 = Math_fround($61 * $67);
 $69 = Math_fround($65 - $68);
 $70 = Math_fround($61 * $64);
 $71 = Math_fround($62 * $67);
 $72 = Math_fround($70 + $71);
 $73 = Math_fround($52 - $69);
 $74 = Math_fround($53 - $72);
 $75 = ((($0)) + 80|0);
 $76 = load4($75);
 switch ($76|0) {
 case 0:  {
  $77 = ((($0)) + 92|0);
  $78 = loadf($77);
  $79 = Math_fround($27 * $78);
  $80 = ((($0)) + 96|0);
  $81 = loadf($80);
  $82 = Math_fround($26 * $81);
  $83 = Math_fround($79 + $82);
  $84 = Math_fround($26 * $78);
  $85 = Math_fround($27 * $81);
  $86 = Math_fround($85 - $84);
  $87 = Math_fround(-$78);
  $88 = Math_fround(-$81);
  $89 = Math_fround($62 * $87);
  $90 = Math_fround($61 * $88);
  $91 = Math_fround($89 + $90);
  $92 = Math_fround($61 * $87);
  $93 = Math_fround($62 * $88);
  $94 = Math_fround($93 - $92);
  $95 = load4($0);
  $96 = ((($95)) + 16|0);
  $97 = load4($96);
  $98 = ((($95)) + 20|0);
  $99 = load4($98);
  $100 = ($99|0)>(1);
  if ($100) {
   $101 = loadf($97);
   $102 = Math_fround($83 * $101);
   $103 = ((($97)) + 4|0);
   $104 = loadf($103);
   $105 = Math_fround($86 * $104);
   $106 = Math_fround($102 + $105);
   $$01721$i39 = 1;$$01820$i40 = $106;$$022$i38 = 0;
   while(1) {
    $107 = (($97) + ($$01721$i39<<3)|0);
    $108 = loadf($107);
    $109 = Math_fround($83 * $108);
    $110 = (((($97) + ($$01721$i39<<3)|0)) + 4|0);
    $111 = loadf($110);
    $112 = Math_fround($86 * $111);
    $113 = Math_fround($109 + $112);
    $114 = $113 > $$01820$i40;
    $$119$i41 = $114 ? $113 : $$01820$i40;
    $$1$i42 = $114 ? $$01721$i39 : $$022$i38;
    $115 = (($$01721$i39) + 1)|0;
    $exitcond203 = ($115|0)==($99|0);
    if ($exitcond203) {
     $$0$lcssa$i37 = $$1$i42;
     break;
    } else {
     $$01721$i39 = $115;$$01820$i40 = $$119$i41;$$022$i38 = $$1$i42;
    }
   }
  } else {
   $$0$lcssa$i37 = 0;
  }
  store4($1,$$0$lcssa$i37);
  $116 = ((($0)) + 4|0);
  $117 = load4($116);
  $118 = ((($117)) + 16|0);
  $119 = load4($118);
  $120 = ((($117)) + 20|0);
  $121 = load4($120);
  $122 = ($121|0)>(1);
  if ($122) {
   $123 = loadf($119);
   $124 = Math_fround($91 * $123);
   $125 = ((($119)) + 4|0);
   $126 = loadf($125);
   $127 = Math_fround($94 * $126);
   $128 = Math_fround($124 + $127);
   $$01721$i48 = 1;$$01820$i49 = $128;$$022$i47 = 0;
   while(1) {
    $129 = (($119) + ($$01721$i48<<3)|0);
    $130 = loadf($129);
    $131 = Math_fround($91 * $130);
    $132 = (((($119) + ($$01721$i48<<3)|0)) + 4|0);
    $133 = loadf($132);
    $134 = Math_fround($94 * $133);
    $135 = Math_fround($131 + $134);
    $136 = $135 > $$01820$i49;
    $$119$i50 = $136 ? $135 : $$01820$i49;
    $$1$i51 = $136 ? $$01721$i48 : $$022$i47;
    $137 = (($$01721$i48) + 1)|0;
    $exitcond = ($137|0)==($121|0);
    if ($exitcond) {
     $$0$lcssa$i46 = $$1$i51;
     break;
    } else {
     $$01721$i48 = $137;$$01820$i49 = $$119$i50;$$022$i47 = $$1$i51;
    }
   }
  } else {
   $$0$lcssa$i46 = 0;
  }
  store4($2,$$0$lcssa$i46);
  $138 = load4($1);
  $139 = ($138|0)>(-1);
  if (!($139)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $140 = load4($98);
  $141 = ($140|0)>($138|0);
  if (!($141)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $142 = (($97) + ($138<<3)|0);
  $143 = loadf($142);
  $$sroa_idx141 = (((($97) + ($138<<3)|0)) + 4|0);
  $144 = loadf($$sroa_idx141);
  $145 = ($$0$lcssa$i46|0)>(-1);
  if (!($145)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $146 = load4($120);
  $147 = ($146|0)>($$0$lcssa$i46|0);
  if (!($147)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $148 = (($119) + ($$0$lcssa$i46<<3)|0);
  $149 = loadf($148);
  $$sroa_idx132 = (((($119) + ($$0$lcssa$i46<<3)|0)) + 4|0);
  $150 = loadf($$sroa_idx132);
  $151 = Math_fround($27 * $143);
  $152 = Math_fround($26 * $144);
  $153 = Math_fround($151 - $152);
  $154 = Math_fround($38 + $153);
  $155 = Math_fround($26 * $143);
  $156 = Math_fround($27 * $144);
  $157 = Math_fround($155 + $156);
  $158 = Math_fround($39 + $157);
  $159 = Math_fround($62 * $149);
  $160 = Math_fround($61 * $150);
  $161 = Math_fround($159 - $160);
  $162 = Math_fround($73 + $161);
  $163 = Math_fround($61 * $149);
  $164 = Math_fround($62 * $150);
  $165 = Math_fround($163 + $164);
  $166 = Math_fround($74 + $165);
  $167 = Math_fround($162 - $154);
  $168 = Math_fround($166 - $158);
  $169 = loadf($77);
  $170 = Math_fround($169 * $167);
  $171 = loadf($80);
  $172 = Math_fround($171 * $168);
  $173 = Math_fround($170 + $172);
  $$0 = $173;
  return (Math_fround($$0));
  break;
 }
 case 1:  {
  $174 = ((($0)) + 92|0);
  $175 = loadf($174);
  $176 = Math_fround($27 * $175);
  $177 = ((($0)) + 96|0);
  $178 = loadf($177);
  $179 = Math_fround($26 * $178);
  $180 = Math_fround($176 - $179);
  $181 = Math_fround($26 * $175);
  $182 = Math_fround($27 * $178);
  $183 = Math_fround($181 + $182);
  $184 = ((($0)) + 84|0);
  $185 = loadf($184);
  $186 = Math_fround($27 * $185);
  $187 = ((($0)) + 88|0);
  $188 = loadf($187);
  $189 = Math_fround($26 * $188);
  $190 = Math_fround($186 - $189);
  $191 = Math_fround($38 + $190);
  $192 = Math_fround($26 * $185);
  $193 = Math_fround($27 * $188);
  $194 = Math_fround($192 + $193);
  $195 = Math_fround($39 + $194);
  $196 = Math_fround(-$180);
  $197 = Math_fround(-$183);
  $198 = Math_fround($62 * $196);
  $199 = Math_fround($61 * $197);
  $200 = Math_fround($198 + $199);
  $201 = Math_fround($61 * $196);
  $202 = Math_fround($62 * $197);
  $203 = Math_fround($202 - $201);
  store4($1,-1);
  $204 = ((($0)) + 4|0);
  $205 = load4($204);
  $206 = ((($205)) + 16|0);
  $207 = load4($206);
  $208 = ((($205)) + 20|0);
  $209 = load4($208);
  $210 = ($209|0)>(1);
  if ($210) {
   $211 = loadf($207);
   $212 = Math_fround($200 * $211);
   $213 = ((($207)) + 4|0);
   $214 = loadf($213);
   $215 = Math_fround($203 * $214);
   $216 = Math_fround($212 + $215);
   $$01721$i30 = 1;$$01820$i31 = $216;$$022$i29 = 0;
   while(1) {
    $217 = (($207) + ($$01721$i30<<3)|0);
    $218 = loadf($217);
    $219 = Math_fround($200 * $218);
    $220 = (((($207) + ($$01721$i30<<3)|0)) + 4|0);
    $221 = loadf($220);
    $222 = Math_fround($203 * $221);
    $223 = Math_fround($219 + $222);
    $224 = $223 > $$01820$i31;
    $$119$i32 = $224 ? $223 : $$01820$i31;
    $$1$i33 = $224 ? $$01721$i30 : $$022$i29;
    $225 = (($$01721$i30) + 1)|0;
    $exitcond204 = ($225|0)==($209|0);
    if ($exitcond204) {
     break;
    } else {
     $$01721$i30 = $225;$$01820$i31 = $$119$i32;$$022$i29 = $$1$i33;
    }
   }
   store4($2,$$1$i33);
   $226 = ($$1$i33|0)>(-1);
   if ($226) {
    $$0$lcssa$i28201 = $$1$i33;
   } else {
    ___assert_fail((5271|0),(5301|0),103,(5332|0));
    // unreachable;
   }
  } else {
   store4($2,0);
   $$0$lcssa$i28201 = 0;
  }
  $227 = load4($208);
  $228 = ($227|0)>($$0$lcssa$i28201|0);
  if (!($228)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $229 = (($207) + ($$0$lcssa$i28201<<3)|0);
  $230 = loadf($229);
  $$sroa_idx93 = (((($207) + ($$0$lcssa$i28201<<3)|0)) + 4|0);
  $231 = loadf($$sroa_idx93);
  $232 = Math_fround($62 * $230);
  $233 = Math_fround($61 * $231);
  $234 = Math_fround($232 - $233);
  $235 = Math_fround($73 + $234);
  $236 = Math_fround($61 * $230);
  $237 = Math_fround($62 * $231);
  $238 = Math_fround($236 + $237);
  $239 = Math_fround($74 + $238);
  $240 = Math_fround($235 - $191);
  $241 = Math_fround($239 - $195);
  $242 = Math_fround($180 * $240);
  $243 = Math_fround($183 * $241);
  $244 = Math_fround($242 + $243);
  $$0 = $244;
  return (Math_fround($$0));
  break;
 }
 case 2:  {
  $245 = ((($0)) + 92|0);
  $246 = loadf($245);
  $247 = Math_fround($62 * $246);
  $248 = ((($0)) + 96|0);
  $249 = loadf($248);
  $250 = Math_fround($61 * $249);
  $251 = Math_fround($247 - $250);
  $252 = Math_fround($61 * $246);
  $253 = Math_fround($62 * $249);
  $254 = Math_fround($252 + $253);
  $255 = ((($0)) + 84|0);
  $256 = loadf($255);
  $257 = Math_fround($62 * $256);
  $258 = ((($0)) + 88|0);
  $259 = loadf($258);
  $260 = Math_fround($61 * $259);
  $261 = Math_fround($257 - $260);
  $262 = Math_fround($73 + $261);
  $263 = Math_fround($61 * $256);
  $264 = Math_fround($62 * $259);
  $265 = Math_fround($263 + $264);
  $266 = Math_fround($74 + $265);
  $267 = Math_fround(-$251);
  $268 = Math_fround(-$254);
  $269 = Math_fround($27 * $267);
  $270 = Math_fround($26 * $268);
  $271 = Math_fround($269 + $270);
  $272 = Math_fround($26 * $267);
  $273 = Math_fround($27 * $268);
  $274 = Math_fround($273 - $272);
  store4($2,-1);
  $275 = load4($0);
  $276 = ((($275)) + 16|0);
  $277 = load4($276);
  $278 = ((($275)) + 20|0);
  $279 = load4($278);
  $280 = ($279|0)>(1);
  if ($280) {
   $281 = loadf($277);
   $282 = Math_fround($271 * $281);
   $283 = ((($277)) + 4|0);
   $284 = loadf($283);
   $285 = Math_fround($274 * $284);
   $286 = Math_fround($282 + $285);
   $$01721$i = 1;$$01820$i = $286;$$022$i = 0;
   while(1) {
    $287 = (($277) + ($$01721$i<<3)|0);
    $288 = loadf($287);
    $289 = Math_fround($271 * $288);
    $290 = (((($277) + ($$01721$i<<3)|0)) + 4|0);
    $291 = loadf($290);
    $292 = Math_fround($274 * $291);
    $293 = Math_fround($289 + $292);
    $294 = $293 > $$01820$i;
    $$119$i = $294 ? $293 : $$01820$i;
    $$1$i = $294 ? $$01721$i : $$022$i;
    $295 = (($$01721$i) + 1)|0;
    $exitcond205 = ($295|0)==($279|0);
    if ($exitcond205) {
     break;
    } else {
     $$01721$i = $295;$$01820$i = $$119$i;$$022$i = $$1$i;
    }
   }
   store4($1,$$1$i);
   $296 = ($$1$i|0)>(-1);
   if ($296) {
    $$0$lcssa$i202 = $$1$i;
   } else {
    ___assert_fail((5271|0),(5301|0),103,(5332|0));
    // unreachable;
   }
  } else {
   store4($1,0);
   $$0$lcssa$i202 = 0;
  }
  $297 = load4($278);
  $298 = ($297|0)>($$0$lcssa$i202|0);
  if (!($298)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $299 = (($277) + ($$0$lcssa$i202<<3)|0);
  $300 = loadf($299);
  $$sroa_idx = (((($277) + ($$0$lcssa$i202<<3)|0)) + 4|0);
  $301 = loadf($$sroa_idx);
  $302 = Math_fround($27 * $300);
  $303 = Math_fround($26 * $301);
  $304 = Math_fround($302 - $303);
  $305 = Math_fround($38 + $304);
  $306 = Math_fround($26 * $300);
  $307 = Math_fround($27 * $301);
  $308 = Math_fround($306 + $307);
  $309 = Math_fround($39 + $308);
  $310 = Math_fround($305 - $262);
  $311 = Math_fround($309 - $266);
  $312 = Math_fround($251 * $310);
  $313 = Math_fround($254 * $311);
  $314 = Math_fround($312 + $313);
  $$0 = $314;
  return (Math_fround($$0));
  break;
 }
 default: {
  ___assert_fail((5342|0),(5221|0),183,(5357|0));
  // unreachable;
 }
 }
 return Math_fround((Math_fround(0.0)));
}
function __ZNK20b2SeparationFunction8EvaluateEiif($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = Math_fround($3);
 var $$0 = Math_fround(0), $$sroa_idx = 0, $$sroa_idx100 = 0, $$sroa_idx109 = 0, $$sroa_idx61 = 0, $10 = Math_fround(0), $100 = Math_fround(0), $101 = Math_fround(0), $102 = Math_fround(0), $103 = Math_fround(0), $104 = Math_fround(0), $105 = Math_fround(0), $106 = Math_fround(0), $107 = Math_fround(0), $108 = Math_fround(0), $109 = Math_fround(0), $11 = 0, $110 = Math_fround(0), $111 = Math_fround(0), $112 = Math_fround(0);
 var $113 = Math_fround(0), $114 = Math_fround(0), $115 = Math_fround(0), $116 = Math_fround(0), $117 = Math_fround(0), $118 = Math_fround(0), $119 = Math_fround(0), $12 = Math_fround(0), $120 = Math_fround(0), $121 = Math_fround(0), $122 = Math_fround(0), $123 = 0, $124 = Math_fround(0), $125 = Math_fround(0), $126 = 0, $127 = Math_fround(0), $128 = Math_fround(0), $129 = Math_fround(0), $13 = Math_fround(0), $130 = Math_fround(0);
 var $131 = Math_fround(0), $132 = Math_fround(0), $133 = 0, $134 = Math_fround(0), $135 = Math_fround(0), $136 = 0, $137 = Math_fround(0), $138 = Math_fround(0), $139 = Math_fround(0), $14 = 0, $140 = Math_fround(0), $141 = Math_fround(0), $142 = Math_fround(0), $143 = Math_fround(0), $144 = Math_fround(0), $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0;
 var $15 = Math_fround(0), $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = Math_fround(0), $155 = Math_fround(0), $156 = Math_fround(0), $157 = Math_fround(0), $158 = Math_fround(0), $159 = Math_fround(0), $16 = Math_fround(0), $160 = Math_fround(0), $161 = Math_fround(0), $162 = Math_fround(0), $163 = Math_fround(0), $164 = Math_fround(0), $165 = Math_fround(0), $166 = Math_fround(0), $167 = Math_fround(0);
 var $168 = Math_fround(0), $169 = 0, $17 = Math_fround(0), $170 = Math_fround(0), $171 = Math_fround(0), $172 = 0, $173 = Math_fround(0), $174 = Math_fround(0), $175 = Math_fround(0), $176 = Math_fround(0), $177 = Math_fround(0), $178 = Math_fround(0), $179 = 0, $18 = Math_fround(0), $180 = Math_fround(0), $181 = Math_fround(0), $182 = 0, $183 = Math_fround(0), $184 = Math_fround(0), $185 = Math_fround(0);
 var $186 = Math_fround(0), $187 = Math_fround(0), $188 = Math_fround(0), $189 = Math_fround(0), $19 = 0, $190 = Math_fround(0), $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = Math_fround(0), $20 = Math_fround(0), $200 = Math_fround(0), $201 = Math_fround(0), $202 = Math_fround(0), $203 = Math_fround(0);
 var $204 = Math_fround(0), $205 = Math_fround(0), $206 = Math_fround(0), $207 = Math_fround(0), $208 = Math_fround(0), $209 = Math_fround(0), $21 = Math_fround(0), $210 = Math_fround(0), $211 = Math_fround(0), $212 = Math_fround(0), $213 = Math_fround(0), $22 = 0, $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0), $27 = Math_fround(0), $28 = 0, $29 = Math_fround(0), $30 = Math_fround(0);
 var $31 = 0, $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $4 = Math_fround(0), $40 = 0, $41 = Math_fround(0), $42 = Math_fround(0), $43 = 0, $44 = Math_fround(0), $45 = Math_fround(0), $46 = 0, $47 = Math_fround(0), $48 = Math_fround(0), $49 = 0;
 var $5 = 0, $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = 0, $55 = Math_fround(0), $56 = Math_fround(0), $57 = 0, $58 = Math_fround(0), $59 = Math_fround(0), $6 = Math_fround(0), $60 = Math_fround(0), $61 = Math_fround(0), $62 = Math_fround(0), $63 = 0, $64 = Math_fround(0), $65 = Math_fround(0), $66 = 0, $67 = Math_fround(0);
 var $68 = Math_fround(0), $69 = Math_fround(0), $7 = Math_fround(0), $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = 0, $76 = 0, $77 = 0, $78 = Math_fround(0), $79 = 0, $8 = 0, $80 = Math_fround(0), $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = Math_fround(0), $9 = Math_fround(0), $90 = Math_fround(0), $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = Math_fround(Math_fround(1.0) - $3);
 $5 = ((($0)) + 16|0);
 $6 = loadf($5);
 $7 = Math_fround($4 * $6);
 $8 = ((($0)) + 20|0);
 $9 = loadf($8);
 $10 = Math_fround($4 * $9);
 $11 = ((($0)) + 24|0);
 $12 = loadf($11);
 $13 = Math_fround($12 * $3);
 $14 = ((($0)) + 28|0);
 $15 = loadf($14);
 $16 = Math_fround($15 * $3);
 $17 = Math_fround($7 + $13);
 $18 = Math_fround($10 + $16);
 $19 = ((($0)) + 32|0);
 $20 = loadf($19);
 $21 = Math_fround($4 * $20);
 $22 = ((($0)) + 36|0);
 $23 = loadf($22);
 $24 = Math_fround($23 * $3);
 $25 = Math_fround($21 + $24);
 $26 = (Math_fround(_sinf($25)));
 $27 = (Math_fround(_cosf($25)));
 $28 = ((($0)) + 8|0);
 $29 = loadf($28);
 $30 = Math_fround($27 * $29);
 $31 = ((($0)) + 12|0);
 $32 = loadf($31);
 $33 = Math_fround($26 * $32);
 $34 = Math_fround($30 - $33);
 $35 = Math_fround($26 * $29);
 $36 = Math_fround($27 * $32);
 $37 = Math_fround($35 + $36);
 $38 = Math_fround($17 - $34);
 $39 = Math_fround($18 - $37);
 $40 = ((($0)) + 52|0);
 $41 = loadf($40);
 $42 = Math_fround($4 * $41);
 $43 = ((($0)) + 56|0);
 $44 = loadf($43);
 $45 = Math_fround($4 * $44);
 $46 = ((($0)) + 60|0);
 $47 = loadf($46);
 $48 = Math_fround($47 * $3);
 $49 = ((($0)) + 64|0);
 $50 = loadf($49);
 $51 = Math_fround($50 * $3);
 $52 = Math_fround($42 + $48);
 $53 = Math_fround($45 + $51);
 $54 = ((($0)) + 68|0);
 $55 = loadf($54);
 $56 = Math_fround($4 * $55);
 $57 = ((($0)) + 72|0);
 $58 = loadf($57);
 $59 = Math_fround($58 * $3);
 $60 = Math_fround($56 + $59);
 $61 = (Math_fround(_sinf($60)));
 $62 = (Math_fround(_cosf($60)));
 $63 = ((($0)) + 44|0);
 $64 = loadf($63);
 $65 = Math_fround($62 * $64);
 $66 = ((($0)) + 48|0);
 $67 = loadf($66);
 $68 = Math_fround($61 * $67);
 $69 = Math_fround($65 - $68);
 $70 = Math_fround($61 * $64);
 $71 = Math_fround($62 * $67);
 $72 = Math_fround($70 + $71);
 $73 = Math_fround($52 - $69);
 $74 = Math_fround($53 - $72);
 $75 = ((($0)) + 80|0);
 $76 = load4($75);
 switch ($76|0) {
 case 0:  {
  $77 = ((($0)) + 92|0);
  $78 = loadf($77);
  $79 = ((($0)) + 96|0);
  $80 = loadf($79);
  $81 = load4($0);
  $82 = ($1|0)>(-1);
  if (!($82)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $83 = ((($81)) + 20|0);
  $84 = load4($83);
  $85 = ($84|0)>($1|0);
  if (!($85)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $86 = ((($81)) + 16|0);
  $87 = load4($86);
  $88 = (($87) + ($1<<3)|0);
  $89 = loadf($88);
  $$sroa_idx109 = (((($87) + ($1<<3)|0)) + 4|0);
  $90 = loadf($$sroa_idx109);
  $91 = ((($0)) + 4|0);
  $92 = load4($91);
  $93 = ($2|0)>(-1);
  if (!($93)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $94 = ((($92)) + 20|0);
  $95 = load4($94);
  $96 = ($95|0)>($2|0);
  if (!($96)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $97 = ((($92)) + 16|0);
  $98 = load4($97);
  $99 = (($98) + ($2<<3)|0);
  $100 = loadf($99);
  $$sroa_idx100 = (((($98) + ($2<<3)|0)) + 4|0);
  $101 = loadf($$sroa_idx100);
  $102 = Math_fround($27 * $89);
  $103 = Math_fround($26 * $90);
  $104 = Math_fround($102 - $103);
  $105 = Math_fround($38 + $104);
  $106 = Math_fround($26 * $89);
  $107 = Math_fround($27 * $90);
  $108 = Math_fround($106 + $107);
  $109 = Math_fround($39 + $108);
  $110 = Math_fround($62 * $100);
  $111 = Math_fround($61 * $101);
  $112 = Math_fround($110 - $111);
  $113 = Math_fround($73 + $112);
  $114 = Math_fround($61 * $100);
  $115 = Math_fround($62 * $101);
  $116 = Math_fround($114 + $115);
  $117 = Math_fround($74 + $116);
  $118 = Math_fround($113 - $105);
  $119 = Math_fround($117 - $109);
  $120 = Math_fround($78 * $118);
  $121 = Math_fround($80 * $119);
  $122 = Math_fround($120 + $121);
  $$0 = $122;
  return (Math_fround($$0));
  break;
 }
 case 1:  {
  $123 = ((($0)) + 92|0);
  $124 = loadf($123);
  $125 = Math_fround($27 * $124);
  $126 = ((($0)) + 96|0);
  $127 = loadf($126);
  $128 = Math_fround($26 * $127);
  $129 = Math_fround($125 - $128);
  $130 = Math_fround($26 * $124);
  $131 = Math_fround($27 * $127);
  $132 = Math_fround($130 + $131);
  $133 = ((($0)) + 84|0);
  $134 = loadf($133);
  $135 = Math_fround($27 * $134);
  $136 = ((($0)) + 88|0);
  $137 = loadf($136);
  $138 = Math_fround($26 * $137);
  $139 = Math_fround($135 - $138);
  $140 = Math_fround($38 + $139);
  $141 = Math_fround($26 * $134);
  $142 = Math_fround($27 * $137);
  $143 = Math_fround($141 + $142);
  $144 = Math_fround($39 + $143);
  $145 = ((($0)) + 4|0);
  $146 = load4($145);
  $147 = ($2|0)>(-1);
  if (!($147)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $148 = ((($146)) + 20|0);
  $149 = load4($148);
  $150 = ($149|0)>($2|0);
  if (!($150)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $151 = ((($146)) + 16|0);
  $152 = load4($151);
  $153 = (($152) + ($2<<3)|0);
  $154 = loadf($153);
  $$sroa_idx61 = (((($152) + ($2<<3)|0)) + 4|0);
  $155 = loadf($$sroa_idx61);
  $156 = Math_fround($62 * $154);
  $157 = Math_fround($61 * $155);
  $158 = Math_fround($156 - $157);
  $159 = Math_fround($73 + $158);
  $160 = Math_fround($61 * $154);
  $161 = Math_fround($62 * $155);
  $162 = Math_fround($160 + $161);
  $163 = Math_fround($74 + $162);
  $164 = Math_fround($159 - $140);
  $165 = Math_fround($163 - $144);
  $166 = Math_fround($129 * $164);
  $167 = Math_fround($132 * $165);
  $168 = Math_fround($166 + $167);
  $$0 = $168;
  return (Math_fround($$0));
  break;
 }
 case 2:  {
  $169 = ((($0)) + 92|0);
  $170 = loadf($169);
  $171 = Math_fround($62 * $170);
  $172 = ((($0)) + 96|0);
  $173 = loadf($172);
  $174 = Math_fround($61 * $173);
  $175 = Math_fround($171 - $174);
  $176 = Math_fround($61 * $170);
  $177 = Math_fround($62 * $173);
  $178 = Math_fround($176 + $177);
  $179 = ((($0)) + 84|0);
  $180 = loadf($179);
  $181 = Math_fround($62 * $180);
  $182 = ((($0)) + 88|0);
  $183 = loadf($182);
  $184 = Math_fround($61 * $183);
  $185 = Math_fround($181 - $184);
  $186 = Math_fround($73 + $185);
  $187 = Math_fround($61 * $180);
  $188 = Math_fround($62 * $183);
  $189 = Math_fround($187 + $188);
  $190 = Math_fround($74 + $189);
  $191 = load4($0);
  $192 = ($1|0)>(-1);
  if (!($192)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $193 = ((($191)) + 20|0);
  $194 = load4($193);
  $195 = ($194|0)>($1|0);
  if (!($195)) {
   ___assert_fail((5271|0),(5301|0),103,(5332|0));
   // unreachable;
  }
  $196 = ((($191)) + 16|0);
  $197 = load4($196);
  $198 = (($197) + ($1<<3)|0);
  $199 = loadf($198);
  $$sroa_idx = (((($197) + ($1<<3)|0)) + 4|0);
  $200 = loadf($$sroa_idx);
  $201 = Math_fround($27 * $199);
  $202 = Math_fround($26 * $200);
  $203 = Math_fround($201 - $202);
  $204 = Math_fround($38 + $203);
  $205 = Math_fround($26 * $199);
  $206 = Math_fround($27 * $200);
  $207 = Math_fround($205 + $206);
  $208 = Math_fround($39 + $207);
  $209 = Math_fround($204 - $186);
  $210 = Math_fround($208 - $190);
  $211 = Math_fround($175 * $209);
  $212 = Math_fround($178 * $210);
  $213 = Math_fround($211 + $212);
  $$0 = $213;
  return (Math_fround($$0));
  break;
 }
 default: {
  ___assert_fail((5342|0),(5221|0),242,(5348|0));
  // unreachable;
 }
 }
 return Math_fround((Math_fround(0.0)));
}
function __ZN16b2StackAllocatorC2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 102400|0);
 store4($1,0);
 $2 = ((($0)) + 102404|0);
 store4($2,0);
 $3 = ((($0)) + 102408|0);
 store4($3,0);
 $4 = ((($0)) + 102796|0);
 store4($4,0);
 return;
}
function __ZN16b2StackAllocatorD2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 102400|0);
 $2 = load4($1);
 $3 = ($2|0)==(0);
 if (!($3)) {
  ___assert_fail((5398|0),(5411|0),32,(5445|0));
  // unreachable;
 }
 $4 = ((($0)) + 102796|0);
 $5 = load4($4);
 $6 = ($5|0)==(0);
 if ($6) {
  return;
 } else {
  ___assert_fail((5463|0),(5411|0),33,(5445|0));
  // unreachable;
 }
}
function __ZN16b2StackAllocator8AllocateEi($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$pre$phiZ2D = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 102796|0);
 $3 = load4($2);
 $4 = ($3|0)<(32);
 if (!($4)) {
  ___assert_fail((5481|0),(5411|0),38,(5515|0));
  // unreachable;
 }
 $5 = (((($0)) + 102412|0) + (($3*12)|0)|0);
 $6 = (((((($0)) + 102412|0) + (($3*12)|0)|0)) + 4|0);
 store4($6,$1);
 $7 = ((($0)) + 102400|0);
 $8 = load4($7);
 $9 = (($8) + ($1))|0;
 $10 = ($9|0)>(102400);
 if ($10) {
  $11 = (__Z7b2Alloci($1)|0);
  store4($5,$11);
  $12 = (((((($0)) + 102412|0) + (($3*12)|0)|0)) + 8|0);
  store1($12,1);
  $$pre$phiZ2D = $5;
 } else {
  $13 = (($0) + ($8)|0);
  store4($5,$13);
  $14 = (((((($0)) + 102412|0) + (($3*12)|0)|0)) + 8|0);
  store1($14,0);
  $15 = load4($7);
  $16 = (($15) + ($1))|0;
  store4($7,$16);
  $$pre$phiZ2D = $5;
 }
 $17 = ((($0)) + 102404|0);
 $18 = load4($17);
 $19 = (($18) + ($1))|0;
 store4($17,$19);
 $20 = ((($0)) + 102408|0);
 $21 = load4($20);
 $22 = ($21|0)>($19|0);
 $23 = $22 ? $21 : $19;
 store4($20,$23);
 $24 = load4($2);
 $25 = (($24) + 1)|0;
 store4($2,$25);
 $26 = load4($$pre$phiZ2D);
 return ($26|0);
}
function __ZN16b2StackAllocator4FreeEPv($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$pre = 0, $$pre$phiZ2D = 0, $$pre8 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($0)) + 102796|0);
 $3 = load4($2);
 $4 = ($3|0)>(0);
 if (!($4)) {
  ___assert_fail((5524|0),(5411|0),63,(5541|0));
  // unreachable;
 }
 $5 = (((($0)) + 102412|0) + (($3*12)|0)|0);
 $6 = ((($5)) + -12|0);
 $7 = load4($6);
 $8 = ($7|0)==($1|0);
 if (!($8)) {
  ___assert_fail((5546|0),(5411|0),65,(5541|0));
  // unreachable;
 }
 $9 = ((($5)) + -4|0);
 $10 = load1($9);
 $11 = ($10<<24>>24)==(0);
 if ($11) {
  $12 = ((($5)) + -8|0);
  $13 = load4($12);
  $14 = ((($0)) + 102400|0);
  $15 = load4($14);
  $16 = (($15) - ($13))|0;
  store4($14,$16);
  $$pre$phiZ2D = $12;$22 = $3;
 } else {
  __Z6b2FreePv($1);
  $$pre = load4($2);
  $$pre8 = ((($5)) + -8|0);
  $$pre$phiZ2D = $$pre8;$22 = $$pre;
 }
 $17 = load4($$pre$phiZ2D);
 $18 = ((($0)) + 102404|0);
 $19 = load4($18);
 $20 = (($19) - ($17))|0;
 store4($18,$20);
 $21 = (($22) + -1)|0;
 store4($2,$21);
 return;
}
function __ZN7b2TimerC2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN7b2Timer5ResetEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK7b2Timer15GetMillisecondsEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return Math_fround(0.0);
}
function __ZN8b2IslandC2EiiiP16b2StackAllocatorP17b2ContactListener($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($0)) + 40|0);
 store4($6,$1);
 $7 = ((($0)) + 44|0);
 store4($7,$2);
 $8 = ((($0)) + 48|0);
 store4($8,$3);
 $9 = ((($0)) + 28|0);
 store4($9,0);
 $10 = ((($0)) + 36|0);
 store4($10,0);
 $11 = ((($0)) + 32|0);
 store4($11,0);
 store4($0,$4);
 $12 = ((($0)) + 4|0);
 store4($12,$5);
 $13 = $1 << 2;
 $14 = (__ZN16b2StackAllocator8AllocateEi($4,$13)|0);
 $15 = ((($0)) + 8|0);
 store4($15,$14);
 $16 = load4($0);
 $17 = $2 << 2;
 $18 = (__ZN16b2StackAllocator8AllocateEi($16,$17)|0);
 $19 = ((($0)) + 12|0);
 store4($19,$18);
 $20 = load4($0);
 $21 = $3 << 2;
 $22 = (__ZN16b2StackAllocator8AllocateEi($20,$21)|0);
 $23 = ((($0)) + 16|0);
 store4($23,$22);
 $24 = load4($0);
 $25 = load4($6);
 $26 = ($25*12)|0;
 $27 = (__ZN16b2StackAllocator8AllocateEi($24,$26)|0);
 $28 = ((($0)) + 24|0);
 store4($28,$27);
 $29 = load4($0);
 $30 = load4($6);
 $31 = ($30*12)|0;
 $32 = (__ZN16b2StackAllocator8AllocateEi($29,$31)|0);
 $33 = ((($0)) + 20|0);
 store4($33,$32);
 return;
}
function __ZN8b2IslandD2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = load4($0);
 $2 = ((($0)) + 20|0);
 $3 = load4($2);
 __ZN16b2StackAllocator4FreeEPv($1,$3);
 $4 = load4($0);
 $5 = ((($0)) + 24|0);
 $6 = load4($5);
 __ZN16b2StackAllocator4FreeEPv($4,$6);
 $7 = load4($0);
 $8 = ((($0)) + 16|0);
 $9 = load4($8);
 __ZN16b2StackAllocator4FreeEPv($7,$9);
 $10 = load4($0);
 $11 = ((($0)) + 12|0);
 $12 = load4($11);
 __ZN16b2StackAllocator4FreeEPv($10,$12);
 $13 = load4($0);
 $14 = ((($0)) + 8|0);
 $15 = load4($14);
 __ZN16b2StackAllocator4FreeEPv($13,$15);
 return;
}
function __ZN8b2Island5SolveEP9b2ProfileRK10b2TimeStepRK6b2Vec2b($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0188313 = 0, $$0189 = Math_fround(0), $$0190315 = 0, $$0197$lcssa = Math_fround(0), $$0197314 = Math_fround(0), $$0200342 = 0, $$0201317 = 0, $$0202340 = 0, $$0203322 = 0, $$0204$off0$lcssa = 0, $$0204$off0321 = 0, $$0207327 = 0, $$0208$off0$ = 0, $$0208$off0326 = 0, $$0211337 = 0, $$0212333 = 0, $$0213 = Math_fround(0), $$02325$i = 0, $$024$i = 0, $$0346 = 0;
 var $$2199 = Math_fround(0), $$2210$off0 = 0, $$not = 0, $$pre = 0, $$pre$phi353Z2D = 0, $$pre$phiZ2D = 0, $$pre351 = 0, $$pre352 = 0, $$sroa$0241$0 = 0, $$sroa$0296$0 = 0, $$sroa$8$0 = 0, $$sroa$9$0 = 0, $$sroa_idx = 0, $$sroa_idx236 = 0, $$sroa_idx257 = 0, $$sroa_idx286 = 0, $$sroa_idx288 = 0, $$sroa_idx291 = 0, $$sroa_idx5$i = 0, $10 = Math_fround(0);
 var $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = Math_fround(0), $116 = 0, $117 = 0, $118 = 0;
 var $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = Math_fround(0), $133 = 0, $134 = 0, $135 = 0, $136 = 0;
 var $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = Math_fround(0);
 var $155 = Math_fround(0), $156 = 0, $157 = Math_fround(0), $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = Math_fround(0), $164 = Math_fround(0), $165 = Math_fround(0), $166 = Math_fround(0), $167 = Math_fround(0), $168 = Math_fround(0), $169 = Math_fround(0), $17 = 0, $170 = Math_fround(0), $171 = 0, $172 = Math_fround(0);
 var $173 = Math_fround(0), $174 = Math_fround(0), $175 = 0, $176 = Math_fround(0), $177 = 0, $178 = Math_fround(0), $179 = Math_fround(0), $18 = 0, $180 = 0, $181 = 0, $182 = Math_fround(0), $183 = Math_fround(0), $184 = Math_fround(0), $185 = Math_fround(0), $186 = Math_fround(0), $187 = Math_fround(0), $188 = Math_fround(0), $189 = Math_fround(0), $19 = 0, $190 = Math_fround(0);
 var $191 = Math_fround(0), $192 = Math_fround(0), $193 = Math_fround(0), $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0;
 var $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = Math_fround(0), $224 = 0, $225 = 0, $226 = 0, $227 = 0;
 var $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = i64(), $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = i64(), $245 = 0;
 var $246 = 0, $247 = 0, $248 = 0, $249 = Math_fround(0), $25 = 0, $250 = Math_fround(0), $251 = 0, $252 = Math_fround(0), $253 = 0, $254 = 0, $255 = Math_fround(0), $256 = Math_fround(0), $257 = 0, $258 = Math_fround(0), $259 = Math_fround(0), $26 = 0, $260 = Math_fround(0), $261 = Math_fround(0), $262 = Math_fround(0), $263 = Math_fround(0);
 var $264 = 0, $265 = Math_fround(0), $266 = Math_fround(0), $267 = i64(), $268 = 0, $269 = Math_fround(0), $27 = 0, $270 = Math_fround(0), $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0;
 var $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $30 = 0;
 var $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = Math_fround(0), $314 = Math_fround(0), $315 = 0, $316 = 0, $317 = Math_fround(0), $318 = Math_fround(0);
 var $319 = 0, $32 = 0, $320 = Math_fround(0), $321 = Math_fround(0), $322 = Math_fround(0), $323 = 0, $324 = 0, $325 = 0, $326 = Math_fround(0), $327 = Math_fround(0), $328 = 0, $329 = Math_fround(0), $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0;
 var $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = i64(), $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = Math_fround(0);
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = Math_fround(0), $55 = Math_fround(0), $56 = 0, $57 = Math_fround(0), $58 = 0, $59 = Math_fround(0), $6 = 0, $60 = Math_fround(0), $61 = 0, $62 = Math_fround(0), $63 = Math_fround(0);
 var $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = Math_fround(0), $71 = Math_fround(0), $72 = 0, $73 = Math_fround(0), $74 = Math_fround(0), $75 = 0, $76 = Math_fround(0), $77 = Math_fround(0), $78 = Math_fround(0), $79 = 0, $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0);
 var $82 = Math_fround(0), $83 = 0, $84 = Math_fround(0), $85 = 0, $86 = Math_fround(0), $87 = Math_fround(0), $88 = 0, $89 = Math_fround(0), $9 = 0, $90 = 0, $91 = 0, $92 = Math_fround(0), $93 = Math_fround(0), $94 = Math_fround(0), $95 = 0, $96 = Math_fround(0), $97 = 0, $98 = Math_fround(0), $99 = Math_fround(0), $brmerge = 0;
 var $brmerge$demorgan = 0, $brmerge$demorgan$not = 0, $brmerge221 = 0, $exitcond = 0, $or$cond = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160|0;
 $5 = sp + 128|0;
 $6 = sp + 148|0;
 $7 = sp + 96|0;
 $8 = sp + 52|0;
 $9 = sp;
 $10 = loadf($2);
 $11 = ((($0)) + 28|0);
 $12 = load4($11);
 $13 = ($12|0)>(0);
 if ($13) {
  $14 = ((($0)) + 8|0);
  $15 = ((($3)) + 4|0);
  $16 = ((($0)) + 20|0);
  $17 = ((($0)) + 24|0);
  $$0346 = 0;
  while(1) {
   $35 = load4($14);
   $36 = (($35) + ($$0346<<2)|0);
   $37 = load4($36);
   $38 = ((($37)) + 44|0);
   $39 = load8($38,4);
   $40 = ((($37)) + 56|0);
   $41 = load4($40);
   $$sroa_idx288 = ((($37)) + 64|0);
   $42 = load4($$sroa_idx288);
   $$sroa_idx291 = ((($37)) + 68|0);
   $43 = load4($$sroa_idx291);
   $44 = ((($37)) + 72|0);
   $45 = loadf($44);
   $46 = ((($37)) + 36|0);
   store8($46,$39,4);
   $47 = ((($37)) + 52|0);
   store4($47,$41);
   $48 = load4($37);
   $49 = ($48|0)==(2);
   if ($49) {
    $50 = ((($37)) + 140|0);
    $51 = loadf($50);
    $52 = loadf($3);
    $53 = Math_fround($51 * $52);
    $54 = loadf($15);
    $55 = Math_fround($51 * $54);
    $56 = ((($37)) + 120|0);
    $57 = loadf($56);
    $58 = ((($37)) + 76|0);
    $59 = loadf($58);
    $60 = Math_fround($57 * $59);
    $61 = ((($37)) + 80|0);
    $62 = loadf($61);
    $63 = Math_fround($57 * $62);
    $64 = Math_fround($53 + $60);
    $65 = Math_fround($55 + $63);
    $66 = Math_fround($10 * $64);
    $67 = Math_fround($10 * $65);
    $68 = i32_bc2f($42);
    $69 = Math_fround($68 + $66);
    $70 = i32_bc2f($43);
    $71 = Math_fround($70 + $67);
    $72 = ((($37)) + 128|0);
    $73 = loadf($72);
    $74 = Math_fround($10 * $73);
    $75 = ((($37)) + 84|0);
    $76 = loadf($75);
    $77 = Math_fround($74 * $76);
    $78 = Math_fround($45 + $77);
    $79 = ((($37)) + 132|0);
    $80 = loadf($79);
    $81 = Math_fround($10 * $80);
    $82 = Math_fround(Math_fround(1.0) - $81);
    $83 = $82 < Math_fround(1.0);
    $84 = $83 ? $82 : Math_fround(1.0);
    $85 = $84 < Math_fround(0.0);
    $86 = $85 ? Math_fround(0.0) : $84;
    $87 = Math_fround($69 * $86);
    $88 = i32_bc2i($87);
    $89 = Math_fround($71 * $86);
    $90 = i32_bc2i($89);
    $91 = ((($37)) + 136|0);
    $92 = loadf($91);
    $93 = Math_fround($10 * $92);
    $94 = Math_fround(Math_fround(1.0) - $93);
    $95 = $94 < Math_fround(1.0);
    $96 = $95 ? $94 : Math_fround(1.0);
    $97 = $96 < Math_fround(0.0);
    $98 = $97 ? Math_fround(0.0) : $96;
    $99 = Math_fround($78 * $98);
    $$0189 = $99;$$sroa$0296$0 = $88;$$sroa$8$0 = $90;
   } else {
    $$0189 = $45;$$sroa$0296$0 = $42;$$sroa$8$0 = $43;
   }
   $100 = load4($16);
   $101 = (($100) + (($$0346*12)|0)|0);
   store8($101,$39,4);
   $102 = load4($16);
   $103 = (((($102) + (($$0346*12)|0)|0)) + 8|0);
   store4($103,$41);
   $104 = load4($17);
   $105 = (($104) + (($$0346*12)|0)|0);
   store4($105,$$sroa$0296$0);
   $$sroa_idx286 = (((($104) + (($$0346*12)|0)|0)) + 4|0);
   store4($$sroa_idx286,$$sroa$8$0);
   $106 = load4($17);
   $107 = (((($106) + (($$0346*12)|0)|0)) + 8|0);
   storef($107,$$0189);
   $108 = (($$0346) + 1)|0;
   $109 = load4($11);
   $110 = ($108|0)<($109|0);
   if ($110) {
    $$0346 = $108;
   } else {
    $$pre$phi353Z2D = $17;$$pre$phiZ2D = $16;
    break;
   }
  }
 } else {
  $$pre351 = ((($0)) + 20|0);
  $$pre352 = ((($0)) + 24|0);
  $$pre$phi353Z2D = $$pre352;$$pre$phiZ2D = $$pre351;
 }
 ; store8($7,load8($2,4),4); store8($7+8 | 0,load8($2+8 | 0,4),4); store8($7+16 | 0,load8($2+16 | 0,4),4);
 $18 = load4($$pre$phiZ2D);
 $19 = ((($7)) + 24|0);
 store4($19,$18);
 $20 = load4($$pre$phi353Z2D);
 $21 = ((($7)) + 28|0);
 store4($21,$20);
 ; store8($8,load8($2,4),4); store8($8+8 | 0,load8($2+8 | 0,4),4); store8($8+16 | 0,load8($2+16 | 0,4),4);
 $22 = ((($0)) + 12|0);
 $23 = load4($22);
 $24 = ((($8)) + 24|0);
 store4($24,$23);
 $25 = ((($0)) + 36|0);
 $26 = load4($25);
 $27 = ((($8)) + 28|0);
 store4($27,$26);
 $28 = ((($8)) + 32|0);
 store4($28,$18);
 $29 = ((($8)) + 36|0);
 store4($29,$20);
 $30 = load4($0);
 $31 = ((($8)) + 40|0);
 store4($31,$30);
 __ZN15b2ContactSolverC2EP18b2ContactSolverDef($9,$8);
 __ZN15b2ContactSolver29InitializeVelocityConstraintsEv($9);
 $32 = ((($2)) + 20|0);
 $33 = load1($32);
 $34 = ($33<<24>>24)==(0);
 if (!($34)) {
  __ZN15b2ContactSolver9WarmStartEv($9);
 }
 $111 = ((($0)) + 32|0);
 $112 = load4($111);
 $113 = ($112|0)>(0);
 if ($113) {
  $114 = ((($0)) + 16|0);
  $$0200342 = 0;
  while(1) {
   $120 = load4($114);
   $121 = (($120) + ($$0200342<<2)|0);
   $122 = load4($121);
   $123 = load4($122);
   $124 = ((($123)) + 28|0);
   $125 = load4($124);
   FUNCTION_TABLE_vii[$125 & 15]($122,$7);
   $126 = (($$0200342) + 1)|0;
   $127 = load4($111);
   $128 = ($126|0)<($127|0);
   if ($128) {
    $$0200342 = $126;
   } else {
    break;
   }
  }
 }
 $115 = (Math_fround(__ZNK7b2Timer15GetMillisecondsEv($6)));
 $116 = ((($1)) + 12|0);
 storef($116,$115);
 $117 = ((($2)) + 12|0);
 $118 = load4($117);
 $119 = ($118|0)>(0);
 if ($119) {
  $129 = ((($0)) + 16|0);
  $$0202340 = 0;
  while(1) {
   $130 = load4($111);
   $131 = ($130|0)>(0);
   if ($131) {
    $$0211337 = 0;
    while(1) {
     $139 = load4($129);
     $140 = (($139) + ($$0211337<<2)|0);
     $141 = load4($140);
     $142 = load4($141);
     $143 = ((($142)) + 32|0);
     $144 = load4($143);
     FUNCTION_TABLE_vii[$144 & 15]($141,$7);
     $145 = (($$0211337) + 1)|0;
     $146 = load4($111);
     $147 = ($145|0)<($146|0);
     if ($147) {
      $$0211337 = $145;
     } else {
      break;
     }
    }
   }
   __ZN15b2ContactSolver24SolveVelocityConstraintsEv($9);
   $136 = (($$0202340) + 1)|0;
   $137 = load4($117);
   $138 = ($136|0)<($137|0);
   if ($138) {
    $$0202340 = $136;
   } else {
    break;
   }
  }
 }
 __ZN15b2ContactSolver13StoreImpulsesEv($9);
 $132 = (Math_fround(__ZNK7b2Timer15GetMillisecondsEv($6)));
 $133 = ((($1)) + 16|0);
 storef($133,$132);
 $134 = load4($11);
 $135 = ($134|0)>(0);
 if ($135) {
  $$pre = load4($$pre$phi353Z2D);
  $$0212333 = 0;$159 = $$pre;
  while(1) {
   $152 = load4($$pre$phiZ2D);
   $153 = (($152) + (($$0212333*12)|0)|0);
   $154 = loadf($153);
   $$sroa_idx257 = (((($152) + (($$0212333*12)|0)|0)) + 4|0);
   $155 = loadf($$sroa_idx257);
   $156 = (((($152) + (($$0212333*12)|0)|0)) + 8|0);
   $157 = loadf($156);
   $158 = (($159) + (($$0212333*12)|0)|0);
   $160 = load4($158);
   $$sroa_idx236 = (((($159) + (($$0212333*12)|0)|0)) + 4|0);
   $161 = load4($$sroa_idx236);
   $162 = (((($159) + (($$0212333*12)|0)|0)) + 8|0);
   $163 = loadf($162);
   $164 = i32_bc2f($160);
   $165 = Math_fround($10 * $164);
   $166 = i32_bc2f($161);
   $167 = Math_fround($10 * $166);
   $168 = Math_fround($165 * $165);
   $169 = Math_fround($167 * $167);
   $170 = Math_fround($168 + $169);
   $171 = $170 > Math_fround(4.0);
   if ($171) {
    $172 = (Math_fround(Math_sqrt((Math_fround($170)))));
    $173 = Math_fround(Math_fround(2.0) / $172);
    $174 = Math_fround($164 * $173);
    $175 = i32_bc2i($174);
    $176 = Math_fround($166 * $173);
    $177 = i32_bc2i($176);
    $$sroa$0241$0 = $175;$$sroa$9$0 = $177;
   } else {
    $$sroa$0241$0 = $160;$$sroa$9$0 = $161;
   }
   $178 = Math_fround($10 * $163);
   $179 = Math_fround($178 * $178);
   $180 = $179 > Math_fround(2.46740127);
   if ($180) {
    $181 = $178 > Math_fround(0.0);
    $182 = Math_fround(-$178);
    $183 = $181 ? $178 : $182;
    $184 = Math_fround(Math_fround(1.57079637) / $183);
    $185 = Math_fround($163 * $184);
    $$0213 = $185;
   } else {
    $$0213 = $163;
   }
   $186 = i32_bc2f($$sroa$0241$0);
   $187 = Math_fround($10 * $186);
   $188 = i32_bc2f($$sroa$9$0);
   $189 = Math_fround($10 * $188);
   $190 = Math_fround($154 + $187);
   $191 = Math_fround($155 + $189);
   $192 = Math_fround($10 * $$0213);
   $193 = Math_fround($157 + $192);
   storef($153,$190);
   storef($$sroa_idx257,$191);
   $194 = load4($$pre$phiZ2D);
   $195 = (((($194) + (($$0212333*12)|0)|0)) + 8|0);
   storef($195,$193);
   $196 = load4($$pre$phi353Z2D);
   $197 = (($196) + (($$0212333*12)|0)|0);
   store4($197,$$sroa$0241$0);
   $$sroa_idx = (((($196) + (($$0212333*12)|0)|0)) + 4|0);
   store4($$sroa_idx,$$sroa$9$0);
   $198 = load4($$pre$phi353Z2D);
   $199 = (((($198) + (($$0212333*12)|0)|0)) + 8|0);
   storef($199,$$0213);
   $200 = (($$0212333) + 1)|0;
   $201 = load4($11);
   $202 = ($200|0)<($201|0);
   if ($202) {
    $$0212333 = $200;$159 = $198;
   } else {
    break;
   }
  }
 }
 $148 = ((($2)) + 16|0);
 $149 = load4($148);
 $150 = ($149|0)>(0);
 if ($150) {
  $151 = ((($0)) + 16|0);
  $$0207327 = 0;$$0208$off0326 = 0;
  while(1) {
   $203 = (__ZN15b2ContactSolver24SolvePositionConstraintsEv($9)|0);
   $204 = load4($111);
   $205 = ($204|0)>(0);
   if ($205) {
    $$0203322 = 0;$$0204$off0321 = 1;
    while(1) {
     $209 = load4($151);
     $210 = (($209) + ($$0203322<<2)|0);
     $211 = load4($210);
     $212 = load4($211);
     $213 = ((($212)) + 36|0);
     $214 = load4($213);
     $215 = (FUNCTION_TABLE_iii[$214 & 3]($211,$7)|0);
     $216 = $$0204$off0321 & $215;
     $217 = (($$0203322) + 1)|0;
     $218 = load4($111);
     $219 = ($217|0)<($218|0);
     if ($219) {
      $$0203322 = $217;$$0204$off0321 = $216;
     } else {
      $$0204$off0$lcssa = $216;
      break;
     }
    }
   } else {
    $$0204$off0$lcssa = 1;
   }
   $brmerge$demorgan = $203 & $$0204$off0$lcssa;
   $$0208$off0$ = $$0208$off0326 | $brmerge$demorgan;
   $206 = (($$0207327) + 1)|0;
   $brmerge$demorgan$not = $brmerge$demorgan ^ 1;
   $207 = load4($148);
   $208 = ($206|0)<($207|0);
   $or$cond = $208 & $brmerge$demorgan$not;
   if ($or$cond) {
    $$0207327 = $206;$$0208$off0326 = $$0208$off0$;
   } else {
    break;
   }
  }
  $phitmp = $$0208$off0$ ^ 1;
  $$2210$off0 = $phitmp;
 } else {
  $$2210$off0 = 1;
 }
 $220 = load4($11);
 $221 = ($220|0)>(0);
 if ($221) {
  $222 = ((($0)) + 8|0);
  $$0201317 = 0;
  while(1) {
   $230 = load4($222);
   $231 = (($230) + ($$0201317<<2)|0);
   $232 = load4($231);
   $233 = ((($232)) + 44|0);
   $234 = load4($$pre$phiZ2D);
   $235 = (($234) + (($$0201317*12)|0)|0);
   $236 = load8($235,4);
   store8($233,$236,4);
   $237 = load4($$pre$phiZ2D);
   $238 = (((($237) + (($$0201317*12)|0)|0)) + 8|0);
   $239 = load4($238);
   $240 = ((($232)) + 56|0);
   store4($240,$239);
   $241 = ((($232)) + 64|0);
   $242 = load4($$pre$phi353Z2D);
   $243 = (($242) + (($$0201317*12)|0)|0);
   $244 = load8($243,4);
   store8($241,$244,4);
   $245 = load4($$pre$phi353Z2D);
   $246 = (((($245) + (($$0201317*12)|0)|0)) + 8|0);
   $247 = load4($246);
   $248 = ((($232)) + 72|0);
   store4($248,$247);
   $249 = i32_bc2f($239);
   $250 = (Math_fround(_sinf($249)));
   $251 = ((($232)) + 20|0);
   storef($251,$250);
   $252 = (Math_fround(_cosf($249)));
   $253 = ((($232)) + 24|0);
   storef($253,$252);
   $254 = ((($232)) + 28|0);
   $255 = loadf($254);
   $256 = Math_fround($252 * $255);
   $257 = ((($232)) + 32|0);
   $258 = loadf($257);
   $259 = Math_fround($250 * $258);
   $260 = Math_fround($256 - $259);
   $261 = Math_fround($250 * $255);
   $262 = Math_fround($252 * $258);
   $263 = Math_fround($261 + $262);
   $264 = i64_trunc($236);
   $265 = i32_bc2f($264);
   $266 = Math_fround($265 - $260);
   $267 = i64_lshr($236,i64_const(32,0));
   $268 = i64_trunc($267);
   $269 = i32_bc2f($268);
   $270 = Math_fround($269 - $263);
   $271 = ((($232)) + 12|0);
   storef($271,$266);
   $$sroa_idx5$i = ((($232)) + 16|0);
   storef($$sroa_idx5$i,$270);
   $272 = (($$0201317) + 1)|0;
   $273 = load4($11);
   $274 = ($272|0)<($273|0);
   if ($274) {
    $$0201317 = $272;
   } else {
    break;
   }
  }
 }
 $223 = (Math_fround(__ZNK7b2Timer15GetMillisecondsEv($6)));
 $224 = ((($1)) + 20|0);
 storef($224,$223);
 $225 = ((($9)) + 40|0);
 $226 = load4($225);
 $227 = ((($0)) + 4|0);
 $228 = load4($227);
 $229 = ($228|0)==(0|0);
 if (!($229)) {
  $275 = load4($25);
  $276 = ($275|0)>(0);
  if ($276) {
   $277 = ((($5)) + 16|0);
   $$02325$i = 0;
   while(1) {
    $278 = load4($22);
    $279 = (($278) + ($$02325$i<<2)|0);
    $280 = load4($279);
    $281 = (((($226) + (($$02325$i*152)|0)|0)) + 144|0);
    $282 = load4($281);
    store4($277,$282);
    $283 = ($282|0)>(0);
    if ($283) {
     $$024$i = 0;
     while(1) {
      $291 = ((((($226) + (($$02325$i*152)|0)|0) + (($$024$i*36)|0)|0)) + 16|0);
      $292 = load4($291);
      $293 = (($5) + ($$024$i<<2)|0);
      store4($293,$292);
      $294 = ((((($226) + (($$02325$i*152)|0)|0) + (($$024$i*36)|0)|0)) + 20|0);
      $295 = load4($294);
      $296 = (((($5)) + 8|0) + ($$024$i<<2)|0);
      store4($296,$295);
      $297 = (($$024$i) + 1)|0;
      $exitcond = ($297|0)==($282|0);
      if ($exitcond) {
       break;
      } else {
       $$024$i = $297;
      }
     }
    }
    $284 = load4($227);
    $285 = load4($284);
    $286 = ((($285)) + 20|0);
    $287 = load4($286);
    FUNCTION_TABLE_viii[$287 & 3]($284,$280,$5);
    $288 = (($$02325$i) + 1)|0;
    $289 = load4($25);
    $290 = ($288|0)<($289|0);
    if ($290) {
     $$02325$i = $288;
    } else {
     break;
    }
   }
  }
 }
 if (!($4)) {
  __ZN15b2ContactSolverD2Ev($9);
  STACKTOP = sp;return;
 }
 $298 = load4($11);
 $299 = ($298|0)>(0);
 if ($299) {
  $300 = ((($0)) + 8|0);
  $301 = load4($300);
  $$0190315 = 0;$$0197314 = Math_fround(3.40282347E+38);
  while(1) {
   $304 = (($301) + ($$0190315<<2)|0);
   $305 = load4($304);
   $306 = load4($305);
   $307 = ($306|0)==(0);
   do {
    if ($307) {
     $$2199 = $$0197314;
    } else {
     $308 = ((($305)) + 4|0);
     $309 = load2($308);
     $310 = $309 & 4;
     $311 = ($310<<16>>16)==(0);
     if (!($311)) {
      $312 = ((($305)) + 72|0);
      $313 = loadf($312);
      $314 = Math_fround($313 * $313);
      $315 = $314 > Math_fround(0.00121846993);
      if (!($315)) {
       $316 = ((($305)) + 64|0);
       $317 = loadf($316);
       $318 = Math_fround($317 * $317);
       $319 = ((($305)) + 68|0);
       $320 = loadf($319);
       $321 = Math_fround($320 * $320);
       $322 = Math_fround($318 + $321);
       $323 = $322 > Math_fround(9.99999974E-5);
       if (!($323)) {
        $325 = ((($305)) + 144|0);
        $326 = loadf($325);
        $327 = Math_fround($10 + $326);
        storef($325,$327);
        $328 = $$0197314 < $327;
        $329 = $328 ? $$0197314 : $327;
        $$2199 = $329;
        break;
       }
      }
     }
     $324 = ((($305)) + 144|0);
     storef($324,Math_fround(0.0));
     $$2199 = Math_fround(0.0);
    }
   } while(0);
   $330 = (($$0190315) + 1)|0;
   $331 = ($330|0)<($298|0);
   if ($331) {
    $$0190315 = $330;$$0197314 = $$2199;
   } else {
    $$0197$lcssa = $$2199;
    break;
   }
  }
 } else {
  $$0197$lcssa = Math_fround(3.40282347E+38);
 }
 $302 = !($$0197$lcssa >= Math_fround(0.5));
 $brmerge221 = $302 | $$2210$off0;
 $$not = $299 ^ 1;
 $brmerge = $brmerge221 | $$not;
 if ($brmerge) {
  __ZN15b2ContactSolverD2Ev($9);
  STACKTOP = sp;return;
 }
 $303 = ((($0)) + 8|0);
 $$0188313 = 0;
 while(1) {
  $332 = load4($303);
  $333 = (($332) + ($$0188313<<2)|0);
  $334 = load4($333);
  $335 = ((($334)) + 4|0);
  $336 = load2($335);
  $337 = $336&65535;
  $338 = $337 & 65533;
  $339 = $338&65535;
  store2($335,$339);
  $340 = ((($334)) + 144|0);
  storef($340,Math_fround(0.0));
  $341 = ((($334)) + 64|0);
  ; store8($341,i64_const(0,0),4); store8($341+8|0,i64_const(0,0),4); store8($341+16|0,i64_const(0,0),4);
  $342 = (($$0188313) + 1)|0;
  $343 = load4($11);
  $344 = ($342|0)<($343|0);
  if ($344) {
   $$0188313 = $342;
  } else {
   break;
  }
 }
 __ZN15b2ContactSolverD2Ev($9);
 STACKTOP = sp;return;
}
function __ZN8b2Island8SolveTOIERK10b2TimeStepii($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$0102 = Math_fround(0), $$0103179 = 0, $$0108180 = 0, $$0188 = 0, $$02325$i = 0, $$024$i = 0, $$099183 = 0, $$not = 0, $$phi$trans$insert = 0, $$pre = 0, $$pre$phi193Z2D = 0, $$pre$phiZ2D = 0, $$pre192 = 0, $$sroa$0139$0 = 0, $$sroa$10$0 = 0, $$sroa_idx = 0, $$sroa_idx128 = 0, $$sroa_idx130 = 0, $$sroa_idx134 = 0, $$sroa_idx161 = 0;
 var $$sroa_idx165 = 0, $$sroa_idx5$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = Math_fround(0), $124 = Math_fround(0), $125 = 0, $126 = Math_fround(0), $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = Math_fround(0), $133 = Math_fround(0);
 var $134 = Math_fround(0), $135 = Math_fround(0), $136 = Math_fround(0), $137 = Math_fround(0), $138 = Math_fround(0), $139 = Math_fround(0), $14 = 0, $140 = 0, $141 = Math_fround(0), $142 = Math_fround(0), $143 = Math_fround(0), $144 = 0, $145 = Math_fround(0), $146 = 0, $147 = Math_fround(0), $148 = Math_fround(0), $149 = 0, $15 = 0, $150 = 0, $151 = Math_fround(0);
 var $152 = Math_fround(0), $153 = Math_fround(0), $154 = Math_fround(0), $155 = Math_fround(0), $156 = Math_fround(0), $157 = Math_fround(0), $158 = Math_fround(0), $159 = Math_fround(0), $16 = 0, $160 = Math_fround(0), $161 = Math_fround(0), $162 = Math_fround(0), $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = Math_fround(0), $176 = 0, $177 = Math_fround(0), $178 = 0, $179 = 0, $18 = 0, $180 = Math_fround(0), $181 = Math_fround(0), $182 = 0, $183 = Math_fround(0), $184 = Math_fround(0), $185 = Math_fround(0), $186 = Math_fround(0), $187 = Math_fround(0), $188 = Math_fround(0);
 var $189 = Math_fround(0), $19 = 0, $190 = Math_fround(0), $191 = 0, $192 = 0, $193 = 0, $194 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0;
 var $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = i64(), $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = i64(), $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0;
 var $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = i64(), $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0;
 var $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = i64(), $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = Math_fround(0);
 var $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $exitcond = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $4 = sp + 96|0;
 $5 = sp + 52|0;
 $6 = sp;
 $7 = ((($0)) + 28|0);
 $8 = load4($7);
 $9 = ($8|0)>($2|0);
 if (!($9)) {
  ___assert_fail((5563|0),(5587|0),386,(5615|0));
  // unreachable;
 }
 $10 = ($8|0)>($3|0);
 if (!($10)) {
  ___assert_fail((5624|0),(5587|0),387,(5615|0));
  // unreachable;
 }
 $11 = ($8|0)>(0);
 if ($11) {
  $12 = ((($0)) + 8|0);
  $13 = ((($0)) + 20|0);
  $14 = ((($0)) + 24|0);
  $$0188 = 0;
  while(1) {
   $32 = load4($12);
   $33 = (($32) + ($$0188<<2)|0);
   $34 = load4($33);
   $35 = load4($13);
   $36 = (($35) + (($$0188*12)|0)|0);
   $37 = ((($34)) + 44|0);
   $38 = load8($37,4);
   store8($36,$38,4);
   $39 = ((($34)) + 56|0);
   $40 = load4($39);
   $41 = load4($13);
   $42 = (((($41) + (($$0188*12)|0)|0)) + 8|0);
   store4($42,$40);
   $43 = load4($14);
   $44 = (($43) + (($$0188*12)|0)|0);
   $45 = ((($34)) + 64|0);
   $46 = load8($45,4);
   store8($44,$46,4);
   $47 = ((($34)) + 72|0);
   $48 = load4($47);
   $15 = load4($14);
   $49 = (((($15) + (($$0188*12)|0)|0)) + 8|0);
   store4($49,$48);
   $50 = (($$0188) + 1)|0;
   $51 = load4($7);
   $52 = ($50|0)<($51|0);
   if ($52) {
    $$0188 = $50;
   } else {
    break;
   }
  }
  $16 = $15;
  $$pre$phi193Z2D = $14;$$pre$phiZ2D = $13;$28 = $16;
 } else {
  $$phi$trans$insert = ((($0)) + 24|0);
  $$pre = load4($$phi$trans$insert);
  $$pre192 = ((($0)) + 20|0);
  $$pre$phi193Z2D = $$phi$trans$insert;$$pre$phiZ2D = $$pre192;$28 = $$pre;
 }
 $17 = ((($0)) + 12|0);
 $18 = load4($17);
 $19 = ((($5)) + 24|0);
 store4($19,$18);
 $20 = ((($0)) + 36|0);
 $21 = load4($20);
 $22 = ((($5)) + 28|0);
 store4($22,$21);
 $23 = load4($0);
 $24 = ((($5)) + 40|0);
 store4($24,$23);
 ; store8($5,load8($1,4),4); store8($5+8 | 0,load8($1+8 | 0,4),4); store8($5+16 | 0,load8($1+16 | 0,4),4);
 $25 = load4($$pre$phiZ2D);
 $26 = ((($5)) + 32|0);
 store4($26,$25);
 $27 = ((($5)) + 36|0);
 store4($27,$28);
 __ZN15b2ContactSolverC2EP18b2ContactSolverDef($6,$5);
 $29 = ((($1)) + 16|0);
 $30 = load4($29);
 $31 = ($30|0)>(0);
 if ($31) {
  $$099183 = 0;
  while(1) {
   $53 = (__ZN15b2ContactSolver27SolveTOIPositionConstraintsEii($6,$2,$3)|0);
   $54 = (($$099183) + 1)|0;
   $$not = $53 ^ 1;
   $55 = load4($29);
   $56 = ($54|0)<($55|0);
   $or$cond = $56 & $$not;
   if ($or$cond) {
    $$099183 = $54;
   } else {
    break;
   }
  }
 }
 $57 = ((($0)) + 8|0);
 $58 = load4($57);
 $59 = (($58) + ($2<<2)|0);
 $60 = load4($59);
 $61 = ((($60)) + 36|0);
 $62 = load4($$pre$phiZ2D);
 $63 = (($62) + (($2*12)|0)|0);
 $64 = load8($63,4);
 store8($61,$64,4);
 $65 = load4($$pre$phiZ2D);
 $66 = (((($65) + (($2*12)|0)|0)) + 8|0);
 $67 = load4($66);
 $68 = load4($57);
 $69 = (($68) + ($2<<2)|0);
 $70 = load4($69);
 $71 = ((($70)) + 52|0);
 store4($71,$67);
 $72 = (($68) + ($3<<2)|0);
 $73 = load4($72);
 $74 = ((($73)) + 36|0);
 $75 = (($65) + (($3*12)|0)|0);
 $76 = load8($75,4);
 store8($74,$76,4);
 $77 = load4($$pre$phiZ2D);
 $78 = (((($77) + (($3*12)|0)|0)) + 8|0);
 $79 = load4($78);
 $80 = load4($57);
 $81 = (($80) + ($3<<2)|0);
 $82 = load4($81);
 $83 = ((($82)) + 52|0);
 store4($83,$79);
 __ZN15b2ContactSolver29InitializeVelocityConstraintsEv($6);
 $84 = ((($1)) + 12|0);
 $85 = load4($84);
 $86 = ($85|0)>(0);
 if ($86) {
  $$0108180 = 0;
  while(1) {
   __ZN15b2ContactSolver24SolveVelocityConstraintsEv($6);
   $90 = (($$0108180) + 1)|0;
   $91 = load4($84);
   $92 = ($90|0)<($91|0);
   if ($92) {
    $$0108180 = $90;
   } else {
    break;
   }
  }
 }
 $87 = loadf($1);
 $88 = load4($7);
 $89 = ($88|0)>(0);
 if ($89) {
  $$0103179 = 0;
  while(1) {
   $121 = load4($$pre$phiZ2D);
   $122 = (($121) + (($$0103179*12)|0)|0);
   $123 = loadf($122);
   $$sroa_idx165 = (((($121) + (($$0103179*12)|0)|0)) + 4|0);
   $124 = loadf($$sroa_idx165);
   $125 = (((($121) + (($$0103179*12)|0)|0)) + 8|0);
   $126 = loadf($125);
   $127 = load4($$pre$phi193Z2D);
   $128 = (($127) + (($$0103179*12)|0)|0);
   $129 = load4($128);
   $$sroa_idx134 = (((($127) + (($$0103179*12)|0)|0)) + 4|0);
   $130 = load4($$sroa_idx134);
   $131 = (((($127) + (($$0103179*12)|0)|0)) + 8|0);
   $132 = loadf($131);
   $133 = i32_bc2f($129);
   $134 = Math_fround($87 * $133);
   $135 = i32_bc2f($130);
   $136 = Math_fround($87 * $135);
   $137 = Math_fround($134 * $134);
   $138 = Math_fround($136 * $136);
   $139 = Math_fround($137 + $138);
   $140 = $139 > Math_fround(4.0);
   if ($140) {
    $141 = (Math_fround(Math_sqrt((Math_fround($139)))));
    $142 = Math_fround(Math_fround(2.0) / $141);
    $143 = Math_fround($133 * $142);
    $144 = i32_bc2i($143);
    $145 = Math_fround($135 * $142);
    $146 = i32_bc2i($145);
    $$sroa$0139$0 = $144;$$sroa$10$0 = $146;
   } else {
    $$sroa$0139$0 = $129;$$sroa$10$0 = $130;
   }
   $147 = Math_fround($87 * $132);
   $148 = Math_fround($147 * $147);
   $149 = $148 > Math_fround(2.46740127);
   if ($149) {
    $150 = $147 > Math_fround(0.0);
    $151 = Math_fround(-$147);
    $152 = $150 ? $147 : $151;
    $153 = Math_fround(Math_fround(1.57079637) / $152);
    $154 = Math_fround($132 * $153);
    $$0102 = $154;
   } else {
    $$0102 = $132;
   }
   $155 = i32_bc2f($$sroa$0139$0);
   $156 = Math_fround($87 * $155);
   $157 = i32_bc2f($$sroa$10$0);
   $158 = Math_fround($87 * $157);
   $159 = Math_fround($123 + $156);
   $160 = Math_fround($124 + $158);
   $161 = Math_fround($87 * $$0102);
   $162 = Math_fround($126 + $161);
   storef($122,$159);
   storef($$sroa_idx165,$160);
   $163 = load4($$pre$phiZ2D);
   $164 = (((($163) + (($$0103179*12)|0)|0)) + 8|0);
   storef($164,$162);
   $165 = load4($$pre$phi193Z2D);
   $166 = (($165) + (($$0103179*12)|0)|0);
   store4($166,$$sroa$0139$0);
   $$sroa_idx = (((($165) + (($$0103179*12)|0)|0)) + 4|0);
   store4($$sroa_idx,$$sroa$10$0);
   $167 = load4($$pre$phi193Z2D);
   $168 = (((($167) + (($$0103179*12)|0)|0)) + 8|0);
   storef($168,$$0102);
   $169 = load4($57);
   $170 = (($169) + ($$0103179<<2)|0);
   $171 = load4($170);
   $172 = ((($171)) + 44|0);
   storef($172,$159);
   $$sroa_idx161 = ((($171)) + 48|0);
   storef($$sroa_idx161,$160);
   $173 = ((($171)) + 56|0);
   storef($173,$162);
   $$sroa_idx128 = ((($171)) + 64|0);
   store4($$sroa_idx128,$$sroa$0139$0);
   $$sroa_idx130 = ((($171)) + 68|0);
   store4($$sroa_idx130,$$sroa$10$0);
   $174 = ((($171)) + 72|0);
   storef($174,$$0102);
   $175 = (Math_fround(_sinf($162)));
   $176 = ((($171)) + 20|0);
   storef($176,$175);
   $177 = (Math_fround(_cosf($162)));
   $178 = ((($171)) + 24|0);
   storef($178,$177);
   $179 = ((($171)) + 28|0);
   $180 = loadf($179);
   $181 = Math_fround($177 * $180);
   $182 = ((($171)) + 32|0);
   $183 = loadf($182);
   $184 = Math_fround($175 * $183);
   $185 = Math_fround($181 - $184);
   $186 = Math_fround($175 * $180);
   $187 = Math_fround($177 * $183);
   $188 = Math_fround($186 + $187);
   $189 = Math_fround($159 - $185);
   $190 = Math_fround($160 - $188);
   $191 = ((($171)) + 12|0);
   storef($191,$189);
   $$sroa_idx5$i = ((($171)) + 16|0);
   storef($$sroa_idx5$i,$190);
   $192 = (($$0103179) + 1)|0;
   $193 = load4($7);
   $194 = ($192|0)<($193|0);
   if ($194) {
    $$0103179 = $192;
   } else {
    break;
   }
  }
 }
 $93 = ((($6)) + 40|0);
 $94 = load4($93);
 $95 = ((($0)) + 4|0);
 $96 = load4($95);
 $97 = ($96|0)==(0|0);
 if ($97) {
  __ZN15b2ContactSolverD2Ev($6);
  STACKTOP = sp;return;
 }
 $98 = load4($20);
 $99 = ($98|0)>(0);
 if (!($99)) {
  __ZN15b2ContactSolverD2Ev($6);
  STACKTOP = sp;return;
 }
 $100 = ((($4)) + 16|0);
 $$02325$i = 0;
 while(1) {
  $101 = load4($17);
  $102 = (($101) + ($$02325$i<<2)|0);
  $103 = load4($102);
  $104 = (((($94) + (($$02325$i*152)|0)|0)) + 144|0);
  $105 = load4($104);
  store4($100,$105);
  $106 = ($105|0)>(0);
  if ($106) {
   $$024$i = 0;
   while(1) {
    $114 = ((((($94) + (($$02325$i*152)|0)|0) + (($$024$i*36)|0)|0)) + 16|0);
    $115 = load4($114);
    $116 = (($4) + ($$024$i<<2)|0);
    store4($116,$115);
    $117 = ((((($94) + (($$02325$i*152)|0)|0) + (($$024$i*36)|0)|0)) + 20|0);
    $118 = load4($117);
    $119 = (((($4)) + 8|0) + ($$024$i<<2)|0);
    store4($119,$118);
    $120 = (($$024$i) + 1)|0;
    $exitcond = ($120|0)==($105|0);
    if ($exitcond) {
     break;
    } else {
     $$024$i = $120;
    }
   }
  }
  $107 = load4($95);
  $108 = load4($107);
  $109 = ((($108)) + 20|0);
  $110 = load4($109);
  FUNCTION_TABLE_viii[$110 & 3]($107,$103,$4);
  $111 = (($$02325$i) + 1)|0;
  $112 = load4($20);
  $113 = ($111|0)<($112|0);
  if ($113) {
   $$02325$i = $111;
  } else {
   break;
  }
 }
 __ZN15b2ContactSolverD2Ev($6);
 STACKTOP = sp;return;
}
function __ZN23b2ChainAndCircleContact8EvaluateEP10b2ManifoldRK11b2TransformS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $4 = sp;
 $5 = ((($0)) + 48|0);
 $6 = load4($5);
 $7 = ((($6)) + 12|0);
 $8 = load4($7);
 store4($4,(1376));
 $9 = ((($4)) + 4|0);
 store4($9,1);
 $10 = ((($4)) + 8|0);
 storef($10,Math_fround(0.00999999977));
 $11 = ((($4)) + 28|0);
 ; store8($11,i64_const(0,0),4); store8($11+8|0,i64_const(0,0),4); store2($11+16|0,0,2);
 $12 = ((($0)) + 56|0);
 $13 = load4($12);
 __ZNK12b2ChainShape12GetChildEdgeEP11b2EdgeShapei($8,$4,$13);
 $14 = ((($0)) + 52|0);
 $15 = load4($14);
 $16 = ((($15)) + 12|0);
 $17 = load4($16);
 __Z22b2CollideEdgeAndCircleP10b2ManifoldPK11b2EdgeShapeRK11b2TransformPK13b2CircleShapeS6_($1,$4,$2,$17,$3);
 STACKTOP = sp;return;
}
function __ZN23b2ChainAndCircleContactD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZN23b2ChainAndCircleContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = (__ZN16b2BlockAllocator8AllocateEi($4,144)|0);
 __ZN9b2ContactC2EP9b2FixtureiS1_i($5,$0,$1,$2,$3);
 store4($5,(1672));
 $6 = ((($5)) + 48|0);
 $7 = load4($6);
 $8 = ((($7)) + 12|0);
 $9 = load4($8);
 $10 = ((($9)) + 4|0);
 $11 = load4($10);
 $12 = ($11|0)==(3);
 if (!($12)) {
  ___assert_fail((5777|0),(5674|0),43,(5726|0));
  // unreachable;
 }
 $13 = ((($5)) + 52|0);
 $14 = load4($13);
 $15 = ((($14)) + 12|0);
 $16 = load4($15);
 $17 = ((($16)) + 4|0);
 $18 = load4($17);
 $19 = ($18|0)==(0);
 if ($19) {
  return ($5|0);
 } else {
  ___assert_fail((6062|0),(5674|0),44,(5726|0));
  // unreachable;
 }
 return (0)|0;
}
function __ZN23b2ChainAndCircleContact7DestroyEP9b2ContactP16b2BlockAllocator($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = ((($2)) + 4|0);
 $4 = load4($3);
 FUNCTION_TABLE_vi[$4 & 31]($0);
 __ZN16b2BlockAllocator4FreeEPvi($1,$0,144);
 return;
}
function __ZN24b2ChainAndPolygonContact8EvaluateEP10b2ManifoldRK11b2TransformS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $4 = sp;
 $5 = ((($0)) + 48|0);
 $6 = load4($5);
 $7 = ((($6)) + 12|0);
 $8 = load4($7);
 store4($4,(1376));
 $9 = ((($4)) + 4|0);
 store4($9,1);
 $10 = ((($4)) + 8|0);
 storef($10,Math_fround(0.00999999977));
 $11 = ((($4)) + 28|0);
 ; store8($11,i64_const(0,0),4); store8($11+8|0,i64_const(0,0),4); store2($11+16|0,0,2);
 $12 = ((($0)) + 56|0);
 $13 = load4($12);
 __ZNK12b2ChainShape12GetChildEdgeEP11b2EdgeShapei($8,$4,$13);
 $14 = ((($0)) + 52|0);
 $15 = load4($14);
 $16 = ((($15)) + 12|0);
 $17 = load4($16);
 __Z23b2CollideEdgeAndPolygonP10b2ManifoldPK11b2EdgeShapeRK11b2TransformPK14b2PolygonShapeS6_($1,$4,$2,$17,$3);
 STACKTOP = sp;return;
}
function __ZN24b2ChainAndPolygonContactD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZN24b2ChainAndPolygonContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = (__ZN16b2BlockAllocator8AllocateEi($4,144)|0);
 __ZN9b2ContactC2EP9b2FixtureiS1_i($5,$0,$1,$2,$3);
 store4($5,(1692));
 $6 = ((($5)) + 48|0);
 $7 = load4($6);
 $8 = ((($7)) + 12|0);
 $9 = load4($8);
 $10 = ((($9)) + 4|0);
 $11 = load4($10);
 $12 = ($11|0)==(3);
 if (!($12)) {
  ___assert_fail((5777|0),(5819|0),43,(5872|0));
  // unreachable;
 }
 $13 = ((($5)) + 52|0);
 $14 = load4($13);
 $15 = ((($14)) + 12|0);
 $16 = load4($15);
 $17 = ((($16)) + 4|0);
 $18 = load4($17);
 $19 = ($18|0)==(2);
 if ($19) {
  return ($5|0);
 } else {
  ___assert_fail((5897|0),(5819|0),44,(5872|0));
  // unreachable;
 }
 return (0)|0;
}
function __ZN24b2ChainAndPolygonContact7DestroyEP9b2ContactP16b2BlockAllocator($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = ((($2)) + 4|0);
 $4 = load4($3);
 FUNCTION_TABLE_vi[$4 & 31]($0);
 __ZN16b2BlockAllocator4FreeEPvi($1,$0,144);
 return;
}
function __ZN15b2CircleContact8EvaluateEP10b2ManifoldRK11b2TransformS4_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($0)) + 48|0);
 $5 = load4($4);
 $6 = ((($5)) + 12|0);
 $7 = load4($6);
 $8 = ((($0)) + 52|0);
 $9 = load4($8);
 $10 = ((($9)) + 12|0);
 $11 = load4($10);
 __Z16b2CollideCirclesP10b2ManifoldPK13b2CircleShapeRK11b2TransformS3_S6_($1,$7,$2,$11,$3);
 return;
}
function __ZN15b2CircleContactD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZN15b2CircleContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = (__ZN16b2BlockAllocator8AllocateEi($4,144)|0);
 __ZN9b2ContactC2EP9b2FixtureiS1_i($5,$0,0,$2,0);
 store4($5,(1712));
 $6 = ((($5)) + 48|0);
 $7 = load4($6);
 $8 = ((($7)) + 12|0);
 $9 = load4($8);
 $10 = ((($9)) + 4|0);
 $11 = load4($10);
 $12 = ($11|0)==(0);
 if (!($12)) {
  ___assert_fail((5959|0),(6002|0),44,(6046|0));
  // unreachable;
 }
 $13 = ((($5)) + 52|0);
 $14 = load4($13);
 $15 = ((($14)) + 12|0);
 $16 = load4($15);
 $17 = ((($16)) + 4|0);
 $18 = load4($17);
 $19 = ($18|0)==(0);
 if ($19) {
  return ($5|0);
 } else {
  ___assert_fail((6062|0),(6002|0),45,(6046|0));
  // unreachable;
 }
 return (0)|0;
}
function __ZN15b2CircleContact7DestroyEP9b2ContactP16b2BlockAllocator($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = load4($0);
 $3 = ((($2)) + 4|0);
 $4 = load4($3);
 FUNCTION_TABLE_vi[$4 & 31]($0);
 __ZN16b2BlockAllocator4FreeEPvi($1,$0,144);
 return;
}
function __ZN15b2ContactSolverC2EP18b2ContactSolverDef($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0126127 = 0, $$0128134 = 0, $$cast = 0, $$in = 0, $$in136 = 0, $$pn = 0, $$pn$in = 0, $$pn137 = 0, $$pn137$in = 0, $$pn138 = 0, $$pre = 0, $$sink = Math_fround(0), $$sink133 = Math_fround(0), $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0;
 var $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = Math_fround(0), $116 = 0, $117 = Math_fround(0), $118 = Math_fround(0), $119 = 0, $12 = 0, $120 = Math_fround(0), $121 = Math_fround(0), $122 = 0, $123 = 0;
 var $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = i64(), $13 = 0, $130 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0;
 var $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0;
 var $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = i64(), $85 = 0, $86 = 0, $87 = i64(), $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = i64(), $95 = 0, $96 = 0, $97 = i64();
 var $98 = 0, $99 = 0, $exitcond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 ; store8($0,load8($1,4),4); store8($0+8 | 0,load8($1+8 | 0,4),4); store8($0+16 | 0,load8($1+16 | 0,4),4);
 $2 = ((($1)) + 40|0);
 $3 = load4($2);
 $4 = ((($0)) + 32|0);
 store4($4,$3);
 $5 = ((($1)) + 28|0);
 $6 = load4($5);
 $7 = ((($0)) + 48|0);
 store4($7,$6);
 $$cast = $3;
 $8 = ($6*88)|0;
 $9 = (__ZN16b2StackAllocator8AllocateEi($$cast,$8)|0);
 $10 = ((($0)) + 36|0);
 store4($10,$9);
 $11 = load4($4);
 $12 = load4($7);
 $13 = ($12*152)|0;
 $14 = (__ZN16b2StackAllocator8AllocateEi($11,$13)|0);
 $15 = ((($0)) + 40|0);
 store4($15,$14);
 $16 = ((($1)) + 32|0);
 $17 = load4($16);
 $18 = ((($0)) + 24|0);
 store4($18,$17);
 $19 = ((($1)) + 36|0);
 $20 = load4($19);
 $21 = ((($0)) + 28|0);
 store4($21,$20);
 $22 = ((($1)) + 24|0);
 $23 = load4($22);
 $24 = ((($0)) + 44|0);
 store4($24,$23);
 $25 = load4($7);
 $26 = ($25|0)>(0);
 if (!($26)) {
  return;
 }
 $27 = $23;
 $28 = ((($0)) + 20|0);
 $29 = ((($0)) + 8|0);
 $30 = load4($27);
 $31 = ((($30)) + 124|0);
 $32 = load4($31);
 $33 = ($32|0)>(0);
 if ($33) {
  $$0128134 = 0;$$pn138 = $30;$71 = $32;
 } else {
  ___assert_fail((6105|0),(6120|0),71,(6164|0));
  // unreachable;
 }
 while(1) {
  $$pn137$in = ((($$pn138)) + 48|0);
  $$pn$in = ((($$pn138)) + 52|0);
  $$pn137 = load4($$pn137$in);
  $$pn = load4($$pn$in);
  $$in136 = ((($$pn137)) + 8|0);
  $$in = ((($$pn)) + 8|0);
  $34 = load4($$in136);
  $35 = load4($$in);
  $36 = ((($$pn)) + 12|0);
  $37 = load4($36);
  $38 = ((($37)) + 8|0);
  $39 = load4($38);
  $40 = ((($$pn137)) + 12|0);
  $41 = load4($40);
  $42 = ((($41)) + 8|0);
  $43 = load4($42);
  $44 = load4($15);
  $45 = ((($$pn138)) + 136|0);
  $46 = load4($45);
  $47 = (((($44) + (($$0128134*152)|0)|0)) + 136|0);
  store4($47,$46);
  $48 = ((($$pn138)) + 140|0);
  $49 = load4($48);
  $50 = (((($44) + (($$0128134*152)|0)|0)) + 140|0);
  store4($50,$49);
  $51 = ((($34)) + 8|0);
  $52 = load4($51);
  $53 = (((($44) + (($$0128134*152)|0)|0)) + 112|0);
  store4($53,$52);
  $54 = ((($35)) + 8|0);
  $55 = load4($54);
  $56 = (((($44) + (($$0128134*152)|0)|0)) + 116|0);
  store4($56,$55);
  $57 = ((($34)) + 120|0);
  $58 = load4($57);
  $59 = (((($44) + (($$0128134*152)|0)|0)) + 120|0);
  store4($59,$58);
  $60 = ((($35)) + 120|0);
  $61 = load4($60);
  $62 = (((($44) + (($$0128134*152)|0)|0)) + 124|0);
  store4($62,$61);
  $63 = ((($34)) + 128|0);
  $64 = load4($63);
  $65 = (((($44) + (($$0128134*152)|0)|0)) + 128|0);
  store4($65,$64);
  $66 = ((($35)) + 128|0);
  $67 = load4($66);
  $68 = (((($44) + (($$0128134*152)|0)|0)) + 132|0);
  store4($68,$67);
  $69 = (((($44) + (($$0128134*152)|0)|0)) + 148|0);
  store4($69,$$0128134);
  $70 = (((($44) + (($$0128134*152)|0)|0)) + 144|0);
  store4($70,$71);
  $72 = (((($44) + (($$0128134*152)|0)|0)) + 80|0);
  ; store8($72,i64_const(0,0),4); store8($72+8|0,i64_const(0,0),4); store8($72+16|0,i64_const(0,0),4); store8($72+24|0,i64_const(0,0),4);
  $73 = load4($10);
  $74 = load4($51);
  $75 = (((($73) + (($$0128134*88)|0)|0)) + 32|0);
  store4($75,$74);
  $76 = load4($54);
  $77 = (((($73) + (($$0128134*88)|0)|0)) + 36|0);
  store4($77,$76);
  $78 = load4($57);
  $79 = (((($73) + (($$0128134*88)|0)|0)) + 40|0);
  store4($79,$78);
  $80 = load4($60);
  $81 = (((($73) + (($$0128134*88)|0)|0)) + 44|0);
  store4($81,$80);
  $82 = (((($73) + (($$0128134*88)|0)|0)) + 48|0);
  $83 = ((($34)) + 28|0);
  $84 = load8($83,4);
  store8($82,$84,4);
  $85 = (((($73) + (($$0128134*88)|0)|0)) + 56|0);
  $86 = ((($35)) + 28|0);
  $87 = load8($86,4);
  store8($85,$87,4);
  $88 = load4($63);
  $89 = (((($73) + (($$0128134*88)|0)|0)) + 64|0);
  store4($89,$88);
  $90 = load4($66);
  $91 = (((($73) + (($$0128134*88)|0)|0)) + 68|0);
  store4($91,$90);
  $92 = (((($73) + (($$0128134*88)|0)|0)) + 16|0);
  $93 = ((($$pn138)) + 104|0);
  $94 = load8($93,4);
  store8($92,$94,4);
  $95 = (((($73) + (($$0128134*88)|0)|0)) + 24|0);
  $96 = ((($$pn138)) + 112|0);
  $97 = load8($96,4);
  store8($95,$97,4);
  $98 = (((($73) + (($$0128134*88)|0)|0)) + 84|0);
  store4($98,$71);
  $99 = (((($73) + (($$0128134*88)|0)|0)) + 76|0);
  store4($99,$43);
  $100 = (((($73) + (($$0128134*88)|0)|0)) + 80|0);
  store4($100,$39);
  $101 = ((($$pn138)) + 120|0);
  $102 = load4($101);
  $103 = (((($73) + (($$0128134*88)|0)|0)) + 72|0);
  store4($103,$102);
  $$0126127 = 0;
  while(1) {
   $112 = (((($$pn138)) + 64|0) + (($$0126127*20)|0)|0);
   $113 = load1($28);
   $114 = ($113<<24>>24)==(0);
   if ($114) {
    $$sink = Math_fround(0.0);$$sink133 = Math_fround(0.0);
   } else {
    $115 = loadf($29);
    $116 = (((((($$pn138)) + 64|0) + (($$0126127*20)|0)|0)) + 8|0);
    $117 = loadf($116);
    $118 = Math_fround($115 * $117);
    $119 = (((((($$pn138)) + 64|0) + (($$0126127*20)|0)|0)) + 12|0);
    $120 = loadf($119);
    $121 = Math_fround($115 * $120);
    $$sink = $121;$$sink133 = $118;
   }
   $122 = ((((($44) + (($$0128134*152)|0)|0) + (($$0126127*36)|0)|0)) + 16|0);
   storef($122,$$sink133);
   $123 = ((((($44) + (($$0128134*152)|0)|0) + (($$0126127*36)|0)|0)) + 20|0);
   storef($123,$$sink);
   $124 = ((($44) + (($$0128134*152)|0)|0) + (($$0126127*36)|0)|0);
   $125 = ((((($44) + (($$0128134*152)|0)|0) + (($$0126127*36)|0)|0)) + 24|0);
   storef($125,Math_fround(0.0));
   $126 = ((((($44) + (($$0128134*152)|0)|0) + (($$0126127*36)|0)|0)) + 28|0);
   storef($126,Math_fround(0.0));
   $127 = ((((($44) + (($$0128134*152)|0)|0) + (($$0126127*36)|0)|0)) + 32|0);
   storef($127,Math_fround(0.0));
   $128 = ((($73) + (($$0128134*88)|0)|0) + ($$0126127<<3)|0);
   ; store8($124,i64_const(0,0),4); store8($124+8|0,i64_const(0,0),4);
   $129 = load8($112,4);
   store8($128,$129,4);
   $130 = (($$0126127) + 1)|0;
   $exitcond = ($130|0)==($71|0);
   if ($exitcond) {
    break;
   } else {
    $$0126127 = $130;
   }
  }
  $104 = (($$0128134) + 1)|0;
  $105 = load4($7);
  $106 = ($104|0)<($105|0);
  if (!($106)) {
   label = 3;
   break;
  }
  $$pre = load4($24);
  $107 = (($$pre) + ($104<<2)|0);
  $108 = load4($107);
  $109 = ((($108)) + 124|0);
  $110 = load4($109);
  $111 = ($110|0)>(0);
  if ($111) {
   $$0128134 = $104;$$pn138 = $108;$71 = $110;
  } else {
   label = 4;
   break;
  }
 }
 if ((label|0) == 3) {
  return;
 }
 else if ((label|0) == 4) {
  ___assert_fail((6105|0),(6120|0),71,(6164|0));
  // unreachable;
 }
}
function __ZN15b2ContactSolverD2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 32|0);
 $2 = load4($1);
 $3 = ((($0)) + 40|0);
 $4 = load4($3);
 __ZN16b2StackAllocator4FreeEPv($2,$4);
 $5 = load4($1);
 $6 = ((($0)) + 36|0);
 $7 = load4($6);
 __ZN16b2StackAllocator4FreeEPv($5,$7);
 return;
}
function __ZN15b2ContactSolver29InitializeVelocityConstraintsEv($0) {
 $0 = $0|0;
 var $$0$i = Math_fround(0), $$0199338 = 0, $$0339 = 0, $$pre = 0, $$sroa$0$0$$sroa_idx = 0, $$sroa$4$0$$sroa_idx210 = 0, $$sroa$5$0$$sroa_idx212 = 0, $$sroa$6$0$$sroa_idx214 = 0, $$sroa_idx = 0, $$sroa_idx251 = 0, $$sroa_idx263 = 0, $$sroa_idx275 = 0, $$sroa_idx282 = 0, $$sroa_idx291 = 0, $$sroa_idx302 = 0, $$sroa_idx311 = 0, $$sroa_idx322 = 0, $$sroa_idx331 = 0, $1 = 0, $10 = 0;
 var $100 = 0, $101 = Math_fround(0), $102 = Math_fround(0), $103 = 0, $104 = Math_fround(0), $105 = Math_fround(0), $106 = 0, $107 = Math_fround(0), $108 = Math_fround(0), $109 = Math_fround(0), $11 = 0, $110 = Math_fround(0), $111 = 0, $112 = Math_fround(0), $113 = Math_fround(0), $114 = Math_fround(0), $115 = Math_fround(0), $116 = Math_fround(0), $117 = Math_fround(0), $118 = Math_fround(0);
 var $119 = Math_fround(0), $12 = 0, $120 = Math_fround(0), $121 = Math_fround(0), $122 = Math_fround(0), $123 = Math_fround(0), $124 = Math_fround(0), $125 = Math_fround(0), $126 = 0, $127 = Math_fround(0), $128 = Math_fround(0), $129 = 0, $13 = 0, $130 = Math_fround(0), $131 = Math_fround(0), $132 = Math_fround(0), $133 = Math_fround(0), $134 = Math_fround(0), $135 = Math_fround(0), $136 = Math_fround(0);
 var $137 = Math_fround(0), $138 = Math_fround(0), $139 = Math_fround(0), $14 = 0, $140 = Math_fround(0), $141 = Math_fround(0), $142 = Math_fround(0), $143 = Math_fround(0), $144 = Math_fround(0), $145 = 0, $146 = Math_fround(0), $147 = Math_fround(0), $148 = 0, $149 = 0, $15 = 0, $150 = Math_fround(0), $151 = Math_fround(0), $152 = Math_fround(0), $153 = Math_fround(0), $154 = Math_fround(0);
 var $155 = Math_fround(0), $156 = Math_fround(0), $157 = Math_fround(0), $158 = Math_fround(0), $159 = Math_fround(0), $16 = 0, $160 = Math_fround(0), $161 = Math_fround(0), $162 = Math_fround(0), $163 = Math_fround(0), $164 = Math_fround(0), $165 = 0, $166 = Math_fround(0), $167 = Math_fround(0), $168 = Math_fround(0), $169 = 0, $17 = 0, $170 = 0, $171 = Math_fround(0), $172 = 0;
 var $173 = Math_fround(0), $174 = Math_fround(0), $175 = 0, $176 = Math_fround(0), $177 = Math_fround(0), $178 = Math_fround(0), $179 = Math_fround(0), $18 = 0, $180 = 0, $181 = Math_fround(0), $182 = Math_fround(0), $183 = 0, $184 = Math_fround(0), $185 = Math_fround(0), $186 = Math_fround(0), $187 = 0, $188 = Math_fround(0), $189 = Math_fround(0), $19 = 0, $190 = 0;
 var $191 = Math_fround(0), $192 = Math_fround(0), $193 = Math_fround(0), $194 = 0, $195 = Math_fround(0), $196 = Math_fround(0), $197 = 0, $198 = Math_fround(0), $199 = Math_fround(0), $2 = 0, $20 = 0, $200 = Math_fround(0), $201 = Math_fround(0), $202 = Math_fround(0), $203 = Math_fround(0), $204 = Math_fround(0), $205 = Math_fround(0), $206 = Math_fround(0), $207 = Math_fround(0), $208 = Math_fround(0);
 var $209 = Math_fround(0), $21 = 0, $210 = Math_fround(0), $211 = Math_fround(0), $212 = Math_fround(0), $213 = Math_fround(0), $214 = Math_fround(0), $215 = Math_fround(0), $216 = Math_fround(0), $217 = Math_fround(0), $218 = Math_fround(0), $219 = Math_fround(0), $22 = 0, $220 = Math_fround(0), $221 = Math_fround(0), $222 = Math_fround(0), $223 = 0, $224 = 0, $225 = 0, $226 = 0;
 var $227 = 0, $228 = 0, $229 = Math_fround(0), $23 = 0, $230 = Math_fround(0), $231 = Math_fround(0), $232 = Math_fround(0), $233 = Math_fround(0), $234 = 0, $235 = 0, $236 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = Math_fround(0), $29 = 0, $3 = 0, $30 = Math_fround(0), $31 = 0;
 var $32 = Math_fround(0), $33 = 0, $34 = Math_fround(0), $35 = 0, $36 = 0, $37 = Math_fround(0), $38 = 0, $39 = 0, $4 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = 0, $43 = Math_fround(0), $44 = 0, $45 = Math_fround(0), $46 = 0, $47 = Math_fround(0), $48 = Math_fround(0), $49 = 0, $5 = 0;
 var $50 = Math_fround(0), $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = Math_fround(0), $56 = 0, $57 = Math_fround(0), $58 = Math_fround(0), $59 = 0, $6 = 0, $60 = Math_fround(0), $61 = Math_fround(0), $62 = 0, $63 = Math_fround(0), $64 = Math_fround(0), $65 = 0, $66 = Math_fround(0), $67 = 0, $68 = Math_fround(0);
 var $69 = 0, $7 = 0, $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = Math_fround(0), $76 = Math_fround(0), $77 = Math_fround(0), $78 = Math_fround(0), $79 = Math_fround(0), $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = Math_fround(0), $85 = Math_fround(0), $86 = Math_fround(0);
 var $87 = Math_fround(0), $88 = Math_fround(0), $89 = Math_fround(0), $9 = 0, $90 = Math_fround(0), $91 = 0, $92 = i64(), $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = Math_fround(0), $98 = 0, $99 = 0, $exitcond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $1 = sp + 40|0;
 $2 = sp + 24|0;
 $3 = sp;
 $4 = ((($0)) + 48|0);
 $5 = load4($4);
 $6 = ($5|0)>(0);
 if (!($6)) {
  STACKTOP = sp;return;
 }
 $7 = ((($0)) + 40|0);
 $8 = ((($0)) + 36|0);
 $9 = ((($0)) + 44|0);
 $10 = ((($0)) + 24|0);
 $11 = ((($0)) + 28|0);
 $12 = ((($1)) + 8|0);
 $13 = ((($1)) + 12|0);
 $14 = ((($2)) + 8|0);
 $15 = ((($2)) + 12|0);
 $$sroa_idx275 = ((($1)) + 4|0);
 $$sroa_idx263 = ((($2)) + 4|0);
 $$0339 = 0;
 while(1) {
  $16 = load4($7);
  $17 = load4($8);
  $18 = (((($16) + (($$0339*152)|0)|0)) + 148|0);
  $19 = load4($18);
  $20 = load4($9);
  $21 = (($20) + ($19<<2)|0);
  $22 = load4($21);
  $23 = (((($16) + (($$0339*152)|0)|0)) + 112|0);
  $24 = load4($23);
  $25 = (((($16) + (($$0339*152)|0)|0)) + 116|0);
  $26 = load4($25);
  $27 = (((($16) + (($$0339*152)|0)|0)) + 120|0);
  $28 = loadf($27);
  $29 = (((($16) + (($$0339*152)|0)|0)) + 124|0);
  $30 = loadf($29);
  $31 = (((($16) + (($$0339*152)|0)|0)) + 128|0);
  $32 = loadf($31);
  $33 = (((($16) + (($$0339*152)|0)|0)) + 132|0);
  $34 = loadf($33);
  $35 = load4($10);
  $36 = (((($35) + (($24*12)|0)|0)) + 8|0);
  $37 = loadf($36);
  $38 = load4($11);
  $39 = (($38) + (($24*12)|0)|0);
  $40 = loadf($39);
  $$sroa_idx302 = (((($38) + (($24*12)|0)|0)) + 4|0);
  $41 = loadf($$sroa_idx302);
  $42 = (((($38) + (($24*12)|0)|0)) + 8|0);
  $43 = loadf($42);
  $44 = (((($35) + (($26*12)|0)|0)) + 8|0);
  $45 = loadf($44);
  $46 = (($38) + (($26*12)|0)|0);
  $47 = loadf($46);
  $$sroa_idx282 = (((($38) + (($26*12)|0)|0)) + 4|0);
  $48 = loadf($$sroa_idx282);
  $49 = (((($38) + (($26*12)|0)|0)) + 8|0);
  $50 = loadf($49);
  $51 = ((($22)) + 124|0);
  $52 = load4($51);
  $53 = ($52|0)>(0);
  if (!($53)) {
   label = 5;
   break;
  }
  $54 = ((($22)) + 64|0);
  $$sroa_idx291 = (((($35) + (($26*12)|0)|0)) + 4|0);
  $55 = loadf($$sroa_idx291);
  $56 = (($35) + (($26*12)|0)|0);
  $57 = loadf($56);
  $$sroa_idx311 = (((($35) + (($24*12)|0)|0)) + 4|0);
  $58 = loadf($$sroa_idx311);
  $59 = (($35) + (($24*12)|0)|0);
  $60 = loadf($59);
  $$sroa_idx322 = (((($17) + (($$0339*88)|0)|0)) + 60|0);
  $61 = loadf($$sroa_idx322);
  $62 = (((($17) + (($$0339*88)|0)|0)) + 56|0);
  $63 = loadf($62);
  $$sroa_idx331 = (((($17) + (($$0339*88)|0)|0)) + 52|0);
  $64 = loadf($$sroa_idx331);
  $65 = (((($17) + (($$0339*88)|0)|0)) + 48|0);
  $66 = loadf($65);
  $67 = (((($17) + (($$0339*88)|0)|0)) + 80|0);
  $68 = loadf($67);
  $69 = (((($17) + (($$0339*88)|0)|0)) + 76|0);
  $70 = loadf($69);
  $71 = (Math_fround(_sinf($37)));
  storef($12,$71);
  $72 = (Math_fround(_cosf($37)));
  storef($13,$72);
  $73 = (Math_fround(_sinf($45)));
  storef($14,$73);
  $74 = (Math_fround(_cosf($45)));
  storef($15,$74);
  $75 = Math_fround($66 * $72);
  $76 = Math_fround($64 * $71);
  $77 = Math_fround($75 - $76);
  $78 = Math_fround($66 * $71);
  $79 = Math_fround($64 * $72);
  $80 = Math_fround($79 + $78);
  $81 = Math_fround($60 - $77);
  $82 = Math_fround($58 - $80);
  storef($1,$81);
  storef($$sroa_idx275,$82);
  $83 = Math_fround($63 * $74);
  $84 = Math_fround($61 * $73);
  $85 = Math_fround($83 - $84);
  $86 = Math_fround($63 * $73);
  $87 = Math_fround($61 * $74);
  $88 = Math_fround($87 + $86);
  $89 = Math_fround($57 - $85);
  $90 = Math_fround($55 - $88);
  storef($2,$89);
  storef($$sroa_idx263,$90);
  __ZN15b2WorldManifold10InitializeEPK10b2ManifoldRK11b2TransformfS5_f($3,$54,$1,$70,$2,$68);
  $91 = (((($16) + (($$0339*152)|0)|0)) + 72|0);
  $92 = load8($3);
  store8($91,$92,4);
  $93 = (((($16) + (($$0339*152)|0)|0)) + 144|0);
  $94 = load4($93);
  $95 = ($94|0)>(0);
  do {
   if ($95) {
    $96 = (((($16) + (($$0339*152)|0)|0)) + 76|0);
    $97 = Math_fround($28 + $30);
    $98 = (((($16) + (($$0339*152)|0)|0)) + 140|0);
    $$0199338 = 0;
    while(1) {
     $100 = (((($3)) + 8|0) + ($$0199338<<3)|0);
     $101 = loadf($100);
     $102 = Math_fround($101 - $60);
     $103 = (((((($3)) + 8|0) + ($$0199338<<3)|0)) + 4|0);
     $104 = loadf($103);
     $105 = Math_fround($104 - $58);
     $106 = ((($16) + (($$0339*152)|0)|0) + (($$0199338*36)|0)|0);
     storef($106,$102);
     $$sroa_idx251 = ((((($16) + (($$0339*152)|0)|0) + (($$0199338*36)|0)|0)) + 4|0);
     storef($$sroa_idx251,$105);
     $107 = loadf($100);
     $108 = Math_fround($107 - $57);
     $109 = loadf($103);
     $110 = Math_fround($109 - $55);
     $111 = ((((($16) + (($$0339*152)|0)|0) + (($$0199338*36)|0)|0)) + 8|0);
     storef($111,$108);
     $$sroa_idx = ((((($16) + (($$0339*152)|0)|0) + (($$0199338*36)|0)|0)) + 12|0);
     storef($$sroa_idx,$110);
     $112 = loadf($96);
     $113 = Math_fround($102 * $112);
     $114 = loadf($91);
     $115 = Math_fround($105 * $114);
     $116 = Math_fround($113 - $115);
     $117 = Math_fround($112 * $108);
     $118 = Math_fround($114 * $110);
     $119 = Math_fround($117 - $118);
     $120 = Math_fround($32 * $116);
     $121 = Math_fround($116 * $120);
     $122 = Math_fround($97 + $121);
     $123 = Math_fround($34 * $119);
     $124 = Math_fround($119 * $123);
     $125 = Math_fround($122 + $124);
     $126 = $125 > Math_fround(0.0);
     $127 = Math_fround(Math_fround(1.0) / $125);
     $128 = $126 ? $127 : Math_fround(0.0);
     $129 = ((((($16) + (($$0339*152)|0)|0) + (($$0199338*36)|0)|0)) + 24|0);
     storef($129,$128);
     $130 = loadf($96);
     $131 = loadf($91);
     $132 = Math_fround(-$131);
     $133 = Math_fround($102 * $132);
     $134 = Math_fround($130 * $105);
     $135 = Math_fround($133 - $134);
     $136 = Math_fround($108 * $132);
     $137 = Math_fround($130 * $110);
     $138 = Math_fround($136 - $137);
     $139 = Math_fround($32 * $135);
     $140 = Math_fround($135 * $139);
     $141 = Math_fround($97 + $140);
     $142 = Math_fround($34 * $138);
     $143 = Math_fround($138 * $142);
     $144 = Math_fround($141 + $143);
     $145 = $144 > Math_fround(0.0);
     $146 = Math_fround(Math_fround(1.0) / $144);
     $147 = $145 ? $146 : Math_fround(0.0);
     $148 = ((((($16) + (($$0339*152)|0)|0) + (($$0199338*36)|0)|0)) + 28|0);
     storef($148,$147);
     $149 = ((((($16) + (($$0339*152)|0)|0) + (($$0199338*36)|0)|0)) + 32|0);
     storef($149,Math_fround(0.0));
     $150 = Math_fround($50 * $110);
     $151 = Math_fround($50 * $108);
     $152 = Math_fround($47 - $150);
     $153 = Math_fround($48 + $151);
     $154 = Math_fround($152 - $40);
     $155 = Math_fround($153 - $41);
     $156 = Math_fround($43 * $105);
     $157 = Math_fround($43 * $102);
     $158 = Math_fround($154 + $156);
     $159 = Math_fround($155 - $157);
     $160 = loadf($91);
     $161 = Math_fround($160 * $158);
     $162 = loadf($96);
     $163 = Math_fround($162 * $159);
     $164 = Math_fround($161 + $163);
     $165 = $164 < Math_fround(-1.0);
     if ($165) {
      $166 = loadf($98);
      $167 = Math_fround($164 * $166);
      $168 = Math_fround(-$167);
      storef($149,$168);
     }
     $169 = (($$0199338) + 1)|0;
     $exitcond = ($169|0)==($94|0);
     if ($exitcond) {
      break;
     } else {
      $$0199338 = $169;
     }
    }
    $$pre = load4($93);
    $99 = ($$pre|0)==(2);
    if ($99) {
     $170 = (($16) + (($$0339*152)|0)|0);
     $171 = loadf($170);
     $172 = (((($16) + (($$0339*152)|0)|0)) + 76|0);
     $173 = loadf($172);
     $174 = Math_fround($171 * $173);
     $175 = (((($16) + (($$0339*152)|0)|0)) + 4|0);
     $176 = loadf($175);
     $177 = loadf($91);
     $178 = Math_fround($176 * $177);
     $179 = Math_fround($174 - $178);
     $180 = (((($16) + (($$0339*152)|0)|0)) + 8|0);
     $181 = loadf($180);
     $182 = Math_fround($173 * $181);
     $183 = (((($16) + (($$0339*152)|0)|0)) + 12|0);
     $184 = loadf($183);
     $185 = Math_fround($177 * $184);
     $186 = Math_fround($182 - $185);
     $187 = (((($16) + (($$0339*152)|0)|0)) + 36|0);
     $188 = loadf($187);
     $189 = Math_fround($173 * $188);
     $190 = (((($16) + (($$0339*152)|0)|0)) + 40|0);
     $191 = loadf($190);
     $192 = Math_fround($177 * $191);
     $193 = Math_fround($189 - $192);
     $194 = (((($16) + (($$0339*152)|0)|0)) + 44|0);
     $195 = loadf($194);
     $196 = Math_fround($173 * $195);
     $197 = (((($16) + (($$0339*152)|0)|0)) + 48|0);
     $198 = loadf($197);
     $199 = Math_fround($177 * $198);
     $200 = Math_fround($196 - $199);
     $201 = Math_fround($28 + $30);
     $202 = Math_fround($32 * $179);
     $203 = Math_fround($179 * $202);
     $204 = Math_fround($201 + $203);
     $205 = Math_fround($34 * $186);
     $206 = Math_fround($186 * $205);
     $207 = Math_fround($204 + $206);
     $208 = Math_fround($32 * $193);
     $209 = Math_fround($193 * $208);
     $210 = Math_fround($201 + $209);
     $211 = Math_fround($34 * $200);
     $212 = Math_fround($200 * $211);
     $213 = Math_fround($210 + $212);
     $214 = Math_fround($202 * $193);
     $215 = Math_fround($201 + $214);
     $216 = Math_fround($205 * $200);
     $217 = Math_fround($215 + $216);
     $218 = Math_fround($207 * $207);
     $219 = Math_fround($207 * $213);
     $220 = Math_fround($217 * $217);
     $221 = Math_fround($219 - $220);
     $222 = Math_fround($221 * Math_fround(1000.0));
     $223 = $218 < $222;
     if ($223) {
      $224 = (((($16) + (($$0339*152)|0)|0)) + 96|0);
      storef($224,$207);
      $225 = (((($16) + (($$0339*152)|0)|0)) + 100|0);
      storef($225,$217);
      $226 = (((($16) + (($$0339*152)|0)|0)) + 104|0);
      storef($226,$217);
      $227 = (((($16) + (($$0339*152)|0)|0)) + 108|0);
      storef($227,$213);
      $228 = $221 != Math_fround(0.0);
      $229 = Math_fround(Math_fround(1.0) / $221);
      $$0$i = $228 ? $229 : $221;
      $230 = Math_fround($213 * $$0$i);
      $231 = Math_fround($$0$i * $217);
      $232 = Math_fround(-$231);
      $233 = Math_fround($207 * $$0$i);
      $$sroa$0$0$$sroa_idx = (((($16) + (($$0339*152)|0)|0)) + 80|0);
      storef($$sroa$0$0$$sroa_idx,$230);
      $$sroa$4$0$$sroa_idx210 = (((($16) + (($$0339*152)|0)|0)) + 84|0);
      storef($$sroa$4$0$$sroa_idx210,$232);
      $$sroa$5$0$$sroa_idx212 = (((($16) + (($$0339*152)|0)|0)) + 88|0);
      storef($$sroa$5$0$$sroa_idx212,$232);
      $$sroa$6$0$$sroa_idx214 = (((($16) + (($$0339*152)|0)|0)) + 92|0);
      storef($$sroa$6$0$$sroa_idx214,$233);
      break;
     } else {
      store4($93,1);
      break;
     }
    }
   }
  } while(0);
  $234 = (($$0339) + 1)|0;
  $235 = load4($4);
  $236 = ($234|0)<($235|0);
  if ($236) {
   $$0339 = $234;
  } else {
   label = 3;
   break;
  }
 }
 if ((label|0) == 3) {
  STACKTOP = sp;return;
 }
 else if ((label|0) == 5) {
  ___assert_fail((6180|0),(6120|0),168,(6205|0));
  // unreachable;
 }
}
function __ZN15b2ContactSolver9WarmStartEv($0) {
 $0 = $0|0;
 var $$0146 = 0, $$061140 = 0, $$062$lcssa = Math_fround(0), $$062139 = Math_fround(0), $$063$lcssa = Math_fround(0), $$063138 = Math_fround(0), $$pre = 0, $$sroa$0113$0$lcssa = 0, $$sroa$0113$0134 = 0, $$sroa$0129$0$lcssa = 0, $$sroa$0129$0136 = 0, $$sroa$6$0$lcssa = 0, $$sroa$6$0135 = 0, $$sroa$6132$0$lcssa = 0, $$sroa$6132$0137 = 0, $$sroa_idx = 0, $$sroa_idx104 = 0, $$sroa_idx108 = 0, $$sroa_idx124 = 0, $1 = 0;
 var $10 = 0, $11 = 0, $12 = Math_fround(0), $13 = 0, $14 = Math_fround(0), $15 = 0, $16 = Math_fround(0), $17 = 0, $18 = Math_fround(0), $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = Math_fround(0), $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = Math_fround(0), $32 = 0, $33 = Math_fround(0), $34 = Math_fround(0), $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = Math_fround(0), $46 = Math_fround(0);
 var $47 = Math_fround(0), $48 = 0, $49 = Math_fround(0), $5 = 0, $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = 0, $55 = Math_fround(0), $56 = Math_fround(0), $57 = 0, $58 = Math_fround(0), $59 = Math_fround(0), $6 = 0, $60 = Math_fround(0), $61 = Math_fround(0), $62 = Math_fround(0), $63 = Math_fround(0), $64 = Math_fround(0);
 var $65 = Math_fround(0), $66 = Math_fround(0), $67 = 0, $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = 0, $71 = 0, $72 = Math_fround(0), $73 = Math_fround(0), $74 = 0, $75 = Math_fround(0), $76 = Math_fround(0), $77 = Math_fround(0), $78 = Math_fround(0), $79 = Math_fround(0), $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0);
 var $83 = Math_fround(0), $84 = 0, $85 = Math_fround(0), $86 = Math_fround(0), $87 = 0, $88 = 0, $9 = 0, $exitcond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 48|0);
 $2 = load4($1);
 $3 = ($2|0)>(0);
 if (!($3)) {
  return;
 }
 $4 = ((($0)) + 40|0);
 $5 = ((($0)) + 28|0);
 $$pre = load4($5);
 $$0146 = 0;$22 = $$pre;
 while(1) {
  $6 = load4($4);
  $7 = (((($6) + (($$0146*152)|0)|0)) + 112|0);
  $8 = load4($7);
  $9 = (((($6) + (($$0146*152)|0)|0)) + 116|0);
  $10 = load4($9);
  $11 = (((($6) + (($$0146*152)|0)|0)) + 120|0);
  $12 = loadf($11);
  $13 = (((($6) + (($$0146*152)|0)|0)) + 128|0);
  $14 = loadf($13);
  $15 = (((($6) + (($$0146*152)|0)|0)) + 124|0);
  $16 = loadf($15);
  $17 = (((($6) + (($$0146*152)|0)|0)) + 132|0);
  $18 = loadf($17);
  $19 = (((($6) + (($$0146*152)|0)|0)) + 144|0);
  $20 = load4($19);
  $21 = (($22) + (($8*12)|0)|0);
  $23 = load4($21);
  $$sroa_idx124 = (((($22) + (($8*12)|0)|0)) + 4|0);
  $24 = load4($$sroa_idx124);
  $25 = (((($22) + (($8*12)|0)|0)) + 8|0);
  $26 = loadf($25);
  $27 = (($22) + (($10*12)|0)|0);
  $28 = load4($27);
  $$sroa_idx108 = (((($22) + (($10*12)|0)|0)) + 4|0);
  $29 = load4($$sroa_idx108);
  $30 = (((($22) + (($10*12)|0)|0)) + 8|0);
  $31 = loadf($30);
  $32 = (((($6) + (($$0146*152)|0)|0)) + 72|0);
  $33 = loadf($32);
  $$sroa_idx = (((($6) + (($$0146*152)|0)|0)) + 76|0);
  $34 = loadf($$sroa_idx);
  $35 = ($20|0)>(0);
  if ($35) {
   $$061140 = 0;$$062139 = $31;$$063138 = $26;$$sroa$0113$0134 = $28;$$sroa$0129$0136 = $23;$$sroa$6$0135 = $29;$$sroa$6132$0137 = $24;
   while(1) {
    $44 = ((((($6) + (($$0146*152)|0)|0) + (($$061140*36)|0)|0)) + 16|0);
    $45 = loadf($44);
    $46 = Math_fround($33 * $45);
    $47 = Math_fround($34 * $45);
    $48 = ((((($6) + (($$0146*152)|0)|0) + (($$061140*36)|0)|0)) + 20|0);
    $49 = loadf($48);
    $50 = Math_fround($34 * $49);
    $51 = Math_fround($33 * $49);
    $52 = Math_fround($46 + $50);
    $53 = Math_fround($47 - $51);
    $54 = ((($6) + (($$0146*152)|0)|0) + (($$061140*36)|0)|0);
    $55 = loadf($54);
    $56 = Math_fround($55 * $53);
    $57 = ((((($6) + (($$0146*152)|0)|0) + (($$061140*36)|0)|0)) + 4|0);
    $58 = loadf($57);
    $59 = Math_fround($58 * $52);
    $60 = Math_fround($56 - $59);
    $61 = Math_fround($14 * $60);
    $62 = Math_fround($$063138 - $61);
    $63 = Math_fround($12 * $52);
    $64 = Math_fround($12 * $53);
    $65 = i32_bc2f($$sroa$0129$0136);
    $66 = Math_fround($65 - $63);
    $67 = i32_bc2i($66);
    $68 = i32_bc2f($$sroa$6132$0137);
    $69 = Math_fround($68 - $64);
    $70 = i32_bc2i($69);
    $71 = ((((($6) + (($$0146*152)|0)|0) + (($$061140*36)|0)|0)) + 8|0);
    $72 = loadf($71);
    $73 = Math_fround($53 * $72);
    $74 = ((((($6) + (($$0146*152)|0)|0) + (($$061140*36)|0)|0)) + 12|0);
    $75 = loadf($74);
    $76 = Math_fround($52 * $75);
    $77 = Math_fround($73 - $76);
    $78 = Math_fround($18 * $77);
    $79 = Math_fround($$062139 + $78);
    $80 = Math_fround($16 * $52);
    $81 = Math_fround($16 * $53);
    $82 = i32_bc2f($$sroa$0113$0134);
    $83 = Math_fround($82 + $80);
    $84 = i32_bc2i($83);
    $85 = i32_bc2f($$sroa$6$0135);
    $86 = Math_fround($85 + $81);
    $87 = i32_bc2i($86);
    $88 = (($$061140) + 1)|0;
    $exitcond = ($88|0)==($20|0);
    if ($exitcond) {
     $$062$lcssa = $79;$$063$lcssa = $62;$$sroa$0113$0$lcssa = $84;$$sroa$0129$0$lcssa = $67;$$sroa$6$0$lcssa = $87;$$sroa$6132$0$lcssa = $70;
     break;
    } else {
     $$061140 = $88;$$062139 = $79;$$063138 = $62;$$sroa$0113$0134 = $84;$$sroa$0129$0136 = $67;$$sroa$6$0135 = $87;$$sroa$6132$0137 = $70;
    }
   }
  } else {
   $$062$lcssa = $31;$$063$lcssa = $26;$$sroa$0113$0$lcssa = $28;$$sroa$0129$0$lcssa = $23;$$sroa$6$0$lcssa = $29;$$sroa$6132$0$lcssa = $24;
  }
  store4($21,$$sroa$0129$0$lcssa);
  store4($$sroa_idx124,$$sroa$6132$0$lcssa);
  $36 = load4($5);
  $37 = (((($36) + (($8*12)|0)|0)) + 8|0);
  storef($37,$$063$lcssa);
  $38 = (($36) + (($10*12)|0)|0);
  store4($38,$$sroa$0113$0$lcssa);
  $$sroa_idx104 = (((($36) + (($10*12)|0)|0)) + 4|0);
  store4($$sroa_idx104,$$sroa$6$0$lcssa);
  $39 = load4($5);
  $40 = (((($39) + (($10*12)|0)|0)) + 8|0);
  storef($40,$$062$lcssa);
  $41 = (($$0146) + 1)|0;
  $42 = load4($1);
  $43 = ($41|0)<($42|0);
  if ($43) {
   $$0146 = $41;$22 = $39;
  } else {
   break;
  }
 }
 return;
}
function __ZN15b2ContactSolver24SolveVelocityConstraintsEv($0) {
 $0 = $0|0;
 var $$0212651 = Math_fround(0), $$0213650 = Math_fround(0), $$0216649 = 0, $$0657 = 0, $$2 = Math_fround(0), $$2215 = Math_fround(0), $$off = 0, $$pre = 0, $$pre666 = 0, $$sroa$0587$0645 = 0, $$sroa$0587$2 = 0, $$sroa$0621$0647 = 0, $$sroa$0621$2 = 0, $$sroa$20$0646 = 0, $$sroa$20$2 = 0, $$sroa$20633$0648 = 0, $$sroa$20633$2 = 0, $$sroa_idx = 0, $$sroa_idx578 = 0, $$sroa_idx582 = 0;
 var $$sroa_idx616 = 0, $1 = 0, $10 = 0, $100 = Math_fround(0), $101 = Math_fround(0), $102 = Math_fround(0), $103 = Math_fround(0), $104 = Math_fround(0), $105 = 0, $106 = 0, $107 = Math_fround(0), $108 = Math_fround(0), $109 = 0, $11 = 0, $110 = Math_fround(0), $111 = Math_fround(0), $112 = Math_fround(0), $113 = Math_fround(0), $114 = Math_fround(0), $115 = Math_fround(0);
 var $116 = 0, $117 = Math_fround(0), $118 = Math_fround(0), $119 = Math_fround(0), $12 = 0, $120 = Math_fround(0), $121 = Math_fround(0), $122 = Math_fround(0), $123 = Math_fround(0), $124 = Math_fround(0), $125 = Math_fround(0), $126 = 0, $127 = Math_fround(0), $128 = 0, $129 = Math_fround(0), $13 = Math_fround(0), $130 = Math_fround(0), $131 = Math_fround(0), $132 = 0, $133 = Math_fround(0);
 var $134 = Math_fround(0), $135 = 0, $136 = Math_fround(0), $137 = Math_fround(0), $138 = Math_fround(0), $139 = Math_fround(0), $14 = 0, $140 = Math_fround(0), $141 = Math_fround(0), $142 = Math_fround(0), $143 = 0, $144 = Math_fround(0), $145 = 0, $146 = Math_fround(0), $147 = Math_fround(0), $148 = Math_fround(0), $149 = Math_fround(0), $15 = Math_fround(0), $150 = Math_fround(0), $151 = Math_fround(0);
 var $152 = Math_fround(0), $153 = Math_fround(0), $154 = 0, $155 = Math_fround(0), $156 = 0, $157 = Math_fround(0), $158 = Math_fround(0), $159 = Math_fround(0), $16 = 0, $160 = Math_fround(0), $161 = Math_fround(0), $162 = 0, $163 = Math_fround(0), $164 = 0, $165 = Math_fround(0), $166 = 0, $167 = 0, $168 = 0, $169 = Math_fround(0), $17 = Math_fround(0);
 var $170 = Math_fround(0), $171 = 0, $172 = Math_fround(0), $173 = Math_fround(0), $174 = Math_fround(0), $175 = Math_fround(0), $176 = Math_fround(0), $177 = Math_fround(0), $178 = 0, $179 = Math_fround(0), $18 = 0, $180 = Math_fround(0), $181 = Math_fround(0), $182 = Math_fround(0), $183 = Math_fround(0), $184 = Math_fround(0), $185 = 0, $186 = Math_fround(0), $187 = Math_fround(0), $188 = 0;
 var $189 = Math_fround(0), $19 = Math_fround(0), $190 = Math_fround(0), $191 = Math_fround(0), $192 = Math_fround(0), $193 = Math_fround(0), $194 = Math_fround(0), $195 = 0, $196 = Math_fround(0), $197 = Math_fround(0), $198 = 0, $199 = Math_fround(0), $2 = 0, $20 = 0, $200 = Math_fround(0), $201 = Math_fround(0), $202 = Math_fround(0), $203 = Math_fround(0), $204 = Math_fround(0), $205 = Math_fround(0);
 var $206 = Math_fround(0), $207 = Math_fround(0), $208 = Math_fround(0), $209 = 0, $21 = 0, $210 = Math_fround(0), $211 = Math_fround(0), $212 = 0, $213 = Math_fround(0), $214 = Math_fround(0), $215 = 0, $216 = Math_fround(0), $217 = Math_fround(0), $218 = 0, $219 = Math_fround(0), $22 = 0, $220 = Math_fround(0), $221 = Math_fround(0), $222 = 0, $223 = Math_fround(0);
 var $224 = Math_fround(0), $225 = 0, $226 = Math_fround(0), $227 = Math_fround(0), $228 = Math_fround(0), $229 = Math_fround(0), $23 = 0, $230 = Math_fround(0), $231 = 0, $232 = Math_fround(0), $233 = Math_fround(0), $234 = 0, $235 = Math_fround(0), $236 = Math_fround(0), $237 = Math_fround(0), $238 = 0, $239 = Math_fround(0), $24 = 0, $240 = Math_fround(0), $241 = 0;
 var $242 = Math_fround(0), $243 = Math_fround(0), $244 = Math_fround(0), $245 = Math_fround(0), $246 = Math_fround(0), $247 = 0, $248 = 0, $249 = Math_fround(0), $25 = Math_fround(0), $250 = Math_fround(0), $251 = Math_fround(0), $252 = Math_fround(0), $253 = Math_fround(0), $254 = Math_fround(0), $255 = Math_fround(0), $256 = Math_fround(0), $257 = Math_fround(0), $258 = Math_fround(0), $259 = Math_fround(0), $26 = Math_fround(0);
 var $260 = 0, $261 = Math_fround(0), $262 = 0, $263 = Math_fround(0), $264 = Math_fround(0), $265 = Math_fround(0), $266 = Math_fround(0), $267 = Math_fround(0), $268 = Math_fround(0), $269 = Math_fround(0), $27 = Math_fround(0), $270 = Math_fround(0), $271 = Math_fround(0), $272 = Math_fround(0), $273 = Math_fround(0), $274 = Math_fround(0), $275 = 0, $276 = Math_fround(0), $277 = 0, $278 = Math_fround(0);
 var $279 = Math_fround(0), $28 = 0, $280 = Math_fround(0), $281 = Math_fround(0), $282 = Math_fround(0), $283 = Math_fround(0), $284 = Math_fround(0), $285 = Math_fround(0), $286 = Math_fround(0), $287 = 0, $288 = Math_fround(0), $289 = Math_fround(0), $29 = Math_fround(0), $290 = Math_fround(0), $291 = Math_fround(0), $292 = Math_fround(0), $293 = 0, $294 = 0, $295 = Math_fround(0), $296 = Math_fround(0);
 var $297 = Math_fround(0), $298 = Math_fround(0), $299 = Math_fround(0), $3 = 0, $30 = 0, $300 = Math_fround(0), $301 = Math_fround(0), $302 = Math_fround(0), $303 = Math_fround(0), $304 = Math_fround(0), $305 = Math_fround(0), $306 = 0, $307 = Math_fround(0), $308 = 0, $309 = Math_fround(0), $31 = 0, $310 = Math_fround(0), $311 = Math_fround(0), $312 = Math_fround(0), $313 = Math_fround(0);
 var $314 = Math_fround(0), $315 = Math_fround(0), $316 = Math_fround(0), $317 = Math_fround(0), $318 = Math_fround(0), $319 = Math_fround(0), $32 = Math_fround(0), $320 = Math_fround(0), $321 = 0, $322 = Math_fround(0), $323 = 0, $324 = Math_fround(0), $325 = Math_fround(0), $326 = Math_fround(0), $327 = Math_fround(0), $328 = Math_fround(0), $329 = Math_fround(0), $33 = 0, $330 = Math_fround(0), $331 = Math_fround(0);
 var $332 = Math_fround(0), $333 = 0, $334 = Math_fround(0), $335 = Math_fround(0), $336 = Math_fround(0), $337 = Math_fround(0), $338 = Math_fround(0), $339 = 0, $34 = 0, $340 = 0, $341 = Math_fround(0), $342 = Math_fround(0), $343 = Math_fround(0), $344 = Math_fround(0), $345 = Math_fround(0), $346 = Math_fround(0), $347 = Math_fround(0), $348 = Math_fround(0), $349 = Math_fround(0), $35 = 0;
 var $350 = Math_fround(0), $351 = Math_fround(0), $352 = 0, $353 = Math_fround(0), $354 = 0, $355 = Math_fround(0), $356 = Math_fround(0), $357 = Math_fround(0), $358 = Math_fround(0), $359 = Math_fround(0), $36 = 0, $360 = Math_fround(0), $361 = Math_fround(0), $362 = Math_fround(0), $363 = Math_fround(0), $364 = Math_fround(0), $365 = Math_fround(0), $366 = Math_fround(0), $367 = 0, $368 = Math_fround(0);
 var $369 = 0, $37 = Math_fround(0), $370 = Math_fround(0), $371 = Math_fround(0), $372 = Math_fround(0), $373 = Math_fround(0), $374 = Math_fround(0), $375 = Math_fround(0), $376 = Math_fround(0), $377 = Math_fround(0), $378 = Math_fround(0), $379 = 0, $38 = 0, $380 = 0, $381 = Math_fround(0), $382 = Math_fround(0), $383 = Math_fround(0), $384 = Math_fround(0), $385 = Math_fround(0), $386 = Math_fround(0);
 var $387 = Math_fround(0), $388 = Math_fround(0), $389 = Math_fround(0), $39 = 0, $390 = Math_fround(0), $391 = Math_fround(0), $392 = 0, $393 = Math_fround(0), $394 = 0, $395 = Math_fround(0), $396 = Math_fround(0), $397 = Math_fround(0), $398 = Math_fround(0), $399 = Math_fround(0), $4 = 0, $40 = 0, $400 = Math_fround(0), $401 = Math_fround(0), $402 = Math_fround(0), $403 = Math_fround(0);
 var $404 = Math_fround(0), $405 = Math_fround(0), $406 = Math_fround(0), $407 = 0, $408 = Math_fround(0), $409 = 0, $41 = 0, $410 = Math_fround(0), $411 = Math_fround(0), $412 = Math_fround(0), $413 = Math_fround(0), $414 = Math_fround(0), $415 = Math_fround(0), $416 = Math_fround(0), $417 = Math_fround(0), $418 = Math_fround(0), $419 = 0, $42 = Math_fround(0), $420 = 0, $421 = 0;
 var $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $43 = Math_fround(0), $44 = 0, $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = 0, $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = Math_fround(0), $55 = 0, $56 = Math_fround(0);
 var $57 = Math_fround(0), $58 = 0, $59 = Math_fround(0), $6 = 0, $60 = Math_fround(0), $61 = Math_fround(0), $62 = Math_fround(0), $63 = Math_fround(0), $64 = Math_fround(0), $65 = Math_fround(0), $66 = 0, $67 = Math_fround(0), $68 = Math_fround(0), $69 = 0, $7 = 0, $70 = Math_fround(0), $71 = Math_fround(0), $72 = 0, $73 = Math_fround(0), $74 = Math_fround(0);
 var $75 = Math_fround(0), $76 = 0, $77 = Math_fround(0), $78 = 0, $79 = Math_fround(0), $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = Math_fround(0), $85 = Math_fround(0), $86 = 0, $87 = Math_fround(0), $88 = 0, $89 = Math_fround(0), $9 = 0, $90 = Math_fround(0), $91 = Math_fround(0), $92 = Math_fround(0);
 var $93 = Math_fround(0), $94 = Math_fround(0), $95 = Math_fround(0), $96 = Math_fround(0), $97 = 0, $98 = Math_fround(0), $99 = 0, $exitcond = 0, $or$cond = 0, $or$cond3 = 0, $or$cond5 = 0, $or$cond644 = 0, $or$cond7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 48|0);
 $2 = load4($1);
 $3 = ($2|0)>(0);
 if (!($3)) {
  return;
 }
 $4 = ((($0)) + 40|0);
 $5 = ((($0)) + 28|0);
 $$pre = load4($5);
 $$0657 = 0;$23 = $$pre;
 L4: while(1) {
  $6 = load4($4);
  $7 = (($6) + (($$0657*152)|0)|0);
  $8 = (((($6) + (($$0657*152)|0)|0)) + 112|0);
  $9 = load4($8);
  $10 = (((($6) + (($$0657*152)|0)|0)) + 116|0);
  $11 = load4($10);
  $12 = (((($6) + (($$0657*152)|0)|0)) + 120|0);
  $13 = loadf($12);
  $14 = (((($6) + (($$0657*152)|0)|0)) + 128|0);
  $15 = loadf($14);
  $16 = (((($6) + (($$0657*152)|0)|0)) + 124|0);
  $17 = loadf($16);
  $18 = (((($6) + (($$0657*152)|0)|0)) + 132|0);
  $19 = loadf($18);
  $20 = (((($6) + (($$0657*152)|0)|0)) + 144|0);
  $21 = load4($20);
  $22 = (($23) + (($9*12)|0)|0);
  $$sroa_idx616 = (((($23) + (($9*12)|0)|0)) + 4|0);
  $24 = (((($6) + (($$0657*152)|0)|0)) + 72|0);
  $25 = loadf($24);
  $$sroa_idx = (((($6) + (($$0657*152)|0)|0)) + 76|0);
  $26 = loadf($$sroa_idx);
  $27 = Math_fround(-$25);
  $28 = (((($6) + (($$0657*152)|0)|0)) + 136|0);
  $29 = loadf($28);
  $$off = (($21) + -1)|0;
  $30 = ($$off>>>0)<(2);
  if (!($30)) {
   label = 6;
   break;
  }
  $31 = (((($23) + (($11*12)|0)|0)) + 8|0);
  $32 = loadf($31);
  $$sroa_idx582 = (((($23) + (($11*12)|0)|0)) + 4|0);
  $33 = load4($$sroa_idx582);
  $34 = (($23) + (($11*12)|0)|0);
  $35 = load4($34);
  $36 = (((($23) + (($9*12)|0)|0)) + 8|0);
  $37 = loadf($36);
  $38 = load4($$sroa_idx616);
  $39 = load4($22);
  $$0212651 = $37;$$0213650 = $32;$$0216649 = 0;$$sroa$0587$0645 = $35;$$sroa$0621$0647 = $39;$$sroa$20$0646 = $33;$$sroa$20633$0648 = $38;
  while(1) {
   $41 = ((((($6) + (($$0657*152)|0)|0) + (($$0216649*36)|0)|0)) + 12|0);
   $42 = loadf($41);
   $43 = Math_fround($$0213650 * $42);
   $44 = ((((($6) + (($$0657*152)|0)|0) + (($$0216649*36)|0)|0)) + 8|0);
   $45 = loadf($44);
   $46 = Math_fround($$0213650 * $45);
   $47 = i32_bc2f($$sroa$0587$0645);
   $48 = Math_fround($47 - $43);
   $49 = i32_bc2f($$sroa$20$0646);
   $50 = Math_fround($49 + $46);
   $51 = i32_bc2f($$sroa$0621$0647);
   $52 = Math_fround($48 - $51);
   $53 = i32_bc2f($$sroa$20633$0648);
   $54 = Math_fround($50 - $53);
   $55 = ((((($6) + (($$0657*152)|0)|0) + (($$0216649*36)|0)|0)) + 4|0);
   $56 = loadf($55);
   $57 = Math_fround($$0212651 * $56);
   $58 = ((($6) + (($$0657*152)|0)|0) + (($$0216649*36)|0)|0);
   $59 = loadf($58);
   $60 = Math_fround($$0212651 * $59);
   $61 = Math_fround($52 + $57);
   $62 = Math_fround($54 - $60);
   $63 = Math_fround($26 * $61);
   $64 = Math_fround($62 * $27);
   $65 = Math_fround($63 + $64);
   $66 = ((((($6) + (($$0657*152)|0)|0) + (($$0216649*36)|0)|0)) + 28|0);
   $67 = loadf($66);
   $68 = Math_fround($67 * $65);
   $69 = ((((($6) + (($$0657*152)|0)|0) + (($$0216649*36)|0)|0)) + 16|0);
   $70 = loadf($69);
   $71 = Math_fround($29 * $70);
   $72 = ((((($6) + (($$0657*152)|0)|0) + (($$0216649*36)|0)|0)) + 20|0);
   $73 = loadf($72);
   $74 = Math_fround($73 - $68);
   $75 = Math_fround(-$71);
   $76 = $74 < $71;
   $77 = $76 ? $74 : $71;
   $78 = $77 < $75;
   $79 = $78 ? $75 : $77;
   $80 = Math_fround($79 - $73);
   storef($72,$79);
   $81 = Math_fround($26 * $80);
   $82 = Math_fround($80 * $27);
   $83 = Math_fround($13 * $81);
   $84 = Math_fround($13 * $82);
   $85 = Math_fround($51 - $83);
   $86 = i32_bc2i($85);
   $87 = Math_fround($53 - $84);
   $88 = i32_bc2i($87);
   $89 = Math_fround($59 * $82);
   $90 = Math_fround($56 * $81);
   $91 = Math_fround($89 - $90);
   $92 = Math_fround($15 * $91);
   $93 = Math_fround($$0212651 - $92);
   $94 = Math_fround($17 * $81);
   $95 = Math_fround($17 * $82);
   $96 = Math_fround($47 + $94);
   $97 = i32_bc2i($96);
   $98 = Math_fround($49 + $95);
   $99 = i32_bc2i($98);
   $100 = Math_fround($45 * $82);
   $101 = Math_fround($42 * $81);
   $102 = Math_fround($100 - $101);
   $103 = Math_fround($19 * $102);
   $104 = Math_fround($$0213650 + $103);
   $105 = (($$0216649) + 1)|0;
   $exitcond = ($105|0)==($21|0);
   if ($exitcond) {
    break;
   } else {
    $$0212651 = $93;$$0213650 = $104;$$0216649 = $105;$$sroa$0587$0645 = $97;$$sroa$0621$0647 = $86;$$sroa$20$0646 = $99;$$sroa$20633$0648 = $88;
   }
  }
  $$pre666 = load4($20);
  $40 = ($$pre666|0)==(1);
  do {
   if ($40) {
    $106 = (((($6) + (($$0657*152)|0)|0)) + 12|0);
    $107 = loadf($106);
    $108 = Math_fround($104 * $107);
    $109 = (((($6) + (($$0657*152)|0)|0)) + 8|0);
    $110 = loadf($109);
    $111 = Math_fround($104 * $110);
    $112 = Math_fround($96 - $108);
    $113 = Math_fround($98 + $111);
    $114 = Math_fround($112 - $85);
    $115 = Math_fround($113 - $87);
    $116 = (((($6) + (($$0657*152)|0)|0)) + 4|0);
    $117 = loadf($116);
    $118 = Math_fround($93 * $117);
    $119 = loadf($7);
    $120 = Math_fround($93 * $119);
    $121 = Math_fround($114 + $118);
    $122 = Math_fround($115 - $120);
    $123 = Math_fround($25 * $121);
    $124 = Math_fround($26 * $122);
    $125 = Math_fround($123 + $124);
    $126 = (((($6) + (($$0657*152)|0)|0)) + 24|0);
    $127 = loadf($126);
    $128 = (((($6) + (($$0657*152)|0)|0)) + 32|0);
    $129 = loadf($128);
    $130 = Math_fround($125 - $129);
    $131 = Math_fround($127 * $130);
    $132 = (((($6) + (($$0657*152)|0)|0)) + 16|0);
    $133 = loadf($132);
    $134 = Math_fround($133 - $131);
    $135 = $134 > Math_fround(0.0);
    $136 = $135 ? $134 : Math_fround(0.0);
    $137 = Math_fround($136 - $133);
    storef($132,$136);
    $138 = Math_fround($25 * $137);
    $139 = Math_fround($26 * $137);
    $140 = Math_fround($13 * $138);
    $141 = Math_fround($13 * $139);
    $142 = Math_fround($85 - $140);
    $143 = i32_bc2i($142);
    $144 = Math_fround($87 - $141);
    $145 = i32_bc2i($144);
    $146 = Math_fround($119 * $139);
    $147 = Math_fround($117 * $138);
    $148 = Math_fround($146 - $147);
    $149 = Math_fround($15 * $148);
    $150 = Math_fround($93 - $149);
    $151 = Math_fround($17 * $138);
    $152 = Math_fround($17 * $139);
    $153 = Math_fround($96 + $151);
    $154 = i32_bc2i($153);
    $155 = Math_fround($98 + $152);
    $156 = i32_bc2i($155);
    $157 = Math_fround($110 * $139);
    $158 = Math_fround($107 * $138);
    $159 = Math_fround($157 - $158);
    $160 = Math_fround($19 * $159);
    $161 = Math_fround($104 + $160);
    $$2 = $150;$$2215 = $161;$$sroa$0587$2 = $154;$$sroa$0621$2 = $143;$$sroa$20$2 = $156;$$sroa$20633$2 = $145;
   } else {
    $162 = (((($6) + (($$0657*152)|0)|0)) + 16|0);
    $163 = loadf($162);
    $164 = (((($6) + (($$0657*152)|0)|0)) + 52|0);
    $165 = loadf($164);
    $166 = !($163 >= Math_fround(0.0));
    $167 = !($165 >= Math_fround(0.0));
    $or$cond = $166 | $167;
    if ($or$cond) {
     label = 11;
     break L4;
    }
    $168 = (((($6) + (($$0657*152)|0)|0)) + 12|0);
    $169 = loadf($168);
    $170 = Math_fround($104 * $169);
    $171 = (((($6) + (($$0657*152)|0)|0)) + 8|0);
    $172 = loadf($171);
    $173 = Math_fround($104 * $172);
    $174 = Math_fround($96 - $170);
    $175 = Math_fround($98 + $173);
    $176 = Math_fround($174 - $85);
    $177 = Math_fround($175 - $87);
    $178 = (((($6) + (($$0657*152)|0)|0)) + 4|0);
    $179 = loadf($178);
    $180 = Math_fround($93 * $179);
    $181 = loadf($7);
    $182 = Math_fround($93 * $181);
    $183 = Math_fround($176 + $180);
    $184 = Math_fround($177 - $182);
    $185 = (((($6) + (($$0657*152)|0)|0)) + 48|0);
    $186 = loadf($185);
    $187 = Math_fround($104 * $186);
    $188 = (((($6) + (($$0657*152)|0)|0)) + 44|0);
    $189 = loadf($188);
    $190 = Math_fround($104 * $189);
    $191 = Math_fround($96 - $187);
    $192 = Math_fround($98 + $190);
    $193 = Math_fround($191 - $85);
    $194 = Math_fround($192 - $87);
    $195 = (((($6) + (($$0657*152)|0)|0)) + 40|0);
    $196 = loadf($195);
    $197 = Math_fround($93 * $196);
    $198 = (((($6) + (($$0657*152)|0)|0)) + 36|0);
    $199 = loadf($198);
    $200 = Math_fround($93 * $199);
    $201 = Math_fround($193 + $197);
    $202 = Math_fround($194 - $200);
    $203 = Math_fround($25 * $183);
    $204 = Math_fround($26 * $184);
    $205 = Math_fround($203 + $204);
    $206 = Math_fround($25 * $201);
    $207 = Math_fround($26 * $202);
    $208 = Math_fround($206 + $207);
    $209 = (((($6) + (($$0657*152)|0)|0)) + 32|0);
    $210 = loadf($209);
    $211 = Math_fround($205 - $210);
    $212 = (((($6) + (($$0657*152)|0)|0)) + 68|0);
    $213 = loadf($212);
    $214 = Math_fround($208 - $213);
    $215 = (((($6) + (($$0657*152)|0)|0)) + 96|0);
    $216 = loadf($215);
    $217 = Math_fround($163 * $216);
    $218 = (((($6) + (($$0657*152)|0)|0)) + 104|0);
    $219 = loadf($218);
    $220 = Math_fround($165 * $219);
    $221 = Math_fround($217 + $220);
    $222 = (((($6) + (($$0657*152)|0)|0)) + 100|0);
    $223 = loadf($222);
    $224 = Math_fround($163 * $223);
    $225 = (((($6) + (($$0657*152)|0)|0)) + 108|0);
    $226 = loadf($225);
    $227 = Math_fround($165 * $226);
    $228 = Math_fround($224 + $227);
    $229 = Math_fround($211 - $221);
    $230 = Math_fround($214 - $228);
    $231 = (((($6) + (($$0657*152)|0)|0)) + 80|0);
    $232 = loadf($231);
    $233 = Math_fround($232 * $229);
    $234 = (((($6) + (($$0657*152)|0)|0)) + 88|0);
    $235 = loadf($234);
    $236 = Math_fround($235 * $230);
    $237 = Math_fround($233 + $236);
    $238 = (((($6) + (($$0657*152)|0)|0)) + 84|0);
    $239 = loadf($238);
    $240 = Math_fround($229 * $239);
    $241 = (((($6) + (($$0657*152)|0)|0)) + 92|0);
    $242 = loadf($241);
    $243 = Math_fround($230 * $242);
    $244 = Math_fround($240 + $243);
    $245 = Math_fround(-$237);
    $246 = Math_fround(-$244);
    $247 = !($237 <= Math_fround(-0.0));
    $248 = !($244 <= Math_fround(-0.0));
    $or$cond644 = $247 | $248;
    if (!($or$cond644)) {
     $249 = Math_fround($245 - $163);
     $250 = Math_fround($246 - $165);
     $251 = Math_fround($25 * $249);
     $252 = Math_fround($26 * $249);
     $253 = Math_fround($25 * $250);
     $254 = Math_fround($26 * $250);
     $255 = Math_fround($251 + $253);
     $256 = Math_fround($252 + $254);
     $257 = Math_fround($13 * $255);
     $258 = Math_fround($13 * $256);
     $259 = Math_fround($85 - $257);
     $260 = i32_bc2i($259);
     $261 = Math_fround($87 - $258);
     $262 = i32_bc2i($261);
     $263 = Math_fround($181 * $252);
     $264 = Math_fround($179 * $251);
     $265 = Math_fround($263 - $264);
     $266 = Math_fround($199 * $254);
     $267 = Math_fround($196 * $253);
     $268 = Math_fround($266 - $267);
     $269 = Math_fround($265 + $268);
     $270 = Math_fround($15 * $269);
     $271 = Math_fround($93 - $270);
     $272 = Math_fround($17 * $255);
     $273 = Math_fround($17 * $256);
     $274 = Math_fround($96 + $272);
     $275 = i32_bc2i($274);
     $276 = Math_fround($98 + $273);
     $277 = i32_bc2i($276);
     $278 = Math_fround($172 * $252);
     $279 = Math_fround($169 * $251);
     $280 = Math_fround($278 - $279);
     $281 = Math_fround($189 * $254);
     $282 = Math_fround($186 * $253);
     $283 = Math_fround($281 - $282);
     $284 = Math_fround($280 + $283);
     $285 = Math_fround($19 * $284);
     $286 = Math_fround($104 + $285);
     storef($162,$245);
     storef($164,$246);
     $$2 = $271;$$2215 = $286;$$sroa$0587$2 = $275;$$sroa$0621$2 = $260;$$sroa$20$2 = $277;$$sroa$20633$2 = $262;
     break;
    }
    $287 = (((($6) + (($$0657*152)|0)|0)) + 24|0);
    $288 = loadf($287);
    $289 = Math_fround($229 * $288);
    $290 = Math_fround(-$289);
    $291 = Math_fround($223 * $290);
    $292 = Math_fround($230 + $291);
    $293 = $289 <= Math_fround(-0.0);
    $294 = $292 >= Math_fround(0.0);
    $or$cond3 = $293 & $294;
    if ($or$cond3) {
     $295 = Math_fround($290 - $163);
     $296 = Math_fround(Math_fround(0.0) - $165);
     $297 = Math_fround($25 * $295);
     $298 = Math_fround($26 * $295);
     $299 = Math_fround($25 * $296);
     $300 = Math_fround($26 * $296);
     $301 = Math_fround($299 + $297);
     $302 = Math_fround($300 + $298);
     $303 = Math_fround($13 * $301);
     $304 = Math_fround($13 * $302);
     $305 = Math_fround($85 - $303);
     $306 = i32_bc2i($305);
     $307 = Math_fround($87 - $304);
     $308 = i32_bc2i($307);
     $309 = Math_fround($298 * $181);
     $310 = Math_fround($297 * $179);
     $311 = Math_fround($309 - $310);
     $312 = Math_fround($300 * $199);
     $313 = Math_fround($299 * $196);
     $314 = Math_fround($312 - $313);
     $315 = Math_fround($311 + $314);
     $316 = Math_fround($15 * $315);
     $317 = Math_fround($93 - $316);
     $318 = Math_fround($17 * $301);
     $319 = Math_fround($17 * $302);
     $320 = Math_fround($96 + $318);
     $321 = i32_bc2i($320);
     $322 = Math_fround($98 + $319);
     $323 = i32_bc2i($322);
     $324 = Math_fround($298 * $172);
     $325 = Math_fround($297 * $169);
     $326 = Math_fround($324 - $325);
     $327 = Math_fround($300 * $189);
     $328 = Math_fround($299 * $186);
     $329 = Math_fround($327 - $328);
     $330 = Math_fround($326 + $329);
     $331 = Math_fround($19 * $330);
     $332 = Math_fround($104 + $331);
     storef($162,$290);
     store4($164,0);
     $$2 = $317;$$2215 = $332;$$sroa$0587$2 = $321;$$sroa$0621$2 = $306;$$sroa$20$2 = $323;$$sroa$20633$2 = $308;
     break;
    }
    $333 = (((($6) + (($$0657*152)|0)|0)) + 60|0);
    $334 = loadf($333);
    $335 = Math_fround($230 * $334);
    $336 = Math_fround(-$335);
    $337 = Math_fround($219 * $336);
    $338 = Math_fround($229 + $337);
    $339 = $335 <= Math_fround(-0.0);
    $340 = $338 >= Math_fround(0.0);
    $or$cond5 = $339 & $340;
    if ($or$cond5) {
     $341 = Math_fround(Math_fround(0.0) - $163);
     $342 = Math_fround($336 - $165);
     $343 = Math_fround($25 * $341);
     $344 = Math_fround($26 * $341);
     $345 = Math_fround($25 * $342);
     $346 = Math_fround($26 * $342);
     $347 = Math_fround($343 + $345);
     $348 = Math_fround($344 + $346);
     $349 = Math_fround($13 * $347);
     $350 = Math_fround($13 * $348);
     $351 = Math_fround($85 - $349);
     $352 = i32_bc2i($351);
     $353 = Math_fround($87 - $350);
     $354 = i32_bc2i($353);
     $355 = Math_fround($344 * $181);
     $356 = Math_fround($343 * $179);
     $357 = Math_fround($355 - $356);
     $358 = Math_fround($346 * $199);
     $359 = Math_fround($345 * $196);
     $360 = Math_fround($358 - $359);
     $361 = Math_fround($357 + $360);
     $362 = Math_fround($15 * $361);
     $363 = Math_fround($93 - $362);
     $364 = Math_fround($17 * $347);
     $365 = Math_fround($17 * $348);
     $366 = Math_fround($96 + $364);
     $367 = i32_bc2i($366);
     $368 = Math_fround($98 + $365);
     $369 = i32_bc2i($368);
     $370 = Math_fround($344 * $172);
     $371 = Math_fround($343 * $169);
     $372 = Math_fround($370 - $371);
     $373 = Math_fround($346 * $189);
     $374 = Math_fround($345 * $186);
     $375 = Math_fround($373 - $374);
     $376 = Math_fround($372 + $375);
     $377 = Math_fround($19 * $376);
     $378 = Math_fround($104 + $377);
     store4($162,0);
     storef($164,$336);
     $$2 = $363;$$2215 = $378;$$sroa$0587$2 = $367;$$sroa$0621$2 = $352;$$sroa$20$2 = $369;$$sroa$20633$2 = $354;
     break;
    }
    $379 = $229 >= Math_fround(0.0);
    $380 = $230 >= Math_fround(0.0);
    $or$cond7 = $379 & $380;
    if ($or$cond7) {
     $381 = Math_fround(Math_fround(0.0) - $163);
     $382 = Math_fround(Math_fround(0.0) - $165);
     $383 = Math_fround($25 * $381);
     $384 = Math_fround($26 * $381);
     $385 = Math_fround($25 * $382);
     $386 = Math_fround($26 * $382);
     $387 = Math_fround($383 + $385);
     $388 = Math_fround($384 + $386);
     $389 = Math_fround($13 * $387);
     $390 = Math_fround($13 * $388);
     $391 = Math_fround($85 - $389);
     $392 = i32_bc2i($391);
     $393 = Math_fround($87 - $390);
     $394 = i32_bc2i($393);
     $395 = Math_fround($384 * $181);
     $396 = Math_fround($383 * $179);
     $397 = Math_fround($395 - $396);
     $398 = Math_fround($386 * $199);
     $399 = Math_fround($385 * $196);
     $400 = Math_fround($398 - $399);
     $401 = Math_fround($397 + $400);
     $402 = Math_fround($15 * $401);
     $403 = Math_fround($93 - $402);
     $404 = Math_fround($17 * $387);
     $405 = Math_fround($17 * $388);
     $406 = Math_fround($96 + $404);
     $407 = i32_bc2i($406);
     $408 = Math_fround($98 + $405);
     $409 = i32_bc2i($408);
     $410 = Math_fround($384 * $172);
     $411 = Math_fround($383 * $169);
     $412 = Math_fround($410 - $411);
     $413 = Math_fround($386 * $189);
     $414 = Math_fround($385 * $186);
     $415 = Math_fround($413 - $414);
     $416 = Math_fround($412 + $415);
     $417 = Math_fround($19 * $416);
     $418 = Math_fround($104 + $417);
     store4($162,0);
     store4($164,0);
     $$2 = $403;$$2215 = $418;$$sroa$0587$2 = $407;$$sroa$0621$2 = $392;$$sroa$20$2 = $409;$$sroa$20633$2 = $394;
    } else {
     $$2 = $93;$$2215 = $104;$$sroa$0587$2 = $97;$$sroa$0621$2 = $86;$$sroa$20$2 = $99;$$sroa$20633$2 = $88;
    }
   }
  } while(0);
  store4($22,$$sroa$0621$2);
  store4($$sroa_idx616,$$sroa$20633$2);
  $419 = load4($5);
  $420 = (((($419) + (($9*12)|0)|0)) + 8|0);
  storef($420,$$2);
  $421 = (($419) + (($11*12)|0)|0);
  store4($421,$$sroa$0587$2);
  $$sroa_idx578 = (((($419) + (($11*12)|0)|0)) + 4|0);
  store4($$sroa_idx578,$$sroa$20$2);
  $422 = load4($5);
  $423 = (((($422) + (($11*12)|0)|0)) + 8|0);
  storef($423,$$2215);
  $424 = (($$0657) + 1)|0;
  $425 = load4($1);
  $426 = ($424|0)<($425|0);
  if ($426) {
   $$0657 = $424;$23 = $422;
  } else {
   label = 3;
   break;
  }
 }
 if ((label|0) == 3) {
  return;
 }
 else if ((label|0) == 6) {
  ___assert_fail((6235|0),(6120|0),311,(6270|0));
  // unreachable;
 }
 else if ((label|0) == 11) {
  ___assert_fail((6295|0),(6120|0),406,(6270|0));
  // unreachable;
 }
}
function __ZN15b2ContactSolver13StoreImpulsesEv($0) {
 $0 = $0|0;
 var $$02224 = 0, $$023 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 48|0);
 $2 = load4($1);
 $3 = ($2|0)>(0);
 if (!($3)) {
  return;
 }
 $4 = ((($0)) + 40|0);
 $5 = load4($4);
 $6 = ((($0)) + 44|0);
 $7 = load4($6);
 $$02224 = 0;
 while(1) {
  $8 = (((($5) + (($$02224*152)|0)|0)) + 148|0);
  $9 = load4($8);
  $10 = (($7) + ($9<<2)|0);
  $11 = load4($10);
  $12 = (((($5) + (($$02224*152)|0)|0)) + 144|0);
  $13 = load4($12);
  $14 = ($13|0)>(0);
  if ($14) {
   $$023 = 0;
   while(1) {
    $17 = ((((($5) + (($$02224*152)|0)|0) + (($$023*36)|0)|0)) + 16|0);
    $18 = load4($17);
    $19 = (((((($11)) + 64|0) + (($$023*20)|0)|0)) + 8|0);
    store4($19,$18);
    $20 = ((((($5) + (($$02224*152)|0)|0) + (($$023*36)|0)|0)) + 20|0);
    $21 = load4($20);
    $22 = (((((($11)) + 64|0) + (($$023*20)|0)|0)) + 12|0);
    store4($22,$21);
    $23 = (($$023) + 1)|0;
    $24 = ($23|0)<($13|0);
    if ($24) {
     $$023 = $23;
    } else {
     break;
    }
   }
  }
  $15 = (($$02224) + 1)|0;
  $16 = ($15|0)<($2|0);
  if ($16) {
   $$02224 = $15;
  } else {
   break;
  }
 }
 return;
}
function __ZN15b2ContactSolver24SolvePositionConstraintsEv($0) {
 $0 = $0|0;
 var $$0$lcssa = Math_fround(0), $$0247 = Math_fround(0), $$088246 = 0, $$089$lcssa = Math_fround(0), $$089238 = Math_fround(0), $$090$lcssa = Math_fround(0), $$090237 = Math_fround(0), $$091236 = 0, $$1$lcssa = Math_fround(0), $$1239 = Math_fround(0), $$pre = 0, $$pre258 = 0, $$sroa$0185$0$lcssa = 0, $$sroa$0185$0232 = 0, $$sroa$0205$0$lcssa = 0, $$sroa$0205$0234 = 0, $$sroa$8$0$lcssa = 0, $$sroa$8$0233 = 0, $$sroa$8210$0$lcssa = 0, $$sroa$8210$0235 = 0;
 var $$sroa_idx126 = 0, $$sroa_idx137 = 0, $$sroa_idx154 = 0, $$sroa_idx167 = 0, $$sroa_idx176 = 0, $$sroa_idx180 = 0, $$sroa_idx196 = 0, $$sroa_idx200 = 0, $$sroa_idx216 = 0, $$sroa_idx225 = 0, $1 = 0, $10 = 0, $100 = Math_fround(0), $101 = Math_fround(0), $102 = Math_fround(0), $103 = Math_fround(0), $104 = Math_fround(0), $105 = Math_fround(0), $106 = Math_fround(0), $107 = Math_fround(0);
 var $108 = Math_fround(0), $109 = Math_fround(0), $11 = 0, $110 = Math_fround(0), $111 = Math_fround(0), $112 = 0, $113 = 0, $114 = Math_fround(0), $115 = Math_fround(0), $116 = Math_fround(0), $117 = Math_fround(0), $118 = Math_fround(0), $119 = Math_fround(0), $12 = 0, $120 = Math_fround(0), $121 = Math_fround(0), $122 = Math_fround(0), $123 = 0, $124 = Math_fround(0), $125 = 0;
 var $126 = Math_fround(0), $127 = Math_fround(0), $128 = Math_fround(0), $129 = Math_fround(0), $13 = 0, $130 = Math_fround(0), $131 = Math_fround(0), $132 = Math_fround(0), $133 = Math_fround(0), $134 = 0, $135 = Math_fround(0), $136 = 0, $137 = Math_fround(0), $138 = Math_fround(0), $139 = Math_fround(0), $14 = 0, $140 = Math_fround(0), $141 = Math_fround(0), $142 = 0, $15 = 0;
 var $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = Math_fround(0), $24 = Math_fround(0), $25 = 0, $26 = Math_fround(0), $27 = 0, $28 = Math_fround(0), $29 = 0, $3 = 0, $30 = Math_fround(0), $31 = Math_fround(0), $32 = 0, $33 = Math_fround(0);
 var $34 = 0, $35 = Math_fround(0), $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = Math_fround(0), $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = Math_fround(0), $49 = 0, $5 = 0, $50 = Math_fround(0), $51 = 0;
 var $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = Math_fround(0), $62 = Math_fround(0), $63 = Math_fround(0), $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0;
 var $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = Math_fround(0), $76 = Math_fround(0), $77 = Math_fround(0), $78 = Math_fround(0), $79 = Math_fround(0), $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = Math_fround(0), $85 = Math_fround(0), $86 = Math_fround(0), $87 = Math_fround(0), $88 = Math_fround(0);
 var $89 = Math_fround(0), $9 = 0, $90 = Math_fround(0), $91 = Math_fround(0), $92 = Math_fround(0), $93 = Math_fround(0), $94 = 0, $95 = Math_fround(0), $96 = Math_fround(0), $97 = Math_fround(0), $98 = 0, $99 = Math_fround(0), $exitcond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $1 = sp + 40|0;
 $2 = sp + 24|0;
 $3 = sp;
 $4 = ((($0)) + 48|0);
 $5 = load4($4);
 $6 = ($5|0)>(0);
 if (!($6)) {
  $$0$lcssa = Math_fround(0.0);
  $15 = $$0$lcssa >= Math_fround(-0.0149999997);
  STACKTOP = sp;return ($15|0);
 }
 $7 = ((($0)) + 36|0);
 $8 = ((($0)) + 24|0);
 $9 = ((($1)) + 8|0);
 $10 = ((($1)) + 12|0);
 $11 = ((($2)) + 8|0);
 $12 = ((($2)) + 12|0);
 $$sroa_idx167 = ((($1)) + 4|0);
 $$sroa_idx154 = ((($2)) + 4|0);
 $$sroa_idx137 = ((($3)) + 4|0);
 $13 = ((($3)) + 8|0);
 $$sroa_idx126 = ((($3)) + 12|0);
 $14 = ((($3)) + 16|0);
 $$pre = load4($8);
 $$0247 = Math_fround(0.0);$$088246 = 0;$39 = $$pre;
 while(1) {
  $16 = load4($7);
  $17 = (($16) + (($$088246*88)|0)|0);
  $18 = (((($16) + (($$088246*88)|0)|0)) + 32|0);
  $19 = load4($18);
  $20 = (((($16) + (($$088246*88)|0)|0)) + 36|0);
  $21 = load4($20);
  $22 = (((($16) + (($$088246*88)|0)|0)) + 48|0);
  $23 = loadf($22);
  $$sroa_idx225 = (((($16) + (($$088246*88)|0)|0)) + 52|0);
  $24 = loadf($$sroa_idx225);
  $25 = (((($16) + (($$088246*88)|0)|0)) + 40|0);
  $26 = loadf($25);
  $27 = (((($16) + (($$088246*88)|0)|0)) + 64|0);
  $28 = loadf($27);
  $29 = (((($16) + (($$088246*88)|0)|0)) + 56|0);
  $30 = loadf($29);
  $$sroa_idx216 = (((($16) + (($$088246*88)|0)|0)) + 60|0);
  $31 = loadf($$sroa_idx216);
  $32 = (((($16) + (($$088246*88)|0)|0)) + 44|0);
  $33 = loadf($32);
  $34 = (((($16) + (($$088246*88)|0)|0)) + 68|0);
  $35 = loadf($34);
  $36 = (((($16) + (($$088246*88)|0)|0)) + 84|0);
  $37 = load4($36);
  $38 = (($39) + (($19*12)|0)|0);
  $40 = load4($38);
  $$sroa_idx200 = (((($39) + (($19*12)|0)|0)) + 4|0);
  $41 = load4($$sroa_idx200);
  $42 = (((($39) + (($19*12)|0)|0)) + 8|0);
  $43 = loadf($42);
  $44 = (($39) + (($21*12)|0)|0);
  $45 = load4($44);
  $$sroa_idx180 = (((($39) + (($21*12)|0)|0)) + 4|0);
  $46 = load4($$sroa_idx180);
  $47 = (((($39) + (($21*12)|0)|0)) + 8|0);
  $48 = loadf($47);
  $49 = ($37|0)>(0);
  if ($49) {
   $50 = Math_fround($26 + $33);
   $$089238 = $43;$$090237 = $48;$$091236 = 0;$$1239 = $$0247;$$sroa$0185$0232 = $45;$$sroa$0205$0234 = $40;$$sroa$8$0233 = $46;$$sroa$8210$0235 = $41;
   while(1) {
    $61 = (Math_fround(_sinf($$089238)));
    storef($9,$61);
    $62 = (Math_fround(_cosf($$089238)));
    storef($10,$62);
    $63 = (Math_fround(_sinf($$090237)));
    storef($11,$63);
    $64 = (Math_fround(_cosf($$090237)));
    storef($12,$64);
    $65 = Math_fround($23 * $62);
    $66 = Math_fround($24 * $61);
    $67 = Math_fround($65 - $66);
    $68 = Math_fround($23 * $61);
    $69 = Math_fround($24 * $62);
    $70 = Math_fround($69 + $68);
    $71 = i32_bc2f($$sroa$0205$0234);
    $72 = Math_fround($71 - $67);
    $73 = i32_bc2f($$sroa$8210$0235);
    $74 = Math_fround($73 - $70);
    storef($1,$72);
    storef($$sroa_idx167,$74);
    $75 = Math_fround($30 * $64);
    $76 = Math_fround($31 * $63);
    $77 = Math_fround($75 - $76);
    $78 = Math_fround($30 * $63);
    $79 = Math_fround($31 * $64);
    $80 = Math_fround($79 + $78);
    $81 = i32_bc2f($$sroa$0185$0232);
    $82 = Math_fround($81 - $77);
    $83 = i32_bc2f($$sroa$8$0233);
    $84 = Math_fround($83 - $80);
    storef($2,$82);
    storef($$sroa_idx154,$84);
    __ZN24b2PositionSolverManifold10InitializeEP27b2ContactPositionConstraintRK11b2TransformS4_i($3,$17,$1,$2,$$091236);
    $85 = loadf($3);
    $86 = loadf($$sroa_idx137);
    $87 = loadf($13);
    $88 = loadf($$sroa_idx126);
    $89 = loadf($14);
    $90 = Math_fround($87 - $71);
    $91 = Math_fround($88 - $73);
    $92 = Math_fround($87 - $81);
    $93 = Math_fround($88 - $83);
    $94 = $$1239 < $89;
    $95 = $94 ? $$1239 : $89;
    $96 = Math_fround($89 + Math_fround(0.00499999989));
    $97 = Math_fround($96 * Math_fround(0.200000003));
    $98 = $97 < Math_fround(0.0);
    $99 = $98 ? $97 : Math_fround(0.0);
    $100 = Math_fround($86 * $90);
    $101 = Math_fround($85 * $91);
    $102 = Math_fround($100 - $101);
    $103 = Math_fround($86 * $92);
    $104 = Math_fround($85 * $93);
    $105 = Math_fround($103 - $104);
    $106 = Math_fround($28 * $102);
    $107 = Math_fround($102 * $106);
    $108 = Math_fround($50 + $107);
    $109 = Math_fround($35 * $105);
    $110 = Math_fround($105 * $109);
    $111 = Math_fround($110 + $108);
    $112 = $111 > Math_fround(0.0);
    if ($112) {
     $113 = $99 < Math_fround(-0.200000003);
     $114 = $113 ? Math_fround(-0.200000003) : $99;
     $115 = Math_fround(-$114);
     $116 = Math_fround($115 / $111);
     $118 = $116;
    } else {
     $118 = Math_fround(0.0);
    }
    $117 = Math_fround($85 * $118);
    $119 = Math_fround($86 * $118);
    $120 = Math_fround($26 * $117);
    $121 = Math_fround($26 * $119);
    $122 = Math_fround($71 - $120);
    $123 = i32_bc2i($122);
    $124 = Math_fround($73 - $121);
    $125 = i32_bc2i($124);
    $126 = Math_fround($90 * $119);
    $127 = Math_fround($91 * $117);
    $128 = Math_fround($126 - $127);
    $129 = Math_fround($28 * $128);
    $130 = Math_fround($$089238 - $129);
    $131 = Math_fround($33 * $117);
    $132 = Math_fround($33 * $119);
    $133 = Math_fround($81 + $131);
    $134 = i32_bc2i($133);
    $135 = Math_fround($83 + $132);
    $136 = i32_bc2i($135);
    $137 = Math_fround($92 * $119);
    $138 = Math_fround($93 * $117);
    $139 = Math_fround($137 - $138);
    $140 = Math_fround($35 * $139);
    $141 = Math_fround($$090237 + $140);
    $142 = (($$091236) + 1)|0;
    $exitcond = ($142|0)==($37|0);
    if ($exitcond) {
     break;
    } else {
     $$089238 = $130;$$090237 = $141;$$091236 = $142;$$1239 = $95;$$sroa$0185$0232 = $134;$$sroa$0205$0234 = $123;$$sroa$8$0233 = $136;$$sroa$8210$0235 = $125;
    }
   }
   $$pre258 = load4($8);
   $$089$lcssa = $130;$$090$lcssa = $141;$$1$lcssa = $95;$$sroa$0185$0$lcssa = $134;$$sroa$0205$0$lcssa = $123;$$sroa$8$0$lcssa = $136;$$sroa$8210$0$lcssa = $125;$52 = $$pre258;
  } else {
   $$089$lcssa = $43;$$090$lcssa = $48;$$1$lcssa = $$0247;$$sroa$0185$0$lcssa = $45;$$sroa$0205$0$lcssa = $40;$$sroa$8$0$lcssa = $46;$$sroa$8210$0$lcssa = $41;$52 = $39;
  }
  $51 = (($52) + (($19*12)|0)|0);
  store4($51,$$sroa$0205$0$lcssa);
  $$sroa_idx196 = (((($52) + (($19*12)|0)|0)) + 4|0);
  store4($$sroa_idx196,$$sroa$8210$0$lcssa);
  $53 = load4($8);
  $54 = (((($53) + (($19*12)|0)|0)) + 8|0);
  storef($54,$$089$lcssa);
  $55 = (($53) + (($21*12)|0)|0);
  store4($55,$$sroa$0185$0$lcssa);
  $$sroa_idx176 = (((($53) + (($21*12)|0)|0)) + 4|0);
  store4($$sroa_idx176,$$sroa$8$0$lcssa);
  $56 = load4($8);
  $57 = (((($56) + (($21*12)|0)|0)) + 8|0);
  storef($57,$$090$lcssa);
  $58 = (($$088246) + 1)|0;
  $59 = load4($4);
  $60 = ($58|0)<($59|0);
  if ($60) {
   $$0247 = $$1$lcssa;$$088246 = $58;$39 = $56;
  } else {
   $$0$lcssa = $$1$lcssa;
   break;
  }
 }
 $15 = $$0$lcssa >= Math_fround(-0.0149999997);
 STACKTOP = sp;return ($15|0);
}
function __ZN24b2PositionSolverManifold10InitializeEP27b2ContactPositionConstraintRK11b2TransformS4_i($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$sroa_idx107 = 0, $$sroa_idx44 = 0, $$sroa_idx56 = 0, $$sroa_idx69 = 0, $$sroa_idx82 = 0, $$sroa_idx99 = 0, $10 = 0, $100 = Math_fround(0), $101 = Math_fround(0), $102 = 0, $103 = Math_fround(0), $104 = Math_fround(0), $105 = 0, $106 = Math_fround(0), $107 = 0, $108 = Math_fround(0), $109 = Math_fround(0), $11 = Math_fround(0), $110 = 0, $111 = Math_fround(0);
 var $112 = 0, $113 = Math_fround(0), $114 = Math_fround(0), $115 = Math_fround(0), $116 = Math_fround(0), $117 = Math_fround(0), $118 = Math_fround(0), $119 = Math_fround(0), $12 = 0, $120 = Math_fround(0), $121 = 0, $122 = Math_fround(0), $123 = Math_fround(0), $124 = Math_fround(0), $125 = Math_fround(0), $126 = Math_fround(0), $127 = Math_fround(0), $128 = Math_fround(0), $129 = 0, $13 = Math_fround(0);
 var $130 = Math_fround(0), $131 = Math_fround(0), $132 = 0, $133 = Math_fround(0), $134 = Math_fround(0), $135 = 0, $136 = 0, $137 = 0, $138 = Math_fround(0), $139 = 0, $14 = Math_fround(0), $140 = Math_fround(0), $141 = Math_fround(0), $142 = 0, $143 = Math_fround(0), $144 = 0, $145 = Math_fround(0), $146 = Math_fround(0), $147 = Math_fround(0), $148 = Math_fround(0);
 var $149 = Math_fround(0), $15 = 0, $150 = Math_fround(0), $151 = Math_fround(0), $152 = 0, $153 = Math_fround(0), $154 = Math_fround(0), $155 = Math_fround(0), $156 = 0, $157 = Math_fround(0), $158 = Math_fround(0), $159 = Math_fround(0), $16 = Math_fround(0), $160 = Math_fround(0), $161 = Math_fround(0), $162 = Math_fround(0), $163 = Math_fround(0), $164 = Math_fround(0), $165 = 0, $166 = Math_fround(0);
 var $167 = Math_fround(0), $168 = 0, $169 = Math_fround(0), $17 = 0, $170 = 0, $171 = Math_fround(0), $172 = Math_fround(0), $173 = 0, $174 = Math_fround(0), $175 = 0, $176 = Math_fround(0), $177 = Math_fround(0), $178 = Math_fround(0), $179 = Math_fround(0), $18 = Math_fround(0), $180 = Math_fround(0), $181 = Math_fround(0), $182 = Math_fround(0), $183 = Math_fround(0), $184 = 0;
 var $185 = Math_fround(0), $186 = Math_fround(0), $187 = Math_fround(0), $188 = Math_fround(0), $189 = Math_fround(0), $19 = Math_fround(0), $190 = Math_fround(0), $191 = Math_fround(0), $192 = 0, $193 = Math_fround(0), $194 = Math_fround(0), $195 = 0, $196 = Math_fround(0), $197 = Math_fround(0), $198 = 0, $199 = 0, $20 = Math_fround(0), $200 = Math_fround(0), $201 = Math_fround(0), $21 = Math_fround(0);
 var $22 = Math_fround(0), $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = 0, $27 = Math_fround(0), $28 = Math_fround(0), $29 = 0, $30 = Math_fround(0), $31 = Math_fround(0), $32 = Math_fround(0), $33 = 0, $34 = Math_fround(0), $35 = 0, $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $40 = Math_fround(0), $41 = Math_fround(0);
 var $42 = Math_fround(0), $43 = Math_fround(0), $44 = 0, $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = 0, $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0), $53 = 0, $54 = Math_fround(0), $55 = Math_fround(0), $56 = Math_fround(0), $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0), $6 = 0;
 var $60 = Math_fround(0), $61 = 0, $62 = Math_fround(0), $63 = Math_fround(0), $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = 0, $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = 0, $71 = Math_fround(0), $72 = Math_fround(0), $73 = 0, $74 = 0, $75 = Math_fround(0), $76 = 0, $77 = Math_fround(0), $78 = Math_fround(0);
 var $79 = 0, $8 = 0, $80 = Math_fround(0), $81 = 0, $82 = Math_fround(0), $83 = Math_fround(0), $84 = Math_fround(0), $85 = Math_fround(0), $86 = Math_fround(0), $87 = Math_fround(0), $88 = Math_fround(0), $89 = 0, $9 = 0, $90 = Math_fround(0), $91 = Math_fround(0), $92 = Math_fround(0), $93 = 0, $94 = Math_fround(0), $95 = Math_fround(0), $96 = Math_fround(0);
 var $97 = Math_fround(0), $98 = Math_fround(0), $99 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 84|0);
 $6 = load4($5);
 $7 = ($6|0)>(0);
 if (!($7)) {
  ___assert_fail((6322|0),(6120|0),617,(6341|0));
  // unreachable;
 }
 $8 = ((($1)) + 72|0);
 $9 = load4($8);
 switch ($9|0) {
 case 0:  {
  $10 = ((($2)) + 12|0);
  $11 = loadf($10);
  $12 = ((($1)) + 24|0);
  $13 = loadf($12);
  $14 = Math_fround($11 * $13);
  $15 = ((($2)) + 8|0);
  $16 = loadf($15);
  $17 = ((($1)) + 28|0);
  $18 = loadf($17);
  $19 = Math_fround($16 * $18);
  $20 = Math_fround($14 - $19);
  $21 = loadf($2);
  $22 = Math_fround($21 + $20);
  $23 = Math_fround($13 * $16);
  $24 = Math_fround($11 * $18);
  $25 = Math_fround($23 + $24);
  $26 = ((($2)) + 4|0);
  $27 = loadf($26);
  $28 = Math_fround($25 + $27);
  $29 = ((($3)) + 12|0);
  $30 = loadf($29);
  $31 = loadf($1);
  $32 = Math_fround($30 * $31);
  $33 = ((($3)) + 8|0);
  $34 = loadf($33);
  $35 = ((($1)) + 4|0);
  $36 = loadf($35);
  $37 = Math_fround($34 * $36);
  $38 = Math_fround($32 - $37);
  $39 = loadf($3);
  $40 = Math_fround($39 + $38);
  $41 = Math_fround($31 * $34);
  $42 = Math_fround($30 * $36);
  $43 = Math_fround($41 + $42);
  $44 = ((($3)) + 4|0);
  $45 = loadf($44);
  $46 = Math_fround($43 + $45);
  $47 = Math_fround($40 - $22);
  $48 = Math_fround($46 - $28);
  storef($0,$47);
  $$sroa_idx107 = ((($0)) + 4|0);
  storef($$sroa_idx107,$48);
  $49 = Math_fround($47 * $47);
  $50 = Math_fround($48 * $48);
  $51 = Math_fround($49 + $50);
  $52 = (Math_fround(Math_sqrt((Math_fround($51)))));
  $53 = $52 < Math_fround(1.1920929E-7);
  if ($53) {
   $63 = $47;$65 = $48;
  } else {
   $54 = Math_fround(Math_fround(1.0) / $52);
   $55 = Math_fround($47 * $54);
   storef($0,$55);
   $56 = Math_fround($48 * $54);
   storef($$sroa_idx107,$56);
   $63 = $55;$65 = $56;
  }
  $57 = Math_fround($22 + $40);
  $58 = Math_fround($28 + $46);
  $59 = Math_fround($57 * Math_fround(0.5));
  $60 = Math_fround($58 * Math_fround(0.5));
  $61 = ((($0)) + 8|0);
  storef($61,$59);
  $$sroa_idx99 = ((($0)) + 12|0);
  storef($$sroa_idx99,$60);
  $62 = Math_fround($47 * $63);
  $64 = Math_fround($48 * $65);
  $66 = Math_fround($62 + $64);
  $67 = ((($1)) + 76|0);
  $68 = loadf($67);
  $69 = Math_fround($66 - $68);
  $70 = ((($1)) + 80|0);
  $71 = loadf($70);
  $72 = Math_fround($69 - $71);
  $73 = ((($0)) + 16|0);
  storef($73,$72);
  return;
  break;
 }
 case 1:  {
  $74 = ((($2)) + 12|0);
  $75 = loadf($74);
  $76 = ((($1)) + 16|0);
  $77 = loadf($76);
  $78 = Math_fround($75 * $77);
  $79 = ((($2)) + 8|0);
  $80 = loadf($79);
  $81 = ((($1)) + 20|0);
  $82 = loadf($81);
  $83 = Math_fround($80 * $82);
  $84 = Math_fround($78 - $83);
  $85 = Math_fround($77 * $80);
  $86 = Math_fround($75 * $82);
  $87 = Math_fround($85 + $86);
  storef($0,$84);
  $$sroa_idx82 = ((($0)) + 4|0);
  storef($$sroa_idx82,$87);
  $88 = loadf($74);
  $89 = ((($1)) + 24|0);
  $90 = loadf($89);
  $91 = Math_fround($88 * $90);
  $92 = loadf($79);
  $93 = ((($1)) + 28|0);
  $94 = loadf($93);
  $95 = Math_fround($92 * $94);
  $96 = Math_fround($91 - $95);
  $97 = loadf($2);
  $98 = Math_fround($97 + $96);
  $99 = Math_fround($90 * $92);
  $100 = Math_fround($88 * $94);
  $101 = Math_fround($99 + $100);
  $102 = ((($2)) + 4|0);
  $103 = loadf($102);
  $104 = Math_fround($101 + $103);
  $105 = ((($3)) + 12|0);
  $106 = loadf($105);
  $107 = (($1) + ($4<<3)|0);
  $108 = loadf($107);
  $109 = Math_fround($106 * $108);
  $110 = ((($3)) + 8|0);
  $111 = loadf($110);
  $112 = (((($1) + ($4<<3)|0)) + 4|0);
  $113 = loadf($112);
  $114 = Math_fround($111 * $113);
  $115 = Math_fround($109 - $114);
  $116 = loadf($3);
  $117 = Math_fround($116 + $115);
  $118 = Math_fround($108 * $111);
  $119 = Math_fround($106 * $113);
  $120 = Math_fround($118 + $119);
  $121 = ((($3)) + 4|0);
  $122 = loadf($121);
  $123 = Math_fround($120 + $122);
  $124 = Math_fround($117 - $98);
  $125 = Math_fround($123 - $104);
  $126 = Math_fround($84 * $124);
  $127 = Math_fround($125 * $87);
  $128 = Math_fround($126 + $127);
  $129 = ((($1)) + 76|0);
  $130 = loadf($129);
  $131 = Math_fround($128 - $130);
  $132 = ((($1)) + 80|0);
  $133 = loadf($132);
  $134 = Math_fround($131 - $133);
  $135 = ((($0)) + 16|0);
  storef($135,$134);
  $136 = ((($0)) + 8|0);
  storef($136,$117);
  $$sroa_idx69 = ((($0)) + 12|0);
  storef($$sroa_idx69,$123);
  return;
  break;
 }
 case 2:  {
  $137 = ((($3)) + 12|0);
  $138 = loadf($137);
  $139 = ((($1)) + 16|0);
  $140 = loadf($139);
  $141 = Math_fround($138 * $140);
  $142 = ((($3)) + 8|0);
  $143 = loadf($142);
  $144 = ((($1)) + 20|0);
  $145 = loadf($144);
  $146 = Math_fround($143 * $145);
  $147 = Math_fround($141 - $146);
  $148 = Math_fround($140 * $143);
  $149 = Math_fround($138 * $145);
  $150 = Math_fround($148 + $149);
  storef($0,$147);
  $$sroa_idx56 = ((($0)) + 4|0);
  storef($$sroa_idx56,$150);
  $151 = loadf($137);
  $152 = ((($1)) + 24|0);
  $153 = loadf($152);
  $154 = Math_fround($151 * $153);
  $155 = loadf($142);
  $156 = ((($1)) + 28|0);
  $157 = loadf($156);
  $158 = Math_fround($155 * $157);
  $159 = Math_fround($154 - $158);
  $160 = loadf($3);
  $161 = Math_fround($160 + $159);
  $162 = Math_fround($153 * $155);
  $163 = Math_fround($151 * $157);
  $164 = Math_fround($162 + $163);
  $165 = ((($3)) + 4|0);
  $166 = loadf($165);
  $167 = Math_fround($164 + $166);
  $168 = ((($2)) + 12|0);
  $169 = loadf($168);
  $170 = (($1) + ($4<<3)|0);
  $171 = loadf($170);
  $172 = Math_fround($169 * $171);
  $173 = ((($2)) + 8|0);
  $174 = loadf($173);
  $175 = (((($1) + ($4<<3)|0)) + 4|0);
  $176 = loadf($175);
  $177 = Math_fround($174 * $176);
  $178 = Math_fround($172 - $177);
  $179 = loadf($2);
  $180 = Math_fround($179 + $178);
  $181 = Math_fround($171 * $174);
  $182 = Math_fround($169 * $176);
  $183 = Math_fround($181 + $182);
  $184 = ((($2)) + 4|0);
  $185 = loadf($184);
  $186 = Math_fround($183 + $185);
  $187 = Math_fround($180 - $161);
  $188 = Math_fround($186 - $167);
  $189 = Math_fround($147 * $187);
  $190 = Math_fround($188 * $150);
  $191 = Math_fround($189 + $190);
  $192 = ((($1)) + 76|0);
  $193 = loadf($192);
  $194 = Math_fround($191 - $193);
  $195 = ((($1)) + 80|0);
  $196 = loadf($195);
  $197 = Math_fround($194 - $196);
  $198 = ((($0)) + 16|0);
  storef($198,$197);
  $199 = ((($0)) + 8|0);
  storef($199,$180);
  $$sroa_idx44 = ((($0)) + 12|0);
  storef($$sroa_idx44,$186);
  $200 = Math_fround(-$147);
  $201 = Math_fround(-$150);
  storef($0,$200);
  storef($$sroa_idx56,$201);
  return;
  break;
 }
 default: {
  return;
 }
 }
}
function __ZN15b2ContactSolver27SolveTOIPositionConstraintsEii($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$lcssa = Math_fround(0), $$0100 = Math_fround(0), $$0101 = Math_fround(0), $$0102253 = 0, $$0103$lcssa = Math_fround(0), $$0103252 = Math_fround(0), $$0104$lcssa = Math_fround(0), $$0104251 = Math_fround(0), $$0105 = Math_fround(0), $$0262 = Math_fround(0), $$098261 = 0, $$099 = Math_fround(0), $$1$lcssa = Math_fround(0), $$1254 = Math_fround(0), $$pre = 0, $$sroa$0200$0$lcssa = 0, $$sroa$0200$0247 = 0, $$sroa$0220$0$lcssa = 0, $$sroa$0220$0249 = 0, $$sroa$8$0$lcssa = 0;
 var $$sroa$8$0248 = 0, $$sroa$8225$0$lcssa = 0, $$sroa$8225$0250 = 0, $$sroa_idx141 = 0, $$sroa_idx152 = 0, $$sroa_idx169 = 0, $$sroa_idx182 = 0, $$sroa_idx191 = 0, $$sroa_idx195 = 0, $$sroa_idx211 = 0, $$sroa_idx215 = 0, $$sroa_idx231 = 0, $$sroa_idx240 = 0, $10 = 0, $100 = 0, $101 = Math_fround(0), $102 = Math_fround(0), $103 = Math_fround(0), $104 = Math_fround(0), $105 = Math_fround(0);
 var $106 = Math_fround(0), $107 = Math_fround(0), $108 = Math_fround(0), $109 = Math_fround(0), $11 = 0, $110 = Math_fround(0), $111 = Math_fround(0), $112 = Math_fround(0), $113 = Math_fround(0), $114 = 0, $115 = 0, $116 = Math_fround(0), $117 = Math_fround(0), $118 = Math_fround(0), $119 = Math_fround(0), $12 = 0, $120 = Math_fround(0), $121 = Math_fround(0), $122 = Math_fround(0), $123 = Math_fround(0);
 var $124 = Math_fround(0), $125 = 0, $126 = Math_fround(0), $127 = 0, $128 = Math_fround(0), $129 = Math_fround(0), $13 = 0, $130 = Math_fround(0), $131 = Math_fround(0), $132 = Math_fround(0), $133 = Math_fround(0), $134 = Math_fround(0), $135 = Math_fround(0), $136 = 0, $137 = Math_fround(0), $138 = 0, $139 = Math_fround(0), $14 = 0, $140 = Math_fround(0), $141 = Math_fround(0);
 var $142 = Math_fround(0), $143 = Math_fround(0), $144 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = Math_fround(0), $26 = Math_fround(0), $27 = 0, $28 = Math_fround(0), $29 = Math_fround(0), $3 = 0, $30 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = Math_fround(0), $37 = Math_fround(0), $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = Math_fround(0), $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = Math_fround(0), $51 = 0, $52 = Math_fround(0), $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = Math_fround(0), $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $67 = Math_fround(0);
 var $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = Math_fround(0), $76 = Math_fround(0), $77 = Math_fround(0), $78 = Math_fround(0), $79 = Math_fround(0), $8 = 0, $80 = Math_fround(0), $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = Math_fround(0), $85 = Math_fround(0);
 var $86 = Math_fround(0), $87 = Math_fround(0), $88 = Math_fround(0), $89 = Math_fround(0), $9 = 0, $90 = Math_fround(0), $91 = Math_fround(0), $92 = Math_fround(0), $93 = Math_fround(0), $94 = Math_fround(0), $95 = Math_fround(0), $96 = 0, $97 = Math_fround(0), $98 = Math_fround(0), $99 = Math_fround(0), $exitcond = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $3 = sp + 40|0;
 $4 = sp + 24|0;
 $5 = sp;
 $6 = ((($0)) + 48|0);
 $7 = load4($6);
 $8 = ($7|0)>(0);
 if (!($8)) {
  $$0$lcssa = Math_fround(0.0);
  $17 = $$0$lcssa >= Math_fround(-0.00749999983);
  STACKTOP = sp;return ($17|0);
 }
 $9 = ((($0)) + 36|0);
 $10 = ((($0)) + 24|0);
 $11 = ((($3)) + 8|0);
 $12 = ((($3)) + 12|0);
 $13 = ((($4)) + 8|0);
 $14 = ((($4)) + 12|0);
 $$sroa_idx182 = ((($3)) + 4|0);
 $$sroa_idx169 = ((($4)) + 4|0);
 $$sroa_idx152 = ((($5)) + 4|0);
 $15 = ((($5)) + 8|0);
 $$sroa_idx141 = ((($5)) + 12|0);
 $16 = ((($5)) + 16|0);
 $$0262 = Math_fround(0.0);$$098261 = 0;
 while(1) {
  $18 = load4($9);
  $19 = (($18) + (($$098261*88)|0)|0);
  $20 = (((($18) + (($$098261*88)|0)|0)) + 32|0);
  $21 = load4($20);
  $22 = (((($18) + (($$098261*88)|0)|0)) + 36|0);
  $23 = load4($22);
  $24 = (((($18) + (($$098261*88)|0)|0)) + 48|0);
  $25 = loadf($24);
  $$sroa_idx240 = (((($18) + (($$098261*88)|0)|0)) + 52|0);
  $26 = loadf($$sroa_idx240);
  $27 = (((($18) + (($$098261*88)|0)|0)) + 56|0);
  $28 = loadf($27);
  $$sroa_idx231 = (((($18) + (($$098261*88)|0)|0)) + 60|0);
  $29 = loadf($$sroa_idx231);
  $30 = (((($18) + (($$098261*88)|0)|0)) + 84|0);
  $31 = load4($30);
  $32 = ($21|0)==($1|0);
  $33 = ($21|0)==($2|0);
  $or$cond = $32 | $33;
  if ($or$cond) {
   $34 = (((($18) + (($$098261*88)|0)|0)) + 64|0);
   $35 = (((($18) + (($$098261*88)|0)|0)) + 40|0);
   $36 = loadf($35);
   $37 = loadf($34);
   $$0100 = $37;$$099 = $36;
  } else {
   $$0100 = Math_fround(0.0);$$099 = Math_fround(0.0);
  }
  $38 = (((($18) + (($$098261*88)|0)|0)) + 44|0);
  $39 = (((($18) + (($$098261*88)|0)|0)) + 68|0);
  $$0101 = loadf($38);
  $$0105 = loadf($39);
  $40 = load4($10);
  $41 = (($40) + (($21*12)|0)|0);
  $42 = load4($41);
  $$sroa_idx215 = (((($40) + (($21*12)|0)|0)) + 4|0);
  $43 = load4($$sroa_idx215);
  $44 = (((($40) + (($21*12)|0)|0)) + 8|0);
  $45 = loadf($44);
  $46 = (($40) + (($23*12)|0)|0);
  $47 = load4($46);
  $$sroa_idx195 = (((($40) + (($23*12)|0)|0)) + 4|0);
  $48 = load4($$sroa_idx195);
  $49 = (((($40) + (($23*12)|0)|0)) + 8|0);
  $50 = loadf($49);
  $51 = ($31|0)>(0);
  if ($51) {
   $52 = Math_fround($$099 + $$0101);
   $$0102253 = 0;$$0103252 = $50;$$0104251 = $45;$$1254 = $$0262;$$sroa$0200$0247 = $47;$$sroa$0220$0249 = $42;$$sroa$8$0248 = $48;$$sroa$8225$0250 = $43;
   while(1) {
    $63 = (Math_fround(_sinf($$0104251)));
    storef($11,$63);
    $64 = (Math_fround(_cosf($$0104251)));
    storef($12,$64);
    $65 = (Math_fround(_sinf($$0103252)));
    storef($13,$65);
    $66 = (Math_fround(_cosf($$0103252)));
    storef($14,$66);
    $67 = Math_fround($25 * $64);
    $68 = Math_fround($26 * $63);
    $69 = Math_fround($67 - $68);
    $70 = Math_fround($25 * $63);
    $71 = Math_fround($26 * $64);
    $72 = Math_fround($71 + $70);
    $73 = i32_bc2f($$sroa$0220$0249);
    $74 = Math_fround($73 - $69);
    $75 = i32_bc2f($$sroa$8225$0250);
    $76 = Math_fround($75 - $72);
    storef($3,$74);
    storef($$sroa_idx182,$76);
    $77 = Math_fround($28 * $66);
    $78 = Math_fround($29 * $65);
    $79 = Math_fround($77 - $78);
    $80 = Math_fround($28 * $65);
    $81 = Math_fround($29 * $66);
    $82 = Math_fround($81 + $80);
    $83 = i32_bc2f($$sroa$0200$0247);
    $84 = Math_fround($83 - $79);
    $85 = i32_bc2f($$sroa$8$0248);
    $86 = Math_fround($85 - $82);
    storef($4,$84);
    storef($$sroa_idx169,$86);
    __ZN24b2PositionSolverManifold10InitializeEP27b2ContactPositionConstraintRK11b2TransformS4_i($5,$19,$3,$4,$$0102253);
    $87 = loadf($5);
    $88 = loadf($$sroa_idx152);
    $89 = loadf($15);
    $90 = loadf($$sroa_idx141);
    $91 = loadf($16);
    $92 = Math_fround($89 - $73);
    $93 = Math_fround($90 - $75);
    $94 = Math_fround($89 - $83);
    $95 = Math_fround($90 - $85);
    $96 = $$1254 < $91;
    $97 = $96 ? $$1254 : $91;
    $98 = Math_fround($91 + Math_fround(0.00499999989));
    $99 = Math_fround($98 * Math_fround(0.75));
    $100 = $99 < Math_fround(0.0);
    $101 = $100 ? $99 : Math_fround(0.0);
    $102 = Math_fround($88 * $92);
    $103 = Math_fround($87 * $93);
    $104 = Math_fround($102 - $103);
    $105 = Math_fround($88 * $94);
    $106 = Math_fround($87 * $95);
    $107 = Math_fround($105 - $106);
    $108 = Math_fround($$0100 * $104);
    $109 = Math_fround($104 * $108);
    $110 = Math_fround($52 + $109);
    $111 = Math_fround($$0105 * $107);
    $112 = Math_fround($107 * $111);
    $113 = Math_fround($112 + $110);
    $114 = $113 > Math_fround(0.0);
    if ($114) {
     $115 = $101 < Math_fround(-0.200000003);
     $116 = $115 ? Math_fround(-0.200000003) : $101;
     $117 = Math_fround(-$116);
     $118 = Math_fround($117 / $113);
     $120 = $118;
    } else {
     $120 = Math_fround(0.0);
    }
    $119 = Math_fround($87 * $120);
    $121 = Math_fround($88 * $120);
    $122 = Math_fround($$099 * $119);
    $123 = Math_fround($$099 * $121);
    $124 = Math_fround($73 - $122);
    $125 = i32_bc2i($124);
    $126 = Math_fround($75 - $123);
    $127 = i32_bc2i($126);
    $128 = Math_fround($92 * $121);
    $129 = Math_fround($93 * $119);
    $130 = Math_fround($128 - $129);
    $131 = Math_fround($$0100 * $130);
    $132 = Math_fround($$0104251 - $131);
    $133 = Math_fround($$0101 * $119);
    $134 = Math_fround($$0101 * $121);
    $135 = Math_fround($83 + $133);
    $136 = i32_bc2i($135);
    $137 = Math_fround($85 + $134);
    $138 = i32_bc2i($137);
    $139 = Math_fround($94 * $121);
    $140 = Math_fround($95 * $119);
    $141 = Math_fround($139 - $140);
    $142 = Math_fround($$0105 * $141);
    $143 = Math_fround($$0103252 + $142);
    $144 = (($$0102253) + 1)|0;
    $exitcond = ($144|0)==($31|0);
    if ($exitcond) {
     break;
    } else {
     $$0102253 = $144;$$0103252 = $143;$$0104251 = $132;$$1254 = $97;$$sroa$0200$0247 = $136;$$sroa$0220$0249 = $125;$$sroa$8$0248 = $138;$$sroa$8225$0250 = $127;
    }
   }
   $$pre = load4($10);
   $$0103$lcssa = $143;$$0104$lcssa = $132;$$1$lcssa = $97;$$sroa$0200$0$lcssa = $136;$$sroa$0220$0$lcssa = $125;$$sroa$8$0$lcssa = $138;$$sroa$8225$0$lcssa = $127;$54 = $$pre;
  } else {
   $$0103$lcssa = $50;$$0104$lcssa = $45;$$1$lcssa = $$0262;$$sroa$0200$0$lcssa = $47;$$sroa$0220$0$lcssa = $42;$$sroa$8$0$lcssa = $48;$$sroa$8225$0$lcssa = $43;$54 = $40;
  }
  $53 = (($54) + (($21*12)|0)|0);
  store4($53,$$sroa$0220$0$lcssa);
  $$sroa_idx211 = (((($54) + (($21*12)|0)|0)) + 4|0);
  store4($$sroa_idx211,$$sroa$8225$0$lcssa);
  $55 = load4($10);
  $56 = (((($55) + (($21*12)|0)|0)) + 8|0);
  storef($56,$$0104$lcssa);
  $57 = (($55) + (($23*12)|0)|0);
  store4($57,$$sroa$0200$0$lcssa);
  $$sroa_idx191 = (((($55) + (($23*12)|0)|0)) + 4|0);
  store4($$sroa_idx191,$$sroa$8$0$lcssa);
  $58 = load4($10);
  $59 = (((($58) + (($23*12)|0)|0)) + 8|0);
  storef($59,$$0103$lcssa);
  $60 = (($$098261) + 1)|0;
  $61 = load4($6);
  $62 = ($60|0)<($61|0);
  if ($62) {
   $$0262 = $$1$lcssa;$$098261 = $60;
  } else {
   $$0$lcssa = $$1$lcssa;
   break;
  }
 }
 $17 = $$0$lcssa >= Math_fround(-0.00749999983);
 STACKTOP = sp;return ($17|0);
}
function __ZNK12b2ChainShape12GetChildEdgeEP11b2EdgeShapei($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$sink = 0, $$sink18 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = i64(), $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = i64(), $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = i64();
 var $28 = 0, $29 = i64(), $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = i64(), $41 = 0, $42 = i64(), $43 = 0, $44 = 0, $45 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($2|0)>(-1);
 if (!($3)) {
  ___assert_fail((6392|0),(6352|0),89,(6426|0));
  // unreachable;
 }
 $4 = ((($0)) + 16|0);
 $5 = load4($4);
 $6 = (($5) + -1)|0;
 $7 = ($6|0)>($2|0);
 if (!($7)) {
  ___assert_fail((6392|0),(6352|0),89,(6426|0));
  // unreachable;
 }
 $8 = ((($1)) + 4|0);
 store4($8,1);
 $9 = ((($0)) + 8|0);
 $10 = load4($9);
 $11 = ((($1)) + 8|0);
 store4($11,$10);
 $12 = ((($1)) + 12|0);
 $13 = ((($0)) + 12|0);
 $14 = load4($13);
 $15 = (($14) + ($2<<3)|0);
 $16 = load8($15,4);
 store8($12,$16,4);
 $17 = ((($1)) + 20|0);
 $18 = (($2) + 1)|0;
 $19 = load4($13);
 $20 = (($19) + ($18<<3)|0);
 $21 = load8($20,4);
 store8($17,$21,4);
 $22 = ($2|0)>(0);
 $23 = ((($1)) + 28|0);
 if ($22) {
  $24 = (($2) + -1)|0;
  $25 = load4($13);
  $26 = (($25) + ($24<<3)|0);
  $27 = load8($26,4);
  store8($23,$27,4);
  $$sink = 1;
 } else {
  $28 = ((($0)) + 20|0);
  $29 = load8($28,4);
  store8($23,$29,4);
  $30 = ((($0)) + 36|0);
  $31 = load1($30);
  $$sink = $31;
 }
 $32 = ((($1)) + 44|0);
 store1($32,$$sink);
 $33 = load4($4);
 $34 = (($33) + -2)|0;
 $35 = ($34|0)>($2|0);
 $36 = ((($1)) + 36|0);
 if ($35) {
  $37 = (($2) + 2)|0;
  $38 = load4($13);
  $39 = (($38) + ($37<<3)|0);
  $40 = load8($39,4);
  store8($36,$40,4);
  $$sink18 = 1;
  $45 = ((($1)) + 45|0);
  store1($45,$$sink18);
  return;
 } else {
  $41 = ((($0)) + 28|0);
  $42 = load8($41,4);
  store8($36,$42,4);
  $43 = ((($0)) + 37|0);
  $44 = load1($43);
  $$sink18 = $44;
  $45 = ((($1)) + 45|0);
  store1($45,$$sink18);
  return;
 }
}
function ___stdio_close($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $1 = ((($0)) + 60|0);
 $2 = load4($1);
 store4($vararg_buffer,$2);
 $3 = (___syscall6(6,($vararg_buffer|0))|0);
 $4 = (___syscall_ret($3)|0);
 STACKTOP = sp;return ($4|0);
}
function ___stdio_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$056 = 0, $$058 = 0, $$059 = 0, $$061 = 0, $$1 = 0, $$157 = 0, $$160 = 0, $$phi$trans$insert = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $3 = sp + 32|0;
 $4 = ((($0)) + 28|0);
 $5 = load4($4);
 store4($3,$5);
 $6 = ((($3)) + 4|0);
 $7 = ((($0)) + 20|0);
 $8 = load4($7);
 $9 = (($8) - ($5))|0;
 store4($6,$9);
 $10 = ((($3)) + 8|0);
 store4($10,$1);
 $11 = ((($3)) + 12|0);
 store4($11,$2);
 $12 = (($9) + ($2))|0;
 $13 = ((($0)) + 60|0);
 $14 = ((($0)) + 44|0);
 $$056 = 2;$$058 = $12;$$059 = $3;
 while(1) {
  $15 = load4(9660);
  $16 = ($15|0)==(0|0);
  if ($16) {
   $20 = load4($13);
   store4($vararg_buffer3,$20);
   $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
   store4($vararg_ptr6,$$059);
   $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
   store4($vararg_ptr7,$$056);
   $21 = (___syscall146(146,($vararg_buffer3|0))|0);
   $22 = (___syscall_ret($21)|0);
   $$0 = $22;
  } else {
   _pthread_cleanup_push((22|0),($0|0));
   $17 = load4($13);
   store4($vararg_buffer,$17);
   $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
   store4($vararg_ptr1,$$059);
   $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
   store4($vararg_ptr2,$$056);
   $18 = (___syscall146(146,($vararg_buffer|0))|0);
   $19 = (___syscall_ret($18)|0);
   _pthread_cleanup_pop(0);
   $$0 = $19;
  }
  $23 = ($$058|0)==($$0|0);
  if ($23) {
   label = 6;
   break;
  }
  $30 = ($$0|0)<(0);
  if ($30) {
   label = 8;
   break;
  }
  $38 = (($$058) - ($$0))|0;
  $39 = ((($$059)) + 4|0);
  $40 = load4($39);
  $41 = ($$0>>>0)>($40>>>0);
  if ($41) {
   $42 = load4($14);
   store4($4,$42);
   store4($7,$42);
   $43 = (($$0) - ($40))|0;
   $44 = ((($$059)) + 8|0);
   $45 = (($$056) + -1)|0;
   $$phi$trans$insert = ((($$059)) + 12|0);
   $$pre = load4($$phi$trans$insert);
   $$1 = $43;$$157 = $45;$$160 = $44;$53 = $$pre;
  } else {
   $46 = ($$056|0)==(2);
   if ($46) {
    $47 = load4($4);
    $48 = (($47) + ($$0)|0);
    store4($4,$48);
    $$1 = $$0;$$157 = 2;$$160 = $$059;$53 = $40;
   } else {
    $$1 = $$0;$$157 = $$056;$$160 = $$059;$53 = $40;
   }
  }
  $49 = load4($$160);
  $50 = (($49) + ($$1)|0);
  store4($$160,$50);
  $51 = ((($$160)) + 4|0);
  $52 = (($53) - ($$1))|0;
  store4($51,$52);
  $$056 = $$157;$$058 = $38;$$059 = $$160;
 }
 if ((label|0) == 6) {
  $24 = load4($14);
  $25 = ((($0)) + 48|0);
  $26 = load4($25);
  $27 = (($24) + ($26)|0);
  $28 = ((($0)) + 16|0);
  store4($28,$27);
  $29 = $24;
  store4($4,$29);
  store4($7,$29);
  $$061 = $2;
 }
 else if ((label|0) == 8) {
  $31 = ((($0)) + 16|0);
  store4($31,0);
  store4($4,0);
  store4($7,0);
  $32 = load4($0);
  $33 = $32 | 32;
  store4($0,$33);
  $34 = ($$056|0)==(2);
  if ($34) {
   $$061 = 0;
  } else {
   $35 = ((($$059)) + 4|0);
   $36 = load4($35);
   $37 = (($2) - ($36))|0;
   $$061 = $37;
  }
 }
 STACKTOP = sp;return ($$061|0);
}
function ___stdio_seek($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $3 = sp + 20|0;
 $4 = ((($0)) + 60|0);
 $5 = load4($4);
 store4($vararg_buffer,$5);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,0);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,$1);
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 store4($vararg_ptr3,$3);
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 store4($vararg_ptr4,$2);
 $6 = (___syscall140(140,($vararg_buffer|0))|0);
 $7 = (___syscall_ret($6)|0);
 $8 = ($7|0)<(0);
 if ($8) {
  store4($3,-1);
  $9 = -1;
 } else {
  $$pre = load4($3);
  $9 = $$pre;
 }
 STACKTOP = sp;return ($9|0);
}
function ___syscall_ret($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0>>>0)>(4294963200);
 if ($1) {
  $2 = (0 - ($0))|0;
  $3 = (___errno_location()|0);
  store4($3,$2);
  $$0 = -1;
 } else {
  $$0 = $0;
 }
 return ($$0|0);
}
function ___errno_location() {
 var $$0 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (0|0)==(0|0);
 if ($0) {
  $$0 = 9704;
 } else {
  $1 = (_pthread_self()|0);
  $2 = ((($1)) + 64|0);
  $3 = load4($2);
  $$0 = $3;
 }
 return ($$0|0);
}
function _cleanup_418($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 68|0);
 $2 = load4($1);
 $3 = ($2|0)==(0);
 if ($3) {
  ___unlockfile($0);
 }
 return;
}
function ___unlockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___stdout_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $vararg_buffer = sp;
 $3 = sp + 12|0;
 $4 = ((($0)) + 36|0);
 store4($4,4);
 $5 = load4($0);
 $6 = $5 & 64;
 $7 = ($6|0)==(0);
 if ($7) {
  $8 = ((($0)) + 60|0);
  $9 = load4($8);
  store4($vararg_buffer,$9);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,21505);
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  store4($vararg_ptr2,$3);
  $10 = (___syscall54(54,($vararg_buffer|0))|0);
  $11 = ($10|0)==(0);
  if (!($11)) {
   $12 = ((($0)) + 75|0);
   store1($12,-1);
  }
 }
 $13 = (___stdio_write($0,$1,$2)|0);
 STACKTOP = sp;return ($13|0);
}
function _scalbn($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $$ = 0, $$0 = 0.0, $$020 = 0, $$1 = 0, $10 = 0.0, $11 = 0, $12 = 0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0, $17 = i64(), $18 = i64(), $19 = 0.0, $2 = 0, $20 = 0.0, $3 = 0.0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0.0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)>(1023);
 if ($2) {
  $3 = $0 * 8.9884656743115795E+307;
  $4 = (($1) + -1023)|0;
  $5 = ($4|0)>(1023);
  $6 = (($1) + -2046)|0;
  if ($5) {
   $7 = $3 * 8.9884656743115795E+307;
   $8 = ($6|0)>(1023);
   $$ = $8 ? 1023 : $6;
   $$0 = $7;$$020 = $$;
  } else {
   $$0 = $3;$$020 = $4;
  }
 } else {
  $9 = ($1|0)<(-1022);
  if ($9) {
   $10 = $0 * 2.2250738585072014E-308;
   $11 = (($1) + 1022)|0;
   $12 = ($11|0)<(-1022);
   $13 = (($1) + 2044)|0;
   if ($12) {
    $14 = $10 * 2.2250738585072014E-308;
    $15 = ($13|0)<(-1022);
    $$1 = $15 ? -1022 : $13;
    $$0 = $14;$$020 = $$1;
   } else {
    $$0 = $10;$$020 = $11;
   }
  } else {
   $$0 = $0;$$020 = $1;
  }
 }
 $16 = (($$020) + 1023)|0;
 $17 = i64_zext($16>>>0);
 $18 = i64_shl($17,i64_const(52,0));
 $19 = i64_bc2d($18);
 $20 = $$0 * $19;
 return (+$20);
}
function _vfprintf($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$0 = 0, $$1 = 0, $$1$ = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $vacopy_currentptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0;
 $3 = sp + 120|0;
 $4 = sp + 80|0;
 $5 = sp;
 $6 = sp + 136|0;
 ; store8($4,i64_const(0,0),4); store8($4+8|0,i64_const(0,0),4); store8($4+16|0,i64_const(0,0),4); store8($4+24|0,i64_const(0,0),4); store8($4+32|0,i64_const(0,0),4);
 $vacopy_currentptr = load4($2);
 store4($3,$vacopy_currentptr);
 $7 = (_printf_core(0,$1,$3,$5,$4)|0);
 $8 = ($7|0)<(0);
 if ($8) {
  $$0 = -1;
 } else {
  $9 = ((($0)) + 76|0);
  $10 = load4($9);
  $11 = ($10|0)>(-1);
  if ($11) {
   $12 = (___lockfile($0)|0);
   $39 = $12;
  } else {
   $39 = 0;
  }
  $13 = load4($0);
  $14 = $13 & 32;
  $15 = ((($0)) + 74|0);
  $16 = load1($15);
  $17 = ($16<<24>>24)<(1);
  if ($17) {
   $18 = $13 & -33;
   store4($0,$18);
  }
  $19 = ((($0)) + 48|0);
  $20 = load4($19);
  $21 = ($20|0)==(0);
  if ($21) {
   $23 = ((($0)) + 44|0);
   $24 = load4($23);
   store4($23,$6);
   $25 = ((($0)) + 28|0);
   store4($25,$6);
   $26 = ((($0)) + 20|0);
   store4($26,$6);
   store4($19,80);
   $27 = ((($6)) + 80|0);
   $28 = ((($0)) + 16|0);
   store4($28,$27);
   $29 = (_printf_core($0,$1,$3,$5,$4)|0);
   $30 = ($24|0)==(0|0);
   if ($30) {
    $$1 = $29;
   } else {
    $31 = ((($0)) + 36|0);
    $32 = load4($31);
    (FUNCTION_TABLE_iiii[$32 & 7]($0,0,0)|0);
    $33 = load4($26);
    $34 = ($33|0)==(0|0);
    $$ = $34 ? -1 : $29;
    store4($23,$24);
    store4($19,0);
    store4($28,0);
    store4($25,0);
    store4($26,0);
    $$1 = $$;
   }
  } else {
   $22 = (_printf_core($0,$1,$3,$5,$4)|0);
   $$1 = $22;
  }
  $35 = load4($0);
  $36 = $35 & 32;
  $37 = ($36|0)==(0);
  $$1$ = $37 ? $$1 : -1;
  $38 = $35 | $14;
  store4($0,$38);
  $40 = ($39|0)==(0);
  if (!($40)) {
   ___unlockfile($0);
  }
  $$0 = $$1$;
 }
 STACKTOP = sp;return ($$0|0);
}
function _printf_core($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$ = 0, $$$0259 = 0, $$$0262 = 0, $$$0269 = 0, $$$3484$i = 0, $$$3484705$i = 0, $$$3484706$i = 0, $$$3501$i = 0, $$$4266 = 0, $$$4502$i = 0, $$$5 = 0, $$$i = 0, $$0 = 0, $$0$i = 0, $$0$lcssa$i300 = 0, $$0$tr$i = 0, $$0228 = 0, $$0229396 = 0, $$0232 = 0, $$0235 = 0;
 var $$0237 = 0, $$0240$lcssa = 0, $$0240$lcssa460 = 0, $$0240395 = 0, $$0243 = 0, $$0247 = 0, $$0249$lcssa = 0, $$0249383 = 0, $$0252 = 0, $$0253 = 0, $$0254 = 0, $$0254$ = 0, $$0259 = 0, $$0262342 = 0, $$0262390 = 0, $$0269 = 0, $$0269$phi = 0, $$0321 = 0, $$045$i = i64(), $$0463$lcssa$i = 0;
 var $$0463594$i = 0, $$0464603$i = 0, $$0466$i = 0.0, $$0470$i = 0, $$0471$i = 0.0, $$0479$i = 0, $$0487652$i = 0, $$0488$i = 0, $$0488663$i = 0, $$0488665$i = 0, $$0496$$9$i = 0, $$0497664$i = 0, $$0498$i = 0, $$05$lcssa$i = 0, $$0509592$i = 0.0, $$0510$i = 0, $$0511$i = 0, $$0514647$i = 0, $$0520$i = 0, $$0522$$i = 0;
 var $$0522$i = 0, $$0524$i = 0, $$0526$i = 0, $$0528$i = 0, $$0528639$i = 0, $$0528641$i = 0, $$0531646$i = 0, $$056$i = 0, $$06$i = 0, $$06$i290 = 0, $$06$i298 = 0, $$07$i = i64(), $$1 = 0, $$1230407 = 0, $$1233 = 0, $$1236 = 0, $$1238 = 0, $$1241406 = 0, $$1244394 = 0, $$1248 = 0;
 var $$1250 = 0, $$1255 = 0, $$1260 = 0, $$1263 = 0, $$1263$ = 0, $$1270 = 0, $$1322 = 0, $$1465$i = 0, $$1467$i = 0.0, $$1469$i = 0.0, $$1472$i = 0.0, $$1480$i = 0, $$1482$lcssa$i = 0, $$1482671$i = 0, $$1489651$i = 0, $$1499$lcssa$i = 0, $$1499670$i = 0, $$1508593$i = 0, $$1512$lcssa$i = 0, $$1512617$i = 0;
 var $$1515$i = 0, $$1521$i = 0, $$1525$i = 0, $$1527$i = 0, $$1529624$i = 0, $$1532$lcssa$i = 0, $$1532640$i = 0, $$1607$i = 0, $$2 = 0, $$2$i = 0, $$2234 = 0, $$2239 = 0, $$2242381 = 0, $$2245 = 0, $$2251 = 0, $$2256 = 0, $$2256$ = 0, $$2261 = 0, $$2271 = 0, $$2323$lcssa = 0;
 var $$2323382 = 0, $$2473$i = 0.0, $$2476$$545$i = 0, $$2476$$547$i = 0, $$2476$i = 0, $$2483$ph$i = 0, $$2490$lcssa$i = 0, $$2490632$i = 0, $$2500$i = 0, $$2513$i = 0, $$2516628$i = 0, $$2530$i = 0, $$2533627$i = 0, $$3$i = 0.0, $$3257 = 0, $$3265 = 0, $$3272 = 0, $$331 = 0, $$332 = 0, $$333 = 0;
 var $$3379 = 0, $$3477$i = 0, $$3484$lcssa$i = 0, $$3484658$i = 0, $$3501$lcssa$i = 0, $$3501657$i = 0, $$3534623$i = 0, $$4$i = 0.0, $$4258458 = 0, $$4266 = 0, $$4325 = 0, $$4478$lcssa$i = 0, $$4478600$i = 0, $$4492$i = 0, $$4502$i = 0, $$4518$i = 0, $$5 = 0, $$5$lcssa$i = 0, $$537$i = 0, $$538$$i = 0;
 var $$538$i = 0, $$541$i = 0.0, $$544$i = 0, $$546$i = 0, $$5486$lcssa$i = 0, $$5486633$i = 0, $$5493606$i = 0, $$5519$ph$i = 0, $$553$i = 0, $$554$i = 0, $$557$i = 0.0, $$5611$i = 0, $$6 = 0, $$6$i = 0, $$6268 = 0, $$6494599$i = 0, $$7 = 0, $$7495610$i = 0, $$7505$$i = 0, $$7505$i = 0;
 var $$7505$ph$i = 0, $$8$i = 0, $$9$ph$i = 0, $$lcssa683$i = 0, $$neg$i = 0, $$neg572$i = 0, $$pn$i = 0, $$pr = 0, $$pr$i = 0, $$pr571$i = 0, $$pre = 0, $$pre$i = 0, $$pre$phi704$iZ2D = 0, $$pre452 = 0, $$pre453 = 0, $$pre454 = 0, $$pre456 = i64(), $$pre457 = i64(), $$pre697$i = 0, $$pre700$i = 0;
 var $$pre703$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = i64(), $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = i64(), $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = i64(), $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = i64(), $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = i64(), $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = i64(), $192 = 0, $193 = 0, $194 = i64(), $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = i64(), $20 = 0, $200 = 0, $201 = i64(), $202 = i64(), $203 = 0, $204 = 0, $205 = i64(), $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = i64(), $214 = 0, $215 = i64(), $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = i64(), $221 = 0, $222 = 0, $223 = 0, $224 = i64(), $225 = 0;
 var $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = i64(), $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0;
 var $244 = 0, $245 = 0, $246 = 0, $247 = i64(), $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0;
 var $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0.0, $275 = i64(), $276 = 0, $277 = 0.0, $278 = 0, $279 = 0, $28 = 0;
 var $280 = 0, $281 = 0, $282 = i64(), $283 = i64(), $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0;
 var $299 = 0, $30 = 0, $300 = 0.0, $301 = 0.0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0.0;
 var $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0.0, $321 = 0.0, $322 = 0.0, $323 = 0.0, $324 = 0.0, $325 = 0.0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = i64(), $331 = 0, $332 = 0, $333 = 0, $334 = 0;
 var $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0.0, $351 = 0.0, $352 = 0.0;
 var $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0;
 var $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0.0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0.0;
 var $39 = 0, $390 = 0.0, $391 = 0.0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = i64(), $399 = 0, $40 = 0, $400 = i64(), $401 = i64(), $402 = i64(), $403 = i64(), $404 = i64(), $405 = 0, $406 = i64(), $407 = 0;
 var $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0;
 var $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0;
 var $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0;
 var $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0;
 var $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0;
 var $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0.0, $503 = 0.0, $504 = 0, $505 = 0.0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0;
 var $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0;
 var $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0;
 var $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0;
 var $570 = 0, $571 = 0, $572 = 0, $573 = i64(), $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0;
 var $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = i64(), $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0;
 var $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0;
 var $624 = i64(), $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0;
 var $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = i64(), $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0;
 var $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0;
 var $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0;
 var $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = i64(), $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $exitcond$i = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded12 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded16 = 0, $expanded4 = 0, $expanded5 = 0;
 var $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $expanded9 = 0, $isdigit = 0, $isdigit$i = 0, $isdigit$i292 = 0, $isdigit275 = 0, $isdigit277 = 0, $isdigit5$i = 0, $isdigit5$i288 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp$i = 0, $isdigittmp$i291 = 0, $isdigittmp274 = 0, $isdigittmp276 = 0, $isdigittmp4$i = 0, $isdigittmp4$i287 = 0, $isdigittmp7$i = 0;
 var $isdigittmp7$i289 = 0, $notlhs$i = 0, $notrhs$i = 0, $or$cond = 0, $or$cond$i = 0, $or$cond280 = 0, $or$cond282 = 0, $or$cond285 = 0, $or$cond3$not$i = 0, $or$cond412 = 0, $or$cond540$i = 0, $or$cond543$i = 0, $or$cond552$i = 0, $or$cond6$i = 0, $scevgep694$i = 0, $scevgep694695$i = 0, $storemerge = 0, $storemerge273345 = 0, $storemerge273389 = 0, $storemerge278 = 0;
 var $sum = 0, $trunc = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 624|0;
 $5 = sp + 24|0;
 $6 = sp + 16|0;
 $7 = sp + 588|0;
 $8 = sp + 576|0;
 $9 = sp;
 $10 = sp + 536|0;
 $11 = sp + 8|0;
 $12 = sp + 528|0;
 $13 = ($0|0)!=(0|0);
 $14 = ((($10)) + 40|0);
 $15 = $14;
 $16 = ((($10)) + 39|0);
 $17 = ((($11)) + 4|0);
 $18 = $7;
 $19 = (0 - ($18))|0;
 $20 = ((($8)) + 12|0);
 $21 = ((($8)) + 11|0);
 $22 = $20;
 $23 = (($22) - ($18))|0;
 $24 = (-2 - ($18))|0;
 $25 = (($22) + 2)|0;
 $26 = ((($5)) + 288|0);
 $27 = ((($7)) + 9|0);
 $28 = $27;
 $29 = ((($7)) + 8|0);
 $$0243 = 0;$$0247 = 0;$$0269 = 0;$$0321 = $1;
 L1: while(1) {
  $30 = ($$0247|0)>(-1);
  do {
   if ($30) {
    $31 = (2147483647 - ($$0247))|0;
    $32 = ($$0243|0)>($31|0);
    if ($32) {
     $33 = (___errno_location()|0);
     store4($33,75);
     $$1248 = -1;
     break;
    } else {
     $34 = (($$0243) + ($$0247))|0;
     $$1248 = $34;
     break;
    }
   } else {
    $$1248 = $$0247;
   }
  } while(0);
  $35 = load1($$0321);
  $36 = ($35<<24>>24)==(0);
  if ($36) {
   label = 243;
   break;
  } else {
   $$1322 = $$0321;$37 = $35;
  }
  L9: while(1) {
   switch ($37<<24>>24) {
   case 37:  {
    $$0249383 = $$1322;$$2323382 = $$1322;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $$0249$lcssa = $$1322;$$2323$lcssa = $$1322;
    break L9;
    break;
   }
   default: {
   }
   }
   $38 = ((($$1322)) + 1|0);
   $$pre = load1($38);
   $$1322 = $38;$37 = $$pre;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $39 = ((($$2323382)) + 1|0);
     $40 = load1($39);
     $41 = ($40<<24>>24)==(37);
     if (!($41)) {
      $$0249$lcssa = $$0249383;$$2323$lcssa = $$2323382;
      break L12;
     }
     $42 = ((($$0249383)) + 1|0);
     $43 = ((($$2323382)) + 2|0);
     $44 = load1($43);
     $45 = ($44<<24>>24)==(37);
     if ($45) {
      $$0249383 = $42;$$2323382 = $43;
      label = 9;
     } else {
      $$0249$lcssa = $42;$$2323$lcssa = $43;
      break;
     }
    }
   }
  } while(0);
  $46 = $$0249$lcssa;
  $47 = $$0321;
  $48 = (($46) - ($47))|0;
  if ($13) {
   $49 = load4($0);
   $50 = $49 & 32;
   $51 = ($50|0)==(0);
   if ($51) {
    (___fwritex($$0321,$48,$0)|0);
   }
  }
  $52 = ($48|0)==(0);
  if (!($52)) {
   $$0269$phi = $$0269;$$0243 = $48;$$0247 = $$1248;$$0321 = $$2323$lcssa;$$0269 = $$0269$phi;
   continue;
  }
  $53 = ((($$2323$lcssa)) + 1|0);
  $54 = load1($53);
  $55 = $54 << 24 >> 24;
  $isdigittmp = (($55) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $56 = ((($$2323$lcssa)) + 2|0);
   $57 = load1($56);
   $58 = ($57<<24>>24)==(36);
   $59 = ((($$2323$lcssa)) + 3|0);
   $$331 = $58 ? $59 : $53;
   $$$0269 = $58 ? 1 : $$0269;
   $isdigittmp$ = $58 ? $isdigittmp : -1;
   $$pre452 = load1($$331);
   $$0253 = $isdigittmp$;$$1270 = $$$0269;$61 = $$pre452;$storemerge = $$331;
  } else {
   $$0253 = -1;$$1270 = $$0269;$61 = $54;$storemerge = $53;
  }
  $60 = $61 << 24 >> 24;
  $62 = (($60) + -32)|0;
  $63 = ($62>>>0)<(32);
  L25: do {
   if ($63) {
    $$0262390 = 0;$65 = $62;$69 = $61;$storemerge273389 = $storemerge;
    while(1) {
     $64 = 1 << $65;
     $66 = $64 & 75913;
     $67 = ($66|0)==(0);
     if ($67) {
      $$0262342 = $$0262390;$78 = $69;$storemerge273345 = $storemerge273389;
      break L25;
     }
     $68 = $69 << 24 >> 24;
     $70 = (($68) + -32)|0;
     $71 = 1 << $70;
     $72 = $71 | $$0262390;
     $73 = ((($storemerge273389)) + 1|0);
     $74 = load1($73);
     $75 = $74 << 24 >> 24;
     $76 = (($75) + -32)|0;
     $77 = ($76>>>0)<(32);
     if ($77) {
      $$0262390 = $72;$65 = $76;$69 = $74;$storemerge273389 = $73;
     } else {
      $$0262342 = $72;$78 = $74;$storemerge273345 = $73;
      break;
     }
    }
   } else {
    $$0262342 = 0;$78 = $61;$storemerge273345 = $storemerge;
   }
  } while(0);
  $79 = ($78<<24>>24)==(42);
  do {
   if ($79) {
    $80 = ((($storemerge273345)) + 1|0);
    $81 = load1($80);
    $82 = $81 << 24 >> 24;
    $isdigittmp276 = (($82) + -48)|0;
    $isdigit277 = ($isdigittmp276>>>0)<(10);
    if ($isdigit277) {
     $83 = ((($storemerge273345)) + 2|0);
     $84 = load1($83);
     $85 = ($84<<24>>24)==(36);
     if ($85) {
      $86 = (($4) + ($isdigittmp276<<2)|0);
      store4($86,10);
      $87 = load1($80);
      $88 = $87 << 24 >> 24;
      $89 = (($88) + -48)|0;
      $90 = (($3) + ($89<<3)|0);
      $91 = load8($90);
      $92 = i64_trunc($91);
      $93 = ((($storemerge273345)) + 3|0);
      $$0259 = $92;$$2271 = 1;$storemerge278 = $93;
     } else {
      label = 24;
     }
    } else {
     label = 24;
    }
    if ((label|0) == 24) {
     label = 0;
     $94 = ($$1270|0)==(0);
     if (!($94)) {
      $$0 = -1;
      break L1;
     }
     if (!($13)) {
      $$1260 = 0;$$1263 = $$0262342;$$3272 = 0;$$4325 = $80;$$pr = $81;
      break;
     }
     $arglist_current = load4($2);
     $95 = $arglist_current;
     $expanded5 = ((0) + 4|0);
     $expanded4 = $expanded5;
     $expanded = (($expanded4) - 1)|0;
     $96 = (($95) + ($expanded))|0;
     $expanded9 = ((0) + 4|0);
     $expanded8 = $expanded9;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $97 = $96 & $expanded6;
     $98 = $97;
     $99 = load4($98);
     $arglist_next = ((($98)) + 4|0);
     store4($2,$arglist_next);
     $$0259 = $99;$$2271 = 0;$storemerge278 = $80;
    }
    $100 = ($$0259|0)<(0);
    $101 = $$0262342 | 8192;
    $102 = (0 - ($$0259))|0;
    $$$0262 = $100 ? $101 : $$0262342;
    $$$0259 = $100 ? $102 : $$0259;
    $$pre453 = load1($storemerge278);
    $$1260 = $$$0259;$$1263 = $$$0262;$$3272 = $$2271;$$4325 = $storemerge278;$$pr = $$pre453;
   } else {
    $103 = $78 << 24 >> 24;
    $isdigittmp4$i = (($103) + -48)|0;
    $isdigit5$i = ($isdigittmp4$i>>>0)<(10);
    if ($isdigit5$i) {
     $$06$i = 0;$107 = $storemerge273345;$isdigittmp7$i = $isdigittmp4$i;
     while(1) {
      $104 = ($$06$i*10)|0;
      $105 = (($104) + ($isdigittmp7$i))|0;
      $106 = ((($107)) + 1|0);
      $108 = load1($106);
      $109 = $108 << 24 >> 24;
      $isdigittmp$i = (($109) + -48)|0;
      $isdigit$i = ($isdigittmp$i>>>0)<(10);
      if ($isdigit$i) {
       $$06$i = $105;$107 = $106;$isdigittmp7$i = $isdigittmp$i;
      } else {
       break;
      }
     }
     $110 = ($105|0)<(0);
     if ($110) {
      $$0 = -1;
      break L1;
     } else {
      $$1260 = $105;$$1263 = $$0262342;$$3272 = $$1270;$$4325 = $106;$$pr = $108;
     }
    } else {
     $$1260 = 0;$$1263 = $$0262342;$$3272 = $$1270;$$4325 = $storemerge273345;$$pr = $78;
    }
   }
  } while(0);
  $111 = ($$pr<<24>>24)==(46);
  L45: do {
   if ($111) {
    $112 = ((($$4325)) + 1|0);
    $113 = load1($112);
    $114 = ($113<<24>>24)==(42);
    if (!($114)) {
     $135 = $113 << 24 >> 24;
     $isdigittmp4$i287 = (($135) + -48)|0;
     $isdigit5$i288 = ($isdigittmp4$i287>>>0)<(10);
     if ($isdigit5$i288) {
      $$06$i290 = 0;$139 = $112;$isdigittmp7$i289 = $isdigittmp4$i287;
     } else {
      $$0254 = 0;$$6 = $112;
      break;
     }
     while(1) {
      $136 = ($$06$i290*10)|0;
      $137 = (($136) + ($isdigittmp7$i289))|0;
      $138 = ((($139)) + 1|0);
      $140 = load1($138);
      $141 = $140 << 24 >> 24;
      $isdigittmp$i291 = (($141) + -48)|0;
      $isdigit$i292 = ($isdigittmp$i291>>>0)<(10);
      if ($isdigit$i292) {
       $$06$i290 = $137;$139 = $138;$isdigittmp7$i289 = $isdigittmp$i291;
      } else {
       $$0254 = $137;$$6 = $138;
       break L45;
      }
     }
    }
    $115 = ((($$4325)) + 2|0);
    $116 = load1($115);
    $117 = $116 << 24 >> 24;
    $isdigittmp274 = (($117) + -48)|0;
    $isdigit275 = ($isdigittmp274>>>0)<(10);
    if ($isdigit275) {
     $118 = ((($$4325)) + 3|0);
     $119 = load1($118);
     $120 = ($119<<24>>24)==(36);
     if ($120) {
      $121 = (($4) + ($isdigittmp274<<2)|0);
      store4($121,10);
      $122 = load1($115);
      $123 = $122 << 24 >> 24;
      $124 = (($123) + -48)|0;
      $125 = (($3) + ($124<<3)|0);
      $126 = load8($125);
      $127 = i64_trunc($126);
      $128 = ((($$4325)) + 4|0);
      $$0254 = $127;$$6 = $128;
      break;
     }
    }
    $129 = ($$3272|0)==(0);
    if (!($129)) {
     $$0 = -1;
     break L1;
    }
    if ($13) {
     $arglist_current2 = load4($2);
     $130 = $arglist_current2;
     $expanded12 = ((0) + 4|0);
     $expanded11 = $expanded12;
     $expanded10 = (($expanded11) - 1)|0;
     $131 = (($130) + ($expanded10))|0;
     $expanded16 = ((0) + 4|0);
     $expanded15 = $expanded16;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $132 = $131 & $expanded13;
     $133 = $132;
     $134 = load4($133);
     $arglist_next3 = ((($133)) + 4|0);
     store4($2,$arglist_next3);
     $$0254 = $134;$$6 = $115;
    } else {
     $$0254 = 0;$$6 = $115;
    }
   } else {
    $$0254 = -1;$$6 = $$4325;
   }
  } while(0);
  $$0252 = 0;$$7 = $$6;
  while(1) {
   $142 = load1($$7);
   $143 = $142 << 24 >> 24;
   $144 = (($143) + -65)|0;
   $145 = ($144>>>0)>(57);
   if ($145) {
    $$0 = -1;
    break L1;
   }
   $146 = ((($$7)) + 1|0);
   $147 = ((6439 + (($$0252*58)|0)|0) + ($144)|0);
   $148 = load1($147);
   $149 = $148&255;
   $150 = (($149) + -1)|0;
   $151 = ($150>>>0)<(8);
   if ($151) {
    $$0252 = $149;$$7 = $146;
   } else {
    break;
   }
  }
  $152 = ($148<<24>>24)==(0);
  if ($152) {
   $$0 = -1;
   break;
  }
  $153 = ($148<<24>>24)==(19);
  $154 = ($$0253|0)>(-1);
  do {
   if ($153) {
    if ($154) {
     $$0 = -1;
     break L1;
    } else {
     label = 51;
    }
   } else {
    if ($154) {
     $155 = (($4) + ($$0253<<2)|0);
     store4($155,$149);
     $156 = (($3) + ($$0253<<3)|0);
     $157 = load8($156);
     store8($9,$157);
     label = 51;
     break;
    }
    if (!($13)) {
     $$0 = 0;
     break L1;
    }
    _pop_arg_529($9,$149,$2);
   }
  } while(0);
  if ((label|0) == 51) {
   label = 0;
   if (!($13)) {
    $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
    continue;
   }
  }
  $158 = load1($$7);
  $159 = $158 << 24 >> 24;
  $160 = ($$0252|0)!=(0);
  $161 = $159 & 15;
  $162 = ($161|0)==(3);
  $or$cond280 = $160 & $162;
  $163 = $159 & -33;
  $$0235 = $or$cond280 ? $163 : $159;
  $164 = $$1263 & 8192;
  $165 = ($164|0)==(0);
  $166 = $$1263 & -65537;
  $$1263$ = $165 ? $$1263 : $166;
  L74: do {
   switch ($$0235|0) {
   case 110:  {
    $trunc = $$0252&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $167 = load4($9);
     store4($167,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 1:  {
     $168 = load4($9);
     store4($168,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 2:  {
     $169 = i64_sext($$1248);
     $170 = load4($9);
     store8($170,$169);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 3:  {
     $171 = $$1248&65535;
     $172 = load4($9);
     store2($172,$171);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 4:  {
     $173 = $$1248&255;
     $174 = load4($9);
     store1($174,$173);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 6:  {
     $175 = load4($9);
     store4($175,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 7:  {
     $176 = i64_sext($$1248);
     $177 = load4($9);
     store8($177,$176);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    default: {
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $178 = ($$0254>>>0)>(8);
    $179 = $178 ? $$0254 : 8;
    $180 = $$1263$ | 8;
    $$1236 = 120;$$1255 = $179;$$3265 = $180;
    label = 63;
    break;
   }
   case 88: case 120:  {
    $$1236 = $$0235;$$1255 = $$0254;$$3265 = $$1263$;
    label = 63;
    break;
   }
   case 111:  {
    $199 = load8($9);
    $200 = i64_eq($199,i64_const(0,0));
    if ($200) {
     $$0$lcssa$i300 = $14;
    } else {
     $$045$i = $199;$$06$i298 = $14;
     while(1) {
      $201 = i64_and($$045$i,i64_const(7,0));
      $202 = i64_or($201,i64_const(48,0));
      $203 = i64_trunc($202)&255;
      $204 = ((($$06$i298)) + -1|0);
      store1($204,$203);
      $205 = i64_lshr($$045$i,i64_const(3,0));
      $206 = i64_eq($205,i64_const(0,0));
      if ($206) {
       $$0$lcssa$i300 = $204;
       break;
      } else {
       $$045$i = $205;$$06$i298 = $204;
      }
     }
    }
    $207 = $$1263$ & 8;
    $208 = ($207|0)==(0);
    if ($208) {
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 6919;$$2256 = $$0254;$$4266 = $$1263$;
     label = 76;
    } else {
     $209 = $$0$lcssa$i300;
     $210 = (($15) - ($209))|0;
     $211 = ($$0254|0)>($210|0);
     $212 = (($210) + 1)|0;
     $$0254$ = $211 ? $$0254 : $212;
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 6919;$$2256 = $$0254$;$$4266 = $$1263$;
     label = 76;
    }
    break;
   }
   case 105: case 100:  {
    $213 = load8($9);
    $214 = i64_slt($213,i64_const(0,0));
    if ($214) {
     $215 = i64_sub(i64_const(0,0),$213);
     store8($9,$215);
     $$0232 = 1;$$0237 = 6919;$220 = $215;
     label = 75;
     break L74;
    }
    $216 = $$1263$ & 2048;
    $217 = ($216|0)==(0);
    if ($217) {
     $218 = $$1263$ & 1;
     $219 = ($218|0)==(0);
     $$ = $219 ? 6919 : (6921);
     $$0232 = $218;$$0237 = $$;$220 = $213;
     label = 75;
    } else {
     $$0232 = 1;$$0237 = (6920);$220 = $213;
     label = 75;
    }
    break;
   }
   case 117:  {
    $$pre456 = load8($9);
    $$0232 = 0;$$0237 = 6919;$220 = $$pre456;
    label = 75;
    break;
   }
   case 99:  {
    $233 = load8($9);
    $234 = i64_trunc($233)&255;
    store1($16,$234);
    $$2 = $16;$$2234 = 0;$$2239 = 6919;$$2251 = $14;$$5 = 1;$$6268 = $166;
    break;
   }
   case 109:  {
    $235 = (___errno_location()|0);
    $236 = load4($235);
    $237 = (_strerror($236)|0);
    $$1 = $237;
    label = 81;
    break;
   }
   case 115:  {
    $238 = load4($9);
    $239 = ($238|0)!=(0|0);
    $240 = $239 ? $238 : 6929;
    $$1 = $240;
    label = 81;
    break;
   }
   case 67:  {
    $247 = load8($9);
    $248 = i64_trunc($247);
    store4($11,$248);
    store4($17,0);
    store4($9,$11);
    $$4258458 = -1;$708 = $11;
    label = 85;
    break;
   }
   case 83:  {
    $$pre454 = load4($9);
    $249 = ($$0254|0)==(0);
    if ($249) {
     _pad($0,32,$$1260,0,$$1263$);
     $$0240$lcssa460 = 0;
     label = 96;
    } else {
     $$4258458 = $$0254;$708 = $$pre454;
     label = 85;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $274 = loadd($9);
    store4($6,0);
    $275 = i64_bc2i($274);
    $276 = i64_slt($275,i64_const(0,0));
    if ($276) {
     $277 = -$274;
     $$0471$i = $277;$$0520$i = 1;$$0522$i = 6936;
    } else {
     $278 = $$1263$ & 2048;
     $279 = ($278|0)==(0);
     $280 = $$1263$ & 1;
     if ($279) {
      $281 = ($280|0)==(0);
      $$$i = $281 ? (6937) : (6942);
      $$0471$i = $274;$$0520$i = $280;$$0522$i = $$$i;
     } else {
      $$0471$i = $274;$$0520$i = 1;$$0522$i = (6939);
     }
    }
    $282 = i64_bc2i($$0471$i);
    $283 = i64_and($282,i64_const(0,2146435072));
    $284 = i64_ult($283,i64_const(0,2146435072));
    do {
     if ($284) {
      $300 = (+_frexpl($$0471$i,$6));
      $301 = $300 * 2.0;
      $302 = $301 != 0.0;
      if ($302) {
       $303 = load4($6);
       $304 = (($303) + -1)|0;
       store4($6,$304);
      }
      $305 = $$0235 | 32;
      $306 = ($305|0)==(97);
      if ($306) {
       $307 = $$0235 & 32;
       $308 = ($307|0)==(0);
       $309 = ((($$0522$i)) + 9|0);
       $$0522$$i = $308 ? $$0522$i : $309;
       $310 = $$0520$i | 2;
       $311 = ($$0254>>>0)>(11);
       $312 = (12 - ($$0254))|0;
       $313 = ($312|0)==(0);
       $314 = $311 | $313;
       do {
        if ($314) {
         $$1472$i = $301;
        } else {
         $$0509592$i = 8.0;$$1508593$i = $312;
         while(1) {
          $315 = (($$1508593$i) + -1)|0;
          $316 = $$0509592$i * 16.0;
          $317 = ($315|0)==(0);
          if ($317) {
           break;
          } else {
           $$0509592$i = $316;$$1508593$i = $315;
          }
         }
         $318 = load1($$0522$$i);
         $319 = ($318<<24>>24)==(45);
         if ($319) {
          $320 = -$301;
          $321 = $320 - $316;
          $322 = $316 + $321;
          $323 = -$322;
          $$1472$i = $323;
          break;
         } else {
          $324 = $301 + $316;
          $325 = $324 - $316;
          $$1472$i = $325;
          break;
         }
        }
       } while(0);
       $326 = load4($6);
       $327 = ($326|0)<(0);
       $328 = (0 - ($326))|0;
       $329 = $327 ? $328 : $326;
       $330 = i64_sext($329);
       $331 = (_fmt_u($330,$20)|0);
       $332 = ($331|0)==($20|0);
       if ($332) {
        store1($21,48);
        $$0511$i = $21;
       } else {
        $$0511$i = $331;
       }
       $333 = $326 >> 31;
       $334 = $333 & 2;
       $335 = (($334) + 43)|0;
       $336 = $335&255;
       $337 = ((($$0511$i)) + -1|0);
       store1($337,$336);
       $338 = (($$0235) + 15)|0;
       $339 = $338&255;
       $340 = ((($$0511$i)) + -2|0);
       store1($340,$339);
       $notrhs$i = ($$0254|0)<(1);
       $341 = $$1263$ & 8;
       $342 = ($341|0)==(0);
       $$0524$i = $7;$$2473$i = $$1472$i;
       while(1) {
        $343 = (~~(($$2473$i)));
        $344 = (6903 + ($343)|0);
        $345 = load1($344);
        $346 = $345&255;
        $347 = $346 | $307;
        $348 = $347&255;
        $349 = ((($$0524$i)) + 1|0);
        store1($$0524$i,$348);
        $350 = (+($343|0));
        $351 = $$2473$i - $350;
        $352 = $351 * 16.0;
        $353 = $349;
        $354 = (($353) - ($18))|0;
        $355 = ($354|0)==(1);
        do {
         if ($355) {
          $notlhs$i = $352 == 0.0;
          $or$cond3$not$i = $notrhs$i & $notlhs$i;
          $or$cond$i = $342 & $or$cond3$not$i;
          if ($or$cond$i) {
           $$1525$i = $349;
           break;
          }
          $356 = ((($$0524$i)) + 2|0);
          store1($349,46);
          $$1525$i = $356;
         } else {
          $$1525$i = $349;
         }
        } while(0);
        $357 = $352 != 0.0;
        if ($357) {
         $$0524$i = $$1525$i;$$2473$i = $352;
        } else {
         break;
        }
       }
       $358 = ($$0254|0)!=(0);
       $$pre700$i = $$1525$i;
       $359 = (($24) + ($$pre700$i))|0;
       $360 = ($359|0)<($$0254|0);
       $or$cond412 = $358 & $360;
       $361 = $340;
       $362 = (($25) + ($$0254))|0;
       $363 = (($362) - ($361))|0;
       $364 = (($23) - ($361))|0;
       $365 = (($364) + ($$pre700$i))|0;
       $$0526$i = $or$cond412 ? $363 : $365;
       $366 = (($$0526$i) + ($310))|0;
       _pad($0,32,$$1260,$366,$$1263$);
       $367 = load4($0);
       $368 = $367 & 32;
       $369 = ($368|0)==(0);
       if ($369) {
        (___fwritex($$0522$$i,$310,$0)|0);
       }
       $370 = $$1263$ ^ 65536;
       _pad($0,48,$$1260,$366,$370);
       $371 = (($$pre700$i) - ($18))|0;
       $372 = load4($0);
       $373 = $372 & 32;
       $374 = ($373|0)==(0);
       if ($374) {
        (___fwritex($7,$371,$0)|0);
       }
       $375 = (($22) - ($361))|0;
       $sum = (($371) + ($375))|0;
       $376 = (($$0526$i) - ($sum))|0;
       _pad($0,48,$376,0,0);
       $377 = load4($0);
       $378 = $377 & 32;
       $379 = ($378|0)==(0);
       if ($379) {
        (___fwritex($340,$375,$0)|0);
       }
       $380 = $$1263$ ^ 8192;
       _pad($0,32,$$1260,$366,$380);
       $381 = ($366|0)<($$1260|0);
       $$537$i = $381 ? $$1260 : $366;
       $$0470$i = $$537$i;
       break;
      }
      $382 = ($$0254|0)<(0);
      $$538$i = $382 ? 6 : $$0254;
      if ($302) {
       $383 = $301 * 268435456.0;
       $384 = load4($6);
       $385 = (($384) + -28)|0;
       store4($6,$385);
       $$3$i = $383;$$pr$i = $385;
      } else {
       $$pre697$i = load4($6);
       $$3$i = $301;$$pr$i = $$pre697$i;
      }
      $386 = ($$pr$i|0)<(0);
      $$554$i = $386 ? $5 : $26;
      $$0498$i = $$554$i;$$4$i = $$3$i;
      while(1) {
       $387 = (~~(($$4$i))>>>0);
       store4($$0498$i,$387);
       $388 = ((($$0498$i)) + 4|0);
       $389 = (+($387>>>0));
       $390 = $$4$i - $389;
       $391 = $390 * 1.0E+9;
       $392 = $391 != 0.0;
       if ($392) {
        $$0498$i = $388;$$4$i = $391;
       } else {
        break;
       }
      }
      $393 = ($$pr$i|0)>(0);
      if ($393) {
       $$1482671$i = $$554$i;$$1499670$i = $388;$394 = $$pr$i;
       while(1) {
        $395 = ($394|0)>(29);
        $396 = $395 ? 29 : $394;
        $$0488663$i = ((($$1499670$i)) + -4|0);
        $397 = ($$0488663$i>>>0)<($$1482671$i>>>0);
        do {
         if ($397) {
          $$2483$ph$i = $$1482671$i;
         } else {
          $398 = i64_zext($396>>>0);
          $$0488665$i = $$0488663$i;$$0497664$i = 0;
          while(1) {
           $399 = load4($$0488665$i);
           $400 = i64_zext($399>>>0);
           $401 = i64_shl($400,$398);
           $402 = i64_zext($$0497664$i>>>0);
           $403 = i64_add($401,$402);
           $404 = i64_urem($403,i64_const(1000000000,0));
           $405 = i64_trunc($404);
           store4($$0488665$i,$405);
           $406 = i64_udiv($403,i64_const(1000000000,0));
           $407 = i64_trunc($406);
           $$0488$i = ((($$0488665$i)) + -4|0);
           $408 = ($$0488$i>>>0)<($$1482671$i>>>0);
           if ($408) {
            break;
           } else {
            $$0488665$i = $$0488$i;$$0497664$i = $407;
           }
          }
          $409 = ($407|0)==(0);
          if ($409) {
           $$2483$ph$i = $$1482671$i;
           break;
          }
          $410 = ((($$1482671$i)) + -4|0);
          store4($410,$407);
          $$2483$ph$i = $410;
         }
        } while(0);
        $$2500$i = $$1499670$i;
        while(1) {
         $411 = ($$2500$i>>>0)>($$2483$ph$i>>>0);
         if (!($411)) {
          break;
         }
         $412 = ((($$2500$i)) + -4|0);
         $413 = load4($412);
         $414 = ($413|0)==(0);
         if ($414) {
          $$2500$i = $412;
         } else {
          break;
         }
        }
        $415 = load4($6);
        $416 = (($415) - ($396))|0;
        store4($6,$416);
        $417 = ($416|0)>(0);
        if ($417) {
         $$1482671$i = $$2483$ph$i;$$1499670$i = $$2500$i;$394 = $416;
        } else {
         $$1482$lcssa$i = $$2483$ph$i;$$1499$lcssa$i = $$2500$i;$$pr571$i = $416;
         break;
        }
       }
      } else {
       $$1482$lcssa$i = $$554$i;$$1499$lcssa$i = $388;$$pr571$i = $$pr$i;
      }
      $418 = ($$pr571$i|0)<(0);
      if ($418) {
       $419 = (($$538$i) + 25)|0;
       $420 = (($419|0) / 9)&-1;
       $421 = (($420) + 1)|0;
       $422 = ($305|0)==(102);
       $$3484658$i = $$1482$lcssa$i;$$3501657$i = $$1499$lcssa$i;$424 = $$pr571$i;
       while(1) {
        $423 = (0 - ($424))|0;
        $425 = ($423|0)>(9);
        $426 = $425 ? 9 : $423;
        $427 = ($$3484658$i>>>0)<($$3501657$i>>>0);
        do {
         if ($427) {
          $431 = 1 << $426;
          $432 = (($431) + -1)|0;
          $433 = 1000000000 >>> $426;
          $$0487652$i = 0;$$1489651$i = $$3484658$i;
          while(1) {
           $434 = load4($$1489651$i);
           $435 = $434 & $432;
           $436 = $434 >>> $426;
           $437 = (($436) + ($$0487652$i))|0;
           store4($$1489651$i,$437);
           $438 = Math_imul($435, $433)|0;
           $439 = ((($$1489651$i)) + 4|0);
           $440 = ($439>>>0)<($$3501657$i>>>0);
           if ($440) {
            $$0487652$i = $438;$$1489651$i = $439;
           } else {
            break;
           }
          }
          $441 = load4($$3484658$i);
          $442 = ($441|0)==(0);
          $443 = ((($$3484658$i)) + 4|0);
          $$$3484$i = $442 ? $443 : $$3484658$i;
          $444 = ($438|0)==(0);
          if ($444) {
           $$$3484706$i = $$$3484$i;$$4502$i = $$3501657$i;
           break;
          }
          $445 = ((($$3501657$i)) + 4|0);
          store4($$3501657$i,$438);
          $$$3484706$i = $$$3484$i;$$4502$i = $445;
         } else {
          $428 = load4($$3484658$i);
          $429 = ($428|0)==(0);
          $430 = ((($$3484658$i)) + 4|0);
          $$$3484705$i = $429 ? $430 : $$3484658$i;
          $$$3484706$i = $$$3484705$i;$$4502$i = $$3501657$i;
         }
        } while(0);
        $446 = $422 ? $$554$i : $$$3484706$i;
        $447 = $$4502$i;
        $448 = $446;
        $449 = (($447) - ($448))|0;
        $450 = $449 >> 2;
        $451 = ($450|0)>($421|0);
        $452 = (($446) + ($421<<2)|0);
        $$$4502$i = $451 ? $452 : $$4502$i;
        $453 = load4($6);
        $454 = (($453) + ($426))|0;
        store4($6,$454);
        $455 = ($454|0)<(0);
        if ($455) {
         $$3484658$i = $$$3484706$i;$$3501657$i = $$$4502$i;$424 = $454;
        } else {
         $$3484$lcssa$i = $$$3484706$i;$$3501$lcssa$i = $$$4502$i;
         break;
        }
       }
      } else {
       $$3484$lcssa$i = $$1482$lcssa$i;$$3501$lcssa$i = $$1499$lcssa$i;
      }
      $456 = ($$3484$lcssa$i>>>0)<($$3501$lcssa$i>>>0);
      $457 = $$554$i;
      do {
       if ($456) {
        $458 = $$3484$lcssa$i;
        $459 = (($457) - ($458))|0;
        $460 = $459 >> 2;
        $461 = ($460*9)|0;
        $462 = load4($$3484$lcssa$i);
        $463 = ($462>>>0)<(10);
        if ($463) {
         $$1515$i = $461;
         break;
        } else {
         $$0514647$i = $461;$$0531646$i = 10;
        }
        while(1) {
         $464 = ($$0531646$i*10)|0;
         $465 = (($$0514647$i) + 1)|0;
         $466 = ($462>>>0)<($464>>>0);
         if ($466) {
          $$1515$i = $465;
          break;
         } else {
          $$0514647$i = $465;$$0531646$i = $464;
         }
        }
       } else {
        $$1515$i = 0;
       }
      } while(0);
      $467 = ($305|0)!=(102);
      $468 = $467 ? $$1515$i : 0;
      $469 = (($$538$i) - ($468))|0;
      $470 = ($305|0)==(103);
      $471 = ($$538$i|0)!=(0);
      $472 = $471 & $470;
      $$neg$i = $472 << 31 >> 31;
      $473 = (($469) + ($$neg$i))|0;
      $474 = $$3501$lcssa$i;
      $475 = (($474) - ($457))|0;
      $476 = $475 >> 2;
      $477 = ($476*9)|0;
      $478 = (($477) + -9)|0;
      $479 = ($473|0)<($478|0);
      if ($479) {
       $480 = ((($$554$i)) + 4|0);
       $481 = (($473) + 9216)|0;
       $482 = (($481|0) / 9)&-1;
       $483 = (($482) + -1024)|0;
       $484 = (($480) + ($483<<2)|0);
       $485 = (($481|0) % 9)&-1;
       $$0528639$i = (($485) + 1)|0;
       $486 = ($$0528639$i|0)<(9);
       if ($486) {
        $$0528641$i = $$0528639$i;$$1532640$i = 10;
        while(1) {
         $487 = ($$1532640$i*10)|0;
         $$0528$i = (($$0528641$i) + 1)|0;
         $exitcond$i = ($$0528$i|0)==(9);
         if ($exitcond$i) {
          $$1532$lcssa$i = $487;
          break;
         } else {
          $$0528641$i = $$0528$i;$$1532640$i = $487;
         }
        }
       } else {
        $$1532$lcssa$i = 10;
       }
       $488 = load4($484);
       $489 = (($488>>>0) % ($$1532$lcssa$i>>>0))&-1;
       $490 = ($489|0)==(0);
       $491 = ((($484)) + 4|0);
       $492 = ($491|0)==($$3501$lcssa$i|0);
       $or$cond540$i = $492 & $490;
       do {
        if ($or$cond540$i) {
         $$4492$i = $484;$$4518$i = $$1515$i;$$8$i = $$3484$lcssa$i;
        } else {
         $493 = (($488>>>0) / ($$1532$lcssa$i>>>0))&-1;
         $494 = $493 & 1;
         $495 = ($494|0)==(0);
         $$541$i = $495 ? 9007199254740992.0 : 9007199254740994.0;
         $496 = (($$1532$lcssa$i|0) / 2)&-1;
         $497 = ($489>>>0)<($496>>>0);
         if ($497) {
          $$0466$i = 0.5;
         } else {
          $498 = ($489|0)==($496|0);
          $or$cond543$i = $492 & $498;
          $$557$i = $or$cond543$i ? 1.0 : 1.5;
          $$0466$i = $$557$i;
         }
         $499 = ($$0520$i|0)==(0);
         do {
          if ($499) {
           $$1467$i = $$0466$i;$$1469$i = $$541$i;
          } else {
           $500 = load1($$0522$i);
           $501 = ($500<<24>>24)==(45);
           if (!($501)) {
            $$1467$i = $$0466$i;$$1469$i = $$541$i;
            break;
           }
           $502 = -$$541$i;
           $503 = -$$0466$i;
           $$1467$i = $503;$$1469$i = $502;
          }
         } while(0);
         $504 = (($488) - ($489))|0;
         store4($484,$504);
         $505 = $$1469$i + $$1467$i;
         $506 = $505 != $$1469$i;
         if (!($506)) {
          $$4492$i = $484;$$4518$i = $$1515$i;$$8$i = $$3484$lcssa$i;
          break;
         }
         $507 = (($504) + ($$1532$lcssa$i))|0;
         store4($484,$507);
         $508 = ($507>>>0)>(999999999);
         if ($508) {
          $$2490632$i = $484;$$5486633$i = $$3484$lcssa$i;
          while(1) {
           $509 = ((($$2490632$i)) + -4|0);
           store4($$2490632$i,0);
           $510 = ($509>>>0)<($$5486633$i>>>0);
           if ($510) {
            $511 = ((($$5486633$i)) + -4|0);
            store4($511,0);
            $$6$i = $511;
           } else {
            $$6$i = $$5486633$i;
           }
           $512 = load4($509);
           $513 = (($512) + 1)|0;
           store4($509,$513);
           $514 = ($513>>>0)>(999999999);
           if ($514) {
            $$2490632$i = $509;$$5486633$i = $$6$i;
           } else {
            $$2490$lcssa$i = $509;$$5486$lcssa$i = $$6$i;
            break;
           }
          }
         } else {
          $$2490$lcssa$i = $484;$$5486$lcssa$i = $$3484$lcssa$i;
         }
         $515 = $$5486$lcssa$i;
         $516 = (($457) - ($515))|0;
         $517 = $516 >> 2;
         $518 = ($517*9)|0;
         $519 = load4($$5486$lcssa$i);
         $520 = ($519>>>0)<(10);
         if ($520) {
          $$4492$i = $$2490$lcssa$i;$$4518$i = $518;$$8$i = $$5486$lcssa$i;
          break;
         } else {
          $$2516628$i = $518;$$2533627$i = 10;
         }
         while(1) {
          $521 = ($$2533627$i*10)|0;
          $522 = (($$2516628$i) + 1)|0;
          $523 = ($519>>>0)<($521>>>0);
          if ($523) {
           $$4492$i = $$2490$lcssa$i;$$4518$i = $522;$$8$i = $$5486$lcssa$i;
           break;
          } else {
           $$2516628$i = $522;$$2533627$i = $521;
          }
         }
        }
       } while(0);
       $524 = ((($$4492$i)) + 4|0);
       $525 = ($$3501$lcssa$i>>>0)>($524>>>0);
       $$$3501$i = $525 ? $524 : $$3501$lcssa$i;
       $$5519$ph$i = $$4518$i;$$7505$ph$i = $$$3501$i;$$9$ph$i = $$8$i;
      } else {
       $$5519$ph$i = $$1515$i;$$7505$ph$i = $$3501$lcssa$i;$$9$ph$i = $$3484$lcssa$i;
      }
      $526 = (0 - ($$5519$ph$i))|0;
      $$7505$i = $$7505$ph$i;
      while(1) {
       $527 = ($$7505$i>>>0)>($$9$ph$i>>>0);
       if (!($527)) {
        $$lcssa683$i = 0;
        break;
       }
       $528 = ((($$7505$i)) + -4|0);
       $529 = load4($528);
       $530 = ($529|0)==(0);
       if ($530) {
        $$7505$i = $528;
       } else {
        $$lcssa683$i = 1;
        break;
       }
      }
      do {
       if ($470) {
        $531 = $471&1;
        $532 = $531 ^ 1;
        $$538$$i = (($532) + ($$538$i))|0;
        $533 = ($$538$$i|0)>($$5519$ph$i|0);
        $534 = ($$5519$ph$i|0)>(-5);
        $or$cond6$i = $533 & $534;
        if ($or$cond6$i) {
         $535 = (($$0235) + -1)|0;
         $$neg572$i = (($$538$$i) + -1)|0;
         $536 = (($$neg572$i) - ($$5519$ph$i))|0;
         $$0479$i = $535;$$2476$i = $536;
        } else {
         $537 = (($$0235) + -2)|0;
         $538 = (($$538$$i) + -1)|0;
         $$0479$i = $537;$$2476$i = $538;
        }
        $539 = $$1263$ & 8;
        $540 = ($539|0)==(0);
        if (!($540)) {
         $$1480$i = $$0479$i;$$3477$i = $$2476$i;$$pre$phi704$iZ2D = $539;
         break;
        }
        do {
         if ($$lcssa683$i) {
          $541 = ((($$7505$i)) + -4|0);
          $542 = load4($541);
          $543 = ($542|0)==(0);
          if ($543) {
           $$2530$i = 9;
           break;
          }
          $544 = (($542>>>0) % 10)&-1;
          $545 = ($544|0)==(0);
          if ($545) {
           $$1529624$i = 0;$$3534623$i = 10;
          } else {
           $$2530$i = 0;
           break;
          }
          while(1) {
           $546 = ($$3534623$i*10)|0;
           $547 = (($$1529624$i) + 1)|0;
           $548 = (($542>>>0) % ($546>>>0))&-1;
           $549 = ($548|0)==(0);
           if ($549) {
            $$1529624$i = $547;$$3534623$i = $546;
           } else {
            $$2530$i = $547;
            break;
           }
          }
         } else {
          $$2530$i = 9;
         }
        } while(0);
        $550 = $$0479$i | 32;
        $551 = ($550|0)==(102);
        $552 = $$7505$i;
        $553 = (($552) - ($457))|0;
        $554 = $553 >> 2;
        $555 = ($554*9)|0;
        $556 = (($555) + -9)|0;
        if ($551) {
         $557 = (($556) - ($$2530$i))|0;
         $558 = ($557|0)<(0);
         $$544$i = $558 ? 0 : $557;
         $559 = ($$2476$i|0)<($$544$i|0);
         $$2476$$545$i = $559 ? $$2476$i : $$544$i;
         $$1480$i = $$0479$i;$$3477$i = $$2476$$545$i;$$pre$phi704$iZ2D = 0;
         break;
        } else {
         $560 = (($556) + ($$5519$ph$i))|0;
         $561 = (($560) - ($$2530$i))|0;
         $562 = ($561|0)<(0);
         $$546$i = $562 ? 0 : $561;
         $563 = ($$2476$i|0)<($$546$i|0);
         $$2476$$547$i = $563 ? $$2476$i : $$546$i;
         $$1480$i = $$0479$i;$$3477$i = $$2476$$547$i;$$pre$phi704$iZ2D = 0;
         break;
        }
       } else {
        $$pre703$i = $$1263$ & 8;
        $$1480$i = $$0235;$$3477$i = $$538$i;$$pre$phi704$iZ2D = $$pre703$i;
       }
      } while(0);
      $564 = $$3477$i | $$pre$phi704$iZ2D;
      $565 = ($564|0)!=(0);
      $566 = $565&1;
      $567 = $$1480$i | 32;
      $568 = ($567|0)==(102);
      if ($568) {
       $569 = ($$5519$ph$i|0)>(0);
       $570 = $569 ? $$5519$ph$i : 0;
       $$2513$i = 0;$$pn$i = $570;
      } else {
       $571 = ($$5519$ph$i|0)<(0);
       $572 = $571 ? $526 : $$5519$ph$i;
       $573 = i64_sext($572);
       $574 = (_fmt_u($573,$20)|0);
       $575 = $574;
       $576 = (($22) - ($575))|0;
       $577 = ($576|0)<(2);
       if ($577) {
        $$1512617$i = $574;
        while(1) {
         $578 = ((($$1512617$i)) + -1|0);
         store1($578,48);
         $579 = $578;
         $580 = (($22) - ($579))|0;
         $581 = ($580|0)<(2);
         if ($581) {
          $$1512617$i = $578;
         } else {
          $$1512$lcssa$i = $578;
          break;
         }
        }
       } else {
        $$1512$lcssa$i = $574;
       }
       $582 = $$5519$ph$i >> 31;
       $583 = $582 & 2;
       $584 = (($583) + 43)|0;
       $585 = $584&255;
       $586 = ((($$1512$lcssa$i)) + -1|0);
       store1($586,$585);
       $587 = $$1480$i&255;
       $588 = ((($$1512$lcssa$i)) + -2|0);
       store1($588,$587);
       $589 = $588;
       $590 = (($22) - ($589))|0;
       $$2513$i = $588;$$pn$i = $590;
      }
      $591 = (($$0520$i) + 1)|0;
      $592 = (($591) + ($$3477$i))|0;
      $$1527$i = (($592) + ($566))|0;
      $593 = (($$1527$i) + ($$pn$i))|0;
      _pad($0,32,$$1260,$593,$$1263$);
      $594 = load4($0);
      $595 = $594 & 32;
      $596 = ($595|0)==(0);
      if ($596) {
       (___fwritex($$0522$i,$$0520$i,$0)|0);
      }
      $597 = $$1263$ ^ 65536;
      _pad($0,48,$$1260,$593,$597);
      do {
       if ($568) {
        $598 = ($$9$ph$i>>>0)>($$554$i>>>0);
        $$0496$$9$i = $598 ? $$554$i : $$9$ph$i;
        $$5493606$i = $$0496$$9$i;
        while(1) {
         $599 = load4($$5493606$i);
         $600 = i64_zext($599>>>0);
         $601 = (_fmt_u($600,$27)|0);
         $602 = ($$5493606$i|0)==($$0496$$9$i|0);
         do {
          if ($602) {
           $608 = ($601|0)==($27|0);
           if (!($608)) {
            $$1465$i = $601;
            break;
           }
           store1($29,48);
           $$1465$i = $29;
          } else {
           $603 = ($601>>>0)>($7>>>0);
           if (!($603)) {
            $$1465$i = $601;
            break;
           }
           $604 = $601;
           $605 = (($604) - ($18))|0;
           _memset(($7|0),48,($605|0))|0;
           $$0464603$i = $601;
           while(1) {
            $606 = ((($$0464603$i)) + -1|0);
            $607 = ($606>>>0)>($7>>>0);
            if ($607) {
             $$0464603$i = $606;
            } else {
             $$1465$i = $606;
             break;
            }
           }
          }
         } while(0);
         $609 = load4($0);
         $610 = $609 & 32;
         $611 = ($610|0)==(0);
         if ($611) {
          $612 = $$1465$i;
          $613 = (($28) - ($612))|0;
          (___fwritex($$1465$i,$613,$0)|0);
         }
         $614 = ((($$5493606$i)) + 4|0);
         $615 = ($614>>>0)>($$554$i>>>0);
         if ($615) {
          break;
         } else {
          $$5493606$i = $614;
         }
        }
        $616 = ($564|0)==(0);
        do {
         if (!($616)) {
          $617 = load4($0);
          $618 = $617 & 32;
          $619 = ($618|0)==(0);
          if (!($619)) {
           break;
          }
          (___fwritex(6971,1,$0)|0);
         }
        } while(0);
        $620 = ($614>>>0)<($$7505$i>>>0);
        $621 = ($$3477$i|0)>(0);
        $622 = $621 & $620;
        if ($622) {
         $$4478600$i = $$3477$i;$$6494599$i = $614;
         while(1) {
          $623 = load4($$6494599$i);
          $624 = i64_zext($623>>>0);
          $625 = (_fmt_u($624,$27)|0);
          $626 = ($625>>>0)>($7>>>0);
          if ($626) {
           $627 = $625;
           $628 = (($627) - ($18))|0;
           _memset(($7|0),48,($628|0))|0;
           $$0463594$i = $625;
           while(1) {
            $629 = ((($$0463594$i)) + -1|0);
            $630 = ($629>>>0)>($7>>>0);
            if ($630) {
             $$0463594$i = $629;
            } else {
             $$0463$lcssa$i = $629;
             break;
            }
           }
          } else {
           $$0463$lcssa$i = $625;
          }
          $631 = load4($0);
          $632 = $631 & 32;
          $633 = ($632|0)==(0);
          if ($633) {
           $634 = ($$4478600$i|0)>(9);
           $635 = $634 ? 9 : $$4478600$i;
           (___fwritex($$0463$lcssa$i,$635,$0)|0);
          }
          $636 = ((($$6494599$i)) + 4|0);
          $637 = (($$4478600$i) + -9)|0;
          $638 = ($636>>>0)<($$7505$i>>>0);
          $639 = ($$4478600$i|0)>(9);
          $640 = $639 & $638;
          if ($640) {
           $$4478600$i = $637;$$6494599$i = $636;
          } else {
           $$4478$lcssa$i = $637;
           break;
          }
         }
        } else {
         $$4478$lcssa$i = $$3477$i;
        }
        $641 = (($$4478$lcssa$i) + 9)|0;
        _pad($0,48,$641,9,0);
       } else {
        $642 = ((($$9$ph$i)) + 4|0);
        $$7505$$i = $$lcssa683$i ? $$7505$i : $642;
        $643 = ($$3477$i|0)>(-1);
        if ($643) {
         $644 = ($$pre$phi704$iZ2D|0)==(0);
         $$5611$i = $$3477$i;$$7495610$i = $$9$ph$i;
         while(1) {
          $645 = load4($$7495610$i);
          $646 = i64_zext($645>>>0);
          $647 = (_fmt_u($646,$27)|0);
          $648 = ($647|0)==($27|0);
          if ($648) {
           store1($29,48);
           $$0$i = $29;
          } else {
           $$0$i = $647;
          }
          $649 = ($$7495610$i|0)==($$9$ph$i|0);
          do {
           if ($649) {
            $653 = ((($$0$i)) + 1|0);
            $654 = load4($0);
            $655 = $654 & 32;
            $656 = ($655|0)==(0);
            if ($656) {
             (___fwritex($$0$i,1,$0)|0);
            }
            $657 = ($$5611$i|0)<(1);
            $or$cond552$i = $644 & $657;
            if ($or$cond552$i) {
             $$2$i = $653;
             break;
            }
            $658 = load4($0);
            $659 = $658 & 32;
            $660 = ($659|0)==(0);
            if (!($660)) {
             $$2$i = $653;
             break;
            }
            (___fwritex(6971,1,$0)|0);
            $$2$i = $653;
           } else {
            $650 = ($$0$i>>>0)>($7>>>0);
            if (!($650)) {
             $$2$i = $$0$i;
             break;
            }
            $scevgep694$i = (($$0$i) + ($19)|0);
            $scevgep694695$i = $scevgep694$i;
            _memset(($7|0),48,($scevgep694695$i|0))|0;
            $$1607$i = $$0$i;
            while(1) {
             $651 = ((($$1607$i)) + -1|0);
             $652 = ($651>>>0)>($7>>>0);
             if ($652) {
              $$1607$i = $651;
             } else {
              $$2$i = $651;
              break;
             }
            }
           }
          } while(0);
          $661 = $$2$i;
          $662 = (($28) - ($661))|0;
          $663 = load4($0);
          $664 = $663 & 32;
          $665 = ($664|0)==(0);
          if ($665) {
           $666 = ($$5611$i|0)>($662|0);
           $667 = $666 ? $662 : $$5611$i;
           (___fwritex($$2$i,$667,$0)|0);
          }
          $668 = (($$5611$i) - ($662))|0;
          $669 = ((($$7495610$i)) + 4|0);
          $670 = ($669>>>0)<($$7505$$i>>>0);
          $671 = ($668|0)>(-1);
          $672 = $670 & $671;
          if ($672) {
           $$5611$i = $668;$$7495610$i = $669;
          } else {
           $$5$lcssa$i = $668;
           break;
          }
         }
        } else {
         $$5$lcssa$i = $$3477$i;
        }
        $673 = (($$5$lcssa$i) + 18)|0;
        _pad($0,48,$673,18,0);
        $674 = load4($0);
        $675 = $674 & 32;
        $676 = ($675|0)==(0);
        if (!($676)) {
         break;
        }
        $677 = $$2513$i;
        $678 = (($22) - ($677))|0;
        (___fwritex($$2513$i,$678,$0)|0);
       }
      } while(0);
      $679 = $$1263$ ^ 8192;
      _pad($0,32,$$1260,$593,$679);
      $680 = ($593|0)<($$1260|0);
      $$553$i = $680 ? $$1260 : $593;
      $$0470$i = $$553$i;
     } else {
      $285 = $$0235 & 32;
      $286 = ($285|0)!=(0);
      $287 = $286 ? 6955 : 6959;
      $288 = ($$0471$i != $$0471$i) | (0.0 != 0.0);
      $289 = $286 ? 6963 : 6967;
      $$1521$i = $288 ? 0 : $$0520$i;
      $$0510$i = $288 ? $289 : $287;
      $290 = (($$1521$i) + 3)|0;
      _pad($0,32,$$1260,$290,$166);
      $291 = load4($0);
      $292 = $291 & 32;
      $293 = ($292|0)==(0);
      if ($293) {
       (___fwritex($$0522$i,$$1521$i,$0)|0);
       $$pre$i = load4($0);
       $295 = $$pre$i;
      } else {
       $295 = $291;
      }
      $294 = $295 & 32;
      $296 = ($294|0)==(0);
      if ($296) {
       (___fwritex($$0510$i,3,$0)|0);
      }
      $297 = $$1263$ ^ 8192;
      _pad($0,32,$$1260,$290,$297);
      $298 = ($290|0)<($$1260|0);
      $299 = $298 ? $$1260 : $290;
      $$0470$i = $299;
     }
    } while(0);
    $$0243 = $$0470$i;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
    continue L1;
    break;
   }
   default: {
    $$2 = $$0321;$$2234 = 0;$$2239 = 6919;$$2251 = $14;$$5 = $$0254;$$6268 = $$1263$;
   }
   }
  } while(0);
  L310: do {
   if ((label|0) == 63) {
    label = 0;
    $181 = load8($9);
    $182 = $$1236 & 32;
    $183 = i64_eq($181,i64_const(0,0));
    if ($183) {
     $$05$lcssa$i = $14;$194 = i64_const(0,0);
    } else {
     $$056$i = $14;$$07$i = $181;
     while(1) {
      $$0$tr$i = i64_trunc($$07$i);
      $184 = $$0$tr$i & 15;
      $185 = (6903 + ($184)|0);
      $186 = load1($185);
      $187 = $186&255;
      $188 = $187 | $182;
      $189 = $188&255;
      $190 = ((($$056$i)) + -1|0);
      store1($190,$189);
      $191 = i64_lshr($$07$i,i64_const(4,0));
      $192 = i64_eq($191,i64_const(0,0));
      if ($192) {
       break;
      } else {
       $$056$i = $190;$$07$i = $191;
      }
     }
     $$pre457 = load8($9);
     $$05$lcssa$i = $190;$194 = $$pre457;
    }
    $193 = i64_eq($194,i64_const(0,0));
    $195 = $$3265 & 8;
    $196 = ($195|0)==(0);
    $or$cond282 = $196 | $193;
    $197 = $$1236 >> 4;
    $198 = (6919 + ($197)|0);
    $$332 = $or$cond282 ? 6919 : $198;
    $$333 = $or$cond282 ? 0 : 2;
    $$0228 = $$05$lcssa$i;$$1233 = $$333;$$1238 = $$332;$$2256 = $$1255;$$4266 = $$3265;
    label = 76;
   }
   else if ((label|0) == 75) {
    label = 0;
    $221 = (_fmt_u($220,$14)|0);
    $$0228 = $221;$$1233 = $$0232;$$1238 = $$0237;$$2256 = $$0254;$$4266 = $$1263$;
    label = 76;
   }
   else if ((label|0) == 81) {
    label = 0;
    $241 = (_memchr($$1,0,$$0254)|0);
    $242 = ($241|0)==(0|0);
    $243 = $241;
    $244 = $$1;
    $245 = (($243) - ($244))|0;
    $246 = (($$1) + ($$0254)|0);
    $$3257 = $242 ? $$0254 : $245;
    $$1250 = $242 ? $246 : $241;
    $$2 = $$1;$$2234 = 0;$$2239 = 6919;$$2251 = $$1250;$$5 = $$3257;$$6268 = $166;
   }
   else if ((label|0) == 85) {
    label = 0;
    $$0229396 = $708;$$0240395 = 0;$$1244394 = 0;
    while(1) {
     $250 = load4($$0229396);
     $251 = ($250|0)==(0);
     if ($251) {
      $$0240$lcssa = $$0240395;$$2245 = $$1244394;
      break;
     }
     $252 = (_wctomb($12,$250)|0);
     $253 = ($252|0)<(0);
     $254 = (($$4258458) - ($$0240395))|0;
     $255 = ($252>>>0)>($254>>>0);
     $or$cond285 = $253 | $255;
     if ($or$cond285) {
      $$0240$lcssa = $$0240395;$$2245 = $252;
      break;
     }
     $256 = ((($$0229396)) + 4|0);
     $257 = (($252) + ($$0240395))|0;
     $258 = ($$4258458>>>0)>($257>>>0);
     if ($258) {
      $$0229396 = $256;$$0240395 = $257;$$1244394 = $252;
     } else {
      $$0240$lcssa = $257;$$2245 = $252;
      break;
     }
    }
    $259 = ($$2245|0)<(0);
    if ($259) {
     $$0 = -1;
     break L1;
    }
    _pad($0,32,$$1260,$$0240$lcssa,$$1263$);
    $260 = ($$0240$lcssa|0)==(0);
    if ($260) {
     $$0240$lcssa460 = 0;
     label = 96;
    } else {
     $$1230407 = $708;$$1241406 = 0;
     while(1) {
      $261 = load4($$1230407);
      $262 = ($261|0)==(0);
      if ($262) {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break L310;
      }
      $263 = ((($$1230407)) + 4|0);
      $264 = (_wctomb($12,$261)|0);
      $265 = (($264) + ($$1241406))|0;
      $266 = ($265|0)>($$0240$lcssa|0);
      if ($266) {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break L310;
      }
      $267 = load4($0);
      $268 = $267 & 32;
      $269 = ($268|0)==(0);
      if ($269) {
       (___fwritex($12,$264,$0)|0);
      }
      $270 = ($265>>>0)<($$0240$lcssa>>>0);
      if ($270) {
       $$1230407 = $263;$$1241406 = $265;
      } else {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 96) {
   label = 0;
   $271 = $$1263$ ^ 8192;
   _pad($0,32,$$1260,$$0240$lcssa460,$271);
   $272 = ($$1260|0)>($$0240$lcssa460|0);
   $273 = $272 ? $$1260 : $$0240$lcssa460;
   $$0243 = $273;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
   continue;
  }
  if ((label|0) == 76) {
   label = 0;
   $222 = ($$2256|0)>(-1);
   $223 = $$4266 & -65537;
   $$$4266 = $222 ? $223 : $$4266;
   $224 = load8($9);
   $225 = i64_ne($224,i64_const(0,0));
   $226 = ($$2256|0)!=(0);
   $or$cond = $226 | $225;
   if ($or$cond) {
    $227 = $$0228;
    $228 = (($15) - ($227))|0;
    $229 = $225&1;
    $230 = $229 ^ 1;
    $231 = (($230) + ($228))|0;
    $232 = ($$2256|0)>($231|0);
    $$2256$ = $232 ? $$2256 : $231;
    $$2 = $$0228;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $14;$$5 = $$2256$;$$6268 = $$$4266;
   } else {
    $$2 = $14;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $14;$$5 = 0;$$6268 = $$$4266;
   }
  }
  $681 = $$2251;
  $682 = $$2;
  $683 = (($681) - ($682))|0;
  $684 = ($$5|0)<($683|0);
  $$$5 = $684 ? $683 : $$5;
  $685 = (($$$5) + ($$2234))|0;
  $686 = ($$1260|0)<($685|0);
  $$2261 = $686 ? $685 : $$1260;
  _pad($0,32,$$2261,$685,$$6268);
  $687 = load4($0);
  $688 = $687 & 32;
  $689 = ($688|0)==(0);
  if ($689) {
   (___fwritex($$2239,$$2234,$0)|0);
  }
  $690 = $$6268 ^ 65536;
  _pad($0,48,$$2261,$685,$690);
  _pad($0,48,$$$5,$683,0);
  $691 = load4($0);
  $692 = $691 & 32;
  $693 = ($692|0)==(0);
  if ($693) {
   (___fwritex($$2,$683,$0)|0);
  }
  $694 = $$6268 ^ 8192;
  _pad($0,32,$$2261,$685,$694);
  $$0243 = $$2261;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
 }
 L345: do {
  if ((label|0) == 243) {
   $695 = ($0|0)==(0|0);
   if ($695) {
    $696 = ($$0269|0)==(0);
    if ($696) {
     $$0 = 0;
    } else {
     $$2242381 = 1;
     while(1) {
      $697 = (($4) + ($$2242381<<2)|0);
      $698 = load4($697);
      $699 = ($698|0)==(0);
      if ($699) {
       $$3379 = $$2242381;
       break;
      }
      $700 = (($3) + ($$2242381<<3)|0);
      _pop_arg_529($700,$698,$2);
      $701 = (($$2242381) + 1)|0;
      $702 = ($701|0)<(10);
      if ($702) {
       $$2242381 = $701;
      } else {
       $$0 = 1;
       break L345;
      }
     }
     while(1) {
      $705 = (($4) + ($$3379<<2)|0);
      $706 = load4($705);
      $707 = ($706|0)==(0);
      $703 = (($$3379) + 1)|0;
      if (!($707)) {
       $$0 = -1;
       break L345;
      }
      $704 = ($703|0)<(10);
      if ($704) {
       $$3379 = $703;
      } else {
       $$0 = 1;
       break;
      }
     }
    }
   } else {
    $$0 = $$1248;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function ___lockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function ___fwritex($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$032 = 0, $$033 = 0, $$034 = 0, $$1 = 0, $$pre = 0, $$pre38 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($2)) + 16|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 if ($5) {
  $7 = (___towrite($2)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   $$pre = load4($3);
   $12 = $$pre;
   label = 5;
  } else {
   $$032 = 0;
  }
 } else {
  $6 = $4;
  $12 = $6;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $9 = ((($2)) + 20|0);
   $10 = load4($9);
   $11 = (($12) - ($10))|0;
   $13 = ($11>>>0)<($1>>>0);
   $14 = $10;
   if ($13) {
    $15 = ((($2)) + 36|0);
    $16 = load4($15);
    $17 = (FUNCTION_TABLE_iiii[$16 & 7]($2,$0,$1)|0);
    $$032 = $17;
    break;
   }
   $18 = ((($2)) + 75|0);
   $19 = load1($18);
   $20 = ($19<<24>>24)>(-1);
   L10: do {
    if ($20) {
     $$0 = $1;
     while(1) {
      $21 = ($$0|0)==(0);
      if ($21) {
       $$033 = $1;$$034 = $0;$$1 = 0;$32 = $14;
       break L10;
      }
      $22 = (($$0) + -1)|0;
      $23 = (($0) + ($22)|0);
      $24 = load1($23);
      $25 = ($24<<24>>24)==(10);
      if ($25) {
       break;
      } else {
       $$0 = $22;
      }
     }
     $26 = ((($2)) + 36|0);
     $27 = load4($26);
     $28 = (FUNCTION_TABLE_iiii[$27 & 7]($2,$0,$$0)|0);
     $29 = ($28>>>0)<($$0>>>0);
     if ($29) {
      $$032 = $$0;
      break L5;
     }
     $30 = (($0) + ($$0)|0);
     $31 = (($1) - ($$0))|0;
     $$pre38 = load4($9);
     $$033 = $31;$$034 = $30;$$1 = $$0;$32 = $$pre38;
    } else {
     $$033 = $1;$$034 = $0;$$1 = 0;$32 = $14;
    }
   } while(0);
   _memcpy(($32|0),($$034|0),($$033|0))|0;
   $33 = load4($9);
   $34 = (($33) + ($$033)|0);
   store4($9,$34);
   $35 = (($$1) + ($$033))|0;
   $$032 = $35;
  }
 } while(0);
 return ($$032|0);
}
function _pop_arg_529($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$mask = 0, $$mask31 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = i64(), $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = i64(), $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = i64(), $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = i64(), $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = i64(), $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = i64();
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = i64(), $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0.0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0.0, $7 = 0, $8 = 0;
 var $9 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0, $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0, $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0;
 var $arglist_next9 = 0, $expanded = 0, $expanded28 = 0, $expanded29 = 0, $expanded30 = 0, $expanded31 = 0, $expanded32 = 0, $expanded33 = 0, $expanded34 = 0, $expanded35 = 0, $expanded36 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded40 = 0, $expanded41 = 0, $expanded42 = 0, $expanded43 = 0, $expanded44 = 0, $expanded45 = 0;
 var $expanded46 = 0, $expanded47 = 0, $expanded48 = 0, $expanded49 = 0, $expanded50 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded54 = 0, $expanded55 = 0, $expanded56 = 0, $expanded57 = 0, $expanded58 = 0, $expanded59 = 0, $expanded60 = 0, $expanded61 = 0, $expanded62 = 0, $expanded63 = 0, $expanded64 = 0, $expanded65 = 0;
 var $expanded66 = 0, $expanded67 = 0, $expanded68 = 0, $expanded69 = 0, $expanded70 = 0, $expanded71 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded75 = 0, $expanded76 = 0, $expanded77 = 0, $expanded78 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded82 = 0, $expanded83 = 0, $expanded84 = 0, $expanded85 = 0;
 var $expanded86 = 0, $expanded87 = 0, $expanded88 = 0, $expanded89 = 0, $expanded90 = 0, $expanded91 = 0, $expanded92 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, $expanded96 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($1>>>0)>(20);
 L1: do {
  if (!($3)) {
   do {
    switch ($1|0) {
    case 9:  {
     $arglist_current = load4($2);
     $4 = $arglist_current;
     $expanded29 = ((0) + 4|0);
     $expanded28 = $expanded29;
     $expanded = (($expanded28) - 1)|0;
     $5 = (($4) + ($expanded))|0;
     $expanded33 = ((0) + 4|0);
     $expanded32 = $expanded33;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $6 = $5 & $expanded30;
     $7 = $6;
     $8 = load4($7);
     $arglist_next = ((($7)) + 4|0);
     store4($2,$arglist_next);
     store4($0,$8);
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = load4($2);
     $9 = $arglist_current2;
     $expanded36 = ((0) + 4|0);
     $expanded35 = $expanded36;
     $expanded34 = (($expanded35) - 1)|0;
     $10 = (($9) + ($expanded34))|0;
     $expanded40 = ((0) + 4|0);
     $expanded39 = $expanded40;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $11 = $10 & $expanded37;
     $12 = $11;
     $13 = load4($12);
     $arglist_next3 = ((($12)) + 4|0);
     store4($2,$arglist_next3);
     $14 = i64_sext($13);
     store8($0,$14);
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = load4($2);
     $15 = $arglist_current5;
     $expanded43 = ((0) + 4|0);
     $expanded42 = $expanded43;
     $expanded41 = (($expanded42) - 1)|0;
     $16 = (($15) + ($expanded41))|0;
     $expanded47 = ((0) + 4|0);
     $expanded46 = $expanded47;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $17 = $16 & $expanded44;
     $18 = $17;
     $19 = load4($18);
     $arglist_next6 = ((($18)) + 4|0);
     store4($2,$arglist_next6);
     $20 = i64_zext($19>>>0);
     store8($0,$20);
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = load4($2);
     $21 = $arglist_current8;
     $expanded50 = ((0) + 8|0);
     $expanded49 = $expanded50;
     $expanded48 = (($expanded49) - 1)|0;
     $22 = (($21) + ($expanded48))|0;
     $expanded54 = ((0) + 8|0);
     $expanded53 = $expanded54;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $23 = $22 & $expanded51;
     $24 = $23;
     $25 = load8($24);
     $arglist_next9 = ((($24)) + 8|0);
     store4($2,$arglist_next9);
     store8($0,$25);
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = load4($2);
     $26 = $arglist_current11;
     $expanded57 = ((0) + 4|0);
     $expanded56 = $expanded57;
     $expanded55 = (($expanded56) - 1)|0;
     $27 = (($26) + ($expanded55))|0;
     $expanded61 = ((0) + 4|0);
     $expanded60 = $expanded61;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $28 = $27 & $expanded58;
     $29 = $28;
     $30 = load4($29);
     $arglist_next12 = ((($29)) + 4|0);
     store4($2,$arglist_next12);
     $31 = $30&65535;
     $32 = i64_sext($31 << 16 >> 16);
     store8($0,$32);
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = load4($2);
     $33 = $arglist_current14;
     $expanded64 = ((0) + 4|0);
     $expanded63 = $expanded64;
     $expanded62 = (($expanded63) - 1)|0;
     $34 = (($33) + ($expanded62))|0;
     $expanded68 = ((0) + 4|0);
     $expanded67 = $expanded68;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $35 = $34 & $expanded65;
     $36 = $35;
     $37 = load4($36);
     $arglist_next15 = ((($36)) + 4|0);
     store4($2,$arglist_next15);
     $$mask31 = $37 & 65535;
     $38 = i64_zext($$mask31>>>0);
     store8($0,$38);
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = load4($2);
     $39 = $arglist_current17;
     $expanded71 = ((0) + 4|0);
     $expanded70 = $expanded71;
     $expanded69 = (($expanded70) - 1)|0;
     $40 = (($39) + ($expanded69))|0;
     $expanded75 = ((0) + 4|0);
     $expanded74 = $expanded75;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $41 = $40 & $expanded72;
     $42 = $41;
     $43 = load4($42);
     $arglist_next18 = ((($42)) + 4|0);
     store4($2,$arglist_next18);
     $44 = $43&255;
     $45 = i64_sext($44 << 24 >> 24);
     store8($0,$45);
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = load4($2);
     $46 = $arglist_current20;
     $expanded78 = ((0) + 4|0);
     $expanded77 = $expanded78;
     $expanded76 = (($expanded77) - 1)|0;
     $47 = (($46) + ($expanded76))|0;
     $expanded82 = ((0) + 4|0);
     $expanded81 = $expanded82;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $48 = $47 & $expanded79;
     $49 = $48;
     $50 = load4($49);
     $arglist_next21 = ((($49)) + 4|0);
     store4($2,$arglist_next21);
     $$mask = $50 & 255;
     $51 = i64_zext($$mask>>>0);
     store8($0,$51);
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = load4($2);
     $52 = $arglist_current23;
     $expanded85 = ((0) + 8|0);
     $expanded84 = $expanded85;
     $expanded83 = (($expanded84) - 1)|0;
     $53 = (($52) + ($expanded83))|0;
     $expanded89 = ((0) + 8|0);
     $expanded88 = $expanded89;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $54 = $53 & $expanded86;
     $55 = $54;
     $56 = loadd($55);
     $arglist_next24 = ((($55)) + 8|0);
     store4($2,$arglist_next24);
     stored($0,$56);
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = load4($2);
     $57 = $arglist_current26;
     $expanded92 = ((0) + 8|0);
     $expanded91 = $expanded92;
     $expanded90 = (($expanded91) - 1)|0;
     $58 = (($57) + ($expanded90))|0;
     $expanded96 = ((0) + 8|0);
     $expanded95 = $expanded96;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $59 = $58 & $expanded93;
     $60 = $59;
     $61 = loadd($60);
     $arglist_next27 = ((($60)) + 8|0);
     store4($2,$arglist_next27);
     stored($0,$61);
     break L1;
     break;
    }
    default: {
     break L1;
    }
    }
   } while(0);
  }
 } while(0);
 return;
}
function _fmt_u($0,$1) {
 $0 = i64($0);
 $1 = $1|0;
 var $$010$lcssa$off0 = 0, $$01013 = i64(), $$012 = 0, $$09$lcssa = 0, $$0914 = 0, $$1$lcssa = 0, $$111 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = i64(), $4 = i64(), $5 = 0, $6 = 0, $7 = i64(), $8 = 0;
 var $9 = 0, $extract$t = 0, $extract$t20 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = i64_ugt($0,i64_const(4294967295,0));
 $extract$t = i64_trunc($0);
 if ($2) {
  $$01013 = $0;$$0914 = $1;
  while(1) {
   $3 = i64_urem($$01013,i64_const(10,0));
   $4 = i64_or($3,i64_const(48,0));
   $5 = i64_trunc($4)&255;
   $6 = ((($$0914)) + -1|0);
   store1($6,$5);
   $7 = i64_udiv($$01013,i64_const(10,0));
   $8 = i64_ugt($$01013,i64_const(4294967295,9));
   if ($8) {
    $$01013 = $7;$$0914 = $6;
   } else {
    break;
   }
  }
  $extract$t20 = i64_trunc($7);
  $$010$lcssa$off0 = $extract$t20;$$09$lcssa = $6;
 } else {
  $$010$lcssa$off0 = $extract$t;$$09$lcssa = $1;
 }
 $9 = ($$010$lcssa$off0|0)==(0);
 if ($9) {
  $$1$lcssa = $$09$lcssa;
 } else {
  $$012 = $$010$lcssa$off0;$$111 = $$09$lcssa;
  while(1) {
   $10 = (($$012>>>0) % 10)&-1;
   $11 = $10 | 48;
   $12 = $11&255;
   $13 = ((($$111)) + -1|0);
   store1($13,$12);
   $14 = (($$012>>>0) / 10)&-1;
   $15 = ($$012>>>0)<(10);
   if ($15) {
    $$1$lcssa = $13;
    break;
   } else {
    $$012 = $14;$$111 = $13;
   }
  }
 }
 return ($$1$lcssa|0);
}
function _strerror($0) {
 $0 = $0|0;
 var $$011$lcssa = 0, $$01113 = 0, $$015 = 0, $$112 = 0, $$114 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$015 = 0;
 while(1) {
  $2 = (6973 + ($$015)|0);
  $3 = load1($2);
  $4 = $3&255;
  $5 = ($4|0)==($0|0);
  if ($5) {
   label = 2;
   break;
  }
  $6 = (($$015) + 1)|0;
  $7 = ($6|0)==(87);
  if ($7) {
   $$01113 = 7061;$$114 = 87;
   label = 5;
   break;
  } else {
   $$015 = $6;
  }
 }
 if ((label|0) == 2) {
  $1 = ($$015|0)==(0);
  if ($1) {
   $$011$lcssa = 7061;
  } else {
   $$01113 = 7061;$$114 = $$015;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $$112 = $$01113;
   while(1) {
    $8 = load1($$112);
    $9 = ($8<<24>>24)==(0);
    $10 = ((($$112)) + 1|0);
    if ($9) {
     break;
    } else {
     $$112 = $10;
    }
   }
   $11 = (($$114) + -1)|0;
   $12 = ($11|0)==(0);
   if ($12) {
    $$011$lcssa = $10;
    break;
   } else {
    $$01113 = $10;$$114 = $11;
    label = 5;
   }
  }
 }
 return ($$011$lcssa|0);
}
function _memchr($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$lcssa = 0, $$035$lcssa = 0, $$035$lcssa65 = 0, $$03555 = 0, $$036$lcssa = 0, $$036$lcssa64 = 0, $$03654 = 0, $$046 = 0, $$137$lcssa = 0, $$13745 = 0, $$140 = 0, $$2 = 0, $$23839 = 0, $$3 = 0, $$lcssa = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
 var $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond53 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $1 & 255;
 $4 = $0;
 $5 = $4 & 3;
 $6 = ($5|0)!=(0);
 $7 = ($2|0)!=(0);
 $or$cond53 = $7 & $6;
 L1: do {
  if ($or$cond53) {
   $8 = $1&255;
   $$03555 = $0;$$03654 = $2;
   while(1) {
    $9 = load1($$03555);
    $10 = ($9<<24>>24)==($8<<24>>24);
    if ($10) {
     $$035$lcssa65 = $$03555;$$036$lcssa64 = $$03654;
     label = 6;
     break L1;
    }
    $11 = ((($$03555)) + 1|0);
    $12 = (($$03654) + -1)|0;
    $13 = $11;
    $14 = $13 & 3;
    $15 = ($14|0)!=(0);
    $16 = ($12|0)!=(0);
    $or$cond = $16 & $15;
    if ($or$cond) {
     $$03555 = $11;$$03654 = $12;
    } else {
     $$035$lcssa = $11;$$036$lcssa = $12;$$lcssa = $16;
     label = 5;
     break;
    }
   }
  } else {
   $$035$lcssa = $0;$$036$lcssa = $2;$$lcssa = $7;
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  if ($$lcssa) {
   $$035$lcssa65 = $$035$lcssa;$$036$lcssa64 = $$036$lcssa;
   label = 6;
  } else {
   $$2 = $$035$lcssa;$$3 = 0;
  }
 }
 L8: do {
  if ((label|0) == 6) {
   $17 = load1($$035$lcssa65);
   $18 = $1&255;
   $19 = ($17<<24>>24)==($18<<24>>24);
   if ($19) {
    $$2 = $$035$lcssa65;$$3 = $$036$lcssa64;
   } else {
    $20 = Math_imul($3, 16843009)|0;
    $21 = ($$036$lcssa64>>>0)>(3);
    L11: do {
     if ($21) {
      $$046 = $$035$lcssa65;$$13745 = $$036$lcssa64;
      while(1) {
       $22 = load4($$046);
       $23 = $22 ^ $20;
       $24 = (($23) + -16843009)|0;
       $25 = $23 & -2139062144;
       $26 = $25 ^ -2139062144;
       $27 = $26 & $24;
       $28 = ($27|0)==(0);
       if (!($28)) {
        break;
       }
       $29 = ((($$046)) + 4|0);
       $30 = (($$13745) + -4)|0;
       $31 = ($30>>>0)>(3);
       if ($31) {
        $$046 = $29;$$13745 = $30;
       } else {
        $$0$lcssa = $29;$$137$lcssa = $30;
        label = 11;
        break L11;
       }
      }
      $$140 = $$046;$$23839 = $$13745;
     } else {
      $$0$lcssa = $$035$lcssa65;$$137$lcssa = $$036$lcssa64;
      label = 11;
     }
    } while(0);
    if ((label|0) == 11) {
     $32 = ($$137$lcssa|0)==(0);
     if ($32) {
      $$2 = $$0$lcssa;$$3 = 0;
      break;
     } else {
      $$140 = $$0$lcssa;$$23839 = $$137$lcssa;
     }
    }
    while(1) {
     $33 = load1($$140);
     $34 = ($33<<24>>24)==($18<<24>>24);
     if ($34) {
      $$2 = $$140;$$3 = $$23839;
      break L8;
     }
     $35 = ((($$140)) + 1|0);
     $36 = (($$23839) + -1)|0;
     $37 = ($36|0)==(0);
     if ($37) {
      $$2 = $35;$$3 = 0;
      break;
     } else {
      $$140 = $35;$$23839 = $36;
     }
    }
   }
  }
 } while(0);
 $38 = ($$3|0)!=(0);
 $39 = $38 ? $$2 : 0;
 return ($39|0);
}
function _pad($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0$lcssa16 = 0, $$012 = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
 $5 = sp;
 $6 = $4 & 73728;
 $7 = ($6|0)==(0);
 $8 = ($2|0)>($3|0);
 $or$cond = $8 & $7;
 do {
  if ($or$cond) {
   $9 = (($2) - ($3))|0;
   $10 = ($9>>>0)>(256);
   $11 = $10 ? 256 : $9;
   _memset(($5|0),($1|0),($11|0))|0;
   $12 = ($9>>>0)>(255);
   $13 = load4($0);
   $14 = $13 & 32;
   $15 = ($14|0)==(0);
   if ($12) {
    $16 = (($2) - ($3))|0;
    $$012 = $9;$23 = $13;$24 = $15;
    while(1) {
     if ($24) {
      (___fwritex($5,256,$0)|0);
      $$pre = load4($0);
      $20 = $$pre;
     } else {
      $20 = $23;
     }
     $17 = (($$012) + -256)|0;
     $18 = ($17>>>0)>(255);
     $19 = $20 & 32;
     $21 = ($19|0)==(0);
     if ($18) {
      $$012 = $17;$23 = $20;$24 = $21;
     } else {
      break;
     }
    }
    $22 = $16 & 255;
    if ($21) {
     $$0$lcssa16 = $22;
    } else {
     break;
    }
   } else {
    if ($15) {
     $$0$lcssa16 = $9;
    } else {
     break;
    }
   }
   (___fwritex($5,$$0$lcssa16,$0)|0);
  }
 } while(0);
 STACKTOP = sp;return;
}
function _wctomb($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($0|0)==(0|0);
 if ($2) {
  $$0 = 0;
 } else {
  $3 = (_wcrtomb($0,$1,0)|0);
  $$0 = $3;
 }
 return ($$0|0);
}
function _frexpl($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (+_frexp($0,$1));
 return (+$2);
}
function _frexp($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $$0 = 0.0, $$016 = 0.0, $$tr = 0, $10 = 0, $11 = i64(), $12 = i64(), $13 = 0.0, $2 = i64(), $3 = i64(), $4 = 0, $5 = 0.0, $6 = 0.0, $7 = 0, $8 = 0, $9 = 0, $storemerge = 0, $trunc = 0, $trunc$clear = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = i64_bc2i($0);
 $3 = i64_lshr($2,i64_const(52,0));
 $trunc = i64_trunc($3)&65535;
 $trunc$clear = $trunc & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $4 = $0 != 0.0;
  if ($4) {
   $5 = $0 * 1.8446744073709552E+19;
   $6 = (+_frexp($5,$1));
   $7 = load4($1);
   $8 = (($7) + -64)|0;
   $$016 = $6;$storemerge = $8;
  } else {
   $$016 = $0;$storemerge = 0;
  }
  store4($1,$storemerge);
  $$0 = $$016;
  break;
 }
 case 2047:  {
  $$0 = $0;
  break;
 }
 default: {
  $$tr = i64_trunc($3);
  $9 = $$tr & 2047;
  $10 = (($9) + -1022)|0;
  store4($1,$10);
  $11 = i64_and($2,i64_const(4294967295,2148532223));
  $12 = i64_or($11,i64_const(0,1071644672));
  $13 = i64_bc2d($12);
  $$0 = $13;
 }
 }
 return (+$$0);
}
function _wcrtomb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($0|0)==(0|0);
 do {
  if ($3) {
   $$0 = 1;
  } else {
   $4 = ($1>>>0)<(128);
   if ($4) {
    $5 = $1&255;
    store1($0,$5);
    $$0 = 1;
    break;
   }
   $6 = ($1>>>0)<(2048);
   if ($6) {
    $7 = $1 >>> 6;
    $8 = $7 | 192;
    $9 = $8&255;
    $10 = ((($0)) + 1|0);
    store1($0,$9);
    $11 = $1 & 63;
    $12 = $11 | 128;
    $13 = $12&255;
    store1($10,$13);
    $$0 = 2;
    break;
   }
   $14 = ($1>>>0)<(55296);
   $15 = $1 & -8192;
   $16 = ($15|0)==(57344);
   $or$cond = $14 | $16;
   if ($or$cond) {
    $17 = $1 >>> 12;
    $18 = $17 | 224;
    $19 = $18&255;
    $20 = ((($0)) + 1|0);
    store1($0,$19);
    $21 = $1 >>> 6;
    $22 = $21 & 63;
    $23 = $22 | 128;
    $24 = $23&255;
    $25 = ((($0)) + 2|0);
    store1($20,$24);
    $26 = $1 & 63;
    $27 = $26 | 128;
    $28 = $27&255;
    store1($25,$28);
    $$0 = 3;
    break;
   }
   $29 = (($1) + -65536)|0;
   $30 = ($29>>>0)<(1048576);
   if ($30) {
    $31 = $1 >>> 18;
    $32 = $31 | 240;
    $33 = $32&255;
    $34 = ((($0)) + 1|0);
    store1($0,$33);
    $35 = $1 >>> 12;
    $36 = $35 & 63;
    $37 = $36 | 128;
    $38 = $37&255;
    $39 = ((($0)) + 2|0);
    store1($34,$38);
    $40 = $1 >>> 6;
    $41 = $40 & 63;
    $42 = $41 | 128;
    $43 = $42&255;
    $44 = ((($0)) + 3|0);
    store1($39,$43);
    $45 = $1 & 63;
    $46 = $45 | 128;
    $47 = $46&255;
    store1($44,$47);
    $$0 = 4;
    break;
   } else {
    $48 = (___errno_location()|0);
    store4($48,84);
    $$0 = -1;
    break;
   }
  }
 } while(0);
 return ($$0|0);
}
function ___towrite($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 74|0);
 $2 = load1($1);
 $3 = $2 << 24 >> 24;
 $4 = (($3) + 255)|0;
 $5 = $4 | $3;
 $6 = $5&255;
 store1($1,$6);
 $7 = load4($0);
 $8 = $7 & 8;
 $9 = ($8|0)==(0);
 if ($9) {
  $11 = ((($0)) + 8|0);
  store4($11,0);
  $12 = ((($0)) + 4|0);
  store4($12,0);
  $13 = ((($0)) + 44|0);
  $14 = load4($13);
  $15 = ((($0)) + 28|0);
  store4($15,$14);
  $16 = ((($0)) + 20|0);
  store4($16,$14);
  $17 = $14;
  $18 = ((($0)) + 48|0);
  $19 = load4($18);
  $20 = (($17) + ($19)|0);
  $21 = ((($0)) + 16|0);
  store4($21,$20);
  $$0 = 0;
 } else {
  $10 = $7 | 32;
  store4($0,$10);
  $$0 = -1;
 }
 return ($$0|0);
}
function _strlen($0) {
 $0 = $0|0;
 var $$0 = 0, $$014 = 0, $$015$lcssa = 0, $$01518 = 0, $$1$lcssa = 0, $$pn = 0, $$pn29 = 0, $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0;
 $2 = $1 & 3;
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $$015$lcssa = $0;
   label = 4;
  } else {
   $$01518 = $0;$22 = $1;
   while(1) {
    $4 = load1($$01518);
    $5 = ($4<<24>>24)==(0);
    if ($5) {
     $$pn = $22;
     break L1;
    }
    $6 = ((($$01518)) + 1|0);
    $7 = $6;
    $8 = $7 & 3;
    $9 = ($8|0)==(0);
    if ($9) {
     $$015$lcssa = $6;
     label = 4;
     break;
    } else {
     $$01518 = $6;$22 = $7;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $$0 = $$015$lcssa;
  while(1) {
   $10 = load4($$0);
   $11 = (($10) + -16843009)|0;
   $12 = $10 & -2139062144;
   $13 = $12 ^ -2139062144;
   $14 = $13 & $11;
   $15 = ($14|0)==(0);
   $16 = ((($$0)) + 4|0);
   if ($15) {
    $$0 = $16;
   } else {
    break;
   }
  }
  $17 = $10&255;
  $18 = ($17<<24>>24)==(0);
  if ($18) {
   $$1$lcssa = $$0;
  } else {
   $$pn29 = $$0;
   while(1) {
    $19 = ((($$pn29)) + 1|0);
    $$pre = load1($19);
    $20 = ($$pre<<24>>24)==(0);
    if ($20) {
     $$1$lcssa = $19;
     break;
    } else {
     $$pn29 = $19;
    }
   }
  }
  $21 = $$1$lcssa;
  $$pn = $21;
 }
 $$014 = (($$pn) - ($1))|0;
 return ($$014|0);
}
function _fputc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ((($1)) + 76|0);
 $3 = load4($2);
 $4 = ($3|0)<(0);
 if ($4) {
  label = 3;
 } else {
  $5 = (___lockfile($1)|0);
  $6 = ($5|0)==(0);
  if ($6) {
   label = 3;
  } else {
   $20 = ((($1)) + 75|0);
   $21 = load1($20);
   $22 = $21 << 24 >> 24;
   $23 = ($22|0)==($0|0);
   if ($23) {
    label = 10;
   } else {
    $24 = ((($1)) + 20|0);
    $25 = load4($24);
    $26 = ((($1)) + 16|0);
    $27 = load4($26);
    $28 = ($25>>>0)<($27>>>0);
    if ($28) {
     $29 = $0&255;
     $30 = ((($25)) + 1|0);
     store4($24,$30);
     store1($25,$29);
     $31 = $0 & 255;
     $33 = $31;
    } else {
     label = 10;
    }
   }
   if ((label|0) == 10) {
    $32 = (___overflow($1,$0)|0);
    $33 = $32;
   }
   ___unlockfile($1);
   $$0 = $33;
  }
 }
 do {
  if ((label|0) == 3) {
   $7 = ((($1)) + 75|0);
   $8 = load1($7);
   $9 = $8 << 24 >> 24;
   $10 = ($9|0)==($0|0);
   if (!($10)) {
    $11 = ((($1)) + 20|0);
    $12 = load4($11);
    $13 = ((($1)) + 16|0);
    $14 = load4($13);
    $15 = ($12>>>0)<($14>>>0);
    if ($15) {
     $16 = $0&255;
     $17 = ((($12)) + 1|0);
     store4($11,$17);
     store1($12,$16);
     $18 = $0 & 255;
     $$0 = $18;
     break;
    }
   }
   $19 = (___overflow($1,$0)|0);
   $$0 = $19;
  }
 } while(0);
 return ($$0|0);
}
function ___overflow($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp;
 $3 = $1&255;
 store1($2,$3);
 $4 = ((($0)) + 16|0);
 $5 = load4($4);
 $6 = ($5|0)==(0|0);
 if ($6) {
  $7 = (___towrite($0)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   $$pre = load4($4);
   $12 = $$pre;
   label = 4;
  } else {
   $$0 = -1;
  }
 } else {
  $12 = $5;
  label = 4;
 }
 do {
  if ((label|0) == 4) {
   $9 = ((($0)) + 20|0);
   $10 = load4($9);
   $11 = ($10>>>0)<($12>>>0);
   if ($11) {
    $13 = $1 & 255;
    $14 = ((($0)) + 75|0);
    $15 = load1($14);
    $16 = $15 << 24 >> 24;
    $17 = ($13|0)==($16|0);
    if (!($17)) {
     $18 = ((($10)) + 1|0);
     store4($9,$18);
     store1($10,$3);
     $$0 = $13;
     break;
    }
   }
   $19 = ((($0)) + 36|0);
   $20 = load4($19);
   $21 = (FUNCTION_TABLE_iiii[$20 & 7]($0,$2,1)|0);
   $22 = ($21|0)==(1);
   if ($22) {
    $23 = load1($2);
    $24 = $23&255;
    $$0 = $24;
   } else {
    $$0 = -1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function _fwrite($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = Math_imul($2, $1)|0;
 $5 = ((($3)) + 76|0);
 $6 = load4($5);
 $7 = ($6|0)>(-1);
 if ($7) {
  $9 = (___lockfile($3)|0);
  $phitmp = ($9|0)==(0);
  $10 = (___fwritex($0,$4,$3)|0);
  if ($phitmp) {
   $11 = $10;
  } else {
   ___unlockfile($3);
   $11 = $10;
  }
 } else {
  $8 = (___fwritex($0,$4,$3)|0);
  $11 = $8;
 }
 $12 = ($11|0)==($4|0);
 if ($12) {
  $14 = $2;
 } else {
  $13 = (($11>>>0) / ($1>>>0))&-1;
  $14 = $13;
 }
 return ($14|0);
}
function _fputs($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (_strlen($0)|0);
 $3 = (_fwrite($0,$2,1,$1)|0);
 $4 = (($3) + -1)|0;
 return ($4|0);
}
function _printf($0,$varargs) {
 $0 = $0|0;
 $varargs = $varargs|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 store4($1,$varargs);
 $2 = load4(1840);
 $3 = (_vfprintf($2,$0,$1)|0);
 STACKTOP = sp;return ($3|0);
}
function _puts($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = load4(1840);
 $2 = ((($1)) + 76|0);
 $3 = load4($2);
 $4 = ($3|0)>(-1);
 if ($4) {
  $5 = (___lockfile($1)|0);
  $20 = $5;
 } else {
  $20 = 0;
 }
 $6 = (_fputs($0,$1)|0);
 $7 = ($6|0)<(0);
 do {
  if ($7) {
   $19 = 1;
  } else {
   $8 = ((($1)) + 75|0);
   $9 = load1($8);
   $10 = ($9<<24>>24)==(10);
   if (!($10)) {
    $11 = ((($1)) + 20|0);
    $12 = load4($11);
    $13 = ((($1)) + 16|0);
    $14 = load4($13);
    $15 = ($12>>>0)<($14>>>0);
    if ($15) {
     $16 = ((($12)) + 1|0);
     store4($11,$16);
     store1($12,10);
     $19 = 0;
     break;
    }
   }
   $17 = (___overflow($1,10)|0);
   $phitmp = ($17|0)<(0);
   $19 = $phitmp;
  }
 } while(0);
 $18 = $19 << 31 >> 31;
 $21 = ($20|0)==(0);
 if (!($21)) {
  ___unlockfile($1);
 }
 return ($18|0);
}
function ___sindf($0) {
 $0 = +$0;
 var $1 = 0.0, $10 = 0.0, $11 = 0.0, $12 = 0.0, $13 = Math_fround(0), $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0.0, $8 = 0.0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0 * $0;
 $2 = $1 * $1;
 $3 = $1 * 2.7183114939898219E-6;
 $4 = $3 + -1.9839334836096632E-4;
 $5 = $1 * $0;
 $6 = $1 * 0.0083333293858894632;
 $7 = $6 + -0.16666666641626524;
 $8 = $5 * $7;
 $9 = $8 + $0;
 $10 = $5 * $2;
 $11 = $10 * $4;
 $12 = $11 + $9;
 $13 = Math_fround($12);
 return (Math_fround($13));
}
function ___cosdf($0) {
 $0 = +$0;
 var $1 = 0.0, $10 = 0.0, $11 = 0.0, $12 = Math_fround(0), $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0.0, $8 = 0.0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0 * $0;
 $2 = $1 * $1;
 $3 = $1 * 2.4390448796277409E-5;
 $4 = $3 + -0.0013886763774609929;
 $5 = $1 * 0.499999997251031;
 $6 = 1.0 - $5;
 $7 = $2 * 0.041666623323739063;
 $8 = $6 + $7;
 $9 = $1 * $2;
 $10 = $9 * $4;
 $11 = $8 + $10;
 $12 = Math_fround($11);
 return (Math_fround($12));
}
function ___rem_pio2f($0,$1) {
 $0 = Math_fround($0);
 $1 = $1|0;
 var $$0 = 0, $10 = 0.0, $11 = 0, $12 = 0.0, $13 = 0.0, $14 = 0.0, $15 = 0.0, $16 = 0, $17 = Math_fround(0), $18 = 0.0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = Math_fround(0), $24 = 0.0, $25 = 0, $26 = 0, $27 = 0.0;
 var $28 = 0.0, $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0.0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $2 = sp + 8|0;
 $3 = sp;
 $4 = i32_bc2i($0);
 $5 = $4 & 2147483647;
 $6 = ($5>>>0)<(1305022427);
 do {
  if ($6) {
   $7 = +$0;
   $8 = $7 * 0.63661977236758138;
   $9 = $8 + 6755399441055744.0;
   $10 = $9 + -6755399441055744.0;
   $11 = (~~(($10)));
   $12 = $10 * 1.5707963109016418;
   $13 = $7 - $12;
   $14 = $10 * 1.5893254773528196E-8;
   $15 = $13 - $14;
   stored($1,$15);
   $$0 = $11;
  } else {
   $16 = ($5>>>0)>(2139095039);
   if ($16) {
    $17 = Math_fround($0 - $0);
    $18 = +$17;
    stored($1,$18);
    $$0 = 0;
    break;
   }
   $19 = $5 >>> 23;
   $20 = (($19) + -150)|0;
   $21 = $20 << 23;
   $22 = (($5) - ($21))|0;
   $23 = i32_bc2f($22);
   $24 = +$23;
   stored($2,$24);
   $25 = (___rem_pio2_large($2,$3,$20,1,0)|0);
   $26 = ($4|0)<(0);
   $27 = loadd($3);
   if ($26) {
    $28 = -$27;
    stored($1,$28);
    $29 = (0 - ($25))|0;
    $$0 = $29;
    break;
   } else {
    stored($1,$27);
    $$0 = $25;
    break;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function ___rem_pio2_large($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$ = 0, $$0$lcssa = 0.0, $$0248$lcssa = 0.0, $$0248346 = 0.0, $$0250 = 0, $$0250278 = 0, $$0250279 = 0, $$0251 = 0, $$0251$in = 0, $$0253 = 0, $$0256 = 0, $$0258380 = 0, $$0263379 = 0, $$0271 = 0, $$0271277 = 0, $$0273$lcssa = 0, $$0273351 = 0, $$0374 = 0.0, $$1$lcssa = 0.0, $$10311 = 0;
 var $$11329 = 0, $$12327 = 0, $$1249 = 0.0, $$1252 = 0, $$1254 = 0, $$1254$in = 0, $$1257332 = 0, $$1259373 = 0, $$1264378 = 0, $$1272 = 0, $$1274 = 0, $$13322 = 0, $$1363 = 0.0, $$2255 = 0, $$2260345 = 0, $$2265344 = 0, $$2341 = 0.0, $$3261357 = 0, $$3266352 = 0, $$3333 = 0.0;
 var $$4$lcssa = 0.0, $$4262362 = 0, $$4267358 = 0, $$4267358$in = 0, $$4310 = 0.0, $$5$lcssa = 0.0, $$5268370 = 0, $$5268370$in = 0, $$5318 = 0.0, $$6$lcssa = 0.0, $$6269340 = 0, $$6312 = 0.0, $$7$lcssa = 0.0, $$7270337 = 0, $$7323 = 0.0, $$8309 = 0, $$9317 = 0, $$neg = 0, $$neg281 = 0, $$phi$trans$insert = 0;
 var $$phi$trans$insert407 = 0, $$pre = 0.0, $$pre408 = 0.0, $10 = 0, $100 = 0, $101 = 0.0, $102 = 0, $103 = 0.0, $104 = 0.0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0;
 var $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0.0, $123 = 0, $124 = 0, $125 = 0, $126 = 0.0, $127 = 0, $128 = 0, $129 = 0.0, $13 = 0, $130 = 0.0, $131 = 0.0, $132 = 0;
 var $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0.0, $14 = 0, $140 = 0, $141 = 0.0, $142 = 0, $143 = 0.0, $144 = 0.0, $145 = 0.0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0;
 var $151 = 0, $152 = 0, $153 = 0, $154 = 0.0, $155 = 0, $156 = 0, $157 = 0.0, $158 = 0.0, $159 = 0, $16 = 0, $160 = 0.0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0.0, $166 = 0, $167 = 0, $168 = 0.0, $169 = 0.0;
 var $17 = 0, $170 = 0.0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0.0, $18 = 0, $180 = 0.0, $181 = 0, $182 = 0, $183 = 0, $184 = 0.0, $185 = 0.0, $186 = 0, $187 = 0.0;
 var $188 = 0.0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0.0, $193 = 0.0, $194 = 0.0, $195 = 0.0, $196 = 0, $197 = 0, $198 = 0.0, $199 = 0.0, $20 = 0, $200 = 0, $201 = 0.0, $202 = 0.0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0.0, $208 = 0, $209 = 0.0, $21 = 0, $210 = 0.0, $211 = 0.0, $212 = 0.0, $213 = 0, $214 = 0, $215 = 0, $216 = 0.0, $217 = 0, $218 = 0.0, $219 = 0.0, $22 = 0, $220 = 0.0, $221 = 0.0, $222 = 0, $223 = 0;
 var $224 = 0.0, $225 = 0.0, $226 = 0, $227 = 0, $228 = 0, $229 = 0.0, $23 = 0, $230 = 0, $231 = 0.0, $232 = 0, $233 = 0, $234 = 0.0, $235 = 0.0, $236 = 0, $237 = 0.0, $238 = 0, $239 = 0, $24 = 0.0, $25 = 0, $26 = 0.0;
 var $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0.0, $37 = 0, $38 = 0, $39 = 0.0, $40 = 0.0, $41 = 0.0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0.0, $48 = 0, $49 = 0.0, $5 = 0, $50 = 0, $51 = 0.0, $52 = 0.0, $53 = 0.0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0.0, $59 = 0.0, $6 = 0, $60 = 0, $61 = 0, $62 = 0.0, $63 = 0.0, $64 = 0.0;
 var $65 = 0.0, $66 = 0.0, $67 = 0, $68 = 0.0, $69 = 0.0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0;
 var $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $exitcond = 0, $exitcond403 = 0;
 var $exitcond404 = 0, $exitcond405 = 0, $exitcond406 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 560|0;
 $5 = sp + 480|0;
 $6 = sp + 320|0;
 $7 = sp + 160|0;
 $8 = sp;
 $9 = (1956 + ($4<<2)|0);
 $10 = load4($9);
 $11 = (($3) + -1)|0;
 $12 = (($2) + -3)|0;
 $13 = (($12|0) / 24)&-1;
 $14 = ($13|0)<(0);
 $$ = $14 ? 0 : $13;
 $$neg = Math_imul($$, -24)|0;
 $$neg281 = (($2) + -24)|0;
 $15 = (($$neg281) + ($$neg))|0;
 $16 = (($10) + ($11))|0;
 $17 = ($16|0)<(0);
 if (!($17)) {
  $18 = (($$) - ($11))|0;
  $19 = (($10) + ($3))|0;
  $$0258380 = $18;$$0263379 = 0;
  while(1) {
   $21 = ($$0258380|0)<(0);
   if ($21) {
    $26 = 0.0;
   } else {
    $22 = (1972 + ($$0258380<<2)|0);
    $23 = load4($22);
    $24 = (+($23|0));
    $26 = $24;
   }
   $25 = (($6) + ($$0263379<<3)|0);
   stored($25,$26);
   $27 = (($$0263379) + 1)|0;
   $28 = (($$0258380) + 1)|0;
   $exitcond406 = ($27|0)==($19|0);
   if ($exitcond406) {
    break;
   } else {
    $$0258380 = $28;$$0263379 = $27;
   }
  }
 }
 $20 = ($3|0)>(0);
 $$1264378 = 0;
 while(1) {
  if ($20) {
   $29 = (($$1264378) + ($11))|0;
   $$0374 = 0.0;$$1259373 = 0;
   while(1) {
    $35 = (($0) + ($$1259373<<3)|0);
    $36 = loadd($35);
    $37 = (($29) - ($$1259373))|0;
    $38 = (($6) + ($37<<3)|0);
    $39 = loadd($38);
    $40 = $36 * $39;
    $41 = $$0374 + $40;
    $42 = (($$1259373) + 1)|0;
    $exitcond405 = ($42|0)==($3|0);
    if ($exitcond405) {
     $$0$lcssa = $41;
     break;
    } else {
     $$0374 = $41;$$1259373 = $42;
    }
   }
  } else {
   $$0$lcssa = 0.0;
  }
  $43 = (($8) + ($$1264378<<3)|0);
  stored($43,$$0$lcssa);
  $44 = (($$1264378) + 1)|0;
  $45 = ($$1264378|0)<($10|0);
  if ($45) {
   $$1264378 = $44;
  } else {
   break;
  }
 }
 $30 = ($15|0)>(0);
 $31 = (24 - ($15))|0;
 $32 = (23 - ($15))|0;
 $33 = ($3|0)>(0);
 $34 = ($15|0)==(0);
 $$0253 = $10;
 L17: while(1) {
  $46 = (($8) + ($$0253<<3)|0);
  $47 = loadd($46);
  $48 = ($$0253|0)>(0);
  if ($48) {
   $$0248346 = $47;$$2260345 = $$0253;$$2265344 = 0;
   while(1) {
    $49 = $$0248346 * 5.9604644775390625E-8;
    $50 = (~~(($49)));
    $51 = (+($50|0));
    $52 = $51 * 16777216.0;
    $53 = $$0248346 - $52;
    $54 = (~~(($53)));
    $55 = (($5) + ($$2265344<<2)|0);
    store4($55,$54);
    $56 = (($$2260345) + -1)|0;
    $57 = (($8) + ($56<<3)|0);
    $58 = loadd($57);
    $59 = $51 + $58;
    $60 = (($$2265344) + 1)|0;
    $61 = ($$2260345|0)>(1);
    if ($61) {
     $$0248346 = $59;$$2260345 = $56;$$2265344 = $60;
    } else {
     $$0248$lcssa = $59;
     break;
    }
   }
  } else {
   $$0248$lcssa = $47;
  }
  $62 = (+_scalbn($$0248$lcssa,$15));
  $63 = $62 * 0.125;
  $64 = (+Math_floor((+$63)));
  $65 = $64 * 8.0;
  $66 = $62 - $65;
  $67 = (~~(($66)));
  $68 = (+($67|0));
  $69 = $66 - $68;
  do {
   if ($30) {
    $70 = (($$0253) + -1)|0;
    $71 = (($5) + ($70<<2)|0);
    $72 = load4($71);
    $73 = $72 >> $31;
    $74 = (($73) + ($67))|0;
    $75 = $73 << $31;
    $76 = (($72) - ($75))|0;
    store4($71,$76);
    $77 = $76 >> $32;
    $$0250 = $77;$$0271 = $74;
    label = 19;
   } else {
    if ($34) {
     $78 = (($$0253) + -1)|0;
     $79 = (($5) + ($78<<2)|0);
     $80 = load4($79);
     $81 = $80 >> 23;
     $$0250 = $81;$$0271 = $67;
     label = 19;
     break;
    } else {
     $82 = !($69 >= 0.5);
     if ($82) {
      $$0250279 = 0;$$1249 = $69;$$1272 = $67;
      break;
     } else {
      $$0250278 = 2;$$0271277 = $67;
      label = 20;
      break;
     }
    }
   }
  } while(0);
  if ((label|0) == 19) {
   label = 0;
   $83 = ($$0250|0)>(0);
   if ($83) {
    $$0250278 = $$0250;$$0271277 = $$0271;
    label = 20;
   } else {
    $$0250279 = $$0250;$$1249 = $69;$$1272 = $$0271;
   }
  }
  if ((label|0) == 20) {
   label = 0;
   $84 = (($$0271277) + 1)|0;
   if ($48) {
    $$0273351 = 0;$$3266352 = 0;
    while(1) {
     $85 = (($5) + ($$3266352<<2)|0);
     $86 = load4($85);
     $87 = ($$0273351|0)==(0);
     if ($87) {
      $88 = ($86|0)==(0);
      if ($88) {
       $$1274 = 0;
      } else {
       $89 = (16777216 - ($86))|0;
       store4($85,$89);
       $$1274 = 1;
      }
     } else {
      $90 = (16777215 - ($86))|0;
      store4($85,$90);
      $$1274 = $$0273351;
     }
     $91 = (($$3266352) + 1)|0;
     $exitcond403 = ($91|0)==($$0253|0);
     if ($exitcond403) {
      $$0273$lcssa = $$1274;
      break;
     } else {
      $$0273351 = $$1274;$$3266352 = $91;
     }
    }
   } else {
    $$0273$lcssa = 0;
   }
   L42: do {
    if ($30) {
     switch ($15|0) {
     case 1:  {
      $92 = (($$0253) + -1)|0;
      $93 = (($5) + ($92<<2)|0);
      $94 = load4($93);
      $95 = $94 & 8388607;
      store4($93,$95);
      break L42;
      break;
     }
     case 2:  {
      $96 = (($$0253) + -1)|0;
      $97 = (($5) + ($96<<2)|0);
      $98 = load4($97);
      $99 = $98 & 4194303;
      store4($97,$99);
      break L42;
      break;
     }
     default: {
      break L42;
     }
     }
    }
   } while(0);
   $100 = ($$0250278|0)==(2);
   if ($100) {
    $101 = 1.0 - $69;
    $102 = ($$0273$lcssa|0)==(0);
    if ($102) {
     $$0250279 = 2;$$1249 = $101;$$1272 = $84;
    } else {
     $103 = (+_scalbn(1.0,$15));
     $104 = $101 - $103;
     $$0250279 = 2;$$1249 = $104;$$1272 = $84;
    }
   } else {
    $$0250279 = $$0250278;$$1249 = $69;$$1272 = $84;
   }
  }
  $105 = $$1249 == 0.0;
  if (!($105)) {
   label = 43;
   break;
  }
  $106 = ($$0253|0)>($10|0);
  if ($106) {
   $$3261357 = 0;$$4267358$in = $$0253;
   while(1) {
    $$4267358 = (($$4267358$in) + -1)|0;
    $107 = (($5) + ($$4267358<<2)|0);
    $108 = load4($107);
    $109 = $108 | $$3261357;
    $110 = ($$4267358|0)>($10|0);
    if ($110) {
     $$3261357 = $109;$$4267358$in = $$4267358;
    } else {
     break;
    }
   }
   $111 = ($109|0)==(0);
   if ($111) {
    $$0256 = 1;
   } else {
    $$0251$in = $15;$$1254$in = $$0253;
    label = 42;
    break;
   }
  } else {
   $$0256 = 1;
  }
  while(1) {
   $112 = (($10) - ($$0256))|0;
   $113 = (($5) + ($112<<2)|0);
   $114 = load4($113);
   $115 = ($114|0)==(0);
   $116 = (($$0256) + 1)|0;
   if ($115) {
    $$0256 = $116;
   } else {
    break;
   }
  }
  $117 = (($$0256) + ($$0253))|0;
  $118 = ($$0256|0)>(0);
  if ($118) {
   $$5268370$in = $$0253;
  } else {
   $$0253 = $117;
   continue;
  }
  while(1) {
   $$5268370 = (($$5268370$in) + 1)|0;
   $119 = (($$5268370) + ($$))|0;
   $120 = (1972 + ($119<<2)|0);
   $121 = load4($120);
   $122 = (+($121|0));
   $123 = (($$5268370$in) + ($3))|0;
   $124 = (($6) + ($123<<3)|0);
   stored($124,$122);
   if ($33) {
    $$1363 = 0.0;$$4262362 = 0;
    while(1) {
     $125 = (($0) + ($$4262362<<3)|0);
     $126 = loadd($125);
     $127 = (($123) - ($$4262362))|0;
     $128 = (($6) + ($127<<3)|0);
     $129 = loadd($128);
     $130 = $126 * $129;
     $131 = $$1363 + $130;
     $132 = (($$4262362) + 1)|0;
     $exitcond404 = ($132|0)==($3|0);
     if ($exitcond404) {
      $$1$lcssa = $131;
      break;
     } else {
      $$1363 = $131;$$4262362 = $132;
     }
    }
   } else {
    $$1$lcssa = 0.0;
   }
   $133 = (($8) + ($$5268370<<3)|0);
   stored($133,$$1$lcssa);
   $134 = ($$5268370|0)<($117|0);
   if ($134) {
    $$5268370$in = $$5268370;
   } else {
    $$0253 = $117;
    continue L17;
   }
  }
 }
 do {
  if ((label|0) == 42) {
   while(1) {
    label = 0;
    $$0251 = (($$0251$in) + -24)|0;
    $$1254 = (($$1254$in) + -1)|0;
    $135 = (($5) + ($$1254<<2)|0);
    $136 = load4($135);
    $137 = ($136|0)==(0);
    if ($137) {
     $$0251$in = $$0251;$$1254$in = $$1254;
     label = 42;
    } else {
     $$1252 = $$0251;$$2255 = $$1254;
     break;
    }
   }
  }
  else if ((label|0) == 43) {
   $138 = (0 - ($15))|0;
   $139 = (+_scalbn($$1249,$138));
   $140 = !($139 >= 16777216.0);
   if ($140) {
    $151 = (~~(($139)));
    $152 = (($5) + ($$0253<<2)|0);
    store4($152,$151);
    $$1252 = $15;$$2255 = $$0253;
    break;
   } else {
    $141 = $139 * 5.9604644775390625E-8;
    $142 = (~~(($141)));
    $143 = (+($142|0));
    $144 = $143 * 16777216.0;
    $145 = $139 - $144;
    $146 = (~~(($145)));
    $147 = (($5) + ($$0253<<2)|0);
    store4($147,$146);
    $148 = (($$0253) + 1)|0;
    $149 = (($$neg) + ($2))|0;
    $150 = (($5) + ($148<<2)|0);
    store4($150,$142);
    $$1252 = $149;$$2255 = $148;
    break;
   }
  }
 } while(0);
 $153 = ($$2255|0)>(-1);
 if ($153) {
  $154 = (+_scalbn(1.0,$$1252));
  $$2341 = $154;$$6269340 = $$2255;
  while(1) {
   $155 = (($5) + ($$6269340<<2)|0);
   $156 = load4($155);
   $157 = (+($156|0));
   $158 = $$2341 * $157;
   $159 = (($8) + ($$6269340<<3)|0);
   stored($159,$158);
   $160 = $$2341 * 5.9604644775390625E-8;
   $161 = (($$6269340) + -1)|0;
   $162 = ($$6269340|0)>(0);
   if ($162) {
    $$2341 = $160;$$6269340 = $161;
   } else {
    break;
   }
  }
  if ($153) {
   $$7270337 = $$2255;
   while(1) {
    $163 = (($$2255) - ($$7270337))|0;
    $$1257332 = 0;$$3333 = 0.0;
    while(1) {
     $164 = (1200 + ($$1257332<<3)|0);
     $165 = loadd($164);
     $166 = (($$1257332) + ($$7270337))|0;
     $167 = (($8) + ($166<<3)|0);
     $168 = loadd($167);
     $169 = $165 * $168;
     $170 = $$3333 + $169;
     $171 = (($$1257332) + 1)|0;
     $172 = ($$1257332|0)>=($10|0);
     $173 = ($$1257332|0)>=($163|0);
     $or$cond = $172 | $173;
     if ($or$cond) {
      break;
     } else {
      $$1257332 = $171;$$3333 = $170;
     }
    }
    $174 = (($7) + ($163<<3)|0);
    stored($174,$170);
    $175 = (($$7270337) + -1)|0;
    $176 = ($$7270337|0)>(0);
    if ($176) {
     $$7270337 = $175;
    } else {
     break;
    }
   }
  }
 }
 L84: do {
  switch ($4|0) {
  case 0:  {
   if ($153) {
    $$4310 = 0.0;$$8309 = $$2255;
    while(1) {
     $178 = (($7) + ($$8309<<3)|0);
     $179 = loadd($178);
     $180 = $$4310 + $179;
     $181 = (($$8309) + -1)|0;
     $182 = ($$8309|0)>(0);
     if ($182) {
      $$4310 = $180;$$8309 = $181;
     } else {
      $$4$lcssa = $180;
      break;
     }
    }
   } else {
    $$4$lcssa = 0.0;
   }
   $183 = ($$0250279|0)==(0);
   $184 = -$$4$lcssa;
   $185 = $183 ? $$4$lcssa : $184;
   stored($1,$185);
   break;
  }
  case 2: case 1:  {
   if ($153) {
    $$5318 = 0.0;$$9317 = $$2255;
    while(1) {
     $186 = (($7) + ($$9317<<3)|0);
     $187 = loadd($186);
     $188 = $$5318 + $187;
     $189 = (($$9317) + -1)|0;
     $190 = ($$9317|0)>(0);
     if ($190) {
      $$5318 = $188;$$9317 = $189;
     } else {
      $$5$lcssa = $188;
      break;
     }
    }
   } else {
    $$5$lcssa = 0.0;
   }
   $191 = ($$0250279|0)==(0);
   $192 = -$$5$lcssa;
   $193 = $191 ? $$5$lcssa : $192;
   stored($1,$193);
   $194 = loadd($7);
   $195 = $194 - $$5$lcssa;
   $196 = ($$2255|0)<(1);
   if ($196) {
    $$6$lcssa = $195;
   } else {
    $$10311 = 1;$$6312 = $195;
    while(1) {
     $197 = (($7) + ($$10311<<3)|0);
     $198 = loadd($197);
     $199 = $$6312 + $198;
     $200 = (($$10311) + 1)|0;
     $exitcond = ($$10311|0)==($$2255|0);
     if ($exitcond) {
      $$6$lcssa = $199;
      break;
     } else {
      $$10311 = $200;$$6312 = $199;
     }
    }
   }
   $201 = -$$6$lcssa;
   $202 = $191 ? $$6$lcssa : $201;
   $203 = ((($1)) + 8|0);
   stored($203,$202);
   break;
  }
  case 3:  {
   $177 = ($$2255|0)>(0);
   if ($177) {
    $$phi$trans$insert = (($7) + ($$2255<<3)|0);
    $$pre = loadd($$phi$trans$insert);
    $$11329 = $$2255;$210 = $$pre;
    while(1) {
     $205 = (($$11329) + -1)|0;
     $206 = (($7) + ($205<<3)|0);
     $207 = loadd($206);
     $208 = (($7) + ($$11329<<3)|0);
     $209 = $207 + $210;
     $211 = $207 - $209;
     $212 = $210 + $211;
     stored($208,$212);
     stored($206,$209);
     $213 = ($$11329|0)>(1);
     if ($213) {
      $$11329 = $205;$210 = $209;
     } else {
      break;
     }
    }
    $204 = ($$2255|0)>(1);
    if ($204) {
     $$phi$trans$insert407 = (($7) + ($$2255<<3)|0);
     $$pre408 = loadd($$phi$trans$insert407);
     $$12327 = $$2255;$219 = $$pre408;
     while(1) {
      $214 = (($$12327) + -1)|0;
      $215 = (($7) + ($214<<3)|0);
      $216 = loadd($215);
      $217 = (($7) + ($$12327<<3)|0);
      $218 = $216 + $219;
      $220 = $216 - $218;
      $221 = $219 + $220;
      stored($217,$221);
      stored($215,$218);
      $222 = ($214|0)>(1);
      if ($222) {
       $$12327 = $214;$219 = $218;
      } else {
       break;
      }
     }
     if ($204) {
      $$13322 = $$2255;$$7323 = 0.0;
      while(1) {
       $223 = (($7) + ($$13322<<3)|0);
       $224 = loadd($223);
       $225 = $$7323 + $224;
       $226 = (($$13322) + -1)|0;
       $227 = ($226|0)>(1);
       if ($227) {
        $$13322 = $226;$$7323 = $225;
       } else {
        $$7$lcssa = $225;
        break;
       }
      }
     } else {
      $$7$lcssa = 0.0;
     }
    } else {
     $$7$lcssa = 0.0;
    }
   } else {
    $$7$lcssa = 0.0;
   }
   $228 = ($$0250279|0)==(0);
   $229 = loadd($7);
   $230 = ((($7)) + 8|0);
   $231 = loadd($230);
   if ($228) {
    stored($1,$229);
    $232 = ((($1)) + 8|0);
    stored($232,$231);
    $233 = ((($1)) + 16|0);
    stored($233,$$7$lcssa);
    break L84;
   } else {
    $234 = -$229;
    stored($1,$234);
    $235 = -$231;
    $236 = ((($1)) + 8|0);
    stored($236,$235);
    $237 = -$$7$lcssa;
    $238 = ((($1)) + 16|0);
    stored($238,$237);
    break L84;
   }
   break;
  }
  default: {
  }
  }
 } while(0);
 $239 = $$1272 & 7;
 STACKTOP = sp;return ($239|0);
}
function _malloc($0) {
 $0 = $0|0;
 var $$$0190$i = 0, $$$0191$i = 0, $$$4349$i = 0, $$$i = 0, $$0 = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i17$i = 0, $$0$i18$i = 0, $$01$i$i = 0, $$0187$i = 0, $$0189$i = 0, $$0190$i = 0, $$0191$i = 0, $$0197 = 0, $$0199 = 0, $$0206$i$i = 0, $$0207$i$i = 0, $$0211$i$i = 0, $$0212$i$i = 0;
 var $$024370$i = 0, $$0286$i$i = 0, $$0287$i$i = 0, $$0288$i$i = 0, $$0294$i$i = 0, $$0295$i$i = 0, $$0340$i = 0, $$0342$i = 0, $$0343$i = 0, $$0345$i = 0, $$0351$i = 0, $$0356$i = 0, $$0357$$i = 0, $$0357$i = 0, $$0359$i = 0, $$0360$i = 0, $$0366$i = 0, $$1194$i = 0, $$1196$i = 0, $$124469$i = 0;
 var $$1290$i$i = 0, $$1292$i$i = 0, $$1341$i = 0, $$1346$i = 0, $$1361$i = 0, $$1368$i = 0, $$1372$i = 0, $$2247$ph$i = 0, $$2253$ph$i = 0, $$2353$i = 0, $$3$i = 0, $$3$i$i = 0, $$3$i201 = 0, $$3348$i = 0, $$3370$i = 0, $$4$lcssa$i = 0, $$413$i = 0, $$4349$lcssa$i = 0, $$434912$i = 0, $$4355$$4$i = 0;
 var $$4355$ph$i = 0, $$435511$i = 0, $$5256$i = 0, $$723947$i = 0, $$748$i = 0, $$not$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i19$i = 0, $$pre$i205 = 0, $$pre$i208 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i20$iZ2D = 0, $$pre$phi$i206Z2D = 0, $$pre$phi$iZ2D = 0, $$pre$phi10$i$iZ2D = 0, $$pre$phiZ2D = 0, $$pre9$i$i = 0, $1 = 0;
 var $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0, $1008 = 0, $1009 = 0, $101 = 0, $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0, $1015 = 0, $1016 = 0;
 var $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0, $1026 = 0, $1027 = 0, $1028 = 0, $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0, $1033 = 0, $1034 = 0;
 var $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0, $1044 = 0, $1045 = 0, $1046 = 0, $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0, $1051 = 0, $1052 = 0;
 var $1053 = 0, $1054 = 0, $1055 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0;
 var $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0;
 var $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0;
 var $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0;
 var $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0;
 var $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0;
 var $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0;
 var $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0;
 var $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0;
 var $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0;
 var $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0;
 var $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0;
 var $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0;
 var $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0;
 var $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0;
 var $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0;
 var $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0;
 var $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0;
 var $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0;
 var $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0;
 var $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0;
 var $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0;
 var $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0;
 var $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0;
 var $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0;
 var $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0;
 var $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0;
 var $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0;
 var $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0;
 var $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0;
 var $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0;
 var $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0;
 var $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0;
 var $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0;
 var $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0;
 var $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0;
 var $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0;
 var $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0;
 var $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0;
 var $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0;
 var $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0;
 var $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0;
 var $860 = 0, $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0;
 var $879 = 0, $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0;
 var $897 = 0, $898 = 0, $899 = 0, $9 = 0, $90 = 0, $900 = 0, $901 = 0, $902 = 0, $903 = 0, $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0;
 var $914 = 0, $915 = 0, $916 = 0, $917 = 0, $918 = 0, $919 = 0, $92 = 0, $920 = 0, $921 = 0, $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0;
 var $932 = 0, $933 = 0, $934 = 0, $935 = 0, $936 = 0, $937 = 0, $938 = 0, $939 = 0, $94 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0;
 var $950 = 0, $951 = 0, $952 = 0, $953 = 0, $954 = 0, $955 = 0, $956 = 0, $957 = 0, $958 = 0, $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0;
 var $969 = 0, $97 = 0, $970 = 0, $971 = 0, $972 = 0, $973 = 0, $974 = 0, $975 = 0, $976 = 0, $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0;
 var $987 = 0, $988 = 0, $989 = 0, $99 = 0, $990 = 0, $991 = 0, $992 = 0, $993 = 0, $994 = 0, $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $cond$i = 0, $cond$i$i = 0, $cond$i204 = 0, $exitcond$i$i = 0, $not$$i$i = 0, $not$$i22$i = 0;
 var $not$7$i = 0, $or$cond$i = 0, $or$cond$i211 = 0, $or$cond1$i = 0, $or$cond1$i210 = 0, $or$cond10$i = 0, $or$cond11$i = 0, $or$cond12$i = 0, $or$cond2$i = 0, $or$cond5$i = 0, $or$cond50$i = 0, $or$cond7$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = ($0>>>0)<(245);
 do {
  if ($2) {
   $3 = ($0>>>0)<(11);
   $4 = (($0) + 11)|0;
   $5 = $4 & -8;
   $6 = $3 ? 16 : $5;
   $7 = $6 >>> 3;
   $8 = load4(9708);
   $9 = $8 >>> $7;
   $10 = $9 & 3;
   $11 = ($10|0)==(0);
   if (!($11)) {
    $12 = $9 & 1;
    $13 = $12 ^ 1;
    $14 = (($13) + ($7))|0;
    $15 = $14 << 1;
    $16 = (9748 + ($15<<2)|0);
    $17 = ((($16)) + 8|0);
    $18 = load4($17);
    $19 = ((($18)) + 8|0);
    $20 = load4($19);
    $21 = ($16|0)==($20|0);
    do {
     if ($21) {
      $22 = 1 << $14;
      $23 = $22 ^ -1;
      $24 = $8 & $23;
      store4(9708,$24);
     } else {
      $25 = load4((9724));
      $26 = ($20>>>0)<($25>>>0);
      if ($26) {
       _abort();
       // unreachable;
      }
      $27 = ((($20)) + 12|0);
      $28 = load4($27);
      $29 = ($28|0)==($18|0);
      if ($29) {
       store4($27,$16);
       store4($17,$20);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $30 = $14 << 3;
    $31 = $30 | 3;
    $32 = ((($18)) + 4|0);
    store4($32,$31);
    $33 = (($18) + ($30)|0);
    $34 = ((($33)) + 4|0);
    $35 = load4($34);
    $36 = $35 | 1;
    store4($34,$36);
    $$0 = $19;
    STACKTOP = sp;return ($$0|0);
   }
   $37 = load4((9716));
   $38 = ($6>>>0)>($37>>>0);
   if ($38) {
    $39 = ($9|0)==(0);
    if (!($39)) {
     $40 = $9 << $7;
     $41 = 2 << $7;
     $42 = (0 - ($41))|0;
     $43 = $41 | $42;
     $44 = $40 & $43;
     $45 = (0 - ($44))|0;
     $46 = $44 & $45;
     $47 = (($46) + -1)|0;
     $48 = $47 >>> 12;
     $49 = $48 & 16;
     $50 = $47 >>> $49;
     $51 = $50 >>> 5;
     $52 = $51 & 8;
     $53 = $52 | $49;
     $54 = $50 >>> $52;
     $55 = $54 >>> 2;
     $56 = $55 & 4;
     $57 = $53 | $56;
     $58 = $54 >>> $56;
     $59 = $58 >>> 1;
     $60 = $59 & 2;
     $61 = $57 | $60;
     $62 = $58 >>> $60;
     $63 = $62 >>> 1;
     $64 = $63 & 1;
     $65 = $61 | $64;
     $66 = $62 >>> $64;
     $67 = (($65) + ($66))|0;
     $68 = $67 << 1;
     $69 = (9748 + ($68<<2)|0);
     $70 = ((($69)) + 8|0);
     $71 = load4($70);
     $72 = ((($71)) + 8|0);
     $73 = load4($72);
     $74 = ($69|0)==($73|0);
     do {
      if ($74) {
       $75 = 1 << $67;
       $76 = $75 ^ -1;
       $77 = $8 & $76;
       store4(9708,$77);
       $98 = $77;
      } else {
       $78 = load4((9724));
       $79 = ($73>>>0)<($78>>>0);
       if ($79) {
        _abort();
        // unreachable;
       }
       $80 = ((($73)) + 12|0);
       $81 = load4($80);
       $82 = ($81|0)==($71|0);
       if ($82) {
        store4($80,$69);
        store4($70,$73);
        $98 = $8;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $83 = $67 << 3;
     $84 = (($83) - ($6))|0;
     $85 = $6 | 3;
     $86 = ((($71)) + 4|0);
     store4($86,$85);
     $87 = (($71) + ($6)|0);
     $88 = $84 | 1;
     $89 = ((($87)) + 4|0);
     store4($89,$88);
     $90 = (($87) + ($84)|0);
     store4($90,$84);
     $91 = ($37|0)==(0);
     if (!($91)) {
      $92 = load4((9728));
      $93 = $37 >>> 3;
      $94 = $93 << 1;
      $95 = (9748 + ($94<<2)|0);
      $96 = 1 << $93;
      $97 = $98 & $96;
      $99 = ($97|0)==(0);
      if ($99) {
       $100 = $98 | $96;
       store4(9708,$100);
       $$pre = ((($95)) + 8|0);
       $$0199 = $95;$$pre$phiZ2D = $$pre;
      } else {
       $101 = ((($95)) + 8|0);
       $102 = load4($101);
       $103 = load4((9724));
       $104 = ($102>>>0)<($103>>>0);
       if ($104) {
        _abort();
        // unreachable;
       } else {
        $$0199 = $102;$$pre$phiZ2D = $101;
       }
      }
      store4($$pre$phiZ2D,$92);
      $105 = ((($$0199)) + 12|0);
      store4($105,$92);
      $106 = ((($92)) + 8|0);
      store4($106,$$0199);
      $107 = ((($92)) + 12|0);
      store4($107,$95);
     }
     store4((9716),$84);
     store4((9728),$87);
     $$0 = $72;
     STACKTOP = sp;return ($$0|0);
    }
    $108 = load4((9712));
    $109 = ($108|0)==(0);
    if ($109) {
     $$0197 = $6;
    } else {
     $110 = (0 - ($108))|0;
     $111 = $108 & $110;
     $112 = (($111) + -1)|0;
     $113 = $112 >>> 12;
     $114 = $113 & 16;
     $115 = $112 >>> $114;
     $116 = $115 >>> 5;
     $117 = $116 & 8;
     $118 = $117 | $114;
     $119 = $115 >>> $117;
     $120 = $119 >>> 2;
     $121 = $120 & 4;
     $122 = $118 | $121;
     $123 = $119 >>> $121;
     $124 = $123 >>> 1;
     $125 = $124 & 2;
     $126 = $122 | $125;
     $127 = $123 >>> $125;
     $128 = $127 >>> 1;
     $129 = $128 & 1;
     $130 = $126 | $129;
     $131 = $127 >>> $129;
     $132 = (($130) + ($131))|0;
     $133 = (10012 + ($132<<2)|0);
     $134 = load4($133);
     $135 = ((($134)) + 4|0);
     $136 = load4($135);
     $137 = $136 & -8;
     $138 = (($137) - ($6))|0;
     $$0189$i = $134;$$0190$i = $134;$$0191$i = $138;
     while(1) {
      $139 = ((($$0189$i)) + 16|0);
      $140 = load4($139);
      $141 = ($140|0)==(0|0);
      if ($141) {
       $142 = ((($$0189$i)) + 20|0);
       $143 = load4($142);
       $144 = ($143|0)==(0|0);
       if ($144) {
        break;
       } else {
        $146 = $143;
       }
      } else {
       $146 = $140;
      }
      $145 = ((($146)) + 4|0);
      $147 = load4($145);
      $148 = $147 & -8;
      $149 = (($148) - ($6))|0;
      $150 = ($149>>>0)<($$0191$i>>>0);
      $$$0191$i = $150 ? $149 : $$0191$i;
      $$$0190$i = $150 ? $146 : $$0190$i;
      $$0189$i = $146;$$0190$i = $$$0190$i;$$0191$i = $$$0191$i;
     }
     $151 = load4((9724));
     $152 = ($$0190$i>>>0)<($151>>>0);
     if ($152) {
      _abort();
      // unreachable;
     }
     $153 = (($$0190$i) + ($6)|0);
     $154 = ($$0190$i>>>0)<($153>>>0);
     if (!($154)) {
      _abort();
      // unreachable;
     }
     $155 = ((($$0190$i)) + 24|0);
     $156 = load4($155);
     $157 = ((($$0190$i)) + 12|0);
     $158 = load4($157);
     $159 = ($158|0)==($$0190$i|0);
     do {
      if ($159) {
       $169 = ((($$0190$i)) + 20|0);
       $170 = load4($169);
       $171 = ($170|0)==(0|0);
       if ($171) {
        $172 = ((($$0190$i)) + 16|0);
        $173 = load4($172);
        $174 = ($173|0)==(0|0);
        if ($174) {
         $$3$i = 0;
         break;
        } else {
         $$1194$i = $173;$$1196$i = $172;
        }
       } else {
        $$1194$i = $170;$$1196$i = $169;
       }
       while(1) {
        $175 = ((($$1194$i)) + 20|0);
        $176 = load4($175);
        $177 = ($176|0)==(0|0);
        if (!($177)) {
         $$1194$i = $176;$$1196$i = $175;
         continue;
        }
        $178 = ((($$1194$i)) + 16|0);
        $179 = load4($178);
        $180 = ($179|0)==(0|0);
        if ($180) {
         break;
        } else {
         $$1194$i = $179;$$1196$i = $178;
        }
       }
       $181 = ($$1196$i>>>0)<($151>>>0);
       if ($181) {
        _abort();
        // unreachable;
       } else {
        store4($$1196$i,0);
        $$3$i = $$1194$i;
        break;
       }
      } else {
       $160 = ((($$0190$i)) + 8|0);
       $161 = load4($160);
       $162 = ($161>>>0)<($151>>>0);
       if ($162) {
        _abort();
        // unreachable;
       }
       $163 = ((($161)) + 12|0);
       $164 = load4($163);
       $165 = ($164|0)==($$0190$i|0);
       if (!($165)) {
        _abort();
        // unreachable;
       }
       $166 = ((($158)) + 8|0);
       $167 = load4($166);
       $168 = ($167|0)==($$0190$i|0);
       if ($168) {
        store4($163,$158);
        store4($166,$161);
        $$3$i = $158;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $182 = ($156|0)==(0|0);
     do {
      if (!($182)) {
       $183 = ((($$0190$i)) + 28|0);
       $184 = load4($183);
       $185 = (10012 + ($184<<2)|0);
       $186 = load4($185);
       $187 = ($$0190$i|0)==($186|0);
       if ($187) {
        store4($185,$$3$i);
        $cond$i = ($$3$i|0)==(0|0);
        if ($cond$i) {
         $188 = 1 << $184;
         $189 = $188 ^ -1;
         $190 = $108 & $189;
         store4((9712),$190);
         break;
        }
       } else {
        $191 = load4((9724));
        $192 = ($156>>>0)<($191>>>0);
        if ($192) {
         _abort();
         // unreachable;
        }
        $193 = ((($156)) + 16|0);
        $194 = load4($193);
        $195 = ($194|0)==($$0190$i|0);
        if ($195) {
         store4($193,$$3$i);
        } else {
         $196 = ((($156)) + 20|0);
         store4($196,$$3$i);
        }
        $197 = ($$3$i|0)==(0|0);
        if ($197) {
         break;
        }
       }
       $198 = load4((9724));
       $199 = ($$3$i>>>0)<($198>>>0);
       if ($199) {
        _abort();
        // unreachable;
       }
       $200 = ((($$3$i)) + 24|0);
       store4($200,$156);
       $201 = ((($$0190$i)) + 16|0);
       $202 = load4($201);
       $203 = ($202|0)==(0|0);
       do {
        if (!($203)) {
         $204 = ($202>>>0)<($198>>>0);
         if ($204) {
          _abort();
          // unreachable;
         } else {
          $205 = ((($$3$i)) + 16|0);
          store4($205,$202);
          $206 = ((($202)) + 24|0);
          store4($206,$$3$i);
          break;
         }
        }
       } while(0);
       $207 = ((($$0190$i)) + 20|0);
       $208 = load4($207);
       $209 = ($208|0)==(0|0);
       if (!($209)) {
        $210 = load4((9724));
        $211 = ($208>>>0)<($210>>>0);
        if ($211) {
         _abort();
         // unreachable;
        } else {
         $212 = ((($$3$i)) + 20|0);
         store4($212,$208);
         $213 = ((($208)) + 24|0);
         store4($213,$$3$i);
         break;
        }
       }
      }
     } while(0);
     $214 = ($$0191$i>>>0)<(16);
     if ($214) {
      $215 = (($$0191$i) + ($6))|0;
      $216 = $215 | 3;
      $217 = ((($$0190$i)) + 4|0);
      store4($217,$216);
      $218 = (($$0190$i) + ($215)|0);
      $219 = ((($218)) + 4|0);
      $220 = load4($219);
      $221 = $220 | 1;
      store4($219,$221);
     } else {
      $222 = $6 | 3;
      $223 = ((($$0190$i)) + 4|0);
      store4($223,$222);
      $224 = $$0191$i | 1;
      $225 = ((($153)) + 4|0);
      store4($225,$224);
      $226 = (($153) + ($$0191$i)|0);
      store4($226,$$0191$i);
      $227 = ($37|0)==(0);
      if (!($227)) {
       $228 = load4((9728));
       $229 = $37 >>> 3;
       $230 = $229 << 1;
       $231 = (9748 + ($230<<2)|0);
       $232 = 1 << $229;
       $233 = $8 & $232;
       $234 = ($233|0)==(0);
       if ($234) {
        $235 = $8 | $232;
        store4(9708,$235);
        $$pre$i = ((($231)) + 8|0);
        $$0187$i = $231;$$pre$phi$iZ2D = $$pre$i;
       } else {
        $236 = ((($231)) + 8|0);
        $237 = load4($236);
        $238 = load4((9724));
        $239 = ($237>>>0)<($238>>>0);
        if ($239) {
         _abort();
         // unreachable;
        } else {
         $$0187$i = $237;$$pre$phi$iZ2D = $236;
        }
       }
       store4($$pre$phi$iZ2D,$228);
       $240 = ((($$0187$i)) + 12|0);
       store4($240,$228);
       $241 = ((($228)) + 8|0);
       store4($241,$$0187$i);
       $242 = ((($228)) + 12|0);
       store4($242,$231);
      }
      store4((9716),$$0191$i);
      store4((9728),$153);
     }
     $243 = ((($$0190$i)) + 8|0);
     $$0 = $243;
     STACKTOP = sp;return ($$0|0);
    }
   } else {
    $$0197 = $6;
   }
  } else {
   $244 = ($0>>>0)>(4294967231);
   if ($244) {
    $$0197 = -1;
   } else {
    $245 = (($0) + 11)|0;
    $246 = $245 & -8;
    $247 = load4((9712));
    $248 = ($247|0)==(0);
    if ($248) {
     $$0197 = $246;
    } else {
     $249 = (0 - ($246))|0;
     $250 = $245 >>> 8;
     $251 = ($250|0)==(0);
     if ($251) {
      $$0356$i = 0;
     } else {
      $252 = ($246>>>0)>(16777215);
      if ($252) {
       $$0356$i = 31;
      } else {
       $253 = (($250) + 1048320)|0;
       $254 = $253 >>> 16;
       $255 = $254 & 8;
       $256 = $250 << $255;
       $257 = (($256) + 520192)|0;
       $258 = $257 >>> 16;
       $259 = $258 & 4;
       $260 = $259 | $255;
       $261 = $256 << $259;
       $262 = (($261) + 245760)|0;
       $263 = $262 >>> 16;
       $264 = $263 & 2;
       $265 = $260 | $264;
       $266 = (14 - ($265))|0;
       $267 = $261 << $264;
       $268 = $267 >>> 15;
       $269 = (($266) + ($268))|0;
       $270 = $269 << 1;
       $271 = (($269) + 7)|0;
       $272 = $246 >>> $271;
       $273 = $272 & 1;
       $274 = $273 | $270;
       $$0356$i = $274;
      }
     }
     $275 = (10012 + ($$0356$i<<2)|0);
     $276 = load4($275);
     $277 = ($276|0)==(0|0);
     L123: do {
      if ($277) {
       $$2353$i = 0;$$3$i201 = 0;$$3348$i = $249;
       label = 86;
      } else {
       $278 = ($$0356$i|0)==(31);
       $279 = $$0356$i >>> 1;
       $280 = (25 - ($279))|0;
       $281 = $278 ? 0 : $280;
       $282 = $246 << $281;
       $$0340$i = 0;$$0345$i = $249;$$0351$i = $276;$$0357$i = $282;$$0360$i = 0;
       while(1) {
        $283 = ((($$0351$i)) + 4|0);
        $284 = load4($283);
        $285 = $284 & -8;
        $286 = (($285) - ($246))|0;
        $287 = ($286>>>0)<($$0345$i>>>0);
        if ($287) {
         $288 = ($286|0)==(0);
         if ($288) {
          $$413$i = $$0351$i;$$434912$i = 0;$$435511$i = $$0351$i;
          label = 90;
          break L123;
         } else {
          $$1341$i = $$0351$i;$$1346$i = $286;
         }
        } else {
         $$1341$i = $$0340$i;$$1346$i = $$0345$i;
        }
        $289 = ((($$0351$i)) + 20|0);
        $290 = load4($289);
        $291 = $$0357$i >>> 31;
        $292 = (((($$0351$i)) + 16|0) + ($291<<2)|0);
        $293 = load4($292);
        $294 = ($290|0)==(0|0);
        $295 = ($290|0)==($293|0);
        $or$cond1$i = $294 | $295;
        $$1361$i = $or$cond1$i ? $$0360$i : $290;
        $296 = ($293|0)==(0|0);
        $297 = $296&1;
        $298 = $297 ^ 1;
        $$0357$$i = $$0357$i << $298;
        if ($296) {
         $$2353$i = $$1361$i;$$3$i201 = $$1341$i;$$3348$i = $$1346$i;
         label = 86;
         break;
        } else {
         $$0340$i = $$1341$i;$$0345$i = $$1346$i;$$0351$i = $293;$$0357$i = $$0357$$i;$$0360$i = $$1361$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 86) {
      $299 = ($$2353$i|0)==(0|0);
      $300 = ($$3$i201|0)==(0|0);
      $or$cond$i = $299 & $300;
      if ($or$cond$i) {
       $301 = 2 << $$0356$i;
       $302 = (0 - ($301))|0;
       $303 = $301 | $302;
       $304 = $247 & $303;
       $305 = ($304|0)==(0);
       if ($305) {
        $$0197 = $246;
        break;
       }
       $306 = (0 - ($304))|0;
       $307 = $304 & $306;
       $308 = (($307) + -1)|0;
       $309 = $308 >>> 12;
       $310 = $309 & 16;
       $311 = $308 >>> $310;
       $312 = $311 >>> 5;
       $313 = $312 & 8;
       $314 = $313 | $310;
       $315 = $311 >>> $313;
       $316 = $315 >>> 2;
       $317 = $316 & 4;
       $318 = $314 | $317;
       $319 = $315 >>> $317;
       $320 = $319 >>> 1;
       $321 = $320 & 2;
       $322 = $318 | $321;
       $323 = $319 >>> $321;
       $324 = $323 >>> 1;
       $325 = $324 & 1;
       $326 = $322 | $325;
       $327 = $323 >>> $325;
       $328 = (($326) + ($327))|0;
       $329 = (10012 + ($328<<2)|0);
       $330 = load4($329);
       $$4355$ph$i = $330;
      } else {
       $$4355$ph$i = $$2353$i;
      }
      $331 = ($$4355$ph$i|0)==(0|0);
      if ($331) {
       $$4$lcssa$i = $$3$i201;$$4349$lcssa$i = $$3348$i;
      } else {
       $$413$i = $$3$i201;$$434912$i = $$3348$i;$$435511$i = $$4355$ph$i;
       label = 90;
      }
     }
     if ((label|0) == 90) {
      while(1) {
       label = 0;
       $332 = ((($$435511$i)) + 4|0);
       $333 = load4($332);
       $334 = $333 & -8;
       $335 = (($334) - ($246))|0;
       $336 = ($335>>>0)<($$434912$i>>>0);
       $$$4349$i = $336 ? $335 : $$434912$i;
       $$4355$$4$i = $336 ? $$435511$i : $$413$i;
       $337 = ((($$435511$i)) + 16|0);
       $338 = load4($337);
       $339 = ($338|0)==(0|0);
       if (!($339)) {
        $$413$i = $$4355$$4$i;$$434912$i = $$$4349$i;$$435511$i = $338;
        label = 90;
        continue;
       }
       $340 = ((($$435511$i)) + 20|0);
       $341 = load4($340);
       $342 = ($341|0)==(0|0);
       if ($342) {
        $$4$lcssa$i = $$4355$$4$i;$$4349$lcssa$i = $$$4349$i;
        break;
       } else {
        $$413$i = $$4355$$4$i;$$434912$i = $$$4349$i;$$435511$i = $341;
        label = 90;
       }
      }
     }
     $343 = ($$4$lcssa$i|0)==(0|0);
     if ($343) {
      $$0197 = $246;
     } else {
      $344 = load4((9716));
      $345 = (($344) - ($246))|0;
      $346 = ($$4349$lcssa$i>>>0)<($345>>>0);
      if ($346) {
       $347 = load4((9724));
       $348 = ($$4$lcssa$i>>>0)<($347>>>0);
       if ($348) {
        _abort();
        // unreachable;
       }
       $349 = (($$4$lcssa$i) + ($246)|0);
       $350 = ($$4$lcssa$i>>>0)<($349>>>0);
       if (!($350)) {
        _abort();
        // unreachable;
       }
       $351 = ((($$4$lcssa$i)) + 24|0);
       $352 = load4($351);
       $353 = ((($$4$lcssa$i)) + 12|0);
       $354 = load4($353);
       $355 = ($354|0)==($$4$lcssa$i|0);
       do {
        if ($355) {
         $365 = ((($$4$lcssa$i)) + 20|0);
         $366 = load4($365);
         $367 = ($366|0)==(0|0);
         if ($367) {
          $368 = ((($$4$lcssa$i)) + 16|0);
          $369 = load4($368);
          $370 = ($369|0)==(0|0);
          if ($370) {
           $$3370$i = 0;
           break;
          } else {
           $$1368$i = $369;$$1372$i = $368;
          }
         } else {
          $$1368$i = $366;$$1372$i = $365;
         }
         while(1) {
          $371 = ((($$1368$i)) + 20|0);
          $372 = load4($371);
          $373 = ($372|0)==(0|0);
          if (!($373)) {
           $$1368$i = $372;$$1372$i = $371;
           continue;
          }
          $374 = ((($$1368$i)) + 16|0);
          $375 = load4($374);
          $376 = ($375|0)==(0|0);
          if ($376) {
           break;
          } else {
           $$1368$i = $375;$$1372$i = $374;
          }
         }
         $377 = ($$1372$i>>>0)<($347>>>0);
         if ($377) {
          _abort();
          // unreachable;
         } else {
          store4($$1372$i,0);
          $$3370$i = $$1368$i;
          break;
         }
        } else {
         $356 = ((($$4$lcssa$i)) + 8|0);
         $357 = load4($356);
         $358 = ($357>>>0)<($347>>>0);
         if ($358) {
          _abort();
          // unreachable;
         }
         $359 = ((($357)) + 12|0);
         $360 = load4($359);
         $361 = ($360|0)==($$4$lcssa$i|0);
         if (!($361)) {
          _abort();
          // unreachable;
         }
         $362 = ((($354)) + 8|0);
         $363 = load4($362);
         $364 = ($363|0)==($$4$lcssa$i|0);
         if ($364) {
          store4($359,$354);
          store4($362,$357);
          $$3370$i = $354;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $378 = ($352|0)==(0|0);
       do {
        if ($378) {
         $470 = $247;
        } else {
         $379 = ((($$4$lcssa$i)) + 28|0);
         $380 = load4($379);
         $381 = (10012 + ($380<<2)|0);
         $382 = load4($381);
         $383 = ($$4$lcssa$i|0)==($382|0);
         if ($383) {
          store4($381,$$3370$i);
          $cond$i204 = ($$3370$i|0)==(0|0);
          if ($cond$i204) {
           $384 = 1 << $380;
           $385 = $384 ^ -1;
           $386 = $247 & $385;
           store4((9712),$386);
           $470 = $386;
           break;
          }
         } else {
          $387 = load4((9724));
          $388 = ($352>>>0)<($387>>>0);
          if ($388) {
           _abort();
           // unreachable;
          }
          $389 = ((($352)) + 16|0);
          $390 = load4($389);
          $391 = ($390|0)==($$4$lcssa$i|0);
          if ($391) {
           store4($389,$$3370$i);
          } else {
           $392 = ((($352)) + 20|0);
           store4($392,$$3370$i);
          }
          $393 = ($$3370$i|0)==(0|0);
          if ($393) {
           $470 = $247;
           break;
          }
         }
         $394 = load4((9724));
         $395 = ($$3370$i>>>0)<($394>>>0);
         if ($395) {
          _abort();
          // unreachable;
         }
         $396 = ((($$3370$i)) + 24|0);
         store4($396,$352);
         $397 = ((($$4$lcssa$i)) + 16|0);
         $398 = load4($397);
         $399 = ($398|0)==(0|0);
         do {
          if (!($399)) {
           $400 = ($398>>>0)<($394>>>0);
           if ($400) {
            _abort();
            // unreachable;
           } else {
            $401 = ((($$3370$i)) + 16|0);
            store4($401,$398);
            $402 = ((($398)) + 24|0);
            store4($402,$$3370$i);
            break;
           }
          }
         } while(0);
         $403 = ((($$4$lcssa$i)) + 20|0);
         $404 = load4($403);
         $405 = ($404|0)==(0|0);
         if ($405) {
          $470 = $247;
         } else {
          $406 = load4((9724));
          $407 = ($404>>>0)<($406>>>0);
          if ($407) {
           _abort();
           // unreachable;
          } else {
           $408 = ((($$3370$i)) + 20|0);
           store4($408,$404);
           $409 = ((($404)) + 24|0);
           store4($409,$$3370$i);
           $470 = $247;
           break;
          }
         }
        }
       } while(0);
       $410 = ($$4349$lcssa$i>>>0)<(16);
       do {
        if ($410) {
         $411 = (($$4349$lcssa$i) + ($246))|0;
         $412 = $411 | 3;
         $413 = ((($$4$lcssa$i)) + 4|0);
         store4($413,$412);
         $414 = (($$4$lcssa$i) + ($411)|0);
         $415 = ((($414)) + 4|0);
         $416 = load4($415);
         $417 = $416 | 1;
         store4($415,$417);
        } else {
         $418 = $246 | 3;
         $419 = ((($$4$lcssa$i)) + 4|0);
         store4($419,$418);
         $420 = $$4349$lcssa$i | 1;
         $421 = ((($349)) + 4|0);
         store4($421,$420);
         $422 = (($349) + ($$4349$lcssa$i)|0);
         store4($422,$$4349$lcssa$i);
         $423 = $$4349$lcssa$i >>> 3;
         $424 = ($$4349$lcssa$i>>>0)<(256);
         if ($424) {
          $425 = $423 << 1;
          $426 = (9748 + ($425<<2)|0);
          $427 = load4(9708);
          $428 = 1 << $423;
          $429 = $427 & $428;
          $430 = ($429|0)==(0);
          if ($430) {
           $431 = $427 | $428;
           store4(9708,$431);
           $$pre$i205 = ((($426)) + 8|0);
           $$0366$i = $426;$$pre$phi$i206Z2D = $$pre$i205;
          } else {
           $432 = ((($426)) + 8|0);
           $433 = load4($432);
           $434 = load4((9724));
           $435 = ($433>>>0)<($434>>>0);
           if ($435) {
            _abort();
            // unreachable;
           } else {
            $$0366$i = $433;$$pre$phi$i206Z2D = $432;
           }
          }
          store4($$pre$phi$i206Z2D,$349);
          $436 = ((($$0366$i)) + 12|0);
          store4($436,$349);
          $437 = ((($349)) + 8|0);
          store4($437,$$0366$i);
          $438 = ((($349)) + 12|0);
          store4($438,$426);
          break;
         }
         $439 = $$4349$lcssa$i >>> 8;
         $440 = ($439|0)==(0);
         if ($440) {
          $$0359$i = 0;
         } else {
          $441 = ($$4349$lcssa$i>>>0)>(16777215);
          if ($441) {
           $$0359$i = 31;
          } else {
           $442 = (($439) + 1048320)|0;
           $443 = $442 >>> 16;
           $444 = $443 & 8;
           $445 = $439 << $444;
           $446 = (($445) + 520192)|0;
           $447 = $446 >>> 16;
           $448 = $447 & 4;
           $449 = $448 | $444;
           $450 = $445 << $448;
           $451 = (($450) + 245760)|0;
           $452 = $451 >>> 16;
           $453 = $452 & 2;
           $454 = $449 | $453;
           $455 = (14 - ($454))|0;
           $456 = $450 << $453;
           $457 = $456 >>> 15;
           $458 = (($455) + ($457))|0;
           $459 = $458 << 1;
           $460 = (($458) + 7)|0;
           $461 = $$4349$lcssa$i >>> $460;
           $462 = $461 & 1;
           $463 = $462 | $459;
           $$0359$i = $463;
          }
         }
         $464 = (10012 + ($$0359$i<<2)|0);
         $465 = ((($349)) + 28|0);
         store4($465,$$0359$i);
         $466 = ((($349)) + 16|0);
         $467 = ((($466)) + 4|0);
         store4($467,0);
         store4($466,0);
         $468 = 1 << $$0359$i;
         $469 = $470 & $468;
         $471 = ($469|0)==(0);
         if ($471) {
          $472 = $470 | $468;
          store4((9712),$472);
          store4($464,$349);
          $473 = ((($349)) + 24|0);
          store4($473,$464);
          $474 = ((($349)) + 12|0);
          store4($474,$349);
          $475 = ((($349)) + 8|0);
          store4($475,$349);
          break;
         }
         $476 = load4($464);
         $477 = ($$0359$i|0)==(31);
         $478 = $$0359$i >>> 1;
         $479 = (25 - ($478))|0;
         $480 = $477 ? 0 : $479;
         $481 = $$4349$lcssa$i << $480;
         $$0342$i = $481;$$0343$i = $476;
         while(1) {
          $482 = ((($$0343$i)) + 4|0);
          $483 = load4($482);
          $484 = $483 & -8;
          $485 = ($484|0)==($$4349$lcssa$i|0);
          if ($485) {
           label = 148;
           break;
          }
          $486 = $$0342$i >>> 31;
          $487 = (((($$0343$i)) + 16|0) + ($486<<2)|0);
          $488 = $$0342$i << 1;
          $489 = load4($487);
          $490 = ($489|0)==(0|0);
          if ($490) {
           label = 145;
           break;
          } else {
           $$0342$i = $488;$$0343$i = $489;
          }
         }
         if ((label|0) == 145) {
          $491 = load4((9724));
          $492 = ($487>>>0)<($491>>>0);
          if ($492) {
           _abort();
           // unreachable;
          } else {
           store4($487,$349);
           $493 = ((($349)) + 24|0);
           store4($493,$$0343$i);
           $494 = ((($349)) + 12|0);
           store4($494,$349);
           $495 = ((($349)) + 8|0);
           store4($495,$349);
           break;
          }
         }
         else if ((label|0) == 148) {
          $496 = ((($$0343$i)) + 8|0);
          $497 = load4($496);
          $498 = load4((9724));
          $499 = ($497>>>0)>=($498>>>0);
          $not$7$i = ($$0343$i>>>0)>=($498>>>0);
          $500 = $499 & $not$7$i;
          if ($500) {
           $501 = ((($497)) + 12|0);
           store4($501,$349);
           store4($496,$349);
           $502 = ((($349)) + 8|0);
           store4($502,$497);
           $503 = ((($349)) + 12|0);
           store4($503,$$0343$i);
           $504 = ((($349)) + 24|0);
           store4($504,0);
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $505 = ((($$4$lcssa$i)) + 8|0);
       $$0 = $505;
       STACKTOP = sp;return ($$0|0);
      } else {
       $$0197 = $246;
      }
     }
    }
   }
  }
 } while(0);
 $506 = load4((9716));
 $507 = ($506>>>0)<($$0197>>>0);
 if (!($507)) {
  $508 = (($506) - ($$0197))|0;
  $509 = load4((9728));
  $510 = ($508>>>0)>(15);
  if ($510) {
   $511 = (($509) + ($$0197)|0);
   store4((9728),$511);
   store4((9716),$508);
   $512 = $508 | 1;
   $513 = ((($511)) + 4|0);
   store4($513,$512);
   $514 = (($511) + ($508)|0);
   store4($514,$508);
   $515 = $$0197 | 3;
   $516 = ((($509)) + 4|0);
   store4($516,$515);
  } else {
   store4((9716),0);
   store4((9728),0);
   $517 = $506 | 3;
   $518 = ((($509)) + 4|0);
   store4($518,$517);
   $519 = (($509) + ($506)|0);
   $520 = ((($519)) + 4|0);
   $521 = load4($520);
   $522 = $521 | 1;
   store4($520,$522);
  }
  $523 = ((($509)) + 8|0);
  $$0 = $523;
  STACKTOP = sp;return ($$0|0);
 }
 $524 = load4((9720));
 $525 = ($524>>>0)>($$0197>>>0);
 if ($525) {
  $526 = (($524) - ($$0197))|0;
  store4((9720),$526);
  $527 = load4((9732));
  $528 = (($527) + ($$0197)|0);
  store4((9732),$528);
  $529 = $526 | 1;
  $530 = ((($528)) + 4|0);
  store4($530,$529);
  $531 = $$0197 | 3;
  $532 = ((($527)) + 4|0);
  store4($532,$531);
  $533 = ((($527)) + 8|0);
  $$0 = $533;
  STACKTOP = sp;return ($$0|0);
 }
 $534 = load4(10180);
 $535 = ($534|0)==(0);
 if ($535) {
  store4((10188),4096);
  store4((10184),4096);
  store4((10192),-1);
  store4((10196),-1);
  store4((10200),0);
  store4((10152),0);
  $536 = $1;
  $537 = $536 & -16;
  $538 = $537 ^ 1431655768;
  store4($1,$538);
  store4(10180,$538);
  $542 = 4096;
 } else {
  $$pre$i208 = load4((10188));
  $542 = $$pre$i208;
 }
 $539 = (($$0197) + 48)|0;
 $540 = (($$0197) + 47)|0;
 $541 = (($542) + ($540))|0;
 $543 = (0 - ($542))|0;
 $544 = $541 & $543;
 $545 = ($544>>>0)>($$0197>>>0);
 if (!($545)) {
  $$0 = 0;
  STACKTOP = sp;return ($$0|0);
 }
 $546 = load4((10148));
 $547 = ($546|0)==(0);
 if (!($547)) {
  $548 = load4((10140));
  $549 = (($548) + ($544))|0;
  $550 = ($549>>>0)<=($548>>>0);
  $551 = ($549>>>0)>($546>>>0);
  $or$cond1$i210 = $550 | $551;
  if ($or$cond1$i210) {
   $$0 = 0;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $552 = load4((10152));
 $553 = $552 & 4;
 $554 = ($553|0)==(0);
 L255: do {
  if ($554) {
   $555 = load4((9732));
   $556 = ($555|0)==(0|0);
   L257: do {
    if ($556) {
     label = 172;
    } else {
     $$0$i17$i = (10156);
     while(1) {
      $557 = load4($$0$i17$i);
      $558 = ($557>>>0)>($555>>>0);
      if (!($558)) {
       $559 = ((($$0$i17$i)) + 4|0);
       $560 = load4($559);
       $561 = (($557) + ($560)|0);
       $562 = ($561>>>0)>($555>>>0);
       if ($562) {
        break;
       }
      }
      $563 = ((($$0$i17$i)) + 8|0);
      $564 = load4($563);
      $565 = ($564|0)==(0|0);
      if ($565) {
       label = 172;
       break L257;
      } else {
       $$0$i17$i = $564;
      }
     }
     $588 = (($541) - ($524))|0;
     $589 = $588 & $543;
     $590 = ($589>>>0)<(2147483647);
     if ($590) {
      $591 = (_sbrk(($589|0))|0);
      $592 = load4($$0$i17$i);
      $593 = load4($559);
      $594 = (($592) + ($593)|0);
      $595 = ($591|0)==($594|0);
      if ($595) {
       $596 = ($591|0)==((-1)|0);
       if (!($596)) {
        $$723947$i = $589;$$748$i = $591;
        label = 190;
        break L255;
       }
      } else {
       $$2247$ph$i = $591;$$2253$ph$i = $589;
       label = 180;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 172) {
     $566 = (_sbrk(0)|0);
     $567 = ($566|0)==((-1)|0);
     if (!($567)) {
      $568 = $566;
      $569 = load4((10184));
      $570 = (($569) + -1)|0;
      $571 = $570 & $568;
      $572 = ($571|0)==(0);
      $573 = (($570) + ($568))|0;
      $574 = (0 - ($569))|0;
      $575 = $573 & $574;
      $576 = (($575) - ($568))|0;
      $577 = $572 ? 0 : $576;
      $$$i = (($577) + ($544))|0;
      $578 = load4((10140));
      $579 = (($$$i) + ($578))|0;
      $580 = ($$$i>>>0)>($$0197>>>0);
      $581 = ($$$i>>>0)<(2147483647);
      $or$cond$i211 = $580 & $581;
      if ($or$cond$i211) {
       $582 = load4((10148));
       $583 = ($582|0)==(0);
       if (!($583)) {
        $584 = ($579>>>0)<=($578>>>0);
        $585 = ($579>>>0)>($582>>>0);
        $or$cond2$i = $584 | $585;
        if ($or$cond2$i) {
         break;
        }
       }
       $586 = (_sbrk(($$$i|0))|0);
       $587 = ($586|0)==($566|0);
       if ($587) {
        $$723947$i = $$$i;$$748$i = $566;
        label = 190;
        break L255;
       } else {
        $$2247$ph$i = $586;$$2253$ph$i = $$$i;
        label = 180;
       }
      }
     }
    }
   } while(0);
   L274: do {
    if ((label|0) == 180) {
     $597 = (0 - ($$2253$ph$i))|0;
     $598 = ($$2247$ph$i|0)!=((-1)|0);
     $599 = ($$2253$ph$i>>>0)<(2147483647);
     $or$cond7$i = $599 & $598;
     $600 = ($539>>>0)>($$2253$ph$i>>>0);
     $or$cond10$i = $600 & $or$cond7$i;
     do {
      if ($or$cond10$i) {
       $601 = load4((10188));
       $602 = (($540) - ($$2253$ph$i))|0;
       $603 = (($602) + ($601))|0;
       $604 = (0 - ($601))|0;
       $605 = $603 & $604;
       $606 = ($605>>>0)<(2147483647);
       if ($606) {
        $607 = (_sbrk(($605|0))|0);
        $608 = ($607|0)==((-1)|0);
        if ($608) {
         (_sbrk(($597|0))|0);
         break L274;
        } else {
         $609 = (($605) + ($$2253$ph$i))|0;
         $$5256$i = $609;
         break;
        }
       } else {
        $$5256$i = $$2253$ph$i;
       }
      } else {
       $$5256$i = $$2253$ph$i;
      }
     } while(0);
     $610 = ($$2247$ph$i|0)==((-1)|0);
     if (!($610)) {
      $$723947$i = $$5256$i;$$748$i = $$2247$ph$i;
      label = 190;
      break L255;
     }
    }
   } while(0);
   $611 = load4((10152));
   $612 = $611 | 4;
   store4((10152),$612);
   label = 187;
  } else {
   label = 187;
  }
 } while(0);
 if ((label|0) == 187) {
  $613 = ($544>>>0)<(2147483647);
  if ($613) {
   $614 = (_sbrk(($544|0))|0);
   $615 = (_sbrk(0)|0);
   $616 = ($614|0)!=((-1)|0);
   $617 = ($615|0)!=((-1)|0);
   $or$cond5$i = $616 & $617;
   $618 = ($614>>>0)<($615>>>0);
   $or$cond11$i = $618 & $or$cond5$i;
   if ($or$cond11$i) {
    $619 = $615;
    $620 = $614;
    $621 = (($619) - ($620))|0;
    $622 = (($$0197) + 40)|0;
    $$not$i = ($621>>>0)>($622>>>0);
    if ($$not$i) {
     $$723947$i = $621;$$748$i = $614;
     label = 190;
    }
   }
  }
 }
 if ((label|0) == 190) {
  $623 = load4((10140));
  $624 = (($623) + ($$723947$i))|0;
  store4((10140),$624);
  $625 = load4((10144));
  $626 = ($624>>>0)>($625>>>0);
  if ($626) {
   store4((10144),$624);
  }
  $627 = load4((9732));
  $628 = ($627|0)==(0|0);
  do {
   if ($628) {
    $629 = load4((9724));
    $630 = ($629|0)==(0|0);
    $631 = ($$748$i>>>0)<($629>>>0);
    $or$cond12$i = $630 | $631;
    if ($or$cond12$i) {
     store4((9724),$$748$i);
    }
    store4((10156),$$748$i);
    store4((10160),$$723947$i);
    store4((10168),0);
    $632 = load4(10180);
    store4((9744),$632);
    store4((9740),-1);
    $$01$i$i = 0;
    while(1) {
     $633 = $$01$i$i << 1;
     $634 = (9748 + ($633<<2)|0);
     $635 = ((($634)) + 12|0);
     store4($635,$634);
     $636 = ((($634)) + 8|0);
     store4($636,$634);
     $637 = (($$01$i$i) + 1)|0;
     $exitcond$i$i = ($637|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $$01$i$i = $637;
     }
    }
    $638 = (($$723947$i) + -40)|0;
    $639 = ((($$748$i)) + 8|0);
    $640 = $639;
    $641 = $640 & 7;
    $642 = ($641|0)==(0);
    $643 = (0 - ($640))|0;
    $644 = $643 & 7;
    $645 = $642 ? 0 : $644;
    $646 = (($$748$i) + ($645)|0);
    $647 = (($638) - ($645))|0;
    store4((9732),$646);
    store4((9720),$647);
    $648 = $647 | 1;
    $649 = ((($646)) + 4|0);
    store4($649,$648);
    $650 = (($646) + ($647)|0);
    $651 = ((($650)) + 4|0);
    store4($651,40);
    $652 = load4((10196));
    store4((9736),$652);
   } else {
    $$024370$i = (10156);
    while(1) {
     $653 = load4($$024370$i);
     $654 = ((($$024370$i)) + 4|0);
     $655 = load4($654);
     $656 = (($653) + ($655)|0);
     $657 = ($$748$i|0)==($656|0);
     if ($657) {
      label = 200;
      break;
     }
     $658 = ((($$024370$i)) + 8|0);
     $659 = load4($658);
     $660 = ($659|0)==(0|0);
     if ($660) {
      break;
     } else {
      $$024370$i = $659;
     }
    }
    if ((label|0) == 200) {
     $661 = ((($$024370$i)) + 12|0);
     $662 = load4($661);
     $663 = $662 & 8;
     $664 = ($663|0)==(0);
     if ($664) {
      $665 = ($627>>>0)>=($653>>>0);
      $666 = ($627>>>0)<($$748$i>>>0);
      $or$cond50$i = $666 & $665;
      if ($or$cond50$i) {
       $667 = (($655) + ($$723947$i))|0;
       store4($654,$667);
       $668 = load4((9720));
       $669 = ((($627)) + 8|0);
       $670 = $669;
       $671 = $670 & 7;
       $672 = ($671|0)==(0);
       $673 = (0 - ($670))|0;
       $674 = $673 & 7;
       $675 = $672 ? 0 : $674;
       $676 = (($627) + ($675)|0);
       $677 = (($$723947$i) - ($675))|0;
       $678 = (($677) + ($668))|0;
       store4((9732),$676);
       store4((9720),$678);
       $679 = $678 | 1;
       $680 = ((($676)) + 4|0);
       store4($680,$679);
       $681 = (($676) + ($678)|0);
       $682 = ((($681)) + 4|0);
       store4($682,40);
       $683 = load4((10196));
       store4((9736),$683);
       break;
      }
     }
    }
    $684 = load4((9724));
    $685 = ($$748$i>>>0)<($684>>>0);
    if ($685) {
     store4((9724),$$748$i);
     $749 = $$748$i;
    } else {
     $749 = $684;
    }
    $686 = (($$748$i) + ($$723947$i)|0);
    $$124469$i = (10156);
    while(1) {
     $687 = load4($$124469$i);
     $688 = ($687|0)==($686|0);
     if ($688) {
      label = 208;
      break;
     }
     $689 = ((($$124469$i)) + 8|0);
     $690 = load4($689);
     $691 = ($690|0)==(0|0);
     if ($691) {
      $$0$i$i$i = (10156);
      break;
     } else {
      $$124469$i = $690;
     }
    }
    if ((label|0) == 208) {
     $692 = ((($$124469$i)) + 12|0);
     $693 = load4($692);
     $694 = $693 & 8;
     $695 = ($694|0)==(0);
     if ($695) {
      store4($$124469$i,$$748$i);
      $696 = ((($$124469$i)) + 4|0);
      $697 = load4($696);
      $698 = (($697) + ($$723947$i))|0;
      store4($696,$698);
      $699 = ((($$748$i)) + 8|0);
      $700 = $699;
      $701 = $700 & 7;
      $702 = ($701|0)==(0);
      $703 = (0 - ($700))|0;
      $704 = $703 & 7;
      $705 = $702 ? 0 : $704;
      $706 = (($$748$i) + ($705)|0);
      $707 = ((($686)) + 8|0);
      $708 = $707;
      $709 = $708 & 7;
      $710 = ($709|0)==(0);
      $711 = (0 - ($708))|0;
      $712 = $711 & 7;
      $713 = $710 ? 0 : $712;
      $714 = (($686) + ($713)|0);
      $715 = $714;
      $716 = $706;
      $717 = (($715) - ($716))|0;
      $718 = (($706) + ($$0197)|0);
      $719 = (($717) - ($$0197))|0;
      $720 = $$0197 | 3;
      $721 = ((($706)) + 4|0);
      store4($721,$720);
      $722 = ($714|0)==($627|0);
      do {
       if ($722) {
        $723 = load4((9720));
        $724 = (($723) + ($719))|0;
        store4((9720),$724);
        store4((9732),$718);
        $725 = $724 | 1;
        $726 = ((($718)) + 4|0);
        store4($726,$725);
       } else {
        $727 = load4((9728));
        $728 = ($714|0)==($727|0);
        if ($728) {
         $729 = load4((9716));
         $730 = (($729) + ($719))|0;
         store4((9716),$730);
         store4((9728),$718);
         $731 = $730 | 1;
         $732 = ((($718)) + 4|0);
         store4($732,$731);
         $733 = (($718) + ($730)|0);
         store4($733,$730);
         break;
        }
        $734 = ((($714)) + 4|0);
        $735 = load4($734);
        $736 = $735 & 3;
        $737 = ($736|0)==(1);
        if ($737) {
         $738 = $735 & -8;
         $739 = $735 >>> 3;
         $740 = ($735>>>0)<(256);
         L326: do {
          if ($740) {
           $741 = ((($714)) + 8|0);
           $742 = load4($741);
           $743 = ((($714)) + 12|0);
           $744 = load4($743);
           $745 = $739 << 1;
           $746 = (9748 + ($745<<2)|0);
           $747 = ($742|0)==($746|0);
           do {
            if (!($747)) {
             $748 = ($742>>>0)<($749>>>0);
             if ($748) {
              _abort();
              // unreachable;
             }
             $750 = ((($742)) + 12|0);
             $751 = load4($750);
             $752 = ($751|0)==($714|0);
             if ($752) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $753 = ($744|0)==($742|0);
           if ($753) {
            $754 = 1 << $739;
            $755 = $754 ^ -1;
            $756 = load4(9708);
            $757 = $756 & $755;
            store4(9708,$757);
            break;
           }
           $758 = ($744|0)==($746|0);
           do {
            if ($758) {
             $$pre9$i$i = ((($744)) + 8|0);
             $$pre$phi10$i$iZ2D = $$pre9$i$i;
            } else {
             $759 = ($744>>>0)<($749>>>0);
             if ($759) {
              _abort();
              // unreachable;
             }
             $760 = ((($744)) + 8|0);
             $761 = load4($760);
             $762 = ($761|0)==($714|0);
             if ($762) {
              $$pre$phi10$i$iZ2D = $760;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $763 = ((($742)) + 12|0);
           store4($763,$744);
           store4($$pre$phi10$i$iZ2D,$742);
          } else {
           $764 = ((($714)) + 24|0);
           $765 = load4($764);
           $766 = ((($714)) + 12|0);
           $767 = load4($766);
           $768 = ($767|0)==($714|0);
           do {
            if ($768) {
             $778 = ((($714)) + 16|0);
             $779 = ((($778)) + 4|0);
             $780 = load4($779);
             $781 = ($780|0)==(0|0);
             if ($781) {
              $782 = load4($778);
              $783 = ($782|0)==(0|0);
              if ($783) {
               $$3$i$i = 0;
               break;
              } else {
               $$1290$i$i = $782;$$1292$i$i = $778;
              }
             } else {
              $$1290$i$i = $780;$$1292$i$i = $779;
             }
             while(1) {
              $784 = ((($$1290$i$i)) + 20|0);
              $785 = load4($784);
              $786 = ($785|0)==(0|0);
              if (!($786)) {
               $$1290$i$i = $785;$$1292$i$i = $784;
               continue;
              }
              $787 = ((($$1290$i$i)) + 16|0);
              $788 = load4($787);
              $789 = ($788|0)==(0|0);
              if ($789) {
               break;
              } else {
               $$1290$i$i = $788;$$1292$i$i = $787;
              }
             }
             $790 = ($$1292$i$i>>>0)<($749>>>0);
             if ($790) {
              _abort();
              // unreachable;
             } else {
              store4($$1292$i$i,0);
              $$3$i$i = $$1290$i$i;
              break;
             }
            } else {
             $769 = ((($714)) + 8|0);
             $770 = load4($769);
             $771 = ($770>>>0)<($749>>>0);
             if ($771) {
              _abort();
              // unreachable;
             }
             $772 = ((($770)) + 12|0);
             $773 = load4($772);
             $774 = ($773|0)==($714|0);
             if (!($774)) {
              _abort();
              // unreachable;
             }
             $775 = ((($767)) + 8|0);
             $776 = load4($775);
             $777 = ($776|0)==($714|0);
             if ($777) {
              store4($772,$767);
              store4($775,$770);
              $$3$i$i = $767;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $791 = ($765|0)==(0|0);
           if ($791) {
            break;
           }
           $792 = ((($714)) + 28|0);
           $793 = load4($792);
           $794 = (10012 + ($793<<2)|0);
           $795 = load4($794);
           $796 = ($714|0)==($795|0);
           do {
            if ($796) {
             store4($794,$$3$i$i);
             $cond$i$i = ($$3$i$i|0)==(0|0);
             if (!($cond$i$i)) {
              break;
             }
             $797 = 1 << $793;
             $798 = $797 ^ -1;
             $799 = load4((9712));
             $800 = $799 & $798;
             store4((9712),$800);
             break L326;
            } else {
             $801 = load4((9724));
             $802 = ($765>>>0)<($801>>>0);
             if ($802) {
              _abort();
              // unreachable;
             }
             $803 = ((($765)) + 16|0);
             $804 = load4($803);
             $805 = ($804|0)==($714|0);
             if ($805) {
              store4($803,$$3$i$i);
             } else {
              $806 = ((($765)) + 20|0);
              store4($806,$$3$i$i);
             }
             $807 = ($$3$i$i|0)==(0|0);
             if ($807) {
              break L326;
             }
            }
           } while(0);
           $808 = load4((9724));
           $809 = ($$3$i$i>>>0)<($808>>>0);
           if ($809) {
            _abort();
            // unreachable;
           }
           $810 = ((($$3$i$i)) + 24|0);
           store4($810,$765);
           $811 = ((($714)) + 16|0);
           $812 = load4($811);
           $813 = ($812|0)==(0|0);
           do {
            if (!($813)) {
             $814 = ($812>>>0)<($808>>>0);
             if ($814) {
              _abort();
              // unreachable;
             } else {
              $815 = ((($$3$i$i)) + 16|0);
              store4($815,$812);
              $816 = ((($812)) + 24|0);
              store4($816,$$3$i$i);
              break;
             }
            }
           } while(0);
           $817 = ((($811)) + 4|0);
           $818 = load4($817);
           $819 = ($818|0)==(0|0);
           if ($819) {
            break;
           }
           $820 = load4((9724));
           $821 = ($818>>>0)<($820>>>0);
           if ($821) {
            _abort();
            // unreachable;
           } else {
            $822 = ((($$3$i$i)) + 20|0);
            store4($822,$818);
            $823 = ((($818)) + 24|0);
            store4($823,$$3$i$i);
            break;
           }
          }
         } while(0);
         $824 = (($714) + ($738)|0);
         $825 = (($738) + ($719))|0;
         $$0$i18$i = $824;$$0286$i$i = $825;
        } else {
         $$0$i18$i = $714;$$0286$i$i = $719;
        }
        $826 = ((($$0$i18$i)) + 4|0);
        $827 = load4($826);
        $828 = $827 & -2;
        store4($826,$828);
        $829 = $$0286$i$i | 1;
        $830 = ((($718)) + 4|0);
        store4($830,$829);
        $831 = (($718) + ($$0286$i$i)|0);
        store4($831,$$0286$i$i);
        $832 = $$0286$i$i >>> 3;
        $833 = ($$0286$i$i>>>0)<(256);
        if ($833) {
         $834 = $832 << 1;
         $835 = (9748 + ($834<<2)|0);
         $836 = load4(9708);
         $837 = 1 << $832;
         $838 = $836 & $837;
         $839 = ($838|0)==(0);
         do {
          if ($839) {
           $840 = $836 | $837;
           store4(9708,$840);
           $$pre$i19$i = ((($835)) + 8|0);
           $$0294$i$i = $835;$$pre$phi$i20$iZ2D = $$pre$i19$i;
          } else {
           $841 = ((($835)) + 8|0);
           $842 = load4($841);
           $843 = load4((9724));
           $844 = ($842>>>0)<($843>>>0);
           if (!($844)) {
            $$0294$i$i = $842;$$pre$phi$i20$iZ2D = $841;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         store4($$pre$phi$i20$iZ2D,$718);
         $845 = ((($$0294$i$i)) + 12|0);
         store4($845,$718);
         $846 = ((($718)) + 8|0);
         store4($846,$$0294$i$i);
         $847 = ((($718)) + 12|0);
         store4($847,$835);
         break;
        }
        $848 = $$0286$i$i >>> 8;
        $849 = ($848|0)==(0);
        do {
         if ($849) {
          $$0295$i$i = 0;
         } else {
          $850 = ($$0286$i$i>>>0)>(16777215);
          if ($850) {
           $$0295$i$i = 31;
           break;
          }
          $851 = (($848) + 1048320)|0;
          $852 = $851 >>> 16;
          $853 = $852 & 8;
          $854 = $848 << $853;
          $855 = (($854) + 520192)|0;
          $856 = $855 >>> 16;
          $857 = $856 & 4;
          $858 = $857 | $853;
          $859 = $854 << $857;
          $860 = (($859) + 245760)|0;
          $861 = $860 >>> 16;
          $862 = $861 & 2;
          $863 = $858 | $862;
          $864 = (14 - ($863))|0;
          $865 = $859 << $862;
          $866 = $865 >>> 15;
          $867 = (($864) + ($866))|0;
          $868 = $867 << 1;
          $869 = (($867) + 7)|0;
          $870 = $$0286$i$i >>> $869;
          $871 = $870 & 1;
          $872 = $871 | $868;
          $$0295$i$i = $872;
         }
        } while(0);
        $873 = (10012 + ($$0295$i$i<<2)|0);
        $874 = ((($718)) + 28|0);
        store4($874,$$0295$i$i);
        $875 = ((($718)) + 16|0);
        $876 = ((($875)) + 4|0);
        store4($876,0);
        store4($875,0);
        $877 = load4((9712));
        $878 = 1 << $$0295$i$i;
        $879 = $877 & $878;
        $880 = ($879|0)==(0);
        if ($880) {
         $881 = $877 | $878;
         store4((9712),$881);
         store4($873,$718);
         $882 = ((($718)) + 24|0);
         store4($882,$873);
         $883 = ((($718)) + 12|0);
         store4($883,$718);
         $884 = ((($718)) + 8|0);
         store4($884,$718);
         break;
        }
        $885 = load4($873);
        $886 = ($$0295$i$i|0)==(31);
        $887 = $$0295$i$i >>> 1;
        $888 = (25 - ($887))|0;
        $889 = $886 ? 0 : $888;
        $890 = $$0286$i$i << $889;
        $$0287$i$i = $890;$$0288$i$i = $885;
        while(1) {
         $891 = ((($$0288$i$i)) + 4|0);
         $892 = load4($891);
         $893 = $892 & -8;
         $894 = ($893|0)==($$0286$i$i|0);
         if ($894) {
          label = 278;
          break;
         }
         $895 = $$0287$i$i >>> 31;
         $896 = (((($$0288$i$i)) + 16|0) + ($895<<2)|0);
         $897 = $$0287$i$i << 1;
         $898 = load4($896);
         $899 = ($898|0)==(0|0);
         if ($899) {
          label = 275;
          break;
         } else {
          $$0287$i$i = $897;$$0288$i$i = $898;
         }
        }
        if ((label|0) == 275) {
         $900 = load4((9724));
         $901 = ($896>>>0)<($900>>>0);
         if ($901) {
          _abort();
          // unreachable;
         } else {
          store4($896,$718);
          $902 = ((($718)) + 24|0);
          store4($902,$$0288$i$i);
          $903 = ((($718)) + 12|0);
          store4($903,$718);
          $904 = ((($718)) + 8|0);
          store4($904,$718);
          break;
         }
        }
        else if ((label|0) == 278) {
         $905 = ((($$0288$i$i)) + 8|0);
         $906 = load4($905);
         $907 = load4((9724));
         $908 = ($906>>>0)>=($907>>>0);
         $not$$i22$i = ($$0288$i$i>>>0)>=($907>>>0);
         $909 = $908 & $not$$i22$i;
         if ($909) {
          $910 = ((($906)) + 12|0);
          store4($910,$718);
          store4($905,$718);
          $911 = ((($718)) + 8|0);
          store4($911,$906);
          $912 = ((($718)) + 12|0);
          store4($912,$$0288$i$i);
          $913 = ((($718)) + 24|0);
          store4($913,0);
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $1044 = ((($706)) + 8|0);
      $$0 = $1044;
      STACKTOP = sp;return ($$0|0);
     } else {
      $$0$i$i$i = (10156);
     }
    }
    while(1) {
     $914 = load4($$0$i$i$i);
     $915 = ($914>>>0)>($627>>>0);
     if (!($915)) {
      $916 = ((($$0$i$i$i)) + 4|0);
      $917 = load4($916);
      $918 = (($914) + ($917)|0);
      $919 = ($918>>>0)>($627>>>0);
      if ($919) {
       break;
      }
     }
     $920 = ((($$0$i$i$i)) + 8|0);
     $921 = load4($920);
     $$0$i$i$i = $921;
    }
    $922 = ((($918)) + -47|0);
    $923 = ((($922)) + 8|0);
    $924 = $923;
    $925 = $924 & 7;
    $926 = ($925|0)==(0);
    $927 = (0 - ($924))|0;
    $928 = $927 & 7;
    $929 = $926 ? 0 : $928;
    $930 = (($922) + ($929)|0);
    $931 = ((($627)) + 16|0);
    $932 = ($930>>>0)<($931>>>0);
    $933 = $932 ? $627 : $930;
    $934 = ((($933)) + 8|0);
    $935 = ((($933)) + 24|0);
    $936 = (($$723947$i) + -40)|0;
    $937 = ((($$748$i)) + 8|0);
    $938 = $937;
    $939 = $938 & 7;
    $940 = ($939|0)==(0);
    $941 = (0 - ($938))|0;
    $942 = $941 & 7;
    $943 = $940 ? 0 : $942;
    $944 = (($$748$i) + ($943)|0);
    $945 = (($936) - ($943))|0;
    store4((9732),$944);
    store4((9720),$945);
    $946 = $945 | 1;
    $947 = ((($944)) + 4|0);
    store4($947,$946);
    $948 = (($944) + ($945)|0);
    $949 = ((($948)) + 4|0);
    store4($949,40);
    $950 = load4((10196));
    store4((9736),$950);
    $951 = ((($933)) + 4|0);
    store4($951,27);
    ; store8($934,load8((10156),4),4); store8($934+8 | 0,load8((10156)+8 | 0,4),4);
    store4((10156),$$748$i);
    store4((10160),$$723947$i);
    store4((10168),0);
    store4((10164),$934);
    $$0$i$i = $935;
    while(1) {
     $952 = ((($$0$i$i)) + 4|0);
     store4($952,7);
     $953 = ((($952)) + 4|0);
     $954 = ($953>>>0)<($918>>>0);
     if ($954) {
      $$0$i$i = $952;
     } else {
      break;
     }
    }
    $955 = ($933|0)==($627|0);
    if (!($955)) {
     $956 = $933;
     $957 = $627;
     $958 = (($956) - ($957))|0;
     $959 = load4($951);
     $960 = $959 & -2;
     store4($951,$960);
     $961 = $958 | 1;
     $962 = ((($627)) + 4|0);
     store4($962,$961);
     store4($933,$958);
     $963 = $958 >>> 3;
     $964 = ($958>>>0)<(256);
     if ($964) {
      $965 = $963 << 1;
      $966 = (9748 + ($965<<2)|0);
      $967 = load4(9708);
      $968 = 1 << $963;
      $969 = $967 & $968;
      $970 = ($969|0)==(0);
      if ($970) {
       $971 = $967 | $968;
       store4(9708,$971);
       $$pre$i$i = ((($966)) + 8|0);
       $$0211$i$i = $966;$$pre$phi$i$iZ2D = $$pre$i$i;
      } else {
       $972 = ((($966)) + 8|0);
       $973 = load4($972);
       $974 = load4((9724));
       $975 = ($973>>>0)<($974>>>0);
       if ($975) {
        _abort();
        // unreachable;
       } else {
        $$0211$i$i = $973;$$pre$phi$i$iZ2D = $972;
       }
      }
      store4($$pre$phi$i$iZ2D,$627);
      $976 = ((($$0211$i$i)) + 12|0);
      store4($976,$627);
      $977 = ((($627)) + 8|0);
      store4($977,$$0211$i$i);
      $978 = ((($627)) + 12|0);
      store4($978,$966);
      break;
     }
     $979 = $958 >>> 8;
     $980 = ($979|0)==(0);
     if ($980) {
      $$0212$i$i = 0;
     } else {
      $981 = ($958>>>0)>(16777215);
      if ($981) {
       $$0212$i$i = 31;
      } else {
       $982 = (($979) + 1048320)|0;
       $983 = $982 >>> 16;
       $984 = $983 & 8;
       $985 = $979 << $984;
       $986 = (($985) + 520192)|0;
       $987 = $986 >>> 16;
       $988 = $987 & 4;
       $989 = $988 | $984;
       $990 = $985 << $988;
       $991 = (($990) + 245760)|0;
       $992 = $991 >>> 16;
       $993 = $992 & 2;
       $994 = $989 | $993;
       $995 = (14 - ($994))|0;
       $996 = $990 << $993;
       $997 = $996 >>> 15;
       $998 = (($995) + ($997))|0;
       $999 = $998 << 1;
       $1000 = (($998) + 7)|0;
       $1001 = $958 >>> $1000;
       $1002 = $1001 & 1;
       $1003 = $1002 | $999;
       $$0212$i$i = $1003;
      }
     }
     $1004 = (10012 + ($$0212$i$i<<2)|0);
     $1005 = ((($627)) + 28|0);
     store4($1005,$$0212$i$i);
     $1006 = ((($627)) + 20|0);
     store4($1006,0);
     store4($931,0);
     $1007 = load4((9712));
     $1008 = 1 << $$0212$i$i;
     $1009 = $1007 & $1008;
     $1010 = ($1009|0)==(0);
     if ($1010) {
      $1011 = $1007 | $1008;
      store4((9712),$1011);
      store4($1004,$627);
      $1012 = ((($627)) + 24|0);
      store4($1012,$1004);
      $1013 = ((($627)) + 12|0);
      store4($1013,$627);
      $1014 = ((($627)) + 8|0);
      store4($1014,$627);
      break;
     }
     $1015 = load4($1004);
     $1016 = ($$0212$i$i|0)==(31);
     $1017 = $$0212$i$i >>> 1;
     $1018 = (25 - ($1017))|0;
     $1019 = $1016 ? 0 : $1018;
     $1020 = $958 << $1019;
     $$0206$i$i = $1020;$$0207$i$i = $1015;
     while(1) {
      $1021 = ((($$0207$i$i)) + 4|0);
      $1022 = load4($1021);
      $1023 = $1022 & -8;
      $1024 = ($1023|0)==($958|0);
      if ($1024) {
       label = 304;
       break;
      }
      $1025 = $$0206$i$i >>> 31;
      $1026 = (((($$0207$i$i)) + 16|0) + ($1025<<2)|0);
      $1027 = $$0206$i$i << 1;
      $1028 = load4($1026);
      $1029 = ($1028|0)==(0|0);
      if ($1029) {
       label = 301;
       break;
      } else {
       $$0206$i$i = $1027;$$0207$i$i = $1028;
      }
     }
     if ((label|0) == 301) {
      $1030 = load4((9724));
      $1031 = ($1026>>>0)<($1030>>>0);
      if ($1031) {
       _abort();
       // unreachable;
      } else {
       store4($1026,$627);
       $1032 = ((($627)) + 24|0);
       store4($1032,$$0207$i$i);
       $1033 = ((($627)) + 12|0);
       store4($1033,$627);
       $1034 = ((($627)) + 8|0);
       store4($1034,$627);
       break;
      }
     }
     else if ((label|0) == 304) {
      $1035 = ((($$0207$i$i)) + 8|0);
      $1036 = load4($1035);
      $1037 = load4((9724));
      $1038 = ($1036>>>0)>=($1037>>>0);
      $not$$i$i = ($$0207$i$i>>>0)>=($1037>>>0);
      $1039 = $1038 & $not$$i$i;
      if ($1039) {
       $1040 = ((($1036)) + 12|0);
       store4($1040,$627);
       store4($1035,$627);
       $1041 = ((($627)) + 8|0);
       store4($1041,$1036);
       $1042 = ((($627)) + 12|0);
       store4($1042,$$0207$i$i);
       $1043 = ((($627)) + 24|0);
       store4($1043,0);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $1045 = load4((9720));
  $1046 = ($1045>>>0)>($$0197>>>0);
  if ($1046) {
   $1047 = (($1045) - ($$0197))|0;
   store4((9720),$1047);
   $1048 = load4((9732));
   $1049 = (($1048) + ($$0197)|0);
   store4((9732),$1049);
   $1050 = $1047 | 1;
   $1051 = ((($1049)) + 4|0);
   store4($1051,$1050);
   $1052 = $$0197 | 3;
   $1053 = ((($1048)) + 4|0);
   store4($1053,$1052);
   $1054 = ((($1048)) + 8|0);
   $$0 = $1054;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $1055 = (___errno_location()|0);
 store4($1055,12);
 $$0 = 0;
 STACKTOP = sp;return ($$0|0);
}
function _free($0) {
 $0 = $0|0;
 var $$0211$i = 0, $$0211$in$i = 0, $$0381 = 0, $$0382 = 0, $$0394 = 0, $$0401 = 0, $$1 = 0, $$1380 = 0, $$1385 = 0, $$1388 = 0, $$1396 = 0, $$1400 = 0, $$2 = 0, $$3 = 0, $$3398 = 0, $$pre = 0, $$pre$phi439Z2D = 0, $$pre$phi441Z2D = 0, $$pre$phiZ2D = 0, $$pre438 = 0;
 var $$pre440 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0;
 var $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0;
 var $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0;
 var $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0;
 var $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0;
 var $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0;
 var $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $cond418 = 0, $cond419 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + -8|0);
 $3 = load4((9724));
 $4 = ($2>>>0)<($3>>>0);
 if ($4) {
  _abort();
  // unreachable;
 }
 $5 = ((($0)) + -4|0);
 $6 = load4($5);
 $7 = $6 & 3;
 $8 = ($7|0)==(1);
 if ($8) {
  _abort();
  // unreachable;
 }
 $9 = $6 & -8;
 $10 = (($2) + ($9)|0);
 $11 = $6 & 1;
 $12 = ($11|0)==(0);
 do {
  if ($12) {
   $13 = load4($2);
   $14 = ($7|0)==(0);
   if ($14) {
    return;
   }
   $15 = (0 - ($13))|0;
   $16 = (($2) + ($15)|0);
   $17 = (($13) + ($9))|0;
   $18 = ($16>>>0)<($3>>>0);
   if ($18) {
    _abort();
    // unreachable;
   }
   $19 = load4((9728));
   $20 = ($16|0)==($19|0);
   if ($20) {
    $105 = ((($10)) + 4|0);
    $106 = load4($105);
    $107 = $106 & 3;
    $108 = ($107|0)==(3);
    if (!($108)) {
     $$1 = $16;$$1380 = $17;
     break;
    }
    store4((9716),$17);
    $109 = $106 & -2;
    store4($105,$109);
    $110 = $17 | 1;
    $111 = ((($16)) + 4|0);
    store4($111,$110);
    $112 = (($16) + ($17)|0);
    store4($112,$17);
    return;
   }
   $21 = $13 >>> 3;
   $22 = ($13>>>0)<(256);
   if ($22) {
    $23 = ((($16)) + 8|0);
    $24 = load4($23);
    $25 = ((($16)) + 12|0);
    $26 = load4($25);
    $27 = $21 << 1;
    $28 = (9748 + ($27<<2)|0);
    $29 = ($24|0)==($28|0);
    if (!($29)) {
     $30 = ($24>>>0)<($3>>>0);
     if ($30) {
      _abort();
      // unreachable;
     }
     $31 = ((($24)) + 12|0);
     $32 = load4($31);
     $33 = ($32|0)==($16|0);
     if (!($33)) {
      _abort();
      // unreachable;
     }
    }
    $34 = ($26|0)==($24|0);
    if ($34) {
     $35 = 1 << $21;
     $36 = $35 ^ -1;
     $37 = load4(9708);
     $38 = $37 & $36;
     store4(9708,$38);
     $$1 = $16;$$1380 = $17;
     break;
    }
    $39 = ($26|0)==($28|0);
    if ($39) {
     $$pre440 = ((($26)) + 8|0);
     $$pre$phi441Z2D = $$pre440;
    } else {
     $40 = ($26>>>0)<($3>>>0);
     if ($40) {
      _abort();
      // unreachable;
     }
     $41 = ((($26)) + 8|0);
     $42 = load4($41);
     $43 = ($42|0)==($16|0);
     if ($43) {
      $$pre$phi441Z2D = $41;
     } else {
      _abort();
      // unreachable;
     }
    }
    $44 = ((($24)) + 12|0);
    store4($44,$26);
    store4($$pre$phi441Z2D,$24);
    $$1 = $16;$$1380 = $17;
    break;
   }
   $45 = ((($16)) + 24|0);
   $46 = load4($45);
   $47 = ((($16)) + 12|0);
   $48 = load4($47);
   $49 = ($48|0)==($16|0);
   do {
    if ($49) {
     $59 = ((($16)) + 16|0);
     $60 = ((($59)) + 4|0);
     $61 = load4($60);
     $62 = ($61|0)==(0|0);
     if ($62) {
      $63 = load4($59);
      $64 = ($63|0)==(0|0);
      if ($64) {
       $$3 = 0;
       break;
      } else {
       $$1385 = $63;$$1388 = $59;
      }
     } else {
      $$1385 = $61;$$1388 = $60;
     }
     while(1) {
      $65 = ((($$1385)) + 20|0);
      $66 = load4($65);
      $67 = ($66|0)==(0|0);
      if (!($67)) {
       $$1385 = $66;$$1388 = $65;
       continue;
      }
      $68 = ((($$1385)) + 16|0);
      $69 = load4($68);
      $70 = ($69|0)==(0|0);
      if ($70) {
       break;
      } else {
       $$1385 = $69;$$1388 = $68;
      }
     }
     $71 = ($$1388>>>0)<($3>>>0);
     if ($71) {
      _abort();
      // unreachable;
     } else {
      store4($$1388,0);
      $$3 = $$1385;
      break;
     }
    } else {
     $50 = ((($16)) + 8|0);
     $51 = load4($50);
     $52 = ($51>>>0)<($3>>>0);
     if ($52) {
      _abort();
      // unreachable;
     }
     $53 = ((($51)) + 12|0);
     $54 = load4($53);
     $55 = ($54|0)==($16|0);
     if (!($55)) {
      _abort();
      // unreachable;
     }
     $56 = ((($48)) + 8|0);
     $57 = load4($56);
     $58 = ($57|0)==($16|0);
     if ($58) {
      store4($53,$48);
      store4($56,$51);
      $$3 = $48;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $72 = ($46|0)==(0|0);
   if ($72) {
    $$1 = $16;$$1380 = $17;
   } else {
    $73 = ((($16)) + 28|0);
    $74 = load4($73);
    $75 = (10012 + ($74<<2)|0);
    $76 = load4($75);
    $77 = ($16|0)==($76|0);
    if ($77) {
     store4($75,$$3);
     $cond418 = ($$3|0)==(0|0);
     if ($cond418) {
      $78 = 1 << $74;
      $79 = $78 ^ -1;
      $80 = load4((9712));
      $81 = $80 & $79;
      store4((9712),$81);
      $$1 = $16;$$1380 = $17;
      break;
     }
    } else {
     $82 = load4((9724));
     $83 = ($46>>>0)<($82>>>0);
     if ($83) {
      _abort();
      // unreachable;
     }
     $84 = ((($46)) + 16|0);
     $85 = load4($84);
     $86 = ($85|0)==($16|0);
     if ($86) {
      store4($84,$$3);
     } else {
      $87 = ((($46)) + 20|0);
      store4($87,$$3);
     }
     $88 = ($$3|0)==(0|0);
     if ($88) {
      $$1 = $16;$$1380 = $17;
      break;
     }
    }
    $89 = load4((9724));
    $90 = ($$3>>>0)<($89>>>0);
    if ($90) {
     _abort();
     // unreachable;
    }
    $91 = ((($$3)) + 24|0);
    store4($91,$46);
    $92 = ((($16)) + 16|0);
    $93 = load4($92);
    $94 = ($93|0)==(0|0);
    do {
     if (!($94)) {
      $95 = ($93>>>0)<($89>>>0);
      if ($95) {
       _abort();
       // unreachable;
      } else {
       $96 = ((($$3)) + 16|0);
       store4($96,$93);
       $97 = ((($93)) + 24|0);
       store4($97,$$3);
       break;
      }
     }
    } while(0);
    $98 = ((($92)) + 4|0);
    $99 = load4($98);
    $100 = ($99|0)==(0|0);
    if ($100) {
     $$1 = $16;$$1380 = $17;
    } else {
     $101 = load4((9724));
     $102 = ($99>>>0)<($101>>>0);
     if ($102) {
      _abort();
      // unreachable;
     } else {
      $103 = ((($$3)) + 20|0);
      store4($103,$99);
      $104 = ((($99)) + 24|0);
      store4($104,$$3);
      $$1 = $16;$$1380 = $17;
      break;
     }
    }
   }
  } else {
   $$1 = $2;$$1380 = $9;
  }
 } while(0);
 $113 = ($$1>>>0)<($10>>>0);
 if (!($113)) {
  _abort();
  // unreachable;
 }
 $114 = ((($10)) + 4|0);
 $115 = load4($114);
 $116 = $115 & 1;
 $117 = ($116|0)==(0);
 if ($117) {
  _abort();
  // unreachable;
 }
 $118 = $115 & 2;
 $119 = ($118|0)==(0);
 if ($119) {
  $120 = load4((9732));
  $121 = ($10|0)==($120|0);
  if ($121) {
   $122 = load4((9720));
   $123 = (($122) + ($$1380))|0;
   store4((9720),$123);
   store4((9732),$$1);
   $124 = $123 | 1;
   $125 = ((($$1)) + 4|0);
   store4($125,$124);
   $126 = load4((9728));
   $127 = ($$1|0)==($126|0);
   if (!($127)) {
    return;
   }
   store4((9728),0);
   store4((9716),0);
   return;
  }
  $128 = load4((9728));
  $129 = ($10|0)==($128|0);
  if ($129) {
   $130 = load4((9716));
   $131 = (($130) + ($$1380))|0;
   store4((9716),$131);
   store4((9728),$$1);
   $132 = $131 | 1;
   $133 = ((($$1)) + 4|0);
   store4($133,$132);
   $134 = (($$1) + ($131)|0);
   store4($134,$131);
   return;
  }
  $135 = $115 & -8;
  $136 = (($135) + ($$1380))|0;
  $137 = $115 >>> 3;
  $138 = ($115>>>0)<(256);
  do {
   if ($138) {
    $139 = ((($10)) + 8|0);
    $140 = load4($139);
    $141 = ((($10)) + 12|0);
    $142 = load4($141);
    $143 = $137 << 1;
    $144 = (9748 + ($143<<2)|0);
    $145 = ($140|0)==($144|0);
    if (!($145)) {
     $146 = load4((9724));
     $147 = ($140>>>0)<($146>>>0);
     if ($147) {
      _abort();
      // unreachable;
     }
     $148 = ((($140)) + 12|0);
     $149 = load4($148);
     $150 = ($149|0)==($10|0);
     if (!($150)) {
      _abort();
      // unreachable;
     }
    }
    $151 = ($142|0)==($140|0);
    if ($151) {
     $152 = 1 << $137;
     $153 = $152 ^ -1;
     $154 = load4(9708);
     $155 = $154 & $153;
     store4(9708,$155);
     break;
    }
    $156 = ($142|0)==($144|0);
    if ($156) {
     $$pre438 = ((($142)) + 8|0);
     $$pre$phi439Z2D = $$pre438;
    } else {
     $157 = load4((9724));
     $158 = ($142>>>0)<($157>>>0);
     if ($158) {
      _abort();
      // unreachable;
     }
     $159 = ((($142)) + 8|0);
     $160 = load4($159);
     $161 = ($160|0)==($10|0);
     if ($161) {
      $$pre$phi439Z2D = $159;
     } else {
      _abort();
      // unreachable;
     }
    }
    $162 = ((($140)) + 12|0);
    store4($162,$142);
    store4($$pre$phi439Z2D,$140);
   } else {
    $163 = ((($10)) + 24|0);
    $164 = load4($163);
    $165 = ((($10)) + 12|0);
    $166 = load4($165);
    $167 = ($166|0)==($10|0);
    do {
     if ($167) {
      $178 = ((($10)) + 16|0);
      $179 = ((($178)) + 4|0);
      $180 = load4($179);
      $181 = ($180|0)==(0|0);
      if ($181) {
       $182 = load4($178);
       $183 = ($182|0)==(0|0);
       if ($183) {
        $$3398 = 0;
        break;
       } else {
        $$1396 = $182;$$1400 = $178;
       }
      } else {
       $$1396 = $180;$$1400 = $179;
      }
      while(1) {
       $184 = ((($$1396)) + 20|0);
       $185 = load4($184);
       $186 = ($185|0)==(0|0);
       if (!($186)) {
        $$1396 = $185;$$1400 = $184;
        continue;
       }
       $187 = ((($$1396)) + 16|0);
       $188 = load4($187);
       $189 = ($188|0)==(0|0);
       if ($189) {
        break;
       } else {
        $$1396 = $188;$$1400 = $187;
       }
      }
      $190 = load4((9724));
      $191 = ($$1400>>>0)<($190>>>0);
      if ($191) {
       _abort();
       // unreachable;
      } else {
       store4($$1400,0);
       $$3398 = $$1396;
       break;
      }
     } else {
      $168 = ((($10)) + 8|0);
      $169 = load4($168);
      $170 = load4((9724));
      $171 = ($169>>>0)<($170>>>0);
      if ($171) {
       _abort();
       // unreachable;
      }
      $172 = ((($169)) + 12|0);
      $173 = load4($172);
      $174 = ($173|0)==($10|0);
      if (!($174)) {
       _abort();
       // unreachable;
      }
      $175 = ((($166)) + 8|0);
      $176 = load4($175);
      $177 = ($176|0)==($10|0);
      if ($177) {
       store4($172,$166);
       store4($175,$169);
       $$3398 = $166;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $192 = ($164|0)==(0|0);
    if (!($192)) {
     $193 = ((($10)) + 28|0);
     $194 = load4($193);
     $195 = (10012 + ($194<<2)|0);
     $196 = load4($195);
     $197 = ($10|0)==($196|0);
     if ($197) {
      store4($195,$$3398);
      $cond419 = ($$3398|0)==(0|0);
      if ($cond419) {
       $198 = 1 << $194;
       $199 = $198 ^ -1;
       $200 = load4((9712));
       $201 = $200 & $199;
       store4((9712),$201);
       break;
      }
     } else {
      $202 = load4((9724));
      $203 = ($164>>>0)<($202>>>0);
      if ($203) {
       _abort();
       // unreachable;
      }
      $204 = ((($164)) + 16|0);
      $205 = load4($204);
      $206 = ($205|0)==($10|0);
      if ($206) {
       store4($204,$$3398);
      } else {
       $207 = ((($164)) + 20|0);
       store4($207,$$3398);
      }
      $208 = ($$3398|0)==(0|0);
      if ($208) {
       break;
      }
     }
     $209 = load4((9724));
     $210 = ($$3398>>>0)<($209>>>0);
     if ($210) {
      _abort();
      // unreachable;
     }
     $211 = ((($$3398)) + 24|0);
     store4($211,$164);
     $212 = ((($10)) + 16|0);
     $213 = load4($212);
     $214 = ($213|0)==(0|0);
     do {
      if (!($214)) {
       $215 = ($213>>>0)<($209>>>0);
       if ($215) {
        _abort();
        // unreachable;
       } else {
        $216 = ((($$3398)) + 16|0);
        store4($216,$213);
        $217 = ((($213)) + 24|0);
        store4($217,$$3398);
        break;
       }
      }
     } while(0);
     $218 = ((($212)) + 4|0);
     $219 = load4($218);
     $220 = ($219|0)==(0|0);
     if (!($220)) {
      $221 = load4((9724));
      $222 = ($219>>>0)<($221>>>0);
      if ($222) {
       _abort();
       // unreachable;
      } else {
       $223 = ((($$3398)) + 20|0);
       store4($223,$219);
       $224 = ((($219)) + 24|0);
       store4($224,$$3398);
       break;
      }
     }
    }
   }
  } while(0);
  $225 = $136 | 1;
  $226 = ((($$1)) + 4|0);
  store4($226,$225);
  $227 = (($$1) + ($136)|0);
  store4($227,$136);
  $228 = load4((9728));
  $229 = ($$1|0)==($228|0);
  if ($229) {
   store4((9716),$136);
   return;
  } else {
   $$2 = $136;
  }
 } else {
  $230 = $115 & -2;
  store4($114,$230);
  $231 = $$1380 | 1;
  $232 = ((($$1)) + 4|0);
  store4($232,$231);
  $233 = (($$1) + ($$1380)|0);
  store4($233,$$1380);
  $$2 = $$1380;
 }
 $234 = $$2 >>> 3;
 $235 = ($$2>>>0)<(256);
 if ($235) {
  $236 = $234 << 1;
  $237 = (9748 + ($236<<2)|0);
  $238 = load4(9708);
  $239 = 1 << $234;
  $240 = $238 & $239;
  $241 = ($240|0)==(0);
  if ($241) {
   $242 = $238 | $239;
   store4(9708,$242);
   $$pre = ((($237)) + 8|0);
   $$0401 = $237;$$pre$phiZ2D = $$pre;
  } else {
   $243 = ((($237)) + 8|0);
   $244 = load4($243);
   $245 = load4((9724));
   $246 = ($244>>>0)<($245>>>0);
   if ($246) {
    _abort();
    // unreachable;
   } else {
    $$0401 = $244;$$pre$phiZ2D = $243;
   }
  }
  store4($$pre$phiZ2D,$$1);
  $247 = ((($$0401)) + 12|0);
  store4($247,$$1);
  $248 = ((($$1)) + 8|0);
  store4($248,$$0401);
  $249 = ((($$1)) + 12|0);
  store4($249,$237);
  return;
 }
 $250 = $$2 >>> 8;
 $251 = ($250|0)==(0);
 if ($251) {
  $$0394 = 0;
 } else {
  $252 = ($$2>>>0)>(16777215);
  if ($252) {
   $$0394 = 31;
  } else {
   $253 = (($250) + 1048320)|0;
   $254 = $253 >>> 16;
   $255 = $254 & 8;
   $256 = $250 << $255;
   $257 = (($256) + 520192)|0;
   $258 = $257 >>> 16;
   $259 = $258 & 4;
   $260 = $259 | $255;
   $261 = $256 << $259;
   $262 = (($261) + 245760)|0;
   $263 = $262 >>> 16;
   $264 = $263 & 2;
   $265 = $260 | $264;
   $266 = (14 - ($265))|0;
   $267 = $261 << $264;
   $268 = $267 >>> 15;
   $269 = (($266) + ($268))|0;
   $270 = $269 << 1;
   $271 = (($269) + 7)|0;
   $272 = $$2 >>> $271;
   $273 = $272 & 1;
   $274 = $273 | $270;
   $$0394 = $274;
  }
 }
 $275 = (10012 + ($$0394<<2)|0);
 $276 = ((($$1)) + 28|0);
 store4($276,$$0394);
 $277 = ((($$1)) + 16|0);
 $278 = ((($$1)) + 20|0);
 store4($278,0);
 store4($277,0);
 $279 = load4((9712));
 $280 = 1 << $$0394;
 $281 = $279 & $280;
 $282 = ($281|0)==(0);
 do {
  if ($282) {
   $283 = $279 | $280;
   store4((9712),$283);
   store4($275,$$1);
   $284 = ((($$1)) + 24|0);
   store4($284,$275);
   $285 = ((($$1)) + 12|0);
   store4($285,$$1);
   $286 = ((($$1)) + 8|0);
   store4($286,$$1);
  } else {
   $287 = load4($275);
   $288 = ($$0394|0)==(31);
   $289 = $$0394 >>> 1;
   $290 = (25 - ($289))|0;
   $291 = $288 ? 0 : $290;
   $292 = $$2 << $291;
   $$0381 = $292;$$0382 = $287;
   while(1) {
    $293 = ((($$0382)) + 4|0);
    $294 = load4($293);
    $295 = $294 & -8;
    $296 = ($295|0)==($$2|0);
    if ($296) {
     label = 130;
     break;
    }
    $297 = $$0381 >>> 31;
    $298 = (((($$0382)) + 16|0) + ($297<<2)|0);
    $299 = $$0381 << 1;
    $300 = load4($298);
    $301 = ($300|0)==(0|0);
    if ($301) {
     label = 127;
     break;
    } else {
     $$0381 = $299;$$0382 = $300;
    }
   }
   if ((label|0) == 127) {
    $302 = load4((9724));
    $303 = ($298>>>0)<($302>>>0);
    if ($303) {
     _abort();
     // unreachable;
    } else {
     store4($298,$$1);
     $304 = ((($$1)) + 24|0);
     store4($304,$$0382);
     $305 = ((($$1)) + 12|0);
     store4($305,$$1);
     $306 = ((($$1)) + 8|0);
     store4($306,$$1);
     break;
    }
   }
   else if ((label|0) == 130) {
    $307 = ((($$0382)) + 8|0);
    $308 = load4($307);
    $309 = load4((9724));
    $310 = ($308>>>0)>=($309>>>0);
    $not$ = ($$0382>>>0)>=($309>>>0);
    $311 = $310 & $not$;
    if ($311) {
     $312 = ((($308)) + 12|0);
     store4($312,$$1);
     store4($307,$$1);
     $313 = ((($$1)) + 8|0);
     store4($313,$308);
     $314 = ((($$1)) + 12|0);
     store4($314,$$0382);
     $315 = ((($$1)) + 24|0);
     store4($315,0);
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $316 = load4((9740));
 $317 = (($316) + -1)|0;
 store4((9740),$317);
 $318 = ($317|0)==(0);
 if ($318) {
  $$0211$in$i = (10164);
 } else {
  return;
 }
 while(1) {
  $$0211$i = load4($$0211$in$i);
  $319 = ($$0211$i|0)==(0|0);
  $320 = ((($$0211$i)) + 8|0);
  if ($319) {
   break;
  } else {
   $$0211$in$i = $320;
  }
 }
 store4((9740),-1);
 return;
}
function _cosf($0) {
 $0 = Math_fround($0);
 var $$0 = Math_fround(0), $$v = 0.0, $$v21 = 0.0, $1 = 0, $10 = 0, $11 = 0, $12 = 0.0, $13 = 0.0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = 0.0, $17 = Math_fround(0), $18 = 0.0, $19 = Math_fround(0), $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0.0, $24 = 0.0;
 var $25 = Math_fround(0), $26 = Math_fround(0), $27 = 0.0, $28 = 0.0, $29 = Math_fround(0), $3 = 0, $30 = 0.0, $31 = 0.0, $32 = Math_fround(0), $33 = 0, $34 = Math_fround(0), $35 = 0, $36 = 0.0, $37 = Math_fround(0), $38 = 0.0, $39 = 0.0, $4 = 0, $40 = Math_fround(0), $41 = 0.0, $42 = Math_fround(0);
 var $43 = Math_fround(0), $44 = 0.0, $45 = Math_fround(0), $5 = 0, $6 = 0, $7 = 0.0, $8 = Math_fround(0), $9 = 0, $trunc = 0, $trunc$clear = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = i32_bc2i($0);
 $3 = $2 >>> 31;
 $4 = $2 & 2147483647;
 $5 = ($4>>>0)<(1061752795);
 L1: do {
  if ($5) {
   $6 = ($4>>>0)<(964689920);
   if ($6) {
    $$0 = Math_fround(1.0);
   } else {
    $7 = +$0;
    $8 = (Math_fround(___cosdf($7)));
    $$0 = $8;
   }
  } else {
   $9 = ($4>>>0)<(1081824210);
   if ($9) {
    $10 = ($4>>>0)>(1075235811);
    $11 = ($3|0)!=(0);
    $12 = +$0;
    if ($10) {
     $$v21 = $11 ? 3.1415926535897931 : -3.1415926535897931;
     $13 = $12 + $$v21;
     $14 = (Math_fround(___cosdf($13)));
     $15 = Math_fround(-$14);
     $$0 = $15;
     break;
    }
    if ($11) {
     $16 = $12 + 1.5707963267948966;
     $17 = (Math_fround(___sindf($16)));
     $$0 = $17;
     break;
    } else {
     $18 = 1.5707963267948966 - $12;
     $19 = (Math_fround(___sindf($18)));
     $$0 = $19;
     break;
    }
   }
   $20 = ($4>>>0)<(1088565718);
   if ($20) {
    $21 = ($4>>>0)>(1085271519);
    $22 = ($3|0)!=(0);
    if ($21) {
     $23 = +$0;
     $$v = $22 ? 6.2831853071795862 : -6.2831853071795862;
     $24 = $23 + $$v;
     $25 = (Math_fround(___cosdf($24)));
     $$0 = $25;
     break;
    }
    if ($22) {
     $26 = Math_fround(-$0);
     $27 = +$26;
     $28 = $27 + -4.7123889803846897;
     $29 = (Math_fround(___sindf($28)));
     $$0 = $29;
     break;
    } else {
     $30 = +$0;
     $31 = $30 + -4.7123889803846897;
     $32 = (Math_fround(___sindf($31)));
     $$0 = $32;
     break;
    }
   }
   $33 = ($4>>>0)>(2139095039);
   if ($33) {
    $34 = Math_fround($0 - $0);
    $$0 = $34;
    break;
   }
   $35 = (___rem_pio2f($0,$1)|0);
   $trunc = $35&255;
   $trunc$clear = $trunc & 3;
   switch ($trunc$clear<<24>>24) {
   case 0:  {
    $36 = loadd($1);
    $37 = (Math_fround(___cosdf($36)));
    $$0 = $37;
    break L1;
    break;
   }
   case 1:  {
    $38 = loadd($1);
    $39 = -$38;
    $40 = (Math_fround(___sindf($39)));
    $$0 = $40;
    break L1;
    break;
   }
   case 2:  {
    $41 = loadd($1);
    $42 = (Math_fround(___cosdf($41)));
    $43 = Math_fround(-$42);
    $$0 = $43;
    break L1;
    break;
   }
   default: {
    $44 = loadd($1);
    $45 = (Math_fround(___sindf($44)));
    $$0 = $45;
    break L1;
   }
   }
  }
 } while(0);
 STACKTOP = sp;return (Math_fround($$0));
}
function _sinf($0) {
 $0 = Math_fround($0);
 var $$0 = Math_fround(0), $$sink = 0.0, $$sink$v = 0.0, $$v = 0.0, $1 = 0, $10 = 0, $11 = 0, $12 = 0.0, $13 = 0.0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = 0.0, $17 = Math_fround(0), $18 = 0.0, $19 = Math_fround(0), $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0.0;
 var $24 = 0.0, $25 = Math_fround(0), $26 = 0.0, $27 = Math_fround(0), $28 = Math_fround(0), $29 = 0.0, $3 = 0, $30 = Math_fround(0), $31 = 0, $32 = Math_fround(0), $33 = 0, $34 = 0.0, $35 = Math_fround(0), $36 = 0.0, $37 = Math_fround(0), $38 = 0.0, $39 = 0.0, $4 = 0, $40 = Math_fround(0), $41 = 0.0;
 var $42 = Math_fround(0), $43 = Math_fround(0), $5 = 0, $6 = 0, $7 = 0.0, $8 = Math_fround(0), $9 = 0, $trunc = 0, $trunc$clear = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 $2 = i32_bc2i($0);
 $3 = $2 >>> 31;
 $4 = $2 & 2147483647;
 $5 = ($4>>>0)<(1061752795);
 L1: do {
  if ($5) {
   $6 = ($4>>>0)<(964689920);
   if ($6) {
    $$0 = $0;
   } else {
    $7 = +$0;
    $8 = (Math_fround(___sindf($7)));
    $$0 = $8;
   }
  } else {
   $9 = ($4>>>0)<(1081824210);
   if ($9) {
    $10 = ($4>>>0)<(1075235812);
    $11 = ($3|0)!=(0);
    $12 = +$0;
    if (!($10)) {
     $$sink$v = $11 ? 3.1415926535897931 : -3.1415926535897931;
     $$sink = $12 + $$sink$v;
     $18 = -$$sink;
     $19 = (Math_fround(___sindf($18)));
     $$0 = $19;
     break;
    }
    if ($11) {
     $13 = $12 + 1.5707963267948966;
     $14 = (Math_fround(___cosdf($13)));
     $15 = Math_fround(-$14);
     $$0 = $15;
     break;
    } else {
     $16 = $12 + -1.5707963267948966;
     $17 = (Math_fround(___cosdf($16)));
     $$0 = $17;
     break;
    }
   }
   $20 = ($4>>>0)<(1088565718);
   if ($20) {
    $21 = ($4>>>0)<(1085271520);
    $22 = ($3|0)!=(0);
    $23 = +$0;
    if (!($21)) {
     $$v = $22 ? 6.2831853071795862 : -6.2831853071795862;
     $29 = $23 + $$v;
     $30 = (Math_fround(___sindf($29)));
     $$0 = $30;
     break;
    }
    if ($22) {
     $24 = $23 + 4.7123889803846897;
     $25 = (Math_fround(___cosdf($24)));
     $$0 = $25;
     break;
    } else {
     $26 = $23 + -4.7123889803846897;
     $27 = (Math_fround(___cosdf($26)));
     $28 = Math_fround(-$27);
     $$0 = $28;
     break;
    }
   }
   $31 = ($4>>>0)>(2139095039);
   if ($31) {
    $32 = Math_fround($0 - $0);
    $$0 = $32;
    break;
   }
   $33 = (___rem_pio2f($0,$1)|0);
   $trunc = $33&255;
   $trunc$clear = $trunc & 3;
   switch ($trunc$clear<<24>>24) {
   case 0:  {
    $34 = loadd($1);
    $35 = (Math_fround(___sindf($34)));
    $$0 = $35;
    break L1;
    break;
   }
   case 1:  {
    $36 = loadd($1);
    $37 = (Math_fround(___cosdf($36)));
    $$0 = $37;
    break L1;
    break;
   }
   case 2:  {
    $38 = loadd($1);
    $39 = -$38;
    $40 = (Math_fround(___sindf($39)));
    $$0 = $40;
    break L1;
    break;
   }
   default: {
    $41 = loadd($1);
    $42 = (Math_fround(___cosdf($41)));
    $43 = Math_fround(-$42);
    $$0 = $43;
    break L1;
   }
   }
  }
 } while(0);
 STACKTOP = sp;return (Math_fround($$0));
}
function __Znwj($0) {
 $0 = $0|0;
 var $$ = 0, $$lcssa = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0);
 $$ = $1 ? 1 : $0;
 while(1) {
  $2 = (_malloc($$)|0);
  $3 = ($2|0)==(0|0);
  if (!($3)) {
   $$lcssa = $2;
   break;
  }
  $4 = (__ZSt15get_new_handlerv()|0);
  $5 = ($4|0)==(0|0);
  if ($5) {
   $$lcssa = 0;
   break;
  }
  FUNCTION_TABLE_v[$4 & 7]();
 }
 return ($$lcssa|0);
}
function __Znaj($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (__Znwj($0)|0);
 return ($1|0);
}
function __ZdlPv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZL25default_terminate_handlerv() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = i64(), $8 = i64(), $9 = 0, $vararg_buffer = 0, $vararg_buffer10 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer10 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $0 = sp + 36|0;
 $1 = (___cxa_get_globals_fast()|0);
 $2 = ($1|0)==(0|0);
 if (!($2)) {
  $3 = load4($1);
  $4 = ($3|0)==(0|0);
  if (!($4)) {
   $5 = ((($3)) + 80|0);
   $6 = ((($3)) + 48|0);
   $7 = load8($6);
   $8 = i64_and($7,i64_const(4294967040,4294967295));
   $9 = i64_eq($8,i64_const(1126902528,1129074247));
   if (!($9)) {
    store4($vararg_buffer7,9001);
    _abort_message(8951,$vararg_buffer7);
    // unreachable;
   }
   $10 = i64_eq($7,i64_const(1126902529,1129074247));
   if ($10) {
    $11 = ((($3)) + 44|0);
    $12 = load4($11);
    $13 = $12;
   } else {
    $13 = $5;
   }
   store4($0,$13);
   $14 = load4($3);
   $15 = ((($14)) + 4|0);
   $16 = load4($15);
   $17 = load4(1264);
   $18 = ((($17)) + 16|0);
   $19 = load4($18);
   $20 = (FUNCTION_TABLE_iiii[$19 & 7](1264,$14,$0)|0);
   if ($20) {
    $21 = load4($0);
    $22 = load4($21);
    $23 = ((($22)) + 8|0);
    $24 = load4($23);
    $25 = (FUNCTION_TABLE_ii[$24 & 3]($21)|0);
    store4($vararg_buffer,9001);
    $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
    store4($vararg_ptr1,$16);
    $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
    store4($vararg_ptr2,$25);
    _abort_message(8865,$vararg_buffer);
    // unreachable;
   } else {
    store4($vararg_buffer3,9001);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,$16);
    _abort_message(8910,$vararg_buffer3);
    // unreachable;
   }
  }
 }
 _abort_message(8989,$vararg_buffer10);
 // unreachable;
}
function ___cxa_get_globals_fast() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $0 = (_pthread_once((10204|0),(4|0))|0);
 $1 = ($0|0)==(0);
 if ($1) {
  $2 = load4(10208);
  $3 = (_pthread_getspecific(($2|0))|0);
  STACKTOP = sp;return ($3|0);
 } else {
  _abort_message(9140,$vararg_buffer);
  // unreachable;
 }
 return (0)|0;
}
function _abort_message($0,$varargs) {
 $0 = $0|0;
 $varargs = $varargs|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $1 = sp;
 store4($1,$varargs);
 $2 = load4(1724);
 (_vfprintf($2,$0,$1)|0);
 (_fputc(10,$2)|0);
 _abort();
 // unreachable;
}
function __ZN10__cxxabiv116__shim_type_infoD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv117__class_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$2 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $3 = sp;
 $4 = ($0|0)==($1|0);
 if ($4) {
  $$2 = 1;
 } else {
  $5 = ($1|0)==(0|0);
  if ($5) {
   $$2 = 0;
  } else {
   $6 = (___dynamic_cast($1,1288,1272,0)|0);
   $7 = ($6|0)==(0|0);
   if ($7) {
    $$2 = 0;
   } else {
    $8 = ((($3)) + 4|0);
    ; store8($8,i64_const(0,0),4); store8($8+8|0,i64_const(0,0),4); store8($8+16|0,i64_const(0,0),4); store8($8+24|0,i64_const(0,0),4); store8($8+32|0,i64_const(0,0),4); store8($8+40|0,i64_const(0,0),4); store4($8+48|0,0,4);
    store4($3,$6);
    $9 = ((($3)) + 8|0);
    store4($9,$0);
    $10 = ((($3)) + 12|0);
    store4($10,-1);
    $11 = ((($3)) + 48|0);
    store4($11,1);
    $12 = load4($6);
    $13 = ((($12)) + 28|0);
    $14 = load4($13);
    $15 = load4($2);
    FUNCTION_TABLE_viiii[$14 & 15]($6,$3,$15,1);
    $16 = ((($3)) + 24|0);
    $17 = load4($16);
    $18 = ($17|0)==(1);
    if ($18) {
     $19 = ((($3)) + 16|0);
     $20 = load4($19);
     store4($2,$20);
     $$0 = 1;
    } else {
     $$0 = 0;
    }
    $$2 = $$0;
   }
  }
 }
 STACKTOP = sp;return ($$2|0);
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 8|0);
 $7 = load4($6);
 $8 = ($0|0)==($7|0);
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$1,$2,$3,$4);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 8|0);
 $6 = load4($5);
 $7 = ($0|0)==($6|0);
 do {
  if ($7) {
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==($2|0);
   if ($10) {
    $11 = ((($1)) + 28|0);
    $12 = load4($11);
    $13 = ($12|0)==(1);
    if (!($13)) {
     store4($11,$3);
    }
   }
  } else {
   $14 = load4($1);
   $15 = ($0|0)==($14|0);
   if ($15) {
    $16 = ((($1)) + 16|0);
    $17 = load4($16);
    $18 = ($17|0)==($2|0);
    if (!($18)) {
     $19 = ((($1)) + 20|0);
     $20 = load4($19);
     $21 = ($20|0)==($2|0);
     if (!($21)) {
      $24 = ((($1)) + 32|0);
      store4($24,$3);
      store4($19,$2);
      $25 = ((($1)) + 40|0);
      $26 = load4($25);
      $27 = (($26) + 1)|0;
      store4($25,$27);
      $28 = ((($1)) + 36|0);
      $29 = load4($28);
      $30 = ($29|0)==(1);
      if ($30) {
       $31 = ((($1)) + 24|0);
       $32 = load4($31);
       $33 = ($32|0)==(2);
       if ($33) {
        $34 = ((($1)) + 54|0);
        store1($34,1);
       }
      }
      $35 = ((($1)) + 44|0);
      store4($35,4);
      break;
     }
    }
    $22 = ($3|0)==(1);
    if ($22) {
     $23 = ((($1)) + 32|0);
     store4($23,1);
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 8|0);
 $5 = load4($4);
 $6 = ($0|0)==($5|0);
 if ($6) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$1,$2,$3);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 16|0);
 $5 = load4($4);
 $6 = ($5|0)==(0|0);
 do {
  if ($6) {
   store4($4,$2);
   $7 = ((($1)) + 24|0);
   store4($7,$3);
   $8 = ((($1)) + 36|0);
   store4($8,1);
  } else {
   $9 = ($5|0)==($2|0);
   if (!($9)) {
    $13 = ((($1)) + 36|0);
    $14 = load4($13);
    $15 = (($14) + 1)|0;
    store4($13,$15);
    $16 = ((($1)) + 24|0);
    store4($16,2);
    $17 = ((($1)) + 54|0);
    store1($17,1);
    break;
   }
   $10 = ((($1)) + 24|0);
   $11 = load4($10);
   $12 = ($11|0)==(2);
   if ($12) {
    store4($10,$3);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond22 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 53|0);
 store1($5,1);
 $6 = ((($1)) + 4|0);
 $7 = load4($6);
 $8 = ($7|0)==($3|0);
 do {
  if ($8) {
   $9 = ((($1)) + 52|0);
   store1($9,1);
   $10 = ((($1)) + 16|0);
   $11 = load4($10);
   $12 = ($11|0)==(0|0);
   if ($12) {
    store4($10,$2);
    $13 = ((($1)) + 24|0);
    store4($13,$4);
    $14 = ((($1)) + 36|0);
    store4($14,1);
    $15 = ((($1)) + 48|0);
    $16 = load4($15);
    $17 = ($16|0)==(1);
    $18 = ($4|0)==(1);
    $or$cond = $17 & $18;
    if (!($or$cond)) {
     break;
    }
    $19 = ((($1)) + 54|0);
    store1($19,1);
    break;
   }
   $20 = ($11|0)==($2|0);
   if (!($20)) {
    $30 = ((($1)) + 36|0);
    $31 = load4($30);
    $32 = (($31) + 1)|0;
    store4($30,$32);
    $33 = ((($1)) + 54|0);
    store1($33,1);
    break;
   }
   $21 = ((($1)) + 24|0);
   $22 = load4($21);
   $23 = ($22|0)==(2);
   if ($23) {
    store4($21,$4);
    $27 = $4;
   } else {
    $27 = $22;
   }
   $24 = ((($1)) + 48|0);
   $25 = load4($24);
   $26 = ($25|0)==(1);
   $28 = ($27|0)==(1);
   $or$cond22 = $26 & $28;
   if ($or$cond22) {
    $29 = ((($1)) + 54|0);
    store1($29,1);
   }
  }
 } while(0);
 return;
}
function ___dynamic_cast($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$ = 0, $$0 = 0, $$33 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond28 = 0, $or$cond30 = 0, $or$cond32 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $4 = sp;
 $5 = load4($0);
 $6 = ((($5)) + -8|0);
 $7 = load4($6);
 $8 = (($0) + ($7)|0);
 $9 = ((($5)) + -4|0);
 $10 = load4($9);
 store4($4,$2);
 $11 = ((($4)) + 4|0);
 store4($11,$0);
 $12 = ((($4)) + 8|0);
 store4($12,$1);
 $13 = ((($4)) + 12|0);
 store4($13,$3);
 $14 = ((($4)) + 16|0);
 $15 = ((($4)) + 20|0);
 $16 = ((($4)) + 24|0);
 $17 = ((($4)) + 28|0);
 $18 = ((($4)) + 32|0);
 $19 = ((($4)) + 40|0);
 $20 = ($10|0)==($2|0);
 ; store8($14,i64_const(0,0),4); store8($14+8|0,i64_const(0,0),4); store8($14+16|0,i64_const(0,0),4); store8($14+24|0,i64_const(0,0),4); store4($14+32|0,0,4); store2($14+36|0,0,2); store1($14+38|0,0,1);
 L1: do {
  if ($20) {
   $21 = ((($4)) + 48|0);
   store4($21,1);
   $22 = load4($2);
   $23 = ((($22)) + 20|0);
   $24 = load4($23);
   FUNCTION_TABLE_viiiiii[$24 & 3]($2,$4,$8,$8,1,0);
   $25 = load4($16);
   $26 = ($25|0)==(1);
   $$ = $26 ? $8 : 0;
   $$0 = $$;
  } else {
   $27 = ((($4)) + 36|0);
   $28 = load4($10);
   $29 = ((($28)) + 24|0);
   $30 = load4($29);
   FUNCTION_TABLE_viiiii[$30 & 3]($10,$4,$8,1,0);
   $31 = load4($27);
   switch ($31|0) {
   case 0:  {
    $32 = load4($19);
    $33 = ($32|0)==(1);
    $34 = load4($17);
    $35 = ($34|0)==(1);
    $or$cond = $33 & $35;
    $36 = load4($18);
    $37 = ($36|0)==(1);
    $or$cond28 = $or$cond & $37;
    $38 = load4($15);
    $$33 = $or$cond28 ? $38 : 0;
    $$0 = $$33;
    break L1;
    break;
   }
   case 1:  {
    break;
   }
   default: {
    $$0 = 0;
    break L1;
   }
   }
   $39 = load4($16);
   $40 = ($39|0)==(1);
   if (!($40)) {
    $41 = load4($19);
    $42 = ($41|0)==(0);
    $43 = load4($17);
    $44 = ($43|0)==(1);
    $or$cond30 = $42 & $44;
    $45 = load4($18);
    $46 = ($45|0)==(1);
    $or$cond32 = $or$cond30 & $46;
    if (!($or$cond32)) {
     $$0 = 0;
     break;
    }
   }
   $47 = load4($14);
   $$0 = $47;
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 8|0);
 $7 = load4($6);
 $8 = ($0|0)==($7|0);
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$1,$2,$3,$4);
 } else {
  $9 = ((($0)) + 8|0);
  $10 = load4($9);
  $11 = load4($10);
  $12 = ((($11)) + 20|0);
  $13 = load4($12);
  FUNCTION_TABLE_viiiiii[$13 & 3]($10,$1,$2,$3,$4,$5);
 }
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$037$off039 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 8|0);
 $6 = load4($5);
 $7 = ($0|0)==($6|0);
 do {
  if ($7) {
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==($2|0);
   if ($10) {
    $11 = ((($1)) + 28|0);
    $12 = load4($11);
    $13 = ($12|0)==(1);
    if (!($13)) {
     store4($11,$3);
    }
   }
  } else {
   $14 = load4($1);
   $15 = ($0|0)==($14|0);
   if (!($15)) {
    $49 = ((($0)) + 8|0);
    $50 = load4($49);
    $51 = load4($50);
    $52 = ((($51)) + 24|0);
    $53 = load4($52);
    FUNCTION_TABLE_viiiii[$53 & 3]($50,$1,$2,$3,$4);
    break;
   }
   $16 = ((($1)) + 16|0);
   $17 = load4($16);
   $18 = ($17|0)==($2|0);
   if (!($18)) {
    $19 = ((($1)) + 20|0);
    $20 = load4($19);
    $21 = ($20|0)==($2|0);
    if (!($21)) {
     $24 = ((($1)) + 32|0);
     store4($24,$3);
     $25 = ((($1)) + 44|0);
     $26 = load4($25);
     $27 = ($26|0)==(4);
     if ($27) {
      break;
     }
     $28 = ((($1)) + 52|0);
     store1($28,0);
     $29 = ((($1)) + 53|0);
     store1($29,0);
     $30 = ((($0)) + 8|0);
     $31 = load4($30);
     $32 = load4($31);
     $33 = ((($32)) + 20|0);
     $34 = load4($33);
     FUNCTION_TABLE_viiiiii[$34 & 3]($31,$1,$2,$2,1,$4);
     $35 = load1($29);
     $36 = ($35<<24>>24)==(0);
     if ($36) {
      $$037$off039 = 0;
      label = 13;
     } else {
      $37 = load1($28);
      $not$ = ($37<<24>>24)==(0);
      if ($not$) {
       $$037$off039 = 1;
       label = 13;
      } else {
       label = 17;
      }
     }
     do {
      if ((label|0) == 13) {
       store4($19,$2);
       $38 = ((($1)) + 40|0);
       $39 = load4($38);
       $40 = (($39) + 1)|0;
       store4($38,$40);
       $41 = ((($1)) + 36|0);
       $42 = load4($41);
       $43 = ($42|0)==(1);
       if ($43) {
        $44 = ((($1)) + 24|0);
        $45 = load4($44);
        $46 = ($45|0)==(2);
        if ($46) {
         $47 = ((($1)) + 54|0);
         store1($47,1);
         if ($$037$off039) {
          label = 17;
          break;
         } else {
          $48 = 4;
          break;
         }
        }
       }
       if ($$037$off039) {
        label = 17;
       } else {
        $48 = 4;
       }
      }
     } while(0);
     if ((label|0) == 17) {
      $48 = 3;
     }
     store4($25,$48);
     break;
    }
   }
   $22 = ($3|0)==(1);
   if ($22) {
    $23 = ((($1)) + 32|0);
    store4($23,1);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 8|0);
 $5 = load4($4);
 $6 = ($0|0)==($5|0);
 if ($6) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$1,$2,$3);
 } else {
  $7 = ((($0)) + 8|0);
  $8 = load4($7);
  $9 = load4($8);
  $10 = ((($9)) + 28|0);
  $11 = load4($10);
  FUNCTION_TABLE_viiii[$11 & 15]($8,$1,$2,$3);
 }
 return;
}
function __ZNSt9type_infoD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var $0 = 0, $1 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $0 = (_pthread_key_create((10208|0),(23|0))|0);
 $1 = ($0|0)==(0);
 if ($1) {
  STACKTOP = sp;return;
 } else {
  _abort_message(9189,$vararg_buffer);
  // unreachable;
 }
}
function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 _free($0);
 $1 = load4(10208);
 $2 = (_pthread_setspecific(($1|0),(0|0))|0);
 $3 = ($2|0)==(0);
 if ($3) {
  STACKTOP = sp;return;
 } else {
  _abort_message(9239,$vararg_buffer);
  // unreachable;
 }
}
function __ZSt9terminatev() {
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = i64(), $6 = i64(), $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (___cxa_get_globals_fast()|0);
 $1 = ($0|0)==(0|0);
 if (!($1)) {
  $2 = load4($0);
  $3 = ($2|0)==(0|0);
  if (!($3)) {
   $4 = ((($2)) + 48|0);
   $5 = load8($4);
   $6 = i64_and($5,i64_const(4294967040,4294967295));
   $7 = i64_eq($6,i64_const(1126902528,1129074247));
   if ($7) {
    $8 = ((($2)) + 12|0);
    $9 = load4($8);
    __ZSt11__terminatePFvvE($9);
    // unreachable;
   }
  }
 }
 $10 = (__ZSt13get_terminatev()|0);
 __ZSt11__terminatePFvvE($10);
 // unreachable;
}
function __ZSt11__terminatePFvvE($0) {
 $0 = $0|0;
 var $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 FUNCTION_TABLE_v[$0 & 7]();
 _abort_message(9292,$vararg_buffer);
 // unreachable;
}
function __ZSt13get_terminatev() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(2236);
 $1 = (($0) + 0)|0;
 store4(2236,$1);
 $2 = $0;
 return ($2|0);
}
function __ZSt15get_new_handlerv() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(10212);
 $1 = (($0) + 0)|0;
 store4(10212,$1);
 $2 = $0;
 return ($2|0);
}
function ___cxa_can_catch($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $3 = sp;
 $4 = load4($2);
 store4($3,$4);
 $5 = load4($0);
 $6 = ((($5)) + 16|0);
 $7 = load4($6);
 $8 = (FUNCTION_TABLE_iiii[$7 & 7]($0,$1,$3)|0);
 $9 = $8&1;
 if ($8) {
  $10 = load4($3);
  store4($2,$10);
 }
 STACKTOP = sp;return ($9|0);
}
function ___cxa_is_pointer_type($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  $4 = 0;
 } else {
  $2 = (___dynamic_cast($0,1288,1344,0)|0);
  $phitmp = ($2|0)!=(0|0);
  $4 = $phitmp;
 }
 $3 = $4&1;
 return ($3|0);
}
function runPostSets() {
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var stop = 0, value4 = 0, stop4 = 0, unaligned = 0;
    stop = (ptr + num)|0;
    if ((num|0) >= 20) {
      // This is unaligned, but quite large, so work hard to get to aligned settings
      value = value & 0xff;
      unaligned = ptr & 3;
      value4 = value | (value << 8) | (value << 16) | (value << 24);
      stop4 = stop & ~3;
      if (unaligned) {
        unaligned = (ptr + 4 - unaligned)|0;
        while ((ptr|0) < (unaligned|0)) { // no need to check for stop, since we have large num
          HEAP8[((ptr)>>0)]=value;
          ptr = (ptr+1)|0;
        }
      }
      while ((ptr|0) < (stop4|0)) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    while ((ptr|0) < (stop|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (ptr-num)|0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    if ((num|0) >= 4096) return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    ret = dest|0;
    if ((dest&3) == (src&3)) {
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      while ((num|0) >= 4) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
        num = (num-4)|0;
      }
    }
    while ((num|0) > 0) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
      num = (num-1)|0;
    }
    return ret|0;
}
function _sbrk(increment) {
    increment = increment|0;
    var oldDynamicTop = 0;
    var oldDynamicTopOnChange = 0;
    var newDynamicTop = 0;
    var totalMemory = 0;
    increment = ((increment + 15) & -16)|0;
    oldDynamicTop = HEAP32[DYNAMICTOP_PTR>>2]|0;
    newDynamicTop = oldDynamicTop + increment | 0;

    if (((increment|0) > 0 & (newDynamicTop|0) < (oldDynamicTop|0)) // Detect and fail if we would wrap around signed 32-bit int.
      | (newDynamicTop|0) < 0) { // Also underflow, sbrk() should be able to be used to subtract.
      abortOnCannotGrowMemory()|0;
      ___setErrNo(12);
      return -1;
    }

    HEAP32[DYNAMICTOP_PTR>>2] = newDynamicTop;
    totalMemory = getTotalMemory()|0;
    if ((newDynamicTop|0) > (totalMemory|0)) {
      if ((enlargeMemory()|0) == 0) {
        ___setErrNo(12);
        HEAP32[DYNAMICTOP_PTR>>2] = oldDynamicTop;
        return -1;
      }
    }
    return oldDynamicTop|0;
}
function _pthread_self() {
    return 0;
}

  
function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&7](a1|0,a2|0,a3|0)|0;
}


function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  FUNCTION_TABLE_viiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0);
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&31](a1|0);
}


function dynCall_vii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  FUNCTION_TABLE_vii[index&15](a1|0,a2|0);
}


function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&3](a1|0)|0;
}


function dynCall_viii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  FUNCTION_TABLE_viii[index&3](a1|0,a2|0,a3|0);
}


function dynCall_v(index) {
  index = index|0;
  
  FUNCTION_TABLE_v[index&7]();
}


function dynCall_viif(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=Math_fround(a3);
  FUNCTION_TABLE_viif[index&3](a1|0,a2|0,Math_fround(a3));
}


function dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0;
  FUNCTION_TABLE_viiiiii[index&3](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0);
}


function dynCall_iii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  return FUNCTION_TABLE_iii[index&3](a1|0,a2|0)|0;
}


function dynCall_iiiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  return FUNCTION_TABLE_iiiiii[index&15](a1|0,a2|0,a3|0,a4|0,a5|0)|0;
}


function dynCall_viiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  FUNCTION_TABLE_viiii[index&15](a1|0,a2|0,a3|0,a4|0);
}

function b0(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(0);return 0;
}
function b1(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; abort(1);
}
function b2(p0) {
 p0 = p0|0; abort(2);
}
function b3(p0,p1) {
 p0 = p0|0;p1 = p1|0; abort(3);
}
function b4(p0) {
 p0 = p0|0; abort(4);return 0;
}
function b5(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(5);
}
function b6() {
 ; abort(6);
}
function ___cxa_pure_virtual__wrapper() {
 ; ___cxa_pure_virtual();
}
function b7(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = Math_fround(p2); abort(7);
}
function b8(p0,p1,p2,p3,p4,p5) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0;p5 = p5|0; abort(8);
}
function b9(p0,p1) {
 p0 = p0|0;p1 = p1|0; abort(9);return 0;
}
function b10(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; abort(10);return 0;
}
function b11(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; abort(11);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,__ZNK11b2EdgeShape9TestPointERK11b2TransformRK6b2Vec2,__ZNK14b2PolygonShape9TestPointERK11b2TransformRK6b2Vec2,__ZN15b2ContactFilter13ShouldCollideEP9b2FixtureS1_,___stdio_write,___stdio_seek,___stdout_write,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv];
var FUNCTION_TABLE_viiiii = [b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b1];
var FUNCTION_TABLE_vi = [b2,__ZN7b2ShapeD2Ev,__ZN11b2EdgeShapeD0Ev,__ZN14b2PolygonShapeD0Ev,__ZN17b2ContactListenerD2Ev,__ZN17b2ContactListenerD0Ev,__ZN15b2ContactFilterD2Ev,__ZN15b2ContactFilterD0Ev,__ZN9b2ContactD2Ev,__ZN9b2ContactD0Ev,__ZN22b2EdgeAndCircleContactD0Ev,__ZN23b2EdgeAndPolygonContactD0Ev,__ZN25b2PolygonAndCircleContactD0Ev,__ZN16b2PolygonContactD0Ev,__ZN23b2ChainAndCircleContactD0Ev,__ZN24b2ChainAndPolygonContactD0Ev,__ZN15b2CircleContactD0Ev,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,__ZN10__cxxabiv120__si_class_type_infoD0Ev,_cleanup_418,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b2,b2,b2,b2,b2
,b2,b2,b2];
var FUNCTION_TABLE_vii = [b3,__ZN17b2ContactListener12BeginContactEP9b2Contact,__ZN17b2ContactListener10EndContactEP9b2Contact,__ZN15b2CircleContact7DestroyEP9b2ContactP16b2BlockAllocator,__ZN25b2PolygonAndCircleContact7DestroyEP9b2ContactP16b2BlockAllocator,__ZN16b2PolygonContact7DestroyEP9b2ContactP16b2BlockAllocator,__ZN22b2EdgeAndCircleContact7DestroyEP9b2ContactP16b2BlockAllocator,__ZN23b2EdgeAndPolygonContact7DestroyEP9b2ContactP16b2BlockAllocator,__ZN23b2ChainAndCircleContact7DestroyEP9b2ContactP16b2BlockAllocator,__ZN24b2ChainAndPolygonContact7DestroyEP9b2ContactP16b2BlockAllocator,b3,b3,b3,b3,b3,b3];
var FUNCTION_TABLE_ii = [b4,__ZNK11b2EdgeShape13GetChildCountEv,__ZNK14b2PolygonShape13GetChildCountEv,___stdio_close];
var FUNCTION_TABLE_viii = [b5,__ZN17b2ContactListener8PreSolveEP9b2ContactPK10b2Manifold,__ZN17b2ContactListener9PostSolveEP9b2ContactPK16b2ContactImpulse,b5];
var FUNCTION_TABLE_v = [b6,___cxa_pure_virtual__wrapper,__ZL25default_terminate_handlerv,__Z4iterv,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b6,b6,b6];
var FUNCTION_TABLE_viif = [b7,__ZNK11b2EdgeShape11ComputeMassEP10b2MassDataf,__ZNK14b2PolygonShape11ComputeMassEP10b2MassDataf,b7];
var FUNCTION_TABLE_viiiiii = [b8,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b8];
var FUNCTION_TABLE_iii = [b9,__ZNK11b2EdgeShape5CloneEP16b2BlockAllocator,__ZNK14b2PolygonShape5CloneEP16b2BlockAllocator,__Z14b2PairLessThanRK6b2PairS1_];
var FUNCTION_TABLE_iiiiii = [b10,__ZNK11b2EdgeShape7RayCastEP15b2RayCastOutputRK14b2RayCastInputRK11b2Transformi,__ZNK14b2PolygonShape7RayCastEP15b2RayCastOutputRK14b2RayCastInputRK11b2Transformi,__ZN15b2CircleContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator,__ZN25b2PolygonAndCircleContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator,__ZN16b2PolygonContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator,__ZN22b2EdgeAndCircleContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator,__ZN23b2EdgeAndPolygonContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator,__ZN23b2ChainAndCircleContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator,__ZN24b2ChainAndPolygonContact6CreateEP9b2FixtureiS1_iP16b2BlockAllocator,b10,b10,b10,b10,b10,b10];
var FUNCTION_TABLE_viiii = [b11,__ZNK11b2EdgeShape11ComputeAABBEP6b2AABBRK11b2Transformi,__ZNK14b2PolygonShape11ComputeAABBEP6b2AABBRK11b2Transformi,__ZN22b2EdgeAndCircleContact8EvaluateEP10b2ManifoldRK11b2TransformS4_,__ZN23b2EdgeAndPolygonContact8EvaluateEP10b2ManifoldRK11b2TransformS4_,__ZN25b2PolygonAndCircleContact8EvaluateEP10b2ManifoldRK11b2TransformS4_,__ZN16b2PolygonContact8EvaluateEP10b2ManifoldRK11b2TransformS4_,__ZN23b2ChainAndCircleContact8EvaluateEP10b2ManifoldRK11b2TransformS4_,__ZN24b2ChainAndPolygonContact8EvaluateEP10b2ManifoldRK11b2TransformS4_,__ZN15b2CircleContact8EvaluateEP10b2ManifoldRK11b2TransformS4_,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b11,b11,b11,b11];

  return { _sbrk: _sbrk, ___cxa_can_catch: ___cxa_can_catch, _free: _free, _main: _main, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _pthread_self: _pthread_self, _memset: _memset, _malloc: _malloc, _memcpy: _memcpy, ___errno_location: ___errno_location, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viif: dynCall_viif, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
;