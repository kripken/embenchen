
      #include <stdio.h>
      #include <stdlib.h>

      int main(int argc, char *argv[]) {
        int arg = argc > 1 ? argv[1][0] - '0' : 3;
        switch(arg) {
          case 0: return 0; break;
          case 1: arg = 3*75; break;
          case 2: arg = 3*625; break;
          case 3: arg = 3*1250; break;
          case 4: arg = 3*5*1250; break;
          case 5: arg = 3*10*1250; break;
          default: printf("error: %d\\n", arg); return -1;
        }

        int x = 0;

        for (int j = 0; j < 27000; j++) {
          for (int i = 0; i < arg; i++) {
            if (((x*x+11) % 3 == 0) | ((x*(x+2)+17) % 5 == 0)) {
              x += 2;
            } else {
              x++;
            }
          }
        }

        printf("ok %d\n", x);

        return x;
      }
    