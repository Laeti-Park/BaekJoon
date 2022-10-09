case = int(input())

ans = 0
for i in range(case):
    if (i+1 < 100):
        ans += 1
    elif (i+1 == 1000):
        break
    else:
        temp = i+1
        lst = list()
        while (temp != 0):
            lst.append(temp % 10)
            temp = int(temp / 10)
        if (lst[2]-lst[1] == lst[1] - lst[0]):
            ans += 1
print(ans)