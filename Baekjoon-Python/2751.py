import sys

num = int(input())
list = []

for i in range(num):
    list.append(int(sys.stdin.readline()))

for i in sorted(list):
    sys.stdout.write(str(i)+'\n')