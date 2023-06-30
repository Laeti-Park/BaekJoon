K, N = map(int, input().split())

array = []

for i in range(K):
    array.append(int(input()))

minNum = 1
maxNum = max(array)

while minNum <= maxNum:
    sum = 0
    midNum = (minNum + maxNum) // 2

    for i in array:
        sum += i // midNum

    if N <= sum:
        minNum = midNum + 1
    else:
        maxNum = midNum - 1

print(maxNum)
