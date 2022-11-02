case = input().split()
N = int(case[0])
K = int(case[1])

price = []
count = 0
for i in range(N):
    price.append(int(input()))

price.sort(reverse=True)

for i in price:
    count += K // i
    K %= i

print(count)