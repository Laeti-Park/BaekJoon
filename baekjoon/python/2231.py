# 2231번 분해합

N = int(input())

digits = len(str(N))
if N % (10 ** digits) == 0:
    digits -= 1
answer = 0

for i in range(1, digits * 9):
    num = N - i
    if num <= 0:
        break
    temp = num
    for j in range(digits):
        temp += num // (10 ** j) % 10
    if N == temp:
        answer = num

print(answer)
