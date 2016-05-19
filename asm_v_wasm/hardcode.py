
def process(filename):
  js = open(filename).read()
  replaced = js.replace("run();", "run([].concat(Module[\"arguments\"]));")
  assert js != replaced
  open(filename, 'w').write(replaced)
import sys
process(sys.argv[1])
