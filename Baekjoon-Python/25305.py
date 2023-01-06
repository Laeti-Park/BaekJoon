n, k = map(int, input().split())

input_arr = map(int, input().split())
arr = list(input_arr)
arr.sort(reverse=True)
print(arr[k-1])
