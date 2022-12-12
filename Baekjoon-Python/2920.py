arr = list(map(int, input().split()))
ascending = list(range(1, 9))
descending = list(range(8, 0, -1))
if arr == ascending:
    print('ascending')
elif arr == descending:
    print('descending')
else:
    print('mixed')