from sys import stdin
input = stdin.readline

N = int(input())

mode = {}
array = []

for i in range(N):
    num = int(input())
    array.append(num)
    if num in mode:
        mode[num] += 1
    else:
        mode[num] = 1
array = sorted(array)

print(round(sum(array)/N))
print(array[len(array) // 2])

modeNum = 0
for k in mode.keys():
    if mode[k] > modeNum:
        modeNum = mode[k]

temp = list(filter(lambda x: mode[x] == modeNum, mode.keys()))
temp = sorted(temp)

if len(temp) > 1:
    print(temp[1])
else:
    print(temp[0])

print(array[-1] - array[0])
