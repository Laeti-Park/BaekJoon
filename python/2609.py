# 2609번 최대공약수와 최소공배수

a, b = map(int, input().split())

if a < b:
    temp = a
    a = b
    b = temp

c, d = a, b

while b != 0:
    n = a % b
    a = b
    b = n

print(a, c * (d // a))