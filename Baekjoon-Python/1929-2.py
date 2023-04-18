import sys

input = sys.stdin.readline
minNum, maxNum = map(int, input().split())
ListNum = [True] * (maxNum+1)
ListNum[0] = False
ListNum[1] = False

for i in range(2, int(maxNum**0.5) + 1):
    if ListNum[i]:
        for j in range(i*2, maxNum+1, i):
            ListNum[j] = False

for i in range(minNum, maxNum+1):
    if ListNum[i]:
        print(i)
