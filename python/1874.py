# 1874번 스택 수열

N = int(input())

result = []
temp = []
count = 1
stack = True

for i in range(N):
    num = int(input())
    while count <= num:
        temp.append(count)
        result.append("+")
        count += 1
    if temp[-1] == num:
        temp.pop()
        result.append("-")
    else:
        stack = False

if stack:
    for item in result:
        print(item)
else:
    print("NO")
