X = int(input())
n = int(input())
sum = 0

for i in range(n):

    thing = input().split(' ')

    price = int(thing[0])
    count = int(thing[1])
    sum += price * count

if X == sum: print("Yes")
else: print("No")