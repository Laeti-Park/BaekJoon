n = int(input())
sum = 0
f_1 = 0
f_2 = 0

for i in range(1, n+1):
    if i == 1:
        sum = 1
        f_2 = 1
    else:
        sum = f_1 + f_2
        f_1 = f_2
        f_2 = sum

print(sum)
