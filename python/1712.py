case = case = list(map(int, input().split()))
if case[1] > case[2]:
    print(-1)
elif case[2] - case[1] == 0:
    print(-1)
else:
    print(int(case[0]/(case[2] - case[1]) + 1))