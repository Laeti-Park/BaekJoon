N = int(input())

count = 0
answer = []


def hanoi(n, fromPos, toPos, auxPos):
    global count, answer
    count += 1

    if n == 1:
        answer.append((fromPos, toPos))
        return

    hanoi(n - 1, fromPos, auxPos, toPos)
    answer.append((fromPos, toPos))
    hanoi(n - 1, auxPos, toPos, fromPos)


hanoi(N, 1, 3, 2)
print(count)
for line in answer:
    print(line[0], line[1])
