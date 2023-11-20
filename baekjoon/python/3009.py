a1, b1 = map(int, input().split())
a2, b2 = map(int, input().split())
a3, b3 = map(int, input().split())
a4, b4 = 0, 0

if (a1 == a2):
    a4 = a3
elif (a2 == a3):
    a4 = a1
else:
    a4 = a2

if (b1 == b2):
    b4 = b3
elif (b2 == b3):
    b4 = b1
else:
    b4 = b2

print(str(a4) + " " + str(b4))
