(module
  (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
  (type $FUNCSIG$ii (func (param i32) (result i32)))
  (type $FUNCSIG$vi (func (param i32)))
  (type $FUNCSIG$i (func (result i32)))
  (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
  (type $FUNCSIG$vii (func (param i32 i32)))
  (type $FUNCSIG$v (func))
  (import "env" "DYNAMICTOP_PTR" (global $DYNAMICTOP_PTR$asm2wasm$import i32))
  (import "env" "STACKTOP" (global $STACKTOP$asm2wasm$import i32))
  (import "env" "STACK_MAX" (global $STACK_MAX$asm2wasm$import i32))
  (import "env" "abort" (func $abort (param i32)))
  (import "env" "enlargeMemory" (func $enlargeMemory (result i32)))
  (import "env" "getTotalMemory" (func $getTotalMemory (result i32)))
  (import "env" "abortOnCannotGrowMemory" (func $abortOnCannotGrowMemory (result i32)))
  (import "env" "_pthread_cleanup_pop" (func $_pthread_cleanup_pop (param i32)))
  (import "env" "___syscall6" (func $___syscall6 (param i32 i32) (result i32)))
  (import "env" "_pthread_cleanup_push" (func $_pthread_cleanup_push (param i32 i32)))
  (import "env" "_abort" (func $_abort))
  (import "env" "___setErrNo" (func $___setErrNo (param i32)))
  (import "env" "_emscripten_memcpy_big" (func $_emscripten_memcpy_big (param i32 i32 i32) (result i32)))
  (import "env" "___syscall54" (func $___syscall54 (param i32 i32) (result i32)))
  (import "env" "___syscall140" (func $___syscall140 (param i32 i32) (result i32)))
  (import "env" "___syscall146" (func $___syscall146 (param i32 i32) (result i32)))
  (import "env" "memory" (memory $0 2048 2048))
  (import "env" "table" (table 8 8 anyfunc))
  (import "env" "memoryBase" (global $memoryBase i32))
  (import "env" "tableBase" (global $tableBase i32))
  (global $DYNAMICTOP_PTR (mut i32) (get_global $DYNAMICTOP_PTR$asm2wasm$import))
  (global $STACKTOP (mut i32) (get_global $STACKTOP$asm2wasm$import))
  (global $STACK_MAX (mut i32) (get_global $STACK_MAX$asm2wasm$import))
  (global $__THREW__ (mut i32) (i32.const 0))
  (global $threwValue (mut i32) (i32.const 0))
  (global $tempRet0 (mut i32) (i32.const 0))
  (elem (get_global $tableBase) $b0 $___stdio_close $b1 $___stdout_write $___stdio_seek $___stdio_write $b2 $_cleanup)
  (data (i32.const 1024) "\04\04\00\00\05")
  (data (i32.const 1040) "\01")
  (data (i32.const 1064) "\01\00\00\00\02\00\00\00,\10\00\00\00\04")
  (data (i32.const 1088) "\01")
  (data (i32.const 1103) "\n\ff\ff\ff\ff")
  (data (i32.const 1140) "error: %d\\n\00ok %d\n\00\11\00\n\00\11\11\11\00\00\00\00\05\00\00\00\00\00\00\t\00\00\00\00\0b")
  (data (i32.const 1191) "\11\00\0f\n\11\11\11\03\n\07\00\01\13\t\0b\0b\00\00\t\06\0b\00\00\0b\00\06\11\00\00\00\11\11\11")
  (data (i32.const 1240) "\0b")
  (data (i32.const 1249) "\11\00\n\n\11\11\11\00\n\00\00\02\00\t\0b\00\00\00\t\00\0b\00\00\0b")
  (data (i32.const 1298) "\0c")
  (data (i32.const 1310) "\0c\00\00\00\00\0c\00\00\00\00\t\0c\00\00\00\00\00\0c\00\00\0c")
  (data (i32.const 1356) "\0e")
  (data (i32.const 1368) "\0d\00\00\00\04\0d\00\00\00\00\t\0e\00\00\00\00\00\0e\00\00\0e")
  (data (i32.const 1414) "\10")
  (data (i32.const 1426) "\0f\00\00\00\00\0f\00\00\00\00\t\10\00\00\00\00\00\10\00\00\10\00\00\12\00\00\00\12\12\12")
  (data (i32.const 1481) "\12\00\00\00\12\12\12\00\00\00\00\00\00\t")
  (data (i32.const 1530) "\0b")
  (data (i32.const 1542) "\n\00\00\00\00\n\00\00\00\00\t\0b\00\00\00\00\00\0b\00\00\0b")
  (data (i32.const 1588) "\0c")
  (data (i32.const 1600) "\0c\00\00\00\00\0c\00\00\00\00\t\0c\00\00\00\00\00\0c\00\00\0c\00\000123456789ABCDEF-+   0X0x\00(null)\00-0X+0X 0X-0x+0x 0x\00inf\00INF\00nan\00NAN\00.\00T!\"\19\0d\01\02\03\11K\1c\0c\10\04\0b\1d\12\1e\'hnopqb \05\06\0f\13\14\15\1a\08\16\07($\17\18\t\n\0e\1b\1f%#\83\82}&*+<=>?CGJMXYZ[\\]^_`acdefgijklrstyz{|\00Illegal byte sequence\00Domain error\00Result not representable\00Not a tty\00Permission denied\00Operation not permitted\00No such file or directory\00No such process\00File exists\00Value too large for data type\00No space left on device\00Out of memory\00Resource busy\00Interrupted system call\00Resource temporarily unavailable\00Invalid seek\00Cross-device link\00Read-only file system\00Directory not empty\00Connection reset by peer\00Operation timed out\00Connection refused\00Host is down\00Host is unreachable\00Address in use\00Broken pipe\00I/O error\00No such device or address\00Block device required\00No such device\00Not a directory\00Is a directory\00Text file busy\00Exec format error\00Invalid argument\00Argument list too long\00Symbolic link loop\00Filename too long\00Too many open files in system\00No file descriptors available\00Bad file descriptor\00No child process\00Bad address\00File too large\00Too many links\00No locks available\00Resource deadlock would occur\00State not recoverable\00Previous owner died\00Operation canceled\00Function not implemented\00No message of desired type\00Identifier removed\00Device not a stream\00No data available\00Device timeout\00Out of streams resources\00Link has been severed\00Protocol error\00Bad message\00File descriptor in bad state\00Not a socket\00Destination address required\00Message too large\00Protocol wrong type for socket\00Protocol not available\00Protocol not supported\00Socket type not supported\00Not supported\00Protocol family not supported\00Address family not supported by protocol\00Address not available\00Network is down\00Network unreachable\00Connection reset by network\00Connection aborted\00No buffer space available\00Socket is connected\00Socket not connected\00Cannot send after socket shutdown\00Operation already in progress\00Operation in progress\00Stale file handle\00Remote I/O error\00Quota exceeded\00No medium found\00Wrong medium type\00No error information")
  (export "_sbrk" (func $_sbrk))
  (export "_free" (func $_free))
  (export "_main" (func $_main))
  (export "_pthread_self" (func $_pthread_self))
  (export "_memset" (func $_memset))
  (export "_malloc" (func $_malloc))
  (export "_memcpy" (func $_memcpy))
  (export "___errno_location" (func $___errno_location))
  (export "runPostSets" (func $runPostSets))
  (export "stackAlloc" (func $stackAlloc))
  (export "stackSave" (func $stackSave))
  (export "stackRestore" (func $stackRestore))
  (export "establishStackSpace" (func $establishStackSpace))
  (export "setThrew" (func $setThrew))
  (export "setTempRet0" (func $setTempRet0))
  (export "getTempRet0" (func $getTempRet0))
  (export "dynCall_ii" (func $dynCall_ii))
  (export "dynCall_iiii" (func $dynCall_iiii))
  (export "dynCall_vi" (func $dynCall_vi))
  (func $stackAlloc (param $0 i32) (result i32)
    (local $1 i32)
    (set_local $1
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (get_local $0)
      )
    )
    (set_global $STACKTOP
      (i32.and
        (i32.add
          (get_global $STACKTOP)
          (i32.const 15)
        )
        (i32.const -16)
      )
    )
    (get_local $1)
  )
  (func $stackSave (result i32)
    (get_global $STACKTOP)
  )
  (func $stackRestore (param $0 i32)
    (set_global $STACKTOP
      (get_local $0)
    )
  )
  (func $establishStackSpace (param $0 i32) (param $1 i32)
    (set_global $STACKTOP
      (get_local $0)
    )
    (set_global $STACK_MAX
      (get_local $1)
    )
  )
  (func $setThrew (param $0 i32) (param $1 i32)
    (if
      (i32.eqz
        (get_global $__THREW__)
      )
      (block
        (set_global $__THREW__
          (get_local $0)
        )
        (set_global $threwValue
          (get_local $1)
        )
      )
    )
  )
  (func $setTempRet0 (param $0 i32)
    (set_global $tempRet0
      (get_local $0)
    )
  )
  (func $getTempRet0 (result i32)
    (get_global $tempRet0)
  )
  (func $_main (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (set_local $2
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $5
      (i32.add
        (get_local $2)
        (i32.const 8)
      )
    )
    (set_local $3
      (get_local $2)
    )
    (block $__rjto$0
      (block $__rjti$0
        (br_if $__rjti$0
          (i32.le_s
            (get_local $0)
            (i32.const 1)
          )
        )
        (block $switch-default
          (block $switch-case4
            (block $switch-case3
              (block $switch-case2
                (block $switch-case1
                  (block $switch-case0
                    (block $switch-case
                      (br_table $switch-case4 $switch-case $switch-case1 $switch-case0 $switch-case2 $switch-case3 $switch-default
                        (i32.sub
                          (tee_local $0
                            (i32.load8_s
                              (i32.load offset=4
                                (get_local $1)
                              )
                            )
                          )
                          (i32.const 48)
                        )
                      )
                    )
                    (set_local $4
                      (i32.const 225)
                    )
                    (br $__rjto$0)
                  )
                  (br $__rjti$0)
                )
                (set_local $4
                  (i32.const 1875)
                )
                (br $__rjto$0)
              )
              (set_local $4
                (i32.const 18750)
              )
              (br $__rjto$0)
            )
            (set_local $4
              (i32.const 37500)
            )
            (br $__rjto$0)
          )
          (set_global $STACKTOP
            (get_local $2)
          )
          (return
            (i32.const 0)
          )
        )
        (i32.store
          (get_local $3)
          (i32.add
            (get_local $0)
            (i32.const -48)
          )
        )
        (drop
          (call $_printf
            (i32.const 1140)
            (get_local $3)
          )
        )
        (set_global $STACKTOP
          (get_local $2)
        )
        (return
          (i32.const -1)
        )
      )
      (set_local $4
        (i32.const 3750)
      )
    )
    (set_local $1
      (i32.const 0)
    )
    (set_local $0
      (i32.const 0)
    )
    (loop $while-in
      (set_local $3
        (i32.const 0)
      )
      (loop $while-in6
        (set_local $6
          (i32.add
            (get_local $0)
            (i32.const 1)
          )
        )
        (set_local $0
          (if i32
            (if i32
              (i32.rem_s
                (i32.add
                  (i32.mul
                    (tee_local $7
                      (i32.add
                        (get_local $0)
                        (i32.const 2)
                      )
                    )
                    (get_local $0)
                  )
                  (i32.const 17)
                )
                (i32.const 5)
              )
              (i32.eqz
                (i32.rem_u
                  (i32.add
                    (i32.mul
                      (get_local $0)
                      (get_local $0)
                    )
                    (i32.const 11)
                  )
                  (i32.const 3)
                )
              )
              (i32.const 1)
            )
            (get_local $7)
            (get_local $6)
          )
        )
        (br_if $while-in6
          (i32.lt_s
            (tee_local $3
              (i32.add
                (get_local $3)
                (i32.const 1)
              )
            )
            (get_local $4)
          )
        )
      )
      (br_if $while-in
        (i32.ne
          (tee_local $1
            (i32.add
              (get_local $1)
              (i32.const 1)
            )
          )
          (i32.const 27000)
        )
      )
    )
    (i32.store
      (get_local $5)
      (get_local $0)
    )
    (drop
      (call $_printf
        (i32.const 1152)
        (get_local $5)
      )
    )
    (set_global $STACKTOP
      (get_local $2)
    )
    (get_local $0)
  )
  (func $___stdio_close (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (i32.store
      (tee_local $2
        (get_local $1)
      )
      (i32.load offset=60
        (get_local $0)
      )
    )
    (set_local $0
      (call $___syscall_ret
        (call $___syscall6
          (i32.const 6)
          (get_local $2)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $1)
    )
    (get_local $0)
  )
  (func $___stdio_seek (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (set_local $4
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 32)
      )
    )
    (i32.store
      (tee_local $3
        (get_local $4)
      )
      (i32.load offset=60
        (get_local $0)
      )
    )
    (i32.store offset=4
      (get_local $3)
      (i32.const 0)
    )
    (i32.store offset=8
      (get_local $3)
      (get_local $1)
    )
    (i32.store offset=12
      (get_local $3)
      (tee_local $0
        (i32.add
          (get_local $4)
          (i32.const 20)
        )
      )
    )
    (i32.store offset=16
      (get_local $3)
      (get_local $2)
    )
    (set_local $0
      (if i32
        (i32.lt_s
          (call $___syscall_ret
            (call $___syscall140
              (i32.const 140)
              (get_local $3)
            )
          )
          (i32.const 0)
        )
        (block i32
          (i32.store
            (get_local $0)
            (i32.const -1)
          )
          (i32.const -1)
        )
        (i32.load
          (get_local $0)
        )
      )
    )
    (set_global $STACKTOP
      (get_local $4)
    )
    (get_local $0)
  )
  (func $___syscall_ret (param $0 i32) (result i32)
    (if i32
      (i32.gt_u
        (get_local $0)
        (i32.const -4096)
      )
      (block i32
        (i32.store
          (call $___errno_location)
          (i32.sub
            (i32.const 0)
            (get_local $0)
          )
        )
        (i32.const -1)
      )
      (get_local $0)
    )
  )
  (func $___errno_location (result i32)
    (i32.const 3632)
  )
  (func $___unlockfile (param $0 i32)
    (nop)
  )
  (func $___stdout_write (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $4
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 80)
      )
    )
    (set_local $3
      (get_local $4)
    )
    (set_local $5
      (i32.add
        (get_local $4)
        (i32.const 12)
      )
    )
    (i32.store offset=36
      (get_local $0)
      (i32.const 3)
    )
    (if
      (i32.eqz
        (i32.and
          (i32.load
            (get_local $0)
          )
          (i32.const 64)
        )
      )
      (block
        (i32.store
          (get_local $3)
          (i32.load offset=60
            (get_local $0)
          )
        )
        (i32.store offset=4
          (get_local $3)
          (i32.const 21505)
        )
        (i32.store offset=8
          (get_local $3)
          (get_local $5)
        )
        (if
          (call $___syscall54
            (i32.const 54)
            (get_local $3)
          )
          (i32.store8 offset=75
            (get_local $0)
            (i32.const -1)
          )
        )
      )
    )
    (set_local $0
      (call $___stdio_write
        (get_local $0)
        (get_local $1)
        (get_local $2)
      )
    )
    (set_global $STACKTOP
      (get_local $4)
    )
    (get_local $0)
  )
  (func $___stdio_write (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (set_local $8
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 48)
      )
    )
    (set_local $9
      (i32.add
        (get_local $8)
        (i32.const 16)
      )
    )
    (set_local $10
      (get_local $8)
    )
    (i32.store
      (tee_local $3
        (i32.add
          (get_local $8)
          (i32.const 32)
        )
      )
      (tee_local $4
        (i32.load
          (tee_local $6
            (i32.add
              (get_local $0)
              (i32.const 28)
            )
          )
        )
      )
    )
    (i32.store offset=4
      (get_local $3)
      (tee_local $5
        (i32.sub
          (i32.load
            (tee_local $11
              (i32.add
                (get_local $0)
                (i32.const 20)
              )
            )
          )
          (get_local $4)
        )
      )
    )
    (i32.store offset=8
      (get_local $3)
      (get_local $1)
    )
    (i32.store offset=12
      (get_local $3)
      (get_local $2)
    )
    (set_local $13
      (i32.add
        (get_local $0)
        (i32.const 60)
      )
    )
    (set_local $14
      (i32.add
        (get_local $0)
        (i32.const 44)
      )
    )
    (set_local $1
      (get_local $3)
    )
    (set_local $4
      (i32.const 2)
    )
    (set_local $12
      (i32.add
        (get_local $5)
        (get_local $2)
      )
    )
    (block $__rjto$1
      (block $__rjti$1
        (block $__rjti$0
          (loop $while-in
            (if
              (i32.load
                (i32.const 3588)
              )
              (block
                (call $_pthread_cleanup_push
                  (i32.const 1)
                  (get_local $0)
                )
                (i32.store
                  (get_local $10)
                  (i32.load
                    (get_local $13)
                  )
                )
                (i32.store offset=4
                  (get_local $10)
                  (get_local $1)
                )
                (i32.store offset=8
                  (get_local $10)
                  (get_local $4)
                )
                (set_local $3
                  (call $___syscall_ret
                    (call $___syscall146
                      (i32.const 146)
                      (get_local $10)
                    )
                  )
                )
                (call $_pthread_cleanup_pop
                  (i32.const 0)
                )
              )
              (block
                (i32.store
                  (get_local $9)
                  (i32.load
                    (get_local $13)
                  )
                )
                (i32.store offset=4
                  (get_local $9)
                  (get_local $1)
                )
                (i32.store offset=8
                  (get_local $9)
                  (get_local $4)
                )
                (set_local $3
                  (call $___syscall_ret
                    (call $___syscall146
                      (i32.const 146)
                      (get_local $9)
                    )
                  )
                )
              )
            )
            (br_if $__rjti$0
              (i32.eq
                (get_local $12)
                (get_local $3)
              )
            )
            (br_if $__rjti$1
              (i32.lt_s
                (get_local $3)
                (i32.const 0)
              )
            )
            (set_local $5
              (if i32
                (i32.gt_u
                  (get_local $3)
                  (tee_local $5
                    (i32.load offset=4
                      (get_local $1)
                    )
                  )
                )
                (block i32
                  (i32.store
                    (get_local $6)
                    (tee_local $7
                      (i32.load
                        (get_local $14)
                      )
                    )
                  )
                  (i32.store
                    (get_local $11)
                    (get_local $7)
                  )
                  (set_local $7
                    (i32.load offset=12
                      (get_local $1)
                    )
                  )
                  (set_local $1
                    (i32.add
                      (get_local $1)
                      (i32.const 8)
                    )
                  )
                  (set_local $4
                    (i32.add
                      (get_local $4)
                      (i32.const -1)
                    )
                  )
                  (i32.sub
                    (get_local $3)
                    (get_local $5)
                  )
                )
                (if i32
                  (i32.eq
                    (get_local $4)
                    (i32.const 2)
                  )
                  (block i32
                    (i32.store
                      (get_local $6)
                      (i32.add
                        (i32.load
                          (get_local $6)
                        )
                        (get_local $3)
                      )
                    )
                    (set_local $7
                      (get_local $5)
                    )
                    (set_local $4
                      (i32.const 2)
                    )
                    (get_local $3)
                  )
                  (block i32
                    (set_local $7
                      (get_local $5)
                    )
                    (get_local $3)
                  )
                )
              )
            )
            (i32.store
              (get_local $1)
              (i32.add
                (i32.load
                  (get_local $1)
                )
                (get_local $5)
              )
            )
            (i32.store offset=4
              (get_local $1)
              (i32.sub
                (get_local $7)
                (get_local $5)
              )
            )
            (set_local $12
              (i32.sub
                (get_local $12)
                (get_local $3)
              )
            )
            (br $while-in)
          )
        )
        (i32.store offset=16
          (get_local $0)
          (i32.add
            (tee_local $1
              (i32.load
                (get_local $14)
              )
            )
            (i32.load offset=48
              (get_local $0)
            )
          )
        )
        (i32.store
          (get_local $6)
          (get_local $1)
        )
        (i32.store
          (get_local $11)
          (get_local $1)
        )
        (br $__rjto$1)
      )
      (i32.store offset=16
        (get_local $0)
        (i32.const 0)
      )
      (i32.store
        (get_local $6)
        (i32.const 0)
      )
      (i32.store
        (get_local $11)
        (i32.const 0)
      )
      (i32.store
        (get_local $0)
        (i32.or
          (i32.load
            (get_local $0)
          )
          (i32.const 32)
        )
      )
      (set_local $2
        (if i32
          (i32.eq
            (get_local $4)
            (i32.const 2)
          )
          (i32.const 0)
          (i32.sub
            (get_local $2)
            (i32.load offset=4
              (get_local $1)
            )
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $8)
    )
    (get_local $2)
  )
  (func $_cleanup (param $0 i32)
    (if
      (i32.eqz
        (i32.load offset=68
          (get_local $0)
        )
      )
      (call $___unlockfile
        (get_local $0)
      )
    )
  )
  (func $_memchr (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $5
      (i32.and
        (get_local $1)
        (i32.const 255)
      )
    )
    (block $label$break$L8
      (block $__rjti$2
        (block $__rjti$1
          (if
            (i32.and
              (tee_local $4
                (i32.ne
                  (get_local $2)
                  (i32.const 0)
                )
              )
              (i32.ne
                (i32.and
                  (get_local $0)
                  (i32.const 3)
                )
                (i32.const 0)
              )
            )
            (block
              (set_local $4
                (i32.and
                  (get_local $1)
                  (i32.const 255)
                )
              )
              (set_local $3
                (get_local $2)
              )
              (set_local $2
                (get_local $0)
              )
              (loop $while-in
                (if
                  (i32.eq
                    (i32.load8_s
                      (get_local $2)
                    )
                    (i32.shr_s
                      (i32.shl
                        (get_local $4)
                        (i32.const 24)
                      )
                      (i32.const 24)
                    )
                  )
                  (block
                    (set_local $0
                      (get_local $3)
                    )
                    (br $__rjti$2)
                  )
                )
                (br_if $while-in
                  (i32.and
                    (tee_local $0
                      (i32.ne
                        (tee_local $3
                          (i32.add
                            (get_local $3)
                            (i32.const -1)
                          )
                        )
                        (i32.const 0)
                      )
                    )
                    (i32.ne
                      (i32.and
                        (tee_local $2
                          (i32.add
                            (get_local $2)
                            (i32.const 1)
                          )
                        )
                        (i32.const 3)
                      )
                      (i32.const 0)
                    )
                  )
                )
                (br $__rjti$1)
              )
            )
            (block
              (set_local $3
                (get_local $2)
              )
              (set_local $2
                (get_local $0)
              )
              (set_local $0
                (get_local $4)
              )
            )
          )
        )
        (if
          (get_local $0)
          (block
            (set_local $0
              (get_local $3)
            )
            (br $__rjti$2)
          )
          (set_local $0
            (i32.const 0)
          )
        )
        (br $label$break$L8)
      )
      (if
        (i32.ne
          (i32.load8_s
            (get_local $2)
          )
          (i32.shr_s
            (i32.shl
              (tee_local $1
                (i32.and
                  (get_local $1)
                  (i32.const 255)
                )
              )
              (i32.const 24)
            )
            (i32.const 24)
          )
        )
        (block
          (set_local $3
            (i32.mul
              (get_local $5)
              (i32.const 16843009)
            )
          )
          (block $__rjto$0
            (block $__rjti$0
              (br_if $__rjti$0
                (i32.le_u
                  (get_local $0)
                  (i32.const 3)
                )
              )
              (loop $while-in3
                (if
                  (i32.eqz
                    (i32.and
                      (i32.xor
                        (i32.and
                          (tee_local $4
                            (i32.xor
                              (i32.load
                                (get_local $2)
                              )
                              (get_local $3)
                            )
                          )
                          (i32.const -2139062144)
                        )
                        (i32.const -2139062144)
                      )
                      (i32.add
                        (get_local $4)
                        (i32.const -16843009)
                      )
                    )
                  )
                  (block
                    (set_local $2
                      (i32.add
                        (get_local $2)
                        (i32.const 4)
                      )
                    )
                    (br_if $while-in3
                      (i32.gt_u
                        (tee_local $0
                          (i32.add
                            (get_local $0)
                            (i32.const -4)
                          )
                        )
                        (i32.const 3)
                      )
                    )
                    (br $__rjti$0)
                  )
                )
              )
              (br $__rjto$0)
            )
            (if
              (i32.eqz
                (get_local $0)
              )
              (block
                (set_local $0
                  (i32.const 0)
                )
                (br $label$break$L8)
              )
            )
          )
          (loop $while-in5
            (br_if $label$break$L8
              (i32.eq
                (i32.load8_s
                  (get_local $2)
                )
                (i32.shr_s
                  (i32.shl
                    (get_local $1)
                    (i32.const 24)
                  )
                  (i32.const 24)
                )
              )
            )
            (set_local $2
              (i32.add
                (get_local $2)
                (i32.const 1)
              )
            )
            (br_if $while-in5
              (tee_local $0
                (i32.add
                  (get_local $0)
                  (i32.const -1)
                )
              )
            )
            (set_local $0
              (i32.const 0)
            )
          )
        )
      )
    )
    (if i32
      (get_local $0)
      (get_local $2)
      (i32.const 0)
    )
  )
  (func $_vfprintf (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (set_local $4
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 224)
      )
    )
    (set_local $5
      (i32.add
        (get_local $4)
        (i32.const 136)
      )
    )
    (i64.store align=4
      (tee_local $3
        (i32.add
          (get_local $4)
          (i32.const 80)
        )
      )
      (i64.const 0)
    )
    (i64.store offset=8 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i64.store offset=16 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i64.store offset=24 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i64.store offset=32 align=4
      (get_local $3)
      (i64.const 0)
    )
    (i32.store
      (tee_local $6
        (i32.add
          (get_local $4)
          (i32.const 120)
        )
      )
      (i32.load
        (get_local $2)
      )
    )
    (if
      (i32.lt_s
        (call $_printf_core
          (i32.const 0)
          (get_local $1)
          (get_local $6)
          (tee_local $2
            (get_local $4)
          )
          (get_local $3)
        )
        (i32.const 0)
      )
      (set_local $1
        (i32.const -1)
      )
      (block
        (set_local $12
          (if i32
            (i32.gt_s
              (i32.load offset=76
                (get_local $0)
              )
              (i32.const -1)
            )
            (call $___lockfile
              (get_local $0)
            )
            (i32.const 0)
          )
        )
        (set_local $7
          (i32.load
            (get_local $0)
          )
        )
        (if
          (i32.lt_s
            (i32.load8_s offset=74
              (get_local $0)
            )
            (i32.const 1)
          )
          (i32.store
            (get_local $0)
            (i32.and
              (get_local $7)
              (i32.const -33)
            )
          )
        )
        (if
          (i32.load
            (tee_local $8
              (i32.add
                (get_local $0)
                (i32.const 48)
              )
            )
          )
          (set_local $1
            (call $_printf_core
              (get_local $0)
              (get_local $1)
              (get_local $6)
              (get_local $2)
              (get_local $3)
            )
          )
          (block
            (set_local $10
              (i32.load
                (tee_local $9
                  (i32.add
                    (get_local $0)
                    (i32.const 44)
                  )
                )
              )
            )
            (i32.store
              (get_local $9)
              (get_local $5)
            )
            (i32.store
              (tee_local $13
                (i32.add
                  (get_local $0)
                  (i32.const 28)
                )
              )
              (get_local $5)
            )
            (i32.store
              (tee_local $11
                (i32.add
                  (get_local $0)
                  (i32.const 20)
                )
              )
              (get_local $5)
            )
            (i32.store
              (get_local $8)
              (i32.const 80)
            )
            (i32.store
              (tee_local $14
                (i32.add
                  (get_local $0)
                  (i32.const 16)
                )
              )
              (i32.add
                (get_local $5)
                (i32.const 80)
              )
            )
            (set_local $1
              (call $_printf_core
                (get_local $0)
                (get_local $1)
                (get_local $6)
                (get_local $2)
                (get_local $3)
              )
            )
            (if
              (get_local $10)
              (block
                (drop
                  (call_indirect $FUNCSIG$iiii
                    (get_local $0)
                    (i32.const 0)
                    (i32.const 0)
                    (i32.add
                      (i32.and
                        (i32.load offset=36
                          (get_local $0)
                        )
                        (i32.const 3)
                      )
                      (i32.const 2)
                    )
                  )
                )
                (if
                  (i32.eqz
                    (i32.load
                      (get_local $11)
                    )
                  )
                  (set_local $1
                    (i32.const -1)
                  )
                )
                (i32.store
                  (get_local $9)
                  (get_local $10)
                )
                (i32.store
                  (get_local $8)
                  (i32.const 0)
                )
                (i32.store
                  (get_local $14)
                  (i32.const 0)
                )
                (i32.store
                  (get_local $13)
                  (i32.const 0)
                )
                (i32.store
                  (get_local $11)
                  (i32.const 0)
                )
              )
            )
          )
        )
        (i32.store
          (get_local $0)
          (i32.or
            (tee_local $2
              (i32.load
                (get_local $0)
              )
            )
            (i32.and
              (get_local $7)
              (i32.const 32)
            )
          )
        )
        (if
          (get_local $12)
          (call $___unlockfile
            (get_local $0)
          )
        )
        (if
          (i32.and
            (get_local $2)
            (i32.const 32)
          )
          (set_local $1
            (i32.const -1)
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $4)
    )
    (get_local $1)
  )
  (func $_printf_core (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 f64)
    (local $16 i32)
    (local $17 i32)
    (local $18 i32)
    (local $19 i64)
    (local $20 i32)
    (local $21 i32)
    (local $22 i32)
    (local $23 f64)
    (local $24 i32)
    (local $25 i32)
    (local $26 i32)
    (local $27 i32)
    (local $28 i32)
    (local $29 i32)
    (local $30 i32)
    (local $31 i32)
    (local $32 i32)
    (local $33 i32)
    (local $34 i32)
    (local $35 i32)
    (local $36 i32)
    (local $37 i32)
    (local $38 i32)
    (local $39 i32)
    (local $40 i32)
    (local $41 i32)
    (local $42 i32)
    (local $43 i32)
    (local $44 i32)
    (local $45 i32)
    (local $46 i32)
    (local $47 i32)
    (local $48 i32)
    (local $49 i32)
    (local $50 i32)
    (local $51 i32)
    (local $52 i64)
    (local $53 i32)
    (set_local $26
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 624)
      )
    )
    (set_local $22
      (i32.add
        (get_local $26)
        (i32.const 16)
      )
    )
    (set_local $17
      (get_local $26)
    )
    (set_local $39
      (i32.add
        (get_local $26)
        (i32.const 528)
      )
    )
    (set_local $33
      (i32.ne
        (get_local $0)
        (i32.const 0)
      )
    )
    (set_local $41
      (tee_local $24
        (i32.add
          (tee_local $18
            (i32.add
              (get_local $26)
              (i32.const 536)
            )
          )
          (i32.const 40)
        )
      )
    )
    (set_local $42
      (i32.add
        (get_local $18)
        (i32.const 39)
      )
    )
    (set_local $45
      (i32.add
        (tee_local $40
          (i32.add
            (get_local $26)
            (i32.const 8)
          )
        )
        (i32.const 4)
      )
    )
    (set_local $46
      (i32.sub
        (i32.const 0)
        (tee_local $30
          (tee_local $21
            (i32.add
              (get_local $26)
              (i32.const 588)
            )
          )
        )
      )
    )
    (set_local $36
      (i32.add
        (tee_local $18
          (i32.add
            (get_local $26)
            (i32.const 576)
          )
        )
        (i32.const 12)
      )
    )
    (set_local $43
      (i32.add
        (get_local $18)
        (i32.const 11)
      )
    )
    (set_local $47
      (i32.sub
        (tee_local $31
          (get_local $36)
        )
        (get_local $30)
      )
    )
    (set_local $48
      (i32.sub
        (i32.const -2)
        (get_local $30)
      )
    )
    (set_local $49
      (i32.add
        (get_local $31)
        (i32.const 2)
      )
    )
    (set_local $51
      (i32.add
        (tee_local $50
          (i32.add
            (get_local $26)
            (i32.const 24)
          )
        )
        (i32.const 288)
      )
    )
    (set_local $44
      (tee_local $34
        (i32.add
          (get_local $21)
          (i32.const 9)
        )
      )
    )
    (set_local $37
      (i32.add
        (get_local $21)
        (i32.const 8)
      )
    )
    (set_local $16
      (i32.const 0)
    )
    (set_local $10
      (i32.const 0)
    )
    (set_local $18
      (i32.const 0)
    )
    (block $label$break$L345
      (block $__rjti$9
        (loop $label$continue$L1
          (block $label$break$L1
            (if
              (i32.gt_s
                (get_local $16)
                (i32.const -1)
              )
              (set_local $16
                (if i32
                  (i32.gt_s
                    (get_local $10)
                    (i32.sub
                      (i32.const 2147483647)
                      (get_local $16)
                    )
                  )
                  (block i32
                    (i32.store
                      (call $___errno_location)
                      (i32.const 75)
                    )
                    (i32.const -1)
                  )
                  (i32.add
                    (get_local $10)
                    (get_local $16)
                  )
                )
              )
            )
            (br_if $__rjti$9
              (i32.eqz
                (i32.shr_s
                  (i32.shl
                    (tee_local $5
                      (i32.load8_s
                        (get_local $1)
                      )
                    )
                    (i32.const 24)
                  )
                  (i32.const 24)
                )
              )
            )
            (set_local $11
              (get_local $1)
            )
            (block $label$break$L12
              (block $__rjti$1
                (loop $label$continue$L9
                  (block $label$break$L9
                    (block $switch-default
                      (block $switch-case0
                        (block $switch-case
                          (br_table $switch-case0 $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-case $switch-default
                            (i32.sub
                              (i32.shr_s
                                (i32.shl
                                  (get_local $5)
                                  (i32.const 24)
                                )
                                (i32.const 24)
                              )
                              (i32.const 0)
                            )
                          )
                        )
                        (set_local $5
                          (get_local $11)
                        )
                        (br $__rjti$1)
                      )
                      (set_local $5
                        (get_local $11)
                      )
                      (br $label$break$L9)
                    )
                    (set_local $5
                      (i32.load8_s
                        (tee_local $11
                          (i32.add
                            (get_local $11)
                            (i32.const 1)
                          )
                        )
                      )
                    )
                    (br $label$continue$L9)
                  )
                )
                (br $label$break$L12)
              )
              (loop $while-in
                (br_if $label$break$L12
                  (i32.ne
                    (i32.load8_s offset=1
                      (get_local $5)
                    )
                    (i32.const 37)
                  )
                )
                (set_local $11
                  (i32.add
                    (get_local $11)
                    (i32.const 1)
                  )
                )
                (br_if $while-in
                  (i32.eq
                    (i32.load8_s
                      (tee_local $5
                        (i32.add
                          (get_local $5)
                          (i32.const 2)
                        )
                      )
                    )
                    (i32.const 37)
                  )
                )
              )
            )
            (set_local $10
              (i32.sub
                (get_local $11)
                (get_local $1)
              )
            )
            (if
              (get_local $33)
              (if
                (i32.eqz
                  (i32.and
                    (i32.load
                      (get_local $0)
                    )
                    (i32.const 32)
                  )
                )
                (drop
                  (call $___fwritex
                    (get_local $1)
                    (get_local $10)
                    (get_local $0)
                  )
                )
              )
            )
            (if
              (get_local $10)
              (block
                (set_local $1
                  (get_local $5)
                )
                (br $label$continue$L1)
              )
            )
            (set_local $10
              (if i32
                (i32.lt_u
                  (tee_local $9
                    (i32.add
                      (i32.shr_s
                        (i32.shl
                          (tee_local $10
                            (i32.load8_s
                              (tee_local $11
                                (i32.add
                                  (get_local $5)
                                  (i32.const 1)
                                )
                              )
                            )
                          )
                          (i32.const 24)
                        )
                        (i32.const 24)
                      )
                      (i32.const -48)
                    )
                  )
                  (i32.const 10)
                )
                (block i32
                  (set_local $10
                    (i32.add
                      (get_local $5)
                      (i32.const 3)
                    )
                  )
                  (if
                    (tee_local $12
                      (i32.eq
                        (i32.load8_s offset=2
                          (get_local $5)
                        )
                        (i32.const 36)
                      )
                    )
                    (set_local $11
                      (get_local $10)
                    )
                  )
                  (if
                    (get_local $12)
                    (set_local $18
                      (i32.const 1)
                    )
                  )
                  (set_local $5
                    (i32.load8_s
                      (get_local $11)
                    )
                  )
                  (if
                    (i32.eqz
                      (get_local $12)
                    )
                    (set_local $9
                      (i32.const -1)
                    )
                  )
                  (get_local $18)
                )
                (block i32
                  (set_local $5
                    (get_local $10)
                  )
                  (set_local $9
                    (i32.const -1)
                  )
                  (get_local $18)
                )
              )
            )
            (block $label$break$L25
              (if
                (i32.lt_u
                  (tee_local $12
                    (i32.add
                      (i32.shr_s
                        (i32.shl
                          (get_local $5)
                          (i32.const 24)
                        )
                        (i32.const 24)
                      )
                      (i32.const -32)
                    )
                  )
                  (i32.const 32)
                )
                (block
                  (set_local $18
                    (i32.const 0)
                  )
                  (loop $while-in4
                    (br_if $label$break$L25
                      (i32.eqz
                        (i32.and
                          (i32.shl
                            (i32.const 1)
                            (get_local $12)
                          )
                          (i32.const 75913)
                        )
                      )
                    )
                    (set_local $18
                      (i32.or
                        (i32.shl
                          (i32.const 1)
                          (i32.add
                            (i32.shr_s
                              (i32.shl
                                (get_local $5)
                                (i32.const 24)
                              )
                              (i32.const 24)
                            )
                            (i32.const -32)
                          )
                        )
                        (get_local $18)
                      )
                    )
                    (br_if $while-in4
                      (i32.lt_u
                        (tee_local $12
                          (i32.add
                            (i32.shr_s
                              (i32.shl
                                (tee_local $5
                                  (i32.load8_s
                                    (tee_local $11
                                      (i32.add
                                        (get_local $11)
                                        (i32.const 1)
                                      )
                                    )
                                  )
                                )
                                (i32.const 24)
                              )
                              (i32.const 24)
                            )
                            (i32.const -32)
                          )
                        )
                        (i32.const 32)
                      )
                    )
                  )
                )
                (set_local $18
                  (i32.const 0)
                )
              )
            )
            (block $do-once5
              (if
                (i32.eq
                  (i32.shr_s
                    (i32.shl
                      (get_local $5)
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                  (i32.const 42)
                )
                (block
                  (set_local $11
                    (block $__rjto$0 i32
                      (block $__rjti$0
                        (br_if $__rjti$0
                          (i32.ge_u
                            (tee_local $12
                              (i32.add
                                (i32.shr_s
                                  (i32.shl
                                    (tee_local $5
                                      (i32.load8_s
                                        (tee_local $7
                                          (i32.add
                                            (get_local $11)
                                            (i32.const 1)
                                          )
                                        )
                                      )
                                    )
                                    (i32.const 24)
                                  )
                                  (i32.const 24)
                                )
                                (i32.const -48)
                              )
                            )
                            (i32.const 10)
                          )
                        )
                        (br_if $__rjti$0
                          (i32.ne
                            (i32.load8_s offset=2
                              (get_local $11)
                            )
                            (i32.const 36)
                          )
                        )
                        (i32.store
                          (i32.add
                            (get_local $4)
                            (i32.shl
                              (get_local $12)
                              (i32.const 2)
                            )
                          )
                          (i32.const 10)
                        )
                        (set_local $8
                          (i32.const 1)
                        )
                        (set_local $10
                          (i32.wrap/i64
                            (i64.load
                              (i32.add
                                (get_local $3)
                                (i32.shl
                                  (i32.add
                                    (i32.load8_s
                                      (get_local $7)
                                    )
                                    (i32.const -48)
                                  )
                                  (i32.const 3)
                                )
                              )
                            )
                          )
                        )
                        (br $__rjto$0
                          (i32.add
                            (get_local $11)
                            (i32.const 3)
                          )
                        )
                      )
                      (if
                        (get_local $10)
                        (block
                          (set_local $16
                            (i32.const -1)
                          )
                          (br $label$break$L1)
                        )
                      )
                      (if
                        (i32.eqz
                          (get_local $33)
                        )
                        (block
                          (set_local $12
                            (get_local $18)
                          )
                          (set_local $18
                            (i32.const 0)
                          )
                          (set_local $11
                            (get_local $7)
                          )
                          (set_local $10
                            (i32.const 0)
                          )
                          (br $do-once5)
                        )
                      )
                      (set_local $10
                        (i32.load
                          (tee_local $11
                            (i32.and
                              (i32.add
                                (i32.load
                                  (get_local $2)
                                )
                                (i32.const 3)
                              )
                              (i32.const -4)
                            )
                          )
                        )
                      )
                      (i32.store
                        (get_local $2)
                        (i32.add
                          (get_local $11)
                          (i32.const 4)
                        )
                      )
                      (set_local $8
                        (i32.const 0)
                      )
                      (get_local $7)
                    )
                  )
                  (set_local $12
                    (i32.or
                      (get_local $18)
                      (i32.const 8192)
                    )
                  )
                  (set_local $7
                    (i32.sub
                      (i32.const 0)
                      (get_local $10)
                    )
                  )
                  (set_local $5
                    (i32.load8_s
                      (get_local $11)
                    )
                  )
                  (if
                    (i32.eqz
                      (tee_local $6
                        (i32.lt_s
                          (get_local $10)
                          (i32.const 0)
                        )
                      )
                    )
                    (set_local $12
                      (get_local $18)
                    )
                  )
                  (set_local $18
                    (get_local $8)
                  )
                  (if
                    (get_local $6)
                    (set_local $10
                      (get_local $7)
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (tee_local $12
                      (i32.add
                        (i32.shr_s
                          (i32.shl
                            (get_local $5)
                            (i32.const 24)
                          )
                          (i32.const 24)
                        )
                        (i32.const -48)
                      )
                    )
                    (i32.const 10)
                  )
                  (block
                    (set_local $7
                      (i32.const 0)
                    )
                    (set_local $5
                      (get_local $12)
                    )
                    (loop $while-in8
                      (set_local $7
                        (i32.add
                          (i32.mul
                            (get_local $7)
                            (i32.const 10)
                          )
                          (get_local $5)
                        )
                      )
                      (br_if $while-in8
                        (i32.lt_u
                          (tee_local $5
                            (i32.add
                              (i32.shr_s
                                (i32.shl
                                  (tee_local $12
                                    (i32.load8_s
                                      (tee_local $11
                                        (i32.add
                                          (get_local $11)
                                          (i32.const 1)
                                        )
                                      )
                                    )
                                  )
                                  (i32.const 24)
                                )
                                (i32.const 24)
                              )
                              (i32.const -48)
                            )
                          )
                          (i32.const 10)
                        )
                      )
                    )
                    (if
                      (i32.lt_s
                        (get_local $7)
                        (i32.const 0)
                      )
                      (block
                        (set_local $16
                          (i32.const -1)
                        )
                        (br $label$break$L1)
                      )
                      (block
                        (set_local $5
                          (get_local $12)
                        )
                        (set_local $12
                          (get_local $18)
                        )
                        (set_local $18
                          (get_local $10)
                        )
                        (set_local $10
                          (get_local $7)
                        )
                      )
                    )
                  )
                  (block
                    (set_local $12
                      (get_local $18)
                    )
                    (set_local $18
                      (get_local $10)
                    )
                    (set_local $10
                      (i32.const 0)
                    )
                  )
                )
              )
            )
            (block $label$break$L45
              (if
                (i32.eq
                  (i32.shr_s
                    (i32.shl
                      (get_local $5)
                      (i32.const 24)
                    )
                    (i32.const 24)
                  )
                  (i32.const 46)
                )
                (block
                  (if
                    (i32.ne
                      (i32.shr_s
                        (i32.shl
                          (tee_local $5
                            (i32.load8_s
                              (tee_local $7
                                (i32.add
                                  (get_local $11)
                                  (i32.const 1)
                                )
                              )
                            )
                          )
                          (i32.const 24)
                        )
                        (i32.const 24)
                      )
                      (i32.const 42)
                    )
                    (block
                      (if
                        (i32.lt_u
                          (tee_local $5
                            (i32.add
                              (i32.shr_s
                                (i32.shl
                                  (get_local $5)
                                  (i32.const 24)
                                )
                                (i32.const 24)
                              )
                              (i32.const -48)
                            )
                          )
                          (i32.const 10)
                        )
                        (block
                          (set_local $11
                            (get_local $7)
                          )
                          (set_local $7
                            (i32.const 0)
                          )
                        )
                        (block
                          (set_local $5
                            (i32.const 0)
                          )
                          (set_local $11
                            (get_local $7)
                          )
                          (br $label$break$L45)
                        )
                      )
                      (loop $while-in11
                        (set_local $5
                          (i32.add
                            (i32.mul
                              (get_local $7)
                              (i32.const 10)
                            )
                            (get_local $5)
                          )
                        )
                        (br_if $label$break$L45
                          (i32.ge_u
                            (tee_local $8
                              (i32.add
                                (i32.load8_s
                                  (tee_local $11
                                    (i32.add
                                      (get_local $11)
                                      (i32.const 1)
                                    )
                                  )
                                )
                                (i32.const -48)
                              )
                            )
                            (i32.const 10)
                          )
                        )
                        (set_local $7
                          (get_local $5)
                        )
                        (set_local $5
                          (get_local $8)
                        )
                        (br $while-in11)
                      )
                    )
                  )
                  (if
                    (i32.lt_u
                      (tee_local $5
                        (i32.add
                          (i32.load8_s
                            (tee_local $7
                              (i32.add
                                (get_local $11)
                                (i32.const 2)
                              )
                            )
                          )
                          (i32.const -48)
                        )
                      )
                      (i32.const 10)
                    )
                    (if
                      (i32.eq
                        (i32.load8_s offset=3
                          (get_local $11)
                        )
                        (i32.const 36)
                      )
                      (block
                        (i32.store
                          (i32.add
                            (get_local $4)
                            (i32.shl
                              (get_local $5)
                              (i32.const 2)
                            )
                          )
                          (i32.const 10)
                        )
                        (set_local $5
                          (i32.wrap/i64
                            (i64.load
                              (i32.add
                                (get_local $3)
                                (i32.shl
                                  (i32.add
                                    (i32.load8_s
                                      (get_local $7)
                                    )
                                    (i32.const -48)
                                  )
                                  (i32.const 3)
                                )
                              )
                            )
                          )
                        )
                        (set_local $11
                          (i32.add
                            (get_local $11)
                            (i32.const 4)
                          )
                        )
                        (br $label$break$L45)
                      )
                    )
                  )
                  (if
                    (get_local $18)
                    (block
                      (set_local $16
                        (i32.const -1)
                      )
                      (br $label$break$L1)
                    )
                  )
                  (set_local $11
                    (if i32
                      (get_local $33)
                      (block i32
                        (set_local $5
                          (i32.load
                            (tee_local $11
                              (i32.and
                                (i32.add
                                  (i32.load
                                    (get_local $2)
                                  )
                                  (i32.const 3)
                                )
                                (i32.const -4)
                              )
                            )
                          )
                        )
                        (i32.store
                          (get_local $2)
                          (i32.add
                            (get_local $11)
                            (i32.const 4)
                          )
                        )
                        (get_local $7)
                      )
                      (block i32
                        (set_local $5
                          (i32.const 0)
                        )
                        (get_local $7)
                      )
                    )
                  )
                )
                (set_local $5
                  (i32.const -1)
                )
              )
            )
            (set_local $7
              (get_local $11)
            )
            (set_local $8
              (i32.const 0)
            )
            (loop $while-in13
              (if
                (i32.gt_u
                  (tee_local $6
                    (i32.add
                      (i32.load8_s
                        (get_local $7)
                      )
                      (i32.const -65)
                    )
                  )
                  (i32.const 57)
                )
                (block
                  (set_local $16
                    (i32.const -1)
                  )
                  (br $label$break$L1)
                )
              )
              (set_local $11
                (i32.add
                  (get_local $7)
                  (i32.const 1)
                )
              )
              (if
                (i32.lt_u
                  (i32.add
                    (tee_local $6
                      (i32.and
                        (tee_local $13
                          (i32.load8_s
                            (i32.add
                              (i32.add
                                (i32.mul
                                  (get_local $8)
                                  (i32.const 58)
                                )
                                (i32.const 1159)
                              )
                              (get_local $6)
                            )
                          )
                        )
                        (i32.const 255)
                      )
                    )
                    (i32.const -1)
                  )
                  (i32.const 8)
                )
                (block
                  (set_local $7
                    (get_local $11)
                  )
                  (set_local $8
                    (get_local $6)
                  )
                  (br $while-in13)
                )
              )
            )
            (if
              (i32.eqz
                (i32.shr_s
                  (i32.shl
                    (get_local $13)
                    (i32.const 24)
                  )
                  (i32.const 24)
                )
              )
              (block
                (set_local $16
                  (i32.const -1)
                )
                (br $label$break$L1)
              )
            )
            (set_local $14
              (i32.gt_s
                (get_local $9)
                (i32.const -1)
              )
            )
            (block $__rjto$2
              (block $__rjti$2
                (if
                  (i32.eq
                    (i32.shr_s
                      (i32.shl
                        (get_local $13)
                        (i32.const 24)
                      )
                      (i32.const 24)
                    )
                    (i32.const 19)
                  )
                  (if
                    (get_local $14)
                    (block
                      (set_local $16
                        (i32.const -1)
                      )
                      (br $label$break$L1)
                    )
                    (br $__rjti$2)
                  )
                  (block
                    (if
                      (get_local $14)
                      (block
                        (i32.store
                          (i32.add
                            (get_local $4)
                            (i32.shl
                              (get_local $9)
                              (i32.const 2)
                            )
                          )
                          (get_local $6)
                        )
                        (i64.store
                          (get_local $17)
                          (i64.load
                            (i32.add
                              (get_local $3)
                              (i32.shl
                                (get_local $9)
                                (i32.const 3)
                              )
                            )
                          )
                        )
                        (br $__rjti$2)
                      )
                    )
                    (if
                      (i32.eqz
                        (get_local $33)
                      )
                      (block
                        (set_local $16
                          (i32.const 0)
                        )
                        (br $label$break$L1)
                      )
                    )
                    (call $_pop_arg_374
                      (get_local $17)
                      (get_local $6)
                      (get_local $2)
                    )
                  )
                )
                (br $__rjto$2)
              )
              (if
                (i32.eqz
                  (get_local $33)
                )
                (block
                  (set_local $10
                    (i32.const 0)
                  )
                  (set_local $1
                    (get_local $11)
                  )
                  (br $label$continue$L1)
                )
              )
            )
            (set_local $9
              (i32.and
                (tee_local $7
                  (i32.load8_s
                    (get_local $7)
                  )
                )
                (i32.const -33)
              )
            )
            (if
              (i32.eqz
                (i32.and
                  (i32.ne
                    (get_local $8)
                    (i32.const 0)
                  )
                  (i32.eq
                    (i32.and
                      (get_local $7)
                      (i32.const 15)
                    )
                    (i32.const 3)
                  )
                )
              )
              (set_local $9
                (get_local $7)
              )
            )
            (set_local $7
              (i32.and
                (get_local $12)
                (i32.const -65537)
              )
            )
            (if
              (i32.and
                (get_local $12)
                (i32.const 8192)
              )
              (set_local $12
                (get_local $7)
              )
            )
            (block $__rjto$8
              (block $__rjti$8
                (block $__rjti$7
                  (block $__rjti$6
                    (block $__rjti$5
                      (block $__rjti$4
                        (block $__rjti$3
                          (block $switch-default120
                            (block $switch-case42
                              (block $switch-case41
                                (block $switch-case40
                                  (block $switch-case39
                                    (block $switch-case38
                                      (block $switch-case37
                                        (block $switch-case36
                                          (block $switch-case34
                                            (block $switch-case33
                                              (block $switch-case29
                                                (block $switch-case28
                                                  (block $switch-case27
                                                    (br_table $switch-case42 $switch-default120 $switch-case40 $switch-default120 $switch-case42 $switch-case42 $switch-case42 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-case41 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-case29 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-default120 $switch-case42 $switch-default120 $switch-case37 $switch-case34 $switch-case42 $switch-case42 $switch-case42 $switch-default120 $switch-case34 $switch-default120 $switch-default120 $switch-default120 $switch-case38 $switch-case27 $switch-case33 $switch-case28 $switch-default120 $switch-default120 $switch-case39 $switch-default120 $switch-case36 $switch-default120 $switch-default120 $switch-case29 $switch-default120
                                                      (i32.sub
                                                        (get_local $9)
                                                        (i32.const 65)
                                                      )
                                                    )
                                                  )
                                                  (block $switch-default26
                                                    (block $switch-case25
                                                      (block $switch-case24
                                                        (block $switch-case23
                                                          (block $switch-case22
                                                            (block $switch-case21
                                                              (block $switch-case20
                                                                (block $switch-case19
                                                                  (br_table $switch-case19 $switch-case20 $switch-case21 $switch-case22 $switch-case23 $switch-default26 $switch-case24 $switch-case25 $switch-default26
                                                                    (i32.sub
                                                                      (i32.shr_s
                                                                        (i32.shl
                                                                          (i32.and
                                                                            (get_local $8)
                                                                            (i32.const 255)
                                                                          )
                                                                          (i32.const 24)
                                                                        )
                                                                        (i32.const 24)
                                                                      )
                                                                      (i32.const 0)
                                                                    )
                                                                  )
                                                                )
                                                                (i32.store
                                                                  (i32.load
                                                                    (get_local $17)
                                                                  )
                                                                  (get_local $16)
                                                                )
                                                                (set_local $10
                                                                  (i32.const 0)
                                                                )
                                                                (set_local $1
                                                                  (get_local $11)
                                                                )
                                                                (br $label$continue$L1)
                                                              )
                                                              (i32.store
                                                                (i32.load
                                                                  (get_local $17)
                                                                )
                                                                (get_local $16)
                                                              )
                                                              (set_local $10
                                                                (i32.const 0)
                                                              )
                                                              (set_local $1
                                                                (get_local $11)
                                                              )
                                                              (br $label$continue$L1)
                                                            )
                                                            (i64.store
                                                              (i32.load
                                                                (get_local $17)
                                                              )
                                                              (i64.extend_s/i32
                                                                (get_local $16)
                                                              )
                                                            )
                                                            (set_local $10
                                                              (i32.const 0)
                                                            )
                                                            (set_local $1
                                                              (get_local $11)
                                                            )
                                                            (br $label$continue$L1)
                                                          )
                                                          (i32.store16
                                                            (i32.load
                                                              (get_local $17)
                                                            )
                                                            (get_local $16)
                                                          )
                                                          (set_local $10
                                                            (i32.const 0)
                                                          )
                                                          (set_local $1
                                                            (get_local $11)
                                                          )
                                                          (br $label$continue$L1)
                                                        )
                                                        (i32.store8
                                                          (i32.load
                                                            (get_local $17)
                                                          )
                                                          (get_local $16)
                                                        )
                                                        (set_local $10
                                                          (i32.const 0)
                                                        )
                                                        (set_local $1
                                                          (get_local $11)
                                                        )
                                                        (br $label$continue$L1)
                                                      )
                                                      (i32.store
                                                        (i32.load
                                                          (get_local $17)
                                                        )
                                                        (get_local $16)
                                                      )
                                                      (set_local $10
                                                        (i32.const 0)
                                                      )
                                                      (set_local $1
                                                        (get_local $11)
                                                      )
                                                      (br $label$continue$L1)
                                                    )
                                                    (i64.store
                                                      (i32.load
                                                        (get_local $17)
                                                      )
                                                      (i64.extend_s/i32
                                                        (get_local $16)
                                                      )
                                                    )
                                                    (set_local $10
                                                      (i32.const 0)
                                                    )
                                                    (set_local $1
                                                      (get_local $11)
                                                    )
                                                    (br $label$continue$L1)
                                                  )
                                                  (set_local $10
                                                    (i32.const 0)
                                                  )
                                                  (set_local $1
                                                    (get_local $11)
                                                  )
                                                  (br $label$continue$L1)
                                                )
                                                (set_local $12
                                                  (i32.or
                                                    (get_local $12)
                                                    (i32.const 8)
                                                  )
                                                )
                                                (if
                                                  (i32.le_u
                                                    (get_local $5)
                                                    (i32.const 8)
                                                  )
                                                  (set_local $5
                                                    (i32.const 8)
                                                  )
                                                )
                                                (set_local $9
                                                  (i32.const 120)
                                                )
                                                (br $__rjti$3)
                                              )
                                              (br $__rjti$3)
                                            )
                                            (if
                                              (i64.eq
                                                (tee_local $19
                                                  (i64.load
                                                    (get_local $17)
                                                  )
                                                )
                                                (i64.const 0)
                                              )
                                              (set_local $7
                                                (get_local $24)
                                              )
                                              (block
                                                (set_local $1
                                                  (get_local $24)
                                                )
                                                (loop $while-in32
                                                  (i64.store8
                                                    (tee_local $1
                                                      (i32.add
                                                        (get_local $1)
                                                        (i32.const -1)
                                                      )
                                                    )
                                                    (i64.or
                                                      (i64.and
                                                        (get_local $19)
                                                        (i64.const 7)
                                                      )
                                                      (i64.const 48)
                                                    )
                                                  )
                                                  (br_if $while-in32
                                                    (i64.ne
                                                      (tee_local $19
                                                        (i64.shr_u
                                                          (get_local $19)
                                                          (i64.const 3)
                                                        )
                                                      )
                                                      (i64.const 0)
                                                    )
                                                  )
                                                  (set_local $7
                                                    (get_local $1)
                                                  )
                                                )
                                              )
                                            )
                                            (if
                                              (i32.and
                                                (get_local $12)
                                                (i32.const 8)
                                              )
                                              (block
                                                (set_local $8
                                                  (i32.add
                                                    (tee_local $1
                                                      (i32.sub
                                                        (get_local $41)
                                                        (get_local $7)
                                                      )
                                                    )
                                                    (i32.const 1)
                                                  )
                                                )
                                                (if
                                                  (i32.le_s
                                                    (get_local $5)
                                                    (get_local $1)
                                                  )
                                                  (set_local $5
                                                    (get_local $8)
                                                  )
                                                )
                                                (set_local $6
                                                  (i32.const 0)
                                                )
                                                (set_local $8
                                                  (i32.const 1639)
                                                )
                                                (br $__rjti$8)
                                              )
                                              (block
                                                (set_local $6
                                                  (i32.const 0)
                                                )
                                                (set_local $8
                                                  (i32.const 1639)
                                                )
                                                (br $__rjti$8)
                                              )
                                            )
                                          )
                                          (if
                                            (i64.lt_s
                                              (tee_local $19
                                                (i64.load
                                                  (get_local $17)
                                                )
                                              )
                                              (i64.const 0)
                                            )
                                            (block
                                              (i64.store
                                                (get_local $17)
                                                (tee_local $19
                                                  (i64.sub
                                                    (i64.const 0)
                                                    (get_local $19)
                                                  )
                                                )
                                              )
                                              (set_local $6
                                                (i32.const 1)
                                              )
                                              (set_local $8
                                                (i32.const 1639)
                                              )
                                              (br $__rjti$4)
                                            )
                                          )
                                          (if
                                            (i32.and
                                              (get_local $12)
                                              (i32.const 2048)
                                            )
                                            (block
                                              (set_local $6
                                                (i32.const 1)
                                              )
                                              (set_local $8
                                                (i32.const 1640)
                                              )
                                              (br $__rjti$4)
                                            )
                                            (block
                                              (set_local $6
                                                (tee_local $1
                                                  (i32.and
                                                    (get_local $12)
                                                    (i32.const 1)
                                                  )
                                                )
                                              )
                                              (set_local $8
                                                (if i32
                                                  (get_local $1)
                                                  (i32.const 1641)
                                                  (i32.const 1639)
                                                )
                                              )
                                              (br $__rjti$4)
                                            )
                                          )
                                        )
                                        (set_local $19
                                          (i64.load
                                            (get_local $17)
                                          )
                                        )
                                        (set_local $6
                                          (i32.const 0)
                                        )
                                        (set_local $8
                                          (i32.const 1639)
                                        )
                                        (br $__rjti$4)
                                      )
                                      (i64.store8
                                        (get_local $42)
                                        (i64.load
                                          (get_local $17)
                                        )
                                      )
                                      (set_local $1
                                        (get_local $42)
                                      )
                                      (set_local $12
                                        (get_local $7)
                                      )
                                      (set_local $7
                                        (i32.const 1)
                                      )
                                      (set_local $6
                                        (i32.const 0)
                                      )
                                      (set_local $8
                                        (i32.const 1639)
                                      )
                                      (set_local $5
                                        (get_local $24)
                                      )
                                      (br $__rjto$8)
                                    )
                                    (set_local $1
                                      (call $_strerror
                                        (i32.load
                                          (call $___errno_location)
                                        )
                                      )
                                    )
                                    (br $__rjti$5)
                                  )
                                  (if
                                    (i32.eqz
                                      (tee_local $1
                                        (i32.load
                                          (get_local $17)
                                        )
                                      )
                                    )
                                    (set_local $1
                                      (i32.const 1649)
                                    )
                                  )
                                  (br $__rjti$5)
                                )
                                (i64.store32
                                  (get_local $40)
                                  (i64.load
                                    (get_local $17)
                                  )
                                )
                                (i32.store
                                  (get_local $45)
                                  (i32.const 0)
                                )
                                (i32.store
                                  (get_local $17)
                                  (get_local $40)
                                )
                                (set_local $7
                                  (get_local $40)
                                )
                                (set_local $6
                                  (i32.const -1)
                                )
                                (br $__rjti$6)
                              )
                              (set_local $7
                                (i32.load
                                  (get_local $17)
                                )
                              )
                              (if
                                (get_local $5)
                                (block
                                  (set_local $6
                                    (get_local $5)
                                  )
                                  (br $__rjti$6)
                                )
                                (block
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $10)
                                    (i32.const 0)
                                    (get_local $12)
                                  )
                                  (set_local $1
                                    (i32.const 0)
                                  )
                                  (br $__rjti$7)
                                )
                              )
                            )
                            (set_local $15
                              (f64.load
                                (get_local $17)
                              )
                            )
                            (i32.store
                              (get_local $22)
                              (i32.const 0)
                            )
                            (set_local $29
                              (if i32
                                (i64.lt_s
                                  (i64.reinterpret/f64
                                    (get_local $15)
                                  )
                                  (i64.const 0)
                                )
                                (block i32
                                  (set_local $27
                                    (i32.const 1)
                                  )
                                  (set_local $15
                                    (f64.neg
                                      (get_local $15)
                                    )
                                  )
                                  (i32.const 1656)
                                )
                                (block i32
                                  (set_local $1
                                    (i32.and
                                      (get_local $12)
                                      (i32.const 1)
                                    )
                                  )
                                  (if i32
                                    (i32.and
                                      (get_local $12)
                                      (i32.const 2048)
                                    )
                                    (block i32
                                      (set_local $27
                                        (i32.const 1)
                                      )
                                      (i32.const 1659)
                                    )
                                    (block i32
                                      (set_local $27
                                        (get_local $1)
                                      )
                                      (if i32
                                        (get_local $1)
                                        (i32.const 1662)
                                        (i32.const 1657)
                                      )
                                    )
                                  )
                                )
                              )
                            )
                            (block $do-once49
                              (if
                                (i64.lt_u
                                  (i64.and
                                    (i64.reinterpret/f64
                                      (get_local $15)
                                    )
                                    (i64.const 9218868437227405312)
                                  )
                                  (i64.const 9218868437227405312)
                                )
                                (block
                                  (if
                                    (tee_local $1
                                      (f64.ne
                                        (tee_local $15
                                          (f64.mul
                                            (call $_frexpl
                                              (get_local $15)
                                              (get_local $22)
                                            )
                                            (f64.const 2)
                                          )
                                        )
                                        (f64.const 0)
                                      )
                                    )
                                    (i32.store
                                      (get_local $22)
                                      (i32.add
                                        (i32.load
                                          (get_local $22)
                                        )
                                        (i32.const -1)
                                      )
                                    )
                                  )
                                  (if
                                    (i32.eq
                                      (tee_local $25
                                        (i32.or
                                          (get_local $9)
                                          (i32.const 32)
                                        )
                                      )
                                      (i32.const 97)
                                    )
                                    (block
                                      (set_local $1
                                        (i32.add
                                          (get_local $29)
                                          (i32.const 9)
                                        )
                                      )
                                      (if
                                        (tee_local $6
                                          (i32.and
                                            (get_local $9)
                                            (i32.const 32)
                                          )
                                        )
                                        (set_local $29
                                          (get_local $1)
                                        )
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.or
                                            (i32.gt_u
                                              (get_local $5)
                                              (i32.const 11)
                                            )
                                            (i32.eqz
                                              (tee_local $1
                                                (i32.sub
                                                  (i32.const 12)
                                                  (get_local $5)
                                                )
                                              )
                                            )
                                          )
                                        )
                                        (block
                                          (set_local $23
                                            (f64.const 8)
                                          )
                                          (loop $while-in54
                                            (set_local $23
                                              (f64.mul
                                                (get_local $23)
                                                (f64.const 16)
                                              )
                                            )
                                            (br_if $while-in54
                                              (tee_local $1
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const -1)
                                                )
                                              )
                                            )
                                          )
                                          (set_local $15
                                            (if f64
                                              (i32.eq
                                                (i32.load8_s
                                                  (get_local $29)
                                                )
                                                (i32.const 45)
                                              )
                                              (f64.neg
                                                (f64.add
                                                  (get_local $23)
                                                  (f64.sub
                                                    (f64.neg
                                                      (get_local $15)
                                                    )
                                                    (get_local $23)
                                                  )
                                                )
                                              )
                                              (f64.sub
                                                (f64.add
                                                  (get_local $15)
                                                  (get_local $23)
                                                )
                                                (get_local $23)
                                              )
                                            )
                                          )
                                        )
                                      )
                                      (set_local $1
                                        (i32.sub
                                          (i32.const 0)
                                          (tee_local $7
                                            (i32.load
                                              (get_local $22)
                                            )
                                          )
                                        )
                                      )
                                      (if
                                        (i32.eq
                                          (tee_local $1
                                            (call $_fmt_u
                                              (i64.extend_s/i32
                                                (if i32
                                                  (i32.lt_s
                                                    (get_local $7)
                                                    (i32.const 0)
                                                  )
                                                  (get_local $1)
                                                  (get_local $7)
                                                )
                                              )
                                              (get_local $36)
                                            )
                                          )
                                          (get_local $36)
                                        )
                                        (block
                                          (i32.store8
                                            (get_local $43)
                                            (i32.const 48)
                                          )
                                          (set_local $1
                                            (get_local $43)
                                          )
                                        )
                                      )
                                      (set_local $13
                                        (i32.or
                                          (get_local $27)
                                          (i32.const 2)
                                        )
                                      )
                                      (i32.store8
                                        (i32.add
                                          (get_local $1)
                                          (i32.const -1)
                                        )
                                        (i32.add
                                          (i32.and
                                            (i32.shr_s
                                              (get_local $7)
                                              (i32.const 31)
                                            )
                                            (i32.const 2)
                                          )
                                          (i32.const 43)
                                        )
                                      )
                                      (i32.store8
                                        (tee_local $8
                                          (i32.add
                                            (get_local $1)
                                            (i32.const -2)
                                          )
                                        )
                                        (i32.add
                                          (get_local $9)
                                          (i32.const 15)
                                        )
                                      )
                                      (set_local $9
                                        (i32.lt_s
                                          (get_local $5)
                                          (i32.const 1)
                                        )
                                      )
                                      (set_local $14
                                        (i32.eqz
                                          (i32.and
                                            (get_local $12)
                                            (i32.const 8)
                                          )
                                        )
                                      )
                                      (set_local $1
                                        (get_local $21)
                                      )
                                      (loop $while-in56
                                        (i32.store8
                                          (get_local $1)
                                          (i32.or
                                            (i32.load8_u
                                              (i32.add
                                                (tee_local $7
                                                  (i32.trunc_s/f64
                                                    (get_local $15)
                                                  )
                                                )
                                                (i32.const 1623)
                                              )
                                            )
                                            (get_local $6)
                                          )
                                        )
                                        (set_local $15
                                          (f64.mul
                                            (f64.sub
                                              (get_local $15)
                                              (f64.convert_s/i32
                                                (get_local $7)
                                              )
                                            )
                                            (f64.const 16)
                                          )
                                        )
                                        (set_local $1
                                          (block $do-once57 i32
                                            (if i32
                                              (i32.eq
                                                (i32.sub
                                                  (tee_local $7
                                                    (i32.add
                                                      (get_local $1)
                                                      (i32.const 1)
                                                    )
                                                  )
                                                  (get_local $30)
                                                )
                                                (i32.const 1)
                                              )
                                              (block i32
                                                (drop
                                                  (br_if $do-once57
                                                    (get_local $7)
                                                    (i32.and
                                                      (get_local $14)
                                                      (i32.and
                                                        (get_local $9)
                                                        (f64.eq
                                                          (get_local $15)
                                                          (f64.const 0)
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                                (i32.store8
                                                  (get_local $7)
                                                  (i32.const 46)
                                                )
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const 2)
                                                )
                                              )
                                              (get_local $7)
                                            )
                                          )
                                        )
                                        (br_if $while-in56
                                          (f64.ne
                                            (get_local $15)
                                            (f64.const 0)
                                          )
                                        )
                                      )
                                      (set_local $6
                                        (i32.sub
                                          (i32.add
                                            (get_local $49)
                                            (get_local $5)
                                          )
                                          (tee_local $7
                                            (get_local $8)
                                          )
                                        )
                                      )
                                      (set_local $9
                                        (i32.add
                                          (i32.sub
                                            (get_local $47)
                                            (get_local $7)
                                          )
                                          (get_local $1)
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 32)
                                        (get_local $10)
                                        (tee_local $5
                                          (i32.add
                                            (if i32
                                              (i32.and
                                                (i32.ne
                                                  (get_local $5)
                                                  (i32.const 0)
                                                )
                                                (i32.lt_s
                                                  (i32.add
                                                    (get_local $48)
                                                    (get_local $1)
                                                  )
                                                  (get_local $5)
                                                )
                                              )
                                              (get_local $6)
                                              (tee_local $6
                                                (get_local $9)
                                              )
                                            )
                                            (get_local $13)
                                          )
                                        )
                                        (get_local $12)
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (drop
                                          (call $___fwritex
                                            (get_local $29)
                                            (get_local $13)
                                            (get_local $0)
                                          )
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 48)
                                        (get_local $10)
                                        (get_local $5)
                                        (i32.xor
                                          (get_local $12)
                                          (i32.const 65536)
                                        )
                                      )
                                      (set_local $1
                                        (i32.sub
                                          (get_local $1)
                                          (get_local $30)
                                        )
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (drop
                                          (call $___fwritex
                                            (get_local $21)
                                            (get_local $1)
                                            (get_local $0)
                                          )
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 48)
                                        (i32.sub
                                          (get_local $6)
                                          (i32.add
                                            (get_local $1)
                                            (tee_local $1
                                              (i32.sub
                                                (get_local $31)
                                                (get_local $7)
                                              )
                                            )
                                          )
                                        )
                                        (i32.const 0)
                                        (i32.const 0)
                                      )
                                      (if
                                        (i32.eqz
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (drop
                                          (call $___fwritex
                                            (get_local $8)
                                            (get_local $1)
                                            (get_local $0)
                                          )
                                        )
                                      )
                                      (call $_pad
                                        (get_local $0)
                                        (i32.const 32)
                                        (get_local $10)
                                        (get_local $5)
                                        (i32.xor
                                          (get_local $12)
                                          (i32.const 8192)
                                        )
                                      )
                                      (if
                                        (i32.ge_s
                                          (get_local $5)
                                          (get_local $10)
                                        )
                                        (set_local $10
                                          (get_local $5)
                                        )
                                      )
                                      (br $do-once49)
                                    )
                                  )
                                  (if
                                    (get_local $1)
                                    (block
                                      (i32.store
                                        (get_local $22)
                                        (tee_local $6
                                          (i32.add
                                            (i32.load
                                              (get_local $22)
                                            )
                                            (i32.const -28)
                                          )
                                        )
                                      )
                                      (set_local $15
                                        (f64.mul
                                          (get_local $15)
                                          (f64.const 268435456)
                                        )
                                      )
                                    )
                                    (set_local $6
                                      (i32.load
                                        (get_local $22)
                                      )
                                    )
                                  )
                                  (set_local $8
                                    (tee_local $7
                                      (if i32
                                        (i32.lt_s
                                          (get_local $6)
                                          (i32.const 0)
                                        )
                                        (get_local $50)
                                        (get_local $51)
                                      )
                                    )
                                  )
                                  (loop $while-in60
                                    (i32.store
                                      (get_local $8)
                                      (tee_local $1
                                        (i32.trunc_s/f64
                                          (get_local $15)
                                        )
                                      )
                                    )
                                    (set_local $8
                                      (i32.add
                                        (get_local $8)
                                        (i32.const 4)
                                      )
                                    )
                                    (br_if $while-in60
                                      (f64.ne
                                        (tee_local $15
                                          (f64.mul
                                            (f64.sub
                                              (get_local $15)
                                              (f64.convert_u/i32
                                                (get_local $1)
                                              )
                                            )
                                            (f64.const 1e9)
                                          )
                                        )
                                        (f64.const 0)
                                      )
                                    )
                                  )
                                  (if
                                    (i32.gt_s
                                      (get_local $6)
                                      (i32.const 0)
                                    )
                                    (block
                                      (set_local $1
                                        (get_local $7)
                                      )
                                      (loop $while-in62
                                        (set_local $14
                                          (if i32
                                            (i32.gt_s
                                              (get_local $6)
                                              (i32.const 29)
                                            )
                                            (i32.const 29)
                                            (get_local $6)
                                          )
                                        )
                                        (block $do-once63
                                          (if
                                            (i32.ge_u
                                              (tee_local $6
                                                (i32.add
                                                  (get_local $8)
                                                  (i32.const -4)
                                                )
                                              )
                                              (get_local $1)
                                            )
                                            (block
                                              (set_local $19
                                                (i64.extend_u/i32
                                                  (get_local $14)
                                                )
                                              )
                                              (set_local $13
                                                (i32.const 0)
                                              )
                                              (loop $while-in66
                                                (i64.store32
                                                  (get_local $6)
                                                  (i64.rem_u
                                                    (tee_local $52
                                                      (i64.add
                                                        (i64.shl
                                                          (i64.extend_u/i32
                                                            (i32.load
                                                              (get_local $6)
                                                            )
                                                          )
                                                          (get_local $19)
                                                        )
                                                        (i64.extend_u/i32
                                                          (get_local $13)
                                                        )
                                                      )
                                                    )
                                                    (i64.const 1000000000)
                                                  )
                                                )
                                                (set_local $13
                                                  (i32.wrap/i64
                                                    (i64.div_u
                                                      (get_local $52)
                                                      (i64.const 1000000000)
                                                    )
                                                  )
                                                )
                                                (br_if $while-in66
                                                  (i32.ge_u
                                                    (tee_local $6
                                                      (i32.add
                                                        (get_local $6)
                                                        (i32.const -4)
                                                      )
                                                    )
                                                    (get_local $1)
                                                  )
                                                )
                                              )
                                              (br_if $do-once63
                                                (i32.eqz
                                                  (get_local $13)
                                                )
                                              )
                                              (i32.store
                                                (tee_local $1
                                                  (i32.add
                                                    (get_local $1)
                                                    (i32.const -4)
                                                  )
                                                )
                                                (get_local $13)
                                              )
                                            )
                                          )
                                        )
                                        (loop $while-in68
                                          (if
                                            (i32.gt_u
                                              (get_local $8)
                                              (get_local $1)
                                            )
                                            (if
                                              (i32.eqz
                                                (i32.load
                                                  (tee_local $6
                                                    (i32.add
                                                      (get_local $8)
                                                      (i32.const -4)
                                                    )
                                                  )
                                                )
                                              )
                                              (block
                                                (set_local $8
                                                  (get_local $6)
                                                )
                                                (br $while-in68)
                                              )
                                            )
                                          )
                                        )
                                        (i32.store
                                          (get_local $22)
                                          (tee_local $6
                                            (i32.sub
                                              (i32.load
                                                (get_local $22)
                                              )
                                              (get_local $14)
                                            )
                                          )
                                        )
                                        (br_if $while-in62
                                          (i32.gt_s
                                            (get_local $6)
                                            (i32.const 0)
                                          )
                                        )
                                      )
                                    )
                                    (set_local $1
                                      (get_local $7)
                                    )
                                  )
                                  (set_local $20
                                    (if i32
                                      (i32.lt_s
                                        (get_local $5)
                                        (i32.const 0)
                                      )
                                      (i32.const 6)
                                      (get_local $5)
                                    )
                                  )
                                  (if
                                    (i32.lt_s
                                      (get_local $6)
                                      (i32.const 0)
                                    )
                                    (block
                                      (set_local $14
                                        (i32.add
                                          (i32.div_s
                                            (i32.add
                                              (get_local $20)
                                              (i32.const 25)
                                            )
                                            (i32.const 9)
                                          )
                                          (i32.const 1)
                                        )
                                      )
                                      (set_local $28
                                        (i32.eq
                                          (get_local $25)
                                          (i32.const 102)
                                        )
                                      )
                                      (set_local $5
                                        (get_local $8)
                                      )
                                      (loop $while-in70
                                        (if
                                          (i32.gt_s
                                            (tee_local $13
                                              (i32.sub
                                                (i32.const 0)
                                                (get_local $6)
                                              )
                                            )
                                            (i32.const 9)
                                          )
                                          (set_local $13
                                            (i32.const 9)
                                          )
                                        )
                                        (block $do-once71
                                          (if
                                            (i32.lt_u
                                              (get_local $1)
                                              (get_local $5)
                                            )
                                            (block
                                              (set_local $32
                                                (i32.add
                                                  (i32.shl
                                                    (i32.const 1)
                                                    (get_local $13)
                                                  )
                                                  (i32.const -1)
                                                )
                                              )
                                              (set_local $38
                                                (i32.shr_u
                                                  (i32.const 1000000000)
                                                  (get_local $13)
                                                )
                                              )
                                              (set_local $6
                                                (i32.const 0)
                                              )
                                              (set_local $8
                                                (get_local $1)
                                              )
                                              (loop $while-in74
                                                (i32.store
                                                  (get_local $8)
                                                  (i32.add
                                                    (i32.shr_u
                                                      (tee_local $35
                                                        (i32.load
                                                          (get_local $8)
                                                        )
                                                      )
                                                      (get_local $13)
                                                    )
                                                    (get_local $6)
                                                  )
                                                )
                                                (set_local $6
                                                  (i32.mul
                                                    (i32.and
                                                      (get_local $35)
                                                      (get_local $32)
                                                    )
                                                    (get_local $38)
                                                  )
                                                )
                                                (br_if $while-in74
                                                  (i32.lt_u
                                                    (tee_local $8
                                                      (i32.add
                                                        (get_local $8)
                                                        (i32.const 4)
                                                      )
                                                    )
                                                    (get_local $5)
                                                  )
                                                )
                                              )
                                              (set_local $8
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const 4)
                                                )
                                              )
                                              (if
                                                (i32.eqz
                                                  (i32.load
                                                    (get_local $1)
                                                  )
                                                )
                                                (set_local $1
                                                  (get_local $8)
                                                )
                                              )
                                              (br_if $do-once71
                                                (i32.eqz
                                                  (get_local $6)
                                                )
                                              )
                                              (i32.store
                                                (get_local $5)
                                                (get_local $6)
                                              )
                                              (set_local $5
                                                (i32.add
                                                  (get_local $5)
                                                  (i32.const 4)
                                                )
                                              )
                                            )
                                            (block
                                              (set_local $8
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const 4)
                                                )
                                              )
                                              (if
                                                (i32.eqz
                                                  (i32.load
                                                    (get_local $1)
                                                  )
                                                )
                                                (set_local $1
                                                  (get_local $8)
                                                )
                                              )
                                            )
                                          )
                                        )
                                        (set_local $6
                                          (i32.add
                                            (tee_local $8
                                              (if i32
                                                (get_local $28)
                                                (get_local $7)
                                                (get_local $1)
                                              )
                                            )
                                            (i32.shl
                                              (get_local $14)
                                              (i32.const 2)
                                            )
                                          )
                                        )
                                        (if
                                          (i32.gt_s
                                            (i32.shr_s
                                              (i32.sub
                                                (get_local $5)
                                                (get_local $8)
                                              )
                                              (i32.const 2)
                                            )
                                            (get_local $14)
                                          )
                                          (set_local $5
                                            (get_local $6)
                                          )
                                        )
                                        (i32.store
                                          (get_local $22)
                                          (tee_local $6
                                            (i32.add
                                              (i32.load
                                                (get_local $22)
                                              )
                                              (get_local $13)
                                            )
                                          )
                                        )
                                        (br_if $while-in70
                                          (i32.lt_s
                                            (get_local $6)
                                            (i32.const 0)
                                          )
                                        )
                                        (set_local $13
                                          (get_local $5)
                                        )
                                      )
                                    )
                                    (set_local $13
                                      (get_local $8)
                                    )
                                  )
                                  (set_local $28
                                    (get_local $7)
                                  )
                                  (block $do-once75
                                    (if
                                      (i32.lt_u
                                        (get_local $1)
                                        (get_local $13)
                                      )
                                      (block
                                        (set_local $5
                                          (i32.mul
                                            (i32.shr_s
                                              (i32.sub
                                                (get_local $28)
                                                (get_local $1)
                                              )
                                              (i32.const 2)
                                            )
                                            (i32.const 9)
                                          )
                                        )
                                        (br_if $do-once75
                                          (i32.lt_u
                                            (tee_local $6
                                              (i32.load
                                                (get_local $1)
                                              )
                                            )
                                            (i32.const 10)
                                          )
                                        )
                                        (set_local $8
                                          (i32.const 10)
                                        )
                                        (loop $while-in78
                                          (set_local $5
                                            (i32.add
                                              (get_local $5)
                                              (i32.const 1)
                                            )
                                          )
                                          (br_if $while-in78
                                            (i32.ge_u
                                              (get_local $6)
                                              (tee_local $8
                                                (i32.mul
                                                  (get_local $8)
                                                  (i32.const 10)
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                      (set_local $5
                                        (i32.const 0)
                                      )
                                    )
                                  )
                                  (set_local $32
                                    (i32.eq
                                      (get_local $25)
                                      (i32.const 103)
                                    )
                                  )
                                  (set_local $38
                                    (i32.ne
                                      (get_local $20)
                                      (i32.const 0)
                                    )
                                  )
                                  (if
                                    (i32.lt_s
                                      (tee_local $8
                                        (i32.add
                                          (i32.sub
                                            (get_local $20)
                                            (if i32
                                              (i32.ne
                                                (get_local $25)
                                                (i32.const 102)
                                              )
                                              (get_local $5)
                                              (i32.const 0)
                                            )
                                          )
                                          (i32.shr_s
                                            (i32.shl
                                              (i32.and
                                                (get_local $38)
                                                (get_local $32)
                                              )
                                              (i32.const 31)
                                            )
                                            (i32.const 31)
                                          )
                                        )
                                      )
                                      (i32.add
                                        (i32.mul
                                          (i32.shr_s
                                            (i32.sub
                                              (get_local $13)
                                              (get_local $28)
                                            )
                                            (i32.const 2)
                                          )
                                          (i32.const 9)
                                        )
                                        (i32.const -9)
                                      )
                                    )
                                    (block
                                      (if
                                        (i32.lt_s
                                          (tee_local $8
                                            (i32.add
                                              (i32.rem_s
                                                (tee_local $14
                                                  (i32.add
                                                    (get_local $8)
                                                    (i32.const 9216)
                                                  )
                                                )
                                                (i32.const 9)
                                              )
                                              (i32.const 1)
                                            )
                                          )
                                          (i32.const 9)
                                        )
                                        (block
                                          (set_local $6
                                            (i32.const 10)
                                          )
                                          (loop $while-in80
                                            (set_local $6
                                              (i32.mul
                                                (get_local $6)
                                                (i32.const 10)
                                              )
                                            )
                                            (br_if $while-in80
                                              (i32.ne
                                                (tee_local $8
                                                  (i32.add
                                                    (get_local $8)
                                                    (i32.const 1)
                                                  )
                                                )
                                                (i32.const 9)
                                              )
                                            )
                                          )
                                        )
                                        (set_local $6
                                          (i32.const 10)
                                        )
                                      )
                                      (set_local $14
                                        (i32.rem_u
                                          (tee_local $25
                                            (i32.load
                                              (tee_local $8
                                                (i32.add
                                                  (i32.add
                                                    (get_local $7)
                                                    (i32.const 4)
                                                  )
                                                  (i32.shl
                                                    (i32.add
                                                      (i32.div_s
                                                        (get_local $14)
                                                        (i32.const 9)
                                                      )
                                                      (i32.const -1024)
                                                    )
                                                    (i32.const 2)
                                                  )
                                                )
                                              )
                                            )
                                          )
                                          (get_local $6)
                                        )
                                      )
                                      (block $do-once81
                                        (if
                                          (i32.eqz
                                            (i32.and
                                              (tee_local $35
                                                (i32.eq
                                                  (i32.add
                                                    (get_local $8)
                                                    (i32.const 4)
                                                  )
                                                  (get_local $13)
                                                )
                                              )
                                              (i32.eqz
                                                (get_local $14)
                                              )
                                            )
                                          )
                                          (block
                                            (set_local $15
                                              (if f64
                                                (i32.lt_u
                                                  (get_local $14)
                                                  (tee_local $53
                                                    (i32.div_s
                                                      (get_local $6)
                                                      (i32.const 2)
                                                    )
                                                  )
                                                )
                                                (f64.const 0.5)
                                                (if f64
                                                  (i32.and
                                                    (get_local $35)
                                                    (i32.eq
                                                      (get_local $14)
                                                      (get_local $53)
                                                    )
                                                  )
                                                  (f64.const 1)
                                                  (f64.const 1.5)
                                                )
                                              )
                                            )
                                            (set_local $23
                                              (if f64
                                                (i32.and
                                                  (i32.div_u
                                                    (get_local $25)
                                                    (get_local $6)
                                                  )
                                                  (i32.const 1)
                                                )
                                                (f64.const 9007199254740994)
                                                (f64.const 9007199254740992)
                                              )
                                            )
                                            (block $do-once83
                                              (if
                                                (get_local $27)
                                                (block
                                                  (br_if $do-once83
                                                    (i32.ne
                                                      (i32.load8_s
                                                        (get_local $29)
                                                      )
                                                      (i32.const 45)
                                                    )
                                                  )
                                                  (set_local $23
                                                    (f64.neg
                                                      (get_local $23)
                                                    )
                                                  )
                                                  (set_local $15
                                                    (f64.neg
                                                      (get_local $15)
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                            (i32.store
                                              (get_local $8)
                                              (tee_local $14
                                                (i32.sub
                                                  (get_local $25)
                                                  (get_local $14)
                                                )
                                              )
                                            )
                                            (br_if $do-once81
                                              (f64.eq
                                                (f64.add
                                                  (get_local $23)
                                                  (get_local $15)
                                                )
                                                (get_local $23)
                                              )
                                            )
                                            (i32.store
                                              (get_local $8)
                                              (tee_local $5
                                                (i32.add
                                                  (get_local $14)
                                                  (get_local $6)
                                                )
                                              )
                                            )
                                            (if
                                              (i32.gt_u
                                                (get_local $5)
                                                (i32.const 999999999)
                                              )
                                              (loop $while-in86
                                                (i32.store
                                                  (get_local $8)
                                                  (i32.const 0)
                                                )
                                                (if
                                                  (i32.lt_u
                                                    (tee_local $8
                                                      (i32.add
                                                        (get_local $8)
                                                        (i32.const -4)
                                                      )
                                                    )
                                                    (get_local $1)
                                                  )
                                                  (i32.store
                                                    (tee_local $1
                                                      (i32.add
                                                        (get_local $1)
                                                        (i32.const -4)
                                                      )
                                                    )
                                                    (i32.const 0)
                                                  )
                                                )
                                                (i32.store
                                                  (get_local $8)
                                                  (tee_local $5
                                                    (i32.add
                                                      (i32.load
                                                        (get_local $8)
                                                      )
                                                      (i32.const 1)
                                                    )
                                                  )
                                                )
                                                (br_if $while-in86
                                                  (i32.gt_u
                                                    (get_local $5)
                                                    (i32.const 999999999)
                                                  )
                                                )
                                              )
                                            )
                                            (set_local $5
                                              (i32.mul
                                                (i32.shr_s
                                                  (i32.sub
                                                    (get_local $28)
                                                    (get_local $1)
                                                  )
                                                  (i32.const 2)
                                                )
                                                (i32.const 9)
                                              )
                                            )
                                            (br_if $do-once81
                                              (i32.lt_u
                                                (tee_local $14
                                                  (i32.load
                                                    (get_local $1)
                                                  )
                                                )
                                                (i32.const 10)
                                              )
                                            )
                                            (set_local $6
                                              (i32.const 10)
                                            )
                                            (loop $while-in88
                                              (set_local $5
                                                (i32.add
                                                  (get_local $5)
                                                  (i32.const 1)
                                                )
                                              )
                                              (br_if $while-in88
                                                (i32.ge_u
                                                  (get_local $14)
                                                  (tee_local $6
                                                    (i32.mul
                                                      (get_local $6)
                                                      (i32.const 10)
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                      (set_local $14
                                        (get_local $1)
                                      )
                                      (set_local $6
                                        (get_local $5)
                                      )
                                      (if
                                        (i32.le_u
                                          (get_local $13)
                                          (tee_local $8
                                            (i32.add
                                              (get_local $8)
                                              (i32.const 4)
                                            )
                                          )
                                        )
                                        (set_local $8
                                          (get_local $13)
                                        )
                                      )
                                    )
                                    (block
                                      (set_local $14
                                        (get_local $1)
                                      )
                                      (set_local $6
                                        (get_local $5)
                                      )
                                      (set_local $8
                                        (get_local $13)
                                      )
                                    )
                                  )
                                  (set_local $35
                                    (i32.sub
                                      (i32.const 0)
                                      (get_local $6)
                                    )
                                  )
                                  (loop $while-in90
                                    (block $while-out89
                                      (if
                                        (i32.le_u
                                          (get_local $8)
                                          (get_local $14)
                                        )
                                        (block
                                          (set_local $25
                                            (i32.const 0)
                                          )
                                          (br $while-out89)
                                        )
                                      )
                                      (if
                                        (i32.load
                                          (tee_local $1
                                            (i32.add
                                              (get_local $8)
                                              (i32.const -4)
                                            )
                                          )
                                        )
                                        (set_local $25
                                          (i32.const 1)
                                        )
                                        (block
                                          (set_local $8
                                            (get_local $1)
                                          )
                                          (br $while-in90)
                                        )
                                      )
                                    )
                                  )
                                  (block $do-once91
                                    (if
                                      (get_local $32)
                                      (block
                                        (set_local $1
                                          (if i32
                                            (i32.and
                                              (i32.gt_s
                                                (tee_local $1
                                                  (i32.add
                                                    (i32.xor
                                                      (i32.and
                                                        (get_local $38)
                                                        (i32.const 1)
                                                      )
                                                      (i32.const 1)
                                                    )
                                                    (get_local $20)
                                                  )
                                                )
                                                (get_local $6)
                                              )
                                              (i32.gt_s
                                                (get_local $6)
                                                (i32.const -5)
                                              )
                                            )
                                            (block i32
                                              (set_local $5
                                                (i32.add
                                                  (get_local $9)
                                                  (i32.const -1)
                                                )
                                              )
                                              (i32.sub
                                                (i32.add
                                                  (get_local $1)
                                                  (i32.const -1)
                                                )
                                                (get_local $6)
                                              )
                                            )
                                            (block i32
                                              (set_local $5
                                                (i32.add
                                                  (get_local $9)
                                                  (i32.const -2)
                                                )
                                              )
                                              (i32.add
                                                (get_local $1)
                                                (i32.const -1)
                                              )
                                            )
                                          )
                                        )
                                        (br_if $do-once91
                                          (tee_local $13
                                            (i32.and
                                              (get_local $12)
                                              (i32.const 8)
                                            )
                                          )
                                        )
                                        (block $do-once93
                                          (if
                                            (get_local $25)
                                            (block
                                              (if
                                                (i32.eqz
                                                  (tee_local $20
                                                    (i32.load
                                                      (i32.add
                                                        (get_local $8)
                                                        (i32.const -4)
                                                      )
                                                    )
                                                  )
                                                )
                                                (block
                                                  (set_local $9
                                                    (i32.const 9)
                                                  )
                                                  (br $do-once93)
                                                )
                                              )
                                              (if
                                                (i32.rem_u
                                                  (get_local $20)
                                                  (i32.const 10)
                                                )
                                                (block
                                                  (set_local $9
                                                    (i32.const 0)
                                                  )
                                                  (br $do-once93)
                                                )
                                                (block
                                                  (set_local $13
                                                    (i32.const 10)
                                                  )
                                                  (set_local $9
                                                    (i32.const 0)
                                                  )
                                                )
                                              )
                                              (loop $while-in96
                                                (set_local $9
                                                  (i32.add
                                                    (get_local $9)
                                                    (i32.const 1)
                                                  )
                                                )
                                                (br_if $while-in96
                                                  (i32.eqz
                                                    (i32.rem_u
                                                      (get_local $20)
                                                      (tee_local $13
                                                        (i32.mul
                                                          (get_local $13)
                                                          (i32.const 10)
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                            (set_local $9
                                              (i32.const 9)
                                            )
                                          )
                                        )
                                        (set_local $20
                                          (i32.add
                                            (i32.mul
                                              (i32.shr_s
                                                (i32.sub
                                                  (get_local $8)
                                                  (get_local $28)
                                                )
                                                (i32.const 2)
                                              )
                                              (i32.const 9)
                                            )
                                            (i32.const -9)
                                          )
                                        )
                                        (if
                                          (i32.eq
                                            (i32.or
                                              (get_local $5)
                                              (i32.const 32)
                                            )
                                            (i32.const 102)
                                          )
                                          (block
                                            (set_local $13
                                              (i32.const 0)
                                            )
                                            (if
                                              (i32.ge_s
                                                (get_local $1)
                                                (if i32
                                                  (i32.lt_s
                                                    (tee_local $9
                                                      (i32.sub
                                                        (get_local $20)
                                                        (get_local $9)
                                                      )
                                                    )
                                                    (i32.const 0)
                                                  )
                                                  (tee_local $9
                                                    (i32.const 0)
                                                  )
                                                  (get_local $9)
                                                )
                                              )
                                              (set_local $1
                                                (get_local $9)
                                              )
                                            )
                                          )
                                          (block
                                            (set_local $13
                                              (i32.const 0)
                                            )
                                            (if
                                              (i32.ge_s
                                                (get_local $1)
                                                (if i32
                                                  (i32.lt_s
                                                    (tee_local $9
                                                      (i32.sub
                                                        (i32.add
                                                          (get_local $20)
                                                          (get_local $6)
                                                        )
                                                        (get_local $9)
                                                      )
                                                    )
                                                    (i32.const 0)
                                                  )
                                                  (tee_local $9
                                                    (i32.const 0)
                                                  )
                                                  (get_local $9)
                                                )
                                              )
                                              (set_local $1
                                                (get_local $9)
                                              )
                                            )
                                          )
                                        )
                                      )
                                      (block
                                        (set_local $13
                                          (i32.and
                                            (get_local $12)
                                            (i32.const 8)
                                          )
                                        )
                                        (set_local $1
                                          (get_local $20)
                                        )
                                        (set_local $5
                                          (get_local $9)
                                        )
                                      )
                                    )
                                  )
                                  (if
                                    (tee_local $28
                                      (i32.eq
                                        (i32.or
                                          (get_local $5)
                                          (i32.const 32)
                                        )
                                        (i32.const 102)
                                      )
                                    )
                                    (block
                                      (set_local $9
                                        (i32.const 0)
                                      )
                                      (if
                                        (i32.le_s
                                          (get_local $6)
                                          (i32.const 0)
                                        )
                                        (set_local $6
                                          (i32.const 0)
                                        )
                                      )
                                    )
                                    (block
                                      (if
                                        (i32.lt_s
                                          (i32.sub
                                            (get_local $31)
                                            (tee_local $9
                                              (call $_fmt_u
                                                (i64.extend_s/i32
                                                  (if i32
                                                    (i32.lt_s
                                                      (get_local $6)
                                                      (i32.const 0)
                                                    )
                                                    (get_local $35)
                                                    (get_local $6)
                                                  )
                                                )
                                                (get_local $36)
                                              )
                                            )
                                          )
                                          (i32.const 2)
                                        )
                                        (loop $while-in98
                                          (i32.store8
                                            (tee_local $9
                                              (i32.add
                                                (get_local $9)
                                                (i32.const -1)
                                              )
                                            )
                                            (i32.const 48)
                                          )
                                          (br_if $while-in98
                                            (i32.lt_s
                                              (i32.sub
                                                (get_local $31)
                                                (get_local $9)
                                              )
                                              (i32.const 2)
                                            )
                                          )
                                        )
                                      )
                                      (i32.store8
                                        (i32.add
                                          (get_local $9)
                                          (i32.const -1)
                                        )
                                        (i32.add
                                          (i32.and
                                            (i32.shr_s
                                              (get_local $6)
                                              (i32.const 31)
                                            )
                                            (i32.const 2)
                                          )
                                          (i32.const 43)
                                        )
                                      )
                                      (i32.store8
                                        (tee_local $6
                                          (i32.add
                                            (get_local $9)
                                            (i32.const -2)
                                          )
                                        )
                                        (get_local $5)
                                      )
                                      (set_local $9
                                        (get_local $6)
                                      )
                                      (set_local $6
                                        (i32.sub
                                          (get_local $31)
                                          (get_local $6)
                                        )
                                      )
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $10)
                                    (tee_local $20
                                      (i32.add
                                        (i32.add
                                          (i32.add
                                            (i32.add
                                              (get_local $27)
                                              (i32.const 1)
                                            )
                                            (get_local $1)
                                          )
                                          (i32.ne
                                            (tee_local $32
                                              (i32.or
                                                (get_local $1)
                                                (get_local $13)
                                              )
                                            )
                                            (i32.const 0)
                                          )
                                        )
                                        (get_local $6)
                                      )
                                    )
                                    (get_local $12)
                                  )
                                  (if
                                    (i32.eqz
                                      (i32.and
                                        (i32.load
                                          (get_local $0)
                                        )
                                        (i32.const 32)
                                      )
                                    )
                                    (drop
                                      (call $___fwritex
                                        (get_local $29)
                                        (get_local $27)
                                        (get_local $0)
                                      )
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 48)
                                    (get_local $10)
                                    (get_local $20)
                                    (i32.xor
                                      (get_local $12)
                                      (i32.const 65536)
                                    )
                                  )
                                  (block $do-once99
                                    (if
                                      (get_local $28)
                                      (block
                                        (set_local $6
                                          (tee_local $9
                                            (if i32
                                              (i32.gt_u
                                                (get_local $14)
                                                (get_local $7)
                                              )
                                              (get_local $7)
                                              (get_local $14)
                                            )
                                          )
                                        )
                                        (loop $while-in102
                                          (set_local $5
                                            (call $_fmt_u
                                              (i64.extend_u/i32
                                                (i32.load
                                                  (get_local $6)
                                                )
                                              )
                                              (get_local $34)
                                            )
                                          )
                                          (block $do-once103
                                            (if
                                              (i32.eq
                                                (get_local $6)
                                                (get_local $9)
                                              )
                                              (block
                                                (br_if $do-once103
                                                  (i32.ne
                                                    (get_local $5)
                                                    (get_local $34)
                                                  )
                                                )
                                                (i32.store8
                                                  (get_local $37)
                                                  (i32.const 48)
                                                )
                                                (set_local $5
                                                  (get_local $37)
                                                )
                                              )
                                              (block
                                                (br_if $do-once103
                                                  (i32.le_u
                                                    (get_local $5)
                                                    (get_local $21)
                                                  )
                                                )
                                                (drop
                                                  (call $_memset
                                                    (get_local $21)
                                                    (i32.const 48)
                                                    (i32.sub
                                                      (get_local $5)
                                                      (get_local $30)
                                                    )
                                                  )
                                                )
                                                (loop $while-in106
                                                  (br_if $while-in106
                                                    (i32.gt_u
                                                      (tee_local $5
                                                        (i32.add
                                                          (get_local $5)
                                                          (i32.const -1)
                                                        )
                                                      )
                                                      (get_local $21)
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                          (if
                                            (i32.eqz
                                              (i32.and
                                                (i32.load
                                                  (get_local $0)
                                                )
                                                (i32.const 32)
                                              )
                                            )
                                            (drop
                                              (call $___fwritex
                                                (get_local $5)
                                                (i32.sub
                                                  (get_local $44)
                                                  (get_local $5)
                                                )
                                                (get_local $0)
                                              )
                                            )
                                          )
                                          (if
                                            (i32.le_u
                                              (tee_local $5
                                                (i32.add
                                                  (get_local $6)
                                                  (i32.const 4)
                                                )
                                              )
                                              (get_local $7)
                                            )
                                            (block
                                              (set_local $6
                                                (get_local $5)
                                              )
                                              (br $while-in102)
                                            )
                                          )
                                        )
                                        (block $do-once107
                                          (if
                                            (get_local $32)
                                            (block
                                              (br_if $do-once107
                                                (i32.and
                                                  (i32.load
                                                    (get_local $0)
                                                  )
                                                  (i32.const 32)
                                                )
                                              )
                                              (drop
                                                (call $___fwritex
                                                  (i32.const 1691)
                                                  (i32.const 1)
                                                  (get_local $0)
                                                )
                                              )
                                            )
                                          )
                                        )
                                        (if
                                          (i32.and
                                            (i32.gt_s
                                              (get_local $1)
                                              (i32.const 0)
                                            )
                                            (i32.lt_u
                                              (get_local $5)
                                              (get_local $8)
                                            )
                                          )
                                          (loop $while-in110
                                            (if
                                              (i32.gt_u
                                                (tee_local $7
                                                  (call $_fmt_u
                                                    (i64.extend_u/i32
                                                      (i32.load
                                                        (get_local $5)
                                                      )
                                                    )
                                                    (get_local $34)
                                                  )
                                                )
                                                (get_local $21)
                                              )
                                              (block
                                                (drop
                                                  (call $_memset
                                                    (get_local $21)
                                                    (i32.const 48)
                                                    (i32.sub
                                                      (get_local $7)
                                                      (get_local $30)
                                                    )
                                                  )
                                                )
                                                (loop $while-in112
                                                  (br_if $while-in112
                                                    (i32.gt_u
                                                      (tee_local $7
                                                        (i32.add
                                                          (get_local $7)
                                                          (i32.const -1)
                                                        )
                                                      )
                                                      (get_local $21)
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                            (if
                                              (i32.eqz
                                                (i32.and
                                                  (i32.load
                                                    (get_local $0)
                                                  )
                                                  (i32.const 32)
                                                )
                                              )
                                              (drop
                                                (call $___fwritex
                                                  (get_local $7)
                                                  (if i32
                                                    (i32.gt_s
                                                      (get_local $1)
                                                      (i32.const 9)
                                                    )
                                                    (i32.const 9)
                                                    (get_local $1)
                                                  )
                                                  (get_local $0)
                                                )
                                              )
                                            )
                                            (set_local $7
                                              (i32.add
                                                (get_local $1)
                                                (i32.const -9)
                                              )
                                            )
                                            (if
                                              (i32.and
                                                (i32.gt_s
                                                  (get_local $1)
                                                  (i32.const 9)
                                                )
                                                (i32.lt_u
                                                  (tee_local $5
                                                    (i32.add
                                                      (get_local $5)
                                                      (i32.const 4)
                                                    )
                                                  )
                                                  (get_local $8)
                                                )
                                              )
                                              (block
                                                (set_local $1
                                                  (get_local $7)
                                                )
                                                (br $while-in110)
                                              )
                                              (set_local $1
                                                (get_local $7)
                                              )
                                            )
                                          )
                                        )
                                        (call $_pad
                                          (get_local $0)
                                          (i32.const 48)
                                          (i32.add
                                            (get_local $1)
                                            (i32.const 9)
                                          )
                                          (i32.const 9)
                                          (i32.const 0)
                                        )
                                      )
                                      (block
                                        (set_local $5
                                          (i32.add
                                            (get_local $14)
                                            (i32.const 4)
                                          )
                                        )
                                        (if
                                          (i32.eqz
                                            (get_local $25)
                                          )
                                          (set_local $8
                                            (get_local $5)
                                          )
                                        )
                                        (if
                                          (i32.gt_s
                                            (get_local $1)
                                            (i32.const -1)
                                          )
                                          (block
                                            (set_local $13
                                              (i32.eqz
                                                (get_local $13)
                                              )
                                            )
                                            (set_local $7
                                              (get_local $14)
                                            )
                                            (set_local $5
                                              (get_local $1)
                                            )
                                            (loop $while-in114
                                              (if
                                                (i32.eq
                                                  (tee_local $1
                                                    (call $_fmt_u
                                                      (i64.extend_u/i32
                                                        (i32.load
                                                          (get_local $7)
                                                        )
                                                      )
                                                      (get_local $34)
                                                    )
                                                  )
                                                  (get_local $34)
                                                )
                                                (block
                                                  (i32.store8
                                                    (get_local $37)
                                                    (i32.const 48)
                                                  )
                                                  (set_local $1
                                                    (get_local $37)
                                                  )
                                                )
                                              )
                                              (block $do-once115
                                                (if
                                                  (i32.eq
                                                    (get_local $7)
                                                    (get_local $14)
                                                  )
                                                  (block
                                                    (if
                                                      (i32.eqz
                                                        (i32.and
                                                          (i32.load
                                                            (get_local $0)
                                                          )
                                                          (i32.const 32)
                                                        )
                                                      )
                                                      (drop
                                                        (call $___fwritex
                                                          (get_local $1)
                                                          (i32.const 1)
                                                          (get_local $0)
                                                        )
                                                      )
                                                    )
                                                    (set_local $1
                                                      (i32.add
                                                        (get_local $1)
                                                        (i32.const 1)
                                                      )
                                                    )
                                                    (br_if $do-once115
                                                      (i32.and
                                                        (get_local $13)
                                                        (i32.lt_s
                                                          (get_local $5)
                                                          (i32.const 1)
                                                        )
                                                      )
                                                    )
                                                    (br_if $do-once115
                                                      (i32.and
                                                        (i32.load
                                                          (get_local $0)
                                                        )
                                                        (i32.const 32)
                                                      )
                                                    )
                                                    (drop
                                                      (call $___fwritex
                                                        (i32.const 1691)
                                                        (i32.const 1)
                                                        (get_local $0)
                                                      )
                                                    )
                                                  )
                                                  (block
                                                    (br_if $do-once115
                                                      (i32.le_u
                                                        (get_local $1)
                                                        (get_local $21)
                                                      )
                                                    )
                                                    (drop
                                                      (call $_memset
                                                        (get_local $21)
                                                        (i32.const 48)
                                                        (i32.add
                                                          (get_local $1)
                                                          (get_local $46)
                                                        )
                                                      )
                                                    )
                                                    (loop $while-in118
                                                      (br_if $while-in118
                                                        (i32.gt_u
                                                          (tee_local $1
                                                            (i32.add
                                                              (get_local $1)
                                                              (i32.const -1)
                                                            )
                                                          )
                                                          (get_local $21)
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                              (set_local $6
                                                (i32.sub
                                                  (get_local $44)
                                                  (get_local $1)
                                                )
                                              )
                                              (if
                                                (i32.eqz
                                                  (i32.and
                                                    (i32.load
                                                      (get_local $0)
                                                    )
                                                    (i32.const 32)
                                                  )
                                                )
                                                (drop
                                                  (call $___fwritex
                                                    (get_local $1)
                                                    (if i32
                                                      (i32.gt_s
                                                        (get_local $5)
                                                        (get_local $6)
                                                      )
                                                      (get_local $6)
                                                      (get_local $5)
                                                    )
                                                    (get_local $0)
                                                  )
                                                )
                                              )
                                              (br_if $while-in114
                                                (i32.and
                                                  (i32.lt_u
                                                    (tee_local $7
                                                      (i32.add
                                                        (get_local $7)
                                                        (i32.const 4)
                                                      )
                                                    )
                                                    (get_local $8)
                                                  )
                                                  (i32.gt_s
                                                    (tee_local $5
                                                      (i32.sub
                                                        (get_local $5)
                                                        (get_local $6)
                                                      )
                                                    )
                                                    (i32.const -1)
                                                  )
                                                )
                                              )
                                              (set_local $1
                                                (get_local $5)
                                              )
                                            )
                                          )
                                        )
                                        (call $_pad
                                          (get_local $0)
                                          (i32.const 48)
                                          (i32.add
                                            (get_local $1)
                                            (i32.const 18)
                                          )
                                          (i32.const 18)
                                          (i32.const 0)
                                        )
                                        (br_if $do-once99
                                          (i32.and
                                            (i32.load
                                              (get_local $0)
                                            )
                                            (i32.const 32)
                                          )
                                        )
                                        (drop
                                          (call $___fwritex
                                            (get_local $9)
                                            (i32.sub
                                              (get_local $31)
                                              (get_local $9)
                                            )
                                            (get_local $0)
                                          )
                                        )
                                      )
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $10)
                                    (get_local $20)
                                    (i32.xor
                                      (get_local $12)
                                      (i32.const 8192)
                                    )
                                  )
                                  (if
                                    (i32.ge_s
                                      (get_local $20)
                                      (get_local $10)
                                    )
                                    (set_local $10
                                      (get_local $20)
                                    )
                                  )
                                )
                                (block
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $10)
                                    (tee_local $8
                                      (i32.add
                                        (if i32
                                          (tee_local $6
                                            (i32.or
                                              (f64.ne
                                                (get_local $15)
                                                (get_local $15)
                                              )
                                              (i32.const 0)
                                            )
                                          )
                                          (tee_local $27
                                            (i32.const 0)
                                          )
                                          (get_local $27)
                                        )
                                        (i32.const 3)
                                      )
                                    )
                                    (get_local $7)
                                  )
                                  (if
                                    (i32.eqz
                                      (i32.and
                                        (tee_local $1
                                          (i32.load
                                            (get_local $0)
                                          )
                                        )
                                        (i32.const 32)
                                      )
                                    )
                                    (block
                                      (drop
                                        (call $___fwritex
                                          (get_local $29)
                                          (get_local $27)
                                          (get_local $0)
                                        )
                                      )
                                      (set_local $1
                                        (i32.load
                                          (get_local $0)
                                        )
                                      )
                                    )
                                  )
                                  (set_local $7
                                    (if i32
                                      (tee_local $5
                                        (i32.ne
                                          (i32.and
                                            (get_local $9)
                                            (i32.const 32)
                                          )
                                          (i32.const 0)
                                        )
                                      )
                                      (i32.const 1675)
                                      (i32.const 1679)
                                    )
                                  )
                                  (set_local $5
                                    (if i32
                                      (get_local $5)
                                      (i32.const 1683)
                                      (i32.const 1687)
                                    )
                                  )
                                  (if
                                    (i32.eqz
                                      (get_local $6)
                                    )
                                    (set_local $5
                                      (get_local $7)
                                    )
                                  )
                                  (if
                                    (i32.eqz
                                      (i32.and
                                        (get_local $1)
                                        (i32.const 32)
                                      )
                                    )
                                    (drop
                                      (call $___fwritex
                                        (get_local $5)
                                        (i32.const 3)
                                        (get_local $0)
                                      )
                                    )
                                  )
                                  (call $_pad
                                    (get_local $0)
                                    (i32.const 32)
                                    (get_local $10)
                                    (get_local $8)
                                    (i32.xor
                                      (get_local $12)
                                      (i32.const 8192)
                                    )
                                  )
                                  (if
                                    (i32.ge_s
                                      (get_local $8)
                                      (get_local $10)
                                    )
                                    (set_local $10
                                      (get_local $8)
                                    )
                                  )
                                )
                              )
                            )
                            (set_local $1
                              (get_local $11)
                            )
                            (br $label$continue$L1)
                          )
                          (set_local $7
                            (get_local $5)
                          )
                          (set_local $6
                            (i32.const 0)
                          )
                          (set_local $8
                            (i32.const 1639)
                          )
                          (set_local $5
                            (get_local $24)
                          )
                          (br $__rjto$8)
                        )
                        (set_local $7
                          (i32.and
                            (get_local $9)
                            (i32.const 32)
                          )
                        )
                        (set_local $7
                          (if i32
                            (i64.eq
                              (tee_local $19
                                (i64.load
                                  (get_local $17)
                                )
                              )
                              (i64.const 0)
                            )
                            (block i32
                              (set_local $19
                                (i64.const 0)
                              )
                              (get_local $24)
                            )
                            (block i32
                              (set_local $1
                                (get_local $24)
                              )
                              (loop $while-in123
                                (i32.store8
                                  (tee_local $1
                                    (i32.add
                                      (get_local $1)
                                      (i32.const -1)
                                    )
                                  )
                                  (i32.or
                                    (i32.load8_u
                                      (i32.add
                                        (i32.and
                                          (i32.wrap/i64
                                            (get_local $19)
                                          )
                                          (i32.const 15)
                                        )
                                        (i32.const 1623)
                                      )
                                    )
                                    (get_local $7)
                                  )
                                )
                                (br_if $while-in123
                                  (i64.ne
                                    (tee_local $19
                                      (i64.shr_u
                                        (get_local $19)
                                        (i64.const 4)
                                      )
                                    )
                                    (i64.const 0)
                                  )
                                )
                              )
                              (set_local $19
                                (i64.load
                                  (get_local $17)
                                )
                              )
                              (get_local $1)
                            )
                          )
                        )
                        (set_local $8
                          (i32.add
                            (i32.shr_s
                              (get_local $9)
                              (i32.const 4)
                            )
                            (i32.const 1639)
                          )
                        )
                        (if
                          (tee_local $1
                            (i32.or
                              (i32.eqz
                                (i32.and
                                  (get_local $12)
                                  (i32.const 8)
                                )
                              )
                              (i64.eq
                                (get_local $19)
                                (i64.const 0)
                              )
                            )
                          )
                          (set_local $8
                            (i32.const 1639)
                          )
                        )
                        (set_local $6
                          (if i32
                            (get_local $1)
                            (i32.const 0)
                            (i32.const 2)
                          )
                        )
                        (br $__rjti$8)
                      )
                      (set_local $7
                        (call $_fmt_u
                          (get_local $19)
                          (get_local $24)
                        )
                      )
                      (br $__rjti$8)
                    )
                    (set_local $14
                      (i32.eqz
                        (tee_local $13
                          (call $_memchr
                            (get_local $1)
                            (i32.const 0)
                            (get_local $5)
                          )
                        )
                      )
                    )
                    (set_local $8
                      (i32.sub
                        (get_local $13)
                        (get_local $1)
                      )
                    )
                    (set_local $9
                      (i32.add
                        (get_local $1)
                        (get_local $5)
                      )
                    )
                    (set_local $12
                      (get_local $7)
                    )
                    (set_local $7
                      (if i32
                        (get_local $14)
                        (get_local $5)
                        (get_local $8)
                      )
                    )
                    (set_local $6
                      (i32.const 0)
                    )
                    (set_local $8
                      (i32.const 1639)
                    )
                    (set_local $5
                      (if i32
                        (get_local $14)
                        (get_local $9)
                        (get_local $13)
                      )
                    )
                    (br $__rjto$8)
                  )
                  (set_local $1
                    (i32.const 0)
                  )
                  (set_local $5
                    (i32.const 0)
                  )
                  (set_local $8
                    (get_local $7)
                  )
                  (loop $while-in125
                    (block $while-out124
                      (br_if $while-out124
                        (i32.eqz
                          (tee_local $9
                            (i32.load
                              (get_local $8)
                            )
                          )
                        )
                      )
                      (br_if $while-out124
                        (i32.or
                          (i32.lt_s
                            (tee_local $5
                              (call $_wctomb
                                (get_local $39)
                                (get_local $9)
                              )
                            )
                            (i32.const 0)
                          )
                          (i32.gt_u
                            (get_local $5)
                            (i32.sub
                              (get_local $6)
                              (get_local $1)
                            )
                          )
                        )
                      )
                      (set_local $8
                        (i32.add
                          (get_local $8)
                          (i32.const 4)
                        )
                      )
                      (br_if $while-in125
                        (i32.gt_u
                          (get_local $6)
                          (tee_local $1
                            (i32.add
                              (get_local $5)
                              (get_local $1)
                            )
                          )
                        )
                      )
                    )
                  )
                  (if
                    (i32.lt_s
                      (get_local $5)
                      (i32.const 0)
                    )
                    (block
                      (set_local $16
                        (i32.const -1)
                      )
                      (br $label$break$L1)
                    )
                  )
                  (call $_pad
                    (get_local $0)
                    (i32.const 32)
                    (get_local $10)
                    (get_local $1)
                    (get_local $12)
                  )
                  (if
                    (get_local $1)
                    (block
                      (set_local $5
                        (i32.const 0)
                      )
                      (loop $while-in127
                        (br_if $__rjti$7
                          (i32.eqz
                            (tee_local $8
                              (i32.load
                                (get_local $7)
                              )
                            )
                          )
                        )
                        (br_if $__rjti$7
                          (i32.gt_s
                            (tee_local $5
                              (i32.add
                                (tee_local $8
                                  (call $_wctomb
                                    (get_local $39)
                                    (get_local $8)
                                  )
                                )
                                (get_local $5)
                              )
                            )
                            (get_local $1)
                          )
                        )
                        (if
                          (i32.eqz
                            (i32.and
                              (i32.load
                                (get_local $0)
                              )
                              (i32.const 32)
                            )
                          )
                          (drop
                            (call $___fwritex
                              (get_local $39)
                              (get_local $8)
                              (get_local $0)
                            )
                          )
                        )
                        (set_local $7
                          (i32.add
                            (get_local $7)
                            (i32.const 4)
                          )
                        )
                        (br_if $while-in127
                          (i32.lt_u
                            (get_local $5)
                            (get_local $1)
                          )
                        )
                        (br $__rjti$7)
                      )
                    )
                    (block
                      (set_local $1
                        (i32.const 0)
                      )
                      (br $__rjti$7)
                    )
                  )
                )
                (call $_pad
                  (get_local $0)
                  (i32.const 32)
                  (get_local $10)
                  (get_local $1)
                  (i32.xor
                    (get_local $12)
                    (i32.const 8192)
                  )
                )
                (if
                  (i32.le_s
                    (get_local $10)
                    (get_local $1)
                  )
                  (set_local $10
                    (get_local $1)
                  )
                )
                (set_local $1
                  (get_local $11)
                )
                (br $label$continue$L1)
              )
              (set_local $1
                (i32.and
                  (get_local $12)
                  (i32.const -65537)
                )
              )
              (if
                (i32.gt_s
                  (get_local $5)
                  (i32.const -1)
                )
                (set_local $12
                  (get_local $1)
                )
              )
              (set_local $5
                (if i32
                  (i32.or
                    (get_local $5)
                    (tee_local $9
                      (i64.ne
                        (i64.load
                          (get_local $17)
                        )
                        (i64.const 0)
                      )
                    )
                  )
                  (block i32
                    (set_local $1
                      (get_local $7)
                    )
                    (if
                      (i32.gt_s
                        (get_local $5)
                        (tee_local $7
                          (i32.add
                            (i32.xor
                              (i32.and
                                (get_local $9)
                                (i32.const 1)
                              )
                              (i32.const 1)
                            )
                            (i32.sub
                              (get_local $41)
                              (get_local $7)
                            )
                          )
                        )
                      )
                      (set_local $7
                        (get_local $5)
                      )
                    )
                    (get_local $24)
                  )
                  (block i32
                    (set_local $1
                      (get_local $24)
                    )
                    (set_local $7
                      (i32.const 0)
                    )
                    (get_local $24)
                  )
                )
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 32)
              (if i32
                (i32.lt_s
                  (get_local $10)
                  (tee_local $5
                    (i32.add
                      (if i32
                        (i32.lt_s
                          (get_local $7)
                          (tee_local $9
                            (i32.sub
                              (get_local $5)
                              (get_local $1)
                            )
                          )
                        )
                        (tee_local $7
                          (get_local $9)
                        )
                        (get_local $7)
                      )
                      (get_local $6)
                    )
                  )
                )
                (tee_local $10
                  (get_local $5)
                )
                (get_local $10)
              )
              (get_local $5)
              (get_local $12)
            )
            (if
              (i32.eqz
                (i32.and
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 32)
                )
              )
              (drop
                (call $___fwritex
                  (get_local $8)
                  (get_local $6)
                  (get_local $0)
                )
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 48)
              (get_local $10)
              (get_local $5)
              (i32.xor
                (get_local $12)
                (i32.const 65536)
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 48)
              (get_local $7)
              (get_local $9)
              (i32.const 0)
            )
            (if
              (i32.eqz
                (i32.and
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 32)
                )
              )
              (drop
                (call $___fwritex
                  (get_local $1)
                  (get_local $9)
                  (get_local $0)
                )
              )
            )
            (call $_pad
              (get_local $0)
              (i32.const 32)
              (get_local $10)
              (get_local $5)
              (i32.xor
                (get_local $12)
                (i32.const 8192)
              )
            )
            (set_local $1
              (get_local $11)
            )
            (br $label$continue$L1)
          )
        )
        (br $label$break$L345)
      )
      (if
        (i32.eqz
          (get_local $0)
        )
        (if
          (get_local $18)
          (block
            (set_local $0
              (i32.const 1)
            )
            (loop $while-in130
              (if
                (tee_local $1
                  (i32.load
                    (i32.add
                      (get_local $4)
                      (i32.shl
                        (get_local $0)
                        (i32.const 2)
                      )
                    )
                  )
                )
                (block
                  (call $_pop_arg_374
                    (i32.add
                      (get_local $3)
                      (i32.shl
                        (get_local $0)
                        (i32.const 3)
                      )
                    )
                    (get_local $1)
                    (get_local $2)
                  )
                  (br_if $while-in130
                    (i32.lt_s
                      (tee_local $0
                        (i32.add
                          (get_local $0)
                          (i32.const 1)
                        )
                      )
                      (i32.const 10)
                    )
                  )
                  (set_local $16
                    (i32.const 1)
                  )
                  (br $label$break$L345)
                )
              )
            )
            (loop $while-in132
              (if
                (i32.load
                  (i32.add
                    (get_local $4)
                    (i32.shl
                      (get_local $0)
                      (i32.const 2)
                    )
                  )
                )
                (block
                  (set_local $16
                    (i32.const -1)
                  )
                  (br $label$break$L345)
                )
              )
              (br_if $while-in132
                (i32.lt_s
                  (tee_local $0
                    (i32.add
                      (get_local $0)
                      (i32.const 1)
                    )
                  )
                  (i32.const 10)
                )
              )
              (set_local $16
                (i32.const 1)
              )
            )
          )
          (set_local $16
            (i32.const 0)
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $26)
    )
    (get_local $16)
  )
  (func $___lockfile (param $0 i32) (result i32)
    (i32.const 0)
  )
  (func $___fwritex (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (block $label$break$L5
      (block $__rjti$0
        (br_if $__rjti$0
          (tee_local $3
            (i32.load
              (tee_local $4
                (i32.add
                  (get_local $2)
                  (i32.const 16)
                )
              )
            )
          )
        )
        (if
          (call $___towrite
            (get_local $2)
          )
          (set_local $3
            (i32.const 0)
          )
          (block
            (set_local $3
              (i32.load
                (get_local $4)
              )
            )
            (br $__rjti$0)
          )
        )
        (br $label$break$L5)
      )
      (if
        (i32.lt_u
          (i32.sub
            (get_local $3)
            (tee_local $4
              (i32.load
                (tee_local $5
                  (i32.add
                    (get_local $2)
                    (i32.const 20)
                  )
                )
              )
            )
          )
          (get_local $1)
        )
        (block
          (set_local $3
            (call_indirect $FUNCSIG$iiii
              (get_local $2)
              (get_local $0)
              (get_local $1)
              (i32.add
                (i32.and
                  (i32.load offset=36
                    (get_local $2)
                  )
                  (i32.const 3)
                )
                (i32.const 2)
              )
            )
          )
          (br $label$break$L5)
        )
      )
      (set_local $2
        (block $label$break$L10 i32
          (if i32
            (i32.gt_s
              (i32.load8_s offset=75
                (get_local $2)
              )
              (i32.const -1)
            )
            (block i32
              (set_local $3
                (get_local $1)
              )
              (loop $while-in
                (drop
                  (br_if $label$break$L10
                    (i32.const 0)
                    (i32.eqz
                      (get_local $3)
                    )
                  )
                )
                (if
                  (i32.ne
                    (i32.load8_s
                      (i32.add
                        (get_local $0)
                        (tee_local $6
                          (i32.add
                            (get_local $3)
                            (i32.const -1)
                          )
                        )
                      )
                    )
                    (i32.const 10)
                  )
                  (block
                    (set_local $3
                      (get_local $6)
                    )
                    (br $while-in)
                  )
                )
              )
              (br_if $label$break$L5
                (i32.lt_u
                  (call_indirect $FUNCSIG$iiii
                    (get_local $2)
                    (get_local $0)
                    (get_local $3)
                    (i32.add
                      (i32.and
                        (i32.load offset=36
                          (get_local $2)
                        )
                        (i32.const 3)
                      )
                      (i32.const 2)
                    )
                  )
                  (get_local $3)
                )
              )
              (set_local $4
                (i32.load
                  (get_local $5)
                )
              )
              (set_local $1
                (i32.sub
                  (get_local $1)
                  (get_local $3)
                )
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (get_local $3)
                )
              )
              (get_local $3)
            )
            (i32.const 0)
          )
        )
      )
      (drop
        (call $_memcpy
          (get_local $4)
          (get_local $0)
          (get_local $1)
        )
      )
      (i32.store
        (get_local $5)
        (i32.add
          (i32.load
            (get_local $5)
          )
          (get_local $1)
        )
      )
      (set_local $3
        (i32.add
          (get_local $2)
          (get_local $1)
        )
      )
    )
    (get_local $3)
  )
  (func $_pop_arg_374 (param $0 i32) (param $1 i32) (param $2 i32)
    (local $3 i32)
    (local $4 f64)
    (local $5 i64)
    (block $label$break$L1
      (if
        (i32.le_u
          (get_local $1)
          (i32.const 20)
        )
        (block $switch-default
          (block $switch-case9
            (block $switch-case8
              (block $switch-case7
                (block $switch-case6
                  (block $switch-case5
                    (block $switch-case4
                      (block $switch-case3
                        (block $switch-case2
                          (block $switch-case1
                            (block $switch-case
                              (br_table $switch-case $switch-case1 $switch-case2 $switch-case3 $switch-case4 $switch-case5 $switch-case6 $switch-case7 $switch-case8 $switch-case9 $switch-default
                                (i32.sub
                                  (get_local $1)
                                  (i32.const 9)
                                )
                              )
                            )
                            (set_local $3
                              (i32.load
                                (tee_local $1
                                  (i32.and
                                    (i32.add
                                      (i32.load
                                        (get_local $2)
                                      )
                                      (i32.const 3)
                                    )
                                    (i32.const -4)
                                  )
                                )
                              )
                            )
                            (i32.store
                              (get_local $2)
                              (i32.add
                                (get_local $1)
                                (i32.const 4)
                              )
                            )
                            (i32.store
                              (get_local $0)
                              (get_local $3)
                            )
                            (br $label$break$L1)
                          )
                          (set_local $3
                            (i32.load
                              (tee_local $1
                                (i32.and
                                  (i32.add
                                    (i32.load
                                      (get_local $2)
                                    )
                                    (i32.const 3)
                                  )
                                  (i32.const -4)
                                )
                              )
                            )
                          )
                          (i32.store
                            (get_local $2)
                            (i32.add
                              (get_local $1)
                              (i32.const 4)
                            )
                          )
                          (i64.store
                            (get_local $0)
                            (i64.extend_s/i32
                              (get_local $3)
                            )
                          )
                          (br $label$break$L1)
                        )
                        (set_local $3
                          (i32.load
                            (tee_local $1
                              (i32.and
                                (i32.add
                                  (i32.load
                                    (get_local $2)
                                  )
                                  (i32.const 3)
                                )
                                (i32.const -4)
                              )
                            )
                          )
                        )
                        (i32.store
                          (get_local $2)
                          (i32.add
                            (get_local $1)
                            (i32.const 4)
                          )
                        )
                        (i64.store
                          (get_local $0)
                          (i64.extend_u/i32
                            (get_local $3)
                          )
                        )
                        (br $label$break$L1)
                      )
                      (set_local $5
                        (i64.load
                          (tee_local $1
                            (i32.and
                              (i32.add
                                (i32.load
                                  (get_local $2)
                                )
                                (i32.const 7)
                              )
                              (i32.const -8)
                            )
                          )
                        )
                      )
                      (i32.store
                        (get_local $2)
                        (i32.add
                          (get_local $1)
                          (i32.const 8)
                        )
                      )
                      (i64.store
                        (get_local $0)
                        (get_local $5)
                      )
                      (br $label$break$L1)
                    )
                    (set_local $3
                      (i32.load
                        (tee_local $1
                          (i32.and
                            (i32.add
                              (i32.load
                                (get_local $2)
                              )
                              (i32.const 3)
                            )
                            (i32.const -4)
                          )
                        )
                      )
                    )
                    (i32.store
                      (get_local $2)
                      (i32.add
                        (get_local $1)
                        (i32.const 4)
                      )
                    )
                    (i64.store
                      (get_local $0)
                      (i64.extend_s/i32
                        (i32.shr_s
                          (i32.shl
                            (i32.and
                              (get_local $3)
                              (i32.const 65535)
                            )
                            (i32.const 16)
                          )
                          (i32.const 16)
                        )
                      )
                    )
                    (br $label$break$L1)
                  )
                  (set_local $3
                    (i32.load
                      (tee_local $1
                        (i32.and
                          (i32.add
                            (i32.load
                              (get_local $2)
                            )
                            (i32.const 3)
                          )
                          (i32.const -4)
                        )
                      )
                    )
                  )
                  (i32.store
                    (get_local $2)
                    (i32.add
                      (get_local $1)
                      (i32.const 4)
                    )
                  )
                  (i64.store
                    (get_local $0)
                    (i64.extend_u/i32
                      (i32.and
                        (get_local $3)
                        (i32.const 65535)
                      )
                    )
                  )
                  (br $label$break$L1)
                )
                (set_local $3
                  (i32.load
                    (tee_local $1
                      (i32.and
                        (i32.add
                          (i32.load
                            (get_local $2)
                          )
                          (i32.const 3)
                        )
                        (i32.const -4)
                      )
                    )
                  )
                )
                (i32.store
                  (get_local $2)
                  (i32.add
                    (get_local $1)
                    (i32.const 4)
                  )
                )
                (i64.store
                  (get_local $0)
                  (i64.extend_s/i32
                    (i32.shr_s
                      (i32.shl
                        (i32.and
                          (get_local $3)
                          (i32.const 255)
                        )
                        (i32.const 24)
                      )
                      (i32.const 24)
                    )
                  )
                )
                (br $label$break$L1)
              )
              (set_local $3
                (i32.load
                  (tee_local $1
                    (i32.and
                      (i32.add
                        (i32.load
                          (get_local $2)
                        )
                        (i32.const 3)
                      )
                      (i32.const -4)
                    )
                  )
                )
              )
              (i32.store
                (get_local $2)
                (i32.add
                  (get_local $1)
                  (i32.const 4)
                )
              )
              (i64.store
                (get_local $0)
                (i64.extend_u/i32
                  (i32.and
                    (get_local $3)
                    (i32.const 255)
                  )
                )
              )
              (br $label$break$L1)
            )
            (set_local $4
              (f64.load
                (tee_local $1
                  (i32.and
                    (i32.add
                      (i32.load
                        (get_local $2)
                      )
                      (i32.const 7)
                    )
                    (i32.const -8)
                  )
                )
              )
            )
            (i32.store
              (get_local $2)
              (i32.add
                (get_local $1)
                (i32.const 8)
              )
            )
            (f64.store
              (get_local $0)
              (get_local $4)
            )
            (br $label$break$L1)
          )
          (set_local $4
            (f64.load
              (tee_local $1
                (i32.and
                  (i32.add
                    (i32.load
                      (get_local $2)
                    )
                    (i32.const 7)
                  )
                  (i32.const -8)
                )
              )
            )
          )
          (i32.store
            (get_local $2)
            (i32.add
              (get_local $1)
              (i32.const 8)
            )
          )
          (f64.store
            (get_local $0)
            (get_local $4)
          )
        )
      )
    )
  )
  (func $_fmt_u (param $0 i64) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i64)
    (local $4 i32)
    (set_local $2
      (i32.wrap/i64
        (get_local $0)
      )
    )
    (if
      (i64.gt_u
        (get_local $0)
        (i64.const 4294967295)
      )
      (block
        (loop $while-in
          (i64.store8
            (tee_local $1
              (i32.add
                (get_local $1)
                (i32.const -1)
              )
            )
            (i64.or
              (i64.rem_u
                (get_local $0)
                (i64.const 10)
              )
              (i64.const 48)
            )
          )
          (set_local $3
            (i64.div_u
              (get_local $0)
              (i64.const 10)
            )
          )
          (if
            (i64.gt_u
              (get_local $0)
              (i64.const 42949672959)
            )
            (block
              (set_local $0
                (get_local $3)
              )
              (br $while-in)
            )
          )
        )
        (set_local $2
          (i32.wrap/i64
            (get_local $3)
          )
        )
      )
    )
    (if
      (get_local $2)
      (loop $while-in1
        (i32.store8
          (tee_local $1
            (i32.add
              (get_local $1)
              (i32.const -1)
            )
          )
          (i32.or
            (i32.rem_u
              (get_local $2)
              (i32.const 10)
            )
            (i32.const 48)
          )
        )
        (set_local $4
          (i32.div_u
            (get_local $2)
            (i32.const 10)
          )
        )
        (if
          (i32.ge_u
            (get_local $2)
            (i32.const 10)
          )
          (block
            (set_local $2
              (get_local $4)
            )
            (br $while-in1)
          )
        )
      )
    )
    (get_local $1)
  )
  (func $_strerror (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (i32.const 0)
    )
    (block $__rjto$1
      (block $__rjti$1
        (block $__rjti$0
          (loop $while-in
            (br_if $__rjti$0
              (i32.eq
                (i32.load8_u
                  (i32.add
                    (get_local $1)
                    (i32.const 1693)
                  )
                )
                (get_local $0)
              )
            )
            (br_if $while-in
              (i32.ne
                (tee_local $1
                  (i32.add
                    (get_local $1)
                    (i32.const 1)
                  )
                )
                (i32.const 87)
              )
            )
            (set_local $1
              (i32.const 87)
            )
            (set_local $0
              (i32.const 1781)
            )
            (br $__rjti$1)
          )
        )
        (if
          (get_local $1)
          (block
            (set_local $0
              (i32.const 1781)
            )
            (br $__rjti$1)
          )
          (set_local $0
            (i32.const 1781)
          )
        )
        (br $__rjto$1)
      )
      (loop $while-in1
        (set_local $2
          (get_local $0)
        )
        (loop $while-in3
          (set_local $0
            (i32.add
              (get_local $2)
              (i32.const 1)
            )
          )
          (if
            (i32.load8_s
              (get_local $2)
            )
            (block
              (set_local $2
                (get_local $0)
              )
              (br $while-in3)
            )
          )
        )
        (br_if $while-in1
          (tee_local $1
            (i32.add
              (get_local $1)
              (i32.const -1)
            )
          )
        )
      )
    )
    (get_local $0)
  )
  (func $_pad (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (set_local $7
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 256)
      )
    )
    (set_local $6
      (get_local $7)
    )
    (block $do-once
      (if
        (i32.and
          (i32.gt_s
            (get_local $2)
            (get_local $3)
          )
          (i32.eqz
            (i32.and
              (get_local $4)
              (i32.const 73728)
            )
          )
        )
        (block
          (drop
            (call $_memset
              (get_local $6)
              (get_local $1)
              (if i32
                (i32.gt_u
                  (tee_local $5
                    (i32.sub
                      (get_local $2)
                      (get_local $3)
                    )
                  )
                  (i32.const 256)
                )
                (i32.const 256)
                (get_local $5)
              )
            )
          )
          (set_local $4
            (i32.eqz
              (i32.and
                (tee_local $1
                  (i32.load
                    (get_local $0)
                  )
                )
                (i32.const 32)
              )
            )
          )
          (if
            (i32.gt_u
              (get_local $5)
              (i32.const 255)
            )
            (block
              (loop $while-in
                (if
                  (get_local $4)
                  (block
                    (drop
                      (call $___fwritex
                        (get_local $6)
                        (i32.const 256)
                        (get_local $0)
                      )
                    )
                    (set_local $1
                      (i32.load
                        (get_local $0)
                      )
                    )
                  )
                )
                (set_local $4
                  (i32.eqz
                    (i32.and
                      (get_local $1)
                      (i32.const 32)
                    )
                  )
                )
                (br_if $while-in
                  (i32.gt_u
                    (tee_local $5
                      (i32.add
                        (get_local $5)
                        (i32.const -256)
                      )
                    )
                    (i32.const 255)
                  )
                )
              )
              (br_if $do-once
                (i32.eqz
                  (get_local $4)
                )
              )
              (set_local $5
                (i32.and
                  (i32.sub
                    (get_local $2)
                    (get_local $3)
                  )
                  (i32.const 255)
                )
              )
            )
            (br_if $do-once
              (i32.eqz
                (get_local $4)
              )
            )
          )
          (drop
            (call $___fwritex
              (get_local $6)
              (get_local $5)
              (get_local $0)
            )
          )
        )
      )
    )
    (set_global $STACKTOP
      (get_local $7)
    )
  )
  (func $_wctomb (param $0 i32) (param $1 i32) (result i32)
    (if i32
      (get_local $0)
      (call $_wcrtomb
        (get_local $0)
        (get_local $1)
        (i32.const 0)
      )
      (i32.const 0)
    )
  )
  (func $_frexpl (param $0 f64) (param $1 i32) (result f64)
    (call $_frexp
      (get_local $0)
      (get_local $1)
    )
  )
  (func $_frexp (param $0 f64) (param $1 i32) (result f64)
    (local $2 i64)
    (local $3 i64)
    (block $switch
      (block $switch-default
        (block $switch-case0
          (block $switch-case
            (br_table $switch-case $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-default $switch-case0 $switch-default
              (i32.sub
                (i32.shr_s
                  (i32.shl
                    (i32.and
                      (i32.and
                        (i32.wrap/i64
                          (tee_local $3
                            (i64.shr_u
                              (tee_local $2
                                (i64.reinterpret/f64
                                  (get_local $0)
                                )
                              )
                              (i64.const 52)
                            )
                          )
                        )
                        (i32.const 65535)
                      )
                      (i32.const 2047)
                    )
                    (i32.const 16)
                  )
                  (i32.const 16)
                )
                (i32.const 0)
              )
            )
          )
          (i32.store
            (get_local $1)
            (if i32
              (f64.ne
                (get_local $0)
                (f64.const 0)
              )
              (block i32
                (set_local $0
                  (call $_frexp
                    (f64.mul
                      (get_local $0)
                      (f64.const 18446744073709551615)
                    )
                    (get_local $1)
                  )
                )
                (i32.add
                  (i32.load
                    (get_local $1)
                  )
                  (i32.const -64)
                )
              )
              (i32.const 0)
            )
          )
          (br $switch)
        )
        (br $switch)
      )
      (i32.store
        (get_local $1)
        (i32.add
          (i32.and
            (i32.wrap/i64
              (get_local $3)
            )
            (i32.const 2047)
          )
          (i32.const -1022)
        )
      )
      (set_local $0
        (f64.reinterpret/i64
          (i64.or
            (i64.and
              (get_local $2)
              (i64.const -9218868437227405313)
            )
            (i64.const 4602678819172646912)
          )
        )
      )
    )
    (get_local $0)
  )
  (func $_wcrtomb (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (block $do-once i32
      (if i32
        (get_local $0)
        (block i32
          (if
            (i32.lt_u
              (get_local $1)
              (i32.const 128)
            )
            (block
              (i32.store8
                (get_local $0)
                (get_local $1)
              )
              (br $do-once
                (i32.const 1)
              )
            )
          )
          (if
            (i32.lt_u
              (get_local $1)
              (i32.const 2048)
            )
            (block
              (i32.store8
                (get_local $0)
                (i32.or
                  (i32.shr_u
                    (get_local $1)
                    (i32.const 6)
                  )
                  (i32.const 192)
                )
              )
              (i32.store8 offset=1
                (get_local $0)
                (i32.or
                  (i32.and
                    (get_local $1)
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (br $do-once
                (i32.const 2)
              )
            )
          )
          (if
            (i32.or
              (i32.lt_u
                (get_local $1)
                (i32.const 55296)
              )
              (i32.eq
                (i32.and
                  (get_local $1)
                  (i32.const -8192)
                )
                (i32.const 57344)
              )
            )
            (block
              (i32.store8
                (get_local $0)
                (i32.or
                  (i32.shr_u
                    (get_local $1)
                    (i32.const 12)
                  )
                  (i32.const 224)
                )
              )
              (i32.store8 offset=1
                (get_local $0)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $1)
                      (i32.const 6)
                    )
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.store8 offset=2
                (get_local $0)
                (i32.or
                  (i32.and
                    (get_local $1)
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (br $do-once
                (i32.const 3)
              )
            )
          )
          (if i32
            (i32.lt_u
              (i32.add
                (get_local $1)
                (i32.const -65536)
              )
              (i32.const 1048576)
            )
            (block i32
              (i32.store8
                (get_local $0)
                (i32.or
                  (i32.shr_u
                    (get_local $1)
                    (i32.const 18)
                  )
                  (i32.const 240)
                )
              )
              (i32.store8 offset=1
                (get_local $0)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $1)
                      (i32.const 12)
                    )
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.store8 offset=2
                (get_local $0)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $1)
                      (i32.const 6)
                    )
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.store8 offset=3
                (get_local $0)
                (i32.or
                  (i32.and
                    (get_local $1)
                    (i32.const 63)
                  )
                  (i32.const 128)
                )
              )
              (i32.const 4)
            )
            (block i32
              (i32.store
                (call $___errno_location)
                (i32.const 84)
              )
              (i32.const -1)
            )
          )
        )
        (i32.const 1)
      )
    )
  )
  (func $___towrite (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (i32.load8_s
        (tee_local $2
          (i32.add
            (get_local $0)
            (i32.const 74)
          )
        )
      )
    )
    (i32.store8
      (get_local $2)
      (i32.or
        (i32.add
          (get_local $1)
          (i32.const 255)
        )
        (get_local $1)
      )
    )
    (tee_local $0
      (if i32
        (i32.and
          (tee_local $1
            (i32.load
              (get_local $0)
            )
          )
          (i32.const 8)
        )
        (block i32
          (i32.store
            (get_local $0)
            (i32.or
              (get_local $1)
              (i32.const 32)
            )
          )
          (i32.const -1)
        )
        (block i32
          (i32.store offset=8
            (get_local $0)
            (i32.const 0)
          )
          (i32.store offset=4
            (get_local $0)
            (i32.const 0)
          )
          (i32.store offset=28
            (get_local $0)
            (tee_local $1
              (i32.load offset=44
                (get_local $0)
              )
            )
          )
          (i32.store offset=20
            (get_local $0)
            (get_local $1)
          )
          (i32.store offset=16
            (get_local $0)
            (i32.add
              (get_local $1)
              (i32.load offset=48
                (get_local $0)
              )
            )
          )
          (i32.const 0)
        )
      )
    )
  )
  (func $_printf (param $0 i32) (param $1 i32) (result i32)
    (local $2 i32)
    (local $3 i32)
    (set_local $2
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (i32.store
      (tee_local $3
        (get_local $2)
      )
      (get_local $1)
    )
    (set_local $0
      (call $_vfprintf
        (i32.load
          (i32.const 1024)
        )
        (get_local $0)
        (get_local $3)
      )
    )
    (set_global $STACKTOP
      (get_local $2)
    )
    (get_local $0)
  )
  (func $_malloc (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 i32)
    (local $16 i32)
    (local $17 i32)
    (local $18 i32)
    (local $19 i32)
    (local $20 i32)
    (local $21 i32)
    (set_local $14
      (get_global $STACKTOP)
    )
    (set_global $STACKTOP
      (i32.add
        (get_global $STACKTOP)
        (i32.const 16)
      )
    )
    (set_local $18
      (get_local $14)
    )
    (block $do-once
      (if
        (i32.lt_u
          (get_local $0)
          (i32.const 245)
        )
        (block
          (set_local $3
            (i32.and
              (i32.add
                (get_local $0)
                (i32.const 11)
              )
              (i32.const -8)
            )
          )
          (if
            (i32.and
              (tee_local $0
                (i32.shr_u
                  (tee_local $8
                    (i32.load
                      (i32.const 3636)
                    )
                  )
                  (tee_local $2
                    (i32.shr_u
                      (if i32
                        (i32.lt_u
                          (get_local $0)
                          (i32.const 11)
                        )
                        (tee_local $3
                          (i32.const 16)
                        )
                        (get_local $3)
                      )
                      (i32.const 3)
                    )
                  )
                )
              )
              (i32.const 3)
            )
            (block
              (set_local $4
                (i32.load
                  (tee_local $1
                    (i32.add
                      (tee_local $7
                        (i32.load
                          (tee_local $3
                            (i32.add
                              (tee_local $2
                                (i32.add
                                  (i32.shl
                                    (i32.shl
                                      (tee_local $5
                                        (i32.add
                                          (i32.xor
                                            (i32.and
                                              (get_local $0)
                                              (i32.const 1)
                                            )
                                            (i32.const 1)
                                          )
                                          (get_local $2)
                                        )
                                      )
                                      (i32.const 1)
                                    )
                                    (i32.const 2)
                                  )
                                  (i32.const 3676)
                                )
                              )
                              (i32.const 8)
                            )
                          )
                        )
                      )
                      (i32.const 8)
                    )
                  )
                )
              )
              (if
                (i32.eq
                  (get_local $2)
                  (get_local $4)
                )
                (i32.store
                  (i32.const 3636)
                  (i32.and
                    (get_local $8)
                    (i32.xor
                      (i32.shl
                        (i32.const 1)
                        (get_local $5)
                      )
                      (i32.const -1)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $4)
                      (i32.load
                        (i32.const 3652)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $0
                          (i32.add
                            (get_local $4)
                            (i32.const 12)
                          )
                        )
                      )
                      (get_local $7)
                    )
                    (block
                      (i32.store
                        (get_local $0)
                        (get_local $2)
                      )
                      (i32.store
                        (get_local $3)
                        (get_local $4)
                      )
                    )
                    (call $_abort)
                  )
                )
              )
              (i32.store offset=4
                (get_local $7)
                (i32.or
                  (tee_local $0
                    (i32.shl
                      (get_local $5)
                      (i32.const 3)
                    )
                  )
                  (i32.const 3)
                )
              )
              (i32.store
                (tee_local $0
                  (i32.add
                    (i32.add
                      (get_local $7)
                      (get_local $0)
                    )
                    (i32.const 4)
                  )
                )
                (i32.or
                  (i32.load
                    (get_local $0)
                  )
                  (i32.const 1)
                )
              )
              (set_global $STACKTOP
                (get_local $14)
              )
              (return
                (get_local $1)
              )
            )
          )
          (if
            (i32.gt_u
              (get_local $3)
              (tee_local $16
                (i32.load
                  (i32.const 3644)
                )
              )
            )
            (block
              (if
                (get_local $0)
                (block
                  (set_local $5
                    (i32.and
                      (i32.shr_u
                        (tee_local $0
                          (i32.add
                            (i32.and
                              (tee_local $0
                                (i32.and
                                  (i32.shl
                                    (get_local $0)
                                    (get_local $2)
                                  )
                                  (i32.or
                                    (tee_local $0
                                      (i32.shl
                                        (i32.const 2)
                                        (get_local $2)
                                      )
                                    )
                                    (i32.sub
                                      (i32.const 0)
                                      (get_local $0)
                                    )
                                  )
                                )
                              )
                              (i32.sub
                                (i32.const 0)
                                (get_local $0)
                              )
                            )
                            (i32.const -1)
                          )
                        )
                        (i32.const 12)
                      )
                      (i32.const 16)
                    )
                  )
                  (set_local $12
                    (i32.load
                      (tee_local $5
                        (i32.add
                          (tee_local $9
                            (i32.load
                              (tee_local $2
                                (i32.add
                                  (tee_local $4
                                    (i32.add
                                      (i32.shl
                                        (i32.shl
                                          (tee_local $11
                                            (i32.add
                                              (i32.or
                                                (i32.or
                                                  (i32.or
                                                    (i32.or
                                                      (tee_local $0
                                                        (i32.and
                                                          (i32.shr_u
                                                            (tee_local $2
                                                              (i32.shr_u
                                                                (get_local $0)
                                                                (get_local $5)
                                                              )
                                                            )
                                                            (i32.const 5)
                                                          )
                                                          (i32.const 8)
                                                        )
                                                      )
                                                      (get_local $5)
                                                    )
                                                    (tee_local $0
                                                      (i32.and
                                                        (i32.shr_u
                                                          (tee_local $2
                                                            (i32.shr_u
                                                              (get_local $2)
                                                              (get_local $0)
                                                            )
                                                          )
                                                          (i32.const 2)
                                                        )
                                                        (i32.const 4)
                                                      )
                                                    )
                                                  )
                                                  (tee_local $0
                                                    (i32.and
                                                      (i32.shr_u
                                                        (tee_local $2
                                                          (i32.shr_u
                                                            (get_local $2)
                                                            (get_local $0)
                                                          )
                                                        )
                                                        (i32.const 1)
                                                      )
                                                      (i32.const 2)
                                                    )
                                                  )
                                                )
                                                (tee_local $0
                                                  (i32.and
                                                    (i32.shr_u
                                                      (tee_local $2
                                                        (i32.shr_u
                                                          (get_local $2)
                                                          (get_local $0)
                                                        )
                                                      )
                                                      (i32.const 1)
                                                    )
                                                    (i32.const 1)
                                                  )
                                                )
                                              )
                                              (i32.shr_u
                                                (get_local $2)
                                                (get_local $0)
                                              )
                                            )
                                          )
                                          (i32.const 1)
                                        )
                                        (i32.const 2)
                                      )
                                      (i32.const 3676)
                                    )
                                  )
                                  (i32.const 8)
                                )
                              )
                            )
                          )
                          (i32.const 8)
                        )
                      )
                    )
                  )
                  (if
                    (i32.eq
                      (get_local $4)
                      (get_local $12)
                    )
                    (i32.store
                      (i32.const 3636)
                      (tee_local $7
                        (i32.and
                          (get_local $8)
                          (i32.xor
                            (i32.shl
                              (i32.const 1)
                              (get_local $11)
                            )
                            (i32.const -1)
                          )
                        )
                      )
                    )
                    (block
                      (if
                        (i32.lt_u
                          (get_local $12)
                          (i32.load
                            (i32.const 3652)
                          )
                        )
                        (call $_abort)
                      )
                      (if
                        (i32.eq
                          (i32.load
                            (tee_local $0
                              (i32.add
                                (get_local $12)
                                (i32.const 12)
                              )
                            )
                          )
                          (get_local $9)
                        )
                        (block
                          (i32.store
                            (get_local $0)
                            (get_local $4)
                          )
                          (i32.store
                            (get_local $2)
                            (get_local $12)
                          )
                          (set_local $7
                            (get_local $8)
                          )
                        )
                        (call $_abort)
                      )
                    )
                  )
                  (i32.store offset=4
                    (get_local $9)
                    (i32.or
                      (get_local $3)
                      (i32.const 3)
                    )
                  )
                  (i32.store offset=4
                    (tee_local $4
                      (i32.add
                        (get_local $9)
                        (get_local $3)
                      )
                    )
                    (i32.or
                      (tee_local $11
                        (i32.sub
                          (i32.shl
                            (get_local $11)
                            (i32.const 3)
                          )
                          (get_local $3)
                        )
                      )
                      (i32.const 1)
                    )
                  )
                  (i32.store
                    (i32.add
                      (get_local $4)
                      (get_local $11)
                    )
                    (get_local $11)
                  )
                  (if
                    (get_local $16)
                    (block
                      (set_local $9
                        (i32.load
                          (i32.const 3656)
                        )
                      )
                      (set_local $2
                        (i32.add
                          (i32.shl
                            (i32.shl
                              (tee_local $0
                                (i32.shr_u
                                  (get_local $16)
                                  (i32.const 3)
                                )
                              )
                              (i32.const 1)
                            )
                            (i32.const 2)
                          )
                          (i32.const 3676)
                        )
                      )
                      (if
                        (i32.and
                          (get_local $7)
                          (tee_local $0
                            (i32.shl
                              (i32.const 1)
                              (get_local $0)
                            )
                          )
                        )
                        (if
                          (i32.lt_u
                            (tee_local $0
                              (i32.load
                                (tee_local $3
                                  (i32.add
                                    (get_local $2)
                                    (i32.const 8)
                                  )
                                )
                              )
                            )
                            (i32.load
                              (i32.const 3652)
                            )
                          )
                          (call $_abort)
                          (block
                            (set_local $6
                              (get_local $3)
                            )
                            (set_local $1
                              (get_local $0)
                            )
                          )
                        )
                        (block
                          (i32.store
                            (i32.const 3636)
                            (i32.or
                              (get_local $7)
                              (get_local $0)
                            )
                          )
                          (set_local $6
                            (i32.add
                              (get_local $2)
                              (i32.const 8)
                            )
                          )
                          (set_local $1
                            (get_local $2)
                          )
                        )
                      )
                      (i32.store
                        (get_local $6)
                        (get_local $9)
                      )
                      (i32.store offset=12
                        (get_local $1)
                        (get_local $9)
                      )
                      (i32.store offset=8
                        (get_local $9)
                        (get_local $1)
                      )
                      (i32.store offset=12
                        (get_local $9)
                        (get_local $2)
                      )
                    )
                  )
                  (i32.store
                    (i32.const 3644)
                    (get_local $11)
                  )
                  (i32.store
                    (i32.const 3656)
                    (get_local $4)
                  )
                  (set_global $STACKTOP
                    (get_local $14)
                  )
                  (return
                    (get_local $5)
                  )
                )
              )
              (if
                (tee_local $6
                  (i32.load
                    (i32.const 3640)
                  )
                )
                (block
                  (set_local $2
                    (i32.and
                      (i32.shr_u
                        (tee_local $0
                          (i32.add
                            (i32.and
                              (get_local $6)
                              (i32.sub
                                (i32.const 0)
                                (get_local $6)
                              )
                            )
                            (i32.const -1)
                          )
                        )
                        (i32.const 12)
                      )
                      (i32.const 16)
                    )
                  )
                  (set_local $9
                    (i32.sub
                      (i32.and
                        (i32.load offset=4
                          (tee_local $2
                            (i32.load
                              (i32.add
                                (i32.shl
                                  (i32.add
                                    (i32.or
                                      (i32.or
                                        (i32.or
                                          (i32.or
                                            (tee_local $0
                                              (i32.and
                                                (i32.shr_u
                                                  (tee_local $1
                                                    (i32.shr_u
                                                      (get_local $0)
                                                      (get_local $2)
                                                    )
                                                  )
                                                  (i32.const 5)
                                                )
                                                (i32.const 8)
                                              )
                                            )
                                            (get_local $2)
                                          )
                                          (tee_local $0
                                            (i32.and
                                              (i32.shr_u
                                                (tee_local $1
                                                  (i32.shr_u
                                                    (get_local $1)
                                                    (get_local $0)
                                                  )
                                                )
                                                (i32.const 2)
                                              )
                                              (i32.const 4)
                                            )
                                          )
                                        )
                                        (tee_local $0
                                          (i32.and
                                            (i32.shr_u
                                              (tee_local $1
                                                (i32.shr_u
                                                  (get_local $1)
                                                  (get_local $0)
                                                )
                                              )
                                              (i32.const 1)
                                            )
                                            (i32.const 2)
                                          )
                                        )
                                      )
                                      (tee_local $0
                                        (i32.and
                                          (i32.shr_u
                                            (tee_local $1
                                              (i32.shr_u
                                                (get_local $1)
                                                (get_local $0)
                                              )
                                            )
                                            (i32.const 1)
                                          )
                                          (i32.const 1)
                                        )
                                      )
                                    )
                                    (i32.shr_u
                                      (get_local $1)
                                      (get_local $0)
                                    )
                                  )
                                  (i32.const 2)
                                )
                                (i32.const 3940)
                              )
                            )
                          )
                        )
                        (i32.const -8)
                      )
                      (get_local $3)
                    )
                  )
                  (set_local $1
                    (get_local $2)
                  )
                  (loop $while-in
                    (block $while-out
                      (if
                        (i32.eqz
                          (tee_local $0
                            (i32.load offset=16
                              (get_local $1)
                            )
                          )
                        )
                        (br_if $while-out
                          (i32.eqz
                            (tee_local $0
                              (i32.load offset=20
                                (get_local $1)
                              )
                            )
                          )
                        )
                      )
                      (if
                        (tee_local $7
                          (i32.lt_u
                            (tee_local $1
                              (i32.sub
                                (i32.and
                                  (i32.load offset=4
                                    (get_local $0)
                                  )
                                  (i32.const -8)
                                )
                                (get_local $3)
                              )
                            )
                            (get_local $9)
                          )
                        )
                        (set_local $9
                          (get_local $1)
                        )
                      )
                      (set_local $1
                        (get_local $0)
                      )
                      (if
                        (get_local $7)
                        (set_local $2
                          (get_local $0)
                        )
                      )
                      (br $while-in)
                    )
                  )
                  (if
                    (i32.lt_u
                      (get_local $2)
                      (tee_local $12
                        (i32.load
                          (i32.const 3652)
                        )
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.ge_u
                      (get_local $2)
                      (tee_local $13
                        (i32.add
                          (get_local $2)
                          (get_local $3)
                        )
                      )
                    )
                    (call $_abort)
                  )
                  (set_local $15
                    (i32.load offset=24
                      (get_local $2)
                    )
                  )
                  (block $do-once4
                    (if
                      (i32.eq
                        (tee_local $0
                          (i32.load offset=12
                            (get_local $2)
                          )
                        )
                        (get_local $2)
                      )
                      (block
                        (if
                          (i32.eqz
                            (tee_local $0
                              (i32.load
                                (tee_local $1
                                  (i32.add
                                    (get_local $2)
                                    (i32.const 20)
                                  )
                                )
                              )
                            )
                          )
                          (if
                            (i32.eqz
                              (tee_local $0
                                (i32.load
                                  (tee_local $1
                                    (i32.add
                                      (get_local $2)
                                      (i32.const 16)
                                    )
                                  )
                                )
                              )
                            )
                            (block
                              (set_local $4
                                (i32.const 0)
                              )
                              (br $do-once4)
                            )
                          )
                        )
                        (loop $while-in7
                          (if
                            (tee_local $7
                              (i32.load
                                (tee_local $11
                                  (i32.add
                                    (get_local $0)
                                    (i32.const 20)
                                  )
                                )
                              )
                            )
                            (block
                              (set_local $0
                                (get_local $7)
                              )
                              (set_local $1
                                (get_local $11)
                              )
                              (br $while-in7)
                            )
                          )
                          (if
                            (tee_local $7
                              (i32.load
                                (tee_local $11
                                  (i32.add
                                    (get_local $0)
                                    (i32.const 16)
                                  )
                                )
                              )
                            )
                            (block
                              (set_local $0
                                (get_local $7)
                              )
                              (set_local $1
                                (get_local $11)
                              )
                              (br $while-in7)
                            )
                          )
                        )
                        (if
                          (i32.lt_u
                            (get_local $1)
                            (get_local $12)
                          )
                          (call $_abort)
                          (block
                            (i32.store
                              (get_local $1)
                              (i32.const 0)
                            )
                            (set_local $4
                              (get_local $0)
                            )
                          )
                        )
                      )
                      (block
                        (if
                          (i32.lt_u
                            (tee_local $11
                              (i32.load offset=8
                                (get_local $2)
                              )
                            )
                            (get_local $12)
                          )
                          (call $_abort)
                        )
                        (if
                          (i32.ne
                            (i32.load
                              (tee_local $7
                                (i32.add
                                  (get_local $11)
                                  (i32.const 12)
                                )
                              )
                            )
                            (get_local $2)
                          )
                          (call $_abort)
                        )
                        (if
                          (i32.eq
                            (i32.load
                              (tee_local $1
                                (i32.add
                                  (get_local $0)
                                  (i32.const 8)
                                )
                              )
                            )
                            (get_local $2)
                          )
                          (block
                            (i32.store
                              (get_local $7)
                              (get_local $0)
                            )
                            (i32.store
                              (get_local $1)
                              (get_local $11)
                            )
                            (set_local $4
                              (get_local $0)
                            )
                          )
                          (call $_abort)
                        )
                      )
                    )
                  )
                  (block $do-once8
                    (if
                      (get_local $15)
                      (block
                        (if
                          (i32.eq
                            (get_local $2)
                            (i32.load
                              (tee_local $0
                                (i32.add
                                  (i32.shl
                                    (tee_local $1
                                      (i32.load offset=28
                                        (get_local $2)
                                      )
                                    )
                                    (i32.const 2)
                                  )
                                  (i32.const 3940)
                                )
                              )
                            )
                          )
                          (block
                            (i32.store
                              (get_local $0)
                              (get_local $4)
                            )
                            (if
                              (i32.eqz
                                (get_local $4)
                              )
                              (block
                                (i32.store
                                  (i32.const 3640)
                                  (i32.and
                                    (get_local $6)
                                    (i32.xor
                                      (i32.shl
                                        (i32.const 1)
                                        (get_local $1)
                                      )
                                      (i32.const -1)
                                    )
                                  )
                                )
                                (br $do-once8)
                              )
                            )
                          )
                          (block
                            (if
                              (i32.lt_u
                                (get_local $15)
                                (i32.load
                                  (i32.const 3652)
                                )
                              )
                              (call $_abort)
                            )
                            (if
                              (i32.eq
                                (i32.load
                                  (tee_local $0
                                    (i32.add
                                      (get_local $15)
                                      (i32.const 16)
                                    )
                                  )
                                )
                                (get_local $2)
                              )
                              (i32.store
                                (get_local $0)
                                (get_local $4)
                              )
                              (i32.store offset=20
                                (get_local $15)
                                (get_local $4)
                              )
                            )
                            (br_if $do-once8
                              (i32.eqz
                                (get_local $4)
                              )
                            )
                          )
                        )
                        (if
                          (i32.lt_u
                            (get_local $4)
                            (tee_local $0
                              (i32.load
                                (i32.const 3652)
                              )
                            )
                          )
                          (call $_abort)
                        )
                        (i32.store offset=24
                          (get_local $4)
                          (get_local $15)
                        )
                        (if
                          (tee_local $1
                            (i32.load offset=16
                              (get_local $2)
                            )
                          )
                          (if
                            (i32.lt_u
                              (get_local $1)
                              (get_local $0)
                            )
                            (call $_abort)
                            (block
                              (i32.store offset=16
                                (get_local $4)
                                (get_local $1)
                              )
                              (i32.store offset=24
                                (get_local $1)
                                (get_local $4)
                              )
                            )
                          )
                        )
                        (if
                          (tee_local $0
                            (i32.load offset=20
                              (get_local $2)
                            )
                          )
                          (if
                            (i32.lt_u
                              (get_local $0)
                              (i32.load
                                (i32.const 3652)
                              )
                            )
                            (call $_abort)
                            (block
                              (i32.store offset=20
                                (get_local $4)
                                (get_local $0)
                              )
                              (i32.store offset=24
                                (get_local $0)
                                (get_local $4)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                  (if
                    (i32.lt_u
                      (get_local $9)
                      (i32.const 16)
                    )
                    (block
                      (i32.store offset=4
                        (get_local $2)
                        (i32.or
                          (tee_local $0
                            (i32.add
                              (get_local $9)
                              (get_local $3)
                            )
                          )
                          (i32.const 3)
                        )
                      )
                      (i32.store
                        (tee_local $0
                          (i32.add
                            (i32.add
                              (get_local $2)
                              (get_local $0)
                            )
                            (i32.const 4)
                          )
                        )
                        (i32.or
                          (i32.load
                            (get_local $0)
                          )
                          (i32.const 1)
                        )
                      )
                    )
                    (block
                      (i32.store offset=4
                        (get_local $2)
                        (i32.or
                          (get_local $3)
                          (i32.const 3)
                        )
                      )
                      (i32.store offset=4
                        (get_local $13)
                        (i32.or
                          (get_local $9)
                          (i32.const 1)
                        )
                      )
                      (i32.store
                        (i32.add
                          (get_local $13)
                          (get_local $9)
                        )
                        (get_local $9)
                      )
                      (if
                        (get_local $16)
                        (block
                          (set_local $7
                            (i32.load
                              (i32.const 3656)
                            )
                          )
                          (set_local $3
                            (i32.add
                              (i32.shl
                                (i32.shl
                                  (tee_local $0
                                    (i32.shr_u
                                      (get_local $16)
                                      (i32.const 3)
                                    )
                                  )
                                  (i32.const 1)
                                )
                                (i32.const 2)
                              )
                              (i32.const 3676)
                            )
                          )
                          (if
                            (i32.and
                              (get_local $8)
                              (tee_local $0
                                (i32.shl
                                  (i32.const 1)
                                  (get_local $0)
                                )
                              )
                            )
                            (if
                              (i32.lt_u
                                (tee_local $0
                                  (i32.load
                                    (tee_local $1
                                      (i32.add
                                        (get_local $3)
                                        (i32.const 8)
                                      )
                                    )
                                  )
                                )
                                (i32.load
                                  (i32.const 3652)
                                )
                              )
                              (call $_abort)
                              (block
                                (set_local $10
                                  (get_local $1)
                                )
                                (set_local $5
                                  (get_local $0)
                                )
                              )
                            )
                            (block
                              (i32.store
                                (i32.const 3636)
                                (i32.or
                                  (get_local $8)
                                  (get_local $0)
                                )
                              )
                              (set_local $10
                                (i32.add
                                  (get_local $3)
                                  (i32.const 8)
                                )
                              )
                              (set_local $5
                                (get_local $3)
                              )
                            )
                          )
                          (i32.store
                            (get_local $10)
                            (get_local $7)
                          )
                          (i32.store offset=12
                            (get_local $5)
                            (get_local $7)
                          )
                          (i32.store offset=8
                            (get_local $7)
                            (get_local $5)
                          )
                          (i32.store offset=12
                            (get_local $7)
                            (get_local $3)
                          )
                        )
                      )
                      (i32.store
                        (i32.const 3644)
                        (get_local $9)
                      )
                      (i32.store
                        (i32.const 3656)
                        (get_local $13)
                      )
                    )
                  )
                  (set_global $STACKTOP
                    (get_local $14)
                  )
                  (return
                    (i32.add
                      (get_local $2)
                      (i32.const 8)
                    )
                  )
                )
                (set_local $0
                  (get_local $3)
                )
              )
            )
            (set_local $0
              (get_local $3)
            )
          )
        )
        (if
          (i32.gt_u
            (get_local $0)
            (i32.const -65)
          )
          (set_local $0
            (i32.const -1)
          )
          (block
            (set_local $7
              (i32.and
                (tee_local $0
                  (i32.add
                    (get_local $0)
                    (i32.const 11)
                  )
                )
                (i32.const -8)
              )
            )
            (if
              (tee_local $5
                (i32.load
                  (i32.const 3640)
                )
              )
              (block
                (set_local $17
                  (if i32
                    (tee_local $0
                      (i32.shr_u
                        (get_local $0)
                        (i32.const 8)
                      )
                    )
                    (if i32
                      (i32.gt_u
                        (get_local $7)
                        (i32.const 16777215)
                      )
                      (i32.const 31)
                      (i32.or
                        (i32.and
                          (i32.shr_u
                            (get_local $7)
                            (i32.add
                              (tee_local $0
                                (i32.add
                                  (i32.sub
                                    (i32.const 14)
                                    (i32.or
                                      (i32.or
                                        (tee_local $0
                                          (i32.and
                                            (i32.shr_u
                                              (i32.add
                                                (tee_local $1
                                                  (i32.shl
                                                    (get_local $0)
                                                    (tee_local $3
                                                      (i32.and
                                                        (i32.shr_u
                                                          (i32.add
                                                            (get_local $0)
                                                            (i32.const 1048320)
                                                          )
                                                          (i32.const 16)
                                                        )
                                                        (i32.const 8)
                                                      )
                                                    )
                                                  )
                                                )
                                                (i32.const 520192)
                                              )
                                              (i32.const 16)
                                            )
                                            (i32.const 4)
                                          )
                                        )
                                        (get_local $3)
                                      )
                                      (tee_local $0
                                        (i32.and
                                          (i32.shr_u
                                            (i32.add
                                              (tee_local $1
                                                (i32.shl
                                                  (get_local $1)
                                                  (get_local $0)
                                                )
                                              )
                                              (i32.const 245760)
                                            )
                                            (i32.const 16)
                                          )
                                          (i32.const 2)
                                        )
                                      )
                                    )
                                  )
                                  (i32.shr_u
                                    (i32.shl
                                      (get_local $1)
                                      (get_local $0)
                                    )
                                    (i32.const 15)
                                  )
                                )
                              )
                              (i32.const 7)
                            )
                          )
                          (i32.const 1)
                        )
                        (i32.shl
                          (get_local $0)
                          (i32.const 1)
                        )
                      )
                    )
                    (i32.const 0)
                  )
                )
                (set_local $3
                  (i32.sub
                    (i32.const 0)
                    (get_local $7)
                  )
                )
                (block $__rjto$3
                  (block $__rjti$3
                    (block $__rjti$2
                      (if
                        (tee_local $1
                          (i32.load
                            (i32.add
                              (i32.shl
                                (get_local $17)
                                (i32.const 2)
                              )
                              (i32.const 3940)
                            )
                          )
                        )
                        (block
                          (set_local $0
                            (i32.sub
                              (i32.const 25)
                              (i32.shr_u
                                (get_local $17)
                                (i32.const 1)
                              )
                            )
                          )
                          (set_local $4
                            (i32.const 0)
                          )
                          (set_local $10
                            (i32.shl
                              (get_local $7)
                              (if i32
                                (i32.eq
                                  (get_local $17)
                                  (i32.const 31)
                                )
                                (i32.const 0)
                                (get_local $0)
                              )
                            )
                          )
                          (set_local $0
                            (i32.const 0)
                          )
                          (loop $while-in14
                            (if
                              (i32.lt_u
                                (tee_local $6
                                  (i32.sub
                                    (i32.and
                                      (i32.load offset=4
                                        (get_local $1)
                                      )
                                      (i32.const -8)
                                    )
                                    (get_local $7)
                                  )
                                )
                                (get_local $3)
                              )
                              (if
                                (get_local $6)
                                (block
                                  (set_local $3
                                    (get_local $6)
                                  )
                                  (set_local $0
                                    (get_local $1)
                                  )
                                )
                                (block
                                  (set_local $3
                                    (i32.const 0)
                                  )
                                  (set_local $0
                                    (get_local $1)
                                  )
                                  (br $__rjti$3)
                                )
                              )
                            )
                            (set_local $1
                              (if i32
                                (i32.or
                                  (i32.eqz
                                    (tee_local $19
                                      (i32.load offset=20
                                        (get_local $1)
                                      )
                                    )
                                  )
                                  (i32.eq
                                    (get_local $19)
                                    (tee_local $6
                                      (i32.load
                                        (i32.add
                                          (i32.add
                                            (get_local $1)
                                            (i32.const 16)
                                          )
                                          (i32.shl
                                            (i32.shr_u
                                              (get_local $10)
                                              (i32.const 31)
                                            )
                                            (i32.const 2)
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                                (get_local $4)
                                (get_local $19)
                              )
                            )
                            (set_local $10
                              (i32.shl
                                (get_local $10)
                                (i32.xor
                                  (i32.and
                                    (tee_local $4
                                      (i32.eqz
                                        (get_local $6)
                                      )
                                    )
                                    (i32.const 1)
                                  )
                                  (i32.const 1)
                                )
                              )
                            )
                            (if
                              (get_local $4)
                              (block
                                (set_local $4
                                  (get_local $1)
                                )
                                (set_local $1
                                  (get_local $0)
                                )
                                (br $__rjti$2)
                              )
                              (block
                                (set_local $4
                                  (get_local $1)
                                )
                                (set_local $1
                                  (get_local $6)
                                )
                                (br $while-in14)
                              )
                            )
                          )
                        )
                        (block
                          (set_local $4
                            (i32.const 0)
                          )
                          (set_local $1
                            (i32.const 0)
                          )
                        )
                      )
                    )
                    (br_if $__rjti$3
                      (tee_local $0
                        (if i32
                          (i32.and
                            (i32.eqz
                              (get_local $4)
                            )
                            (i32.eqz
                              (get_local $1)
                            )
                          )
                          (block i32
                            (if
                              (i32.eqz
                                (tee_local $0
                                  (i32.and
                                    (get_local $5)
                                    (i32.or
                                      (tee_local $0
                                        (i32.shl
                                          (i32.const 2)
                                          (get_local $17)
                                        )
                                      )
                                      (i32.sub
                                        (i32.const 0)
                                        (get_local $0)
                                      )
                                    )
                                  )
                                )
                              )
                              (block
                                (set_local $0
                                  (get_local $7)
                                )
                                (br $do-once)
                              )
                            )
                            (set_local $10
                              (i32.and
                                (i32.shr_u
                                  (tee_local $0
                                    (i32.add
                                      (i32.and
                                        (get_local $0)
                                        (i32.sub
                                          (i32.const 0)
                                          (get_local $0)
                                        )
                                      )
                                      (i32.const -1)
                                    )
                                  )
                                  (i32.const 12)
                                )
                                (i32.const 16)
                              )
                            )
                            (i32.load
                              (i32.add
                                (i32.shl
                                  (i32.add
                                    (i32.or
                                      (i32.or
                                        (i32.or
                                          (i32.or
                                            (tee_local $0
                                              (i32.and
                                                (i32.shr_u
                                                  (tee_local $4
                                                    (i32.shr_u
                                                      (get_local $0)
                                                      (get_local $10)
                                                    )
                                                  )
                                                  (i32.const 5)
                                                )
                                                (i32.const 8)
                                              )
                                            )
                                            (get_local $10)
                                          )
                                          (tee_local $0
                                            (i32.and
                                              (i32.shr_u
                                                (tee_local $4
                                                  (i32.shr_u
                                                    (get_local $4)
                                                    (get_local $0)
                                                  )
                                                )
                                                (i32.const 2)
                                              )
                                              (i32.const 4)
                                            )
                                          )
                                        )
                                        (tee_local $0
                                          (i32.and
                                            (i32.shr_u
                                              (tee_local $4
                                                (i32.shr_u
                                                  (get_local $4)
                                                  (get_local $0)
                                                )
                                              )
                                              (i32.const 1)
                                            )
                                            (i32.const 2)
                                          )
                                        )
                                      )
                                      (tee_local $0
                                        (i32.and
                                          (i32.shr_u
                                            (tee_local $4
                                              (i32.shr_u
                                                (get_local $4)
                                                (get_local $0)
                                              )
                                            )
                                            (i32.const 1)
                                          )
                                          (i32.const 1)
                                        )
                                      )
                                    )
                                    (i32.shr_u
                                      (get_local $4)
                                      (get_local $0)
                                    )
                                  )
                                  (i32.const 2)
                                )
                                (i32.const 3940)
                              )
                            )
                          )
                          (get_local $4)
                        )
                      )
                    )
                    (set_local $4
                      (get_local $1)
                    )
                    (br $__rjto$3)
                  )
                  (loop $while-in16
                    (if
                      (tee_local $10
                        (i32.lt_u
                          (tee_local $4
                            (i32.sub
                              (i32.and
                                (i32.load offset=4
                                  (get_local $0)
                                )
                                (i32.const -8)
                              )
                              (get_local $7)
                            )
                          )
                          (get_local $3)
                        )
                      )
                      (set_local $3
                        (get_local $4)
                      )
                    )
                    (if
                      (get_local $10)
                      (set_local $1
                        (get_local $0)
                      )
                    )
                    (if
                      (tee_local $4
                        (i32.load offset=16
                          (get_local $0)
                        )
                      )
                      (block
                        (set_local $0
                          (get_local $4)
                        )
                        (br $while-in16)
                      )
                    )
                    (br_if $while-in16
                      (tee_local $0
                        (i32.load offset=20
                          (get_local $0)
                        )
                      )
                    )
                    (set_local $4
                      (get_local $1)
                    )
                  )
                )
                (if
                  (get_local $4)
                  (if
                    (i32.lt_u
                      (get_local $3)
                      (i32.sub
                        (i32.load
                          (i32.const 3644)
                        )
                        (get_local $7)
                      )
                    )
                    (block
                      (if
                        (i32.lt_u
                          (get_local $4)
                          (tee_local $12
                            (i32.load
                              (i32.const 3652)
                            )
                          )
                        )
                        (call $_abort)
                      )
                      (if
                        (i32.ge_u
                          (get_local $4)
                          (tee_local $6
                            (i32.add
                              (get_local $4)
                              (get_local $7)
                            )
                          )
                        )
                        (call $_abort)
                      )
                      (set_local $10
                        (i32.load offset=24
                          (get_local $4)
                        )
                      )
                      (block $do-once17
                        (if
                          (i32.eq
                            (tee_local $0
                              (i32.load offset=12
                                (get_local $4)
                              )
                            )
                            (get_local $4)
                          )
                          (block
                            (if
                              (i32.eqz
                                (tee_local $0
                                  (i32.load
                                    (tee_local $1
                                      (i32.add
                                        (get_local $4)
                                        (i32.const 20)
                                      )
                                    )
                                  )
                                )
                              )
                              (if
                                (i32.eqz
                                  (tee_local $0
                                    (i32.load
                                      (tee_local $1
                                        (i32.add
                                          (get_local $4)
                                          (i32.const 16)
                                        )
                                      )
                                    )
                                  )
                                )
                                (block
                                  (set_local $13
                                    (i32.const 0)
                                  )
                                  (br $do-once17)
                                )
                              )
                            )
                            (loop $while-in20
                              (if
                                (tee_local $11
                                  (i32.load
                                    (tee_local $9
                                      (i32.add
                                        (get_local $0)
                                        (i32.const 20)
                                      )
                                    )
                                  )
                                )
                                (block
                                  (set_local $0
                                    (get_local $11)
                                  )
                                  (set_local $1
                                    (get_local $9)
                                  )
                                  (br $while-in20)
                                )
                              )
                              (if
                                (tee_local $11
                                  (i32.load
                                    (tee_local $9
                                      (i32.add
                                        (get_local $0)
                                        (i32.const 16)
                                      )
                                    )
                                  )
                                )
                                (block
                                  (set_local $0
                                    (get_local $11)
                                  )
                                  (set_local $1
                                    (get_local $9)
                                  )
                                  (br $while-in20)
                                )
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $1)
                                (get_local $12)
                              )
                              (call $_abort)
                              (block
                                (i32.store
                                  (get_local $1)
                                  (i32.const 0)
                                )
                                (set_local $13
                                  (get_local $0)
                                )
                              )
                            )
                          )
                          (block
                            (if
                              (i32.lt_u
                                (tee_local $9
                                  (i32.load offset=8
                                    (get_local $4)
                                  )
                                )
                                (get_local $12)
                              )
                              (call $_abort)
                            )
                            (if
                              (i32.ne
                                (i32.load
                                  (tee_local $11
                                    (i32.add
                                      (get_local $9)
                                      (i32.const 12)
                                    )
                                  )
                                )
                                (get_local $4)
                              )
                              (call $_abort)
                            )
                            (if
                              (i32.eq
                                (i32.load
                                  (tee_local $1
                                    (i32.add
                                      (get_local $0)
                                      (i32.const 8)
                                    )
                                  )
                                )
                                (get_local $4)
                              )
                              (block
                                (i32.store
                                  (get_local $11)
                                  (get_local $0)
                                )
                                (i32.store
                                  (get_local $1)
                                  (get_local $9)
                                )
                                (set_local $13
                                  (get_local $0)
                                )
                              )
                              (call $_abort)
                            )
                          )
                        )
                      )
                      (block $do-once21
                        (if
                          (get_local $10)
                          (block
                            (if
                              (i32.eq
                                (get_local $4)
                                (i32.load
                                  (tee_local $0
                                    (i32.add
                                      (i32.shl
                                        (tee_local $1
                                          (i32.load offset=28
                                            (get_local $4)
                                          )
                                        )
                                        (i32.const 2)
                                      )
                                      (i32.const 3940)
                                    )
                                  )
                                )
                              )
                              (block
                                (i32.store
                                  (get_local $0)
                                  (get_local $13)
                                )
                                (if
                                  (i32.eqz
                                    (get_local $13)
                                  )
                                  (block
                                    (i32.store
                                      (i32.const 3640)
                                      (tee_local $2
                                        (i32.and
                                          (get_local $5)
                                          (i32.xor
                                            (i32.shl
                                              (i32.const 1)
                                              (get_local $1)
                                            )
                                            (i32.const -1)
                                          )
                                        )
                                      )
                                    )
                                    (br $do-once21)
                                  )
                                )
                              )
                              (block
                                (if
                                  (i32.lt_u
                                    (get_local $10)
                                    (i32.load
                                      (i32.const 3652)
                                    )
                                  )
                                  (call $_abort)
                                )
                                (if
                                  (i32.eq
                                    (i32.load
                                      (tee_local $0
                                        (i32.add
                                          (get_local $10)
                                          (i32.const 16)
                                        )
                                      )
                                    )
                                    (get_local $4)
                                  )
                                  (i32.store
                                    (get_local $0)
                                    (get_local $13)
                                  )
                                  (i32.store offset=20
                                    (get_local $10)
                                    (get_local $13)
                                  )
                                )
                                (if
                                  (i32.eqz
                                    (get_local $13)
                                  )
                                  (block
                                    (set_local $2
                                      (get_local $5)
                                    )
                                    (br $do-once21)
                                  )
                                )
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $13)
                                (tee_local $0
                                  (i32.load
                                    (i32.const 3652)
                                  )
                                )
                              )
                              (call $_abort)
                            )
                            (i32.store offset=24
                              (get_local $13)
                              (get_local $10)
                            )
                            (if
                              (tee_local $1
                                (i32.load offset=16
                                  (get_local $4)
                                )
                              )
                              (if
                                (i32.lt_u
                                  (get_local $1)
                                  (get_local $0)
                                )
                                (call $_abort)
                                (block
                                  (i32.store offset=16
                                    (get_local $13)
                                    (get_local $1)
                                  )
                                  (i32.store offset=24
                                    (get_local $1)
                                    (get_local $13)
                                  )
                                )
                              )
                            )
                            (if
                              (tee_local $0
                                (i32.load offset=20
                                  (get_local $4)
                                )
                              )
                              (if
                                (i32.lt_u
                                  (get_local $0)
                                  (i32.load
                                    (i32.const 3652)
                                  )
                                )
                                (call $_abort)
                                (block
                                  (i32.store offset=20
                                    (get_local $13)
                                    (get_local $0)
                                  )
                                  (i32.store offset=24
                                    (get_local $0)
                                    (get_local $13)
                                  )
                                  (set_local $2
                                    (get_local $5)
                                  )
                                )
                              )
                              (set_local $2
                                (get_local $5)
                              )
                            )
                          )
                          (set_local $2
                            (get_local $5)
                          )
                        )
                      )
                      (block $do-once25
                        (if
                          (i32.lt_u
                            (get_local $3)
                            (i32.const 16)
                          )
                          (block
                            (i32.store offset=4
                              (get_local $4)
                              (i32.or
                                (tee_local $0
                                  (i32.add
                                    (get_local $3)
                                    (get_local $7)
                                  )
                                )
                                (i32.const 3)
                              )
                            )
                            (i32.store
                              (tee_local $0
                                (i32.add
                                  (i32.add
                                    (get_local $4)
                                    (get_local $0)
                                  )
                                  (i32.const 4)
                                )
                              )
                              (i32.or
                                (i32.load
                                  (get_local $0)
                                )
                                (i32.const 1)
                              )
                            )
                          )
                          (block
                            (i32.store offset=4
                              (get_local $4)
                              (i32.or
                                (get_local $7)
                                (i32.const 3)
                              )
                            )
                            (i32.store offset=4
                              (get_local $6)
                              (i32.or
                                (get_local $3)
                                (i32.const 1)
                              )
                            )
                            (i32.store
                              (i32.add
                                (get_local $6)
                                (get_local $3)
                              )
                              (get_local $3)
                            )
                            (set_local $0
                              (i32.shr_u
                                (get_local $3)
                                (i32.const 3)
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $3)
                                (i32.const 256)
                              )
                              (block
                                (set_local $3
                                  (i32.add
                                    (i32.shl
                                      (i32.shl
                                        (get_local $0)
                                        (i32.const 1)
                                      )
                                      (i32.const 2)
                                    )
                                    (i32.const 3676)
                                  )
                                )
                                (if
                                  (i32.and
                                    (tee_local $1
                                      (i32.load
                                        (i32.const 3636)
                                      )
                                    )
                                    (tee_local $0
                                      (i32.shl
                                        (i32.const 1)
                                        (get_local $0)
                                      )
                                    )
                                  )
                                  (if
                                    (i32.lt_u
                                      (tee_local $0
                                        (i32.load
                                          (tee_local $1
                                            (i32.add
                                              (get_local $3)
                                              (i32.const 8)
                                            )
                                          )
                                        )
                                      )
                                      (i32.load
                                        (i32.const 3652)
                                      )
                                    )
                                    (call $_abort)
                                    (block
                                      (set_local $16
                                        (get_local $1)
                                      )
                                      (set_local $8
                                        (get_local $0)
                                      )
                                    )
                                  )
                                  (block
                                    (i32.store
                                      (i32.const 3636)
                                      (i32.or
                                        (get_local $1)
                                        (get_local $0)
                                      )
                                    )
                                    (set_local $16
                                      (i32.add
                                        (get_local $3)
                                        (i32.const 8)
                                      )
                                    )
                                    (set_local $8
                                      (get_local $3)
                                    )
                                  )
                                )
                                (i32.store
                                  (get_local $16)
                                  (get_local $6)
                                )
                                (i32.store offset=12
                                  (get_local $8)
                                  (get_local $6)
                                )
                                (i32.store offset=8
                                  (get_local $6)
                                  (get_local $8)
                                )
                                (i32.store offset=12
                                  (get_local $6)
                                  (get_local $3)
                                )
                                (br $do-once25)
                              )
                            )
                            (set_local $1
                              (i32.add
                                (i32.shl
                                  (tee_local $5
                                    (if i32
                                      (tee_local $0
                                        (i32.shr_u
                                          (get_local $3)
                                          (i32.const 8)
                                        )
                                      )
                                      (if i32
                                        (i32.gt_u
                                          (get_local $3)
                                          (i32.const 16777215)
                                        )
                                        (i32.const 31)
                                        (i32.or
                                          (i32.and
                                            (i32.shr_u
                                              (get_local $3)
                                              (i32.add
                                                (tee_local $0
                                                  (i32.add
                                                    (i32.sub
                                                      (i32.const 14)
                                                      (i32.or
                                                        (i32.or
                                                          (tee_local $0
                                                            (i32.and
                                                              (i32.shr_u
                                                                (i32.add
                                                                  (tee_local $1
                                                                    (i32.shl
                                                                      (get_local $0)
                                                                      (tee_local $5
                                                                        (i32.and
                                                                          (i32.shr_u
                                                                            (i32.add
                                                                              (get_local $0)
                                                                              (i32.const 1048320)
                                                                            )
                                                                            (i32.const 16)
                                                                          )
                                                                          (i32.const 8)
                                                                        )
                                                                      )
                                                                    )
                                                                  )
                                                                  (i32.const 520192)
                                                                )
                                                                (i32.const 16)
                                                              )
                                                              (i32.const 4)
                                                            )
                                                          )
                                                          (get_local $5)
                                                        )
                                                        (tee_local $0
                                                          (i32.and
                                                            (i32.shr_u
                                                              (i32.add
                                                                (tee_local $1
                                                                  (i32.shl
                                                                    (get_local $1)
                                                                    (get_local $0)
                                                                  )
                                                                )
                                                                (i32.const 245760)
                                                              )
                                                              (i32.const 16)
                                                            )
                                                            (i32.const 2)
                                                          )
                                                        )
                                                      )
                                                    )
                                                    (i32.shr_u
                                                      (i32.shl
                                                        (get_local $1)
                                                        (get_local $0)
                                                      )
                                                      (i32.const 15)
                                                    )
                                                  )
                                                )
                                                (i32.const 7)
                                              )
                                            )
                                            (i32.const 1)
                                          )
                                          (i32.shl
                                            (get_local $0)
                                            (i32.const 1)
                                          )
                                        )
                                      )
                                      (i32.const 0)
                                    )
                                  )
                                  (i32.const 2)
                                )
                                (i32.const 3940)
                              )
                            )
                            (i32.store offset=28
                              (get_local $6)
                              (get_local $5)
                            )
                            (i32.store offset=4
                              (tee_local $0
                                (i32.add
                                  (get_local $6)
                                  (i32.const 16)
                                )
                              )
                              (i32.const 0)
                            )
                            (i32.store
                              (get_local $0)
                              (i32.const 0)
                            )
                            (if
                              (i32.eqz
                                (i32.and
                                  (get_local $2)
                                  (tee_local $0
                                    (i32.shl
                                      (i32.const 1)
                                      (get_local $5)
                                    )
                                  )
                                )
                              )
                              (block
                                (i32.store
                                  (i32.const 3640)
                                  (i32.or
                                    (get_local $2)
                                    (get_local $0)
                                  )
                                )
                                (i32.store
                                  (get_local $1)
                                  (get_local $6)
                                )
                                (i32.store offset=24
                                  (get_local $6)
                                  (get_local $1)
                                )
                                (i32.store offset=12
                                  (get_local $6)
                                  (get_local $6)
                                )
                                (i32.store offset=8
                                  (get_local $6)
                                  (get_local $6)
                                )
                                (br $do-once25)
                              )
                            )
                            (set_local $0
                              (i32.load
                                (get_local $1)
                              )
                            )
                            (set_local $1
                              (i32.sub
                                (i32.const 25)
                                (i32.shr_u
                                  (get_local $5)
                                  (i32.const 1)
                                )
                              )
                            )
                            (set_local $5
                              (i32.shl
                                (get_local $3)
                                (if i32
                                  (i32.eq
                                    (get_local $5)
                                    (i32.const 31)
                                  )
                                  (i32.const 0)
                                  (get_local $1)
                                )
                              )
                            )
                            (block $__rjto$1
                              (block $__rjti$1
                                (block $__rjti$0
                                  (loop $while-in28
                                    (br_if $__rjti$1
                                      (i32.eq
                                        (i32.and
                                          (i32.load offset=4
                                            (get_local $0)
                                          )
                                          (i32.const -8)
                                        )
                                        (get_local $3)
                                      )
                                    )
                                    (set_local $2
                                      (i32.shl
                                        (get_local $5)
                                        (i32.const 1)
                                      )
                                    )
                                    (br_if $__rjti$0
                                      (i32.eqz
                                        (tee_local $1
                                          (i32.load
                                            (tee_local $5
                                              (i32.add
                                                (i32.add
                                                  (get_local $0)
                                                  (i32.const 16)
                                                )
                                                (i32.shl
                                                  (i32.shr_u
                                                    (get_local $5)
                                                    (i32.const 31)
                                                  )
                                                  (i32.const 2)
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                    (set_local $5
                                      (get_local $2)
                                    )
                                    (set_local $0
                                      (get_local $1)
                                    )
                                    (br $while-in28)
                                  )
                                )
                                (if
                                  (i32.lt_u
                                    (get_local $5)
                                    (i32.load
                                      (i32.const 3652)
                                    )
                                  )
                                  (call $_abort)
                                  (block
                                    (i32.store
                                      (get_local $5)
                                      (get_local $6)
                                    )
                                    (i32.store offset=24
                                      (get_local $6)
                                      (get_local $0)
                                    )
                                    (i32.store offset=12
                                      (get_local $6)
                                      (get_local $6)
                                    )
                                    (i32.store offset=8
                                      (get_local $6)
                                      (get_local $6)
                                    )
                                    (br $do-once25)
                                  )
                                )
                                (br $__rjto$1)
                              )
                              (if
                                (i32.and
                                  (i32.ge_u
                                    (tee_local $2
                                      (i32.load
                                        (tee_local $3
                                          (i32.add
                                            (get_local $0)
                                            (i32.const 8)
                                          )
                                        )
                                      )
                                    )
                                    (tee_local $1
                                      (i32.load
                                        (i32.const 3652)
                                      )
                                    )
                                  )
                                  (i32.ge_u
                                    (get_local $0)
                                    (get_local $1)
                                  )
                                )
                                (block
                                  (i32.store offset=12
                                    (get_local $2)
                                    (get_local $6)
                                  )
                                  (i32.store
                                    (get_local $3)
                                    (get_local $6)
                                  )
                                  (i32.store offset=8
                                    (get_local $6)
                                    (get_local $2)
                                  )
                                  (i32.store offset=12
                                    (get_local $6)
                                    (get_local $0)
                                  )
                                  (i32.store offset=24
                                    (get_local $6)
                                    (i32.const 0)
                                  )
                                )
                                (call $_abort)
                              )
                            )
                          )
                        )
                      )
                      (set_global $STACKTOP
                        (get_local $14)
                      )
                      (return
                        (i32.add
                          (get_local $4)
                          (i32.const 8)
                        )
                      )
                    )
                    (set_local $0
                      (get_local $7)
                    )
                  )
                  (set_local $0
                    (get_local $7)
                  )
                )
              )
              (set_local $0
                (get_local $7)
              )
            )
          )
        )
      )
    )
    (if
      (i32.ge_u
        (tee_local $1
          (i32.load
            (i32.const 3644)
          )
        )
        (get_local $0)
      )
      (block
        (set_local $2
          (i32.load
            (i32.const 3656)
          )
        )
        (if
          (i32.gt_u
            (tee_local $3
              (i32.sub
                (get_local $1)
                (get_local $0)
              )
            )
            (i32.const 15)
          )
          (block
            (i32.store
              (i32.const 3656)
              (tee_local $1
                (i32.add
                  (get_local $2)
                  (get_local $0)
                )
              )
            )
            (i32.store
              (i32.const 3644)
              (get_local $3)
            )
            (i32.store offset=4
              (get_local $1)
              (i32.or
                (get_local $3)
                (i32.const 1)
              )
            )
            (i32.store
              (i32.add
                (get_local $1)
                (get_local $3)
              )
              (get_local $3)
            )
            (i32.store offset=4
              (get_local $2)
              (i32.or
                (get_local $0)
                (i32.const 3)
              )
            )
          )
          (block
            (i32.store
              (i32.const 3644)
              (i32.const 0)
            )
            (i32.store
              (i32.const 3656)
              (i32.const 0)
            )
            (i32.store offset=4
              (get_local $2)
              (i32.or
                (get_local $1)
                (i32.const 3)
              )
            )
            (i32.store
              (tee_local $0
                (i32.add
                  (i32.add
                    (get_local $2)
                    (get_local $1)
                  )
                  (i32.const 4)
                )
              )
              (i32.or
                (i32.load
                  (get_local $0)
                )
                (i32.const 1)
              )
            )
          )
        )
        (set_global $STACKTOP
          (get_local $14)
        )
        (return
          (i32.add
            (get_local $2)
            (i32.const 8)
          )
        )
      )
    )
    (if
      (i32.gt_u
        (tee_local $10
          (i32.load
            (i32.const 3648)
          )
        )
        (get_local $0)
      )
      (block
        (i32.store
          (i32.const 3648)
          (tee_local $3
            (i32.sub
              (get_local $10)
              (get_local $0)
            )
          )
        )
        (i32.store
          (i32.const 3660)
          (tee_local $1
            (i32.add
              (tee_local $2
                (i32.load
                  (i32.const 3660)
                )
              )
              (get_local $0)
            )
          )
        )
        (i32.store offset=4
          (get_local $1)
          (i32.or
            (get_local $3)
            (i32.const 1)
          )
        )
        (i32.store offset=4
          (get_local $2)
          (i32.or
            (get_local $0)
            (i32.const 3)
          )
        )
        (set_global $STACKTOP
          (get_local $14)
        )
        (return
          (i32.add
            (get_local $2)
            (i32.const 8)
          )
        )
      )
    )
    (if
      (i32.le_u
        (tee_local $6
          (i32.and
            (tee_local $8
              (i32.add
                (tee_local $1
                  (if i32
                    (i32.load
                      (i32.const 4108)
                    )
                    (i32.load
                      (i32.const 4116)
                    )
                    (block i32
                      (i32.store
                        (i32.const 4116)
                        (i32.const 4096)
                      )
                      (i32.store
                        (i32.const 4112)
                        (i32.const 4096)
                      )
                      (i32.store
                        (i32.const 4120)
                        (i32.const -1)
                      )
                      (i32.store
                        (i32.const 4124)
                        (i32.const -1)
                      )
                      (i32.store
                        (i32.const 4128)
                        (i32.const 0)
                      )
                      (i32.store
                        (i32.const 4080)
                        (i32.const 0)
                      )
                      (i32.store
                        (get_local $18)
                        (tee_local $1
                          (i32.xor
                            (i32.and
                              (get_local $18)
                              (i32.const -16)
                            )
                            (i32.const 1431655768)
                          )
                        )
                      )
                      (i32.store
                        (i32.const 4108)
                        (get_local $1)
                      )
                      (i32.const 4096)
                    )
                  )
                )
                (tee_local $13
                  (i32.add
                    (get_local $0)
                    (i32.const 47)
                  )
                )
              )
            )
            (tee_local $4
              (i32.sub
                (i32.const 0)
                (get_local $1)
              )
            )
          )
        )
        (get_local $0)
      )
      (block
        (set_global $STACKTOP
          (get_local $14)
        )
        (return
          (i32.const 0)
        )
      )
    )
    (if
      (tee_local $2
        (i32.load
          (i32.const 4076)
        )
      )
      (if
        (i32.or
          (i32.le_u
            (tee_local $1
              (i32.add
                (tee_local $3
                  (i32.load
                    (i32.const 4068)
                  )
                )
                (get_local $6)
              )
            )
            (get_local $3)
          )
          (i32.gt_u
            (get_local $1)
            (get_local $2)
          )
        )
        (block
          (set_global $STACKTOP
            (get_local $14)
          )
          (return
            (i32.const 0)
          )
        )
      )
    )
    (set_local $7
      (i32.add
        (get_local $0)
        (i32.const 48)
      )
    )
    (block $__rjto$13
      (block $__rjti$13
        (if
          (i32.eqz
            (i32.and
              (i32.load
                (i32.const 4080)
              )
              (i32.const 4)
            )
          )
          (block
            (block $label$break$L274
              (block $__rjti$5
                (block $__rjti$4
                  (br_if $__rjti$4
                    (i32.eqz
                      (tee_local $3
                        (i32.load
                          (i32.const 3660)
                        )
                      )
                    )
                  )
                  (set_local $2
                    (i32.const 4084)
                  )
                  (loop $while-in32
                    (block $while-out31
                      (if
                        (i32.le_u
                          (tee_local $1
                            (i32.load
                              (get_local $2)
                            )
                          )
                          (get_local $3)
                        )
                        (br_if $while-out31
                          (i32.gt_u
                            (i32.add
                              (get_local $1)
                              (i32.load
                                (tee_local $5
                                  (i32.add
                                    (get_local $2)
                                    (i32.const 4)
                                  )
                                )
                              )
                            )
                            (get_local $3)
                          )
                        )
                      )
                      (br_if $__rjti$4
                        (i32.eqz
                          (tee_local $1
                            (i32.load offset=8
                              (get_local $2)
                            )
                          )
                        )
                      )
                      (set_local $2
                        (get_local $1)
                      )
                      (br $while-in32)
                    )
                  )
                  (if
                    (i32.lt_u
                      (tee_local $3
                        (i32.and
                          (i32.sub
                            (get_local $8)
                            (get_local $10)
                          )
                          (get_local $4)
                        )
                      )
                      (i32.const 2147483647)
                    )
                    (if
                      (i32.eq
                        (tee_local $1
                          (call $_sbrk
                            (get_local $3)
                          )
                        )
                        (i32.add
                          (i32.load
                            (get_local $2)
                          )
                          (i32.load
                            (get_local $5)
                          )
                        )
                      )
                      (br_if $__rjti$13
                        (i32.ne
                          (get_local $1)
                          (i32.const -1)
                        )
                      )
                      (block
                        (set_local $2
                          (get_local $1)
                        )
                        (set_local $1
                          (get_local $3)
                        )
                        (br $__rjti$5)
                      )
                    )
                  )
                  (br $label$break$L274)
                )
                (if
                  (i32.ne
                    (tee_local $1
                      (call $_sbrk
                        (i32.const 0)
                      )
                    )
                    (i32.const -1)
                  )
                  (block
                    (set_local $2
                      (i32.sub
                        (i32.and
                          (i32.add
                            (tee_local $5
                              (i32.add
                                (tee_local $2
                                  (i32.load
                                    (i32.const 4112)
                                  )
                                )
                                (i32.const -1)
                              )
                            )
                            (tee_local $3
                              (get_local $1)
                            )
                          )
                          (i32.sub
                            (i32.const 0)
                            (get_local $2)
                          )
                        )
                        (get_local $3)
                      )
                    )
                    (set_local $4
                      (i32.add
                        (tee_local $3
                          (i32.add
                            (if i32
                              (i32.and
                                (get_local $5)
                                (get_local $3)
                              )
                              (get_local $2)
                              (i32.const 0)
                            )
                            (get_local $6)
                          )
                        )
                        (tee_local $5
                          (i32.load
                            (i32.const 4068)
                          )
                        )
                      )
                    )
                    (if
                      (i32.and
                        (i32.gt_u
                          (get_local $3)
                          (get_local $0)
                        )
                        (i32.lt_u
                          (get_local $3)
                          (i32.const 2147483647)
                        )
                      )
                      (block
                        (if
                          (tee_local $2
                            (i32.load
                              (i32.const 4076)
                            )
                          )
                          (br_if $label$break$L274
                            (i32.or
                              (i32.le_u
                                (get_local $4)
                                (get_local $5)
                              )
                              (i32.gt_u
                                (get_local $4)
                                (get_local $2)
                              )
                            )
                          )
                        )
                        (br_if $__rjti$13
                          (i32.eq
                            (tee_local $2
                              (call $_sbrk
                                (get_local $3)
                              )
                            )
                            (get_local $1)
                          )
                        )
                        (set_local $1
                          (get_local $3)
                        )
                        (br $__rjti$5)
                      )
                    )
                  )
                )
                (br $label$break$L274)
              )
              (set_local $5
                (i32.sub
                  (i32.const 0)
                  (get_local $1)
                )
              )
              (if
                (i32.and
                  (i32.gt_u
                    (get_local $7)
                    (get_local $1)
                  )
                  (i32.and
                    (i32.lt_u
                      (get_local $1)
                      (i32.const 2147483647)
                    )
                    (i32.ne
                      (get_local $2)
                      (i32.const -1)
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (tee_local $3
                      (i32.and
                        (i32.add
                          (i32.sub
                            (get_local $13)
                            (get_local $1)
                          )
                          (tee_local $3
                            (i32.load
                              (i32.const 4116)
                            )
                          )
                        )
                        (i32.sub
                          (i32.const 0)
                          (get_local $3)
                        )
                      )
                    )
                    (i32.const 2147483647)
                  )
                  (if
                    (i32.eq
                      (call $_sbrk
                        (get_local $3)
                      )
                      (i32.const -1)
                    )
                    (block
                      (drop
                        (call $_sbrk
                          (get_local $5)
                        )
                      )
                      (br $label$break$L274)
                    )
                    (set_local $3
                      (i32.add
                        (get_local $3)
                        (get_local $1)
                      )
                    )
                  )
                  (set_local $3
                    (get_local $1)
                  )
                )
                (set_local $3
                  (get_local $1)
                )
              )
              (if
                (i32.ne
                  (get_local $2)
                  (i32.const -1)
                )
                (block
                  (set_local $1
                    (get_local $2)
                  )
                  (br $__rjti$13)
                )
              )
            )
            (i32.store
              (i32.const 4080)
              (i32.or
                (i32.load
                  (i32.const 4080)
                )
                (i32.const 4)
              )
            )
          )
        )
        (if
          (i32.lt_u
            (get_local $6)
            (i32.const 2147483647)
          )
          (if
            (i32.and
              (i32.lt_u
                (tee_local $1
                  (call $_sbrk
                    (get_local $6)
                  )
                )
                (tee_local $3
                  (call $_sbrk
                    (i32.const 0)
                  )
                )
              )
              (i32.and
                (i32.ne
                  (get_local $1)
                  (i32.const -1)
                )
                (i32.ne
                  (get_local $3)
                  (i32.const -1)
                )
              )
            )
            (br_if $__rjti$13
              (i32.gt_u
                (tee_local $3
                  (i32.sub
                    (get_local $3)
                    (get_local $1)
                  )
                )
                (i32.add
                  (get_local $0)
                  (i32.const 40)
                )
              )
            )
          )
        )
        (br $__rjto$13)
      )
      (i32.store
        (i32.const 4068)
        (tee_local $2
          (i32.add
            (i32.load
              (i32.const 4068)
            )
            (get_local $3)
          )
        )
      )
      (if
        (i32.gt_u
          (get_local $2)
          (i32.load
            (i32.const 4072)
          )
        )
        (i32.store
          (i32.const 4072)
          (get_local $2)
        )
      )
      (block $do-once38
        (if
          (tee_local $8
            (i32.load
              (i32.const 3660)
            )
          )
          (block
            (set_local $2
              (i32.const 4084)
            )
            (block $__rjto$10
              (block $__rjti$10
                (loop $while-in43
                  (br_if $__rjti$10
                    (i32.eq
                      (get_local $1)
                      (i32.add
                        (tee_local $4
                          (i32.load
                            (get_local $2)
                          )
                        )
                        (tee_local $5
                          (i32.load
                            (tee_local $7
                              (i32.add
                                (get_local $2)
                                (i32.const 4)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                  (br_if $while-in43
                    (tee_local $2
                      (i32.load offset=8
                        (get_local $2)
                      )
                    )
                  )
                )
                (br $__rjto$10)
              )
              (if
                (i32.eqz
                  (i32.and
                    (i32.load offset=12
                      (get_local $2)
                    )
                    (i32.const 8)
                  )
                )
                (if
                  (i32.and
                    (i32.lt_u
                      (get_local $8)
                      (get_local $1)
                    )
                    (i32.ge_u
                      (get_local $8)
                      (get_local $4)
                    )
                  )
                  (block
                    (i32.store
                      (get_local $7)
                      (i32.add
                        (get_local $5)
                        (get_local $3)
                      )
                    )
                    (set_local $5
                      (i32.load
                        (i32.const 3648)
                      )
                    )
                    (set_local $1
                      (i32.and
                        (i32.sub
                          (i32.const 0)
                          (tee_local $2
                            (i32.add
                              (get_local $8)
                              (i32.const 8)
                            )
                          )
                        )
                        (i32.const 7)
                      )
                    )
                    (i32.store
                      (i32.const 3660)
                      (tee_local $2
                        (i32.add
                          (get_local $8)
                          (if i32
                            (i32.and
                              (get_local $2)
                              (i32.const 7)
                            )
                            (get_local $1)
                            (tee_local $1
                              (i32.const 0)
                            )
                          )
                        )
                      )
                    )
                    (i32.store
                      (i32.const 3648)
                      (tee_local $1
                        (i32.add
                          (i32.sub
                            (get_local $3)
                            (get_local $1)
                          )
                          (get_local $5)
                        )
                      )
                    )
                    (i32.store offset=4
                      (get_local $2)
                      (i32.or
                        (get_local $1)
                        (i32.const 1)
                      )
                    )
                    (i32.store offset=4
                      (i32.add
                        (get_local $2)
                        (get_local $1)
                      )
                      (i32.const 40)
                    )
                    (i32.store
                      (i32.const 3664)
                      (i32.load
                        (i32.const 4124)
                      )
                    )
                    (br $do-once38)
                  )
                )
              )
            )
            (if
              (i32.lt_u
                (get_local $1)
                (tee_local $2
                  (i32.load
                    (i32.const 3652)
                  )
                )
              )
              (block
                (i32.store
                  (i32.const 3652)
                  (get_local $1)
                )
                (set_local $2
                  (get_local $1)
                )
              )
            )
            (set_local $10
              (i32.add
                (get_local $1)
                (get_local $3)
              )
            )
            (set_local $5
              (i32.const 4084)
            )
            (block $__rjto$11
              (block $__rjti$11
                (loop $while-in45
                  (br_if $__rjti$11
                    (i32.eq
                      (i32.load
                        (get_local $5)
                      )
                      (get_local $10)
                    )
                  )
                  (br_if $while-in45
                    (tee_local $5
                      (i32.load offset=8
                        (get_local $5)
                      )
                    )
                  )
                  (set_local $5
                    (i32.const 4084)
                  )
                )
                (br $__rjto$11)
              )
              (if
                (i32.and
                  (i32.load offset=12
                    (get_local $5)
                  )
                  (i32.const 8)
                )
                (set_local $5
                  (i32.const 4084)
                )
                (block
                  (i32.store
                    (get_local $5)
                    (get_local $1)
                  )
                  (i32.store
                    (tee_local $5
                      (i32.add
                        (get_local $5)
                        (i32.const 4)
                      )
                    )
                    (i32.add
                      (i32.load
                        (get_local $5)
                      )
                      (get_local $3)
                    )
                  )
                  (set_local $7
                    (i32.and
                      (i32.sub
                        (i32.const 0)
                        (tee_local $4
                          (i32.add
                            (get_local $1)
                            (i32.const 8)
                          )
                        )
                      )
                      (i32.const 7)
                    )
                  )
                  (set_local $3
                    (i32.and
                      (i32.sub
                        (i32.const 0)
                        (tee_local $5
                          (i32.add
                            (get_local $10)
                            (i32.const 8)
                          )
                        )
                      )
                      (i32.const 7)
                    )
                  )
                  (set_local $6
                    (i32.add
                      (tee_local $13
                        (i32.add
                          (get_local $1)
                          (if i32
                            (i32.and
                              (get_local $4)
                              (i32.const 7)
                            )
                            (get_local $7)
                            (i32.const 0)
                          )
                        )
                      )
                      (get_local $0)
                    )
                  )
                  (set_local $7
                    (i32.sub
                      (i32.sub
                        (tee_local $4
                          (i32.add
                            (get_local $10)
                            (if i32
                              (i32.and
                                (get_local $5)
                                (i32.const 7)
                              )
                              (get_local $3)
                              (i32.const 0)
                            )
                          )
                        )
                        (get_local $13)
                      )
                      (get_local $0)
                    )
                  )
                  (i32.store offset=4
                    (get_local $13)
                    (i32.or
                      (get_local $0)
                      (i32.const 3)
                    )
                  )
                  (block $do-once46
                    (if
                      (i32.eq
                        (get_local $4)
                        (get_local $8)
                      )
                      (block
                        (i32.store
                          (i32.const 3648)
                          (tee_local $0
                            (i32.add
                              (i32.load
                                (i32.const 3648)
                              )
                              (get_local $7)
                            )
                          )
                        )
                        (i32.store
                          (i32.const 3660)
                          (get_local $6)
                        )
                        (i32.store offset=4
                          (get_local $6)
                          (i32.or
                            (get_local $0)
                            (i32.const 1)
                          )
                        )
                      )
                      (block
                        (if
                          (i32.eq
                            (get_local $4)
                            (i32.load
                              (i32.const 3656)
                            )
                          )
                          (block
                            (i32.store
                              (i32.const 3644)
                              (tee_local $0
                                (i32.add
                                  (i32.load
                                    (i32.const 3644)
                                  )
                                  (get_local $7)
                                )
                              )
                            )
                            (i32.store
                              (i32.const 3656)
                              (get_local $6)
                            )
                            (i32.store offset=4
                              (get_local $6)
                              (i32.or
                                (get_local $0)
                                (i32.const 1)
                              )
                            )
                            (i32.store
                              (i32.add
                                (get_local $6)
                                (get_local $0)
                              )
                              (get_local $0)
                            )
                            (br $do-once46)
                          )
                        )
                        (i32.store
                          (tee_local $0
                            (i32.add
                              (tee_local $0
                                (if i32
                                  (i32.eq
                                    (i32.and
                                      (tee_local $0
                                        (i32.load offset=4
                                          (get_local $4)
                                        )
                                      )
                                      (i32.const 3)
                                    )
                                    (i32.const 1)
                                  )
                                  (block i32
                                    (set_local $11
                                      (i32.and
                                        (get_local $0)
                                        (i32.const -8)
                                      )
                                    )
                                    (set_local $1
                                      (i32.shr_u
                                        (get_local $0)
                                        (i32.const 3)
                                      )
                                    )
                                    (block $label$break$L326
                                      (if
                                        (i32.lt_u
                                          (get_local $0)
                                          (i32.const 256)
                                        )
                                        (block
                                          (set_local $5
                                            (i32.load offset=12
                                              (get_local $4)
                                            )
                                          )
                                          (block $do-once49
                                            (if
                                              (i32.ne
                                                (tee_local $3
                                                  (i32.load offset=8
                                                    (get_local $4)
                                                  )
                                                )
                                                (tee_local $0
                                                  (i32.add
                                                    (i32.shl
                                                      (i32.shl
                                                        (get_local $1)
                                                        (i32.const 1)
                                                      )
                                                      (i32.const 2)
                                                    )
                                                    (i32.const 3676)
                                                  )
                                                )
                                              )
                                              (block
                                                (if
                                                  (i32.lt_u
                                                    (get_local $3)
                                                    (get_local $2)
                                                  )
                                                  (call $_abort)
                                                )
                                                (br_if $do-once49
                                                  (i32.eq
                                                    (i32.load offset=12
                                                      (get_local $3)
                                                    )
                                                    (get_local $4)
                                                  )
                                                )
                                                (call $_abort)
                                              )
                                            )
                                          )
                                          (if
                                            (i32.eq
                                              (get_local $5)
                                              (get_local $3)
                                            )
                                            (block
                                              (i32.store
                                                (i32.const 3636)
                                                (i32.and
                                                  (i32.load
                                                    (i32.const 3636)
                                                  )
                                                  (i32.xor
                                                    (i32.shl
                                                      (i32.const 1)
                                                      (get_local $1)
                                                    )
                                                    (i32.const -1)
                                                  )
                                                )
                                              )
                                              (br $label$break$L326)
                                            )
                                          )
                                          (block $do-once51
                                            (if
                                              (i32.eq
                                                (get_local $5)
                                                (get_local $0)
                                              )
                                              (set_local $20
                                                (i32.add
                                                  (get_local $5)
                                                  (i32.const 8)
                                                )
                                              )
                                              (block
                                                (if
                                                  (i32.lt_u
                                                    (get_local $5)
                                                    (get_local $2)
                                                  )
                                                  (call $_abort)
                                                )
                                                (if
                                                  (i32.eq
                                                    (i32.load
                                                      (tee_local $0
                                                        (i32.add
                                                          (get_local $5)
                                                          (i32.const 8)
                                                        )
                                                      )
                                                    )
                                                    (get_local $4)
                                                  )
                                                  (block
                                                    (set_local $20
                                                      (get_local $0)
                                                    )
                                                    (br $do-once51)
                                                  )
                                                )
                                                (call $_abort)
                                              )
                                            )
                                          )
                                          (i32.store offset=12
                                            (get_local $3)
                                            (get_local $5)
                                          )
                                          (i32.store
                                            (get_local $20)
                                            (get_local $3)
                                          )
                                        )
                                        (block
                                          (set_local $8
                                            (i32.load offset=24
                                              (get_local $4)
                                            )
                                          )
                                          (block $do-once53
                                            (if
                                              (i32.eq
                                                (tee_local $0
                                                  (i32.load offset=12
                                                    (get_local $4)
                                                  )
                                                )
                                                (get_local $4)
                                              )
                                              (block
                                                (if
                                                  (i32.eqz
                                                    (tee_local $0
                                                      (i32.load
                                                        (tee_local $1
                                                          (i32.add
                                                            (tee_local $3
                                                              (i32.add
                                                                (get_local $4)
                                                                (i32.const 16)
                                                              )
                                                            )
                                                            (i32.const 4)
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                  (if
                                                    (tee_local $0
                                                      (i32.load
                                                        (get_local $3)
                                                      )
                                                    )
                                                    (set_local $1
                                                      (get_local $3)
                                                    )
                                                    (block
                                                      (set_local $12
                                                        (i32.const 0)
                                                      )
                                                      (br $do-once53)
                                                    )
                                                  )
                                                )
                                                (loop $while-in56
                                                  (if
                                                    (tee_local $3
                                                      (i32.load
                                                        (tee_local $5
                                                          (i32.add
                                                            (get_local $0)
                                                            (i32.const 20)
                                                          )
                                                        )
                                                      )
                                                    )
                                                    (block
                                                      (set_local $0
                                                        (get_local $3)
                                                      )
                                                      (set_local $1
                                                        (get_local $5)
                                                      )
                                                      (br $while-in56)
                                                    )
                                                  )
                                                  (if
                                                    (tee_local $3
                                                      (i32.load
                                                        (tee_local $5
                                                          (i32.add
                                                            (get_local $0)
                                                            (i32.const 16)
                                                          )
                                                        )
                                                      )
                                                    )
                                                    (block
                                                      (set_local $0
                                                        (get_local $3)
                                                      )
                                                      (set_local $1
                                                        (get_local $5)
                                                      )
                                                      (br $while-in56)
                                                    )
                                                  )
                                                )
                                                (if
                                                  (i32.lt_u
                                                    (get_local $1)
                                                    (get_local $2)
                                                  )
                                                  (call $_abort)
                                                  (block
                                                    (i32.store
                                                      (get_local $1)
                                                      (i32.const 0)
                                                    )
                                                    (set_local $12
                                                      (get_local $0)
                                                    )
                                                  )
                                                )
                                              )
                                              (block
                                                (if
                                                  (i32.lt_u
                                                    (tee_local $5
                                                      (i32.load offset=8
                                                        (get_local $4)
                                                      )
                                                    )
                                                    (get_local $2)
                                                  )
                                                  (call $_abort)
                                                )
                                                (if
                                                  (i32.ne
                                                    (i32.load
                                                      (tee_local $3
                                                        (i32.add
                                                          (get_local $5)
                                                          (i32.const 12)
                                                        )
                                                      )
                                                    )
                                                    (get_local $4)
                                                  )
                                                  (call $_abort)
                                                )
                                                (if
                                                  (i32.eq
                                                    (i32.load
                                                      (tee_local $1
                                                        (i32.add
                                                          (get_local $0)
                                                          (i32.const 8)
                                                        )
                                                      )
                                                    )
                                                    (get_local $4)
                                                  )
                                                  (block
                                                    (i32.store
                                                      (get_local $3)
                                                      (get_local $0)
                                                    )
                                                    (i32.store
                                                      (get_local $1)
                                                      (get_local $5)
                                                    )
                                                    (set_local $12
                                                      (get_local $0)
                                                    )
                                                  )
                                                  (call $_abort)
                                                )
                                              )
                                            )
                                          )
                                          (br_if $label$break$L326
                                            (i32.eqz
                                              (get_local $8)
                                            )
                                          )
                                          (block $do-once57
                                            (if
                                              (i32.eq
                                                (get_local $4)
                                                (i32.load
                                                  (tee_local $0
                                                    (i32.add
                                                      (i32.shl
                                                        (tee_local $1
                                                          (i32.load offset=28
                                                            (get_local $4)
                                                          )
                                                        )
                                                        (i32.const 2)
                                                      )
                                                      (i32.const 3940)
                                                    )
                                                  )
                                                )
                                              )
                                              (block
                                                (i32.store
                                                  (get_local $0)
                                                  (get_local $12)
                                                )
                                                (br_if $do-once57
                                                  (get_local $12)
                                                )
                                                (i32.store
                                                  (i32.const 3640)
                                                  (i32.and
                                                    (i32.load
                                                      (i32.const 3640)
                                                    )
                                                    (i32.xor
                                                      (i32.shl
                                                        (i32.const 1)
                                                        (get_local $1)
                                                      )
                                                      (i32.const -1)
                                                    )
                                                  )
                                                )
                                                (br $label$break$L326)
                                              )
                                              (block
                                                (if
                                                  (i32.lt_u
                                                    (get_local $8)
                                                    (i32.load
                                                      (i32.const 3652)
                                                    )
                                                  )
                                                  (call $_abort)
                                                )
                                                (if
                                                  (i32.eq
                                                    (i32.load
                                                      (tee_local $0
                                                        (i32.add
                                                          (get_local $8)
                                                          (i32.const 16)
                                                        )
                                                      )
                                                    )
                                                    (get_local $4)
                                                  )
                                                  (i32.store
                                                    (get_local $0)
                                                    (get_local $12)
                                                  )
                                                  (i32.store offset=20
                                                    (get_local $8)
                                                    (get_local $12)
                                                  )
                                                )
                                                (br_if $label$break$L326
                                                  (i32.eqz
                                                    (get_local $12)
                                                  )
                                                )
                                              )
                                            )
                                          )
                                          (if
                                            (i32.lt_u
                                              (get_local $12)
                                              (tee_local $1
                                                (i32.load
                                                  (i32.const 3652)
                                                )
                                              )
                                            )
                                            (call $_abort)
                                          )
                                          (i32.store offset=24
                                            (get_local $12)
                                            (get_local $8)
                                          )
                                          (if
                                            (tee_local $3
                                              (i32.load
                                                (tee_local $0
                                                  (i32.add
                                                    (get_local $4)
                                                    (i32.const 16)
                                                  )
                                                )
                                              )
                                            )
                                            (if
                                              (i32.lt_u
                                                (get_local $3)
                                                (get_local $1)
                                              )
                                              (call $_abort)
                                              (block
                                                (i32.store offset=16
                                                  (get_local $12)
                                                  (get_local $3)
                                                )
                                                (i32.store offset=24
                                                  (get_local $3)
                                                  (get_local $12)
                                                )
                                              )
                                            )
                                          )
                                          (br_if $label$break$L326
                                            (i32.eqz
                                              (tee_local $0
                                                (i32.load offset=4
                                                  (get_local $0)
                                                )
                                              )
                                            )
                                          )
                                          (if
                                            (i32.lt_u
                                              (get_local $0)
                                              (i32.load
                                                (i32.const 3652)
                                              )
                                            )
                                            (call $_abort)
                                            (block
                                              (i32.store offset=20
                                                (get_local $12)
                                                (get_local $0)
                                              )
                                              (i32.store offset=24
                                                (get_local $0)
                                                (get_local $12)
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                    (set_local $7
                                      (i32.add
                                        (get_local $11)
                                        (get_local $7)
                                      )
                                    )
                                    (i32.add
                                      (get_local $4)
                                      (get_local $11)
                                    )
                                  )
                                  (get_local $4)
                                )
                              )
                              (i32.const 4)
                            )
                          )
                          (i32.and
                            (i32.load
                              (get_local $0)
                            )
                            (i32.const -2)
                          )
                        )
                        (i32.store offset=4
                          (get_local $6)
                          (i32.or
                            (get_local $7)
                            (i32.const 1)
                          )
                        )
                        (i32.store
                          (i32.add
                            (get_local $6)
                            (get_local $7)
                          )
                          (get_local $7)
                        )
                        (set_local $0
                          (i32.shr_u
                            (get_local $7)
                            (i32.const 3)
                          )
                        )
                        (if
                          (i32.lt_u
                            (get_local $7)
                            (i32.const 256)
                          )
                          (block
                            (set_local $3
                              (i32.add
                                (i32.shl
                                  (i32.shl
                                    (get_local $0)
                                    (i32.const 1)
                                  )
                                  (i32.const 2)
                                )
                                (i32.const 3676)
                              )
                            )
                            (block $do-once61
                              (if
                                (i32.and
                                  (tee_local $1
                                    (i32.load
                                      (i32.const 3636)
                                    )
                                  )
                                  (tee_local $0
                                    (i32.shl
                                      (i32.const 1)
                                      (get_local $0)
                                    )
                                  )
                                )
                                (block
                                  (if
                                    (i32.ge_u
                                      (tee_local $0
                                        (i32.load
                                          (tee_local $1
                                            (i32.add
                                              (get_local $3)
                                              (i32.const 8)
                                            )
                                          )
                                        )
                                      )
                                      (i32.load
                                        (i32.const 3652)
                                      )
                                    )
                                    (block
                                      (set_local $21
                                        (get_local $1)
                                      )
                                      (set_local $9
                                        (get_local $0)
                                      )
                                      (br $do-once61)
                                    )
                                  )
                                  (call $_abort)
                                )
                                (block
                                  (i32.store
                                    (i32.const 3636)
                                    (i32.or
                                      (get_local $1)
                                      (get_local $0)
                                    )
                                  )
                                  (set_local $21
                                    (i32.add
                                      (get_local $3)
                                      (i32.const 8)
                                    )
                                  )
                                  (set_local $9
                                    (get_local $3)
                                  )
                                )
                              )
                            )
                            (i32.store
                              (get_local $21)
                              (get_local $6)
                            )
                            (i32.store offset=12
                              (get_local $9)
                              (get_local $6)
                            )
                            (i32.store offset=8
                              (get_local $6)
                              (get_local $9)
                            )
                            (i32.store offset=12
                              (get_local $6)
                              (get_local $3)
                            )
                            (br $do-once46)
                          )
                        )
                        (set_local $3
                          (i32.add
                            (i32.shl
                              (tee_local $2
                                (block $do-once63 i32
                                  (if i32
                                    (tee_local $0
                                      (i32.shr_u
                                        (get_local $7)
                                        (i32.const 8)
                                      )
                                    )
                                    (block i32
                                      (drop
                                        (br_if $do-once63
                                          (i32.const 31)
                                          (i32.gt_u
                                            (get_local $7)
                                            (i32.const 16777215)
                                          )
                                        )
                                      )
                                      (i32.or
                                        (i32.and
                                          (i32.shr_u
                                            (get_local $7)
                                            (i32.add
                                              (tee_local $0
                                                (i32.add
                                                  (i32.sub
                                                    (i32.const 14)
                                                    (i32.or
                                                      (i32.or
                                                        (tee_local $0
                                                          (i32.and
                                                            (i32.shr_u
                                                              (i32.add
                                                                (tee_local $1
                                                                  (i32.shl
                                                                    (get_local $0)
                                                                    (tee_local $3
                                                                      (i32.and
                                                                        (i32.shr_u
                                                                          (i32.add
                                                                            (get_local $0)
                                                                            (i32.const 1048320)
                                                                          )
                                                                          (i32.const 16)
                                                                        )
                                                                        (i32.const 8)
                                                                      )
                                                                    )
                                                                  )
                                                                )
                                                                (i32.const 520192)
                                                              )
                                                              (i32.const 16)
                                                            )
                                                            (i32.const 4)
                                                          )
                                                        )
                                                        (get_local $3)
                                                      )
                                                      (tee_local $0
                                                        (i32.and
                                                          (i32.shr_u
                                                            (i32.add
                                                              (tee_local $1
                                                                (i32.shl
                                                                  (get_local $1)
                                                                  (get_local $0)
                                                                )
                                                              )
                                                              (i32.const 245760)
                                                            )
                                                            (i32.const 16)
                                                          )
                                                          (i32.const 2)
                                                        )
                                                      )
                                                    )
                                                  )
                                                  (i32.shr_u
                                                    (i32.shl
                                                      (get_local $1)
                                                      (get_local $0)
                                                    )
                                                    (i32.const 15)
                                                  )
                                                )
                                              )
                                              (i32.const 7)
                                            )
                                          )
                                          (i32.const 1)
                                        )
                                        (i32.shl
                                          (get_local $0)
                                          (i32.const 1)
                                        )
                                      )
                                    )
                                    (i32.const 0)
                                  )
                                )
                              )
                              (i32.const 2)
                            )
                            (i32.const 3940)
                          )
                        )
                        (i32.store offset=28
                          (get_local $6)
                          (get_local $2)
                        )
                        (i32.store offset=4
                          (tee_local $0
                            (i32.add
                              (get_local $6)
                              (i32.const 16)
                            )
                          )
                          (i32.const 0)
                        )
                        (i32.store
                          (get_local $0)
                          (i32.const 0)
                        )
                        (if
                          (i32.eqz
                            (i32.and
                              (tee_local $1
                                (i32.load
                                  (i32.const 3640)
                                )
                              )
                              (tee_local $0
                                (i32.shl
                                  (i32.const 1)
                                  (get_local $2)
                                )
                              )
                            )
                          )
                          (block
                            (i32.store
                              (i32.const 3640)
                              (i32.or
                                (get_local $1)
                                (get_local $0)
                              )
                            )
                            (i32.store
                              (get_local $3)
                              (get_local $6)
                            )
                            (i32.store offset=24
                              (get_local $6)
                              (get_local $3)
                            )
                            (i32.store offset=12
                              (get_local $6)
                              (get_local $6)
                            )
                            (i32.store offset=8
                              (get_local $6)
                              (get_local $6)
                            )
                            (br $do-once46)
                          )
                        )
                        (set_local $0
                          (i32.load
                            (get_local $3)
                          )
                        )
                        (set_local $1
                          (i32.sub
                            (i32.const 25)
                            (i32.shr_u
                              (get_local $2)
                              (i32.const 1)
                            )
                          )
                        )
                        (set_local $2
                          (i32.shl
                            (get_local $7)
                            (if i32
                              (i32.eq
                                (get_local $2)
                                (i32.const 31)
                              )
                              (i32.const 0)
                              (get_local $1)
                            )
                          )
                        )
                        (block $__rjto$7
                          (block $__rjti$7
                            (block $__rjti$6
                              (loop $while-in66
                                (br_if $__rjti$7
                                  (i32.eq
                                    (i32.and
                                      (i32.load offset=4
                                        (get_local $0)
                                      )
                                      (i32.const -8)
                                    )
                                    (get_local $7)
                                  )
                                )
                                (set_local $3
                                  (i32.shl
                                    (get_local $2)
                                    (i32.const 1)
                                  )
                                )
                                (br_if $__rjti$6
                                  (i32.eqz
                                    (tee_local $1
                                      (i32.load
                                        (tee_local $2
                                          (i32.add
                                            (i32.add
                                              (get_local $0)
                                              (i32.const 16)
                                            )
                                            (i32.shl
                                              (i32.shr_u
                                                (get_local $2)
                                                (i32.const 31)
                                              )
                                              (i32.const 2)
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                                (set_local $2
                                  (get_local $3)
                                )
                                (set_local $0
                                  (get_local $1)
                                )
                                (br $while-in66)
                              )
                            )
                            (if
                              (i32.lt_u
                                (get_local $2)
                                (i32.load
                                  (i32.const 3652)
                                )
                              )
                              (call $_abort)
                              (block
                                (i32.store
                                  (get_local $2)
                                  (get_local $6)
                                )
                                (i32.store offset=24
                                  (get_local $6)
                                  (get_local $0)
                                )
                                (i32.store offset=12
                                  (get_local $6)
                                  (get_local $6)
                                )
                                (i32.store offset=8
                                  (get_local $6)
                                  (get_local $6)
                                )
                                (br $do-once46)
                              )
                            )
                            (br $__rjto$7)
                          )
                          (if
                            (i32.and
                              (i32.ge_u
                                (tee_local $2
                                  (i32.load
                                    (tee_local $3
                                      (i32.add
                                        (get_local $0)
                                        (i32.const 8)
                                      )
                                    )
                                  )
                                )
                                (tee_local $1
                                  (i32.load
                                    (i32.const 3652)
                                  )
                                )
                              )
                              (i32.ge_u
                                (get_local $0)
                                (get_local $1)
                              )
                            )
                            (block
                              (i32.store offset=12
                                (get_local $2)
                                (get_local $6)
                              )
                              (i32.store
                                (get_local $3)
                                (get_local $6)
                              )
                              (i32.store offset=8
                                (get_local $6)
                                (get_local $2)
                              )
                              (i32.store offset=12
                                (get_local $6)
                                (get_local $0)
                              )
                              (i32.store offset=24
                                (get_local $6)
                                (i32.const 0)
                              )
                            )
                            (call $_abort)
                          )
                        )
                      )
                    )
                  )
                  (set_global $STACKTOP
                    (get_local $14)
                  )
                  (return
                    (i32.add
                      (get_local $13)
                      (i32.const 8)
                    )
                  )
                )
              )
            )
            (loop $while-in68
              (block $while-out67
                (if
                  (i32.le_u
                    (tee_local $2
                      (i32.load
                        (get_local $5)
                      )
                    )
                    (get_local $8)
                  )
                  (br_if $while-out67
                    (i32.gt_u
                      (tee_local $13
                        (i32.add
                          (get_local $2)
                          (i32.load offset=4
                            (get_local $5)
                          )
                        )
                      )
                      (get_local $8)
                    )
                  )
                )
                (set_local $5
                  (i32.load offset=8
                    (get_local $5)
                  )
                )
                (br $while-in68)
              )
            )
            (set_local $2
              (i32.and
                (i32.sub
                  (i32.const 0)
                  (tee_local $5
                    (i32.add
                      (tee_local $7
                        (i32.add
                          (get_local $13)
                          (i32.const -47)
                        )
                      )
                      (i32.const 8)
                    )
                  )
                )
                (i32.const 7)
              )
            )
            (set_local $10
              (i32.add
                (tee_local $7
                  (if i32
                    (i32.lt_u
                      (tee_local $2
                        (i32.add
                          (get_local $7)
                          (if i32
                            (i32.and
                              (get_local $5)
                              (i32.const 7)
                            )
                            (get_local $2)
                            (i32.const 0)
                          )
                        )
                      )
                      (tee_local $12
                        (i32.add
                          (get_local $8)
                          (i32.const 16)
                        )
                      )
                    )
                    (get_local $8)
                    (get_local $2)
                  )
                )
                (i32.const 8)
              )
            )
            (set_local $5
              (i32.add
                (get_local $7)
                (i32.const 24)
              )
            )
            (set_local $9
              (i32.add
                (get_local $3)
                (i32.const -40)
              )
            )
            (set_local $2
              (i32.and
                (i32.sub
                  (i32.const 0)
                  (tee_local $4
                    (i32.add
                      (get_local $1)
                      (i32.const 8)
                    )
                  )
                )
                (i32.const 7)
              )
            )
            (i32.store
              (i32.const 3660)
              (tee_local $4
                (i32.add
                  (get_local $1)
                  (if i32
                    (i32.and
                      (get_local $4)
                      (i32.const 7)
                    )
                    (get_local $2)
                    (tee_local $2
                      (i32.const 0)
                    )
                  )
                )
              )
            )
            (i32.store
              (i32.const 3648)
              (tee_local $2
                (i32.sub
                  (get_local $9)
                  (get_local $2)
                )
              )
            )
            (i32.store offset=4
              (get_local $4)
              (i32.or
                (get_local $2)
                (i32.const 1)
              )
            )
            (i32.store offset=4
              (i32.add
                (get_local $4)
                (get_local $2)
              )
              (i32.const 40)
            )
            (i32.store
              (i32.const 3664)
              (i32.load
                (i32.const 4124)
              )
            )
            (i32.store
              (tee_local $2
                (i32.add
                  (get_local $7)
                  (i32.const 4)
                )
              )
              (i32.const 27)
            )
            (i64.store align=4
              (get_local $10)
              (i64.load align=4
                (i32.const 4084)
              )
            )
            (i64.store offset=8 align=4
              (get_local $10)
              (i64.load align=4
                (i32.const 4092)
              )
            )
            (i32.store
              (i32.const 4084)
              (get_local $1)
            )
            (i32.store
              (i32.const 4088)
              (get_local $3)
            )
            (i32.store
              (i32.const 4096)
              (i32.const 0)
            )
            (i32.store
              (i32.const 4092)
              (get_local $10)
            )
            (set_local $1
              (get_local $5)
            )
            (loop $while-in70
              (i32.store
                (tee_local $1
                  (i32.add
                    (get_local $1)
                    (i32.const 4)
                  )
                )
                (i32.const 7)
              )
              (br_if $while-in70
                (i32.lt_u
                  (i32.add
                    (get_local $1)
                    (i32.const 4)
                  )
                  (get_local $13)
                )
              )
            )
            (if
              (i32.ne
                (get_local $7)
                (get_local $8)
              )
              (block
                (i32.store
                  (get_local $2)
                  (i32.and
                    (i32.load
                      (get_local $2)
                    )
                    (i32.const -2)
                  )
                )
                (i32.store offset=4
                  (get_local $8)
                  (i32.or
                    (tee_local $4
                      (i32.sub
                        (get_local $7)
                        (get_local $8)
                      )
                    )
                    (i32.const 1)
                  )
                )
                (i32.store
                  (get_local $7)
                  (get_local $4)
                )
                (set_local $1
                  (i32.shr_u
                    (get_local $4)
                    (i32.const 3)
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $4)
                    (i32.const 256)
                  )
                  (block
                    (set_local $2
                      (i32.add
                        (i32.shl
                          (i32.shl
                            (get_local $1)
                            (i32.const 1)
                          )
                          (i32.const 2)
                        )
                        (i32.const 3676)
                      )
                    )
                    (if
                      (i32.and
                        (tee_local $3
                          (i32.load
                            (i32.const 3636)
                          )
                        )
                        (tee_local $1
                          (i32.shl
                            (i32.const 1)
                            (get_local $1)
                          )
                        )
                      )
                      (if
                        (i32.lt_u
                          (tee_local $1
                            (i32.load
                              (tee_local $3
                                (i32.add
                                  (get_local $2)
                                  (i32.const 8)
                                )
                              )
                            )
                          )
                          (i32.load
                            (i32.const 3652)
                          )
                        )
                        (call $_abort)
                        (block
                          (set_local $15
                            (get_local $3)
                          )
                          (set_local $11
                            (get_local $1)
                          )
                        )
                      )
                      (block
                        (i32.store
                          (i32.const 3636)
                          (i32.or
                            (get_local $3)
                            (get_local $1)
                          )
                        )
                        (set_local $15
                          (i32.add
                            (get_local $2)
                            (i32.const 8)
                          )
                        )
                        (set_local $11
                          (get_local $2)
                        )
                      )
                    )
                    (i32.store
                      (get_local $15)
                      (get_local $8)
                    )
                    (i32.store offset=12
                      (get_local $11)
                      (get_local $8)
                    )
                    (i32.store offset=8
                      (get_local $8)
                      (get_local $11)
                    )
                    (i32.store offset=12
                      (get_local $8)
                      (get_local $2)
                    )
                    (br $do-once38)
                  )
                )
                (set_local $2
                  (i32.add
                    (i32.shl
                      (tee_local $5
                        (if i32
                          (tee_local $1
                            (i32.shr_u
                              (get_local $4)
                              (i32.const 8)
                            )
                          )
                          (if i32
                            (i32.gt_u
                              (get_local $4)
                              (i32.const 16777215)
                            )
                            (i32.const 31)
                            (i32.or
                              (i32.and
                                (i32.shr_u
                                  (get_local $4)
                                  (i32.add
                                    (tee_local $1
                                      (i32.add
                                        (i32.sub
                                          (i32.const 14)
                                          (i32.or
                                            (i32.or
                                              (tee_local $1
                                                (i32.and
                                                  (i32.shr_u
                                                    (i32.add
                                                      (tee_local $3
                                                        (i32.shl
                                                          (get_local $1)
                                                          (tee_local $2
                                                            (i32.and
                                                              (i32.shr_u
                                                                (i32.add
                                                                  (get_local $1)
                                                                  (i32.const 1048320)
                                                                )
                                                                (i32.const 16)
                                                              )
                                                              (i32.const 8)
                                                            )
                                                          )
                                                        )
                                                      )
                                                      (i32.const 520192)
                                                    )
                                                    (i32.const 16)
                                                  )
                                                  (i32.const 4)
                                                )
                                              )
                                              (get_local $2)
                                            )
                                            (tee_local $1
                                              (i32.and
                                                (i32.shr_u
                                                  (i32.add
                                                    (tee_local $3
                                                      (i32.shl
                                                        (get_local $3)
                                                        (get_local $1)
                                                      )
                                                    )
                                                    (i32.const 245760)
                                                  )
                                                  (i32.const 16)
                                                )
                                                (i32.const 2)
                                              )
                                            )
                                          )
                                        )
                                        (i32.shr_u
                                          (i32.shl
                                            (get_local $3)
                                            (get_local $1)
                                          )
                                          (i32.const 15)
                                        )
                                      )
                                    )
                                    (i32.const 7)
                                  )
                                )
                                (i32.const 1)
                              )
                              (i32.shl
                                (get_local $1)
                                (i32.const 1)
                              )
                            )
                          )
                          (i32.const 0)
                        )
                      )
                      (i32.const 2)
                    )
                    (i32.const 3940)
                  )
                )
                (i32.store offset=28
                  (get_local $8)
                  (get_local $5)
                )
                (i32.store offset=20
                  (get_local $8)
                  (i32.const 0)
                )
                (i32.store
                  (get_local $12)
                  (i32.const 0)
                )
                (if
                  (i32.eqz
                    (i32.and
                      (tee_local $3
                        (i32.load
                          (i32.const 3640)
                        )
                      )
                      (tee_local $1
                        (i32.shl
                          (i32.const 1)
                          (get_local $5)
                        )
                      )
                    )
                  )
                  (block
                    (i32.store
                      (i32.const 3640)
                      (i32.or
                        (get_local $3)
                        (get_local $1)
                      )
                    )
                    (i32.store
                      (get_local $2)
                      (get_local $8)
                    )
                    (i32.store offset=24
                      (get_local $8)
                      (get_local $2)
                    )
                    (i32.store offset=12
                      (get_local $8)
                      (get_local $8)
                    )
                    (i32.store offset=8
                      (get_local $8)
                      (get_local $8)
                    )
                    (br $do-once38)
                  )
                )
                (set_local $1
                  (i32.load
                    (get_local $2)
                  )
                )
                (set_local $3
                  (i32.sub
                    (i32.const 25)
                    (i32.shr_u
                      (get_local $5)
                      (i32.const 1)
                    )
                  )
                )
                (set_local $5
                  (i32.shl
                    (get_local $4)
                    (if i32
                      (i32.eq
                        (get_local $5)
                        (i32.const 31)
                      )
                      (i32.const 0)
                      (get_local $3)
                    )
                  )
                )
                (block $__rjto$9
                  (block $__rjti$9
                    (block $__rjti$8
                      (loop $while-in72
                        (br_if $__rjti$9
                          (i32.eq
                            (i32.and
                              (i32.load offset=4
                                (get_local $1)
                              )
                              (i32.const -8)
                            )
                            (get_local $4)
                          )
                        )
                        (set_local $2
                          (i32.shl
                            (get_local $5)
                            (i32.const 1)
                          )
                        )
                        (br_if $__rjti$8
                          (i32.eqz
                            (tee_local $3
                              (i32.load
                                (tee_local $5
                                  (i32.add
                                    (i32.add
                                      (get_local $1)
                                      (i32.const 16)
                                    )
                                    (i32.shl
                                      (i32.shr_u
                                        (get_local $5)
                                        (i32.const 31)
                                      )
                                      (i32.const 2)
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                        (set_local $5
                          (get_local $2)
                        )
                        (set_local $1
                          (get_local $3)
                        )
                        (br $while-in72)
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $5)
                        (i32.load
                          (i32.const 3652)
                        )
                      )
                      (call $_abort)
                      (block
                        (i32.store
                          (get_local $5)
                          (get_local $8)
                        )
                        (i32.store offset=24
                          (get_local $8)
                          (get_local $1)
                        )
                        (i32.store offset=12
                          (get_local $8)
                          (get_local $8)
                        )
                        (i32.store offset=8
                          (get_local $8)
                          (get_local $8)
                        )
                        (br $do-once38)
                      )
                    )
                    (br $__rjto$9)
                  )
                  (if
                    (i32.and
                      (i32.ge_u
                        (tee_local $5
                          (i32.load
                            (tee_local $2
                              (i32.add
                                (get_local $1)
                                (i32.const 8)
                              )
                            )
                          )
                        )
                        (tee_local $3
                          (i32.load
                            (i32.const 3652)
                          )
                        )
                      )
                      (i32.ge_u
                        (get_local $1)
                        (get_local $3)
                      )
                    )
                    (block
                      (i32.store offset=12
                        (get_local $5)
                        (get_local $8)
                      )
                      (i32.store
                        (get_local $2)
                        (get_local $8)
                      )
                      (i32.store offset=8
                        (get_local $8)
                        (get_local $5)
                      )
                      (i32.store offset=12
                        (get_local $8)
                        (get_local $1)
                      )
                      (i32.store offset=24
                        (get_local $8)
                        (i32.const 0)
                      )
                    )
                    (call $_abort)
                  )
                )
              )
            )
          )
          (block
            (if
              (i32.or
                (i32.eqz
                  (tee_local $2
                    (i32.load
                      (i32.const 3652)
                    )
                  )
                )
                (i32.lt_u
                  (get_local $1)
                  (get_local $2)
                )
              )
              (i32.store
                (i32.const 3652)
                (get_local $1)
              )
            )
            (i32.store
              (i32.const 4084)
              (get_local $1)
            )
            (i32.store
              (i32.const 4088)
              (get_local $3)
            )
            (i32.store
              (i32.const 4096)
              (i32.const 0)
            )
            (i32.store
              (i32.const 3672)
              (i32.load
                (i32.const 4108)
              )
            )
            (i32.store
              (i32.const 3668)
              (i32.const -1)
            )
            (set_local $2
              (i32.const 0)
            )
            (loop $while-in41
              (i32.store offset=12
                (tee_local $5
                  (i32.add
                    (i32.shl
                      (i32.shl
                        (get_local $2)
                        (i32.const 1)
                      )
                      (i32.const 2)
                    )
                    (i32.const 3676)
                  )
                )
                (get_local $5)
              )
              (i32.store offset=8
                (get_local $5)
                (get_local $5)
              )
              (br_if $while-in41
                (i32.ne
                  (tee_local $2
                    (i32.add
                      (get_local $2)
                      (i32.const 1)
                    )
                  )
                  (i32.const 32)
                )
              )
            )
            (set_local $5
              (i32.add
                (get_local $3)
                (i32.const -40)
              )
            )
            (set_local $3
              (i32.and
                (i32.sub
                  (i32.const 0)
                  (tee_local $2
                    (i32.add
                      (get_local $1)
                      (i32.const 8)
                    )
                  )
                )
                (i32.const 7)
              )
            )
            (i32.store
              (i32.const 3660)
              (tee_local $3
                (i32.add
                  (get_local $1)
                  (tee_local $1
                    (if i32
                      (i32.and
                        (get_local $2)
                        (i32.const 7)
                      )
                      (get_local $3)
                      (i32.const 0)
                    )
                  )
                )
              )
            )
            (i32.store
              (i32.const 3648)
              (tee_local $1
                (i32.sub
                  (get_local $5)
                  (get_local $1)
                )
              )
            )
            (i32.store offset=4
              (get_local $3)
              (i32.or
                (get_local $1)
                (i32.const 1)
              )
            )
            (i32.store offset=4
              (i32.add
                (get_local $3)
                (get_local $1)
              )
              (i32.const 40)
            )
            (i32.store
              (i32.const 3664)
              (i32.load
                (i32.const 4124)
              )
            )
          )
        )
      )
      (if
        (i32.gt_u
          (tee_local $1
            (i32.load
              (i32.const 3648)
            )
          )
          (get_local $0)
        )
        (block
          (i32.store
            (i32.const 3648)
            (tee_local $3
              (i32.sub
                (get_local $1)
                (get_local $0)
              )
            )
          )
          (i32.store
            (i32.const 3660)
            (tee_local $1
              (i32.add
                (tee_local $2
                  (i32.load
                    (i32.const 3660)
                  )
                )
                (get_local $0)
              )
            )
          )
          (i32.store offset=4
            (get_local $1)
            (i32.or
              (get_local $3)
              (i32.const 1)
            )
          )
          (i32.store offset=4
            (get_local $2)
            (i32.or
              (get_local $0)
              (i32.const 3)
            )
          )
          (set_global $STACKTOP
            (get_local $14)
          )
          (return
            (i32.add
              (get_local $2)
              (i32.const 8)
            )
          )
        )
      )
    )
    (i32.store
      (call $___errno_location)
      (i32.const 12)
    )
    (set_global $STACKTOP
      (get_local $14)
    )
    (i32.const 0)
  )
  (func $_free (param $0 i32)
    (local $1 i32)
    (local $2 i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (local $6 i32)
    (local $7 i32)
    (local $8 i32)
    (local $9 i32)
    (local $10 i32)
    (local $11 i32)
    (local $12 i32)
    (local $13 i32)
    (local $14 i32)
    (local $15 i32)
    (if
      (i32.eqz
        (get_local $0)
      )
      (return)
    )
    (if
      (i32.lt_u
        (tee_local $1
          (i32.add
            (get_local $0)
            (i32.const -8)
          )
        )
        (tee_local $11
          (i32.load
            (i32.const 3652)
          )
        )
      )
      (call $_abort)
    )
    (if
      (i32.eq
        (tee_local $8
          (i32.and
            (tee_local $0
              (i32.load
                (i32.add
                  (get_local $0)
                  (i32.const -4)
                )
              )
            )
            (i32.const 3)
          )
        )
        (i32.const 1)
      )
      (call $_abort)
    )
    (set_local $6
      (i32.add
        (get_local $1)
        (tee_local $4
          (i32.and
            (get_local $0)
            (i32.const -8)
          )
        )
      )
    )
    (block $do-once
      (if
        (i32.and
          (get_local $0)
          (i32.const 1)
        )
        (block
          (set_local $3
            (get_local $1)
          )
          (set_local $2
            (get_local $4)
          )
        )
        (block
          (if
            (i32.eqz
              (get_local $8)
            )
            (return)
          )
          (if
            (i32.lt_u
              (tee_local $0
                (i32.add
                  (get_local $1)
                  (i32.sub
                    (i32.const 0)
                    (tee_local $8
                      (i32.load
                        (get_local $1)
                      )
                    )
                  )
                )
              )
              (get_local $11)
            )
            (call $_abort)
          )
          (set_local $1
            (i32.add
              (get_local $8)
              (get_local $4)
            )
          )
          (if
            (i32.eq
              (get_local $0)
              (i32.load
                (i32.const 3656)
              )
            )
            (block
              (if
                (i32.ne
                  (i32.and
                    (tee_local $3
                      (i32.load
                        (tee_local $2
                          (i32.add
                            (get_local $6)
                            (i32.const 4)
                          )
                        )
                      )
                    )
                    (i32.const 3)
                  )
                  (i32.const 3)
                )
                (block
                  (set_local $3
                    (get_local $0)
                  )
                  (set_local $2
                    (get_local $1)
                  )
                  (br $do-once)
                )
              )
              (i32.store
                (i32.const 3644)
                (get_local $1)
              )
              (i32.store
                (get_local $2)
                (i32.and
                  (get_local $3)
                  (i32.const -2)
                )
              )
              (i32.store offset=4
                (get_local $0)
                (i32.or
                  (get_local $1)
                  (i32.const 1)
                )
              )
              (i32.store
                (i32.add
                  (get_local $0)
                  (get_local $1)
                )
                (get_local $1)
              )
              (return)
            )
          )
          (set_local $10
            (i32.shr_u
              (get_local $8)
              (i32.const 3)
            )
          )
          (if
            (i32.lt_u
              (get_local $8)
              (i32.const 256)
            )
            (block
              (set_local $3
                (i32.load offset=12
                  (get_local $0)
                )
              )
              (if
                (i32.ne
                  (tee_local $4
                    (i32.load offset=8
                      (get_local $0)
                    )
                  )
                  (tee_local $2
                    (i32.add
                      (i32.shl
                        (i32.shl
                          (get_local $10)
                          (i32.const 1)
                        )
                        (i32.const 2)
                      )
                      (i32.const 3676)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $4)
                      (get_local $11)
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.ne
                      (i32.load offset=12
                        (get_local $4)
                      )
                      (get_local $0)
                    )
                    (call $_abort)
                  )
                )
              )
              (if
                (i32.eq
                  (get_local $3)
                  (get_local $4)
                )
                (block
                  (i32.store
                    (i32.const 3636)
                    (i32.and
                      (i32.load
                        (i32.const 3636)
                      )
                      (i32.xor
                        (i32.shl
                          (i32.const 1)
                          (get_local $10)
                        )
                        (i32.const -1)
                      )
                    )
                  )
                  (set_local $3
                    (get_local $0)
                  )
                  (set_local $2
                    (get_local $1)
                  )
                  (br $do-once)
                )
              )
              (if
                (i32.eq
                  (get_local $3)
                  (get_local $2)
                )
                (set_local $5
                  (i32.add
                    (get_local $3)
                    (i32.const 8)
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $3)
                      (get_local $11)
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $2
                          (i32.add
                            (get_local $3)
                            (i32.const 8)
                          )
                        )
                      )
                      (get_local $0)
                    )
                    (set_local $5
                      (get_local $2)
                    )
                    (call $_abort)
                  )
                )
              )
              (i32.store offset=12
                (get_local $4)
                (get_local $3)
              )
              (i32.store
                (get_local $5)
                (get_local $4)
              )
              (set_local $3
                (get_local $0)
              )
              (set_local $2
                (get_local $1)
              )
              (br $do-once)
            )
          )
          (set_local $12
            (i32.load offset=24
              (get_local $0)
            )
          )
          (block $do-once0
            (if
              (i32.eq
                (tee_local $4
                  (i32.load offset=12
                    (get_local $0)
                  )
                )
                (get_local $0)
              )
              (block
                (if
                  (tee_local $4
                    (i32.load
                      (tee_local $8
                        (i32.add
                          (tee_local $5
                            (i32.add
                              (get_local $0)
                              (i32.const 16)
                            )
                          )
                          (i32.const 4)
                        )
                      )
                    )
                  )
                  (set_local $5
                    (get_local $8)
                  )
                  (if
                    (i32.eqz
                      (tee_local $4
                        (i32.load
                          (get_local $5)
                        )
                      )
                    )
                    (block
                      (set_local $7
                        (i32.const 0)
                      )
                      (br $do-once0)
                    )
                  )
                )
                (loop $while-in
                  (if
                    (tee_local $10
                      (i32.load
                        (tee_local $8
                          (i32.add
                            (get_local $4)
                            (i32.const 20)
                          )
                        )
                      )
                    )
                    (block
                      (set_local $4
                        (get_local $10)
                      )
                      (set_local $5
                        (get_local $8)
                      )
                      (br $while-in)
                    )
                  )
                  (if
                    (tee_local $10
                      (i32.load
                        (tee_local $8
                          (i32.add
                            (get_local $4)
                            (i32.const 16)
                          )
                        )
                      )
                    )
                    (block
                      (set_local $4
                        (get_local $10)
                      )
                      (set_local $5
                        (get_local $8)
                      )
                      (br $while-in)
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $5)
                    (get_local $11)
                  )
                  (call $_abort)
                  (block
                    (i32.store
                      (get_local $5)
                      (i32.const 0)
                    )
                    (set_local $7
                      (get_local $4)
                    )
                  )
                )
              )
              (block
                (if
                  (i32.lt_u
                    (tee_local $5
                      (i32.load offset=8
                        (get_local $0)
                      )
                    )
                    (get_local $11)
                  )
                  (call $_abort)
                )
                (if
                  (i32.ne
                    (i32.load
                      (tee_local $8
                        (i32.add
                          (get_local $5)
                          (i32.const 12)
                        )
                      )
                    )
                    (get_local $0)
                  )
                  (call $_abort)
                )
                (if
                  (i32.eq
                    (i32.load
                      (tee_local $10
                        (i32.add
                          (get_local $4)
                          (i32.const 8)
                        )
                      )
                    )
                    (get_local $0)
                  )
                  (block
                    (i32.store
                      (get_local $8)
                      (get_local $4)
                    )
                    (i32.store
                      (get_local $10)
                      (get_local $5)
                    )
                    (set_local $7
                      (get_local $4)
                    )
                  )
                  (call $_abort)
                )
              )
            )
          )
          (if
            (get_local $12)
            (block
              (if
                (i32.eq
                  (get_local $0)
                  (i32.load
                    (tee_local $5
                      (i32.add
                        (i32.shl
                          (tee_local $4
                            (i32.load offset=28
                              (get_local $0)
                            )
                          )
                          (i32.const 2)
                        )
                        (i32.const 3940)
                      )
                    )
                  )
                )
                (block
                  (i32.store
                    (get_local $5)
                    (get_local $7)
                  )
                  (if
                    (i32.eqz
                      (get_local $7)
                    )
                    (block
                      (i32.store
                        (i32.const 3640)
                        (i32.and
                          (i32.load
                            (i32.const 3640)
                          )
                          (i32.xor
                            (i32.shl
                              (i32.const 1)
                              (get_local $4)
                            )
                            (i32.const -1)
                          )
                        )
                      )
                      (set_local $3
                        (get_local $0)
                      )
                      (set_local $2
                        (get_local $1)
                      )
                      (br $do-once)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $12)
                      (i32.load
                        (i32.const 3652)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $4
                          (i32.add
                            (get_local $12)
                            (i32.const 16)
                          )
                        )
                      )
                      (get_local $0)
                    )
                    (i32.store
                      (get_local $4)
                      (get_local $7)
                    )
                    (i32.store offset=20
                      (get_local $12)
                      (get_local $7)
                    )
                  )
                  (if
                    (i32.eqz
                      (get_local $7)
                    )
                    (block
                      (set_local $3
                        (get_local $0)
                      )
                      (set_local $2
                        (get_local $1)
                      )
                      (br $do-once)
                    )
                  )
                )
              )
              (if
                (i32.lt_u
                  (get_local $7)
                  (tee_local $5
                    (i32.load
                      (i32.const 3652)
                    )
                  )
                )
                (call $_abort)
              )
              (i32.store offset=24
                (get_local $7)
                (get_local $12)
              )
              (if
                (tee_local $4
                  (i32.load
                    (tee_local $8
                      (i32.add
                        (get_local $0)
                        (i32.const 16)
                      )
                    )
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $4)
                    (get_local $5)
                  )
                  (call $_abort)
                  (block
                    (i32.store offset=16
                      (get_local $7)
                      (get_local $4)
                    )
                    (i32.store offset=24
                      (get_local $4)
                      (get_local $7)
                    )
                  )
                )
              )
              (if
                (tee_local $4
                  (i32.load offset=4
                    (get_local $8)
                  )
                )
                (if
                  (i32.lt_u
                    (get_local $4)
                    (i32.load
                      (i32.const 3652)
                    )
                  )
                  (call $_abort)
                  (block
                    (i32.store offset=20
                      (get_local $7)
                      (get_local $4)
                    )
                    (i32.store offset=24
                      (get_local $4)
                      (get_local $7)
                    )
                    (set_local $3
                      (get_local $0)
                    )
                    (set_local $2
                      (get_local $1)
                    )
                  )
                )
                (block
                  (set_local $3
                    (get_local $0)
                  )
                  (set_local $2
                    (get_local $1)
                  )
                )
              )
            )
            (block
              (set_local $3
                (get_local $0)
              )
              (set_local $2
                (get_local $1)
              )
            )
          )
        )
      )
    )
    (if
      (i32.ge_u
        (get_local $3)
        (get_local $6)
      )
      (call $_abort)
    )
    (if
      (i32.eqz
        (i32.and
          (tee_local $0
            (i32.load
              (tee_local $1
                (i32.add
                  (get_local $6)
                  (i32.const 4)
                )
              )
            )
          )
          (i32.const 1)
        )
      )
      (call $_abort)
    )
    (if
      (i32.and
        (get_local $0)
        (i32.const 2)
      )
      (block
        (i32.store
          (get_local $1)
          (i32.and
            (get_local $0)
            (i32.const -2)
          )
        )
        (i32.store offset=4
          (get_local $3)
          (i32.or
            (get_local $2)
            (i32.const 1)
          )
        )
        (i32.store
          (i32.add
            (get_local $3)
            (get_local $2)
          )
          (get_local $2)
        )
      )
      (block
        (if
          (i32.eq
            (get_local $6)
            (i32.load
              (i32.const 3660)
            )
          )
          (block
            (i32.store
              (i32.const 3648)
              (tee_local $0
                (i32.add
                  (i32.load
                    (i32.const 3648)
                  )
                  (get_local $2)
                )
              )
            )
            (i32.store
              (i32.const 3660)
              (get_local $3)
            )
            (i32.store offset=4
              (get_local $3)
              (i32.or
                (get_local $0)
                (i32.const 1)
              )
            )
            (if
              (i32.ne
                (get_local $3)
                (i32.load
                  (i32.const 3656)
                )
              )
              (return)
            )
            (i32.store
              (i32.const 3656)
              (i32.const 0)
            )
            (i32.store
              (i32.const 3644)
              (i32.const 0)
            )
            (return)
          )
        )
        (if
          (i32.eq
            (get_local $6)
            (i32.load
              (i32.const 3656)
            )
          )
          (block
            (i32.store
              (i32.const 3644)
              (tee_local $0
                (i32.add
                  (i32.load
                    (i32.const 3644)
                  )
                  (get_local $2)
                )
              )
            )
            (i32.store
              (i32.const 3656)
              (get_local $3)
            )
            (i32.store offset=4
              (get_local $3)
              (i32.or
                (get_local $0)
                (i32.const 1)
              )
            )
            (i32.store
              (i32.add
                (get_local $3)
                (get_local $0)
              )
              (get_local $0)
            )
            (return)
          )
        )
        (set_local $5
          (i32.add
            (i32.and
              (get_local $0)
              (i32.const -8)
            )
            (get_local $2)
          )
        )
        (set_local $4
          (i32.shr_u
            (get_local $0)
            (i32.const 3)
          )
        )
        (block $do-once4
          (if
            (i32.lt_u
              (get_local $0)
              (i32.const 256)
            )
            (block
              (set_local $2
                (i32.load offset=12
                  (get_local $6)
                )
              )
              (if
                (i32.ne
                  (tee_local $1
                    (i32.load offset=8
                      (get_local $6)
                    )
                  )
                  (tee_local $0
                    (i32.add
                      (i32.shl
                        (i32.shl
                          (get_local $4)
                          (i32.const 1)
                        )
                        (i32.const 2)
                      )
                      (i32.const 3676)
                    )
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $1)
                      (i32.load
                        (i32.const 3652)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.ne
                      (i32.load offset=12
                        (get_local $1)
                      )
                      (get_local $6)
                    )
                    (call $_abort)
                  )
                )
              )
              (if
                (i32.eq
                  (get_local $2)
                  (get_local $1)
                )
                (block
                  (i32.store
                    (i32.const 3636)
                    (i32.and
                      (i32.load
                        (i32.const 3636)
                      )
                      (i32.xor
                        (i32.shl
                          (i32.const 1)
                          (get_local $4)
                        )
                        (i32.const -1)
                      )
                    )
                  )
                  (br $do-once4)
                )
              )
              (if
                (i32.eq
                  (get_local $2)
                  (get_local $0)
                )
                (set_local $14
                  (i32.add
                    (get_local $2)
                    (i32.const 8)
                  )
                )
                (block
                  (if
                    (i32.lt_u
                      (get_local $2)
                      (i32.load
                        (i32.const 3652)
                      )
                    )
                    (call $_abort)
                  )
                  (if
                    (i32.eq
                      (i32.load
                        (tee_local $0
                          (i32.add
                            (get_local $2)
                            (i32.const 8)
                          )
                        )
                      )
                      (get_local $6)
                    )
                    (set_local $14
                      (get_local $0)
                    )
                    (call $_abort)
                  )
                )
              )
              (i32.store offset=12
                (get_local $1)
                (get_local $2)
              )
              (i32.store
                (get_local $14)
                (get_local $1)
              )
            )
            (block
              (set_local $7
                (i32.load offset=24
                  (get_local $6)
                )
              )
              (block $do-once6
                (if
                  (i32.eq
                    (tee_local $0
                      (i32.load offset=12
                        (get_local $6)
                      )
                    )
                    (get_local $6)
                  )
                  (block
                    (if
                      (tee_local $0
                        (i32.load
                          (tee_local $1
                            (i32.add
                              (tee_local $2
                                (i32.add
                                  (get_local $6)
                                  (i32.const 16)
                                )
                              )
                              (i32.const 4)
                            )
                          )
                        )
                      )
                      (set_local $2
                        (get_local $1)
                      )
                      (if
                        (i32.eqz
                          (tee_local $0
                            (i32.load
                              (get_local $2)
                            )
                          )
                        )
                        (block
                          (set_local $9
                            (i32.const 0)
                          )
                          (br $do-once6)
                        )
                      )
                    )
                    (loop $while-in9
                      (if
                        (tee_local $4
                          (i32.load
                            (tee_local $1
                              (i32.add
                                (get_local $0)
                                (i32.const 20)
                              )
                            )
                          )
                        )
                        (block
                          (set_local $0
                            (get_local $4)
                          )
                          (set_local $2
                            (get_local $1)
                          )
                          (br $while-in9)
                        )
                      )
                      (if
                        (tee_local $4
                          (i32.load
                            (tee_local $1
                              (i32.add
                                (get_local $0)
                                (i32.const 16)
                              )
                            )
                          )
                        )
                        (block
                          (set_local $0
                            (get_local $4)
                          )
                          (set_local $2
                            (get_local $1)
                          )
                          (br $while-in9)
                        )
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $2)
                        (i32.load
                          (i32.const 3652)
                        )
                      )
                      (call $_abort)
                      (block
                        (i32.store
                          (get_local $2)
                          (i32.const 0)
                        )
                        (set_local $9
                          (get_local $0)
                        )
                      )
                    )
                  )
                  (block
                    (if
                      (i32.lt_u
                        (tee_local $2
                          (i32.load offset=8
                            (get_local $6)
                          )
                        )
                        (i32.load
                          (i32.const 3652)
                        )
                      )
                      (call $_abort)
                    )
                    (if
                      (i32.ne
                        (i32.load
                          (tee_local $1
                            (i32.add
                              (get_local $2)
                              (i32.const 12)
                            )
                          )
                        )
                        (get_local $6)
                      )
                      (call $_abort)
                    )
                    (if
                      (i32.eq
                        (i32.load
                          (tee_local $4
                            (i32.add
                              (get_local $0)
                              (i32.const 8)
                            )
                          )
                        )
                        (get_local $6)
                      )
                      (block
                        (i32.store
                          (get_local $1)
                          (get_local $0)
                        )
                        (i32.store
                          (get_local $4)
                          (get_local $2)
                        )
                        (set_local $9
                          (get_local $0)
                        )
                      )
                      (call $_abort)
                    )
                  )
                )
              )
              (if
                (get_local $7)
                (block
                  (if
                    (i32.eq
                      (get_local $6)
                      (i32.load
                        (tee_local $2
                          (i32.add
                            (i32.shl
                              (tee_local $0
                                (i32.load offset=28
                                  (get_local $6)
                                )
                              )
                              (i32.const 2)
                            )
                            (i32.const 3940)
                          )
                        )
                      )
                    )
                    (block
                      (i32.store
                        (get_local $2)
                        (get_local $9)
                      )
                      (if
                        (i32.eqz
                          (get_local $9)
                        )
                        (block
                          (i32.store
                            (i32.const 3640)
                            (i32.and
                              (i32.load
                                (i32.const 3640)
                              )
                              (i32.xor
                                (i32.shl
                                  (i32.const 1)
                                  (get_local $0)
                                )
                                (i32.const -1)
                              )
                            )
                          )
                          (br $do-once4)
                        )
                      )
                    )
                    (block
                      (if
                        (i32.lt_u
                          (get_local $7)
                          (i32.load
                            (i32.const 3652)
                          )
                        )
                        (call $_abort)
                      )
                      (if
                        (i32.eq
                          (i32.load
                            (tee_local $0
                              (i32.add
                                (get_local $7)
                                (i32.const 16)
                              )
                            )
                          )
                          (get_local $6)
                        )
                        (i32.store
                          (get_local $0)
                          (get_local $9)
                        )
                        (i32.store offset=20
                          (get_local $7)
                          (get_local $9)
                        )
                      )
                      (br_if $do-once4
                        (i32.eqz
                          (get_local $9)
                        )
                      )
                    )
                  )
                  (if
                    (i32.lt_u
                      (get_local $9)
                      (tee_local $2
                        (i32.load
                          (i32.const 3652)
                        )
                      )
                    )
                    (call $_abort)
                  )
                  (i32.store offset=24
                    (get_local $9)
                    (get_local $7)
                  )
                  (if
                    (tee_local $0
                      (i32.load
                        (tee_local $1
                          (i32.add
                            (get_local $6)
                            (i32.const 16)
                          )
                        )
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $0)
                        (get_local $2)
                      )
                      (call $_abort)
                      (block
                        (i32.store offset=16
                          (get_local $9)
                          (get_local $0)
                        )
                        (i32.store offset=24
                          (get_local $0)
                          (get_local $9)
                        )
                      )
                    )
                  )
                  (if
                    (tee_local $0
                      (i32.load offset=4
                        (get_local $1)
                      )
                    )
                    (if
                      (i32.lt_u
                        (get_local $0)
                        (i32.load
                          (i32.const 3652)
                        )
                      )
                      (call $_abort)
                      (block
                        (i32.store offset=20
                          (get_local $9)
                          (get_local $0)
                        )
                        (i32.store offset=24
                          (get_local $0)
                          (get_local $9)
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
        (i32.store offset=4
          (get_local $3)
          (i32.or
            (get_local $5)
            (i32.const 1)
          )
        )
        (i32.store
          (i32.add
            (get_local $3)
            (get_local $5)
          )
          (get_local $5)
        )
        (if
          (i32.eq
            (get_local $3)
            (i32.load
              (i32.const 3656)
            )
          )
          (block
            (i32.store
              (i32.const 3644)
              (get_local $5)
            )
            (return)
          )
          (set_local $2
            (get_local $5)
          )
        )
      )
    )
    (set_local $1
      (i32.shr_u
        (get_local $2)
        (i32.const 3)
      )
    )
    (if
      (i32.lt_u
        (get_local $2)
        (i32.const 256)
      )
      (block
        (set_local $0
          (i32.add
            (i32.shl
              (i32.shl
                (get_local $1)
                (i32.const 1)
              )
              (i32.const 2)
            )
            (i32.const 3676)
          )
        )
        (if
          (i32.and
            (tee_local $2
              (i32.load
                (i32.const 3636)
              )
            )
            (tee_local $1
              (i32.shl
                (i32.const 1)
                (get_local $1)
              )
            )
          )
          (if
            (i32.lt_u
              (tee_local $1
                (i32.load
                  (tee_local $2
                    (i32.add
                      (get_local $0)
                      (i32.const 8)
                    )
                  )
                )
              )
              (i32.load
                (i32.const 3652)
              )
            )
            (call $_abort)
            (block
              (set_local $15
                (get_local $2)
              )
              (set_local $13
                (get_local $1)
              )
            )
          )
          (block
            (i32.store
              (i32.const 3636)
              (i32.or
                (get_local $2)
                (get_local $1)
              )
            )
            (set_local $15
              (i32.add
                (get_local $0)
                (i32.const 8)
              )
            )
            (set_local $13
              (get_local $0)
            )
          )
        )
        (i32.store
          (get_local $15)
          (get_local $3)
        )
        (i32.store offset=12
          (get_local $13)
          (get_local $3)
        )
        (i32.store offset=8
          (get_local $3)
          (get_local $13)
        )
        (i32.store offset=12
          (get_local $3)
          (get_local $0)
        )
        (return)
      )
    )
    (set_local $0
      (i32.add
        (i32.shl
          (tee_local $1
            (if i32
              (tee_local $0
                (i32.shr_u
                  (get_local $2)
                  (i32.const 8)
                )
              )
              (if i32
                (i32.gt_u
                  (get_local $2)
                  (i32.const 16777215)
                )
                (i32.const 31)
                (i32.or
                  (i32.and
                    (i32.shr_u
                      (get_local $2)
                      (i32.add
                        (tee_local $0
                          (i32.add
                            (i32.sub
                              (i32.const 14)
                              (i32.or
                                (i32.or
                                  (tee_local $4
                                    (i32.and
                                      (i32.shr_u
                                        (i32.add
                                          (tee_local $1
                                            (i32.shl
                                              (get_local $0)
                                              (tee_local $0
                                                (i32.and
                                                  (i32.shr_u
                                                    (i32.add
                                                      (get_local $0)
                                                      (i32.const 1048320)
                                                    )
                                                    (i32.const 16)
                                                  )
                                                  (i32.const 8)
                                                )
                                              )
                                            )
                                          )
                                          (i32.const 520192)
                                        )
                                        (i32.const 16)
                                      )
                                      (i32.const 4)
                                    )
                                  )
                                  (get_local $0)
                                )
                                (tee_local $1
                                  (i32.and
                                    (i32.shr_u
                                      (i32.add
                                        (tee_local $0
                                          (i32.shl
                                            (get_local $1)
                                            (get_local $4)
                                          )
                                        )
                                        (i32.const 245760)
                                      )
                                      (i32.const 16)
                                    )
                                    (i32.const 2)
                                  )
                                )
                              )
                            )
                            (i32.shr_u
                              (i32.shl
                                (get_local $0)
                                (get_local $1)
                              )
                              (i32.const 15)
                            )
                          )
                        )
                        (i32.const 7)
                      )
                    )
                    (i32.const 1)
                  )
                  (i32.shl
                    (get_local $0)
                    (i32.const 1)
                  )
                )
              )
              (i32.const 0)
            )
          )
          (i32.const 2)
        )
        (i32.const 3940)
      )
    )
    (i32.store offset=28
      (get_local $3)
      (get_local $1)
    )
    (i32.store offset=20
      (get_local $3)
      (i32.const 0)
    )
    (i32.store offset=16
      (get_local $3)
      (i32.const 0)
    )
    (block $do-once12
      (if
        (i32.and
          (tee_local $4
            (i32.load
              (i32.const 3640)
            )
          )
          (tee_local $5
            (i32.shl
              (i32.const 1)
              (get_local $1)
            )
          )
        )
        (block
          (set_local $0
            (i32.load
              (get_local $0)
            )
          )
          (set_local $4
            (i32.sub
              (i32.const 25)
              (i32.shr_u
                (get_local $1)
                (i32.const 1)
              )
            )
          )
          (set_local $1
            (i32.shl
              (get_local $2)
              (if i32
                (i32.eq
                  (get_local $1)
                  (i32.const 31)
                )
                (i32.const 0)
                (get_local $4)
              )
            )
          )
          (block $__rjto$1
            (block $__rjti$1
              (block $__rjti$0
                (loop $while-in15
                  (br_if $__rjti$1
                    (i32.eq
                      (i32.and
                        (i32.load offset=4
                          (get_local $0)
                        )
                        (i32.const -8)
                      )
                      (get_local $2)
                    )
                  )
                  (set_local $4
                    (i32.shl
                      (get_local $1)
                      (i32.const 1)
                    )
                  )
                  (br_if $__rjti$0
                    (i32.eqz
                      (tee_local $5
                        (i32.load
                          (tee_local $1
                            (i32.add
                              (i32.add
                                (get_local $0)
                                (i32.const 16)
                              )
                              (i32.shl
                                (i32.shr_u
                                  (get_local $1)
                                  (i32.const 31)
                                )
                                (i32.const 2)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                  (set_local $1
                    (get_local $4)
                  )
                  (set_local $0
                    (get_local $5)
                  )
                  (br $while-in15)
                )
              )
              (if
                (i32.lt_u
                  (get_local $1)
                  (i32.load
                    (i32.const 3652)
                  )
                )
                (call $_abort)
                (block
                  (i32.store
                    (get_local $1)
                    (get_local $3)
                  )
                  (i32.store offset=24
                    (get_local $3)
                    (get_local $0)
                  )
                  (i32.store offset=12
                    (get_local $3)
                    (get_local $3)
                  )
                  (i32.store offset=8
                    (get_local $3)
                    (get_local $3)
                  )
                  (br $do-once12)
                )
              )
              (br $__rjto$1)
            )
            (if
              (i32.and
                (i32.ge_u
                  (tee_local $2
                    (i32.load
                      (tee_local $1
                        (i32.add
                          (get_local $0)
                          (i32.const 8)
                        )
                      )
                    )
                  )
                  (tee_local $4
                    (i32.load
                      (i32.const 3652)
                    )
                  )
                )
                (i32.ge_u
                  (get_local $0)
                  (get_local $4)
                )
              )
              (block
                (i32.store offset=12
                  (get_local $2)
                  (get_local $3)
                )
                (i32.store
                  (get_local $1)
                  (get_local $3)
                )
                (i32.store offset=8
                  (get_local $3)
                  (get_local $2)
                )
                (i32.store offset=12
                  (get_local $3)
                  (get_local $0)
                )
                (i32.store offset=24
                  (get_local $3)
                  (i32.const 0)
                )
              )
              (call $_abort)
            )
          )
        )
        (block
          (i32.store
            (i32.const 3640)
            (i32.or
              (get_local $4)
              (get_local $5)
            )
          )
          (i32.store
            (get_local $0)
            (get_local $3)
          )
          (i32.store offset=24
            (get_local $3)
            (get_local $0)
          )
          (i32.store offset=12
            (get_local $3)
            (get_local $3)
          )
          (i32.store offset=8
            (get_local $3)
            (get_local $3)
          )
        )
      )
    )
    (i32.store
      (i32.const 3668)
      (tee_local $0
        (i32.add
          (i32.load
            (i32.const 3668)
          )
          (i32.const -1)
        )
      )
    )
    (if
      (get_local $0)
      (return)
      (set_local $0
        (i32.const 4092)
      )
    )
    (loop $while-in17
      (set_local $0
        (i32.add
          (tee_local $2
            (i32.load
              (get_local $0)
            )
          )
          (i32.const 8)
        )
      )
      (br_if $while-in17
        (get_local $2)
      )
    )
    (i32.store
      (i32.const 3668)
      (i32.const -1)
    )
  )
  (func $runPostSets
    (nop)
  )
  (func $_sbrk (param $0 i32) (result i32)
    (local $1 i32)
    (local $2 i32)
    (set_local $1
      (i32.add
        (tee_local $2
          (i32.load
            (get_global $DYNAMICTOP_PTR)
          )
        )
        (tee_local $0
          (i32.and
            (i32.add
              (get_local $0)
              (i32.const 15)
            )
            (i32.const -16)
          )
        )
      )
    )
    (if
      (i32.or
        (i32.and
          (i32.gt_s
            (get_local $0)
            (i32.const 0)
          )
          (i32.lt_s
            (get_local $1)
            (get_local $2)
          )
        )
        (i32.lt_s
          (get_local $1)
          (i32.const 0)
        )
      )
      (block
        (drop
          (call $abortOnCannotGrowMemory)
        )
        (call $___setErrNo
          (i32.const 12)
        )
        (return
          (i32.const -1)
        )
      )
    )
    (i32.store
      (get_global $DYNAMICTOP_PTR)
      (get_local $1)
    )
    (if
      (i32.gt_s
        (get_local $1)
        (call $getTotalMemory)
      )
      (if
        (i32.eqz
          (call $enlargeMemory)
        )
        (block
          (call $___setErrNo
            (i32.const 12)
          )
          (i32.store
            (get_global $DYNAMICTOP_PTR)
            (get_local $2)
          )
          (return
            (i32.const -1)
          )
        )
      )
    )
    (get_local $2)
  )
  (func $_memset (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (local $4 i32)
    (local $5 i32)
    (set_local $4
      (i32.add
        (get_local $0)
        (get_local $2)
      )
    )
    (if
      (i32.ge_s
        (get_local $2)
        (i32.const 20)
      )
      (block
        (set_local $1
          (i32.and
            (get_local $1)
            (i32.const 255)
          )
        )
        (if
          (tee_local $3
            (i32.and
              (get_local $0)
              (i32.const 3)
            )
          )
          (block
            (set_local $3
              (i32.sub
                (i32.add
                  (get_local $0)
                  (i32.const 4)
                )
                (get_local $3)
              )
            )
            (loop $while-in
              (if
                (i32.lt_s
                  (get_local $0)
                  (get_local $3)
                )
                (block
                  (i32.store8
                    (get_local $0)
                    (get_local $1)
                  )
                  (set_local $0
                    (i32.add
                      (get_local $0)
                      (i32.const 1)
                    )
                  )
                  (br $while-in)
                )
              )
            )
          )
        )
        (set_local $3
          (i32.or
            (i32.or
              (i32.or
                (get_local $1)
                (i32.shl
                  (get_local $1)
                  (i32.const 8)
                )
              )
              (i32.shl
                (get_local $1)
                (i32.const 16)
              )
            )
            (i32.shl
              (get_local $1)
              (i32.const 24)
            )
          )
        )
        (set_local $5
          (i32.and
            (get_local $4)
            (i32.const -4)
          )
        )
        (loop $while-in1
          (if
            (i32.lt_s
              (get_local $0)
              (get_local $5)
            )
            (block
              (i32.store
                (get_local $0)
                (get_local $3)
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 4)
                )
              )
              (br $while-in1)
            )
          )
        )
      )
    )
    (loop $while-in3
      (if
        (i32.lt_s
          (get_local $0)
          (get_local $4)
        )
        (block
          (i32.store8
            (get_local $0)
            (get_local $1)
          )
          (set_local $0
            (i32.add
              (get_local $0)
              (i32.const 1)
            )
          )
          (br $while-in3)
        )
      )
    )
    (i32.sub
      (get_local $0)
      (get_local $2)
    )
  )
  (func $_memcpy (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (local $3 i32)
    (if
      (i32.ge_s
        (get_local $2)
        (i32.const 4096)
      )
      (return
        (call $_emscripten_memcpy_big
          (get_local $0)
          (get_local $1)
          (get_local $2)
        )
      )
    )
    (set_local $3
      (get_local $0)
    )
    (if
      (i32.eq
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.and
          (get_local $1)
          (i32.const 3)
        )
      )
      (block
        (loop $while-in
          (if
            (i32.and
              (get_local $0)
              (i32.const 3)
            )
            (block
              (if
                (i32.eqz
                  (get_local $2)
                )
                (return
                  (get_local $3)
                )
              )
              (i32.store8
                (get_local $0)
                (i32.load8_s
                  (get_local $1)
                )
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 1)
                )
              )
              (set_local $1
                (i32.add
                  (get_local $1)
                  (i32.const 1)
                )
              )
              (set_local $2
                (i32.sub
                  (get_local $2)
                  (i32.const 1)
                )
              )
              (br $while-in)
            )
          )
        )
        (loop $while-in1
          (if
            (i32.ge_s
              (get_local $2)
              (i32.const 4)
            )
            (block
              (i32.store
                (get_local $0)
                (i32.load
                  (get_local $1)
                )
              )
              (set_local $0
                (i32.add
                  (get_local $0)
                  (i32.const 4)
                )
              )
              (set_local $1
                (i32.add
                  (get_local $1)
                  (i32.const 4)
                )
              )
              (set_local $2
                (i32.sub
                  (get_local $2)
                  (i32.const 4)
                )
              )
              (br $while-in1)
            )
          )
        )
      )
    )
    (loop $while-in3
      (if
        (i32.gt_s
          (get_local $2)
          (i32.const 0)
        )
        (block
          (i32.store8
            (get_local $0)
            (i32.load8_s
              (get_local $1)
            )
          )
          (set_local $0
            (i32.add
              (get_local $0)
              (i32.const 1)
            )
          )
          (set_local $1
            (i32.add
              (get_local $1)
              (i32.const 1)
            )
          )
          (set_local $2
            (i32.sub
              (get_local $2)
              (i32.const 1)
            )
          )
          (br $while-in3)
        )
      )
    )
    (get_local $3)
  )
  (func $_pthread_self (result i32)
    (i32.const 0)
  )
  (func $dynCall_ii (param $0 i32) (param $1 i32) (result i32)
    (call_indirect $FUNCSIG$ii
      (get_local $1)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 1)
        )
        (i32.const 0)
      )
    )
  )
  (func $dynCall_iiii (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
    (call_indirect $FUNCSIG$iiii
      (get_local $1)
      (get_local $2)
      (get_local $3)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 3)
        )
        (i32.const 2)
      )
    )
  )
  (func $dynCall_vi (param $0 i32) (param $1 i32)
    (call_indirect $FUNCSIG$vi
      (get_local $1)
      (i32.add
        (i32.and
          (get_local $0)
          (i32.const 1)
        )
        (i32.const 6)
      )
    )
  )
  (func $b0 (param $0 i32) (result i32)
    (call $abort
      (i32.const 0)
    )
    (i32.const 0)
  )
  (func $b1 (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
    (call $abort
      (i32.const 1)
    )
    (i32.const 0)
  )
  (func $b2 (param $0 i32)
    (call $abort
      (i32.const 2)
    )
  )
)
