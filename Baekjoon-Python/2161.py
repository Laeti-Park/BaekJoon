case = int(input())
queue = []
for i in range(case):
    queue.append(i)

while (len(queue) != 1):
    print(queue.pop(0)+1, end=' ')
    queue.append(queue.pop(0))

print(queue.pop()+1)