N = int(input())
charge = 0

if N / 500 >= 1:
    charge += N // 500
    N %= 500
if N / 100 >= 1:
    charge += N // 100
    N %= 100
if N / 50 >= 1:
    charge += N // 50
    N %= 50
if N / 10 >= 1:
    charge += N // 10

print(charge)
