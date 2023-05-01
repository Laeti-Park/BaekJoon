case = int(input())
num = list(map(int, input().split()))  # 공백으로 나누어 int형 리스트를 만든다.
max = int(num[0])
for i in range(case):
    if max < num[i]:
        max = num[i]

avg = float(sum(num) / max * 100 / case)
print(avg)