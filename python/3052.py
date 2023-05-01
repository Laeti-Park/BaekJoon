num = [0 for i in range(10)]
for i in range(10):
    num[i] = int(input())
for i in range(10):
    num[i] = num[i] % 42
num = set(num)
print(len(num))