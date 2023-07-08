import sys

N = int(sys.stdin.readline())
array1 = list(map(int, sys.stdin.readline().split()))

M = int(sys.stdin.readline())
array2 = list(map(int, sys.stdin.readline().split()))

hash = {}
for i in array1:
    if i in hash:
        hash[i] += 1
    else:
        hash[i] = 1

for i in array2:
    if i in hash:
        print(hash[i], end=' ')
    else:
        print(0, end=' ')
