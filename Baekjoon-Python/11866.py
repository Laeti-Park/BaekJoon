n, k = map(int, input().split())
queue = []

for i in range(1, n+1):
    queue.append(i)

arr = "<"
i = 0
while (len(queue) != 1):
    i += k - 1
    if i >= n:
        i = i % n
    arr += str(queue.pop(i)) + ", "
    n -= 1
arr += str(queue.pop()) + ">"

print(arr)
