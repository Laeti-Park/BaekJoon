max_num = 0
col, row = 0, 0

for i in range(9):
    arr = list(map(int, input().split()))
    if (max_num <= max(arr)):
        max_num = max(arr)
        col = arr.index(max(arr))
        row = i


print(max_num)
print(row + 1)
print(col + 1)
