# 2750번 수 정렬하기-1

num = int(input())
list = []

for i in range(num):
    list.append(int(input()))

list.sort()

for i in range(num):
    print(list[i])