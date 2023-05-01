# 1996번 지뢰 찾기

caseNum = int(input())

ground = []
answer = [[] for _ in range(caseNum)]
nearGround = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]

for i in range(caseNum):
    ground.append(list(input()))

for i in range(caseNum):
    for j in range(caseNum):
        if ground[i][j] != ".":
            answer[i].append("*")
        else:           
            count = 0
            for k in nearGround:
                if ((i + k[0]) >= 0 and
                    (j + k[1]) >= 0 and
                    (i + k[0]) <= (caseNum-1) and
                    (j + k[1]) <= (caseNum-1) and
                        ground[i + k[0]][j + k[1]] != "."):
                    count += int(ground[i + k[0]][j + k[1]])
            if count > 9:
                count = "M"
            answer[i].append(str(count))

for i in answer:
    print(*i, sep='')
