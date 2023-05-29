# 9012번 괄호

N = int(input())

for i in range(N):
    parenthesis = 0
    array = input()
    for i in range(len(array)):
        if array[i] == "(":
            parenthesis += 1
        else:
            parenthesis -= 1

        if parenthesis < 0:
            break
    
    if parenthesis == 0:
        print("YES")
    else:
        print("NO")