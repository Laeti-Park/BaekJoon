caseNum = int(input())

arr = []
for i in range(caseNum):
    temp = list(input())
    if i == 0:
        arr = temp
    else:
        for j in range(len(arr)):
            if arr[j] != temp[j]:
                arr[j] = '?'

print("".join(arr))