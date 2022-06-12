case = int(input())

for i in range(case):
    ans = input()
    score = 0
    add = 0
    for j in range(len(ans)):
        if(ans[j] == 'O'):
            if(j != 0 and ans[j] == ans[j-1]):
                add = int(add + 1)
            score = int(score + add + 1)
        else:
            add = 0
    print(score)
