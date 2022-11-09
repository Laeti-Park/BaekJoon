list = []
sum = 0

for i in range(0, 5):
    list.append(int(input()))

for i in range(0, 5):
    sum += list[i]

list.sort()
print(sum//5)
print(list[2])
