import math

n, k = map(int, input().split())

a = math.factorial(n)
b = math.factorial(k)
c = math.factorial(n-k)

print(a // b // c)