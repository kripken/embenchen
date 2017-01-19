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


  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;

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
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_vii=env.invoke_vii;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var ___syscall6=env.___syscall6;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var _abort=env._abort;
  var ___setErrNo=env.___setErrNo;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___syscall54=env.___syscall54;
  var ___syscall140=env.___syscall140;
  var ___assert_fail=env.___assert_fail;
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

function _doit($buffer,$size,$i) {
 $buffer = $buffer|0;
 $size = $size|0;
 $i = $i|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $call = 0, $call1 = 0, $call14 = 0, $call4 = 0, $cmp = 0, $cmp11 = 0, $cmp15 = 0, $compressedSize = 0, $decompressedSize = 0, $tobool = 0, $tobool2 = 0;
 var $vararg_buffer = 0, $vararg_ptr1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $compressedSize = sp + 12|0;
 $decompressedSize = sp + 8|0;
 $call = (_compressBound($size)|0);
 $0 = load4(17752);
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call1 = (_malloc($call)|0);
  store4(17752,$call1);
  $2 = $call1;
 } else {
  $2 = $0;
 }
 $1 = load4(17756);
 $tobool2 = ($1|0)==(0|0);
 if ($tobool2) {
  $call4 = (_malloc($size)|0);
  store4(17756,$call4);
 }
 store4($compressedSize,$call);
 (_compress($2,$compressedSize,$buffer,$size)|0);
 $cmp = ($i|0)==(0);
 if ($cmp) {
  $3 = load4($compressedSize);
  store4($vararg_buffer,$size);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,$3);
  (_printf(13838,$vararg_buffer)|0);
 }
 store4($decompressedSize,$size);
 $4 = load4(17756);
 $5 = load4(17752);
 $6 = load4($compressedSize);
 (_uncompress($4,$decompressedSize,$5,$6)|0);
 $7 = load4($decompressedSize);
 $cmp11 = ($7|0)==($size|0);
 if (!($cmp11)) {
  ___assert_fail((13852|0),(13877|0),24,(13905|0));
  // unreachable;
 }
 if (!($cmp)) {
  STACKTOP = sp;return;
 }
 $8 = load4(17756);
 $call14 = (_strcmp($buffer,$8)|0);
 $cmp15 = ($call14|0)==(0);
 if ($cmp15) {
  STACKTOP = sp;return;
 } else {
  ___assert_fail((13910|0),(13877|0),25,(13905|0));
  // unreachable;
 }
}
function _main($argc,$argv) {
 $argc = $argc|0;
 $argv = $argv|0;
 var $0 = 0, $1 = 0, $and = 0, $and17 = 0, $arrayidx = 0, $arrayidx21 = 0, $call7 = 0, $cmp = 0, $cmp10 = 0, $cmp12 = 0, $cmp22 = 0, $conv = 0, $conv19 = 0, $dec = 0, $exitcond = 0, $i$022 = 0, $i$121 = 0, $inc = 0, $inc24 = 0, $iters$0 = 0;
 var $mul = 0, $rem = 0, $retval$0 = 0, $run$023 = 0, $run$1 = 0, $runChar$024 = 0, $runChar$1 = 0, $sub = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $cmp = ($argc|0)>(1);
 L1: do {
  if ($cmp) {
   $arrayidx = ((($argv)) + 4|0);
   $0 = load4($arrayidx);
   $1 = load1($0);
   $conv = $1 << 24 >> 24;
   switch ($conv|0) {
   case 49:  {
    $iters$0 = 60;
    break L1;
    break;
   }
   case 51:  {
    label = 4;
    break L1;
    break;
   }
   case 50:  {
    $iters$0 = 250;
    break L1;
    break;
   }
   case 52:  {
    $iters$0 = 2500;
    break L1;
    break;
   }
   case 53:  {
    $iters$0 = 5000;
    break L1;
    break;
   }
   case 48:  {
    $retval$0 = 0;
    STACKTOP = sp;return ($retval$0|0);
    break;
   }
   default: {
    $sub = (($conv) + -48)|0;
    store4($vararg_buffer,$sub);
    (_printf(13939,$vararg_buffer)|0);
    $retval$0 = -1;
    STACKTOP = sp;return ($retval$0|0);
   }
   }
  } else {
   label = 4;
  }
 } while(0);
 if ((label|0) == 4) {
  $iters$0 = 500;
 }
 $call7 = (_malloc(100000)|0);
 $i$022 = 0;$run$023 = 0;$runChar$024 = 17;
 while(1) {
  $cmp10 = ($run$023|0)>(0);
  do {
   if ($cmp10) {
    $dec = (($run$023) + -1)|0;
    $run$1 = $dec;$runChar$1 = $runChar$024;
   } else {
    $and = $i$022 & 7;
    $cmp12 = ($and|0)==(0);
    if ($cmp12) {
     $and17 = $i$022 & 31;
     $run$1 = $and17;$runChar$1 = 0;
     break;
    } else {
     $mul = Math_imul($i$022, $i$022)|0;
     $rem = (($mul>>>0) % 6714)&-1;
     $conv19 = $rem&255;
     $run$1 = $run$023;$runChar$1 = $conv19;
     break;
    }
   }
  } while(0);
  $arrayidx21 = (($call7) + ($i$022)|0);
  store1($arrayidx21,$runChar$1);
  $inc = (($i$022) + 1)|0;
  $exitcond = ($inc|0)==(100000);
  if ($exitcond) {
   $i$121 = 0;
   break;
  } else {
   $i$022 = $inc;$run$023 = $run$1;$runChar$024 = $runChar$1;
  }
 }
 while(1) {
  _doit($call7,100000,$i$121);
  $inc24 = (($i$121) + 1)|0;
  $cmp22 = ($inc24|0)<($iters$0|0);
  if ($cmp22) {
   $i$121 = $inc24;
  } else {
   break;
  }
 }
 (_puts(13951)|0);
 $retval$0 = 0;
 STACKTOP = sp;return ($retval$0|0);
}
function _compress($dest,$destLen,$source,$sourceLen) {
 $dest = $dest|0;
 $destLen = $destLen|0;
 $source = $source|0;
 $sourceLen = $sourceLen|0;
 var $0 = 0, $1 = 0, $avail_in$i = 0, $avail_out$i = 0, $call$i = 0, $call11$i = 0, $call5$i = 0, $cmp2$i = 0, $cmp6$i = 0, $cmp9$i = 0, $cond$i = 0, $next_out$i = 0, $opaque$i = 0, $retval$0$i = 0, $stream$i = 0, $total_out$i = 0, $zalloc$i = 0, $zfree$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $stream$i = sp;
 store4($stream$i,$source);
 $avail_in$i = ((($stream$i)) + 4|0);
 store4($avail_in$i,$sourceLen);
 $next_out$i = ((($stream$i)) + 12|0);
 store4($next_out$i,$dest);
 $0 = load4($destLen);
 $avail_out$i = ((($stream$i)) + 16|0);
 store4($avail_out$i,$0);
 $zalloc$i = ((($stream$i)) + 32|0);
 store4($zalloc$i,0);
 $zfree$i = ((($stream$i)) + 36|0);
 store4($zfree$i,0);
 $opaque$i = ((($stream$i)) + 40|0);
 store4($opaque$i,0);
 $call$i = (_deflateInit_($stream$i,-1,14742,56)|0);
 $cmp2$i = ($call$i|0)==(0);
 if (!($cmp2$i)) {
  $retval$0$i = $call$i;
  STACKTOP = sp;return ($retval$0$i|0);
 }
 $call5$i = (_deflate($stream$i,4)|0);
 $cmp6$i = ($call5$i|0)==(1);
 if ($cmp6$i) {
  $total_out$i = ((($stream$i)) + 20|0);
  $1 = load4($total_out$i);
  store4($destLen,$1);
  $call11$i = (_deflateEnd($stream$i)|0);
  $retval$0$i = $call11$i;
  STACKTOP = sp;return ($retval$0$i|0);
 } else {
  (_deflateEnd($stream$i)|0);
  $cmp9$i = ($call5$i|0)==(0);
  $cond$i = $cmp9$i ? -5 : $call5$i;
  $retval$0$i = $cond$i;
  STACKTOP = sp;return ($retval$0$i|0);
 }
 return (0)|0;
}
function _compressBound($sourceLen) {
 $sourceLen = $sourceLen|0;
 var $add = 0, $add2 = 0, $add4 = 0, $add5 = 0, $shr = 0, $shr1 = 0, $shr3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $shr = $sourceLen >>> 12;
 $shr1 = $sourceLen >>> 14;
 $shr3 = $sourceLen >>> 25;
 $add = (($sourceLen) + 13)|0;
 $add2 = (($add) + ($shr))|0;
 $add4 = (($add2) + ($shr1))|0;
 $add5 = (($add4) + ($shr3))|0;
 return ($add5|0);
}
function _deflateInit_($strm,$level,$version,$stream_size) {
 $strm = $strm|0;
 $level = $level|0;
 $version = $version|0;
 $stream_size = $stream_size|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_deflateInit2_($strm,$level,8,15,8,0,$version,$stream_size)|0);
 return ($call|0);
}
function _deflateInit2_($strm,$level,$method,$windowBits,$memLevel,$strategy,$version,$stream_size) {
 $strm = $strm|0;
 $level = $level|0;
 $method = $method|0;
 $windowBits = $windowBits|0;
 $memLevel = $memLevel|0;
 $strategy = $strategy|0;
 $version = $version|0;
 $stream_size = $stream_size|0;
 var $$ = 0, $$in$i = 0, $$in42$i = 0, $$in43$i = 0, $$level = 0, $$pre$i = 0, $$pre36$i = 0, $$pre37$i = 0, $$pre38$i = 0, $$windowBits$addr$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
 var $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr130 = 0;
 var $add98 = 0, $call = 0, $call103 = 0, $call135 = 0, $call87 = 0, $call91 = 0, $call97 = 0, $cmp = 0, $cmp1$i = 0, $cmp107 = 0, $cmp11 = 0, $cmp111 = 0, $cmp115 = 0, $cmp119 = 0, $cmp16 = 0, $cmp2 = 0, $cmp21 = 0, $cmp25 = 0, $cmp28 = 0, $cmp40 = 0;
 var $cmp5 = 0, $cmp62 = 0, $cmp68 = 0, $cmp7 = 0, $d_buf = 0, $div = 0, $div126 = 0, $gzhead = 0, $hash_bits = 0, $hash_mask = 0, $hash_shift = 0, $hash_size = 0, $head = 0, $head$i = 0, $high_water = 0, $l_buf = 0, $level131 = 0, $lit_bufsize = 0, $memLevel$off = 0, $msg = 0;
 var $mul = 0, $mul105 = 0, $mul129 = 0, $opaque = 0, $opaque67 = 0, $or$cond = 0, $or$cond2 = 0, $or$cond94 = 0, $pending_buf = 0, $pending_buf$i = 0, $pending_buf_size = 0, $prev = 0, $prev$i = 0, $retval$0 = 0, $shl = 0, $shl78 = 0, $shl99 = 0, $state = 0, $status = 0, $status3$i = 0;
 var $strategy132 = 0, $sub = 0, $sub31 = 0, $sub31$windowBits = 0, $sub76 = 0, $sub80 = 0, $sub83 = 0, $tobool$i = 0, $tobool24$i = 0, $tobool32$i = 0, $tobool40$i = 0, $w_bits = 0, $w_mask = 0, $w_size = 0, $window = 0, $window$i = 0, $windowBits$addr$0 = 0, $wrap$0 = 0, $wrap73 = 0, $zalloc = 0;
 var $zfree = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($version|0)==(0|0);
 if ($cmp) {
  $retval$0 = -6;
  return ($retval$0|0);
 }
 $0 = load1($version);
 $cmp2 = ($0<<24>>24)!=(49);
 $cmp5 = ($stream_size|0)!=(56);
 $or$cond = $cmp5 | $cmp2;
 if ($or$cond) {
  $retval$0 = -6;
  return ($retval$0|0);
 }
 $cmp7 = ($strm|0)==(0|0);
 if ($cmp7) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $msg = ((($strm)) + 24|0);
 store4($msg,0);
 $zalloc = ((($strm)) + 32|0);
 $1 = load4($zalloc);
 $cmp11 = ($1|0)==(0|0);
 if ($cmp11) {
  store4($zalloc,3);
  $opaque = ((($strm)) + 40|0);
  store4($opaque,0);
  $12 = 3;
 } else {
  $12 = $1;
 }
 $zfree = ((($strm)) + 36|0);
 $2 = load4($zfree);
 $cmp16 = ($2|0)==(0|0);
 if ($cmp16) {
  store4($zfree,1);
 }
 $cmp21 = ($level|0)==(-1);
 $$level = $cmp21 ? 6 : $level;
 $cmp25 = ($windowBits|0)<(0);
 if ($cmp25) {
  $sub = (0 - ($windowBits))|0;
  $windowBits$addr$0 = $sub;$wrap$0 = 0;
 } else {
  $cmp28 = ($windowBits|0)>(15);
  $sub31 = (($windowBits) + -16)|0;
  $sub31$windowBits = $cmp28 ? $sub31 : $windowBits;
  $$ = $cmp28 ? 2 : 1;
  $windowBits$addr$0 = $sub31$windowBits;$wrap$0 = $$;
 }
 $memLevel$off = (($memLevel) + -1)|0;
 $3 = ($memLevel$off>>>0)>(8);
 $cmp40 = ($method|0)!=(8);
 $or$cond2 = $cmp40 | $3;
 $4 = $windowBits$addr$0 & -8;
 $5 = ($4|0)!=(8);
 $6 = $or$cond2 | $5;
 $7 = ($$level>>>0)>(9);
 $8 = $7 | $6;
 $9 = ($strategy>>>0)>(4);
 $10 = $9 | $8;
 if ($10) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $cmp62 = ($windowBits$addr$0|0)==(8);
 $$windowBits$addr$0 = $cmp62 ? 9 : $windowBits$addr$0;
 $opaque67 = ((($strm)) + 40|0);
 $11 = load4($opaque67);
 $call = (FUNCTION_TABLE_iiii[$12 & 7]($11,1,5828)|0);
 $cmp68 = ($call|0)==(0|0);
 if ($cmp68) {
  $retval$0 = -4;
  return ($retval$0|0);
 }
 $state = ((($strm)) + 28|0);
 store4($state,$call);
 store4($call,$strm);
 $wrap73 = ((($call)) + 24|0);
 store4($wrap73,$wrap$0);
 $gzhead = ((($call)) + 28|0);
 store4($gzhead,0);
 $w_bits = ((($call)) + 48|0);
 store4($w_bits,$$windowBits$addr$0);
 $shl = 1 << $$windowBits$addr$0;
 $w_size = ((($call)) + 44|0);
 store4($w_size,$shl);
 $sub76 = (($shl) + -1)|0;
 $w_mask = ((($call)) + 52|0);
 store4($w_mask,$sub76);
 $add = (($memLevel) + 7)|0;
 $hash_bits = ((($call)) + 80|0);
 store4($hash_bits,$add);
 $shl78 = 1 << $add;
 $hash_size = ((($call)) + 76|0);
 store4($hash_size,$shl78);
 $sub80 = (($shl78) + -1)|0;
 $hash_mask = ((($call)) + 84|0);
 store4($hash_mask,$sub80);
 $sub83 = (($memLevel) + 9)|0;
 $div = (($sub83>>>0) / 3)&-1;
 $hash_shift = ((($call)) + 88|0);
 store4($hash_shift,$div);
 $13 = load4($zalloc);
 $14 = load4($opaque67);
 $call87 = (FUNCTION_TABLE_iiii[$13 & 7]($14,$shl,2)|0);
 $window = ((($call)) + 56|0);
 store4($window,$call87);
 $15 = load4($zalloc);
 $16 = load4($opaque67);
 $17 = load4($w_size);
 $call91 = (FUNCTION_TABLE_iiii[$15 & 7]($16,$17,2)|0);
 $prev = ((($call)) + 64|0);
 store4($prev,$call91);
 $18 = load4($w_size);
 $mul = $18 << 1;
 _memset(($call91|0),0,($mul|0))|0;
 $19 = load4($zalloc);
 $20 = load4($opaque67);
 $21 = load4($hash_size);
 $call97 = (FUNCTION_TABLE_iiii[$19 & 7]($20,$21,2)|0);
 $head = ((($call)) + 68|0);
 store4($head,$call97);
 $high_water = ((($call)) + 5824|0);
 store4($high_water,0);
 $add98 = (($memLevel) + 6)|0;
 $shl99 = 1 << $add98;
 $lit_bufsize = ((($call)) + 5788|0);
 store4($lit_bufsize,$shl99);
 $22 = load4($zalloc);
 $23 = load4($opaque67);
 $call103 = (FUNCTION_TABLE_iiii[$22 & 7]($23,$shl99,4)|0);
 $pending_buf = ((($call)) + 8|0);
 store4($pending_buf,$call103);
 $24 = load4($lit_bufsize);
 $mul105 = $24 << 2;
 $pending_buf_size = ((($call)) + 12|0);
 store4($pending_buf_size,$mul105);
 $25 = load4($window);
 $cmp107 = ($25|0)==(0|0);
 if (!($cmp107)) {
  $26 = load4($prev);
  $cmp111 = ($26|0)==(0|0);
  if (!($cmp111)) {
   $27 = load4($head);
   $cmp115 = ($27|0)==(0|0);
   $cmp119 = ($call103|0)==(0|0);
   $or$cond94 = $cmp115 | $cmp119;
   if (!($or$cond94)) {
    $div126 = $24 >>> 1;
    $add$ptr = (($call103) + ($div126<<1)|0);
    $d_buf = ((($call)) + 5796|0);
    store4($d_buf,$add$ptr);
    $mul129 = ($24*3)|0;
    $add$ptr130 = (($call103) + ($mul129)|0);
    $l_buf = ((($call)) + 5784|0);
    store4($l_buf,$add$ptr130);
    $level131 = ((($call)) + 132|0);
    store4($level131,$$level);
    $strategy132 = ((($call)) + 136|0);
    store4($strategy132,$strategy);
    $46 = ((($call)) + 36|0);
    store1($46,8);
    $call135 = (_deflateReset($strm)|0);
    $retval$0 = $call135;
    return ($retval$0|0);
   }
  }
 }
 $status = ((($call)) + 4|0);
 store4($status,666);
 $28 = load4((1776));
 store4($msg,$28);
 $29 = load4($state);
 $cmp1$i = ($29|0)==(0|0);
 if ($cmp1$i) {
  $retval$0 = -4;
  return ($retval$0|0);
 }
 $status3$i = ((($29)) + 4|0);
 $30 = load4($status3$i);
 switch ($30|0) {
 case 42: case 69: case 73: case 91: case 103: case 113: case 666:  {
  break;
 }
 default: {
  $retval$0 = -4;
  return ($retval$0|0);
 }
 }
 $pending_buf$i = ((($29)) + 8|0);
 $31 = load4($pending_buf$i);
 $tobool$i = ($31|0)==(0|0);
 if ($tobool$i) {
  $$in$i = $29;
 } else {
  $32 = load4($zfree);
  $33 = load4($opaque67);
  FUNCTION_TABLE_vii[$32 & 1]($33,$31);
  $$pre$i = load4($state);
  $$in$i = $$pre$i;
 }
 $head$i = ((($$in$i)) + 68|0);
 $34 = load4($head$i);
 $tobool24$i = ($34|0)==(0|0);
 if ($tobool24$i) {
  $$in42$i = $$in$i;
 } else {
  $35 = load4($zfree);
  $36 = load4($opaque67);
  FUNCTION_TABLE_vii[$35 & 1]($36,$34);
  $$pre36$i = load4($state);
  $$in42$i = $$pre36$i;
 }
 $prev$i = ((($$in42$i)) + 64|0);
 $37 = load4($prev$i);
 $tobool32$i = ($37|0)==(0|0);
 if ($tobool32$i) {
  $$in43$i = $$in42$i;
 } else {
  $38 = load4($zfree);
  $39 = load4($opaque67);
  FUNCTION_TABLE_vii[$38 & 1]($39,$37);
  $$pre37$i = load4($state);
  $$in43$i = $$pre37$i;
 }
 $window$i = ((($$in43$i)) + 56|0);
 $40 = load4($window$i);
 $tobool40$i = ($40|0)==(0|0);
 if ($tobool40$i) {
  $45 = $$in43$i;
 } else {
  $41 = load4($zfree);
  $42 = load4($opaque67);
  FUNCTION_TABLE_vii[$41 & 1]($42,$40);
  $$pre38$i = load4($state);
  $45 = $$pre38$i;
 }
 $43 = load4($zfree);
 $44 = load4($opaque67);
 FUNCTION_TABLE_vii[$43 & 1]($44,$45);
 store4($state,0);
 $retval$0 = -4;
 return ($retval$0|0);
}
function _deflateReset($strm) {
 $strm = $strm|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $adler = 0, $arrayidx$i = 0, $block_start$i = 0, $call = 0, $call15 = 0, $cmp = 0;
 var $cmp1 = 0, $cmp14 = 0, $cmp3 = 0, $cmp5 = 0, $cmp7 = 0, $cond = 0, $cond16 = 0, $conv$i = 0, $conv11$i = 0, $conv14$i = 0, $conv8$i = 0, $data_type = 0, $good_length$i = 0, $good_match$i = 0, $hash_size$i = 0, $head$i = 0, $ins_h$i = 0, $last_flush = 0, $level$i = 0, $lookahead$i = 0;
 var $match_available$i = 0, $match_length$i = 0, $match_start$i = 0, $max_chain$i = 0, $max_chain_length$i = 0, $max_lazy$i = 0, $max_lazy_match$i = 0, $msg = 0, $mul$i = 0, $mul4$i = 0, $nice_length$i = 0, $nice_match$i = 0, $pending = 0, $pending_buf = 0, $pending_out = 0, $prev_length$i = 0, $retval$0 = 0, $state = 0, $status = 0, $strstart$i = 0;
 var $sub = 0, $sub$i = 0, $sub3$i = 0, $tobool = 0, $total_in = 0, $total_out = 0, $w_size$i = 0, $window_size$i = 0, $wrap = 0, $zalloc = 0, $zfree = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($strm|0)==(0|0);
 if ($cmp) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $state = ((($strm)) + 28|0);
 $0 = load4($state);
 $cmp1 = ($0|0)==(0|0);
 if ($cmp1) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $zalloc = ((($strm)) + 32|0);
 $1 = load4($zalloc);
 $cmp3 = ($1|0)==(0|0);
 if ($cmp3) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $zfree = ((($strm)) + 36|0);
 $2 = load4($zfree);
 $cmp5 = ($2|0)==(0|0);
 if ($cmp5) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $total_out = ((($strm)) + 20|0);
 store4($total_out,0);
 $total_in = ((($strm)) + 8|0);
 store4($total_in,0);
 $msg = ((($strm)) + 24|0);
 store4($msg,0);
 $data_type = ((($strm)) + 44|0);
 store4($data_type,2);
 $pending = ((($0)) + 20|0);
 store4($pending,0);
 $pending_buf = ((($0)) + 8|0);
 $3 = load4($pending_buf);
 $pending_out = ((($0)) + 16|0);
 store4($pending_out,$3);
 $wrap = ((($0)) + 24|0);
 $4 = load4($wrap);
 $cmp7 = ($4|0)<(0);
 $sub = (0 - ($4))|0;
 if ($cmp7) {
  store4($wrap,$sub);
  $5 = $sub;
 } else {
  $5 = $4;
 }
 $tobool = ($5|0)!=(0);
 $cond = $tobool ? 42 : 113;
 $status = ((($0)) + 4|0);
 store4($status,$cond);
 $cmp14 = ($5|0)==(2);
 if ($cmp14) {
  $call = (_crc32(0,0,0)|0);
  $cond16 = $call;
 } else {
  $call15 = (_adler32(0,0,0)|0);
  $cond16 = $call15;
 }
 $adler = ((($strm)) + 48|0);
 store4($adler,$cond16);
 $last_flush = ((($0)) + 40|0);
 store4($last_flush,0);
 __tr_init($0);
 $w_size$i = ((($0)) + 44|0);
 $6 = load4($w_size$i);
 $mul$i = $6 << 1;
 $window_size$i = ((($0)) + 60|0);
 store4($window_size$i,$mul$i);
 $hash_size$i = ((($0)) + 76|0);
 $7 = load4($hash_size$i);
 $sub$i = (($7) + -1)|0;
 $head$i = ((($0)) + 68|0);
 $8 = load4($head$i);
 $arrayidx$i = (($8) + ($sub$i<<1)|0);
 store2($arrayidx$i,0);
 $sub3$i = $7 << 1;
 $mul4$i = (($sub3$i) + -2)|0;
 _memset(($8|0),0,($mul4$i|0))|0;
 $level$i = ((($0)) + 132|0);
 $9 = load4($level$i);
 $max_lazy$i = (((1024 + (($9*12)|0)|0)) + 2|0);
 $10 = load2($max_lazy$i);
 $conv$i = $10&65535;
 $max_lazy_match$i = ((($0)) + 128|0);
 store4($max_lazy_match$i,$conv$i);
 $good_length$i = (1024 + (($9*12)|0)|0);
 $11 = load2($good_length$i);
 $conv8$i = $11&65535;
 $good_match$i = ((($0)) + 140|0);
 store4($good_match$i,$conv8$i);
 $nice_length$i = (((1024 + (($9*12)|0)|0)) + 4|0);
 $12 = load2($nice_length$i);
 $conv11$i = $12&65535;
 $nice_match$i = ((($0)) + 144|0);
 store4($nice_match$i,$conv11$i);
 $max_chain$i = (((1024 + (($9*12)|0)|0)) + 6|0);
 $13 = load2($max_chain$i);
 $conv14$i = $13&65535;
 $max_chain_length$i = ((($0)) + 124|0);
 store4($max_chain_length$i,$conv14$i);
 $strstart$i = ((($0)) + 108|0);
 store4($strstart$i,0);
 $block_start$i = ((($0)) + 92|0);
 store4($block_start$i,0);
 $lookahead$i = ((($0)) + 116|0);
 store4($lookahead$i,0);
 $prev_length$i = ((($0)) + 120|0);
 store4($prev_length$i,2);
 $match_length$i = ((($0)) + 96|0);
 store4($match_length$i,2);
 $match_start$i = ((($0)) + 112|0);
 store4($match_start$i,0);
 $match_available$i = ((($0)) + 104|0);
 store4($match_available$i,0);
 $ins_h$i = ((($0)) + 72|0);
 store4($ins_h$i,0);
 $retval$0 = 0;
 return ($retval$0|0);
}
function _deflate_stored($s,$flush) {
 $s = $s|0;
 $flush = $flush|0;
 var $$$i = 0, $$$i59 = 0, $$$i80 = 0, $$pr = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$i = 0, $add$i67 = 0, $add$i88 = 0, $add$ptr$i = 0, $add$ptr$i63 = 0, $add$ptr$i84 = 0, $add$ptr9$i = 0, $add$ptr9$i65 = 0, $add$ptr9$i86 = 0, $add17 = 0;
 var $arrayidx = 0, $arrayidx51 = 0, $arrayidx72 = 0, $avail_out = 0, $avail_out$i = 0, $avail_out$i57 = 0, $avail_out$i78 = 0, $avail_out62 = 0, $avail_out84 = 0, $block_start = 0, $cmp = 0, $cmp$i = 0, $cmp$i58 = 0, $cmp$i79 = 0, $cmp16$i = 0, $cmp16$i71 = 0, $cmp16$i92 = 0, $cmp19 = 0, $cmp2$i = 0, $cmp2$i60 = 0;
 var $cmp2$i81 = 0, $cmp21 = 0, $cmp28 = 0, $cmp3 = 0, $cmp36 = 0, $cmp44 = 0, $cmp47 = 0, $cmp6 = 0, $cmp63 = 0, $cmp68 = 0, $cmp79 = 0, $cmp85 = 0, $cond = 0, $cond54 = 0, $cond75 = 0, $cond90 = 0, $cond94 = 0, $conv = 0, $lookahead = 0, $next_out$i = 0;
 var $next_out$i61 = 0, $next_out$i82 = 0, $or$cond = 0, $pending$i = 0, $pending$i56 = 0, $pending$i77 = 0, $pending12$i = 0, $pending12$i69 = 0, $pending12$i90 = 0, $pending_buf$i = 0, $pending_buf$i73 = 0, $pending_buf$i94 = 0, $pending_buf_size = 0, $pending_out$i = 0, $pending_out$i62 = 0, $pending_out$i83 = 0, $pending_out8$i = 0, $pending_out8$i64 = 0, $pending_out8$i85 = 0, $retval$0 = 0;
 var $state$i = 0, $state$i55 = 0, $state$i76 = 0, $strstart = 0, $sub = 0, $sub$ = 0, $sub$i = 0, $sub$i68 = 0, $sub$i89 = 0, $sub13$i = 0, $sub13$i70 = 0, $sub13$i91 = 0, $sub24 = 0, $sub42 = 0, $sub43 = 0, $sub78 = 0, $total_out$i = 0, $total_out$i66 = 0, $total_out$i87 = 0, $w_size = 0;
 var $window50 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $pending_buf_size = ((($s)) + 12|0);
 $0 = load4($pending_buf_size);
 $sub = (($0) + -5)|0;
 $cmp = ($sub>>>0)<(65535);
 $sub$ = $cmp ? $sub : 65535;
 $lookahead = ((($s)) + 116|0);
 $strstart = ((($s)) + 108|0);
 $block_start = ((($s)) + 92|0);
 $w_size = ((($s)) + 44|0);
 $window50 = ((($s)) + 56|0);
 while(1) {
  $1 = load4($lookahead);
  $cmp3 = ($1>>>0)<(2);
  if ($cmp3) {
   _fill_window($s);
   $2 = load4($lookahead);
   $3 = $2 | $flush;
   $4 = ($3|0)==(0);
   if ($4) {
    $retval$0 = 0;
    label = 28;
    break;
   }
   $cmp6 = ($2|0)==(0);
   if ($cmp6) {
    label = 20;
    break;
   } else {
    $6 = $2;
   }
  } else {
   $6 = $1;
  }
  $5 = load4($strstart);
  $add = (($5) + ($6))|0;
  store4($strstart,$add);
  store4($lookahead,0);
  $7 = load4($block_start);
  $add17 = (($7) + ($sub$))|0;
  $cmp19 = ($add|0)!=(0);
  $cmp21 = ($add>>>0)<($add17>>>0);
  $or$cond = $cmp19 & $cmp21;
  if ($or$cond) {
   $25 = $7;$26 = $add;
  } else {
   $sub24 = (($add) - ($add17))|0;
   store4($lookahead,$sub24);
   store4($strstart,$add17);
   $cmp28 = ($7|0)>(-1);
   if ($cmp28) {
    $8 = load4($window50);
    $arrayidx = (($8) + ($7)|0);
    $cond = $arrayidx;
   } else {
    $cond = 0;
   }
   __tr_flush_block($s,$cond,$sub$,0);
   $9 = load4($strstart);
   store4($block_start,$9);
   $10 = load4($s);
   $state$i = ((($10)) + 28|0);
   $11 = load4($state$i);
   $pending$i = ((($11)) + 20|0);
   $12 = load4($pending$i);
   $avail_out$i = ((($10)) + 16|0);
   $13 = load4($avail_out$i);
   $cmp$i = ($12>>>0)>($13>>>0);
   $$$i = $cmp$i ? $13 : $12;
   $cmp2$i = ($$$i|0)==(0);
   if (!($cmp2$i)) {
    $next_out$i = ((($10)) + 12|0);
    $14 = load4($next_out$i);
    $pending_out$i = ((($11)) + 16|0);
    $15 = load4($pending_out$i);
    _memcpy(($14|0),($15|0),($$$i|0))|0;
    $16 = load4($next_out$i);
    $add$ptr$i = (($16) + ($$$i)|0);
    store4($next_out$i,$add$ptr$i);
    $17 = load4($state$i);
    $pending_out8$i = ((($17)) + 16|0);
    $18 = load4($pending_out8$i);
    $add$ptr9$i = (($18) + ($$$i)|0);
    store4($pending_out8$i,$add$ptr9$i);
    $total_out$i = ((($10)) + 20|0);
    $19 = load4($total_out$i);
    $add$i = (($19) + ($$$i))|0;
    store4($total_out$i,$add$i);
    $20 = load4($avail_out$i);
    $sub$i = (($20) - ($$$i))|0;
    store4($avail_out$i,$sub$i);
    $pending12$i = ((($17)) + 20|0);
    $21 = load4($pending12$i);
    $sub13$i = (($21) - ($$$i))|0;
    store4($pending12$i,$sub13$i);
    $cmp16$i = ($sub13$i|0)==(0);
    if ($cmp16$i) {
     $pending_buf$i = ((($17)) + 8|0);
     $22 = load4($pending_buf$i);
     store4($pending_out8$i,$22);
    }
   }
   $23 = load4($s);
   $avail_out = ((($23)) + 16|0);
   $24 = load4($avail_out);
   $cmp36 = ($24|0)==(0);
   if ($cmp36) {
    $retval$0 = 0;
    label = 28;
    break;
   }
   $$pr = load4($block_start);
   $$pre = load4($strstart);
   $25 = $$pr;$26 = $$pre;
  }
  $sub42 = (($26) - ($25))|0;
  $27 = load4($w_size);
  $sub43 = (($27) + -262)|0;
  $cmp44 = ($sub42>>>0)<($sub43>>>0);
  if ($cmp44) {
   continue;
  }
  $cmp47 = ($25|0)>(-1);
  if ($cmp47) {
   $28 = load4($window50);
   $arrayidx51 = (($28) + ($25)|0);
   $cond54 = $arrayidx51;
  } else {
   $cond54 = 0;
  }
  __tr_flush_block($s,$cond54,$sub42,0);
  $29 = load4($strstart);
  store4($block_start,$29);
  $30 = load4($s);
  $state$i76 = ((($30)) + 28|0);
  $31 = load4($state$i76);
  $pending$i77 = ((($31)) + 20|0);
  $32 = load4($pending$i77);
  $avail_out$i78 = ((($30)) + 16|0);
  $33 = load4($avail_out$i78);
  $cmp$i79 = ($32>>>0)>($33>>>0);
  $$$i80 = $cmp$i79 ? $33 : $32;
  $cmp2$i81 = ($$$i80|0)==(0);
  if (!($cmp2$i81)) {
   $next_out$i82 = ((($30)) + 12|0);
   $34 = load4($next_out$i82);
   $pending_out$i83 = ((($31)) + 16|0);
   $35 = load4($pending_out$i83);
   _memcpy(($34|0),($35|0),($$$i80|0))|0;
   $36 = load4($next_out$i82);
   $add$ptr$i84 = (($36) + ($$$i80)|0);
   store4($next_out$i82,$add$ptr$i84);
   $37 = load4($state$i76);
   $pending_out8$i85 = ((($37)) + 16|0);
   $38 = load4($pending_out8$i85);
   $add$ptr9$i86 = (($38) + ($$$i80)|0);
   store4($pending_out8$i85,$add$ptr9$i86);
   $total_out$i87 = ((($30)) + 20|0);
   $39 = load4($total_out$i87);
   $add$i88 = (($39) + ($$$i80))|0;
   store4($total_out$i87,$add$i88);
   $40 = load4($avail_out$i78);
   $sub$i89 = (($40) - ($$$i80))|0;
   store4($avail_out$i78,$sub$i89);
   $pending12$i90 = ((($37)) + 20|0);
   $41 = load4($pending12$i90);
   $sub13$i91 = (($41) - ($$$i80))|0;
   store4($pending12$i90,$sub13$i91);
   $cmp16$i92 = ($sub13$i91|0)==(0);
   if ($cmp16$i92) {
    $pending_buf$i94 = ((($37)) + 8|0);
    $42 = load4($pending_buf$i94);
    store4($pending_out8$i85,$42);
   }
  }
  $43 = load4($s);
  $avail_out62 = ((($43)) + 16|0);
  $44 = load4($avail_out62);
  $cmp63 = ($44|0)==(0);
  if ($cmp63) {
   $retval$0 = 0;
   label = 28;
   break;
  }
 }
 if ((label|0) == 20) {
  $45 = load4($block_start);
  $cmp68 = ($45|0)>(-1);
  if ($cmp68) {
   $46 = load4($window50);
   $arrayidx72 = (($46) + ($45)|0);
   $cond75 = $arrayidx72;
  } else {
   $cond75 = 0;
  }
  $47 = load4($strstart);
  $sub78 = (($47) - ($45))|0;
  $cmp79 = ($flush|0)==(4);
  $conv = $cmp79&1;
  __tr_flush_block($s,$cond75,$sub78,$conv);
  $48 = load4($strstart);
  store4($block_start,$48);
  $49 = load4($s);
  $state$i55 = ((($49)) + 28|0);
  $50 = load4($state$i55);
  $pending$i56 = ((($50)) + 20|0);
  $51 = load4($pending$i56);
  $avail_out$i57 = ((($49)) + 16|0);
  $52 = load4($avail_out$i57);
  $cmp$i58 = ($51>>>0)>($52>>>0);
  $$$i59 = $cmp$i58 ? $52 : $51;
  $cmp2$i60 = ($$$i59|0)==(0);
  if (!($cmp2$i60)) {
   $next_out$i61 = ((($49)) + 12|0);
   $53 = load4($next_out$i61);
   $pending_out$i62 = ((($50)) + 16|0);
   $54 = load4($pending_out$i62);
   _memcpy(($53|0),($54|0),($$$i59|0))|0;
   $55 = load4($next_out$i61);
   $add$ptr$i63 = (($55) + ($$$i59)|0);
   store4($next_out$i61,$add$ptr$i63);
   $56 = load4($state$i55);
   $pending_out8$i64 = ((($56)) + 16|0);
   $57 = load4($pending_out8$i64);
   $add$ptr9$i65 = (($57) + ($$$i59)|0);
   store4($pending_out8$i64,$add$ptr9$i65);
   $total_out$i66 = ((($49)) + 20|0);
   $58 = load4($total_out$i66);
   $add$i67 = (($58) + ($$$i59))|0;
   store4($total_out$i66,$add$i67);
   $59 = load4($avail_out$i57);
   $sub$i68 = (($59) - ($$$i59))|0;
   store4($avail_out$i57,$sub$i68);
   $pending12$i69 = ((($56)) + 20|0);
   $60 = load4($pending12$i69);
   $sub13$i70 = (($60) - ($$$i59))|0;
   store4($pending12$i69,$sub13$i70);
   $cmp16$i71 = ($sub13$i70|0)==(0);
   if ($cmp16$i71) {
    $pending_buf$i73 = ((($56)) + 8|0);
    $61 = load4($pending_buf$i73);
    store4($pending_out8$i64,$61);
   }
  }
  $62 = load4($s);
  $avail_out84 = ((($62)) + 16|0);
  $63 = load4($avail_out84);
  $cmp85 = ($63|0)==(0);
  if ($cmp85) {
   $cond90 = $cmp79 ? 2 : 0;
   $retval$0 = $cond90;
   return ($retval$0|0);
  } else {
   $cond94 = $cmp79 ? 3 : 1;
   $retval$0 = $cond94;
   return ($retval$0|0);
  }
 }
 else if ((label|0) == 28) {
  return ($retval$0|0);
 }
 return (0)|0;
}
function _deflate_fast($s,$flush) {
 $s = $s|0;
 $flush = $flush|0;
 var $$$i = 0, $$$i119 = 0, $$pr = 0, $$pre = 0, $$pre138 = 0, $$pre139 = 0, $$pre140 = 0, $$pre141 = 0, $$pre142 = 0, $$pre143 = 0, $$pre144 = 0, $$sink = 0, $$sink$in = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
 var $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0;
 var $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0;
 var $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0;
 var $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $9 = 0;
 var $add = 0, $add$i = 0, $add$i127 = 0, $add$ptr$i = 0, $add$ptr$i123 = 0, $add$ptr9$i = 0, $add$ptr9$i125 = 0, $add121 = 0, $add132 = 0, $add50 = 0, $add51 = 0, $add61 = 0, $add91 = 0, $and = 0, $and104 = 0, $and138 = 0, $and17 = 0, $and97 = 0, $arrayidx = 0, $arrayidx101 = 0;
 var $arrayidx106 = 0, $arrayidx125 = 0, $arrayidx134 = 0, $arrayidx144 = 0, $arrayidx147 = 0, $arrayidx15 = 0, $arrayidx151 = 0, $arrayidx174 = 0, $arrayidx18 = 0, $arrayidx195 = 0, $arrayidx45 = 0, $arrayidx47 = 0, $arrayidx48 = 0, $arrayidx93 = 0, $avail_out = 0, $avail_out$i = 0, $avail_out$i117 = 0, $avail_out208 = 0, $bflush$0 = 0, $block_start = 0;
 var $call = 0, $cmp = 0, $cmp$i = 0, $cmp$i118 = 0, $cmp11 = 0, $cmp115 = 0, $cmp16$i = 0, $cmp16$i131 = 0, $cmp161 = 0, $cmp169 = 0, $cmp184 = 0, $cmp190 = 0, $cmp2 = 0, $cmp2$i = 0, $cmp2$i120 = 0, $cmp202 = 0, $cmp209 = 0, $cmp26 = 0, $cmp3 = 0, $cmp31 = 0;
 var $cmp36 = 0, $cmp55 = 0, $cmp6 = 0, $cmp70 = 0, $cmp76 = 0, $cmp80 = 0, $cond177 = 0, $cond198 = 0, $cond214 = 0, $cond218 = 0, $conv = 0, $conv109 = 0, $conv126 = 0, $conv135 = 0, $conv162 = 0, $conv19 = 0, $conv203 = 0, $conv21 = 0, $conv41 = 0, $conv44 = 0;
 var $conv49 = 0, $conv54 = 0, $conv54$pn = 0, $conv59 = 0, $conv71 = 0, $conv94 = 0, $d_buf = 0, $dec = 0, $dec114 = 0, $dec164 = 0, $dec84 = 0, $freq = 0, $freq156 = 0, $freq66 = 0, $hash_mask = 0, $hash_shift = 0, $head = 0, $idxprom = 0, $idxprom152 = 0, $inc = 0;
 var $inc118 = 0, $inc149 = 0, $inc157 = 0, $inc166 = 0, $inc53 = 0, $inc67 = 0, $inc86 = 0, $ins_h = 0, $l_buf = 0, $last_lit = 0, $lit_bufsize = 0, $lookahead = 0, $match_length = 0, $match_start = 0, $max_lazy_match = 0, $next_out$i = 0, $next_out$i121 = 0, $or$cond = 0, $or$cond114 = 0, $pending$i = 0;
 var $pending$i116 = 0, $pending12$i = 0, $pending12$i129 = 0, $pending_buf$i = 0, $pending_buf$i133 = 0, $pending_out$i = 0, $pending_out$i122 = 0, $pending_out8$i = 0, $pending_out8$i124 = 0, $prev = 0, $retval$0 = 0, $shl = 0, $shl130 = 0, $shl89 = 0, $shr113 = 0, $state$i = 0, $state$i115 = 0, $strstart = 0, $sub = 0, $sub$i = 0;
 var $sub$i128 = 0, $sub13$i = 0, $sub13$i130 = 0, $sub160 = 0, $sub180 = 0, $sub201 = 0, $sub30 = 0, $sub40 = 0, $sub43 = 0, $sub69 = 0, $sub74 = 0, $tobool = 0, $total_out$i = 0, $total_out$i126 = 0, $w_mask = 0, $w_size = 0, $window = 0, $xor = 0, $xor136 = 0, $xor95 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $lookahead = ((($s)) + 116|0);
 $cmp3 = ($flush|0)==(0);
 $ins_h = ((($s)) + 72|0);
 $hash_shift = ((($s)) + 88|0);
 $strstart = ((($s)) + 108|0);
 $window = ((($s)) + 56|0);
 $hash_mask = ((($s)) + 84|0);
 $head = ((($s)) + 68|0);
 $w_mask = ((($s)) + 52|0);
 $prev = ((($s)) + 64|0);
 $w_size = ((($s)) + 44|0);
 $match_length = ((($s)) + 96|0);
 $match_start = ((($s)) + 112|0);
 $last_lit = ((($s)) + 5792|0);
 $d_buf = ((($s)) + 5796|0);
 $l_buf = ((($s)) + 5784|0);
 $lit_bufsize = ((($s)) + 5788|0);
 $max_lazy_match = ((($s)) + 128|0);
 $block_start = ((($s)) + 92|0);
 while(1) {
  $0 = load4($lookahead);
  $cmp = ($0>>>0)<(262);
  if ($cmp) {
   _fill_window($s);
   $1 = load4($lookahead);
   $cmp2 = ($1>>>0)<(262);
   $or$cond = $cmp3 & $cmp2;
   if ($or$cond) {
    $retval$0 = 0;
    label = 32;
    break;
   }
   $cmp6 = ($1|0)==(0);
   if ($cmp6) {
    label = 24;
    break;
   }
   $cmp11 = ($1>>>0)>(2);
   if ($cmp11) {
    label = 6;
   } else {
    label = 9;
   }
  } else {
   label = 6;
  }
  if ((label|0) == 6) {
   label = 0;
   $2 = load4($ins_h);
   $3 = load4($hash_shift);
   $shl = $2 << $3;
   $4 = load4($strstart);
   $add = (($4) + 2)|0;
   $5 = load4($window);
   $arrayidx = (($5) + ($add)|0);
   $6 = load1($arrayidx);
   $conv = $6&255;
   $xor = $conv ^ $shl;
   $7 = load4($hash_mask);
   $and = $xor & $7;
   store4($ins_h,$and);
   $8 = load4($head);
   $arrayidx15 = (($8) + ($and<<1)|0);
   $9 = load2($arrayidx15);
   $10 = load4($w_mask);
   $and17 = $10 & $4;
   $11 = load4($prev);
   $arrayidx18 = (($11) + ($and17<<1)|0);
   store2($arrayidx18,$9);
   $conv19 = $9&65535;
   $conv21 = $4&65535;
   store2($arrayidx15,$conv21);
   $cmp26 = ($9<<16>>16)==(0);
   if ($cmp26) {
    label = 9;
   } else {
    $sub = (($4) - ($conv19))|0;
    $12 = load4($w_size);
    $sub30 = (($12) + -262)|0;
    $cmp31 = ($sub>>>0)>($sub30>>>0);
    if ($cmp31) {
     label = 9;
    } else {
     $call = (_longest_match($s,$conv19)|0);
     store4($match_length,$call);
     $13 = $call;
    }
   }
  }
  if ((label|0) == 9) {
   label = 0;
   $$pr = load4($match_length);
   $13 = $$pr;
  }
  $cmp36 = ($13>>>0)>(2);
  do {
   if ($cmp36) {
    $sub40 = (($13) + 253)|0;
    $conv41 = $sub40&255;
    $14 = load4($strstart);
    $15 = load4($match_start);
    $sub43 = (($14) - ($15))|0;
    $conv44 = $sub43&65535;
    $16 = load4($last_lit);
    $17 = load4($d_buf);
    $arrayidx45 = (($17) + ($16<<1)|0);
    store2($arrayidx45,$conv44);
    $inc = (($16) + 1)|0;
    store4($last_lit,$inc);
    $18 = load4($l_buf);
    $arrayidx47 = (($18) + ($16)|0);
    store1($arrayidx47,$conv41);
    $dec = (($sub43) + 65535)|0;
    $idxprom = $sub40 & 255;
    $arrayidx48 = (14467 + ($idxprom)|0);
    $19 = load1($arrayidx48);
    $conv49 = $19&255;
    $add50 = $conv49 | 256;
    $add51 = (($add50) + 1)|0;
    $freq = (((($s)) + 148|0) + ($add51<<2)|0);
    $20 = load2($freq);
    $inc53 = (($20) + 1)<<16>>16;
    store2($freq,$inc53);
    $conv54 = $dec & 65535;
    $cmp55 = ($conv54>>>0)<(256);
    $shr113 = $conv54 >>> 7;
    $add61 = (($shr113) + 256)|0;
    $conv54$pn = $cmp55 ? $conv54 : $add61;
    $$sink$in = (13955 + ($conv54$pn)|0);
    $$sink = load1($$sink$in);
    $conv59 = $$sink&255;
    $freq66 = (((($s)) + 2440|0) + ($conv59<<2)|0);
    $21 = load2($freq66);
    $inc67 = (($21) + 1)<<16>>16;
    store2($freq66,$inc67);
    $22 = load4($last_lit);
    $23 = load4($lit_bufsize);
    $sub69 = (($23) + -1)|0;
    $cmp70 = ($22|0)==($sub69|0);
    $conv71 = $cmp70&1;
    $24 = load4($match_length);
    $25 = load4($lookahead);
    $sub74 = (($25) - ($24))|0;
    store4($lookahead,$sub74);
    $26 = load4($max_lazy_match);
    $cmp76 = ($24>>>0)<=($26>>>0);
    $cmp80 = ($sub74>>>0)>(2);
    $or$cond114 = $cmp80 & $cmp76;
    if (!($or$cond114)) {
     $32 = load4($strstart);
     $add121 = (($32) + ($24))|0;
     store4($strstart,$add121);
     store4($match_length,0);
     $33 = load4($window);
     $arrayidx125 = (($33) + ($add121)|0);
     $34 = load1($arrayidx125);
     $conv126 = $34&255;
     store4($ins_h,$conv126);
     $35 = load4($hash_shift);
     $shl130 = $conv126 << $35;
     $add132 = (($add121) + 1)|0;
     $arrayidx134 = (($33) + ($add132)|0);
     $36 = load1($arrayidx134);
     $conv135 = $36&255;
     $xor136 = $conv135 ^ $shl130;
     $37 = load4($hash_mask);
     $and138 = $xor136 & $37;
     store4($ins_h,$and138);
     $51 = $add121;$bflush$0 = $conv71;
     break;
    }
    $dec84 = (($24) + -1)|0;
    store4($match_length,$dec84);
    $$pre = load4($strstart);
    $$pre138 = load4($ins_h);
    $$pre139 = load4($hash_shift);
    $$pre140 = load4($window);
    $$pre141 = load4($hash_mask);
    $$pre142 = load4($head);
    $$pre143 = load4($w_mask);
    $$pre144 = load4($prev);
    $27 = $$pre;$28 = $$pre138;$31 = $dec84;
    while(1) {
     $inc86 = (($27) + 1)|0;
     store4($strstart,$inc86);
     $shl89 = $28 << $$pre139;
     $add91 = (($27) + 3)|0;
     $arrayidx93 = (($$pre140) + ($add91)|0);
     $29 = load1($arrayidx93);
     $conv94 = $29&255;
     $xor95 = $conv94 ^ $shl89;
     $and97 = $xor95 & $$pre141;
     store4($ins_h,$and97);
     $arrayidx101 = (($$pre142) + ($and97<<1)|0);
     $30 = load2($arrayidx101);
     $and104 = $$pre143 & $inc86;
     $arrayidx106 = (($$pre144) + ($and104<<1)|0);
     store2($arrayidx106,$30);
     $conv109 = $inc86&65535;
     store2($arrayidx101,$conv109);
     $dec114 = (($31) + -1)|0;
     store4($match_length,$dec114);
     $cmp115 = ($dec114|0)==(0);
     if ($cmp115) {
      break;
     } else {
      $27 = $inc86;$28 = $and97;$31 = $dec114;
     }
    }
    $inc118 = (($27) + 2)|0;
    store4($strstart,$inc118);
    $51 = $inc118;$bflush$0 = $conv71;
   } else {
    $38 = load4($strstart);
    $39 = load4($window);
    $arrayidx144 = (($39) + ($38)|0);
    $40 = load1($arrayidx144);
    $41 = load4($last_lit);
    $42 = load4($d_buf);
    $arrayidx147 = (($42) + ($41<<1)|0);
    store2($arrayidx147,0);
    $inc149 = (($41) + 1)|0;
    store4($last_lit,$inc149);
    $43 = load4($l_buf);
    $arrayidx151 = (($43) + ($41)|0);
    store1($arrayidx151,$40);
    $idxprom152 = $40&255;
    $freq156 = (((($s)) + 148|0) + ($idxprom152<<2)|0);
    $44 = load2($freq156);
    $inc157 = (($44) + 1)<<16>>16;
    store2($freq156,$inc157);
    $45 = load4($last_lit);
    $46 = load4($lit_bufsize);
    $sub160 = (($46) + -1)|0;
    $cmp161 = ($45|0)==($sub160|0);
    $conv162 = $cmp161&1;
    $47 = load4($lookahead);
    $dec164 = (($47) + -1)|0;
    store4($lookahead,$dec164);
    $48 = load4($strstart);
    $inc166 = (($48) + 1)|0;
    store4($strstart,$inc166);
    $51 = $inc166;$bflush$0 = $conv162;
   }
  } while(0);
  $tobool = ($bflush$0|0)==(0);
  if ($tobool) {
   continue;
  }
  $49 = load4($block_start);
  $cmp169 = ($49|0)>(-1);
  if ($cmp169) {
   $50 = load4($window);
   $arrayidx174 = (($50) + ($49)|0);
   $cond177 = $arrayidx174;
  } else {
   $cond177 = 0;
  }
  $sub180 = (($51) - ($49))|0;
  __tr_flush_block($s,$cond177,$sub180,0);
  $52 = load4($strstart);
  store4($block_start,$52);
  $53 = load4($s);
  $state$i = ((($53)) + 28|0);
  $54 = load4($state$i);
  $pending$i = ((($54)) + 20|0);
  $55 = load4($pending$i);
  $avail_out$i = ((($53)) + 16|0);
  $56 = load4($avail_out$i);
  $cmp$i = ($55>>>0)>($56>>>0);
  $$$i = $cmp$i ? $56 : $55;
  $cmp2$i = ($$$i|0)==(0);
  if (!($cmp2$i)) {
   $next_out$i = ((($53)) + 12|0);
   $57 = load4($next_out$i);
   $pending_out$i = ((($54)) + 16|0);
   $58 = load4($pending_out$i);
   _memcpy(($57|0),($58|0),($$$i|0))|0;
   $59 = load4($next_out$i);
   $add$ptr$i = (($59) + ($$$i)|0);
   store4($next_out$i,$add$ptr$i);
   $60 = load4($state$i);
   $pending_out8$i = ((($60)) + 16|0);
   $61 = load4($pending_out8$i);
   $add$ptr9$i = (($61) + ($$$i)|0);
   store4($pending_out8$i,$add$ptr9$i);
   $total_out$i = ((($53)) + 20|0);
   $62 = load4($total_out$i);
   $add$i = (($62) + ($$$i))|0;
   store4($total_out$i,$add$i);
   $63 = load4($avail_out$i);
   $sub$i = (($63) - ($$$i))|0;
   store4($avail_out$i,$sub$i);
   $pending12$i = ((($60)) + 20|0);
   $64 = load4($pending12$i);
   $sub13$i = (($64) - ($$$i))|0;
   store4($pending12$i,$sub13$i);
   $cmp16$i = ($sub13$i|0)==(0);
   if ($cmp16$i) {
    $pending_buf$i = ((($60)) + 8|0);
    $65 = load4($pending_buf$i);
    store4($pending_out8$i,$65);
   }
  }
  $66 = load4($s);
  $avail_out = ((($66)) + 16|0);
  $67 = load4($avail_out);
  $cmp184 = ($67|0)==(0);
  if ($cmp184) {
   $retval$0 = 0;
   label = 32;
   break;
  }
 }
 if ((label|0) == 24) {
  $68 = load4($block_start);
  $cmp190 = ($68|0)>(-1);
  if ($cmp190) {
   $69 = load4($window);
   $arrayidx195 = (($69) + ($68)|0);
   $cond198 = $arrayidx195;
  } else {
   $cond198 = 0;
  }
  $70 = load4($strstart);
  $sub201 = (($70) - ($68))|0;
  $cmp202 = ($flush|0)==(4);
  $conv203 = $cmp202&1;
  __tr_flush_block($s,$cond198,$sub201,$conv203);
  $71 = load4($strstart);
  store4($block_start,$71);
  $72 = load4($s);
  $state$i115 = ((($72)) + 28|0);
  $73 = load4($state$i115);
  $pending$i116 = ((($73)) + 20|0);
  $74 = load4($pending$i116);
  $avail_out$i117 = ((($72)) + 16|0);
  $75 = load4($avail_out$i117);
  $cmp$i118 = ($74>>>0)>($75>>>0);
  $$$i119 = $cmp$i118 ? $75 : $74;
  $cmp2$i120 = ($$$i119|0)==(0);
  if (!($cmp2$i120)) {
   $next_out$i121 = ((($72)) + 12|0);
   $76 = load4($next_out$i121);
   $pending_out$i122 = ((($73)) + 16|0);
   $77 = load4($pending_out$i122);
   _memcpy(($76|0),($77|0),($$$i119|0))|0;
   $78 = load4($next_out$i121);
   $add$ptr$i123 = (($78) + ($$$i119)|0);
   store4($next_out$i121,$add$ptr$i123);
   $79 = load4($state$i115);
   $pending_out8$i124 = ((($79)) + 16|0);
   $80 = load4($pending_out8$i124);
   $add$ptr9$i125 = (($80) + ($$$i119)|0);
   store4($pending_out8$i124,$add$ptr9$i125);
   $total_out$i126 = ((($72)) + 20|0);
   $81 = load4($total_out$i126);
   $add$i127 = (($81) + ($$$i119))|0;
   store4($total_out$i126,$add$i127);
   $82 = load4($avail_out$i117);
   $sub$i128 = (($82) - ($$$i119))|0;
   store4($avail_out$i117,$sub$i128);
   $pending12$i129 = ((($79)) + 20|0);
   $83 = load4($pending12$i129);
   $sub13$i130 = (($83) - ($$$i119))|0;
   store4($pending12$i129,$sub13$i130);
   $cmp16$i131 = ($sub13$i130|0)==(0);
   if ($cmp16$i131) {
    $pending_buf$i133 = ((($79)) + 8|0);
    $84 = load4($pending_buf$i133);
    store4($pending_out8$i124,$84);
   }
  }
  $85 = load4($s);
  $avail_out208 = ((($85)) + 16|0);
  $86 = load4($avail_out208);
  $cmp209 = ($86|0)==(0);
  if ($cmp209) {
   $cond214 = $cmp202 ? 2 : 0;
   $retval$0 = $cond214;
   return ($retval$0|0);
  } else {
   $cond218 = $cmp202 ? 3 : 1;
   $retval$0 = $cond218;
   return ($retval$0|0);
  }
 }
 else if ((label|0) == 32) {
  return ($retval$0|0);
 }
 return (0)|0;
}
function _deflate_slow($s,$flush) {
 $s = $s|0;
 $flush = $flush|0;
 var $$$i = 0, $$$i151 = 0, $$$i172 = 0, $$pr = 0, $$pr190 = 0, $$pre = 0, $$sink = 0, $$sink$in = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0;
 var $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0;
 var $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $add = 0, $add$i = 0, $add$i159 = 0, $add$i180 = 0, $add$ptr$i = 0;
 var $add$ptr$i155 = 0, $add$ptr$i176 = 0, $add$ptr9$i = 0, $add$ptr9$i157 = 0, $add$ptr9$i178 = 0, $add122 = 0, $add70 = 0, $add85 = 0, $add86 = 0, $add96 = 0, $and = 0, $and128 = 0, $and135 = 0, $and17 = 0, $arrayidx = 0, $arrayidx124 = 0, $arrayidx132 = 0, $arrayidx137 = 0, $arrayidx15 = 0, $arrayidx158 = 0;
 var $arrayidx179 = 0, $arrayidx18 = 0, $arrayidx182 = 0, $arrayidx186 = 0, $arrayidx206 = 0, $arrayidx242 = 0, $arrayidx245 = 0, $arrayidx249 = 0, $arrayidx269 = 0, $arrayidx80 = 0, $arrayidx82 = 0, $arrayidx83 = 0, $avail_out = 0, $avail_out$i = 0, $avail_out$i149 = 0, $avail_out$i170 = 0, $avail_out222 = 0, $avail_out282 = 0, $block_start = 0, $call = 0;
 var $cmp = 0, $cmp$i = 0, $cmp$i150 = 0, $cmp$i171 = 0, $cmp105 = 0, $cmp11 = 0, $cmp115 = 0, $cmp147 = 0, $cmp153 = 0, $cmp16$i = 0, $cmp16$i163 = 0, $cmp16$i184 = 0, $cmp168 = 0, $cmp196 = 0, $cmp2 = 0, $cmp2$i = 0, $cmp2$i152 = 0, $cmp2$i173 = 0, $cmp201 = 0, $cmp223 = 0;
 var $cmp264 = 0, $cmp27 = 0, $cmp276 = 0, $cmp283 = 0, $cmp3 = 0, $cmp31 = 0, $cmp36 = 0, $cmp41 = 0, $cmp44 = 0, $cmp47 = 0, $cmp53 = 0, $cmp6 = 0, $cmp60 = 0, $cmp65 = 0, $cmp90 = 0, $cond161 = 0, $cond209 = 0, $cond272 = 0, $cond288 = 0, $cond292 = 0;
 var $conv = 0, $conv125 = 0, $conv140 = 0, $conv19 = 0, $conv21 = 0, $conv277 = 0, $conv74 = 0, $conv79 = 0, $conv84 = 0, $conv89 = 0, $conv89$pn = 0, $conv94 = 0, $d_buf = 0, $dec = 0, $dec146 = 0, $dec220 = 0, $dec232 = 0, $freq = 0, $freq101 = 0, $freq191 = 0;
 var $freq254 = 0, $hash_mask = 0, $hash_shift = 0, $head = 0, $idxprom = 0, $idxprom187 = 0, $idxprom250 = 0, $inc = 0, $inc102 = 0, $inc114 = 0, $inc151 = 0, $inc184 = 0, $inc192 = 0, $inc218 = 0, $inc230 = 0, $inc247 = 0, $inc255 = 0, $inc88 = 0, $ins_h = 0, $l_buf = 0;
 var $last_lit = 0, $lit_bufsize = 0, $lookahead = 0, $match_available = 0, $match_length = 0, $match_start = 0, $max_lazy_match = 0, $next_out$i = 0, $next_out$i153 = 0, $next_out$i174 = 0, $or$cond = 0, $or$cond195 = 0, $pending$i = 0, $pending$i148 = 0, $pending$i169 = 0, $pending12$i = 0, $pending12$i161 = 0, $pending12$i182 = 0, $pending_buf$i = 0, $pending_buf$i165 = 0;
 var $pending_buf$i186 = 0, $pending_out$i = 0, $pending_out$i154 = 0, $pending_out$i175 = 0, $pending_out8$i = 0, $pending_out8$i156 = 0, $pending_out8$i177 = 0, $prev = 0, $prev_length = 0, $prev_match = 0, $retval$2 = 0, $shl = 0, $shl120 = 0, $shr146 = 0, $state$i = 0, $state$i147 = 0, $state$i168 = 0, $strategy = 0, $strstart = 0, $sub = 0;
 var $sub$i = 0, $sub$i160 = 0, $sub$i181 = 0, $sub104 = 0, $sub108$neg = 0, $sub110 = 0, $sub112 = 0, $sub13$i = 0, $sub13$i162 = 0, $sub13$i183 = 0, $sub164 = 0, $sub177 = 0, $sub195 = 0, $sub212 = 0, $sub240 = 0, $sub275 = 0, $sub35 = 0, $sub52 = 0, $sub71 = 0, $sub73 = 0;
 var $sub76 = 0, $sub78 = 0, $tobool174 = 0, $tobool236 = 0, $total_out$i = 0, $total_out$i158 = 0, $total_out$i179 = 0, $w_mask = 0, $w_size = 0, $window = 0, $xor = 0, $xor126 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lookahead = ((($s)) + 116|0);
 $cmp3 = ($flush|0)==(0);
 $ins_h = ((($s)) + 72|0);
 $hash_shift = ((($s)) + 88|0);
 $strstart = ((($s)) + 108|0);
 $window = ((($s)) + 56|0);
 $hash_mask = ((($s)) + 84|0);
 $head = ((($s)) + 68|0);
 $w_mask = ((($s)) + 52|0);
 $prev = ((($s)) + 64|0);
 $match_length = ((($s)) + 96|0);
 $prev_length = ((($s)) + 120|0);
 $match_start = ((($s)) + 112|0);
 $prev_match = ((($s)) + 100|0);
 $last_lit = ((($s)) + 5792|0);
 $d_buf = ((($s)) + 5796|0);
 $l_buf = ((($s)) + 5784|0);
 $lit_bufsize = ((($s)) + 5788|0);
 $match_available = ((($s)) + 104|0);
 $block_start = ((($s)) + 92|0);
 $max_lazy_match = ((($s)) + 128|0);
 $w_size = ((($s)) + 44|0);
 $strategy = ((($s)) + 136|0);
 L1: while(1) {
  $$pr = load4($lookahead);
  $0 = $$pr;
  while(1) {
   $cmp = ($0>>>0)<(262);
   if ($cmp) {
    _fill_window($s);
    $1 = load4($lookahead);
    $cmp2 = ($1>>>0)<(262);
    $or$cond = $cmp3 & $cmp2;
    if ($or$cond) {
     $retval$2 = 0;
     label = 48;
     break L1;
    }
    $cmp6 = ($1|0)==(0);
    if ($cmp6) {
     label = 38;
     break L1;
    }
    $cmp11 = ($1>>>0)>(2);
    if ($cmp11) {
     label = 8;
    } else {
     $2 = load4($match_length);
     store4($prev_length,$2);
     $3 = load4($match_start);
     store4($prev_match,$3);
     store4($match_length,2);
     $126 = 2;
     label = 16;
    }
   } else {
    label = 8;
   }
   do {
    if ((label|0) == 8) {
     label = 0;
     $4 = load4($ins_h);
     $5 = load4($hash_shift);
     $shl = $4 << $5;
     $6 = load4($strstart);
     $add = (($6) + 2)|0;
     $7 = load4($window);
     $arrayidx = (($7) + ($add)|0);
     $8 = load1($arrayidx);
     $conv = $8&255;
     $xor = $conv ^ $shl;
     $9 = load4($hash_mask);
     $and = $xor & $9;
     store4($ins_h,$and);
     $10 = load4($head);
     $arrayidx15 = (($10) + ($and<<1)|0);
     $11 = load2($arrayidx15);
     $12 = load4($w_mask);
     $and17 = $12 & $6;
     $13 = load4($prev);
     $arrayidx18 = (($13) + ($and17<<1)|0);
     store2($arrayidx18,$11);
     $conv19 = $11&65535;
     $conv21 = $6&65535;
     store2($arrayidx15,$conv21);
     $14 = load4($match_length);
     store4($prev_length,$14);
     $15 = load4($match_start);
     store4($prev_match,$15);
     store4($match_length,2);
     $cmp27 = ($11<<16>>16)==(0);
     if ($cmp27) {
      $126 = 2;
      label = 16;
     } else {
      $16 = load4($max_lazy_match);
      $cmp31 = ($14>>>0)<($16>>>0);
      if ($cmp31) {
       $17 = load4($strstart);
       $sub = (($17) - ($conv19))|0;
       $18 = load4($w_size);
       $sub35 = (($18) + -262)|0;
       $cmp36 = ($sub>>>0)>($sub35>>>0);
       if ($cmp36) {
        $126 = 2;
        label = 16;
       } else {
        $call = (_longest_match($s,$conv19)|0);
        store4($match_length,$call);
        $cmp41 = ($call>>>0)<(6);
        if ($cmp41) {
         $19 = load4($strategy);
         $cmp44 = ($19|0)==(1);
         if (!($cmp44)) {
          $cmp47 = ($call|0)==(3);
          if (!($cmp47)) {
           $126 = $call;
           label = 16;
           break;
          }
          $20 = load4($strstart);
          $21 = load4($match_start);
          $sub52 = (($20) - ($21))|0;
          $cmp53 = ($sub52>>>0)>(4096);
          if (!($cmp53)) {
           $126 = 3;
           label = 16;
           break;
          }
         }
         store4($match_length,2);
         $126 = 2;
         label = 16;
        } else {
         $126 = $call;
         label = 16;
        }
       }
      } else {
       $22 = $14;$23 = 2;
      }
     }
    }
   } while(0);
   if ((label|0) == 16) {
    label = 0;
    $$pr190 = load4($prev_length);
    $22 = $$pr190;$23 = $126;
   }
   $cmp60 = ($22>>>0)<(3);
   $cmp65 = ($23>>>0)>($22>>>0);
   $or$cond195 = $cmp60 | $cmp65;
   if (!($or$cond195)) {
    break;
   }
   $66 = load4($match_available);
   $tobool174 = ($66|0)==(0);
   if ($tobool174) {
    store4($match_available,1);
    $97 = load4($strstart);
    $inc230 = (($97) + 1)|0;
    store4($strstart,$inc230);
    $98 = load4($lookahead);
    $dec232 = (($98) + -1)|0;
    store4($lookahead,$dec232);
    $0 = $dec232;
    continue;
   }
   $67 = load4($strstart);
   $sub177 = (($67) + -1)|0;
   $68 = load4($window);
   $arrayidx179 = (($68) + ($sub177)|0);
   $69 = load1($arrayidx179);
   $70 = load4($last_lit);
   $71 = load4($d_buf);
   $arrayidx182 = (($71) + ($70<<1)|0);
   store2($arrayidx182,0);
   $inc184 = (($70) + 1)|0;
   store4($last_lit,$inc184);
   $72 = load4($l_buf);
   $arrayidx186 = (($72) + ($70)|0);
   store1($arrayidx186,$69);
   $idxprom187 = $69&255;
   $freq191 = (((($s)) + 148|0) + ($idxprom187<<2)|0);
   $73 = load2($freq191);
   $inc192 = (($73) + 1)<<16>>16;
   store2($freq191,$inc192);
   $74 = load4($last_lit);
   $75 = load4($lit_bufsize);
   $sub195 = (($75) + -1)|0;
   $cmp196 = ($74|0)==($sub195|0);
   if ($cmp196) {
    $76 = load4($block_start);
    $cmp201 = ($76|0)>(-1);
    if ($cmp201) {
     $77 = load4($window);
     $arrayidx206 = (($77) + ($76)|0);
     $cond209 = $arrayidx206;
    } else {
     $cond209 = 0;
    }
    $78 = load4($strstart);
    $sub212 = (($78) - ($76))|0;
    __tr_flush_block($s,$cond209,$sub212,0);
    $79 = load4($strstart);
    store4($block_start,$79);
    $80 = load4($s);
    $state$i168 = ((($80)) + 28|0);
    $81 = load4($state$i168);
    $pending$i169 = ((($81)) + 20|0);
    $82 = load4($pending$i169);
    $avail_out$i170 = ((($80)) + 16|0);
    $83 = load4($avail_out$i170);
    $cmp$i171 = ($82>>>0)>($83>>>0);
    $$$i172 = $cmp$i171 ? $83 : $82;
    $cmp2$i173 = ($$$i172|0)==(0);
    if (!($cmp2$i173)) {
     $next_out$i174 = ((($80)) + 12|0);
     $84 = load4($next_out$i174);
     $pending_out$i175 = ((($81)) + 16|0);
     $85 = load4($pending_out$i175);
     _memcpy(($84|0),($85|0),($$$i172|0))|0;
     $86 = load4($next_out$i174);
     $add$ptr$i176 = (($86) + ($$$i172)|0);
     store4($next_out$i174,$add$ptr$i176);
     $87 = load4($state$i168);
     $pending_out8$i177 = ((($87)) + 16|0);
     $88 = load4($pending_out8$i177);
     $add$ptr9$i178 = (($88) + ($$$i172)|0);
     store4($pending_out8$i177,$add$ptr9$i178);
     $total_out$i179 = ((($80)) + 20|0);
     $89 = load4($total_out$i179);
     $add$i180 = (($89) + ($$$i172))|0;
     store4($total_out$i179,$add$i180);
     $90 = load4($avail_out$i170);
     $sub$i181 = (($90) - ($$$i172))|0;
     store4($avail_out$i170,$sub$i181);
     $pending12$i182 = ((($87)) + 20|0);
     $91 = load4($pending12$i182);
     $sub13$i183 = (($91) - ($$$i172))|0;
     store4($pending12$i182,$sub13$i183);
     $cmp16$i184 = ($sub13$i183|0)==(0);
     if ($cmp16$i184) {
      $pending_buf$i186 = ((($87)) + 8|0);
      $92 = load4($pending_buf$i186);
      store4($pending_out8$i177,$92);
     }
    }
   }
   $93 = load4($strstart);
   $inc218 = (($93) + 1)|0;
   store4($strstart,$inc218);
   $94 = load4($lookahead);
   $dec220 = (($94) + -1)|0;
   store4($lookahead,$dec220);
   $95 = load4($s);
   $avail_out222 = ((($95)) + 16|0);
   $96 = load4($avail_out222);
   $cmp223 = ($96|0)==(0);
   if ($cmp223) {
    $retval$2 = 0;
    label = 48;
    break L1;
   } else {
    $0 = $dec220;
   }
  }
  $24 = load4($strstart);
  $25 = load4($lookahead);
  $add70 = (($24) + -3)|0;
  $sub71 = (($add70) + ($25))|0;
  $sub73 = (($22) + 253)|0;
  $conv74 = $sub73&255;
  $sub76 = (($24) + 65535)|0;
  $26 = load4($prev_match);
  $sub78 = (($sub76) - ($26))|0;
  $conv79 = $sub78&65535;
  $27 = load4($last_lit);
  $28 = load4($d_buf);
  $arrayidx80 = (($28) + ($27<<1)|0);
  store2($arrayidx80,$conv79);
  $inc = (($27) + 1)|0;
  store4($last_lit,$inc);
  $29 = load4($l_buf);
  $arrayidx82 = (($29) + ($27)|0);
  store1($arrayidx82,$conv74);
  $dec = (($sub78) + 65535)|0;
  $idxprom = $sub73 & 255;
  $arrayidx83 = (14467 + ($idxprom)|0);
  $30 = load1($arrayidx83);
  $conv84 = $30&255;
  $add85 = $conv84 | 256;
  $add86 = (($add85) + 1)|0;
  $freq = (((($s)) + 148|0) + ($add86<<2)|0);
  $31 = load2($freq);
  $inc88 = (($31) + 1)<<16>>16;
  store2($freq,$inc88);
  $conv89 = $dec & 65535;
  $cmp90 = ($conv89>>>0)<(256);
  $shr146 = $conv89 >>> 7;
  $add96 = (($shr146) + 256)|0;
  $conv89$pn = $cmp90 ? $conv89 : $add96;
  $$sink$in = (13955 + ($conv89$pn)|0);
  $$sink = load1($$sink$in);
  $conv94 = $$sink&255;
  $freq101 = (((($s)) + 2440|0) + ($conv94<<2)|0);
  $32 = load2($freq101);
  $inc102 = (($32) + 1)<<16>>16;
  store2($freq101,$inc102);
  $33 = load4($last_lit);
  $34 = load4($lit_bufsize);
  $sub104 = (($34) + -1)|0;
  $35 = load4($prev_length);
  $36 = load4($lookahead);
  $sub108$neg = (1 - ($35))|0;
  $sub110 = (($sub108$neg) + ($36))|0;
  store4($lookahead,$sub110);
  $sub112 = (($35) + -2)|0;
  store4($prev_length,$sub112);
  $$pre = load4($strstart);
  $37 = $$pre;$47 = $sub112;
  while(1) {
   $inc114 = (($37) + 1)|0;
   store4($strstart,$inc114);
   $cmp115 = ($inc114>>>0)>($sub71>>>0);
   if (!($cmp115)) {
    $38 = load4($ins_h);
    $39 = load4($hash_shift);
    $shl120 = $38 << $39;
    $add122 = (($37) + 3)|0;
    $40 = load4($window);
    $arrayidx124 = (($40) + ($add122)|0);
    $41 = load1($arrayidx124);
    $conv125 = $41&255;
    $xor126 = $conv125 ^ $shl120;
    $42 = load4($hash_mask);
    $and128 = $xor126 & $42;
    store4($ins_h,$and128);
    $43 = load4($head);
    $arrayidx132 = (($43) + ($and128<<1)|0);
    $44 = load2($arrayidx132);
    $45 = load4($w_mask);
    $and135 = $45 & $inc114;
    $46 = load4($prev);
    $arrayidx137 = (($46) + ($and135<<1)|0);
    store2($arrayidx137,$44);
    $conv140 = $inc114&65535;
    store2($arrayidx132,$conv140);
   }
   $dec146 = (($47) + -1)|0;
   store4($prev_length,$dec146);
   $cmp147 = ($dec146|0)==(0);
   if ($cmp147) {
    break;
   } else {
    $37 = $inc114;$47 = $dec146;
   }
  }
  $cmp105 = ($33|0)==($sub104|0);
  store4($match_available,0);
  store4($match_length,2);
  $inc151 = (($37) + 2)|0;
  store4($strstart,$inc151);
  if (!($cmp105)) {
   continue;
  }
  $48 = load4($block_start);
  $cmp153 = ($48|0)>(-1);
  if ($cmp153) {
   $49 = load4($window);
   $arrayidx158 = (($49) + ($48)|0);
   $cond161 = $arrayidx158;
  } else {
   $cond161 = 0;
  }
  $sub164 = (($inc151) - ($48))|0;
  __tr_flush_block($s,$cond161,$sub164,0);
  $50 = load4($strstart);
  store4($block_start,$50);
  $51 = load4($s);
  $state$i = ((($51)) + 28|0);
  $52 = load4($state$i);
  $pending$i = ((($52)) + 20|0);
  $53 = load4($pending$i);
  $avail_out$i = ((($51)) + 16|0);
  $54 = load4($avail_out$i);
  $cmp$i = ($53>>>0)>($54>>>0);
  $$$i = $cmp$i ? $54 : $53;
  $cmp2$i = ($$$i|0)==(0);
  if (!($cmp2$i)) {
   $next_out$i = ((($51)) + 12|0);
   $55 = load4($next_out$i);
   $pending_out$i = ((($52)) + 16|0);
   $56 = load4($pending_out$i);
   _memcpy(($55|0),($56|0),($$$i|0))|0;
   $57 = load4($next_out$i);
   $add$ptr$i = (($57) + ($$$i)|0);
   store4($next_out$i,$add$ptr$i);
   $58 = load4($state$i);
   $pending_out8$i = ((($58)) + 16|0);
   $59 = load4($pending_out8$i);
   $add$ptr9$i = (($59) + ($$$i)|0);
   store4($pending_out8$i,$add$ptr9$i);
   $total_out$i = ((($51)) + 20|0);
   $60 = load4($total_out$i);
   $add$i = (($60) + ($$$i))|0;
   store4($total_out$i,$add$i);
   $61 = load4($avail_out$i);
   $sub$i = (($61) - ($$$i))|0;
   store4($avail_out$i,$sub$i);
   $pending12$i = ((($58)) + 20|0);
   $62 = load4($pending12$i);
   $sub13$i = (($62) - ($$$i))|0;
   store4($pending12$i,$sub13$i);
   $cmp16$i = ($sub13$i|0)==(0);
   if ($cmp16$i) {
    $pending_buf$i = ((($58)) + 8|0);
    $63 = load4($pending_buf$i);
    store4($pending_out8$i,$63);
   }
  }
  $64 = load4($s);
  $avail_out = ((($64)) + 16|0);
  $65 = load4($avail_out);
  $cmp168 = ($65|0)==(0);
  if ($cmp168) {
   $retval$2 = 0;
   label = 48;
   break;
  }
 }
 if ((label|0) == 38) {
  $99 = load4($match_available);
  $tobool236 = ($99|0)==(0);
  if (!($tobool236)) {
   $100 = load4($strstart);
   $sub240 = (($100) + -1)|0;
   $101 = load4($window);
   $arrayidx242 = (($101) + ($sub240)|0);
   $102 = load1($arrayidx242);
   $103 = load4($last_lit);
   $104 = load4($d_buf);
   $arrayidx245 = (($104) + ($103<<1)|0);
   store2($arrayidx245,0);
   $inc247 = (($103) + 1)|0;
   store4($last_lit,$inc247);
   $105 = load4($l_buf);
   $arrayidx249 = (($105) + ($103)|0);
   store1($arrayidx249,$102);
   $idxprom250 = $102&255;
   $freq254 = (((($s)) + 148|0) + ($idxprom250<<2)|0);
   $106 = load2($freq254);
   $inc255 = (($106) + 1)<<16>>16;
   store2($freq254,$inc255);
   store4($match_available,0);
  }
  $107 = load4($block_start);
  $cmp264 = ($107|0)>(-1);
  if ($cmp264) {
   $108 = load4($window);
   $arrayidx269 = (($108) + ($107)|0);
   $cond272 = $arrayidx269;
  } else {
   $cond272 = 0;
  }
  $109 = load4($strstart);
  $sub275 = (($109) - ($107))|0;
  $cmp276 = ($flush|0)==(4);
  $conv277 = $cmp276&1;
  __tr_flush_block($s,$cond272,$sub275,$conv277);
  $110 = load4($strstart);
  store4($block_start,$110);
  $111 = load4($s);
  $state$i147 = ((($111)) + 28|0);
  $112 = load4($state$i147);
  $pending$i148 = ((($112)) + 20|0);
  $113 = load4($pending$i148);
  $avail_out$i149 = ((($111)) + 16|0);
  $114 = load4($avail_out$i149);
  $cmp$i150 = ($113>>>0)>($114>>>0);
  $$$i151 = $cmp$i150 ? $114 : $113;
  $cmp2$i152 = ($$$i151|0)==(0);
  if (!($cmp2$i152)) {
   $next_out$i153 = ((($111)) + 12|0);
   $115 = load4($next_out$i153);
   $pending_out$i154 = ((($112)) + 16|0);
   $116 = load4($pending_out$i154);
   _memcpy(($115|0),($116|0),($$$i151|0))|0;
   $117 = load4($next_out$i153);
   $add$ptr$i155 = (($117) + ($$$i151)|0);
   store4($next_out$i153,$add$ptr$i155);
   $118 = load4($state$i147);
   $pending_out8$i156 = ((($118)) + 16|0);
   $119 = load4($pending_out8$i156);
   $add$ptr9$i157 = (($119) + ($$$i151)|0);
   store4($pending_out8$i156,$add$ptr9$i157);
   $total_out$i158 = ((($111)) + 20|0);
   $120 = load4($total_out$i158);
   $add$i159 = (($120) + ($$$i151))|0;
   store4($total_out$i158,$add$i159);
   $121 = load4($avail_out$i149);
   $sub$i160 = (($121) - ($$$i151))|0;
   store4($avail_out$i149,$sub$i160);
   $pending12$i161 = ((($118)) + 20|0);
   $122 = load4($pending12$i161);
   $sub13$i162 = (($122) - ($$$i151))|0;
   store4($pending12$i161,$sub13$i162);
   $cmp16$i163 = ($sub13$i162|0)==(0);
   if ($cmp16$i163) {
    $pending_buf$i165 = ((($118)) + 8|0);
    $123 = load4($pending_buf$i165);
    store4($pending_out8$i156,$123);
   }
  }
  $124 = load4($s);
  $avail_out282 = ((($124)) + 16|0);
  $125 = load4($avail_out282);
  $cmp283 = ($125|0)==(0);
  if ($cmp283) {
   $cond288 = $cmp276 ? 2 : 0;
   $retval$2 = $cond288;
   return ($retval$2|0);
  } else {
   $cond292 = $cmp276 ? 3 : 1;
   $retval$2 = $cond292;
   return ($retval$2|0);
  }
 }
 else if ((label|0) == 48) {
  return ($retval$2|0);
 }
 return (0)|0;
}
function _fill_window($s) {
 $s = $s|0;
 var $$pre = 0, $$pre91 = 0, $$pre92 = 0, $$sub81 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$i = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr110 = 0, $add$ptr39 = 0, $add$ptr41 = 0, $add$ptr87 = 0, $add112 = 0, $add31 = 0, $add43 = 0;
 var $add54 = 0, $add75 = 0, $add88 = 0, $add91 = 0, $adler$i = 0, $adler12$i = 0, $and = 0, $arrayidx = 0, $arrayidx15 = 0, $arrayidx50 = 0, $arrayidx56 = 0, $avail_in = 0, $avail_in65 = 0, $block_start = 0, $call$i = 0, $call14$i = 0, $cmp = 0, $cmp$i = 0, $cmp1$i = 0, $cmp101 = 0;
 var $cmp11 = 0, $cmp19 = 0, $cmp32 = 0, $cmp45 = 0, $cmp62 = 0, $cmp66 = 0, $cmp70 = 0, $cmp77 = 0, $cmp82 = 0, $cmp92 = 0, $conv = 0, $conv14 = 0, $conv18 = 0, $conv26 = 0, $conv51 = 0, $conv57 = 0, $dec = 0, $dec28 = 0, $hash_mask = 0, $hash_shift = 0;
 var $hash_size = 0, $head = 0, $high_water = 0, $incdec$ptr = 0, $incdec$ptr17 = 0, $ins_h = 0, $lookahead = 0, $match_start = 0, $more$0 = 0, $n$0 = 0, $n$1 = 0, $next_in18$pre$phi$iZ2D = 0, $p$0 = 0, $p$1 = 0, $prev = 0, $retval$0$i = 0, $shl = 0, $size$$i = 0, $state$i = 0, $strstart = 0;
 var $sub = 0, $sub$i = 0, $sub1 = 0, $sub100 = 0, $sub100$sub97 = 0, $sub13 = 0, $sub22 = 0, $sub4 = 0, $sub6 = 0, $sub8 = 0, $sub81 = 0, $sub9 = 0, $sub97 = 0, $tobool = 0, $tobool29 = 0, $total_in$i = 0, $w_size = 0, $window37 = 0, $window_size = 0, $wrap$i = 0;
 var $xor = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $w_size = ((($s)) + 44|0);
 $0 = load4($w_size);
 $window_size = ((($s)) + 60|0);
 $lookahead = ((($s)) + 116|0);
 $strstart = ((($s)) + 108|0);
 $sub4 = (($0) + -262)|0;
 $window37 = ((($s)) + 56|0);
 $ins_h = ((($s)) + 72|0);
 $hash_shift = ((($s)) + 88|0);
 $hash_mask = ((($s)) + 84|0);
 $match_start = ((($s)) + 112|0);
 $block_start = ((($s)) + 92|0);
 $hash_size = ((($s)) + 76|0);
 $head = ((($s)) + 68|0);
 $prev = ((($s)) + 64|0);
 $$pre = load4($lookahead);
 $2 = $$pre;$4 = $0;
 while(1) {
  $1 = load4($window_size);
  $sub = (($1) - ($2))|0;
  $3 = load4($strstart);
  $sub1 = (($sub) - ($3))|0;
  $add = (($sub4) + ($4))|0;
  $cmp = ($3>>>0)<($add>>>0);
  if ($cmp) {
   $19 = $3;$more$0 = $sub1;
  } else {
   $5 = load4($window37);
   $add$ptr = (($5) + ($0)|0);
   _memcpy(($5|0),($add$ptr|0),($0|0))|0;
   $6 = load4($match_start);
   $sub6 = (($6) - ($0))|0;
   store4($match_start,$sub6);
   $7 = load4($strstart);
   $sub8 = (($7) - ($0))|0;
   store4($strstart,$sub8);
   $8 = load4($block_start);
   $sub9 = (($8) - ($0))|0;
   store4($block_start,$sub9);
   $9 = load4($hash_size);
   $10 = load4($head);
   $arrayidx = (($10) + ($9<<1)|0);
   $n$0 = $9;$p$0 = $arrayidx;
   while(1) {
    $incdec$ptr = ((($p$0)) + -2|0);
    $11 = load2($incdec$ptr);
    $conv = $11&65535;
    $cmp11 = ($conv>>>0)<($0>>>0);
    $sub13 = (($conv) - ($0))|0;
    $12 = $sub13&65535;
    $conv14 = $cmp11 ? 0 : $12;
    store2($incdec$ptr,$conv14);
    $dec = (($n$0) + -1)|0;
    $tobool = ($dec|0)==(0);
    if ($tobool) {
     break;
    } else {
     $n$0 = $dec;$p$0 = $incdec$ptr;
    }
   }
   $13 = load4($prev);
   $arrayidx15 = (($13) + ($0<<1)|0);
   $n$1 = $0;$p$1 = $arrayidx15;
   while(1) {
    $incdec$ptr17 = ((($p$1)) + -2|0);
    $14 = load2($incdec$ptr17);
    $conv18 = $14&65535;
    $cmp19 = ($conv18>>>0)<($0>>>0);
    $sub22 = (($conv18) - ($0))|0;
    $15 = $sub22&65535;
    $conv26 = $cmp19 ? 0 : $15;
    store2($incdec$ptr17,$conv26);
    $dec28 = (($n$1) + -1)|0;
    $tobool29 = ($dec28|0)==(0);
    if ($tobool29) {
     break;
    } else {
     $n$1 = $dec28;$p$1 = $incdec$ptr17;
    }
   }
   $add31 = (($sub1) + ($0))|0;
   $19 = $sub8;$more$0 = $add31;
  }
  $16 = load4($s);
  $avail_in = ((($16)) + 4|0);
  $17 = load4($avail_in);
  $cmp32 = ($17|0)==(0);
  if ($cmp32) {
   label = 24;
   break;
  }
  $18 = load4($window37);
  $add$ptr39 = (($18) + ($19)|0);
  $20 = load4($lookahead);
  $add$ptr41 = (($add$ptr39) + ($20)|0);
  $cmp$i = ($17>>>0)>($more$0>>>0);
  $size$$i = $cmp$i ? $more$0 : $17;
  $cmp1$i = ($size$$i|0)==(0);
  if ($cmp1$i) {
   $30 = $20;$retval$0$i = 0;
  } else {
   $sub$i = (($17) - ($size$$i))|0;
   store4($avail_in,$sub$i);
   $state$i = ((($16)) + 28|0);
   $21 = load4($state$i);
   $wrap$i = ((($21)) + 24|0);
   $22 = load4($wrap$i);
   switch ($22|0) {
   case 1:  {
    $adler$i = ((($16)) + 48|0);
    $23 = load4($adler$i);
    $24 = load4($16);
    $call$i = (_adler32($23,$24,$size$$i)|0);
    store4($adler$i,$call$i);
    $next_in18$pre$phi$iZ2D = $16;
    break;
   }
   case 2:  {
    $adler12$i = ((($16)) + 48|0);
    $25 = load4($adler12$i);
    $26 = load4($16);
    $call14$i = (_crc32($25,$26,$size$$i)|0);
    store4($adler12$i,$call14$i);
    $next_in18$pre$phi$iZ2D = $16;
    break;
   }
   default: {
    $next_in18$pre$phi$iZ2D = $16;
   }
   }
   $27 = load4($next_in18$pre$phi$iZ2D);
   _memcpy(($add$ptr41|0),($27|0),($size$$i|0))|0;
   $28 = load4($next_in18$pre$phi$iZ2D);
   $add$ptr$i = (($28) + ($size$$i)|0);
   store4($next_in18$pre$phi$iZ2D,$add$ptr$i);
   $total_in$i = ((($16)) + 8|0);
   $29 = load4($total_in$i);
   $add$i = (($29) + ($size$$i))|0;
   store4($total_in$i,$add$i);
   $$pre92 = load4($lookahead);
   $30 = $$pre92;$retval$0$i = $size$$i;
  }
  $add43 = (($30) + ($retval$0$i))|0;
  store4($lookahead,$add43);
  $cmp45 = ($add43>>>0)>(2);
  if ($cmp45) {
   $31 = load4($strstart);
   $32 = load4($window37);
   $arrayidx50 = (($32) + ($31)|0);
   $33 = load1($arrayidx50);
   $conv51 = $33&255;
   store4($ins_h,$conv51);
   $34 = load4($hash_shift);
   $shl = $conv51 << $34;
   $add54 = (($31) + 1)|0;
   $arrayidx56 = (($32) + ($add54)|0);
   $35 = load1($arrayidx56);
   $conv57 = $35&255;
   $xor = $conv57 ^ $shl;
   $36 = load4($hash_mask);
   $and = $xor & $36;
   store4($ins_h,$and);
   $cmp62 = ($add43>>>0)<(262);
   if (!($cmp62)) {
    break;
   }
  }
  $37 = load4($s);
  $avail_in65 = ((($37)) + 4|0);
  $38 = load4($avail_in65);
  $cmp66 = ($38|0)==(0);
  if ($cmp66) {
   break;
  }
  $$pre91 = load4($w_size);
  $2 = $add43;$4 = $$pre91;
 }
 if ((label|0) == 24) {
  return;
 }
 $high_water = ((($s)) + 5824|0);
 $39 = load4($high_water);
 $40 = load4($window_size);
 $cmp70 = ($40>>>0)>($39>>>0);
 if (!($cmp70)) {
  return;
 }
 $41 = load4($strstart);
 $add75 = (($add43) + ($41))|0;
 $cmp77 = ($39>>>0)<($add75>>>0);
 if ($cmp77) {
  $sub81 = (($40) - ($add75))|0;
  $cmp82 = ($sub81>>>0)>(258);
  $$sub81 = $cmp82 ? 258 : $sub81;
  $42 = load4($window37);
  $add$ptr87 = (($42) + ($add75)|0);
  _memset(($add$ptr87|0),0,($$sub81|0))|0;
  $add88 = (($$sub81) + ($add75))|0;
  store4($high_water,$add88);
  return;
 }
 $add91 = (($add75) + 258)|0;
 $cmp92 = ($add91>>>0)>($39>>>0);
 if (!($cmp92)) {
  return;
 }
 $sub97 = (($add91) - ($39))|0;
 $sub100 = (($40) - ($39))|0;
 $cmp101 = ($sub97>>>0)>($sub100>>>0);
 $sub100$sub97 = $cmp101 ? $sub100 : $sub97;
 $43 = load4($window37);
 $add$ptr110 = (($43) + ($39)|0);
 _memset(($add$ptr110|0),0,($sub100$sub97|0))|0;
 $44 = load4($high_water);
 $add112 = (($44) + ($sub100$sub97))|0;
 store4($high_water,$add112);
 return;
}
function _longest_match($s,$cur_match) {
 $s = $s|0;
 $cur_match = $cur_match|0;
 var $$ = 0, $$best_len$2 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $add$ptr = 0, $add$ptr11$ptr = 0, $add$ptr21 = 0, $and = 0, $arrayidx = 0, $arrayidx114 = 0, $arrayidx115 = 0, $arrayidx118 = 0, $arrayidx13 = 0, $arrayidx22 = 0, $arrayidx27 = 0, $arrayidx39 = 0, $best_len$0 = 0, $best_len$1 = 0, $best_len$2 = 0, $chain_length$0 = 0, $chain_length$1 = 0, $cmp = 0, $cmp100 = 0, $cmp102 = 0;
 var $cmp106 = 0, $cmp109 = 0, $cmp120 = 0, $cmp123 = 0, $cmp128 = 0, $cmp15 = 0, $cmp16 = 0, $cmp24 = 0, $cmp30 = 0, $cmp35 = 0, $cmp41 = 0, $cmp52 = 0, $cmp58 = 0, $cmp65 = 0, $cmp72 = 0, $cmp79 = 0, $cmp86 = 0, $cmp93 = 0, $conv119 = 0, $cur_match$addr$0 = 0;
 var $dec = 0, $good_match = 0, $incdec$ptr = 0, $incdec$ptr48 = 0, $incdec$ptr50 = 0, $incdec$ptr54 = 0, $incdec$ptr56 = 0, $incdec$ptr61 = 0, $incdec$ptr63 = 0, $incdec$ptr68 = 0, $incdec$ptr70 = 0, $incdec$ptr75 = 0, $incdec$ptr77 = 0, $incdec$ptr82 = 0, $incdec$ptr84 = 0, $incdec$ptr89 = 0, $incdec$ptr91 = 0, $incdec$ptr96$ptr = 0, $incdec$ptr98 = 0, $lookahead = 0;
 var $match_start = 0, $max_chain_length = 0, $nice_match1 = 0, $or$cond = 0, $prev7 = 0, $prev_length = 0, $scan$1$add = 0, $scan$1$idx = 0, $scan$1$ptr = 0, $scan$2 = 0, $scan_end$0 = 0, $scan_end$1 = 0, $scan_end1$0 = 0, $scan_end1$1 = 0, $shr = 0, $strstart = 0, $sub = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub82 = 0;
 var $sub104 = 0, $sub113 = 0, $sub12 = 0, $sub26 = 0, $sub6 = 0, $sub6$ = 0, $w_mask = 0, $w_size = 0, $window = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $max_chain_length = ((($s)) + 124|0);
 $0 = load4($max_chain_length);
 $window = ((($s)) + 56|0);
 $1 = load4($window);
 $strstart = ((($s)) + 108|0);
 $2 = load4($strstart);
 $add$ptr = (($1) + ($2)|0);
 $prev_length = ((($s)) + 120|0);
 $3 = load4($prev_length);
 $nice_match1 = ((($s)) + 144|0);
 $4 = load4($nice_match1);
 $w_size = ((($s)) + 44|0);
 $5 = load4($w_size);
 $sub = (($5) + -262)|0;
 $cmp = ($2>>>0)>($sub>>>0);
 $sub6 = (($2) - ($sub))|0;
 $sub6$ = $cmp ? $sub6 : 0;
 $prev7 = ((($s)) + 64|0);
 $6 = load4($prev7);
 $w_mask = ((($s)) + 52|0);
 $7 = load4($w_mask);
 $add$ptr11$ptr = ((($add$ptr)) + 258|0);
 $sub12 = (($3) + -1)|0;
 $arrayidx = (($add$ptr) + ($sub12)|0);
 $8 = load1($arrayidx);
 $arrayidx13 = (($add$ptr) + ($3)|0);
 $9 = load1($arrayidx13);
 $good_match = ((($s)) + 140|0);
 $10 = load4($good_match);
 $cmp15 = ($3>>>0)<($10>>>0);
 $shr = $0 >>> 2;
 $chain_length$0 = $cmp15 ? $0 : $shr;
 $lookahead = ((($s)) + 116|0);
 $11 = load4($lookahead);
 $cmp16 = ($4>>>0)>($11>>>0);
 $$ = $cmp16 ? $11 : $4;
 $match_start = ((($s)) + 112|0);
 $arrayidx39 = ((($add$ptr)) + 1|0);
 $sub$ptr$lhs$cast = $add$ptr11$ptr;
 $best_len$0 = $3;$chain_length$1 = $chain_length$0;$cur_match$addr$0 = $cur_match;$scan_end$0 = $9;$scan_end1$0 = $8;
 while(1) {
  $add$ptr21 = (($1) + ($cur_match$addr$0)|0);
  $arrayidx22 = (($add$ptr21) + ($best_len$0)|0);
  $12 = load1($arrayidx22);
  $cmp24 = ($12<<24>>24)==($scan_end$0<<24>>24);
  if ($cmp24) {
   $sub26 = (($best_len$0) + -1)|0;
   $arrayidx27 = (($add$ptr21) + ($sub26)|0);
   $13 = load1($arrayidx27);
   $cmp30 = ($13<<24>>24)==($scan_end1$0<<24>>24);
   if ($cmp30) {
    $14 = load1($add$ptr21);
    $15 = load1($add$ptr);
    $cmp35 = ($14<<24>>24)==($15<<24>>24);
    if ($cmp35) {
     $incdec$ptr = ((($add$ptr21)) + 1|0);
     $16 = load1($incdec$ptr);
     $17 = load1($arrayidx39);
     $cmp41 = ($16<<24>>24)==($17<<24>>24);
     if ($cmp41) {
      $19 = $incdec$ptr;$scan$1$idx = 2;
      while(1) {
       $scan$1$ptr = (($add$ptr) + ($scan$1$idx)|0);
       $incdec$ptr48 = ((($scan$1$ptr)) + 1|0);
       $18 = load1($incdec$ptr48);
       $incdec$ptr50 = ((($19)) + 2|0);
       $20 = load1($incdec$ptr50);
       $cmp52 = ($18<<24>>24)==($20<<24>>24);
       if (!($cmp52)) {
        $scan$2 = $incdec$ptr48;
        break;
       }
       $incdec$ptr54 = ((($scan$1$ptr)) + 2|0);
       $21 = load1($incdec$ptr54);
       $incdec$ptr56 = ((($19)) + 3|0);
       $22 = load1($incdec$ptr56);
       $cmp58 = ($21<<24>>24)==($22<<24>>24);
       if (!($cmp58)) {
        $scan$2 = $incdec$ptr54;
        break;
       }
       $incdec$ptr61 = ((($scan$1$ptr)) + 3|0);
       $23 = load1($incdec$ptr61);
       $incdec$ptr63 = ((($19)) + 4|0);
       $24 = load1($incdec$ptr63);
       $cmp65 = ($23<<24>>24)==($24<<24>>24);
       if (!($cmp65)) {
        $scan$2 = $incdec$ptr61;
        break;
       }
       $incdec$ptr68 = ((($scan$1$ptr)) + 4|0);
       $25 = load1($incdec$ptr68);
       $incdec$ptr70 = ((($19)) + 5|0);
       $26 = load1($incdec$ptr70);
       $cmp72 = ($25<<24>>24)==($26<<24>>24);
       if (!($cmp72)) {
        $scan$2 = $incdec$ptr68;
        break;
       }
       $incdec$ptr75 = ((($scan$1$ptr)) + 5|0);
       $27 = load1($incdec$ptr75);
       $incdec$ptr77 = ((($19)) + 6|0);
       $28 = load1($incdec$ptr77);
       $cmp79 = ($27<<24>>24)==($28<<24>>24);
       if (!($cmp79)) {
        $scan$2 = $incdec$ptr75;
        break;
       }
       $incdec$ptr82 = ((($scan$1$ptr)) + 6|0);
       $29 = load1($incdec$ptr82);
       $incdec$ptr84 = ((($19)) + 7|0);
       $30 = load1($incdec$ptr84);
       $cmp86 = ($29<<24>>24)==($30<<24>>24);
       if (!($cmp86)) {
        $scan$2 = $incdec$ptr82;
        break;
       }
       $incdec$ptr89 = ((($scan$1$ptr)) + 7|0);
       $31 = load1($incdec$ptr89);
       $incdec$ptr91 = ((($19)) + 8|0);
       $32 = load1($incdec$ptr91);
       $cmp93 = ($31<<24>>24)==($32<<24>>24);
       if (!($cmp93)) {
        $scan$2 = $incdec$ptr89;
        break;
       }
       $scan$1$add = (($scan$1$idx) + 8)|0;
       $incdec$ptr96$ptr = (($add$ptr) + ($scan$1$add)|0);
       $33 = load1($incdec$ptr96$ptr);
       $incdec$ptr98 = ((($19)) + 9|0);
       $34 = load1($incdec$ptr98);
       $cmp100 = ($33<<24>>24)==($34<<24>>24);
       $cmp102 = ($scan$1$add|0)<(258);
       $or$cond = $cmp102 & $cmp100;
       if ($or$cond) {
        $19 = $incdec$ptr91;$scan$1$idx = $scan$1$add;
       } else {
        $scan$2 = $incdec$ptr96$ptr;
        break;
       }
      }
      $sub$ptr$rhs$cast = $scan$2;
      $sub$ptr$sub82 = (($sub$ptr$rhs$cast) - ($sub$ptr$lhs$cast))|0;
      $sub104 = (($sub$ptr$sub82) + 258)|0;
      $cmp106 = ($sub104|0)>($best_len$0|0);
      if ($cmp106) {
       store4($match_start,$cur_match$addr$0);
       $cmp109 = ($sub104|0)<($$|0);
       if (!($cmp109)) {
        $best_len$2 = $sub104;
        label = 19;
        break;
       }
       $sub113 = (($sub$ptr$sub82) + 257)|0;
       $arrayidx114 = (($add$ptr) + ($sub113)|0);
       $35 = load1($arrayidx114);
       $arrayidx115 = (($add$ptr) + ($sub104)|0);
       $36 = load1($arrayidx115);
       $best_len$1 = $sub104;$scan_end$1 = $36;$scan_end1$1 = $35;
      } else {
       $best_len$1 = $best_len$0;$scan_end$1 = $scan_end$0;$scan_end1$1 = $scan_end1$0;
      }
     } else {
      $best_len$1 = $best_len$0;$scan_end$1 = $scan_end$0;$scan_end1$1 = $scan_end1$0;
     }
    } else {
     $best_len$1 = $best_len$0;$scan_end$1 = $scan_end$0;$scan_end1$1 = $scan_end1$0;
    }
   } else {
    $best_len$1 = $best_len$0;$scan_end$1 = $scan_end$0;$scan_end1$1 = $scan_end1$0;
   }
  } else {
   $best_len$1 = $best_len$0;$scan_end$1 = $scan_end$0;$scan_end1$1 = $scan_end1$0;
  }
  $and = $cur_match$addr$0 & $7;
  $arrayidx118 = (($6) + ($and<<1)|0);
  $37 = load2($arrayidx118);
  $conv119 = $37&65535;
  $cmp120 = ($conv119>>>0)>($sub6$>>>0);
  if (!($cmp120)) {
   $best_len$2 = $best_len$1;
   label = 19;
   break;
  }
  $dec = (($chain_length$1) + -1)|0;
  $cmp123 = ($dec|0)==(0);
  if ($cmp123) {
   $best_len$2 = $best_len$1;
   label = 19;
   break;
  } else {
   $best_len$0 = $best_len$1;$chain_length$1 = $dec;$cur_match$addr$0 = $conv119;$scan_end$0 = $scan_end$1;$scan_end1$0 = $scan_end1$1;
  }
 }
 if ((label|0) == 19) {
  $cmp128 = ($best_len$2>>>0)>($11>>>0);
  $$best_len$2 = $cmp128 ? $11 : $best_len$2;
  return ($$best_len$2|0);
 }
 return (0)|0;
}
function _deflateEnd($strm) {
 $strm = $strm|0;
 var $$in = 0, $$in42 = 0, $$in43 = 0, $$pre = 0, $$pre36 = 0, $$pre37 = 0, $$pre38 = 0, $$pre39 = 0, $$pre40 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $cmp = 0, $cmp1 = 0, $cmp51 = 0, $cond = 0, $head = 0, $opaque = 0, $opaque27 = 0, $opaque35 = 0, $opaque43 = 0, $opaque48$pre$phiZ2D = 0, $pending_buf = 0, $prev = 0, $retval$0 = 0, $state = 0;
 var $status3 = 0, $tobool = 0, $tobool24 = 0, $tobool32 = 0, $tobool40 = 0, $window = 0, $zfree = 0, $zfree26 = 0, $zfree34 = 0, $zfree42 = 0, $zfree47$pre$phiZ2D = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($strm|0)==(0|0);
 if ($cmp) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $state = ((($strm)) + 28|0);
 $0 = load4($state);
 $cmp1 = ($0|0)==(0|0);
 if ($cmp1) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $status3 = ((($0)) + 4|0);
 $1 = load4($status3);
 switch ($1|0) {
 case 42: case 69: case 73: case 91: case 103: case 113: case 666:  {
  break;
 }
 default: {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 }
 $pending_buf = ((($0)) + 8|0);
 $2 = load4($pending_buf);
 $tobool = ($2|0)==(0|0);
 if ($tobool) {
  $$in = $0;
 } else {
  $zfree = ((($strm)) + 36|0);
  $3 = load4($zfree);
  $opaque = ((($strm)) + 40|0);
  $4 = load4($opaque);
  FUNCTION_TABLE_vii[$3 & 1]($4,$2);
  $$pre = load4($state);
  $$in = $$pre;
 }
 $head = ((($$in)) + 68|0);
 $5 = load4($head);
 $tobool24 = ($5|0)==(0|0);
 if ($tobool24) {
  $$in42 = $$in;
 } else {
  $zfree26 = ((($strm)) + 36|0);
  $6 = load4($zfree26);
  $opaque27 = ((($strm)) + 40|0);
  $7 = load4($opaque27);
  FUNCTION_TABLE_vii[$6 & 1]($7,$5);
  $$pre36 = load4($state);
  $$in42 = $$pre36;
 }
 $prev = ((($$in42)) + 64|0);
 $8 = load4($prev);
 $tobool32 = ($8|0)==(0|0);
 if ($tobool32) {
  $$in43 = $$in42;
 } else {
  $zfree34 = ((($strm)) + 36|0);
  $9 = load4($zfree34);
  $opaque35 = ((($strm)) + 40|0);
  $10 = load4($opaque35);
  FUNCTION_TABLE_vii[$9 & 1]($10,$8);
  $$pre37 = load4($state);
  $$in43 = $$pre37;
 }
 $window = ((($$in43)) + 56|0);
 $11 = load4($window);
 $tobool40 = ($11|0)==(0|0);
 if ($tobool40) {
  $$pre39 = ((($strm)) + 36|0);
  $$pre40 = ((($strm)) + 40|0);
  $16 = $$in43;$opaque48$pre$phiZ2D = $$pre40;$zfree47$pre$phiZ2D = $$pre39;
 } else {
  $zfree42 = ((($strm)) + 36|0);
  $12 = load4($zfree42);
  $opaque43 = ((($strm)) + 40|0);
  $13 = load4($opaque43);
  FUNCTION_TABLE_vii[$12 & 1]($13,$11);
  $$pre38 = load4($state);
  $16 = $$pre38;$opaque48$pre$phiZ2D = $opaque43;$zfree47$pre$phiZ2D = $zfree42;
 }
 $14 = load4($zfree47$pre$phiZ2D);
 $15 = load4($opaque48$pre$phiZ2D);
 FUNCTION_TABLE_vii[$14 & 1]($15,$16);
 store4($state,0);
 $cmp51 = ($1|0)==(113);
 $cond = $cmp51 ? -3 : 0;
 $retval$0 = $cond;
 return ($retval$0|0);
}
function _deflate($strm,$flush) {
 $strm = $strm|0;
 $flush = $flush|0;
 var $$ = 0, $$$i = 0, $$$i$i = 0, $$$i$i456 = 0, $$$i112$i = 0, $$$i348 = 0, $$$i395 = 0, $$$i416 = 0, $$$i43$i = 0, $$$i480 = 0, $$$i501 = 0, $$$i522 = 0, $$add$i = 0, $$add106$i = 0, $$cmp139 = 0, $$cmp61 = 0, $$idx$i = 0, $$pr = 0, $$pr542$pr = 0, $$pr542$pr$pre = 0;
 var $$pr544 = 0, $$pr546$pr = 0, $$pr546$pr$pre = 0, $$pre = 0, $$pre$i = 0, $$pre563 = 0, $$pre564 = 0, $$pre565 = 0, $$pre566$pre = 0, $$pre567 = 0, $$pre569 = 0, $$pre570 = 0, $$pre571 = 0, $$pre575 = 0, $$pre576 = 0, $$pre577 = 0, $$pre578 = 0, $$ptr$i = 0, $$sub$i = 0, $0 = 0;
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0;
 var $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0;
 var $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0;
 var $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0;
 var $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0;
 var $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0;
 var $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0;
 var $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0;
 var $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0;
 var $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0;
 var $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0;
 var $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0;
 var $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0;
 var $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0;
 var $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $add = 0, $add$i = 0, $add$i$i = 0, $add$i$i464 = 0, $add$i120$i = 0;
 var $add$i356 = 0, $add$i380 = 0, $add$i403 = 0, $add$i424 = 0, $add$i488 = 0, $add$i509 = 0, $add$i51$i = 0, $add$i530 = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i460 = 0, $add$ptr$i116$i = 0, $add$ptr$i352 = 0, $add$ptr$i376 = 0, $add$ptr$i399 = 0, $add$ptr$i420 = 0, $add$ptr$i47$i = 0, $add$ptr$i484 = 0, $add$ptr$i505 = 0;
 var $add$ptr$i526 = 0, $add$ptr16$ptr$i = 0, $add$ptr301 = 0, $add$ptr34$i = 0, $add$ptr346 = 0, $add$ptr383 = 0, $add$ptr427 = 0, $add$ptr466 = 0, $add$ptr9$i = 0, $add$ptr9$i$i = 0, $add$ptr9$i$i462 = 0, $add$ptr9$i118$i = 0, $add$ptr9$i354 = 0, $add$ptr9$i401 = 0, $add$ptr9$i422 = 0, $add$ptr9$i486 = 0, $add$ptr9$i49$i = 0, $add$ptr9$i507 = 0, $add$ptr9$i528 = 0, $add124$i = 0;
 var $add192 = 0, $add223 = 0, $add490 = 0, $add497 = 0, $add81 = 0, $add86 = 0, $add91 = 0, $add98$i = 0, $adler = 0, $adler266 = 0, $adler299 = 0, $adler344 = 0, $adler425 = 0, $adler502 = 0, $adler661 = 0, $and251 = 0, $and251556 = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i331 = 0;
 var $arrayidx$i340 = 0, $arrayidx$i370 = 0, $arrayidx$i378 = 0, $arrayidx$i387 = 0, $arrayidx$i447 = 0, $arrayidx10$i = 0, $arrayidx102 = 0, $arrayidx110 = 0, $arrayidx119 = 0, $arrayidx128 = 0, $arrayidx128$i = 0, $arrayidx131$i = 0, $arrayidx135$i = 0, $arrayidx149 = 0, $arrayidx156 = 0, $arrayidx158$i = 0, $arrayidx168 = 0, $arrayidx177 = 0, $arrayidx179$i = 0, $arrayidx23$i = 0;
 var $arrayidx284 = 0, $arrayidx288 = 0, $arrayidx31 = 0, $arrayidx35 = 0, $arrayidx364 = 0, $arrayidx370 = 0, $arrayidx41 = 0, $arrayidx41$i = 0, $arrayidx445 = 0, $arrayidx45 = 0, $arrayidx451 = 0, $arrayidx49 = 0, $arrayidx5$i = 0, $arrayidx5$i334 = 0, $arrayidx5$i343 = 0, $arrayidx5$i373 = 0, $arrayidx5$i390 = 0, $arrayidx508 = 0, $arrayidx516 = 0, $arrayidx53 = 0;
 var $arrayidx57 = 0, $arrayidx627 = 0, $arrayidx66 = 0, $arrayidx667 = 0, $arrayidx675 = 0, $arrayidx683 = 0, $arrayidx691 = 0, $arrayidx697 = 0, $arrayidx70 = 0, $arrayidx705 = 0, $arrayidx713 = 0, $arrayidx721 = 0, $arrayidx8$i = 0, $arrayidx95$i = 0, $arrayidx96 = 0, $arrayidx96$i = 0, $avail_in = 0, $avail_in536 = 0, $avail_in553 = 0, $avail_out = 0;
 var $avail_out$i$i = 0, $avail_out$i$i454 = 0, $avail_out$i110$i = 0, $avail_out$i381 = 0, $avail_out$i41$i = 0, $avail_out$i472 = 0, $avail_out192$i = 0, $avail_out54$i = 0, $beg$0558 = 0, $beg$1 = 0, $beg$2 = 0, $beg329$0 = 0, $beg329$1 = 0, $beg329$2 = 0, $beg408$0 = 0, $beg408$1 = 0, $beg408$2 = 0, $bflush$0$i = 0, $block_start = 0, $block_start$i = 0;
 var $block_start$i441 = 0, $brmerge = 0, $call = 0, $call186 = 0, $call234 = 0, $call270 = 0, $call304 = 0, $call349 = 0, $call386 = 0, $call430 = 0, $call469 = 0, $call517 = 0, $call587 = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i$i455 = 0, $cmp$i111$i = 0, $cmp$i347 = 0, $cmp$i374 = 0;
 var $cmp$i394 = 0, $cmp$i415 = 0, $cmp$i42$i = 0, $cmp$i443 = 0, $cmp$i479 = 0, $cmp$i500 = 0, $cmp$i521 = 0, $cmp1 = 0, $cmp10 = 0, $cmp11$i = 0, $cmp117$i = 0, $cmp12 = 0, $cmp13$i = 0, $cmp130 = 0, $cmp135 = 0, $cmp139 = 0, $cmp14 = 0, $cmp14$i = 0, $cmp145$i = 0, $cmp153$i = 0;
 var $cmp159 = 0, $cmp16$i = 0, $cmp16$i$i = 0, $cmp16$i$i468 = 0, $cmp16$i124$i = 0, $cmp16$i360 = 0, $cmp16$i407 = 0, $cmp16$i428 = 0, $cmp16$i492 = 0, $cmp16$i513 = 0, $cmp16$i534 = 0, $cmp16$i55$i = 0, $cmp168$i = 0, $cmp17 = 0, $cmp174$i = 0, $cmp18$i = 0, $cmp186$i = 0, $cmp19$i = 0, $cmp193$i = 0, $cmp195 = 0;
 var $cmp199 = 0, $cmp2$i = 0, $cmp2$i$i = 0, $cmp2$i$i457 = 0, $cmp2$i113$i = 0, $cmp2$i349 = 0, $cmp2$i375 = 0, $cmp2$i396 = 0, $cmp2$i417 = 0, $cmp2$i44$i = 0, $cmp2$i445 = 0, $cmp2$i481 = 0, $cmp2$i502 = 0, $cmp2$i523 = 0, $cmp204 = 0, $cmp209 = 0, $cmp217 = 0, $cmp226 = 0, $cmp23$i = 0, $cmp239 = 0;
 var $cmp24 = 0, $cmp244 = 0, $cmp252 = 0, $cmp252557 = 0, $cmp255 = 0, $cmp26 = 0, $cmp263 = 0, $cmp276 = 0, $cmp28$i = 0, $cmp296 = 0, $cmp3$i = 0, $cmp30$i = 0, $cmp310 = 0, $cmp321 = 0, $cmp326 = 0, $cmp333 = 0, $cmp341 = 0, $cmp355 = 0, $cmp36 = 0, $cmp36$i = 0;
 var $cmp37$i = 0, $cmp371 = 0, $cmp378 = 0, $cmp389 = 0, $cmp4$i = 0, $cmp400 = 0, $cmp405 = 0, $cmp414 = 0, $cmp42$i = 0, $cmp422 = 0, $cmp436 = 0, $cmp453 = 0, $cmp461 = 0, $cmp47$i = 0, $cmp472 = 0, $cmp48$i = 0, $cmp482 = 0, $cmp492 = 0, $cmp499 = 0, $cmp52$i = 0;
 var $cmp526 = 0, $cmp530 = 0, $cmp537 = 0, $cmp540 = 0, $cmp55$i = 0, $cmp550 = 0, $cmp554 = 0, $cmp563 = 0, $cmp566 = 0, $cmp57$i = 0, $cmp58 = 0, $cmp59 = 0, $cmp6$i = 0, $cmp607 = 0, $cmp61 = 0, $cmp613 = 0, $cmp62$i = 0, $cmp623 = 0, $cmp632 = 0, $cmp641 = 0;
 var $cmp653 = 0, $cmp658 = 0, $cmp67$i = 0, $cmp7 = 0, $cmp72$i = 0, $cmp729 = 0, $cmp74$i = 0, $cmp78 = 0, $cmp79$i = 0, $cmp83 = 0, $cmp88 = 0, $cmp88$i = 0, $cmp9 = 0, $comment = 0, $comment404 = 0, $comment444 = 0, $cond = 0, $cond$i = 0, $cond142 = 0, $cond144 = 0;
 var $cond161$i = 0, $cond182$i = 0, $cond198$i = 0, $cond202$i = 0, $cond44$i = 0, $cond591 = 0, $cond60$i = 0, $cond62 = 0, $cond64$i = 0, $cond73 = 0, $cond739 = 0, $cond76 = 0, $cond80 = 0, $cond85 = 0, $cond90 = 0, $conv = 0, $conv$i = 0, $conv$i327 = 0, $conv$i336 = 0, $conv$i366 = 0;
 var $conv$i383 = 0, $conv1$i = 0, $conv1$i332 = 0, $conv1$i341 = 0, $conv1$i371 = 0, $conv1$i388 = 0, $conv106 = 0, $conv106$i = 0, $conv115 = 0, $conv118$i = 0, $conv124 = 0, $conv145 = 0, $conv146$i = 0, $conv152 = 0, $conv164 = 0, $conv173 = 0, $conv187$i = 0, $conv365 = 0, $conv446 = 0, $conv49$i = 0;
 var $conv504 = 0, $conv512 = 0, $conv663 = 0, $conv671 = 0, $conv679 = 0, $conv687 = 0, $conv693 = 0, $conv701 = 0, $conv709 = 0, $conv717 = 0, $conv92 = 0, $conv93$i = 0, $conv97$i = 0, $conv98 = 0, $d_buf$i = 0, $d_buf$i438 = 0, $dec$i = 0, $dec148$i = 0, $extra = 0, $extra158 = 0;
 var $extra243 = 0, $extra283 = 0, $extra_len = 0, $extra_len170 = 0, $extra_len250 = 0, $extra_len250555 = 0, $extra_len309 = 0, $freq$i = 0, $freq$i450 = 0, $freq113$i = 0, $freq140$i = 0, $func = 0, $gzhead = 0, $gzhead242$pre$phiZ2D = 0, $gzhead324$phi$trans$insert = 0, $gzhead324$pre$phiZ2D = 0, $gzhead403$pre$phiZ2D = 0, $gzhead485$pre$phiZ2D = 0, $gzindex = 0, $gzindex248 = 0;
 var $gzindex360 = 0, $gzindex441 = 0, $hash_size = 0, $hcrc = 0, $hcrc180 = 0, $hcrc259 = 0, $hcrc292 = 0, $hcrc337 = 0, $hcrc374 = 0, $hcrc418 = 0, $hcrc457 = 0, $hcrc486 = 0, $head = 0, $idxprom$i = 0, $idxprom$i449 = 0, $idxprom136$i = 0, $inc = 0, $inc$i = 0, $inc$i329 = 0, $inc$i338 = 0;
 var $inc$i368 = 0, $inc$i379 = 0, $inc$i385 = 0, $inc$i448 = 0, $inc100 = 0, $inc100$i = 0, $inc108 = 0, $inc114$i = 0, $inc117 = 0, $inc12$i = 0, $inc126 = 0, $inc133$i = 0, $inc141$i = 0, $inc147 = 0, $inc150$i = 0, $inc154 = 0, $inc166 = 0, $inc17$i = 0, $inc175 = 0, $inc286 = 0;
 var $inc29 = 0, $inc290 = 0, $inc3$i = 0, $inc3$i333 = 0, $inc3$i342 = 0, $inc3$i372 = 0, $inc3$i389 = 0, $inc33 = 0, $inc361 = 0, $inc368 = 0, $inc39 = 0, $inc43 = 0, $inc442 = 0, $inc449 = 0, $inc47 = 0, $inc506 = 0, $inc51 = 0, $inc514 = 0, $inc55 = 0, $inc64 = 0;
 var $inc665 = 0, $inc673 = 0, $inc68 = 0, $inc681 = 0, $inc689 = 0, $inc695 = 0, $inc703 = 0, $inc711 = 0, $inc719 = 0, $inc94 = 0, $incdec$ptr21$ptr$i = 0, $incdec$ptr26$i = 0, $incdec$ptr35$i = 0, $incdec$ptr40$i = 0, $incdec$ptr45$i = 0, $incdec$ptr50$i = 0, $incdec$ptr55$i = 0, $incdec$ptr60$i = 0, $incdec$ptr65$ptr$i = 0, $incdec$ptr70$ptr$i = 0;
 var $l_buf$i = 0, $l_buf$i439 = 0, $last_flush = 0, $last_lit$i = 0, $last_lit$i437 = 0, $level = 0, $level129 = 0, $level198 = 0, $level585 = 0, $level_flags$0 = 0, $lit_bufsize$i = 0, $lit_bufsize$i440 = 0, $lookahead = 0, $lookahead$i = 0, $lookahead$i433 = 0, $lookahead631 = 0, $match_length$i = 0, $match_length$i434 = 0, $msg = 0, $msg19 = 0;
 var $msg546 = 0, $msg557 = 0, $mul = 0, $name = 0, $name325 = 0, $name363 = 0, $next_out = 0, $next_out$i$i = 0, $next_out$i$i458 = 0, $next_out$i114$i = 0, $next_out$i45$i = 0, $not$cmp737 = 0, $or = 0, $or$cond = 0, $or$cond$i = 0, $or$cond107$i = 0, $or$cond3 = 0, $or$cond319 = 0, $or$cond320 = 0, $or$cond321 = 0;
 var $or$cond4 = 0, $or$cond582 = 0, $or$or220 = 0, $or220 = 0, $os = 0, $pending = 0, $pending$i = 0, $pending$i$i = 0, $pending$i$i453 = 0, $pending$i109$i = 0, $pending$i324 = 0, $pending$i345 = 0, $pending$i392 = 0, $pending$i40$i = 0, $pending$i413 = 0, $pending$i477 = 0, $pending$i498 = 0, $pending$i519 = 0, $pending12$i = 0, $pending12$i$i = 0;
 var $pending12$i$i466 = 0, $pending12$i122$i = 0, $pending12$i358 = 0, $pending12$i405 = 0, $pending12$i426 = 0, $pending12$i490 = 0, $pending12$i511 = 0, $pending12$i53$i = 0, $pending12$i532 = 0, $pending247 = 0, $pending330 = 0, $pending409 = 0, $pending489 = 0, $pending525 = 0, $pending_buf = 0, $pending_buf$i = 0, $pending_buf$i$i = 0, $pending_buf$i$i470 = 0, $pending_buf$i126$i = 0, $pending_buf$i325 = 0;
 var $pending_buf$i339 = 0, $pending_buf$i362 = 0, $pending_buf$i409 = 0, $pending_buf$i430 = 0, $pending_buf$i494 = 0, $pending_buf$i515 = 0, $pending_buf$i536 = 0, $pending_buf$i57$i = 0, $pending_buf267 = 0, $pending_buf300 = 0, $pending_buf345 = 0, $pending_buf426 = 0, $pending_buf507 = 0, $pending_buf666 = 0, $pending_buf_size = 0, $pending_buf_size332 = 0, $pending_buf_size413 = 0, $pending_buf_size491 = 0, $pending_out$i = 0, $pending_out$i$i = 0;
 var $pending_out$i$i459 = 0, $pending_out$i115$i = 0, $pending_out$i351 = 0, $pending_out$i398 = 0, $pending_out$i419 = 0, $pending_out$i46$i = 0, $pending_out$i483 = 0, $pending_out$i504 = 0, $pending_out$i525 = 0, $pending_out8$i = 0, $pending_out8$i$i = 0, $pending_out8$i$i461 = 0, $pending_out8$i117$i = 0, $pending_out8$i353 = 0, $pending_out8$i400 = 0, $pending_out8$i421 = 0, $pending_out8$i48$i = 0, $pending_out8$i485 = 0, $pending_out8$i506 = 0, $pending_out8$i527 = 0;
 var $rem = 0, $retval$1 = 0, $scan$1$i = 0, $shl193 = 0, $shr = 0, $shr$i = 0, $shr$i326 = 0, $shr$i335 = 0, $shr$i365 = 0, $shr$i382 = 0, $shr113 = 0, $shr122 = 0, $shr171 = 0, $shr230 = 0, $shr510 = 0, $shr669 = 0, $shr677 = 0, $shr685 = 0, $shr699 = 0, $shr707 = 0;
 var $shr715 = 0, $shr724 = 0, $state = 0, $state$i$i = 0, $state$i$i452 = 0, $state$i108$i = 0, $state$i39$i = 0, $status = 0, $strategy = 0, $strategy134 = 0, $strategy194 = 0, $strategy573 = 0, $strstart = 0, $strstart$i = 0, $strstart$i435 = 0, $strstart635 = 0, $sub$i = 0, $sub$i$i = 0, $sub$i$i465 = 0, $sub$i121$i = 0;
 var $sub$i357 = 0, $sub$i377 = 0, $sub$i404 = 0, $sub$i425 = 0, $sub$i451 = 0, $sub$i489 = 0, $sub$i510 = 0, $sub$i52$i = 0, $sub$i531 = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$sub105$i = 0, $sub116$i = 0, $sub121$i = 0, $sub13$i = 0, $sub13$i$i = 0, $sub13$i$i467 = 0, $sub13$i123$i = 0, $sub13$i359 = 0, $sub13$i406 = 0;
 var $sub13$i427 = 0, $sub13$i491 = 0, $sub13$i512 = 0, $sub13$i533 = 0, $sub13$i54$i = 0, $sub144$i = 0, $sub164$i = 0, $sub185$i = 0, $sub26$i = 0, $sub269 = 0, $sub303 = 0, $sub348 = 0, $sub385 = 0, $sub429 = 0, $sub468 = 0, $sub47$i = 0, $sub626 = 0, $sub630 = 0, $sub733 = 0, $sub92$i = 0;
 var $time = 0, $time104 = 0, $time112 = 0, $time121 = 0, $tobool = 0, $tobool$i = 0, $tobool181 = 0, $tobool260 = 0, $tobool293 = 0, $tobool338 = 0, $tobool375 = 0, $tobool419 = 0, $tobool458 = 0, $tobool487 = 0, $tobool75 = 0, $total_in = 0, $total_out$i = 0, $total_out$i$i = 0, $total_out$i$i463 = 0, $total_out$i119$i = 0;
 var $total_out$i355 = 0, $total_out$i402 = 0, $total_out$i423 = 0, $total_out$i487 = 0, $total_out$i50$i = 0, $total_out$i508 = 0, $total_out$i529 = 0, $val$0 = 0, $val410$0 = 0, $w_bits = 0, $window$i = 0, $window$i436 = 0, $wrap = 0, $wrap652 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($strm|0)==(0|0);
 if ($cmp) {
  $retval$1 = -2;
  return ($retval$1|0);
 }
 $state = ((($strm)) + 28|0);
 $0 = load4($state);
 $cmp1 = ($0|0)==(0|0);
 $1 = ($flush>>>0)>(5);
 $2 = $1 | $cmp1;
 if ($2) {
  $retval$1 = -2;
  return ($retval$1|0);
 }
 $next_out = ((($strm)) + 12|0);
 $3 = load4($next_out);
 $cmp7 = ($3|0)==(0|0);
 do {
  if (!($cmp7)) {
   $4 = load4($strm);
   $cmp9 = ($4|0)==(0|0);
   if ($cmp9) {
    $avail_in = ((($strm)) + 4|0);
    $5 = load4($avail_in);
    $cmp10 = ($5|0)==(0);
    if (!($cmp10)) {
     break;
    }
   }
   $status = ((($0)) + 4|0);
   $6 = load4($status);
   $cmp12 = ($6|0)==(666);
   $cmp14 = ($flush|0)!=(4);
   $or$cond3 = $cmp14 & $cmp12;
   if (!($or$cond3)) {
    $avail_out = ((($strm)) + 16|0);
    $8 = load4($avail_out);
    $cmp17 = ($8|0)==(0);
    if ($cmp17) {
     $9 = load4((1780));
     $msg19 = ((($strm)) + 24|0);
     store4($msg19,$9);
     $retval$1 = -5;
     return ($retval$1|0);
    }
    store4($0,$strm);
    $last_flush = ((($0)) + 40|0);
    $10 = load4($last_flush);
    store4($last_flush,$flush);
    $cmp24 = ($6|0)==(42);
    do {
     if ($cmp24) {
      $wrap = ((($0)) + 24|0);
      $11 = load4($wrap);
      $cmp26 = ($11|0)==(2);
      if (!($cmp26)) {
       $w_bits = ((($0)) + 48|0);
       $80 = load4($w_bits);
       $add192 = $80 << 12;
       $shl193 = (($add192) + -30720)|0;
       $strategy194 = ((($0)) + 136|0);
       $81 = load4($strategy194);
       $cmp195 = ($81|0)>(1);
       if ($cmp195) {
        $level_flags$0 = 0;
       } else {
        $level198 = ((($0)) + 132|0);
        $82 = load4($level198);
        $cmp199 = ($82|0)<(2);
        if ($cmp199) {
         $level_flags$0 = 0;
        } else {
         $cmp204 = ($82|0)<(6);
         if ($cmp204) {
          $level_flags$0 = 64;
         } else {
          $cmp209 = ($82|0)==(6);
          $$ = $cmp209 ? 128 : 192;
          $level_flags$0 = $$;
         }
        }
       }
       $or = $level_flags$0 | $shl193;
       $strstart = ((($0)) + 108|0);
       $83 = load4($strstart);
       $cmp217 = ($83|0)==(0);
       $or220 = $or | 32;
       $84 = $cmp217 ? $or : $or220;
       $rem = (($84>>>0) % 31)&-1;
       $or$or220 = $rem | $84;
       $add223 = $or$or220 ^ 31;
       store4($status,113);
       $shr$i = $84 >>> 8;
       $conv$i = $shr$i&255;
       $pending$i = ((($0)) + 20|0);
       $85 = load4($pending$i);
       $inc$i = (($85) + 1)|0;
       store4($pending$i,$inc$i);
       $pending_buf$i = ((($0)) + 8|0);
       $86 = load4($pending_buf$i);
       $arrayidx$i = (($86) + ($85)|0);
       store1($arrayidx$i,$conv$i);
       $conv1$i = $add223&255;
       $87 = load4($pending$i);
       $inc3$i = (($87) + 1)|0;
       store4($pending$i,$inc3$i);
       $88 = load4($pending_buf$i);
       $arrayidx5$i = (($88) + ($87)|0);
       store1($arrayidx5$i,$conv1$i);
       $89 = load4($strstart);
       $cmp226 = ($89|0)==(0);
       $$pre578 = ((($strm)) + 48|0);
       if (!($cmp226)) {
        $90 = load4($$pre578);
        $shr230 = $90 >>> 16;
        $shr$i365 = $90 >>> 24;
        $conv$i366 = $shr$i365&255;
        $91 = load4($pending$i);
        $inc$i368 = (($91) + 1)|0;
        store4($pending$i,$inc$i368);
        $92 = load4($pending_buf$i);
        $arrayidx$i370 = (($92) + ($91)|0);
        store1($arrayidx$i370,$conv$i366);
        $conv1$i371 = $shr230&255;
        $93 = load4($pending$i);
        $inc3$i372 = (($93) + 1)|0;
        store4($pending$i,$inc3$i372);
        $94 = load4($pending_buf$i);
        $arrayidx5$i373 = (($94) + ($93)|0);
        store1($arrayidx5$i373,$conv1$i371);
        $95 = load4($$pre578);
        $shr$i382 = $95 >>> 8;
        $conv$i383 = $shr$i382&255;
        $96 = load4($pending$i);
        $inc$i385 = (($96) + 1)|0;
        store4($pending$i,$inc$i385);
        $97 = load4($pending_buf$i);
        $arrayidx$i387 = (($97) + ($96)|0);
        store1($arrayidx$i387,$conv$i383);
        $conv1$i388 = $95&255;
        $98 = load4($pending$i);
        $inc3$i389 = (($98) + 1)|0;
        store4($pending$i,$inc3$i389);
        $99 = load4($pending_buf$i);
        $arrayidx5$i390 = (($99) + ($98)|0);
        store1($arrayidx5$i390,$conv1$i388);
       }
       $call234 = (_adler32(0,0,0)|0);
       store4($$pre578,$call234);
       $$pr = load4($status);
       $100 = $$pr;
       label = 30;
       break;
      }
      $call = (_crc32(0,0,0)|0);
      $adler = ((($strm)) + 48|0);
      store4($adler,$call);
      $pending = ((($0)) + 20|0);
      $12 = load4($pending);
      $inc = (($12) + 1)|0;
      store4($pending,$inc);
      $pending_buf = ((($0)) + 8|0);
      $13 = load4($pending_buf);
      $arrayidx = (($13) + ($12)|0);
      store1($arrayidx,31);
      $14 = load4($pending);
      $inc29 = (($14) + 1)|0;
      store4($pending,$inc29);
      $15 = load4($pending_buf);
      $arrayidx31 = (($15) + ($14)|0);
      store1($arrayidx31,-117);
      $16 = load4($pending);
      $inc33 = (($16) + 1)|0;
      store4($pending,$inc33);
      $17 = load4($pending_buf);
      $arrayidx35 = (($17) + ($16)|0);
      store1($arrayidx35,8);
      $gzhead = ((($0)) + 28|0);
      $18 = load4($gzhead);
      $cmp36 = ($18|0)==(0|0);
      if ($cmp36) {
       $19 = load4($pending);
       $inc39 = (($19) + 1)|0;
       store4($pending,$inc39);
       $20 = load4($pending_buf);
       $arrayidx41 = (($20) + ($19)|0);
       store1($arrayidx41,0);
       $21 = load4($pending);
       $inc43 = (($21) + 1)|0;
       store4($pending,$inc43);
       $22 = load4($pending_buf);
       $arrayidx45 = (($22) + ($21)|0);
       store1($arrayidx45,0);
       $23 = load4($pending);
       $inc47 = (($23) + 1)|0;
       store4($pending,$inc47);
       $24 = load4($pending_buf);
       $arrayidx49 = (($24) + ($23)|0);
       store1($arrayidx49,0);
       $25 = load4($pending);
       $inc51 = (($25) + 1)|0;
       store4($pending,$inc51);
       $26 = load4($pending_buf);
       $arrayidx53 = (($26) + ($25)|0);
       store1($arrayidx53,0);
       $27 = load4($pending);
       $inc55 = (($27) + 1)|0;
       store4($pending,$inc55);
       $28 = load4($pending_buf);
       $arrayidx57 = (($28) + ($27)|0);
       store1($arrayidx57,0);
       $level = ((($0)) + 132|0);
       $29 = load4($level);
       $cmp58 = ($29|0)==(9);
       if ($cmp58) {
        $cond62 = 2;
       } else {
        $strategy = ((($0)) + 136|0);
        $30 = load4($strategy);
        $cmp59 = ($30|0)>(1);
        $cmp61 = ($29|0)<(2);
        $$cmp61 = $cmp61 | $cmp59;
        $cond = $$cmp61 ? 4 : 0;
        $cond62 = $cond;
       }
       $conv = $cond62&255;
       $31 = load4($pending);
       $inc64 = (($31) + 1)|0;
       store4($pending,$inc64);
       $32 = load4($pending_buf);
       $arrayidx66 = (($32) + ($31)|0);
       store1($arrayidx66,$conv);
       $33 = load4($pending);
       $inc68 = (($33) + 1)|0;
       store4($pending,$inc68);
       $34 = load4($pending_buf);
       $arrayidx70 = (($34) + ($33)|0);
       store1($arrayidx70,3);
       store4($status,113);
       break;
      }
      $35 = load4($18);
      $tobool = ($35|0)!=(0);
      $cond73 = $tobool&1;
      $hcrc = ((($18)) + 44|0);
      $36 = load4($hcrc);
      $tobool75 = ($36|0)!=(0);
      $cond76 = $tobool75 ? 2 : 0;
      $add = $cond76 | $cond73;
      $extra = ((($18)) + 16|0);
      $37 = load4($extra);
      $cmp78 = ($37|0)==(0|0);
      $cond80 = $cmp78 ? 0 : 4;
      $add81 = $add | $cond80;
      $name = ((($18)) + 28|0);
      $38 = load4($name);
      $cmp83 = ($38|0)==(0|0);
      $cond85 = $cmp83 ? 0 : 8;
      $add86 = $add81 | $cond85;
      $comment = ((($18)) + 36|0);
      $39 = load4($comment);
      $cmp88 = ($39|0)==(0|0);
      $cond90 = $cmp88 ? 0 : 16;
      $add91 = $add86 | $cond90;
      $conv92 = $add91&255;
      $40 = load4($pending);
      $inc94 = (($40) + 1)|0;
      store4($pending,$inc94);
      $41 = load4($pending_buf);
      $arrayidx96 = (($41) + ($40)|0);
      store1($arrayidx96,$conv92);
      $42 = load4($gzhead);
      $time = ((($42)) + 4|0);
      $43 = load4($time);
      $conv98 = $43&255;
      $44 = load4($pending);
      $inc100 = (($44) + 1)|0;
      store4($pending,$inc100);
      $45 = load4($pending_buf);
      $arrayidx102 = (($45) + ($44)|0);
      store1($arrayidx102,$conv98);
      $46 = load4($gzhead);
      $time104 = ((($46)) + 4|0);
      $47 = load4($time104);
      $shr = $47 >>> 8;
      $conv106 = $shr&255;
      $48 = load4($pending);
      $inc108 = (($48) + 1)|0;
      store4($pending,$inc108);
      $49 = load4($pending_buf);
      $arrayidx110 = (($49) + ($48)|0);
      store1($arrayidx110,$conv106);
      $50 = load4($gzhead);
      $time112 = ((($50)) + 4|0);
      $51 = load4($time112);
      $shr113 = $51 >>> 16;
      $conv115 = $shr113&255;
      $52 = load4($pending);
      $inc117 = (($52) + 1)|0;
      store4($pending,$inc117);
      $53 = load4($pending_buf);
      $arrayidx119 = (($53) + ($52)|0);
      store1($arrayidx119,$conv115);
      $54 = load4($gzhead);
      $time121 = ((($54)) + 4|0);
      $55 = load4($time121);
      $shr122 = $55 >>> 24;
      $conv124 = $shr122&255;
      $56 = load4($pending);
      $inc126 = (($56) + 1)|0;
      store4($pending,$inc126);
      $57 = load4($pending_buf);
      $arrayidx128 = (($57) + ($56)|0);
      store1($arrayidx128,$conv124);
      $level129 = ((($0)) + 132|0);
      $58 = load4($level129);
      $cmp130 = ($58|0)==(9);
      if ($cmp130) {
       $cond144 = 2;
      } else {
       $strategy134 = ((($0)) + 136|0);
       $59 = load4($strategy134);
       $cmp135 = ($59|0)>(1);
       $cmp139 = ($58|0)<(2);
       $$cmp139 = $cmp139 | $cmp135;
       $cond142 = $$cmp139 ? 4 : 0;
       $cond144 = $cond142;
      }
      $conv145 = $cond144&255;
      $60 = load4($pending);
      $inc147 = (($60) + 1)|0;
      store4($pending,$inc147);
      $61 = load4($pending_buf);
      $arrayidx149 = (($61) + ($60)|0);
      store1($arrayidx149,$conv145);
      $62 = load4($gzhead);
      $os = ((($62)) + 12|0);
      $63 = load4($os);
      $conv152 = $63&255;
      $64 = load4($pending);
      $inc154 = (($64) + 1)|0;
      store4($pending,$inc154);
      $65 = load4($pending_buf);
      $arrayidx156 = (($65) + ($64)|0);
      store1($arrayidx156,$conv152);
      $66 = load4($gzhead);
      $extra158 = ((($66)) + 16|0);
      $67 = load4($extra158);
      $cmp159 = ($67|0)==(0|0);
      if ($cmp159) {
       $75 = $66;
      } else {
       $extra_len = ((($66)) + 20|0);
       $68 = load4($extra_len);
       $conv164 = $68&255;
       $69 = load4($pending);
       $inc166 = (($69) + 1)|0;
       store4($pending,$inc166);
       $70 = load4($pending_buf);
       $arrayidx168 = (($70) + ($69)|0);
       store1($arrayidx168,$conv164);
       $71 = load4($gzhead);
       $extra_len170 = ((($71)) + 20|0);
       $72 = load4($extra_len170);
       $shr171 = $72 >>> 8;
       $conv173 = $shr171&255;
       $73 = load4($pending);
       $inc175 = (($73) + 1)|0;
       store4($pending,$inc175);
       $74 = load4($pending_buf);
       $arrayidx177 = (($74) + ($73)|0);
       store1($arrayidx177,$conv173);
       $$pre = load4($gzhead);
       $75 = $$pre;
      }
      $hcrc180 = ((($75)) + 44|0);
      $76 = load4($hcrc180);
      $tobool181 = ($76|0)==(0);
      if (!($tobool181)) {
       $77 = load4($adler);
       $78 = load4($pending_buf);
       $79 = load4($pending);
       $call186 = (_crc32($77,$78,$79)|0);
       store4($adler,$call186);
      }
      $gzindex = ((($0)) + 32|0);
      store4($gzindex,0);
      store4($status,69);
      $gzhead242$pre$phiZ2D = $gzhead;
      label = 32;
     } else {
      $100 = $6;
      label = 30;
     }
    } while(0);
    if ((label|0) == 30) {
     $cmp239 = ($100|0)==(69);
     if ($cmp239) {
      $$pre575 = ((($0)) + 28|0);
      $gzhead242$pre$phiZ2D = $$pre575;
      label = 32;
     } else {
      $$pr542$pr = $100;
      label = 53;
     }
    }
    do {
     if ((label|0) == 32) {
      $101 = load4($gzhead242$pre$phiZ2D);
      $extra243 = ((($101)) + 16|0);
      $102 = load4($extra243);
      $cmp244 = ($102|0)==(0|0);
      if ($cmp244) {
       store4($status,73);
       $143 = $101;$gzhead324$pre$phiZ2D = $gzhead242$pre$phiZ2D;
       label = 55;
       break;
      }
      $pending247 = ((($0)) + 20|0);
      $103 = load4($pending247);
      $gzindex248 = ((($0)) + 32|0);
      $104 = load4($gzindex248);
      $extra_len250555 = ((($101)) + 20|0);
      $105 = load4($extra_len250555);
      $and251556 = $105 & 65535;
      $cmp252557 = ($104>>>0)<($and251556>>>0);
      L53: do {
       if ($cmp252557) {
        $pending_buf_size = ((($0)) + 12|0);
        $adler266 = ((($strm)) + 48|0);
        $pending_buf267 = ((($0)) + 8|0);
        $total_out$i402 = ((($strm)) + 20|0);
        $107 = $103;$108 = $101;$455 = $104;$beg$0558 = $103;
        while(1) {
         $106 = load4($pending_buf_size);
         $cmp255 = ($107|0)==($106|0);
         if ($cmp255) {
          $hcrc259 = ((($108)) + 44|0);
          $109 = load4($hcrc259);
          $tobool260 = ($109|0)!=(0);
          $cmp263 = ($107>>>0)>($beg$0558>>>0);
          $or$cond = $cmp263 & $tobool260;
          if ($or$cond) {
           $110 = load4($adler266);
           $111 = load4($pending_buf267);
           $add$ptr = (($111) + ($beg$0558)|0);
           $sub269 = (($107) - ($beg$0558))|0;
           $call270 = (_crc32($110,$add$ptr,$sub269)|0);
           store4($adler266,$call270);
          }
          $112 = load4($state);
          $pending$i392 = ((($112)) + 20|0);
          $113 = load4($pending$i392);
          $114 = load4($avail_out);
          $cmp$i394 = ($113>>>0)>($114>>>0);
          $$$i395 = $cmp$i394 ? $114 : $113;
          $cmp2$i396 = ($$$i395|0)==(0);
          if (!($cmp2$i396)) {
           $115 = load4($next_out);
           $pending_out$i398 = ((($112)) + 16|0);
           $116 = load4($pending_out$i398);
           _memcpy(($115|0),($116|0),($$$i395|0))|0;
           $117 = load4($next_out);
           $add$ptr$i399 = (($117) + ($$$i395)|0);
           store4($next_out,$add$ptr$i399);
           $118 = load4($state);
           $pending_out8$i400 = ((($118)) + 16|0);
           $119 = load4($pending_out8$i400);
           $add$ptr9$i401 = (($119) + ($$$i395)|0);
           store4($pending_out8$i400,$add$ptr9$i401);
           $120 = load4($total_out$i402);
           $add$i403 = (($120) + ($$$i395))|0;
           store4($total_out$i402,$add$i403);
           $121 = load4($avail_out);
           $sub$i404 = (($121) - ($$$i395))|0;
           store4($avail_out,$sub$i404);
           $pending12$i405 = ((($118)) + 20|0);
           $122 = load4($pending12$i405);
           $sub13$i406 = (($122) - ($$$i395))|0;
           store4($pending12$i405,$sub13$i406);
           $cmp16$i407 = ($sub13$i406|0)==(0);
           if ($cmp16$i407) {
            $pending_buf$i409 = ((($118)) + 8|0);
            $123 = load4($pending_buf$i409);
            store4($pending_out8$i400,$123);
           }
          }
          $124 = load4($pending247);
          $125 = load4($pending_buf_size);
          $cmp276 = ($124|0)==($125|0);
          if ($cmp276) {
           break;
          }
          $$pre564 = load4($gzindex248);
          $$pre565 = load4($gzhead242$pre$phiZ2D);
          $126 = $$pre565;$128 = $$pre564;$130 = $124;$beg$1 = $124;
         } else {
          $126 = $108;$128 = $455;$130 = $107;$beg$1 = $beg$0558;
         }
         $extra283 = ((($126)) + 16|0);
         $127 = load4($extra283);
         $arrayidx284 = (($127) + ($128)|0);
         $129 = load1($arrayidx284);
         $inc286 = (($130) + 1)|0;
         store4($pending247,$inc286);
         $131 = load4($pending_buf267);
         $arrayidx288 = (($131) + ($130)|0);
         store1($arrayidx288,$129);
         $132 = load4($gzindex248);
         $inc290 = (($132) + 1)|0;
         store4($gzindex248,$inc290);
         $133 = load4($gzhead242$pre$phiZ2D);
         $extra_len250 = ((($133)) + 20|0);
         $134 = load4($extra_len250);
         $and251 = $134 & 65535;
         $cmp252 = ($inc290>>>0)<($and251>>>0);
         if (!($cmp252)) {
          $135 = $133;$beg$2 = $beg$1;
          break L53;
         }
         $$pre563 = load4($pending247);
         $107 = $$pre563;$108 = $133;$455 = $inc290;$beg$0558 = $beg$1;
        }
        $$pre566$pre = load4($gzhead242$pre$phiZ2D);
        $135 = $$pre566$pre;$beg$2 = $124;
       } else {
        $135 = $101;$beg$2 = $103;
       }
      } while(0);
      $hcrc292 = ((($135)) + 44|0);
      $136 = load4($hcrc292);
      $tobool293 = ($136|0)==(0);
      if ($tobool293) {
       $141 = $135;
      } else {
       $137 = load4($pending247);
       $cmp296 = ($137>>>0)>($beg$2>>>0);
       if ($cmp296) {
        $adler299 = ((($strm)) + 48|0);
        $138 = load4($adler299);
        $pending_buf300 = ((($0)) + 8|0);
        $139 = load4($pending_buf300);
        $add$ptr301 = (($139) + ($beg$2)|0);
        $sub303 = (($137) - ($beg$2))|0;
        $call304 = (_crc32($138,$add$ptr301,$sub303)|0);
        store4($adler299,$call304);
        $$pre567 = load4($gzhead242$pre$phiZ2D);
        $141 = $$pre567;
       } else {
        $141 = $135;
       }
      }
      $140 = load4($gzindex248);
      $extra_len309 = ((($141)) + 20|0);
      $142 = load4($extra_len309);
      $cmp310 = ($140|0)==($142|0);
      if ($cmp310) {
       store4($gzindex248,0);
       store4($status,73);
       $143 = $141;$gzhead324$pre$phiZ2D = $gzhead242$pre$phiZ2D;
       label = 55;
       break;
      } else {
       $$pr542$pr$pre = load4($status);
       $$pr542$pr = $$pr542$pr$pre;
       label = 53;
       break;
      }
     }
    } while(0);
    if ((label|0) == 53) {
     $cmp321 = ($$pr542$pr|0)==(73);
     if ($cmp321) {
      $gzhead324$phi$trans$insert = ((($0)) + 28|0);
      $$pre569 = load4($gzhead324$phi$trans$insert);
      $143 = $$pre569;$gzhead324$pre$phiZ2D = $gzhead324$phi$trans$insert;
      label = 55;
     } else {
      $177 = $$pr542$pr;
      label = 73;
     }
    }
    do {
     if ((label|0) == 55) {
      $name325 = ((($143)) + 28|0);
      $144 = load4($name325);
      $cmp326 = ($144|0)==(0|0);
      if ($cmp326) {
       store4($status,91);
       $gzhead403$pre$phiZ2D = $gzhead324$pre$phiZ2D;
       label = 75;
       break;
      }
      $pending330 = ((($0)) + 20|0);
      $145 = load4($pending330);
      $pending_buf_size332 = ((($0)) + 12|0);
      $adler344 = ((($strm)) + 48|0);
      $pending_buf345 = ((($0)) + 8|0);
      $total_out$i423 = ((($strm)) + 20|0);
      $gzindex360 = ((($0)) + 32|0);
      $147 = $145;$beg329$0 = $145;
      while(1) {
       $146 = load4($pending_buf_size332);
       $cmp333 = ($147|0)==($146|0);
       if ($cmp333) {
        $148 = load4($gzhead324$pre$phiZ2D);
        $hcrc337 = ((($148)) + 44|0);
        $149 = load4($hcrc337);
        $tobool338 = ($149|0)!=(0);
        $cmp341 = ($147>>>0)>($beg329$0>>>0);
        $or$cond319 = $cmp341 & $tobool338;
        if ($or$cond319) {
         $150 = load4($adler344);
         $151 = load4($pending_buf345);
         $add$ptr346 = (($151) + ($beg329$0)|0);
         $sub348 = (($147) - ($beg329$0))|0;
         $call349 = (_crc32($150,$add$ptr346,$sub348)|0);
         store4($adler344,$call349);
        }
        $152 = load4($state);
        $pending$i413 = ((($152)) + 20|0);
        $153 = load4($pending$i413);
        $154 = load4($avail_out);
        $cmp$i415 = ($153>>>0)>($154>>>0);
        $$$i416 = $cmp$i415 ? $154 : $153;
        $cmp2$i417 = ($$$i416|0)==(0);
        if (!($cmp2$i417)) {
         $155 = load4($next_out);
         $pending_out$i419 = ((($152)) + 16|0);
         $156 = load4($pending_out$i419);
         _memcpy(($155|0),($156|0),($$$i416|0))|0;
         $157 = load4($next_out);
         $add$ptr$i420 = (($157) + ($$$i416)|0);
         store4($next_out,$add$ptr$i420);
         $158 = load4($state);
         $pending_out8$i421 = ((($158)) + 16|0);
         $159 = load4($pending_out8$i421);
         $add$ptr9$i422 = (($159) + ($$$i416)|0);
         store4($pending_out8$i421,$add$ptr9$i422);
         $160 = load4($total_out$i423);
         $add$i424 = (($160) + ($$$i416))|0;
         store4($total_out$i423,$add$i424);
         $161 = load4($avail_out);
         $sub$i425 = (($161) - ($$$i416))|0;
         store4($avail_out,$sub$i425);
         $pending12$i426 = ((($158)) + 20|0);
         $162 = load4($pending12$i426);
         $sub13$i427 = (($162) - ($$$i416))|0;
         store4($pending12$i426,$sub13$i427);
         $cmp16$i428 = ($sub13$i427|0)==(0);
         if ($cmp16$i428) {
          $pending_buf$i430 = ((($158)) + 8|0);
          $163 = load4($pending_buf$i430);
          store4($pending_out8$i421,$163);
         }
        }
        $164 = load4($pending330);
        $165 = load4($pending_buf_size332);
        $cmp355 = ($164|0)==($165|0);
        if ($cmp355) {
         $beg329$2 = $164;$val$0 = 1;
         break;
        } else {
         $170 = $164;$beg329$1 = $164;
        }
       } else {
        $170 = $147;$beg329$1 = $beg329$0;
       }
       $166 = load4($gzindex360);
       $inc361 = (($166) + 1)|0;
       store4($gzindex360,$inc361);
       $167 = load4($gzhead324$pre$phiZ2D);
       $name363 = ((($167)) + 28|0);
       $168 = load4($name363);
       $arrayidx364 = (($168) + ($166)|0);
       $169 = load1($arrayidx364);
       $conv365 = $169&255;
       $inc368 = (($170) + 1)|0;
       store4($pending330,$inc368);
       $171 = load4($pending_buf345);
       $arrayidx370 = (($171) + ($170)|0);
       store1($arrayidx370,$169);
       $cmp371 = ($169<<24>>24)==(0);
       if ($cmp371) {
        $beg329$2 = $beg329$1;$val$0 = $conv365;
        break;
       }
       $$pre570 = load4($pending330);
       $147 = $$pre570;$beg329$0 = $beg329$1;
      }
      $172 = load4($gzhead324$pre$phiZ2D);
      $hcrc374 = ((($172)) + 44|0);
      $173 = load4($hcrc374);
      $tobool375 = ($173|0)==(0);
      if (!($tobool375)) {
       $174 = load4($pending330);
       $cmp378 = ($174>>>0)>($beg329$2>>>0);
       if ($cmp378) {
        $175 = load4($adler344);
        $176 = load4($pending_buf345);
        $add$ptr383 = (($176) + ($beg329$2)|0);
        $sub385 = (($174) - ($beg329$2))|0;
        $call386 = (_crc32($175,$add$ptr383,$sub385)|0);
        store4($adler344,$call386);
       }
      }
      $cmp389 = ($val$0|0)==(0);
      if ($cmp389) {
       store4($gzindex360,0);
       store4($status,91);
       $gzhead403$pre$phiZ2D = $gzhead324$pre$phiZ2D;
       label = 75;
       break;
      } else {
       $$pr544 = load4($status);
       $177 = $$pr544;
       label = 73;
       break;
      }
     }
    } while(0);
    if ((label|0) == 73) {
     $cmp400 = ($177|0)==(91);
     if ($cmp400) {
      $$pre576 = ((($0)) + 28|0);
      $gzhead403$pre$phiZ2D = $$pre576;
      label = 75;
     } else {
      $$pr546$pr = $177;
      label = 93;
     }
    }
    do {
     if ((label|0) == 75) {
      $178 = load4($gzhead403$pre$phiZ2D);
      $comment404 = ((($178)) + 36|0);
      $179 = load4($comment404);
      $cmp405 = ($179|0)==(0|0);
      if ($cmp405) {
       store4($status,103);
       $gzhead485$pre$phiZ2D = $gzhead403$pre$phiZ2D;
       label = 95;
       break;
      }
      $pending409 = ((($0)) + 20|0);
      $180 = load4($pending409);
      $pending_buf_size413 = ((($0)) + 12|0);
      $adler425 = ((($strm)) + 48|0);
      $pending_buf426 = ((($0)) + 8|0);
      $total_out$i487 = ((($strm)) + 20|0);
      $gzindex441 = ((($0)) + 32|0);
      $182 = $180;$beg408$0 = $180;
      while(1) {
       $181 = load4($pending_buf_size413);
       $cmp414 = ($182|0)==($181|0);
       if ($cmp414) {
        $183 = load4($gzhead403$pre$phiZ2D);
        $hcrc418 = ((($183)) + 44|0);
        $184 = load4($hcrc418);
        $tobool419 = ($184|0)!=(0);
        $cmp422 = ($182>>>0)>($beg408$0>>>0);
        $or$cond320 = $cmp422 & $tobool419;
        if ($or$cond320) {
         $185 = load4($adler425);
         $186 = load4($pending_buf426);
         $add$ptr427 = (($186) + ($beg408$0)|0);
         $sub429 = (($182) - ($beg408$0))|0;
         $call430 = (_crc32($185,$add$ptr427,$sub429)|0);
         store4($adler425,$call430);
        }
        $187 = load4($state);
        $pending$i477 = ((($187)) + 20|0);
        $188 = load4($pending$i477);
        $189 = load4($avail_out);
        $cmp$i479 = ($188>>>0)>($189>>>0);
        $$$i480 = $cmp$i479 ? $189 : $188;
        $cmp2$i481 = ($$$i480|0)==(0);
        if (!($cmp2$i481)) {
         $190 = load4($next_out);
         $pending_out$i483 = ((($187)) + 16|0);
         $191 = load4($pending_out$i483);
         _memcpy(($190|0),($191|0),($$$i480|0))|0;
         $192 = load4($next_out);
         $add$ptr$i484 = (($192) + ($$$i480)|0);
         store4($next_out,$add$ptr$i484);
         $193 = load4($state);
         $pending_out8$i485 = ((($193)) + 16|0);
         $194 = load4($pending_out8$i485);
         $add$ptr9$i486 = (($194) + ($$$i480)|0);
         store4($pending_out8$i485,$add$ptr9$i486);
         $195 = load4($total_out$i487);
         $add$i488 = (($195) + ($$$i480))|0;
         store4($total_out$i487,$add$i488);
         $196 = load4($avail_out);
         $sub$i489 = (($196) - ($$$i480))|0;
         store4($avail_out,$sub$i489);
         $pending12$i490 = ((($193)) + 20|0);
         $197 = load4($pending12$i490);
         $sub13$i491 = (($197) - ($$$i480))|0;
         store4($pending12$i490,$sub13$i491);
         $cmp16$i492 = ($sub13$i491|0)==(0);
         if ($cmp16$i492) {
          $pending_buf$i494 = ((($193)) + 8|0);
          $198 = load4($pending_buf$i494);
          store4($pending_out8$i485,$198);
         }
        }
        $199 = load4($pending409);
        $200 = load4($pending_buf_size413);
        $cmp436 = ($199|0)==($200|0);
        if ($cmp436) {
         $beg408$2 = $199;$val410$0 = 1;
         break;
        } else {
         $205 = $199;$beg408$1 = $199;
        }
       } else {
        $205 = $182;$beg408$1 = $beg408$0;
       }
       $201 = load4($gzindex441);
       $inc442 = (($201) + 1)|0;
       store4($gzindex441,$inc442);
       $202 = load4($gzhead403$pre$phiZ2D);
       $comment444 = ((($202)) + 36|0);
       $203 = load4($comment444);
       $arrayidx445 = (($203) + ($201)|0);
       $204 = load1($arrayidx445);
       $conv446 = $204&255;
       $inc449 = (($205) + 1)|0;
       store4($pending409,$inc449);
       $206 = load4($pending_buf426);
       $arrayidx451 = (($206) + ($205)|0);
       store1($arrayidx451,$204);
       $cmp453 = ($204<<24>>24)==(0);
       if ($cmp453) {
        $beg408$2 = $beg408$1;$val410$0 = $conv446;
        break;
       }
       $$pre571 = load4($pending409);
       $182 = $$pre571;$beg408$0 = $beg408$1;
      }
      $207 = load4($gzhead403$pre$phiZ2D);
      $hcrc457 = ((($207)) + 44|0);
      $208 = load4($hcrc457);
      $tobool458 = ($208|0)==(0);
      if (!($tobool458)) {
       $209 = load4($pending409);
       $cmp461 = ($209>>>0)>($beg408$2>>>0);
       if ($cmp461) {
        $210 = load4($adler425);
        $211 = load4($pending_buf426);
        $add$ptr466 = (($211) + ($beg408$2)|0);
        $sub468 = (($209) - ($beg408$2))|0;
        $call469 = (_crc32($210,$add$ptr466,$sub468)|0);
        store4($adler425,$call469);
       }
      }
      $cmp472 = ($val410$0|0)==(0);
      if ($cmp472) {
       store4($status,103);
       $gzhead485$pre$phiZ2D = $gzhead403$pre$phiZ2D;
       label = 95;
       break;
      } else {
       $$pr546$pr$pre = load4($status);
       $$pr546$pr = $$pr546$pr$pre;
       label = 93;
       break;
      }
     }
    } while(0);
    if ((label|0) == 93) {
     $cmp482 = ($$pr546$pr|0)==(103);
     if ($cmp482) {
      $$pre577 = ((($0)) + 28|0);
      $gzhead485$pre$phiZ2D = $$pre577;
      label = 95;
     }
    }
    do {
     if ((label|0) == 95) {
      $212 = load4($gzhead485$pre$phiZ2D);
      $hcrc486 = ((($212)) + 44|0);
      $213 = load4($hcrc486);
      $tobool487 = ($213|0)==(0);
      if ($tobool487) {
       store4($status,113);
       break;
      }
      $pending489 = ((($0)) + 20|0);
      $214 = load4($pending489);
      $add490 = (($214) + 2)|0;
      $pending_buf_size491 = ((($0)) + 12|0);
      $215 = load4($pending_buf_size491);
      $cmp492 = ($add490>>>0)>($215>>>0);
      if ($cmp492) {
       $216 = load4($state);
       $pending$i498 = ((($216)) + 20|0);
       $217 = load4($pending$i498);
       $218 = load4($avail_out);
       $cmp$i500 = ($217>>>0)>($218>>>0);
       $$$i501 = $cmp$i500 ? $218 : $217;
       $cmp2$i502 = ($$$i501|0)==(0);
       if (!($cmp2$i502)) {
        $219 = load4($next_out);
        $pending_out$i504 = ((($216)) + 16|0);
        $220 = load4($pending_out$i504);
        _memcpy(($219|0),($220|0),($$$i501|0))|0;
        $221 = load4($next_out);
        $add$ptr$i505 = (($221) + ($$$i501)|0);
        store4($next_out,$add$ptr$i505);
        $222 = load4($state);
        $pending_out8$i506 = ((($222)) + 16|0);
        $223 = load4($pending_out8$i506);
        $add$ptr9$i507 = (($223) + ($$$i501)|0);
        store4($pending_out8$i506,$add$ptr9$i507);
        $total_out$i508 = ((($strm)) + 20|0);
        $224 = load4($total_out$i508);
        $add$i509 = (($224) + ($$$i501))|0;
        store4($total_out$i508,$add$i509);
        $225 = load4($avail_out);
        $sub$i510 = (($225) - ($$$i501))|0;
        store4($avail_out,$sub$i510);
        $pending12$i511 = ((($222)) + 20|0);
        $226 = load4($pending12$i511);
        $sub13$i512 = (($226) - ($$$i501))|0;
        store4($pending12$i511,$sub13$i512);
        $cmp16$i513 = ($sub13$i512|0)==(0);
        if ($cmp16$i513) {
         $pending_buf$i515 = ((($222)) + 8|0);
         $227 = load4($pending_buf$i515);
         store4($pending_out8$i506,$227);
        }
       }
      }
      $228 = load4($pending489);
      $add497 = (($228) + 2)|0;
      $229 = load4($pending_buf_size491);
      $cmp499 = ($add497>>>0)>($229>>>0);
      if (!($cmp499)) {
       $adler502 = ((($strm)) + 48|0);
       $230 = load4($adler502);
       $conv504 = $230&255;
       $inc506 = (($228) + 1)|0;
       store4($pending489,$inc506);
       $pending_buf507 = ((($0)) + 8|0);
       $231 = load4($pending_buf507);
       $arrayidx508 = (($231) + ($228)|0);
       store1($arrayidx508,$conv504);
       $232 = load4($adler502);
       $shr510 = $232 >>> 8;
       $conv512 = $shr510&255;
       $233 = load4($pending489);
       $inc514 = (($233) + 1)|0;
       store4($pending489,$inc514);
       $234 = load4($pending_buf507);
       $arrayidx516 = (($234) + ($233)|0);
       store1($arrayidx516,$conv512);
       $call517 = (_crc32(0,0,0)|0);
       store4($adler502,$call517);
       store4($status,113);
      }
     }
    } while(0);
    $pending525 = ((($0)) + 20|0);
    $235 = load4($pending525);
    $cmp526 = ($235|0)==(0);
    if ($cmp526) {
     $avail_in536 = ((($strm)) + 4|0);
     $249 = load4($avail_in536);
     $cmp537 = ($249|0)==(0);
     $cmp540 = ($10|0)>=($flush|0);
     $or$cond4 = $cmp14 & $cmp540;
     $or$cond321 = $or$cond4 & $cmp537;
     if ($or$cond321) {
      $250 = load4((1780));
      $msg546 = ((($strm)) + 24|0);
      store4($msg546,$250);
      $retval$1 = -5;
      return ($retval$1|0);
     }
    } else {
     $236 = load4($state);
     $pending$i519 = ((($236)) + 20|0);
     $237 = load4($pending$i519);
     $238 = load4($avail_out);
     $cmp$i521 = ($237>>>0)>($238>>>0);
     $$$i522 = $cmp$i521 ? $238 : $237;
     $cmp2$i523 = ($$$i522|0)==(0);
     if ($cmp2$i523) {
      $248 = $238;
     } else {
      $239 = load4($next_out);
      $pending_out$i525 = ((($236)) + 16|0);
      $240 = load4($pending_out$i525);
      _memcpy(($239|0),($240|0),($$$i522|0))|0;
      $241 = load4($next_out);
      $add$ptr$i526 = (($241) + ($$$i522)|0);
      store4($next_out,$add$ptr$i526);
      $242 = load4($state);
      $pending_out8$i527 = ((($242)) + 16|0);
      $243 = load4($pending_out8$i527);
      $add$ptr9$i528 = (($243) + ($$$i522)|0);
      store4($pending_out8$i527,$add$ptr9$i528);
      $total_out$i529 = ((($strm)) + 20|0);
      $244 = load4($total_out$i529);
      $add$i530 = (($244) + ($$$i522))|0;
      store4($total_out$i529,$add$i530);
      $245 = load4($avail_out);
      $sub$i531 = (($245) - ($$$i522))|0;
      store4($avail_out,$sub$i531);
      $pending12$i532 = ((($242)) + 20|0);
      $246 = load4($pending12$i532);
      $sub13$i533 = (($246) - ($$$i522))|0;
      store4($pending12$i532,$sub13$i533);
      $cmp16$i534 = ($sub13$i533|0)==(0);
      if ($cmp16$i534) {
       $pending_buf$i536 = ((($242)) + 8|0);
       $247 = load4($pending_buf$i536);
       store4($pending_out8$i527,$247);
       $248 = $sub$i531;
      } else {
       $248 = $sub$i531;
      }
     }
     $cmp530 = ($248|0)==(0);
     if ($cmp530) {
      store4($last_flush,-1);
      $retval$1 = 0;
      return ($retval$1|0);
     }
    }
    $251 = load4($status);
    $cmp550 = ($251|0)==(666);
    $avail_in553 = ((($strm)) + 4|0);
    $252 = load4($avail_in553);
    $cmp554 = ($252|0)==(0);
    if ($cmp550) {
     if ($cmp554) {
      label = 115;
     } else {
      $253 = load4((1780));
      $msg557 = ((($strm)) + 24|0);
      store4($msg557,$253);
      $retval$1 = -5;
      return ($retval$1|0);
     }
    } else {
     if ($cmp554) {
      label = 115;
     } else {
      label = 116;
     }
    }
    if ((label|0) == 115) {
     $lookahead = ((($0)) + 116|0);
     $254 = load4($lookahead);
     $cmp563 = ($254|0)==(0);
     $cmp566 = ($flush|0)==(0);
     $brmerge = $cmp566 | $cmp550;
     $or$cond582 = $cmp563 & $brmerge;
     if (!($or$cond582)) {
      label = 116;
     }
    }
    do {
     if ((label|0) == 116) {
      $strategy573 = ((($0)) + 136|0);
      $255 = load4($strategy573);
      L172: do {
       switch ($255|0) {
       case 2:  {
        $lookahead$i433 = ((($0)) + 116|0);
        $match_length$i434 = ((($0)) + 96|0);
        $strstart$i435 = ((($0)) + 108|0);
        $window$i436 = ((($0)) + 56|0);
        $last_lit$i437 = ((($0)) + 5792|0);
        $d_buf$i438 = ((($0)) + 5796|0);
        $l_buf$i439 = ((($0)) + 5784|0);
        $lit_bufsize$i440 = ((($0)) + 5788|0);
        $block_start$i441 = ((($0)) + 92|0);
        while(1) {
         $256 = load4($lookahead$i433);
         $cmp$i443 = ($256|0)==(0);
         if ($cmp$i443) {
          _fill_window($0);
          $257 = load4($lookahead$i433);
          $cmp2$i445 = ($257|0)==(0);
          if ($cmp2$i445) {
           break;
          }
         }
         store4($match_length$i434,0);
         $258 = load4($strstart$i435);
         $259 = load4($window$i436);
         $arrayidx$i447 = (($259) + ($258)|0);
         $260 = load1($arrayidx$i447);
         $261 = load4($last_lit$i437);
         $262 = load4($d_buf$i438);
         $arrayidx8$i = (($262) + ($261<<1)|0);
         store2($arrayidx8$i,0);
         $inc$i448 = (($261) + 1)|0;
         store4($last_lit$i437,$inc$i448);
         $263 = load4($l_buf$i439);
         $arrayidx10$i = (($263) + ($261)|0);
         store1($arrayidx10$i,$260);
         $idxprom$i449 = $260&255;
         $freq$i450 = (((($0)) + 148|0) + ($idxprom$i449<<2)|0);
         $264 = load2($freq$i450);
         $inc12$i = (($264) + 1)<<16>>16;
         store2($freq$i450,$inc12$i);
         $265 = load4($last_lit$i437);
         $266 = load4($lit_bufsize$i440);
         $sub$i451 = (($266) + -1)|0;
         $cmp14$i = ($265|0)==($sub$i451|0);
         $267 = load4($lookahead$i433);
         $dec$i = (($267) + -1)|0;
         store4($lookahead$i433,$dec$i);
         $268 = load4($strstart$i435);
         $inc17$i = (($268) + 1)|0;
         store4($strstart$i435,$inc17$i);
         if (!($cmp14$i)) {
          continue;
         }
         $269 = load4($block_start$i441);
         $cmp19$i = ($269|0)>(-1);
         if ($cmp19$i) {
          $270 = load4($window$i436);
          $arrayidx23$i = (($270) + ($269)|0);
          $cond$i = $arrayidx23$i;
         } else {
          $cond$i = 0;
         }
         $sub26$i = (($inc17$i) - ($269))|0;
         __tr_flush_block($0,$cond$i,$sub26$i,0);
         $271 = load4($strstart$i435);
         store4($block_start$i441,$271);
         $272 = load4($0);
         $state$i$i452 = ((($272)) + 28|0);
         $273 = load4($state$i$i452);
         $pending$i$i453 = ((($273)) + 20|0);
         $274 = load4($pending$i$i453);
         $avail_out$i$i454 = ((($272)) + 16|0);
         $275 = load4($avail_out$i$i454);
         $cmp$i$i455 = ($274>>>0)>($275>>>0);
         $$$i$i456 = $cmp$i$i455 ? $275 : $274;
         $cmp2$i$i457 = ($$$i$i456|0)==(0);
         if (!($cmp2$i$i457)) {
          $next_out$i$i458 = ((($272)) + 12|0);
          $276 = load4($next_out$i$i458);
          $pending_out$i$i459 = ((($273)) + 16|0);
          $277 = load4($pending_out$i$i459);
          _memcpy(($276|0),($277|0),($$$i$i456|0))|0;
          $278 = load4($next_out$i$i458);
          $add$ptr$i$i460 = (($278) + ($$$i$i456)|0);
          store4($next_out$i$i458,$add$ptr$i$i460);
          $279 = load4($state$i$i452);
          $pending_out8$i$i461 = ((($279)) + 16|0);
          $280 = load4($pending_out8$i$i461);
          $add$ptr9$i$i462 = (($280) + ($$$i$i456)|0);
          store4($pending_out8$i$i461,$add$ptr9$i$i462);
          $total_out$i$i463 = ((($272)) + 20|0);
          $281 = load4($total_out$i$i463);
          $add$i$i464 = (($281) + ($$$i$i456))|0;
          store4($total_out$i$i463,$add$i$i464);
          $282 = load4($avail_out$i$i454);
          $sub$i$i465 = (($282) - ($$$i$i456))|0;
          store4($avail_out$i$i454,$sub$i$i465);
          $pending12$i$i466 = ((($279)) + 20|0);
          $283 = load4($pending12$i$i466);
          $sub13$i$i467 = (($283) - ($$$i$i456))|0;
          store4($pending12$i$i466,$sub13$i$i467);
          $cmp16$i$i468 = ($sub13$i$i467|0)==(0);
          if ($cmp16$i$i468) {
           $pending_buf$i$i470 = ((($279)) + 8|0);
           $284 = load4($pending_buf$i$i470);
           store4($pending_out8$i$i461,$284);
          }
         }
         $285 = load4($0);
         $avail_out$i472 = ((($285)) + 16|0);
         $286 = load4($avail_out$i472);
         $cmp30$i = ($286|0)==(0);
         if ($cmp30$i) {
          break L172;
         }
        }
        $cmp4$i = ($flush|0)==(0);
        if (!($cmp4$i)) {
         $287 = load4($block_start$i441);
         $cmp36$i = ($287|0)>(-1);
         if ($cmp36$i) {
          $288 = load4($window$i436);
          $arrayidx41$i = (($288) + ($287)|0);
          $cond44$i = $arrayidx41$i;
         } else {
          $cond44$i = 0;
         }
         $289 = load4($strstart$i435);
         $sub47$i = (($289) - ($287))|0;
         $cmp48$i = ($flush|0)==(4);
         $conv49$i = $cmp48$i&1;
         __tr_flush_block($0,$cond44$i,$sub47$i,$conv49$i);
         $290 = load4($strstart$i435);
         store4($block_start$i441,$290);
         $291 = load4($0);
         $state$i39$i = ((($291)) + 28|0);
         $292 = load4($state$i39$i);
         $pending$i40$i = ((($292)) + 20|0);
         $293 = load4($pending$i40$i);
         $avail_out$i41$i = ((($291)) + 16|0);
         $294 = load4($avail_out$i41$i);
         $cmp$i42$i = ($293>>>0)>($294>>>0);
         $$$i43$i = $cmp$i42$i ? $294 : $293;
         $cmp2$i44$i = ($$$i43$i|0)==(0);
         if (!($cmp2$i44$i)) {
          $next_out$i45$i = ((($291)) + 12|0);
          $295 = load4($next_out$i45$i);
          $pending_out$i46$i = ((($292)) + 16|0);
          $296 = load4($pending_out$i46$i);
          _memcpy(($295|0),($296|0),($$$i43$i|0))|0;
          $297 = load4($next_out$i45$i);
          $add$ptr$i47$i = (($297) + ($$$i43$i)|0);
          store4($next_out$i45$i,$add$ptr$i47$i);
          $298 = load4($state$i39$i);
          $pending_out8$i48$i = ((($298)) + 16|0);
          $299 = load4($pending_out8$i48$i);
          $add$ptr9$i49$i = (($299) + ($$$i43$i)|0);
          store4($pending_out8$i48$i,$add$ptr9$i49$i);
          $total_out$i50$i = ((($291)) + 20|0);
          $300 = load4($total_out$i50$i);
          $add$i51$i = (($300) + ($$$i43$i))|0;
          store4($total_out$i50$i,$add$i51$i);
          $301 = load4($avail_out$i41$i);
          $sub$i52$i = (($301) - ($$$i43$i))|0;
          store4($avail_out$i41$i,$sub$i52$i);
          $pending12$i53$i = ((($298)) + 20|0);
          $302 = load4($pending12$i53$i);
          $sub13$i54$i = (($302) - ($$$i43$i))|0;
          store4($pending12$i53$i,$sub13$i54$i);
          $cmp16$i55$i = ($sub13$i54$i|0)==(0);
          if ($cmp16$i55$i) {
           $pending_buf$i57$i = ((($298)) + 8|0);
           $303 = load4($pending_buf$i57$i);
           store4($pending_out8$i48$i,$303);
          }
         }
         $304 = load4($0);
         $avail_out54$i = ((($304)) + 16|0);
         $305 = load4($avail_out54$i);
         $cmp55$i = ($305|0)==(0);
         if ($cmp55$i) {
          $cond60$i = $cmp48$i ? 2 : 0;
          $cond591 = $cond60$i;
          label = 175;
          break L172;
         } else {
          $cond64$i = $cmp48$i ? 3 : 1;
          $cond591 = $cond64$i;
          label = 175;
          break L172;
         }
        }
        break;
       }
       case 3:  {
        $lookahead$i = ((($0)) + 116|0);
        $cmp3$i = ($flush|0)==(0);
        $match_length$i = ((($0)) + 96|0);
        $strstart$i = ((($0)) + 108|0);
        $last_lit$i = ((($0)) + 5792|0);
        $d_buf$i = ((($0)) + 5796|0);
        $l_buf$i = ((($0)) + 5784|0);
        $lit_bufsize$i = ((($0)) + 5788|0);
        $window$i = ((($0)) + 56|0);
        $block_start$i = ((($0)) + 92|0);
        while(1) {
         $306 = load4($lookahead$i);
         $cmp$i374 = ($306>>>0)<(258);
         if ($cmp$i374) {
          _fill_window($0);
          $307 = load4($lookahead$i);
          $cmp2$i375 = ($307>>>0)<(258);
          $or$cond$i = $cmp3$i & $cmp2$i375;
          if ($or$cond$i) {
           break L172;
          }
          $cmp6$i = ($307|0)==(0);
          if ($cmp6$i) {
           break;
          }
          store4($match_length$i,0);
          $cmp11$i = ($307>>>0)>(2);
          if ($cmp11$i) {
           $322 = $307;
           label = 143;
          } else {
           $$pre$i = load4($strstart$i);
           $336 = $$pre$i;
           label = 158;
          }
         } else {
          store4($match_length$i,0);
          $322 = $306;
          label = 143;
         }
         if ((label|0) == 143) {
          label = 0;
          $308 = load4($strstart$i);
          $cmp13$i = ($308|0)==(0);
          if ($cmp13$i) {
           $336 = 0;
           label = 158;
          } else {
           $309 = load4($window$i);
           $add$ptr$i376 = (($309) + ($308)|0);
           $add$ptr16$ptr$i = ((($add$ptr$i376)) + -1|0);
           $310 = load1($add$ptr16$ptr$i);
           $311 = load1($add$ptr$i376);
           $cmp18$i = ($310<<24>>24)==($311<<24>>24);
           if ($cmp18$i) {
            $incdec$ptr21$ptr$i = ((($add$ptr$i376)) + 1|0);
            $312 = load1($incdec$ptr21$ptr$i);
            $cmp23$i = ($310<<24>>24)==($312<<24>>24);
            if ($cmp23$i) {
             $incdec$ptr26$i = ((($incdec$ptr21$ptr$i)) + 1|0);
             $313 = load1($incdec$ptr26$i);
             $cmp28$i = ($310<<24>>24)==($313<<24>>24);
             if ($cmp28$i) {
              $add$ptr34$i = ((($add$ptr$i376)) + 258|0);
              $$idx$i = 1;
              while(1) {
               $$ptr$i = (($add$ptr$i376) + ($$idx$i)|0);
               $incdec$ptr35$i = ((($$ptr$i)) + 2|0);
               $314 = load1($incdec$ptr35$i);
               $cmp37$i = ($310<<24>>24)==($314<<24>>24);
               if (!($cmp37$i)) {
                $scan$1$i = $incdec$ptr35$i;
                break;
               }
               $incdec$ptr40$i = ((($$ptr$i)) + 3|0);
               $315 = load1($incdec$ptr40$i);
               $cmp42$i = ($310<<24>>24)==($315<<24>>24);
               if (!($cmp42$i)) {
                $scan$1$i = $incdec$ptr40$i;
                break;
               }
               $incdec$ptr45$i = ((($$ptr$i)) + 4|0);
               $316 = load1($incdec$ptr45$i);
               $cmp47$i = ($310<<24>>24)==($316<<24>>24);
               if (!($cmp47$i)) {
                $scan$1$i = $incdec$ptr45$i;
                break;
               }
               $incdec$ptr50$i = ((($$ptr$i)) + 5|0);
               $317 = load1($incdec$ptr50$i);
               $cmp52$i = ($310<<24>>24)==($317<<24>>24);
               if (!($cmp52$i)) {
                $scan$1$i = $incdec$ptr50$i;
                break;
               }
               $incdec$ptr55$i = ((($$ptr$i)) + 6|0);
               $318 = load1($incdec$ptr55$i);
               $cmp57$i = ($310<<24>>24)==($318<<24>>24);
               if (!($cmp57$i)) {
                $scan$1$i = $incdec$ptr55$i;
                break;
               }
               $incdec$ptr60$i = ((($$ptr$i)) + 7|0);
               $319 = load1($incdec$ptr60$i);
               $cmp62$i = ($310<<24>>24)==($319<<24>>24);
               if (!($cmp62$i)) {
                $scan$1$i = $incdec$ptr60$i;
                break;
               }
               $$add106$i = (($$idx$i) + 8)|0;
               $incdec$ptr65$ptr$i = (($add$ptr$i376) + ($$add106$i)|0);
               $320 = load1($incdec$ptr65$ptr$i);
               $cmp67$i = ($310<<24>>24)==($320<<24>>24);
               if (!($cmp67$i)) {
                $scan$1$i = $incdec$ptr65$ptr$i;
                break;
               }
               $$add$i = (($$idx$i) + 9)|0;
               $incdec$ptr70$ptr$i = (($add$ptr$i376) + ($$add$i)|0);
               $321 = load1($incdec$ptr70$ptr$i);
               $cmp72$i = ($310<<24>>24)==($321<<24>>24);
               $cmp74$i = ($$add$i|0)<(258);
               $or$cond107$i = $cmp74$i & $cmp72$i;
               if ($or$cond107$i) {
                $$idx$i = $$add106$i;
               } else {
                $scan$1$i = $incdec$ptr70$ptr$i;
                break;
               }
              }
              $sub$ptr$lhs$cast$i = $add$ptr34$i;
              $sub$ptr$rhs$cast$i = $scan$1$i;
              $sub$ptr$sub105$i = (($sub$ptr$rhs$cast$i) - ($sub$ptr$lhs$cast$i))|0;
              $sub$i377 = (($sub$ptr$sub105$i) + 258)|0;
              $cmp79$i = ($sub$i377>>>0)>($322>>>0);
              $$sub$i = $cmp79$i ? $322 : $sub$i377;
              store4($match_length$i,$$sub$i);
              $cmp88$i = ($$sub$i>>>0)>(2);
              if ($cmp88$i) {
               $sub92$i = (($$sub$i) + 253)|0;
               $conv93$i = $sub92$i&255;
               $323 = load4($last_lit$i);
               $324 = load4($d_buf$i);
               $arrayidx$i378 = (($324) + ($323<<1)|0);
               store2($arrayidx$i378,1);
               $inc$i379 = (($323) + 1)|0;
               store4($last_lit$i,$inc$i379);
               $325 = load4($l_buf$i);
               $arrayidx95$i = (($325) + ($323)|0);
               store1($arrayidx95$i,$conv93$i);
               $idxprom$i = $sub92$i & 255;
               $arrayidx96$i = (14467 + ($idxprom$i)|0);
               $326 = load1($arrayidx96$i);
               $conv97$i = $326&255;
               $add$i380 = $conv97$i | 256;
               $add98$i = (($add$i380) + 1)|0;
               $freq$i = (((($0)) + 148|0) + ($add98$i<<2)|0);
               $327 = load2($freq$i);
               $inc100$i = (($327) + 1)<<16>>16;
               store2($freq$i,$inc100$i);
               $328 = load1(13955);
               $conv106$i = $328&255;
               $freq113$i = (((($0)) + 2440|0) + ($conv106$i<<2)|0);
               $329 = load2($freq113$i);
               $inc114$i = (($329) + 1)<<16>>16;
               store2($freq113$i,$inc114$i);
               $330 = load4($last_lit$i);
               $331 = load4($lit_bufsize$i);
               $sub116$i = (($331) + -1)|0;
               $cmp117$i = ($330|0)==($sub116$i|0);
               $conv118$i = $cmp117$i&1;
               $332 = load4($match_length$i);
               $333 = load4($lookahead$i);
               $sub121$i = (($333) - ($332))|0;
               store4($lookahead$i,$sub121$i);
               $334 = load4($strstart$i);
               $add124$i = (($334) + ($332))|0;
               store4($strstart$i,$add124$i);
               store4($match_length$i,0);
               $348 = $add124$i;$bflush$0$i = $conv118$i;
              } else {
               $336 = $308;
               label = 158;
              }
             } else {
              $336 = $308;
              label = 158;
             }
            } else {
             $336 = $308;
             label = 158;
            }
           } else {
            $336 = $308;
            label = 158;
           }
          }
         }
         if ((label|0) == 158) {
          label = 0;
          $335 = load4($window$i);
          $arrayidx128$i = (($335) + ($336)|0);
          $337 = load1($arrayidx128$i);
          $338 = load4($last_lit$i);
          $339 = load4($d_buf$i);
          $arrayidx131$i = (($339) + ($338<<1)|0);
          store2($arrayidx131$i,0);
          $inc133$i = (($338) + 1)|0;
          store4($last_lit$i,$inc133$i);
          $340 = load4($l_buf$i);
          $arrayidx135$i = (($340) + ($338)|0);
          store1($arrayidx135$i,$337);
          $idxprom136$i = $337&255;
          $freq140$i = (((($0)) + 148|0) + ($idxprom136$i<<2)|0);
          $341 = load2($freq140$i);
          $inc141$i = (($341) + 1)<<16>>16;
          store2($freq140$i,$inc141$i);
          $342 = load4($last_lit$i);
          $343 = load4($lit_bufsize$i);
          $sub144$i = (($343) + -1)|0;
          $cmp145$i = ($342|0)==($sub144$i|0);
          $conv146$i = $cmp145$i&1;
          $344 = load4($lookahead$i);
          $dec148$i = (($344) + -1)|0;
          store4($lookahead$i,$dec148$i);
          $345 = load4($strstart$i);
          $inc150$i = (($345) + 1)|0;
          store4($strstart$i,$inc150$i);
          $348 = $inc150$i;$bflush$0$i = $conv146$i;
         }
         $tobool$i = ($bflush$0$i|0)==(0);
         if ($tobool$i) {
          continue;
         }
         $346 = load4($block_start$i);
         $cmp153$i = ($346|0)>(-1);
         if ($cmp153$i) {
          $347 = load4($window$i);
          $arrayidx158$i = (($347) + ($346)|0);
          $cond161$i = $arrayidx158$i;
         } else {
          $cond161$i = 0;
         }
         $sub164$i = (($348) - ($346))|0;
         __tr_flush_block($0,$cond161$i,$sub164$i,0);
         $349 = load4($strstart$i);
         store4($block_start$i,$349);
         $350 = load4($0);
         $state$i$i = ((($350)) + 28|0);
         $351 = load4($state$i$i);
         $pending$i$i = ((($351)) + 20|0);
         $352 = load4($pending$i$i);
         $avail_out$i$i = ((($350)) + 16|0);
         $353 = load4($avail_out$i$i);
         $cmp$i$i = ($352>>>0)>($353>>>0);
         $$$i$i = $cmp$i$i ? $353 : $352;
         $cmp2$i$i = ($$$i$i|0)==(0);
         if (!($cmp2$i$i)) {
          $next_out$i$i = ((($350)) + 12|0);
          $354 = load4($next_out$i$i);
          $pending_out$i$i = ((($351)) + 16|0);
          $355 = load4($pending_out$i$i);
          _memcpy(($354|0),($355|0),($$$i$i|0))|0;
          $356 = load4($next_out$i$i);
          $add$ptr$i$i = (($356) + ($$$i$i)|0);
          store4($next_out$i$i,$add$ptr$i$i);
          $357 = load4($state$i$i);
          $pending_out8$i$i = ((($357)) + 16|0);
          $358 = load4($pending_out8$i$i);
          $add$ptr9$i$i = (($358) + ($$$i$i)|0);
          store4($pending_out8$i$i,$add$ptr9$i$i);
          $total_out$i$i = ((($350)) + 20|0);
          $359 = load4($total_out$i$i);
          $add$i$i = (($359) + ($$$i$i))|0;
          store4($total_out$i$i,$add$i$i);
          $360 = load4($avail_out$i$i);
          $sub$i$i = (($360) - ($$$i$i))|0;
          store4($avail_out$i$i,$sub$i$i);
          $pending12$i$i = ((($357)) + 20|0);
          $361 = load4($pending12$i$i);
          $sub13$i$i = (($361) - ($$$i$i))|0;
          store4($pending12$i$i,$sub13$i$i);
          $cmp16$i$i = ($sub13$i$i|0)==(0);
          if ($cmp16$i$i) {
           $pending_buf$i$i = ((($357)) + 8|0);
           $362 = load4($pending_buf$i$i);
           store4($pending_out8$i$i,$362);
          }
         }
         $363 = load4($0);
         $avail_out$i381 = ((($363)) + 16|0);
         $364 = load4($avail_out$i381);
         $cmp168$i = ($364|0)==(0);
         if ($cmp168$i) {
          break L172;
         }
        }
        $365 = load4($block_start$i);
        $cmp174$i = ($365|0)>(-1);
        if ($cmp174$i) {
         $366 = load4($window$i);
         $arrayidx179$i = (($366) + ($365)|0);
         $cond182$i = $arrayidx179$i;
        } else {
         $cond182$i = 0;
        }
        $367 = load4($strstart$i);
        $sub185$i = (($367) - ($365))|0;
        $cmp186$i = ($flush|0)==(4);
        $conv187$i = $cmp186$i&1;
        __tr_flush_block($0,$cond182$i,$sub185$i,$conv187$i);
        $368 = load4($strstart$i);
        store4($block_start$i,$368);
        $369 = load4($0);
        $state$i108$i = ((($369)) + 28|0);
        $370 = load4($state$i108$i);
        $pending$i109$i = ((($370)) + 20|0);
        $371 = load4($pending$i109$i);
        $avail_out$i110$i = ((($369)) + 16|0);
        $372 = load4($avail_out$i110$i);
        $cmp$i111$i = ($371>>>0)>($372>>>0);
        $$$i112$i = $cmp$i111$i ? $372 : $371;
        $cmp2$i113$i = ($$$i112$i|0)==(0);
        if (!($cmp2$i113$i)) {
         $next_out$i114$i = ((($369)) + 12|0);
         $373 = load4($next_out$i114$i);
         $pending_out$i115$i = ((($370)) + 16|0);
         $374 = load4($pending_out$i115$i);
         _memcpy(($373|0),($374|0),($$$i112$i|0))|0;
         $375 = load4($next_out$i114$i);
         $add$ptr$i116$i = (($375) + ($$$i112$i)|0);
         store4($next_out$i114$i,$add$ptr$i116$i);
         $376 = load4($state$i108$i);
         $pending_out8$i117$i = ((($376)) + 16|0);
         $377 = load4($pending_out8$i117$i);
         $add$ptr9$i118$i = (($377) + ($$$i112$i)|0);
         store4($pending_out8$i117$i,$add$ptr9$i118$i);
         $total_out$i119$i = ((($369)) + 20|0);
         $378 = load4($total_out$i119$i);
         $add$i120$i = (($378) + ($$$i112$i))|0;
         store4($total_out$i119$i,$add$i120$i);
         $379 = load4($avail_out$i110$i);
         $sub$i121$i = (($379) - ($$$i112$i))|0;
         store4($avail_out$i110$i,$sub$i121$i);
         $pending12$i122$i = ((($376)) + 20|0);
         $380 = load4($pending12$i122$i);
         $sub13$i123$i = (($380) - ($$$i112$i))|0;
         store4($pending12$i122$i,$sub13$i123$i);
         $cmp16$i124$i = ($sub13$i123$i|0)==(0);
         if ($cmp16$i124$i) {
          $pending_buf$i126$i = ((($376)) + 8|0);
          $381 = load4($pending_buf$i126$i);
          store4($pending_out8$i117$i,$381);
         }
        }
        $382 = load4($0);
        $avail_out192$i = ((($382)) + 16|0);
        $383 = load4($avail_out192$i);
        $cmp193$i = ($383|0)==(0);
        if ($cmp193$i) {
         $cond198$i = $cmp186$i ? 2 : 0;
         $cond591 = $cond198$i;
         label = 175;
         break L172;
        } else {
         $cond202$i = $cmp186$i ? 3 : 1;
         $cond591 = $cond202$i;
         label = 175;
         break L172;
        }
        break;
       }
       default: {
        $level585 = ((($0)) + 132|0);
        $384 = load4($level585);
        $func = (((1024 + (($384*12)|0)|0)) + 8|0);
        $385 = load4($func);
        $call587 = (FUNCTION_TABLE_iii[$385 & 3]($0,$flush)|0);
        $cond591 = $call587;
        label = 175;
       }
       }
      } while(0);
      if ((label|0) == 175) {
       $386 = $cond591 | 1;
       $387 = ($386|0)==(3);
       if ($387) {
        store4($status,666);
       }
       $388 = $cond591 | 2;
       $389 = ($388|0)==(2);
       if (!($389)) {
        $cmp613 = ($cond591|0)==(1);
        if (!($cmp613)) {
         break;
        }
        switch ($flush|0) {
        case 1:  {
         __tr_align($0);
         break;
        }
        case 5:  {
         break;
        }
        default: {
         __tr_stored_block($0,0,0,0);
         $cmp623 = ($flush|0)==(3);
         if ($cmp623) {
          $hash_size = ((($0)) + 76|0);
          $391 = load4($hash_size);
          $sub626 = (($391) + -1)|0;
          $head = ((($0)) + 68|0);
          $392 = load4($head);
          $arrayidx627 = (($392) + ($sub626<<1)|0);
          store2($arrayidx627,0);
          $sub630 = $391 << 1;
          $mul = (($sub630) + -2)|0;
          _memset(($392|0),0,($mul|0))|0;
          $lookahead631 = ((($0)) + 116|0);
          $393 = load4($lookahead631);
          $cmp632 = ($393|0)==(0);
          if ($cmp632) {
           $strstart635 = ((($0)) + 108|0);
           store4($strstart635,0);
           $block_start = ((($0)) + 92|0);
           store4($block_start,0);
          }
         }
        }
        }
        $394 = load4($state);
        $pending$i345 = ((($394)) + 20|0);
        $395 = load4($pending$i345);
        $396 = load4($avail_out);
        $cmp$i347 = ($395>>>0)>($396>>>0);
        $$$i348 = $cmp$i347 ? $396 : $395;
        $cmp2$i349 = ($$$i348|0)==(0);
        if ($cmp2$i349) {
         $406 = $396;
        } else {
         $397 = load4($next_out);
         $pending_out$i351 = ((($394)) + 16|0);
         $398 = load4($pending_out$i351);
         _memcpy(($397|0),($398|0),($$$i348|0))|0;
         $399 = load4($next_out);
         $add$ptr$i352 = (($399) + ($$$i348)|0);
         store4($next_out,$add$ptr$i352);
         $400 = load4($state);
         $pending_out8$i353 = ((($400)) + 16|0);
         $401 = load4($pending_out8$i353);
         $add$ptr9$i354 = (($401) + ($$$i348)|0);
         store4($pending_out8$i353,$add$ptr9$i354);
         $total_out$i355 = ((($strm)) + 20|0);
         $402 = load4($total_out$i355);
         $add$i356 = (($402) + ($$$i348))|0;
         store4($total_out$i355,$add$i356);
         $403 = load4($avail_out);
         $sub$i357 = (($403) - ($$$i348))|0;
         store4($avail_out,$sub$i357);
         $pending12$i358 = ((($400)) + 20|0);
         $404 = load4($pending12$i358);
         $sub13$i359 = (($404) - ($$$i348))|0;
         store4($pending12$i358,$sub13$i359);
         $cmp16$i360 = ($sub13$i359|0)==(0);
         if ($cmp16$i360) {
          $pending_buf$i362 = ((($400)) + 8|0);
          $405 = load4($pending_buf$i362);
          store4($pending_out8$i353,$405);
          $406 = $sub$i357;
         } else {
          $406 = $sub$i357;
         }
        }
        $cmp641 = ($406|0)==(0);
        if (!($cmp641)) {
         break;
        }
        store4($last_flush,-1);
        $retval$1 = 0;
        return ($retval$1|0);
       }
      }
      $390 = load4($avail_out);
      $cmp607 = ($390|0)==(0);
      if (!($cmp607)) {
       $retval$1 = 0;
       return ($retval$1|0);
      }
      store4($last_flush,-1);
      $retval$1 = 0;
      return ($retval$1|0);
     }
    } while(0);
    if ($cmp14) {
     $retval$1 = 0;
     return ($retval$1|0);
    }
    $wrap652 = ((($0)) + 24|0);
    $407 = load4($wrap652);
    $cmp653 = ($407|0)<(1);
    if ($cmp653) {
     $retval$1 = 1;
     return ($retval$1|0);
    }
    $cmp658 = ($407|0)==(2);
    $adler661 = ((($strm)) + 48|0);
    $408 = load4($adler661);
    if ($cmp658) {
     $conv663 = $408&255;
     $409 = load4($pending525);
     $inc665 = (($409) + 1)|0;
     store4($pending525,$inc665);
     $pending_buf666 = ((($0)) + 8|0);
     $410 = load4($pending_buf666);
     $arrayidx667 = (($410) + ($409)|0);
     store1($arrayidx667,$conv663);
     $411 = load4($adler661);
     $shr669 = $411 >>> 8;
     $conv671 = $shr669&255;
     $412 = load4($pending525);
     $inc673 = (($412) + 1)|0;
     store4($pending525,$inc673);
     $413 = load4($pending_buf666);
     $arrayidx675 = (($413) + ($412)|0);
     store1($arrayidx675,$conv671);
     $414 = load4($adler661);
     $shr677 = $414 >>> 16;
     $conv679 = $shr677&255;
     $415 = load4($pending525);
     $inc681 = (($415) + 1)|0;
     store4($pending525,$inc681);
     $416 = load4($pending_buf666);
     $arrayidx683 = (($416) + ($415)|0);
     store1($arrayidx683,$conv679);
     $417 = load4($adler661);
     $shr685 = $417 >>> 24;
     $conv687 = $shr685&255;
     $418 = load4($pending525);
     $inc689 = (($418) + 1)|0;
     store4($pending525,$inc689);
     $419 = load4($pending_buf666);
     $arrayidx691 = (($419) + ($418)|0);
     store1($arrayidx691,$conv687);
     $total_in = ((($strm)) + 8|0);
     $420 = load4($total_in);
     $conv693 = $420&255;
     $421 = load4($pending525);
     $inc695 = (($421) + 1)|0;
     store4($pending525,$inc695);
     $422 = load4($pending_buf666);
     $arrayidx697 = (($422) + ($421)|0);
     store1($arrayidx697,$conv693);
     $423 = load4($total_in);
     $shr699 = $423 >>> 8;
     $conv701 = $shr699&255;
     $424 = load4($pending525);
     $inc703 = (($424) + 1)|0;
     store4($pending525,$inc703);
     $425 = load4($pending_buf666);
     $arrayidx705 = (($425) + ($424)|0);
     store1($arrayidx705,$conv701);
     $426 = load4($total_in);
     $shr707 = $426 >>> 16;
     $conv709 = $shr707&255;
     $427 = load4($pending525);
     $inc711 = (($427) + 1)|0;
     store4($pending525,$inc711);
     $428 = load4($pending_buf666);
     $arrayidx713 = (($428) + ($427)|0);
     store1($arrayidx713,$conv709);
     $429 = load4($total_in);
     $shr715 = $429 >>> 24;
     $conv717 = $shr715&255;
     $430 = load4($pending525);
     $inc719 = (($430) + 1)|0;
     store4($pending525,$inc719);
     $431 = load4($pending_buf666);
     $arrayidx721 = (($431) + ($430)|0);
     store1($arrayidx721,$conv717);
    } else {
     $shr724 = $408 >>> 16;
     $shr$i335 = $408 >>> 24;
     $conv$i336 = $shr$i335&255;
     $432 = load4($pending525);
     $inc$i338 = (($432) + 1)|0;
     store4($pending525,$inc$i338);
     $pending_buf$i339 = ((($0)) + 8|0);
     $433 = load4($pending_buf$i339);
     $arrayidx$i340 = (($433) + ($432)|0);
     store1($arrayidx$i340,$conv$i336);
     $conv1$i341 = $shr724&255;
     $434 = load4($pending525);
     $inc3$i342 = (($434) + 1)|0;
     store4($pending525,$inc3$i342);
     $435 = load4($pending_buf$i339);
     $arrayidx5$i343 = (($435) + ($434)|0);
     store1($arrayidx5$i343,$conv1$i341);
     $436 = load4($adler661);
     $shr$i326 = $436 >>> 8;
     $conv$i327 = $shr$i326&255;
     $437 = load4($pending525);
     $inc$i329 = (($437) + 1)|0;
     store4($pending525,$inc$i329);
     $438 = load4($pending_buf$i339);
     $arrayidx$i331 = (($438) + ($437)|0);
     store1($arrayidx$i331,$conv$i327);
     $conv1$i332 = $436&255;
     $439 = load4($pending525);
     $inc3$i333 = (($439) + 1)|0;
     store4($pending525,$inc3$i333);
     $440 = load4($pending_buf$i339);
     $arrayidx5$i334 = (($440) + ($439)|0);
     store1($arrayidx5$i334,$conv1$i332);
    }
    $441 = load4($state);
    $pending$i324 = ((($441)) + 20|0);
    $442 = load4($pending$i324);
    $443 = load4($avail_out);
    $cmp$i = ($442>>>0)>($443>>>0);
    $$$i = $cmp$i ? $443 : $442;
    $cmp2$i = ($$$i|0)==(0);
    if (!($cmp2$i)) {
     $444 = load4($next_out);
     $pending_out$i = ((($441)) + 16|0);
     $445 = load4($pending_out$i);
     _memcpy(($444|0),($445|0),($$$i|0))|0;
     $446 = load4($next_out);
     $add$ptr$i = (($446) + ($$$i)|0);
     store4($next_out,$add$ptr$i);
     $447 = load4($state);
     $pending_out8$i = ((($447)) + 16|0);
     $448 = load4($pending_out8$i);
     $add$ptr9$i = (($448) + ($$$i)|0);
     store4($pending_out8$i,$add$ptr9$i);
     $total_out$i = ((($strm)) + 20|0);
     $449 = load4($total_out$i);
     $add$i = (($449) + ($$$i))|0;
     store4($total_out$i,$add$i);
     $450 = load4($avail_out);
     $sub$i = (($450) - ($$$i))|0;
     store4($avail_out,$sub$i);
     $pending12$i = ((($447)) + 20|0);
     $451 = load4($pending12$i);
     $sub13$i = (($451) - ($$$i))|0;
     store4($pending12$i,$sub13$i);
     $cmp16$i = ($sub13$i|0)==(0);
     if ($cmp16$i) {
      $pending_buf$i325 = ((($447)) + 8|0);
      $452 = load4($pending_buf$i325);
      store4($pending_out8$i,$452);
     }
    }
    $453 = load4($wrap652);
    $cmp729 = ($453|0)>(0);
    if ($cmp729) {
     $sub733 = (0 - ($453))|0;
     store4($wrap652,$sub733);
    }
    $454 = load4($pending525);
    $not$cmp737 = ($454|0)==(0);
    $cond739 = $not$cmp737&1;
    $retval$1 = $cond739;
    return ($retval$1|0);
   }
  }
 } while(0);
 $7 = load4((1768));
 $msg = ((($strm)) + 24|0);
 store4($msg,$7);
 $retval$1 = -2;
 return ($retval$1|0);
}
function __tr_init($s) {
 $s = $s|0;
 var $arraydecay = 0, $arraydecay2 = 0, $arraydecay6 = 0, $bi_buf = 0, $bi_valid = 0, $dyn_tree = 0, $dyn_tree3 = 0, $dyn_tree7 = 0, $last_eob_len = 0, $stat_desc = 0, $stat_desc5 = 0, $stat_desc9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $arraydecay = ((($s)) + 148|0);
 $dyn_tree = ((($s)) + 2840|0);
 store4($dyn_tree,$arraydecay);
 $stat_desc = ((($s)) + 2848|0);
 store4($stat_desc,1144);
 $arraydecay2 = ((($s)) + 2440|0);
 $dyn_tree3 = ((($s)) + 2852|0);
 store4($dyn_tree3,$arraydecay2);
 $stat_desc5 = ((($s)) + 2860|0);
 store4($stat_desc5,1164);
 $arraydecay6 = ((($s)) + 2684|0);
 $dyn_tree7 = ((($s)) + 2864|0);
 store4($dyn_tree7,$arraydecay6);
 $stat_desc9 = ((($s)) + 2872|0);
 store4($stat_desc9,1184);
 $bi_buf = ((($s)) + 5816|0);
 store2($bi_buf,0);
 $bi_valid = ((($s)) + 5820|0);
 store4($bi_valid,0);
 $last_eob_len = ((($s)) + 5812|0);
 store4($last_eob_len,8);
 _init_block($s);
 return;
}
function _init_block($s) {
 $s = $s|0;
 var $exitcond = 0, $freq = 0, $freq15 = 0, $freq15$1 = 0, $freq15$10 = 0, $freq15$11 = 0, $freq15$12 = 0, $freq15$13 = 0, $freq15$14 = 0, $freq15$15 = 0, $freq15$16 = 0, $freq15$17 = 0, $freq15$18 = 0, $freq15$2 = 0, $freq15$3 = 0, $freq15$4 = 0, $freq15$5 = 0, $freq15$6 = 0, $freq15$7 = 0, $freq15$8 = 0;
 var $freq15$9 = 0, $freq22 = 0, $freq6 = 0, $freq6$1 = 0, $freq6$10 = 0, $freq6$11 = 0, $freq6$12 = 0, $freq6$13 = 0, $freq6$14 = 0, $freq6$15 = 0, $freq6$16 = 0, $freq6$17 = 0, $freq6$18 = 0, $freq6$19 = 0, $freq6$2 = 0, $freq6$20 = 0, $freq6$21 = 0, $freq6$22 = 0, $freq6$23 = 0, $freq6$24 = 0;
 var $freq6$25 = 0, $freq6$26 = 0, $freq6$27 = 0, $freq6$28 = 0, $freq6$29 = 0, $freq6$3 = 0, $freq6$4 = 0, $freq6$5 = 0, $freq6$6 = 0, $freq6$7 = 0, $freq6$8 = 0, $freq6$9 = 0, $inc = 0, $last_lit = 0, $matches = 0, $n$019 = 0, $opt_len = 0, $static_len = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $n$019 = 0;
 while(1) {
  $freq = (((($s)) + 148|0) + ($n$019<<2)|0);
  store2($freq,0);
  $inc = (($n$019) + 1)|0;
  $exitcond = ($inc|0)==(286);
  if ($exitcond) {
   break;
  } else {
   $n$019 = $inc;
  }
 }
 $freq6 = ((($s)) + 2440|0);
 store2($freq6,0);
 $freq6$1 = ((($s)) + 2444|0);
 store2($freq6$1,0);
 $freq6$2 = ((($s)) + 2448|0);
 store2($freq6$2,0);
 $freq6$3 = ((($s)) + 2452|0);
 store2($freq6$3,0);
 $freq6$4 = ((($s)) + 2456|0);
 store2($freq6$4,0);
 $freq6$5 = ((($s)) + 2460|0);
 store2($freq6$5,0);
 $freq6$6 = ((($s)) + 2464|0);
 store2($freq6$6,0);
 $freq6$7 = ((($s)) + 2468|0);
 store2($freq6$7,0);
 $freq6$8 = ((($s)) + 2472|0);
 store2($freq6$8,0);
 $freq6$9 = ((($s)) + 2476|0);
 store2($freq6$9,0);
 $freq6$10 = ((($s)) + 2480|0);
 store2($freq6$10,0);
 $freq6$11 = ((($s)) + 2484|0);
 store2($freq6$11,0);
 $freq6$12 = ((($s)) + 2488|0);
 store2($freq6$12,0);
 $freq6$13 = ((($s)) + 2492|0);
 store2($freq6$13,0);
 $freq6$14 = ((($s)) + 2496|0);
 store2($freq6$14,0);
 $freq6$15 = ((($s)) + 2500|0);
 store2($freq6$15,0);
 $freq6$16 = ((($s)) + 2504|0);
 store2($freq6$16,0);
 $freq6$17 = ((($s)) + 2508|0);
 store2($freq6$17,0);
 $freq6$18 = ((($s)) + 2512|0);
 store2($freq6$18,0);
 $freq6$19 = ((($s)) + 2516|0);
 store2($freq6$19,0);
 $freq6$20 = ((($s)) + 2520|0);
 store2($freq6$20,0);
 $freq6$21 = ((($s)) + 2524|0);
 store2($freq6$21,0);
 $freq6$22 = ((($s)) + 2528|0);
 store2($freq6$22,0);
 $freq6$23 = ((($s)) + 2532|0);
 store2($freq6$23,0);
 $freq6$24 = ((($s)) + 2536|0);
 store2($freq6$24,0);
 $freq6$25 = ((($s)) + 2540|0);
 store2($freq6$25,0);
 $freq6$26 = ((($s)) + 2544|0);
 store2($freq6$26,0);
 $freq6$27 = ((($s)) + 2548|0);
 store2($freq6$27,0);
 $freq6$28 = ((($s)) + 2552|0);
 store2($freq6$28,0);
 $freq6$29 = ((($s)) + 2556|0);
 store2($freq6$29,0);
 $freq15 = ((($s)) + 2684|0);
 store2($freq15,0);
 $freq15$1 = ((($s)) + 2688|0);
 store2($freq15$1,0);
 $freq15$2 = ((($s)) + 2692|0);
 store2($freq15$2,0);
 $freq15$3 = ((($s)) + 2696|0);
 store2($freq15$3,0);
 $freq15$4 = ((($s)) + 2700|0);
 store2($freq15$4,0);
 $freq15$5 = ((($s)) + 2704|0);
 store2($freq15$5,0);
 $freq15$6 = ((($s)) + 2708|0);
 store2($freq15$6,0);
 $freq15$7 = ((($s)) + 2712|0);
 store2($freq15$7,0);
 $freq15$8 = ((($s)) + 2716|0);
 store2($freq15$8,0);
 $freq15$9 = ((($s)) + 2720|0);
 store2($freq15$9,0);
 $freq15$10 = ((($s)) + 2724|0);
 store2($freq15$10,0);
 $freq15$11 = ((($s)) + 2728|0);
 store2($freq15$11,0);
 $freq15$12 = ((($s)) + 2732|0);
 store2($freq15$12,0);
 $freq15$13 = ((($s)) + 2736|0);
 store2($freq15$13,0);
 $freq15$14 = ((($s)) + 2740|0);
 store2($freq15$14,0);
 $freq15$15 = ((($s)) + 2744|0);
 store2($freq15$15,0);
 $freq15$16 = ((($s)) + 2748|0);
 store2($freq15$16,0);
 $freq15$17 = ((($s)) + 2752|0);
 store2($freq15$17,0);
 $freq15$18 = ((($s)) + 2756|0);
 store2($freq15$18,0);
 $freq22 = ((($s)) + 1172|0);
 store2($freq22,1);
 $static_len = ((($s)) + 5804|0);
 store4($static_len,0);
 $opt_len = ((($s)) + 5800|0);
 store4($opt_len,0);
 $matches = ((($s)) + 5808|0);
 store4($matches,0);
 $last_lit = ((($s)) + 5792|0);
 store4($last_lit,0);
 return;
}
function __tr_stored_block($s,$buf,$stored_len,$last) {
 $s = $s|0;
 $buf = $buf|0;
 $stored_len = $stored_len|0;
 $last = $last|0;
 var $$off0 = 0, $$off0$in = 0, $$pre6$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add24 = 0, $add35 = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx14 = 0, $arrayidx17$i = 0, $arrayidx18$i$i = 0, $arrayidx26$i = 0, $arrayidx31$i = 0, $arrayidx8$i$i = 0;
 var $arrayidx9$i = 0, $bi_buf = 0, $bi_valid = 0, $buf$addr$05$i = 0, $cmp = 0, $cmp$i$i = 0, $cmp10$i$i = 0, $conv1 = 0, $conv1$i = 0, $conv10 = 0, $conv11$i = 0, $conv13$i = 0, $conv2$i = 0, $conv20 = 0, $conv22$i = 0, $conv3 = 0, $conv4 = 0, $conv4$i$i = 0, $conv5$i = 0, $conv7 = 0;
 var $dec$i = 0, $inc = 0, $inc$i = 0, $inc$i$i = 0, $inc12 = 0, $inc15$i = 0, $inc16$i$i = 0, $inc24$i = 0, $inc29$i = 0, $inc6$i$i = 0, $inc7$i = 0, $incdec$ptr$i = 0, $last_eob_len$i = 0, $len$addr$04$i = 0, $neg$i = 0, $or = 0, $pending = 0, $pending$i$i = 0, $pending$pre$phi$iZ2D = 0, $pending15$i$i = 0;
 var $pending_buf = 0, $pending_buf$i$i = 0, $pending_buf$pre$phi$iZ2D = 0, $pending_buf17$i$i = 0, $shl = 0, $shr12$i$i = 0, $shr19 = 0, $shr212$i = 0, $shr22 = 0, $storemerge = 0, $sub18 = 0, $tobool27$i = 0, $tobool273$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $bi_valid = ((($s)) + 5820|0);
 $0 = load4($bi_valid);
 $cmp = ($0|0)>(13);
 $conv1 = $last & 65535;
 $shl = $conv1 << $0;
 $bi_buf = ((($s)) + 5816|0);
 $1 = load2($bi_buf);
 $conv3 = $1&65535;
 $or = $conv3 | $shl;
 $conv4 = $or&65535;
 store2($bi_buf,$conv4);
 if ($cmp) {
  $conv7 = $or&255;
  $pending = ((($s)) + 20|0);
  $2 = load4($pending);
  $inc = (($2) + 1)|0;
  store4($pending,$inc);
  $pending_buf = ((($s)) + 8|0);
  $3 = load4($pending_buf);
  $arrayidx = (($3) + ($2)|0);
  store1($arrayidx,$conv7);
  $4 = load2($bi_buf);
  $shr22 = ($4&65535) >>> 8;
  $conv10 = $shr22&255;
  $5 = load4($pending);
  $inc12 = (($5) + 1)|0;
  store4($pending,$inc12);
  $6 = load4($pending_buf);
  $arrayidx14 = (($6) + ($5)|0);
  store1($arrayidx14,$conv10);
  $7 = load4($bi_valid);
  $sub18 = (16 - ($7))|0;
  $shr19 = $conv1 >>> $sub18;
  $conv20 = $shr19&65535;
  store2($bi_buf,$conv20);
  $add24 = (($7) + -13)|0;
  $$off0$in = $shr19;$storemerge = $add24;
 } else {
  $add35 = (($0) + 3)|0;
  $$off0$in = $or;$storemerge = $add35;
 }
 $$off0 = $$off0$in&255;
 store4($bi_valid,$storemerge);
 $cmp$i$i = ($storemerge|0)>(8);
 do {
  if ($cmp$i$i) {
   $pending$i$i = ((($s)) + 20|0);
   $8 = load4($pending$i$i);
   $inc$i$i = (($8) + 1)|0;
   store4($pending$i$i,$inc$i$i);
   $pending_buf$i$i = ((($s)) + 8|0);
   $9 = load4($pending_buf$i$i);
   $arrayidx$i$i = (($9) + ($8)|0);
   store1($arrayidx$i$i,$$off0);
   $10 = load2($bi_buf);
   $shr12$i$i = ($10&65535) >>> 8;
   $conv4$i$i = $shr12$i$i&255;
   $11 = load4($pending$i$i);
   $inc6$i$i = (($11) + 1)|0;
   store4($pending$i$i,$inc6$i$i);
   $12 = load4($pending_buf$i$i);
   $arrayidx8$i$i = (($12) + ($11)|0);
   store1($arrayidx8$i$i,$conv4$i$i);
   $pending$pre$phi$iZ2D = $pending$i$i;$pending_buf$pre$phi$iZ2D = $pending_buf$i$i;
  } else {
   $cmp10$i$i = ($storemerge|0)>(0);
   $pending15$i$i = ((($s)) + 20|0);
   if ($cmp10$i$i) {
    $13 = load4($pending15$i$i);
    $inc16$i$i = (($13) + 1)|0;
    store4($pending15$i$i,$inc16$i$i);
    $pending_buf17$i$i = ((($s)) + 8|0);
    $14 = load4($pending_buf17$i$i);
    $arrayidx18$i$i = (($14) + ($13)|0);
    store1($arrayidx18$i$i,$$off0);
    $pending$pre$phi$iZ2D = $pending15$i$i;$pending_buf$pre$phi$iZ2D = $pending_buf17$i$i;
    break;
   } else {
    $$pre6$i = ((($s)) + 8|0);
    $pending$pre$phi$iZ2D = $pending15$i$i;$pending_buf$pre$phi$iZ2D = $$pre6$i;
    break;
   }
  }
 } while(0);
 store2($bi_buf,0);
 store4($bi_valid,0);
 $last_eob_len$i = ((($s)) + 5812|0);
 store4($last_eob_len$i,8);
 $conv2$i = $stored_len&255;
 $15 = load4($pending$pre$phi$iZ2D);
 $inc$i = (($15) + 1)|0;
 store4($pending$pre$phi$iZ2D,$inc$i);
 $16 = load4($pending_buf$pre$phi$iZ2D);
 $arrayidx$i = (($16) + ($15)|0);
 store1($arrayidx$i,$conv2$i);
 $conv1$i = $stored_len >>> 8;
 $conv5$i = $conv1$i&255;
 $17 = load4($pending$pre$phi$iZ2D);
 $inc7$i = (($17) + 1)|0;
 store4($pending$pre$phi$iZ2D,$inc7$i);
 $18 = load4($pending_buf$pre$phi$iZ2D);
 $arrayidx9$i = (($18) + ($17)|0);
 store1($arrayidx9$i,$conv5$i);
 $neg$i = $stored_len & 65535;
 $conv11$i = $neg$i ^ 65535;
 $conv13$i = $conv11$i&255;
 $19 = load4($pending$pre$phi$iZ2D);
 $inc15$i = (($19) + 1)|0;
 store4($pending$pre$phi$iZ2D,$inc15$i);
 $20 = load4($pending_buf$pre$phi$iZ2D);
 $arrayidx17$i = (($20) + ($19)|0);
 store1($arrayidx17$i,$conv13$i);
 $shr212$i = $conv11$i >>> 8;
 $conv22$i = $shr212$i&255;
 $21 = load4($pending$pre$phi$iZ2D);
 $inc24$i = (($21) + 1)|0;
 store4($pending$pre$phi$iZ2D,$inc24$i);
 $22 = load4($pending_buf$pre$phi$iZ2D);
 $arrayidx26$i = (($22) + ($21)|0);
 store1($arrayidx26$i,$conv22$i);
 $tobool273$i = ($stored_len|0)==(0);
 if ($tobool273$i) {
  return;
 } else {
  $buf$addr$05$i = $buf;$len$addr$04$i = $stored_len;
 }
 while(1) {
  $dec$i = (($len$addr$04$i) + -1)|0;
  $incdec$ptr$i = ((($buf$addr$05$i)) + 1|0);
  $23 = load1($buf$addr$05$i);
  $24 = load4($pending$pre$phi$iZ2D);
  $inc29$i = (($24) + 1)|0;
  store4($pending$pre$phi$iZ2D,$inc29$i);
  $25 = load4($pending_buf$pre$phi$iZ2D);
  $arrayidx31$i = (($25) + ($24)|0);
  store1($arrayidx31$i,$23);
  $tobool27$i = ($dec$i|0)==(0);
  if ($tobool27$i) {
   break;
  } else {
   $buf$addr$05$i = $incdec$ptr$i;$len$addr$04$i = $dec$i;
  }
 }
 return;
}
function __tr_align($s) {
 $s = $s|0;
 var $$off0 = 0, $$off0$in = 0, $$off0118 = 0, $$pr = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add133 = 0, $add142 = 0, $add186 = 0, $add196 = 0, $add31 = 0, $add74 = 0;
 var $add84 = 0, $add87 = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i99 = 0, $arrayidx115 = 0, $arrayidx123 = 0, $arrayidx14 = 0, $arrayidx168 = 0, $arrayidx176 = 0, $arrayidx20$i = 0, $arrayidx20$i112 = 0, $arrayidx56 = 0, $arrayidx64 = 0, $arrayidx8$i = 0, $arrayidx8$i103 = 0, $bi_buf = 0, $bi_valid = 0, $cmp = 0, $cmp$i = 0;
 var $cmp$i93 = 0, $cmp12$i = 0, $cmp12$i105 = 0, $cmp148 = 0, $cmp36 = 0, $cmp90 = 0, $cmp96 = 0, $conv1$i = 0, $conv10 = 0, $conv105 = 0, $conv107 = 0, $conv111 = 0, $conv119 = 0, $conv129 = 0, $conv16$i = 0, $conv172 = 0, $conv20 = 0, $conv3 = 0, $conv4 = 0, $conv4$i = 0;
 var $conv4$i101 = 0, $conv52 = 0, $conv60 = 0, $conv7 = 0, $inc = 0, $inc$i = 0, $inc$i97 = 0, $inc113 = 0, $inc12 = 0, $inc121 = 0, $inc166 = 0, $inc174 = 0, $inc18$i = 0, $inc18$i110 = 0, $inc54 = 0, $inc6$i = 0, $inc6$i102 = 0, $inc62 = 0, $last_eob_len = 0, $or = 0;
 var $or106 = 0, $pending = 0, $pending$i = 0, $pending$i96 = 0, $pending112 = 0, $pending165 = 0, $pending17$i = 0, $pending17$i109 = 0, $pending53 = 0, $pending_buf = 0, $pending_buf$i = 0, $pending_buf$i98 = 0, $pending_buf114 = 0, $pending_buf167 = 0, $pending_buf19$i = 0, $pending_buf19$i111 = 0, $pending_buf55 = 0, $shl = 0, $shl103 = 0, $shr11889 = 0;
 var $shr128 = 0, $shr15$i = 0, $shr15$i100 = 0, $shr17188 = 0, $shr19 = 0, $shr2314$i = 0, $shr2314$i113 = 0, $shr5990 = 0, $shr91 = 0, $storemerge = 0, $storemerge86 = 0, $storemerge87 = 0, $sub$i = 0, $sub$i114 = 0, $sub127 = 0, $sub18 = 0, $sub89 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $bi_valid = ((($s)) + 5820|0);
 $0 = load4($bi_valid);
 $cmp = ($0|0)>(13);
 $shl = 2 << $0;
 $bi_buf = ((($s)) + 5816|0);
 $1 = load2($bi_buf);
 $conv3 = $1&65535;
 $or = $conv3 | $shl;
 $conv4 = $or&65535;
 store2($bi_buf,$conv4);
 if ($cmp) {
  $conv7 = $or&255;
  $pending = ((($s)) + 20|0);
  $2 = load4($pending);
  $inc = (($2) + 1)|0;
  store4($pending,$inc);
  $pending_buf = ((($s)) + 8|0);
  $3 = load4($pending_buf);
  $arrayidx = (($3) + ($2)|0);
  store1($arrayidx,$conv7);
  $4 = load2($bi_buf);
  $shr91 = ($4&65535) >>> 8;
  $conv10 = $shr91&255;
  $5 = load4($pending);
  $inc12 = (($5) + 1)|0;
  store4($pending,$inc12);
  $6 = load4($pending_buf);
  $arrayidx14 = (($6) + ($5)|0);
  store1($arrayidx14,$conv10);
  $7 = load4($bi_valid);
  $sub18 = (16 - ($7))|0;
  $shr19 = 2 >>> $sub18;
  $conv20 = $shr19&65535;
  store2($bi_buf,$conv20);
  $add = (($7) + -13)|0;
  $8 = $conv20;$storemerge = $add;
 } else {
  $add31 = (($0) + 3)|0;
  $8 = $conv4;$storemerge = $add31;
 }
 store4($bi_valid,$storemerge);
 $cmp36 = ($storemerge|0)>(9);
 if ($cmp36) {
  $conv52 = $8&255;
  $pending53 = ((($s)) + 20|0);
  $9 = load4($pending53);
  $inc54 = (($9) + 1)|0;
  store4($pending53,$inc54);
  $pending_buf55 = ((($s)) + 8|0);
  $10 = load4($pending_buf55);
  $arrayidx56 = (($10) + ($9)|0);
  store1($arrayidx56,$conv52);
  $11 = load2($bi_buf);
  $shr5990 = ($11&65535) >>> 8;
  $conv60 = $shr5990&255;
  $12 = load4($pending53);
  $inc62 = (($12) + 1)|0;
  store4($pending53,$inc62);
  $13 = load4($pending_buf55);
  $arrayidx64 = (($13) + ($12)|0);
  store1($arrayidx64,$conv60);
  store2($bi_buf,0);
  $14 = load4($bi_valid);
  $add74 = (($14) + -9)|0;
  $$pr = $add74;$15 = 0;
 } else {
  $add84 = (($storemerge) + 7)|0;
  $$pr = $add84;$15 = $8;
 }
 store4($bi_valid,$$pr);
 $cmp$i = ($$pr|0)==(16);
 if ($cmp$i) {
  $conv1$i = $15&255;
  $pending$i = ((($s)) + 20|0);
  $16 = load4($pending$i);
  $inc$i = (($16) + 1)|0;
  store4($pending$i,$inc$i);
  $pending_buf$i = ((($s)) + 8|0);
  $17 = load4($pending_buf$i);
  $arrayidx$i = (($17) + ($16)|0);
  store1($arrayidx$i,$conv1$i);
  $18 = load2($bi_buf);
  $shr15$i = ($18&65535) >>> 8;
  $conv4$i = $shr15$i&255;
  $19 = load4($pending$i);
  $inc6$i = (($19) + 1)|0;
  store4($pending$i,$inc6$i);
  $20 = load4($pending_buf$i);
  $arrayidx8$i = (($20) + ($19)|0);
  store1($arrayidx8$i,$conv4$i);
  store2($bi_buf,0);
  store4($bi_valid,0);
  $26 = 0;$27 = 0;
 } else {
  $cmp12$i = ($$pr|0)>(7);
  if ($cmp12$i) {
   $conv16$i = $15&255;
   $pending17$i = ((($s)) + 20|0);
   $21 = load4($pending17$i);
   $inc18$i = (($21) + 1)|0;
   store4($pending17$i,$inc18$i);
   $pending_buf19$i = ((($s)) + 8|0);
   $22 = load4($pending_buf19$i);
   $arrayidx20$i = (($22) + ($21)|0);
   store1($arrayidx20$i,$conv16$i);
   $23 = load2($bi_buf);
   $shr2314$i = ($23&65535) >>> 8;
   store2($bi_buf,$shr2314$i);
   $24 = load4($bi_valid);
   $sub$i = (($24) + -8)|0;
   store4($bi_valid,$sub$i);
   $26 = $sub$i;$27 = $shr2314$i;
  } else {
   $26 = $$pr;$27 = $15;
  }
 }
 $last_eob_len = ((($s)) + 5812|0);
 $25 = load4($last_eob_len);
 $add87 = (11 - ($26))|0;
 $sub89 = (($add87) + ($25))|0;
 $cmp90 = ($sub89|0)<(9);
 if (!($cmp90)) {
  store4($last_eob_len,7);
  return;
 }
 $cmp96 = ($26|0)>(13);
 $shl103 = 2 << $26;
 $conv105 = $27&65535;
 $or106 = $conv105 | $shl103;
 $conv107 = $or106&65535;
 store2($bi_buf,$conv107);
 if ($cmp96) {
  $conv111 = $or106&255;
  $pending112 = ((($s)) + 20|0);
  $28 = load4($pending112);
  $inc113 = (($28) + 1)|0;
  store4($pending112,$inc113);
  $pending_buf114 = ((($s)) + 8|0);
  $29 = load4($pending_buf114);
  $arrayidx115 = (($29) + ($28)|0);
  store1($arrayidx115,$conv111);
  $30 = load2($bi_buf);
  $shr11889 = ($30&65535) >>> 8;
  $conv119 = $shr11889&255;
  $31 = load4($pending112);
  $inc121 = (($31) + 1)|0;
  store4($pending112,$inc121);
  $32 = load4($pending_buf114);
  $arrayidx123 = (($32) + ($31)|0);
  store1($arrayidx123,$conv119);
  $33 = load4($bi_valid);
  $sub127 = (16 - ($33))|0;
  $shr128 = 2 >>> $sub127;
  $conv129 = $shr128&65535;
  store2($bi_buf,$conv129);
  $add133 = (($33) + -13)|0;
  $$off0$in = $shr128;$storemerge86 = $add133;
 } else {
  $add142 = (($26) + 3)|0;
  $$off0$in = $or106;$storemerge86 = $add142;
 }
 $$off0 = $$off0$in&255;
 store4($bi_valid,$storemerge86);
 $cmp148 = ($storemerge86|0)>(9);
 if ($cmp148) {
  $pending165 = ((($s)) + 20|0);
  $34 = load4($pending165);
  $inc166 = (($34) + 1)|0;
  store4($pending165,$inc166);
  $pending_buf167 = ((($s)) + 8|0);
  $35 = load4($pending_buf167);
  $arrayidx168 = (($35) + ($34)|0);
  store1($arrayidx168,$$off0);
  $36 = load2($bi_buf);
  $shr17188 = ($36&65535) >>> 8;
  $conv172 = $shr17188&255;
  $37 = load4($pending165);
  $inc174 = (($37) + 1)|0;
  store4($pending165,$inc174);
  $38 = load4($pending_buf167);
  $arrayidx176 = (($38) + ($37)|0);
  store1($arrayidx176,$conv172);
  store2($bi_buf,0);
  $39 = load4($bi_valid);
  $add186 = (($39) + -9)|0;
  $$off0118 = 0;$storemerge87 = $add186;
 } else {
  $add196 = (($storemerge86) + 7)|0;
  $$off0118 = $$off0;$storemerge87 = $add196;
 }
 store4($bi_valid,$storemerge87);
 $cmp$i93 = ($storemerge87|0)==(16);
 if ($cmp$i93) {
  $pending$i96 = ((($s)) + 20|0);
  $40 = load4($pending$i96);
  $inc$i97 = (($40) + 1)|0;
  store4($pending$i96,$inc$i97);
  $pending_buf$i98 = ((($s)) + 8|0);
  $41 = load4($pending_buf$i98);
  $arrayidx$i99 = (($41) + ($40)|0);
  store1($arrayidx$i99,$$off0118);
  $42 = load2($bi_buf);
  $shr15$i100 = ($42&65535) >>> 8;
  $conv4$i101 = $shr15$i100&255;
  $43 = load4($pending$i96);
  $inc6$i102 = (($43) + 1)|0;
  store4($pending$i96,$inc6$i102);
  $44 = load4($pending_buf$i98);
  $arrayidx8$i103 = (($44) + ($43)|0);
  store1($arrayidx8$i103,$conv4$i101);
  store2($bi_buf,0);
  store4($bi_valid,0);
  store4($last_eob_len,7);
  return;
 }
 $cmp12$i105 = ($storemerge87|0)>(7);
 if (!($cmp12$i105)) {
  store4($last_eob_len,7);
  return;
 }
 $pending17$i109 = ((($s)) + 20|0);
 $45 = load4($pending17$i109);
 $inc18$i110 = (($45) + 1)|0;
 store4($pending17$i109,$inc18$i110);
 $pending_buf19$i111 = ((($s)) + 8|0);
 $46 = load4($pending_buf19$i111);
 $arrayidx20$i112 = (($46) + ($45)|0);
 store1($arrayidx20$i112,$$off0118);
 $47 = load2($bi_buf);
 $shr2314$i113 = ($47&65535) >>> 8;
 store2($bi_buf,$shr2314$i113);
 $48 = load4($bi_valid);
 $sub$i114 = (($48) + -8)|0;
 store4($bi_valid,$sub$i114);
 store4($last_eob_len,7);
 return;
}
function __tr_flush_block($s,$buf,$stored_len,$last) {
 $s = $s|0;
 $buf = $buf|0;
 $stored_len = $stored_len|0;
 $last = $last|0;
 var $$$30$i$i = 0, $$$30$i67$i = 0, $$$31$i$i = 0, $$$31$i68$i = 0, $$$i = 0, $$$i$i = 0, $$$i18$i = 0, $$29$i$i = 0, $$29$i19$i = 0, $$30$i$i = 0, $$30$i66$i = 0, $$pre = 0, $$pre100 = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0;
 var $104 = 0, $105 = 0, $106 = 0, $107 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $add$i = 0, $add$i$i = 0, $add$i20$i = 0, $add106 = 0, $add118 = 0, $add13 = 0, $add132$i = 0, $add144$i = 0, $add15 = 0, $add192$i = 0, $add208$i = 0, $add22$i$i = 0, $add22$i47$i = 0, $add25 = 0, $add35$i = 0, $add50 = 0, $add6 = 0, $add62 = 0, $add7$i$i = 0;
 var $add7$i35$i = 0, $add72 = 0, $add77$i = 0, $add8 = 0, $add8$i = 0, $add89$i = 0, $add9$i = 0, $and$i = 0, $arraydecay$i = 0, $arraydecay212$i = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i91 = 0, $arrayidx114$i = 0, $arrayidx122$i = 0, $arrayidx15$i = 0, $arrayidx155$i = 0, $arrayidx174$i = 0, $arrayidx18$i = 0, $arrayidx182$i = 0;
 var $arrayidx40 = 0, $arrayidx59$i = 0, $arrayidx67$i = 0, $arrayidx8$i = 0, $arrayidx88 = 0, $arrayidx96 = 0, $bi_buf = 0, $bi_buf$i = 0, $bi_buf13$i = 0, $bi_buf20$pre$phi$iZ2D = 0, $bi_buf77 = 0, $bi_valid = 0, $bi_valid$i = 0, $bl_desc$i = 0, $black_mask$015$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i17$i = 0, $cmp$i80 = 0;
 var $cmp$i85 = 0, $cmp1 = 0, $cmp1$i = 0, $cmp10 = 0, $cmp10$i = 0, $cmp12$i$i = 0, $cmp12$i39$i = 0, $cmp14$i$i = 0, $cmp14$i40$i = 0, $cmp15$i = 0, $cmp151$i = 0, $cmp16 = 0, $cmp17 = 0, $cmp17$i$i = 0, $cmp17$i43$i = 0, $cmp20 = 0, $cmp21 = 0, $cmp23 = 0, $cmp23$i = 0, $cmp25$i$i = 0;
 var $cmp25$i50$i = 0, $cmp28$i = 0, $cmp28$i$i = 0, $cmp28$i52$i = 0, $cmp36$i = 0, $cmp39$i = 0, $cmp4$1$i = 0, $cmp4$10$i = 0, $cmp4$11$i = 0, $cmp4$12$i = 0, $cmp4$13$i = 0, $cmp4$14$i = 0, $cmp4$15$i = 0, $cmp4$2$i = 0, $cmp4$3$i = 0, $cmp4$4$i = 0, $cmp4$5$i = 0, $cmp4$6$i = 0, $cmp4$7$i = 0, $cmp4$8$i = 0;
 var $cmp4$9$i = 0, $cmp4$i = 0, $cmp43$i$i = 0, $cmp43$i59$i = 0, $cmp5$i$i = 0, $cmp5$i33$i = 0, $cmp61$i$i = 0, $cmp61$i65$i = 0, $cmp8$i = 0, $cmp94$i = 0, $conv$i$i = 0, $conv$i16$i = 0, $conv1$i = 0, $conv100$i = 0, $conv102 = 0, $conv104$i = 0, $conv106$i = 0, $conv11$i = 0, $conv11$i$i = 0, $conv11$i37$i = 0;
 var $conv110$i = 0, $conv118$i = 0, $conv128$i = 0, $conv14$i = 0, $conv160$i = 0, $conv164$i = 0, $conv166$i = 0, $conv170$i = 0, $conv178$i = 0, $conv188$i = 0, $conv2$i = 0, $conv21$i = 0, $conv21$i$i = 0, $conv21$i46$i = 0, $conv23$i$i = 0, $conv23$i48$i = 0, $conv26 = 0, $conv28 = 0, $conv29 = 0, $conv32 = 0;
 var $conv36 = 0, $conv4$i = 0, $conv4$i87 = 0, $conv45$i = 0, $conv46 = 0, $conv49$i = 0, $conv5$i = 0, $conv51$i = 0, $conv55$i = 0, $conv63$i = 0, $conv73$i = 0, $conv74 = 0, $conv78 = 0, $conv8$i = 0, $conv80 = 0, $conv84 = 0, $conv92 = 0, $count$0$i$i = 0, $count$0$i32$i = 0, $d_desc = 0;
 var $data_type = 0, $exitcond$i = 0, $freq$i = 0, $freq$i$i = 0, $freq$i45$i = 0, $freq13$i = 0, $freq21$i = 0, $freq34$i = 0, $freq34$i$i = 0, $freq34$i53$i = 0, $freq40$i$i = 0, $freq49$i$i = 0, $freq55$i$i = 0, $freq6$i = 0, $idxprom$i = 0, $inc = 0, $inc$i = 0, $inc$i$i = 0, $inc$i38$i = 0, $inc$i81 = 0;
 var $inc$i89 = 0, $inc112$i = 0, $inc120$i = 0, $inc13$i = 0, $inc16$i = 0, $inc172$i = 0, $inc180$i = 0, $inc210$i = 0, $inc35$i$i = 0, $inc35$i55$i = 0, $inc38 = 0, $inc41$i = 0, $inc41$i$i = 0, $inc41$i57$i = 0, $inc50$i$i = 0, $inc50$i61$i = 0, $inc56$i$i = 0, $inc56$i63$i = 0, $inc57$i = 0, $inc6$i = 0;
 var $inc65$i = 0, $inc86 = 0, $inc94 = 0, $l_desc = 0, $len$1$i = 0, $len$10$i = 0, $len$11$i = 0, $len$12$i = 0, $len$13$i = 0, $len$14$i = 0, $len$15$i = 0, $len$2$i = 0, $len$3$i = 0, $len$4$i = 0, $len$5$i = 0, $len$6$i = 0, $len$7$i = 0, $len$8$i = 0, $len$9$i = 0, $len$i = 0;
 var $len$i$i = 0, $len$i15$i = 0, $len10$i$i = 0, $len10$i36$i = 0, $len157$i = 0, $len4$i$i = 0, $len4$i21$i = 0, $level = 0, $max_blindex$0 = 0, $max_blindex$0$lcssa$i = 0, $max_code = 0, $max_code$i = 0, $max_code123 = 0, $max_code2$i = 0, $max_count$1$ph$i$i = 0, $max_count$1$ph$i28$i = 0, $min_count$1$ph$i$i = 0, $min_count$1$ph$i29$i = 0, $n$0$i$i = 0, $n$0$i31$i = 0;
 var $n$0$ph$i$i = 0, $n$0$ph$i26$i = 0, $n$016$i = 0, $n$114$i = 0, $nextlen$0$ph$i$i = 0, $nextlen$0$ph$i27$i = 0, $opt_len$i = 0, $opt_lenb$0 = 0, $or = 0, $or$cond = 0, $or$cond$i$i = 0, $or$cond$i41$i = 0, $or$cond79 = 0, $or$i = 0, $or105$i = 0, $or165$i = 0, $or50$i = 0, $or79 = 0, $pending = 0, $pending$i = 0;
 var $pending$i88 = 0, $pending111$i = 0, $pending15$i = 0, $pending171$i$pre$phiZZ2D = 0, $pending56$i = 0, $pending85 = 0, $pending_buf = 0, $pending_buf$i = 0, $pending_buf$i90 = 0, $pending_buf113$i = 0, $pending_buf17$i = 0, $pending_buf173$i$pre$phiZZ2D = 0, $pending_buf58$i = 0, $pending_buf87 = 0, $prevlen$0$ph$i$i = 0, $prevlen$0$ph$i$i$phi = 0, $prevlen$0$ph$i25$i = 0, $prevlen$0$ph$i25$i$phi = 0, $rank$0104$i = 0, $retval$0$i = 0;
 var $shl = 0, $shl$i = 0, $shl102$i = 0, $shl162$i = 0, $shl47$i = 0, $shl76 = 0, $shr = 0, $shr$i = 0, $shr$shr9 = 0, $shr101 = 0, $shr102$i = 0, $shr117100$i = 0, $shr12$i = 0, $shr127$i = 0, $shr17799$i = 0, $shr187$i = 0, $shr20$i = 0, $shr3578 = 0, $shr45 = 0, $shr62101$i = 0;
 var $shr72$i = 0, $shr9 = 0, $shr9176 = 0, $static_len = 0, $static_lenb$0 = 0, $storemerge = 0, $storemerge77 = 0, $storemerge97$i = 0, $storemerge98$i = 0, $strategy = 0, $sub1$i = 0, $sub100 = 0, $sub126$i = 0, $sub186$i = 0, $sub19$i = 0, $sub44 = 0, $sub71$i = 0, $sub98$i = 0, $tobool = 0, $tobool$i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $level = ((($s)) + 132|0);
 $0 = load4($level);
 $cmp = ($0|0)>(0);
 if ($cmp) {
  $1 = load4($s);
  $data_type = ((($1)) + 44|0);
  $2 = load4($data_type);
  $cmp1 = ($2|0)==(2);
  if ($cmp1) {
   $black_mask$015$i = -201342849;$n$016$i = 0;
   while(1) {
    $and$i = $black_mask$015$i & 1;
    $tobool$i = ($and$i|0)==(0);
    if (!($tobool$i)) {
     $freq$i = (((($s)) + 148|0) + ($n$016$i<<2)|0);
     $3 = load2($freq$i);
     $cmp1$i = ($3<<16>>16)==(0);
     if (!($cmp1$i)) {
      $retval$0$i = 0;
      break;
     }
    }
    $inc$i = (($n$016$i) + 1)|0;
    $shr$i = $black_mask$015$i >>> 1;
    $cmp$i = ($inc$i|0)<(32);
    if ($cmp$i) {
     $black_mask$015$i = $shr$i;$n$016$i = $inc$i;
    } else {
     label = 6;
     break;
    }
   }
   L9: do {
    if ((label|0) == 6) {
     $freq6$i = ((($s)) + 184|0);
     $4 = load2($freq6$i);
     $cmp8$i = ($4<<16>>16)==(0);
     if ($cmp8$i) {
      $freq13$i = ((($s)) + 188|0);
      $5 = load2($freq13$i);
      $cmp15$i = ($5<<16>>16)==(0);
      if ($cmp15$i) {
       $freq21$i = ((($s)) + 200|0);
       $6 = load2($freq21$i);
       $cmp23$i = ($6<<16>>16)==(0);
       if ($cmp23$i) {
        $n$114$i = 32;
        while(1) {
         $freq34$i = (((($s)) + 148|0) + ($n$114$i<<2)|0);
         $7 = load2($freq34$i);
         $cmp36$i = ($7<<16>>16)==(0);
         $inc41$i = (($n$114$i) + 1)|0;
         if (!($cmp36$i)) {
          $retval$0$i = 1;
          break L9;
         }
         $cmp28$i = ($inc41$i|0)<(256);
         if ($cmp28$i) {
          $n$114$i = $inc41$i;
         } else {
          $retval$0$i = 0;
          break;
         }
        }
       } else {
        $retval$0$i = 1;
       }
      } else {
       $retval$0$i = 1;
      }
     } else {
      $retval$0$i = 1;
     }
    }
   } while(0);
   store4($data_type,$retval$0$i);
  }
  $l_desc = ((($s)) + 2840|0);
  _build_tree($s,$l_desc);
  $d_desc = ((($s)) + 2852|0);
  _build_tree($s,$d_desc);
  $max_code$i = ((($s)) + 2844|0);
  $8 = load4($max_code$i);
  $len$i$i = ((($s)) + 150|0);
  $9 = load2($len$i$i);
  $conv$i$i = $9&65535;
  $cmp$i$i = ($9<<16>>16)==(0);
  $$$i$i = $cmp$i$i ? 138 : 7;
  $$29$i$i = $cmp$i$i ? 3 : 4;
  $add$i$i = (($8) + 1)|0;
  $len4$i$i = (((((($s)) + 148|0) + ($add$i$i<<2)|0)) + 2|0);
  store2($len4$i$i,-1);
  $freq49$i$i = ((($s)) + 2752|0);
  $freq55$i$i = ((($s)) + 2756|0);
  $freq40$i$i = ((($s)) + 2748|0);
  $max_count$1$ph$i$i = $$$i$i;$min_count$1$ph$i$i = $$29$i$i;$n$0$ph$i$i = 0;$nextlen$0$ph$i$i = $conv$i$i;$prevlen$0$ph$i$i = -1;
  L18: while(1) {
   $count$0$i$i = 0;$n$0$i$i = $n$0$ph$i$i;
   while(1) {
    $cmp5$i$i = ($n$0$i$i|0)>($8|0);
    if ($cmp5$i$i) {
     break L18;
    }
    $add7$i$i = (($n$0$i$i) + 1)|0;
    $len10$i$i = (((((($s)) + 148|0) + ($add7$i$i<<2)|0)) + 2|0);
    $10 = load2($len10$i$i);
    $conv11$i$i = $10&65535;
    $inc$i$i = (($count$0$i$i) + 1)|0;
    $cmp12$i$i = ($inc$i$i|0)<($max_count$1$ph$i$i|0);
    $cmp14$i$i = ($nextlen$0$ph$i$i|0)==($conv11$i$i|0);
    $or$cond$i$i = $cmp12$i$i & $cmp14$i$i;
    if ($or$cond$i$i) {
     $count$0$i$i = $inc$i$i;$n$0$i$i = $add7$i$i;
    } else {
     break;
    }
   }
   $cmp17$i$i = ($inc$i$i|0)<($min_count$1$ph$i$i|0);
   do {
    if ($cmp17$i$i) {
     $freq$i$i = (((($s)) + 2684|0) + ($nextlen$0$ph$i$i<<2)|0);
     $11 = load2($freq$i$i);
     $conv21$i$i = $11&65535;
     $add22$i$i = (($conv21$i$i) + ($inc$i$i))|0;
     $conv23$i$i = $add22$i$i&65535;
     store2($freq$i$i,$conv23$i$i);
    } else {
     $cmp25$i$i = ($nextlen$0$ph$i$i|0)==(0);
     if ($cmp25$i$i) {
      $cmp43$i$i = ($inc$i$i|0)<(11);
      if ($cmp43$i$i) {
       $14 = load2($freq49$i$i);
       $inc50$i$i = (($14) + 1)<<16>>16;
       store2($freq49$i$i,$inc50$i$i);
       break;
      } else {
       $15 = load2($freq55$i$i);
       $inc56$i$i = (($15) + 1)<<16>>16;
       store2($freq55$i$i,$inc56$i$i);
       break;
      }
     } else {
      $cmp28$i$i = ($nextlen$0$ph$i$i|0)==($prevlen$0$ph$i$i|0);
      $freq34$i$i = (((($s)) + 2684|0) + ($nextlen$0$ph$i$i<<2)|0);
      if (!($cmp28$i$i)) {
       $12 = load2($freq34$i$i);
       $inc35$i$i = (($12) + 1)<<16>>16;
       store2($freq34$i$i,$inc35$i$i);
      }
      $13 = load2($freq40$i$i);
      $inc41$i$i = (($13) + 1)<<16>>16;
      store2($freq40$i$i,$inc41$i$i);
      break;
     }
    }
   } while(0);
   $cmp61$i$i = ($10<<16>>16)==(0);
   $$30$i$i = $cmp14$i$i ? 6 : 7;
   $$$30$i$i = $cmp61$i$i ? 138 : $$30$i$i;
   $16 = $cmp61$i$i | $cmp14$i$i;
   $$$31$i$i = $16 ? 3 : 4;
   $prevlen$0$ph$i$i$phi = $nextlen$0$ph$i$i;$max_count$1$ph$i$i = $$$30$i$i;$min_count$1$ph$i$i = $$$31$i$i;$n$0$ph$i$i = $add7$i$i;$nextlen$0$ph$i$i = $conv11$i$i;$prevlen$0$ph$i$i = $prevlen$0$ph$i$i$phi;
  }
  $max_code2$i = ((($s)) + 2856|0);
  $17 = load4($max_code2$i);
  $len$i15$i = ((($s)) + 2442|0);
  $18 = load2($len$i15$i);
  $conv$i16$i = $18&65535;
  $cmp$i17$i = ($18<<16>>16)==(0);
  $$$i18$i = $cmp$i17$i ? 138 : 7;
  $$29$i19$i = $cmp$i17$i ? 3 : 4;
  $add$i20$i = (($17) + 1)|0;
  $len4$i21$i = (((((($s)) + 2440|0) + ($add$i20$i<<2)|0)) + 2|0);
  store2($len4$i21$i,-1);
  $max_count$1$ph$i28$i = $$$i18$i;$min_count$1$ph$i29$i = $$29$i19$i;$n$0$ph$i26$i = 0;$nextlen$0$ph$i27$i = $conv$i16$i;$prevlen$0$ph$i25$i = -1;
  L38: while(1) {
   $count$0$i32$i = 0;$n$0$i31$i = $n$0$ph$i26$i;
   while(1) {
    $cmp5$i33$i = ($n$0$i31$i|0)>($17|0);
    if ($cmp5$i33$i) {
     break L38;
    }
    $add7$i35$i = (($n$0$i31$i) + 1)|0;
    $len10$i36$i = (((((($s)) + 2440|0) + ($add7$i35$i<<2)|0)) + 2|0);
    $19 = load2($len10$i36$i);
    $conv11$i37$i = $19&65535;
    $inc$i38$i = (($count$0$i32$i) + 1)|0;
    $cmp12$i39$i = ($inc$i38$i|0)<($max_count$1$ph$i28$i|0);
    $cmp14$i40$i = ($nextlen$0$ph$i27$i|0)==($conv11$i37$i|0);
    $or$cond$i41$i = $cmp12$i39$i & $cmp14$i40$i;
    if ($or$cond$i41$i) {
     $count$0$i32$i = $inc$i38$i;$n$0$i31$i = $add7$i35$i;
    } else {
     break;
    }
   }
   $cmp17$i43$i = ($inc$i38$i|0)<($min_count$1$ph$i29$i|0);
   do {
    if ($cmp17$i43$i) {
     $freq$i45$i = (((($s)) + 2684|0) + ($nextlen$0$ph$i27$i<<2)|0);
     $20 = load2($freq$i45$i);
     $conv21$i46$i = $20&65535;
     $add22$i47$i = (($conv21$i46$i) + ($inc$i38$i))|0;
     $conv23$i48$i = $add22$i47$i&65535;
     store2($freq$i45$i,$conv23$i48$i);
    } else {
     $cmp25$i50$i = ($nextlen$0$ph$i27$i|0)==(0);
     if ($cmp25$i50$i) {
      $cmp43$i59$i = ($inc$i38$i|0)<(11);
      if ($cmp43$i59$i) {
       $23 = load2($freq49$i$i);
       $inc50$i61$i = (($23) + 1)<<16>>16;
       store2($freq49$i$i,$inc50$i61$i);
       break;
      } else {
       $24 = load2($freq55$i$i);
       $inc56$i63$i = (($24) + 1)<<16>>16;
       store2($freq55$i$i,$inc56$i63$i);
       break;
      }
     } else {
      $cmp28$i52$i = ($nextlen$0$ph$i27$i|0)==($prevlen$0$ph$i25$i|0);
      $freq34$i53$i = (((($s)) + 2684|0) + ($nextlen$0$ph$i27$i<<2)|0);
      if (!($cmp28$i52$i)) {
       $21 = load2($freq34$i53$i);
       $inc35$i55$i = (($21) + 1)<<16>>16;
       store2($freq34$i53$i,$inc35$i55$i);
      }
      $22 = load2($freq40$i$i);
      $inc41$i57$i = (($22) + 1)<<16>>16;
      store2($freq40$i$i,$inc41$i57$i);
      break;
     }
    }
   } while(0);
   $cmp61$i65$i = ($19<<16>>16)==(0);
   $$30$i66$i = $cmp14$i40$i ? 6 : 7;
   $$$30$i67$i = $cmp61$i65$i ? 138 : $$30$i66$i;
   $25 = $cmp61$i65$i | $cmp14$i40$i;
   $$$31$i68$i = $25 ? 3 : 4;
   $prevlen$0$ph$i25$i$phi = $nextlen$0$ph$i27$i;$max_count$1$ph$i28$i = $$$30$i67$i;$min_count$1$ph$i29$i = $$$31$i68$i;$n$0$ph$i26$i = $add7$i35$i;$nextlen$0$ph$i27$i = $conv11$i37$i;$prevlen$0$ph$i25$i = $prevlen$0$ph$i25$i$phi;
  }
  $bl_desc$i = ((($s)) + 2864|0);
  _build_tree($s,$bl_desc$i);
  $len$i = ((($s)) + 2746|0);
  $26 = load2($len$i);
  $cmp4$i = ($26<<16>>16)==(0);
  if ($cmp4$i) {
   $len$1$i = ((($s)) + 2690|0);
   $27 = load2($len$1$i);
   $cmp4$1$i = ($27<<16>>16)==(0);
   if ($cmp4$1$i) {
    $len$2$i = ((($s)) + 2742|0);
    $28 = load2($len$2$i);
    $cmp4$2$i = ($28<<16>>16)==(0);
    if ($cmp4$2$i) {
     $len$3$i = ((($s)) + 2694|0);
     $29 = load2($len$3$i);
     $cmp4$3$i = ($29<<16>>16)==(0);
     if ($cmp4$3$i) {
      $len$4$i = ((($s)) + 2738|0);
      $30 = load2($len$4$i);
      $cmp4$4$i = ($30<<16>>16)==(0);
      if ($cmp4$4$i) {
       $len$5$i = ((($s)) + 2698|0);
       $31 = load2($len$5$i);
       $cmp4$5$i = ($31<<16>>16)==(0);
       if ($cmp4$5$i) {
        $len$6$i = ((($s)) + 2734|0);
        $32 = load2($len$6$i);
        $cmp4$6$i = ($32<<16>>16)==(0);
        if ($cmp4$6$i) {
         $len$7$i = ((($s)) + 2702|0);
         $33 = load2($len$7$i);
         $cmp4$7$i = ($33<<16>>16)==(0);
         if ($cmp4$7$i) {
          $len$8$i = ((($s)) + 2730|0);
          $34 = load2($len$8$i);
          $cmp4$8$i = ($34<<16>>16)==(0);
          if ($cmp4$8$i) {
           $len$9$i = ((($s)) + 2706|0);
           $35 = load2($len$9$i);
           $cmp4$9$i = ($35<<16>>16)==(0);
           if ($cmp4$9$i) {
            $len$10$i = ((($s)) + 2726|0);
            $36 = load2($len$10$i);
            $cmp4$10$i = ($36<<16>>16)==(0);
            if ($cmp4$10$i) {
             $len$11$i = ((($s)) + 2710|0);
             $37 = load2($len$11$i);
             $cmp4$11$i = ($37<<16>>16)==(0);
             if ($cmp4$11$i) {
              $len$12$i = ((($s)) + 2722|0);
              $38 = load2($len$12$i);
              $cmp4$12$i = ($38<<16>>16)==(0);
              if ($cmp4$12$i) {
               $len$13$i = ((($s)) + 2714|0);
               $39 = load2($len$13$i);
               $cmp4$13$i = ($39<<16>>16)==(0);
               if ($cmp4$13$i) {
                $len$14$i = ((($s)) + 2718|0);
                $40 = load2($len$14$i);
                $cmp4$14$i = ($40<<16>>16)==(0);
                if ($cmp4$14$i) {
                 $len$15$i = ((($s)) + 2686|0);
                 $41 = load2($len$15$i);
                 $cmp4$15$i = ($41<<16>>16)==(0);
                 $$$i = $cmp4$15$i ? 2 : 3;
                 $max_blindex$0$lcssa$i = $$$i;
                } else {
                 $max_blindex$0$lcssa$i = 4;
                }
               } else {
                $max_blindex$0$lcssa$i = 5;
               }
              } else {
               $max_blindex$0$lcssa$i = 6;
              }
             } else {
              $max_blindex$0$lcssa$i = 7;
             }
            } else {
             $max_blindex$0$lcssa$i = 8;
            }
           } else {
            $max_blindex$0$lcssa$i = 9;
           }
          } else {
           $max_blindex$0$lcssa$i = 10;
          }
         } else {
          $max_blindex$0$lcssa$i = 11;
         }
        } else {
         $max_blindex$0$lcssa$i = 12;
        }
       } else {
        $max_blindex$0$lcssa$i = 13;
       }
      } else {
       $max_blindex$0$lcssa$i = 14;
      }
     } else {
      $max_blindex$0$lcssa$i = 15;
     }
    } else {
     $max_blindex$0$lcssa$i = 16;
    }
   } else {
    $max_blindex$0$lcssa$i = 17;
   }
  } else {
   $max_blindex$0$lcssa$i = 18;
  }
  $42 = ($max_blindex$0$lcssa$i*3)|0;
  $add8$i = (($42) + 17)|0;
  $opt_len$i = ((($s)) + 5800|0);
  $43 = load4($opt_len$i);
  $add9$i = (($add8$i) + ($43))|0;
  store4($opt_len$i,$add9$i);
  $add6 = (($add9$i) + 10)|0;
  $shr = $add6 >>> 3;
  $static_len = ((($s)) + 5804|0);
  $44 = load4($static_len);
  $add8 = (($44) + 10)|0;
  $shr9 = $add8 >>> 3;
  $cmp10 = ($shr9>>>0)>($shr>>>0);
  $shr$shr9 = $cmp10 ? $shr : $shr9;
  $max_blindex$0 = $max_blindex$0$lcssa$i;$opt_lenb$0 = $shr$shr9;$static_lenb$0 = $shr9;
 } else {
  $add13 = (($stored_len) + 5)|0;
  $max_blindex$0 = 0;$opt_lenb$0 = $add13;$static_lenb$0 = $add13;
 }
 $add15 = (($stored_len) + 4)|0;
 $cmp16 = ($add15>>>0)<=($opt_lenb$0>>>0);
 $cmp17 = ($buf|0)!=(0|0);
 $or$cond = $cmp17 & $cmp16;
 do {
  if ($or$cond) {
   __tr_stored_block($s,$buf,$stored_len,$last);
  } else {
   $strategy = ((($s)) + 136|0);
   $45 = load4($strategy);
   $cmp20 = ($45|0)==(4);
   $cmp21 = ($static_lenb$0|0)==($opt_lenb$0|0);
   $or$cond79 = $cmp21 | $cmp20;
   $bi_valid = ((($s)) + 5820|0);
   $46 = load4($bi_valid);
   $cmp23 = ($46|0)>(13);
   if ($or$cond79) {
    $add25 = (($last) + 2)|0;
    $conv26 = $add25 & 65535;
    $shl = $conv26 << $46;
    $bi_buf = ((($s)) + 5816|0);
    $47 = load2($bi_buf);
    $conv28 = $47&65535;
    $or = $conv28 | $shl;
    $conv29 = $or&65535;
    store2($bi_buf,$conv29);
    if ($cmp23) {
     $conv32 = $or&255;
     $pending = ((($s)) + 20|0);
     $48 = load4($pending);
     $inc = (($48) + 1)|0;
     store4($pending,$inc);
     $pending_buf = ((($s)) + 8|0);
     $49 = load4($pending_buf);
     $arrayidx = (($49) + ($48)|0);
     store1($arrayidx,$conv32);
     $50 = load2($bi_buf);
     $shr3578 = ($50&65535) >>> 8;
     $conv36 = $shr3578&255;
     $51 = load4($pending);
     $inc38 = (($51) + 1)|0;
     store4($pending,$inc38);
     $52 = load4($pending_buf);
     $arrayidx40 = (($52) + ($51)|0);
     store1($arrayidx40,$conv36);
     $53 = load4($bi_valid);
     $sub44 = (16 - ($53))|0;
     $shr45 = $conv26 >>> $sub44;
     $conv46 = $shr45&65535;
     store2($bi_buf,$conv46);
     $add50 = (($53) + -13)|0;
     $storemerge77 = $add50;
    } else {
     $add62 = (($46) + 3)|0;
     $storemerge77 = $add62;
    }
    store4($bi_valid,$storemerge77);
    _compress_block($s,10220,10100);
    break;
   }
   $add72 = (($last) + 4)|0;
   $conv74 = $add72 & 65535;
   $shl76 = $conv74 << $46;
   $bi_buf77 = ((($s)) + 5816|0);
   $54 = load2($bi_buf77);
   $conv78 = $54&65535;
   $or79 = $conv78 | $shl76;
   $conv80 = $or79&65535;
   store2($bi_buf77,$conv80);
   if ($cmp23) {
    $conv84 = $or79&255;
    $pending85 = ((($s)) + 20|0);
    $55 = load4($pending85);
    $inc86 = (($55) + 1)|0;
    store4($pending85,$inc86);
    $pending_buf87 = ((($s)) + 8|0);
    $56 = load4($pending_buf87);
    $arrayidx88 = (($56) + ($55)|0);
    store1($arrayidx88,$conv84);
    $57 = load2($bi_buf77);
    $shr9176 = ($57&65535) >>> 8;
    $conv92 = $shr9176&255;
    $58 = load4($pending85);
    $inc94 = (($58) + 1)|0;
    store4($pending85,$inc94);
    $59 = load4($pending_buf87);
    $arrayidx96 = (($59) + ($58)|0);
    store1($arrayidx96,$conv92);
    $60 = load4($bi_valid);
    $sub100 = (16 - ($60))|0;
    $shr101 = $conv74 >>> $sub100;
    $conv102 = $shr101&65535;
    store2($bi_buf77,$conv102);
    $add106 = (($60) + -13)|0;
    $63 = $shr101;$storemerge = $add106;
   } else {
    $add118 = (($46) + 3)|0;
    $63 = $or79;$storemerge = $add118;
   }
   store4($bi_valid,$storemerge);
   $max_code = ((($s)) + 2844|0);
   $61 = load4($max_code);
   $max_code123 = ((($s)) + 2856|0);
   $62 = load4($max_code123);
   $cmp$i85 = ($storemerge|0)>(11);
   $sub1$i = (($61) + 65280)|0;
   $conv2$i = $sub1$i & 65535;
   $shl$i = $conv2$i << $storemerge;
   $conv4$i87 = $63 & 65535;
   $or$i = $conv4$i87 | $shl$i;
   $conv5$i = $or$i&65535;
   store2($bi_buf77,$conv5$i);
   if ($cmp$i85) {
    $conv8$i = $or$i&255;
    $pending$i88 = ((($s)) + 20|0);
    $64 = load4($pending$i88);
    $inc$i89 = (($64) + 1)|0;
    store4($pending$i88,$inc$i89);
    $pending_buf$i90 = ((($s)) + 8|0);
    $65 = load4($pending_buf$i90);
    $arrayidx$i91 = (($65) + ($64)|0);
    store1($arrayidx$i91,$conv8$i);
    $66 = load2($bi_buf77);
    $shr102$i = ($66&65535) >>> 8;
    $conv11$i = $shr102$i&255;
    $67 = load4($pending$i88);
    $inc13$i = (($67) + 1)|0;
    store4($pending$i88,$inc13$i);
    $68 = load4($pending_buf$i90);
    $arrayidx15$i = (($68) + ($67)|0);
    store1($arrayidx15$i,$conv11$i);
    $69 = load4($bi_valid);
    $sub19$i = (16 - ($69))|0;
    $shr20$i = $conv2$i >>> $sub19$i;
    $conv21$i = $shr20$i&65535;
    store2($bi_buf77,$conv21$i);
    $add$i = (($69) + -11)|0;
    $70 = $add$i;$71 = $shr20$i;
   } else {
    $add35$i = (($storemerge) + 5)|0;
    $70 = $add35$i;$71 = $or$i;
   }
   store4($bi_valid,$70);
   $cmp39$i = ($70|0)>(11);
   $conv45$i = $62 & 65535;
   $shl47$i = $conv45$i << $70;
   $conv49$i = $71 & 65535;
   $or50$i = $shl47$i | $conv49$i;
   $conv51$i = $or50$i&65535;
   store2($bi_buf77,$conv51$i);
   if ($cmp39$i) {
    $conv55$i = $or50$i&255;
    $pending56$i = ((($s)) + 20|0);
    $72 = load4($pending56$i);
    $inc57$i = (($72) + 1)|0;
    store4($pending56$i,$inc57$i);
    $pending_buf58$i = ((($s)) + 8|0);
    $73 = load4($pending_buf58$i);
    $arrayidx59$i = (($73) + ($72)|0);
    store1($arrayidx59$i,$conv55$i);
    $74 = load2($bi_buf77);
    $shr62101$i = ($74&65535) >>> 8;
    $conv63$i = $shr62101$i&255;
    $75 = load4($pending56$i);
    $inc65$i = (($75) + 1)|0;
    store4($pending56$i,$inc65$i);
    $76 = load4($pending_buf58$i);
    $arrayidx67$i = (($76) + ($75)|0);
    store1($arrayidx67$i,$conv63$i);
    $77 = load4($bi_valid);
    $sub71$i = (16 - ($77))|0;
    $shr72$i = $conv45$i >>> $sub71$i;
    $conv73$i = $shr72$i&65535;
    store2($bi_buf77,$conv73$i);
    $add77$i = (($77) + -11)|0;
    $78 = $add77$i;$79 = $shr72$i;
   } else {
    $add89$i = (($70) + 5)|0;
    $78 = $add89$i;$79 = $or50$i;
   }
   store4($bi_valid,$78);
   $cmp94$i = ($78|0)>(12);
   $sub98$i = (($max_blindex$0) + 65533)|0;
   $conv100$i = $sub98$i & 65535;
   $shl102$i = $conv100$i << $78;
   $conv104$i = $79 & 65535;
   $or105$i = $shl102$i | $conv104$i;
   $conv106$i = $or105$i&65535;
   store2($bi_buf77,$conv106$i);
   if ($cmp94$i) {
    $conv110$i = $or105$i&255;
    $pending111$i = ((($s)) + 20|0);
    $80 = load4($pending111$i);
    $inc112$i = (($80) + 1)|0;
    store4($pending111$i,$inc112$i);
    $pending_buf113$i = ((($s)) + 8|0);
    $81 = load4($pending_buf113$i);
    $arrayidx114$i = (($81) + ($80)|0);
    store1($arrayidx114$i,$conv110$i);
    $82 = load2($bi_buf77);
    $shr117100$i = ($82&65535) >>> 8;
    $conv118$i = $shr117100$i&255;
    $83 = load4($pending111$i);
    $inc120$i = (($83) + 1)|0;
    store4($pending111$i,$inc120$i);
    $84 = load4($pending_buf113$i);
    $arrayidx122$i = (($84) + ($83)|0);
    store1($arrayidx122$i,$conv118$i);
    $85 = load4($bi_valid);
    $sub126$i = (16 - ($85))|0;
    $shr127$i = $conv100$i >>> $sub126$i;
    $conv128$i = $shr127$i&65535;
    store2($bi_buf77,$conv128$i);
    $add132$i = (($85) + -12)|0;
    $106 = $shr127$i;$pending171$i$pre$phiZZ2D = $pending111$i;$pending_buf173$i$pre$phiZZ2D = $pending_buf113$i;$storemerge97$i = $add132$i;
   } else {
    $add144$i = (($78) + 4)|0;
    $$pre = ((($s)) + 20|0);
    $$pre100 = ((($s)) + 8|0);
    $106 = $or105$i;$pending171$i$pre$phiZZ2D = $$pre;$pending_buf173$i$pre$phiZZ2D = $$pre100;$storemerge97$i = $add144$i;
   }
   store4($bi_valid,$storemerge97$i);
   $86 = $storemerge97$i;$89 = $106;$rank$0104$i = 0;
   while(1) {
    $cmp151$i = ($86|0)>(13);
    $arrayidx155$i = (14723 + ($rank$0104$i)|0);
    $87 = load1($arrayidx155$i);
    $idxprom$i = $87&255;
    $len157$i = (((((($s)) + 2684|0) + ($idxprom$i<<2)|0)) + 2|0);
    $88 = load2($len157$i);
    $conv160$i = $88&65535;
    $shl162$i = $conv160$i << $86;
    $conv164$i = $89 & 65535;
    $or165$i = $shl162$i | $conv164$i;
    $conv166$i = $or165$i&65535;
    store2($bi_buf77,$conv166$i);
    if ($cmp151$i) {
     $conv170$i = $or165$i&255;
     $90 = load4($pending171$i$pre$phiZZ2D);
     $inc172$i = (($90) + 1)|0;
     store4($pending171$i$pre$phiZZ2D,$inc172$i);
     $91 = load4($pending_buf173$i$pre$phiZZ2D);
     $arrayidx174$i = (($91) + ($90)|0);
     store1($arrayidx174$i,$conv170$i);
     $92 = load2($bi_buf77);
     $shr17799$i = ($92&65535) >>> 8;
     $conv178$i = $shr17799$i&255;
     $93 = load4($pending171$i$pre$phiZZ2D);
     $inc180$i = (($93) + 1)|0;
     store4($pending171$i$pre$phiZZ2D,$inc180$i);
     $94 = load4($pending_buf173$i$pre$phiZZ2D);
     $arrayidx182$i = (($94) + ($93)|0);
     store1($arrayidx182$i,$conv178$i);
     $95 = load4($bi_valid);
     $sub186$i = (16 - ($95))|0;
     $shr187$i = $conv160$i >>> $sub186$i;
     $conv188$i = $shr187$i&65535;
     store2($bi_buf77,$conv188$i);
     $add192$i = (($95) + -13)|0;
     $107 = $shr187$i;$storemerge98$i = $add192$i;
    } else {
     $add208$i = (($86) + 3)|0;
     $107 = $or165$i;$storemerge98$i = $add208$i;
    }
    store4($bi_valid,$storemerge98$i);
    $inc210$i = (($rank$0104$i) + 1)|0;
    $exitcond$i = ($rank$0104$i|0)==($max_blindex$0|0);
    if ($exitcond$i) {
     break;
    } else {
     $86 = $storemerge98$i;$89 = $107;$rank$0104$i = $inc210$i;
    }
   }
   $arraydecay$i = ((($s)) + 148|0);
   _send_tree($s,$arraydecay$i,$61);
   $arraydecay212$i = ((($s)) + 2440|0);
   _send_tree($s,$arraydecay212$i,$62);
   _compress_block($s,$arraydecay$i,$arraydecay212$i);
  }
 } while(0);
 _init_block($s);
 $tobool = ($last|0)==(0);
 if ($tobool) {
  return;
 }
 $bi_valid$i = ((($s)) + 5820|0);
 $96 = load4($bi_valid$i);
 $cmp$i80 = ($96|0)>(8);
 if ($cmp$i80) {
  $bi_buf$i = ((($s)) + 5816|0);
  $97 = load2($bi_buf$i);
  $conv1$i = $97&255;
  $pending$i = ((($s)) + 20|0);
  $98 = load4($pending$i);
  $inc$i81 = (($98) + 1)|0;
  store4($pending$i,$inc$i81);
  $pending_buf$i = ((($s)) + 8|0);
  $99 = load4($pending_buf$i);
  $arrayidx$i = (($99) + ($98)|0);
  store1($arrayidx$i,$conv1$i);
  $100 = load2($bi_buf$i);
  $shr12$i = ($100&65535) >>> 8;
  $conv4$i = $shr12$i&255;
  $101 = load4($pending$i);
  $inc6$i = (($101) + 1)|0;
  store4($pending$i,$inc6$i);
  $102 = load4($pending_buf$i);
  $arrayidx8$i = (($102) + ($101)|0);
  store1($arrayidx8$i,$conv4$i);
  $bi_buf20$pre$phi$iZ2D = $bi_buf$i;
 } else {
  $cmp10$i = ($96|0)>(0);
  $bi_buf13$i = ((($s)) + 5816|0);
  if ($cmp10$i) {
   $103 = load2($bi_buf13$i);
   $conv14$i = $103&255;
   $pending15$i = ((($s)) + 20|0);
   $104 = load4($pending15$i);
   $inc16$i = (($104) + 1)|0;
   store4($pending15$i,$inc16$i);
   $pending_buf17$i = ((($s)) + 8|0);
   $105 = load4($pending_buf17$i);
   $arrayidx18$i = (($105) + ($104)|0);
   store1($arrayidx18$i,$conv14$i);
   $bi_buf20$pre$phi$iZ2D = $bi_buf13$i;
  } else {
   $bi_buf20$pre$phi$iZ2D = $bi_buf13$i;
  }
 }
 store2($bi_buf20$pre$phi$iZ2D,0);
 store4($bi_valid$i,0);
 return;
}
function _build_tree($s,$desc) {
 $s = $s|0;
 $desc = $desc|0;
 var $$ = 0, $$pre = 0, $$pre$i = 0, $$pre197 = 0, $$pre198$pre = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
 var $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0;
 var $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0;
 var $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0;
 var $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0;
 var $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $add = 0, $add$i = 0, $add$i106 = 0, $add$i148 = 0, $add$i87 = 0, $add117$i = 0, $add19$$i = 0, $add19$$us$i = 0, $add19$i = 0;
 var $add19$us$i = 0, $add41$i = 0, $add41$us$i = 0, $add42$i = 0, $add42$us$i = 0, $add49$i = 0, $add51$i = 0, $add73$i = 0, $add88 = 0, $and$i$i = 0, $arrayidx$i = 0, $arrayidx$i86 = 0, $arrayidx109 = 0, $arrayidx13$i = 0, $arrayidx13$i90 = 0, $arrayidx13$us$i = 0, $arrayidx19 = 0, $arrayidx19$us = 0, $arrayidx24 = 0, $arrayidx24$us = 0;
 var $arrayidx3$i = 0, $arrayidx32$i = 0, $arrayidx32$us$i = 0, $arrayidx33$i = 0, $arrayidx33$i115 = 0, $arrayidx33$i157 = 0, $arrayidx37$i = 0, $arrayidx37$us$i = 0, $arrayidx38$i = 0, $arrayidx38$i116 = 0, $arrayidx38$i158 = 0, $arrayidx4$i = 0, $arrayidx4$i107 = 0, $arrayidx4$i149 = 0, $arrayidx41 = 0, $arrayidx45 = 0, $arrayidx47$i = 0, $arrayidx47$i121 = 0, $arrayidx47$i163 = 0, $arrayidx53 = 0;
 var $arrayidx57 = 0, $arrayidx6 = 0, $arrayidx6$i = 0, $arrayidx62$i = 0, $arrayidx69$i = 0, $arrayidx69$i139 = 0, $arrayidx7 = 0, $arrayidx7$i = 0, $arrayidx7$i109 = 0, $arrayidx7$i151 = 0, $arrayidx71 = 0, $arrayidx71$i = 0, $arrayidx74 = 0, $arrayidx74$i = 0, $arrayidx74$i127 = 0, $arrayidx74$i169 = 0, $arrayidx76$i = 0, $arrayidx83$i = 0, $arrayidx83$i130 = 0, $arrayidx83$i172 = 0;
 var $arrayidx86$i = 0, $arrayidx86$i135 = 0, $arrayidx86$i177 = 0, $arrayidx86$phi$trans$insert$i = 0, $arrayidx91 = 0, $arrayidx94$i = 0, $bits$017$i = 0, $bits$2$i = 0, $bits$2$in$i = 0, $bits$34$i = 0, $cmp$i = 0, $cmp$i$i = 0, $cmp$i132 = 0, $cmp$i174 = 0, $cmp102 = 0, $cmp103$i = 0, $cmp108$i = 0, $cmp11 = 0, $cmp11$i = 0, $cmp11$us = 0;
 var $cmp11187 = 0, $cmp12$i = 0, $cmp12$i111 = 0, $cmp12$i153 = 0, $cmp13 = 0, $cmp13$us = 0, $cmp190 = 0, $cmp2$i = 0, $cmp2$i104 = 0, $cmp2$i146 = 0, $cmp20$i = 0, $cmp20$us$i = 0, $cmp27$i = 0, $cmp27$i113 = 0, $cmp27$i155 = 0, $cmp27$i92 = 0, $cmp27$us$i = 0, $cmp3 = 0, $cmp34 = 0, $cmp34$i = 0;
 var $cmp34$us$i = 0, $cmp40$i = 0, $cmp40$i117 = 0, $cmp40$i159 = 0, $cmp49$i = 0, $cmp49$i141 = 0, $cmp49$i99 = 0, $cmp514$i = 0, $cmp52$i = 0, $cmp52$i123 = 0, $cmp52$i165 = 0, $cmp56$i = 0, $cmp64$i = 0, $cmp65$i = 0, $cmp65$i125 = 0, $cmp65$i167 = 0, $cmp76 = 0, $cmp76$i = 0, $cmp76$i128 = 0, $cmp76$i170 = 0;
 var $cmp79$i = 0, $cmp82$i = 0, $cmp823$i = 0, $cmp89$i = 0, $cmp89$i182 = 0, $cmp95$i = 0, $code$018$i = 0, $code$addr$0$i$i = 0, $code18$i = 0, $conv$i = 0, $conv$i91 = 0, $conv$us$i = 0, $conv1$i = 0, $conv10$i = 0, $conv102$i = 0, $conv114$i = 0, $conv118$i = 0, $conv15$i = 0, $conv16$i = 0, $conv2$i = 0;
 var $conv23$i = 0, $conv23$us$i = 0, $conv29 = 0, $conv40$i = 0, $conv40$us$i = 0, $conv48$i = 0, $conv61 = 0, $conv65 = 0, $conv66 = 0, $conv72$i = 0, $conv74$i = 0, $conv81 = 0, $conv87$i = 0, $conv89 = 0, $conv92 = 0, $dad = 0, $dad$i = 0, $dad$us$i = 0, $dad97 = 0, $dec = 0;
 var $dec$i$i = 0, $dec$us = 0, $dec107 = 0, $dec123$i = 0, $dec126$i = 0, $dec38 = 0, $dec43 = 0, $dec51 = 0, $dec55 = 0, $dec68$i = 0, $dec77$i = 0, $dec92$i = 0, $desc$idx$val = 0, $desc$idx84$val = 0, $desc$idx85$val = 0, $div = 0, $elems2 = 0, $exitcond = 0, $exitcond$i = 0, $exitcond$i89 = 0;
 var $exitcond16$i = 0, $exitcond19$i = 0, $extra_base$i = 0, $extra_bits$i = 0, $freq = 0, $freq$i = 0, $freq$i108 = 0, $freq$i150 = 0, $freq$i94 = 0, $freq$us$i = 0, $freq10$i = 0, $freq10$i110 = 0, $freq10$i152 = 0, $freq113$i = 0, $freq22 = 0, $freq22$us = 0, $freq44$i = 0, $freq44$i142 = 0, $freq50$i = 0, $freq50$i122 = 0;
 var $freq50$i164 = 0, $freq60 = 0, $freq64 = 0, $freq69 = 0, $h$0$i = 0, $h$0$us$i = 0, $h$010$i = 0, $h$010$us$i = 0, $h$07$i = 0, $h$16$i = 0, $h$2$i = 0, $h$2$ph$i$lcssa = 0, $h$2$ph$i184 = 0, $heap_len = 0, $heap_max = 0, $idxprom$i = 0, $idxprom$us$i = 0, $inc = 0, $inc$i = 0, $inc14$i = 0;
 var $inc15 = 0, $inc15$ = 0, $inc15$$us = 0, $inc15$max_code$2 = 0, $inc15$max_code$2$us = 0, $inc15$us = 0, $inc17 = 0, $inc17$us = 0, $inc20$i = 0, $inc22$i = 0, $inc22$us$i = 0, $inc33$i = 0, $inc33$us$i = 0, $inc9 = 0, $inc98 = 0, $j$0$i = 0, $j$0$i131 = 0, $j$0$i173 = 0, $j$048$i = 0, $j$051$i = 0;
 var $j$051$i102 = 0, $j$051$i144 = 0, $j$1$i = 0, $j$1$i120 = 0, $j$1$i162 = 0, $k$addr$0$lcssa$i = 0, $k$addr$0$lcssa$i134 = 0, $k$addr$0$lcssa$i176 = 0, $k$addr$050$i = 0, $k$addr$050$i103 = 0, $k$addr$050$i145 = 0, $len = 0, $len$addr$0$i$i = 0, $len$i = 0, $len101$i = 0, $len18$i = 0, $len18$us$i = 0, $len28 = 0, $len47$i = 0, $len9$i = 0;
 var $max_code$0$lcssa201 = 0, $max_code$0192 = 0, $max_code$1 = 0, $max_code$2$lcssa = 0, $max_code$2188 = 0, $max_code$2188$us = 0, $max_code31 = 0, $max_length5$i = 0, $mul$i = 0, $mul$us$i = 0, $mul115$i = 0, $mul50$i = 0, $n$0$ph$i183 = 0, $n$015$i = 0, $n$0191 = 0, $n$1186 = 0, $next_code$i = 0, $node$0 = 0, $opt_len = 0, $opt_len$i = 0;
 var $or$i$i = 0, $overflow$0$inc22$i = 0, $overflow$0$inc22$us$i = 0, $overflow$0$lcssa$i = 0, $overflow$09$i = 0, $overflow$09$us$i = 0, $overflow$2$i = 0, $res$0$i$i = 0, $scevgep$i = 0, $shl$i = 0, $shl$i$i = 0, $shr$i$i = 0, $stat_desc = 0, $static_len = 0, $static_len$i = 0, $sub = 0, $sub$i = 0, $sub$i93 = 0, $sub$us$i = 0, $sub110$i = 0;
 var $sub78$i = 0, $tobool = 0, $tobool$i = 0, $xbits$0$i = 0, $xbits$0$us$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $next_code$i = sp;
 $0 = load4($desc);
 $stat_desc = ((($desc)) + 8|0);
 $1 = load4($stat_desc);
 $2 = load4($1);
 $elems2 = ((($1)) + 12|0);
 $3 = load4($elems2);
 $heap_len = ((($s)) + 5200|0);
 store4($heap_len,0);
 $heap_max = ((($s)) + 5204|0);
 store4($heap_max,573);
 $cmp190 = ($3|0)>(0);
 if ($cmp190) {
  $max_code$0192 = -1;$n$0191 = 0;
  while(1) {
   $freq = (($0) + ($n$0191<<2)|0);
   $7 = load2($freq);
   $cmp3 = ($7<<16>>16)==(0);
   if ($cmp3) {
    $len = (((($0) + ($n$0191<<2)|0)) + 2|0);
    store2($len,0);
    $max_code$1 = $max_code$0192;
   } else {
    $8 = load4($heap_len);
    $inc = (($8) + 1)|0;
    store4($heap_len,$inc);
    $arrayidx6 = (((($s)) + 2908|0) + ($inc<<2)|0);
    store4($arrayidx6,$n$0191);
    $arrayidx7 = (((($s)) + 5208|0) + ($n$0191)|0);
    store1($arrayidx7,0);
    $max_code$1 = $n$0191;
   }
   $inc9 = (($n$0191) + 1)|0;
   $exitcond = ($inc9|0)==($3|0);
   if ($exitcond) {
    break;
   } else {
    $max_code$0192 = $max_code$1;$n$0191 = $inc9;
   }
  }
  $$pre = load4($heap_len);
  $cmp11187 = ($$pre|0)<(2);
  if ($cmp11187) {
   $105 = $$pre;$max_code$0$lcssa201 = $max_code$1;
   label = 3;
  } else {
   $14 = $$pre;$max_code$2$lcssa = $max_code$1;
  }
 } else {
  $105 = 0;$max_code$0$lcssa201 = -1;
  label = 3;
 }
 if ((label|0) == 3) {
  $opt_len = ((($s)) + 5800|0);
  $tobool = ($2|0)==(0|0);
  $static_len = ((($s)) + 5804|0);
  if ($tobool) {
   $4 = $105;$max_code$2188$us = $max_code$0$lcssa201;
   while(1) {
    $cmp13$us = ($max_code$2188$us|0)<(2);
    $inc15$us = (($max_code$2188$us) + 1)|0;
    $inc15$max_code$2$us = $cmp13$us ? $inc15$us : $max_code$2188$us;
    $inc15$$us = $cmp13$us ? $inc15$us : 0;
    $inc17$us = (($4) + 1)|0;
    store4($heap_len,$inc17$us);
    $arrayidx19$us = (((($s)) + 2908|0) + ($inc17$us<<2)|0);
    store4($arrayidx19$us,$inc15$$us);
    $freq22$us = (($0) + ($inc15$$us<<2)|0);
    store2($freq22$us,1);
    $arrayidx24$us = (((($s)) + 5208|0) + ($inc15$$us)|0);
    store1($arrayidx24$us,0);
    $5 = load4($opt_len);
    $dec$us = (($5) + -1)|0;
    store4($opt_len,$dec$us);
    $6 = load4($heap_len);
    $cmp11$us = ($6|0)<(2);
    if ($cmp11$us) {
     $4 = $6;$max_code$2188$us = $inc15$max_code$2$us;
    } else {
     $14 = $6;$max_code$2$lcssa = $inc15$max_code$2$us;
     break;
    }
   }
  } else {
   $9 = $105;$max_code$2188 = $max_code$0$lcssa201;
   while(1) {
    $cmp13 = ($max_code$2188|0)<(2);
    $inc15 = (($max_code$2188) + 1)|0;
    $inc15$max_code$2 = $cmp13 ? $inc15 : $max_code$2188;
    $inc15$ = $cmp13 ? $inc15 : 0;
    $inc17 = (($9) + 1)|0;
    store4($heap_len,$inc17);
    $arrayidx19 = (((($s)) + 2908|0) + ($inc17<<2)|0);
    store4($arrayidx19,$inc15$);
    $freq22 = (($0) + ($inc15$<<2)|0);
    store2($freq22,1);
    $arrayidx24 = (((($s)) + 5208|0) + ($inc15$)|0);
    store1($arrayidx24,0);
    $10 = load4($opt_len);
    $dec = (($10) + -1)|0;
    store4($opt_len,$dec);
    $len28 = (((($2) + ($inc15$<<2)|0)) + 2|0);
    $11 = load2($len28);
    $conv29 = $11&65535;
    $12 = load4($static_len);
    $sub = (($12) - ($conv29))|0;
    store4($static_len,$sub);
    $13 = load4($heap_len);
    $cmp11 = ($13|0)<(2);
    if ($cmp11) {
     $9 = $13;$max_code$2188 = $inc15$max_code$2;
    } else {
     $14 = $13;$max_code$2$lcssa = $inc15$max_code$2;
     break;
    }
   }
  }
 }
 $max_code31 = ((($desc)) + 4|0);
 store4($max_code31,$max_code$2$lcssa);
 $div = (($14|0) / 2)&-1;
 $16 = $14;$n$1186 = $div;
 while(1) {
  $arrayidx$i = (((($s)) + 2908|0) + ($n$1186<<2)|0);
  $15 = load4($arrayidx$i);
  $arrayidx69$i = (((($s)) + 5208|0) + ($15)|0);
  $j$048$i = $n$1186 << 1;
  $cmp49$i = ($j$048$i|0)>($16|0);
  L19: do {
   if ($cmp49$i) {
    $k$addr$0$lcssa$i = $n$1186;
   } else {
    $freq44$i = (($0) + ($15<<2)|0);
    $17 = $16;$j$051$i = $j$048$i;$k$addr$050$i = $n$1186;
    while(1) {
     $cmp2$i = ($j$051$i|0)<($17|0);
     do {
      if ($cmp2$i) {
       $add$i = $j$051$i | 1;
       $arrayidx4$i = (((($s)) + 2908|0) + ($add$i<<2)|0);
       $18 = load4($arrayidx4$i);
       $freq$i = (($0) + ($18<<2)|0);
       $19 = load2($freq$i);
       $arrayidx7$i = (((($s)) + 2908|0) + ($j$051$i<<2)|0);
       $20 = load4($arrayidx7$i);
       $freq10$i = (($0) + ($20<<2)|0);
       $21 = load2($freq10$i);
       $cmp12$i = ($19&65535)<($21&65535);
       if (!($cmp12$i)) {
        $cmp27$i = ($19<<16>>16)==($21<<16>>16);
        if (!($cmp27$i)) {
         $j$1$i = $j$051$i;
         break;
        }
        $arrayidx33$i = (((($s)) + 5208|0) + ($18)|0);
        $22 = load1($arrayidx33$i);
        $arrayidx38$i = (((($s)) + 5208|0) + ($20)|0);
        $23 = load1($arrayidx38$i);
        $cmp40$i = ($22&255)>($23&255);
        if ($cmp40$i) {
         $j$1$i = $j$051$i;
         break;
        }
       }
       $j$1$i = $add$i;
      } else {
       $j$1$i = $j$051$i;
      }
     } while(0);
     $24 = load2($freq44$i);
     $arrayidx47$i = (((($s)) + 2908|0) + ($j$1$i<<2)|0);
     $25 = load4($arrayidx47$i);
     $freq50$i = (($0) + ($25<<2)|0);
     $26 = load2($freq50$i);
     $cmp52$i = ($24&65535)<($26&65535);
     if ($cmp52$i) {
      $k$addr$0$lcssa$i = $k$addr$050$i;
      break L19;
     }
     $cmp65$i = ($24<<16>>16)==($26<<16>>16);
     if ($cmp65$i) {
      $27 = load1($arrayidx69$i);
      $arrayidx74$i = (((($s)) + 5208|0) + ($25)|0);
      $28 = load1($arrayidx74$i);
      $cmp76$i = ($27&255)>($28&255);
      if (!($cmp76$i)) {
       $k$addr$0$lcssa$i = $k$addr$050$i;
       break L19;
      }
     }
     $arrayidx83$i = (((($s)) + 2908|0) + ($k$addr$050$i<<2)|0);
     store4($arrayidx83$i,$25);
     $j$0$i = $j$1$i << 1;
     $29 = load4($heap_len);
     $cmp$i = ($j$0$i|0)>($29|0);
     if ($cmp$i) {
      $k$addr$0$lcssa$i = $j$1$i;
      break;
     } else {
      $17 = $29;$j$051$i = $j$0$i;$k$addr$050$i = $j$1$i;
     }
    }
   }
  } while(0);
  $arrayidx86$i = (((($s)) + 2908|0) + ($k$addr$0$lcssa$i<<2)|0);
  store4($arrayidx86$i,$15);
  $cmp34 = ($n$1186|0)>(1);
  if (!($cmp34)) {
   break;
  }
  $dec38 = (($n$1186) + -1)|0;
  $$pre197 = load4($heap_len);
  $16 = $$pre197;$n$1186 = $dec38;
 }
 $$pre198$pre = load4($heap_len);
 $arrayidx41 = ((($s)) + 2912|0);
 $31 = $$pre198$pre;$node$0 = $3;
 while(1) {
  $30 = load4($arrayidx41);
  $dec43 = (($31) + -1)|0;
  store4($heap_len,$dec43);
  $arrayidx45 = (((($s)) + 2908|0) + ($31<<2)|0);
  $32 = load4($arrayidx45);
  store4($arrayidx41,$32);
  $arrayidx69$i139 = (((($s)) + 5208|0) + ($32)|0);
  $cmp49$i141 = ($31|0)<(3);
  L39: do {
   if ($cmp49$i141) {
    $k$addr$0$lcssa$i176 = 1;
   } else {
    $freq44$i142 = (($0) + ($32<<2)|0);
    $33 = $dec43;$j$051$i144 = 2;$k$addr$050$i145 = 1;
    while(1) {
     $cmp2$i146 = ($j$051$i144|0)<($33|0);
     do {
      if ($cmp2$i146) {
       $add$i148 = $j$051$i144 | 1;
       $arrayidx4$i149 = (((($s)) + 2908|0) + ($add$i148<<2)|0);
       $34 = load4($arrayidx4$i149);
       $freq$i150 = (($0) + ($34<<2)|0);
       $35 = load2($freq$i150);
       $arrayidx7$i151 = (((($s)) + 2908|0) + ($j$051$i144<<2)|0);
       $36 = load4($arrayidx7$i151);
       $freq10$i152 = (($0) + ($36<<2)|0);
       $37 = load2($freq10$i152);
       $cmp12$i153 = ($35&65535)<($37&65535);
       if (!($cmp12$i153)) {
        $cmp27$i155 = ($35<<16>>16)==($37<<16>>16);
        if (!($cmp27$i155)) {
         $j$1$i162 = $j$051$i144;
         break;
        }
        $arrayidx33$i157 = (((($s)) + 5208|0) + ($34)|0);
        $38 = load1($arrayidx33$i157);
        $arrayidx38$i158 = (((($s)) + 5208|0) + ($36)|0);
        $39 = load1($arrayidx38$i158);
        $cmp40$i159 = ($38&255)>($39&255);
        if ($cmp40$i159) {
         $j$1$i162 = $j$051$i144;
         break;
        }
       }
       $j$1$i162 = $add$i148;
      } else {
       $j$1$i162 = $j$051$i144;
      }
     } while(0);
     $40 = load2($freq44$i142);
     $arrayidx47$i163 = (((($s)) + 2908|0) + ($j$1$i162<<2)|0);
     $41 = load4($arrayidx47$i163);
     $freq50$i164 = (($0) + ($41<<2)|0);
     $42 = load2($freq50$i164);
     $cmp52$i165 = ($40&65535)<($42&65535);
     if ($cmp52$i165) {
      $k$addr$0$lcssa$i176 = $k$addr$050$i145;
      break L39;
     }
     $cmp65$i167 = ($40<<16>>16)==($42<<16>>16);
     if ($cmp65$i167) {
      $43 = load1($arrayidx69$i139);
      $arrayidx74$i169 = (((($s)) + 5208|0) + ($41)|0);
      $44 = load1($arrayidx74$i169);
      $cmp76$i170 = ($43&255)>($44&255);
      if (!($cmp76$i170)) {
       $k$addr$0$lcssa$i176 = $k$addr$050$i145;
       break L39;
      }
     }
     $arrayidx83$i172 = (((($s)) + 2908|0) + ($k$addr$050$i145<<2)|0);
     store4($arrayidx83$i172,$41);
     $j$0$i173 = $j$1$i162 << 1;
     $45 = load4($heap_len);
     $cmp$i174 = ($j$0$i173|0)>($45|0);
     if ($cmp$i174) {
      $k$addr$0$lcssa$i176 = $j$1$i162;
      break;
     } else {
      $33 = $45;$j$051$i144 = $j$0$i173;$k$addr$050$i145 = $j$1$i162;
     }
    }
   }
  } while(0);
  $arrayidx86$i177 = (((($s)) + 2908|0) + ($k$addr$0$lcssa$i176<<2)|0);
  store4($arrayidx86$i177,$32);
  $46 = load4($arrayidx41);
  $47 = load4($heap_max);
  $dec51 = (($47) + -1)|0;
  store4($heap_max,$dec51);
  $arrayidx53 = (((($s)) + 2908|0) + ($dec51<<2)|0);
  store4($arrayidx53,$30);
  $48 = load4($heap_max);
  $dec55 = (($48) + -1)|0;
  store4($heap_max,$dec55);
  $arrayidx57 = (((($s)) + 2908|0) + ($dec55<<2)|0);
  store4($arrayidx57,$46);
  $freq60 = (($0) + ($30<<2)|0);
  $49 = load2($freq60);
  $conv61 = $49&65535;
  $freq64 = (($0) + ($46<<2)|0);
  $50 = load2($freq64);
  $conv65 = $50&65535;
  $add = (($conv65) + ($conv61))|0;
  $conv66 = $add&65535;
  $freq69 = (($0) + ($node$0<<2)|0);
  store2($freq69,$conv66);
  $arrayidx71 = (((($s)) + 5208|0) + ($30)|0);
  $51 = load1($arrayidx71);
  $arrayidx74 = (((($s)) + 5208|0) + ($46)|0);
  $52 = load1($arrayidx74);
  $cmp76 = ($51&255)<($52&255);
  $$ = $cmp76 ? $52 : $51;
  $conv81 = $$&255;
  $add88 = (($conv81) + 1)|0;
  $conv89 = $add88&255;
  $arrayidx91 = (((($s)) + 5208|0) + ($node$0)|0);
  store1($arrayidx91,$conv89);
  $conv92 = $node$0&65535;
  $dad = (((($0) + ($46<<2)|0)) + 2|0);
  store2($dad,$conv92);
  $dad97 = (((($0) + ($30<<2)|0)) + 2|0);
  store2($dad97,$conv92);
  $inc98 = (($node$0) + 1)|0;
  store4($arrayidx41,$node$0);
  $53 = load4($heap_len);
  $cmp49$i99 = ($53|0)<(2);
  L55: do {
   if ($cmp49$i99) {
    $k$addr$0$lcssa$i134 = 1;
   } else {
    $54 = $53;$j$051$i102 = 2;$k$addr$050$i103 = 1;
    while(1) {
     $cmp2$i104 = ($j$051$i102|0)<($54|0);
     do {
      if ($cmp2$i104) {
       $add$i106 = $j$051$i102 | 1;
       $arrayidx4$i107 = (((($s)) + 2908|0) + ($add$i106<<2)|0);
       $55 = load4($arrayidx4$i107);
       $freq$i108 = (($0) + ($55<<2)|0);
       $56 = load2($freq$i108);
       $arrayidx7$i109 = (((($s)) + 2908|0) + ($j$051$i102<<2)|0);
       $57 = load4($arrayidx7$i109);
       $freq10$i110 = (($0) + ($57<<2)|0);
       $58 = load2($freq10$i110);
       $cmp12$i111 = ($56&65535)<($58&65535);
       if (!($cmp12$i111)) {
        $cmp27$i113 = ($56<<16>>16)==($58<<16>>16);
        if (!($cmp27$i113)) {
         $j$1$i120 = $j$051$i102;
         break;
        }
        $arrayidx33$i115 = (((($s)) + 5208|0) + ($55)|0);
        $59 = load1($arrayidx33$i115);
        $arrayidx38$i116 = (((($s)) + 5208|0) + ($57)|0);
        $60 = load1($arrayidx38$i116);
        $cmp40$i117 = ($59&255)>($60&255);
        if ($cmp40$i117) {
         $j$1$i120 = $j$051$i102;
         break;
        }
       }
       $j$1$i120 = $add$i106;
      } else {
       $j$1$i120 = $j$051$i102;
      }
     } while(0);
     $61 = load2($freq69);
     $arrayidx47$i121 = (((($s)) + 2908|0) + ($j$1$i120<<2)|0);
     $62 = load4($arrayidx47$i121);
     $freq50$i122 = (($0) + ($62<<2)|0);
     $63 = load2($freq50$i122);
     $cmp52$i123 = ($61&65535)<($63&65535);
     if ($cmp52$i123) {
      $k$addr$0$lcssa$i134 = $k$addr$050$i103;
      break L55;
     }
     $cmp65$i125 = ($61<<16>>16)==($63<<16>>16);
     if ($cmp65$i125) {
      $64 = load1($arrayidx91);
      $arrayidx74$i127 = (((($s)) + 5208|0) + ($62)|0);
      $65 = load1($arrayidx74$i127);
      $cmp76$i128 = ($64&255)>($65&255);
      if (!($cmp76$i128)) {
       $k$addr$0$lcssa$i134 = $k$addr$050$i103;
       break L55;
      }
     }
     $arrayidx83$i130 = (((($s)) + 2908|0) + ($k$addr$050$i103<<2)|0);
     store4($arrayidx83$i130,$62);
     $j$0$i131 = $j$1$i120 << 1;
     $66 = load4($heap_len);
     $cmp$i132 = ($j$0$i131|0)>($66|0);
     if ($cmp$i132) {
      $k$addr$0$lcssa$i134 = $j$1$i120;
      break;
     } else {
      $54 = $66;$j$051$i102 = $j$0$i131;$k$addr$050$i103 = $j$1$i120;
     }
    }
   }
  } while(0);
  $arrayidx86$i135 = (((($s)) + 2908|0) + ($k$addr$0$lcssa$i134<<2)|0);
  store4($arrayidx86$i135,$node$0);
  $67 = load4($heap_len);
  $cmp102 = ($67|0)>(1);
  if ($cmp102) {
   $31 = $67;$node$0 = $inc98;
  } else {
   break;
  }
 }
 $68 = load4($arrayidx41);
 $69 = load4($heap_max);
 $dec107 = (($69) + -1)|0;
 store4($heap_max,$dec107);
 $arrayidx109 = (((($s)) + 2908|0) + ($dec107<<2)|0);
 store4($arrayidx109,$68);
 $desc$idx$val = load4($desc);
 $desc$idx84$val = load4($max_code31);
 $desc$idx85$val = load4($stat_desc);
 $70 = load4($desc$idx85$val);
 $extra_bits$i = ((($desc$idx85$val)) + 4|0);
 $71 = load4($extra_bits$i);
 $extra_base$i = ((($desc$idx85$val)) + 8|0);
 $72 = load4($extra_base$i);
 $max_length5$i = ((($desc$idx85$val)) + 16|0);
 $73 = load4($max_length5$i);
 $scevgep$i = ((($s)) + 2876|0);
 ; store8($scevgep$i,i64_const(0,0),2); store8($scevgep$i+8|0,i64_const(0,0),2); store8($scevgep$i+16|0,i64_const(0,0),2); store8($scevgep$i+24|0,i64_const(0,0),2);
 $74 = load4($heap_max);
 $arrayidx6$i = (((($s)) + 2908|0) + ($74<<2)|0);
 $75 = load4($arrayidx6$i);
 $len$i = (((($desc$idx$val) + ($75<<2)|0)) + 2|0);
 store2($len$i,0);
 $h$07$i = (($74) + 1)|0;
 $cmp108$i = ($h$07$i|0)<(573);
 L71: do {
  if ($cmp108$i) {
   $opt_len$i = ((($s)) + 5800|0);
   $tobool$i = ($70|0)==(0|0);
   $static_len$i = ((($s)) + 5804|0);
   if ($tobool$i) {
    $h$010$us$i = $h$07$i;$overflow$09$us$i = 0;
    while(1) {
     $arrayidx13$us$i = (((($s)) + 2908|0) + ($h$010$us$i<<2)|0);
     $76 = load4($arrayidx13$us$i);
     $dad$us$i = (((($desc$idx$val) + ($76<<2)|0)) + 2|0);
     $77 = load2($dad$us$i);
     $idxprom$us$i = $77&65535;
     $len18$us$i = (((($desc$idx$val) + ($idxprom$us$i<<2)|0)) + 2|0);
     $78 = load2($len18$us$i);
     $conv$us$i = $78&65535;
     $add19$us$i = (($conv$us$i) + 1)|0;
     $cmp20$us$i = ($conv$us$i|0)<($73|0);
     $add19$$us$i = $cmp20$us$i ? $add19$us$i : $73;
     $79 = $cmp20$us$i&1;
     $inc22$us$i = $79 ^ 1;
     $overflow$0$inc22$us$i = (($inc22$us$i) + ($overflow$09$us$i))|0;
     $conv23$us$i = $add19$$us$i&65535;
     store2($dad$us$i,$conv23$us$i);
     $cmp27$us$i = ($76|0)>($desc$idx84$val|0);
     if (!($cmp27$us$i)) {
      $arrayidx32$us$i = (((($s)) + 2876|0) + ($add19$$us$i<<1)|0);
      $80 = load2($arrayidx32$us$i);
      $inc33$us$i = (($80) + 1)<<16>>16;
      store2($arrayidx32$us$i,$inc33$us$i);
      $cmp34$us$i = ($76|0)<($72|0);
      if ($cmp34$us$i) {
       $xbits$0$us$i = 0;
      } else {
       $sub$us$i = (($76) - ($72))|0;
       $arrayidx37$us$i = (($71) + ($sub$us$i<<2)|0);
       $81 = load4($arrayidx37$us$i);
       $xbits$0$us$i = $81;
      }
      $freq$us$i = (($desc$idx$val) + ($76<<2)|0);
      $82 = load2($freq$us$i);
      $conv40$us$i = $82&65535;
      $add41$us$i = (($xbits$0$us$i) + ($add19$$us$i))|0;
      $mul$us$i = Math_imul($conv40$us$i, $add41$us$i)|0;
      $83 = load4($opt_len$i);
      $add42$us$i = (($mul$us$i) + ($83))|0;
      store4($opt_len$i,$add42$us$i);
     }
     $h$0$us$i = (($h$010$us$i) + 1)|0;
     $exitcond$i89 = ($h$0$us$i|0)==(573);
     if ($exitcond$i89) {
      $overflow$0$lcssa$i = $overflow$0$inc22$us$i;
      break;
     } else {
      $h$010$us$i = $h$0$us$i;$overflow$09$us$i = $overflow$0$inc22$us$i;
     }
    }
   } else {
    $h$010$i = $h$07$i;$overflow$09$i = 0;
    while(1) {
     $arrayidx13$i90 = (((($s)) + 2908|0) + ($h$010$i<<2)|0);
     $84 = load4($arrayidx13$i90);
     $dad$i = (((($desc$idx$val) + ($84<<2)|0)) + 2|0);
     $85 = load2($dad$i);
     $idxprom$i = $85&65535;
     $len18$i = (((($desc$idx$val) + ($idxprom$i<<2)|0)) + 2|0);
     $86 = load2($len18$i);
     $conv$i91 = $86&65535;
     $add19$i = (($conv$i91) + 1)|0;
     $cmp20$i = ($conv$i91|0)<($73|0);
     $add19$$i = $cmp20$i ? $add19$i : $73;
     $87 = $cmp20$i&1;
     $inc22$i = $87 ^ 1;
     $overflow$0$inc22$i = (($inc22$i) + ($overflow$09$i))|0;
     $conv23$i = $add19$$i&65535;
     store2($dad$i,$conv23$i);
     $cmp27$i92 = ($84|0)>($desc$idx84$val|0);
     if (!($cmp27$i92)) {
      $arrayidx32$i = (((($s)) + 2876|0) + ($add19$$i<<1)|0);
      $88 = load2($arrayidx32$i);
      $inc33$i = (($88) + 1)<<16>>16;
      store2($arrayidx32$i,$inc33$i);
      $cmp34$i = ($84|0)<($72|0);
      if ($cmp34$i) {
       $xbits$0$i = 0;
      } else {
       $sub$i93 = (($84) - ($72))|0;
       $arrayidx37$i = (($71) + ($sub$i93<<2)|0);
       $89 = load4($arrayidx37$i);
       $xbits$0$i = $89;
      }
      $freq$i94 = (($desc$idx$val) + ($84<<2)|0);
      $90 = load2($freq$i94);
      $conv40$i = $90&65535;
      $add41$i = (($xbits$0$i) + ($add19$$i))|0;
      $mul$i = Math_imul($conv40$i, $add41$i)|0;
      $91 = load4($opt_len$i);
      $add42$i = (($mul$i) + ($91))|0;
      store4($opt_len$i,$add42$i);
      $len47$i = (((($70) + ($84<<2)|0)) + 2|0);
      $92 = load2($len47$i);
      $conv48$i = $92&65535;
      $add49$i = (($conv48$i) + ($xbits$0$i))|0;
      $mul50$i = Math_imul($add49$i, $conv40$i)|0;
      $93 = load4($static_len$i);
      $add51$i = (($mul50$i) + ($93))|0;
      store4($static_len$i,$add51$i);
     }
     $h$0$i = (($h$010$i) + 1)|0;
     $exitcond16$i = ($h$0$i|0)==(573);
     if ($exitcond16$i) {
      $overflow$0$lcssa$i = $overflow$0$inc22$i;
      break;
     } else {
      $h$010$i = $h$0$i;$overflow$09$i = $overflow$0$inc22$i;
     }
    }
   }
   $cmp56$i = ($overflow$0$lcssa$i|0)==(0);
   if (!($cmp56$i)) {
    $arrayidx76$i = (((($s)) + 2876|0) + ($73<<1)|0);
    $overflow$2$i = $overflow$0$lcssa$i;
    while(1) {
     $bits$2$in$i = $73;
     while(1) {
      $bits$2$i = (($bits$2$in$i) + -1)|0;
      $arrayidx62$i = (((($s)) + 2876|0) + ($bits$2$i<<1)|0);
      $94 = load2($arrayidx62$i);
      $cmp64$i = ($94<<16>>16)==(0);
      if ($cmp64$i) {
       $bits$2$in$i = $bits$2$i;
      } else {
       break;
      }
     }
     $dec68$i = (($94) + -1)<<16>>16;
     store2($arrayidx62$i,$dec68$i);
     $arrayidx71$i = (((($s)) + 2876|0) + ($bits$2$in$i<<1)|0);
     $95 = load2($arrayidx71$i);
     $conv72$i = $95&65535;
     $add73$i = (($conv72$i) + 2)|0;
     $conv74$i = $add73$i&65535;
     store2($arrayidx71$i,$conv74$i);
     $96 = load2($arrayidx76$i);
     $dec77$i = (($96) + -1)<<16>>16;
     store2($arrayidx76$i,$dec77$i);
     $sub78$i = (($overflow$2$i) + -2)|0;
     $cmp79$i = ($overflow$2$i|0)>(2);
     if ($cmp79$i) {
      $overflow$2$i = $sub78$i;
     } else {
      break;
     }
    }
    $cmp823$i = ($73|0)==(0);
    if (!($cmp823$i)) {
     $97 = $dec77$i;$bits$34$i = $73;$h$16$i = 573;
     while(1) {
      $conv118$i = $bits$34$i&65535;
      $cmp89$i182 = ($97<<16>>16)==(0);
      if ($cmp89$i182) {
       $h$2$ph$i$lcssa = $h$16$i;
      } else {
       $conv87$i = $97&65535;
       $h$2$ph$i184 = $h$16$i;$n$0$ph$i183 = $conv87$i;
       while(1) {
        $h$2$i = $h$2$ph$i184;
        while(1) {
         $dec92$i = (($h$2$i) + -1)|0;
         $arrayidx94$i = (((($s)) + 2908|0) + ($dec92$i<<2)|0);
         $98 = load4($arrayidx94$i);
         $cmp95$i = ($98|0)>($desc$idx84$val|0);
         if ($cmp95$i) {
          $h$2$i = $dec92$i;
         } else {
          break;
         }
        }
        $len101$i = (((($desc$idx$val) + ($98<<2)|0)) + 2|0);
        $99 = load2($len101$i);
        $conv102$i = $99&65535;
        $cmp103$i = ($bits$34$i|0)==($conv102$i|0);
        if (!($cmp103$i)) {
         $sub110$i = (($bits$34$i) - ($conv102$i))|0;
         $freq113$i = (($desc$idx$val) + ($98<<2)|0);
         $100 = load2($freq113$i);
         $conv114$i = $100&65535;
         $mul115$i = Math_imul($conv114$i, $sub110$i)|0;
         $101 = load4($opt_len$i);
         $add117$i = (($mul115$i) + ($101))|0;
         store4($opt_len$i,$add117$i);
         store2($len101$i,$conv118$i);
        }
        $dec123$i = (($n$0$ph$i183) + -1)|0;
        $cmp89$i = ($dec123$i|0)==(0);
        if ($cmp89$i) {
         $h$2$ph$i$lcssa = $dec92$i;
         break;
        } else {
         $h$2$ph$i184 = $dec92$i;$n$0$ph$i183 = $dec123$i;
        }
       }
      }
      $dec126$i = (($bits$34$i) + -1)|0;
      $cmp82$i = ($dec126$i|0)==(0);
      if ($cmp82$i) {
       break L71;
      }
      $arrayidx86$phi$trans$insert$i = (((($s)) + 2876|0) + ($dec126$i<<1)|0);
      $$pre$i = load2($arrayidx86$phi$trans$insert$i);
      $97 = $$pre$i;$bits$34$i = $dec126$i;$h$16$i = $h$2$ph$i$lcssa;
     }
    }
   }
  }
 } while(0);
 $bits$017$i = 1;$code$018$i = 0;
 while(1) {
  $conv$i = $code$018$i & 65534;
  $sub$i = (($bits$017$i) + -1)|0;
  $arrayidx$i86 = (((($s)) + 2876|0) + ($sub$i<<1)|0);
  $102 = load2($arrayidx$i86);
  $conv1$i = $102&65535;
  $add$i87 = (($conv1$i) + ($conv$i))|0;
  $shl$i = $add$i87 << 1;
  $conv2$i = $shl$i&65535;
  $arrayidx3$i = (($next_code$i) + ($bits$017$i<<1)|0);
  store2($arrayidx3$i,$conv2$i);
  $inc$i = (($bits$017$i) + 1)|0;
  $exitcond19$i = ($inc$i|0)==(16);
  if ($exitcond19$i) {
   break;
  } else {
   $bits$017$i = $inc$i;$code$018$i = $shl$i;
  }
 }
 $cmp514$i = ($max_code$2$lcssa|0)<(0);
 if ($cmp514$i) {
  STACKTOP = sp;return;
 } else {
  $n$015$i = 0;
 }
 while(1) {
  $len9$i = (((($0) + ($n$015$i<<2)|0)) + 2|0);
  $103 = load2($len9$i);
  $conv10$i = $103&65535;
  $cmp11$i = ($103<<16>>16)==(0);
  if (!($cmp11$i)) {
   $arrayidx13$i = (($next_code$i) + ($conv10$i<<1)|0);
   $104 = load2($arrayidx13$i);
   $inc14$i = (($104) + 1)<<16>>16;
   store2($arrayidx13$i,$inc14$i);
   $conv15$i = $104&65535;
   $code$addr$0$i$i = $conv15$i;$len$addr$0$i$i = $conv10$i;$res$0$i$i = 0;
   while(1) {
    $and$i$i = $code$addr$0$i$i & 1;
    $or$i$i = $res$0$i$i | $and$i$i;
    $shr$i$i = $code$addr$0$i$i >>> 1;
    $shl$i$i = $or$i$i << 1;
    $dec$i$i = (($len$addr$0$i$i) + -1)|0;
    $cmp$i$i = ($len$addr$0$i$i|0)>(1);
    if ($cmp$i$i) {
     $code$addr$0$i$i = $shr$i$i;$len$addr$0$i$i = $dec$i$i;$res$0$i$i = $shl$i$i;
    } else {
     break;
    }
   }
   $conv16$i = $or$i$i&65535;
   $code18$i = (($0) + ($n$015$i<<2)|0);
   store2($code18$i,$conv16$i);
  }
  $inc20$i = (($n$015$i) + 1)|0;
  $exitcond$i = ($n$015$i|0)==($max_code$2$lcssa|0);
  if ($exitcond$i) {
   break;
  } else {
   $n$015$i = $inc20$i;
  }
 }
 STACKTOP = sp;return;
}
function _compress_block($s,$ltree,$dtree) {
 $s = $s|0;
 $ltree = $ltree|0;
 $dtree = $dtree|0;
 var $$pre = 0, $$pre178 = 0, $$sink = 0, $$sink$in = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $8 = 0, $9 = 0, $add = 0;
 var $add108 = 0, $add123 = 0, $add171 = 0, $add182 = 0, $add190 = 0, $add241 = 0, $add254 = 0, $add302 = 0, $add313 = 0, $add369 = 0, $add382 = 0, $add52 = 0, $add57 = 0, $add58 = 0, $arrayidx = 0, $arrayidx1 = 0, $arrayidx125 = 0, $arrayidx129 = 0, $arrayidx153 = 0, $arrayidx161 = 0;
 var $arrayidx223 = 0, $arrayidx231 = 0, $arrayidx24 = 0, $arrayidx256 = 0, $arrayidx260 = 0, $arrayidx284 = 0, $arrayidx292 = 0, $arrayidx31 = 0, $arrayidx351 = 0, $arrayidx359 = 0, $arrayidx54 = 0, $arrayidx90 = 0, $arrayidx98 = 0, $bi_buf = 0, $bi_buf340$phi$trans$insert = 0, $bi_buf340$pre$phiZ2D = 0, $bi_valid = 0, $bi_valid326$phi$trans$insert = 0, $bi_valid326$pre$phiZ2D = 0, $cmp = 0;
 var $cmp126 = 0, $cmp134 = 0, $cmp185 = 0, $cmp200 = 0, $cmp257 = 0, $cmp265 = 0, $cmp3 = 0, $cmp318 = 0, $cmp328 = 0, $cmp65 = 0, $cmp9 = 0, $code13 = 0, $code206 = 0, $code334 = 0, $code73 = 0, $conv = 0, $conv104 = 0, $conv139 = 0, $conv143 = 0, $conv145 = 0;
 var $conv149 = 0, $conv157 = 0, $conv16 = 0, $conv167 = 0, $conv18 = 0, $conv188 = 0, $conv19 = 0, $conv197 = 0, $conv2 = 0, $conv209 = 0, $conv213 = 0, $conv215 = 0, $conv219 = 0, $conv22 = 0, $conv227 = 0, $conv237 = 0, $conv27 = 0, $conv270 = 0, $conv274 = 0, $conv276 = 0;
 var $conv280 = 0, $conv288 = 0, $conv298 = 0, $conv325 = 0, $conv337 = 0, $conv341 = 0, $conv343 = 0, $conv347 = 0, $conv355 = 0, $conv365 = 0, $conv37 = 0, $conv387 = 0, $conv55 = 0, $conv62 = 0, $conv76 = 0, $conv8 = 0, $conv80 = 0, $conv82 = 0, $conv86 = 0, $conv94 = 0;
 var $d_buf = 0, $dec = 0, $dec$pn = 0, $inc = 0, $inc151 = 0, $inc159 = 0, $inc221 = 0, $inc229 = 0, $inc23 = 0, $inc282 = 0, $inc29 = 0, $inc290 = 0, $inc349 = 0, $inc357 = 0, $inc88 = 0, $inc96 = 0, $l_buf = 0, $last_eob_len = 0, $last_lit = 0, $len196 = 0;
 var $len324 = 0, $len61 = 0, $len7 = 0, $lx$0 = 0, $or = 0, $or144 = 0, $or214 = 0, $or275 = 0, $or342 = 0, $or81 = 0, $pending = 0, $pending348 = 0, $pending_buf = 0, $pending_buf350 = 0, $shl = 0, $shl141 = 0, $shl211 = 0, $shl272 = 0, $shl339 = 0, $shl78 = 0;
 var $shr103 = 0, $shr156174 = 0, $shr166 = 0, $shr177 = 0, $shr189 = 0, $shr226172 = 0, $shr236 = 0, $shr287171 = 0, $shr297 = 0, $shr354167 = 0, $shr36 = 0, $shr364 = 0, $shr93175 = 0, $storemerge = 0, $storemerge170 = 0, $storemerge173 = 0, $storemerge176 = 0, $sub = 0, $sub102 = 0, $sub106 = 0;
 var $sub130 = 0, $sub133 = 0, $sub165 = 0, $sub169 = 0, $sub199 = 0, $sub235 = 0, $sub239 = 0, $sub261 = 0, $sub264 = 0, $sub296 = 0, $sub300 = 0, $sub327 = 0, $sub35 = 0, $sub363 = 0, $sub367 = 0, $sub39 = 0, $sub64 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $last_lit = ((($s)) + 5792|0);
 $0 = load4($last_lit);
 $cmp = ($0|0)==(0);
 if ($cmp) {
  $bi_valid326$phi$trans$insert = ((($s)) + 5820|0);
  $$pre = load4($bi_valid326$phi$trans$insert);
  $bi_buf340$phi$trans$insert = ((($s)) + 5816|0);
  $$pre178 = load2($bi_buf340$phi$trans$insert);
  $60 = $$pre;$62 = $$pre178;$bi_buf340$pre$phiZ2D = $bi_buf340$phi$trans$insert;$bi_valid326$pre$phiZ2D = $bi_valid326$phi$trans$insert;
 } else {
  $d_buf = ((($s)) + 5796|0);
  $l_buf = ((($s)) + 5784|0);
  $bi_valid = ((($s)) + 5820|0);
  $bi_buf = ((($s)) + 5816|0);
  $pending = ((($s)) + 20|0);
  $pending_buf = ((($s)) + 8|0);
  $lx$0 = 0;
  while(1) {
   $1 = load4($d_buf);
   $arrayidx = (($1) + ($lx$0<<1)|0);
   $2 = load2($arrayidx);
   $conv = $2&65535;
   $inc = (($lx$0) + 1)|0;
   $3 = load4($l_buf);
   $arrayidx1 = (($3) + ($lx$0)|0);
   $4 = load1($arrayidx1);
   $conv2 = $4&255;
   $cmp3 = ($2<<16>>16)==(0);
   if ($cmp3) {
    $len7 = (((($ltree) + ($conv2<<2)|0)) + 2|0);
    $5 = load2($len7);
    $conv8 = $5&65535;
    $6 = load4($bi_valid);
    $sub = (16 - ($conv8))|0;
    $cmp9 = ($6|0)>($sub|0);
    $code13 = (($ltree) + ($conv2<<2)|0);
    $7 = load2($code13);
    $conv16 = $7&65535;
    $shl = $conv16 << $6;
    $8 = load2($bi_buf);
    $conv18 = $8&65535;
    $or = $conv18 | $shl;
    $conv19 = $or&65535;
    store2($bi_buf,$conv19);
    if ($cmp9) {
     $conv22 = $or&255;
     $9 = load4($pending);
     $inc23 = (($9) + 1)|0;
     store4($pending,$inc23);
     $10 = load4($pending_buf);
     $arrayidx24 = (($10) + ($9)|0);
     store1($arrayidx24,$conv22);
     $11 = load2($bi_buf);
     $shr177 = ($11&65535) >>> 8;
     $conv27 = $shr177&255;
     $12 = load4($pending);
     $inc29 = (($12) + 1)|0;
     store4($pending,$inc29);
     $13 = load4($pending_buf);
     $arrayidx31 = (($13) + ($12)|0);
     store1($arrayidx31,$conv27);
     $14 = load4($bi_valid);
     $sub35 = (16 - ($14))|0;
     $shr36 = $conv16 >>> $sub35;
     $conv37 = $shr36&65535;
     store2($bi_buf,$conv37);
     $sub39 = (($conv8) + -16)|0;
     $add = (($sub39) + ($14))|0;
     $70 = $conv37;$storemerge176 = $add;
    } else {
     $add52 = (($6) + ($conv8))|0;
     $70 = $conv19;$storemerge176 = $add52;
    }
    store4($bi_valid,$storemerge176);
    $71 = $70;$72 = $storemerge176;
   } else {
    $arrayidx54 = (14467 + ($conv2)|0);
    $15 = load1($arrayidx54);
    $conv55 = $15&255;
    $add57 = $conv55 | 256;
    $add58 = (($add57) + 1)|0;
    $len61 = (((($ltree) + ($add58<<2)|0)) + 2|0);
    $16 = load2($len61);
    $conv62 = $16&65535;
    $17 = load4($bi_valid);
    $sub64 = (16 - ($conv62))|0;
    $cmp65 = ($17|0)>($sub64|0);
    $code73 = (($ltree) + ($add58<<2)|0);
    $18 = load2($code73);
    $conv76 = $18&65535;
    $shl78 = $conv76 << $17;
    $19 = load2($bi_buf);
    $conv80 = $19&65535;
    $or81 = $conv80 | $shl78;
    $conv82 = $or81&65535;
    store2($bi_buf,$conv82);
    if ($cmp65) {
     $conv86 = $or81&255;
     $20 = load4($pending);
     $inc88 = (($20) + 1)|0;
     store4($pending,$inc88);
     $21 = load4($pending_buf);
     $arrayidx90 = (($21) + ($20)|0);
     store1($arrayidx90,$conv86);
     $22 = load2($bi_buf);
     $shr93175 = ($22&65535) >>> 8;
     $conv94 = $shr93175&255;
     $23 = load4($pending);
     $inc96 = (($23) + 1)|0;
     store4($pending,$inc96);
     $24 = load4($pending_buf);
     $arrayidx98 = (($24) + ($23)|0);
     store1($arrayidx98,$conv94);
     $25 = load4($bi_valid);
     $sub102 = (16 - ($25))|0;
     $shr103 = $conv76 >>> $sub102;
     $conv104 = $shr103&65535;
     store2($bi_buf,$conv104);
     $sub106 = (($conv62) + -16)|0;
     $add108 = (($sub106) + ($25))|0;
     $26 = $add108;$30 = $conv104;
    } else {
     $add123 = (($17) + ($conv62))|0;
     $26 = $add123;$30 = $conv82;
    }
    store4($bi_valid,$26);
    $arrayidx125 = (1400 + ($conv55<<2)|0);
    $27 = load4($arrayidx125);
    $28 = (($conv55) + -8)|0;
    $cmp126 = ($28>>>0)<(20);
    if ($cmp126) {
     $arrayidx129 = (1516 + ($conv55<<2)|0);
     $29 = load4($arrayidx129);
     $sub130 = (($conv2) - ($29))|0;
     $sub133 = (16 - ($27))|0;
     $cmp134 = ($26|0)>($sub133|0);
     $conv139 = $sub130 & 65535;
     $shl141 = $conv139 << $26;
     $conv143 = $30&65535;
     $or144 = $shl141 | $conv143;
     $conv145 = $or144&65535;
     store2($bi_buf,$conv145);
     if ($cmp134) {
      $conv149 = $or144&255;
      $31 = load4($pending);
      $inc151 = (($31) + 1)|0;
      store4($pending,$inc151);
      $32 = load4($pending_buf);
      $arrayidx153 = (($32) + ($31)|0);
      store1($arrayidx153,$conv149);
      $33 = load2($bi_buf);
      $shr156174 = ($33&65535) >>> 8;
      $conv157 = $shr156174&255;
      $34 = load4($pending);
      $inc159 = (($34) + 1)|0;
      store4($pending,$inc159);
      $35 = load4($pending_buf);
      $arrayidx161 = (($35) + ($34)|0);
      store1($arrayidx161,$conv157);
      $36 = load4($bi_valid);
      $sub165 = (16 - ($36))|0;
      $shr166 = $conv139 >>> $sub165;
      $conv167 = $shr166&65535;
      store2($bi_buf,$conv167);
      $sub169 = (($27) + -16)|0;
      $add171 = (($sub169) + ($36))|0;
      $73 = $conv167;$storemerge173 = $add171;
     } else {
      $add182 = (($26) + ($27))|0;
      $73 = $conv145;$storemerge173 = $add182;
     }
     store4($bi_valid,$storemerge173);
     $38 = $storemerge173;$40 = $73;
    } else {
     $38 = $26;$40 = $30;
    }
    $dec = (($conv) + -1)|0;
    $cmp185 = ($dec>>>0)<(256);
    $shr189 = $dec >>> 7;
    $add190 = (($shr189) + 256)|0;
    $dec$pn = $cmp185 ? $dec : $add190;
    $$sink$in = (13955 + ($dec$pn)|0);
    $$sink = load1($$sink$in);
    $conv188 = $$sink&255;
    $len196 = (((($dtree) + ($conv188<<2)|0)) + 2|0);
    $37 = load2($len196);
    $conv197 = $37&65535;
    $sub199 = (16 - ($conv197))|0;
    $cmp200 = ($38|0)>($sub199|0);
    $code206 = (($dtree) + ($conv188<<2)|0);
    $39 = load2($code206);
    $conv209 = $39&65535;
    $shl211 = $conv209 << $38;
    $conv213 = $40&65535;
    $or214 = $conv213 | $shl211;
    $conv215 = $or214&65535;
    store2($bi_buf,$conv215);
    if ($cmp200) {
     $conv219 = $or214&255;
     $41 = load4($pending);
     $inc221 = (($41) + 1)|0;
     store4($pending,$inc221);
     $42 = load4($pending_buf);
     $arrayidx223 = (($42) + ($41)|0);
     store1($arrayidx223,$conv219);
     $43 = load2($bi_buf);
     $shr226172 = ($43&65535) >>> 8;
     $conv227 = $shr226172&255;
     $44 = load4($pending);
     $inc229 = (($44) + 1)|0;
     store4($pending,$inc229);
     $45 = load4($pending_buf);
     $arrayidx231 = (($45) + ($44)|0);
     store1($arrayidx231,$conv227);
     $46 = load4($bi_valid);
     $sub235 = (16 - ($46))|0;
     $shr236 = $conv209 >>> $sub235;
     $conv237 = $shr236&65535;
     store2($bi_buf,$conv237);
     $sub239 = (($conv197) + -16)|0;
     $add241 = (($sub239) + ($46))|0;
     $47 = $add241;$51 = $conv237;
    } else {
     $add254 = (($38) + ($conv197))|0;
     $47 = $add254;$51 = $conv215;
    }
    store4($bi_valid,$47);
    $arrayidx256 = (1280 + ($conv188<<2)|0);
    $48 = load4($arrayidx256);
    $49 = (($conv188) + -4)|0;
    $cmp257 = ($49>>>0)<(26);
    if ($cmp257) {
     $arrayidx260 = (1632 + ($conv188<<2)|0);
     $50 = load4($arrayidx260);
     $sub261 = (($dec) - ($50))|0;
     $sub264 = (16 - ($48))|0;
     $cmp265 = ($47|0)>($sub264|0);
     $conv270 = $sub261 & 65535;
     $shl272 = $conv270 << $47;
     $conv274 = $51&65535;
     $or275 = $shl272 | $conv274;
     $conv276 = $or275&65535;
     store2($bi_buf,$conv276);
     if ($cmp265) {
      $conv280 = $or275&255;
      $52 = load4($pending);
      $inc282 = (($52) + 1)|0;
      store4($pending,$inc282);
      $53 = load4($pending_buf);
      $arrayidx284 = (($53) + ($52)|0);
      store1($arrayidx284,$conv280);
      $54 = load2($bi_buf);
      $shr287171 = ($54&65535) >>> 8;
      $conv288 = $shr287171&255;
      $55 = load4($pending);
      $inc290 = (($55) + 1)|0;
      store4($pending,$inc290);
      $56 = load4($pending_buf);
      $arrayidx292 = (($56) + ($55)|0);
      store1($arrayidx292,$conv288);
      $57 = load4($bi_valid);
      $sub296 = (16 - ($57))|0;
      $shr297 = $conv270 >>> $sub296;
      $conv298 = $shr297&65535;
      store2($bi_buf,$conv298);
      $sub300 = (($48) + -16)|0;
      $add302 = (($sub300) + ($57))|0;
      $74 = $conv298;$storemerge170 = $add302;
     } else {
      $add313 = (($47) + ($48))|0;
      $74 = $conv276;$storemerge170 = $add313;
     }
     store4($bi_valid,$storemerge170);
     $71 = $74;$72 = $storemerge170;
    } else {
     $71 = $51;$72 = $47;
    }
   }
   $58 = load4($last_lit);
   $cmp318 = ($inc>>>0)<($58>>>0);
   if ($cmp318) {
    $lx$0 = $inc;
   } else {
    $60 = $72;$62 = $71;$bi_buf340$pre$phiZ2D = $bi_buf;$bi_valid326$pre$phiZ2D = $bi_valid;
    break;
   }
  }
 }
 $len324 = ((($ltree)) + 1026|0);
 $59 = load2($len324);
 $conv325 = $59&65535;
 $sub327 = (16 - ($conv325))|0;
 $cmp328 = ($60|0)>($sub327|0);
 $code334 = ((($ltree)) + 1024|0);
 $61 = load2($code334);
 $conv337 = $61&65535;
 $shl339 = $conv337 << $60;
 $conv341 = $62&65535;
 $or342 = $conv341 | $shl339;
 $conv343 = $or342&65535;
 store2($bi_buf340$pre$phiZ2D,$conv343);
 if ($cmp328) {
  $conv347 = $or342&255;
  $pending348 = ((($s)) + 20|0);
  $63 = load4($pending348);
  $inc349 = (($63) + 1)|0;
  store4($pending348,$inc349);
  $pending_buf350 = ((($s)) + 8|0);
  $64 = load4($pending_buf350);
  $arrayidx351 = (($64) + ($63)|0);
  store1($arrayidx351,$conv347);
  $65 = load2($bi_buf340$pre$phiZ2D);
  $shr354167 = ($65&65535) >>> 8;
  $conv355 = $shr354167&255;
  $66 = load4($pending348);
  $inc357 = (($66) + 1)|0;
  store4($pending348,$inc357);
  $67 = load4($pending_buf350);
  $arrayidx359 = (($67) + ($66)|0);
  store1($arrayidx359,$conv355);
  $68 = load4($bi_valid326$pre$phiZ2D);
  $sub363 = (16 - ($68))|0;
  $shr364 = $conv337 >>> $sub363;
  $conv365 = $shr364&65535;
  store2($bi_buf340$pre$phiZ2D,$conv365);
  $sub367 = (($conv325) + -16)|0;
  $add369 = (($sub367) + ($68))|0;
  $storemerge = $add369;
  store4($bi_valid326$pre$phiZ2D,$storemerge);
  $69 = load2($len324);
  $conv387 = $69&65535;
  $last_eob_len = ((($s)) + 5812|0);
  store4($last_eob_len,$conv387);
  return;
 } else {
  $add382 = (($60) + ($conv325))|0;
  $storemerge = $add382;
  store4($bi_valid326$pre$phiZ2D,$storemerge);
  $69 = load2($len324);
  $conv387 = $69&65535;
  $last_eob_len = ((($s)) + 5812|0);
  store4($last_eob_len,$conv387);
  return;
 }
}
function _send_tree($s,$tree,$max_code) {
 $s = $s|0;
 $tree = $tree|0;
 $max_code = $max_code|0;
 var $$ = 0, $$$225 = 0, $$$226 = 0, $$224 = 0, $$226 = 0, $$pre = 0, $$pre231 = 0, $$pre232 = 0, $$pre233 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0;
 var $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0;
 var $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0;
 var $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0;
 var $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $8 = 0, $9 = 0, $add = 0, $add128 = 0, $add142 = 0, $add196 = 0, $add210 = 0, $add253 = 0, $add265 = 0, $add321 = 0, $add335 = 0, $add378 = 0, $add390 = 0, $add443 = 0;
 var $add457 = 0, $add500 = 0, $add512 = 0, $add53 = 0, $add67 = 0, $arrayidx110 = 0, $arrayidx118 = 0, $arrayidx178 = 0, $arrayidx186 = 0, $arrayidx235 = 0, $arrayidx243 = 0, $arrayidx303 = 0, $arrayidx311 = 0, $arrayidx36 = 0, $arrayidx360 = 0, $arrayidx368 = 0, $arrayidx425 = 0, $arrayidx43 = 0, $arrayidx433 = 0, $arrayidx482 = 0;
 var $arrayidx490 = 0, $bi_buf292 = 0, $bi_valid277 = 0, $cmp = 0, $cmp10 = 0, $cmp13 = 0, $cmp154 = 0, $cmp2 = 0, $cmp21 = 0, $cmp215 = 0, $cmp268 = 0, $cmp279 = 0, $cmp340 = 0, $cmp401 = 0, $cmp462 = 0, $cmp518 = 0, $cmp69 = 0, $cmp72 = 0, $cmp75 = 0, $cmp8 = 0;
 var $cmp86 = 0, $code = 0, $code161 = 0, $code286 = 0, $code408 = 0, $code93 = 0, $conv = 0, $conv100 = 0, $conv102 = 0, $conv106 = 0, $conv114 = 0, $conv124 = 0, $conv151 = 0, $conv164 = 0, $conv168 = 0, $conv170 = 0, $conv174 = 0, $conv182 = 0, $conv192 = 0, $conv20 = 0;
 var $conv221 = 0, $conv225 = 0, $conv227 = 0, $conv231 = 0, $conv239 = 0, $conv249 = 0, $conv276 = 0, $conv28 = 0, $conv289 = 0, $conv293 = 0, $conv295 = 0, $conv299 = 0, $conv30 = 0, $conv307 = 0, $conv31 = 0, $conv317 = 0, $conv34 = 0, $conv346 = 0, $conv350 = 0, $conv352 = 0;
 var $conv356 = 0, $conv364 = 0, $conv374 = 0, $conv39 = 0, $conv398 = 0, $conv411 = 0, $conv415 = 0, $conv417 = 0, $conv421 = 0, $conv429 = 0, $conv439 = 0, $conv468 = 0, $conv472 = 0, $conv474 = 0, $conv478 = 0, $conv486 = 0, $conv49 = 0, $conv496 = 0, $conv7 = 0, $conv83 = 0;
 var $conv96 = 0, $count$0 = 0, $count$1 = 0, $count$2 = 0, $dec = 0, $inc = 0, $inc108 = 0, $inc116 = 0, $inc176 = 0, $inc184 = 0, $inc233 = 0, $inc241 = 0, $inc301 = 0, $inc309 = 0, $inc35 = 0, $inc358 = 0, $inc366 = 0, $inc41 = 0, $inc423 = 0, $inc431 = 0;
 var $inc480 = 0, $inc488 = 0, $len = 0, $len150 = 0, $len19 = 0, $len275 = 0, $len397 = 0, $len6 = 0, $len82 = 0, $max_count$1$ph = 0, $min_count$1$ph = 0, $n$0 = 0, $n$0$ph = 0, $nextlen$0$ph = 0, $or = 0, $or$cond = 0, $or101 = 0, $or169 = 0, $or226 = 0, $or294 = 0;
 var $or351 = 0, $or416 = 0, $or473 = 0, $pending300 = 0, $pending_buf302 = 0, $prevlen$0$ph = 0, $prevlen$0$ph$phi = 0, $shl = 0, $shl166 = 0, $shl223 = 0, $shl291 = 0, $shl348 = 0, $shl413 = 0, $shl470 = 0, $shl98 = 0, $shr113221 = 0, $shr123 = 0, $shr181219 = 0, $shr191 = 0, $shr223 = 0;
 var $shr238218 = 0, $shr248 = 0, $shr306215 = 0, $shr316 = 0, $shr363214 = 0, $shr373 = 0, $shr428211 = 0, $shr438 = 0, $shr48 = 0, $shr485210 = 0, $shr495 = 0, $storemerge209 = 0, $storemerge213 = 0, $storemerge217 = 0, $storemerge220 = 0, $storemerge222 = 0, $sub = 0, $sub122 = 0, $sub126 = 0, $sub153 = 0;
 var $sub190 = 0, $sub194 = 0, $sub219 = 0, $sub247 = 0, $sub278 = 0, $sub315 = 0, $sub319 = 0, $sub344 = 0, $sub372 = 0, $sub400 = 0, $sub437 = 0, $sub441 = 0, $sub466 = 0, $sub47 = 0, $sub494 = 0, $sub51 = 0, $sub85 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $len = ((($tree)) + 2|0);
 $0 = load2($len);
 $conv = $0&65535;
 $cmp = ($0<<16>>16)==(0);
 $$ = $cmp ? 3 : 4;
 $$224 = $cmp ? 138 : 7;
 $len275 = ((($s)) + 2754|0);
 $bi_valid277 = ((($s)) + 5820|0);
 $code286 = ((($s)) + 2752|0);
 $bi_buf292 = ((($s)) + 5816|0);
 $pending300 = ((($s)) + 20|0);
 $pending_buf302 = ((($s)) + 8|0);
 $len397 = ((($s)) + 2758|0);
 $code408 = ((($s)) + 2756|0);
 $len150 = ((($s)) + 2750|0);
 $code161 = ((($s)) + 2748|0);
 $max_count$1$ph = $$224;$min_count$1$ph = $$;$n$0$ph = 0;$nextlen$0$ph = $conv;$prevlen$0$ph = -1;
 L1: while(1) {
  $count$0 = 0;$n$0 = $n$0$ph;
  while(1) {
   $cmp2 = ($n$0|0)>($max_code|0);
   if ($cmp2) {
    break L1;
   }
   $add = (($n$0) + 1)|0;
   $len6 = (((($tree) + ($add<<2)|0)) + 2|0);
   $1 = load2($len6);
   $conv7 = $1&65535;
   $inc = (($count$0) + 1)|0;
   $cmp8 = ($inc|0)<($max_count$1$ph|0);
   $cmp10 = ($nextlen$0$ph|0)==($conv7|0);
   $or$cond = $cmp8 & $cmp10;
   if ($or$cond) {
    $count$0 = $inc;$n$0 = $add;
   } else {
    break;
   }
  }
  $cmp13 = ($inc|0)<($min_count$1$ph|0);
  do {
   if ($cmp13) {
    $len19 = (((((($s)) + 2684|0) + ($nextlen$0$ph<<2)|0)) + 2|0);
    $code = (((($s)) + 2684|0) + ($nextlen$0$ph<<2)|0);
    $$pre232 = load4($bi_valid277);
    $$pre233 = load2($bi_buf292);
    $3 = $$pre232;$5 = $$pre233;$count$1 = $inc;
    while(1) {
     $2 = load2($len19);
     $conv20 = $2&65535;
     $sub = (16 - ($conv20))|0;
     $cmp21 = ($3|0)>($sub|0);
     $4 = load2($code);
     $conv28 = $4&65535;
     $shl = $conv28 << $3;
     $conv30 = $5&65535;
     $or = $conv30 | $shl;
     $conv31 = $or&65535;
     store2($bi_buf292,$conv31);
     if ($cmp21) {
      $conv34 = $or&255;
      $6 = load4($pending300);
      $inc35 = (($6) + 1)|0;
      store4($pending300,$inc35);
      $7 = load4($pending_buf302);
      $arrayidx36 = (($7) + ($6)|0);
      store1($arrayidx36,$conv34);
      $8 = load2($bi_buf292);
      $shr223 = ($8&65535) >>> 8;
      $conv39 = $shr223&255;
      $9 = load4($pending300);
      $inc41 = (($9) + 1)|0;
      store4($pending300,$inc41);
      $10 = load4($pending_buf302);
      $arrayidx43 = (($10) + ($9)|0);
      store1($arrayidx43,$conv39);
      $11 = load4($bi_valid277);
      $sub47 = (16 - ($11))|0;
      $shr48 = $conv28 >>> $sub47;
      $conv49 = $shr48&65535;
      store2($bi_buf292,$conv49);
      $sub51 = (($conv20) + -16)|0;
      $add53 = (($sub51) + ($11))|0;
      $77 = $conv49;$storemerge222 = $add53;
     } else {
      $add67 = (($3) + ($conv20))|0;
      $77 = $conv31;$storemerge222 = $add67;
     }
     store4($bi_valid277,$storemerge222);
     $dec = (($count$1) + -1)|0;
     $cmp69 = ($dec|0)==(0);
     if ($cmp69) {
      break;
     } else {
      $3 = $storemerge222;$5 = $77;$count$1 = $dec;
     }
    }
   } else {
    $cmp72 = ($nextlen$0$ph|0)==(0);
    if (!($cmp72)) {
     $cmp75 = ($nextlen$0$ph|0)==($prevlen$0$ph|0);
     if ($cmp75) {
      $$pre = load4($bi_valid277);
      $$pre231 = load2($bi_buf292);
      $23 = $$pre;$25 = $$pre231;$count$2 = $inc;
     } else {
      $len82 = (((((($s)) + 2684|0) + ($nextlen$0$ph<<2)|0)) + 2|0);
      $12 = load2($len82);
      $conv83 = $12&65535;
      $13 = load4($bi_valid277);
      $sub85 = (16 - ($conv83))|0;
      $cmp86 = ($13|0)>($sub85|0);
      $code93 = (((($s)) + 2684|0) + ($nextlen$0$ph<<2)|0);
      $14 = load2($code93);
      $conv96 = $14&65535;
      $shl98 = $conv96 << $13;
      $15 = load2($bi_buf292);
      $conv100 = $15&65535;
      $or101 = $conv100 | $shl98;
      $conv102 = $or101&65535;
      store2($bi_buf292,$conv102);
      if ($cmp86) {
       $conv106 = $or101&255;
       $16 = load4($pending300);
       $inc108 = (($16) + 1)|0;
       store4($pending300,$inc108);
       $17 = load4($pending_buf302);
       $arrayidx110 = (($17) + ($16)|0);
       store1($arrayidx110,$conv106);
       $18 = load2($bi_buf292);
       $shr113221 = ($18&65535) >>> 8;
       $conv114 = $shr113221&255;
       $19 = load4($pending300);
       $inc116 = (($19) + 1)|0;
       store4($pending300,$inc116);
       $20 = load4($pending_buf302);
       $arrayidx118 = (($20) + ($19)|0);
       store1($arrayidx118,$conv114);
       $21 = load4($bi_valid277);
       $sub122 = (16 - ($21))|0;
       $shr123 = $conv96 >>> $sub122;
       $conv124 = $shr123&65535;
       store2($bi_buf292,$conv124);
       $sub126 = (($conv83) + -16)|0;
       $add128 = (($sub126) + ($21))|0;
       $78 = $conv124;$storemerge220 = $add128;
      } else {
       $add142 = (($13) + ($conv83))|0;
       $78 = $conv102;$storemerge220 = $add142;
      }
      store4($bi_valid277,$storemerge220);
      $23 = $storemerge220;$25 = $78;$count$2 = $count$0;
     }
     $22 = load2($len150);
     $conv151 = $22&65535;
     $sub153 = (16 - ($conv151))|0;
     $cmp154 = ($23|0)>($sub153|0);
     $24 = load2($code161);
     $conv164 = $24&65535;
     $shl166 = $conv164 << $23;
     $conv168 = $25&65535;
     $or169 = $conv168 | $shl166;
     $conv170 = $or169&65535;
     store2($bi_buf292,$conv170);
     if ($cmp154) {
      $conv174 = $or169&255;
      $26 = load4($pending300);
      $inc176 = (($26) + 1)|0;
      store4($pending300,$inc176);
      $27 = load4($pending_buf302);
      $arrayidx178 = (($27) + ($26)|0);
      store1($arrayidx178,$conv174);
      $28 = load2($bi_buf292);
      $shr181219 = ($28&65535) >>> 8;
      $conv182 = $shr181219&255;
      $29 = load4($pending300);
      $inc184 = (($29) + 1)|0;
      store4($pending300,$inc184);
      $30 = load4($pending_buf302);
      $arrayidx186 = (($30) + ($29)|0);
      store1($arrayidx186,$conv182);
      $31 = load4($bi_valid277);
      $sub190 = (16 - ($31))|0;
      $shr191 = $conv164 >>> $sub190;
      $conv192 = $shr191&65535;
      store2($bi_buf292,$conv192);
      $sub194 = (($conv151) + -16)|0;
      $add196 = (($sub194) + ($31))|0;
      $32 = $add196;$33 = $shr191;
     } else {
      $add210 = (($23) + ($conv151))|0;
      $32 = $add210;$33 = $or169;
     }
     store4($bi_valid277,$32);
     $cmp215 = ($32|0)>(14);
     $sub219 = (($count$2) + 65533)|0;
     $conv221 = $sub219 & 65535;
     $shl223 = $conv221 << $32;
     $conv225 = $33 & 65535;
     $or226 = $conv225 | $shl223;
     $conv227 = $or226&65535;
     store2($bi_buf292,$conv227);
     if ($cmp215) {
      $conv231 = $or226&255;
      $34 = load4($pending300);
      $inc233 = (($34) + 1)|0;
      store4($pending300,$inc233);
      $35 = load4($pending_buf302);
      $arrayidx235 = (($35) + ($34)|0);
      store1($arrayidx235,$conv231);
      $36 = load2($bi_buf292);
      $shr238218 = ($36&65535) >>> 8;
      $conv239 = $shr238218&255;
      $37 = load4($pending300);
      $inc241 = (($37) + 1)|0;
      store4($pending300,$inc241);
      $38 = load4($pending_buf302);
      $arrayidx243 = (($38) + ($37)|0);
      store1($arrayidx243,$conv239);
      $39 = load4($bi_valid277);
      $sub247 = (16 - ($39))|0;
      $shr248 = $conv221 >>> $sub247;
      $conv249 = $shr248&65535;
      store2($bi_buf292,$conv249);
      $add253 = (($39) + -14)|0;
      $storemerge217 = $add253;
     } else {
      $add265 = (($32) + 2)|0;
      $storemerge217 = $add265;
     }
     store4($bi_valid277,$storemerge217);
     break;
    }
    $cmp268 = ($inc|0)<(11);
    if ($cmp268) {
     $40 = load2($len275);
     $conv276 = $40&65535;
     $41 = load4($bi_valid277);
     $sub278 = (16 - ($conv276))|0;
     $cmp279 = ($41|0)>($sub278|0);
     $42 = load2($code286);
     $conv289 = $42&65535;
     $shl291 = $conv289 << $41;
     $43 = load2($bi_buf292);
     $conv293 = $43&65535;
     $or294 = $conv293 | $shl291;
     $conv295 = $or294&65535;
     store2($bi_buf292,$conv295);
     if ($cmp279) {
      $conv299 = $or294&255;
      $44 = load4($pending300);
      $inc301 = (($44) + 1)|0;
      store4($pending300,$inc301);
      $45 = load4($pending_buf302);
      $arrayidx303 = (($45) + ($44)|0);
      store1($arrayidx303,$conv299);
      $46 = load2($bi_buf292);
      $shr306215 = ($46&65535) >>> 8;
      $conv307 = $shr306215&255;
      $47 = load4($pending300);
      $inc309 = (($47) + 1)|0;
      store4($pending300,$inc309);
      $48 = load4($pending_buf302);
      $arrayidx311 = (($48) + ($47)|0);
      store1($arrayidx311,$conv307);
      $49 = load4($bi_valid277);
      $sub315 = (16 - ($49))|0;
      $shr316 = $conv289 >>> $sub315;
      $conv317 = $shr316&65535;
      store2($bi_buf292,$conv317);
      $sub319 = (($conv276) + -16)|0;
      $add321 = (($sub319) + ($49))|0;
      $50 = $add321;$51 = $shr316;
     } else {
      $add335 = (($41) + ($conv276))|0;
      $50 = $add335;$51 = $or294;
     }
     store4($bi_valid277,$50);
     $cmp340 = ($50|0)>(13);
     $sub344 = (($count$0) + 65534)|0;
     $conv346 = $sub344 & 65535;
     $shl348 = $conv346 << $50;
     $conv350 = $51 & 65535;
     $or351 = $conv350 | $shl348;
     $conv352 = $or351&65535;
     store2($bi_buf292,$conv352);
     if ($cmp340) {
      $conv356 = $or351&255;
      $52 = load4($pending300);
      $inc358 = (($52) + 1)|0;
      store4($pending300,$inc358);
      $53 = load4($pending_buf302);
      $arrayidx360 = (($53) + ($52)|0);
      store1($arrayidx360,$conv356);
      $54 = load2($bi_buf292);
      $shr363214 = ($54&65535) >>> 8;
      $conv364 = $shr363214&255;
      $55 = load4($pending300);
      $inc366 = (($55) + 1)|0;
      store4($pending300,$inc366);
      $56 = load4($pending_buf302);
      $arrayidx368 = (($56) + ($55)|0);
      store1($arrayidx368,$conv364);
      $57 = load4($bi_valid277);
      $sub372 = (16 - ($57))|0;
      $shr373 = $conv346 >>> $sub372;
      $conv374 = $shr373&65535;
      store2($bi_buf292,$conv374);
      $add378 = (($57) + -13)|0;
      $storemerge213 = $add378;
     } else {
      $add390 = (($50) + 3)|0;
      $storemerge213 = $add390;
     }
     store4($bi_valid277,$storemerge213);
     break;
    } else {
     $58 = load2($len397);
     $conv398 = $58&65535;
     $59 = load4($bi_valid277);
     $sub400 = (16 - ($conv398))|0;
     $cmp401 = ($59|0)>($sub400|0);
     $60 = load2($code408);
     $conv411 = $60&65535;
     $shl413 = $conv411 << $59;
     $61 = load2($bi_buf292);
     $conv415 = $61&65535;
     $or416 = $conv415 | $shl413;
     $conv417 = $or416&65535;
     store2($bi_buf292,$conv417);
     if ($cmp401) {
      $conv421 = $or416&255;
      $62 = load4($pending300);
      $inc423 = (($62) + 1)|0;
      store4($pending300,$inc423);
      $63 = load4($pending_buf302);
      $arrayidx425 = (($63) + ($62)|0);
      store1($arrayidx425,$conv421);
      $64 = load2($bi_buf292);
      $shr428211 = ($64&65535) >>> 8;
      $conv429 = $shr428211&255;
      $65 = load4($pending300);
      $inc431 = (($65) + 1)|0;
      store4($pending300,$inc431);
      $66 = load4($pending_buf302);
      $arrayidx433 = (($66) + ($65)|0);
      store1($arrayidx433,$conv429);
      $67 = load4($bi_valid277);
      $sub437 = (16 - ($67))|0;
      $shr438 = $conv411 >>> $sub437;
      $conv439 = $shr438&65535;
      store2($bi_buf292,$conv439);
      $sub441 = (($conv398) + -16)|0;
      $add443 = (($sub441) + ($67))|0;
      $68 = $add443;$69 = $shr438;
     } else {
      $add457 = (($59) + ($conv398))|0;
      $68 = $add457;$69 = $or416;
     }
     store4($bi_valid277,$68);
     $cmp462 = ($68|0)>(9);
     $sub466 = (($count$0) + 65526)|0;
     $conv468 = $sub466 & 65535;
     $shl470 = $conv468 << $68;
     $conv472 = $69 & 65535;
     $or473 = $conv472 | $shl470;
     $conv474 = $or473&65535;
     store2($bi_buf292,$conv474);
     if ($cmp462) {
      $conv478 = $or473&255;
      $70 = load4($pending300);
      $inc480 = (($70) + 1)|0;
      store4($pending300,$inc480);
      $71 = load4($pending_buf302);
      $arrayidx482 = (($71) + ($70)|0);
      store1($arrayidx482,$conv478);
      $72 = load2($bi_buf292);
      $shr485210 = ($72&65535) >>> 8;
      $conv486 = $shr485210&255;
      $73 = load4($pending300);
      $inc488 = (($73) + 1)|0;
      store4($pending300,$inc488);
      $74 = load4($pending_buf302);
      $arrayidx490 = (($74) + ($73)|0);
      store1($arrayidx490,$conv486);
      $75 = load4($bi_valid277);
      $sub494 = (16 - ($75))|0;
      $shr495 = $conv468 >>> $sub494;
      $conv496 = $shr495&65535;
      store2($bi_buf292,$conv496);
      $add500 = (($75) + -9)|0;
      $storemerge209 = $add500;
     } else {
      $add512 = (($68) + 7)|0;
      $storemerge209 = $add512;
     }
     store4($bi_valid277,$storemerge209);
     break;
    }
   }
  } while(0);
  $cmp518 = ($1<<16>>16)==(0);
  $$226 = $cmp10 ? 6 : 7;
  $76 = $cmp518 | $cmp10;
  $$$225 = $76 ? 3 : 4;
  $$$226 = $cmp518 ? 138 : $$226;
  $prevlen$0$ph$phi = $nextlen$0$ph;$max_count$1$ph = $$$226;$min_count$1$ph = $$$225;$n$0$ph = $add;$nextlen$0$ph = $conv7;$prevlen$0$ph = $prevlen$0$ph$phi;
 }
 return;
}
function _uncompress($dest,$destLen,$source,$sourceLen) {
 $dest = $dest|0;
 $destLen = $destLen|0;
 $source = $source|0;
 $sourceLen = $sourceLen|0;
 var $0 = 0, $1 = 0, $2 = 0, $avail_in = 0, $avail_out = 0, $call = 0, $call20 = 0, $call9 = 0, $cmp10 = 0, $cmp16 = 0, $cmp6 = 0, $next_out = 0, $retval$0 = 0, $stream = 0, $total_out = 0, $zalloc = 0, $zfree = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $stream = sp;
 store4($stream,$source);
 $avail_in = ((($stream)) + 4|0);
 store4($avail_in,$sourceLen);
 $next_out = ((($stream)) + 12|0);
 store4($next_out,$dest);
 $0 = load4($destLen);
 $avail_out = ((($stream)) + 16|0);
 store4($avail_out,$0);
 $zalloc = ((($stream)) + 32|0);
 store4($zalloc,0);
 $zfree = ((($stream)) + 36|0);
 store4($zfree,0);
 $call = (_inflateInit_($stream,14742,56)|0);
 $cmp6 = ($call|0)==(0);
 L1: do {
  if ($cmp6) {
   $call9 = (_inflate($stream,4)|0);
   $cmp10 = ($call9|0)==(1);
   if ($cmp10) {
    $total_out = ((($stream)) + 20|0);
    $2 = load4($total_out);
    store4($destLen,$2);
    $call20 = (_inflateEnd($stream)|0);
    $retval$0 = $call20;
    break;
   }
   (_inflateEnd($stream)|0);
   switch ($call9|0) {
   case 2:  {
    $retval$0 = -3;
    break L1;
    break;
   }
   case -5:  {
    $1 = load4($avail_in);
    $cmp16 = ($1|0)==(0);
    if ($cmp16) {
     $retval$0 = -3;
     break L1;
    }
    break;
   }
   default: {
   }
   }
   $retval$0 = $call9;
  } else {
   $retval$0 = $call;
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _zcalloc($opaque,$items,$size) {
 $opaque = $opaque|0;
 $items = $items|0;
 $size = $size|0;
 var $call = 0, $mul = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mul = Math_imul($size, $items)|0;
 $call = (_malloc($mul)|0);
 return ($call|0);
}
function _zcfree($opaque,$ptr) {
 $opaque = $opaque|0;
 $ptr = $ptr|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($ptr);
 return;
}
function _adler32($adler,$buf,$len) {
 $adler = $adler|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0;
 var $add$ptr = 0, $add$ptr175 = 0, $add113 = 0, $add114 = 0, $add117 = 0, $add118 = 0, $add121 = 0, $add122 = 0, $add125 = 0, $add126 = 0, $add129 = 0, $add130 = 0, $add133 = 0, $add134 = 0, $add137 = 0, $add138 = 0, $add141 = 0, $add142 = 0, $add145 = 0, $add146 = 0;
 var $add149 = 0, $add150 = 0, $add153 = 0, $add154 = 0, $add157 = 0, $add158 = 0, $add161 = 0, $add162 = 0, $add165 = 0, $add166 = 0, $add169 = 0, $add170 = 0, $add173 = 0, $add174 = 0, $add183 = 0, $add184 = 0, $add20 = 0, $add21 = 0, $add37 = 0, $add38 = 0;
 var $add41 = 0, $add42 = 0, $add45 = 0, $add46 = 0, $add49 = 0, $add5 = 0, $add50 = 0, $add53 = 0, $add54 = 0, $add57 = 0, $add58 = 0, $add61 = 0, $add62 = 0, $add65 = 0, $add66 = 0, $add69 = 0, $add70 = 0, $add73 = 0, $add74 = 0, $add77 = 0;
 var $add78 = 0, $add81 = 0, $add82 = 0, $add85 = 0, $add86 = 0, $add89 = 0, $add90 = 0, $add93 = 0, $add94 = 0, $add97 = 0, $add98 = 0, $adler$addr$1$lcssa = 0, $adler$addr$1169 = 0, $adler$addr$3$lcssa202210 = 0, $adler$addr$3191 = 0, $adler$addr$4 = 0, $adler$addr$5182 = 0, $adler$addr$6$lcssa = 0, $adler$addr$6175 = 0, $adler$addr$7 = 0;
 var $and1 = 0, $arrayidx115 = 0, $arrayidx119 = 0, $arrayidx123 = 0, $arrayidx127 = 0, $arrayidx131 = 0, $arrayidx135 = 0, $arrayidx139 = 0, $arrayidx143 = 0, $arrayidx147 = 0, $arrayidx151 = 0, $arrayidx155 = 0, $arrayidx159 = 0, $arrayidx163 = 0, $arrayidx167 = 0, $arrayidx171 = 0, $arrayidx39 = 0, $arrayidx43 = 0, $arrayidx47 = 0, $arrayidx51 = 0;
 var $arrayidx55 = 0, $arrayidx59 = 0, $arrayidx63 = 0, $arrayidx67 = 0, $arrayidx71 = 0, $arrayidx75 = 0, $arrayidx79 = 0, $arrayidx83 = 0, $arrayidx87 = 0, $arrayidx91 = 0, $arrayidx95 = 0, $buf$addr$0170 = 0, $buf$addr$1$lcssa203209 = 0, $buf$addr$1192 = 0, $buf$addr$2 = 0, $buf$addr$3183 = 0, $buf$addr$4176 = 0, $cmp = 0, $cmp107 = 0, $cmp107181 = 0;
 var $cmp12 = 0, $cmp16 = 0, $cmp2 = 0, $cmp22 = 0, $cmp31 = 0, $cmp31190 = 0, $cmp6 = 0, $conv = 0, $conv112 = 0, $conv116 = 0, $conv120 = 0, $conv124 = 0, $conv128 = 0, $conv132 = 0, $conv136 = 0, $conv140 = 0, $conv144 = 0, $conv148 = 0, $conv152 = 0, $conv156 = 0;
 var $conv160 = 0, $conv164 = 0, $conv168 = 0, $conv172 = 0, $conv182 = 0, $conv19 = 0, $conv36 = 0, $conv40 = 0, $conv44 = 0, $conv48 = 0, $conv52 = 0, $conv56 = 0, $conv60 = 0, $conv64 = 0, $conv68 = 0, $conv72 = 0, $conv76 = 0, $conv80 = 0, $conv84 = 0, $conv88 = 0;
 var $conv92 = 0, $conv96 = 0, $dec = 0, $dec178 = 0, $dec99 = 0, $incdec$ptr = 0, $incdec$ptr181 = 0, $len$addr$0171 = 0, $len$addr$1$lcssa204208 = 0, $len$addr$1193 = 0, $len$addr$2184 = 0, $len$addr$3177 = 0, $n$0 = 0, $or = 0, $or190 = 0, $or28 = 0, $rem = 0, $rem101 = 0, $rem102 = 0, $rem186 = 0;
 var $rem187 = 0, $retval$0 = 0, $scevgep = 0, $scevgep199 = 0, $shl = 0, $shl189 = 0, $shl27 = 0, $shr = 0, $sub = 0, $sub$add = 0, $sub110 = 0, $sub25 = 0, $sub25$adler$addr$1 = 0, $sub34 = 0, $sub9 = 0, $sum2$0 = 0, $sum2$1$lcssa = 0, $sum2$1172 = 0, $sum2$2$lcssa205207 = 0, $sum2$2194 = 0;
 var $sum2$3 = 0, $sum2$4185 = 0, $sum2$5$lcssa = 0, $sum2$5178 = 0, $sum2$6 = 0, $tobool = 0, $tobool100 = 0, $tobool104 = 0, $tobool168 = 0, $tobool179 = 0, $tobool179174 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $shr = $adler >>> 16;
 $and1 = $adler & 65535;
 $cmp = ($len|0)==(1);
 if ($cmp) {
  $0 = load1($buf);
  $conv = $0&255;
  $add = (($conv) + ($and1))|0;
  $cmp2 = ($add>>>0)>(65520);
  $sub = (($add) + -65521)|0;
  $sub$add = $cmp2 ? $sub : $add;
  $add5 = (($sub$add) + ($shr))|0;
  $cmp6 = ($add5>>>0)>(65520);
  $sub9 = (($add5) + 15)|0;
  $sum2$0 = $cmp6 ? $sub9 : $add5;
  $shl = $sum2$0 << 16;
  $or = $shl | $sub$add;
  $retval$0 = $or;
  return ($retval$0|0);
 }
 $cmp12 = ($buf|0)==(0|0);
 if ($cmp12) {
  $retval$0 = 1;
  return ($retval$0|0);
 }
 $cmp16 = ($len>>>0)<(16);
 if ($cmp16) {
  $tobool168 = ($len|0)==(0);
  if ($tobool168) {
   $adler$addr$1$lcssa = $and1;$sum2$1$lcssa = $shr;
  } else {
   $adler$addr$1169 = $and1;$buf$addr$0170 = $buf;$len$addr$0171 = $len;$sum2$1172 = $shr;
   while(1) {
    $dec = (($len$addr$0171) + -1)|0;
    $incdec$ptr = ((($buf$addr$0170)) + 1|0);
    $1 = load1($buf$addr$0170);
    $conv19 = $1&255;
    $add20 = (($conv19) + ($adler$addr$1169))|0;
    $add21 = (($add20) + ($sum2$1172))|0;
    $tobool = ($dec|0)==(0);
    if ($tobool) {
     $adler$addr$1$lcssa = $add20;$sum2$1$lcssa = $add21;
     break;
    } else {
     $adler$addr$1169 = $add20;$buf$addr$0170 = $incdec$ptr;$len$addr$0171 = $dec;$sum2$1172 = $add21;
    }
   }
  }
  $cmp22 = ($adler$addr$1$lcssa>>>0)>(65520);
  $sub25 = (($adler$addr$1$lcssa) + -65521)|0;
  $sub25$adler$addr$1 = $cmp22 ? $sub25 : $adler$addr$1$lcssa;
  $rem = (($sum2$1$lcssa>>>0) % 65521)&-1;
  $shl27 = $rem << 16;
  $or28 = $shl27 | $sub25$adler$addr$1;
  $retval$0 = $or28;
  return ($retval$0|0);
 }
 $cmp31190 = ($len>>>0)>(5551);
 if ($cmp31190) {
  $adler$addr$3191 = $and1;$buf$addr$1192 = $buf;$len$addr$1193 = $len;$sum2$2194 = $shr;
  while(1) {
   $sub34 = (($len$addr$1193) + -5552)|0;
   $adler$addr$4 = $adler$addr$3191;$buf$addr$2 = $buf$addr$1192;$n$0 = 347;$sum2$3 = $sum2$2194;
   while(1) {
    $2 = load1($buf$addr$2);
    $conv36 = $2&255;
    $add37 = (($conv36) + ($adler$addr$4))|0;
    $add38 = (($add37) + ($sum2$3))|0;
    $arrayidx39 = ((($buf$addr$2)) + 1|0);
    $3 = load1($arrayidx39);
    $conv40 = $3&255;
    $add41 = (($add37) + ($conv40))|0;
    $add42 = (($add38) + ($add41))|0;
    $arrayidx43 = ((($buf$addr$2)) + 2|0);
    $4 = load1($arrayidx43);
    $conv44 = $4&255;
    $add45 = (($add41) + ($conv44))|0;
    $add46 = (($add42) + ($add45))|0;
    $arrayidx47 = ((($buf$addr$2)) + 3|0);
    $5 = load1($arrayidx47);
    $conv48 = $5&255;
    $add49 = (($add45) + ($conv48))|0;
    $add50 = (($add46) + ($add49))|0;
    $arrayidx51 = ((($buf$addr$2)) + 4|0);
    $6 = load1($arrayidx51);
    $conv52 = $6&255;
    $add53 = (($add49) + ($conv52))|0;
    $add54 = (($add50) + ($add53))|0;
    $arrayidx55 = ((($buf$addr$2)) + 5|0);
    $7 = load1($arrayidx55);
    $conv56 = $7&255;
    $add57 = (($add53) + ($conv56))|0;
    $add58 = (($add54) + ($add57))|0;
    $arrayidx59 = ((($buf$addr$2)) + 6|0);
    $8 = load1($arrayidx59);
    $conv60 = $8&255;
    $add61 = (($add57) + ($conv60))|0;
    $add62 = (($add58) + ($add61))|0;
    $arrayidx63 = ((($buf$addr$2)) + 7|0);
    $9 = load1($arrayidx63);
    $conv64 = $9&255;
    $add65 = (($add61) + ($conv64))|0;
    $add66 = (($add62) + ($add65))|0;
    $arrayidx67 = ((($buf$addr$2)) + 8|0);
    $10 = load1($arrayidx67);
    $conv68 = $10&255;
    $add69 = (($add65) + ($conv68))|0;
    $add70 = (($add66) + ($add69))|0;
    $arrayidx71 = ((($buf$addr$2)) + 9|0);
    $11 = load1($arrayidx71);
    $conv72 = $11&255;
    $add73 = (($add69) + ($conv72))|0;
    $add74 = (($add70) + ($add73))|0;
    $arrayidx75 = ((($buf$addr$2)) + 10|0);
    $12 = load1($arrayidx75);
    $conv76 = $12&255;
    $add77 = (($add73) + ($conv76))|0;
    $add78 = (($add74) + ($add77))|0;
    $arrayidx79 = ((($buf$addr$2)) + 11|0);
    $13 = load1($arrayidx79);
    $conv80 = $13&255;
    $add81 = (($add77) + ($conv80))|0;
    $add82 = (($add78) + ($add81))|0;
    $arrayidx83 = ((($buf$addr$2)) + 12|0);
    $14 = load1($arrayidx83);
    $conv84 = $14&255;
    $add85 = (($add81) + ($conv84))|0;
    $add86 = (($add82) + ($add85))|0;
    $arrayidx87 = ((($buf$addr$2)) + 13|0);
    $15 = load1($arrayidx87);
    $conv88 = $15&255;
    $add89 = (($add85) + ($conv88))|0;
    $add90 = (($add86) + ($add89))|0;
    $arrayidx91 = ((($buf$addr$2)) + 14|0);
    $16 = load1($arrayidx91);
    $conv92 = $16&255;
    $add93 = (($add89) + ($conv92))|0;
    $add94 = (($add90) + ($add93))|0;
    $arrayidx95 = ((($buf$addr$2)) + 15|0);
    $17 = load1($arrayidx95);
    $conv96 = $17&255;
    $add97 = (($add93) + ($conv96))|0;
    $add98 = (($add94) + ($add97))|0;
    $add$ptr = ((($buf$addr$2)) + 16|0);
    $dec99 = (($n$0) + -1)|0;
    $tobool100 = ($dec99|0)==(0);
    if ($tobool100) {
     break;
    } else {
     $adler$addr$4 = $add97;$buf$addr$2 = $add$ptr;$n$0 = $dec99;$sum2$3 = $add98;
    }
   }
   $scevgep199 = ((($buf$addr$1192)) + 5552|0);
   $rem101 = (($add97>>>0) % 65521)&-1;
   $rem102 = (($add98>>>0) % 65521)&-1;
   $cmp31 = ($sub34>>>0)>(5551);
   if ($cmp31) {
    $adler$addr$3191 = $rem101;$buf$addr$1192 = $scevgep199;$len$addr$1193 = $sub34;$sum2$2194 = $rem102;
   } else {
    break;
   }
  }
  $tobool104 = ($sub34|0)==(0);
  if ($tobool104) {
   $adler$addr$7 = $rem101;$sum2$6 = $rem102;
  } else {
   $cmp107181 = ($sub34>>>0)>(15);
   if ($cmp107181) {
    $adler$addr$3$lcssa202210 = $rem101;$buf$addr$1$lcssa203209 = $scevgep199;$len$addr$1$lcssa204208 = $sub34;$sum2$2$lcssa205207 = $rem102;
    label = 14;
   } else {
    $adler$addr$6175 = $rem101;$buf$addr$4176 = $scevgep199;$len$addr$3177 = $sub34;$sum2$5178 = $rem102;
    label = 17;
   }
  }
 } else {
  $adler$addr$3$lcssa202210 = $and1;$buf$addr$1$lcssa203209 = $buf;$len$addr$1$lcssa204208 = $len;$sum2$2$lcssa205207 = $shr;
  label = 14;
 }
 if ((label|0) == 14) {
  $18 = (($len$addr$1$lcssa204208) + -16)|0;
  $19 = $18 & -16;
  $20 = (($19) + 16)|0;
  $adler$addr$5182 = $adler$addr$3$lcssa202210;$buf$addr$3183 = $buf$addr$1$lcssa203209;$len$addr$2184 = $len$addr$1$lcssa204208;$sum2$4185 = $sum2$2$lcssa205207;
  while(1) {
   $sub110 = (($len$addr$2184) + -16)|0;
   $22 = load1($buf$addr$3183);
   $conv112 = $22&255;
   $add113 = (($conv112) + ($adler$addr$5182))|0;
   $add114 = (($add113) + ($sum2$4185))|0;
   $arrayidx115 = ((($buf$addr$3183)) + 1|0);
   $23 = load1($arrayidx115);
   $conv116 = $23&255;
   $add117 = (($add113) + ($conv116))|0;
   $add118 = (($add114) + ($add117))|0;
   $arrayidx119 = ((($buf$addr$3183)) + 2|0);
   $24 = load1($arrayidx119);
   $conv120 = $24&255;
   $add121 = (($add117) + ($conv120))|0;
   $add122 = (($add118) + ($add121))|0;
   $arrayidx123 = ((($buf$addr$3183)) + 3|0);
   $25 = load1($arrayidx123);
   $conv124 = $25&255;
   $add125 = (($add121) + ($conv124))|0;
   $add126 = (($add122) + ($add125))|0;
   $arrayidx127 = ((($buf$addr$3183)) + 4|0);
   $26 = load1($arrayidx127);
   $conv128 = $26&255;
   $add129 = (($add125) + ($conv128))|0;
   $add130 = (($add126) + ($add129))|0;
   $arrayidx131 = ((($buf$addr$3183)) + 5|0);
   $27 = load1($arrayidx131);
   $conv132 = $27&255;
   $add133 = (($add129) + ($conv132))|0;
   $add134 = (($add130) + ($add133))|0;
   $arrayidx135 = ((($buf$addr$3183)) + 6|0);
   $28 = load1($arrayidx135);
   $conv136 = $28&255;
   $add137 = (($add133) + ($conv136))|0;
   $add138 = (($add134) + ($add137))|0;
   $arrayidx139 = ((($buf$addr$3183)) + 7|0);
   $29 = load1($arrayidx139);
   $conv140 = $29&255;
   $add141 = (($add137) + ($conv140))|0;
   $add142 = (($add138) + ($add141))|0;
   $arrayidx143 = ((($buf$addr$3183)) + 8|0);
   $30 = load1($arrayidx143);
   $conv144 = $30&255;
   $add145 = (($add141) + ($conv144))|0;
   $add146 = (($add142) + ($add145))|0;
   $arrayidx147 = ((($buf$addr$3183)) + 9|0);
   $31 = load1($arrayidx147);
   $conv148 = $31&255;
   $add149 = (($add145) + ($conv148))|0;
   $add150 = (($add146) + ($add149))|0;
   $arrayidx151 = ((($buf$addr$3183)) + 10|0);
   $32 = load1($arrayidx151);
   $conv152 = $32&255;
   $add153 = (($add149) + ($conv152))|0;
   $add154 = (($add150) + ($add153))|0;
   $arrayidx155 = ((($buf$addr$3183)) + 11|0);
   $33 = load1($arrayidx155);
   $conv156 = $33&255;
   $add157 = (($add153) + ($conv156))|0;
   $add158 = (($add154) + ($add157))|0;
   $arrayidx159 = ((($buf$addr$3183)) + 12|0);
   $34 = load1($arrayidx159);
   $conv160 = $34&255;
   $add161 = (($add157) + ($conv160))|0;
   $add162 = (($add158) + ($add161))|0;
   $arrayidx163 = ((($buf$addr$3183)) + 13|0);
   $35 = load1($arrayidx163);
   $conv164 = $35&255;
   $add165 = (($add161) + ($conv164))|0;
   $add166 = (($add162) + ($add165))|0;
   $arrayidx167 = ((($buf$addr$3183)) + 14|0);
   $36 = load1($arrayidx167);
   $conv168 = $36&255;
   $add169 = (($add165) + ($conv168))|0;
   $add170 = (($add166) + ($add169))|0;
   $arrayidx171 = ((($buf$addr$3183)) + 15|0);
   $37 = load1($arrayidx171);
   $conv172 = $37&255;
   $add173 = (($add169) + ($conv172))|0;
   $add174 = (($add170) + ($add173))|0;
   $add$ptr175 = ((($buf$addr$3183)) + 16|0);
   $cmp107 = ($sub110>>>0)>(15);
   if ($cmp107) {
    $adler$addr$5182 = $add173;$buf$addr$3183 = $add$ptr175;$len$addr$2184 = $sub110;$sum2$4185 = $add174;
   } else {
    break;
   }
  }
  $21 = (($18) - ($19))|0;
  $scevgep = (($buf$addr$1$lcssa203209) + ($20)|0);
  $tobool179174 = ($21|0)==(0);
  if ($tobool179174) {
   $adler$addr$6$lcssa = $add173;$sum2$5$lcssa = $add174;
   label = 18;
  } else {
   $adler$addr$6175 = $add173;$buf$addr$4176 = $scevgep;$len$addr$3177 = $21;$sum2$5178 = $add174;
   label = 17;
  }
 }
 if ((label|0) == 17) {
  while(1) {
   label = 0;
   $dec178 = (($len$addr$3177) + -1)|0;
   $incdec$ptr181 = ((($buf$addr$4176)) + 1|0);
   $38 = load1($buf$addr$4176);
   $conv182 = $38&255;
   $add183 = (($conv182) + ($adler$addr$6175))|0;
   $add184 = (($add183) + ($sum2$5178))|0;
   $tobool179 = ($dec178|0)==(0);
   if ($tobool179) {
    $adler$addr$6$lcssa = $add183;$sum2$5$lcssa = $add184;
    label = 18;
    break;
   } else {
    $adler$addr$6175 = $add183;$buf$addr$4176 = $incdec$ptr181;$len$addr$3177 = $dec178;$sum2$5178 = $add184;
    label = 17;
   }
  }
 }
 if ((label|0) == 18) {
  $rem186 = (($adler$addr$6$lcssa>>>0) % 65521)&-1;
  $rem187 = (($sum2$5$lcssa>>>0) % 65521)&-1;
  $adler$addr$7 = $rem186;$sum2$6 = $rem187;
 }
 $shl189 = $sum2$6 << 16;
 $or190 = $shl189 | $adler$addr$7;
 $retval$0 = $or190;
 return ($retval$0|0);
}
function _crc32($crc,$buf,$len) {
 $crc = $crc|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $and$i = 0;
 var $and102$i = 0, $and106$i = 0, $and114$i = 0, $and117$i = 0, $and12$i = 0, $and121$i = 0, $and134$i = 0, $and137$i = 0, $and141$i = 0, $and153$i = 0, $and16$i = 0, $and2$i = 0, $and24$i = 0, $and27$i = 0, $and31$i = 0, $and39$i = 0, $and42$i = 0, $and46$i = 0, $and54$i = 0, $and57$i = 0;
 var $and61$i = 0, $and69$i = 0, $and72$i = 0, $and76$i = 0, $and84$i = 0, $and87$i = 0, $and9$i = 0, $and91$i = 0, $and99$i = 0, $arrayidx$i = 0, $arrayidx10$i = 0, $arrayidx100$i = 0, $arrayidx103$i = 0, $arrayidx107$i = 0, $arrayidx110$i = 0, $arrayidx115$i = 0, $arrayidx118$i = 0, $arrayidx122$i = 0, $arrayidx125$i = 0, $arrayidx13$i = 0;
 var $arrayidx135$i = 0, $arrayidx138$i = 0, $arrayidx142$i = 0, $arrayidx145$i = 0, $arrayidx154$i = 0, $arrayidx17$i = 0, $arrayidx20$i = 0, $arrayidx25$i = 0, $arrayidx28$i = 0, $arrayidx32$i = 0, $arrayidx35$i = 0, $arrayidx40$i = 0, $arrayidx43$i = 0, $arrayidx47$i = 0, $arrayidx50$i = 0, $arrayidx55$i = 0, $arrayidx58$i = 0, $arrayidx62$i = 0, $arrayidx65$i = 0, $arrayidx70$i = 0;
 var $arrayidx73$i = 0, $arrayidx77$i = 0, $arrayidx80$i = 0, $arrayidx85$i = 0, $arrayidx88$i = 0, $arrayidx92$i = 0, $arrayidx95$i = 0, $buf$addr$086$i = 0, $buf$addr$1$i = 0, $buf4$0$lcssa$i = 0, $buf4$081$i = 0, $buf4$1$lcssa$i = 0, $buf4$175$i = 0, $c$0$masked$i = 0, $c$088$i = 0, $c$1$lcssa$i = 0, $c$180$i = 0, $c$2$lcssa$i = 0, $c$274$i = 0, $c$3$i = 0;
 var $c$3$masked$i = 0, $c$4$i = 0, $cmp = 0, $cmp$i = 0, $cmp129$i = 0, $cmp12972$i = 0, $cmp78$i = 0, $conv$i = 0, $conv151$i = 0, $dec$i = 0, $dec157$i = 0, $incdec$ptr$i = 0, $incdec$ptr112$i = 0, $incdec$ptr132$i = 0, $incdec$ptr150$i = 0, $incdec$ptr22$i = 0, $incdec$ptr37$i = 0, $incdec$ptr52$i = 0, $incdec$ptr67$i = 0, $incdec$ptr7$i = 0;
 var $incdec$ptr82$i = 0, $incdec$ptr97$i = 0, $len$addr$087$i = 0, $len$addr$1$lcssa$i = 0, $len$addr$179$i = 0, $len$addr$2$lcssa$i = 0, $len$addr$273$i = 0, $len$addr$3$i = 0, $neg$i = 0, $neg159$i = 0, $retval$1 = 0, $scevgep$i = 0, $scevgep95$i = 0, $shr$i = 0, $shr101$i = 0, $shr105$i = 0, $shr109$i = 0, $shr11$i = 0, $shr116$i = 0, $shr120$i = 0;
 var $shr124$i = 0, $shr136$i = 0, $shr140$i = 0, $shr144$i = 0, $shr15$i = 0, $shr155$i = 0, $shr19$i = 0, $shr26$i = 0, $shr30$i = 0, $shr34$i = 0, $shr41$i = 0, $shr45$i = 0, $shr49$i = 0, $shr56$i = 0, $shr60$i = 0, $shr64$i = 0, $shr71$i = 0, $shr75$i = 0, $shr79$i = 0, $shr86$i = 0;
 var $shr90$i = 0, $shr94$i = 0, $sub$i = 0, $sub147$i = 0, $tobool$i = 0, $tobool1$i = 0, $tobool149$i = 0, $tobool158$i = 0, $tobool85$i = 0, $xor104$i = 0, $xor108$i = 0, $xor111$i = 0, $xor113$i = 0, $xor119$i = 0, $xor123$i = 0, $xor126$i = 0, $xor133$i = 0, $xor139$i = 0, $xor14$i = 0, $xor143$i = 0;
 var $xor146$i = 0, $xor156$i = 0, $xor18$i = 0, $xor21$i = 0, $xor23$i = 0, $xor29$i = 0, $xor3$i = 0, $xor33$i = 0, $xor36$i = 0, $xor38$i = 0, $xor44$i = 0, $xor48$i = 0, $xor51$i = 0, $xor53$i = 0, $xor59$i = 0, $xor63$i = 0, $xor66$i = 0, $xor68$i = 0, $xor74$i = 0, $xor78$i = 0;
 var $xor8$i = 0, $xor81$i = 0, $xor83$i = 0, $xor89$i = 0, $xor93$i = 0, $xor96$i = 0, $xor98$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($buf|0)==(0|0);
 if ($cmp) {
  $retval$1 = 0;
  return ($retval$1|0);
 }
 $neg$i = $crc ^ -1;
 $tobool85$i = ($len|0)==(0);
 L4: do {
  if ($tobool85$i) {
   $c$4$i = $neg$i;
  } else {
   $buf$addr$086$i = $buf;$c$088$i = $neg$i;$len$addr$087$i = $len;
   while(1) {
    $0 = $buf$addr$086$i;
    $and$i = $0 & 3;
    $tobool1$i = ($and$i|0)==(0);
    if ($tobool1$i) {
     break;
    }
    $incdec$ptr$i = ((($buf$addr$086$i)) + 1|0);
    $1 = load1($buf$addr$086$i);
    $conv$i = $1&255;
    $c$0$masked$i = $c$088$i & 255;
    $and2$i = $conv$i ^ $c$0$masked$i;
    $arrayidx$i = (1792 + ($and2$i<<2)|0);
    $2 = load4($arrayidx$i);
    $shr$i = $c$088$i >>> 8;
    $xor3$i = $2 ^ $shr$i;
    $dec$i = (($len$addr$087$i) + -1)|0;
    $tobool$i = ($dec$i|0)==(0);
    if ($tobool$i) {
     $c$4$i = $xor3$i;
     break L4;
    } else {
     $buf$addr$086$i = $incdec$ptr$i;$c$088$i = $xor3$i;$len$addr$087$i = $dec$i;
    }
   }
   $cmp78$i = ($len$addr$087$i>>>0)>(31);
   if ($cmp78$i) {
    $3 = (($len$addr$087$i) + -32)|0;
    $4 = $3 & -32;
    $5 = (($4) + 32)|0;
    $scevgep95$i = (($buf$addr$086$i) + ($5)|0);
    $buf4$081$i = $buf$addr$086$i;$c$180$i = $c$088$i;$len$addr$179$i = $len$addr$087$i;
    while(1) {
     $incdec$ptr7$i = ((($buf4$081$i)) + 4|0);
     $10 = load4($buf4$081$i);
     $xor8$i = $10 ^ $c$180$i;
     $and9$i = $xor8$i & 255;
     $arrayidx10$i = (4864 + ($and9$i<<2)|0);
     $11 = load4($arrayidx10$i);
     $shr11$i = $xor8$i >>> 8;
     $and12$i = $shr11$i & 255;
     $arrayidx13$i = (3840 + ($and12$i<<2)|0);
     $12 = load4($arrayidx13$i);
     $xor14$i = $12 ^ $11;
     $shr15$i = $xor8$i >>> 16;
     $and16$i = $shr15$i & 255;
     $arrayidx17$i = (2816 + ($and16$i<<2)|0);
     $13 = load4($arrayidx17$i);
     $xor18$i = $xor14$i ^ $13;
     $shr19$i = $xor8$i >>> 24;
     $arrayidx20$i = (1792 + ($shr19$i<<2)|0);
     $14 = load4($arrayidx20$i);
     $xor21$i = $xor18$i ^ $14;
     $incdec$ptr22$i = ((($buf4$081$i)) + 8|0);
     $15 = load4($incdec$ptr7$i);
     $xor23$i = $xor21$i ^ $15;
     $and24$i = $xor23$i & 255;
     $arrayidx25$i = (4864 + ($and24$i<<2)|0);
     $16 = load4($arrayidx25$i);
     $shr26$i = $xor23$i >>> 8;
     $and27$i = $shr26$i & 255;
     $arrayidx28$i = (3840 + ($and27$i<<2)|0);
     $17 = load4($arrayidx28$i);
     $xor29$i = $17 ^ $16;
     $shr30$i = $xor23$i >>> 16;
     $and31$i = $shr30$i & 255;
     $arrayidx32$i = (2816 + ($and31$i<<2)|0);
     $18 = load4($arrayidx32$i);
     $xor33$i = $xor29$i ^ $18;
     $shr34$i = $xor23$i >>> 24;
     $arrayidx35$i = (1792 + ($shr34$i<<2)|0);
     $19 = load4($arrayidx35$i);
     $xor36$i = $xor33$i ^ $19;
     $incdec$ptr37$i = ((($buf4$081$i)) + 12|0);
     $20 = load4($incdec$ptr22$i);
     $xor38$i = $xor36$i ^ $20;
     $and39$i = $xor38$i & 255;
     $arrayidx40$i = (4864 + ($and39$i<<2)|0);
     $21 = load4($arrayidx40$i);
     $shr41$i = $xor38$i >>> 8;
     $and42$i = $shr41$i & 255;
     $arrayidx43$i = (3840 + ($and42$i<<2)|0);
     $22 = load4($arrayidx43$i);
     $xor44$i = $22 ^ $21;
     $shr45$i = $xor38$i >>> 16;
     $and46$i = $shr45$i & 255;
     $arrayidx47$i = (2816 + ($and46$i<<2)|0);
     $23 = load4($arrayidx47$i);
     $xor48$i = $xor44$i ^ $23;
     $shr49$i = $xor38$i >>> 24;
     $arrayidx50$i = (1792 + ($shr49$i<<2)|0);
     $24 = load4($arrayidx50$i);
     $xor51$i = $xor48$i ^ $24;
     $incdec$ptr52$i = ((($buf4$081$i)) + 16|0);
     $25 = load4($incdec$ptr37$i);
     $xor53$i = $xor51$i ^ $25;
     $and54$i = $xor53$i & 255;
     $arrayidx55$i = (4864 + ($and54$i<<2)|0);
     $26 = load4($arrayidx55$i);
     $shr56$i = $xor53$i >>> 8;
     $and57$i = $shr56$i & 255;
     $arrayidx58$i = (3840 + ($and57$i<<2)|0);
     $27 = load4($arrayidx58$i);
     $xor59$i = $27 ^ $26;
     $shr60$i = $xor53$i >>> 16;
     $and61$i = $shr60$i & 255;
     $arrayidx62$i = (2816 + ($and61$i<<2)|0);
     $28 = load4($arrayidx62$i);
     $xor63$i = $xor59$i ^ $28;
     $shr64$i = $xor53$i >>> 24;
     $arrayidx65$i = (1792 + ($shr64$i<<2)|0);
     $29 = load4($arrayidx65$i);
     $xor66$i = $xor63$i ^ $29;
     $incdec$ptr67$i = ((($buf4$081$i)) + 20|0);
     $30 = load4($incdec$ptr52$i);
     $xor68$i = $xor66$i ^ $30;
     $and69$i = $xor68$i & 255;
     $arrayidx70$i = (4864 + ($and69$i<<2)|0);
     $31 = load4($arrayidx70$i);
     $shr71$i = $xor68$i >>> 8;
     $and72$i = $shr71$i & 255;
     $arrayidx73$i = (3840 + ($and72$i<<2)|0);
     $32 = load4($arrayidx73$i);
     $xor74$i = $32 ^ $31;
     $shr75$i = $xor68$i >>> 16;
     $and76$i = $shr75$i & 255;
     $arrayidx77$i = (2816 + ($and76$i<<2)|0);
     $33 = load4($arrayidx77$i);
     $xor78$i = $xor74$i ^ $33;
     $shr79$i = $xor68$i >>> 24;
     $arrayidx80$i = (1792 + ($shr79$i<<2)|0);
     $34 = load4($arrayidx80$i);
     $xor81$i = $xor78$i ^ $34;
     $incdec$ptr82$i = ((($buf4$081$i)) + 24|0);
     $35 = load4($incdec$ptr67$i);
     $xor83$i = $xor81$i ^ $35;
     $and84$i = $xor83$i & 255;
     $arrayidx85$i = (4864 + ($and84$i<<2)|0);
     $36 = load4($arrayidx85$i);
     $shr86$i = $xor83$i >>> 8;
     $and87$i = $shr86$i & 255;
     $arrayidx88$i = (3840 + ($and87$i<<2)|0);
     $37 = load4($arrayidx88$i);
     $xor89$i = $37 ^ $36;
     $shr90$i = $xor83$i >>> 16;
     $and91$i = $shr90$i & 255;
     $arrayidx92$i = (2816 + ($and91$i<<2)|0);
     $38 = load4($arrayidx92$i);
     $xor93$i = $xor89$i ^ $38;
     $shr94$i = $xor83$i >>> 24;
     $arrayidx95$i = (1792 + ($shr94$i<<2)|0);
     $39 = load4($arrayidx95$i);
     $xor96$i = $xor93$i ^ $39;
     $incdec$ptr97$i = ((($buf4$081$i)) + 28|0);
     $40 = load4($incdec$ptr82$i);
     $xor98$i = $xor96$i ^ $40;
     $and99$i = $xor98$i & 255;
     $arrayidx100$i = (4864 + ($and99$i<<2)|0);
     $41 = load4($arrayidx100$i);
     $shr101$i = $xor98$i >>> 8;
     $and102$i = $shr101$i & 255;
     $arrayidx103$i = (3840 + ($and102$i<<2)|0);
     $42 = load4($arrayidx103$i);
     $xor104$i = $42 ^ $41;
     $shr105$i = $xor98$i >>> 16;
     $and106$i = $shr105$i & 255;
     $arrayidx107$i = (2816 + ($and106$i<<2)|0);
     $43 = load4($arrayidx107$i);
     $xor108$i = $xor104$i ^ $43;
     $shr109$i = $xor98$i >>> 24;
     $arrayidx110$i = (1792 + ($shr109$i<<2)|0);
     $44 = load4($arrayidx110$i);
     $xor111$i = $xor108$i ^ $44;
     $incdec$ptr112$i = ((($buf4$081$i)) + 32|0);
     $45 = load4($incdec$ptr97$i);
     $xor113$i = $xor111$i ^ $45;
     $and114$i = $xor113$i & 255;
     $arrayidx115$i = (4864 + ($and114$i<<2)|0);
     $46 = load4($arrayidx115$i);
     $shr116$i = $xor113$i >>> 8;
     $and117$i = $shr116$i & 255;
     $arrayidx118$i = (3840 + ($and117$i<<2)|0);
     $47 = load4($arrayidx118$i);
     $xor119$i = $47 ^ $46;
     $shr120$i = $xor113$i >>> 16;
     $and121$i = $shr120$i & 255;
     $arrayidx122$i = (2816 + ($and121$i<<2)|0);
     $48 = load4($arrayidx122$i);
     $xor123$i = $xor119$i ^ $48;
     $shr124$i = $xor113$i >>> 24;
     $arrayidx125$i = (1792 + ($shr124$i<<2)|0);
     $49 = load4($arrayidx125$i);
     $xor126$i = $xor123$i ^ $49;
     $sub$i = (($len$addr$179$i) + -32)|0;
     $cmp$i = ($sub$i>>>0)>(31);
     if ($cmp$i) {
      $buf4$081$i = $incdec$ptr112$i;$c$180$i = $xor126$i;$len$addr$179$i = $sub$i;
     } else {
      break;
     }
    }
    $6 = (($3) - ($4))|0;
    $buf4$0$lcssa$i = $scevgep95$i;$c$1$lcssa$i = $xor126$i;$len$addr$1$lcssa$i = $6;
   } else {
    $buf4$0$lcssa$i = $buf$addr$086$i;$c$1$lcssa$i = $c$088$i;$len$addr$1$lcssa$i = $len$addr$087$i;
   }
   $cmp12972$i = ($len$addr$1$lcssa$i>>>0)>(3);
   if ($cmp12972$i) {
    $7 = (($len$addr$1$lcssa$i) + -4)|0;
    $8 = $7 >>> 2;
    $9 = (($8) + 1)|0;
    $buf4$175$i = $buf4$0$lcssa$i;$c$274$i = $c$1$lcssa$i;$len$addr$273$i = $len$addr$1$lcssa$i;
    while(1) {
     $incdec$ptr132$i = ((($buf4$175$i)) + 4|0);
     $50 = load4($buf4$175$i);
     $xor133$i = $50 ^ $c$274$i;
     $and134$i = $xor133$i & 255;
     $arrayidx135$i = (4864 + ($and134$i<<2)|0);
     $51 = load4($arrayidx135$i);
     $shr136$i = $xor133$i >>> 8;
     $and137$i = $shr136$i & 255;
     $arrayidx138$i = (3840 + ($and137$i<<2)|0);
     $52 = load4($arrayidx138$i);
     $xor139$i = $52 ^ $51;
     $shr140$i = $xor133$i >>> 16;
     $and141$i = $shr140$i & 255;
     $arrayidx142$i = (2816 + ($and141$i<<2)|0);
     $53 = load4($arrayidx142$i);
     $xor143$i = $xor139$i ^ $53;
     $shr144$i = $xor133$i >>> 24;
     $arrayidx145$i = (1792 + ($shr144$i<<2)|0);
     $54 = load4($arrayidx145$i);
     $xor146$i = $xor143$i ^ $54;
     $sub147$i = (($len$addr$273$i) + -4)|0;
     $cmp129$i = ($sub147$i>>>0)>(3);
     if ($cmp129$i) {
      $buf4$175$i = $incdec$ptr132$i;$c$274$i = $xor146$i;$len$addr$273$i = $sub147$i;
     } else {
      break;
     }
    }
    $55 = $8 << 2;
    $scevgep$i = (($buf4$0$lcssa$i) + ($9<<2)|0);
    $56 = (($7) - ($55))|0;
    $buf4$1$lcssa$i = $scevgep$i;$c$2$lcssa$i = $xor146$i;$len$addr$2$lcssa$i = $56;
   } else {
    $buf4$1$lcssa$i = $buf4$0$lcssa$i;$c$2$lcssa$i = $c$1$lcssa$i;$len$addr$2$lcssa$i = $len$addr$1$lcssa$i;
   }
   $tobool149$i = ($len$addr$2$lcssa$i|0)==(0);
   if ($tobool149$i) {
    $c$4$i = $c$2$lcssa$i;
   } else {
    $buf$addr$1$i = $buf4$1$lcssa$i;$c$3$i = $c$2$lcssa$i;$len$addr$3$i = $len$addr$2$lcssa$i;
    while(1) {
     $incdec$ptr150$i = ((($buf$addr$1$i)) + 1|0);
     $57 = load1($buf$addr$1$i);
     $conv151$i = $57&255;
     $c$3$masked$i = $c$3$i & 255;
     $and153$i = $conv151$i ^ $c$3$masked$i;
     $arrayidx154$i = (1792 + ($and153$i<<2)|0);
     $58 = load4($arrayidx154$i);
     $shr155$i = $c$3$i >>> 8;
     $xor156$i = $58 ^ $shr155$i;
     $dec157$i = (($len$addr$3$i) + -1)|0;
     $tobool158$i = ($dec157$i|0)==(0);
     if ($tobool158$i) {
      $c$4$i = $xor156$i;
      break;
     } else {
      $buf$addr$1$i = $incdec$ptr150$i;$c$3$i = $xor156$i;$len$addr$3$i = $dec157$i;
     }
    }
   }
  }
 } while(0);
 $neg159$i = $c$4$i ^ -1;
 $retval$1 = $neg159$i;
 return ($retval$1|0);
}
function _inflateInit2_($strm,$windowBits,$version,$stream_size) {
 $strm = $strm|0;
 $windowBits = $windowBits|0;
 $version = $version|0;
 $stream_size = $stream_size|0;
 var $$pre$i = 0, $$pre23$i = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add$i = 0, $adler$i$i = 0, $and$i = 0, $and$windowBits$i = 0;
 var $arraydecay$i$i = 0, $back$i$i = 0, $bits$i$i = 0, $call = 0, $cmp = 0, $cmp11 = 0, $cmp15$i = 0, $cmp16 = 0, $cmp17$i = 0, $cmp2 = 0, $cmp2$i$i = 0, $cmp23 = 0, $cmp4$i = 0, $cmp5 = 0, $cmp6$i = 0, $cmp7 = 0, $distcode$i$i = 0, $dmax$i$i = 0, $havedict$i$i = 0, $head$i$i = 0;
 var $hold$i$i = 0, $last$i$i = 0, $lencode$i$i = 0, $msg = 0, $next$i$i = 0, $opaque = 0, $opaque22 = 0, $or$cond = 0, $or$cond$i = 0, $retval$0 = 0, $sane$i$i = 0, $shr$i = 0, $state27 = 0, $sub$i = 0, $tobool$i = 0, $total$i$i = 0, $total_in$i$i = 0, $total_out$i$i = 0, $whave$i$i = 0, $window = 0;
 var $window$i = 0, $windowBits$addr$0$i = 0, $wnext$i$i = 0, $wrap$0$i = 0, $wrap22$i = 0, $wrap2224$i = 0, $wsize$i$i = 0, $zalloc = 0, $zfree = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($version|0)==(0|0);
 if ($cmp) {
  $retval$0 = -6;
  return ($retval$0|0);
 }
 $0 = load1($version);
 $cmp2 = ($0<<24>>24)!=(49);
 $cmp5 = ($stream_size|0)!=(56);
 $or$cond = $cmp5 | $cmp2;
 if ($or$cond) {
  $retval$0 = -6;
  return ($retval$0|0);
 }
 $cmp7 = ($strm|0)==(0|0);
 if ($cmp7) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $msg = ((($strm)) + 24|0);
 store4($msg,0);
 $zalloc = ((($strm)) + 32|0);
 $1 = load4($zalloc);
 $cmp11 = ($1|0)==(0|0);
 if ($cmp11) {
  store4($zalloc,3);
  $opaque = ((($strm)) + 40|0);
  store4($opaque,0);
  $4 = 3;
 } else {
  $4 = $1;
 }
 $zfree = ((($strm)) + 36|0);
 $2 = load4($zfree);
 $cmp16 = ($2|0)==(0|0);
 if ($cmp16) {
  store4($zfree,1);
 }
 $opaque22 = ((($strm)) + 40|0);
 $3 = load4($opaque22);
 $call = (FUNCTION_TABLE_iiii[$4 & 7]($3,1,7116)|0);
 $cmp23 = ($call|0)==(0|0);
 if ($cmp23) {
  $retval$0 = -4;
  return ($retval$0|0);
 }
 $state27 = ((($strm)) + 28|0);
 store4($state27,$call);
 $window = ((($call)) + 52|0);
 store4($window,0);
 $cmp4$i = ($windowBits|0)<(0);
 if ($cmp4$i) {
  $sub$i = (0 - ($windowBits))|0;
  $windowBits$addr$0$i = $sub$i;$wrap$0$i = 0;
 } else {
  $shr$i = $windowBits >> 4;
  $add$i = (($shr$i) + 1)|0;
  $cmp6$i = ($windowBits|0)<(48);
  $and$i = $windowBits & 15;
  $and$windowBits$i = $cmp6$i ? $and$i : $windowBits;
  $windowBits$addr$0$i = $and$windowBits$i;$wrap$0$i = $add$i;
 }
 $tobool$i = ($windowBits$addr$0$i|0)==(0);
 $5 = $windowBits$addr$0$i & -8;
 $6 = ($5|0)==(8);
 $or$cond$i = $tobool$i | $6;
 do {
  if ($or$cond$i) {
   $window$i = ((($call)) + 52|0);
   $7 = load4($window$i);
   $cmp15$i = ($7|0)==(0|0);
   $$pre23$i = ((($call)) + 36|0);
   if ($cmp15$i) {
    label = 15;
   } else {
    $8 = load4($$pre23$i);
    $cmp17$i = ($8|0)==($windowBits$addr$0$i|0);
    if ($cmp17$i) {
     label = 15;
    } else {
     $9 = load4($zfree);
     $10 = load4($opaque22);
     FUNCTION_TABLE_vii[$9 & 1]($10,$7);
     store4($window$i,0);
     $$pre$i = load4($state27);
     $wrap22$i = ((($call)) + 8|0);
     store4($wrap22$i,$wrap$0$i);
     store4($$pre23$i,$windowBits$addr$0$i);
     $cmp2$i$i = ($$pre$i|0)==(0|0);
     if ($cmp2$i$i) {
      break;
     } else {
      $11 = $$pre$i;
     }
    }
   }
   if ((label|0) == 15) {
    $wrap2224$i = ((($call)) + 8|0);
    store4($wrap2224$i,$wrap$0$i);
    store4($$pre23$i,$windowBits$addr$0$i);
    $11 = $call;
   }
   $total$i$i = ((($11)) + 28|0);
   store4($total$i$i,0);
   $total_out$i$i = ((($strm)) + 20|0);
   store4($total_out$i$i,0);
   $total_in$i$i = ((($strm)) + 8|0);
   store4($total_in$i$i,0);
   store4($msg,0);
   $adler$i$i = ((($strm)) + 48|0);
   store4($adler$i$i,1);
   store4($11,0);
   $last$i$i = ((($11)) + 4|0);
   store4($last$i$i,0);
   $havedict$i$i = ((($11)) + 12|0);
   store4($havedict$i$i,0);
   $dmax$i$i = ((($11)) + 20|0);
   store4($dmax$i$i,32768);
   $head$i$i = ((($11)) + 32|0);
   store4($head$i$i,0);
   $wsize$i$i = ((($11)) + 40|0);
   store4($wsize$i$i,0);
   $whave$i$i = ((($11)) + 44|0);
   store4($whave$i$i,0);
   $wnext$i$i = ((($11)) + 48|0);
   store4($wnext$i$i,0);
   $hold$i$i = ((($11)) + 56|0);
   store4($hold$i$i,0);
   $bits$i$i = ((($11)) + 60|0);
   store4($bits$i$i,0);
   $arraydecay$i$i = ((($11)) + 1328|0);
   $next$i$i = ((($11)) + 108|0);
   store4($next$i$i,$arraydecay$i$i);
   $distcode$i$i = ((($11)) + 80|0);
   store4($distcode$i$i,$arraydecay$i$i);
   $lencode$i$i = ((($11)) + 76|0);
   store4($lencode$i$i,$arraydecay$i$i);
   $sane$i$i = ((($11)) + 7104|0);
   store4($sane$i$i,1);
   $back$i$i = ((($11)) + 7108|0);
   store4($back$i$i,-1);
   $retval$0 = 0;
   return ($retval$0|0);
  }
 } while(0);
 $12 = load4($zfree);
 $13 = load4($opaque22);
 FUNCTION_TABLE_vii[$12 & 1]($13,$call);
 store4($state27,0);
 $retval$0 = -2;
 return ($retval$0|0);
}
function _inflateInit_($strm,$version,$stream_size) {
 $strm = $strm|0;
 $version = $version|0;
 $stream_size = $stream_size|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_inflateInit2_($strm,15,$version,$stream_size)|0);
 return ($call|0);
}
function _inflate($strm,$flush) {
 $strm = $strm|0;
 $flush = $flush|0;
 var $$copy$7 = 0, $$lcssa = 0, $$ph = 0, $$pr874$pre = 0, $$pre = 0, $$pre2014 = 0, $$pre2015 = 0, $$pre2016 = 0, $$pre2017 = 0, $$pre2018 = 0, $$pre2021 = 0, $$pre2022 = 0, $$pre2023 = 0, $$pre2024 = 0, $$pre2025 = 0, $$pre2026 = 0, $$pre2027 = 0, $$ret$8 = 0, $0 = 0, $1 = 0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0;
 var $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0;
 var $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0;
 var $172 = 0, $173 = 0, $174 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0;
 var $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0;
 var $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0;
 var $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0;
 var $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $add = 0, $add$ptr = 0, $add$ptr1182 = 0, $add$ptr1599 = 0, $add$ptr1604 = 0, $add$ptr1614 = 0, $add$ptr1682 = 0;
 var $add$ptr1814 = 0, $add$ptr384 = 0, $add$ptr441 = 0, $add$ptr505 = 0, $add$ptr768 = 0, $add$ptr770 = 0, $add1027 = 0, $add1043 = 0, $add1056 = 0, $add1057 = 0, $add1073 = 0, $add1084 = 0, $add1097 = 0, $add1098 = 0, $add1114 = 0, $add1123 = 0, $add1126 = 0, $add119 = 0, $add120 = 0, $add1255 = 0;
 var $add1256 = 0, $add1276 = 0, $add1283 = 0, $add1283$lcssa = 0, $add12831478 = 0, $add1290 = 0, $add12901482 = 0, $add1304 = 0, $add1305 = 0, $add1335 = 0, $add1386 = 0, $add1387 = 0, $add1398 = 0, $add1408 = 0, $add1435 = 0, $add1436 = 0, $add1453 = 0, $add1460 = 0, $add1460$lcssa = 0, $add14601534 = 0;
 var $add1467 = 0, $add14671538 = 0, $add1481 = 0, $add1482 = 0, $add1498 = 0, $add1512 = 0, $add1547 = 0, $add1548 = 0, $add1559 = 0, $add1569 = 0, $add1665 = 0, $add1666 = 0, $add1673 = 0, $add1674 = 0, $add1708 = 0, $add1708$hold$48 = 0, $add1744 = 0, $add1745 = 0, $add1798 = 0, $add1800 = 0;
 var $add1802 = 0, $add1831 = 0, $add1836 = 0, $add1844 = 0, $add186 = 0, $add187 = 0, $add241 = 0, $add242 = 0, $add29 = 0, $add297 = 0, $add298 = 0, $add366 = 0, $add538 = 0, $add539 = 0, $add587 = 0, $add588 = 0, $add604 = 0, $add65 = 0, $add664 = 0, $add665 = 0;
 var $add724 = 0, $add725 = 0, $add790 = 0, $add791 = 0, $add798 = 0, $add805 = 0, $add812 = 0, $add82 = 0, $add852 = 0, $add853 = 0, $add904 = 0, $add9041437 = 0, $add930 = 0, $add931 = 0, $add954 = 0, $add955 = 0, $add985 = 0, $add998 = 0, $add999 = 0, $adler = 0;
 var $and = 0, $and1026 = 0, $and1072 = 0, $and1113 = 0, $and1237 = 0, $and1237$pn = 0, $and12371451 = 0, $and1265 = 0, $and1279 = 0, $and12791476 = 0, $and128 = 0, $and1348 = 0, $and1356 = 0, $and136 = 0, $and1364 = 0, $and1396 = 0, $and1417 = 0, $and1417$pn = 0, $and14171507 = 0, $and1442 = 0;
 var $and1456 = 0, $and14561532 = 0, $and147 = 0, $and151 = 0, $and1515 = 0, $and1525 = 0, $and1557 = 0, $and200 = 0, $and252 = 0, $and258 = 0, $and280 = 0, $and311 = 0, $and341 = 0, $and376 = 0, $and397 = 0, $and433 = 0, $and458 = 0, $and497 = 0, $and521 = 0, $and546 = 0;
 var $and563 = 0, $and59 = 0, $and62 = 0, $and642 = 0, $and671 = 0, $and70 = 0, $and704 = 0, $and731 = 0, $and797 = 0, $and804 = 0, $and81 = 0, $and811 = 0, $and859 = 0, $and912 = 0, $and912$pn = 0, $and9121379 = 0, $and98 = 0, $arraydecay1160 = 0, $arraydecay1166 = 0, $arraydecay1171 = 0;
 var $arrayidx1024 = 0, $arrayidx1141 = 0, $arrayidx11412763 = 0, $arrayidx1151 = 0, $arrayidx211 = 0, $arrayidx214 = 0, $arrayidx405 = 0, $arrayidx42 = 0, $arrayidx425 = 0, $arrayidx467 = 0, $arrayidx487 = 0, $arrayidx863 = 0, $arrayidx864 = 0, $arrayidx878 = 0, $arrayidx881 = 0, $arrayidx974 = 0, $avail_in = 0, $avail_in15 = 0, $avail_out = 0, $back = 0;
 var $bits$0 = 0, $bits$0$be = 0, $bits$1$lcssa = 0, $bits$10 = 0, $bits$11 = 0, $bits$11633 = 0, $bits$12$lcssa = 0, $bits$121624 = 0, $bits$13 = 0, $bits$141574 = 0, $bits$15 = 0, $bits$16 = 0, $bits$17 = 0, $bits$18$lcssa = 0, $bits$19$lcssa = 0, $bits$191565 = 0, $bits$2$lcssa = 0, $bits$20 = 0, $bits$21 = 0, $bits$21591 = 0;
 var $bits$22$lcssa = 0, $bits$221351 = 0, $bits$23$lcssa = 0, $bits$23$ph2044 = 0, $bits$231369 = 0, $bits$24$lcssa = 0, $bits$25$be = 0, $bits$25$lcssa2049 = 0, $bits$25$ph = 0, $bits$251442 = 0, $bits$26$lcssa = 0, $bits$261390 = 0, $bits$27$lcssa = 0, $bits$271432 = 0, $bits$28$lcssa = 0, $bits$281413 = 0, $bits$29$lcssa = 0, $bits$291404 = 0, $bits$30$lcssa = 0, $bits$301422 = 0;
 var $bits$31 = 0, $bits$31600 = 0, $bits$33 = 0, $bits$34 = 0, $bits$35$lcssa = 0, $bits$351463 = 0, $bits$36$lcssa = 0, $bits$361487 = 0, $bits$37 = 0, $bits$38 = 0, $bits$39$lcssa = 0, $bits$391499 = 0, $bits$40 = 0, $bits$41$lcssa = 0, $bits$41$ph = 0, $bits$411519 = 0, $bits$41608 = 0, $bits$42$lcssa = 0, $bits$421543 = 0, $bits$43 = 0;
 var $bits$44 = 0, $bits$45$lcssa = 0, $bits$451555 = 0, $bits$46 = 0, $bits$47 = 0, $bits$48$lcssa = 0, $bits$481334 = 0, $bits$49 = 0, $bits$5 = 0, $bits$50 = 0, $bits$51$lcssa = 0, $bits$511342 = 0, $bits$52 = 0, $bits$54 = 0, $bits$54$ph = 0, $bits$61616 = 0, $bits$7 = 0, $bits$8 = 0, $bits$9 = 0, $bits17 = 0;
 var $call = 0, $call1172 = 0, $call1188 = 0, $call162 = 0, $call1683 = 0, $call1688 = 0, $call1788 = 0, $call1815 = 0, $call1821 = 0, $call217 = 0, $call269 = 0, $call322 = 0, $call380 = 0, $call437 = 0, $call44 = 0, $call501 = 0, $call568 = 0, $call625 = 0, $call891 = 0, $call96 = 0;
 var $check = 0, $cmp = 0, $cmp1015 = 0, $cmp1044 = 0, $cmp10441400 = 0, $cmp1048 = 0, $cmp107 = 0, $cmp1071587 = 0, $cmp1085 = 0, $cmp10851418 = 0, $cmp1089 = 0, $cmp111 = 0, $cmp1127 = 0, $cmp1146 = 0, $cmp1153 = 0, $cmp1202 = 0, $cmp1205 = 0, $cmp1227 = 0, $cmp1242 = 0, $cmp12421459 = 0;
 var $cmp1247 = 0, $cmp1266 = 0, $cmp129 = 0, $cmp1291 = 0, $cmp12911483 = 0, $cmp1296 = 0, $cmp1341 = 0, $cmp1374 = 0, $cmp13741495 = 0, $cmp1378 = 0, $cmp1422 = 0, $cmp14221515 = 0, $cmp1427 = 0, $cmp143 = 0, $cmp1443 = 0, $cmp1468 = 0, $cmp14681539 = 0, $cmp1473 = 0, $cmp1535 = 0, $cmp15351551 = 0;
 var $cmp1539 = 0, $cmp1573 = 0, $cmp1579 = 0, $cmp1584 = 0, $cmp1593 = 0, $cmp1607 = 0, $cmp1617 = 0, $cmp1632 = 0, $cmp1638 = 0, $cmp1653 = 0, $cmp16531330 = 0, $cmp1657 = 0, $cmp1712 = 0, $cmp1732 = 0, $cmp17321338 = 0, $cmp1736 = 0, $cmp174 = 0, $cmp1741596 = 0, $cmp1752 = 0, $cmp178 = 0;
 var $cmp1781 = 0, $cmp1785 = 0, $cmp1833 = 0, $cmp1838 = 0, $cmp1841 = 0, $cmp1851 = 0, $cmp1854 = 0, $cmp19 = 0, $cmp194 = 0, $cmp2 = 0, $cmp229 = 0, $cmp2291604 = 0, $cmp233 = 0, $cmp24 = 0, $cmp241629 = 0, $cmp249 = 0, $cmp26 = 0, $cmp285 = 0, $cmp2851612 = 0, $cmp289 = 0;
 var $cmp305 = 0, $cmp332 = 0, $cmp345 = 0, $cmp352 = 0, $cmp357 = 0, $cmp36 = 0, $cmp368 = 0, $cmp4 = 0, $cmp400 = 0, $cmp408 = 0, $cmp412 = 0, $cmp417 = 0, $cmp429 = 0, $cmp447 = 0, $cmp461 = 0, $cmp470 = 0, $cmp474 = 0, $cmp479 = 0, $cmp492 = 0, $cmp511 = 0;
 var $cmp526 = 0, $cmp5261620 = 0, $cmp53 = 0, $cmp530 = 0, $cmp547 = 0, $cmp558 = 0, $cmp575 = 0, $cmp5751570 = 0, $cmp579 = 0, $cmp6 = 0, $cmp612 = 0, $cmp6521578 = 0, $cmp656 = 0, $cmp683 = 0, $cmp7 = 0, $cmp71 = 0, $cmp712 = 0, $cmp7121561 = 0, $cmp716 = 0, $cmp733 = 0;
 var $cmp755 = 0, $cmp759 = 0, $cmp763 = 0, $cmp778 = 0, $cmp7781347 = 0, $cmp782 = 0, $cmp819 = 0, $cmp823 = 0, $cmp83 = 0, $cmp835 = 0, $cmp8351365 = 0, $cmp8401356 = 0, $cmp844 = 0, $cmp8731376 = 0, $cmp88 = 0, $cmp9 = 0, $cmp905 = 0, $cmp9051438 = 0, $cmp917 = 0, $cmp9171386 = 0;
 var $cmp922 = 0, $cmp935 = 0, $cmp942 = 0, $cmp9421428 = 0, $cmp946 = 0, $cmp986 = 0, $cmp9861409 = 0, $cmp990 = 0, $comm_max = 0, $comment = 0, $comment515 = 0, $cond1690 = 0, $cond1823 = 0, $cond1830 = 0, $cond1835 = 0, $cond373 = 0, $conv = 0, $conv1025 = 0, $conv1054 = 0, $conv1095 = 0;
 var $conv1137 = 0, $conv117 = 0, $conv1241 = 0, $conv1241$lcssa = 0, $conv12411458 = 0, $conv1253 = 0, $conv1260 = 0, $conv1271 = 0, $conv1289 = 0, $conv12891481 = 0, $conv1302 = 0, $conv1325 = 0, $conv1337 = 0, $conv1340 = 0, $conv1384 = 0, $conv1421 = 0, $conv1421$lcssa = 0, $conv14211514 = 0, $conv1433 = 0, $conv1441 = 0;
 var $conv1448 = 0, $conv1466 = 0, $conv14661537 = 0, $conv1479 = 0, $conv1502 = 0, $conv1514 = 0, $conv1522 = 0, $conv1545 = 0, $conv155 = 0, $conv158 = 0, $conv1643 = 0, $conv1663 = 0, $conv1742 = 0, $conv184 = 0, $conv204 = 0, $conv207 = 0, $conv210 = 0, $conv213 = 0, $conv239 = 0, $conv262 = 0;
 var $conv265 = 0, $conv295 = 0, $conv315 = 0, $conv318 = 0, $conv536 = 0, $conv585 = 0, $conv662 = 0, $conv722 = 0, $conv788 = 0, $conv850 = 0, $conv860 = 0, $conv916 = 0, $conv916$lcssa = 0, $conv9161384 = 0, $conv928 = 0, $conv952 = 0, $conv996 = 0, $copy$1 = 0, $copy$10 = 0, $copy$2 = 0;
 var $copy$4 = 0, $copy$5 = 0, $copy$7 = 0, $copy$8 = 0, $data_type = 0, $dec = 0, $dec1052 = 0, $dec1093 = 0, $dec1134 = 0, $dec11342761 = 0, $dec11342765 = 0, $dec115 = 0, $dec1251 = 0, $dec1300 = 0, $dec1382 = 0, $dec1431 = 0, $dec1477 = 0, $dec1543 = 0, $dec1628 = 0, $dec1645 = 0;
 var $dec1661 = 0, $dec1740 = 0, $dec182 = 0, $dec237 = 0, $dec293 = 0, $dec534 = 0, $dec583 = 0, $dec660 = 0, $dec720 = 0, $dec786 = 0, $dec848 = 0, $dec926 = 0, $dec950 = 0, $dec994 = 0, $distbits$i = 0, $distcode$i = 0, $dmax = 0, $done = 0, $done566 = 0, $exitcond = 0;
 var $extra = 0, $extra1365 = 0, $extra356 = 0, $extra_len = 0, $extra_len361 = 0, $extra_max = 0, $flags = 0, $flush$off = 0, $from$0 = 0, $from$1 = 0, $from$2 = 0, $have$0 = 0, $have$0$be = 0, $have$1$lcssa = 0, $have$10 = 0, $have$11 = 0, $have$11631 = 0, $have$12 = 0, $have$13 = 0, $have$14 = 0;
 var $have$15 = 0, $have$16$lcssa = 0, $have$161622 = 0, $have$17 = 0, $have$18$lcssa = 0, $have$181572 = 0, $have$19 = 0, $have$2$lcssa = 0, $have$20 = 0, $have$21 = 0, $have$21589 = 0, $have$22$lcssa = 0, $have$23$lcssa = 0, $have$231563 = 0, $have$24 = 0, $have$25 = 0, $have$25$ = 0, $have$26$lcssa = 0, $have$261349 = 0, $have$27$lcssa = 0;
 var $have$27$ph2042 = 0, $have$271367 = 0, $have$28$lcssa = 0, $have$29$be = 0, $have$29$lcssa2047 = 0, $have$29$ph = 0, $have$291440 = 0, $have$3$lcssa = 0, $have$30$lcssa = 0, $have$301388 = 0, $have$31$lcssa = 0, $have$311430 = 0, $have$31598 = 0, $have$32$lcssa = 0, $have$321411 = 0, $have$33$lcssa = 0, $have$331402 = 0, $have$34$lcssa = 0, $have$341420 = 0, $have$35 = 0;
 var $have$37 = 0, $have$38 = 0, $have$39$lcssa = 0, $have$391461 = 0, $have$4$lcssa = 0, $have$40$lcssa = 0, $have$401485 = 0, $have$41 = 0, $have$41606 = 0, $have$42 = 0, $have$43$lcssa = 0, $have$431497 = 0, $have$44 = 0, $have$45$lcssa = 0, $have$45$ph = 0, $have$451517 = 0, $have$46$lcssa = 0, $have$461541 = 0, $have$47 = 0, $have$48 = 0;
 var $have$49$lcssa = 0, $have$491553 = 0, $have$5 = 0, $have$50 = 0, $have$51 = 0, $have$52$lcssa = 0, $have$521332 = 0, $have$53 = 0, $have$54 = 0, $have$55$lcssa = 0, $have$551340 = 0, $have$56 = 0, $have$58 = 0, $have$58$ph = 0, $have$6$lcssa = 0, $have$61614 = 0, $have$7 = 0, $have$8 = 0, $have$8$ = 0, $have$9 = 0;
 var $have901 = 0, $havedict = 0, $hbuf = 0, $hcrc = 0, $head = 0, $here$sroa$0$0 = 0, $here$sroa$0$0$$sroa_idx54 = 0, $here$sroa$0$0$$sroa_idx60 = 0, $here$sroa$0$0$copyload55 = 0, $here$sroa$0$0$copyload57$lcssa = 0, $here$sroa$0$0$copyload57$lcssa$in = 0, $here$sroa$0$0$copyload59$lcssa = 0, $here$sroa$0$0$copyload59$lcssa$in = 0, $here$sroa$0$0$copyload61 = 0, $here$sroa$0$1 = 0, $here$sroa$18$0 = 0, $here$sroa$18$0$$sroa_idx = 0, $here$sroa$18$0$$sroa_idx1380 = 0, $here$sroa$18$0$$sroa_idx62 = 0, $here$sroa$18$0$$sroa_idx621535 = 0;
 var $here$sroa$18$0$$sroa_idx64 = 0, $here$sroa$18$0$$sroa_idx641510 = 0, $here$sroa$18$0$$sroa_idx66 = 0, $here$sroa$18$0$$sroa_idx661454 = 0, $here$sroa$18$0$$sroa_idx68 = 0, $here$sroa$18$0$$sroa_idx681479 = 0, $here$sroa$18$0$copyload = 0, $here$sroa$18$0$copyload1381 = 0, $here$sroa$18$0$copyload63 = 0, $here$sroa$18$0$copyload63$lcssa = 0, $here$sroa$18$0$copyload631536 = 0, $here$sroa$18$0$copyload65 = 0, $here$sroa$18$0$copyload65$lcssa = 0, $here$sroa$18$0$copyload651511 = 0, $here$sroa$18$0$copyload67 = 0, $here$sroa$18$0$copyload67$lcssa = 0, $here$sroa$18$0$copyload671455 = 0, $here$sroa$18$0$copyload69 = 0, $here$sroa$18$0$copyload69$lcssa = 0, $here$sroa$18$0$copyload691480 = 0;
 var $here$sroa$18$1 = 0, $here$sroa$43$0 = 0, $here$sroa$43$0$$sroa_idx93 = 0, $here$sroa$43$0$$sroa_idx99 = 0, $here$sroa$43$0$copyload$lcssa = 0, $here$sroa$43$0$copyload$lcssa$in = 0, $here$sroa$43$0$copyload100 = 0, $here$sroa$43$0$copyload94 = 0, $here$sroa$43$0$copyload96$lcssa = 0, $here$sroa$43$0$copyload96$lcssa$in = 0, $here$sroa$43$0$copyload98$lcssa = 0, $here$sroa$43$0$copyload98$lcssa$in = 0, $here$sroa$43$1 = 0, $hold$0 = 0, $hold$0$be = 0, $hold$1$lcssa = 0, $hold$10 = 0, $hold$11 = 0, $hold$11632 = 0, $hold$12$lcssa = 0;
 var $hold$121623 = 0, $hold$13 = 0, $hold$14$lcssa = 0, $hold$141573 = 0, $hold$15 = 0, $hold$16 = 0, $hold$17 = 0, $hold$18$lcssa = 0, $hold$19$lcssa = 0, $hold$191564 = 0, $hold$20 = 0, $hold$21 = 0, $hold$21590 = 0, $hold$22$lcssa = 0, $hold$221350 = 0, $hold$23$lcssa = 0, $hold$23$ph2043 = 0, $hold$231368 = 0, $hold$24$lcssa = 0, $hold$25$be = 0;
 var $hold$25$lcssa2048 = 0, $hold$25$ph = 0, $hold$251441 = 0, $hold$26$lcssa = 0, $hold$261389 = 0, $hold$27$lcssa = 0, $hold$271431 = 0, $hold$28$lcssa = 0, $hold$281412 = 0, $hold$29$lcssa = 0, $hold$291403 = 0, $hold$3$lcssa = 0, $hold$30$lcssa = 0, $hold$301421 = 0, $hold$31 = 0, $hold$31599 = 0, $hold$33 = 0, $hold$34 = 0, $hold$35$lcssa = 0, $hold$351462 = 0;
 var $hold$36$lcssa = 0, $hold$361486 = 0, $hold$37 = 0, $hold$38 = 0, $hold$39$lcssa = 0, $hold$391498 = 0, $hold$4$lcssa = 0, $hold$40 = 0, $hold$41$lcssa = 0, $hold$41$ph = 0, $hold$411518 = 0, $hold$41607 = 0, $hold$42$lcssa = 0, $hold$421542 = 0, $hold$43 = 0, $hold$44 = 0, $hold$45$lcssa = 0, $hold$451554 = 0, $hold$46 = 0, $hold$47 = 0;
 var $hold$48$lcssa = 0, $hold$481333 = 0, $hold$49 = 0, $hold$5 = 0, $hold$50 = 0, $hold$51$lcssa = 0, $hold$511341 = 0, $hold$52 = 0, $hold$54 = 0, $hold$54$ph = 0, $hold$6$lcssa = 0, $hold$61615 = 0, $hold$7 = 0, $hold$8 = 0, $hold$9 = 0, $hold16 = 0, $idx$neg = 0, $idx$neg1681 = 0, $idx$neg1813 = 0, $idxprom = 0;
 var $idxprom879 = 0, $inc = 0, $inc1139 = 0, $inc11392762 = 0, $inc422 = 0, $inc466 = 0, $inc484 = 0, $inc862 = 0, $inc877 = 0, $inc972 = 0, $incdec$ptr = 0, $incdec$ptr1053 = 0, $incdec$ptr1094 = 0, $incdec$ptr116 = 0, $incdec$ptr1252 = 0, $incdec$ptr1301 = 0, $incdec$ptr1383 = 0, $incdec$ptr1432 = 0, $incdec$ptr1478 = 0, $incdec$ptr1544 = 0;
 var $incdec$ptr1625 = 0, $incdec$ptr1626 = 0, $incdec$ptr1644 = 0, $incdec$ptr1662 = 0, $incdec$ptr1741 = 0, $incdec$ptr183 = 0, $incdec$ptr238 = 0, $incdec$ptr294 = 0, $incdec$ptr535 = 0, $incdec$ptr584 = 0, $incdec$ptr661 = 0, $incdec$ptr721 = 0, $incdec$ptr787 = 0, $incdec$ptr849 = 0, $incdec$ptr927 = 0, $incdec$ptr951 = 0, $incdec$ptr995 = 0, $last638 = 0, $left$0 = 0, $left$0$be = 0;
 var $left$0$copy$8 = 0, $len$0 = 0, $lenbits$i = 0, $lencode$i = 0, $length = 0, $msg = 0, $name = 0, $name451 = 0, $name_max = 0, $ncode834 = 0, $ndist903 = 0, $next$0 = 0, $next$0$be = 0, $next$1$lcssa = 0, $next$10 = 0, $next$11 = 0, $next$11630 = 0, $next$12 = 0, $next$13 = 0, $next$14 = 0;
 var $next$15 = 0, $next$16$lcssa = 0, $next$161621 = 0, $next$17 = 0, $next$18$lcssa = 0, $next$181571 = 0, $next$19 = 0, $next$2$lcssa = 0, $next$20 = 0, $next$21 = 0, $next$21588 = 0, $next$22$lcssa = 0, $next$23$lcssa = 0, $next$231562 = 0, $next$24 = 0, $next$25 = 0, $next$26$lcssa = 0, $next$261348 = 0, $next$27$lcssa = 0, $next$27$ph2041 = 0;
 var $next$271366 = 0, $next$28$lcssa = 0, $next$29$be = 0, $next$29$lcssa2046 = 0, $next$29$ph = 0, $next$291439 = 0, $next$3$lcssa = 0, $next$30$lcssa = 0, $next$301387 = 0, $next$31$lcssa = 0, $next$311429 = 0, $next$31597 = 0, $next$32$lcssa = 0, $next$321410 = 0, $next$33$lcssa = 0, $next$331401 = 0, $next$34$lcssa = 0, $next$341419 = 0, $next$35 = 0, $next$37 = 0;
 var $next$38 = 0, $next$39$lcssa = 0, $next$391460 = 0, $next$4$lcssa = 0, $next$40$lcssa = 0, $next$401484 = 0, $next$41 = 0, $next$41605 = 0, $next$42 = 0, $next$43$lcssa = 0, $next$431496 = 0, $next$44 = 0, $next$45$lcssa = 0, $next$45$ph = 0, $next$451516 = 0, $next$46$lcssa = 0, $next$461540 = 0, $next$47 = 0, $next$48 = 0, $next$49$lcssa = 0;
 var $next$491552 = 0, $next$5 = 0, $next$50 = 0, $next$51 = 0, $next$52$lcssa = 0, $next$521331 = 0, $next$53 = 0, $next$54 = 0, $next$55$lcssa = 0, $next$551339 = 0, $next$56 = 0, $next$58 = 0, $next$58$ph = 0, $next$6$lcssa = 0, $next$61613 = 0, $next$7 = 0, $next$8 = 0, $next$9 = 0, $next1161 = 0, $next_out = 0;
 var $nlen902 = 0, $offset1558 = 0, $or$cond = 0, $or$cond2 = 0, $or$cond2404 = 0, $or$cond2405 = 0, $or$cond3 = 0, $or$cond5 = 0, $or$cond6 = 0, $or$cond871 = 0, $or$cond872 = 0, $or$cond873 = 0, $os = 0, $out$0 = 0, $out$0$be = 0, $out$1 = 0, $out$2 = 0, $out$4 = 0, $put$0 = 0, $put$0$be = 0;
 var $put$1 = 0, $rem = 0, $ret$0 = 0, $ret$0$be = 0, $ret$1$ph = 0, $ret$2 = 0, $ret$3 = 0, $ret$4 = 0, $ret$5$ph = 0, $ret$6 = 0, $ret$7 = 0, $ret$8 = 0, $ret$8$ph = 0, $retval$0 = 0, $sane = 0, $shl = 0, $shl1055 = 0, $shl1096 = 0, $shl118 = 0, $shl12351449 = 0;
 var $shl1254 = 0, $shl1277 = 0, $shl1303 = 0, $shl1385 = 0, $shl1394 = 0, $shl14151505 = 0, $shl1434 = 0, $shl1454 = 0, $shl1480 = 0, $shl1546 = 0, $shl1555 = 0, $shl1664 = 0, $shl1743 = 0, $shl185 = 0, $shl240 = 0, $shl296 = 0, $shl537 = 0, $shl586 = 0, $shl63 = 0, $shl663 = 0;
 var $shl723 = 0, $shl789 = 0, $shl851 = 0, $shl9101377 = 0, $shl929 = 0, $shl95 = 0, $shl953 = 0, $shl997 = 0, $shr1008 = 0, $shr1029 = 0, $shr1066 = 0, $shr1075 = 0, $shr1107 = 0, $shr1116 = 0, $shr1282 = 0, $shr12821477 = 0, $shr1312 = 0, $shr1326 = 0, $shr1401 = 0, $shr1459 = 0;
 var $shr14591533 = 0, $shr146 = 0, $shr1489 = 0, $shr1503 = 0, $shr1562 = 0, $shr157 = 0, $shr206 = 0, $shr209 = 0, $shr212 = 0, $shr254 = 0, $shr264 = 0, $shr317 = 0, $shr562870 = 0, $shr64 = 0, $shr643 = 0, $shr674 = 0, $shr687 = 0, $shr698 = 0, $shr705 = 0, $shr732 = 0;
 var $shr78 = 0, $shr800 = 0, $shr807 = 0, $shr814 = 0, $shr866 = 0, $shr964 = 0, $state1 = 0, $sub = 0, $sub1011 = 0, $sub1022 = 0, $sub1030 = 0, $sub1069 = 0, $sub1076 = 0, $sub1110 = 0, $sub1117 = 0, $sub12361450 = 0, $sub1278 = 0, $sub1315 = 0, $sub1329 = 0, $sub1395 = 0;
 var $sub1403 = 0, $sub14161506 = 0, $sub1455 = 0, $sub1492 = 0, $sub1506 = 0, $sub1556 = 0, $sub1564 = 0, $sub1577 = 0, $sub1583 = 0, $sub1597 = 0, $sub1598 = 0, $sub1603 = 0, $sub1621 = 0, $sub1623 = 0, $sub1672 = 0, $sub1795 = 0, $sub1797 = 0, $sub363 = 0, $sub372 = 0, $sub383 = 0;
 var $sub386 = 0, $sub440 = 0, $sub504 = 0, $sub645 = 0, $sub688 = 0, $sub699 = 0, $sub707 = 0, $sub767 = 0, $sub769 = 0, $sub772 = 0, $sub815 = 0, $sub867 = 0, $sub9111378 = 0, $sub967 = 0, $time = 0, $tobool = 0, $tobool1135 = 0, $tobool11352764 = 0, $tobool1173 = 0, $tobool1189 = 0;
 var $tobool1261 = 0, $tobool1349 = 0, $tobool1357 = 0, $tobool1369 = 0, $tobool137 = 0, $tobool1516 = 0, $tobool152 = 0, $tobool1530 = 0, $tobool1587 = 0, $tobool1629 = 0, $tobool1649 = 0, $tobool1675 = 0, $tobool1678 = 0, $tobool1695 = 0, $tobool1725 = 0, $tobool1728 = 0, $tobool1778 = 0, $tobool1789 = 0, $tobool1804 = 0, $tobool1806 = 0;
 var $tobool1809 = 0, $tobool1829 = 0, $tobool201 = 0, $tobool259 = 0, $tobool281 = 0, $tobool312 = 0, $tobool342 = 0, $tobool349 = 0, $tobool377 = 0, $tobool389 = 0, $tobool398 = 0, $tobool428 = 0, $tobool434 = 0, $tobool459 = 0, $tobool490 = 0, $tobool498 = 0, $tobool522 = 0, $tobool60 = 0, $tobool639 = 0, $tobool66 = 0;
 var $tobool753 = 0, $tobool892 = 0, $total = 0, $total_in = 0, $total_out = 0, $trunc = 0, $trunc$clear = 0, $was = 0, $wbits = 0, $whave = 0, $window = 0, $wnext = 0, $wrap = 0, $wsize = 0, $xflags = 0, $xor = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $hbuf = sp;
 $cmp = ($strm|0)==(0|0);
 if ($cmp) {
  $retval$0 = -2;
  STACKTOP = sp;return ($retval$0|0);
 }
 $state1 = ((($strm)) + 28|0);
 $0 = load4($state1);
 $cmp2 = ($0|0)==(0|0);
 if ($cmp2) {
  $retval$0 = -2;
  STACKTOP = sp;return ($retval$0|0);
 }
 $next_out = ((($strm)) + 12|0);
 $1 = load4($next_out);
 $cmp4 = ($1|0)==(0|0);
 if ($cmp4) {
  $retval$0 = -2;
  STACKTOP = sp;return ($retval$0|0);
 }
 $2 = load4($strm);
 $cmp6 = ($2|0)==(0|0);
 if ($cmp6) {
  $avail_in = ((($strm)) + 4|0);
  $3 = load4($avail_in);
  $cmp7 = ($3|0)==(0);
  if (!($cmp7)) {
   $retval$0 = -2;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $4 = load4($0);
 $cmp9 = ($4|0)==(11);
 if ($cmp9) {
  store4($0,12);
  $173 = 12;
 } else {
  $173 = $4;
 }
 $avail_out = ((($strm)) + 16|0);
 $5 = load4($avail_out);
 $avail_in15 = ((($strm)) + 4|0);
 $6 = load4($avail_in15);
 $hold16 = ((($0)) + 56|0);
 $7 = load4($hold16);
 $bits17 = ((($0)) + 60|0);
 $8 = load4($bits17);
 $wrap = ((($0)) + 8|0);
 $check = ((($0)) + 24|0);
 $arrayidx42 = ((($hbuf)) + 1|0);
 $flags = ((($0)) + 16|0);
 $head = ((($0)) + 32|0);
 $msg = ((($strm)) + 24|0);
 $wbits = ((($0)) + 36|0);
 $dmax = ((($0)) + 20|0);
 $adler = ((($strm)) + 48|0);
 $length = ((($0)) + 64|0);
 $havedict = ((($0)) + 12|0);
 $flush$off = (($flush) + -5)|0;
 $9 = ($flush$off>>>0)<(2);
 $last638 = ((($0)) + 4|0);
 $lencode$i = ((($0)) + 76|0);
 $lenbits$i = ((($0)) + 84|0);
 $distcode$i = ((($0)) + 80|0);
 $distbits$i = ((($0)) + 88|0);
 $cmp683 = ($flush|0)==(6);
 $back = ((($0)) + 7108|0);
 $extra1365 = ((($0)) + 72|0);
 $was = ((($0)) + 7112|0);
 $offset1558 = ((($0)) + 68|0);
 $whave = ((($0)) + 44|0);
 $sane = ((($0)) + 7104|0);
 $wnext = ((($0)) + 48|0);
 $window = ((($0)) + 52|0);
 $wsize = ((($0)) + 40|0);
 $total_out = ((($strm)) + 20|0);
 $total = ((($0)) + 28|0);
 $arrayidx211 = ((($hbuf)) + 2|0);
 $arrayidx214 = ((($hbuf)) + 3|0);
 $have901 = ((($0)) + 104|0);
 $nlen902 = ((($0)) + 96|0);
 $ndist903 = ((($0)) + 100|0);
 $arrayidx1151 = ((($0)) + 624|0);
 $arraydecay1160 = ((($0)) + 1328|0);
 $next1161 = ((($0)) + 108|0);
 $arraydecay1166 = ((($0)) + 112|0);
 $arraydecay1171 = ((($0)) + 752|0);
 $ncode834 = ((($0)) + 92|0);
 $10 = $173;$bits$0 = $8;$have$0 = $6;$hold$0 = $7;$left$0 = $5;$next$0 = $2;$out$0 = $5;$put$0 = $1;$ret$0 = 0;
 L17: while(1) {
  L19: do {
   switch ($10|0) {
   case 28:  {
    $$ph = $left$0;$bits$54$ph = $bits$0;$have$58$ph = $have$0;$hold$54$ph = $hold$0;$next$58$ph = $next$0;$ret$8$ph = 1;
    label = 285;
    break L17;
    break;
   }
   case 29:  {
    $154 = $left$0;$bits$54 = $bits$0;$have$58 = $have$0;$hold$54 = $hold$0;$next$58 = $next$0;$out$4 = $out$0;$ret$8 = -3;
    break L17;
    break;
   }
   case 30:  {
    label = 297;
    break L17;
    break;
   }
   case 0:  {
    $11 = load4($wrap);
    $cmp19 = ($11|0)==(0);
    if ($cmp19) {
     store4($0,12);
     $bits$0$be = $bits$0;$have$0$be = $have$0;$hold$0$be = $hold$0;$left$0$be = $left$0;$next$0$be = $next$0;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
     break L19;
    }
    $cmp241629 = ($bits$0>>>0)<(16);
    if ($cmp241629) {
     $bits$11633 = $bits$0;$have$11631 = $have$0;$hold$11632 = $hold$0;$next$11630 = $next$0;
     while(1) {
      $cmp26 = ($have$11631|0)==(0);
      if ($cmp26) {
       $154 = $left$0;$bits$54 = $bits$11633;$have$58 = 0;$hold$54 = $hold$11632;$next$58 = $next$11630;$out$4 = $out$0;$ret$8 = $ret$0;
       break L17;
      }
      $dec = (($have$11631) + -1)|0;
      $incdec$ptr = ((($next$11630)) + 1|0);
      $12 = load1($next$11630);
      $conv = $12&255;
      $shl = $conv << $bits$11633;
      $add = (($shl) + ($hold$11632))|0;
      $add29 = (($bits$11633) + 8)|0;
      $cmp24 = ($add29>>>0)<(16);
      if ($cmp24) {
       $bits$11633 = $add29;$have$11631 = $dec;$hold$11632 = $add;$next$11630 = $incdec$ptr;
      } else {
       $bits$1$lcssa = $add29;$have$1$lcssa = $dec;$hold$1$lcssa = $add;$next$1$lcssa = $incdec$ptr;
       break;
      }
     }
    } else {
     $bits$1$lcssa = $bits$0;$have$1$lcssa = $have$0;$hold$1$lcssa = $hold$0;$next$1$lcssa = $next$0;
    }
    $and = $11 & 2;
    $tobool = ($and|0)!=(0);
    $cmp36 = ($hold$1$lcssa|0)==(35615);
    $or$cond = $cmp36 & $tobool;
    if ($or$cond) {
     $call = (_crc32(0,0,0)|0);
     store4($check,$call);
     store1($hbuf,31);
     store1($arrayidx42,-117);
     $call44 = (_crc32($call,$hbuf,2)|0);
     store4($check,$call44);
     store4($0,1);
     $bits$0$be = 0;$have$0$be = $have$1$lcssa;$hold$0$be = 0;$left$0$be = $left$0;$next$0$be = $next$1$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
     break L19;
    }
    store4($flags,0);
    $13 = load4($head);
    $cmp53 = ($13|0)==(0|0);
    if (!($cmp53)) {
     $done = ((($13)) + 48|0);
     store4($done,-1);
    }
    $and59 = $11 & 1;
    $tobool60 = ($and59|0)==(0);
    if (!($tobool60)) {
     $and62 = $hold$1$lcssa << 8;
     $shl63 = $and62 & 65280;
     $shr64 = $hold$1$lcssa >>> 8;
     $add65 = (($shl63) + ($shr64))|0;
     $rem = (($add65>>>0) % 31)&-1;
     $tobool66 = ($rem|0)==(0);
     if ($tobool66) {
      $and70 = $hold$1$lcssa & 15;
      $cmp71 = ($and70|0)==(8);
      if (!($cmp71)) {
       store4($msg,14887);
       store4($0,29);
       $bits$0$be = $bits$1$lcssa;$have$0$be = $have$1$lcssa;$hold$0$be = $hold$1$lcssa;$left$0$be = $left$0;$next$0$be = $next$1$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
       break L19;
      }
      $shr78 = $hold$1$lcssa >>> 4;
      $sub = (($bits$1$lcssa) + -4)|0;
      $and81 = $shr78 & 15;
      $add82 = (($and81) + 8)|0;
      $14 = load4($wbits);
      $cmp83 = ($14|0)==(0);
      if ($cmp83) {
       store4($wbits,$add82);
      } else {
       $cmp88 = ($add82>>>0)>($14>>>0);
       if ($cmp88) {
        store4($msg,14914);
        store4($0,29);
        $bits$0$be = $sub;$have$0$be = $have$1$lcssa;$hold$0$be = $shr78;$left$0$be = $left$0;$next$0$be = $next$1$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
        break L19;
       }
      }
      $shl95 = 1 << $add82;
      store4($dmax,$shl95);
      $call96 = (_adler32(0,0,0)|0);
      store4($check,$call96);
      store4($adler,$call96);
      $and98 = $hold$1$lcssa >>> 12;
      $15 = $and98 & 2;
      $16 = $15 ^ 11;
      store4($0,$16);
      $bits$0$be = 0;$have$0$be = $have$1$lcssa;$hold$0$be = 0;$left$0$be = $left$0;$next$0$be = $next$1$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
      break L19;
     }
    }
    store4($msg,14864);
    store4($0,29);
    $bits$0$be = $bits$1$lcssa;$have$0$be = $have$1$lcssa;$hold$0$be = $hold$1$lcssa;$left$0$be = $left$0;$next$0$be = $next$1$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
    break;
   }
   case 1:  {
    $cmp1071587 = ($bits$0>>>0)<(16);
    if ($cmp1071587) {
     $bits$21591 = $bits$0;$have$21589 = $have$0;$hold$21590 = $hold$0;$next$21588 = $next$0;
     while(1) {
      $cmp111 = ($have$21589|0)==(0);
      if ($cmp111) {
       $154 = $left$0;$bits$54 = $bits$21591;$have$58 = 0;$hold$54 = $hold$21590;$next$58 = $next$21588;$out$4 = $out$0;$ret$8 = $ret$0;
       break L17;
      }
      $dec115 = (($have$21589) + -1)|0;
      $incdec$ptr116 = ((($next$21588)) + 1|0);
      $17 = load1($next$21588);
      $conv117 = $17&255;
      $shl118 = $conv117 << $bits$21591;
      $add119 = (($shl118) + ($hold$21590))|0;
      $add120 = (($bits$21591) + 8)|0;
      $cmp107 = ($add120>>>0)<(16);
      if ($cmp107) {
       $bits$21591 = $add120;$have$21589 = $dec115;$hold$21590 = $add119;$next$21588 = $incdec$ptr116;
      } else {
       $18 = $add119;$bits$2$lcssa = $add120;$have$2$lcssa = $dec115;$next$2$lcssa = $incdec$ptr116;
       break;
      }
     }
    } else {
     $18 = $hold$0;$bits$2$lcssa = $bits$0;$have$2$lcssa = $have$0;$next$2$lcssa = $next$0;
    }
    store4($flags,$18);
    $and128 = $18 & 255;
    $cmp129 = ($and128|0)==(8);
    if (!($cmp129)) {
     store4($msg,14887);
     store4($0,29);
     $bits$0$be = $bits$2$lcssa;$have$0$be = $have$2$lcssa;$hold$0$be = $18;$left$0$be = $left$0;$next$0$be = $next$2$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
     break L19;
    }
    $and136 = $18 & 57344;
    $tobool137 = ($and136|0)==(0);
    if (!($tobool137)) {
     store4($msg,14934);
     store4($0,29);
     $bits$0$be = $bits$2$lcssa;$have$0$be = $have$2$lcssa;$hold$0$be = $18;$left$0$be = $left$0;$next$0$be = $next$2$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
     break L19;
    }
    $19 = load4($head);
    $cmp143 = ($19|0)==(0|0);
    if (!($cmp143)) {
     $shr146 = $18 >>> 8;
     $and147 = $shr146 & 1;
     store4($19,$and147);
    }
    $and151 = $18 & 512;
    $tobool152 = ($and151|0)==(0);
    if (!($tobool152)) {
     $conv155 = $18&255;
     store1($hbuf,$conv155);
     $shr157 = $18 >>> 8;
     $conv158 = $shr157&255;
     store1($arrayidx42,$conv158);
     $20 = load4($check);
     $call162 = (_crc32($20,$hbuf,2)|0);
     store4($check,$call162);
    }
    store4($0,2);
    $bits$31600 = 0;$have$31598 = $have$2$lcssa;$hold$31599 = 0;$next$31597 = $next$2$lcssa;
    label = 47;
    break;
   }
   case 2:  {
    $cmp1741596 = ($bits$0>>>0)<(32);
    if ($cmp1741596) {
     $bits$31600 = $bits$0;$have$31598 = $have$0;$hold$31599 = $hold$0;$next$31597 = $next$0;
     label = 47;
    } else {
     $have$3$lcssa = $have$0;$hold$3$lcssa = $hold$0;$next$3$lcssa = $next$0;
     label = 49;
    }
    break;
   }
   case 3:  {
    $cmp2291604 = ($bits$0>>>0)<(16);
    if ($cmp2291604) {
     $bits$41608 = $bits$0;$have$41606 = $have$0;$hold$41607 = $hold$0;$next$41605 = $next$0;
     label = 55;
    } else {
     $have$4$lcssa = $have$0;$hold$4$lcssa = $hold$0;$next$4$lcssa = $next$0;
     label = 57;
    }
    break;
   }
   case 4:  {
    $bits$5 = $bits$0;$have$5 = $have$0;$hold$5 = $hold$0;$next$5 = $next$0;
    label = 62;
    break;
   }
   case 5:  {
    $bits$8 = $bits$0;$have$8 = $have$0;$hold$8 = $hold$0;$next$8 = $next$0;
    label = 73;
    break;
   }
   case 6:  {
    $bits$9 = $bits$0;$have$11 = $have$0;$hold$9 = $hold$0;$next$11 = $next$0;
    label = 83;
    break;
   }
   case 7:  {
    $bits$10 = $bits$0;$have$13 = $have$0;$hold$10 = $hold$0;$next$13 = $next$0;
    label = 96;
    break;
   }
   case 8:  {
    $bits$11 = $bits$0;$have$15 = $have$0;$hold$11 = $hold$0;$next$15 = $next$0;
    label = 109;
    break;
   }
   case 9:  {
    $cmp5751570 = ($bits$0>>>0)<(32);
    if ($cmp5751570) {
     $bits$141574 = $bits$0;$have$181572 = $have$0;$hold$141573 = $hold$0;$next$181571 = $next$0;
     while(1) {
      $cmp579 = ($have$181572|0)==(0);
      if ($cmp579) {
       $154 = $left$0;$bits$54 = $bits$141574;$have$58 = 0;$hold$54 = $hold$141573;$next$58 = $next$181571;$out$4 = $out$0;$ret$8 = $ret$0;
       break L17;
      }
      $dec583 = (($have$181572) + -1)|0;
      $incdec$ptr584 = ((($next$181571)) + 1|0);
      $66 = load1($next$181571);
      $conv585 = $66&255;
      $shl586 = $conv585 << $bits$141574;
      $add587 = (($shl586) + ($hold$141573))|0;
      $add588 = (($bits$141574) + 8)|0;
      $cmp575 = ($add588>>>0)<(32);
      if ($cmp575) {
       $bits$141574 = $add588;$have$181572 = $dec583;$hold$141573 = $add587;$next$181571 = $incdec$ptr584;
      } else {
       $have$18$lcssa = $dec583;$hold$14$lcssa = $add587;$next$18$lcssa = $incdec$ptr584;
       break;
      }
     }
    } else {
     $have$18$lcssa = $have$0;$hold$14$lcssa = $hold$0;$next$18$lcssa = $next$0;
    }
    $add604 = (_llvm_bswap_i32(($hold$14$lcssa|0))|0);
    store4($check,$add604);
    store4($adler,$add604);
    store4($0,10);
    $bits$15 = 0;$have$19 = $have$18$lcssa;$hold$15 = 0;$next$19 = $next$18$lcssa;
    label = 121;
    break;
   }
   case 10:  {
    $bits$15 = $bits$0;$have$19 = $have$0;$hold$15 = $hold$0;$next$19 = $next$0;
    label = 121;
    break;
   }
   case 11:  {
    $bits$16 = $bits$0;$have$20 = $have$0;$hold$16 = $hold$0;$next$20 = $next$0;
    label = 124;
    break;
   }
   case 12:  {
    $bits$17 = $bits$0;$have$21 = $have$0;$hold$17 = $hold$0;$next$21 = $next$0;
    label = 125;
    break;
   }
   case 13:  {
    $and704 = $bits$0 & 7;
    $shr705 = $hold$0 >>> $and704;
    $sub707 = (($bits$0) - ($and704))|0;
    $cmp7121561 = ($sub707>>>0)<(32);
    if ($cmp7121561) {
     $bits$191565 = $sub707;$have$231563 = $have$0;$hold$191564 = $shr705;$next$231562 = $next$0;
     while(1) {
      $cmp716 = ($have$231563|0)==(0);
      if ($cmp716) {
       $154 = $left$0;$bits$54 = $bits$191565;$have$58 = 0;$hold$54 = $hold$191564;$next$58 = $next$231562;$out$4 = $out$0;$ret$8 = $ret$0;
       break L17;
      }
      $dec720 = (($have$231563) + -1)|0;
      $incdec$ptr721 = ((($next$231562)) + 1|0);
      $70 = load1($next$231562);
      $conv722 = $70&255;
      $shl723 = $conv722 << $bits$191565;
      $add724 = (($shl723) + ($hold$191564))|0;
      $add725 = (($bits$191565) + 8)|0;
      $cmp712 = ($add725>>>0)<(32);
      if ($cmp712) {
       $bits$191565 = $add725;$have$231563 = $dec720;$hold$191564 = $add724;$next$231562 = $incdec$ptr721;
      } else {
       $bits$19$lcssa = $add725;$have$23$lcssa = $dec720;$hold$19$lcssa = $add724;$next$23$lcssa = $incdec$ptr721;
       break;
      }
     }
    } else {
     $bits$19$lcssa = $sub707;$have$23$lcssa = $have$0;$hold$19$lcssa = $shr705;$next$23$lcssa = $next$0;
    }
    $and731 = $hold$19$lcssa & 65535;
    $shr732 = $hold$19$lcssa >>> 16;
    $xor = $shr732 ^ 65535;
    $cmp733 = ($and731|0)==($xor|0);
    if ($cmp733) {
     store4($length,$and731);
     store4($0,14);
     if ($cmp683) {
      $$ph = $left$0;$bits$54$ph = 0;$have$58$ph = $have$23$lcssa;$hold$54$ph = 0;$next$58$ph = $next$23$lcssa;$ret$8$ph = $ret$0;
      label = 285;
      break L17;
     } else {
      $bits$20 = 0;$have$24 = $have$23$lcssa;$hold$20 = 0;$next$24 = $next$23$lcssa;
      label = 144;
      break L19;
     }
    } else {
     store4($msg,14998);
     store4($0,29);
     $bits$0$be = $bits$19$lcssa;$have$0$be = $have$23$lcssa;$hold$0$be = $hold$19$lcssa;$left$0$be = $left$0;$next$0$be = $next$23$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
     break L19;
    }
    break;
   }
   case 14:  {
    $bits$20 = $bits$0;$have$24 = $have$0;$hold$20 = $hold$0;$next$24 = $next$0;
    label = 144;
    break;
   }
   case 15:  {
    $bits$21 = $bits$0;$have$25 = $have$0;$hold$21 = $hold$0;$next$25 = $next$0;
    label = 145;
    break;
   }
   case 16:  {
    $cmp7781347 = ($bits$0>>>0)<(14);
    if ($cmp7781347) {
     $bits$221351 = $bits$0;$have$261349 = $have$0;$hold$221350 = $hold$0;$next$261348 = $next$0;
     while(1) {
      $cmp782 = ($have$261349|0)==(0);
      if ($cmp782) {
       $154 = $left$0;$bits$54 = $bits$221351;$have$58 = 0;$hold$54 = $hold$221350;$next$58 = $next$261348;$out$4 = $out$0;$ret$8 = $ret$0;
       break L17;
      }
      $dec786 = (($have$261349) + -1)|0;
      $incdec$ptr787 = ((($next$261348)) + 1|0);
      $73 = load1($next$261348);
      $conv788 = $73&255;
      $shl789 = $conv788 << $bits$221351;
      $add790 = (($shl789) + ($hold$221350))|0;
      $add791 = (($bits$221351) + 8)|0;
      $cmp778 = ($add791>>>0)<(14);
      if ($cmp778) {
       $bits$221351 = $add791;$have$261349 = $dec786;$hold$221350 = $add790;$next$261348 = $incdec$ptr787;
      } else {
       $bits$22$lcssa = $add791;$have$26$lcssa = $dec786;$hold$22$lcssa = $add790;$next$26$lcssa = $incdec$ptr787;
       break;
      }
     }
    } else {
     $bits$22$lcssa = $bits$0;$have$26$lcssa = $have$0;$hold$22$lcssa = $hold$0;$next$26$lcssa = $next$0;
    }
    $and797 = $hold$22$lcssa & 31;
    $add798 = (($and797) + 257)|0;
    store4($nlen902,$add798);
    $shr800 = $hold$22$lcssa >>> 5;
    $and804 = $shr800 & 31;
    $add805 = (($and804) + 1)|0;
    store4($ndist903,$add805);
    $shr807 = $hold$22$lcssa >>> 10;
    $and811 = $shr807 & 15;
    $add812 = (($and811) + 4)|0;
    store4($ncode834,$add812);
    $shr814 = $hold$22$lcssa >>> 14;
    $sub815 = (($bits$22$lcssa) + -14)|0;
    $cmp819 = ($add798>>>0)>(286);
    $cmp823 = ($add805>>>0)>(30);
    $or$cond2404 = $cmp819 | $cmp823;
    if ($or$cond2404) {
     store4($msg,15027);
     store4($0,29);
     $bits$0$be = $sub815;$have$0$be = $have$26$lcssa;$hold$0$be = $shr814;$left$0$be = $left$0;$next$0$be = $next$26$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
     break L19;
    } else {
     store4($have901,0);
     store4($0,17);
     $174 = 0;$77 = $add812;$bits$23$ph2044 = $sub815;$have$27$ph2042 = $have$26$lcssa;$hold$23$ph2043 = $shr814;$next$27$ph2041 = $next$26$lcssa;
     label = 155;
     break L19;
    }
    break;
   }
   case 17:  {
    $$pre2015 = load4($have901);
    $$pre2016 = load4($ncode834);
    $cmp8351365 = ($$pre2015>>>0)<($$pre2016>>>0);
    if ($cmp8351365) {
     $174 = $$pre2015;$77 = $$pre2016;$bits$23$ph2044 = $bits$0;$have$27$ph2042 = $have$0;$hold$23$ph2043 = $hold$0;$next$27$ph2041 = $next$0;
     label = 155;
    } else {
     $$lcssa = $$pre2015;$bits$23$lcssa = $bits$0;$have$27$lcssa = $have$0;$hold$23$lcssa = $hold$0;$next$27$lcssa = $next$0;
     label = 156;
    }
    break;
   }
   case 18:  {
    $$pre2017 = load4($have901);
    $82 = $$pre2017;$bits$25$ph = $bits$0;$have$29$ph = $have$0;$hold$25$ph = $hold$0;$next$29$ph = $next$0;$ret$1$ph = $ret$0;
    label = 166;
    break;
   }
   case 19:  {
    $bits$33 = $bits$0;$have$37 = $have$0;$hold$33 = $hold$0;$next$37 = $next$0;$ret$2 = $ret$0;
    label = 203;
    break;
   }
   case 20:  {
    $bits$34 = $bits$0;$have$38 = $have$0;$hold$34 = $hold$0;$next$38 = $next$0;$ret$3 = $ret$0;
    label = 204;
    break;
   }
   case 21:  {
    $$pre2021 = load4($extra1365);
    $114 = $$pre2021;$bits$38 = $bits$0;$have$42 = $have$0;$hold$38 = $hold$0;$next$42 = $next$0;$ret$4 = $ret$0;
    label = 222;
    break;
   }
   case 22:  {
    $bits$41$ph = $bits$0;$have$45$ph = $have$0;$hold$41$ph = $hold$0;$next$45$ph = $next$0;$ret$5$ph = $ret$0;
    label = 229;
    break;
   }
   case 23:  {
    $$pre2024 = load4($extra1365);
    $125 = $$pre2024;$bits$44 = $bits$0;$have$48 = $have$0;$hold$44 = $hold$0;$next$48 = $next$0;$ret$6 = $ret$0;
    label = 241;
    break;
   }
   case 24:  {
    $bits$47 = $bits$0;$have$51 = $have$0;$hold$47 = $hold$0;$next$51 = $next$0;$ret$7 = $ret$0;
    label = 247;
    break;
   }
   case 25:  {
    $cmp1638 = ($left$0|0)==(0);
    if ($cmp1638) {
     $$ph = 0;$bits$54$ph = $bits$0;$have$58$ph = $have$0;$hold$54$ph = $hold$0;$next$58$ph = $next$0;$ret$8$ph = $ret$0;
     label = 285;
     break L17;
    }
    $141 = load4($length);
    $conv1643 = $141&255;
    $incdec$ptr1644 = ((($put$0)) + 1|0);
    store1($put$0,$conv1643);
    $dec1645 = (($left$0) + -1)|0;
    store4($0,20);
    $bits$0$be = $bits$0;$have$0$be = $have$0;$hold$0$be = $hold$0;$left$0$be = $dec1645;$next$0$be = $next$0;$out$0$be = $out$0;$put$0$be = $incdec$ptr1644;$ret$0$be = $ret$0;
    break;
   }
   case 26:  {
    $142 = load4($wrap);
    $tobool1649 = ($142|0)==(0);
    if ($tobool1649) {
     $bits$49 = $bits$0;$have$53 = $have$0;$hold$49 = $hold$0;$next$53 = $next$0;$out$1 = $out$0;
    } else {
     $cmp16531330 = ($bits$0>>>0)<(32);
     if ($cmp16531330) {
      $bits$481334 = $bits$0;$have$521332 = $have$0;$hold$481333 = $hold$0;$next$521331 = $next$0;
      while(1) {
       $cmp1657 = ($have$521332|0)==(0);
       if ($cmp1657) {
        $154 = $left$0;$bits$54 = $bits$481334;$have$58 = 0;$hold$54 = $hold$481333;$next$58 = $next$521331;$out$4 = $out$0;$ret$8 = $ret$0;
        break L17;
       }
       $dec1661 = (($have$521332) + -1)|0;
       $incdec$ptr1662 = ((($next$521331)) + 1|0);
       $143 = load1($next$521331);
       $conv1663 = $143&255;
       $shl1664 = $conv1663 << $bits$481334;
       $add1665 = (($shl1664) + ($hold$481333))|0;
       $add1666 = (($bits$481334) + 8)|0;
       $cmp1653 = ($add1666>>>0)<(32);
       if ($cmp1653) {
        $bits$481334 = $add1666;$have$521332 = $dec1661;$hold$481333 = $add1665;$next$521331 = $incdec$ptr1662;
       } else {
        $bits$48$lcssa = $add1666;$have$52$lcssa = $dec1661;$hold$48$lcssa = $add1665;$next$52$lcssa = $incdec$ptr1662;
        break;
       }
      }
     } else {
      $bits$48$lcssa = $bits$0;$have$52$lcssa = $have$0;$hold$48$lcssa = $hold$0;$next$52$lcssa = $next$0;
     }
     $sub1672 = (($out$0) - ($left$0))|0;
     $144 = load4($total_out);
     $add1673 = (($144) + ($sub1672))|0;
     store4($total_out,$add1673);
     $145 = load4($total);
     $add1674 = (($145) + ($sub1672))|0;
     store4($total,$add1674);
     $tobool1675 = ($sub1672|0)==(0);
     if ($tobool1675) {
      $$pre2014 = load4($check);
      $149 = $$pre2014;
     } else {
      $146 = load4($flags);
      $tobool1678 = ($146|0)==(0);
      $147 = load4($check);
      $idx$neg1681 = (0 - ($sub1672))|0;
      $add$ptr1682 = (($put$0) + ($idx$neg1681)|0);
      if ($tobool1678) {
       $call1688 = (_adler32($147,$add$ptr1682,$sub1672)|0);
       $cond1690 = $call1688;
      } else {
       $call1683 = (_crc32($147,$add$ptr1682,$sub1672)|0);
       $cond1690 = $call1683;
      }
      store4($check,$cond1690);
      store4($adler,$cond1690);
      $149 = $cond1690;
     }
     $148 = load4($flags);
     $tobool1695 = ($148|0)==(0);
     $add1708 = (_llvm_bswap_i32(($hold$48$lcssa|0))|0);
     $add1708$hold$48 = $tobool1695 ? $add1708 : $hold$48$lcssa;
     $cmp1712 = ($add1708$hold$48|0)==($149|0);
     if ($cmp1712) {
      $bits$49 = 0;$have$53 = $have$52$lcssa;$hold$49 = 0;$next$53 = $next$52$lcssa;$out$1 = $left$0;
     } else {
      store4($msg,15201);
      store4($0,29);
      $bits$0$be = $bits$48$lcssa;$have$0$be = $have$52$lcssa;$hold$0$be = $hold$48$lcssa;$left$0$be = $left$0;$next$0$be = $next$52$lcssa;$out$0$be = $left$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
      break L19;
     }
    }
    store4($0,27);
    $bits$50 = $bits$49;$have$54 = $have$53;$hold$50 = $hold$49;$next$54 = $next$53;$out$2 = $out$1;
    label = 277;
    break;
   }
   case 27:  {
    $bits$50 = $bits$0;$have$54 = $have$0;$hold$50 = $hold$0;$next$54 = $next$0;$out$2 = $out$0;
    label = 277;
    break;
   }
   default: {
    $retval$0 = -2;
    label = 298;
    break L17;
   }
   }
  } while(0);
  if ((label|0) == 47) {
   while(1) {
    label = 0;
    $cmp178 = ($have$31598|0)==(0);
    if ($cmp178) {
     $154 = $left$0;$bits$54 = $bits$31600;$have$58 = 0;$hold$54 = $hold$31599;$next$58 = $next$31597;$out$4 = $out$0;$ret$8 = $ret$0;
     break L17;
    }
    $dec182 = (($have$31598) + -1)|0;
    $incdec$ptr183 = ((($next$31597)) + 1|0);
    $21 = load1($next$31597);
    $conv184 = $21&255;
    $shl185 = $conv184 << $bits$31600;
    $add186 = (($shl185) + ($hold$31599))|0;
    $add187 = (($bits$31600) + 8)|0;
    $cmp174 = ($add187>>>0)<(32);
    if ($cmp174) {
     $bits$31600 = $add187;$have$31598 = $dec182;$hold$31599 = $add186;$next$31597 = $incdec$ptr183;
     label = 47;
    } else {
     $have$3$lcssa = $dec182;$hold$3$lcssa = $add186;$next$3$lcssa = $incdec$ptr183;
     label = 49;
     break;
    }
   }
  }
  else if ((label|0) == 121) {
   label = 0;
   $67 = load4($havedict);
   $cmp612 = ($67|0)==(0);
   if ($cmp612) {
    label = 122;
    break;
   }
   $call625 = (_adler32(0,0,0)|0);
   store4($check,$call625);
   store4($adler,$call625);
   store4($0,11);
   $bits$16 = $bits$15;$have$20 = $have$19;$hold$16 = $hold$15;$next$20 = $next$19;
   label = 124;
  }
  else if ((label|0) == 144) {
   label = 0;
   store4($0,15);
   $bits$21 = $bits$20;$have$25 = $have$24;$hold$21 = $hold$20;$next$25 = $next$24;
   label = 145;
  }
  else if ((label|0) == 155) {
   label = 0;
   $75 = $174;$bits$231369 = $bits$23$ph2044;$have$271367 = $have$27$ph2042;$hold$231368 = $hold$23$ph2043;$next$271366 = $next$27$ph2041;
   while(1) {
    $cmp8401356 = ($bits$231369>>>0)<(3);
    if ($cmp8401356) {
     $cmp844 = ($have$271367|0)==(0);
     if ($cmp844) {
      $154 = $left$0;$bits$54 = $bits$231369;$have$58 = 0;$hold$54 = $hold$231368;$next$58 = $next$271366;$out$4 = $out$0;$ret$8 = $ret$0;
      break L17;
     }
     $add853 = (($bits$231369) + 8)|0;
     $74 = load1($next$271366);
     $conv850 = $74&255;
     $shl851 = $conv850 << $bits$231369;
     $add852 = (($shl851) + ($hold$231368))|0;
     $incdec$ptr849 = ((($next$271366)) + 1|0);
     $dec848 = (($have$271367) + -1)|0;
     $bits$24$lcssa = $add853;$have$28$lcssa = $dec848;$hold$24$lcssa = $add852;$next$28$lcssa = $incdec$ptr849;
    } else {
     $bits$24$lcssa = $bits$231369;$have$28$lcssa = $have$271367;$hold$24$lcssa = $hold$231368;$next$28$lcssa = $next$271366;
    }
    $and859 = $hold$24$lcssa & 7;
    $conv860 = $and859&65535;
    $inc862 = (($75) + 1)|0;
    store4($have901,$inc862);
    $arrayidx863 = (13548 + ($75<<1)|0);
    $76 = load2($arrayidx863);
    $idxprom = $76&65535;
    $arrayidx864 = (((($0)) + 112|0) + ($idxprom<<1)|0);
    store2($arrayidx864,$conv860);
    $shr866 = $hold$24$lcssa >>> 3;
    $sub867 = (($bits$24$lcssa) + -3)|0;
    $cmp835 = ($inc862>>>0)<($77>>>0);
    if ($cmp835) {
     $75 = $inc862;$bits$231369 = $sub867;$have$271367 = $have$28$lcssa;$hold$231368 = $shr866;$next$271366 = $next$28$lcssa;
    } else {
     $$lcssa = $inc862;$bits$23$lcssa = $sub867;$have$27$lcssa = $have$28$lcssa;$hold$23$lcssa = $shr866;$next$27$lcssa = $next$28$lcssa;
     label = 156;
     break;
    }
   }
  }
  else if ((label|0) == 277) {
   label = 0;
   $150 = load4($wrap);
   $tobool1725 = ($150|0)==(0);
   if ($tobool1725) {
    $bits$52 = $bits$50;$have$56 = $have$54;$hold$52 = $hold$50;$next$56 = $next$54;
    label = 284;
    break;
   }
   $151 = load4($flags);
   $tobool1728 = ($151|0)==(0);
   if ($tobool1728) {
    $bits$52 = $bits$50;$have$56 = $have$54;$hold$52 = $hold$50;$next$56 = $next$54;
    label = 284;
    break;
   }
   $cmp17321338 = ($bits$50>>>0)<(32);
   if ($cmp17321338) {
    $bits$511342 = $bits$50;$have$551340 = $have$54;$hold$511341 = $hold$50;$next$551339 = $next$54;
    while(1) {
     $cmp1736 = ($have$551340|0)==(0);
     if ($cmp1736) {
      $154 = $left$0;$bits$54 = $bits$511342;$have$58 = 0;$hold$54 = $hold$511341;$next$58 = $next$551339;$out$4 = $out$2;$ret$8 = $ret$0;
      break L17;
     }
     $dec1740 = (($have$551340) + -1)|0;
     $incdec$ptr1741 = ((($next$551339)) + 1|0);
     $152 = load1($next$551339);
     $conv1742 = $152&255;
     $shl1743 = $conv1742 << $bits$511342;
     $add1744 = (($shl1743) + ($hold$511341))|0;
     $add1745 = (($bits$511342) + 8)|0;
     $cmp1732 = ($add1745>>>0)<(32);
     if ($cmp1732) {
      $bits$511342 = $add1745;$have$551340 = $dec1740;$hold$511341 = $add1744;$next$551339 = $incdec$ptr1741;
     } else {
      $bits$51$lcssa = $add1745;$have$55$lcssa = $dec1740;$hold$51$lcssa = $add1744;$next$55$lcssa = $incdec$ptr1741;
      break;
     }
    }
   } else {
    $bits$51$lcssa = $bits$50;$have$55$lcssa = $have$54;$hold$51$lcssa = $hold$50;$next$55$lcssa = $next$54;
   }
   $153 = load4($total);
   $cmp1752 = ($hold$51$lcssa|0)==($153|0);
   if ($cmp1752) {
    $bits$52 = 0;$have$56 = $have$55$lcssa;$hold$52 = 0;$next$56 = $next$55$lcssa;
    label = 284;
    break;
   }
   store4($msg,15222);
   store4($0,29);
   $bits$0$be = $bits$51$lcssa;$have$0$be = $have$55$lcssa;$hold$0$be = $hold$51$lcssa;$left$0$be = $left$0;$next$0$be = $next$55$lcssa;$out$0$be = $out$2;$put$0$be = $put$0;$ret$0$be = $ret$0;
  }
  do {
   if ((label|0) == 49) {
    label = 0;
    $22 = load4($head);
    $cmp194 = ($22|0)==(0|0);
    if (!($cmp194)) {
     $time = ((($22)) + 4|0);
     store4($time,$hold$3$lcssa);
    }
    $23 = load4($flags);
    $and200 = $23 & 512;
    $tobool201 = ($and200|0)==(0);
    if (!($tobool201)) {
     $conv204 = $hold$3$lcssa&255;
     store1($hbuf,$conv204);
     $shr206 = $hold$3$lcssa >>> 8;
     $conv207 = $shr206&255;
     store1($arrayidx42,$conv207);
     $shr209 = $hold$3$lcssa >>> 16;
     $conv210 = $shr209&255;
     store1($arrayidx211,$conv210);
     $shr212 = $hold$3$lcssa >>> 24;
     $conv213 = $shr212&255;
     store1($arrayidx214,$conv213);
     $24 = load4($check);
     $call217 = (_crc32($24,$hbuf,4)|0);
     store4($check,$call217);
    }
    store4($0,3);
    $bits$41608 = 0;$have$41606 = $have$3$lcssa;$hold$41607 = 0;$next$41605 = $next$3$lcssa;
    label = 55;
   }
   else if ((label|0) == 124) {
    label = 0;
    if ($9) {
     $$ph = $left$0;$bits$54$ph = $bits$16;$have$58$ph = $have$20;$hold$54$ph = $hold$16;$next$58$ph = $next$20;$ret$8$ph = $ret$0;
     label = 285;
     break L17;
    } else {
     $bits$17 = $bits$16;$have$21 = $have$20;$hold$17 = $hold$16;$next$21 = $next$20;
     label = 125;
    }
   }
   else if ((label|0) == 145) {
    label = 0;
    $71 = load4($length);
    $tobool753 = ($71|0)==(0);
    if ($tobool753) {
     store4($0,11);
     $bits$0$be = $bits$21;$have$0$be = $have$25;$hold$0$be = $hold$21;$left$0$be = $left$0;$next$0$be = $next$25;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
     break;
    }
    $cmp755 = ($71>>>0)>($have$25>>>0);
    $have$25$ = $cmp755 ? $have$25 : $71;
    $cmp759 = ($have$25$>>>0)>($left$0>>>0);
    $copy$4 = $cmp759 ? $left$0 : $have$25$;
    $cmp763 = ($copy$4|0)==(0);
    if ($cmp763) {
     $$ph = $left$0;$bits$54$ph = $bits$21;$have$58$ph = $have$25;$hold$54$ph = $hold$21;$next$58$ph = $next$25;$ret$8$ph = $ret$0;
     label = 285;
     break L17;
    }
    _memcpy(($put$0|0),($next$25|0),($copy$4|0))|0;
    $sub767 = (($have$25) - ($copy$4))|0;
    $add$ptr768 = (($next$25) + ($copy$4)|0);
    $sub769 = (($left$0) - ($copy$4))|0;
    $add$ptr770 = (($put$0) + ($copy$4)|0);
    $72 = load4($length);
    $sub772 = (($72) - ($copy$4))|0;
    store4($length,$sub772);
    $bits$0$be = $bits$21;$have$0$be = $sub767;$hold$0$be = $hold$21;$left$0$be = $sub769;$next$0$be = $add$ptr768;$out$0$be = $out$0;$put$0$be = $add$ptr770;$ret$0$be = $ret$0;
   }
   else if ((label|0) == 156) {
    label = 0;
    $cmp8731376 = ($$lcssa>>>0)<(19);
    if ($cmp8731376) {
     $78 = $$lcssa;
     while(1) {
      $inc877 = (($78) + 1)|0;
      $arrayidx878 = (13548 + ($78<<1)|0);
      $79 = load2($arrayidx878);
      $idxprom879 = $79&65535;
      $arrayidx881 = (((($0)) + 112|0) + ($idxprom879<<1)|0);
      store2($arrayidx881,0);
      $exitcond = ($inc877|0)==(19);
      if ($exitcond) {
       break;
      } else {
       $78 = $inc877;
      }
     }
     store4($have901,19);
    }
    store4($next1161,$arraydecay1160);
    store4($lencode$i,$arraydecay1160);
    store4($lenbits$i,7);
    $call891 = (_inflate_table(0,$arraydecay1166,19,$next1161,$lenbits$i,$arraydecay1171)|0);
    $tobool892 = ($call891|0)==(0);
    if ($tobool892) {
     store4($have901,0);
     store4($0,18);
     $82 = 0;$bits$25$ph = $bits$23$lcssa;$have$29$ph = $have$27$lcssa;$hold$25$ph = $hold$23$lcssa;$next$29$ph = $next$27$lcssa;$ret$1$ph = 0;
     label = 166;
     break;
    } else {
     store4($msg,15063);
     store4($0,29);
     $bits$0$be = $bits$23$lcssa;$have$0$be = $have$27$lcssa;$hold$0$be = $hold$23$lcssa;$left$0$be = $left$0;$next$0$be = $next$27$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $call891;
     break;
    }
   }
  } while(0);
  L161: do {
   if ((label|0) == 55) {
    while(1) {
     label = 0;
     $cmp233 = ($have$41606|0)==(0);
     if ($cmp233) {
      $154 = $left$0;$bits$54 = $bits$41608;$have$58 = 0;$hold$54 = $hold$41607;$next$58 = $next$41605;$out$4 = $out$0;$ret$8 = $ret$0;
      break L17;
     }
     $dec237 = (($have$41606) + -1)|0;
     $incdec$ptr238 = ((($next$41605)) + 1|0);
     $25 = load1($next$41605);
     $conv239 = $25&255;
     $shl240 = $conv239 << $bits$41608;
     $add241 = (($shl240) + ($hold$41607))|0;
     $add242 = (($bits$41608) + 8)|0;
     $cmp229 = ($add242>>>0)<(16);
     if ($cmp229) {
      $bits$41608 = $add242;$have$41606 = $dec237;$hold$41607 = $add241;$next$41605 = $incdec$ptr238;
      label = 55;
     } else {
      $have$4$lcssa = $dec237;$hold$4$lcssa = $add241;$next$4$lcssa = $incdec$ptr238;
      label = 57;
      break;
     }
    }
   }
   else if ((label|0) == 125) {
    label = 0;
    $68 = load4($last638);
    $tobool639 = ($68|0)==(0);
    if (!($tobool639)) {
     $and642 = $bits$17 & 7;
     $shr643 = $hold$17 >>> $and642;
     $sub645 = (($bits$17) - ($and642))|0;
     store4($0,26);
     $bits$0$be = $sub645;$have$0$be = $have$21;$hold$0$be = $shr643;$left$0$be = $left$0;$next$0$be = $next$21;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
     break;
    }
    $cmp6521578 = ($bits$17>>>0)<(3);
    if ($cmp6521578) {
     $cmp656 = ($have$21|0)==(0);
     if ($cmp656) {
      $$ph = $left$0;$bits$54$ph = $bits$17;$have$58$ph = 0;$hold$54$ph = $hold$17;$next$58$ph = $next$21;$ret$8$ph = $ret$0;
      label = 285;
      break L17;
     }
     $add665 = (($bits$17) + 8)|0;
     $69 = load1($next$21);
     $conv662 = $69&255;
     $shl663 = $conv662 << $bits$17;
     $add664 = (($shl663) + ($hold$17))|0;
     $incdec$ptr661 = ((($next$21)) + 1|0);
     $dec660 = (($have$21) + -1)|0;
     $bits$18$lcssa = $add665;$have$22$lcssa = $dec660;$hold$18$lcssa = $add664;$next$22$lcssa = $incdec$ptr661;
    } else {
     $bits$18$lcssa = $bits$17;$have$22$lcssa = $have$21;$hold$18$lcssa = $hold$17;$next$22$lcssa = $next$21;
    }
    $and671 = $hold$18$lcssa & 1;
    store4($last638,$and671);
    $shr674 = $hold$18$lcssa >>> 1;
    $trunc = $shr674&255;
    $trunc$clear = $trunc & 3;
    switch ($trunc$clear<<24>>24) {
    case 0:  {
     store4($0,13);
     break;
    }
    case 1:  {
     store4($lencode$i,11372);
     store4($lenbits$i,9);
     store4($distcode$i,13420);
     store4($distbits$i,5);
     store4($0,19);
     if ($cmp683) {
      label = 133;
      break L17;
     }
     break;
    }
    case 2:  {
     store4($0,16);
     break;
    }
    case 3:  {
     store4($msg,14979);
     store4($0,29);
     break;
    }
    default: {
     label = 136;
     break L17;
    }
    }
    $shr698 = $hold$18$lcssa >>> 3;
    $sub699 = (($bits$18$lcssa) + -3)|0;
    $bits$0$be = $sub699;$have$0$be = $have$22$lcssa;$hold$0$be = $shr698;$left$0$be = $left$0;$next$0$be = $next$22$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
   }
   else if ((label|0) == 166) {
    label = 0;
    $80 = load4($nlen902);
    $81 = load4($ndist903);
    $add9041437 = (($81) + ($80))|0;
    $cmp9051438 = ($82>>>0)<($add9041437>>>0);
    do {
     if ($cmp9051438) {
      $87 = $82;$95 = $80;$96 = $81;$bits$251442 = $bits$25$ph;$have$291440 = $have$29$ph;$hold$251441 = $hold$25$ph;$next$291439 = $next$29$ph;
      L181: while(1) {
       $83 = load4($lenbits$i);
       $shl9101377 = 1 << $83;
       $sub9111378 = (($shl9101377) + -1)|0;
       $and9121379 = $sub9111378 & $hold$251441;
       $84 = load4($lencode$i);
       $here$sroa$18$0$$sroa_idx1380 = (((($84) + ($and9121379<<2)|0)) + 1|0);
       $here$sroa$18$0$copyload1381 = load1($here$sroa$18$0$$sroa_idx1380);
       $conv9161384 = $here$sroa$18$0$copyload1381&255;
       $cmp9171386 = ($conv9161384>>>0)>($bits$251442>>>0);
       if ($cmp9171386) {
        $bits$261390 = $bits$251442;$have$301388 = $have$291440;$hold$261389 = $hold$251441;$next$301387 = $next$291439;
        while(1) {
         $cmp922 = ($have$301388|0)==(0);
         if ($cmp922) {
          $154 = $left$0;$bits$54 = $bits$261390;$have$58 = 0;$hold$54 = $hold$261389;$next$58 = $next$301387;$out$4 = $out$0;$ret$8 = $ret$1$ph;
          break L17;
         }
         $dec926 = (($have$301388) + -1)|0;
         $incdec$ptr927 = ((($next$301387)) + 1|0);
         $85 = load1($next$301387);
         $conv928 = $85&255;
         $shl929 = $conv928 << $bits$261390;
         $add930 = (($shl929) + ($hold$261389))|0;
         $add931 = (($bits$261390) + 8)|0;
         $and912 = $sub9111378 & $add930;
         $here$sroa$18$0$$sroa_idx = (((($84) + ($and912<<2)|0)) + 1|0);
         $here$sroa$18$0$copyload = load1($here$sroa$18$0$$sroa_idx);
         $conv916 = $here$sroa$18$0$copyload&255;
         $cmp917 = ($conv916>>>0)>($add931>>>0);
         if ($cmp917) {
          $bits$261390 = $add931;$have$301388 = $dec926;$hold$261389 = $add930;$next$301387 = $incdec$ptr927;
         } else {
          $and912$pn = $and912;$bits$26$lcssa = $add931;$conv916$lcssa = $conv916;$have$30$lcssa = $dec926;$hold$26$lcssa = $add930;$next$30$lcssa = $incdec$ptr927;
          break;
         }
        }
       } else {
        $and912$pn = $and9121379;$bits$26$lcssa = $bits$251442;$conv916$lcssa = $conv9161384;$have$30$lcssa = $have$291440;$hold$26$lcssa = $hold$251441;$next$30$lcssa = $next$291439;
       }
       $here$sroa$43$0$copyload$lcssa$in = (((($84) + ($and912$pn<<2)|0)) + 2|0);
       $here$sroa$43$0$copyload$lcssa = load2($here$sroa$43$0$copyload$lcssa$in);
       $cmp935 = ($here$sroa$43$0$copyload$lcssa&65535)<(16);
       if ($cmp935) {
        $cmp9421428 = ($bits$26$lcssa>>>0)<($conv916$lcssa>>>0);
        if ($cmp9421428) {
         $bits$271432 = $bits$26$lcssa;$have$311430 = $have$30$lcssa;$hold$271431 = $hold$26$lcssa;$next$311429 = $next$30$lcssa;
         while(1) {
          $cmp946 = ($have$311430|0)==(0);
          if ($cmp946) {
           $154 = $left$0;$bits$54 = $bits$271432;$have$58 = 0;$hold$54 = $hold$271431;$next$58 = $next$311429;$out$4 = $out$0;$ret$8 = $ret$1$ph;
           break L17;
          }
          $dec950 = (($have$311430) + -1)|0;
          $incdec$ptr951 = ((($next$311429)) + 1|0);
          $86 = load1($next$311429);
          $conv952 = $86&255;
          $shl953 = $conv952 << $bits$271432;
          $add954 = (($shl953) + ($hold$271431))|0;
          $add955 = (($bits$271432) + 8)|0;
          $cmp942 = ($add955>>>0)<($conv916$lcssa>>>0);
          if ($cmp942) {
           $bits$271432 = $add955;$have$311430 = $dec950;$hold$271431 = $add954;$next$311429 = $incdec$ptr951;
          } else {
           $bits$27$lcssa = $add955;$have$31$lcssa = $dec950;$hold$27$lcssa = $add954;$next$31$lcssa = $incdec$ptr951;
           break;
          }
         }
        } else {
         $bits$27$lcssa = $bits$26$lcssa;$have$31$lcssa = $have$30$lcssa;$hold$27$lcssa = $hold$26$lcssa;$next$31$lcssa = $next$30$lcssa;
        }
        $shr964 = $hold$27$lcssa >>> $conv916$lcssa;
        $sub967 = (($bits$27$lcssa) - ($conv916$lcssa))|0;
        $inc972 = (($87) + 1)|0;
        store4($have901,$inc972);
        $arrayidx974 = (((($0)) + 112|0) + ($87<<1)|0);
        store2($arrayidx974,$here$sroa$43$0$copyload$lcssa);
        $bits$25$be = $sub967;$have$29$be = $have$31$lcssa;$hold$25$be = $shr964;$next$29$be = $next$31$lcssa;
       } else {
        switch ($here$sroa$43$0$copyload$lcssa<<16>>16) {
        case 16:  {
         $add985 = (($conv916$lcssa) + 2)|0;
         $cmp9861409 = ($bits$26$lcssa>>>0)<($add985>>>0);
         if ($cmp9861409) {
          $bits$281413 = $bits$26$lcssa;$have$321411 = $have$30$lcssa;$hold$281412 = $hold$26$lcssa;$next$321410 = $next$30$lcssa;
          while(1) {
           $cmp990 = ($have$321411|0)==(0);
           if ($cmp990) {
            $154 = $left$0;$bits$54 = $bits$281413;$have$58 = 0;$hold$54 = $hold$281412;$next$58 = $next$321410;$out$4 = $out$0;$ret$8 = $ret$1$ph;
            break L17;
           }
           $dec994 = (($have$321411) + -1)|0;
           $incdec$ptr995 = ((($next$321410)) + 1|0);
           $91 = load1($next$321410);
           $conv996 = $91&255;
           $shl997 = $conv996 << $bits$281413;
           $add998 = (($shl997) + ($hold$281412))|0;
           $add999 = (($bits$281413) + 8)|0;
           $cmp986 = ($add999>>>0)<($add985>>>0);
           if ($cmp986) {
            $bits$281413 = $add999;$have$321411 = $dec994;$hold$281412 = $add998;$next$321410 = $incdec$ptr995;
           } else {
            $bits$28$lcssa = $add999;$have$32$lcssa = $dec994;$hold$28$lcssa = $add998;$next$32$lcssa = $incdec$ptr995;
            break;
           }
          }
         } else {
          $bits$28$lcssa = $bits$26$lcssa;$have$32$lcssa = $have$30$lcssa;$hold$28$lcssa = $hold$26$lcssa;$next$32$lcssa = $next$30$lcssa;
         }
         $shr1008 = $hold$28$lcssa >>> $conv916$lcssa;
         $sub1011 = (($bits$28$lcssa) - ($conv916$lcssa))|0;
         $cmp1015 = ($87|0)==(0);
         if ($cmp1015) {
          label = 183;
          break L181;
         }
         $sub1022 = (($87) + -1)|0;
         $arrayidx1024 = (((($0)) + 112|0) + ($sub1022<<1)|0);
         $92 = load2($arrayidx1024);
         $conv1025 = $92&65535;
         $and1026 = $shr1008 & 3;
         $add1027 = (($and1026) + 3)|0;
         $shr1029 = $shr1008 >>> 2;
         $sub1030 = (($sub1011) + -2)|0;
         $bits$31 = $sub1030;$copy$5 = $add1027;$have$35 = $have$32$lcssa;$hold$31 = $shr1029;$len$0 = $conv1025;$next$35 = $next$32$lcssa;
         break;
        }
        case 17:  {
         $add1043 = (($conv916$lcssa) + 3)|0;
         $cmp10441400 = ($bits$26$lcssa>>>0)<($add1043>>>0);
         if ($cmp10441400) {
          $bits$291404 = $bits$26$lcssa;$have$331402 = $have$30$lcssa;$hold$291403 = $hold$26$lcssa;$next$331401 = $next$30$lcssa;
          while(1) {
           $cmp1048 = ($have$331402|0)==(0);
           if ($cmp1048) {
            $154 = $left$0;$bits$54 = $bits$291404;$have$58 = 0;$hold$54 = $hold$291403;$next$58 = $next$331401;$out$4 = $out$0;$ret$8 = $ret$1$ph;
            break L17;
           }
           $dec1052 = (($have$331402) + -1)|0;
           $incdec$ptr1053 = ((($next$331401)) + 1|0);
           $93 = load1($next$331401);
           $conv1054 = $93&255;
           $shl1055 = $conv1054 << $bits$291404;
           $add1056 = (($shl1055) + ($hold$291403))|0;
           $add1057 = (($bits$291404) + 8)|0;
           $cmp1044 = ($add1057>>>0)<($add1043>>>0);
           if ($cmp1044) {
            $bits$291404 = $add1057;$have$331402 = $dec1052;$hold$291403 = $add1056;$next$331401 = $incdec$ptr1053;
           } else {
            $bits$29$lcssa = $add1057;$have$33$lcssa = $dec1052;$hold$29$lcssa = $add1056;$next$33$lcssa = $incdec$ptr1053;
            break;
           }
          }
         } else {
          $bits$29$lcssa = $bits$26$lcssa;$have$33$lcssa = $have$30$lcssa;$hold$29$lcssa = $hold$26$lcssa;$next$33$lcssa = $next$30$lcssa;
         }
         $shr1066 = $hold$29$lcssa >>> $conv916$lcssa;
         $and1072 = $shr1066 & 7;
         $add1073 = (($and1072) + 3)|0;
         $shr1075 = $shr1066 >>> 3;
         $sub1069 = (-3 - ($conv916$lcssa))|0;
         $sub1076 = (($sub1069) + ($bits$29$lcssa))|0;
         $bits$31 = $sub1076;$copy$5 = $add1073;$have$35 = $have$33$lcssa;$hold$31 = $shr1075;$len$0 = 0;$next$35 = $next$33$lcssa;
         break;
        }
        default: {
         $add1084 = (($conv916$lcssa) + 7)|0;
         $cmp10851418 = ($bits$26$lcssa>>>0)<($add1084>>>0);
         if ($cmp10851418) {
          $bits$301422 = $bits$26$lcssa;$have$341420 = $have$30$lcssa;$hold$301421 = $hold$26$lcssa;$next$341419 = $next$30$lcssa;
          while(1) {
           $cmp1089 = ($have$341420|0)==(0);
           if ($cmp1089) {
            $154 = $left$0;$bits$54 = $bits$301422;$have$58 = 0;$hold$54 = $hold$301421;$next$58 = $next$341419;$out$4 = $out$0;$ret$8 = $ret$1$ph;
            break L17;
           }
           $dec1093 = (($have$341420) + -1)|0;
           $incdec$ptr1094 = ((($next$341419)) + 1|0);
           $94 = load1($next$341419);
           $conv1095 = $94&255;
           $shl1096 = $conv1095 << $bits$301422;
           $add1097 = (($shl1096) + ($hold$301421))|0;
           $add1098 = (($bits$301422) + 8)|0;
           $cmp1085 = ($add1098>>>0)<($add1084>>>0);
           if ($cmp1085) {
            $bits$301422 = $add1098;$have$341420 = $dec1093;$hold$301421 = $add1097;$next$341419 = $incdec$ptr1094;
           } else {
            $bits$30$lcssa = $add1098;$have$34$lcssa = $dec1093;$hold$30$lcssa = $add1097;$next$34$lcssa = $incdec$ptr1094;
            break;
           }
          }
         } else {
          $bits$30$lcssa = $bits$26$lcssa;$have$34$lcssa = $have$30$lcssa;$hold$30$lcssa = $hold$26$lcssa;$next$34$lcssa = $next$30$lcssa;
         }
         $shr1107 = $hold$30$lcssa >>> $conv916$lcssa;
         $and1113 = $shr1107 & 127;
         $add1114 = (($and1113) + 11)|0;
         $shr1116 = $shr1107 >>> 7;
         $sub1110 = (-7 - ($conv916$lcssa))|0;
         $sub1117 = (($sub1110) + ($bits$30$lcssa))|0;
         $bits$31 = $sub1117;$copy$5 = $add1114;$have$35 = $have$34$lcssa;$hold$31 = $shr1116;$len$0 = 0;$next$35 = $next$34$lcssa;
        }
        }
        $add1123 = (($87) + ($copy$5))|0;
        $add1126 = (($96) + ($95))|0;
        $cmp1127 = ($add1123>>>0)>($add1126>>>0);
        if ($cmp1127) {
         label = 193;
         break;
        }
        $conv1137 = $len$0&65535;
        $dec11342761 = (($copy$5) + -1)|0;
        $inc11392762 = (($87) + 1)|0;
        store4($have901,$inc11392762);
        $arrayidx11412763 = (((($0)) + 112|0) + ($87<<1)|0);
        store2($arrayidx11412763,$conv1137);
        $tobool11352764 = ($dec11342761|0)==(0);
        if ($tobool11352764) {
         $bits$25$be = $bits$31;$have$29$be = $have$35;$hold$25$be = $hold$31;$next$29$be = $next$35;
        } else {
         $dec11342765 = $dec11342761;
         while(1) {
          $$pre2018 = load4($have901);
          $dec1134 = (($dec11342765) + -1)|0;
          $inc1139 = (($$pre2018) + 1)|0;
          store4($have901,$inc1139);
          $arrayidx1141 = (((($0)) + 112|0) + ($$pre2018<<1)|0);
          store2($arrayidx1141,$conv1137);
          $tobool1135 = ($dec1134|0)==(0);
          if ($tobool1135) {
           $bits$25$be = $bits$31;$have$29$be = $have$35;$hold$25$be = $hold$31;$next$29$be = $next$35;
           break;
          } else {
           $dec11342765 = $dec1134;
          }
         }
        }
       }
       $88 = load4($have901);
       $89 = load4($nlen902);
       $90 = load4($ndist903);
       $add904 = (($90) + ($89))|0;
       $cmp905 = ($88>>>0)<($add904>>>0);
       if ($cmp905) {
        $87 = $88;$95 = $89;$96 = $90;$bits$251442 = $bits$25$be;$have$291440 = $have$29$be;$hold$251441 = $hold$25$be;$next$291439 = $next$29$be;
       } else {
        label = 195;
        break;
       }
      }
      if ((label|0) == 183) {
       label = 0;
       store4($msg,15088);
       store4($0,29);
       $bits$0$be = $sub1011;$have$0$be = $have$32$lcssa;$hold$0$be = $shr1008;$left$0$be = $left$0;$next$0$be = $next$32$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$1$ph;
       break L161;
      }
      else if ((label|0) == 193) {
       label = 0;
       store4($msg,15088);
       store4($0,29);
       $bits$0$be = $bits$31;$have$0$be = $have$35;$hold$0$be = $hold$31;$left$0$be = $left$0;$next$0$be = $next$35;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$1$ph;
       break L161;
      }
      else if ((label|0) == 195) {
       label = 0;
       $$pr874$pre = load4($0);
       $cmp1146 = ($$pr874$pre|0)==(29);
       if ($cmp1146) {
        $bits$0$be = $bits$25$be;$have$0$be = $have$29$be;$hold$0$be = $hold$25$be;$left$0$be = $left$0;$next$0$be = $next$29$be;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$1$ph;
        break L161;
       } else {
        $98 = $89;$bits$25$lcssa2049 = $bits$25$be;$have$29$lcssa2047 = $have$29$be;$hold$25$lcssa2048 = $hold$25$be;$next$29$lcssa2046 = $next$29$be;
        break;
       }
      }
     } else {
      $98 = $80;$bits$25$lcssa2049 = $bits$25$ph;$have$29$lcssa2047 = $have$29$ph;$hold$25$lcssa2048 = $hold$25$ph;$next$29$lcssa2046 = $next$29$ph;
     }
    } while(0);
    $97 = load2($arrayidx1151);
    $cmp1153 = ($97<<16>>16)==(0);
    if ($cmp1153) {
     store4($msg,15114);
     store4($0,29);
     $bits$0$be = $bits$25$lcssa2049;$have$0$be = $have$29$lcssa2047;$hold$0$be = $hold$25$lcssa2048;$left$0$be = $left$0;$next$0$be = $next$29$lcssa2046;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$1$ph;
     break;
    }
    store4($next1161,$arraydecay1160);
    store4($lencode$i,$arraydecay1160);
    store4($lenbits$i,9);
    $call1172 = (_inflate_table(1,$arraydecay1166,$98,$next1161,$lenbits$i,$arraydecay1171)|0);
    $tobool1173 = ($call1172|0)==(0);
    if (!($tobool1173)) {
     store4($msg,15151);
     store4($0,29);
     $bits$0$be = $bits$25$lcssa2049;$have$0$be = $have$29$lcssa2047;$hold$0$be = $hold$25$lcssa2048;$left$0$be = $left$0;$next$0$be = $next$29$lcssa2046;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $call1172;
     break;
    }
    $99 = load4($next1161);
    store4($distcode$i,$99);
    store4($distbits$i,6);
    $100 = load4($nlen902);
    $add$ptr1182 = (((($0)) + 112|0) + ($100<<1)|0);
    $101 = load4($ndist903);
    $call1188 = (_inflate_table(2,$add$ptr1182,$101,$next1161,$distbits$i,$arraydecay1171)|0);
    $tobool1189 = ($call1188|0)==(0);
    if ($tobool1189) {
     store4($0,19);
     if ($cmp683) {
      $$ph = $left$0;$bits$54$ph = $bits$25$lcssa2049;$have$58$ph = $have$29$lcssa2047;$hold$54$ph = $hold$25$lcssa2048;$next$58$ph = $next$29$lcssa2046;$ret$8$ph = 0;
      label = 285;
      break L17;
     } else {
      $bits$33 = $bits$25$lcssa2049;$have$37 = $have$29$lcssa2047;$hold$33 = $hold$25$lcssa2048;$next$37 = $next$29$lcssa2046;$ret$2 = 0;
      label = 203;
      break;
     }
    } else {
     store4($msg,15179);
     store4($0,29);
     $bits$0$be = $bits$25$lcssa2049;$have$0$be = $have$29$lcssa2047;$hold$0$be = $hold$25$lcssa2048;$left$0$be = $left$0;$next$0$be = $next$29$lcssa2046;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $call1188;
     break;
    }
   }
  } while(0);
  if ((label|0) == 57) {
   label = 0;
   $26 = load4($head);
   $cmp249 = ($26|0)==(0|0);
   if (!($cmp249)) {
    $shr254 = $hold$4$lcssa >>> 8;
    $xflags = ((($26)) + 8|0);
    $and252 = $hold$4$lcssa & 255;
    store4($xflags,$and252);
    $os = ((($26)) + 12|0);
    store4($os,$shr254);
   }
   $27 = load4($flags);
   $and258 = $27 & 512;
   $tobool259 = ($and258|0)==(0);
   if (!($tobool259)) {
    $conv262 = $hold$4$lcssa&255;
    store1($hbuf,$conv262);
    $shr264 = $hold$4$lcssa >>> 8;
    $conv265 = $shr264&255;
    store1($arrayidx42,$conv265);
    $28 = load4($check);
    $call269 = (_crc32($28,$hbuf,2)|0);
    store4($check,$call269);
   }
   store4($0,4);
   $bits$5 = 0;$have$5 = $have$4$lcssa;$hold$5 = 0;$next$5 = $next$4$lcssa;
   label = 62;
  }
  else if ((label|0) == 203) {
   label = 0;
   store4($0,20);
   $bits$34 = $bits$33;$have$38 = $have$37;$hold$34 = $hold$33;$next$38 = $next$37;$ret$3 = $ret$2;
   label = 204;
  }
  do {
   if ((label|0) == 62) {
    label = 0;
    $29 = load4($flags);
    $and280 = $29 & 1024;
    $tobool281 = ($and280|0)==(0);
    if ($tobool281) {
     $33 = load4($head);
     $cmp332 = ($33|0)==(0|0);
     if ($cmp332) {
      $bits$7 = $bits$5;$have$7 = $have$5;$hold$7 = $hold$5;$next$7 = $next$5;
     } else {
      $extra = ((($33)) + 16|0);
      store4($extra,0);
      $bits$7 = $bits$5;$have$7 = $have$5;$hold$7 = $hold$5;$next$7 = $next$5;
     }
    } else {
     $cmp2851612 = ($bits$5>>>0)<(16);
     if ($cmp2851612) {
      $bits$61616 = $bits$5;$have$61614 = $have$5;$hold$61615 = $hold$5;$next$61613 = $next$5;
      while(1) {
       $cmp289 = ($have$61614|0)==(0);
       if ($cmp289) {
        $154 = $left$0;$bits$54 = $bits$61616;$have$58 = 0;$hold$54 = $hold$61615;$next$58 = $next$61613;$out$4 = $out$0;$ret$8 = $ret$0;
        break L17;
       }
       $dec293 = (($have$61614) + -1)|0;
       $incdec$ptr294 = ((($next$61613)) + 1|0);
       $30 = load1($next$61613);
       $conv295 = $30&255;
       $shl296 = $conv295 << $bits$61616;
       $add297 = (($shl296) + ($hold$61615))|0;
       $add298 = (($bits$61616) + 8)|0;
       $cmp285 = ($add298>>>0)<(16);
       if ($cmp285) {
        $bits$61616 = $add298;$have$61614 = $dec293;$hold$61615 = $add297;$next$61613 = $incdec$ptr294;
       } else {
        $have$6$lcssa = $dec293;$hold$6$lcssa = $add297;$next$6$lcssa = $incdec$ptr294;
        break;
       }
      }
     } else {
      $have$6$lcssa = $have$5;$hold$6$lcssa = $hold$5;$next$6$lcssa = $next$5;
     }
     store4($length,$hold$6$lcssa);
     $31 = load4($head);
     $cmp305 = ($31|0)==(0|0);
     if (!($cmp305)) {
      $extra_len = ((($31)) + 20|0);
      store4($extra_len,$hold$6$lcssa);
     }
     $and311 = $29 & 512;
     $tobool312 = ($and311|0)==(0);
     if ($tobool312) {
      $bits$7 = 0;$have$7 = $have$6$lcssa;$hold$7 = 0;$next$7 = $next$6$lcssa;
     } else {
      $conv315 = $hold$6$lcssa&255;
      store1($hbuf,$conv315);
      $shr317 = $hold$6$lcssa >>> 8;
      $conv318 = $shr317&255;
      store1($arrayidx42,$conv318);
      $32 = load4($check);
      $call322 = (_crc32($32,$hbuf,2)|0);
      store4($check,$call322);
      $bits$7 = 0;$have$7 = $have$6$lcssa;$hold$7 = 0;$next$7 = $next$6$lcssa;
     }
    }
    store4($0,5);
    $bits$8 = $bits$7;$have$8 = $have$7;$hold$8 = $hold$7;$next$8 = $next$7;
    label = 73;
   }
   else if ((label|0) == 204) {
    label = 0;
    $cmp1202 = ($have$38>>>0)>(5);
    $cmp1205 = ($left$0>>>0)>(257);
    $or$cond2 = $cmp1205 & $cmp1202;
    if ($or$cond2) {
     store4($next_out,$put$0);
     store4($avail_out,$left$0);
     store4($strm,$next$38);
     store4($avail_in15,$have$38);
     store4($hold16,$hold$34);
     store4($bits17,$bits$34);
     _inflate_fast($strm,$out$0);
     $102 = load4($next_out);
     $103 = load4($avail_out);
     $104 = load4($strm);
     $105 = load4($avail_in15);
     $106 = load4($hold16);
     $107 = load4($bits17);
     $108 = load4($0);
     $cmp1227 = ($108|0)==(11);
     if (!($cmp1227)) {
      $bits$0$be = $107;$have$0$be = $105;$hold$0$be = $106;$left$0$be = $103;$next$0$be = $104;$out$0$be = $out$0;$put$0$be = $102;$ret$0$be = $ret$3;
      break;
     }
     store4($back,-1);
     $bits$0$be = $107;$have$0$be = $105;$hold$0$be = $106;$left$0$be = $103;$next$0$be = $104;$out$0$be = $out$0;$put$0$be = $102;$ret$0$be = $ret$3;
     break;
    }
    store4($back,0);
    $109 = load4($lenbits$i);
    $shl12351449 = 1 << $109;
    $sub12361450 = (($shl12351449) + -1)|0;
    $and12371451 = $sub12361450 & $hold$34;
    $110 = load4($lencode$i);
    $here$sroa$18$0$$sroa_idx661454 = (((($110) + ($and12371451<<2)|0)) + 1|0);
    $here$sroa$18$0$copyload671455 = load1($here$sroa$18$0$$sroa_idx661454);
    $conv12411458 = $here$sroa$18$0$copyload671455&255;
    $cmp12421459 = ($conv12411458>>>0)>($bits$34>>>0);
    if ($cmp12421459) {
     $bits$351463 = $bits$34;$have$391461 = $have$38;$hold$351462 = $hold$34;$next$391460 = $next$38;
     while(1) {
      $cmp1247 = ($have$391461|0)==(0);
      if ($cmp1247) {
       $154 = $left$0;$bits$54 = $bits$351463;$have$58 = 0;$hold$54 = $hold$351462;$next$58 = $next$391460;$out$4 = $out$0;$ret$8 = $ret$3;
       break L17;
      }
      $dec1251 = (($have$391461) + -1)|0;
      $incdec$ptr1252 = ((($next$391460)) + 1|0);
      $111 = load1($next$391460);
      $conv1253 = $111&255;
      $shl1254 = $conv1253 << $bits$351463;
      $add1255 = (($shl1254) + ($hold$351462))|0;
      $add1256 = (($bits$351463) + 8)|0;
      $and1237 = $sub12361450 & $add1255;
      $here$sroa$18$0$$sroa_idx66 = (((($110) + ($and1237<<2)|0)) + 1|0);
      $here$sroa$18$0$copyload67 = load1($here$sroa$18$0$$sroa_idx66);
      $conv1241 = $here$sroa$18$0$copyload67&255;
      $cmp1242 = ($conv1241>>>0)>($add1256>>>0);
      if ($cmp1242) {
       $bits$351463 = $add1256;$have$391461 = $dec1251;$hold$351462 = $add1255;$next$391460 = $incdec$ptr1252;
      } else {
       $and1237$pn = $and1237;$bits$35$lcssa = $add1256;$conv1241$lcssa = $conv1241;$have$39$lcssa = $dec1251;$here$sroa$18$0$copyload67$lcssa = $here$sroa$18$0$copyload67;$hold$35$lcssa = $add1255;$next$39$lcssa = $incdec$ptr1252;
       break;
      }
     }
    } else {
     $and1237$pn = $and12371451;$bits$35$lcssa = $bits$34;$conv1241$lcssa = $conv12411458;$have$39$lcssa = $have$38;$here$sroa$18$0$copyload67$lcssa = $here$sroa$18$0$copyload671455;$hold$35$lcssa = $hold$34;$next$39$lcssa = $next$38;
    }
    $here$sroa$43$0$copyload98$lcssa$in = (((($110) + ($and1237$pn<<2)|0)) + 2|0);
    $here$sroa$0$0$copyload59$lcssa$in = (($110) + ($and1237$pn<<2)|0);
    $here$sroa$43$0$copyload98$lcssa = load2($here$sroa$43$0$copyload98$lcssa$in);
    $here$sroa$0$0$copyload59$lcssa = load1($here$sroa$0$0$copyload59$lcssa$in);
    $conv1260 = $here$sroa$0$0$copyload59$lcssa&255;
    $tobool1261 = ($here$sroa$0$0$copyload59$lcssa<<24>>24)!=(0);
    $and1265 = $conv1260 & 240;
    $cmp1266 = ($and1265|0)==(0);
    $or$cond873 = $tobool1261 & $cmp1266;
    if ($or$cond873) {
     $conv1271 = $here$sroa$43$0$copyload98$lcssa&65535;
     $add1276 = (($conv1241$lcssa) + ($conv1260))|0;
     $shl1277 = 1 << $add1276;
     $sub1278 = (($shl1277) + -1)|0;
     $and12791476 = $hold$35$lcssa & $sub1278;
     $shr12821477 = $and12791476 >>> $conv1241$lcssa;
     $add12831478 = (($shr12821477) + ($conv1271))|0;
     $here$sroa$18$0$$sroa_idx681479 = (((($110) + ($add12831478<<2)|0)) + 1|0);
     $here$sroa$18$0$copyload691480 = load1($here$sroa$18$0$$sroa_idx681479);
     $conv12891481 = $here$sroa$18$0$copyload691480&255;
     $add12901482 = (($conv12891481) + ($conv1241$lcssa))|0;
     $cmp12911483 = ($add12901482>>>0)>($bits$35$lcssa>>>0);
     if ($cmp12911483) {
      $bits$361487 = $bits$35$lcssa;$have$401485 = $have$39$lcssa;$hold$361486 = $hold$35$lcssa;$next$401484 = $next$39$lcssa;
      while(1) {
       $cmp1296 = ($have$401485|0)==(0);
       if ($cmp1296) {
        $154 = $left$0;$bits$54 = $bits$361487;$have$58 = 0;$hold$54 = $hold$361486;$next$58 = $next$401484;$out$4 = $out$0;$ret$8 = $ret$3;
        break L17;
       }
       $dec1300 = (($have$401485) + -1)|0;
       $incdec$ptr1301 = ((($next$401484)) + 1|0);
       $112 = load1($next$401484);
       $conv1302 = $112&255;
       $shl1303 = $conv1302 << $bits$361487;
       $add1304 = (($shl1303) + ($hold$361486))|0;
       $add1305 = (($bits$361487) + 8)|0;
       $and1279 = $add1304 & $sub1278;
       $shr1282 = $and1279 >>> $conv1241$lcssa;
       $add1283 = (($shr1282) + ($conv1271))|0;
       $here$sroa$18$0$$sroa_idx68 = (((($110) + ($add1283<<2)|0)) + 1|0);
       $here$sroa$18$0$copyload69 = load1($here$sroa$18$0$$sroa_idx68);
       $conv1289 = $here$sroa$18$0$copyload69&255;
       $add1290 = (($conv1289) + ($conv1241$lcssa))|0;
       $cmp1291 = ($add1290>>>0)>($add1305>>>0);
       if ($cmp1291) {
        $bits$361487 = $add1305;$have$401485 = $dec1300;$hold$361486 = $add1304;$next$401484 = $incdec$ptr1301;
       } else {
        $add1283$lcssa = $add1283;$bits$36$lcssa = $add1305;$have$40$lcssa = $dec1300;$here$sroa$18$0$copyload69$lcssa = $here$sroa$18$0$copyload69;$hold$36$lcssa = $add1304;$next$40$lcssa = $incdec$ptr1301;
        break;
       }
      }
     } else {
      $add1283$lcssa = $add12831478;$bits$36$lcssa = $bits$35$lcssa;$have$40$lcssa = $have$39$lcssa;$here$sroa$18$0$copyload69$lcssa = $here$sroa$18$0$copyload691480;$hold$36$lcssa = $hold$35$lcssa;$next$40$lcssa = $next$39$lcssa;
     }
     $here$sroa$43$0$$sroa_idx99 = (((($110) + ($add1283$lcssa<<2)|0)) + 2|0);
     $here$sroa$43$0$copyload100 = load2($here$sroa$43$0$$sroa_idx99);
     $here$sroa$0$0$$sroa_idx60 = (($110) + ($add1283$lcssa<<2)|0);
     $here$sroa$0$0$copyload61 = load1($here$sroa$0$0$$sroa_idx60);
     $shr1312 = $hold$36$lcssa >>> $conv1241$lcssa;
     $sub1315 = (($bits$36$lcssa) - ($conv1241$lcssa))|0;
     store4($back,$conv1241$lcssa);
     $113 = $conv1241$lcssa;$bits$37 = $sub1315;$have$41 = $have$40$lcssa;$here$sroa$0$0 = $here$sroa$0$0$copyload61;$here$sroa$18$0 = $here$sroa$18$0$copyload69$lcssa;$here$sroa$43$0 = $here$sroa$43$0$copyload100;$hold$37 = $shr1312;$next$41 = $next$40$lcssa;
    } else {
     $113 = 0;$bits$37 = $bits$35$lcssa;$have$41 = $have$39$lcssa;$here$sroa$0$0 = $here$sroa$0$0$copyload59$lcssa;$here$sroa$18$0 = $here$sroa$18$0$copyload67$lcssa;$here$sroa$43$0 = $here$sroa$43$0$copyload98$lcssa;$hold$37 = $hold$35$lcssa;$next$41 = $next$39$lcssa;
    }
    $conv1325 = $here$sroa$18$0&255;
    $shr1326 = $hold$37 >>> $conv1325;
    $sub1329 = (($bits$37) - ($conv1325))|0;
    $add1335 = (($113) + ($conv1325))|0;
    store4($back,$add1335);
    $conv1337 = $here$sroa$43$0&65535;
    store4($length,$conv1337);
    $conv1340 = $here$sroa$0$0&255;
    $cmp1341 = ($here$sroa$0$0<<24>>24)==(0);
    if ($cmp1341) {
     store4($0,25);
     $bits$0$be = $sub1329;$have$0$be = $have$41;$hold$0$be = $shr1326;$left$0$be = $left$0;$next$0$be = $next$41;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$3;
     break;
    }
    $and1348 = $conv1340 & 32;
    $tobool1349 = ($and1348|0)==(0);
    if (!($tobool1349)) {
     store4($back,-1);
     store4($0,11);
     $bits$0$be = $sub1329;$have$0$be = $have$41;$hold$0$be = $shr1326;$left$0$be = $left$0;$next$0$be = $next$41;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$3;
     break;
    }
    $and1356 = $conv1340 & 64;
    $tobool1357 = ($and1356|0)==(0);
    if ($tobool1357) {
     $and1364 = $conv1340 & 15;
     store4($extra1365,$and1364);
     store4($0,21);
     $114 = $and1364;$bits$38 = $sub1329;$have$42 = $have$41;$hold$38 = $shr1326;$next$42 = $next$41;$ret$4 = $ret$3;
     label = 222;
     break;
    } else {
     store4($msg,15297);
     store4($0,29);
     $bits$0$be = $sub1329;$have$0$be = $have$41;$hold$0$be = $shr1326;$left$0$be = $left$0;$next$0$be = $next$41;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$3;
     break;
    }
   }
  } while(0);
  if ((label|0) == 73) {
   label = 0;
   $34 = load4($flags);
   $and341 = $34 & 1024;
   $tobool342 = ($and341|0)==(0);
   if ($tobool342) {
    $have$10 = $have$8;$next$10 = $next$8;
   } else {
    $35 = load4($length);
    $cmp345 = ($35>>>0)>($have$8>>>0);
    $have$8$ = $cmp345 ? $have$8 : $35;
    $tobool349 = ($have$8$|0)==(0);
    if ($tobool349) {
     $43 = $35;$have$9 = $have$8;$next$9 = $next$8;
    } else {
     $36 = load4($head);
     $cmp352 = ($36|0)==(0|0);
     if ($cmp352) {
      $40 = $34;
     } else {
      $extra356 = ((($36)) + 16|0);
      $37 = load4($extra356);
      $cmp357 = ($37|0)==(0|0);
      if ($cmp357) {
       $40 = $34;
      } else {
       $extra_len361 = ((($36)) + 20|0);
       $38 = load4($extra_len361);
       $sub363 = (($38) - ($35))|0;
       $add$ptr = (($37) + ($sub363)|0);
       $add366 = (($sub363) + ($have$8$))|0;
       $extra_max = ((($36)) + 24|0);
       $39 = load4($extra_max);
       $cmp368 = ($add366>>>0)>($39>>>0);
       $sub372 = (($39) - ($sub363))|0;
       $cond373 = $cmp368 ? $sub372 : $have$8$;
       _memcpy(($add$ptr|0),($next$8|0),($cond373|0))|0;
       $$pre2025 = load4($flags);
       $40 = $$pre2025;
      }
     }
     $and376 = $40 & 512;
     $tobool377 = ($and376|0)==(0);
     if (!($tobool377)) {
      $41 = load4($check);
      $call380 = (_crc32($41,$next$8,$have$8$)|0);
      store4($check,$call380);
     }
     $sub383 = (($have$8) - ($have$8$))|0;
     $add$ptr384 = (($next$8) + ($have$8$)|0);
     $42 = load4($length);
     $sub386 = (($42) - ($have$8$))|0;
     store4($length,$sub386);
     $43 = $sub386;$have$9 = $sub383;$next$9 = $add$ptr384;
    }
    $tobool389 = ($43|0)==(0);
    if ($tobool389) {
     $have$10 = $have$9;$next$10 = $next$9;
    } else {
     $$ph = $left$0;$bits$54$ph = $bits$8;$have$58$ph = $have$9;$hold$54$ph = $hold$8;$next$58$ph = $next$9;$ret$8$ph = $ret$0;
     label = 285;
     break;
    }
   }
   store4($length,0);
   store4($0,6);
   $bits$9 = $bits$8;$have$11 = $have$10;$hold$9 = $hold$8;$next$11 = $next$10;
   label = 83;
  }
  else if ((label|0) == 222) {
   label = 0;
   $tobool1369 = ($114|0)==(0);
   if ($tobool1369) {
    $$pre2022 = load4($length);
    $118 = $$pre2022;$bits$40 = $bits$38;$have$44 = $have$42;$hold$40 = $hold$38;$next$44 = $next$42;
   } else {
    $cmp13741495 = ($bits$38>>>0)<($114>>>0);
    if ($cmp13741495) {
     $bits$391499 = $bits$38;$have$431497 = $have$42;$hold$391498 = $hold$38;$next$431496 = $next$42;
     while(1) {
      $cmp1378 = ($have$431497|0)==(0);
      if ($cmp1378) {
       $154 = $left$0;$bits$54 = $bits$391499;$have$58 = 0;$hold$54 = $hold$391498;$next$58 = $next$431496;$out$4 = $out$0;$ret$8 = $ret$4;
       break L17;
      }
      $dec1382 = (($have$431497) + -1)|0;
      $incdec$ptr1383 = ((($next$431496)) + 1|0);
      $115 = load1($next$431496);
      $conv1384 = $115&255;
      $shl1385 = $conv1384 << $bits$391499;
      $add1386 = (($shl1385) + ($hold$391498))|0;
      $add1387 = (($bits$391499) + 8)|0;
      $cmp1374 = ($add1387>>>0)<($114>>>0);
      if ($cmp1374) {
       $bits$391499 = $add1387;$have$431497 = $dec1382;$hold$391498 = $add1386;$next$431496 = $incdec$ptr1383;
      } else {
       $bits$39$lcssa = $add1387;$have$43$lcssa = $dec1382;$hold$39$lcssa = $add1386;$next$43$lcssa = $incdec$ptr1383;
       break;
      }
     }
    } else {
     $bits$39$lcssa = $bits$38;$have$43$lcssa = $have$42;$hold$39$lcssa = $hold$38;$next$43$lcssa = $next$42;
    }
    $shl1394 = 1 << $114;
    $sub1395 = (($shl1394) + -1)|0;
    $and1396 = $sub1395 & $hold$39$lcssa;
    $116 = load4($length);
    $add1398 = (($116) + ($and1396))|0;
    store4($length,$add1398);
    $shr1401 = $hold$39$lcssa >>> $114;
    $sub1403 = (($bits$39$lcssa) - ($114))|0;
    $117 = load4($back);
    $add1408 = (($117) + ($114))|0;
    store4($back,$add1408);
    $118 = $add1398;$bits$40 = $sub1403;$have$44 = $have$43$lcssa;$hold$40 = $shr1401;$next$44 = $next$43$lcssa;
   }
   store4($was,$118);
   store4($0,22);
   $bits$41$ph = $bits$40;$have$45$ph = $have$44;$hold$41$ph = $hold$40;$next$45$ph = $next$44;$ret$5$ph = $ret$4;
   label = 229;
  }
  do {
   if ((label|0) == 83) {
    label = 0;
    $44 = load4($flags);
    $and397 = $44 & 2048;
    $tobool398 = ($and397|0)==(0);
    if ($tobool398) {
     $52 = load4($head);
     $cmp447 = ($52|0)==(0|0);
     if ($cmp447) {
      $have$12 = $have$11;$next$12 = $next$11;
     } else {
      $name451 = ((($52)) + 28|0);
      store4($name451,0);
      $have$12 = $have$11;$next$12 = $next$11;
     }
    } else {
     $cmp400 = ($have$11|0)==(0);
     if ($cmp400) {
      $$ph = $left$0;$bits$54$ph = $bits$9;$have$58$ph = 0;$hold$54$ph = $hold$9;$next$58$ph = $next$11;$ret$8$ph = $ret$0;
      label = 285;
      break L17;
     } else {
      $copy$1 = 0;
     }
     while(1) {
      $inc = (($copy$1) + 1)|0;
      $arrayidx405 = (($next$11) + ($copy$1)|0);
      $45 = load1($arrayidx405);
      $46 = load4($head);
      $cmp408 = ($46|0)==(0|0);
      if (!($cmp408)) {
       $name = ((($46)) + 28|0);
       $47 = load4($name);
       $cmp412 = ($47|0)==(0|0);
       if (!($cmp412)) {
        $48 = load4($length);
        $name_max = ((($46)) + 32|0);
        $49 = load4($name_max);
        $cmp417 = ($48>>>0)<($49>>>0);
        if ($cmp417) {
         $inc422 = (($48) + 1)|0;
         store4($length,$inc422);
         $arrayidx425 = (($47) + ($48)|0);
         store1($arrayidx425,$45);
        }
       }
      }
      $tobool428 = ($45<<24>>24)!=(0);
      $cmp429 = ($have$11>>>0)>($inc>>>0);
      $or$cond871 = $tobool428 & $cmp429;
      if ($or$cond871) {
       $copy$1 = $inc;
      } else {
       break;
      }
     }
     $50 = load4($flags);
     $and433 = $50 & 512;
     $tobool434 = ($and433|0)==(0);
     if (!($tobool434)) {
      $51 = load4($check);
      $call437 = (_crc32($51,$next$11,$inc)|0);
      store4($check,$call437);
     }
     $sub440 = (($have$11) - ($inc))|0;
     $add$ptr441 = (($next$11) + ($inc)|0);
     if ($tobool428) {
      $$ph = $left$0;$bits$54$ph = $bits$9;$have$58$ph = $sub440;$hold$54$ph = $hold$9;$next$58$ph = $add$ptr441;$ret$8$ph = $ret$0;
      label = 285;
      break L17;
     } else {
      $have$12 = $sub440;$next$12 = $add$ptr441;
     }
    }
    store4($length,0);
    store4($0,7);
    $bits$10 = $bits$9;$have$13 = $have$12;$hold$10 = $hold$9;$next$13 = $next$12;
    label = 96;
   }
   else if ((label|0) == 229) {
    label = 0;
    $119 = load4($distbits$i);
    $shl14151505 = 1 << $119;
    $sub14161506 = (($shl14151505) + -1)|0;
    $and14171507 = $sub14161506 & $hold$41$ph;
    $120 = load4($distcode$i);
    $here$sroa$18$0$$sroa_idx641510 = (((($120) + ($and14171507<<2)|0)) + 1|0);
    $here$sroa$18$0$copyload651511 = load1($here$sroa$18$0$$sroa_idx641510);
    $conv14211514 = $here$sroa$18$0$copyload651511&255;
    $cmp14221515 = ($conv14211514>>>0)>($bits$41$ph>>>0);
    if ($cmp14221515) {
     $bits$411519 = $bits$41$ph;$have$451517 = $have$45$ph;$hold$411518 = $hold$41$ph;$next$451516 = $next$45$ph;
     while(1) {
      $cmp1427 = ($have$451517|0)==(0);
      if ($cmp1427) {
       $154 = $left$0;$bits$54 = $bits$411519;$have$58 = 0;$hold$54 = $hold$411518;$next$58 = $next$451516;$out$4 = $out$0;$ret$8 = $ret$5$ph;
       break L17;
      }
      $dec1431 = (($have$451517) + -1)|0;
      $incdec$ptr1432 = ((($next$451516)) + 1|0);
      $121 = load1($next$451516);
      $conv1433 = $121&255;
      $shl1434 = $conv1433 << $bits$411519;
      $add1435 = (($shl1434) + ($hold$411518))|0;
      $add1436 = (($bits$411519) + 8)|0;
      $and1417 = $sub14161506 & $add1435;
      $here$sroa$18$0$$sroa_idx64 = (((($120) + ($and1417<<2)|0)) + 1|0);
      $here$sroa$18$0$copyload65 = load1($here$sroa$18$0$$sroa_idx64);
      $conv1421 = $here$sroa$18$0$copyload65&255;
      $cmp1422 = ($conv1421>>>0)>($add1436>>>0);
      if ($cmp1422) {
       $bits$411519 = $add1436;$have$451517 = $dec1431;$hold$411518 = $add1435;$next$451516 = $incdec$ptr1432;
      } else {
       $and1417$pn = $and1417;$bits$41$lcssa = $add1436;$conv1421$lcssa = $conv1421;$have$45$lcssa = $dec1431;$here$sroa$18$0$copyload65$lcssa = $here$sroa$18$0$copyload65;$hold$41$lcssa = $add1435;$next$45$lcssa = $incdec$ptr1432;
       break;
      }
     }
    } else {
     $and1417$pn = $and14171507;$bits$41$lcssa = $bits$41$ph;$conv1421$lcssa = $conv14211514;$have$45$lcssa = $have$45$ph;$here$sroa$18$0$copyload65$lcssa = $here$sroa$18$0$copyload651511;$hold$41$lcssa = $hold$41$ph;$next$45$lcssa = $next$45$ph;
    }
    $here$sroa$43$0$copyload96$lcssa$in = (((($120) + ($and1417$pn<<2)|0)) + 2|0);
    $here$sroa$0$0$copyload57$lcssa$in = (($120) + ($and1417$pn<<2)|0);
    $here$sroa$43$0$copyload96$lcssa = load2($here$sroa$43$0$copyload96$lcssa$in);
    $here$sroa$0$0$copyload57$lcssa = load1($here$sroa$0$0$copyload57$lcssa$in);
    $conv1441 = $here$sroa$0$0$copyload57$lcssa&255;
    $and1442 = $conv1441 & 240;
    $cmp1443 = ($and1442|0)==(0);
    if ($cmp1443) {
     $conv1448 = $here$sroa$43$0$copyload96$lcssa&65535;
     $add1453 = (($conv1421$lcssa) + ($conv1441))|0;
     $shl1454 = 1 << $add1453;
     $sub1455 = (($shl1454) + -1)|0;
     $and14561532 = $hold$41$lcssa & $sub1455;
     $shr14591533 = $and14561532 >>> $conv1421$lcssa;
     $add14601534 = (($shr14591533) + ($conv1448))|0;
     $here$sroa$18$0$$sroa_idx621535 = (((($120) + ($add14601534<<2)|0)) + 1|0);
     $here$sroa$18$0$copyload631536 = load1($here$sroa$18$0$$sroa_idx621535);
     $conv14661537 = $here$sroa$18$0$copyload631536&255;
     $add14671538 = (($conv14661537) + ($conv1421$lcssa))|0;
     $cmp14681539 = ($add14671538>>>0)>($bits$41$lcssa>>>0);
     if ($cmp14681539) {
      $bits$421543 = $bits$41$lcssa;$have$461541 = $have$45$lcssa;$hold$421542 = $hold$41$lcssa;$next$461540 = $next$45$lcssa;
      while(1) {
       $cmp1473 = ($have$461541|0)==(0);
       if ($cmp1473) {
        $154 = $left$0;$bits$54 = $bits$421543;$have$58 = 0;$hold$54 = $hold$421542;$next$58 = $next$461540;$out$4 = $out$0;$ret$8 = $ret$5$ph;
        break L17;
       }
       $dec1477 = (($have$461541) + -1)|0;
       $incdec$ptr1478 = ((($next$461540)) + 1|0);
       $122 = load1($next$461540);
       $conv1479 = $122&255;
       $shl1480 = $conv1479 << $bits$421543;
       $add1481 = (($shl1480) + ($hold$421542))|0;
       $add1482 = (($bits$421543) + 8)|0;
       $and1456 = $add1481 & $sub1455;
       $shr1459 = $and1456 >>> $conv1421$lcssa;
       $add1460 = (($shr1459) + ($conv1448))|0;
       $here$sroa$18$0$$sroa_idx62 = (((($120) + ($add1460<<2)|0)) + 1|0);
       $here$sroa$18$0$copyload63 = load1($here$sroa$18$0$$sroa_idx62);
       $conv1466 = $here$sroa$18$0$copyload63&255;
       $add1467 = (($conv1466) + ($conv1421$lcssa))|0;
       $cmp1468 = ($add1467>>>0)>($add1482>>>0);
       if ($cmp1468) {
        $bits$421543 = $add1482;$have$461541 = $dec1477;$hold$421542 = $add1481;$next$461540 = $incdec$ptr1478;
       } else {
        $add1460$lcssa = $add1460;$bits$42$lcssa = $add1482;$have$46$lcssa = $dec1477;$here$sroa$18$0$copyload63$lcssa = $here$sroa$18$0$copyload63;$hold$42$lcssa = $add1481;$next$46$lcssa = $incdec$ptr1478;
        break;
       }
      }
     } else {
      $add1460$lcssa = $add14601534;$bits$42$lcssa = $bits$41$lcssa;$have$46$lcssa = $have$45$lcssa;$here$sroa$18$0$copyload63$lcssa = $here$sroa$18$0$copyload631536;$hold$42$lcssa = $hold$41$lcssa;$next$46$lcssa = $next$45$lcssa;
     }
     $here$sroa$43$0$$sroa_idx93 = (((($120) + ($add1460$lcssa<<2)|0)) + 2|0);
     $here$sroa$43$0$copyload94 = load2($here$sroa$43$0$$sroa_idx93);
     $here$sroa$0$0$$sroa_idx54 = (($120) + ($add1460$lcssa<<2)|0);
     $here$sroa$0$0$copyload55 = load1($here$sroa$0$0$$sroa_idx54);
     $shr1489 = $hold$42$lcssa >>> $conv1421$lcssa;
     $sub1492 = (($bits$42$lcssa) - ($conv1421$lcssa))|0;
     $123 = load4($back);
     $add1498 = (($123) + ($conv1421$lcssa))|0;
     store4($back,$add1498);
     $124 = $add1498;$bits$43 = $sub1492;$have$47 = $have$46$lcssa;$here$sroa$0$1 = $here$sroa$0$0$copyload55;$here$sroa$18$1 = $here$sroa$18$0$copyload63$lcssa;$here$sroa$43$1 = $here$sroa$43$0$copyload94;$hold$43 = $shr1489;$next$47 = $next$46$lcssa;
    } else {
     $$pre2023 = load4($back);
     $124 = $$pre2023;$bits$43 = $bits$41$lcssa;$have$47 = $have$45$lcssa;$here$sroa$0$1 = $here$sroa$0$0$copyload57$lcssa;$here$sroa$18$1 = $here$sroa$18$0$copyload65$lcssa;$here$sroa$43$1 = $here$sroa$43$0$copyload96$lcssa;$hold$43 = $hold$41$lcssa;$next$47 = $next$45$lcssa;
    }
    $conv1502 = $here$sroa$18$1&255;
    $shr1503 = $hold$43 >>> $conv1502;
    $sub1506 = (($bits$43) - ($conv1502))|0;
    $add1512 = (($124) + ($conv1502))|0;
    store4($back,$add1512);
    $conv1514 = $here$sroa$0$1&255;
    $and1515 = $conv1514 & 64;
    $tobool1516 = ($and1515|0)==(0);
    if ($tobool1516) {
     $conv1522 = $here$sroa$43$1&65535;
     store4($offset1558,$conv1522);
     $and1525 = $conv1514 & 15;
     store4($extra1365,$and1525);
     store4($0,23);
     $125 = $and1525;$bits$44 = $sub1506;$have$48 = $have$47;$hold$44 = $shr1503;$next$48 = $next$47;$ret$6 = $ret$5$ph;
     label = 241;
     break;
    } else {
     store4($msg,15275);
     store4($0,29);
     $bits$0$be = $sub1506;$have$0$be = $have$47;$hold$0$be = $shr1503;$left$0$be = $left$0;$next$0$be = $next$47;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$5$ph;
     break;
    }
   }
  } while(0);
  if ((label|0) == 96) {
   label = 0;
   $53 = load4($flags);
   $and458 = $53 & 4096;
   $tobool459 = ($and458|0)==(0);
   if ($tobool459) {
    $61 = load4($head);
    $cmp511 = ($61|0)==(0|0);
    if ($cmp511) {
     $have$14 = $have$13;$next$14 = $next$13;
    } else {
     $comment515 = ((($61)) + 36|0);
     store4($comment515,0);
     $have$14 = $have$13;$next$14 = $next$13;
    }
   } else {
    $cmp461 = ($have$13|0)==(0);
    if ($cmp461) {
     $$ph = $left$0;$bits$54$ph = $bits$10;$have$58$ph = 0;$hold$54$ph = $hold$10;$next$58$ph = $next$13;$ret$8$ph = $ret$0;
     label = 285;
     break;
    } else {
     $copy$2 = 0;
    }
    while(1) {
     $inc466 = (($copy$2) + 1)|0;
     $arrayidx467 = (($next$13) + ($copy$2)|0);
     $54 = load1($arrayidx467);
     $55 = load4($head);
     $cmp470 = ($55|0)==(0|0);
     if (!($cmp470)) {
      $comment = ((($55)) + 36|0);
      $56 = load4($comment);
      $cmp474 = ($56|0)==(0|0);
      if (!($cmp474)) {
       $57 = load4($length);
       $comm_max = ((($55)) + 40|0);
       $58 = load4($comm_max);
       $cmp479 = ($57>>>0)<($58>>>0);
       if ($cmp479) {
        $inc484 = (($57) + 1)|0;
        store4($length,$inc484);
        $arrayidx487 = (($56) + ($57)|0);
        store1($arrayidx487,$54);
       }
      }
     }
     $tobool490 = ($54<<24>>24)!=(0);
     $cmp492 = ($have$13>>>0)>($inc466>>>0);
     $or$cond872 = $tobool490 & $cmp492;
     if ($or$cond872) {
      $copy$2 = $inc466;
     } else {
      break;
     }
    }
    $59 = load4($flags);
    $and497 = $59 & 512;
    $tobool498 = ($and497|0)==(0);
    if (!($tobool498)) {
     $60 = load4($check);
     $call501 = (_crc32($60,$next$13,$inc466)|0);
     store4($check,$call501);
    }
    $sub504 = (($have$13) - ($inc466))|0;
    $add$ptr505 = (($next$13) + ($inc466)|0);
    if ($tobool490) {
     $$ph = $left$0;$bits$54$ph = $bits$10;$have$58$ph = $sub504;$hold$54$ph = $hold$10;$next$58$ph = $add$ptr505;$ret$8$ph = $ret$0;
     label = 285;
     break;
    } else {
     $have$14 = $sub504;$next$14 = $add$ptr505;
    }
   }
   store4($0,8);
   $bits$11 = $bits$10;$have$15 = $have$14;$hold$11 = $hold$10;$next$15 = $next$14;
   label = 109;
  }
  else if ((label|0) == 241) {
   label = 0;
   $tobool1530 = ($125|0)==(0);
   if ($tobool1530) {
    $bits$46 = $bits$44;$have$50 = $have$48;$hold$46 = $hold$44;$next$50 = $next$48;
   } else {
    $cmp15351551 = ($bits$44>>>0)<($125>>>0);
    if ($cmp15351551) {
     $bits$451555 = $bits$44;$have$491553 = $have$48;$hold$451554 = $hold$44;$next$491552 = $next$48;
     while(1) {
      $cmp1539 = ($have$491553|0)==(0);
      if ($cmp1539) {
       $154 = $left$0;$bits$54 = $bits$451555;$have$58 = 0;$hold$54 = $hold$451554;$next$58 = $next$491552;$out$4 = $out$0;$ret$8 = $ret$6;
       break L17;
      }
      $dec1543 = (($have$491553) + -1)|0;
      $incdec$ptr1544 = ((($next$491552)) + 1|0);
      $126 = load1($next$491552);
      $conv1545 = $126&255;
      $shl1546 = $conv1545 << $bits$451555;
      $add1547 = (($shl1546) + ($hold$451554))|0;
      $add1548 = (($bits$451555) + 8)|0;
      $cmp1535 = ($add1548>>>0)<($125>>>0);
      if ($cmp1535) {
       $bits$451555 = $add1548;$have$491553 = $dec1543;$hold$451554 = $add1547;$next$491552 = $incdec$ptr1544;
      } else {
       $bits$45$lcssa = $add1548;$have$49$lcssa = $dec1543;$hold$45$lcssa = $add1547;$next$49$lcssa = $incdec$ptr1544;
       break;
      }
     }
    } else {
     $bits$45$lcssa = $bits$44;$have$49$lcssa = $have$48;$hold$45$lcssa = $hold$44;$next$49$lcssa = $next$48;
    }
    $shl1555 = 1 << $125;
    $sub1556 = (($shl1555) + -1)|0;
    $and1557 = $sub1556 & $hold$45$lcssa;
    $127 = load4($offset1558);
    $add1559 = (($127) + ($and1557))|0;
    store4($offset1558,$add1559);
    $shr1562 = $hold$45$lcssa >>> $125;
    $sub1564 = (($bits$45$lcssa) - ($125))|0;
    $128 = load4($back);
    $add1569 = (($128) + ($125))|0;
    store4($back,$add1569);
    $bits$46 = $sub1564;$have$50 = $have$49$lcssa;$hold$46 = $shr1562;$next$50 = $next$49$lcssa;
   }
   store4($0,24);
   $bits$47 = $bits$46;$have$51 = $have$50;$hold$47 = $hold$46;$next$51 = $next$50;$ret$7 = $ret$6;
   label = 247;
  }
  do {
   if ((label|0) == 109) {
    label = 0;
    $62 = load4($flags);
    $and521 = $62 & 512;
    $tobool522 = ($and521|0)==(0);
    if ($tobool522) {
     $bits$13 = $bits$11;$have$17 = $have$15;$hold$13 = $hold$11;$next$17 = $next$15;
    } else {
     $cmp5261620 = ($bits$11>>>0)<(16);
     if ($cmp5261620) {
      $bits$121624 = $bits$11;$have$161622 = $have$15;$hold$121623 = $hold$11;$next$161621 = $next$15;
      while(1) {
       $cmp530 = ($have$161622|0)==(0);
       if ($cmp530) {
        $154 = $left$0;$bits$54 = $bits$121624;$have$58 = 0;$hold$54 = $hold$121623;$next$58 = $next$161621;$out$4 = $out$0;$ret$8 = $ret$0;
        break L17;
       }
       $dec534 = (($have$161622) + -1)|0;
       $incdec$ptr535 = ((($next$161621)) + 1|0);
       $63 = load1($next$161621);
       $conv536 = $63&255;
       $shl537 = $conv536 << $bits$121624;
       $add538 = (($shl537) + ($hold$121623))|0;
       $add539 = (($bits$121624) + 8)|0;
       $cmp526 = ($add539>>>0)<(16);
       if ($cmp526) {
        $bits$121624 = $add539;$have$161622 = $dec534;$hold$121623 = $add538;$next$161621 = $incdec$ptr535;
       } else {
        $bits$12$lcssa = $add539;$have$16$lcssa = $dec534;$hold$12$lcssa = $add538;$next$16$lcssa = $incdec$ptr535;
        break;
       }
      }
     } else {
      $bits$12$lcssa = $bits$11;$have$16$lcssa = $have$15;$hold$12$lcssa = $hold$11;$next$16$lcssa = $next$15;
     }
     $64 = load4($check);
     $and546 = $64 & 65535;
     $cmp547 = ($hold$12$lcssa|0)==($and546|0);
     if ($cmp547) {
      $bits$13 = 0;$have$17 = $have$16$lcssa;$hold$13 = 0;$next$17 = $next$16$lcssa;
     } else {
      store4($msg,14959);
      store4($0,29);
      $bits$0$be = $bits$12$lcssa;$have$0$be = $have$16$lcssa;$hold$0$be = $hold$12$lcssa;$left$0$be = $left$0;$next$0$be = $next$16$lcssa;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
      break;
     }
    }
    $65 = load4($head);
    $cmp558 = ($65|0)==(0|0);
    if (!($cmp558)) {
     $shr562870 = $62 >>> 9;
     $and563 = $shr562870 & 1;
     $hcrc = ((($65)) + 44|0);
     store4($hcrc,$and563);
     $done566 = ((($65)) + 48|0);
     store4($done566,1);
    }
    $call568 = (_crc32(0,0,0)|0);
    store4($check,$call568);
    store4($adler,$call568);
    store4($0,11);
    $bits$0$be = $bits$13;$have$0$be = $have$17;$hold$0$be = $hold$13;$left$0$be = $left$0;$next$0$be = $next$17;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$0;
   }
   else if ((label|0) == 247) {
    label = 0;
    $cmp1573 = ($left$0|0)==(0);
    if ($cmp1573) {
     $$ph = 0;$bits$54$ph = $bits$47;$have$58$ph = $have$51;$hold$54$ph = $hold$47;$next$58$ph = $next$51;$ret$8$ph = $ret$7;
     label = 285;
     break L17;
    }
    $sub1577 = (($out$0) - ($left$0))|0;
    $129 = load4($offset1558);
    $cmp1579 = ($129>>>0)>($sub1577>>>0);
    if ($cmp1579) {
     $sub1583 = (($129) - ($sub1577))|0;
     $130 = load4($whave);
     $cmp1584 = ($sub1583>>>0)>($130>>>0);
     if ($cmp1584) {
      $131 = load4($sane);
      $tobool1587 = ($131|0)==(0);
      if (!($tobool1587)) {
       store4($msg,15245);
       store4($0,29);
       $bits$0$be = $bits$47;$have$0$be = $have$51;$hold$0$be = $hold$47;$left$0$be = $left$0;$next$0$be = $next$51;$out$0$be = $out$0;$put$0$be = $put$0;$ret$0$be = $ret$7;
       break;
      }
     }
     $132 = load4($wnext);
     $cmp1593 = ($sub1583>>>0)>($132>>>0);
     if ($cmp1593) {
      $sub1597 = (($sub1583) - ($132))|0;
      $133 = load4($window);
      $134 = load4($wsize);
      $sub1598 = (($134) - ($sub1597))|0;
      $add$ptr1599 = (($133) + ($sub1598)|0);
      $copy$7 = $sub1597;$from$0 = $add$ptr1599;
     } else {
      $135 = load4($window);
      $sub1603 = (($132) - ($sub1583))|0;
      $add$ptr1604 = (($135) + ($sub1603)|0);
      $copy$7 = $sub1583;$from$0 = $add$ptr1604;
     }
     $136 = load4($length);
     $cmp1607 = ($copy$7>>>0)>($136>>>0);
     $$copy$7 = $cmp1607 ? $136 : $copy$7;
     $138 = $136;$copy$8 = $$copy$7;$from$1 = $from$0;
    } else {
     $idx$neg = (0 - ($129))|0;
     $add$ptr1614 = (($put$0) + ($idx$neg)|0);
     $137 = load4($length);
     $138 = $137;$copy$8 = $137;$from$1 = $add$ptr1614;
    }
    $cmp1617 = ($copy$8>>>0)>($left$0>>>0);
    $left$0$copy$8 = $cmp1617 ? $left$0 : $copy$8;
    $sub1623 = (($138) - ($left$0$copy$8))|0;
    store4($length,$sub1623);
    $copy$10 = $left$0$copy$8;$from$2 = $from$1;$put$1 = $put$0;
    while(1) {
     $incdec$ptr1625 = ((($from$2)) + 1|0);
     $139 = load1($from$2);
     $incdec$ptr1626 = ((($put$1)) + 1|0);
     store1($put$1,$139);
     $dec1628 = (($copy$10) + -1)|0;
     $tobool1629 = ($dec1628|0)==(0);
     if ($tobool1629) {
      break;
     } else {
      $copy$10 = $dec1628;$from$2 = $incdec$ptr1625;$put$1 = $incdec$ptr1626;
     }
    }
    $sub1621 = (($left$0) - ($left$0$copy$8))|0;
    $140 = load4($length);
    $cmp1632 = ($140|0)==(0);
    if ($cmp1632) {
     store4($0,20);
     $bits$0$be = $bits$47;$have$0$be = $have$51;$hold$0$be = $hold$47;$left$0$be = $sub1621;$next$0$be = $next$51;$out$0$be = $out$0;$put$0$be = $incdec$ptr1626;$ret$0$be = $ret$7;
    } else {
     $bits$0$be = $bits$47;$have$0$be = $have$51;$hold$0$be = $hold$47;$left$0$be = $sub1621;$next$0$be = $next$51;$out$0$be = $out$0;$put$0$be = $incdec$ptr1626;$ret$0$be = $ret$7;
    }
   }
  } while(0);
  $$pre = load4($0);
  $10 = $$pre;$bits$0 = $bits$0$be;$have$0 = $have$0$be;$hold$0 = $hold$0$be;$left$0 = $left$0$be;$next$0 = $next$0$be;$out$0 = $out$0$be;$put$0 = $put$0$be;$ret$0 = $ret$0$be;
 }
 if ((label|0) == 122) {
  store4($next_out,$put$0);
  store4($avail_out,$left$0);
  store4($strm,$next$19);
  store4($avail_in15,$have$19);
  store4($hold16,$hold$15);
  store4($bits17,$bits$15);
  $retval$0 = 2;
  STACKTOP = sp;return ($retval$0|0);
 }
 else if ((label|0) == 133) {
  $shr687 = $hold$18$lcssa >>> 3;
  $sub688 = (($bits$18$lcssa) + -3)|0;
  $154 = $left$0;$bits$54 = $sub688;$have$58 = $have$22$lcssa;$hold$54 = $shr687;$next$58 = $next$22$lcssa;$out$4 = $out$0;$ret$8 = $ret$0;
 }
 else if ((label|0) == 136) {
  // unreachable;
 }
 else if ((label|0) == 284) {
  store4($0,28);
  $154 = $left$0;$bits$54 = $bits$52;$have$58 = $have$56;$hold$54 = $hold$52;$next$58 = $next$56;$out$4 = $out$2;$ret$8 = 1;
 }
 else if ((label|0) == 285) {
  $154 = $$ph;$bits$54 = $bits$54$ph;$have$58 = $have$58$ph;$hold$54 = $hold$54$ph;$next$58 = $next$58$ph;$out$4 = $out$0;$ret$8 = $ret$8$ph;
 }
 else if ((label|0) == 297) {
  $retval$0 = -4;
  STACKTOP = sp;return ($retval$0|0);
 }
 else if ((label|0) == 298) {
  STACKTOP = sp;return ($retval$0|0);
 }
 store4($next_out,$put$0);
 store4($avail_out,$154);
 store4($strm,$next$58);
 store4($avail_in15,$have$58);
 store4($hold16,$hold$54);
 store4($bits17,$bits$54);
 $155 = load4($wsize);
 $tobool1778 = ($155|0)==(0);
 if ($tobool1778) {
  $156 = load4($0);
  $cmp1781 = ($156>>>0)>(25);
  $cmp1785 = ($out$4|0)==($154|0);
  $or$cond2405 = $cmp1781 | $cmp1785;
  if ($or$cond2405) {
   $157 = $have$58;$158 = $154;
  } else {
   label = 288;
  }
 } else {
  label = 288;
 }
 do {
  if ((label|0) == 288) {
   $call1788 = (_updatewindow($strm,$out$4)|0);
   $tobool1789 = ($call1788|0)==(0);
   if ($tobool1789) {
    $$pre2026 = load4($avail_in15);
    $$pre2027 = load4($avail_out);
    $157 = $$pre2026;$158 = $$pre2027;
    break;
   }
   store4($0,30);
   $retval$0 = -4;
   STACKTOP = sp;return ($retval$0|0);
  }
 } while(0);
 $sub1795 = (($6) - ($157))|0;
 $sub1797 = (($out$4) - ($158))|0;
 $total_in = ((($strm)) + 8|0);
 $159 = load4($total_in);
 $add1798 = (($159) + ($sub1795))|0;
 store4($total_in,$add1798);
 $160 = load4($total_out);
 $add1800 = (($160) + ($sub1797))|0;
 store4($total_out,$add1800);
 $161 = load4($total);
 $add1802 = (($161) + ($sub1797))|0;
 store4($total,$add1802);
 $162 = load4($wrap);
 $tobool1804 = ($162|0)!=(0);
 $tobool1806 = ($sub1797|0)!=(0);
 $or$cond3 = $tobool1806 & $tobool1804;
 if ($or$cond3) {
  $163 = load4($flags);
  $tobool1809 = ($163|0)==(0);
  $164 = load4($check);
  $165 = load4($next_out);
  $idx$neg1813 = (0 - ($sub1797))|0;
  $add$ptr1814 = (($165) + ($idx$neg1813)|0);
  if ($tobool1809) {
   $call1821 = (_adler32($164,$add$ptr1814,$sub1797)|0);
   $cond1823 = $call1821;
  } else {
   $call1815 = (_crc32($164,$add$ptr1814,$sub1797)|0);
   $cond1823 = $call1815;
  }
  store4($check,$cond1823);
  store4($adler,$cond1823);
 }
 $166 = load4($bits17);
 $167 = load4($last638);
 $tobool1829 = ($167|0)!=(0);
 $cond1830 = $tobool1829 ? 64 : 0;
 $add1831 = (($cond1830) + ($166))|0;
 $168 = load4($0);
 $cmp1833 = ($168|0)==(11);
 $cond1835 = $cmp1833 ? 128 : 0;
 $add1836 = (($add1831) + ($cond1835))|0;
 $cmp1838 = ($168|0)==(19);
 $cmp1841 = ($168|0)==(14);
 $169 = $cmp1838 | $cmp1841;
 $170 = $169 ? 256 : 0;
 $add1844 = (($add1836) + ($170))|0;
 $data_type = ((($strm)) + 44|0);
 store4($data_type,$add1844);
 $171 = $sub1797 | $sub1795;
 $172 = ($171|0)==(0);
 $cmp1851 = ($flush|0)==(4);
 $or$cond5 = $cmp1851 | $172;
 $cmp1854 = ($ret$8|0)==(0);
 $or$cond6 = $cmp1854 & $or$cond5;
 $$ret$8 = $or$cond6 ? -5 : $ret$8;
 $retval$0 = $$ret$8;
 STACKTOP = sp;return ($retval$0|0);
}
function _updatewindow($strm,$out) {
 $strm = $strm|0;
 $out = $out|0;
 var $$add = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $add = 0, $add$ptr = 0, $add$ptr30 = 0, $add$ptr33 = 0, $add$ptr39 = 0, $add56 = 0, $avail_out = 0, $call = 0, $cmp = 0, $cmp14 = 0, $cmp25 = 0, $cmp4 = 0, $cmp47 = 0, $cmp53 = 0, $cmp7 = 0, $idx$neg = 0, $idx$neg32 = 0, $idx$neg38 = 0, $next_out = 0;
 var $next_out31 = 0, $opaque = 0, $retval$0 = 0, $shl = 0, $shl10 = 0, $state1 = 0, $sub = 0, $sub$sub24 = 0, $sub24 = 0, $sub34 = 0, $tobool = 0, $wbits = 0, $wbits9 = 0, $whave = 0, $whave21 = 0, $whave42 = 0, $whave51 = 0, $window = 0, $wnext = 0, $wnext19 = 0;
 var $wnext23 = 0, $wsize = 0, $zalloc = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $state1 = ((($strm)) + 28|0);
 $0 = load4($state1);
 $window = ((($0)) + 52|0);
 $1 = load4($window);
 $cmp = ($1|0)==(0|0);
 if ($cmp) {
  $zalloc = ((($strm)) + 32|0);
  $2 = load4($zalloc);
  $opaque = ((($strm)) + 40|0);
  $3 = load4($opaque);
  $wbits = ((($0)) + 36|0);
  $4 = load4($wbits);
  $shl = 1 << $4;
  $call = (FUNCTION_TABLE_iiii[$2 & 7]($3,$shl,1)|0);
  store4($window,$call);
  $cmp4 = ($call|0)==(0|0);
  if ($cmp4) {
   $retval$0 = 1;
   return ($retval$0|0);
  } else {
   $10 = $call;
  }
 } else {
  $10 = $1;
 }
 $wsize = ((($0)) + 40|0);
 $5 = load4($wsize);
 $cmp7 = ($5|0)==(0);
 if ($cmp7) {
  $wbits9 = ((($0)) + 36|0);
  $6 = load4($wbits9);
  $shl10 = 1 << $6;
  store4($wsize,$shl10);
  $wnext = ((($0)) + 48|0);
  store4($wnext,0);
  $whave = ((($0)) + 44|0);
  store4($whave,0);
  $8 = $shl10;
 } else {
  $8 = $5;
 }
 $avail_out = ((($strm)) + 16|0);
 $7 = load4($avail_out);
 $sub = (($out) - ($7))|0;
 $cmp14 = ($sub>>>0)<($8>>>0);
 if (!($cmp14)) {
  $next_out = ((($strm)) + 12|0);
  $9 = load4($next_out);
  $idx$neg = (0 - ($8))|0;
  $add$ptr = (($9) + ($idx$neg)|0);
  _memcpy(($10|0),($add$ptr|0),($8|0))|0;
  $wnext19 = ((($0)) + 48|0);
  store4($wnext19,0);
  $11 = load4($wsize);
  $whave21 = ((($0)) + 44|0);
  store4($whave21,$11);
  $retval$0 = 0;
  return ($retval$0|0);
 }
 $wnext23 = ((($0)) + 48|0);
 $12 = load4($wnext23);
 $sub24 = (($8) - ($12))|0;
 $cmp25 = ($sub24>>>0)>($sub>>>0);
 $sub$sub24 = $cmp25 ? $sub : $sub24;
 $add$ptr30 = (($10) + ($12)|0);
 $next_out31 = ((($strm)) + 12|0);
 $13 = load4($next_out31);
 $idx$neg32 = (0 - ($sub))|0;
 $add$ptr33 = (($13) + ($idx$neg32)|0);
 _memcpy(($add$ptr30|0),($add$ptr33|0),($sub$sub24|0))|0;
 $sub34 = (($sub) - ($sub$sub24))|0;
 $tobool = ($sub34|0)==(0);
 if (!($tobool)) {
  $14 = load4($window);
  $15 = load4($next_out31);
  $idx$neg38 = (0 - ($sub34))|0;
  $add$ptr39 = (($15) + ($idx$neg38)|0);
  _memcpy(($14|0),($add$ptr39|0),($sub34|0))|0;
  store4($wnext23,$sub34);
  $16 = load4($wsize);
  $whave42 = ((($0)) + 44|0);
  store4($whave42,$16);
  $retval$0 = 0;
  return ($retval$0|0);
 }
 $17 = load4($wnext23);
 $add = (($17) + ($sub$sub24))|0;
 $18 = load4($wsize);
 $cmp47 = ($add|0)==($18|0);
 $$add = $cmp47 ? 0 : $add;
 store4($wnext23,$$add);
 $whave51 = ((($0)) + 44|0);
 $19 = load4($whave51);
 $cmp53 = ($19>>>0)<($18>>>0);
 if (!($cmp53)) {
  $retval$0 = 0;
  return ($retval$0|0);
 }
 $add56 = (($19) + ($sub$sub24))|0;
 store4($whave51,$add56);
 $retval$0 = 0;
 return ($retval$0|0);
}
function _inflateEnd($strm) {
 $strm = $strm|0;
 var $$pre = 0, $$pre12 = 0, $$pre13 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $cmp = 0, $cmp2 = 0, $cmp4 = 0, $cmp6 = 0, $retval$0 = 0, $state1 = 0, $window = 0, $zfree = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($strm|0)==(0|0);
 if ($cmp) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $state1 = ((($strm)) + 28|0);
 $0 = load4($state1);
 $cmp2 = ($0|0)==(0|0);
 if ($cmp2) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $zfree = ((($strm)) + 36|0);
 $1 = load4($zfree);
 $cmp4 = ($1|0)==(0|0);
 if ($cmp4) {
  $retval$0 = -2;
  return ($retval$0|0);
 }
 $window = ((($0)) + 52|0);
 $2 = load4($window);
 $cmp6 = ($2|0)==(0|0);
 $$pre13 = ((($strm)) + 40|0);
 if ($cmp6) {
  $5 = $1;$6 = $0;
 } else {
  $3 = load4($$pre13);
  FUNCTION_TABLE_vii[$1 & 1]($3,$2);
  $$pre = load4($zfree);
  $$pre12 = load4($state1);
  $5 = $$pre;$6 = $$pre12;
 }
 $4 = load4($$pre13);
 FUNCTION_TABLE_vii[$5 & 1]($4,$6);
 store4($state1,0);
 $retval$0 = 0;
 return ($retval$0|0);
}
function _inflate_table($type,$lens,$codes,$table,$bits,$work) {
 $type = $type|0;
 $lens = $lens|0;
 $codes = $codes|0;
 $table = $table|0;
 $bits = $bits|0;
 $work = $work|0;
 var $$add165 = 0, $$add275 = 0, $$ph = 0, $$ph267 = 0, $$pre = 0, $$pre264 = 0, $$pre264$1 = 0, $$pre264$10 = 0, $$pre264$11 = 0, $$pre264$12 = 0, $$pre264$2 = 0, $$pre264$3 = 0, $$pre264$4 = 0, $$pre264$5 = 0, $$pre264$6 = 0, $$pre264$7 = 0, $$pre264$8 = 0, $$pre264$9 = 0, $0 = 0, $1 = 0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$1 = 0, $add$10 = 0, $add$11 = 0, $add$12 = 0, $add$2 = 0, $add$3 = 0, $add$4 = 0, $add$5 = 0, $add$6 = 0, $add$7 = 0, $add$8 = 0, $add$9 = 0;
 var $add$ptr195 = 0, $add$ptr279 = 0, $add153 = 0, $add165 = 0, $add199 = 0, $add199235 = 0, $add215 = 0, $add275 = 0, $and = 0, $and164 = 0, $and187 = 0, $and253 = 0, $and265 = 0, $and274 = 0, $arrayidx122 = 0, $arrayidx13$1 = 0, $arrayidx13$10 = 0, $arrayidx13$11 = 0, $arrayidx13$12 = 0, $arrayidx13$13 = 0;
 var $arrayidx13$14 = 0, $arrayidx13$2 = 0, $arrayidx13$3 = 0, $arrayidx13$4 = 0, $arrayidx13$5 = 0, $arrayidx13$6 = 0, $arrayidx13$7 = 0, $arrayidx13$8 = 0, $arrayidx13$9 = 0, $arrayidx13$phi$trans$insert = 0, $arrayidx137 = 0, $arrayidx142 = 0, $arrayidx169 = 0, $arrayidx179 = 0, $arrayidx181 = 0, $arrayidx204 = 0, $arrayidx32 = 0, $arrayidx4 = 0, $arrayidx49 = 0, $arrayidx49$1 = 0;
 var $arrayidx49$10 = 0, $arrayidx49$11 = 0, $arrayidx49$12 = 0, $arrayidx49$13 = 0, $arrayidx49$2 = 0, $arrayidx49$3 = 0, $arrayidx49$4 = 0, $arrayidx49$5 = 0, $arrayidx49$6 = 0, $arrayidx49$7 = 0, $arrayidx49$8 = 0, $arrayidx49$9 = 0, $arrayidx5 = 0, $arrayidx66 = 0, $arrayidx73$phi$trans$insert = 0, $arrayidx73$phi$trans$insert$1 = 0, $arrayidx73$phi$trans$insert$10 = 0, $arrayidx73$phi$trans$insert$11 = 0, $arrayidx73$phi$trans$insert$12 = 0, $arrayidx73$phi$trans$insert$2 = 0;
 var $arrayidx73$phi$trans$insert$3 = 0, $arrayidx73$phi$trans$insert$4 = 0, $arrayidx73$phi$trans$insert$5 = 0, $arrayidx73$phi$trans$insert$6 = 0, $arrayidx73$phi$trans$insert$7 = 0, $arrayidx73$phi$trans$insert$8 = 0, $arrayidx73$phi$trans$insert$9 = 0, $arrayidx77 = 0, $arrayidx77$1 = 0, $arrayidx77$10 = 0, $arrayidx77$11 = 0, $arrayidx77$12 = 0, $arrayidx77$2 = 0, $arrayidx77$3 = 0, $arrayidx77$4 = 0, $arrayidx77$5 = 0, $arrayidx77$6 = 0, $arrayidx77$7 = 0, $arrayidx77$8 = 0, $arrayidx77$9 = 0;
 var $arrayidx77295 = 0, $arrayidx85 = 0, $arrayidx93 = 0, $arrayidx96 = 0, $base$0196209$ph = 0, $bits235 = 0, $cmp105201205$ph = 0, $cmp108 = 0, $cmp108194 = 0, $cmp111 = 0, $cmp111210$ph = 0, $cmp124 = 0, $cmp132 = 0, $cmp14 = 0, $cmp14$1 = 0, $cmp14$10 = 0, $cmp14$11 = 0, $cmp14$12 = 0, $cmp14$13 = 0, $cmp14$14 = 0;
 var $cmp14$2 = 0, $cmp14$3 = 0, $cmp14$4 = 0, $cmp14$5 = 0, $cmp14$6 = 0, $cmp14$7 = 0, $cmp14$8 = 0, $cmp14$9 = 0, $cmp155 = 0, $cmp160 = 0, $cmp172 = 0, $cmp175 = 0, $cmp18 = 0, $cmp18268 = 0, $cmp184 = 0, $cmp188 = 0, $cmp191 = 0, $cmp200 = 0, $cmp200232 = 0, $cmp207 = 0;
 var $cmp219 = 0, $cmp2247 = 0, $cmp225 = 0, $cmp247 = 0, $cmp247225 = 0, $cmp250 = 0, $cmp254 = 0, $cmp270 = 0, $cmp29 = 0, $cmp34 = 0, $cmp41 = 0, $cmp51 = 0, $cmp51$1 = 0, $cmp51$10 = 0, $cmp51$11 = 0, $cmp51$12 = 0, $cmp51$13 = 0, $cmp51$14 = 0, $cmp51$2 = 0, $cmp51$3 = 0;
 var $cmp51$4 = 0, $cmp51$5 = 0, $cmp51$6 = 0, $cmp51$7 = 0, $cmp51$8 = 0, $cmp51$9 = 0, $cmp58 = 0, $cmp60 = 0, $cmp62 = 0, $cmp87 = 0, $conv120 = 0, $conv123 = 0, $conv138 = 0, $conv182 = 0, $conv205 = 0, $conv230 = 0, $conv233 = 0, $conv236 = 0, $conv50 = 0, $conv50$1 = 0;
 var $conv50$10 = 0, $conv50$11 = 0, $conv50$12 = 0, $conv50$13 = 0, $conv50$14 = 0, $conv50$2 = 0, $conv50$3 = 0, $conv50$4 = 0, $conv50$5 = 0, $conv50$6 = 0, $conv50$7 = 0, $conv50$8 = 0, $conv50$9 = 0, $conv74 = 0, $conv74$1 = 0, $conv74$10 = 0, $conv74$11 = 0, $conv74$12 = 0, $conv74$2 = 0, $conv74$3 = 0;
 var $conv74$4 = 0, $conv74$5 = 0, $conv74$6 = 0, $conv74$7 = 0, $conv74$8 = 0, $conv74$9 = 0, $conv74293 = 0, $conv75 = 0, $conv75$1 = 0, $conv75$10 = 0, $conv75$11 = 0, $conv75$12 = 0, $conv75$2 = 0, $conv75$3 = 0, $conv75$4 = 0, $conv75$5 = 0, $conv75$6 = 0, $conv75$7 = 0, $conv75$8 = 0, $conv75$9 = 0;
 var $conv86 = 0, $conv90 = 0, $count = 0, $curr$0$ph = 0, $curr$1$lcssa = 0, $curr$1233 = 0, $dec170 = 0, $drop$0$ph = 0, $drop$2227 = 0, $drop$3 = 0, $end$0198207$ph = 0, $exitcond = 0, $exitcond262 = 0, $extra$0197208$ph = 0, $fill$0 = 0, $fold = 0, $fold305 = 0, $fold306 = 0, $fold307 = 0, $fold308 = 0;
 var $fold309 = 0, $fold310 = 0, $fold311 = 0, $fold312 = 0, $fold313 = 0, $fold314 = 0, $here$sroa$0$0 = 0, $here$sroa$0$0$$sroa_idx = 0, $here$sroa$0$0$$sroa_idx19 = 0, $here$sroa$11$0$$sroa_idx = 0, $here$sroa$11$0$$sroa_idx21 = 0, $here$sroa$11$0$$sroa_idx23 = 0, $here$sroa$11$0$$sroa_idx25 = 0, $here$sroa$11$0229 = 0, $here$sroa$11$1 = 0, $here$sroa$15$0 = 0, $here$sroa$15$0$$sroa_idx27 = 0, $here$sroa$15$0$$sroa_idx28 = 0, $here$sroa$15$0$$sroa_idx30 = 0, $here$sroa$15$0$$sroa_idx32 = 0;
 var $huff$0 = 0, $huff$0$ph = 0, $huff$2228 = 0, $idxprom = 0, $idxprom180 = 0, $idxprom95 = 0, $inc168 = 0, $inc211 = 0, $inc39 = 0, $inc6 = 0, $inc8 = 0, $inc94 = 0, $inc99 = 0, $incdec$ptr = 0, $incdec$ptr26 = 0, $incr$0 = 0, $incr$1 = 0, $left$1234 = 0, $len$3 = 0, $len$3$ph = 0;
 var $len$4 = 0, $len$5226 = 0, $len$6 = 0, $low$0$ph = 0, $max$0$ = 0, $max$0$269 = 0, $max$0$273 = 0, $max$0246$lcssa$ph = 0, $max$0246$lcssa271 = 0, $min$0$lcssa = 0, $min$0$max$0$ = 0, $min$0$max$0$$drop$0 = 0, $min$0243 = 0, $next$0$ph = 0, $next$0$ph212 = 0, $next$1230 = 0, $next$2 = 0, $offs = 0, $op232 = 0, $or$cond = 0;
 var $or$cond187 = 0, $or$cond188 = 0, $or$cond2 = 0, $or$cond3 = 0, $or$cond4 = 0, $retval$0 = 0, $shl$1 = 0, $shl$10 = 0, $shl$11 = 0, $shl$12 = 0, $shl$13 = 0, $shl$14 = 0, $shl$2 = 0, $shl$3 = 0, $shl$4 = 0, $shl$5 = 0, $shl$6 = 0, $shl$7 = 0, $shl$8 = 0, $shl$9 = 0;
 var $shl150 = 0, $shl151 = 0, $shl158 = 0, $shl197 = 0, $shl212 = 0, $shl214 = 0, $shl263 = 0, $shr = 0, $shr159 = 0, $shr260 = 0, $shr268 = 0, $sub = 0, $sub$1 = 0, $sub$10 = 0, $sub$11 = 0, $sub$12 = 0, $sub$13 = 0, $sub$14 = 0, $sub$2 = 0, $sub$3 = 0;
 var $sub$4 = 0, $sub$5 = 0, $sub$6 = 0, $sub$7 = 0, $sub$8 = 0, $sub$9 = 0, $sub$ptr$div186 = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $sub104200206$ph = 0, $sub104200206$ph$in = 0, $sub119 = 0, $sub152 = 0, $sub157 = 0, $sub163 = 0, $sub196 = 0, $sub206 = 0, $sub262 = 0, $sub273 = 0;
 var $sym$0248 = 0, $sym$1238 = 0, $sym$2 = 0, $sym$2$ph = 0, $tobool = 0, $tobool266 = 0, $used$0$ph211 = 0, $val238 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0;
 $count = sp + 32|0;
 $offs = sp;
 ; store8($count,i64_const(0,0),2); store8($count+8|0,i64_const(0,0),2); store8($count+16|0,i64_const(0,0),2); store8($count+24|0,i64_const(0,0),2);
 $cmp2247 = ($codes|0)==(0);
 if ($cmp2247) {
  $0 = load4($bits);
  $5 = $0;
  label = 5;
 } else {
  $sym$0248 = 0;
  while(1) {
   $arrayidx4 = (($lens) + ($sym$0248<<1)|0);
   $1 = load2($arrayidx4);
   $idxprom = $1&65535;
   $arrayidx5 = (($count) + ($idxprom<<1)|0);
   $2 = load2($arrayidx5);
   $inc6 = (($2) + 1)<<16>>16;
   store2($arrayidx5,$inc6);
   $inc8 = (($sym$0248) + 1)|0;
   $exitcond262 = ($inc8|0)==($codes|0);
   if ($exitcond262) {
    break;
   } else {
    $sym$0248 = $inc8;
   }
  }
  $arrayidx13$phi$trans$insert = ((($count)) + 30|0);
  $$pre = load2($arrayidx13$phi$trans$insert);
  $3 = load4($bits);
  $cmp14 = ($$pre<<16>>16)==(0);
  if ($cmp14) {
   $5 = $3;
   label = 5;
  } else {
   $$ph = $3;$$ph267 = $$pre;$max$0246$lcssa$ph = 15;
   label = 7;
  }
 }
 do {
  if ((label|0) == 5) {
   $arrayidx13$1 = ((($count)) + 28|0);
   $4 = load2($arrayidx13$1);
   $cmp14$1 = ($4<<16>>16)==(0);
   if ($cmp14$1) {
    $arrayidx13$2 = ((($count)) + 26|0);
    $34 = load2($arrayidx13$2);
    $cmp14$2 = ($34<<16>>16)==(0);
    if ($cmp14$2) {
     $arrayidx13$3 = ((($count)) + 24|0);
     $35 = load2($arrayidx13$3);
     $cmp14$3 = ($35<<16>>16)==(0);
     if ($cmp14$3) {
      $arrayidx13$4 = ((($count)) + 22|0);
      $36 = load2($arrayidx13$4);
      $cmp14$4 = ($36<<16>>16)==(0);
      if ($cmp14$4) {
       $arrayidx13$5 = ((($count)) + 20|0);
       $37 = load2($arrayidx13$5);
       $cmp14$5 = ($37<<16>>16)==(0);
       if ($cmp14$5) {
        $arrayidx13$6 = ((($count)) + 18|0);
        $38 = load2($arrayidx13$6);
        $cmp14$6 = ($38<<16>>16)==(0);
        if ($cmp14$6) {
         $arrayidx13$7 = ((($count)) + 16|0);
         $39 = load2($arrayidx13$7);
         $cmp14$7 = ($39<<16>>16)==(0);
         if ($cmp14$7) {
          $arrayidx13$8 = ((($count)) + 14|0);
          $40 = load2($arrayidx13$8);
          $cmp14$8 = ($40<<16>>16)==(0);
          if ($cmp14$8) {
           $arrayidx13$9 = ((($count)) + 12|0);
           $41 = load2($arrayidx13$9);
           $cmp14$9 = ($41<<16>>16)==(0);
           if ($cmp14$9) {
            $arrayidx13$10 = ((($count)) + 10|0);
            $42 = load2($arrayidx13$10);
            $cmp14$10 = ($42<<16>>16)==(0);
            if ($cmp14$10) {
             $arrayidx13$11 = ((($count)) + 8|0);
             $43 = load2($arrayidx13$11);
             $cmp14$11 = ($43<<16>>16)==(0);
             if ($cmp14$11) {
              $arrayidx13$12 = ((($count)) + 6|0);
              $44 = load2($arrayidx13$12);
              $cmp14$12 = ($44<<16>>16)==(0);
              if ($cmp14$12) {
               $arrayidx13$13 = ((($count)) + 4|0);
               $45 = load2($arrayidx13$13);
               $cmp14$13 = ($45<<16>>16)==(0);
               if ($cmp14$13) {
                $arrayidx13$14 = ((($count)) + 2|0);
                $46 = load2($arrayidx13$14);
                $cmp14$14 = ($46<<16>>16)==(0);
                if (!($cmp14$14)) {
                 $cmp18 = ($5>>>0)>(1);
                 $max$0$ = $cmp18 ? 1 : $5;
                 $33 = 0;$max$0$273 = $max$0$;$max$0246$lcssa271 = 1;$min$0$lcssa = 1;
                 break;
                }
                $47 = load4($table);
                $incdec$ptr = ((($47)) + 4|0);
                store4($table,$incdec$ptr);
                store1($47,64);
                $here$sroa$11$0$$sroa_idx23 = ((($47)) + 1|0);
                store1($here$sroa$11$0$$sroa_idx23,1);
                $here$sroa$15$0$$sroa_idx30 = ((($47)) + 2|0);
                store2($here$sroa$15$0$$sroa_idx30,0);
                $48 = load4($table);
                $incdec$ptr26 = ((($48)) + 4|0);
                store4($table,$incdec$ptr26);
                store1($48,64);
                $here$sroa$11$0$$sroa_idx21 = ((($48)) + 1|0);
                store1($here$sroa$11$0$$sroa_idx21,1);
                $here$sroa$15$0$$sroa_idx28 = ((($48)) + 2|0);
                store2($here$sroa$15$0$$sroa_idx28,0);
                store4($bits,1);
                $retval$0 = 0;
                STACKTOP = sp;return ($retval$0|0);
               } else {
                $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 2;
                label = 7;
               }
              } else {
               $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 3;
               label = 7;
              }
             } else {
              $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 4;
              label = 7;
             }
            } else {
             $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 5;
             label = 7;
            }
           } else {
            $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 6;
            label = 7;
           }
          } else {
           $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 7;
           label = 7;
          }
         } else {
          $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 8;
          label = 7;
         }
        } else {
         $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 9;
         label = 7;
        }
       } else {
        $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 10;
        label = 7;
       }
      } else {
       $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 11;
       label = 7;
      }
     } else {
      $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 12;
      label = 7;
     }
    } else {
     $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 13;
     label = 7;
    }
   } else {
    $$ph = $5;$$ph267 = 0;$max$0246$lcssa$ph = 14;
    label = 7;
   }
  }
 } while(0);
 L25: do {
  if ((label|0) == 7) {
   $cmp18268 = ($$ph>>>0)>($max$0246$lcssa$ph>>>0);
   $max$0$269 = $cmp18268 ? $max$0246$lcssa$ph : $$ph;
   $min$0243 = 1;
   while(1) {
    $arrayidx32 = (($count) + ($min$0243<<1)|0);
    $6 = load2($arrayidx32);
    $cmp34 = ($6<<16>>16)==(0);
    if (!($cmp34)) {
     $33 = $$ph267;$max$0$273 = $max$0$269;$max$0246$lcssa271 = $max$0246$lcssa$ph;$min$0$lcssa = $min$0243;
     break L25;
    }
    $inc39 = (($min$0243) + 1)|0;
    $cmp29 = ($inc39>>>0)<($max$0246$lcssa$ph>>>0);
    if ($cmp29) {
     $min$0243 = $inc39;
    } else {
     $33 = $$ph267;$max$0$273 = $max$0$269;$max$0246$lcssa271 = $max$0246$lcssa$ph;$min$0$lcssa = $inc39;
     break;
    }
   }
  }
 } while(0);
 $cmp41 = ($max$0$273>>>0)<($min$0$lcssa>>>0);
 $min$0$max$0$ = $cmp41 ? $min$0$lcssa : $max$0$273;
 $arrayidx49 = ((($count)) + 2|0);
 $7 = load2($arrayidx49);
 $conv50 = $7&65535;
 $sub = (2 - ($conv50))|0;
 $cmp51 = ($sub|0)<(0);
 if ($cmp51) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$1 = $sub << 1;
 $arrayidx49$1 = ((($count)) + 4|0);
 $8 = load2($arrayidx49$1);
 $conv50$1 = $8&65535;
 $sub$1 = (($shl$1) - ($conv50$1))|0;
 $cmp51$1 = ($sub$1|0)<(0);
 if ($cmp51$1) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$2 = $sub$1 << 1;
 $arrayidx49$2 = ((($count)) + 6|0);
 $21 = load2($arrayidx49$2);
 $conv50$2 = $21&65535;
 $sub$2 = (($shl$2) - ($conv50$2))|0;
 $cmp51$2 = ($sub$2|0)<(0);
 if ($cmp51$2) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$3 = $sub$2 << 1;
 $arrayidx49$3 = ((($count)) + 8|0);
 $22 = load2($arrayidx49$3);
 $conv50$3 = $22&65535;
 $sub$3 = (($shl$3) - ($conv50$3))|0;
 $cmp51$3 = ($sub$3|0)<(0);
 if ($cmp51$3) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$4 = $sub$3 << 1;
 $arrayidx49$4 = ((($count)) + 10|0);
 $23 = load2($arrayidx49$4);
 $conv50$4 = $23&65535;
 $sub$4 = (($shl$4) - ($conv50$4))|0;
 $cmp51$4 = ($sub$4|0)<(0);
 if ($cmp51$4) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$5 = $sub$4 << 1;
 $arrayidx49$5 = ((($count)) + 12|0);
 $24 = load2($arrayidx49$5);
 $conv50$5 = $24&65535;
 $sub$5 = (($shl$5) - ($conv50$5))|0;
 $cmp51$5 = ($sub$5|0)<(0);
 if ($cmp51$5) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$6 = $sub$5 << 1;
 $arrayidx49$6 = ((($count)) + 14|0);
 $25 = load2($arrayidx49$6);
 $conv50$6 = $25&65535;
 $sub$6 = (($shl$6) - ($conv50$6))|0;
 $cmp51$6 = ($sub$6|0)<(0);
 if ($cmp51$6) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$7 = $sub$6 << 1;
 $arrayidx49$7 = ((($count)) + 16|0);
 $26 = load2($arrayidx49$7);
 $conv50$7 = $26&65535;
 $sub$7 = (($shl$7) - ($conv50$7))|0;
 $cmp51$7 = ($sub$7|0)<(0);
 if ($cmp51$7) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$8 = $sub$7 << 1;
 $arrayidx49$8 = ((($count)) + 18|0);
 $27 = load2($arrayidx49$8);
 $conv50$8 = $27&65535;
 $sub$8 = (($shl$8) - ($conv50$8))|0;
 $cmp51$8 = ($sub$8|0)<(0);
 if ($cmp51$8) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$9 = $sub$8 << 1;
 $arrayidx49$9 = ((($count)) + 20|0);
 $28 = load2($arrayidx49$9);
 $conv50$9 = $28&65535;
 $sub$9 = (($shl$9) - ($conv50$9))|0;
 $cmp51$9 = ($sub$9|0)<(0);
 if ($cmp51$9) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$10 = $sub$9 << 1;
 $arrayidx49$10 = ((($count)) + 22|0);
 $29 = load2($arrayidx49$10);
 $conv50$10 = $29&65535;
 $sub$10 = (($shl$10) - ($conv50$10))|0;
 $cmp51$10 = ($sub$10|0)<(0);
 if ($cmp51$10) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$11 = $sub$10 << 1;
 $arrayidx49$11 = ((($count)) + 24|0);
 $30 = load2($arrayidx49$11);
 $conv50$11 = $30&65535;
 $sub$11 = (($shl$11) - ($conv50$11))|0;
 $cmp51$11 = ($sub$11|0)<(0);
 if ($cmp51$11) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$12 = $sub$11 << 1;
 $arrayidx49$12 = ((($count)) + 26|0);
 $31 = load2($arrayidx49$12);
 $conv50$12 = $31&65535;
 $sub$12 = (($shl$12) - ($conv50$12))|0;
 $cmp51$12 = ($sub$12|0)<(0);
 if ($cmp51$12) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$13 = $sub$12 << 1;
 $arrayidx49$13 = ((($count)) + 28|0);
 $32 = load2($arrayidx49$13);
 $conv50$13 = $32&65535;
 $sub$13 = (($shl$13) - ($conv50$13))|0;
 $cmp51$13 = ($sub$13|0)<(0);
 if ($cmp51$13) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $shl$14 = $sub$13 << 1;
 $conv50$14 = $33&65535;
 $sub$14 = (($shl$14) - ($conv50$14))|0;
 $cmp51$14 = ($sub$14|0)<(0);
 if ($cmp51$14) {
  $retval$0 = -1;
  STACKTOP = sp;return ($retval$0|0);
 }
 $cmp58 = ($sub$14|0)==(0);
 if (!($cmp58)) {
  $cmp60 = ($type|0)==(0);
  $cmp62 = ($max$0246$lcssa271|0)!=(1);
  $or$cond = $cmp60 | $cmp62;
  if ($or$cond) {
   $retval$0 = -1;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $arrayidx66 = ((($offs)) + 2|0);
 store2($arrayidx66,0);
 $arrayidx77295 = ((($offs)) + 4|0);
 store2($arrayidx77295,$7);
 $conv74293 = $7&65535;
 $arrayidx73$phi$trans$insert = ((($count)) + 4|0);
 $$pre264 = load2($arrayidx73$phi$trans$insert);
 $conv74 = $$pre264&65535;
 $add = (($conv74) + ($conv74293))|0;
 $conv75 = $add&65535;
 $arrayidx77 = ((($offs)) + 6|0);
 store2($arrayidx77,$conv75);
 $arrayidx73$phi$trans$insert$1 = ((($count)) + 6|0);
 $$pre264$1 = load2($arrayidx73$phi$trans$insert$1);
 $conv74$1 = $$pre264$1&65535;
 $add$1 = (($conv74$1) + ($add))|0;
 $conv75$1 = $add$1&65535;
 $arrayidx77$1 = ((($offs)) + 8|0);
 store2($arrayidx77$1,$conv75$1);
 $arrayidx73$phi$trans$insert$2 = ((($count)) + 8|0);
 $$pre264$2 = load2($arrayidx73$phi$trans$insert$2);
 $fold = (($add) + ($conv74$1))|0;
 $conv74$2 = $$pre264$2&65535;
 $add$2 = (($conv74$2) + ($fold))|0;
 $conv75$2 = $add$2&65535;
 $arrayidx77$2 = ((($offs)) + 10|0);
 store2($arrayidx77$2,$conv75$2);
 $arrayidx73$phi$trans$insert$3 = ((($count)) + 10|0);
 $$pre264$3 = load2($arrayidx73$phi$trans$insert$3);
 $fold305 = (($fold) + ($conv74$2))|0;
 $conv74$3 = $$pre264$3&65535;
 $add$3 = (($conv74$3) + ($fold305))|0;
 $conv75$3 = $add$3&65535;
 $arrayidx77$3 = ((($offs)) + 12|0);
 store2($arrayidx77$3,$conv75$3);
 $arrayidx73$phi$trans$insert$4 = ((($count)) + 12|0);
 $$pre264$4 = load2($arrayidx73$phi$trans$insert$4);
 $fold306 = (($fold305) + ($conv74$3))|0;
 $conv74$4 = $$pre264$4&65535;
 $add$4 = (($conv74$4) + ($fold306))|0;
 $conv75$4 = $add$4&65535;
 $arrayidx77$4 = ((($offs)) + 14|0);
 store2($arrayidx77$4,$conv75$4);
 $arrayidx73$phi$trans$insert$5 = ((($count)) + 14|0);
 $$pre264$5 = load2($arrayidx73$phi$trans$insert$5);
 $fold307 = (($fold306) + ($conv74$4))|0;
 $conv74$5 = $$pre264$5&65535;
 $add$5 = (($conv74$5) + ($fold307))|0;
 $conv75$5 = $add$5&65535;
 $arrayidx77$5 = ((($offs)) + 16|0);
 store2($arrayidx77$5,$conv75$5);
 $arrayidx73$phi$trans$insert$6 = ((($count)) + 16|0);
 $$pre264$6 = load2($arrayidx73$phi$trans$insert$6);
 $fold308 = (($fold307) + ($conv74$5))|0;
 $conv74$6 = $$pre264$6&65535;
 $add$6 = (($conv74$6) + ($fold308))|0;
 $conv75$6 = $add$6&65535;
 $arrayidx77$6 = ((($offs)) + 18|0);
 store2($arrayidx77$6,$conv75$6);
 $arrayidx73$phi$trans$insert$7 = ((($count)) + 18|0);
 $$pre264$7 = load2($arrayidx73$phi$trans$insert$7);
 $fold309 = (($fold308) + ($conv74$6))|0;
 $conv74$7 = $$pre264$7&65535;
 $add$7 = (($conv74$7) + ($fold309))|0;
 $conv75$7 = $add$7&65535;
 $arrayidx77$7 = ((($offs)) + 20|0);
 store2($arrayidx77$7,$conv75$7);
 $arrayidx73$phi$trans$insert$8 = ((($count)) + 20|0);
 $$pre264$8 = load2($arrayidx73$phi$trans$insert$8);
 $fold310 = (($fold309) + ($conv74$7))|0;
 $conv74$8 = $$pre264$8&65535;
 $add$8 = (($conv74$8) + ($fold310))|0;
 $conv75$8 = $add$8&65535;
 $arrayidx77$8 = ((($offs)) + 22|0);
 store2($arrayidx77$8,$conv75$8);
 $arrayidx73$phi$trans$insert$9 = ((($count)) + 22|0);
 $$pre264$9 = load2($arrayidx73$phi$trans$insert$9);
 $fold311 = (($fold310) + ($conv74$8))|0;
 $conv74$9 = $$pre264$9&65535;
 $add$9 = (($conv74$9) + ($fold311))|0;
 $conv75$9 = $add$9&65535;
 $arrayidx77$9 = ((($offs)) + 24|0);
 store2($arrayidx77$9,$conv75$9);
 $arrayidx73$phi$trans$insert$10 = ((($count)) + 24|0);
 $$pre264$10 = load2($arrayidx73$phi$trans$insert$10);
 $fold312 = (($fold311) + ($conv74$9))|0;
 $conv74$10 = $$pre264$10&65535;
 $add$10 = (($conv74$10) + ($fold312))|0;
 $conv75$10 = $add$10&65535;
 $arrayidx77$10 = ((($offs)) + 26|0);
 store2($arrayidx77$10,$conv75$10);
 $arrayidx73$phi$trans$insert$11 = ((($count)) + 26|0);
 $$pre264$11 = load2($arrayidx73$phi$trans$insert$11);
 $fold313 = (($fold312) + ($conv74$10))|0;
 $conv74$11 = $$pre264$11&65535;
 $add$11 = (($conv74$11) + ($fold313))|0;
 $conv75$11 = $add$11&65535;
 $arrayidx77$11 = ((($offs)) + 28|0);
 store2($arrayidx77$11,$conv75$11);
 $arrayidx73$phi$trans$insert$12 = ((($count)) + 28|0);
 $$pre264$12 = load2($arrayidx73$phi$trans$insert$12);
 $fold314 = (($fold313) + ($conv74$11))|0;
 $conv74$12 = $$pre264$12&65535;
 $add$12 = (($conv74$12) + ($fold314))|0;
 $conv75$12 = $add$12&65535;
 $arrayidx77$12 = ((($offs)) + 30|0);
 store2($arrayidx77$12,$conv75$12);
 if (!($cmp2247)) {
  $sym$1238 = 0;
  while(1) {
   $arrayidx85 = (($lens) + ($sym$1238<<1)|0);
   $9 = load2($arrayidx85);
   $cmp87 = ($9<<16>>16)==(0);
   if (!($cmp87)) {
    $conv86 = $9&65535;
    $conv90 = $sym$1238&65535;
    $arrayidx93 = (($offs) + ($conv86<<1)|0);
    $10 = load2($arrayidx93);
    $inc94 = (($10) + 1)<<16>>16;
    store2($arrayidx93,$inc94);
    $idxprom95 = $10&65535;
    $arrayidx96 = (($work) + ($idxprom95<<1)|0);
    store2($arrayidx96,$conv90);
   }
   $inc99 = (($sym$1238) + 1)|0;
   $exitcond = ($inc99|0)==($codes|0);
   if ($exitcond) {
    break;
   } else {
    $sym$1238 = $inc99;
   }
  }
 }
 switch ($type|0) {
 case 0:  {
  $base$0196209$ph = $work;$cmp105201205$ph = 0;$cmp111210$ph = 0;$end$0198207$ph = 19;$extra$0197208$ph = $work;
  break;
 }
 case 1:  {
  $cmp108 = ($min$0$max$0$>>>0)>(9);
  if ($cmp108) {
   $retval$0 = 1;
   STACKTOP = sp;return ($retval$0|0);
  } else {
   $base$0196209$ph = (13136);$cmp105201205$ph = 1;$cmp111210$ph = 0;$end$0198207$ph = 256;$extra$0197208$ph = (13262);
  }
  break;
 }
 default: {
  $cmp108194 = ($min$0$max$0$>>>0)>(9);
  $cmp111 = ($type|0)==(2);
  $or$cond2 = $cmp111 & $cmp108194;
  if ($or$cond2) {
   $retval$0 = 1;
   STACKTOP = sp;return ($retval$0|0);
  } else {
   $base$0196209$ph = 13586;$cmp105201205$ph = 0;$cmp111210$ph = $cmp111;$end$0198207$ph = -1;$extra$0197208$ph = 13712;
  }
 }
 }
 $sub104200206$ph$in = 1 << $min$0$max$0$;
 $next$0$ph = load4($table);
 $sub104200206$ph = (($sub104200206$ph$in) + -1)|0;
 $conv233 = $min$0$max$0$&255;
 $curr$0$ph = $min$0$max$0$;$drop$0$ph = 0;$huff$0$ph = 0;$len$3$ph = $min$0$lcssa;$low$0$ph = -1;$next$0$ph212 = $next$0$ph;$sym$2$ph = 0;$used$0$ph211 = $sub104200206$ph$in;
 L93: while(1) {
  $shl151 = 1 << $curr$0$ph;
  $huff$0 = $huff$0$ph;$len$3 = $len$3$ph;$sym$2 = $sym$2$ph;
  while(1) {
   $sub119 = (($len$3) - ($drop$0$ph))|0;
   $conv120 = $sub119&255;
   $arrayidx122 = (($work) + ($sym$2<<1)|0);
   $11 = load2($arrayidx122);
   $conv123 = $11&65535;
   $cmp124 = ($conv123|0)<($end$0198207$ph|0);
   do {
    if ($cmp124) {
     $here$sroa$0$0 = 0;$here$sroa$15$0 = $11;
    } else {
     $cmp132 = ($conv123|0)>($end$0198207$ph|0);
     if (!($cmp132)) {
      $here$sroa$0$0 = 96;$here$sroa$15$0 = 0;
      break;
     }
     $arrayidx142 = (($base$0196209$ph) + ($conv123<<1)|0);
     $arrayidx137 = (($extra$0197208$ph) + ($conv123<<1)|0);
     $12 = load2($arrayidx137);
     $conv138 = $12&255;
     $13 = load2($arrayidx142);
     $here$sroa$0$0 = $conv138;$here$sroa$15$0 = $13;
    }
   } while(0);
   $shl150 = 1 << $sub119;
   $shr = $huff$0 >>> $drop$0$ph;
   $fill$0 = $shl151;
   while(1) {
    $sub152 = (($fill$0) - ($shl150))|0;
    $add153 = (($sub152) + ($shr))|0;
    $here$sroa$0$0$$sroa_idx = (($next$0$ph212) + ($add153<<2)|0);
    store1($here$sroa$0$0$$sroa_idx,$here$sroa$0$0);
    $here$sroa$11$0$$sroa_idx = (((($next$0$ph212) + ($add153<<2)|0)) + 1|0);
    store1($here$sroa$11$0$$sroa_idx,$conv120);
    $here$sroa$15$0$$sroa_idx27 = (((($next$0$ph212) + ($add153<<2)|0)) + 2|0);
    store2($here$sroa$15$0$$sroa_idx27,$here$sroa$15$0);
    $cmp155 = ($sub152|0)==(0);
    if ($cmp155) {
     break;
    } else {
     $fill$0 = $sub152;
    }
   }
   $sub157 = (($len$3) + -1)|0;
   $shl158 = 1 << $sub157;
   $incr$0 = $shl158;
   while(1) {
    $and = $incr$0 & $huff$0;
    $tobool = ($and|0)==(0);
    $shr159 = $incr$0 >>> 1;
    if ($tobool) {
     break;
    } else {
     $incr$0 = $shr159;
    }
   }
   $cmp160 = ($incr$0|0)==(0);
   $sub163 = (($incr$0) + -1)|0;
   $and164 = $sub163 & $huff$0;
   $add165 = (($and164) + ($incr$0))|0;
   $$add165 = $cmp160 ? 0 : $add165;
   $inc168 = (($sym$2) + 1)|0;
   $arrayidx169 = (($count) + ($len$3<<1)|0);
   $14 = load2($arrayidx169);
   $dec170 = (($14) + -1)<<16>>16;
   store2($arrayidx169,$dec170);
   $cmp172 = ($dec170<<16>>16)==(0);
   if ($cmp172) {
    $cmp175 = ($len$3|0)==($max$0246$lcssa271|0);
    if ($cmp175) {
     break L93;
    }
    $arrayidx179 = (($work) + ($inc168<<1)|0);
    $15 = load2($arrayidx179);
    $idxprom180 = $15&65535;
    $arrayidx181 = (($lens) + ($idxprom180<<1)|0);
    $16 = load2($arrayidx181);
    $conv182 = $16&65535;
    $len$4 = $conv182;
   } else {
    $len$4 = $len$3;
   }
   $cmp184 = ($len$4>>>0)>($min$0$max$0$>>>0);
   if (!($cmp184)) {
    $huff$0 = $$add165;$len$3 = $len$4;$sym$2 = $inc168;
    continue;
   }
   $and187 = $$add165 & $sub104200206$ph;
   $cmp188 = ($and187|0)==($low$0$ph|0);
   if ($cmp188) {
    $huff$0 = $$add165;$len$3 = $len$4;$sym$2 = $inc168;
   } else {
    break;
   }
  }
  $cmp191 = ($drop$0$ph|0)==(0);
  $min$0$max$0$$drop$0 = $cmp191 ? $min$0$max$0$ : $drop$0$ph;
  $add$ptr195 = (($next$0$ph212) + ($shl151<<2)|0);
  $sub196 = (($len$4) - ($min$0$max$0$$drop$0))|0;
  $cmp200232 = ($len$4>>>0)<($max$0246$lcssa271>>>0);
  L113: do {
   if ($cmp200232) {
    $shl197 = 1 << $sub196;
    $add199235 = $len$4;$curr$1233 = $sub196;$left$1234 = $shl197;
    while(1) {
     $arrayidx204 = (($count) + ($add199235<<1)|0);
     $17 = load2($arrayidx204);
     $conv205 = $17&65535;
     $sub206 = (($left$1234) - ($conv205))|0;
     $cmp207 = ($sub206|0)<(1);
     if ($cmp207) {
      $curr$1$lcssa = $curr$1233;
      break L113;
     }
     $inc211 = (($curr$1233) + 1)|0;
     $shl212 = $sub206 << 1;
     $add199 = (($inc211) + ($min$0$max$0$$drop$0))|0;
     $cmp200 = ($add199>>>0)<($max$0246$lcssa271>>>0);
     if ($cmp200) {
      $add199235 = $add199;$curr$1233 = $inc211;$left$1234 = $shl212;
     } else {
      $curr$1$lcssa = $inc211;
      break;
     }
    }
   } else {
    $curr$1$lcssa = $sub196;
   }
  } while(0);
  $shl214 = 1 << $curr$1$lcssa;
  $add215 = (($shl214) + ($used$0$ph211))|0;
  $cmp219 = ($add215>>>0)>(851);
  $or$cond3 = $cmp105201205$ph & $cmp219;
  $cmp225 = ($add215>>>0)>(591);
  $or$cond4 = $cmp111210$ph & $cmp225;
  $or$cond187 = $or$cond3 | $or$cond4;
  if ($or$cond187) {
   $retval$0 = 1;
   label = 47;
   break;
  }
  $conv230 = $curr$1$lcssa&255;
  $18 = load4($table);
  $op232 = (($18) + ($and187<<2)|0);
  store1($op232,$conv230);
  $bits235 = (((($18) + ($and187<<2)|0)) + 1|0);
  store1($bits235,$conv233);
  $sub$ptr$lhs$cast = $add$ptr195;
  $sub$ptr$rhs$cast = $18;
  $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
  $sub$ptr$div186 = $sub$ptr$sub >>> 2;
  $conv236 = $sub$ptr$div186&65535;
  $val238 = (((($18) + ($and187<<2)|0)) + 2|0);
  store2($val238,$conv236);
  $curr$0$ph = $curr$1$lcssa;$drop$0$ph = $min$0$max$0$$drop$0;$huff$0$ph = $$add165;$len$3$ph = $len$4;$low$0$ph = $and187;$next$0$ph212 = $add$ptr195;$sym$2$ph = $inc168;$used$0$ph211 = $add215;
 }
 if ((label|0) == 47) {
  STACKTOP = sp;return ($retval$0|0);
 }
 $cmp247225 = ($$add165|0)==(0);
 if (!($cmp247225)) {
  $drop$2227 = $drop$0$ph;$here$sroa$11$0229 = $conv120;$huff$2228 = $$add165;$len$5226 = $max$0246$lcssa271;$next$1230 = $next$0$ph212;
  while(1) {
   $cmp250 = ($drop$2227|0)==(0);
   $and253 = $huff$2228 & $sub104200206$ph;
   $cmp254 = ($and253|0)==($low$0$ph|0);
   $or$cond188 = $cmp250 | $cmp254;
   if ($or$cond188) {
    $drop$3 = $drop$2227;$here$sroa$11$1 = $here$sroa$11$0229;$len$6 = $len$5226;$next$2 = $next$1230;
   } else {
    $19 = load4($table);
    $drop$3 = 0;$here$sroa$11$1 = $conv233;$len$6 = $min$0$max$0$;$next$2 = $19;
   }
   $shr260 = $huff$2228 >>> $drop$3;
   $here$sroa$0$0$$sroa_idx19 = (($next$2) + ($shr260<<2)|0);
   store1($here$sroa$0$0$$sroa_idx19,64);
   $here$sroa$11$0$$sroa_idx25 = (((($next$2) + ($shr260<<2)|0)) + 1|0);
   store1($here$sroa$11$0$$sroa_idx25,$here$sroa$11$1);
   $here$sroa$15$0$$sroa_idx32 = (((($next$2) + ($shr260<<2)|0)) + 2|0);
   store2($here$sroa$15$0$$sroa_idx32,0);
   $sub262 = (($len$6) + -1)|0;
   $shl263 = 1 << $sub262;
   $incr$1 = $shl263;
   while(1) {
    $and265 = $incr$1 & $huff$2228;
    $tobool266 = ($and265|0)==(0);
    $shr268 = $incr$1 >>> 1;
    if ($tobool266) {
     break;
    } else {
     $incr$1 = $shr268;
    }
   }
   $cmp270 = ($incr$1|0)==(0);
   $sub273 = (($incr$1) + -1)|0;
   $and274 = $sub273 & $huff$2228;
   $add275 = (($and274) + ($incr$1))|0;
   $$add275 = $cmp270 ? 0 : $add275;
   $cmp247 = ($$add275|0)==(0);
   if ($cmp247) {
    break;
   } else {
    $drop$2227 = $drop$3;$here$sroa$11$0229 = $here$sroa$11$1;$huff$2228 = $$add275;$len$5226 = $len$6;$next$1230 = $next$2;
   }
  }
 }
 $20 = load4($table);
 $add$ptr279 = (($20) + ($used$0$ph211<<2)|0);
 store4($table,$add$ptr279);
 store4($bits,$min$0$max$0$);
 $retval$0 = 0;
 STACKTOP = sp;return ($retval$0|0);
}
function _inflate_fast($strm,$start) {
 $strm = $strm|0;
 $start = $start|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $add = 0, $add$ptr = 0, $add$ptr121 = 0, $add$ptr126 = 0, $add$ptr136 = 0, $add$ptr144 = 0, $add$ptr170 = 0, $add$ptr175 = 0, $add$ptr188 = 0, $add$ptr2 = 0, $add$ptr214 = 0, $add$ptr285 = 0, $add$ptr291 = 0, $add$ptr293 = 0, $add$ptr3 = 0, $add$ptr5 = 0, $add$ptr8 = 0, $add100 = 0, $add101 = 0;
 var $add107 = 0, $add142 = 0, $add19 = 0, $add23 = 0, $add24 = 0, $add249 = 0, $add265 = 0, $add48 = 0, $add49 = 0, $add54 = 0, $add64 = 0, $add65 = 0, $add69 = 0, $add70 = 0, $add92 = 0, $add93 = 0, $and = 0, $and106 = 0, $and240 = 0, $and248 = 0;
 var $and256 = 0, $and264 = 0, $and268 = 0, $and290 = 0, $and35 = 0, $and39 = 0, $and53 = 0, $and72 = 0, $and80 = 0, $and80309 = 0, $and85 = 0, $avail_in = 0, $avail_out = 0, $bits$0 = 0, $bits$1 = 0, $bits$3 = 0, $bits$4 = 0, $bits$5 = 0, $bits$7 = 0, $bits$8 = 0;
 var $bits$9 = 0, $bits14 = 0, $cmp = 0, $cmp110 = 0, $cmp114 = 0, $cmp122 = 0, $cmp127 = 0, $cmp139 = 0, $cmp146 = 0, $cmp158 = 0, $cmp176 = 0, $cmp192 = 0, $cmp192319 = 0, $cmp205 = 0, $cmp224 = 0, $cmp231 = 0, $cmp241 = 0, $cmp257 = 0, $cmp278 = 0, $cmp280 = 0;
 var $cmp30 = 0, $cmp30292 = 0, $cmp42 = 0, $cmp58 = 0, $cmp86 = 0, $cmp94 = 0, $cond = 0, $cond319 = 0, $conv = 0, $conv21 = 0, $conv245 = 0, $conv26 = 0, $conv261 = 0, $conv26288 = 0, $conv29 = 0, $conv29291 = 0, $conv29296 = 0, $conv38 = 0, $conv46 = 0, $conv62 = 0;
 var $conv67 = 0, $conv75 = 0, $conv75305 = 0, $conv79 = 0, $conv79$lcssa = 0, $conv79308 = 0, $conv79314 = 0, $conv84 = 0, $conv90 = 0, $conv98 = 0, $dec = 0, $dec154 = 0, $dec166 = 0, $dec184 = 0, $distbits = 0, $distcode = 0, $extract$t = 0, $extract$t326 = 0, $from$0 = 0, $from$1 = 0;
 var $from$2 = 0, $from$3 = 0, $from$4$lcssa = 0, $from$4$ph = 0, $from$4322 = 0, $from$5 = 0, $here$sroa$0$0 = 0, $here$sroa$0$0$in = 0, $here$sroa$0$0$in282 = 0, $here$sroa$0$0285 = 0, $here$sroa$0$1 = 0, $here$sroa$0$1$in = 0, $here$sroa$0$1$in299 = 0, $here$sroa$0$1302 = 0, $here$sroa$10$0 = 0, $here$sroa$10$0$in = 0, $here$sroa$10$0$in284 = 0, $here$sroa$10$0$lcssa$off0 = 0, $here$sroa$10$0287 = 0, $here$sroa$10$0293 = 0;
 var $here$sroa$10$1 = 0, $here$sroa$10$1$in = 0, $here$sroa$10$1$in301 = 0, $here$sroa$10$1$lcssa = 0, $here$sroa$10$1304 = 0, $here$sroa$10$1311 = 0, $here$sroa$8$0 = 0, $here$sroa$8$0$in = 0, $here$sroa$8$0$in283 = 0, $here$sroa$8$0286 = 0, $here$sroa$8$1 = 0, $here$sroa$8$1$in = 0, $here$sroa$8$1$in300 = 0, $here$sroa$8$1303 = 0, $hold$0 = 0, $hold$1 = 0, $hold$3 = 0, $hold$4 = 0, $hold$5 = 0, $hold$7 = 0;
 var $hold$8 = 0, $hold$9 = 0, $hold13 = 0, $idx$neg135 = 0, $idx$neg169 = 0, $idx$neg187 = 0, $idx$neg213 = 0, $idx$neg284 = 0, $in$0 = 0, $in$1 = 0, $in$2 = 0, $in$3 = 0, $in$4 = 0, $in$5 = 0, $in$6 = 0, $in$7 = 0, $incdec$ptr = 0, $incdec$ptr132 = 0, $incdec$ptr133 = 0, $incdec$ptr151 = 0;
 var $incdec$ptr152 = 0, $incdec$ptr163 = 0, $incdec$ptr164 = 0, $incdec$ptr181 = 0, $incdec$ptr182 = 0, $incdec$ptr194 = 0, $incdec$ptr195 = 0, $incdec$ptr196 = 0, $incdec$ptr197 = 0, $incdec$ptr198 = 0, $incdec$ptr199 = 0, $incdec$ptr20 = 0, $incdec$ptr203 = 0, $incdec$ptr204 = 0, $incdec$ptr208 = 0, $incdec$ptr209 = 0, $incdec$ptr216 = 0, $incdec$ptr217 = 0, $incdec$ptr218 = 0, $incdec$ptr219 = 0;
 var $incdec$ptr220 = 0, $incdec$ptr221 = 0, $incdec$ptr229 = 0, $incdec$ptr230 = 0, $incdec$ptr234 = 0, $incdec$ptr235 = 0, $incdec$ptr34 = 0, $incdec$ptr45 = 0, $incdec$ptr61 = 0, $incdec$ptr66 = 0, $incdec$ptr89 = 0, $incdec$ptr97 = 0, $len$0 = 0, $len$1$lcssa = 0, $len$1$ph = 0, $len$1321 = 0, $len$2 = 0, $lenbits = 0, $lencode = 0, $msg = 0;
 var $msg252 = 0, $msg273 = 0, $next_out = 0, $op$0 = 0, $op$1 = 0, $op$2 = 0, $op$3 = 0, $or$cond = 0, $out$0 = 0, $out$1 = 0, $out$2 = 0, $out$3 = 0, $out$4 = 0, $out$5$lcssa = 0, $out$5$ph = 0, $out$5320 = 0, $out$6 = 0, $out$7 = 0, $out$8 = 0, $sane = 0;
 var $scevgep = 0, $scevgep353 = 0, $scevgep355 = 0, $scevgep356 = 0, $scevgep358 = 0, $scevgep359 = 0, $scevgep362 = 0, $scevgep363 = 0, $shl = 0, $shl104 = 0, $shl16 = 0, $shl18 = 0, $shl22 = 0, $shl246 = 0, $shl262 = 0, $shl286 = 0, $shl288 = 0, $shl47 = 0, $shl51 = 0, $shl63 = 0;
 var $shl68 = 0, $shl91 = 0, $shl99 = 0, $shr = 0, $shr$lcssa = 0, $shr108 = 0, $shr283 = 0, $shr289 = 0, $shr294 = 0, $shr55 = 0, $shr76 = 0, $shr76$lcssa = 0, $shr76306 = 0, $shr76312 = 0, $state1 = 0, $sub = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast297 = 0, $sub$ptr$lhs$cast309 = 0, $sub$ptr$rhs$cast = 0;
 var $sub$ptr$rhs$cast298 = 0, $sub$ptr$rhs$cast310 = 0, $sub$ptr$sub = 0, $sub$ptr$sub299 = 0, $sub$ptr$sub311 = 0, $sub105 = 0, $sub109 = 0, $sub113 = 0, $sub125 = 0, $sub130 = 0, $sub143 = 0, $sub145 = 0, $sub149 = 0, $sub15 = 0, $sub161 = 0, $sub17 = 0, $sub174 = 0, $sub179 = 0, $sub200 = 0, $sub222 = 0;
 var $sub247 = 0, $sub263 = 0, $sub27 = 0, $sub27$lcssa = 0, $sub27290 = 0, $sub27295 = 0, $sub287 = 0, $sub289 = 0, $sub4256 = 0, $sub52 = 0, $sub56 = 0, $sub7 = 0, $sub77 = 0, $sub77$lcssa = 0, $sub77307 = 0, $sub77313 = 0, $tobool = 0, $tobool117 = 0, $tobool134 = 0, $tobool155 = 0;
 var $tobool167 = 0, $tobool185 = 0, $tobool201 = 0, $tobool227 = 0, $tobool269 = 0, $tobool40 = 0, $tobool81 = 0, $tobool81310 = 0, $whave10 = 0, $window12 = 0, $wnext11 = 0, $wsize9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $state1 = ((($strm)) + 28|0);
 $0 = load4($state1);
 $1 = load4($strm);
 $add$ptr = ((($1)) + -1|0);
 $avail_in = ((($strm)) + 4|0);
 $2 = load4($avail_in);
 $sub = (($2) + -5)|0;
 $add$ptr2 = (($add$ptr) + ($sub)|0);
 $next_out = ((($strm)) + 12|0);
 $3 = load4($next_out);
 $add$ptr3 = ((($3)) + -1|0);
 $avail_out = ((($strm)) + 16|0);
 $4 = load4($avail_out);
 $sub4256 = (($4) - ($start))|0;
 $add$ptr5 = (($add$ptr3) + ($sub4256)|0);
 $sub7 = (($4) + -257)|0;
 $add$ptr8 = (($add$ptr3) + ($sub7)|0);
 $wsize9 = ((($0)) + 40|0);
 $5 = load4($wsize9);
 $whave10 = ((($0)) + 44|0);
 $6 = load4($whave10);
 $wnext11 = ((($0)) + 48|0);
 $7 = load4($wnext11);
 $window12 = ((($0)) + 52|0);
 $8 = load4($window12);
 $hold13 = ((($0)) + 56|0);
 $9 = load4($hold13);
 $bits14 = ((($0)) + 60|0);
 $10 = load4($bits14);
 $lencode = ((($0)) + 76|0);
 $11 = load4($lencode);
 $distcode = ((($0)) + 80|0);
 $12 = load4($distcode);
 $lenbits = ((($0)) + 84|0);
 $13 = load4($lenbits);
 $shl = 1 << $13;
 $sub15 = (($shl) + -1)|0;
 $distbits = ((($0)) + 88|0);
 $14 = load4($distbits);
 $shl16 = 1 << $14;
 $sub17 = (($shl16) + -1)|0;
 $sub$ptr$rhs$cast = $add$ptr5;
 $sane = ((($0)) + 7104|0);
 $add$ptr121 = ((($8)) + -1|0);
 $cmp122 = ($7|0)==(0);
 $add142 = (($7) + ($5))|0;
 $15 = (($sub$ptr$rhs$cast) - ($7))|0;
 $bits$0 = $10;$hold$0 = $9;$in$0 = $add$ptr;$out$0 = $add$ptr3;
 L1: while(1) {
  $cmp = ($bits$0>>>0)<(15);
  if ($cmp) {
   $incdec$ptr = ((($in$0)) + 1|0);
   $16 = load1($incdec$ptr);
   $conv = $16&255;
   $shl18 = $conv << $bits$0;
   $add = (($shl18) + ($hold$0))|0;
   $add19 = (($bits$0) + 8)|0;
   $incdec$ptr20 = ((($in$0)) + 2|0);
   $17 = load1($incdec$ptr20);
   $conv21 = $17&255;
   $shl22 = $conv21 << $add19;
   $add23 = (($add) + ($shl22))|0;
   $add24 = (($bits$0) + 16)|0;
   $bits$1 = $add24;$hold$1 = $add23;$in$1 = $incdec$ptr20;
  } else {
   $bits$1 = $bits$0;$hold$1 = $hold$0;$in$1 = $in$0;
  }
  $and = $hold$1 & $sub15;
  $here$sroa$0$0$in282 = (($11) + ($and<<2)|0);
  $here$sroa$8$0$in283 = (((($11) + ($and<<2)|0)) + 1|0);
  $here$sroa$10$0$in284 = (((($11) + ($and<<2)|0)) + 2|0);
  $here$sroa$0$0285 = load1($here$sroa$0$0$in282);
  $here$sroa$8$0286 = load1($here$sroa$8$0$in283);
  $here$sroa$10$0287 = load2($here$sroa$10$0$in284);
  $conv26288 = $here$sroa$8$0286&255;
  $shr289 = $hold$1 >>> $conv26288;
  $sub27290 = (($bits$1) - ($conv26288))|0;
  $cmp30292 = ($here$sroa$0$0285<<24>>24)==(0);
  $extract$t = $here$sroa$10$0287&255;
  do {
   if ($cmp30292) {
    $here$sroa$10$0$lcssa$off0 = $extract$t;$shr$lcssa = $shr289;$sub27$lcssa = $sub27290;
    label = 7;
   } else {
    $conv29291 = $here$sroa$0$0285&255;
    $conv29296 = $conv29291;$here$sroa$10$0293 = $here$sroa$10$0287;$shr294 = $shr289;$sub27295 = $sub27290;
    while(1) {
     $and35 = $conv29296 & 16;
     $tobool = ($and35|0)==(0);
     if (!($tobool)) {
      break;
     }
     $and256 = $conv29296 & 64;
     $cmp257 = ($and256|0)==(0);
     if (!($cmp257)) {
      label = 55;
      break L1;
     }
     $conv261 = $here$sroa$10$0293&65535;
     $shl262 = 1 << $conv29296;
     $sub263 = (($shl262) + -1)|0;
     $and264 = $shr294 & $sub263;
     $add265 = (($and264) + ($conv261))|0;
     $here$sroa$0$0$in = (($11) + ($add265<<2)|0);
     $here$sroa$8$0$in = (((($11) + ($add265<<2)|0)) + 1|0);
     $here$sroa$10$0$in = (((($11) + ($add265<<2)|0)) + 2|0);
     $here$sroa$0$0 = load1($here$sroa$0$0$in);
     $here$sroa$8$0 = load1($here$sroa$8$0$in);
     $here$sroa$10$0 = load2($here$sroa$10$0$in);
     $conv26 = $here$sroa$8$0&255;
     $shr = $shr294 >>> $conv26;
     $sub27 = (($sub27295) - ($conv26))|0;
     $conv29 = $here$sroa$0$0&255;
     $cmp30 = ($here$sroa$0$0<<24>>24)==(0);
     if ($cmp30) {
      label = 6;
      break;
     } else {
      $conv29296 = $conv29;$here$sroa$10$0293 = $here$sroa$10$0;$shr294 = $shr;$sub27295 = $sub27;
     }
    }
    if ((label|0) == 6) {
     label = 0;
     $extract$t326 = $here$sroa$10$0&255;
     $here$sroa$10$0$lcssa$off0 = $extract$t326;$shr$lcssa = $shr;$sub27$lcssa = $sub27;
     label = 7;
     break;
    }
    $conv38 = $here$sroa$10$0293&65535;
    $and39 = $conv29296 & 15;
    $tobool40 = ($and39|0)==(0);
    if ($tobool40) {
     $bits$4 = $sub27295;$hold$4 = $shr294;$in$3 = $in$1;$len$0 = $conv38;
    } else {
     $cmp42 = ($sub27295>>>0)<($and39>>>0);
     $incdec$ptr45 = ((($in$1)) + 1|0);
     if ($cmp42) {
      $add49 = (($sub27295) + 8)|0;
      $18 = load1($incdec$ptr45);
      $conv46 = $18&255;
      $shl47 = $conv46 << $sub27295;
      $add48 = (($shl47) + ($shr294))|0;
      $bits$3 = $add49;$hold$3 = $add48;$in$2 = $incdec$ptr45;
     } else {
      $bits$3 = $sub27295;$hold$3 = $shr294;$in$2 = $in$1;
     }
     $shl51 = 1 << $and39;
     $sub52 = (($shl51) + -1)|0;
     $and53 = $hold$3 & $sub52;
     $add54 = (($and53) + ($conv38))|0;
     $shr55 = $hold$3 >>> $and39;
     $sub56 = (($bits$3) - ($and39))|0;
     $bits$4 = $sub56;$hold$4 = $shr55;$in$3 = $in$2;$len$0 = $add54;
    }
    $cmp58 = ($bits$4>>>0)<(15);
    if ($cmp58) {
     $incdec$ptr61 = ((($in$3)) + 1|0);
     $19 = load1($incdec$ptr61);
     $conv62 = $19&255;
     $shl63 = $conv62 << $bits$4;
     $add64 = (($shl63) + ($hold$4))|0;
     $add65 = (($bits$4) + 8)|0;
     $incdec$ptr66 = ((($in$3)) + 2|0);
     $20 = load1($incdec$ptr66);
     $conv67 = $20&255;
     $shl68 = $conv67 << $add65;
     $add69 = (($add64) + ($shl68))|0;
     $add70 = (($bits$4) + 16)|0;
     $bits$5 = $add70;$hold$5 = $add69;$in$4 = $incdec$ptr66;
    } else {
     $bits$5 = $bits$4;$hold$5 = $hold$4;$in$4 = $in$3;
    }
    $and72 = $hold$5 & $sub17;
    $here$sroa$0$1$in299 = (($12) + ($and72<<2)|0);
    $here$sroa$8$1$in300 = (((($12) + ($and72<<2)|0)) + 1|0);
    $here$sroa$10$1$in301 = (((($12) + ($and72<<2)|0)) + 2|0);
    $here$sroa$0$1302 = load1($here$sroa$0$1$in299);
    $here$sroa$8$1303 = load1($here$sroa$8$1$in300);
    $here$sroa$10$1304 = load2($here$sroa$10$1$in301);
    $conv75305 = $here$sroa$8$1303&255;
    $shr76306 = $hold$5 >>> $conv75305;
    $sub77307 = (($bits$5) - ($conv75305))|0;
    $conv79308 = $here$sroa$0$1302&255;
    $and80309 = $conv79308 & 16;
    $tobool81310 = ($and80309|0)==(0);
    if ($tobool81310) {
     $conv79314 = $conv79308;$here$sroa$10$1311 = $here$sroa$10$1304;$shr76312 = $shr76306;$sub77313 = $sub77307;
     while(1) {
      $and240 = $conv79314 & 64;
      $cmp241 = ($and240|0)==(0);
      if (!($cmp241)) {
       label = 52;
       break L1;
      }
      $conv245 = $here$sroa$10$1311&65535;
      $shl246 = 1 << $conv79314;
      $sub247 = (($shl246) + -1)|0;
      $and248 = $shr76312 & $sub247;
      $add249 = (($and248) + ($conv245))|0;
      $here$sroa$0$1$in = (($12) + ($add249<<2)|0);
      $here$sroa$8$1$in = (((($12) + ($add249<<2)|0)) + 1|0);
      $here$sroa$10$1$in = (((($12) + ($add249<<2)|0)) + 2|0);
      $here$sroa$0$1 = load1($here$sroa$0$1$in);
      $here$sroa$8$1 = load1($here$sroa$8$1$in);
      $here$sroa$10$1 = load2($here$sroa$10$1$in);
      $conv75 = $here$sroa$8$1&255;
      $shr76 = $shr76312 >>> $conv75;
      $sub77 = (($sub77313) - ($conv75))|0;
      $conv79 = $here$sroa$0$1&255;
      $and80 = $conv79 & 16;
      $tobool81 = ($and80|0)==(0);
      if ($tobool81) {
       $conv79314 = $conv79;$here$sroa$10$1311 = $here$sroa$10$1;$shr76312 = $shr76;$sub77313 = $sub77;
      } else {
       $conv79$lcssa = $conv79;$here$sroa$10$1$lcssa = $here$sroa$10$1;$shr76$lcssa = $shr76;$sub77$lcssa = $sub77;
       break;
      }
     }
    } else {
     $conv79$lcssa = $conv79308;$here$sroa$10$1$lcssa = $here$sroa$10$1304;$shr76$lcssa = $shr76306;$sub77$lcssa = $sub77307;
    }
    $conv84 = $here$sroa$10$1$lcssa&65535;
    $and85 = $conv79$lcssa & 15;
    $cmp86 = ($sub77$lcssa>>>0)<($and85>>>0);
    if ($cmp86) {
     $incdec$ptr89 = ((($in$4)) + 1|0);
     $21 = load1($incdec$ptr89);
     $conv90 = $21&255;
     $shl91 = $conv90 << $sub77$lcssa;
     $add92 = (($shl91) + ($shr76$lcssa))|0;
     $add93 = (($sub77$lcssa) + 8)|0;
     $cmp94 = ($add93>>>0)<($and85>>>0);
     $incdec$ptr97 = ((($in$4)) + 2|0);
     if ($cmp94) {
      $add101 = (($sub77$lcssa) + 16)|0;
      $22 = load1($incdec$ptr97);
      $conv98 = $22&255;
      $shl99 = $conv98 << $add93;
      $add100 = (($shl99) + ($add92))|0;
      $bits$7 = $add101;$hold$7 = $add100;$in$5 = $incdec$ptr97;
     } else {
      $bits$7 = $add93;$hold$7 = $add92;$in$5 = $incdec$ptr89;
     }
    } else {
     $bits$7 = $sub77$lcssa;$hold$7 = $shr76$lcssa;$in$5 = $in$4;
    }
    $shl104 = 1 << $and85;
    $sub105 = (($shl104) + -1)|0;
    $and106 = $hold$7 & $sub105;
    $add107 = (($and106) + ($conv84))|0;
    $shr108 = $hold$7 >>> $and85;
    $sub109 = (($bits$7) - ($and85))|0;
    $sub$ptr$lhs$cast = $out$0;
    $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
    $cmp110 = ($add107>>>0)>($sub$ptr$sub>>>0);
    if (!($cmp110)) {
     $idx$neg213 = (0 - ($add107))|0;
     $add$ptr214 = (($out$0) + ($idx$neg213)|0);
     $from$5 = $add$ptr214;$len$2 = $len$0;$out$6 = $out$0;
     while(1) {
      $incdec$ptr216 = ((($from$5)) + 1|0);
      $36 = load1($incdec$ptr216);
      $incdec$ptr217 = ((($out$6)) + 1|0);
      store1($incdec$ptr217,$36);
      $incdec$ptr218 = ((($from$5)) + 2|0);
      $37 = load1($incdec$ptr218);
      $incdec$ptr219 = ((($out$6)) + 2|0);
      store1($incdec$ptr219,$37);
      $incdec$ptr220 = ((($from$5)) + 3|0);
      $38 = load1($incdec$ptr220);
      $incdec$ptr221 = ((($out$6)) + 3|0);
      store1($incdec$ptr221,$38);
      $sub222 = (($len$2) + -3)|0;
      $cmp224 = ($sub222>>>0)>(2);
      if ($cmp224) {
       $from$5 = $incdec$ptr220;$len$2 = $sub222;$out$6 = $incdec$ptr221;
      } else {
       break;
      }
     }
     $tobool227 = ($sub222|0)==(0);
     if ($tobool227) {
      $bits$8 = $sub109;$hold$8 = $shr108;$in$6 = $in$5;$out$7 = $incdec$ptr221;
      break;
     }
     $incdec$ptr229 = ((($from$5)) + 4|0);
     $39 = load1($incdec$ptr229);
     $incdec$ptr230 = ((($out$6)) + 4|0);
     store1($incdec$ptr230,$39);
     $cmp231 = ($sub222|0)==(1);
     if ($cmp231) {
      $bits$8 = $sub109;$hold$8 = $shr108;$in$6 = $in$5;$out$7 = $incdec$ptr230;
      break;
     }
     $incdec$ptr234 = ((($from$5)) + 5|0);
     $40 = load1($incdec$ptr234);
     $incdec$ptr235 = ((($out$6)) + 5|0);
     store1($incdec$ptr235,$40);
     $bits$8 = $sub109;$hold$8 = $shr108;$in$6 = $in$5;$out$7 = $incdec$ptr235;
     break;
    }
    $sub113 = (($add107) - ($sub$ptr$sub))|0;
    $cmp114 = ($sub113>>>0)>($6>>>0);
    if ($cmp114) {
     $23 = load4($sane);
     $tobool117 = ($23|0)==(0);
     if (!($tobool117)) {
      label = 22;
      break L1;
     }
    }
    do {
     if ($cmp122) {
      $sub125 = (($5) - ($sub113))|0;
      $add$ptr126 = (($add$ptr121) + ($sub125)|0);
      $cmp127 = ($len$0>>>0)>($sub113>>>0);
      if ($cmp127) {
       $sub130 = (($len$0) - ($sub113))|0;
       $24 = (($add107) - ($sub$ptr$lhs$cast))|0;
       $from$0 = $add$ptr126;$op$0 = $sub113;$out$1 = $out$0;
       while(1) {
        $incdec$ptr132 = ((($from$0)) + 1|0);
        $25 = load1($incdec$ptr132);
        $incdec$ptr133 = ((($out$1)) + 1|0);
        store1($incdec$ptr133,$25);
        $dec = (($op$0) + -1)|0;
        $tobool134 = ($dec|0)==(0);
        if ($tobool134) {
         break;
        } else {
         $from$0 = $incdec$ptr132;$op$0 = $dec;$out$1 = $incdec$ptr133;
        }
       }
       $scevgep362 = (($out$0) + ($sub$ptr$rhs$cast)|0);
       $scevgep363 = (($scevgep362) + ($24)|0);
       $idx$neg135 = (0 - ($add107))|0;
       $add$ptr136 = (($scevgep363) + ($idx$neg135)|0);
       $from$4$ph = $add$ptr136;$len$1$ph = $sub130;$out$5$ph = $scevgep363;
      } else {
       $from$4$ph = $add$ptr126;$len$1$ph = $len$0;$out$5$ph = $out$0;
      }
     } else {
      $cmp139 = ($7>>>0)<($sub113>>>0);
      if (!($cmp139)) {
       $sub174 = (($7) - ($sub113))|0;
       $add$ptr175 = (($add$ptr121) + ($sub174)|0);
       $cmp176 = ($len$0>>>0)>($sub113>>>0);
       if (!($cmp176)) {
        $from$4$ph = $add$ptr175;$len$1$ph = $len$0;$out$5$ph = $out$0;
        break;
       }
       $sub179 = (($len$0) - ($sub113))|0;
       $29 = (($add107) - ($sub$ptr$lhs$cast))|0;
       $from$3 = $add$ptr175;$op$3 = $sub113;$out$4 = $out$0;
       while(1) {
        $incdec$ptr181 = ((($from$3)) + 1|0);
        $30 = load1($incdec$ptr181);
        $incdec$ptr182 = ((($out$4)) + 1|0);
        store1($incdec$ptr182,$30);
        $dec184 = (($op$3) + -1)|0;
        $tobool185 = ($dec184|0)==(0);
        if ($tobool185) {
         break;
        } else {
         $from$3 = $incdec$ptr181;$op$3 = $dec184;$out$4 = $incdec$ptr182;
        }
       }
       $scevgep = (($out$0) + ($sub$ptr$rhs$cast)|0);
       $scevgep353 = (($scevgep) + ($29)|0);
       $idx$neg187 = (0 - ($add107))|0;
       $add$ptr188 = (($scevgep353) + ($idx$neg187)|0);
       $from$4$ph = $add$ptr188;$len$1$ph = $sub179;$out$5$ph = $scevgep353;
       break;
      }
      $sub143 = (($add142) - ($sub113))|0;
      $add$ptr144 = (($add$ptr121) + ($sub143)|0);
      $sub145 = (($sub113) - ($7))|0;
      $cmp146 = ($len$0>>>0)>($sub145>>>0);
      if ($cmp146) {
       $sub149 = (($len$0) - ($sub145))|0;
       $26 = (($add107) - ($sub$ptr$lhs$cast))|0;
       $from$1 = $add$ptr144;$op$1 = $sub145;$out$2 = $out$0;
       while(1) {
        $incdec$ptr151 = ((($from$1)) + 1|0);
        $27 = load1($incdec$ptr151);
        $incdec$ptr152 = ((($out$2)) + 1|0);
        store1($incdec$ptr152,$27);
        $dec154 = (($op$1) + -1)|0;
        $tobool155 = ($dec154|0)==(0);
        if ($tobool155) {
         break;
        } else {
         $from$1 = $incdec$ptr151;$op$1 = $dec154;$out$2 = $incdec$ptr152;
        }
       }
       $scevgep355 = (($out$0) + ($15)|0);
       $scevgep356 = (($scevgep355) + ($26)|0);
       $cmp158 = ($sub149>>>0)>($7>>>0);
       if ($cmp158) {
        $scevgep358 = (($out$0) + ($sub$ptr$rhs$cast)|0);
        $from$2 = $add$ptr121;$op$2 = $7;$out$3 = $scevgep356;
        while(1) {
         $incdec$ptr163 = ((($from$2)) + 1|0);
         $28 = load1($incdec$ptr163);
         $incdec$ptr164 = ((($out$3)) + 1|0);
         store1($incdec$ptr164,$28);
         $dec166 = (($op$2) + -1)|0;
         $tobool167 = ($dec166|0)==(0);
         if ($tobool167) {
          break;
         } else {
          $from$2 = $incdec$ptr163;$op$2 = $dec166;$out$3 = $incdec$ptr164;
         }
        }
        $sub161 = (($sub149) - ($7))|0;
        $scevgep359 = (($scevgep358) + ($26)|0);
        $idx$neg169 = (0 - ($add107))|0;
        $add$ptr170 = (($scevgep359) + ($idx$neg169)|0);
        $from$4$ph = $add$ptr170;$len$1$ph = $sub161;$out$5$ph = $scevgep359;
       } else {
        $from$4$ph = $add$ptr121;$len$1$ph = $sub149;$out$5$ph = $scevgep356;
       }
      } else {
       $from$4$ph = $add$ptr144;$len$1$ph = $len$0;$out$5$ph = $out$0;
      }
     }
    } while(0);
    $cmp192319 = ($len$1$ph>>>0)>(2);
    if ($cmp192319) {
     $from$4322 = $from$4$ph;$len$1321 = $len$1$ph;$out$5320 = $out$5$ph;
     while(1) {
      $incdec$ptr194 = ((($from$4322)) + 1|0);
      $31 = load1($incdec$ptr194);
      $incdec$ptr195 = ((($out$5320)) + 1|0);
      store1($incdec$ptr195,$31);
      $incdec$ptr196 = ((($from$4322)) + 2|0);
      $32 = load1($incdec$ptr196);
      $incdec$ptr197 = ((($out$5320)) + 2|0);
      store1($incdec$ptr197,$32);
      $incdec$ptr198 = ((($from$4322)) + 3|0);
      $33 = load1($incdec$ptr198);
      $incdec$ptr199 = ((($out$5320)) + 3|0);
      store1($incdec$ptr199,$33);
      $sub200 = (($len$1321) + -3)|0;
      $cmp192 = ($sub200>>>0)>(2);
      if ($cmp192) {
       $from$4322 = $incdec$ptr198;$len$1321 = $sub200;$out$5320 = $incdec$ptr199;
      } else {
       $from$4$lcssa = $incdec$ptr198;$len$1$lcssa = $sub200;$out$5$lcssa = $incdec$ptr199;
       break;
      }
     }
    } else {
     $from$4$lcssa = $from$4$ph;$len$1$lcssa = $len$1$ph;$out$5$lcssa = $out$5$ph;
    }
    $tobool201 = ($len$1$lcssa|0)==(0);
    if ($tobool201) {
     $bits$8 = $sub109;$hold$8 = $shr108;$in$6 = $in$5;$out$7 = $out$5$lcssa;
    } else {
     $incdec$ptr203 = ((($from$4$lcssa)) + 1|0);
     $34 = load1($incdec$ptr203);
     $incdec$ptr204 = ((($out$5$lcssa)) + 1|0);
     store1($incdec$ptr204,$34);
     $cmp205 = ($len$1$lcssa|0)==(1);
     if ($cmp205) {
      $bits$8 = $sub109;$hold$8 = $shr108;$in$6 = $in$5;$out$7 = $incdec$ptr204;
     } else {
      $incdec$ptr208 = ((($from$4$lcssa)) + 2|0);
      $35 = load1($incdec$ptr208);
      $incdec$ptr209 = ((($out$5$lcssa)) + 2|0);
      store1($incdec$ptr209,$35);
      $bits$8 = $sub109;$hold$8 = $shr108;$in$6 = $in$5;$out$7 = $incdec$ptr209;
     }
    }
   }
  } while(0);
  if ((label|0) == 7) {
   label = 0;
   $incdec$ptr34 = ((($out$0)) + 1|0);
   store1($incdec$ptr34,$here$sroa$10$0$lcssa$off0);
   $bits$8 = $sub27$lcssa;$hold$8 = $shr$lcssa;$in$6 = $in$1;$out$7 = $incdec$ptr34;
  }
  $cmp278 = ($in$6>>>0)<($add$ptr2>>>0);
  $cmp280 = ($out$7>>>0)<($add$ptr8>>>0);
  $or$cond = $cmp280 & $cmp278;
  if ($or$cond) {
   $bits$0 = $bits$8;$hold$0 = $hold$8;$in$0 = $in$6;$out$0 = $out$7;
  } else {
   $bits$9 = $bits$8;$hold$9 = $hold$8;$in$7 = $in$6;$out$8 = $out$7;
   break;
  }
 }
 do {
  if ((label|0) == 22) {
   $msg = ((($strm)) + 24|0);
   store4($msg,15245);
   store4($0,29);
   $bits$9 = $sub109;$hold$9 = $shr108;$in$7 = $in$5;$out$8 = $out$0;
  }
  else if ((label|0) == 52) {
   $msg252 = ((($strm)) + 24|0);
   store4($msg252,15275);
   store4($0,29);
   $bits$9 = $sub77313;$hold$9 = $shr76312;$in$7 = $in$4;$out$8 = $out$0;
  }
  else if ((label|0) == 55) {
   $and268 = $conv29296 & 32;
   $tobool269 = ($and268|0)==(0);
   if ($tobool269) {
    $msg273 = ((($strm)) + 24|0);
    store4($msg273,15297);
    store4($0,29);
    $bits$9 = $sub27295;$hold$9 = $shr294;$in$7 = $in$1;$out$8 = $out$0;
    break;
   } else {
    store4($0,11);
    $bits$9 = $sub27295;$hold$9 = $shr294;$in$7 = $in$1;$out$8 = $out$0;
    break;
   }
  }
 } while(0);
 $shr283 = $bits$9 >>> 3;
 $idx$neg284 = (0 - ($shr283))|0;
 $add$ptr285 = (($in$7) + ($idx$neg284)|0);
 $shl286 = $shr283 << 3;
 $sub287 = (($bits$9) - ($shl286))|0;
 $shl288 = 1 << $sub287;
 $sub289 = (($shl288) + -1)|0;
 $and290 = $sub289 & $hold$9;
 $add$ptr291 = ((($add$ptr285)) + 1|0);
 store4($strm,$add$ptr291);
 $add$ptr293 = ((($out$8)) + 1|0);
 store4($next_out,$add$ptr293);
 $sub$ptr$lhs$cast297 = $add$ptr2;
 $sub$ptr$rhs$cast298 = $add$ptr285;
 $sub$ptr$sub299 = (($sub$ptr$lhs$cast297) + 5)|0;
 $cond = (($sub$ptr$sub299) - ($sub$ptr$rhs$cast298))|0;
 store4($avail_in,$cond);
 $sub$ptr$lhs$cast309 = $add$ptr8;
 $sub$ptr$rhs$cast310 = $out$8;
 $sub$ptr$sub311 = (($sub$ptr$lhs$cast309) + 257)|0;
 $cond319 = (($sub$ptr$sub311) - ($sub$ptr$rhs$cast310))|0;
 store4($avail_out,$cond319);
 store4($hold13,$and290);
 store4($bits14,$sub287);
 return;
}
function ___stdio_close($f) {
 $f = $f|0;
 var $0 = 0, $call = 0, $call1 = 0, $fd = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $vararg_buffer = sp;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 store4($vararg_buffer,$0);
 $call = (___syscall6(6,($vararg_buffer|0))|0);
 $call1 = (___syscall_ret($call)|0);
 STACKTOP = sp;return ($call1|0);
}
function ___stdio_seek($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $$pre = 0, $0 = 0, $1 = 0, $call = 0, $call1 = 0, $cmp = 0, $fd = 0, $ret = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0;
 $vararg_buffer = sp;
 $ret = sp + 20|0;
 $fd = ((($f)) + 60|0);
 $0 = load4($fd);
 store4($vararg_buffer,$0);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,0);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,$off);
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 store4($vararg_ptr3,$ret);
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 store4($vararg_ptr4,$whence);
 $call = (___syscall140(140,($vararg_buffer|0))|0);
 $call1 = (___syscall_ret($call)|0);
 $cmp = ($call1|0)<(0);
 if ($cmp) {
  store4($ret,-1);
  $1 = -1;
 } else {
  $$pre = load4($ret);
  $1 = $$pre;
 }
 STACKTOP = sp;return ($1|0);
}
function ___syscall_ret($r) {
 $r = $r|0;
 var $call = 0, $cmp = 0, $retval$0 = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($r>>>0)>(4294963200);
 if ($cmp) {
  $sub = (0 - ($r))|0;
  $call = (___errno_location()|0);
  store4($call,$sub);
  $retval$0 = -1;
 } else {
  $retval$0 = $r;
 }
 return ($retval$0|0);
}
function ___errno_location() {
 var $0 = 0, $call$i = 0, $errno_ptr = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = (0|0)==(0|0);
 if ($tobool) {
  $retval$0 = 17804;
 } else {
  $call$i = (_pthread_self()|0);
  $errno_ptr = ((($call$i)) + 64|0);
  $0 = load4($errno_ptr);
  $retval$0 = $0;
 }
 return ($retval$0|0);
}
function ___unlockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___stdout_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $and = 0, $call = 0, $call3 = 0, $fd = 0, $lbf = 0, $tio = 0, $tobool = 0, $tobool2 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0;
 $vararg_buffer = sp;
 $tio = sp + 12|0;
 $write = ((($f)) + 36|0);
 store4($write,4);
 $0 = load4($f);
 $and = $0 & 64;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $fd = ((($f)) + 60|0);
  $1 = load4($fd);
  store4($vararg_buffer,$1);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,21505);
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  store4($vararg_ptr2,$tio);
  $call = (___syscall54(54,($vararg_buffer|0))|0);
  $tobool2 = ($call|0)==(0);
  if (!($tobool2)) {
   $lbf = ((($f)) + 75|0);
   store1($lbf,-1);
  }
 }
 $call3 = (___stdio_write($f,$buf,$len)|0);
 STACKTOP = sp;return ($call3|0);
}
function ___stdio_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr41 = 0, $add$ptr46 = 0;
 var $buf31 = 0, $buf_size = 0, $call = 0, $call10 = 0, $call7 = 0, $call9 = 0, $cmp = 0, $cmp17 = 0, $cmp22 = 0, $cmp29 = 0, $cmp38 = 0, $cnt$0 = 0, $cnt$1 = 0, $dec = 0, $fd8 = 0, $incdec$ptr = 0, $iov$0 = 0, $iov$1 = 0, $iov_base2 = 0, $iov_len = 0;
 var $iov_len24 = 0, $iov_len28 = 0, $iov_len3 = 0, $iov_len50 = 0, $iov_len50$phi$trans$insert = 0, $iovcnt$0 = 0, $iovcnt$1 = 0, $iovs = 0, $or = 0, $rem$0 = 0, $retval$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub26 = 0, $sub36 = 0, $sub51 = 0, $tobool = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0;
 var $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, $wbase = 0, $wend = 0, $wend19 = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $iovs = sp + 32|0;
 $wbase = ((($f)) + 28|0);
 $0 = load4($wbase);
 store4($iovs,$0);
 $iov_len = ((($iovs)) + 4|0);
 $wpos = ((($f)) + 20|0);
 $1 = load4($wpos);
 $sub$ptr$sub = (($1) - ($0))|0;
 store4($iov_len,$sub$ptr$sub);
 $iov_base2 = ((($iovs)) + 8|0);
 store4($iov_base2,$buf);
 $iov_len3 = ((($iovs)) + 12|0);
 store4($iov_len3,$len);
 $add = (($sub$ptr$sub) + ($len))|0;
 $fd8 = ((($f)) + 60|0);
 $buf31 = ((($f)) + 44|0);
 $iov$0 = $iovs;$iovcnt$0 = 2;$rem$0 = $add;
 while(1) {
  $2 = load4(17760);
  $tobool = ($2|0)==(0|0);
  if ($tobool) {
   $4 = load4($fd8);
   store4($vararg_buffer3,$4);
   $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
   store4($vararg_ptr6,$iov$0);
   $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
   store4($vararg_ptr7,$iovcnt$0);
   $call9 = (___syscall146(146,($vararg_buffer3|0))|0);
   $call10 = (___syscall_ret($call9)|0);
   $cnt$0 = $call10;
  } else {
   _pthread_cleanup_push((1|0),($f|0));
   $3 = load4($fd8);
   store4($vararg_buffer,$3);
   $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
   store4($vararg_ptr1,$iov$0);
   $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
   store4($vararg_ptr2,$iovcnt$0);
   $call = (___syscall146(146,($vararg_buffer|0))|0);
   $call7 = (___syscall_ret($call)|0);
   _pthread_cleanup_pop(0);
   $cnt$0 = $call7;
  }
  $cmp = ($rem$0|0)==($cnt$0|0);
  if ($cmp) {
   label = 6;
   break;
  }
  $cmp17 = ($cnt$0|0)<(0);
  if ($cmp17) {
   label = 8;
   break;
  }
  $sub26 = (($rem$0) - ($cnt$0))|0;
  $iov_len28 = ((($iov$0)) + 4|0);
  $10 = load4($iov_len28);
  $cmp29 = ($cnt$0>>>0)>($10>>>0);
  if ($cmp29) {
   $11 = load4($buf31);
   store4($wbase,$11);
   store4($wpos,$11);
   $sub36 = (($cnt$0) - ($10))|0;
   $incdec$ptr = ((($iov$0)) + 8|0);
   $dec = (($iovcnt$0) + -1)|0;
   $iov_len50$phi$trans$insert = ((($iov$0)) + 12|0);
   $$pre = load4($iov_len50$phi$trans$insert);
   $14 = $$pre;$cnt$1 = $sub36;$iov$1 = $incdec$ptr;$iovcnt$1 = $dec;
  } else {
   $cmp38 = ($iovcnt$0|0)==(2);
   if ($cmp38) {
    $12 = load4($wbase);
    $add$ptr41 = (($12) + ($cnt$0)|0);
    store4($wbase,$add$ptr41);
    $14 = $10;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = 2;
   } else {
    $14 = $10;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = $iovcnt$0;
   }
  }
  $13 = load4($iov$1);
  $add$ptr46 = (($13) + ($cnt$1)|0);
  store4($iov$1,$add$ptr46);
  $iov_len50 = ((($iov$1)) + 4|0);
  $sub51 = (($14) - ($cnt$1))|0;
  store4($iov_len50,$sub51);
  $iov$0 = $iov$1;$iovcnt$0 = $iovcnt$1;$rem$0 = $sub26;
 }
 if ((label|0) == 6) {
  $5 = load4($buf31);
  $buf_size = ((($f)) + 48|0);
  $6 = load4($buf_size);
  $add$ptr = (($5) + ($6)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  $7 = $5;
  store4($wbase,$7);
  store4($wpos,$7);
  $retval$0 = $len;
 }
 else if ((label|0) == 8) {
  $wend19 = ((($f)) + 16|0);
  store4($wend19,0);
  store4($wbase,0);
  store4($wpos,0);
  $8 = load4($f);
  $or = $8 | 32;
  store4($f,$or);
  $cmp22 = ($iovcnt$0|0)==(2);
  if ($cmp22) {
   $retval$0 = 0;
  } else {
   $iov_len24 = ((($iov$0)) + 4|0);
   $9 = load4($iov_len24);
   $sub = (($len) - ($9))|0;
   $retval$0 = $sub;
  }
 }
 STACKTOP = sp;return ($retval$0|0);
}
function _cleanup($p) {
 $p = $p|0;
 var $0 = 0, $lockcount = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lockcount = ((($p)) + 68|0);
 $0 = load4($lockcount);
 $tobool = ($0|0)==(0);
 if ($tobool) {
  ___unlockfile($p);
 }
 return;
}
function _memchr($src,$c,$n) {
 $src = $src|0;
 $c = $c|0;
 $n = $n|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $and = 0, $and15 = 0, $and16 = 0, $and39 = 0, $cmp = 0, $cmp11 = 0, $cmp1132 = 0, $cmp28 = 0, $cmp8 = 0, $cond = 0, $conv1 = 0, $dec = 0;
 var $dec34 = 0, $incdec$ptr = 0, $incdec$ptr21 = 0, $incdec$ptr33 = 0, $lnot = 0, $mul = 0, $n$addr$0$lcssa = 0, $n$addr$0$lcssa52 = 0, $n$addr$043 = 0, $n$addr$1$lcssa = 0, $n$addr$133 = 0, $n$addr$227 = 0, $n$addr$3 = 0, $neg = 0, $or$cond = 0, $or$cond42 = 0, $s$0$lcssa = 0, $s$0$lcssa53 = 0, $s$044 = 0, $s$128 = 0;
 var $s$2 = 0, $sub = 0, $sub22 = 0, $tobool = 0, $tobool2 = 0, $tobool2$lcssa = 0, $tobool241 = 0, $tobool25 = 0, $tobool2526 = 0, $tobool36 = 0, $tobool40 = 0, $w$0$lcssa = 0, $w$034 = 0, $xor = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $conv1 = $c & 255;
 $0 = $src;
 $and39 = $0 & 3;
 $tobool40 = ($and39|0)!=(0);
 $tobool241 = ($n|0)!=(0);
 $or$cond42 = $tobool241 & $tobool40;
 L1: do {
  if ($or$cond42) {
   $1 = $c&255;
   $n$addr$043 = $n;$s$044 = $src;
   while(1) {
    $2 = load1($s$044);
    $cmp = ($2<<24>>24)==($1<<24>>24);
    if ($cmp) {
     $n$addr$0$lcssa52 = $n$addr$043;$s$0$lcssa53 = $s$044;
     label = 6;
     break L1;
    }
    $incdec$ptr = ((($s$044)) + 1|0);
    $dec = (($n$addr$043) + -1)|0;
    $3 = $incdec$ptr;
    $and = $3 & 3;
    $tobool = ($and|0)!=(0);
    $tobool2 = ($dec|0)!=(0);
    $or$cond = $tobool2 & $tobool;
    if ($or$cond) {
     $n$addr$043 = $dec;$s$044 = $incdec$ptr;
    } else {
     $n$addr$0$lcssa = $dec;$s$0$lcssa = $incdec$ptr;$tobool2$lcssa = $tobool2;
     label = 5;
     break;
    }
   }
  } else {
   $n$addr$0$lcssa = $n;$s$0$lcssa = $src;$tobool2$lcssa = $tobool241;
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  if ($tobool2$lcssa) {
   $n$addr$0$lcssa52 = $n$addr$0$lcssa;$s$0$lcssa53 = $s$0$lcssa;
   label = 6;
  } else {
   $n$addr$3 = 0;$s$2 = $s$0$lcssa;
  }
 }
 L8: do {
  if ((label|0) == 6) {
   $4 = load1($s$0$lcssa53);
   $5 = $c&255;
   $cmp8 = ($4<<24>>24)==($5<<24>>24);
   if ($cmp8) {
    $n$addr$3 = $n$addr$0$lcssa52;$s$2 = $s$0$lcssa53;
   } else {
    $mul = Math_imul($conv1, 16843009)|0;
    $cmp1132 = ($n$addr$0$lcssa52>>>0)>(3);
    L11: do {
     if ($cmp1132) {
      $n$addr$133 = $n$addr$0$lcssa52;$w$034 = $s$0$lcssa53;
      while(1) {
       $6 = load4($w$034);
       $xor = $6 ^ $mul;
       $sub = (($xor) + -16843009)|0;
       $neg = $xor & -2139062144;
       $and15 = $neg ^ -2139062144;
       $and16 = $and15 & $sub;
       $lnot = ($and16|0)==(0);
       if (!($lnot)) {
        break;
       }
       $incdec$ptr21 = ((($w$034)) + 4|0);
       $sub22 = (($n$addr$133) + -4)|0;
       $cmp11 = ($sub22>>>0)>(3);
       if ($cmp11) {
        $n$addr$133 = $sub22;$w$034 = $incdec$ptr21;
       } else {
        $n$addr$1$lcssa = $sub22;$w$0$lcssa = $incdec$ptr21;
        label = 11;
        break L11;
       }
      }
      $n$addr$227 = $n$addr$133;$s$128 = $w$034;
     } else {
      $n$addr$1$lcssa = $n$addr$0$lcssa52;$w$0$lcssa = $s$0$lcssa53;
      label = 11;
     }
    } while(0);
    if ((label|0) == 11) {
     $tobool2526 = ($n$addr$1$lcssa|0)==(0);
     if ($tobool2526) {
      $n$addr$3 = 0;$s$2 = $w$0$lcssa;
      break;
     } else {
      $n$addr$227 = $n$addr$1$lcssa;$s$128 = $w$0$lcssa;
     }
    }
    while(1) {
     $7 = load1($s$128);
     $cmp28 = ($7<<24>>24)==($5<<24>>24);
     if ($cmp28) {
      $n$addr$3 = $n$addr$227;$s$2 = $s$128;
      break L8;
     }
     $incdec$ptr33 = ((($s$128)) + 1|0);
     $dec34 = (($n$addr$227) + -1)|0;
     $tobool25 = ($dec34|0)==(0);
     if ($tobool25) {
      $n$addr$3 = 0;$s$2 = $incdec$ptr33;
      break;
     } else {
      $n$addr$227 = $dec34;$s$128 = $incdec$ptr33;
     }
    }
   }
  }
 } while(0);
 $tobool36 = ($n$addr$3|0)!=(0);
 $cond = $tobool36 ? $s$2 : 0;
 return ($cond|0);
}
function _vfprintf($f,$fmt,$ap) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $$call21 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $add$ptr = 0, $and = 0, $and11 = 0, $and36 = 0, $ap2 = 0, $buf = 0, $buf_size = 0, $call = 0, $call21 = 0, $call2130 = 0, $call6 = 0;
 var $cmp = 0, $cmp5 = 0, $cmp7 = 0, $cond = 0, $internal_buf = 0, $lock = 0, $mode = 0, $nl_arg = 0, $nl_type = 0, $or = 0, $ret$1 = 0, $ret$1$ = 0, $retval$0 = 0, $tobool = 0, $tobool22 = 0, $tobool26 = 0, $tobool37 = 0, $tobool41 = 0, $vacopy_currentptr = 0, $wbase = 0;
 var $wend = 0, $wpos = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0;
 $ap2 = sp + 120|0;
 $nl_type = sp + 80|0;
 $nl_arg = sp;
 $internal_buf = sp + 136|0;
 ; store8($nl_type,i64_const(0,0),4); store8($nl_type+8|0,i64_const(0,0),4); store8($nl_type+16|0,i64_const(0,0),4); store8($nl_type+24|0,i64_const(0,0),4); store8($nl_type+32|0,i64_const(0,0),4);
 $vacopy_currentptr = load4($ap);
 store4($ap2,$vacopy_currentptr);
 $call = (_printf_core(0,$fmt,$ap2,$nl_arg,$nl_type)|0);
 $cmp = ($call|0)<(0);
 if ($cmp) {
  $retval$0 = -1;
 } else {
  $lock = ((($f)) + 76|0);
  $0 = load4($lock);
  $cmp5 = ($0|0)>(-1);
  if ($cmp5) {
   $call6 = (___lockfile($f)|0);
   $cond = $call6;
  } else {
   $cond = 0;
  }
  $1 = load4($f);
  $and = $1 & 32;
  $mode = ((($f)) + 74|0);
  $2 = load1($mode);
  $cmp7 = ($2<<24>>24)<(1);
  if ($cmp7) {
   $and11 = $1 & -33;
   store4($f,$and11);
  }
  $buf_size = ((($f)) + 48|0);
  $3 = load4($buf_size);
  $tobool = ($3|0)==(0);
  if ($tobool) {
   $buf = ((($f)) + 44|0);
   $4 = load4($buf);
   store4($buf,$internal_buf);
   $wbase = ((($f)) + 28|0);
   store4($wbase,$internal_buf);
   $wpos = ((($f)) + 20|0);
   store4($wpos,$internal_buf);
   store4($buf_size,80);
   $add$ptr = ((($internal_buf)) + 80|0);
   $wend = ((($f)) + 16|0);
   store4($wend,$add$ptr);
   $call21 = (_printf_core($f,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $tobool22 = ($4|0)==(0|0);
   if ($tobool22) {
    $ret$1 = $call21;
   } else {
    $write = ((($f)) + 36|0);
    $5 = load4($write);
    (FUNCTION_TABLE_iiii[$5 & 7]($f,0,0)|0);
    $6 = load4($wpos);
    $tobool26 = ($6|0)==(0|0);
    $$call21 = $tobool26 ? -1 : $call21;
    store4($buf,$4);
    store4($buf_size,0);
    store4($wend,0);
    store4($wbase,0);
    store4($wpos,0);
    $ret$1 = $$call21;
   }
  } else {
   $call2130 = (_printf_core($f,$fmt,$ap2,$nl_arg,$nl_type)|0);
   $ret$1 = $call2130;
  }
  $7 = load4($f);
  $and36 = $7 & 32;
  $tobool37 = ($and36|0)==(0);
  $ret$1$ = $tobool37 ? $ret$1 : -1;
  $or = $7 | $and;
  store4($f,$or);
  $tobool41 = ($cond|0)==(0);
  if (!($tobool41)) {
   ___unlockfile($f);
  }
  $retval$0 = $ret$1$;
 }
 STACKTOP = sp;return ($retval$0|0);
}
function _printf_core($f,$fmt,$ap,$nl_arg,$nl_type) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 $nl_arg = $nl_arg|0;
 $nl_type = $nl_type|0;
 var $$ = 0, $$$i = 0, $$272 = 0, $$396$i = 0.0, $$404$i = 0.0, $$add$ptr258 = 0, $$l10n$0 = 0, $$p$i = 0, $$p$inc468$i = 0, $$pr = 0, $$pr$i = 0, $$pr477$i = 0, $$pre = 0, $$pre$i = 0, $$pre334 = 0, $$pre335 = 0, $$pre336 = 0, $$pre337 = i64(), $$pre338 = i64(), $$pre558$i = 0;
 var $$pre560$i = 0, $$pre562$i = 0, $$sub514$i = 0, $$sub562$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0;
 var $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $13 = 0, $14 = 0, $15 = i64();
 var $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = i64(), $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = i64(), $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = i64(), $48 = 0, $49 = i64(), $5 = 0, $50 = i64(), $51 = i64();
 var $52 = i64(), $53 = i64(), $54 = 0, $55 = i64(), $56 = 0, $57 = 0, $58 = i64(), $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0.0, $63 = i64(), $64 = i64(), $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0;
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0;
 var $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $a$0 = 0, $a$1 = 0, $a$1$lcssa$i = 0, $a$1549$i = 0, $a$2 = 0, $a$2$ph$i = 0, $a$3$lcssa$i = 0, $a$3539$i = 0;
 var $a$5$lcssa$i = 0, $a$5521$i = 0, $a$6$i = 0, $a$8$i = 0, $a$9$ph$i = 0, $add = 0, $add$i = 0, $add$i203 = 0, $add$i223 = i64(), $add$i240 = 0, $add$ptr = 0, $add$ptr139 = 0, $add$ptr206 = 0, $add$ptr213$i = 0, $add$ptr258 = 0, $add$ptr311$i = 0, $add$ptr311$z$4$i = 0, $add$ptr341 = 0, $add$ptr354$i = 0, $add$ptr358$i = 0;
 var $add$ptr360 = 0, $add$ptr373$i = 0, $add$ptr43 = 0, $add$ptr43$arrayidx31 = 0, $add$ptr442$i = 0, $add$ptr442$z$3$i = 0, $add$ptr474 = 0, $add$ptr65$i = 0, $add$ptr671$i = 0, $add$ptr742$i = 0, $add$ptr88 = 0, $add113$i = 0, $add150$i = 0, $add154$i = 0, $add163$i = 0, $add165$i = 0, $add240$i = i64(), $add270 = 0, $add273$i = 0, $add275$i = 0;
 var $add284$i = 0, $add313$i = 0, $add323 = 0, $add355$i = 0, $add396 = 0, $add410$i = 0.0, $add413 = 0, $add414$i = 0, $add442 = 0, $add477$neg$i = 0, $add561$i = 0, $add608$i = 0, $add612$i = 0, $add620$i = 0, $add653$i = 0, $add67$i = 0, $add737$i = 0, $add810$i = 0, $add87$i = 0.0, $add90$i = 0.0;
 var $and = 0, $and$i = 0, $and$i$i = 0, $and$i216 = 0, $and$i222 = i64(), $and$i231 = 0, $and$i239 = 0, $and$i245 = 0, $and$i406$i = 0, $and$i412$i = 0, $and$i418$i = 0, $and$i424$i = 0, $and$i430$i = 0, $and$i436$i = 0, $and$i442$i = 0, $and$i448$i = 0, $and$i454$i = 0, $and$i460$i = 0, $and$i466$i = 0, $and$i472$i = 0;
 var $and12$i = 0, $and134$i = 0, $and211 = 0, $and215 = 0, $and217 = 0, $and220 = 0, $and250 = 0, $and255 = 0, $and264 = 0, $and27$i = i64(), $and282$i = 0, $and290 = 0, $and295 = 0, $and310 = 0, $and310$fl$4 = 0, $and36$i = 0, $and379$i = 0, $and483$i = 0, $and610$pre$phi$iZ2D = 0, $and62$i = 0;
 var $arg = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $argpos$0 = 0, $arraydecay208$add$ptr213$i = 0, $arrayidx$i = 0, $arrayidx$i236 = 0, $arrayidx114 = 0, $arrayidx117$i = 0, $arrayidx119 = 0, $arrayidx124 = 0, $arrayidx132 = 0, $arrayidx16 = 0, $arrayidx174 = 0, $arrayidx193 = 0, $arrayidx251$i = 0, $arrayidx31 = 0, $arrayidx35 = 0;
 var $arrayidx371 = 0, $arrayidx453$i = 0, $arrayidx470 = 0, $arrayidx482 = 0, $arrayidx489$i = 0, $arrayidx68 = 0, $arrayidx73 = 0, $arrayidx81 = 0, $big$i = 0, $buf = 0, $buf$i = 0, $call = 0, $call102$i = 0, $call305 = 0, $call345 = 0, $call346 = 0, $call357 = 0, $call385 = 0, $call412 = 0, $call55$i = 0.0;
 var $call631$i = 0, $call672$i = 0, $call719$i = 0, $call757$i = 0, $carry$0544$i = 0, $carry262$0535$i = 0, $cmp = 0, $cmp1 = 0, $cmp103$i = 0, $cmp105 = 0, $cmp111 = 0, $cmp116 = 0, $cmp126 = 0, $cmp127$i = 0, $cmp13 = 0, $cmp147$i = 0, $cmp166 = 0, $cmp177 = 0, $cmp18 = 0, $cmp182 = 0;
 var $cmp185 = 0, $cmp188$i = 0, $cmp196$i = 0, $cmp205$i = 0, $cmp212 = 0, $cmp225$i = 0, $cmp225547$i = 0, $cmp228$i = 0, $cmp235$i = 0, $cmp235543$i = 0, $cmp241 = 0, $cmp249$i = 0, $cmp259$i = 0, $cmp259537$i = 0, $cmp265$i = 0, $cmp271 = 0, $cmp277$i = 0, $cmp277533$i = 0, $cmp28$i = 0, $cmp283 = 0;
 var $cmp299$i = 0, $cmp307 = 0, $cmp308$i = 0, $cmp315$i = 0, $cmp324 = 0, $cmp324$i = 0, $cmp324529$i = 0, $cmp333$i = 0, $cmp338$i = 0, $cmp350$i = 0, $cmp363525$i = 0, $cmp37 = 0, $cmp374$i = 0, $cmp378 = 0, $cmp378308 = 0, $cmp38$i = 0, $cmp385$i = 0, $cmp386 = 0, $cmp390$i = 0, $cmp391 = 0;
 var $cmp398 = 0, $cmp403$i = 0, $cmp405 = 0, $cmp405318 = 0, $cmp411$i = 0, $cmp414 = 0, $cmp416$i = 0, $cmp416519$i = 0, $cmp420$i = 0, $cmp422 = 0, $cmp433$i = 0, $cmp433515$i = 0, $cmp435 = 0, $cmp443 = 0, $cmp443$i = 0, $cmp450$i = 0, $cmp450$lcssa$i = 0, $cmp467 = 0, $cmp470$i = 0, $cmp473$i = 0;
 var $cmp479 = 0, $cmp48$i = 0, $cmp495$i = 0, $cmp495511$i = 0, $cmp50 = 0, $cmp50302 = 0, $cmp505$i = 0, $cmp515$i = 0, $cmp528$i = 0, $cmp563$i = 0, $cmp577$i = 0, $cmp59$i = 0, $cmp614$i = 0, $cmp617$i = 0, $cmp623$i = 0, $cmp636$i = 0, $cmp636506$i = 0, $cmp65 = 0, $cmp660$i = 0, $cmp665$i = 0;
 var $cmp673$i = 0, $cmp678$i = 0, $cmp678491$i = 0, $cmp686$i = 0, $cmp707$i = 0, $cmp707486$i = 0, $cmp710$i = 0, $cmp710487$i = 0, $cmp722$i = 0, $cmp722483$i = 0, $cmp727$i = 0, $cmp745$i = 0, $cmp748$i = 0, $cmp748499$i = 0, $cmp75 = 0, $cmp760$i = 0, $cmp765$i = 0, $cmp770$i = 0, $cmp770495$i = 0, $cmp777$i = 0;
 var $cmp790$i = 0, $cmp818$i = 0, $cmp82$i = 0, $cmp94$i = 0, $cmp97 = 0, $cnt$0 = 0, $cnt$1 = 0, $cond$i = 0, $cond100$i = 0, $cond233$i = 0, $cond246 = 0, $cond271$i = 0, $cond304$i = 0, $cond355 = 0, $cond427 = 0, $cond43$i = 0, $cond53$i = 0, $cond629$i = 0, $cond732$i = 0, $cond800$i = 0;
 var $conv$i = 0, $conv$i205 = 0, $conv$i224 = 0, $conv1$i = 0, $conv101$i = i64(), $conv111$i = 0, $conv114$i = 0, $conv116$i = 0, $conv118393$i = 0, $conv120 = 0, $conv121$i = 0, $conv123$i = 0.0, $conv134 = 0, $conv138 = 0, $conv164 = 0, $conv175 = 0, $conv208 = 0, $conv216$i = 0, $conv218$i = 0.0, $conv227 = i64();
 var $conv230 = 0, $conv233 = 0, $conv238 = i64(), $conv238$i = i64(), $conv239$i = i64(), $conv241$i = 0, $conv242$i = 0, $conv32 = 0, $conv340 = 0, $conv369 = 0, $conv4$i = 0, $conv4$i197 = 0, $conv4$i211 = 0, $conv48 = 0, $conv48300 = 0, $conv58 = 0, $conv630$i = i64(), $conv644$i = 0, $conv646$i = 0, $conv669$i = i64();
 var $conv69 = 0, $conv716$i = i64(), $conv754$i = i64(), $conv83 = 0, $conv87 = 0, $d$0$i = 0, $d$0542$i = 0, $d$0545$i = 0, $d$1534$i = 0, $d$2$lcssa$i = 0, $d$2520$i = 0, $d$4$i = 0, $d$5494$i = 0, $d$6488$i = 0, $d$7500$i = 0, $dec$i = 0, $dec476$i = 0, $dec481$i = 0, $dec78$i = 0, $div$i = i64();
 var $div274$i = 0, $div356$i = 0, $div378$i = 0, $div384$i = 0, $e$0531$i = 0, $e$1$i = 0, $e$2517$i = 0, $e$4$i = 0, $e$5$ph$i = 0, $e2$i = 0, $ebuf0$i = 0, $estr$0$i = 0, $estr$1$lcssa$i = 0, $estr$1507$i = 0, $estr$2$i = 0, $exitcond$i = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded12 = 0;
 var $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded16 = 0, $expanded4 = 0, $expanded5 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $expanded9 = 0, $fl$0275 = 0, $fl$0304 = 0, $fl$1 = 0, $fl$1$and220 = 0, $fl$3 = 0, $fl$4 = 0, $fl$6 = 0, $i$0$lcssa = 0, $i$0$lcssa343 = 0, $i$0310 = 0;
 var $i$0530$i = 0, $i$07$i = 0, $i$07$i201 = 0, $i$1$lcssa$i = 0, $i$1319 = 0, $i$1526$i = 0, $i$2292 = 0, $i$2516$i = 0, $i$3289 = 0, $i$3512$i = 0, $i137 = 0, $i86 = 0, $idxprom$i = 0, $inc = 0, $inc$i = 0, $inc425$i = 0, $inc438$i = 0, $inc468$i = 0, $inc489 = 0, $inc500$i = 0;
 var $incdec$ptr = 0, $incdec$ptr$i = 0, $incdec$ptr$i204 = 0, $incdec$ptr$i212 = 0, $incdec$ptr$i225 = 0, $incdec$ptr106$i = 0, $incdec$ptr112$i = 0, $incdec$ptr115$i = 0, $incdec$ptr122$i = 0, $incdec$ptr137$i = 0, $incdec$ptr170 = 0, $incdec$ptr217$i = 0, $incdec$ptr23 = 0, $incdec$ptr246$i = 0, $incdec$ptr288$i = 0, $incdec$ptr292$a$3$i = 0, $incdec$ptr292$a$3567$i = 0, $incdec$ptr292$a$3569$i = 0, $incdec$ptr292$i = 0, $incdec$ptr292566$i = 0;
 var $incdec$ptr296$i = 0, $incdec$ptr384 = 0, $incdec$ptr411 = 0, $incdec$ptr419$i = 0, $incdec$ptr423$i = 0, $incdec$ptr62 = 0, $incdec$ptr639$i = 0, $incdec$ptr645$i = 0, $incdec$ptr647$i = 0, $incdec$ptr681$i = 0, $incdec$ptr689$i = 0, $incdec$ptr698$i = 0, $incdec$ptr725$i = 0, $incdec$ptr734$i = 0, $incdec$ptr773$i = 0, $incdec$ptr776$i = 0, $incdec$ptr808$i = 0, $isdigit = 0, $isdigit$i = 0, $isdigit$i207 = 0;
 var $isdigit188 = 0, $isdigit190 = 0, $isdigit6$i = 0, $isdigit6$i199 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp$i = 0, $isdigittmp$i206 = 0, $isdigittmp187 = 0, $isdigittmp189 = 0, $isdigittmp5$i = 0, $isdigittmp5$i198 = 0, $isdigittmp8$i = 0, $isdigittmp8$i200 = 0, $j$0$i = 0, $j$0524$i = 0, $j$0527$i = 0, $j$1513$i = 0, $j$2$i = 0, $l$0 = 0;
 var $l$0$i = 0, $l$1$i = 0, $l$1309 = 0, $l$2 = 0, $l10n$0 = 0, $l10n$0$phi = 0, $l10n$1 = 0, $l10n$2 = 0, $l10n$3 = 0, $land$ext$neg$i = 0, $lnot$ext = 0, $lnot$i = 0, $lnot455$i = 0, $lnot484 = 0, $lor$ext$i = 0, $mb = 0, $mul$i = 0, $mul$i202 = 0, $mul$i241 = 0.0, $mul125$i = 0.0;
 var $mul202$i = 0.0, $mul220$i = 0.0, $mul286$i = 0, $mul322$i = 0, $mul328$i = 0, $mul335$i = 0, $mul349$i = 0, $mul367$i = 0, $mul406$i = 0.0, $mul407$i = 0.0, $mul431$i = 0, $mul437$i = 0, $mul499$i = 0, $mul513$i = 0, $mul80$i = 0.0, $notlhs$i = 0, $notrhs$i = 0, $or = 0, $or$cond = 0, $or$cond$i = 0;
 var $or$cond1$not$i = 0, $or$cond192 = 0, $or$cond193 = 0, $or$cond195 = 0, $or$cond2$i = 0, $or$cond321 = 0, $or$cond395$i = 0, $or$cond397$i = 0, $or$cond401$i = 0, $or$i = 0, $or$i242 = 0, $or100 = 0, $or100$fl$0 = 0, $or120$i = 0, $or247 = 0, $or504$i = 0, $or613$i = 0, $p$0 = 0, $p$0$add270 = 0, $p$1 = 0;
 var $p$2 = 0, $p$2$add323 = 0, $p$3 = 0, $p$4340 = 0, $p$5 = 0, $p$addr$2$$sub514398$i = 0, $p$addr$2$$sub562399$i = 0, $p$addr$2$i = 0, $p$addr$3$i = 0, $p$addr$4$lcssa$i = 0, $p$addr$4489$i = 0, $p$addr$5$lcssa$i = 0, $p$addr$5501$i = 0, $pl$0 = 0, $pl$0$i = 0, $pl$1 = 0, $pl$1$i = 0, $pl$2 = 0, $prefix$0 = 0, $prefix$0$add$ptr65$i = 0;
 var $prefix$0$i = 0, $prefix$1 = 0, $prefix$2 = 0, $r$0$a$9$i = 0, $re$1482$i = 0, $rem$i = i64(), $rem360$i = 0, $rem370$i = 0, $rem494$i = 0, $rem494510$i = 0, $retval$0 = 0, $retval$0$i = 0, $round$0481$i = 0.0, $round377$1$i = 0.0, $s$0 = 0, $s$0$i = 0, $s$1 = 0, $s$1$i = 0, $s$2$lcssa = 0, $s$2294 = 0;
 var $s$4 = 0, $s$6 = 0, $s$7 = 0, $s$addr$0$lcssa$i = 0, $s$addr$0$lcssa$i229 = 0, $s$addr$06$i = 0, $s$addr$06$i221 = 0, $s35$0$i = 0, $s668$0492$i = 0, $s668$1$i = 0, $s715$0$lcssa$i = 0, $s715$0484$i = 0, $s753$0$i = 0, $s753$1496$i = 0, $s753$2$i = 0, $scevgep556$i = 0, $scevgep556557$i = 0, $sh_prom$i = i64(), $shl = 0, $shl$i = i64();
 var $shl280$i = 0, $shl60 = 0, $shr = 0, $shr$i = i64(), $shr$i226 = i64(), $shr283$i = 0, $shr285$i = 0, $small$0$i = 0.0, $small$1$i = 0.0, $st$0 = 0, $storemerge = 0, $storemerge186278 = 0, $storemerge186303 = 0, $storemerge191 = 0, $sub = 0, $sub$i = 0.0, $sub$ptr$div$i = 0, $sub$ptr$div321$i = 0, $sub$ptr$div347$i = 0, $sub$ptr$div430$i = 0;
 var $sub$ptr$div511$i = 0, $sub$ptr$lhs$cast = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast160$i = 0, $sub$ptr$lhs$cast305$i = 0, $sub$ptr$lhs$cast318 = 0, $sub$ptr$lhs$cast318$i = 0, $sub$ptr$lhs$cast344$i = 0, $sub$ptr$lhs$cast362 = 0, $sub$ptr$lhs$cast432 = 0, $sub$ptr$lhs$cast508$i = 0, $sub$ptr$lhs$cast694$i = 0, $sub$ptr$rhs$cast = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast152$i = 0, $sub$ptr$rhs$cast268 = 0, $sub$ptr$rhs$cast306$i = 0, $sub$ptr$rhs$cast319 = 0, $sub$ptr$rhs$cast319$i = 0, $sub$ptr$rhs$cast363 = 0;
 var $sub$ptr$rhs$cast428$i = 0, $sub$ptr$rhs$cast433 = 0, $sub$ptr$rhs$cast634$i = 0, $sub$ptr$rhs$cast634504$i = 0, $sub$ptr$rhs$cast649$i = 0, $sub$ptr$rhs$cast695$i = 0, $sub$ptr$rhs$cast788$i = 0, $sub$ptr$rhs$cast812$i = 0, $sub$ptr$sub = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub145$i = 0, $sub$ptr$sub153$i = 0, $sub$ptr$sub159$i = 0, $sub$ptr$sub162$i = 0, $sub$ptr$sub172$i = 0, $sub$ptr$sub175$i = 0, $sub$ptr$sub269 = 0, $sub$ptr$sub307$i = 0, $sub$ptr$sub320 = 0, $sub$ptr$sub320$i = 0;
 var $sub$ptr$sub346$i = 0, $sub$ptr$sub364 = 0, $sub$ptr$sub429$i = 0, $sub$ptr$sub434 = 0, $sub$ptr$sub434$p$5 = 0, $sub$ptr$sub510$i = 0, $sub$ptr$sub635$i = 0, $sub$ptr$sub635505$i = 0, $sub$ptr$sub650$i = 0, $sub$ptr$sub650$pn$i = 0, $sub$ptr$sub696$i = 0, $sub$ptr$sub789$i = 0, $sub$ptr$sub813$i = 0, $sub101 = 0, $sub101$w$0 = 0, $sub124$i = 0.0, $sub135 = 0, $sub146$i = 0, $sub165 = 0, $sub176 = 0;
 var $sub181$i = 0, $sub203$i = 0, $sub219$i = 0.0, $sub256$i = 0, $sub264$i = 0, $sub281$i = 0, $sub287 = i64(), $sub336$i = 0, $sub343$i = 0, $sub357$i = 0, $sub390 = 0, $sub409$i = 0, $sub478$i = 0, $sub480$i = 0, $sub49 = 0, $sub49301 = 0, $sub49305 = 0, $sub514$i = 0, $sub562$i = 0, $sub59 = 0;
 var $sub626$le$i = 0, $sub735$i = 0, $sub74$i = 0, $sub806$i = 0, $sub84 = 0, $sub85$i = 0.0, $sub86$i = 0.0, $sub88$i = 0.0, $sub91$i = 0.0, $sub97$i = 0, $sum = 0, $t$0 = 0, $t$1 = 0, $t$addr$0$i = 0, $t$addr$1$i = 0, $tobool = 0, $tobool$i = 0, $tobool$i$i = 0, $tobool$i213 = 0, $tobool$i217 = 0;
 var $tobool$i227 = 0, $tobool$i232 = 0, $tobool$i246 = 0, $tobool$i407$i = 0, $tobool$i413$i = 0, $tobool$i419$i = 0, $tobool$i425$i = 0, $tobool$i431$i = 0, $tobool$i437$i = 0, $tobool$i443$i = 0, $tobool$i449$i = 0, $tobool$i455$i = 0, $tobool$i461$i = 0, $tobool$i467$i = 0, $tobool$i473$i = 0, $tobool13$i = 0, $tobool135$i = 0, $tobool139$i = 0, $tobool140$i = 0, $tobool141 = 0;
 var $tobool179 = 0, $tobool209 = 0, $tobool218 = 0, $tobool222$i = 0, $tobool244$i = 0, $tobool25 = 0, $tobool253 = 0, $tobool256 = 0, $tobool265 = 0, $tobool28 = 0, $tobool290$i = 0, $tobool290565$i = 0, $tobool291 = 0, $tobool294$i = 0, $tobool296 = 0, $tobool313 = 0, $tobool315 = 0, $tobool341$i = 0, $tobool350 = 0, $tobool358 = 0;
 var $tobool37$i = 0, $tobool371$i = 0, $tobool380$i = 0, $tobool381 = 0, $tobool4$i = 0, $tobool400$i = 0, $tobool408 = 0, $tobool460 = 0, $tobool463 = 0, $tobool471 = 0, $tobool484$i = 0, $tobool490$i = 0, $tobool5$i = 0, $tobool5$i237 = 0, $tobool55 = 0, $tobool56$i = 0, $tobool63$i = 0, $tobool76$i = 0, $tobool76563$i = 0, $tobool781$i = 0;
 var $tobool79$i = 0, $tobool9$i = 0, $tobool90 = 0, $trunc = 0, $w$0 = 0, $w$1 = 0, $w$2 = 0, $w$add165$i = 0, $w$add653$i = 0, $wc = 0, $ws$0311 = 0, $ws$1320 = 0, $x$addr$0$tr$i = 0, $x$addr$05$i = i64(), $x$addr$07$i = i64(), $xor = 0, $xor$i = 0, $xor167$i = 0, $xor186$i = 0, $xor450 = 0;
 var $xor458 = 0, $xor655$i = 0, $xor816$i = 0, $y$addr$0$i = 0.0, $y$addr$1$i = 0.0, $y$addr$2$i = 0.0, $y$addr$3$i = 0.0, $y$addr$4$i = 0.0, $z$0$i = 0, $z$0$lcssa = 0, $z$0295 = 0, $z$1 = 0, $z$1$lcssa$i = 0, $z$1548$i = 0, $z$2 = 0, $z$2$i = 0, $z$3$lcssa$i = 0, $z$3538$i = 0, $z$4$i = 0, $z$7$add$ptr742$i = 0;
 var $z$7$i = 0, $z$7$ph$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 624|0;
 $big$i = sp + 24|0;
 $e2$i = sp + 16|0;
 $buf$i = sp + 588|0;
 $ebuf0$i = sp + 576|0;
 $arg = sp;
 $buf = sp + 536|0;
 $wc = sp + 8|0;
 $mb = sp + 528|0;
 $tobool25 = ($f|0)!=(0|0);
 $add$ptr206 = ((($buf)) + 40|0);
 $sub$ptr$lhs$cast318 = $add$ptr206;
 $add$ptr341 = ((($buf)) + 39|0);
 $arrayidx371 = ((($wc)) + 4|0);
 $sub$ptr$rhs$cast$i = $buf$i;
 $0 = (0 - ($sub$ptr$rhs$cast$i))|0;
 $arrayidx$i236 = ((($ebuf0$i)) + 12|0);
 $incdec$ptr106$i = ((($ebuf0$i)) + 11|0);
 $sub$ptr$lhs$cast160$i = $arrayidx$i236;
 $sub$ptr$sub159$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast$i))|0;
 $sub$ptr$sub145$i = (-2 - ($sub$ptr$rhs$cast$i))|0;
 $sub$ptr$sub153$i = (($sub$ptr$lhs$cast160$i) + 2)|0;
 $add$ptr213$i = ((($big$i)) + 288|0);
 $add$ptr671$i = ((($buf$i)) + 9|0);
 $sub$ptr$lhs$cast694$i = $add$ptr671$i;
 $incdec$ptr689$i = ((($buf$i)) + 8|0);
 $cnt$0 = 0;$l$0 = 0;$l10n$0 = 0;$s$0 = $fmt;
 L1: while(1) {
  $cmp = ($cnt$0|0)>(-1);
  do {
   if ($cmp) {
    $sub = (2147483647 - ($cnt$0))|0;
    $cmp1 = ($l$0|0)>($sub|0);
    if ($cmp1) {
     $call = (___errno_location()|0);
     store4($call,75);
     $cnt$1 = -1;
     break;
    } else {
     $add = (($l$0) + ($cnt$0))|0;
     $cnt$1 = $add;
     break;
    }
   } else {
    $cnt$1 = $cnt$0;
   }
  } while(0);
  $1 = load1($s$0);
  $tobool = ($1<<24>>24)==(0);
  if ($tobool) {
   label = 243;
   break;
  } else {
   $2 = $1;$s$1 = $s$0;
  }
  L9: while(1) {
   switch ($2<<24>>24) {
   case 37:  {
    $s$2294 = $s$1;$z$0295 = $s$1;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $s$2$lcssa = $s$1;$z$0$lcssa = $s$1;
    break L9;
    break;
   }
   default: {
   }
   }
   $incdec$ptr = ((($s$1)) + 1|0);
   $$pre = load1($incdec$ptr);
   $2 = $$pre;$s$1 = $incdec$ptr;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $arrayidx16 = ((($s$2294)) + 1|0);
     $3 = load1($arrayidx16);
     $cmp18 = ($3<<24>>24)==(37);
     if (!($cmp18)) {
      $s$2$lcssa = $s$2294;$z$0$lcssa = $z$0295;
      break L12;
     }
     $incdec$ptr23 = ((($z$0295)) + 1|0);
     $add$ptr = ((($s$2294)) + 2|0);
     $4 = load1($add$ptr);
     $cmp13 = ($4<<24>>24)==(37);
     if ($cmp13) {
      $s$2294 = $add$ptr;$z$0295 = $incdec$ptr23;
      label = 9;
     } else {
      $s$2$lcssa = $add$ptr;$z$0$lcssa = $incdec$ptr23;
      break;
     }
    }
   }
  } while(0);
  $sub$ptr$lhs$cast = $z$0$lcssa;
  $sub$ptr$rhs$cast = $s$0;
  $sub$ptr$sub = (($sub$ptr$lhs$cast) - ($sub$ptr$rhs$cast))|0;
  if ($tobool25) {
   $5 = load4($f);
   $and$i = $5 & 32;
   $tobool$i = ($and$i|0)==(0);
   if ($tobool$i) {
    (___fwritex($s$0,$sub$ptr$sub,$f)|0);
   }
  }
  $tobool28 = ($sub$ptr$sub|0)==(0);
  if (!($tobool28)) {
   $l10n$0$phi = $l10n$0;$cnt$0 = $cnt$1;$l$0 = $sub$ptr$sub;$s$0 = $s$2$lcssa;$l10n$0 = $l10n$0$phi;
   continue;
  }
  $arrayidx31 = ((($s$2$lcssa)) + 1|0);
  $6 = load1($arrayidx31);
  $conv32 = $6 << 24 >> 24;
  $isdigittmp = (($conv32) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $arrayidx35 = ((($s$2$lcssa)) + 2|0);
   $7 = load1($arrayidx35);
   $cmp37 = ($7<<24>>24)==(36);
   $add$ptr43 = ((($s$2$lcssa)) + 3|0);
   $add$ptr43$arrayidx31 = $cmp37 ? $add$ptr43 : $arrayidx31;
   $$l10n$0 = $cmp37 ? 1 : $l10n$0;
   $isdigittmp$ = $cmp37 ? $isdigittmp : -1;
   $$pre334 = load1($add$ptr43$arrayidx31);
   $8 = $$pre334;$argpos$0 = $isdigittmp$;$l10n$1 = $$l10n$0;$storemerge = $add$ptr43$arrayidx31;
  } else {
   $8 = $6;$argpos$0 = -1;$l10n$1 = $l10n$0;$storemerge = $arrayidx31;
  }
  $conv48300 = $8 << 24 >> 24;
  $sub49301 = (($conv48300) + -32)|0;
  $cmp50302 = ($sub49301>>>0)<(32);
  L25: do {
   if ($cmp50302) {
    $9 = $8;$fl$0304 = 0;$storemerge186303 = $storemerge;$sub49305 = $sub49301;
    while(1) {
     $shl = 1 << $sub49305;
     $and = $shl & 75913;
     $tobool55 = ($and|0)==(0);
     if ($tobool55) {
      $11 = $9;$fl$0275 = $fl$0304;$storemerge186278 = $storemerge186303;
      break L25;
     }
     $conv58 = $9 << 24 >> 24;
     $sub59 = (($conv58) + -32)|0;
     $shl60 = 1 << $sub59;
     $or = $shl60 | $fl$0304;
     $incdec$ptr62 = ((($storemerge186303)) + 1|0);
     $10 = load1($incdec$ptr62);
     $conv48 = $10 << 24 >> 24;
     $sub49 = (($conv48) + -32)|0;
     $cmp50 = ($sub49>>>0)<(32);
     if ($cmp50) {
      $9 = $10;$fl$0304 = $or;$storemerge186303 = $incdec$ptr62;$sub49305 = $sub49;
     } else {
      $11 = $10;$fl$0275 = $or;$storemerge186278 = $incdec$ptr62;
      break;
     }
    }
   } else {
    $11 = $8;$fl$0275 = 0;$storemerge186278 = $storemerge;
   }
  } while(0);
  $cmp65 = ($11<<24>>24)==(42);
  do {
   if ($cmp65) {
    $arrayidx68 = ((($storemerge186278)) + 1|0);
    $12 = load1($arrayidx68);
    $conv69 = $12 << 24 >> 24;
    $isdigittmp189 = (($conv69) + -48)|0;
    $isdigit190 = ($isdigittmp189>>>0)<(10);
    if ($isdigit190) {
     $arrayidx73 = ((($storemerge186278)) + 2|0);
     $13 = load1($arrayidx73);
     $cmp75 = ($13<<24>>24)==(36);
     if ($cmp75) {
      $arrayidx81 = (($nl_type) + ($isdigittmp189<<2)|0);
      store4($arrayidx81,10);
      $14 = load1($arrayidx68);
      $conv83 = $14 << 24 >> 24;
      $sub84 = (($conv83) + -48)|0;
      $i86 = (($nl_arg) + ($sub84<<3)|0);
      $15 = load8($i86);
      $conv87 = i64_trunc($15);
      $add$ptr88 = ((($storemerge186278)) + 3|0);
      $l10n$2 = 1;$storemerge191 = $add$ptr88;$w$0 = $conv87;
     } else {
      label = 24;
     }
    } else {
     label = 24;
    }
    if ((label|0) == 24) {
     label = 0;
     $tobool90 = ($l10n$1|0)==(0);
     if (!($tobool90)) {
      $retval$0 = -1;
      break L1;
     }
     if (!($tobool25)) {
      $$pr = $12;$fl$1 = $fl$0275;$l10n$3 = 0;$s$4 = $arrayidx68;$w$1 = 0;
      break;
     }
     $arglist_current = load4($ap);
     $16 = $arglist_current;
     $expanded5 = ((0) + 4|0);
     $expanded4 = $expanded5;
     $expanded = (($expanded4) - 1)|0;
     $17 = (($16) + ($expanded))|0;
     $expanded9 = ((0) + 4|0);
     $expanded8 = $expanded9;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $18 = $17 & $expanded6;
     $19 = $18;
     $20 = load4($19);
     $arglist_next = ((($19)) + 4|0);
     store4($ap,$arglist_next);
     $l10n$2 = 0;$storemerge191 = $arrayidx68;$w$0 = $20;
    }
    $cmp97 = ($w$0|0)<(0);
    $or100 = $fl$0275 | 8192;
    $sub101 = (0 - ($w$0))|0;
    $or100$fl$0 = $cmp97 ? $or100 : $fl$0275;
    $sub101$w$0 = $cmp97 ? $sub101 : $w$0;
    $$pre335 = load1($storemerge191);
    $$pr = $$pre335;$fl$1 = $or100$fl$0;$l10n$3 = $l10n$2;$s$4 = $storemerge191;$w$1 = $sub101$w$0;
   } else {
    $conv4$i = $11 << 24 >> 24;
    $isdigittmp5$i = (($conv4$i) + -48)|0;
    $isdigit6$i = ($isdigittmp5$i>>>0)<(10);
    if ($isdigit6$i) {
     $21 = $storemerge186278;$i$07$i = 0;$isdigittmp8$i = $isdigittmp5$i;
     while(1) {
      $mul$i = ($i$07$i*10)|0;
      $add$i = (($mul$i) + ($isdigittmp8$i))|0;
      $incdec$ptr$i = ((($21)) + 1|0);
      $22 = load1($incdec$ptr$i);
      $conv$i = $22 << 24 >> 24;
      $isdigittmp$i = (($conv$i) + -48)|0;
      $isdigit$i = ($isdigittmp$i>>>0)<(10);
      if ($isdigit$i) {
       $21 = $incdec$ptr$i;$i$07$i = $add$i;$isdigittmp8$i = $isdigittmp$i;
      } else {
       break;
      }
     }
     $cmp105 = ($add$i|0)<(0);
     if ($cmp105) {
      $retval$0 = -1;
      break L1;
     } else {
      $$pr = $22;$fl$1 = $fl$0275;$l10n$3 = $l10n$1;$s$4 = $incdec$ptr$i;$w$1 = $add$i;
     }
    } else {
     $$pr = $11;$fl$1 = $fl$0275;$l10n$3 = $l10n$1;$s$4 = $storemerge186278;$w$1 = 0;
    }
   }
  } while(0);
  $cmp111 = ($$pr<<24>>24)==(46);
  L45: do {
   if ($cmp111) {
    $arrayidx114 = ((($s$4)) + 1|0);
    $23 = load1($arrayidx114);
    $cmp116 = ($23<<24>>24)==(42);
    if (!($cmp116)) {
     $conv4$i197 = $23 << 24 >> 24;
     $isdigittmp5$i198 = (($conv4$i197) + -48)|0;
     $isdigit6$i199 = ($isdigittmp5$i198>>>0)<(10);
     if ($isdigit6$i199) {
      $33 = $arrayidx114;$i$07$i201 = 0;$isdigittmp8$i200 = $isdigittmp5$i198;
     } else {
      $p$0 = 0;$s$6 = $arrayidx114;
      break;
     }
     while(1) {
      $mul$i202 = ($i$07$i201*10)|0;
      $add$i203 = (($mul$i202) + ($isdigittmp8$i200))|0;
      $incdec$ptr$i204 = ((($33)) + 1|0);
      $34 = load1($incdec$ptr$i204);
      $conv$i205 = $34 << 24 >> 24;
      $isdigittmp$i206 = (($conv$i205) + -48)|0;
      $isdigit$i207 = ($isdigittmp$i206>>>0)<(10);
      if ($isdigit$i207) {
       $33 = $incdec$ptr$i204;$i$07$i201 = $add$i203;$isdigittmp8$i200 = $isdigittmp$i206;
      } else {
       $p$0 = $add$i203;$s$6 = $incdec$ptr$i204;
       break L45;
      }
     }
    }
    $arrayidx119 = ((($s$4)) + 2|0);
    $24 = load1($arrayidx119);
    $conv120 = $24 << 24 >> 24;
    $isdigittmp187 = (($conv120) + -48)|0;
    $isdigit188 = ($isdigittmp187>>>0)<(10);
    if ($isdigit188) {
     $arrayidx124 = ((($s$4)) + 3|0);
     $25 = load1($arrayidx124);
     $cmp126 = ($25<<24>>24)==(36);
     if ($cmp126) {
      $arrayidx132 = (($nl_type) + ($isdigittmp187<<2)|0);
      store4($arrayidx132,10);
      $26 = load1($arrayidx119);
      $conv134 = $26 << 24 >> 24;
      $sub135 = (($conv134) + -48)|0;
      $i137 = (($nl_arg) + ($sub135<<3)|0);
      $27 = load8($i137);
      $conv138 = i64_trunc($27);
      $add$ptr139 = ((($s$4)) + 4|0);
      $p$0 = $conv138;$s$6 = $add$ptr139;
      break;
     }
    }
    $tobool141 = ($l10n$3|0)==(0);
    if (!($tobool141)) {
     $retval$0 = -1;
     break L1;
    }
    if ($tobool25) {
     $arglist_current2 = load4($ap);
     $28 = $arglist_current2;
     $expanded12 = ((0) + 4|0);
     $expanded11 = $expanded12;
     $expanded10 = (($expanded11) - 1)|0;
     $29 = (($28) + ($expanded10))|0;
     $expanded16 = ((0) + 4|0);
     $expanded15 = $expanded16;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $30 = $29 & $expanded13;
     $31 = $30;
     $32 = load4($31);
     $arglist_next3 = ((($31)) + 4|0);
     store4($ap,$arglist_next3);
     $p$0 = $32;$s$6 = $arrayidx119;
    } else {
     $p$0 = 0;$s$6 = $arrayidx119;
    }
   } else {
    $p$0 = -1;$s$6 = $s$4;
   }
  } while(0);
  $s$7 = $s$6;$st$0 = 0;
  while(1) {
   $35 = load1($s$7);
   $conv164 = $35 << 24 >> 24;
   $sub165 = (($conv164) + -65)|0;
   $cmp166 = ($sub165>>>0)>(57);
   if ($cmp166) {
    $retval$0 = -1;
    break L1;
   }
   $incdec$ptr170 = ((($s$7)) + 1|0);
   $arrayidx174 = ((15325 + (($st$0*58)|0)|0) + ($sub165)|0);
   $36 = load1($arrayidx174);
   $conv175 = $36&255;
   $sub176 = (($conv175) + -1)|0;
   $cmp177 = ($sub176>>>0)<(8);
   if ($cmp177) {
    $s$7 = $incdec$ptr170;$st$0 = $conv175;
   } else {
    break;
   }
  }
  $tobool179 = ($36<<24>>24)==(0);
  if ($tobool179) {
   $retval$0 = -1;
   break;
  }
  $cmp182 = ($36<<24>>24)==(19);
  $cmp185 = ($argpos$0|0)>(-1);
  do {
   if ($cmp182) {
    if ($cmp185) {
     $retval$0 = -1;
     break L1;
    } else {
     label = 51;
    }
   } else {
    if ($cmp185) {
     $arrayidx193 = (($nl_type) + ($argpos$0<<2)|0);
     store4($arrayidx193,$conv175);
     $37 = (($nl_arg) + ($argpos$0<<3)|0);
     $38 = load8($37);
     store8($arg,$38);
     label = 51;
     break;
    }
    if (!($tobool25)) {
     $retval$0 = 0;
     break L1;
    }
    _pop_arg_374($arg,$conv175,$ap);
   }
  } while(0);
  if ((label|0) == 51) {
   label = 0;
   if (!($tobool25)) {
    $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
    continue;
   }
  }
  $39 = load1($s$7);
  $conv208 = $39 << 24 >> 24;
  $tobool209 = ($st$0|0)!=(0);
  $and211 = $conv208 & 15;
  $cmp212 = ($and211|0)==(3);
  $or$cond192 = $tobool209 & $cmp212;
  $and215 = $conv208 & -33;
  $t$0 = $or$cond192 ? $and215 : $conv208;
  $and217 = $fl$1 & 8192;
  $tobool218 = ($and217|0)==(0);
  $and220 = $fl$1 & -65537;
  $fl$1$and220 = $tobool218 ? $fl$1 : $and220;
  L74: do {
   switch ($t$0|0) {
   case 110:  {
    $trunc = $st$0&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $40 = load4($arg);
     store4($40,$cnt$1);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 1:  {
     $41 = load4($arg);
     store4($41,$cnt$1);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 2:  {
     $conv227 = i64_sext($cnt$1);
     $42 = load4($arg);
     store8($42,$conv227);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 3:  {
     $conv230 = $cnt$1&65535;
     $43 = load4($arg);
     store2($43,$conv230);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 4:  {
     $conv233 = $cnt$1&255;
     $44 = load4($arg);
     store1($44,$conv233);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 6:  {
     $45 = load4($arg);
     store4($45,$cnt$1);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    case 7:  {
     $conv238 = i64_sext($cnt$1);
     $46 = load4($arg);
     store8($46,$conv238);
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
     break;
    }
    default: {
     $cnt$0 = $cnt$1;$l$0 = 0;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $cmp241 = ($p$0>>>0)>(8);
    $cond246 = $cmp241 ? $p$0 : 8;
    $or247 = $fl$1$and220 | 8;
    $fl$3 = $or247;$p$1 = $cond246;$t$1 = 120;
    label = 63;
    break;
   }
   case 88: case 120:  {
    $fl$3 = $fl$1$and220;$p$1 = $p$0;$t$1 = $t$0;
    label = 63;
    break;
   }
   case 111:  {
    $50 = load8($arg);
    $tobool4$i = i64_eq($50,i64_const(0,0));
    if ($tobool4$i) {
     $s$addr$0$lcssa$i229 = $add$ptr206;
    } else {
     $s$addr$06$i221 = $add$ptr206;$x$addr$05$i = $50;
     while(1) {
      $and$i222 = i64_and($x$addr$05$i,i64_const(7,0));
      $add$i223 = i64_or($and$i222,i64_const(48,0));
      $conv$i224 = i64_trunc($add$i223)&255;
      $incdec$ptr$i225 = ((($s$addr$06$i221)) + -1|0);
      store1($incdec$ptr$i225,$conv$i224);
      $shr$i226 = i64_lshr($x$addr$05$i,i64_const(3,0));
      $tobool$i227 = i64_eq($shr$i226,i64_const(0,0));
      if ($tobool$i227) {
       $s$addr$0$lcssa$i229 = $incdec$ptr$i225;
       break;
      } else {
       $s$addr$06$i221 = $incdec$ptr$i225;$x$addr$05$i = $shr$i226;
      }
     }
    }
    $and264 = $fl$1$and220 & 8;
    $tobool265 = ($and264|0)==(0);
    if ($tobool265) {
     $a$0 = $s$addr$0$lcssa$i229;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = 0;$prefix$1 = 15805;
     label = 76;
    } else {
     $sub$ptr$rhs$cast268 = $s$addr$0$lcssa$i229;
     $sub$ptr$sub269 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast268))|0;
     $cmp271 = ($p$0|0)>($sub$ptr$sub269|0);
     $add270 = (($sub$ptr$sub269) + 1)|0;
     $p$0$add270 = $cmp271 ? $p$0 : $add270;
     $a$0 = $s$addr$0$lcssa$i229;$fl$4 = $fl$1$and220;$p$2 = $p$0$add270;$pl$1 = 0;$prefix$1 = 15805;
     label = 76;
    }
    break;
   }
   case 105: case 100:  {
    $51 = load8($arg);
    $cmp283 = i64_slt($51,i64_const(0,0));
    if ($cmp283) {
     $sub287 = i64_sub(i64_const(0,0),$51);
     store8($arg,$sub287);
     $52 = $sub287;$pl$0 = 1;$prefix$0 = 15805;
     label = 75;
     break L74;
    }
    $and290 = $fl$1$and220 & 2048;
    $tobool291 = ($and290|0)==(0);
    if ($tobool291) {
     $and295 = $fl$1$and220 & 1;
     $tobool296 = ($and295|0)==(0);
     $$ = $tobool296 ? 15805 : (15807);
     $52 = $51;$pl$0 = $and295;$prefix$0 = $$;
     label = 75;
    } else {
     $52 = $51;$pl$0 = 1;$prefix$0 = (15806);
     label = 75;
    }
    break;
   }
   case 117:  {
    $$pre337 = load8($arg);
    $52 = $$pre337;$pl$0 = 0;$prefix$0 = 15805;
    label = 75;
    break;
   }
   case 99:  {
    $55 = load8($arg);
    $conv340 = i64_trunc($55)&255;
    store1($add$ptr341,$conv340);
    $a$2 = $add$ptr341;$fl$6 = $and220;$p$5 = 1;$pl$2 = 0;$prefix$2 = 15805;$z$2 = $add$ptr206;
    break;
   }
   case 109:  {
    $call345 = (___errno_location()|0);
    $56 = load4($call345);
    $call346 = (_strerror($56)|0);
    $a$1 = $call346;
    label = 81;
    break;
   }
   case 115:  {
    $57 = load4($arg);
    $tobool350 = ($57|0)!=(0|0);
    $cond355 = $tobool350 ? $57 : 15815;
    $a$1 = $cond355;
    label = 81;
    break;
   }
   case 67:  {
    $58 = load8($arg);
    $conv369 = i64_trunc($58);
    store4($wc,$conv369);
    store4($arrayidx371,0);
    store4($arg,$wc);
    $127 = $wc;$p$4340 = -1;
    label = 85;
    break;
   }
   case 83:  {
    $$pre336 = load4($arg);
    $cmp378308 = ($p$0|0)==(0);
    if ($cmp378308) {
     _pad($f,32,$w$1,0,$fl$1$and220);
     $i$0$lcssa343 = 0;
     label = 96;
    } else {
     $127 = $$pre336;$p$4340 = $p$0;
     label = 85;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $62 = loadd($arg);
    store4($e2$i,0);
    $63 = i64_bc2i($62);
    $tobool5$i237 = i64_slt($63,i64_const(0,0));
    if ($tobool5$i237) {
     $sub$i = -$62;
     $pl$0$i = 1;$prefix$0$i = 15822;$y$addr$0$i = $sub$i;
    } else {
     $and$i239 = $fl$1$and220 & 2048;
     $tobool9$i = ($and$i239|0)==(0);
     $and12$i = $fl$1$and220 & 1;
     if ($tobool9$i) {
      $tobool13$i = ($and12$i|0)==(0);
      $$$i = $tobool13$i ? (15823) : (15828);
      $pl$0$i = $and12$i;$prefix$0$i = $$$i;$y$addr$0$i = $62;
     } else {
      $pl$0$i = 1;$prefix$0$i = (15825);$y$addr$0$i = $62;
     }
    }
    $64 = i64_bc2i($y$addr$0$i);
    $and27$i = i64_and($64,i64_const(0,2146435072));
    $cmp28$i = i64_ult($and27$i,i64_const(0,2146435072));
    do {
     if ($cmp28$i) {
      $call55$i = (+_frexpl($y$addr$0$i,$e2$i));
      $mul$i241 = $call55$i * 2.0;
      $tobool56$i = $mul$i241 != 0.0;
      if ($tobool56$i) {
       $67 = load4($e2$i);
       $dec$i = (($67) + -1)|0;
       store4($e2$i,$dec$i);
      }
      $or$i242 = $t$0 | 32;
      $cmp59$i = ($or$i242|0)==(97);
      if ($cmp59$i) {
       $and62$i = $t$0 & 32;
       $tobool63$i = ($and62$i|0)==(0);
       $add$ptr65$i = ((($prefix$0$i)) + 9|0);
       $prefix$0$add$ptr65$i = $tobool63$i ? $prefix$0$i : $add$ptr65$i;
       $add67$i = $pl$0$i | 2;
       $68 = ($p$0>>>0)>(11);
       $sub74$i = (12 - ($p$0))|0;
       $tobool76563$i = ($sub74$i|0)==(0);
       $tobool76$i = $68 | $tobool76563$i;
       do {
        if ($tobool76$i) {
         $y$addr$1$i = $mul$i241;
        } else {
         $re$1482$i = $sub74$i;$round$0481$i = 8.0;
         while(1) {
          $dec78$i = (($re$1482$i) + -1)|0;
          $mul80$i = $round$0481$i * 16.0;
          $tobool79$i = ($dec78$i|0)==(0);
          if ($tobool79$i) {
           break;
          } else {
           $re$1482$i = $dec78$i;$round$0481$i = $mul80$i;
          }
         }
         $69 = load1($prefix$0$add$ptr65$i);
         $cmp82$i = ($69<<24>>24)==(45);
         if ($cmp82$i) {
          $sub85$i = -$mul$i241;
          $sub86$i = $sub85$i - $mul80$i;
          $add87$i = $mul80$i + $sub86$i;
          $sub88$i = -$add87$i;
          $y$addr$1$i = $sub88$i;
          break;
         } else {
          $add90$i = $mul$i241 + $mul80$i;
          $sub91$i = $add90$i - $mul80$i;
          $y$addr$1$i = $sub91$i;
          break;
         }
        }
       } while(0);
       $70 = load4($e2$i);
       $cmp94$i = ($70|0)<(0);
       $sub97$i = (0 - ($70))|0;
       $cond100$i = $cmp94$i ? $sub97$i : $70;
       $conv101$i = i64_sext($cond100$i);
       $call102$i = (_fmt_u($conv101$i,$arrayidx$i236)|0);
       $cmp103$i = ($call102$i|0)==($arrayidx$i236|0);
       if ($cmp103$i) {
        store1($incdec$ptr106$i,48);
        $estr$0$i = $incdec$ptr106$i;
       } else {
        $estr$0$i = $call102$i;
       }
       $71 = $70 >> 31;
       $72 = $71 & 2;
       $73 = (($72) + 43)|0;
       $conv111$i = $73&255;
       $incdec$ptr112$i = ((($estr$0$i)) + -1|0);
       store1($incdec$ptr112$i,$conv111$i);
       $add113$i = (($t$0) + 15)|0;
       $conv114$i = $add113$i&255;
       $incdec$ptr115$i = ((($estr$0$i)) + -2|0);
       store1($incdec$ptr115$i,$conv114$i);
       $notrhs$i = ($p$0|0)<(1);
       $and134$i = $fl$1$and220 & 8;
       $tobool135$i = ($and134$i|0)==(0);
       $s$0$i = $buf$i;$y$addr$2$i = $y$addr$1$i;
       while(1) {
        $conv116$i = (~~(($y$addr$2$i)));
        $arrayidx117$i = (15789 + ($conv116$i)|0);
        $74 = load1($arrayidx117$i);
        $conv118393$i = $74&255;
        $or120$i = $conv118393$i | $and62$i;
        $conv121$i = $or120$i&255;
        $incdec$ptr122$i = ((($s$0$i)) + 1|0);
        store1($s$0$i,$conv121$i);
        $conv123$i = (+($conv116$i|0));
        $sub124$i = $y$addr$2$i - $conv123$i;
        $mul125$i = $sub124$i * 16.0;
        $sub$ptr$lhs$cast$i = $incdec$ptr122$i;
        $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
        $cmp127$i = ($sub$ptr$sub$i|0)==(1);
        do {
         if ($cmp127$i) {
          $notlhs$i = $mul125$i == 0.0;
          $or$cond1$not$i = $notrhs$i & $notlhs$i;
          $or$cond$i = $tobool135$i & $or$cond1$not$i;
          if ($or$cond$i) {
           $s$1$i = $incdec$ptr122$i;
           break;
          }
          $incdec$ptr137$i = ((($s$0$i)) + 2|0);
          store1($incdec$ptr122$i,46);
          $s$1$i = $incdec$ptr137$i;
         } else {
          $s$1$i = $incdec$ptr122$i;
         }
        } while(0);
        $tobool139$i = $mul125$i != 0.0;
        if ($tobool139$i) {
         $s$0$i = $s$1$i;$y$addr$2$i = $mul125$i;
        } else {
         break;
        }
       }
       $tobool140$i = ($p$0|0)!=(0);
       $$pre560$i = $s$1$i;
       $sub146$i = (($sub$ptr$sub145$i) + ($$pre560$i))|0;
       $cmp147$i = ($sub146$i|0)<($p$0|0);
       $or$cond321 = $tobool140$i & $cmp147$i;
       $sub$ptr$rhs$cast152$i = $incdec$ptr115$i;
       $add150$i = (($sub$ptr$sub153$i) + ($p$0))|0;
       $add154$i = (($add150$i) - ($sub$ptr$rhs$cast152$i))|0;
       $sub$ptr$sub162$i = (($sub$ptr$sub159$i) - ($sub$ptr$rhs$cast152$i))|0;
       $add163$i = (($sub$ptr$sub162$i) + ($$pre560$i))|0;
       $l$0$i = $or$cond321 ? $add154$i : $add163$i;
       $add165$i = (($l$0$i) + ($add67$i))|0;
       _pad($f,32,$w$1,$add165$i,$fl$1$and220);
       $75 = load4($f);
       $and$i418$i = $75 & 32;
       $tobool$i419$i = ($and$i418$i|0)==(0);
       if ($tobool$i419$i) {
        (___fwritex($prefix$0$add$ptr65$i,$add67$i,$f)|0);
       }
       $xor167$i = $fl$1$and220 ^ 65536;
       _pad($f,48,$w$1,$add165$i,$xor167$i);
       $sub$ptr$sub172$i = (($$pre560$i) - ($sub$ptr$rhs$cast$i))|0;
       $76 = load4($f);
       $and$i424$i = $76 & 32;
       $tobool$i425$i = ($and$i424$i|0)==(0);
       if ($tobool$i425$i) {
        (___fwritex($buf$i,$sub$ptr$sub172$i,$f)|0);
       }
       $sub$ptr$sub175$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast152$i))|0;
       $sum = (($sub$ptr$sub172$i) + ($sub$ptr$sub175$i))|0;
       $sub181$i = (($l$0$i) - ($sum))|0;
       _pad($f,48,$sub181$i,0,0);
       $77 = load4($f);
       $and$i430$i = $77 & 32;
       $tobool$i431$i = ($and$i430$i|0)==(0);
       if ($tobool$i431$i) {
        (___fwritex($incdec$ptr115$i,$sub$ptr$sub175$i,$f)|0);
       }
       $xor186$i = $fl$1$and220 ^ 8192;
       _pad($f,32,$w$1,$add165$i,$xor186$i);
       $cmp188$i = ($add165$i|0)<($w$1|0);
       $w$add165$i = $cmp188$i ? $w$1 : $add165$i;
       $retval$0$i = $w$add165$i;
       break;
      }
      $cmp196$i = ($p$0|0)<(0);
      $$p$i = $cmp196$i ? 6 : $p$0;
      if ($tobool56$i) {
       $mul202$i = $mul$i241 * 268435456.0;
       $78 = load4($e2$i);
       $sub203$i = (($78) + -28)|0;
       store4($e2$i,$sub203$i);
       $$pr$i = $sub203$i;$y$addr$3$i = $mul202$i;
      } else {
       $$pre558$i = load4($e2$i);
       $$pr$i = $$pre558$i;$y$addr$3$i = $mul$i241;
      }
      $cmp205$i = ($$pr$i|0)<(0);
      $arraydecay208$add$ptr213$i = $cmp205$i ? $big$i : $add$ptr213$i;
      $y$addr$4$i = $y$addr$3$i;$z$0$i = $arraydecay208$add$ptr213$i;
      while(1) {
       $conv216$i = (~~(($y$addr$4$i))>>>0);
       store4($z$0$i,$conv216$i);
       $incdec$ptr217$i = ((($z$0$i)) + 4|0);
       $conv218$i = (+($conv216$i>>>0));
       $sub219$i = $y$addr$4$i - $conv218$i;
       $mul220$i = $sub219$i * 1.0E+9;
       $tobool222$i = $mul220$i != 0.0;
       if ($tobool222$i) {
        $y$addr$4$i = $mul220$i;$z$0$i = $incdec$ptr217$i;
       } else {
        break;
       }
      }
      $cmp225547$i = ($$pr$i|0)>(0);
      if ($cmp225547$i) {
       $79 = $$pr$i;$a$1549$i = $arraydecay208$add$ptr213$i;$z$1548$i = $incdec$ptr217$i;
       while(1) {
        $cmp228$i = ($79|0)>(29);
        $cond233$i = $cmp228$i ? 29 : $79;
        $d$0542$i = ((($z$1548$i)) + -4|0);
        $cmp235543$i = ($d$0542$i>>>0)<($a$1549$i>>>0);
        do {
         if ($cmp235543$i) {
          $a$2$ph$i = $a$1549$i;
         } else {
          $sh_prom$i = i64_zext($cond233$i>>>0);
          $carry$0544$i = 0;$d$0545$i = $d$0542$i;
          while(1) {
           $80 = load4($d$0545$i);
           $conv238$i = i64_zext($80>>>0);
           $shl$i = i64_shl($conv238$i,$sh_prom$i);
           $conv239$i = i64_zext($carry$0544$i>>>0);
           $add240$i = i64_add($shl$i,$conv239$i);
           $rem$i = i64_urem($add240$i,i64_const(1000000000,0));
           $conv241$i = i64_trunc($rem$i);
           store4($d$0545$i,$conv241$i);
           $div$i = i64_udiv($add240$i,i64_const(1000000000,0));
           $conv242$i = i64_trunc($div$i);
           $d$0$i = ((($d$0545$i)) + -4|0);
           $cmp235$i = ($d$0$i>>>0)<($a$1549$i>>>0);
           if ($cmp235$i) {
            break;
           } else {
            $carry$0544$i = $conv242$i;$d$0545$i = $d$0$i;
           }
          }
          $tobool244$i = ($conv242$i|0)==(0);
          if ($tobool244$i) {
           $a$2$ph$i = $a$1549$i;
           break;
          }
          $incdec$ptr246$i = ((($a$1549$i)) + -4|0);
          store4($incdec$ptr246$i,$conv242$i);
          $a$2$ph$i = $incdec$ptr246$i;
         }
        } while(0);
        $z$2$i = $z$1548$i;
        while(1) {
         $cmp249$i = ($z$2$i>>>0)>($a$2$ph$i>>>0);
         if (!($cmp249$i)) {
          break;
         }
         $arrayidx251$i = ((($z$2$i)) + -4|0);
         $81 = load4($arrayidx251$i);
         $lnot$i = ($81|0)==(0);
         if ($lnot$i) {
          $z$2$i = $arrayidx251$i;
         } else {
          break;
         }
        }
        $82 = load4($e2$i);
        $sub256$i = (($82) - ($cond233$i))|0;
        store4($e2$i,$sub256$i);
        $cmp225$i = ($sub256$i|0)>(0);
        if ($cmp225$i) {
         $79 = $sub256$i;$a$1549$i = $a$2$ph$i;$z$1548$i = $z$2$i;
        } else {
         $$pr477$i = $sub256$i;$a$1$lcssa$i = $a$2$ph$i;$z$1$lcssa$i = $z$2$i;
         break;
        }
       }
      } else {
       $$pr477$i = $$pr$i;$a$1$lcssa$i = $arraydecay208$add$ptr213$i;$z$1$lcssa$i = $incdec$ptr217$i;
      }
      $cmp259537$i = ($$pr477$i|0)<(0);
      if ($cmp259537$i) {
       $add273$i = (($$p$i) + 25)|0;
       $div274$i = (($add273$i|0) / 9)&-1;
       $add275$i = (($div274$i) + 1)|0;
       $cmp299$i = ($or$i242|0)==(102);
       $83 = $$pr477$i;$a$3539$i = $a$1$lcssa$i;$z$3538$i = $z$1$lcssa$i;
       while(1) {
        $sub264$i = (0 - ($83))|0;
        $cmp265$i = ($sub264$i|0)>(9);
        $cond271$i = $cmp265$i ? 9 : $sub264$i;
        $cmp277533$i = ($a$3539$i>>>0)<($z$3538$i>>>0);
        do {
         if ($cmp277533$i) {
          $shl280$i = 1 << $cond271$i;
          $sub281$i = (($shl280$i) + -1)|0;
          $shr285$i = 1000000000 >>> $cond271$i;
          $carry262$0535$i = 0;$d$1534$i = $a$3539$i;
          while(1) {
           $85 = load4($d$1534$i);
           $and282$i = $85 & $sub281$i;
           $shr283$i = $85 >>> $cond271$i;
           $add284$i = (($shr283$i) + ($carry262$0535$i))|0;
           store4($d$1534$i,$add284$i);
           $mul286$i = Math_imul($and282$i, $shr285$i)|0;
           $incdec$ptr288$i = ((($d$1534$i)) + 4|0);
           $cmp277$i = ($incdec$ptr288$i>>>0)<($z$3538$i>>>0);
           if ($cmp277$i) {
            $carry262$0535$i = $mul286$i;$d$1534$i = $incdec$ptr288$i;
           } else {
            break;
           }
          }
          $86 = load4($a$3539$i);
          $tobool290$i = ($86|0)==(0);
          $incdec$ptr292$i = ((($a$3539$i)) + 4|0);
          $incdec$ptr292$a$3$i = $tobool290$i ? $incdec$ptr292$i : $a$3539$i;
          $tobool294$i = ($mul286$i|0)==(0);
          if ($tobool294$i) {
           $incdec$ptr292$a$3569$i = $incdec$ptr292$a$3$i;$z$4$i = $z$3538$i;
           break;
          }
          $incdec$ptr296$i = ((($z$3538$i)) + 4|0);
          store4($z$3538$i,$mul286$i);
          $incdec$ptr292$a$3569$i = $incdec$ptr292$a$3$i;$z$4$i = $incdec$ptr296$i;
         } else {
          $84 = load4($a$3539$i);
          $tobool290565$i = ($84|0)==(0);
          $incdec$ptr292566$i = ((($a$3539$i)) + 4|0);
          $incdec$ptr292$a$3567$i = $tobool290565$i ? $incdec$ptr292566$i : $a$3539$i;
          $incdec$ptr292$a$3569$i = $incdec$ptr292$a$3567$i;$z$4$i = $z$3538$i;
         }
        } while(0);
        $cond304$i = $cmp299$i ? $arraydecay208$add$ptr213$i : $incdec$ptr292$a$3569$i;
        $sub$ptr$lhs$cast305$i = $z$4$i;
        $sub$ptr$rhs$cast306$i = $cond304$i;
        $sub$ptr$sub307$i = (($sub$ptr$lhs$cast305$i) - ($sub$ptr$rhs$cast306$i))|0;
        $sub$ptr$div$i = $sub$ptr$sub307$i >> 2;
        $cmp308$i = ($sub$ptr$div$i|0)>($add275$i|0);
        $add$ptr311$i = (($cond304$i) + ($add275$i<<2)|0);
        $add$ptr311$z$4$i = $cmp308$i ? $add$ptr311$i : $z$4$i;
        $87 = load4($e2$i);
        $add313$i = (($87) + ($cond271$i))|0;
        store4($e2$i,$add313$i);
        $cmp259$i = ($add313$i|0)<(0);
        if ($cmp259$i) {
         $83 = $add313$i;$a$3539$i = $incdec$ptr292$a$3569$i;$z$3538$i = $add$ptr311$z$4$i;
        } else {
         $a$3$lcssa$i = $incdec$ptr292$a$3569$i;$z$3$lcssa$i = $add$ptr311$z$4$i;
         break;
        }
       }
      } else {
       $a$3$lcssa$i = $a$1$lcssa$i;$z$3$lcssa$i = $z$1$lcssa$i;
      }
      $cmp315$i = ($a$3$lcssa$i>>>0)<($z$3$lcssa$i>>>0);
      $sub$ptr$lhs$cast318$i = $arraydecay208$add$ptr213$i;
      do {
       if ($cmp315$i) {
        $sub$ptr$rhs$cast319$i = $a$3$lcssa$i;
        $sub$ptr$sub320$i = (($sub$ptr$lhs$cast318$i) - ($sub$ptr$rhs$cast319$i))|0;
        $sub$ptr$div321$i = $sub$ptr$sub320$i >> 2;
        $mul322$i = ($sub$ptr$div321$i*9)|0;
        $88 = load4($a$3$lcssa$i);
        $cmp324529$i = ($88>>>0)<(10);
        if ($cmp324529$i) {
         $e$1$i = $mul322$i;
         break;
        } else {
         $e$0531$i = $mul322$i;$i$0530$i = 10;
        }
        while(1) {
         $mul328$i = ($i$0530$i*10)|0;
         $inc$i = (($e$0531$i) + 1)|0;
         $cmp324$i = ($88>>>0)<($mul328$i>>>0);
         if ($cmp324$i) {
          $e$1$i = $inc$i;
          break;
         } else {
          $e$0531$i = $inc$i;$i$0530$i = $mul328$i;
         }
        }
       } else {
        $e$1$i = 0;
       }
      } while(0);
      $cmp333$i = ($or$i242|0)!=(102);
      $mul335$i = $cmp333$i ? $e$1$i : 0;
      $sub336$i = (($$p$i) - ($mul335$i))|0;
      $cmp338$i = ($or$i242|0)==(103);
      $tobool341$i = ($$p$i|0)!=(0);
      $89 = $tobool341$i & $cmp338$i;
      $land$ext$neg$i = $89 << 31 >> 31;
      $sub343$i = (($sub336$i) + ($land$ext$neg$i))|0;
      $sub$ptr$lhs$cast344$i = $z$3$lcssa$i;
      $sub$ptr$sub346$i = (($sub$ptr$lhs$cast344$i) - ($sub$ptr$lhs$cast318$i))|0;
      $sub$ptr$div347$i = $sub$ptr$sub346$i >> 2;
      $90 = ($sub$ptr$div347$i*9)|0;
      $mul349$i = (($90) + -9)|0;
      $cmp350$i = ($sub343$i|0)<($mul349$i|0);
      if ($cmp350$i) {
       $add$ptr354$i = ((($arraydecay208$add$ptr213$i)) + 4|0);
       $add355$i = (($sub343$i) + 9216)|0;
       $div356$i = (($add355$i|0) / 9)&-1;
       $sub357$i = (($div356$i) + -1024)|0;
       $add$ptr358$i = (($add$ptr354$i) + ($sub357$i<<2)|0);
       $rem360$i = (($add355$i|0) % 9)&-1;
       $j$0524$i = (($rem360$i) + 1)|0;
       $cmp363525$i = ($j$0524$i|0)<(9);
       if ($cmp363525$i) {
        $i$1526$i = 10;$j$0527$i = $j$0524$i;
        while(1) {
         $mul367$i = ($i$1526$i*10)|0;
         $j$0$i = (($j$0527$i) + 1)|0;
         $exitcond$i = ($j$0$i|0)==(9);
         if ($exitcond$i) {
          $i$1$lcssa$i = $mul367$i;
          break;
         } else {
          $i$1526$i = $mul367$i;$j$0527$i = $j$0$i;
         }
        }
       } else {
        $i$1$lcssa$i = 10;
       }
       $91 = load4($add$ptr358$i);
       $rem370$i = (($91>>>0) % ($i$1$lcssa$i>>>0))&-1;
       $tobool371$i = ($rem370$i|0)==(0);
       $add$ptr373$i = ((($add$ptr358$i)) + 4|0);
       $cmp374$i = ($add$ptr373$i|0)==($z$3$lcssa$i|0);
       $or$cond395$i = $cmp374$i & $tobool371$i;
       do {
        if ($or$cond395$i) {
         $a$8$i = $a$3$lcssa$i;$d$4$i = $add$ptr358$i;$e$4$i = $e$1$i;
        } else {
         $div378$i = (($91>>>0) / ($i$1$lcssa$i>>>0))&-1;
         $and379$i = $div378$i & 1;
         $tobool380$i = ($and379$i|0)==(0);
         $$396$i = $tobool380$i ? 9007199254740992.0 : 9007199254740994.0;
         $div384$i = (($i$1$lcssa$i|0) / 2)&-1;
         $cmp385$i = ($rem370$i>>>0)<($div384$i>>>0);
         if ($cmp385$i) {
          $small$0$i = 0.5;
         } else {
          $cmp390$i = ($rem370$i|0)==($div384$i|0);
          $or$cond397$i = $cmp374$i & $cmp390$i;
          $$404$i = $or$cond397$i ? 1.0 : 1.5;
          $small$0$i = $$404$i;
         }
         $tobool400$i = ($pl$0$i|0)==(0);
         do {
          if ($tobool400$i) {
           $round377$1$i = $$396$i;$small$1$i = $small$0$i;
          } else {
           $92 = load1($prefix$0$i);
           $cmp403$i = ($92<<24>>24)==(45);
           if (!($cmp403$i)) {
            $round377$1$i = $$396$i;$small$1$i = $small$0$i;
            break;
           }
           $mul406$i = -$$396$i;
           $mul407$i = -$small$0$i;
           $round377$1$i = $mul406$i;$small$1$i = $mul407$i;
          }
         } while(0);
         $sub409$i = (($91) - ($rem370$i))|0;
         store4($add$ptr358$i,$sub409$i);
         $add410$i = $round377$1$i + $small$1$i;
         $cmp411$i = $add410$i != $round377$1$i;
         if (!($cmp411$i)) {
          $a$8$i = $a$3$lcssa$i;$d$4$i = $add$ptr358$i;$e$4$i = $e$1$i;
          break;
         }
         $add414$i = (($sub409$i) + ($i$1$lcssa$i))|0;
         store4($add$ptr358$i,$add414$i);
         $cmp416519$i = ($add414$i>>>0)>(999999999);
         if ($cmp416519$i) {
          $a$5521$i = $a$3$lcssa$i;$d$2520$i = $add$ptr358$i;
          while(1) {
           $incdec$ptr419$i = ((($d$2520$i)) + -4|0);
           store4($d$2520$i,0);
           $cmp420$i = ($incdec$ptr419$i>>>0)<($a$5521$i>>>0);
           if ($cmp420$i) {
            $incdec$ptr423$i = ((($a$5521$i)) + -4|0);
            store4($incdec$ptr423$i,0);
            $a$6$i = $incdec$ptr423$i;
           } else {
            $a$6$i = $a$5521$i;
           }
           $93 = load4($incdec$ptr419$i);
           $inc425$i = (($93) + 1)|0;
           store4($incdec$ptr419$i,$inc425$i);
           $cmp416$i = ($inc425$i>>>0)>(999999999);
           if ($cmp416$i) {
            $a$5521$i = $a$6$i;$d$2520$i = $incdec$ptr419$i;
           } else {
            $a$5$lcssa$i = $a$6$i;$d$2$lcssa$i = $incdec$ptr419$i;
            break;
           }
          }
         } else {
          $a$5$lcssa$i = $a$3$lcssa$i;$d$2$lcssa$i = $add$ptr358$i;
         }
         $sub$ptr$rhs$cast428$i = $a$5$lcssa$i;
         $sub$ptr$sub429$i = (($sub$ptr$lhs$cast318$i) - ($sub$ptr$rhs$cast428$i))|0;
         $sub$ptr$div430$i = $sub$ptr$sub429$i >> 2;
         $mul431$i = ($sub$ptr$div430$i*9)|0;
         $94 = load4($a$5$lcssa$i);
         $cmp433515$i = ($94>>>0)<(10);
         if ($cmp433515$i) {
          $a$8$i = $a$5$lcssa$i;$d$4$i = $d$2$lcssa$i;$e$4$i = $mul431$i;
          break;
         } else {
          $e$2517$i = $mul431$i;$i$2516$i = 10;
         }
         while(1) {
          $mul437$i = ($i$2516$i*10)|0;
          $inc438$i = (($e$2517$i) + 1)|0;
          $cmp433$i = ($94>>>0)<($mul437$i>>>0);
          if ($cmp433$i) {
           $a$8$i = $a$5$lcssa$i;$d$4$i = $d$2$lcssa$i;$e$4$i = $inc438$i;
           break;
          } else {
           $e$2517$i = $inc438$i;$i$2516$i = $mul437$i;
          }
         }
        }
       } while(0);
       $add$ptr442$i = ((($d$4$i)) + 4|0);
       $cmp443$i = ($z$3$lcssa$i>>>0)>($add$ptr442$i>>>0);
       $add$ptr442$z$3$i = $cmp443$i ? $add$ptr442$i : $z$3$lcssa$i;
       $a$9$ph$i = $a$8$i;$e$5$ph$i = $e$4$i;$z$7$ph$i = $add$ptr442$z$3$i;
      } else {
       $a$9$ph$i = $a$3$lcssa$i;$e$5$ph$i = $e$1$i;$z$7$ph$i = $z$3$lcssa$i;
      }
      $sub626$le$i = (0 - ($e$5$ph$i))|0;
      $z$7$i = $z$7$ph$i;
      while(1) {
       $cmp450$i = ($z$7$i>>>0)>($a$9$ph$i>>>0);
       if (!($cmp450$i)) {
        $cmp450$lcssa$i = 0;
        break;
       }
       $arrayidx453$i = ((($z$7$i)) + -4|0);
       $95 = load4($arrayidx453$i);
       $lnot455$i = ($95|0)==(0);
       if ($lnot455$i) {
        $z$7$i = $arrayidx453$i;
       } else {
        $cmp450$lcssa$i = 1;
        break;
       }
      }
      do {
       if ($cmp338$i) {
        $96 = $tobool341$i&1;
        $inc468$i = $96 ^ 1;
        $$p$inc468$i = (($inc468$i) + ($$p$i))|0;
        $cmp470$i = ($$p$inc468$i|0)>($e$5$ph$i|0);
        $cmp473$i = ($e$5$ph$i|0)>(-5);
        $or$cond2$i = $cmp470$i & $cmp473$i;
        if ($or$cond2$i) {
         $dec476$i = (($t$0) + -1)|0;
         $add477$neg$i = (($$p$inc468$i) + -1)|0;
         $sub478$i = (($add477$neg$i) - ($e$5$ph$i))|0;
         $p$addr$2$i = $sub478$i;$t$addr$0$i = $dec476$i;
        } else {
         $sub480$i = (($t$0) + -2)|0;
         $dec481$i = (($$p$inc468$i) + -1)|0;
         $p$addr$2$i = $dec481$i;$t$addr$0$i = $sub480$i;
        }
        $and483$i = $fl$1$and220 & 8;
        $tobool484$i = ($and483$i|0)==(0);
        if (!($tobool484$i)) {
         $and610$pre$phi$iZ2D = $and483$i;$p$addr$3$i = $p$addr$2$i;$t$addr$1$i = $t$addr$0$i;
         break;
        }
        do {
         if ($cmp450$lcssa$i) {
          $arrayidx489$i = ((($z$7$i)) + -4|0);
          $97 = load4($arrayidx489$i);
          $tobool490$i = ($97|0)==(0);
          if ($tobool490$i) {
           $j$2$i = 9;
           break;
          }
          $rem494510$i = (($97>>>0) % 10)&-1;
          $cmp495511$i = ($rem494510$i|0)==(0);
          if ($cmp495511$i) {
           $i$3512$i = 10;$j$1513$i = 0;
          } else {
           $j$2$i = 0;
           break;
          }
          while(1) {
           $mul499$i = ($i$3512$i*10)|0;
           $inc500$i = (($j$1513$i) + 1)|0;
           $rem494$i = (($97>>>0) % ($mul499$i>>>0))&-1;
           $cmp495$i = ($rem494$i|0)==(0);
           if ($cmp495$i) {
            $i$3512$i = $mul499$i;$j$1513$i = $inc500$i;
           } else {
            $j$2$i = $inc500$i;
            break;
           }
          }
         } else {
          $j$2$i = 9;
         }
        } while(0);
        $or504$i = $t$addr$0$i | 32;
        $cmp505$i = ($or504$i|0)==(102);
        $sub$ptr$lhs$cast508$i = $z$7$i;
        $sub$ptr$sub510$i = (($sub$ptr$lhs$cast508$i) - ($sub$ptr$lhs$cast318$i))|0;
        $sub$ptr$div511$i = $sub$ptr$sub510$i >> 2;
        $98 = ($sub$ptr$div511$i*9)|0;
        $mul513$i = (($98) + -9)|0;
        if ($cmp505$i) {
         $sub514$i = (($mul513$i) - ($j$2$i))|0;
         $cmp515$i = ($sub514$i|0)<(0);
         $$sub514$i = $cmp515$i ? 0 : $sub514$i;
         $cmp528$i = ($p$addr$2$i|0)<($$sub514$i|0);
         $p$addr$2$$sub514398$i = $cmp528$i ? $p$addr$2$i : $$sub514$i;
         $and610$pre$phi$iZ2D = 0;$p$addr$3$i = $p$addr$2$$sub514398$i;$t$addr$1$i = $t$addr$0$i;
         break;
        } else {
         $add561$i = (($mul513$i) + ($e$5$ph$i))|0;
         $sub562$i = (($add561$i) - ($j$2$i))|0;
         $cmp563$i = ($sub562$i|0)<(0);
         $$sub562$i = $cmp563$i ? 0 : $sub562$i;
         $cmp577$i = ($p$addr$2$i|0)<($$sub562$i|0);
         $p$addr$2$$sub562399$i = $cmp577$i ? $p$addr$2$i : $$sub562$i;
         $and610$pre$phi$iZ2D = 0;$p$addr$3$i = $p$addr$2$$sub562399$i;$t$addr$1$i = $t$addr$0$i;
         break;
        }
       } else {
        $$pre562$i = $fl$1$and220 & 8;
        $and610$pre$phi$iZ2D = $$pre562$i;$p$addr$3$i = $$p$i;$t$addr$1$i = $t$0;
       }
      } while(0);
      $99 = $p$addr$3$i | $and610$pre$phi$iZ2D;
      $100 = ($99|0)!=(0);
      $lor$ext$i = $100&1;
      $or613$i = $t$addr$1$i | 32;
      $cmp614$i = ($or613$i|0)==(102);
      if ($cmp614$i) {
       $cmp617$i = ($e$5$ph$i|0)>(0);
       $add620$i = $cmp617$i ? $e$5$ph$i : 0;
       $estr$2$i = 0;$sub$ptr$sub650$pn$i = $add620$i;
      } else {
       $cmp623$i = ($e$5$ph$i|0)<(0);
       $cond629$i = $cmp623$i ? $sub626$le$i : $e$5$ph$i;
       $conv630$i = i64_sext($cond629$i);
       $call631$i = (_fmt_u($conv630$i,$arrayidx$i236)|0);
       $sub$ptr$rhs$cast634504$i = $call631$i;
       $sub$ptr$sub635505$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast634504$i))|0;
       $cmp636506$i = ($sub$ptr$sub635505$i|0)<(2);
       if ($cmp636506$i) {
        $estr$1507$i = $call631$i;
        while(1) {
         $incdec$ptr639$i = ((($estr$1507$i)) + -1|0);
         store1($incdec$ptr639$i,48);
         $sub$ptr$rhs$cast634$i = $incdec$ptr639$i;
         $sub$ptr$sub635$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast634$i))|0;
         $cmp636$i = ($sub$ptr$sub635$i|0)<(2);
         if ($cmp636$i) {
          $estr$1507$i = $incdec$ptr639$i;
         } else {
          $estr$1$lcssa$i = $incdec$ptr639$i;
          break;
         }
        }
       } else {
        $estr$1$lcssa$i = $call631$i;
       }
       $101 = $e$5$ph$i >> 31;
       $102 = $101 & 2;
       $103 = (($102) + 43)|0;
       $conv644$i = $103&255;
       $incdec$ptr645$i = ((($estr$1$lcssa$i)) + -1|0);
       store1($incdec$ptr645$i,$conv644$i);
       $conv646$i = $t$addr$1$i&255;
       $incdec$ptr647$i = ((($estr$1$lcssa$i)) + -2|0);
       store1($incdec$ptr647$i,$conv646$i);
       $sub$ptr$rhs$cast649$i = $incdec$ptr647$i;
       $sub$ptr$sub650$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast649$i))|0;
       $estr$2$i = $incdec$ptr647$i;$sub$ptr$sub650$pn$i = $sub$ptr$sub650$i;
      }
      $add608$i = (($pl$0$i) + 1)|0;
      $add612$i = (($add608$i) + ($p$addr$3$i))|0;
      $l$1$i = (($add612$i) + ($lor$ext$i))|0;
      $add653$i = (($l$1$i) + ($sub$ptr$sub650$pn$i))|0;
      _pad($f,32,$w$1,$add653$i,$fl$1$and220);
      $104 = load4($f);
      $and$i436$i = $104 & 32;
      $tobool$i437$i = ($and$i436$i|0)==(0);
      if ($tobool$i437$i) {
       (___fwritex($prefix$0$i,$pl$0$i,$f)|0);
      }
      $xor655$i = $fl$1$and220 ^ 65536;
      _pad($f,48,$w$1,$add653$i,$xor655$i);
      do {
       if ($cmp614$i) {
        $cmp660$i = ($a$9$ph$i>>>0)>($arraydecay208$add$ptr213$i>>>0);
        $r$0$a$9$i = $cmp660$i ? $arraydecay208$add$ptr213$i : $a$9$ph$i;
        $d$5494$i = $r$0$a$9$i;
        while(1) {
         $105 = load4($d$5494$i);
         $conv669$i = i64_zext($105>>>0);
         $call672$i = (_fmt_u($conv669$i,$add$ptr671$i)|0);
         $cmp673$i = ($d$5494$i|0)==($r$0$a$9$i|0);
         do {
          if ($cmp673$i) {
           $cmp686$i = ($call672$i|0)==($add$ptr671$i|0);
           if (!($cmp686$i)) {
            $s668$1$i = $call672$i;
            break;
           }
           store1($incdec$ptr689$i,48);
           $s668$1$i = $incdec$ptr689$i;
          } else {
           $cmp678491$i = ($call672$i>>>0)>($buf$i>>>0);
           if (!($cmp678491$i)) {
            $s668$1$i = $call672$i;
            break;
           }
           $106 = $call672$i;
           $107 = (($106) - ($sub$ptr$rhs$cast$i))|0;
           _memset(($buf$i|0),48,($107|0))|0;
           $s668$0492$i = $call672$i;
           while(1) {
            $incdec$ptr681$i = ((($s668$0492$i)) + -1|0);
            $cmp678$i = ($incdec$ptr681$i>>>0)>($buf$i>>>0);
            if ($cmp678$i) {
             $s668$0492$i = $incdec$ptr681$i;
            } else {
             $s668$1$i = $incdec$ptr681$i;
             break;
            }
           }
          }
         } while(0);
         $108 = load4($f);
         $and$i442$i = $108 & 32;
         $tobool$i443$i = ($and$i442$i|0)==(0);
         if ($tobool$i443$i) {
          $sub$ptr$rhs$cast695$i = $s668$1$i;
          $sub$ptr$sub696$i = (($sub$ptr$lhs$cast694$i) - ($sub$ptr$rhs$cast695$i))|0;
          (___fwritex($s668$1$i,$sub$ptr$sub696$i,$f)|0);
         }
         $incdec$ptr698$i = ((($d$5494$i)) + 4|0);
         $cmp665$i = ($incdec$ptr698$i>>>0)>($arraydecay208$add$ptr213$i>>>0);
         if ($cmp665$i) {
          break;
         } else {
          $d$5494$i = $incdec$ptr698$i;
         }
        }
        $109 = ($99|0)==(0);
        do {
         if (!($109)) {
          $110 = load4($f);
          $and$i448$i = $110 & 32;
          $tobool$i449$i = ($and$i448$i|0)==(0);
          if (!($tobool$i449$i)) {
           break;
          }
          (___fwritex(15857,1,$f)|0);
         }
        } while(0);
        $cmp707486$i = ($incdec$ptr698$i>>>0)<($z$7$i>>>0);
        $cmp710487$i = ($p$addr$3$i|0)>(0);
        $111 = $cmp710487$i & $cmp707486$i;
        if ($111) {
         $d$6488$i = $incdec$ptr698$i;$p$addr$4489$i = $p$addr$3$i;
         while(1) {
          $112 = load4($d$6488$i);
          $conv716$i = i64_zext($112>>>0);
          $call719$i = (_fmt_u($conv716$i,$add$ptr671$i)|0);
          $cmp722483$i = ($call719$i>>>0)>($buf$i>>>0);
          if ($cmp722483$i) {
           $113 = $call719$i;
           $114 = (($113) - ($sub$ptr$rhs$cast$i))|0;
           _memset(($buf$i|0),48,($114|0))|0;
           $s715$0484$i = $call719$i;
           while(1) {
            $incdec$ptr725$i = ((($s715$0484$i)) + -1|0);
            $cmp722$i = ($incdec$ptr725$i>>>0)>($buf$i>>>0);
            if ($cmp722$i) {
             $s715$0484$i = $incdec$ptr725$i;
            } else {
             $s715$0$lcssa$i = $incdec$ptr725$i;
             break;
            }
           }
          } else {
           $s715$0$lcssa$i = $call719$i;
          }
          $115 = load4($f);
          $and$i454$i = $115 & 32;
          $tobool$i455$i = ($and$i454$i|0)==(0);
          if ($tobool$i455$i) {
           $cmp727$i = ($p$addr$4489$i|0)>(9);
           $cond732$i = $cmp727$i ? 9 : $p$addr$4489$i;
           (___fwritex($s715$0$lcssa$i,$cond732$i,$f)|0);
          }
          $incdec$ptr734$i = ((($d$6488$i)) + 4|0);
          $sub735$i = (($p$addr$4489$i) + -9)|0;
          $cmp707$i = ($incdec$ptr734$i>>>0)<($z$7$i>>>0);
          $cmp710$i = ($p$addr$4489$i|0)>(9);
          $116 = $cmp710$i & $cmp707$i;
          if ($116) {
           $d$6488$i = $incdec$ptr734$i;$p$addr$4489$i = $sub735$i;
          } else {
           $p$addr$4$lcssa$i = $sub735$i;
           break;
          }
         }
        } else {
         $p$addr$4$lcssa$i = $p$addr$3$i;
        }
        $add737$i = (($p$addr$4$lcssa$i) + 9)|0;
        _pad($f,48,$add737$i,9,0);
       } else {
        $add$ptr742$i = ((($a$9$ph$i)) + 4|0);
        $z$7$add$ptr742$i = $cmp450$lcssa$i ? $z$7$i : $add$ptr742$i;
        $cmp748499$i = ($p$addr$3$i|0)>(-1);
        if ($cmp748499$i) {
         $tobool781$i = ($and610$pre$phi$iZ2D|0)==(0);
         $d$7500$i = $a$9$ph$i;$p$addr$5501$i = $p$addr$3$i;
         while(1) {
          $117 = load4($d$7500$i);
          $conv754$i = i64_zext($117>>>0);
          $call757$i = (_fmt_u($conv754$i,$add$ptr671$i)|0);
          $cmp760$i = ($call757$i|0)==($add$ptr671$i|0);
          if ($cmp760$i) {
           store1($incdec$ptr689$i,48);
           $s753$0$i = $incdec$ptr689$i;
          } else {
           $s753$0$i = $call757$i;
          }
          $cmp765$i = ($d$7500$i|0)==($a$9$ph$i|0);
          do {
           if ($cmp765$i) {
            $incdec$ptr776$i = ((($s753$0$i)) + 1|0);
            $118 = load4($f);
            $and$i460$i = $118 & 32;
            $tobool$i461$i = ($and$i460$i|0)==(0);
            if ($tobool$i461$i) {
             (___fwritex($s753$0$i,1,$f)|0);
            }
            $cmp777$i = ($p$addr$5501$i|0)<(1);
            $or$cond401$i = $tobool781$i & $cmp777$i;
            if ($or$cond401$i) {
             $s753$2$i = $incdec$ptr776$i;
             break;
            }
            $119 = load4($f);
            $and$i466$i = $119 & 32;
            $tobool$i467$i = ($and$i466$i|0)==(0);
            if (!($tobool$i467$i)) {
             $s753$2$i = $incdec$ptr776$i;
             break;
            }
            (___fwritex(15857,1,$f)|0);
            $s753$2$i = $incdec$ptr776$i;
           } else {
            $cmp770495$i = ($s753$0$i>>>0)>($buf$i>>>0);
            if (!($cmp770495$i)) {
             $s753$2$i = $s753$0$i;
             break;
            }
            $scevgep556$i = (($s753$0$i) + ($0)|0);
            $scevgep556557$i = $scevgep556$i;
            _memset(($buf$i|0),48,($scevgep556557$i|0))|0;
            $s753$1496$i = $s753$0$i;
            while(1) {
             $incdec$ptr773$i = ((($s753$1496$i)) + -1|0);
             $cmp770$i = ($incdec$ptr773$i>>>0)>($buf$i>>>0);
             if ($cmp770$i) {
              $s753$1496$i = $incdec$ptr773$i;
             } else {
              $s753$2$i = $incdec$ptr773$i;
              break;
             }
            }
           }
          } while(0);
          $sub$ptr$rhs$cast788$i = $s753$2$i;
          $sub$ptr$sub789$i = (($sub$ptr$lhs$cast694$i) - ($sub$ptr$rhs$cast788$i))|0;
          $120 = load4($f);
          $and$i472$i = $120 & 32;
          $tobool$i473$i = ($and$i472$i|0)==(0);
          if ($tobool$i473$i) {
           $cmp790$i = ($p$addr$5501$i|0)>($sub$ptr$sub789$i|0);
           $cond800$i = $cmp790$i ? $sub$ptr$sub789$i : $p$addr$5501$i;
           (___fwritex($s753$2$i,$cond800$i,$f)|0);
          }
          $sub806$i = (($p$addr$5501$i) - ($sub$ptr$sub789$i))|0;
          $incdec$ptr808$i = ((($d$7500$i)) + 4|0);
          $cmp745$i = ($incdec$ptr808$i>>>0)<($z$7$add$ptr742$i>>>0);
          $cmp748$i = ($sub806$i|0)>(-1);
          $121 = $cmp745$i & $cmp748$i;
          if ($121) {
           $d$7500$i = $incdec$ptr808$i;$p$addr$5501$i = $sub806$i;
          } else {
           $p$addr$5$lcssa$i = $sub806$i;
           break;
          }
         }
        } else {
         $p$addr$5$lcssa$i = $p$addr$3$i;
        }
        $add810$i = (($p$addr$5$lcssa$i) + 18)|0;
        _pad($f,48,$add810$i,18,0);
        $122 = load4($f);
        $and$i$i = $122 & 32;
        $tobool$i$i = ($and$i$i|0)==(0);
        if (!($tobool$i$i)) {
         break;
        }
        $sub$ptr$rhs$cast812$i = $estr$2$i;
        $sub$ptr$sub813$i = (($sub$ptr$lhs$cast160$i) - ($sub$ptr$rhs$cast812$i))|0;
        (___fwritex($estr$2$i,$sub$ptr$sub813$i,$f)|0);
       }
      } while(0);
      $xor816$i = $fl$1$and220 ^ 8192;
      _pad($f,32,$w$1,$add653$i,$xor816$i);
      $cmp818$i = ($add653$i|0)<($w$1|0);
      $w$add653$i = $cmp818$i ? $w$1 : $add653$i;
      $retval$0$i = $w$add653$i;
     } else {
      $and36$i = $t$0 & 32;
      $tobool37$i = ($and36$i|0)!=(0);
      $cond$i = $tobool37$i ? 15841 : 15845;
      $cmp38$i = ($y$addr$0$i != $y$addr$0$i) | (0.0 != 0.0);
      $cond43$i = $tobool37$i ? 15849 : 15853;
      $pl$1$i = $cmp38$i ? 0 : $pl$0$i;
      $s35$0$i = $cmp38$i ? $cond43$i : $cond$i;
      $add$i240 = (($pl$1$i) + 3)|0;
      _pad($f,32,$w$1,$add$i240,$and220);
      $65 = load4($f);
      $and$i406$i = $65 & 32;
      $tobool$i407$i = ($and$i406$i|0)==(0);
      if ($tobool$i407$i) {
       (___fwritex($prefix$0$i,$pl$1$i,$f)|0);
       $$pre$i = load4($f);
       $66 = $$pre$i;
      } else {
       $66 = $65;
      }
      $and$i412$i = $66 & 32;
      $tobool$i413$i = ($and$i412$i|0)==(0);
      if ($tobool$i413$i) {
       (___fwritex($s35$0$i,3,$f)|0);
      }
      $xor$i = $fl$1$and220 ^ 8192;
      _pad($f,32,$w$1,$add$i240,$xor$i);
      $cmp48$i = ($add$i240|0)<($w$1|0);
      $cond53$i = $cmp48$i ? $w$1 : $add$i240;
      $retval$0$i = $cond53$i;
     }
    } while(0);
    $cnt$0 = $cnt$1;$l$0 = $retval$0$i;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
    continue L1;
    break;
   }
   default: {
    $a$2 = $s$0;$fl$6 = $fl$1$and220;$p$5 = $p$0;$pl$2 = 0;$prefix$2 = 15805;$z$2 = $add$ptr206;
   }
   }
  } while(0);
  L310: do {
   if ((label|0) == 63) {
    label = 0;
    $47 = load8($arg);
    $and250 = $t$1 & 32;
    $tobool5$i = i64_eq($47,i64_const(0,0));
    if ($tobool5$i) {
     $49 = i64_const(0,0);$s$addr$0$lcssa$i = $add$ptr206;
    } else {
     $s$addr$06$i = $add$ptr206;$x$addr$07$i = $47;
     while(1) {
      $x$addr$0$tr$i = i64_trunc($x$addr$07$i);
      $idxprom$i = $x$addr$0$tr$i & 15;
      $arrayidx$i = (15789 + ($idxprom$i)|0);
      $48 = load1($arrayidx$i);
      $conv4$i211 = $48&255;
      $or$i = $conv4$i211 | $and250;
      $conv1$i = $or$i&255;
      $incdec$ptr$i212 = ((($s$addr$06$i)) + -1|0);
      store1($incdec$ptr$i212,$conv1$i);
      $shr$i = i64_lshr($x$addr$07$i,i64_const(4,0));
      $tobool$i213 = i64_eq($shr$i,i64_const(0,0));
      if ($tobool$i213) {
       break;
      } else {
       $s$addr$06$i = $incdec$ptr$i212;$x$addr$07$i = $shr$i;
      }
     }
     $$pre338 = load8($arg);
     $49 = $$pre338;$s$addr$0$lcssa$i = $incdec$ptr$i212;
    }
    $tobool253 = i64_eq($49,i64_const(0,0));
    $and255 = $fl$3 & 8;
    $tobool256 = ($and255|0)==(0);
    $or$cond193 = $tobool256 | $tobool253;
    $shr = $t$1 >> 4;
    $add$ptr258 = (15805 + ($shr)|0);
    $$add$ptr258 = $or$cond193 ? 15805 : $add$ptr258;
    $$272 = $or$cond193 ? 0 : 2;
    $a$0 = $s$addr$0$lcssa$i;$fl$4 = $fl$3;$p$2 = $p$1;$pl$1 = $$272;$prefix$1 = $$add$ptr258;
    label = 76;
   }
   else if ((label|0) == 75) {
    label = 0;
    $call305 = (_fmt_u($52,$add$ptr206)|0);
    $a$0 = $call305;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = $pl$0;$prefix$1 = $prefix$0;
    label = 76;
   }
   else if ((label|0) == 81) {
    label = 0;
    $call357 = (_memchr($a$1,0,$p$0)|0);
    $tobool358 = ($call357|0)==(0|0);
    $sub$ptr$lhs$cast362 = $call357;
    $sub$ptr$rhs$cast363 = $a$1;
    $sub$ptr$sub364 = (($sub$ptr$lhs$cast362) - ($sub$ptr$rhs$cast363))|0;
    $add$ptr360 = (($a$1) + ($p$0)|0);
    $p$3 = $tobool358 ? $p$0 : $sub$ptr$sub364;
    $z$1 = $tobool358 ? $add$ptr360 : $call357;
    $a$2 = $a$1;$fl$6 = $and220;$p$5 = $p$3;$pl$2 = 0;$prefix$2 = 15805;$z$2 = $z$1;
   }
   else if ((label|0) == 85) {
    label = 0;
    $i$0310 = 0;$l$1309 = 0;$ws$0311 = $127;
    while(1) {
     $59 = load4($ws$0311);
     $tobool381 = ($59|0)==(0);
     if ($tobool381) {
      $i$0$lcssa = $i$0310;$l$2 = $l$1309;
      break;
     }
     $call385 = (_wctomb($mb,$59)|0);
     $cmp386 = ($call385|0)<(0);
     $sub390 = (($p$4340) - ($i$0310))|0;
     $cmp391 = ($call385>>>0)>($sub390>>>0);
     $or$cond195 = $cmp386 | $cmp391;
     if ($or$cond195) {
      $i$0$lcssa = $i$0310;$l$2 = $call385;
      break;
     }
     $incdec$ptr384 = ((($ws$0311)) + 4|0);
     $add396 = (($call385) + ($i$0310))|0;
     $cmp378 = ($p$4340>>>0)>($add396>>>0);
     if ($cmp378) {
      $i$0310 = $add396;$l$1309 = $call385;$ws$0311 = $incdec$ptr384;
     } else {
      $i$0$lcssa = $add396;$l$2 = $call385;
      break;
     }
    }
    $cmp398 = ($l$2|0)<(0);
    if ($cmp398) {
     $retval$0 = -1;
     break L1;
    }
    _pad($f,32,$w$1,$i$0$lcssa,$fl$1$and220);
    $cmp405318 = ($i$0$lcssa|0)==(0);
    if ($cmp405318) {
     $i$0$lcssa343 = 0;
     label = 96;
    } else {
     $i$1319 = 0;$ws$1320 = $127;
     while(1) {
      $60 = load4($ws$1320);
      $tobool408 = ($60|0)==(0);
      if ($tobool408) {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 96;
       break L310;
      }
      $incdec$ptr411 = ((($ws$1320)) + 4|0);
      $call412 = (_wctomb($mb,$60)|0);
      $add413 = (($call412) + ($i$1319))|0;
      $cmp414 = ($add413|0)>($i$0$lcssa|0);
      if ($cmp414) {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 96;
       break L310;
      }
      $61 = load4($f);
      $and$i231 = $61 & 32;
      $tobool$i232 = ($and$i231|0)==(0);
      if ($tobool$i232) {
       (___fwritex($mb,$call412,$f)|0);
      }
      $cmp405 = ($add413>>>0)<($i$0$lcssa>>>0);
      if ($cmp405) {
       $i$1319 = $add413;$ws$1320 = $incdec$ptr411;
      } else {
       $i$0$lcssa343 = $i$0$lcssa;
       label = 96;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 96) {
   label = 0;
   $xor = $fl$1$and220 ^ 8192;
   _pad($f,32,$w$1,$i$0$lcssa343,$xor);
   $cmp422 = ($w$1|0)>($i$0$lcssa343|0);
   $cond427 = $cmp422 ? $w$1 : $i$0$lcssa343;
   $cnt$0 = $cnt$1;$l$0 = $cond427;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
   continue;
  }
  if ((label|0) == 76) {
   label = 0;
   $cmp307 = ($p$2|0)>(-1);
   $and310 = $fl$4 & -65537;
   $and310$fl$4 = $cmp307 ? $and310 : $fl$4;
   $53 = load8($arg);
   $tobool313 = i64_ne($53,i64_const(0,0));
   $tobool315 = ($p$2|0)!=(0);
   $or$cond = $tobool315 | $tobool313;
   if ($or$cond) {
    $sub$ptr$rhs$cast319 = $a$0;
    $sub$ptr$sub320 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast319))|0;
    $54 = $tobool313&1;
    $lnot$ext = $54 ^ 1;
    $add323 = (($lnot$ext) + ($sub$ptr$sub320))|0;
    $cmp324 = ($p$2|0)>($add323|0);
    $p$2$add323 = $cmp324 ? $p$2 : $add323;
    $a$2 = $a$0;$fl$6 = $and310$fl$4;$p$5 = $p$2$add323;$pl$2 = $pl$1;$prefix$2 = $prefix$1;$z$2 = $add$ptr206;
   } else {
    $a$2 = $add$ptr206;$fl$6 = $and310$fl$4;$p$5 = 0;$pl$2 = $pl$1;$prefix$2 = $prefix$1;$z$2 = $add$ptr206;
   }
  }
  $sub$ptr$lhs$cast432 = $z$2;
  $sub$ptr$rhs$cast433 = $a$2;
  $sub$ptr$sub434 = (($sub$ptr$lhs$cast432) - ($sub$ptr$rhs$cast433))|0;
  $cmp435 = ($p$5|0)<($sub$ptr$sub434|0);
  $sub$ptr$sub434$p$5 = $cmp435 ? $sub$ptr$sub434 : $p$5;
  $add442 = (($sub$ptr$sub434$p$5) + ($pl$2))|0;
  $cmp443 = ($w$1|0)<($add442|0);
  $w$2 = $cmp443 ? $add442 : $w$1;
  _pad($f,32,$w$2,$add442,$fl$6);
  $123 = load4($f);
  $and$i245 = $123 & 32;
  $tobool$i246 = ($and$i245|0)==(0);
  if ($tobool$i246) {
   (___fwritex($prefix$2,$pl$2,$f)|0);
  }
  $xor450 = $fl$6 ^ 65536;
  _pad($f,48,$w$2,$add442,$xor450);
  _pad($f,48,$sub$ptr$sub434$p$5,$sub$ptr$sub434,0);
  $124 = load4($f);
  $and$i216 = $124 & 32;
  $tobool$i217 = ($and$i216|0)==(0);
  if ($tobool$i217) {
   (___fwritex($a$2,$sub$ptr$sub434,$f)|0);
  }
  $xor458 = $fl$6 ^ 8192;
  _pad($f,32,$w$2,$add442,$xor458);
  $cnt$0 = $cnt$1;$l$0 = $w$2;$l10n$0 = $l10n$3;$s$0 = $incdec$ptr170;
 }
 L345: do {
  if ((label|0) == 243) {
   $tobool460 = ($f|0)==(0|0);
   if ($tobool460) {
    $tobool463 = ($l10n$0|0)==(0);
    if ($tobool463) {
     $retval$0 = 0;
    } else {
     $i$2292 = 1;
     while(1) {
      $arrayidx470 = (($nl_type) + ($i$2292<<2)|0);
      $125 = load4($arrayidx470);
      $tobool471 = ($125|0)==(0);
      if ($tobool471) {
       $i$3289 = $i$2292;
       break;
      }
      $add$ptr474 = (($nl_arg) + ($i$2292<<3)|0);
      _pop_arg_374($add$ptr474,$125,$ap);
      $inc = (($i$2292) + 1)|0;
      $cmp467 = ($inc|0)<(10);
      if ($cmp467) {
       $i$2292 = $inc;
      } else {
       $retval$0 = 1;
       break L345;
      }
     }
     while(1) {
      $arrayidx482 = (($nl_type) + ($i$3289<<2)|0);
      $126 = load4($arrayidx482);
      $lnot484 = ($126|0)==(0);
      $inc489 = (($i$3289) + 1)|0;
      if (!($lnot484)) {
       $retval$0 = -1;
       break L345;
      }
      $cmp479 = ($inc489|0)<(10);
      if ($cmp479) {
       $i$3289 = $inc489;
      } else {
       $retval$0 = 1;
       break;
      }
     }
    }
   } else {
    $retval$0 = $cnt$1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function ___lockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function ___fwritex($s,$l,$f) {
 $s = $s|0;
 $l = $l|0;
 $f = $f|0;
 var $$pre = 0, $$pre31 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add$ptr26 = 0, $arrayidx = 0, $call = 0, $call16 = 0, $call4 = 0;
 var $cmp = 0, $cmp11 = 0, $cmp17 = 0, $cmp6 = 0, $i$0 = 0, $i$1 = 0, $l$addr$0 = 0, $lbf = 0, $retval$0 = 0, $s$addr$0 = 0, $sub = 0, $sub$ptr$sub = 0, $sub21 = 0, $tobool = 0, $tobool1 = 0, $tobool9 = 0, $wend = 0, $wpos = 0, $write = 0, $write15 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $wend = ((($f)) + 16|0);
 $0 = load4($wend);
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite($f)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = load4($wend);
   $3 = $$pre;
   label = 5;
  } else {
   $retval$0 = 0;
  }
 } else {
  $1 = $0;
  $3 = $1;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $wpos = ((($f)) + 20|0);
   $2 = load4($wpos);
   $sub$ptr$sub = (($3) - ($2))|0;
   $cmp = ($sub$ptr$sub>>>0)<($l>>>0);
   $4 = $2;
   if ($cmp) {
    $write = ((($f)) + 36|0);
    $5 = load4($write);
    $call4 = (FUNCTION_TABLE_iiii[$5 & 7]($f,$s,$l)|0);
    $retval$0 = $call4;
    break;
   }
   $lbf = ((($f)) + 75|0);
   $6 = load1($lbf);
   $cmp6 = ($6<<24>>24)>(-1);
   L10: do {
    if ($cmp6) {
     $i$0 = $l;
     while(1) {
      $tobool9 = ($i$0|0)==(0);
      if ($tobool9) {
       $9 = $4;$i$1 = 0;$l$addr$0 = $l;$s$addr$0 = $s;
       break L10;
      }
      $sub = (($i$0) + -1)|0;
      $arrayidx = (($s) + ($sub)|0);
      $7 = load1($arrayidx);
      $cmp11 = ($7<<24>>24)==(10);
      if ($cmp11) {
       break;
      } else {
       $i$0 = $sub;
      }
     }
     $write15 = ((($f)) + 36|0);
     $8 = load4($write15);
     $call16 = (FUNCTION_TABLE_iiii[$8 & 7]($f,$s,$i$0)|0);
     $cmp17 = ($call16>>>0)<($i$0>>>0);
     if ($cmp17) {
      $retval$0 = $i$0;
      break L5;
     }
     $add$ptr = (($s) + ($i$0)|0);
     $sub21 = (($l) - ($i$0))|0;
     $$pre31 = load4($wpos);
     $9 = $$pre31;$i$1 = $i$0;$l$addr$0 = $sub21;$s$addr$0 = $add$ptr;
    } else {
     $9 = $4;$i$1 = 0;$l$addr$0 = $l;$s$addr$0 = $s;
    }
   } while(0);
   _memcpy(($9|0),($s$addr$0|0),($l$addr$0|0))|0;
   $10 = load4($wpos);
   $add$ptr26 = (($10) + ($l$addr$0)|0);
   store4($wpos,$add$ptr26);
   $add = (($i$1) + ($l$addr$0))|0;
   $retval$0 = $add;
  }
 } while(0);
 return ($retval$0|0);
}
function _pop_arg_374($arg,$type,$ap) {
 $arg = $arg|0;
 $type = $type|0;
 $ap = $ap|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = i64(), $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0.0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0.0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0, $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0;
 var $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $cmp = 0, $conv = i64(), $conv16 = 0, $conv17 = i64(), $conv22$mask = 0, $conv23 = i64(), $conv28 = 0, $conv29 = i64(), $conv34$mask = 0, $conv35 = i64();
 var $conv7 = i64(), $expanded = 0, $expanded28 = 0, $expanded29 = 0, $expanded30 = 0, $expanded31 = 0, $expanded32 = 0, $expanded33 = 0, $expanded34 = 0, $expanded35 = 0, $expanded36 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded40 = 0, $expanded41 = 0, $expanded42 = 0, $expanded43 = 0, $expanded44 = 0, $expanded45 = 0;
 var $expanded46 = 0, $expanded47 = 0, $expanded48 = 0, $expanded49 = 0, $expanded50 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded54 = 0, $expanded55 = 0, $expanded56 = 0, $expanded57 = 0, $expanded58 = 0, $expanded59 = 0, $expanded60 = 0, $expanded61 = 0, $expanded62 = 0, $expanded63 = 0, $expanded64 = 0, $expanded65 = 0;
 var $expanded66 = 0, $expanded67 = 0, $expanded68 = 0, $expanded69 = 0, $expanded70 = 0, $expanded71 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded75 = 0, $expanded76 = 0, $expanded77 = 0, $expanded78 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded82 = 0, $expanded83 = 0, $expanded84 = 0, $expanded85 = 0;
 var $expanded86 = 0, $expanded87 = 0, $expanded88 = 0, $expanded89 = 0, $expanded90 = 0, $expanded91 = 0, $expanded92 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, $expanded96 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($type>>>0)>(20);
 L1: do {
  if (!($cmp)) {
   do {
    switch ($type|0) {
    case 9:  {
     $arglist_current = load4($ap);
     $0 = $arglist_current;
     $expanded29 = ((0) + 4|0);
     $expanded28 = $expanded29;
     $expanded = (($expanded28) - 1)|0;
     $1 = (($0) + ($expanded))|0;
     $expanded33 = ((0) + 4|0);
     $expanded32 = $expanded33;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $2 = $1 & $expanded30;
     $3 = $2;
     $4 = load4($3);
     $arglist_next = ((($3)) + 4|0);
     store4($ap,$arglist_next);
     store4($arg,$4);
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = load4($ap);
     $5 = $arglist_current2;
     $expanded36 = ((0) + 4|0);
     $expanded35 = $expanded36;
     $expanded34 = (($expanded35) - 1)|0;
     $6 = (($5) + ($expanded34))|0;
     $expanded40 = ((0) + 4|0);
     $expanded39 = $expanded40;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $7 = $6 & $expanded37;
     $8 = $7;
     $9 = load4($8);
     $arglist_next3 = ((($8)) + 4|0);
     store4($ap,$arglist_next3);
     $conv = i64_sext($9);
     store8($arg,$conv);
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = load4($ap);
     $10 = $arglist_current5;
     $expanded43 = ((0) + 4|0);
     $expanded42 = $expanded43;
     $expanded41 = (($expanded42) - 1)|0;
     $11 = (($10) + ($expanded41))|0;
     $expanded47 = ((0) + 4|0);
     $expanded46 = $expanded47;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $12 = $11 & $expanded44;
     $13 = $12;
     $14 = load4($13);
     $arglist_next6 = ((($13)) + 4|0);
     store4($ap,$arglist_next6);
     $conv7 = i64_zext($14>>>0);
     store8($arg,$conv7);
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = load4($ap);
     $15 = $arglist_current8;
     $expanded50 = ((0) + 8|0);
     $expanded49 = $expanded50;
     $expanded48 = (($expanded49) - 1)|0;
     $16 = (($15) + ($expanded48))|0;
     $expanded54 = ((0) + 8|0);
     $expanded53 = $expanded54;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $17 = $16 & $expanded51;
     $18 = $17;
     $19 = load8($18);
     $arglist_next9 = ((($18)) + 8|0);
     store4($ap,$arglist_next9);
     store8($arg,$19);
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = load4($ap);
     $20 = $arglist_current11;
     $expanded57 = ((0) + 4|0);
     $expanded56 = $expanded57;
     $expanded55 = (($expanded56) - 1)|0;
     $21 = (($20) + ($expanded55))|0;
     $expanded61 = ((0) + 4|0);
     $expanded60 = $expanded61;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $22 = $21 & $expanded58;
     $23 = $22;
     $24 = load4($23);
     $arglist_next12 = ((($23)) + 4|0);
     store4($ap,$arglist_next12);
     $conv16 = $24&65535;
     $conv17 = i64_sext($conv16 << 16 >> 16);
     store8($arg,$conv17);
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = load4($ap);
     $25 = $arglist_current14;
     $expanded64 = ((0) + 4|0);
     $expanded63 = $expanded64;
     $expanded62 = (($expanded63) - 1)|0;
     $26 = (($25) + ($expanded62))|0;
     $expanded68 = ((0) + 4|0);
     $expanded67 = $expanded68;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $27 = $26 & $expanded65;
     $28 = $27;
     $29 = load4($28);
     $arglist_next15 = ((($28)) + 4|0);
     store4($ap,$arglist_next15);
     $conv22$mask = $29 & 65535;
     $conv23 = i64_zext($conv22$mask>>>0);
     store8($arg,$conv23);
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = load4($ap);
     $30 = $arglist_current17;
     $expanded71 = ((0) + 4|0);
     $expanded70 = $expanded71;
     $expanded69 = (($expanded70) - 1)|0;
     $31 = (($30) + ($expanded69))|0;
     $expanded75 = ((0) + 4|0);
     $expanded74 = $expanded75;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $32 = $31 & $expanded72;
     $33 = $32;
     $34 = load4($33);
     $arglist_next18 = ((($33)) + 4|0);
     store4($ap,$arglist_next18);
     $conv28 = $34&255;
     $conv29 = i64_sext($conv28 << 24 >> 24);
     store8($arg,$conv29);
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = load4($ap);
     $35 = $arglist_current20;
     $expanded78 = ((0) + 4|0);
     $expanded77 = $expanded78;
     $expanded76 = (($expanded77) - 1)|0;
     $36 = (($35) + ($expanded76))|0;
     $expanded82 = ((0) + 4|0);
     $expanded81 = $expanded82;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $37 = $36 & $expanded79;
     $38 = $37;
     $39 = load4($38);
     $arglist_next21 = ((($38)) + 4|0);
     store4($ap,$arglist_next21);
     $conv34$mask = $39 & 255;
     $conv35 = i64_zext($conv34$mask>>>0);
     store8($arg,$conv35);
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = load4($ap);
     $40 = $arglist_current23;
     $expanded85 = ((0) + 8|0);
     $expanded84 = $expanded85;
     $expanded83 = (($expanded84) - 1)|0;
     $41 = (($40) + ($expanded83))|0;
     $expanded89 = ((0) + 8|0);
     $expanded88 = $expanded89;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $42 = $41 & $expanded86;
     $43 = $42;
     $44 = loadd($43);
     $arglist_next24 = ((($43)) + 8|0);
     store4($ap,$arglist_next24);
     stored($arg,$44);
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = load4($ap);
     $45 = $arglist_current26;
     $expanded92 = ((0) + 8|0);
     $expanded91 = $expanded92;
     $expanded90 = (($expanded91) - 1)|0;
     $46 = (($45) + ($expanded90))|0;
     $expanded96 = ((0) + 8|0);
     $expanded95 = $expanded96;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $47 = $46 & $expanded93;
     $48 = $47;
     $49 = loadd($48);
     $arglist_next27 = ((($48)) + 8|0);
     store4($ap,$arglist_next27);
     stored($arg,$49);
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
function _fmt_u($x,$s) {
 $x = i64($x);
 $s = $s|0;
 var $0 = 0, $add = i64(), $add5 = 0, $cmp = 0, $cmp11 = 0, $conv = 0, $conv6 = 0, $div = i64(), $div9 = 0, $extract$t = 0, $extract$t16 = 0, $incdec$ptr = 0, $incdec$ptr7 = 0, $rem = i64(), $rem4 = 0, $s$addr$0$lcssa = 0, $s$addr$013 = 0, $s$addr$1$lcssa = 0, $s$addr$19 = 0, $tobool8 = 0;
 var $x$addr$0$lcssa$off0 = 0, $x$addr$012 = i64(), $y$010 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp11 = i64_ugt($x,i64_const(4294967295,0));
 $extract$t = i64_trunc($x);
 if ($cmp11) {
  $s$addr$013 = $s;$x$addr$012 = $x;
  while(1) {
   $rem = i64_urem($x$addr$012,i64_const(10,0));
   $add = i64_or($rem,i64_const(48,0));
   $conv = i64_trunc($add)&255;
   $incdec$ptr = ((($s$addr$013)) + -1|0);
   store1($incdec$ptr,$conv);
   $div = i64_udiv($x$addr$012,i64_const(10,0));
   $cmp = i64_ugt($x$addr$012,i64_const(4294967295,9));
   if ($cmp) {
    $s$addr$013 = $incdec$ptr;$x$addr$012 = $div;
   } else {
    break;
   }
  }
  $extract$t16 = i64_trunc($div);
  $s$addr$0$lcssa = $incdec$ptr;$x$addr$0$lcssa$off0 = $extract$t16;
 } else {
  $s$addr$0$lcssa = $s;$x$addr$0$lcssa$off0 = $extract$t;
 }
 $tobool8 = ($x$addr$0$lcssa$off0|0)==(0);
 if ($tobool8) {
  $s$addr$1$lcssa = $s$addr$0$lcssa;
 } else {
  $s$addr$19 = $s$addr$0$lcssa;$y$010 = $x$addr$0$lcssa$off0;
  while(1) {
   $rem4 = (($y$010>>>0) % 10)&-1;
   $add5 = $rem4 | 48;
   $conv6 = $add5&255;
   $incdec$ptr7 = ((($s$addr$19)) + -1|0);
   store1($incdec$ptr7,$conv6);
   $div9 = (($y$010>>>0) / 10)&-1;
   $0 = ($y$010>>>0)<(10);
   if ($0) {
    $s$addr$1$lcssa = $incdec$ptr7;
    break;
   } else {
    $s$addr$19 = $incdec$ptr7;$y$010 = $div9;
   }
  }
 }
 return ($s$addr$1$lcssa|0);
}
function _strerror($e) {
 $e = $e|0;
 var $0 = 0, $1 = 0, $arrayidx = 0, $cmp = 0, $conv = 0, $dec = 0, $i$012 = 0, $i$111 = 0, $inc = 0, $incdec$ptr = 0, $s$0$lcssa = 0, $s$010 = 0, $s$1 = 0, $tobool = 0, $tobool5 = 0, $tobool59 = 0, $tobool8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $i$012 = 0;
 while(1) {
  $arrayidx = (15859 + ($i$012)|0);
  $0 = load1($arrayidx);
  $conv = $0&255;
  $cmp = ($conv|0)==($e|0);
  if ($cmp) {
   label = 2;
   break;
  }
  $inc = (($i$012) + 1)|0;
  $tobool = ($inc|0)==(87);
  if ($tobool) {
   $i$111 = 87;$s$010 = 15947;
   label = 5;
   break;
  } else {
   $i$012 = $inc;
  }
 }
 if ((label|0) == 2) {
  $tobool59 = ($i$012|0)==(0);
  if ($tobool59) {
   $s$0$lcssa = 15947;
  } else {
   $i$111 = $i$012;$s$010 = 15947;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $s$1 = $s$010;
   while(1) {
    $1 = load1($s$1);
    $tobool8 = ($1<<24>>24)==(0);
    $incdec$ptr = ((($s$1)) + 1|0);
    if ($tobool8) {
     break;
    } else {
     $s$1 = $incdec$ptr;
    }
   }
   $dec = (($i$111) + -1)|0;
   $tobool5 = ($dec|0)==(0);
   if ($tobool5) {
    $s$0$lcssa = $incdec$ptr;
    break;
   } else {
    $i$111 = $dec;$s$010 = $incdec$ptr;
    label = 5;
   }
  }
 }
 return ($s$0$lcssa|0);
}
function _pad($f,$c,$w,$l,$fl) {
 $f = $f|0;
 $c = $c|0;
 $w = $w|0;
 $l = $l|0;
 $fl = $fl|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $and = 0, $and$i = 0, $and$i15 = 0, $cmp = 0, $cmp1 = 0, $cmp3 = 0, $cmp314 = 0, $cond = 0, $l$addr$0$lcssa21 = 0, $l$addr$017 = 0, $or$cond = 0, $pad = 0, $sub = 0, $sub6 = 0;
 var $tobool = 0, $tobool$i = 0, $tobool$i16 = 0, $tobool$i18 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0;
 $pad = sp;
 $and = $fl & 73728;
 $tobool = ($and|0)==(0);
 $cmp = ($w|0)>($l|0);
 $or$cond = $cmp & $tobool;
 do {
  if ($or$cond) {
   $sub = (($w) - ($l))|0;
   $cmp1 = ($sub>>>0)>(256);
   $cond = $cmp1 ? 256 : $sub;
   _memset(($pad|0),($c|0),($cond|0))|0;
   $cmp314 = ($sub>>>0)>(255);
   $0 = load4($f);
   $and$i15 = $0 & 32;
   $tobool$i16 = ($and$i15|0)==(0);
   if ($cmp314) {
    $1 = (($w) - ($l))|0;
    $4 = $0;$l$addr$017 = $sub;$tobool$i18 = $tobool$i16;
    while(1) {
     if ($tobool$i18) {
      (___fwritex($pad,256,$f)|0);
      $$pre = load4($f);
      $2 = $$pre;
     } else {
      $2 = $4;
     }
     $sub6 = (($l$addr$017) + -256)|0;
     $cmp3 = ($sub6>>>0)>(255);
     $and$i = $2 & 32;
     $tobool$i = ($and$i|0)==(0);
     if ($cmp3) {
      $4 = $2;$l$addr$017 = $sub6;$tobool$i18 = $tobool$i;
     } else {
      break;
     }
    }
    $3 = $1 & 255;
    if ($tobool$i) {
     $l$addr$0$lcssa21 = $3;
    } else {
     break;
    }
   } else {
    if ($tobool$i16) {
     $l$addr$0$lcssa21 = $sub;
    } else {
     break;
    }
   }
   (___fwritex($pad,$l$addr$0$lcssa21,$f)|0);
  }
 } while(0);
 STACKTOP = sp;return;
}
function _wctomb($s,$wc) {
 $s = $s|0;
 $wc = $wc|0;
 var $call = 0, $retval$0 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 if ($tobool) {
  $retval$0 = 0;
 } else {
  $call = (_wcrtomb($s,$wc,0)|0);
  $retval$0 = $call;
 }
 return ($retval$0|0);
}
function _frexpl($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $call = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (+_frexp($x,$e));
 return (+$call);
}
function _frexp($x,$e) {
 $x = +$x;
 $e = $e|0;
 var $0 = i64(), $1 = 0, $2 = 0.0, $and10 = i64(), $call = 0.0, $conv = 0, $mul = 0.0, $or = i64(), $retval$0 = 0.0, $shr = i64(), $shr$tr = 0, $storemerge = 0, $sub = 0, $sub8 = 0, $tobool1 = 0, $trunc = 0, $trunc$clear = 0, $x$addr$0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = i64_bc2i($x);
 $shr = i64_lshr($0,i64_const(52,0));
 $trunc = i64_trunc($shr)&65535;
 $trunc$clear = $trunc & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $tobool1 = $x != 0.0;
  if ($tobool1) {
   $mul = $x * 1.8446744073709552E+19;
   $call = (+_frexp($mul,$e));
   $1 = load4($e);
   $sub = (($1) + -64)|0;
   $storemerge = $sub;$x$addr$0 = $call;
  } else {
   $storemerge = 0;$x$addr$0 = $x;
  }
  store4($e,$storemerge);
  $retval$0 = $x$addr$0;
  break;
 }
 case 2047:  {
  $retval$0 = $x;
  break;
 }
 default: {
  $shr$tr = i64_trunc($shr);
  $conv = $shr$tr & 2047;
  $sub8 = (($conv) + -1022)|0;
  store4($e,$sub8);
  $and10 = i64_and($0,i64_const(4294967295,2148532223));
  $or = i64_or($and10,i64_const(0,1071644672));
  $2 = i64_bc2d($or);
  $retval$0 = $2;
 }
 }
 return (+$retval$0);
}
function _wcrtomb($s,$wc,$st) {
 $s = $s|0;
 $wc = $wc|0;
 $st = $st|0;
 var $0 = 0, $and = 0, $and19 = 0, $and23 = 0, $and36 = 0, $and41 = 0, $and45 = 0, $call = 0, $cmp = 0, $cmp11 = 0, $cmp2 = 0, $cmp28 = 0, $cmp9 = 0, $conv = 0, $conv16 = 0, $conv21 = 0, $conv25 = 0, $conv33 = 0, $conv38 = 0, $conv43 = 0;
 var $conv47 = 0, $conv5 = 0, $conv7 = 0, $incdec$ptr = 0, $incdec$ptr17 = 0, $incdec$ptr22 = 0, $incdec$ptr34 = 0, $incdec$ptr39 = 0, $incdec$ptr44 = 0, $or = 0, $or$cond = 0, $or15 = 0, $or20 = 0, $or24 = 0, $or32 = 0, $or37 = 0, $or42 = 0, $or46 = 0, $or6 = 0, $retval$0 = 0;
 var $shr1426 = 0, $shr1827 = 0, $shr28 = 0, $shr3123 = 0, $shr3524 = 0, $shr4025 = 0, $sub27 = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $tobool = ($s|0)==(0|0);
 do {
  if ($tobool) {
   $retval$0 = 1;
  } else {
   $cmp = ($wc>>>0)<(128);
   if ($cmp) {
    $conv = $wc&255;
    store1($s,$conv);
    $retval$0 = 1;
    break;
   }
   $cmp2 = ($wc>>>0)<(2048);
   if ($cmp2) {
    $shr28 = $wc >>> 6;
    $or = $shr28 | 192;
    $conv5 = $or&255;
    $incdec$ptr = ((($s)) + 1|0);
    store1($s,$conv5);
    $and = $wc & 63;
    $or6 = $and | 128;
    $conv7 = $or6&255;
    store1($incdec$ptr,$conv7);
    $retval$0 = 2;
    break;
   }
   $cmp9 = ($wc>>>0)<(55296);
   $0 = $wc & -8192;
   $cmp11 = ($0|0)==(57344);
   $or$cond = $cmp9 | $cmp11;
   if ($or$cond) {
    $shr1426 = $wc >>> 12;
    $or15 = $shr1426 | 224;
    $conv16 = $or15&255;
    $incdec$ptr17 = ((($s)) + 1|0);
    store1($s,$conv16);
    $shr1827 = $wc >>> 6;
    $and19 = $shr1827 & 63;
    $or20 = $and19 | 128;
    $conv21 = $or20&255;
    $incdec$ptr22 = ((($s)) + 2|0);
    store1($incdec$ptr17,$conv21);
    $and23 = $wc & 63;
    $or24 = $and23 | 128;
    $conv25 = $or24&255;
    store1($incdec$ptr22,$conv25);
    $retval$0 = 3;
    break;
   }
   $sub27 = (($wc) + -65536)|0;
   $cmp28 = ($sub27>>>0)<(1048576);
   if ($cmp28) {
    $shr3123 = $wc >>> 18;
    $or32 = $shr3123 | 240;
    $conv33 = $or32&255;
    $incdec$ptr34 = ((($s)) + 1|0);
    store1($s,$conv33);
    $shr3524 = $wc >>> 12;
    $and36 = $shr3524 & 63;
    $or37 = $and36 | 128;
    $conv38 = $or37&255;
    $incdec$ptr39 = ((($s)) + 2|0);
    store1($incdec$ptr34,$conv38);
    $shr4025 = $wc >>> 6;
    $and41 = $shr4025 & 63;
    $or42 = $and41 | 128;
    $conv43 = $or42&255;
    $incdec$ptr44 = ((($s)) + 3|0);
    store1($incdec$ptr39,$conv43);
    $and45 = $wc & 63;
    $or46 = $and45 | 128;
    $conv47 = $or46&255;
    store1($incdec$ptr44,$conv47);
    $retval$0 = 4;
    break;
   } else {
    $call = (___errno_location()|0);
    store4($call,84);
    $retval$0 = -1;
    break;
   }
  }
 } while(0);
 return ($retval$0|0);
}
function ___towrite($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $add$ptr = 0, $and = 0, $buf = 0, $buf_size = 0, $conv = 0, $conv3 = 0, $mode = 0, $or = 0, $or5 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $sub = 0, $tobool = 0, $wbase = 0;
 var $wend = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mode = ((($f)) + 74|0);
 $0 = load1($mode);
 $conv = $0 << 24 >> 24;
 $sub = (($conv) + 255)|0;
 $or = $sub | $conv;
 $conv3 = $or&255;
 store1($mode,$conv3);
 $1 = load4($f);
 $and = $1 & 8;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $rend = ((($f)) + 8|0);
  store4($rend,0);
  $rpos = ((($f)) + 4|0);
  store4($rpos,0);
  $buf = ((($f)) + 44|0);
  $2 = load4($buf);
  $wbase = ((($f)) + 28|0);
  store4($wbase,$2);
  $wpos = ((($f)) + 20|0);
  store4($wpos,$2);
  $3 = $2;
  $buf_size = ((($f)) + 48|0);
  $4 = load4($buf_size);
  $add$ptr = (($3) + ($4)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  $retval$0 = 0;
 } else {
  $or5 = $1 | 32;
  store4($f,$or5);
  $retval$0 = -1;
 }
 return ($retval$0|0);
}
function _strlen($s) {
 $s = $s|0;
 var $$pn = 0, $$pn24 = 0, $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $and = 0, $and3 = 0, $incdec$ptr = 0, $incdec$ptr1323 = 0, $incdec$ptr7 = 0, $lnot = 0, $neg = 0, $rem = 0, $rem13 = 0, $retval$0 = 0, $s$addr$0$lcssa = 0;
 var $s$addr$015 = 0, $s$addr$1$lcssa = 0, $sub = 0, $sub$ptr$lhs$cast15 = 0, $tobool = 0, $tobool1 = 0, $tobool10 = 0, $tobool1021 = 0, $tobool14 = 0, $w$0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $s;
 $rem13 = $0 & 3;
 $tobool14 = ($rem13|0)==(0);
 L1: do {
  if ($tobool14) {
   $s$addr$0$lcssa = $s;
   label = 4;
  } else {
   $5 = $0;$s$addr$015 = $s;
   while(1) {
    $1 = load1($s$addr$015);
    $tobool1 = ($1<<24>>24)==(0);
    if ($tobool1) {
     $$pn = $5;
     break L1;
    }
    $incdec$ptr = ((($s$addr$015)) + 1|0);
    $2 = $incdec$ptr;
    $rem = $2 & 3;
    $tobool = ($rem|0)==(0);
    if ($tobool) {
     $s$addr$0$lcssa = $incdec$ptr;
     label = 4;
     break;
    } else {
     $5 = $2;$s$addr$015 = $incdec$ptr;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $w$0 = $s$addr$0$lcssa;
  while(1) {
   $3 = load4($w$0);
   $sub = (($3) + -16843009)|0;
   $neg = $3 & -2139062144;
   $and = $neg ^ -2139062144;
   $and3 = $and & $sub;
   $lnot = ($and3|0)==(0);
   $incdec$ptr7 = ((($w$0)) + 4|0);
   if ($lnot) {
    $w$0 = $incdec$ptr7;
   } else {
    break;
   }
  }
  $4 = $3&255;
  $tobool1021 = ($4<<24>>24)==(0);
  if ($tobool1021) {
   $s$addr$1$lcssa = $w$0;
  } else {
   $$pn24 = $w$0;
   while(1) {
    $incdec$ptr1323 = ((($$pn24)) + 1|0);
    $$pre = load1($incdec$ptr1323);
    $tobool10 = ($$pre<<24>>24)==(0);
    if ($tobool10) {
     $s$addr$1$lcssa = $incdec$ptr1323;
     break;
    } else {
     $$pn24 = $incdec$ptr1323;
    }
   }
  }
  $sub$ptr$lhs$cast15 = $s$addr$1$lcssa;
  $$pn = $sub$ptr$lhs$cast15;
 }
 $retval$0 = (($$pn) - ($0))|0;
 return ($retval$0|0);
}
function _strcmp($l,$r) {
 $l = $l|0;
 $r = $r|0;
 var $$lcssa = 0, $$lcssa6 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $cmp = 0, $cmp7 = 0, $conv5 = 0, $conv6 = 0, $incdec$ptr = 0, $incdec$ptr4 = 0, $l$addr$010 = 0, $or$cond = 0, $or$cond9 = 0, $r$addr$011 = 0, $sub = 0, $tobool = 0, $tobool8 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $0 = load1($l);
 $1 = load1($r);
 $cmp7 = ($0<<24>>24)!=($1<<24>>24);
 $tobool8 = ($0<<24>>24)==(0);
 $or$cond9 = $tobool8 | $cmp7;
 if ($or$cond9) {
  $$lcssa = $1;$$lcssa6 = $0;
 } else {
  $l$addr$010 = $l;$r$addr$011 = $r;
  while(1) {
   $incdec$ptr = ((($l$addr$010)) + 1|0);
   $incdec$ptr4 = ((($r$addr$011)) + 1|0);
   $2 = load1($incdec$ptr);
   $3 = load1($incdec$ptr4);
   $cmp = ($2<<24>>24)!=($3<<24>>24);
   $tobool = ($2<<24>>24)==(0);
   $or$cond = $tobool | $cmp;
   if ($or$cond) {
    $$lcssa = $3;$$lcssa6 = $2;
    break;
   } else {
    $l$addr$010 = $incdec$ptr;$r$addr$011 = $incdec$ptr4;
   }
  }
 }
 $conv5 = $$lcssa6&255;
 $conv6 = $$lcssa&255;
 $sub = (($conv5) - ($conv6))|0;
 return ($sub|0);
}
function ___overflow($f,$_c) {
 $f = $f|0;
 $_c = $_c|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $c = 0, $call = 0, $call13 = 0, $cmp = 0, $cmp14 = 0, $cmp7 = 0, $conv = 0, $conv18 = 0, $conv5 = 0, $conv6 = 0, $incdec$ptr = 0, $lbf = 0, $retval$0 = 0;
 var $tobool = 0, $tobool1 = 0, $wend = 0, $wpos = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $c = sp;
 $conv = $_c&255;
 store1($c,$conv);
 $wend = ((($f)) + 16|0);
 $0 = load4($wend);
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___towrite($f)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   $$pre = load4($wend);
   $2 = $$pre;
   label = 4;
  } else {
   $retval$0 = -1;
  }
 } else {
  $2 = $0;
  label = 4;
 }
 do {
  if ((label|0) == 4) {
   $wpos = ((($f)) + 20|0);
   $1 = load4($wpos);
   $cmp = ($1>>>0)<($2>>>0);
   if ($cmp) {
    $conv5 = $_c & 255;
    $lbf = ((($f)) + 75|0);
    $3 = load1($lbf);
    $conv6 = $3 << 24 >> 24;
    $cmp7 = ($conv5|0)==($conv6|0);
    if (!($cmp7)) {
     $incdec$ptr = ((($1)) + 1|0);
     store4($wpos,$incdec$ptr);
     store1($1,$conv);
     $retval$0 = $conv5;
     break;
    }
   }
   $write = ((($f)) + 36|0);
   $4 = load4($write);
   $call13 = (FUNCTION_TABLE_iiii[$4 & 7]($f,$c,1)|0);
   $cmp14 = ($call13|0)==(1);
   if ($cmp14) {
    $5 = load1($c);
    $conv18 = $5&255;
    $retval$0 = $conv18;
   } else {
    $retval$0 = -1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($retval$0|0);
}
function _fwrite($src,$size,$nmemb,$f) {
 $src = $src|0;
 $size = $size|0;
 $nmemb = $nmemb|0;
 $f = $f|0;
 var $0 = 0, $call = 0, $call1 = 0, $call111 = 0, $call112 = 0, $cmp = 0, $cmp2 = 0, $cond6 = 0, $div = 0, $lock = 0, $mul = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mul = Math_imul($nmemb, $size)|0;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)>(-1);
 if ($cmp) {
  $call = (___lockfile($f)|0);
  $phitmp = ($call|0)==(0);
  $call1 = (___fwritex($src,$mul,$f)|0);
  if ($phitmp) {
   $call112 = $call1;
  } else {
   ___unlockfile($f);
   $call112 = $call1;
  }
 } else {
  $call111 = (___fwritex($src,$mul,$f)|0);
  $call112 = $call111;
 }
 $cmp2 = ($call112|0)==($mul|0);
 if ($cmp2) {
  $cond6 = $nmemb;
 } else {
  $div = (($call112>>>0) / ($size>>>0))&-1;
  $cond6 = $div;
 }
 return ($cond6|0);
}
function _printf($fmt,$varargs) {
 $fmt = $fmt|0;
 $varargs = $varargs|0;
 var $0 = 0, $ap = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ap = sp;
 store4($ap,$varargs);
 $0 = load4(9984);
 $call = (_vfprintf($0,$fmt,$ap)|0);
 STACKTOP = sp;return ($call|0);
}
function _puts($s) {
 $s = $s|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $call = 0, $call1 = 0, $call10 = 0, $cmp = 0, $cmp2 = 0, $cmp3 = 0, $cmp5 = 0, $cond = 0, $incdec$ptr = 0, $lbf = 0, $lock = 0, $phitmp = 0, $sub = 0, $tobool = 0;
 var $wend = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(9984);
 $lock = ((($0)) + 76|0);
 $1 = load4($lock);
 $cmp = ($1|0)>(-1);
 if ($cmp) {
  $call = (___lockfile($0)|0);
  $cond = $call;
 } else {
  $cond = 0;
 }
 $call1 = (_fputs($s,$0)|0);
 $cmp2 = ($call1|0)<(0);
 do {
  if ($cmp2) {
   $5 = 1;
  } else {
   $lbf = ((($0)) + 75|0);
   $2 = load1($lbf);
   $cmp3 = ($2<<24>>24)==(10);
   if (!($cmp3)) {
    $wpos = ((($0)) + 20|0);
    $3 = load4($wpos);
    $wend = ((($0)) + 16|0);
    $4 = load4($wend);
    $cmp5 = ($3>>>0)<($4>>>0);
    if ($cmp5) {
     $incdec$ptr = ((($3)) + 1|0);
     store4($wpos,$incdec$ptr);
     store1($3,10);
     $5 = 0;
     break;
    }
   }
   $call10 = (___overflow($0,10)|0);
   $phitmp = ($call10|0)<(0);
   $5 = $phitmp;
  }
 } while(0);
 $sub = $5 << 31 >> 31;
 $tobool = ($cond|0)==(0);
 if (!($tobool)) {
  ___unlockfile($0);
 }
 return ($sub|0);
}
function _fputs($s,$f) {
 $s = $s|0;
 $f = $f|0;
 var $call = 0, $call1 = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_strlen($s)|0);
 $call1 = (_fwrite($s,$call,1,$f)|0);
 $sub = (($call1) + -1)|0;
 return ($sub|0);
}
function _malloc($bytes) {
 $bytes = $bytes|0;
 var $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i177 = 0, $$pre$i180 = 0, $$pre$i45$i = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i178Z2D = 0, $$pre$phi$i46$iZ2D = 0, $$pre$phi$iZ2D = 0, $$pre$phiZ2D = 0, $$pre5$i$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0;
 var $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0;
 var $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0;
 var $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0;
 var $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0;
 var $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0;
 var $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F$0$i$i = 0, $F104$0 = 0, $F197$0$i = 0, $F224$0$i$i = 0;
 var $F290$0$i = 0, $I252$0$i$i = 0, $I316$0$i = 0, $I57$0$i$i = 0, $K105$0$i$i = 0, $K305$0$i$i = 0, $K373$0$i = 0, $R$1$i = 0, $R$1$i$i = 0, $R$1$i168 = 0, $R$3$i = 0, $R$3$i$i = 0, $R$3$i171 = 0, $RP$1$i = 0, $RP$1$i$i = 0, $RP$1$i167 = 0, $T$0$i = 0, $T$0$i$i = 0, $T$0$i47$i = 0, $add$i = 0;
 var $add$i$i = 0, $add$i146 = 0, $add$i181 = 0, $add$ptr = 0, $add$ptr$i = 0, $add$ptr$i$i = 0, $add$ptr$i$i$i = 0, $add$ptr$i1$i$i = 0, $add$ptr$i16$i = 0, $add$ptr$i161 = 0, $add$ptr$i194 = 0, $add$ptr$i21$i = 0, $add$ptr$i49$i = 0, $add$ptr14$i$i = 0, $add$ptr15$i$i = 0, $add$ptr16$i$i = 0, $add$ptr166 = 0, $add$ptr169 = 0, $add$ptr17$i$i = 0, $add$ptr178 = 0;
 var $add$ptr181$i = 0, $add$ptr182 = 0, $add$ptr189$i = 0, $add$ptr190$i = 0, $add$ptr193 = 0, $add$ptr199 = 0, $add$ptr2$i$i = 0, $add$ptr205$i$i = 0, $add$ptr212$i$i = 0, $add$ptr225$i = 0, $add$ptr227$i = 0, $add$ptr24$i$i = 0, $add$ptr262$i = 0, $add$ptr269$i = 0, $add$ptr273$i = 0, $add$ptr282$i = 0, $add$ptr3$i$i = 0, $add$ptr30$i$i = 0, $add$ptr369$i$i = 0, $add$ptr4$i$i = 0;
 var $add$ptr4$i$i$i = 0, $add$ptr4$i26$i = 0, $add$ptr4$i54$i = 0, $add$ptr441$i = 0, $add$ptr5$i$i = 0, $add$ptr6$i$i = 0, $add$ptr6$i$i$i = 0, $add$ptr6$i58$i = 0, $add$ptr7$i$i = 0, $add$ptr8$i118$i = 0, $add$ptr95 = 0, $add$ptr98 = 0, $add10$i = 0, $add101$i = 0, $add110$i = 0, $add13$i = 0, $add14$i = 0, $add140$i = 0, $add144 = 0, $add150$i = 0;
 var $add17$i = 0, $add17$i184 = 0, $add177$i = 0, $add18$i = 0, $add19$i = 0, $add2 = 0, $add20$i = 0, $add206$i$i = 0, $add212$i = 0, $add215$i = 0, $add22$i = 0, $add246$i = 0, $add26$i$i = 0, $add268$i = 0, $add269$i$i = 0, $add274$i$i = 0, $add278$i$i = 0, $add280$i$i = 0, $add283$i$i = 0, $add337$i = 0;
 var $add342$i = 0, $add346$i = 0, $add348$i = 0, $add351$i = 0, $add46$i = 0, $add50 = 0, $add51$i = 0, $add54 = 0, $add54$i = 0, $add58 = 0, $add62 = 0, $add64 = 0, $add74$i$i = 0, $add77$i = 0, $add78$i = 0, $add79$i$i = 0, $add8 = 0, $add82$i = 0, $add83$i$i = 0, $add85$i$i = 0;
 var $add86$i = 0, $add88$i$i = 0, $add9$i = 0, $add90$i = 0, $add92$i = 0, $and = 0, $and$i = 0, $and$i$i = 0, $and$i$i$i = 0, $and$i143 = 0, $and$i17$i = 0, $and$i22$i = 0, $and$i50$i = 0, $and100$i = 0, $and103$i = 0, $and104$i = 0, $and106 = 0, $and11$add51$i = 0, $and11$i = 0, $and119$i$i = 0;
 var $and12$i = 0, $and13$i = 0, $and13$i$i = 0, $and133$i$i = 0, $and14 = 0, $and145 = 0, $and17$i = 0, $and194$i = 0, $and194$i205 = 0, $and199$i = 0, $and209$i$i = 0, $and21$i = 0, $and21$i149 = 0, $and227$i$i = 0, $and236$i = 0, $and264$i$i = 0, $and268$i$i = 0, $and273$i$i = 0, $and282$i$i = 0, $and29$i = 0;
 var $and292$i = 0, $and295$i$i = 0, $and3$i = 0, $and3$i$i = 0, $and3$i$i$i = 0, $and3$i24$i = 0, $and3$i52$i = 0, $and30$i = 0, $and318$i$i = 0, $and32$i = 0, $and32$i$i = 0, $and33$i$i = 0, $and331$i = 0, $and336$i = 0, $and341$i = 0, $and350$i = 0, $and363$i = 0, $and37$i$i = 0, $and387$i = 0, $and4 = 0;
 var $and40$i$i = 0, $and41 = 0, $and42$i = 0, $and43 = 0, $and46 = 0, $and49 = 0, $and49$i = 0, $and49$i$i = 0, $and53 = 0, $and57 = 0, $and6$i = 0, $and6$i$i = 0, $and6$i10$i = 0, $and6$i27$i = 0, $and61 = 0, $and64$i = 0, $and68$i = 0, $and69$i$i = 0, $and7 = 0, $and73$i = 0;
 var $and73$i$i = 0, $and74 = 0, $and77$i = 0, $and78$i$i = 0, $and8$i = 0, $and80$i = 0, $and81$i = 0, $and85$i = 0, $and87$i$i = 0, $and89$i = 0, $and9$i = 0, $and96$i$i = 0, $arrayidx = 0, $arrayidx$i = 0, $arrayidx$i$i = 0, $arrayidx$i14$i = 0, $arrayidx$i150 = 0, $arrayidx$i37$i = 0, $arrayidx103 = 0, $arrayidx103$i$i = 0;
 var $arrayidx106$i = 0, $arrayidx107$i$i = 0, $arrayidx113$i = 0, $arrayidx113$i159 = 0, $arrayidx121$i = 0, $arrayidx123$i$i = 0, $arrayidx126$i$i = 0, $arrayidx137$i = 0, $arrayidx143$i$i = 0, $arrayidx148$i = 0, $arrayidx151$i = 0, $arrayidx151$i$i = 0, $arrayidx154$i = 0, $arrayidx155$i = 0, $arrayidx161$i = 0, $arrayidx165$i = 0, $arrayidx165$i169 = 0, $arrayidx178$i$i = 0, $arrayidx184$i = 0, $arrayidx184$i$i = 0;
 var $arrayidx195$i$i = 0, $arrayidx196$i = 0, $arrayidx204$i = 0, $arrayidx212$i = 0, $arrayidx223$i$i = 0, $arrayidx228$i = 0, $arrayidx23$i = 0, $arrayidx239$i = 0, $arrayidx245$i = 0, $arrayidx256$i = 0, $arrayidx27$i = 0, $arrayidx287$i$i = 0, $arrayidx289$i = 0, $arrayidx290$i$i = 0, $arrayidx325$i$i = 0, $arrayidx355$i = 0, $arrayidx358$i = 0, $arrayidx394$i = 0, $arrayidx40$i = 0, $arrayidx44$i = 0;
 var $arrayidx61$i = 0, $arrayidx65$i = 0, $arrayidx66 = 0, $arrayidx71$i = 0, $arrayidx75$i = 0, $arrayidx91$i$i = 0, $arrayidx92$i$i = 0, $arrayidx94$i = 0, $arrayidx94$i156 = 0, $arrayidx96$i$i = 0, $bk = 0, $bk$i = 0, $bk$i$i = 0, $bk$i163 = 0, $bk$i35$i = 0, $bk102$i$i = 0, $bk122 = 0, $bk124 = 0, $bk136$i = 0, $bk139$i$i = 0;
 var $bk158$i$i = 0, $bk161$i$i = 0, $bk218$i = 0, $bk220$i = 0, $bk246$i$i = 0, $bk248$i$i = 0, $bk302$i$i = 0, $bk311$i = 0, $bk313$i = 0, $bk338$i$i = 0, $bk357$i$i = 0, $bk360$i$i = 0, $bk370$i = 0, $bk407$i = 0, $bk429$i = 0, $bk43$i$i = 0, $bk432$i = 0, $bk47$i = 0, $bk55$i$i = 0, $bk67$i$i = 0;
 var $bk74$i$i = 0, $bk78 = 0, $bk82$i$i = 0, $br$2$ph$i = 0, $call107$i = 0, $call131$i = 0, $call132$i = 0, $call275$i = 0, $call37$i = 0, $call68$i = 0, $call83$i = 0, $child$i$i = 0, $child166$i$i = 0, $child289$i$i = 0, $child357$i = 0, $cmp = 0, $cmp$i = 0, $cmp$i$i$i = 0, $cmp$i11$i = 0, $cmp$i140 = 0;
 var $cmp$i179 = 0, $cmp$i18$i = 0, $cmp$i2$i$i = 0, $cmp$i23$i = 0, $cmp$i51$i = 0, $cmp$i9$i = 0, $cmp1 = 0, $cmp1$i = 0, $cmp10 = 0, $cmp100$i$i = 0, $cmp102$i = 0, $cmp104$i$i = 0, $cmp105$i = 0, $cmp106$i$i = 0, $cmp107$i = 0, $cmp107$i157 = 0, $cmp108$i = 0, $cmp108$i$i = 0, $cmp112$i$i = 0, $cmp113 = 0;
 var $cmp114$i = 0, $cmp116$i = 0, $cmp118$i = 0, $cmp119$i = 0, $cmp12$i = 0, $cmp120$i$i = 0, $cmp120$i42$i = 0, $cmp121$i = 0, $cmp123$i = 0, $cmp124$i$i = 0, $cmp126$i = 0, $cmp127$i = 0, $cmp128 = 0, $cmp128$i = 0, $cmp128$i$i = 0, $cmp130$i = 0, $cmp133$i = 0, $cmp133$i$i = 0, $cmp133$i197 = 0, $cmp135$i = 0;
 var $cmp137$i = 0, $cmp137$i$i = 0, $cmp137$i198 = 0, $cmp138$i = 0, $cmp139 = 0, $cmp140$i = 0, $cmp141$not$i = 0, $cmp142$i = 0, $cmp144$i$i = 0, $cmp146 = 0, $cmp15 = 0, $cmp15$i = 0, $cmp151$i = 0, $cmp152$i = 0, $cmp153$i$i = 0, $cmp155$i = 0, $cmp156 = 0, $cmp156$i = 0, $cmp156$i$i = 0, $cmp157$i = 0;
 var $cmp159$i = 0, $cmp159$i200 = 0, $cmp16 = 0, $cmp160$i$i = 0, $cmp162 = 0, $cmp162$i = 0, $cmp162$i201 = 0, $cmp166$i = 0, $cmp168$i$i = 0, $cmp171$i = 0, $cmp172$i$i = 0, $cmp174$i = 0, $cmp180$i = 0, $cmp185$i = 0, $cmp185$i$i = 0, $cmp186 = 0, $cmp186$i = 0, $cmp189$i$i = 0, $cmp19$i = 0, $cmp190$i = 0;
 var $cmp191$i = 0, $cmp198$i = 0, $cmp2$i$i = 0, $cmp2$i$i$i = 0, $cmp20$i$i = 0, $cmp203$i = 0, $cmp205$i = 0, $cmp208$i = 0, $cmp209$i = 0, $cmp21$i = 0, $cmp215$i$i = 0, $cmp217$i = 0, $cmp218$i = 0, $cmp221$i = 0, $cmp224$i = 0, $cmp228$i = 0, $cmp229$i = 0, $cmp233$i = 0, $cmp236$i$i = 0, $cmp24$i = 0;
 var $cmp24$i$i = 0, $cmp246$i = 0, $cmp250$i = 0, $cmp254$i$i = 0, $cmp257$i = 0, $cmp258$i$i = 0, $cmp26$i = 0, $cmp265$i = 0, $cmp27$i$i = 0, $cmp28$i = 0, $cmp28$i$i = 0, $cmp284$i = 0, $cmp29 = 0, $cmp3$i$i = 0, $cmp301$i = 0, $cmp306$i$i = 0, $cmp31 = 0, $cmp319$i = 0, $cmp319$i$i = 0, $cmp32$i = 0;
 var $cmp32$i186 = 0, $cmp323$i = 0, $cmp327$i$i = 0, $cmp33$i = 0, $cmp332$i$i = 0, $cmp34$i = 0, $cmp34$i$i = 0, $cmp35$i = 0, $cmp350$i$i = 0, $cmp36$i = 0, $cmp36$i$i = 0, $cmp374$i = 0, $cmp38$i = 0, $cmp38$i$i = 0, $cmp388$i = 0, $cmp396$i = 0, $cmp40$i = 0, $cmp401$i = 0, $cmp41$i$i = 0, $cmp42$i$i = 0;
 var $cmp422$i = 0, $cmp43$i = 0, $cmp44$i$i = 0, $cmp45$i = 0, $cmp45$i155 = 0, $cmp46$i = 0, $cmp46$i$i = 0, $cmp46$i38$i = 0, $cmp48$i = 0, $cmp49$i = 0, $cmp5 = 0, $cmp51$i = 0, $cmp54$i$i = 0, $cmp55$i = 0, $cmp55$i187 = 0, $cmp57$i = 0, $cmp57$i$i = 0, $cmp57$i188 = 0, $cmp59$i$i = 0, $cmp60$i = 0;
 var $cmp60$i$i = 0, $cmp62$i = 0, $cmp63$i = 0, $cmp63$i$i = 0, $cmp65$i = 0, $cmp66$i = 0, $cmp66$i191 = 0, $cmp69$i = 0, $cmp7$i$i = 0, $cmp70 = 0, $cmp72$i = 0, $cmp75$i$i = 0, $cmp76 = 0, $cmp76$i = 0, $cmp79 = 0, $cmp81$i = 0, $cmp81$i$i = 0, $cmp81$i192 = 0, $cmp83$i$i = 0, $cmp85$i = 0;
 var $cmp86$i$i = 0, $cmp89$i = 0, $cmp9$i$i = 0, $cmp90$i = 0, $cmp91$i = 0, $cmp93$i = 0, $cmp95$i = 0, $cmp96$i = 0, $cmp97$i = 0, $cmp97$i$i = 0, $cmp977$i = 0, $cmp99 = 0, $cond = 0, $cond$i = 0, $cond$i$i = 0, $cond$i$i$i = 0, $cond$i19$i = 0, $cond$i25$i = 0, $cond$i53$i = 0, $cond$v$0$i = 0;
 var $cond115$i$i = 0, $cond13$i$i = 0, $cond15$i$i = 0, $cond2$i = 0, $cond2$i$i = 0, $cond3$i = 0, $cond315$i$i = 0, $cond383$i = 0, $cond4$i = 0, $exitcond$i$i = 0, $fd$i = 0, $fd$i$i = 0, $fd$i164 = 0, $fd103$i$i = 0, $fd123 = 0, $fd139$i = 0, $fd140$i$i = 0, $fd148$i$i = 0, $fd160$i$i = 0, $fd219$i = 0;
 var $fd247$i$i = 0, $fd303$i$i = 0, $fd312$i = 0, $fd339$i$i = 0, $fd344$i$i = 0, $fd359$i$i = 0, $fd371$i = 0, $fd408$i = 0, $fd416$i = 0, $fd431$i = 0, $fd50$i = 0, $fd54$i$i = 0, $fd59$i$i = 0, $fd68$pre$phi$i$iZ2D = 0, $fd69 = 0, $fd78$i$i = 0, $fd85$i$i = 0, $fd9 = 0, $head = 0, $head$i = 0;
 var $head$i$i = 0, $head$i$i$i = 0, $head$i154 = 0, $head$i20$i = 0, $head$i31$i = 0, $head$i57$i = 0, $head118$i$i = 0, $head168 = 0, $head173 = 0, $head177 = 0, $head179 = 0, $head179$i = 0, $head182$i = 0, $head187$i = 0, $head189$i = 0, $head195 = 0, $head198 = 0, $head208$i$i = 0, $head211$i$i = 0, $head23$i$i = 0;
 var $head25 = 0, $head265$i = 0, $head268$i = 0, $head271$i = 0, $head274$i = 0, $head279$i = 0, $head281$i = 0, $head29$i = 0, $head29$i$i = 0, $head317$i$i = 0, $head32$i$i = 0, $head34$i$i = 0, $head386$i = 0, $head7$i$i = 0, $head7$i$i$i = 0, $head7$i59$i = 0, $head94 = 0, $head97 = 0, $head99$i = 0, $i$01$i$i = 0;
 var $idx$0$i = 0, $inc$i$i = 0, $index$i = 0, $index$i$i = 0, $index$i172 = 0, $index$i43$i = 0, $index288$i$i = 0, $index356$i = 0, $magic$i$i = 0, $nb$0 = 0, $neg = 0, $neg$i = 0, $neg$i$i = 0, $neg$i173 = 0, $neg$i183 = 0, $neg103$i = 0, $neg13 = 0, $neg132$i$i = 0, $neg48$i = 0, $neg73 = 0;
 var $next$i = 0, $next$i$i = 0, $next$i$i$i = 0, $next231$i = 0, $not$cmp150$i$i = 0, $not$cmp346$i$i = 0, $not$cmp418$i = 0, $oldfirst$0$i$i = 0, $or$cond$i = 0, $or$cond$i189 = 0, $or$cond1$i = 0, $or$cond1$i185 = 0, $or$cond2$i = 0, $or$cond3$i = 0, $or$cond4$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond8$i = 0, $or$cond95$i = 0, $or$i = 0;
 var $or$i$i = 0, $or$i$i$i = 0, $or$i196 = 0, $or$i56$i = 0, $or101$i$i = 0, $or110 = 0, $or167 = 0, $or172 = 0, $or176 = 0, $or178$i = 0, $or180 = 0, $or183$i = 0, $or186$i = 0, $or188$i = 0, $or19$i$i = 0, $or194 = 0, $or197 = 0, $or204$i = 0, $or210$i$i = 0, $or22$i$i = 0;
 var $or23 = 0, $or232$i$i = 0, $or26 = 0, $or264$i = 0, $or267$i = 0, $or270$i = 0, $or275$i = 0, $or278$i = 0, $or28$i$i = 0, $or280$i = 0, $or297$i = 0, $or300$i$i = 0, $or33$i$i = 0, $or368$i = 0, $or40 = 0, $or44$i$i = 0, $or93 = 0, $or96 = 0, $p$0$i$i = 0, $parent$i = 0;
 var $parent$i$i = 0, $parent$i162 = 0, $parent$i40$i = 0, $parent135$i = 0, $parent138$i$i = 0, $parent149$i = 0, $parent162$i$i = 0, $parent165$i$i = 0, $parent166$i = 0, $parent179$i$i = 0, $parent196$i$i = 0, $parent226$i = 0, $parent240$i = 0, $parent257$i = 0, $parent301$i$i = 0, $parent337$i$i = 0, $parent361$i$i = 0, $parent369$i = 0, $parent406$i = 0, $parent433$i = 0;
 var $qsize$0$i$i = 0, $retval$0 = 0, $rsize$0$i = 0, $rsize$0$i152 = 0, $rsize$1$i = 0, $rsize$3$i = 0, $rsize$4$lcssa$i = 0, $rsize$49$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sflags193$i = 0, $sflags235$i = 0, $shl = 0, $shl$i = 0, $shl$i$i = 0, $shl$i13$i = 0, $shl$i144 = 0, $shl$i36$i = 0, $shl102 = 0, $shl105 = 0;
 var $shl116$i$i = 0, $shl12 = 0, $shl127$i$i = 0, $shl131$i$i = 0, $shl15$i = 0, $shl18$i = 0, $shl192$i = 0, $shl195$i = 0, $shl198$i = 0, $shl22 = 0, $shl221$i$i = 0, $shl226$i$i = 0, $shl265$i$i = 0, $shl270$i$i = 0, $shl276$i$i = 0, $shl279$i$i = 0, $shl288$i = 0, $shl291$i = 0, $shl294$i$i = 0, $shl31$i = 0;
 var $shl316$i$i = 0, $shl326$i$i = 0, $shl333$i = 0, $shl338$i = 0, $shl344$i = 0, $shl347$i = 0, $shl35 = 0, $shl362$i = 0, $shl37 = 0, $shl384$i = 0, $shl39$i$i = 0, $shl395$i = 0, $shl48$i$i = 0, $shl52$i = 0, $shl60$i = 0, $shl65 = 0, $shl70$i$i = 0, $shl72 = 0, $shl75$i$i = 0, $shl81$i$i = 0;
 var $shl84$i$i = 0, $shl9$i = 0, $shl90 = 0, $shl95$i$i = 0, $shr = 0, $shr$i = 0, $shr$i$i = 0, $shr$i139 = 0, $shr$i34$i = 0, $shr101 = 0, $shr11$i = 0, $shr11$i147 = 0, $shr110$i$i = 0, $shr12$i = 0, $shr123$i$i = 0, $shr15$i = 0, $shr16$i = 0, $shr16$i148 = 0, $shr19$i = 0, $shr194$i = 0;
 var $shr20$i = 0, $shr214$i$i = 0, $shr253$i$i = 0, $shr263$i$i = 0, $shr267$i$i = 0, $shr27$i = 0, $shr272$i$i = 0, $shr277$i$i = 0, $shr281$i$i = 0, $shr283$i = 0, $shr3 = 0, $shr310$i$i = 0, $shr318$i = 0, $shr322$i$i = 0, $shr330$i = 0, $shr335$i = 0, $shr340$i = 0, $shr345$i = 0, $shr349$i = 0, $shr378$i = 0;
 var $shr391$i = 0, $shr4$i = 0, $shr41$i = 0, $shr45 = 0, $shr47 = 0, $shr48 = 0, $shr5$i = 0, $shr5$i142 = 0, $shr51 = 0, $shr52 = 0, $shr55 = 0, $shr56 = 0, $shr58$i$i = 0, $shr59 = 0, $shr60 = 0, $shr63 = 0, $shr68$i$i = 0, $shr7$i = 0, $shr7$i145 = 0, $shr72$i = 0;
 var $shr72$i$i = 0, $shr75$i = 0, $shr76$i = 0, $shr77$i$i = 0, $shr79$i = 0, $shr8$i = 0, $shr80$i = 0, $shr82$i$i = 0, $shr83$i = 0, $shr84$i = 0, $shr86$i$i = 0, $shr87$i = 0, $shr88$i = 0, $shr91$i = 0, $size$i$i = 0, $size$i$i$i = 0, $size188$i = 0, $size245$i = 0, $sizebits$0$i = 0, $sizebits$0$shl52$i = 0;
 var $sp$0$i$i = 0, $sp$0$i$i$i = 0, $sp$0104$i = 0, $sp$1103$i = 0, $ssize$2$ph$i = 0, $ssize$5$i = 0, $sub = 0, $sub$i = 0, $sub$i138 = 0, $sub$i182 = 0, $sub$ptr$lhs$cast$i = 0, $sub$ptr$lhs$cast$i$i = 0, $sub$ptr$lhs$cast$i28$i = 0, $sub$ptr$rhs$cast$i = 0, $sub$ptr$rhs$cast$i$i = 0, $sub$ptr$rhs$cast$i29$i = 0, $sub$ptr$sub$i = 0, $sub$ptr$sub$i$i = 0, $sub$ptr$sub$i30$i = 0, $sub10$i = 0;
 var $sub101$i = 0, $sub101$rsize$4$i = 0, $sub112$i = 0, $sub113$i$i = 0, $sub118$i = 0, $sub14$i = 0, $sub16$i$i = 0, $sub160 = 0, $sub172$i = 0, $sub18$i$i = 0, $sub190 = 0, $sub2$i = 0, $sub22$i = 0, $sub260$i = 0, $sub262$i$i = 0, $sub266$i$i = 0, $sub271$i$i = 0, $sub275$i$i = 0, $sub30$i = 0, $sub31$i = 0;
 var $sub31$rsize$0$i = 0, $sub313$i$i = 0, $sub329$i = 0, $sub33$i = 0, $sub334$i = 0, $sub339$i = 0, $sub343$i = 0, $sub381$i = 0, $sub4$i = 0, $sub41$i = 0, $sub42 = 0, $sub44 = 0, $sub5$i$i = 0, $sub5$i$i$i = 0, $sub5$i55$i = 0, $sub50$i = 0, $sub6$i = 0, $sub63$i = 0, $sub67$i = 0, $sub67$i$i = 0;
 var $sub70$i = 0, $sub71$i$i = 0, $sub76$i$i = 0, $sub80$i$i = 0, $sub91 = 0, $sub99$i = 0, $t$0$i = 0, $t$0$i151 = 0, $t$2$i = 0, $t$4$ph$i = 0, $t$4$v$4$i = 0, $t$48$i = 0, $tbase$793$i = 0, $tobool$i$i = 0, $tobool107 = 0, $tobool195$i = 0, $tobool200$i = 0, $tobool228$i$i = 0, $tobool237$i = 0, $tobool293$i = 0;
 var $tobool296$i$i = 0, $tobool30$i = 0, $tobool364$i = 0, $tobool97$i$i = 0, $tsize$792$i = 0, $v$0$i = 0, $v$0$i153 = 0, $v$1$i = 0, $v$3$i = 0, $v$4$lcssa$i = 0, $v$410$i = 0, $xor$i$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $magic$i$i = sp;
 $cmp = ($bytes>>>0)<(245);
 do {
  if ($cmp) {
   $cmp1 = ($bytes>>>0)<(11);
   $add2 = (($bytes) + 11)|0;
   $and = $add2 & -8;
   $cond = $cmp1 ? 16 : $and;
   $shr = $cond >>> 3;
   $0 = load4(17808);
   $shr3 = $0 >>> $shr;
   $and4 = $shr3 & 3;
   $cmp5 = ($and4|0)==(0);
   if (!($cmp5)) {
    $neg = $shr3 & 1;
    $and7 = $neg ^ 1;
    $add8 = (($and7) + ($shr))|0;
    $shl = $add8 << 1;
    $arrayidx = (17848 + ($shl<<2)|0);
    $1 = ((($arrayidx)) + 8|0);
    $2 = load4($1);
    $fd9 = ((($2)) + 8|0);
    $3 = load4($fd9);
    $cmp10 = ($arrayidx|0)==($3|0);
    do {
     if ($cmp10) {
      $shl12 = 1 << $add8;
      $neg13 = $shl12 ^ -1;
      $and14 = $0 & $neg13;
      store4(17808,$and14);
     } else {
      $4 = load4((17824));
      $cmp15 = ($3>>>0)<($4>>>0);
      if ($cmp15) {
       _abort();
       // unreachable;
      }
      $bk = ((($3)) + 12|0);
      $5 = load4($bk);
      $cmp16 = ($5|0)==($2|0);
      if ($cmp16) {
       store4($bk,$arrayidx);
       store4($1,$3);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $shl22 = $add8 << 3;
    $or23 = $shl22 | 3;
    $head = ((($2)) + 4|0);
    store4($head,$or23);
    $add$ptr = (($2) + ($shl22)|0);
    $head25 = ((($add$ptr)) + 4|0);
    $6 = load4($head25);
    $or26 = $6 | 1;
    store4($head25,$or26);
    $retval$0 = $fd9;
    STACKTOP = sp;return ($retval$0|0);
   }
   $7 = load4((17816));
   $cmp29 = ($cond>>>0)>($7>>>0);
   if ($cmp29) {
    $cmp31 = ($shr3|0)==(0);
    if (!($cmp31)) {
     $shl35 = $shr3 << $shr;
     $shl37 = 2 << $shr;
     $sub = (0 - ($shl37))|0;
     $or40 = $shl37 | $sub;
     $and41 = $shl35 & $or40;
     $sub42 = (0 - ($and41))|0;
     $and43 = $and41 & $sub42;
     $sub44 = (($and43) + -1)|0;
     $shr45 = $sub44 >>> 12;
     $and46 = $shr45 & 16;
     $shr47 = $sub44 >>> $and46;
     $shr48 = $shr47 >>> 5;
     $and49 = $shr48 & 8;
     $add50 = $and49 | $and46;
     $shr51 = $shr47 >>> $and49;
     $shr52 = $shr51 >>> 2;
     $and53 = $shr52 & 4;
     $add54 = $add50 | $and53;
     $shr55 = $shr51 >>> $and53;
     $shr56 = $shr55 >>> 1;
     $and57 = $shr56 & 2;
     $add58 = $add54 | $and57;
     $shr59 = $shr55 >>> $and57;
     $shr60 = $shr59 >>> 1;
     $and61 = $shr60 & 1;
     $add62 = $add58 | $and61;
     $shr63 = $shr59 >>> $and61;
     $add64 = (($add62) + ($shr63))|0;
     $shl65 = $add64 << 1;
     $arrayidx66 = (17848 + ($shl65<<2)|0);
     $8 = ((($arrayidx66)) + 8|0);
     $9 = load4($8);
     $fd69 = ((($9)) + 8|0);
     $10 = load4($fd69);
     $cmp70 = ($arrayidx66|0)==($10|0);
     do {
      if ($cmp70) {
       $shl72 = 1 << $add64;
       $neg73 = $shl72 ^ -1;
       $and74 = $0 & $neg73;
       store4(17808,$and74);
       $14 = $and74;
      } else {
       $11 = load4((17824));
       $cmp76 = ($10>>>0)<($11>>>0);
       if ($cmp76) {
        _abort();
        // unreachable;
       }
       $bk78 = ((($10)) + 12|0);
       $12 = load4($bk78);
       $cmp79 = ($12|0)==($9|0);
       if ($cmp79) {
        store4($bk78,$arrayidx66);
        store4($8,$10);
        $14 = $0;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $shl90 = $add64 << 3;
     $sub91 = (($shl90) - ($cond))|0;
     $or93 = $cond | 3;
     $head94 = ((($9)) + 4|0);
     store4($head94,$or93);
     $add$ptr95 = (($9) + ($cond)|0);
     $or96 = $sub91 | 1;
     $head97 = ((($add$ptr95)) + 4|0);
     store4($head97,$or96);
     $add$ptr98 = (($add$ptr95) + ($sub91)|0);
     store4($add$ptr98,$sub91);
     $cmp99 = ($7|0)==(0);
     if (!($cmp99)) {
      $13 = load4((17828));
      $shr101 = $7 >>> 3;
      $shl102 = $shr101 << 1;
      $arrayidx103 = (17848 + ($shl102<<2)|0);
      $shl105 = 1 << $shr101;
      $and106 = $14 & $shl105;
      $tobool107 = ($and106|0)==(0);
      if ($tobool107) {
       $or110 = $14 | $shl105;
       store4(17808,$or110);
       $$pre = ((($arrayidx103)) + 8|0);
       $$pre$phiZ2D = $$pre;$F104$0 = $arrayidx103;
      } else {
       $15 = ((($arrayidx103)) + 8|0);
       $16 = load4($15);
       $17 = load4((17824));
       $cmp113 = ($16>>>0)<($17>>>0);
       if ($cmp113) {
        _abort();
        // unreachable;
       } else {
        $$pre$phiZ2D = $15;$F104$0 = $16;
       }
      }
      store4($$pre$phiZ2D,$13);
      $bk122 = ((($F104$0)) + 12|0);
      store4($bk122,$13);
      $fd123 = ((($13)) + 8|0);
      store4($fd123,$F104$0);
      $bk124 = ((($13)) + 12|0);
      store4($bk124,$arrayidx103);
     }
     store4((17816),$sub91);
     store4((17828),$add$ptr95);
     $retval$0 = $fd69;
     STACKTOP = sp;return ($retval$0|0);
    }
    $18 = load4((17812));
    $cmp128 = ($18|0)==(0);
    if ($cmp128) {
     $nb$0 = $cond;
    } else {
     $sub$i = (0 - ($18))|0;
     $and$i = $18 & $sub$i;
     $sub2$i = (($and$i) + -1)|0;
     $shr$i = $sub2$i >>> 12;
     $and3$i = $shr$i & 16;
     $shr4$i = $sub2$i >>> $and3$i;
     $shr5$i = $shr4$i >>> 5;
     $and6$i = $shr5$i & 8;
     $add$i = $and6$i | $and3$i;
     $shr7$i = $shr4$i >>> $and6$i;
     $shr8$i = $shr7$i >>> 2;
     $and9$i = $shr8$i & 4;
     $add10$i = $add$i | $and9$i;
     $shr11$i = $shr7$i >>> $and9$i;
     $shr12$i = $shr11$i >>> 1;
     $and13$i = $shr12$i & 2;
     $add14$i = $add10$i | $and13$i;
     $shr15$i = $shr11$i >>> $and13$i;
     $shr16$i = $shr15$i >>> 1;
     $and17$i = $shr16$i & 1;
     $add18$i = $add14$i | $and17$i;
     $shr19$i = $shr15$i >>> $and17$i;
     $add20$i = (($add18$i) + ($shr19$i))|0;
     $arrayidx$i = (18112 + ($add20$i<<2)|0);
     $19 = load4($arrayidx$i);
     $head$i = ((($19)) + 4|0);
     $20 = load4($head$i);
     $and21$i = $20 & -8;
     $sub22$i = (($and21$i) - ($cond))|0;
     $rsize$0$i = $sub22$i;$t$0$i = $19;$v$0$i = $19;
     while(1) {
      $arrayidx23$i = ((($t$0$i)) + 16|0);
      $21 = load4($arrayidx23$i);
      $cmp$i = ($21|0)==(0|0);
      if ($cmp$i) {
       $arrayidx27$i = ((($t$0$i)) + 20|0);
       $22 = load4($arrayidx27$i);
       $cmp28$i = ($22|0)==(0|0);
       if ($cmp28$i) {
        break;
       } else {
        $cond4$i = $22;
       }
      } else {
       $cond4$i = $21;
      }
      $head29$i = ((($cond4$i)) + 4|0);
      $23 = load4($head29$i);
      $and30$i = $23 & -8;
      $sub31$i = (($and30$i) - ($cond))|0;
      $cmp32$i = ($sub31$i>>>0)<($rsize$0$i>>>0);
      $sub31$rsize$0$i = $cmp32$i ? $sub31$i : $rsize$0$i;
      $cond$v$0$i = $cmp32$i ? $cond4$i : $v$0$i;
      $rsize$0$i = $sub31$rsize$0$i;$t$0$i = $cond4$i;$v$0$i = $cond$v$0$i;
     }
     $24 = load4((17824));
     $cmp33$i = ($v$0$i>>>0)<($24>>>0);
     if ($cmp33$i) {
      _abort();
      // unreachable;
     }
     $add$ptr$i = (($v$0$i) + ($cond)|0);
     $cmp35$i = ($v$0$i>>>0)<($add$ptr$i>>>0);
     if (!($cmp35$i)) {
      _abort();
      // unreachable;
     }
     $parent$i = ((($v$0$i)) + 24|0);
     $25 = load4($parent$i);
     $bk$i = ((($v$0$i)) + 12|0);
     $26 = load4($bk$i);
     $cmp40$i = ($26|0)==($v$0$i|0);
     do {
      if ($cmp40$i) {
       $arrayidx61$i = ((($v$0$i)) + 20|0);
       $30 = load4($arrayidx61$i);
       $cmp62$i = ($30|0)==(0|0);
       if ($cmp62$i) {
        $arrayidx65$i = ((($v$0$i)) + 16|0);
        $31 = load4($arrayidx65$i);
        $cmp66$i = ($31|0)==(0|0);
        if ($cmp66$i) {
         $R$3$i = 0;
         break;
        } else {
         $R$1$i = $31;$RP$1$i = $arrayidx65$i;
        }
       } else {
        $R$1$i = $30;$RP$1$i = $arrayidx61$i;
       }
       while(1) {
        $arrayidx71$i = ((($R$1$i)) + 20|0);
        $32 = load4($arrayidx71$i);
        $cmp72$i = ($32|0)==(0|0);
        if (!($cmp72$i)) {
         $R$1$i = $32;$RP$1$i = $arrayidx71$i;
         continue;
        }
        $arrayidx75$i = ((($R$1$i)) + 16|0);
        $33 = load4($arrayidx75$i);
        $cmp76$i = ($33|0)==(0|0);
        if ($cmp76$i) {
         break;
        } else {
         $R$1$i = $33;$RP$1$i = $arrayidx75$i;
        }
       }
       $cmp81$i = ($RP$1$i>>>0)<($24>>>0);
       if ($cmp81$i) {
        _abort();
        // unreachable;
       } else {
        store4($RP$1$i,0);
        $R$3$i = $R$1$i;
        break;
       }
      } else {
       $fd$i = ((($v$0$i)) + 8|0);
       $27 = load4($fd$i);
       $cmp45$i = ($27>>>0)<($24>>>0);
       if ($cmp45$i) {
        _abort();
        // unreachable;
       }
       $bk47$i = ((($27)) + 12|0);
       $28 = load4($bk47$i);
       $cmp48$i = ($28|0)==($v$0$i|0);
       if (!($cmp48$i)) {
        _abort();
        // unreachable;
       }
       $fd50$i = ((($26)) + 8|0);
       $29 = load4($fd50$i);
       $cmp51$i = ($29|0)==($v$0$i|0);
       if ($cmp51$i) {
        store4($bk47$i,$26);
        store4($fd50$i,$27);
        $R$3$i = $26;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $cmp90$i = ($25|0)==(0|0);
     do {
      if (!($cmp90$i)) {
       $index$i = ((($v$0$i)) + 28|0);
       $34 = load4($index$i);
       $arrayidx94$i = (18112 + ($34<<2)|0);
       $35 = load4($arrayidx94$i);
       $cmp95$i = ($v$0$i|0)==($35|0);
       if ($cmp95$i) {
        store4($arrayidx94$i,$R$3$i);
        $cond2$i = ($R$3$i|0)==(0|0);
        if ($cond2$i) {
         $shl$i = 1 << $34;
         $neg$i = $shl$i ^ -1;
         $and103$i = $18 & $neg$i;
         store4((17812),$and103$i);
         break;
        }
       } else {
        $36 = load4((17824));
        $cmp107$i = ($25>>>0)<($36>>>0);
        if ($cmp107$i) {
         _abort();
         // unreachable;
        }
        $arrayidx113$i = ((($25)) + 16|0);
        $37 = load4($arrayidx113$i);
        $cmp114$i = ($37|0)==($v$0$i|0);
        if ($cmp114$i) {
         store4($arrayidx113$i,$R$3$i);
        } else {
         $arrayidx121$i = ((($25)) + 20|0);
         store4($arrayidx121$i,$R$3$i);
        }
        $cmp126$i = ($R$3$i|0)==(0|0);
        if ($cmp126$i) {
         break;
        }
       }
       $38 = load4((17824));
       $cmp130$i = ($R$3$i>>>0)<($38>>>0);
       if ($cmp130$i) {
        _abort();
        // unreachable;
       }
       $parent135$i = ((($R$3$i)) + 24|0);
       store4($parent135$i,$25);
       $arrayidx137$i = ((($v$0$i)) + 16|0);
       $39 = load4($arrayidx137$i);
       $cmp138$i = ($39|0)==(0|0);
       do {
        if (!($cmp138$i)) {
         $cmp142$i = ($39>>>0)<($38>>>0);
         if ($cmp142$i) {
          _abort();
          // unreachable;
         } else {
          $arrayidx148$i = ((($R$3$i)) + 16|0);
          store4($arrayidx148$i,$39);
          $parent149$i = ((($39)) + 24|0);
          store4($parent149$i,$R$3$i);
          break;
         }
        }
       } while(0);
       $arrayidx154$i = ((($v$0$i)) + 20|0);
       $40 = load4($arrayidx154$i);
       $cmp155$i = ($40|0)==(0|0);
       if (!($cmp155$i)) {
        $41 = load4((17824));
        $cmp159$i = ($40>>>0)<($41>>>0);
        if ($cmp159$i) {
         _abort();
         // unreachable;
        } else {
         $arrayidx165$i = ((($R$3$i)) + 20|0);
         store4($arrayidx165$i,$40);
         $parent166$i = ((($40)) + 24|0);
         store4($parent166$i,$R$3$i);
         break;
        }
       }
      }
     } while(0);
     $cmp174$i = ($rsize$0$i>>>0)<(16);
     if ($cmp174$i) {
      $add177$i = (($rsize$0$i) + ($cond))|0;
      $or178$i = $add177$i | 3;
      $head179$i = ((($v$0$i)) + 4|0);
      store4($head179$i,$or178$i);
      $add$ptr181$i = (($v$0$i) + ($add177$i)|0);
      $head182$i = ((($add$ptr181$i)) + 4|0);
      $42 = load4($head182$i);
      $or183$i = $42 | 1;
      store4($head182$i,$or183$i);
     } else {
      $or186$i = $cond | 3;
      $head187$i = ((($v$0$i)) + 4|0);
      store4($head187$i,$or186$i);
      $or188$i = $rsize$0$i | 1;
      $head189$i = ((($add$ptr$i)) + 4|0);
      store4($head189$i,$or188$i);
      $add$ptr190$i = (($add$ptr$i) + ($rsize$0$i)|0);
      store4($add$ptr190$i,$rsize$0$i);
      $cmp191$i = ($7|0)==(0);
      if (!($cmp191$i)) {
       $43 = load4((17828));
       $shr194$i = $7 >>> 3;
       $shl195$i = $shr194$i << 1;
       $arrayidx196$i = (17848 + ($shl195$i<<2)|0);
       $shl198$i = 1 << $shr194$i;
       $and199$i = $0 & $shl198$i;
       $tobool200$i = ($and199$i|0)==(0);
       if ($tobool200$i) {
        $or204$i = $0 | $shl198$i;
        store4(17808,$or204$i);
        $$pre$i = ((($arrayidx196$i)) + 8|0);
        $$pre$phi$iZ2D = $$pre$i;$F197$0$i = $arrayidx196$i;
       } else {
        $44 = ((($arrayidx196$i)) + 8|0);
        $45 = load4($44);
        $46 = load4((17824));
        $cmp208$i = ($45>>>0)<($46>>>0);
        if ($cmp208$i) {
         _abort();
         // unreachable;
        } else {
         $$pre$phi$iZ2D = $44;$F197$0$i = $45;
        }
       }
       store4($$pre$phi$iZ2D,$43);
       $bk218$i = ((($F197$0$i)) + 12|0);
       store4($bk218$i,$43);
       $fd219$i = ((($43)) + 8|0);
       store4($fd219$i,$F197$0$i);
       $bk220$i = ((($43)) + 12|0);
       store4($bk220$i,$arrayidx196$i);
      }
      store4((17816),$rsize$0$i);
      store4((17828),$add$ptr$i);
     }
     $add$ptr225$i = ((($v$0$i)) + 8|0);
     $retval$0 = $add$ptr225$i;
     STACKTOP = sp;return ($retval$0|0);
    }
   } else {
    $nb$0 = $cond;
   }
  } else {
   $cmp139 = ($bytes>>>0)>(4294967231);
   if ($cmp139) {
    $nb$0 = -1;
   } else {
    $add144 = (($bytes) + 11)|0;
    $and145 = $add144 & -8;
    $47 = load4((17812));
    $cmp146 = ($47|0)==(0);
    if ($cmp146) {
     $nb$0 = $and145;
    } else {
     $sub$i138 = (0 - ($and145))|0;
     $shr$i139 = $add144 >>> 8;
     $cmp$i140 = ($shr$i139|0)==(0);
     if ($cmp$i140) {
      $idx$0$i = 0;
     } else {
      $cmp1$i = ($and145>>>0)>(16777215);
      if ($cmp1$i) {
       $idx$0$i = 31;
      } else {
       $sub4$i = (($shr$i139) + 1048320)|0;
       $shr5$i142 = $sub4$i >>> 16;
       $and$i143 = $shr5$i142 & 8;
       $shl$i144 = $shr$i139 << $and$i143;
       $sub6$i = (($shl$i144) + 520192)|0;
       $shr7$i145 = $sub6$i >>> 16;
       $and8$i = $shr7$i145 & 4;
       $add$i146 = $and8$i | $and$i143;
       $shl9$i = $shl$i144 << $and8$i;
       $sub10$i = (($shl9$i) + 245760)|0;
       $shr11$i147 = $sub10$i >>> 16;
       $and12$i = $shr11$i147 & 2;
       $add13$i = $add$i146 | $and12$i;
       $sub14$i = (14 - ($add13$i))|0;
       $shl15$i = $shl9$i << $and12$i;
       $shr16$i148 = $shl15$i >>> 15;
       $add17$i = (($sub14$i) + ($shr16$i148))|0;
       $shl18$i = $add17$i << 1;
       $add19$i = (($add17$i) + 7)|0;
       $shr20$i = $and145 >>> $add19$i;
       $and21$i149 = $shr20$i & 1;
       $add22$i = $and21$i149 | $shl18$i;
       $idx$0$i = $add22$i;
      }
     }
     $arrayidx$i150 = (18112 + ($idx$0$i<<2)|0);
     $48 = load4($arrayidx$i150);
     $cmp24$i = ($48|0)==(0|0);
     L123: do {
      if ($cmp24$i) {
       $rsize$3$i = $sub$i138;$t$2$i = 0;$v$3$i = 0;
       label = 86;
      } else {
       $cmp26$i = ($idx$0$i|0)==(31);
       $shr27$i = $idx$0$i >>> 1;
       $sub30$i = (25 - ($shr27$i))|0;
       $cond$i = $cmp26$i ? 0 : $sub30$i;
       $shl31$i = $and145 << $cond$i;
       $rsize$0$i152 = $sub$i138;$rst$0$i = 0;$sizebits$0$i = $shl31$i;$t$0$i151 = $48;$v$0$i153 = 0;
       while(1) {
        $head$i154 = ((($t$0$i151)) + 4|0);
        $49 = load4($head$i154);
        $and32$i = $49 & -8;
        $sub33$i = (($and32$i) - ($and145))|0;
        $cmp34$i = ($sub33$i>>>0)<($rsize$0$i152>>>0);
        if ($cmp34$i) {
         $cmp36$i = ($sub33$i|0)==(0);
         if ($cmp36$i) {
          $rsize$49$i = 0;$t$48$i = $t$0$i151;$v$410$i = $t$0$i151;
          label = 90;
          break L123;
         } else {
          $rsize$1$i = $sub33$i;$v$1$i = $t$0$i151;
         }
        } else {
         $rsize$1$i = $rsize$0$i152;$v$1$i = $v$0$i153;
        }
        $arrayidx40$i = ((($t$0$i151)) + 20|0);
        $50 = load4($arrayidx40$i);
        $shr41$i = $sizebits$0$i >>> 31;
        $arrayidx44$i = (((($t$0$i151)) + 16|0) + ($shr41$i<<2)|0);
        $51 = load4($arrayidx44$i);
        $cmp45$i155 = ($50|0)==(0|0);
        $cmp46$i = ($50|0)==($51|0);
        $or$cond1$i = $cmp45$i155 | $cmp46$i;
        $rst$1$i = $or$cond1$i ? $rst$0$i : $50;
        $cmp49$i = ($51|0)==(0|0);
        $52 = $cmp49$i&1;
        $shl52$i = $52 ^ 1;
        $sizebits$0$shl52$i = $sizebits$0$i << $shl52$i;
        if ($cmp49$i) {
         $rsize$3$i = $rsize$1$i;$t$2$i = $rst$1$i;$v$3$i = $v$1$i;
         label = 86;
         break;
        } else {
         $rsize$0$i152 = $rsize$1$i;$rst$0$i = $rst$1$i;$sizebits$0$i = $sizebits$0$shl52$i;$t$0$i151 = $51;$v$0$i153 = $v$1$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 86) {
      $cmp55$i = ($t$2$i|0)==(0|0);
      $cmp57$i = ($v$3$i|0)==(0|0);
      $or$cond$i = $cmp55$i & $cmp57$i;
      if ($or$cond$i) {
       $shl60$i = 2 << $idx$0$i;
       $sub63$i = (0 - ($shl60$i))|0;
       $or$i = $shl60$i | $sub63$i;
       $and64$i = $47 & $or$i;
       $cmp65$i = ($and64$i|0)==(0);
       if ($cmp65$i) {
        $nb$0 = $and145;
        break;
       }
       $sub67$i = (0 - ($and64$i))|0;
       $and68$i = $and64$i & $sub67$i;
       $sub70$i = (($and68$i) + -1)|0;
       $shr72$i = $sub70$i >>> 12;
       $and73$i = $shr72$i & 16;
       $shr75$i = $sub70$i >>> $and73$i;
       $shr76$i = $shr75$i >>> 5;
       $and77$i = $shr76$i & 8;
       $add78$i = $and77$i | $and73$i;
       $shr79$i = $shr75$i >>> $and77$i;
       $shr80$i = $shr79$i >>> 2;
       $and81$i = $shr80$i & 4;
       $add82$i = $add78$i | $and81$i;
       $shr83$i = $shr79$i >>> $and81$i;
       $shr84$i = $shr83$i >>> 1;
       $and85$i = $shr84$i & 2;
       $add86$i = $add82$i | $and85$i;
       $shr87$i = $shr83$i >>> $and85$i;
       $shr88$i = $shr87$i >>> 1;
       $and89$i = $shr88$i & 1;
       $add90$i = $add86$i | $and89$i;
       $shr91$i = $shr87$i >>> $and89$i;
       $add92$i = (($add90$i) + ($shr91$i))|0;
       $arrayidx94$i156 = (18112 + ($add92$i<<2)|0);
       $53 = load4($arrayidx94$i156);
       $t$4$ph$i = $53;
      } else {
       $t$4$ph$i = $t$2$i;
      }
      $cmp977$i = ($t$4$ph$i|0)==(0|0);
      if ($cmp977$i) {
       $rsize$4$lcssa$i = $rsize$3$i;$v$4$lcssa$i = $v$3$i;
      } else {
       $rsize$49$i = $rsize$3$i;$t$48$i = $t$4$ph$i;$v$410$i = $v$3$i;
       label = 90;
      }
     }
     if ((label|0) == 90) {
      while(1) {
       label = 0;
       $head99$i = ((($t$48$i)) + 4|0);
       $54 = load4($head99$i);
       $and100$i = $54 & -8;
       $sub101$i = (($and100$i) - ($and145))|0;
       $cmp102$i = ($sub101$i>>>0)<($rsize$49$i>>>0);
       $sub101$rsize$4$i = $cmp102$i ? $sub101$i : $rsize$49$i;
       $t$4$v$4$i = $cmp102$i ? $t$48$i : $v$410$i;
       $arrayidx106$i = ((($t$48$i)) + 16|0);
       $55 = load4($arrayidx106$i);
       $cmp107$i157 = ($55|0)==(0|0);
       if (!($cmp107$i157)) {
        $rsize$49$i = $sub101$rsize$4$i;$t$48$i = $55;$v$410$i = $t$4$v$4$i;
        label = 90;
        continue;
       }
       $arrayidx113$i159 = ((($t$48$i)) + 20|0);
       $56 = load4($arrayidx113$i159);
       $cmp97$i = ($56|0)==(0|0);
       if ($cmp97$i) {
        $rsize$4$lcssa$i = $sub101$rsize$4$i;$v$4$lcssa$i = $t$4$v$4$i;
        break;
       } else {
        $rsize$49$i = $sub101$rsize$4$i;$t$48$i = $56;$v$410$i = $t$4$v$4$i;
        label = 90;
       }
      }
     }
     $cmp116$i = ($v$4$lcssa$i|0)==(0|0);
     if ($cmp116$i) {
      $nb$0 = $and145;
     } else {
      $57 = load4((17816));
      $sub118$i = (($57) - ($and145))|0;
      $cmp119$i = ($rsize$4$lcssa$i>>>0)<($sub118$i>>>0);
      if ($cmp119$i) {
       $58 = load4((17824));
       $cmp121$i = ($v$4$lcssa$i>>>0)<($58>>>0);
       if ($cmp121$i) {
        _abort();
        // unreachable;
       }
       $add$ptr$i161 = (($v$4$lcssa$i) + ($and145)|0);
       $cmp123$i = ($v$4$lcssa$i>>>0)<($add$ptr$i161>>>0);
       if (!($cmp123$i)) {
        _abort();
        // unreachable;
       }
       $parent$i162 = ((($v$4$lcssa$i)) + 24|0);
       $59 = load4($parent$i162);
       $bk$i163 = ((($v$4$lcssa$i)) + 12|0);
       $60 = load4($bk$i163);
       $cmp128$i = ($60|0)==($v$4$lcssa$i|0);
       do {
        if ($cmp128$i) {
         $arrayidx151$i = ((($v$4$lcssa$i)) + 20|0);
         $64 = load4($arrayidx151$i);
         $cmp152$i = ($64|0)==(0|0);
         if ($cmp152$i) {
          $arrayidx155$i = ((($v$4$lcssa$i)) + 16|0);
          $65 = load4($arrayidx155$i);
          $cmp156$i = ($65|0)==(0|0);
          if ($cmp156$i) {
           $R$3$i171 = 0;
           break;
          } else {
           $R$1$i168 = $65;$RP$1$i167 = $arrayidx155$i;
          }
         } else {
          $R$1$i168 = $64;$RP$1$i167 = $arrayidx151$i;
         }
         while(1) {
          $arrayidx161$i = ((($R$1$i168)) + 20|0);
          $66 = load4($arrayidx161$i);
          $cmp162$i = ($66|0)==(0|0);
          if (!($cmp162$i)) {
           $R$1$i168 = $66;$RP$1$i167 = $arrayidx161$i;
           continue;
          }
          $arrayidx165$i169 = ((($R$1$i168)) + 16|0);
          $67 = load4($arrayidx165$i169);
          $cmp166$i = ($67|0)==(0|0);
          if ($cmp166$i) {
           break;
          } else {
           $R$1$i168 = $67;$RP$1$i167 = $arrayidx165$i169;
          }
         }
         $cmp171$i = ($RP$1$i167>>>0)<($58>>>0);
         if ($cmp171$i) {
          _abort();
          // unreachable;
         } else {
          store4($RP$1$i167,0);
          $R$3$i171 = $R$1$i168;
          break;
         }
        } else {
         $fd$i164 = ((($v$4$lcssa$i)) + 8|0);
         $61 = load4($fd$i164);
         $cmp133$i = ($61>>>0)<($58>>>0);
         if ($cmp133$i) {
          _abort();
          // unreachable;
         }
         $bk136$i = ((($61)) + 12|0);
         $62 = load4($bk136$i);
         $cmp137$i = ($62|0)==($v$4$lcssa$i|0);
         if (!($cmp137$i)) {
          _abort();
          // unreachable;
         }
         $fd139$i = ((($60)) + 8|0);
         $63 = load4($fd139$i);
         $cmp140$i = ($63|0)==($v$4$lcssa$i|0);
         if ($cmp140$i) {
          store4($bk136$i,$60);
          store4($fd139$i,$61);
          $R$3$i171 = $60;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $cmp180$i = ($59|0)==(0|0);
       do {
        if ($cmp180$i) {
         $81 = $47;
        } else {
         $index$i172 = ((($v$4$lcssa$i)) + 28|0);
         $68 = load4($index$i172);
         $arrayidx184$i = (18112 + ($68<<2)|0);
         $69 = load4($arrayidx184$i);
         $cmp185$i = ($v$4$lcssa$i|0)==($69|0);
         if ($cmp185$i) {
          store4($arrayidx184$i,$R$3$i171);
          $cond3$i = ($R$3$i171|0)==(0|0);
          if ($cond3$i) {
           $shl192$i = 1 << $68;
           $neg$i173 = $shl192$i ^ -1;
           $and194$i = $47 & $neg$i173;
           store4((17812),$and194$i);
           $81 = $and194$i;
           break;
          }
         } else {
          $70 = load4((17824));
          $cmp198$i = ($59>>>0)<($70>>>0);
          if ($cmp198$i) {
           _abort();
           // unreachable;
          }
          $arrayidx204$i = ((($59)) + 16|0);
          $71 = load4($arrayidx204$i);
          $cmp205$i = ($71|0)==($v$4$lcssa$i|0);
          if ($cmp205$i) {
           store4($arrayidx204$i,$R$3$i171);
          } else {
           $arrayidx212$i = ((($59)) + 20|0);
           store4($arrayidx212$i,$R$3$i171);
          }
          $cmp217$i = ($R$3$i171|0)==(0|0);
          if ($cmp217$i) {
           $81 = $47;
           break;
          }
         }
         $72 = load4((17824));
         $cmp221$i = ($R$3$i171>>>0)<($72>>>0);
         if ($cmp221$i) {
          _abort();
          // unreachable;
         }
         $parent226$i = ((($R$3$i171)) + 24|0);
         store4($parent226$i,$59);
         $arrayidx228$i = ((($v$4$lcssa$i)) + 16|0);
         $73 = load4($arrayidx228$i);
         $cmp229$i = ($73|0)==(0|0);
         do {
          if (!($cmp229$i)) {
           $cmp233$i = ($73>>>0)<($72>>>0);
           if ($cmp233$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx239$i = ((($R$3$i171)) + 16|0);
            store4($arrayidx239$i,$73);
            $parent240$i = ((($73)) + 24|0);
            store4($parent240$i,$R$3$i171);
            break;
           }
          }
         } while(0);
         $arrayidx245$i = ((($v$4$lcssa$i)) + 20|0);
         $74 = load4($arrayidx245$i);
         $cmp246$i = ($74|0)==(0|0);
         if ($cmp246$i) {
          $81 = $47;
         } else {
          $75 = load4((17824));
          $cmp250$i = ($74>>>0)<($75>>>0);
          if ($cmp250$i) {
           _abort();
           // unreachable;
          } else {
           $arrayidx256$i = ((($R$3$i171)) + 20|0);
           store4($arrayidx256$i,$74);
           $parent257$i = ((($74)) + 24|0);
           store4($parent257$i,$R$3$i171);
           $81 = $47;
           break;
          }
         }
        }
       } while(0);
       $cmp265$i = ($rsize$4$lcssa$i>>>0)<(16);
       do {
        if ($cmp265$i) {
         $add268$i = (($rsize$4$lcssa$i) + ($and145))|0;
         $or270$i = $add268$i | 3;
         $head271$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head271$i,$or270$i);
         $add$ptr273$i = (($v$4$lcssa$i) + ($add268$i)|0);
         $head274$i = ((($add$ptr273$i)) + 4|0);
         $76 = load4($head274$i);
         $or275$i = $76 | 1;
         store4($head274$i,$or275$i);
        } else {
         $or278$i = $and145 | 3;
         $head279$i = ((($v$4$lcssa$i)) + 4|0);
         store4($head279$i,$or278$i);
         $or280$i = $rsize$4$lcssa$i | 1;
         $head281$i = ((($add$ptr$i161)) + 4|0);
         store4($head281$i,$or280$i);
         $add$ptr282$i = (($add$ptr$i161) + ($rsize$4$lcssa$i)|0);
         store4($add$ptr282$i,$rsize$4$lcssa$i);
         $shr283$i = $rsize$4$lcssa$i >>> 3;
         $cmp284$i = ($rsize$4$lcssa$i>>>0)<(256);
         if ($cmp284$i) {
          $shl288$i = $shr283$i << 1;
          $arrayidx289$i = (17848 + ($shl288$i<<2)|0);
          $77 = load4(17808);
          $shl291$i = 1 << $shr283$i;
          $and292$i = $77 & $shl291$i;
          $tobool293$i = ($and292$i|0)==(0);
          if ($tobool293$i) {
           $or297$i = $77 | $shl291$i;
           store4(17808,$or297$i);
           $$pre$i177 = ((($arrayidx289$i)) + 8|0);
           $$pre$phi$i178Z2D = $$pre$i177;$F290$0$i = $arrayidx289$i;
          } else {
           $78 = ((($arrayidx289$i)) + 8|0);
           $79 = load4($78);
           $80 = load4((17824));
           $cmp301$i = ($79>>>0)<($80>>>0);
           if ($cmp301$i) {
            _abort();
            // unreachable;
           } else {
            $$pre$phi$i178Z2D = $78;$F290$0$i = $79;
           }
          }
          store4($$pre$phi$i178Z2D,$add$ptr$i161);
          $bk311$i = ((($F290$0$i)) + 12|0);
          store4($bk311$i,$add$ptr$i161);
          $fd312$i = ((($add$ptr$i161)) + 8|0);
          store4($fd312$i,$F290$0$i);
          $bk313$i = ((($add$ptr$i161)) + 12|0);
          store4($bk313$i,$arrayidx289$i);
          break;
         }
         $shr318$i = $rsize$4$lcssa$i >>> 8;
         $cmp319$i = ($shr318$i|0)==(0);
         if ($cmp319$i) {
          $I316$0$i = 0;
         } else {
          $cmp323$i = ($rsize$4$lcssa$i>>>0)>(16777215);
          if ($cmp323$i) {
           $I316$0$i = 31;
          } else {
           $sub329$i = (($shr318$i) + 1048320)|0;
           $shr330$i = $sub329$i >>> 16;
           $and331$i = $shr330$i & 8;
           $shl333$i = $shr318$i << $and331$i;
           $sub334$i = (($shl333$i) + 520192)|0;
           $shr335$i = $sub334$i >>> 16;
           $and336$i = $shr335$i & 4;
           $add337$i = $and336$i | $and331$i;
           $shl338$i = $shl333$i << $and336$i;
           $sub339$i = (($shl338$i) + 245760)|0;
           $shr340$i = $sub339$i >>> 16;
           $and341$i = $shr340$i & 2;
           $add342$i = $add337$i | $and341$i;
           $sub343$i = (14 - ($add342$i))|0;
           $shl344$i = $shl338$i << $and341$i;
           $shr345$i = $shl344$i >>> 15;
           $add346$i = (($sub343$i) + ($shr345$i))|0;
           $shl347$i = $add346$i << 1;
           $add348$i = (($add346$i) + 7)|0;
           $shr349$i = $rsize$4$lcssa$i >>> $add348$i;
           $and350$i = $shr349$i & 1;
           $add351$i = $and350$i | $shl347$i;
           $I316$0$i = $add351$i;
          }
         }
         $arrayidx355$i = (18112 + ($I316$0$i<<2)|0);
         $index356$i = ((($add$ptr$i161)) + 28|0);
         store4($index356$i,$I316$0$i);
         $child357$i = ((($add$ptr$i161)) + 16|0);
         $arrayidx358$i = ((($child357$i)) + 4|0);
         store4($arrayidx358$i,0);
         store4($child357$i,0);
         $shl362$i = 1 << $I316$0$i;
         $and363$i = $81 & $shl362$i;
         $tobool364$i = ($and363$i|0)==(0);
         if ($tobool364$i) {
          $or368$i = $81 | $shl362$i;
          store4((17812),$or368$i);
          store4($arrayidx355$i,$add$ptr$i161);
          $parent369$i = ((($add$ptr$i161)) + 24|0);
          store4($parent369$i,$arrayidx355$i);
          $bk370$i = ((($add$ptr$i161)) + 12|0);
          store4($bk370$i,$add$ptr$i161);
          $fd371$i = ((($add$ptr$i161)) + 8|0);
          store4($fd371$i,$add$ptr$i161);
          break;
         }
         $82 = load4($arrayidx355$i);
         $cmp374$i = ($I316$0$i|0)==(31);
         $shr378$i = $I316$0$i >>> 1;
         $sub381$i = (25 - ($shr378$i))|0;
         $cond383$i = $cmp374$i ? 0 : $sub381$i;
         $shl384$i = $rsize$4$lcssa$i << $cond383$i;
         $K373$0$i = $shl384$i;$T$0$i = $82;
         while(1) {
          $head386$i = ((($T$0$i)) + 4|0);
          $83 = load4($head386$i);
          $and387$i = $83 & -8;
          $cmp388$i = ($and387$i|0)==($rsize$4$lcssa$i|0);
          if ($cmp388$i) {
           label = 148;
           break;
          }
          $shr391$i = $K373$0$i >>> 31;
          $arrayidx394$i = (((($T$0$i)) + 16|0) + ($shr391$i<<2)|0);
          $shl395$i = $K373$0$i << 1;
          $84 = load4($arrayidx394$i);
          $cmp396$i = ($84|0)==(0|0);
          if ($cmp396$i) {
           label = 145;
           break;
          } else {
           $K373$0$i = $shl395$i;$T$0$i = $84;
          }
         }
         if ((label|0) == 145) {
          $85 = load4((17824));
          $cmp401$i = ($arrayidx394$i>>>0)<($85>>>0);
          if ($cmp401$i) {
           _abort();
           // unreachable;
          } else {
           store4($arrayidx394$i,$add$ptr$i161);
           $parent406$i = ((($add$ptr$i161)) + 24|0);
           store4($parent406$i,$T$0$i);
           $bk407$i = ((($add$ptr$i161)) + 12|0);
           store4($bk407$i,$add$ptr$i161);
           $fd408$i = ((($add$ptr$i161)) + 8|0);
           store4($fd408$i,$add$ptr$i161);
           break;
          }
         }
         else if ((label|0) == 148) {
          $fd416$i = ((($T$0$i)) + 8|0);
          $86 = load4($fd416$i);
          $87 = load4((17824));
          $cmp422$i = ($86>>>0)>=($87>>>0);
          $not$cmp418$i = ($T$0$i>>>0)>=($87>>>0);
          $88 = $cmp422$i & $not$cmp418$i;
          if ($88) {
           $bk429$i = ((($86)) + 12|0);
           store4($bk429$i,$add$ptr$i161);
           store4($fd416$i,$add$ptr$i161);
           $fd431$i = ((($add$ptr$i161)) + 8|0);
           store4($fd431$i,$86);
           $bk432$i = ((($add$ptr$i161)) + 12|0);
           store4($bk432$i,$T$0$i);
           $parent433$i = ((($add$ptr$i161)) + 24|0);
           store4($parent433$i,0);
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $add$ptr441$i = ((($v$4$lcssa$i)) + 8|0);
       $retval$0 = $add$ptr441$i;
       STACKTOP = sp;return ($retval$0|0);
      } else {
       $nb$0 = $and145;
      }
     }
    }
   }
  }
 } while(0);
 $89 = load4((17816));
 $cmp156 = ($89>>>0)<($nb$0>>>0);
 if (!($cmp156)) {
  $sub160 = (($89) - ($nb$0))|0;
  $90 = load4((17828));
  $cmp162 = ($sub160>>>0)>(15);
  if ($cmp162) {
   $add$ptr166 = (($90) + ($nb$0)|0);
   store4((17828),$add$ptr166);
   store4((17816),$sub160);
   $or167 = $sub160 | 1;
   $head168 = ((($add$ptr166)) + 4|0);
   store4($head168,$or167);
   $add$ptr169 = (($add$ptr166) + ($sub160)|0);
   store4($add$ptr169,$sub160);
   $or172 = $nb$0 | 3;
   $head173 = ((($90)) + 4|0);
   store4($head173,$or172);
  } else {
   store4((17816),0);
   store4((17828),0);
   $or176 = $89 | 3;
   $head177 = ((($90)) + 4|0);
   store4($head177,$or176);
   $add$ptr178 = (($90) + ($89)|0);
   $head179 = ((($add$ptr178)) + 4|0);
   $91 = load4($head179);
   $or180 = $91 | 1;
   store4($head179,$or180);
  }
  $add$ptr182 = ((($90)) + 8|0);
  $retval$0 = $add$ptr182;
  STACKTOP = sp;return ($retval$0|0);
 }
 $92 = load4((17820));
 $cmp186 = ($92>>>0)>($nb$0>>>0);
 if ($cmp186) {
  $sub190 = (($92) - ($nb$0))|0;
  store4((17820),$sub190);
  $93 = load4((17832));
  $add$ptr193 = (($93) + ($nb$0)|0);
  store4((17832),$add$ptr193);
  $or194 = $sub190 | 1;
  $head195 = ((($add$ptr193)) + 4|0);
  store4($head195,$or194);
  $or197 = $nb$0 | 3;
  $head198 = ((($93)) + 4|0);
  store4($head198,$or197);
  $add$ptr199 = ((($93)) + 8|0);
  $retval$0 = $add$ptr199;
  STACKTOP = sp;return ($retval$0|0);
 }
 $94 = load4(18280);
 $cmp$i179 = ($94|0)==(0);
 if ($cmp$i179) {
  store4((18288),4096);
  store4((18284),4096);
  store4((18292),-1);
  store4((18296),-1);
  store4((18300),0);
  store4((18252),0);
  $95 = $magic$i$i;
  $xor$i$i = $95 & -16;
  $and6$i$i = $xor$i$i ^ 1431655768;
  store4($magic$i$i,$and6$i$i);
  store4(18280,$and6$i$i);
  $96 = 4096;
 } else {
  $$pre$i180 = load4((18288));
  $96 = $$pre$i180;
 }
 $add$i181 = (($nb$0) + 48)|0;
 $sub$i182 = (($nb$0) + 47)|0;
 $add9$i = (($96) + ($sub$i182))|0;
 $neg$i183 = (0 - ($96))|0;
 $and11$i = $add9$i & $neg$i183;
 $cmp12$i = ($and11$i>>>0)>($nb$0>>>0);
 if (!($cmp12$i)) {
  $retval$0 = 0;
  STACKTOP = sp;return ($retval$0|0);
 }
 $97 = load4((18248));
 $cmp15$i = ($97|0)==(0);
 if (!($cmp15$i)) {
  $98 = load4((18240));
  $add17$i184 = (($98) + ($and11$i))|0;
  $cmp19$i = ($add17$i184>>>0)<=($98>>>0);
  $cmp21$i = ($add17$i184>>>0)>($97>>>0);
  $or$cond1$i185 = $cmp19$i | $cmp21$i;
  if ($or$cond1$i185) {
   $retval$0 = 0;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $99 = load4((18252));
 $and29$i = $99 & 4;
 $tobool30$i = ($and29$i|0)==(0);
 L255: do {
  if ($tobool30$i) {
   $100 = load4((17832));
   $cmp32$i186 = ($100|0)==(0|0);
   L257: do {
    if ($cmp32$i186) {
     label = 172;
    } else {
     $sp$0$i$i = (18256);
     while(1) {
      $101 = load4($sp$0$i$i);
      $cmp$i11$i = ($101>>>0)>($100>>>0);
      if (!($cmp$i11$i)) {
       $size$i$i = ((($sp$0$i$i)) + 4|0);
       $102 = load4($size$i$i);
       $add$ptr$i$i = (($101) + ($102)|0);
       $cmp2$i$i = ($add$ptr$i$i>>>0)>($100>>>0);
       if ($cmp2$i$i) {
        break;
       }
      }
      $next$i$i = ((($sp$0$i$i)) + 8|0);
      $103 = load4($next$i$i);
      $cmp3$i$i = ($103|0)==(0|0);
      if ($cmp3$i$i) {
       label = 172;
       break L257;
      } else {
       $sp$0$i$i = $103;
      }
     }
     $add77$i = (($add9$i) - ($92))|0;
     $and80$i = $add77$i & $neg$i183;
     $cmp81$i192 = ($and80$i>>>0)<(2147483647);
     if ($cmp81$i192) {
      $call83$i = (_sbrk(($and80$i|0))|0);
      $108 = load4($sp$0$i$i);
      $109 = load4($size$i$i);
      $add$ptr$i194 = (($108) + ($109)|0);
      $cmp85$i = ($call83$i|0)==($add$ptr$i194|0);
      if ($cmp85$i) {
       $cmp89$i = ($call83$i|0)==((-1)|0);
       if (!($cmp89$i)) {
        $tbase$793$i = $call83$i;$tsize$792$i = $and80$i;
        label = 190;
        break L255;
       }
      } else {
       $br$2$ph$i = $call83$i;$ssize$2$ph$i = $and80$i;
       label = 180;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 172) {
     $call37$i = (_sbrk(0)|0);
     $cmp38$i = ($call37$i|0)==((-1)|0);
     if (!($cmp38$i)) {
      $104 = $call37$i;
      $105 = load4((18284));
      $sub41$i = (($105) + -1)|0;
      $and42$i = $sub41$i & $104;
      $cmp43$i = ($and42$i|0)==(0);
      $add46$i = (($sub41$i) + ($104))|0;
      $neg48$i = (0 - ($105))|0;
      $and49$i = $add46$i & $neg48$i;
      $sub50$i = (($and49$i) - ($104))|0;
      $add51$i = $cmp43$i ? 0 : $sub50$i;
      $and11$add51$i = (($add51$i) + ($and11$i))|0;
      $106 = load4((18240));
      $add54$i = (($and11$add51$i) + ($106))|0;
      $cmp55$i187 = ($and11$add51$i>>>0)>($nb$0>>>0);
      $cmp57$i188 = ($and11$add51$i>>>0)<(2147483647);
      $or$cond$i189 = $cmp55$i187 & $cmp57$i188;
      if ($or$cond$i189) {
       $107 = load4((18248));
       $cmp60$i = ($107|0)==(0);
       if (!($cmp60$i)) {
        $cmp63$i = ($add54$i>>>0)<=($106>>>0);
        $cmp66$i191 = ($add54$i>>>0)>($107>>>0);
        $or$cond2$i = $cmp63$i | $cmp66$i191;
        if ($or$cond2$i) {
         break;
        }
       }
       $call68$i = (_sbrk(($and11$add51$i|0))|0);
       $cmp69$i = ($call68$i|0)==($call37$i|0);
       if ($cmp69$i) {
        $tbase$793$i = $call37$i;$tsize$792$i = $and11$add51$i;
        label = 190;
        break L255;
       } else {
        $br$2$ph$i = $call68$i;$ssize$2$ph$i = $and11$add51$i;
        label = 180;
       }
      }
     }
    }
   } while(0);
   L274: do {
    if ((label|0) == 180) {
     $sub112$i = (0 - ($ssize$2$ph$i))|0;
     $cmp91$i = ($br$2$ph$i|0)!=((-1)|0);
     $cmp93$i = ($ssize$2$ph$i>>>0)<(2147483647);
     $or$cond5$i = $cmp93$i & $cmp91$i;
     $cmp96$i = ($add$i181>>>0)>($ssize$2$ph$i>>>0);
     $or$cond3$i = $cmp96$i & $or$cond5$i;
     do {
      if ($or$cond3$i) {
       $110 = load4((18288));
       $sub99$i = (($sub$i182) - ($ssize$2$ph$i))|0;
       $add101$i = (($sub99$i) + ($110))|0;
       $neg103$i = (0 - ($110))|0;
       $and104$i = $add101$i & $neg103$i;
       $cmp105$i = ($and104$i>>>0)<(2147483647);
       if ($cmp105$i) {
        $call107$i = (_sbrk(($and104$i|0))|0);
        $cmp108$i = ($call107$i|0)==((-1)|0);
        if ($cmp108$i) {
         (_sbrk(($sub112$i|0))|0);
         break L274;
        } else {
         $add110$i = (($and104$i) + ($ssize$2$ph$i))|0;
         $ssize$5$i = $add110$i;
         break;
        }
       } else {
        $ssize$5$i = $ssize$2$ph$i;
       }
      } else {
       $ssize$5$i = $ssize$2$ph$i;
      }
     } while(0);
     $cmp118$i = ($br$2$ph$i|0)==((-1)|0);
     if (!($cmp118$i)) {
      $tbase$793$i = $br$2$ph$i;$tsize$792$i = $ssize$5$i;
      label = 190;
      break L255;
     }
    }
   } while(0);
   $111 = load4((18252));
   $or$i196 = $111 | 4;
   store4((18252),$or$i196);
   label = 187;
  } else {
   label = 187;
  }
 } while(0);
 if ((label|0) == 187) {
  $cmp127$i = ($and11$i>>>0)<(2147483647);
  if ($cmp127$i) {
   $call131$i = (_sbrk(($and11$i|0))|0);
   $call132$i = (_sbrk(0)|0);
   $cmp133$i197 = ($call131$i|0)!=((-1)|0);
   $cmp135$i = ($call132$i|0)!=((-1)|0);
   $or$cond4$i = $cmp133$i197 & $cmp135$i;
   $cmp137$i198 = ($call131$i>>>0)<($call132$i>>>0);
   $or$cond7$i = $cmp137$i198 & $or$cond4$i;
   if ($or$cond7$i) {
    $sub$ptr$lhs$cast$i = $call132$i;
    $sub$ptr$rhs$cast$i = $call131$i;
    $sub$ptr$sub$i = (($sub$ptr$lhs$cast$i) - ($sub$ptr$rhs$cast$i))|0;
    $add140$i = (($nb$0) + 40)|0;
    $cmp141$not$i = ($sub$ptr$sub$i>>>0)>($add140$i>>>0);
    if ($cmp141$not$i) {
     $tbase$793$i = $call131$i;$tsize$792$i = $sub$ptr$sub$i;
     label = 190;
    }
   }
  }
 }
 if ((label|0) == 190) {
  $112 = load4((18240));
  $add150$i = (($112) + ($tsize$792$i))|0;
  store4((18240),$add150$i);
  $113 = load4((18244));
  $cmp151$i = ($add150$i>>>0)>($113>>>0);
  if ($cmp151$i) {
   store4((18244),$add150$i);
  }
  $114 = load4((17832));
  $cmp157$i = ($114|0)==(0|0);
  do {
   if ($cmp157$i) {
    $115 = load4((17824));
    $cmp159$i200 = ($115|0)==(0|0);
    $cmp162$i201 = ($tbase$793$i>>>0)<($115>>>0);
    $or$cond8$i = $cmp159$i200 | $cmp162$i201;
    if ($or$cond8$i) {
     store4((17824),$tbase$793$i);
    }
    store4((18256),$tbase$793$i);
    store4((18260),$tsize$792$i);
    store4((18268),0);
    $116 = load4(18280);
    store4((17844),$116);
    store4((17840),-1);
    $i$01$i$i = 0;
    while(1) {
     $shl$i13$i = $i$01$i$i << 1;
     $arrayidx$i14$i = (17848 + ($shl$i13$i<<2)|0);
     $117 = ((($arrayidx$i14$i)) + 12|0);
     store4($117,$arrayidx$i14$i);
     $118 = ((($arrayidx$i14$i)) + 8|0);
     store4($118,$arrayidx$i14$i);
     $inc$i$i = (($i$01$i$i) + 1)|0;
     $exitcond$i$i = ($inc$i$i|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $i$01$i$i = $inc$i$i;
     }
    }
    $sub172$i = (($tsize$792$i) + -40)|0;
    $add$ptr$i16$i = ((($tbase$793$i)) + 8|0);
    $119 = $add$ptr$i16$i;
    $and$i17$i = $119 & 7;
    $cmp$i18$i = ($and$i17$i|0)==(0);
    $120 = (0 - ($119))|0;
    $and3$i$i = $120 & 7;
    $cond$i19$i = $cmp$i18$i ? 0 : $and3$i$i;
    $add$ptr4$i$i = (($tbase$793$i) + ($cond$i19$i)|0);
    $sub5$i$i = (($sub172$i) - ($cond$i19$i))|0;
    store4((17832),$add$ptr4$i$i);
    store4((17820),$sub5$i$i);
    $or$i$i = $sub5$i$i | 1;
    $head$i20$i = ((($add$ptr4$i$i)) + 4|0);
    store4($head$i20$i,$or$i$i);
    $add$ptr6$i$i = (($add$ptr4$i$i) + ($sub5$i$i)|0);
    $head7$i$i = ((($add$ptr6$i$i)) + 4|0);
    store4($head7$i$i,40);
    $121 = load4((18296));
    store4((17836),$121);
   } else {
    $sp$0104$i = (18256);
    while(1) {
     $122 = load4($sp$0104$i);
     $size188$i = ((($sp$0104$i)) + 4|0);
     $123 = load4($size188$i);
     $add$ptr189$i = (($122) + ($123)|0);
     $cmp190$i = ($tbase$793$i|0)==($add$ptr189$i|0);
     if ($cmp190$i) {
      label = 200;
      break;
     }
     $next$i = ((($sp$0104$i)) + 8|0);
     $124 = load4($next$i);
     $cmp186$i = ($124|0)==(0|0);
     if ($cmp186$i) {
      break;
     } else {
      $sp$0104$i = $124;
     }
    }
    if ((label|0) == 200) {
     $sflags193$i = ((($sp$0104$i)) + 12|0);
     $125 = load4($sflags193$i);
     $and194$i205 = $125 & 8;
     $tobool195$i = ($and194$i205|0)==(0);
     if ($tobool195$i) {
      $cmp203$i = ($114>>>0)>=($122>>>0);
      $cmp209$i = ($114>>>0)<($tbase$793$i>>>0);
      $or$cond95$i = $cmp209$i & $cmp203$i;
      if ($or$cond95$i) {
       $add212$i = (($123) + ($tsize$792$i))|0;
       store4($size188$i,$add212$i);
       $126 = load4((17820));
       $add$ptr$i49$i = ((($114)) + 8|0);
       $127 = $add$ptr$i49$i;
       $and$i50$i = $127 & 7;
       $cmp$i51$i = ($and$i50$i|0)==(0);
       $128 = (0 - ($127))|0;
       $and3$i52$i = $128 & 7;
       $cond$i53$i = $cmp$i51$i ? 0 : $and3$i52$i;
       $add$ptr4$i54$i = (($114) + ($cond$i53$i)|0);
       $add215$i = (($tsize$792$i) - ($cond$i53$i))|0;
       $sub5$i55$i = (($add215$i) + ($126))|0;
       store4((17832),$add$ptr4$i54$i);
       store4((17820),$sub5$i55$i);
       $or$i56$i = $sub5$i55$i | 1;
       $head$i57$i = ((($add$ptr4$i54$i)) + 4|0);
       store4($head$i57$i,$or$i56$i);
       $add$ptr6$i58$i = (($add$ptr4$i54$i) + ($sub5$i55$i)|0);
       $head7$i59$i = ((($add$ptr6$i58$i)) + 4|0);
       store4($head7$i59$i,40);
       $129 = load4((18296));
       store4((17836),$129);
       break;
      }
     }
    }
    $130 = load4((17824));
    $cmp218$i = ($tbase$793$i>>>0)<($130>>>0);
    if ($cmp218$i) {
     store4((17824),$tbase$793$i);
     $145 = $tbase$793$i;
    } else {
     $145 = $130;
    }
    $add$ptr227$i = (($tbase$793$i) + ($tsize$792$i)|0);
    $sp$1103$i = (18256);
    while(1) {
     $131 = load4($sp$1103$i);
     $cmp228$i = ($131|0)==($add$ptr227$i|0);
     if ($cmp228$i) {
      label = 208;
      break;
     }
     $next231$i = ((($sp$1103$i)) + 8|0);
     $132 = load4($next231$i);
     $cmp224$i = ($132|0)==(0|0);
     if ($cmp224$i) {
      $sp$0$i$i$i = (18256);
      break;
     } else {
      $sp$1103$i = $132;
     }
    }
    if ((label|0) == 208) {
     $sflags235$i = ((($sp$1103$i)) + 12|0);
     $133 = load4($sflags235$i);
     $and236$i = $133 & 8;
     $tobool237$i = ($and236$i|0)==(0);
     if ($tobool237$i) {
      store4($sp$1103$i,$tbase$793$i);
      $size245$i = ((($sp$1103$i)) + 4|0);
      $134 = load4($size245$i);
      $add246$i = (($134) + ($tsize$792$i))|0;
      store4($size245$i,$add246$i);
      $add$ptr$i21$i = ((($tbase$793$i)) + 8|0);
      $135 = $add$ptr$i21$i;
      $and$i22$i = $135 & 7;
      $cmp$i23$i = ($and$i22$i|0)==(0);
      $136 = (0 - ($135))|0;
      $and3$i24$i = $136 & 7;
      $cond$i25$i = $cmp$i23$i ? 0 : $and3$i24$i;
      $add$ptr4$i26$i = (($tbase$793$i) + ($cond$i25$i)|0);
      $add$ptr5$i$i = ((($add$ptr227$i)) + 8|0);
      $137 = $add$ptr5$i$i;
      $and6$i27$i = $137 & 7;
      $cmp7$i$i = ($and6$i27$i|0)==(0);
      $138 = (0 - ($137))|0;
      $and13$i$i = $138 & 7;
      $cond15$i$i = $cmp7$i$i ? 0 : $and13$i$i;
      $add$ptr16$i$i = (($add$ptr227$i) + ($cond15$i$i)|0);
      $sub$ptr$lhs$cast$i28$i = $add$ptr16$i$i;
      $sub$ptr$rhs$cast$i29$i = $add$ptr4$i26$i;
      $sub$ptr$sub$i30$i = (($sub$ptr$lhs$cast$i28$i) - ($sub$ptr$rhs$cast$i29$i))|0;
      $add$ptr17$i$i = (($add$ptr4$i26$i) + ($nb$0)|0);
      $sub18$i$i = (($sub$ptr$sub$i30$i) - ($nb$0))|0;
      $or19$i$i = $nb$0 | 3;
      $head$i31$i = ((($add$ptr4$i26$i)) + 4|0);
      store4($head$i31$i,$or19$i$i);
      $cmp20$i$i = ($add$ptr16$i$i|0)==($114|0);
      do {
       if ($cmp20$i$i) {
        $139 = load4((17820));
        $add$i$i = (($139) + ($sub18$i$i))|0;
        store4((17820),$add$i$i);
        store4((17832),$add$ptr17$i$i);
        $or22$i$i = $add$i$i | 1;
        $head23$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head23$i$i,$or22$i$i);
       } else {
        $140 = load4((17828));
        $cmp24$i$i = ($add$ptr16$i$i|0)==($140|0);
        if ($cmp24$i$i) {
         $141 = load4((17816));
         $add26$i$i = (($141) + ($sub18$i$i))|0;
         store4((17816),$add26$i$i);
         store4((17828),$add$ptr17$i$i);
         $or28$i$i = $add26$i$i | 1;
         $head29$i$i = ((($add$ptr17$i$i)) + 4|0);
         store4($head29$i$i,$or28$i$i);
         $add$ptr30$i$i = (($add$ptr17$i$i) + ($add26$i$i)|0);
         store4($add$ptr30$i$i,$add26$i$i);
         break;
        }
        $head32$i$i = ((($add$ptr16$i$i)) + 4|0);
        $142 = load4($head32$i$i);
        $and33$i$i = $142 & 3;
        $cmp34$i$i = ($and33$i$i|0)==(1);
        if ($cmp34$i$i) {
         $and37$i$i = $142 & -8;
         $shr$i34$i = $142 >>> 3;
         $cmp38$i$i = ($142>>>0)<(256);
         L326: do {
          if ($cmp38$i$i) {
           $fd$i$i = ((($add$ptr16$i$i)) + 8|0);
           $143 = load4($fd$i$i);
           $bk$i35$i = ((($add$ptr16$i$i)) + 12|0);
           $144 = load4($bk$i35$i);
           $shl$i36$i = $shr$i34$i << 1;
           $arrayidx$i37$i = (17848 + ($shl$i36$i<<2)|0);
           $cmp41$i$i = ($143|0)==($arrayidx$i37$i|0);
           do {
            if (!($cmp41$i$i)) {
             $cmp42$i$i = ($143>>>0)<($145>>>0);
             if ($cmp42$i$i) {
              _abort();
              // unreachable;
             }
             $bk43$i$i = ((($143)) + 12|0);
             $146 = load4($bk43$i$i);
             $cmp44$i$i = ($146|0)==($add$ptr16$i$i|0);
             if ($cmp44$i$i) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $cmp46$i38$i = ($144|0)==($143|0);
           if ($cmp46$i38$i) {
            $shl48$i$i = 1 << $shr$i34$i;
            $neg$i$i = $shl48$i$i ^ -1;
            $147 = load4(17808);
            $and49$i$i = $147 & $neg$i$i;
            store4(17808,$and49$i$i);
            break;
           }
           $cmp54$i$i = ($144|0)==($arrayidx$i37$i|0);
           do {
            if ($cmp54$i$i) {
             $$pre5$i$i = ((($144)) + 8|0);
             $fd68$pre$phi$i$iZ2D = $$pre5$i$i;
            } else {
             $cmp57$i$i = ($144>>>0)<($145>>>0);
             if ($cmp57$i$i) {
              _abort();
              // unreachable;
             }
             $fd59$i$i = ((($144)) + 8|0);
             $148 = load4($fd59$i$i);
             $cmp60$i$i = ($148|0)==($add$ptr16$i$i|0);
             if ($cmp60$i$i) {
              $fd68$pre$phi$i$iZ2D = $fd59$i$i;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $bk67$i$i = ((($143)) + 12|0);
           store4($bk67$i$i,$144);
           store4($fd68$pre$phi$i$iZ2D,$143);
          } else {
           $parent$i40$i = ((($add$ptr16$i$i)) + 24|0);
           $149 = load4($parent$i40$i);
           $bk74$i$i = ((($add$ptr16$i$i)) + 12|0);
           $150 = load4($bk74$i$i);
           $cmp75$i$i = ($150|0)==($add$ptr16$i$i|0);
           do {
            if ($cmp75$i$i) {
             $child$i$i = ((($add$ptr16$i$i)) + 16|0);
             $arrayidx96$i$i = ((($child$i$i)) + 4|0);
             $154 = load4($arrayidx96$i$i);
             $cmp97$i$i = ($154|0)==(0|0);
             if ($cmp97$i$i) {
              $155 = load4($child$i$i);
              $cmp100$i$i = ($155|0)==(0|0);
              if ($cmp100$i$i) {
               $R$3$i$i = 0;
               break;
              } else {
               $R$1$i$i = $155;$RP$1$i$i = $child$i$i;
              }
             } else {
              $R$1$i$i = $154;$RP$1$i$i = $arrayidx96$i$i;
             }
             while(1) {
              $arrayidx103$i$i = ((($R$1$i$i)) + 20|0);
              $156 = load4($arrayidx103$i$i);
              $cmp104$i$i = ($156|0)==(0|0);
              if (!($cmp104$i$i)) {
               $R$1$i$i = $156;$RP$1$i$i = $arrayidx103$i$i;
               continue;
              }
              $arrayidx107$i$i = ((($R$1$i$i)) + 16|0);
              $157 = load4($arrayidx107$i$i);
              $cmp108$i$i = ($157|0)==(0|0);
              if ($cmp108$i$i) {
               break;
              } else {
               $R$1$i$i = $157;$RP$1$i$i = $arrayidx107$i$i;
              }
             }
             $cmp112$i$i = ($RP$1$i$i>>>0)<($145>>>0);
             if ($cmp112$i$i) {
              _abort();
              // unreachable;
             } else {
              store4($RP$1$i$i,0);
              $R$3$i$i = $R$1$i$i;
              break;
             }
            } else {
             $fd78$i$i = ((($add$ptr16$i$i)) + 8|0);
             $151 = load4($fd78$i$i);
             $cmp81$i$i = ($151>>>0)<($145>>>0);
             if ($cmp81$i$i) {
              _abort();
              // unreachable;
             }
             $bk82$i$i = ((($151)) + 12|0);
             $152 = load4($bk82$i$i);
             $cmp83$i$i = ($152|0)==($add$ptr16$i$i|0);
             if (!($cmp83$i$i)) {
              _abort();
              // unreachable;
             }
             $fd85$i$i = ((($150)) + 8|0);
             $153 = load4($fd85$i$i);
             $cmp86$i$i = ($153|0)==($add$ptr16$i$i|0);
             if ($cmp86$i$i) {
              store4($bk82$i$i,$150);
              store4($fd85$i$i,$151);
              $R$3$i$i = $150;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $cmp120$i42$i = ($149|0)==(0|0);
           if ($cmp120$i42$i) {
            break;
           }
           $index$i43$i = ((($add$ptr16$i$i)) + 28|0);
           $158 = load4($index$i43$i);
           $arrayidx123$i$i = (18112 + ($158<<2)|0);
           $159 = load4($arrayidx123$i$i);
           $cmp124$i$i = ($add$ptr16$i$i|0)==($159|0);
           do {
            if ($cmp124$i$i) {
             store4($arrayidx123$i$i,$R$3$i$i);
             $cond2$i$i = ($R$3$i$i|0)==(0|0);
             if (!($cond2$i$i)) {
              break;
             }
             $shl131$i$i = 1 << $158;
             $neg132$i$i = $shl131$i$i ^ -1;
             $160 = load4((17812));
             $and133$i$i = $160 & $neg132$i$i;
             store4((17812),$and133$i$i);
             break L326;
            } else {
             $161 = load4((17824));
             $cmp137$i$i = ($149>>>0)<($161>>>0);
             if ($cmp137$i$i) {
              _abort();
              // unreachable;
             }
             $arrayidx143$i$i = ((($149)) + 16|0);
             $162 = load4($arrayidx143$i$i);
             $cmp144$i$i = ($162|0)==($add$ptr16$i$i|0);
             if ($cmp144$i$i) {
              store4($arrayidx143$i$i,$R$3$i$i);
             } else {
              $arrayidx151$i$i = ((($149)) + 20|0);
              store4($arrayidx151$i$i,$R$3$i$i);
             }
             $cmp156$i$i = ($R$3$i$i|0)==(0|0);
             if ($cmp156$i$i) {
              break L326;
             }
            }
           } while(0);
           $163 = load4((17824));
           $cmp160$i$i = ($R$3$i$i>>>0)<($163>>>0);
           if ($cmp160$i$i) {
            _abort();
            // unreachable;
           }
           $parent165$i$i = ((($R$3$i$i)) + 24|0);
           store4($parent165$i$i,$149);
           $child166$i$i = ((($add$ptr16$i$i)) + 16|0);
           $164 = load4($child166$i$i);
           $cmp168$i$i = ($164|0)==(0|0);
           do {
            if (!($cmp168$i$i)) {
             $cmp172$i$i = ($164>>>0)<($163>>>0);
             if ($cmp172$i$i) {
              _abort();
              // unreachable;
             } else {
              $arrayidx178$i$i = ((($R$3$i$i)) + 16|0);
              store4($arrayidx178$i$i,$164);
              $parent179$i$i = ((($164)) + 24|0);
              store4($parent179$i$i,$R$3$i$i);
              break;
             }
            }
           } while(0);
           $arrayidx184$i$i = ((($child166$i$i)) + 4|0);
           $165 = load4($arrayidx184$i$i);
           $cmp185$i$i = ($165|0)==(0|0);
           if ($cmp185$i$i) {
            break;
           }
           $166 = load4((17824));
           $cmp189$i$i = ($165>>>0)<($166>>>0);
           if ($cmp189$i$i) {
            _abort();
            // unreachable;
           } else {
            $arrayidx195$i$i = ((($R$3$i$i)) + 20|0);
            store4($arrayidx195$i$i,$165);
            $parent196$i$i = ((($165)) + 24|0);
            store4($parent196$i$i,$R$3$i$i);
            break;
           }
          }
         } while(0);
         $add$ptr205$i$i = (($add$ptr16$i$i) + ($and37$i$i)|0);
         $add206$i$i = (($and37$i$i) + ($sub18$i$i))|0;
         $oldfirst$0$i$i = $add$ptr205$i$i;$qsize$0$i$i = $add206$i$i;
        } else {
         $oldfirst$0$i$i = $add$ptr16$i$i;$qsize$0$i$i = $sub18$i$i;
        }
        $head208$i$i = ((($oldfirst$0$i$i)) + 4|0);
        $167 = load4($head208$i$i);
        $and209$i$i = $167 & -2;
        store4($head208$i$i,$and209$i$i);
        $or210$i$i = $qsize$0$i$i | 1;
        $head211$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head211$i$i,$or210$i$i);
        $add$ptr212$i$i = (($add$ptr17$i$i) + ($qsize$0$i$i)|0);
        store4($add$ptr212$i$i,$qsize$0$i$i);
        $shr214$i$i = $qsize$0$i$i >>> 3;
        $cmp215$i$i = ($qsize$0$i$i>>>0)<(256);
        if ($cmp215$i$i) {
         $shl221$i$i = $shr214$i$i << 1;
         $arrayidx223$i$i = (17848 + ($shl221$i$i<<2)|0);
         $168 = load4(17808);
         $shl226$i$i = 1 << $shr214$i$i;
         $and227$i$i = $168 & $shl226$i$i;
         $tobool228$i$i = ($and227$i$i|0)==(0);
         do {
          if ($tobool228$i$i) {
           $or232$i$i = $168 | $shl226$i$i;
           store4(17808,$or232$i$i);
           $$pre$i45$i = ((($arrayidx223$i$i)) + 8|0);
           $$pre$phi$i46$iZ2D = $$pre$i45$i;$F224$0$i$i = $arrayidx223$i$i;
          } else {
           $169 = ((($arrayidx223$i$i)) + 8|0);
           $170 = load4($169);
           $171 = load4((17824));
           $cmp236$i$i = ($170>>>0)<($171>>>0);
           if (!($cmp236$i$i)) {
            $$pre$phi$i46$iZ2D = $169;$F224$0$i$i = $170;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         store4($$pre$phi$i46$iZ2D,$add$ptr17$i$i);
         $bk246$i$i = ((($F224$0$i$i)) + 12|0);
         store4($bk246$i$i,$add$ptr17$i$i);
         $fd247$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd247$i$i,$F224$0$i$i);
         $bk248$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk248$i$i,$arrayidx223$i$i);
         break;
        }
        $shr253$i$i = $qsize$0$i$i >>> 8;
        $cmp254$i$i = ($shr253$i$i|0)==(0);
        do {
         if ($cmp254$i$i) {
          $I252$0$i$i = 0;
         } else {
          $cmp258$i$i = ($qsize$0$i$i>>>0)>(16777215);
          if ($cmp258$i$i) {
           $I252$0$i$i = 31;
           break;
          }
          $sub262$i$i = (($shr253$i$i) + 1048320)|0;
          $shr263$i$i = $sub262$i$i >>> 16;
          $and264$i$i = $shr263$i$i & 8;
          $shl265$i$i = $shr253$i$i << $and264$i$i;
          $sub266$i$i = (($shl265$i$i) + 520192)|0;
          $shr267$i$i = $sub266$i$i >>> 16;
          $and268$i$i = $shr267$i$i & 4;
          $add269$i$i = $and268$i$i | $and264$i$i;
          $shl270$i$i = $shl265$i$i << $and268$i$i;
          $sub271$i$i = (($shl270$i$i) + 245760)|0;
          $shr272$i$i = $sub271$i$i >>> 16;
          $and273$i$i = $shr272$i$i & 2;
          $add274$i$i = $add269$i$i | $and273$i$i;
          $sub275$i$i = (14 - ($add274$i$i))|0;
          $shl276$i$i = $shl270$i$i << $and273$i$i;
          $shr277$i$i = $shl276$i$i >>> 15;
          $add278$i$i = (($sub275$i$i) + ($shr277$i$i))|0;
          $shl279$i$i = $add278$i$i << 1;
          $add280$i$i = (($add278$i$i) + 7)|0;
          $shr281$i$i = $qsize$0$i$i >>> $add280$i$i;
          $and282$i$i = $shr281$i$i & 1;
          $add283$i$i = $and282$i$i | $shl279$i$i;
          $I252$0$i$i = $add283$i$i;
         }
        } while(0);
        $arrayidx287$i$i = (18112 + ($I252$0$i$i<<2)|0);
        $index288$i$i = ((($add$ptr17$i$i)) + 28|0);
        store4($index288$i$i,$I252$0$i$i);
        $child289$i$i = ((($add$ptr17$i$i)) + 16|0);
        $arrayidx290$i$i = ((($child289$i$i)) + 4|0);
        store4($arrayidx290$i$i,0);
        store4($child289$i$i,0);
        $172 = load4((17812));
        $shl294$i$i = 1 << $I252$0$i$i;
        $and295$i$i = $172 & $shl294$i$i;
        $tobool296$i$i = ($and295$i$i|0)==(0);
        if ($tobool296$i$i) {
         $or300$i$i = $172 | $shl294$i$i;
         store4((17812),$or300$i$i);
         store4($arrayidx287$i$i,$add$ptr17$i$i);
         $parent301$i$i = ((($add$ptr17$i$i)) + 24|0);
         store4($parent301$i$i,$arrayidx287$i$i);
         $bk302$i$i = ((($add$ptr17$i$i)) + 12|0);
         store4($bk302$i$i,$add$ptr17$i$i);
         $fd303$i$i = ((($add$ptr17$i$i)) + 8|0);
         store4($fd303$i$i,$add$ptr17$i$i);
         break;
        }
        $173 = load4($arrayidx287$i$i);
        $cmp306$i$i = ($I252$0$i$i|0)==(31);
        $shr310$i$i = $I252$0$i$i >>> 1;
        $sub313$i$i = (25 - ($shr310$i$i))|0;
        $cond315$i$i = $cmp306$i$i ? 0 : $sub313$i$i;
        $shl316$i$i = $qsize$0$i$i << $cond315$i$i;
        $K305$0$i$i = $shl316$i$i;$T$0$i47$i = $173;
        while(1) {
         $head317$i$i = ((($T$0$i47$i)) + 4|0);
         $174 = load4($head317$i$i);
         $and318$i$i = $174 & -8;
         $cmp319$i$i = ($and318$i$i|0)==($qsize$0$i$i|0);
         if ($cmp319$i$i) {
          label = 278;
          break;
         }
         $shr322$i$i = $K305$0$i$i >>> 31;
         $arrayidx325$i$i = (((($T$0$i47$i)) + 16|0) + ($shr322$i$i<<2)|0);
         $shl326$i$i = $K305$0$i$i << 1;
         $175 = load4($arrayidx325$i$i);
         $cmp327$i$i = ($175|0)==(0|0);
         if ($cmp327$i$i) {
          label = 275;
          break;
         } else {
          $K305$0$i$i = $shl326$i$i;$T$0$i47$i = $175;
         }
        }
        if ((label|0) == 275) {
         $176 = load4((17824));
         $cmp332$i$i = ($arrayidx325$i$i>>>0)<($176>>>0);
         if ($cmp332$i$i) {
          _abort();
          // unreachable;
         } else {
          store4($arrayidx325$i$i,$add$ptr17$i$i);
          $parent337$i$i = ((($add$ptr17$i$i)) + 24|0);
          store4($parent337$i$i,$T$0$i47$i);
          $bk338$i$i = ((($add$ptr17$i$i)) + 12|0);
          store4($bk338$i$i,$add$ptr17$i$i);
          $fd339$i$i = ((($add$ptr17$i$i)) + 8|0);
          store4($fd339$i$i,$add$ptr17$i$i);
          break;
         }
        }
        else if ((label|0) == 278) {
         $fd344$i$i = ((($T$0$i47$i)) + 8|0);
         $177 = load4($fd344$i$i);
         $178 = load4((17824));
         $cmp350$i$i = ($177>>>0)>=($178>>>0);
         $not$cmp346$i$i = ($T$0$i47$i>>>0)>=($178>>>0);
         $179 = $cmp350$i$i & $not$cmp346$i$i;
         if ($179) {
          $bk357$i$i = ((($177)) + 12|0);
          store4($bk357$i$i,$add$ptr17$i$i);
          store4($fd344$i$i,$add$ptr17$i$i);
          $fd359$i$i = ((($add$ptr17$i$i)) + 8|0);
          store4($fd359$i$i,$177);
          $bk360$i$i = ((($add$ptr17$i$i)) + 12|0);
          store4($bk360$i$i,$T$0$i47$i);
          $parent361$i$i = ((($add$ptr17$i$i)) + 24|0);
          store4($parent361$i$i,0);
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $add$ptr369$i$i = ((($add$ptr4$i26$i)) + 8|0);
      $retval$0 = $add$ptr369$i$i;
      STACKTOP = sp;return ($retval$0|0);
     } else {
      $sp$0$i$i$i = (18256);
     }
    }
    while(1) {
     $180 = load4($sp$0$i$i$i);
     $cmp$i$i$i = ($180>>>0)>($114>>>0);
     if (!($cmp$i$i$i)) {
      $size$i$i$i = ((($sp$0$i$i$i)) + 4|0);
      $181 = load4($size$i$i$i);
      $add$ptr$i$i$i = (($180) + ($181)|0);
      $cmp2$i$i$i = ($add$ptr$i$i$i>>>0)>($114>>>0);
      if ($cmp2$i$i$i) {
       break;
      }
     }
     $next$i$i$i = ((($sp$0$i$i$i)) + 8|0);
     $182 = load4($next$i$i$i);
     $sp$0$i$i$i = $182;
    }
    $add$ptr2$i$i = ((($add$ptr$i$i$i)) + -47|0);
    $add$ptr3$i$i = ((($add$ptr2$i$i)) + 8|0);
    $183 = $add$ptr3$i$i;
    $and$i$i = $183 & 7;
    $cmp$i9$i = ($and$i$i|0)==(0);
    $184 = (0 - ($183))|0;
    $and6$i10$i = $184 & 7;
    $cond$i$i = $cmp$i9$i ? 0 : $and6$i10$i;
    $add$ptr7$i$i = (($add$ptr2$i$i) + ($cond$i$i)|0);
    $add$ptr8$i118$i = ((($114)) + 16|0);
    $cmp9$i$i = ($add$ptr7$i$i>>>0)<($add$ptr8$i118$i>>>0);
    $cond13$i$i = $cmp9$i$i ? $114 : $add$ptr7$i$i;
    $add$ptr14$i$i = ((($cond13$i$i)) + 8|0);
    $add$ptr15$i$i = ((($cond13$i$i)) + 24|0);
    $sub16$i$i = (($tsize$792$i) + -40)|0;
    $add$ptr$i1$i$i = ((($tbase$793$i)) + 8|0);
    $185 = $add$ptr$i1$i$i;
    $and$i$i$i = $185 & 7;
    $cmp$i2$i$i = ($and$i$i$i|0)==(0);
    $186 = (0 - ($185))|0;
    $and3$i$i$i = $186 & 7;
    $cond$i$i$i = $cmp$i2$i$i ? 0 : $and3$i$i$i;
    $add$ptr4$i$i$i = (($tbase$793$i) + ($cond$i$i$i)|0);
    $sub5$i$i$i = (($sub16$i$i) - ($cond$i$i$i))|0;
    store4((17832),$add$ptr4$i$i$i);
    store4((17820),$sub5$i$i$i);
    $or$i$i$i = $sub5$i$i$i | 1;
    $head$i$i$i = ((($add$ptr4$i$i$i)) + 4|0);
    store4($head$i$i$i,$or$i$i$i);
    $add$ptr6$i$i$i = (($add$ptr4$i$i$i) + ($sub5$i$i$i)|0);
    $head7$i$i$i = ((($add$ptr6$i$i$i)) + 4|0);
    store4($head7$i$i$i,40);
    $187 = load4((18296));
    store4((17836),$187);
    $head$i$i = ((($cond13$i$i)) + 4|0);
    store4($head$i$i,27);
    ; store8($add$ptr14$i$i,load8((18256),4),4); store8($add$ptr14$i$i+8 | 0,load8((18256)+8 | 0,4),4);
    store4((18256),$tbase$793$i);
    store4((18260),$tsize$792$i);
    store4((18268),0);
    store4((18264),$add$ptr14$i$i);
    $p$0$i$i = $add$ptr15$i$i;
    while(1) {
     $add$ptr24$i$i = ((($p$0$i$i)) + 4|0);
     store4($add$ptr24$i$i,7);
     $188 = ((($add$ptr24$i$i)) + 4|0);
     $cmp27$i$i = ($188>>>0)<($add$ptr$i$i$i>>>0);
     if ($cmp27$i$i) {
      $p$0$i$i = $add$ptr24$i$i;
     } else {
      break;
     }
    }
    $cmp28$i$i = ($cond13$i$i|0)==($114|0);
    if (!($cmp28$i$i)) {
     $sub$ptr$lhs$cast$i$i = $cond13$i$i;
     $sub$ptr$rhs$cast$i$i = $114;
     $sub$ptr$sub$i$i = (($sub$ptr$lhs$cast$i$i) - ($sub$ptr$rhs$cast$i$i))|0;
     $189 = load4($head$i$i);
     $and32$i$i = $189 & -2;
     store4($head$i$i,$and32$i$i);
     $or33$i$i = $sub$ptr$sub$i$i | 1;
     $head34$i$i = ((($114)) + 4|0);
     store4($head34$i$i,$or33$i$i);
     store4($cond13$i$i,$sub$ptr$sub$i$i);
     $shr$i$i = $sub$ptr$sub$i$i >>> 3;
     $cmp36$i$i = ($sub$ptr$sub$i$i>>>0)<(256);
     if ($cmp36$i$i) {
      $shl$i$i = $shr$i$i << 1;
      $arrayidx$i$i = (17848 + ($shl$i$i<<2)|0);
      $190 = load4(17808);
      $shl39$i$i = 1 << $shr$i$i;
      $and40$i$i = $190 & $shl39$i$i;
      $tobool$i$i = ($and40$i$i|0)==(0);
      if ($tobool$i$i) {
       $or44$i$i = $190 | $shl39$i$i;
       store4(17808,$or44$i$i);
       $$pre$i$i = ((($arrayidx$i$i)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $arrayidx$i$i;
      } else {
       $191 = ((($arrayidx$i$i)) + 8|0);
       $192 = load4($191);
       $193 = load4((17824));
       $cmp46$i$i = ($192>>>0)<($193>>>0);
       if ($cmp46$i$i) {
        _abort();
        // unreachable;
       } else {
        $$pre$phi$i$iZ2D = $191;$F$0$i$i = $192;
       }
      }
      store4($$pre$phi$i$iZ2D,$114);
      $bk$i$i = ((($F$0$i$i)) + 12|0);
      store4($bk$i$i,$114);
      $fd54$i$i = ((($114)) + 8|0);
      store4($fd54$i$i,$F$0$i$i);
      $bk55$i$i = ((($114)) + 12|0);
      store4($bk55$i$i,$arrayidx$i$i);
      break;
     }
     $shr58$i$i = $sub$ptr$sub$i$i >>> 8;
     $cmp59$i$i = ($shr58$i$i|0)==(0);
     if ($cmp59$i$i) {
      $I57$0$i$i = 0;
     } else {
      $cmp63$i$i = ($sub$ptr$sub$i$i>>>0)>(16777215);
      if ($cmp63$i$i) {
       $I57$0$i$i = 31;
      } else {
       $sub67$i$i = (($shr58$i$i) + 1048320)|0;
       $shr68$i$i = $sub67$i$i >>> 16;
       $and69$i$i = $shr68$i$i & 8;
       $shl70$i$i = $shr58$i$i << $and69$i$i;
       $sub71$i$i = (($shl70$i$i) + 520192)|0;
       $shr72$i$i = $sub71$i$i >>> 16;
       $and73$i$i = $shr72$i$i & 4;
       $add74$i$i = $and73$i$i | $and69$i$i;
       $shl75$i$i = $shl70$i$i << $and73$i$i;
       $sub76$i$i = (($shl75$i$i) + 245760)|0;
       $shr77$i$i = $sub76$i$i >>> 16;
       $and78$i$i = $shr77$i$i & 2;
       $add79$i$i = $add74$i$i | $and78$i$i;
       $sub80$i$i = (14 - ($add79$i$i))|0;
       $shl81$i$i = $shl75$i$i << $and78$i$i;
       $shr82$i$i = $shl81$i$i >>> 15;
       $add83$i$i = (($sub80$i$i) + ($shr82$i$i))|0;
       $shl84$i$i = $add83$i$i << 1;
       $add85$i$i = (($add83$i$i) + 7)|0;
       $shr86$i$i = $sub$ptr$sub$i$i >>> $add85$i$i;
       $and87$i$i = $shr86$i$i & 1;
       $add88$i$i = $and87$i$i | $shl84$i$i;
       $I57$0$i$i = $add88$i$i;
      }
     }
     $arrayidx91$i$i = (18112 + ($I57$0$i$i<<2)|0);
     $index$i$i = ((($114)) + 28|0);
     store4($index$i$i,$I57$0$i$i);
     $arrayidx92$i$i = ((($114)) + 20|0);
     store4($arrayidx92$i$i,0);
     store4($add$ptr8$i118$i,0);
     $194 = load4((17812));
     $shl95$i$i = 1 << $I57$0$i$i;
     $and96$i$i = $194 & $shl95$i$i;
     $tobool97$i$i = ($and96$i$i|0)==(0);
     if ($tobool97$i$i) {
      $or101$i$i = $194 | $shl95$i$i;
      store4((17812),$or101$i$i);
      store4($arrayidx91$i$i,$114);
      $parent$i$i = ((($114)) + 24|0);
      store4($parent$i$i,$arrayidx91$i$i);
      $bk102$i$i = ((($114)) + 12|0);
      store4($bk102$i$i,$114);
      $fd103$i$i = ((($114)) + 8|0);
      store4($fd103$i$i,$114);
      break;
     }
     $195 = load4($arrayidx91$i$i);
     $cmp106$i$i = ($I57$0$i$i|0)==(31);
     $shr110$i$i = $I57$0$i$i >>> 1;
     $sub113$i$i = (25 - ($shr110$i$i))|0;
     $cond115$i$i = $cmp106$i$i ? 0 : $sub113$i$i;
     $shl116$i$i = $sub$ptr$sub$i$i << $cond115$i$i;
     $K105$0$i$i = $shl116$i$i;$T$0$i$i = $195;
     while(1) {
      $head118$i$i = ((($T$0$i$i)) + 4|0);
      $196 = load4($head118$i$i);
      $and119$i$i = $196 & -8;
      $cmp120$i$i = ($and119$i$i|0)==($sub$ptr$sub$i$i|0);
      if ($cmp120$i$i) {
       label = 304;
       break;
      }
      $shr123$i$i = $K105$0$i$i >>> 31;
      $arrayidx126$i$i = (((($T$0$i$i)) + 16|0) + ($shr123$i$i<<2)|0);
      $shl127$i$i = $K105$0$i$i << 1;
      $197 = load4($arrayidx126$i$i);
      $cmp128$i$i = ($197|0)==(0|0);
      if ($cmp128$i$i) {
       label = 301;
       break;
      } else {
       $K105$0$i$i = $shl127$i$i;$T$0$i$i = $197;
      }
     }
     if ((label|0) == 301) {
      $198 = load4((17824));
      $cmp133$i$i = ($arrayidx126$i$i>>>0)<($198>>>0);
      if ($cmp133$i$i) {
       _abort();
       // unreachable;
      } else {
       store4($arrayidx126$i$i,$114);
       $parent138$i$i = ((($114)) + 24|0);
       store4($parent138$i$i,$T$0$i$i);
       $bk139$i$i = ((($114)) + 12|0);
       store4($bk139$i$i,$114);
       $fd140$i$i = ((($114)) + 8|0);
       store4($fd140$i$i,$114);
       break;
      }
     }
     else if ((label|0) == 304) {
      $fd148$i$i = ((($T$0$i$i)) + 8|0);
      $199 = load4($fd148$i$i);
      $200 = load4((17824));
      $cmp153$i$i = ($199>>>0)>=($200>>>0);
      $not$cmp150$i$i = ($T$0$i$i>>>0)>=($200>>>0);
      $201 = $cmp153$i$i & $not$cmp150$i$i;
      if ($201) {
       $bk158$i$i = ((($199)) + 12|0);
       store4($bk158$i$i,$114);
       store4($fd148$i$i,$114);
       $fd160$i$i = ((($114)) + 8|0);
       store4($fd160$i$i,$199);
       $bk161$i$i = ((($114)) + 12|0);
       store4($bk161$i$i,$T$0$i$i);
       $parent162$i$i = ((($114)) + 24|0);
       store4($parent162$i$i,0);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $202 = load4((17820));
  $cmp257$i = ($202>>>0)>($nb$0>>>0);
  if ($cmp257$i) {
   $sub260$i = (($202) - ($nb$0))|0;
   store4((17820),$sub260$i);
   $203 = load4((17832));
   $add$ptr262$i = (($203) + ($nb$0)|0);
   store4((17832),$add$ptr262$i);
   $or264$i = $sub260$i | 1;
   $head265$i = ((($add$ptr262$i)) + 4|0);
   store4($head265$i,$or264$i);
   $or267$i = $nb$0 | 3;
   $head268$i = ((($203)) + 4|0);
   store4($head268$i,$or267$i);
   $add$ptr269$i = ((($203)) + 8|0);
   $retval$0 = $add$ptr269$i;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $call275$i = (___errno_location()|0);
 store4($call275$i,12);
 $retval$0 = 0;
 STACKTOP = sp;return ($retval$0|0);
}
function _free($mem) {
 $mem = $mem|0;
 var $$pre = 0, $$pre$phiZ2D = 0, $$pre307 = 0, $$pre308 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $8 = 0, $9 = 0, $F510$0 = 0;
 var $I534$0 = 0, $K583$0 = 0, $R$1 = 0, $R$3 = 0, $R332$1 = 0, $R332$3 = 0, $RP$1 = 0, $RP360$1 = 0, $T$0 = 0, $add$ptr = 0, $add$ptr16 = 0, $add$ptr217 = 0, $add$ptr261 = 0, $add$ptr482 = 0, $add$ptr498 = 0, $add$ptr6 = 0, $add17 = 0, $add246 = 0, $add258 = 0, $add267 = 0;
 var $add550 = 0, $add555 = 0, $add559 = 0, $add561 = 0, $add564 = 0, $and = 0, $and140 = 0, $and210 = 0, $and215 = 0, $and232 = 0, $and240 = 0, $and266 = 0, $and301 = 0, $and410 = 0, $and46 = 0, $and495 = 0, $and5 = 0, $and512 = 0, $and545 = 0, $and549 = 0;
 var $and554 = 0, $and563 = 0, $and574 = 0, $and592 = 0, $and8 = 0, $arrayidx = 0, $arrayidx108 = 0, $arrayidx113 = 0, $arrayidx130 = 0, $arrayidx149 = 0, $arrayidx157 = 0, $arrayidx182 = 0, $arrayidx188 = 0, $arrayidx198 = 0, $arrayidx279 = 0, $arrayidx362 = 0, $arrayidx374 = 0, $arrayidx379 = 0, $arrayidx400 = 0, $arrayidx419 = 0;
 var $arrayidx427 = 0, $arrayidx454 = 0, $arrayidx460 = 0, $arrayidx470 = 0, $arrayidx509 = 0, $arrayidx567 = 0, $arrayidx570 = 0, $arrayidx599 = 0, $arrayidx99 = 0, $bk = 0, $bk275 = 0, $bk286 = 0, $bk321 = 0, $bk333 = 0, $bk34 = 0, $bk343 = 0, $bk529 = 0, $bk531 = 0, $bk580 = 0, $bk611 = 0;
 var $bk631 = 0, $bk634 = 0, $bk66 = 0, $bk73 = 0, $bk82 = 0, $child = 0, $child171 = 0, $child361 = 0, $child443 = 0, $child569 = 0, $cmp = 0, $cmp$i = 0, $cmp1 = 0, $cmp100 = 0, $cmp104 = 0, $cmp109 = 0, $cmp114 = 0, $cmp118 = 0, $cmp127 = 0, $cmp13 = 0;
 var $cmp131 = 0, $cmp143 = 0, $cmp150 = 0, $cmp162 = 0, $cmp165 = 0, $cmp173 = 0, $cmp176 = 0, $cmp18 = 0, $cmp189 = 0, $cmp192 = 0, $cmp2 = 0, $cmp211 = 0, $cmp22 = 0, $cmp228 = 0, $cmp243 = 0, $cmp249 = 0, $cmp25 = 0, $cmp255 = 0, $cmp269 = 0, $cmp280 = 0;
 var $cmp283 = 0, $cmp287 = 0, $cmp29 = 0, $cmp296 = 0, $cmp305 = 0, $cmp308 = 0, $cmp31 = 0, $cmp312 = 0, $cmp334 = 0, $cmp340 = 0, $cmp344 = 0, $cmp348 = 0, $cmp35 = 0, $cmp363 = 0, $cmp368 = 0, $cmp375 = 0, $cmp380 = 0, $cmp386 = 0, $cmp395 = 0, $cmp401 = 0;
 var $cmp413 = 0, $cmp42 = 0, $cmp420 = 0, $cmp432 = 0, $cmp435 = 0, $cmp445 = 0, $cmp448 = 0, $cmp461 = 0, $cmp464 = 0, $cmp484 = 0, $cmp50 = 0, $cmp502 = 0, $cmp519 = 0, $cmp53 = 0, $cmp536 = 0, $cmp540 = 0, $cmp57 = 0, $cmp584 = 0, $cmp593 = 0, $cmp601 = 0;
 var $cmp605 = 0, $cmp624 = 0, $cmp640 = 0, $cmp74 = 0, $cmp80 = 0, $cmp83 = 0, $cmp87 = 0, $cond = 0, $cond291 = 0, $cond292 = 0, $dec = 0, $fd = 0, $fd273 = 0, $fd311 = 0, $fd322$pre$phiZ2D = 0, $fd338 = 0, $fd347 = 0, $fd530 = 0, $fd56 = 0, $fd581 = 0;
 var $fd612 = 0, $fd620 = 0, $fd633 = 0, $fd67$pre$phiZ2D = 0, $fd78 = 0, $fd86 = 0, $head = 0, $head209 = 0, $head216 = 0, $head231 = 0, $head248 = 0, $head260 = 0, $head481 = 0, $head497 = 0, $head591 = 0, $idx$neg = 0, $index = 0, $index399 = 0, $index568 = 0, $neg = 0;
 var $neg139 = 0, $neg300 = 0, $neg409 = 0, $next4$i = 0, $not$cmp621 = 0, $or = 0, $or247 = 0, $or259 = 0, $or480 = 0, $or496 = 0, $or516 = 0, $or578 = 0, $p$1 = 0, $parent = 0, $parent170 = 0, $parent183 = 0, $parent199 = 0, $parent331 = 0, $parent442 = 0, $parent455 = 0;
 var $parent471 = 0, $parent579 = 0, $parent610 = 0, $parent635 = 0, $psize$1 = 0, $psize$2 = 0, $shl = 0, $shl138 = 0, $shl278 = 0, $shl299 = 0, $shl408 = 0, $shl45 = 0, $shl508 = 0, $shl511 = 0, $shl546 = 0, $shl551 = 0, $shl557 = 0, $shl560 = 0, $shl573 = 0, $shl590 = 0;
 var $shl600 = 0, $shr = 0, $shr268 = 0, $shr501 = 0, $shr535 = 0, $shr544 = 0, $shr548 = 0, $shr553 = 0, $shr558 = 0, $shr562 = 0, $shr586 = 0, $shr596 = 0, $sp$0$i = 0, $sp$0$in$i = 0, $sub = 0, $sub547 = 0, $sub552 = 0, $sub556 = 0, $sub589 = 0, $tobool233 = 0;
 var $tobool241 = 0, $tobool513 = 0, $tobool575 = 0, $tobool9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($mem|0)==(0|0);
 if ($cmp) {
  return;
 }
 $add$ptr = ((($mem)) + -8|0);
 $0 = load4((17824));
 $cmp1 = ($add$ptr>>>0)<($0>>>0);
 if ($cmp1) {
  _abort();
  // unreachable;
 }
 $head = ((($mem)) + -4|0);
 $1 = load4($head);
 $and = $1 & 3;
 $cmp2 = ($and|0)==(1);
 if ($cmp2) {
  _abort();
  // unreachable;
 }
 $and5 = $1 & -8;
 $add$ptr6 = (($add$ptr) + ($and5)|0);
 $and8 = $1 & 1;
 $tobool9 = ($and8|0)==(0);
 do {
  if ($tobool9) {
   $2 = load4($add$ptr);
   $cmp13 = ($and|0)==(0);
   if ($cmp13) {
    return;
   }
   $idx$neg = (0 - ($2))|0;
   $add$ptr16 = (($add$ptr) + ($idx$neg)|0);
   $add17 = (($2) + ($and5))|0;
   $cmp18 = ($add$ptr16>>>0)<($0>>>0);
   if ($cmp18) {
    _abort();
    // unreachable;
   }
   $3 = load4((17828));
   $cmp22 = ($add$ptr16|0)==($3|0);
   if ($cmp22) {
    $head209 = ((($add$ptr6)) + 4|0);
    $27 = load4($head209);
    $and210 = $27 & 3;
    $cmp211 = ($and210|0)==(3);
    if (!($cmp211)) {
     $p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    store4((17816),$add17);
    $and215 = $27 & -2;
    store4($head209,$and215);
    $or = $add17 | 1;
    $head216 = ((($add$ptr16)) + 4|0);
    store4($head216,$or);
    $add$ptr217 = (($add$ptr16) + ($add17)|0);
    store4($add$ptr217,$add17);
    return;
   }
   $shr = $2 >>> 3;
   $cmp25 = ($2>>>0)<(256);
   if ($cmp25) {
    $fd = ((($add$ptr16)) + 8|0);
    $4 = load4($fd);
    $bk = ((($add$ptr16)) + 12|0);
    $5 = load4($bk);
    $shl = $shr << 1;
    $arrayidx = (17848 + ($shl<<2)|0);
    $cmp29 = ($4|0)==($arrayidx|0);
    if (!($cmp29)) {
     $cmp31 = ($4>>>0)<($0>>>0);
     if ($cmp31) {
      _abort();
      // unreachable;
     }
     $bk34 = ((($4)) + 12|0);
     $6 = load4($bk34);
     $cmp35 = ($6|0)==($add$ptr16|0);
     if (!($cmp35)) {
      _abort();
      // unreachable;
     }
    }
    $cmp42 = ($5|0)==($4|0);
    if ($cmp42) {
     $shl45 = 1 << $shr;
     $neg = $shl45 ^ -1;
     $7 = load4(17808);
     $and46 = $7 & $neg;
     store4(17808,$and46);
     $p$1 = $add$ptr16;$psize$1 = $add17;
     break;
    }
    $cmp50 = ($5|0)==($arrayidx|0);
    if ($cmp50) {
     $$pre308 = ((($5)) + 8|0);
     $fd67$pre$phiZ2D = $$pre308;
    } else {
     $cmp53 = ($5>>>0)<($0>>>0);
     if ($cmp53) {
      _abort();
      // unreachable;
     }
     $fd56 = ((($5)) + 8|0);
     $8 = load4($fd56);
     $cmp57 = ($8|0)==($add$ptr16|0);
     if ($cmp57) {
      $fd67$pre$phiZ2D = $fd56;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk66 = ((($4)) + 12|0);
    store4($bk66,$5);
    store4($fd67$pre$phiZ2D,$4);
    $p$1 = $add$ptr16;$psize$1 = $add17;
    break;
   }
   $parent = ((($add$ptr16)) + 24|0);
   $9 = load4($parent);
   $bk73 = ((($add$ptr16)) + 12|0);
   $10 = load4($bk73);
   $cmp74 = ($10|0)==($add$ptr16|0);
   do {
    if ($cmp74) {
     $child = ((($add$ptr16)) + 16|0);
     $arrayidx99 = ((($child)) + 4|0);
     $14 = load4($arrayidx99);
     $cmp100 = ($14|0)==(0|0);
     if ($cmp100) {
      $15 = load4($child);
      $cmp104 = ($15|0)==(0|0);
      if ($cmp104) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $15;$RP$1 = $child;
      }
     } else {
      $R$1 = $14;$RP$1 = $arrayidx99;
     }
     while(1) {
      $arrayidx108 = ((($R$1)) + 20|0);
      $16 = load4($arrayidx108);
      $cmp109 = ($16|0)==(0|0);
      if (!($cmp109)) {
       $R$1 = $16;$RP$1 = $arrayidx108;
       continue;
      }
      $arrayidx113 = ((($R$1)) + 16|0);
      $17 = load4($arrayidx113);
      $cmp114 = ($17|0)==(0|0);
      if ($cmp114) {
       break;
      } else {
       $R$1 = $17;$RP$1 = $arrayidx113;
      }
     }
     $cmp118 = ($RP$1>>>0)<($0>>>0);
     if ($cmp118) {
      _abort();
      // unreachable;
     } else {
      store4($RP$1,0);
      $R$3 = $R$1;
      break;
     }
    } else {
     $fd78 = ((($add$ptr16)) + 8|0);
     $11 = load4($fd78);
     $cmp80 = ($11>>>0)<($0>>>0);
     if ($cmp80) {
      _abort();
      // unreachable;
     }
     $bk82 = ((($11)) + 12|0);
     $12 = load4($bk82);
     $cmp83 = ($12|0)==($add$ptr16|0);
     if (!($cmp83)) {
      _abort();
      // unreachable;
     }
     $fd86 = ((($10)) + 8|0);
     $13 = load4($fd86);
     $cmp87 = ($13|0)==($add$ptr16|0);
     if ($cmp87) {
      store4($bk82,$10);
      store4($fd86,$11);
      $R$3 = $10;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $cmp127 = ($9|0)==(0|0);
   if ($cmp127) {
    $p$1 = $add$ptr16;$psize$1 = $add17;
   } else {
    $index = ((($add$ptr16)) + 28|0);
    $18 = load4($index);
    $arrayidx130 = (18112 + ($18<<2)|0);
    $19 = load4($arrayidx130);
    $cmp131 = ($add$ptr16|0)==($19|0);
    if ($cmp131) {
     store4($arrayidx130,$R$3);
     $cond291 = ($R$3|0)==(0|0);
     if ($cond291) {
      $shl138 = 1 << $18;
      $neg139 = $shl138 ^ -1;
      $20 = load4((17812));
      $and140 = $20 & $neg139;
      store4((17812),$and140);
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    } else {
     $21 = load4((17824));
     $cmp143 = ($9>>>0)<($21>>>0);
     if ($cmp143) {
      _abort();
      // unreachable;
     }
     $arrayidx149 = ((($9)) + 16|0);
     $22 = load4($arrayidx149);
     $cmp150 = ($22|0)==($add$ptr16|0);
     if ($cmp150) {
      store4($arrayidx149,$R$3);
     } else {
      $arrayidx157 = ((($9)) + 20|0);
      store4($arrayidx157,$R$3);
     }
     $cmp162 = ($R$3|0)==(0|0);
     if ($cmp162) {
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    }
    $23 = load4((17824));
    $cmp165 = ($R$3>>>0)<($23>>>0);
    if ($cmp165) {
     _abort();
     // unreachable;
    }
    $parent170 = ((($R$3)) + 24|0);
    store4($parent170,$9);
    $child171 = ((($add$ptr16)) + 16|0);
    $24 = load4($child171);
    $cmp173 = ($24|0)==(0|0);
    do {
     if (!($cmp173)) {
      $cmp176 = ($24>>>0)<($23>>>0);
      if ($cmp176) {
       _abort();
       // unreachable;
      } else {
       $arrayidx182 = ((($R$3)) + 16|0);
       store4($arrayidx182,$24);
       $parent183 = ((($24)) + 24|0);
       store4($parent183,$R$3);
       break;
      }
     }
    } while(0);
    $arrayidx188 = ((($child171)) + 4|0);
    $25 = load4($arrayidx188);
    $cmp189 = ($25|0)==(0|0);
    if ($cmp189) {
     $p$1 = $add$ptr16;$psize$1 = $add17;
    } else {
     $26 = load4((17824));
     $cmp192 = ($25>>>0)<($26>>>0);
     if ($cmp192) {
      _abort();
      // unreachable;
     } else {
      $arrayidx198 = ((($R$3)) + 20|0);
      store4($arrayidx198,$25);
      $parent199 = ((($25)) + 24|0);
      store4($parent199,$R$3);
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    }
   }
  } else {
   $p$1 = $add$ptr;$psize$1 = $and5;
  }
 } while(0);
 $cmp228 = ($p$1>>>0)<($add$ptr6>>>0);
 if (!($cmp228)) {
  _abort();
  // unreachable;
 }
 $head231 = ((($add$ptr6)) + 4|0);
 $28 = load4($head231);
 $and232 = $28 & 1;
 $tobool233 = ($and232|0)==(0);
 if ($tobool233) {
  _abort();
  // unreachable;
 }
 $and240 = $28 & 2;
 $tobool241 = ($and240|0)==(0);
 if ($tobool241) {
  $29 = load4((17832));
  $cmp243 = ($add$ptr6|0)==($29|0);
  if ($cmp243) {
   $30 = load4((17820));
   $add246 = (($30) + ($psize$1))|0;
   store4((17820),$add246);
   store4((17832),$p$1);
   $or247 = $add246 | 1;
   $head248 = ((($p$1)) + 4|0);
   store4($head248,$or247);
   $31 = load4((17828));
   $cmp249 = ($p$1|0)==($31|0);
   if (!($cmp249)) {
    return;
   }
   store4((17828),0);
   store4((17816),0);
   return;
  }
  $32 = load4((17828));
  $cmp255 = ($add$ptr6|0)==($32|0);
  if ($cmp255) {
   $33 = load4((17816));
   $add258 = (($33) + ($psize$1))|0;
   store4((17816),$add258);
   store4((17828),$p$1);
   $or259 = $add258 | 1;
   $head260 = ((($p$1)) + 4|0);
   store4($head260,$or259);
   $add$ptr261 = (($p$1) + ($add258)|0);
   store4($add$ptr261,$add258);
   return;
  }
  $and266 = $28 & -8;
  $add267 = (($and266) + ($psize$1))|0;
  $shr268 = $28 >>> 3;
  $cmp269 = ($28>>>0)<(256);
  do {
   if ($cmp269) {
    $fd273 = ((($add$ptr6)) + 8|0);
    $34 = load4($fd273);
    $bk275 = ((($add$ptr6)) + 12|0);
    $35 = load4($bk275);
    $shl278 = $shr268 << 1;
    $arrayidx279 = (17848 + ($shl278<<2)|0);
    $cmp280 = ($34|0)==($arrayidx279|0);
    if (!($cmp280)) {
     $36 = load4((17824));
     $cmp283 = ($34>>>0)<($36>>>0);
     if ($cmp283) {
      _abort();
      // unreachable;
     }
     $bk286 = ((($34)) + 12|0);
     $37 = load4($bk286);
     $cmp287 = ($37|0)==($add$ptr6|0);
     if (!($cmp287)) {
      _abort();
      // unreachable;
     }
    }
    $cmp296 = ($35|0)==($34|0);
    if ($cmp296) {
     $shl299 = 1 << $shr268;
     $neg300 = $shl299 ^ -1;
     $38 = load4(17808);
     $and301 = $38 & $neg300;
     store4(17808,$and301);
     break;
    }
    $cmp305 = ($35|0)==($arrayidx279|0);
    if ($cmp305) {
     $$pre307 = ((($35)) + 8|0);
     $fd322$pre$phiZ2D = $$pre307;
    } else {
     $39 = load4((17824));
     $cmp308 = ($35>>>0)<($39>>>0);
     if ($cmp308) {
      _abort();
      // unreachable;
     }
     $fd311 = ((($35)) + 8|0);
     $40 = load4($fd311);
     $cmp312 = ($40|0)==($add$ptr6|0);
     if ($cmp312) {
      $fd322$pre$phiZ2D = $fd311;
     } else {
      _abort();
      // unreachable;
     }
    }
    $bk321 = ((($34)) + 12|0);
    store4($bk321,$35);
    store4($fd322$pre$phiZ2D,$34);
   } else {
    $parent331 = ((($add$ptr6)) + 24|0);
    $41 = load4($parent331);
    $bk333 = ((($add$ptr6)) + 12|0);
    $42 = load4($bk333);
    $cmp334 = ($42|0)==($add$ptr6|0);
    do {
     if ($cmp334) {
      $child361 = ((($add$ptr6)) + 16|0);
      $arrayidx362 = ((($child361)) + 4|0);
      $47 = load4($arrayidx362);
      $cmp363 = ($47|0)==(0|0);
      if ($cmp363) {
       $48 = load4($child361);
       $cmp368 = ($48|0)==(0|0);
       if ($cmp368) {
        $R332$3 = 0;
        break;
       } else {
        $R332$1 = $48;$RP360$1 = $child361;
       }
      } else {
       $R332$1 = $47;$RP360$1 = $arrayidx362;
      }
      while(1) {
       $arrayidx374 = ((($R332$1)) + 20|0);
       $49 = load4($arrayidx374);
       $cmp375 = ($49|0)==(0|0);
       if (!($cmp375)) {
        $R332$1 = $49;$RP360$1 = $arrayidx374;
        continue;
       }
       $arrayidx379 = ((($R332$1)) + 16|0);
       $50 = load4($arrayidx379);
       $cmp380 = ($50|0)==(0|0);
       if ($cmp380) {
        break;
       } else {
        $R332$1 = $50;$RP360$1 = $arrayidx379;
       }
      }
      $51 = load4((17824));
      $cmp386 = ($RP360$1>>>0)<($51>>>0);
      if ($cmp386) {
       _abort();
       // unreachable;
      } else {
       store4($RP360$1,0);
       $R332$3 = $R332$1;
       break;
      }
     } else {
      $fd338 = ((($add$ptr6)) + 8|0);
      $43 = load4($fd338);
      $44 = load4((17824));
      $cmp340 = ($43>>>0)<($44>>>0);
      if ($cmp340) {
       _abort();
       // unreachable;
      }
      $bk343 = ((($43)) + 12|0);
      $45 = load4($bk343);
      $cmp344 = ($45|0)==($add$ptr6|0);
      if (!($cmp344)) {
       _abort();
       // unreachable;
      }
      $fd347 = ((($42)) + 8|0);
      $46 = load4($fd347);
      $cmp348 = ($46|0)==($add$ptr6|0);
      if ($cmp348) {
       store4($bk343,$42);
       store4($fd347,$43);
       $R332$3 = $42;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $cmp395 = ($41|0)==(0|0);
    if (!($cmp395)) {
     $index399 = ((($add$ptr6)) + 28|0);
     $52 = load4($index399);
     $arrayidx400 = (18112 + ($52<<2)|0);
     $53 = load4($arrayidx400);
     $cmp401 = ($add$ptr6|0)==($53|0);
     if ($cmp401) {
      store4($arrayidx400,$R332$3);
      $cond292 = ($R332$3|0)==(0|0);
      if ($cond292) {
       $shl408 = 1 << $52;
       $neg409 = $shl408 ^ -1;
       $54 = load4((17812));
       $and410 = $54 & $neg409;
       store4((17812),$and410);
       break;
      }
     } else {
      $55 = load4((17824));
      $cmp413 = ($41>>>0)<($55>>>0);
      if ($cmp413) {
       _abort();
       // unreachable;
      }
      $arrayidx419 = ((($41)) + 16|0);
      $56 = load4($arrayidx419);
      $cmp420 = ($56|0)==($add$ptr6|0);
      if ($cmp420) {
       store4($arrayidx419,$R332$3);
      } else {
       $arrayidx427 = ((($41)) + 20|0);
       store4($arrayidx427,$R332$3);
      }
      $cmp432 = ($R332$3|0)==(0|0);
      if ($cmp432) {
       break;
      }
     }
     $57 = load4((17824));
     $cmp435 = ($R332$3>>>0)<($57>>>0);
     if ($cmp435) {
      _abort();
      // unreachable;
     }
     $parent442 = ((($R332$3)) + 24|0);
     store4($parent442,$41);
     $child443 = ((($add$ptr6)) + 16|0);
     $58 = load4($child443);
     $cmp445 = ($58|0)==(0|0);
     do {
      if (!($cmp445)) {
       $cmp448 = ($58>>>0)<($57>>>0);
       if ($cmp448) {
        _abort();
        // unreachable;
       } else {
        $arrayidx454 = ((($R332$3)) + 16|0);
        store4($arrayidx454,$58);
        $parent455 = ((($58)) + 24|0);
        store4($parent455,$R332$3);
        break;
       }
      }
     } while(0);
     $arrayidx460 = ((($child443)) + 4|0);
     $59 = load4($arrayidx460);
     $cmp461 = ($59|0)==(0|0);
     if (!($cmp461)) {
      $60 = load4((17824));
      $cmp464 = ($59>>>0)<($60>>>0);
      if ($cmp464) {
       _abort();
       // unreachable;
      } else {
       $arrayidx470 = ((($R332$3)) + 20|0);
       store4($arrayidx470,$59);
       $parent471 = ((($59)) + 24|0);
       store4($parent471,$R332$3);
       break;
      }
     }
    }
   }
  } while(0);
  $or480 = $add267 | 1;
  $head481 = ((($p$1)) + 4|0);
  store4($head481,$or480);
  $add$ptr482 = (($p$1) + ($add267)|0);
  store4($add$ptr482,$add267);
  $61 = load4((17828));
  $cmp484 = ($p$1|0)==($61|0);
  if ($cmp484) {
   store4((17816),$add267);
   return;
  } else {
   $psize$2 = $add267;
  }
 } else {
  $and495 = $28 & -2;
  store4($head231,$and495);
  $or496 = $psize$1 | 1;
  $head497 = ((($p$1)) + 4|0);
  store4($head497,$or496);
  $add$ptr498 = (($p$1) + ($psize$1)|0);
  store4($add$ptr498,$psize$1);
  $psize$2 = $psize$1;
 }
 $shr501 = $psize$2 >>> 3;
 $cmp502 = ($psize$2>>>0)<(256);
 if ($cmp502) {
  $shl508 = $shr501 << 1;
  $arrayidx509 = (17848 + ($shl508<<2)|0);
  $62 = load4(17808);
  $shl511 = 1 << $shr501;
  $and512 = $62 & $shl511;
  $tobool513 = ($and512|0)==(0);
  if ($tobool513) {
   $or516 = $62 | $shl511;
   store4(17808,$or516);
   $$pre = ((($arrayidx509)) + 8|0);
   $$pre$phiZ2D = $$pre;$F510$0 = $arrayidx509;
  } else {
   $63 = ((($arrayidx509)) + 8|0);
   $64 = load4($63);
   $65 = load4((17824));
   $cmp519 = ($64>>>0)<($65>>>0);
   if ($cmp519) {
    _abort();
    // unreachable;
   } else {
    $$pre$phiZ2D = $63;$F510$0 = $64;
   }
  }
  store4($$pre$phiZ2D,$p$1);
  $bk529 = ((($F510$0)) + 12|0);
  store4($bk529,$p$1);
  $fd530 = ((($p$1)) + 8|0);
  store4($fd530,$F510$0);
  $bk531 = ((($p$1)) + 12|0);
  store4($bk531,$arrayidx509);
  return;
 }
 $shr535 = $psize$2 >>> 8;
 $cmp536 = ($shr535|0)==(0);
 if ($cmp536) {
  $I534$0 = 0;
 } else {
  $cmp540 = ($psize$2>>>0)>(16777215);
  if ($cmp540) {
   $I534$0 = 31;
  } else {
   $sub = (($shr535) + 1048320)|0;
   $shr544 = $sub >>> 16;
   $and545 = $shr544 & 8;
   $shl546 = $shr535 << $and545;
   $sub547 = (($shl546) + 520192)|0;
   $shr548 = $sub547 >>> 16;
   $and549 = $shr548 & 4;
   $add550 = $and549 | $and545;
   $shl551 = $shl546 << $and549;
   $sub552 = (($shl551) + 245760)|0;
   $shr553 = $sub552 >>> 16;
   $and554 = $shr553 & 2;
   $add555 = $add550 | $and554;
   $sub556 = (14 - ($add555))|0;
   $shl557 = $shl551 << $and554;
   $shr558 = $shl557 >>> 15;
   $add559 = (($sub556) + ($shr558))|0;
   $shl560 = $add559 << 1;
   $add561 = (($add559) + 7)|0;
   $shr562 = $psize$2 >>> $add561;
   $and563 = $shr562 & 1;
   $add564 = $and563 | $shl560;
   $I534$0 = $add564;
  }
 }
 $arrayidx567 = (18112 + ($I534$0<<2)|0);
 $index568 = ((($p$1)) + 28|0);
 store4($index568,$I534$0);
 $child569 = ((($p$1)) + 16|0);
 $arrayidx570 = ((($p$1)) + 20|0);
 store4($arrayidx570,0);
 store4($child569,0);
 $66 = load4((17812));
 $shl573 = 1 << $I534$0;
 $and574 = $66 & $shl573;
 $tobool575 = ($and574|0)==(0);
 do {
  if ($tobool575) {
   $or578 = $66 | $shl573;
   store4((17812),$or578);
   store4($arrayidx567,$p$1);
   $parent579 = ((($p$1)) + 24|0);
   store4($parent579,$arrayidx567);
   $bk580 = ((($p$1)) + 12|0);
   store4($bk580,$p$1);
   $fd581 = ((($p$1)) + 8|0);
   store4($fd581,$p$1);
  } else {
   $67 = load4($arrayidx567);
   $cmp584 = ($I534$0|0)==(31);
   $shr586 = $I534$0 >>> 1;
   $sub589 = (25 - ($shr586))|0;
   $cond = $cmp584 ? 0 : $sub589;
   $shl590 = $psize$2 << $cond;
   $K583$0 = $shl590;$T$0 = $67;
   while(1) {
    $head591 = ((($T$0)) + 4|0);
    $68 = load4($head591);
    $and592 = $68 & -8;
    $cmp593 = ($and592|0)==($psize$2|0);
    if ($cmp593) {
     label = 130;
     break;
    }
    $shr596 = $K583$0 >>> 31;
    $arrayidx599 = (((($T$0)) + 16|0) + ($shr596<<2)|0);
    $shl600 = $K583$0 << 1;
    $69 = load4($arrayidx599);
    $cmp601 = ($69|0)==(0|0);
    if ($cmp601) {
     label = 127;
     break;
    } else {
     $K583$0 = $shl600;$T$0 = $69;
    }
   }
   if ((label|0) == 127) {
    $70 = load4((17824));
    $cmp605 = ($arrayidx599>>>0)<($70>>>0);
    if ($cmp605) {
     _abort();
     // unreachable;
    } else {
     store4($arrayidx599,$p$1);
     $parent610 = ((($p$1)) + 24|0);
     store4($parent610,$T$0);
     $bk611 = ((($p$1)) + 12|0);
     store4($bk611,$p$1);
     $fd612 = ((($p$1)) + 8|0);
     store4($fd612,$p$1);
     break;
    }
   }
   else if ((label|0) == 130) {
    $fd620 = ((($T$0)) + 8|0);
    $71 = load4($fd620);
    $72 = load4((17824));
    $cmp624 = ($71>>>0)>=($72>>>0);
    $not$cmp621 = ($T$0>>>0)>=($72>>>0);
    $73 = $cmp624 & $not$cmp621;
    if ($73) {
     $bk631 = ((($71)) + 12|0);
     store4($bk631,$p$1);
     store4($fd620,$p$1);
     $fd633 = ((($p$1)) + 8|0);
     store4($fd633,$71);
     $bk634 = ((($p$1)) + 12|0);
     store4($bk634,$T$0);
     $parent635 = ((($p$1)) + 24|0);
     store4($parent635,0);
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $74 = load4((17840));
 $dec = (($74) + -1)|0;
 store4((17840),$dec);
 $cmp640 = ($dec|0)==(0);
 if ($cmp640) {
  $sp$0$in$i = (18264);
 } else {
  return;
 }
 while(1) {
  $sp$0$i = load4($sp$0$in$i);
  $cmp$i = ($sp$0$i|0)==(0|0);
  $next4$i = ((($sp$0$i)) + 8|0);
  if ($cmp$i) {
   break;
  } else {
   $sp$0$in$i = $next4$i;
  }
 }
 store4((17840),-1);
 return;
}
function runPostSets() {
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
function _llvm_bswap_i32(x) {
    x = x|0;
    return (((x&0xff)<<24) | (((x>>8)&0xff)<<16) | (((x>>16)&0xff)<<8) | (x>>>24))|0;
}
function _pthread_self() {
    return 0;
}

  
function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&1](a1|0)|0;
}


function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&7](a1|0,a2|0,a3|0)|0;
}


function dynCall_vii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  FUNCTION_TABLE_vii[index&1](a1|0,a2|0);
}


function dynCall_iii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  return FUNCTION_TABLE_iii[index&3](a1|0,a2|0)|0;
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&1](a1|0);
}

function b0(p0) {
 p0 = p0|0; abort(0);return 0;
}
function b1(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; abort(1);return 0;
}
function b2(p0,p1) {
 p0 = p0|0;p1 = p1|0; abort(2);
}
function b3(p0,p1) {
 p0 = p0|0;p1 = p1|0; abort(3);return 0;
}
function b4(p0) {
 p0 = p0|0; abort(4);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_ii = [b0,___stdio_close];
var FUNCTION_TABLE_iiii = [b1,___stdout_write,___stdio_seek,_zcalloc,___stdio_write,b1,b1,b1];
var FUNCTION_TABLE_vii = [b2,_zcfree];
var FUNCTION_TABLE_iii = [b3,_deflate_stored,_deflate_fast,_deflate_slow];
var FUNCTION_TABLE_vi = [b4,_cleanup];

  return { _sbrk: _sbrk, _free: _free, _main: _main, _pthread_self: _pthread_self, _memset: _memset, _malloc: _malloc, _memcpy: _memcpy, _llvm_bswap_i32: _llvm_bswap_i32, ___errno_location: ___errno_location, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_vii: dynCall_vii, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
;