# 주유소

N = int(input())
road = list(map(int, input().split()))
city = list(map(int, input().split()))
price = 0
answer = 0

for i in range(N-1):
    if i == 0:
        price = city[i]
        answer += road[i] * city[i]
    else:
        if city[i] > price:
            answer += road[i] * price
        else:
            price = city[i]
            answer += road[i] * price

print(answer)
