lst = [-1 for i in range(26)]
case = str(input())
for i in range(len(case)):
    if (lst[ord(case[i])-97] == -1):
        lst[ord(case[i])-97] = i
print(' '.join(map(str, lst)))