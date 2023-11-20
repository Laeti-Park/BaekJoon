# 

from collections import deque

N = int(input())
queue = deque([i for i in range(N)])

while (len(queue) != 1):
    queue.popleft()
    queue.append(queue.popleft())

print(queue.popleft() + 1)
