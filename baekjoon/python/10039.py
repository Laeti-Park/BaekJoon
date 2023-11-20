sum = 0

for i in range(5):
    num = int(input())
    if num >= 40:
        sum += num
    else:
        sum += 40

print(sum // 5)