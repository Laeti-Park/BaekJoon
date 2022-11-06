num = int(input())
N = list(map(int, input().split(' ')))
N.sort()
list = []
sum = 0

for i in range(len(N)):
    if i == 0:
        list.append(int(N[i]))
    else:
        list.append(int(list[i-1]) + int(N[i]))
    sum += list[i]

print(sum)
