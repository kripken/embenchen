
      #include <stdio.h>
      #include <stdlib.h>

      volatile int x = 0;

      __attribute__ ((noinline)) int calc() {
        return (x++) & 16384;
      }

      int main(int argc, char *argv[]) {
        int arg = argc > 1 ? argv[1][0] - '0' : 3;
        switch(arg) {
          case 0: return 0; break;
          case 1: arg = 75; break;
          case 2: arg = 625; break;
          case 3: arg = 1250; break;
          case 4: arg = 5*1250; break;
          case 5: arg = 10*1250; break;
          default: printf("error: %d\\n", arg); return -1;
        }

        int sum = 0;

        for (int j = 0; j < 27000; j++) {
          for (int i = 0; i < arg; i++) {
            if (calc() && calc()) {
              sum += 17;
            } else {
              sum += 19;
            }
            if (calc() || calc()) {
              sum += 23;
            }
          }
        }

        printf("ok\n");

        return sum;
      }
    