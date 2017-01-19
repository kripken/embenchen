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
  var invoke_vi=env.invoke_vi;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var ___syscall6=env.___syscall6;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var _abort=env._abort;
  var _gettimeofday=env._gettimeofday;
  var ___setErrNo=env.___setErrNo;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___syscall54=env.___syscall54;
  var ___syscall140=env.___syscall140;
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

function _main($argc,$argv) {
 $argc = $argc|0;
 $argv = $argv|0;
 var $$conv169 = 0, $$lcssa = 0, $$lcssa523 = 0, $$pre = 0.0, $0 = 0, $1 = 0, $10 = 0, $100 = Math_fround(0), $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = Math_fround(0), $108 = Math_fround(0), $109 = 0, $11 = 0, $110 = 0, $111 = 0.0;
 var $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0.0, $120 = Math_fround(0), $121 = Math_fround(0), $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0.0, $127 = 0, $128 = 0, $129 = 0, $13 = 0;
 var $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0.0, $139 = 0, $14 = 0, $140 = 0, $141 = Math_fround(0), $142 = Math_fround(0), $143 = Math_fround(0), $144 = 0, $145 = Math_fround(0), $146 = Math_fround(0), $147 = Math_fround(0), $15 = 0;
 var $16 = 0, $17 = 0, $18 = 0, $19 = 0.0, $2 = 0, $20 = Math_fround(0), $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = Math_fround(0), $27 = Math_fround(0), $28 = Math_fround(0), $29 = 0, $3 = 0, $30 = 0, $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0);
 var $34 = Math_fround(0), $35 = 0, $36 = 0, $37 = Math_fround(0), $38 = Math_fround(0), $39 = 0.0, $4 = Math_fround(0), $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = Math_fround(0), $47 = Math_fround(0), $48 = 0, $49 = 0, $5 = Math_fround(0), $50 = 0.0, $51 = 0;
 var $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = Math_fround(0), $58 = Math_fround(0), $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0.0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0;
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = Math_fround(0), $76 = Math_fround(0), $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0.0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0;
 var $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0.0, $94 = 0, $95 = 0, $96 = Math_fround(0), $97 = Math_fround(0), $98 = Math_fround(0), $99 = 0, $add = 0.0, $add$i$i = 0.0, $add$i$i102 = 0.0, $add$i$i111 = 0.0, $add$i$i120 = 0.0, $add$i$i170 = 0.0, $add$i$i187 = 0.0, $add$i$i236 = 0.0;
 var $add$i$i246 = 0.0, $add$i$i295 = 0.0, $add$i$i304 = 0.0, $add$i$i314 = 0.0, $add$i$i363 = 0.0, $add$i$i373 = 0.0, $add$i$i383 = 0.0, $add$i$i392 = 0.0, $add$i$i415 = 0.0, $add$i$i464 = 0.0, $add$i$i474 = 0.0, $add$us$i = 0, $add$us$i135 = 0, $add$us$i201$us = 0, $add$us$i260 = 0, $add$us$i328 = 0, $add$us$i429$us = 0, $add$us$i488 = 0, $add133 = 0, $add14 = Math_fround(0);
 var $add210 = Math_fround(0), $add226 = Math_fround(0), $add285 = Math_fround(0), $add301 = Math_fround(0), $add35$us$i = 0, $add35$us$i152 = 0, $add35$us$i218$us = 0, $add35$us$i277 = 0, $add35$us$i345 = 0, $add35$us$i446$us = 0, $add35$us$i505 = 0, $add37$us$i = Math_fround(0), $add37$us$i154 = Math_fround(0), $add37$us$i220$us = Math_fround(0), $add37$us$i279 = Math_fround(0), $add37$us$i347 = Math_fround(0), $add37$us$i448$us = Math_fround(0), $add37$us$i507 = Math_fround(0), $add94 = 0, $addconv$us$i = 0;
 var $addconv$us$i131 = 0, $addconv$us$i197$us = 0, $addconv$us$i256 = 0, $addconv$us$i324 = 0, $addconv$us$i425$us = 0, $addconv$us$i484 = 0, $arraydecay353 = 0, $arraydecay357 = 0, $arraydecay361 = 0, $arraydecay365 = 0, $arrayidx = 0, $arrayidx$us$i = 0, $arrayidx$us$i136 = 0, $arrayidx$us$i202$us = 0, $arrayidx$us$i261 = 0, $arrayidx$us$i329 = 0, $arrayidx$us$i430$us = 0, $arrayidx$us$i489 = 0, $arrayidx16 = 0, $arrayidx196 = 0;
 var $arrayidx207 = 0, $arrayidx208 = 0, $arrayidx21 = 0, $arrayidx217 = 0, $arrayidx271 = 0, $arrayidx282 = 0, $arrayidx283 = 0, $arrayidx292 = 0, $arrayidx31 = 0, $arrayidx33$us$i = 0, $arrayidx33$us$i151 = 0, $arrayidx33$us$i217$us = 0, $arrayidx33$us$i276 = 0, $arrayidx33$us$i344 = 0, $arrayidx33$us$i445$us = 0, $arrayidx33$us$i504 = 0, $arrayidx36$us$i = 0, $arrayidx36$us$i153 = 0, $arrayidx36$us$i219$us = 0, $arrayidx36$us$i278 = 0;
 var $arrayidx36$us$i346 = 0, $arrayidx36$us$i447$us = 0, $arrayidx36$us$i506 = 0, $arrayidx42 = 0, $arrayidx67 = 0, $cmp = 0, $cmp106 = 0, $cmp110 = 0, $cmp114 = 0, $cmp135 = 0, $cmp135535 = 0, $cmp145 = 0, $cmp149 = 0, $cmp153 = 0, $cmp170 = 0, $cmp18 = 0, $cmp181 = 0, $cmp185 = 0, $cmp185533 = 0, $cmp198 = 0;
 var $cmp198534 = 0, $cmp237$us = 0, $cmp256 = 0, $cmp260 = 0, $cmp260529 = 0, $cmp27 = 0, $cmp273 = 0, $cmp273530 = 0, $cmp27539 = 0, $cmp310 = 0, $cmp34 = 0, $cmp45 = 0, $cmp48$i = 0, $cmp48$i122 = 0, $cmp48$i188 = 0, $cmp48$i247 = 0, $cmp48$i315 = 0, $cmp48$i416 = 0, $cmp48$i475 = 0, $cmp551 = 0;
 var $cmp82 = 0, $cmp9$us$i137 = 0, $cmp96$us = 0, $cmp96536 = 0, $cond54$in = Math_fround(0), $conv = 0.0, $conv$i = 0.0, $conv$i$i = 0.0, $conv$i$i107 = 0.0, $conv$i$i116 = 0.0, $conv$i$i166 = 0.0, $conv$i$i183 = 0.0, $conv$i$i232 = 0.0, $conv$i$i242 = 0.0, $conv$i$i291 = 0.0, $conv$i$i300 = 0.0, $conv$i$i310 = 0.0, $conv$i$i359 = 0.0, $conv$i$i369 = 0.0, $conv$i$i379 = 0.0;
 var $conv$i$i388 = 0.0, $conv$i$i411 = 0.0, $conv$i$i460 = 0.0, $conv$i$i470 = 0.0, $conv$i$i98 = 0.0, $conv$i172 = 0.0, $conv$i395 = 0.0, $conv1$i$i = 0.0, $conv1$i$i100 = 0.0, $conv1$i$i109 = 0.0, $conv1$i$i118 = 0.0, $conv1$i$i168 = 0.0, $conv1$i$i185 = 0.0, $conv1$i$i234 = 0.0, $conv1$i$i244 = 0.0, $conv1$i$i293 = 0.0, $conv1$i$i302 = 0.0, $conv1$i$i312 = 0.0, $conv1$i$i361 = 0.0, $conv1$i$i371 = 0.0;
 var $conv1$i$i381 = 0.0, $conv1$i$i390 = 0.0, $conv1$i$i413 = 0.0, $conv1$i$i462 = 0.0, $conv1$i$i472 = 0.0, $conv10$i = 0.0, $conv10$i177 = 0.0, $conv10$i405 = 0.0, $conv102 = Math_fround(0), $conv103 = 0.0, $conv11 = Math_fround(0), $conv12 = Math_fround(0), $conv125 = 0.0, $conv127 = Math_fround(0), $conv128 = 0.0, $conv13 = Math_fround(0), $conv130 = 0, $conv141 = Math_fround(0), $conv142 = 0.0, $conv165 = 0.0;
 var $conv169 = 0, $conv178 = Math_fround(0), $conv191 = 0.0, $conv193 = 0.0, $conv195 = Math_fround(0), $conv2$i = 0.0, $conv2$i173 = 0.0, $conv2$i397 = 0.0, $conv204 = 0.0, $conv206 = Math_fround(0), $conv212 = 0.0, $conv213 = 0.0, $conv216 = Math_fround(0), $conv221 = Math_fround(0), $conv232 = Math_fround(0), $conv233 = 0.0, $conv243 = Math_fround(0), $conv244 = 0.0, $conv247 = Math_fround(0), $conv248 = 0.0;
 var $conv253 = Math_fround(0), $conv266 = 0.0, $conv268 = 0.0, $conv270 = Math_fround(0), $conv279 = 0.0, $conv281 = Math_fround(0), $conv288 = 0.0, $conv291 = Math_fround(0), $conv296 = Math_fround(0), $conv307 = Math_fround(0), $conv308 = 0.0, $conv317 = 0.0, $conv4$$us$i138 = Math_fround(0), $conv4$i174$pre$phiZZ2D = 0.0, $conv4$us$i = Math_fround(0), $conv4$us$i134 = Math_fround(0), $conv4$us$i200$us = Math_fround(0), $conv4$us$i259 = Math_fround(0), $conv4$us$i327 = Math_fround(0), $conv4$us$i428$us = Math_fround(0);
 var $conv4$us$i487 = Math_fround(0), $conv6$i = 0.0, $conv6$i401 = 0.0, $conv60 = Math_fround(0), $conv71 = 0.0, $conv72 = 0.0, $conv74 = 0.0, $conv75 = 0.0, $conv8$i = 0.0, $conv8$i176 = 0.0, $conv8$i403 = 0.0, $conv81 = 0.0, $conv84 = 0.0, $conv88 = Math_fround(0), $conv9 = 0.0, $conv91 = Math_fround(0), $div = 0.0, $div$us$i = 0.0, $div$us$i133 = 0.0, $div$us$i199$us = 0.0;
 var $div$us$i258 = 0.0, $div$us$i326 = 0.0, $div$us$i427$us = 0.0, $div$us$i486 = 0.0, $div126 = 0.0, $div168 = 0.0, $div194 = 0.0, $div205 = 0.0, $div215 = 0.0, $div223 = Math_fround(0), $div246 = 0.0, $div269 = 0.0, $div280 = 0.0, $div290 = 0.0, $div298 = Math_fround(0), $div64 = Math_fround(0), $div87 = 0.0, $div92 = Math_fround(0), $exitcond$i = 0, $exitcond$i156 = 0;
 var $exitcond$i222$us = 0, $exitcond$i281 = 0, $exitcond$i349 = 0, $exitcond$i450$us = 0, $exitcond$i509 = 0, $exitcond51$i = 0, $exitcond51$i159 = 0, $exitcond51$i225$us = 0, $exitcond51$i284 = 0, $exitcond51$i352 = 0, $exitcond51$i453$us = 0, $exitcond51$i512 = 0, $exitcond54$i = 0, $exitcond54$i140 = 0, $exitcond54$i206$us = 0, $exitcond54$i265 = 0, $exitcond54$i333 = 0, $exitcond54$i434$us = 0, $exitcond54$i493 = 0, $exitcond55$i = 0;
 var $exitcond55$i143 = 0, $exitcond55$i209$us = 0, $exitcond55$i268 = 0, $exitcond55$i336 = 0, $exitcond55$i437$us = 0, $exitcond55$i496 = 0, $fabsf = Math_fround(0), $fabsf93 = Math_fround(0), $i$047$us$i = 0, $i$047$us$i127 = 0, $i$047$us$i193$us = 0, $i$047$us$i252 = 0, $i$047$us$i320 = 0, $i$047$us$i421$us = 0, $i$047$us$i480 = 0, $i$240$us$i = 0, $i$240$us$i150 = 0, $i$240$us$i216$us = 0, $i$240$us$i275 = 0, $i$240$us$i343 = 0;
 var $i$240$us$i444$us = 0, $i$240$us$i503 = 0, $inc = 0, $inc$us$i = 0, $inc$us$i139 = 0, $inc$us$i205$us = 0, $inc$us$i264 = 0, $inc$us$i332 = 0, $inc$us$i433$us = 0, $inc$us$i492 = 0, $inc100$lcssa = 0, $inc100$us = 0, $inc100538$us = 0, $inc139 = 0, $inc15$us$i = 0, $inc15$us$i142 = 0, $inc15$us$i208$us = 0, $inc15$us$i267 = 0, $inc15$us$i335 = 0, $inc15$us$i436$us = 0;
 var $inc15$us$i495 = 0, $inc189 = 0, $inc202 = 0, $inc228 = 0, $inc24 = 0, $inc241$lcssa = 0, $inc241$us = 0, $inc241532$us = 0, $inc24550 = 0, $inc264 = 0, $inc277 = 0, $inc303 = 0, $inc40$us$i = 0, $inc40$us$i155 = 0, $inc40$us$i221$us = 0, $inc40$us$i280 = 0, $inc40$us$i348 = 0, $inc40$us$i449$us = 0, $inc40$us$i508 = 0, $inc43$us$i = 0;
 var $inc43$us$i158 = 0, $inc43$us$i224$us = 0, $inc43$us$i283 = 0, $inc43$us$i351 = 0, $inc43$us$i452$us = 0, $inc43$us$i511 = 0, $inc555 = 0, $inc57 = 0, $init$049$us$i = 0, $init$049$us$i124 = 0, $init$049$us$i190$us = 0, $init$049$us$i249 = 0, $init$049$us$i317 = 0, $init$049$us$i418$us = 0, $init$049$us$i477 = 0, $init$146$us$i = 0, $init$146$us$i128 = 0, $init$146$us$i194$us = 0, $init$146$us$i253 = 0, $init$146$us$i321 = 0;
 var $init$146$us$i422$us = 0, $init$146$us$i481 = 0, $j$050$us$i = 0, $j$050$us$i123 = 0, $j$050$us$i189$us = 0, $j$050$us$i248 = 0, $j$050$us$i316 = 0, $j$050$us$i417$us = 0, $j$050$us$i476 = 0, $j$142$us$i = 0, $j$142$us$i147 = 0, $j$142$us$i213$us = 0, $j$142$us$i272 = 0, $j$142$us$i340 = 0, $j$142$us$i441$us = 0, $j$142$us$i500 = 0, $loop$0 = 0, $loop$0$be = 0, $mflops$0 = Math_fround(0), $mul = 0;
 var $mul$i$i = 0.0, $mul$i$i101 = 0.0, $mul$i$i110 = 0.0, $mul$i$i119 = 0.0, $mul$i$i169 = 0.0, $mul$i$i186 = 0.0, $mul$i$i235 = 0.0, $mul$i$i245 = 0.0, $mul$i$i294 = 0.0, $mul$i$i303 = 0.0, $mul$i$i313 = 0.0, $mul$i$i362 = 0.0, $mul$i$i372 = 0.0, $mul$i$i382 = 0.0, $mul$i$i391 = 0.0, $mul$i$i414 = 0.0, $mul$i$i463 = 0.0, $mul$i$i473 = 0.0, $mul$us$i = 0, $mul$us$i129 = 0;
 var $mul$us$i195$us = 0, $mul$us$i254 = 0, $mul$us$i322 = 0, $mul$us$i423$us = 0, $mul$us$i482 = 0, $mul10 = 0.0, $mul117 = 0, $mul119 = 0, $mul156 = 0, $mul158 = 0, $mul166 = 0.0, $mul179 = Math_fround(0), $mul214 = 0.0, $mul254 = Math_fround(0), $mul289 = 0.0, $mul34$us$i = 0, $mul34$us$i148 = 0, $mul34$us$i214$us = 0, $mul34$us$i273 = 0, $mul34$us$i341 = 0;
 var $mul34$us$i442$us = 0, $mul34$us$i501 = 0, $mul5$us$i = 0, $mul5$us$i125 = 0, $mul5$us$i191$us = 0, $mul5$us$i250 = 0, $mul5$us$i318 = 0, $mul5$us$i419$us = 0, $mul5$us$i478 = 0, $mul6 = 0, $mul61 = Math_fround(0), $mul62 = Math_fround(0), $mul63 = Math_fround(0), $mul7 = 0.0, $mul86 = 0.0, $norma$2 = Math_fround(0), $norma$3 = Math_fround(0), $norma$4 = Math_fround(0), $norma$4567 = Math_fround(0), $normx$0$lcssa = Math_fround(0);
 var $normx$0542 = Math_fround(0), $pass$0 = 0, $pass$1 = 0, $pass$2 = 0, $pass$3 = 0, $phitmp = 0.0, $rem$us$i = 0, $rem$us$i130 = 0, $rem$us$i196$us = 0, $rem$us$i255 = 0, $rem$us$i323 = 0, $rem$us$i424$us = 0, $rem$us$i483 = 0, $resid$0$fabsf = Math_fround(0), $resid$0$lcssa = Math_fround(0), $resid$0541 = Math_fround(0), $smax = 0, $smax562 = 0, $storemerge = 0, $storemerge72540 = 0;
 var $storemerge75 = Math_fround(0), $sub = Math_fround(0), $sub$i = 0.0, $sub$i121 = 0.0, $sub$i171 = 0.0, $sub$i237 = 0.0, $sub$i305 = 0.0, $sub$i364 = 0.0, $sub$i374 = 0.0, $sub$i393 = 0.0, $sub$i465 = 0.0, $sub$us$i = 0.0, $sub$us$i132 = 0.0, $sub$us$i198$us = 0.0, $sub$us$i257 = 0.0, $sub$us$i325 = 0.0, $sub$us$i426$us = 0.0, $sub$us$i485 = 0.0, $sub192 = 0.0, $sub267 = 0.0;
 var $sub65 = Math_fround(0), $sub66 = 0, $sub68 = Math_fround(0), $tv_usec$i$i = 0, $tv_usec$i$i108 = 0, $tv_usec$i$i117 = 0, $tv_usec$i$i167 = 0, $tv_usec$i$i184 = 0, $tv_usec$i$i233 = 0, $tv_usec$i$i243 = 0, $tv_usec$i$i292 = 0, $tv_usec$i$i301 = 0, $tv_usec$i$i311 = 0, $tv_usec$i$i360 = 0, $tv_usec$i$i370 = 0, $tv_usec$i$i380 = 0, $tv_usec$i$i389 = 0, $tv_usec$i$i412 = 0, $tv_usec$i$i461 = 0, $tv_usec$i$i471 = 0;
 var $tv_usec$i$i99 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer102 = 0, $vararg_buffer105 = 0, $vararg_buffer16 = 0, $vararg_buffer19 = 0, $vararg_buffer22 = 0, $vararg_buffer24 = 0, $vararg_buffer32 = 0, $vararg_buffer36 = 0, $vararg_buffer39 = 0, $vararg_buffer4 = 0, $vararg_buffer42 = 0, $vararg_buffer46 = 0, $vararg_buffer49 = 0, $vararg_buffer52 = 0, $vararg_buffer54 = 0, $vararg_buffer62 = 0, $vararg_buffer65 = 0;
 var $vararg_buffer68 = 0, $vararg_buffer7 = 0, $vararg_buffer71 = 0, $vararg_buffer73 = 0, $vararg_buffer81 = 0, $vararg_buffer84 = 0, $vararg_buffer87 = 0, $vararg_buffer9 = 0, $vararg_buffer90 = 0, $vararg_buffer93 = 0, $vararg_buffer96 = 0, $vararg_buffer99 = 0, $vararg_ptr12 = 0, $vararg_ptr13 = 0, $vararg_ptr14 = 0, $vararg_ptr15 = 0, $vararg_ptr27 = 0, $vararg_ptr28 = 0, $vararg_ptr29 = 0, $vararg_ptr30 = 0;
 var $vararg_ptr31 = 0, $vararg_ptr35 = 0, $vararg_ptr45 = 0, $vararg_ptr57 = 0, $vararg_ptr58 = 0, $vararg_ptr59 = 0, $vararg_ptr60 = 0, $vararg_ptr61 = 0, $vararg_ptr76 = 0, $vararg_ptr77 = 0, $vararg_ptr78 = 0, $vararg_ptr79 = 0, $vararg_ptr80 = 0, $was = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 528|0;
 $vararg_buffer105 = sp + 408|0;
 $vararg_buffer102 = sp + 400|0;
 $vararg_buffer99 = sp + 392|0;
 $vararg_buffer96 = sp + 384|0;
 $vararg_buffer93 = sp + 376|0;
 $vararg_buffer90 = sp + 368|0;
 $vararg_buffer87 = sp + 360|0;
 $vararg_buffer84 = sp + 352|0;
 $vararg_buffer81 = sp + 344|0;
 $vararg_buffer73 = sp + 296|0;
 $vararg_buffer71 = sp + 288|0;
 $vararg_buffer68 = sp + 280|0;
 $vararg_buffer65 = sp + 272|0;
 $vararg_buffer62 = sp + 264|0;
 $vararg_buffer54 = sp + 216|0;
 $vararg_buffer52 = sp + 208|0;
 $vararg_buffer49 = sp + 200|0;
 $vararg_buffer46 = sp + 192|0;
 $vararg_buffer42 = sp + 176|0;
 $vararg_buffer39 = sp + 168|0;
 $vararg_buffer36 = sp + 160|0;
 $vararg_buffer32 = sp + 144|0;
 $vararg_buffer24 = sp + 96|0;
 $vararg_buffer22 = sp + 88|0;
 $vararg_buffer19 = sp + 80|0;
 $vararg_buffer16 = sp + 72|0;
 $vararg_buffer9 = sp + 32|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer4 = sp + 16|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $was = sp + 416|0;
 (_putchar(10)|0);
 (_puts(1895)|0);
 store4(327964,201);
 store4(327968,200);
 store4(327944,100);
 $0 = load4(1024);
 store4($vararg_buffer,1256);
 (_fprintf($0,1252,$vararg_buffer)|0);
 store4($vararg_buffer1,1265);
 (_fprintf($0,1252,$vararg_buffer1)|0);
 (_fwrite(1272,53,1,$0)|0);
 store4($vararg_buffer4,1344);
 (_fprintf($0,1326,$vararg_buffer4)|0);
 $1 = load4(327944);
 $mul = Math_imul($1, $1)|0;
 $mul6 = Math_imul($mul, $1)|0;
 $conv = (+($mul6|0));
 $mul7 = $conv * 2.0;
 $div = $mul7 / 3.0;
 $conv9 = (+($mul|0));
 $mul10 = $conv9 * 2.0;
 $add = $mul10 + $div;
 $conv11 = Math_fround($add);
 $2 = load4(327964);
 $cmp48$i = ($1|0)==(0);
 if (!($cmp48$i)) {
  $init$049$us$i = 1325;$j$050$us$i = 0;
  while(1) {
   $mul5$us$i = Math_imul($j$050$us$i, $2)|0;
   $i$047$us$i = 0;$init$146$us$i = $init$049$us$i;
   while(1) {
    $mul$us$i = ($init$146$us$i*3125)|0;
    $rem$us$i = (($mul$us$i|0) % 65536)&-1;
    $addconv$us$i = (($rem$us$i) + -32768)|0;
    $sub$us$i = (+($addconv$us$i|0));
    $div$us$i = $sub$us$i * 6.103515625E-5;
    $conv4$us$i = Math_fround($div$us$i);
    $add$us$i = (($i$047$us$i) + ($mul5$us$i))|0;
    $arrayidx$us$i = (164744 + ($add$us$i<<2)|0);
    storef($arrayidx$us$i,$conv4$us$i);
    $inc$us$i = (($i$047$us$i) + 1)|0;
    $exitcond54$i = ($inc$us$i|0)==($1|0);
    if ($exitcond54$i) {
     break;
    } else {
     $i$047$us$i = $inc$us$i;$init$146$us$i = $rem$us$i;
    }
   }
   $inc15$us$i = (($j$050$us$i) + 1)|0;
   $exitcond55$i = ($inc15$us$i|0)==($1|0);
   if ($exitcond55$i) {
    break;
   } else {
    $init$049$us$i = $rem$us$i;$j$050$us$i = $inc15$us$i;
   }
  }
  $3 = $1 << 2;
  _memset((325544|0),0,($3|0))|0;
  $j$142$us$i = 0;
  while(1) {
   $mul34$us$i = Math_imul($j$142$us$i, $2)|0;
   $i$240$us$i = 0;
   while(1) {
    $arrayidx33$us$i = (325544 + ($i$240$us$i<<2)|0);
    $4 = loadf($arrayidx33$us$i);
    $add35$us$i = (($i$240$us$i) + ($mul34$us$i))|0;
    $arrayidx36$us$i = (164744 + ($add35$us$i<<2)|0);
    $5 = loadf($arrayidx36$us$i);
    $add37$us$i = Math_fround($4 + $5);
    storef($arrayidx33$us$i,$add37$us$i);
    $inc40$us$i = (($i$240$us$i) + 1)|0;
    $exitcond$i = ($inc40$us$i|0)==($1|0);
    if ($exitcond$i) {
     break;
    } else {
     $i$240$us$i = $inc40$us$i;
    }
   }
   $inc43$us$i = (($j$142$us$i) + 1)|0;
   $exitcond51$i = ($inc43$us$i|0)==($1|0);
   if ($exitcond51$i) {
    break;
   } else {
    $j$142$us$i = $inc43$us$i;
   }
  }
 }
 (_gettimeofday(($vararg_buffer4|0),($vararg_buffer1|0))|0);
 $6 = load4($vararg_buffer4);
 $conv$i$i = (+($6|0));
 $tv_usec$i$i = ((($vararg_buffer4)) + 4|0);
 $7 = load4($tv_usec$i$i);
 $conv1$i$i = (+($7|0));
 $mul$i$i = $conv1$i$i * 9.9999999999999995E-7;
 $add$i$i = $conv$i$i + $mul$i$i;
 stored(4736,$add$i$i);
 $8 = load4(327964);
 $9 = load4(327944);
 _dgefa(164744,$8,$9,327144,327960);
 (_gettimeofday(($vararg_buffer4|0),($vararg_buffer1|0))|0);
 $10 = load4($vararg_buffer4);
 $conv$i$i98 = (+($10|0));
 $tv_usec$i$i99 = ((($vararg_buffer4)) + 4|0);
 $11 = load4($tv_usec$i$i99);
 $conv1$i$i100 = (+($11|0));
 $mul$i$i101 = $conv1$i$i100 * 9.9999999999999995E-7;
 $add$i$i102 = $conv$i$i98 + $mul$i$i101;
 $12 = loadd(4736);
 $sub$i = $add$i$i102 - $12;
 stored(4736,$sub$i);
 $conv12 = Math_fround($sub$i);
 storef(327972,$conv12);
 (_gettimeofday(($vararg_buffer4|0),($vararg_buffer1|0))|0);
 $13 = load4($vararg_buffer4);
 $conv$i$i107 = (+($13|0));
 $tv_usec$i$i108 = ((($vararg_buffer4)) + 4|0);
 $14 = load4($tv_usec$i$i108);
 $conv1$i$i109 = (+($14|0));
 $mul$i$i110 = $conv1$i$i109 * 9.9999999999999995E-7;
 $add$i$i111 = $conv$i$i107 + $mul$i$i110;
 stored(4736,$add$i$i111);
 $15 = load4(327964);
 $16 = load4(327944);
 _dgesl(164744,$15,$16,327144,325544,0);
 (_gettimeofday(($vararg_buffer4|0),($vararg_buffer1|0))|0);
 $17 = load4($vararg_buffer4);
 $conv$i$i116 = (+($17|0));
 $tv_usec$i$i117 = ((($vararg_buffer4)) + 4|0);
 $18 = load4($tv_usec$i$i117);
 $conv1$i$i118 = (+($18|0));
 $mul$i$i119 = $conv1$i$i118 * 9.9999999999999995E-7;
 $add$i$i120 = $conv$i$i116 + $mul$i$i119;
 $19 = loadd(4736);
 $sub$i121 = $add$i$i120 - $19;
 stored(4736,$sub$i121);
 $conv13 = Math_fround($sub$i121);
 storef(328032,$conv13);
 $20 = loadf(327972);
 $add14 = Math_fround($conv13 + $20);
 store4(327948,0);
 $21 = load4(327944);
 $cmp551 = ($21|0)==(0);
 if ($cmp551) {
  $22 = load4(327964);
  store4(327948,0);
  $$lcssa523 = 0;$29 = $22;$norma$4567 = Math_fround(0.0);
 } else {
  $inc555 = 0;
  while(1) {
   $arrayidx = (325544 + ($inc555<<2)|0);
   $23 = load4($arrayidx);
   $arrayidx16 = (326344 + ($inc555<<2)|0);
   store4($arrayidx16,$23);
   $inc = (($inc555) + 1)|0;
   $cmp = ($inc|0)<($21|0);
   if ($cmp) {
    $inc555 = $inc;
   } else {
    break;
   }
  }
  store4(327948,$inc);
  $24 = load4(327964);
  $cmp48$i122 = ($21|0)==(0);
  if ($cmp48$i122) {
   $norma$4 = Math_fround(0.0);
  } else {
   $init$049$us$i124 = 1325;$j$050$us$i123 = 0;$norma$2 = Math_fround(0.0);
   while(1) {
    $mul5$us$i125 = Math_imul($j$050$us$i123, $24)|0;
    $i$047$us$i127 = 0;$init$146$us$i128 = $init$049$us$i124;$norma$3 = $norma$2;
    while(1) {
     $mul$us$i129 = ($init$146$us$i128*3125)|0;
     $rem$us$i130 = (($mul$us$i129|0) % 65536)&-1;
     $addconv$us$i131 = (($rem$us$i130) + -32768)|0;
     $sub$us$i132 = (+($addconv$us$i131|0));
     $div$us$i133 = $sub$us$i132 * 6.103515625E-5;
     $conv4$us$i134 = Math_fround($div$us$i133);
     $add$us$i135 = (($i$047$us$i127) + ($mul5$us$i125))|0;
     $arrayidx$us$i136 = (164744 + ($add$us$i135<<2)|0);
     storef($arrayidx$us$i136,$conv4$us$i134);
     $cmp9$us$i137 = $conv4$us$i134 > $norma$3;
     $conv4$$us$i138 = $cmp9$us$i137 ? $conv4$us$i134 : $norma$3;
     $inc$us$i139 = (($i$047$us$i127) + 1)|0;
     $exitcond54$i140 = ($inc$us$i139|0)==($21|0);
     if ($exitcond54$i140) {
      break;
     } else {
      $i$047$us$i127 = $inc$us$i139;$init$146$us$i128 = $rem$us$i130;$norma$3 = $conv4$$us$i138;
     }
    }
    $inc15$us$i142 = (($j$050$us$i123) + 1)|0;
    $exitcond55$i143 = ($inc15$us$i142|0)==($21|0);
    if ($exitcond55$i143) {
     break;
    } else {
     $init$049$us$i124 = $rem$us$i130;$j$050$us$i123 = $inc15$us$i142;$norma$2 = $conv4$$us$i138;
    }
   }
   $25 = $21 << 2;
   _memset((325544|0),0,($25|0))|0;
   $j$142$us$i147 = 0;
   while(1) {
    $mul34$us$i148 = Math_imul($j$142$us$i147, $24)|0;
    $i$240$us$i150 = 0;
    while(1) {
     $arrayidx33$us$i151 = (325544 + ($i$240$us$i150<<2)|0);
     $26 = loadf($arrayidx33$us$i151);
     $add35$us$i152 = (($i$240$us$i150) + ($mul34$us$i148))|0;
     $arrayidx36$us$i153 = (164744 + ($add35$us$i152<<2)|0);
     $27 = loadf($arrayidx36$us$i153);
     $add37$us$i154 = Math_fround($26 + $27);
     storef($arrayidx33$us$i151,$add37$us$i154);
     $inc40$us$i155 = (($i$240$us$i150) + 1)|0;
     $exitcond$i156 = ($inc40$us$i155|0)==($21|0);
     if ($exitcond$i156) {
      break;
     } else {
      $i$240$us$i150 = $inc40$us$i155;
     }
    }
    $inc43$us$i158 = (($j$142$us$i147) + 1)|0;
    $exitcond51$i159 = ($inc43$us$i158|0)==($21|0);
    if ($exitcond51$i159) {
     $norma$4 = $conv4$$us$i138;
     break;
    } else {
     $j$142$us$i147 = $inc43$us$i158;
    }
   }
  }
  store4(327948,0);
  if ($cmp551) {
   $$lcssa523 = 0;$29 = $24;$norma$4567 = $norma$4;
  } else {
   $inc24550 = 0;
   while(1) {
    $arrayidx21 = (325544 + ($inc24550<<2)|0);
    $28 = loadf($arrayidx21);
    $sub = Math_fround(-$28);
    storef($arrayidx21,$sub);
    $inc24 = (($inc24550) + 1)|0;
    $cmp18 = ($inc24|0)<($21|0);
    if ($cmp18) {
     $inc24550 = $inc24;
    } else {
     break;
    }
   }
   store4(327948,$inc24);
   $$lcssa523 = $21;$29 = $24;$norma$4567 = $norma$4;
  }
 }
 _dmxpy($$lcssa523,325544,$$lcssa523,$29,326344,164744);
 store4(327948,0);
 $30 = load4(327944);
 $cmp27539 = ($30|0)==(0);
 if ($cmp27539) {
  $$lcssa = 0;$normx$0$lcssa = Math_fround(0.0);$resid$0$lcssa = Math_fround(0.0);
 } else {
  $normx$0542 = Math_fround(0.0);$resid$0541 = Math_fround(0.0);$storemerge72540 = 0;
  while(1) {
   $arrayidx31 = (325544 + ($storemerge72540<<2)|0);
   $31 = loadf($arrayidx31);
   $fabsf = (Math_fround(Math_abs((Math_fround($31)))));
   $cmp34 = $resid$0541 > $fabsf;
   $resid$0$fabsf = $cmp34 ? $resid$0541 : $fabsf;
   $arrayidx42 = (326344 + ($storemerge72540<<2)|0);
   $32 = loadf($arrayidx42);
   $fabsf93 = (Math_fround(Math_abs((Math_fround($32)))));
   $cmp45 = $normx$0542 > $fabsf93;
   $cond54$in = $cmp45 ? $normx$0542 : $fabsf93;
   $inc57 = (($storemerge72540) + 1)|0;
   $cmp27 = ($inc57|0)<($30|0);
   if ($cmp27) {
    $normx$0542 = $cond54$in;$resid$0541 = $resid$0$fabsf;$storemerge72540 = $inc57;
   } else {
    break;
   }
  }
  store4(327948,$inc57);
  $$lcssa = $30;$normx$0$lcssa = $cond54$in;$resid$0$lcssa = $resid$0$fabsf;
 }
 $conv60 = (Math_fround(($$lcssa|0)));
 $mul61 = Math_fround($norma$4567 * $conv60);
 $mul62 = Math_fround($normx$0$lcssa * $mul61);
 $mul63 = Math_fround($mul62 * Math_fround(1.1920929E-7));
 $div64 = Math_fround($resid$0$lcssa / $mul63);
 $33 = loadf(326344);
 $sub65 = Math_fround($33 + Math_fround(-1.0));
 $sub66 = (($$lcssa) + -1)|0;
 $arrayidx67 = (326344 + ($sub66<<2)|0);
 $34 = loadf($arrayidx67);
 $sub68 = Math_fround($34 + Math_fround(-1.0));
 (_printf(1357,$vararg_buffer7)|0);
 (_puts(1938)|0);
 $conv71 = +$div64;
 $conv72 = +$resid$0$lcssa;
 $conv74 = +$sub65;
 $conv75 = +$sub68;
 stored($vararg_buffer9,$conv71);
 $vararg_ptr12 = ((($vararg_buffer9)) + 8|0);
 stored($vararg_ptr12,$conv72);
 $vararg_ptr13 = ((($vararg_buffer9)) + 16|0);
 stored($vararg_ptr13,1.1920928955078125E-7);
 $vararg_ptr14 = ((($vararg_buffer9)) + 24|0);
 stored($vararg_ptr14,$conv74);
 $vararg_ptr15 = ((($vararg_buffer9)) + 32|0);
 stored($vararg_ptr15,$conv75);
 (_printf(1396,$vararg_buffer9)|0);
 $35 = load4(327944);
 store4($vararg_buffer16,$35);
 (_printf(1429,$vararg_buffer16)|0);
 $36 = load4(327964);
 store4($vararg_buffer19,$36);
 (_printf(1482,$vararg_buffer19)|0);
 (_printf(1536,$vararg_buffer22)|0);
 (_puts(2031)|0);
 $cmp82 = $add14 > Math_fround(0.0);
 if ($cmp82) {
  $conv81 = +$add14;
  $conv84 = +$conv11;
  $mul86 = $conv81 * 1.0E+6;
  $div87 = $conv84 / $mul86;
  $conv88 = Math_fround($div87);
  storef(328092,$conv88);
  $conv91 = Math_fround(Math_fround(2.0) / $conv88);
  $phitmp = +$conv88;
  $39 = $phitmp;$conv4$i174$pre$phiZZ2D = $conv81;$storemerge75 = $conv91;
 } else {
  storef(328092,Math_fround(0.0));
  $$pre = +$add14;
  $39 = 0.0;$conv4$i174$pre$phiZZ2D = $$pre;$storemerge75 = Math_fround(0.0);
 }
 $div92 = Math_fround($add14 / Math_fround(0.0560000017));
 $37 = loadf(327972);
 $conv$i172 = +$37;
 $38 = loadf(328032);
 $conv2$i173 = +$38;
 $conv8$i176 = +$storemerge75;
 $conv10$i177 = +$div92;
 stored($vararg_buffer24,$conv$i172);
 $vararg_ptr27 = ((($vararg_buffer24)) + 8|0);
 stored($vararg_ptr27,$conv2$i173);
 $vararg_ptr28 = ((($vararg_buffer24)) + 16|0);
 stored($vararg_ptr28,$conv4$i174$pre$phiZZ2D);
 $vararg_ptr29 = ((($vararg_buffer24)) + 24|0);
 stored($vararg_ptr29,$39);
 $vararg_ptr30 = ((($vararg_buffer24)) + 32|0);
 stored($vararg_ptr30,$conv8$i176);
 $vararg_ptr31 = ((($vararg_buffer24)) + 40|0);
 stored($vararg_ptr31,$conv10$i177);
 (_printf(1857,$vararg_buffer24)|0);
 (_puts(1972)|0);
 $tv_usec$i$i184 = ((($vararg_buffer24)) + 4|0);
 $tv_usec$i$i233 = ((($vararg_buffer24)) + 4|0);
 $loop$0 = 10;$pass$0 = -20;
 while(1) {
  (_gettimeofday(($vararg_buffer24|0),($vararg_buffer22|0))|0);
  $40 = load4($vararg_buffer24);
  $conv$i$i183 = (+($40|0));
  $41 = load4($tv_usec$i$i184);
  $conv1$i$i185 = (+($41|0));
  $mul$i$i186 = $conv1$i$i185 * 9.9999999999999995E-7;
  $add$i$i187 = $conv$i$i183 + $mul$i$i186;
  stored(4736,$add$i$i187);
  $add94 = (($pass$0) + 1)|0;
  store4(327948,0);
  $cmp96536 = ($loop$0|0)>(0);
  if ($cmp96536) {
   $42 = load4(327964);
   $43 = load4(327944);
   $cmp48$i188 = ($43|0)==(0);
   $44 = $43 << 2;
   if ($cmp48$i188) {
    $45 = ($loop$0|0)>(1);
    $smax562 = $45 ? $loop$0 : 1;
    $inc100$lcssa = $smax562;
   } else {
    $inc100538$us = 0;
    while(1) {
     $init$049$us$i190$us = 1325;$j$050$us$i189$us = 0;
     while(1) {
      $mul5$us$i191$us = Math_imul($j$050$us$i189$us, $42)|0;
      $i$047$us$i193$us = 0;$init$146$us$i194$us = $init$049$us$i190$us;
      while(1) {
       $mul$us$i195$us = ($init$146$us$i194$us*3125)|0;
       $rem$us$i196$us = (($mul$us$i195$us|0) % 65536)&-1;
       $addconv$us$i197$us = (($rem$us$i196$us) + -32768)|0;
       $sub$us$i198$us = (+($addconv$us$i197$us|0));
       $div$us$i199$us = $sub$us$i198$us * 6.103515625E-5;
       $conv4$us$i200$us = Math_fround($div$us$i199$us);
       $add$us$i201$us = (($i$047$us$i193$us) + ($mul5$us$i191$us))|0;
       $arrayidx$us$i202$us = (164744 + ($add$us$i201$us<<2)|0);
       storef($arrayidx$us$i202$us,$conv4$us$i200$us);
       $inc$us$i205$us = (($i$047$us$i193$us) + 1)|0;
       $exitcond54$i206$us = ($inc$us$i205$us|0)==($43|0);
       if ($exitcond54$i206$us) {
        break;
       } else {
        $i$047$us$i193$us = $inc$us$i205$us;$init$146$us$i194$us = $rem$us$i196$us;
       }
      }
      $inc15$us$i208$us = (($j$050$us$i189$us) + 1)|0;
      $exitcond55$i209$us = ($inc15$us$i208$us|0)==($43|0);
      if ($exitcond55$i209$us) {
       break;
      } else {
       $init$049$us$i190$us = $rem$us$i196$us;$j$050$us$i189$us = $inc15$us$i208$us;
      }
     }
     _memset((325544|0),0,($44|0))|0;
     $j$142$us$i213$us = 0;
     while(1) {
      $mul34$us$i214$us = Math_imul($j$142$us$i213$us, $42)|0;
      $i$240$us$i216$us = 0;
      while(1) {
       $arrayidx33$us$i217$us = (325544 + ($i$240$us$i216$us<<2)|0);
       $46 = loadf($arrayidx33$us$i217$us);
       $add35$us$i218$us = (($i$240$us$i216$us) + ($mul34$us$i214$us))|0;
       $arrayidx36$us$i219$us = (164744 + ($add35$us$i218$us<<2)|0);
       $47 = loadf($arrayidx36$us$i219$us);
       $add37$us$i220$us = Math_fround($46 + $47);
       storef($arrayidx33$us$i217$us,$add37$us$i220$us);
       $inc40$us$i221$us = (($i$240$us$i216$us) + 1)|0;
       $exitcond$i222$us = ($inc40$us$i221$us|0)==($43|0);
       if ($exitcond$i222$us) {
        break;
       } else {
        $i$240$us$i216$us = $inc40$us$i221$us;
       }
      }
      $inc43$us$i224$us = (($j$142$us$i213$us) + 1)|0;
      $exitcond51$i225$us = ($inc43$us$i224$us|0)==($43|0);
      if ($exitcond51$i225$us) {
       break;
      } else {
       $j$142$us$i213$us = $inc43$us$i224$us;
      }
     }
     $inc100$us = (($inc100538$us) + 1)|0;
     $cmp96$us = ($inc100$us|0)<($loop$0|0);
     if ($cmp96$us) {
      $inc100538$us = $inc100$us;
     } else {
      $inc100$lcssa = $inc100$us;
      break;
     }
    }
   }
   store4(327948,$inc100$lcssa);
  }
  (_gettimeofday(($vararg_buffer24|0),($vararg_buffer22|0))|0);
  $48 = load4($vararg_buffer24);
  $conv$i$i232 = (+($48|0));
  $49 = load4($tv_usec$i$i233);
  $conv1$i$i234 = (+($49|0));
  $mul$i$i235 = $conv1$i$i234 * 9.9999999999999995E-7;
  $add$i$i236 = $conv$i$i232 + $mul$i$i235;
  $50 = loadd(4736);
  $sub$i237 = $add$i$i236 - $50;
  stored(4736,$sub$i237);
  $conv102 = Math_fround($sub$i237);
  $conv103 = +$conv102;
  store4($vararg_buffer32,$loop$0);
  $vararg_ptr35 = ((($vararg_buffer32)) + 8|0);
  stored($vararg_ptr35,$conv103);
  (_printf(1592,$vararg_buffer32)|0);
  $cmp106 = $conv103 > 1.0;
  $pass$1 = $cmp106 ? 0 : $add94;
  $cmp110 = ($pass$1|0)<(0);
  if (!($cmp110)) {
   break;
  }
  $cmp114 = $conv103 < 0.10000000000000001;
  $mul119 = $loop$0 << 1;
  $mul117 = ($loop$0*10)|0;
  $loop$0$be = $cmp114 ? $mul117 : $mul119;
  $loop$0 = $loop$0$be;$pass$0 = $pass$1;
 }
 $conv125 = (+($loop$0|0));
 $div126 = $conv103 / $conv125;
 $conv127 = Math_fround($div126);
 $conv128 = +$conv127;
 stored($vararg_buffer36,$conv128);
 (_printf(1618,$vararg_buffer36)|0);
 $conv130 = (~~(1.0));
 store4($vararg_buffer39,$conv130);
 (_printf(1657,$vararg_buffer39)|0);
 store4(327956,10);
 $tv_usec$i$i243 = ((($vararg_buffer39)) + 4|0);
 $tv_usec$i$i301 = ((($vararg_buffer39)) + 4|0);
 $pass$2 = -20;
 while(1) {
  (_gettimeofday(($vararg_buffer39|0),($vararg_buffer36|0))|0);
  $51 = load4($vararg_buffer39);
  $conv$i$i242 = (+($51|0));
  $52 = load4($tv_usec$i$i243);
  $conv1$i$i244 = (+($52|0));
  $mul$i$i245 = $conv1$i$i244 * 9.9999999999999995E-7;
  $add$i$i246 = $conv$i$i242 + $mul$i$i245;
  stored(4736,$add$i$i246);
  $add133 = (($pass$2) + 1)|0;
  store4(327948,0);
  $53 = load4(327956);
  $cmp135535 = ($53|0)>(0);
  if ($cmp135535) {
   while(1) {
    $54 = load4(327964);
    $55 = load4(327944);
    $cmp48$i247 = ($55|0)==(0);
    if (!($cmp48$i247)) {
     $init$049$us$i249 = 1325;$j$050$us$i248 = 0;
     while(1) {
      $mul5$us$i250 = Math_imul($j$050$us$i248, $54)|0;
      $i$047$us$i252 = 0;$init$146$us$i253 = $init$049$us$i249;
      while(1) {
       $mul$us$i254 = ($init$146$us$i253*3125)|0;
       $rem$us$i255 = (($mul$us$i254|0) % 65536)&-1;
       $addconv$us$i256 = (($rem$us$i255) + -32768)|0;
       $sub$us$i257 = (+($addconv$us$i256|0));
       $div$us$i258 = $sub$us$i257 * 6.103515625E-5;
       $conv4$us$i259 = Math_fround($div$us$i258);
       $add$us$i260 = (($i$047$us$i252) + ($mul5$us$i250))|0;
       $arrayidx$us$i261 = (164744 + ($add$us$i260<<2)|0);
       storef($arrayidx$us$i261,$conv4$us$i259);
       $inc$us$i264 = (($i$047$us$i252) + 1)|0;
       $exitcond54$i265 = ($inc$us$i264|0)==($55|0);
       if ($exitcond54$i265) {
        break;
       } else {
        $i$047$us$i252 = $inc$us$i264;$init$146$us$i253 = $rem$us$i255;
       }
      }
      $inc15$us$i267 = (($j$050$us$i248) + 1)|0;
      $exitcond55$i268 = ($inc15$us$i267|0)==($55|0);
      if ($exitcond55$i268) {
       break;
      } else {
       $init$049$us$i249 = $rem$us$i255;$j$050$us$i248 = $inc15$us$i267;
      }
     }
     $56 = $55 << 2;
     _memset((325544|0),0,($56|0))|0;
     $j$142$us$i272 = 0;
     while(1) {
      $mul34$us$i273 = Math_imul($j$142$us$i272, $54)|0;
      $i$240$us$i275 = 0;
      while(1) {
       $arrayidx33$us$i276 = (325544 + ($i$240$us$i275<<2)|0);
       $57 = loadf($arrayidx33$us$i276);
       $add35$us$i277 = (($i$240$us$i275) + ($mul34$us$i273))|0;
       $arrayidx36$us$i278 = (164744 + ($add35$us$i277<<2)|0);
       $58 = loadf($arrayidx36$us$i278);
       $add37$us$i279 = Math_fround($57 + $58);
       storef($arrayidx33$us$i276,$add37$us$i279);
       $inc40$us$i280 = (($i$240$us$i275) + 1)|0;
       $exitcond$i281 = ($inc40$us$i280|0)==($55|0);
       if ($exitcond$i281) {
        break;
       } else {
        $i$240$us$i275 = $inc40$us$i280;
       }
      }
      $inc43$us$i283 = (($j$142$us$i272) + 1)|0;
      $exitcond51$i284 = ($inc43$us$i283|0)==($55|0);
      if ($exitcond51$i284) {
       break;
      } else {
       $j$142$us$i272 = $inc43$us$i283;
      }
     }
    }
    _dgefa(164744,$54,$55,327144,327960);
    $59 = load4(327948);
    $inc139 = (($59) + 1)|0;
    store4(327948,$inc139);
    $60 = load4(327956);
    $cmp135 = ($inc139|0)<($60|0);
    if (!($cmp135)) {
     break;
    }
   }
  }
  (_gettimeofday(($vararg_buffer39|0),($vararg_buffer36|0))|0);
  $61 = load4($vararg_buffer39);
  $conv$i$i300 = (+($61|0));
  $62 = load4($tv_usec$i$i301);
  $conv1$i$i302 = (+($62|0));
  $mul$i$i303 = $conv1$i$i302 * 9.9999999999999995E-7;
  $add$i$i304 = $conv$i$i300 + $mul$i$i303;
  $63 = loadd(4736);
  $sub$i305 = $add$i$i304 - $63;
  stored(4736,$sub$i305);
  $conv141 = Math_fround($sub$i305);
  $64 = load4(327956);
  $conv142 = +$conv141;
  store4($vararg_buffer42,$64);
  $vararg_ptr45 = ((($vararg_buffer42)) + 8|0);
  stored($vararg_ptr45,$conv142);
  (_printf(1592,$vararg_buffer42)|0);
  $cmp145 = $conv142 > 1.0;
  $pass$3 = $cmp145 ? 0 : $add133;
  $cmp149 = ($pass$3|0)<(0);
  if (!($cmp149)) {
   break;
  }
  $cmp153 = $conv142 < 0.10000000000000001;
  $65 = load4(327956);
  $mul158 = $65 << 1;
  $mul156 = ($65*10)|0;
  $storemerge = $cmp153 ? $mul156 : $mul158;
  store4(327956,$storemerge);
  $pass$2 = $pass$3;
 }
 $66 = load4(327956);
 $conv165 = (+($66|0));
 $mul166 = 1.0 * $conv165;
 $div168 = $mul166 / $conv142;
 $conv169 = (~~(($div168)));
 $cmp170 = ($conv169|0)==(0);
 $$conv169 = $cmp170 ? 1 : $conv169;
 store4(327956,$$conv169);
 store4($vararg_buffer46,$$conv169);
 (_printf(1705,$vararg_buffer46)|0);
 $67 = load4(327964);
 store4($vararg_buffer49,$67);
 (_printf(1725,$vararg_buffer49)|0);
 (_printf(1536,$vararg_buffer52)|0);
 (_puts(2031)|0);
 $68 = load4(327956);
 $conv178 = (Math_fround(($68|0)));
 $mul179 = Math_fround($conv127 * $conv178);
 storef((328116),Math_fround(0.0));
 store4(327952,1);
 $tv_usec$i$i311 = ((($vararg_buffer52)) + 4|0);
 $tv_usec$i$i370 = ((($vararg_buffer52)) + 4|0);
 $conv191 = +$mul179;
 $tv_usec$i$i380 = ((($vararg_buffer52)) + 4|0);
 $tv_usec$i$i389 = ((($vararg_buffer52)) + 4|0);
 $conv212 = +$conv11;
 while(1) {
  (_gettimeofday(($vararg_buffer52|0),($vararg_buffer49|0))|0);
  $69 = load4($vararg_buffer52);
  $conv$i$i310 = (+($69|0));
  $70 = load4($tv_usec$i$i311);
  $conv1$i$i312 = (+($70|0));
  $mul$i$i313 = $conv1$i$i312 * 9.9999999999999995E-7;
  $add$i$i314 = $conv$i$i310 + $mul$i$i313;
  stored(4736,$add$i$i314);
  store4(327948,0);
  $71 = load4(327956);
  $cmp185533 = ($71|0)>(0);
  if ($cmp185533) {
   while(1) {
    $72 = load4(327964);
    $73 = load4(327944);
    $cmp48$i315 = ($73|0)==(0);
    if (!($cmp48$i315)) {
     $init$049$us$i317 = 1325;$j$050$us$i316 = 0;
     while(1) {
      $mul5$us$i318 = Math_imul($j$050$us$i316, $72)|0;
      $i$047$us$i320 = 0;$init$146$us$i321 = $init$049$us$i317;
      while(1) {
       $mul$us$i322 = ($init$146$us$i321*3125)|0;
       $rem$us$i323 = (($mul$us$i322|0) % 65536)&-1;
       $addconv$us$i324 = (($rem$us$i323) + -32768)|0;
       $sub$us$i325 = (+($addconv$us$i324|0));
       $div$us$i326 = $sub$us$i325 * 6.103515625E-5;
       $conv4$us$i327 = Math_fround($div$us$i326);
       $add$us$i328 = (($i$047$us$i320) + ($mul5$us$i318))|0;
       $arrayidx$us$i329 = (164744 + ($add$us$i328<<2)|0);
       storef($arrayidx$us$i329,$conv4$us$i327);
       $inc$us$i332 = (($i$047$us$i320) + 1)|0;
       $exitcond54$i333 = ($inc$us$i332|0)==($73|0);
       if ($exitcond54$i333) {
        break;
       } else {
        $i$047$us$i320 = $inc$us$i332;$init$146$us$i321 = $rem$us$i323;
       }
      }
      $inc15$us$i335 = (($j$050$us$i316) + 1)|0;
      $exitcond55$i336 = ($inc15$us$i335|0)==($73|0);
      if ($exitcond55$i336) {
       break;
      } else {
       $init$049$us$i317 = $rem$us$i323;$j$050$us$i316 = $inc15$us$i335;
      }
     }
     $74 = $73 << 2;
     _memset((325544|0),0,($74|0))|0;
     $j$142$us$i340 = 0;
     while(1) {
      $mul34$us$i341 = Math_imul($j$142$us$i340, $72)|0;
      $i$240$us$i343 = 0;
      while(1) {
       $arrayidx33$us$i344 = (325544 + ($i$240$us$i343<<2)|0);
       $75 = loadf($arrayidx33$us$i344);
       $add35$us$i345 = (($i$240$us$i343) + ($mul34$us$i341))|0;
       $arrayidx36$us$i346 = (164744 + ($add35$us$i345<<2)|0);
       $76 = loadf($arrayidx36$us$i346);
       $add37$us$i347 = Math_fround($75 + $76);
       storef($arrayidx33$us$i344,$add37$us$i347);
       $inc40$us$i348 = (($i$240$us$i343) + 1)|0;
       $exitcond$i349 = ($inc40$us$i348|0)==($73|0);
       if ($exitcond$i349) {
        break;
       } else {
        $i$240$us$i343 = $inc40$us$i348;
       }
      }
      $inc43$us$i351 = (($j$142$us$i340) + 1)|0;
      $exitcond51$i352 = ($inc43$us$i351|0)==($73|0);
      if ($exitcond51$i352) {
       break;
      } else {
       $j$142$us$i340 = $inc43$us$i351;
      }
     }
    }
    _dgefa(164744,$72,$73,327144,327960);
    $77 = load4(327948);
    $inc189 = (($77) + 1)|0;
    store4(327948,$inc189);
    $78 = load4(327956);
    $cmp185 = ($inc189|0)<($78|0);
    if (!($cmp185)) {
     break;
    }
   }
  }
  (_gettimeofday(($vararg_buffer52|0),($vararg_buffer49|0))|0);
  $79 = load4($vararg_buffer52);
  $conv$i$i369 = (+($79|0));
  $80 = load4($tv_usec$i$i370);
  $conv1$i$i371 = (+($80|0));
  $mul$i$i372 = $conv1$i$i371 * 9.9999999999999995E-7;
  $add$i$i373 = $conv$i$i369 + $mul$i$i372;
  $81 = loadd(4736);
  $sub$i374 = $add$i$i373 - $81;
  stored(4736,$sub$i374);
  $sub192 = $sub$i374 - $conv191;
  $82 = load4(327956);
  $conv193 = (+($82|0));
  $div194 = $sub192 / $conv193;
  $conv195 = Math_fround($div194);
  $83 = load4(327952);
  $arrayidx196 = (327972 + ($83<<2)|0);
  storef($arrayidx196,$conv195);
  (_gettimeofday(($vararg_buffer52|0),($vararg_buffer49|0))|0);
  $84 = load4($vararg_buffer52);
  $conv$i$i379 = (+($84|0));
  $85 = load4($tv_usec$i$i380);
  $conv1$i$i381 = (+($85|0));
  $mul$i$i382 = $conv1$i$i381 * 9.9999999999999995E-7;
  $add$i$i383 = $conv$i$i379 + $mul$i$i382;
  stored(4736,$add$i$i383);
  store4(327948,0);
  $86 = load4(327956);
  $cmp198534 = ($86|0)>(0);
  if ($cmp198534) {
   while(1) {
    $87 = load4(327964);
    $88 = load4(327944);
    _dgesl(164744,$87,$88,327144,325544,0);
    $89 = load4(327948);
    $inc202 = (($89) + 1)|0;
    store4(327948,$inc202);
    $90 = load4(327956);
    $cmp198 = ($inc202|0)<($90|0);
    if (!($cmp198)) {
     break;
    }
   }
  }
  (_gettimeofday(($vararg_buffer52|0),($vararg_buffer49|0))|0);
  $91 = load4($vararg_buffer52);
  $conv$i$i388 = (+($91|0));
  $92 = load4($tv_usec$i$i389);
  $conv1$i$i390 = (+($92|0));
  $mul$i$i391 = $conv1$i$i390 * 9.9999999999999995E-7;
  $add$i$i392 = $conv$i$i388 + $mul$i$i391;
  $93 = loadd(4736);
  $sub$i393 = $add$i$i392 - $93;
  stored(4736,$sub$i393);
  $94 = load4(327956);
  $conv204 = (+($94|0));
  $div205 = $sub$i393 / $conv204;
  $conv206 = Math_fround($div205);
  $95 = load4(327952);
  $arrayidx207 = (328032 + ($95<<2)|0);
  storef($arrayidx207,$conv206);
  $arrayidx208 = (327972 + ($95<<2)|0);
  $96 = loadf($arrayidx208);
  $add210 = Math_fround($96 + $conv206);
  $conv213 = +$add210;
  $mul214 = $conv213 * 1.0E+6;
  $div215 = $conv212 / $mul214;
  $conv216 = Math_fround($div215);
  $arrayidx217 = (328092 + ($95<<2)|0);
  storef($arrayidx217,$conv216);
  $conv221 = Math_fround(Math_fround(2.0) / $conv216);
  $div223 = Math_fround($add210 / Math_fround(0.0560000017));
  $97 = loadf((328116));
  $add226 = Math_fround($97 + $conv216);
  storef((328116),$add226);
  $conv$i395 = +$96;
  $conv2$i397 = +$conv206;
  $98 = loadf($arrayidx217);
  $conv6$i401 = +$98;
  $conv8$i403 = +$conv221;
  $conv10$i405 = +$div223;
  stored($vararg_buffer54,$conv$i395);
  $vararg_ptr57 = ((($vararg_buffer54)) + 8|0);
  stored($vararg_ptr57,$conv2$i397);
  $vararg_ptr58 = ((($vararg_buffer54)) + 16|0);
  stored($vararg_ptr58,$conv213);
  $vararg_ptr59 = ((($vararg_buffer54)) + 24|0);
  stored($vararg_ptr59,$conv6$i401);
  $vararg_ptr60 = ((($vararg_buffer54)) + 32|0);
  stored($vararg_ptr60,$conv8$i403);
  $vararg_ptr61 = ((($vararg_buffer54)) + 40|0);
  stored($vararg_ptr61,$conv10$i405);
  (_printf(1857,$vararg_buffer54)|0);
  $99 = load4(327952);
  $inc228 = (($99) + 1)|0;
  store4(327952,$inc228);
  $cmp181 = ($inc228|0)<(6);
  if (!($cmp181)) {
   break;
  }
 }
 $100 = loadf((328116));
 $conv232 = Math_fround($100 / Math_fround(5.0));
 storef((328116),$conv232);
 $conv233 = +$conv232;
 stored($vararg_buffer62,$conv233);
 (_printf(1772,$vararg_buffer62)|0);
 (_puts(2001)|0);
 (_gettimeofday(($vararg_buffer62|0),($vararg_buffer54|0))|0);
 $101 = load4($vararg_buffer62);
 $conv$i$i411 = (+($101|0));
 $tv_usec$i$i412 = ((($vararg_buffer62)) + 4|0);
 $102 = load4($tv_usec$i$i412);
 $conv1$i$i413 = (+($102|0));
 $mul$i$i414 = $conv1$i$i413 * 9.9999999999999995E-7;
 $add$i$i415 = $conv$i$i411 + $mul$i$i414;
 stored(4736,$add$i$i415);
 store4(327948,0);
 if ($cmp96536) {
  $103 = load4(327968);
  $104 = load4(327944);
  $cmp48$i416 = ($104|0)==(0);
  $105 = $104 << 2;
  if ($cmp48$i416) {
   $106 = ($loop$0|0)>(1);
   $smax = $106 ? $loop$0 : 1;
   $inc241$lcssa = $smax;
  } else {
   $inc241532$us = 0;
   while(1) {
    $init$049$us$i418$us = 1325;$j$050$us$i417$us = 0;
    while(1) {
     $mul5$us$i419$us = Math_imul($j$050$us$i417$us, $103)|0;
     $i$047$us$i421$us = 0;$init$146$us$i422$us = $init$049$us$i418$us;
     while(1) {
      $mul$us$i423$us = ($init$146$us$i422$us*3125)|0;
      $rem$us$i424$us = (($mul$us$i423$us|0) % 65536)&-1;
      $addconv$us$i425$us = (($rem$us$i424$us) + -32768)|0;
      $sub$us$i426$us = (+($addconv$us$i425$us|0));
      $div$us$i427$us = $sub$us$i426$us * 6.103515625E-5;
      $conv4$us$i428$us = Math_fround($div$us$i427$us);
      $add$us$i429$us = (($i$047$us$i421$us) + ($mul5$us$i419$us))|0;
      $arrayidx$us$i430$us = (4744 + ($add$us$i429$us<<2)|0);
      storef($arrayidx$us$i430$us,$conv4$us$i428$us);
      $inc$us$i433$us = (($i$047$us$i421$us) + 1)|0;
      $exitcond54$i434$us = ($inc$us$i433$us|0)==($104|0);
      if ($exitcond54$i434$us) {
       break;
      } else {
       $i$047$us$i421$us = $inc$us$i433$us;$init$146$us$i422$us = $rem$us$i424$us;
      }
     }
     $inc15$us$i436$us = (($j$050$us$i417$us) + 1)|0;
     $exitcond55$i437$us = ($inc15$us$i436$us|0)==($104|0);
     if ($exitcond55$i437$us) {
      break;
     } else {
      $init$049$us$i418$us = $rem$us$i424$us;$j$050$us$i417$us = $inc15$us$i436$us;
     }
    }
    _memset((325544|0),0,($105|0))|0;
    $j$142$us$i441$us = 0;
    while(1) {
     $mul34$us$i442$us = Math_imul($j$142$us$i441$us, $103)|0;
     $i$240$us$i444$us = 0;
     while(1) {
      $arrayidx33$us$i445$us = (325544 + ($i$240$us$i444$us<<2)|0);
      $107 = loadf($arrayidx33$us$i445$us);
      $add35$us$i446$us = (($i$240$us$i444$us) + ($mul34$us$i442$us))|0;
      $arrayidx36$us$i447$us = (4744 + ($add35$us$i446$us<<2)|0);
      $108 = loadf($arrayidx36$us$i447$us);
      $add37$us$i448$us = Math_fround($107 + $108);
      storef($arrayidx33$us$i445$us,$add37$us$i448$us);
      $inc40$us$i449$us = (($i$240$us$i444$us) + 1)|0;
      $exitcond$i450$us = ($inc40$us$i449$us|0)==($104|0);
      if ($exitcond$i450$us) {
       break;
      } else {
       $i$240$us$i444$us = $inc40$us$i449$us;
      }
     }
     $inc43$us$i452$us = (($j$142$us$i441$us) + 1)|0;
     $exitcond51$i453$us = ($inc43$us$i452$us|0)==($104|0);
     if ($exitcond51$i453$us) {
      break;
     } else {
      $j$142$us$i441$us = $inc43$us$i452$us;
     }
    }
    $inc241$us = (($inc241532$us) + 1)|0;
    $cmp237$us = ($inc241$us|0)<($loop$0|0);
    if ($cmp237$us) {
     $inc241532$us = $inc241$us;
    } else {
     $inc241$lcssa = $inc241$us;
     break;
    }
   }
  }
  store4(327948,$inc241$lcssa);
 }
 (_gettimeofday(($vararg_buffer62|0),($vararg_buffer54|0))|0);
 $109 = load4($vararg_buffer62);
 $conv$i$i460 = (+($109|0));
 $tv_usec$i$i461 = ((($vararg_buffer62)) + 4|0);
 $110 = load4($tv_usec$i$i461);
 $conv1$i$i462 = (+($110|0));
 $mul$i$i463 = $conv1$i$i462 * 9.9999999999999995E-7;
 $add$i$i464 = $conv$i$i460 + $mul$i$i463;
 $111 = loadd(4736);
 $sub$i465 = $add$i$i464 - $111;
 stored(4736,$sub$i465);
 $conv243 = Math_fround($sub$i465);
 $conv244 = +$conv243;
 $div246 = $conv244 / $conv125;
 $conv247 = Math_fround($div246);
 $conv248 = +$conv247;
 stored($vararg_buffer65,$conv248);
 (_printf(1618,$vararg_buffer65)|0);
 $112 = load4(327968);
 store4($vararg_buffer68,$112);
 (_printf(1725,$vararg_buffer68)|0);
 (_printf(1536,$vararg_buffer71)|0);
 (_puts(2031)|0);
 $113 = load4(327956);
 $conv253 = (Math_fround(($113|0)));
 $mul254 = Math_fround($conv247 * $conv253);
 storef((328140),Math_fround(0.0));
 store4(327952,7);
 $tv_usec$i$i471 = ((($vararg_buffer71)) + 4|0);
 $tv_usec$i$i360 = ((($vararg_buffer71)) + 4|0);
 $conv266 = +$mul254;
 $tv_usec$i$i292 = ((($vararg_buffer71)) + 4|0);
 $tv_usec$i$i167 = ((($vararg_buffer71)) + 4|0);
 while(1) {
  (_gettimeofday(($vararg_buffer71|0),($vararg_buffer68|0))|0);
  $114 = load4($vararg_buffer71);
  $conv$i$i470 = (+($114|0));
  $115 = load4($tv_usec$i$i471);
  $conv1$i$i472 = (+($115|0));
  $mul$i$i473 = $conv1$i$i472 * 9.9999999999999995E-7;
  $add$i$i474 = $conv$i$i470 + $mul$i$i473;
  stored(4736,$add$i$i474);
  store4(327948,0);
  $116 = load4(327956);
  $cmp260529 = ($116|0)>(0);
  if ($cmp260529) {
   while(1) {
    $117 = load4(327968);
    $118 = load4(327944);
    $cmp48$i475 = ($118|0)==(0);
    if (!($cmp48$i475)) {
     $init$049$us$i477 = 1325;$j$050$us$i476 = 0;
     while(1) {
      $mul5$us$i478 = Math_imul($j$050$us$i476, $117)|0;
      $i$047$us$i480 = 0;$init$146$us$i481 = $init$049$us$i477;
      while(1) {
       $mul$us$i482 = ($init$146$us$i481*3125)|0;
       $rem$us$i483 = (($mul$us$i482|0) % 65536)&-1;
       $addconv$us$i484 = (($rem$us$i483) + -32768)|0;
       $sub$us$i485 = (+($addconv$us$i484|0));
       $div$us$i486 = $sub$us$i485 * 6.103515625E-5;
       $conv4$us$i487 = Math_fround($div$us$i486);
       $add$us$i488 = (($i$047$us$i480) + ($mul5$us$i478))|0;
       $arrayidx$us$i489 = (4744 + ($add$us$i488<<2)|0);
       storef($arrayidx$us$i489,$conv4$us$i487);
       $inc$us$i492 = (($i$047$us$i480) + 1)|0;
       $exitcond54$i493 = ($inc$us$i492|0)==($118|0);
       if ($exitcond54$i493) {
        break;
       } else {
        $i$047$us$i480 = $inc$us$i492;$init$146$us$i481 = $rem$us$i483;
       }
      }
      $inc15$us$i495 = (($j$050$us$i476) + 1)|0;
      $exitcond55$i496 = ($inc15$us$i495|0)==($118|0);
      if ($exitcond55$i496) {
       break;
      } else {
       $init$049$us$i477 = $rem$us$i483;$j$050$us$i476 = $inc15$us$i495;
      }
     }
     $119 = $118 << 2;
     _memset((325544|0),0,($119|0))|0;
     $j$142$us$i500 = 0;
     while(1) {
      $mul34$us$i501 = Math_imul($j$142$us$i500, $117)|0;
      $i$240$us$i503 = 0;
      while(1) {
       $arrayidx33$us$i504 = (325544 + ($i$240$us$i503<<2)|0);
       $120 = loadf($arrayidx33$us$i504);
       $add35$us$i505 = (($i$240$us$i503) + ($mul34$us$i501))|0;
       $arrayidx36$us$i506 = (4744 + ($add35$us$i505<<2)|0);
       $121 = loadf($arrayidx36$us$i506);
       $add37$us$i507 = Math_fround($120 + $121);
       storef($arrayidx33$us$i504,$add37$us$i507);
       $inc40$us$i508 = (($i$240$us$i503) + 1)|0;
       $exitcond$i509 = ($inc40$us$i508|0)==($118|0);
       if ($exitcond$i509) {
        break;
       } else {
        $i$240$us$i503 = $inc40$us$i508;
       }
      }
      $inc43$us$i511 = (($j$142$us$i500) + 1)|0;
      $exitcond51$i512 = ($inc43$us$i511|0)==($118|0);
      if ($exitcond51$i512) {
       break;
      } else {
       $j$142$us$i500 = $inc43$us$i511;
      }
     }
    }
    _dgefa(4744,$117,$118,327144,327960);
    $122 = load4(327948);
    $inc264 = (($122) + 1)|0;
    store4(327948,$inc264);
    $123 = load4(327956);
    $cmp260 = ($inc264|0)<($123|0);
    if (!($cmp260)) {
     break;
    }
   }
  }
  (_gettimeofday(($vararg_buffer71|0),($vararg_buffer68|0))|0);
  $124 = load4($vararg_buffer71);
  $conv$i$i359 = (+($124|0));
  $125 = load4($tv_usec$i$i360);
  $conv1$i$i361 = (+($125|0));
  $mul$i$i362 = $conv1$i$i361 * 9.9999999999999995E-7;
  $add$i$i363 = $conv$i$i359 + $mul$i$i362;
  $126 = loadd(4736);
  $sub$i364 = $add$i$i363 - $126;
  stored(4736,$sub$i364);
  $sub267 = $sub$i364 - $conv266;
  $127 = load4(327956);
  $conv268 = (+($127|0));
  $div269 = $sub267 / $conv268;
  $conv270 = Math_fround($div269);
  $128 = load4(327952);
  $arrayidx271 = (327972 + ($128<<2)|0);
  storef($arrayidx271,$conv270);
  (_gettimeofday(($vararg_buffer71|0),($vararg_buffer68|0))|0);
  $129 = load4($vararg_buffer71);
  $conv$i$i291 = (+($129|0));
  $130 = load4($tv_usec$i$i292);
  $conv1$i$i293 = (+($130|0));
  $mul$i$i294 = $conv1$i$i293 * 9.9999999999999995E-7;
  $add$i$i295 = $conv$i$i291 + $mul$i$i294;
  stored(4736,$add$i$i295);
  store4(327948,0);
  $131 = load4(327956);
  $cmp273530 = ($131|0)>(0);
  if ($cmp273530) {
   while(1) {
    $132 = load4(327968);
    $133 = load4(327944);
    _dgesl(4744,$132,$133,327144,325544,0);
    $134 = load4(327948);
    $inc277 = (($134) + 1)|0;
    store4(327948,$inc277);
    $135 = load4(327956);
    $cmp273 = ($inc277|0)<($135|0);
    if (!($cmp273)) {
     break;
    }
   }
  }
  (_gettimeofday(($vararg_buffer71|0),($vararg_buffer68|0))|0);
  $136 = load4($vararg_buffer71);
  $conv$i$i166 = (+($136|0));
  $137 = load4($tv_usec$i$i167);
  $conv1$i$i168 = (+($137|0));
  $mul$i$i169 = $conv1$i$i168 * 9.9999999999999995E-7;
  $add$i$i170 = $conv$i$i166 + $mul$i$i169;
  $138 = loadd(4736);
  $sub$i171 = $add$i$i170 - $138;
  stored(4736,$sub$i171);
  $139 = load4(327956);
  $conv279 = (+($139|0));
  $div280 = $sub$i171 / $conv279;
  $conv281 = Math_fround($div280);
  $140 = load4(327952);
  $arrayidx282 = (328032 + ($140<<2)|0);
  storef($arrayidx282,$conv281);
  $arrayidx283 = (327972 + ($140<<2)|0);
  $141 = loadf($arrayidx283);
  $add285 = Math_fround($141 + $conv281);
  $conv288 = +$add285;
  $mul289 = $conv288 * 1.0E+6;
  $div290 = $conv212 / $mul289;
  $conv291 = Math_fround($div290);
  $arrayidx292 = (328092 + ($140<<2)|0);
  storef($arrayidx292,$conv291);
  $conv296 = Math_fround(Math_fround(2.0) / $conv291);
  $div298 = Math_fround($add285 / Math_fround(0.0560000017));
  $142 = loadf((328140));
  $add301 = Math_fround($142 + $conv291);
  storef((328140),$add301);
  $conv$i = +$141;
  $conv2$i = +$conv281;
  $143 = loadf($arrayidx292);
  $conv6$i = +$143;
  $conv8$i = +$conv296;
  $conv10$i = +$div298;
  stored($vararg_buffer73,$conv$i);
  $vararg_ptr76 = ((($vararg_buffer73)) + 8|0);
  stored($vararg_ptr76,$conv2$i);
  $vararg_ptr77 = ((($vararg_buffer73)) + 16|0);
  stored($vararg_ptr77,$conv288);
  $vararg_ptr78 = ((($vararg_buffer73)) + 24|0);
  stored($vararg_ptr78,$conv6$i);
  $vararg_ptr79 = ((($vararg_buffer73)) + 32|0);
  stored($vararg_ptr79,$conv8$i);
  $vararg_ptr80 = ((($vararg_buffer73)) + 40|0);
  stored($vararg_ptr80,$conv10$i);
  (_printf(1857,$vararg_buffer73)|0);
  $144 = load4(327952);
  $inc303 = (($144) + 1)|0;
  store4(327952,$inc303);
  $cmp256 = ($inc303|0)<(12);
  if (!($cmp256)) {
   break;
  }
 }
 $145 = loadf((328140));
 $conv307 = Math_fround($145 / Math_fround(5.0));
 storef((328140),$conv307);
 $conv308 = +$conv307;
 stored($vararg_buffer81,$conv308);
 (_printf(1772,$vararg_buffer81)|0);
 $146 = loadf((328116));
 $147 = loadf((328140));
 $cmp310 = $147 < $146;
 $mflops$0 = $cmp310 ? $147 : $146;
 (_putchar(10)|0);
 store4($vararg_buffer84,1256);
 (_printf(1252,$vararg_buffer84)|0);
 store4($vararg_buffer87,1265);
 (_printf(1252,$vararg_buffer87)|0);
 $conv317 = +$mflops$0;
 stored($vararg_buffer90,$conv317);
 (_printf(1813,$vararg_buffer90)|0);
 store4(327948,12);
 stored($vararg_buffer93,$conv71);
 (_sprintf($was,1841,$vararg_buffer93)|0);
 $arraydecay353 = ((($was)) + 20|0);
 stored($vararg_buffer96,$conv72);
 (_sprintf($arraydecay353,1848,$vararg_buffer96)|0);
 $arraydecay357 = ((($was)) + 40|0);
 stored($vararg_buffer99,1.1920928955078125E-7);
 (_sprintf($arraydecay357,1848,$vararg_buffer99)|0);
 $arraydecay361 = ((($was)) + 60|0);
 stored($vararg_buffer102,$conv74);
 (_sprintf($arraydecay361,1848,$vararg_buffer102)|0);
 $arraydecay365 = ((($was)) + 80|0);
 stored($vararg_buffer105,$conv75);
 (_sprintf($arraydecay365,1848,$vararg_buffer105)|0);
 (_strtol(1855,0,10)|0);
 (_putchar(10)|0);
 STACKTOP = sp;return 0;
}
function _dgefa($a,$lda,$n,$ipvt,$info) {
 $a = $a|0;
 $lda = $lda|0;
 $n = $n|0;
 $ipvt = $ipvt|0;
 $info = $info|0;
 var $$pre = Math_fround(0), $0 = Math_fround(0), $1 = Math_fround(0), $10 = Math_fround(0), $11 = Math_fround(0), $12 = 0, $13 = Math_fround(0), $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $2 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0);
 var $26 = Math_fround(0), $27 = Math_fround(0), $28 = Math_fround(0), $29 = Math_fround(0), $3 = 0, $30 = Math_fround(0), $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $4 = Math_fround(0), $5 = Math_fround(0), $6 = Math_fround(0), $7 = Math_fround(0), $8 = Math_fround(0), $9 = Math_fround(0), $add = 0, $add27$i = 0, $add3 = 0, $add32$i = 0;
 var $add36 = 0, $add37$i = 0, $add4 = 0, $add40$i = Math_fround(0), $add40$i$us = Math_fround(0), $add42$i = 0, $add43 = 0, $add43$us = 0, $add48$i = 0, $add49$us = 0, $add57$i = Math_fround(0), $add57$i$us = Math_fround(0), $add59$i = 0, $add59$i$us = 0, $add64$i = Math_fround(0), $add64$i$us = Math_fround(0), $add66 = 0, $add66$us = 0, $add67$i = 0, $add67$i$us = 0;
 var $add7 = 0, $add72$i = Math_fround(0), $add72$i$us = Math_fround(0), $add75$i = 0, $add75$i$us = 0, $add79 = 0, $add80$i = Math_fround(0), $add80$i$us = Math_fround(0), $add84$i = 0, $add84$i$us = 0, $arrayidx = 0, $arrayidx12$i = 0, $arrayidx24$i = 0, $arrayidx28$i = 0, $arrayidx30$i = 0, $arrayidx33$i = 0, $arrayidx37 = 0, $arrayidx37$i = 0, $arrayidx37$i$us = 0, $arrayidx38$i = 0;
 var $arrayidx38$i96 = 0, $arrayidx38$i96$us = 0, $arrayidx43$i = 0, $arrayidx44 = 0, $arrayidx44$us = 0, $arrayidx5 = 0, $arrayidx50$us = 0, $arrayidx54$i = 0, $arrayidx54$i$us = 0, $arrayidx55$i = 0, $arrayidx55$i$us = 0, $arrayidx60$i = 0, $arrayidx60$i$us = 0, $arrayidx62$i = 0, $arrayidx62$i$us = 0, $arrayidx67 = 0, $arrayidx67$us = 0, $arrayidx68$i = 0, $arrayidx68$i$us = 0, $arrayidx70$i = 0;
 var $arrayidx70$i$us = 0, $arrayidx75 = 0, $arrayidx76$i = 0, $arrayidx76$i$us = 0, $arrayidx78$i = 0, $arrayidx78$i$us = 0, $arrayidx8 = 0, $arrayidx80 = 0, $cmp$i = 0, $cmp$i92 = 0, $cmp1$i = 0, $cmp1$i95 = 0, $cmp1$i95$us = 0, $cmp10$i = 0, $cmp1102 = 0, $cmp12 = 0, $cmp17$i = 0, $cmp22$i = 0, $cmp2252$i = 0, $cmp30$i = 0;
 var $cmp34$i = 0, $cmp3473$i = 0, $cmp39100 = 0, $cmp45$i = 0, $cmp51$i = 0, $cmp51$i$us = 0, $cmp5171$i = 0, $cmp5171$i$us = 0, $cmp7$i = 0, $cmp82 = 0, $cmp9 = 0, $conv31 = Math_fround(0), $dmax$231$i = Math_fround(0), $dmax$3$i = Math_fround(0), $exitcond = 0, $exitcond$i = 0, $exitcond105 = 0, $exitcond106 = 0, $exitcond76$i = 0, $exitcond76$i$us = 0;
 var $fabsf$i = Math_fround(0), $fabsf26$i = Math_fround(0), $i$132$i = 0, $i$155$i = 0, $i$174$i = 0, $i$174$i$us = 0, $i$2$ph$i = 0, $i$2$ph$i99 = 0, $i$2$ph$i99$us = 0, $i$253$i = 0, $i$272$i = 0, $i$272$i$us = 0, $inc = 0, $inc$i = 0, $inc$us = 0, $inc43$i = 0, $inc43$i98 = 0, $inc43$i98$us = 0, $itemp$233$i = 0, $itemp$3$i = 0;
 var $j$0101 = 0, $j$0101$us = 0, $k$0103 = 0, $mul = 0, $mul13$i = Math_fround(0), $mul25$i = Math_fround(0), $mul29$i = Math_fround(0), $mul34$i = Math_fround(0), $mul39$i = Math_fround(0), $mul39$i97 = Math_fround(0), $mul39$i97$us = Math_fround(0), $mul42 = 0, $mul42$us = 0, $mul44$i = Math_fround(0), $mul56$i = Math_fround(0), $mul56$i$us = Math_fround(0), $mul63$i = Math_fround(0), $mul63$i$us = Math_fround(0), $mul71$i = Math_fround(0), $mul71$i$us = Math_fround(0);
 var $mul77 = 0, $mul79$i = Math_fround(0), $mul79$i$us = Math_fround(0), $or$cond65$i = 0, $or$cond65$i$us = 0, $rem$i = 0, $rem50$i = 0, $retval$0$i = 0, $sub = 0, $sub2 = 0, $sub33 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($info,0);
 $sub = (($n) + -1)|0;
 $cmp1102 = ($n|0)>(1);
 if ($cmp1102) {
  $k$0103 = 0;
  while(1) {
   $add = (($k$0103) + 1)|0;
   $sub2 = (($n) - ($k$0103))|0;
   $mul = Math_imul($k$0103, $lda)|0;
   $add3 = (($mul) + ($k$0103))|0;
   $arrayidx = (($a) + ($add3<<2)|0);
   $cmp$i = ($sub2|0)<(1);
   if ($cmp$i) {
    $retval$0$i = -1;
   } else {
    $cmp1$i = ($sub2|0)==(1);
    if ($cmp1$i) {
     $retval$0$i = 0;
    } else {
     $0 = loadf($arrayidx);
     $fabsf$i = (Math_fround(Math_abs((Math_fround($0)))));
     $dmax$231$i = $fabsf$i;$i$132$i = 1;$itemp$233$i = 0;
     while(1) {
      $arrayidx30$i = (($arrayidx) + ($i$132$i<<2)|0);
      $1 = loadf($arrayidx30$i);
      $fabsf26$i = (Math_fround(Math_abs((Math_fround($1)))));
      $cmp34$i = $fabsf26$i > $dmax$231$i;
      $dmax$3$i = $cmp34$i ? $fabsf26$i : $dmax$231$i;
      $itemp$3$i = $cmp34$i ? $i$132$i : $itemp$233$i;
      $inc43$i = (($i$132$i) + 1)|0;
      $exitcond$i = ($inc43$i|0)==($sub2|0);
      if ($exitcond$i) {
       $retval$0$i = $itemp$3$i;
       break;
      } else {
       $dmax$231$i = $dmax$3$i;$i$132$i = $inc43$i;$itemp$233$i = $itemp$3$i;
      }
     }
    }
   }
   $add4 = (($retval$0$i) + ($k$0103))|0;
   $arrayidx5 = (($ipvt) + ($k$0103<<2)|0);
   store4($arrayidx5,$add4);
   $add7 = (($add4) + ($mul))|0;
   $arrayidx8 = (($a) + ($add7<<2)|0);
   $2 = loadf($arrayidx8);
   $cmp9 = $2 != Math_fround(0.0);
   if ($cmp9) {
    $cmp12 = ($retval$0$i|0)!=(0);
    if ($cmp12) {
     $3 = load4($arrayidx);
     store4($arrayidx8,$3);
     storef($arrayidx,$2);
     $4 = $2;
    } else {
     $$pre = loadf($arrayidx);
     $4 = $$pre;
    }
    $conv31 = Math_fround(Math_fround(-1.0) / $4);
    $sub33 = (($n) - ($add))|0;
    $add36 = (($add3) + 1)|0;
    $arrayidx37 = (($a) + ($add36<<2)|0);
    $cmp$i92 = ($sub33|0)<(1);
    do {
     if (!($cmp$i92)) {
      $rem50$i = (($sub33>>>0) % 5)&-1;
      $cmp7$i = ($rem50$i|0)==(0);
      if ($cmp7$i) {
       $i$2$ph$i = 0;
      } else {
       $i$155$i = 0;
       while(1) {
        $arrayidx12$i = (($arrayidx37) + ($i$155$i<<2)|0);
        $5 = loadf($arrayidx12$i);
        $mul13$i = Math_fround($conv31 * $5);
        storef($arrayidx12$i,$mul13$i);
        $inc$i = (($i$155$i) + 1)|0;
        $cmp10$i = ($inc$i|0)<($rem50$i|0);
        if ($cmp10$i) {
         $i$155$i = $inc$i;
        } else {
         break;
        }
       }
       $cmp17$i = ($sub33|0)<(5);
       if ($cmp17$i) {
        break;
       } else {
        $i$2$ph$i = $rem50$i;
       }
      }
      $cmp2252$i = ($i$2$ph$i|0)<($sub33|0);
      if ($cmp2252$i) {
       $i$253$i = $i$2$ph$i;
       while(1) {
        $arrayidx24$i = (($arrayidx37) + ($i$253$i<<2)|0);
        $6 = loadf($arrayidx24$i);
        $mul25$i = Math_fround($conv31 * $6);
        storef($arrayidx24$i,$mul25$i);
        $add27$i = (($i$253$i) + 1)|0;
        $arrayidx28$i = (($arrayidx37) + ($add27$i<<2)|0);
        $7 = loadf($arrayidx28$i);
        $mul29$i = Math_fround($conv31 * $7);
        storef($arrayidx28$i,$mul29$i);
        $add32$i = (($i$253$i) + 2)|0;
        $arrayidx33$i = (($arrayidx37) + ($add32$i<<2)|0);
        $8 = loadf($arrayidx33$i);
        $mul34$i = Math_fround($conv31 * $8);
        storef($arrayidx33$i,$mul34$i);
        $add37$i = (($i$253$i) + 3)|0;
        $arrayidx38$i = (($arrayidx37) + ($add37$i<<2)|0);
        $9 = loadf($arrayidx38$i);
        $mul39$i = Math_fround($conv31 * $9);
        storef($arrayidx38$i,$mul39$i);
        $add42$i = (($i$253$i) + 4)|0;
        $arrayidx43$i = (($arrayidx37) + ($add42$i<<2)|0);
        $10 = loadf($arrayidx43$i);
        $mul44$i = Math_fround($conv31 * $10);
        storef($arrayidx43$i,$mul44$i);
        $add48$i = (($i$253$i) + 5)|0;
        $cmp22$i = ($add48$i|0)<($sub33|0);
        if ($cmp22$i) {
         $i$253$i = $add48$i;
        } else {
         break;
        }
       }
      }
     }
    } while(0);
    $cmp39100 = ($add|0)<($n|0);
    if ($cmp39100) {
     $rem$i = (($sub33|0) % 4)&-1;
     $cmp30$i = ($rem$i|0)==(0);
     $cmp3473$i = ($rem$i|0)>(0);
     $cmp45$i = ($sub33|0)<(4);
     if ($cmp12) {
      $j$0101$us = $add;
      while(1) {
       $mul42$us = Math_imul($j$0101$us, $lda)|0;
       $add43$us = (($mul42$us) + ($add4))|0;
       $arrayidx44$us = (($a) + ($add43$us<<2)|0);
       $11 = loadf($arrayidx44$us);
       $add49$us = (($mul42$us) + ($k$0103))|0;
       $arrayidx50$us = (($a) + ($add49$us<<2)|0);
       $12 = load4($arrayidx50$us);
       store4($arrayidx44$us,$12);
       storef($arrayidx50$us,$11);
       $add66$us = (($add) + ($mul42$us))|0;
       $arrayidx67$us = (($a) + ($add66$us<<2)|0);
       $cmp1$i95$us = $11 == Math_fround(0.0);
       $or$cond65$i$us = $cmp$i92 | $cmp1$i95$us;
       do {
        if (!($or$cond65$i$us)) {
         if ($cmp30$i) {
          $i$2$ph$i99$us = 0;
         } else {
          if ($cmp3473$i) {
           $i$174$i$us = 0;
           while(1) {
            $arrayidx37$i$us = (($arrayidx67$us) + ($i$174$i$us<<2)|0);
            $13 = loadf($arrayidx37$i$us);
            $arrayidx38$i96$us = (($arrayidx37) + ($i$174$i$us<<2)|0);
            $14 = loadf($arrayidx38$i96$us);
            $mul39$i97$us = Math_fround($11 * $14);
            $add40$i$us = Math_fround($13 + $mul39$i97$us);
            storef($arrayidx37$i$us,$add40$i$us);
            $inc43$i98$us = (($i$174$i$us) + 1)|0;
            $exitcond76$i$us = ($inc43$i98$us|0)==($rem$i|0);
            if ($exitcond76$i$us) {
             break;
            } else {
             $i$174$i$us = $inc43$i98$us;
            }
           }
          }
          if ($cmp45$i) {
           break;
          } else {
           $i$2$ph$i99$us = $rem$i;
          }
         }
         $cmp5171$i$us = ($i$2$ph$i99$us|0)<($sub33|0);
         if ($cmp5171$i$us) {
          $i$272$i$us = $i$2$ph$i99$us;
          while(1) {
           $arrayidx54$i$us = (($arrayidx67$us) + ($i$272$i$us<<2)|0);
           $15 = loadf($arrayidx54$i$us);
           $arrayidx55$i$us = (($arrayidx37) + ($i$272$i$us<<2)|0);
           $16 = loadf($arrayidx55$i$us);
           $mul56$i$us = Math_fround($11 * $16);
           $add57$i$us = Math_fround($15 + $mul56$i$us);
           storef($arrayidx54$i$us,$add57$i$us);
           $add59$i$us = (($i$272$i$us) + 1)|0;
           $arrayidx60$i$us = (($arrayidx67$us) + ($add59$i$us<<2)|0);
           $17 = loadf($arrayidx60$i$us);
           $arrayidx62$i$us = (($arrayidx37) + ($add59$i$us<<2)|0);
           $18 = loadf($arrayidx62$i$us);
           $mul63$i$us = Math_fround($11 * $18);
           $add64$i$us = Math_fround($17 + $mul63$i$us);
           storef($arrayidx60$i$us,$add64$i$us);
           $add67$i$us = (($i$272$i$us) + 2)|0;
           $arrayidx68$i$us = (($arrayidx67$us) + ($add67$i$us<<2)|0);
           $19 = loadf($arrayidx68$i$us);
           $arrayidx70$i$us = (($arrayidx37) + ($add67$i$us<<2)|0);
           $20 = loadf($arrayidx70$i$us);
           $mul71$i$us = Math_fround($11 * $20);
           $add72$i$us = Math_fround($19 + $mul71$i$us);
           storef($arrayidx68$i$us,$add72$i$us);
           $add75$i$us = (($i$272$i$us) + 3)|0;
           $arrayidx76$i$us = (($arrayidx67$us) + ($add75$i$us<<2)|0);
           $21 = loadf($arrayidx76$i$us);
           $arrayidx78$i$us = (($arrayidx37) + ($add75$i$us<<2)|0);
           $22 = loadf($arrayidx78$i$us);
           $mul79$i$us = Math_fround($11 * $22);
           $add80$i$us = Math_fround($21 + $mul79$i$us);
           storef($arrayidx76$i$us,$add80$i$us);
           $add84$i$us = (($i$272$i$us) + 4)|0;
           $cmp51$i$us = ($add84$i$us|0)<($sub33|0);
           if ($cmp51$i$us) {
            $i$272$i$us = $add84$i$us;
           } else {
            break;
           }
          }
         }
        }
       } while(0);
       $inc$us = (($j$0101$us) + 1)|0;
       $exitcond105 = ($inc$us|0)==($n|0);
       if ($exitcond105) {
        break;
       } else {
        $j$0101$us = $inc$us;
       }
      }
     } else {
      $j$0101 = $add;
      while(1) {
       $mul42 = Math_imul($j$0101, $lda)|0;
       $add43 = (($mul42) + ($add4))|0;
       $arrayidx44 = (($a) + ($add43<<2)|0);
       $23 = loadf($arrayidx44);
       $add66 = (($add) + ($mul42))|0;
       $arrayidx67 = (($a) + ($add66<<2)|0);
       $cmp1$i95 = $23 == Math_fround(0.0);
       $or$cond65$i = $cmp$i92 | $cmp1$i95;
       do {
        if (!($or$cond65$i)) {
         if ($cmp30$i) {
          $i$2$ph$i99 = 0;
         } else {
          if ($cmp3473$i) {
           $i$174$i = 0;
           while(1) {
            $arrayidx37$i = (($arrayidx67) + ($i$174$i<<2)|0);
            $24 = loadf($arrayidx37$i);
            $arrayidx38$i96 = (($arrayidx37) + ($i$174$i<<2)|0);
            $25 = loadf($arrayidx38$i96);
            $mul39$i97 = Math_fround($23 * $25);
            $add40$i = Math_fround($24 + $mul39$i97);
            storef($arrayidx37$i,$add40$i);
            $inc43$i98 = (($i$174$i) + 1)|0;
            $exitcond76$i = ($inc43$i98|0)==($rem$i|0);
            if ($exitcond76$i) {
             break;
            } else {
             $i$174$i = $inc43$i98;
            }
           }
          }
          if ($cmp45$i) {
           break;
          } else {
           $i$2$ph$i99 = $rem$i;
          }
         }
         $cmp5171$i = ($i$2$ph$i99|0)<($sub33|0);
         if ($cmp5171$i) {
          $i$272$i = $i$2$ph$i99;
          while(1) {
           $arrayidx54$i = (($arrayidx67) + ($i$272$i<<2)|0);
           $26 = loadf($arrayidx54$i);
           $arrayidx55$i = (($arrayidx37) + ($i$272$i<<2)|0);
           $27 = loadf($arrayidx55$i);
           $mul56$i = Math_fround($23 * $27);
           $add57$i = Math_fround($26 + $mul56$i);
           storef($arrayidx54$i,$add57$i);
           $add59$i = (($i$272$i) + 1)|0;
           $arrayidx60$i = (($arrayidx67) + ($add59$i<<2)|0);
           $28 = loadf($arrayidx60$i);
           $arrayidx62$i = (($arrayidx37) + ($add59$i<<2)|0);
           $29 = loadf($arrayidx62$i);
           $mul63$i = Math_fround($23 * $29);
           $add64$i = Math_fround($28 + $mul63$i);
           storef($arrayidx60$i,$add64$i);
           $add67$i = (($i$272$i) + 2)|0;
           $arrayidx68$i = (($arrayidx67) + ($add67$i<<2)|0);
           $30 = loadf($arrayidx68$i);
           $arrayidx70$i = (($arrayidx37) + ($add67$i<<2)|0);
           $31 = loadf($arrayidx70$i);
           $mul71$i = Math_fround($23 * $31);
           $add72$i = Math_fround($30 + $mul71$i);
           storef($arrayidx68$i,$add72$i);
           $add75$i = (($i$272$i) + 3)|0;
           $arrayidx76$i = (($arrayidx67) + ($add75$i<<2)|0);
           $32 = loadf($arrayidx76$i);
           $arrayidx78$i = (($arrayidx37) + ($add75$i<<2)|0);
           $33 = loadf($arrayidx78$i);
           $mul79$i = Math_fround($23 * $33);
           $add80$i = Math_fround($32 + $mul79$i);
           storef($arrayidx76$i,$add80$i);
           $add84$i = (($i$272$i) + 4)|0;
           $cmp51$i = ($add84$i|0)<($sub33|0);
           if ($cmp51$i) {
            $i$272$i = $add84$i;
           } else {
            break;
           }
          }
         }
        }
       } while(0);
       $inc = (($j$0101) + 1)|0;
       $exitcond = ($inc|0)==($n|0);
       if ($exitcond) {
        break;
       } else {
        $j$0101 = $inc;
       }
      }
     }
    }
   } else {
    store4($info,$k$0103);
   }
   $exitcond106 = ($add|0)==($sub|0);
   if ($exitcond106) {
    break;
   } else {
    $k$0103 = $add;
   }
  }
 }
 $arrayidx75 = (($ipvt) + ($sub<<2)|0);
 store4($arrayidx75,$sub);
 $mul77 = Math_imul($sub, $lda)|0;
 $add79 = (($mul77) + ($sub))|0;
 $arrayidx80 = (($a) + ($add79<<2)|0);
 $34 = loadf($arrayidx80);
 $cmp82 = $34 == Math_fround(0.0);
 if (!($cmp82)) {
  return;
 }
 store4($info,$sub);
 return;
}
function _dgesl($a,$lda,$n,$ipvt,$b,$job) {
 $a = $a|0;
 $lda = $lda|0;
 $n = $n|0;
 $ipvt = $ipvt|0;
 $b = $b|0;
 $job = $job|0;
 var $0 = 0, $1 = 0, $10 = Math_fround(0), $11 = Math_fround(0), $12 = Math_fround(0), $13 = Math_fround(0), $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $2 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0);
 var $27 = Math_fround(0), $28 = Math_fround(0), $29 = Math_fround(0), $3 = 0, $30 = Math_fround(0), $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $4 = Math_fround(0), $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0), $44 = Math_fround(0);
 var $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = Math_fround(0), $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0), $53 = 0, $54 = 0, $6 = Math_fround(0), $7 = Math_fround(0), $8 = Math_fround(0), $9 = Math_fround(0), $add = 0, $add12 = 0, $add20 = 0, $add24 = 0, $add28$i = Math_fround(0);
 var $add28$i104 = Math_fround(0), $add40$i = Math_fround(0), $add40$i157 = Math_fround(0), $add42$i = Math_fround(0), $add42$i119 = Math_fround(0), $add43$i = 0, $add43$i120 = 0, $add46 = 0, $add48$i = Math_fround(0), $add48$i124 = Math_fround(0), $add49$i = 0, $add49$i125 = 0, $add54$i = Math_fround(0), $add54$i129 = Math_fround(0), $add55$i = 0, $add55$i130 = 0, $add57$i = Math_fround(0), $add57$i170 = Math_fround(0), $add58 = 0, $add59$i = 0;
 var $add59$i171 = 0, $add60$i = Math_fround(0), $add60$i134 = Math_fround(0), $add61 = 0, $add61$i = 0, $add61$i135 = 0, $add64$i = Math_fround(0), $add64$i175 = Math_fround(0), $add65 = 0, $add66$i = Math_fround(0), $add66$i139 = Math_fround(0), $add67$i = 0, $add67$i176 = 0, $add68$i = 0, $add68$i140 = 0, $add70 = Math_fround(0), $add72$i = Math_fround(0), $add72$i180 = Math_fround(0), $add75$i = 0, $add75$i181 = 0;
 var $add80$i = Math_fround(0), $add80$i185 = Math_fround(0), $add84$i = 0, $add84$i186 = 0, $arrayidx = 0, $arrayidx13 = 0, $arrayidx15 = 0, $arrayidx22 = 0, $arrayidx25 = 0, $arrayidx25$i = 0, $arrayidx25$i101 = 0, $arrayidx26$i = 0, $arrayidx26$i102 = 0, $arrayidx31 = 0, $arrayidx37$i = 0, $arrayidx37$i154 = 0, $arrayidx38$i = 0, $arrayidx38$i155 = 0, $arrayidx39$i = 0, $arrayidx39$i116 = 0;
 var $arrayidx4 = 0, $arrayidx40$i = 0, $arrayidx40$i117 = 0, $arrayidx41 = 0, $arrayidx43 = 0, $arrayidx44$i = 0, $arrayidx44$i121 = 0, $arrayidx46$i = 0, $arrayidx46$i122 = 0, $arrayidx47 = 0, $arrayidx50$i = 0, $arrayidx50$i126 = 0, $arrayidx52$i = 0, $arrayidx52$i127 = 0, $arrayidx54$i = 0, $arrayidx54$i167 = 0, $arrayidx55$i = 0, $arrayidx55$i168 = 0, $arrayidx56$i = 0, $arrayidx56$i131 = 0;
 var $arrayidx58$i = 0, $arrayidx58$i132 = 0, $arrayidx60 = 0, $arrayidx60$i = 0, $arrayidx60$i172 = 0, $arrayidx62$i = 0, $arrayidx62$i136 = 0, $arrayidx62$i173 = 0, $arrayidx62$i94 = 0, $arrayidx64$i = 0, $arrayidx64$i137 = 0, $arrayidx66 = 0, $arrayidx68 = 0, $arrayidx68$i = 0, $arrayidx68$i177 = 0, $arrayidx7 = 0, $arrayidx70$i = 0, $arrayidx70$i178 = 0, $arrayidx72 = 0, $arrayidx75 = 0;
 var $arrayidx76$i = 0, $arrayidx76$i182 = 0, $arrayidx78$i = 0, $arrayidx78$i183 = 0, $cmp = 0, $cmp$i = 0, $cmp$i145 = 0, $cmp$i95 = 0, $cmp1$i = 0, $cmp1$i146 = 0, $cmp18191 = 0, $cmp20$i = 0, $cmp20$i98 = 0, $cmp23$i = 0, $cmp23$i106 = 0, $cmp30$i = 0, $cmp30$i150 = 0, $cmp32$i = 0, $cmp32$i108 = 0, $cmp3473$i = 0;
 var $cmp3473$i151 = 0, $cmp37$i = 0, $cmp37$i141 = 0, $cmp37197 = 0, $cmp3762$i = 0, $cmp3762$i112 = 0, $cmp45$i = 0, $cmp45$i161 = 0, $cmp5 = 0, $cmp51$i = 0, $cmp51$i187 = 0, $cmp5171$i = 0, $cmp5171$i164 = 0, $cmp53 = 0, $cmp56195 = 0, $cmp73 = 0, $div = Math_fround(0), $div48 = Math_fround(0), $dtemp$167$i = Math_fround(0), $dtemp$167$i100 = Math_fround(0);
 var $dtemp$3$ph$i = Math_fround(0), $dtemp$3$ph$i110 = Math_fround(0), $dtemp$363$i = Math_fround(0), $dtemp$363$i115 = Math_fround(0), $exitcond = 0, $exitcond201 = 0, $exitcond202 = 0, $exitcond203 = 0, $exitcond76$i = 0, $exitcond76$i159 = 0, $i$168$i = 0, $i$168$i99 = 0, $i$174$i = 0, $i$174$i153 = 0, $i$2$ph$i = 0, $i$2$ph$i111 = 0, $i$2$ph$i163 = 0, $i$2$ph$i93 = 0, $i$264$i = 0, $i$264$i114 = 0;
 var $i$272$i = 0, $i$272$i166 = 0, $inc30$i = 0, $inc30$i105 = 0, $inc43$i = 0, $inc43$i158 = 0, $inc51 = 0, $k$0194 = 0, $k$1198 = 0, $kb$0192 = 0, $kb$1196 = 0, $mul = 0, $mul23 = 0, $mul27$i = Math_fround(0), $mul27$i103 = Math_fround(0), $mul39 = 0, $mul39$i = Math_fround(0), $mul39$i156 = Math_fround(0), $mul41$i = Math_fround(0), $mul41$i118 = Math_fround(0);
 var $mul47$i = Math_fround(0), $mul47$i123 = Math_fround(0), $mul53$i = Math_fround(0), $mul53$i128 = Math_fround(0), $mul56$i = Math_fround(0), $mul56$i169 = Math_fround(0), $mul59$i = Math_fround(0), $mul59$i133 = Math_fround(0), $mul63 = 0, $mul63$i = Math_fround(0), $mul63$i174 = Math_fround(0), $mul65$i = Math_fround(0), $mul65$i138 = Math_fround(0), $mul71$i = Math_fround(0), $mul71$i179 = Math_fround(0), $mul79$i = Math_fround(0), $mul79$i184 = Math_fround(0), $or$cond199 = 0, $or$cond65$i = 0, $or$cond65$i147 = 0;
 var $rem$i = 0, $rem$i149 = 0, $rem55$i = 0, $rem55$i97 = 0, $retval$0$i = Math_fround(0), $retval$0$i143 = Math_fround(0), $sub = 0, $sub10 = 0, $sub21 = 0, $sub28 = Math_fround(0), $sub44 = Math_fround(0), $sub59 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $sub = (($n) + -1)|0;
 $cmp = ($job|0)==(0);
 if (!($cmp)) {
  $cmp37197 = ($n|0)>(0);
  if ($cmp37197) {
   $k$1198 = 0;
  } else {
   return;
  }
  while(1) {
   $mul39 = Math_imul($k$1198, $lda)|0;
   $arrayidx41 = (($a) + ($mul39<<2)|0);
   $cmp$i95 = ($k$1198|0)<(1);
   do {
    if ($cmp$i95) {
     $retval$0$i143 = Math_fround(0.0);
    } else {
     $rem55$i97 = (($k$1198>>>0) % 5)&-1;
     $cmp20$i98 = ($rem55$i97|0)==(0);
     if ($cmp20$i98) {
      $dtemp$3$ph$i110 = Math_fround(0.0);$i$2$ph$i111 = 0;
     } else {
      $dtemp$167$i100 = Math_fround(0.0);$i$168$i99 = 0;
      while(1) {
       $arrayidx25$i101 = (($arrayidx41) + ($i$168$i99<<2)|0);
       $26 = loadf($arrayidx25$i101);
       $arrayidx26$i102 = (($b) + ($i$168$i99<<2)|0);
       $27 = loadf($arrayidx26$i102);
       $mul27$i103 = Math_fround($26 * $27);
       $add28$i104 = Math_fround($dtemp$167$i100 + $mul27$i103);
       $inc30$i105 = (($i$168$i99) + 1)|0;
       $cmp23$i106 = ($inc30$i105|0)<($rem55$i97|0);
       if ($cmp23$i106) {
        $dtemp$167$i100 = $add28$i104;$i$168$i99 = $inc30$i105;
       } else {
        break;
       }
      }
      $cmp32$i108 = ($k$1198|0)<(5);
      if ($cmp32$i108) {
       $retval$0$i143 = $add28$i104;
       break;
      } else {
       $dtemp$3$ph$i110 = $add28$i104;$i$2$ph$i111 = $rem55$i97;
      }
     }
     $cmp3762$i112 = ($i$2$ph$i111|0)<($k$1198|0);
     if ($cmp3762$i112) {
      $dtemp$363$i115 = $dtemp$3$ph$i110;$i$264$i114 = $i$2$ph$i111;
      while(1) {
       $arrayidx39$i116 = (($arrayidx41) + ($i$264$i114<<2)|0);
       $28 = loadf($arrayidx39$i116);
       $arrayidx40$i117 = (($b) + ($i$264$i114<<2)|0);
       $29 = loadf($arrayidx40$i117);
       $mul41$i118 = Math_fround($28 * $29);
       $add42$i119 = Math_fround($dtemp$363$i115 + $mul41$i118);
       $add43$i120 = (($i$264$i114) + 1)|0;
       $arrayidx44$i121 = (($arrayidx41) + ($add43$i120<<2)|0);
       $30 = loadf($arrayidx44$i121);
       $arrayidx46$i122 = (($b) + ($add43$i120<<2)|0);
       $31 = loadf($arrayidx46$i122);
       $mul47$i123 = Math_fround($30 * $31);
       $add48$i124 = Math_fround($add42$i119 + $mul47$i123);
       $add49$i125 = (($i$264$i114) + 2)|0;
       $arrayidx50$i126 = (($arrayidx41) + ($add49$i125<<2)|0);
       $32 = loadf($arrayidx50$i126);
       $arrayidx52$i127 = (($b) + ($add49$i125<<2)|0);
       $33 = loadf($arrayidx52$i127);
       $mul53$i128 = Math_fround($32 * $33);
       $add54$i129 = Math_fround($add48$i124 + $mul53$i128);
       $add55$i130 = (($i$264$i114) + 3)|0;
       $arrayidx56$i131 = (($arrayidx41) + ($add55$i130<<2)|0);
       $34 = loadf($arrayidx56$i131);
       $arrayidx58$i132 = (($b) + ($add55$i130<<2)|0);
       $35 = loadf($arrayidx58$i132);
       $mul59$i133 = Math_fround($34 * $35);
       $add60$i134 = Math_fround($add54$i129 + $mul59$i133);
       $add61$i135 = (($i$264$i114) + 4)|0;
       $arrayidx62$i136 = (($arrayidx41) + ($add61$i135<<2)|0);
       $36 = loadf($arrayidx62$i136);
       $arrayidx64$i137 = (($b) + ($add61$i135<<2)|0);
       $37 = loadf($arrayidx64$i137);
       $mul65$i138 = Math_fround($36 * $37);
       $add66$i139 = Math_fround($add60$i134 + $mul65$i138);
       $add68$i140 = (($i$264$i114) + 5)|0;
       $cmp37$i141 = ($add68$i140|0)<($k$1198|0);
       if ($cmp37$i141) {
        $dtemp$363$i115 = $add66$i139;$i$264$i114 = $add68$i140;
       } else {
        $retval$0$i143 = $add66$i139;
        break;
       }
      }
     } else {
      $retval$0$i143 = $dtemp$3$ph$i110;
     }
    }
   } while(0);
   $arrayidx43 = (($b) + ($k$1198<<2)|0);
   $38 = loadf($arrayidx43);
   $sub44 = Math_fround($38 - $retval$0$i143);
   $add46 = (($mul39) + ($k$1198))|0;
   $arrayidx47 = (($a) + ($add46<<2)|0);
   $39 = loadf($arrayidx47);
   $div48 = Math_fround($sub44 / $39);
   storef($arrayidx43,$div48);
   $inc51 = (($k$1198) + 1)|0;
   $exitcond203 = ($inc51|0)==($n|0);
   if ($exitcond203) {
    break;
   } else {
    $k$1198 = $inc51;
   }
  }
  $cmp53 = ($n|0)>(1);
  $cmp56195 = ($sub|0)>(1);
  $or$cond199 = $cmp53 & $cmp56195;
  if ($or$cond199) {
   $kb$1196 = 1;
  } else {
   return;
  }
  while(1) {
   $add58 = (($kb$1196) + 1)|0;
   $sub59 = (($n) - ($add58))|0;
   $arrayidx60 = (($b) + ($sub59<<2)|0);
   $40 = loadf($arrayidx60);
   $add61 = (($sub59) + 1)|0;
   $mul63 = Math_imul($sub59, $lda)|0;
   $add65 = (($add61) + ($mul63))|0;
   $arrayidx66 = (($a) + ($add65<<2)|0);
   $arrayidx68 = (($b) + ($add61<<2)|0);
   $rem55$i = (($kb$1196>>>0) % 5)&-1;
   $cmp20$i = ($rem55$i|0)==(0);
   if ($cmp20$i) {
    $dtemp$3$ph$i = Math_fround(0.0);$i$2$ph$i93 = 0;
    label = 34;
   } else {
    $dtemp$167$i = Math_fround(0.0);$i$168$i = 0;
    while(1) {
     $arrayidx25$i = (($arrayidx66) + ($i$168$i<<2)|0);
     $41 = loadf($arrayidx25$i);
     $arrayidx26$i = (($arrayidx68) + ($i$168$i<<2)|0);
     $42 = loadf($arrayidx26$i);
     $mul27$i = Math_fround($41 * $42);
     $add28$i = Math_fround($dtemp$167$i + $mul27$i);
     $inc30$i = (($i$168$i) + 1)|0;
     $cmp23$i = ($inc30$i|0)<($rem55$i|0);
     if ($cmp23$i) {
      $dtemp$167$i = $add28$i;$i$168$i = $inc30$i;
     } else {
      break;
     }
    }
    $cmp32$i = ($kb$1196|0)<(5);
    if ($cmp32$i) {
     $retval$0$i = $add28$i;
    } else {
     $dtemp$3$ph$i = $add28$i;$i$2$ph$i93 = $rem55$i;
     label = 34;
    }
   }
   if ((label|0) == 34) {
    label = 0;
    $cmp3762$i = ($i$2$ph$i93|0)<($kb$1196|0);
    if ($cmp3762$i) {
     $dtemp$363$i = $dtemp$3$ph$i;$i$264$i = $i$2$ph$i93;
     while(1) {
      $arrayidx39$i = (($arrayidx66) + ($i$264$i<<2)|0);
      $43 = loadf($arrayidx39$i);
      $arrayidx40$i = (($arrayidx68) + ($i$264$i<<2)|0);
      $44 = loadf($arrayidx40$i);
      $mul41$i = Math_fround($43 * $44);
      $add42$i = Math_fround($dtemp$363$i + $mul41$i);
      $add43$i = (($i$264$i) + 1)|0;
      $arrayidx44$i = (($arrayidx66) + ($add43$i<<2)|0);
      $45 = loadf($arrayidx44$i);
      $arrayidx46$i = (($arrayidx68) + ($add43$i<<2)|0);
      $46 = loadf($arrayidx46$i);
      $mul47$i = Math_fround($45 * $46);
      $add48$i = Math_fround($add42$i + $mul47$i);
      $add49$i = (($i$264$i) + 2)|0;
      $arrayidx50$i = (($arrayidx66) + ($add49$i<<2)|0);
      $47 = loadf($arrayidx50$i);
      $arrayidx52$i = (($arrayidx68) + ($add49$i<<2)|0);
      $48 = loadf($arrayidx52$i);
      $mul53$i = Math_fround($47 * $48);
      $add54$i = Math_fround($add48$i + $mul53$i);
      $add55$i = (($i$264$i) + 3)|0;
      $arrayidx56$i = (($arrayidx66) + ($add55$i<<2)|0);
      $49 = loadf($arrayidx56$i);
      $arrayidx58$i = (($arrayidx68) + ($add55$i<<2)|0);
      $50 = loadf($arrayidx58$i);
      $mul59$i = Math_fround($49 * $50);
      $add60$i = Math_fround($add54$i + $mul59$i);
      $add61$i = (($i$264$i) + 4)|0;
      $arrayidx62$i94 = (($arrayidx66) + ($add61$i<<2)|0);
      $51 = loadf($arrayidx62$i94);
      $arrayidx64$i = (($arrayidx68) + ($add61$i<<2)|0);
      $52 = loadf($arrayidx64$i);
      $mul65$i = Math_fround($51 * $52);
      $add66$i = Math_fround($add60$i + $mul65$i);
      $add68$i = (($i$264$i) + 5)|0;
      $cmp37$i = ($add68$i|0)<($kb$1196|0);
      if ($cmp37$i) {
       $dtemp$363$i = $add66$i;$i$264$i = $add68$i;
      } else {
       $retval$0$i = $add66$i;
       break;
      }
     }
    } else {
     $retval$0$i = $dtemp$3$ph$i;
    }
   }
   $add70 = Math_fround($40 + $retval$0$i);
   storef($arrayidx60,$add70);
   $arrayidx72 = (($ipvt) + ($sub59<<2)|0);
   $53 = load4($arrayidx72);
   $cmp73 = ($53|0)==($sub59|0);
   if (!($cmp73)) {
    $arrayidx75 = (($b) + ($53<<2)|0);
    $54 = load4($arrayidx75);
    storef($arrayidx75,$add70);
    store4($arrayidx60,$54);
   }
   $exitcond202 = ($add58|0)==($sub|0);
   if ($exitcond202) {
    break;
   } else {
    $kb$1196 = $add58;
   }
  }
  return;
 }
 $0 = ($n|0)>(1);
 if ($0) {
  $k$0194 = 0;
  while(1) {
   $arrayidx = (($ipvt) + ($k$0194<<2)|0);
   $1 = load4($arrayidx);
   $arrayidx4 = (($b) + ($1<<2)|0);
   $2 = loadf($arrayidx4);
   $cmp5 = ($1|0)==($k$0194|0);
   if (!($cmp5)) {
    $arrayidx7 = (($b) + ($k$0194<<2)|0);
    $3 = load4($arrayidx7);
    store4($arrayidx4,$3);
    storef($arrayidx7,$2);
   }
   $add = (($k$0194) + 1)|0;
   $sub10 = (($n) - ($add))|0;
   $mul = Math_imul($k$0194, $lda)|0;
   $add12 = (($add) + ($mul))|0;
   $arrayidx13 = (($a) + ($add12<<2)|0);
   $arrayidx15 = (($b) + ($add<<2)|0);
   $cmp$i = ($sub10|0)<(1);
   $cmp1$i = $2 == Math_fround(0.0);
   $or$cond65$i = $cmp$i | $cmp1$i;
   do {
    if (!($or$cond65$i)) {
     $rem$i = (($sub10|0) % 4)&-1;
     $cmp30$i = ($rem$i|0)==(0);
     if ($cmp30$i) {
      $i$2$ph$i = 0;
     } else {
      $cmp3473$i = ($rem$i|0)>(0);
      if ($cmp3473$i) {
       $i$174$i = 0;
       while(1) {
        $arrayidx37$i = (($arrayidx15) + ($i$174$i<<2)|0);
        $4 = loadf($arrayidx37$i);
        $arrayidx38$i = (($arrayidx13) + ($i$174$i<<2)|0);
        $5 = loadf($arrayidx38$i);
        $mul39$i = Math_fround($2 * $5);
        $add40$i = Math_fround($4 + $mul39$i);
        storef($arrayidx37$i,$add40$i);
        $inc43$i = (($i$174$i) + 1)|0;
        $exitcond76$i = ($inc43$i|0)==($rem$i|0);
        if ($exitcond76$i) {
         break;
        } else {
         $i$174$i = $inc43$i;
        }
       }
      }
      $cmp45$i = ($sub10|0)<(4);
      if ($cmp45$i) {
       break;
      } else {
       $i$2$ph$i = $rem$i;
      }
     }
     $cmp5171$i = ($i$2$ph$i|0)<($sub10|0);
     if ($cmp5171$i) {
      $i$272$i = $i$2$ph$i;
      while(1) {
       $arrayidx54$i = (($arrayidx15) + ($i$272$i<<2)|0);
       $6 = loadf($arrayidx54$i);
       $arrayidx55$i = (($arrayidx13) + ($i$272$i<<2)|0);
       $7 = loadf($arrayidx55$i);
       $mul56$i = Math_fround($2 * $7);
       $add57$i = Math_fround($6 + $mul56$i);
       storef($arrayidx54$i,$add57$i);
       $add59$i = (($i$272$i) + 1)|0;
       $arrayidx60$i = (($arrayidx15) + ($add59$i<<2)|0);
       $8 = loadf($arrayidx60$i);
       $arrayidx62$i = (($arrayidx13) + ($add59$i<<2)|0);
       $9 = loadf($arrayidx62$i);
       $mul63$i = Math_fround($2 * $9);
       $add64$i = Math_fround($8 + $mul63$i);
       storef($arrayidx60$i,$add64$i);
       $add67$i = (($i$272$i) + 2)|0;
       $arrayidx68$i = (($arrayidx15) + ($add67$i<<2)|0);
       $10 = loadf($arrayidx68$i);
       $arrayidx70$i = (($arrayidx13) + ($add67$i<<2)|0);
       $11 = loadf($arrayidx70$i);
       $mul71$i = Math_fround($2 * $11);
       $add72$i = Math_fround($10 + $mul71$i);
       storef($arrayidx68$i,$add72$i);
       $add75$i = (($i$272$i) + 3)|0;
       $arrayidx76$i = (($arrayidx15) + ($add75$i<<2)|0);
       $12 = loadf($arrayidx76$i);
       $arrayidx78$i = (($arrayidx13) + ($add75$i<<2)|0);
       $13 = loadf($arrayidx78$i);
       $mul79$i = Math_fround($2 * $13);
       $add80$i = Math_fround($12 + $mul79$i);
       storef($arrayidx76$i,$add80$i);
       $add84$i = (($i$272$i) + 4)|0;
       $cmp51$i = ($add84$i|0)<($sub10|0);
       if ($cmp51$i) {
        $i$272$i = $add84$i;
       } else {
        break;
       }
      }
     }
    }
   } while(0);
   $exitcond201 = ($add|0)==($sub|0);
   if ($exitcond201) {
    break;
   } else {
    $k$0194 = $add;
   }
  }
 }
 $cmp18191 = ($n|0)>(0);
 if ($cmp18191) {
  $kb$0192 = 0;
 } else {
  return;
 }
 while(1) {
  $add20 = (($kb$0192) + 1)|0;
  $sub21 = (($n) - ($add20))|0;
  $arrayidx22 = (($b) + ($sub21<<2)|0);
  $14 = loadf($arrayidx22);
  $mul23 = Math_imul($sub21, $lda)|0;
  $add24 = (($mul23) + ($sub21))|0;
  $arrayidx25 = (($a) + ($add24<<2)|0);
  $15 = loadf($arrayidx25);
  $div = Math_fround($14 / $15);
  storef($arrayidx22,$div);
  $sub28 = Math_fround(-$div);
  $arrayidx31 = (($a) + ($mul23<<2)|0);
  $cmp$i145 = ($sub21|0)<(1);
  $cmp1$i146 = $div == Math_fround(-0.0);
  $or$cond65$i147 = $cmp$i145 | $cmp1$i146;
  do {
   if (!($or$cond65$i147)) {
    $rem$i149 = (($sub21|0) % 4)&-1;
    $cmp30$i150 = ($rem$i149|0)==(0);
    if ($cmp30$i150) {
     $i$2$ph$i163 = 0;
    } else {
     $cmp3473$i151 = ($rem$i149|0)>(0);
     if ($cmp3473$i151) {
      $i$174$i153 = 0;
      while(1) {
       $arrayidx37$i154 = (($b) + ($i$174$i153<<2)|0);
       $16 = loadf($arrayidx37$i154);
       $arrayidx38$i155 = (($arrayidx31) + ($i$174$i153<<2)|0);
       $17 = loadf($arrayidx38$i155);
       $mul39$i156 = Math_fround($17 * $sub28);
       $add40$i157 = Math_fround($16 + $mul39$i156);
       storef($arrayidx37$i154,$add40$i157);
       $inc43$i158 = (($i$174$i153) + 1)|0;
       $exitcond76$i159 = ($inc43$i158|0)==($rem$i149|0);
       if ($exitcond76$i159) {
        break;
       } else {
        $i$174$i153 = $inc43$i158;
       }
      }
     }
     $cmp45$i161 = ($sub21|0)<(4);
     if ($cmp45$i161) {
      break;
     } else {
      $i$2$ph$i163 = $rem$i149;
     }
    }
    $cmp5171$i164 = ($i$2$ph$i163|0)<($sub21|0);
    if ($cmp5171$i164) {
     $i$272$i166 = $i$2$ph$i163;
     while(1) {
      $arrayidx54$i167 = (($b) + ($i$272$i166<<2)|0);
      $18 = loadf($arrayidx54$i167);
      $arrayidx55$i168 = (($arrayidx31) + ($i$272$i166<<2)|0);
      $19 = loadf($arrayidx55$i168);
      $mul56$i169 = Math_fround($19 * $sub28);
      $add57$i170 = Math_fround($18 + $mul56$i169);
      storef($arrayidx54$i167,$add57$i170);
      $add59$i171 = (($i$272$i166) + 1)|0;
      $arrayidx60$i172 = (($b) + ($add59$i171<<2)|0);
      $20 = loadf($arrayidx60$i172);
      $arrayidx62$i173 = (($arrayidx31) + ($add59$i171<<2)|0);
      $21 = loadf($arrayidx62$i173);
      $mul63$i174 = Math_fround($21 * $sub28);
      $add64$i175 = Math_fround($20 + $mul63$i174);
      storef($arrayidx60$i172,$add64$i175);
      $add67$i176 = (($i$272$i166) + 2)|0;
      $arrayidx68$i177 = (($b) + ($add67$i176<<2)|0);
      $22 = loadf($arrayidx68$i177);
      $arrayidx70$i178 = (($arrayidx31) + ($add67$i176<<2)|0);
      $23 = loadf($arrayidx70$i178);
      $mul71$i179 = Math_fround($23 * $sub28);
      $add72$i180 = Math_fround($22 + $mul71$i179);
      storef($arrayidx68$i177,$add72$i180);
      $add75$i181 = (($i$272$i166) + 3)|0;
      $arrayidx76$i182 = (($b) + ($add75$i181<<2)|0);
      $24 = loadf($arrayidx76$i182);
      $arrayidx78$i183 = (($arrayidx31) + ($add75$i181<<2)|0);
      $25 = loadf($arrayidx78$i183);
      $mul79$i184 = Math_fround($25 * $sub28);
      $add80$i185 = Math_fround($24 + $mul79$i184);
      storef($arrayidx76$i182,$add80$i185);
      $add84$i186 = (($i$272$i166) + 4)|0;
      $cmp51$i187 = ($add84$i186|0)<($sub21|0);
      if ($cmp51$i187) {
       $i$272$i166 = $add84$i186;
      } else {
       break;
      }
     }
    }
   }
  } while(0);
  $exitcond = ($add20|0)==($n|0);
  if ($exitcond) {
   break;
  } else {
   $kb$0192 = $add20;
  }
 }
 return;
}
function _dmxpy($n1,$y,$n2,$ldm,$x,$m) {
 $n1 = $n1|0;
 $y = $y|0;
 $n2 = $n2|0;
 $ldm = $ldm|0;
 $x = $x|0;
 $m = $m|0;
 var $0 = Math_fround(0), $1 = Math_fround(0), $10 = Math_fround(0), $11 = Math_fround(0), $12 = Math_fround(0), $13 = Math_fround(0), $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $2 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0);
 var $27 = Math_fround(0), $28 = Math_fround(0), $29 = Math_fround(0), $3 = Math_fround(0), $30 = Math_fround(0), $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $4 = Math_fround(0), $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0), $44 = Math_fround(0);
 var $45 = Math_fround(0), $46 = Math_fround(0), $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = Math_fround(0), $50 = Math_fround(0), $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = Math_fround(0), $55 = Math_fround(0), $56 = Math_fround(0), $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0), $6 = Math_fround(0), $60 = Math_fround(0), $61 = Math_fround(0), $62 = Math_fround(0);
 var $63 = Math_fround(0), $64 = Math_fround(0), $65 = Math_fround(0), $66 = Math_fround(0), $7 = Math_fround(0), $8 = Math_fround(0), $9 = Math_fround(0), $add = 0, $add100 = Math_fround(0), $add105 = 0, $add108 = Math_fround(0), $add113 = 0, $add116 = Math_fround(0), $add121 = 0, $add124 = Math_fround(0), $add129 = 0, $add132 = Math_fround(0), $add137 = 0, $add140 = Math_fround(0), $add143 = 0;
 var $add146 = Math_fround(0), $add166 = 0, $add169 = Math_fround(0), $add174 = 0, $add177 = Math_fround(0), $add182 = 0, $add185 = Math_fround(0), $add19 = 0, $add190 = 0, $add193 = Math_fround(0), $add198 = 0, $add201 = Math_fround(0), $add206 = 0, $add209 = Math_fround(0), $add214 = 0, $add217 = Math_fround(0), $add22 = Math_fround(0), $add222 = 0, $add225 = Math_fround(0), $add230 = 0;
 var $add233 = Math_fround(0), $add238 = 0, $add241 = Math_fround(0), $add246 = 0, $add249 = Math_fround(0), $add25 = 0, $add254 = 0, $add257 = Math_fround(0), $add262 = 0, $add265 = Math_fround(0), $add270 = 0, $add273 = Math_fround(0), $add278 = 0, $add28 = Math_fround(0), $add281 = Math_fround(0), $add284 = 0, $add287 = Math_fround(0), $add293 = 0, $add46 = 0, $add49 = Math_fround(0);
 var $add5 = Math_fround(0), $add54 = 0, $add57 = Math_fround(0), $add62 = 0, $add65 = Math_fround(0), $add68 = 0, $add71 = Math_fround(0), $add89 = 0, $add92 = Math_fround(0), $add97 = 0, $arrayidx = 0, $arrayidx102 = 0, $arrayidx106 = 0, $arrayidx110 = 0, $arrayidx114 = 0, $arrayidx118 = 0, $arrayidx122 = 0, $arrayidx126 = 0, $arrayidx130 = 0, $arrayidx134 = 0;
 var $arrayidx138 = 0, $arrayidx14 = 0, $arrayidx141 = 0, $arrayidx144 = 0, $arrayidx16 = 0, $arrayidx161 = 0, $arrayidx163 = 0, $arrayidx167 = 0, $arrayidx171 = 0, $arrayidx175 = 0, $arrayidx179 = 0, $arrayidx183 = 0, $arrayidx187 = 0, $arrayidx191 = 0, $arrayidx195 = 0, $arrayidx199 = 0, $arrayidx2 = 0, $arrayidx20 = 0, $arrayidx203 = 0, $arrayidx207 = 0;
 var $arrayidx211 = 0, $arrayidx215 = 0, $arrayidx219 = 0, $arrayidx223 = 0, $arrayidx227 = 0, $arrayidx23 = 0, $arrayidx231 = 0, $arrayidx235 = 0, $arrayidx239 = 0, $arrayidx243 = 0, $arrayidx247 = 0, $arrayidx251 = 0, $arrayidx255 = 0, $arrayidx259 = 0, $arrayidx26 = 0, $arrayidx263 = 0, $arrayidx267 = 0, $arrayidx271 = 0, $arrayidx275 = 0, $arrayidx279 = 0;
 var $arrayidx282 = 0, $arrayidx285 = 0, $arrayidx3 = 0, $arrayidx41 = 0, $arrayidx43 = 0, $arrayidx47 = 0, $arrayidx51 = 0, $arrayidx55 = 0, $arrayidx59 = 0, $arrayidx63 = 0, $arrayidx66 = 0, $arrayidx69 = 0, $arrayidx84 = 0, $arrayidx86 = 0, $arrayidx90 = 0, $arrayidx94 = 0, $arrayidx98 = 0, $cmp = 0, $cmp12241 = 0, $cmp1243 = 0;
 var $cmp156 = 0, $cmp156235 = 0, $cmp159233 = 0, $cmp35 = 0, $cmp39239 = 0, $cmp78 = 0, $cmp8 = 0, $cmp82237 = 0, $exitcond = 0, $exitcond245 = 0, $exitcond246 = 0, $exitcond247 = 0, $exitcond248 = 0, $i$0244 = 0, $i$1242 = 0, $i$2240 = 0, $i$3238 = 0, $i$4234 = 0, $inc = 0, $inc149 = 0;
 var $inc290 = 0, $inc31 = 0, $inc74 = 0, $j$0236 = 0, $mul = 0, $mul104 = 0, $mul107 = Math_fround(0), $mul112 = 0, $mul115 = Math_fround(0), $mul120 = 0, $mul123 = Math_fround(0), $mul128 = 0, $mul131 = Math_fround(0), $mul136 = 0, $mul139 = Math_fround(0), $mul142 = 0, $mul145 = Math_fround(0), $mul165 = 0, $mul168 = Math_fround(0), $mul173 = 0;
 var $mul176 = Math_fround(0), $mul18 = 0, $mul181 = 0, $mul184 = Math_fround(0), $mul189 = 0, $mul192 = Math_fround(0), $mul197 = 0, $mul200 = Math_fround(0), $mul205 = 0, $mul208 = Math_fround(0), $mul21 = Math_fround(0), $mul213 = 0, $mul216 = Math_fround(0), $mul221 = 0, $mul224 = Math_fround(0), $mul229 = 0, $mul232 = Math_fround(0), $mul237 = 0, $mul24 = 0, $mul240 = Math_fround(0);
 var $mul245 = 0, $mul248 = Math_fround(0), $mul253 = 0, $mul256 = Math_fround(0), $mul261 = 0, $mul264 = Math_fround(0), $mul269 = 0, $mul27 = Math_fround(0), $mul272 = Math_fround(0), $mul277 = 0, $mul280 = Math_fround(0), $mul283 = 0, $mul286 = Math_fround(0), $mul4 = Math_fround(0), $mul45 = 0, $mul48 = Math_fround(0), $mul53 = 0, $mul56 = Math_fround(0), $mul61 = 0, $mul64 = Math_fround(0);
 var $mul67 = 0, $mul70 = Math_fround(0), $mul88 = 0, $mul91 = Math_fround(0), $mul96 = 0, $mul99 = Math_fround(0), $rem = 0, $rem34 = 0, $rem7 = 0, $rem77 = 0, $sub = 0, $sub10 = 0, $sub101 = 0, $sub109 = 0, $sub117 = 0, $sub125 = 0, $sub133 = 0, $sub15 = 0, $sub154 = 0, $sub162 = 0;
 var $sub170 = 0, $sub178 = 0, $sub186 = 0, $sub194 = 0, $sub202 = 0, $sub210 = 0, $sub218 = 0, $sub226 = 0, $sub234 = 0, $sub242 = 0, $sub250 = 0, $sub258 = 0, $sub266 = 0, $sub274 = 0, $sub37 = 0, $sub42 = 0, $sub50 = 0, $sub58 = 0, $sub80 = 0, $sub85 = 0;
 var $sub93 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $rem = (($n2|0) % 2)&-1;
 $cmp = ($rem|0)>(0);
 if ($cmp) {
  $sub = (($rem) + -1)|0;
  $cmp1243 = ($n1|0)>(0);
  if ($cmp1243) {
   $arrayidx2 = (($x) + ($sub<<2)|0);
   $mul = Math_imul($sub, $ldm)|0;
   $i$0244 = 0;
   while(1) {
    $arrayidx = (($y) + ($i$0244<<2)|0);
    $0 = loadf($arrayidx);
    $1 = loadf($arrayidx2);
    $add = (($i$0244) + ($mul))|0;
    $arrayidx3 = (($m) + ($add<<2)|0);
    $2 = loadf($arrayidx3);
    $mul4 = Math_fround($1 * $2);
    $add5 = Math_fround($0 + $mul4);
    storef($arrayidx,$add5);
    $inc = (($i$0244) + 1)|0;
    $exitcond248 = ($inc|0)==($n1|0);
    if ($exitcond248) {
     break;
    } else {
     $i$0244 = $inc;
    }
   }
  }
 }
 $rem7 = (($n2|0) % 4)&-1;
 $cmp8 = ($rem7|0)>(1);
 if ($cmp8) {
  $sub10 = (($rem7) + -1)|0;
  $cmp12241 = ($n1|0)>(0);
  if ($cmp12241) {
   $sub15 = (($rem7) + -2)|0;
   $arrayidx16 = (($x) + ($sub15<<2)|0);
   $mul18 = Math_imul($sub15, $ldm)|0;
   $arrayidx23 = (($x) + ($sub10<<2)|0);
   $mul24 = Math_imul($sub10, $ldm)|0;
   $i$1242 = 0;
   while(1) {
    $arrayidx14 = (($y) + ($i$1242<<2)|0);
    $3 = loadf($arrayidx14);
    $4 = loadf($arrayidx16);
    $add19 = (($i$1242) + ($mul18))|0;
    $arrayidx20 = (($m) + ($add19<<2)|0);
    $5 = loadf($arrayidx20);
    $mul21 = Math_fround($4 * $5);
    $add22 = Math_fround($3 + $mul21);
    $6 = loadf($arrayidx23);
    $add25 = (($i$1242) + ($mul24))|0;
    $arrayidx26 = (($m) + ($add25<<2)|0);
    $7 = loadf($arrayidx26);
    $mul27 = Math_fround($6 * $7);
    $add28 = Math_fround($add22 + $mul27);
    storef($arrayidx14,$add28);
    $inc31 = (($i$1242) + 1)|0;
    $exitcond247 = ($inc31|0)==($n1|0);
    if ($exitcond247) {
     break;
    } else {
     $i$1242 = $inc31;
    }
   }
  }
 }
 $rem34 = (($n2|0) % 8)&-1;
 $cmp35 = ($rem34|0)>(3);
 if ($cmp35) {
  $sub37 = (($rem34) + -1)|0;
  $cmp39239 = ($n1|0)>(0);
  if ($cmp39239) {
   $sub42 = (($rem34) + -4)|0;
   $arrayidx43 = (($x) + ($sub42<<2)|0);
   $mul45 = Math_imul($sub42, $ldm)|0;
   $sub50 = (($rem34) + -3)|0;
   $arrayidx51 = (($x) + ($sub50<<2)|0);
   $mul53 = Math_imul($sub50, $ldm)|0;
   $sub58 = (($rem34) + -2)|0;
   $arrayidx59 = (($x) + ($sub58<<2)|0);
   $mul61 = Math_imul($sub58, $ldm)|0;
   $arrayidx66 = (($x) + ($sub37<<2)|0);
   $mul67 = Math_imul($sub37, $ldm)|0;
   $i$2240 = 0;
   while(1) {
    $arrayidx41 = (($y) + ($i$2240<<2)|0);
    $8 = loadf($arrayidx41);
    $9 = loadf($arrayidx43);
    $add46 = (($i$2240) + ($mul45))|0;
    $arrayidx47 = (($m) + ($add46<<2)|0);
    $10 = loadf($arrayidx47);
    $mul48 = Math_fround($9 * $10);
    $add49 = Math_fround($8 + $mul48);
    $11 = loadf($arrayidx51);
    $add54 = (($i$2240) + ($mul53))|0;
    $arrayidx55 = (($m) + ($add54<<2)|0);
    $12 = loadf($arrayidx55);
    $mul56 = Math_fround($11 * $12);
    $add57 = Math_fround($add49 + $mul56);
    $13 = loadf($arrayidx59);
    $add62 = (($i$2240) + ($mul61))|0;
    $arrayidx63 = (($m) + ($add62<<2)|0);
    $14 = loadf($arrayidx63);
    $mul64 = Math_fround($13 * $14);
    $add65 = Math_fround($add57 + $mul64);
    $15 = loadf($arrayidx66);
    $add68 = (($i$2240) + ($mul67))|0;
    $arrayidx69 = (($m) + ($add68<<2)|0);
    $16 = loadf($arrayidx69);
    $mul70 = Math_fround($15 * $16);
    $add71 = Math_fround($add65 + $mul70);
    storef($arrayidx41,$add71);
    $inc74 = (($i$2240) + 1)|0;
    $exitcond246 = ($inc74|0)==($n1|0);
    if ($exitcond246) {
     break;
    } else {
     $i$2240 = $inc74;
    }
   }
  }
 }
 $rem77 = (($n2|0) % 16)&-1;
 $cmp78 = ($rem77|0)>(7);
 if ($cmp78) {
  $sub80 = (($rem77) + -1)|0;
  $cmp82237 = ($n1|0)>(0);
  if ($cmp82237) {
   $sub85 = (($rem77) + -8)|0;
   $arrayidx86 = (($x) + ($sub85<<2)|0);
   $mul88 = Math_imul($sub85, $ldm)|0;
   $sub93 = (($rem77) + -7)|0;
   $arrayidx94 = (($x) + ($sub93<<2)|0);
   $mul96 = Math_imul($sub93, $ldm)|0;
   $sub101 = (($rem77) + -6)|0;
   $arrayidx102 = (($x) + ($sub101<<2)|0);
   $mul104 = Math_imul($sub101, $ldm)|0;
   $sub109 = (($rem77) + -5)|0;
   $arrayidx110 = (($x) + ($sub109<<2)|0);
   $mul112 = Math_imul($sub109, $ldm)|0;
   $sub117 = (($rem77) + -4)|0;
   $arrayidx118 = (($x) + ($sub117<<2)|0);
   $mul120 = Math_imul($sub117, $ldm)|0;
   $sub125 = (($rem77) + -3)|0;
   $arrayidx126 = (($x) + ($sub125<<2)|0);
   $mul128 = Math_imul($sub125, $ldm)|0;
   $sub133 = (($rem77) + -2)|0;
   $arrayidx134 = (($x) + ($sub133<<2)|0);
   $mul136 = Math_imul($sub133, $ldm)|0;
   $arrayidx141 = (($x) + ($sub80<<2)|0);
   $mul142 = Math_imul($sub80, $ldm)|0;
   $i$3238 = 0;
   while(1) {
    $arrayidx84 = (($y) + ($i$3238<<2)|0);
    $17 = loadf($arrayidx84);
    $18 = loadf($arrayidx86);
    $add89 = (($i$3238) + ($mul88))|0;
    $arrayidx90 = (($m) + ($add89<<2)|0);
    $19 = loadf($arrayidx90);
    $mul91 = Math_fround($18 * $19);
    $add92 = Math_fround($17 + $mul91);
    $20 = loadf($arrayidx94);
    $add97 = (($i$3238) + ($mul96))|0;
    $arrayidx98 = (($m) + ($add97<<2)|0);
    $21 = loadf($arrayidx98);
    $mul99 = Math_fround($20 * $21);
    $add100 = Math_fround($add92 + $mul99);
    $22 = loadf($arrayidx102);
    $add105 = (($i$3238) + ($mul104))|0;
    $arrayidx106 = (($m) + ($add105<<2)|0);
    $23 = loadf($arrayidx106);
    $mul107 = Math_fround($22 * $23);
    $add108 = Math_fround($add100 + $mul107);
    $24 = loadf($arrayidx110);
    $add113 = (($i$3238) + ($mul112))|0;
    $arrayidx114 = (($m) + ($add113<<2)|0);
    $25 = loadf($arrayidx114);
    $mul115 = Math_fround($24 * $25);
    $add116 = Math_fround($add108 + $mul115);
    $26 = loadf($arrayidx118);
    $add121 = (($i$3238) + ($mul120))|0;
    $arrayidx122 = (($m) + ($add121<<2)|0);
    $27 = loadf($arrayidx122);
    $mul123 = Math_fround($26 * $27);
    $add124 = Math_fround($add116 + $mul123);
    $28 = loadf($arrayidx126);
    $add129 = (($i$3238) + ($mul128))|0;
    $arrayidx130 = (($m) + ($add129<<2)|0);
    $29 = loadf($arrayidx130);
    $mul131 = Math_fround($28 * $29);
    $add132 = Math_fround($add124 + $mul131);
    $30 = loadf($arrayidx134);
    $add137 = (($i$3238) + ($mul136))|0;
    $arrayidx138 = (($m) + ($add137<<2)|0);
    $31 = loadf($arrayidx138);
    $mul139 = Math_fround($30 * $31);
    $add140 = Math_fround($add132 + $mul139);
    $32 = loadf($arrayidx141);
    $add143 = (($i$3238) + ($mul142))|0;
    $arrayidx144 = (($m) + ($add143<<2)|0);
    $33 = loadf($arrayidx144);
    $mul145 = Math_fround($32 * $33);
    $add146 = Math_fround($add140 + $mul145);
    storef($arrayidx84,$add146);
    $inc149 = (($i$3238) + 1)|0;
    $exitcond245 = ($inc149|0)==($n1|0);
    if ($exitcond245) {
     break;
    } else {
     $i$3238 = $inc149;
    }
   }
  }
 }
 $sub154 = (($rem77) + 15)|0;
 $cmp156235 = ($sub154|0)<($n2|0);
 if (!($cmp156235)) {
  return;
 }
 $cmp159233 = ($n1|0)>(0);
 $j$0236 = $sub154;
 while(1) {
  if ($cmp159233) {
   $sub162 = (($j$0236) + -15)|0;
   $arrayidx163 = (($x) + ($sub162<<2)|0);
   $mul165 = Math_imul($sub162, $ldm)|0;
   $sub170 = (($j$0236) + -14)|0;
   $arrayidx171 = (($x) + ($sub170<<2)|0);
   $mul173 = Math_imul($sub170, $ldm)|0;
   $sub178 = (($j$0236) + -13)|0;
   $arrayidx179 = (($x) + ($sub178<<2)|0);
   $mul181 = Math_imul($sub178, $ldm)|0;
   $sub186 = (($j$0236) + -12)|0;
   $arrayidx187 = (($x) + ($sub186<<2)|0);
   $mul189 = Math_imul($sub186, $ldm)|0;
   $sub194 = (($j$0236) + -11)|0;
   $arrayidx195 = (($x) + ($sub194<<2)|0);
   $mul197 = Math_imul($sub194, $ldm)|0;
   $sub202 = (($j$0236) + -10)|0;
   $arrayidx203 = (($x) + ($sub202<<2)|0);
   $mul205 = Math_imul($sub202, $ldm)|0;
   $sub210 = (($j$0236) + -9)|0;
   $arrayidx211 = (($x) + ($sub210<<2)|0);
   $mul213 = Math_imul($sub210, $ldm)|0;
   $sub218 = (($j$0236) + -8)|0;
   $arrayidx219 = (($x) + ($sub218<<2)|0);
   $mul221 = Math_imul($sub218, $ldm)|0;
   $sub226 = (($j$0236) + -7)|0;
   $arrayidx227 = (($x) + ($sub226<<2)|0);
   $mul229 = Math_imul($sub226, $ldm)|0;
   $sub234 = (($j$0236) + -6)|0;
   $arrayidx235 = (($x) + ($sub234<<2)|0);
   $mul237 = Math_imul($sub234, $ldm)|0;
   $sub242 = (($j$0236) + -5)|0;
   $arrayidx243 = (($x) + ($sub242<<2)|0);
   $mul245 = Math_imul($sub242, $ldm)|0;
   $sub250 = (($j$0236) + -4)|0;
   $arrayidx251 = (($x) + ($sub250<<2)|0);
   $mul253 = Math_imul($sub250, $ldm)|0;
   $sub258 = (($j$0236) + -3)|0;
   $arrayidx259 = (($x) + ($sub258<<2)|0);
   $mul261 = Math_imul($sub258, $ldm)|0;
   $sub266 = (($j$0236) + -2)|0;
   $arrayidx267 = (($x) + ($sub266<<2)|0);
   $mul269 = Math_imul($sub266, $ldm)|0;
   $sub274 = (($j$0236) + -1)|0;
   $arrayidx275 = (($x) + ($sub274<<2)|0);
   $mul277 = Math_imul($sub274, $ldm)|0;
   $arrayidx282 = (($x) + ($j$0236<<2)|0);
   $mul283 = Math_imul($j$0236, $ldm)|0;
   $i$4234 = 0;
   while(1) {
    $arrayidx161 = (($y) + ($i$4234<<2)|0);
    $34 = loadf($arrayidx161);
    $35 = loadf($arrayidx163);
    $add166 = (($i$4234) + ($mul165))|0;
    $arrayidx167 = (($m) + ($add166<<2)|0);
    $36 = loadf($arrayidx167);
    $mul168 = Math_fround($35 * $36);
    $add169 = Math_fround($34 + $mul168);
    $37 = loadf($arrayidx171);
    $add174 = (($i$4234) + ($mul173))|0;
    $arrayidx175 = (($m) + ($add174<<2)|0);
    $38 = loadf($arrayidx175);
    $mul176 = Math_fround($37 * $38);
    $add177 = Math_fround($add169 + $mul176);
    $39 = loadf($arrayidx179);
    $add182 = (($i$4234) + ($mul181))|0;
    $arrayidx183 = (($m) + ($add182<<2)|0);
    $40 = loadf($arrayidx183);
    $mul184 = Math_fround($39 * $40);
    $add185 = Math_fround($add177 + $mul184);
    $41 = loadf($arrayidx187);
    $add190 = (($i$4234) + ($mul189))|0;
    $arrayidx191 = (($m) + ($add190<<2)|0);
    $42 = loadf($arrayidx191);
    $mul192 = Math_fround($41 * $42);
    $add193 = Math_fround($add185 + $mul192);
    $43 = loadf($arrayidx195);
    $add198 = (($i$4234) + ($mul197))|0;
    $arrayidx199 = (($m) + ($add198<<2)|0);
    $44 = loadf($arrayidx199);
    $mul200 = Math_fround($43 * $44);
    $add201 = Math_fround($add193 + $mul200);
    $45 = loadf($arrayidx203);
    $add206 = (($i$4234) + ($mul205))|0;
    $arrayidx207 = (($m) + ($add206<<2)|0);
    $46 = loadf($arrayidx207);
    $mul208 = Math_fround($45 * $46);
    $add209 = Math_fround($add201 + $mul208);
    $47 = loadf($arrayidx211);
    $add214 = (($i$4234) + ($mul213))|0;
    $arrayidx215 = (($m) + ($add214<<2)|0);
    $48 = loadf($arrayidx215);
    $mul216 = Math_fround($47 * $48);
    $add217 = Math_fround($add209 + $mul216);
    $49 = loadf($arrayidx219);
    $add222 = (($i$4234) + ($mul221))|0;
    $arrayidx223 = (($m) + ($add222<<2)|0);
    $50 = loadf($arrayidx223);
    $mul224 = Math_fround($49 * $50);
    $add225 = Math_fround($add217 + $mul224);
    $51 = loadf($arrayidx227);
    $add230 = (($i$4234) + ($mul229))|0;
    $arrayidx231 = (($m) + ($add230<<2)|0);
    $52 = loadf($arrayidx231);
    $mul232 = Math_fround($51 * $52);
    $add233 = Math_fround($add225 + $mul232);
    $53 = loadf($arrayidx235);
    $add238 = (($i$4234) + ($mul237))|0;
    $arrayidx239 = (($m) + ($add238<<2)|0);
    $54 = loadf($arrayidx239);
    $mul240 = Math_fround($53 * $54);
    $add241 = Math_fround($add233 + $mul240);
    $55 = loadf($arrayidx243);
    $add246 = (($i$4234) + ($mul245))|0;
    $arrayidx247 = (($m) + ($add246<<2)|0);
    $56 = loadf($arrayidx247);
    $mul248 = Math_fround($55 * $56);
    $add249 = Math_fround($add241 + $mul248);
    $57 = loadf($arrayidx251);
    $add254 = (($i$4234) + ($mul253))|0;
    $arrayidx255 = (($m) + ($add254<<2)|0);
    $58 = loadf($arrayidx255);
    $mul256 = Math_fround($57 * $58);
    $add257 = Math_fround($add249 + $mul256);
    $59 = loadf($arrayidx259);
    $add262 = (($i$4234) + ($mul261))|0;
    $arrayidx263 = (($m) + ($add262<<2)|0);
    $60 = loadf($arrayidx263);
    $mul264 = Math_fround($59 * $60);
    $add265 = Math_fround($add257 + $mul264);
    $61 = loadf($arrayidx267);
    $add270 = (($i$4234) + ($mul269))|0;
    $arrayidx271 = (($m) + ($add270<<2)|0);
    $62 = loadf($arrayidx271);
    $mul272 = Math_fround($61 * $62);
    $add273 = Math_fround($add265 + $mul272);
    $63 = loadf($arrayidx275);
    $add278 = (($i$4234) + ($mul277))|0;
    $arrayidx279 = (($m) + ($add278<<2)|0);
    $64 = loadf($arrayidx279);
    $mul280 = Math_fround($63 * $64);
    $add281 = Math_fround($add273 + $mul280);
    $65 = loadf($arrayidx282);
    $add284 = (($i$4234) + ($mul283))|0;
    $arrayidx285 = (($m) + ($add284<<2)|0);
    $66 = loadf($arrayidx285);
    $mul286 = Math_fround($65 * $66);
    $add287 = Math_fround($add281 + $mul286);
    storef($arrayidx161,$add287);
    $inc290 = (($i$4234) + 1)|0;
    $exitcond = ($inc290|0)==($n1|0);
    if ($exitcond) {
     break;
    } else {
     $i$4234 = $inc290;
    }
   }
  }
  $add293 = (($j$0236) + 16)|0;
  $cmp156 = ($add293|0)<($n2|0);
  if ($cmp156) {
   $j$0236 = $add293;
  } else {
   break;
  }
 }
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
  $retval$0 = 328196;
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
  $2 = load4(328152);
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
function _vsnprintf($s,$n,$fmt,$ap) {
 $s = $s|0;
 $n = $n|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $0 = 0, $1 = 0, $add$ptr = 0, $arrayidx = 0, $b = 0, $buf = 0, $buf_size = 0, $call = 0, $call10 = 0, $cmp = 0, $cmp15 = 0, $cmp4 = 0, $f = 0, $n$addr$0 = 0, $retval$0 = 0, $s$addr$0 = 0, $sub = 0, $sub$ptr$rhs$cast = 0, $sub16 = 0, $sub3 = 0;
 var $sub3$n$addr$0 = 0, $tobool = 0, $tobool11 = 0, $wbase = 0, $wend = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0;
 $b = sp + 112|0;
 $f = sp;
 ; store8($f,load8(1140,4),4); store8($f+8 | 0,load8(1140+8 | 0,4),4); store8($f+16 | 0,load8(1140+16 | 0,4),4); store8($f+24 | 0,load8(1140+24 | 0,4),4); store8($f+32 | 0,load8(1140+32 | 0,4),4); store8($f+40 | 0,load8(1140+40 | 0,4),4); store8($f+48 | 0,load8(1140+48 | 0,4),4); store8($f+56 | 0,load8(1140+56 | 0,4),4); store8($f+64 | 0,load8(1140+64 | 0,4),4); store8($f+72 | 0,load8(1140+72 | 0,4),4); store8($f+80 | 0,load8(1140+80 | 0,4),4); store8($f+88 | 0,load8(1140+88 | 0,4),4); store8($f+96 | 0,load8(1140+96 | 0,4),4); store8($f+104 | 0,load8(1140+104 | 0,4),4);
 $sub = (($n) + -1)|0;
 $cmp = ($sub>>>0)>(2147483646);
 if ($cmp) {
  $tobool = ($n|0)==(0);
  if ($tobool) {
   $n$addr$0 = 1;$s$addr$0 = $b;
   label = 4;
  } else {
   $call = (___errno_location()|0);
   store4($call,75);
   $retval$0 = -1;
  }
 } else {
  $n$addr$0 = $n;$s$addr$0 = $s;
  label = 4;
 }
 if ((label|0) == 4) {
  $sub$ptr$rhs$cast = $s$addr$0;
  $sub3 = (-2 - ($sub$ptr$rhs$cast))|0;
  $cmp4 = ($n$addr$0>>>0)>($sub3>>>0);
  $sub3$n$addr$0 = $cmp4 ? $sub3 : $n$addr$0;
  $buf_size = ((($f)) + 48|0);
  store4($buf_size,$sub3$n$addr$0);
  $wpos = ((($f)) + 20|0);
  store4($wpos,$s$addr$0);
  $buf = ((($f)) + 44|0);
  store4($buf,$s$addr$0);
  $add$ptr = (($s$addr$0) + ($sub3$n$addr$0)|0);
  $wend = ((($f)) + 16|0);
  store4($wend,$add$ptr);
  $wbase = ((($f)) + 28|0);
  store4($wbase,$add$ptr);
  $call10 = (_vfprintf($f,$fmt,$ap)|0);
  $tobool11 = ($sub3$n$addr$0|0)==(0);
  if ($tobool11) {
   $retval$0 = $call10;
  } else {
   $0 = load4($wpos);
   $1 = load4($wend);
   $cmp15 = ($0|0)==($1|0);
   $sub16 = $cmp15 << 31 >> 31;
   $arrayidx = (($0) + ($sub16)|0);
   store1($arrayidx,0);
   $retval$0 = $call10;
  }
 }
 STACKTOP = sp;return ($retval$0|0);
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
   $arrayidx174 = ((2043 + (($st$0*58)|0)|0) + ($sub165)|0);
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
     $a$0 = $s$addr$0$lcssa$i229;$fl$4 = $fl$1$and220;$p$2 = $p$0;$pl$1 = 0;$prefix$1 = 2523;
     label = 76;
    } else {
     $sub$ptr$rhs$cast268 = $s$addr$0$lcssa$i229;
     $sub$ptr$sub269 = (($sub$ptr$lhs$cast318) - ($sub$ptr$rhs$cast268))|0;
     $cmp271 = ($p$0|0)>($sub$ptr$sub269|0);
     $add270 = (($sub$ptr$sub269) + 1)|0;
     $p$0$add270 = $cmp271 ? $p$0 : $add270;
     $a$0 = $s$addr$0$lcssa$i229;$fl$4 = $fl$1$and220;$p$2 = $p$0$add270;$pl$1 = 0;$prefix$1 = 2523;
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
     $52 = $sub287;$pl$0 = 1;$prefix$0 = 2523;
     label = 75;
     break L74;
    }
    $and290 = $fl$1$and220 & 2048;
    $tobool291 = ($and290|0)==(0);
    if ($tobool291) {
     $and295 = $fl$1$and220 & 1;
     $tobool296 = ($and295|0)==(0);
     $$ = $tobool296 ? 2523 : (2525);
     $52 = $51;$pl$0 = $and295;$prefix$0 = $$;
     label = 75;
    } else {
     $52 = $51;$pl$0 = 1;$prefix$0 = (2524);
     label = 75;
    }
    break;
   }
   case 117:  {
    $$pre337 = load8($arg);
    $52 = $$pre337;$pl$0 = 0;$prefix$0 = 2523;
    label = 75;
    break;
   }
   case 99:  {
    $55 = load8($arg);
    $conv340 = i64_trunc($55)&255;
    store1($add$ptr341,$conv340);
    $a$2 = $add$ptr341;$fl$6 = $and220;$p$5 = 1;$pl$2 = 0;$prefix$2 = 2523;$z$2 = $add$ptr206;
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
    $cond355 = $tobool350 ? $57 : 2533;
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
     $pl$0$i = 1;$prefix$0$i = 2540;$y$addr$0$i = $sub$i;
    } else {
     $and$i239 = $fl$1$and220 & 2048;
     $tobool9$i = ($and$i239|0)==(0);
     $and12$i = $fl$1$and220 & 1;
     if ($tobool9$i) {
      $tobool13$i = ($and12$i|0)==(0);
      $$$i = $tobool13$i ? (2541) : (2546);
      $pl$0$i = $and12$i;$prefix$0$i = $$$i;$y$addr$0$i = $62;
     } else {
      $pl$0$i = 1;$prefix$0$i = (2543);$y$addr$0$i = $62;
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
        $arrayidx117$i = (2507 + ($conv116$i)|0);
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
          (___fwritex(2575,1,$f)|0);
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
            (___fwritex(2575,1,$f)|0);
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
      $cond$i = $tobool37$i ? 2559 : 2563;
      $cmp38$i = ($y$addr$0$i != $y$addr$0$i) | (0.0 != 0.0);
      $cond43$i = $tobool37$i ? 2567 : 2571;
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
    $a$2 = $s$0;$fl$6 = $fl$1$and220;$p$5 = $p$0;$pl$2 = 0;$prefix$2 = 2523;$z$2 = $add$ptr206;
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
      $arrayidx$i = (2507 + ($idxprom$i)|0);
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
    $add$ptr258 = (2523 + ($shr)|0);
    $$add$ptr258 = $or$cond193 ? 2523 : $add$ptr258;
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
    $a$2 = $a$1;$fl$6 = $and220;$p$5 = $p$3;$pl$2 = 0;$prefix$2 = 2523;$z$2 = $z$1;
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
  $arrayidx = (2577 + ($i$012)|0);
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
   $i$111 = 87;$s$010 = 2665;
   label = 5;
   break;
  } else {
   $i$012 = $inc;
  }
 }
 if ((label|0) == 2) {
  $tobool59 = ($i$012|0)==(0);
  if ($tobool59) {
   $s$0$lcssa = 2665;
  } else {
   $i$111 = $i$012;$s$010 = 2665;
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
function _sn_write($f,$s,$l) {
 $f = $f|0;
 $s = $s|0;
 $l = $l|0;
 var $$cast = 0, $0 = 0, $1 = 0, $2 = 0, $add$ptr = 0, $cmp = 0, $l$sub$ptr$sub = 0, $sub$ptr$sub = 0, $wend = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $wend = ((($f)) + 16|0);
 $0 = load4($wend);
 $wpos = ((($f)) + 20|0);
 $1 = load4($wpos);
 $sub$ptr$sub = (($0) - ($1))|0;
 $cmp = ($sub$ptr$sub>>>0)>($l>>>0);
 $l$sub$ptr$sub = $cmp ? $l : $sub$ptr$sub;
 $$cast = $1;
 _memcpy(($$cast|0),($s|0),($l$sub$ptr$sub|0))|0;
 $2 = load4($wpos);
 $add$ptr = (($2) + ($l$sub$ptr$sub)|0);
 store4($wpos,$add$ptr);
 return ($l|0);
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
function _isspace($c) {
 $c = $c|0;
 var $0 = 0, $cmp = 0, $cmp1 = 0, $lor$ext = 0, $sub = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($c|0)==(32);
 $sub = (($c) + -9)|0;
 $cmp1 = ($sub>>>0)<(5);
 $0 = $cmp | $cmp1;
 $lor$ext = $0&1;
 return ($lor$ext|0);
}
function ___shlim($f,$lim) {
 $f = $f|0;
 $lim = $lim|0;
 var $0 = 0, $1 = 0, $2 = 0, $add$ptr = 0, $cmp = 0, $or$cond = 0, $rend = 0, $rpos = 0, $shcnt = 0, $shend = 0, $shend4 = 0, $shlim = 0, $sub$ptr$sub = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $shlim = ((($f)) + 104|0);
 store4($shlim,$lim);
 $rend = ((($f)) + 8|0);
 $0 = load4($rend);
 $rpos = ((($f)) + 4|0);
 $1 = load4($rpos);
 $sub$ptr$sub = (($0) - ($1))|0;
 $shcnt = ((($f)) + 108|0);
 store4($shcnt,$sub$ptr$sub);
 $tobool = ($lim|0)!=(0);
 $cmp = ($sub$ptr$sub|0)>($lim|0);
 $or$cond = $tobool & $cmp;
 if ($or$cond) {
  $2 = $1;
  $add$ptr = (($2) + ($lim)|0);
  $shend = ((($f)) + 100|0);
  store4($shend,$add$ptr);
 } else {
  $shend4 = ((($f)) + 100|0);
  store4($shend4,$0);
 }
 return;
}
function ___shgetc($f) {
 $f = $f|0;
 var $$pre = 0, $$pre25 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $add = 0, $add$ptr = 0, $add29 = 0, $arrayidx = 0;
 var $call = 0, $cmp = 0, $cmp2 = 0, $cmp32 = 0, $cmp9 = 0, $conv = 0, $conv35 = 0, $rend17$phi$trans$insert = 0, $retval$0 = 0, $rpos = 0, $rpos31$phi$trans$insert = 0, $shcnt = 0, $shcnt28 = 0, $shcnt7 = 0, $shend = 0, $shend16 = 0, $shend18 = 0, $shlim = 0, $sub = 0, $sub$ptr$lhs$cast25 = 0;
 var $sub$ptr$rhs$cast = 0, $sub$ptr$sub = 0, $sub$ptr$sub27 = 0, $sub8 = 0, $tobool = 0, $tobool21 = 0, $tobool4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $shlim = ((($f)) + 104|0);
 $0 = load4($shlim);
 $tobool = ($0|0)==(0);
 if ($tobool) {
  label = 3;
 } else {
  $shcnt = ((($f)) + 108|0);
  $1 = load4($shcnt);
  $cmp = ($1|0)<($0|0);
  if ($cmp) {
   label = 3;
  } else {
   label = 4;
  }
 }
 if ((label|0) == 3) {
  $call = (___uflow($f)|0);
  $cmp2 = ($call|0)<(0);
  if ($cmp2) {
   label = 4;
  } else {
   $2 = load4($shlim);
   $tobool4 = ($2|0)==(0);
   $rend17$phi$trans$insert = ((($f)) + 8|0);
   $$pre = load4($rend17$phi$trans$insert);
   if ($tobool4) {
    $3 = $$pre;
    $13 = $3;
    label = 9;
   } else {
    $rpos = ((($f)) + 4|0);
    $4 = load4($rpos);
    $sub$ptr$rhs$cast = $4;
    $sub$ptr$sub = (($$pre) - ($sub$ptr$rhs$cast))|0;
    $shcnt7 = ((($f)) + 108|0);
    $5 = load4($shcnt7);
    $sub = (($2) - ($5))|0;
    $cmp9 = ($sub$ptr$sub|0)<($sub|0);
    $6 = $$pre;
    if ($cmp9) {
     $13 = $6;
     label = 9;
    } else {
     $sub8 = (($sub) + -1)|0;
     $add$ptr = (($4) + ($sub8)|0);
     $shend16 = ((($f)) + 100|0);
     store4($shend16,$add$ptr);
     $7 = $6;
    }
   }
   if ((label|0) == 9) {
    $shend18 = ((($f)) + 100|0);
    store4($shend18,$$pre);
    $7 = $13;
   }
   $tobool21 = ($7|0)==(0|0);
   $rpos31$phi$trans$insert = ((($f)) + 4|0);
   if ($tobool21) {
    $$pre25 = load4($rpos31$phi$trans$insert);
    $11 = $$pre25;
   } else {
    $8 = load4($rpos31$phi$trans$insert);
    $sub$ptr$lhs$cast25 = $7;
    $shcnt28 = ((($f)) + 108|0);
    $9 = load4($shcnt28);
    $sub$ptr$sub27 = (($sub$ptr$lhs$cast25) + 1)|0;
    $add = (($sub$ptr$sub27) - ($8))|0;
    $add29 = (($add) + ($9))|0;
    store4($shcnt28,$add29);
    $10 = $8;
    $11 = $10;
   }
   $arrayidx = ((($11)) + -1|0);
   $12 = load1($arrayidx);
   $conv = $12&255;
   $cmp32 = ($conv|0)==($call|0);
   if ($cmp32) {
    $retval$0 = $call;
   } else {
    $conv35 = $call&255;
    store1($arrayidx,$conv35);
    $retval$0 = $call;
   }
  }
 }
 if ((label|0) == 4) {
  $shend = ((($f)) + 100|0);
  store4($shend,0);
  $retval$0 = -1;
 }
 return ($retval$0|0);
}
function ___intscan($f,$base,$pok,$lim) {
 $f = $f|0;
 $base = $base|0;
 $pok = $pok|0;
 $lim = i64($lim);
 var $$base132 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $add = 0, $add149 = i64(), $add249 = 0, $add288 = i64(), $and = 0, $and174 = 0, $and331 = i64(), $and346 = i64(), $arrayidx = 0, $arrayidx175 = 0, $arrayidx178 = 0, $arrayidx178152 = 0, $arrayidx206 = 0, $arrayidx237 = 0, $arrayidx237170 = 0, $arrayidx266 = 0, $arrayidx305 = 0, $arrayidx311 = 0, $arrayidx93 = 0;
 var $base$addr$1 = 0, $base$addr$1134 = 0, $base$addr$1135 = 0, $c$0 = 0, $c$1 = 0, $c$1136 = 0, $c$2$be = 0, $c$2$lcssa = 0, $c$3$be = 0, $c$3$lcssa = 0, $c$3179 = 0, $c$4$be = 0, $c$4$lcssa = 0, $c$5$be = 0, $c$6$be = 0, $c$6$lcssa = 0, $c$7$be = 0, $c$7162 = 0, $c$8 = 0, $c$9$be = 0;
 var $call = 0, $call105 = 0, $call126 = 0, $call160 = 0, $call200 = 0, $call21 = 0, $call231 = 0, $call260 = 0, $call299 = 0, $call3 = 0, $call326 = 0, $call330 = 0, $call351 = 0, $call357 = 0, $call4 = 0, $call42 = 0, $call57 = 0, $cmp = 0, $cmp1 = 0, $cmp108 = 0;
 var $cmp112 = 0, $cmp112189 = 0, $cmp114 = 0, $cmp119 = 0, $cmp132 = 0, $cmp132178 = 0, $cmp135 = 0, $cmp14 = 0, $cmp142 = 0, $cmp153 = 0, $cmp165 = 0, $cmp180 = 0, $cmp180154 = 0, $cmp183 = 0, $cmp193 = 0, $cmp208 = 0, $cmp208147 = 0, $cmp212 = 0, $cmp212148 = 0, $cmp224 = 0;
 var $cmp239 = 0, $cmp239172 = 0, $cmp242 = 0, $cmp25 = 0, $cmp253 = 0, $cmp268 = 0, $cmp268161 = 0, $cmp272 = 0, $cmp280 = 0, $cmp292 = 0, $cmp30 = 0, $cmp307 = 0, $cmp313 = 0, $cmp319 = 0, $cmp343 = 0, $cmp35 = 0, $cmp354 = 0, $cmp45 = 0, $cmp50 = 0, $cmp61 = 0;
 var $cmp7 = 0, $cmp95 = 0, $cond = 0, $cond44 = 0, $cond59 = 0, $conv = 0, $conv124 = 0, $conv140 = i64(), $conv158 = 0, $conv176 = 0, $conv179 = 0, $conv179153 = 0, $conv179156 = 0, $conv19 = 0, $conv198 = 0, $conv207 = 0, $conv207146 = 0, $conv219 = i64(), $conv229 = 0, $conv238 = 0;
 var $conv238171 = 0, $conv238174 = 0, $conv258 = 0, $conv267 = 0, $conv267160 = 0, $conv271 = i64(), $conv278 = i64(), $conv297 = 0, $conv306 = 0, $conv312 = 0, $conv324 = 0, $conv361 = i64(), $conv40 = 0, $conv55 = 0, $conv94 = 0, $div = i64(), $incdec$ptr = 0, $incdec$ptr102 = 0, $incdec$ptr123 = 0, $incdec$ptr157 = 0;
 var $incdec$ptr18 = 0, $incdec$ptr197 = 0, $incdec$ptr228 = 0, $incdec$ptr257 = 0, $incdec$ptr296 = 0, $incdec$ptr323 = 0, $incdec$ptr340 = 0, $incdec$ptr39 = 0, $incdec$ptr54 = 0, $incdec$ptr68 = 0, $incdec$ptr77 = 0, $mul = 0, $mul138 = i64(), $mul173 = 0, $mul246 = 0, $mul276 = i64(), $neg$0 = 0, $neg$0$ = 0, $neg$1 = 0, $or = 0;
 var $or$cond = 0, $or$cond149 = 0, $or$cond2 = 0, $or$cond3 = 0, $or$cond5 = 0, $or189 = 0, $or220 = i64(), $phitmp = i64(), $phitmp195 = i64(), $phitmp196 = i64(), $retval$0 = i64(), $rpos = 0, $sh_prom = i64(), $shend = 0, $shl = 0, $shl217 = i64(), $shr = 0, $shr211 = i64(), $sub = 0, $sub111 = 0;
 var $sub111188 = 0, $sub111191 = 0, $sub131 = 0, $sub131$lcssa = 0, $sub131177 = 0, $sub131181 = 0, $sub141 = i64(), $sub170 = 0, $sub279 = i64(), $sub352 = i64(), $sub363 = i64(), $tobool = 0, $tobool171 = 0, $tobool332 = 0, $tobool337 = 0, $tobool347 = 0, $tobool349 = 0, $tobool65 = 0, $tobool71 = 0, $tobool99 = 0;
 var $x$0$lcssa = i64(), $x$0190 = 0, $x$1$lcssa = i64(), $x$1155 = 0, $x$2$lcssa = i64(), $x$2173 = 0, $xor = i64(), $y$0$lcssa = i64(), $y$0180 = i64(), $y$1150 = i64(), $y$2163 = i64(), $y$3 = i64(), $y$4 = i64(), label = 0, sp = 0;
 sp = STACKTOP;
 $cmp = ($base>>>0)>(36);
 L1: do {
  if ($cmp) {
   $call = (___errno_location()|0);
   store4($call,22);
   $retval$0 = i64_const(0,0);
  } else {
   $rpos = ((($f)) + 4|0);
   $shend = ((($f)) + 100|0);
   while(1) {
    $0 = load4($rpos);
    $1 = load4($shend);
    $cmp1 = ($0>>>0)<($1>>>0);
    if ($cmp1) {
     $incdec$ptr = ((($0)) + 1|0);
     store4($rpos,$incdec$ptr);
     $2 = load1($0);
     $conv = $2&255;
     $cond = $conv;
    } else {
     $call3 = (___shgetc($f)|0);
     $cond = $call3;
    }
    $call4 = (_isspace($cond)|0);
    $tobool = ($call4|0)==(0);
    if ($tobool) {
     break;
    }
   }
   $cmp7 = ($cond|0)==(45);
   L11: do {
    switch ($cond|0) {
    case 43: case 45:  {
     $sub = $cmp7 << 31 >> 31;
     $3 = load4($rpos);
     $4 = load4($shend);
     $cmp14 = ($3>>>0)<($4>>>0);
     if ($cmp14) {
      $incdec$ptr18 = ((($3)) + 1|0);
      store4($rpos,$incdec$ptr18);
      $5 = load1($3);
      $conv19 = $5&255;
      $c$0 = $conv19;$neg$0 = $sub;
      break L11;
     } else {
      $call21 = (___shgetc($f)|0);
      $c$0 = $call21;$neg$0 = $sub;
      break L11;
     }
     break;
    }
    default: {
     $c$0 = $cond;$neg$0 = 0;
    }
    }
   } while(0);
   $cmp25 = ($base|0)==(0);
   $6 = $base | 16;
   $7 = ($6|0)==(16);
   $cmp30 = ($c$0|0)==(48);
   $or$cond2 = $7 & $cmp30;
   do {
    if ($or$cond2) {
     $8 = load4($rpos);
     $9 = load4($shend);
     $cmp35 = ($8>>>0)<($9>>>0);
     if ($cmp35) {
      $incdec$ptr39 = ((($8)) + 1|0);
      store4($rpos,$incdec$ptr39);
      $10 = load1($8);
      $conv40 = $10&255;
      $cond44 = $conv40;
     } else {
      $call42 = (___shgetc($f)|0);
      $cond44 = $call42;
     }
     $or = $cond44 | 32;
     $cmp45 = ($or|0)==(120);
     if (!($cmp45)) {
      if ($cmp25) {
       $base$addr$1135 = 8;$c$1136 = $cond44;
       label = 46;
       break;
      } else {
       $base$addr$1 = $base;$c$1 = $cond44;
       label = 32;
       break;
      }
     }
     $11 = load4($rpos);
     $12 = load4($shend);
     $cmp50 = ($11>>>0)<($12>>>0);
     if ($cmp50) {
      $incdec$ptr54 = ((($11)) + 1|0);
      store4($rpos,$incdec$ptr54);
      $13 = load1($11);
      $conv55 = $13&255;
      $cond59 = $conv55;
     } else {
      $call57 = (___shgetc($f)|0);
      $cond59 = $call57;
     }
     $arrayidx = ((4470) + ($cond59)|0);
     $14 = load1($arrayidx);
     $cmp61 = ($14&255)>(15);
     if ($cmp61) {
      $15 = load4($shend);
      $tobool65 = ($15|0)==(0|0);
      if (!($tobool65)) {
       $16 = load4($rpos);
       $incdec$ptr68 = ((($16)) + -1|0);
       store4($rpos,$incdec$ptr68);
      }
      $tobool71 = ($pok|0)==(0);
      if ($tobool71) {
       ___shlim($f,0);
       $retval$0 = i64_const(0,0);
       break L1;
      }
      if ($tobool65) {
       $retval$0 = i64_const(0,0);
       break L1;
      }
      $17 = load4($rpos);
      $incdec$ptr77 = ((($17)) + -1|0);
      store4($rpos,$incdec$ptr77);
      $retval$0 = i64_const(0,0);
      break L1;
     } else {
      $base$addr$1135 = 16;$c$1136 = $cond59;
      label = 46;
     }
    } else {
     $$base132 = $cmp25 ? 10 : $base;
     $arrayidx93 = ((4470) + ($c$0)|0);
     $18 = load1($arrayidx93);
     $conv94 = $18&255;
     $cmp95 = ($conv94>>>0)<($$base132>>>0);
     if ($cmp95) {
      $base$addr$1 = $$base132;$c$1 = $c$0;
      label = 32;
     } else {
      $19 = load4($shend);
      $tobool99 = ($19|0)==(0|0);
      if (!($tobool99)) {
       $20 = load4($rpos);
       $incdec$ptr102 = ((($20)) + -1|0);
       store4($rpos,$incdec$ptr102);
      }
      ___shlim($f,0);
      $call105 = (___errno_location()|0);
      store4($call105,22);
      $retval$0 = i64_const(0,0);
      break L1;
     }
    }
   } while(0);
   if ((label|0) == 32) {
    $cmp108 = ($base$addr$1|0)==(10);
    if ($cmp108) {
     $sub111188 = (($c$1) + -48)|0;
     $cmp112189 = ($sub111188>>>0)<(10);
     if ($cmp112189) {
      $sub111191 = $sub111188;$x$0190 = 0;
      while(1) {
       $mul = ($x$0190*10)|0;
       $add = (($mul) + ($sub111191))|0;
       $21 = load4($rpos);
       $22 = load4($shend);
       $cmp119 = ($21>>>0)<($22>>>0);
       if ($cmp119) {
        $incdec$ptr123 = ((($21)) + 1|0);
        store4($rpos,$incdec$ptr123);
        $23 = load1($21);
        $conv124 = $23&255;
        $c$2$be = $conv124;
       } else {
        $call126 = (___shgetc($f)|0);
        $c$2$be = $call126;
       }
       $sub111 = (($c$2$be) + -48)|0;
       $cmp112 = ($sub111>>>0)<(10);
       $cmp114 = ($add>>>0)<(429496729);
       $24 = $cmp112 & $cmp114;
       if ($24) {
        $sub111191 = $sub111;$x$0190 = $add;
       } else {
        break;
       }
      }
      $phitmp196 = i64_zext($add>>>0);
      $c$2$lcssa = $c$2$be;$x$0$lcssa = $phitmp196;
     } else {
      $c$2$lcssa = $c$1;$x$0$lcssa = i64_const(0,0);
     }
     $sub131177 = (($c$2$lcssa) + -48)|0;
     $cmp132178 = ($sub131177>>>0)<(10);
     if ($cmp132178) {
      $c$3179 = $c$2$lcssa;$sub131181 = $sub131177;$y$0180 = $x$0$lcssa;
      while(1) {
       $mul138 = i64_mul($y$0180,i64_const(10,0));
       $conv140 = i64_sext($sub131181);
       $sub141 = i64_xor($conv140,i64_const(4294967295,4294967295));
       $cmp142 = i64_ugt($mul138,$sub141);
       if ($cmp142) {
        $c$3$lcssa = $c$3179;$sub131$lcssa = $sub131181;$y$0$lcssa = $y$0180;
        break;
       }
       $add149 = i64_add($mul138,$conv140);
       $25 = load4($rpos);
       $26 = load4($shend);
       $cmp153 = ($25>>>0)<($26>>>0);
       if ($cmp153) {
        $incdec$ptr157 = ((($25)) + 1|0);
        store4($rpos,$incdec$ptr157);
        $27 = load1($25);
        $conv158 = $27&255;
        $c$3$be = $conv158;
       } else {
        $call160 = (___shgetc($f)|0);
        $c$3$be = $call160;
       }
       $sub131 = (($c$3$be) + -48)|0;
       $cmp132 = ($sub131>>>0)<(10);
       $cmp135 = i64_ult($add149,i64_const(2576980378,429496729));
       $or$cond3 = $cmp132 & $cmp135;
       if ($or$cond3) {
        $c$3179 = $c$3$be;$sub131181 = $sub131;$y$0180 = $add149;
       } else {
        $c$3$lcssa = $c$3$be;$sub131$lcssa = $sub131;$y$0$lcssa = $add149;
        break;
       }
      }
      $cmp165 = ($sub131$lcssa>>>0)>(9);
      if ($cmp165) {
       $neg$1 = $neg$0;$y$4 = $y$0$lcssa;
      } else {
       $base$addr$1134 = 10;$c$8 = $c$3$lcssa;$y$3 = $y$0$lcssa;
       label = 72;
      }
     } else {
      $neg$1 = $neg$0;$y$4 = $x$0$lcssa;
     }
    } else {
     $base$addr$1135 = $base$addr$1;$c$1136 = $c$1;
     label = 46;
    }
   }
   L63: do {
    if ((label|0) == 46) {
     $sub170 = (($base$addr$1135) + -1)|0;
     $and = $sub170 & $base$addr$1135;
     $tobool171 = ($and|0)==(0);
     if ($tobool171) {
      $mul173 = ($base$addr$1135*23)|0;
      $shr = $mul173 >>> 5;
      $and174 = $shr & 7;
      $arrayidx175 = (4726 + ($and174)|0);
      $29 = load1($arrayidx175);
      $conv176 = $29 << 24 >> 24;
      $arrayidx178152 = ((4470) + ($c$1136)|0);
      $30 = load1($arrayidx178152);
      $conv179153 = $30&255;
      $cmp180154 = ($conv179153>>>0)<($base$addr$1135>>>0);
      if ($cmp180154) {
       $conv179156 = $conv179153;$x$1155 = 0;
       while(1) {
        $shl = $x$1155 << $conv176;
        $or189 = $conv179156 | $shl;
        $31 = load4($rpos);
        $32 = load4($shend);
        $cmp193 = ($31>>>0)<($32>>>0);
        if ($cmp193) {
         $incdec$ptr197 = ((($31)) + 1|0);
         store4($rpos,$incdec$ptr197);
         $33 = load1($31);
         $conv198 = $33&255;
         $c$4$be = $conv198;
        } else {
         $call200 = (___shgetc($f)|0);
         $c$4$be = $call200;
        }
        $arrayidx178 = ((4470) + ($c$4$be)|0);
        $34 = load1($arrayidx178);
        $conv179 = $34&255;
        $cmp180 = ($conv179>>>0)<($base$addr$1135>>>0);
        $cmp183 = ($or189>>>0)<(134217728);
        $35 = $cmp183 & $cmp180;
        if ($35) {
         $conv179156 = $conv179;$x$1155 = $or189;
        } else {
         break;
        }
       }
       $phitmp195 = i64_zext($or189>>>0);
       $36 = $34;$c$4$lcssa = $c$4$be;$x$1$lcssa = $phitmp195;
      } else {
       $36 = $30;$c$4$lcssa = $c$1136;$x$1$lcssa = i64_const(0,0);
      }
      $sh_prom = i64_zext($conv176>>>0);
      $shr211 = i64_lshr(i64_const(4294967295,4294967295),$sh_prom);
      $conv207146 = $36&255;
      $cmp208147 = ($conv207146>>>0)>=($base$addr$1135>>>0);
      $cmp212148 = i64_ugt($x$1$lcssa,$shr211);
      $or$cond149 = $cmp208147 | $cmp212148;
      if ($or$cond149) {
       $base$addr$1134 = $base$addr$1135;$c$8 = $c$4$lcssa;$y$3 = $x$1$lcssa;
       label = 72;
       break;
      } else {
       $37 = $36;$y$1150 = $x$1$lcssa;
      }
      while(1) {
       $shl217 = i64_shl($y$1150,$sh_prom);
       $conv219 = i64_zext($37&255);
       $or220 = i64_or($conv219,$shl217);
       $38 = load4($rpos);
       $39 = load4($shend);
       $cmp224 = ($38>>>0)<($39>>>0);
       if ($cmp224) {
        $incdec$ptr228 = ((($38)) + 1|0);
        store4($rpos,$incdec$ptr228);
        $40 = load1($38);
        $conv229 = $40&255;
        $c$5$be = $conv229;
       } else {
        $call231 = (___shgetc($f)|0);
        $c$5$be = $call231;
       }
       $arrayidx206 = ((4470) + ($c$5$be)|0);
       $41 = load1($arrayidx206);
       $conv207 = $41&255;
       $cmp208 = ($conv207>>>0)>=($base$addr$1135>>>0);
       $cmp212 = i64_ugt($or220,$shr211);
       $or$cond = $cmp208 | $cmp212;
       if ($or$cond) {
        $base$addr$1134 = $base$addr$1135;$c$8 = $c$5$be;$y$3 = $or220;
        label = 72;
        break L63;
       } else {
        $37 = $41;$y$1150 = $or220;
       }
      }
     }
     $arrayidx237170 = ((4470) + ($c$1136)|0);
     $28 = load1($arrayidx237170);
     $conv238171 = $28&255;
     $cmp239172 = ($conv238171>>>0)<($base$addr$1135>>>0);
     if ($cmp239172) {
      $conv238174 = $conv238171;$x$2173 = 0;
      while(1) {
       $mul246 = Math_imul($x$2173, $base$addr$1135)|0;
       $add249 = (($conv238174) + ($mul246))|0;
       $42 = load4($rpos);
       $43 = load4($shend);
       $cmp253 = ($42>>>0)<($43>>>0);
       if ($cmp253) {
        $incdec$ptr257 = ((($42)) + 1|0);
        store4($rpos,$incdec$ptr257);
        $44 = load1($42);
        $conv258 = $44&255;
        $c$6$be = $conv258;
       } else {
        $call260 = (___shgetc($f)|0);
        $c$6$be = $call260;
       }
       $arrayidx237 = ((4470) + ($c$6$be)|0);
       $45 = load1($arrayidx237);
       $conv238 = $45&255;
       $cmp239 = ($conv238>>>0)<($base$addr$1135>>>0);
       $cmp242 = ($add249>>>0)<(119304647);
       $46 = $cmp242 & $cmp239;
       if ($46) {
        $conv238174 = $conv238;$x$2173 = $add249;
       } else {
        break;
       }
      }
      $phitmp = i64_zext($add249>>>0);
      $47 = $45;$c$6$lcssa = $c$6$be;$x$2$lcssa = $phitmp;
     } else {
      $47 = $28;$c$6$lcssa = $c$1136;$x$2$lcssa = i64_const(0,0);
     }
     $conv271 = i64_zext($base$addr$1135>>>0);
     $conv267160 = $47&255;
     $cmp268161 = ($conv267160>>>0)<($base$addr$1135>>>0);
     if ($cmp268161) {
      $div = i64_udiv(i64_const(4294967295,4294967295),$conv271);
      $48 = $47;$c$7162 = $c$6$lcssa;$y$2163 = $x$2$lcssa;
      while(1) {
       $cmp272 = i64_ugt($y$2163,$div);
       if ($cmp272) {
        $base$addr$1134 = $base$addr$1135;$c$8 = $c$7162;$y$3 = $y$2163;
        label = 72;
        break L63;
       }
       $mul276 = i64_mul($y$2163,$conv271);
       $conv278 = i64_zext($48&255);
       $sub279 = i64_xor($conv278,i64_const(4294967295,4294967295));
       $cmp280 = i64_ugt($mul276,$sub279);
       if ($cmp280) {
        $base$addr$1134 = $base$addr$1135;$c$8 = $c$7162;$y$3 = $y$2163;
        label = 72;
        break L63;
       }
       $add288 = i64_add($conv278,$mul276);
       $49 = load4($rpos);
       $50 = load4($shend);
       $cmp292 = ($49>>>0)<($50>>>0);
       if ($cmp292) {
        $incdec$ptr296 = ((($49)) + 1|0);
        store4($rpos,$incdec$ptr296);
        $51 = load1($49);
        $conv297 = $51&255;
        $c$7$be = $conv297;
       } else {
        $call299 = (___shgetc($f)|0);
        $c$7$be = $call299;
       }
       $arrayidx266 = ((4470) + ($c$7$be)|0);
       $52 = load1($arrayidx266);
       $conv267 = $52&255;
       $cmp268 = ($conv267>>>0)<($base$addr$1135>>>0);
       if ($cmp268) {
        $48 = $52;$c$7162 = $c$7$be;$y$2163 = $add288;
       } else {
        $base$addr$1134 = $base$addr$1135;$c$8 = $c$7$be;$y$3 = $add288;
        label = 72;
        break;
       }
      }
     } else {
      $base$addr$1134 = $base$addr$1135;$c$8 = $c$6$lcssa;$y$3 = $x$2$lcssa;
      label = 72;
     }
    }
   } while(0);
   if ((label|0) == 72) {
    $arrayidx305 = ((4470) + ($c$8)|0);
    $53 = load1($arrayidx305);
    $conv306 = $53&255;
    $cmp307 = ($conv306>>>0)<($base$addr$1134>>>0);
    if ($cmp307) {
     while(1) {
      $54 = load4($rpos);
      $55 = load4($shend);
      $cmp319 = ($54>>>0)<($55>>>0);
      if ($cmp319) {
       $incdec$ptr323 = ((($54)) + 1|0);
       store4($rpos,$incdec$ptr323);
       $56 = load1($54);
       $conv324 = $56&255;
       $c$9$be = $conv324;
      } else {
       $call326 = (___shgetc($f)|0);
       $c$9$be = $call326;
      }
      $arrayidx311 = ((4470) + ($c$9$be)|0);
      $57 = load1($arrayidx311);
      $conv312 = $57&255;
      $cmp313 = ($conv312>>>0)<($base$addr$1134>>>0);
      if (!($cmp313)) {
       break;
      }
     }
     $call330 = (___errno_location()|0);
     store4($call330,34);
     $and331 = i64_and($lim,i64_const(1,0));
     $tobool332 = i64_eq($and331,i64_const(0,0));
     $neg$0$ = $tobool332 ? $neg$0 : 0;
     $neg$1 = $neg$0$;$y$4 = $lim;
    } else {
     $neg$1 = $neg$0;$y$4 = $y$3;
    }
   }
   $58 = load4($shend);
   $tobool337 = ($58|0)==(0|0);
   if (!($tobool337)) {
    $59 = load4($rpos);
    $incdec$ptr340 = ((($59)) + -1|0);
    store4($rpos,$incdec$ptr340);
   }
   $cmp343 = i64_ult($y$4,$lim);
   if (!($cmp343)) {
    $and346 = i64_and($lim,i64_const(1,0));
    $tobool347 = i64_ne($and346,i64_const(0,0));
    $tobool349 = ($neg$1|0)!=(0);
    $or$cond5 = $tobool347 | $tobool349;
    if (!($or$cond5)) {
     $call351 = (___errno_location()|0);
     store4($call351,34);
     $sub352 = i64_add($lim,i64_const(4294967295,4294967295));
     $retval$0 = $sub352;
     break;
    }
    $cmp354 = i64_ugt($y$4,$lim);
    if ($cmp354) {
     $call357 = (___errno_location()|0);
     store4($call357,34);
     $retval$0 = $lim;
     break;
    }
   }
   $conv361 = i64_sext($neg$1);
   $xor = i64_xor($y$4,$conv361);
   $sub363 = i64_sub($xor,$conv361);
   $retval$0 = $sub363;
  }
 } while(0);
 return (i64($retval$0));
}
function ___uflow($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $c = 0, $call = 0, $call2 = 0, $cmp = 0, $conv = 0, $read = 0, $rend = 0, $retval$0 = 0, $tobool = 0, $tobool1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $c = sp;
 $rend = ((($f)) + 8|0);
 $0 = load4($rend);
 $tobool = ($0|0)==(0|0);
 if ($tobool) {
  $call = (___toread($f)|0);
  $tobool1 = ($call|0)==(0);
  if ($tobool1) {
   label = 3;
  } else {
   $retval$0 = -1;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $read = ((($f)) + 32|0);
  $1 = load4($read);
  $call2 = (FUNCTION_TABLE_iiii[$1 & 7]($f,$c,1)|0);
  $cmp = ($call2|0)==(1);
  if ($cmp) {
   $2 = load1($c);
   $conv = $2&255;
   $retval$0 = $conv;
  } else {
   $retval$0 = -1;
  }
 }
 STACKTOP = sp;return ($retval$0|0);
}
function ___toread($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $and = 0, $and8 = 0, $buf = 0, $cmp = 0, $conv = 0, $conv3 = 0, $mode = 0, $or = 0, $or12 = 0, $rend = 0, $retval$0 = 0, $rpos = 0, $sub = 0, $tobool = 0;
 var $tobool9 = 0, $wbase = 0, $wend = 0, $wpos = 0, $write = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $mode = ((($f)) + 74|0);
 $0 = load1($mode);
 $conv = $0 << 24 >> 24;
 $sub = (($conv) + 255)|0;
 $or = $sub | $conv;
 $conv3 = $or&255;
 store1($mode,$conv3);
 $wpos = ((($f)) + 20|0);
 $1 = load4($wpos);
 $buf = ((($f)) + 44|0);
 $2 = load4($buf);
 $cmp = ($1>>>0)>($2>>>0);
 if ($cmp) {
  $write = ((($f)) + 36|0);
  $3 = load4($write);
  (FUNCTION_TABLE_iiii[$3 & 7]($f,0,0)|0);
 }
 $wend = ((($f)) + 16|0);
 store4($wend,0);
 $wbase = ((($f)) + 28|0);
 store4($wbase,0);
 store4($wpos,0);
 $4 = load4($f);
 $and = $4 & 20;
 $tobool = ($and|0)==(0);
 if ($tobool) {
  $5 = load4($buf);
  $rend = ((($f)) + 8|0);
  store4($rend,$5);
  $rpos = ((($f)) + 4|0);
  store4($rpos,$5);
  $retval$0 = 0;
 } else {
  $and8 = $4 & 4;
  $tobool9 = ($and8|0)==(0);
  if ($tobool9) {
   $retval$0 = -1;
  } else {
   $or12 = $4 | 32;
   store4($f,$or12);
   $retval$0 = -1;
  }
 }
 return ($retval$0|0);
}
function _fprintf($f,$fmt,$varargs) {
 $f = $f|0;
 $fmt = $fmt|0;
 $varargs = $varargs|0;
 var $ap = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ap = sp;
 store4($ap,$varargs);
 $call = (_vfprintf($f,$fmt,$ap)|0);
 STACKTOP = sp;return ($call|0);
}
function _sprintf($s,$fmt,$varargs) {
 $s = $s|0;
 $fmt = $fmt|0;
 $varargs = $varargs|0;
 var $ap = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ap = sp;
 store4($ap,$varargs);
 $call = (_vsprintf($s,$fmt,$ap)|0);
 STACKTOP = sp;return ($call|0);
}
function _vsprintf($s,$fmt,$ap) {
 $s = $s|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (_vsnprintf($s,2147483647,$fmt,$ap)|0);
 return ($call|0);
}
function _strtox_284($s,$p,$base,$lim) {
 $s = $s|0;
 $p = $p|0;
 $base = $base|0;
 $lim = i64($lim);
 var $$sink = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $add = 0, $add$ptr = 0, $add$ptr5 = 0, $buf = 0, $call = i64(), $cmp = 0, $f = 0, $lock = 0, $rpos = 0, $shcnt = 0, $sub$ptr$sub = 0, $tobool = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0;
 $f = sp;
 store4($f,0);
 $rpos = ((($f)) + 4|0);
 store4($rpos,$s);
 $buf = ((($f)) + 44|0);
 store4($buf,$s);
 $cmp = ($s|0)<(0|0);
 $add$ptr = ((($s)) + 2147483647|0);
 $$sink = $cmp ? (-1) : $add$ptr;
 $0 = ((($f)) + 8|0);
 store4($0,$$sink);
 $lock = ((($f)) + 76|0);
 store4($lock,-1);
 ___shlim($f,0);
 $call = (i64(___intscan($f,$base,1,$lim)));
 $tobool = ($p|0)==(0|0);
 if (!($tobool)) {
  $shcnt = ((($f)) + 108|0);
  $1 = load4($shcnt);
  $2 = load4($rpos);
  $3 = load4($0);
  $sub$ptr$sub = (($2) + ($1))|0;
  $add = (($sub$ptr$sub) - ($3))|0;
  $add$ptr5 = (($s) + ($add)|0);
  store4($p,$add$ptr5);
 }
 STACKTOP = sp;return (i64($call));
}
function _strtol($s,$p,$base) {
 $s = $s|0;
 $p = $p|0;
 $base = $base|0;
 var $call = i64(), $conv = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $call = (i64(_strtox_284($s,$p,$base,i64_const(2147483648,0))));
 $conv = i64_trunc($call);
 return ($conv|0);
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
function _fputc($c,$f) {
 $c = $c|0;
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $call = 0, $call24 = 0, $call8 = 0, $cmp = 0, $cmp1 = 0, $cmp11 = 0, $cmp16 = 0, $cmp3 = 0, $cond26 = 0, $conv = 0, $conv10 = 0, $conv19 = 0, $conv22 = 0;
 var $conv5 = 0, $conv7 = 0, $incdec$ptr = 0, $incdec$ptr21 = 0, $lbf = 0, $lbf9 = 0, $lock = 0, $retval$0 = 0, $tobool = 0, $wend = 0, $wend15 = 0, $wpos = 0, $wpos14 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $lock = ((($f)) + 76|0);
 $0 = load4($lock);
 $cmp = ($0|0)<(0);
 if ($cmp) {
  label = 3;
 } else {
  $call = (___lockfile($f)|0);
  $tobool = ($call|0)==(0);
  if ($tobool) {
   label = 3;
  } else {
   $lbf9 = ((($f)) + 75|0);
   $4 = load1($lbf9);
   $conv10 = $4 << 24 >> 24;
   $cmp11 = ($conv10|0)==($c|0);
   if ($cmp11) {
    label = 10;
   } else {
    $wpos14 = ((($f)) + 20|0);
    $5 = load4($wpos14);
    $wend15 = ((($f)) + 16|0);
    $6 = load4($wend15);
    $cmp16 = ($5>>>0)<($6>>>0);
    if ($cmp16) {
     $conv19 = $c&255;
     $incdec$ptr21 = ((($5)) + 1|0);
     store4($wpos14,$incdec$ptr21);
     store1($5,$conv19);
     $conv22 = $c & 255;
     $cond26 = $conv22;
    } else {
     label = 10;
    }
   }
   if ((label|0) == 10) {
    $call24 = (___overflow($f,$c)|0);
    $cond26 = $call24;
   }
   ___unlockfile($f);
   $retval$0 = $cond26;
  }
 }
 do {
  if ((label|0) == 3) {
   $lbf = ((($f)) + 75|0);
   $1 = load1($lbf);
   $conv = $1 << 24 >> 24;
   $cmp1 = ($conv|0)==($c|0);
   if (!($cmp1)) {
    $wpos = ((($f)) + 20|0);
    $2 = load4($wpos);
    $wend = ((($f)) + 16|0);
    $3 = load4($wend);
    $cmp3 = ($2>>>0)<($3>>>0);
    if ($cmp3) {
     $conv5 = $c&255;
     $incdec$ptr = ((($2)) + 1|0);
     store4($wpos,$incdec$ptr);
     store1($2,$conv5);
     $conv7 = $c & 255;
     $retval$0 = $conv7;
     break;
    }
   }
   $call8 = (___overflow($f,$c)|0);
   $retval$0 = $call8;
  }
 } while(0);
 return ($retval$0|0);
}
function _printf($fmt,$varargs) {
 $fmt = $fmt|0;
 $varargs = $varargs|0;
 var $0 = 0, $ap = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0;
 $ap = sp;
 store4($ap,$varargs);
 $0 = load4(1024);
 $call = (_vfprintf($0,$fmt,$ap)|0);
 STACKTOP = sp;return ($call|0);
}
function _puts($s) {
 $s = $s|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $call = 0, $call1 = 0, $call10 = 0, $cmp = 0, $cmp2 = 0, $cmp3 = 0, $cmp5 = 0, $cond = 0, $incdec$ptr = 0, $lbf = 0, $lock = 0, $phitmp = 0, $sub = 0, $tobool = 0;
 var $wend = 0, $wpos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(1024);
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
function _putchar($c) {
 $c = $c|0;
 var $0 = 0, $call = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(1024);
 $call = (_fputc($c,$0)|0);
 return ($call|0);
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
   $0 = load4(328200);
   $shr3 = $0 >>> $shr;
   $and4 = $shr3 & 3;
   $cmp5 = ($and4|0)==(0);
   if (!($cmp5)) {
    $neg = $shr3 & 1;
    $and7 = $neg ^ 1;
    $add8 = (($and7) + ($shr))|0;
    $shl = $add8 << 1;
    $arrayidx = (328240 + ($shl<<2)|0);
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
      store4(328200,$and14);
     } else {
      $4 = load4((328216));
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
   $7 = load4((328208));
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
     $arrayidx66 = (328240 + ($shl65<<2)|0);
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
       store4(328200,$and74);
       $14 = $and74;
      } else {
       $11 = load4((328216));
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
      $13 = load4((328220));
      $shr101 = $7 >>> 3;
      $shl102 = $shr101 << 1;
      $arrayidx103 = (328240 + ($shl102<<2)|0);
      $shl105 = 1 << $shr101;
      $and106 = $14 & $shl105;
      $tobool107 = ($and106|0)==(0);
      if ($tobool107) {
       $or110 = $14 | $shl105;
       store4(328200,$or110);
       $$pre = ((($arrayidx103)) + 8|0);
       $$pre$phiZ2D = $$pre;$F104$0 = $arrayidx103;
      } else {
       $15 = ((($arrayidx103)) + 8|0);
       $16 = load4($15);
       $17 = load4((328216));
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
     store4((328208),$sub91);
     store4((328220),$add$ptr95);
     $retval$0 = $fd69;
     STACKTOP = sp;return ($retval$0|0);
    }
    $18 = load4((328204));
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
     $arrayidx$i = (328504 + ($add20$i<<2)|0);
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
     $24 = load4((328216));
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
       $arrayidx94$i = (328504 + ($34<<2)|0);
       $35 = load4($arrayidx94$i);
       $cmp95$i = ($v$0$i|0)==($35|0);
       if ($cmp95$i) {
        store4($arrayidx94$i,$R$3$i);
        $cond2$i = ($R$3$i|0)==(0|0);
        if ($cond2$i) {
         $shl$i = 1 << $34;
         $neg$i = $shl$i ^ -1;
         $and103$i = $18 & $neg$i;
         store4((328204),$and103$i);
         break;
        }
       } else {
        $36 = load4((328216));
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
       $38 = load4((328216));
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
        $41 = load4((328216));
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
       $43 = load4((328220));
       $shr194$i = $7 >>> 3;
       $shl195$i = $shr194$i << 1;
       $arrayidx196$i = (328240 + ($shl195$i<<2)|0);
       $shl198$i = 1 << $shr194$i;
       $and199$i = $0 & $shl198$i;
       $tobool200$i = ($and199$i|0)==(0);
       if ($tobool200$i) {
        $or204$i = $0 | $shl198$i;
        store4(328200,$or204$i);
        $$pre$i = ((($arrayidx196$i)) + 8|0);
        $$pre$phi$iZ2D = $$pre$i;$F197$0$i = $arrayidx196$i;
       } else {
        $44 = ((($arrayidx196$i)) + 8|0);
        $45 = load4($44);
        $46 = load4((328216));
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
      store4((328208),$rsize$0$i);
      store4((328220),$add$ptr$i);
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
    $47 = load4((328204));
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
     $arrayidx$i150 = (328504 + ($idx$0$i<<2)|0);
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
       $arrayidx94$i156 = (328504 + ($add92$i<<2)|0);
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
      $57 = load4((328208));
      $sub118$i = (($57) - ($and145))|0;
      $cmp119$i = ($rsize$4$lcssa$i>>>0)<($sub118$i>>>0);
      if ($cmp119$i) {
       $58 = load4((328216));
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
         $arrayidx184$i = (328504 + ($68<<2)|0);
         $69 = load4($arrayidx184$i);
         $cmp185$i = ($v$4$lcssa$i|0)==($69|0);
         if ($cmp185$i) {
          store4($arrayidx184$i,$R$3$i171);
          $cond3$i = ($R$3$i171|0)==(0|0);
          if ($cond3$i) {
           $shl192$i = 1 << $68;
           $neg$i173 = $shl192$i ^ -1;
           $and194$i = $47 & $neg$i173;
           store4((328204),$and194$i);
           $81 = $and194$i;
           break;
          }
         } else {
          $70 = load4((328216));
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
         $72 = load4((328216));
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
          $75 = load4((328216));
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
          $arrayidx289$i = (328240 + ($shl288$i<<2)|0);
          $77 = load4(328200);
          $shl291$i = 1 << $shr283$i;
          $and292$i = $77 & $shl291$i;
          $tobool293$i = ($and292$i|0)==(0);
          if ($tobool293$i) {
           $or297$i = $77 | $shl291$i;
           store4(328200,$or297$i);
           $$pre$i177 = ((($arrayidx289$i)) + 8|0);
           $$pre$phi$i178Z2D = $$pre$i177;$F290$0$i = $arrayidx289$i;
          } else {
           $78 = ((($arrayidx289$i)) + 8|0);
           $79 = load4($78);
           $80 = load4((328216));
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
         $arrayidx355$i = (328504 + ($I316$0$i<<2)|0);
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
          store4((328204),$or368$i);
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
          $85 = load4((328216));
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
          $87 = load4((328216));
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
 $89 = load4((328208));
 $cmp156 = ($89>>>0)<($nb$0>>>0);
 if (!($cmp156)) {
  $sub160 = (($89) - ($nb$0))|0;
  $90 = load4((328220));
  $cmp162 = ($sub160>>>0)>(15);
  if ($cmp162) {
   $add$ptr166 = (($90) + ($nb$0)|0);
   store4((328220),$add$ptr166);
   store4((328208),$sub160);
   $or167 = $sub160 | 1;
   $head168 = ((($add$ptr166)) + 4|0);
   store4($head168,$or167);
   $add$ptr169 = (($add$ptr166) + ($sub160)|0);
   store4($add$ptr169,$sub160);
   $or172 = $nb$0 | 3;
   $head173 = ((($90)) + 4|0);
   store4($head173,$or172);
  } else {
   store4((328208),0);
   store4((328220),0);
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
 $92 = load4((328212));
 $cmp186 = ($92>>>0)>($nb$0>>>0);
 if ($cmp186) {
  $sub190 = (($92) - ($nb$0))|0;
  store4((328212),$sub190);
  $93 = load4((328224));
  $add$ptr193 = (($93) + ($nb$0)|0);
  store4((328224),$add$ptr193);
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
 $94 = load4(328672);
 $cmp$i179 = ($94|0)==(0);
 if ($cmp$i179) {
  store4((328680),4096);
  store4((328676),4096);
  store4((328684),-1);
  store4((328688),-1);
  store4((328692),0);
  store4((328644),0);
  $95 = $magic$i$i;
  $xor$i$i = $95 & -16;
  $and6$i$i = $xor$i$i ^ 1431655768;
  store4($magic$i$i,$and6$i$i);
  store4(328672,$and6$i$i);
  $96 = 4096;
 } else {
  $$pre$i180 = load4((328680));
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
 $97 = load4((328640));
 $cmp15$i = ($97|0)==(0);
 if (!($cmp15$i)) {
  $98 = load4((328632));
  $add17$i184 = (($98) + ($and11$i))|0;
  $cmp19$i = ($add17$i184>>>0)<=($98>>>0);
  $cmp21$i = ($add17$i184>>>0)>($97>>>0);
  $or$cond1$i185 = $cmp19$i | $cmp21$i;
  if ($or$cond1$i185) {
   $retval$0 = 0;
   STACKTOP = sp;return ($retval$0|0);
  }
 }
 $99 = load4((328644));
 $and29$i = $99 & 4;
 $tobool30$i = ($and29$i|0)==(0);
 L255: do {
  if ($tobool30$i) {
   $100 = load4((328224));
   $cmp32$i186 = ($100|0)==(0|0);
   L257: do {
    if ($cmp32$i186) {
     label = 172;
    } else {
     $sp$0$i$i = (328648);
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
      $105 = load4((328676));
      $sub41$i = (($105) + -1)|0;
      $and42$i = $sub41$i & $104;
      $cmp43$i = ($and42$i|0)==(0);
      $add46$i = (($sub41$i) + ($104))|0;
      $neg48$i = (0 - ($105))|0;
      $and49$i = $add46$i & $neg48$i;
      $sub50$i = (($and49$i) - ($104))|0;
      $add51$i = $cmp43$i ? 0 : $sub50$i;
      $and11$add51$i = (($add51$i) + ($and11$i))|0;
      $106 = load4((328632));
      $add54$i = (($and11$add51$i) + ($106))|0;
      $cmp55$i187 = ($and11$add51$i>>>0)>($nb$0>>>0);
      $cmp57$i188 = ($and11$add51$i>>>0)<(2147483647);
      $or$cond$i189 = $cmp55$i187 & $cmp57$i188;
      if ($or$cond$i189) {
       $107 = load4((328640));
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
       $110 = load4((328680));
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
   $111 = load4((328644));
   $or$i196 = $111 | 4;
   store4((328644),$or$i196);
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
  $112 = load4((328632));
  $add150$i = (($112) + ($tsize$792$i))|0;
  store4((328632),$add150$i);
  $113 = load4((328636));
  $cmp151$i = ($add150$i>>>0)>($113>>>0);
  if ($cmp151$i) {
   store4((328636),$add150$i);
  }
  $114 = load4((328224));
  $cmp157$i = ($114|0)==(0|0);
  do {
   if ($cmp157$i) {
    $115 = load4((328216));
    $cmp159$i200 = ($115|0)==(0|0);
    $cmp162$i201 = ($tbase$793$i>>>0)<($115>>>0);
    $or$cond8$i = $cmp159$i200 | $cmp162$i201;
    if ($or$cond8$i) {
     store4((328216),$tbase$793$i);
    }
    store4((328648),$tbase$793$i);
    store4((328652),$tsize$792$i);
    store4((328660),0);
    $116 = load4(328672);
    store4((328236),$116);
    store4((328232),-1);
    $i$01$i$i = 0;
    while(1) {
     $shl$i13$i = $i$01$i$i << 1;
     $arrayidx$i14$i = (328240 + ($shl$i13$i<<2)|0);
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
    store4((328224),$add$ptr4$i$i);
    store4((328212),$sub5$i$i);
    $or$i$i = $sub5$i$i | 1;
    $head$i20$i = ((($add$ptr4$i$i)) + 4|0);
    store4($head$i20$i,$or$i$i);
    $add$ptr6$i$i = (($add$ptr4$i$i) + ($sub5$i$i)|0);
    $head7$i$i = ((($add$ptr6$i$i)) + 4|0);
    store4($head7$i$i,40);
    $121 = load4((328688));
    store4((328228),$121);
   } else {
    $sp$0104$i = (328648);
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
       $126 = load4((328212));
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
       store4((328224),$add$ptr4$i54$i);
       store4((328212),$sub5$i55$i);
       $or$i56$i = $sub5$i55$i | 1;
       $head$i57$i = ((($add$ptr4$i54$i)) + 4|0);
       store4($head$i57$i,$or$i56$i);
       $add$ptr6$i58$i = (($add$ptr4$i54$i) + ($sub5$i55$i)|0);
       $head7$i59$i = ((($add$ptr6$i58$i)) + 4|0);
       store4($head7$i59$i,40);
       $129 = load4((328688));
       store4((328228),$129);
       break;
      }
     }
    }
    $130 = load4((328216));
    $cmp218$i = ($tbase$793$i>>>0)<($130>>>0);
    if ($cmp218$i) {
     store4((328216),$tbase$793$i);
     $145 = $tbase$793$i;
    } else {
     $145 = $130;
    }
    $add$ptr227$i = (($tbase$793$i) + ($tsize$792$i)|0);
    $sp$1103$i = (328648);
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
      $sp$0$i$i$i = (328648);
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
        $139 = load4((328212));
        $add$i$i = (($139) + ($sub18$i$i))|0;
        store4((328212),$add$i$i);
        store4((328224),$add$ptr17$i$i);
        $or22$i$i = $add$i$i | 1;
        $head23$i$i = ((($add$ptr17$i$i)) + 4|0);
        store4($head23$i$i,$or22$i$i);
       } else {
        $140 = load4((328220));
        $cmp24$i$i = ($add$ptr16$i$i|0)==($140|0);
        if ($cmp24$i$i) {
         $141 = load4((328208));
         $add26$i$i = (($141) + ($sub18$i$i))|0;
         store4((328208),$add26$i$i);
         store4((328220),$add$ptr17$i$i);
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
           $arrayidx$i37$i = (328240 + ($shl$i36$i<<2)|0);
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
            $147 = load4(328200);
            $and49$i$i = $147 & $neg$i$i;
            store4(328200,$and49$i$i);
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
           $arrayidx123$i$i = (328504 + ($158<<2)|0);
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
             $160 = load4((328204));
             $and133$i$i = $160 & $neg132$i$i;
             store4((328204),$and133$i$i);
             break L326;
            } else {
             $161 = load4((328216));
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
           $163 = load4((328216));
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
           $166 = load4((328216));
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
         $arrayidx223$i$i = (328240 + ($shl221$i$i<<2)|0);
         $168 = load4(328200);
         $shl226$i$i = 1 << $shr214$i$i;
         $and227$i$i = $168 & $shl226$i$i;
         $tobool228$i$i = ($and227$i$i|0)==(0);
         do {
          if ($tobool228$i$i) {
           $or232$i$i = $168 | $shl226$i$i;
           store4(328200,$or232$i$i);
           $$pre$i45$i = ((($arrayidx223$i$i)) + 8|0);
           $$pre$phi$i46$iZ2D = $$pre$i45$i;$F224$0$i$i = $arrayidx223$i$i;
          } else {
           $169 = ((($arrayidx223$i$i)) + 8|0);
           $170 = load4($169);
           $171 = load4((328216));
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
        $arrayidx287$i$i = (328504 + ($I252$0$i$i<<2)|0);
        $index288$i$i = ((($add$ptr17$i$i)) + 28|0);
        store4($index288$i$i,$I252$0$i$i);
        $child289$i$i = ((($add$ptr17$i$i)) + 16|0);
        $arrayidx290$i$i = ((($child289$i$i)) + 4|0);
        store4($arrayidx290$i$i,0);
        store4($child289$i$i,0);
        $172 = load4((328204));
        $shl294$i$i = 1 << $I252$0$i$i;
        $and295$i$i = $172 & $shl294$i$i;
        $tobool296$i$i = ($and295$i$i|0)==(0);
        if ($tobool296$i$i) {
         $or300$i$i = $172 | $shl294$i$i;
         store4((328204),$or300$i$i);
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
         $176 = load4((328216));
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
         $178 = load4((328216));
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
      $sp$0$i$i$i = (328648);
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
    store4((328224),$add$ptr4$i$i$i);
    store4((328212),$sub5$i$i$i);
    $or$i$i$i = $sub5$i$i$i | 1;
    $head$i$i$i = ((($add$ptr4$i$i$i)) + 4|0);
    store4($head$i$i$i,$or$i$i$i);
    $add$ptr6$i$i$i = (($add$ptr4$i$i$i) + ($sub5$i$i$i)|0);
    $head7$i$i$i = ((($add$ptr6$i$i$i)) + 4|0);
    store4($head7$i$i$i,40);
    $187 = load4((328688));
    store4((328228),$187);
    $head$i$i = ((($cond13$i$i)) + 4|0);
    store4($head$i$i,27);
    ; store8($add$ptr14$i$i,load8((328648),4),4); store8($add$ptr14$i$i+8 | 0,load8((328648)+8 | 0,4),4);
    store4((328648),$tbase$793$i);
    store4((328652),$tsize$792$i);
    store4((328660),0);
    store4((328656),$add$ptr14$i$i);
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
      $arrayidx$i$i = (328240 + ($shl$i$i<<2)|0);
      $190 = load4(328200);
      $shl39$i$i = 1 << $shr$i$i;
      $and40$i$i = $190 & $shl39$i$i;
      $tobool$i$i = ($and40$i$i|0)==(0);
      if ($tobool$i$i) {
       $or44$i$i = $190 | $shl39$i$i;
       store4(328200,$or44$i$i);
       $$pre$i$i = ((($arrayidx$i$i)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $arrayidx$i$i;
      } else {
       $191 = ((($arrayidx$i$i)) + 8|0);
       $192 = load4($191);
       $193 = load4((328216));
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
     $arrayidx91$i$i = (328504 + ($I57$0$i$i<<2)|0);
     $index$i$i = ((($114)) + 28|0);
     store4($index$i$i,$I57$0$i$i);
     $arrayidx92$i$i = ((($114)) + 20|0);
     store4($arrayidx92$i$i,0);
     store4($add$ptr8$i118$i,0);
     $194 = load4((328204));
     $shl95$i$i = 1 << $I57$0$i$i;
     $and96$i$i = $194 & $shl95$i$i;
     $tobool97$i$i = ($and96$i$i|0)==(0);
     if ($tobool97$i$i) {
      $or101$i$i = $194 | $shl95$i$i;
      store4((328204),$or101$i$i);
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
      $198 = load4((328216));
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
      $200 = load4((328216));
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
  $202 = load4((328212));
  $cmp257$i = ($202>>>0)>($nb$0>>>0);
  if ($cmp257$i) {
   $sub260$i = (($202) - ($nb$0))|0;
   store4((328212),$sub260$i);
   $203 = load4((328224));
   $add$ptr262$i = (($203) + ($nb$0)|0);
   store4((328224),$add$ptr262$i);
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
 $0 = load4((328216));
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
   $3 = load4((328220));
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
    store4((328208),$add17);
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
    $arrayidx = (328240 + ($shl<<2)|0);
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
     $7 = load4(328200);
     $and46 = $7 & $neg;
     store4(328200,$and46);
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
    $arrayidx130 = (328504 + ($18<<2)|0);
    $19 = load4($arrayidx130);
    $cmp131 = ($add$ptr16|0)==($19|0);
    if ($cmp131) {
     store4($arrayidx130,$R$3);
     $cond291 = ($R$3|0)==(0|0);
     if ($cond291) {
      $shl138 = 1 << $18;
      $neg139 = $shl138 ^ -1;
      $20 = load4((328204));
      $and140 = $20 & $neg139;
      store4((328204),$and140);
      $p$1 = $add$ptr16;$psize$1 = $add17;
      break;
     }
    } else {
     $21 = load4((328216));
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
    $23 = load4((328216));
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
     $26 = load4((328216));
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
  $29 = load4((328224));
  $cmp243 = ($add$ptr6|0)==($29|0);
  if ($cmp243) {
   $30 = load4((328212));
   $add246 = (($30) + ($psize$1))|0;
   store4((328212),$add246);
   store4((328224),$p$1);
   $or247 = $add246 | 1;
   $head248 = ((($p$1)) + 4|0);
   store4($head248,$or247);
   $31 = load4((328220));
   $cmp249 = ($p$1|0)==($31|0);
   if (!($cmp249)) {
    return;
   }
   store4((328220),0);
   store4((328208),0);
   return;
  }
  $32 = load4((328220));
  $cmp255 = ($add$ptr6|0)==($32|0);
  if ($cmp255) {
   $33 = load4((328208));
   $add258 = (($33) + ($psize$1))|0;
   store4((328208),$add258);
   store4((328220),$p$1);
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
    $arrayidx279 = (328240 + ($shl278<<2)|0);
    $cmp280 = ($34|0)==($arrayidx279|0);
    if (!($cmp280)) {
     $36 = load4((328216));
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
     $38 = load4(328200);
     $and301 = $38 & $neg300;
     store4(328200,$and301);
     break;
    }
    $cmp305 = ($35|0)==($arrayidx279|0);
    if ($cmp305) {
     $$pre307 = ((($35)) + 8|0);
     $fd322$pre$phiZ2D = $$pre307;
    } else {
     $39 = load4((328216));
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
      $51 = load4((328216));
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
      $44 = load4((328216));
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
     $arrayidx400 = (328504 + ($52<<2)|0);
     $53 = load4($arrayidx400);
     $cmp401 = ($add$ptr6|0)==($53|0);
     if ($cmp401) {
      store4($arrayidx400,$R332$3);
      $cond292 = ($R332$3|0)==(0|0);
      if ($cond292) {
       $shl408 = 1 << $52;
       $neg409 = $shl408 ^ -1;
       $54 = load4((328204));
       $and410 = $54 & $neg409;
       store4((328204),$and410);
       break;
      }
     } else {
      $55 = load4((328216));
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
     $57 = load4((328216));
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
      $60 = load4((328216));
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
  $61 = load4((328220));
  $cmp484 = ($p$1|0)==($61|0);
  if ($cmp484) {
   store4((328208),$add267);
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
  $arrayidx509 = (328240 + ($shl508<<2)|0);
  $62 = load4(328200);
  $shl511 = 1 << $shr501;
  $and512 = $62 & $shl511;
  $tobool513 = ($and512|0)==(0);
  if ($tobool513) {
   $or516 = $62 | $shl511;
   store4(328200,$or516);
   $$pre = ((($arrayidx509)) + 8|0);
   $$pre$phiZ2D = $$pre;$F510$0 = $arrayidx509;
  } else {
   $63 = ((($arrayidx509)) + 8|0);
   $64 = load4($63);
   $65 = load4((328216));
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
 $arrayidx567 = (328504 + ($I534$0<<2)|0);
 $index568 = ((($p$1)) + 28|0);
 store4($index568,$I534$0);
 $child569 = ((($p$1)) + 16|0);
 $arrayidx570 = ((($p$1)) + 20|0);
 store4($arrayidx570,0);
 store4($child569,0);
 $66 = load4((328204));
 $shl573 = 1 << $I534$0;
 $and574 = $66 & $shl573;
 $tobool575 = ($and574|0)==(0);
 do {
  if ($tobool575) {
   $or578 = $66 | $shl573;
   store4((328204),$or578);
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
    $70 = load4((328216));
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
    $72 = load4((328216));
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
 $74 = load4((328232));
 $dec = (($74) + -1)|0;
 store4((328232),$dec);
 $cmp640 = ($dec|0)==(0);
 if ($cmp640) {
  $sp$0$in$i = (328656);
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
 store4((328232),-1);
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
function b2(p0) {
 p0 = p0|0; abort(2);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_ii = [b0,___stdio_close];
var FUNCTION_TABLE_iiii = [b1,___stdout_write,___stdio_seek,_sn_write,___stdio_write,b1,b1,b1];
var FUNCTION_TABLE_vi = [b2,_cleanup];

  return { _sbrk: _sbrk, _free: _free, _main: _main, _pthread_self: _pthread_self, _memset: _memset, _malloc: _malloc, _memcpy: _memcpy, ___errno_location: ___errno_location, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi };
})
;