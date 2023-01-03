case = int(input())
for i in range(case):
    n, m = map(int, input().split())
    queue = list(map(int, input().split()))
    count = 0

    while(m != -1):
        if queue[0] == max(queue):
            queue.pop(0)
            m -= 1
            count += 1
        else:
            queue.append(queue.pop(0))

            if m == 0:
                m = len(queue) - 1
            else:
                m -= 1

    print(count)
